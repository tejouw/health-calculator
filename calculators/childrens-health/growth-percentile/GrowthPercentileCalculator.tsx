'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { evaluateGrowth, percentileCategories } from './growthLogic';
import { GrowthInput, GrowthResult } from './growthTypes';
import { Baby, TrendingUp, Activity, AlertCircle } from 'lucide-react';

interface GrowthPercentileCalculatorProps {
  locale: 'en' | 'tr';
}

const GrowthPercentileCalculator: React.FC<GrowthPercentileCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [ageYears, setAgeYears] = useState<string>('');
  const [ageMonths, setAgeMonths] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<GrowthResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const years = parseInt(ageYears) || 0;
    const months = parseInt(ageMonths) || 0;
    const totalMonths = years * 12 + months;
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!totalMonths || totalMonths < 0 || totalMonths > 240) {
      setError(
        locale === 'tr'
          ? 'Lütfen 0-20 yaş arası geçerli bir yaş girin'
          : 'Please enter a valid age between 0-20 years'
      );
      return;
    }

    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli boy ve kilo değerlerini girin'
          : 'Please enter valid height and weight values'
      );
      return;
    }

    const input: GrowthInput = {
      age: totalMonths,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
    };

    const growthResult = evaluateGrowth(input);
    setResult(growthResult);
  };

  const handleReset = () => {
    setAgeYears('');
    setAgeMonths('');
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const getBadgeVariant = (percentile: number) => {
    if (percentile < 3 || percentile > 97) return 'danger';
    if (percentile < 15 || percentile > 95) return 'warning';
    if (percentile >= 50 && percentile < 85) return 'success';
    return 'primary';
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
            <Baby className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Büyüme Persentil Hesaplayıcı' : 'Growth Percentile Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Çocuğunuzun büyümesini izleyin'
                : 'Track your child\'s growth'}
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

        {/* Child Information */}
        <div className="mb-6 space-y-4">
          {/* Gender Selection */}
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
                label: locale === 'tr' ? 'Kız' : 'Female',
              },
            ]}
            orientation="horizontal"
          />

          {/* Age Inputs */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {locale === 'tr' ? 'Yaş' : 'Age'}
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label=""
                type="number"
                value={ageYears}
                onChange={(e) => setAgeYears(e.target.value)}
                placeholder="0"
                min="0"
                max="20"
                rightIcon={
                  <span className="text-sm">{locale === 'tr' ? 'yıl' : 'years'}</span>
                }
              />
              <Input
                label=""
                type="number"
                value={ageMonths}
                onChange={(e) => setAgeMonths(e.target.value)}
                placeholder="0"
                min="0"
                max="11"
                rightIcon={
                  <span className="text-sm">{locale === 'tr' ? 'ay' : 'months'}</span>
                }
              />
            </div>
          </div>

          {/* Height and Weight */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label={t('height')}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === 'metric' ? '110' : '43'}
              step="0.1"
              rightIcon={
                <span className="text-sm">
                  {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                </span>
              }
              required
            />
            <Input
              label={t('weight')}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={unit === 'metric' ? '20' : '44'}
              step="0.1"
              rightIcon={
                <span className="text-sm">
                  {unit === 'metric' ? tUnits('kg') : tUnits('lbs')}
                </span>
              }
              required
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-sm text-danger-main">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        )}

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
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="mb-6 text-center">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'Büyüme Değerlendirmesi' : 'Growth Assessment'}
            </h3>

            {/* Percentile Results Grid */}
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Height Percentile */}
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center justify-center gap-2 text-neutral-600">
                  <TrendingUp className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase">
                    {locale === 'tr' ? 'Boy' : 'Height'}
                  </p>
                </div>
                <p className="mb-2 text-3xl font-bold text-primary-600">
                  {result.heightPercentile.toFixed(0)}
                  <span className="text-sm">th</span>
                </p>
                <Badge variant={getBadgeVariant(result.heightPercentile)} size="sm">
                  {percentileCategories[result.heightCategory].label[locale]}
                </Badge>
              </div>

              {/* Weight Percentile */}
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center justify-center gap-2 text-neutral-600">
                  <Activity className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase">
                    {locale === 'tr' ? 'Kilo' : 'Weight'}
                  </p>
                </div>
                <p className="mb-2 text-3xl font-bold text-primary-600">
                  {result.weightPercentile.toFixed(0)}
                  <span className="text-sm">th</span>
                </p>
                <Badge variant={getBadgeVariant(result.weightPercentile)} size="sm">
                  {percentileCategories[result.weightCategory].label[locale]}
                </Badge>
              </div>

              {/* BMI Percentile */}
              <div className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="mb-2 flex items-center justify-center gap-2 text-neutral-600">
                  <Baby className="h-4 w-4" />
                  <p className="text-xs font-semibold uppercase">BMI</p>
                </div>
                <p className="mb-2 text-3xl font-bold text-primary-600">
                  {result.bmiPercentile.toFixed(0)}
                  <span className="text-sm">th</span>
                </p>
                <Badge variant={getBadgeVariant(result.bmiPercentile)} size="sm">
                  {percentileCategories[result.bmiCategory].label[locale]}
                </Badge>
              </div>
            </div>

            {/* BMI Value */}
            <div className="mt-4">
              <p className="text-sm text-neutral-600">
                BMI: <span className="font-semibold text-neutral-900">{result.bmi}</span>
              </p>
            </div>
          </div>

          {/* Interpretation */}
          <div className="space-y-4 border-t border-neutral-200 pt-6">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{result.interpretation[locale]}</p>
            </div>

            {/* Category Explanations */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="mb-1 text-xs font-semibold text-blue-900">
                  {locale === 'tr' ? 'Boy Kategorisi' : 'Height Category'}
                </p>
                <p className="text-xs text-blue-700">
                  {percentileCategories[result.heightCategory].interpretation[locale]}
                </p>
              </div>
              <div className="rounded-lg bg-purple-50 p-3">
                <p className="mb-1 text-xs font-semibold text-purple-900">
                  {locale === 'tr' ? 'Kilo Kategorisi' : 'Weight Category'}
                </p>
                <p className="text-xs text-purple-700">
                  {percentileCategories[result.weightCategory].interpretation[locale]}
                </p>
              </div>
              <div className="rounded-lg bg-pink-50 p-3">
                <p className="mb-1 text-xs font-semibold text-pink-900">
                  {locale === 'tr' ? 'BMI Kategorisi' : 'BMI Category'}
                </p>
                <p className="text-xs text-pink-700">
                  {percentileCategories[result.bmiCategory].interpretation[locale]}
                </p>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
            <div className="flex gap-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-orange-600" />
              <div className="text-xs text-orange-900">
                <p className="font-semibold">
                  {locale === 'tr' ? 'Önemli Uyarı' : 'Important Notice'}
                </p>
                <p className="mt-1">
                  {locale === 'tr'
                    ? 'Bu sonuçlar yalnızca bilgilendirme amaçlıdır. Çocuğunuzun büyümesi hakkında endişeleriniz varsa mutlaka bir pediatristle görüşün. Persentiller tarama araçlarıdır ve klinik değerlendirme gerektirir.'
                    : 'These results are for informational purposes only. If you have concerns about your child\'s growth, please consult a pediatrician. Percentiles are screening tools and require clinical evaluation.'}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default GrowthPercentileCalculator;
