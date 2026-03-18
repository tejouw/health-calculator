import {
  SleepDebtInput,
  SleepDebtResult,
  SleepDebtSeverity,
  SleepDebtSeverityInfo,
  RecoveryDay,
  HealthEffect,
} from './sleepDebtTypes';

export const sleepDebtSeverities: Record<SleepDebtSeverity, SleepDebtSeverityInfo> = {
  none: {
    name: 'none',
    label: { en: 'No Sleep Debt', tr: 'Uyku Borcu Yok' },
    range: { min: -Infinity, max: 0 },
    color: 'green',
    interpretation: {
      en: 'You are getting enough sleep. Keep up your healthy sleep habits!',
      tr: 'Yeterli uyku alıyorsunuz. Sağlıklı uyku alışkanlıklarınızı sürdürün!',
    },
  },
  mild: {
    name: 'mild',
    label: { en: 'Mild Sleep Debt', tr: 'Hafif Uyku Borcu' },
    range: { min: 0, max: 5 },
    color: 'yellow',
    interpretation: {
      en: 'You have a small sleep debt. A few nights of extra sleep should help you recover.',
      tr: 'Küçük bir uyku borcunuz var. Birkaç gece fazladan uyku toparlanmanıza yardımcı olacaktır.',
    },
  },
  moderate: {
    name: 'moderate',
    label: { en: 'Moderate Sleep Debt', tr: 'Orta Düzey Uyku Borcu' },
    range: { min: 5, max: 10 },
    color: 'orange',
    interpretation: {
      en: 'Your sleep debt is starting to affect your daily performance. Consider adjusting your schedule to get more rest.',
      tr: 'Uyku borcunuz günlük performansınızı etkilemeye başlıyor. Daha fazla dinlenebilmek için programınızı ayarlamayı düşünün.',
    },
  },
  severe: {
    name: 'severe',
    label: { en: 'Severe Sleep Debt', tr: 'Ciddi Uyku Borcu' },
    range: { min: 10, max: 20 },
    color: 'red',
    interpretation: {
      en: 'Your accumulated sleep debt is significant and likely affecting your cognitive function, mood, and health. Prioritize sleep recovery.',
      tr: 'Birikmiş uyku borcunuz ciddi boyutlarda ve büyük olasılıkla bilişsel fonksiyonlarınızı, ruh halinizi ve sağlığınızı etkiliyor. Uyku toparlanmasına öncelik verin.',
    },
  },
  critical: {
    name: 'critical',
    label: { en: 'Critical Sleep Debt', tr: 'Kritik Uyku Borcu' },
    range: { min: 20, max: Infinity },
    color: 'darkred',
    interpretation: {
      en: 'Your sleep debt has reached a critical level. This significantly increases health risks. Consult a healthcare professional about your sleep patterns.',
      tr: 'Uyku borcunuz kritik seviyeye ulaştı. Bu durum sağlık risklerini önemli ölçüde artırır. Uyku düzeniniz hakkında bir sağlık uzmanına danışın.',
    },
  },
};

export function getSleepDebtSeverity(debtHours: number): SleepDebtSeverity {
  if (debtHours <= 0) return 'none';
  if (debtHours < 5) return 'mild';
  if (debtHours < 10) return 'moderate';
  if (debtHours < 20) return 'severe';
  return 'critical';
}

function getHealthEffects(severity: SleepDebtSeverity): HealthEffect[] {
  const effects: HealthEffect[] = [
    {
      area: 'cognitive',
      impact: severity === 'none' ? 'low' : severity === 'mild' ? 'low' : severity === 'moderate' ? 'moderate' : 'high',
      description: {
        en: 'Concentration, memory, and decision-making ability',
        tr: 'Konsantrasyon, hafıza ve karar verme yeteneği',
      },
    },
    {
      area: 'mood',
      impact: severity === 'none' ? 'low' : severity === 'mild' ? 'moderate' : 'high',
      description: {
        en: 'Mood stability, irritability, and emotional regulation',
        tr: 'Ruh hali dengesi, sinirlilik ve duygusal düzenleme',
      },
    },
    {
      area: 'immune',
      impact: severity === 'none' || severity === 'mild' ? 'low' : severity === 'moderate' ? 'moderate' : 'severe',
      description: {
        en: 'Immune system function and illness susceptibility',
        tr: 'Bağışıklık sistemi fonksiyonu ve hastalığa yatkınlık',
      },
    },
    {
      area: 'weight',
      impact: severity === 'none' ? 'low' : severity === 'mild' ? 'low' : severity === 'moderate' ? 'moderate' : 'high',
      description: {
        en: 'Appetite regulation and weight management',
        tr: 'İştah düzenlemesi ve kilo yönetimi',
      },
    },
    {
      area: 'performance',
      impact: severity === 'none' ? 'low' : severity === 'mild' ? 'moderate' : 'high',
      description: {
        en: 'Physical performance and reaction time',
        tr: 'Fiziksel performans ve reaksiyon süresi',
      },
    },
    {
      area: 'heart',
      impact: severity === 'none' || severity === 'mild' ? 'low' : severity === 'moderate' ? 'moderate' : 'severe',
      description: {
        en: 'Cardiovascular health and blood pressure',
        tr: 'Kardiyovasküler sağlık ve kan basıncı',
      },
    },
  ];

  return effects;
}

function generateRecoveryPlan(totalDebt: number, idealSleep: number): RecoveryDay[] {
  if (totalDebt <= 0) return [];

  const plan: RecoveryDay[] = [];
  let remainingDebt = totalDebt;

  // Recovery strategy: add 1-2 extra hours per night
  // Don't exceed idealSleep + 2 to avoid disrupting circadian rhythm
  const maxExtraSleep = 2;
  const recoveryPerNight = Math.min(maxExtraSleep, remainingDebt);

  let day = 1;
  while (remainingDebt > 0 && day <= 30) {
    const extraTonight = Math.min(recoveryPerNight, remainingDebt);
    remainingDebt = Math.round((remainingDebt - extraTonight) * 10) / 10;

    plan.push({
      day,
      recommendedSleep: Math.round((idealSleep + extraTonight) * 10) / 10,
      remainingDebt: Math.max(0, remainingDebt),
    });

    day++;
  }

  return plan;
}

export function calculateSleepDebt(input: SleepDebtInput): SleepDebtResult {
  const { idealSleepHours, dailySleepHours } = input;

  // Calculate total debt
  let totalDebt = 0;
  for (const hours of dailySleepHours) {
    const deficit = idealSleepHours - hours;
    if (deficit > 0) {
      totalDebt += deficit;
    }
  }

  totalDebt = Math.round(totalDebt * 10) / 10;

  // Calculate average sleep
  const averageSleep =
    Math.round((dailySleepHours.reduce((sum, h) => sum + h, 0) / dailySleepHours.length) * 10) / 10;

  // Calculate daily deficit
  const dailyDeficit = Math.round((idealSleepHours - averageSleep) * 10) / 10;

  // Determine severity
  const severity = getSleepDebtSeverity(totalDebt);

  // Calculate recovery
  const recoveryPlan = generateRecoveryPlan(totalDebt, idealSleepHours);
  const recoveryDays = recoveryPlan.length;

  // Get health effects
  const healthEffects = getHealthEffects(severity);

  return {
    totalDebt,
    averageSleep,
    dailyDeficit: Math.max(0, dailyDeficit),
    severity,
    recoveryDays,
    recoveryPlan,
    healthEffects,
  };
}
