export interface SleepDebtInput {
  idealSleepHours: number;
  dailySleepHours: number[];  // Last 7 days
}

export type SleepDebtSeverity = 'none' | 'mild' | 'moderate' | 'severe' | 'critical';

export interface SleepDebtResult {
  totalDebt: number;           // Total hours of sleep debt
  averageSleep: number;        // Average sleep per night
  dailyDeficit: number;        // Average daily deficit
  severity: SleepDebtSeverity;
  recoveryDays: number;        // Estimated days to recover
  recoveryPlan: RecoveryDay[];
  healthEffects: HealthEffect[];
}

export interface RecoveryDay {
  day: number;
  recommendedSleep: number;
  remainingDebt: number;
}

export interface HealthEffect {
  area: string;
  impact: 'low' | 'moderate' | 'high' | 'severe';
  description: {
    en: string;
    tr: string;
  };
}

export interface SleepDebtSeverityInfo {
  name: SleepDebtSeverity;
  label: {
    en: string;
    tr: string;
  };
  range: {
    min: number;
    max: number;
  };
  color: string;
  interpretation: {
    en: string;
    tr: string;
  };
}
