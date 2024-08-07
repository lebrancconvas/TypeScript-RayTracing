import type { Color } from '../libs';

export function draw(color: Color): string {
  const r = color.x;
  const g = color.y;
  const b = color.z;

  const ir = Math.floor(255.999 * r);
  const ig = Math.floor(255.999 * g);
  const ib = Math.floor(255.999 * b);

  return `${ir} ${ig} ${ib}\n`;

};
