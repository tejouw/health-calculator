export interface MacroInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
  goal: 'lose' | 'maintain' | 'gain';
  unit: 'metric' | 'imperial';
  dietType?: 'balanced' | 'lowCarb' | 'lowFat' | 'highProtein' | 'keto';
}

export interface MacroResult {
  tdee: number;
  targetCalories: number;
  protein: {
    grams: number;
    calories: number;
    percentage: number;
  };
  carbs: {
    grams: number;
    calories: number;
    percentage: number;
  };
  fat: {
    grams: number;
    calories: number;
    percentage: number;
  };
  mealsPerDay?: {
    breakfast: MacroMeal;
    lunch: MacroMeal;
    dinner: MacroMeal;
    snacks: MacroMeal;
  };
}

export interface MacroMeal {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export type MacroGoal = 'lose' | 'maintain' | 'gain';
export type DietType = 'balanced' | 'lowCarb' | 'lowFat' | 'highProtein' | 'keto';

export interface MacroRatio {
  protein: number;
  carbs: number;
  fat: number;
}
