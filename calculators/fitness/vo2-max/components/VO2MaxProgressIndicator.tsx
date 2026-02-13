'use client';

import React from 'react';
import { VO2MaxCategory } from '../vo2MaxTypes';
import { TrendingUp, Target, Award } from 'lucide-react';

interface VO2MaxProgressIndicatorProps {
  vo2Max: number;
  category: VO2MaxCategory;
  locale: 'en' | 'tr';
}

const VO2MaxProgressIndicator: React.FC<VO2MaxProgressIndicatorProps> = ({
  vo2Max,
  category,
  locale,
}) => {
  const categories = [
    { id: 'very_poor', color: '#EF4444', min: 0, max: 28 },
    { id: 'poor', color: '#F97316', min: 28, max: 33 },
    { id: 'fair', color: '#F59E0B', min: 33, max: 40 },
    { id: 'good', color: '#84CC16', min: 40, max: 45 },
    { id: 'excellent', color: '#22C55E', min: 45, max: 52 },
    { id: 'superior', color: '#10B981', min: 52, max: 80 },
  ];

  // Calculate position percentage (0-100)
  const calculatePosition = () => {
    const totalRange = 80; // 0 to 80 ml/kg/min
    return Math.min(100, Math.max(0, (vo2Max / totalRange) * 100));
  };

  const position = calculatePosition();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-600">
          {locale === 'tr' ? 'Çok Zayıf' : 'Very Poor'}
        </span>
        <span className="text-neutral-600">
          {locale === 'tr' ? 'Üstün' : 'Superior'}
        </span>
      </div>

      {/* Visual Progress Bar */}
      <div className="relative h-12 rounded-full bg-neutral-200 overflow-hidden shadow-inner">
        {/* Background gradient zones */}
        {categories.map((cat, index) => {
          const width = ((cat.max - cat.min) / 80) * 100;
          const left = (cat.min / 80) * 100;
          return (
            <div
              key={cat.id}
              className="absolute top-0 h-full opacity-40"
              style={{
                left: `${left}%`,
                width: `${width}%`,
                backgroundColor: cat.color,
              }}
            />
          );
        })}

        {/* User position indicator */}
        <div
          className="absolute top-0 h-full w-1 bg-neutral-900 shadow-lg transition-all duration-500 ease-out"
          style={{ left: `${position}%` }}
        >
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="rounded-full bg-neutral-900 p-1.5 shadow-lg">
              <Target className="h-4 w-4 text-white" />
            </div>
            <div className="mt-1 rounded bg-neutral-900 px-2 py-0.5 text-xs font-bold text-white shadow-lg whitespace-nowrap">
              {vo2Max}
            </div>
          </div>
        </div>
      </div>

      {/* Category Labels */}
      <div className="grid grid-cols-6 gap-1 text-xs">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className={`text-center p-1 rounded ${
              cat.id === category ? 'bg-neutral-900 text-white font-bold' : 'text-neutral-600'
            }`}
          >
            {cat.min}-{cat.max}
          </div>
        ))}
      </div>

      {/* Performance Indicators */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <div>
            <p className="text-xs text-blue-600 font-medium">
              {locale === 'tr' ? 'Potansiyel' : 'Potential'}
            </p>
            <p className="text-sm font-bold text-blue-900">
              {locale === 'tr' ? 'Yüksek' : 'High'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3">
          <Award className="h-5 w-5 text-green-600" />
          <div>
            <p className="text-xs text-green-600 font-medium">
              {locale === 'tr' ? 'Seviye' : 'Level'}
            </p>
            <p className="text-sm font-bold text-green-900 capitalize">
              {category.replace('_', ' ')}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3">
          <Target className="h-5 w-5 text-purple-600" />
          <div>
            <p className="text-xs text-purple-600 font-medium">
              {locale === 'tr' ? 'Hedef' : 'Goal'}
            </p>
            <p className="text-sm font-bold text-purple-900">
              {vo2Max < 45 ? (vo2Max + 5).toFixed(1) : '55+'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VO2MaxProgressIndicator;
