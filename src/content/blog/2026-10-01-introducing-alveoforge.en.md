---
title: "What a backend generator can't do for you"
description: "Why I spent 14 months turning real hexagonal architecture into a deterministic factory, and exactly what it does and doesn't do."
lang: en
urlSlug: what-a-backend-generator-cant-do
date: 2026-10-01
tags: [hexagonal, java, spring-boot, architecture]
draft: false
---

I once watched a team freeze for almost a year.

Not because they were slow. Because they were doing the right thing.

The backend worked, but it had no real architecture. Rewriting it properly meant stopping feature work for the better part of a year, while clients wanted new things _now_. No business can afford to stop that long. So most don't: they keep stacking features on a foundation that quietly rots into coupling nobody can untangle three years later.

I couldn't stop thinking about that tradeoff. So for the last 14 months I’ve been building the thing that removes it. Today it leaves the workshop.

## The most expensive part of a backend isn't the business logic

Before a single business rule, weeks-to-months go into the same work on every project: setting up the architecture, scaffolding every entity across every layer, and building the test foundation. It's unglamorous, it's identical from project to project, and it's exactly the part that silently decays into hidden coupling under a deadline.

That structural layer is what any team pays for either way. It's also the part a factory can produce **correctly and identically, every time**. That's what AlveoForge is.

## What AlveoForge does

You give it your SQL schema. It gives back a production-ready Java (Spring Boot 4.1) backend: real hexagonal architecture, vertical slicing, 95–100% tested, in hours, not months.

For **every entity**, it generates and verifies real behaviour:

- **Real hexagonal ports & adapters**, one self-contained vertical slice per entity, with the domain isolated from database, framework and delivery.
- **Full CRUD plus batch**: create, read (single, paged, by-ids), update, delete, create-many and bulk updates, each one validated and tested.
- **Relationship expansion on read** (`?expand=…`) across slices, without N+1 queries or leaking a JPA object graph across layers.
- **Both migration engines**: Flyway or Liquibase, with parity, or point it at your existing production database and it adapts (brownfield). Your DDL is the single source of truth; no schema drift.
- **The full HTTP contract, tested**: success _and_ failure, 200s plus 400 validation, 401 auth, 404 and 415. Across the four-layer test pyramid, from unit to end-to-end.
- **Identity**: a real login entity, password hashing at the persistence edge, JWT (in-process or service-to-service HTTP), refresh-token storage.
- **Multi-store persistence**: PostgreSQL, optional MongoDB, Redis cache, transactional outbox.

Deploy the same schema as a modular monolith or as microservices: your choice, no rewrite.

## What it does NOT do

Trust lives on the line, so let me draw it honestly:

- It **doesn't write your business logic.** Your domain rules and edge cases are yours; it can't know them, and it shouldn't.
- It **doesn't do row-level authorization.** Who may see which record is a business decision; your policies go on top.
- It **doesn't do your third-party integrations.** Your payment provider, your external APIs: your team wires those.
- It **doesn't hand you the factory.** You get the output: code you fully own and can maintain without me. The generator stays proprietary.

What's left is the structural layer: the hexagonal skeleton, every entity across every layer, the test foundation. The part I make correct, tested, and identical every time. Not more, not less.

## Deterministic, not probabilistic

Ask an AI for hexagonal architecture and, unsupervised, it drifts back to the layered MVC it learned from public code. It looks hexagonal. It compiles. It passes review if nobody looks hard. And three years later it's the exact coupling you were trying to avoid.

The hard thing about hexagonal isn't the diagram; every senior can draw the hexagon. The hard thing is applying it **consistently**, across every entity and every layer, for months, without a single drift. Architectures don't die in the design; they die at the 200th entity, at 6pm, under a deadline.

That's a determinism problem, not an intelligence problem. A deterministic factory produces the same structure every time: audit it once, verify every build; a bug found once is fixed for every future generation. The conventions aren't enforced by hoping code review catches the drift. They're structural.

## See it before you pay

I'm its first user, validated on a real 300+ table schema. And you don't have to take my word for it: you get a live instance and the full API in Swagger, every endpoint testable, **before a single euro changes hands**.

If you lead a backend team, run an agency that builds custom backends, or you're about to start a new Java backend from a real schema — [let's talk](/). I'd genuinely love your feedback, the sharp kind included.
