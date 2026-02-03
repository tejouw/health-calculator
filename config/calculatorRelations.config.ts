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
    secondary: ['bmr-calculator', 'tdee-calculator', 'calorie-calculator'],
  },
  'body-fat-calculator': {
    primary: ['bmi-calculator', 'ideal-weight-calculator'],
    secondary: ['bmr-calculator', 'macro-calculator'],
  },
  'ideal-weight-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator'],
    secondary: ['calorie-calculator', 'tdee-calculator'],
  },

  // Nutrition calculators
  'calorie-calculator': {
    primary: ['tdee-calculator', 'bmr-calculator', 'calorie-deficit-calculator'],
    secondary: ['macro-calculator', 'bmi-calculator', 'ideal-weight-calculator'],
  },
  'tdee-calculator': {
    primary: ['calorie-calculator', 'bmr-calculator', 'macro-calculator'],
    secondary: ['calorie-deficit-calculator', 'bmi-calculator'],
  },
  'bmr-calculator': {
    primary: ['tdee-calculator', 'calorie-calculator'],
    secondary: ['macro-calculator', 'bmi-calculator', 'body-fat-calculator'],
  },
  'macro-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator'],
    secondary: ['bmr-calculator', 'food-calorie-calculator', 'calorie-deficit-calculator'],
  },
  'food-calorie-calculator': {
    primary: ['calorie-calculator', 'macro-calculator'],
    secondary: ['tdee-calculator', 'calorie-deficit-calculator'],
  },
  'water-intake-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator'],
    secondary: ['bmr-calculator', 'bmi-calculator'],
  },
  'calorie-deficit-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator'],
    secondary: ['bmr-calculator', 'macro-calculator', 'ideal-weight-calculator'],
  },

  // Pregnancy calculators
  'due-date-calculator': {
    primary: ['pregnancy-week-calculator', 'ovulation-calculator'],
    secondary: ['period-calculator'],
  },
  'pregnancy-week-calculator': {
    primary: ['due-date-calculator'],
    secondary: ['ovulation-calculator'],
  },

  // Women's Health calculators
  'ovulation-calculator': {
    primary: ['period-calculator', 'due-date-calculator'],
    secondary: ['pregnancy-week-calculator'],
  },
  'period-calculator': {
    primary: ['ovulation-calculator'],
    secondary: ['due-date-calculator'],
  },

  // Fitness calculators
  'one-rep-max-calculator': {
    primary: ['running-pace-calculator', 'heart-rate-zone-calculator'],
    secondary: ['calorie-calculator', 'bmr-calculator'],
  },
  'running-pace-calculator': {
    primary: ['heart-rate-zone-calculator', 'one-rep-max-calculator'],
    secondary: ['calorie-calculator', 'tdee-calculator'],
  },

  // Heart calculators
  'heart-rate-zone-calculator': {
    primary: ['running-pace-calculator', 'one-rep-max-calculator'],
    secondary: ['calorie-calculator', 'tdee-calculator'],
  },

  // Sleep calculators
  'sleep-calculator': {
    primary: [],
    secondary: ['bmr-calculator', 'calorie-calculator'],
  },

  // Diabetes calculators
  'a1c-calculator': {
    primary: ['blood-sugar-converter'],
    secondary: ['bmi-calculator', 'calorie-calculator'],
  },
  'blood-sugar-converter': {
    primary: ['a1c-calculator'],
    secondary: ['bmi-calculator'],
  },

  // Medical calculators
  'gfr-calculator': {
    primary: ['creatinine-clearance-calculator'],
    secondary: ['bmi-calculator'],
  },
  'creatinine-clearance-calculator': {
    primary: ['gfr-calculator'],
    secondary: ['bmi-calculator'],
  },

  // Mental Health calculators
  'phq9-calculator': {
    primary: [],
    secondary: ['sleep-calculator', 'bmi-calculator'],
  },

  // Men's Health calculators
  'psa-calculator': {
    primary: [],
    secondary: ['bmi-calculator', 'gfr-calculator'],
  },

  // Children's Health calculators
  'growth-percentile-calculator': {
    primary: [],
    secondary: ['bmi-calculator'],
  },

  // Daily Life calculators
  'age-calculator': {
    primary: ['love-calculator'],
    secondary: ['bmi-calculator', 'sleep-calculator'],
  },
  'love-calculator': {
    primary: ['age-calculator'],
    secondary: ['sleep-calculator'],
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
