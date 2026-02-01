export interface WaterIntakeInput {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  unit: 'metric' | 'imperial';
  activityLevel: ActivityLevel;
  climate: ClimateType;
  specialCondition?: SpecialCondition;
}

export interface WaterIntakeResult {
  dailyIntake: number; // in ml
  dailyIntakeOz: number; // in oz
  dailyIntakeLiters: number; // in liters
  dailyIntakeCups: number; // in cups (8 oz)
  baselineIntake: number; // baseline without adjustments
  activityAdjustment: number;
  climateAdjustment: number;
  specialConditionAdjustment: number;
  recommendations: {
    morning: number;
    afternoon: number;
    evening: number;
  };
}

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'veryActive';

export type ClimateType =
  | 'cold'
  | 'temperate'
  | 'warm'
  | 'hot';

export type SpecialCondition =
  | 'none'
  | 'pregnancy'
  | 'breastfeeding'
  | 'illness'
  | 'athlete';

export interface HydrationTip {
  category: string;
  tip: string;
}
