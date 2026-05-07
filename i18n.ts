import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

// Get locale from hostname (for domain-based routing)
export function getLocaleFromHostname(hostname: string): Locale {
  if (hostname.includes('prohealthcalc.com')) {
    return 'en';
  }
  return 'tr'; // saglikhesapla.com or localhost default
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
