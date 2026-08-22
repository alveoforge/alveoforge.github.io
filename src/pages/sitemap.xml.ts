import type { APIRoute } from 'astro';
import { ONEPAGER_URL } from '@/consts';
import { locales, localePath, type SupportedLang } from '@/i18n/utils';
import { defaultLang } from '@/i18n/ui';
import { allPublishedPosts } from '@/lib/content';

// Sitemap generado en build a partir de Astro.site (= SITE_URL en consts.ts),
// así sigue al dominio automáticamente. La forma de las URLs sale de
// localePath() (src/i18n/utils.ts): el idioma por defecto va sin prefijo.
// - PAGES: rutas que existen en TODOS los idiomas → se emiten en cada idioma con hreflang.
// - POSTS: entradas del blog → una URL por idioma en el que EXISTE la entrada
//   (una entrada solo-ES no genera una URL EN fantasma), con hreflang entre los suyos.
// - STATIC: ficheros en public/ (PDF, etc.) → una sola URL, sin hreflang.
// Las redirecciones heredadas (/en/…) NO entran aquí a propósito.
const PAGES = ['/', '/blog/', '/changelog/', '/demos/', '/privacy/'];
const STATIC = [ONEPAGER_URL];

export const GET: APIRoute = async ({ site }) => {
	const abs = (path: string) => new URL(path, site!).href;

	const urlBlock = (path: string, langs: SupportedLang[]) => {
		const alts = langs
			.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(localePath(l, path))}"/>`)
			.join('\n');
		const xDefault = langs.includes(defaultLang)
			? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localePath(defaultLang, path))}"/>`
			: '';
		return (loc: SupportedLang) => `  <url>
    <loc>${abs(localePath(loc, path))}</loc>
${alts}${xDefault}
  </url>`;
	};

	const pageEntries = PAGES.flatMap((path) => locales.map((loc) => urlBlock(path, locales)(loc)));

	// Entradas del blog agrupadas por slug → idiomas en los que existe.
	const bySlug = new Map<string, SupportedLang[]>();
	for (const post of await allPublishedPosts()) {
		const slug = post.data.urlSlug;
		bySlug.set(slug, [...(bySlug.get(slug) ?? []), post.data.lang]);
	}
	const postEntries = [...bySlug.entries()].flatMap(([slug, langs]) =>
		langs.map((loc) => urlBlock(`/blog/${slug}/`, langs)(loc))
	);

	const staticEntries = STATIC.map((file) => `  <url>\n    <loc>${abs(file)}</loc>\n  </url>`);

	const entries = [...pageEntries, ...postEntries, ...staticEntries].join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
