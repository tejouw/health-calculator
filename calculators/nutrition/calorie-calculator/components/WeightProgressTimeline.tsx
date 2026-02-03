'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Calendar, TrendingDown, TrendingUp, Target } from 'lucide-react';

interface WeightProgressTimelineProps {
  currentWeight: number;
  goalWeight: number;
  dailyCalories: number;
  maintenanceCalories: number;
  unit: 'metric' | 'imperial';
  locale: 'en' | 'tr';
}

const WeightProgressTimeline: React.FC<WeightProgressTimelineProps> = ({
  currentWeight,
  goalWeight,
  dailyCalories,
  maintenanceCalories,
  unit,
  locale,
}) => {
  const weightDiff = goalWeight - currentWeight;
  const isWeightLoss = weightDiff < 0;
  const dailyDeficit = maintenanceCalories - dailyCalories;

  // Calculate weekly weight change (1 kg = 7700 cal, 1 lb = 3500 cal)
  const caloriesPerUnit = unit === 'metric' ? 7700 : 3500;
  const weeklyWeightChange = (dailyDeficit * 7) / caloriesPerUnit;
  const monthlyWeightChange = weeklyWeightChange * 4.33;

  // Calculate time to goal
  const weeksToGoal = Math.abs(weightDiff / weeklyWeightChange);
  const monthsToGoal = weeksToGoal / 4.33;

  const milestones = [
    {
      weeks: 4,
      weight: currentWeight + weeklyWeightChange * 4,
    },
    {
      weeks: 12,
      weight: currentWeight + weeklyWeightChange * 12,
    },
    {
      weeks: 24,
      weight: currentWeight + weeklyWeightChange * 24,
    },
  ];

  const unitLabel = unit === 'metric' ? 'kg' : 'lbs';

  return (
    <Card>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Kilo İlerleme Takvimi' : 'Weight Progress Timeline'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Hedefinize ulaşma sürenizi görün'
              : 'See your journey to your goal'}
          </p>
        </div>
      </div>

      {/* Weekly and Monthly Progress */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
          <div className="mb-2 flex items-center gap-2">
            {isWeightLoss ? (
              <TrendingDown className="h-5 w-5 text-blue-600" />
            ) : (
              <TrendingUp className="h-5 w-5 text-blue-600" />
            )}
            <span className="text-sm font-medium text-blue-900">
              {locale === 'tr' ? 'Haftalık Değişim' : 'Weekly Change'}
            </span>
          </div>
          <div className="text-3xl font-bold text-blue-900">
            {isWeightLoss ? '' : '+'}
            {Math.abs(weeklyWeightChange).toFixed(2)} {unitLabel}
          </div>
          <p className="mt-1 text-xs text-blue-700">
            {locale === 'tr' ? 'Her hafta' : 'Per week'}
          </p>
        </div>

        <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4">
          <div className="mb-2 flex items-center gap-2">
            {isWeightLoss ? (
              <TrendingDown className="h-5 w-5 text-purple-600" />
            ) : (
              <TrendingUp className="h-5 w-5 text-purple-600" />
            )}
            <span className="text-sm font-medium text-purple-900">
              {locale === 'tr' ? 'Aylık Değişim' : 'Monthly Change'}
            </span>
          </div>
          <div className="text-3xl font-bold text-purple-900">
            {isWeightLoss ? '' : '+'}
            {Math.abs(monthlyWeightChange).toFixed(2)} {unitLabel}
          </div>
          <p className="mt-1 text-xs text-purple-700">
            {locale === 'tr' ? 'Her ay' : 'Per month'}
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
            <Target className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-neutral-700">
              {locale === 'tr' ? 'Mevcut Kilo' : 'Current Weight'}
            </div>
            <div className="text-xl font-bold text-neutral-900">
              {currentWeight.toFixed(1)} {unitLabel}
            </div>
          </div>
        </div>

        <div className="ml-6 border-l-2 border-dashed border-neutral-300 pl-6 space-y-6">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[29px] h-4 w-4 rounded-full border-2 border-neutral-300 bg-white"></div>
              <div className="text-sm font-medium text-neutral-600">
                {locale === 'tr' ? `${milestone.weeks} Hafta Sonra` : `After ${milestone.weeks} Weeks`}
              </div>
              <div className="text-lg font-bold text-neutral-900">
                {milestone.weight.toFixed(1)} {unitLabel}
              </div>
              <div className="text-xs text-neutral-500">
                {isWeightLoss ? '-' : '+'}
                {Math.abs(milestone.weight - currentWeight).toFixed(1)} {unitLabel}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-neutral-700">
              {locale === 'tr' ? 'Hedef Kilo' : 'Goal Weight'}
            </div>
            <div className="text-xl font-bold text-neutral-900">
              {goalWeight.toFixed(1)} {unitLabel}
            </div>
            {isFinite(weeksToGoal) && weeksToGoal > 0 && (
              <div className="text-xs text-neutral-600">
                {locale === 'tr'
                  ? `Tahmini ${Math.ceil(weeksToGoal)} hafta (${Math.ceil(monthsToGoal)} ay)`
                  : `Estimated ${Math.ceil(weeksToGoal)} weeks (${Math.ceil(monthsToGoal)} months)`}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          {locale === 'tr'
            ? '⚠️ Bu tahminler ideal koşullarda hesaplanmıştır. Gerçek ilerleme metabolizma, hormonlar ve yaşam tarzına bağlı olarak değişebilir.'
            : '⚠️ These estimates are calculated under ideal conditions. Actual progress may vary based on metabolism, hormones, and lifestyle.'}
        </p>
      </div>
    </Card>
  );
};

export default WeightProgressTimeline;
