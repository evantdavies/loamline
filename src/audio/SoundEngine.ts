import { BikePhysicsState, SurfaceType } from '../types';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  // Continuous loop nodes
  private tireSource: AudioBufferSourceNode | null = null;
  private tireFilter: BiquadFilterNode | null = null;
  private tireGain: GainNode | null = null;

  private windSource: AudioBufferSourceNode | null = null;
  private windFilter: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;

  private hubOsc: OscillatorNode | null = null;
  private hubLfo: OscillatorNode | null = null;
  private hubLfoGain: GainNode | null = null;
  private hubFilter: BiquadFilterNode | null = null;
  private hubGain: GainNode | null = null;

  private skidSource: AudioBufferSourceNode | null = null;
  private skidFilter: BiquadFilterNode | null = null;
  private skidGain: GainNode | null = null;

  private volume = 0.7;
  private initialized = false;

  public unlock(): void {
    if (!this.initialized) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.value = this.volume;
        this.masterGain.connect(this.ctx.destination);

        // Create 2s white noise buffer
        const sampleRate = this.ctx.sampleRate;
        const length = sampleRate * 2;
        this.noiseBuffer = this.ctx.createBuffer(1, length, sampleRate);
        const data = this.noiseBuffer.getChannelData(0);
        for (let i = 0; i < length; i++) {
          data[i] = Math.random() * 2 - 1;
        }

        // Tire rolling loop
        this.tireSource = this.ctx.createBufferSource();
        this.tireSource.buffer = this.noiseBuffer;
        this.tireSource.loop = true;
        this.tireFilter = this.ctx.createBiquadFilter();
        this.tireFilter.type = 'bandpass';
        this.tireFilter.frequency.value = 320;
        this.tireFilter.Q.value = 1.1;
        this.tireGain = this.ctx.createGain();
        this.tireGain.gain.value = 0;
        this.tireSource.connect(this.tireFilter);
        this.tireFilter.connect(this.tireGain);
        this.tireGain.connect(this.masterGain);
        this.tireSource.start();

        // Wind rush loop
        this.windSource = this.ctx.createBufferSource();
        this.windSource.buffer = this.noiseBuffer;
        this.windSource.loop = true;
        this.windFilter = this.ctx.createBiquadFilter();
        this.windFilter.type = 'lowpass';
        this.windFilter.frequency.value = 450;
        this.windGain = this.ctx.createGain();
        this.windGain.gain.value = 0;
        this.windSource.connect(this.windFilter);
        this.windFilter.connect(this.windGain);
        this.windGain.connect(this.masterGain);
        this.windSource.start();

        // MTB Freehub Ratchet Buzz (high-engagement 108-POE style!)
        this.hubOsc = this.ctx.createOscillator();
        this.hubOsc.type = 'sawtooth';
        this.hubOsc.frequency.value = 160;
        this.hubFilter = this.ctx.createBiquadFilter();
        this.hubFilter.type = 'bandpass';
        this.hubFilter.frequency.value = 1800;
        this.hubFilter.Q.value = 3.2;
        this.hubGain = this.ctx.createGain();
        this.hubGain.gain.value = 0;
        this.hubLfo = this.ctx.createOscillator();
        this.hubLfo.type = 'square';
        this.hubLfo.frequency.value = 28;
        this.hubLfoGain = this.ctx.createGain();
        this.hubLfoGain.gain.value = 0.02;
        this.hubOsc.connect(this.hubFilter);
        this.hubFilter.connect(this.hubGain);
        this.hubGain.connect(this.masterGain);
        this.hubOsc.start();
        this.hubLfo.start();

        // Brake skid / drift gravel loop
        this.skidSource = this.ctx.createBufferSource();
        this.skidSource.buffer = this.noiseBuffer;
        this.skidSource.loop = true;
        this.skidFilter = this.ctx.createBiquadFilter();
        this.skidFilter.type = 'highpass';
        this.skidFilter.frequency.value = 950;
        this.skidGain = this.ctx.createGain();
        this.skidGain.gain.value = 0;
        this.skidSource.connect(this.skidFilter);
        this.skidFilter.connect(this.skidGain);
        this.skidGain.connect(this.masterGain);
        this.skidSource.start();

        this.initialized = true;
      } catch {
        // ignore audio errors
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  public setVolume(v: number): void {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.04);
    }
  }

  public silenceContinuous(): void {
    if (!this.initialized || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.tireGain?.gain.setTargetAtTime(0, now, 0.05);
    this.windGain?.gain.setTargetAtTime(0, now, 0.05);
    this.hubGain?.gain.setTargetAtTime(0, now, 0.05);
    this.skidGain?.gain.setTargetAtTime(0, now, 0.05);
  }

  public updateContinuous(state: BikePhysicsState, pedaling: boolean): void {
    if (!this.initialized || !this.ctx) return;
    const now = this.ctx.currentTime;
    const spd = Math.abs(state.speed);
    const normSpd = Math.min(1, spd / 24);

    // Tire sound per surface
    if (state.grounded && !state.crashed && spd > 0.4) {
      const freqMap: Record<SurfaceType, number> = {
        dirt: 340,
        mud: 195,
        wood: 520,
        rock: 660,
        metal: 880,
        grass: 240,
        concrete: 460,
      };
      const baseFreq = freqMap[state.surface] ?? 340;
      const targetFreq = baseFreq + normSpd * 380;
      const targetVol = (state.surface === 'mud' ? 0.16 : state.surface === 'wood' ? 0.14 : 0.11) * normSpd;
      this.tireFilter?.frequency.setTargetAtTime(targetFreq, now, 0.06);
      this.tireGain?.gain.setTargetAtTime(targetVol, now, 0.05);
    } else {
      this.tireGain?.gain.setTargetAtTime(0, now, 0.05);
    }

    // Wind rush
    const airFactor = state.grounded ? 1 : 1.5;
    const windVol = Math.max(0, (normSpd - 0.15) * 0.14 * airFactor);
    this.windFilter?.frequency.setTargetAtTime(280 + normSpd * 950, now, 0.08);
    this.windGain?.gain.setTargetAtTime(state.crashed ? 0 : windVol, now, 0.08);

    // Freehub ratchet buzz when coasting (not pedaling and moving!)
    if (!pedaling && spd > 2.2 && !state.crashed) {
      const buzzFreq = 65 + Math.min(260, spd * 11.5);
      this.hubOsc?.frequency.setTargetAtTime(buzzFreq, now, 0.04);
      this.hubGain?.gain.setTargetAtTime(0.032 * Math.min(1, spd / 12), now, 0.05);
    } else {
      this.hubGain?.gain.setTargetAtTime(0, now, 0.04);
    }

    // Skid sound
    const skidVol = state.skidding && state.grounded && !state.crashed ? 0.14 * Math.min(1, spd / 8) : 0;
    this.skidGain?.gain.setTargetAtTime(skidVol, now, 0.04);
  }

  public playHop(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.11);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.14);
  }

  public playLanding(intensity: number, surface: SurfaceType): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const clamped = Math.max(0.15, Math.min(1, intensity));

    // Suspension thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    const startF = surface === 'wood' ? 145 : surface === 'metal' ? 210 : 105;
    osc.frequency.setValueAtTime(startF, now);
    osc.frequency.exponentialRampToValueAtTime(34, now + 0.16);
    gain.gain.setValueAtTime(0.28 * clamped, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.19);

    // Hydraulic fork air hiss
    if (this.noiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const flt = this.ctx.createBiquadFilter();
      flt.type = 'bandpass';
      flt.frequency.value = surface === 'mud' ? 450 : 1650;
      const ng = this.ctx.createGain();
      ng.gain.setValueAtTime(0.12 * clamped, now);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      src.connect(flt);
      flt.connect(ng);
      ng.connect(this.masterGain);
      src.start(now);
      src.stop(now + 0.12);
    }
  }

  public playPumpBoost(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.14);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.17);
  }

  public playTrick(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const freqs = [523.25, 659.25];
    freqs.forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.045);
      g.gain.setValueAtTime(0.12, now + idx * 0.045);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.045 + 0.16);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + idx * 0.045);
      osc.stop(now + idx * 0.045 + 0.17);
    });
  }

  public playCheckpoint(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25];
    notes.forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      g.gain.setValueAtTime(0.14, now + idx * 0.06);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.22);
    });
  }

  public playCargoTag(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const notes = [587.33, 880, 1174.66];
    notes.forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.05);
      g.gain.setValueAtTime(0.15, now + idx * 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.24);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.25);
    });
  }

  public playChallengeComplete(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + idx * 0.07);
      g.gain.setValueAtTime(0.16, now + idx * 0.07);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.3);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.32);
    });
  }

  public playCrash(): void {
    if (!this.initialized || !this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(28, now + 0.35);
    g.gain.setValueAtTime(0.28, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.4);

    if (this.noiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const flt = this.ctx.createBiquadFilter();
      flt.type = 'lowpass';
      flt.frequency.value = 600;
      const ng = this.ctx.createGain();
      ng.gain.setValueAtTime(0.26, now);
      ng.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      src.connect(flt);
      flt.connect(ng);
      ng.connect(this.masterGain);
      src.start(now);
      src.stop(now + 0.32);
    }
  }
}
