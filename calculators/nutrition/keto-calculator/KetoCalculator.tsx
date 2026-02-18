'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import { calculateKeto } from './ketoLogic';
import { KetoInput, KetoResult, ActivityLevel, KetoGoal } from './ketoTypes';
import { Flame, Zap, Beef, Droplets } from 'lucide-react';
import KetoMacroBreakdown from './components/KetoMacroBreakdown';
import KetosisTimeline from './components/KetosisTimeline';
import KetoFoodGuide from './components/KetoFoodGuide';
import KetoTipsCard from './components/KetoTipsCard';
import KetoDayPlanner from './components/KetoDayPlanner';

interface KetoCalculatorProps {
  locale: 'en' | 'tr';
}

const KetoCalculator: React.FC<KetoCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bodyFat, setBodyFat] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<KetoGoal>('lose');
  const [result, setResult] = useState<KetoResult | null>(null);
  const [error, setError] = useState<string>('');

  const activityOptions = [
    {
      value: 'sedentary',
      label: locale === 'tr' ? 'Hareketsiz' : 'Sedentary',
      description: locale === 'tr' ? 'Masa başı iş, az hareket' : 'Desk job, little movement',
    },
    {
      value: 'light',
      label: locale === 'tr' ? 'Hafif Aktif' : 'Lightly Active',
      description: locale === 'tr' ? 'Haftada 1-3 gün egzersiz' : 'Exercise 1-3 days/week',
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Orta Aktif' : 'Moderately Active',
      description: locale === 'tr' ? 'Haftada 3-5 gün egzersiz' : 'Exercise 3-5 days/week',
    },
    {
      value: 'active',
      label: locale === 'tr' ? 'Aktif' : 'Active',
      description: locale === 'tr' ? 'Haftada 6-7 gün egzersiz' : 'Exercise 6-7 days/week',
    },
    {
      value: 'very_active',
      label: locale === 'tr' ? 'Çok Aktif' : 'Very Active',
      description: locale === 'tr' ? 'Yoğun antrenman / fiziksel iş' : 'Intense training / physical job',
    },
  ];

  const goalOptions = [
    {
      value: 'lose',
      label: locale === 'tr' ? 'Kilo Ver' : 'Lose Weight',
      description: locale === 'tr' ? '%20 kalori açığı' : '20% calorie deficit',
    },
    {
      value: 'maintain',
      label: locale === 'tr' ? 'Kilo Koru' : 'Maintain Weight',
      description: locale === 'tr' ? 'Mevcut kiloyu koru' : 'Keep current weight',
    },
    {
      value: 'gain',
      label: locale === 'tr' ? 'Kas Kazan' : 'Gain Muscle',
      description: locale === 'tr' ? '%10 kalori fazlası' : '10% calorie surplus',
    },
  ];

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const bodyFatNum = bodyFat ? parseFloat(bodyFat) : undefined;

    if (!ageNum || ageNum < 15 || ageNum > 100) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (15-100)' : 'Please enter a valid age (15-100)');
      return;
    }
    if (!heightNum || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir boy girin' : 'Please enter a valid height');
      return;
    }
    if (!weightNum || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight');
      return;
    }

    const input: KetoInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
      activityLevel,
      goal,
      bodyFatPercentage: bodyFatNum,
    };

    const ketoResult = calculateKeto(input);
    setResult(ketoResult);
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setBodyFat('');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Keto Hesaplayıcı' : 'Keto Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Ketojenik diyet makro hedeflerinizi hesaplayın'
                : 'Calculate your ketogenic diet macro targets'}
            </p>
          </div>
        </div>

        {/* Unit System */}
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

        {/* Gender */}
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

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={t('age')}
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
            placeholder={unit === 'metric' ? '75' : '165'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
            }
            required
          />
          <Input
            label={locale === 'tr' ? 'Vücut Yağ Oranı (Opsiyonel)' : 'Body Fat % (Optional)'}
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
            placeholder="20"
            rightIcon={<span className="text-sm">%</span>}
          />
        </div>

        {/* Activity Level */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
            options={activityOptions}
          />
        </div>

        {/* Goal */}
        <div className="mt-6">
          <RadioGroup
            label={locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
            name="goal"
            value={goal}
            onChange={(value) => setGoal(value as KetoGoal)}
            options={goalOptions}
            orientation="horizontal"
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

      {/* Results */}
      {result && (
        <>
          {/* Summary Card */}
          <Card className="animate-slide-up border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Günlük Keto Hedefleriniz' : 'Your Daily Keto Targets'}
              </h3>
              <div className="mb-2 text-5xl font-bold text-orange-600">
                {result.targetCalories}
              </div>
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? 'kcal / gün' : 'kcal / day'}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="mb-1 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-yellow-600">{result.standardKeto.fat}g</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Yağ' : 'Fat'}
                </div>
                <Badge variant="warning" size="sm" className="mt-1">{result.standardKeto.fatPercentage}%</Badge>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="mb-1 flex items-center justify-center">
                  <Beef className="h-5 w-5 text-red-500" />
                </div>
                <div className="text-2xl font-bold text-red-600">{result.standardKeto.protein}g</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Protein' : 'Protein'}
                </div>
                <Badge variant="danger" size="sm" className="mt-1">{result.standardKeto.proteinPercentage}%</Badge>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="mb-1 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-green-600">{result.standardKeto.netCarbs}g</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Net Karb' : 'Net Carbs'}
                </div>
                <Badge variant="success" size="sm" className="mt-1">{result.standardKeto.carbPercentage}%</Badge>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="mb-1 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-2xl font-bold text-blue-600">{(result.waterIntake / 1000).toFixed(1)}L</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Su İhtiyacı' : 'Water Intake'}
                </div>
                <Badge variant="primary" size="sm" className="mt-1">
                  {locale === 'tr' ? 'günlük' : 'daily'}
                </Badge>
              </div>
            </div>

            {/* BMR & TDEE Info */}
            <div className="mt-6 grid gap-3 border-t border-neutral-200 pt-4 sm:grid-cols-3">
              <div className="text-center">
                <span className="text-xs text-neutral-500">BMR</span>
                <div className="text-lg font-semibold text-neutral-800">{result.bmr} kcal</div>
              </div>
              <div className="text-center">
                <span className="text-xs text-neutral-500">TDEE</span>
                <div className="text-lg font-semibold text-neutral-800">{result.tdee} kcal</div>
              </div>
              <div className="text-center">
                <span className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Yağsız Kütle' : 'Lean Mass'}
                </span>
                <div className="text-lg font-semibold text-neutral-800">{result.leanMass} kg</div>
              </div>
            </div>
          </Card>

          {/* Macro Breakdown - 3 Keto Types */}
          <KetoMacroBreakdown result={result} locale={locale} />

          {/* Ketosis Timeline */}
          <KetosisTimeline phases={result.ketosisTimeline} locale={locale} />

          {/* Sample Day Planner */}
          <KetoDayPlanner macros={result.standardKeto} locale={locale} />

          {/* Keto Food Guide */}
          <KetoFoodGuide locale={locale} />

          {/* Tips Card */}
          <KetoTipsCard locale={locale} />
        </>
      )}
    </div>
  );
};

export default KetoCalculator;
