'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import {
  calculateTDEEResults,
  activityLevels,
  goals,
  getActivityLevel,
  getGoal,
} from './tdeeLogic';
import { TDEEInput, ActivityLevel, Goal } from './tdeeTypes';
import { Flame, TrendingDown, TrendingUp, Target, Activity } from 'lucide-react';

interface TDEECalculatorProps {
  locale: 'en' | 'tr';
}

const TDEECalculator: React.FC<TDEECalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderately_active');
  const [selectedGoal, setSelectedGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<ReturnType<typeof calculateTDEEResults> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!ageNum || !heightNum || !weightNum || ageNum <= 0 || heightNum <= 0 || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values');
      return;
    }

    if (ageNum < 15 || ageNum > 100) {
      setError(
        locale === 'tr'
          ? 'Yaş 15-100 arasında olmalıdır'
          : 'Age must be between 15 and 100 years'
      );
      return;
    }

    const input: TDEEInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
      activityLevel,
    };

    const tdeeResult = calculateTDEEResults(input);
    setResult(tdeeResult);
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const currentActivityLevel = getActivityLevel(activityLevel);
  const currentGoal = getGoal(selectedGoal);
  const goalCalories = result ? result.goals[selectedGoal] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'TDEE Hesaplama' : 'TDEE Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Toplam günlük enerji harcamanızı hesaplayın'
                : 'Calculate your total daily energy expenditure'}
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

        {/* Gender Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('gender')}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              {
                value: 'male',
                label: t('male'),
              },
              {
                value: 'female',
                label: t('female'),
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'years'}</span>}
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
        </div>

        {/* Activity Level Selection */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </label>
          <RadioGroup
            name="activityLevel"
            value={activityLevel}
            onChange={(value) => setActivityLevel(value as ActivityLevel)}
            options={activityLevels.map((level) => ({
              value: level.id,
              label: level.label[locale],
              description: level.description[locale],
            }))}
            orientation="vertical"
          />
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

      {/* Result */}
      {result && (
        <>
          {/* BMR and TDEE Card */}
          <Card className="animate-slide-up border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  BMR
                </h3>
                <div className="mb-2 text-5xl font-bold text-orange-600">{result.bmr}</div>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr' ? 'Bazal Metabolizma Hızı' : 'Basal Metabolic Rate'}
                </p>
              </div>
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  TDEE
                </h3>
                <div className="mb-2 text-5xl font-bold text-amber-600">{result.tdee}</div>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr' ? 'Günlük Enerji Harcaması' : 'Daily Energy Expenditure'}
                </p>
              </div>
            </div>

            {currentActivityLevel && (
              <div className="mt-6 border-t border-neutral-200 pt-6">
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-orange-600" />
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-neutral-900">
                      {currentActivityLevel.label[locale]}
                    </h4>
                    <p className="text-sm text-neutral-700">
                      {currentActivityLevel.description[locale]}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">
                      {locale === 'tr' ? 'Çarpan' : 'Multiplier'}: {currentActivityLevel.multiplier}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Goals Card */}
          <Card className="animate-slide-up">
            <div className="mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Hedefinizi Seçin' : 'Select Your Goal'}
              </h3>
            </div>

            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`rounded-xl border-2 p-4 text-left transition-all ${
                    selectedGoal === goal.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 bg-white hover:border-primary-300'
                  }`}
                >
                  <h4 className="mb-1 font-semibold text-neutral-900">{goal.label[locale]}</h4>
                  <p className="mb-2 text-xs text-neutral-600">{goal.description[locale]}</p>
                  <div className="flex items-center gap-2">
                    {goal.adjustment < 0 ? (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    ) : goal.adjustment > 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <Target className="h-4 w-4 text-blue-500" />
                    )}
                    <span className="text-xs font-medium text-neutral-700">
                      {goal.weeklyChange[locale]}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {currentGoal && goalCalories && (
              <div className="rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 p-6">
                <div className="text-center">
                  <h4 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                    {currentGoal.label[locale]}
                  </h4>
                  <div className="mb-4 text-6xl font-bold text-primary-600">{goalCalories}</div>
                  <p className="text-sm text-neutral-700">
                    {locale === 'tr' ? 'günlük kalori' : 'calories per day'}
                  </p>
                  <Badge variant="primary" size="lg" className="mt-4">
                    {currentGoal.adjustment > 0 ? '+' : ''}
                    {currentGoal.adjustment}{' '}
                    {locale === 'tr' ? 'kalori/gün' : 'calories/day'}
                  </Badge>
                </div>
              </div>
            )}
          </Card>

          {/* Macros Card */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Önerilen Makro Besinler' : 'Recommended Macronutrients'}
            </h3>
            <p className="mb-6 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Bu makro aralıkları genel kilo hedefinize göre önerilir'
                : 'These macro ranges are recommended based on your overall calorie goal'}
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <h4 className="mb-2 text-sm font-semibold text-blue-900">
                  {locale === 'tr' ? 'Protein' : 'Protein'}
                </h4>
                <div className="mb-1 text-2xl font-bold text-blue-600">
                  {result.macros.protein.min}-{result.macros.protein.max}g
                </div>
                <p className="text-xs text-blue-700">
                  {locale === 'tr'
                    ? 'Vücut ağırlığının kg başına 1.6-2.2g'
                    : '1.6-2.2g per kg body weight'}
                </p>
              </div>

              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <h4 className="mb-2 text-sm font-semibold text-green-900">
                  {locale === 'tr' ? 'Yağ' : 'Fat'}
                </h4>
                <div className="mb-1 text-2xl font-bold text-green-600">
                  {result.macros.fat.min}-{result.macros.fat.max}g
                </div>
                <p className="text-xs text-green-700">
                  {locale === 'tr'
                    ? 'Toplam kalorinin %20-35\'i'
                    : '20-35% of total calories'}
                </p>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h4 className="mb-2 text-sm font-semibold text-amber-900">
                  {locale === 'tr' ? 'Karbonhidrat' : 'Carbohydrates'}
                </h4>
                <div className="mb-1 text-2xl font-bold text-amber-600">
                  {result.macros.carbs.min}-{result.macros.carbs.max}g
                </div>
                <p className="text-xs text-amber-700">
                  {locale === 'tr' ? 'Kalan kaloriler' : 'Remaining calories'}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-neutral-100 p-4">
              <p className="text-xs text-neutral-600">
                {locale === 'tr'
                  ? '💡 İpucu: Protein 1g = 4 kalori, Yağ 1g = 9 kalori, Karbonhidrat 1g = 4 kalori'
                  : '💡 Tip: Protein 1g = 4 calories, Fat 1g = 9 calories, Carbs 1g = 4 calories'}
              </p>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default TDEECalculator;
