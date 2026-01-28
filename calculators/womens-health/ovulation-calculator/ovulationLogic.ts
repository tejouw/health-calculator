import {
  OvulationInput,
  OvulationResult,
  FertileDay,
  CycleLengthInfo,
} from './ovulationTypes';

export const cycleLengthOptions: CycleLengthInfo[] = [
  {
    value: 21,
    label: { en: '21 days (Short)', tr: '21 gün (Kısa)' },
    description: {
      en: 'Short menstrual cycle',
      tr: 'Kısa adet döngüsü',
    },
  },
  {
    value: 23,
    label: { en: '23 days', tr: '23 gün' },
    description: {
      en: 'Shorter than average cycle',
      tr: 'Ortalamadan kısa döngü',
    },
  },
  {
    value: 25,
    label: { en: '25 days', tr: '25 gün' },
    description: {
      en: 'Slightly short cycle',
      tr: 'Biraz kısa döngü',
    },
  },
  {
    value: 28,
    label: { en: '28 days (Average)', tr: '28 gün (Ortalama)' },
    description: {
      en: 'Average menstrual cycle',
      tr: 'Ortalama adet döngüsü',
    },
  },
  {
    value: 30,
    label: { en: '30 days', tr: '30 gün' },
    description: {
      en: 'Slightly long cycle',
      tr: 'Biraz uzun döngü',
    },
  },
  {
    value: 32,
    label: { en: '32 days', tr: '32 gün' },
    description: {
      en: 'Longer than average cycle',
      tr: 'Ortalamadan uzun döngü',
    },
  },
  {
    value: 35,
    label: { en: '35 days (Long)', tr: '35 gün (Uzun)' },
    description: {
      en: 'Long menstrual cycle',
      tr: 'Uzun adet döngüsü',
    },
  },
];

/**
 * Calculate ovulation date based on cycle length
 * Ovulation typically occurs 14 days before the next period
 */
export function calculateOvulationDate(
  lmp: Date,
  cycleLength: number,
  lutealPhaseLength: number = 14
): Date {
  const ovulationDate = new Date(lmp);
  const daysUntilOvulation = cycleLength - lutealPhaseLength;
  ovulationDate.setDate(ovulationDate.getDate() + daysUntilOvulation);
  return ovulationDate;
}

/**
 * Calculate next period date
 */
export function calculateNextPeriodDate(lmp: Date, cycleLength: number): Date {
  const nextPeriod = new Date(lmp);
  nextPeriod.setDate(nextPeriod.getDate() + cycleLength);
  return nextPeriod;
}

/**
 * Calculate fertile window
 * Fertile window is typically 5-6 days:
 * - 5 days before ovulation
 * - Ovulation day itself
 */
export function calculateFertileWindow(ovulationDate: Date): {
  start: Date;
  end: Date;
} {
  const start = new Date(ovulationDate);
  start.setDate(start.getDate() - 5); // 5 days before ovulation

  const end = new Date(ovulationDate);
  // Fertile window includes ovulation day

  return { start, end };
}

/**
 * Calculate when to take a pregnancy test
 * Typically 14 days after ovulation (when period is due)
 */
export function calculatePregnancyTestDate(ovulationDate: Date): Date {
  const testDate = new Date(ovulationDate);
  testDate.setDate(testDate.getDate() + 14);
  return testDate;
}

/**
 * Calculate estimated due date if conception occurs
 * Due date = Ovulation date + 266 days (38 weeks)
 */
export function calculateEstimatedDueDate(ovulationDate: Date): Date {
  const dueDate = new Date(ovulationDate);
  dueDate.setDate(dueDate.getDate() + 266);
  return dueDate;
}

/**
 * Calculate current day of cycle
 */
export function calculateCurrentDayOfCycle(lmp: Date, today: Date = new Date()): number {
  const diffTime = today.getTime() - lmp.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Day 1 is the first day of period
}

/**
 * Generate fertile days with fertility levels
 */
