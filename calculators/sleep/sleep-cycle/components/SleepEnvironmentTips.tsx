'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';
import { Coffee, UtensilsCrossed, MonitorOff, Wind, Thermometer, Dumbbell } from 'lucide-react';

interface SleepEnvironmentTipsProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

const ICON_MAP: Record<string, React.ElementType> = {
  Coffee,
  UtensilsCrossed,
  MonitorOff,
  Wind,
  Thermometer,
  Dumbbell,
};

const SleepEnvironmentTips: React.FC<SleepEnvironmentTipsProps> = ({ result, locale }) => {
  const { environmentTips } = result;

  return (
    <Card className="animate-slide-up">
      <h3 className="mb-2 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Kişisel Uyku Ortamı İpuçları' : 'Personalized Sleep Environment Tips'}
      </h3>
      <p className="mb-4 text-sm text-neutral-600">
        {locale === 'tr'
          ? `Yatış saatiniz (${result.bedtime.formatted}) baz alınarak hesaplanmış kişisel öneriler`
          : `Personalized recommendations calculated based on your bedtime (${result.bedtime.formatted})`}
      </p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {environmentTips.map((tip) => {
          const IconComponent = ICON_MAP[tip.icon] || Coffee;
          return (
            <div key={tip.id} className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tip.gradient}`}>
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">{tip.title[locale]}</h4>
                  {tip.time && (
                    <span className="text-xs font-bold text-indigo-600">{tip.time.formatted}</span>
                  )}
                </div>
              </div>
              <p className="text-xs text-neutral-600">{tip.description[locale]}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default SleepEnvironmentTips;
