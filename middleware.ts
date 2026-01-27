import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Domain-based locale detection
  let defaultLocale: 'en' | 'tr' = 'tr';

  if (hostname.includes('prohealthcalc.com')) {
    defaultLocale = 'en';
  } else if (hostname.includes('saglikhesapla.com')) {
    defaultLocale = 'tr';
  }

  // Create middleware with domain-specific default locale
  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale,
    localePrefix: 'never', // Don't show locale in URL
  });

  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
