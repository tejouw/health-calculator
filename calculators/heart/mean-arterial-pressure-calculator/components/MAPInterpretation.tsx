'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Heart, Brain, Droplet, Wind } from 'lucide-react';
import { MAPResult } from '../mapTypes';

interface MAPInterpretationProps {
  result: MAPResult;
  locale: 'en' | 'tr';
}

const MAPInterpretation: React.FC<MAPInterpretationProps> = ({ result, locale }) => {
  const status = result.perfusionStatus;

  const organs = [
    {
      icon: Brain,
      name: locale === 'tr' ? 'Beyin' : 'Brain',
      desc:
        status === 'inadequate'
          ? locale === 'tr'
            ? 'Yetersiz kan akışı: bilinç bulanıklığı, baş dönmesi riski.'
            : 'Inadequate flow: risk of confusion, dizziness.'
          : status === 'borderline'
            ? locale === 'tr'
              ? 'Sınır değerde perfüzyon. İstirahatte yeterli olabilir.'
              : 'Borderline perfusion. May be adequate at rest.'
            : status === 'adequate'
              ? locale === 'tr'
                ? 'Yeterli serebral perfüzyon.'
                : 'Adequate cerebral perfusion.'
              : locale === 'tr'
                ? 'Yüksek basınç: felç riskini artırır.'
                : 'Elevated pressure: increases stroke risk.',
    },
    {
      icon: Heart,
      name: locale === 'tr' ? 'Kalp' : 'Heart',
      desc:
        status === 'inadequate'
          ? locale === 'tr'
            ? 'Koroner perfüzyon yetersiz; iskemi riski.'
            : 'Insufficient coronary perfusion; ischemia risk.'
          : status === 'borderline'
            ? locale === 'tr'
              ? 'Stres altında koroner akış sınırda olabilir.'
              : 'Coronary flow may be marginal under stress.'
            : status === 'adequate'
              ? locale === 'tr'
                ? 'Koroner arterler yeterli kan alır.'
                : 'Coronary arteries receive adequate flow.'
              : locale === 'tr'
                ? 'Sürekli yüksek MAP kalbi yorar.'
                : 'Sustained high MAP strains the heart.',
    },
    {
      icon: Droplet,
      name: locale === 'tr' ? 'Böbrek' : 'Kidneys',
      desc:
        status === 'inadequate'
          ? locale === 'tr'
            ? 'Akut böbrek hasarı riski mevcuttur.'
            : 'Risk of acute kidney injury.'
          : status === 'borderline'
            ? locale === 'tr'
              ? 'Glomerüler filtrasyon sınır değerde.'
              : 'Glomerular filtration borderline.'
            : status === 'adequate'
              ? locale === 'tr'
                ? 'Renal perfüzyon ve filtrasyon korunmuş.'
                : 'Renal perfusion and filtration preserved.'
              : locale === 'tr'
                ? 'Uzun vadede kronik böbrek hastalığı riski.'
                : 'Long-term chronic kidney disease risk.',
    },
    {
      icon: Wind,
      name: locale === 'tr' ? 'Genel Doku' : 'Tissue Perfusion',
      desc:
        status === 'inadequate'
          ? locale === 'tr'
            ? 'Şok benzeri tablo ile sonuçlanabilir.'
            : 'May progress to shock-like state.'
          : status === 'borderline'
            ? locale === 'tr'
              ? 'Egzersizde semptom verebilir.'
              : 'May produce symptoms during exertion.'
            : status === 'adequate'
              ? locale === 'tr'
                ? 'Tüm dokulara yeterli oksijen.'
                : 'Adequate oxygen to all tissues.'
              : locale === 'tr'
                ? 'Damar duvarlarında uzun vadeli stres.'
                : 'Long-term stress on vessel walls.',
    },
  ];

  return (
    <Card>
      <h3 className="mb-1 text-xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Organ Perfüzyonuna Etkisi' : 'Impact on Organ Perfusion'}
      </h3>
      <p className="mb-4 text-sm text-neutral-600">
        {locale === 'tr'
          ? 'MAP, kanın hayati organlara ulaşma kuvvetini gösterir. Sizin değeriniz şu organlar için ne anlama geliyor:'
          : 'MAP reflects the force driving blood to vital organs. Here is what your value means for each:'}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {organs.map((organ) => {
          const Icon = organ.icon;
          return (
            <div
              key={organ.name}
              className="flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white">
                <Icon className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{organ.name}</p>
                <p className="text-xs text-neutral-700">{organ.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg bg-blue-50 p-3">
        <p className="text-xs text-blue-900">
          <strong>
            {locale === 'tr' ? 'Klinik Not: ' : 'Clinical Note: '}
          </strong>
          {locale === 'tr'
            ? 'Yoğun bakımda Surviving Sepsis Campaign kılavuzu, septik şok hastalarında en az 65 mmHg MAP hedefini önerir. Kronik hipertansiyonu olanlarda hedef 75-80 mmHg olabilir.'
            : 'In intensive care, the Surviving Sepsis Campaign recommends a minimum MAP target of 65 mmHg in septic shock. Chronic hypertensive patients may need 75-80 mmHg.'}
        </p>
      </div>
    </Card>
  );
};

export default MAPInterpretation;
