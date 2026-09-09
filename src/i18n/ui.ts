export const languages = {
	en: '🇺🇸',
	es: '🇪🇸',
};
export const defaultLang = 'en';

export const ui = {
	en: {
		'layout.title': 'Production-ready Java backends from your SQL schema',
		'layout.appDescription':
			'Deterministic generation of production-ready Java (Spring Boot) backends from a SQL schema: real hexagonal architecture with vertical slicing, full CRUD with bulk operations and relationship expansion, JWT authentication, database migrations, and a four-layer test suite (unit, integration, component, end-to-end) at 95–100% coverage, verified with ArchUnit and mutation testing.',
		'layout.description':
			'Production-ready Java backends from your SQL schema: real hexagonal architecture, 95–100% tests, deterministic. See it live on your schema before you pay. Hours, not months.',
		'layout.keywords':
			'AlveoForge, Java backend, SQL schema, hexagonal architecture, production-ready backend, generate backend from database, Spring Boot, professional backend, backend generator, tested backend, vertical slicing, buy Java backend',
		'og.title': 'AlveoForge — Production-ready Java backends from your SQL schema',
		'og.description':
			'Hexagonal architecture, 95–100% tests, deterministic. Hours, not months.',

		'nav.home': 'Home',
		'nav.why': 'Why',
		'nav.how': 'How it works',
		'nav.numbers': 'Numbers',
		'nav.hood': 'Under the hood',
		'nav.get': 'What you get',
		'nav.roadmap': 'Roadmap',
		'nav.faq': 'FAQ',
		'nav.about': 'About',
		'nav.blog': 'Blog',
		'nav.demos': 'Demos',
		'nav.agencies': 'For agencies',
		'nav.cta': 'Book a call',

		// Sello "provisional" del hero — mismo texto que la marca de agua del
		// one-pager (public/alveoforge-onepager.html). Se oculta con
		// SHOW_PROVISIONAL_STAMP en src/consts.ts al lanzar.
		'hero.stamp.l1': 'Provisional',
		'hero.stamp.l2': 'until official launch',
		'hero.stamp.l3': 'Aug – Sep 2026',

		'hero.badge': 'Validated on a real 300+ table schema',
		'hero.h1': 'Production-ready Java backends, generated from your SQL schema.',
		'hero.tagline': 'Hours, not months.',
		'hero.sub':
			'A production-ready, 95–100% tested backend in hours. Hexagonal, vertical-sliced, modular monolith or microservices. Your team builds the business logic on top.',
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
			'A short walkthrough: schema in, hexagonal backend out. Generated and verified.',
		'video.soon': 'Demo coming soon',
		'video.watch': 'Watch the full technical walkthrough',
		'video.deepSub': 'Deep dive · 9–11 min · for the technical evaluator',
		'video.scale': '1,000 tables → microservices, deterministic',

		'problem.eyebrow': 'The wrong assumption',
		'problem.title': '“We’ll just hire devs + AI and build it faster and cheaper.”',
		'problem.body':
			'Reasonable, and wrong. Before a single business rule, weeks-to-months go into setup, architecture decisions, scaffolding every entity across every layer, and the test foundation. That is exactly the part that silently rots into hidden coupling.',
		'problem.body2':
			'That part is what AlveoForge delivers, correct and tested, in hours. We don’t compare against your whole build. Your business logic stays yours; we compare against the production-ready structural layer any team pays for either way.',

		'why.eyebrow': 'Why it’s different',
		'why.title': 'Why a dev team + AI can’t replicate this',
		'why.items': [
			{
				t: 'AI drifts to legacy patterns',
				d: 'AI learned mostly from public code — classic layered MVC. Ask it for real hexagonal and, unsupervised, it drifts toward what it knows. It looks hexagonal; it isn’t.',
			},
			{
				t: 'Deterministic, not probabilistic',
				d: 'Same schema, same output, every time. Audit it once, then verify every build matches. A human + AI team produces something different each run.',
			},
			{
				t: 'Fixed at the source',
				d: 'A bug found once is fixed for every future generation. Conventions and structure are enforced by construction, not by hoping code review catches the drift.',
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
		'numbers.title': 'The difference, measured',
		'numbers.stats': [
			{ k: 'Time to production-ready', was: 'Months', now: 'Days' },
			{ k: 'Test coverage', was: '20–40%', now: '95–100%' },
			{
				k: 'Same input, N builds',
				was: 'Different every time',
				now: 'Identical, deterministic',
			},
			{ k: 'Vendor lock-in', was: 'Permanent', now: 'None. The code is yours' },
		],
		'numbers.note': 'Validated on a real 300+ table schema.',

		'hood.eyebrow': 'Under the hood',
		'hood.title': 'Inside every generated entity',
		'hood.intro':
			'Most tools generate empty shells: hexagonal folders, stub CRUD, no real behaviour and no tests. This is what AlveoForge generates, and verifies, for every entity.',
		'hood.items': [
			{
				id: 'migrations',
				t: 'Two migration engines — and your database adopted',
				d: 'Flyway or Liquibase, with full parity. Or point it at your existing production database and it adapts (brownfield). Your DDL is the single source of truth: no schema drift.',
			},
			{
				id: 'bulk',
				t: 'Single and bulk, everywhere',
				d: 'Every entity ships individual and batch operations: create-many, fetch-by-ids, bulk updates, each one validated and tested.',
			},
			{
				id: 'expand',
				t: 'Relationship expansion on read',
				d: 'GET endpoints hydrate related entities on demand, across vertical slices, with no N+1 queries and no JPA object graph leaking across your layers.',
			},
			{
				id: 'contract',
				t: 'The full HTTP contract, tested',
				d: 'Every endpoint is tested for success and for failure, error paths included. Across the four-layer pyramid, asserting methods, lines and branches.',
			},
			{
				id: 'auth',
				t: 'Login, hashing, JWT and refresh tokens',
				d: 'A real login entity, password hashing at the persistence edge, JWT (in-process or service-to-service HTTP), refresh tokens inline or in a dedicated table.',
			},
			{
				id: 'rulings',
				t: 'Architectural rulings, applied consistently',
				d: 'Scalar foreign keys (no ORM graph bleeding across layers), N-N as first-class join-table entities, soft-delete from audit columns, composite, natural and identity keys. The rulings that separate “it compiles” from “it’s correct”.',
			},
		],

		'get.eyebrow': 'Scope',
		'get.title': 'What you get',
		'get.inH': 'You receive',
		'get.outH': 'You don’t',
		'get.in': [
			'Complete, running backend in a private repository',
			'Real hexagonal architecture + vertical slicing',
			'Full CRUD, single & bulk operations, and relationship expansion on read (?expand=)',
			'Full standard SQL type coverage: arrays, enums, JSONB, UUID, timestamptz, numeric precision, binary (bytea), composite & foreign keys, inheritance & partitions',
			'PostgreSQL · MongoDB · Redis cache · transactional outbox',
			'Database migrations (Flyway or Liquibase) + brownfield adoption of your existing database',
			'JWT auth, refresh tokens & email verification + dev / pre / prod profiles',
			'Test suite across a four-layer pyramid: success & error paths (95–100%)',
			'Modular monolith or microservices, your choice, no lock-in',
			'Code fully yours + 30-day post-delivery support',
		],
		'get.out': [
			'The generation factory (stays proprietary)',
			'Row-level authorization (who may access which row): your policies on top',
			'Your business logic and domain-specific rules (e.g. regex)',
			'Third-party service integrations',
		],
		'get.grows':
			'As your project grows, each feature is generated as an independent vertical slice, added alongside your code without touching what your team already built. Hexagonal isolates the domain from database, framework and delivery; vertical slicing keeps each feature cohesive, so everything that changes together lives together. That’s what lets the backend scale in order and stay fast to work on, instead of decaying into the tangled coupling that freezes teams years in.',

		'roadmap.eyebrow': 'Roadmap',
		'roadmap.title': 'Delivered, and what comes next',
		'roadmap.groups': [
			{
				label: 'Delivered',
				tone: 'done',
				items: [
					{ t: 'Real hexagonal architecture + vertical slicing', d: '' },
					{ t: 'Deterministic generation: same schema, same output', d: '' },
					{ t: 'Modular monolith or microservices from the same schema', d: '' },
					{ t: 'Full standard SQL type coverage', d: '' },
					{ t: 'Composite, natural & generated primary keys · N-N as first-class resources', d: '' },
					{ t: 'PostgreSQL inheritance & declarative partitioning', d: '' },
					{ t: 'Multi-store: PostgreSQL · MongoDB · Redis cache · outbox', d: '' },
					{ t: 'Read/write splitting · writer & reader datasources', d: 'route reads to replicas, writes to the primary — opt-in for read-heavy domains' },
					{ t: 'Migrations (Flyway / Liquibase) + brownfield adoption', d: '' },
					{ t: 'Full CRUD + bulk operations', d: '' },
					{ t: 'Relationship expansion on read (?expand=)', d: '' },
					{ t: 'JWT auth, refresh tokens & email verification', d: '' },
					{ t: 'Reference-data seeding & required defaults', d: '' },
					{ t: 'Four-layer test pyramid: success & error · 95–100% coverage', d: 'unit · integration · component · e2e' },
					{ t: 'Architecture enforced in CI, mutation-tested', d: 'ArchUnit rules verify the hexagon; PIT checks the tests catch injected faults' },
					{ t: 'Validated on 300+ table schemas', d: '' },
					{ t: 'GitLab scale, 1,000+ tables', d: 'stress-testing the pipeline on very large schemas' },
				],
			},
			{
				label: 'In progress',
				tone: 'now',
				items: [
					{ t: 'Public launch', d: 'getting AlveoForge ready to go public: site, demos and first founding clients' },
					{ t: 'GraphQL / BFF read layer', d: 'alternative to REST expand for complex client graphs' },
				],
			},
			{
				label: 'Long term',
				tone: 'next',
				items: [
					{ t: 'Self-service platform', d: 'upload schema → preview → repo, no call required' },
					{ t: 'More languages & frameworks', d: 'NestJS, Python and C# (hexagonal), beyond Java, plus any language on client demand' },
					{ t: 'Optional reactive API', d: 'Mono/Flux, opt-in for streaming / high-I/O domains' },
					{ t: 'Hierarchical tree expand', d: 'parent/child trees (self-referential) expanded on read' },
				],
			},
		],
		'roadmap.note':
			'Delivered items ship today in the guided Java / Spring Boot service. In-progress and long-term items are on the roadmap, not available yet.',

		'founder.eyebrow': 'About the founder',
		'founder.title': 'Built by someone who lived the problem',
		'founder.body':
			'I’m Álvaro. AlveoForge started from a deadlock I watched up close: a backend that worked but had no real architecture. Rewriting it properly was the right engineering call, but it meant freezing the team for the better part of a year while clients wanted new features now. No business can afford to stop that long, and that tradeoff is exactly what AlveoForge removes. I spent 11+ months turning real hexagonal architecture at scale into a deterministic factory that delivers a production-ready backend in hours, not months. I’m its first user, validated at scale on a real system. If it convinces you, let’s talk.',
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
						a: 'Your SQL schema to start: the structure (tables, relationships, constraints), not your data or business logic. From there we run a short guided session to capture the domain choices that shape the output: microservice boundaries and their names, whether you want MongoDB / Redis / the outbox pattern, environment profiles, and so on. You bring the domain; we handle the technical translation.',
					},
					{
						q: 'What exactly do I receive?',
						a: 'A production-ready backend for every entity: hexagonal, tested, runnable. Your business logic and integrations stay with your team. The code is fully yours, no lock-in.',
					},
					{
						q: 'Monolith or microservices?',
						a: 'Your choice, from the same domain: a modular monolith or microservices (one runnable Spring Boot app per module). No rewrite when you switch.',
					},
					{
						q: 'Do I get the generation tool itself?',
						a: 'No. The factory stays proprietary. You receive the output: professional, tested code you own entirely and can maintain without AlveoForge.',
					},
					{
						q: 'How is pricing set?',
						a: 'Per-project, priced on your schema (size and complexity), not per table. The first payment is a down-payment: you see your backend running on your schema, with its Swagger and test reports, before you pay anything. As a yardstick, the same structural layer built in-house is four to eight months of a team.',
					},
					{
						q: 'Who owns the generated code?',
						a: 'You do, completely. Modify it, deploy it, extend it, reuse it in other projects. No licence fee, no royalties, no runtime dependency on us. The only thing that stays ours is the generator itself.',
					},
					{
						q: 'What do you do with our schema?',
						a: 'It’s used only to build your backend, kept confidential, and deleted after delivery. Never shared with third parties or used to train anything. Prefer to send an anonymized/renamed schema (structure without real names)? That works too.',
					},
					{
						q: 'You’re a solo founder — what if AlveoForge goes away?',
						a: 'The code is yours with zero dependency on us: standard Maven, standard Spring Boot. It keeps building, running and staying maintainable whether we’re around or not. That independence is the continuity guarantee.',
					},
				],
			},
			{
				label: 'For tech leads',
				items: [
					{
						q: 'Real hexagonal, or MVC with hexagonal folder names?',
						a: 'Real hexagonal with vertical slicing: business logic isolated from database, framework and delivery. It’s the whole reason the factory exists: AI-assisted teams drift toward layered MVC; this doesn’t.',
					},
					{
						q: 'How is the test suite structured?',
						a: 'As a four-layer test pyramid: the industry-standard taxonomy (Fowler / Clemson), each layer its own Maven profile. Unit tests every class in isolation with its collaborators mocked, fast and deterministic, the default run. Integration exercises the persistence adapters against a real database (PostgreSQL, MongoDB, Redis) spun up with Testcontainers, not an in-memory stand-in. Component boots the whole service on a random port and drives it through its HTTP boundary: JSON contract, status codes, validation, live schema. End-to-end runs a full user journey with every collaborator real, including outbox propagation and email verification. There’s deliberately no consumer-contract layer: the OpenAPI/Swagger spec is the contract, and the component layer verifies it.',
					},
					{
						q: 'Is the 95–100% coverage real, or empty tests?',
						a: 'Methods, lines and branches, measured with JaCoCo. Every path is executed and asserted, not just run. Test strength is verified with mutation testing (PIT): it injects faults into the code and checks the tests catch them, at a 95%+ mutation score.',
					},
					{
						q: 'Do the tests cover error paths, or just the happy path?',
						a: 'Both. Every endpoint is tested for success and for failure: 400 validation, 401 auth, 404, 415, error paths included. Across the four-layer pyramid, asserting methods, lines and branches. Empty happy-path tests are exactly what we don’t ship.',
					},
					{
						q: 'What operations does each entity get?',
						a: 'Full CRUD plus batch: create, read (single, paged, by-ids), update, delete, create-many and bulk updates, with read-time relationship expansion (?expand=…) across slices, no N+1 queries and no JPA object graph leaking across layers.',
					},
					{
						q: 'How does it fit our existing database and migrations?',
						a: 'Your DDL is the single source of truth, emitted as a versioned migration. Pick Flyway or Liquibase, both wired with parity, or point it at an existing production database and it adapts (brownfield) without rebuilding your schema. Hibernate runs in validate mode, so entities are checked against the real schema at boot.',
					},
					{
						q: 'Can my team maintain code it didn’t write?',
						a: 'Yes. One pattern repeated consistently, standard readable code any Java dev extends from day one, plus a 30-day support window. And you own it: no dependency on AlveoForge.',
					},
					{
						q: 'Do I need a specific IDE or build tool?',
						a: 'No. The output is a standard Maven project: open it in any IDE (IntelliJ, VS Code, Eclipse, NetBeans…) or in none at all. Build, test and run it straight from the terminal with the Maven wrapper (./mvnw). No editor, plugin or vendor lock-in.',
					},
					{
						q: 'What’s the tech stack?',
						a: 'Java 25, Spring Boot 4.1, hexagonal + vertical slicing, PostgreSQL · MongoDB · Redis with outbox, JWT auth, dev / pre / prod profiles.',
					},
					{
						q: 'What SQL types do you support?',
						a: 'The full breadth of standard PostgreSQL types: arrays, enums, JSONB, UUID, the date/time family (date, time, timestamptz), numeric and decimal precision, binary (bytea), varchar/char length validation, composite and foreign keys, plus table inheritance and declarative partitioning. And generation never fails on a type it doesn’t recognize: it falls back to a safe default (string) that your team can refine later, so you always get a running backend. We flag any such column together in the kick-off, no surprises. That’s why the process is guided.',
					},
				],
			},
			{
				label: 'For agencies',
				items: [
					{
						q: 'The schema belongs to my client.',
						a: 'We can work from an anonymized/renamed schema (structure without real names) or under a tripartite NDA. On-premise isn’t offered: the factory never leaves.',
					},
					{
						q: 'Does it grow with the project?',
						a: 'Yes. New modules are generated as independent vertical slices and added alongside your code, without touching what your team already built.',
					},
					{
						q: 'Same architecture across projects?',
						a: 'Yes. Deterministic output means the same structure every time, so developers rotate between projects with no ramp-up.',
					},
				],
			},
		],

		'process.eyebrow': 'How buying works',
		'process.title': 'You see your backend before you pay for it.',
		'process.lead':
			'The first payment is a down-payment, not the whole project. A consultancy can’t match that, because it’s generated, not hand-written.',
		'process.steps': [
			{ t: 'A call', d: 'You tell us your system and hand us your SQL schema.' },
			{ t: 'You get a quote', d: 'Fifteen days to decide. No rush, no pressure.' },
			{ t: 'We generate your backend', d: 'From your schema: hexagonal, tested, runnable.' },
			{
				t: 'You see it running, free',
				d: 'A private link: your API live, its Swagger, its test report and JaCoCo coverage. You haven’t paid anything yet.',
			},
			{
				t: 'First tranche',
				d: 'A first set of tables. You pick which, and we suggest your hardest. You read the real code before committing to the rest.',
			},
			{ t: 'The repo is yours', d: 'Second payment, and the full repository is yours to keep.' },
		],
		'process.asymTitle': 'Why we can do this and a consultancy can’t',
		'process.asym':
			'A consultancy can’t build your backend for free just to show you. We can: the marginal cost of generating it is near zero. It’s not “we’re faster”; it’s a structural asymmetry.',

		'reviews.eyebrow': 'What clients say',
		'reviews.title': 'From the teams who shipped with it',
		'reviews.items': [
			{
				rating: 5,
				quote: 'Real hexagonal architecture, not MVC with hexagonal folder names. Our team started on the domain from day one.',
				name: 'A. R.',
				role: 'CTO',
				company: 'Fintech · 200+ tables',
			},
			{
				rating: 5,
				quote: 'We’d budgeted eight months for the structural layer. We had a production-ready backend, tested, in days: a full quarter of runway back.',
				name: 'M. K.',
				role: 'Engineering Lead',
				company: 'B2B SaaS scale-up',
			},
			{
				rating: 5,
				quote: 'Branch coverage held up against our own edge cases. Deterministic, so we audited once and re-verified on every build.',
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
			'Per-project, priced on your schema. You see it running before you pay, and the first payment is a down-payment, not the whole project. The same structural layer, built in-house, is months of a team.',

		'blog.eyebrow': 'Blog',
		'blog.title': 'Notes from AlveoForge',
		'blog.intro':
			'Deep dives on architecture, determinism and what it takes to generate a backend your team can maintain for years.',
		'blog.readMore': 'Read more',
		'blog.back': '← All posts',
		'blog.backHome': '← Back to home',
		'blog.published': 'Published',
		'blog.updated': 'Updated',
		'blog.empty': 'No posts yet — the first ones are on the way.',
		'blog.min': 'min read',

		'changelog.eyebrow': 'Changelog',
		'changelog.title': 'Product changelog',
		'changelog.intro':
			'What’s new in AlveoForge: capabilities, rulings and fixes, newest first.',
		'changelog.back': '← Back to home',
		'changelog.empty': 'Nothing logged yet.',

		'demos.eyebrow': 'Live demos',
		'demos.title': 'See it running on real schemas',
		'demos.intro':
			'Total transparency. Every demo is a real generated backend, running live. Try the API, then inspect the exact test and coverage artifacts behind it. Nothing staged.',
		'demos.inspect':
			'On each demo you can inspect: live Swagger, test reports, JaCoCo coverage, the raw test artifacts, and the Allure dashboard.',
		'demos.note':
			'Live demos run as a modular monolith: one deployable you explore end to end. The same schema also generates a microservices layout; you see that in the walkthrough.',
		'demos.private':
			'These are our public demos, on open schemas. Client demos run on private, access-controlled subdomains, each shared only with that client, and their schema stays confidential.',
		'demos.live': 'Live',
		'demos.soon': 'Coming soon',
		'demos.tables': 'tables',
		'demos.swagger': 'Try the API (Swagger)',
		'demos.video': 'Watch the run',
		'demos.sql': 'Schema (.sql)',
		'demos.reports': 'Test reports',
		'demos.coverage': 'Coverage (JaCoCo)',
		'demos.allure': 'Allure dashboard',
		'demos.raw': 'Raw test artifacts',
		'demos.compose': 'How it runs',
		'demos.backHome': '← Back to home',

		'footer.rights': 'AlveoForge. All rights reserved.',
		'footer.privacy':
			'Cookieless analytics. Your schema and data model are treated as confidential.',
		'footer.youtube': 'YouTube channel',
		'footer.onepager': 'One-pager',
		'footer.blog': 'Blog',
		'footer.changelog': 'Changelog',
		'footer.rss': 'RSS',
		'footer.linkedin': 'LinkedIn',
		'footer.demos': 'Demos',
		'footer.colProduct': 'Product',
		'footer.colCompany': 'Company',
		'footer.colResources': 'Resources',
		'footer.colLegal': 'Legal',
		'footer.colContact': 'Contact',
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
				d: 'We use cookieless product analytics (PostHog): no cookies, no cross-site tracking, no persistent identifiers, and nothing stored on your device — so no consent banner is required. This includes session replay (recordings of how our pages are used, with every form input masked) and error tracking (automatic capture of in-browser errors). We use it only to understand and improve the site; because nothing is stored on your device, sessions are not linked across visits.',
			},
			{
				t: 'Contact & scheduling',
				d: 'If you email us or book a call, we receive only what you choose to share (your name, email, and anything you write) and use it only to reply and discuss a possible engagement. We never sell or share it.',
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
		'layout.title': 'Backends Java listos para producción desde tu schema SQL',
		'layout.appDescription':
			'Generación determinista de backends Java (Spring Boot) listos para producción desde un schema SQL: arquitectura hexagonal real con vertical slicing, CRUD completo con operaciones en lote y expansión de relaciones, autenticación JWT, migraciones de base de datos y una suite de tests de cuatro capas (unit, integration, component, end-to-end) al 95–100% de cobertura, verificada con ArchUnit y mutation testing.',
		'layout.description':
			'Backends Java listos para producción desde tu schema SQL: arquitectura hexagonal real, 95–100% tests, determinista. Pruébalo en vivo sobre tu schema antes de pagar. Horas, no meses.',
		'layout.keywords':
			'AlveoForge, backend Java, schema SQL, arquitectura hexagonal, backend producción, generar backend desde base de datos, Spring Boot, comprar backend profesional, backend con tests, backend a medida, slicing vertical, backend determinista',
		'og.title': 'AlveoForge — Backends Java listos para producción desde tu schema SQL',
		'og.description':
			'Arquitectura hexagonal, 95–100% de tests, determinista. Horas, no meses.',

		'nav.home': 'Inicio',
		'nav.why': 'Por qué',
		'nav.how': 'Cómo funciona',
		'nav.numbers': 'Números',
		'nav.hood': 'Bajo el capó',
		'nav.get': 'Qué recibes',
		'nav.roadmap': 'Roadmap',
		'nav.faq': 'FAQ',
		'nav.about': 'Autor',
		'nav.blog': 'Blog',
		'nav.demos': 'Demos',
		'nav.agencies': 'Para agencias',
		'nav.cta': 'Agenda una llamada',

		'hero.stamp.l1': 'Provisional',
		'hero.stamp.l2': 'hasta el lanzamiento oficial',
		'hero.stamp.l3': 'Ago – Sep 2026',

		'hero.badge': 'Validado en un schema real de 300+ tablas',
		'hero.h1': 'Backends Java listos para producción, generados desde tu schema SQL.',
		'hero.tagline': 'Horas, no meses.',
		'hero.sub':
			'Un backend listo para producción, 95–100% tested, en horas. Hexagonal, vertical slicing, monolito modular o microservicios. Tu equipo construye la lógica de negocio encima.',
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
			'Un recorrido breve: entra el schema, sale un backend hexagonal. Generado y verificado.',
		'video.soon': 'Demo próximamente',
		'video.watch': 'Ver el walkthrough técnico completo',
		'video.deepSub': 'Deep dive · 9–11 min · para el evaluador técnico',
		'video.scale': '1.000 tablas → microservicios, determinista',

		'problem.eyebrow': 'La suposición equivocada',
		'problem.title': '“Contrato devs + IA y lo construyo más rápido y barato.”',
		'problem.body':
			'Razonable, y equivocado. Antes de una sola regla de negocio, se van semanas o meses en setup, decisiones de arquitectura, scaffolding de cada entidad en cada capa, y la base de tests. Justo esa parte es la que se pudre en acoplamiento oculto.',
		'problem.body2':
			'Esa parte es la que AlveoForge entrega, correcta y tested, en horas. No comparamos contra tu build entero. Tu lógica de negocio es tuya; comparamos contra la capa estructural production-ready que cualquier equipo paga igual.',

		'why.eyebrow': 'Por qué es diferente',
		'why.title': 'Por qué un equipo + IA no puede replicar esto',
		'why.items': [
			{
				t: 'La IA deriva a patrones legacy',
				d: 'La IA aprendió sobre todo de código público — MVC en capas clásico. Le pides hexagonal real y, sin supervisión, deriva hacia lo que conoce. Parece hexagonal; no lo es.',
			},
			{
				t: 'Determinista, no probabilística',
				d: 'Mismo schema, mismo output, siempre. Lo auditas una vez y luego verificas que cada build coincide. Un equipo + IA produce algo distinto en cada intento.',
			},
			{
				t: 'Se arregla en el origen',
				d: 'Un bug encontrado una vez queda arreglado para todas las generaciones futuras. Convenciones y estructura impuestas por construcción, no esperando que la revisión de código pille la deriva.',
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
		'numbers.title': 'La diferencia, medida',
		'numbers.stats': [
			{ k: 'Tiempo hasta production-ready', was: 'Meses', now: 'Días' },
			{ k: 'Cobertura de tests', was: '20–40%', now: '95–100%' },
			{
				k: 'Mismo input, N builds',
				was: 'Distinto cada vez',
				now: 'Idéntico, determinista',
			},
			{ k: 'Lock-in de proveedor', was: 'Permanente', now: 'Ninguno. El código es tuyo' },
		],
		'numbers.note': 'Validado en un schema real de 300+ tablas.',

		'hood.eyebrow': 'Bajo el capó',
		'hood.title': 'Dentro de cada entidad generada',
		'hood.intro':
			'La mayoría de herramientas generan cascarones vacíos: carpetas hexagonales, CRUD de pega, sin comportamiento real ni tests. Esto es lo que AlveoForge genera, y verifica, para cada entidad.',
		'hood.items': [
			{
				id: 'migrations',
				t: 'Dos motores de migración — y tu base de datos adoptada',
				d: 'Flyway o Liquibase con paridad total. O lo apuntas a tu base de datos de producción existente y se adapta (brownfield). Tu DDL es la fuente única de verdad: sin deriva de esquema.',
			},
			{
				id: 'bulk',
				t: 'Single y bulk, en todo',
				d: 'Cada entidad trae operaciones individuales y en lote: create-many, by-ids, updates masivos, cada una validada y tested.',
			},
			{
				id: 'expand',
				t: 'Expand de relaciones al leer',
				d: 'Los GET hidratan entidades relacionadas a demanda, entre vertical slices, sin N+1 ni grafo JPA expuesto entre tus capas.',
			},
			{
				id: 'contract',
				t: 'El contrato HTTP completo, testeado',
				d: 'Cada endpoint se prueba en éxito y en fallo, incluidos los caminos de error. En la pirámide de cuatro capas, asertando métodos, líneas y ramas.',
			},
			{
				id: 'auth',
				t: 'Login, hashing, JWT y refresh tokens',
				d: 'Entidad de login real, hash de contraseña en el borde de persistencia, JWT (en proceso o HTTP entre servicios), refresh tokens inline o en tabla dedicada.',
			},
			{
				id: 'rulings',
				t: 'Las decisiones de arquitectura, aplicadas',
				d: 'FK escalares (sin grafo ORM filtrándose entre capas), N-N como entidades join-table de primera clase, soft-delete desde columnas de auditoría, claves compuestas, naturales e identity. Los rulings que separan «compila» de «es correcto».',
			},
		],

		'get.eyebrow': 'Alcance',
		'get.title': 'Qué recibes',
		'get.inH': 'Incluye',
		'get.outH': 'No incluye',
		'get.in': [
			'Backend completo y ejecutable en un repositorio privado',
			'Arquitectura hexagonal real + vertical slicing',
			'CRUD completo, operaciones individuales y en lote, y expand de relaciones al leer (?expand=)',
			'Cobertura completa de tipos SQL: arrays, enums, JSONB, UUID, timestamptz, precisión numérica, binario (bytea), claves compuestas y foráneas, herencia y particiones',
			'PostgreSQL · MongoDB · caché Redis · outbox transaccional',
			'Migraciones de BD (Flyway o Liquibase) + adopción brownfield de tu base de datos existente',
			'Auth JWT, refresh tokens y verificación por email + perfiles dev / pre / prod',
			'Suite de tests en una pirámide de cuatro capas: caminos de éxito y error (95–100%)',
			'Monolito modular o microservicios, a tu elección, sin lock-in',
			'Código 100% tuyo + 30 días de soporte post-entrega',
		],
		'get.out': [
			'El sistema de generación (sigue siendo propietario)',
			'Autorización por fila (quién accede a qué registro): tus políticas encima',
			'Tu lógica de negocio y reglas propias del dominio (p. ej. regex)',
			'Integraciones con servicios de terceros',
		],
		'get.grows':
			'A medida que tu proyecto crece, cada feature se genera como un vertical slice independiente, que se añade junto a tu código sin tocar lo que tu equipo ya construyó. Hexagonal aísla el dominio de la base de datos, el framework y el delivery; el vertical slicing mantiene cada feature cohesionada, así que lo que cambia junto, vive junto. Eso es lo que permite que el backend escale en orden y siga siendo rápido de tocar, en vez de degenerar en el acoplamiento enmarañado que congela equipos años después.',

		'roadmap.eyebrow': 'Roadmap',
		'roadmap.title': 'Lo entregado, y lo que viene',
		'roadmap.groups': [
			{
				label: 'Entregado',
				tone: 'done',
				items: [
					{ t: 'Arquitectura hexagonal real + vertical slicing', d: '' },
					{ t: 'Generación determinista: mismo schema, mismo output', d: '' },
					{ t: 'Monolito modular o microservicios desde el mismo schema', d: '' },
					{ t: 'Cobertura completa de tipos SQL estándar', d: '' },
					{ t: 'PKs compuestas, naturales y autogeneradas · N-N como recurso de primera clase', d: '' },
					{ t: 'Herencia y particiones declarativas de PostgreSQL', d: '' },
					{ t: 'Multi-store: PostgreSQL · MongoDB · caché Redis · outbox', d: '' },
					{ t: 'Separación lectura/escritura · datasources writer y reader', d: 'enruta lecturas a réplicas y escrituras al primario — opt-in para dominios con mucha lectura' },
					{ t: 'Migraciones (Flyway / Liquibase) + adopción brownfield', d: '' },
					{ t: 'CRUD completo + operaciones en lote', d: '' },
					{ t: 'Expand de relaciones al leer (?expand=)', d: '' },
					{ t: 'Auth JWT, refresh tokens y verificación por email', d: '' },
					{ t: 'Seeding de reference-data y defaults obligatorios', d: '' },
					{ t: 'Pirámide de tests de 4 capas: éxito y error · 95–100% cobertura', d: 'unit · integration · component · e2e' },
					{ t: 'Arquitectura verificada en CI, con mutation testing', d: 'reglas ArchUnit verifican el hexágono; PIT comprueba que los tests cazan los fallos inyectados' },
					{ t: 'Validado en schemas de 300+ tablas', d: '' },
					{ t: 'Escala a GitLab 1.000+ tablas', d: 'estresando el pipeline en schemas muy grandes' },
				],
			},
			{
				label: 'En marcha',
				tone: 'now',
				items: [
					{ t: 'Salida al mercado', d: 'preparando AlveoForge para el lanzamiento público: web, demos y primeros clientes fundadores' },
					{ t: 'Capa de lectura GraphQL / BFF', d: 'alternativa al expand REST para grafos complejos' },
				],
			},
			{
				label: 'Largo plazo',
				tone: 'next',
				items: [
					{ t: 'Plataforma self-service', d: 'subir schema → preview → repo, sin llamada' },
					{ t: 'Más lenguajes y frameworks', d: 'NestJS, Python y C# (hexagonal), más allá de Java, y cualquier lenguaje a petición del cliente' },
					{ t: 'API reactiva opcional', d: 'Mono/Flux, opt-in para streaming / alto I/O' },
					{ t: 'Expand de árboles jerárquicos', d: 'árboles padre/hijo (auto-referencias) expandidos en lectura' },
				],
			},
		],
		'roadmap.note':
			'Lo «Entregado» está disponible hoy en el servicio guiado Java / Spring Boot. «En marcha» y «Largo plazo» están en el roadmap, aún no disponibles.',

		'founder.eyebrow': 'Sobre el autor',
		'founder.title': 'Hecho por alguien que vivió el problema',
		'founder.body':
			'Soy Álvaro. AlveoForge nació de un bloqueo que viví de cerca: un backend que funcionaba pero no tenía arquitectura real. Reescribirlo bien era la decisión de ingeniería correcta, pero implicaba congelar al equipo casi un año mientras los clientes pedían features nuevas ya. Ninguna empresa puede permitirse parar tanto, y ese es justo el dilema que AlveoForge elimina. Pasé 11+ meses convirtiendo arquitectura hexagonal real a escala en una fábrica determinista que entrega un backend listo para producción en horas, no meses. Soy su primer usuario, ya validado a escala en un sistema real. Si te convence, hablamos.',
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
						a: 'Tu schema SQL para arrancar: la estructura (tablas, relaciones, constraints), no tus datos ni tu lógica de negocio. A partir de ahí hacemos una sesión guiada breve para recoger las decisiones de dominio que dan forma al resultado: separación en microservicios y sus nombres, si quieres MongoDB / Redis / patrón outbox, perfiles de entorno, etc. Tú traes el dominio; yo me encargo de la traducción técnica.',
					},
					{
						q: '¿Qué recibo exactamente?',
						a: 'Un backend listo para producción por entidad: hexagonal, tested, ejecutable. Tu lógica de negocio e integraciones se quedan con tu equipo. El código es 100% tuyo, sin lock-in.',
					},
					{
						q: '¿Monolito o microservicios?',
						a: 'A tu elección, desde el mismo dominio: monolito modular o microservicios (una app Spring Boot arrancable por módulo). Sin reescritura cuando cambies.',
					},
					{
						q: '¿Recibo el sistema de generación?',
						a: 'No. La fábrica sigue siendo propietaria. Recibes el output: código profesional y tested, 100% tuyo, que puedes mantener sin AlveoForge.',
					},
					{
						q: '¿Cómo se fija el precio?',
						a: 'Por proyecto, calculado sobre tu schema (tamaño y complejidad), no por tabla. El primer pago es una señal: ves tu backend funcionando sobre tu schema, con su Swagger y sus informes de tests, antes de pagar nada. Como referencia, la misma capa estructural construida en interno son cuatro a ocho meses de un equipo.',
					},
					{
						q: '¿De quién es el código generado?',
						a: 'Tuyo por completo. Modifícalo, despliégalo, extiéndelo, reutilízalo en otros proyectos. Sin licencia, sin royalties y sin dependencia de nosotros en tiempo de ejecución. Lo único que sigue siendo nuestro es el generador.',
					},
					{
						q: '¿Qué hacéis con nuestro schema?',
						a: 'Se usa solo para construir tu backend, se trata como confidencial y se elimina tras la entrega. Nunca se comparte con terceros ni se usa para entrenar nada. ¿Prefieres enviar un schema anonimizado/renombrado (estructura sin nombres reales)? También nos vale.',
					},
					{
						q: 'Eres fundador único — ¿y si AlveoForge desaparece?',
						a: 'El código es tuyo y no depende de nosotros: Maven estándar, Spring Boot estándar. Sigue compilando, ejecutándose y siendo mantenible estemos o no. Esa independencia es la garantía de continuidad.',
					},
				],
			},
			{
				label: 'Para tech leads',
				items: [
					{
						q: '¿Hexagonal de verdad o MVC con carpetas hexagonales?',
						a: 'Hexagonal real con vertical slicing: lógica de negocio aislada de base de datos, framework y delivery. Es la razón misma de la fábrica: los equipos con IA derivan a MVC en capas; esto no.',
					},
					{
						q: '¿Cómo está estructurada la suite de tests?',
						a: 'Como una pirámide de tests de cuatro capas: la taxonomía estándar del sector (Fowler / Clemson), y cada capa es su propio perfil de Maven. Unit prueba cada clase en aislamiento con sus colaboradores mockeados, rápido y determinista, la ejecución por defecto. Integration ejercita los adaptadores de persistencia contra una base de datos real (PostgreSQL, MongoDB, Redis) levantada con Testcontainers, no un sustituto en memoria. Component arranca el servicio entero en un puerto aleatorio y lo maneja por su frontera HTTP: contrato JSON, códigos de estado, validación, esquema real. End-to-end recorre un flujo de usuario completo con cada colaborador real, incluida la propagación por outbox y la verificación por email. No hay, deliberadamente, capa de contract de consumidor: el spec OpenAPI/Swagger es el contrato, y la capa component lo verifica.',
					},
					{
						q: '¿La cobertura del 95–100% es real o tests vacíos?',
						a: 'Métodos, líneas y ramas, medido con JaCoCo. Cada camino se ejecuta y se asertan resultados, no solo se recorre. La fuerza de los tests se verifica con mutation testing (PIT): inyecta fallos en el código y comprueba que los tests los cazan, con un mutation score del 95%+.',
					},
					{
						q: '¿Los tests cubren los caminos de error o solo el camino feliz?',
						a: 'Ambos. Cada endpoint se prueba en éxito y en fallo: 400 validación, 401 auth, 404, 415, incluidos los caminos de error. En la pirámide de cuatro capas, asertando métodos, líneas y ramas. Los tests vacíos de solo-camino-feliz son justo lo que no entregamos.',
					},
					{
						q: '¿Qué operaciones tiene cada entidad?',
						a: 'CRUD completo más lote: create, read (individual, paginado, by-ids), update, delete, create-many y updates masivos, con expand de relaciones al leer (?expand=…) entre slices, sin N+1 ni grafo JPA expuesto entre capas.',
					},
					{
						q: '¿Cómo encaja con nuestra base de datos y migraciones actuales?',
						a: 'Tu DDL es la fuente única de verdad, emitido como migración versionada. Eliges Flyway o Liquibase, ambos cableados con paridad, o lo apuntas a una base de datos de producción existente y se adapta (brownfield) sin reconstruir tu esquema. Hibernate corre en modo validate, así que las entidades se validan contra el esquema real al arrancar.',
					},
					{
						q: '¿Puede mi equipo mantener código que no escribió?',
						a: 'Sí. Un patrón repetido de forma consistente, código estándar y legible que cualquier dev Java extiende desde el día uno, más 30 días de soporte. Y es tuyo: sin dependencia de AlveoForge.',
					},
					{
						q: '¿Necesito un IDE o herramienta de build concreta?',
						a: 'No. La salida es un proyecto Maven estándar: ábrelo en cualquier IDE (IntelliJ, VS Code, Eclipse, NetBeans…) o en ninguno. Compila, testea y ejecútalo directamente desde la terminal con el wrapper de Maven (./mvnw). Sin ataduras a editor, plugin ni proveedor.',
					},
					{
						q: '¿Cuál es el stack?',
						a: 'Java 25, Spring Boot 4.1, hexagonal + vertical slicing, PostgreSQL · MongoDB · Redis con outbox, auth JWT, perfiles dev / pre / prod.',
					},
					{
						q: '¿Qué tipos SQL soportáis?',
						a: 'La gama estándar completa de PostgreSQL: arrays, enums, JSONB, UUID, la familia de fecha/hora (date, time, timestamptz), precisión numérica y decimal, binario (bytea), validación de longitud varchar/char, claves compuestas y foráneas, más herencia de tablas y particiones declarativas. Y la generación nunca falla ante un tipo que no reconozca: cae a un valor seguro por defecto (string) que tu equipo puede afinar después, así que siempre obtienes un backend arrancando. Señalamos cualquier columna así juntos en el kick-off, sin sorpresas. Por eso el proceso es guiado.',
					},
				],
			},
			{
				label: 'Para agencias',
				items: [
					{
						q: 'El schema es de mi cliente.',
						a: 'Podemos trabajar desde un schema anonimizado/renombrado (estructura sin nombres reales) o bajo NDA tripartito. No se ofrece on-premise: la fábrica nunca sale.',
					},
					{
						q: '¿Crece con el proyecto?',
						a: 'Sí. Los módulos nuevos se generan como vertical slices independientes y se añaden junto a tu código, sin tocar lo que tu equipo ya construyó.',
					},
					{
						q: '¿Misma arquitectura en todos los proyectos?',
						a: 'Sí. El output determinista da la misma estructura siempre, así que los devs rotan entre proyectos sin curva de entrada.',
					},
				],
			},
		],

		'process.eyebrow': 'Cómo es comprar',
		'process.title': 'Ves tu backend antes de pagarlo.',
		'process.lead':
			'El primer pago es una señal, no el proyecto entero. Una consultora no puede igualarlo, porque está generado, no escrito a mano.',
		'process.steps': [
			{ t: 'Una llamada', d: 'Nos cuentas tu sistema y nos pasas tu schema SQL.' },
			{ t: 'Recibes el presupuesto', d: 'Quince días para decidir. Sin prisa ni presión.' },
			{ t: 'Generamos tu backend', d: 'A partir de tu schema: hexagonal, tested, ejecutable.' },
			{
				t: 'Lo ves funcionando, gratis',
				d: 'Un enlace privado: tu API en vivo, su Swagger, su informe de tests y su cobertura JaCoCo. Todavía no has pagado nada.',
			},
			{
				t: 'Primer tramo',
				d: 'Un primer conjunto de tablas. Eliges cuáles, y te recomendamos las más difíciles. Lees el código real antes de comprometer el resto.',
			},
			{ t: 'El repo es tuyo', d: 'Segundo pago, y el repositorio completo es tuyo.' },
		],
		'process.asymTitle': 'Por qué podemos hacer esto y una consultora no',
		'process.asym':
			'Una consultora no puede construirte el backend gratis solo para enseñártelo. Nosotros sí: el coste marginal de generarlo tiende a cero. No es “somos más rápidos”; es una asimetría estructural.',

		'reviews.eyebrow': 'Lo que dicen los clientes',
		'reviews.title': 'De los equipos que entregaron con AlveoForge',
		'reviews.items': [
			{
				rating: 5,
				quote: 'Arquitectura hexagonal de verdad, no MVC con nombres de carpeta hexagonales. Nuestro equipo empezó en el dominio desde el día uno.',
				name: 'A. R.',
				role: 'CTO',
				company: 'Fintech · 200+ tablas',
			},
			{
				rating: 5,
				quote: 'Habíamos presupuestado ocho meses para la capa estructural. Tuvimos un backend listo para producción, tested, en días: un trimestre de runway recuperado.',
				name: 'M. K.',
				role: 'Engineering Lead',
				company: 'Scale-up B2B SaaS',
			},
			{
				rating: 5,
				quote: 'La cobertura en ramas aguantó nuestros propios casos límite. Determinista: auditamos una vez y reverificamos en cada build.',
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
			'Precio por proyecto, calculado sobre tu schema. Lo ves funcionando antes de pagar, y el primer pago es una señal, no el proyecto entero. La misma capa estructural, con un equipo interno, son meses.',

		'blog.eyebrow': 'Blog',
		'blog.title': 'Notas de AlveoForge',
		'blog.intro':
			'Análisis a fondo sobre arquitectura, determinismo y lo que hace falta para generar un backend que tu equipo pueda mantener durante años.',
		'blog.readMore': 'Leer más',
		'blog.back': '← Todas las entradas',
		'blog.backHome': '← Volver al inicio',
		'blog.published': 'Publicado',
		'blog.updated': 'Actualizado',
		'blog.empty': 'Aún no hay entradas — las primeras están en camino.',
		'blog.min': 'min de lectura',

		'changelog.eyebrow': 'Changelog',
		'changelog.title': 'Changelog del producto',
		'changelog.intro':
			'Novedades de AlveoForge: capacidades, rulings y fixes, lo más nuevo primero.',
		'changelog.back': '← Volver al inicio',
		'changelog.empty': 'Nada registrado todavía.',

		'demos.eyebrow': 'Demos en vivo',
		'demos.title': 'Míralo funcionando sobre schemas reales',
		'demos.intro':
			'Transparencia total. Cada demo es un backend generado real, funcionando en vivo. Prueba la API e inspecciona los artefactos exactos de tests y cobertura que hay detrás. Nada montado.',
		'demos.inspect':
			'En cada demo puedes inspeccionar: Swagger en vivo, informes de tests, cobertura JaCoCo, los ficheros crudos de tests y el dashboard de Allure.',
		'demos.note':
			'Las demos en vivo corren como monolito modular: un solo desplegable que exploras de punta a punta. El mismo schema también genera un layout de microservicios; lo ves en el walkthrough.',
		'demos.private':
			'Estas son nuestras demos públicas, sobre schemas abiertos. Las demos de cliente corren en subdominios privados con control de acceso, cada una compartida solo con ese cliente, y su schema se mantiene confidencial.',
		'demos.live': 'En vivo',
		'demos.soon': 'Próximamente',
		'demos.tables': 'tablas',
		'demos.swagger': 'Probar la API (Swagger)',
		'demos.video': 'Ver el run',
		'demos.sql': 'Schema (.sql)',
		'demos.reports': 'Informes de tests',
		'demos.coverage': 'Cobertura (JaCoCo)',
		'demos.allure': 'Dashboard Allure',
		'demos.raw': 'Ficheros crudos de tests',
		'demos.compose': 'Cómo se levanta',
		'demos.backHome': '← Volver al inicio',

		'footer.rights': 'AlveoForge. Todos los derechos reservados.',
		'footer.privacy':
			'Analíticas sin cookies. Tu schema y modelo de datos se tratan como confidenciales.',
		'footer.youtube': 'Canal de YouTube',
		'footer.onepager': 'One-pager',
		'footer.blog': 'Blog',
		'footer.changelog': 'Changelog',
		'footer.rss': 'RSS',
		'footer.linkedin': 'LinkedIn',
		'footer.demos': 'Demos',
		'footer.colProduct': 'Producto',
		'footer.colCompany': 'Compañía',
		'footer.colResources': 'Recursos',
		'footer.colLegal': 'Legal',
		'footer.colContact': 'Contacto',
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
				d: 'Usamos analítica de producto sin cookies (PostHog): sin cookies, sin rastreo entre sitios, sin identificadores persistentes y sin guardar nada en tu dispositivo, por lo que no requiere banner de consentimiento. Incluye grabación de sesión (registros de cómo se usan nuestras páginas, con todos los campos de formulario enmascarados) y seguimiento de errores (captura automática de errores en el navegador). Lo usamos solo para entender y mejorar la web; como no se guarda nada en tu dispositivo, las sesiones no se enlazan entre visitas.',
			},
			{
				t: 'Contacto y agenda',
				d: 'Si nos escribes o reservas una llamada, recibimos solo lo que decides compartir (tu nombre, email y lo que escribas) y lo usamos solo para responder y hablar de un posible proyecto. Nunca lo vendemos ni compartimos.',
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
