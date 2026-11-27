import * as THREE from 'three';
import { SoundEngine } from '../audio/SoundEngine';
import { BikeModel } from '../bike/BikeModel';
import { getBikeById, getEffectiveBikeSpec } from '../data/bikes';
import {
  deleteReplay,
  getBikeLivery,
  getBikeUpgrades,
  loadProfile,
  loadReplays,
  saveProfile,
  saveReplay,
} from '../data/storage';
import { getZoneMeta } from '../data/zones';
import { ParticleSystem } from '../effects/ParticleSystem';
import { InputManager } from '../input/InputManager';
import { BikePhysics } from '../physics/BikePhysics';
import { interpolateReplayFrame, ReplayRecorder } from '../replay/ReplaySystem';
import {
  BikePhysicsState,
  CameraMode,
  ChallengeDef,
  PlayerProfile,
  RunStats,
  SavedReplay,
  TrickPopup,
  ZoneId,
} from '../types';
import { buildWorld } from '../world/WorldBuilder';
import { WorldData } from '../world/ZoneStructures';

export type EngineMode = 'menu' | 'garage' | 'riding' | 'replay';
export type ReplayCamMode = 'chase' | 'orbit' | 'helmet' | 'trackside';

export interface ToastNotice {
  id: number;
  title: string;
  subtitle: string;
  accent: string;
  timeLeft: number;
}

export interface EngineCallbacks {
  onHudUpdate: () => void;
  onModeChange: (mode: EngineMode) => void;
  onRunFinished: (stats: RunStats, newRecord: boolean, coinsEarned: number) => void;
  onPauseChange: (paused: boolean) => void;
  onProfileChange: (profile: PlayerProfile) => void;
  onReplaysChange: (replays: SavedReplay[]) => void;
}

export class GameEngine {
  public profile: PlayerProfile;
  public replays: SavedReplay[];
  public mode: EngineMode = 'menu';
  public paused = false;

  public input: InputManager;
  public sound: SoundEngine;
  public physics: BikePhysics;
  public world: WorldData | null = null;
  public currentZoneId: ZoneId = 'training_hall';
  public runStats: RunStats;
  public trickPopups: TrickPopup[] = [];
  public toasts: ToastNotice[] = [];

  // Replay playback state
  public activeReplay: SavedReplay | null = null;
  public replayTime = 0;
  public replayPlaying = true;
  public replaySpeed = 1.0;
  public replayCam: ReplayCamMode = 'chase';

  // Garage interactive orbit (starts at crisp side profile matching workshop reference!)
  public garageYaw = Math.PI * 0.5;
  public garagePitch = 0.08;
  private garageDragging = false;
  private garageLastX = 0;
  private garageLastY = 0;
  private clearedLogIds = new Set<string>();

  private canvas: HTMLCanvasElement;
  private visorMudEl: HTMLElement | null;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private sunLight: THREE.DirectionalLight;
  private ambientLight: THREE.HemisphereLight;
  private skyDome: THREE.Mesh;
  private skyUniforms: {
    topColor: { value: THREE.Color };
    bottomColor: { value: THREE.Color };
  };

  private bikeModel: BikeModel;
  private particles: ParticleSystem;
  private recorder = new ReplayRecorder();
  private garagePedestal: THREE.Group;

  private callbacks: EngineCallbacks;
  private rafId = 0;
  private lastFrameTime = 0;
  private physicsAccum = 0;
  private worldTime = 0;
  private nextPopupId = 1;
  private nextToastId = 1;

  // Smooth camera tracking vectors
  private camPos = new THREE.Vector3();
  private camLook = new THREE.Vector3();
  private camInitialized = false;
  private camShake = 0;
  private fpRollSmooth = 0;
  private fpPitchSmooth = 0;
  private replayState: BikePhysicsState;

  // Session marker for practicing jumps/sections
  private sessionMarker: { x: number; y: number; z: number; yaw: number } | null = null;
  private lastCheckpointPose: { x: number; y: number; z: number; yaw: number } = {
    x: 0,
    y: 1,
    z: 0,
    yaw: 0,
  };
  private hudTickAccum = 0;
  private runCoinsEarned = 0;

  constructor(canvas: HTMLCanvasElement, visorMudEl: HTMLElement | null, callbacks: EngineCallbacks) {
    this.canvas = canvas;
    this.visorMudEl = visorMudEl;
    this.callbacks = callbacks;
    this.profile = loadProfile();
    this.replays = loadReplays();

    this.input = new InputManager();
    this.input.setTiltEnabled(this.profile.settings.tiltSteering);
    this.sound = new SoundEngine();
    this.sound.setVolume(this.profile.settings.volume);

    // Three.js Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = this.profile.settings.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.profile.settings.fov,
      window.innerWidth / window.innerHeight,
      0.08,
      650
    );

    // Gradient Sky Dome
    this.skyUniforms = {
      topColor: { value: new THREE.Color(0x0c4a6e) },
      bottomColor: { value: new THREE.Color(0xfde68a) },
    };
    const skyGeo = new THREE.SphereGeometry(520, 24, 16);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          float t = pow(max(h, 0.0), 0.55);
          gl_FragColor = vec4(mix(bottomColor, topColor, t), 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.skyDome = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(this.skyDome);

    // Lighting
    this.ambientLight = new THREE.HemisphereLight(0xdbeafe, 0x3b2f26, 0.85);
    this.scene.add(this.ambientLight);

    this.sunLight = new THREE.DirectionalLight(0xfff5e1, 2.0);
    this.sunLight.castShadow = this.profile.settings.shadows;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 5;
    this.sunLight.shadow.camera.far = 260;
    const d = 62;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    // Bike & Physics
    const spec = this.getActiveBikeSpec();
    const upgrades = getBikeUpgrades(this.profile, this.profile.selectedBikeId);
    const livery = getBikeLivery(this.profile, this.profile.selectedBikeId);
    this.bikeModel = new BikeModel(spec, upgrades, livery);
    this.scene.add(this.bikeModel.root);

    this.physics = new BikePhysics(spec, {
      onHop: (charge) => this.handleHop(charge),
      onLanding: (q, imp, h, t, isDrop) => this.handleLanding(q, imp, h, t, isDrop),
      onPumpBoost: (gain) => this.handlePumpBoost(gain),
      onTrick: (name, pts, col) => this.handleTrick(name, pts, col),
      onManualComplete: (timeSec, dist) => this.handleManualComplete(timeSec, dist),
      onStoppieComplete: (timeSec) => this.handleStoppieComplete(timeSec),
      onCrash: (reason) => this.handleCrash(reason),
    });
    this.replayState = { ...this.physics.state };

    this.particles = new ParticleSystem();
    this.scene.add(this.particles.points);

    // Warm Wooden Workshop Garage Backdrop (matching Image 1!)
    this.garagePedestal = this.createGarageWorkshop();
    this.garagePedestal.visible = false;
    this.scene.add(this.garagePedestal);

    this.runStats = this.createEmptyRunStats('training_hall');

    // Load Ground Park (Alpine Valley) as default 3D backdrop!
    this.loadZoneWorld('training_hall');
    this.positionBikeAtSpawn();

    // Pointer events for interactive garage orbit + audio unlock
    window.addEventListener('resize', this.onResize);
    window.addEventListener('pointerdown', this.onPointerDown);
    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);

