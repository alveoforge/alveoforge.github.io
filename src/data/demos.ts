// Demos en vivo — una fila por schema. Rellena las URLs a medida que despliegas
// cada instancia y cambia `status` a 'live'. Una URL vacía → ese enlace sale
// deshabilitado ("próximamente"), así la página se ve completa desde ya.
//
// El ORDEN de este array = el orden en que salen en la página. Añadir una demo
// = añadir un objeto aquí. Nada más que tocar.

export type DemoStatus = 'live' | 'soon';

export interface Demo {
	id: string;
	name: string;
	/** Etiqueta de tamaño para mostrar (p. ej. '~15', '1,000+'). Opcional. */
	tables?: string;
	status: DemoStatus;
	/** Resalta la tarjeta (borde ember). */
	featured?: boolean;
	desc: { en: string; es: string };

	// --- Enlaces (rellena los que existan; vacío = deshabilitado) ---
	video?: string; // vídeo de YouTube del run
	sql?: string; // .sql público de origen
	swagger?: string; // Swagger UI en vivo (subdominio)
	reports?: string; // índice de informes HTML de las baterías
	coverage?: string; // cobertura JaCoCo (HTML)
	allure?: string; // dashboard Allure + métricas
	raw?: string; // artefactos crudos de tests (zip: surefire/jacoco/allure-results)
	compose?: string; // docker-compose.yml (cómo se levanta — transparencia)
}

// "Cómo se levanta" (compose) queda NO clicable por ahora: el compose público es
// ilustrativo hasta el deploy real. Para reactivarlo cuando esté listo, añade
//   compose: '/docker-compose.demo.yml'
// a las demos que quieras (el fichero ya está en public/).

export const demos: Demo[] = [
	{
		id: 'reference',
		name: 'Reference demo',
		tables: '30+',
		status: 'soon',
		featured: true,
		desc: {
			en: "AlveoForge's canonical demo schema — the green baseline behind the walkthrough.",
			es: 'El schema de demo canónico de AlveoForge — la línea base verde del walkthrough.',
		},
	},
	{
		id: 'gitlab',
		name: 'GitLab',
		tables: '1,000+',
		status: 'soon',
		featured: true,
		desc: {
			en: "GitLab's public schema — extreme scale: 1,000+ tables in one modular monolith you explore from a single Swagger.",
			es: 'El schema público de GitLab — escala extrema: 1.000+ tablas en un monolito modular que exploras desde un solo Swagger.',
		},
	},
	{
		id: 'sakila',
		name: 'Sakila',
		tables: '15',
		status: 'soon',
		desc: {
			en: 'The classic sample DVD-rental schema — a compact, familiar model.',
			es: 'El clásico schema de alquiler de DVD — un modelo compacto y conocido.',
		},
	},
	{
		id: 'odoo',
		name: 'Odoo',
		tables: '150+',
		status: 'soon',
		desc: {
			en: 'Open-source ERP — a large, real-world, deliberately messy schema.',
			es: 'ERP open-source — un schema grande, real y a propósito enrevesado.',
		},
	},
	{
		id: 'jira',
		name: 'Jira',
		tables: '200+',
		status: 'soon',
		desc: {
			en: 'A large, real-world issue-tracking schema — 200+ tables of a mature SaaS domain.',
			es: 'Un schema real de gestión de incidencias, grande — 200+ tablas de un dominio SaaS maduro.',
		},
	},
];
