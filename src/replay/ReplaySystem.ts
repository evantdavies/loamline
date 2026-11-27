import { BikePhysicsState, LiveryConfig, ReplayFrame, SavedReplay, ZoneId } from '../types';

export class ReplayRecorder {
  private frames: ReplayFrame[] = [];
  private sampleAccum = 0;
  private readonly sampleInterval = 1 / 25;
  private readonly maxFrames = 25 * 140;

  public reset(): void {
    this.frames = [];
    this.sampleAccum = 0;
  }

  public record(elapsedTime: number, dt: number, s: BikePhysicsState): void {
    this.sampleAccum += dt;
    if (this.sampleAccum < this.sampleInterval) return;
    this.sampleAccum -= this.sampleInterval;

    if (this.frames.length >= this.maxFrames) {
      this.frames.shift();
    }

    const r3 = (v: number) => Math.round(v * 1000) / 1000;
    const r2 = (v: number) => Math.round(v * 100) / 100;

    this.frames.push({
      t: r2(elapsedTime),
      x: r3(s.x),
      y: r3(s.y),
      z: r3(s.z),
      yaw: r3(s.yaw),
      pitch: r3(s.pitch),
      roll: r3(s.roll),
      steer: r2(s.steerAngle),
      lean: r2(s.leanAngle),
      fc: r2(s.frontCompression),
      rc: r2(s.rearCompression),
      ws: r2(s.wheelSpin),
      bs: r2(s.barspinAngle),
      whip: r2(s.whipAngle),
      tt: r2(s.tabletopAmount),
      crouch: r2(s.crouchAmount),
      spd: r2(s.speed),
      gnd: s.grounded,
      crash: s.crashed,
      pm: s.pivotMode === 'rear' ? 1 : s.pivotMode === 'front' ? 2 : 0,
    });
  }

  public hasFrames(): boolean {
    return this.frames.length >= 15;
  }

  public buildSavedReplay(
    zoneId: ZoneId,
    zoneName: string,
    bikeId: string,
    livery: LiveryConfig,
    duration: number,
    score: number,
    finished: boolean
  ): SavedReplay {
    const now = new Date();
    const dateStr = `${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    return {
      id: `rep_${Date.now()}`,
      zoneId,
      zoneName,
      bikeId,
      livery: { ...livery },
      dateStr,
      duration: Math.round(duration * 10) / 10,
      score: Math.round(score),
      finished,
      frames: this.frames.slice(),
    };
  }
}

export function interpolateReplayFrame(frames: ReplayFrame[], time: number, out: BikePhysicsState): void {
  if (frames.length === 0) return;
  if (time <= frames[0].t) {
    applyFrame(frames[0], out);
    return;
  }
  const last = frames[frames.length - 1];
  if (time >= last.t) {
    applyFrame(last, out);
    return;
  }

  let lo = 0;
  let hi = frames.length - 1;
  while (lo + 1 < hi) {
    const mid = (lo + hi) >> 1;
    if (frames[mid].t <= time) lo = mid;
    else hi = mid;
  }

  const a = frames[lo];
  const b = frames[hi];
  const span = Math.max(0.0001, b.t - a.t);
  const alpha = Math.max(0, Math.min(1, (time - a.t) / span));

  const lerp = (v0: number, v1: number) => v0 + (v1 - v0) * alpha;
  const lerpAngle = (a0: number, a1: number) => {
    let diff = ((a1 - a0 + Math.PI) % (Math.PI * 2)) - Math.PI;
    if (diff < -Math.PI) diff += Math.PI * 2;
    return a0 + diff * alpha;
  };

  out.x = lerp(a.x, b.x);
  out.y = lerp(a.y, b.y);
  out.z = lerp(a.z, b.z);
  out.yaw = lerpAngle(a.yaw, b.yaw);
  out.pitch = lerpAngle(a.pitch, b.pitch);
  out.roll = lerpAngle(a.roll, b.roll);
  out.steerAngle = lerp(a.steer, b.steer);
  out.leanAngle = lerp(a.lean ?? 0, b.lean ?? 0);
  out.frontCompression = lerp(a.fc, b.fc);
  out.rearCompression = lerp(a.rc, b.rc);
  out.wheelSpin = lerp(a.ws, b.ws);
  out.barspinAngle = lerp(a.bs, b.bs);
  out.whipAngle = lerp(a.whip, b.whip);
  out.tabletopAmount = lerp(a.tt, b.tt);
  out.crouchAmount = lerp(a.crouch, b.crouch);
  out.speed = lerp(a.spd, b.spd);
  out.grounded = a.gnd;
  out.crashed = a.crash;
  out.crashTimer = a.crash ? 0.5 : 0;
  out.pivotMode = a.pm === 1 ? 'rear' : a.pm === 2 ? 'front' : 'center';
}

function applyFrame(f: ReplayFrame, out: BikePhysicsState): void {
  out.x = f.x;
  out.y = f.y;
  out.z = f.z;
  out.yaw = f.yaw;
  out.pitch = f.pitch;
  out.roll = f.roll;
  out.steerAngle = f.steer;
  out.leanAngle = f.lean ?? 0;
  out.frontCompression = f.fc;
  out.rearCompression = f.rc;
  out.wheelSpin = f.ws;
  out.barspinAngle = f.bs;
  out.whipAngle = f.whip;
  out.tabletopAmount = f.tt;
  out.crouchAmount = f.crouch;
  out.speed = f.spd;
  out.grounded = f.gnd;
  out.crashed = f.crash;
  out.crashTimer = f.crash ? 0.5 : 0;
  out.pivotMode = f.pm === 1 ? 'rear' : f.pm === 2 ? 'front' : 'center';
}
