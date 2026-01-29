'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Select, Card, Badge } from '@/components/ui';
import { calculateMacronutrients, getDietTypeDescription } from './macroLogic';
import { MacroInput, DietType } from './macroTypes';
import { Apple, Activity, Target, Flame } from 'lucide-react';

interface MacroCalculatorProps {
  locale: 'en' | 'tr';
}

const MacroCalculator: React.FC<MacroCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<
    'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
  >('moderate');
  const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');
  const [dietType, setDietType] = useState<DietType>('balanced');
  const [result, setResult] = useState<ReturnType<typeof calculateMacronutrients> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!ageNum || !heightNum || !weightNum || ageNum <= 0 || heightNum <= 0 || weightNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen tüm alanları doğru şekilde doldurun'
          : 'Please fill in all fields correctly'
      );
      return;
    }

    if (ageNum < 18 || ageNum > 100) {
      setError(
        locale === 'tr'
          ? 'Yaş 18-100 arasında olmalıdır'
          : 'Age must be between 18 and 100'
      );
      return;
    }

    const input: MacroInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      activityLevel,
      goal,
      unit,
      dietType,
    };

    try {
      const macros = calculateMacronutrients(input);
      setResult(macros);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen değerlerinizi kontrol edin.'
          : 'Calculation error. Please check your values.'
      );
    }
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const activityOptions = [
    {
      value: 'sedentary',
      label: locale === 'tr' ? 'Hareketsiz' : 'Sedentary',
      description: locale === 'tr' ? 'Az veya hiç egzersiz' : 'Little to no exercise',
    },
    {
      value: 'light',
      label: locale === 'tr' ? 'Hafif Aktif' : 'Light',
      description: locale === 'tr' ? 'Haftada 1-3 gün egzersiz' : 'Exercise 1-3 days/week',
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Orta Aktif' : 'Moderate',
      description: locale === 'tr' ? 'Haftada 3-5 gün egzersiz' : 'Exercise 3-5 days/week',
    },
    {
      value: 'active',
      label: locale === 'tr' ? 'Aktif' : 'Active',
      description: locale === 'tr' ? 'Haftada 6-7 gün egzersiz' : 'Exercise 6-7 days/week',
    },
    {
      value: 'veryActive',
      label: locale === 'tr' ? 'Çok Aktif' : 'Very Active',
      description:
        locale === 'tr' ? 'Günde 2x egzersiz veya fiziksel iş' : 'Exercise 2x/day or physical job',
    },
  ];

  const goalOptions = [
    {
      value: 'lose',
      label: locale === 'tr' ? 'Kilo Kaybı' : 'Weight Loss',
      description: locale === 'tr' ? '500 kalori açık' : '500 calorie deficit',
    },
    {
      value: 'maintain',
      label: locale === 'tr' ? 'Koruma' : 'Maintenance',
      description: locale === 'tr' ? 'Mevcut kilonuzu koruma' : 'Maintain current weight',
    },
    {
      value: 'gain',
      label: locale === 'tr' ? 'Kas Kazanımı' : 'Muscle Gain',
      description: locale === 'tr' ? '300 kalori fazla' : '300 calorie surplus',
    },
  ];

  const dietTypeOptions = [
    { value: 'balanced', label: locale === 'tr' ? 'Dengeli' : 'Balanced' },
    { value: 'lowCarb', label: locale === 'tr' ? 'Düşük Karbonhidrat' : 'Low Carb' },
    { value: 'lowFat', label: locale === 'tr' ? 'Düşük Yağ' : 'Low Fat' },
    { value: 'highProtein', label: locale === 'tr' ? 'Yüksek Protein' : 'High Protein' },
    { value: 'keto', label: locale === 'tr' ? 'Ketojenik' : 'Keto' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
            <Apple className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Makro Hesaplama' : 'Macro Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'TDEE ve makro besin ihtiyaçlarınızı hesaplayın'
                : 'Calculate your TDEE and macronutrient needs'}
            </p>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('gender')}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              { value: 'male', label: t('male') },
              { value: 'female', label: t('female') },
            ]}
            orientation="horizontal"
          />
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
                description: `${tUnits('cm')}, ${tUnits('kg')}`,
              },
              {
                value: 'imperial',
                label: t('imperial'),
                description: `${tUnits('inch')}, ${tUnits('lbs')}`,
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yıl' : 'years'}</span>}
            required
          />
          <Input
            label={t('height')}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '170' : '67'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
            }
            required
          />
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
          <Select
            label={locale === 'tr' ? 'Diyet Tipi' : 'Diet Type'}
            value={dietType}
            onChange={(e) => setDietType(e.target.value as DietType)}
            options={dietTypeOptions}
            helperText={getDietTypeDescription(dietType, locale)}
          />
        </div>

        {/* Activity Level */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() =>
                  setActivityLevel(
                    option.value as 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'
                  )
                }
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
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value as 'lose' | 'maintain' | 'gain')}
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
          {/* TDEE and Target Calories */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-green-50 to-emerald-50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Kalori Hedefleri' : 'Calorie Targets'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Activity className="h-4 w-4" />
                  <span>TDEE</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-neutral-900">
                  {result.tdee}
                  <span className="ml-1 text-base font-normal text-neutral-600">
                    {locale === 'tr' ? 'kalori' : 'cal'}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Günlük Enerji Harcaması' : 'Total Daily Energy Expenditure'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Target className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Hedef' : 'Target'}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-green-600">
                  {result.targetCalories}
                  <span className="ml-1 text-base font-normal text-neutral-600">
                    {locale === 'tr' ? 'kalori' : 'cal'}
                  </span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Günlük Hedef Kalori' : 'Daily Target Calories'}
                </p>
              </div>
            </div>
          </Card>

          {/* Macronutrients */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Makro Besinler' : 'Macronutrients'}
              </h3>
              <Badge variant="primary">
                {locale === 'tr'
                  ? dietTypeOptions.find((d) => d.value === dietType)?.label
                  : dietTypeOptions.find((d) => d.value === dietType)?.label}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Protein */}
              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-blue-900">
                    {locale === 'tr' ? 'Protein' : 'Protein'}
                  </span>
                  <span className="text-xs text-blue-700">{result.protein.percentage}%</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-blue-600">
                  {result.protein.grams}
                  <span className="ml-1 text-base font-normal text-blue-700">g</span>
                </div>
                <div className="mt-1 text-xs text-blue-700">
                  {result.protein.calories} {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${result.protein.percentage}%` }}
                  />
                </div>
              </div>

              {/* Carbs */}
              <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-900">
                    {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
                  </span>
                  <span className="text-xs text-amber-700">{result.carbs.percentage}%</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-amber-600">
                  {result.carbs.grams}
                  <span className="ml-1 text-base font-normal text-amber-700">g</span>
                </div>
                <div className="mt-1 text-xs text-amber-700">
                  {result.carbs.calories} {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-amber-200">
                  <div
                    className="h-full rounded-full bg-amber-500"
                    style={{ width: `${result.carbs.percentage}%` }}
                  />
                </div>
              </div>

              {/* Fat */}
              <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-purple-900">
                    {locale === 'tr' ? 'Yağ' : 'Fat'}
                  </span>
                  <span className="text-xs text-purple-700">{result.fat.percentage}%</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-purple-600">
                  {result.fat.grams}
                  <span className="ml-1 text-base font-normal text-purple-700">g</span>
                </div>
                <div className="mt-1 text-xs text-purple-700">
                  {result.fat.calories} {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-purple-200">
                  <div
                    className="h-full rounded-full bg-purple-500"
                    style={{ width: `${result.fat.percentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Macro Summary */}
            <div className="mt-4 rounded-lg bg-neutral-100 p-4">
              <div className="flex items-center gap-2 text-sm text-neutral-700">
                <Flame className="h-4 w-4" />
                <span className="font-medium">
                  {locale === 'tr' ? 'Günlük Özet' : 'Daily Summary'}
                </span>
              </div>
              <div className="mt-2 text-sm text-neutral-700">
                <span className="font-semibold text-blue-600">{result.protein.grams}g</span>{' '}
                {locale === 'tr' ? 'protein' : 'protein'},{' '}
                <span className="font-semibold text-amber-600">{result.carbs.grams}g</span>{' '}
                {locale === 'tr' ? 'karbonhidrat' : 'carbs'},{' '}
                <span className="font-semibold text-purple-600">{result.fat.grams}g</span>{' '}
                {locale === 'tr' ? 'yağ' : 'fat'} ={' '}
                <span className="font-bold text-green-600">{result.targetCalories}</span>{' '}
                {locale === 'tr' ? 'kalori' : 'calories'}
              </div>
            </div>
          </Card>

          {/* Meal Distribution (Optional) */}
          {result.mealsPerDay && (
            <Card className="animate-slide-up">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Öğün Dağılımı' : 'Meal Distribution'}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {Object.entries(result.mealsPerDay).map(([meal, macros]) => (
                  <div key={meal} className="rounded-lg border border-neutral-200 bg-white p-3">
                    <h4 className="mb-2 text-sm font-semibold capitalize text-neutral-900">
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
                    <div className="space-y-1 text-xs text-neutral-700">
                      <div className="flex justify-between">
                        <span>{locale === 'tr' ? 'Kalori:' : 'Calories:'}</span>
                        <span className="font-semibold">{macros.calories}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'tr' ? 'Protein:' : 'Protein:'}</span>
                        <span className="font-semibold text-blue-600">{macros.protein}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'tr' ? 'Karbonhidrat:' : 'Carbs:'}</span>
                        <span className="font-semibold text-amber-600">{macros.carbs}g</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{locale === 'tr' ? 'Yağ:' : 'Fat:'}</span>
                        <span className="font-semibold text-purple-600">{macros.fat}g</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default MacroCalculator;
