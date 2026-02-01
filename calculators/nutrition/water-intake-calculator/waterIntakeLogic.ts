import { WaterIntakeInput, WaterIntakeResult, ActivityLevel, ClimateType, SpecialCondition } from './waterIntakeTypes';

/**
 * Activity level multipliers for water intake adjustments
 * Based on increased perspiration and metabolic water needs
 */
const activityMultipliers = {
  sedentary: 1.0,
  light: 1.1,
  moderate: 1.2,
  active: 1.4,
  veryActive: 1.6,
};

/**
 * Climate-based adjustment multipliers
 * Higher temperatures and humidity increase water loss through perspiration
 */
const climateMultipliers = {
  cold: 1.0,
  temperate: 1.0,
  warm: 1.15,
  hot: 1.3,
};

/**
 * Special condition adjustments (in ml)
 * Based on physiological water requirements
 */
const specialConditionAdjustments = {
  none: 0,
  pregnancy: 300, // Additional 300ml for amniotic fluid and increased blood volume
  breastfeeding: 700, // Additional 700ml for milk production
  illness: 500, // Additional 500ml for fever, diarrhea, or illness recovery
  athlete: 1000, // Additional 1000ml for intensive training
};

/**
 * Calculate baseline water intake using body weight
 * Uses the standard formula: 30-35ml per kg of body weight
 * For imperial: approximately 0.5-0.67 oz per pound
 */
function calculateBaselineIntake(
  weight: number,
  gender: 'male' | 'female',
  age: number,
  unit: 'metric' | 'imperial'
): number {
  let weightKg: number;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
  } else {
    weightKg = weight;
  }

  // Base formula: 35ml per kg for men, 31ml per kg for women
  // Adjusted slightly for age (older adults need slightly less due to decreased kidney function)
  let mlPerKg = gender === 'male' ? 35 : 31;

  // Age adjustment: reduce by 1ml per kg for every decade over 50
  if (age > 50) {
    const ageDecades = Math.floor((age - 50) / 10);
    mlPerKg -= ageDecades * 1;
  }

  // Ensure minimum of 25ml/kg
  mlPerKg = Math.max(mlPerKg, 25);

  return Math.round(weightKg * mlPerKg);
}

/**
 * Apply activity level adjustment to baseline intake
 */
function applyActivityAdjustment(baseline: number, activityLevel: ActivityLevel): number {
  const multiplier = activityMultipliers[activityLevel];
  return Math.round(baseline * (multiplier - 1));
}

/**
 * Apply climate adjustment to baseline intake
 */
function applyClimateAdjustment(baseline: number, climate: ClimateType): number {
  const multiplier = climateMultipliers[climate];
  return Math.round(baseline * (multiplier - 1));
}

/**
 * Get special condition adjustment
 */
function getSpecialConditionAdjustment(condition?: SpecialCondition): number {
  if (!condition || condition === 'none') return 0;
  return specialConditionAdjustments[condition];
}

/**
 * Calculate recommended distribution throughout the day
 * Morning: 30%, Afternoon: 40%, Evening: 30%
 */
function calculateDailyDistribution(totalIntake: number): {
  morning: number;
  afternoon: number;
  evening: number;
} {
  return {
    morning: Math.round(totalIntake * 0.3),
    afternoon: Math.round(totalIntake * 0.4),
    evening: Math.round(totalIntake * 0.3),
  };
}

/**
 * Main water intake calculator function
 * Calculates personalized daily water intake based on multiple factors
 */
export function calculateWaterIntake(input: WaterIntakeInput): WaterIntakeResult {
  // Calculate baseline water intake
  const baselineIntake = calculateBaselineIntake(
    input.weight,
    input.gender,
    input.age,
    input.unit
  );

  // Calculate adjustments
  const activityAdjustment = applyActivityAdjustment(baselineIntake, input.activityLevel);
  const climateAdjustment = applyClimateAdjustment(baselineIntake, input.climate);
  const specialConditionAdjustment = getSpecialConditionAdjustment(input.specialCondition);

  // Calculate total daily intake in ml
  const dailyIntake =
    baselineIntake +
    activityAdjustment +
    climateAdjustment +
    specialConditionAdjustment;

  // Convert to different units
  const dailyIntakeOz = Math.round(dailyIntake * 0.033814);
  const dailyIntakeLiters = Math.round((dailyIntake / 1000) * 10) / 10;
  const dailyIntakeCups = Math.round(dailyIntake / 237); // 1 cup = 237ml (8 oz)

  // Calculate daily distribution
  const recommendations = calculateDailyDistribution(dailyIntake);

  return {
    dailyIntake,
    dailyIntakeOz,
    dailyIntakeLiters,
    dailyIntakeCups,
    baselineIntake,
    activityAdjustment,
    climateAdjustment,
    specialConditionAdjustment,
    recommendations,
  };
}

/**
 * Get activity level description
 */
export function getActivityDescription(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const descriptions = {
    sedentary: {
      en: 'Little or no exercise, desk job',
      tr: 'Çok az veya hiç egzersiz yok, masa başı iş',
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
      en: 'Very intense exercise, physical job, or athlete',
      tr: 'Çok yoğun egzersiz, fiziksel iş veya sporcu',
    },
  };

  return descriptions[level][locale];
}

/**
 * Get climate description
 */
export function getClimateDescription(climate: ClimateType, locale: 'en' | 'tr'): string {
  const descriptions = {
    cold: {
      en: 'Cold climate (below 15°C / 59°F)',
      tr: 'Soğuk iklim (15°C / 59°F altı)',
    },
    temperate: {
      en: 'Temperate climate (15-25°C / 59-77°F)',
      tr: 'Ilıman iklim (15-25°C / 59-77°F)',
    },
    warm: {
      en: 'Warm climate (25-30°C / 77-86°F)',
      tr: 'Sıcak iklim (25-30°C / 77-86°F)',
    },
    hot: {
      en: 'Hot climate (above 30°C / 86°F)',
      tr: 'Çok sıcak iklim (30°C / 86°F üstü)',
    },
  };

  return descriptions[climate][locale];
}

/**
 * Get hydration status based on daily intake and body weight
 */
export function getHydrationStatus(dailyIntakeMl: number, weightKg: number): {
  status: 'low' | 'adequate' | 'optimal' | 'high';
  message: string;
} {
  const mlPerKg = dailyIntakeMl / weightKg;

  if (mlPerKg < 25) {
    return {
      status: 'low',
      message: 'Below recommended minimum - increase water intake',
    };
  } else if (mlPerKg < 30) {
    return {
      status: 'adequate',
      message: 'Adequate hydration - meeting basic needs',
    };
  } else if (mlPerKg <= 40) {
    return {
      status: 'optimal',
      message: 'Optimal hydration for health and performance',
    };
  } else {
    return {
      status: 'high',
      message: 'Very high intake - ensure not overhydrating',
    };
  }
}

export { activityMultipliers, climateMultipliers, specialConditionAdjustments };
