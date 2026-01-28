import {
  DueDateInput,
  DueDateResult,
  PregnancyMilestone,
  TrimesterInfo,
  CalculationMethodInfo,
} from './dueDateTypes';

export const calculationMethods: CalculationMethodInfo[] = [
  {
    id: 'lmp',
    name: {
      en: 'Last Menstrual Period (LMP)',
      tr: 'Son Adet Tarihi (SAT)',
    },
    description: {
      en: 'Most common method - uses first day of your last period',
      tr: 'En yaygın yöntem - son adet döngünüzün ilk gününü kullanır',
    },
    accuracy: {
      en: 'Accurate within 1-2 weeks for regular cycles',
      tr: 'Düzenli döngüler için 1-2 hafta içinde doğru',
    },
  },
  {
    id: 'conception',
    name: {
      en: 'Conception/Ovulation Date',
      tr: 'Döllendirme/Yumurtlama Tarihi',
    },
    description: {
      en: 'Based on known conception or ovulation date',
      tr: 'Bilinen döllendirme veya yumurtlama tarihine dayalı',
    },
    accuracy: {
      en: 'Very accurate if conception date is certain',
      tr: 'Döllendirme tarihi kesinse çok doğru',
    },
  },
  {
    id: 'ultrasound',
    name: {
      en: 'Ultrasound Results',
      tr: 'Ultrason Sonuçları',
    },
    description: {
      en: 'Based on ultrasound measurement of baby',
      tr: 'Bebeğin ultrason ölçümlerine dayalı',
    },
    accuracy: {
      en: 'Most accurate, especially in first trimester',
      tr: 'En doğru yöntem, özellikle ilk trimesterde',
    },
  },
  {
    id: 'ivf',
    name: {
      en: 'IVF Transfer Date',
      tr: 'Tüp Bebek Transfer Tarihi',
    },
    description: {
      en: 'Based on embryo transfer date for IVF pregnancies',
      tr: 'Tüp bebek hamilelikleri için embriyo transfer tarihine dayalı',
    },
    accuracy: {
      en: 'Extremely accurate - exact conception date known',
      tr: 'Son derece doğru - kesin döllendirme tarihi biliniyor',
    },
  },
];

export const trimesters: TrimesterInfo[] = [
  {
    number: 1,
    name: {
      en: 'First Trimester',
      tr: 'İlk Trimester',
    },
    weekRange: { start: 1, end: 13 },
    description: {
      en: 'Critical period of organ formation and early development',
      tr: 'Organ oluşumu ve erken gelişimin kritik dönemi',
    },
    keyDevelopments: {
      en: [
        'Fertilization and implantation',
        'Heart begins to beat (week 5-6)',
        'Brain and spinal cord develop',
        'Limbs begin to form',
        'Major organs start developing',
        'Baby is size of a lime by week 12',
      ],
      tr: [
        'Döllenme ve implantasyon',
        'Kalp atmaya başlar (5-6. hafta)',
        'Beyin ve omurga gelişir',
        'Uzuvlar oluşmaya başlar',
        'Majör organlar gelişmeye başlar',
        '12. haftada bebek bir limon büyüklüğünde',
      ],
    },
  },
  {
    number: 2,
    name: {
      en: 'Second Trimester',
      tr: 'İkinci Trimester',
    },
    weekRange: { start: 14, end: 27 },
    description: {
      en: 'Period of rapid growth and development, often the easiest trimester',
      tr: 'Hızlı büyüme ve gelişim dönemi, genellikle en kolay trimester',
    },
    keyDevelopments: {
      en: [
        'Baby movements felt (quickening)',
        'Gender can be determined',
        'Hair and nails grow',
        'Baby can hear sounds',
        'Sleep-wake cycles develop',
        'Baby weighs about 2 lbs by week 27',
      ],
      tr: [
        'Bebek hareketleri hissedilir',
        'Cinsiyet belirlenebilir',
        'Saç ve tırnaklar büyür',
        'Bebek sesleri duyabilir',
        'Uyku-uyanıklık döngüleri gelişir',
        '27. haftada bebek yaklaşık 1 kg gelir',
      ],
    },
  },
  {
    number: 3,
    name: {
      en: 'Third Trimester',
      tr: 'Üçüncü Trimester',
    },
    weekRange: { start: 28, end: 42 },
    description: {
      en: 'Final growth period and preparation for birth',
      tr: 'Son büyüme dönemi ve doğuma hazırlık',
    },
    keyDevelopments: {
      en: [
        'Baby gains most of their weight',
        'Lungs mature for breathing',
        'Brain develops rapidly',
        'Baby positions head-down for birth',
        'Full-term at 37 weeks',
        'Average birth weight 6-9 lbs',
      ],
      tr: [
        'Bebek kilosunun çoğunu alır',
        'Akciğerler nefes almak için olgunlaşır',
        'Beyin hızla gelişir',
        'Bebek doğum için baş aşağı pozisyon alır',
        '37. haftada term',
        'Ortalama doğum ağırlığı 3-4 kg',
      ],
    },
  },
];

