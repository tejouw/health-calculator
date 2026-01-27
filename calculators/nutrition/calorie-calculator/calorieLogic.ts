import {
  CalorieInput,
  CalorieResult,
  ActivityLevel,
  ActivityLevelInfo,
  Goal,
  GoalInfo,
} from './calorieTypes';

// Activity Level Multipliers based on Harris-Benedict equation
export const activityLevels: Record<ActivityLevel, ActivityLevelInfo> = {
  sedentary: {
    name: 'sedentary',
    multiplier: 1.2,
    label: {
      en: 'Sedentary',
      tr: 'Hareketsiz',
    },
    description: {
      en: 'Little or no exercise',
      tr: 'Az veya hiç egzersiz yok',
    },
    examples: {
      en: 'Office job, minimal physical activity, mostly sitting',
      tr: 'Ofis işi, minimum fiziksel aktivite, çoğunlukla oturma',
    },
  },
  lightly_active: {
    name: 'lightly_active',
    multiplier: 1.375,
    label: {
      en: 'Lightly Active',
      tr: 'Hafif Aktif',
    },
    description: {
      en: 'Light exercise 1-3 days/week',
      tr: 'Haftada 1-3 gün hafif egzersiz',
    },
    examples: {
      en: 'Walking, light jogging, yoga 1-3 times per week',
      tr: 'Yürüyüş, hafif koşu, haftada 1-3 kez yoga',
    },
  },
  moderately_active: {
    name: 'moderately_active',
    multiplier: 1.55,
    label: {
      en: 'Moderately Active',
      tr: 'Orta Derecede Aktif',
    },
    description: {
      en: 'Moderate exercise 3-5 days/week',
      tr: 'Haftada 3-5 gün orta düzeyde egzersiz',
    },
    examples: {
      en: 'Regular gym workouts, sports, running 3-5 times per week',
      tr: 'Düzenli spor salonu, spor, haftada 3-5 kez koşu',
    },
  },
  very_active: {
    name: 'very_active',
    multiplier: 1.725,
    label: {
      en: 'Very Active',
      tr: 'Çok Aktif',
    },
    description: {
      en: 'Hard exercise 6-7 days/week',
      tr: 'Haftada 6-7 gün yoğun egzersiz',
    },
    examples: {
      en: 'Daily intensive training, physical job, athlete training',
      tr: 'Günlük yoğun antrenman, fiziksel iş, sporcu antrenmanı',
    },
  },
  extra_active: {
    name: 'extra_active',
    multiplier: 1.9,
    label: {
      en: 'Extra Active',
      tr: 'Ekstra Aktif',
    },
    description: {
      en: 'Very hard exercise & physical job',
      tr: 'Çok yoğun egzersiz ve fiziksel iş',
    },
    examples: {
      en: 'Professional athlete, construction worker with daily training',
      tr: 'Profesyonel sporcu, günlük antrenmanla inşaat işçisi',
    },
  },
};

