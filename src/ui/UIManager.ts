import { BIKES, getBikeById, getEffectiveBikeSpec, LIVERY_PRESETS, UPGRADE_COSTS } from '../data/bikes';
import { getBikeLivery, getBikeUpgrades, saveProfile } from '../data/storage';
import { getZoneMeta, ZONES } from '../data/zones';
import { EngineMode, GameEngine, ReplayCamMode } from '../engine/GameEngine';
import { LiveryPattern, RunStats, SavedReplay, SurfaceType, ZoneId } from '../types';

type MenuSubView = 'home' | 'zones' | 'replays' | 'controls' | 'settings';
type GarageTab = 'bikes' | 'upgrades' | 'livery';

function formatTime(sec: number): string {
  const mins = Math.floor(sec / 60);
  const rem = sec % 60;
  return `${mins}:${rem < 10 ? '0' : ''}${rem.toFixed(2)}`;
}

const SURFACE_BADGE_COLORS: Record<SurfaceType, { bg: string; fg: string }> = {
  dirt: { bg: '#78350f', fg: '#fde68a' },
  mud: { bg: '#451a03', fg: '#fb923c' },
  wood: { bg: '#713f12', fg: '#fef08a' },
  rock: { bg: '#334155', fg: '#e2e8f0' },
  metal: { bg: '#1e3a5f', fg: '#7dd3fc' },
  grass: { bg: '#14532d', fg: '#86efac' },
  concrete: { bg: '#3f3f46', fg: '#e4e4e7' },
};

export class UIManager {
  private root: HTMLElement;
  private engine: GameEngine;

  private menuSub: MenuSubView = 'home';
  private garageTab: GarageTab = 'bikes';
  private showPauseSettings = false;
  private challengesExpanded = true;
  private finishModalData: { stats: RunStats; newRecord: boolean; coinsEarned: number } | null = null;

  // Cached HUD element refs for zero-thrash 20Hz riding updates
  private hudRefs: {
    timer?: HTMLElement;
    score?: HTMLElement;
    cp?: HTMLElement;
    tags?: HTMLElement;
    coins?: HTMLElement;
    speedNum?: HTMLElement;
    speedUnit?: HTMLElement;
    surfaceBadge?: HTMLElement;
    manualBadge?: HTMLElement;
    forkBar?: HTMLElement;
    shockBar?: HTMLElement;
    hopBar?: HTMLElement;
    attGround?: HTMLElement;
    attBike?: HTMLElement;
    centerFeed?: HTMLElement;
    challengeList?: HTMLElement;
    crashOverlay?: HTMLElement;
    crashReason?: HTMLElement;
    camBtn?: HTMLElement;
  } = {};

  private replayRefs: {
    timeLabel?: HTMLElement;
    scrubber?: HTMLInputElement;
    playBtn?: HTMLElement;
  } = {};

  constructor(root: HTMLElement, engine: GameEngine) {
    this.root = root;
    this.engine = engine;
    this.render();
  }

  public onModeChange(mode: EngineMode): void {
    this.finishModalData = null;
    this.showPauseSettings = false;
    if (mode === 'menu') {
      this.menuSub = 'home';
    }
    this.render();
  }

  public onPauseChange(_paused: boolean): void {
    this.showPauseSettings = false;
    this.render();
  }

  public onRunFinished(stats: RunStats, newRecord: boolean, coinsEarned: number): void {
    this.finishModalData = { stats, newRecord, coinsEarned };
    this.render();
  }

  public onDataChanged(): void {
    if (this.engine.mode !== 'riding' && this.engine.mode !== 'replay') {
      this.render();
    }
  }

  public updateHud(): void {
    if (this.engine.mode === 'riding' && !this.engine.paused && !this.finishModalData) {
      this.patchRidingHud();
    } else if (this.engine.mode === 'replay') {
      this.patchReplayHud();
    }
  }

  public render(): void {
    this.hudRefs = {};
    this.replayRefs = {};

    if (this.engine.mode === 'menu') {
      this.renderMenu();
      return;
    }
    if (this.engine.mode === 'garage') {
      this.renderGarage();
      return;
    }
    if (this.engine.mode === 'replay') {
      this.renderReplayViewer();
      return;
    }
    if (this.engine.mode === 'riding') {
      this.renderRidingShell();
      this.patchRidingHud();
    }
  }

  // ==================== MAIN MENU & SUB-MODALS ====================
  private renderMenu(): void {
    const profile = this.engine.profile;
    const activeBike = getBikeById(profile.selectedBikeId);
    const totalDone = Object.keys(profile.completedChallenges).filter((k) => profile.completedChallenges[k]).length;
    const totalChallenges = ZONES.reduce((sum, z) => sum + z.challenges.length, 0);

    let subModalHtml = '';
    if (this.menuSub === 'zones') subModalHtml = this.buildZonesModalHtml();
    if (this.menuSub === 'replays') subModalHtml = this.buildReplaysModalHtml();
    if (this.menuSub === 'controls') subModalHtml = this.buildControlsModalHtml();
    if (this.menuSub === 'settings') subModalHtml = this.buildSettingsModalHtml(false);

    this.root.innerHTML = `
      <div class="menu-shell pointer-auto">
        <div class="menu-topbar">
          <div class="brand-block">
            <h1>LOAM<span>LINE</span></h1>
            <div class="brand-tagline">3D MTB Physics · Downhill · Dirt Jumps · Freeride</div>
          </div>
          <div class="coin-pill" title="Earn Credits by completing zone tasks and finding Cargo Tags">
            <span class="coin-dot"></span>
            <span>${profile.mudCoins.toLocaleString()} CREDITS</span>
          </div>
        </div>

        <nav class="menu-nav">
          <button class="nav-btn primary" data-action="open-zones">
            <span>RIDE</span>
            <span class="nav-sub">5 ZONES · ${totalDone}/${totalChallenges} TASKS</span>
          </button>
          <button class="nav-btn" data-action="open-garage">
            <span>MY GARAGE</span>
            <span class="nav-sub">${profile.unlockedBikes.length}/${BIKES.length} BIKES</span>
          </button>
          <button class="nav-btn" data-action="open-replays">
            <span>REPLAYS</span>
            <span class="nav-sub">${this.engine.replays.length} SAVED</span>
          </button>
          <button class="nav-btn" data-action="open-controls">
            <span>CONTROLS</span>
            <span class="nav-sub">KB · PAD · TILT</span>
          </button>
          <button class="nav-btn" data-action="open-settings">
            <span>SETTINGS</span>
            <span class="nav-sub">${profile.settings.cameraMode === 'first_person' ? 'HELMET POV' : 'CHASE CAM'}</span>
          </button>
        </nav>

        <div class="menu-footer">
          <div class="active-bike-chip">
            <strong>ACTIVE BIKE:</strong>
            <span style="color:var(--accent)">${activeBike.name}</span>
            <span style="color:var(--text-dim)">(${activeBike.category})</span>
          </div>
          <div>WASD Pedal/Brake/Steer · ↑↓ Stoppie/Manual (Air: Front/Backflip) · ←→ Lean/Whip · SPACE Hop · SHIFT Pump · F Barspin · C Cam</div>
        </div>
      </div>
      ${subModalHtml}
    `;

    this.bindMenuEvents();
  }

