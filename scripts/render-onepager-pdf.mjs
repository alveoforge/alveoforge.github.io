// Regenera public/alveoforge-onepager.pdf a partir de public/alveoforge-onepager.html.
// La fuente EDITABLE es el HTML (maquetado con `@page A4 portrait`); este script lo
// imprime a PDF con Chrome/Edge en modo headless (misma salida que File → Print → Save as PDF).
//   Uso:  npm run pdf
// El binario se autodetecta; se puede forzar con la variable de entorno CHROME_BIN.
import { existsSync, statSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { tmpdir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'public/alveoforge-onepager.html');
const out = resolve(root, 'public/alveoforge-onepager.pdf');

if (!existsSync(src)) {
	console.error(`✗ No existe el HTML de origen: ${src}`);
	process.exit(1);
}

// Candidatos habituales de un navegador Chromium (Chrome o Edge) en Windows/macOS/Linux.
const candidates = [
	process.env.CHROME_BIN,
	'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
	'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
	'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium',
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
	console.error('✗ No se encontró Chrome ni Edge. Instala uno o define CHROME_BIN con la ruta al binario.');
	process.exit(1);
}

// Perfil temporal para no chocar con un navegador ya abierto.
const profile = mkdtempSync(join(tmpdir(), 'af-onepager-'));
try {
	const res = spawnSync(
		browser,
		[
			'--headless=new',
			'--disable-gpu',
			'--no-pdf-header-footer',
			`--user-data-dir=${profile}`,
			`--print-to-pdf=${out}`,
			pathToFileURL(src).href,
		],
		{ stdio: 'inherit' },
	);
	if (res.status !== 0 || !existsSync(out)) {
		console.error(`✗ El navegador no generó el PDF (código ${res.status}).`);
		process.exit(res.status || 1);
	}
} finally {
	rmSync(profile, { recursive: true, force: true });
}

const kb = (statSync(out).size / 1024).toFixed(0);
console.log(`✔ alveoforge-onepager.pdf regenerado desde el HTML (${kb} KB) → ${out}`);
console.log('  Revisa que sigue en 1 página A4 y que la capa de texto se copia limpia.');
