export type Locale = (typeof locales)[number];

export const locales = ['en', 'de', 'fr', 'pt-PT'] as const;
export const defaultLocale: Locale = 'en';
