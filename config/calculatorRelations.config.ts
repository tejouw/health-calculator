/**
 * Calculator Relations Configuration
 *
 * Defines relationships between calculators for internal linking and "Related Calculators" sections.
 * Relations are bidirectional - if A is related to B, B is also related to A.
 *
 * Categories of relations:
 * 1. Same category calculators (automatic)
 * 2. Functionally related (e.g., BMI ↔ Body Fat ↔ Ideal Weight)
 * 3. Commonly used together (e.g., Calorie ↔ TDEE ↔ BMR)
 */

export interface CalculatorRelation {
  /** Calculator IDs that are strongly related (always show) */
  primary: string[];
  /** Calculator IDs that are somewhat related (show if space allows) */
  secondary: string[];
}

/**
 * Manual relations between calculators
 * These supplement the automatic same-category relations
 */
export const calculatorRelations: Record<string, CalculatorRelation> = {
  // Body & Weight calculators
  'bmi-calculator': {
    primary: ['body-fat-calculator', 'ideal-weight-calculator'],
    secondary: ['waist-hip-ratio-calculator', 'biological-age-calculator', 'bmr-calculator', 'tdee-calculator', 'calorie-calculator', 'life-expectancy-calculator', 'calorie-deficit-calculator'],
  },
  'body-fat-calculator': {
    primary: ['bmi-calculator', 'ideal-weight-calculator'],
    secondary: ['waist-hip-ratio-calculator', 'biological-age-calculator', 'bmr-calculator', 'macro-calculator', 'calorie-calculator'],
  },
  'ideal-weight-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator'],
    secondary: ['waist-hip-ratio-calculator', 'calorie-calculator', 'tdee-calculator', 'calorie-deficit-calculator', 'macro-calculator', 'biological-age-calculator'],
  },
  'waist-hip-ratio-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator'],
    secondary: ['ideal-weight-calculator', 'biological-age-calculator', 'calorie-calculator', 'blood-pressure-calculator', 'life-expectancy-calculator'],
  },
  'biological-age-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator', 'life-expectancy-calculator'],
    secondary: ['blood-pressure-calculator', 'heart-rate-zone-calculator', 'sleep-calculator', 'waist-hip-ratio-calculator', 'phq9-calculator', 'vo2-max-calculator'],
  },

  // Nutrition calculators
  'calorie-calculator': {
    primary: ['tdee-calculator', 'bmr-calculator', 'calorie-deficit-calculator'],
    secondary: ['macro-calculator', 'protein-calculator', 'bmi-calculator', 'ideal-weight-calculator', 'body-fat-calculator', 'food-calorie-calculator', 'water-intake-calculator'],
  },
  'tdee-calculator': {
    primary: ['calorie-calculator', 'bmr-calculator', 'macro-calculator'],
    secondary: ['calorie-deficit-calculator', 'protein-calculator', 'water-intake-calculator', 'bmi-calculator', 'body-fat-calculator'],
  },
  'bmr-calculator': {
    primary: ['tdee-calculator', 'calorie-calculator'],
    secondary: ['macro-calculator', 'protein-calculator', 'calorie-deficit-calculator', 'bmi-calculator', 'body-fat-calculator'],
  },
  'macro-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator', 'protein-calculator'],
    secondary: ['bmr-calculator', 'food-calorie-calculator', 'calorie-deficit-calculator', 'bmi-calculator', 'body-fat-calculator', 'ideal-weight-calculator'],
  },
  'food-calorie-calculator': {
    primary: ['calorie-calculator', 'macro-calculator'],
    secondary: ['tdee-calculator', 'calorie-deficit-calculator', 'protein-calculator', 'bmr-calculator', 'water-intake-calculator'],
  },
  'water-intake-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator'],
    secondary: ['bmr-calculator', 'bmi-calculator', 'body-fat-calculator', 'macro-calculator', 'running-pace-calculator'],
  },
  'calorie-deficit-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator'],
    secondary: ['bmr-calculator', 'macro-calculator', 'ideal-weight-calculator', 'bmi-calculator', 'body-fat-calculator', 'protein-calculator'],
  },
  'protein-calculator': {
    primary: ['macro-calculator', 'calorie-calculator'],
    secondary: ['tdee-calculator', 'bmr-calculator', 'body-fat-calculator', 'ideal-weight-calculator', 'bmi-calculator', 'one-rep-max-calculator'],
  },

  // Pregnancy calculators
  'due-date-calculator': {
    primary: ['pregnancy-week-calculator', 'ovulation-calculator'],
    secondary: ['chinese-gender-predictor', 'period-calculator', 'bmi-calculator', 'age-calculator'],
  },
  'pregnancy-week-calculator': {
    primary: ['due-date-calculator', 'chinese-gender-predictor'],
    secondary: ['ovulation-calculator', 'period-calculator', 'bmi-calculator'],
  },
  'chinese-gender-predictor': {
    primary: ['due-date-calculator', 'pregnancy-week-calculator'],
    secondary: ['ovulation-calculator', 'period-calculator', 'age-calculator', 'love-calculator'],
  },

  // Women's Health calculators
  'ovulation-calculator': {
    primary: ['period-calculator', 'due-date-calculator'],
    secondary: ['pregnancy-week-calculator', 'chinese-gender-predictor', 'age-calculator'],
  },
  'period-calculator': {
    primary: ['ovulation-calculator'],
    secondary: ['due-date-calculator', 'pregnancy-week-calculator', 'chinese-gender-predictor'],
  },

  // Fitness calculators
  'one-rep-max-calculator': {
    primary: ['running-pace-calculator', 'vo2-max-calculator'],
    secondary: ['heart-rate-zone-calculator', 'calorie-calculator', 'bmr-calculator', 'protein-calculator', 'macro-calculator', 'bmi-calculator'],
  },
  'running-pace-calculator': {
    primary: ['vo2-max-calculator', 'heart-rate-zone-calculator'],
    secondary: ['one-rep-max-calculator', 'calorie-calculator', 'tdee-calculator', 'water-intake-calculator', 'bmi-calculator', 'sleep-calculator'],
  },
  'vo2-max-calculator': {
    primary: ['running-pace-calculator', 'heart-rate-zone-calculator'],
    secondary: ['one-rep-max-calculator', 'bmi-calculator', 'calorie-calculator', 'sleep-calculator', 'biological-age-calculator', 'life-expectancy-calculator'],
  },

  // Heart calculators
  'heart-rate-zone-calculator': {
    primary: ['vo2-max-calculator', 'running-pace-calculator'],
    secondary: ['blood-pressure-calculator', 'one-rep-max-calculator', 'calorie-calculator', 'tdee-calculator', 'bmi-calculator', 'biological-age-calculator', 'sleep-calculator'],
  },
  'blood-pressure-calculator': {
    primary: ['heart-rate-zone-calculator', 'life-expectancy-calculator'],
    secondary: ['bmi-calculator', 'calorie-calculator', 'age-calculator', 'biological-age-calculator', 'waist-hip-ratio-calculator', 'gfr-calculator', 'sleep-calculator'],
  },

  // Sleep calculators
  'sleep-calculator': {
    primary: ['biological-age-calculator', 'phq9-calculator', 'life-expectancy-calculator'],
    secondary: ['caffeine-calculator', 'heart-rate-zone-calculator', 'bmr-calculator', 'calorie-calculator'],
  },

  // Diabetes calculators
  'a1c-calculator': {
    primary: ['blood-sugar-converter'],
    secondary: ['bmi-calculator', 'calorie-calculator', 'body-fat-calculator', 'tdee-calculator', 'life-expectancy-calculator'],
  },
  'blood-sugar-converter': {
    primary: ['a1c-calculator'],
    secondary: ['bmi-calculator', 'calorie-calculator', 'body-fat-calculator', 'life-expectancy-calculator'],
  },

  // Medical calculators
  'gfr-calculator': {
    primary: ['creatinine-clearance-calculator', 'bsa-calculator'],
    secondary: ['bmi-calculator', 'age-calculator', 'blood-pressure-calculator', 'life-expectancy-calculator'],
  },
  'creatinine-clearance-calculator': {
    primary: ['gfr-calculator', 'bsa-calculator'],
    secondary: ['bmi-calculator', 'age-calculator', 'blood-pressure-calculator', 'life-expectancy-calculator'],
  },
  'bsa-calculator': {
    primary: ['gfr-calculator', 'creatinine-clearance-calculator'],
    secondary: ['bmi-calculator', 'body-fat-calculator', 'ideal-weight-calculator', 'waist-hip-ratio-calculator'],
  },

  // Mental Health calculators
  'phq9-calculator': {
    primary: ['sleep-calculator', 'life-expectancy-calculator', 'biological-age-calculator'],
    secondary: ['caffeine-calculator', 'bmi-calculator', 'blood-pressure-calculator'],
  },

  // Men's Health calculators
  'psa-calculator': {
    primary: ['age-calculator', 'life-expectancy-calculator', 'bmi-calculator'],
    secondary: ['gfr-calculator', 'biological-age-calculator', 'blood-pressure-calculator'],
  },

  // Life Expectancy Calculator
  'life-expectancy-calculator': {
    primary: ['bmi-calculator', 'biological-age-calculator', 'blood-pressure-calculator'],
    secondary: ['phq9-calculator', 'sleep-calculator', 'calorie-calculator', 'blood-alcohol-calculator', 'waist-hip-ratio-calculator', 'vo2-max-calculator', 'a1c-calculator'],
  },

  // Children's Health calculators
  'growth-percentile-calculator': {
    primary: ['bmi-calculator', 'age-calculator', 'calorie-calculator'],
    secondary: ['macro-calculator', 'protein-calculator', 'water-intake-calculator'],
  },

  // Daily Life calculators
  'age-calculator': {
    primary: ['love-calculator', 'pet-age-calculator'],
    secondary: ['bmi-calculator', 'biological-age-calculator', 'life-expectancy-calculator', 'sleep-calculator', 'psa-calculator'],
  },
  'love-calculator': {
    primary: ['age-calculator', 'pet-age-calculator'],
    secondary: ['sleep-calculator', 'biological-age-calculator', 'phq9-calculator'],
  },
  'pet-age-calculator': {
    primary: ['age-calculator', 'love-calculator'],
    secondary: ['sleep-calculator', 'growth-percentile-calculator', 'biological-age-calculator', 'life-expectancy-calculator'],
  },

  // Substance calculators
  'blood-alcohol-calculator': {
    primary: ['caffeine-calculator', 'water-intake-calculator'],
    secondary: ['calorie-calculator', 'body-fat-calculator', 'bmr-calculator', 'bmi-calculator', 'life-expectancy-calculator', 'sleep-calculator'],
  },
  'caffeine-calculator': {
    primary: ['blood-alcohol-calculator', 'water-intake-calculator'],
    secondary: ['sleep-calculator', 'calorie-calculator', 'bmr-calculator', 'heart-rate-zone-calculator', 'blood-pressure-calculator', 'phq9-calculator'],
  },
};

/**
 * Get related calculators for a given calculator
 * @param calculatorId - The ID of the calculator
 * @param maxPrimary - Maximum number of primary relations to return (default: 3)
 * @param maxSecondary - Maximum number of secondary relations to return (default: 2)
 */
export function getRelatedCalculators(
  calculatorId: string,
  maxPrimary: number = 3,
  maxSecondary: number = 2
): { primary: string[]; secondary: string[] } {
  const relations = calculatorRelations[calculatorId];

  if (!relations) {
    return { primary: [], secondary: [] };
  }

  return {
    primary: relations.primary.slice(0, maxPrimary),
    secondary: relations.secondary.slice(0, maxSecondary),
  };
}

/**
 * Get all related calculator IDs (both primary and secondary)
 * @param calculatorId - The ID of the calculator
 * @param max - Maximum total relations to return (default: 5)
 */
export function getAllRelatedCalculatorIds(calculatorId: string, max: number = 5): string[] {
  const relations = calculatorRelations[calculatorId];

  if (!relations) {
    return [];
  }

  const allRelations = [...relations.primary, ...relations.secondary];
  return allRelations.slice(0, max);
}
