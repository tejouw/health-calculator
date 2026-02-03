'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Flame, Dumbbell, Apple, Clock, Brain, Activity } from 'lucide-react';

interface MetabolismTipsProps {
  bmr: number;
  locale: 'en' | 'tr';
}

const MetabolismTips: React.FC<MetabolismTipsProps> = ({ bmr, locale }) => {
  const factors = [
    {
      icon: Dumbbell,
      title: { en: 'Muscle Mass', tr: 'Kas Kütlesi' },
      description: {
        en: 'Muscle burns 10-15x more calories at rest than fat. Adding 1 kg of muscle increases your BMR by approximately 13-22 calories per day.',
        tr: 'Kas, yağdan 10-15x daha fazla kalori yakar. 1 kg kas ekleme, BMR\'ınızı yaklaşık 13-22 kalori/gün artırır.',
      },
      impact: { en: 'High Impact', tr: 'Yüksek Etki' },
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Flame,
      title: { en: 'Thermogenesis', tr: 'Termojenez' },
      description: {
        en: 'Certain foods like green tea, capsaicin (chili peppers), and caffeine can temporarily boost your metabolic rate by 3-8%.',
        tr: 'Yeşil çay, kapsaicin (biber) ve kafein gibi gıdalar, metabolik hızınızı geçici olarak %3-8 artırabilir.',
      },
      impact: { en: 'Moderate Impact', tr: 'Orta Etki' },
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Apple,
      title: { en: 'Protein Intake', tr: 'Protein Alımı' },
      description: {
        en: 'Protein has the highest thermic effect of all macronutrients (20-30%). Your body uses 20-30% of protein calories just to digest it.',
        tr: 'Protein, tüm makrobesinlerin en yüksek termal etkisine sahiptir (%20-30). Vücudunuz, proteini sindirmek için protein kalorilerinin %20-30\'unu kullanır.',
      },
      impact: { en: 'High Impact', tr: 'Yüksek Etki' },
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Clock,
      title: { en: 'Meal Timing', tr: 'Öğün Zamanlaması' },
      description: {
        en: 'Eating regularly (every 3-4 hours) keeps your metabolism active. Skipping meals can decrease metabolic rate by 10-15% over time.',
        tr: 'Düzenli yemek yemek (3-4 saat arayla) metabolizmanızı aktif tutar. Öğün atlamak, zamanla metabolik hızı %10-15 düşürebilir.',
      },
      impact: { en: 'Moderate Impact', tr: 'Orta Etki' },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Activity,
      title: { en: 'EPOC (Afterburn Effect)', tr: 'EPOC (Sonrası Etki)' },
      description: {
        en: 'After intense exercise, your body continues to burn calories at a higher rate for 24-72 hours. HIIT and heavy lifting maximize this effect.',
        tr: 'Yoğun egzersiz sonrasında, vücudunuz 24-72 saat boyunca daha yüksek oranda kalori yakmaya devam eder. HIIT ve ağır kaldırma bunu maksimize eder.',
      },
      impact: { en: 'High Impact', tr: 'Yüksek Etki' },
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: { en: 'Sleep & Stress', tr: 'Uyku ve Stres' },
      description: {
        en: 'Chronic sleep deprivation can reduce metabolic efficiency by up to 15%. High cortisol from stress promotes fat storage and reduces BMR.',
        tr: 'Kronik uyku yoksunluğu, metabolik etkinliği %15\'e kadar düşürür. Stresden kaynaklanan yüksek kortisol, yağ depolamasını teşvik eder.',
      },
      impact: { en: 'High Impact', tr: 'Yüksek Etki' },
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Metabolizmanızı Artırın' : 'Boost Your Metabolism'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'BMR\'ınız artırılabilir' : 'Your BMR can be increased'}
            </p>
          </div>
        </div>

        {/* Current BMR Context */}
        <div className="rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-700">
              {locale === 'tr' ? 'Mevcut BMR' : 'Current BMR'}
            </span>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">{bmr} kcal</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-neutral-600">
            {locale === 'tr'
              ? 'Tüm faktörler uygulanırsa %15-25 artış mümkündür'
              : 'With all factors applied, a 15-25% increase is possible'}
          </p>
        </div>
      </div>

      {/* Factor Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {factors.map((factor, index) => {
          const Icon = factor.icon;
          const isHighImpact = factor.impact.en === 'High Impact';
          return (
            <div
              key={index}
              className={`rounded-lg border p-4 ${
                isHighImpact ? 'border-primary-200 bg-primary-50' : 'border-neutral-200 bg-white'
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${factor.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-900">{factor.title[locale]}</h4>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    isHighImpact
                      ? 'bg-primary-100 text-primary-800'
                      : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {factor.impact[locale]}
                </span>
              </div>
              <p className="text-sm text-neutral-600">{factor.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* BMR by Age */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <h4 className="mb-2 font-semibold text-blue-900">
          {locale === 'tr' ? '📊 Yaşa Bağlı BMR Değişim' : '📊 Age-Related BMR Changes'}
        </h4>
        <p className="mb-3 text-sm text-blue-800">
          {locale === 'tr'
            ? 'BMR her on yılda yaklaşık %2-3 düşer. Bu düşüşün önüne geçmek için:'
            : 'BMR decreases approximately 2-3% each decade. To prevent this:'}
        </p>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>• {locale === 'tr' ? 'Düzenli kuvvet antrenmanı yapın' : 'Do regular strength training'}</li>
          <li>• {locale === 'tr' ? 'Protein alımını sabit tutun' : 'Keep protein intake consistent'}</li>
          <li>• {locale === 'tr' ? 'Aktif yaşam tarzı sürdürün' : 'Maintain an active lifestyle'}</li>
          <li>• {locale === 'tr' ? 'Kalorik kısıtlama yapın' : 'Avoid severe calorie restriction'}</li>
        </ul>
      </div>
    </Card>
  );
};

export default MetabolismTips;
