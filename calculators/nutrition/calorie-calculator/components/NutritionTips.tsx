'use client';

import React from 'react';
import { Card } from '@/components/ui';
import {
  Apple,
  Droplets,
  Moon,
  Dumbbell,
  Brain,
  Coffee,
  Utensils,
  TrendingUp,
} from 'lucide-react';

interface NutritionTipsProps {
  goal: 'lose' | 'maintain' | 'gain';
  locale: 'en' | 'tr';
}

const NutritionTips: React.FC<NutritionTipsProps> = ({ goal, locale }) => {
  const tips = {
    lose: [
      {
        icon: Apple,
        title: {
          en: 'Choose Nutrient-Dense Foods',
          tr: 'Besin Değeri Yüksek Gıdalar Seçin',
        },
        description: {
          en: 'Focus on whole grains, lean proteins, fruits, and vegetables to feel full with fewer calories.',
          tr: 'Daha az kaloriyle tok hissetmek için tam tahıllar, yağsız proteinler, meyve ve sebzelere odaklanın.',
        },
        color: 'from-green-500 to-emerald-500',
      },
      {
        icon: Droplets,
        title: {
          en: 'Stay Hydrated',
          tr: 'Bol Su İçin',
        },
        description: {
          en: 'Drink at least 8 glasses of water daily. Sometimes thirst is confused with hunger.',
          tr: 'Günde en az 8 bardak su için. Bazen susuzluk açlıkla karıştırılır.',
        },
        color: 'from-blue-500 to-cyan-500',
      },
      {
        icon: Utensils,
        title: {
          en: 'Practice Portion Control',
          tr: 'Porsiyon Kontrolü Yapın',
        },
        description: {
          en: 'Use smaller plates and measure your portions to avoid overeating.',
          tr: 'Aşırı yemeyi önlemek için daha küçük tabaklar kullanın ve porsiyonlarınızı ölçün.',
        },
        color: 'from-orange-500 to-red-500',
      },
      {
        icon: Moon,
        title: {
          en: 'Get Quality Sleep',
          tr: 'Kaliteli Uyku',
        },
        description: {
          en: 'Aim for 7-9 hours of sleep. Poor sleep disrupts hunger hormones and increases cravings.',
          tr: '7-9 saat uyumayı hedefleyin. Kötü uyku, açlık hormonlarını bozar ve istekleri artırır.',
        },
        color: 'from-purple-500 to-indigo-500',
      },
    ],
    maintain: [
      {
        icon: Dumbbell,
        title: {
          en: 'Balance Your Activity',
          tr: 'Aktivite Dengesini Koruyun',
        },
        description: {
          en: 'Maintain consistent exercise routine to keep your metabolism steady.',
          tr: 'Metabolizmanızı sabit tutmak için tutarlı egzersiz rutini sürdürün.',
        },
        color: 'from-blue-500 to-indigo-500',
      },
      {
        icon: Apple,
        title: {
          en: 'Eat Balanced Meals',
          tr: 'Dengeli Öğünler Tüketin',
        },
        description: {
          en: 'Include a mix of protein, carbs, and healthy fats in every meal.',
          tr: 'Her öğünde protein, karbonhidrat ve sağlıklı yağ karışımı bulundurun.',
        },
        color: 'from-green-500 to-emerald-500',
      },
      {
        icon: Brain,
        title: {
          en: 'Listen to Your Body',
          tr: 'Vücudunuzu Dinleyin',
        },
        description: {
          en: 'Eat when hungry, stop when satisfied. Develop mindful eating habits.',
          tr: 'Acıktığınızda yiyin, doyduğunuzda durun. Bilinçli yeme alışkanlıkları geliştirin.',
        },
        color: 'from-purple-500 to-pink-500',
      },
      {
        icon: Coffee,
        title: {
          en: 'Track Your Progress',
          tr: 'İlerlemenizi Takip Edin',
        },
        description: {
          en: 'Weigh yourself weekly to ensure you are maintaining your target weight.',
          tr: 'Hedef kilonuzu koruduğunuzdan emin olmak için haftalık tartılın.',
        },
        color: 'from-orange-500 to-amber-500',
      },
    ],
    gain: [
      {
        icon: TrendingUp,
        title: {
          en: 'Eat More Frequently',
          tr: 'Daha Sık Yiyin',
        },
        description: {
          en: 'Aim for 5-6 smaller meals throughout the day to increase calorie intake.',
          tr: 'Kalori alımını artırmak için gün boyunca 5-6 küçük öğün hedefleyin.',
        },
        color: 'from-orange-500 to-red-500',
      },
      {
        icon: Dumbbell,
        title: {
          en: 'Focus on Strength Training',
          tr: 'Kuvvet Antrenmanına Odaklanın',
        },
        description: {
          en: 'Build muscle mass with resistance training 3-4 times per week.',
          tr: 'Haftada 3-4 kez direnç antrenmanı ile kas kütlesi oluşturun.',
        },
        color: 'from-blue-500 to-indigo-500',
      },
      {
        icon: Apple,
        title: {
          en: 'Choose Calorie-Dense Foods',
          tr: 'Kalori Yoğun Gıdalar Seçin',
        },
        description: {
          en: 'Include nuts, nut butters, whole milk, avocados, and healthy oils in your diet.',
          tr: 'Diyetinize kuruyemiş, fıstık ezmesi, tam yağlı süt, avokado ve sağlıklı yağlar ekleyin.',
        },
        color: 'from-green-500 to-emerald-500',
      },
      {
        icon: Coffee,
        title: {
          en: 'Post-Workout Nutrition',
          tr: 'Antrenman Sonrası Beslenme',
        },
        description: {
          en: 'Consume protein and carbs within 30-60 minutes after training for optimal recovery.',
          tr: 'Optimal toparlanma için antrenman sonrası 30-60 dakika içinde protein ve karbonhidrat tüketin.',
        },
        color: 'from-purple-500 to-pink-500',
      },
    ],
  };

  const selectedTips = tips[goal];

  return (
    <Card>
      <h3 className="mb-6 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Beslenme İpuçları' : 'Nutrition Tips'}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {selectedTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div
              key={index}
              className="group rounded-lg border-2 border-neutral-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${tip.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="flex-1 font-semibold text-neutral-900">
                  {tip.title[locale]}
                </h4>
              </div>
              <p className="text-sm text-neutral-600">{tip.description[locale]}</p>
            </div>
          );
        })}
      </div>

      {/* Additional General Tips */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
        <h4 className="mb-2 font-semibold text-neutral-900">
          {locale === 'tr' ? '💡 Genel İpuçları' : '💡 General Tips'}
        </h4>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">•</span>
            <span>
              {locale === 'tr'
                ? 'Duyduğunuz her diyeti denemek yerine tutarlılığa odaklanın'
                : 'Focus on consistency rather than trying every diet you hear about'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">•</span>
            <span>
              {locale === 'tr'
                ? 'İlerlemenizi takip edin ama günlük tartılmaktan kaçının'
                : 'Track your progress but avoid weighing yourself daily'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">•</span>
            <span>
              {locale === 'tr'
                ? 'Stres yönetimi ve zihinsel sağlık beslenme kadar önemlidir'
                : 'Stress management and mental health are as important as nutrition'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">•</span>
            <span>
              {locale === 'tr'
                ? 'Özel tavsiyeler için bir diyetisyen veya beslenme uzmanına danışın'
                : 'Consult a dietitian or nutritionist for personalized advice'}
            </span>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default NutritionTips;
