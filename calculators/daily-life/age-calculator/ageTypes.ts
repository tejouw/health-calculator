export interface AgeCalculatorInput {
  birthDate: Date;
  targetDate?: Date;
}

export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface LifeStatistics {
  totalHeartbeats: number;
  totalBreaths: number;
  totalSleepHours: number;
  totalMeals: number;
  earthRotations: number;
  earthRevolutions: number;
}

export interface Milestone {
  name: {
    en: string;
    tr: string;
  };
  date: Date;
  daysFromNow: number;
  achieved: boolean;
}

export interface Generation {
  name: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  yearsRange: string;
}

export interface HistoricalEvent {
  event: {
    en: string;
    tr: string;
  };
  year: number;
  category: string;
}

export interface CelebrityMatch {
  name: string;
  ageDifference: number;
  profession: {
    en: string;
    tr: string;
  };
}

export interface ZodiacInfo {
  sign: string;
  dateRange: string;
  element: {
    en: string;
    tr: string;
  };
  traits: {
    en: string[];
    tr: string[];
  };
  luckyNumbers: number[];
  compatibleSigns: string[];
}

export interface ChineseZodiacInfo {
  animal: string;
  element: {
    en: string;
    tr: string;
  };
  traits: {
    en: string[];
    tr: string[];
  };
  luckyColors: string[];
  compatibleAnimals: string[];
}

export interface AgeCalculatorResult {
  age: AgeBreakdown;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  nextBirthday: Date;
  daysUntilBirthday: number;
  hoursUntilBirthday: number;
  dayOfBirth: string;
  dayOfWeek: {
    en: string;
    tr: string;
  };
  zodiacSign: ZodiacInfo;
  chineseZodiac: ChineseZodiacInfo;
  birthstone: {
    name: string;
    color: string;
    meaning: {
      en: string;
      tr: string;
    };
  };
  isLeapYearBorn: boolean;
  lifeStatistics: LifeStatistics;
  milestones: Milestone[];
  generation: Generation;
  historicalEvents: HistoricalEvent[];
  celebrityMatches: CelebrityMatch[];
  lifePercentage: number; // Based on average life expectancy
  retirementCountdown: {
    years: number;
    months: number;
    days: number;
  };
}
