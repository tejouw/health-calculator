export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
export type WeightGainRate = 'slow' | 'moderate' | 'fast';

export interface WeightGainInput {
  currentWeight: number;
  targetWeight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: ActivityLevel;
  unit: 'metric' | 'imperial';
  rate: WeightGainRate;
}

export interface WeeklyMilestone {
  week: number;
  weight: number;
  totalGained: number;
  date: Date;
}

export interface MacroSplit {
  protein: number;
  carbs: number;
  fat: number;
}

export interface WeightGainResult {
  totalWeightToGain: number;
  weeklyGain: number;
  dailyCalorieSurplus: number;
  dailyCalorieTarget: number;
  tdee: number;
  estimatedWeeks: number;
  estimatedDate: Date;
  milestones: WeeklyMilestone[];
  bmiStart: number;
  bmiEnd: number;
  macros: MacroSplit;
}
