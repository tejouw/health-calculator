export interface TargetHeartRateInput {
  age: number;
  restingHeartRate?: number;
  fitnessLevel: FitnessLevel;
  exerciseGoal: ExerciseGoal;
}

export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced' | 'athlete';

export type ExerciseGoal = 'fat_burning' | 'cardio' | 'endurance' | 'performance' | 'general';

export interface TargetHeartRateResult {
  maxHeartRate: number;
  restingHeartRate?: number;
  targetZone: {
    min: number;
    max: number;
    percentage: string;
  };
  allZones: TargetZoneInfo[];
  recommendation: string;
  fitnessLevel: FitnessLevel;
  exerciseGoal: ExerciseGoal;
}

export interface TargetZoneInfo {
  name: string;
  minBpm: number;
  maxBpm: number;
  minPercent: number;
  maxPercent: number;
  description: string;
  isTarget: boolean;
  color: string;
}
