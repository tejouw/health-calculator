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
    secondary: ['body-type-calculator', 'lean-body-mass-calculator', 'waist-hip-ratio-calculator', 'waist-height-ratio-calculator', 'biological-age-calculator', 'bmr-calculator', 'tdee-calculator', 'calorie-calculator', 'life-expectancy-calculator', 'calorie-deficit-calculator'],
  },
  'body-fat-calculator': {
    primary: ['bmi-calculator', 'ideal-weight-calculator'],
    secondary: ['body-type-calculator', 'lean-body-mass-calculator', 'waist-hip-ratio-calculator', 'biological-age-calculator', 'bmr-calculator', 'macro-calculator', 'calorie-calculator'],
  },
  'ideal-weight-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator'],
    secondary: ['body-type-calculator', 'lean-body-mass-calculator', 'waist-hip-ratio-calculator', 'calorie-calculator', 'tdee-calculator', 'calorie-deficit-calculator', 'macro-calculator', 'biological-age-calculator'],
  },
  'waist-hip-ratio-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator', 'waist-height-ratio-calculator'],
    secondary: ['ideal-weight-calculator', 'biological-age-calculator', 'calorie-calculator', 'blood-pressure-calculator', 'life-expectancy-calculator'],
  },
  'biological-age-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator', 'life-expectancy-calculator'],
    secondary: ['blood-pressure-calculator', 'heart-rate-zone-calculator', 'sleep-calculator', 'waist-hip-ratio-calculator', 'phq9-calculator', 'vo2-max-calculator'],
  },

  // Nutrition calculators
  'calorie-calculator': {
    primary: ['tdee-calculator', 'bmr-calculator', 'calorie-deficit-calculator'],
    secondary: ['weight-loss-calculator', 'macro-calculator', 'protein-calculator', 'bmi-calculator', 'ideal-weight-calculator', 'body-fat-calculator', 'food-calorie-calculator', 'water-intake-calculator'],
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
    primary: ['calorie-calculator', 'tdee-calculator', 'weight-loss-calculator'],
    secondary: ['bmr-calculator', 'macro-calculator', 'ideal-weight-calculator', 'bmi-calculator', 'body-fat-calculator', 'protein-calculator'],
  },
  'protein-calculator': {
    primary: ['macro-calculator', 'calorie-calculator'],
    secondary: ['tdee-calculator', 'bmr-calculator', 'body-fat-calculator', 'ideal-weight-calculator', 'bmi-calculator', 'one-rep-max-calculator'],
  },

  // Pregnancy calculators
  'due-date-calculator': {
    primary: ['pregnancy-week-calculator', 'fetal-weight-calculator', 'ovulation-calculator'],
    secondary: ['pregnancy-weight-gain-calculator', 'chinese-gender-predictor', 'period-calculator', 'bmi-calculator', 'age-calculator'],
  },
  'pregnancy-week-calculator': {
    primary: ['due-date-calculator', 'fetal-weight-calculator', 'pregnancy-weight-gain-calculator'],
    secondary: ['chinese-gender-predictor', 'ovulation-calculator', 'period-calculator', 'bmi-calculator'],
  },
  'chinese-gender-predictor': {
    primary: ['due-date-calculator', 'pregnancy-week-calculator'],
    secondary: ['pregnancy-weight-gain-calculator', 'fetal-weight-calculator', 'ovulation-calculator', 'period-calculator', 'age-calculator', 'love-calculator'],
  },
  'fetal-weight-calculator': {
    primary: ['pregnancy-week-calculator', 'due-date-calculator', 'pregnancy-weight-gain-calculator'],
    secondary: ['chinese-gender-predictor', 'ovulation-calculator', 'bmi-calculator', 'growth-percentile-calculator'],
  },
  'pregnancy-weight-gain-calculator': {
    primary: ['pregnancy-week-calculator', 'due-date-calculator', 'fetal-weight-calculator'],
    secondary: ['bmi-calculator', 'calorie-calculator', 'ideal-weight-calculator', 'chinese-gender-predictor', 'ovulation-calculator'],
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
    secondary: ['calories-burned-calculator', 'heart-rate-zone-calculator', 'calorie-calculator', 'bmr-calculator', 'protein-calculator', 'macro-calculator', 'bmi-calculator'],
  },
  'running-pace-calculator': {
    primary: ['vo2-max-calculator', 'heart-rate-zone-calculator'],
    secondary: ['calories-burned-calculator', 'one-rep-max-calculator', 'calorie-calculator', 'tdee-calculator', 'water-intake-calculator', 'bmi-calculator', 'sleep-calculator'],
  },
  'vo2-max-calculator': {
    primary: ['running-pace-calculator', 'heart-rate-zone-calculator'],
    secondary: ['calories-burned-calculator', 'one-rep-max-calculator', 'bmi-calculator', 'calorie-calculator', 'sleep-calculator', 'biological-age-calculator', 'life-expectancy-calculator'],
  },

  // Heart calculators
  'heart-rate-zone-calculator': {
    primary: ['target-heart-rate-calculator', 'vo2-max-calculator', 'running-pace-calculator'],
    secondary: ['blood-pressure-calculator', 'one-rep-max-calculator', 'calorie-calculator', 'tdee-calculator', 'bmi-calculator', 'biological-age-calculator', 'sleep-calculator'],
  },
  'target-heart-rate-calculator': {
    primary: ['heart-rate-zone-calculator', 'vo2-max-calculator'],
    secondary: ['running-pace-calculator', 'blood-pressure-calculator', 'calories-burned-calculator', 'one-rep-max-calculator', 'calorie-calculator', 'bmi-calculator', 'biological-age-calculator'],
  },
  'blood-pressure-calculator': {
    primary: ['heart-rate-zone-calculator', 'target-heart-rate-calculator', 'life-expectancy-calculator'],
    secondary: ['bmi-calculator', 'calorie-calculator', 'age-calculator', 'biological-age-calculator', 'waist-hip-ratio-calculator', 'gfr-calculator', 'sleep-calculator'],
  },

  // Sleep calculators
  'sleep-calculator': {
    primary: ['sleep-cycle-calculator', 'biological-age-calculator', 'phq9-calculator'],
    secondary: ['life-expectancy-calculator', 'caffeine-calculator', 'heart-rate-zone-calculator', 'bmr-calculator', 'calorie-calculator'],
  },
  'sleep-cycle-calculator': {
    primary: ['sleep-calculator', 'biological-age-calculator', 'caffeine-calculator'],
    secondary: ['phq9-calculator', 'gad7-calculator', 'stress-level-calculator', 'life-expectancy-calculator'],
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
    primary: ['gad7-calculator', 'stress-level-calculator', 'sleep-calculator'],
    secondary: ['life-expectancy-calculator', 'biological-age-calculator', 'caffeine-calculator', 'bmi-calculator', 'blood-pressure-calculator'],
  },
  'gad7-calculator': {
    primary: ['phq9-calculator', 'stress-level-calculator', 'sleep-calculator'],
    secondary: ['biological-age-calculator', 'life-expectancy-calculator', 'caffeine-calculator', 'bmi-calculator', 'blood-pressure-calculator', 'heart-rate-zone-calculator'],
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
    primary: ['bmi-calculator', 'age-calculator', 'height-predictor-calculator'],
    secondary: ['calorie-calculator', 'macro-calculator', 'protein-calculator', 'water-intake-calculator'],
  },
  'height-predictor-calculator': {
    primary: ['growth-percentile-calculator', 'bmi-calculator', 'age-calculator'],
    secondary: ['ideal-weight-calculator', 'biological-age-calculator', 'calorie-calculator', 'protein-calculator'],
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
    primary: ['caffeine-calculator', 'smoking-cessation-calculator', 'water-intake-calculator'],
    secondary: ['calorie-calculator', 'body-fat-calculator', 'bmr-calculator', 'bmi-calculator', 'life-expectancy-calculator', 'sleep-calculator'],
  },
  'caffeine-calculator': {
    primary: ['blood-alcohol-calculator', 'smoking-cessation-calculator', 'water-intake-calculator'],
    secondary: ['sleep-calculator', 'calorie-calculator', 'bmr-calculator', 'heart-rate-zone-calculator', 'blood-pressure-calculator', 'phq9-calculator'],
  },

  // Body Weight - Lean Body Mass
  'lean-body-mass-calculator': {
    primary: ['body-fat-calculator', 'bmi-calculator', 'ideal-weight-calculator'],
    secondary: ['waist-hip-ratio-calculator', 'bmr-calculator', 'tdee-calculator', 'protein-calculator', 'one-rep-max-calculator', 'biological-age-calculator'],
  },

  // Nutrition - Keto
  'keto-calculator': {
    primary: ['macro-calculator', 'tdee-calculator', 'calorie-calculator'],
    secondary: ['protein-calculator', 'intermittent-fasting-calculator', 'calorie-deficit-calculator', 'body-fat-calculator', 'bmr-calculator', 'water-intake-calculator'],
  },

  // Nutrition - Intermittent Fasting (add keto as related)
  'intermittent-fasting-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator', 'keto-calculator'],
    secondary: ['macro-calculator', 'calorie-deficit-calculator', 'bmr-calculator', 'bmi-calculator', 'water-intake-calculator'],
  },

  // Fitness - Calories Burned
  'calories-burned-calculator': {
    primary: ['calorie-calculator', 'tdee-calculator', 'running-pace-calculator'],
    secondary: ['vo2-max-calculator', 'one-rep-max-calculator', 'heart-rate-zone-calculator', 'calorie-deficit-calculator', 'bmr-calculator', 'water-intake-calculator'],
  },

  // Mental Health - Stress Level
  'stress-level-calculator': {
    primary: ['phq9-calculator', 'gad7-calculator', 'sleep-calculator'],
    secondary: ['biological-age-calculator', 'life-expectancy-calculator', 'caffeine-calculator', 'blood-pressure-calculator', 'heart-rate-zone-calculator'],
  },

  // Body Weight - Body Type
  'body-type-calculator': {
    primary: ['bmi-calculator', 'body-fat-calculator', 'ideal-weight-calculator'],
    secondary: ['lean-body-mass-calculator', 'waist-hip-ratio-calculator', 'waist-height-ratio-calculator', 'macro-calculator', 'tdee-calculator', 'protein-calculator', 'biological-age-calculator'],
  },

  // Body Weight - Waist-Height Ratio
  'waist-height-ratio-calculator': {
    primary: ['bmi-calculator', 'waist-hip-ratio-calculator', 'body-fat-calculator'],
    secondary: ['ideal-weight-calculator', 'body-type-calculator', 'lean-body-mass-calculator', 'biological-age-calculator', 'blood-pressure-calculator', 'life-expectancy-calculator', 'calorie-calculator'],
  },

  // Substance - Smoking Cessation
  'smoking-cessation-calculator': {
    primary: ['caffeine-calculator', 'blood-alcohol-calculator', 'life-expectancy-calculator'],
    secondary: ['biological-age-calculator', 'blood-pressure-calculator', 'stress-level-calculator', 'sleep-calculator', 'calorie-calculator', 'bmi-calculator'],
  },

  // Nutrition - Weight Loss
  'weight-loss-calculator': {
    primary: ['calorie-deficit-calculator', 'tdee-calculator', 'calorie-calculator'],
    secondary: ['bmr-calculator', 'macro-calculator', 'bmi-calculator', 'ideal-weight-calculator', 'protein-calculator', 'intermittent-fasting-calculator', 'body-fat-calculator'],
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
