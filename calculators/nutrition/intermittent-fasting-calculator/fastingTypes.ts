export type FastingProtocol =
  | '16:8'
  | '18:6'
  | '20:4'
  | 'omad'
  | '5:2'
  | 'alternate-day'
  | 'custom';

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type Gender = 'male' | 'female' | 'other';

export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';

export type FastingGoal = 'weight-loss' | 'autophagy' | 'mental-clarity' | 'metabolic-health' | 'muscle-gain' | 'longevity';

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

export interface FastingInput {
  protocol: FastingProtocol;
  wakeUpTime: string; // HH:MM format
  bedTime: string; // HH:MM format
  customFastHours?: number;
  customEatHours?: number;
  // New personalization parameters
  age?: number;
  gender?: Gender;
  weight?: number; // kg
  height?: number; // cm
  activityLevel?: ActivityLevel;
  experienceLevel?: ExperienceLevel;
  goals?: FastingGoal[];
}

export interface FastingWindow {
  fastStart: string; // HH:MM format
  fastEnd: string; // HH:MM format
  eatStart: string; // HH:MM format
  eatEnd: string; // HH:MM format
  fastDuration: number; // hours
  eatDuration: number; // hours
}

export interface MealTiming {
  time: string; // HH:MM format
  type: MealType;
  suggestion: {
    en: string;
    tr: string;
  };
}

export interface ProtocolInfo {
  name: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  difficulty: DifficultyLevel;
  fastHours: number;
  eatHours: number;
  weeklyPattern?: {
    en: string;
    tr: string;
  };
  benefits: {
    en: string[];
    tr: string[];
  };
  challenges: {
    en: string[];
    tr: string[];
  };
  bestFor: {
    en: string[];
    tr: string[];
  };
}

export interface MetabolicState {
  phase: 'glucose-burning' | 'fat-burning' | 'ketosis' | 'deep-ketosis' | 'autophagy-peak';
  hoursInto: number;
  description: {
    en: string;
    tr: string;
  };
}

export interface FastingTimeline {
  hour: number;
  state: string;
  description: {
    en: string;
    tr: string;
  };
  benefits: {
    en: string[];
    tr: string[];
  };
}

export interface PersonalizedInsight {
  icon: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  type: 'success' | 'warning' | 'info' | 'danger';
}

export interface FoodSuggestion {
  timing: 'pre-fast' | 'break-fast' | 'during-window';
  time: string;
  foods: {
    en: string[];
    tr: string[];
  };
  avoid: {
    en: string[];
    tr: string[];
  };
  rationale: {
    en: string;
    tr: string;
  };
}

export interface FastingResult {
  protocol: FastingProtocol;
  window: FastingWindow;
  mealTimings: MealTiming[];
  protocolInfo: ProtocolInfo;
  calorieDistribution?: {
    meal1Percent: number;
    meal2Percent: number;
    meal3Percent?: number;
  };
  autophagyWindow?: {
    start: number; // hours into fast
    peak: number; // hours into fast
  };
  recommendations: {
    en: string[];
    tr: string[];
  };
  hydrationTips: {
    en: string[];
    tr: string[];
  };
  // New personalized fields
  metabolicStates?: MetabolicState[];
  timeline?: FastingTimeline[];
  personalizedInsights?: PersonalizedInsight[];
  foodSuggestions?: FoodSuggestion[];
  estimatedCalories?: number;
  bmi?: number;
  idealProteinGrams?: number;
}

export interface FastingDay {
  type: 'fasting' | 'eating' | 'normal';
  date: string;
  calories?: number;
}
