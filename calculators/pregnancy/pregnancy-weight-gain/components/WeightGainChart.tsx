'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { TrendingUp } from 'lucide-react';
import { WeeklyTarget } from '../pregnancyWeightGainTypes';

interface WeightGainChartProps {
  weeklyTargets: WeeklyTarget[];
  currentWeek: number;
  currentWeight: number;
  unit: 'metric' | 'imperial';
  locale: 'en' | 'tr';
}

const WeightGainChart: React.FC<WeightGainChartProps> = ({
  weeklyTargets,
  currentWeek,
  currentWeight,
  unit,
  locale,
}) => {
  const unitLabel = unit === 'metric' ? 'kg' : 'lbs';

  // Get data points at key weeks for the visual chart
  const keyWeeks = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
  const chartData = keyWeeks.map((week) => {
    const target = weeklyTargets.find((t) => t.week === week);
    return target || weeklyTargets[weeklyTargets.length - 1];
  });

  // Calculate chart dimensions
  const allMin = Math.min(...chartData.map((d) => d.minWeight));
  const allMax = Math.max(...chartData.map((d) => d.maxWeight));
  const range = allMax - allMin || 1;
  const padding = range * 0.1;
  const chartMin = allMin - padding;
  const chartMax = allMax + padding;
  const chartRange = chartMax - chartMin;

  const getY = (weight: number) => {
    return 100 - ((weight - chartMin) / chartRange) * 100;
  };

  const getX = (week: number) => {
    return (week / 40) * 100;
  };

  // Generate path for min and max lines
  const minPath = chartData
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(keyWeeks[i])} ${getY(d.minWeight)}`)
    .join(' ');

  const maxPath = chartData
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(keyWeeks[i])} ${getY(d.maxWeight)}`)
    .join(' ');

  // Fill area between min and max
  const fillPath =
    chartData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(keyWeeks[i])} ${getY(d.maxWeight)}`).join(' ') +
    ' ' +
    [...chartData]
      .reverse()
      .map((d, i) => `L ${getX(keyWeeks[chartData.length - 1 - i])} ${getY(d.minWeight)}`)
      .join(' ') +
    ' Z';

  // Current position
  const currentTarget = weeklyTargets[Math.min(currentWeek, 40)];
  const cx = getX(currentWeek);
  const cy = getY(currentWeight);

  // Trimester dividers
  const t1End = getX(13);
  const t2End = getX(27);

  return (
    <Card className="border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-white">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Kilo Alım Grafiği' : 'Weight Gain Chart'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Haftalık hedef kilo aralığınız'
              : 'Your weekly target weight range'}
          </p>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative mb-4 aspect-[2/1] w-full overflow-hidden rounded-xl bg-white p-4">
        <svg viewBox="-5 -5 110 110" className="h-full w-full" preserveAspectRatio="none">
          {/* Trimester backgrounds */}
          <rect x="0" y="0" width={t1End} height="100" fill="#fdf2f8" opacity="0.5" />
          <rect x={t1End} y="0" width={t2End - t1End} height="100" fill="#fce7f3" opacity="0.3" />
          <rect x={t2End} y="0" width={100 - t2End} height="100" fill="#fbcfe8" opacity="0.2" />

          {/* Trimester lines */}
          <line x1={t1End} y1="0" x2={t1End} y2="100" stroke="#f9a8d4" strokeWidth="0.3" strokeDasharray="2,2" />
          <line x1={t2End} y1="0" x2={t2End} y2="100" stroke="#f9a8d4" strokeWidth="0.3" strokeDasharray="2,2" />

          {/* Healthy range fill */}
          <path d={fillPath} fill="#10b981" opacity="0.15" />

          {/* Min line */}
          <path d={minPath} fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2,1" />

          {/* Max line */}
          <path d={maxPath} fill="none" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2,1" />

          {/* Ideal line (midpoint) */}
          <path
            d={chartData
              .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(keyWeeks[i])} ${getY(d.idealWeight)}`)
              .join(' ')}
            fill="none"
            stroke="#10b981"
            strokeWidth="0.8"
          />

          {/* Current position */}
          {currentWeek > 0 && (
            <>
              <line x1={cx} y1="0" x2={cx} y2="100" stroke="#ec4899" strokeWidth="0.3" strokeDasharray="1,1" />
              <circle cx={cx} cy={cy} r="2" fill="#ec4899" stroke="white" strokeWidth="0.5" />
            </>
          )}
        </svg>

        {/* Trimester labels */}
        <div className="absolute bottom-1 left-0 right-0 flex justify-around px-4 text-[10px] font-medium text-pink-400">
          <span>{locale === 'tr' ? '1. Trimester' : '1st Trimester'}</span>
          <span>{locale === 'tr' ? '2. Trimester' : '2nd Trimester'}</span>
          <span>{locale === 'tr' ? '3. Trimester' : '3rd Trimester'}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-600">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-4 rounded-full bg-emerald-500"></div>
          <span>{locale === 'tr' ? 'Hedef aralık' : 'Target range'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-pink-500"></div>
          <span>{locale === 'tr' ? 'Mevcut kilo' : 'Current weight'}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-0.5 w-4 bg-emerald-500"></div>
          <span>{locale === 'tr' ? 'İdeal çizgi' : 'Ideal line'}</span>
        </div>
      </div>

      {/* Key milestones table */}
      <div className="mt-4 overflow-hidden rounded-lg border border-neutral-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50">
              <th className="px-3 py-2 text-left font-medium text-neutral-600">
                {locale === 'tr' ? 'Hafta' : 'Week'}
              </th>
              <th className="px-3 py-2 text-center font-medium text-neutral-600">
                {locale === 'tr' ? 'Min' : 'Min'} ({unitLabel})
              </th>
              <th className="px-3 py-2 text-center font-medium text-neutral-600">
                {locale === 'tr' ? 'İdeal' : 'Ideal'} ({unitLabel})
              </th>
              <th className="px-3 py-2 text-center font-medium text-neutral-600">
                {locale === 'tr' ? 'Maks' : 'Max'} ({unitLabel})
              </th>
            </tr>
          </thead>
          <tbody>
            {[12, 20, 28, 36, 40].map((week) => {
              const target = weeklyTargets[week];
              const isCurrent = Math.abs(week - currentWeek) <= 2;
              return (
                <tr
                  key={week}
                  className={isCurrent ? 'bg-pink-50 font-medium' : 'border-t border-neutral-100'}
                >
                  <td className="px-3 py-2 text-neutral-900">
                    {locale === 'tr' ? `${week}. hafta` : `Week ${week}`}
                    {isCurrent && (
                      <span className="ml-1 text-xs text-pink-500">
                        {locale === 'tr' ? '(yakın)' : '(near)'}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center text-neutral-700">{target.minWeight}</td>
                  <td className="px-3 py-2 text-center font-semibold text-emerald-700">
                    {target.idealWeight}
                  </td>
                  <td className="px-3 py-2 text-center text-neutral-700">{target.maxWeight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default WeightGainChart;
