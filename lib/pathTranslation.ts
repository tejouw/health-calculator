/**
 * Path Translation Utilities
 * Translates URL paths between locales by converting slugs
 */

import { getCalculatorBySlug, getAllCalculators } from './calculatorRegistry';
import { isValidCategorySlug } from './categoryMapping';

/**
 * Translate a path from one locale to another
 * Handles both category and calculator slugs
 *
 * @example
 * translatePath('/body-weight/bmi-calculator', 'en', 'tr')
 * // Returns: '/body-weight/vucut-kitle-indeksi-hesaplama'
 *
 * translatePath('/body-weight', 'en', 'tr')
 * // Returns: '/body-weight'
 */
export function translatePath(
  path: string,
  fromLocale: 'en' | 'tr',
  toLocale: 'en' | 'tr'
): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Split path into segments
  const segments = cleanPath.split('/').filter(Boolean);

  if (segments.length === 0) {
    return '/';
  }

  // If it's just a category, return as-is (categories don't change)
  if (segments.length === 1 && isValidCategorySlug(segments[0])) {
    return `/${segments[0]}`;
  }

  // If it's a calculator page: /category/calculator-slug
  if (segments.length === 2) {
    const [categorySlug, calculatorSlug] = segments;

    // Find calculator by slug in the source locale
    const calculator = getCalculatorBySlug(calculatorSlug, fromLocale);

    if (calculator) {
      // Return path with translated calculator slug
      return `/${categorySlug}/${calculator.slug[toLocale]}`;
    }
  }

  // If path has more segments or calculator not found, return original
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
