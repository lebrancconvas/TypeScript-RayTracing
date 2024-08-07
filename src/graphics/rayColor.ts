import { Point, Ray, Color } from '../libs';
import { add, multiplyScalar, unit } from '../libs/vector';
import { hitSphere } from './sphere';

export function rayColor(ray: Ray): Color {
  if(hitSphere(new Point(0, 0, -1), 0.5, ray)) {
    console.log('HIT SPHERE!');
    return new Color(1, 0, 0);
  }

  const unitDirection = unit(ray.direction);
  const a = 0.5 * (unitDirection.y + 1);
  return add(multiplyScalar(new Color(1, 1, 1), 1-a), multiplyScalar(new Color(0.5, 0.7, 1), a));

};
