import type { APIRoute } from 'astro';
import { buildRssXml } from '@/lib/content';

// Feed RSS del blog en el idioma por defecto (en): '/rss.xml'.
export const GET: APIRoute = async ({ site }) => {
	const xml = await buildRssXml('en', site!);
	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
