import {
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  COLOR,
  PIXEL00_LOC,
  PIXEL_DELTA_U,
  PIXEL_DELTA_V,
  CAMERA_CENTER,
} from './config';

import { rayColor } from './graphics';

import { Vector, Point, Ray, Color } from './libs';
import { add, multiplyScalar, unit } from './libs/vector';

import { draw } from './utils';

import { writePPM, writeText } from './logs';

async function main() {
  try {
    let ppmOutput = `P3\n${IMAGE_WIDTH} ${IMAGE_HEIGHT}\n${COLOR}\n`;

    // Drawing Process.
    for(let j = 0; j < IMAGE_HEIGHT; j++) {
      for(let i = 0; i < IMAGE_WIDTH; i++) {
        const PIXEL_CENTER = add(PIXEL00_LOC, add(multiplyScalar(PIXEL_DELTA_U, i), multiplyScalar(PIXEL_DELTA_V, j)));
        const RAY_DIRECTION = add(PIXEL_CENTER, multiplyScalar(CAMERA_CENTER, -1));
        const RAY = new Ray(CAMERA_CENTER, RAY_DIRECTION);
        const pixel = rayColor(RAY);

        ppmOutput += draw(pixel);
      }
    }

    // Saving Files.
    await writePPM(ppmOutput);
    await writeText(ppmOutput);
  } catch(error) {
    throw new Error(`Error: ${error}`);
  }
};

main();

