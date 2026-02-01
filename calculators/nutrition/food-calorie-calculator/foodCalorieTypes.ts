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

export interface SelectedFood {
  food: FoodItem;
  grams: number;
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
  }[];
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
