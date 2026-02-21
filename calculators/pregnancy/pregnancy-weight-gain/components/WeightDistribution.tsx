'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { PieChart } from 'lucide-react';

interface WeightDistributionProps {
  currentWeek: number;
  locale: 'en' | 'tr';
}

const WeightDistribution: React.FC<WeightDistributionProps> = ({ currentWeek, locale }) => {
  // Approximate weight distribution at full term (40 weeks)
  // Values in kg - scale proportionally for current week
  const fullTermDistribution = [
    {
      label: { en: 'Baby', tr: 'Bebek' },
      weight: 3.4,
      color: 'bg-pink-500',
      barColor: 'from-pink-400 to-pink-600',
    },
    {
      label: { en: 'Placenta', tr: 'Plasenta' },
      weight: 0.7,
      color: 'bg-purple-500',
      barColor: 'from-purple-400 to-purple-600',
    },
    {
      label: { en: 'Amniotic Fluid', tr: 'Amniyon Sıvısı' },
      weight: 0.8,
      color: 'bg-blue-500',
      barColor: 'from-blue-400 to-blue-600',
    },
    {
      label: { en: 'Uterus Growth', tr: 'Rahim Büyümesi' },
      weight: 0.9,
      color: 'bg-indigo-500',
      barColor: 'from-indigo-400 to-indigo-600',
    },
    {
      label: { en: 'Breast Tissue', tr: 'Meme Dokusu' },
      weight: 0.9,
      color: 'bg-rose-500',
      barColor: 'from-rose-400 to-rose-600',
    },
    {
      label: { en: 'Blood Volume', tr: 'Kan Hacmi' },
      weight: 1.8,
      color: 'bg-red-500',
      barColor: 'from-red-400 to-red-600',
    },
    {
      label: { en: 'Maternal Fat', tr: 'Anne Yağ Deposu' },
      weight: 2.7,
      color: 'bg-amber-500',
      barColor: 'from-amber-400 to-amber-600',
    },
    {
      label: { en: 'Fluid Retention', tr: 'Sıvı Tutulması' },
      weight: 1.8,
      color: 'bg-cyan-500',
      barColor: 'from-cyan-400 to-cyan-600',
    },
  ];

  // Scale based on current week progress
  const weekFraction = Math.min(currentWeek / 40, 1);
  const totalFullTerm = fullTermDistribution.reduce((sum, d) => sum + d.weight, 0);

  const distribution = fullTermDistribution.map((d) => ({
    ...d,
    currentWeight: Math.round(d.weight * weekFraction * 10) / 10,
    percentage: Math.round((d.weight / totalFullTerm) * 100),
  }));

  const currentTotal = Math.round(distribution.reduce((sum, d) => sum + d.currentWeight, 0) * 10) / 10;

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
          <PieChart className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Kilo Dağılımı' : 'Weight Distribution'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? `Hamilelik kilosunun nereden geldiği (Hafta ${currentWeek})`
              : `Where pregnancy weight comes from (Week ${currentWeek})`}
          </p>
        </div>
      </div>

      {/* Info box */}
      <div className="mb-4 rounded-lg bg-indigo-50 p-3">
        <p className="text-sm text-indigo-800">
          {locale === 'tr'
            ? `Tahmini toplam: ~${currentTotal} kg | 40. haftada tam terim: ~${totalFullTerm} kg`
            : `Estimated total: ~${currentTotal} kg | Full term at 40 weeks: ~${totalFullTerm} kg`}
        </p>
      </div>

      {/* Distribution bars */}
      <div className="space-y-3">
        {distribution.map((item, index) => (
          <div key={index}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${item.color}`} />
                <span className="font-medium text-neutral-800">{item.label[locale]}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <span className="font-semibold">{item.currentWeight} kg</span>
                <span className="text-xs text-neutral-400">({item.percentage}%)</span>
              </div>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.barColor} transition-all duration-500`}
                style={{ width: `${item.percentage * weekFraction}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="mt-4 rounded-lg bg-purple-50 p-3">
        <p className="text-sm text-purple-800">
          {locale === 'tr'
            ? 'Hamilelikte alınan kilonun büyük bölümü bebek, plasenta, amniyon sıvısı, artan kan hacmi ve vücut sıvılarından oluşur. Sadece küçük bir kısmı yağ deposudur.'
            : 'Most of the weight gained during pregnancy consists of the baby, placenta, amniotic fluid, increased blood volume, and body fluids. Only a small portion is fat stores.'}
        </p>
      </div>
    </Card>
  );
};

export default WeightDistribution;
