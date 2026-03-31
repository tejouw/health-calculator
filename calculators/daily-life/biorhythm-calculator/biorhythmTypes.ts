export interface BiorhythmInput {
  birthDate: Date;
  targetDate: Date;
}

export type CycleType = 'physical' | 'emotional' | 'intellectual';

export interface CycleInfo {
  type: CycleType;
  label: { en: string; tr: string };
  period: number;
  color: string;
  icon: string;
  description: { en: string; tr: string };
}

export interface CycleResult {
  type: CycleType;
  value: number; // -100 to +100
  percentage: number; // 0 to 100 (absolute)
  phase: CyclePhase;
  dayInCycle: number;
}

export type CyclePhase = 'peak' | 'rising' | 'falling' | 'critical' | 'low';

export interface BiorhythmResult {
  physical: CycleResult;
  emotional: CycleResult;
  intellectual: CycleResult;
  daysSinceBirth: number;
  overallScore: number;
  chartData: ChartDataPoint[];
}

export interface ChartDataPoint {
  date: Date;
  dayOffset: number;
  physical: number;
  emotional: number;
  intellectual: number;
}
