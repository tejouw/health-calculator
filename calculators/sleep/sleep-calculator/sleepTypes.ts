export interface SleepCalculatorInput {
  calculationType: 'bedtime' | 'wakeup';
  targetTime: {
    hours: number;
    minutes: number;
  };
  fallAsleepMinutes: number; // Time to fall asleep (default: 14 minutes)
}

export interface SleepTime {
  hours: number;
  minutes: number;
  formatted: string;
  cycles: number;
}

export interface SleepCalculatorResult {
  suggestedTimes: SleepTime[];
  fallAsleepTime: number;
  sleepCycleDuration: number;
}
