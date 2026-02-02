export interface AgeCalculatorInput {
  birthDate: Date;
  targetDate?: Date; // Optional: calculate age at a specific date (defaults to today)
}

export interface AgeBreakdown {
  years: number;
  months: number;
  days: number;
}

export interface AgeCalculatorResult {
  age: AgeBreakdown;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthday: Date;
  daysUntilBirthday: number;
  dayOfBirth: string;
  zodiacSign: string;
  chineseZodiac: string;
  birthstone: string;
  isLeapYearBorn: boolean;
}
