export type ZoneId =
  | 'training_hall'
  | 'jump_park'
  | 'timber_shore'
  | 'harbour_yard'
  | 'dream_track';

export type SurfaceType =
  | 'dirt'
  | 'mud'
  | 'wood'
  | 'rock'
  | 'metal'
  | 'grass'
  | 'concrete';

export type CameraMode = 'first_person' | 'chase' | 'action';

export type LiveryPattern = 'solid' | 'stripes' | 'splatter' | 'camo' | 'racing';

export interface LiveryConfig {
  primaryColor: string;
  accentColor: string;
  forkColor: string;
  rimColor: string;
  pattern: LiveryPattern;
}

export interface BikeUpgrades {
  fork: number;   // 1..3
  shock: number;  // 1..3
  tires: number;  // 1..3
  brakes: number; // 1..3
}

export interface BikeSpec {
  id: string;
  name: string;
  category: string;
  description: string;
  cost: number;
  fullSuspension: boolean;
  dualCrown: boolean;
  wheelRadius: number;
  wheelbase: number;
  forkTravel: number;
  shockTravel: number;
  maxSpeed: number;
  pedalPower: number;
  brakePower: number;
  hopPower: number;
  agility: number;
  grip: number;
  stability: number;
  defaultLivery: LiveryConfig;
}

export interface GameSettings {
  cameraMode: CameraMode;
  steeringSensitivity: number;
  tiltSteering: boolean;
  touchControls: 'auto' | 'on' | 'off';
  fov: number;
  shadows: boolean;
  volume: number;
  units: 'kmh' | 'mph';
  showKeyHints: boolean;
}

export interface ChallengeDef {
  id: string;
  title: string;
  description: string;
  reward: number;
  type:
    | 'speed'
    | 'air_height'
    | 'air_time'
    | 'bunny_hop'
    | 'manual_time'
    | 'manual_dist'
    | 'stoppie_time'
    | 'log_clear'
    | 'barspin'
    | 'whip'
    | 'backflip'
    | 'frontflip'
    | 'tabletop'
    | 'pump_boosts'
    | 'clean_landings'
    | 'mud_traverse'
    | 'wood_ride'
    | 'finish_run'
    | 'finish_time'
    | 'combo_score'
    | 'total_score'
    | 'cargo_tags'
    | 'no_crash_finish'
    | 'drop_stomp';
  target: number;
}

export interface CargoTagDef {
  id: string;
  x: number;
  y: number;
  z: number;
  label: string;
}

export interface CheckpointDef {
  index: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  width: number;
  isFinish?: boolean;
  label?: string;
}

export interface HopLogDef {
  id: string;
  x: number;
  y: number;
  z: number;
  yaw: number;
  width: number;
  height: number; // 0.12, 0.22, 0.34 etc.
  label: string;
}

export interface ZoneMeta {
  id: ZoneId;
  name: string;
  subtitle: string;
  difficulty: number;
  accent: string;
  description: string;
  parTime: number;
  challenges: ChallengeDef[];
  cargoTagCount: number;
}

export interface GroundInfo {
  height: number;
  nx: number;
  ny: number;
  nz: number;
  surface: SurfaceType;
  grip: number;
  drag: number;
  isRampLip?: boolean;
  bankAngle?: number;
}

export interface InputState {
  throttle: number;      // W (0..1)
  brake: number;         // S (0..1)
  steer: number;         // A (+1 left) / D (-1 right)
  pitch: number;         // ArrowDown (+1 lean back: Manual / Backflip) / ArrowUp (-1 lean forward: Stoppie / Frontflip)
  lean: number;          // ArrowLeft (+1 lean left) / ArrowRight (-1 lean right)
  hopHeld: boolean;      // Space
  hopJustReleased: boolean;
  hopCharge: number;     // 0..1
  pumpHeld: boolean;     // Shift
  barspinPressed: boolean; // F
  tabletopHeld: boolean;   // G
  cameraTogglePressed: boolean; // C
  checkpointPressed: boolean;   // R
  restartPressed: boolean;      // Backspace
  setMarkerPressed: boolean;    // T
  gotoMarkerPressed: boolean;   // Y
  pausePressed: boolean;        // Esc / P
  usingGamepad: boolean;
  tiltAngleDeg: number;
}

