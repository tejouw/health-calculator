export type PetType = 'dog' | 'cat' | 'rabbit' | 'hamster' | 'bird' | 'guinea-pig';

export type DogSize = 'small' | 'medium' | 'large' | 'giant';

export type ActivityLevel = 'low' | 'moderate' | 'high';

export type LifeStage =
  | 'baby' // 0-6 months
  | 'young' // 6 months - 2 years
  | 'adult' // 2-7 years
  | 'mature' // 7-10 years
  | 'senior' // 10-15 years
  | 'geriatric'; // 15+ years

export interface PetAgeInput {
  petType: PetType;
  petName?: string;
  ageYears: number;
  ageMonths: number;
  dogSize?: DogSize; // Required if petType is 'dog'
  weight?: number; // Optional, in kg
  activityLevel?: ActivityLevel;
  isIndoor?: boolean; // For cats, birds, rabbits
  isNeutered?: boolean; // Spayed/neutered status
}

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface PetAgeResult {
  humanAge: number;
  lifeStage: LifeStage;
  lifeStageName: LocalizedString;
  ageCategory: LocalizedString;
  healthTips: LocalizedString[];
  nutritionTips: LocalizedString[];
  exerciseTips: LocalizedString[];
  funFacts: LocalizedString[];
  milestones: Milestone[];
  vetSchedule: VetSchedule;
  commonHealthIssues: LocalizedString[];
  expectedLifespan: number;
  percentOfLifespan: number;
  personalityTraits: LocalizedString[];
  socialNeeds: LocalizedString[];
  trainingTips: LocalizedString[];
}

export interface Milestone {
  age: number;
  title: LocalizedString;
  description: LocalizedString;
  icon: string;
}

export interface VetSchedule {
  frequency: LocalizedString;
  checkups: LocalizedString[];
  vaccinations: LocalizedString[];
  screenings: LocalizedString[];
}
