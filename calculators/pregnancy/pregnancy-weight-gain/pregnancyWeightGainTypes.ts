export interface PregnancyWeightGainInput {
  prePregnancyWeight: number;
  currentWeight: number;
  height: number;
  currentWeek: number;
  twins: boolean;
  unit: 'metric' | 'imperial';
}

export type BMICategory = 'underweight' | 'normal' | 'overweight' | 'obese';

export interface WeightGainRange {
  totalMin: number;
  totalMax: number;
  weeklySecondThirdMin: number;
  weeklySecondThirdMax: number;
}

export interface TrimesterBreakdown {
  trimester: 1 | 2 | 3;
  weekRange: string;
  expectedGainMin: number;
  expectedGainMax: number;
  currentGain: number;
  status: 'on-track' | 'below' | 'above' | 'not-started' | 'completed';
}

export interface WeeklyTarget {
  week: number;
  minWeight: number;
  maxWeight: number;
  idealWeight: number;
}

export interface PregnancyWeightGainResult {
  prePregnancyBMI: number;
  bmiCategory: BMICategory;
  currentWeek: number;
  currentGain: number;
  recommendedTotalMin: number;
  recommendedTotalMax: number;
  expectedGainAtCurrentWeek: { min: number; max: number };
  status: 'on-track' | 'below' | 'above';
  weeklyTargetSecondThird: { min: number; max: number };
  trimesterBreakdown: TrimesterBreakdown[];
  weeklyTargets: WeeklyTarget[];
  remainingWeeks: number;
  remainingGainNeeded: { min: number; max: number };
}
