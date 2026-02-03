'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Info, Users, Dumbbell, Ruler, Brain } from 'lucide-react';

interface BMILimitationsProps {
  locale: 'en' | 'tr';
}

const BMILimitations: React.FC<BMILimitationsProps> = ({ locale }) => {
  const limitations = [
    {
      icon: Dumbbell,
      title: {
        en: 'Does Not Measure Body Composition',
        tr: 'Vücut Kompozisyonunu Ölçmez',
      },
      description: {
        en: 'BMI cannot distinguish between muscle mass and fat mass. Athletes and bodybuilders with high muscle mass may be classified as overweight or obese despite having low body fat.',
        tr: 'VKİ kas kütlesi ile yağ kütlesi arasında ayrım yapamaz. Yüksek kas kütlesine sahip sporcular ve vücut geliştiriciler düşük vücut yağına sahip olmalarına rağmen fazla kilolu veya obez olarak sınıflandırılabilir.',
      },
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Users,
      title: {
        en: 'Not Suitable for All Demographics',
        tr: 'Tüm Demografiler İçin Uygun Değil',
      },
      description: {
        en: 'BMI standards are based primarily on European populations. Different ethnic groups may have different health risks at the same BMI levels. For example, Asian populations tend to have higher health risks at lower BMI values.',
        tr: 'VKİ standartları öncelikle Avrupa popülasyonlarına dayanmaktadır. Farklı etnik gruplar aynı VKİ seviyelerinde farklı sağlık risklerine sahip olabilir. Örneğin, Asya popülasyonları daha düşük VKİ değerlerinde daha yüksek sağlık risklerine sahip olma eğilimindedir.',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Ruler,
      title: {
        en: 'Ignores Fat Distribution',
        tr: 'Yağ Dağılımını Göz Ardı Eder',
      },
      description: {
        en: 'Where you carry fat matters for health. Visceral fat (around organs) is more dangerous than subcutaneous fat. BMI does not measure fat distribution, which is a better indicator of health risks.',
        tr: 'Yağı nerede taşıdığınız sağlık için önemlidir. Viseral yağ (organlar etrafında) deri altı yağından daha tehlikelidir. VKİ, sağlık risklerinin daha iyi bir göstergesi olan yağ dağılımını ölçmez.',
      },
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Brain,
      title: {
        en: 'Does Not Consider Other Health Markers',
        tr: 'Diğer Sağlık Göstergelerini Dikkate Almaz',
      },
      description: {
        en: 'BMI is just one metric. Blood pressure, cholesterol, blood sugar, physical fitness, and family history are equally or more important for assessing overall health.',
        tr: 'VKİ sadece bir ölçüttür. Kan basıncı, kolesterol, kan şekeri, fiziksel uygunluk ve aile geçmişi genel sağlığı değerlendirmek için eşit veya daha önemlidir.',
      },
      color: 'from-orange-500 to-red-500',
    },
  ];

  const alternatives = [
    {
      name: {
        en: 'Waist Circumference',
        tr: 'Bel Çevresi',
      },
      description: {
        en: 'Measures abdominal fat, a better predictor of health risks',
        tr: 'Karın yağını ölçer, sağlık risklerinin daha iyi bir göstergesi',
      },
    },
    {
      name: {
        en: 'Waist-to-Hip Ratio',
        tr: 'Bel-Kalça Oranı',
      },
      description: {
        en: 'Compares waist and hip measurements to assess fat distribution',
        tr: 'Yağ dağılımını değerlendirmek için bel ve kalça ölçümlerini karşılaştırır',
      },
    },
    {
      name: {
        en: 'Body Fat Percentage',
        tr: 'Vücut Yağ Yüzdesi',
      },
      description: {
        en: 'Direct measurement of body fat vs. lean mass',
        tr: 'Vücut yağı ve yağsız kütle doğrudan ölçümü',
      },
    },
    {
      name: {
        en: 'DEXA Scan',
        tr: 'DEXA Taraması',
      },
      description: {
        en: 'Most accurate body composition analysis available',
        tr: 'Mevcut en doğru vücut kompozisyonu analizi',
      },
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'VKİ Sınırlamaları' : 'BMI Limitations'}
          </h3>
        </div>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'VKİ yararlı bir araç olsa da kısıtlamaları vardır'
            : 'While BMI is a useful tool, it has limitations'}
        </p>
      </div>

      {/* Limitations */}
      <div className="mb-6 space-y-4">
        {limitations.map((limitation, index) => {
          const Icon = limitation.icon;
          return (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${limitation.color}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-neutral-900">{limitation.title[locale]}</h4>
              </div>
              <p className="text-sm text-neutral-600">{limitation.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* Alternative Measurements */}
      <div className="rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
        <h4 className="mb-3 font-semibold text-blue-900">
          {locale === 'tr' ? '📏 Alternatif Ölçümler' : '📏 Alternative Measurements'}
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {alternatives.map((alt, index) => (
            <div key={index} className="rounded-lg bg-white p-3">
              <div className="mb-1 font-medium text-neutral-900">{alt.name[locale]}</div>
              <div className="text-xs text-neutral-600">{alt.description[locale]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-4 rounded-lg bg-amber-50 p-3">
        <p className="text-sm text-amber-900">
          {locale === 'tr'
            ? '💡 En iyi sonuçlar için VKİ\'yi diğer sağlık ölçütleri ve profesyonel tıbbi tavsiye ile birlikte kullanın. VKİ bir başlangıç noktasıdır, tam bir sağlık değerlendirmesi değildir.'
            : '💡 For best results, use BMI alongside other health metrics and professional medical advice. BMI is a starting point, not a complete health assessment.'}
        </p>
      </div>
    </Card>
  );
};

export default BMILimitations;
