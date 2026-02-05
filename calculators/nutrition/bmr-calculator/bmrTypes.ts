export interface BMRInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  goalWeight?: number;
}

export interface MacroSuggestion {
  protein: { grams: number; calories: number; percentage: number };
  carbs: { grams: number; calories: number; percentage: number };
  fat: { grams: number; calories: number; percentage: number };
}

export interface MealPlan {
  breakfast: number;
  lunch: number;
  dinner: number;
  snacks: number;
}

export interface WeightGoal {
  currentWeight: number;
  goalWeight: number;
  weeklyChange: number;
  weeksToGoal: number;
  estimatedDate: string;
}

export interface BMRResult {
  bmr: number;
  bmrHarrisBenedict: number;
  activityLevels: {
    sedentary: number;
    light: number;
    moderate: number;
    active: number;
    veryActive: number;
  };
  // Enhanced results
  metabolicAge?: number;
  metabolicRate: 'low' | 'normal' | 'high';
  bmi?: number;
  idealWeight?: { min: number; max: number };
  dailyWaterIntake?: number; // in liters or oz
  macroSuggestions?: {
    weightLoss: MacroSuggestion;
    maintenance: MacroSuggestion;
    muscleGain: MacroSuggestion;
  };
  mealPlans?: {
    threemeals: MealPlan;
    fourMeals: MealPlan;
    sixMeals: MealPlan;
  };
  weeklyCalories?: Record<ActivityLevel, number>;
  monthlyCalories?: Record<ActivityLevel, number>;
  weightGoal?: WeightGoal;
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';

export interface ActivityMultiplier {
  level: ActivityLevel;
  multiplier: number;
  label: string;
}
