import { GameSettings, InputState } from '../types';

export interface TouchInputState {
  steer: number;
  throttle: number;
  brake: number;
  pitch: number;
  lean: number;
  hopHeld: boolean;
  pumpHeld: boolean;
  barspinQueued: boolean;
  tabletopHeld: boolean;
}

export class InputManager {
  private keys = new Set<string>();
  private justPressed = new Set<string>();
  private hopCharge = 0;
  private prevHopHeld = false;
  private prevGamepadButtons: boolean[] = [];
  private prevRightStickDown = false;
  private rightStickDownCharge = 0;

  // Tilt steering
  private tiltEnabled = false;
  private tiltBaseline: number | null = null;
  private currentTiltRaw = 0;
  private currentTiltSteer = 0;

  public touch: TouchInputState = {
    steer: 0,
    throttle: 0,
    brake: 0,
    pitch: 0,
    lean: 0,
    hopHeld: false,
    pumpHeld: false,
    barspinQueued: false,
    tabletopHeld: false,
  };

  private lastState: InputState;

  constructor() {
    this.lastState = this.createEmptyState();
    window.addEventListener('keydown', this.onKeyDown, { passive: false });
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('blur', this.onBlur);
    window.addEventListener('deviceorientation', this.onDeviceOrientation);
  }

  private createEmptyState(): InputState {
    return {
      throttle: 0,
      brake: 0,
      steer: 0,
      pitch: 0,
      lean: 0,
      hopHeld: false,
      hopJustReleased: false,
      hopCharge: 0,
      pumpHeld: false,
      barspinPressed: false,
      tabletopHeld: false,
      cameraTogglePressed: false,
      checkpointPressed: false,
      restartPressed: false,
      setMarkerPressed: false,
      gotoMarkerPressed: false,
      pausePressed: false,
      usingGamepad: false,
      tiltAngleDeg: 0,
    };
  }

  private onKeyDown = (e: KeyboardEvent): void => {
    const code = e.code;
    if (
      code === 'Space' ||
      code === 'ArrowUp' ||
      code === 'ArrowDown' ||
      code === 'ArrowLeft' ||
      code === 'ArrowRight'
    ) {
      if (document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
      }
    }
    if (!this.keys.has(code)) {
      this.justPressed.add(code);
    }
    this.keys.add(code);
  };

