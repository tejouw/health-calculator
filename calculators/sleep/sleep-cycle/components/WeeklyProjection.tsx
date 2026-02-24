'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';

interface WeeklyProjectionProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

function formatHoursMinutes(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

const WeeklyProjection: React.FC<WeeklyProjectionProps> = ({ result, locale }) => {
  const { weeklyProjection } = result;
  const { weeklyTotalMinutes, weeklyRecommendedMinutes, weeklyDebtMinutes, healthImpactScore } = weeklyProjection;

  const hasDebt = weeklyDebtMinutes > 0;
  const isOver = weeklyTotalMinutes > weeklyRecommendedMinutes + 7 * 60;

  const healthLabel = healthImpactScore >= 85
    ? { en: 'Excellent', tr: 'Mükemmel' }
    : healthImpactScore >= 70
      ? { en: 'Good', tr: 'İyi' }
      : healthImpactScore >= 50
        ? { en: 'Fair', tr: 'Orta' }
        : { en: 'Poor', tr: 'Zayıf' };

  const healthColor = healthImpactScore >= 85
    ? 'text-green-600'
    : healthImpactScore >= 70
      ? 'text-blue-600'
      : healthImpactScore >= 50
        ? 'text-amber-600'
        : 'text-red-600';

  const stats = [
    {
      label: { en: 'Weekly Total', tr: 'Haftalık Toplam' },
      value: formatHoursMinutes(weeklyTotalMinutes),
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      label: { en: 'Recommended', tr: 'Önerilen' },
      value: formatHoursMinutes(weeklyRecommendedMinutes),
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: { en: 'Weekly Debt', tr: 'Haftalık Borç' },
      value: hasDebt ? formatHoursMinutes(weeklyDebtMinutes) : isOver ? locale === 'tr' ? 'Fazla' : 'Over' : '-',
      color: hasDebt ? 'text-red-600' : isOver ? 'text-amber-600' : 'text-green-600',
      bgColor: hasDebt ? 'bg-red-50' : isOver ? 'bg-amber-50' : 'bg-green-50',
    },
    {
      label: { en: 'Health Impact', tr: 'Sağlık Etkisi' },
      value: `${healthImpactScore}/100`,
      color: healthColor,
      bgColor: healthImpactScore >= 70 ? 'bg-green-50' : healthImpactScore >= 50 ? 'bg-amber-50' : 'bg-red-50',
    },
  ];

  return (
    <Card className="animate-slide-up">
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Haftalık Projeksiyon' : 'Weekly Projection'}
      </h3>
      <p className="mb-4 text-sm text-neutral-600">
        {locale === 'tr'
          ? 'Mevcut uyku düzeni her gece aynı kaldığında haftalık etki tahminidir'
          : 'Projected weekly impact if current sleep pattern remains the same every night'}
      </p>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className={`rounded-lg ${stat.bgColor} p-4 text-center`}>
            <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="mt-1 text-xs text-neutral-500">{stat.label[locale]}</div>
          </div>
        ))}
      </div>

      {/* Health Impact Description */}
      <div className="mt-4 rounded-lg bg-neutral-50 p-3">
        <span className={`text-sm font-semibold ${healthColor}`}>{healthLabel[locale]}</span>
        <span className="text-sm text-neutral-600">
          {' '}&mdash;{' '}
          {healthImpactScore >= 85
            ? locale === 'tr'
              ? 'Uyku düzeniniz sağlığınız için mükemmel. Bu ritmi korumaya devam edin!'
              : 'Your sleep pattern is excellent for health. Keep maintaining this rhythm!'
            : healthImpactScore >= 70
              ? locale === 'tr'
                ? 'Uyku düzeniniz iyi seviyede. Küçük iyileştirmeler fayda sağlayabilir.'
                : 'Your sleep pattern is at a good level. Small improvements could be beneficial.'
              : healthImpactScore >= 50
                ? locale === 'tr'
                  ? 'Uyku düzeniniz iyileştirme gerektirebilir. Uyku borcunu azaltmayı hedefleyin.'
                  : 'Your sleep pattern may need improvement. Aim to reduce sleep debt.'
                : locale === 'tr'
                  ? 'Uyku düzeniniz sağlığınızı olumsuz etkileyebilir. Uyku süresi ve kalitesini artırmayı öncelik haline getirin.'
                  : 'Your sleep pattern may negatively affect your health. Prioritize increasing sleep duration and quality.'}
        </span>
      </div>
    </Card>
  );
};

export default WeeklyProjection;
