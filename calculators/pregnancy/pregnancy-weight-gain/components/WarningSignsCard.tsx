'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { ShieldAlert, Phone } from 'lucide-react';

interface WarningSignsCardProps {
  locale: 'en' | 'tr';
}

const WarningSignsCard: React.FC<WarningSignsCardProps> = ({ locale }) => {
  const warningsSudden = {
    en: [
      'Sudden weight gain of more than 1 kg (2.2 lbs) in a week',
      'Sudden swelling in face, hands, or feet',
      'Severe headaches or vision changes',
      'Upper abdominal pain',
      'Decreased fetal movement',
    ],
    tr: [
      'Bir haftada 1 kg\'dan fazla ani kilo artışı',
      'Yüz, el veya ayaklarda ani şişlik',
      'Şiddetli baş ağrısı veya görme değişiklikleri',
      'Üst karın ağrısı',
      'Bebeğin hareketlerinde azalma',
    ],
  };

  const warningsNoGain = {
    en: [
      'No weight gain for 2 or more weeks during 2nd/3rd trimester',
      'Weight loss at any point after first trimester',
      'Persistent nausea/vomiting preventing eating',
      'Extreme fatigue or dizziness',
    ],
    tr: [
      '2. veya 3. trimesterde 2 hafta veya daha uzun süre kilo almama',
      'İlk trimester sonrasında herhangi bir noktada kilo kaybı',
      'Yemeyi engelleyen sürekli bulantı/kusma',
      'Aşırı yorgunluk veya baş dönmesi',
    ],
  };

  return (
    <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-white">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600">
          <ShieldAlert className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-red-900">
            {locale === 'tr' ? 'Uyarı İşaretleri' : 'Warning Signs'}
          </h3>
          <p className="text-sm text-red-700">
            {locale === 'tr'
              ? 'Bu durumlardan birini yaşıyorsanız doktorunuzu arayın'
              : 'Contact your doctor if you experience any of these'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Sudden weight gain warnings */}
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <h4 className="mb-3 font-semibold text-orange-900">
            {locale === 'tr' ? 'Ani Kilo Artışı' : 'Sudden Weight Gain'}
          </h4>
          <ul className="space-y-2">
            {warningsSudden[locale].map((warning, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-orange-800">
                <span className="mt-0.5 text-orange-500">!</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-orange-700">
            {locale === 'tr'
              ? 'Bu belirtiler preeklampsi işareti olabilir.'
              : 'These symptoms could indicate preeclampsia.'}
          </p>
        </div>

        {/* No weight gain warnings */}
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h4 className="mb-3 font-semibold text-amber-900">
            {locale === 'tr' ? 'Yetersiz Kilo Alımı' : 'Insufficient Weight Gain'}
          </h4>
          <ul className="space-y-2">
            {warningsNoGain[locale].map((warning, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-amber-800">
                <span className="mt-0.5 text-amber-500">!</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-amber-700">
            {locale === 'tr'
              ? 'Yetersiz kilo alımı bebek gelişimini etkileyebilir.'
              : 'Insufficient weight gain can affect baby\'s development.'}
          </p>
        </div>
      </div>

      {/* Emergency contact */}
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-red-100 p-4">
        <Phone className="h-5 w-5 flex-shrink-0 text-red-700" />
        <p className="text-sm font-medium text-red-900">
          {locale === 'tr'
            ? 'Acil bir durum olduğunu düşünüyorsanız, 112\'yi arayın veya en yakın acil servise gidin.'
            : 'If you think you have a medical emergency, call emergency services or go to the nearest emergency department.'}
        </p>
      </div>
    </Card>
  );
};

export default WarningSignsCard;
