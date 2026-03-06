'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Select, Badge } from '@/components/ui';
import { calculateWeightLoss, getWeightLossRateLabel, getActivityLevelLabel } from './weightLossLogic';
import { WeightLossInput, WeightLossResult, ActivityLevel, WeightLossRate } from './weightLossTypes';
import { TrendingDown, Calendar, Target, Flame, Scale, Clock, Award } from 'lucide-react';

interface WeightLossCalculatorProps {
  locale: 'en' | 'tr';
}

const WeightLossCalculator: React.FC<WeightLossCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [rate, setRate] = useState<WeightLossRate>('moderate');
  const [result, setResult] = useState<WeightLossResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');

    const cw = parseFloat(currentWeight);
    const tw = parseFloat(targetWeight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (!cw || !tw || !h || !a || cw <= 0 || tw <= 0 || h <= 0 || a <= 0) {
      setError(locale === 'tr' ? 'Lütfen tüm alanları doğru doldurun' : 'Please fill in all fields correctly');
      return;
    }

    if (tw >= cw) {
      setError(locale === 'tr' ? 'Hedef kilo mevcut kilonuzdan düşük olmalıdır' : 'Target weight must be less than current weight');
      return;
    }

    if (a < 15 || a > 100) {
      setError(locale === 'tr' ? 'Yaş 15-100 arasında olmalıdır' : 'Age must be between 15 and 100');
      return;
    }

    const input: WeightLossInput = {
      currentWeight: cw,
      targetWeight: tw,
      height: h,
      age: a,
      gender,
      activityLevel,
      unit,
      rate,
    };

    const calcResult = calculateWeightLoss(input);
    setResult(calcResult);
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const weightUnit = unit === 'metric' ? tUnits('kg') : tUnits('lbs');

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <TrendingDown className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kilo Verme Süresi Hesaplayıcı' : 'Weight Loss Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Hedef kilonuza ne zaman ulaşacağınızı öğrenin'
                : 'Find out when you will reach your target weight'}
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
              { value: 'metric', label: t('metric'), description: `${tUnits('cm')}, ${tUnits('kg')}` },
              { value: 'imperial', label: t('imperial'), description: `${tUnits('inch')}, ${tUnits('lbs')}` },
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
            placeholder={unit === 'metric' ? '85' : '187'}
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

        {/* Height & Age */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Input
            label={t('height')}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '175' : '69'}
            rightIcon={<span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>}
            required
          />
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'yrs'}</span>}
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
            label={t('activityLevel')}
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
            options={(['sedentary', 'light', 'moderate', 'active', 'veryActive'] as ActivityLevel[]).map(level => ({
              value: level,
              label: getActivityLevelLabel(level, locale),
            }))}
          />
        </div>

        {/* Weight Loss Rate */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Kilo Verme Hızı' : 'Weight Loss Rate'}
            value={rate}
            onChange={(e) => setRate(e.target.value as WeightLossRate)}
            options={(['slow', 'moderate', 'fast'] as WeightLossRate[]).map(r => ({
              value: r,
              label: getWeightLossRateLabel(r, locale),
            }))}
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
          <Card className="animate-slide-up border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini Süre' : 'Estimated Timeline'}
              </h3>
              <div className="mb-2 text-5xl font-bold text-emerald-600">
                {result.estimatedWeeks} {locale === 'tr' ? 'hafta' : 'weeks'}
              </div>
              <p className="text-lg text-neutral-700">
                {locale === 'tr' ? 'Tahmini bitiş tarihi:' : 'Estimated completion:'}{' '}
                <span className="font-semibold">{formatDate(result.estimatedDate)}</span>
              </p>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <Scale className="h-4 w-4" />
                  <span className="text-xs">{locale === 'tr' ? 'Verilecek' : 'To Lose'}</span>
                </div>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {result.totalWeightToLose} {weightUnit}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-xs">{locale === 'tr' ? 'Haftalık' : 'Weekly'}</span>
                </div>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {result.weeklyLoss} {weightUnit}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <Flame className="h-4 w-4" />
                  <span className="text-xs">{locale === 'tr' ? 'Günlük Kalori' : 'Daily Calories'}</span>
                </div>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {result.dailyCalorieTarget} kcal
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <Target className="h-4 w-4" />
                  <span className="text-xs">{locale === 'tr' ? 'Günlük Açık' : 'Daily Deficit'}</span>
                </div>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {result.dailyCalorieDeficit} kcal
                </p>
              </div>
            </div>

            {/* BMI Change */}
            <div className="mt-4 flex items-center justify-center gap-4 rounded-lg bg-white/60 p-3">
              <div className="text-center">
                <span className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Mevcut VKİ' : 'Current BMI'}
                </span>
                <p className="text-lg font-bold text-orange-600">{result.bmiStart}</p>
              </div>
              <div className="text-2xl text-neutral-400">&rarr;</div>
              <div className="text-center">
                <span className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Hedef VKİ' : 'Target BMI'}
                </span>
                <p className="text-lg font-bold text-emerald-600">{result.bmiEnd}</p>
              </div>
            </div>
          </Card>

          {/* Timeline / Milestones */}
          <Card>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
              <Calendar className="h-5 w-5 text-emerald-600" />
              {locale === 'tr' ? 'Kilo Verme Takvimi' : 'Weight Loss Timeline'}
            </h3>
            <div className="space-y-3">
              {/* Start */}
              <div className="flex items-center gap-3 rounded-lg bg-neutral-50 p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-xs font-bold text-neutral-600">
                  {locale === 'tr' ? 'Şu an' : 'Now'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">{formatDate(new Date())}</p>
                  <p className="text-xs text-neutral-500">
                    {locale === 'tr' ? 'Başlangıç kilonuz' : 'Starting weight'}: {unit === 'metric' ? parseFloat(currentWeight) : parseFloat(currentWeight)} {weightUnit}
                  </p>
                </div>
              </div>

              {/* Milestones */}
              {result.milestones.map((milestone, index) => {
                const isLast = index === result.milestones.length - 1;
                const progress = (milestone.totalLost / result.totalWeightToLose) * 100;

                return (
                  <div
                    key={milestone.week}
                    className={`flex items-center gap-3 rounded-lg p-3 ${
                      isLast ? 'border-2 border-emerald-200 bg-emerald-50' : 'bg-neutral-50'
                    }`}
                  >
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      isLast ? 'bg-emerald-500 text-white' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                      {isLast ? <Award className="h-4 w-4" /> : `${milestone.week}`}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-neutral-900">
                          {isLast
                            ? (locale === 'tr' ? 'Hedefe Ulaşım!' : 'Goal Reached!')
                            : `${locale === 'tr' ? 'Hafta' : 'Week'} ${milestone.week}`}
                        </p>
                        <span className="text-sm font-bold text-emerald-600">
                          {milestone.weight} {weightUnit}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-xs text-neutral-500">{formatDate(milestone.date)}</p>
                        <span className="text-xs text-neutral-500">
                          -{milestone.totalLost} {weightUnit} ({Math.round(progress)}%)
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Tips Card */}
          <Card className="bg-amber-50">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-neutral-900">
              <Clock className="h-5 w-5 text-amber-600" />
              {locale === 'tr' ? 'Önemli Hatırlatmalar' : 'Important Reminders'}
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {locale === 'tr'
                  ? 'Bu hesaplama tahminidir. Gerçek sonuçlar metabolizma, genetik ve yaşam tarzı değişikliklerine göre farklılık gösterebilir.'
                  : 'This is an estimate. Actual results may vary based on metabolism, genetics, and lifestyle changes.'}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {locale === 'tr'
                  ? `Günlük kalori alımınız ${gender === 'male' ? '1500' : '1200'} kcal'in altına düşmemelidir.`
                  : `Daily calorie intake should not go below ${gender === 'male' ? '1500' : '1200'} kcal.`}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {locale === 'tr'
                  ? 'Haftada 0.5-1 kg kilo vermek sağlıklı ve sürdürülebilir kabul edilir.'
                  : 'Losing 0.5-1 kg per week is considered healthy and sustainable.'}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {locale === 'tr'
                  ? 'Kilo verdikçe metabolizmanız yavaşlar, bu yüzden gerçek süre tahminlerden biraz uzun olabilir.'
                  : 'As you lose weight your metabolism slows down, so actual time may be slightly longer.'}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                {locale === 'tr'
                  ? 'Herhangi bir diyet programına başlamadan önce bir sağlık profesyoneline danışmanız önerilir.'
                  : 'Consult a healthcare professional before starting any diet program.'}
              </li>
            </ul>
          </Card>
        </>
      )}
    </div>
  );
};

export default WeightLossCalculator;
