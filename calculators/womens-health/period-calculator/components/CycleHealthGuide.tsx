'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Heart, Activity, AlertCircle, Droplets } from 'lucide-react';

interface CycleHealthGuideProps {
  locale: 'en' | 'tr';
}

const CycleHealthGuide: React.FC<CycleHealthGuideProps> = ({ locale }) => {
  const phases = [
    {
      name: { en: 'Menstrual Phase', tr: 'Kanama Fazı' },
      duration: { en: '3-7 days', tr: '3-7 gün' },
      color: 'from-red-500 to-pink-500',
      icon: Droplets,
      description: {
        en: 'This is the start of your cycle. Hormone levels are low. You may feel more tired than usual.',
        tr: 'Bu döngünüzün başlangıcıdır. Hormon seviyeleri düşüktür. Normalden daha yorgun hissedebilirsiniz.',
      },
      tips: {
        en: ['Rest more if needed', 'Warm baths help with cramps', 'Stay hydrated', 'Eat iron-rich foods'],
        tr: ['Gerekirse daha fazla dinlenin', 'Sıcak banyo kramplarla yardımcı olur', 'Bol su için', 'Demirce zengin gıdalar yiyin'],
      },
    },
    {
      name: { en: 'Follicular Phase', tr: 'Foliküler Faz' },
      duration: { en: '7-10 days', tr: '7-10 gün' },
      color: 'from-orange-500 to-yellow-500',
      icon: Activity,
      description: {
        en: 'Estrogen rises, giving you more energy. This is a great time for intense workouts and new challenges.',
        tr: 'Estrojen yükselir, daha fazla enerji verir. Bu yoğun egzersiz ve yeni zorluklar için harika bir dönemdir.',
      },
      tips: {
        en: ['Great for high-intensity workouts', 'Try new activities', 'Focus on goal setting', 'Take advantage of your energy'],
        tr: ['Yüksek yoğunluk egzersiz için harika', 'Yeni aktiviteler deneyin', 'Hedef belirlemeye odaklanın', 'Enerjinizi kullanın'],
      },
    },
    {
      name: { en: 'Ovulation', tr: 'Yumurtlama' },
      duration: { en: '1-2 days', tr: '1-2 gün' },
      color: 'from-green-500 to-emerald-500',
      icon: Heart,
      description: {
        en: 'An egg is released. This is your most fertile window. Some may experience mild cramping.',
        tr: 'Bir yumurta salınır. Bu en verimli pencere. Bazı kadınlar hafif kramp yaşayabilir.',
      },
      tips: {
        en: ['Peak fertility window', 'Some may feel mild cramps', 'Energy levels are usually high', 'Breast tenderness is common'],
        tr: ['En yüksek doğurganlık penceresi', 'Bazı kadınlar hafif kramp hissedebilir', 'Enerji seviyeleri genellikle yüksektir', 'Meme hassasiyeti yaygındır'],
      },
    },
    {
      name: { en: 'Luteal Phase', tr: 'Luteal Faz' },
      duration: { en: '10-14 days', tr: '10-14 gün' },
      color: 'from-purple-500 to-indigo-500',
      icon: Activity,
      description: {
        en: 'Progesterone increases. PMS symptoms may appear in the second half. Your body is preparing for the next cycle.',
        tr: 'Progesterone artar. PMS belirtileri ikinci yarıda ortaya çıkabilir. Vücudunuz bir sonraki döngüye hazırlanmaktadır.',
      },
      tips: {
        en: ['Practice self-care', 'Gentle exercise is beneficial', 'Healthy snacking reduces cravings', 'Prioritize sleep'],
        tr: ['Öz-bakım uygulayın', 'Hafif egzersiz faydalıdır', 'Sağlıklı atıştırma isteği azaltır', 'Uyku öncelikli yapın'],
      },
    },
  ];

  const abnormalSigns = [
    { en: 'Extremely heavy bleeding (soaking a pad in less than an hour)', tr: 'Aşırı ağır kanama (bir saat içinde bir pedi ıslatmak)' },
    { en: 'Periods lasting longer than 7 days consistently', tr: 'Tutarlı olarak 7 günden uzun süren adet' },
    { en: 'Severe pain that disrupts daily activities', tr: 'Günlük aktiviteleri etkileyen ciddi ağrı' },
    { en: 'Irregular periods for more than 3 months', tr: '3 aydan fazla düzensiz adet' },
    { en: 'Spotting between periods', tr: 'Adet arası kanama' },
    { en: 'No period for 3+ months (if not pregnant)', tr: '3+ ay adet gelmemesi (hamile değilse)' },
  ];

  return (
    <>
      {/* Cycle Phases */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Adet Döngüsünün Fazları' : 'Menstrual Cycle Phases'}
        </h3>
        <p className="mb-6 text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Ortalama döngü 28 gündür ancak 21-35 gün arası normaldir'
            : 'Average cycle is 28 days but 21-35 days is normal'}
        </p>
        <div className="space-y-4">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${phase.color}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{phase.name[locale]}</h4>
                      <span className="text-xs text-neutral-500">{phase.duration[locale]}</span>
                    </div>
                  </div>
                </div>
                <p className="mb-3 text-sm text-neutral-600">{phase.description[locale]}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.tips[locale].map((tip, i) => (
                    <span key={i} className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Warning Signs */}
      <Card className="border-2 border-red-200 bg-red-50">
        <div className="mb-4 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <h3 className="text-lg font-bold text-red-900">
            {locale === 'tr' ? 'Doktora Danışan Belirtiler' : 'Signs to See a Doctor'}
          </h3>
        </div>
        <div className="space-y-2">
          {abnormalSigns.map((sign, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-white p-3">
              <AlertCircle className="mt-0.5 h-4 w-4 text-red-600" />
              <span className="text-sm text-red-800">{sign[locale]}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default CycleHealthGuide;
