'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import { calculateWeightGain, getActivityLevelLabel, getWeightGainRateLabel } from './weightGainLogic';
import { WeightGainInput, WeightGainResult, ActivityLevel, WeightGainRate } from './weightGainTypes';
import { TrendingUp, Target, Flame, Calendar, Dumbbell, Apple } from 'lucide-react';

interface WeightGainCalculatorProps {
  locale: 'en' | 'tr';
}

const WeightGainCalculator: React.FC<WeightGainCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [targetWeight, setTargetWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [rate, setRate] = useState<WeightGainRate>('moderate');
  const [result, setResult] = useState<WeightGainResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const currentWeightNum = parseFloat(currentWeight);
    const targetWeightNum = parseFloat(targetWeight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age);

    if (!currentWeightNum || !targetWeightNum || !heightNum || !ageNum) {
      setError(locale === 'tr' ? 'Lütfen tüm alanları doldurun' : 'Please fill in all fields');
      return;
    }

    if (targetWeightNum <= currentWeightNum) {
      setError(
        locale === 'tr'
          ? 'Hedef kilo mevcut kilodan yüksek olmalıdır'
          : 'Target weight must be higher than current weight'
      );
      return;
    }

    if (ageNum < 15 || ageNum > 80) {
      setError(locale === 'tr' ? 'Yaş 15-80 arasında olmalıdır' : 'Age must be between 15 and 80');
      return;
    }

    const input: WeightGainInput = {
      currentWeight: currentWeightNum,
      targetWeight: targetWeightNum,
      height: heightNum,
      age: ageNum,
      gender,
      activityLevel,
      unit,
      rate,
    };

    const calculationResult = calculateWeightGain(input);
    setResult(calculationResult);
  };

  const handleReset = () => {
    setCurrentWeight('');
    setTargetWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setActivityLevel('moderate');
    setRate('moderate');
    setResult(null);
    setError('');
  };

  const activityOptions = (['sedentary', 'light', 'moderate', 'active', 'veryActive'] as ActivityLevel[]).map(
    (level) => ({
      value: level,
      label: getActivityLevelLabel(level, locale),
    })
  );

  const rateOptions = (['slow', 'moderate', 'fast'] as WeightGainRate[]).map((r) => ({
    value: r,
    label: getWeightGainRateLabel(r, locale),
  }));

  const weightUnit = unit === 'metric' ? tUnits('kg') : tUnits('lbs');

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kilo Alma Hesaplayıcı' : 'Weight Gain Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Sağlıklı kilo alma planınızı oluşturun'
                : 'Create your healthy weight gain plan'}
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

        {/* Weight Inputs */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Mevcut Kilo' : 'Current Weight'}
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder={unit === 'metric' ? '55' : '121'}
            rightIcon={<span className="text-sm">{weightUnit}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Hedef Kilo' : 'Target Weight'}
            type="number"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
            rightIcon={<span className="text-sm">{weightUnit}</span>}
            required
          />
        </div>

        {/* Height and Age */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
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
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'years'}</span>}
            required
          />
        </div>

        {/* Gender */}
        <div className="mt-6">
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

        {/* Activity Level */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
            options={activityOptions}
          />
        </div>

        {/* Weight Gain Rate */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Kilo Alma Hızı' : 'Weight Gain Rate'}
            value={rate}
            onChange={(e) => setRate(e.target.value as WeightGainRate)}
            options={rateOptions}
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
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini Süre' : 'Estimated Timeline'}
              </h3>
              <div className="mb-2 text-5xl font-bold text-green-600">
                {result.estimatedWeeks} {locale === 'tr' ? 'hafta' : 'weeks'}
              </div>
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Tahmini bitiş tarihi: ' : 'Estimated completion: '}
                <span className="font-semibold">
                  {result.estimatedDate.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </p>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <Target className="mx-auto mb-2 h-6 w-6 text-green-500" />
              <p className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Alınacak Toplam Kilo' : 'Total Weight to Gain'}
              </p>
              <p className="text-2xl font-bold text-neutral-900">
                {result.totalWeightToGain} {weightUnit}
              </p>
            </Card>

            <Card className="text-center">
              <TrendingUp className="mx-auto mb-2 h-6 w-6 text-blue-500" />
              <p className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Haftalık Kilo Artışı' : 'Weekly Weight Gain'}
              </p>
              <p className="text-2xl font-bold text-neutral-900">
                {result.weeklyGain} {weightUnit}
              </p>
            </Card>

            <Card className="text-center">
              <Flame className="mx-auto mb-2 h-6 w-6 text-orange-500" />
              <p className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Günlük Kalori Hedefi' : 'Daily Calorie Target'}
              </p>
              <p className="text-2xl font-bold text-neutral-900">
                {result.dailyCalorieTarget.toLocaleString()} kcal
              </p>
            </Card>

            <Card className="text-center">
              <Calendar className="mx-auto mb-2 h-6 w-6 text-purple-500" />
              <p className="text-xs text-neutral-500">
                {locale === 'tr' ? 'Günlük Kalori Fazlası' : 'Daily Calorie Surplus'}
              </p>
              <p className="text-2xl font-bold text-neutral-900">
                +{result.dailyCalorieSurplus} kcal
              </p>
            </Card>

            <Card className="text-center">
              <Dumbbell className="mx-auto mb-2 h-6 w-6 text-indigo-500" />
              <p className="text-xs text-neutral-500">TDEE</p>
              <p className="text-2xl font-bold text-neutral-900">
                {result.tdee.toLocaleString()} kcal
              </p>
            </Card>

            <Card className="text-center">
              <Apple className="mx-auto mb-2 h-6 w-6 text-red-500" />
              <p className="text-xs text-neutral-500">
                {locale === 'tr' ? 'VKİ Değişimi' : 'BMI Change'}
              </p>
              <p className="text-2xl font-bold text-neutral-900">
                {result.bmiStart} → {result.bmiEnd}
              </p>
            </Card>
          </div>

          {/* Macro Targets */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Günlük Makro Hedefleri' : 'Daily Macro Targets'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-4 text-center">
                <p className="text-xs font-medium text-blue-600">
                  {locale === 'tr' ? 'Protein' : 'Protein'}
                </p>
                <p className="text-2xl font-bold text-blue-700">{result.macros.protein}g</p>
                <p className="text-xs text-blue-500">{result.macros.protein * 4} kcal</p>
              </div>
              <div className="rounded-lg bg-amber-50 p-4 text-center">
                <p className="text-xs font-medium text-amber-600">
                  {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
                </p>
                <p className="text-2xl font-bold text-amber-700">{result.macros.carbs}g</p>
                <p className="text-xs text-amber-500">{result.macros.carbs * 4} kcal</p>
              </div>
              <div className="rounded-lg bg-rose-50 p-4 text-center">
                <p className="text-xs font-medium text-rose-600">
                  {locale === 'tr' ? 'Yağ' : 'Fat'}
                </p>
                <p className="text-2xl font-bold text-rose-700">{result.macros.fat}g</p>
                <p className="text-xs text-rose-500">{result.macros.fat * 9} kcal</p>
              </div>
            </div>
          </Card>

          {/* Weekly Milestones */}
          {result.milestones.length > 0 && (
            <Card>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Haftalık Kilometre Taşları' : 'Weekly Milestones'}
              </h3>
              <div className="space-y-3">
                {result.milestones.map((milestone, index) => {
                  const progress = (milestone.totalGained / result.totalWeightToGain) * 100;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-20 text-sm font-medium text-neutral-600">
                        {locale === 'tr' ? `${milestone.week}. hafta` : `Week ${milestone.week}`}
                      </div>
                      <div className="flex-1">
                        <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-24 text-right text-sm font-medium text-neutral-700">
                        {milestone.weight} {weightUnit}
                      </div>
                      <div className="hidden w-28 text-right text-xs text-neutral-500 sm:block">
                        {milestone.date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          )}

          {/* Tips */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Sağlıklı Kilo Alma İpuçları' : 'Healthy Weight Gain Tips'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {(locale === 'tr'
                ? [
                    'Günde 5-6 küçük öğün yiyin, 3 büyük öğün yerine',
                    'Her öğünde protein kaynağı tüketin (et, yumurta, süt ürünleri)',
                    'Sağlıklı yağlar ekleyin (zeytinyağı, avokado, kuruyemiş)',
                    'Kuvvet antrenmanı yapın, kas kütlesi kazanın',
                    'Yeterli uyku alın (günde 7-9 saat)',
                    'Bol su için ancak yemeklerden önce içmeyin',
                    'Tam tahıllı besinler tercih edin',
                    'Sabırlı olun, sağlıklı kilo alma zaman alır',
                  ]
                : [
                    'Eat 5-6 smaller meals throughout the day instead of 3 large ones',
                    'Include a protein source in every meal (meat, eggs, dairy)',
                    'Add healthy fats (olive oil, avocado, nuts)',
                    'Do strength training to build muscle mass',
                    'Get adequate sleep (7-9 hours per night)',
                    'Drink plenty of water but not before meals',
                    'Choose whole grain foods',
                    'Be patient, healthy weight gain takes time',
                  ]
              ).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 rounded-lg bg-green-50 p-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm text-neutral-700">{tip}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Notes */}
          <Card className="border-amber-200 bg-amber-50">
            <h3 className="mb-3 text-lg font-semibold text-amber-900">
              {locale === 'tr' ? 'Önemli Hatırlatmalar' : 'Important Reminders'}
            </h3>
            <ul className="space-y-2 text-sm text-amber-800">
              {(locale === 'tr'
                ? [
                    'Bu hesaplayıcı genel bir tahmin sunar. Bireysel sonuçlar metabolizma, genetik ve yaşam tarzına göre değişebilir.',
                    'Kilo alma sürecinde düzenli olarak bir sağlık profesyoneline danışmanız önerilir.',
                    'Çok hızlı kilo almak sağlıksız yağ birikimine yol açabilir. Kademeli ve istikrarlı bir yaklaşım tercih edin.',
                    'Kas kütlesi kazanmak için kuvvet antrenmanını kalori fazlası ile birleştirin.',
                  ]
                : [
                    'This calculator provides a general estimate. Individual results may vary based on metabolism, genetics, and lifestyle.',
                    'It is recommended to consult a healthcare professional regularly during your weight gain journey.',
                    'Gaining weight too quickly can lead to unhealthy fat accumulation. Prefer a gradual and steady approach.',
                    'Combine strength training with calorie surplus to gain muscle mass.',
                  ]
              ).map((note, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 text-amber-500">&#9888;</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Card>
        </>
      )}
    </div>
  );
};

export default WeightGainCalculator;
