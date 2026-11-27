import * as THREE from 'three';
import { BikePhysicsState, BikeSpec, BikeUpgrades, LiveryConfig } from '../types';

function createLiveryTexture(livery: LiveryConfig): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d')!;

  ctx.fillStyle = livery.primaryColor;
  ctx.fillRect(0, 0, 256, 256);

  if (livery.pattern !== 'solid') {
    ctx.fillStyle = livery.accentColor;
    if (livery.pattern === 'stripes') {
      for (let i = -256; i < 512; i += 38) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 15, 0);
        ctx.lineTo(i + 115, 256);
        ctx.lineTo(i + 100, 256);
        ctx.closePath();
        ctx.fill();
      }
    } else if (livery.pattern === 'splatter') {
      for (let i = 0; i < 50; i++) {
        const x = (i * 73) % 256;
        const y = (i * 137) % 256;
        const r = 4 + (i % 13);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (livery.pattern === 'camo') {
      for (let i = 0; i < 28; i++) {
        const x = (i * 53) % 256;
        const y = (i * 97) % 256;
        ctx.fillStyle = i % 2 === 0 ? livery.accentColor : '#1f2937';
        ctx.beginPath();
        ctx.ellipse(x, y, 24 + (i % 18), 12 + (i % 12), (i % 5) * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (livery.pattern === 'racing') {
      ctx.fillRect(0, 98, 256, 60);
      ctx.fillStyle = '#ffffff';
      const sq = 16;
      for (let x = 0; x < 256; x += sq) {
        if ((x / sq) % 2 === 0) {
          ctx.fillRect(x, 84, sq, 10);
          ctx.fillRect(x, 162, sq, 10);
        }
      }
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeTube(
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  r1: number,
  r2: number,
  mat: THREE.Material,
  radialSegments = 7
): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = Math.max(0.001, dir.length());
  const geo = new THREE.CylinderGeometry(r2, r1, len, radialSegments);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(p1).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function makeTaperedLimb(
  p1: THREE.Vector3,
  p2: THREE.Vector3,
  r1: number,
  r2: number,
  mat: THREE.Material,
  sides = 6
): THREE.Mesh {
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = Math.max(0.001, dir.length());
  const geo = new THREE.CylinderGeometry(r2, r1, len, sides);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(p1).addScaledVector(dir, 0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function makeCoilShock(p1: THREE.Vector3, p2: THREE.Vector3): THREE.Group {
  const g = new THREE.Group();
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = dir.length();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x22252b,
    roughness: 0.4,
    metalness: 0.55,
    flatShading: true,
  });
  const shaftMat = new THREE.MeshStandardMaterial({
    color: 0xcbd5e1,
    roughness: 0.2,
    metalness: 0.85,
    flatShading: true,
  });
  const coilMat = new THREE.MeshStandardMaterial({
    color: 0x17191d,
    roughness: 0.5,
    metalness: 0.4,
    flatShading: true,
  });

  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, len, 6), shaftMat);
  shaft.position.y = len * 0.5;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, len * 0.45, 7), bodyMat);
  body.position.y = len * 0.72;
  const reservoir = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, len * 0.32, 6), bodyMat);
  reservoir.position.set(0, len * 0.76, 0.03);
  g.add(shaft, body, reservoir);

  // Visible black helical coil spring matching reference garage bike
  const coils = 7;
  const coilStart = len * 0.16;
  const coilSpan = len * 0.54;
  const ringGeo = new THREE.TorusGeometry(0.029, 0.0075, 5, 10);
  for (let i = 0; i < coils; i++) {
    const ring = new THREE.Mesh(ringGeo, coilMat);
    ring.rotation.x = Math.PI / 2 + 0.14;
    ring.position.y = coilStart + (i / (coils - 1)) * coilSpan;
    ring.castShadow = true;
    g.add(ring);
  }

  g.position.copy(p1);
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  return g;
}

