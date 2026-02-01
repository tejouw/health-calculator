'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { NutritionSummary } from '../foodCalorieTypes';
import { Apple, Activity, Heart, Zap } from 'lucide-react';

interface FoodCalorieResultsDisplayProps {
  summary: NutritionSummary;
  locale: 'en' | 'tr';
}

const FoodCalorieResultsDisplay: React.FC<FoodCalorieResultsDisplayProps> = ({
  summary,
  locale,
}) => {
  const proteinCalories = summary.totalProtein * 4;
  const carbsCalories = summary.totalCarbs * 4;
  const fatCalories = summary.totalFat * 9;

  const proteinPercentage =
    summary.totalCalories > 0
      ? Math.round((proteinCalories * 100) / summary.totalCalories)
      : 0;
  const carbsPercentage =
    summary.totalCalories > 0 ? Math.round((carbsCalories * 100) / summary.totalCalories) : 0;
  const fatPercentage =
    summary.totalCalories > 0 ? Math.round((fatCalories * 100) / summary.totalCalories) : 0;

  return (
    <div className="space-y-6">
      {/* Main Totals */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Beslenme Özeti' : 'Nutrition Summary'}
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          <div className="rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <p className="text-xs text-neutral-600">{locale === 'tr' ? 'Kalori' : 'Calories'}</p>
            <p className="mt-1 text-2xl font-bold text-orange-600">
              {summary.totalCalories}
            </p>
            <p className="text-xs text-neutral-500">{locale === 'tr' ? 'kal' : 'cal'}</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <p className="text-xs text-neutral-600">{locale === 'tr' ? 'Protein' : 'Protein'}</p>
            <p className="mt-1 text-2xl font-bold text-blue-600">
              {summary.totalProtein}
            </p>
            <p className="text-xs text-neutral-500">g ({proteinPercentage}%)</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
              <Apple className="h-5 w-5 text-white" />
            </div>
            <p className="text-xs text-neutral-600">{locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}</p>
            <p className="mt-1 text-2xl font-bold text-green-600">
              {summary.totalCarbs}
            </p>
            <p className="text-xs text-neutral-500">g ({carbsPercentage}%)</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <p className="text-xs text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</p>
            <p className="mt-1 text-2xl font-bold text-amber-600">
              {summary.totalFat}
            </p>
            <p className="text-xs text-neutral-500">g ({fatPercentage}%)</p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500">
              <Apple className="h-5 w-5 text-white" />
            </div>
            <p className="text-xs text-neutral-600">{locale === 'tr' ? 'Lif' : 'Fiber'}</p>
            <p className="mt-1 text-2xl font-bold text-purple-600">
              {summary.totalFiber}
            </p>
            <p className="text-xs text-neutral-500">g</p>
          </div>
        </div>

        {/* Macro Breakdown */}
        <div className="mt-6">
          <h4 className="mb-3 text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Makro Besin Dağılımı' : 'Macronutrient Breakdown'}
          </h4>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-neutral-600">
                  {locale === 'tr' ? 'Protein' : 'Protein'}
                </span>
                <span className="font-medium text-neutral-900">
                  {proteinPercentage}% ({proteinCalories}{' '}
                  {locale === 'tr' ? 'kal' : 'cal'})
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                  style={{ width: `${proteinPercentage}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-neutral-600">
                  {locale === 'tr' ? 'Karbonhidrat' : 'Carbohydrates'}
                </span>
                <span className="font-medium text-neutral-900">
                  {carbsPercentage}% ({carbsCalories}{' '}
                  {locale === 'tr' ? 'kal' : 'cal'})
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600"
                  style={{ width: `${carbsPercentage}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</span>
                <span className="font-medium text-neutral-900">
                  {fatPercentage}% ({fatCalories} {locale === 'tr' ? 'kal' : 'cal'})
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                  style={{ width: `${fatPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Nutritional Insights */}
        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <h4 className="mb-2 text-sm font-semibold text-blue-900">
            {locale === 'tr' ? 'Beslenme İçgörüleri' : 'Nutritional Insights'}
          </h4>
          <ul className="space-y-2 text-sm text-blue-800">
            {proteinPercentage < 20 && (
              <li className="flex items-start gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Protein alımınız düşük. Daha fazla yağsız et, balık, yumurta veya baklagil eklemeyi deneyin.'
                    : 'Protein intake is low. Try adding more lean meat, fish, eggs, or legumes.'}
                </span>
              </li>
            )}
            {summary.totalFiber < 10 && (
              <li className="flex items-start gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Lif alımı düşük. Daha fazla sebze, meyve ve tam tahıl tüketin.'
                    : 'Fiber intake is low. Consume more vegetables, fruits, and whole grains.'}
                </span>
              </li>
            )}
            {fatPercentage > 40 && (
              <li className="flex items-start gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Yağ oranı yüksek. Yağ kaynaklarını dengeleyin ve sağlıklı yağları tercih edin.'
                    : 'Fat percentage is high. Balance fat sources and prefer healthy fats.'}
                </span>
              </li>
            )}
            {proteinPercentage >= 20 && proteinPercentage <= 35 && fatPercentage <= 35 && (
              <li className="flex items-start gap-2">
                <span className="mt-1 text-xs">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Makro besin dağılımınız dengeli görünüyor!'
                    : 'Your macronutrient distribution looks balanced!'}
                </span>
              </li>
            )}
          </ul>
        </div>
      </Card>

      {/* Food Items Details */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Detaylı Gıda Dökümü' : 'Detailed Food Breakdown'}
        </h3>
        <div className="space-y-3">
          {summary.foods.map((foodItem, index) => (
            <div
              key={index}
              className="rounded-lg border-2 border-neutral-100 bg-white p-4 transition-all hover:border-neutral-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-900">
                      {foodItem.food.name[locale]}
                    </span>
                    <Badge variant="secondary" size="sm">
                      {foodItem.grams}g
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm sm:grid-cols-5">
                    <div>
                      <span className="text-neutral-500">
                        {locale === 'tr' ? 'Kalori' : 'Calories'}:
                      </span>
                      <p className="font-semibold text-orange-600">{foodItem.calories}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500">
                        {locale === 'tr' ? 'Protein' : 'Protein'}:
                      </span>
                      <p className="font-semibold text-blue-600">{foodItem.protein}g</p>
                    </div>
                    <div>
                      <span className="text-neutral-500">
                        {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}:
                      </span>
                      <p className="font-semibold text-green-600">{foodItem.carbs}g</p>
                    </div>
                    <div>
                      <span className="text-neutral-500">{locale === 'tr' ? 'Yağ' : 'Fat'}:</span>
                      <p className="font-semibold text-amber-600">{foodItem.fat}g</p>
                    </div>
                    {foodItem.fiber > 0 && (
                      <div>
                        <span className="text-neutral-500">{locale === 'tr' ? 'Lif' : 'Fiber'}:</span>
                        <p className="font-semibold text-purple-600">{foodItem.fiber}g</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default FoodCalorieResultsDisplay;
