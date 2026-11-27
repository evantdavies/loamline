import * as THREE from 'three';
import { CargoTagDef, CheckpointDef, GroundInfo, HopLogDef, SurfaceType, ZoneId } from '../types';
import {
  buildStructureMesh,
  buildTrailSamples,
  RideableStructure,
  sampleStructureSurface,
  SolidObstacle,
  SURFACE_PROPS,
  TrailNode,
  TrailSample,
  TrailSpatialIndex,
  WorldData,
} from './ZoneStructures';

interface ZoneBlueprint {
  zoneId: ZoneId;
  nodes: TrailNode[];
  baseFloorSurface: SurfaceType;
  hillAmp: number;
  skyTopColor: number;
  skyBottomColor: number;
  fogColor: number;
  fogNear: number;
  fogFar: number;
  sunPosition: THREE.Vector3;
  sunColor: number;
  sunIntensity: number;
  ambientColor: number;
  ambientIntensity: number;
  waterY?: number;
  indoorHall?: boolean;
  alpineValley?: boolean;
  harbour?: boolean;
  treesDensity: number;
  rockDensity: number;
  buildCustomFeatures: (
    trail: TrailSample[],
    structures: RideableStructure[],
    obstacles: SolidObstacle[],
    cargoTags: CargoTagDef[],
    hopLogs: HopLogDef[]
  ) => void;
}

function getTrailAtRatio(trail: TrailSample[], ratio: number): { sample: TrailSample; yaw: number } {
  const idx = Math.max(0, Math.min(trail.length - 1, Math.floor(ratio * (trail.length - 1))));
  const s = trail[idx];
  const yaw = Math.atan2(s.tx, s.tz);
  return { sample: s, yaw };
}

function getTrailAtMeters(trail: TrailSample[], meters: number): { sample: TrailSample; yaw: number } {
  let chosen = trail[trail.length - 1];
  for (let i = 0; i < trail.length; i++) {
    if (trail[i].s >= meters) {
      chosen = trail[i];
      break;
    }
  }
  const yaw = Math.atan2(chosen.tx, chosen.tz);
  return { sample: chosen, yaw };
}

