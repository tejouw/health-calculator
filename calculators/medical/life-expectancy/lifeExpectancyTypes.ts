export type Gender = 'male' | 'female';
export type SmokingStatus = 'never' | 'former' | 'current';
export type AlcoholConsumption = 'none' | 'light' | 'moderate' | 'heavy';
export type ExerciseFrequency = 'sedentary' | 'light' | 'moderate' | 'active' | 'very-active';
export type BloodPressureStatus = 'normal' | 'elevated' | 'high';
export type StressLevel = 'low' | 'medium' | 'high';
export type SocialConnections = 'isolated' | 'some' | 'strong';
export type DietQuality = 'poor' | 'fair' | 'good' | 'excellent';

export interface LifeExpectancyInput {
  // Basic Demographics
  age: number;
  gender: Gender;

  // Lifestyle Factors
  smokingStatus: SmokingStatus;
  cigarettesPerDay?: number;
  yearsSmoked?: number;
  alcoholConsumption: AlcoholConsumption;
  exerciseFrequency: ExerciseFrequency;

  // Physical Health
  height: number; // cm
  weight: number; // kg
  bloodPressure: BloodPressureStatus;

  // Chronic Conditions
  hasDiabetes: boolean;
  hasHeartDisease: boolean;
  hasCancer: boolean;
  hasStroke: boolean;

  // Family History
  motherAge?: number; // age at death or current age if alive
  fatherAge?: number;
  motherAlive: boolean;
  fatherAlive: boolean;

  // Mental & Social Health
  sleepHours: number;
  stressLevel: StressLevel;
  socialConnections: SocialConnections;

  // Nutrition
  dietQuality: DietQuality;
}

export type LifeExpectancyCategoryType =
  | 'very-low'
  | 'low'
  | 'below-average'
  | 'average'
  | 'above-average'
  | 'high'
  | 'very-high';

export interface LifeExpectancyResult {
  lifeExpectancy: number; // in years
  yearsRemaining: number;
  monthsRemaining: number;
  daysRemaining: number;
  category: LifeExpectancyCategoryType;
  impactFactors: ImpactFactor[];
  comparisonToAverage: number; // difference from average
  averageForDemographic: number;
  potentialGain: number; // years that could be gained with optimal lifestyle
}

export interface ImpactFactor {
  factor: string;
  impact: number; // years added or subtracted
  recommendation: string;
  isPositive: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface LifeExpectancyCategoryData {
  range: string;
  label: string;
  description: string;
  color: string;
}

export interface Milestone {
  age: number;
  description: string;
  icon: string;
}
