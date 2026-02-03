'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Droplets, Clock, Sun, Moon, Activity, AlertCircle } from 'lucide-react';

interface HydrationGuideProps {
  dailyWater: number;
  locale: 'en' | 'tr';
}

const HydrationGuide: React.FC<HydrationGuideProps> = ({ dailyWater, locale }) => {
  // Generate hourly schedule (awake hours: 6am - 11pm = 17 hours)
  const hourlyAmount = Math.round((dailyWater / 17) * 10) / 10;
  const schedule = [
    { time: '6:00', icon: '🌅', label: { en: 'Wake up', tr: 'Uyanış' }, tip: { en: 'Start with warm water + lemon', tr: 'Sıcak su + limonla başla' } },
    { time: '8:00', icon: '☕', label: { en: 'Morning', tr: 'Sabah' }, tip: { en: 'With breakfast', tr: 'Kahvaltıyla' } },
    { time: '10:00', icon: '🌞', label: { en: 'Mid-Morning', tr: 'Kuşluk' }, tip: { en: 'Refill your glass', tr: 'Bardağı doltur' } },
    { time: '12:00', icon: '🍽️', label: { en: 'Lunch', tr: 'Öğle' }, tip: { en: 'Sip during the meal', tr: 'Yemek arasında yudum yap' } },
    { time: '14:00', icon: '☀️', label: { en: 'Afternoon', tr: 'Öğleden Sonra' }, tip: { en: 'Drink before feeling thirsty', tr: 'Sussamadan önce iç' } },
    { time: '16:00', icon: '🧊', label: { en: 'Late Afternoon', tr: 'Geç Öğleden Sonra' }, tip: { en: 'Cold water helps alertness', tr: 'Soğuk su uyanıklığı artırır' } },
    { time: '18:00', icon: '🌆', label: { en: 'Before Dinner', tr: 'Akşam Yemeği Öncesi' }, tip: { en: 'Pre-dinner hydration', tr: 'Önceki bol hidrasyon' } },
    { time: '20:00', icon: '🌙', label: { en: 'Evening', tr: 'Akşam' }, tip: { en: 'Slow down intake', tr: 'Alımı azalt' } },
  ];

  const dehydrationSigns = [
    { en: 'Dark yellow urine', tr: 'Koyu sarı idrar' },
    { en: 'Headache or dizziness', tr: 'Baş ağrısı veya baş dönmesi' },
    { en: 'Dry mouth or lips', tr: 'Kuru ağız veya dudaklar' },
    { en: 'Fatigue and low energy', tr: 'Yorgunluk ve düşük enerji' },
    { en: 'Difficulty concentrating', tr: 'Konsantrayon güçlüğü' },
    { en: 'Dry skin', tr: 'Kuru cilt' },
  ];

  const hydrationBenefits = [
    {
      icon: '🧠',
      title: { en: 'Brain Function', tr: 'Beyin Fonksiyonu' },
      description: {
        en: 'Even 2% dehydration reduces cognitive performance by 20%. Water is 73% of brain weight.',
        tr: '%2 susuzluk bile zihinsel performansı %20 düşürür. Su, beyin ağırlığının %73\'ü.',
      },
    },
    {
      icon: '💪',
      title: { en: 'Muscle Performance', tr: 'Kas Performansı' },
      description: {
        en: 'Proper hydration increases muscle power and endurance by 10-15%.',
        tr: 'Yeterli hidrasyon, kas gücünü ve dayanıklılığı %10-15 artırır.',
      },
    },
    {
      icon: '⚖️',
      title: { en: 'Weight Management', tr: 'Kilo Yönetimi' },
      description: {
        en: 'Drinking water before meals reduces calorie intake by 13%. Boosts metabolism by 25% temporarily.',
        tr: 'Yemek önce su içmek, kalori alımını %13 azaltır. Metabolizmanı geçici olarak %25 artırır.',
      },
    },
    {
      icon: '🛡️',
      title: { en: 'Immune System', tr: 'Bağışıklık Sistemi' },
      description: {
        en: 'Supports flushing out toxins and maintaining healthy immune responses.',
        tr: 'Toksinlerin uzaklaştırılmasını ve sağlıklı bağışıklık tepkilerini destekler.',
      },
    },
    {
      icon: '✨',
      title: { en: 'Skin Health', tr: 'Cilt Sağlığı' },
      description: {
        en: 'Well-hydrated skin looks firmer and younger. Reduces fine lines.',
        tr: 'Yeterince nemlendirilmiş cilt daha sert ve genç görünür. Kırışıklıkları azaltır.',
      },
    },
    {
      icon: '🩺',
      title: { en: 'Kidney Health', tr: 'Böbrek Sağlığı' },
      description: {
        en: 'Adequate water intake reduces kidney stone risk by 40-50%.',
        tr: 'Yeterli su alımı böbrek taşı riskini %40-50 azaltır.',
      },
    },
  ];

  return (
    <>
      {/* Daily Schedule */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Günlük Hidrasyon Takvimi' : 'Daily Hydration Schedule'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? `${dailyWater}L - ~${hourlyAmount}L/saatlik` : `${dailyWater}L total - ~${hourlyAmount}L per hour`}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {schedule.map((time, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 p-3"
            >
              <span className="text-lg">{time.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-600">{time.time}</span>
                  <span className="text-sm font-medium text-neutral-700">{time.label[locale]}</span>
                </div>
                <span className="text-xs text-neutral-500">{time.tip[locale]}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-blue-700">{hourlyAmount}L</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Benefits Grid */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Hidrasyonun Faydaları' : 'Benefits of Hydration'}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {hydrationBenefits.map((benefit, index) => (
            <div key={index} className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{benefit.icon}</span>
                <h4 className="font-semibold text-blue-900">{benefit.title[locale]}</h4>
              </div>
              <p className="text-sm text-blue-800">{benefit.description[locale]}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Dehydration Signs */}
      <Card className="border-2 border-amber-200 bg-amber-50">
        <div className="mb-3 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-600" />
          <h3 className="text-lg font-bold text-amber-900">
            {locale === 'tr' ? 'Susuzluk Belirtileri' : 'Signs of Dehydration'}
          </h3>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          {dehydrationSigns.map((sign, index) => (
            <div key={index} className="flex items-center gap-2 rounded-lg bg-white p-3">
              <span className="text-amber-600">⚠️</span>
              <span className="text-sm text-amber-800">{sign[locale]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-white p-3">
          <p className="text-sm text-amber-900">
            {locale === 'tr'
              ? '💡 Urine coloru en iyi hidrasyon göstergesidir. Açık sarı = iyi hidrasyon. Koyu sarı = daha fazla su gerektirir.'
              : '💡 Urine color is the best hydration indicator. Light yellow = good hydration. Dark yellow = need more water.'}
          </p>
        </div>
      </Card>
    </>
  );
};

export default HydrationGuide;
