export interface BodyWaterInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
}

export interface BodyWaterResult {
  totalWaterLiters: number;
  totalWaterGallons: number;
  waterPercentage: number;
  category: BodyWaterCategory;
  dailyIntakeRecommendation: number; // in liters
}

export type BodyWaterCategory = 'low' | 'normal' | 'high';

export interface BodyWaterCategoryInfo {
  name: BodyWaterCategory;
  label: {
    en: string;
    tr: string;
  };
  range: {
    male: { min: number; max: number };
    female: { min: number; max: number };
  };
  color: string;
  interpretation: {
    en: string;
    tr: string;
  };
}
