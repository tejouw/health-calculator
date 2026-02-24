'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';

interface SleepStageBreakdownProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

const SleepStageBreakdown: React.FC<SleepStageBreakdownProps> = ({ result, locale }) => {
  const { stageBreakdown } = result;

  const stages = [
    {
      key: 'light' as const,
      label: { en: 'Light Sleep', tr: 'Hafif Uyku' },
      color: 'bg-blue-300',
      textColor: 'text-blue-700',
      bgColor: 'bg-blue-50',
      benefits: {
        en: ['Muscle repair begins', 'Heart rate & breathing slow', 'Memory processing starts'],
        tr: ['Kas onarimi baslar', 'Kalp atisi ve nefes yavasar', 'Bellek isleme baslar'],
      },
    },
    {
      key: 'deep' as const,
      label: { en: 'Deep Sleep', tr: 'Derin Uyku' },
      color: 'bg-blue-800',
      textColor: 'text-blue-900',
      bgColor: 'bg-indigo-50',
      benefits: {
        en: ['Physical restoration', 'Growth hormone release', 'Immune system boost'],
        tr: ['Fiziksel yenilenme', 'Buyume hormonu salgilanmasi', 'Bagisiklik sistemi guclendirme'],
      },
    },
    {
      key: 'rem' as const,
      label: { en: 'REM Sleep', tr: 'REM Uyku' },
      color: 'bg-purple-600',
      textColor: 'text-purple-700',
      bgColor: 'bg-purple-50',
      benefits: {
        en: ['Memory consolidation', 'Emotional processing', 'Dreaming & creativity'],
        tr: ['Bellek pekistirme', 'Duygusal isleme', 'Ruya gorme ve yaraticilik'],
      },
    },
  ];

  return (
    <Card className="animate-slide-up">
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Uyku Asamasi Dagilimi' : 'Sleep Stage Breakdown'}
      </h3>

      <div className="space-y-4">
        {stages.map((stage) => {
          const data = stageBreakdown[stage.key];
          const hours = Math.floor(data.minutes / 60);
          const mins = data.minutes % 60;

          return (
            <div key={stage.key} className={`rounded-lg ${stage.bgColor} p-4`}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-4 w-4 rounded ${stage.color}`} />
                  <span className={`font-semibold ${stage.textColor}`}>{stage.label[locale]}</span>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold ${stage.textColor}`}>{data.percentage}%</span>
                  <span className="ml-2 text-xs text-neutral-500">
                    ({hours > 0 ? `${hours}h ` : ''}{mins}m)
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-3 h-3 rounded-full bg-white">
                <div
                  className={`h-3 rounded-full ${stage.color} transition-all duration-700`}
                  style={{ width: `${data.percentage}%` }}
                />
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {stage.benefits[locale].map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full bg-white px-2.5 py-1 text-xs font-medium text-neutral-600"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SleepStageBreakdown;
