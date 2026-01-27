export type ActivityLevel =
  | 'sedentary'
  | 'lightly_active'
  | 'moderately_active'
  | 'very_active'
  | 'extra_active';

export type Gender = 'male' | 'female';

export type Goal = 'lose' | 'maintain' | 'gain';

export type BMRFormula = 'mifflin' | 'harris';

export interface CalorieInput {
  age: number;
  gender: Gender;
  height: number; // cm or inches
  weight: number; // kg or lbs
  activityLevel: ActivityLevel;
  goal?: Goal;
  unit: 'metric' | 'imperial';
  formula?: BMRFormula;
}

export interface CalorieResult {
  bmr: number; // Basal Metabolic Rate
  tdee: number; // Total Daily Energy Expenditure
  maintenance: number;
  mildWeightLoss: number; // -10%
  weightLoss: number; // -20%
  extremeWeightLoss: number; // -30%
  mildWeightGain: number; // +10%
  weightGain: number; // +20%
  extremeWeightGain: number; // +30%
  macros?: {
    protein: { min: number; max: number };
    carbs: { min: number; max: number };
    fat: { min: number; max: number };
  };
}

export interface ActivityLevelInfo {
  name: ActivityLevel;
  multiplier: number;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  examples: {
    en: string;
    tr: string;
  };
}

export interface GoalInfo {
  name: Goal;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  recommendedDeficit?: number; // percentage
  recommendedSurplus?: number; // percentage
}
