'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Calculator, Activity, Target, TrendingUp, BookOpen, Users } from 'lucide-react';

interface HowItWorksProps {
  locale: 'en' | 'tr';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ locale }) => {
  const steps = [
    {
      icon: Calculator,
      title: {
        en: 'Calculate BMR',
        tr: 'BMR Hesaplama',
      },
      description: {
        en: 'Your Basal Metabolic Rate (BMR) is calculated using the Mifflin-St Jeor equation, which considers your age, gender, height, and weight. This represents the calories your body burns at rest.',
        tr: 'Bazal Metabolizma Hızınız (BMR), yaş, cinsiyet, boy ve kilonuzu dikkate alan Mifflin-St Jeor denklemi kullanılarak hesaplanır. Bu, vücudunuzun dinlenme halinde yaktığı kaloriyi temsil eder.',
      },
      formula: {
        en: 'Men: 10×weight(kg) + 6.25×height(cm) - 5×age + 5',
        tr: 'Erkek: 10×kilo(kg) + 6.25×boy(cm) - 5×yaş + 5',
      },
    },
    {
      icon: Activity,
      title: {
        en: 'Apply Activity Multiplier',
        tr: 'Aktivite Çarpanı Uygulama',
      },
      description: {
        en: 'Your BMR is multiplied by an activity factor (1.2-1.9) based on your lifestyle. This gives your Total Daily Energy Expenditure (TDEE) - the total calories you burn each day.',
        tr: 'BMR\'ınız, yaşam tarzınıza göre bir aktivite faktörü (1.2-1.9) ile çarpılır. Bu, Toplam Günlük Enerji Harcamanızı (TDEE) verir - her gün yaktığınız toplam kalori.',
      },
      formula: {
        en: 'TDEE = BMR × Activity Factor',
        tr: 'TDEE = BMR × Aktivite Faktörü',
      },
    },
    {
      icon: Target,
      title: {
        en: 'Adjust for Goals',
        tr: 'Hedefe Göre Ayarlama',
      },
      description: {
        en: 'Based on your goal (lose, maintain, or gain weight), we adjust your TDEE. Weight loss requires a caloric deficit (eating less than TDEE), while weight gain needs a surplus.',
        tr: 'Hedefinize (kilo verme, koruma veya alma) göre TDEE\'niz ayarlanır. Kilo kaybı kalorik açık gerektirir (TDEE\'den az yemek), kilo alımı ise fazlalık gerektirir.',
      },
      formula: {
        en: 'Weight Loss: TDEE - 20% | Maintain: TDEE | Gain: TDEE + 20%',
        tr: 'Kilo Verme: TDEE - %20 | Koruma: TDEE | Alma: TDEE + %20',
      },
    },
  ];

  const scienceFacts = [
    {
      icon: BookOpen,
      title: {
        en: 'Why Mifflin-St Jeor?',
        tr: 'Neden Mifflin-St Jeor?',
      },
      description: {
        en: 'The Mifflin-St Jeor equation (1990) is considered more accurate than the older Harris-Benedict equation (1919), especially for modern populations. It has been validated by numerous studies and is recommended by the Academy of Nutrition and Dietetics.',
        tr: 'Mifflin-St Jeor denklemi (1990), eski Harris-Benedict denkleminden (1919) daha doğru kabul edilir, özellikle modern popülasyonlar için. Birçok çalışmayla doğrulanmıştır ve Beslenme ve Diyetetik Akademisi tarafından önerilmektedir.',
      },
    },
    {
      icon: Users,
      title: {
        en: 'Individual Variations',
        tr: 'Bireysel Farklılıklar',
      },
      description: {
        en: 'While these formulas provide good estimates, individual metabolic rates can vary by ±10-15% due to factors like genetics, muscle mass, hormones, and previous dieting history. Use these numbers as a starting point and adjust based on your results.',
        tr: 'Bu formüller iyi tahminler sağlarken, bireysel metabolizma hızları genetik, kas kütlesi, hormonlar ve önceki diyet geçmişi gibi faktörler nedeniyle ±%10-15 değişebilir. Bu sayıları başlangıç noktası olarak kullanın ve sonuçlarınıza göre ayarlayın.',
      },
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Nasıl Çalışır?' : 'How It Works'}
        </h3>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Kalori hesaplamamızın arkasındaki bilim'
            : 'The science behind our calorie calculation'}
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 h-full w-0.5 bg-neutral-200"></div>
              )}
              <div className="flex gap-4">
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm font-medium text-primary-600">
                      {locale === 'tr' ? 'Adım' : 'Step'} {index + 1}
                    </span>
                    <h4 className="font-semibold text-neutral-900">{step.title[locale]}</h4>
                  </div>
                  <p className="mb-3 text-sm text-neutral-600">{step.description[locale]}</p>
                  <div className="rounded-lg bg-neutral-100 px-3 py-2">
                    <code className="text-xs font-mono text-neutral-700">{step.formula[locale]}</code>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Science Facts */}
      <div className="mt-8 space-y-4">
        <h4 className="font-semibold text-neutral-900">
          {locale === 'tr' ? 'Bilimsel Temeller' : 'Scientific Foundation'}
        </h4>
        {scienceFacts.map((fact, index) => {
          const Icon = fact.icon;
          return (
            <div
              key={index}
              className="rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold text-blue-900">{fact.title[locale]}</h5>
              </div>
              <p className="text-sm text-blue-800">{fact.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-6 rounded-lg bg-amber-50 p-4">
        <h5 className="mb-2 font-semibold text-amber-900">
          {locale === 'tr' ? '⚡ Hızlı İpucu' : '⚡ Quick Tip'}
        </h5>
        <p className="text-sm text-amber-800">
          {locale === 'tr'
            ? 'En iyi sonuçlar için, hesaplanan kalorilerinizle 2-3 hafta başlayın ve sonra kilonuzdaki değişikliklere göre ayarlama yapın. Haftada 0.5-1 kg kilo kaybı veya 0.25-0.5 kg kilo alımı sağlıklı bir hız olarak kabul edilir.'
            : 'For best results, start with your calculated calories for 2-3 weeks and then adjust based on changes in your weight. A rate of 0.5-1 kg weight loss or 0.25-0.5 kg weight gain per week is considered healthy.'}
        </p>
      </div>
    </Card>
  );
};

export default HowItWorks;