export function generateFertileDays(
  lmp: Date,
  ovulationDate: Date,
  fertileWindowStart: Date,
  fertileWindowEnd: Date
): FertileDay[] {
  const fertileDays: FertileDay[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Generate days from fertile window start to end
  const currentDate = new Date(fertileWindowStart);

  while (currentDate <= fertileWindowEnd) {
    const daysDiff = Math.floor(
      (currentDate.getTime() - ovulationDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    let fertilityLevel: 'low' | 'medium' | 'high' | 'peak';
    let labelEn: string;
    let labelTr: string;

    if (daysDiff === 0) {
      // Ovulation day
      fertilityLevel = 'peak';
      labelEn = 'Ovulation Day (Peak)';
      labelTr = 'Yumurtlama Günü (Zirve)';
    } else if (daysDiff === -1) {
      // 1 day before ovulation
      fertilityLevel = 'peak';
      labelEn = '1 Day Before (Peak)';
      labelTr = '1 Gün Önce (Zirve)';
    } else if (daysDiff === -2) {
      // 2 days before ovulation
      fertilityLevel = 'high';
      labelEn = '2 Days Before (High)';
      labelTr = '2 Gün Önce (Yüksek)';
    } else if (daysDiff === -3) {
      // 3 days before ovulation
      fertilityLevel = 'high';
      labelEn = '3 Days Before (High)';
      labelTr = '3 Gün Önce (Yüksek)';
    } else if (daysDiff === -4) {
      // 4 days before ovulation
      fertilityLevel = 'medium';
      labelEn = '4 Days Before (Medium)';
      labelTr = '4 Gün Önce (Orta)';
    } else {
      // 5 days before ovulation
      fertilityLevel = 'medium';
      labelEn = '5 Days Before (Medium)';
      labelTr = '5 Gün Önce (Orta)';
    }

    const dayOfCycle = calculateCurrentDayOfCycle(lmp, currentDate);
    const isPast = currentDate < today;

    fertileDays.push({
      date: new Date(currentDate),
      dayOfCycle,
      fertilityLevel,
      label: {
        en: labelEn,
        tr: labelTr,
      },
      isPast,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return fertileDays;
}

/**
 * Main calculation function
 */
export function calculateOvulation(input: OvulationInput): OvulationResult {
  const { lastMenstrualPeriod, cycleLength, lutealPhaseLength = 14 } = input;

  // Validate inputs
  if (cycleLength < 21 || cycleLength > 45) {
    throw new Error('Cycle length must be between 21 and 45 days');
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate key dates
  const ovulationDate = calculateOvulationDate(
    lastMenstrualPeriod,
    cycleLength,
    lutealPhaseLength
  );
  const nextPeriodDate = calculateNextPeriodDate(lastMenstrualPeriod, cycleLength);
  const pregnancyTestDate = calculatePregnancyTestDate(ovulationDate);
  const estimatedDueDate = calculateEstimatedDueDate(ovulationDate);

  // Calculate fertile window
  const { start: fertileWindowStart, end: fertileWindowEnd } =
    calculateFertileWindow(ovulationDate);

  // Calculate current cycle status
  const currentDayOfCycle = calculateCurrentDayOfCycle(lastMenstrualPeriod, today);

  const daysUntilOvulation = Math.ceil(
    (ovulationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const daysUntilNextPeriod = Math.ceil(
    (nextPeriodDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const isInFertileWindow = today >= fertileWindowStart && today <= fertileWindowEnd;

  // Generate fertile days
  const fertileDays = generateFertileDays(
    lastMenstrualPeriod,
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd
  );

  return {
    ovulationDate,
    nextPeriodDate,
    pregnancyTestDate,
    estimatedDueDate,
    fertileWindowStart,
    fertileWindowEnd,
    currentDayOfCycle,
    daysUntilOvulation,
    daysUntilNextPeriod,
    isInFertileWindow,
    fertileDays,
  };
}

export function formatDate(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatShortDate(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    month: 'short',
    day: 'numeric',
  });
}
