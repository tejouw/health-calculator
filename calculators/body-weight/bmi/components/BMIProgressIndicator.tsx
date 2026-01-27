'use client';

import React from 'react';

interface BMIProgressIndicatorProps {
  bmi: number;
  locale: 'en' | 'tr';
}

const BMIProgressIndicator: React.FC<BMIProgressIndicatorProps> = ({ bmi, locale }) => {
  // Calculate position on scale (15 to 40 BMI range)
  const minBMI = 15;
  const maxBMI = 40;
  const clampedBMI = Math.min(Math.max(bmi, minBMI), maxBMI);
  const position = ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 100;

  // Define color segments for the gradient bar
  const segments = [
    { start: 0, end: 12, color: '#EF4444', label: locale === 'en' ? 'Underweight' : 'Zayıf' }, // Red
    { start: 12, end: 28, color: '#10B981', label: locale === 'en' ? 'Normal' : 'Normal' }, // Green
    { start: 28, end: 60, color: '#F59E0B', label: locale === 'en' ? 'Overweight' : 'Fazla Kilolu' }, // Orange
    { start: 60, end: 100, color: '#EF4444', label: locale === 'en' ? 'Obese' : 'Obez' }, // Red
  ];

  return (
    <div className="space-y-4">
      <div className="relative">
        {/* Gradient Bar */}
        <div className="relative h-8 w-full overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-green-500 via-yellow-500 to-red-500">
          {/* Indicator */}
          <div
            className="absolute top-0 h-full w-1 bg-neutral-900 transition-all duration-500"
            style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
          >
            {/* Pointer Triangle */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-neutral-900" />
            </div>
            {/* Value Label */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900 px-2 py-1 text-xs font-bold text-white">
              {bmi.toFixed(1)}
            </div>
          </div>
        </div>

        {/* Scale Labels */}
        <div className="mt-10 flex justify-between text-xs text-neutral-600">
          <span>15</span>
          <span className="font-semibold text-green-600">18.5</span>
          <span className="font-semibold text-green-600">24.9</span>
          <span className="font-semibold text-orange-600">30</span>
          <span>40+</span>
        </div>
      </div>

      {/* Category Labels */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: segment.color }} />
            <span className="text-xs text-neutral-700">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMIProgressIndicator;
