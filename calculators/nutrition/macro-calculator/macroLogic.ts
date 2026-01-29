import { MacroInput, MacroResult, MacroRatio, DietType } from './macroTypes';

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const goalAdjustments = {
  lose: -500, // 500 calorie deficit
  maintain: 0,
  gain: 300, // 300 calorie surplus
};

// Macro ratios for different diet types (protein:carbs:fat percentages)
const dietRatios: Record<DietType, MacroRatio> = {
  balanced: { protein: 30, carbs: 40, fat: 30 },
  lowCarb: { protein: 35, carbs: 25, fat: 40 },
  lowFat: { protein: 30, carbs: 50, fat: 20 },
  highProtein: { protein: 40, carbs: 30, fat: 30 },
  keto: { protein: 25, carbs: 5, fat: 70 },
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
function calculateTDEE(bmr: number, activityLevel: keyof typeof activityMultipliers): number {
  return Math.round(bmr * activityMultipliers[activityLevel]);
}

/**
 * Calculate target calories based on goal
 */
function calculateTargetCalories(tdee: number, goal: keyof typeof goalAdjustments): number {
  const adjustment = goalAdjustments[goal];
  return Math.round(tdee + adjustment);
}

/**
 * Calculate macronutrient distribution
 */
function calculateMacros(
  targetCalories: number,
  weight: number,
  goal: 'lose' | 'maintain' | 'gain',
  dietType: DietType = 'balanced'
): {
  protein: { grams: number; calories: number; percentage: number };
  carbs: { grams: number; calories: number; percentage: number };
  fat: { grams: number; calories: number; percentage: number };
} {
  const ratio = dietRatios[dietType];

  // Calculate calories for each macro
  const proteinCalories = (targetCalories * ratio.protein) / 100;
  const carbCalories = (targetCalories * ratio.carbs) / 100;
  const fatCalories = (targetCalories * ratio.fat) / 100;

  // Convert to grams (protein: 4 cal/g, carbs: 4 cal/g, fat: 9 cal/g)
  const proteinGrams = Math.round(proteinCalories / 4);
  const carbGrams = Math.round(carbCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);

  return {
    protein: {
      grams: proteinGrams,
      calories: Math.round(proteinCalories),
      percentage: ratio.protein,
    },
    carbs: {
      grams: carbGrams,
      calories: Math.round(carbCalories),
      percentage: ratio.carbs,
    },
    fat: {
      grams: fatGrams,
      calories: Math.round(fatCalories),
      percentage: ratio.fat,
    },
  };
}

/**
 * Main macro calculator function
 */
export function calculateMacronutrients(input: MacroInput): MacroResult {
  const bmr = calculateBMR(input.weight, input.height, input.age, input.gender, input.unit);
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const targetCalories = calculateTargetCalories(tdee, input.goal);
  const macros = calculateMacros(targetCalories, input.weight, input.goal, input.dietType);

  // Calculate meal distribution (optional, can be used for meal planning)
  const mealsPerDay = {
    breakfast: {
      calories: Math.round(targetCalories * 0.25),
      protein: Math.round(macros.protein.grams * 0.25),
      carbs: Math.round(macros.carbs.grams * 0.25),
      fat: Math.round(macros.fat.grams * 0.25),
    },
    lunch: {
      calories: Math.round(targetCalories * 0.35),
      protein: Math.round(macros.protein.grams * 0.35),
      carbs: Math.round(macros.carbs.grams * 0.35),
      fat: Math.round(macros.fat.grams * 0.35),
    },
    dinner: {
      calories: Math.round(targetCalories * 0.3),
      protein: Math.round(macros.protein.grams * 0.3),
      carbs: Math.round(macros.carbs.grams * 0.3),
      fat: Math.round(macros.fat.grams * 0.3),
    },
    snacks: {
      calories: Math.round(targetCalories * 0.1),
      protein: Math.round(macros.protein.grams * 0.1),
      carbs: Math.round(macros.carbs.grams * 0.1),
      fat: Math.round(macros.fat.grams * 0.1),
    },
  };

  return {
    tdee,
    targetCalories,
    ...macros,
    mealsPerDay,
  };
}

export function getDietTypeDescription(dietType: DietType, locale: 'en' | 'tr'): string {
  const descriptions = {
    balanced: {
      en: '30% protein, 40% carbs, 30% fat - Balanced approach for general health and fitness',
      tr: '%30 protein, %40 karbonhidrat, %30 yağ - Genel sağlık ve fitness için dengeli yaklaşım',
    },
    lowCarb: {
      en: '35% protein, 25% carbs, 40% fat - Lower carb intake for steady energy',
      tr: '%35 protein, %25 karbonhidrat, %40 yağ - Dengeli enerji için düşük karbonhidrat',
    },
    lowFat: {
      en: '30% protein, 50% carbs, 20% fat - Lower fat for those preferring carbs',
      tr: '%30 protein, %50 karbonhidrat, %20 yağ - Karbonhidratı tercih edenler için düşük yağ',
    },
    highProtein: {
      en: '40% protein, 30% carbs, 30% fat - High protein for muscle building',
      tr: '%40 protein, %30 karbonhidrat, %30 yağ - Kas gelişimi için yüksek protein',
    },
    keto: {
      en: '25% protein, 5% carbs, 70% fat - Very low carb ketogenic diet',
      tr: '%25 protein, %5 karbonhidrat, %70 yağ - Çok düşük karbonhidratlı ketojenik diyet',
    },
  };

  return descriptions[dietType][locale];
}

export { dietRatios };
