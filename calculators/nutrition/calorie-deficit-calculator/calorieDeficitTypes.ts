export interface CalorieDeficitInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
  weightLossGoal: WeightLossGoal;
  targetWeight?: number;
}

export interface CalorieDeficitResult {
  // Current metrics
  bmr: number;
  tdee: number;
  currentWeight: number;

  // Deficit calculations
  recommendedDeficit: number;
  dailyCalorieTarget: number;
  deficitPercentage: number;

  // Weight loss projections
  weeklyWeightLoss: number; // in kg
  weeklyWeightLossPounds: number; // in lbs
  monthlyWeightLoss: number; // in kg
  monthlyWeightLossPounds: number; // in lbs

  // Timeline (if target weight provided)
  weeksToGoal?: number;
  monthsToGoal?: number;
  estimatedCompletionDate?: Date;

  // Macro recommendations
  proteinGrams: number;
  fatGrams: number;
  carbsGrams: number;

  // Safety warnings
  isSafe: boolean;
  warnings: string[];
}

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'veryActive';

export type WeightLossGoal =
  | 'conservative' // 0.25 kg/week (0.5 lbs)
  | 'moderate'     // 0.5 kg/week (1 lb)
  | 'aggressive'   // 0.75 kg/week (1.5 lbs)
  | 'maximum';     // 1 kg/week (2 lbs)

export interface DeficitStrategy {
  goal: WeightLossGoal;
  label: {
    en: string;
    tr: string;
  };
  weeklyLoss: number; // kg per week
  description: {
    en: string;
    tr: string;
  };
  recommended: boolean;
}
