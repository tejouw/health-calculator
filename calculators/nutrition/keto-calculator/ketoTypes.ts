export interface KetoInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
  goal: KetoGoal;
  bodyFatPercentage?: number;
}

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'very_active';

export type KetoGoal =
  | 'lose'
  | 'maintain'
  | 'gain';

export type KetoType =
  | 'standard'
  | 'targeted'
  | 'cyclical';

export interface KetoMacros {
  calories: number;
  fat: number;
  protein: number;
  netCarbs: number;
  fatCalories: number;
  proteinCalories: number;
  carbCalories: number;
  fatPercentage: number;
  proteinPercentage: number;
  carbPercentage: number;
}

export interface KetoResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  standardKeto: KetoMacros;
  targetedKeto: KetoMacros;
  cyclicalKeto: KetoMacros;
  leanMass: number;
  fatMass: number;
  waterIntake: number;
  ketosisTimeline: KetosisPhase[];
}

export interface KetosisPhase {
  phase: string;
  duration: string;
  description: {
    en: string;
    tr: string;
  };
  icon: string;
}
