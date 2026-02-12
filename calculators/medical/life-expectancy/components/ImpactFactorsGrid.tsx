'use client';

import React from 'react';
import { Card } from '@/components/ui';
import {
  TrendingUp,
  TrendingDown,
  Cigarette,
  Activity,
  Heart,
  Moon,
  Users,
  Apple,
  AlertCircle,
} from 'lucide-react';
import type { ImpactFactor } from '../lifeExpectancyTypes';

interface ImpactFactorsGridProps {
  impactFactors: ImpactFactor[];
  locale: 'en' | 'tr';
}

const getIconForFactor = (factorName: string) => {
  const name = factorName.toLowerCase();
  if (name.includes('smok') || name.includes('sigara')) return Cigarette;
  if (name.includes('exercise') || name.includes('activity') || name.includes('fizik'))
    return Activity;
  if (name.includes('weight') || name.includes('kilo') || name.includes('body')) return Heart;
  if (name.includes('sleep') || name.includes('uyku')) return Moon;
  if (name.includes('social') || name.includes('sosyal')) return Users;
  if (name.includes('diet') || name.includes('diyet')) return Apple;
  return AlertCircle;
};

const ImpactFactorsGrid: React.FC<ImpactFactorsGridProps> = ({ impactFactors, locale }) => {
  // Show top 6 most impactful factors
  const topFactors = impactFactors
    .filter((f) => Math.abs(f.impact) >= 1.0) // Only show factors with 1+ year impact
    .slice(0, 6);

  if (topFactors.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Ömrünüzü Etkileyen Faktörler' : 'Factors Affecting Your Longevity'}
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topFactors.map((factor, index) => {
          const Icon = getIconForFactor(factor.factor);
          const isPositive = factor.isPositive;
          const colorClass = isPositive
            ? 'from-green-500 to-emerald-500'
            : 'from-orange-500 to-red-500';
          const bgClass = isPositive ? 'bg-green-50' : 'bg-orange-50';
          const textColor = isPositive ? 'text-green-700' : 'text-orange-700';

          return (
            <Card key={index} className={`${bgClass} border-0`}>
              <div className="mb-3 flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${colorClass}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {isPositive ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-orange-600" />
                  )}
                  <span className={`text-2xl font-black ${textColor}`}>
                    {isPositive ? '+' : ''}
                    {factor.impact.toFixed(1)}
                  </span>
                  <span className="text-xs font-medium text-neutral-600">
                    {locale === 'tr' ? 'yıl' : 'yrs'}
                  </span>
                </div>
              </div>

              <h4 className="mb-2 font-bold text-neutral-900">{factor.factor}</h4>
              <p className="text-xs leading-relaxed text-neutral-600">
                {factor.recommendation}
              </p>

              {factor.priority === 'high' && (
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5">
                  <AlertCircle className="h-3 w-3 text-red-600" />
                  <span className="text-xs font-semibold text-red-700">
                    {locale === 'tr' ? 'Yüksek Öncelik' : 'High Priority'}
                  </span>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <p className="text-center text-sm text-neutral-600">
        {locale === 'tr'
          ? '💡 Bu faktörleri iyileştirerek yaşam beklentinizi önemli ölçüde artırabilirsiniz'
          : '💡 You can significantly increase your life expectancy by improving these factors'}
      </p>
    </div>
  );
};

export default ImpactFactorsGrid;
