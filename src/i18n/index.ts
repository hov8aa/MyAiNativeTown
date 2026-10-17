import en from "./en";
import hi from "./hi";

// Hindi is the default: it lives at "/", English at "/en/" (see astro.config.mjs).
export const languages = { hi: "हिन्दी", en: "English" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "hi";

const copies = { hi, en };

export function langFrom(locale: string | undefined): Lang {
  return locale && locale in copies ? (locale as Lang) : defaultLang;
}

export function copyFor(locale: string | undefined) {
  return copies[langFrom(locale)];
}

export function pathFor(lang: Lang) {
  return lang === defaultLang ? "/" : `/${lang}/`;
}
