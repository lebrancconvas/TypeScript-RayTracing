import { writeFile } from 'fs/promises';
import path from 'path';


const outputDir = [__dirname, '..', '..', 'output'];

export async function writePPM(content: string) {
  const filePath  = path.join(...outputDir, 'image.ppm');

  try {
    await writeFile(filePath, content);
    console.log('Created Image Success!');
  } catch(error) {
    throw new Error(`Error on Created Image: ${error}`);
  }
};

export async function writeText(content: string) {
  const filePath  = path.join(...outputDir, 'image.txt');

  try {
    await writeFile(filePath, content);
    console.log('Created Log Text Success!');
  } catch(err) {
    throw new Error(`Error on Created Text: ${err}`);
  }
};
