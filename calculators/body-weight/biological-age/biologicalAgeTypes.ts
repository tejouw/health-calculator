export interface BiologicalAgeInput {
  chronologicalAge: number;
  gender: 'male' | 'female';
  height: number; // cm
  weight: number; // kg
  smokingStatus: 'never' | 'former' | 'current';
  alcoholConsumption: 'none' | 'moderate' | 'heavy';
  exerciseFrequency: 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
  sleepQuality: 'poor' | 'fair' | 'good' | 'excellent';
  stressLevel: 'low' | 'moderate' | 'high' | 'very-high';
  dietQuality: 'poor' | 'fair' | 'good' | 'excellent';
  chronicConditions: number; // 0-5+
  familyLongevity: 'low' | 'average' | 'high';
  bloodPressure?: 'normal' | 'elevated' | 'high';

  // NEW parameters
  breakfastHabit: 'never' | 'sometimes' | 'daily';
  fruitVegetableServings: '0-1' | '2-3' | '4-5' | '6+';
  processedFoodFrequency: 'daily' | 'weekly' | 'monthly' | 'rarely';
  omega3Intake: 'none' | 'occasional' | 'regular' | 'daily-supplement';
  vitaminDLevel: 'deficient' | 'low' | 'normal' | 'optimal';
  meditationPractice: 'never' | 'weekly' | 'daily';
  socialConnections: 'isolated' | 'few' | 'moderate' | 'strong';
  purposeInLife: 'none' | 'vague' | 'clear' | 'strong';
  screenTime: '0-2' | '2-4' | '4-6' | '6-8' | '8+';
  sunlightExposure: 'minimal' | 'moderate' | 'adequate';
  dentalHealth: 'poor' | 'fair' | 'good' | 'excellent';
  mentalStimulation: 'low' | 'moderate' | 'high';
  workLifeBalance: 'poor' | 'fair' | 'good' | 'excellent';
  caffeineIntake: 'none' | 'moderate' | 'high';
  sugarConsumption: 'high' | 'moderate' | 'low';
  waterIntake: 'low' | 'moderate' | 'adequate' | 'optimal';
}

export interface BiologicalAgeResult {
  biologicalAge: number;
  chronologicalAge: number;
  ageDifference: number;
  percentile: number;
  category: AgeCategory;
  categoryLabel: { en: string; tr: string };
  interpretation: { en: string; tr: string };

  // Detailed breakdown
  agingFactors: AgingFactor[];

  // Health system ages
  cardiovascularAge: number;
  metabolicAge: number;
  skeletalAge: number;
  cognitiveAge: number;

  // Life expectancy
  estimatedLifeExpectancy: number;
  optimalLifeExpectancy: number;
  potentialYearsGained: number;

  // Recommendations
  topActions: ActionItem[];
  positiveFactors: string[];
  negativeFactors: string[];

  // NEW: Daily routine & plans
  dailyRoutine: DailyRoutineItem[];
  weeklyPlan: WeeklyPlanDay[];
  nutritionSuggestions: NutritionSuggestion[];
  exercisePlan: ExercisePlanItem[];
  stressStrategies: StressStrategy[];
  sleepTips: SleepTip[];
  timelineProjections: TimelineProjection[];
}

export type AgeCategory =
  | 'exceptional'
  | 'younger'
  | 'chronological'
  | 'older'
  | 'accelerated';

export interface AgingFactor {
  name: string;
  impact: number; // -10 to +10 years
  score: number; // 0-100
  status: 'excellent' | 'good' | 'fair' | 'poor';
  color: string;
  icon: string;
  tip: { en: string; tr: string };
}

export interface ActionItem {
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  impact: 'high' | 'medium' | 'low';
  difficulty: 'easy' | 'moderate' | 'challenging';
  category: string;
  priority: number;
}

export interface AgeCategoryInfo {
  name: AgeCategory;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  color: string;
  gradient: string;
}

export interface DailyRoutineItem {
  time: string;
  activity: { en: string; tr: string };
  icon: string;
  benefit: { en: string; tr: string };
}

export interface WeeklyPlanDay {
  day: { en: string; tr: string };
  focus: { en: string; tr: string };
  activities: { en: string; tr: string }[];
}

export interface NutritionSuggestion {
  category: { en: string; tr: string };
  foods: { en: string; tr: string }[];
  benefit: { en: string; tr: string };
  icon: string;
}

export interface ExercisePlanItem {
  type: { en: string; tr: string };
  frequency: { en: string; tr: string };
  duration: { en: string; tr: string };
  benefit: { en: string; tr: string };
  icon: string;
}

export interface StressStrategy {
  name: { en: string; tr: string };
  description: { en: string; tr: string };
  duration: { en: string; tr: string };
  icon: string;
}

export interface SleepTip {
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  icon: string;
}

export interface TimelineProjection {
  months: number;
  label: { en: string; tr: string };
  potentialReduction: { en: string; tr: string };
  description: { en: string; tr: string };
}
