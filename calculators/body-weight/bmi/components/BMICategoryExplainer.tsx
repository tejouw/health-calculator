'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { AlertCircle, Heart, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { BMICategory } from '../bmiTypes';

interface BMICategoryExplainerProps {
  bmi: number;
  category: BMICategory;
  locale: 'en' | 'tr';
}

const BMICategoryExplainer: React.FC<BMICategoryExplainerProps> = ({ bmi, category, locale }) => {
  const categoryInfo = {
    underweight: {
      icon: AlertCircle,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      risks: {
        en: [
          'Weakened immune system',
          'Nutritional deficiencies',
          'Decreased bone density',
          'Fertility issues',
          'Delayed wound healing',
        ],
        tr: [
          'Zayıflamış bağışıklık sistemi',
          'Besin eksiklikleri',
          'Azalmış kemik yoğunluğu',
          'Doğurganlık sorunları',
          'Yara iyileşmesinde gecikme',
        ],
      },
      recommendations: {
        en: [
          'Increase calorie intake with nutrient-dense foods',
          'Eat more frequently (5-6 small meals)',
          'Add healthy fats and proteins',
          'Consider strength training to build muscle',
          'Consult a dietitian for personalized guidance',
        ],
        tr: [
          'Besin değeri yüksek gıdalarla kalori alımını artırın',
          'Daha sık yemek yiyin (5-6 küçük öğün)',
          'Sağlıklı yağlar ve proteinler ekleyin',
          'Kas oluşturmak için kuvvet antrenmanı düşünün',
          'Kişiselleştirilmiş rehberlik için diyetisyene danışın',
        ],
      },
    },
    normal: {
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      risks: {
        en: [
          'Optimal health status',
          'Lower risk of chronic diseases',
          'Better cardiovascular health',
          'Improved energy levels',
          'Healthy metabolic function',
        ],
        tr: [
          'Optimal sağlık durumu',
          'Kronik hastalık riski daha düşük',
          'Daha iyi kardiyovasküler sağlık',
          'Gelişmiş enerji seviyeleri',
          'Sağlıklı metabolik fonksiyon',
        ],
      },
      recommendations: {
        en: [
          'Maintain balanced nutrition',
          'Continue regular physical activity',
          'Monitor weight periodically',
          'Stay hydrated and get adequate sleep',
          'Keep stress levels manageable',
        ],
        tr: [
          'Dengeli beslenmeyi sürdürün',
          'Düzenli fiziksel aktiviteye devam edin',
          'Kilonuzu periyodik olarak izleyin',
          'Hidrate kalın ve yeterli uyuyun',
          'Stres seviyelerini yönetilebilir tutun',
        ],
      },
    },
    overweight: {
      icon: Activity,
      color: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-900',
      risks: {
        en: [
          'Increased risk of type 2 diabetes',
          'Higher blood pressure',
          'Elevated cholesterol levels',
          'Joint stress and pain',
          'Sleep apnea risk',
        ],
        tr: [
          'Tip 2 diyabet riski artışı',
          'Yüksek kan basıncı',
          'Yüksek kolesterol seviyeleri',
          'Eklem stresi ve ağrısı',
          'Uyku apnesi riski',
        ],
      },
      recommendations: {
        en: [
          'Create a modest calorie deficit (300-500 cal)',
          'Increase daily physical activity',
          'Focus on whole foods and vegetables',
          'Limit processed foods and added sugars',
          'Set realistic weight loss goals (0.5-1 kg/week)',
        ],
        tr: [
          'Hafif kalori açığı oluşturun (300-500 kcal)',
          'Günlük fiziksel aktiviteyi artırın',
          'Tam gıdalar ve sebzelere odaklanın',
          'İşlenmiş gıda ve eklenmiş şekerleri sınırlayın',
          'Gerçekçi kilo kaybı hedefleri belirleyin (0.5-1 kg/hafta)',
        ],
      },
    },
    obese: {
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-200',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-900',
      risks: {
        en: [
          'Significantly higher diabetes risk',
          'Heart disease and stroke risk',
          'Certain types of cancer',
          'Severe joint problems',
          'Fatty liver disease',
        ],
        tr: [
          'Önemli ölçüde yüksek diyabet riski',
          'Kalp hastalığı ve inme riski',
          'Belirli kanser türleri',
          'Ciddi eklem sorunları',
          'Yağlı karaciğer hastalığı',
        ],
      },
      recommendations: {
        en: [
          'Consult healthcare provider for comprehensive plan',
          'Consider medical weight management programs',
          'Start with gradual lifestyle changes',
          'Join support groups or work with professionals',
          'Monitor health markers regularly (blood sugar, BP)',
        ],
        tr: [
          'Kapsamlı plan için sağlık sağlayıcısına danışın',
          'Tıbbi kilo yönetim programlarını düşünün',
          'Kademeli yaşam tarzı değişiklikleri ile başlayın',
          'Destek gruplarına katılın veya profesyonellerle çalışın',
          'Sağlık göstergelerini düzenli izleyin (kan şekeri, tansiyon)',
        ],
      },
    },
    severely_obese: {
      icon: AlertTriangle,
      color: 'from-red-500 to-rose-600',
      borderColor: 'border-red-200',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900',
      risks: {
        en: [
          'Very high risk of chronic diseases',
          'Severe cardiovascular complications',
          'Limited mobility and quality of life',
          'Multiple organ system stress',
          'Significantly reduced life expectancy',
        ],
        tr: [
          'Çok yüksek kronik hastalık riski',
          'Ciddi kardiyovasküler komplikasyonlar',
          'Sınırlı mobilite ve yaşam kalitesi',
          'Çoklu organ sistemi stresi',
          'Önemli ölçüde azalmış yaşam beklentisi',
        ],
      },
      recommendations: {
        en: [
          'Immediate medical consultation required',
          'Consider bariatric surgery evaluation',
          'Work with multidisciplinary medical team',
          'Address underlying health conditions',
          'Focus on health improvements, not just weight',
        ],
        tr: [
          'Acil tıbbi konsültasyon gereklidir',
          'Bariyatrik cerrahi değerlendirmesi düşünün',
          'Multidisipliner tıbbi ekiple çalışın',
          'Altta yatan sağlık durumlarını ele alın',
          'Sadece kiloya değil, sağlık iyileştirmelerine odaklanın',
        ],
      },
    },
  };

  const info = categoryInfo[category];
  const Icon = info.icon;

  return (
    <Card className={`border-2 ${info.borderColor} ${info.bgColor}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${info.color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className={`text-xl font-bold ${info.textColor}`}>
            {locale === 'tr' ? 'Kategori Analizi' : 'Category Analysis'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr' ? `VKİ: ${bmi}` : `BMI: ${bmi}`}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Health Risks/Benefits */}
        <div>
          <h4 className={`mb-3 font-semibold ${info.textColor}`}>
            {category === 'normal'
              ? locale === 'tr'
                ? '✓ Sağlık Faydaları'
                : '✓ Health Benefits'
              : locale === 'tr'
                ? '⚠️ Sağlık Riskleri'
                : '⚠️ Health Risks'}
          </h4>
          <ul className="space-y-2">
            {info.risks[locale].map((risk, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className={`mt-0.5 ${info.textColor}`}>•</span>
                <span>{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div>
          <h4 className={`mb-3 font-semibold ${info.textColor}`}>
            {locale === 'tr' ? '💡 Öneriler' : '💡 Recommendations'}
          </h4>
          <ul className="space-y-2">
            {info.recommendations[locale].map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className={`mt-0.5 ${info.textColor}`}>→</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default BMICategoryExplainer;