  private buildZonesModalHtml(): string {
    const profile = this.engine.profile;
    const totalTags = Object.keys(profile.collectedTags).filter((k) => profile.collectedTags[k]).length;

    const cards = ZONES.map((z) => {
      const doneCount = z.challenges.filter((c) => profile.completedChallenges[c.id]).length;
      const pct = Math.round((doneCount / z.challenges.length) * 100);
      const best = profile.bestTimes[z.id];
      const stars = '★'.repeat(z.difficulty) + '☆'.repeat(5 - z.difficulty);

      return `
        <div class="zone-card" style="border-top-color:${z.accent}">
          <div class="zone-card-head">
            <div>
              <h3>${z.name}</h3>
              <div style="font-size:0.75rem;color:${z.accent};font-weight:600">${z.subtitle}</div>
            </div>
            <div class="zone-stars" title="Difficulty ${z.difficulty}/5">${stars}</div>
          </div>
          <p class="zone-desc">${z.description}</p>
          <div class="zone-meta-row">
            <span>Tasks: <strong>${doneCount}/${z.challenges.length}</strong></span>
            <span>${best !== undefined ? `Best: <strong>${formatTime(best)}</strong>` : `Par: ${formatTime(z.parTime)}`}</span>
          </div>
          ${z.cargoTagCount > 0 ? `<div class="zone-meta-row"><span>Cargo Tags Found</span><strong style="color:var(--accent-gold)">${totalTags}/${z.cargoTagCount}</strong></div>` : ''}
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${z.accent}"></div></div>
          <button class="btn accent" data-start-zone="${z.id}">DROP IN &amp; RIDE</button>
        </div>
      `;
    }).join('');

    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window">
          <div class="panel-header">
            <h2>SELECT ZONE</h2>
            <div style="display:flex;align-items:center;gap:12px">
              <label style="display:flex;align-items:center;gap:7px;font-size:0.82rem;cursor:pointer">
                <input type="checkbox" id="quick-tilt-toggle" ${profile.settings.tiltSteering ? 'checked' : ''} />
                <span>Tilt Steering</span>
              </label>
              <button class="btn" data-action="close-sub">BACK</button>
            </div>
          </div>
          <div class="panel-body">
            <div class="zones-grid">${cards}</div>
          </div>
        </div>
      </div>
    `;
  }

  private buildReplaysModalHtml(): string {
    const replays = this.engine.replays;
    const rows =
      replays.length === 0
        ? `<div style="text-align:center;padding:42px 16px;color:var(--text-dim)">
             <p style="font-size:1.05rem;margin-bottom:8px">No saved replays yet!</p>
             <p style="font-size:0.86rem">Finish any zone run (or click <strong>Save Replay</strong> in the Pause menu) to record and watch your lines from multiple camera angles.</p>
           </div>`
        : replays
            .map(
              (r: SavedReplay) => `
            <div class="upgrade-row" style="margin-bottom:10px">
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:1.05rem">
                  ${r.zoneName} ${r.finished ? '<span style="color:var(--accent-lime);font-size:0.75rem">FINISHED</span>' : '<span style="color:var(--accent-sky);font-size:0.75rem">CLIP</span>'}
                </div>
                <div style="font-size:0.78rem;color:var(--text-dim)">
                  ${r.dateStr} · ${r.duration.toFixed(1)}s · Score ${r.score.toLocaleString()} · ${getBikeById(r.bikeId).name}
                </div>
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn accent" data-watch-replay="${r.id}">WATCH</button>
                <button class="btn danger" data-delete-replay="${r.id}">DELETE</button>
              </div>
            </div>
          `
            )
            .join('');

    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(740px,95vw)">
          <div class="panel-header">
            <h2>REPLAYS</h2>
            <button class="btn" data-action="close-sub">BACK</button>
          </div>
          <div class="panel-body">${rows}</div>
        </div>
      </div>
    `;
  }

