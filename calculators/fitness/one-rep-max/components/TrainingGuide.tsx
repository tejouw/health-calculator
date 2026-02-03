'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Dumbbell, TrendingUp, AlertCircle, Target } from 'lucide-react';

interface TrainingGuideProps {
  oneRepMax: number;
  unit: 'kg' | 'lbs';
  locale: 'en' | 'tr';
}

const TrainingGuide: React.FC<TrainingGuideProps> = ({ oneRepMax, unit, locale }) => {
  const percentages = [100, 95, 90, 85, 80, 75, 70, 60, 50];

  const repRanges = [
    { percent: 90, reps: '1-3', goal: { en: 'Strength', tr: 'Kuvvet' }, color: 'from-red-500 to-red-600' },
    { percent: 80, reps: '4-6', goal: { en: 'Power & Strength', tr: 'Güç & Kuvvet' }, color: 'from-orange-500 to-red-500' },
    { percent: 70, reps: '8-12', goal: { en: 'Hypertrophy', tr: 'Hipertrofi (Kas Büyüme)' }, color: 'from-yellow-500 to-orange-500' },
    { percent: 60, reps: '12-20', goal: { en: 'Endurance', tr: 'Dayanıklılık' }, color: 'from-green-500 to-yellow-500' },
    { percent: 50, reps: '20+', goal: { en: 'Warm-up / Rehab', tr: 'Isınma / Rehabilitasyon' }, color: 'from-blue-500 to-green-500' },
  ];

  return (
    <>
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Ağırlık Antrenman Rehberi' : 'Weight Training Guide'}
        </h3>
        <p className="mb-4 text-sm text-neutral-600">
          {locale === 'tr'
            ? `1RM'nize (%${oneRepMax} ${unit}) dayanan antrenman dağılımı`
            : `Training distribution based on your 1RM (${oneRepMax} ${unit})`}
        </p>

        {/* Rep-Based Zones */}
        <div className="mb-6 space-y-3">
          {repRanges.map((range, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${range.color}`}>
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{range.goal[locale]}</h4>
                    <span className="text-xs text-neutral-500">{range.percent}% — {range.reps} {locale === 'tr' ? 'tekrar' : 'reps'}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-neutral-900">{Math.round(oneRepMax * range.percent / 100)}</div>
                  <div className="text-xs text-neutral-500">{unit}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Percentage Table */}
        <div className="mb-6">
          <h4 className="mb-3 font-semibold text-neutral-900">
            {locale === 'tr' ? '📊 Yüzdelik Tablosu' : '📊 Percentage Table'}
          </h4>
          <div className="rounded-lg border border-neutral-200 overflow-hidden">
            {percentages.map((pct, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-2 px-4 ${
                  index !== percentages.length - 1 ? 'border-b border-neutral-100' : ''
                } ${pct === 100 ? 'bg-primary-50' : ''}`}
              >
                <span className="text-sm font-medium text-neutral-700">{pct}% 1RM</span>
                <span className="text-sm font-bold text-neutral-900">
                  {Math.round(oneRepMax * pct / 100)} {unit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Progression Guide */}
        <div className="rounded-lg bg-blue-50 p-4">
          <h4 className="mb-2 font-semibold text-blue-900">
            {locale === 'tr' ? '📈 İlerleme Rehberi' : '📈 Progression Guide'}
          </h4>
          <ul className="space-y-1 text-sm text-blue-800">
            <li>• {locale === 'tr' ? '1-2 kg artırma (başarılı setlerde) normal bir ilerlemedir' : '1-2 kg progression (on successful sets) is normal'}</li>
            <li>• {locale === 'tr' ? 'Bir hafta antrenman yaptığınızda 1RM yeniden test' : 'Re-test 1RM after 4-6 weeks of training'}</li>
            <li>• {locale === 'tr' ? 'Kasları dinlendirir ve tüm çalışma haftalarında' : 'Rest 2-3 minutes between heavy sets'}</li>
            <li>• {locale === 'tr' ? '1RM hedefini %5 artırma şeklinde belirleyin' : 'Set 1RM goals in 5% increments'}</li>
          </ul>
        </div>
      </Card>

      <Card className="border-2 border-amber-200 bg-amber-50">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-amber-600" />
          <div>
            <h4 className="mb-2 font-semibold text-amber-900">
              {locale === 'tr' ? 'Güvenlik Uyarıları' : 'Safety Warnings'}
            </h4>
            <ul className="space-y-1 text-sm text-amber-800">
              <li>• {locale === 'tr' ? 'Hiçbir zaman ağır ağırlıkları yalnız kaldırın' : 'Never lift heavy weights alone — use a spotter'}</li>
              <li>• {locale === 'tr' ? 'Her antrenman öncesi ısınma yapın' : 'Warm up before every training session'}</li>
              <li>• {locale === 'tr' ? 'Agresif artışlardan kaçının' : 'Avoid aggressive weight increases'}</li>
              <li>• {locale === 'tr' ? 'Ağrı hissedirsen durun ve profesyonel yardım alın' : 'Stop if you feel pain — seek professional help'}</li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default TrainingGuide;
