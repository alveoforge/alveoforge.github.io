// Genera todos los favicons a partir de public/favicon.svg (la única fuente).
// Salidas en public/:
//   - favicon.ico          → ICO multi-tamaño (16/32/48) para Google y navegadores antiguos
//   - favicon-96x96.png    → fallback PNG explícito
//   - apple-touch-icon.png → 180x180 sobre fondo blanco (iOS / marcadores)
// El SVG se mantiene para navegadores modernos (pestaña nítida).
//
// Regenerar tras tocar el logo:  npm run favicons
//
// Nota: sharp no sabe escribir .ico, así que empaquetamos los PNG en un ICO
// a mano (ICO con PNG embebido, soportado por todos los navegadores actuales
// y por el rastreador de favicons de Google). Cero dependencias extra.

import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const publicDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

/** PNG cuadrado y nítido del logo al tamaño pedido. `bg` opaco = aplana el alfa. */
const png = (size, bg) => {
	const base = sharp(svg, { density: 900 }).resize(size, size, {
		fit: 'contain',
		background: bg ?? { r: 0, g: 0, b: 0, alpha: 0 },
	});
	return (bg ? base.flatten({ background: bg }) : base).png().toBuffer();
};

/** Empaqueta varios PNG cuadrados en un único fichero .ico (PNG embebido). */
function buildIco(images) {
	const header = Buffer.alloc(6);
	header.writeUInt16LE(0, 0); // reservado
	header.writeUInt16LE(1, 2); // tipo = icono
	header.writeUInt16LE(images.length, 4);

	const dir = Buffer.alloc(16 * images.length);
	let offset = 6 + dir.length;
	images.forEach(({ size, buffer }, i) => {
		const e = dir.subarray(i * 16, i * 16 + 16);
		e.writeUInt8(size >= 256 ? 0 : size, 0); // ancho (0 = 256)
		e.writeUInt8(size >= 256 ? 0 : size, 1); // alto
		e.writeUInt8(0, 2); // colores de paleta
		e.writeUInt8(0, 3); // reservado
		e.writeUInt16LE(1, 4); // planos
		e.writeUInt16LE(32, 6); // bits por píxel
		e.writeUInt32LE(buffer.length, 8); // tamaño de la imagen
		e.writeUInt32LE(offset, 12); // desplazamiento
		offset += buffer.length;
	});

	return Buffer.concat([header, dir, ...images.map((i) => i.buffer)]);
}

const white = { r: 255, g: 255, b: 255, alpha: 1 };
const [i16, i32, i48, i96, appleTouch] = await Promise.all([
	png(16),
	png(32),
	png(48),
	png(96),
	png(180, white),
]);

writeFileSync(join(publicDir, 'favicon.ico'), buildIco([
	{ size: 16, buffer: i16 },
	{ size: 32, buffer: i32 },
	{ size: 48, buffer: i48 },
]));
writeFileSync(join(publicDir, 'favicon-96x96.png'), i96);
writeFileSync(join(publicDir, 'apple-touch-icon.png'), appleTouch);

console.log('Favicons generados: favicon.ico (16/32/48), favicon-96x96.png, apple-touch-icon.png');
