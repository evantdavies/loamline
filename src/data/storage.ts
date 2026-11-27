import { BIKES, getBikeById } from './bikes';
import { BikeUpgrades, GameSettings, LiveryConfig, PlayerProfile, SavedReplay } from '../types';

const PROFILE_KEY = 'loamline_profile_v2';
const REPLAYS_KEY = 'loamline_replays_v1';

export const DEFAULT_SETTINGS: GameSettings = {
  cameraMode: 'first_person',
  steeringSensitivity: 1.0,
  tiltSteering: false,
  touchControls: 'auto',
  fov: 88,
  shadows: true,
  volume: 0.7,
  units: 'kmh',
  showKeyHints: true,
};

export function createDefaultProfile(): PlayerProfile {
  const upgrades: Record<string, BikeUpgrades> = {};
  const liveries: Record<string, LiveryConfig> = {};
  for (const bike of BIKES) {
    upgrades[bike.id] = { fork: 1, shock: 1, tires: 1, brakes: 1 };
    liveries[bike.id] = { ...bike.defaultLivery };
  }
  return {
    mudCoins: 250,
    selectedBikeId: 'camber_ht',
    unlockedBikes: ['camber_ht'],
    upgrades,
    liveries,
    completedChallenges: {},
    bestTimes: {},
    bestScores: {},
    collectedTags: {},
    settings: { ...DEFAULT_SETTINGS },
  };
}

export function loadProfile(): PlayerProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return createDefaultProfile();
    const parsed = JSON.parse(raw) as Partial<PlayerProfile>;
    const def = createDefaultProfile();
    const merged: PlayerProfile = {
      ...def,
      ...parsed,
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
      upgrades: { ...def.upgrades, ...(parsed.upgrades ?? {}) },
      liveries: { ...def.liveries, ...(parsed.liveries ?? {}) },
      completedChallenges: parsed.completedChallenges ?? {},
      bestTimes: parsed.bestTimes ?? {},
      bestScores: parsed.bestScores ?? {},
      collectedTags: parsed.collectedTags ?? {},
      unlockedBikes: parsed.unlockedBikes?.length ? parsed.unlockedBikes : ['camber_ht'],
    };
    if (!merged.unlockedBikes.includes(merged.selectedBikeId)) {
      merged.selectedBikeId = merged.unlockedBikes[0];
    }
    return merged;
  } catch {
    return createDefaultProfile();
  }
}

export function saveProfile(profile: PlayerProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch {
    // ignore storage quota issues
  }
}

export function getBikeUpgrades(profile: PlayerProfile, bikeId: string): BikeUpgrades {
  return profile.upgrades[bikeId] ?? { fork: 1, shock: 1, tires: 1, brakes: 1 };
}

export function getBikeLivery(profile: PlayerProfile, bikeId: string): LiveryConfig {
  return profile.liveries[bikeId] ?? { ...getBikeById(bikeId).defaultLivery };
}

export function loadReplays(): SavedReplay[] {
  try {
    const raw = localStorage.getItem(REPLAYS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveReplay(replay: SavedReplay): SavedReplay[] {
  const existing = loadReplays().filter((r) => r.id !== replay.id);
  const next = [replay, ...existing].slice(0, 6);
  try {
    localStorage.setItem(REPLAYS_KEY, JSON.stringify(next));
  } catch {
    // If localStorage is tight, keep only the 3 most recent replays
    try {
      localStorage.setItem(REPLAYS_KEY, JSON.stringify(next.slice(0, 3)));
    } catch {
      // ignore
    }
  }
  return next;
}

export function deleteReplay(id: string): SavedReplay[] {
  const next = loadReplays().filter((r) => r.id !== id);
  try {
    localStorage.setItem(REPLAYS_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}
