export type ConceptionMethod = 'lmp' | 'due-date';

export interface ConceptionDateInput {
  method: ConceptionMethod;
  lastMenstrualPeriod?: string; // ISO date string
  dueDate?: string; // ISO date string
  cycleLength: number; // days, default 28
}

export interface ConceptionDateResult {
  conceptionDate: Date;
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  gestationalAge: {
    weeks: number;
    days: number;
    totalDays: number;
  };
  dueDate: Date;
  trimester: 1 | 2 | 3;
  milestones: ConceptionMilestone[];
  conceptionDayOfWeek: string;
  weeksUntilDue: number;
}

export interface ConceptionMilestone {
  week: number;
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  icon: string;
  reached: boolean;
}