function createZoneBlueprint(zoneId: ZoneId): ZoneBlueprint {
  if (zoneId === 'training_hall') {
    // GROUND PARK — Sunlit golden-hour alpine valley matching reference POV!
    const nodes: TrailNode[] = [
      { x: 0, y: 5.2, z: 0, width: 6.4, surface: 'dirt' },
      { x: 0, y: 2.0, z: 22, width: 6.8, surface: 'dirt' },
      { x: 0, y: 1.5, z: 75, width: 7.2, surface: 'dirt' },
      { x: 0, y: 1.2, z: 138, width: 7.4, surface: 'dirt', rollerAmp: 0.32, rollerFreq: 0.42 },
      { x: 4, y: 0.9, z: 205, width: 7.6, surface: 'dirt' },
      { x: 24, y: 0.6, z: 265, width: 8.2, bank: 0.28, surface: 'dirt' },
      { x: 52, y: 0.4, z: 315, width: 8.4, bank: 0.24, surface: 'dirt' },
      { x: 58, y: 0.2, z: 375, width: 8.5, surface: 'dirt' },
      { x: 44, y: 0.1, z: 432, width: 8.8, bank: -0.22, surface: 'dirt' },
      { x: 28, y: 0.0, z: 485, width: 9.2, surface: 'dirt' },
    ];
    return {
      zoneId,
      nodes,
      baseFloorSurface: 'grass',
      hillAmp: 7.5,
      skyTopColor: 0x5c7ec2,
      skyBottomColor: 0xf4caa8,
      fogColor: 0xdcc5b4,
      fogNear: 125,
      fogFar: 380,
      sunPosition: new THREE.Vector3(-95, 48, 30),
      sunColor: 0xffd7a3,
      sunIntensity: 2.25,
      ambientColor: 0xdbeafe,
      ambientIntensity: 0.78,
      alpineValley: true,
      treesDensity: 0.85,
      rockDensity: 0.75,
      buildCustomFeatures: (trail, structures, _obstacles, _cargoTags, hopLogs) => {
        // Wide cedar timber plank drop-in ramp right at spawn (matching Image 2!)
        const startRamp = getTrailAtMeters(trail, 8.5);
        structures.push({
          id: 'gp_start_ramp',
          kind: 'landing',
          x: startRamp.sample.x,
          y: startRamp.sample.y - 0.15,
          z: startRamp.sample.z,
          yaw: startRamp.yaw,
          length: 19.0,
          width: 5.8,
          height: 2.35,
          surface: 'wood',
          lipBoost: false,
        });

        // 3 Trail Hop Logs (15cm, 25cm, 35cm) right down the straight valley trail!
        const logSpecs = [
          { meters: 46, height: 0.16, label: '15 cm Log' },
          { meters: 74, height: 0.26, label: '25 cm Log' },
          { meters: 102, height: 0.36, label: '35 cm Log' },
        ];
        logSpecs.forEach((ls, idx) => {
          const p = getTrailAtMeters(trail, ls.meters);
          hopLogs.push({
            id: `gp_log_${idx + 1}`,
            x: p.sample.x,
            y: p.sample.y,
            z: p.sample.z,
            yaw: p.yaw,
            width: 5.4,
            height: ls.height,
            label: ls.label,
          });
        });

        // Valley Tabletop #1
        const t1 = getTrailAtMeters(trail, 172);
        structures.push({
          id: 'gp_table1',
          kind: 'tabletop',
          x: t1.sample.x,
          y: t1.sample.y - 0.08,
          z: t1.sample.z,
          yaw: t1.yaw,
          length: 15.0,
          width: 5.8,
          height: 1.85,
          surface: 'dirt',
          rampInLength: 4.8,
          rampOutLength: 5.2,
        });

        // Cedar Bridge after Berm
        const b1 = getTrailAtMeters(trail, 310);
        structures.push({
          id: 'gp_bridge1',
          kind: 'bridge',
          x: b1.sample.x,
          y: b1.sample.y - 0.08,
          z: b1.sample.z,
          yaw: b1.yaw,
          length: 18.0,
          width: 4.0,
          height: 1.3,
          surface: 'wood',
          rampInLength: 4.2,
          rampOutLength: 4.2,
        });

        // Freestyle Sender Kicker + Landing for Backflips / Frontflips!
        const k1 = getTrailAtMeters(trail, 382);
        structures.push({
          id: 'gp_kicker1',
          kind: 'kicker',
          x: k1.sample.x,
          y: k1.sample.y - 0.08,
          z: k1.sample.z,
          yaw: k1.yaw,
          length: 7.0,
          width: 5.6,
          height: 2.55,
          surface: 'wood',
        });
        const k1L = getTrailAtMeters(trail, 400);
        structures.push({
          id: 'gp_kicker1_l',
          kind: 'landing',
          x: k1L.sample.x,
          y: k1L.sample.y - 0.08,
          z: k1L.sample.z,
          yaw: k1L.yaw,
          length: 11.0,
          width: 6.4,
          height: 2.1,
          surface: 'dirt',
        });
      },
    };
  }

  if (zoneId === 'jump_park') {
    const nodes: TrailNode[] = [
      { x: 0, y: 26, z: 0, width: 9.5, surface: 'wood' },
      { x: 0, y: 19, z: 42, width: 9.5, surface: 'dirt' },
      { x: 2, y: 15, z: 95, width: 9.5, surface: 'dirt' },
      { x: 8, y: 12, z: 150, width: 9.5, surface: 'dirt', rollerAmp: 0.35, rollerFreq: 0.42 },
      { x: 26, y: 9.5, z: 205, width: 10.0, bank: 0.32, surface: 'dirt' },
      { x: 52, y: 7.5, z: 248, width: 10.0, bank: 0.28, surface: 'dirt' },
      { x: 64, y: 5.0, z: 305, width: 9.5, surface: 'dirt' },
      { x: 58, y: 2.8, z: 365, width: 9.5, surface: 'dirt' },
      { x: 42, y: 1.0, z: 425, width: 10.0, bank: -0.26, surface: 'dirt' },
      { x: 22, y: 0.2, z: 482, width: 10.5, surface: 'dirt' },
      { x: 18, y: 0.0, z: 530, width: 11.0, surface: 'dirt' },
    ];
    return {
      zoneId,
      nodes,
      baseFloorSurface: 'grass',
      hillAmp: 4.5,
      skyTopColor: 0x1d4ed8,
      skyBottomColor: 0xfdba74,
      fogColor: 0xe6b88a,
      fogNear: 120,
      fogFar: 360,
      sunPosition: new THREE.Vector3(-90, 62, 110),
      sunColor: 0xffd29d,
      sunIntensity: 2.15,
      ambientColor: 0xfde68a,
      ambientIntensity: 0.72,
      treesDensity: 0.45,
      rockDensity: 0.4,
      buildCustomFeatures: (trail, structures) => {
        // 1. Starter Drop-in Ramp
        const j1 = getTrailAtMeters(trail, 56);
        structures.push({
          id: 'jp_table1',
          kind: 'tabletop',
          x: j1.sample.x,
          y: j1.sample.y - 0.1,
          z: j1.sample.z,
          yaw: j1.yaw,
          length: 16.5,
          width: 6.4,
          height: 2.4,
          surface: 'dirt',
          rampInLength: 5.5,
          rampOutLength: 6.0,
        });

        // 2. Big Dirt Double (Kicker + Landing)
        const j2 = getTrailAtMeters(trail, 102);
        structures.push({
          id: 'jp_double_k',
          kind: 'kicker',
          x: j2.sample.x,
          y: j2.sample.y - 0.1,
          z: j2.sample.z,
          yaw: j2.yaw,
          length: 7.2,
          width: 6.0,
          height: 2.85,
          surface: 'dirt',
        });
        const j2L = getTrailAtMeters(trail, 121);
        structures.push({
          id: 'jp_double_l',
          kind: 'landing',
          x: j2L.sample.x,
          y: j2L.sample.y - 0.1,
          z: j2L.sample.z,
          yaw: j2L.yaw,
          length: 11.5,
          width: 6.8,
          height: 2.5,
          surface: 'dirt',
        });

        // 3. Wooden Slopestyle Boot
        const j3 = getTrailAtMeters(trail, 178);
        structures.push({
          id: 'jp_wood_k',
          kind: 'kicker',
          x: j3.sample.x,
          y: j3.sample.y - 0.1,
          z: j3.sample.z,
          yaw: j3.yaw,
          length: 6.8,
          width: 5.6,
          height: 2.75,
          surface: 'wood',
        });
        const j3L = getTrailAtMeters(trail, 196);
        structures.push({
          id: 'jp_wood_l',
          kind: 'landing',
          x: j3L.sample.x,
          y: j3L.sample.y - 0.1,
          z: j3L.sample.z,
          yaw: j3L.yaw,
          length: 11.0,
          width: 6.8,
          height: 2.4,
          surface: 'dirt',
        });

        // 4. Giant Pro-Line Mega Tabletop
        const j4 = getTrailAtMeters(trail, 286);
        structures.push({
          id: 'jp_mega_table',
          kind: 'tabletop',
          x: j4.sample.x,
          y: j4.sample.y - 0.1,
          z: j4.sample.z,
          yaw: j4.yaw,
          length: 21.0,
          width: 6.8,
          height: 3.3,
          surface: 'dirt',
          rampInLength: 6.8,
          rampOutLength: 7.4,
        });

        // 5. Backflip Sender Kicker + Big Landing
        const j5 = getTrailAtMeters(trail, 344);
        structures.push({
          id: 'jp_flip_k',
          kind: 'kicker',
          x: j5.sample.x,
          y: j5.sample.y - 0.1,
          z: j5.sample.z,
          yaw: j5.yaw,
          length: 7.8,
          width: 6.4,
          height: 3.45,
          surface: 'wood',
        });
        const j5L = getTrailAtMeters(trail, 366);
        structures.push({
          id: 'jp_flip_l',
          kind: 'landing',
          x: j5L.sample.x,
          y: j5L.sample.y - 0.1,
          z: j5L.sample.z,
          yaw: j5L.yaw,
          length: 13.0,
          width: 7.2,
          height: 3.1,
          surface: 'dirt',
        });

        // 6. Final Style Hip / Tabletop
        const j6 = getTrailAtMeters(trail, 452);
        structures.push({
          id: 'jp_final_table',
          kind: 'tabletop',
          x: j6.sample.x,
          y: j6.sample.y - 0.1,
          z: j6.sample.z,
          yaw: j6.yaw,
          length: 17.0,
          width: 6.4,
          height: 2.55,
          surface: 'dirt',
          rampInLength: 5.5,
          rampOutLength: 6.2,
        });
      },
    };
  }

  if (zoneId === 'timber_shore') {
    const nodes: TrailNode[] = [
      { x: 0, y: 34, z: 0, width: 8.5, surface: 'dirt' },
      { x: 4, y: 29, z: 48, width: 8.2, surface: 'dirt', rollerAmp: 0.42, rollerFreq: 0.46 },
      { x: 22, y: 25, z: 96, width: 8.5, bank: 0.3, surface: 'dirt' },
      { x: 16, y: 21.5, z: 150, width: 8.8, surface: 'mud', mudPatch: true },
      { x: -10, y: 18, z: 204, width: 8.4, bank: -0.32, surface: 'dirt' },
      { x: -24, y: 14.5, z: 262, width: 8.4, surface: 'rock', rockGarden: true },
      { x: -12, y: 11.5, z: 320, width: 8.8, surface: 'dirt', rollerAmp: 0.48, rollerFreq: 0.44 },
      { x: 18, y: 8.5, z: 376, width: 9.0, bank: 0.34, surface: 'dirt' },
      { x: 34, y: 6.2, z: 434, width: 9.0, surface: 'mud', mudPatch: true },
      { x: 20, y: 4.0, z: 492, width: 8.6, bank: -0.28, surface: 'dirt' },
      { x: -4, y: 2.4, z: 548, width: 8.8, surface: 'dirt' },
      { x: -12, y: 1.5, z: 604, width: 9.5, surface: 'dirt' },
      { x: -12, y: 1.2, z: 650, width: 10.0, surface: 'dirt' },
    ];
    return {
      zoneId,
      nodes,
      baseFloorSurface: 'grass',
      hillAmp: 7.5,
      skyTopColor: 0x0f4c5c,
      skyBottomColor: 0x99d5c9,
      fogColor: 0x89bfb8,
      fogNear: 95,
      fogFar: 320,
      sunPosition: new THREE.Vector3(85, 88, 60),
      sunColor: 0xfff5e1,
      sunIntensity: 1.9,
      ambientColor: 0xa7f3d0,
      ambientIntensity: 0.78,
      waterY: -1.8,
      treesDensity: 1.0,
      rockDensity: 0.85,
      buildCustomFeatures: (trail, structures) => {
        // 1. North Shore Cedar Bridge #1
        const b1 = getTrailAtMeters(trail, 72);
        structures.push({
          id: 'ts_bridge1',
          kind: 'bridge',
          x: b1.sample.x,
          y: b1.sample.y - 0.1,
          z: b1.sample.z,
          yaw: b1.yaw,
          length: 22,
          width: 3.6,
          height: 1.45,
          surface: 'wood',
          rampInLength: 4.5,
          rampOutLength: 4.5,
        });

        // 2. Creek Kicker + Landing over Muddy Hollow
        const k1 = getTrailAtMeters(trail, 178);
        structures.push({
          id: 'ts_kicker1',
          kind: 'kicker',
          x: k1.sample.x,
          y: k1.sample.y - 0.1,
          z: k1.sample.z,
          yaw: k1.yaw,
          length: 6.4,
          width: 5.0,
          height: 2.25,
          surface: 'wood',
        });
        const k1L = getTrailAtMeters(trail, 195);
        structures.push({
          id: 'ts_kicker1_l',
          kind: 'landing',
          x: k1L.sample.x,
          y: k1L.sample.y - 0.1,
          z: k1L.sample.z,
          yaw: k1L.yaw,
          length: 10.5,
          width: 6.0,
          height: 2.0,
          surface: 'dirt',
        });

        // 3. Elevated Cedar Drop #1
        const d1 = getTrailAtMeters(trail, 285);
        structures.push({
          id: 'ts_drop1',
          kind: 'drop',
          x: d1.sample.x,
          y: d1.sample.y - 0.1,
          z: d1.sample.z,
          yaw: d1.yaw,
          length: 13.5,
          width: 3.8,
          height: 2.3,
          surface: 'wood',
          rampInLength: 7.5,
        });
        const d1L = getTrailAtMeters(trail, 302);
        structures.push({
          id: 'ts_drop1_l',
          kind: 'landing',
          x: d1L.sample.x,
          y: d1L.sample.y - 0.1,
          z: d1L.sample.z,
          yaw: d1L.yaw,
          length: 10.0,
          width: 5.8,
          height: 1.75,
          surface: 'dirt',
        });

        // 4. Long North Shore Cedar Ladder Bridge #2
        const b2 = getTrailAtMeters(trail, 405);
        structures.push({
          id: 'ts_bridge2',
          kind: 'bridge',
          x: b2.sample.x,
          y: b2.sample.y - 0.1,
          z: b2.sample.z,
          yaw: b2.yaw,
          length: 28,
          width: 3.4,
          height: 1.85,
          surface: 'wood',
          rampInLength: 5.0,
          rampOutLength: 5.0,
        });

        // 5. Shore Tabletop
        const t1 = getTrailAtMeters(trail, 515);
        structures.push({
          id: 'ts_table1',
          kind: 'tabletop',
          x: t1.sample.x,
          y: t1.sample.y - 0.1,
          z: t1.sample.z,
          yaw: t1.yaw,
          length: 16.5,
          width: 5.6,
          height: 2.35,
          surface: 'dirt',
          rampInLength: 5.4,
          rampOutLength: 5.8,
        });

        // 6. Final Cedar Drop before Finish
        const d2 = getTrailAtMeters(trail, 575);
        structures.push({
          id: 'ts_drop2',
          kind: 'drop',
          x: d2.sample.x,
          y: d2.sample.y - 0.1,
          z: d2.sample.z,
          yaw: d2.yaw,
          length: 12.0,
          width: 4.0,
          height: 2.15,
          surface: 'wood',
          rampInLength: 6.8,
        });
      },
    };
  }

  if (zoneId === 'harbour_yard') {
    const nodes: TrailNode[] = [
      { x: 0, y: 12.5, z: 0, width: 11.0, surface: 'concrete' },
      { x: 0, y: 8.5, z: 48, width: 11.5, surface: 'concrete' },
      { x: 4, y: 6.2, z: 102, width: 11.5, surface: 'concrete' },
      { x: 22, y: 4.8, z: 162, width: 12.0, bank: 0.22, surface: 'concrete' },
      { x: 46, y: 3.6, z: 220, width: 12.0, surface: 'concrete' },
      { x: 52, y: 2.8, z: 286, width: 12.0, surface: 'concrete' },
      { x: 36, y: 2.2, z: 350, width: 12.0, bank: -0.22, surface: 'concrete' },
      { x: 8, y: 1.8, z: 412, width: 12.0, surface: 'concrete' },
      { x: -12, y: 1.5, z: 476, width: 12.0, surface: 'concrete' },
      { x: -14, y: 1.4, z: 540, width: 12.5, surface: 'concrete' },
      { x: -14, y: 1.3, z: 600, width: 13.0, surface: 'concrete' },
    ];
    return {
      zoneId,
      nodes,
      baseFloorSurface: 'concrete',
      hillAmp: 0.25,
      skyTopColor: 0x0369a1,
      skyBottomColor: 0xbae6fd,
      fogColor: 0x9fd3ea,
      fogNear: 130,
      fogFar: 380,
      sunPosition: new THREE.Vector3(95, 95, -40),
      sunColor: 0xfff8e7,
      sunIntensity: 2.0,
      ambientColor: 0xbae6fd,
      ambientIntensity: 0.85,
      waterY: -2.2,
      harbour: true,
      treesDensity: 0,
      rockDensity: 0,
      buildCustomFeatures: (trail, structures, _obstacles, cargoTags) => {
        // Container Ride-On #1 (Ramp -> Red Container -> Drop -> Landing)
        const c1Ramp = getTrailAtMeters(trail, 56);
        structures.push({
          id: 'hy_ramp1',
          kind: 'ramp',
          x: c1Ramp.sample.x,
          y: c1Ramp.sample.y - 0.05,
          z: c1Ramp.sample.z,
          yaw: c1Ramp.yaw,
          length: 9.0,
          width: 4.4,
          height: 2.6,
          surface: 'wood',
          lipBoost: false,
        });
        const c1Box = getTrailAtMeters(trail, 69);
        structures.push({
          id: 'hy_cont1',
          kind: 'container',
          x: c1Box.sample.x,
          y: c1Box.sample.y - 0.05,
          z: c1Box.sample.z,
          yaw: c1Box.yaw,
          length: 16.0,
          width: 4.6,
          height: 2.65,
          surface: 'metal',
          color: '#dc2626',
        });
        const c1Land = getTrailAtMeters(trail, 87);
        structures.push({
          id: 'hy_land1',
          kind: 'landing',
          x: c1Land.sample.x,
          y: c1Land.sample.y - 0.05,
          z: c1Land.sample.z,
          yaw: c1Land.yaw,
          length: 10.0,
          width: 5.5,
          height: 1.9,
          surface: 'wood',
        });

        // Steel Freight Kicker + Landing
        const k1 = getTrailAtMeters(trail, 134);
        structures.push({
          id: 'hy_kicker1',
          kind: 'kicker',
          x: k1.sample.x,
          y: k1.sample.y - 0.05,
          z: k1.sample.z,
          yaw: k1.yaw,
          length: 7.2,
          width: 5.6,
          height: 2.75,
          surface: 'metal',
          color: '#475569',
        });
        const k1L = getTrailAtMeters(trail, 152);
        structures.push({
          id: 'hy_kicker1_l',
          kind: 'landing',
          x: k1L.sample.x,
          y: k1L.sample.y - 0.05,
          z: k1L.sample.z,
          yaw: k1L.yaw,
          length: 11.0,
          width: 6.4,
          height: 2.3,
          surface: 'metal',
          color: '#475569',
        });

        // Container Ride-On #2 (Blue Container + Gap to Yellow Container!)
        const c2Ramp = getTrailAtMeters(trail, 212);
        structures.push({
          id: 'hy_ramp2',
          kind: 'ramp',
          x: c2Ramp.sample.x,
          y: c2Ramp.sample.y - 0.05,
          z: c2Ramp.sample.z,
          yaw: c2Ramp.yaw,
          length: 9.5,
          width: 4.5,
          height: 2.6,
          surface: 'wood',
          lipBoost: false,
        });
        const c2BoxA = getTrailAtMeters(trail, 224);
        structures.push({
          id: 'hy_cont2a',
          kind: 'container',
          x: c2BoxA.sample.x,
          y: c2BoxA.sample.y - 0.05,
          z: c2BoxA.sample.z,
          yaw: c2BoxA.yaw,
          length: 14.0,
          width: 4.8,
          height: 2.65,
          surface: 'metal',
          color: '#0284c7',
        });
        const c2BoxB = getTrailAtMeters(trail, 245);
        structures.push({
          id: 'hy_cont2b',
          kind: 'container',
          x: c2BoxB.sample.x,
          y: c2BoxB.sample.y - 0.05,
          z: c2BoxB.sample.z,
          yaw: c2BoxB.yaw,
          length: 14.0,
          width: 5.0,
          height: 2.45,
          surface: 'metal',
          color: '#d97706',
        });
        const c2Land = getTrailAtMeters(trail, 261);
        structures.push({
          id: 'hy_land2',
          kind: 'landing',
          x: c2Land.sample.x,
          y: c2Land.sample.y - 0.05,
          z: c2Land.sample.z,
          yaw: c2Land.yaw,
          length: 10.5,
          width: 5.8,
          height: 2.0,
          surface: 'wood',
        });

        // Dockside Timber Tabletop
        const t1 = getTrailAtMeters(trail, 318);
        structures.push({
          id: 'hy_table1',
          kind: 'tabletop',
          x: t1.sample.x,
          y: t1.sample.y - 0.05,
          z: t1.sample.z,
          yaw: t1.yaw,
          length: 18.0,
          width: 6.2,
          height: 2.65,
          surface: 'wood',
          rampInLength: 5.8,
          rampOutLength: 6.2,
        });

        // Container Ride-On #3 (Teal Container Megadrop)
        const c3Ramp = getTrailAtMeters(trail, 396);
        structures.push({
          id: 'hy_ramp3',
          kind: 'ramp',
          x: c3Ramp.sample.x,
          y: c3Ramp.sample.y - 0.05,
          z: c3Ramp.sample.z,
          yaw: c3Ramp.yaw,
          length: 10.0,
          width: 4.8,
          height: 2.85,
          surface: 'metal',
          color: '#334155',
          lipBoost: false,
        });
        const c3Box = getTrailAtMeters(trail, 410);
        structures.push({
          id: 'hy_cont3',
          kind: 'container',
          x: c3Box.sample.x,
          y: c3Box.sample.y - 0.05,
          z: c3Box.sample.z,
          yaw: c3Box.yaw,
          length: 16.0,
          width: 5.0,
          height: 2.9,
          surface: 'metal',
          color: '#0f766e',
        });

        // Mega Crane Air Kicker before Finish
        const k2 = getTrailAtMeters(trail, 488);
        structures.push({
          id: 'hy_kicker2',
          kind: 'kicker',
          x: k2.sample.x,
          y: k2.sample.y - 0.05,
          z: k2.sample.z,
          yaw: k2.yaw,
          length: 7.8,
          width: 6.4,
          height: 3.35,
          surface: 'wood',
        });
        const k2L = getTrailAtMeters(trail, 509);
        structures.push({
          id: 'hy_kicker2_l',
          kind: 'landing',
          x: k2L.sample.x,
          y: k2L.sample.y - 0.05,
          z: k2L.sample.z,
          yaw: k2L.yaw,
          length: 12.5,
          width: 7.0,
          height: 2.85,
          surface: 'metal',
          color: '#475569',
        });

        // 13 Iconic Collectible Cargo Tags placed on fun lines (roofs, gaps, corners!)
        const tagSpecs: { meters: number; lat: number; heightOffset: number; label: string }[] = [
          { meters: 30, lat: 0, heightOffset: 1.2, label: 'Pier Entry' },
          { meters: 69, lat: 0, heightOffset: 3.9, label: 'Red Box Roof' },
          { meters: 108, lat: 2.6, heightOffset: 1.3, label: 'Dockside Apex' },
          { meters: 143, lat: 0, heightOffset: 4.3, label: 'Steel Gap Air' },
          { meters: 184, lat: -2.2, heightOffset: 1.3, label: 'Crane Corner' },
          { meters: 224, lat: 0, heightOffset: 3.9, label: 'Blue Freight Top' },
          { meters: 235, lat: 0, heightOffset: 4.5, label: 'Container Gap' },
          { meters: 288, lat: 2.5, heightOffset: 1.3, label: 'Bollard Line' },
          { meters: 318, lat: 0, heightOffset: 4.3, label: 'Timber Table Peak' },
          { meters: 368, lat: -2.4, heightOffset: 1.3, label: 'Harbour Sweeper' },
          { meters: 410, lat: 0, heightOffset: 4.2, label: 'Teal Box Roof' },
          { meters: 499, lat: 0, heightOffset: 5.1, label: 'Crane Sender Peak' },
          { meters: 556, lat: 0, heightOffset: 1.3, label: 'Final Manifest' },
        ];

        tagSpecs.forEach((ts, i) => {
          const p = getTrailAtMeters(trail, ts.meters);
          cargoTags.push({
            id: `hy_tag_${i + 1}`,
            x: p.sample.x + p.sample.rx * ts.lat,
            y: p.sample.y + ts.heightOffset,
            z: p.sample.z + p.sample.rz * ts.lat,
            label: ts.label,
          });
        });
      },
    };
  }

  // Dream Track — The Grand Alpine Downhill Masterpiece!
  const nodes: TrailNode[] = [
    { x: 0, y: 66, z: 0, width: 9.0, surface: 'rock' },
    { x: 4, y: 58, z: 54, width: 9.0, surface: 'dirt' },
    { x: 26, y: 50, z: 112, width: 9.4, bank: 0.36, surface: 'dirt' },
    { x: 48, y: 43, z: 174, width: 9.2, surface: 'dirt', rollerAmp: 0.5, rollerFreq: 0.42 },
    { x: 34, y: 36.5, z: 238, width: 9.5, bank: -0.36, surface: 'dirt' },
    { x: 2, y: 31, z: 298, width: 9.2, surface: 'mud', mudPatch: true },
    { x: -28, y: 26, z: 362, width: 9.4, bank: -0.34, surface: 'dirt' },
    { x: -34, y: 20.5, z: 428, width: 9.2, surface: 'rock', rockGarden: true },
    { x: -10, y: 15.5, z: 494, width: 9.6, bank: 0.35, surface: 'dirt' },
    { x: 26, y: 11, z: 558, width: 9.6, surface: 'dirt', rollerAmp: 0.45, rollerFreq: 0.44 },
    { x: 42, y: 7.5, z: 626, width: 9.8, surface: 'mud', mudPatch: true },
    { x: 22, y: 4.5, z: 694, width: 10.0, bank: -0.32, surface: 'dirt' },
    { x: -6, y: 2.2, z: 762, width: 10.2, surface: 'dirt' },
    { x: -14, y: 1.0, z: 830, width: 10.8, surface: 'dirt' },
    { x: -14, y: 0.5, z: 885, width: 11.5, surface: 'dirt' },
  ];

  return {
    zoneId: 'dream_track',
    nodes,
    baseFloorSurface: 'grass',
    hillAmp: 12.5,
    skyTopColor: 0x0c4a6e,
    skyBottomColor: 0xfde68a,
    fogColor: 0xcbd9d8,
    fogNear: 120,
    fogFar: 420,
    sunPosition: new THREE.Vector3(120, 115, 70),
    sunColor: 0xfff3d6,
    sunIntensity: 2.15,
    ambientColor: 0xdbeafe,
    ambientIntensity: 0.78,
    treesDensity: 0.9,
    rockDensity: 0.9,
    buildCustomFeatures: (trail, structures) => {
      // 1. Summit Drop-In Tabletop
      const f1 = getTrailAtMeters(trail, 62);
      structures.push({
        id: 'dt_table1',
        kind: 'tabletop',
        x: f1.sample.x,
        y: f1.sample.y - 0.1,
        z: f1.sample.z,
        yaw: f1.yaw,
        length: 17.5,
        width: 6.2,
        height: 2.55,
        surface: 'dirt',
        rampInLength: 5.5,
        rampOutLength: 6.2,
      });

      // 2. Alpine North Shore Ladder Bridge
      const f2 = getTrailAtMeters(trail, 206);
      structures.push({
        id: 'dt_bridge1',
        kind: 'bridge',
        x: f2.sample.x,
        y: f2.sample.y - 0.1,
        z: f2.sample.z,
        yaw: f2.yaw,
        length: 26.0,
        width: 3.8,
        height: 1.85,
        surface: 'wood',
        rampInLength: 4.8,
        rampOutLength: 4.8,
      });

      // 3. Mud Bog Launch Kicker
      const f3 = getTrailAtMeters(trail, 326);
      structures.push({
        id: 'dt_kicker1',
        kind: 'kicker',
        x: f3.sample.x,
        y: f3.sample.y - 0.1,
        z: f3.sample.z,
        yaw: f3.yaw,
        length: 7.4,
        width: 6.0,
        height: 2.95,
        surface: 'wood',
      });
      const f3L = getTrailAtMeters(trail, 347);
      structures.push({
        id: 'dt_kicker1_l',
        kind: 'landing',
        x: f3L.sample.x,
        y: f3L.sample.y - 0.1,
        z: f3L.sample.z,
        yaw: f3L.yaw,
        length: 12.0,
        width: 6.8,
        height: 2.6,
        surface: 'dirt',
      });

      // 4. Rocky Canyon Wood Drop
      const f4 = getTrailAtMeters(trail, 464);
      structures.push({
        id: 'dt_drop1',
        kind: 'drop',
        x: f4.sample.x,
        y: f4.sample.y - 0.1,
        z: f4.sample.z,
        yaw: f4.yaw,
        length: 13.5,
        width: 4.2,
        height: 2.65,
        surface: 'wood',
        rampInLength: 7.5,
      });
      const f4L = getTrailAtMeters(trail, 483);
      structures.push({
        id: 'dt_drop1_l',
        kind: 'landing',
        x: f4L.sample.x,
        y: f4L.sample.y - 0.1,
        z: f4L.sample.z,
        yaw: f4L.yaw,
        length: 11.5,
        width: 6.4,
        height: 2.1,
        surface: 'dirt',
      });

      // 5. High-Speed Wooden Bridge #2
      const f5 = getTrailAtMeters(trail, 590);
      structures.push({
        id: 'dt_bridge2',
        kind: 'bridge',
        x: f5.sample.x,
        y: f5.sample.y - 0.1,
        z: f5.sample.z,
        yaw: f5.yaw,
        length: 28.0,
        width: 3.8,
        height: 2.0,
        surface: 'wood',
        rampInLength: 5.0,
        rampOutLength: 5.0,
      });

      // 6. THE DREAM ROAD GAP (Massive 4m Kicker + Huge Landing!)
      const f6 = getTrailAtMeters(trail, 720);
      structures.push({
        id: 'dt_dream_gap_k',
        kind: 'kicker',
        x: f6.sample.x,
        y: f6.sample.y - 0.1,
        z: f6.sample.z,
        yaw: f6.yaw,
        length: 8.6,
        width: 6.8,
        height: 3.85,
        surface: 'dirt',
      });
      const f6L = getTrailAtMeters(trail, 746);
      structures.push({
        id: 'dt_dream_gap_l',
        kind: 'landing',
        x: f6L.sample.x,
        y: f6L.sample.y - 0.1,
        z: f6L.sample.z,
        yaw: f6L.yaw,
        length: 14.5,
        width: 7.6,
        height: 3.4,
        surface: 'dirt',
      });

      // 7. Festival Finish Tabletop
      const f7 = getTrailAtMeters(trail, 804);
      structures.push({
        id: 'dt_final_table',
        kind: 'tabletop',
        x: f7.sample.x,
        y: f7.sample.y - 0.1,
        z: f7.sample.z,
        yaw: f7.yaw,
        length: 18.0,
        width: 6.8,
        height: 2.6,
        surface: 'wood',
        rampInLength: 5.8,
        rampOutLength: 6.2,
      });
    },
  };
}