export interface BikePhysicsState {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  yaw: number;
  pitch: number;         // positive = nose up (manual / backflip), negative = nose down (stoppie / frontflip)
  roll: number;          // negative = lean left, positive = lean right
  pitchVel: number;
  rollVel: number;
  yawVel: number;
  steerAngle: number;
  leanAngle: number;     // smoothed sideways body lean (-1..1)
  speed: number;
  wheelSpin: number;
  crankAngle: number;
  frontCompression: number; // 0..1
  rearCompression: number;  // 0..1
  frontGrounded: boolean;
  rearGrounded: boolean;
  grounded: boolean;
  surface: SurfaceType;
  groundPitch: number;
  groundRoll: number;
  airTime: number;
  airPeakHeight: number;
  groundHeightBelow: number;
  crouchAmount: number;
  hopCharge: number;
  manualActive: boolean;
  manualTime: number;
  manualDist: number;
  stoppieActive: boolean;
  stoppieTime: number;
  pivotMode: 'center' | 'rear' | 'front'; // rear = manual pivot, front = stoppie pivot!
  barspinAngle: number;
  barspinActive: boolean;
  whipAngle: number;
  tabletopAmount: number;
  flipAccumulator: number;
  spinAccumulator: number;
  mudSplashIntensity: number;
  skidding: boolean;
  pumping: boolean;
  crashed: boolean;
  crashReason: string;
  crashTimer: number;
  mudVisorAmount: number;
}

export interface TrickPopup {
  id: number;
  text: string;
  points: number;
  color: string;
  timeLeft: number;
}

export interface RunStats {
  zoneId: ZoneId;
  elapsedTime: number;
  score: number;
  comboScore: number;
  comboCount: number;
  comboTricks: string[];
  maxSpeedKmh: number;
  maxAirHeight: number;
  maxAirTime: number;
  bunnyHops: number;
  maxManualTime: number;
  maxManualDist: number;
  maxStoppieTime: number;
  logsCleared: number;
  barspins: number;
  whips: number;
  backflips: number;
  frontflips: number;
  tabletops: number;
  pumpBoosts: number;
  cleanLandings: number;
  dropStomps: number;
  mudDistance: number;
  woodDistance: number;
  crashes: number;
  finished: boolean;
  finishTime: number;
  currentCheckpoint: number;
  totalCheckpoints: number;
  collectedTagIds: string[];
}

export interface ReplayFrame {
  t: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  roll: number;
  steer: number;
  lean: number;
  fc: number;
  rc: number;
  ws: number;
  bs: number;
  whip: number;
  tt: number;
  crouch: number;
  spd: number;
  gnd: boolean;
  crash: boolean;
  pm: number; // 0=center, 1=rear(manual), 2=front(stoppie)
}

export interface SavedReplay {
  id: string;
  zoneId: ZoneId;
  zoneName: string;
  bikeId: string;
  livery: LiveryConfig;
  dateStr: string;
  duration: number;
  score: number;
  finished: boolean;
  frames: ReplayFrame[];
}

export interface PlayerProfile {
  mudCoins: number;
  selectedBikeId: string;
  unlockedBikes: string[];
  upgrades: Record<string, BikeUpgrades>;
  liveries: Record<string, LiveryConfig>;
  completedChallenges: Record<string, boolean>;
  bestTimes: Partial<Record<ZoneId, number>>;
  bestScores: Partial<Record<ZoneId, number>>;
  collectedTags: Record<string, boolean>;
  settings: GameSettings;
}
