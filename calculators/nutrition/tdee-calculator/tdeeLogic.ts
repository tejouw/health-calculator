import { TDEEInput, TDEEResult, ActivityLevel, ActivityLevelInfo, Goal, GoalInfo } from './tdeeTypes';

export const activityLevels: ActivityLevelInfo[] = [
  {
    id: 'sedentary',
    label: {
      en: 'Sedentary',
      tr: 'Hareketsiz',
    },
    description: {
      en: 'Little or no exercise, desk job',
      tr: 'Az veya hiç egzersiz yok, masa başı iş',
    },
    multiplier: 1.2,
  },
  {
    id: 'lightly_active',
    label: {
      en: 'Lightly Active',
      tr: 'Hafif Aktif',
    },
    description: {
      en: 'Light exercise 1-3 days per week',
      tr: 'Haftada 1-3 gün hafif egzersiz',
    },
    multiplier: 1.375,
  },
  {
    id: 'moderately_active',
    label: {
      en: 'Moderately Active',
      tr: 'Orta Aktif',
    },
    description: {
      en: 'Moderate exercise 3-5 days per week',
      tr: 'Haftada 3-5 gün orta şiddette egzersiz',
    },
    multiplier: 1.55,
  },
  {
    id: 'very_active',
    label: {
      en: 'Very Active',
      tr: 'Çok Aktif',
    },
    description: {
      en: 'Hard exercise 6-7 days per week',
      tr: 'Haftada 6-7 gün yoğun egzersiz',
    },
    multiplier: 1.725,
  },
  {
    id: 'extremely_active',
    label: {
      en: 'Extremely Active',
      tr: 'Aşırı Aktif',
    },
    description: {
      en: 'Very hard exercise, physical job or training twice per day',
      tr: 'Çok yoğun egzersiz, fiziksel iş veya günde iki kez antrenman',
    },
    multiplier: 1.9,
  },
];

export const goals: GoalInfo[] = [
  {
    id: 'lose_aggressive',
    label: {
      en: 'Aggressive Weight Loss',
      tr: 'Hızlı Kilo Verme',
    },
    description: {
      en: 'Fast weight loss for those with significant weight to lose',
      tr: 'Önemli ölçüde kilo vermesi gerekenler için hızlı kilo kaybı',
    },
    adjustment: -1000,
    weeklyChange: {
      en: '-1 kg (-2.2 lbs) per week',
      tr: 'Haftada -1 kg',
    },
  },
  {
    id: 'lose',
    label: {
      en: 'Weight Loss',
      tr: 'Kilo Verme',
    },
    description: {
      en: 'Sustainable weight loss recommended for most people',
      tr: 'Çoğu insan için önerilen sürdürülebilir kilo kaybı',
    },
    adjustment: -500,
    weeklyChange: {
      en: '-0.5 kg (-1.1 lbs) per week',
      tr: 'Haftada -0.5 kg',
    },
  },
  {
    id: 'maintain',
    label: {
      en: 'Maintain Weight',
      tr: 'Kilo Koruma',
    },
    description: {
      en: 'Keep your current weight stable',
      tr: 'Mevcut kilonuzu sabit tutun',
    },
    adjustment: 0,
    weeklyChange: {
      en: 'No change',
      tr: 'Değişiklik yok',
    },
  },
  {
    id: 'gain',
    label: {
      en: 'Muscle Gain',
      tr: 'Kas Kazanımı',
    },
    description: {
      en: 'Lean muscle gain with minimal fat',
      tr: 'Minimum yağ ile yağsız kas kazanımı',
    },
    adjustment: 300,
    weeklyChange: {
      en: '+0.25 kg (+0.55 lbs) per week',
      tr: 'Haftada +0.25 kg',
    },
  },
  {
    id: 'gain_aggressive',
    label: {
      en: 'Fast Muscle Gain',
      tr: 'Hızlı Kas Kazanımı',
    },
    description: {
      en: 'Maximum muscle gain, may include some fat gain',
      tr: 'Maksimum kas kazanımı, biraz yağ artışı içerebilir',
    },
    adjustment: 500,
    weeklyChange: {
      en: '+0.5 kg (+1.1 lbs) per week',
      tr: 'Haftada +0.5 kg',
    },
  },
];

