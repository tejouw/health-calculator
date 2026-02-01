export interface PeriodInput {
  lastPeriodDate: Date;
  cycleLength: number; // Average cycle length in days (default 28)
  periodLength: number; // Period duration in days (default 5)
  numberOfCycles?: number; // How many future cycles to predict (default 12)
}

export interface PeriodResult {
  // Next period prediction
  nextPeriodDate: Date;
  nextPeriodEndDate: Date;
  daysUntilNextPeriod: number;

  // Ovulation prediction
  estimatedOvulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  daysUntilOvulation: number;

  // Current cycle info
  currentCycleDay: number;
  isCurrentlyMenstruating: boolean;
  isInFertileWindow: boolean;

  // Future predictions
  futurePeriods: PeriodPrediction[];

  // Cycle regularity
  cycleType: 'short' | 'normal' | 'long' | 'irregular';
  cycleTypeDescription: string;
}

export interface PeriodPrediction {
  cycleNumber: number;
  periodStartDate: Date;
  periodEndDate: Date;
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  month: string; // e.g., "January 2026"
}

export interface CyclePhase {
  name: string;
  description: string;
  dayRange: string;
  symptoms: string[];
  hormonalChanges: string;
}
