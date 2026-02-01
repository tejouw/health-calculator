import { CalorieDeficitInput, CalorieDeficitResult, ActivityLevel, WeightLossGoal } from './calorieDeficitTypes';

/**
 * Activity level multipliers for TDEE calculation
 */
const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

/**
 * Weight loss goal to weekly kg loss mapping
 */
const weightLossRates = {
  conservative: 0.25, // 0.25 kg/week (0.5 lbs)
  moderate: 0.5,      // 0.5 kg/week (1 lb)
  aggressive: 0.75,   // 0.75 kg/week (1.5 lbs)
  maximum: 1.0,       // 1 kg/week (2 lbs)
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation
 */
function calculateBMR(
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
 * Calculate TDEE from BMR and activity level
 */
function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return Math.round(bmr * activityMultipliers[activityLevel]);
}

/**
 * Calculate calorie deficit needed for target weight loss rate
 * 1 kg fat = approximately 7,700 calories
 */
function calculateDeficitForGoal(goal: WeightLossGoal): number {
  const weeklyLossKg = weightLossRates[goal];
  const caloriesPerKg = 7700;
  const dailyDeficit = (weeklyLossKg * caloriesPerKg) / 7;
  return Math.round(dailyDeficit);
}

/**
 * Calculate macronutrient distribution for weight loss
 */
function calculateMacros(dailyCalories: number, weightKg: number): {
  protein: number;
  fat: number;
  carbs: number;
} {
  // High protein during deficit: 2.2g per kg body weight
  const proteinGrams = Math.round(weightKg * 2.2);
  const proteinCalories = proteinGrams * 4;

  // Fat: 25-30% of total calories
  const fatCalories = Math.round(dailyCalories * 0.27);
  const fatGrams = Math.round(fatCalories / 9);

  // Carbs: remaining calories
  const carbCalories = dailyCalories - proteinCalories - fatCalories;
  const carbGrams = Math.round(carbCalories / 4);

  return {
    protein: proteinGrams,
    fat: fatGrams,
    carbs: Math.max(carbGrams, 50), // Minimum 50g carbs
  };
}

/**
 * Check if deficit is safe and generate warnings
 */
function checkSafety(
  deficit: number,
  tdee: number,
  dailyTarget: number,
  gender: 'male' | 'female'
): { isSafe: boolean; warnings: string[] } {
  const warnings: string[] = [];
  let isSafe = true;

  // Minimum calorie thresholds
  const minCalories = gender === 'male' ? 1500 : 1200;

  // Check if daily target is below minimum
  if (dailyTarget < minCalories) {
    warnings.push(`Daily calories below minimum safe level (${minCalories} cal)`);
    isSafe = false;
  }

  // Check if deficit is too aggressive (>25% of TDEE)
  const deficitPercentage = (deficit / tdee) * 100;
  if (deficitPercentage > 25) {
    warnings.push(`Deficit exceeds 25% of TDEE - may be too aggressive`);
    isSafe = false;
  }

  // Check if deficit is very large (>1000 cal)
  if (deficit > 1000) {
    warnings.push(`Very large deficit (${deficit} cal) - consider smaller deficit`);
    isSafe = false;
  }

  // Recommend medical supervision for very low calories
  if (dailyTarget < 1000) {
    warnings.push(`Extremely low calorie diet - medical supervision required`);
    isSafe = false;
  }

  return { isSafe, warnings };
}

/**
 * Calculate time to reach target weight
 */
function calculateTimeline(
  currentWeight: number,
  targetWeight: number,
  weeklyLoss: number,
  unit: 'metric' | 'imperial'
): {
  weeks: number;
  months: number;
  completionDate: Date;
} {
  let currentKg = currentWeight;
  let targetKg = targetWeight;

  if (unit === 'imperial') {
    currentKg = currentWeight * 0.453592;
    targetKg = targetWeight * 0.453592;
  }

  const totalLoss = currentKg - targetKg;
  const weeks = Math.ceil(totalLoss / weeklyLoss);
  const months = Math.round((weeks / 4.33) * 10) / 10;

  const completionDate = new Date();
  completionDate.setDate(completionDate.getDate() + weeks * 7);

  return {
    weeks,
    months,
    completionDate,
  };
}

/**
 * Main calorie deficit calculator function
 */
export function calculateCalorieDeficit(input: CalorieDeficitInput): CalorieDeficitResult {
  // Calculate BMR and TDEE
  const bmr = calculateBMR(input.weight, input.height, input.age, input.gender, input.unit);
  const tdee = calculateTDEE(bmr, input.activityLevel);

  // Calculate deficit for chosen goal
  const recommendedDeficit = calculateDeficitForGoal(input.weightLossGoal);
  const dailyCalorieTarget = tdee - recommendedDeficit;

  // Get weight in kg for macro calculations
  const weightKg = input.unit === 'imperial' ? input.weight * 0.453592 : input.weight;

  // Calculate macros
  const macros = calculateMacros(dailyCalorieTarget, weightKg);

  // Calculate weight loss rates
  const weeklyWeightLoss = weightLossRates[input.weightLossGoal];
  const weeklyWeightLossPounds = weeklyWeightLoss * 2.20462;
  const monthlyWeightLoss = weeklyWeightLoss * 4.33;
  const monthlyWeightLossPounds = monthlyWeightLoss * 2.20462;

  // Check safety
  const safety = checkSafety(recommendedDeficit, tdee, dailyCalorieTarget, input.gender);

  // Calculate timeline if target weight provided
  let timeline;
  if (input.targetWeight && input.targetWeight < input.weight) {
    timeline = calculateTimeline(
      input.weight,
      input.targetWeight,
      weeklyWeightLoss,
      input.unit
    );
  }

  const deficitPercentage = Math.round((recommendedDeficit / tdee) * 100);

  return {
    bmr,
    tdee,
    currentWeight: input.weight,
    recommendedDeficit,
    dailyCalorieTarget: Math.round(dailyCalorieTarget),
    deficitPercentage,
    weeklyWeightLoss: Math.round(weeklyWeightLoss * 10) / 10,
    weeklyWeightLossPounds: Math.round(weeklyWeightLossPounds * 10) / 10,
    monthlyWeightLoss: Math.round(monthlyWeightLoss * 10) / 10,
    monthlyWeightLossPounds: Math.round(monthlyWeightLossPounds * 10) / 10,
    weeksToGoal: timeline?.weeks,
    monthsToGoal: timeline?.months,
    estimatedCompletionDate: timeline?.completionDate,
    proteinGrams: macros.protein,
    fatGrams: macros.fat,
    carbsGrams: macros.carbs,
    isSafe: safety.isSafe,
    warnings: safety.warnings,
  };
}

/**
 * Get weight loss goal description
 */
export function getGoalDescription(goal: WeightLossGoal, locale: 'en' | 'tr'): string {
  const descriptions = {
    conservative: {
      en: 'Slow and steady - easiest to maintain',
      tr: 'Yavaş ve istikrarlı - en kolay sürdürülebilir',
    },
    moderate: {
      en: 'Balanced approach - recommended for most',
      tr: 'Dengeli yaklaşım - çoğu için önerilir',
    },
    aggressive: {
      en: 'Faster results - requires discipline',
      tr: 'Daha hızlı sonuçlar - disiplin gerektirir',
    },
    maximum: {
      en: 'Maximum safe rate - challenging to sustain',
      tr: 'Maksimum güvenli oran - sürdürmek zor',
    },
  };

  return descriptions[goal][locale];
}

/**
 * Get activity level description
 */
export function getActivityDescription(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const descriptions = {
    sedentary: {
      en: 'Little or no exercise, desk job',
      tr: 'Az veya hiç egzersiz, masa başı iş',
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
      en: 'Very intense exercise, athlete',
      tr: 'Çok yoğun egzersiz, sporcu',
    },
  };

  return descriptions[level][locale];
}

export { activityMultipliers, weightLossRates };