    this.lastFrameTime = performance.now();
    this.rafId = requestAnimationFrame(this.loop);
  }

  private createGarageWorkshop(): THREE.Group {
    const g = new THREE.Group();
    const woodWallMat = new THREE.MeshStandardMaterial({ color: 0x6b3a17, roughness: 0.88, flatShading: true });
    const woodSlatMat = new THREE.MeshStandardMaterial({ color: 0x572e11, roughness: 0.9, flatShading: true });
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x523620, roughness: 0.92, flatShading: true });
    const pegboardMat = new THREE.MeshStandardMaterial({ color: 0xd9853b, roughness: 0.78, flatShading: true });
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x854d1e, roughness: 0.85, flatShading: true });
    const redBoxMat = new THREE.MeshStandardMaterial({ color: 0xdc3b3b, roughness: 0.45, flatShading: true });
    const darkTireMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9, flatShading: true });

    // Workshop floor
    const floor = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.2, 8.5), floorMat);
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    g.add(floor);

    // Wood-slat back wall on -X side (behind bike when viewed from +X!)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(0.25, 4.8, 9.0), woodWallMat);
    backWall.position.set(-2.2, 2.3, 0);
    backWall.receiveShadow = true;
    g.add(backWall);

    for (let i = -9; i <= 9; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.05, 4.8, 0.04), woodSlatMat);
      slat.position.set(-2.06, 2.3, i * 0.45);
      g.add(slat);
    }

    // Orange Tool Pegboard + hanging low-poly tools (hammer, wrenches, pliers!)
    const peg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.35, 2.2), pegboardMat);
    peg.position.set(-2.02, 2.05, -1.65);
    g.add(peg);

    const toolHandleMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.7, flatShading: true });
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.6, flatShading: true });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.6, flatShading: true });
    const steelMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.35, metalness: 0.7, flatShading: true });

    // Hammer
    const hammerHandle = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.52, 0.06), toolHandleMat);
    hammerHandle.position.set(-1.95, 2.08, -2.05);
    const hammerHead = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.24), steelMat);
    hammerHead.position.set(-1.95, 2.35, -2.05);
    // Pliers & Wrenches
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.05), pinkMat);
    p1.position.set(-1.95, 2.08, -1.65);
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.42, 0.05), blueMat);
    p2.position.set(-1.95, 2.08, -1.35);
    const wrench = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.08, 0.85), steelMat);
    wrench.position.set(-1.95, 1.62, -1.55);
    g.add(hammerHandle, hammerHead, p1, p2, wrench);

    // Wooden Workbench + Red Toolbox
    const benchTop = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.1, 2.8), benchMat);
    benchTop.position.set(-1.62, 1.05, -1.55);
    benchTop.castShadow = true;
    const redBox = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.38, 0.68), redBoxMat);
    redBox.position.set(-1.62, 1.29, -1.32);
    redBox.castShadow = true;
    g.add(benchTop, redBox);

    // Spare tires hanging on the right side of the wall
    for (let i = 0; i < 2; i++) {
      const spareTire = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.085, 8, 18), darkTireMat);
      spareTire.rotation.y = Math.PI / 2;
      spareTire.position.set(-1.95, 1.75 - i * 0.32, 1.9 + i * 0.42);
      spareTire.castShadow = true;
      g.add(spareTire);
    }

    // Warm overhead workshop point light + green metal shade
    const shade = new THREE.Mesh(
      new THREE.ConeGeometry(0.32, 0.2, 8),
      new THREE.MeshStandardMaterial({ color: 0x164e3f, roughness: 0.4, flatShading: true })
    );
    shade.position.set(-0.9, 3.05, -1.2);
    const warmLight = new THREE.PointLight(0xffbe76, 8.5, 12, 1.6);
    warmLight.position.set(1.2, 2.6, 0.8);
    g.add(shade, warmLight);

    return g;
  }

  private createEmptyRunStats(zoneId: ZoneId): RunStats {
    const worldCps = this.world?.checkpoints.length ?? 4;
    return {
      zoneId,
      elapsedTime: 0,
      score: 0,
      comboScore: 0,
      comboCount: 0,
      comboTricks: [],
      maxSpeedKmh: 0,
      maxAirHeight: 0,
      maxAirTime: 0,
      bunnyHops: 0,
      maxManualTime: 0,
      maxManualDist: 0,
      maxStoppieTime: 0,
      logsCleared: 0,
      barspins: 0,
      whips: 0,
      backflips: 0,
      frontflips: 0,
      tabletops: 0,
      pumpBoosts: 0,
      cleanLandings: 0,
      dropStomps: 0,
      mudDistance: 0,
      woodDistance: 0,
      crashes: 0,
      finished: false,
      finishTime: 0,
      currentCheckpoint: 0,
      totalCheckpoints: worldCps,
      collectedTagIds: Object.keys(this.profile.collectedTags).filter((k) => this.profile.collectedTags[k]),
    };
  }

  public getActiveBikeSpec() {
    const base = getBikeById(this.profile.selectedBikeId);
    const upg = getBikeUpgrades(this.profile, base.id);
    return getEffectiveBikeSpec(base, upg);
  }

  public refreshBikeAppearance(): void {
    const spec = this.getActiveBikeSpec();
    const upg = getBikeUpgrades(this.profile, this.profile.selectedBikeId);
    const liv = getBikeLivery(this.profile, this.profile.selectedBikeId);
    this.physics.setSpec(spec);
    this.bikeModel.rebuild(spec, upg, liv);
    this.bikeModel.setFirstPerson(
      this.mode === 'riding' && this.profile.settings.cameraMode === 'first_person'
    );
  }

  public applySettings(): void {
    this.renderer.shadowMap.enabled = this.profile.settings.shadows;
    this.sunLight.castShadow = this.profile.settings.shadows;
    this.camera.fov = this.profile.settings.fov;
    this.camera.updateProjectionMatrix();
    this.sound.setVolume(this.profile.settings.volume);
    this.input.setTiltEnabled(this.profile.settings.tiltSteering);
    this.bikeModel.setFirstPerson(
      this.mode === 'riding' && this.profile.settings.cameraMode === 'first_person'
    );
    saveProfile(this.profile);
    this.callbacks.onProfileChange(this.profile);
  }

  public loadZoneWorld(zoneId: ZoneId): void {
    if (this.world) {
      this.scene.remove(this.world.group);
    }
    this.currentZoneId = zoneId;
    this.world = buildWorld(zoneId);
    this.scene.add(this.world.group);

    // Hide already-collected Harbour Yard Cargo Tags? Actually let's keep them visible with lower glow OR hide collected ones so collection is crystal clear!
    for (const tag of this.world.cargoTags) {
      const mesh = this.world.cargoTagMeshes.get(tag.id);
      if (mesh) {
        mesh.visible = !this.profile.collectedTags[tag.id];
      }
    }

    // Apply zone atmosphere
    this.skyUniforms.topColor.value.setHex(this.world.skyTopColor);
    this.skyUniforms.bottomColor.value.setHex(this.world.skyBottomColor);
    this.scene.fog = new THREE.Fog(this.world.fogColor, this.world.fogNear, this.world.fogFar);
    this.sunLight.color.setHex(this.world.sunColor);
    this.sunLight.intensity = this.world.sunIntensity;
    this.ambientLight.color.setHex(this.world.ambientColor);
    this.ambientLight.intensity = this.world.ambientIntensity;
  }

  private positionBikeAtSpawn(): void {
    if (!this.world) return;
    const sp = this.world.spawn;
    this.physics.reset(sp.x, sp.y, sp.z, sp.yaw);
    this.lastCheckpointPose = { ...sp };
    this.bikeModel.applyPhysicsState(this.physics.state);
    this.camInitialized = false;
  }

  public startZone(zoneId: ZoneId): void {
    this.sound.unlock();
    this.loadZoneWorld(zoneId);
    this.refreshBikeAppearance();
    this.mode = 'riding';
    this.paused = false;
    this.garagePedestal.visible = false;
    this.sessionMarker = null;
    this.clearedLogIds.clear();
    this.runCoinsEarned = 0;
    this.trickPopups = [];
    this.particles.clear();
    this.recorder.reset();
    this.positionBikeAtSpawn();
    this.runStats = this.createEmptyRunStats(zoneId);

    // Calibrate tilt steering neutral angle on run start (signature MudRider World feature!)
    if (this.profile.settings.tiltSteering) {
      this.input.calibrateTilt();
    }

    this.bikeModel.setFirstPerson(this.profile.settings.cameraMode === 'first_person');
    this.callbacks.onModeChange('riding');
    this.callbacks.onPauseChange(false);
    this.callbacks.onHudUpdate();
  }

  public restartRun(): void {
    this.startZone(this.currentZoneId);
  }

  public respawnAtCheckpoint(): void {
    const p = this.lastCheckpointPose;
    this.physics.reset(p.x, p.y + 0.12, p.z, p.yaw);
    this.runStats.comboScore = 0;
    this.runStats.comboCount = 0;
    this.runStats.comboTricks = [];
    this.camInitialized = false;
    this.pushPopup('CHECKPOINT RESET', 0, '#38bdf8');
  }

  public openMenu(): void {
    this.mode = 'menu';
    this.paused = false;
    this.garagePedestal.visible = false;
    this.sound.silenceContinuous();
    this.setVisorMud(0);
    this.refreshBikeAppearance();
    this.bikeModel.setFirstPerson(false);
    this.positionBikeAtSpawn();
    this.callbacks.onModeChange('menu');
    this.callbacks.onPauseChange(false);
  }

  public openGarage(): void {
    this.mode = 'garage';
    this.paused = false;
    this.sound.silenceContinuous();
    this.setVisorMud(0);
    this.refreshBikeAppearance();
    this.bikeModel.setFirstPerson(false);
    if (this.world) {
      const sp = this.world.spawn;
      this.physics.reset(sp.x, sp.y + 0.02, sp.z, 0);
      this.bikeModel.applyPhysicsState(this.physics.state);
      this.garagePedestal.position.set(sp.x, sp.y, sp.z);
      this.garagePedestal.visible = true;
    }
    this.callbacks.onModeChange('garage');
  }

  public startReplay(replay: SavedReplay): void {
    this.sound.unlock();
    this.loadZoneWorld(replay.zoneId);
    const spec = getBikeById(replay.bikeId);
    const upg = getBikeUpgrades(this.profile, replay.bikeId);
    this.bikeModel.rebuild(spec, upg, replay.livery);
    this.activeReplay = replay;
    this.replayTime = 0;
    this.replayPlaying = true;
    this.replaySpeed = 1.0;
    this.replayCam = 'chase';
    this.mode = 'replay';
    this.paused = false;
    this.garagePedestal.visible = false;
    this.sound.silenceContinuous();
    this.setVisorMud(0);
    this.camInitialized = false;
    this.callbacks.onModeChange('replay');
  }

  public setReplayCam(cam: ReplayCamMode): void {
    this.replayCam = cam;
    this.bikeModel.setFirstPerson(cam === 'helmet');
  }

  public saveCurrentRunReplay(): SavedReplay | null {
    if (!this.recorder.hasFrames()) return null;
    const meta = getZoneMeta(this.currentZoneId);
    const liv = getBikeLivery(this.profile, this.profile.selectedBikeId);
    const saved = this.recorder.buildSavedReplay(
      this.currentZoneId,
      meta.name,
      this.profile.selectedBikeId,
      liv,
      this.runStats.elapsedTime,
      this.runStats.score,
      this.runStats.finished
    );
    this.replays = saveReplay(saved);
    this.callbacks.onReplaysChange(this.replays);
    this.pushToast('REPLAY SAVED', `${meta.name} · ${saved.duration.toFixed(1)}s`, '#38bdf8');
    return saved;
  }

  public removeReplay(id: string): void {
    this.replays = deleteReplay(id);
    this.callbacks.onReplaysChange(this.replays);
  }

  public togglePause(force?: boolean): void {
    if (this.mode !== 'riding') return;
    this.paused = force !== undefined ? force : !this.paused;
    if (this.paused) {
      this.sound.silenceContinuous();
    }
    this.callbacks.onPauseChange(this.paused);
  }

  public cycleCamera(): void {
    const order: CameraMode[] = ['first_person', 'chase', 'action'];
    const idx = order.indexOf(this.profile.settings.cameraMode);
    const next = order[(idx + 1) % order.length];
    this.profile.settings.cameraMode = next;
    this.bikeModel.setFirstPerson(this.mode === 'riding' && next === 'first_person');
    saveProfile(this.profile);
    this.callbacks.onProfileChange(this.profile);
    const names: Record<CameraMode, string> = {
      first_person: 'HELMET POV',
      chase: 'CHASE CAM',
      action: 'FORK ACTION CAM',
    };
    this.pushPopup(names[next], 0, '#e2e8f0');
  }

  // ============== PHYSICS EVENT HANDLERS ==============
  private handleHop(charge: number): void {
    this.sound.playHop();
    this.runStats.bunnyHops += 1;
    const pts = Math.round(60 + charge * 90);
    this.addComboTrick('BUNNY HOP', pts, '#a3e635');
    this.particles.emit(
      this.physics.state.x,
      this.physics.state.y,
      this.physics.state.z,
      -this.physics.state.vx * 0.15,
      0.5,
      -this.physics.state.vz * 0.15,
      this.physics.state.surface,
      7
    );
  }

  private handlePumpBoost(gain: number): void {
    this.sound.playPumpBoost();
    this.runStats.pumpBoosts += 1;
    this.runStats.score += 120;
    this.pushPopup(`PUMP BOOST +${Math.round(gain * 3.6)} KM/H`, 120, '#38bdf8');
  }

  private handleTrick(name: string, points: number, color: string): void {
    this.sound.playTrick();
    if (name === 'BARSPIN') this.runStats.barspins += 1;
    if (name === 'AIR WHIP') this.runStats.whips += 1;
    if (name === 'BACKFLIP') this.runStats.backflips += 1;
    if (name === 'FRONTFLIP') this.runStats.frontflips += 1;
    if (name === 'TABLETOP') this.runStats.tabletops += 1;
    this.addComboTrick(name, points, color);
  }

  private handleManualComplete(timeSec: number, dist: number): void {
    if (timeSec > this.runStats.maxManualTime) this.runStats.maxManualTime = timeSec;
    if (dist > this.runStats.maxManualDist) this.runStats.maxManualDist = dist;
    const pts = Math.round(timeSec * 140 + dist * 8);
    this.runStats.score += pts;
    this.pushPopup(`MANUAL ${timeSec.toFixed(1)}s`, pts, '#fbbf24');
  }

  private handleStoppieComplete(timeSec: number): void {
    if (timeSec > this.runStats.maxStoppieTime) this.runStats.maxStoppieTime = timeSec;
    const pts = Math.round(timeSec * 220);
    this.runStats.score += pts;
    this.pushPopup(`STOPPIE ${timeSec.toFixed(1)}s`, pts, '#38bdf8');
  }

  private handleLanding(
    quality: 'stomped' | 'clean' | 'sketchy',
    impactSpeed: number,
    airHeight: number,
    airTime: number,
    isDrop: boolean
  ): void {
    const s = this.physics.state;
    this.sound.playLanding(impactSpeed / 12, s.surface);
    this.camShake = Math.min(0.42, impactSpeed * 0.028);

    this.particles.emit(s.x, s.y, s.z, 0, 0.8, 0, s.surface, quality === 'sketchy' ? 18 : 11);

    if (airHeight > this.runStats.maxAirHeight) this.runStats.maxAirHeight = airHeight;
    if (airTime > this.runStats.maxAirTime) this.runStats.maxAirTime = airTime;

    if (airHeight > 1.8) {
      this.addComboTrick(`BIG AIR ${airHeight.toFixed(1)}m`, Math.round(airHeight * 75), '#fb923c');
    }

    if (quality === 'stomped' || quality === 'clean') {
      this.runStats.cleanLandings += 1;
      if (isDrop) {
        this.runStats.dropStomps += 1;
        this.addComboTrick('DROP STOMP', 220, '#f97316');
      }

      if (this.runStats.comboScore > 0) {
        const mult = Math.min(4, 1 + (this.runStats.comboCount - 1) * 0.35);
        const qualityMult = quality === 'stomped' ? 1.25 : 1.0;
        const banked = Math.round(this.runStats.comboScore * mult * qualityMult);
        this.runStats.score += banked;
        if (banked > 0) {
          this.checkComboChallenge(banked);
        }
        const label = quality === 'stomped' ? 'STOMPED!' : 'CLEAN LANDING';
        this.pushPopup(label, banked, quality === 'stomped' ? '#a3e635' : '#4ade80');
      } else if (quality === 'stomped' && airHeight > 0.9) {
        this.runStats.score += 120;
        this.pushPopup('STOMPED!', 120, '#a3e635');
      }
    } else {
      // Sketchy landing halves combo
      const banked = Math.round(this.runStats.comboScore * 0.45);
      this.runStats.score += banked;
      this.pushPopup('SKETCHY LANDING', banked, '#f59e0b');
    }

    this.runStats.comboScore = 0;
    this.runStats.comboCount = 0;
    this.runStats.comboTricks = [];
  }

  private handleCrash(reason: string): void {
    this.sound.playCrash();
    this.camShake = 0.7;
    this.runStats.crashes += 1;
    this.runStats.comboScore = 0;
    this.runStats.comboCount = 0;
    this.runStats.comboTricks = [];
    const s = this.physics.state;
    this.particles.emit(s.x, s.y + 0.3, s.z, 0, 1.8, 0, s.surface, 26);
    this.pushPopup(`WIPEOUT · ${reason}`, 0, '#ef4444');
  }

  private addComboTrick(name: string, points: number, color: string): void {
    this.runStats.comboScore += points;
    this.runStats.comboCount += 1;
    this.runStats.comboTricks.push(name);
    this.pushPopup(name, points, color);
  }

  private pushPopup(text: string, points: number, color: string): void {
    this.trickPopups.unshift({
      id: this.nextPopupId++,
      text,
      points,
      color,
      timeLeft: 2.0,
    });
    if (this.trickPopups.length > 4) this.trickPopups.pop();
  }

  private pushToast(title: string, subtitle: string, accent: string): void {
    this.toasts.unshift({
      id: this.nextToastId++,
      title,
      subtitle,
      accent,
      timeLeft: 3.8,
    });
    if (this.toasts.length > 3) this.toasts.pop();
  }

  // ============== MAIN LOOP ==============
  private loop = (now: number): void => {
    this.rafId = requestAnimationFrame(this.loop);
    const rawDt = Math.min(0.05, Math.max(0.001, (now - this.lastFrameTime) / 1000));
    this.lastFrameTime = now;
    this.worldTime += rawDt;

    if (this.world) {
      this.world.updateVisuals(this.worldTime, rawDt);
    }

    if (this.mode === 'riding') {
      this.updateRiding(rawDt);
    } else if (this.mode === 'menu') {
      this.updateMenuCamera(rawDt);
    } else if (this.mode === 'garage') {
      this.updateGarageCamera(rawDt);
    } else if (this.mode === 'replay') {
      this.updateReplay(rawDt);
    }

    // Keep sky dome & sun shadow frustum centered around bike!
    const bp = this.bikeModel.root.position;
    this.skyDome.position.copy(bp);
    if (this.world) {
      this.sunLight.position.copy(bp).add(this.world.sunPosition);
      this.sunLight.target.position.copy(bp);
      this.sunLight.target.updateMatrixWorld();
    }

    this.particles.update(rawDt);
    this.renderer.render(this.scene, this.camera);
  };

  private updateRiding(dt: number): void {
    const input = this.input.poll(dt, this.profile.settings);

    if (input.pausePressed) {
      this.togglePause();
      return;
    }
    if (this.paused) return;

    if (input.cameraTogglePressed) this.cycleCamera();
    if (input.checkpointPressed) this.respawnAtCheckpoint();
    if (input.restartPressed) {
      this.restartRun();
      return;
    }
    if (input.setMarkerPressed) {
      const s = this.physics.state;
      this.sessionMarker = { x: s.x, y: s.y, z: s.z, yaw: s.yaw };
      this.pushPopup('SESSION MARKER SET', 0, '#a3e635');
    }
    if (input.gotoMarkerPressed && this.sessionMarker) {
      const m = this.sessionMarker;
      this.physics.reset(m.x, m.y + 0.15, m.z, m.yaw);
      this.camInitialized = false;
      this.pushPopup('WARPED TO MARKER', 0, '#38bdf8');
    }

    // Fixed-timestep 120Hz physics!
    const fixedDt = 1 / 120;
    this.physicsAccum = Math.min(0.1, this.physicsAccum + dt);
    const prevX = this.physics.state.x;
    const prevZ = this.physics.state.z;

    if (this.world) {
      while (this.physicsAccum >= fixedDt) {
        this.physics.step(fixedDt, input, this.world);
        this.physicsAccum -= fixedDt;
      }
    }

    const s = this.physics.state;

    // Auto-respawn 1.75s after wipeout if player doesn't press R sooner
    if (s.crashed && s.crashTimer > 1.85) {
      this.respawnAtCheckpoint();
    }

    // Track Run Stats
    if (!this.runStats.finished) {
      this.runStats.elapsedTime += dt;
    }
    const kmh = Math.abs(s.speed) * 3.6;
    if (kmh > this.runStats.maxSpeedKmh) this.runStats.maxSpeedKmh = kmh;
    if (s.manualActive) {
      if (s.manualDist > this.runStats.maxManualDist) this.runStats.maxManualDist = s.manualDist;
      if (s.manualTime > this.runStats.maxManualTime) this.runStats.maxManualTime = s.manualTime;
    }
    if (s.stoppieActive && s.stoppieTime > this.runStats.maxStoppieTime) {
      this.runStats.maxStoppieTime = s.stoppieTime;
    }

    // Check Hop Log clearances (Ground Park 15cm / 25cm / 35cm logs!)
    this.checkHopLogs(s);

    const stepDist = Math.hypot(s.x - prevX, s.z - prevZ);
    if (s.grounded && !s.crashed && stepDist > 0.001) {
      if (s.surface === 'mud') this.runStats.mudDistance += stepDist;
      if (s.surface === 'wood') this.runStats.woodDistance += stepDist;
    }

    // Continuous surface trail particles (mud spray, dirt rooster tail, skid dust!)
    if (s.grounded && !s.crashed && Math.abs(s.speed) > 4.5) {
      const rate = s.surface === 'mud' ? 0.65 : s.skidding ? 0.85 : 0.24;
      if (Math.random() < rate) {
        const fwdX = Math.sin(s.yaw);
        const fwdZ = Math.cos(s.yaw);
        this.particles.emit(
          s.x - fwdX * 0.6,
          s.y + 0.08,
          s.z - fwdZ * 0.6,
          -s.vx * 0.2,
          s.surface === 'mud' ? 2.4 : 0.9,
          -s.vz * 0.2,
          s.surface,
          s.surface === 'mud' ? 4 : 2
        );
      }
    }

    // Check Checkpoints & Finish Arch
    this.checkCheckpoints(s);

    // Check Harbour Yard Cargo Tags!
    this.checkCargoTags(s);

    // Evaluate Zone Challenges in real time
    this.evaluateZoneChallenges();

    // Update Bike 3D Model, Sound, Replay Recorder, Visor Mud
    this.bikeModel.applyPhysicsState(s);
    this.sound.updateContinuous(s, input.throttle > 0.1 && s.grounded);
    this.recorder.record(this.runStats.elapsedTime, dt, s);
    this.setVisorMud(this.profile.settings.cameraMode === 'first_person' ? s.mudVisorAmount : 0);

    // Update Camera
    this.updateRidingCamera(dt, s);

    // Decay popups & toasts
    for (let i = this.trickPopups.length - 1; i >= 0; i--) {
      this.trickPopups[i].timeLeft -= dt;
      if (this.trickPopups[i].timeLeft <= 0) this.trickPopups.splice(i, 1);
    }
    for (let i = this.toasts.length - 1; i >= 0; i--) {
      this.toasts[i].timeLeft -= dt;
      if (this.toasts[i].timeLeft <= 0) this.toasts.splice(i, 1);
    }

    // Notify HUD ~20Hz for smooth lightweight DOM updates
    this.hudTickAccum += dt;
    if (this.hudTickAccum >= 0.05) {
      this.hudTickAccum = 0;
      this.callbacks.onHudUpdate();
    }
  }

  private checkHopLogs(s: BikePhysicsState): void {
    if (!this.world || this.world.hopLogs.length === 0 || s.crashed) return;
    for (const log of this.world.hopLogs) {
      if (this.clearedLogIds.has(log.id)) continue;
      const dx = s.x - log.x;
      const dz = s.z - log.z;
      const sinY = Math.sin(log.yaw);
      const cosY = Math.cos(log.yaw);
      const localZ = dx * sinY + dz * cosY;
      const localX = dx * cosY - dz * sinY;

      if (Math.abs(localX) < log.width * 0.55 && Math.abs(localZ) < 0.95) {
        const clearance = s.y - log.y;
        if (!s.grounded && clearance >= log.height * 0.72) {
          this.clearedLogIds.add(log.id);
          this.runStats.logsCleared += 1;
          this.runStats.score += 220;
          this.sound.playTrick();
          this.pushPopup(`CLEARED ${log.label.toUpperCase()}!`, 220, '#a3e635');
        } else if (s.grounded && Math.abs(localZ) < 0.35 && s.speed > 5.0 && log.height >= 0.24) {
          // Bumping a tall log without hopping slows you down realistically!
          s.vx *= 0.62;
          s.vz *= 0.62;
          s.frontCompression = 0.85;
          this.camShake = 0.25;
        }
      }
    }
  }

  private checkCheckpoints(s: BikePhysicsState): void {
    if (!this.world || this.runStats.finished) return;
    const cpIdx = this.runStats.currentCheckpoint;
    if (cpIdx >= this.world.checkpoints.length) return;

    const cp = this.world.checkpoints[cpIdx];
    const dx = s.x - cp.x;
    const dz = s.z - cp.z;
    const dist = Math.hypot(dx, dz);

    if (dist < cp.width * 0.65) {
      this.runStats.currentCheckpoint += 1;
      this.lastCheckpointPose = { x: cp.x, y: cp.y + 0.1, z: cp.z, yaw: cp.yaw };

      if (cp.isFinish) {
        this.runStats.finished = true;
        this.runStats.finishTime = this.runStats.elapsedTime;
        this.sound.playChallengeComplete();

        // Check best time & best score
        let newRecord = false;
        const prevBest = this.profile.bestTimes[this.currentZoneId];
        if (prevBest === undefined || this.runStats.finishTime < prevBest) {
          this.profile.bestTimes[this.currentZoneId] = Math.round(this.runStats.finishTime * 100) / 100;
          newRecord = true;
        }
        const prevScore = this.profile.bestScores[this.currentZoneId] ?? 0;
        if (this.runStats.score > prevScore) {
          this.profile.bestScores[this.currentZoneId] = Math.round(this.runStats.score);
        }

        // Base completion Mud Coins payout
        const finishCoins = 50 + Math.round(this.runStats.score * 0.02);
        this.awardMudCoins(finishCoins);
        this.runCoinsEarned += finishCoins;

        // Re-evaluate finish challenges immediately
        this.evaluateZoneChallenges();

        // Auto-save replay of completed run!
        this.saveCurrentRunReplay();

        saveProfile(this.profile);
        this.callbacks.onProfileChange(this.profile);
        this.callbacks.onRunFinished({ ...this.runStats }, newRecord, this.runCoinsEarned);
      } else {
        this.sound.playCheckpoint();
        this.pushPopup(`CHECKPOINT ${cpIdx + 1}/${this.world.checkpoints.length - 1}`, 150, '#38bdf8');
        this.runStats.score += 150;
      }
    }
  }

  private checkCargoTags(s: BikePhysicsState): void {
    if (!this.world || this.world.cargoTags.length === 0) return;
    for (const tag of this.world.cargoTags) {
      if (this.profile.collectedTags[tag.id]) continue;
      const dx = s.x - tag.x;
      const dy = s.y + 0.7 - tag.y;
      const dz = s.z - tag.z;
      if (dx * dx + dy * dy + dz * dz < 2.35 * 2.35) {
        this.profile.collectedTags[tag.id] = true;
        this.runStats.collectedTagIds.push(tag.id);
        const mesh = this.world.cargoTagMeshes.get(tag.id);
        if (mesh) mesh.visible = false;

        this.sound.playCargoTag();
        this.particles.emit(tag.x, tag.y, tag.z, 0, 2.0, 0, 'sparkle', 24);
        this.awardMudCoins(45);
        this.runCoinsEarned += 45;
        this.runStats.score += 350;
        const count = Object.keys(this.profile.collectedTags).filter((k) => this.profile.collectedTags[k]).length;
        this.pushToast('CARGO TAG FOUND!', `${tag.label} (${count}/13) · +45 Credits`, '#facc15');
        saveProfile(this.profile);
        this.callbacks.onProfileChange(this.profile);
      }
    }
  }

  private checkComboChallenge(bankedScore: number): void {
    const meta = getZoneMeta(this.currentZoneId);
    for (const ch of meta.challenges) {
      if (ch.type === 'combo_score' && !this.profile.completedChallenges[ch.id] && bankedScore >= ch.target) {
        this.completeChallenge(ch);
      }
    }
  }

  private evaluateZoneChallenges(): void {
    const meta = getZoneMeta(this.currentZoneId);
    const rs = this.runStats;
    const totalCollectedTags = Object.keys(this.profile.collectedTags).filter(
      (k) => this.profile.collectedTags[k]
    ).length;

    for (const ch of meta.challenges) {
      if (this.profile.completedChallenges[ch.id]) continue;
      let passed = false;
      switch (ch.type) {
        case 'speed':
          passed = rs.maxSpeedKmh >= ch.target;
          break;
        case 'air_height':
          passed = rs.maxAirHeight >= ch.target;
          break;
        case 'air_time':
          passed = rs.maxAirTime >= ch.target;
          break;
        case 'bunny_hop':
          passed = rs.bunnyHops >= ch.target;
          break;
        case 'manual_time':
          passed = rs.maxManualTime >= ch.target;
          break;
        case 'manual_dist':
          passed = rs.maxManualDist >= ch.target;
          break;
        case 'stoppie_time':
          passed = rs.maxStoppieTime >= ch.target;
          break;
        case 'log_clear':
          passed = rs.logsCleared >= ch.target;
          break;
        case 'barspin':
          passed = rs.barspins >= ch.target;
          break;
        case 'whip':
          passed = rs.whips >= ch.target;
          break;
        case 'backflip':
          passed = rs.backflips >= ch.target;
          break;
        case 'frontflip':
          passed = rs.frontflips >= ch.target;
          break;
        case 'tabletop':
          passed = rs.tabletops >= ch.target;
          break;
        case 'pump_boosts':
          passed = rs.pumpBoosts >= ch.target;
          break;
        case 'clean_landings':
          passed = rs.cleanLandings >= ch.target;
          break;
        case 'drop_stomp':
          passed = rs.dropStomps >= ch.target;
          break;
        case 'mud_traverse':
          passed = rs.mudDistance >= ch.target;
          break;
        case 'wood_ride':
          passed = rs.woodDistance >= ch.target;
          break;
        case 'total_score':
          passed = rs.score >= ch.target;
          break;
        case 'cargo_tags':
          passed = totalCollectedTags >= ch.target;
          break;
        case 'finish_run':
          passed = rs.finished;
          break;
        case 'finish_time':
          passed = rs.finished && rs.finishTime <= ch.target;
          break;
        case 'no_crash_finish':
          passed = rs.finished && rs.crashes === 0;
          break;
        case 'combo_score':
          break;
      }
      if (passed) {
        this.completeChallenge(ch);
      }
    }
  }

  private completeChallenge(ch: ChallengeDef): void {
    this.profile.completedChallenges[ch.id] = true;
    this.awardMudCoins(ch.reward);
    this.runCoinsEarned += ch.reward;
    this.sound.playChallengeComplete();
    this.pushToast(`CHALLENGE COMPLETE`, `${ch.title} · +${ch.reward} Credits`, '#a3e635');
    saveProfile(this.profile);
    this.callbacks.onProfileChange(this.profile);
  }

  private awardMudCoins(amount: number): void {
    this.profile.mudCoins += amount;
  }

  // ============== CAMERA SYSTEMS ==============
  private updateRidingCamera(dt: number, s: BikePhysicsState): void {
    const mode = this.profile.settings.cameraMode;
    this.camShake = Math.max(0, this.camShake - dt * 2.2);
    const shakeX = (Math.random() - 0.5) * this.camShake * 0.25;
    const shakeY = (Math.random() - 0.5) * this.camShake * 0.25;

    // Dynamic speed FOV (gives electrifying downhill speed sensation!)
    const speedFovBoost = Math.min(16, Math.max(0, (Math.abs(s.speed) - 8) * 0.85));
    const targetFov = this.profile.settings.fov + speedFovBoost;
    this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 6);
    this.camera.updateProjectionMatrix();

    const fwdX = Math.sin(s.yaw);
    const fwdZ = Math.cos(s.yaw);

    if (mode === 'first_person') {
      // Exact Image 2 First-Person Helmet POV!
      const hPos = new THREE.Vector3();
      const hQuat = new THREE.Quaternion();
      this.bikeModel.getHelmetWorldTransform(hPos, hQuat);

      const bumpAmp = s.grounded && !s.crashed ? Math.min(0.018, Math.abs(s.speed) * 0.001) : 0;
      const chatter = Math.sin(this.worldTime * 34) * bumpAmp;

      this.camera.position.set(hPos.x + shakeX, hPos.y + chatter + shakeY, hPos.z);

      // Follow bike pitch cleanly on Manuals, Stoppies, Backflips & Frontflips, while keeping horizon crisp!
      const isFlipping = Math.abs(s.flipAccumulator) > 0.65 || Math.abs(s.pitch) > 0.95;
      const baseLookDown = -0.21; // frames handlebars, upper crown, arms & trail identically to reference Image 2!
      const targetPitch = isFlipping
        ? s.pitch + baseLookDown * 0.4
        : s.pitch * 0.78 + baseLookDown;
      const targetRoll = s.roll * 0.56;
      this.fpPitchSmooth += (targetPitch - this.fpPitchSmooth) * Math.min(1, dt * 15);
      this.fpRollSmooth += (targetRoll - this.fpRollSmooth) * Math.min(1, dt * 12);

      const cosP = Math.cos(this.fpPitchSmooth);
      const sinP = Math.sin(this.fpPitchSmooth);
      const lookDirX = fwdX * cosP;
      const lookDirY = sinP;
      const lookDirZ = fwdZ * cosP;

      const cosR = Math.cos(this.fpRollSmooth);
      const sinR = Math.sin(this.fpRollSmooth);
      const rightX = -Math.cos(s.yaw);
      const rightZ = Math.sin(s.yaw);

      const upX = -fwdX * sinP * cosR + rightX * sinR;
      const upY = cosP * cosR;
      const upZ = -fwdZ * sinP * cosR + rightZ * sinR;

      this.camera.up.set(upX, upY, upZ).normalize();
      this.camera.lookAt(
        this.camera.position.x + lookDirX * 12,
        this.camera.position.y + lookDirY * 12,
        this.camera.position.z + lookDirZ * 12
      );
      return;
    }

    // Reset standard camera up for Chase & Action views
    this.camera.up.set(0, 1, 0);

    const dist = mode === 'chase' ? 4.35 : 2.35;
    const height = mode === 'chase' ? 2.15 : 1.32;
    const lookAhead = mode === 'chase' ? 5.5 : 4.2;

    const desiredPos = new THREE.Vector3(
      s.x - fwdX * dist,
      s.y + height + (s.grounded ? 0 : 0.35),
      s.z - fwdZ * dist
    );
    // Keep chase camera above terrain
    if (this.world) {
      const camGround = this.world.sampleGround(desiredPos.x, desiredPos.z).height;
      if (desiredPos.y < camGround + 0.75) desiredPos.y = camGround + 0.75;
    }

    const desiredLook = new THREE.Vector3(
      s.x + fwdX * lookAhead,
      s.y + 0.85,
      s.z + fwdZ * lookAhead
    );

    if (!this.camInitialized) {
      this.camPos.copy(desiredPos);
      this.camLook.copy(desiredLook);
      this.camInitialized = true;
    } else {
      const followRate = mode === 'chase' ? 9.5 : 14.0;
      this.camPos.lerp(desiredPos, Math.min(1, dt * followRate));
      this.camLook.lerp(desiredLook, Math.min(1, dt * 13));
    }

    this.camera.position.set(this.camPos.x + shakeX, this.camPos.y + shakeY, this.camPos.z);
    this.camera.lookAt(this.camLook);
  }

  private updateMenuCamera(_dt: number): void {
    const bp = this.bikeModel.root.position;
    // Gentle side-3/4 showcase orbit so rider & dual-crown bike look sharp right on the menu!
    const angle = Math.PI * 0.44 + Math.sin(this.worldTime * 0.25) * 0.28;
    const radius = 3.15;
    this.camera.up.set(0, 1, 0);
    this.camera.position.set(
      bp.x + Math.sin(angle) * radius,
      bp.y + 1.15 + Math.sin(this.worldTime * 0.4) * 0.08,
      bp.z + Math.cos(angle) * radius
    );
    this.camera.lookAt(bp.x, bp.y + 0.85, bp.z - 0.15);
  }

  private updateGarageCamera(_dt: number): void {
    const bp = this.bikeModel.root.position;
    // Side-profile workshop framing (drag to orbit 360°!)
    const radius = 2.85;
    const horiz = radius * Math.cos(this.garagePitch);
    const vert = radius * Math.sin(this.garagePitch);
    this.camera.up.set(0, 1, 0);
    this.camera.position.set(
      bp.x + Math.sin(this.garageYaw) * horiz,
      bp.y + 0.92 + vert,
      bp.z + Math.cos(this.garageYaw) * horiz
    );
    this.camera.lookAt(bp.x, bp.y + 0.9, bp.z + 0.05);
  }

  private updateReplay(dt: number): void {
    if (!this.activeReplay || this.activeReplay.frames.length === 0) return;
    const frames = this.activeReplay.frames;
    const maxT = frames[frames.length - 1].t;

    if (this.replayPlaying) {
      this.replayTime += dt * this.replaySpeed;
      if (this.replayTime > maxT) {
        this.replayTime = 0;
      }
    }

    interpolateReplayFrame(frames, this.replayTime, this.replayState);
    this.bikeModel.applyPhysicsState(this.replayState);
    const s = this.replayState;

    if (this.replayCam === 'helmet') {
      this.bikeModel.setFirstPerson(true);
      const prevMode = this.profile.settings.cameraMode;
      this.profile.settings.cameraMode = 'first_person';
      this.updateRidingCamera(dt, s);
      this.profile.settings.cameraMode = prevMode;
    } else if (this.replayCam === 'orbit') {
      this.bikeModel.setFirstPerson(false);
      this.camera.up.set(0, 1, 0);
      const a = this.worldTime * 0.65;
      this.camera.position.set(s.x + Math.sin(a) * 4.5, s.y + 2.2, s.z + Math.cos(a) * 4.5);
      this.camera.lookAt(s.x, s.y + 0.8, s.z);
    } else if (this.replayCam === 'trackside') {
      this.bikeModel.setFirstPerson(false);
      this.camera.up.set(0, 1, 0);
      const fwdX = Math.sin(s.yaw);
      const fwdZ = Math.cos(s.yaw);
      const sideX = -Math.cos(s.yaw);
      const sideZ = Math.sin(s.yaw);
      this.camera.position.set(s.x + fwdX * 7 + sideX * 5.2, s.y + 2.4, s.z + fwdZ * 7 + sideZ * 5.2);
      this.camera.lookAt(s.x, s.y + 0.9, s.z);
    } else {
      this.bikeModel.setFirstPerson(false);
      const prevMode = this.profile.settings.cameraMode;
      this.profile.settings.cameraMode = 'chase';
      this.updateRidingCamera(dt, s);
      this.profile.settings.cameraMode = prevMode;
    }

    this.hudTickAccum += dt;
    if (this.hudTickAccum >= 0.06) {
      this.hudTickAccum = 0;
      this.callbacks.onHudUpdate();
    }
  }

  private setVisorMud(amount: number): void {
    if (!this.visorMudEl) return;
    this.visorMudEl.style.opacity = String(Math.min(0.88, amount * 0.9));
  }

  private onResize = (): void => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };

  private onPointerDown = (e: PointerEvent): void => {
    this.sound.unlock();
    if (this.mode === 'garage' && (e.target as HTMLElement)?.id === 'game-canvas') {
      this.garageDragging = true;
      this.garageLastX = e.clientX;
      this.garageLastY = e.clientY;
    }
  };

  private onPointerMove = (e: PointerEvent): void => {
    if (!this.garageDragging) return;
    const dx = e.clientX - this.garageLastX;
    const dy = e.clientY - this.garageLastY;
    this.garageLastX = e.clientX;
    this.garageLastY = e.clientY;
    this.garageYaw -= dx * 0.01;
    this.garagePitch = Math.max(0.06, Math.min(0.85, this.garagePitch + dy * 0.008));
  };

  private onPointerUp = (): void => {
    this.garageDragging = false;
  };

  public dispose(): void {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    this.input.dispose();
    this.renderer.dispose();
  }
}
