import { Locale } from '@/i18n';

// Domain configuration
export const DOMAINS: Record<Locale, string> = {
  en: process.env.NEXT_PUBLIC_EN_DOMAIN || 'prohealthcalc.com',
  tr: process.env.NEXT_PUBLIC_TR_DOMAIN || 'saglikhesapla.com',
};

/**
 * Get locale from hostname
 */
export function getLocaleFromHostname(hostname: string): Locale {
  if (hostname.includes('prohealthcalc.com')) {
    return 'en';
  }
  // Default to Turkish for saglikhesapla.com or localhost
  return 'tr';
}

/**
 * Get domain for a specific locale
 */
export function getDomainForLocale(locale: Locale, includeProtocol = true): string {
  const domain = DOMAINS[locale];
  const protocol = includeProtocol ? (process.env.NODE_ENV === 'production' ? 'https://' : 'http://') : '';
  return `${protocol}${domain}`;
}

/**
 * Get alternate domain URL for language switching
 */
export function getAlternateDomainUrl(currentLocale: Locale, path = '/'): string {
  const alternateLocale: Locale = currentLocale === 'en' ? 'tr' : 'en';
  const domain = getDomainForLocale(alternateLocale);
  return `${domain}${path}`;
}

/**
 * Check if current domain matches the locale
 */
export function isDomainLocaleMatch(hostname: string, locale: Locale): boolean {
  const detectedLocale = getLocaleFromHostname(hostname);
  return detectedLocale === locale;
}