function makeWheel(radius: number, rimColor: string, isRear: boolean): THREE.Group {
  const wheel = new THREE.Group();

  // Chunky low-poly knobby MTB tire with pronounced raised blocks
  const tireMat = new THREE.MeshStandardMaterial({
    color: 0x191a1e,
    roughness: 0.9,
    metalness: 0.05,
    flatShading: true,
  });
  const tire = new THREE.Mesh(new THREE.TorusGeometry(radius - 0.052, 0.058, 8, 22), tireMat);
  tire.rotation.y = Math.PI / 2;
  tire.castShadow = true;
  tire.receiveShadow = true;
  wheel.add(tire);

  const knobGeo = new THREE.BoxGeometry(0.088, 0.024, 0.036);
  const knobCount = 24;
  for (let i = 0; i < knobCount; i++) {
    const a = (i / knobCount) * Math.PI * 2;
    const knob = new THREE.Mesh(knobGeo, tireMat);
    knob.position.set(0, Math.cos(a) * (radius + 0.004), Math.sin(a) * (radius + 0.004));
    knob.rotation.x = -a;
    knob.castShadow = true;
    wheel.add(knob);
  }

  // Wide anodized gold alloy rim
  const rimMat = new THREE.MeshStandardMaterial({
    color: rimColor,
    roughness: 0.34,
    metalness: 0.55,
    flatShading: true,
  });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(radius - 0.105, 0.026, 6, 22), rimMat);
  rim.rotation.y = Math.PI / 2;
  wheel.add(rim);

  // Silver hub
  const hubMat = new THREE.MeshStandardMaterial({
    color: 0xd4d8de,
    roughness: 0.3,
    metalness: 0.78,
    flatShading: true,
  });
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.135, 8), hubMat);
  hub.rotation.z = Math.PI / 2;
  wheel.add(hub);

  // Silver disc brake rotor on left side
  const rotorMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    roughness: 0.25,
    metalness: 0.85,
    flatShading: true,
  });
  const rotorOuter = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.013, 5, 14), rotorMat);
  rotorOuter.rotation.y = Math.PI / 2;
  rotorOuter.position.x = 0.055;
  wheel.add(rotorOuter);

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.007, 0.18, 0.015), rotorMat);
    arm.position.x = 0.055;
    arm.rotation.x = a;
    wheel.add(arm);
  }

  if (isRear) {
    const cassMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.35, metalness: 0.75, flatShading: true });
    const c1 = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.012, 10), cassMat);
    c1.rotation.z = Math.PI / 2;
    c1.position.x = -0.052;
    const c2 = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.018, 10), cassMat);
    c2.rotation.z = Math.PI / 2;
    c2.position.x = -0.064;
    wheel.add(c1, c2);
  }

  // Fine silver spokes
  const spokeMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, roughness: 0.4, metalness: 0.75 });
  const spokeCount = 12;
  const spokeGeo = new THREE.CylinderGeometry(0.0032, 0.0032, (radius - 0.105) * 2, 4);
  for (let i = 0; i < spokeCount; i++) {
    const a = (i / spokeCount) * Math.PI;
    const sp = new THREE.Mesh(spokeGeo, spokeMat);
    sp.rotation.x = a;
    sp.position.x = i % 2 === 0 ? 0.014 : -0.014;
    wheel.add(sp);
  }

  return wheel;
}

export class BikeModel {
  public root = new THREE.Group();
  private wheelPivot = new THREE.Group();
  private bikeBody = new THREE.Group();
  private chassis = new THREE.Group();
  private steerGroup = new THREE.Group();
  private forkLowerGroup = new THREE.Group();
  private rearSwingarm = new THREE.Group();
  private frontWheel = new THREE.Group();
  private rearWheel = new THREE.Group();
  private crankGroup = new THREE.Group();
  private riderGroup = new THREE.Group();

  // Dedicated First-Person Cockpit matching the exact POV reference
  private fpCockpit = new THREE.Group();
  private fpSteerAssembly = new THREE.Group();
  private fpBarGroup = new THREE.Group();
  private fpLeftArm = new THREE.Group();
  private fpRightArm = new THREE.Group();
  private fpHelmetAnchor = new THREE.Object3D();

  // Dynamic 3rd-person rider parts
  private riderTorso = new THREE.Group();
  private riderHead = new THREE.Group();

  private spec: BikeSpec;
  private upgrades: BikeUpgrades;
  private livery: LiveryConfig;
  private liveryTex: THREE.CanvasTexture | null = null;
  private firstPerson = false;

  constructor(spec: BikeSpec, upgrades: BikeUpgrades, livery: LiveryConfig) {
    this.spec = spec;
    this.upgrades = upgrades;
    this.livery = livery;
    this.root.add(this.wheelPivot);
    this.wheelPivot.add(this.bikeBody);
    this.rebuild(spec, upgrades, livery);
  }

