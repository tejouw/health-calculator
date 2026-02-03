'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Target, TrendingDown, TrendingUp, Activity } from 'lucide-react';

interface HealthyWeightRangeProps {
  currentWeight: number;
  currentBMI: number;
  healthyMin: number;
  healthyMax: number;
  unit: 'metric' | 'imperial';
  locale: 'en' | 'tr';
}

const HealthyWeightRange: React.FC<HealthyWeightRangeProps> = ({
  currentWeight,
  currentBMI,
  healthyMin,
  healthyMax,
  unit,
  locale,
}) => {
  const unitLabel = unit === 'metric' ? 'kg' : 'lbs';
  const isUnderweight = currentBMI < 18.5;
  const isOverweight = currentBMI >= 25;
  const isHealthy = currentBMI >= 18.5 && currentBMI < 25;

  // Calculate weight to lose or gain to reach healthy range
  const weightToLose = isOverweight ? currentWeight - healthyMax : 0;
  const weightToGain = isUnderweight ? healthyMin - currentWeight : 0;

  // Calculate percentage within/outside healthy range
  const rangeSpan = healthyMax - healthyMin;
  let position = 0;
  if (currentWeight < healthyMin) {
    position = 0;
  } else if (currentWeight > healthyMax) {
    position = 100;
  } else {
    position = ((currentWeight - healthyMin) / rangeSpan) * 100;
  }

  return (
    <Card className="border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-white">
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Sağlıklı Kilo Aralığınız' : 'Your Healthy Weight Range'}
        </h3>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Boyunuza göre ideal kilo aralığı (VKİ 18.5-25)'
            : 'Ideal weight range based on your height (BMI 18.5-25)'}
        </p>
      </div>

      {/* Visual Range Display */}
      <div className="mb-6">
        <div className="relative h-12 rounded-full bg-neutral-200">
          {/* Healthy Range Bar */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>

          {/* Current Position Marker */}
          <div
            className="absolute top-1/2 h-16 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600"
            style={{ left: `${Math.min(Math.max(position, 0), 100)}%` }}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-primary-600 px-2 py-1 text-xs font-semibold text-white">
              {locale === 'tr' ? 'Mevcut' : 'Current'}
            </div>
          </div>
        </div>

        {/* Range Labels */}
        <div className="mt-2 flex justify-between text-sm">
          <span className="font-medium text-neutral-700">
            {healthyMin} {unitLabel}
          </span>
          <span className="font-medium text-neutral-700">
            {healthyMax} {unitLabel}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary-600" />
            <span className="text-xs font-medium uppercase text-neutral-500">
              {locale === 'tr' ? 'Mevcut Kilo' : 'Current Weight'}
            </span>
          </div>
          <div className="text-2xl font-bold text-neutral-900">
            {currentWeight} {unitLabel}
          </div>
          <div className="mt-1 text-xs text-neutral-600">
            {locale === 'tr' ? `VKİ: ${currentBMI}` : `BMI: ${currentBMI}`}
          </div>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Activity className="h-5 w-5 text-green-600" />
            <span className="text-xs font-medium uppercase text-neutral-500">
              {locale === 'tr' ? 'Hedef Aralık' : 'Target Range'}
            </span>
          </div>
          <div className="text-lg font-bold text-green-900">
            {healthyMin}-{healthyMax}
          </div>
          <div className="mt-1 text-xs text-green-700">
            {unitLabel} ({locale === 'tr' ? 'Sağlıklı' : 'Healthy'})
          </div>
        </div>

        {!isHealthy && (
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              {isOverweight ? (
                <TrendingDown className="h-5 w-5 text-blue-600" />
              ) : (
                <TrendingUp className="h-5 w-5 text-blue-600" />
              )}
              <span className="text-xs font-medium uppercase text-neutral-500">
                {isOverweight
                  ? locale === 'tr'
                    ? 'Vermeli'
                    : 'To Lose'
                  : locale === 'tr'
                    ? 'Almalı'
                    : 'To Gain'}
              </span>
            </div>
            <div className="text-2xl font-bold text-blue-900">
              {isOverweight ? weightToLose.toFixed(1) : weightToGain.toFixed(1)} {unitLabel}
            </div>
            <div className="mt-1 text-xs text-blue-700">
              {locale === 'tr' ? 'Hedef için' : 'To reach goal'}
            </div>
          </div>
        )}

        {isHealthy && (
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-600" />
              <span className="text-xs font-medium uppercase text-neutral-500">
                {locale === 'tr' ? 'Durum' : 'Status'}
              </span>
            </div>
            <div className="text-lg font-bold text-green-900">
              {locale === 'tr' ? '✓ Sağlıklı' : '✓ Healthy'}
            </div>
            <div className="mt-1 text-xs text-green-700">
              {locale === 'tr' ? 'Mevcut kilonuzu koruyun' : 'Maintain current weight'}
            </div>
          </div>
        )}
      </div>

      {/* Recommendation */}
      {!isHealthy && (
        <div className="mt-4 rounded-lg bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            {isOverweight ? (
              <>
                {locale === 'tr' ? (
                  <>
                    💡 <strong>Sağlıklı kilo kaybı haftada 0.5-1 kg</strong> olmalıdır. Hedefinize
                    ulaşmak için tahmini{' '}
                    <strong>{Math.ceil(weightToLose / 0.75)} hafta</strong> gerekebilir.
                  </>
                ) : (
                  <>
                    💡 <strong>Healthy weight loss is 0.5-1 kg per week</strong>. It may take
                    approximately <strong>{Math.ceil(weightToLose / 0.75)} weeks</strong> to reach
                    your goal.
                  </>
                )}
              </>
            ) : (
              <>
                {locale === 'tr' ? (
                  <>
                    💡 <strong>Sağlıklı kilo alımı haftada 0.25-0.5 kg</strong> olmalıdır.
                    Hedefinize ulaşmak için tahmini{' '}
                    <strong>{Math.ceil(weightToGain / 0.375)} hafta</strong> gerekebilir.
                  </>
                ) : (
                  <>
                    💡 <strong>Healthy weight gain is 0.25-0.5 kg per week</strong>. It may take
                    approximately <strong>{Math.ceil(weightToGain / 0.375)} weeks</strong> to reach
                    your goal.
                  </>
                )}
              </>
            )}
          </p>
        </div>
      )}
    </Card>
  );
};

export default HealthyWeightRange;