export const goals: Record<Goal, GoalInfo> = {
  lose: {
    name: 'lose',
    label: {
      en: 'Weight Loss',
      tr: 'Kilo Verme',
    },
    description: {
      en: 'Create a caloric deficit to lose weight safely',
      tr: 'Güvenli bir şekilde kilo vermek için kalorik açık oluştur',
    },
    recommendedDeficit: 20,
  },
  maintain: {
    name: 'maintain',
    label: {
      en: 'Maintain Weight',
      tr: 'Kilo Koruma',
    },
    description: {
      en: 'Eat at maintenance calories to keep current weight',
      tr: 'Mevcut kilonuzu korumak için bakım kalorilerinde yiyin',
    },
  },
  gain: {
    name: 'gain',
    label: {
      en: 'Weight Gain',
      tr: 'Kilo Alma',
    },
    description: {
      en: 'Create a caloric surplus to gain muscle mass',
      tr: 'Kas kütlesi kazanmak için kalorik fazlalık oluştur',
    },
    recommendedSurplus: 20,
  },
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation (more accurate, recommended)
 * Men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5
 * Women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161
 */
function calculateMifflinBMR(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number {
  const baseBMR = 10 * weight + 6.25 * height - 5 * age;
  return gender === 'male' ? baseBMR + 5 : baseBMR - 161;
}

/**
 * Calculate BMR using Harris-Benedict Equation (original, legacy)
 * Men: BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) - (5.677 × age in years)
 * Women: BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) - (4.330 × age in years)
 */
function calculateHarrisBMR(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number {
  if (gender === 'male') {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }
}

/**
 * Main calorie calculation function
 */
export function calculateCalories(input: CalorieInput): CalorieResult {
  // Convert to metric if imperial
  let weightKg = input.weight;
  let heightCm = input.height;

  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.453592; // lbs to kg
    heightCm = input.height * 2.54; // inches to cm
  }

  // Calculate BMR based on selected formula
  const formula = input.formula || 'mifflin';
  const bmr =
    formula === 'mifflin'
      ? calculateMifflinBMR(weightKg, heightCm, input.age, input.gender)
      : calculateHarrisBMR(weightKg, heightCm, input.age, input.gender);

  // Calculate TDEE (Total Daily Energy Expenditure)
  const activityMultiplier = activityLevels[input.activityLevel].multiplier;
  const tdee = bmr * activityMultiplier;

  // Calculate different calorie targets
  const maintenance = Math.round(tdee);
  const mildWeightLoss = Math.round(tdee * 0.9); // -10%
  const weightLoss = Math.round(tdee * 0.8); // -20%
  const extremeWeightLoss = Math.round(tdee * 0.7); // -30%
  const mildWeightGain = Math.round(tdee * 1.1); // +10%
  const weightGain = Math.round(tdee * 1.2); // +20%
  const extremeWeightGain = Math.round(tdee * 1.3); // +30%

  // Calculate macronutrient recommendations (optional)
  const macros = {
    protein: {
      min: Math.round(weightKg * 1.6), // 1.6g per kg for active individuals
      max: Math.round(weightKg * 2.2), // 2.2g per kg for muscle building
    },
    carbs: {
      min: Math.round((maintenance * 0.45) / 4), // 45% of calories / 4 cal per gram
      max: Math.round((maintenance * 0.65) / 4), // 65% of calories / 4 cal per gram
    },
    fat: {
      min: Math.round((maintenance * 0.2) / 9), // 20% of calories / 9 cal per gram
      max: Math.round((maintenance * 0.35) / 9), // 35% of calories / 9 cal per gram
    },
  };

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    maintenance,
    mildWeightLoss,
    weightLoss,
    extremeWeightLoss,
    mildWeightGain,
    weightGain,
    extremeWeightGain,
    macros,
  };
}

/**
 * Calculate estimated time to reach goal weight
 */
export function calculateTimeToGoal(
  currentWeight: number,
  goalWeight: number,
  dailyCalorieDeficit: number,
  unit: 'metric' | 'imperial'
): {
  weeks: number;
  months: number;
  days: number;
} {
  const weightDifference = Math.abs(currentWeight - goalWeight);

  // 1 lb fat = ~3500 calories, 1 kg fat = ~7700 calories
  const caloriesPerUnit = unit === 'metric' ? 7700 : 3500;

  const totalCaloriesNeeded = weightDifference * caloriesPerUnit;
  const days = Math.ceil(totalCaloriesNeeded / Math.abs(dailyCalorieDeficit));

  return {
    days,
    weeks: Math.ceil(days / 7),
    months: Math.ceil(days / 30),
  };
}

/**
 * Get recommended calorie target based on goal
 */
export function getRecommendedCalories(
  result: CalorieResult,
  goal: Goal
): number {
  switch (goal) {
    case 'lose':
      return result.weightLoss;
    case 'maintain':
      return result.maintenance;
    case 'gain':
      return result.weightGain;
    default:
      return result.maintenance;
  }
}

/**
 * Validate input values
 */
export function validateCalorieInput(input: Partial<CalorieInput>): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!input.age || input.age < 15 || input.age > 100) {
    errors.push('Age must be between 15 and 100');
  }

  if (!input.height || input.height <= 0) {
    errors.push('Please enter a valid height');
  }

  if (!input.weight || input.weight <= 0) {
    errors.push('Please enter a valid weight');
  }

  if (!input.gender) {
    errors.push('Please select a gender');
  }

  if (!input.activityLevel) {
    errors.push('Please select an activity level');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
