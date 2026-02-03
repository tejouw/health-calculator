'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculateProtein,
  getProteinInterpretation,
  getProteinRecommendation,
  activityLevels,
  goals,
} from './proteinLogic';
import { ProteinInput, ActivityLevel, Goal } from './proteinTypes';
import { Beef, Activity, Target, Utensils } from 'lucide-react';
import ProteinGuide from './components/ProteinGuide';

interface ProteinCalculatorProps {
  locale: 'en' | 'tr';
}

const ProteinCalculator: React.FC<ProteinCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<ReturnType<typeof calculateProtein> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const weightNum = parseFloat(weight);

    if (!weightNum || weightNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight'
      );
      return;
    }

    if (unit === 'metric' && (weightNum < 30 || weightNum > 300)) {
      setError(
        locale === 'tr' ? 'Kilo 30-300 kg arasında olmalıdır' : 'Weight must be between 30-300 kg'
      );
      return;
    }

    if (unit === 'imperial' && (weightNum < 66 || weightNum > 660)) {
      setError(
        locale === 'tr'
          ? 'Kilo 66-660 lbs arasında olmalıdır'
          : 'Weight must be between 66-660 lbs'
      );
      return;
    }

    const input: ProteinInput = {
      weight: weightNum,
      unit,
      activityLevel,
      goal,
    };

    try {
      const proteinResult = calculateProtein(input);
      setResult(proteinResult);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen değerlerinizi kontrol edin.'
          : 'Calculation error. Please check your values.'
      );
    }
  };

  const handleReset = () => {
    setWeight('');
    setResult(null);
    setError('');
  };

  const activityOptions = [
    {
      value: 'sedentary',
      label: activityLevels.sedentary.label[locale],
      description: activityLevels.sedentary.description[locale],
    },
    {
      value: 'light',
      label: activityLevels.light.label[locale],
      description: activityLevels.light.description[locale],
    },
    {
      value: 'moderate',
      label: activityLevels.moderate.label[locale],
      description: activityLevels.moderate.description[locale],
    },
    {
      value: 'active',
      label: activityLevels.active.label[locale],
      description: activityLevels.active.description[locale],
    },
    {
      value: 'very_active',
      label: activityLevels.very_active.label[locale],
      description: activityLevels.very_active.description[locale],
    },
  ];

  const goalOptions = [
    {
      value: 'maintain',
      label: goals.maintain.label[locale],
      description: goals.maintain.description[locale],
    },
    {
      value: 'lose',
      label: goals.lose.label[locale],
      description: goals.lose.description[locale],
    },
    {
      value: 'gain',
      label: goals.gain.label[locale],
      description: goals.gain.description[locale],
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
            <Beef className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Protein Hesaplama' : 'Protein Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Günlük protein ihtiyacınızı hesaplayın'
                : 'Calculate your daily protein needs'}
            </p>
          </div>
        </div>

        {/* Unit System Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('unitSystem')}
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'metric' | 'imperial')}
            options={[
              {
                value: 'metric',
                label: t('metric'),
                description: tUnits('kg'),
              },
              {
                value: 'imperial',
                label: t('imperial'),
                description: tUnits('lbs'),
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Weight Input */}
        <div className="mb-6">
          <Input
            label={t('weight')}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
            }
            required
          />
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActivityLevel(option.value as ActivityLevel)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  activityLevel === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
                <div className="mt-1 text-xs text-neutral-600">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal Selection */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value as Goal)}
                className={`rounded-lg border-2 p-4 text-center transition-all ${
                  goal === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-base font-semibold text-neutral-900">{option.label}</div>
                <div className="mt-1 text-xs text-neutral-600">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Daily Protein Target */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Günlük Protein Hedefi' : 'Daily Protein Target'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Target className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Hedef' : 'Target'}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-blue-600">
                  {result.dailyProtein.grams}
                  <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Günlük protein' : 'Daily protein'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Activity className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Kg başına' : 'Per kg'}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  {result.dailyProtein.perKg}
                  <span className="ml-1 text-base font-normal text-neutral-600">g/kg</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {result.dailyProtein.perLb} g/lb
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Beef className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Aralık' : 'Range'}</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-purple-600">
                  {result.range.min}-{result.range.max}
                  <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Önerilen aralık' : 'Recommended range'}
                </p>
              </div>
            </div>
          </Card>

          {/* Meals Breakdown */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-neutral-700" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Öğün Dağılımı' : 'Meal Distribution'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(result.mealsBreakdown).map(([meal, grams]) => (
                <div key={meal} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <h4 className="mb-2 text-sm font-medium capitalize text-neutral-700">
                    {locale === 'tr'
                      ? meal === 'breakfast'
                        ? 'Kahvaltı'
                        : meal === 'lunch'
                          ? 'Öğle Yemeği'
                          : meal === 'dinner'
                            ? 'Akşam Yemeği'
                            : 'Atıştırmalıklar'
                      : meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {grams}
                    <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${(grams / result.dailyProtein.grams) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Interpretation and Recommendation */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Yorumlama ve Öneriler' : 'Interpretation & Recommendations'}
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-900">
                  {locale === 'tr' ? 'Durum' : 'Status'}
                </h4>
                <p className="text-sm text-blue-800">
                  {getProteinInterpretation(result.dailyProtein.perKg, activityLevel, goal, locale)}
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-semibold text-green-900">
                  {locale === 'tr' ? 'Öneri' : 'Recommendation'}
                </h4>
                <p className="text-sm text-green-800">
                  {getProteinRecommendation(goal, locale)}
                </p>
              </div>
            </div>
          </Card>

          {/* Protein Sources Example */}
          <Card className="animate-slide-up bg-gradient-to-br from-neutral-50 to-white">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Örnek Protein Kaynakları' : 'Example Protein Sources'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: locale === 'tr' ? 'Tavuk Göğsü' : 'Chicken Breast',
                  amount: '100g',
                  protein: '31g',
                },
                { name: locale === 'tr' ? 'Yumurta' : 'Eggs', amount: '2 large', protein: '13g' },
                {
                  name: locale === 'tr' ? 'Yunan Yoğurdu' : 'Greek Yogurt',
                  amount: '170g',
                  protein: '17g',
                },
                { name: locale === 'tr' ? 'Somon' : 'Salmon', amount: '100g', protein: '25g' },
                {
                  name: locale === 'tr' ? 'Lor Peyniri' : 'Cottage Cheese',
                  amount: '100g',
                  protein: '11g',
                },
                { name: locale === 'tr' ? 'Tofu' : 'Tofu', amount: '100g', protein: '8g' },
              ].map((source, index) => (
                <div key={index} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="text-sm font-semibold text-neutral-900">{source.name}</div>
                  <div className="mt-1 flex items-center justify-between text-xs text-neutral-600">
                    <span>{source.amount}</span>
                    <Badge variant="primary" size="sm">
                      {source.protein}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Protein Guide */}
          <ProteinGuide dailyProtein={result.dailyProtein.grams} locale={locale} />
        </div>
      )}
    </div>
  );
};

export default ProteinCalculator;
