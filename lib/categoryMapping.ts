/**
 * Category Mapping Utilities
 * Maps between camelCase category names (used in translations)
 * and localized kebab-case category slugs (used in URLs)
 */

import { CategoryId } from '@/types/calculator';
import { categories } from '@/config/categories.config';

/**
 * Map from camelCase to CategoryId (internal ID, not URL slug)
 */
export const CATEGORY_SLUG_MAP: Record<string, CategoryId> = {
  bodyWeight: 'body-weight',
  fitness: 'fitness',
  nutrition: 'nutrition',
  pregnancy: 'pregnancy',
  womensHealth: 'womens-health',
  mensHealth: 'mens-health',
  heart: 'heart',
  diabetes: 'diabetes',
  medical: 'medical',
  mentalHealth: 'mental-health',
  sleep: 'sleep',
  childrensHealth: 'childrens-health',
  dailyLife: 'daily-life',
  substance: 'substance',
};

/**
 * Map from CategoryId to camelCase
 */
export const CATEGORY_NAME_MAP: Record<CategoryId, string> = {
  'body-weight': 'bodyWeight',
  fitness: 'fitness',
  nutrition: 'nutrition',
  pregnancy: 'pregnancy',
  'womens-health': 'womensHealth',
  'mens-health': 'mensHealth',
  heart: 'heart',
  diabetes: 'diabetes',
  medical: 'medical',
  'mental-health': 'mentalHealth',
  sleep: 'sleep',
  'childrens-health': 'childrensHealth',
  'daily-life': 'dailyLife',
  substance: 'substance',
};

/**
 * Map from CategoryId to localized URL slug
 * This is built from categories.config.ts
 */
const CATEGORY_ID_TO_SLUG: Record<CategoryId, { en: string; tr: string }> = categories.reduce(
  (acc, cat) => {
    acc[cat.id] = cat.slug;
    return acc;
  },
  {} as Record<CategoryId, { en: string; tr: string }>
);

/**
 * Map from localized URL slug to CategoryId
 */
const CATEGORY_SLUG_TO_ID_EN: Record<string, CategoryId> = categories.reduce(
  (acc, cat) => {
    acc[cat.slug.en] = cat.id;
    return acc;
  },
  {} as Record<string, CategoryId>
);

const CATEGORY_SLUG_TO_ID_TR: Record<string, CategoryId> = categories.reduce(
  (acc, cat) => {
    acc[cat.slug.tr] = cat.id;
    return acc;
  },
  {} as Record<string, CategoryId>
);

/**
 * Get localized category slug from CategoryId
 */
export function getCategorySlugByLocale(categoryId: CategoryId, locale: 'en' | 'tr'): string {
  return CATEGORY_ID_TO_SLUG[categoryId]?.[locale] || categoryId;
}

/**
 * Get CategoryId from localized slug
 */
export function getCategoryIdFromSlug(slug: string, locale: 'en' | 'tr'): CategoryId | null {
  const map = locale === 'en' ? CATEGORY_SLUG_TO_ID_EN : CATEGORY_SLUG_TO_ID_TR;
  return map[slug] || null;
}

/**
 * Translate a category slug from one locale to another
 * @example
 * translateCategorySlug('mens-health', 'en', 'tr') // returns 'erkek-sagligi'
 * translateCategorySlug('erkek-sagligi', 'tr', 'en') // returns 'mens-health'
 */
export function translateCategorySlug(
  slug: string,
  fromLocale: 'en' | 'tr',
  toLocale: 'en' | 'tr'
): string | null {
  if (fromLocale === toLocale) return slug;

  // First, find the category ID from the source slug
  const categoryId = getCategoryIdFromSlug(slug, fromLocale);
  if (!categoryId) return null;

  // Then get the slug in the target locale
  return getCategorySlugByLocale(categoryId, toLocale);
}

/**
 * Convert camelCase category name to CategoryId
 */
export function getCategorySlug(categoryName: string): CategoryId {
  return CATEGORY_SLUG_MAP[categoryName] || (categoryName as CategoryId);
}

/**
 * Convert CategoryId to camelCase category name
 */
export function getCategoryName(categoryId: CategoryId): string {
  return CATEGORY_NAME_MAP[categoryId] || categoryId;
}

/**
 * Check if a string is a valid category slug in any locale
 */
export function isValidCategorySlug(slug: string): boolean {
  return (
    slug in CATEGORY_SLUG_TO_ID_EN ||
    slug in CATEGORY_SLUG_TO_ID_TR ||
    Object.values(CATEGORY_SLUG_MAP).includes(slug as CategoryId)
  );
}

/**
 * Get all category IDs (internal IDs, not URL slugs)
 */
export function getAllCategorySlugs(): CategoryId[] {
  return Object.values(CATEGORY_SLUG_MAP);
}

/**
 * Get localized category name from CategoryId
 */
export function getCategoryNameByLocale(categoryId: CategoryId, locale: 'en' | 'tr'): string {
  const category = categories.find(cat => cat.id === categoryId);
  return category?.name[locale] || categoryId;
}
