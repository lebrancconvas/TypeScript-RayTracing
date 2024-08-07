import { CONFIG } from './config';
import { Vector, Point, Ray, Color } from '../libs';
import { add, subtract, multiplyScalar, unit } from '../libs/vector';

export const ASPECT_RATIO = CONFIG.aspectRatio;
export const IMAGE_WIDTH = CONFIG.width;
export const IMAGE_HEIGHT = Math.floor(IMAGE_WIDTH / ASPECT_RATIO) < 1 ? 1 : Math.floor(IMAGE_WIDTH / ASPECT_RATIO);
export const VIEWPORT_HEIGHT = CONFIG.viewportHeight;
export const VIEWPORT_WIDTH = VIEWPORT_HEIGHT * (IMAGE_WIDTH / IMAGE_HEIGHT);
export const FOCAL_LENGTH = CONFIG.focalLength;
export const CAMERA_CENTER = new Point(0, 0, 0);
export const VIEWPORT_U = new Vector(VIEWPORT_WIDTH, 0, 0);
export const VIEWPORT_V = new Vector(0, -VIEWPORT_HEIGHT, 0);
export const PIXEL_DELTA_U = multiplyScalar(VIEWPORT_U, 1/IMAGE_WIDTH);
export const PIXEL_DELTA_V = multiplyScalar(VIEWPORT_V, 1/IMAGE_HEIGHT);
export const VIEWPORT_UPPER_LEFT = subtract(subtract(subtract(CAMERA_CENTER, new Vector(0, 0, FOCAL_LENGTH)), multiplyScalar(VIEWPORT_U, 0.5)), multiplyScalar(VIEWPORT_V, 0.5));
export const PIXEL00_LOC = add(VIEWPORT_UPPER_LEFT, multiplyScalar(add(PIXEL_DELTA_U, PIXEL_DELTA_V), 0.5));
export const COLOR = CONFIG.color;