// Deterministic pseudo-random helper so courses are 100% consistent every load
function hash2(x: number, z: number): number {
  const s = Math.sin(x * 127.1 + z * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothNoise(x: number, z: number): number {
  const xi = Math.floor(x);
  const zi = Math.floor(z);
  const xf = x - xi;
  const zf = z - zi;
  const u = xf * xf * (3 - 2 * xf);
  const v = zf * zf * (3 - 2 * zf);
  const a = hash2(xi, zi);
  const b = hash2(xi + 1, zi);
  const c = hash2(xi, zi + 1);
  const d = hash2(xi + 1, zi + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, z: number): number {
  return (
    smoothNoise(x * 0.025, z * 0.025) * 0.65 +
    smoothNoise(x * 0.07, z * 0.07) * 0.25 +
    smoothNoise(x * 0.16, z * 0.16) * 0.1
  );
}

export function buildWorld(zoneId: ZoneId): WorldData {
  const bp = createZoneBlueprint(zoneId);
  const group = new THREE.Group();
  const trail = buildTrailSamples(bp.nodes, 1.5);
  const spatial = new TrailSpatialIndex(trail, 16);

  const structures: RideableStructure[] = [];
  const obstacles: SolidObstacle[] = [];
  const cargoTags: CargoTagDef[] = [];
  const hopLogs: HopLogDef[] = [];
  const cargoTagMeshes = new Map<string, THREE.Object3D>();
  const checkpointMeshes: THREE.Object3D[] = [];

  bp.buildCustomFeatures(trail, structures, obstacles, cargoTags, hopLogs);

  // Compute world bounds around trail
  let minX = Infinity;
  let maxX = -Infinity;
  let minZ = Infinity;
  let maxZ = -Infinity;
  for (const s of trail) {
    if (s.x < minX) minX = s.x;
    if (s.x > maxX) maxX = s.x;
    if (s.z < minZ) minZ = s.z;
    if (s.z > maxZ) maxZ = s.z;
  }
  const pad = bp.indoorHall ? 26 : 68;
  minX -= pad;
  maxX += pad;
  minZ -= pad;
  maxZ += pad;

  // Base terrain evaluator (continuous, smooth, matches vertex mesh 1:1!)
  const sampleBaseTerrain = (
    x: number,
    z: number
  ): { height: number; surface: SurfaceType; bankAngle: number; mudFactor: number } => {
    const q = spatial.query(x, z);
    if (!q) {
      // Fallback far off-trail
      const fallbackH = (fbm(x, z) - 0.5) * bp.hillAmp * 2;
      return { height: fallbackH, surface: bp.baseFloorSurface, bankAngle: 0, mudFactor: 0 };
    }

    const s = q.sample;
    const dist = Math.sqrt(q.distSq);
    const halfW = s.width * 0.5;
    const lat = q.lateral;

    // Banked berm geometry: outside of turn rises smoothly like a real MTB berm!
    const clampedLat = Math.max(-halfW * 1.25, Math.min(halfW * 1.25, lat));
    let bermLift = 0;
    if (Math.abs(s.bank) > 0.01) {
      // Linear tilt plus curved outer berm bowl!
      const bankDir = Math.sign(s.bank);
      const outer = Math.max(0, clampedLat * bankDir);
      bermLift = clampedLat * Math.tan(s.bank) + (outer * outer) * 0.045 * Math.abs(s.bank) * 3.0;
    }

    // Subtle trail crown/rut & rock bumps
    let microBump = 0;
    if (s.rockGarden && dist < halfW) {
      microBump = (Math.sin(x * 1.7 + z * 1.3) * Math.cos(x * 0.9 - z * 1.9)) * 0.14;
    } else if (s.mudPatch && dist < halfW) {
      microBump = -0.12 * Math.max(0, 1 - (dist / halfW) ** 2);
    }

    const trailH = s.y + bermLift + microBump;

    if (dist <= halfW) {
      const mudFactor = s.mudPatch ? Math.max(0, 1 - (dist / (halfW * 0.95)) ** 2) : 0;
      return {
        height: trailH,
        surface: s.surface,
        bankAngle: s.bank,
        mudFactor,
      };
    }

    // Smooth blend out into surrounding hills / hall floor / harbour pier
    const blendWidth = bp.indoorHall ? 8 : bp.harbour ? 12 : 18;
    const t = Math.min(1, (dist - halfW) / blendWidth);
    const smoothT = t * t * (3 - 2 * t);

    let outerH: number;
    if (bp.indoorHall) {
      outerH = s.y * (1 - smoothT) + 0.0 * smoothT;
    } else if (bp.harbour) {
      // Concrete dock edges drop slightly toward ocean if far out
      const pierEdge = Math.max(0, (dist - halfW - 22) * 0.25);
      outerH = s.y - pierEdge;
    } else if (bp.alpineValley) {
      // Dramatic steep alpine valley walls on both flanks (matching Image 2!)
      const hill = (fbm(x, z) - 0.35) * bp.hillAmp * 1.8;
      const flank = Math.max(0, dist - halfW - 6);
      const valleyWall = Math.min(34, Math.pow(flank, 1.32) * 0.36);
      outerH = s.y + hill * 0.65 + valleyWall;
    } else {
      const hill = (fbm(x, z) - 0.35) * bp.hillAmp * 2.2;
      const valleyWall = Math.min(18, (dist - halfW) * 0.22);
      outerH = s.y + hill + valleyWall * 0.7;
    }

    const h = trailH * (1 - smoothT) + outerH * smoothT;
    return {
      height: h,
      surface: dist < halfW + 1.4 ? s.surface : bp.baseFloorSurface,
      bankAngle: s.bank * (1 - smoothT),
      mudFactor: 0,
    };
  };

  // Full unified ground query (Base terrain + Rideable structures)
  const sampleGround = (x: number, z: number, currentY?: number): GroundInfo => {
    const base = sampleBaseTerrain(x, z);
    const eps = 0.28;
    const hL = sampleBaseTerrain(x - eps, z).height;
    const hR = sampleBaseTerrain(x + eps, z).height;
    const hD = sampleBaseTerrain(x, z - eps).height;
    const hU = sampleBaseTerrain(x, z + eps).height;

    const dx = (hR - hL) / (2 * eps);
    const dz = (hU - hD) / (2 * eps);
    const invLen = 1 / Math.sqrt(dx * dx + 1 + dz * dz);
    const props = SURFACE_PROPS[base.surface];

    let best: GroundInfo = {
      height: base.height,
      nx: -dx * invLen,
      ny: invLen,
      nz: -dz * invLen,
      surface: base.surface,
      grip: props.grip,
      drag: props.drag,
      isRampLip: false,
      bankAngle: base.bankAngle,
    };

    for (let i = 0; i < structures.length; i++) {
      const st = structures[i];
      // Fast bounding check
      const rad = Math.max(st.length, st.width) * 0.62;
      if (Math.abs(x - st.x) > rad || Math.abs(z - st.z) > rad) continue;
      const hit = sampleStructureSurface(st, x, z, currentY);
      if (hit && hit.height >= best.height - 0.04) {
        best = hit;
      }
    }

    return best;
  };

  // 1. Build High-Resolution Vertex-Colored Terrain Mesh
  const spanX = maxX - minX;
  const spanZ = maxZ - minZ;
  const cellStep = bp.indoorHall ? 2.0 : 2.6;
  const segX = Math.min(180, Math.max(40, Math.ceil(spanX / cellStep)));
  const segZ = Math.min(260, Math.max(40, Math.ceil(spanZ / cellStep)));

  const terrainGeo = new THREE.PlaneGeometry(spanX, spanZ, segX, segZ);
  terrainGeo.rotateX(-Math.PI / 2);
  terrainGeo.translate((minX + maxX) * 0.5, 0, (minZ + maxZ) * 0.5);

  const posAttr = terrainGeo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(posAttr.count * 3);
  const tmpColor = new THREE.Color();

  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vz = posAttr.getZ(i);
    const res = sampleBaseTerrain(vx, vz);
    posAttr.setY(i, res.height);

    const n = hash2(Math.floor(vx * 0.5), Math.floor(vz * 0.5)) * 0.08 - 0.04;
    if (res.surface === 'mud') {
      tmpColor.setRGB(0.28 + n * 0.5, 0.19 + n * 0.4, 0.12 + n * 0.3);
    } else if (res.surface === 'dirt') {
      if (zoneId === 'jump_park') {
        tmpColor.setRGB(0.66 + n, 0.43 + n * 0.8, 0.25 + n * 0.5);
      } else {
        tmpColor.setRGB(0.51 + n, 0.36 + n * 0.8, 0.23 + n * 0.5);
      }
    } else if (res.surface === 'rock') {
      tmpColor.setRGB(0.45 + n, 0.47 + n, 0.5 + n);
    } else if (res.surface === 'wood') {
      tmpColor.setRGB(0.62 + n, 0.44 + n, 0.25 + n);
    } else if (res.surface === 'concrete') {
      tmpColor.setRGB(0.52 + n * 0.6, 0.55 + n * 0.6, 0.58 + n * 0.6);
    } else {
      // Grass / Alpine meadow / Rocky valley flanks matching Image 2!
      if (zoneId === 'training_hall') {
        if (res.height > 7.5) {
          // Pale faceted rocky alpine slopes
          tmpColor.setRGB(0.68 + n * 0.7, 0.59 + n * 0.7, 0.54 + n * 0.6);
        } else {
          // Vibrant sunlit alpine meadow green
          tmpColor.setRGB(0.32 + n, 0.53 + n, 0.17 + n * 0.5);
        }
      } else if (zoneId === 'jump_park') {
        tmpColor.setRGB(0.42 + n, 0.49 + n, 0.24 + n);
      } else if (zoneId === 'dream_track' && res.height > 44) {
        tmpColor.setRGB(0.55 + n, 0.54 + n, 0.51 + n);
      } else {
        tmpColor.setRGB(0.24 + n, 0.47 + n, 0.19 + n * 0.6);
      }
    }
    colors[i * 3] = Math.max(0, Math.min(1, tmpColor.r));
    colors[i * 3 + 1] = Math.max(0, Math.min(1, tmpColor.g));
    colors[i * 3 + 2] = Math.max(0, Math.min(1, tmpColor.b));
  }

  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();

  // Crisp flat-shaded low-poly terrain (signature Image 2 aesthetic!)
  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.92,
    metalness: 0.02,
    flatShading: true,
  });
  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.receiveShadow = true;
  group.add(terrainMesh);

  // Add glossy wet puddle overlays on Mud Patches!
  const puddleMat = new THREE.MeshStandardMaterial({
    color: 0x3b2617,
    roughness: 0.14,
    metalness: 0.22,
    transparent: true,
    opacity: 0.78,
  });
  for (let i = 0; i < trail.length; i += 4) {
    const s = trail[i];
    if (s.mudPatch) {
      const puddle = new THREE.Mesh(
        new THREE.CircleGeometry(s.width * 0.34, 14),
        puddleMat
      );
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.set(s.x, s.y - 0.04, s.z);
      group.add(puddle);
    }
  }

  // 2. Build All Rideable 3D Structures (Kickers, Tabletops, Bridges, Drops, Containers)
  for (const st of structures) {
    const mesh = buildStructureMesh(st);
    group.add(mesh);

    // Add flutter flags on big kickers & tabletops for dramatic visual sighting!
    if (st.kind === 'kicker' || st.kind === 'tabletop') {
      const sinY = Math.sin(st.yaw);
      const cosY = Math.cos(st.yaw);
      const flagOffsetZ = st.kind === 'kicker' ? st.length * 0.42 : -st.length * 0.15;
      for (const side of [-1, 1]) {
        const fx = st.x + sinY * flagOffsetZ + cosY * side * (st.width * 0.5 + 0.35);
        const fz = st.z + cosY * flagOffsetZ - sinY * side * (st.width * 0.5 + 0.35);
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 3.2, 6),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0 })
        );
        pole.position.set(fx, st.y + st.height * 0.7 + 1.5, fz);
        const pennant = new THREE.Mesh(
          new THREE.BoxGeometry(0.05, 0.75, 1.05),
          new THREE.MeshStandardMaterial({
            color: st.kind === 'kicker' ? 0xf97316 : 0xa3e635,
            roughness: 0.5,
          })
        );
        pennant.position.set(fx, st.y + st.height * 0.7 + 2.65, fz + 0.45);
        group.add(pole, pennant);
      }
    }
  }

  // 3. Build Trail Edge Course Stakes & Red/White MTB Race Tape
  const stakeMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.7 });
  const tapeMat = new THREE.MeshStandardMaterial({
    color: zoneId === 'harbour_yard' ? 0xfacc15 : 0xef4444,
    roughness: 0.5,
  });
  const stakeGeo = new THREE.CylinderGeometry(0.045, 0.055, 1.15, 5);
  for (let i = 4; i < trail.length - 4; i += 5) {
    const s = trail[i];
    const halfW = s.width * 0.5 + 0.55;
    for (const side of [-1, 1]) {
      const sx = s.x + s.rx * side * halfW;
      const sz = s.z + s.rz * side * halfW;
      const sy = sampleBaseTerrain(sx, sz).height;
      const stake = new THREE.Mesh(stakeGeo, stakeMat);
      stake.position.set(sx, sy + 0.55, sz);
      group.add(stake);

      if (i % 10 === 4) {
        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.22, 0.14), tapeMat);
        cap.position.set(sx, sy + 1.0, sz);
        group.add(cap);
      }
    }
  }

  // 4. Build Checkpoints & Finish Arch
  const checkpoints: CheckpointDef[] = [];
  const cpRatios = [0.22, 0.48, 0.74, 0.96];
  cpRatios.forEach((ratio, idx) => {
    const pt = getTrailAtRatio(trail, ratio);
    const isFinish = idx === cpRatios.length - 1;
    const g = sampleGround(pt.sample.x, pt.sample.z);
    const cp: CheckpointDef = {
      index: idx,
      x: pt.sample.x,
      y: g.height,
      z: pt.sample.z,
      yaw: pt.yaw,
      width: pt.sample.width + 2.5,
      isFinish,
      label: isFinish ? 'FINISH' : `CP ${idx + 1}`,
    };
    checkpoints.push(cp);

    const arch = buildCheckpointArch(cp);
    group.add(arch);
    checkpointMeshes.push(arch);
  });

  // 5. Build Cargo Tags (Harbour Yard 13 glowing spinning freight tags!)
  const animatedTags: THREE.Object3D[] = [];
  for (const tag of cargoTags) {
    const tagObj = buildCargoTagMesh();
    tagObj.position.set(tag.x, tag.y, tag.z);
    group.add(tagObj);
    cargoTagMeshes.set(tag.id, tagObj);
    animatedTags.push(tagObj);
  }

  // 6. Build Zone-Specific 3D Environment Scenery
  let waterMesh: THREE.Mesh | null = null;
  if (bp.waterY !== undefined) {
    const waterGeo = new THREE.PlaneGeometry(spanX + 500, spanZ + 500, 1, 1);
    waterGeo.rotateX(-Math.PI / 2);
    const waterMat = new THREE.MeshStandardMaterial({
      color: zoneId === 'harbour_yard' ? 0x0284c7 : 0x0e7490,
      roughness: 0.18,
      metalness: 0.35,
      transparent: true,
      opacity: 0.88,
    });
    waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.set((minX + maxX) * 0.5, bp.waterY, (minZ + maxZ) * 0.5);
    group.add(waterMesh);
  }

  if (bp.indoorHall) {
    buildTrainingHallArena(group, minX, maxX, minZ, maxZ);
  }

  if (bp.harbour) {
    buildHarbourScenery(group, trail, sampleBaseTerrain);
  }

  if (bp.alpineValley) {
    buildAlpineValleyDetails(group, trail, hopLogs, sampleBaseTerrain);
  }

  if (bp.treesDensity > 0) {
    buildForestScenery(
      group,
      minX,
      maxX,
      minZ,
      maxZ,
      bp.treesDensity,
      bp.rockDensity,
      spatial,
      sampleBaseTerrain,
      obstacles,
      bp.waterY
    );
  }

  // Starting Gate Banner (skip on Ground Park open starting ramp so vista is unobstructed like Image 2!)
  if (!bp.alpineValley) {
    const startSample = trail[1];
    const startYaw = Math.atan2(startSample.tx, startSample.tz);
    const startGround = sampleGround(startSample.x, startSample.z);
    const startArch = buildStartBanner(
      startSample.x,
      startGround.height,
      startSample.z,
      startYaw,
      startSample.width + 2
    );
    group.add(startArch);
  }

  const updateVisuals = (time: number, _dt: number): void => {
    for (let i = 0; i < animatedTags.length; i++) {
      const t = animatedTags[i];
      if (!t.visible) continue;
      t.rotation.y = time * 2.2 + i * 0.7;
      t.children[0].position.y = Math.sin(time * 3.1 + i) * 0.22;
    }
    if (waterMesh && bp.waterY !== undefined) {
      waterMesh.position.y = bp.waterY + Math.sin(time * 1.1) * 0.08;
    }
  };

  return {
    zoneId,
    group,
    trail,
    structures,
    obstacles,
    checkpoints,
    cargoTags,
    hopLogs,
    cargoTagMeshes,
    checkpointMeshes,
    spawn: {
      x: trail[0].x,
      y: sampleGround(trail[0].x, trail[0].z).height + 0.06,
      z: trail[0].z,
      yaw: Math.atan2(trail[0].tx, trail[0].tz),
    },
    bounds: { minX, maxX, minZ, maxZ },
    waterY: bp.waterY,
    skyTopColor: bp.skyTopColor,
    skyBottomColor: bp.skyBottomColor,
    fogColor: bp.fogColor,
    fogNear: bp.fogNear,
    fogFar: bp.fogFar,
    sunPosition: bp.sunPosition,
    sunColor: bp.sunColor,
    sunIntensity: bp.sunIntensity,
    ambientColor: bp.ambientColor,
    ambientIntensity: bp.ambientIntensity,
    sampleGround,
    updateVisuals,
  };
}

