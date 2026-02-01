/**
 * Page Routes Configuration
 * Maps static pages to locale-aware slugs
 */

export interface PageRoute {
  id: string;
  slug: {
    en: string;
    tr: string;
  };
}

export const pageRoutes: PageRoute[] = [
  {
    id: 'about',
    slug: {
      en: 'about',
      tr: 'hakkimizda',
    },
  },
  {
    id: 'contact',
    slug: {
      en: 'contact',
      tr: 'iletisim',
    },
  },
  {
    id: 'privacy-policy',
    slug: {
      en: 'privacy-policy',
      tr: 'gizlilik-politikasi',
    },
  },
  {
    id: 'terms-of-service',
    slug: {
      en: 'terms-of-service',
      tr: 'kullanim-kosullari',
    },
  },
  {
    id: 'disclaimer',
    slug: {
      en: 'disclaimer',
      tr: 'sorumluluk-reddi',
    },
  },
];

/**
 * Get page slug by locale
 */
export function getPageSlug(pageId: string, locale: 'en' | 'tr'): string {
  const page = pageRoutes.find((p) => p.id === pageId);
  return page?.slug[locale] || pageId;
}

/**
 * Get page ID from slug
 */
export function getPageIdFromSlug(slug: string, locale: 'en' | 'tr'): string | null {
  const page = pageRoutes.find((p) => p.slug[locale] === slug);
  return page?.id || null;
}

/**
 * Get page route by ID
 */
export function getPageRoute(pageId: string): PageRoute | undefined {
  return pageRoutes.find((p) => p.id === pageId);
}
