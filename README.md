# AlveoForge — landing

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build → dist/
```

## ⚠️ Before publish

- [ ] **Foto founder**: sustituir `public/me.webp`.
- [ ] **Vídeos**: hero (sección "video") y scale (dentro de "numbers") están como placeholder.
      No publicar la landing sin el vídeo hero real.
- [ ] **Reviews**: añadir testimonios reales (con permiso).
- [ ] **Analítica**: PostHog integrado (cookieless) como componente `src/components/Analytics.astro`.
      Plug & play: copia `.env.example` a `.env` y pon tu `PUBLIC_POSTHOG_KEY` (`phc_...`) y
      `PUBLIC_POSTHOG_HOST` (EU/US). Sin key válida no carga nada. No requiere tocar código.

## Estructura

- Contenido/copy (EN+ES): `src/i18n/ui.ts`
- Página: `src/pages/[lang]/index.astro` · Layout+SEO: `src/layouts/Layout.astro`
- Nav: `src/components/sections/Header.astro` · Footer: `src/components/sections/Footer.astro`
- Diseño (paleta ember/acero): `tailwind.config.mjs`
