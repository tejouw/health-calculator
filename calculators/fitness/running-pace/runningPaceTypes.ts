export interface RunningPaceInput {
  distance: number;
  distanceUnit: 'km' | 'miles';
  hours: number;
  minutes: number;
  seconds: number;
  // Optional for enhanced calculations
  age?: number;
  weight?: number;
  weightUnit?: 'kg' | 'lbs';
  gender?: 'male' | 'female';
}

export type RunningLevel = 'beginner' | 'intermediate' | 'advanced' | 'elite';

export interface TrainingZone {
  name: string;
  description: string;
  paceRange: {
    min: { minutes: number; seconds: number };
    max: { minutes: number; seconds: number };
  };
  percentage: string;
  heartRatePercentage?: string;
}

export interface RacePrediction {
  distance: number;
  distanceLabel: string;
  unit: string;
  predictedTime: string;
  predictedPace: string;
}

export interface RunningPaceResult {
  pacePerKm: {
    minutes: number;
    seconds: number;
    decimal: number;
  };
  pacePerMile: {
    minutes: number;
    seconds: number;
    decimal: number;
  };
  speed: {
    kmh: number;
    mph: number;
  };
  totalTime: {
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
  };
  splits: {
    distance: number;
    unit: string;
    time: string;
    pace?: string;
  }[];
  // Enhanced results
  runningLevel: RunningLevel;
  vo2Max?: number;
  caloriesBurned?: number;
  trainingZones: TrainingZone[];
  racePredictions: RacePrediction[];
  worldRecordComparison?: {
    recordTime: string;
    recordPace: string;
    percentageOfRecord: number;
  };
  heartRateZones?: {
    maxHeartRate: number;
    zones: {
      name: string;
      min: number;
      max: number;
      percentage: string;
    }[];
  };
  performanceScore: number; // 0-100
}