  private buildControlsModalHtml(): string {
    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window">
          <div class="panel-header">
            <h2>CONTROLS GUIDE</h2>
            <button class="btn" data-action="close-sub">BACK</button>
          </div>
          <div class="panel-body">
            <div class="controls-grid">
              <div class="control-card">
                <h3>PC Keyboard</h3>
                <div class="bind-row"><span>Pedal / Accelerate</span><span class="bind-key">W</span></div>
                <div class="bind-row"><span>Brake / Skid / Stoppie Assist</span><span class="bind-key">S</span></div>
                <div class="bind-row"><span>Steer Handlebars Left / Right</span><span class="bind-key">A / D</span></div>
                <div class="bind-row"><span>Manual (Ground) / Backflip (Air)</span><span class="bind-key">↓ / K</span></div>
                <div class="bind-row"><span>Stoppie (Ground) / Frontflip (Air)</span><span class="bind-key">↑ / I</span></div>
                <div class="bind-row"><span>Sideways Lean (Carve / Air Whip)</span><span class="bind-key">← → / J L</span></div>
                <div class="bind-row"><span>Bunny Hop (Hold Preload, Release Pop)</span><span class="bind-key">SPACE</span></div>
                <div class="bind-row"><span>Pump Rollers / Crouch</span><span class="bind-key">SHIFT</span></div>
                <div class="bind-row"><span>Barspin (Mid-Air)</span><span class="bind-key">F</span></div>
                <div class="bind-row"><span>Tabletop (Hold Mid-Air)</span><span class="bind-key">G</span></div>
                <div class="bind-row"><span>Camera (Helmet POV / Chase / Action)</span><span class="bind-key">C</span></div>
                <div class="bind-row"><span>Checkpoint / Full Restart</span><span class="bind-key">R / BACKSPACE</span></div>
                <div class="bind-row"><span>Set / Warp Session Marker</span><span class="bind-key">T / Y</span></div>
              </div>

              <div class="control-card">
                <h3>External Gamepad / Controller</h3>
                <div class="bind-row"><span>Steer Handlebars</span><span class="bind-key">Left Stick</span></div>
                <div class="bind-row"><span>Pedal / Accelerate</span><span class="bind-key">RT / R2</span></div>
                <div class="bind-row"><span>Brake / Skid</span><span class="bind-key">LT / L2</span></div>
                <div class="bind-row"><span>Manual / Backflip</span><span class="bind-key">Right Stick Down</span></div>
                <div class="bind-row"><span>Stoppie / Frontflip</span><span class="bind-key">Right Stick Up</span></div>
                <div class="bind-row"><span>Sideways Lean / Air Whip</span><span class="bind-key">Right Stick Left/Right</span></div>
                <div class="bind-row"><span>Bunny Hop</span><span class="bind-key">A / Cross</span></div>
                <div class="bind-row"><span>Pump / Crouch</span><span class="bind-key">LB / L1</span></div>
                <div class="bind-row"><span>Barspin / Tabletop</span><span class="bind-key">X / B</span></div>
                <div class="bind-row"><span>Switch Camera / Checkpoint</span><span class="bind-key">Y / RB</span></div>
              </div>

              <div class="control-card">
                <h3>Mobile Touch &amp; Riding Tips</h3>
                <div class="bind-row"><span>On-Screen Joystick</span><span class="bind-key">Default Touch</span></div>
                <div class="bind-row"><span>Tilt Steering</span><span class="bind-key">Toggle in Settings</span></div>
                <p style="font-size:0.81rem;color:#cbd5e1;line-height:1.5;margin-top:12px">
                  <strong>MTB Technique:</strong><br/>
                  • <strong>Manuals:</strong> Hold <kbd>↓</kbd> while rolling to balance on your rear wheel.<br/>
                  • <strong>Stoppies:</strong> Hold <kbd>↑</kbd> (and tap <kbd>S</kbd>) while rolling to nose-manual on your front wheel.<br/>
                  • <strong>Sideways Lean:</strong> Hold <kbd>←</kbd>/<kbd>→</kbd> with <kbd>A</kbd>/<kbd>D</kbd> to carve hard through berms, or whip in mid-air.<br/>
                  • <strong>Flips:</strong> Hold <kbd>↓</kbd> in air to Backflip or <kbd>↑</kbd> to Frontflip — release before landing to spot the slope!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private buildSettingsModalHtml(fromPause: boolean): string {
    const s = this.engine.profile.settings;
    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(640px,95vw)">
          <div class="panel-header">
            <h2>SETTINGS</h2>
            <button class="btn" data-action="${fromPause ? 'close-pause-settings' : 'close-sub'}">DONE</button>
          </div>
          <div class="panel-body">
            <div class="setting-row">
              <div>
                <div class="setting-label">Camera Perspective</div>
                <div class="setting-sub">Loamline defaults to First-Person Helmet POV</div>
              </div>
              <select id="set-camera" class="btn">
                <option value="first_person" ${s.cameraMode === 'first_person' ? 'selected' : ''}>Helmet POV (1st Person)</option>
                <option value="chase" ${s.cameraMode === 'chase' ? 'selected' : ''}>Trail Chase (3rd Person)</option>
                <option value="action" ${s.cameraMode === 'action' ? 'selected' : ''}>Close Action Cam</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Steering Sensitivity (${s.steeringSensitivity.toFixed(2)}x)</div>
                <div class="setting-sub">Adjust steering responsiveness for keyboard, pad, or tilt</div>
              </div>
              <input id="set-sens" type="range" min="0.5" max="1.8" step="0.05" value="${s.steeringSensitivity}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Tilt Steering (Mobile Landscape)</div>
                <div class="setting-sub">Hold phone sideways like a steering wheel; auto-calibrates each run</div>
              </div>
              <input id="set-tilt" type="checkbox" ${s.tiltSteering ? 'checked' : ''} style="width:20px;height:20px" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">On-Screen Touch Controls</div>
                <div class="setting-sub">Show virtual steering joystick &amp; MTB touch buttons</div>
              </div>
              <select id="set-touch" class="btn">
                <option value="auto" ${s.touchControls === 'auto' ? 'selected' : ''}>Auto (Touch Devices)</option>
                <option value="on" ${s.touchControls === 'on' ? 'selected' : ''}>Always On</option>
                <option value="off" ${s.touchControls === 'off' ? 'selected' : ''}>Off</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Field of View (${s.fov}°)</div>
                <div class="setting-sub">Wider FOV increases downhill speed sensation</div>
              </div>
              <input id="set-fov" type="range" min="65" max="95" step="1" value="${s.fov}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Dynamic Shadows</div>
                <div class="setting-sub">Disable on lower-end devices for extra framerate</div>
              </div>
              <input id="set-shadows" type="checkbox" ${s.shadows ? 'checked' : ''} style="width:20px;height:20px" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Audio Volume (${Math.round(s.volume * 100)}%)</div>
                <div class="setting-sub">Freehub buzz, tire surfaces, suspension &amp; effects</div>
              </div>
              <input id="set-vol" type="range" min="0" max="1" step="0.05" value="${s.volume}" />
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Speed Units</div>
                <div class="setting-sub">Display telemetry in km/h or mph</div>
              </div>
              <select id="set-units" class="btn">
                <option value="kmh" ${s.units === 'kmh' ? 'selected' : ''}>KM/H</option>
                <option value="mph" ${s.units === 'mph' ? 'selected' : ''}>MPH</option>
              </select>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">In-Ride Keybind Hints</div>
                <div class="setting-sub">Show compact control strip at bottom of screen</div>
              </div>
              <input id="set-hints" type="checkbox" ${s.showKeyHints ? 'checked' : ''} style="width:20px;height:20px" />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private bindMenuEvents(): void {
    this.root.querySelectorAll('[data-action]').forEach((el) => {
      el.addEventListener('click', () => {
        const act = (el as HTMLElement).dataset.action;
        if (act === 'open-zones') {
          this.menuSub = 'zones';
          this.render();
        } else if (act === 'open-garage') {
          this.engine.openGarage();
        } else if (act === 'open-replays') {
          this.menuSub = 'replays';
          this.render();
        } else if (act === 'open-controls') {
          this.menuSub = 'controls';
          this.render();
        } else if (act === 'open-settings') {
          this.menuSub = 'settings';
          this.render();
        } else if (act === 'close-sub') {
          this.menuSub = 'home';
          this.render();
        }
      });
    });

    this.root.querySelectorAll('[data-start-zone]').forEach((el) => {
      el.addEventListener('click', () => {
        const z = (el as HTMLElement).dataset.startZone as ZoneId;
        this.engine.startZone(z);
      });
    });

    const quickTilt = this.root.querySelector('#quick-tilt-toggle') as HTMLInputElement | null;
    if (quickTilt) {
      quickTilt.addEventListener('change', () => {
        this.engine.profile.settings.tiltSteering = quickTilt.checked;
        this.engine.applySettings();
      });
    }

    this.root.querySelectorAll('[data-watch-replay]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = (el as HTMLElement).dataset.watchReplay;
        const rep = this.engine.replays.find((r) => r.id === id);
        if (rep) this.engine.startReplay(rep);
      });
    });

