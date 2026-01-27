export interface BMIInput {
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  age?: number;
  gender?: 'male' | 'female';
}

export interface BMIResult {
  value: number;
  category: BMICategory;
  categoryLabel: string;
  healthyRange: {
    min: number;
    max: number;
  };
  interpretation: string;
  recommendation: string;
}

export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese' | 'severely_obese';

export interface BMICategoryInfo {
  name: BMICategory;
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
