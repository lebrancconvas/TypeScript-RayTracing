export class Vector {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
};

export function add(v1: Vector, v2: Vector): Vector {
  return new Vector(
    v1.x + v2.x,
    v1.y + v2.y,
    v1.z + v2.z
  );
};

export function multiplyScalar(v: Vector, t: number): Vector {
  return new Vector(
    v.x * t,
    v.y * t,
    v.z * t
  );
};

export function multiplyVector(v1: Vector, v2: Vector): Vector {
  return new Vector(
    v1.x * v2.x,
    v1.y * v2.y,
    v1.z * v2.z
  );
};

export function len(v: Vector): number {
  return Math.sqrt((v.x * v.x) + (v.y * v.y) + (v.z * v.z));
};

export function len_squard(v: Vector): number {
  return (v.x * v.x) + (v.y * v.y) + (v.z * v.z);
};

export function dot(v1: Vector, v2: Vector): number {
  return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
};

export function cross(v1: Vector, v2: Vector): Vector {
  return new Vector(
    (v1.y * v2.z) - (v1.z * v2.y),
    (v1.z * v2.x) - (v1.x * v2.z),
    (v1.x * v2.y) - (v1.y * v2.x)
  );
};

export function unit(v: Vector): Vector {
  return multiplyScalar(v, 1 / len(v));
};
