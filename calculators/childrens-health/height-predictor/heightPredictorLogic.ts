import { HeightPredictorInput, HeightPredictorResult } from './heightPredictorTypes';

// Average adult heights by gender (cm)
const AVERAGE_HEIGHT = {
  boy: 175.3, // Global average for males
  girl: 161.9, // Global average for females
};

// Mid-Parental Height adjustment (cm)
const GENDER_ADJUSTMENT = 13;

// Standard deviation range for prediction (cm)
const PREDICTION_RANGE = 8.5;

/**
 * Converts imperial height (inches) to metric (cm)
 */
function inchesToCm(inches: number): number {
  return inches * 2.54;
}

/**
 * Converts metric height (cm) to imperial (inches)
 */
function cmToInches(cm: number): number {
  return cm / 2.54;
}

/**
 * Calculates predicted adult height using the Mid-Parental Height method
 * For boys: (father's height + mother's height + 13) / 2
 * For girls: (father's height + mother's height - 13) / 2
 */
export function calculateHeightPrediction(input: HeightPredictorInput): HeightPredictorResult {
  let fatherCm = input.fatherHeight;
  let motherCm = input.motherHeight;

  // Convert to cm if imperial
  if (input.unit === 'imperial') {
    fatherCm = inchesToCm(input.fatherHeight);
    motherCm = inchesToCm(input.motherHeight);
  }

  // Mid-Parental Height calculation
  let midParentalHeight: number;
  let predictedHeight: number;

  if (input.childGender === 'boy') {
    midParentalHeight = (fatherCm + motherCm + GENDER_ADJUSTMENT) / 2;
  } else {
    midParentalHeight = (fatherCm + motherCm - GENDER_ADJUSTMENT) / 2;
  }

  predictedHeight = midParentalHeight;

  // Calculate range
  let rangeMin = predictedHeight - PREDICTION_RANGE;
  let rangeMax = predictedHeight + PREDICTION_RANGE;

  // Average height comparison
  const avgHeight = AVERAGE_HEIGHT[input.childGender];
  const comparisonToAverage = predictedHeight - avgHeight;

  // Genetic potential percentage (how the predicted height relates to average)
  const geneticPotentialPercent = Math.round((predictedHeight / avgHeight) * 100);

  // Convert results back to imperial if needed
  if (input.unit === 'imperial') {
    predictedHeight = cmToInches(predictedHeight);
    rangeMin = cmToInches(rangeMin);
    rangeMax = cmToInches(rangeMax);
    midParentalHeight = cmToInches(midParentalHeight);

    return {
      predictedHeight: Math.round(predictedHeight * 10) / 10,
      rangeMin: Math.round(rangeMin * 10) / 10,
      rangeMax: Math.round(rangeMax * 10) / 10,
      midParentalHeight: Math.round(midParentalHeight * 10) / 10,
      geneticPotentialPercent,
      comparisonToAverage: Math.round(cmToInches(comparisonToAverage) * 10) / 10,
      averageHeight: Math.round(cmToInches(avgHeight) * 10) / 10,
      unit: 'imperial',
      childGender: input.childGender,
    };
  }

  return {
    predictedHeight: Math.round(predictedHeight * 10) / 10,
    rangeMin: Math.round(rangeMin * 10) / 10,
    rangeMax: Math.round(rangeMax * 10) / 10,
    midParentalHeight: Math.round(midParentalHeight * 10) / 10,
    geneticPotentialPercent,
    comparisonToAverage: Math.round(comparisonToAverage * 10) / 10,
    averageHeight: Math.round(avgHeight * 10) / 10,
    unit: 'metric',
    childGender: input.childGender,
  };
}

/**
 * Returns height category based on percentile comparison
 */
export function getHeightCategory(
  predictedHeight: number,
  gender: 'boy' | 'girl',
  unit: 'metric' | 'imperial'
): { category: string; label: { en: string; tr: string }; color: string } {
  let heightCm = predictedHeight;
  if (unit === 'imperial') {
    heightCm = inchesToCm(predictedHeight);
  }

  const avg = AVERAGE_HEIGHT[gender];
  const diff = heightCm - avg;

  if (diff < -10) {
    return {
      category: 'below-average',
      label: { en: 'Below Average', tr: 'Ortalamanın Altında' },
      color: 'blue',
    };
  }
  if (diff < -3) {
    return {
      category: 'slightly-below',
      label: { en: 'Slightly Below Average', tr: 'Ortalamanın Biraz Altında' },
      color: 'cyan',
    };
  }
  if (diff <= 3) {
    return {
      category: 'average',
      label: { en: 'Average Height', tr: 'Ortalama Boy' },
      color: 'green',
    };
  }
  if (diff <= 10) {
    return {
      category: 'slightly-above',
      label: { en: 'Slightly Above Average', tr: 'Ortalamanın Biraz Üstünde' },
      color: 'emerald',
    };
  }
  return {
    category: 'above-average',
    label: { en: 'Above Average', tr: 'Ortalamanın Üstünde' },
    color: 'purple',
  };
}

/**
 * Format height for display
 */
export function formatHeight(cm: number, unit: 'metric' | 'imperial'): string {
  if (unit === 'imperial') {
    const totalInches = cmToInches(cm);
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}"`;
  }
  return `${Math.round(cm * 10) / 10} cm`;
}
