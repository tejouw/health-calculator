export interface CreatinineClearanceInput {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  weightUnit: 'kg' | 'lbs';
  creatinine: number;
  creatinineUnit: 'mgdl' | 'umol';
}

export interface CreatinineClearanceResult {
  clearance: number;
  clearancePerBodyWeight: number;
  interpretation: {
    en: string;
    tr: string;
  };
}
