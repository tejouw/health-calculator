'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { SleepCycleResult } from '../sleepCycleTypes';
import { Clock, ArrowRight } from 'lucide-react';

interface OptimalAdjustmentsProps {
  result: SleepCycleResult;
  locale: 'en' | 'tr';
}

const OptimalAdjustments: React.FC<OptimalAdjustmentsProps> = ({ result, locale }) => {
  const { adjustments, completeCycles, partialCycleMinutes } = result;

  if (adjustments.length === 0 || partialCycleMinutes === 0) {
    return (
      <Card className="animate-slide-up border-2 border-green-100 bg-green-50">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
            <span className="text-lg text-white">&#10003;</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-green-900">
              {locale === 'tr' ? 'Mukemmel Hizalama!' : 'Perfect Alignment!'}
            </h3>
            <p className="text-sm text-green-700">
              {locale === 'tr'
                ? `${completeCycles} tam dongu ile uyaniyorsunuz. Uyku zamanlama onerisi yok.`
                : `You wake up at ${completeCycles} complete cycles. No timing adjustment needed.`}
            </p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="animate-slide-up">
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Optimal Ayarlamalar' : 'Optimal Adjustments'}
        </h3>
      </div>
      <p className="mb-4 text-sm text-neutral-600">
        {locale === 'tr'
          ? `Simdi ${completeCycles} tam dongu + ${partialCycleMinutes} dakika eksik dongunuz var. Iste iyilestirme onerileri:`
          : `You currently have ${completeCycles} complete cycles + ${partialCycleMinutes}min partial cycle. Here are improvement suggestions:`}
      </p>

      <div className="space-y-3">
        {adjustments.map((adj, i) => {
          const absMinutes = Math.abs(adj.minutesDelta);
          const isEarlier = adj.type === 'earlier-bed';
          const durH = Math.floor(adj.resultingDuration / 60);
          const durM = adj.resultingDuration % 60;

          return (
            <div key={i} className="rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500">
                  <ArrowRight className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-indigo-900">
                    {isEarlier
                      ? locale === 'tr'
                        ? `${absMinutes} dakika daha erken yatin`
                        : `Go to bed ${absMinutes} minutes earlier`
                      : adj.minutesDelta > 0
                        ? locale === 'tr'
                          ? `${absMinutes} dakika daha gec kalkin`
                          : `Wake up ${absMinutes} minutes later`
                        : locale === 'tr'
                          ? `${absMinutes} dakika daha erken kalkin`
                          : `Wake up ${absMinutes} minutes earlier`}
                  </p>
                  <p className="text-xs text-indigo-700">
                    {locale === 'tr'
                      ? `${adj.resultingCycles} tam dongu, toplam ${durH}s${durM > 0 ? ` ${durM}d` : ''} uyku`
                      : `${adj.resultingCycles} complete cycles, total ${durH}h${durM > 0 ? ` ${durM}m` : ''} sleep`}
                    {' '}&rarr; <span className="font-semibold">{adj.newTime.formatted}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default OptimalAdjustments;
