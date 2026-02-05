export interface FoodItem {
  id: string;
  name: {
    en: string;
    tr: string;
  };
  category: FoodCategory;
  caloriesPer100g: number;
  protein: number; // grams per 100g
  carbs: number; // grams per 100g
  fat: number; // grams per 100g
  fiber?: number; // grams per 100g
  servingExamples: {
    en: string;
    tr: string;
  };
}

export type FoodCategory =
  | 'fruits'
  | 'vegetables'
  | 'meat-poultry'
  | 'fish-seafood'
  | 'dairy'
  | 'grains-legumes'
  | 'bread-bakery'
  | 'nuts-seeds'
  | 'sweets-desserts'
  | 'beverages'
  | 'fast-food'
  | 'oils-sauces';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export interface SelectedFood {
  food: FoodItem;
  grams: number;
  mealType?: MealType;
}

export interface MacroDistribution {
  proteinPercentage: number;
  carbsPercentage: number;
  fatPercentage: number;
  proteinCalories: number;
  carbsCalories: number;
  fatCalories: number;
}

export interface MealSummary {
  breakfast: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    count: number;
  };
  lunch: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    count: number;
  };
  dinner: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    count: number;
  };
  snack: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    count: number;
  };
}

export interface HealthScore {
  overall: number; // 0-100
  proteinScore: number;
  fiberScore: number;
  balanceScore: number;
  varietyScore: number;
}

export interface NutritionSummary {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalFiber: number;
  foods: {
    food: FoodItem;
    grams: number;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    mealType?: MealType;
  }[];
  // Enhanced properties
  macroDistribution?: MacroDistribution;
  mealSummary?: MealSummary;
  healthScore?: HealthScore;
  nutrientDensity?: number; // nutrients per 100 calories
  proteinPerKgTarget?: number; // if weight is provided
  dailyGoal?: {
    targetCalories: number;
    remainingCalories: number;
    progressPercentage: number;
  };
}

export interface CategoryInfo {
  name: FoodCategory;
  label: {
    en: string;
    tr: string;
  };
  icon: string;
  description: {
    en: string;
    tr: string;
  };
}
