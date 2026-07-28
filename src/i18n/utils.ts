import { ui, defaultLang, languages } from "./ui";

// Idiomas soportados
export type SupportedLang = "es" | "en";

// Forma de las URLs (ÚNICA fuente de verdad, usada por páginas, sitemap,
// hreflang, Header, Footer y LanguagePicker):
//   - el idioma por defecto vive en la RAÍZ  → '/', '/privacy/'
//   - el resto llevan prefijo                → '/es/', '/es/privacy/'
// '/en/…' queda solo como redirección heredada (src/pages/en/).

/** Todos los locales declarados. */
export const locales = Object.keys(languages) as SupportedLang[];

/** Los que llevan prefijo en la URL: todos menos el idioma por defecto. */
export const prefixedLocales = locales.filter((l) => l !== defaultLang);

/** Prefijo de idioma al inicio de la ruta: /es, /fr… (nunca el por defecto). */
const LOCALE_PREFIX = new RegExp(`^/(${prefixedLocales.join("|")})(?=/|$)`);

export function getLangFromUrl(url: URL): SupportedLang {
  return (url.pathname.match(LOCALE_PREFIX)?.[1] as SupportedLang) ?? defaultLang;
}

/** Ruta sin el prefijo de idioma: '/es/privacy/' → '/privacy/', '/es' → '/'. */
export function stripLocale(pathname: string): string {
  return pathname.replace(LOCALE_PREFIX, "") || "/";
}

/** Ruta de `path` (ya sin prefijo) en `lang`: ('es', '/privacy/') → '/es/privacy/'. */
export function localePath(lang: SupportedLang, path = "/"): string {
  const prefix = lang === defaultLang ? "" : `/${lang}`;
  return `${prefix}${path}`.replace(/\/{2,}/g, "/") || "/";
}

// t(key) devuelve el tipo real del valor de esa clave (string, array de
// experiencia/proyectos, etc.), sin `any`: la KEY y el valor quedan tipados.
export function useTranslations(lang: SupportedLang) {
  return function t<K extends keyof (typeof ui)[typeof defaultLang]>(
    key: K
  ): (typeof ui)[typeof defaultLang][K] {
    return (ui[lang][key] ?? ui[defaultLang][key]) as (typeof ui)[typeof defaultLang][K];
  };
}
