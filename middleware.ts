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
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Determine locale based on domain
  let locale: 'en' | 'tr' = 'tr';
  if (hostname.includes('prohealthcalc')) {
    locale = 'en';
  } else if (hostname.includes('saglikhesapla')) {
    locale = 'tr';
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
        pathSegments[0] = page.id;
        internalPathname = '/' + pathSegments.join('/');
      }
    }
  }

  // Rewrite URL to include locale (internal only)
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${internalPathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  // Match all pathnames
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
