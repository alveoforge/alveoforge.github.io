import type { APIRoute } from 'astro';
import { ONEPAGER_URL } from '@/consts';
import { locales, localePath } from '@/i18n/utils';
import { defaultLang } from '@/i18n/ui';

// Sitemap generado en build a partir de Astro.site (= SITE_URL en consts.ts),
// así sigue al dominio automáticamente. La forma de las URLs sale de
// localePath() (src/i18n/utils.ts): el idioma por defecto va sin prefijo.
// - PAGES: rutas sin locale → se emiten en cada idioma con hreflang.
// - STATIC: ficheros en public/ (PDF, etc.) → una sola URL, sin hreflang.
// Las redirecciones heredadas (/en/…) NO entran aquí a propósito.
const PAGES = ['/', '/privacy/'];
const STATIC = [ONEPAGER_URL];

export const GET: APIRoute = ({ site }) => {
	const abs = (path: string) => new URL(path, site!).href;

	const pageEntries = PAGES.flatMap((path) =>
		locales.map((loc) => {
			const alts = locales
				.map(
					(l) =>
						`    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(localePath(l, path))}"/>`
				)
				.join('\n');
			return `  <url>
    <loc>${abs(localePath(loc, path))}</loc>
${alts}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localePath(defaultLang, path))}"/>
  </url>`;
		})
	);

	const staticEntries = STATIC.map(
		(file) => `  <url>
    <loc>${abs(file)}</loc>
  </url>`
	);

	const entries = [...pageEntries, ...staticEntries].join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
