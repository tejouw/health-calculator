import { NextRequest, NextResponse } from 'next/server';
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

  // ============================================================
  // SEO FIX 1: Return 410 Gone for double-domain URLs
  // Legacy bug created URLs like /https:/prohealthcalc.com%20/about
  // Google keeps re-crawling these, wasting crawl budget (~20%)
  // 410 tells Google "permanently gone, stop crawling"
  // ============================================================
  if (/^\/https?:/.test(pathname)) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // ============================================================
  // SEO FIX 2: Strip /en/ or /tr/ locale prefix and redirect
  // URLs like /en/terms-of-service or /tr/childrens-health
  // should redirect to /terms-of-service or /childrens-health
  // (domain determines locale, not prefix)
  // ============================================================
  const localePrefixMatch = pathname.match(/^\/(en|tr)(\/.*)?$/);
  if (localePrefixMatch) {
    const cleanPath = localePrefixMatch[2] || '/';
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 301);
  }

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
  // Match all pathnames except static files and API routes
  matcher: [
    '/',
    '/((?!api|_next|_vercel|.*\\..*).*)' ,
    // Also catch double-domain URLs (contain dots but need 410 response)
    '/https\\::path*',
    '/http\\::path*',
  ],
};
