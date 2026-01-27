import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'tr'],
  defaultLocale: 'tr',
  localePrefix: 'always', // We'll handle URL rewriting in middleware
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

// Domain configuration
export const DOMAIN_CONFIG = {
  en: 'prohealthcalc.com',
  tr: 'saglikhesapla.com',
} as const;
