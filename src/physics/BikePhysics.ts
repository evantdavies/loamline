import { BikePhysicsState, BikeSpec, InputState } from '../types';
import { WorldData } from '../world/ZoneStructures';

export interface PhysicsCallbacks {
  onHop: (charge: number) => void;
  onLanding: (
    quality: 'stomped' | 'clean' | 'sketchy',
    impactSpeed: number,
    airHeight: number,
    airTime: number,
    isDrop: boolean
  ) => void;
  onPumpBoost: (speedGain: number) => void;
  onTrick: (name: string, points: number, color: string) => void;
  onManualComplete: (timeSec: number, dist: number) => void;
  onStoppieComplete: (timeSec: number) => void;
  onCrash: (reason: string) => void;
}

export class BikePhysics {
  public state: BikePhysicsState;
  private spec: BikeSpec;
  private callbacks: PhysicsCallbacks;

  private pumpCooldown = 0;
  private lastGroundHeight = 0;
  private wasInAir = false;
  private airStartY = 0;
  private hopGraceTimer = 0;
  private barspinDoneInAir = false;
  private whipAwardedInAir = false;
  private tabletopTimeInAir = 0;
  private tabletopAwardedInAir = false;
  private manualActivePrev = false;
  private stoppieActivePrev = false;
  private manualHoldPitch = 0; // relative pitch above ground slope during manual
  private stoppieHoldPitch = 0; // relative pitch below ground slope during stoppie (negative)

  constructor(spec: BikeSpec, callbacks: PhysicsCallbacks) {
    this.spec = spec;
    this.callbacks = callbacks;
    this.state = this.createInitialState(0, 0, 0, 0);
  }

  public setSpec(spec: BikeSpec): void {
    this.spec = spec;
  }

  private createInitialState(x: number, y: number, z: number, yaw: number): BikePhysicsState {
    return {
      x,
      y,
      z,
      vx: 0,
      vy: 0,
      vz: 0,
      yaw,
      pitch: 0,
      roll: 0,
      pitchVel: 0,
      rollVel: 0,
      yawVel: 0,
      steerAngle: 0,
      leanAngle: 0,
      speed: 0,
      wheelSpin: 0,
      crankAngle: 0,
      frontCompression: 0.12,
      rearCompression: 0.12,
      frontGrounded: true,
      rearGrounded: true,
      grounded: true,
      surface: 'dirt',
      groundPitch: 0,
      groundRoll: 0,
      airTime: 0,
      airPeakHeight: 0,
      groundHeightBelow: y,
      crouchAmount: 0,
      hopCharge: 0,
      manualActive: false,
      manualTime: 0,
      manualDist: 0,
      stoppieActive: false,
      stoppieTime: 0,
      pivotMode: 'center',
      barspinAngle: 0,
      barspinActive: false,
      whipAngle: 0,
      tabletopAmount: 0,
      flipAccumulator: 0,
      spinAccumulator: 0,
      mudSplashIntensity: 0,
      skidding: false,
      pumping: false,
      crashed: false,
      crashReason: '',
      crashTimer: 0,
      mudVisorAmount: 0,
    };
  }

  public reset(x: number, y: number, z: number, yaw: number): void {
    this.state = this.createInitialState(x, y, z, yaw);
    this.lastGroundHeight = y;
    this.wasInAir = false;
    this.airStartY = y;
    this.hopGraceTimer = 0;
    this.pumpCooldown = 0;
    this.barspinDoneInAir = false;
    this.whipAwardedInAir = false;
    this.tabletopTimeInAir = 0;
    this.tabletopAwardedInAir = false;
    this.manualActivePrev = false;
    this.stoppieActivePrev = false;
    this.manualHoldPitch = 0;
    this.stoppieHoldPitch = 0;
  }

