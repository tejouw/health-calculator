import { WaistHipRatioInput, WaistHipRatioResult } from './waistHipRatioTypes';

// WHO thresholds:
// Men:   Low < 0.90 | Moderate 0.90–0.99 | High ≥ 1.00
// Women: Low < 0.80 | Moderate 0.80–0.84 | High ≥ 0.85

export function calculateWaistHipRatio(input: WaistHipRatioInput): WaistHipRatioResult {
  const { gender, waist, hip } = input;

  // Ratio is dimensionless — units cancel out, no conversion needed
  const ratio = Math.round((waist / hip) * 100) / 100;

  let riskLevel: 'low' | 'moderate' | 'high';

  if (gender === 'male') {
    riskLevel = ratio < 0.9 ? 'low' : ratio < 1.0 ? 'moderate' : 'high';
  } else {
    riskLevel = ratio < 0.8 ? 'low' : ratio < 0.85 ? 'moderate' : 'high';
  }

  return { ratio, riskLevel };
}
