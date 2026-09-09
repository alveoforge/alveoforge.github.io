import type { SupportedLang } from '@/i18n/utils';

// Copy de la página /for-agencies/ (canal agencias / consultoras), bilingüe.
// Mismo patrón que demos.ts / concepts.ts: el contenido rico vive en datos, no
// inline en el componente. SIN nombres de competidores y SIN código literal
// (la aritmética se pinta como diagrama de barras) — decisión de Álvaro.

export interface AgenciesCopy {
	metaTitle: string;
	metaDesc: string;
	eyebrow: string;
	h1: string;
	intro1: string;
	intro2: string;
	arithTitle: string;
	arithLead: string;
	barHandLabel: string;
	barHandUnit: string;
	barGenLabel: string;
	barGenUnit: string;
	barCaption: string;
	arith: { t: string; d: string }[];
	splitTitle: string;
	splitLead: string;
	youGetTitle: string;
	youGet: string[];
	yoursTitle: string;
	yours: string[];
	signTitle: string;
	sign1: string;
	sign2: string;
	priceTitle: string;
	price: string;
	seeTitle: string;
	see: string;
	seeCta: string;
	fitTitle: string;
	fit: string;
	ctaTitle: string;
	ctaText: string;
	ctaBtn: string;
	back: string;
}

