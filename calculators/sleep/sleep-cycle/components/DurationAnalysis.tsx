'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';

interface DurationAnalysisProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

const DurationAnalysis: React.FC<DurationAnalysisProps> = ({ result, locale }) => {
  const { actualSleepMinutes, ageRecommendation, durationStatus, sleepDebtMinutes } = result;

  const sleepHours = actualSleepMinutes / 60;
  const minH = 4;
  const maxH = 12;
  const range = maxH - minH;

  // Position calculations (percentage)
  const userPos = Math.max(0, Math.min(100, ((sleepHours - minH) / range) * 100));
  const recStartPos = Math.max(0, ((ageRecommendation.minHours - minH) / range) * 100);
  const recEndPos = Math.min(100, ((ageRecommendation.maxHours - minH) / range) * 100);

  const statusConfig = {
    under: {
      badge: { en: 'Under Recommended', tr: 'Onerilen Altinda' },
      variant: 'danger' as const,
      description: {
        en: `You are sleeping ${(ageRecommendation.minHours - sleepHours).toFixed(1)} hours less than the minimum recommended for your age group.`,
        tr: `Yas grubunuz icin onerilen minimumdan ${(ageRecommendation.minHours - sleepHours).toFixed(1)} saat daha az uyuyorsunuz.`,
      },
    },
    optimal: {
      badge: { en: 'Optimal Range', tr: 'Optimal Aralik' },
      variant: 'success' as const,
      description: {
        en: 'Your sleep duration falls within the recommended range for your age group.',
        tr: 'Uyku sureniz yas grubunuz icin onerilen aralikta.',
      },
    },
    over: {
      badge: { en: 'Over Recommended', tr: 'Onerilen Uzerinde' },
      variant: 'warning' as const,
      description: {
        en: `You are sleeping ${(sleepHours - ageRecommendation.maxHours).toFixed(1)} hours more than the maximum recommended. This may indicate underlying health issues.`,
        tr: `Onerilen maksimumdan ${(sleepHours - ageRecommendation.maxHours).toFixed(1)} saat daha fazla uyuyorsunuz. Bu altta yatan saglik sorunlarini isaret edebilir.`,
      },
    },
  };

  const status = statusConfig[durationStatus];

  return (
    <Card className="animate-slide-up">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Sure Analizi' : 'Duration Analysis'}
        </h3>
        <Badge variant={status.variant}>{status.badge[locale]}</Badge>
      </div>

      <p className="mb-2 text-sm text-neutral-500">
        {ageRecommendation.label[locale]} — {locale === 'tr' ? 'Onerilen' : 'Recommended'}: {ageRecommendation.minHours}-{ageRecommendation.maxHours}h
      </p>

      {/* Visual range bar */}
      <div className="relative mb-2 mt-6">
        {/* Scale labels */}
        <div className="flex justify-between text-[10px] text-neutral-400">
          <span>{minH}h</span>
          <span>{maxH}h</span>
        </div>

        {/* Bar */}
        <div className="relative mt-1 h-6 rounded-full bg-neutral-200">
          {/* Recommended zone (green) */}
          <div
            className="absolute top-0 h-6 rounded-full bg-green-200"
            style={{ left: `${recStartPos}%`, width: `${recEndPos - recStartPos}%` }}
          />

          {/* User position marker */}
          <div
            className="absolute top-0 flex h-6 w-1 flex-col items-center"
            style={{ left: `${userPos}%`, transform: 'translateX(-50%)' }}
          >
            <div className="h-6 w-1 rounded bg-indigo-600" />
          </div>
        </div>

        {/* User position label */}
        <div
          className="absolute mt-1"
          style={{ left: `${userPos}%`, transform: 'translateX(-50%)' }}
        >
          <span className="whitespace-nowrap rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">
            {sleepHours.toFixed(1)}h
          </span>
        </div>
      </div>

      <p className="mt-8 text-sm text-neutral-600">{status.description[locale]}</p>

      {/* Sleep Debt */}
      {sleepDebtMinutes > 0 && (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">&#9888;</span>
            <div>
              <span className="text-sm font-semibold text-red-800">
                {locale === 'tr' ? 'Uyku Borcu' : 'Sleep Debt'}
              </span>
              <span className="ml-2 text-sm text-red-700">
                {Math.floor(sleepDebtMinutes / 60) > 0
                  ? `${Math.floor(sleepDebtMinutes / 60)}h ${sleepDebtMinutes % 60}m`
                  : `${sleepDebtMinutes}m`}
                {' '}{locale === 'tr' ? 'gecede' : 'per night'}
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default DurationAnalysis;