  private onKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code);
  };

  private onBlur = (): void => {
    this.keys.clear();
    this.justPressed.clear();
  };

  private onDeviceOrientation = (e: DeviceOrientationEvent): void => {
    if (e.beta === null && e.gamma === null) return;
    const isLandscape = window.innerWidth >= window.innerHeight;
    const raw = isLandscape ? (e.beta ?? 0) : (e.gamma ?? 0);
    this.currentTiltRaw = raw;
    if (this.tiltBaseline === null) {
      this.tiltBaseline = raw;
    }
    const delta = raw - this.tiltBaseline;
    this.currentTiltSteer = Math.max(-1, Math.min(1, -delta / 26));
  };

  public calibrateTilt(): void {
    this.tiltBaseline = this.currentTiltRaw;
  }

  public setTiltEnabled(enabled: boolean): void {
    this.tiltEnabled = enabled;
    if (enabled) {
      this.calibrateTilt();
      const devOrient = DeviceOrientationEvent as unknown as {
        requestPermission?: () => Promise<string>;
      };
      if (typeof devOrient?.requestPermission === 'function') {
        devOrient.requestPermission().catch(() => {});
      }
    }
  }

  public getLastState(): InputState {
    return this.lastState;
  }

  public poll(dt: number, settings: GameSettings): InputState {
    const s = this.createEmptyState();
    const sens = settings.steeringSensitivity;

    // =========================================================================
    // EXACT REQUESTED CONTROLS:
    //   WASD       -> W = Pedal, S = Brake, A / D = Steer Left / Right
    //   Arrow Keys -> Down = Lean Back (Manual on ground / Backflip in air)
    //                 Up   = Lean Forward (Stoppie on ground / Frontflip in air)
    //                 Left / Right = Sideways Body Lean (Carve on ground / Whip & Roll in air)
    //   (I/J/K/L also mirrored as optional alternative to Arrow Keys!)
    //   Space      -> Bunny Hop (Hold preload, Release pop)
    //   Shift      -> Pump / Attack Crouch
    //   F          -> Barspin (in air)
    //   G          -> Tabletop (in air)
    // =========================================================================
    const keyThrottle = this.keys.has('KeyW') ? 1 : 0;
    const keyBrake = this.keys.has('KeyS') ? 1 : 0;
    const keySteerLeft = this.keys.has('KeyA') ? 1 : 0;
    const keySteerRight = this.keys.has('KeyD') ? 1 : 0;

    // Back / Forward = Manual & Stoppie on ground, Backflip & Frontflip in air
    const keyLeanBack = this.keys.has('ArrowDown') || this.keys.has('KeyK') ? 1 : 0;
    const keyLeanFwd = this.keys.has('ArrowUp') || this.keys.has('KeyI') ? 1 : 0;

    // Sideways = Body Lean Left / Right (carving on ground, whip/roll in air)
    const keyLeanLeft = this.keys.has('ArrowLeft') || this.keys.has('KeyJ') ? 1 : 0;
    const keyLeanRight = this.keys.has('ArrowRight') || this.keys.has('KeyL') ? 1 : 0;

    let throttle = Math.max(keyThrottle, this.touch.throttle);
    let brake = Math.max(keyBrake, this.touch.brake);
    let steer = keySteerLeft - keySteerRight;
    if (Math.abs(this.touch.steer) > Math.abs(steer)) {
      steer = this.touch.steer;
    }
    if (this.tiltEnabled && settings.tiltSteering && Math.abs(this.currentTiltSteer) > 0.05) {
      steer = this.currentTiltSteer;
    }

    let pitch = keyLeanBack - keyLeanFwd; // +1 = Back (Manual/Backflip), -1 = Forward (Stoppie/Frontflip)
    if (Math.abs(this.touch.pitch) > Math.abs(pitch)) {
      pitch = this.touch.pitch;
    }

    let lean = keyLeanLeft - keyLeanRight; // +1 = Lean Left, -1 = Lean Right
    if (Math.abs(this.touch.lean) > Math.abs(lean)) {
      lean = this.touch.lean;
    }

    let hopHeld = this.keys.has('Space') || this.touch.hopHeld;
    let pumpHeld =
      this.keys.has('ShiftLeft') ||
      this.keys.has('ShiftRight') ||
      this.touch.pumpHeld;

    let barspinPressed = this.justPressed.has('KeyF') || this.touch.barspinQueued;
    this.touch.barspinQueued = false;

    let tabletopHeld = this.keys.has('KeyG') || this.touch.tabletopHeld;

    s.cameraTogglePressed = this.justPressed.has('KeyC');
    s.checkpointPressed = this.justPressed.has('KeyR');
    s.restartPressed = this.justPressed.has('Backspace');
    s.setMarkerPressed = this.justPressed.has('KeyT');
    s.gotoMarkerPressed = this.justPressed.has('KeyY');
    s.pausePressed = this.justPressed.has('Escape') || this.justPressed.has('KeyP');

    // Gamepad API (Left Stick = Steer, RT/LT = Pedal/Brake, Right Stick = Pitch & Sideways Lean)
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const pad = pads.find((p) => p && p.connected);
    if (pad) {
      const deadzone = (v: number, dz = 0.14) =>
        Math.abs(v) < dz ? 0 : Math.sign(v) * ((Math.abs(v) - dz) / (1 - dz));

      const lx = deadzone(pad.axes[0] ?? 0);
      const rx = deadzone(pad.axes[2] ?? 0);
      const ry = deadzone(pad.axes[3] ?? 0);
      const rt = pad.buttons[7]?.value ?? 0;
      const lt = pad.buttons[6]?.value ?? 0;

      const btnDown = (idx: number) => Boolean(pad.buttons[idx]?.pressed);
      const btnJust = (idx: number) =>
        btnDown(idx) && !(this.prevGamepadButtons[idx] ?? false);

      if (Math.abs(lx) > 0.01 || rt > 0.05 || lt > 0.05 || Math.abs(rx) > 0.01 || Math.abs(ry) > 0.01) {
        s.usingGamepad = true;
      }

      if (rt > throttle) throttle = rt;
      if (lt > brake) brake = lt;
      if (Math.abs(lx) > Math.abs(steer)) steer = -lx;
      if (Math.abs(ry) > Math.abs(pitch)) pitch = ry; // pull down = Manual/Backflip, push up = Stoppie/Frontflip
      if (Math.abs(rx) > Math.abs(lean)) lean = -rx;  // stick left/right = sideways lean

      // Right-stick quick flick up for bunny hop
      if (ry > 0.6) {
        this.rightStickDownCharge = Math.min(1, this.rightStickDownCharge + dt * 2.4);
        this.prevRightStickDown = true;
      } else if (this.prevRightStickDown && ry < -0.35) {
        s.hopJustReleased = true;
        s.hopCharge = Math.max(0.45, this.rightStickDownCharge);
        this.prevRightStickDown = false;
        this.rightStickDownCharge = 0;
      } else if (Math.abs(ry) < 0.25) {
        this.rightStickDownCharge = Math.max(0, this.rightStickDownCharge - dt * 3);
        if (this.rightStickDownCharge <= 0) this.prevRightStickDown = false;
      }

      if (btnDown(0)) hopHeld = true;
      if (btnDown(4)) pumpHeld = true;
      if (btnJust(2)) barspinPressed = true;
      if (btnDown(1)) tabletopHeld = true;
      if (btnJust(3)) s.cameraTogglePressed = true;
      if (btnJust(5)) s.checkpointPressed = true;
      if (btnJust(9)) s.pausePressed = true;

      this.prevGamepadButtons = pad.buttons.map((b) => Boolean(b?.pressed));
    }

    // Bunny Hop preload & release pop
    if (hopHeld) {
      this.hopCharge = Math.min(1, this.hopCharge + dt * 2.6);
    } else if (this.prevHopHeld) {
      s.hopJustReleased = true;
      s.hopCharge = Math.max(0.35, this.hopCharge);
      this.hopCharge = 0;
    } else {
      this.hopCharge = Math.max(0, this.hopCharge - dt * 5);
    }
    this.prevHopHeld = hopHeld;

    s.throttle = Math.max(0, Math.min(1, throttle));
    s.brake = Math.max(0, Math.min(1, brake));
    s.steer = Math.max(-1, Math.min(1, steer * sens));
    s.pitch = Math.max(-1, Math.min(1, pitch));
    s.lean = Math.max(-1, Math.min(1, lean));
    s.hopHeld = hopHeld;
    if (!s.hopJustReleased) {
      s.hopCharge = this.hopCharge;
    }
    s.pumpHeld = pumpHeld;
    s.barspinPressed = barspinPressed;
    s.tabletopHeld = tabletopHeld;
    s.tiltAngleDeg = this.tiltBaseline !== null ? this.currentTiltRaw - this.tiltBaseline : 0;

    this.justPressed.clear();
    this.lastState = s;
    return s;
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('blur', this.onBlur);
    window.removeEventListener('deviceorientation', this.onDeviceOrientation);
  }
}