function buildCheckpointArch(cp: CheckpointDef): THREE.Group {
  const g = new THREE.Group();
  g.position.set(cp.x, cp.y, cp.z);
  g.rotation.y = cp.yaw;

  const halfW = cp.width * 0.5;
  const h = cp.isFinish ? 6.2 : 5.0;
  const pillarMat = new THREE.MeshStandardMaterial({
    color: cp.isFinish ? 0x18181b : 0x1e293b,
    roughness: 0.45,
  });
  const glowMat = new THREE.MeshStandardMaterial({
    color: cp.isFinish ? 0xa3e635 : 0x38bdf8,
    emissive: cp.isFinish ? 0x65a30d : 0x0284c7,
    emissiveIntensity: 0.75,
    roughness: 0.3,
  });

  const pillarGeo = new THREE.BoxGeometry(0.45, h, 0.45);
  const pL = new THREE.Mesh(pillarGeo, pillarMat);
  pL.position.set(-halfW, h * 0.5, 0);
  pL.castShadow = true;
  const pR = new THREE.Mesh(pillarGeo, pillarMat);
  pR.position.set(halfW, h * 0.5, 0);
  pR.castShadow = true;

  const beam = new THREE.Mesh(new THREE.BoxGeometry(cp.width + 0.6, 1.0, 0.5), glowMat);
  beam.position.set(0, h, 0);
  beam.castShadow = true;

  // Checkered finish strip
  if (cp.isFinish) {
    const sqCount = 12;
    const sqW = cp.width / sqCount;
    for (let i = 0; i < sqCount; i++) {
      const sq = new THREE.Mesh(
        new THREE.BoxGeometry(sqW, 0.38, 0.54),
        new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0xffffff : 0x111827 })
      );
      sq.position.set(-halfW + sqW * (i + 0.5), h - 0.68, 0);
      g.add(sq);
    }
  }

  g.add(pL, pR, beam);
  return g;
}

