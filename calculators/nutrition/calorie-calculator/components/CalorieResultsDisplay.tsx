'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { CalorieResult, Goal } from '../calorieTypes';
import { Flame, Activity, Target, TrendingUp, TrendingDown, ChevronRight } from 'lucide-react';
import WeightProgressTimeline from './WeightProgressTimeline';
import NutritionTips from './NutritionTips';
import MealPlanSuggestions from './MealPlanSuggestions';
import HowItWorks from './HowItWorks';

interface CalorieResultsDisplayProps {
  result: CalorieResult;
  goal: Goal;
  recommendedCalories: number;
  locale: 'en' | 'tr';
  currentWeight: number;
  goalWeight?: number;
  unit: 'metric' | 'imperial';
}

const CalorieResultsDisplay: React.FC<CalorieResultsDisplayProps> = ({
  result,
  goal,
  recommendedCalories,
  locale,
  currentWeight,
  goalWeight,
  unit,
}) => {
  const calorieOptions = [
    {
      label: locale === 'tr' ? 'Aşırı Kilo Verme' : 'Extreme Weight Loss',
      value: result.extremeWeightLoss,
      description: locale === 'tr' ? '30% açık' : '30% deficit',
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      recommended: goal === 'lose' && false, // Not recommended as default
    },
    {
      label: locale === 'tr' ? 'Kilo Verme' : 'Weight Loss',
      value: result.weightLoss,
      description: locale === 'tr' ? '20% açık' : '20% deficit',
      icon: TrendingDown,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      recommended: goal === 'lose',
    },
    {
      label: locale === 'tr' ? 'Hafif Kilo Verme' : 'Mild Weight Loss',
      value: result.mildWeightLoss,
      description: locale === 'tr' ? '10% açık' : '10% deficit',
      icon: TrendingDown,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      recommended: false,
    },
    {
      label: locale === 'tr' ? 'Kilo Koruma' : 'Maintain Weight',
      value: result.maintenance,
      description: locale === 'tr' ? 'Bakım' : 'Maintenance',
      icon: Activity,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      recommended: goal === 'maintain',
    },
    {
      label: locale === 'tr' ? 'Hafif Kilo Alma' : 'Mild Weight Gain',
      value: result.mildWeightGain,
      description: locale === 'tr' ? '10% fazlalık' : '10% surplus',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      recommended: false,
    },
    {
      label: locale === 'tr' ? 'Kilo Alma' : 'Weight Gain',
      value: result.weightGain,
      description: locale === 'tr' ? '20% fazlalık' : '20% surplus',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      recommended: goal === 'gain',
    },
    {
      label: locale === 'tr' ? 'Aşırı Kilo Alma' : 'Extreme Weight Gain',
      value: result.extremeWeightGain,
      description: locale === 'tr' ? '30% fazlalık' : '30% surplus',
      icon: TrendingUp,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      recommended: goal === 'gain' && false, // Not recommended as default
    },
  ];

  return (
    <>
      {/* Main Result Card */}
      <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="text-center">
          <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
            {locale === 'tr' ? 'Önerilen Günlük Kalori' : 'Recommended Daily Calories'}
          </h3>
          <div className="mb-2 flex items-center justify-center gap-2">
            <Flame className="h-8 w-8 text-orange-600" />
            <div className="text-6xl font-bold text-orange-600">{recommendedCalories}</div>
          </div>
          <p className="text-sm text-neutral-600">
            {locale === 'tr' ? 'kalori/gün' : 'calories/day'}
          </p>
        </div>

        {/* BMR and TDEE Info */}
        <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
          <div className="rounded-lg bg-white/50 p-4">
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
              {locale === 'tr' ? 'Bazal Metabolizma (BMR)' : 'Basal Metabolic Rate (BMR)'}
            </div>
            <div className="text-2xl font-bold text-neutral-900">{result.bmr}</div>
            <div className="mt-1 text-xs text-neutral-600">
              {locale === 'tr'
                ? 'Dinlenme sırasında yaktığınız kalori'
                : 'Calories burned at rest'}
            </div>
          </div>

          <div className="rounded-lg bg-white/50 p-4">
            <div className="mb-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
              {locale === 'tr' ? 'Günlük Enerji (TDEE)' : 'Total Daily Energy (TDEE)'}
            </div>
            <div className="text-2xl font-bold text-neutral-900">{result.tdee}</div>
            <div className="mt-1 text-xs text-neutral-600">
              {locale === 'tr'
                ? 'Aktivite ile yaktığınız toplam kalori'
                : 'Total calories burned with activity'}
            </div>
          </div>
        </div>
      </Card>

      {/* All Calorie Options */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Tüm Kalori Seçenekleri' : 'All Calorie Options'}
        </h3>
        <div className="space-y-3">
          {calorieOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.label}
                className={`rounded-lg border-2 p-4 transition-all ${
                  option.recommended
                    ? `${option.borderColor} ${option.bgColor}`
                    : 'border-neutral-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${option.bgColor}`}
                    >
                      <Icon className={`h-5 w-5 ${option.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-neutral-900">{option.label}</span>
                        {option.recommended && (
                          <Badge variant="success" size="sm">
                            {locale === 'tr' ? 'Önerilen' : 'Recommended'}
                          </Badge>
                        )}
                      </div>
                      <span className="text-sm text-neutral-600">{option.description}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neutral-900">{option.value}</div>
                    <div className="text-xs text-neutral-500">
                      {locale === 'tr' ? 'kcal/gün' : 'kcal/day'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Macronutrient Recommendations */}
      {result.macros && (
        <Card>
          <h3 className="mb-4 text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Makrobesin Önerileri' : 'Macronutrient Recommendations'}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-red-700">
                {locale === 'tr' ? 'Protein' : 'Protein'}
              </div>
              <div className="text-2xl font-bold text-red-900">
                {result.macros.protein.min}-{result.macros.protein.max}g
              </div>
              <div className="mt-1 text-xs text-red-700">
                {locale === 'tr' ? 'Günlük hedef' : 'Daily target'}
              </div>
              <div className="mt-2 text-xs text-red-600">
                {locale === 'tr'
                  ? 'Kas kütlesi ve tokluk için'
                  : 'For muscle mass and satiety'}
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-blue-700">
                {locale === 'tr' ? 'Karbonhidrat' : 'Carbohydrates'}
              </div>
              <div className="text-2xl font-bold text-blue-900">
                {result.macros.carbs.min}-{result.macros.carbs.max}g
              </div>
              <div className="mt-1 text-xs text-blue-700">
                {locale === 'tr' ? 'Günlük hedef' : 'Daily target'}
              </div>
              <div className="mt-2 text-xs text-blue-600">
                {locale === 'tr' ? 'Enerji kaynağı' : 'Primary energy source'}
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4">
              <div className="mb-2 text-xs font-medium uppercase tracking-wide text-yellow-700">
                {locale === 'tr' ? 'Yağ' : 'Fat'}
              </div>
              <div className="text-2xl font-bold text-yellow-900">
                {result.macros.fat.min}-{result.macros.fat.max}g
              </div>
              <div className="mt-1 text-xs text-yellow-700">
                {locale === 'tr' ? 'Günlük hedef' : 'Daily target'}
              </div>
              <div className="mt-2 text-xs text-yellow-600">
                {locale === 'tr' ? 'Hormon üretimi için' : 'For hormone production'}
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-blue-50 p-4">
            <div className="flex items-start gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-blue-900">
                  {locale === 'tr'
                    ? 'Bu öneriler genel kılavuzlardır. Makrolarınızı hedeflerinize, aktivite düzeyinize ve kişisel tercihlerinize göre ayarlayın. Kişiselleştirilmiş tavsiyeler için bir diyetisyene danışın.'
                    : 'These are general guidelines. Adjust your macros based on your goals, activity level, and personal preferences. Consult a dietitian for personalized advice.'}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Weight Progress Timeline */}
      {goalWeight && goalWeight !== currentWeight && (
        <WeightProgressTimeline
          currentWeight={currentWeight}
          goalWeight={goalWeight}
          dailyCalories={recommendedCalories}
          maintenanceCalories={result.maintenance}
          unit={unit}
          locale={locale}
        />
      )}

      {/* Meal Plan Suggestions */}
      <MealPlanSuggestions dailyCalories={recommendedCalories} locale={locale} />

      {/* Nutrition Tips */}
      <NutritionTips goal={goal} locale={locale} />

      {/* How It Works */}
      <HowItWorks locale={locale} />

      {/* Important Notes */}
      <Card className="border-2 border-yellow-200 bg-yellow-50">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-white">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="mb-2 font-semibold text-yellow-900">
              {locale === 'tr' ? 'Önemli Notlar' : 'Important Notes'}
            </h4>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {locale === 'tr'
                    ? 'Bu hesaplamalar tahminlerdir ve bireysel metabolizma farklılıklarını hesaba katmaz'
                    : 'These calculations are estimates and do not account for individual metabolic differences'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {locale === 'tr'
                    ? 'Sağlıklı kilo kaybı haftada 0.5-1 kg, kilo alımı haftada 0.25-0.5 kg olmalıdır'
                    : 'Healthy weight loss should be 0.5-1 kg per week, weight gain 0.25-0.5 kg per week'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>
                  {locale === 'tr'
                    ? 'Kişiselleştirilmiş beslenme planı için bir diyetisyen veya doktora danışın'
                    : 'Consult a dietitian or doctor for a personalized nutrition plan'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CalorieResultsDisplay;
