/**
 * Path Translation Utilities
 * Translates URL paths between locales by converting slugs
 */

import { getCalculatorBySlug } from './calculatorRegistry';
import { isValidCategorySlug, translateCategorySlug, getCategoryIdFromSlug } from './categoryMapping';

/**
 * Translate a path from one locale to another
 * Handles both category and calculator slugs
 *
 * @example
 * translatePath('/body-weight/bmi-calculator', 'en', 'tr')
 * // Returns: '/vucut-kilo/bmi-hesaplama'
 *
 * translatePath('/mens-health', 'en', 'tr')
 * // Returns: '/erkek-sagligi'
 */
export function translatePath(
  path: string,
  fromLocale: 'en' | 'tr',
  toLocale: 'en' | 'tr'
): string {
  // If locales are the same, no translation needed
  if (fromLocale === toLocale) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Split path into segments
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  // If it's just a category: /category-slug
  if (segments.length === 1 && isValidCategorySlug(segments[0])) {
    const translatedCategorySlug = translateCategorySlug(segments[0], fromLocale, toLocale);
    return translatedCategorySlug ? `/${translatedCategorySlug}` : `/${segments[0]}`;
  }

  // If it's a calculator page: /category-slug/calculator-slug
  if (segments.length === 2) {
    const [categorySlug, calculatorSlug] = segments;

    // Translate category slug
    const translatedCategorySlug = translateCategorySlug(categorySlug, fromLocale, toLocale);

    // Find calculator by slug in the source locale
    const calculator = getCalculatorBySlug(calculatorSlug, fromLocale);

    if (translatedCategorySlug && calculator) {
      // Return path with both translated slugs
      return `/${translatedCategorySlug}/${calculator.slug[toLocale]}`;
    } else if (translatedCategorySlug) {
      // Category translated but calculator not found
      return `/${translatedCategorySlug}/${calculatorSlug}`;
    } else if (calculator) {
      // Calculator found but category not translated
      return `/${categorySlug}/${calculator.slug[toLocale]}`;
    }
  }

  // If path has more segments or translation failed, return original
  return `/${cleanPath}`;
}

/**
 * Get the calculator slug for a given path and locale
 *
 * @example
 * getCalculatorSlugFromPath('/body-weight/bmi-calculator', 'en')
 * // Returns: 'bmi-calculator'
 */
export function getCalculatorSlugFromPath(
  path: string,
  locale: 'en' | 'tr'
): string | null {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 2) {
    const [, calculatorSlug] = segments;
    const calculator = getCalculatorBySlug(calculatorSlug, locale);
    return calculator ? calculatorSlug : null;
  }

  return null;
}

/**
 * Check if a path is a calculator page
 */
export function isCalculatorPath(path: string): boolean {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const segments = cleanPath.split('/').filter(Boolean);
  return segments.length === 2;
}

/**
 * Check if a path is a category page
 */
export function isCategoryPath(path: string): boolean {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const segments = cleanPath.split('/').filter(Boolean);
  return segments.length === 1 && isValidCategorySlug(segments[0]);
}
