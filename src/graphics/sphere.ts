import { Point, Ray } from "../libs";
import { add, dot, multiplyScalar } from "../libs/vector";

export function hitSphere(center: Point, radius: number, ray: Ray): boolean {
  const oc = add(center, multiplyScalar(ray.origin, -1));
  const a = dot(ray.direction, ray.direction);
  const b = dot(ray.direction, oc) * 2;
  const c = dot(oc, oc) - (radius * radius);
  const discriminant = (b*b) - (4*a*c);
  console.log('DISCRIMINANT:', discriminant);
  return discriminant >= 0;
};
