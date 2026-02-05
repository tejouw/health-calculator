/** @type {import('next-sitemap').IConfig} */

// Category slug mappings for path translation
const CATEGORY_SLUGS = {
  'body-weight': { en: 'body-weight', tr: 'vucut-kilo' },
  'fitness': { en: 'fitness', tr: 'fitness' },
  'nutrition': { en: 'nutrition', tr: 'beslenme' },
  'pregnancy': { en: 'pregnancy', tr: 'hamilelik' },
  'womens-health': { en: 'womens-health', tr: 'kadin-sagligi' },
  'mens-health': { en: 'mens-health', tr: 'erkek-sagligi' },
  'heart': { en: 'heart', tr: 'kalp' },
  'diabetes': { en: 'diabetes', tr: 'diyabet' },
  'medical': { en: 'medical', tr: 'tibbi-hesaplamalar' },
  'mental-health': { en: 'mental-health', tr: 'ruh-sagligi' },
  'sleep': { en: 'sleep', tr: 'uyku' },
  'childrens-health': { en: 'childrens-health', tr: 'cocuk-sagligi' },
  'daily-life': { en: 'daily-life', tr: 'gunluk-yasam' },
};

// Calculator slug mappings for path translation
const CALCULATOR_SLUGS = {
  'bmi-calculator': { en: 'bmi-calculator', tr: 'vucut-kitle-indeksi-hesaplama' },
  'body-fat-calculator': { en: 'body-fat-calculator', tr: 'vucut-yag-orani-hesaplama' },
  'ideal-weight-calculator': { en: 'ideal-weight-calculator', tr: 'ideal-kilo-hesaplayici' },
  'growth-percentile-calculator': { en: 'growth-percentile-calculator', tr: 'buyume-persentil-hesaplayici' },
  'a1c-calculator': { en: 'a1c-calculator', tr: 'a1c-hesaplayici' },
  'blood-sugar-converter': { en: 'blood-sugar-converter', tr: 'kan-sekeri-donusturucu' },
  'one-rep-max-calculator': { en: 'one-rep-max-calculator', tr: 'maksimum-tek-tekrar-hesaplama' },
  'running-pace-calculator': { en: 'running-pace-calculator', tr: 'kosu-temposu-hesaplama' },
  'heart-rate-zone-calculator': { en: 'heart-rate-zone-calculator', tr: 'kalp-atisi-bolgesi-hesaplayici' },
  'creatinine-clearance-calculator': { en: 'creatinine-clearance-calculator', tr: 'kreatinin-klirensi-hesaplama' },
  'gfr-calculator': { en: 'gfr-calculator', tr: 'gfr-hesaplayici' },
  'psa-calculator': { en: 'psa-calculator', tr: 'psa-hesaplayici' },
  'phq9-depression-calculator': { en: 'phq9-depression-calculator', tr: 'phq9-depresyon-tarama' },
  'bmr-calculator': { en: 'bmr-calculator', tr: 'bmr-hesaplama' },
  'calorie-calculator': { en: 'calorie-calculator', tr: 'kalori-hesaplayici' },
  'food-calorie-calculator': { en: 'food-calorie-calculator', tr: 'gida-kalori-hesaplama' },
  'macro-calculator': { en: 'macro-calculator', tr: 'makro-hesaplama' },
  'tdee-calculator': { en: 'tdee-calculator', tr: 'tdee-hesaplayici' },
  'due-date-calculator': { en: 'due-date-calculator', tr: 'dogum-tarihi-hesaplayici' },
  'pregnancy-week-calculator': { en: 'pregnancy-week-calculator', tr: 'hamilelik-hafta-hesaplama' },
  'sleep-calculator': { en: 'sleep-calculator', tr: 'uyku-hesaplayici' },
  'ovulation-calculator': { en: 'ovulation-calculator', tr: 'yumurtlama-hesaplayici' },
  'calorie-deficit-calculator': { en: 'calorie-deficit-calculator', tr: 'kalori-acigi-hesaplama' },
  'water-intake-calculator': { en: 'water-intake-calculator', tr: 'su-ihtiyaci-hesaplama' },
  'protein-calculator': { en: 'protein-calculator', tr: 'protein-hesaplama' },
  'period-calculator': { en: 'period-calculator', tr: 'adet-takvimi' },
  'age-calculator': { en: 'age-calculator', tr: 'yas-hesaplayici' },
  'love-calculator': { en: 'love-calculator', tr: 'ask-hesaplayici' },
  'waist-hip-ratio-calculator': { en: 'waist-hip-ratio-calculator', tr: 'bel-kalca-orani-hesaplama' },
};

// Static page slug mappings
const STATIC_PAGE_SLUGS = {
  'about': { en: 'about', tr: 'hakkimizda' },
  'contact': { en: 'contact', tr: 'iletisim' },
  'privacy-policy': { en: 'privacy-policy', tr: 'gizlilik-politikasi' },
  'terms-of-service': { en: 'terms-of-service', tr: 'kullanim-kosullari' },
  'disclaimer': { en: 'disclaimer', tr: 'sorumluluk-reddi' },
};

// Reverse mappings for quick lookup
const CATEGORY_EN_TO_ID = {};
const CATEGORY_TR_TO_ID = {};
Object.entries(CATEGORY_SLUGS).forEach(([id, slugs]) => {
  CATEGORY_EN_TO_ID[slugs.en] = id;
  CATEGORY_TR_TO_ID[slugs.tr] = id;
});

const CALCULATOR_EN_TO_ID = {};
const CALCULATOR_TR_TO_ID = {};
Object.entries(CALCULATOR_SLUGS).forEach(([id, slugs]) => {
  CALCULATOR_EN_TO_ID[slugs.en] = id;
  CALCULATOR_TR_TO_ID[slugs.tr] = id;
});