    this.root.querySelectorAll('[data-delete-replay]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = (el as HTMLElement).dataset.deleteReplay!;
        this.engine.removeReplay(id);
        this.render();
      });
    });

    this.bindSettingsControls();
  }

  private bindSettingsControls(): void {
    const s = this.engine.profile.settings;
    const camSel = this.root.querySelector('#set-camera') as HTMLSelectElement | null;
    const sens = this.root.querySelector('#set-sens') as HTMLInputElement | null;
    const tilt = this.root.querySelector('#set-tilt') as HTMLInputElement | null;
    const touch = this.root.querySelector('#set-touch') as HTMLSelectElement | null;
    const fov = this.root.querySelector('#set-fov') as HTMLInputElement | null;
    const shadows = this.root.querySelector('#set-shadows') as HTMLInputElement | null;
    const vol = this.root.querySelector('#set-vol') as HTMLInputElement | null;
    const units = this.root.querySelector('#set-units') as HTMLSelectElement | null;
    const hints = this.root.querySelector('#set-hints') as HTMLInputElement | null;

    if (camSel) {
      camSel.addEventListener('change', () => {
        s.cameraMode = camSel.value as typeof s.cameraMode;
        this.engine.applySettings();
      });
    }
    if (sens) {
      sens.addEventListener('input', () => {
        s.steeringSensitivity = parseFloat(sens.value);
        this.engine.applySettings();
      });
    }
    if (tilt) {
      tilt.addEventListener('change', () => {
        s.tiltSteering = tilt.checked;
        this.engine.applySettings();
      });
    }
    if (touch) {
      touch.addEventListener('change', () => {
        s.touchControls = touch.value as typeof s.touchControls;
        this.engine.applySettings();
      });
    }
    if (fov) {
      fov.addEventListener('input', () => {
        s.fov = parseInt(fov.value, 10);
        this.engine.applySettings();
      });
    }
    if (shadows) {
      shadows.addEventListener('change', () => {
        s.shadows = shadows.checked;
        this.engine.applySettings();
      });
    }
    if (vol) {
      vol.addEventListener('input', () => {
        s.volume = parseFloat(vol.value);
        this.engine.applySettings();
      });
    }
    if (units) {
      units.addEventListener('change', () => {
        s.units = units.value as typeof s.units;
        this.engine.applySettings();
      });
    }
    if (hints) {
      hints.addEventListener('change', () => {
        s.showKeyHints = hints.checked;
        this.engine.applySettings();
      });
    }
  }

  // ==================== MY GARAGE (INTERACTIVE 3D!) ====================
  private renderGarage(): void {
    const profile = this.engine.profile;
    const bike = getBikeById(profile.selectedBikeId);
    const upg = getBikeUpgrades(profile, bike.id);
    const eff = getEffectiveBikeSpec(bike, upg);
    const liv = getBikeLivery(profile, bike.id);

    let tabBody = '';
    if (this.garageTab === 'bikes') {
      tabBody = BIKES.map((b) => {
        const owned = profile.unlockedBikes.includes(b.id);
        const selected = profile.selectedBikeId === b.id;
        return `
          <div class="bike-item ${selected ? 'selected' : ''}" data-select-bike="${b.id}">
            <div style="display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-family:var(--font-display);font-weight:700;font-size:1.05rem">${b.name}</div>
                <div style="font-size:0.74rem;color:var(--accent)">${b.category}</div>
              </div>
              ${
                owned
                  ? selected
                    ? `<span style="color:var(--accent-lime);font-weight:700;font-size:0.76rem">EQUIPPED</span>`
                    : `<span style="color:#cbd5e1;font-size:0.76rem">OWNED</span>`
                  : `<button class="btn accent" style="padding:6px 10px;font-size:0.76rem" data-buy-bike="${b.id}" ${profile.mudCoins < b.cost ? 'disabled' : ''}>BUY ${b.cost}</button>`
              }
            </div>
            <p style="font-size:0.78rem;color:#cbd5e1;line-height:1.4">${b.description}</p>
          </div>
        `;
      }).join('');
    } else if (this.garageTab === 'upgrades') {
      const parts: { key: keyof typeof upg; name: string; desc: string }[] = [
        { key: 'fork', name: 'Suspension Fork', desc: 'More pop, air agility & gold Kashima stanchions at Lv.3' },
        { key: 'shock', name: 'Rear Shock', desc: 'Smoother drop landings & higher stability' },
        { key: 'tires', name: 'Knobby Mud Tires', desc: 'Extra mud grip, faster pedaling & top speed' },
        { key: 'brakes', name: '4-Piston Disc Brakes', desc: 'Sharper corner entry braking & control' },
      ];

      tabBody =
        parts
          .map((p) => {
            const lvl = upg[p.key];
            const nextCost = UPGRADE_COSTS[lvl + 1];
            return `
              <div class="upgrade-row">
                <div>
                  <div style="font-weight:700;font-size:0.9rem">${p.name} <span style="color:var(--accent-lime)">Lv.${lvl}/3</span></div>
                  <div style="font-size:0.74rem;color:var(--text-dim)">${p.desc}</div>
                </div>
                ${
                  lvl >= 3
                    ? `<span style="color:var(--accent-gold);font-family:var(--font-display);font-weight:700;font-size:0.8rem">MAXED</span>`
                    : `<button class="btn accent" style="padding:7px 11px;font-size:0.78rem" data-upgrade-part="${p.key}" ${profile.mudCoins < nextCost ? 'disabled' : ''}>${nextCost} CR</button>`
                }
              </div>
            `;
          })
          .join('') +
        `
          <div style="margin-top:8px;padding:12px;background:var(--bg-card);border-radius:10px;border:1px solid var(--border)">
            <div style="font-family:var(--font-display);font-size:0.82rem;color:var(--accent);margin-bottom:8px">CURRENT BIKE SPECS</div>
            ${this.statBarHtml('TOP SPEED', Math.min(100, Math.round((eff.maxSpeed / 31) * 100)))}
            ${this.statBarHtml('BUNNY POP', Math.min(100, Math.round((eff.hopPower / 10) * 100)))}
            ${this.statBarHtml('MUD GRIP', Math.min(100, Math.round((eff.grip / 1.75) * 100)))}
            ${this.statBarHtml('STABILITY', Math.min(100, Math.round((eff.stability / 1.8) * 100)))}
            ${this.statBarHtml('AGILITY', Math.min(100, Math.round((eff.agility / 1.6) * 100)))}
          </div>
        `;
    } else {
      const patterns: LiveryPattern[] = ['solid', 'stripes', 'splatter', 'camo', 'racing'];
      tabBody = `
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">CUSTOM PAINT &amp; HARDWARE</div>
          <div class="swatch-grid">
            <label class="color-field"><span>Frame Paint</span><input type="color" id="liv-primary" value="${liv.primaryColor}" /></label>
            <label class="color-field"><span>Graphics / Grips</span><input type="color" id="liv-accent" value="${liv.accentColor}" /></label>
            <label class="color-field"><span>Fork Lowers</span><input type="color" id="liv-fork" value="${liv.forkColor}" /></label>
            <label class="color-field"><span>Alloy Rims</span><input type="color" id="liv-rim" value="${liv.rimColor}" /></label>
          </div>
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">FRAME GRAPHIC PATTERN</div>
          <div class="pattern-pills">
            ${patterns
              .map(
                (pat) =>
                  `<button class="pill-btn ${liv.pattern === pat ? 'active' : ''}" data-pattern="${pat}">${pat}</button>`
              )
              .join('')}
          </div>
        </div>
        <div>
          <div style="font-size:0.78rem;color:var(--text-dim);margin-bottom:8px">FACTORY LIVERY PRESETS</div>
          <div class="pattern-pills">
            ${LIVERY_PRESETS.map(
              (pr, i) => `<button class="pill-btn" data-preset="${i}">${pr.name}</button>`
            ).join('')}
          </div>
        </div>
      `;
    }

    this.root.innerHTML = `
      <div class="garage-shell">
        <div class="garage-left-hint">
          <div class="garage-badge">
            <button class="btn" data-garage-back>← MENU</button>
            <div>
              <div style="font-family:var(--font-display);font-weight:700;font-size:1.15rem">MY GARAGE</div>
              <div style="font-size:0.76rem;color:var(--text-dim)">Drag anywhere to orbit bike 360°</div>
            </div>
          </div>
          <div class="coin-pill pointer-auto">
            <span class="coin-dot"></span>
            <span>${profile.mudCoins.toLocaleString()} CREDITS</span>
          </div>
        </div>

        <aside class="garage-sidebar">
          <div class="garage-tabs">
            <button class="garage-tab ${this.garageTab === 'bikes' ? 'active' : ''}" data-gtab="bikes">BIKES</button>
            <button class="garage-tab ${this.garageTab === 'upgrades' ? 'active' : ''}" data-gtab="upgrades">UPGRADES</button>
            <button class="garage-tab ${this.garageTab === 'livery' ? 'active' : ''}" data-gtab="livery">LIVERY</button>
          </div>
          <div class="garage-content">${tabBody}</div>
          <div style="padding:12px 16px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
            <div style="font-size:0.78rem;color:var(--text-dim)">Selected: <strong style="color:#fff">${bike.name}</strong></div>
            <button class="btn lime" data-garage-ride>RIDE NOW</button>
          </div>
        </aside>
      </div>
    `;

    this.bindGarageEvents();
  }

  private statBarHtml(label: string, val: number): string {
    return `
      <div class="stat-row" style="margin-bottom:5px">
        <span style="color:var(--text-dim)">${label}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${val}%"></div></div>
        <span style="text-align:right;font-weight:700">${val}</span>
      </div>
    `;
  }

  private bindGarageEvents(): void {
    const profile = this.engine.profile;

    this.root.querySelector('[data-garage-back]')?.addEventListener('click', () => {
      this.engine.openMenu();
    });
    this.root.querySelector('[data-garage-ride]')?.addEventListener('click', () => {
      this.engine.openMenu();
      this.menuSub = 'zones';
      this.render();
    });

    this.root.querySelectorAll('[data-gtab]').forEach((el) => {
      el.addEventListener('click', () => {
        this.garageTab = (el as HTMLElement).dataset.gtab as GarageTab;
        this.renderGarage();
      });
    });

    this.root.querySelectorAll('[data-select-bike]').forEach((el) => {
      el.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).closest('[data-buy-bike]')) return;
        const id = (el as HTMLElement).dataset.selectBike!;
        if (profile.unlockedBikes.includes(id)) {
          profile.selectedBikeId = id;
          saveProfile(profile);
          this.engine.refreshBikeAppearance();
          this.renderGarage();
        }
      });
    });

    this.root.querySelectorAll('[data-buy-bike]').forEach((el) => {
      el.addEventListener('click', () => {
        const id = (el as HTMLElement).dataset.buyBike!;
        const b = getBikeById(id);
        if (profile.mudCoins >= b.cost && !profile.unlockedBikes.includes(id)) {
          profile.mudCoins -= b.cost;
          profile.unlockedBikes.push(id);
          profile.selectedBikeId = id;
          saveProfile(profile);
          this.engine.sound.playChallengeComplete();
          this.engine.refreshBikeAppearance();
          this.renderGarage();
        }
      });
    });

    this.root.querySelectorAll('[data-upgrade-part]').forEach((el) => {
      el.addEventListener('click', () => {
        const key = (el as HTMLElement).dataset.upgradePart as 'fork' | 'shock' | 'tires' | 'brakes';
        const upg = getBikeUpgrades(profile, profile.selectedBikeId);
        const cost = UPGRADE_COSTS[upg[key] + 1];
        if (cost && profile.mudCoins >= cost) {
          profile.mudCoins -= cost;
          upg[key] += 1;
          profile.upgrades[profile.selectedBikeId] = { ...upg };
          saveProfile(profile);
          this.engine.sound.playCheckpoint();
          this.engine.refreshBikeAppearance();
          this.renderGarage();
        }
      });
    });

    const updateLiv = (patch: Partial<ReturnType<typeof getBikeLivery>>) => {
      const cur = getBikeLivery(profile, profile.selectedBikeId);
      profile.liveries[profile.selectedBikeId] = { ...cur, ...patch };
      saveProfile(profile);
      this.engine.refreshBikeAppearance();
    };

    const pIn = this.root.querySelector('#liv-primary') as HTMLInputElement | null;
    const aIn = this.root.querySelector('#liv-accent') as HTMLInputElement | null;
    const fIn = this.root.querySelector('#liv-fork') as HTMLInputElement | null;
    const rIn = this.root.querySelector('#liv-rim') as HTMLInputElement | null;
    pIn?.addEventListener('input', () => updateLiv({ primaryColor: pIn.value }));
    aIn?.addEventListener('input', () => updateLiv({ accentColor: aIn.value }));
    fIn?.addEventListener('input', () => updateLiv({ forkColor: fIn.value }));
    rIn?.addEventListener('input', () => updateLiv({ rimColor: rIn.value }));

    this.root.querySelectorAll('[data-pattern]').forEach((el) => {
      el.addEventListener('click', () => {
        updateLiv({ pattern: (el as HTMLElement).dataset.pattern as LiveryPattern });
        this.renderGarage();
      });
    });

    this.root.querySelectorAll('[data-preset]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt((el as HTMLElement).dataset.preset!, 10);
        const pr = LIVERY_PRESETS[idx];
        if (pr) {
          profile.liveries[profile.selectedBikeId] = { ...pr.livery };
          saveProfile(profile);
          this.engine.refreshBikeAppearance();
          this.renderGarage();
        }
      });
    });
  }

  // ==================== IN-RIDE HUD + PAUSE + FINISH ====================
  private renderRidingShell(): void {
    const meta = getZoneMeta(this.engine.currentZoneId);
    const settings = this.engine.profile.settings;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const showTouch = settings.touchControls === 'on' || (settings.touchControls === 'auto' && isTouchDevice);

    let overlayHtml = '';
    if (this.finishModalData) {
      overlayHtml = this.buildFinishModalHtml();
    } else if (this.engine.paused) {
      overlayHtml = this.showPauseSettings
        ? this.buildSettingsModalHtml(true)
        : this.buildPauseModalHtml();
    }

    const doneCount = meta.challenges.filter((c) => this.engine.profile.completedChallenges[c.id]).length;

    this.root.innerHTML = `
      <div class="hud-root">
        <div class="hud-top">
          <div class="hud-tasks-minimal pointer-auto">
            <div class="hud-tasks-header" id="hud-ch-toggle">
              <span>${meta.name} TASKS</span>
              <span id="hud-task-count">${doneCount}/${meta.challenges.length}</span>
            </div>
            <div id="hud-ch-list" style="display:${this.challengesExpanded ? 'block' : 'none'}"></div>
            ${meta.cargoTagCount > 0 ? `<div style="margin-top:5px;font-size:0.72rem;color:var(--accent-gold);font-weight:700">CARGO TAGS <span id="hud-tags">0/13</span></div>` : ''}
          </div>

          <div class="hud-center-feed" id="hud-center-feed"></div>

          <div class="hud-right-stack">
            <div class="hud-actions">
              <button class="hud-mini-btn" id="hud-cam-btn" title="Switch Camera (C)">${settings.cameraMode === 'first_person' ? 'POV' : settings.cameraMode === 'chase' ? '3RD' : 'ACT'}</button>
              <button class="hud-mini-btn" id="hud-reset-btn" title="Checkpoint Reset (R)">↺</button>
              <button class="hud-mini-btn" id="hud-pause-btn" title="Pause (Esc)">❚❚</button>
            </div>
            <div class="minimal-compass" title="Pitch &amp; Balance Gauge">
              <div class="attitude-ground" id="hud-att-ground"></div>
              <div class="attitude-bike" id="hud-att-bike"></div>
              <div class="compass-needle"></div>
            </div>
          </div>
        </div>

        <div class="crash-overlay" id="hud-crash" style="display:none">
          <h2>WIPEOUT!</h2>
          <div id="hud-crash-reason" style="font-size:0.95rem;margin:4px 0 8px"></div>
          <div style="font-size:0.8rem;color:#fecaca">Press <strong>R</strong> for instant checkpoint reset</div>
        </div>

        <div class="hud-bottom">
          <div class="hud-timer-clean">
            <div class="timer-italic" id="hud-timer">00:00.00</div>
            <div style="display:flex;gap:10px;align-items:center;margin-top:2px">
              <span id="hud-cp" style="font-size:0.72rem;color:rgba(255,255,255,0.75);font-weight:700;letter-spacing:0.08em">CP 0/4</span>
              <span class="surface-badge-sm" id="hud-surface-badge">DIRT</span>
              <div class="hop-pill" id="hud-hop-wrap" style="display:none">
                <span>HOP</span>
                <div class="hop-pill-track"><div id="hud-hop-bar" style="width:0%"></div></div>
              </div>
            </div>
          </div>

          ${
            settings.showKeyHints
              ? `<div class="key-hints-bar">
                   <kbd>WASD</kbd> Pedal/Brake/Steer · <kbd>↓</kbd> Manual/Backflip · <kbd>↑</kbd> Stoppie/Frontflip · <kbd>←→</kbd> Lean/Whip · <kbd>SPACE</kbd> Hop · <kbd>F</kbd> Barspin · <kbd>C</kbd> Cam
                 </div>`
              : '<div></div>'
          }

          <div class="hud-speed-clean">
            <div id="hud-manual-badge" style="display:none;color:var(--accent-gold);font-family:var(--font-display);font-weight:700;font-size:0.85rem;letter-spacing:0.06em;margin-bottom:2px">MANUAL 0.0s</div>
            <div style="display:flex;align-items:baseline;justify-content:flex-end;gap:10px">
              <div class="speed-italic" id="hud-speed-num">0</div>
              <div style="text-align:right">
                <div style="font-size:0.74rem;color:var(--accent-gold);font-weight:700">★ <span id="hud-score">0</span></div>
                <div class="speed-unit-clean" id="hud-speed-unit">${settings.units === 'mph' ? 'MPH' : 'KM/H'}</div>
              </div>
            </div>
            <div class="speed-seg-track"><div class="speed-seg-fill" id="hud-fork-bar" style="width:0%"></div></div>
          </div>
        </div>
      </div>
      ${showTouch && !this.engine.paused && !this.finishModalData ? this.buildTouchControlsHtml() : ''}
      ${overlayHtml}
    `;

    const q = (sel: string) => this.root.querySelector<HTMLElement>(sel) ?? undefined;
    // Cache HUD refs
    this.hudRefs = {
      timer: q('#hud-timer'),
      score: q('#hud-score'),
      cp: q('#hud-cp'),
      tags: q('#hud-tags'),
      coins: q('#hud-task-count'),
      speedNum: q('#hud-speed-num'),
      speedUnit: q('#hud-speed-unit'),
      surfaceBadge: q('#hud-surface-badge'),
      manualBadge: q('#hud-manual-badge'),
      forkBar: q('#hud-fork-bar'),
      shockBar: q('#hud-hop-wrap'),
      hopBar: q('#hud-hop-bar'),
      attGround: q('#hud-att-ground'),
      attBike: q('#hud-att-bike'),
      centerFeed: q('#hud-center-feed'),
      challengeList: q('#hud-ch-list'),
      crashOverlay: q('#hud-crash'),
      crashReason: q('#hud-crash-reason'),
      camBtn: q('#hud-cam-btn'),
    };

    // Bind HUD buttons
    this.root.querySelector('#hud-cam-btn')?.addEventListener('click', () => {
      this.engine.cycleCamera();
      const cm = this.engine.profile.settings.cameraMode;
      if (this.hudRefs.camBtn) {
        this.hudRefs.camBtn.textContent = cm === 'first_person' ? 'POV' : cm === 'chase' ? '3RD' : 'ACT';
      }
    });
    this.root.querySelector('#hud-reset-btn')?.addEventListener('click', () => {
      this.engine.respawnAtCheckpoint();
    });
    this.root.querySelector('#hud-pause-btn')?.addEventListener('click', () => {
      this.engine.togglePause(true);
    });
    this.root.querySelector('#hud-ch-toggle')?.addEventListener('click', () => {
      this.challengesExpanded = !this.challengesExpanded;
      if (this.hudRefs.challengeList) {
        this.hudRefs.challengeList.style.display = this.challengesExpanded ? 'block' : 'none';
      }
    });

    if (showTouch && !this.engine.paused && !this.finishModalData) {
      this.bindTouchControls();
    }
    this.bindPauseAndFinishEvents();
  }

  private patchRidingHud(): void {
    const s = this.engine.physics.state;
    const rs = this.engine.runStats;
    const settings = this.engine.profile.settings;
    const meta = getZoneMeta(this.engine.currentZoneId);

    const mins = Math.floor(rs.elapsedTime / 60);
    const secs = rs.elapsedTime % 60;
    const mm = mins < 10 ? `0${mins}` : `${mins}`;
    const ss = secs < 10 ? `0${secs.toFixed(2)}` : secs.toFixed(2);
    if (this.hudRefs.timer) this.hudRefs.timer.textContent = `${mm}:${ss}`;
    if (this.hudRefs.score) this.hudRefs.score.textContent = Math.round(rs.score).toLocaleString();
    if (this.hudRefs.cp) this.hudRefs.cp.textContent = `CP ${rs.currentCheckpoint}/${rs.totalCheckpoints}`;
    const doneCount = meta.challenges.filter((c) => this.engine.profile.completedChallenges[c.id]).length;
    if (this.hudRefs.coins) this.hudRefs.coins.textContent = `${doneCount}/${meta.challenges.length}`;
    if (this.hudRefs.tags) {
      const found = Object.keys(this.engine.profile.collectedTags).filter((k) => this.engine.profile.collectedTags[k]).length;
      this.hudRefs.tags.textContent = `${found}/${meta.cargoTagCount}`;
    }

    // Speedometer + sleek horizontal speed bar
    const rawKmh = Math.abs(s.speed) * 3.6;
    const dispSpd = settings.units === 'mph' ? rawKmh * 0.621371 : rawKmh;
    if (this.hudRefs.speedNum) this.hudRefs.speedNum.textContent = String(Math.round(dispSpd));
    if (this.hudRefs.forkBar) {
      this.hudRefs.forkBar.style.width = `${Math.min(100, Math.round((rawKmh / 75) * 100))}%`;
    }

    // Surface badge
    if (this.hudRefs.surfaceBadge) {
      const col = SURFACE_BADGE_COLORS[s.surface];
      this.hudRefs.surfaceBadge.textContent = s.grounded ? s.surface.toUpperCase() : 'AIRBORNE';
      this.hudRefs.surfaceBadge.style.background = s.grounded ? col.bg : '#0369a1';
      this.hudRefs.surfaceBadge.style.color = s.grounded ? col.fg : '#e0f2fe';
    }

    // Live Manual / Stoppie timer readout!
    if (this.hudRefs.manualBadge) {
      if (s.manualActive && s.manualTime > 0.15) {
        this.hudRefs.manualBadge.style.display = 'block';
        this.hudRefs.manualBadge.style.color = '#facc15';
        this.hudRefs.manualBadge.textContent = `MANUAL ${s.manualTime.toFixed(1)}s`;
      } else if (s.stoppieActive && s.stoppieTime > 0.15) {
        this.hudRefs.manualBadge.style.display = 'block';
        this.hudRefs.manualBadge.style.color = '#38bdf8';
        this.hudRefs.manualBadge.textContent = `STOPPIE ${s.stoppieTime.toFixed(1)}s`;
      } else {
        this.hudRefs.manualBadge.style.display = 'none';
      }
    }

    // Bunny Hop preload indicator
    if (this.hudRefs.shockBar && this.hudRefs.hopBar) {
      if (s.hopCharge > 0.05) {
        this.hudRefs.shockBar.style.display = 'inline-flex';
        this.hudRefs.hopBar.style.width = `${Math.round(s.hopCharge * 100)}%`;
      } else {
        this.hudRefs.shockBar.style.display = 'none';
      }
    }

    if (this.hudRefs.attGround) {
      this.hudRefs.attGround.style.transform = `rotate(${(-s.groundPitch * 180) / Math.PI}deg)`;
    }
    if (this.hudRefs.attBike) {
      this.hudRefs.attBike.style.transform = `rotate(${(-s.pitch * 180) / Math.PI}deg)`;
    }

    // Center Trick & Toast Feed
    if (this.hudRefs.centerFeed) {
      const pieces: string[] = [];
      if (rs.comboCount > 0 && rs.comboScore > 0) {
        pieces.push(
          `<div class="combo-banner">${rs.comboTricks.slice(-3).join(' + ')} · ${rs.comboScore} ×${rs.comboCount}</div>`
        );
      }
      for (const pop of this.engine.trickPopups) {
        pieces.push(
          `<div class="trick-popup" style="color:${pop.color}">${pop.text}${pop.points > 0 ? ` +${pop.points}` : ''}</div>`
        );
      }
      for (const toast of this.engine.toasts) {
        pieces.push(
          `<div class="toast-banner" style="border-color:${toast.accent}">
             <div class="toast-title" style="color:${toast.accent}">${toast.title}</div>
             <div class="toast-sub">${toast.subtitle}</div>
           </div>`
        );
      }
      this.hudRefs.centerFeed.innerHTML = pieces.join('');
    }

    // Challenge checklist (crisp checkbox style matching Image 2!)
    if (this.hudRefs.challengeList && this.challengesExpanded) {
      const doneMap = this.engine.profile.completedChallenges;
      const sorted = [...meta.challenges].sort((a, b) => Number(Boolean(doneMap[a.id])) - Number(Boolean(doneMap[b.id])));
      this.hudRefs.challengeList.innerHTML = sorted
        .slice(0, 7)
        .map(
          (ch) => `
          <div class="challenge-row ${doneMap[ch.id] ? 'done' : ''}" title="${ch.description}">
            <span>${doneMap[ch.id] ? '☑' : '☐'} ${ch.title}</span>
          </div>
        `
        )
        .join('');
    }

    // Crash Banner
    if (this.hudRefs.crashOverlay && this.hudRefs.crashReason) {
      this.hudRefs.crashOverlay.style.display = s.crashed ? 'block' : 'none';
      if (s.crashed) {
        this.hudRefs.crashReason.textContent = s.crashReason;
      }
    }
  }

  private buildPauseModalHtml(): string {
    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(420px,92vw)">
          <div class="panel-header">
            <h2>PAUSED</h2>
            <button class="btn lime" data-pause-act="resume">RESUME</button>
          </div>
          <div class="panel-body" style="display:flex;flex-direction:column;gap:10px">
            <button class="btn accent" data-pause-act="restart">RESTART RUN</button>
            <button class="btn" data-pause-act="checkpoint">RESPAWN AT CHECKPOINT</button>
            <button class="btn" data-pause-act="camera">SWITCH CAMERA VIEW</button>
            <button class="btn" data-pause-act="save-replay">SAVE REPLAY CLIP</button>
            <button class="btn" data-pause-act="settings">SETTINGS</button>
            <button class="btn danger" data-pause-act="menu">EXIT TO MAIN MENU</button>
          </div>
        </div>
      </div>
    `;
  }

  private buildFinishModalHtml(): string {
    const data = this.finishModalData!;
    const st = data.stats;
    const meta = getZoneMeta(st.zoneId);
    const doneCount = meta.challenges.filter((c) => this.engine.profile.completedChallenges[c.id]).length;
    const curIdx = ZONES.findIndex((z) => z.id === st.zoneId);
    const nextZone = ZONES[(curIdx + 1) % ZONES.length];

    return `
      <div class="panel-backdrop pointer-auto">
        <div class="panel-window" style="width:min(580px,94vw)">
          <div class="panel-header">
            <div>
              <h2>${meta.name} COMPLETE!</h2>
              ${data.newRecord ? `<div style="color:var(--accent-lime);font-size:0.8rem;font-weight:700">★ NEW PERSONAL BEST TIME!</div>` : ''}
            </div>
            <div class="coin-pill"><span class="coin-dot"></span> +${data.coinsEarned} CR</div>
          </div>
          <div class="panel-body">
            <div class="controls-grid" style="grid-template-columns:repeat(2,1fr);margin-bottom:16px">
              <div class="control-card">
                <div style="font-size:0.75rem;color:var(--text-dim)">FINISH TIME</div>
                <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;color:var(--accent-lime)">${formatTime(st.finishTime)}</div>
              </div>
              <div class="control-card">
                <div style="font-size:0.75rem;color:var(--text-dim)">FLOW &amp; TRICK SCORE</div>
                <div style="font-family:var(--font-display);font-size:1.75rem;font-weight:700;color:var(--accent)">${Math.round(st.score).toLocaleString()}</div>
              </div>
              <div class="control-card">
                <div class="bind-row"><span>Top Speed</span><strong>${Math.round(st.maxSpeedKmh)} km/h</strong></div>
                <div class="bind-row"><span>Biggest Air</span><strong>${st.maxAirHeight.toFixed(1)} m</strong></div>
                <div class="bind-row"><span>Clean Landings</span><strong>${st.cleanLandings}</strong></div>
              </div>
              <div class="control-card">
                <div class="bind-row"><span>Crashes</span><strong>${st.crashes}</strong></div>
                <div class="bind-row"><span>Zone Tasks</span><strong>${doneCount}/${meta.challenges.length}</strong></div>
                <div class="bind-row"><span>Replay Saved</span><strong style="color:var(--accent-sky)">AUTO-SAVED</strong></div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end">
              ${this.engine.replays[0] ? `<button class="btn" data-finish-act="watch-replay">WATCH REPLAY</button>` : ''}
              <button class="btn" data-finish-act="retry">RIDE AGAIN</button>
              <button class="btn accent" data-finish-act="next" data-next-zone="${nextZone.id}">NEXT: ${nextZone.name}</button>
              <button class="btn lime" data-finish-act="menu">MAIN MENU</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private bindPauseAndFinishEvents(): void {
    this.root.querySelectorAll('[data-pause-act]').forEach((el) => {
      el.addEventListener('click', () => {
        const act = (el as HTMLElement).dataset.pauseAct;
        if (act === 'resume') this.engine.togglePause(false);
        if (act === 'restart') this.engine.restartRun();
        if (act === 'checkpoint') {
          this.engine.togglePause(false);
          this.engine.respawnAtCheckpoint();
        }
        if (act === 'camera') {
          this.engine.cycleCamera();
          this.render();
        }
        if (act === 'save-replay') {
          this.engine.saveCurrentRunReplay();
          this.engine.togglePause(false);
        }
        if (act === 'settings') {
          this.showPauseSettings = true;
          this.render();
        }
        if (act === 'menu') this.engine.openMenu();
      });
    });

    this.root.querySelector('[data-action="close-pause-settings"]')?.addEventListener('click', () => {
      this.showPauseSettings = false;
      this.render();
    });

    this.bindSettingsControls();

    this.root.querySelectorAll('[data-finish-act]').forEach((el) => {
      el.addEventListener('click', () => {
        const act = (el as HTMLElement).dataset.finishAct;
        if (act === 'retry') this.engine.restartRun();
        if (act === 'menu') this.engine.openMenu();
        if (act === 'watch-replay' && this.engine.replays[0]) {
          this.engine.startReplay(this.engine.replays[0]);
        }
        if (act === 'next') {
          const nz = (el as HTMLElement).dataset.nextZone as ZoneId;
          this.engine.startZone(nz);
        }
      });
    });
  }

  // ==================== TOUCH CONTROLS ====================
  private buildTouchControlsHtml(): string {
    return `
      <div class="touch-layer">
        <div class="touch-joystick-zone" id="touch-joy">
          <div class="touch-joystick-knob" id="touch-joy-knob"></div>
        </div>
        <div class="touch-actions-pad">
          <button class="touch-btn" data-tbtn="pitchBack">LEAN<br/>BACK</button>
          <button class="touch-btn" data-tbtn="barspin">BAR<br/>SPIN</button>
          <button class="touch-btn" data-tbtn="hop">BUNNY<br/>HOP</button>
          <button class="touch-btn" data-tbtn="brake">BRAKE</button>
          <button class="touch-btn" data-tbtn="pump">PUMP</button>
          <button class="touch-btn" data-tbtn="pedal" style="border-color:var(--accent-lime)">PEDAL</button>
        </div>
      </div>
    `;
  }

  private bindTouchControls(): void {
    const joy = this.root.querySelector('#touch-joy') as HTMLElement | null;
    const knob = this.root.querySelector('#touch-joy-knob') as HTMLElement | null;
    const touch = this.engine.input.touch;

    if (joy && knob) {
      let activeId: number | null = null;
      const updateStick = (clientX: number, clientY: number) => {
        const rect = joy.getBoundingClientRect();
        const cx = rect.left + rect.width * 0.5;
        const cy = rect.top + rect.height * 0.5;
        const maxR = rect.width * 0.36;
        let dx = clientX - cx;
        let dy = clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > maxR) {
          dx = (dx / dist) * maxR;
          dy = (dy / dist) * maxR;
        }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        touch.steer = -(dx / maxR);
      };

      joy.addEventListener('pointerdown', (e) => {
        activeId = e.pointerId;
        joy.setPointerCapture(e.pointerId);
        updateStick(e.clientX, e.clientY);
      });
      joy.addEventListener('pointermove', (e) => {
        if (activeId === e.pointerId) updateStick(e.clientX, e.clientY);
      });
      const resetStick = (e: PointerEvent) => {
        if (activeId !== e.pointerId) return;
        activeId = null;
        knob.style.transform = 'translate(0,0)';
        touch.steer = 0;
      };
      joy.addEventListener('pointerup', resetStick);
      joy.addEventListener('pointercancel', resetStick);
    }

    this.root.querySelectorAll('[data-tbtn]').forEach((btn) => {
      const name = (btn as HTMLElement).dataset.tbtn!;
      const setPressed = (down: boolean) => {
        btn.classList.toggle('active', down);
        if (name === 'pedal') touch.throttle = down ? 1 : 0;
        if (name === 'brake') touch.brake = down ? 1 : 0;
        if (name === 'hop') touch.hopHeld = down;
        if (name === 'pump') touch.pumpHeld = down;
        if (name === 'pitchBack') touch.pitch = down ? 1 : 0;
        if (name === 'barspin' && down) touch.barspinQueued = true;
      };
      btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        setPressed(true);
      });
      btn.addEventListener('pointerup', () => setPressed(false));
      btn.addEventListener('pointercancel', () => setPressed(false));
      btn.addEventListener('pointerleave', () => setPressed(false));
    });
  }

  // ==================== REPLAY VIEWER ====================
  private renderReplayViewer(): void {
    const rep = this.engine.activeReplay;
    if (!rep) {
      this.engine.openMenu();
      return;
    }
    const maxT = rep.frames.length > 0 ? rep.frames[rep.frames.length - 1].t : 1;
    const cams: { id: ReplayCamMode; label: string }[] = [
      { id: 'chase', label: 'CHASE' },
      { id: 'orbit', label: 'ORBIT' },
      { id: 'helmet', label: 'HELMET POV' },
      { id: 'trackside', label: 'TRACKSIDE' },
    ];
    const speeds = [0.25, 0.5, 1, 2];

    this.root.innerHTML = `
      <div class="hud-root">
        <div class="hud-top">
          <div class="hud-card pointer-auto">
            <div class="hud-zone-label">REPLAY VIEWER</div>
            <div style="font-family:var(--font-display);font-weight:700;font-size:1.15rem">${rep.zoneName} · ${getBikeById(rep.bikeId).name}</div>
          </div>
          <button class="btn danger pointer-auto" id="rep-exit">EXIT REPLAY</button>
        </div>
      </div>

      <div class="replay-bar pointer-auto">
        <div class="replay-row">
          <input id="rep-scrub" type="range" min="0" max="${maxT}" step="0.05" value="${this.engine.replayTime}" style="flex:1" />
          <span id="rep-time" style="font-family:var(--font-display);min-width:95px;text-align:right">0.0s / ${maxT.toFixed(1)}s</span>
        </div>
        <div class="replay-row">
          <div style="display:flex;gap:6px">
            <button class="btn accent" id="rep-play">${this.engine.replayPlaying ? 'PAUSE' : 'PLAY'}</button>
            ${speeds
              .map(
                (sp) =>
                  `<button class="pill-btn ${this.engine.replaySpeed === sp ? 'active' : ''}" data-rep-spd="${sp}">${sp}x</button>`
              )
              .join('')}
          </div>
          <div style="display:flex;gap:6px">
            ${cams
              .map(
                (c) =>
                  `<button class="pill-btn ${this.engine.replayCam === c.id ? 'active' : ''}" data-rep-cam="${c.id}">${c.label}</button>`
              )
              .join('')}
          </div>
        </div>
      </div>
    `;

    this.replayRefs = {
      timeLabel: this.root.querySelector<HTMLElement>('#rep-time') ?? undefined,
      scrubber: this.root.querySelector<HTMLInputElement>('#rep-scrub') ?? undefined,
      playBtn: this.root.querySelector<HTMLElement>('#rep-play') ?? undefined,
    };

    this.root.querySelector('#rep-exit')?.addEventListener('click', () => {
      this.engine.openMenu();
      this.menuSub = 'replays';
      this.render();
    });

    this.replayRefs.playBtn?.addEventListener('click', () => {
      this.engine.replayPlaying = !this.engine.replayPlaying;
      if (this.replayRefs.playBtn) {
        this.replayRefs.playBtn.textContent = this.engine.replayPlaying ? 'PAUSE' : 'PLAY';
      }
    });

    this.replayRefs.scrubber?.addEventListener('input', () => {
      if (this.replayRefs.scrubber) {
        this.engine.replayTime = parseFloat(this.replayRefs.scrubber.value);
      }
    });

    this.root.querySelectorAll('[data-rep-spd]').forEach((el) => {
      el.addEventListener('click', () => {
        this.engine.replaySpeed = parseFloat((el as HTMLElement).dataset.repSpd!);
        this.renderReplayViewer();
      });
    });

    this.root.querySelectorAll('[data-rep-cam]').forEach((el) => {
      el.addEventListener('click', () => {
        this.engine.setReplayCam((el as HTMLElement).dataset.repCam as ReplayCamMode);
        this.renderReplayViewer();
      });
    });
  }

  private patchReplayHud(): void {
    const rep = this.engine.activeReplay;
    if (!rep || rep.frames.length === 0) return;
    const maxT = rep.frames[rep.frames.length - 1].t;
    if (this.replayRefs.scrubber) {
      this.replayRefs.scrubber.value = String(this.engine.replayTime);
    }
    if (this.replayRefs.timeLabel) {
      this.replayRefs.timeLabel.textContent = `${this.engine.replayTime.toFixed(1)}s / ${maxT.toFixed(1)}s`;
    }
  }
}
