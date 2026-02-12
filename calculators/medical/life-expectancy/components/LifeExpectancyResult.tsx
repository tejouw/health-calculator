'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Cake, TrendingUp, TrendingDown } from 'lucide-react';
import { lifeExpectancyCategories } from '../lifeExpectancyLogic';
import type { LifeExpectancyResult } from '../lifeExpectancyTypes';

interface LifeExpectancyResultProps {
  result: LifeExpectancyResult;
  locale: 'en' | 'tr';
}

const LifeExpectancyResultCard: React.FC<LifeExpectancyResultProps> = ({ result, locale }) => {
  const categoryData = lifeExpectancyCategories[result.category];
  const isDifferentFromAverage = Math.abs(result.comparisonToAverage) >= 0.5;

  return (
    <Card className="relative overflow-hidden">
      {/* Background gradient based on category */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(135deg, ${categoryData.color} 0%, transparent 100%)`,
        }}
      />

      <div className="relative">
        {/* Icon and Title */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${categoryData.color}dd, ${categoryData.color}99)`,
            }}
          >
            <Cake className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yaşam Beklentiniz' : 'Your Life Expectancy'}
            </h3>
            <p
              className="text-sm font-semibold"
              style={{ color: categoryData.color }}
            >
              {categoryData.label}
            </p>
          </div>
        </div>

        {/* Main Result */}
        <div className="mb-6 text-center">
          <div
            className="mb-2 text-7xl font-black tracking-tight"
            style={{ color: categoryData.color }}
          >
            {Math.round(result.lifeExpectancy)}
          </div>
          <p className="text-xl font-medium text-neutral-600">
            {locale === 'tr' ? 'yaşına kadar yaşayacaksınız' : 'years old'}
          </p>
        </div>

        {/* Comparison to Average */}
        {isDifferentFromAverage && (
          <div className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-neutral-100 p-4">
            {result.comparisonToAverage > 0 ? (
              <TrendingUp className="h-5 w-5 text-green-600" />
            ) : (
              <TrendingDown className="h-5 w-5 text-orange-600" />
            )}
            <span className="text-sm font-semibold text-neutral-700">
              {result.comparisonToAverage > 0
                ? `${Math.abs(result.comparisonToAverage).toFixed(1)} ${
                    locale === 'tr' ? 'yıl ortalamadan FAZLA' : 'years ABOVE average'
                  }`
                : `${Math.abs(result.comparisonToAverage).toFixed(1)} ${
                    locale === 'tr' ? 'yıl ortalamadan AZ' : 'years BELOW average'
                  }`}
            </span>
          </div>
        )}

        {/* Category Description */}
        <p className="text-center text-sm leading-relaxed text-neutral-600">
          {categoryData.description}
        </p>

        {/* Potential Gain Callout */}
        {result.potentialGain > 2 && (
          <div className="mt-6 rounded-xl border-2 border-blue-200 bg-blue-50 p-4">
            <p className="text-center text-sm font-semibold text-blue-900">
              {locale === 'tr' ? '💡 Potansiyel Kazanç: ' : '💡 Potential Gain: '}
              <span className="text-lg text-blue-700">
                +{result.potentialGain.toFixed(1)}{' '}
                {locale === 'tr' ? 'yıl' : 'years'}
              </span>
            </p>
            <p className="mt-2 text-center text-xs text-blue-800">
              {locale === 'tr'
                ? 'Olumsuz risk faktörlerini ortadan kaldırarak bu kadar yıl kazanabilirsiniz'
                : 'You could gain this many years by eliminating negative risk factors'}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LifeExpectancyResultCard;
