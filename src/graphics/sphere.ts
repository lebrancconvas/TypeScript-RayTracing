import type { Point, Ray } from "../libs";
import { add, subtract, dot, multiplyScalar } from "../libs/vector";

export function hitSphere(center: Point, radius: number, ray: Ray): boolean {
  const oc = subtract(center, ray.origin);
  const a = dot(ray.direction, ray.direction);
  const b = dot(ray.direction, oc) * -2;
  const c = dot(oc, oc) - (radius * radius);
  const discriminant = (b*b) - (4*a*c);
  return discriminant >= 0;
};
