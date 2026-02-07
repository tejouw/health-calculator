export interface CreatinineClearanceInput {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  weightUnit: 'kg' | 'lbs';
  height: number;
  heightUnit: 'cm' | 'in';
  creatinine: number;
  creatinineUnit: 'mgdl' | 'umol';
  race?: 'african' | 'other';
}

export interface CKDStage {
  stage: number;
  name: { en: string; tr: string };
  description: { en: string; tr: string };
}

export interface CreatinineClearanceResult {
  clearance: number;
  clearancePerBodyWeight: number;
  bsa: number;
  clearancePerBSA: number;
  mdrd: number;
  ckdEpi: number;
  ckdStage: CKDStage;
  interpretation: {
    en: string;
    tr: string;
  };
  recommendations: Array<{
    en: string;
    tr: string;
  }>;
  drugAdjustment: {
    en: string;
    tr: string;
  };
  riskFactors: Array<{
    en: string;
    tr: string;
  }>;
}