function buildStartBanner(x: number, y: number, z: number, yaw: number, width: number): THREE.Group {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = yaw;
  const halfW = width * 0.5;
  const postMat = new THREE.MeshStandardMaterial({ color: 0x27272a, roughness: 0.5 });
  const topMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    emissive: 0x9a3412,
    emissiveIntensity: 0.45,
    roughness: 0.4,
  });
  const pL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 5.2, 0.4), postMat);
  pL.position.set(-halfW, 2.6, 0);
  const pR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 5.2, 0.4), postMat);
  pR.position.set(halfW, 2.6, 0);
  const bar = new THREE.Mesh(new THREE.BoxGeometry(width + 0.5, 0.9, 0.45), topMat);
  bar.position.set(0, 5.2, 0);
  g.add(pL, pR, bar);
  return g;
}

function buildCargoTagMesh(): THREE.Group {
  const outer = new THREE.Group();
  const core = new THREE.Group();

  const tagMat = new THREE.MeshStandardMaterial({
    color: 0xfacc15,
    emissive: 0xd97706,
    emissiveIntensity: 0.85,
    roughness: 0.25,
    metalness: 0.5,
  });
  const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.68, 0), tagMat);
  core.add(diamond);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.95, 0.08, 8, 20),
    new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0ea5e9,
      emissiveIntensity: 0.8,
    })
  );
  ring.rotation.x = Math.PI * 0.35;
  core.add(ring);

  // Subtle vertical light beacon so players can spot tags across the harbour!
  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.45, 7.5, 8, 1, true),
    new THREE.MeshBasicMaterial({
      color: 0xfde047,
      transparent: true,
      opacity: 0.16,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  beam.position.y = 3.2;
  outer.add(core, beam);
  return outer;
}

function buildTrainingHallArena(
  group: THREE.Group,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number
): void {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 });
  const timberMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 });
  const roofLightMat = new THREE.MeshBasicMaterial({ color: 0xfff7ed });

  const cx = (minX + maxX) * 0.5;
  const cz = (minZ + maxZ) * 0.5;
  const w = maxX - minX;
  const d = maxZ - minZ;
  const wallH = 19;

  // 4 Hall Walls
  const nWall = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, 1.5), wallMat);
  nWall.position.set(cx, wallH * 0.5 - 1, maxZ);
  const sWall = new THREE.Mesh(new THREE.BoxGeometry(w, wallH, 1.5), wallMat);
  sWall.position.set(cx, wallH * 0.5 - 1, minZ);
  const wWall = new THREE.Mesh(new THREE.BoxGeometry(1.5, wallH, d), wallMat);
  wWall.position.set(minX, wallH * 0.5 - 1, cz);
  const eWall = new THREE.Mesh(new THREE.BoxGeometry(1.5, wallH, d), wallMat);
  eWall.position.set(maxX, wallH * 0.5 - 1, cz);
  group.add(nWall, sWall, wWall, eWall);

  // Timber roof rafters & skylight strips spanning overhead
  const trussCount = 10;
  for (let i = 0; i <= trussCount; i++) {
    const zPos = minZ + (i / trussCount) * d;
    const beam = new THREE.Mesh(new THREE.BoxGeometry(w, 0.7, 0.6), timberMat);
    beam.position.set(cx, wallH - 0.5, zPos);
    group.add(beam);

    if (i < trussCount) {
      const light = new THREE.Mesh(new THREE.BoxGeometry(w * 0.55, 0.2, 2.2), roofLightMat);
      light.position.set(cx, wallH - 0.2, zPos + d / trussCount / 2);
      group.add(light);
    }
  }
}

