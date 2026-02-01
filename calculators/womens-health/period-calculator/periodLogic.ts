import { PeriodInput, PeriodResult, PeriodPrediction } from './periodTypes';

/**
 * Calculate days between two dates
 */
function daysBetween(date1: Date, date2: Date): number {
  const diffTime = date2.getTime() - date1.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * Add days to a date
 */
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Calculate ovulation date (typically 14 days before next period)
 */
function calculateOvulationDate(nextPeriodDate: Date, cycleLength: number): Date {
  // Ovulation typically occurs 14 days before the next period
  // For a 28-day cycle, this is day 14
  // For a 30-day cycle, this is day 16, etc.
  const daysBeforeOvulation = cycleLength - 14;
  return addDays(nextPeriodDate, -14);
}

/**
 * Calculate fertile window (typically 5 days before ovulation + ovulation day)
 */
function calculateFertileWindow(ovulationDate: Date): {
  start: Date;
  end: Date;
} {
  // Fertile window: 5 days before ovulation + ovulation day + 1 day after
  const start = addDays(ovulationDate, -5);
  const end = addDays(ovulationDate, 1);
  return { start, end };
}

/**
 * Determine cycle type based on cycle length
 */
function getCycleType(cycleLength: number): {
  type: 'short' | 'normal' | 'long' | 'irregular';
  description: string;
} {
  if (cycleLength < 21) {
    return {
      type: 'short',
      description: 'Short cycle (less than 21 days)',
    };
  } else if (cycleLength >= 21 && cycleLength <= 35) {
    return {
      type: 'normal',
      description: 'Normal cycle (21-35 days)',
    };
  } else if (cycleLength > 35 && cycleLength <= 45) {
    return {
      type: 'long',
      description: 'Long cycle (36-45 days)',
    };
  } else {
    return {
      type: 'irregular',
      description: 'Irregular cycle (over 45 days)',
    };
  }
}

/**
 * Format month name from date
 */
function getMonthName(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Check if date is between two dates (inclusive)
 */
function isDateInRange(date: Date, start: Date, end: Date): boolean {
  const dateTime = date.getTime();
  return dateTime >= start.getTime() && dateTime <= end.getTime();
}

/**
 * Main period calculator function
 */
export function calculatePeriod(input: PeriodInput, locale: 'en' | 'tr' = 'en'): PeriodResult {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastPeriod = new Date(input.lastPeriodDate);
  lastPeriod.setHours(0, 0, 0, 0);

  // Calculate current cycle day
  const currentCycleDay = daysBetween(lastPeriod, today);

  // Calculate next period date
  const nextPeriodDate = addDays(lastPeriod, input.cycleLength);
  const nextPeriodEndDate = addDays(nextPeriodDate, input.periodLength - 1);
  const daysUntilNextPeriod = daysBetween(today, nextPeriodDate);

  // Calculate ovulation and fertile window
  const estimatedOvulationDate = calculateOvulationDate(nextPeriodDate, input.cycleLength);
  const fertileWindow = calculateFertileWindow(estimatedOvulationDate);
  const daysUntilOvulation = daysBetween(today, estimatedOvulationDate);

  // Check if currently menstruating
  const lastPeriodEndDate = addDays(lastPeriod, input.periodLength - 1);
  const isCurrentlyMenstruating = isDateInRange(today, lastPeriod, lastPeriodEndDate);

  // Check if in fertile window
  const isInFertileWindow = isDateInRange(today, fertileWindow.start, fertileWindow.end);

  // Predict future periods
  const numberOfCycles = input.numberOfCycles || 12;
  const futurePeriods: PeriodPrediction[] = [];

  for (let i = 1; i <= numberOfCycles; i++) {
    const periodStart = addDays(lastPeriod, input.cycleLength * i);
    const periodEnd = addDays(periodStart, input.periodLength - 1);
    const ovulation = calculateOvulationDate(periodStart, input.cycleLength);
    const fertile = calculateFertileWindow(ovulation);

    futurePeriods.push({
      cycleNumber: i,
      periodStartDate: periodStart,
      periodEndDate: periodEnd,
      ovulationDate: ovulation,
      fertileWindowStart: fertile.start,
      fertileWindowEnd: fertile.end,
      month: getMonthName(periodStart, locale),
    });
  }

  // Determine cycle type
  const cycleInfo = getCycleType(input.cycleLength);

  return {
    nextPeriodDate,
    nextPeriodEndDate,
    daysUntilNextPeriod,
    estimatedOvulationDate,
    fertileWindowStart: fertileWindow.start,
    fertileWindowEnd: fertileWindow.end,
    daysUntilOvulation,
    currentCycleDay,
    isCurrentlyMenstruating,
    isInFertileWindow,
    futurePeriods,
    cycleType: cycleInfo.type,
    cycleTypeDescription: cycleInfo.description,
  };
}

/**
 * Get cycle phases description
 */
export function getCyclePhases(locale: 'en' | 'tr'): Array<{
  name: string;
  description: string;
  dayRange: string;
  symptoms: string[];
  hormonalChanges: string;
}> {
  if (locale === 'tr') {
    return [
      {
        name: 'Menstrüasyon Fazı',
        description: 'Adet dönemi - rahim iç zarının dökülmesi',
        dayRange: '1-5 gün',
        symptoms: ['Kanama', 'Kramplar', 'Yorgunluk', 'Baş ağrısı', 'Sırt ağrısı'],
        hormonalChanges: 'Östrojen ve progesteron seviyeleri düşük',
      },
      {
        name: 'Foliküler Faz',
        description: 'Yumurtalık foliküllerinin gelişimi',
        dayRange: '6-13 gün',
        symptoms: ['Enerji artışı', 'İyileşen ruh hali', 'Artan libido'],
        hormonalChanges: 'Östrojen yükseliyor, FSH aktif',
      },
      {
        name: 'Ovulasyon',
        description: 'Yumurtanın serbest bırakılması',
        dayRange: '14. gün (±2)',
        symptoms: ['Serviks mukusunda değişiklik', 'Hafif ağrı', 'Artan libido', 'Hafif şişlik'],
        hormonalChanges: 'LH dalgalanması, östrojen zirvesi',
      },
      {
        name: 'Luteal Faz',
        description: 'Rahim hazırlanıyor - implantasyon için',
        dayRange: '15-28 gün',
        symptoms: ['PMS belirtileri', 'Şişkinlik', 'Hassas göğüsler', 'Ruh hali değişiklikleri', 'İştah artışı'],
        hormonalChanges: 'Progesteron yüksek, östrojen orta seviye',
      },
    ];
  }

  return [
    {
      name: 'Menstrual Phase',
      description: 'Period bleeding - shedding of uterine lining',
      dayRange: 'Days 1-5',
      symptoms: ['Bleeding', 'Cramps', 'Fatigue', 'Headaches', 'Lower back pain'],
      hormonalChanges: 'Estrogen and progesterone levels low',
    },
    {
      name: 'Follicular Phase',
      description: 'Ovarian follicles develop',
      dayRange: 'Days 6-13',
      symptoms: ['Increased energy', 'Improved mood', 'Increased libido'],
      hormonalChanges: 'Estrogen rising, FSH active',
    },
    {
      name: 'Ovulation',
      description: 'Release of the egg',
      dayRange: 'Day 14 (±2)',
      symptoms: ['Cervical mucus changes', 'Mild pain', 'Increased libido', 'Light spotting'],
      hormonalChanges: 'LH surge, estrogen peak',
    },
    {
      name: 'Luteal Phase',
      description: 'Uterus prepares for implantation',
      dayRange: 'Days 15-28',
      symptoms: ['PMS symptoms', 'Bloating', 'Tender breasts', 'Mood changes', 'Increased appetite'],
      hormonalChanges: 'Progesterone high, estrogen moderate',
    },
  ];
}

/**
 * Get recommendations based on cycle phase
 */
export function getPhaseRecommendations(
  cycleDay: number,
  locale: 'en' | 'tr'
): {
  phase: string;
  recommendations: string[];
} {
  if (locale === 'tr') {
    if (cycleDay >= 1 && cycleDay <= 5) {
      return {
        phase: 'Menstrüasyon',
        recommendations: [
          'Bol su için',
          'Demir açısından zengin yiyecekler tüketin',
          'Hafif egzersiz yapın (yoga, yürüyüş)',
          'Yeterli dinlenin',
          'Sıcak kompres kullanın',
        ],
      };
    } else if (cycleDay >= 6 && cycleDay <= 13) {
      return {
        phase: 'Foliküler',
        recommendations: [
          'Yoğun egzersiz için en iyi zaman',
          'Yeni projeler başlatın',
          'Sosyal aktivitelerden keyif alın',
          'Protein ve sebze ağırlıklı beslenin',
        ],
      };
    } else if (cycleDay >= 14 && cycleDay <= 16) {
      return {
        phase: 'Ovulasyon',
        recommendations: [
          'En verimli dönem (hamile kalmak istiyorsanız)',
          'Enerji seviyeleri yüksek',
          'İyi hidrasyon sağlayın',
          'Hafif-orta egzersiz',
        ],
      };
    } else {
      return {
        phase: 'Luteal',
        recommendations: [
          'Karmaşık karbonhidratlar tüketin',
          'Kafeini sınırlayın',
          'Düzenli egzersiz yapın',
          'Stresi yönetin',
          'Yeterli uyuyun',
          'Magnezyum alımını artırın',
        ],
      };
    }
  }

  // English
  if (cycleDay >= 1 && cycleDay <= 5) {
    return {
      phase: 'Menstruation',
      recommendations: [
        'Stay hydrated',
        'Eat iron-rich foods',
        'Light exercise (yoga, walking)',
        'Get adequate rest',
        'Use heat therapy for cramps',
      ],
    };
  } else if (cycleDay >= 6 && cycleDay <= 13) {
    return {
      phase: 'Follicular',
      recommendations: [
        'Best time for intense workouts',
        'Start new projects',
        'Enjoy social activities',
        'Focus on protein and vegetables',
      ],
    };
  } else if (cycleDay >= 14 && cycleDay <= 16) {
    return {
      phase: 'Ovulation',
      recommendations: [
        'Most fertile window (if trying to conceive)',
        'Energy levels are high',
        'Stay well-hydrated',
        'Light to moderate exercise',
      ],
    };
  } else {
    return {
      phase: 'Luteal',
      recommendations: [
        'Eat complex carbohydrates',
        'Limit caffeine',
        'Maintain regular exercise',
        'Manage stress levels',
        'Get enough sleep',
        'Increase magnesium intake',
      ],
    };
  }
}
