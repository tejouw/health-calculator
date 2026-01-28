export interface OvulationInput {
  lastMenstrualPeriod: Date;
  cycleLength: number;
  lutealPhaseLength?: number; // Optional, defaults to 14 days
}

export interface OvulationResult {
  // Key dates
  ovulationDate: Date;
  nextPeriodDate: Date;
  pregnancyTestDate: Date;
  estimatedDueDate: Date;

  // Fertile window (5-6 days)
  fertileWindowStart: Date;
  fertileWindowEnd: Date;

  // Current cycle status
  currentDayOfCycle: number;
  daysUntilOvulation: number;
  daysUntilNextPeriod: number;
  isInFertileWindow: boolean;

  // Fertile days breakdown
  fertileDays: FertileDay[];
}

export interface FertileDay {
  date: Date;
  dayOfCycle: number;
  fertilityLevel: 'low' | 'medium' | 'high' | 'peak';
  label: {
    en: string;
    tr: string;
  };
  isPast: boolean;
}

export interface CycleLengthInfo {
  value: number;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
}
