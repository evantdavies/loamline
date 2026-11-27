import * as THREE from 'three';
import { SurfaceType } from '../types';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  size: number;
  r: number;
  g: number;
  b: number;
}

export class ParticleSystem {
  public points: THREE.Points;
  private maxParticles = 320;
  private particles: Particle[] = [];
  private positions: Float32Array;
  private colors: Float32Array;
  private geometry: THREE.BufferGeometry;

  constructor() {
    this.positions = new Float32Array(this.maxParticles * 3);
    this.colors = new Float32Array(this.maxParticles * 3);
    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.24,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    this.points = new THREE.Points(this.geometry, mat);
    this.points.frustumCulled = false;
  }

  public emit(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    surface: SurfaceType | 'sparkle',
    count = 4
  ): void {
    const colorMap: Record<SurfaceType | 'sparkle', [number, number, number]> = {
      dirt: [0.62, 0.44, 0.28],
      mud: [0.28, 0.18, 0.1],
      wood: [0.76, 0.56, 0.34],
      rock: [0.62, 0.65, 0.68],
      metal: [0.75, 0.82, 0.9],
      grass: [0.36, 0.58, 0.25],
      concrete: [0.72, 0.74, 0.76],
      sparkle: [1.0, 0.88, 0.22],
    };
    const [r, g, b] = colorMap[surface] ?? [0.6, 0.45, 0.3];

    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) {
        this.particles.shift();
      }
      this.particles.push({
        x: x + (Math.random() - 0.5) * 0.28,
        y: y + Math.random() * 0.15,
        z: z + (Math.random() - 0.5) * 0.28,
        vx: vx + (Math.random() - 0.5) * 2.6,
        vy: vy + 1.2 + Math.random() * 2.8,
        vz: vz + (Math.random() - 0.5) * 2.6,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.45,
        size: 0.2,
        r,
        g,
        b,
      });
    }
  }

  public clear(): void {
    this.particles = [];
    this.geometry.setDrawRange(0, 0);
  }

  public update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }
      p.vy -= 9.5 * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.z += p.vz * dt;
    }

    const n = this.particles.length;
    for (let i = 0; i < n; i++) {
      const p = this.particles[i];
      const fade = 1 - p.life / p.maxLife;
      this.positions[i * 3] = p.x;
      this.positions[i * 3 + 1] = p.y;
      this.positions[i * 3 + 2] = p.z;
      this.colors[i * 3] = p.r * fade;
      this.colors[i * 3 + 1] = p.g * fade;
      this.colors[i * 3 + 2] = p.b * fade;
    }

    (this.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (this.geometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
    this.geometry.setDrawRange(0, n);
  }
}
