'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Activity, Flame, Clock, Heart } from 'lucide-react';

interface ActivityCalorieBurnProps {
  tdee: number;
  weight: number;
  unit: 'metric' | 'imperial';
  locale: 'en' | 'tr';
}

const ActivityCalorieBurn: React.FC<ActivityCalorieBurnProps> = ({ tdee, weight, unit, locale }) => {
  const weightKg = unit === 'metric' ? weight : weight * 0.453592;

  // Calories per hour per kg of body weight (approximate)
  const activities = [
    {
      category: { en: 'Walking & Daily', tr: 'Yürüme & Günlük' },
      items: [
        { name: { en: 'Walking (slow)', tr: 'Yürüme (yavaş)' }, calPerKgHr: 2.5, icon: '🚶' },
        { name: { en: 'Walking (brisk)', tr: 'Hızlı Yürüme' }, calPerKgHr: 3.8, icon: '🚶‍♂️' },
        { name: { en: 'Cleaning house', tr: 'Ev temizliği' }, calPerKgHr: 2.9, icon: '🧹' },
        { name: { en: 'Gardening', tr: 'Bahçe işleri' }, calPerKgHr: 3.5, icon: '🌱' },
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: { en: 'Cardio', tr: 'Kardiyovasküler' },
      items: [
        { name: { en: 'Jogging (light)', tr: 'Hafif Koşu' }, calPerKgHr: 7.0, icon: '🏃' },
        { name: { en: 'Running', tr: 'Koşu' }, calPerKgHr: 10.5, icon: '🏃‍♂️' },
        { name: { en: 'Cycling', tr: 'Bisiklet' }, calPerKgHr: 8.0, icon: '🚴' },
        { name: { en: 'Swimming', tr: 'Yüzme' }, calPerKgHr: 9.5, icon: '🏊' },
        { name: { en: 'Jump rope', tr: 'İp atlama' }, calPerKgHr: 12.0, icon: '⛹️' },
      ],
      color: 'from-red-500 to-orange-500',
    },
    {
      category: { en: 'Strength & Training', tr: 'Kuvvet & Antrenman' },
      items: [
        { name: { en: 'Weight training', tr: 'Ağırlık antrenmanı' }, calPerKgHr: 5.5, icon: '🏋️' },
        { name: { en: 'HIIT', tr: 'HIIT' }, calPerKgHr: 11.0, icon: '💪' },
        { name: { en: 'Yoga', tr: 'Yoga' }, calPerKgHr: 3.0, icon: '🧘' },
        { name: { en: 'Pilates', tr: 'Pilates' }, calPerKgHr: 4.0, icon: '🤸' },
      ],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      category: { en: 'Sports & Recreation', tr: 'Spor & Rekreasyon' },
      items: [
        { name: { en: 'Football/Soccer', tr: 'Futbol' }, calPerKgHr: 10.0, icon: '⚽' },
        { name: { en: 'Basketball', tr: 'Basketbol' }, calPerKgHr: 9.5, icon: '🏀' },
        { name: { en: 'Tennis', tr: 'Tenis' }, calPerKgHr: 8.5, icon: '🎾' },
        { name: { en: 'Dancing', tr: 'Dans' }, calPerKgHr: 7.0, icon: '💃' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
            <Flame className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Aktivite Bazlı Kalori Yakma' : 'Activity-Based Calorie Burn'}
            </h3>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Farklı aktivitelerin 30 dakika süreli kalori yakma tahmini'
                : 'Estimated 30-minute calorie burn for different activities'}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg bg-orange-50 p-3 text-center">
            <Flame className="mx-auto h-4 w-4 text-orange-600" />
            <div className="mt-1 text-lg font-bold text-orange-900">{tdee}</div>
            <div className="text-xs text-orange-700">{locale === 'tr' ? 'Toplam/Gün' : 'Total/Day'}</div>
          </div>
          <div className="rounded-lg bg-green-50 p-3 text-center">
            <Heart className="mx-auto h-4 w-4 text-green-600" />
            <div className="mt-1 text-lg font-bold text-green-900">{Math.round(tdee * 0.7)}</div>
            <div className="text-xs text-green-700">{locale === 'tr' ? 'Bazal (%70)' : 'Basal (70%)'}</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-3 text-center">
            <Activity className="mx-auto h-4 w-4 text-blue-600" />
            <div className="mt-1 text-lg font-bold text-blue-900">{Math.round(tdee * 0.2)}</div>
            <div className="text-xs text-blue-700">{locale === 'tr' ? 'Aktivite (%20)' : 'Activity (20%)'}</div>
          </div>
          <div className="rounded-lg bg-purple-50 p-3 text-center">
            <Clock className="mx-auto h-4 w-4 text-purple-600" />
            <div className="mt-1 text-lg font-bold text-purple-900">{Math.round(tdee * 0.1)}</div>
            <div className="text-xs text-purple-700">{locale === 'tr' ? 'Sindirim (%10)' : 'Digestion (10%)'}</div>
          </div>
        </div>
      </div>

      {/* Activity Tables */}
      <div className="space-y-6">
        {activities.map((group, groupIndex) => (
          <div key={groupIndex}>
            <div className={`mb-3 flex items-center gap-2`}>
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${group.color}`}>
                <Activity className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold text-neutral-900">{group.category[locale]}</h4>
            </div>
            <div className="rounded-lg border border-neutral-200 overflow-hidden">
              {group.items.map((item, itemIndex) => {
                const calories30 = Math.round((item.calPerKgHr * weightKg) / 2);
                return (
                  <div
                    key={itemIndex}
                    className={`flex items-center justify-between p-3 ${
                      itemIndex !== group.items.length - 1 ? 'border-b border-neutral-100' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium text-neutral-700">{item.name[locale]}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-neutral-900">{calories30} kcal</span>
                      <span className="ml-1 text-xs text-neutral-500">/ 30 min</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="mt-6 rounded-lg bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          {locale === 'tr'
            ? '💡 Bu tahminler ortalama değerlerdir ve bireysel intensity, hız ve fitnes seviyesine göre önemli ölçüde değişebilir. Daha yüksek kilo daha fazla kalori yakar.'
            : '💡 These are average estimates and can vary significantly based on individual intensity, speed, and fitness level. Higher body weight burns more calories.'}
        </p>
      </div>
    </Card>
  );
};

export default ActivityCalorieBurn;
