import { Vector, add, multiplyScalar } from './vector';
import { Point } from './point';


export class Ray {
  origin: Point;
  direction: Vector;

  constructor(origin: Point, direction: Vector) {
    this.origin = origin;
    this.direction = direction;
  }
};

export function at(ray: Ray, t: number): Point {
  return add(ray.origin, multiplyScalar(ray.direction, t));
};
