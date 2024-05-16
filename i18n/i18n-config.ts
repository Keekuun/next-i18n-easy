export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "cs", 'zh'],
} as const;

export type Locale = (typeof i18n)["locales"][number];
