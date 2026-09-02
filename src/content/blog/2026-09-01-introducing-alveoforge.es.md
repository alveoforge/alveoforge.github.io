---
title: 'Lo que un generador de backends no puede hacer por ti'
description: 'Por qué dediqué 11 meses a convertir arquitectura hexagonal real en una fábrica determinista, y qué hace exactamente y qué no.'
lang: es
urlSlug: what-a-backend-generator-cant-do
date: 2026-09-01
tags: [hexagonal, java, spring-boot, arquitectura]
draft: false
---

Vi a un equipo congelarse casi un año.

No porque fueran lentos. Porque estaban haciendo lo correcto.

El backend funcionaba, pero no tenía arquitectura real. Reescribirlo bien significaba parar el desarrollo de features casi un año, mientras los clientes querían cosas nuevas _ya_. Ningún negocio puede permitirse parar tanto. Así que casi ninguno lo hace: siguen apilando features sobre una base que se pudre en silencio, hasta el acoplamiento que años después nadie es capaz de desenredar.

No podía dejar de pensar en ese dilema. Así que los últimos 11 meses los he dedicado a construir lo que lo elimina. Hoy sale del taller.

## La parte más cara de un backend no es la lógica de negocio

Antes de una sola regla de negocio, se van semanas o meses en el mismo trabajo en todos los proyectos: montar la arquitectura, hacer scaffolding de cada entidad en cada capa, y construir la base de tests. Poco glamuroso, idéntico de un proyecto a otro, y justo la parte que se pudre en acoplamiento oculto bajo una deadline.

Esa capa estructural es la que cualquier equipo paga igual. Y es también la parte que una fábrica puede producir **correcta e idéntica, siempre**. Es lo que es AlveoForge.

## Qué hace AlveoForge

Le das tu schema SQL. Te devuelve un backend Java (Spring Boot 4.1) listo para producción: hexagonal de verdad, con vertical slicing, 95-100% testeado, en horas, no meses.

Para **cada entidad** genera y verifica comportamiento real:

- **Ports & adapters hexagonales de verdad**, un vertical slice autocontenido por entidad, con el dominio aislado de la base de datos, el framework y el delivery.
- **CRUD completo más lote**: create, read (individual, paginado, by-ids), update, delete, create-many y updates masivos, cada uno validado y tested.
- **Expand de relaciones al leer** (`?expand=…`) entre slices, sin consultas N+1 ni exponer un grafo JPA entre capas.
- **Dos motores de migración**: Flyway o Liquibase, con paridad, o lo apuntas a tu base de datos de producción existente y se adapta (brownfield). Tu DDL es la fuente única de verdad; sin deriva de esquema.
- **El contrato HTTP completo, testeado**: éxito _y_ fallo, 200 y también 400 validación, 401 auth, 404 y 415. En las tres capas + end-to-end.
- **Identidad**: entidad de login real, hash de contraseña en el borde de persistencia, JWT (en proceso o HTTP entre servicios), almacenamiento de refresh-tokens.
- **Persistencia multi-store**: PostgreSQL, MongoDB opcional, caché Redis, outbox transaccional.

Despliega el mismo schema como monolito modular o como microservicios: a tu elección, sin reescritura.

## Qué NO hace

La confianza vive en la línea, así que déjame trazarla con honestidad:

- **No escribe tu lógica de negocio.** Tus reglas de dominio y casos límite son tuyos; no puede saberlos, y no debería.
- **No hace autorización por fila.** Quién puede ver qué registro es una decisión de negocio; tus políticas van encima.
- **No hace tus integraciones con terceros.** Tu pasarela de pago, tus APIs externas: eso lo cablea tu equipo.
- **No te entrega la fábrica.** Recibes el output: código 100% tuyo que puedes mantener sin mí. El generador se queda conmigo.

Lo que queda es la capa estructural: el esqueleto hexagonal, cada entidad en cada capa, la base de tests. La parte que hago correcta, testeada e idéntica siempre. Ni más, ni menos.

## Determinista, no probabilística

Pídele a una IA arquitectura hexagonal y, sin supervisión, deriva al MVC en capas que aprendió del código público. Parece hexagonal. Compila. Pasa la review si nadie mira con lupa. Y tres años después es justo el acoplamiento que querías evitar.

Lo difícil de hexagonal no es el diagrama; cualquier senior sabe dibujar el hexágono. Lo difícil es aplicarlo **de forma consistente**, en cada entidad y cada capa, durante meses, sin una sola desviación. Las arquitecturas no mueren en el diseño; mueren en la entidad número 200, a las 6 de la tarde, con una deadline encima.

Eso es un problema de determinismo, no de inteligencia. Una fábrica determinista produce la misma estructura siempre: la auditas una vez y confías en cada build; un bug encontrado una vez queda arreglado para toda generación futura. Las convenciones no se fuerzan esperando que la code review pille la desviación. Son estructurales.

## Míralo antes de pagar

Soy su primer usuario, validado en un schema real de más de 300 tablas. Y no tienes que creerme: obtienes una instancia en vivo y la API completa en Swagger, cada endpoint testeable, **antes de que cambie de manos un solo euro**.

Si lideras un equipo de backend, llevas una agencia que monta backends a medida, o vas a arrancar un backend Java nuevo desde un schema real — [hablemos](/es/). Me encantaría tu feedback, el crítico incluido.
