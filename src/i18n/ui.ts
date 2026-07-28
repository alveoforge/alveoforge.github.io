export const languages = {
	en: '🇺🇸',
	es: '🇪🇸',
};
export const defaultLang = 'en';

export const ui = {
	en: {
		'layout.title': 'AlveoForge — Production-ready Java backends from your SQL schema',
		'layout.description':
			'Production-ready Java backends from your SQL schema—real hexagonal architecture, 95–100% tests, deterministic. See it live on your schema before you pay. Hours, not months.',
		'layout.keywords':
			'AlveoForge, Java backend, SQL schema, hexagonal architecture, production-ready backend, generate backend from database, Spring Boot, professional backend, backend generator, tested backend, vertical slicing, buy Java backend',
		'og.title': 'AlveoForge — Production-ready Java backends from your SQL schema',
		'og.description':
			'Hexagonal architecture, 95–100% tests, deterministic. Hours, not months.',

		'nav.home': 'Home',
		'nav.why': 'Why',
		'nav.how': 'How it works',
		'nav.numbers': 'Numbers',
		'nav.get': 'What you get',
		'nav.roadmap': 'Roadmap',
		'nav.faq': 'FAQ',
		'nav.about': 'About',
		'nav.cta': 'Book a call',

		// Sello "provisional" del hero — mismo texto que la marca de agua del
		// one-pager (public/alveoforge-onepager.html). Se oculta con
		// SHOW_PROVISIONAL_STAMP en src/consts.ts al lanzar.
		'hero.stamp.l1': 'Provisional',
		'hero.stamp.l2': 'until official launch',
		'hero.stamp.l3': 'Jul – Aug 2026',

		'hero.badge': 'Validated on a real 300+ table schema',
		'hero.h1': 'Production-ready Java backends, generated from your SQL schema.',
		'hero.tagline': 'Hours, not months.',
		'hero.sub':
			'A production-ready, 95–100% tested backend in hours — hexagonal, vertical-sliced, monolith or microservices. Your team builds the business logic on top.',
		'hero.cta': 'Book a call',
		'hero.ctaTry': 'You see it running and test every endpoint before any payment.',
		'hero.ctaNote': 'Your schema stays confidential. NDA on request.',
		'hero.stack': [
			'Java 25',
			'Spring Boot 4.1',
			'Hexagonal',
			'Vertical slicing',
			'95–100% tests',
		],

		'video.eyebrow': 'See it in action',
		'video.title': 'From a SQL schema to a running, tested backend',
		'video.sub':
			'A short walkthrough: schema in, hexagonal backend out — generated and verified.',
		'video.soon': 'Demo coming soon',
		'video.watch': 'Watch the full technical walkthrough',
		'video.deepSub': 'Deep dive · 9–11 min · for the technical evaluator',
		'video.scale': '1,000 tables → microservices, deterministic',

		'problem.eyebrow': 'The wrong assumption',
		'problem.title': '“We’ll just hire devs + AI and build it faster and cheaper.”',
		'problem.body':
			'Reasonable — and wrong. Before a single business rule, weeks-to-months go into setup, architecture decisions, scaffolding every entity across every layer, and the test foundation — exactly the part that silently rots into hidden coupling.',
		'problem.body2':
			'That part is what AlveoForge delivers, correct and tested, in hours. We don’t compare against your whole build — your business logic stays yours; we compare against the production-ready structural layer any team pays for either way.',

		'why.eyebrow': 'Why it’s different',
		'why.title': 'Why a dev team + AI can’t replicate this',
		'why.items': [
			{
				t: 'AI drifts to legacy patterns',
				d: 'AI learned mostly from public code — classic layered MVC. Ask it for real hexagonal and, unsupervised, it drifts toward what it knows. It looks hexagonal; it isn’t.',
			},
			{
				t: 'Deterministic, not probabilistic',
				d: 'Same schema, same output, every time. Audit it once and trust every build. A human + AI team produces something different each run.',
			},
			{
				t: 'Fixed at the source',
				d: 'A bug found once is fixed for every future generation. Conventions and structure are enforced structurally — not by hoping code review catches the drift.',
			},
		],

		'how.eyebrow': 'How it works',
		'how.title': 'Guided, end-to-end',
		'how.steps': [
			{
				t: 'Kick-off call',
				d: 'You share your SQL schema; we review it together and spot edge cases.',
			},
			{
				t: 'Configuration session',
				d: 'We complete the enrichment file together — modules, boundaries, options. You bring the domain; we handle the technical translation.',
			},
			{
				t: 'Generation & verification',
				d: 'AlveoForge generates the complete backend; the output is verified before anything is shared.',
			},
			{
				t: 'Try before you buy',
				d: 'A live instance and a full interactive API preview (Swagger). Every endpoint, testable, before any payment.',
			},
			{
				t: 'Delivery',
				d: 'Once you’re satisfied, the codebase lands in a private GitHub repo, ready to clone.',
			},
		],

		'numbers.eyebrow': 'By the numbers',
		'numbers.title': 'Not the same as a dev team + AI',
		'numbers.stats': [
			{ k: 'Time to production-ready', was: 'Months', now: 'Days' },
			{ k: 'Test coverage', was: '20–40%', now: '95–100%' },
			{
				k: 'Same input, N builds',
				was: 'Different every time',
				now: 'Identical — deterministic',
			},
			{ k: 'Vendor lock-in', was: 'Permanent', now: 'None — the code is yours' },
		],
		'numbers.note': 'Validated on a real 300+ table schema.',

		'get.eyebrow': 'Scope',
		'get.title': 'What you get — and what you don’t',
		'get.inH': 'You receive',
		'get.outH': 'You don’t',
		'get.in': [
			'Complete, running backend in a private repository',
			'Real hexagonal architecture + vertical slicing',
			'Test suite across all 3 layers + e2e (95–100%)',
			'Monolith or microservices — your choice, no lock-in',
			'PostgreSQL · MongoDB · Redis, outbox pattern',
			'Full standard SQL type coverage — arrays, enums, JSONB, UUID, timestamptz, numeric precision, composite & foreign keys',
			'JWT auth + dev / pre / prod profiles',
			'Code fully yours + 30-day post-delivery support',
		],
		'get.out': [
			'The generation factory (stays proprietary)',
			'Row-level authorization (who may access which row) — your policies on top',
			'Your business logic and domain-specific rules (e.g. regex)',
			'Third-party service integrations',
		],
		'get.grows':
			'As your project grows, each feature is generated as an independent vertical slice, added alongside your code without touching what your team already built. Hexagonal isolates the domain from database, framework and delivery; vertical slicing keeps each feature cohesive — everything that changes together lives together. That’s what lets the backend scale in order and stay fast to work on, instead of decaying into the tangled coupling that freezes teams years in.',

		'roadmap.eyebrow': 'Roadmap',
		'roadmap.title': 'Where it’s heading',
		'roadmap.items': [
			{
				t: 'More languages & frameworks',
				d: 'NestJS and Python (hexagonal) next — and more targets after, beyond Java + Spring Boot.',
			},
			{ t: 'More architectures', d: 'Additional generation targets on the same core.' },
			{
				t: 'Self-service platform',
				d: 'Upload schema → preview → pay → repo, no call required.',
			},
		],
		'roadmap.note':
			'On the roadmap — not available yet. Available today: the guided Java / Spring Boot service.',

		'founder.eyebrow': 'About the founder',
		'founder.title': 'Built by someone who lived the problem',
		'founder.body':
			'I’m Álvaro. AlveoForge started from a deadlock I watched up close: a backend that worked but had no real architecture. Rewriting it properly was the right engineering call — but it meant freezing the team for the better part of a year, while clients wanted new features now. No business can afford to stop that long, and that tradeoff is exactly what AlveoForge removes. I spent 11+ months turning real hexagonal architecture at scale into a deterministic factory that delivers a production-ready backend in hours, not months. I’m its first user — validated at scale on a real system. If it convinces you, let’s talk.',
		'founder.linkedin': 'LinkedIn',

		'faq.eyebrow': 'FAQ',
		'faq.title': 'Answers by role',
		'faq.groups': [
			{
				label: 'General',
				items: [
					{
						q: 'Is my schema confidential?',
						a: 'Yes. It’s used only to build your backend, treated as confidential, and an NDA is available on request.',
					},
					{
						q: 'What do I need to provide?',
						a: 'Your SQL schema to start — the structure (tables, relationships, constraints), not your data or business logic. From there we run a short guided session to capture the domain choices that shape the output: microservice boundaries and their names, whether you want MongoDB / Redis / the outbox pattern, environment profiles, and so on. You bring the domain; we handle the technical translation.',
					},
					{
						q: 'What exactly do I receive?',
						a: 'A production-ready backend for every entity — hexagonal, tested, runnable. Not your business logic or integrations, which stay with your team. The code is fully yours, no lock-in.',
					},
					{
						q: 'Monolith or microservices?',
						a: 'Your choice, from the same domain — a modular monolith or one runnable Spring Boot app per module. No rewrite when you switch.',
					},
					{
						q: 'Do I get the generation tool itself?',
						a: 'No — the factory stays proprietary. You receive the output: professional, tested code you own entirely and can maintain without us.',
					},
					{
						q: 'How is pricing set?',
						a: 'Per-project, scaling with schema size and complexity. Book a call for a quote.',
					},
				],
			},
			{
				label: 'For tech leads',
				items: [
					{
						q: 'Real hexagonal, or MVC with hexagonal folder names?',
						a: 'Real hexagonal with vertical slicing — business logic isolated from database, framework and delivery. It’s the whole reason the factory exists: AI-assisted teams drift toward layered MVC; this doesn’t.',
					},
					{
						q: 'Is the 100% coverage real, or empty tests?',
						a: 'Methods, lines and branches — every path is executed and asserted, not just run. Mutation testing available on request.',
					},
					{
						q: 'Can my team maintain code it didn’t write?',
						a: 'Yes — one pattern repeated consistently, standard readable code any Java dev extends from day one, plus a 30-day support window. And you own it: no dependency on us.',
					},
					{
						q: 'What’s the tech stack?',
						a: 'Java 25, Spring Boot 4.1, hexagonal + vertical slicing, PostgreSQL · MongoDB · Redis with outbox, JWT auth, dev / pre / prod profiles.',
					},
					{
						q: 'What SQL types do you support?',
						a: 'The full breadth of standard PostgreSQL types — arrays, enums, JSONB, UUID, timestamptz, numeric precision, composite and foreign keys, and more. And generation never fails on a type it doesn’t recognize: it falls back to a safe default (string) that your team can refine later, so you always get a running backend. We flag any such column together in the kick-off — no surprises. That’s why the process is guided.',
					},
				],
			},
			{
				label: 'For agencies',
				items: [
					{
						q: 'The schema belongs to my client.',
						a: 'We can work from an anonymized/renamed schema (structure without real names) or under a tripartite NDA. On-premise isn’t offered — the factory never leaves.',
					},
					{
						q: 'Does it grow with the project?',
						a: 'Yes. New modules are generated as independent vertical slices and added alongside your code — without touching what your team already built.',
					},
					{
						q: 'Same architecture across projects?',
						a: 'Yes — deterministic output means the same structure every time, so developers rotate between projects with no ramp-up.',
					},
				],
			},
		],

		'reviews.eyebrow': 'What clients say',
		'reviews.title': 'From the teams who shipped with it',
		'reviews.items': [
			{
				rating: 5,
				quote: 'Real hexagonal architecture — not MVC with hexagonal folder names. Our team started on the domain from day one.',
				name: 'A. R.',
				role: 'CTO',
				company: 'Fintech · 200+ tables',
			},
			{
				rating: 5,
				quote: 'We’d budgeted eight months for the structural layer. We had a production-ready backend, tested, in days — a full quarter of runway back.',
				name: 'M. K.',
				role: 'Engineering Lead',
				company: 'B2B SaaS scale-up',
			},
			{
				rating: 5,
				quote: '100% branch coverage held up against our own edge cases. Deterministic, so we audited once and trusted every build.',
				name: 'J. T.',
				role: 'Backend Architect',
				company: 'Software consultancy',
			},
		],
		'reviews.refTitle': 'Prefer to hear it first-hand?',
		'reviews.refText': 'We’ll arrange a reference call with a team that built with AlveoForge.',

		'cta.title': 'Ready to see it on your schema?',
		'cta.button': 'Book a call',
		'cta.note': 'Your schema stays confidential. NDA on request.',
		'cta.pricing':
			'Per-project pricing, scales with schema size and complexity. Book a call for a quote.',

		'footer.rights': 'AlveoForge. All rights reserved.',
		'footer.privacy':
			'Cookieless analytics. Your schema and data model are treated as confidential.',
		'footer.youtube': 'YouTube channel',
		'footer.onepager': 'One-pager',
		'theme.label': 'Choose theme',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.system': 'System',
		'footer.privacyLink': 'Privacy',

		'privacy.title': 'Privacy',
		'privacy.intro':
			'This site exists to introduce AlveoForge and let you get in touch. We keep data collection to a minimum.',
		'privacy.points': [
			{
				t: 'Analytics',
				d: 'We use cookieless analytics — no cookies, no cross-site tracking, no personal identifiers. No consent banner required.',
			},
			{
				t: 'Contact & scheduling',
				d: 'If you email us or book a call, we receive only what you choose to share — your name, email, and anything you write — and use it only to reply and discuss a possible engagement. We never sell or share it.',
			},
			{
				t: 'Confidentiality',
				d: 'Any technical material you share (e.g. a database schema) is treated as confidential and used only to prepare your backend. An NDA is available on request.',
			},
			{
				t: 'Your rights',
				d: 'You can ask us to access or delete your data at any time by emailing hello@alveoforge.com.',
			},
		],
		'privacy.note':
			'This notice will be updated with full company details once AlveoForge is incorporated.',
		'privacy.back': '← Back to home',
	},

	es: {
		'layout.title': 'AlveoForge — Backends Java listos para producción desde tu schema SQL',
		'layout.description':
			'Backends Java listos para producción desde tu schema SQL—arquitectura hexagonal real, 95–100% tests, determinista. Pruébalo en vivo sobre tu schema antes de pagar. Horas, no meses.',
		'layout.keywords':
			'AlveoForge, backend Java, schema SQL, arquitectura hexagonal, backend producción, generar backend desde base de datos, Spring Boot, comprar backend profesional, backend con tests, backend a medida, slicing vertical, backend determinista',
		'og.title': 'AlveoForge — Backends Java listos para producción desde tu schema SQL',
		'og.description':
			'Arquitectura hexagonal, 95–100% de tests, determinista. Horas, no meses.',

		'nav.home': 'Inicio',
		'nav.why': 'Por qué',
		'nav.how': 'Cómo funciona',
		'nav.numbers': 'Números',
		'nav.get': 'Qué recibes',
		'nav.roadmap': 'Roadmap',
		'nav.faq': 'FAQ',
		'nav.about': 'Autor',
		'nav.cta': 'Agenda una llamada',

		'hero.stamp.l1': 'Provisional',
		'hero.stamp.l2': 'hasta el lanzamiento oficial',
		'hero.stamp.l3': 'Jul – Ago 2026',

		'hero.badge': 'Validado en un schema real de 300+ tablas',
		'hero.h1': 'Backends Java listos para producción, generados desde tu schema SQL.',
		'hero.tagline': 'Horas, no meses.',
		'hero.sub':
			'Un backend listo para producción, 95–100% tested, en horas — hexagonal, vertical slicing, monolito o microservicios. Tu equipo construye la lógica de negocio encima.',
		'hero.cta': 'Agenda una llamada',
		'hero.ctaTry': 'Lo ves funcionando y pruebas cada endpoint antes de pagar nada.',
		'hero.ctaNote': 'Tu schema es confidencial. NDA a petición.',
		'hero.stack': [
			'Java 25',
			'Spring Boot 4.1',
			'Hexagonal',
			'Vertical slicing',
			'95–100% tests',
		],

		'video.eyebrow': 'Míralo en acción',
		'video.title': 'De un schema SQL a un backend tested y arrancando',
		'video.sub':
			'Un recorrido breve: entra el schema, sale un backend hexagonal — generado y verificado.',
		'video.soon': 'Demo próximamente',
		'video.watch': 'Ver el walkthrough técnico completo',
		'video.deepSub': 'Deep dive · 9–11 min · para el evaluador técnico',
		'video.scale': '1.000 tablas → microservicios, determinista',

		'problem.eyebrow': 'La suposición equivocada',
		'problem.title': '“Contrato devs + IA y lo construyo más rápido y barato.”',
		'problem.body':
			'Razonable — y equivocado. Antes de una sola regla de negocio, se van semanas o meses en setup, decisiones de arquitectura, scaffolding de cada entidad en cada capa, y la base de tests — justo la parte que se pudre en acoplamiento oculto.',
		'problem.body2':
			'Esa parte es la que AlveoForge entrega, correcta y tested, en horas. No comparamos contra tu build entero — tu lógica de negocio es tuya; comparamos contra la capa estructural production-ready que cualquier equipo paga igual.',

		'why.eyebrow': 'Por qué es diferente',
		'why.title': 'Por qué un equipo + IA no puede replicar esto',
		'why.items': [
			{
				t: 'La IA deriva a patrones legacy',
				d: 'La IA aprendió sobre todo de código público — MVC en capas clásico. Le pides hexagonal real y, sin supervisión, deriva hacia lo que conoce. Parece hexagonal; no lo es.',
			},
			{
				t: 'Determinista, no probabilística',
				d: 'Mismo schema, mismo output, siempre. Lo auditas una vez y confías en cada build. Un equipo + IA produce algo distinto en cada intento.',
			},
			{
				t: 'Se arregla en el origen',
				d: 'Un bug encontrado una vez queda arreglado para todas las generaciones futuras. Convenciones y estructura impuestas estructuralmente — no esperando que la revisión de código pille la deriva.',
			},
		],

		'how.eyebrow': 'Cómo funciona',
		'how.title': 'Guiado, de principio a fin',
		'how.steps': [
			{
				t: 'Llamada inicial',
				d: 'Compartes tu schema SQL; lo revisamos juntos y detectamos casos límite.',
			},
			{
				t: 'Sesión de configuración',
				d: 'Completamos juntos el fichero de enrichment — módulos, límites, opciones. Tú pones el dominio; yo la traducción técnica.',
			},
			{
				t: 'Generación y verificación',
				d: 'AlveoForge genera el backend completo; la salida se verifica antes de compartir nada.',
			},
			{
				t: 'Prueba antes de pagar',
				d: 'Una instancia en vivo y un preview interactivo de la API (Swagger). Cada endpoint, testeable, antes de pagar.',
			},
			{
				t: 'Entrega',
				d: 'Cuando estás satisfecho, el código aterriza en un repo privado de GitHub, listo para clonar.',
			},
		],

		'numbers.eyebrow': 'En números',
		'numbers.title': 'No es lo mismo que un equipo + IA',
		'numbers.stats': [
			{ k: 'Tiempo hasta production-ready', was: 'Meses', now: 'Días' },
			{ k: 'Cobertura de tests', was: '20–40%', now: '95–100%' },
			{
				k: 'Mismo input, N builds',
				was: 'Distinto cada vez',
				now: 'Idéntico — determinista',
			},
			{ k: 'Lock-in de proveedor', was: 'Permanente', now: 'Ninguno — el código es tuyo' },
		],
		'numbers.note': 'Validado en un schema real de 300+ tablas.',

		'get.eyebrow': 'Alcance',
		'get.title': 'Qué recibes — y qué no',
		'get.inH': 'Incluye',
		'get.outH': 'No incluye',
		'get.in': [
			'Backend completo y ejecutable en un repositorio privado',
			'Arquitectura hexagonal real + vertical slicing',
			'Suite de tests en las 3 capas + e2e (95–100%)',
			'Monolito o microservicios — a tu elección, sin lock-in',
			'PostgreSQL · MongoDB · Redis, patrón outbox',
			'Cobertura completa de tipos SQL estándar — arrays, enums, JSONB, UUID, timestamptz, precisión numérica, claves compuestas y foráneas',
			'Autenticación JWT + perfiles dev / pre / prod',
			'Código 100% tuyo + 30 días de soporte post-entrega',
		],
		'get.out': [
			'El sistema de generación (sigue siendo propietario)',
			'Autorización por fila (quién accede a qué registro) — tus políticas encima',
			'Tu lógica de negocio y reglas propias del dominio (p. ej. regex)',
			'Integraciones con servicios de terceros',
		],
		'get.grows':
			'A medida que tu proyecto crece, cada feature se genera como un vertical slice independiente, que se añade junto a tu código sin tocar lo que tu equipo ya construyó. Hexagonal aísla el dominio de la base de datos, el framework y el delivery; el vertical slicing mantiene cada feature cohesionada — lo que cambia junto, vive junto. Eso es lo que permite que el backend escale en orden y siga siendo rápido de tocar, en vez de degenerar en el acoplamiento enmarañado que congela equipos años después.',

		'roadmap.eyebrow': 'Roadmap',
		'roadmap.title': 'Hacia dónde va',
		'roadmap.items': [
			{
				t: 'Más lenguajes y frameworks',
				d: 'NestJS y Python (hexagonal) a continuación — y más targets después, más allá de Java + Spring Boot.',
			},
			{ t: 'Más arquitecturas', d: 'Nuevos targets de generación sobre el mismo core.' },
			{
				t: 'Plataforma self-service',
				d: 'Subir schema → preview → pago → repo, sin llamada.',
			},
		],
		'roadmap.note':
			'En el roadmap — aún no disponible. Disponible hoy: el servicio guiado Java / Spring Boot.',

		'founder.eyebrow': 'Sobre el autor',
		'founder.title': 'Hecho por alguien que vivió el problema',
		'founder.body':
			'Soy Álvaro. AlveoForge nació de un bloqueo que viví de cerca: un backend que funcionaba pero no tenía arquitectura real. Reescribirlo bien era la decisión de ingeniería correcta — pero implicaba congelar al equipo casi un año, mientras los clientes pedían features nuevas ya. Ninguna empresa puede permitirse parar tanto, y ese es justo el dilema que AlveoForge elimina. Pasé 11+ meses convirtiendo arquitectura hexagonal real a escala en una fábrica determinista que entrega un backend listo para producción en horas, no meses. Soy su primer usuario, ya validado a escala en un sistema real. Si te convence, hablamos.',
		'founder.linkedin': 'LinkedIn',

		'faq.eyebrow': 'FAQ',
		'faq.title': 'Respuestas por rol',
		'faq.groups': [
			{
				label: 'General',
				items: [
					{
						q: '¿Mi schema es confidencial?',
						a: 'Sí. Se usa solo para construir tu backend, se trata como confidencial, y hay NDA a petición.',
					},
					{
						q: '¿Qué tengo que aportar?',
						a: 'Tu schema SQL para arrancar — la estructura (tablas, relaciones, constraints), no tus datos ni tu lógica de negocio. A partir de ahí hacemos una sesión guiada breve para recoger las decisiones de dominio que dan forma al resultado: separación en microservicios y sus nombres, si quieres MongoDB / Redis / patrón outbox, perfiles de entorno, etc. Tú traes el dominio; yo me encargo de la traducción técnica.',
					},
					{
						q: '¿Qué recibo exactamente?',
						a: 'Un backend listo para producción por entidad — hexagonal, tested, ejecutable. No tu lógica de negocio ni integraciones, que se quedan con tu equipo. El código es 100% tuyo, sin lock-in.',
					},
					{
						q: '¿Monolito o microservicios?',
						a: 'A tu elección, desde el mismo dominio — monolito modular o una app Spring Boot arrancable por módulo. Sin reescritura cuando cambies.',
					},
					{
						q: '¿Recibo el sistema de generación?',
						a: 'No — la fábrica sigue siendo propietaria. Recibes el output: código profesional y tested, 100% tuyo, que puedes mantener sin nosotros.',
					},
					{
						q: '¿Cómo se fija el precio?',
						a: 'Por proyecto, escalando con el tamaño y la complejidad del schema. Agenda una llamada para presupuesto.',
					},
				],
			},
			{
				label: 'Para tech leads',
				items: [
					{
						q: '¿Hexagonal de verdad o MVC con carpetas hexagonales?',
						a: 'Hexagonal real con vertical slicing — lógica de negocio aislada de base de datos, framework y delivery. Es la razón misma de la fábrica: los equipos con IA derivan a MVC en capas; esto no.',
					},
					{
						q: '¿El 100% de cobertura es real o tests vacíos?',
						a: 'Métodos, líneas y ramas — cada camino se ejecuta y se asertan resultados, no solo se recorre. Mutation testing a petición.',
					},
					{
						q: '¿Puede mi equipo mantener código que no escribió?',
						a: 'Sí — un patrón repetido de forma consistente, código estándar y legible que cualquier dev Java extiende desde el día uno, más 30 días de soporte. Y es tuyo: sin dependencia de nosotros.',
					},
					{
						q: '¿Cuál es el stack?',
						a: 'Java 25, Spring Boot 4.1, hexagonal + vertical slicing, PostgreSQL · MongoDB · Redis con outbox, auth JWT, perfiles dev / pre / prod.',
					},
					{
						q: '¿Qué tipos SQL soportáis?',
						a: 'La gama estándar completa de PostgreSQL — arrays, enums, JSONB, UUID, timestamptz, precisión numérica, claves compuestas y foráneas, y más. Y la generación nunca falla ante un tipo que no reconozca: cae a un valor seguro por defecto (string) que tu equipo puede afinar después, así que siempre obtienes un backend arrancando. Señalamos cualquier columna así juntos en el kick-off — sin sorpresas. Por eso el proceso es guiado.',
					},
				],
			},
			{
				label: 'Para agencias',
				items: [
					{
						q: 'El schema es de mi cliente.',
						a: 'Podemos trabajar desde un schema anonimizado/renombrado (estructura sin nombres reales) o bajo NDA tripartito. No se ofrece on-premise — la fábrica nunca sale.',
					},
					{
						q: '¿Crece con el proyecto?',
						a: 'Sí. Los módulos nuevos se generan como vertical slices independientes y se añaden junto a tu código — sin tocar lo que tu equipo ya construyó.',
					},
					{
						q: '¿Misma arquitectura en todos los proyectos?',
						a: 'Sí — el output determinista da la misma estructura siempre, así que los devs rotan entre proyectos sin curva de entrada.',
					},
				],
			},
		],

		'reviews.eyebrow': 'Lo que dicen los clientes',
		'reviews.title': 'De los equipos que entregaron con AlveoForge',
		'reviews.items': [
			{
				rating: 5,
				quote: 'Arquitectura hexagonal de verdad — no MVC con nombres de carpeta hexagonales. Nuestro equipo empezó en el dominio desde el día uno.',
				name: 'A. R.',
				role: 'CTO',
				company: 'Fintech · 200+ tablas',
			},
			{
				rating: 5,
				quote: 'Habíamos presupuestado ocho meses para la capa estructural. Tuvimos un backend listo para producción, tested, en días — un trimestre de runway recuperado.',
				name: 'M. K.',
				role: 'Engineering Lead',
				company: 'Scale-up B2B SaaS',
			},
			{
				rating: 5,
				quote: '100% de cobertura en ramas aguantó nuestros propios casos límite. Determinista: auditamos una vez y confiamos en cada build.',
				name: 'J. T.',
				role: 'Backend Architect',
				company: 'Consultora de software',
			},
		],
		'reviews.refTitle': '¿Prefieres oírlo de primera mano?',
		'reviews.refText':
			'Organizamos una reference call con un equipo que construyó con AlveoForge.',

		'cta.title': '¿Listo para verlo sobre tu schema?',
		'cta.button': 'Agenda una llamada',
		'cta.note': 'Tu schema es confidencial. NDA a petición.',
		'cta.pricing':
			'Precio por proyecto, escala con el tamaño y complejidad del schema. Agenda una llamada para presupuesto.',

		'footer.rights': 'AlveoForge. Todos los derechos reservados.',
		'footer.privacy':
			'Analíticas sin cookies. Tu schema y modelo de datos se tratan como confidenciales.',
		'footer.youtube': 'Canal de YouTube',
		'footer.onepager': 'One-pager',
		'theme.label': 'Elige el tema',
		'theme.light': 'Claro',
		'theme.dark': 'Oscuro',
		'theme.system': 'Sistema',
		'footer.privacyLink': 'Privacidad',

		'privacy.title': 'Privacidad',
		'privacy.intro':
			'Esta web existe para presentar AlveoForge y que puedas contactar. Recogemos los mínimos datos posibles.',
		'privacy.points': [
			{
				t: 'Analítica',
				d: 'Usamos analítica sin cookies — sin cookies, sin rastreo entre sitios, sin identificadores personales. No requiere banner de consentimiento.',
			},
			{
				t: 'Contacto y agenda',
				d: 'Si nos escribes o reservas una llamada, recibimos solo lo que decides compartir — tu nombre, email y lo que escribas — y lo usamos solo para responder y hablar de un posible proyecto. Nunca lo vendemos ni compartimos.',
			},
			{
				t: 'Confidencialidad',
				d: 'Cualquier material técnico que compartas (p. ej. un schema de base de datos) se trata como confidencial y se usa solo para preparar tu backend. NDA a petición.',
			},
			{
				t: 'Tus derechos',
				d: 'Puedes pedirnos acceder o borrar tus datos en cualquier momento escribiendo a hello@alveoforge.com.',
			},
		],
		'privacy.note':
			'Este aviso se actualizará con los datos completos de la empresa cuando AlveoForge se constituya.',
		'privacy.back': '← Volver al inicio',
	},
} as const;
