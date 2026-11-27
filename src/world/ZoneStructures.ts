import * as THREE from 'three';
import { CargoTagDef, CheckpointDef, GroundInfo, HopLogDef, SurfaceType, ZoneId } from '../types';

export interface TrailNode {
  x: number;
  y: number;
  z: number;
  width: number;
  bank?: number;         // radians, positive banks left edge down / right edge up
  surface?: SurfaceType;
  rollerAmp?: number;    // sinusoidal pump rollers height
  rollerFreq?: number;   // frequency per meter
  mudPatch?: boolean;
  rockGarden?: boolean;
}

export interface TrailSample {
  s: number; // cumulative arc length
  x: number;
  y: number;
  z: number;
  tx: number;
  ty: number;
  tz: number;
  rx: number; // right vector X (in XZ plane)
  rz: number; // right vector Z (in XZ plane)
  width: number;
  bank: number;
  surface: SurfaceType;
  mudPatch: boolean;
  rockGarden: boolean;
  rollerAmp: number;
  rollerFreq: number;
}

export type StructureKind = 'tabletop' | 'kicker' | 'landing' | 'bridge' | 'container' | 'ramp' | 'drop';

export interface RideableStructure {
  id: string;
  kind: StructureKind;
  x: number;
  y: number; // base ground elevation at center
  z: number;
  yaw: number; // forward direction angle: dir = (sin(yaw), cos(yaw))
  length: number;
  width: number;
  height: number; // peak height above y
  surface: SurfaceType;
  color?: string;
  deckLength?: number;    // for tabletops
  rampInLength?: number;  // for bridges/tabletops
  rampOutLength?: number; // for bridges/tabletops
  railings?: boolean;
  lipBoost?: boolean;
}

export interface SolidObstacle {
  x: number;
  z: number;
  radius: number;
  minY: number;
  maxY: number;
  label: string;
}

export interface WorldData {
  zoneId: ZoneId;
  group: THREE.Group;
  trail: TrailSample[];
  structures: RideableStructure[];
  obstacles: SolidObstacle[];
  checkpoints: CheckpointDef[];
  cargoTags: CargoTagDef[];
  hopLogs: HopLogDef[];
  cargoTagMeshes: Map<string, THREE.Object3D>;
  checkpointMeshes: THREE.Object3D[];
  spawn: { x: number; y: number; z: number; yaw: number };
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  waterY?: number;
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
  sampleGround: (x: number, z: number, currentY?: number) => GroundInfo;
  updateVisuals: (time: number, dt: number) => void;
}

export const SURFACE_PROPS: Record<SurfaceType, { grip: number; drag: number }> = {
  dirt: { grip: 1.0, drag: 0.012 },
  mud: { grip: 0.52, drag: 0.048 },
  wood: { grip: 0.96, drag: 0.008 },
  rock: { grip: 0.92, drag: 0.018 },
  metal: { grip: 0.94, drag: 0.007 },
  grass: { grip: 0.82, drag: 0.024 },
  concrete: { grip: 1.08, drag: 0.006 },
};