export const pregnancyMilestones: Omit<PregnancyMilestone, 'reached'>[] = [
  {
    week: 4,
    title: { en: 'Positive Test', tr: 'Pozitif Test' },
    description: {
      en: 'Pregnancy test becomes positive',
      tr: 'Hamilelik testi pozitif çıkar',
    },
  },
  {
    week: 6,
    title: { en: 'Heartbeat', tr: 'Kalp Atışı' },
    description: {
      en: "Baby's heart begins to beat",
      tr: 'Bebeğin kalbi atmaya başlar',
    },
  },
  {
    week: 12,
    title: { en: 'End of First Trimester', tr: 'İlk Trimester Sonu' },
    description: {
      en: 'Major organs have formed',
      tr: 'Majör organlar oluşmuştur',
    },
  },
  {
    week: 20,
    title: { en: 'Anatomy Scan', tr: 'Anatomi Taraması' },
    description: {
      en: 'Detailed ultrasound to check development',
      tr: 'Gelişimi kontrol için detaylı ultrason',
    },
  },
  {
    week: 24,
    title: { en: 'Viability', tr: 'Yaşayabilirlik' },
    description: {
      en: 'Baby could survive with medical care if born',
      tr: 'Doğarsa tıbbi bakımla yaşayabilir',
    },
  },
  {
    week: 28,
    title: { en: 'Third Trimester', tr: 'Üçüncü Trimester' },
    description: {
      en: 'Final growth period begins',
      tr: 'Son büyüme dönemi başlar',
    },
  },
  {
    week: 37,
    title: { en: 'Full Term', tr: 'Term' },
    description: {
      en: 'Baby is considered full-term',
      tr: 'Bebek term kabul edilir',
    },
  },
];

/**
 * Calculate due date using Last Menstrual Period (Naegele's Rule)
 * Due Date = LMP + 280 days (40 weeks)
 */
export function calculateDueDateFromLMP(lmp: Date, cycleLength: number = 28): Date {
  const dueDate = new Date(lmp);

  // Standard pregnancy is 280 days from LMP
  let daysToAdd = 280;

  // Adjust for cycle length if different from 28 days
  if (cycleLength !== 28) {
    const cycleLengthAdjustment = cycleLength - 28;
    daysToAdd += cycleLengthAdjustment;
  }

  dueDate.setDate(dueDate.getDate() + daysToAdd);
  return dueDate;
}

/**
 * Calculate due date from conception/ovulation date
 * Due Date = Conception + 266 days (38 weeks)
 */
export function calculateDueDateFromConception(conceptionDate: Date): Date {
  const dueDate = new Date(conceptionDate);
  dueDate.setDate(dueDate.getDate() + 266); // 38 weeks
  return dueDate;
}

/**
 * Calculate due date from ultrasound measurements
 */
export function calculateDueDateFromUltrasound(
  ultrasoundDate: Date,
  gestationalAgeWeeks: number,
  gestationalAgeDays: number
): Date {
  const totalDaysAtUltrasound = gestationalAgeWeeks * 7 + gestationalAgeDays;
  const daysUntilDue = 280 - totalDaysAtUltrasound;

  const dueDate = new Date(ultrasoundDate);
  dueDate.setDate(dueDate.getDate() + daysUntilDue);
  return dueDate;
}

/**
 * Calculate due date from IVF transfer date
 */
export function calculateDueDateFromIVF(transferDate: Date, embryoAge: 3 | 5): Date {
  const dueDate = new Date(transferDate);

  // For day 3 embryo: add 263 days (280 - 14 - 3)
  // For day 5 embryo: add 261 days (280 - 14 - 5)
  const daysToAdd = embryoAge === 3 ? 263 : 261;

  dueDate.setDate(dueDate.getDate() + daysToAdd);
  return dueDate;
}

/**
 * Calculate conception date from LMP
 */
export function calculateConceptionFromLMP(lmp: Date, cycleLength: number = 28): Date {
  const conceptionDate = new Date(lmp);
  // Ovulation typically occurs 14 days before end of cycle
  const daysToOvulation = cycleLength - 14;
  conceptionDate.setDate(conceptionDate.getDate() + daysToOvulation);
  return conceptionDate;
}

