import { OneRepMaxInput, OneRepMaxResult } from './oneRepMaxTypes';

/**
 * Calculate 1RM using Brzycki Formula
 * 1RM = weight × (36 / (37 - reps))
 * Most popular formula, accurate for 1-10 reps
 */
function brzyckiFormula(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (36 / (37 - reps));
}

/**
 * Calculate 1RM using Epley Formula
 * 1RM = weight × (1 + reps/30)
 * Very popular, accurate for 4-6 reps
 */
function epleyFormula(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (1 + reps / 30);
}

/**
 * Calculate 1RM using Lander Formula
 * 1RM = (100 × weight) / (101.3 - 2.67123 × reps)
 */
function landerFormula(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return (100 * weight) / (101.3 - 2.67123 * reps);
}

/**
 * Calculate 1RM using Lombardi Formula
 * 1RM = weight × reps^0.10
 */
function lombardiFormula(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * Math.pow(reps, 0.1);
}

/**
 * Calculate 1RM using O'Conner Formula
 * 1RM = weight × (1 + reps/40)
 */
function oconnerFormula(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return weight * (1 + reps / 40);
}

/**
 * Calculate One Rep Max using multiple formulas
 */
export function calculateOneRepMax(input: OneRepMaxInput): OneRepMaxResult {
  const { weight, reps } = input;

  const brzycki = brzyckiFormula(weight, reps);
  const epley = epleyFormula(weight, reps);
  const lander = landerFormula(weight, reps);
  const lombardi = lombardiFormula(weight, reps);
  const oconner = oconnerFormula(weight, reps);

  // Average of all formulas
  const average = (brzycki + epley + lander + lombardi + oconner) / 5;

  // Training percentages (commonly used in strength programs)
  const percentages = [
    { percentage: 95, weight: average * 0.95, reps: '1-2' },
    { percentage: 90, weight: average * 0.9, reps: '2-4' },
    { percentage: 85, weight: average * 0.85, reps: '4-6' },
    { percentage: 80, weight: average * 0.8, reps: '6-8' },
    { percentage: 75, weight: average * 0.75, reps: '8-10' },
    { percentage: 70, weight: average * 0.7, reps: '10-12' },
    { percentage: 65, weight: average * 0.65, reps: '12-15' },
    { percentage: 60, weight: average * 0.6, reps: '15-20' },
  ];

  return {
    brzycki: parseFloat(brzycki.toFixed(1)),
    epley: parseFloat(epley.toFixed(1)),
    lander: parseFloat(lander.toFixed(1)),
    lombardi: parseFloat(lombardi.toFixed(1)),
    oconner: parseFloat(oconner.toFixed(1)),
    average: parseFloat(average.toFixed(1)),
    percentages: percentages.map((p) => ({
      percentage: p.percentage,
      weight: parseFloat(p.weight.toFixed(1)),
      reps: p.reps,
    })),
  };
}

export const formulaDescriptions = {
  en: {
    brzycki: 'Most popular formula, accurate for 1-10 reps',
    epley: 'Very popular, works well for 4-6 reps',
    lander: 'Good for moderate rep ranges',
    lombardi: 'Conservative estimate',
    oconner: 'Good for higher rep ranges',
    average: 'Average of all formulas (recommended)',
  },
  tr: {
    brzycki: 'En popüler formül, 1-10 tekrar için doğru',
    epley: 'Çok popüler, 4-6 tekrar için iyi çalışır',
    lander: 'Orta tekrar aralıkları için iyi',
    lombardi: 'Muhafazakar tahmin',
    oconner: 'Yüksek tekrar aralıkları için iyi',
    average: 'Tüm formüllerin ortalaması (önerilen)',
  },
};
