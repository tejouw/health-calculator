export interface WaistHipRatioInput {
  gender: 'male' | 'female';
  unit: 'metric' | 'imperial';
  waist: number;
  hip: number;
  age?: number;
}

export interface WaistHipRatioResult {
  ratio: number;
  riskLevel: 'low' | 'moderate' | 'high';
  bodyType: 'apple' | 'pear' | 'balanced';
  cardiovascularRisk: 'low' | 'moderate' | 'high' | 'very-high';
  diabetesRisk: 'low' | 'moderate' | 'high' | 'very-high';
  metabolicSyndromeRisk: 'low' | 'moderate' | 'high';
  healthScore: number; // 0-100
  ageGroup?: 'young-adult' | 'middle-aged' | 'senior';
  idealRatioRange: { min: number; max: number };
  targetWaist?: number; // ideal waist for current hip
  waistReduction?: number; // cm/inch to reduce
  bmiEstimate?: 'underweight' | 'normal' | 'overweight' | 'obese' | 'unknown';
}
