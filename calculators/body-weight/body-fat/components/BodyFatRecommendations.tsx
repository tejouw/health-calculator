'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Dumbbell, Apple, Moon, Activity } from 'lucide-react';

interface BodyFatRecommendationsProps {
  currentBodyFat: number;
  gender: 'male' | 'female';
  locale: 'en' | 'tr';
}

const BodyFatRecommendations: React.FC<BodyFatRecommendationsProps> = ({
  currentBodyFat,
  gender,
  locale,
}) => {
  const isHighFat = gender === 'male' ? currentBodyFat >= 18 : currentBodyFat >= 25;
  const isFitness = gender === 'male'
    ? currentBodyFat >= 14 && currentBodyFat <= 17
    : currentBodyFat >= 21 && currentBodyFat <= 24;

  const exerciseTips = [
    {
      icon: Dumbbell,
      title: { en: 'Strength Training', tr: 'Kuvvet Antrenmanı' },
      description: {
        en: 'Lift weights 3-4 times per week. Compound exercises like squats, bench press, and deadlifts burn the most calories and build muscle.',
        tr: 'Haftada 3-4 kez ağırlık kaldırın. Squat, bench press ve deadlift gibi bileşik egzersizler en fazla kalori yakar ve kas oluşturur.',
      },
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Activity,
      title: { en: 'High-Intensity Cardio (HIIT)', tr: 'Yüksek Yoğunluk (HIIT)' },
      description: {
        en: 'Do 20-30 minute HIIT sessions 2-3 times per week. This maximizes fat burning in minimal time.',
        tr: 'Haftada 2-3 kez 20-30 dakika HIIT yapın. Bu, minimal zamanda yağ yakımını maksimize eder.',
      },
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Apple,
      title: { en: 'Nutrition Focus', tr: 'Beslenme Odağı' },
      description: {
        en: 'Maintain a protein intake of 1.6-2.2g per kg bodyweight. This preserves muscle mass while reducing fat.',
        tr: 'Kg başına 1.6-2.2g protein alımını koruyun. Bu, yağ azaltırken kas kütlesini korur.',
      },
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Moon,
      title: { en: 'Recovery & Sleep', tr: 'Toparlanma ve Uyku' },
      description: {
        en: 'Sleep 7-9 hours. Poor sleep increases cortisol, which promotes fat storage, especially around the abdomen.',
        tr: '7-9 saat uyuyun. Kötü uyku, özellikle karın bölgesinde yağ depolamasını destekleyen kortisolü artırır.',
      },
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <Card>
      <h3 className="mb-2 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Kişisel Öneriler' : 'Personalized Recommendations'}
      </h3>
      <p className="mb-6 text-sm text-neutral-600">
        {locale === 'tr' ? 'Mevcut durumuna göre öneriler' : 'Recommendations based on your current status'}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {exerciseTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-white p-4 transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tip.color}`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">{tip.title[locale]}</h4>
              </div>
              <p className="text-sm text-neutral-600">{tip.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* Goal Setting */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-primary-50 to-blue-50 p-4">
        <h4 className="mb-2 font-semibold text-primary-900">
          {locale === 'tr' ? '🎯 Hedef Belirleme' : '🎯 Goal Setting'}
        </h4>
        <p className="text-sm text-neutral-700">
          {locale === 'tr' ? (
            <>
              Sağlıklı yağ kaybı haftada <strong>%0.5-1</strong> arasında olmalıdır. Bu hız, kas
              kütlesini korurken sürdürülebilir sonuçlar sağlar. {isFitness ? 'Mevcut fitness aralığınızı korumak için sürdürülebilir bir rutin takip edin.' : isHighFat ? 'Önce küçük ama tutarlı değişikliklerle başlayın.' : ''}
            </>
          ) : (
            <>
              Healthy fat loss should be <strong>0.5-1% per week</strong>. This rate preserves muscle mass while
              delivering sustainable results. {isFitness ? 'Maintain your current fitness range with a consistent routine.' : isHighFat ? 'Start with small but consistent changes.' : ''}
            </>
          )}
        </p>
      </div>

      {/* Measurement Tips */}
      <div className="mt-4 rounded-lg bg-amber-50 p-4">
        <h4 className="mb-2 font-semibold text-amber-900">
          {locale === 'tr' ? '📏 Doğru Ölçüm İpuçları' : '📏 Accurate Measurement Tips'}
        </h4>
        <ul className="space-y-1 text-sm text-amber-800">
          <li>• {locale === 'tr' ? 'Sabah aç karnayla ölçün' : 'Measure in the morning on an empty stomach'}</li>
          <li>• {locale === 'tr' ? 'Her hafta aynı şartlarda tekrarla' : 'Repeat under the same conditions each week'}</li>
          <li>• {locale === 'tr' ? 'Bant düz ama sıkı tutulmalı (kıkırdak sıkıştırılmamalı)' : 'Tape should be snug but not tight (no squeezing)'}</li>
          <li>• {locale === 'tr' ? 'Birden fazla ölçüm al ve ortalama al' : 'Take multiple measurements and average them'}</li>
        </ul>
      </div>
    </Card>
  );
};

export default BodyFatRecommendations;
