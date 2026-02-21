'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Apple, Droplets, Pill, AlertCircle } from 'lucide-react';
import { BMICategory } from '../pregnancyWeightGainTypes';

interface NutritionTipsProps {
  bmiCategory: BMICategory;
  currentWeek: number;
  status: 'on-track' | 'below' | 'above';
  locale: 'en' | 'tr';
}

const NutritionTips: React.FC<NutritionTipsProps> = ({
  bmiCategory,
  currentWeek,
  status,
  locale,
}) => {
  const getTrimester = () => {
    if (currentWeek <= 13) return 1;
    if (currentWeek <= 27) return 2;
    return 3;
  };

  const trimester = getTrimester();

  const calorieNeeds = {
    1: { extra: 0, en: 'No extra calories needed', tr: 'Ekstra kaloriye gerek yok' },
    2: { extra: 340, en: '+340 kcal/day', tr: '+340 kcal/gün' },
    3: { extra: 450, en: '+450 kcal/day', tr: '+450 kcal/gün' },
  };

  const keyNutrients = [
    {
      icon: Pill,
      name: { en: 'Folic Acid', tr: 'Folik Asit' },
      amount: '400-800 mcg',
      why: {
        en: 'Critical for neural tube development, especially in first trimester',
        tr: 'Özellikle ilk trimesterde sinir tüpü gelişimi için kritik',
      },
      foods: {
        en: 'Leafy greens, fortified cereals, beans, citrus',
        tr: 'Yeşil yapraklılar, zenginleştirilmiş tahıllar, baklagiller, turunçgiller',
      },
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Pill,
      name: { en: 'Iron', tr: 'Demir' },
      amount: '27 mg',
      why: {
        en: 'Supports increased blood volume and prevents anemia',
        tr: 'Artan kan hacmini destekler ve anemiyi önler',
      },
      foods: {
        en: 'Red meat, spinach, beans, fortified cereals',
        tr: 'Kırmızı et, ıspanak, baklagiller, zenginleştirilmiş tahıllar',
      },
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: Pill,
      name: { en: 'Calcium', tr: 'Kalsiyum' },
      amount: '1000 mg',
      why: {
        en: 'Essential for baby\'s bone and teeth development',
        tr: 'Bebeğin kemik ve diş gelişimi için gerekli',
      },
      foods: {
        en: 'Dairy, fortified plant milk, broccoli, almonds',
        tr: 'Süt ürünleri, zenginleştirilmiş bitkisel süt, brokoli, badem',
      },
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Pill,
      name: { en: 'DHA/Omega-3', tr: 'DHA/Omega-3' },
      amount: '200-300 mg',
      why: {
        en: 'Crucial for baby\'s brain and eye development',
        tr: 'Bebeğin beyin ve göz gelişimi için çok önemli',
      },
      foods: {
        en: 'Fatty fish (salmon, sardines), walnuts, flaxseed',
        tr: 'Yağlı balık (somon, sardalya), ceviz, keten tohumu',
      },
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const statusTips = {
    below: {
      en: [
        'Add nutrient-dense snacks between meals (nuts, yogurt, cheese)',
        'Drink smoothies with fruits, milk, and nut butter',
        'Eat larger portions of healthy foods',
        'Consider adding avocado or olive oil to meals',
        'Discuss with your doctor if nausea is affecting eating',
      ],
      tr: [
        'Öğünler arası besin değeri yüksek atıştırmalıklar ekleyin (kuruyemiş, yoğurt, peynir)',
        'Meyve, süt ve fındık ezmesi ile smoothie için',
        'Sağlıklı gıdalardan daha büyük porsiyonlar yiyin',
        'Öğünlere avokado veya zeytinyağı eklemeyi düşünün',
        'Bulantı yemeyi etkiliyorsa doktorunuzla görüşün',
      ],
    },
    above: {
      en: [
        'Focus on nutrient-dense rather than calorie-dense foods',
        'Replace sugary drinks with water or unsweetened beverages',
        'Increase fiber intake with vegetables and whole grains',
        'Stay active with pregnancy-safe exercises (walking, swimming)',
        'Avoid eating for two - calorie needs only increase slightly',
      ],
      tr: [
        'Kalori yoğun yerine besin değeri yüksek gıdalara odaklanın',
        'Şekerli içecekleri su veya şekersiz içeceklerle değiştirin',
        'Sebzeler ve tam tahıllarla lif alımını artırın',
        'Hamilelikte güvenli egzersizlerle aktif kalın (yürüyüş, yüzme)',
        'İki kişilik yemekten kaçının - kalori ihtiyacı sadece hafifçe artar',
      ],
    },
    'on-track': {
      en: [
        'Continue your balanced eating habits',
        'Stay hydrated with 8-10 glasses of water daily',
        'Maintain regular physical activity as approved by your doctor',
        'Take your prenatal vitamins consistently',
        'Listen to your body\'s hunger and fullness cues',
      ],
      tr: [
        'Dengeli beslenme alışkanlıklarınızı sürdürün',
        'Günde 8-10 bardak su ile hidrate kalın',
        'Doktorunuzun onayladığı düzenli fiziksel aktiviteyi sürdürün',
        'Hamilelik vitaminlerinizi düzenli alın',
        'Vücudunuzun açlık ve tokluk sinyallerini dinleyin',
      ],
    },
  };

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
          <Apple className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Beslenme Rehberi' : 'Nutrition Guide'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? `${trimester}. trimester için kişiselleştirilmiş öneriler`
              : `Personalized recommendations for trimester ${trimester}`}
          </p>
        </div>
      </div>

      {/* Calorie Needs */}
      <div className="mb-6 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Droplets className="h-5 w-5 text-pink-600" />
          <h4 className="font-semibold text-pink-900">
            {locale === 'tr' ? 'Günlük Ek Kalori İhtiyacı' : 'Daily Extra Calorie Needs'}
          </h4>
        </div>
        <div className="text-3xl font-bold text-pink-600">
          {calorieNeeds[trimester as 1 | 2 | 3].extra > 0
            ? `+${calorieNeeds[trimester as 1 | 2 | 3].extra} kcal`
            : locale === 'tr'
              ? 'Ekstra yok'
              : 'None extra'}
        </div>
        <p className="mt-1 text-sm text-pink-700">
          {calorieNeeds[trimester as 1 | 2 | 3][locale]}
        </p>
      </div>

      {/* Key Nutrients */}
      <div className="mb-6">
        <h4 className="mb-3 font-semibold text-neutral-900">
          {locale === 'tr' ? 'Temel Besin Maddeleri' : 'Key Nutrients'}
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {keyNutrients.map((nutrient, index) => {
            const Icon = nutrient.icon;
            return (
              <div key={index} className="rounded-lg border border-neutral-200 bg-white p-3">
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${nutrient.color}`}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-900">{nutrient.name[locale]}</div>
                    <div className="text-xs text-neutral-500">{nutrient.amount}</div>
                  </div>
                </div>
                <p className="mb-1 text-xs text-neutral-700">{nutrient.why[locale]}</p>
                <p className="text-xs text-neutral-500">
                  <span className="font-medium">{locale === 'tr' ? 'Kaynaklar: ' : 'Sources: '}</span>
                  {nutrient.foods[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Status-based tips */}
      <div className={`rounded-xl p-4 ${
        status === 'on-track'
          ? 'bg-emerald-50'
          : status === 'below'
            ? 'bg-amber-50'
            : 'bg-orange-50'
      }`}>
        <div className="mb-3 flex items-center gap-2">
          <AlertCircle className={`h-5 w-5 ${
            status === 'on-track'
              ? 'text-emerald-600'
              : status === 'below'
                ? 'text-amber-600'
                : 'text-orange-600'
          }`} />
          <h4 className={`font-semibold ${
            status === 'on-track'
              ? 'text-emerald-900'
              : status === 'below'
                ? 'text-amber-900'
                : 'text-orange-900'
          }`}>
            {status === 'on-track'
              ? locale === 'tr'
                ? 'Harika Gidiyorsunuz!'
                : 'You\'re Doing Great!'
              : status === 'below'
                ? locale === 'tr'
                  ? 'Kilo Alımınızı Artırmanız Önerilir'
                  : 'Consider Increasing Weight Gain'
                : locale === 'tr'
                  ? 'Kilo Alımınızı Yavaşlatmanız Önerilir'
                  : 'Consider Slowing Weight Gain'}
          </h4>
        </div>
        <ul className="space-y-2">
          {statusTips[status][locale].map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-0.5">-</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default NutritionTips;
