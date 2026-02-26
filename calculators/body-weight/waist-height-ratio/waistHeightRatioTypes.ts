export interface WaistHeightRatioInput {
  waist: number;
  height: number;
  unit: 'metric' | 'imperial';
  gender?: 'male' | 'female';
  age?: number;
}

export type WHtRCategory =
  | 'take-care'
  | 'slim'
  | 'healthy'
  | 'overweight'
  | 'very-overweight'
  | 'obese';

export interface WHtRCategoryInfo {
  name: WHtRCategory;
  label: { en: string; tr: string };
  range: { min: number; max: number };
  color: string;
  description: { en: string; tr: string };
}

export interface WaistHeightRatioResult {
  ratio: number;
  category: WHtRCategory;
  healthScore: number;
  cardiovascularRisk: 'low' | 'moderate' | 'high' | 'very-high';
  diabetesRisk: 'low' | 'moderate' | 'high' | 'very-high';
  metabolicSyndromeRisk: 'low' | 'moderate' | 'high';
  idealWaist: number;
  waistChange: number; // positive = needs to lose, negative = could gain
  percentFromIdeal: number;
  boundaryMessage: 'under' | 'at' | 'over';
}
