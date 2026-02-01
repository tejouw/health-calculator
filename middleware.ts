import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';
import { pageRoutes } from './config/pages.config';

// Create reverse mapping: slug -> page ID
const pageSlugToId: Record<string, string> = {};
pageRoutes.forEach((page) => {
  pageSlugToId[page.slug.en] = page.id;
  pageSlugToId[page.slug.tr] = page.id;
});

export default function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  console.log('🌐 Hostname:', hostname);
  console.log('📍 Original pathname:', pathname);

  // Determine locale based on domain
  let locale: 'en' | 'tr' = 'tr';
  if (hostname.includes('prohealthcalc')) {
    locale = 'en';
    console.log('✅ English domain detected');
  } else if (hostname.includes('saglikhesapla')) {
    locale = 'tr';
    console.log('✅ Turkish domain detected');
  }

  console.log('🔤 Selected locale:', locale);

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = routing.locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  // If URL has locale prefix, remove it (user typed /en/something)
  if (pathnameHasLocale) {
    const segments = pathname.split('/');
    segments.splice(1, 1); // Remove locale segment
    const newPathname = segments.join('/') || '/';

    // Redirect to clean URL
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    console.log('🔀 Redirecting to clean URL:', newPathname);
    return NextResponse.redirect(url);
  }

  // Map localized page slugs to internal page IDs
  let internalPathname = pathname;
  const pathSegments = pathname.split('/').filter(Boolean);

  if (pathSegments.length > 0) {
    const firstSegment = pathSegments[0];
    const pageId = pageSlugToId[firstSegment];

    if (pageId) {
      // This is a static page with locale-aware slug
      // Map TR slug -> EN page ID for internal routing
      const page = pageRoutes.find((p) => p.id === pageId);
      if (page) {
        const internalSlug = page.id; // Use page ID as internal route
        pathSegments[0] = internalSlug;
        internalPathname = '/' + pathSegments.join('/');
        console.log('📄 Page slug mapped:', firstSegment, '→', internalSlug);
      }
    }
  }

  // Rewrite URL to include locale (internal only)
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${internalPathname}`;

  console.log('🔄 Rewriting to:', url.pathname);

  return NextResponse.rewrite(url);
}

export const config = {
  // Match all pathnames
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
