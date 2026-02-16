import { LeanBodyMassInput, LeanBodyMassResult } from './leanBodyMassTypes';

/**
 * Convert imperial to metric if needed
 */
function toMetric(input: LeanBodyMassInput): { heightCm: number; weightKg: number } {
  if (input.unit === 'imperial') {
    return {
      heightCm: input.height * 2.54,
      weightKg: input.weight * 0.453592,
    };
  }
  return {
    heightCm: input.height,
    weightKg: input.weight,
  };
}

/**
 * Boer Formula (1984)
 * Male: LBM = 0.407 × weight(kg) + 0.267 × height(cm) - 19.2
 * Female: LBM = 0.252 × weight(kg) + 0.473 × height(cm) - 48.3
 */
export function calculateBoer(heightCm: number, weightKg: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 0.407 * weightKg + 0.267 * heightCm - 19.2;
  }
  return 0.252 * weightKg + 0.473 * heightCm - 48.3;
}

/**
 * James Formula (1976)
 * Male: LBM = 1.1 × weight(kg) - 128 × (weight(kg) / height(cm))²
 * Female: LBM = 1.07 × weight(kg) - 148 × (weight(kg) / height(cm))²
 */
export function calculateJames(heightCm: number, weightKg: number, gender: 'male' | 'female'): number {
  const ratio = weightKg / heightCm;
  if (gender === 'male') {
    return 1.1 * weightKg - 128 * ratio * ratio;
  }
  return 1.07 * weightKg - 148 * ratio * ratio;
}

/**
 * Hume Formula (1966)
 * Male: LBM = 0.32810 × weight(kg) + 0.33929 × height(cm) - 29.5336
 * Female: LBM = 0.29569 × weight(kg) + 0.41813 × height(cm) - 43.2933
 */
export function calculateHume(heightCm: number, weightKg: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 0.32810 * weightKg + 0.33929 * heightCm - 29.5336;
  }
  return 0.29569 * weightKg + 0.41813 * heightCm - 43.2933;
}

/**
 * Calculate Lean Body Mass using all three formulas
 */
export function calculateLeanBodyMass(input: LeanBodyMassInput): LeanBodyMassResult {
  const { heightCm, weightKg } = toMetric(input);

  const boer = Math.round(calculateBoer(heightCm, weightKg, input.gender) * 10) / 10;
  const james = Math.round(calculateJames(heightCm, weightKg, input.gender) * 10) / 10;
  const hume = Math.round(calculateHume(heightCm, weightKg, input.gender) * 10) / 10;
  const average = Math.round(((boer + james + hume) / 3) * 10) / 10;

  const bodyFatMass = Math.round((weightKg - average) * 10) / 10;
  const bodyFatPercentage = Math.round(((weightKg - average) / weightKg) * 1000) / 10;
  const leanPercentage = Math.round((average / weightKg) * 1000) / 10;

  return {
    boer,
    james,
    hume,
    average,
    bodyFatMass,
    bodyFatPercentage,
    leanPercentage,
  };
}

/**
 * Get healthy lean body mass percentage range by gender
 */
export function getHealthyLeanRange(gender: 'male' | 'female'): { min: number; max: number } {
  if (gender === 'male') {
    return { min: 75, max: 90 };
  }
  return { min: 65, max: 80 };
}

/**
 * Interpret lean body mass percentage
 */
export function interpretLeanPercentage(
  leanPercentage: number,
  gender: 'male' | 'female'
): 'low' | 'healthy' | 'athletic' {
  const range = getHealthyLeanRange(gender);
  if (leanPercentage < range.min) return 'low';
  if (leanPercentage > range.max) return 'athletic';
  return 'healthy';
}