export function evaluateStructureHeight(
  st: RideableStructure,
  localZ: number // -length/2 (entry) .. +length/2 (exit)
): { h: number; slope: number; isLip: boolean } {
  const halfL = st.length * 0.5;
  const u = (localZ + halfL) / st.length; // 0..1

  if (st.kind === 'kicker') {
    // Smooth progressive dirt/wood kicker curve launching upward
    const p = Math.max(0, Math.min(1, u));
    const h = st.height * Math.pow(p, 1.65);
    const slope = (st.height * 1.65 * Math.pow(Math.max(0.01, p), 0.65)) / st.length;
    return { h, slope, isLip: p > 0.72 };
  }

  if (st.kind === 'landing') {
    // Smooth downhill landing ramp
    const p = Math.max(0, Math.min(1, u));
    const inv = 1 - p;
    const h = st.height * Math.pow(inv, 1.35);
    const slope = -(st.height * 1.35 * Math.pow(Math.max(0.01, inv), 0.35)) / st.length;
    return { h, slope, isLip: false };
  }

  if (st.kind === 'ramp') {
    const p = Math.max(0, Math.min(1, u));
    const h = st.height * p;
    const slope = st.height / st.length;
    return { h, slope, isLip: p > 0.8 };
  }

  if (st.kind === 'tabletop') {
    const inL = st.rampInLength ?? st.length * 0.32;
    const outL = st.rampOutLength ?? st.length * 0.34;
    const dist = localZ + halfL;
    if (dist < inL) {
      const p = dist / inL;
      const h = st.height * Math.pow(p, 1.45);
      const slope = (st.height * 1.45 * Math.pow(Math.max(0.01, p), 0.45)) / inL;
      return { h, slope, isLip: p > 0.75 };
    }
    if (dist > st.length - outL) {
      const p = (dist - (st.length - outL)) / outL;
      const inv = 1 - p;
      const h = st.height * Math.pow(inv, 1.25);
      const slope = -(st.height * 1.25 * Math.pow(Math.max(0.01, inv), 0.25)) / outL;
      return { h, slope, isLip: false };
    }
    return { h: st.height, slope: 0, isLip: false };
  }

  if (st.kind === 'bridge') {
    const inL = st.rampInLength ?? Math.min(4.5, st.length * 0.22);
    const outL = st.rampOutLength ?? Math.min(4.5, st.length * 0.22);
    const dist = localZ + halfL;
    if (inL > 0 && dist < inL) {
      const p = dist / inL;
      return { h: st.height * p, slope: st.height / inL, isLip: false };
    }
    if (outL > 0 && dist > st.length - outL) {
      const p = 1 - (dist - (st.length - outL)) / outL;
      return { h: st.height * p, slope: -st.height / outL, isLip: false };
    }
    return { h: st.height, slope: 0, isLip: false };
  }

  if (st.kind === 'drop') {
    const inL = st.rampInLength ?? st.length * 0.55;
    const dist = localZ + halfL;
    if (dist < inL) {
      const p = dist / inL;
      return { h: st.height * p, slope: st.height / inL, isLip: false };
    }
    return { h: st.height, slope: 0, isLip: dist > st.length - 1.2 };
  }

  // container flat roof
  return { h: st.height, slope: 0, isLip: localZ > halfL - 1.0 };
}

export function sampleStructureSurface(
  st: RideableStructure,
  wx: number,
  wz: number,
  currentY?: number
): GroundInfo | null {
  const dx = wx - st.x;
  const dz = wz - st.z;
  const sinY = Math.sin(st.yaw);
  const cosY = Math.cos(st.yaw);

  // Forward = (sinY, cosY), Right = (cosY, -sinY)
  const localZ = dx * sinY + dz * cosY;
  const localX = dx * cosY - dz * sinY;

  const halfL = st.length * 0.5;
  const halfW = st.width * 0.5;

  if (Math.abs(localZ) > halfL || Math.abs(localX) > halfW) {
    return null;
  }

  const { h, slope, isLip } = evaluateStructureHeight(st, localZ);
  const surfaceY = st.y + h;

  // Prevent snapping up onto tall overhead containers/bridges if rider is clearly underneath/beside
  if (currentY !== undefined && surfaceY > currentY + 1.35) {
    return null;
  }

  // Normal in local space: (0, 1, -slope) normalized
  const invLen = 1 / Math.sqrt(1 + slope * slope);
  const ny = invLen;
  const nLocalZ = -slope * invLen;
  const nx = nLocalZ * sinY;
  const nz = nLocalZ * cosY;

  const props = SURFACE_PROPS[st.surface];
  return {
    height: surfaceY,
    nx,
    ny,
    nz,
    surface: st.surface,
    grip: props.grip,
    drag: props.drag,
    isRampLip: isLip && (st.lipBoost ?? true),
    bankAngle: 0,
  };
}

