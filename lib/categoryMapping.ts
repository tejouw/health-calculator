/**
 * Category Mapping Utilities
 * Maps between camelCase category names (used in translations)
 * and kebab-case category IDs (used in URLs)
 */

import { CategoryId } from '@/types/calculator';

/**
 * Map from camelCase to kebab-case
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
};

/**
 * Map from kebab-case to camelCase
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
};

/**
 * Convert camelCase category name to kebab-case slug
 */
export function getCategorySlug(categoryName: string): CategoryId {
  return CATEGORY_SLUG_MAP[categoryName] || (categoryName as CategoryId);
}

/**
 * Convert kebab-case slug to camelCase category name
 */
export function getCategoryName(categorySlug: CategoryId): string {
  return CATEGORY_NAME_MAP[categorySlug] || categorySlug;
}

/**
 * Check if a string is a valid category slug
 */
export function isValidCategorySlug(slug: string): slug is CategoryId {
  return Object.values(CATEGORY_SLUG_MAP).includes(slug as CategoryId);
}

/**
 * Get all category slugs
 */
export function getAllCategorySlugs(): CategoryId[] {
  return Object.values(CATEGORY_SLUG_MAP);
}
