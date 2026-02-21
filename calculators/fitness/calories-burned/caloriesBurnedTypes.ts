export interface CaloriesBurnedInput {
  weight: number;
  duration: number; // minutes
  activityId: string;
  unit: 'metric' | 'imperial';
}

export interface CaloriesBurnedResult {
  totalCalories: number;
  caloriesPerMinute: number;
  caloriesPerHour: number;
  met: number;
  activityName: { en: string; tr: string };
  intensity: ActivityIntensity;
  foodEquivalents: FoodEquivalent[];
  weeklyProjection: number;
  monthlyProjection: number;
}

export type ActivityIntensity = 'light' | 'moderate' | 'vigorous' | 'very_vigorous';

export interface ActivityCategory {
  id: string;
  name: { en: string; tr: string };
  icon: string;
}

export interface Activity {
  id: string;
  categoryId: string;
  name: { en: string; tr: string };
  met: number;
  intensity: ActivityIntensity;
}

export interface FoodEquivalent {
  name: { en: string; tr: string };
  calories: number;
  amount: number; // how many of this food the burned calories equal
  emoji: string;
}

export interface IntensityInfo {
  name: ActivityIntensity;
  label: { en: string; tr: string };
  color: string;
  description: { en: string; tr: string };
  heartRateZone: string;
}
