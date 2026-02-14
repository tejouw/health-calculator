'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Utensils, Coffee, Apple } from 'lucide-react';
import { MealTiming, MealType } from '../fastingTypes';

interface MealTimingCardProps {
  mealTimings: MealTiming[];
  locale: 'en' | 'tr';
}

const MealTimingCard: React.FC<MealTimingCardProps> = ({ mealTimings, locale }) => {
  const getMealIcon = (type: MealType) => {
    switch (type) {
      case 'breakfast':
        return <Coffee className="h-5 w-5 text-amber-600" />;
      case 'lunch':
        return <Utensils className="h-5 w-5 text-orange-600" />;
      case 'dinner':
        return <Utensils className="h-5 w-5 text-red-600" />;
      case 'snack':
        return <Apple className="h-5 w-5 text-green-600" />;
      default:
        return <Utensils className="h-5 w-5 text-neutral-600" />;
    }
  };

  const getMealColor = (type: MealType) => {
    switch (type) {
      case 'breakfast':
        return 'border-amber-200 bg-amber-50';
      case 'lunch':
        return 'border-orange-200 bg-orange-50';
      case 'dinner':
        return 'border-red-200 bg-red-50';
      case 'snack':
        return 'border-green-200 bg-green-50';
      default:
        return 'border-neutral-200 bg-neutral-50';
    }
  };

  const getMealLabel = (type: MealType): string => {
    if (locale === 'tr') {
      switch (type) {
        case 'breakfast':
          return 'Kahvaltı';
        case 'lunch':
          return 'Öğle Yemeği';
        case 'dinner':
          return 'Akşam Yemeği';
        case 'snack':
          return 'Ara Öğün';
      }
    } else {
      switch (type) {
        case 'breakfast':
          return 'Breakfast';
        case 'lunch':
          return 'Lunch';
        case 'dinner':
          return 'Dinner';
        case 'snack':
          return 'Snack';
      }
    }
  };

  return (
    <Card className="border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
      <h3 className="mb-4 text-lg font-bold text-orange-900">
        {locale === 'tr' ? '🍽️ Önerilen Öğün Zamanları' : '🍽️ Suggested Meal Times'}
      </h3>
      <div className="space-y-3">
        {mealTimings.map((meal, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 rounded-lg border-2 p-4 ${getMealColor(meal.type)}`}
          >
            <div className="flex-shrink-0">{getMealIcon(meal.type)}</div>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between">
                <span className="font-semibold text-neutral-900">{getMealLabel(meal.type)}</span>
                <span className="text-lg font-bold text-neutral-900">{meal.time}</span>
              </div>
              <p className="text-sm text-neutral-700">{meal.suggestion[locale]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-white p-3">
        <p className="text-sm text-neutral-600">
          {locale === 'tr'
            ? '💡 İpucu: Bu zamanlar önerilerdir. Vücudunuzu dinleyin ve ihtiyaçlarınıza göre ayarlayın.'
            : '💡 Tip: These times are suggestions. Listen to your body and adjust as needed.'}
        </p>
      </div>
    </Card>
  );
};

export default MealTimingCard;
