'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import { TrimesterBreakdown } from '../pregnancyWeightGainTypes';

interface TrimesterBreakdownCardProps {
  trimesterBreakdown: TrimesterBreakdown[];
  unit: 'metric' | 'imperial';
  locale: 'en' | 'tr';
}

const TrimesterBreakdownCard: React.FC<TrimesterBreakdownCardProps> = ({
  trimesterBreakdown,
  unit,
  locale,
}) => {
  const unitLabel = unit === 'metric' ? 'kg' : 'lbs';

  const trimesterNames = {
    1: { en: '1st Trimester', tr: '1. Trimester' },
    2: { en: '2nd Trimester', tr: '2. Trimester' },
    3: { en: '3rd Trimester', tr: '3. Trimester' },
  };

  const trimesterDescriptions = {
    1: {
      en: 'Minimal weight gain expected. Focus on folic acid and managing nausea.',
      tr: 'Minimal kilo alımı beklenir. Folik asit ve bulantı yönetimine odaklanın.',
    },
    2: {
      en: 'Steady weight gain begins. Baby is growing rapidly and energy needs increase.',
      tr: 'Düzenli kilo alımı başlar. Bebek hızla büyür ve enerji ihtiyacı artar.',
    },
    3: {
      en: 'Most rapid weight gain period. Baby is gaining fat and preparing for birth.',
      tr: 'En hızlı kilo alım dönemi. Bebek yağ biriktiriyor ve doğuma hazırlanıyor.',
    },
  };

  const statusConfig = {
    'on-track': {
      icon: CheckCircle,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      label: { en: 'On Track', tr: 'Yolunda' },
    },
    below: {
      icon: AlertTriangle,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      label: { en: 'Below Target', tr: 'Hedefin Altında' },
    },
    above: {
      icon: AlertTriangle,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      label: { en: 'Above Target', tr: 'Hedefin Üstünde' },
    },
    'not-started': {
      icon: Clock,
      color: 'text-neutral-400',
      bg: 'bg-neutral-50',
      border: 'border-neutral-200',
      label: { en: 'Upcoming', tr: 'Yaklaşan' },
    },
    completed: {
      icon: CheckCircle,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      label: { en: 'Completed', tr: 'Tamamlandı' },
    },
  };

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Trimester Analizi' : 'Trimester Breakdown'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Her trimester için kilo alım durumunuz'
              : 'Your weight gain status for each trimester'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {trimesterBreakdown.map((tb) => {
          const config = statusConfig[tb.status];
          const Icon = config.icon;
          const trimesterKey = tb.trimester as 1 | 2 | 3;

          return (
            <div
              key={tb.trimester}
              className={`rounded-xl border-2 ${config.border} ${config.bg} p-4 transition-all`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-neutral-900">
                    {trimesterNames[trimesterKey][locale]}
                  </h4>
                  <span className="text-sm text-neutral-500">
                    ({locale === 'tr' ? `Hafta ${tb.weekRange}` : `Week ${tb.weekRange}`})
                  </span>
                </div>
                <div className={`flex items-center gap-1 ${config.color}`}>
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{config.label[locale]}</span>
                </div>
              </div>

              <p className="mb-3 text-sm text-neutral-600">
                {trimesterDescriptions[trimesterKey][locale]}
              </p>

              {/* Progress bar */}
              <div className="mb-2">
                <div className="mb-1 flex justify-between text-xs text-neutral-500">
                  <span>
                    {locale === 'tr' ? 'Alınan' : 'Gained'}: {tb.currentGain} {unitLabel}
                  </span>
                  <span>
                    {locale === 'tr' ? 'Hedef' : 'Target'}: {tb.expectedGainMin}-
                    {tb.expectedGainMax} {unitLabel}
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={`h-full rounded-full transition-all ${
                      tb.status === 'on-track' || tb.status === 'completed'
                        ? 'bg-emerald-500'
                        : tb.status === 'below'
                          ? 'bg-amber-500'
                          : tb.status === 'above'
                            ? 'bg-orange-500'
                            : 'bg-neutral-300'
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        tb.expectedGainMax > 0
                          ? (tb.currentGain / tb.expectedGainMax) * 100
                          : 0
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default TrimesterBreakdownCard;
