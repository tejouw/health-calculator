import { WaistHipRatioInput, WaistHipRatioResult } from './waistHipRatioTypes';

// WHO thresholds:
// Men:   Low < 0.90 | Moderate 0.90–0.99 | High ≥ 1.00
// Women: Low < 0.80 | Moderate 0.80–0.84 | High ≥ 0.85

function getAgeGroup(age?: number): 'young-adult' | 'middle-aged' | 'senior' | undefined {
  if (!age) return undefined;
  if (age < 40) return 'young-adult';
  if (age < 60) return 'middle-aged';
  return 'senior';
}

function getBodyType(ratio: number, gender: 'male' | 'female'): 'apple' | 'pear' | 'balanced' {
  if (gender === 'male') {
    if (ratio >= 0.95) return 'apple';
    if (ratio <= 0.85) return 'pear';
    return 'balanced';
  } else {
    if (ratio >= 0.85) return 'apple';
    if (ratio <= 0.75) return 'pear';
    return 'balanced';
  }
}

function getCardiovascularRisk(
  ratio: number,
  gender: 'male' | 'female',
  age?: number
): 'low' | 'moderate' | 'high' | 'very-high' {
  const baseRisk = gender === 'male'
    ? ratio < 0.90 ? 'low' : ratio < 0.95 ? 'moderate' : ratio < 1.00 ? 'high' : 'very-high'
    : ratio < 0.80 ? 'low' : ratio < 0.82 ? 'moderate' : ratio < 0.85 ? 'high' : 'very-high';

  // Age increases cardiovascular risk
  if (age && age >= 60) {
    if (baseRisk === 'low') return 'moderate';
    if (baseRisk === 'moderate') return 'high';
  }

  return baseRisk as 'low' | 'moderate' | 'high' | 'very-high';
}

function getDiabetesRisk(
  ratio: number,
  gender: 'male' | 'female',
  age?: number
): 'low' | 'moderate' | 'high' | 'very-high' {
  // Central obesity is strongly linked to type 2 diabetes
  const baseRisk = gender === 'male'
    ? ratio < 0.88 ? 'low' : ratio < 0.95 ? 'moderate' : ratio < 1.02 ? 'high' : 'very-high'
    : ratio < 0.78 ? 'low' : ratio < 0.82 ? 'moderate' : ratio < 0.87 ? 'high' : 'very-high';

  // Age is a significant factor for diabetes
  if (age && age >= 45) {
    if (baseRisk === 'low') return 'moderate';
  }

  return baseRisk as 'low' | 'moderate' | 'high' | 'very-high';
}

function getMetabolicSyndromeRisk(
  ratio: number,
  gender: 'male' | 'female'
): 'low' | 'moderate' | 'high' {
  if (gender === 'male') {
    return ratio < 0.90 ? 'low' : ratio < 1.00 ? 'moderate' : 'high';
  } else {
    return ratio < 0.80 ? 'low' : ratio < 0.85 ? 'moderate' : 'high';
  }
}

function calculateHealthScore(
  ratio: number,
  gender: 'male' | 'female',
  age?: number
): number {
  // Base score calculation (0-100, higher is better)
  let score = 100;

  // Deduct points based on WHR deviation from ideal
  const idealRatio = gender === 'male' ? 0.85 : 0.75;
  const deviation = Math.abs(ratio - idealRatio);
  score -= deviation * 200; // Each 0.01 deviation costs 2 points

  // Age factor
  if (age) {
    if (age >= 60) score -= 5;
    else if (age >= 45) score -= 2;
  }

  // Additional penalties for high-risk zones
  if (gender === 'male' && ratio >= 1.0) score -= 15;
  if (gender === 'female' && ratio >= 0.85) score -= 15;

  // Ensure score stays in 0-100 range
  return Math.max(0, Math.min(100, Math.round(score)));
}

function getIdealRatioRange(
  gender: 'male' | 'female',
  age?: number
): { min: number; max: number } {
  if (gender === 'male') {
    if (age && age >= 60) return { min: 0.80, max: 0.92 };
    if (age && age >= 40) return { min: 0.80, max: 0.90 };
    return { min: 0.78, max: 0.88 };
  } else {
    if (age && age >= 60) return { min: 0.70, max: 0.82 };
    if (age && age >= 40) return { min: 0.68, max: 0.80 };
    return { min: 0.65, max: 0.78 };
  }
}

function calculateTargetWaist(
  hip: number,
  gender: 'male' | 'female',
  age?: number
): number {
  const idealRange = getIdealRatioRange(gender, age);
  const targetRatio = (idealRange.min + idealRange.max) / 2;
  return Math.round(hip * targetRatio * 10) / 10;
}

export function calculateWaistHipRatio(input: WaistHipRatioInput): WaistHipRatioResult {
  const { gender, waist, hip, age } = input;

  // Ratio is dimensionless — units cancel out, no conversion needed
  const ratio = Math.round((waist / hip) * 100) / 100;

  // Basic risk level (WHO guidelines)
  let riskLevel: 'low' | 'moderate' | 'high';
  if (gender === 'male') {
    riskLevel = ratio < 0.9 ? 'low' : ratio < 1.0 ? 'moderate' : 'high';
  } else {
    riskLevel = ratio < 0.8 ? 'low' : ratio < 0.85 ? 'moderate' : 'high';
  }

  // Enhanced calculations
  const bodyType = getBodyType(ratio, gender);
  const cardiovascularRisk = getCardiovascularRisk(ratio, gender, age);
  const diabetesRisk = getDiabetesRisk(ratio, gender, age);
  const metabolicSyndromeRisk = getMetabolicSyndromeRisk(ratio, gender);
  const healthScore = calculateHealthScore(ratio, gender, age);
  const ageGroup = getAgeGroup(age);
  const idealRatioRange = getIdealRatioRange(gender, age);
  const targetWaist = calculateTargetWaist(hip, gender, age);
  const waistReduction = waist > targetWaist ? Math.round((waist - targetWaist) * 10) / 10 : undefined;

  return {
    ratio,
    riskLevel,
    bodyType,
    cardiovascularRisk,
    diabetesRisk,
    metabolicSyndromeRisk,
    healthScore,
    ageGroup,
    idealRatioRange,
    targetWaist,
    waistReduction,
    bmiEstimate: 'unknown', // Could be calculated if height is added later
  };
}
