'use client';

import React from 'react';
import { EyeColorProbability } from '../eyeColorTypes';

interface EyeColorProbabilityChartProps {
  probabilities: EyeColorProbability[];
  locale: 'en' | 'tr';
}

const EyeColorProbabilityChart: React.FC<EyeColorProbabilityChartProps> = ({
  probabilities,
  locale,
}) => {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-neutral-900">
        {locale === 'tr' ? 'Göz Rengi Olasılıkları' : 'Eye Color Probabilities'}
      </h4>

      {/* Bar chart */}
      <div className="space-y-3">
        {probabilities.map((prob) => (
          <div key={prob.color} className="group">
            <div className="mb-1 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-4 w-4 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: prob.hex }}
                />
                <span className="text-sm font-medium text-neutral-800">
                  {prob.label[locale]}
                </span>
              </div>
              <span className="text-sm font-bold text-neutral-900">
                %{prob.percentage}
              </span>
            </div>
            <div className="h-6 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className="flex h-full items-center justify-end rounded-full pr-2 transition-all duration-700 ease-out"
                style={{
                  width: `${Math.max(prob.percentage, 2)}%`,
                  backgroundColor: prob.hex,
                  opacity: 0.85,
                }}
              >
                {prob.percentage >= 15 && (
                  <span className="text-xs font-semibold text-white drop-shadow-sm">
                    %{prob.percentage}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Eye color circles visual */}
      <div className="mt-6 flex items-center justify-center gap-3">
        {probabilities
          .filter((p) => p.percentage > 0)
          .map((prob) => {
            const size = Math.max(32, Math.min(80, prob.percentage * 0.9));
            return (
              <div
                key={prob.color}
                className="flex flex-col items-center gap-1"
                title={`${prob.label[locale]}: %${prob.percentage}`}
              >
                <div
                  className="rounded-full border-2 border-white shadow-lg transition-transform duration-300 hover:scale-110"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    background: `radial-gradient(circle at 35% 35%, ${prob.hex}dd, ${prob.hex}99, ${prob.hex})`,
                  }}
                >
                  {/* Iris pattern */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, #1a1a1a ${size * 0.15}px, transparent ${size * 0.15}px)`,
                    }}
                  />
                </div>
                <span className="text-[10px] font-medium text-neutral-600">
                  {prob.label[locale]}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EyeColorProbabilityChart;
