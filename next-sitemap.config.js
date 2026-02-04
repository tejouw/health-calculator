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

  // Find category ID
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

  // Find calculator ID
  const calculatorId = fromLocale === 'en' ? CALCULATOR_EN_TO_ID[slug] : CALCULATOR_TR_TO_ID[slug];
  if (!calculatorId) return slug;

  // Return translated slug
  return CALCULATOR_SLUGS[calculatorId][toLocale];
}

/**
 * Professional path translation for sitemap
 * Translates both category and calculator slugs in paths
 * Supports: /category, /category/calculator
 */
function translatePath(path, fromLocale, toLocale) {
  if (fromLocale === toLocale || !path || path === '/') return path;

  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return '/';

  // Translate first segment (category)
  if (segments.length >= 1) {
    segments[0] = translateCategorySlug(segments[0], fromLocale, toLocale);
  }

  // Translate second segment (calculator) if exists
  if (segments.length >= 2) {
    segments[1] = translateCalculatorSlug(segments[1], fromLocale, toLocale);
  }

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
    // Extract locale from path
    const locale = path.startsWith('/tr') ? 'tr' : 'en';
    const domain = locale === 'en' ? 'https://prohealthcalc.com' : 'https://saglikhesapla.com';
    const alternateDomain = locale === 'en' ? 'https://saglikhesapla.com' : 'https://prohealthcalc.com';
    const alternateLocale = locale === 'en' ? 'tr' : 'en';

    // Remove locale prefix from URL for domain-based routing
    // /en/something -> /something
    const cleanPath = path.replace(/^\/(en|tr)/, '') || '/';

    // Translate path to alternate locale
    let alternatePath = cleanPath;
    try {
      alternatePath = translatePath(cleanPath, locale, alternateLocale);
    } catch (error) {
      // If translation fails, use the same path
      console.warn(`Failed to translate path ${cleanPath} from ${locale} to ${alternateLocale}`);
    }

    // Set priority based on page type
    let priority = 0.7;
    let changefreq = 'daily';

    if (cleanPath === '/') {
      // Home page - highest priority
      priority = 1.0;
      changefreq = 'daily';
    } else if (cleanPath.split('/').filter(Boolean).length === 1) {
      // Category pages - high priority
      priority = 0.8;
      changefreq = 'weekly';
    } else if (cleanPath.split('/').filter(Boolean).length === 2) {
      // Calculator pages - highest priority (main content)
      priority = 0.9;
      changefreq = 'weekly';
    } else if (cleanPath.includes('/about') || cleanPath.includes('/contact')) {
      // Static pages - lower priority
      priority = 0.5;
      changefreq = 'monthly';
    } else if (cleanPath.includes('/privacy') || cleanPath.includes('/terms') || cleanPath.includes('/disclaimer')) {
      // Legal pages - lowest priority
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: `${domain}${cleanPath}`,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      // Add alternate language links for better international SEO
      alternateRefs: [{
        href: `${alternateDomain}${alternatePath}`,
        hreflang: alternateLocale,
        hrefIsAbsolute: true,
      }],
    };
  },
};
