export interface CholesterolInput {
  totalCholesterol: number;
  hdl: number;
  ldl: number;
  triglycerides: number;
  unit: 'mgdl' | 'mmol';
}

export interface CholesterolResult {
  totalCholesterol: number;
  hdl: number;
  ldl: number;
  triglycerides: number;
  nonHdl: number;
  totalHdlRatio: number;
  ldlHdlRatio: number;
  triglyceridesHdlRatio: number;
  totalCategory: CholesterolCategory;
  hdlCategory: HDLCategory;
  ldlCategory: LDLCategory;
  triglyceridesCategory: TriglyceridesCategory;
  overallRisk: RiskLevel;
}

export type CholesterolCategory = 'desirable' | 'borderline_high' | 'high';
export type HDLCategory = 'low' | 'normal' | 'optimal';
export type LDLCategory = 'optimal' | 'near_optimal' | 'borderline_high' | 'high' | 'very_high';
export type TriglyceridesCategory = 'normal' | 'borderline_high' | 'high' | 'very_high';
export type RiskLevel = 'low' | 'moderate' | 'high' | 'very_high';
