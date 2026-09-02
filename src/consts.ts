// Enlaces externos de la landing (placeholders).
// Esta es la ÚNICA fuente de verdad.

// Dominio canónico (lo que se ve en el navegador y en Google).
// Astro.site → canonical, OG, sitemap. GitHub Pages + DNS en Cloudflare
// (nube gris), NO un redirect HTTP a github.io.
export const SITE_URL = 'https://alveoforge.com/';

export const CAL_URL = 'https://cal.com/alveoforge';
export const CONTACT_EMAIL = 'hello@alveoforge.com';
export const YOUTUBE_URL = 'https://www.youtube.com/@alveoforge';
export const LINKEDIN_URL = 'https://linkedin.com/in/alvaroguillengonzalez';
/** PDF en public/ — ruta absoluta desde la raíz del sitio. */
export const ONEPAGER_URL = '/alveoforge-onepager.pdf';

/** URL del walkthrough técnico (deep dive) de VideoDemo. Vacío = aún no grabado:
 *  la tarjeta se muestra en estado "próximamente", no como enlace muerto. Al
 *  publicar el vídeo, pon aquí su URL y la tarjeta pasa a ser un enlace real. */
export const WALKTHROUGH_URL = '';

/** Sello "Provisional until official launch" del hero (igual que la marca de
 *  agua del one-pager). Poner a false en el lanzamiento oficial: desaparece
 *  del build, no queda markup muerto. Los textos y la fecha viven en
 *  `hero.stamp.*` de src/i18n/ui.ts (uno por idioma). */
export const SHOW_PROVISIONAL_STAMP = true;
