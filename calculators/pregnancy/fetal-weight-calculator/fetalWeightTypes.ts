export type CalculationMethod = 'week' | 'lmp' | 'ultrasound';

export interface FetalWeightInput {
  method: CalculationMethod;
  gestationalWeek?: number;
  lmpDate?: string;
  // Ultrasound measurements in mm
  abdominalCircumference?: number; // AC
  femurLength?: number; // FL
  headCircumference?: number; // HC
  biparietalDiameter?: number; // BPD
}

export interface FetalWeightResult {
  estimatedWeight: {
    grams: number;
    ounces: number;
    kg: number;
    lbs: number;
  };
  gestationalWeek: number;
  gestationalDay: number;
  percentileRange: {
    p10: number;
    p50: number;
    p90: number;
  };
  percentileStatus: PercentileStatus;
  sizeComparison: { en: string; tr: string };
  sizeComparisonEmoji: string;
  lengthEstimate: { cm: number; inches: number };
  developmentHighlights: { en: string[]; tr: string[] };
  nutritionTips: { en: string[]; tr: string[] };
  weeklyGrowthRate: number; // grams per week
  remainingWeeks: number;
  trimester: 1 | 2 | 3;
}

export type PercentileStatus = 'small' | 'appropriate' | 'large';

export interface WeeklyGrowthData {
  week: number;
  weightP10: number;
  weightP50: number;
  weightP90: number;
  length: number; // cm crown-to-heel
  comparison: { en: string; tr: string };
  comparisonEmoji: string;
}

export interface FetalDevelopment {
  week: number;
  highlights: { en: string[]; tr: string[] };
  nutrition: { en: string[]; tr: string[] };
}
