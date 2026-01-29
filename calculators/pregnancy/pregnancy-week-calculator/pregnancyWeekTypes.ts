export interface PregnancyWeekInput {
  calculationMethod: 'lmp' | 'conception' | 'dueDate';
  date: string; // ISO format (YYYY-MM-DD)
  cycleLengthDays?: number; // default 28 days
}

export interface DayInWeek {
  day: number; // 1-7
  name: {
    en: string;
    tr: string;
  };
}

export interface TrimeststresInfo {
  number: 1 | 2 | 3;
  name: {
    en: string;
    tr: string;
  };
  weeks: {
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

export interface BabySizeInfo {
  week: number;
  length: {
    cm: number;
    inches: number;
  };
  weight: {
    grams: number;
    ounces: number;
  };
  comparison: {
    en: string;
    tr: string;
  };
}

export interface WeeklyMilestone {
  week: number;
  title: {
    en: string;
    tr: string;
  };
  babyDevelopment: {
    en: string[];
    tr: string[];
  };
  motherChanges: {
    en: string[];
    tr: string[];
  };
}

export interface PregnancyWeekResult {
  currentWeek: number;
  currentDay: number;
  totalDaysPregnant: number;
  daysUntilDueDate: number;
  estimatedDueDate: string; // ISO format
  trimester: number;
  babyLength: {
    cm: number;
    inches: number;
  };
  babyWeight: {
    grams: number;
    ounces: number;
  };
  babyComparison: {
    en: string;
    tr: string;
  };
  percentageComplete: number;
  currentMilestones: {
    en: string[];
    tr: string[];
  };
  nextMilestones: {
    en: string[];
    tr: string[];
  };
  maternalChanges: {
    en: string[];
    tr: string[];
  };
}

export interface PregnancyWeekCategory {
  week: number;
  name: {
    en: string;
    tr: string;
  };
  color: string;
}
