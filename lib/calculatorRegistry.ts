import { CalculatorMeta } from '@/types/calculator';
import { CategoryId } from '@/types/calculator';

// Import calculator metadata
import { bmiMeta } from '@/calculators/body-weight/bmi/bmiMeta';
import { calorieMeta } from '@/calculators/nutrition/calorie-calculator/calorieMeta';
import { tdeeMeta } from '@/calculators/nutrition/tdee-calculator/tdeeMeta';
import { dueDateMeta } from '@/calculators/pregnancy/due-date-calculator/dueDateMeta';
import { ovulationMeta } from '@/calculators/womens-health/ovulation-calculator/ovulationMeta';
import { idealWeightMeta } from '@/calculators/body-weight/ideal-weight/idealWeightMeta';
import { bodyFatMeta } from '@/calculators/body-weight/body-fat/bodyFatMeta';
import { macroMeta } from '@/calculators/nutrition/macro-calculator/macroMeta';
import { bmrMeta } from '@/calculators/nutrition/bmr-calculator/bmrMeta';
import { pregnancyWeekMeta } from '@/calculators/pregnancy/pregnancy-week-calculator/pregnancyWeekMeta';

// This will be populated as we add calculators
export const calculatorRegistry: CalculatorMeta[] = [
  bmiMeta,
  calorieMeta,
  tdeeMeta,
  dueDateMeta,
  ovulationMeta,
  idealWeightMeta,
  bodyFatMeta,
  macroMeta,
  bmrMeta,
  pregnancyWeekMeta,
];

export function getCalculatorBySlug(slug: string, locale: 'en' | 'tr'): CalculatorMeta | undefined {
  return calculatorRegistry.find((calc) => calc.slug[locale] === slug);
}

export function getCalculatorById(id: string): CalculatorMeta | undefined {
  return calculatorRegistry.find((calc) => calc.id === id);
}

export function getCalculatorsByCategory(category: CategoryId): CalculatorMeta[] {
  return calculatorRegistry.filter((calc) => calc.category === category);
}

export function getPopularCalculators(limit?: number): CalculatorMeta[] {
  const popular = calculatorRegistry.filter((calc) => calc.popular);
  return limit ? popular.slice(0, limit) : popular;
}

export function getFeaturedCalculators(limit?: number): CalculatorMeta[] {
  const featured = calculatorRegistry.filter((calc) => calc.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getAllCalculators(): CalculatorMeta[] {
  return calculatorRegistry;
}

export function searchCalculators(query: string, locale: 'en' | 'tr'): CalculatorMeta[] {
  const lowerQuery = query.toLowerCase();
  return calculatorRegistry.filter(
    (calc) =>
      calc.title[locale].toLowerCase().includes(lowerQuery) ||
      calc.description[locale].toLowerCase().includes(lowerQuery) ||
      calc.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Gets the count of calculators for a specific category
 * This is used to dynamically populate category cards with calculator counts
 */
export function getCategoryCalculatorCount(categoryId: CategoryId): number {
  return calculatorRegistry.filter((calc) => calc.category === categoryId).length;
}
