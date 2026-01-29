export interface BodyFatInput {
  gender: 'male' | 'female';
  height: number;
  neck: number;
  waist: number;
  hip?: number; // Required for females
  unit: 'metric' | 'imperial';
  age?: number;
  weight?: number;
}

export interface BodyFatResult {
  bodyFatPercentage: number;
  category: BodyFatCategory;
  categoryLabel: string;
  leanBodyMass?: number;
  fatMass?: number;
  interpretation: string;
}

export type BodyFatCategory =
  | 'essential'
  | 'athletes'
  | 'fitness'
  | 'average'
  | 'obese';

export interface BodyFatCategoryInfo {
  name: BodyFatCategory;
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
