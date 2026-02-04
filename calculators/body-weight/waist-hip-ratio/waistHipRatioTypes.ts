export interface WaistHipRatioInput {
  gender: 'male' | 'female';
  unit: 'metric' | 'imperial';
  waist: number;
  hip: number;
}

export interface WaistHipRatioResult {
  ratio: number;
  riskLevel: 'low' | 'moderate' | 'high';
}
