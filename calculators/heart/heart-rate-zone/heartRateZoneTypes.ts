export interface HeartRateZoneResult {
  maxHeartRate: number;
  restingHeartRate?: number;
  zones: {
    zone1: { name: string; range: string; bpm: { min: number; max: number }; percentage: string; purpose: string };
    zone2: { name: string; range: string; bpm: { min: number; max: number }; percentage: string; purpose: string };
    zone3: { name: string; range: string; bpm: { min: number; max: number }; percentage: string; purpose: string };
    zone4: { name: string; range: string; bpm: { min: number; max: number }; percentage: string; purpose: string };
    zone5: { name: string; range: string; bpm: { min: number; max: number }; percentage: string; purpose: string };
  };
}

export type CalculationMethod = 'standard' | 'karvonen';