export function buildTrailSamples(nodes: TrailNode[], stepMeters = 1.6): TrailSample[] {
  if (nodes.length < 2) return [];
  const curvePts = nodes.map((n) => new THREE.Vector3(n.x, n.y, n.z));
  const curve = new THREE.CatmullRomCurve3(curvePts, false, 'centripetal', 0.5);
  const totalLen = curve.getLength();
  const count = Math.max(20, Math.ceil(totalLen / stepMeters));

  const samples: TrailSample[] = [];
  let accumS = 0;
  let prevPt: THREE.Vector3 | null = null;

  for (let i = 0; i <= count; i++) {
    const t = i / count;
    const pt = curve.getPoint(t);
    const tan = curve.getTangent(t).normalize();

    if (prevPt) {
      accumS += pt.distanceTo(prevPt);
    }
    prevPt = pt;

    // Interpolate node attributes
    const fIdx = t * (nodes.length - 1);
    const i0 = Math.floor(fIdx);
    const i1 = Math.min(nodes.length - 1, i0 + 1);
    const frac = fIdx - i0;
    const n0 = nodes[i0];
    const n1 = nodes[i1];

    const width = n0.width + (n1.width - n0.width) * frac;
    const bank = (n0.bank ?? 0) + ((n1.bank ?? 0) - (n0.bank ?? 0)) * frac;
    const rollerAmp = (n0.rollerAmp ?? 0) + ((n1.rollerAmp ?? 0) - (n0.rollerAmp ?? 0)) * frac;
    const rollerFreq = (n0.rollerFreq ?? 0.45) + ((n1.rollerFreq ?? 0.45) - (n0.rollerFreq ?? 0.45)) * frac;
    const activeNode = frac < 0.5 ? n0 : n1;
    const surface: SurfaceType = activeNode.mudPatch
      ? 'mud'
      : activeNode.rockGarden
        ? 'rock'
        : activeNode.surface ?? 'dirt';

    const horizLen = Math.hypot(tan.x, tan.z) || 1;
    const htx = tan.x / horizLen;
    const htz = tan.z / horizLen;
    // Right vector in XZ plane: (htz, -htx) -> actually cross(forward, up) = (-tz, tx) wait:
    // Forward = (htx, 0, htz), Up = (0, 1, 0) => Forward x Up = (-htz, 0, htx) wait:
    // i(0) - j(0) + k(0): FxU = (0*0 - htz*1, htz*0 - htx*0, htx*1 - 0) = (-htz, 0, htx)
    const rx = -htz;
    const rz = htx;

    const rollerY = rollerAmp > 0.01 ? Math.sin(accumS * rollerFreq) * rollerAmp : 0;

    samples.push({
      s: accumS,
      x: pt.x,
      y: pt.y + rollerY,
      z: pt.z,
      tx: tan.x,
      ty: tan.y,
      tz: tan.z,
      rx,
      rz,
      width,
      bank,
      surface,
      mudPatch: Boolean(activeNode.mudPatch),
      rockGarden: Boolean(activeNode.rockGarden),
      rollerAmp,
      rollerFreq,
    });
  }
  return samples;
}

export class TrailSpatialIndex {
  private cellSize: number;
  private buckets = new Map<string, number[]>();
  private samples: TrailSample[];

  constructor(samples: TrailSample[], cellSize = 14) {
    this.samples = samples;
    this.cellSize = cellSize;
    for (let i = 0; i < samples.length; i++) {
      const s = samples[i];
      const cx = Math.floor(s.x / cellSize);
      const cz = Math.floor(s.z / cellSize);
      for (let ox = -1; ox <= 1; ox++) {
        for (let oz = -1; oz <= 1; oz++) {
          const key = `${cx + ox},${cz + oz}`;
          let arr = this.buckets.get(key);
          if (!arr) {
            arr = [];
            this.buckets.set(key, arr);
          }
          arr.push(i);
        }
      }
    }
  }

  public query(x: number, z: number): {
    sample: TrailSample;
    index: number;
    distSq: number;
    lateral: number;
  } | null {
    const cx = Math.floor(x / this.cellSize);
    const cz = Math.floor(z / this.cellSize);
    const list = this.buckets.get(`${cx},${cz}`);
    if (!list || list.length === 0) return null;

    let bestIdx = -1;
    let bestDistSq = Infinity;

    for (let k = 0; k < list.length; k++) {
      const idx = list[k];
      const s = this.samples[idx];
      const dx = x - s.x;
      const dz = z - s.z;
      const d2 = dx * dx + dz * dz;
      if (d2 < bestDistSq) {
        bestDistSq = d2;
        bestIdx = idx;
      }
    }

    if (bestIdx < 0) return null;
    const s = this.samples[bestIdx];
    const dx = x - s.x;
    const dz = z - s.z;
    const lateral = dx * s.rx + dz * s.rz;
    return { sample: s, index: bestIdx, distSq: bestDistSq, lateral };
  }
}

