'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import { calculateDailyStepGoal, getStepLevel, stepLevels } from './dailyStepGoalLogic';
import { DailyStepGoalInput, DailyStepGoalResult } from './dailyStepGoalTypes';
import { Footprints, Flame, Clock, MapPin, Target, TrendingUp, Activity } from 'lucide-react';

interface DailyStepGoalCalculatorProps {
  locale: 'en' | 'tr';
}

const DailyStepGoalCalculator: React.FC<DailyStepGoalCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<string>('moderately_active');
  const [goal, setGoal] = useState<string>('maintenance');
  const [result, setResult] = useState<DailyStepGoalResult | null>(null);
  const [error, setError] = useState<string>('');

  const activityOptions = [
    {
      value: 'sedentary',
      label: locale === 'tr' ? 'Hareketsiz (Masa başı iş)' : 'Sedentary (Desk job)',
    },
    {
      value: 'lightly_active',
      label: locale === 'tr' ? 'Az Aktif (Hafif yürüyüş)' : 'Lightly Active (Light walking)',
    },
    {
      value: 'moderately_active',
      label: locale === 'tr' ? 'Orta Aktif (Düzenli yürüyüş)' : 'Moderately Active (Regular walking)',
    },
    {
      value: 'very_active',
      label: locale === 'tr' ? 'Çok Aktif (Yoğun egzersiz)' : 'Very Active (Intense exercise)',
    },
  ];

  const goalOptions = [
    {
      value: 'weight_loss',
      label: locale === 'tr' ? 'Kilo Vermek' : 'Weight Loss',
    },
    {
      value: 'maintenance',
      label: locale === 'tr' ? 'Sağlığı Korumak' : 'Health Maintenance',
    },
    {
      value: 'fitness',
      label: locale === 'tr' ? 'Fitness Geliştirmek' : 'Improve Fitness',
    },
    {
      value: 'heart_health',
      label: locale === 'tr' ? 'Kalp Sağlığı' : 'Heart Health',
    },
  ];

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!ageNum || ageNum < 6 || ageNum > 120) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (6-120)' : 'Please enter a valid age (6-120)');
      return;
    }

    if (!weightNum || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight');
      return;
    }

    if (!heightNum || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir boy girin' : 'Please enter a valid height');
      return;
    }

    const input: DailyStepGoalInput = {
      age: ageNum,
      weight: weightNum,
      height: heightNum,
      gender,
      unit,
      activityLevel: activityLevel as DailyStepGoalInput['activityLevel'],
      goal: goal as DailyStepGoalInput['goal'],
    };

    const calcResult = calculateDailyStepGoal(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setHeight('');
    setGender('male');
    setActivityLevel('moderately_active');
    setGoal('maintenance');
    setResult(null);
    setError('');
  };

  const levelData = result ? stepLevels[result.level] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <Footprints className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Günlük Adım Hedefi' : 'Daily Step Goal'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Size özel günlük adım hedefinizi hesaplayın'
                : 'Calculate your personalized daily step goal'}
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
            label={locale === 'tr' ? 'Cinsiyet' : 'Gender'}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              {
                value: 'male',
                label: locale === 'tr' ? 'Erkek' : 'Male',
              },
              {
                value: 'female',
                label: locale === 'tr' ? 'Kadın' : 'Female',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Input
            label={locale === 'tr' ? 'Yaş' : 'Age'}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'yrs'}</span>}
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

        {/* Activity Level */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            options={activityOptions}
          />
        </div>

        {/* Goal */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            options={goalOptions}
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
      {result && levelData && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Günlük Adım Hedefiniz' : 'Your Daily Step Goal'}
              </h3>
              <div className="mb-2 text-6xl font-bold text-emerald-600">
                {result.recommendedSteps.toLocaleString()}
              </div>
              <p className="mb-4 text-lg text-neutral-600">
                {locale === 'tr' ? 'adım / gün' : 'steps / day'}
              </p>
              <Badge
                variant={
                  result.level === 'active' || result.level === 'highly_active'
                    ? 'success'
                    : result.level === 'somewhat_active'
                      ? 'primary'
                      : result.level === 'low_active'
                        ? 'warning'
                        : 'danger'
                }
                size="lg"
              >
                {levelData.label[locale]}
              </Badge>
            </div>

            {/* Step Range */}
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between text-sm">
                <div className="text-center">
                  <p className="font-semibold text-neutral-900">{result.minimumSteps.toLocaleString()}</p>
                  <p className="text-neutral-500">{locale === 'tr' ? 'Minimum' : 'Minimum'}</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-emerald-600">{result.recommendedSteps.toLocaleString()}</p>
                  <p className="text-neutral-500">{locale === 'tr' ? 'Önerilen' : 'Recommended'}</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-neutral-900">{result.optimalSteps.toLocaleString()}</p>
                  <p className="text-neutral-500">{locale === 'tr' ? 'Optimal' : 'Optimal'}</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-500"
                  style={{ width: `${Math.min((result.recommendedSteps / result.optimalSteps) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Interpretation */}
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <p className="text-sm text-neutral-700">{levelData.interpretation[locale]}</p>
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                  <Flame className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{result.breakdown.estimatedCalories}</p>
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Yakılan Kalori' : 'Calories Burned'}</p>
            </Card>

            <Card className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">
                {result.breakdown.estimatedDistance} {unit === 'metric' ? 'km' : 'mi'}
              </p>
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Tahmini Mesafe' : 'Est. Distance'}</p>
            </Card>

            <Card className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{result.breakdown.estimatedTime}</p>
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Dakika' : 'Minutes'}</p>
            </Card>

            <Card className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-neutral-900">{result.weeklyTarget.toLocaleString()}</p>
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Haftalık Hedef' : 'Weekly Target'}</p>
            </Card>
          </div>

          {/* Walk Breakdown */}
          <Card>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <Activity className="h-5 w-5 text-emerald-600" />
              {locale === 'tr' ? 'Yürüyüş Planı' : 'Walking Plan'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-4">
                <div>
                  <p className="font-medium text-neutral-900">
                    {locale === 'tr' ? 'Normal Tempolu Yürüyüş' : 'Casual Walk'}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? '~3-4 km/saat hız' : '~2-2.5 mph pace'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-neutral-900">{result.breakdown.casualWalk.toLocaleString()}</p>
                  <p className="text-sm text-neutral-500">{locale === 'tr' ? 'adım' : 'steps'}</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-4">
                <div>
                  <p className="font-medium text-neutral-900">
                    {locale === 'tr' ? 'Tempolu Yürüyüş' : 'Brisk Walk'}
                  </p>
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? '~5-6 km/saat hız' : '~3-4 mph pace'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-600">{result.breakdown.briskWalk.toLocaleString()}</p>
                  <p className="text-sm text-neutral-500">{locale === 'tr' ? 'adım' : 'steps'}</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-4 rounded-lg border border-neutral-200 p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500">{locale === 'tr' ? 'Adım Uzunluğu' : 'Stride Length'}</p>
                  <p className="font-medium text-neutral-900">
                    {result.strideLength} {unit === 'metric' ? 'cm' : 'in'}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500">{locale === 'tr' ? 'Adım Başına Kalori' : 'Cal per Step'}</p>
                  <p className="font-medium text-neutral-900">{result.caloriesPerStep.toFixed(3)} kcal</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Tips Card */}
          <Card>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-900">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              {locale === 'tr' ? 'Adım Sayınızı Artırma İpuçları' : 'Tips to Increase Your Steps'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {(locale === 'tr'
                ? [
                    'İşe yürüyerek veya bisikletle gidin',
                    'Asansör yerine merdivenleri kullanın',
                    'Öğle yemeğinde kısa bir yürüyüş yapın',
                    'Telefon görüşmelerinde yürüyün',
                    'Arabanızı uzağa park edin',
                    'Akşam yemeğinden sonra yürüyüş yapın',
                  ]
                : [
                    'Walk or bike to work',
                    'Take the stairs instead of elevator',
                    'Take a short walk during lunch',
                    'Walk while on phone calls',
                    'Park your car farther away',
                    'Take an after-dinner walk',
                  ]
              ).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 rounded-lg bg-neutral-50 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    {index + 1}
                  </span>
                  <p className="text-sm text-neutral-700">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default DailyStepGoalCalculator;
