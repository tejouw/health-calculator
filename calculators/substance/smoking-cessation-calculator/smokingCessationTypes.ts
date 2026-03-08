export interface SmokingCessationInput {
  cigarettesPerDay: number;
  pricePerPack: number;
  cigarettesPerPack: number; // default 20
  yearsSmoked: number;
  quitDate: Date;
  currency: 'TRY' | 'USD' | 'EUR';
  locale?: 'en' | 'tr';
}

export interface SmokingCessationResult {
  // Time since quit
  daysSinceQuit: number;
  hoursSinceQuit: number;

  // Financial savings
  moneySavedTotal: number;
  moneySavedPerDay: number;
  moneySavedPerWeek: number;
  moneySavedPerMonth: number;
  moneySavedPerYear: number;
  projectedSavings1Year: number;
  projectedSavings5Year: number;
  projectedSavings10Year: number;

  // Health metrics
  cigarettesNotSmoked: number;
  tarAvoided: number; // mg
  carbonMonoxideAvoided: number; // mg
  lifeDaysGained: number; // estimated days gained

  // Health timeline
  healthMilestones: HealthMilestone[];
  currentMilestone: HealthMilestone | null;
  nextMilestone: HealthMilestone | null;
  overallProgress: number; // 0-100
}

export interface HealthMilestone {
  id: string;
  timeHours: number; // hours from quit date
  title: { en: string; tr: string };
  description: { en: string; tr: string };
  icon: string;
  achieved: boolean;
  progress: number; // 0-100 for partial progress
  category: 'cardiovascular' | 'respiratory' | 'sensory' | 'cancer' | 'general';
}

export interface CurrencyInfo {
  code: 'TRY' | 'USD' | 'EUR';
  symbol: string;
  name: { en: string; tr: string };
}