export function buildStructureMesh(st: RideableStructure): THREE.Group {
  const group = new THREE.Group();
  group.position.set(st.x, st.y, st.z);
  group.rotation.y = st.yaw;

  const halfL = st.length * 0.5;
  const halfW = st.width * 0.5;

  if (st.kind === 'container') {
    const bodyColor = st.color ?? '#c1121f';
    const mat = new THREE.MeshStandardMaterial({
      color: bodyColor,
      roughness: 0.55,
      metalness: 0.35,
    });
    const box = new THREE.Mesh(new THREE.BoxGeometry(st.width, st.height, st.length), mat);
    box.position.y = st.height * 0.5;
    box.castShadow = true;
    box.receiveShadow = true;
    group.add(box);

    // Corrugated steel ribs along sides for crisp harbour look
    const ribMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(bodyColor).multiplyScalar(0.76),
      roughness: 0.6,
      metalness: 0.4,
    });
    const ribCount = Math.max(4, Math.floor(st.length / 0.85));
    const ribGeo = new THREE.BoxGeometry(st.width + 0.08, st.height - 0.25, 0.14);
    for (let i = 0; i < ribCount; i++) {
      const zPos = -halfL + 0.45 + (i / Math.max(1, ribCount - 1)) * (st.length - 0.9);
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(0, st.height * 0.5, zPos);
      group.add(rib);
    }

    // Yellow hazard edge stripes on top deck
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.5 });
    const edgeGeo = new THREE.BoxGeometry(0.14, 0.04, st.length - 0.1);
    const leftEdge = new THREE.Mesh(edgeGeo, stripeMat);
    leftEdge.position.set(-halfW + 0.1, st.height + 0.02, 0);
    const rightEdge = new THREE.Mesh(edgeGeo, stripeMat);
    rightEdge.position.set(halfW - 0.1, st.height + 0.02, 0);
    group.add(leftEdge, rightEdge);

    return group;
  }

  // Sculpted extruded ramp/kicker/tabletop/bridge profile mesh matching evaluateStructureHeight EXACTLY!
  const segs = Math.max(12, Math.ceil(st.length * 1.5));
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const profileH: number[] = [];
  for (let i = 0; i <= segs; i++) {
    const localZ = -halfL + (i / segs) * st.length;
    profileH.push(evaluateStructureHeight(st, localZ).h);
  }

  const isElevatedWood = st.kind === 'bridge' || st.kind === 'drop';
  const deckThickness = isElevatedWood ? 0.24 : 0;

  // Top surface vertices
  for (let i = 0; i <= segs; i++) {
    const localZ = -halfL + (i / segs) * st.length;
    const h = profileH[i];
    positions.push(-halfW, h, localZ);
    positions.push(halfW, h, localZ);
    uvs.push(0, i / segs);
    uvs.push(1, i / segs);
  }
  for (let i = 0; i < segs; i++) {
    const a = i * 2;
    const b = a + 1;
    const c = a + 2;
    const d = a + 3;
    indices.push(a, c, b, b, c, d);
  }

  // Side walls (solid to ground for dirt/metal ramps, thin deck beam for wooden bridges)
  const sideBaseIdx = positions.length / 3;
  for (const side of [-1, 1]) {
    const xPos = side * halfW;
    const startV = positions.length / 3;
    for (let i = 0; i <= segs; i++) {
      const localZ = -halfL + (i / segs) * st.length;
      const topH = profileH[i];
      const botH = isElevatedWood ? Math.max(0, topH - deckThickness) : -1.2;
      positions.push(xPos, topH, localZ);
      positions.push(xPos, botH, localZ);
      uvs.push(i / segs, 1);
      uvs.push(i / segs, 0);
    }
    for (let i = 0; i < segs; i++) {
      const a = startV + i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      if (side > 0) {
        indices.push(a, b, c, b, d, c);
      } else {
        indices.push(a, c, b, b, c, d);
      }
    }
  }
  void sideBaseIdx;

  // Back face cap (important for kickers and drops!)
  const backTopH = profileH[segs];
  if (backTopH > 0.08) {
    const bStart = positions.length / 3;
    const botY = isElevatedWood ? Math.max(0, backTopH - deckThickness) : -1.2;
    positions.push(-halfW, backTopH, halfL);
    positions.push(halfW, backTopH, halfL);
    positions.push(-halfW, botY, halfL);
    positions.push(halfW, botY, halfL);
    uvs.push(0, 1, 1, 1, 0, 0, 1, 0);
    indices.push(bStart, bStart + 2, bStart + 1, bStart + 1, bStart + 2, bStart + 3);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const surfaceColorMap: Record<SurfaceType, number> = {
    dirt: 0x9c6644,
    mud: 0x5c3d28,
    wood: 0xb07d48,
    rock: 0x767c85,
    metal: 0x64748b,
    grass: 0x4d7c3f,
    concrete: 0x8d959e,
  };

  const mainMat = new THREE.MeshStandardMaterial({
    color: st.color ? new THREE.Color(st.color) : new THREE.Color(surfaceColorMap[st.surface]),
    roughness: st.surface === 'metal' ? 0.45 : st.surface === 'wood' ? 0.82 : 0.92,
    metalness: st.surface === 'metal' ? 0.45 : 0.04,
    flatShading: true,
  });

  const mesh = new THREE.Mesh(geo, mainMat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);

  // Add wide cedar timber planks matching the POV ramp look!
  if (st.surface === 'wood') {
    const slatMat = new THREE.MeshStandardMaterial({ color: 0x6f431d, roughness: 0.86, flatShading: true });
    const slatAltMat = new THREE.MeshStandardMaterial({ color: 0x5c3616, roughness: 0.88, flatShading: true });
    const postMat = new THREE.MeshStandardMaterial({ color: 0x4b2d14, roughness: 0.9, flatShading: true });
    const plankCount = Math.max(5, Math.floor(st.length / 0.56));
    const slatGeo = new THREE.BoxGeometry(st.width + 0.08, 0.065, 0.42);
    for (let i = 0; i < plankCount; i++) {
      const localZ = -halfL + 0.28 + (i / Math.max(1, plankCount - 1)) * (st.length - 0.56);
      const { h, slope } = evaluateStructureHeight(st, localZ);
      const slat = new THREE.Mesh(slatGeo, i % 2 === 0 ? slatMat : slatAltMat);
      slat.position.set(0, h + 0.005, localZ);
      slat.rotation.x = -Math.atan(slope);
      slat.castShadow = true;
      slat.receiveShadow = true;
      group.add(slat);
    }

    if (isElevatedWood) {
      const postSpacing = 3.2;
      const postCount = Math.max(2, Math.floor(st.length / postSpacing));
      for (let i = 0; i <= postCount; i++) {
        const localZ = -halfL + 0.4 + (i / Math.max(1, postCount)) * (st.length - 0.8);
        const h = evaluateStructureHeight(st, localZ).h;
        if (h > 0.35) {
          const postH = h + 1.4;
          const postGeo = new THREE.CylinderGeometry(0.11, 0.13, postH, 6);
          const pL = new THREE.Mesh(postGeo, postMat);
          pL.position.set(-halfW + 0.2, h - postH * 0.5 - 0.1, localZ);
          pL.castShadow = true;
          const pR = new THREE.Mesh(postGeo, postMat);
          pR.position.set(halfW - 0.2, h - postH * 0.5 - 0.1, localZ);
          pR.castShadow = true;
          group.add(pL, pR);
        }
      }
    }
  }

  // Launch lip indicator paint stripe (gives crystal-clear visual cue where to pop Bunny Hop!)
  if (st.kind === 'kicker' || st.kind === 'tabletop' || st.kind === 'drop') {
    const lipZ =
      st.kind === 'tabletop'
        ? -halfL + (st.rampInLength ?? st.length * 0.32) - 0.15
        : halfL - 0.18;
    const { h, slope } = evaluateStructureHeight(st, lipZ);
    const lipStripe = new THREE.Mesh(
      new THREE.BoxGeometry(st.width + 0.04, 0.04, 0.24),
      new THREE.MeshStandardMaterial({
        color: st.kind === 'drop' ? 0xf97316 : 0xa3e635,
        emissive: st.kind === 'drop' ? 0x7c2d12 : 0x365314,
        emissiveIntensity: 0.35,
        roughness: 0.4,
      })
    );
    lipStripe.position.set(0, h + 0.015, lipZ);
    lipStripe.rotation.x = -Math.atan(slope);
    group.add(lipStripe);
  }

  return group;
}