function buildHarbourScenery(
  group: THREE.Group,
  trail: TrailSample[],
  sampleBaseTerrain: (x: number, z: number) => { height: number }
): void {
  const colors = ['#dc2626', '#0284c7', '#d97706', '#0f766e', '#4f46e5', '#b91c1c'];
  const craneYellow = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.45, metalness: 0.35 });
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.55, metalness: 0.5 });

  // Place scenic stacked shipping containers flanking the pier track
  for (let i = 6; i < trail.length - 6; i += 14) {
    const s = trail[i];
    const yaw = Math.atan2(s.tx, s.tz);
    for (const side of [-1, 1]) {
      const offset = s.width * 0.5 + 8.5 + (i % 3) * 3.2;
      const cx = s.x + s.rx * side * offset;
      const cz = s.z + s.rz * side * offset;
      const cy = sampleBaseTerrain(cx, cz).height;
      const stack = (i + (side > 0 ? 1 : 0)) % 3 === 0 ? 2 : 1;

      for (let lvl = 0; lvl < stack; lvl++) {
        const col = colors[(i + lvl + (side > 0 ? 2 : 0)) % colors.length];
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(3.2, 2.8, 9.6),
          new THREE.MeshStandardMaterial({ color: col, roughness: 0.55, metalness: 0.3 })
        );
        box.position.set(cx, cy + 1.4 + lvl * 2.85, cz);
        box.rotation.y = yaw + (lvl * 0.05);
        box.castShadow = true;
        box.receiveShadow = true;
        group.add(box);
      }
    }
  }

  // Towering Harbour Gantry Cranes!
  const craneIndices = [Math.floor(trail.length * 0.25), Math.floor(trail.length * 0.62), Math.floor(trail.length * 0.88)];
  for (const idx of craneIndices) {
    const s = trail[idx];
    const side = idx % 2 === 0 ? 1 : -1;
    const gx = s.x + s.rx * side * 26;
    const gz = s.z + s.rz * side * 26;
    const gy = sampleBaseTerrain(gx, gz).height;

    const crane = new THREE.Group();
    crane.position.set(gx, gy, gz);
    crane.rotation.y = Math.atan2(s.tx, s.tz);

    const legGeo = new THREE.BoxGeometry(1.4, 28, 1.4);
    const legs = [
      [-5, 14, -5],
      [5, 14, -5],
      [-5, 14, 5],
      [5, 14, 5],
    ];
    for (const [lx, ly, lz] of legs) {
      const leg = new THREE.Mesh(legGeo, craneYellow);
      leg.position.set(lx, ly, lz);
      leg.castShadow = true;
      crane.add(leg);
    }
    const boom = new THREE.Mesh(new THREE.BoxGeometry(44, 2.2, 2.8), craneYellow);
    boom.position.set(-side * 10, 27, 0);
    boom.castShadow = true;
    const cab = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.2, 4.0), steelDark);
    cab.position.set(0, 24.5, 0);
    crane.add(boom, cab);
    group.add(crane);
  }
}

