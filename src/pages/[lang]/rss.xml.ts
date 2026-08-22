import type { APIRoute } from 'astro';
import { buildRssXml } from '@/lib/content';
import { prefixedLocales, type SupportedLang } from '@/i18n/utils';

// Feed RSS del blog en los idiomas con prefijo: '/es/rss.xml'.
export function getStaticPaths() {
	return prefixedLocales.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async ({ site, params }) => {
	const xml = await buildRssXml(params.lang as SupportedLang, site!);
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
