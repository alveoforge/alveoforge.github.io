import { getCollection, type CollectionEntry } from 'astro:content';
import type { SupportedLang } from '@/i18n/utils';

/** Entradas de blog de un idioma, sin borradores, ordenadas por fecha (más nuevas primero). */
export async function blogPosts(lang: SupportedLang): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog', (p) => p.data.lang === lang && !p.data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Todas las entradas de blog publicadas (cualquier idioma) — para rutas estáticas. */
export async function allPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	return getCollection('blog', (p) => !p.data.draft);
}

/** Entradas de changelog de un idioma, más nuevas primero. */
export async function changelogEntries(lang: SupportedLang): Promise<CollectionEntry<'changelog'>[]> {
	const entries = await getCollection('changelog', (e) => e.data.lang === lang);
	return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Fecha legible por idioma. */
export function formatDate(date: Date, lang: SupportedLang): string {
	return date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

function escapeXml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

const RSS_META: Record<SupportedLang, { title: string; desc: string }> = {
	en: {
		title: 'AlveoForge — Notes',
		desc: 'Deep dives on architecture, determinism and backend generation.',
	},
	es: {
		title: 'AlveoForge — Notas',
		desc: 'Análisis sobre arquitectura, determinismo y generación de backends.',
	},
};

/** RSS 2.0 del blog para un idioma (hecho a mano, sin dependencia extra). */
export async function buildRssXml(lang: SupportedLang, site: URL): Promise<string> {
	const posts = await blogPosts(lang);
	const prefix = lang === 'en' ? '' : `/${lang}`;
	const abs = (p: string) => new URL(p, site).href;
	const items = posts
		.map((p) => {
			const url = abs(`${prefix}/blog/${p.data.urlSlug}/`);
			return `    <item>
      <title>${escapeXml(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${escapeXml(p.data.description)}</description>
    </item>`;
		})
		.join('\n');
	const meta = RSS_META[lang];
	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(meta.title)}</title>
    <link>${abs(`${prefix}/blog/`)}</link>
    <atom:link href="${abs(`${prefix}/rss.xml`)}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(meta.desc)}</description>
    <language>${lang}</language>
${items}
  </channel>
</rss>
`;
}
