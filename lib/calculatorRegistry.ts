import { CalculatorMeta } from '@/types/calculator';
import { CategoryId } from '@/types/calculator';

// Import calculator metadata
import { bmiMeta } from '@/calculators/body-weight/bmi/bmiMeta';
import { calorieMeta } from '@/calculators/nutrition/calorie-calculator/calorieMeta';
import { tdeeMeta } from '@/calculators/nutrition/tdee-calculator/tdeeMeta';
import { dueDateMeta } from '@/calculators/pregnancy/due-date-calculator/dueDateMeta';

// This will be populated as we add calculators
export const calculatorRegistry: CalculatorMeta[] = [
  bmiMeta,
  calorieMeta,
  tdeeMeta,
  dueDateMeta,
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
