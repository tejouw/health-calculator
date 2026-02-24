export interface SleepCycleInput {
  bedtimeHours: number;
  bedtimeMinutes: number;
  wakeupHours: number;
  wakeupMinutes: number;
  age: number;
  fallAsleepMinutes: number;
}

export interface SleepStageDistribution {
  light: number; // percentage
  deep: number;
  rem: number;
}

export interface SleepCycleInfo {
  cycleNumber: number;
  startMinutes: number; // minutes from bedtime
  endMinutes: number;
  duration: number; // always 90
  stages: SleepStageDistribution;
  isComplete: boolean;
}

export interface AgeRecommendation {
  minHours: number;
  maxHours: number;
  optimalHours: number;
  label: { en: string; tr: string };
}

export interface QualityFactors {
  cycleCountScore: number;
  durationScore: number;
  alignmentScore: number;
}

export interface AdjustmentSuggestion {
  type: 'earlier-bed' | 'later-wake';
  minutesDelta: number;
  resultingCycles: number;
  resultingDuration: number;
  newTime: { hours: number; minutes: number; formatted: string };
}

export interface WeeklyProjection {
  weeklyTotalMinutes: number;
  weeklyRecommendedMinutes: number;
  weeklyDebtMinutes: number;
  healthImpactScore: number; // 0-100
}

export interface EnvironmentTip {
  id: string;
  icon: string; // lucide icon name
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  time?: { hours: number; minutes: number; formatted: string };
  gradient: string;
}

export interface SleepCycleResult {
  totalSleepMinutes: number;
  totalSleepFormatted: { en: string; tr: string };
  actualSleepMinutes: number; // excluding fall asleep time
  completeCycles: number;
  partialCycleMinutes: number;
  cycles: SleepCycleInfo[];
  qualityScore: number; // 0-100
  qualityLabel: { en: string; tr: string };
  qualityColor: string;
  qualityFactors: QualityFactors;
  stageBreakdown: {
    light: { percentage: number; minutes: number };
    deep: { percentage: number; minutes: number };
    rem: { percentage: number; minutes: number };
  };
  ageRecommendation: AgeRecommendation;
  durationStatus: 'under' | 'optimal' | 'over';
  sleepDebtMinutes: number;
  adjustments: AdjustmentSuggestion[];
  weeklyProjection: WeeklyProjection;
  environmentTips: EnvironmentTip[];
  bedtime: { hours: number; minutes: number; formatted: string };
  wakeup: { hours: number; minutes: number; formatted: string };
  fallAsleepTime: { hours: number; minutes: number; formatted: string };
}
