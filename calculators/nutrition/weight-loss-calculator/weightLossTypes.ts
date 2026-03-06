export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';

export type WeightLossRate = 'slow' | 'moderate' | 'fast';

export interface WeightLossInput {
  currentWeight: number;
  targetWeight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: ActivityLevel;
  unit: 'metric' | 'imperial';
  rate: WeightLossRate;
}

export interface WeeklyMilestone {
  week: number;
  weight: number;
  totalLost: number;
  date: Date;
}

export interface WeightLossResult {
  totalWeightToLose: number;
  weeklyLoss: number;
  dailyCalorieDeficit: number;
  dailyCalorieTarget: number;
  tdee: number;
  estimatedWeeks: number;
  estimatedDate: Date;
  milestones: WeeklyMilestone[];
  bmiStart: number;
  bmiEnd: number;
}
