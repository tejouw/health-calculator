'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/ui';
import { Utensils, ChefHat, Coffee, Sun, Sunset, Moon } from 'lucide-react';

interface MealPlanSuggestionsProps {
  dailyCalories: number;
  locale: 'en' | 'tr';
}

const MealPlanSuggestions: React.FC<MealPlanSuggestionsProps> = ({ dailyCalories, locale }) => {
  const [selectedPlan, setSelectedPlan] = useState<'balanced' | 'lowcarb' | 'highprotein'>(
    'balanced'
  );

  // Calculate meal distributions
  const mealPlans = {
    balanced: {
      name: { en: 'Balanced Diet', tr: 'Dengeli Diyet' },
      description: {
        en: '40% Carbs, 30% Protein, 30% Fat',
        tr: '%40 Karbonhidrat, %30 Protein, %30 Yağ',
      },
      meals: [
        {
          name: { en: 'Breakfast', tr: 'Kahvaltı' },
          percentage: 25,
          icon: Coffee,
          color: 'from-amber-500 to-orange-500',
          example: {
            en: 'Oatmeal with berries, eggs, and nuts',
            tr: 'Yulaf lapası, çilek, yumurta ve kuruyemiş',
          },
        },
        {
          name: { en: 'Mid-Morning Snack', tr: 'Kuşluk Atıştırması' },
          percentage: 10,
          icon: Sun,
          color: 'from-yellow-500 to-amber-500',
          example: {
            en: 'Greek yogurt with honey',
            tr: 'Bal ile Yunan yoğurdu',
          },
        },
        {
          name: { en: 'Lunch', tr: 'Öğle Yemeği' },
          percentage: 30,
          icon: Utensils,
          color: 'from-green-500 to-emerald-500',
          example: {
            en: 'Grilled chicken, brown rice, vegetables',
            tr: 'Izgara tavuk, esmer pirinç, sebzeler',
          },
        },
        {
          name: { en: 'Afternoon Snack', tr: 'İkindi Atıştırması' },
          percentage: 10,
          icon: Sunset,
          color: 'from-orange-500 to-red-500',
          example: {
            en: 'Apple with almond butter',
            tr: 'Badem ezmesi ile elma',
          },
        },
        {
          name: { en: 'Dinner', tr: 'Akşam Yemeği' },
          percentage: 25,
          icon: Moon,
          color: 'from-purple-500 to-indigo-500',
          example: {
            en: 'Salmon, quinoa, steamed broccoli',
            tr: 'Somon, kinoa, buharda brokoli',
          },
        },
      ],
    },
    lowcarb: {
      name: { en: 'Low-Carb Diet', tr: 'Düşük Karbonhidrat' },
      description: {
        en: '20% Carbs, 40% Protein, 40% Fat',
        tr: '%20 Karbonhidrat, %40 Protein, %40 Yağ',
      },
      meals: [
        {
          name: { en: 'Breakfast', tr: 'Kahvaltı' },
          percentage: 25,
          icon: Coffee,
          color: 'from-amber-500 to-orange-500',
          example: {
            en: 'Scrambled eggs with avocado and cheese',
            tr: 'Avokado ve peynirli omlet',
          },
        },
        {
          name: { en: 'Mid-Morning Snack', tr: 'Kuşluk Atıştırması' },
          percentage: 10,
          icon: Sun,
          color: 'from-yellow-500 to-amber-500',
          example: {
            en: 'Cheese and nuts',
            tr: 'Peynir ve kuruyemiş',
          },
        },
        {
          name: { en: 'Lunch', tr: 'Öğle Yemeği' },
          percentage: 30,
          icon: Utensils,
          color: 'from-green-500 to-emerald-500',
          example: {
            en: 'Steak salad with olive oil dressing',
            tr: 'Zeytinyağlı biftek salatası',
          },
        },
        {
          name: { en: 'Afternoon Snack', tr: 'İkindi Atıştırması' },
          percentage: 10,
          icon: Sunset,
          color: 'from-orange-500 to-red-500',
          example: {
            en: 'Celery sticks with peanut butter',
            tr: 'Fıstık ezmesi ile kereviz',
          },
        },
        {
          name: { en: 'Dinner', tr: 'Akşam Yemeği' },
          percentage: 25,
          icon: Moon,
          color: 'from-purple-500 to-indigo-500',
          example: {
            en: 'Grilled fish with butter and asparagus',
            tr: 'Tereyağı ve kuşkonmazla ızgara balık',
          },
        },
      ],
    },
    highprotein: {
      name: { en: 'High-Protein Diet', tr: 'Yüksek Protein' },
      description: {
        en: '30% Carbs, 40% Protein, 30% Fat',
        tr: '%30 Karbonhidrat, %40 Protein, %30 Yağ',
      },
      meals: [
        {
          name: { en: 'Breakfast', tr: 'Kahvaltı' },
          percentage: 25,
          icon: Coffee,
          color: 'from-amber-500 to-orange-500',
          example: {
            en: 'Protein pancakes with turkey bacon',
            tr: 'Hindi pastırması ile protein pankek',
          },
        },
        {
          name: { en: 'Mid-Morning Snack', tr: 'Kuşluk Atıştırması' },
          percentage: 10,
          icon: Sun,
          color: 'from-yellow-500 to-amber-500',
          example: {
            en: 'Protein shake with banana',
            tr: 'Muz ile protein shake',
          },
        },
        {
          name: { en: 'Lunch', tr: 'Öğle Yemeği' },
          percentage: 30,
          icon: Utensils,
          color: 'from-green-500 to-emerald-500',
          example: {
            en: 'Chicken breast, sweet potato, green beans',
            tr: 'Tavuk göğsü, tatlı patates, fasulye',
          },
        },
        {
          name: { en: 'Afternoon Snack', tr: 'İkindi Atıştırması' },
          percentage: 10,
          icon: Sunset,
          color: 'from-orange-500 to-red-500',
          example: {
            en: 'Cottage cheese with berries',
            tr: 'Meyveli lor peyniri',
          },
        },
        {
          name: { en: 'Dinner', tr: 'Akşam Yemeği' },
          percentage: 25,
          icon: Moon,
          color: 'from-purple-500 to-indigo-500',
          example: {
            en: 'Lean beef, lentils, mixed vegetables',
            tr: 'Yağsız sığır eti, mercimek, karışık sebze',
          },
        },
      ],
    },
  };

  const currentPlan = mealPlans[selectedPlan];

  return (
    <Card>
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Örnek Öğün Planları' : 'Sample Meal Plans'}
        </h3>
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Kalori hedefinize uygun örnek öğün dağılımları'
            : 'Sample meal distributions matching your calorie target'}
        </p>
      </div>

      {/* Plan Selection */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {Object.entries(mealPlans).map(([key, plan]) => (
          <button
            key={key}
            onClick={() => setSelectedPlan(key as any)}
            className={`rounded-lg border-2 p-3 text-center transition-all ${
              selectedPlan === key
                ? 'border-primary-500 bg-primary-50'
                : 'border-neutral-200 bg-white hover:border-neutral-300'
            }`}
          >
            <div className="font-semibold text-neutral-900">{plan.name[locale]}</div>
            <div className="mt-1 text-xs text-neutral-600">{plan.description[locale]}</div>
          </button>
        ))}
      </div>

      {/* Meal Breakdown */}
      <div className="space-y-3">
        {currentPlan.meals.map((meal, index) => {
          const Icon = meal.icon;
          const mealCalories = Math.round((dailyCalories * meal.percentage) / 100);

          return (
            <div
              key={index}
              className="rounded-lg border border-neutral-200 bg-gradient-to-r from-white to-neutral-50 p-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-1 items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${meal.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-neutral-900">{meal.name[locale]}</span>
                      <Badge variant="secondary" size="sm">
                        {meal.percentage}%
                      </Badge>
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">{meal.example[locale]}</div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="text-2xl font-bold text-neutral-900">{mealCalories}</div>
                  <div className="text-xs text-neutral-500">
                    {locale === 'tr' ? 'kalori' : 'calories'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="mt-4 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="h-6 w-6" />
            <span className="font-semibold">
              {locale === 'tr' ? 'Günlük Toplam' : 'Daily Total'}
            </span>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{dailyCalories}</div>
            <div className="text-sm opacity-90">
              {locale === 'tr' ? 'kalori' : 'calories'}
            </div>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-4 rounded-lg bg-blue-50 p-3">
        <p className="text-sm text-blue-900">
          {locale === 'tr'
            ? '💡 Bu sadece bir örnektir. Kendi tercih ve ihtiyaçlarınıza göre öğünlerinizi ayarlayın. Gıda alerjisi veya intoleransınız varsa özel diyet planı için bir beslenme uzmanına danışın.'
            : '💡 This is just an example. Adjust your meals according to your own preferences and needs. If you have food allergies or intolerances, consult a nutritionist for a custom diet plan.'}
        </p>
      </div>
    </Card>
  );
};

export default MealPlanSuggestions;
