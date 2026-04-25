export interface MAPInput {
  systolic: number;
  diastolic: number;
}

export type MAPCategory = 'low' | 'lowNormal' | 'normal' | 'elevated' | 'high';

export interface MAPResult {
  map: number;
  pulsePressure: number;
  category: MAPCategory;
  perfusionStatus: 'inadequate' | 'borderline' | 'adequate' | 'elevated';
}

export interface MAPCategoryInfo {
  name: MAPCategory;
  range: { min: number; max: number };
  label: { en: string; tr: string };
  color: string;
  interpretation: { en: string; tr: string };
  recommendation: { en: string; tr: string };
}
