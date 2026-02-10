export interface BloodPressureResult {
  systolic: number;
  diastolic: number;
  category: BloodPressureCategory;
  interpretation: {
    title: string;
    description: string;
    recommendations: string[];
  };
  riskLevel: 'normal' | 'elevated' | 'high' | 'critical';
  color: string;
}

export type BloodPressureCategory =
  | 'normal'
  | 'elevated'
  | 'hypertension_stage1'
  | 'hypertension_stage2'
  | 'hypertensive_crisis';

export interface BloodPressureCategoryInfo {
  name: string;
  systolic: string;
  diastolic: string;
  color: string;
  description: string;
}
