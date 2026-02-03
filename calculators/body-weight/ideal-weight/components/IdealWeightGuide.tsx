'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Target, BookOpen, TrendingDown, Activity } from 'lucide-react';

interface IdealWeightGuideProps {
  locale: 'en' | 'tr';
}

const IdealWeightGuide: React.FC<IdealWeightGuideProps> = ({ locale }) => {
  const bodyFrameTypes = [
    {
      name: { en: 'Small Frame (Ectomorph)', tr: 'Küçük Iskelet (Ektomorf)' },
      description: {
        en: 'Narrow shoulders and hips, thin bones. You may find it harder to gain weight but can stay lean naturally.',
        tr: 'Dar omuzlar ve kalça, ince kemikler. Kilo almak zor olabilir ama doğal olarak zayıf kalabilirsiniz.',
      },
      characteristics: {
        en: ['Narrow wrists and ankles', 'Naturally lean build', 'Tends to lose weight easily'],
        tr: ['Dar bilekler ve bilek kemikleri', 'Doğal olarak zayıf yapı', 'Kolay kilo verir'],
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: { en: 'Medium Frame (Mesomorph)', tr: 'Orta Iskelet (Mezomorf)' },
      description: {
        en: 'Average proportions. You can typically maintain a healthy weight with balanced nutrition and regular exercise.',
        tr: 'Ortalama oranlar. Dengeli beslenme ve düzenli egzersizle genellikle sağlıklı kilo koruyabilirsiniz.',
      },
      characteristics: {
        en: ['Average wrist size', 'Moderate muscle build', 'Balanced weight gain/loss'],
        tr: ['Ortalama bilek boyutu', 'Orta düzeyde kas yapısı', 'Dengeli kilo kazanımı'],
      },
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: { en: 'Large Frame (Endomorph)', tr: 'Büyük Iskelet (Endomorf)' },
      description: {
        en: 'Wider bones and broader build. A higher ideal weight is normal. Focus on health markers rather than a number on the scale.',
        tr: 'Geniş kemikler ve geniş yapı. Daha yüksek ideal kilo normaldir. Ölçekteki sayıya değil, sağlık göstergelerine odaklanın.',
      },
      characteristics: {
        en: ['Wide wrists and ankles', 'Naturally broader build', 'Tends to gain weight more easily'],
        tr: ['Geniş bilekler ve bilek kemikleri', 'Doğal olarak geniş yapı', 'Daha kolay kilo alır'],
      },
      color: 'from-purple-500 to-indigo-500',
    },
  ];

  const strategyTips = [
    {
      icon: TrendingDown,
      title: { en: 'Setting Realistic Goals', tr: 'Gerçekçi Hedefler Belirle' },
      description: {
        en: 'Aim to reach 90% of your ideal weight range rather than the exact number. A range is healthier than a single target. Lose 0.5-1 kg per week for sustainable results.',
        tr: 'İdeal kilo aralığının %90\'ına ulaşmayı hedefleyin, tek bir sayıya odaklanmayın. Bir aralık, tek bir hedeften daha sağlıklıdır. Sürdürülebilir sonuçlar için haftada 0.5-1 kg ver.',
      },
    },
    {
      icon: Activity,
      title: { en: 'Focus on Health, Not the Scale', tr: 'Terazi Değil, Sağlığa Odaklan' },
      description: {
        en: 'Blood pressure, cholesterol, energy levels, and how your clothes fit are often better indicators of health than scale weight. Track these metrics alongside your weight.',
        tr: 'Kan basıncı, kolesterol, enerji seviyeleri ve giysilerin uyumu genellikle sağlığın daha iyi göstergeleriydi. Bu ölçütleri kilonuzla birlikte takip edin.',
      },
    },
    {
      icon: BookOpen,
      title: { en: 'Understanding Formula Variations', tr: 'Formül Farklılıklarını Anla' },
      description: {
        en: 'Different formulas give different results because they were developed in different eras. The average of all formulas gives the most reliable estimate. No single formula is 100% accurate for everyone.',
        tr: 'Farklı formüller farklı sonuçlar verir çünkü farklı dönemlerde geliştirilmiştir. Tüm formüllerin ortalaması en güvenilir tahmin verir. Hiçbir formül herkes için %100 doğru değildir.',
      },
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Kapsamlı Rehber' : 'Comprehensive Guide'}
        </h3>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Vücut yapı türleri ve sağlıklı kilo stratejileri'
            : 'Body frame types and healthy weight strategies'}
        </p>
      </div>

      {/* Body Frame Types */}
      <div className="mb-6 space-y-4">
        <h4 className="font-semibold text-neutral-900">
          {locale === 'tr' ? '🦴 Iskelet Yapı Türleri' : '🦴 Skeleton Frame Types'}
        </h4>
        {bodyFrameTypes.map((frame, index) => {
          return (
            <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="mb-2 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${frame.color}`}>
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h5 className="font-semibold text-neutral-900">{frame.name[locale]}</h5>
              </div>
              <p className="mb-2 text-sm text-neutral-600">{frame.description[locale]}</p>
              <div className="flex flex-wrap gap-2">
                {frame.characteristics[locale].map((char, i) => (
                  <span key={i} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                    {char}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Strategy Tips */}
      <div className="space-y-4">
        <h4 className="font-semibold text-neutral-900">
          {locale === 'tr' ? '💡 Stratejiler' : '💡 Strategies'}
        </h4>
        {strategyTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold text-blue-900">{tip.title[locale]}</h5>
              </div>
              <p className="text-sm text-blue-800">{tip.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* How to Measure Body Frame */}
      <div className="mt-6 rounded-lg bg-amber-50 p-4">
        <h5 className="mb-2 font-semibold text-amber-900">
          {locale === 'tr' ? '📏 Iskelet Yapısını Nasıl Ölçeceğinizi' : '📏 How to Determine Your Frame'}
        </h5>
        <p className="mb-2 text-sm text-amber-800">
          {locale === 'tr'
            ? 'Ön kolunuzun en dar noktasında bilediğinizi ölçün:'
            : 'Measure your wrist at the narrowest point (just above the hand):'}
        </p>
        <ul className="space-y-1 text-sm text-amber-800">
          <li>• {locale === 'tr' ? 'Kadın: Küçük &lt; 15cm | Orta 15-16.5cm | Büyük &gt; 16.5cm' : 'Female: Small < 5.5in | Medium 5.5-6.5in | Large > 6.5in'}</li>
          <li>• {locale === 'tr' ? 'Erkek: Küçük &lt; 17cm | Orta 17-18.5cm | Büyük &gt; 18.5cm' : 'Male: Small < 6.5in | Medium 6.5-7.5in | Large > 7.5in'}</li>
        </ul>
      </div>
    </Card>
  );
};

export default IdealWeightGuide;