/**
 * Calculate current gestational age
 */
export function calculateGestationalAge(lmp: Date, referenceDate: Date = new Date()): {
  weeks: number;
  days: number;
  totalDays: number;
} {
  const diffTime = referenceDate.getTime() - lmp.getTime();
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  return { weeks, days, totalDays };
}

/**
 * Determine trimester based on gestational week
 */
export function getTrimester(weeks: number): 1 | 2 | 3 {
  if (weeks <= 13) return 1;
  if (weeks <= 27) return 2;
  return 3;
}

/**
 * Calculate complete due date results
 */
export function calculateDueDate(input: DueDateInput): DueDateResult {
  let dueDate: Date;
  let conceptionDate: Date;
  let effectiveLMP: Date;

  switch (input.calculationMethod) {
    case 'lmp':
      if (!input.lastMenstrualPeriod) {
        throw new Error('Last menstrual period is required');
      }
      dueDate = calculateDueDateFromLMP(input.lastMenstrualPeriod, input.cycleLength || 28);
      conceptionDate = calculateConceptionFromLMP(
        input.lastMenstrualPeriod,
        input.cycleLength || 28
      );
      effectiveLMP = input.lastMenstrualPeriod;
      break;

    case 'conception':
      if (!input.conceptionDate) {
        throw new Error('Conception date is required');
      }
      dueDate = calculateDueDateFromConception(input.conceptionDate);
      conceptionDate = input.conceptionDate;
      // Calculate effective LMP (2 weeks before conception)
      effectiveLMP = new Date(input.conceptionDate);
      effectiveLMP.setDate(effectiveLMP.getDate() - 14);
      break;

    case 'ultrasound':
      if (
        !input.ultrasoundDate ||
        input.gestationalAgeWeeks === undefined ||
        input.gestationalAgeDays === undefined
      ) {
        throw new Error('Ultrasound date and gestational age are required');
      }
      dueDate = calculateDueDateFromUltrasound(
        input.ultrasoundDate,
        input.gestationalAgeWeeks,
        input.gestationalAgeDays
      );
      // Calculate effective LMP from ultrasound data
      const totalDaysAtUltrasound = input.gestationalAgeWeeks * 7 + input.gestationalAgeDays;
      effectiveLMP = new Date(input.ultrasoundDate);
      effectiveLMP.setDate(effectiveLMP.getDate() - totalDaysAtUltrasound);
      conceptionDate = calculateConceptionFromLMP(effectiveLMP);
      break;

    case 'ivf':
      if (!input.ivfTransferDate || !input.embryoAge) {
        throw new Error('IVF transfer date and embryo age are required');
      }
      dueDate = calculateDueDateFromIVF(input.ivfTransferDate, input.embryoAge);
      // For IVF, conception date is approximately 3-5 days before transfer
      conceptionDate = new Date(input.ivfTransferDate);
      conceptionDate.setDate(conceptionDate.getDate() - input.embryoAge);
      // Calculate effective LMP (14 days before conception)
      effectiveLMP = new Date(conceptionDate);
      effectiveLMP.setDate(effectiveLMP.getDate() - 14);
      break;

    default:
      throw new Error('Invalid calculation method');
  }

  // Calculate current gestational age
  const today = new Date();
  const { weeks: currentWeek, days: currentDay, totalDays } = calculateGestationalAge(
    effectiveLMP,
    today
  );

  // Calculate days until due date
  const diffTime = dueDate.getTime() - today.getTime();
  const daysUntilDue = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Calculate percentage complete
  const percentComplete = Math.min(Math.max((totalDays / 280) * 100, 0), 100);

  // Determine trimester
  const trimester = getTrimester(currentWeek);

  // Generate milestones with reached status
  const milestones: PregnancyMilestone[] = pregnancyMilestones.map((milestone) => ({
    ...milestone,
    reached: currentWeek >= milestone.week,
  }));

  return {
    dueDate,
    conceptionDate,
    currentWeek,
    currentDay,
    daysUntilDue,
    percentComplete: Math.round(percentComplete * 10) / 10,
    trimester,
    milestones,
  };
}

export function formatDate(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getCalculationMethod(id: string): CalculationMethodInfo | undefined {
  return calculationMethods.find((method) => method.id === id);
}

export function getTrimesterInfo(trimester: 1 | 2 | 3): TrimesterInfo {
  return trimesters[trimester - 1];
}
