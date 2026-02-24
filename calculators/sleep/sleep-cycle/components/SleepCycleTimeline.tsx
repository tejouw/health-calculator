'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';

interface SleepCycleTimelineProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

function addMinutesToTime(h: number, m: number, add: number): string {
  const total = h * 60 + m + add;
  const hours = ((Math.floor(total / 60) % 24) + 24) % 24;
  const minutes = ((total % 60) + 60) % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayH = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  return `${displayH}:${String(minutes).padStart(2, '0')} ${period}`;
}

const STAGE_COLORS = {
  light: { bg: 'bg-blue-300', label: 'Light Sleep', labelTr: 'Hafif Uyku' },
  deep: { bg: 'bg-blue-800', label: 'Deep Sleep', labelTr: 'Derin Uyku' },
  rem: { bg: 'bg-purple-600', label: 'REM Sleep', labelTr: 'REM Uyku' },
};

const SleepCycleTimeline: React.FC<SleepCycleTimelineProps> = ({ result, locale }) => {
  const { cycles, fallAsleepTime } = result;

  return (
    <Card className="animate-slide-up">
      <h3 className="mb-2 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Uyku Döngüsü Zaman Çizelgesi' : 'Sleep Cycle Timeline'}
      </h3>
      <p className="mb-4 text-sm text-neutral-600">
        {locale === 'tr'
          ? 'Gece boyunca uyku döngülerinizin görsel dağılımıdır'
          : 'Visual breakdown of your sleep cycles throughout the night'}
      </p>

      {/* Timeline */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[500px]">
          {/* Time markers */}
          <div className="mb-1 flex">
            {cycles.map((cycle, i) => (
              <div
                key={`time-${i}`}
                className="text-center text-[10px] font-medium text-neutral-500"
                style={{ flex: cycle.duration }}
              >
                {addMinutesToTime(fallAsleepTime.hours, fallAsleepTime.minutes, cycle.startMinutes)}
              </div>
            ))}
            {cycles.length > 0 && (
              <div className="text-[10px] font-medium text-neutral-500" style={{ flex: 0, whiteSpace: 'nowrap', marginLeft: '-20px' }}>
                {result.wakeup.formatted}
              </div>
            )}
          </div>

          {/* Cycle bars */}
          <div className="flex gap-0.5">
            {cycles.map((cycle, i) => {
              const total = cycle.stages.light + cycle.stages.deep + cycle.stages.rem;
              const lightFlex = cycle.stages.light / total;
              const deepFlex = cycle.stages.deep / total;
              const remFlex = cycle.stages.rem / total;

              return (
                <div
                  key={`cycle-${i}`}
                  className={`flex overflow-hidden rounded-md ${!cycle.isComplete ? 'opacity-50' : ''}`}
                  style={{ flex: cycle.duration }}
                  title={`${locale === 'tr' ? 'Döngü' : 'Cycle'} ${cycle.cycleNumber}${!cycle.isComplete ? ` (${locale === 'tr' ? 'eksik' : 'incomplete'})` : ''}`}
                >
                  <div className={`${STAGE_COLORS.light.bg} h-8`} style={{ flex: lightFlex }} />
                  <div className={`${STAGE_COLORS.deep.bg} h-8`} style={{ flex: deepFlex }} />
                  <div className={`${STAGE_COLORS.rem.bg} h-8`} style={{ flex: remFlex }} />
                </div>
              );
            })}
          </div>

          {/* Cycle number labels */}
          <div className="mt-1 flex gap-0.5">
            {cycles.map((cycle, i) => (
              <div
                key={`label-${i}`}
                className={`text-center text-[10px] font-medium ${cycle.isComplete ? 'text-neutral-600' : 'text-neutral-400'}`}
                style={{ flex: cycle.duration }}
              >
                {locale === 'tr' ? `D${cycle.cycleNumber}` : `C${cycle.cycleNumber}`}
                {!cycle.isComplete && ` (${cycle.duration}m)`}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4">
        {Object.entries(STAGE_COLORS).map(([key, val]) => (
          <div key={key} className="flex items-center gap-2">
            <div className={`h-3 w-6 rounded ${val.bg}`} />
            <span className="text-xs text-neutral-600">{locale === 'tr' ? val.labelTr : val.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div className="h-3 w-6 rounded bg-neutral-300 opacity-50" />
          <span className="text-xs text-neutral-600">
            {locale === 'tr' ? 'Eksik Döngü' : 'Incomplete Cycle'}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 rounded-lg bg-blue-50 p-3">
        <p className="text-xs text-blue-800">
          {locale === 'tr'
            ? 'Derin uyku erken döngülerde daha ağırlıklıdır, REM uyku ise sabaha doğru artar. Bu, optimum uyku kalitesi için doğal bir desendir.'
            : 'Deep sleep is heavier in early cycles, while REM sleep increases toward morning. This is a natural pattern for optimal sleep quality.'}
        </p>
      </div>
    </Card>
  );
};

export default SleepCycleTimeline;
