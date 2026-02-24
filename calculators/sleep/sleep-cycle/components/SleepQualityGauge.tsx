'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';

interface SleepQualityGaugeProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

const SleepQualityGauge: React.FC<SleepQualityGaugeProps> = ({ result, locale }) => {
  const { qualityScore, qualityLabel, qualityColor, qualityFactors, completeCycles, actualSleepMinutes } = result;

  const factors = [
    {
      label: { en: 'Cycle Count', tr: 'Döngü Sayısı' },
      score: qualityFactors.cycleCountScore,
      weight: '40%',
      color: 'bg-indigo-500',
    },
    {
      label: { en: 'Duration Match', tr: 'Süre Uyumu' },
      score: qualityFactors.durationScore,
      weight: '35%',
      color: 'bg-blue-500',
    },
    {
      label: { en: 'Cycle Alignment', tr: 'Döngü Hizalaması' },
      score: qualityFactors.alignmentScore,
      weight: '25%',
      color: 'bg-purple-500',
    },
  ];

  const hours = Math.floor(actualSleepMinutes / 60);
  const mins = actualSleepMinutes % 60;

  // CSS conic-gradient for gauge
  const gaugeGradient = `conic-gradient(
    ${qualityColor} 0deg,
    ${qualityColor} ${(qualityScore / 100) * 360}deg,
    #e5e7eb ${(qualityScore / 100) * 360}deg,
    #e5e7eb 360deg
  )`;

  return (
    <Card className="animate-slide-up border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50">
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Uyku Kalitesi Skoru' : 'Sleep Quality Score'}
      </h3>

      <div className="flex flex-col items-center gap-6 sm:flex-row">
        {/* Circular Gauge */}
        <div className="relative flex-shrink-0">
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full"
            style={{ background: gaugeGradient }}
          >
            <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white">
              <span className="text-3xl font-bold" style={{ color: qualityColor }}>
                {qualityScore}
              </span>
              <span className="text-xs font-medium text-neutral-500">/ 100</span>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span
              className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
              style={{ backgroundColor: qualityColor }}
            >
              {qualityLabel[locale]}
            </span>
          </div>
        </div>

        {/* Stats & Factors */}
        <div className="flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">{completeCycles}</div>
              <div className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Tam Döngü' : 'Complete Cycles'}
              </div>
            </div>
            <div className="rounded-lg bg-white p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">
                {hours}h {mins > 0 ? `${mins}m` : ''}
              </div>
              <div className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Gerçek Uyku' : 'Actual Sleep'}
              </div>
            </div>
          </div>

          {/* Factor Bars */}
          <div className="space-y-2">
            {factors.map((factor, i) => (
              <div key={i}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-700">{factor.label[locale]}</span>
                  <span className="text-neutral-500">
                    {factor.score}/100 ({factor.weight})
                  </span>
                </div>
                <div className="h-2 rounded-full bg-neutral-200">
                  <div
                    className={`h-2 rounded-full ${factor.color} transition-all duration-700`}
                    style={{ width: `${factor.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SleepQualityGauge;