  public step(dt: number, input: InputState, world: WorldData): void {
    const s = this.state;

    // Gradually clear mud splatter from visor
    if (s.mudVisorAmount > 0) {
      s.mudVisorAmount = Math.max(0, s.mudVisorAmount - dt * (0.09 + Math.abs(s.speed) * 0.008));
    }

    if (s.crashed) {
      s.crashTimer += dt;
      s.vx *= Math.pow(0.22, dt);
      s.vz *= Math.pow(0.22, dt);
      s.x += s.vx * dt;
      s.z += s.vz * dt;
      const g = world.sampleGround(s.x, s.z, s.y);
      s.y = Math.max(g.height, s.y + s.vy * dt);
      s.vy = Math.max(-18, s.vy - 20 * dt);
      if (s.y <= g.height + 0.01) s.vy = 0;
      s.speed = Math.hypot(s.vx, s.vz);
      s.mudSplashIntensity = 0;
      s.skidding = false;
      return;
    }

    if (this.hopGraceTimer > 0) this.hopGraceTimer -= dt;
    if (this.pumpCooldown > 0) this.pumpCooldown -= dt;

    // Smooth sideways lean input (ArrowLeft = +1 lean left, ArrowRight = -1 lean right)
    s.leanAngle += (input.lean - s.leanAngle) * Math.min(1, dt * 11);

    const fwdX = Math.sin(s.yaw);
    const fwdZ = Math.cos(s.yaw);
    const rightX = -Math.cos(s.yaw);
    const rightZ = Math.sin(s.yaw);

    // Two-wheel terrain sampling
    const halfWB = this.spec.wheelbase * 0.5;
    const gCenter = world.sampleGround(s.x, s.z, s.y);
    const gFront = world.sampleGround(s.x + fwdX * halfWB, s.z + fwdZ * halfWB, s.y);
    const gRear = world.sampleGround(s.x - fwdX * halfWB, s.z - fwdZ * halfWB, s.y);

    s.groundHeightBelow = gCenter.height;
    s.surface = gCenter.surface;

    const slopePitch = Math.atan2(gFront.height - gRear.height, this.spec.wheelbase);
    const normalDotRight = gCenter.nx * rightX + gCenter.nz * rightZ;
    const slopeRoll = Math.asin(Math.max(-0.7, Math.min(0.7, -normalDotRight)));
    s.groundPitch = slopePitch;
    s.groundRoll = slopeRoll;

    const clearance = s.y - gCenter.height;
    const attachThreshold = s.grounded ? 0.34 : 0.14;
    const wantGrounded = this.hopGraceTimer <= 0 && clearance <= attachThreshold && s.vy <= 3.0;

    if (wantGrounded) {
      if (this.wasInAir && s.airTime > 0.22) {
        this.evaluateLanding(s, slopePitch, slopeRoll);
        if (s.crashed) return;
      }

      s.grounded = true;
      this.wasInAir = false;
      s.airTime = 0;
      s.airPeakHeight = 0;
      s.flipAccumulator = 0;
      s.spinAccumulator = 0;
      this.barspinDoneInAir = false;
      this.whipAwardedInAir = false;
      this.tabletopTimeInAir = 0;
      this.tabletopAwardedInAir = false;

      s.y = gCenter.height;

      let vFwd = s.vx * fwdX + s.vz * fwdZ;
      let vRight = s.vx * rightX + s.vz * rightZ;

      // Real downhill gravity along the slope
      const gravity = 20.0;
      const slopeAccel = -Math.sin(slopePitch) * gravity * 0.92;
      vFwd += slopeAccel * dt;

      // Pedaling (W)
      const mudSlipPenalty = gCenter.surface === 'mud' && input.throttle > 0.85 ? 0.65 : 1.0;
      const speedRatio = Math.max(0, vFwd / this.spec.maxSpeed);
      const torqueCurve = Math.max(0.0, 1 - speedRatio * 0.96);
      if (input.throttle > 0.02 && torqueCurve > 0.01 && !s.stoppieActive) {
        vFwd += input.throttle * this.spec.pedalPower * torqueCurve * mudSlipPenalty * dt;
      }

      // =========================================================================
      // GROUND MANUAL (ArrowDown / Back) & STOPPIE (ArrowUp / Forward)
      // =========================================================================
      const wantManual = input.pitch > 0.2 && vFwd > 2.2 && !input.hopHeld;
      const wantStoppie = input.pitch < -0.2 && vFwd > 2.0 && !input.hopHeld;

      if (wantManual) {
        // End any active stoppie cleanly
        if (this.stoppieActivePrev && s.stoppieTime >= 0.45) {
          this.callbacks.onStoppieComplete(s.stoppieTime);
        }
        s.stoppieActive = false;
        s.stoppieTime = 0;
        this.stoppieHoldPitch = 0;

        s.manualActive = true;
        s.pivotMode = 'rear';
        s.frontGrounded = false;
        s.rearGrounded = true;

        // Smoothly lift front wheel to authentic manual balance angle (~0.52 rad / 30°)
        const targetManual = 0.52 + (input.pitch - 0.2) * 0.14;
        this.manualHoldPitch += (targetManual - this.manualHoldPitch) * Math.min(1, dt * 8.5);
        s.pitch = slopePitch + this.manualHoldPitch;

        s.manualTime += dt;
        s.manualDist += vFwd * dt;

        // Rear suspension loads up, front fork tops out cleanly
        s.frontCompression *= Math.exp(-12 * dt);
        s.rearCompression += (0.58 - s.rearCompression) * Math.min(1, dt * 10);
      } else if (wantStoppie) {
        // End any active manual cleanly
        if (this.manualActivePrev && s.manualTime >= 0.6) {
          this.callbacks.onManualComplete(s.manualTime, s.manualDist);
        }
        s.manualActive = false;
        s.manualTime = 0;
        s.manualDist = 0;
        this.manualHoldPitch = 0;

        s.stoppieActive = true;
        s.pivotMode = 'front';
        s.frontGrounded = true;
        s.rearGrounded = false;

        // Smooth rolling stoppie brake modulation (easy to hold crisp 1s-2.5s rolling nose-manuals!)
        const frontBrakeMod = input.brake > 0.1 ? 0.32 + input.brake * 0.18 : 0.18;
        vFwd = Math.max(0, vFwd - this.spec.brakePower * frontBrakeMod * dt);

        const targetStoppie = -0.44 - (Math.abs(input.pitch) - 0.2) * 0.12;
        this.stoppieHoldPitch += (targetStoppie - this.stoppieHoldPitch) * Math.min(1, dt * 9.5);
        s.pitch = slopePitch + this.stoppieHoldPitch;

        s.stoppieTime += dt;

        // Front fork dives deep under stoppie load, rear wheel lifts!
        s.frontCompression += (0.76 - s.frontCompression) * Math.min(1, dt * 12);
        s.rearCompression *= Math.exp(-12 * dt);
      } else {
        // Finish manual / stoppie if we were holding one
        if (this.manualActivePrev && s.manualTime >= 0.6) {
          this.callbacks.onManualComplete(s.manualTime, s.manualDist);
        }
        if (this.stoppieActivePrev && s.stoppieTime >= 0.45) {
          this.callbacks.onStoppieComplete(s.stoppieTime);
        }
        s.manualActive = false;
        s.manualTime = 0;
        s.manualDist = 0;
        s.stoppieActive = false;
        s.stoppieTime = 0;
        s.frontGrounded = true;
        s.rearGrounded = true;

        this.manualHoldPitch *= Math.exp(-12 * dt);
        this.stoppieHoldPitch *= Math.exp(-12 * dt);
        if (Math.abs(this.manualHoldPitch) < 0.02 && Math.abs(this.stoppieHoldPitch) < 0.02) {
          s.pivotMode = 'center';
        }
        s.pitch += (slopePitch - s.pitch) * Math.min(1, dt * 14);
      }
      this.manualActivePrev = s.manualActive;
      this.stoppieActivePrev = s.stoppieActive;

      // Regular Braking (S) when not in Stoppie
      s.skidding = false;
      if (input.brake > 0.05 && !s.stoppieActive) {
        if (vFwd > 0.3) {
          const effectiveGrip = gCenter.grip * this.spec.grip;
          const brakeForce = input.brake * this.spec.brakePower * Math.min(1.25, effectiveGrip);
          vFwd = Math.max(0, vFwd - brakeForce * dt);
          if (input.brake > 0.75 && vFwd > 5.2 && !s.manualActive) {
            s.skidding = true;
          }
        } else {
          // Gentle push-back when stopped
          vFwd = Math.max(-3.0, vFwd - input.brake * 5.5 * dt);
        }
      }

      // Surface rolling drag & aero drag
      const aeroDrag = 0.0036 * vFwd * Math.abs(vFwd);
      const rollDrag = gCenter.drag * (gCenter.surface === 'mud' ? 4.2 : 1.45) * vFwd;
      vFwd -= (aeroDrag + rollDrag) * dt;

      // Pumping Mechanic (Shift on downslopes/rollers)
      s.pumping = input.pumpHeld;
      const heightDropRate = (this.lastGroundHeight - gCenter.height) / Math.max(dt, 0.001);
      if (input.pumpHeld && vFwd > 4.2 && heightDropRate > 0.95 && slopePitch < -0.045 && this.pumpCooldown <= 0) {
        const boost = Math.min(2.3, 0.85 + heightDropRate * 0.14);
        vFwd += boost;
        this.pumpCooldown = 0.9;
        this.callbacks.onPumpBoost(boost);
      }

      const downhillCap = this.spec.maxSpeed * 1.65;
      vFwd = Math.max(-3.5, Math.min(downhillCap, vFwd));

      // =========================================================================
      // STEERING (A / D) + SIDEWAYS BODY LEAN (ArrowLeft / ArrowRight)
      //   Combining A/D handlebars with ArrowLeft/Right body lean gives real MTB carving!
      // =========================================================================
      const absSpd = Math.abs(vFwd);
      const speedSteerFactor = 1 / (1 + absSpd * 0.068);
      const combinedTurn = Math.max(-1.35, Math.min(1.35, input.steer + s.leanAngle * 0.65));

      const targetSteerAngle = input.steer * 0.56 * speedSteerFactor + s.leanAngle * 0.12;
      s.steerAngle += (targetSteerAngle - s.steerAngle) * Math.min(1, dt * 13);

      const effectiveGrip = gCenter.grip * this.spec.grip * (1 + Math.abs(s.leanAngle) * 0.18);
      const yawRate =
        combinedTurn *
        (1.82 * this.spec.agility) *
        Math.min(1, absSpd / 2.6) *
        (0.5 + 0.5 * speedSteerFactor) *
        (gCenter.surface === 'mud' ? 0.8 : 1.0);

      // Banked berm assist
      const bermSteerAssist = -slopeRoll * Math.min(1, absSpd / 9.5) * 0.55;
      const directionSign = vFwd >= -0.1 ? 1 : -1;
      s.yaw += (yawRate + bermSteerAssist) * directionSign * dt;

      // Mud splash & slight wheelspin wobble
      if (gCenter.surface === 'mud' && absSpd > 3.5) {
        s.mudSplashIntensity = Math.min(1, absSpd / 13);
        s.mudVisorAmount = Math.min(1, s.mudVisorAmount + dt * 0.2 * s.mudSplashIntensity);
        if (input.throttle > 0.85) {
          s.yaw += Math.sin(performance.now() * 0.015) * 0.3 * dt;
        }
      } else {
        s.mudSplashIntensity = 0;
      }

      // Lateral tire traction
      const lateralGrip = (s.skidding ? 2.8 : 11.5) * effectiveGrip;
      vRight *= Math.exp(-lateralGrip * dt);

      const newFwdX = Math.sin(s.yaw);
      const newFwdZ = Math.cos(s.yaw);
      const newRightX = -Math.cos(s.yaw);
      const newRightZ = Math.sin(s.yaw);
      s.vx = newFwdX * vFwd + newRightX * vRight;
      s.vz = newFwdZ * vFwd + newRightZ * vRight;
      s.vy = Math.tan(slopePitch) * vFwd;
      s.speed = vFwd;

      // Visual bike Roll = Active Sideways Lean (ArrowLeft/Right) + Natural Steering Lean + Berm Slope!
      // Remember: negative roll = lean LEFT, positive roll = lean RIGHT.
      const steerLean = -input.steer * Math.min(0.32, absSpd * 0.022);
      const activeBodyLean = -s.leanAngle * 0.44;
      const targetRoll = Math.max(-0.68, Math.min(0.68, steerLean + activeBodyLean + slopeRoll * 0.72));
      s.roll += (targetRoll - s.roll) * Math.min(1, dt * 11);
      s.pitchVel = 0;
      s.rollVel = 0;

      // Smoothly straighten air tricks on ground
      s.whipAngle *= Math.exp(-12 * dt);
      s.tabletopAmount *= Math.exp(-12 * dt);

      // Suspension compression (crouch / preload / brake dive / rock chatter)
      const targetCrouch = input.hopHeld
        ? 0.38 + input.hopCharge * 0.62
        : input.pumpHeld
          ? 0.72
          : 0.0;
      s.crouchAmount += (targetCrouch - s.crouchAmount) * Math.min(1, dt * 16);
      s.hopCharge = input.hopCharge;

      if (!s.manualActive && !s.stoppieActive) {
        const bumpComp = gCenter.surface === 'rock' ? Math.abs(Math.sin(s.x * 2.5 + s.z * 2.5)) * 0.24 : 0;
        const brakeDive = input.brake * Math.min(0.38, absSpd * 0.026);
        const baseFront = 0.14 + s.crouchAmount * 0.46 + brakeDive + bumpComp;
        const baseRear = 0.14 + s.crouchAmount * 0.5 + bumpComp - brakeDive * 0.25;
        s.frontCompression += (Math.min(1, Math.max(0, baseFront)) - s.frontCompression) * Math.min(1, dt * 15);
        s.rearCompression += (Math.min(1, Math.max(0, baseRear)) - s.rearCompression) * Math.min(1, dt * 15);
      }

      // =========================================================================
      // BUNNY HOP (Space) & NATURAL RAMP LIP LAUNCH
      // =========================================================================
      const isKickerLaunch = gCenter.isRampLip && vFwd > 6.5 && slopePitch > 0.16;
      if (input.hopJustReleased) {
        // End manual/stoppie cleanly when popping a hop out of them!
        if (s.manualActive && s.manualTime >= 0.6) this.callbacks.onManualComplete(s.manualTime, s.manualDist);
        if (s.stoppieActive && s.stoppieTime >= 0.45) this.callbacks.onStoppieComplete(s.stoppieTime);
        s.manualActive = false;
        s.stoppieActive = false;
        s.pivotMode = 'center';

        const hopImpulse = this.spec.hopPower * (0.58 + input.hopCharge * 0.58);
        const lipBonus = gCenter.isRampLip ? 2.2 : 0;
        s.vy = Math.max(s.vy, 0) + hopImpulse + lipBonus;
        s.y += 0.12;
        s.grounded = false;
        this.wasInAir = true;
        this.airStartY = s.y;
        this.hopGraceTimer = 0.16;
        s.pitchVel = 1.25;
        s.frontCompression = 0;
        s.rearCompression = 0;
        this.callbacks.onHop(input.hopCharge);
      } else if (isKickerLaunch && gFront.height < gCenter.height - 0.12) {
        const launchVy = Math.max(2.4, Math.sin(slopePitch) * vFwd * 1.18);
        s.vy = launchVy;
        s.y += 0.08;
        s.grounded = false;
        s.pivotMode = 'center';
        this.wasInAir = true;
        this.airStartY = s.y;
        this.hopGraceTimer = 0.14;
        s.frontCompression = 0;
        s.rearCompression = 0;
      }

      // Advance horizontal position
      s.x += s.vx * dt;
      s.z += s.vz * dt;
      if (s.grounded) {
        const nextG = world.sampleGround(s.x, s.z, s.y);
        const expectedY = s.y + s.vy * dt;
        if (nextG.height < expectedY - 0.42 && vFwd > 4.8) {
          s.y = expectedY;
          s.grounded = false;
          s.pivotMode = 'center';
          this.wasInAir = true;
          this.airStartY = s.y;
          this.hopGraceTimer = 0.12;
        } else {
          s.y = nextG.height;
        }
      }

      this.lastGroundHeight = gCenter.height;
    } else {
      // =========================================================================
      // AIRBORNE PHYSICS:
      //   ArrowDown (Back)        -> BACKFLIP!
      //   ArrowUp (Forward)       -> FRONTFLIP!
      //   ArrowLeft / ArrowRight  -> SIDEWAYS LEAN & AIR WHIP!
      //   A / D                   -> Subtle mid-air trajectory trim & bar turn
      //   F                       -> BARSPIN!
      //   G                       -> TABLETOP!
      // =========================================================================
      if (!this.wasInAir) {
        this.wasInAir = true;
        this.airStartY = s.y;
      }
      s.grounded = false;
      s.frontGrounded = false;
      s.rearGrounded = false;
      s.manualActive = false;
      s.stoppieActive = false;
      s.pivotMode = 'center';
      s.skidding = false;
      s.pumping = false;
      s.mudSplashIntensity = 0;
      s.airTime += dt;

      const heightAboveGround = Math.max(0, s.y - gCenter.height);
      if (heightAboveGround > s.airPeakHeight) {
        s.airPeakHeight = heightAboveGround;
      }

      const gravity = 20.0;
      s.vy -= gravity * dt;
      s.vx *= Math.exp(-0.04 * dt);
      s.vz *= Math.exp(-0.04 * dt);

      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.z += s.vz * dt;
      s.speed = Math.hypot(s.vx, s.vz);

      // Suspension extends in mid-air
      s.frontCompression *= Math.exp(-9 * dt);
      s.rearCompression *= Math.exp(-9 * dt);
      s.crouchAmount *= Math.exp(-8 * dt);

      // Mid-air Backflip (ArrowDown -> +1) & Frontflip (ArrowUp -> -1)
      if (Math.abs(input.pitch) > 0.08) {
        const flipSpeed = 5.45 * this.spec.agility;
        s.pitchVel += (input.pitch * flipSpeed - s.pitchVel) * Math.min(1, dt * 12);
      } else {
        // Crisp angular damping on release so you can spot landings accurately!
        s.pitchVel *= Math.exp(-7.0 * dt);
        // Gentle natural pitch-follow toward downward trajectory if not flipping
        if (s.vy < -3.0 && s.pitch > -0.35 && Math.abs(s.flipAccumulator) < 1.1) {
          s.pitchVel -= 0.35 * dt;
        }
      }

      const dPitch = s.pitchVel * dt;
      s.pitch += dPitch;
      s.flipAccumulator += dPitch;

      if (s.flipAccumulator > Math.PI * 1.68) {
        s.flipAccumulator -= Math.PI * 2;
        s.pitch -= Math.PI * 2;
        this.callbacks.onTrick('BACKFLIP', 650, '#f43f5e');
      } else if (s.flipAccumulator < -Math.PI * 1.68) {
        s.flipAccumulator += Math.PI * 2;
        s.pitch += Math.PI * 2;
        this.callbacks.onTrick('FRONTFLIP', 700, '#fb7185');
      }

      // Sideways Lean in Air (ArrowLeft / ArrowRight) -> Stylish Air Whip & Roll!
      const targetWhip = s.leanAngle * 1.05;
      s.whipAngle += (targetWhip - s.whipAngle) * Math.min(1, dt * 9.5);
      if (!this.whipAwardedInAir && Math.abs(s.whipAngle) > 0.62 && s.airTime > 0.32 && heightAboveGround > 0.85) {
        this.whipAwardedInAir = true;
        this.callbacks.onTrick('AIR WHIP', 300, '#38bdf8');
      }

      // Mid-air roll follows sideways lean cleanly
      const targetAirRoll = -s.leanAngle * 0.55 - input.steer * 0.22;
      s.roll += (targetAirRoll - s.roll) * Math.min(1, dt * 7);

      // Gentle mid-air yaw trim with A/D
      s.yaw += input.steer * 0.65 * dt;
      s.steerAngle += (input.steer * 0.35 - s.steerAngle) * Math.min(1, dt * 10);

      // Barspin (F)
      if (input.barspinPressed && !s.barspinActive && (s.airTime > 0.08 || heightAboveGround > 0.4)) {
        s.barspinActive = true;
        s.barspinAngle = 0;
      }

      // Tabletop (Hold G)
      const targetTT = input.tabletopHeld && heightAboveGround > 0.55 ? 1 : 0;
      s.tabletopAmount += (targetTT - s.tabletopAmount) * Math.min(1, dt * 10);
      if (s.tabletopAmount > 0.68) {
        this.tabletopTimeInAir += dt;
        if (!this.tabletopAwardedInAir && this.tabletopTimeInAir > 0.24) {
          this.tabletopAwardedInAir = true;
          this.callbacks.onTrick('TABLETOP', 350, '#a3e635');
        }
      }
    }

    // Update Barspin rotation
    if (s.barspinActive) {
      s.barspinAngle += dt * 15.5 * this.spec.agility;
      if (s.barspinAngle >= Math.PI * 2) {
        s.barspinAngle = 0;
        s.barspinActive = false;
        if (!this.barspinDoneInAir) {
          this.barspinDoneInAir = true;
          this.callbacks.onTrick('BARSPIN', 320, '#facc15');
        }
      }
    }

    // Wheel rotation
    s.wheelSpin += (s.speed / Math.max(0.2, this.spec.wheelRadius)) * dt;
    if (input.throttle > 0.08 && s.grounded) {
      s.crankAngle += (4.5 + Math.abs(s.speed) * 0.45) * dt;
    }

    // Check Solid Obstacle Collisions (Trees, Boulders)
    for (let i = 0; i < world.obstacles.length; i++) {
      const ob = world.obstacles[i];
      if (s.y > ob.maxY || s.y + 1.4 < ob.minY) continue;
      const dx = s.x - ob.x;
      const dz = s.z - ob.z;
      const minDist = ob.radius + 0.42;
      const d2 = dx * dx + dz * dz;
      if (d2 < minDist * minDist) {
        const dist = Math.sqrt(d2) || 0.01;
        const nx = dx / dist;
        const nz = dz / dist;
        s.x = ob.x + nx * minDist;
        s.z = ob.z + nz * minDist;

        const impactDot = -(s.vx * nx + s.vz * nz);
        if (impactDot > 9.5) {
          this.triggerCrash(`Hit ${ob.label}!`);
          return;
        } else if (impactDot > 0) {
          s.vx += nx * impactDot * 1.2;
          s.vz += nz * impactDot * 1.2;
          s.vx *= 0.65;
          s.vz *= 0.65;
        }
      }
    }

    // Water & world bounds
    if (world.waterY !== undefined && s.y < world.waterY + 0.15) {
      this.triggerCrash('Splashed into the Bay!');
      return;
    }
    if (s.x < world.bounds.minX + 2) {
      s.x = world.bounds.minX + 2;
      s.vx = Math.abs(s.vx) * 0.4;
    } else if (s.x > world.bounds.maxX - 2) {
      s.x = world.bounds.maxX - 2;
      s.vx = -Math.abs(s.vx) * 0.4;
    }
    if (s.z < world.bounds.minZ + 2) {
      s.z = world.bounds.minZ + 2;
      s.vz = Math.abs(s.vz) * 0.4;
    } else if (s.z > world.bounds.maxZ - 2) {
      s.z = world.bounds.maxZ - 2;
      s.vz = -Math.abs(s.vz) * 0.4;
    }
  }

