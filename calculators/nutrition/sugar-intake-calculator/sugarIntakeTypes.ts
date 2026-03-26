export type Gender = 'male' | 'female';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';

export type HealthCondition = 'none' | 'prediabetes' | 'diabetes' | 'heart_disease' | 'weight_loss';

export interface SugarIntakeInput {
  age: number;
  gender: Gender;
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
  healthCondition: HealthCondition;
}

export type SugarCategory = 'very_low' | 'low' | 'moderate' | 'high' | 'very_high';

export interface SugarCategoryInfo {
  label: { en: string; tr: string };
  color: string;
  icon: string;
  description: { en: string; tr: string };
}

export interface FoodSugarComparison {
  food: { en: string; tr: string };
  sugarGrams: number;
  icon: string;
}

export interface SugarIntakeResult {
  whoRecommendedMax: number;
  whoIdealMax: number;
  ahaRecommendedMax: number;
  dailyCalories: number;
  sugarCaloriesMax: number;
  category: SugarCategory;
  teaspoonsMax: number;
  teaspoonsIdeal: number;
  foodComparisons: FoodSugarComparison[];
  weeklyLimit: number;
  monthlyLimit: number;
  tips: { en: string; tr: string }[];
}
