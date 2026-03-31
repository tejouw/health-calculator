import {
  BiorhythmInput,
  BiorhythmResult,
  CycleType,
  CycleInfo,
  CycleResult,
  CyclePhase,
  ChartDataPoint,
} from './biorhythmTypes';

export const cycleDefinitions: Record<CycleType, CycleInfo> = {
  physical: {
    type: 'physical',
    label: { en: 'Physical', tr: 'Fiziksel' },
    period: 23,
    color: '#EF4444',
    icon: 'Dumbbell',
    description: {
      en: 'Strength, endurance, coordination, and physical well-being.',
      tr: 'Güç, dayanıklılık, koordinasyon ve fiziksel sağlık.',
    },
  },
  emotional: {
    type: 'emotional',
    label: { en: 'Emotional', tr: 'Duygusal' },
    period: 28,
    color: '#F59E0B',
    icon: 'Heart',
    description: {
      en: 'Mood, creativity, sensitivity, and emotional stability.',
      tr: 'Ruh hali, yaratıcılık, hassasiyet ve duygusal denge.',
    },
  },
  intellectual: {
    type: 'intellectual',
    label: { en: 'Intellectual', tr: 'Zihinsel' },
    period: 33,
    color: '#3B82F6',
    icon: 'Brain',
    description: {
      en: 'Analytical thinking, memory, concentration, and learning ability.',
      tr: 'Analitik düşünme, hafıza, konsantrasyon ve öğrenme yeteneği.',
    },
  },
};

function getDaysSinceBirth(birthDate: Date, targetDate: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const birth = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  const target = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
  return Math.floor((target.getTime() - birth.getTime()) / msPerDay);
}

function calculateCycleValue(daysSinceBirth: number, period: number): number {
  return Math.round(Math.sin((2 * Math.PI * daysSinceBirth) / period) * 100) / 100;
}

function getCyclePhase(value: number, period: number, daysSinceBirth: number): CyclePhase {
  const dayInCycle = daysSinceBirth % period;
  const halfPeriod = period / 2;

  // Critical days: when cycle crosses zero (transition points)
  if (Math.abs(value) < 0.05) return 'critical';

  if (value > 0.85) return 'peak';
  if (value < -0.85) return 'low';

  if (dayInCycle < halfPeriod) {
    return value > 0 ? 'peak' : 'rising';
  }
  return value < 0 ? 'low' : 'falling';
}

export const phaseLabels: Record<CyclePhase, { en: string; tr: string }> = {
  peak: { en: 'Peak / High', tr: 'Zirve / Yüksek' },
  rising: { en: 'Rising', tr: 'Yükseliş' },
  falling: { en: 'Falling', tr: 'Düşüş' },
  critical: { en: 'Critical Day', tr: 'Kritik Gün' },
  low: { en: 'Low', tr: 'Düşük' },
};

export const phaseColors: Record<CyclePhase, string> = {
  peak: '#10B981',
  rising: '#3B82F6',
  falling: '#F59E0B',
  critical: '#EF4444',
  low: '#6B7280',
};

function calculateSingleCycle(daysSinceBirth: number, type: CycleType): CycleResult {
  const cycle = cycleDefinitions[type];
  const value = calculateCycleValue(daysSinceBirth, cycle.period);
  const phase = getCyclePhase(value, cycle.period, daysSinceBirth);
  const dayInCycle = daysSinceBirth % cycle.period;

  return {
    type,
    value: Math.round(value * 100),
    percentage: Math.round(Math.abs(value) * 100),
    phase,
    dayInCycle,
  };
}

function generateChartData(birthDate: Date, targetDate: Date): ChartDataPoint[] {
  const data: ChartDataPoint[] = [];
  const msPerDay = 1000 * 60 * 60 * 24;

  // Generate 30 days: 14 days before target, target day, 15 days after
  for (let offset = -14; offset <= 15; offset++) {
    const date = new Date(targetDate.getTime() + offset * msPerDay);
    const days = getDaysSinceBirth(birthDate, date);

    data.push({
      date,
      dayOffset: offset,
      physical: Math.round(calculateCycleValue(days, 23) * 100),
      emotional: Math.round(calculateCycleValue(days, 28) * 100),
      intellectual: Math.round(calculateCycleValue(days, 33) * 100),
    });
  }

  return data;
}

export function calculateBiorhythm(input: BiorhythmInput): BiorhythmResult {
  const daysSinceBirth = getDaysSinceBirth(input.birthDate, input.targetDate);

  const physical = calculateSingleCycle(daysSinceBirth, 'physical');
  const emotional = calculateSingleCycle(daysSinceBirth, 'emotional');
  const intellectual = calculateSingleCycle(daysSinceBirth, 'intellectual');

  // Overall score: weighted average of absolute values
  const overallScore = Math.round(
    (physical.value + emotional.value + intellectual.value) / 3
  );

  const chartData = generateChartData(input.birthDate, input.targetDate);

  return {
    physical,
    emotional,
    intellectual,
    daysSinceBirth,
    overallScore,
    chartData,
  };
}
