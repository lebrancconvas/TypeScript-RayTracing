import { Vector, Point, Ray, Color } from '../libs';
import { add, subtract, multiplyScalar, unit } from '../libs/vector';
import { at } from '../libs/ray';
import { hitSphere } from './sphere';

export function rayColor(ray: Ray): Color {
  const t = hitSphere(new Point(0, 0, -1), 0.5, ray);

  if(t > 0) {
    const N = unit(subtract(at(ray, t), new Vector(0, 0, -1)));
    return multiplyScalar(new Color(N.x + 1, N.y + 1, N.z + 1), 0.5);
  }

  const unitDirection = unit(ray.direction);
  const a = 0.5 * (unitDirection.y + 1);
  return add(multiplyScalar(new Color(1, 1, 1), 1-a), multiplyScalar(new Color(0.5, 0.7, 1), a));

};
