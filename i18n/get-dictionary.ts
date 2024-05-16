import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("@/i18n/dictionaries/en.json").then((module) => module.default),
  de: () => import("@/i18n/dictionaries/de.json").then((module) => module.default),
  cs: () => import("@/i18n/dictionaries/cs.json").then((module) => module.default),
  zh: () => import("@/i18n/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale, key?: string) => {
  const dictionary = await dictionaries[locale]?.() ?? await dictionaries.en();
  return key ? dictionary[key] : dictionary;
}

