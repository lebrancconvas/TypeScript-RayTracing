import type { Point, Ray } from "../libs";
import { subtract, dot } from "../libs/vector";

export function hitSphere(center: Point, radius: number, ray: Ray): number {
  const oc = subtract(center, ray.origin);
  const a = dot(ray.direction, ray.direction);
  const b = dot(ray.direction, oc) * -2;
  const c = dot(oc, oc) - (radius * radius);
  const discriminant = (b*b) - (4*a*c);

  if(discriminant < 0) {
    return -1;
  } else {
    return (-b - Math.sqrt(discriminant)) / (2*a);
  }
};
