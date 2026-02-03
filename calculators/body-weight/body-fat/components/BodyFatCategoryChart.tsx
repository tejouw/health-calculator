'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Activity, Target, Trophy, Flame } from 'lucide-react';

interface BodyFatCategoryChartProps {
  currentBodyFat: number;
  gender: 'male' | 'female';
  locale: 'en' | 'tr';
}

const BodyFatCategoryChart: React.FC<BodyFatCategoryChartProps> = ({
  currentBodyFat,
  gender,
  locale,
}) => {
  const maleCategories = [
    { name: { en: 'Essential Fat', tr: 'Temel Yağ' }, range: '2-5%', color: 'from-red-500 to-orange-500', icon: Flame },
    { name: { en: 'Athletes', tr: 'Sporcular' }, range: '6-13%', color: 'from-blue-500 to-cyan-500', icon: Trophy },
    { name: { en: 'Fitness', tr: 'Fitness' }, range: '14-17%', color: 'from-green-500 to-emerald-500', icon: Target },
    { name: { en: 'Average', tr: 'Ortalama' }, range: '18-24%', color: 'from-yellow-500 to-amber-500', icon: Activity },
    { name: { en: 'Obese', tr: 'Obez' }, range: '25%+', color: 'from-red-600 to-rose-600', icon: Flame },
  ];

  const femaleCategories = [
    { name: { en: 'Essential Fat', tr: 'Temel Yağ' }, range: '10-13%', color: 'from-red-500 to-orange-500', icon: Flame },
    { name: { en: 'Athletes', tr: 'Sporcular' }, range: '14-20%', color: 'from-blue-500 to-cyan-500', icon: Trophy },
    { name: { en: 'Fitness', tr: 'Fitness' }, range: '21-24%', color: 'from-green-500 to-emerald-500', icon: Target },
    { name: { en: 'Average', tr: 'Ortalama' }, range: '25-31%', color: 'from-yellow-500 to-amber-500', icon: Activity },
    { name: { en: 'Obese', tr: 'Obez' }, range: '32%+', color: 'from-red-600 to-rose-600', icon: Flame },
  ];

  const categories = gender === 'male' ? maleCategories : femaleCategories;

  return (
    <Card>
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Vücut Yağ Kategorileri' : 'Body Fat Categories'}
      </h3>
      <div className="space-y-3">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          const [min, max] = cat.range.replace('%', '').replace('+', '-100').split('-').map(Number);
          const isInCategory = currentBodyFat >= min && (max ? currentBodyFat <= max : true);

          return (
            <div
              key={index}
              className={`rounded-lg border-2 p-4 transition-all ${
                isInCategory
                  ? 'border-primary-500 bg-primary-50 shadow-md'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cat.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">{cat.name[locale]}</div>
                    <div className="text-sm text-neutral-600">{cat.range}</div>
                  </div>
                </div>
                {isInCategory && (
                  <div className="rounded-full bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                    {locale === 'tr' ? 'Mevcut' : 'Current'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default BodyFatCategoryChart;
