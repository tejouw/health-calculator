import { ConceptionDateInput, ConceptionDateResult, ConceptionMilestone } from './conceptionDateTypes';

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function diffDays(a: Date, b: Date): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((a.getTime() - b.getTime()) / msPerDay);
}

function getTrimester(weeks: number): 1 | 2 | 3 {
  if (weeks < 13) return 1;
  if (weeks < 27) return 2;
  return 3;
}

function getMilestones(gestationalWeeks: number): ConceptionMilestone[] {
  const allMilestones: Omit<ConceptionMilestone, 'reached'>[] = [
    {
      week: 4,
      title: { en: 'Implantation', tr: 'İmplantasyon' },
      description: {
        en: 'The fertilized egg implants in the uterine wall. Early pregnancy hormones begin production.',
        tr: 'Döllenmiş yumurta rahim duvarına yerleşir. Erken gebelik hormonları üretilmeye başlar.',
      },
      icon: '🔬',
    },
    {
      week: 6,
      title: { en: 'First Heartbeat', tr: 'İlk Kalp Atışı' },
      description: {
        en: 'The baby\'s heart begins to beat. It can often be detected by ultrasound.',
        tr: 'Bebeğin kalbi atmaya başlar. Ultrason ile sıklıkla tespit edilebilir.',
      },
      icon: '💓',
    },
    {
      week: 8,
      title: { en: 'Embryo to Fetus', tr: 'Embriyodan Fetüse Geçiş' },
      description: {
        en: 'Major organs have begun forming. The embryo is now officially called a fetus.',
        tr: 'Başlıca organlar oluşmaya başlamıştır. Embriyo artık resmi olarak fetüs olarak adlandırılır.',
      },
      icon: '👶',
    },
    {
      week: 12,
      title: { en: 'End of First Trimester', tr: 'İlk Trimester Sonu' },
      description: {
        en: 'Risk of miscarriage drops significantly. The baby\'s vital organs are formed.',
        tr: 'Düşük riski önemli ölçüde azalır. Bebeğin hayati organları oluşmuştur.',
      },
      icon: '✅',
    },
    {
      week: 16,
      title: { en: 'Gender Can Be Determined', tr: 'Cinsiyet Belirlenebilir' },
      description: {
        en: 'The baby\'s sex may be visible on ultrasound. You may start to feel the baby move.',
        tr: 'Bebeğin cinsiyeti ultrasonda görülebilir hale gelir. Bebek hareketlerini hissetmeye başlayabilirsiniz.',
      },
      icon: '🔍',
    },
    {
      week: 20,
      title: { en: 'Halfway Point', tr: 'Yarı Yol' },
      description: {
        en: 'You\'re halfway through your pregnancy! The anatomy scan ultrasound is typically done now.',
        tr: 'Hamileliğinizin yarısındasınız! Detaylı ultrason genellikle bu dönemde yapılır.',
      },
      icon: '🎯',
    },
    {
      week: 24,
      title: { en: 'Viability Milestone', tr: 'Yaşayabilirlik Eşiği' },
      description: {
        en: 'The baby has a chance of survival if born prematurely with intensive medical care.',
        tr: 'Bebek erken doğması halinde yoğun tıbbi bakım ile yaşama şansına sahiptir.',
      },
      icon: '🏥',
    },
    {
      week: 28,
      title: { en: 'Third Trimester Begins', tr: 'Üçüncü Trimester Başlangıcı' },
      description: {
        en: 'The final stretch! The baby\'s brain develops rapidly. Eyes can open and close.',
        tr: 'Son dönem başlıyor! Bebeğin beyni hızla gelişir. Gözler açılıp kapanabilir.',
      },
      icon: '🧠',
    },
    {
      week: 32,
      title: { en: 'Lungs Developing', tr: 'Akciğerler Gelişiyor' },
      description: {
        en: 'The baby\'s lungs are maturing. The baby practices breathing movements.',
        tr: 'Bebeğin akciğerleri olgunlaşıyor. Bebek nefes alma hareketleri yapar.',
      },
      icon: '🫁',
    },
    {
      week: 37,
      title: { en: 'Full Term', tr: 'Miad (Tam Dönem)' },
      description: {
        en: 'The baby is considered full term and ready for birth.',
        tr: 'Bebek artık miadını doldurmuş kabul edilir ve doğuma hazırdır.',
      },
      icon: '🎉',
    },
    {
      week: 40,
      title: { en: 'Due Date', tr: 'Tahmini Doğum Tarihi' },
      description: {
        en: 'The estimated due date! Only about 5% of babies are born exactly on their due date.',
        tr: 'Tahmini doğum tarihi! Bebeklerin yalnızca yaklaşık %5\'i tam bu tarihte doğar.',
      },
      icon: '📅',
    },
  ];

  return allMilestones.map((m) => ({
    ...m,
    reached: gestationalWeeks >= m.week,
  }));
}

export function calculateConceptionDate(input: ConceptionDateInput): ConceptionDateResult | null {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let lmpDate: Date;
  let dueDate: Date;

  if (input.method === 'lmp' && input.lastMenstrualPeriod) {
    lmpDate = new Date(input.lastMenstrualPeriod);
    lmpDate.setHours(0, 0, 0, 0);
    // Naegele's rule: due date = LMP + 280 days (adjusted for cycle length)
    const cycleDiff = input.cycleLength - 28;
    dueDate = addDays(lmpDate, 280 + cycleDiff);
  } else if (input.method === 'due-date' && input.dueDate) {
    dueDate = new Date(input.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    const cycleDiff = input.cycleLength - 28;
    // Reverse Naegele's rule
    lmpDate = addDays(dueDate, -(280 + cycleDiff));
  } else {
    return null;
  }

  // Ovulation typically occurs cycleLength - 14 days after LMP
  const ovulationDay = input.cycleLength - 14;
  const ovulationDate = addDays(lmpDate, ovulationDay);

  // Conception typically happens on ovulation day or 1-2 days before
  const conceptionDate = new Date(ovulationDate);

  // Fertile window: 5 days before ovulation + ovulation day
  const fertileWindowStart = addDays(ovulationDate, -5);
  const fertileWindowEnd = addDays(ovulationDate, 1);

  // Gestational age is calculated from LMP
  const totalGestationalDays = diffDays(today, lmpDate);
  const gestationalWeeks = Math.floor(totalGestationalDays / 7);
  const gestationalDaysRemainder = totalGestationalDays % 7;

  const trimester = getTrimester(gestationalWeeks);
  const milestones = getMilestones(gestationalWeeks);

  const weeksUntilDue = Math.max(0, Math.ceil(diffDays(dueDate, today) / 7));

  return {
    conceptionDate,
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    gestationalAge: {
      weeks: Math.max(0, gestationalWeeks),
      days: Math.max(0, gestationalDaysRemainder),
      totalDays: Math.max(0, totalGestationalDays),
    },
    dueDate,
    trimester,
    milestones,
    conceptionDayOfWeek: conceptionDate.toLocaleDateString('en-US', { weekday: 'long' }),
    weeksUntilDue,
  };
}

export function formatDate(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getDayOfWeek(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    weekday: 'long',
  });
}
