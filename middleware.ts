import { NextRequest, NextResponse } from 'next/server';
import { pageRoutes } from './config/pages.config';

// Create reverse mapping: slug -> page ID
const pageSlugToId: Record<string, string> = {};
pageRoutes.forEach((page) => {
  pageSlugToId[page.slug.en] = page.id;
  pageSlugToId[page.slug.tr] = page.id;
});

// Pre-computed regex set for malformed/legacy URL detection.
// A previous deploy had a trailing space in NEXT_PUBLIC_EN_DOMAIN, producing
// HTML like https://prohealthcalc.com /path. Google indexed those broken URLs
// and still requests them. We must answer 410 Gone (not 404) so Google drops
// them from the index instead of retrying forever.
const MALFORMED_URL_PATTERNS: RegExp[] = [
  /^\/https?:/i,                  // /https:/ or /http:/ leftover
  /\s/,                            // any whitespace in path
  /%20/i,                          // url-encoded space
  /(prohealthcalc|saglikhesapla)\.com/i, // host bleed-through into the path
];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // ============================================================
  // SEO FIX 1: 410 Gone for malformed legacy URLs
  // Decode once so %20 / spaces are caught even if upstream encoded them.
  // ============================================================
  let decodedPath = pathname;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    // Malformed encoding itself is a strong signal of a junk URL — return 410.
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  if (MALFORMED_URL_PATTERNS.some((re) => re.test(decodedPath))) {
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // ============================================================
  // SEO FIX 2: Strip /en/ or /tr/ locale prefix and redirect
  // Domain determines locale; prefix-form URLs are duplicates.
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
  // Match every request EXCEPT Next.js internals and known static asset
  // extensions. We deliberately allow paths containing dots (so we can serve
  // 410 for legacy /https:/prohealthcalc.com/... URLs that contain `.com`).
  matcher: [
    '/((?!_next/|_vercel/|api/|favicon\\.ico|robots\\.txt|sitemap\\.xml|ads\\.txt|manifest\\.webmanifest|.*\\.(?:js|mjs|css|map|png|jpg|jpeg|gif|svg|ico|webp|avif|woff|woff2|ttf|otf|eot|pdf|json|xml|txt|mp4|webm|mp3)$).*)',
  ],
};