function buildForestScenery(
  group: THREE.Group,
  minX: number,
  maxX: number,
  minZ: number,
  maxZ: number,
  treesDensity: number,
  rockDensity: number,
  spatial: TrailSpatialIndex,
  sampleBaseTerrain: (x: number, z: number) => { height: number },
  obstacles: SolidObstacle[],
  waterY?: number
): void {
  const treePositions: { x: number; y: number; z: number; scale: number }[] = [];
  const rockPositions: { x: number; y: number; z: number; scale: number; rot: number }[] = [];

  const step = Math.max(7.5, 11.5 - treesDensity * 3.5);
  for (let x = minX + 6; x < maxX - 6; x += step) {
    for (let z = minZ + 6; z < maxZ - 6; z += step) {
      const r1 = hash2(x * 0.31, z * 0.47);
      const r2 = hash2(x * 0.73 + 11, z * 0.29 + 5);
      const jx = x + (r1 - 0.5) * step * 0.85;
      const jz = z + (r2 - 0.5) * step * 0.85;

      const q = spatial.query(jx, jz);
      const distToTrail = q ? Math.sqrt(q.distSq) : 999;
      const clearance = q ? q.sample.width * 0.5 + 3.4 : 6;
      if (distToTrail < clearance || distToTrail > 68) continue;

      const y = sampleBaseTerrain(jx, jz).height;
      if (waterY !== undefined && y < waterY + 0.6) continue;

      if (r1 < treesDensity * 0.72) {
        const scale = 0.85 + r2 * 0.95;
        treePositions.push({ x: jx, y, z: jz, scale });
        if (distToTrail < clearance + 14) {
          obstacles.push({
            x: jx,
            z: jz,
            radius: 0.42 * scale,
            minY: y,
            maxY: y + 6 * scale,
            label: 'Pine Tree',
          });
        }
      } else if (r2 < rockDensity * 0.35) {
        const scale = 0.6 + r1 * 1.4;
        rockPositions.push({ x: jx, y, z: jz, scale, rot: r1 * Math.PI * 2 });
        if (distToTrail < clearance + 10) {
          obstacles.push({
            x: jx,
            z: jz,
            radius: 0.75 * scale,
            minY: y - 0.5,
            maxY: y + 1.1 * scale,
            label: 'Boulder',
          });
        }
      }
    }
  }

  // Instanced Stylized 3-Tiered Low-Poly Pine Trees (matching Image 2!)
  if (treePositions.length > 0) {
    const trunkGeo = new THREE.CylinderGeometry(0.18, 0.3, 2.8, 6);
    trunkGeo.translate(0, 1.4, 0);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3a1e, roughness: 0.92, flatShading: true });

    const foliage1Geo = new THREE.ConeGeometry(2.1, 4.4, 6);
    foliage1Geo.translate(0, 3.8, 0);
    const foliage2Geo = new THREE.ConeGeometry(1.65, 3.8, 6);
    foliage2Geo.translate(0, 5.9, 0);
    const foliage3Geo = new THREE.ConeGeometry(1.15, 3.2, 6);
    foliage3Geo.translate(0, 7.8, 0);
    const foliageMat1 = new THREE.MeshStandardMaterial({ color: 0x1c4a27, roughness: 0.88, flatShading: true });
    const foliageMat2 = new THREE.MeshStandardMaterial({ color: 0x266232, roughness: 0.88, flatShading: true });
    const foliageMat3 = new THREE.MeshStandardMaterial({ color: 0x327a3d, roughness: 0.88, flatShading: true });

    const count = treePositions.length;
    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, count);
    const cones1 = new THREE.InstancedMesh(foliage1Geo, foliageMat1, count);
    const cones2 = new THREE.InstancedMesh(foliage2Geo, foliageMat2, count);
    const cones3 = new THREE.InstancedMesh(foliage3Geo, foliageMat3, count);
    trunks.castShadow = true;
    cones1.castShadow = true;
    cones2.castShadow = true;
    cones3.castShadow = true;
    cones1.receiveShadow = true;

    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const p = treePositions[i];
      dummy.position.set(p.x, p.y - 0.15, p.z);
      dummy.rotation.set(0, p.x * 1.3, 0);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);
      cones1.setMatrixAt(i, dummy.matrix);
      cones2.setMatrixAt(i, dummy.matrix);
      cones3.setMatrixAt(i, dummy.matrix);
    }
    group.add(trunks, cones1, cones2, cones3);
  }

  // Instanced Stylized Flat-Shaded Boulders
  if (rockPositions.length > 0) {
    const rockGeo = new THREE.DodecahedronGeometry(0.95, 0);
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x9aa3ad, roughness: 0.9, flatShading: true });
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, rockPositions.length);
    rocks.castShadow = true;
    rocks.receiveShadow = true;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < rockPositions.length; i++) {
      const r = rockPositions[i];
      dummy.position.set(r.x, r.y + 0.35 * r.scale, r.z);
      dummy.rotation.set(r.rot * 0.5, r.rot, 0);
      dummy.scale.set(r.scale * 1.2, r.scale * 0.72, r.scale);
      dummy.updateMatrix();
      rocks.setMatrixAt(i, dummy.matrix);
    }
    group.add(rocks);
  }
}

