import {
  SmokingCessationInput,
  SmokingCessationResult,
  HealthMilestone,
  CurrencyInfo,
} from './smokingCessationTypes';

// Average tar per cigarette: ~10mg
const TAR_PER_CIGARETTE_MG = 10;
// Average CO per cigarette: ~20mg
const CO_PER_CIGARETTE_MG = 20;
// Each cigarette shortens life by ~11 minutes (UK study, BMJ 2000)
const LIFE_MINUTES_LOST_PER_CIGARETTE = 11;

export const CURRENCIES: Record<string, CurrencyInfo> = {
  TRY: { code: 'TRY', symbol: '₺', name: { en: 'Turkish Lira', tr: 'Türk Lirası' } },
  USD: { code: 'USD', symbol: '$', name: { en: 'US Dollar', tr: 'ABD Doları' } },
  EUR: { code: 'EUR', symbol: '€', name: { en: 'Euro', tr: 'Euro' } },
};

export function getHealthMilestones(hoursSinceQuit: number): HealthMilestone[] {
  const milestones: HealthMilestone[] = [
    {
      id: '20min',
      timeHours: 0.33,
      title: {
        en: 'Heart Rate Normalizes',
        tr: 'Kalp Atış Hızı Normalleşir',
      },
      description: {
        en: 'Your heart rate and blood pressure begin to drop back to normal levels.',
        tr: 'Kalp atış hızınız ve kan basıncınız normal seviyelere düşmeye başlar.',
      },
      icon: '❤️',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
    {
      id: '8hours',
      timeHours: 8,
      title: {
        en: 'Carbon Monoxide Levels Drop',
        tr: 'Karbonmonoksit Seviyesi Düşer',
      },
      description: {
        en: 'Carbon monoxide levels in your blood drop to normal. Oxygen levels increase to normal.',
        tr: 'Kanınızdaki karbonmonoksit seviyesi normale döner. Oksijen seviyeleri normal düzeye yükselir.',
      },
      icon: '🫁',
      achieved: false,
      progress: 0,
      category: 'respiratory',
    },
    {
      id: '24hours',
      timeHours: 24,
      title: {
        en: 'Heart Attack Risk Decreases',
        tr: 'Kalp Krizi Riski Azalır',
      },
      description: {
        en: 'Your risk of having a heart attack begins to decrease significantly.',
        tr: 'Kalp krizi geçirme riskiniz önemli ölçüde azalmaya başlar.',
      },
      icon: '🫀',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
    {
      id: '48hours',
      timeHours: 48,
      title: {
        en: 'Taste & Smell Improve',
        tr: 'Tat ve Koku Alma İyileşir',
      },
      description: {
        en: 'Nerve endings start to regrow. Your ability to taste and smell begins to improve.',
        tr: 'Sinir uçları yeniden büyümeye başlar. Tat ve koku alma duyunuz iyileşmeye başlar.',
      },
      icon: '👃',
      achieved: false,
      progress: 0,
      category: 'sensory',
    },
    {
      id: '72hours',
      timeHours: 72,
      title: {
        en: 'Breathing Gets Easier',
        tr: 'Nefes Almak Kolaylaşır',
      },
      description: {
        en: 'Bronchial tubes relax, making it easier to breathe. Lung capacity starts to increase.',
        tr: 'Bronş tüpleri gevşer, nefes almak kolaylaşır. Akciğer kapasitesi artmaya başlar.',
      },
      icon: '🌬️',
      achieved: false,
      progress: 0,
      category: 'respiratory',
    },
    {
      id: '2weeks',
      timeHours: 336, // 14 days
      title: {
        en: 'Circulation Improves',
        tr: 'Kan Dolaşımı İyileşir',
      },
      description: {
        en: 'Your circulation significantly improves. Walking and physical activities become easier.',
        tr: 'Kan dolaşımınız belirgin şekilde iyileşir. Yürüme ve fiziksel aktiviteler kolaylaşır.',
      },
      icon: '🏃',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
    {
      id: '3months',
      timeHours: 2160, // 90 days
      title: {
        en: 'Lung Function Increases',
        tr: 'Akciğer Fonksiyonu Artar',
      },
      description: {
        en: 'Your lung function increases by up to 30%. Coughing and shortness of breath decrease.',
        tr: 'Akciğer fonksiyonunuz %30\'a kadar artar. Öksürük ve nefes darlığı azalır.',
      },
      icon: '💨',
      achieved: false,
      progress: 0,
      category: 'respiratory',
    },
    {
      id: '9months',
      timeHours: 6480, // 270 days
      title: {
        en: 'Cilia Regrow in Lungs',
        tr: 'Akciğerlerde Silia Yenilenir',
      },
      description: {
        en: 'Cilia (tiny hair-like structures) in the lungs have regrown, increasing the ability to handle mucus and reduce infections.',
        tr: 'Akciğerlerdeki silia (küçük tüy benzeri yapılar) yeniden oluşur, mukus temizleme kapasitesi artar ve enfeksiyon riski azalır.',
      },
      icon: '🔬',
      achieved: false,
      progress: 0,
      category: 'respiratory',
    },
    {
      id: '1year',
      timeHours: 8760,
      title: {
        en: 'Heart Disease Risk Halved',
        tr: 'Kalp Hastalığı Riski Yarıya Düşer',
      },
      description: {
        en: 'Your risk of coronary heart disease is now half that of a smoker.',
        tr: 'Koroner kalp hastalığı riskiniz artık bir sigara içicisinin yarısı kadardır.',
      },
      icon: '🏥',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
    {
      id: '5years',
      timeHours: 43800,
      title: {
        en: 'Stroke Risk Equals Non-Smoker',
        tr: 'İnme Riski Sigara İçmeyenlerle Eşitlenir',
      },
      description: {
        en: 'Your risk of stroke is now the same as someone who has never smoked.',
        tr: 'İnme riskiniz artık hiç sigara içmemiş biriyle aynı düzeye gelir.',
      },
      icon: '🧠',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
    {
      id: '10years',
      timeHours: 87600,
      title: {
        en: 'Lung Cancer Risk Halved',
        tr: 'Akciğer Kanseri Riski Yarıya Düşer',
      },
      description: {
        en: 'Your risk of dying from lung cancer is about half that of a smoker. Risk of other cancers also decreases significantly.',
        tr: 'Akciğer kanserinden ölme riskiniz bir sigara içicisinin yaklaşık yarısı kadardır. Diğer kanser riskleri de önemli ölçüde azalır.',
      },
      icon: '🎗️',
      achieved: false,
      progress: 0,
      category: 'cancer',
    },
    {
      id: '15years',
      timeHours: 131400,
      title: {
        en: 'Heart Disease Risk Equals Non-Smoker',
        tr: 'Kalp Hastalığı Riski Sigara İçmeyenlerle Eşitlenir',
      },
      description: {
        en: 'Your risk of coronary heart disease is now the same as a non-smoker. Your body has significantly healed.',
        tr: 'Koroner kalp hastalığı riskiniz artık sigara içmeyen biriyle aynıdır. Vücudunuz önemli ölçüde iyileşmiştir.',
      },
      icon: '🌟',
      achieved: false,
      progress: 0,
      category: 'cardiovascular',
    },
  ];

  // Calculate achieved status and progress
  return milestones.map((milestone) => {
    if (hoursSinceQuit >= milestone.timeHours) {
      return { ...milestone, achieved: true, progress: 100 };
    }

    // Calculate progress to this milestone based on the previous milestone
    const prevMilestoneIndex = milestones.indexOf(milestone) - 1;
    const prevHours = prevMilestoneIndex >= 0 ? milestones[prevMilestoneIndex].timeHours : 0;
    const range = milestone.timeHours - prevHours;
    const elapsed = hoursSinceQuit - prevHours;
    const progress = elapsed > 0 ? Math.min(100, Math.round((elapsed / range) * 100)) : 0;

    return { ...milestone, progress };
  });
}

export function calculateSmokingCessation(input: SmokingCessationInput): SmokingCessationResult {
  const now = new Date();
  const quitDate = new Date(input.quitDate);

  const msDiff = now.getTime() - quitDate.getTime();
  const hoursSinceQuit = Math.max(0, msDiff / (1000 * 60 * 60));
  const daysSinceQuit = Math.max(0, msDiff / (1000 * 60 * 60 * 24));

  // Financial calculations
  const costPerCigarette = input.pricePerPack / input.cigarettesPerPack;
  const dailyCost = costPerCigarette * input.cigarettesPerDay;

  const moneySavedTotal = dailyCost * daysSinceQuit;
  const moneySavedPerDay = dailyCost;
  const moneySavedPerWeek = dailyCost * 7;
  const moneySavedPerMonth = dailyCost * 30.44;
  const moneySavedPerYear = dailyCost * 365.25;

  const projectedSavings1Year = dailyCost * 365.25;
  const projectedSavings5Year = dailyCost * 365.25 * 5;
  const projectedSavings10Year = dailyCost * 365.25 * 10;

  // Health metrics
  const cigarettesNotSmoked = Math.round(input.cigarettesPerDay * daysSinceQuit);
  const tarAvoided = cigarettesNotSmoked * TAR_PER_CIGARETTE_MG;
  const carbonMonoxideAvoided = cigarettesNotSmoked * CO_PER_CIGARETTE_MG;
  const lifeDaysGained = Math.round(
    (cigarettesNotSmoked * LIFE_MINUTES_LOST_PER_CIGARETTE) / (60 * 24)
  );

  // Health milestones
  const healthMilestones = getHealthMilestones(hoursSinceQuit);

  const achievedMilestones = healthMilestones.filter((m) => m.achieved);
  const unachievedMilestones = healthMilestones.filter((m) => !m.achieved);

  const currentMilestone = achievedMilestones.length > 0
    ? achievedMilestones[achievedMilestones.length - 1]
    : null;

  const nextMilestone = unachievedMilestones.length > 0
    ? unachievedMilestones[0]
    : null;

  // Overall progress (based on 15-year full recovery timeline)
  const maxHours = 131400; // 15 years
  const overallProgress = Math.min(100, Math.round((hoursSinceQuit / maxHours) * 100));

  return {
    daysSinceQuit: Math.round(daysSinceQuit * 10) / 10,
    hoursSinceQuit: Math.round(hoursSinceQuit),

    moneySavedTotal: Math.round(moneySavedTotal * 100) / 100,
    moneySavedPerDay: Math.round(moneySavedPerDay * 100) / 100,
    moneySavedPerWeek: Math.round(moneySavedPerWeek * 100) / 100,
    moneySavedPerMonth: Math.round(moneySavedPerMonth * 100) / 100,
    moneySavedPerYear: Math.round(moneySavedPerYear * 100) / 100,
    projectedSavings1Year: Math.round(projectedSavings1Year * 100) / 100,
    projectedSavings5Year: Math.round(projectedSavings5Year * 100) / 100,
    projectedSavings10Year: Math.round(projectedSavings10Year * 100) / 100,

    cigarettesNotSmoked,
    tarAvoided,
    carbonMonoxideAvoided,
    lifeDaysGained,

    healthMilestones,
    currentMilestone,
    nextMilestone,
    overallProgress,
  };
}

export function formatCurrency(amount: number, currency: 'TRY' | 'USD' | 'EUR'): string {
  const info = CURRENCIES[currency];
  if (currency === 'TRY') {
    return `${amount.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${info.symbol}`;
  }
  return `${info.symbol}${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatTimeElapsed(hours: number, locale: 'en' | 'tr'): string {
  if (hours < 1) {
    const minutes = Math.round(hours * 60);
    return locale === 'en' ? `${minutes} minutes` : `${minutes} dakika`;
  }
  if (hours < 24) {
    const h = Math.round(hours);
    return locale === 'en' ? `${h} hour${h !== 1 ? 's' : ''}` : `${h} saat`;
  }
  if (hours < 720) {
    const days = Math.round(hours / 24);
    return locale === 'en' ? `${days} day${days !== 1 ? 's' : ''}` : `${days} gün`;
  }
  if (hours < 8760) {
    const months = Math.round(hours / 720);
    return locale === 'en' ? `${months} month${months !== 1 ? 's' : ''}` : `${months} ay`;
  }
  const years = Math.round(hours / 8760);
  return locale === 'en' ? `${years} year${years !== 1 ? 's' : ''}` : `${years} yıl`;
}