export const agenciesCopy: Record<SupportedLang, AgenciesCopy> = {
	en: {
		metaTitle: 'Backend delivery for agencies and consultancies',
		metaDesc:
			"AlveoForge generates the structural layer of a Spring Boot backend from your client's SQL schema, so your agency delivers in weeks and keeps the high-margin work: domain, integrations and the client relationship.",
		eyebrow: 'For agencies & consultancies',
		h1: 'Win the project. Keep your team on the work that bills.',
		intro1:
			"AlveoForge turns your client's SQL schema into the structural layer of a Spring Boot backend: hexagonal architecture, persistence, migrations, authentication and a full test suite, generated the same way every time.",
		intro2:
			'You keep the domain, the integrations and the client. The structural layer that used to take a team months arrives in weeks.',
		arithTitle: 'The arithmetic that wins bids',
		arithLead: 'Compressing the structural layer from months to weeks changes two things at once.',
		barHandLabel: 'Structural layer, built by hand',
		barHandUnit: 'months',
		barGenLabel: 'Structural layer, generated',
		barGenUnit: 'weeks',
		barCaption:
			'Illustrative. The exact compression depends on the schema; what holds is the order of magnitude, and it favours a fixed-scope bid.',
		arith: [
			{
				t: 'You win the bid',
				d: 'A short delivery timeline beats a long one before price is even on the table. You can commit to a date the competition cannot.',
			},
			{
				t: 'You add capacity',
				d: 'The same team ships more projects a year, without hiring. Capacity stops being the ceiling on your business.',
			},
		],
		splitTitle: 'Where the work goes',
		splitLead:
			'We take the repetitive, high-consequence layer. You keep the part that has to know your client.',
		youGetTitle: 'What AlveoForge delivers',
		youGet: [
			'Hexagonal architecture with vertical slicing',
			'Persistence across PostgreSQL, MongoDB and Redis, with a transactional outbox',
			'Versioned migrations (Flyway or Liquibase), brownfield adoption included',
			'Full CRUD, bulk operations and relationship expansion',
			'JWT authentication with refresh tokens',
			'A four-layer test suite (unit to e2e), 95–100% coverage',
			'Architecture enforced with ArchUnit, verified with mutation testing',
		],
		yoursTitle: 'What stays yours',
		yours: [
			'The domain and the business rules',
			'Third-party integrations',
			'Authorization and access policy',
			'The product and UX decisions',
			'The client relationship, and the margin that comes with it',
		],
		signTitle: 'Code you can put your name on',
		sign1:
			'Because it is generated the same way every time and ships with its own tests, you review the pattern once and can verify every entity follows it. You can defend it in a client review and maintain it for years.',
		sign2:
			'A new engineer opens a module and follows it without a guided tour. For a team that rotates people across projects, that is an operational requirement, not a nice-to-have.',
		priceTitle: 'A cost you can quote on',
		price:
			'Pricing is per project and scales with the size and complexity of the schema, not by the hour. Fixed input, fixed structural output: you quote your client with a known number underneath, and the first payment is a down-payment, not the whole project.',
		seeTitle: 'Show your client before anyone commits',
		see:
			'Every demo exposes the real artifacts behind the claim: live Swagger, coverage reports, the test dashboard and the raw test files. Put a running backend in front of your client instead of a slide.',
		seeCta: 'See a backend running',
		fitTitle: 'Is this a fit?',
		fit:
			'This works for agencies that price by outcome or fixed scope. If your model is purely hours billed, generating the structural layer works against your economics, and we will say so on the first call.',
		ctaTitle: "Let's talk about a partnership",
		ctaText: "Tell us the shape of your projects and we'll show you where AlveoForge fits.",
		ctaBtn: 'Book a call',
		back: '← Back to home',
	},
	es: {
		metaTitle: 'Entrega de backend para agencias y consultoras',
		metaDesc:
			'AlveoForge genera la capa estructural de un backend Spring Boot desde el schema SQL de tu cliente, para que tu agencia entregue en semanas y se quede el trabajo de alto margen: dominio, integraciones y la relación con el cliente.',
		eyebrow: 'Para agencias y consultoras',
		h1: 'Gana el proyecto. Mantén a tu equipo en lo que factura.',
		intro1:
			'AlveoForge convierte el schema SQL de tu cliente en la capa estructural de un backend Spring Boot: arquitectura hexagonal, persistencia, migraciones, autenticación y una suite de tests completa, generada igual siempre.',
		intro2:
			'Tú te quedas el dominio, las integraciones y el cliente. La capa estructural que antes le costaba meses a un equipo llega en semanas.',
		arithTitle: 'La aritmética que gana concursos',
		arithLead: 'Comprimir la capa estructural de meses a semanas cambia dos cosas a la vez.',
		barHandLabel: 'Capa estructural, a mano',
		barHandUnit: 'meses',
		barGenLabel: 'Capa estructural, generada',
		barGenUnit: 'semanas',
		barCaption:
			'Ilustrativo. La compresión exacta depende del schema; lo que se mantiene es el orden de magnitud, y favorece una oferta a alcance cerrado.',
		arith: [
			{
				t: 'Ganas el concurso',
				d: 'Un plazo de entrega corto gana a uno largo antes incluso de hablar de precio. Puedes comprometer una fecha que la competencia no puede.',
			},
			{
				t: 'Sumas capacidad',
				d: 'El mismo equipo entrega más proyectos al año, sin contratar. La capacidad deja de ser el techo de tu negocio.',
			},
		],
		splitTitle: 'Dónde va el trabajo',
		splitLead:
			'Nosotros nos ocupamos de la capa repetitiva y de alta consecuencia. Tú te quedas la parte que tiene que conocer a tu cliente.',
		youGetTitle: 'Qué entrega AlveoForge',
		youGet: [
			'Arquitectura hexagonal con vertical slicing',
			'Persistencia en PostgreSQL, MongoDB y Redis, con outbox transaccional',
			'Migraciones versionadas (Flyway o Liquibase), con adopción brownfield',
			'CRUD completo, operaciones en lote y expansión de relaciones',
			'Autenticación JWT con refresh tokens',
			'Suite de tests de cuatro capas (unit a e2e), 95–100% de cobertura',
			'Arquitectura verificada con ArchUnit y comprobada con mutation testing',
		],
		yoursTitle: 'Qué se queda tuyo',
		yours: [
			'El dominio y las reglas de negocio',
			'Las integraciones con terceros',
			'La autorización y la política de acceso',
			'Las decisiones de producto y UX',
			'La relación con el cliente, y el margen que trae',
		],
		signTitle: 'Código que puedes firmar con tu nombre',
		sign1:
			'Como se genera igual siempre y trae sus propios tests, auditas el patrón una vez y puedes comprobar que cada entidad lo sigue. Puedes defenderlo en una revisión con el cliente y mantenerlo años.',
		sign2:
			'Un desarrollador nuevo abre un módulo y lo sigue sin visita guiada. Para un equipo que rota gente entre proyectos, eso es un requisito operativo, no un extra.',
		priceTitle: 'Un coste sobre el que puedes cotizar',
		price:
			'El precio es por proyecto y escala con el tamaño y la complejidad del schema, no por horas. Entrada fija, salida estructural fija: cotizas a tu cliente con un número conocido debajo, y el primer pago es una señal, no el proyecto entero.',
		seeTitle: 'Enséñaselo a tu cliente antes de comprometer nada',
		see:
			'Cada demo expone los artefactos reales tras la afirmación: Swagger en vivo, informes de cobertura, el dashboard de tests y los ficheros de tests crudos. Pon un backend en marcha delante de tu cliente en lugar de una diapositiva.',
		seeCta: 'Ver un backend en marcha',
		fitTitle: '¿Encaja?',
		fit:
			'Funciona para agencias que cotizan por resultado o a alcance cerrado. Si tu modelo es puramente horas facturadas, generar la capa estructural va en contra de tu economía, y te lo diremos en la primera llamada.',
		ctaTitle: 'Hablemos de una colaboración',
		ctaText: 'Cuéntanos la forma de tus proyectos y te enseñamos dónde encaja AlveoForge.',
		ctaBtn: 'Agenda una llamada',
		back: '← Volver al inicio',
	},
};
