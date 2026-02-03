'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Moon, Sun, Coffee, Smartphone, Brain, Heart } from 'lucide-react';

interface SleepHygieneGuideProps {
  locale: 'en' | 'tr';
}

const SleepHygieneGuide: React.FC<SleepHygieneGuideProps> = ({ locale }) => {
  const sleepCycles = [
    { name: { en: 'Light Sleep', tr: 'Hafif Uyku' }, duration: '5-10 min', percentage: 15, description: { en: 'Transitional stage. Heart rate slows, muscles relax.', tr: 'Geçici aşama. Kalp atışı yavaşlar, kaslar gevşer.' }, color: 'from-blue-400 to-cyan-400' },
    { name: { en: 'Deep Sleep (N2)', tr: 'Derin Uyku (N2)' }, duration: '20 min', percentage: 30, description: { en: 'Body repair mode. Growth hormone released. Core temperature drops.', tr: 'Vücut onarım modunda. Büyüme hormonu serbest bırakılır.' }, color: 'from-indigo-400 to-blue-500' },
    { name: { en: 'Deepest Sleep (N3)', tr: 'En Derin Uyku (N3)' }, duration: '20-30 min', percentage: 20, description: { en: 'Critical for health. Immune system strengthened. Memory consolidated.', tr: 'Sağlık için kritik. Bağışıklık güçlenir. Bellek pekişir.' }, color: 'from-purple-500 to-indigo-500' },
    { name: { en: 'REM Sleep', tr: 'REM Uyku' }, duration: '10-20 min', percentage: 25, description: { en: 'Dreams occur. Brain processes emotions. Creativity peaks. Gets longer each cycle.', tr: 'Rüyalar oluşur. Beyin duyguları işler. Her döngüde daha uzun sürür.' }, color: 'from-pink-500 to-purple-500' },
  ];

  const hygieneTips = [
    { icon: Moon, title: { en: 'Consistent Schedule', tr: 'Tutarlı Program' }, tip: { en: 'Go to bed and wake up at the same time every day, even on weekends.', tr: 'Her gün, hafta sonları dahil, aynı saatte yatın ve kalkın.' }, color: 'from-blue-500 to-indigo-500' },
    { icon: Smartphone, title: { en: 'Screen-Free Zone', tr: 'Ekran-Serbest Bölge' }, tip: { en: 'Stop screens 60-90 minutes before bed. Blue light suppresses melatonin production.', tr: 'Yatmadan 60-90 dakika önce ekranlardan uzak durun. Mavi ışık melatonin üretimini baster.' }, color: 'from-red-500 to-orange-500' },
    { icon: Coffee, title: { en: 'Caffeine Cutoff', tr: 'Kafein Kesme Noktası' }, tip: { en: 'No caffeine after 2 PM. Half-life of caffeine is 5-6 hours.', tr: '14:00\'ten sonra kafein almayın. Kafein yarı ömrü 5-6 saattir.' }, color: 'from-amber-500 to-yellow-500' },
    { icon: Sun, title: { en: 'Morning Sunlight', tr: 'Sabah Güneş Işığı' }, tip: { en: 'Get 10-20 min of morning sunlight to regulate your circadian rhythm.', tr: 'Circadian ritmi düzenlemek için 10-20 dak sabah güneş ışığı alın.' }, color: 'from-orange-500 to-red-500' },
    { icon: Brain, title: { en: 'Cool & Dark Room', tr: 'Soğuk & Karanlık Oda' }, tip: { en: 'Ideal sleep temperature is 16-19°C. Use blackout curtains.', tr: 'İdeal uyku sıcaklığı 16-19°C. Karanlık perdeleri kullanın.' }, color: 'from-cyan-500 to-blue-500' },
    { icon: Heart, title: { en: 'Relax Before Bed', tr: 'Yatmadan Önce Rahatla' }, tip: { en: 'Try meditation, reading, or warm baths. Avoid stimulating activities.', tr: 'Meditasyon, kitap okuma veya sıcak banyo yapın. Canlandırıcı aktivitelerden kaçının.' }, color: 'from-purple-500 to-pink-500' },
  ];

  const consequences = [
    { en: 'Weakened immune system', tr: 'Zayıflamış bağışıklık sistemi', icon: '🛡️' },
    { en: 'Increased stress hormones (cortisol)', tr: 'Artan stres hormonları (kortisol)', icon: '😰' },
    { en: 'Higher risk of obesity and diabetes', tr: 'Daha yüksek obezite ve diyabet riski', icon: '⚖️' },
    { en: 'Reduced cognitive performance', tr: 'Azalmış zihinsel performans', icon: '🧠' },
    { en: 'Mood disorders and depression risk', tr: 'Ruh bozukluğu ve depresyon riski', icon: '💔' },
    { en: 'Increased accident and injury risk', tr: 'Artan kaza ve yaralanma riski', icon: '⚠️' },
  ];

  return (
    <>
      {/* Sleep Cycles */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Uyku Döngüsü Aşamaları' : 'Sleep Cycle Stages'}
        </h3>
        <p className="mb-4 text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Bir uyku döngüsü yaklaşık 90 dakika sürer. Gece boyunca 4-6 döngü tamamlanır.'
            : 'One sleep cycle lasts about 90 minutes. 4-6 cycles are completed overnight.'}
        </p>
        <div className="space-y-3">
          {sleepCycles.map((cycle, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${cycle.color}`}>
                    <Moon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-900">{cycle.name[locale]}</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-medium text-neutral-600">{cycle.duration} — {cycle.percentage}%</span>
                </div>
              </div>
              <p className="text-sm text-neutral-600">{cycle.description[locale]}</p>
              <div className="mt-2 h-2 rounded-full bg-neutral-200">
                <div className={`h-2 rounded-full bg-gradient-to-r ${cycle.color}`} style={{ width: `${cycle.percentage}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Hygiene Tips */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Uyku Hijyeni İpuçları' : 'Sleep Hygiene Tips'}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {hygieneTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tip.color}`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-900">{tip.title[locale]}</h4>
                </div>
                <p className="text-sm text-neutral-600">{tip.tip[locale]}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Consequences of Poor Sleep */}
      <Card className="border-2 border-red-200 bg-red-50">
        <h3 className="mb-4 text-lg font-bold text-red-900">
          {locale === 'tr' ? '⚠️ Yetersiz Uykunun Sonuçları' : '⚠️ Consequences of Poor Sleep'}
        </h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {consequences.map((consequence, index) => (
            <div key={index} className="flex items-center gap-3 rounded-lg bg-white p-3">
              <span className="text-xl">{consequence.icon}</span>
              <span className="text-sm text-red-800">{consequence[locale]}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg bg-white p-3">
          <p className="text-sm text-red-900">
            {locale === 'tr'
              ? '💡 Yetişkinler haftada 7-9 saat, gençlik 8-10 saat uyumalıdır. Kronik uyku yoksunluğu varsa bir sağlık profesyoneline danışın.'
              : '💡 Adults need 7-9 hours per night, young adults 8-10 hours. If you have chronic sleep issues, consult a healthcare professional.'}
          </p>
        </div>
      </Card>
    </>
  );
};

export default SleepHygieneGuide;
