export interface ProteinInput {
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  goal: 'maintain' | 'lose' | 'gain';
  age?: number;
  gender?: 'male' | 'female';
}

export interface ProteinResult {
  dailyProtein: {
    grams: number;
    perKg: number;
    perLb: number;
  };
  range: {
    min: number;
    max: number;
  };
  mealsBreakdown: {
    breakfast: number;
    lunch: number;
    dinner: number;
    snacks: number;
  };
  interpretation: string;
  recommendation: string;
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
export type Goal = 'maintain' | 'lose' | 'gain';

export interface ActivityLevelInfo {
  name: ActivityLevel;
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
  name: Goal;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  proteinMultiplier: number;
}
