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
	/** Lista opcional bajo el párrafo (enumeraciones: capas, propiedades…). Texto plano, no código. */
	list?: { en: string[]; es: string[] };
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
			en: 'hexagonal architecture, ports and adapters, layered architecture, MVC, clean architecture, vertical slicing, modular monolith, Spring Modulith',
			es: 'arquitectura hexagonal, puertos y adaptadores, arquitectura en capas, MVC, clean architecture, vertical slicing, monolito modular, Spring Modulith',
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
				h: { en: 'What it costs at year three', es: 'Lo que cuesta al tercer año' },
				p: {
					en: 'When the domain imports JPA, Spring and the web, a change in any of them reaches into your business rules. You cannot unit-test a rule without booting the whole stack, a new column ripples outward, and onboarding means understanding everything at once. Layered architecture rarely fails in the design review; it fails at the 200th entity, under a deadline, when the coupling is already everywhere.',
					es: 'Cuando el dominio importa JPA, Spring y la web, un cambio en cualquiera de ellos alcanza tus reglas de negocio. No puedes testear una regla en unidad sin arrancar todo el stack, una columna nueva se propaga hacia fuera, y el onboarding significa entenderlo todo a la vez. La arquitectura en capas casi nunca falla en la revisión de diseño; falla en la entidad número 200, con una deadline encima, cuando el acoplamiento ya está por todas partes.',
				},
			},
			{
				h: { en: 'What hexagonal changes', es: 'Qué cambia hexagonal' },
				p: {
					en: 'Ports and adapters: the domain has zero framework dependencies, and the database, the framework and the delivery mechanism become swappable details behind ports. Each entity is one self-contained vertical slice:',
					es: 'Puertos y adaptadores: el dominio tiene cero dependencias de framework, y la base de datos, el framework y el mecanismo de entrega pasan a ser detalles intercambiables tras puertos. Cada entidad es un vertical slice autocontenido:',
				},
				list: {
					en: [
						'Domain — the entity and its rules, plain Java with no Spring, JPA or web imports. Testable in isolation.',
						'Application — the use cases, reaching the outside world only through ports (interfaces the domain owns).',
						'Infrastructure — the adapters behind those ports: persistence, the HTTP controller, messaging. Swappable without touching the core.',
					],
					es: [
						'Dominio — la entidad y sus reglas, Java plano sin imports de Spring, JPA ni web. Testeable en aislamiento.',
						'Aplicación — los casos de uso, que llegan al exterior solo a través de puertos (interfaces que posee el dominio).',
						'Infraestructura — los adaptadores tras esos puertos: persistencia, el controlador HTTP, la mensajería. Intercambiables sin tocar el núcleo.',
					],
				},
			},
			{
				h: { en: 'The boundary is enforced, not hoped for', es: 'La frontera se impone, no se espera' },
				p: {
					en: 'This is not a naming convention you hope people respect. ArchUnit rules ship inside the test suite and fail the build if the domain reaches for the framework, or a layer imports across a boundary it should not. The hexagon stays a hexagon, build after build.',
					es: 'Esto no es una convención de nombres que esperas que la gente respete. Reglas ArchUnit vienen dentro de la suite de tests y hacen fallar el build si el dominio tira del framework, o una capa importa a través de una frontera que no debería. El hexágono sigue siendo un hexágono, build tras build.',
				},
			},
			{
				h: { en: 'If you know Spring Modulith', es: 'Si conoces Spring Modulith' },
				p: {
					en: 'Same goal, reached a different way. Spring Modulith enforces module boundaries inside a monolith; here every entity is already a self-contained slice with the domain isolated, and ArchUnit keeps those boundaries honest in CI. The same modules ship as a modular monolith or as microservices, so you get the boundary discipline without committing to one runtime shape up front.',
					es: 'Mismo objetivo, por otro camino. Spring Modulith impone fronteras de módulo dentro de un monolito; aquí cada entidad ya es un slice autocontenido con el dominio aislado, y ArchUnit mantiene esas fronteras honestas en CI. Los mismos módulos se entregan como monolito modular o como microservicios, así que tienes la disciplina de fronteras sin comprometerte de antemano con una forma de ejecución.',
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
			en: 'Deterministic generation means the same schema produces the same code every time — auditable once, verifiable on every build. Why that matters for a structural layer you’ll maintain for years, and where AI can’t promise it.',
			es: 'La generación determinista significa que el mismo schema produce el mismo código siempre — auditable una vez, verificable en cada build. Por qué importa para una capa estructural que mantendrás años, y dónde la IA no puede prometerlo.',
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
					en: 'Same input, same output. You review the pattern once; from there, every entity is produced by that same pattern, not re-invented case by case, and you can check it. Re-run the same table and it regenerates identically, down to the byte, so the guarantee is something you verify, not something you take on faith.',
					es: 'Misma entrada, misma salida. Revisas el patrón una vez; a partir de ahí, cada entidad se produce con ese mismo patrón, no se reinventa caso por caso, y puedes comprobarlo. Vuelve a generar la misma tabla y sale idéntica, byte a byte, así que la garantía es algo que verificas, no algo en lo que confías a ciegas.',
				},
			},
			{
				h: { en: 'Generate twice, compare the tree', es: 'Genera dos veces y compara el árbol' },
				p: {
					en: 'The test for determinism is blunt: run the same schema through twice and diff the output. It comes back identical, down to file structure and ordering. That is what lets you review the pattern once instead of re-reviewing five hundred hand-written variations, and what makes a bug, once fixed, fixed for every future generation.',
					es: 'La prueba del determinismo es tosca: pasa el mismo schema dos veces y haz diff de la salida. Vuelve idéntica, hasta en la estructura de ficheros y el orden. Eso es lo que te deja revisar el patrón una vez en lugar de re-revisar quinientas variaciones hechas a mano, y lo que hace que un bug, una vez arreglado, quede arreglado para toda generación futura.',
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
			en: 'generated code with tests, test coverage, JaCoCo, test pyramid, Testcontainers, integration testing, end-to-end tests, mutation testing, ArchUnit',
			es: 'código generado con tests, cobertura de tests, JaCoCo, pirámide de tests, Testcontainers, tests de integración, tests end-to-end, mutation testing, ArchUnit',
		},
		intro: {
			en: '“Tested” is easy to claim and easy to fake with empty happy-path tests. Here it means a four-layer pyramid, success and error paths, and coverage you can inspect, measured with JaCoCo, not asserted in a slide.',
			es: '“Tested” es fácil de afirmar y fácil de falsear con tests vacíos de camino feliz. Aquí significa una pirámide de cuatro capas, caminos de éxito y error, y una cobertura que puedes inspeccionar, medida con JaCoCo, no afirmada en una diapositiva.',
		},
		blocks: [
			{
				h: { en: 'The four-layer test pyramid', es: 'La pirámide de tests de cuatro capas' },
				p: {
					en: 'Four layers, each its own Maven profile, each catching a different class of bug. From the base up:',
					es: 'Cuatro capas, cada una su propio perfil de Maven, cada una cazando una clase distinta de bug. De la base hacia arriba:',
				},
				list: {
					en: [
						'Unit — every class in isolation, its collaborators mocked. Fast and deterministic; catches logic and validation mistakes.',
						'Integration — the persistence adapters against a real PostgreSQL, MongoDB and Redis spun up with Testcontainers, not an in-memory stand-in; catches mapping, SQL and type mismatches.',
						'Component — the whole service booted on a random port and driven through its HTTP boundary; catches contract, status-code and validation errors.',
						'End-to-end — a full user journey with every collaborator real, including outbox propagation and email verification; catches the wiring between the parts.',
					],
					es: [
						'Unit — cada clase en aislamiento, con sus colaboradores mockeados. Rápido y determinista; caza errores de lógica y validación.',
						'Integration — los adaptadores de persistencia contra un PostgreSQL, MongoDB y Redis reales levantados con Testcontainers, no un sustituto en memoria; caza fallos de mapeo, SQL y tipos.',
						'Component — el servicio entero arrancado en un puerto aleatorio y manejado por su frontera HTTP; caza errores de contrato, códigos de estado y validación.',
						'End-to-end — un flujo de usuario completo con cada colaborador real, incluida la propagación por outbox y la verificación por email; caza el cableado entre las partes.',
					],
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
				h: { en: 'Proof the tests catch bugs', es: 'Prueba de que los tests cazan bugs' },
				p: {
					en: 'A line that runs is not the same as a line whose behaviour is checked, so the coverage number is pressure-tested with mutation testing (PIT): it injects faults into the code and requires a test to fail. A high line count with a low mutation score means the tests execute code without asserting it. Here the mutation score is held at 95%+.',
					es: 'Una línea que se ejecuta no es lo mismo que una línea cuyo comportamiento se comprueba, así que el número de cobertura se presiona con mutation testing (PIT): inyecta fallos en el código y exige que algún test falle. Un recuento de líneas alto con un mutation score bajo significa que los tests recorren el código sin asertarlo. Aquí el mutation score se mantiene en el 95%+.',
				},
			},
			{
				h: { en: 'The architecture is tested too', es: 'La arquitectura también se testea' },
				p: {
					en: 'The hexagon is not just a folder convention; it is verified. ArchUnit rules run inside the suite and fail the build if the domain reaches for the framework, or a layer imports something it should not. The structure cannot quietly rot into layered MVC wearing hexagonal folder names.',
					es: 'El hexágono no es solo una convención de carpetas; se verifica. Reglas ArchUnit corren dentro de la suite y hacen fallar el build si el dominio tira del framework, o una capa importa algo que no debería. La estructura no puede degradarse en silencio a un MVC en capas con nombres de carpeta hexagonales.',
				},
			},
			{
				h: { en: 'One query, not N+1', es: 'Una consulta, no N+1' },
				p: {
					en: 'Bulk and batch operations are held to a single round-trip. A create-many or a bulk update is one batched statement, never a loop of N+1 queries hidden behind a tidy API. It is a property the suite guards, not a hope.',
					es: 'Las operaciones en lote se mantienen en un único viaje a la base de datos. Un create-many o un update masivo es una sola sentencia por lotes, nunca un bucle de N+1 consultas escondido tras una API limpia. Es una propiedad que la suite vigila, no una esperanza.',
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
			en: 'Point AlveoForge at your PostgreSQL DDL and get a hexagonal, tested Spring Boot backend: versioned migrations, full SQL type coverage, CRUD plus batch and relationship expansion, modular monolith or microservices.',
			es: 'Apunta AlveoForge a tu DDL de PostgreSQL y obtén un backend Spring Boot hexagonal y tested: migraciones versionadas, cobertura completa de tipos SQL, CRUD más lote y expansión de relaciones, monolito modular o microservicios.',
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
				h: { en: 'From one table to a working slice', es: 'De una tabla a un slice que funciona' },
				p: {
					en: 'Each table becomes one self-contained vertical slice. From the table definition, AlveoForge generates and wires:',
					es: 'Cada tabla se convierte en un vertical slice autocontenido. A partir de la definición de la tabla, AlveoForge genera y cablea:',
				},
				list: {
					en: [
						'The domain model and its validation rules, from the columns, types and constraints.',
						'The persistence adapter and the versioned migration for the table.',
						'The use cases: CRUD, batch, reads (single, paged, by-ids) and relationship expansion.',
						'The HTTP controller, request and response DTOs, and the OpenAPI documentation.',
						'The tests for all of it, across the four-layer pyramid.',
					],
					es: [
						'El modelo de dominio y sus reglas de validación, a partir de las columnas, tipos y restricciones.',
						'El adaptador de persistencia y la migración versionada de la tabla.',
						'Los casos de uso: CRUD, lote, lecturas (individual, paginada, by-ids) y expansión de relaciones.',
						'El controlador HTTP, los DTOs de petición y respuesta, y la documentación OpenAPI.',
						'Los tests de todo ello, en la pirámide de cuatro capas.',
					],
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
					en: 'Full CRUD plus batch (create-many, bulk updates), reads single/paged/by-ids, and read-time relationship expansion (?expand=…) across slices, with no N+1 queries and no JPA object graph leaking across layers. Ship it as a modular monolith or as microservices (one Spring Boot app per module), from the same domain.',
					es: 'CRUD completo más lote (create-many, updates masivos), lecturas individual/paginada/by-ids, y expansión de relaciones al leer (?expand=…) entre slices, sin N+1 ni grafo JPA expuesto entre capas. Entrégalo como monolito modular o como microservicios (una app Spring Boot por módulo), desde el mismo dominio.',
				},
			},
		],
	},
];

export const conceptSlugs = concepts.map((c) => c.slug);

export function getConcept(slug: string): Concept | undefined {
	return concepts.find((c) => c.slug === slug);
}
