import {
  WaistHeightRatioInput,
  WaistHeightRatioResult,
  WHtRCategory,
  WHtRCategoryInfo,
} from './waistHeightRatioTypes';

// WHtR categories based on Ashwell Shape Chart and research
// The key boundary: 0.5 ("Keep your waist to less than half your height")
export const whtrCategories: WHtRCategoryInfo[] = [
  {
    name: 'take-care',
    label: { en: 'Underweight', tr: 'Zayif' },
    range: { min: 0, max: 0.34 },
    color: '#3B82F6', // blue
    description: {
      en: 'Your ratio suggests you may be underweight. Consider consulting a healthcare provider.',
      tr: 'Oraniniz dusuk kilolu olabileceginizi gosteriyor. Bir saglik uzmaniyla gorusmeyi dusunun.',
    },
  },
  {
    name: 'slim',
    label: { en: 'Slim', tr: 'Ince' },
    range: { min: 0.35, max: 0.42 },
    color: '#06B6D4', // cyan
    description: {
      en: 'You are slim with no significant health risks related to central fat.',
      tr: 'Ince yapidsiniz ve merkezi yag ile iliskili onemli bir saglik riskiniz yok.',
    },
  },
  {
    name: 'healthy',
    label: { en: 'Healthy', tr: 'Saglikli' },
    range: { min: 0.43, max: 0.52 },
    color: '#10B981', // green
    description: {
      en: 'Your waist-to-height ratio is in the healthy range. Keep up your healthy lifestyle!',
      tr: 'Bel-boy oraniniz saglikli aralikta. Saglikli yasam tarzinizi surdurun!',
    },
  },
  {
    name: 'overweight',
    label: { en: 'Overweight', tr: 'Fazla Kilolu' },
    range: { min: 0.53, max: 0.57 },
    color: '#F59E0B', // amber
    description: {
      en: 'Your ratio indicates excess abdominal fat. Consider lifestyle changes to reduce health risks.',
      tr: 'Oraniniz asiri karin yagini gosteriyor. Saglik risklerini azaltmak icin yasam tarzi degisiklikleri dusunun.',
    },
  },
  {
    name: 'very-overweight',
    label: { en: 'Very Overweight', tr: 'Cok Fazla Kilolu' },
    range: { min: 0.58, max: 0.63 },
    color: '#EF4444', // red
    description: {
      en: 'Your ratio indicates significant central obesity with elevated health risks. Consult a healthcare provider.',
      tr: 'Oraniniz belirgin merkezi obeziteyi ve yukselmis saglik risklerini gosteriyor. Bir saglik uzmaniyla gorusun.',
    },
  },
  {
    name: 'obese',
    label: { en: 'Morbidly Obese', tr: 'Morbid Obez' },
    range: { min: 0.64, max: 1.0 },
    color: '#991B1B', // dark red
    description: {
      en: 'Your ratio indicates morbid obesity with very high health risks. Please seek medical consultation.',
      tr: 'Oraniniz morbid obeziteyi ve cok yuksek saglik risklerini gosteriyor. Lutfen tibbi danismanlik alin.',
    },
  },
];

function getCategory(ratio: number): WHtRCategory {
  if (ratio < 0.35) return 'take-care';
  if (ratio < 0.43) return 'slim';
  if (ratio < 0.53) return 'healthy';
  if (ratio < 0.58) return 'overweight';
  if (ratio < 0.64) return 'very-overweight';
  return 'obese';
}

function getCardiovascularRisk(
  ratio: number,
  age?: number
): 'low' | 'moderate' | 'high' | 'very-high' {
  let risk: 'low' | 'moderate' | 'high' | 'very-high';
  if (ratio < 0.46) risk = 'low';
  else if (ratio < 0.53) risk = 'moderate';
  else if (ratio < 0.58) risk = 'high';
  else risk = 'very-high';

  // Age increases risk
  if (age && age >= 60 && risk !== 'very-high') {
    const levels: Array<'low' | 'moderate' | 'high' | 'very-high'> = ['low', 'moderate', 'high', 'very-high'];
    const idx = levels.indexOf(risk);
    risk = levels[Math.min(idx + 1, 3)];
  }

  return risk;
}

function getDiabetesRisk(
  ratio: number,
  age?: number
): 'low' | 'moderate' | 'high' | 'very-high' {
  let risk: 'low' | 'moderate' | 'high' | 'very-high';
  if (ratio < 0.45) risk = 'low';
  else if (ratio < 0.52) risk = 'moderate';
  else if (ratio < 0.58) risk = 'high';
  else risk = 'very-high';

  if (age && age >= 45 && risk === 'low') {
    risk = 'moderate';
  }

  return risk;
}

function getMetabolicSyndromeRisk(
  ratio: number
): 'low' | 'moderate' | 'high' {
  if (ratio < 0.50) return 'low';
  if (ratio < 0.56) return 'moderate';
  return 'high';
}

function getHealthScore(ratio: number): number {
  // Optimal range is 0.43-0.50
  const optimal = 0.46;
  const deviation = Math.abs(ratio - optimal);

  let score = 100 - deviation * 250;

  if (ratio >= 0.58) score -= 15;
  if (ratio >= 0.64) score -= 10;
  if (ratio < 0.35) score -= 10;

  return Math.max(0, Math.min(100, Math.round(score)));
}

export function calculateWaistHeightRatio(input: WaistHeightRatioInput): WaistHeightRatioResult {
  let { waist, height } = input;
  const { unit, age } = input;

  // Convert imperial to metric for calculation
  if (unit === 'imperial') {
    waist = waist * 2.54; // inches to cm
    height = height * 2.54;
  }

  const ratio = Math.round((waist / height) * 100) / 100;

  // The ideal boundary is WHtR = 0.5
  const idealWaistCm = height * 0.46; // center of healthy range
  const idealWaist = unit === 'imperial'
    ? Math.round((idealWaistCm / 2.54) * 10) / 10
    : Math.round(idealWaistCm * 10) / 10;

  const currentWaist = unit === 'imperial' ? input.waist : waist;
  const waistChange = Math.round((currentWaist - idealWaist) * 10) / 10;

  const percentFromIdeal = Math.round(((ratio - 0.5) / 0.5) * 100);

  let boundaryMessage: 'under' | 'at' | 'over';
  if (ratio < 0.49) boundaryMessage = 'under';
  else if (ratio <= 0.51) boundaryMessage = 'at';
  else boundaryMessage = 'over';

  return {
    ratio,
    category: getCategory(ratio),
    healthScore: getHealthScore(ratio),
    cardiovascularRisk: getCardiovascularRisk(ratio, age),
    diabetesRisk: getDiabetesRisk(ratio, age),
    metabolicSyndromeRisk: getMetabolicSyndromeRisk(ratio),
    idealWaist,
    waistChange,
    percentFromIdeal,
    boundaryMessage,
  };
}

export function getCategoryInfo(category: WHtRCategory): WHtRCategoryInfo {
  return whtrCategories.find((c) => c.name === category)!;
}
