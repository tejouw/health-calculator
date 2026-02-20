'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { BodyTypeResult } from '../bodyTypeTypes';
import { getBodyTypeInfo } from '../bodyTypeLogic';
import { UtensilsCrossed, Apple, Beef, Droplets } from 'lucide-react';

interface BodyTypeDietProps {
  result: BodyTypeResult;
  locale: 'en' | 'tr';
}

const BodyTypeDiet: React.FC<BodyTypeDietProps> = ({ result, locale }) => {
  const typeInfo = getBodyTypeInfo(result.primaryType);

  const mealPlanMap = {
    ectomorph: {
      en: {
        breakfast: 'Oatmeal with banana, peanut butter & whole milk + 3 scrambled eggs',
        snack1: 'Trail mix with nuts, dried fruit & dark chocolate',
        lunch: 'Brown rice, grilled chicken breast, avocado & vegetables',
        snack2: 'Greek yogurt with granola & honey',
        dinner: 'Salmon, sweet potato, quinoa & steamed broccoli',
        evening: 'Casein protein shake with whole milk & banana',
      },
      tr: {
        breakfast: 'Yulaf ezmesi, muz, fıstık ezmesi & tam yağlı süt + 3 çırpılmış yumurta',
        snack1: 'Kuruyemiş, kuru meyve & bitter çikolata karışımı',
        lunch: 'Esmer pirinç, ızgara tavuk göğsü, avokado & sebzeler',
        snack2: 'Granola & bal ile Yunan yoğurdu',
        dinner: 'Somon, tatlı patates, kinoa & buharda brokoli',
        evening: 'Tam yağlı süt & muz ile kazein protein shake',
      },
    },
    mesomorph: {
      en: {
        breakfast: 'Whole grain toast, 2 eggs, avocado & mixed berries',
        snack1: 'Apple with almond butter',
        lunch: 'Grilled chicken salad with quinoa, olive oil dressing',
        snack2: 'Protein smoothie with banana & spinach',
        dinner: 'Lean steak, roasted vegetables & brown rice',
        evening: 'Cottage cheese with walnuts',
      },
      tr: {
        breakfast: 'Tam buğday tost, 2 yumurta, avokado & karışık meyveler',
        snack1: 'Badem ezmesi ile elma',
        lunch: 'Kinoa ile ızgara tavuk salatası, zeytinyağlı sos',
        snack2: 'Muz & ıspanak ile protein smoothie',
        dinner: 'Yağsız biftek, fırınlanmış sebzeler & esmer pirinç',
        evening: 'Ceviz ile süzme peynir',
      },
    },
    endomorph: {
      en: {
        breakfast: 'Vegetable omelette (3 eggs) with spinach & feta cheese',
        snack1: 'Celery sticks with hummus',
        lunch: 'Grilled fish, large mixed green salad & lemon dressing',
        snack2: 'A handful of almonds & green tea',
        dinner: 'Turkey breast, roasted cauliflower & sauteed zucchini',
        evening: 'Greek yogurt with a few berries (if needed)',
      },
      tr: {
        breakfast: 'Ispanak & beyaz peynir ile sebzeli omlet (3 yumurta)',
        snack1: 'Humus ile kereviz çubukları',
        lunch: 'Izgara balık, büyük karışık yeşil salata & limon sosu',
        snack2: 'Bir avuç badem & yeşil çay',
        dinner: 'Hindi göğsü, fırında karnabahar & sote kabak',
        evening: 'Birkaç meyve ile Yunan yoğurdu (gerekirse)',
      },
    },
  };

  const baseType = result.primaryType.includes('-')
    ? result.primaryType.split('-')[0] === 'ecto' ? 'ectomorph'
      : result.primaryType.split('-')[0] === 'meso' ? 'mesomorph'
      : 'endomorph'
    : result.primaryType;

  const mealPlan = mealPlanMap[baseType as keyof typeof mealPlanMap];

  const mealLabels = {
    breakfast: { en: 'Breakfast', tr: 'Kahvaltı', icon: '🌅', time: '07:00-08:00' },
    snack1: { en: 'Morning Snack', tr: 'Kuşluk', icon: '🍎', time: '10:00-10:30' },
    lunch: { en: 'Lunch', tr: 'Öğle Yemeği', icon: '🍽️', time: '12:30-13:30' },
    snack2: { en: 'Afternoon Snack', tr: 'İkindi', icon: '🥤', time: '15:30-16:00' },
    dinner: { en: 'Dinner', tr: 'Akşam Yemeği', icon: '🥗', time: '19:00-20:00' },
    evening: { en: 'Evening', tr: 'Gece', icon: '🌙', time: '21:00-21:30' },
  };

  return (
    <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
          <UtensilsCrossed className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-900">
            {locale === 'tr' ? 'Kişiselleştirilmiş Beslenme Planı' : 'Personalized Nutrition Plan'}
          </h3>
          <p className="text-sm text-green-700">
            {typeInfo.label[locale]} {locale === 'tr' ? 'tipi için optimize edilmiş' : 'type optimized'}
          </p>
        </div>
      </div>

      {/* Macro Split Visual */}
      <div className="mb-6 rounded-xl bg-white/70 p-4">
        <h4 className="mb-3 text-center text-sm font-semibold text-neutral-800">
          {locale === 'tr' ? 'Günlük Makro Dağılımı' : 'Daily Macro Distribution'}
        </h4>
        <div className="flex h-6 overflow-hidden rounded-full">
          <div
            className="flex items-center justify-center bg-red-400 text-xs font-bold text-white"
            style={{ width: `${typeInfo.macroSplit.protein}%` }}
          >
            P {typeInfo.macroSplit.protein}%
          </div>
          <div
            className="flex items-center justify-center bg-blue-400 text-xs font-bold text-white"
            style={{ width: `${typeInfo.macroSplit.carbs}%` }}
          >
            C {typeInfo.macroSplit.carbs}%
          </div>
          <div
            className="flex items-center justify-center bg-yellow-400 text-xs font-bold text-white"
            style={{ width: `${typeInfo.macroSplit.fat}%` }}
          >
            F {typeInfo.macroSplit.fat}%
          </div>
        </div>
        <div className="mt-2 flex justify-around text-xs text-neutral-600">
          <span className="flex items-center gap-1">
            <Beef className="h-3 w-3 text-red-500" />
            {locale === 'tr' ? 'Protein' : 'Protein'}
          </span>
          <span className="flex items-center gap-1">
            <Apple className="h-3 w-3 text-blue-500" />
            {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
          </span>
          <span className="flex items-center gap-1">
            <Droplets className="h-3 w-3 text-yellow-500" />
            {locale === 'tr' ? 'Yağ' : 'Fat'}
          </span>
        </div>
      </div>

      {/* Diet Tips */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-green-800">
          {locale === 'tr' ? 'Beslenme İpuçları' : 'Nutrition Tips'}
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {typeInfo.diet[locale].map((tip, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-white/60 p-3">
              <span className="mt-0.5 text-green-500">&#x2713;</span>
              <span className="text-sm text-neutral-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sample Meal Plan */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-green-800">
          {locale === 'tr' ? 'Örnek Günlük Yemek Planı' : 'Sample Daily Meal Plan'}
        </h4>
        <div className="space-y-2">
          {(Object.entries(mealLabels) as [keyof typeof mealLabels, typeof mealLabels[keyof typeof mealLabels]][]).map(
            ([key, label]) => (
              <div
                key={key}
                className="flex items-start gap-3 rounded-lg bg-white/60 p-3"
              >
                <span className="text-lg">{label.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-green-700">{label[locale]}</span>
                    <span className="text-xs text-neutral-500">{label.time}</span>
                  </div>
                  <p className="text-sm text-neutral-700">
                    {mealPlan[locale][key]}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeDiet;
