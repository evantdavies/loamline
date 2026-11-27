import { BikeSpec, BikeUpgrades, LiveryConfig } from '../types';

export const BIKES: BikeSpec[] = [
  {
    id: 'camber_ht',
    name: 'Loamline DH-1',
    category: 'Freeride / Downhill',
    description: 'Signature dual-crown white freeride rig with Kashima gold stanchions, coil rear shock, and gold alloy rims. Balanced for manuals, stoppies, jumps, and rough trails.',
    cost: 0,
    fullSuspension: true,
    dualCrown: true,
    wheelRadius: 0.37,
    wheelbase: 1.26,
    forkTravel: 0.18,
    shockTravel: 0.17,
    maxSpeed: 13.5,
    pedalPower: 8.4,
    brakePower: 16.5,
    hopPower: 7.9,
    agility: 1.15,
    grip: 1.15,
    stability: 1.22,
    defaultLivery: {
      primaryColor: '#f1f0ec',
      accentColor: '#f97316',
      forkColor: '#1b1d21',
      rimColor: '#d99b26',
      pattern: 'solid',
    },
  },
  {
    id: 'timber_150',
    name: 'Timber 150',
    category: 'All-Mountain',
    description: '150mm full-suspension trail bike built for Timber Shore roots, cedar bridges, and fast berm-to-berm flow.',
    cost: 400,
    fullSuspension: true,
    dualCrown: false,
    wheelRadius: 0.365,
    wheelbase: 1.24,
    forkTravel: 0.15,
    shockTravel: 0.14,
    maxSpeed: 14.0,
    pedalPower: 8.7,
    brakePower: 17.0,
    hopPower: 8.1,
    agility: 1.22,
    grip: 1.22,
    stability: 1.24,
    defaultLivery: {
      primaryColor: '#2d6a4f',
      accentColor: '#d9ed92',
      forkColor: '#181a1f',
      rimColor: '#d99b26',
      pattern: 'camo',
    },
  },
  {
    id: 'kicker_dj',
    name: 'Kicker DJ',
    category: 'Slopestyle / Dirt Jump',
    description: 'Lightweight slopestyle rig with snappy bunny hops, quick barspins, huge whips, and ultra-fast backflip & frontflip rotation.',
    cost: 750,
    fullSuspension: true,
    dualCrown: false,
    wheelRadius: 0.345,
    wheelbase: 1.16,
    forkTravel: 0.13,
    shockTravel: 0.11,
    maxSpeed: 13.8,
    pedalPower: 9.0,
    brakePower: 17.2,
    hopPower: 9.0,
    agility: 1.42,
    grip: 1.18,
    stability: 1.28,
    defaultLivery: {
      primaryColor: '#0284c7',
      accentColor: '#facc15',
      forkColor: '#f8fafc',
      rimColor: '#facc15',
      pattern: 'splatter',
    },
  },
  {
    id: 'enduro_170',
    name: 'Enduro 170',
    category: 'Enduro Race',
    description: 'Long, slack 170mm enduro frame. Eats deep mud ruts, rock gardens, and Harbour Yard container drops.',
    cost: 1200,
    fullSuspension: true,
    dualCrown: true,
    wheelRadius: 0.37,
    wheelbase: 1.28,
    forkTravel: 0.18,
    shockTravel: 0.17,
    maxSpeed: 15.0,
    pedalPower: 9.3,
    brakePower: 18.2,
    hopPower: 8.3,
    agility: 1.24,
    grip: 1.32,
    stability: 1.38,
    defaultLivery: {
      primaryColor: '#dc2626',
      accentColor: '#f59e0b',
      forkColor: '#1b1d21',
      rimColor: '#dc2626',
      pattern: 'racing',
    },
  },
  {
    id: 'ridge_dh200',
    name: 'Ridge DH 200',
    category: 'World Cup Downhill',
    description: 'Dual-crown 200mm carbon downhill rig. Built to hold warp speed down Summit Line and stomp massive road gaps.',
    cost: 2000,
    fullSuspension: true,
    dualCrown: true,
    wheelRadius: 0.375,
    wheelbase: 1.31,
    forkTravel: 0.20,
    shockTravel: 0.20,
    maxSpeed: 16.5,
    pedalPower: 9.8,
    brakePower: 19.5,
    hopPower: 8.6,
    agility: 1.28,
    grip: 1.44,
    stability: 1.52,
    defaultLivery: {
      primaryColor: '#1d2228',
      accentColor: '#a3e635',
      forkColor: '#111418',
      rimColor: '#a3e635',
      pattern: 'racing',
    },
  },
];

export const UPGRADE_COSTS: Record<number, number> = {
  2: 180,
  3: 420,
};

export const LIVERY_PRESETS: { name: string; livery: LiveryConfig }[] = [
  {
    name: 'Alpine White',
    livery: { primaryColor: '#f1f0ec', accentColor: '#f97316', forkColor: '#1b1d21', rimColor: '#d99b26', pattern: 'solid' },
  },
  {
    name: 'Factory Lime',
    livery: { primaryColor: '#181d22', accentColor: '#a3e635', forkColor: '#111418', rimColor: '#a3e635', pattern: 'racing' },
  },
  {
    name: 'Timber Camo',
    livery: { primaryColor: '#2d6a4f', accentColor: '#b7e4c7', forkColor: '#1b2024', rimColor: '#d99b26', pattern: 'camo' },
  },
  {
    name: 'Harbour Crane',
    livery: { primaryColor: '#f59e0b', accentColor: '#111827', forkColor: '#1f2937', rimColor: '#f59e0b', pattern: 'stripes' },
  },
  {
    name: 'Red Bullion',
    livery: { primaryColor: '#dc2626', accentColor: '#fbbf24', forkColor: '#1b1d21', rimColor: '#d99b26', pattern: 'racing' },
  },
  {
    name: 'Glacier Sky',
    livery: { primaryColor: '#0284c7', accentColor: '#e0f2fe', forkColor: '#0f172a', rimColor: '#38bdf8', pattern: 'splatter' },
  },
];

export function getBikeById(id: string): BikeSpec {
  return BIKES.find((b) => b.id === id) ?? BIKES[0];
}

export function getEffectiveBikeSpec(spec: BikeSpec, upgrades: BikeUpgrades): BikeSpec {
  const forkMult = 1 + (upgrades.fork - 1) * 0.14;
  const shockMult = 1 + (upgrades.shock - 1) * 0.14;
  const tireMult = 1 + (upgrades.tires - 1) * 0.12;
  const brakeMult = 1 + (upgrades.brakes - 1) * 0.15;

  return {
    ...spec,
    forkTravel: spec.forkTravel * (1 + (upgrades.fork - 1) * 0.08),
    shockTravel: spec.fullSuspension ? spec.shockTravel * (1 + (upgrades.shock - 1) * 0.08) : 0,
    maxSpeed: spec.maxSpeed * (1 + (upgrades.tires - 1) * 0.045 + (upgrades.shock - 1) * 0.02),
    pedalPower: spec.pedalPower * (1 + (upgrades.tires - 1) * 0.06),
    brakePower: spec.brakePower * brakeMult,
    hopPower: spec.hopPower * (1 + (upgrades.fork - 1) * 0.065),
    agility: spec.agility * (1 + (upgrades.fork - 1) * 0.04),
    grip: spec.grip * tireMult,
    stability: spec.stability * (0.5 * forkMult + 0.5 * shockMult),
  };
}
