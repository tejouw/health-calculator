export interface DueDateInput {
  calculationMethod: 'lmp' | 'conception' | 'ultrasound' | 'ivf';
  // For LMP method
  lastMenstrualPeriod?: Date;
  cycleLength?: number;
  // For conception method
  conceptionDate?: Date;
  // For ultrasound method
  ultrasoundDate?: Date;
  gestationalAgeWeeks?: number;
  gestationalAgeDays?: number;
  // For IVF method
  ivfTransferDate?: Date;
  embryoAge?: 3 | 5; // Day 3 or Day 5 embryo
}

export interface DueDateResult {
  dueDate: Date;
  conceptionDate: Date;
  currentWeek: number;
  currentDay: number;
  daysUntilDue: number;
  percentComplete: number;
  trimester: 1 | 2 | 3;
  milestones: PregnancyMilestone[];
}

export interface PregnancyMilestone {
  week: number;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  reached: boolean;
}

export interface TrimesterInfo {
  number: 1 | 2 | 3;
  name: {
    en: string;
    tr: string;
  };
  weekRange: {
    start: number;
    end: number;
  };
  description: {
    en: string;
    tr: string;
  };
  keyDevelopments: {
    en: string[];
    tr: string[];
  };
}

export interface CalculationMethodInfo {
  id: 'lmp' | 'conception' | 'ultrasound' | 'ivf';
  name: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  accuracy: {
    en: string;
    tr: string;
  };
}
