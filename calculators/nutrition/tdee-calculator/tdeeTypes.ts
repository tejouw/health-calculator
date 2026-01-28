export interface TDEEInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
}

export type ActivityLevel =
  | 'sedentary'
  | 'lightly_active'
  | 'moderately_active'
  | 'very_active'
  | 'extremely_active';

export type Goal = 'lose_aggressive' | 'lose' | 'maintain' | 'gain' | 'gain_aggressive';

export interface TDEEResult {
  bmr: number;
  tdee: number;
  goals: {
    lose_aggressive: number;
    lose: number;
    maintain: number;
    gain: number;
    gain_aggressive: number;
  };
  macros: {
    protein: { min: number; max: number };
    fat: { min: number; max: number };
    carbs: { min: number; max: number };
  };
}

export interface ActivityLevelInfo {
  id: ActivityLevel;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  multiplier: number;
}

export interface GoalInfo {
  id: Goal;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  adjustment: number;
  weeklyChange: {
    en: string;
    tr: string;
  };
}
