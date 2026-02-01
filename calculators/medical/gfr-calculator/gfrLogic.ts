import { GFRInput, GFRResult, gfrStages } from './gfrTypes';

// CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration) equation
// Most accurate GFR formula (replaced MDRD in 2021)
export function calculateGFR(input: GFRInput): GFRResult {
  const { age, gender, creatinine, creatinineUnit, race = 'other' } = input;

  // Convert creatinine to mg/dL if needed
  const creatinineMgDl = creatinineUnit === 'umol' ? creatinine / 88.42 : creatinine;

  // CKD-EPI formula constants
  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.329 : -0.411;
  const genderMultiplier = gender === 'female' ? 1.018 : 1.0;
  const raceMultiplier = race === 'black' ? 1.159 : 1.0;

  // Calculate GFR using CKD-EPI formula
  const ratio = creatinineMgDl / kappa;
  const minRatio = Math.min(ratio, 1);
  const maxRatio = Math.max(ratio, 1);

  let gfr = 141;
  gfr *= Math.pow(minRatio, alpha);
  gfr *= Math.pow(maxRatio, -1.209);
  gfr *= Math.pow(0.993, age);
  gfr *= genderMultiplier;
  gfr *= raceMultiplier;

  gfr = parseFloat(gfr.toFixed(1));

  // Determine CKD stage
  let stage: 1 | 2 | 3 | 4 | 5;
  if (gfr >= 90) stage = 1;
  else if (gfr >= 60) stage = 2;
  else if (gfr >= 30) stage = 3;
  else if (gfr >= 15) stage = 4;
  else stage = 5;

  const category = gfrStages[stage];

  return {
    gfr,
    stage,
    category,
  };
}

export const gfrInfo = {
  en: {
    title: 'About GFR (eGFR)',
    description:
      'Glomerular Filtration Rate (GFR) measures how well your kidneys filter blood. It is the best overall indicator of kidney function.',
    formula: 'This calculator uses the CKD-EPI equation, the most accurate formula recommended since 2021.',
    units: 'GFR is measured in mL/min/1.73m²',
  },
  tr: {
    title: 'GFR (eGFR) Hakkında',
    description:
      'Glomerüler Filtrasyon Hızı (GFR), böbreklerinizin kanı ne kadar iyi filtrelediğini ölçer. Böbrek fonksiyonunun en iyi genel göstergesidir.',
    formula: 'Bu hesaplayıcı 2021\'den beri önerilen en doğru formül olan CKD-EPI denklemini kullanır.',
    units: 'GFR, mL/dk/1.73m² cinsinden ölçülür',
  },
};
