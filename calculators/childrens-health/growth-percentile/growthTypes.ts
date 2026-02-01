export interface GrowthInput {
  age: number; // in months
  gender: 'male' | 'female';
  height: number; // in cm
  weight: number; // in kg
  unit: 'metric' | 'imperial';
}

export interface GrowthResult {
  heightPercentile: number;
  weightPercentile: number;
  bmiPercentile: number;
  bmi: number;
  heightCategory: PercentileCategory;
  weightCategory: PercentileCategory;
  bmiCategory: PercentileCategory;
  interpretation: {
    en: string;
    tr: string;
  };
}

export type PercentileCategory =
  | 'very_low' // < 3rd percentile
  | 'low' // 3rd - 15th percentile
  | 'below_average' // 15th - 50th percentile
  | 'average' // 50th - 85th percentile
  | 'above_average' // 85th - 95th percentile
  | 'high' // 95th - 97th percentile
  | 'very_high'; // > 97th percentile

export interface PercentileCategoryInfo {
  name: PercentileCategory;
  label: {
    en: string;
    tr: string;
  };
  range: {
    min: number;
    max: number;
  };
  color: string;
  interpretation: {
    en: string;
    tr: string;
  };
}
