export interface OneRepMaxInput {
  weight: number;
  reps: number;
  unit: 'kg' | 'lbs';
}

export interface OneRepMaxResult {
  brzycki: number;
  epley: number;
  lander: number;
  lombardi: number;
  oconner: number;
  average: number;
  percentages: {
    percentage: number;
    weight: number;
    reps: string;
  }[];
}

export type OneRepMaxFormula = 'brzycki' | 'epley' | 'lander' | 'lombardi' | 'oconner' | 'average';
