import { BMRInput, BMRResult, ActivityLevel } from './bmrTypes';

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation (most accurate modern formula)
 * This formula is more accurate than Harris-Benedict, especially for modern populations
 */
function calculateBMRMifflinStJeor(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  unit: 'metric' | 'imperial'
): number {
  let weightKg: number;
  let heightCm: number;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
    heightCm = height * 2.54;
  } else {
    weightKg = weight;
    heightCm = height;
  }

  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  return Math.round(bmr);
}

/**
 * Calculate BMR using Harris-Benedict Equation (classic formula, less accurate for modern populations)
 * Provided as comparison; Mifflin-St Jeor is generally preferred
 */
function calculateBMRHarrisBenedict(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  unit: 'metric' | 'imperial'
): number {
  let weightKg: number;
  let heightCm: number;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
    heightCm = height * 2.54;
  } else {
    weightKg = weight;
    heightCm = height;
  }

  // Harris-Benedict Original (1919)
  const bmr =
    gender === 'male'
      ? 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
      : 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;

  return Math.round(bmr);
}

/**
 * Calculate daily calorie needs at different activity levels (TDEE for each level)
 */
function calculateActivityLevelCalories(bmr: number): Record<ActivityLevel, number> {
  return {
    sedentary: Math.round(bmr * activityMultipliers.sedentary),
    light: Math.round(bmr * activityMultipliers.light),
    moderate: Math.round(bmr * activityMultipliers.moderate),
    active: Math.round(bmr * activityMultipliers.active),
    veryActive: Math.round(bmr * activityMultipliers.veryActive),
  };
}

/**
 * Main BMR calculator function
 * Returns BMR using Mifflin-St Jeor formula and comparison with Harris-Benedict
 * Also provides TDEE calculations for each activity level
 */
export function calculateBMR(input: BMRInput): BMRResult {
  const bmrMifflin = calculateBMRMifflinStJeor(
    input.weight,
    input.height,
    input.age,
    input.gender,
    input.unit
  );

  const bmrHarris = calculateBMRHarrisBenedict(
    input.weight,
    input.height,
    input.age,
    input.gender,
    input.unit
  );

  const activityLevels = calculateActivityLevelCalories(bmrMifflin);

  return {
    bmr: bmrMifflin,
    bmrHarrisBenedict: bmrHarris,
    activityLevels,
  };
}

/**
 * Get activity level description
 */
export function getActivityDescription(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const descriptions = {
    sedentary: {
      en: 'Little or no exercise, mostly sitting',
      tr: 'Çok az veya hiç egzersiz yok, çoğunlukla oturan',
    },
    light: {
      en: 'Light exercise 1-3 days per week',
      tr: 'Haftada 1-3 gün hafif egzersiz',
    },
    moderate: {
      en: 'Moderate exercise 3-5 days per week',
      tr: 'Haftada 3-5 gün orta düzey egzersiz',
    },
    active: {
      en: 'Intense exercise 6-7 days per week',
      tr: 'Haftada 6-7 gün yoğun egzersiz',
    },
    veryActive: {
      en: 'Very intense exercise or physical job, twice daily',
      tr: 'Çok yoğun egzersiz veya fiziksel iş, günde iki kez',
    },
  };

  return descriptions[level][locale];
}

/**
 * Get the caloric deficit/surplus recommendation for weight loss
 */
export function getWeightLossTarget(bmr: number, activityLevel: ActivityLevel): number {
  const tdee = Math.round(bmr * activityMultipliers[activityLevel]);
  // 500 calorie deficit for approximately 1 pound fat loss per week
  return tdee - 500;
}

/**
 * Get the caloric surplus recommendation for muscle gain
 */
export function getMuscleGainTarget(bmr: number, activityLevel: ActivityLevel): number {
  const tdee = Math.round(bmr * activityMultipliers[activityLevel]);
  // 300-500 calorie surplus for muscle gain
  return tdee + 400;
}

/**
 * Get caloric maintenance (TDEE) for a specific activity level
 */
export function getTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return Math.round(bmr * activityMultipliers[activityLevel]);
}

export { activityMultipliers };