function buildAlpineValleyDetails(
  group: THREE.Group,
  trail: TrailSample[],
  hopLogs: HopLogDef[],
  sampleBaseTerrain: (x: number, z: number) => { height: number }
): void {
  // 1. Trailside Wooden Hut on the right of the starting ramp (matching Image 2!)
  const hutSample = getTrailAtMeters(trail, 28).sample;
  const hx = hutSample.x + hutSample.rx * -12.5;
  const hz = hutSample.z + hutSample.rz * -12.5;
  const hy = sampleBaseTerrain(hx, hz).height;
  const hut = new THREE.Group();
  hut.position.set(hx, hy, hz);
  hut.rotation.y = 0.32;
  const woodWallMat = new THREE.MeshStandardMaterial({ color: 0x5c2d12, roughness: 0.9, flatShading: true });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x451f0b, roughness: 0.9, flatShading: true });
  const baseBox = new THREE.Mesh(new THREE.BoxGeometry(5.2, 2.8, 4.4), woodWallMat);
  baseBox.position.y = 1.4;
  baseBox.castShadow = true;
  baseBox.receiveShadow = true;
  const roof = new THREE.Mesh(new THREE.ConeGeometry(4.1, 2.1, 4), roofMat);
  roof.position.y = 3.85;
  roof.rotation.y = Math.PI / 4;
  roof.castShadow = true;
  hut.add(baseBox, roof);
  group.add(hut);

  // 2. Hop Logs across the trail (15cm, 25cm, 35cm) with bright orange side cones!
  const logMat = new THREE.MeshStandardMaterial({ color: 0x6b3e1e, roughness: 0.9, flatShading: true });
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5, flatShading: true });
  for (const log of hopLogs) {
    const lg = new THREE.Group();
    lg.position.set(log.x, log.y, log.z);
    lg.rotation.y = log.yaw;

    const r = log.height * 0.55;
    const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, log.width, 7), logMat);
    cyl.rotation.z = Math.PI / 2;
    cyl.position.y = r * 0.85;
    cyl.castShadow = true;
    cyl.receiveShadow = true;
    lg.add(cyl);

    // Orange marker cones flanking each hop log
    for (const side of [-1, 1]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.58, 6), stripeMat);
      cone.position.set(side * (log.width * 0.5 + 0.35), 0.29, 0);
      cone.castShadow = true;
      lg.add(cone);
    }
    group.add(lg);
  }

  // 3. Vibrant Purple Lupines & Yellow Wildflower Clusters flanking the dirt trail (exact Image 2 touch!)
  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x7e22ce, roughness: 0.75, flatShading: true });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.7, flatShading: true });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.85, flatShading: true });

  for (let i = 4; i < Math.min(trail.length - 4, 180); i += 3) {
    const s = trail[i];
    for (const side of [-1, 1]) {
      const lat = side * (s.width * 0.5 + 1.1 + hash2(i, side * 13) * 4.2);
      const fx = s.x + s.rx * lat;
      const fz = s.z + s.rz * lat;
      const fy = sampleBaseTerrain(fx, fz).height;

      if ((i + (side > 0 ? 1 : 0)) % 2 === 0) {
        // Purple lupine spike
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.95, 5), purpleMat);
        spike.position.set(fx, fy + 0.55, fz);
        spike.rotation.z = (hash2(fx, fz) - 0.5) * 0.25;
        const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.45, 5), stemMat);
        leaf.position.set(fx, fy + 0.2, fz);
        group.add(spike, leaf);
      } else {
        // Yellow wildflower tuft
        const tuft = new THREE.Mesh(new THREE.DodecahedronGeometry(0.22, 0), yellowMat);
        tuft.scale.set(1.2, 0.65, 1.2);
        tuft.position.set(fx, fy + 0.16, fz);
        group.add(tuft);
      }
    }
  }
}
