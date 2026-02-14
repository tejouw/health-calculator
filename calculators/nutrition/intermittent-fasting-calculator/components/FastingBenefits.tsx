'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Heart, Brain, TrendingDown, Zap, Shield, Sparkles } from 'lucide-react';
import { FastingProtocol } from '../fastingTypes';

interface FastingBenefitsProps {
  protocol: FastingProtocol;
  fastDuration: number;
  locale: 'en' | 'tr';
}

const FastingBenefits: React.FC<FastingBenefitsProps> = ({
  protocol,
  fastDuration,
  locale,
}) => {
  const benefits = [
    {
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      title: { en: 'Heart Health', tr: 'Kalp Sağlığı' },
      description: {
        en: 'Improves cardiovascular health, reduces blood pressure, and lowers cholesterol levels',
        tr: 'Kardiyovasküler sağlığı iyileştirir, kan basıncını düşürür ve kolesterol seviyelerini azaltır',
      },
    },
    {
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      title: { en: 'Mental Clarity', tr: 'Zihinsel Berraklık' },
      description: {
        en: 'Enhances brain function, focus, and cognitive performance through ketone production',
        tr: 'Keton üretimi yoluyla beyin fonksiyonunu, odaklanmayı ve bilişsel performansı artırır',
      },
    },
    {
      icon: TrendingDown,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: { en: 'Weight Loss', tr: 'Kilo Kaybı' },
      description: {
        en: 'Promotes fat burning, reduces insulin levels, and increases metabolic rate',
        tr: 'Yağ yakımını teşvik eder, insülin seviyelerini düşürür ve metabolizma hızını artırır',
      },
    },
    {
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      title: { en: 'Energy Boost', tr: 'Enerji Artışı' },
      description: {
        en: 'Stabilizes blood sugar, reduces energy crashes, and improves sustained energy',
        tr: 'Kan şekerini stabilize eder, enerji düşüşlerini azaltır ve sürekli enerjiyi iyileştirir',
      },
    },
    {
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: { en: 'Autophagy', tr: 'Otofaji' },
      description: {
        en: 'Activates cellular cleanup and repair, removing damaged proteins and cells',
        tr: 'Hücresel temizliği ve onarımı aktive eder, hasarlı proteinleri ve hücreleri kaldırır',
      },
      highlight: fastDuration >= 16,
    },
    {
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      title: { en: 'Longevity', tr: 'Uzun Ömür' },
      description: {
        en: 'May extend lifespan through cellular stress resistance and anti-aging pathways',
        tr: 'Hücresel stres direnci ve yaşlanma karşıtı yolaklar yoluyla yaşam süresini uzatabilir',
      },
    },
  ];

  return (
    <Card>
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? '✨ Aralıklı Oruç Faydaları' : '✨ Intermittent Fasting Benefits'}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className={`relative rounded-lg border-2 p-4 ${benefit.borderColor} ${benefit.bgColor} ${
                benefit.highlight ? 'ring-2 ring-blue-400 ring-offset-2' : ''
              }`}
            >
              {benefit.highlight && (
                <div className="absolute -right-2 -top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                  {locale === 'tr' ? 'Aktif!' : 'Active!'}
                </div>
              )}
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${benefit.color}`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h4 className="mb-2 font-semibold text-neutral-900">{benefit.title[locale]}</h4>
              <p className="text-sm text-neutral-700">{benefit.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {fastDuration >= 16 && (
        <div className="mt-4 rounded-lg border-2 border-blue-300 bg-blue-50 p-4">
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-blue-900">
            <Sparkles className="h-5 w-5" />
            {locale === 'tr' ? 'Otofaji Aktivasyonu' : 'Autophagy Activation'}
          </h4>
          <p className="text-sm text-blue-800">
            {locale === 'tr'
              ? `${fastDuration} saatlik orucunuz otofaji aktivasyonuna ulaşmak için yeterlidir! Bu hücresel temizlik süreci, hasarlı hücre bileşenlerini kaldırır ve genel sağlığı destekler.`
              : `Your ${fastDuration}-hour fast is sufficient to trigger autophagy! This cellular cleanup process removes damaged cell components and supports overall health.`}
          </p>
        </div>
      )}
    </Card>
  );
};

export default FastingBenefits;
