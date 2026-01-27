import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';
import { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Debug: Log hostname (remove after testing)
  console.log('🌐 Hostname:', hostname);

  // Domain-based locale detection
  let defaultLocale: 'en' | 'tr' = 'tr';

  // Check for prohealthcalc.com (with or without www)
  if (hostname.includes('prohealthcalc')) {
    defaultLocale = 'en';
    console.log('✅ English domain detected');
  }
  // Check for saglikhesapla.com (with or without www)
  else if (hostname.includes('saglikhesapla')) {
    defaultLocale = 'tr';
    console.log('✅ Turkish domain detected');
  }
  // Fallback to Turkish
  else {
    console.log('⚠️ Unknown domain, defaulting to Turkish');
  }

  console.log('🔤 Selected locale:', defaultLocale);

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
