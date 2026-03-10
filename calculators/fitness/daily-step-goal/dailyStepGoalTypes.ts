export type ActivityLevel = 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active';
export type Goal = 'weight_loss' | 'maintenance' | 'fitness' | 'heart_health';
export type AgeGroup = 'teen' | 'young_adult' | 'adult' | 'middle_aged' | 'senior';

export interface DailyStepGoalInput {
  age: number;
  weight: number;
  height: number;
  gender: 'male' | 'female';
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface StepBreakdown {
  casualWalk: number;
  briskWalk: number;
  totalSteps: number;
  estimatedDistance: number; // in km or miles
  estimatedCalories: number;
  estimatedTime: number; // in minutes
}

export interface DailyStepGoalResult {
  recommendedSteps: number;
  minimumSteps: number;
  optimalSteps: number;
  breakdown: StepBreakdown;
  weeklyTarget: number;
  caloriesPerStep: number;
  strideLength: number; // in cm or inches
  level: StepLevel;
}

export type StepLevel = 'sedentary' | 'low_active' | 'somewhat_active' | 'active' | 'highly_active';

export interface StepLevelInfo {
  name: StepLevel;
  label: {
    en: string;
    tr: string;
  };
  range: {
    min: number;
    max: number;
  };
  color: string;
  interpretation: {
    en: string;
    tr: string;
  };
}
