'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { KetosisPhase } from '../ketoTypes';

interface KetosisTimelineProps {
  phases: KetosisPhase[];
  locale: 'en' | 'tr';
}

const KetosisTimeline: React.FC<KetosisTimelineProps> = ({ phases, locale }) => {
  return (
    <Card>
      <h3 className="mb-2 text-xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Ketoza Geçiş Süreci' : 'Ketosis Timeline'}
      </h3>
      <p className="mb-6 text-sm text-neutral-600">
        {locale === 'tr'
          ? 'Keto diyetine başladığınızda vücudunuzun geçeceği aşamalar'
          : 'The phases your body goes through when starting keto'}
      </p>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-orange-300 via-yellow-300 to-green-400" />

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative flex gap-4">
              {/* Timeline Dot */}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-md ring-2 ring-orange-200">
                {phase.icon}
              </div>

              {/* Content */}
              <div className="flex-1 rounded-lg bg-gradient-to-r from-neutral-50 to-white p-4">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h4 className="font-semibold text-neutral-900">
                    {locale === 'tr'
                      ? getPhaseNameTr(phase.phase)
                      : getPhaseNameEn(phase.phase)}
                  </h4>
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                    {phase.duration}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">
                  {phase.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Electrolyte Reminder */}
      <div className="mt-6 rounded-lg border-2 border-blue-100 bg-blue-50 p-4">
        <h4 className="mb-2 font-semibold text-blue-900">
          {locale === 'tr' ? '🧂 Elektrolit Rehberi' : '🧂 Electrolyte Guide'}
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-3">
            <div className="text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Sodyum' : 'Sodium'}
            </div>
            <div className="text-lg font-bold text-blue-600">3,000-5,000mg</div>
            <div className="text-xs text-neutral-500">
              {locale === 'tr' ? 'Tuz, et suyu, turşu' : 'Salt, broth, pickles'}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3">
            <div className="text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Potasyum' : 'Potassium'}
            </div>
            <div className="text-lg font-bold text-blue-600">3,500-4,700mg</div>
            <div className="text-xs text-neutral-500">
              {locale === 'tr' ? 'Avokado, ıspanak, somon' : 'Avocado, spinach, salmon'}
            </div>
          </div>
          <div className="rounded-lg bg-white p-3">
            <div className="text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Magnezyum' : 'Magnesium'}
            </div>
            <div className="text-lg font-bold text-blue-600">300-500mg</div>
            <div className="text-xs text-neutral-500">
              {locale === 'tr' ? 'Fındık, bitter çikolata' : 'Nuts, dark chocolate'}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

function getPhaseNameEn(phase: string): string {
  const names: Record<string, string> = {
    glycogen_depletion: 'Glycogen Depletion',
    keto_flu: 'Keto Flu Phase',
    early_ketosis: 'Early Ketosis',
    fat_adapted: 'Fat Adaptation',
    optimized: 'Fully Optimized',
  };
  return names[phase] || phase;
}

function getPhaseNameTr(phase: string): string {
  const names: Record<string, string> = {
    glycogen_depletion: 'Glikojen Tükenmesi',
    keto_flu: 'Keto Gribi Aşaması',
    early_ketosis: 'Erken Ketoz',
    fat_adapted: 'Yağ Adaptasyonu',
    optimized: 'Tam Optimizasyon',
  };
  return names[phase] || phase;
}

export default KetosisTimeline;
