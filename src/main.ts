import './style.css';
import { GameEngine } from './engine/GameEngine';
import { UIManager } from './ui/UIManager';

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const visorMudEl = document.getElementById('visor-mud-layer');
const uiRoot = document.getElementById('ui-layer') as HTMLElement;

let ui: UIManager | null = null;

const engine = new GameEngine(canvas, visorMudEl, {
  onHudUpdate: () => ui?.updateHud(),
  onModeChange: (mode) => ui?.onModeChange(mode),
  onRunFinished: (stats, newRecord, coinsEarned) => ui?.onRunFinished(stats, newRecord, coinsEarned),
  onPauseChange: (paused) => ui?.onPauseChange(paused),
  onProfileChange: () => ui?.onDataChanged(),
  onReplaysChange: () => ui?.onDataChanged(),
});

ui = new UIManager(uiRoot, engine);

// Cleanly expose for debugging if needed
(window as unknown as { loamline?: GameEngine }).loamline = engine;