/**
 * Translate category slug between locales
 */
function translateCategorySlug(slug, fromLocale, toLocale) {
  if (fromLocale === toLocale) return slug;

  // Find category ID from the source locale
  const categoryId = fromLocale === 'en' ? CATEGORY_EN_TO_ID[slug] : CATEGORY_TR_TO_ID[slug];
  if (!categoryId) return slug;

  // Return translated slug
  return CATEGORY_SLUGS[categoryId][toLocale];
}

/**
 * Translate calculator slug between locales
 */
function translateCalculatorSlug(slug, fromLocale, toLocale) {
  if (fromLocale === toLocale) return slug;

  // Find calculator ID from the source locale
  const calculatorId = fromLocale === 'en' ? CALCULATOR_EN_TO_ID[slug] : CALCULATOR_TR_TO_ID[slug];
  if (!calculatorId) return slug;

  // Return translated slug
  return CALCULATOR_SLUGS[calculatorId][toLocale];
}

/**
 * Detect the locale of a path based on its slugs
 * Returns 'en' if path contains English slugs, 'tr' if Turkish slugs
 */
function detectPathLocale(path) {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return 'en';

  // Check first segment (category or static page)
  const firstSegment = segments[0];

  // Check if it's a Turkish category
  if (CATEGORY_TR_TO_ID[firstSegment]) return 'tr';
  // Check if it's an English category
  if (CATEGORY_EN_TO_ID[firstSegment]) return 'en';

  // Check static pages
  for (const [id, slugs] of Object.entries(STATIC_PAGE_SLUGS)) {
    if (slugs.tr === firstSegment) return 'tr';
    if (slugs.en === firstSegment) return 'en';
  }

  // Default to English
  return 'en';
}

/**
 * Translate static page slug between locales
 */
function translateStaticPageSlug(slug, fromLocale, toLocale) {
  if (fromLocale === toLocale) return slug;

  // Find by source locale slug
  for (const [id, slugs] of Object.entries(STATIC_PAGE_SLUGS)) {
    if (slugs[fromLocale] === slug) {
      return slugs[toLocale];
    }
  }
  return slug;
}

/**
 * Professional path translation for sitemap
 * Translates static pages, categories, and calculator slugs in paths
 * Supports: /static-page, /category, /category/calculator
 */
function translatePath(path, fromLocale, toLocale) {
  if (fromLocale === toLocale || !path || path === '/') return path;

  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return '/';

  if (segments.length === 1) {
    // Try static page first, then category
    const staticTranslated = translateStaticPageSlug(segments[0], fromLocale, toLocale);
    if (staticTranslated !== segments[0]) {
      return '/' + staticTranslated;
    }
    return '/' + translateCategorySlug(segments[0], fromLocale, toLocale);
  }

  // Category + Calculator
  segments[0] = translateCategorySlug(segments[0], fromLocale, toLocale);
  segments[1] = translateCalculatorSlug(segments[1], fromLocale, toLocale);

  return '/' + segments.join('/');
}

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://prohealthcalc.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/server-sitemap.xml'], // Only exclude server-generated sitemaps
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://saglikhesapla.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Extract locale from path prefix
    const localePrefix = path.startsWith('/tr') ? 'tr' : 'en';

    // Remove locale prefix from URL for domain-based routing
    // /en/something -> /something or /tr/something -> /something
    const cleanPath = path.replace(/^\/(en|tr)/, '') || '/';

    // Detect the actual locale of the path content (not just the prefix)
    // This handles cases where paths might be in different locales
    const pathLocale = cleanPath === '/' ? localePrefix : detectPathLocale(cleanPath);

    // Determine the domain based on locale prefix (this determines which site the URL is for)
    const domain = localePrefix === 'en' ? 'https://prohealthcalc.com' : 'https://saglikhesapla.com';
    const alternateDomain = localePrefix === 'en' ? 'https://saglikhesapla.com' : 'https://prohealthcalc.com';
    const alternateLocale = localePrefix === 'en' ? 'tr' : 'en';

    // Translate paths correctly based on detected locale
    let localizedPath, alternatePath;

    if (cleanPath === '/') {
      localizedPath = '/';
      alternatePath = '/';
    } else {
      // If path is in English format, translate to Turkish for alternate
      // If path is in Turkish format, translate to English for alternate
      if (pathLocale === 'en') {
        localizedPath = cleanPath;
        alternatePath = translatePath(cleanPath, 'en', 'tr');
      } else {
        localizedPath = cleanPath;
        alternatePath = translatePath(cleanPath, 'tr', 'en');
      }
    }

    // Determine page type from the path for priority
    const segments = cleanPath.split('/').filter(Boolean);

    // Check for static/legal pages in both languages
    const staticPageSlugs = Object.values(STATIC_PAGE_SLUGS).flatMap(s => [s.en, s.tr]);
    const isStaticPage = segments.length === 1 && staticPageSlugs.includes(segments[0]);
    const legalPageSlugs = ['privacy-policy', 'gizlilik-politikasi', 'terms-of-service', 'kullanim-kosullari', 'disclaimer', 'sorumluluk-reddi'];
    const isLegalPage = segments.length === 1 && legalPageSlugs.includes(segments[0]);

    let priority = 0.7;
    let changefreq = 'daily';

    if (cleanPath === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (isLegalPage) {
      priority = 0.3;
      changefreq = 'yearly';
    } else if (isStaticPage) {
      priority = 0.5;
      changefreq = 'monthly';
    } else if (segments.length === 2) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (segments.length === 1) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: `${domain}${localizedPath}`,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [{
        href: `${alternateDomain}${alternatePath}`,
        hreflang: alternateLocale,
        hrefIsAbsolute: true,
      }],
    };
  },
};
