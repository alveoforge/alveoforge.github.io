import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

// Blog y changelog viven como content collections en Markdown: escribir una
// entrada = crear un .md con esta cabecera. El idioma va por-fichero (una
// entrada puede existir solo en un idioma), y el slug se deriva del nombre del
// fichero sin el sufijo de idioma (introducing-alveoforge.en.md → slug
// "introducing-alveoforge"), de modo que EN y ES comparten URL slug.

const langEnum = z.enum(['en', 'es']);

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lang: langEnum,
		/**
		 * Slug de URL, compartido entre idiomas (/blog/<urlSlug>/ y /es/blog/<urlSlug>/).
		 * NO se llama `slug`: en el glob loader ese nombre es reservado y se usaría como
		 * `id`, colisionando entre los ficheros .en y .es del mismo post.
		 */
		urlSlug: z.string(),
		/**
		 * Fecha de publicación — DETERMINA EL ORDEN en el índice y el RSS (más nueva
		 * primero). Admite fecha (2026-09-01) u hora completa (2026-09-01T14:30:00) para
		 * ordenar con precisión dentro del mismo día. Para colar un post entre otros dos,
		 * basta darle una fecha/hora intermedia: no hay que tocar los demás.
		 */
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		/** Ruta OG opcional (por defecto la de la landing, /og.png). */
		ogImage: z.string().optional(),
	}),
});

const changelog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
	schema: z.object({
		version: z.string(),
		date: z.coerce.date(),
		lang: langEnum,
		title: z.string().optional(),
	}),
});

export const collections = { blog, changelog };
