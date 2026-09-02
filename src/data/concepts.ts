// Páginas de concepto (los "radios" del modelo hub-y-radios). La home sigue
// siendo el relato completo; cada concepto es una URL profunda que rankea por SU
// consulta y enlaza de vuelta a la home y a sus hermanos. Neutras (sin nombrar
// lenguaje) salvo la de framework, que sí lo nombra a propósito.
//
// Añadir un radio = añadir un objeto aquí + dos ficheros de ruta
// (src/pages/<slug>.astro y src/pages/[lang]/<slug>.astro) + la ruta en
// src/pages/sitemap.xml.ts (PAGES) y en el Footer.

export interface ConceptBlock {
	h: { en: string; es: string };
	p: { en: string; es: string };
}

export interface Concept {
	slug: string;
	/** Etiqueta corta para índices/nav (footer, índice de conceptos, prev/next). */
	short: { en: string; es: string };
	eyebrow: { en: string; es: string };
	/** Sirve de H1 y de <title> (con sufijo de marca). Contiene la consulta objetivo. */
	title: { en: string; es: string };
	description: { en: string; es: string };
	keywords: { en: string; es: string };
	intro: { en: string; es: string };
	blocks: ConceptBlock[];
}

export const concepts: Concept[] = [
	{
		slug: 'hexagonal-vs-layered',
		short: { en: 'Hexagonal vs layered', es: 'Hexagonal vs en capas' },
		eyebrow: { en: 'Architecture', es: 'Arquitectura' },
		title: {
			en: 'Hexagonal vs layered architecture',
			es: 'Arquitectura hexagonal vs en capas',
		},
		description: {
			en: 'Hexagonal (ports & adapters) vs layered/MVC: what the difference actually costs you three years in, and why generated code usually drifts to layered CRUD.',
			es: 'Hexagonal (puertos y adaptadores) vs en capas/MVC: qué cuesta de verdad la diferencia tres años después, y por qué el código generado suele derivar a CRUD por capas.',
		},
		keywords: {
			en: 'hexagonal architecture, ports and adapters, layered architecture, MVC, clean architecture, vertical slicing',
			es: 'arquitectura hexagonal, puertos y adaptadores, arquitectura en capas, MVC, clean architecture, vertical slicing',
		},
		intro: {
			en: 'Both compile. Both ship. The difference doesn’t show on day one. It shows on year three, when the business logic is welded to the framework and the database and nobody can change one without breaking the others.',
			es: 'Las dos compilan. Las dos entregan. La diferencia no se ve el día uno. Se ve el año tres, cuando la lógica de negocio está soldada al framework y a la base de datos y nadie puede cambiar una sin romper las otras.',
		},
		blocks: [
			{
				h: { en: 'What “layered” gives you', es: 'Qué te da “en capas”' },
				p: {
					en: 'Controllers, services, repositories: fast to start, familiar to everyone. But the domain ends up importing JPA, Spring and the web layer, so your business rules can’t be tested, reused or reasoned about without the whole stack around them.',
					es: 'Controladores, servicios, repositorios: rápido de arrancar y familiar. Pero el dominio acaba importando JPA, Spring y la capa web, así que tus reglas de negocio no se pueden testear, reutilizar ni razonar sin todo el stack alrededor.',
				},
			},
			{
				h: { en: 'What hexagonal changes', es: 'Qué cambia hexagonal' },
				p: {
					en: 'Ports and adapters: the domain has zero framework dependencies, and the database, the framework and the delivery mechanism become swappable details behind ports. The business logic is the stable core; everything else plugs into it.',
					es: 'Puertos y adaptadores: el dominio tiene cero dependencias de framework, y la base de datos, el framework y el mecanismo de entrega pasan a ser detalles intercambiables tras puertos. La lógica de negocio es el núcleo estable; todo lo demás se enchufa a ella.',
				},
			},
			{
				h: {
					en: 'Why generators usually produce layered CRUD',
					es: 'Por qué los generadores suelen producir CRUD por capas',
				},
				p: {
					en: 'Because it’s the path of least resistance, and AI-assisted teams drift toward it under deadline pressure. AlveoForge does the opposite by construction: real hexagonal with vertical slicing, the same way every time, so the architecture can’t quietly rot into MVC with hexagonal folder names.',
					es: 'Porque es el camino de menor resistencia, y los equipos asistidos por IA derivan a él bajo presión de plazos. AlveoForge hace lo contrario por construcción: hexagonal real con vertical slicing, igual siempre, así la arquitectura no puede degradarse en silencio a MVC con nombres de carpeta hexagonales.',
				},
			},
		],
	},
	{
		slug: 'deterministic-vs-ai',
		short: { en: 'Deterministic vs AI', es: 'Determinista vs IA' },
		eyebrow: { en: 'Method', es: 'Método' },
		title: {
			en: 'Deterministic code generation vs AI',
			es: 'Generación de código determinista vs IA',
		},
		description: {
			en: 'Deterministic generation means the same schema produces the same code every time — auditable once, trusted on every build. Why that matters for a structural layer you’ll maintain for years, and where AI can’t promise it.',
			es: 'La generación determinista significa que el mismo schema produce el mismo código siempre — auditable una vez, fiable en cada build. Por qué importa para una capa estructural que mantendrás años, y dónde la IA no puede prometerlo.',
		},
		keywords: {
			en: 'deterministic code generation, ai code generation, reproducible output, template-based generation, code generator',
			es: 'generación de código determinista, generación de código con ia, salida reproducible, generación por plantillas',
		},
		intro: {
			en: 'The same schema, run through AlveoForge, produces the same code, every time, down to the structure. That reproducibility is the whole point, and it’s exactly what an LLM can’t guarantee even once.',
			es: 'El mismo schema, pasado por AlveoForge, produce el mismo código, siempre, hasta en la estructura. Esa reproducibilidad es el objetivo, y es justo lo que un LLM no puede garantizar ni una vez.',
		},
		blocks: [
			{
				h: { en: 'What “deterministic” means here', es: 'Qué significa “determinista” aquí' },
				p: {
					en: 'Same input, same output. You audit the pattern once and then trust every entity generated from it, because they’re all produced the same way, not re-invented case by case.',
					es: 'Misma entrada, misma salida. Auditas el patrón una vez y luego confías en cada entidad generada a partir de él, porque todas se producen igual, no se reinventan caso por caso.',
				},
			},
			{
				h: { en: 'Where AI generation breaks down', es: 'Dónde falla la generación con IA' },
				p: {
					en: 'It’s non-reproducible, it drifts between runs, it invents APIs that don’t exist, and it can’t promise the architecture holds across a thousand tables. Fine for exploring; unsafe as the structural layer of a system you’ll live with for years.',
					es: 'No es reproducible, deriva entre ejecuciones, inventa APIs que no existen y no puede prometer que la arquitectura aguante en mil tablas. Bien para explorar; inseguro como capa estructural de un sistema con el que vivirás años.',
				},
			},
			{
				h: { en: 'The honest tradeoff', es: 'El equilibrio honesto' },
				p: {
					en: 'AI is genuinely good for exploring business logic, and your team keeps that. AlveoForge deliberately owns the part where determinism wins: the repetitive, high-consequence structural layer that has to be identical everywhere.',
					es: 'La IA es genuinamente buena para explorar lógica de negocio, y eso se lo queda tu equipo. AlveoForge se ocupa a propósito de la parte donde gana el determinismo: la capa estructural repetitiva y de alta consecuencia que tiene que ser idéntica en todas partes.',
				},
			},
		],
	},
	{
		slug: 'testing',
		short: { en: 'Testing', es: 'Testing' },
		eyebrow: { en: 'Quality', es: 'Calidad' },
		title: {
			en: 'Generated code that ships real tests',
			es: 'Código generado que trae tests de verdad',
		},
		description: {
			en: '95–100% coverage measured with JaCoCo across a four-layer test pyramid plus end-to-end: success and error paths, not empty happy-path tests. How the suite is structured and how to inspect it.',
			es: 'Cobertura 95–100% medida con JaCoCo en una pirámide de cuatro capas más end-to-end: caminos de éxito y error, no tests vacíos de camino feliz. Cómo está estructurada la suite y cómo inspeccionarla.',
		},
		keywords: {
			en: 'generated code with tests, test coverage, JaCoCo, test pyramid, Testcontainers, integration testing, end-to-end tests',
			es: 'código generado con tests, cobertura de tests, JaCoCo, pirámide de tests, Testcontainers, tests de integración, tests end-to-end',
		},
		intro: {
			en: '“Tested” is easy to claim and easy to fake with empty happy-path tests. Here it means a four-layer pyramid, success and error paths, and coverage you can inspect, measured with JaCoCo, not asserted in a slide.',
			es: '“Tested” es fácil de afirmar y fácil de falsear con tests vacíos de camino feliz. Aquí significa una pirámide de cuatro capas, caminos de éxito y error, y una cobertura que puedes inspeccionar, medida con JaCoCo, no afirmada en una diapositiva.',
		},
		blocks: [
			{
				h: { en: 'The four-layer test pyramid', es: 'La pirámide de tests de cuatro capas' },
				p: {
					en: 'Unit (every class in isolation, collaborators mocked), integration (persistence adapters against real PostgreSQL/MongoDB/Redis via Testcontainers), component (the whole service driven through its HTTP boundary), and end-to-end (a full user journey with every collaborator real). Each is its own Maven profile.',
					es: 'Unit (cada clase en aislamiento, colaboradores mockeados), integration (adaptadores de persistencia contra PostgreSQL/MongoDB/Redis reales vía Testcontainers), component (el servicio entero manejado por su frontera HTTP) y end-to-end (un flujo de usuario completo con cada colaborador real). Cada una es su propio perfil de Maven.',
				},
			},
			{
				h: { en: 'Coverage, measured not claimed', es: 'Cobertura medida, no afirmada' },
				p: {
					en: 'Methods, lines and branches, measured with JaCoCo. Every path executed and asserted, not just run. Error paths too: 400, 401, 404, 415, not only the 200. There’s deliberately no consumer-contract layer, because the OpenAPI/Swagger spec is the contract and the component layer verifies it.',
					es: 'Métodos, líneas y ramas, medido con JaCoCo. Cada camino ejecutado y aserto, no solo recorrido. Los caminos de error también: 400, 401, 404, 415, no solo el 200. No hay, a propósito, capa de contract de consumidor, porque el spec OpenAPI/Swagger es el contrato y la capa component lo verifica.',
				},
			},
			{
				h: { en: 'Inspect it yourself', es: 'Inspecciónalo tú mismo' },
				p: {
					en: 'Every demo exposes the real artifacts behind the number: live Swagger, the Allure dashboard, JaCoCo coverage and the raw test files. The coverage stops being a claim and becomes something you can open.',
					es: 'Cada demo expone los artefactos reales tras el número: Swagger en vivo, el dashboard de Allure, la cobertura JaCoCo y los ficheros de tests crudos. La cobertura deja de ser una afirmación y pasa a ser algo que puedes abrir.',
				},
			},
		],
	},
	{
		slug: 'sql-to-spring-boot',
		short: { en: 'SQL → Spring Boot', es: 'SQL → Spring Boot' },
		eyebrow: { en: 'From SQL to backend', es: 'De SQL a backend' },
		title: {
			en: 'Generate a Spring Boot backend from your SQL schema',
			es: 'Genera un backend Spring Boot desde tu schema SQL',
		},
		description: {
			en: 'Point AlveoForge at your PostgreSQL DDL and get a hexagonal, tested Spring Boot backend: versioned migrations, full SQL type coverage, CRUD plus batch and relationship expansion, monolith or microservices.',
			es: 'Apunta AlveoForge a tu DDL de PostgreSQL y obtén un backend Spring Boot hexagonal y tested: migraciones versionadas, cobertura completa de tipos SQL, CRUD más lote y expansión de relaciones, monolito o microservicios.',
		},
		keywords: {
			en: 'generate spring boot backend from sql, sql schema to spring boot, postgresql to java api, database to rest api, spring boot generator',
			es: 'generar backend spring boot desde sql, schema sql a spring boot, postgresql a api java, base de datos a api rest',
		},
		intro: {
			en: 'Your database schema already encodes most of the structural decisions. AlveoForge reads your DDL and turns it into a production-ready Spring Boot backend (hexagonal, tested, runnable) in hours, without you hand-writing the same layer for every table.',
			es: 'Tu schema de base de datos ya codifica la mayoría de las decisiones estructurales. AlveoForge lee tu DDL y lo convierte en un backend Spring Boot listo para producción (hexagonal, tested, ejecutable) en horas, sin que escribas a mano la misma capa para cada tabla.',
		},
		blocks: [
			{
				h: { en: 'Your DDL is the source of truth', es: 'Tu DDL es la fuente de verdad' },
				p: {
					en: 'The schema is emitted as a versioned migration (Flyway or Liquibase, both wired with parity), or pointed at an existing production database (brownfield) without rebuilding it. Hibernate runs in validate mode, so entities are checked against the real schema at boot.',
					es: 'El schema se emite como migración versionada (Flyway o Liquibase, ambos cableados con paridad), o se apunta a una base de datos de producción existente (brownfield) sin reconstruirla. Hibernate corre en modo validate, así que las entidades se validan contra el schema real al arrancar.',
				},
			},
			{
				h: { en: 'Full SQL type coverage', es: 'Cobertura completa de tipos SQL' },
				p: {
					en: 'Arrays, enums, JSONB, UUID, the date/time family, numeric precision, bytea, varchar length validation, composite and foreign keys, plus table inheritance and declarative partitioning. An unrecognized type never fails the build: it falls back to a safe default your team can refine.',
					es: 'Arrays, enums, JSONB, UUID, la familia de fecha/hora, precisión numérica, bytea, validación de longitud varchar, claves compuestas y foráneas, más herencia de tablas y particiones declarativas. Un tipo no reconocido nunca rompe el build: cae a un valor seguro por defecto que tu equipo puede afinar.',
				},
			},
			{
				h: { en: 'What each entity gets', es: 'Qué recibe cada entidad' },
				p: {
					en: 'Full CRUD plus batch (create-many, bulk updates), reads single/paged/by-ids, and read-time relationship expansion (?expand=…) across slices, with no N+1 queries and no JPA object graph leaking across layers. Ship it as a modular monolith or one Spring Boot app per module, from the same domain.',
					es: 'CRUD completo más lote (create-many, updates masivos), lecturas individual/paginada/by-ids, y expansión de relaciones al leer (?expand=…) entre slices, sin N+1 ni grafo JPA expuesto entre capas. Entrégalo como monolito modular o una app Spring Boot por módulo, desde el mismo dominio.',
				},
			},
		],
	},
];

export const conceptSlugs = concepts.map((c) => c.slug);

export function getConcept(slug: string): Concept | undefined {
	return concepts.find((c) => c.slug === slug);
}
