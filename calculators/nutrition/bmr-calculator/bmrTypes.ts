export interface BMRInput {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'imperial';
}

export interface BMRResult {
  bmr: number;
  bmrHarrisBenedict: number;
  activityLevels: {
    sedentary: number;
    light: number;
    moderate: number;
    active: number;
    veryActive: number;
  };
}

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';

export interface ActivityMultiplier {
  level: ActivityLevel;
  multiplier: number;
  label: string;
}