  public rebuild(spec: BikeSpec, upgrades: BikeUpgrades, livery: LiveryConfig): void {
    this.spec = spec;
    this.upgrades = upgrades;
    this.livery = livery;

    this.bikeBody.clear();
    if (this.liveryTex) this.liveryTex.dispose();
    this.liveryTex = createLiveryTexture(livery);

    this.chassis = new THREE.Group();
    this.steerGroup = new THREE.Group();
    this.forkLowerGroup = new THREE.Group();
    this.rearSwingarm = new THREE.Group();
    this.crankGroup = new THREE.Group();
    this.riderGroup = new THREE.Group();
    this.fpCockpit = new THREE.Group();
    this.fpSteerAssembly = new THREE.Group();
    this.fpBarGroup = new THREE.Group();
    this.fpLeftArm = new THREE.Group();
    this.fpRightArm = new THREE.Group();
    this.fpHelmetAnchor = new THREE.Object3D();

    const wr = spec.wheelRadius;
    const halfWB = spec.wheelbase * 0.5;

    const frameMat = new THREE.MeshStandardMaterial({
      map: this.liveryTex,
      roughness: 0.42,
      metalness: 0.12,
      flatShading: true,
    });
    const darkMetal = new THREE.MeshStandardMaterial({
      color: 0x1a1c20,
      roughness: 0.45,
      metalness: 0.55,
      flatShading: true,
    });
    const forkLowerMat = new THREE.MeshStandardMaterial({
      color: livery.forkColor,
      roughness: 0.42,
      metalness: 0.3,
      flatShading: true,
    });
    const stanchionColor = upgrades.fork === 2 ? 0x22252b : 0xd89c1c;
    const stanchionMat = new THREE.MeshStandardMaterial({
      color: stanchionColor,
      roughness: 0.22,
      metalness: 0.78,
      flatShading: true,
    });
    const gripMat = new THREE.MeshStandardMaterial({
      color: 0x16181c,
      roughness: 0.88,
      flatShading: true,
    });
    const goldCapMat = new THREE.MeshStandardMaterial({
      color: 0xd99b26,
      roughness: 0.3,
      metalness: 0.75,
      flatShading: true,
    });

    // =========================================================================
    // 1. FRAME GEOMETRY (Exact Proportions from Garage Reference)
    // =========================================================================
    const rearAxle = new THREE.Vector3(0, wr, -halfWB);
    const bb = new THREE.Vector3(0, wr - 0.035, -0.06);
    const dtBend = new THREE.Vector3(0, wr + 0.03, 0.08);
    const seatMid = new THREE.Vector3(0, wr + 0.27, -0.14);
    const seatTop = new THREE.Vector3(0, wr + 0.41, -0.21);
    const headTop = new THREE.Vector3(0, wr + 0.55, halfWB - 0.26);
    const headBot = new THREE.Vector3(0, wr + 0.39, halfWB - 0.18);

    // Curved-lower Down Tube + Straight Upper Down Tube
    this.chassis.add(makeTube(bb, dtBend, 0.033, 0.035, frameMat, 7));
    this.chassis.add(makeTube(dtBend, headBot, 0.035, 0.034, frameMat, 7));

    // Low-standover Sloping Top Tube
    this.chassis.add(makeTube(seatTop, headTop, 0.026, 0.028, frameMat, 7));
    this.chassis.add(makeTube(new THREE.Vector3(0, wr + 0.44, halfWB - 0.36), headBot, 0.02, 0.02, frameMat, 6));

    // Curved Seat Tube
    this.chassis.add(makeTube(bb, seatMid, 0.027, 0.026, frameMat, 7));
    this.chassis.add(makeTube(seatMid, seatTop, 0.025, 0.024, frameMat, 7));

    // Head Tube & BB Shell
    this.chassis.add(makeTube(headBot, headTop, 0.034, 0.034, frameMat, 8));
    const bbShell = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.036, 0.095, 8), frameMat);
    bbShell.rotation.z = Math.PI / 2;
    bbShell.position.copy(bb);
    this.chassis.add(bbShell);

    // Compact Slammed MTB Saddle
    const postTop = new THREE.Vector3(0, wr + 0.49, -0.26);
    this.chassis.add(makeTube(seatTop, postTop, 0.017, 0.016, darkMetal, 6));
    const saddle = new THREE.Mesh(
      new THREE.BoxGeometry(0.125, 0.04, 0.24),
      new THREE.MeshStandardMaterial({ color: 0x17181c, roughness: 0.82, flatShading: true })
    );
    saddle.position.copy(postTop).add(new THREE.Vector3(0, 0.015, -0.02));
    saddle.rotation.x = 0.14;
    saddle.castShadow = true;
    this.chassis.add(saddle);

    // Diagonal Coil Rear Shock
    if (spec.fullSuspension) {
      const shockRear = new THREE.Vector3(0, wr + 0.21, -0.26);
      const shockFront = new THREE.Vector3(0, wr + 0.35, 0.13);
      this.chassis.add(makeCoilShock(shockRear, shockFront));
      for (const side of [-1, 1]) {
        this.chassis.add(
          makeTube(
            new THREE.Vector3(side * 0.035, wr + 0.28, -0.14),
            new THREE.Vector3(side * 0.035, wr + 0.21, -0.27),
            0.012,
            0.012,
            darkMetal,
            5
          )
        );
      }
    }

    // Rear Swingarm + Rear Wheel
    this.rearSwingarm.position.copy(bb);
    const localRearAxle = new THREE.Vector3().subVectors(rearAxle, bb);
    const localRocker = new THREE.Vector3(0, 0.25, -0.18);
    for (const side of [-1, 1]) {
      const axleOff = new THREE.Vector3(side * 0.078, 0, 0);
      this.rearSwingarm.add(
        makeTube(new THREE.Vector3(side * 0.042, 0, 0), localRearAxle.clone().add(axleOff), 0.017, 0.014, frameMat, 6)
      );
      this.rearSwingarm.add(
        makeTube(localRocker.clone().add(new THREE.Vector3(side * 0.04, 0, 0)), localRearAxle.clone().add(axleOff), 0.015, 0.013, frameMat, 6)
      );
    }
    const rearCalip = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 0.06), darkMetal);
    rearCalip.position.copy(localRearAxle).add(new THREE.Vector3(0.065, 0.08, 0.03));
    this.rearSwingarm.add(rearCalip);

    const chainMat = new THREE.MeshStandardMaterial({ color: 0x262930, roughness: 0.5, metalness: 0.6 });
    this.rearSwingarm.add(
      makeTube(new THREE.Vector3(-0.055, 0.055, 0), localRearAxle.clone().add(new THREE.Vector3(-0.055, 0.05, 0)), 0.005, 0.005, chainMat, 4)
    );
    this.rearSwingarm.add(
      makeTube(new THREE.Vector3(-0.055, -0.055, 0), localRearAxle.clone().add(new THREE.Vector3(-0.055, -0.075, 0.04)), 0.005, 0.005, chainMat, 4)
    );
    const derailleur = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.09, 0.035), darkMetal);
    derailleur.position.copy(localRearAxle).add(new THREE.Vector3(-0.062, -0.055, 0.025));
    this.rearSwingarm.add(derailleur);

    this.rearWheel = makeWheel(wr, livery.rimColor, true);
    this.rearWheel.position.copy(localRearAxle);
    this.rearSwingarm.add(this.rearWheel);
    this.chassis.add(this.rearSwingarm);

    // Crankset & Level Pedals (Attack Stance)
    this.crankGroup.position.copy(bb);
    const chainring = new THREE.Mesh(new THREE.TorusGeometry(0.068, 0.011, 5, 14), darkMetal);
    chainring.rotation.y = Math.PI / 2;
    chainring.position.x = -0.055;
    this.crankGroup.add(chainring);

    const leftPedalPos = new THREE.Vector3(0.115, -0.02, -0.11);
    const rightPedalPos = new THREE.Vector3(-0.115, 0.02, 0.11);
    this.crankGroup.add(makeTube(new THREE.Vector3(0.065, 0, 0), leftPedalPos, 0.014, 0.012, darkMetal, 5));
    this.crankGroup.add(makeTube(new THREE.Vector3(-0.065, 0, 0), rightPedalPos, 0.014, 0.012, darkMetal, 5));
    const pedalGeo = new THREE.BoxGeometry(0.095, 0.018, 0.105);
    const pL = new THREE.Mesh(pedalGeo, darkMetal);
    pL.position.copy(leftPedalPos);
    const pR = new THREE.Mesh(pedalGeo, darkMetal);
    pR.position.copy(rightPedalPos);
    this.crankGroup.add(pL, pR);
    this.chassis.add(this.crankGroup);

    // =========================================================================
    // 2. DUAL-CROWN FORK & STEERING ASSEMBLY (Slack ~64° DH Angle)
    // =========================================================================
    this.steerGroup.position.copy(headTop);
    const headAngle = 0.46;
    this.steerGroup.rotation.x = headAngle;

    const crownGeo = new THREE.BoxGeometry(0.195, 0.026, 0.062);
    const lowerCrown = new THREE.Mesh(crownGeo, darkMetal);
    lowerCrown.position.set(0, -0.175, 0.012);
    lowerCrown.castShadow = true;
    this.steerGroup.add(lowerCrown);

    if (spec.dualCrown) {
      const upperCrown = new THREE.Mesh(crownGeo, darkMetal);
      upperCrown.position.set(0, 0.005, 0.012);
      upperCrown.castShadow = true;
      this.steerGroup.add(upperCrown);
    }

    const stanLen = spec.dualCrown ? 0.45 : 0.30;
    const stanY = spec.dualCrown ? -0.195 : -0.30;
    for (const side of [-1, 1]) {
      const stan = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, stanLen, 8), stanchionMat);
      stan.position.set(side * 0.074, stanY, 0.012);
      stan.castShadow = true;
      this.steerGroup.add(stan);

      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.023, 0.023, 0.016, 8), darkMetal);
      cap.position.set(side * 0.074, 0.024, 0.012);
      this.steerGroup.add(cap);
    }

    const stemBody = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.036, 0.068), darkMetal);
    stemBody.position.set(0, 0.032, 0.028);
    const stemCap = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.014, 6), goldCapMat);
    stemCap.position.set(0, 0.026, -0.002);
    this.steerGroup.add(stemBody, stemCap);

    // Wide Black Riser Handlebar
    const barGroup = new THREE.Group();
    barGroup.position.set(0, 0.048, 0.048);
    barGroup.rotation.x = -headAngle;

    const barMid = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.18, 7), darkMetal);
    barMid.rotation.z = Math.PI / 2;
    barGroup.add(barMid);

    for (const side of [-1, 1]) {
      const p1 = new THREE.Vector3(side * 0.085, 0, 0);
      const p2 = new THREE.Vector3(side * 0.18, 0.036, -0.012);
      const p3 = new THREE.Vector3(side * 0.39, 0.042, -0.038);
      barGroup.add(makeTube(p1, p2, 0.016, 0.015, darkMetal, 7));
      barGroup.add(makeTube(p2, p3, 0.015, 0.014, darkMetal, 7));
      const pGrip = new THREE.Vector3(side * 0.255, 0.039, -0.022);
      barGroup.add(makeTube(pGrip, p3, 0.02, 0.02, gripMat, 7));
      const lever = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.011, 0.016), darkMetal);
      lever.position.set(side * 0.24, 0.022, 0.028);
      lever.rotation.y = side * -0.25;
      barGroup.add(lever);
    }
    this.steerGroup.add(barGroup);

    // Matte-Black Lower Fork Legs + Front Wheel
    this.forkLowerGroup.position.set(0, -0.42, 0.012);
    for (const side of [-1, 1]) {
      const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.026, 0.022, 0.42, 8), forkLowerMat);
      lower.position.set(side * 0.074, -0.05, 0);
      lower.castShadow = true;
      this.forkLowerGroup.add(lower);
    }
    const forkBridge = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.032, 0.042), forkLowerMat);
    forkBridge.position.set(0, 0.145, 0.022);
    const frontCalip = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.055, 0.05), darkMetal);
    frontCalip.position.set(0.07, -0.18, -0.045);
    this.forkLowerGroup.add(forkBridge, frontCalip);

    this.frontWheel = makeWheel(wr, livery.rimColor, false);
    this.frontWheel.position.set(0, -0.225, 0.025);
    this.forkLowerGroup.add(this.frontWheel);

    this.steerGroup.add(this.forkLowerGroup);
    this.chassis.add(this.steerGroup);

    // =========================================================================
    // 3. LOW-POLY MTB RIDER (Exact Reference Proportions & Palette)
    // =========================================================================
    this.buildRiderExact(wr, bb, leftPedalPos, rightPedalPos, livery);
    this.chassis.add(this.riderGroup);

    // =========================================================================
    // 4. DEDICATED FIRST-PERSON POV COCKPIT (Exact POV Reference!)
    // =========================================================================
    this.buildExactFPCockpit(wr, frameMat, darkMetal, goldCapMat, gripMat);
    this.chassis.add(this.fpCockpit);
    this.chassis.add(this.fpHelmetAnchor);

    this.bikeBody.add(this.chassis);
    this.setFirstPerson(this.firstPerson);
  }

  private buildRiderExact(
    wr: number,
    bb: THREE.Vector3,
    leftPedalLocal: THREE.Vector3,
    rightPedalLocal: THREE.Vector3,
    livery: LiveryConfig
  ): void {
    this.riderTorso = new THREE.Group();
    this.riderHead = new THREE.Group();

    const jacketMat = new THREE.MeshStandardMaterial({ color: 0x22242c, roughness: 0.82, flatShading: true });
    const pantsMat = new THREE.MeshStandardMaterial({ color: 0xe3e6ec, roughness: 0.85, flatShading: true });
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xebb38d, roughness: 0.72, flatShading: true });
    const shoeMat = new THREE.MeshStandardMaterial({ color: 0x1c1e23, roughness: 0.88, flatShading: true });
    const packMat = new THREE.MeshStandardMaterial({ color: 0x2e3139, roughness: 0.84, flatShading: true });
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x15171c, roughness: 0.9, flatShading: true });
    const helmetMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f6, roughness: 0.35, flatShading: true });
    const stripeMat = new THREE.MeshStandardMaterial({ color: livery.accentColor || '#f97316', roughness: 0.4, flatShading: true });
    const goggleStrapMat = new THREE.MeshStandardMaterial({ color: 0x4b515c, roughness: 0.85, flatShading: true });
    const goggleLensMat = new THREE.MeshStandardMaterial({ color: 0xd98a2b, roughness: 0.16, metalness: 0.55, flatShading: true });

    const lFoot = bb.clone().add(leftPedalLocal).add(new THREE.Vector3(0, 0.04, 0.02));
    const rFoot = bb.clone().add(rightPedalLocal).add(new THREE.Vector3(0, 0.04, 0.02));

    const hipY = wr + 0.67;
    const hipZ = -0.23;

    // Flat-pedal MTB shoes + ankles
    for (const fPos of [lFoot, rFoot]) {
      const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.092, 0.068, 0.22), shoeMat);
      shoe.position.copy(fPos).add(new THREE.Vector3(0, 0.005, 0.03));
      shoe.castShadow = true;
      const ankle = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.038, 0.075, 6), skinMat);
      ankle.position.copy(fPos).add(new THREE.Vector3(0, 0.06, -0.02));
      this.riderGroup.add(shoe, ankle);
    }

    // Tapered off-white riding pants
    const lHip = new THREE.Vector3(0.105, hipY, hipZ);
    const rHip = new THREE.Vector3(-0.105, hipY, hipZ);
    const lKnee = new THREE.Vector3(0.115, wr + 0.36, -0.14);
    const rKnee = new THREE.Vector3(-0.115, wr + 0.38, -0.02);

    this.riderGroup.add(makeTaperedLimb(lHip, lKnee, 0.078, 0.062, pantsMat, 6));
    this.riderGroup.add(makeTaperedLimb(lKnee, lFoot.clone().add(new THREE.Vector3(0, 0.08, -0.02)), 0.06, 0.046, pantsMat, 6));
    this.riderGroup.add(makeTaperedLimb(rHip, rKnee, 0.078, 0.062, pantsMat, 6));
    this.riderGroup.add(makeTaperedLimb(rKnee, rFoot.clone().add(new THREE.Vector3(0, 0.08, -0.02)), 0.06, 0.046, pantsMat, 6));

    const pelvis = new THREE.Mesh(new THREE.CylinderGeometry(0.135, 0.145, 0.15, 7), pantsMat);
    pelvis.scale.set(1.15, 1, 0.8);
    pelvis.position.set(0, hipY + 0.02, hipZ);
    pelvis.castShadow = true;
    this.riderGroup.add(pelvis);

    // Torso leaned forward in downhill attack position
    this.riderTorso.position.set(0, hipY + 0.06, hipZ);
    const torsoCore = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.132, 0.45, 7), jacketMat);
    torsoCore.scale.set(1.18, 1, 0.78);
    torsoCore.position.set(0, 0.21, 0.11);
    torsoCore.rotation.x = 0.56;
    torsoCore.castShadow = true;
    this.riderTorso.add(torsoCore);

    const jacketHem = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.16, 0.12, 7), jacketMat);
    jacketHem.scale.set(1.18, 1, 0.82);
    jacketHem.position.set(0, 0.03, 0.01);
    jacketHem.rotation.x = 0.48;
    this.riderTorso.add(jacketHem);

    // Hydration Backpack + side pockets + waist strap
    const packGroup = new THREE.Group();
    packGroup.position.set(0, 0.26, -0.035);
    packGroup.rotation.x = 0.58;
    const packMain = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.34, 0.13), packMat);
    packMain.castShadow = true;
    const packTop = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.23, 6), packMat);
    packTop.rotation.z = Math.PI / 2;
    packTop.position.set(0, 0.16, -0.01);
    const sidePocketL = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.15, 0.085),
      new THREE.MeshStandardMaterial({ color: 0x3b404b, roughness: 0.85, flatShading: true })
    );
    sidePocketL.position.set(0.125, -0.04, -0.01);
    const sidePocketR = sidePocketL.clone();
    sidePocketR.position.x = -0.125;
    const waistStrap = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.045, 0.23), strapMat);
    waistStrap.position.set(0, -0.1, 0.11);
    packGroup.add(packMain, packTop, sidePocketL, sidePocketR, waistStrap);
    this.riderTorso.add(packGroup);

    // Articulated arms reaching directly to grips
    const gripWorldY = wr + 0.59 - (hipY + 0.06);
    const gripWorldZ = this.spec.wheelbase * 0.5 - 0.23 - hipZ;
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Vector3(side * 0.175, 0.34, 0.18);
      const elbow = new THREE.Vector3(side * 0.245, 0.18, 0.37);
      const wrist = new THREE.Vector3(side * 0.305, gripWorldY + 0.04, gripWorldZ - 0.05);
      const hand = new THREE.Vector3(side * 0.32, gripWorldY + 0.01, gripWorldZ + 0.01);

      this.riderTorso.add(makeTaperedLimb(shoulder, elbow, 0.056, 0.046, jacketMat, 6));
      this.riderTorso.add(makeTaperedLimb(elbow, wrist, 0.046, 0.036, jacketMat, 6));
      this.riderTorso.add(makeTaperedLimb(wrist, hand, 0.034, 0.032, skinMat, 6));
      const fist = new THREE.Mesh(new THREE.DodecahedronGeometry(0.04, 0), skinMat);
      fist.position.copy(hand);
      this.riderTorso.add(fist);
    }

    // Neck + White Full-Face MTB Helmet with Orange Stripe + Amber Goggles
    this.riderHead.position.set(0, 0.43, 0.27);
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.052, 0.058, 0.11, 6), skinMat);
    neck.position.set(0, 0.02, -0.01);
    this.riderHead.add(neck);

    const headSub = new THREE.Group();
    headSub.position.set(0, 0.15, 0.025);
    headSub.rotation.x = 0.08;

    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.158, 1), helmetMat);
    shell.scale.set(0.92, 1.0, 1.15);
    shell.castShadow = true;
    headSub.add(shell);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.04, 0.25), stripeMat);
    stripe.position.set(0, 0.145, 0.02);
    stripe.rotation.x = 0.12;
    headSub.add(stripe);

    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.022, 0.175), helmetMat);
    visor.position.set(0, 0.12, 0.185);
    visor.rotation.x = -0.14;
    visor.castShadow = true;
    const visorStripe = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.026, 0.175), stripeMat);
    visorStripe.position.set(0, 0.122, 0.185);
    visorStripe.rotation.x = -0.14;
    headSub.add(visor, visorStripe);

    const chinbar = new THREE.Mesh(new THREE.BoxGeometry(0.185, 0.095, 0.175), helmetMat);
    chinbar.position.set(0, -0.075, 0.115);
    chinbar.rotation.x = 0.24;
    chinbar.castShadow = true;
    headSub.add(chinbar);

    const faceInner = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.11, 0.12), skinMat);
    faceInner.position.set(0, -0.005, 0.085);
    headSub.add(faceInner);

    const goggleStrap = new THREE.Mesh(new THREE.CylinderGeometry(0.155, 0.155, 0.048, 10, 1, true), goggleStrapMat);
    goggleStrap.scale.set(0.95, 1, 1.16);
    goggleStrap.position.set(0, 0.022, 0.005);
    goggleStrap.rotation.x = 0.1;

    const goggleFrame = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.088, 0.055), strapMat);
    goggleFrame.position.set(0, 0.015, 0.155);
    const goggleLens = new THREE.Mesh(new THREE.BoxGeometry(0.185, 0.068, 0.03), goggleLensMat);
    goggleLens.position.set(0, 0.015, 0.176);

    headSub.add(goggleStrap, goggleFrame, goggleLens);
    this.riderHead.add(headSub);
    this.riderTorso.add(this.riderHead);
    this.riderGroup.add(this.riderTorso);
  }

  private buildExactFPCockpit(
    wr: number,
    frameMat: THREE.Material,
    darkMetal: THREE.Material,
    goldCapMat: THREE.Material,
    gripMat: THREE.Material
  ): void {
    // Eye position looking down the trail at ~-12° so bars, upper crown, gold cap, white top tube & wide arms frame identically to reference Image 2!
    const eyeY = wr + 1.08;
    const eyeZ = 0.02;
    this.fpHelmetAnchor.position.set(0, eyeY, eyeZ);

    this.fpCockpit.position.set(0, eyeY - 0.34, eyeZ + 0.56);

    // Clean white top tube running straight down out of bottom edge of screen
    const fpTopTube = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.048, 0.78), frameMat);
    fpTopTube.position.set(0, -0.15, -0.28);
    fpTopTube.rotation.x = 0.56;
    this.fpCockpit.add(fpTopTube);

    this.fpSteerAssembly.position.set(0, 0, 0);
    this.fpCockpit.add(this.fpSteerAssembly);

    // Dual-Crown Upper Clamp + Two Dark Fork Caps + Gold Octagonal Center Top-Cap
    const clampPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 0.032, 0.092),
      new THREE.MeshStandardMaterial({ color: 0x261d17, roughness: 0.45, metalness: 0.38, flatShading: true })
    );
    clampPlate.position.set(0, -0.046, 0.008);
    clampPlate.rotation.x = 0.26;
    this.fpSteerAssembly.add(clampPlate);

    const capDarkMat = new THREE.MeshStandardMaterial({ color: 0x221914, roughness: 0.4, metalness: 0.42, flatShading: true });
    for (const side of [-1, 1]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.037, 0.039, 0.038, 8), capDarkMat);
      cap.position.set(side * 0.088, -0.028, 0.01);
      cap.rotation.x = 0.26;
      this.fpSteerAssembly.add(cap);
    }

    const stemBlock = new THREE.Mesh(new THREE.BoxGeometry(0.056, 0.052, 0.115), darkMetal);
    stemBlock.position.set(0, 0.0, 0.042);
    const goldTopCap = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.022, 7), goldCapMat);
    goldTopCap.position.set(0, -0.018, -0.008);
    goldTopCap.rotation.x = 0.32;
    this.fpSteerAssembly.add(stemBlock, goldTopCap);

    // Knobby front tire tip peeking just ahead of the stem
    const tirePeekMat = new THREE.MeshStandardMaterial({ color: 0x16171a, roughness: 0.9, flatShading: true });
    const tirePeek = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.042, 0.15, 7), tirePeekMat);
    tirePeek.rotation.x = Math.PI / 2;
    tirePeek.position.set(0, 0.044, 0.185);
    this.fpSteerAssembly.add(tirePeek);
    for (let i = 0; i < 4; i++) {
      const k = new THREE.Mesh(new THREE.BoxGeometry(0.052, 0.018, 0.022), tirePeekMat);
      k.position.set(0, 0.07 - i * 0.004, 0.14 + i * 0.03);
      this.fpSteerAssembly.add(k);
    }

    // Wide Curved Black Riser Handlebar
    this.fpBarGroup.position.set(0, 0.026, 0.055);
    this.fpSteerAssembly.add(this.fpBarGroup);

    const barCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.14, 7), darkMetal);
    barCenter.rotation.z = Math.PI / 2;
    this.fpBarGroup.add(barCenter);

    for (const side of [-1, 1]) {
      const pInner = new THREE.Vector3(side * 0.065, 0, 0);
      const pRise = new THREE.Vector3(side * 0.165, 0.03, -0.015);
      const pOuter = new THREE.Vector3(side * 0.42, 0.025, -0.058);
      this.fpBarGroup.add(makeTube(pInner, pRise, 0.017, 0.016, darkMetal, 7));
      this.fpBarGroup.add(makeTube(pRise, pOuter, 0.016, 0.015, darkMetal, 7));

      const pGripIn = new THREE.Vector3(side * 0.295, 0.027, -0.038);
      this.fpBarGroup.add(makeTube(pGripIn, pOuter, 0.022, 0.022, gripMat, 7));

      const clamp = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.03, 0.042), darkMetal);
      clamp.position.set(side * 0.275, 0.028, -0.012);
      this.fpBarGroup.add(clamp);
    }

    // Symmetrical Low-Poly Rider Arms entering from Left & Right Edges
    const sleeveMat = new THREE.MeshStandardMaterial({ color: 0x202330, roughness: 0.82, flatShading: true });
    const sleeveTrimMat = new THREE.MeshStandardMaterial({ color: 0x8b4c18, roughness: 0.78, flatShading: true });
    const handSkinMat = new THREE.MeshStandardMaterial({ color: 0xebb38d, roughness: 0.7, flatShading: true });

    const buildArm = (side: -1 | 1, container: THREE.Group) => {
      const handPos = new THREE.Vector3(side * 0.37, 0.028, -0.052);
      const cuffPos = new THREE.Vector3(side * 0.56, 0.025, -0.175);
      const elbowPos = new THREE.Vector3(side * 0.94, 0.145, -0.36);

      const hand = new THREE.Mesh(new THREE.DodecahedronGeometry(0.056, 0), handSkinMat);
      hand.scale.set(1.1, 0.85, 1.0);
      hand.position.copy(handPos);
      container.add(hand);

      // Bare lower forearm/wrist skin
      container.add(makeTaperedLimb(handPos, cuffPos, 0.046, 0.058, handSkinMat, 6));
      // Charcoal-navy sleeve extending cleanly off screen edge
      container.add(makeTaperedLimb(cuffPos, elbowPos, 0.068, 0.108, sleeveMat, 6));
      // Warm amber/brown outer edge highlight strip
      const trimStart = cuffPos.clone().add(new THREE.Vector3(side * 0.09, 0.072, -0.04));
      const trimEnd = elbowPos.clone().add(new THREE.Vector3(side * 0.02, 0.108, -0.02));
      container.add(makeTaperedLimb(trimStart, trimEnd, 0.042, 0.088, sleeveTrimMat, 5));
    };

    buildArm(1, this.fpLeftArm);
    buildArm(-1, this.fpRightArm);
    this.fpCockpit.add(this.fpLeftArm, this.fpRightArm);
  }

  public setFirstPerson(enabled: boolean): void {
    this.firstPerson = enabled;
    this.fpCockpit.visible = enabled;
    for (const child of this.chassis.children) {
      if (child !== this.fpCockpit && child !== this.fpHelmetAnchor) {
        child.visible = !enabled;
      }
    }
  }

  public getHelmetWorldTransform(outPos: THREE.Vector3, outQuat: THREE.Quaternion): void {
    this.root.updateMatrixWorld(true);
    this.fpHelmetAnchor.getWorldPosition(outPos);
    this.root.getWorldQuaternion(outQuat);
  }

  public applyPhysicsState(state: BikePhysicsState): void {
    const halfWB = this.spec.wheelbase * 0.5;
    this.root.position.set(state.x, state.y, state.z);
    this.root.rotation.order = 'YXZ';
    this.root.rotation.set(0, state.yaw, 0);

    // Pivot cleanly around rear wheel for Manual, front wheel for Stoppie, center of mass in air!
    let pivotZ = 0;
    let pivotY = state.grounded ? 0 : this.spec.wheelRadius + 0.35;
    if (state.grounded && state.pivotMode === 'rear') {
      pivotZ = -halfWB;
      pivotY = 0;
    } else if (state.grounded && state.pivotMode === 'front') {
      pivotZ = halfWB;
      pivotY = 0;
    }

    this.wheelPivot.position.set(0, pivotY, pivotZ);
    this.bikeBody.position.set(0, -pivotY, -pivotZ);

    this.wheelPivot.rotation.order = 'YXZ';
    this.wheelPivot.rotation.set(
      -state.pitch,
      state.whipAngle * 0.72,
      state.roll + state.tabletopAmount * 0.92 + state.whipAngle * 0.32
    );

    const forkStroke = this.spec.forkTravel * state.frontCompression;
    this.forkLowerGroup.position.y = -0.42 + forkStroke;

    const rearAngle = this.spec.fullSuspension ? state.rearCompression * 0.24 : 0;
    this.rearSwingarm.rotation.x = rearAngle;

    const chassisSag = (state.frontCompression * 0.5 + state.rearCompression * 0.5) * 0.12;
    this.chassis.position.y = -chassisSag;

    this.steerGroup.rotation.y = state.steerAngle + state.barspinAngle;

    // 1st-person cockpit dynamic steering, barspin, suspension dip & sideways lean
    this.fpSteerAssembly.rotation.y = state.steerAngle * 0.85 + state.barspinAngle;
    this.fpCockpit.position.y =
      this.spec.wheelRadius + 1.08 - 0.34 - state.frontCompression * 0.055 - state.crouchAmount * 0.04;
    this.fpCockpit.rotation.z = state.leanAngle * 0.18;

    this.fpLeftArm.position.set(0, 0, Math.sin(state.steerAngle) * 0.16);
    this.fpRightArm.position.set(0, 0, -Math.sin(state.steerAngle) * 0.16);

    this.frontWheel.rotation.x = state.wheelSpin;
    this.rearWheel.rotation.x = state.wheelSpin;

    const weightShiftZ = state.manualActive ? -0.14 : state.stoppieActive ? 0.12 : 0;
    this.riderGroup.position.set(state.leanAngle * 0.08, -state.crouchAmount * 0.15, weightShiftZ);
    this.riderTorso.rotation.z = -state.leanAngle * 0.26;
    this.riderTorso.rotation.x =
      state.crouchAmount * 0.2 + (state.manualActive ? -0.18 : state.stoppieActive ? 0.18 : 0);

    if (state.crashed) {
      this.bikeBody.rotation.z = Math.min(1.42, state.crashTimer * 3.8);
      this.bikeBody.position.y = -pivotY + Math.max(0, Math.sin(Math.min(Math.PI, state.crashTimer * 4)) * 0.4);
    } else {
      this.bikeBody.rotation.z = 0;
    }
  }
}
