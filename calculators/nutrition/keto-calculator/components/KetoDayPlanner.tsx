'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { KetoMacros } from '../ketoTypes';

interface KetoDayPlannerProps {
  macros: KetoMacros;
  locale: 'en' | 'tr';
}

const KetoDayPlanner: React.FC<KetoDayPlannerProps> = ({ macros, locale }) => {
  const meals = locale === 'tr' ? getMealsTr(macros) : getMealsEn(macros);

  return (
    <Card>
      <h3 className="mb-2 text-xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Örnek Günlük Keto Menü' : 'Sample Daily Keto Menu'}
      </h3>
      <p className="mb-6 text-sm text-neutral-600">
        {locale === 'tr'
          ? `${macros.calories} kcal hedefine uygun örnek bir günlük plan`
          : `A sample day plan matching your ${macros.calories} kcal target`}
      </p>

      <div className="space-y-4">
        {meals.map((meal, index) => (
          <div
            key={index}
            className="rounded-xl border border-neutral-100 bg-gradient-to-r from-neutral-50 to-white p-4 transition-all hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{meal.icon}</span>
                <div>
                  <h4 className="font-semibold text-neutral-900">{meal.name}</h4>
                  <p className="text-xs text-neutral-500">{meal.time}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-orange-600">{meal.calories} kcal</div>
              </div>
            </div>

            <p className="mb-3 text-sm text-neutral-700">{meal.description}</p>

            <div className="flex gap-3">
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                {locale === 'tr' ? 'Yağ' : 'Fat'}: {meal.fat}g
              </span>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
                Protein: {meal.protein}g
              </span>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                {locale === 'tr' ? 'Karb' : 'Carbs'}: {meal.carbs}g
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Totals */}
      <div className="mt-6 rounded-lg bg-orange-50 p-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-orange-900">
            {locale === 'tr' ? 'Günlük Toplam' : 'Daily Total'}
          </span>
          <div className="flex gap-4 text-sm">
            <span className="font-bold text-orange-600">{macros.calories} kcal</span>
            <span className="text-yellow-600">{macros.fat}g {locale === 'tr' ? 'yağ' : 'fat'}</span>
            <span className="text-red-600">{macros.protein}g protein</span>
            <span className="text-green-600">{macros.netCarbs}g {locale === 'tr' ? 'karb' : 'carbs'}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

interface MealPlan {
  icon: string;
  name: string;
  time: string;
  description: string;
  calories: number;
  fat: number;
  protein: number;
  carbs: number;
}

function getMealsEn(macros: KetoMacros): MealPlan[] {
  const mealRatios = [0.30, 0.10, 0.35, 0.10, 0.15];

  return [
    {
      icon: '🍳',
      name: 'Breakfast',
      time: '7:00 - 9:00 AM',
      description: '3 eggs scrambled in butter with cheese, half an avocado, and 2 slices of bacon.',
      calories: Math.round(macros.calories * mealRatios[0]),
      fat: Math.round(macros.fat * mealRatios[0]),
      protein: Math.round(macros.protein * mealRatios[0]),
      carbs: Math.round(macros.netCarbs * mealRatios[0]),
    },
    {
      icon: '🥤',
      name: 'Morning Snack',
      time: '10:30 AM',
      description: 'Bulletproof coffee (coffee + MCT oil + butter) or a handful of macadamia nuts.',
      calories: Math.round(macros.calories * mealRatios[1]),
      fat: Math.round(macros.fat * mealRatios[1]),
      protein: Math.round(macros.protein * mealRatios[1]),
      carbs: Math.round(macros.netCarbs * mealRatios[1]),
    },
    {
      icon: '🥗',
      name: 'Lunch',
      time: '12:30 - 1:30 PM',
      description: 'Grilled salmon fillet with a spinach and avocado salad dressed with olive oil and lemon.',
      calories: Math.round(macros.calories * mealRatios[2]),
      fat: Math.round(macros.fat * mealRatios[2]),
      protein: Math.round(macros.protein * mealRatios[2]),
      carbs: Math.round(macros.netCarbs * mealRatios[2]),
    },
    {
      icon: '🧀',
      name: 'Afternoon Snack',
      time: '3:30 PM',
      description: 'Cheese cubes with celery sticks and almond butter.',
      calories: Math.round(macros.calories * mealRatios[3]),
      fat: Math.round(macros.fat * mealRatios[3]),
      protein: Math.round(macros.protein * mealRatios[3]),
      carbs: Math.round(macros.netCarbs * mealRatios[3]),
    },
    {
      icon: '🍖',
      name: 'Dinner',
      time: '6:30 - 7:30 PM',
      description: 'Chicken thigh cooked in coconut oil with roasted broccoli and cauliflower mash with butter.',
      calories: Math.round(macros.calories * mealRatios[4]),
      fat: Math.round(macros.fat * mealRatios[4]),
      protein: Math.round(macros.protein * mealRatios[4]),
      carbs: Math.round(macros.netCarbs * mealRatios[4]),
    },
  ];
}

function getMealsTr(macros: KetoMacros): MealPlan[] {
  const mealRatios = [0.30, 0.10, 0.35, 0.10, 0.15];

  return [
    {
      icon: '🍳',
      name: 'Kahvaltı',
      time: '07:00 - 09:00',
      description: 'Tereyağında 3 yumurta, peynir, yarım avokado ve 2 dilim pastırma.',
      calories: Math.round(macros.calories * mealRatios[0]),
      fat: Math.round(macros.fat * mealRatios[0]),
      protein: Math.round(macros.protein * mealRatios[0]),
      carbs: Math.round(macros.netCarbs * mealRatios[0]),
    },
    {
      icon: '🥤',
      name: 'Kuşluk Atıştırması',
      time: '10:30',
      description: 'Bulletproof kahve (kahve + MCT yağı + tereyağı) veya bir avuç makademya fıstığı.',
      calories: Math.round(macros.calories * mealRatios[1]),
      fat: Math.round(macros.fat * mealRatios[1]),
      protein: Math.round(macros.protein * mealRatios[1]),
      carbs: Math.round(macros.netCarbs * mealRatios[1]),
    },
    {
      icon: '🥗',
      name: 'Öğle Yemeği',
      time: '12:30 - 13:30',
      description: 'Izgara somon fileto ile ıspanak-avokado salatası, zeytinyağı ve limon sosu.',
      calories: Math.round(macros.calories * mealRatios[2]),
      fat: Math.round(macros.fat * mealRatios[2]),
      protein: Math.round(macros.protein * mealRatios[2]),
      carbs: Math.round(macros.netCarbs * mealRatios[2]),
    },
    {
      icon: '🧀',
      name: 'İkindi Atıştırması',
      time: '15:30',
      description: 'Peynir küpleri, kereviz çubukları ve badem ezmesi.',
      calories: Math.round(macros.calories * mealRatios[3]),
      fat: Math.round(macros.fat * mealRatios[3]),
      protein: Math.round(macros.protein * mealRatios[3]),
      carbs: Math.round(macros.netCarbs * mealRatios[3]),
    },
    {
      icon: '🍖',
      name: 'Akşam Yemeği',
      time: '18:30 - 19:30',
      description: 'Hindistancevizi yağında tavuk but ile fırında brokoli ve tereyağlı karnabahar püresi.',
      calories: Math.round(macros.calories * mealRatios[4]),
      fat: Math.round(macros.fat * mealRatios[4]),
      protein: Math.round(macros.protein * mealRatios[4]),
      carbs: Math.round(macros.netCarbs * mealRatios[4]),
    },
  ];
}

export default KetoDayPlanner;