  private evaluateLanding(s: BikePhysicsState, slopePitch: number, _slopeRoll: number): void {
    let normPitch = (s.pitch + Math.PI) % (Math.PI * 2);
    if (normPitch < 0) normPitch += Math.PI * 2;
    normPitch -= Math.PI;
    s.pitch = normPitch;

    const pitchDiff = Math.abs(normPitch - slopePitch);
    const impactSpeed = Math.abs(s.vy);
    const isDrop = this.airStartY - s.y > 1.75;

    const compSpike = Math.min(1, impactSpeed / 12.5);
    s.frontCompression = Math.max(s.frontCompression, compSpike);
    s.rearCompression = Math.max(s.rearCompression, compSpike);

    const stabilityBonus = (this.spec.stability - 1) * 0.18;
    const crashPitchLimit = 1.12 + stabilityBonus;

    if (Math.abs(normPitch) > 1.98) {
      this.triggerCrash('Inverted Landing!');
      return;
    }
    if (pitchDiff > crashPitchLimit && impactSpeed > 5.4) {
      const reason = normPitch < slopePitch ? 'Over the Bars (OTB)!' : 'Looped Out on Landing!';
      this.triggerCrash(reason);
      return;
    }
    if (s.tabletopAmount > 0.72 && impactSpeed > 6.2) {
      this.triggerCrash('Landed Sideways!');
      return;
    }

    if (pitchDiff < 0.36 && Math.abs(s.whipAngle) < 0.5) {
      const fwdX = Math.sin(s.yaw);
      const fwdZ = Math.cos(s.yaw);
      s.vx += fwdX * 1.15;
      s.vz += fwdZ * 1.15;
      this.callbacks.onLanding('stomped', impactSpeed, s.airPeakHeight, s.airTime, isDrop);
    } else if (pitchDiff < 0.68) {
      this.callbacks.onLanding('clean', impactSpeed, s.airPeakHeight, s.airTime, isDrop);
    } else {
      s.vx *= 0.78;
      s.vz *= 0.78;
      this.callbacks.onLanding('sketchy', impactSpeed, s.airPeakHeight, s.airTime, isDrop);
    }
  }

  public triggerCrash(reason: string): void {
    const s = this.state;
    if (s.crashed) return;
    s.crashed = true;
    s.crashReason = reason;
    s.crashTimer = 0;
    s.barspinActive = false;
    s.manualActive = false;
    s.stoppieActive = false;
    this.callbacks.onCrash(reason);
  }
}