/**
 * Calculate BMR (Basal Metabolic Rate) using Mifflin-St Jeor Equation
 * Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
 * Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161
 */
export function calculateBMR(input: TDEEInput): number {
  let heightInCm: number;
  let weightInKg: number;

  if (input.unit === 'imperial') {
    // Convert inches to cm and pounds to kg
    heightInCm = input.height * 2.54;
    weightInKg = input.weight * 0.453592;
  } else {
    heightInCm = input.height;
    weightInKg = input.weight;
  }

  const baseBMR = 10 * weightInKg + 6.25 * heightInCm - 5 * input.age;
  const bmr = input.gender === 'male' ? baseBMR + 5 : baseBMR - 161;

  return Math.round(bmr);
}

/**
 * Calculate TDEE (Total Daily Energy Expenditure)
 * TDEE = BMR × Activity Multiplier
 */
export function calculateTDEE(input: TDEEInput): number {
  const bmr = calculateBMR(input);
  const activityLevel = activityLevels.find((level) => level.id === input.activityLevel);

  if (!activityLevel) {
    throw new Error('Invalid activity level');
  }

  const tdee = bmr * activityLevel.multiplier;
  return Math.round(tdee);
}

/**
 * Calculate recommended macronutrient ranges
 * Protein: 1.6-2.2g per kg bodyweight
 * Fat: 20-35% of total calories
 * Carbs: Remainder of calories
 */
export function calculateMacros(tdee: number, weight: number, unit: 'metric' | 'imperial') {
  const weightInKg = unit === 'imperial' ? weight * 0.453592 : weight;

  // Protein: 1.6-2.2g per kg (4 calories per gram)
  const proteinMin = Math.round(weightInKg * 1.6);
  const proteinMax = Math.round(weightInKg * 2.2);

  // Fat: 20-35% of TDEE (9 calories per gram)
  const fatCaloriesMin = tdee * 0.2;
  const fatCaloriesMax = tdee * 0.35;
  const fatMin = Math.round(fatCaloriesMin / 9);
  const fatMax = Math.round(fatCaloriesMax / 9);

  // Carbs: Remainder (4 calories per gram)
  const proteinAvgCalories = ((proteinMin + proteinMax) / 2) * 4;
  const fatAvgCalories = ((fatMin + fatMax) / 2) * 9;
  const carbCalories = tdee - proteinAvgCalories - fatAvgCalories;
  const carbsMin = Math.round((tdee - proteinMax * 4 - fatMax * 9) / 4);
  const carbsMax = Math.round((tdee - proteinMin * 4 - fatMin * 9) / 4);

  return {
    protein: { min: proteinMin, max: proteinMax },
    fat: { min: fatMin, max: fatMax },
    carbs: { min: Math.max(0, carbsMin), max: Math.max(0, carbsMax) },
  };
}

/**
 * Calculate complete TDEE results with goals
 */
export function calculateTDEEResults(input: TDEEInput): TDEEResult {
  const bmr = calculateBMR(input);
  const tdee = calculateTDEE(input);
  const macros = calculateMacros(tdee, input.weight, input.unit);

  const goalCalories = goals.reduce(
    (acc, goal) => {
      const calories = Math.round(tdee + goal.adjustment);
      // Minimum calories should not go below BMR
      acc[goal.id] = Math.max(calories, Math.round(bmr * 0.8));
      return acc;
    },
    {} as Record<Goal, number>
  );

  return {
    bmr,
    tdee,
    goals: goalCalories as TDEEResult['goals'],
    macros,
  };
}

export function getActivityLevel(id: ActivityLevel): ActivityLevelInfo | undefined {
  return activityLevels.find((level) => level.id === id);
}

export function getGoal(id: Goal): GoalInfo | undefined {
  return goals.find((goal) => goal.id === id);
}
