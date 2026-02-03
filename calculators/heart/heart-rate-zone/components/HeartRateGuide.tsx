'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Heart, Activity, Dumbbell, AlertCircle } from 'lucide-react';

interface HeartRateGuideProps {
  locale: 'en' | 'tr';
}

const HeartRateGuide: React.FC<HeartRateGuideProps> = ({ locale }) => {
  const zones = [
    {
      name: { en: 'Zone 1: Rest / Recovery', tr: 'Bölge 1: Dinlenme' },
      range: '50-60%',
      color: 'from-green-400 to-green-500',
      duration: { en: '20-40 min', tr: '20-40 dak' },
      benefits: {
        en: ['Heart rate baseline', 'Active recovery', 'Improves circulation', 'Good for cool-down'],
        tr: ['Bazal kalp atışı', 'Aktif toparlanma', 'Kan dolaşımı iyileşir', 'Soğuma için iyi'],
      },
      exercises: { en: ['Light walking', 'Stretching', 'Gentle yoga'], tr: ['Hafif yürüme', 'Gerilme', 'Hafif yoga'] },
    },
    {
      name: { en: 'Zone 2: Light Activity', tr: 'Bölge 2: Hafif Aktivite' },
      range: '60-70%',
      color: 'from-blue-400 to-blue-500',
      duration: { en: '30-60 min', tr: '30-60 dak' },
      benefits: {
        en: ['Fat burning starts', 'Endurance building', 'Comfortable pace', 'Sustainable effort'],
        tr: ['Yağ yakma başlar', 'Dayanıklılık oluşur', 'Rahat hız', 'Sürdürülebilir çaba'],
      },
      exercises: { en: ['Brisk walking', 'Cycling', 'Light jogging'], tr: ['Hızlı yürüme', 'Bisiklet', 'Hafif koşu'] },
    },
    {
      name: { en: 'Zone 3: Moderate', tr: 'Bölge 3: Orta' },
      range: '70-80%',
      color: 'from-yellow-400 to-yellow-500',
      duration: { en: '20-40 min', tr: '20-40 dak' },
      benefits: {
        en: ['Aerobic fitness improves', 'Maximum fat oxidation', 'Cardiovascular strength', 'Good endurance training'],
        tr: ['Aerobik fitness gelişir', 'Maksimum yağ oksidasyonu', 'Kardiyovasküler güç', 'İyi dayanıklılık antrenmanı'],
      },
      exercises: { en: ['Running', 'Swimming', 'Jump rope'], tr: ['Koşu', 'Yüzme', 'İp atlama'] },
    },
    {
      name: { en: 'Zone 4: Hard Effort', tr: 'Bölge 4: Yoğun Çaba' },
      range: '80-90%',
      color: 'from-orange-400 to-orange-500',
      duration: { en: '10-20 min', tr: '10-20 dak' },
      benefits: {
        en: ['Speed and power', 'Lactate threshold increases', 'VO2 max improvement', 'Race-specific fitness'],
        tr: ['Hız ve güç', 'Laktik eşik artar', 'VO2 max iyileşme', 'Yarış spesifik fitness'],
      },
      exercises: { en: ['Interval training', 'Fast tempo runs', 'Cycling sprints'], tr: ['Interval antrenman', 'Hızlı tempo koşu', 'Bisiklet sprint'] },
    },
    {
      name: { en: 'Zone 5: Maximum', tr: 'Bölge 5: Maksimum' },
      range: '90-100%',
      color: 'from-red-500 to-red-600',
      duration: { en: '3-10 min', tr: '3-10 dak' },
      benefits: {
        en: ['Peak performance', 'Anaerobic power', 'Speed development', 'Only for short bursts'],
        tr: ['Zirvede performans', 'Anaerobik güç', 'Hız geliştirme', 'Sadece kısa süreli'],
      },
      exercises: { en: ['HIIT sprints', 'Heavy lifting', 'Sprint intervals'], tr: ['HIIT sprint', 'Ağır kaldırma', 'Sprint intervallar'] },
    },
  ];

  return (
    <>
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Kalp Atışı Bölgeleri Rehberi' : 'Heart Rate Zone Guide'}
        </h3>
        <p className="mb-6 text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Her bölgenin farklı faydaları ve egzersiz önerileri'
            : 'Benefits and exercise recommendations for each zone'}
        </p>
        <div className="space-y-4">
          {zones.map((zone, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${zone.color}`}>
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{zone.name[locale]}</h4>
                    <span className="text-xs text-neutral-500">{zone.range} — {zone.duration[locale]}</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <div className="mb-1 text-xs font-medium text-neutral-500">{locale === 'tr' ? 'Faydalar' : 'Benefits'}</div>
                  <div className="flex flex-wrap gap-1">
                    {zone.benefits[locale].map((b, i) => (
                      <span key={i} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-700">{b}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium text-neutral-500">{locale === 'tr' ? 'Egzersizler' : 'Exercises'}</div>
                  <div className="flex flex-wrap gap-1">
                    {zone.exercises[locale].map((e, i) => (
                      <span key={i} className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="border-2 border-red-200 bg-red-50">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-red-600" />
          <div>
            <h4 className="mb-2 font-semibold text-red-900">
              {locale === 'tr' ? 'Güvenlik Uyarıları' : 'Safety Warnings'}
            </h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li>• {locale === 'tr' ? 'Yeni başlıyorsanız Zone 2 ile başlayın' : 'If you are new, start with Zone 2'}</li>
              <li>• {locale === 'tr' ? 'Zone 5\'de uzun süreli antrenman yapın' : 'Do not stay in Zone 5 for long'}</li>
              <li>• {locale === 'tr' ? 'Kalp hastalığı varsa doktor onayı alın' : 'If you have heart conditions, consult your doctor first'}</li>
              <li>• {locale === 'tr' ? 'Düzensiz kalp atışı hissedirsen durun' : 'Stop if you feel irregular heartbeat'}</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default HeartRateGuide;
