'use client';

import React from 'react';

interface MAPGaugeProps {
  map: number;
  locale: 'en' | 'tr';
}

const MAPGauge: React.FC<MAPGaugeProps> = ({ map, locale }) => {
  const minMAP = 40;
  const maxMAP = 130;
  const clamped = Math.min(Math.max(map, minMAP), maxMAP);
  const position = ((clamped - minMAP) / (maxMAP - minMAP)) * 100;

  const labels = {
    low: locale === 'tr' ? 'Düşük' : 'Low',
    borderline: locale === 'tr' ? 'Sınır' : 'Borderline',
    normal: locale === 'tr' ? 'Normal' : 'Normal',
    elevated: locale === 'tr' ? 'Yüksek' : 'Elevated',
    high: locale === 'tr' ? 'Çok Yüksek' : 'High',
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          className="relative h-8 w-full overflow-hidden rounded-full"
          style={{
            background:
              'linear-gradient(to right, #EF4444 0%, #F59E0B 22%, #10B981 33%, #10B981 67%, #F97316 78%, #DC2626 100%)',
          }}
        >
          <div
            className="absolute top-0 h-full w-1 bg-neutral-900 transition-all duration-500"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-neutral-900" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-xs font-bold text-white">
              {map} mmHg
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between text-xs text-neutral-600">
          <span>40</span>
          <span className="font-semibold text-amber-600">60</span>
          <span className="font-semibold text-green-600">70</span>
          <span className="font-semibold text-green-600">100</span>
          <span className="font-semibold text-red-600">110</span>
          <span>130+</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-xs text-neutral-700">{labels.low}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-amber-500" />
          <span className="text-xs text-neutral-700">{labels.borderline}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-xs text-neutral-700">{labels.normal}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-orange-500" />
          <span className="text-xs text-neutral-700">{labels.elevated}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-600" />
          <span className="text-xs text-neutral-700">{labels.high}</span>
        </div>
      </div>
    </div>
  );
};

export default MAPGauge;
