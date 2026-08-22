// Regenera public/og.png a partir de public/og.svg (tarjeta social OpenGraph).
// La fuente EDITABLE es el SVG; este script solo lo rasteriza a 1200×630.
//   Uso:  npm run og
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'public/og.svg');
const out = resolve(root, 'public/og.png');

await sharp(readFileSync(src), { density: 144 })
	.resize(1200, 630, { fit: 'fill' })
	.png()
	.toFile(out);

console.log(`✔ og.png regenerado desde og.svg → ${out}`);
