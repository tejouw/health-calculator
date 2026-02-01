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
import { foodCalorieMeta } from '@/calculators/nutrition/food-calorie-calculator/foodCalorieMeta';
import { pregnancyWeekMeta } from '@/calculators/pregnancy/pregnancy-week-calculator/pregnancyWeekMeta';
import { heartRateZoneMeta } from '@/calculators/heart/heart-rate-zone/heartRateZoneMeta';
// New calculators - Fitness
import { oneRepMaxMeta } from '@/calculators/fitness/one-rep-max/oneRepMaxMeta';
import { runningPaceMeta } from '@/calculators/fitness/running-pace/runningPaceMeta';
// New calculators - Sleep
import { sleepMeta } from '@/calculators/sleep/sleep-calculator/sleepMeta';
// New calculators - Diabetes
import { a1cMeta } from '@/calculators/diabetes/a1c-calculator/a1cMeta';
import { bloodSugarMeta } from '@/calculators/diabetes/blood-sugar-converter/bloodSugarMeta';
// New calculators - Medical
import { gfrMeta } from '@/calculators/medical/gfr-calculator/gfrMeta';
import { creatinineMeta } from '@/calculators/medical/creatinine-clearance/creatinineMeta';
// New calculators - Mental Health
import { phq9Meta } from '@/calculators/mental-health/phq9-calculator/phq9Meta';
// New calculators - Men's Health
import { psaMeta } from '@/calculators/mens-health/psa-calculator/psaMeta';
// New calculators - Children's Health
import { growthMeta } from '@/calculators/childrens-health/growth-percentile/growthMeta';
// New calculators - Nutrition (Water Intake)
import { waterIntakeMeta } from '@/calculators/nutrition/water-intake-calculator/waterIntakeMeta';
// New calculators - Nutrition (Calorie Deficit)
import { calorieDeficitMeta } from '@/calculators/nutrition/calorie-deficit-calculator/calorieDeficitMeta';

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
  foodCalorieMeta,
  waterIntakeMeta,
  calorieDeficitMeta,
  pregnancyWeekMeta,
  heartRateZoneMeta,
  // Fitness
  oneRepMaxMeta,
  runningPaceMeta,
  // Sleep
  sleepMeta,
  // Diabetes
  a1cMeta,
  bloodSugarMeta,
  // Medical
  gfrMeta,
  creatinineMeta,
  // Mental Health
  phq9Meta,
  // Men's Health
  psaMeta,
  // Children's Health
  growthMeta,
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

/**
 * Get calculators by IDs in the specified order
 * Useful for getting calculators sorted by analytics data
 */
export function getCalculatorsByIds(ids: string[]): CalculatorMeta[] {
  const calculatorsMap = new Map(calculatorRegistry.map(calc => [calc.id, calc]));
  return ids
    .map(id => calculatorsMap.get(id))
    .filter((calc): calc is CalculatorMeta => calc !== undefined);
}

/**
 * Get most viewed calculators based on analytics data
 * Falls back to popular calculators if no analytics data available
 */
export function getMostViewedCalculators(viewedIds: string[], limit?: number): CalculatorMeta[] {
  if (viewedIds.length === 0) {
    return getPopularCalculators(limit);
  }

  const calculators = getCalculatorsByIds(viewedIds);
  return limit ? calculators.slice(0, limit) : calculators;
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
