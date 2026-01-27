'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculateCalories,
  activityLevels,
  goals,
  getRecommendedCalories,
} from './calorieLogic';
import { CalorieInput, Goal, ActivityLevel, Gender } from './calorieTypes';
import { Flame, Activity, Target, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import CalorieResultsDisplay from './components/CalorieResultsDisplay';

interface CalorieCalculatorProps {
  locale: 'en' | 'tr';
}

const CalorieCalculator: React.FC<CalorieCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<Gender>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderately_active');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    // Validation
    if (!ageNum || ageNum < 15 || ageNum > 100) {
      setError(
        locale === 'tr' ? 'Yaş 15-100 arasında olmalı' : 'Age must be between 15 and 100'
      );
      return;
    }

    if (!heightNum || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir boy girin' : 'Please enter a valid height');
      return;
    }

    if (!weightNum || weightNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight'
      );
      return;
    }

    const input: CalorieInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      activityLevel,
      goal,
      unit,
      formula: 'mifflin', // Using Mifflin-St Jeor as default (more accurate)
    };

    const calorieResult = calculateCalories(input);
    setResult(calorieResult);
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setGender('male');
    setActivityLevel('moderately_active');
    setGoal('maintain');
    setResult(null);
    setError('');
  };

  const recommendedCalories = result ? getRecommendedCalories(result, goal) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kalori Hesaplama' : 'Calorie Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Günlük kalori ihtiyacınızı hesaplayın'
                : 'Calculate your daily calorie needs'}
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

        {/* Personal Information */}
        <div className="mb-6 space-y-4">
          <h3 className="text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Kişisel Bilgiler' : 'Personal Information'}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label={locale === 'tr' ? 'Yaş' : 'Age'}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="25"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'years'}</span>}
              required
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {locale === 'tr' ? 'Cinsiyet' : 'Gender'}
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    gender === 'male'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {locale === 'tr' ? 'Erkek' : 'Male'}
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    gender === 'female'
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {locale === 'tr' ? 'Kadın' : 'Female'}
                </button>
              </div>
            </div>

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
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </h3>
          <div className="space-y-2">
            {Object.values(activityLevels).map((level) => (
              <button
                key={level.name}
                type="button"
                onClick={() => setActivityLevel(level.name)}
                className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                  activityLevel === level.name
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-primary-600" />
                      <span className="font-medium text-neutral-900">
                        {level.label[locale]}
                      </span>
                      <span className="text-sm text-neutral-500">
                        ({level.multiplier}x)
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600">
                      {level.description[locale]}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {level.examples[locale]}
                    </p>
                  </div>
                  {activityLevel === level.name && (
                    <div className="ml-2 h-5 w-5 flex-shrink-0 rounded-full bg-primary-600 text-white flex items-center justify-center">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Goal Selection */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
          </h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {Object.values(goals).map((g) => (
              <button
                key={g.name}
                type="button"
                onClick={() => setGoal(g.name)}
                className={`rounded-lg border-2 p-4 text-center transition-all ${
                  goal === g.name
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="mb-2 flex justify-center">
                  {g.name === 'lose' && <TrendingDown className="h-6 w-6 text-green-600" />}
                  {g.name === 'maintain' && <Minus className="h-6 w-6 text-blue-600" />}
                  {g.name === 'gain' && <TrendingUp className="h-6 w-6 text-orange-600" />}
                </div>
                <div className="font-medium text-neutral-900">{g.label[locale]}</div>
                <div className="mt-1 text-xs text-neutral-600">{g.description[locale]}</div>
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
      {result && recommendedCalories && (
        <CalorieResultsDisplay
          result={result}
          goal={goal}
          recommendedCalories={recommendedCalories}
          locale={locale}
        />
      )}
    </div>
  );
};

export default CalorieCalculator;
