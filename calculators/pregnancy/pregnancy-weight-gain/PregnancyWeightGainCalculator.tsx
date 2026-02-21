'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculatePregnancyWeightGain,
  bmiCategoryLabels,
  statusLabels,
} from './pregnancyWeightGainLogic';
import { PregnancyWeightGainInput, PregnancyWeightGainResult } from './pregnancyWeightGainTypes';
import { Baby, Scale, TrendingUp, TrendingDown, Target } from 'lucide-react';
import WeightGainChart from './components/WeightGainChart';
import TrimesterBreakdownCard from './components/TrimesterBreakdownCard';
import NutritionTips from './components/NutritionTips';
import WeightDistribution from './components/WeightDistribution';
import WarningSignsCard from './components/WarningSignsCard';

interface PregnancyWeightGainCalculatorProps {
  locale: 'en' | 'tr';
}

const PregnancyWeightGainCalculator: React.FC<PregnancyWeightGainCalculatorProps> = ({
  locale,
}) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<string>('');
  const [preWeight, setPreWeight] = useState<string>('');
  const [currentWeight, setCurrentWeight] = useState<string>('');
  const [currentWeek, setCurrentWeek] = useState<string>('');
  const [twins, setTwins] = useState<string>('no');
  const [result, setResult] = useState<PregnancyWeightGainResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const heightNum = parseFloat(height);
    const preWeightNum = parseFloat(preWeight);
    const currentWeightNum = parseFloat(currentWeight);
    const weekNum = parseInt(currentWeek, 10);

    if (!heightNum || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir boy girin' : 'Please enter a valid height');
      return;
    }
    if (!preWeightNum || preWeightNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen hamilelik öncesi kilonuzu girin'
          : 'Please enter your pre-pregnancy weight'
      );
      return;
    }
    if (!currentWeightNum || currentWeightNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen mevcut kilonuzu girin' : 'Please enter your current weight'
      );
      return;
    }
    if (!weekNum || weekNum < 1 || weekNum > 42) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli bir hamilelik haftası girin (1-42)'
          : 'Please enter a valid pregnancy week (1-42)'
      );
      return;
    }

    const input: PregnancyWeightGainInput = {
      prePregnancyWeight: preWeightNum,
      currentWeight: currentWeightNum,
      height: heightNum,
      currentWeek: weekNum,
      twins: twins === 'yes',
      unit,
    };

    const calcResult = calculatePregnancyWeightGain(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setHeight('');
    setPreWeight('');
    setCurrentWeight('');
    setCurrentWeek('');
    setTwins('no');
    setResult(null);
    setError('');
  };

  const unitLabel = unit === 'metric' ? tUnits('kg') : tUnits('lbs');

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Baby className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Hamilelik Kilo Alımı' : 'Pregnancy Weight Gain'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'IOM/ACOG kılavuzlarına göre sağlıklı kilo takibi'
                : 'Healthy weight tracking based on IOM/ACOG guidelines'}
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

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={t('height')}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '165' : '65'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
            }
            required
          />
          <Input
            label={
              locale === 'tr' ? 'Hamilelik Öncesi Kilo' : 'Pre-Pregnancy Weight'
            }
            type="number"
            value={preWeight}
            onChange={(e) => setPreWeight(e.target.value)}
            placeholder={unit === 'metric' ? '60' : '132'}
            rightIcon={<span className="text-sm">{unitLabel}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Mevcut Kilo' : 'Current Weight'}
            type="number"
            value={currentWeight}
            onChange={(e) => setCurrentWeight(e.target.value)}
            placeholder={unit === 'metric' ? '65' : '143'}
            rightIcon={<span className="text-sm">{unitLabel}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Hamilelik Haftası' : 'Pregnancy Week'}
            type="number"
            value={currentWeek}
            onChange={(e) => setCurrentWeek(e.target.value)}
            placeholder="20"
            rightIcon={<span className="text-sm">{tUnits('weeks')}</span>}
            required
          />
        </div>

        {/* Twins Toggle */}
        <div className="mt-6">
          <RadioGroup
            label={locale === 'tr' ? 'İkiz Gebelik' : 'Twin Pregnancy'}
            name="twins"
            value={twins}
            onChange={(value) => setTwins(value)}
            options={[
              {
                value: 'no',
                label: locale === 'tr' ? 'Tek bebek' : 'Single',
              },
              {
                value: 'yes',
                label: locale === 'tr' ? 'İkiz' : 'Twins',
              },
            ]}
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

      {/* Result */}
      {result && (
        <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {tCommon('result')}
            </h3>

            {/* Current gain display */}
            <div className="mb-2 text-5xl font-bold text-pink-600">
              {result.currentGain > 0 ? '+' : ''}
              {result.currentGain} {unitLabel}
            </div>
            <p className="mb-3 text-sm text-neutral-600">
              {locale === 'tr'
                ? `${result.currentWeek}. haftada toplam kilo alımınız`
                : `Your total weight gain at week ${result.currentWeek}`}
            </p>

            {/* Status badge */}
            <Badge
              variant={
                result.status === 'on-track'
                  ? 'success'
                  : result.status === 'below'
                    ? 'warning'
                    : 'danger'
              }
              size="lg"
            >
              {statusLabels[result.status][locale]}
            </Badge>
          </div>

          {/* Key metrics grid */}
          <div className="mt-6 grid gap-4 border-t border-pink-200 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-3 text-center">
              <div className="mb-1 flex items-center justify-center gap-1">
                <Scale className="h-4 w-4 text-pink-500" />
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {locale === 'tr' ? 'VKİ' : 'BMI'}
                </span>
              </div>
              <div className="text-xl font-bold text-neutral-900">{result.prePregnancyBMI}</div>
              <div className="text-xs text-neutral-500">
                {bmiCategoryLabels[result.bmiCategory][locale]}
              </div>
            </div>

            <div className="rounded-lg bg-white p-3 text-center">
              <div className="mb-1 flex items-center justify-center gap-1">
                <Target className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {locale === 'tr' ? 'Hedef Aralık' : 'Target Range'}
                </span>
              </div>
              <div className="text-xl font-bold text-emerald-700">
                {result.expectedGainAtCurrentWeek.min}-{result.expectedGainAtCurrentWeek.max}
              </div>
              <div className="text-xs text-neutral-500">
                {unitLabel} ({locale === 'tr' ? `${result.currentWeek}. hafta` : `week ${result.currentWeek}`})
              </div>
            </div>

            <div className="rounded-lg bg-white p-3 text-center">
              <div className="mb-1 flex items-center justify-center gap-1">
                <TrendingUp className="h-4 w-4 text-blue-500" />
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {locale === 'tr' ? 'Toplam Hedef' : 'Total Target'}
                </span>
              </div>
              <div className="text-xl font-bold text-blue-700">
                {result.recommendedTotalMin}-{result.recommendedTotalMax}
              </div>
              <div className="text-xs text-neutral-500">
                {unitLabel} ({locale === 'tr' ? '40 hafta' : '40 weeks'})
              </div>
            </div>

            <div className="rounded-lg bg-white p-3 text-center">
              <div className="mb-1 flex items-center justify-center gap-1">
                <TrendingDown className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium uppercase text-neutral-500">
                  {locale === 'tr' ? 'Kalan' : 'Remaining'}
                </span>
              </div>
              <div className="text-xl font-bold text-purple-700">
                {result.remainingGainNeeded.min}-{result.remainingGainNeeded.max}
              </div>
              <div className="text-xs text-neutral-500">
                {unitLabel} ({result.remainingWeeks} {locale === 'tr' ? 'hafta' : 'weeks'})
              </div>
            </div>
          </div>

          {/* Weekly target info */}
          <div className="mt-4 rounded-lg bg-pink-100 p-3">
            <p className="text-sm text-pink-900">
              {locale === 'tr' ? (
                <>
                  2. ve 3. trimesterde haftalık hedef kilo alımınız:{' '}
                  <strong>
                    {result.weeklyTargetSecondThird.min}-{result.weeklyTargetSecondThird.max}{' '}
                    {unitLabel}/hafta
                  </strong>
                </>
              ) : (
                <>
                  Your weekly target weight gain for 2nd and 3rd trimester:{' '}
                  <strong>
                    {result.weeklyTargetSecondThird.min}-{result.weeklyTargetSecondThird.max}{' '}
                    {unitLabel}/week
                  </strong>
                </>
              )}
            </p>
          </div>
        </Card>
      )}

      {/* Enhanced Post-Calculation Content */}
      {result && (
        <>
          {/* Weight Gain Chart */}
          <WeightGainChart
            weeklyTargets={result.weeklyTargets}
            currentWeek={result.currentWeek}
            currentWeight={parseFloat(currentWeight)}
            unit={unit}
            locale={locale}
          />

          {/* Trimester Breakdown */}
          <TrimesterBreakdownCard
            trimesterBreakdown={result.trimesterBreakdown}
            unit={unit}
            locale={locale}
          />

          {/* Weight Distribution */}
          <WeightDistribution currentWeek={result.currentWeek} locale={locale} />

          {/* Nutrition Tips */}
          <NutritionTips
            bmiCategory={result.bmiCategory}
            currentWeek={result.currentWeek}
            status={result.status}
            locale={locale}
          />

          {/* Warning Signs */}
          <WarningSignsCard locale={locale} />
        </>
      )}
    </div>
  );
};

export default PregnancyWeightGainCalculator;
