'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateBMI, getBMICategory, getHealthyWeightRange, bmiCategories } from './bmiLogic';
import { BMIInput } from './bmiTypes';
import { Scale, TrendingUp, TrendingDown } from 'lucide-react';
import BMIProgressIndicator from './components/BMIProgressIndicator';
import BMICategoryExplainer from './components/BMICategoryExplainer';
import HealthyWeightRange from './components/HealthyWeightRange';
import BMILimitations from './components/BMILimitations';
import BMIHowItWorks from './components/BMIHowItWorks';

interface BMICalculatorProps {
  locale: 'en' | 'tr';
}

const BMICalculator: React.FC<BMICalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values');
      return;
    }

    const input: BMIInput = {
      height: heightNum,
      weight: weightNum,
      unit,
    };

    const bmi = calculateBMI(input);
    setResult(bmi);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const category = result ? getBMICategory(result) : null;
  const categoryData = category ? bmiCategories[category] : null;
  const healthyRange = height ? getHealthyWeightRange(parseFloat(height), unit) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'VKİ Hesaplama' : 'BMI Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Vücut kitle indeksinizi hesaplayın'
                : 'Calculate your body mass index'}
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
      {result && categoryData && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {tCommon('result')}
            </h3>
            <div className="mb-4 text-6xl font-bold text-primary-600">{result}</div>
            <Badge
              variant={
                category === 'normal'
                  ? 'success'
                  : category === 'underweight'
                    ? 'primary'
                    : category === 'overweight'
                      ? 'warning'
                      : 'danger'
              }
              size="lg"
            >
              {categoryData.label[locale]}
            </Badge>
          </div>

          {/* BMI Progress Indicator */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <BMIProgressIndicator bmi={result} locale={locale} />
          </div>

          <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{categoryData.interpretation[locale]}</p>
            </div>

            {healthyRange && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Sağlıklı Kilo Aralığı' : 'Healthy Weight Range'}
                </h4>
                <div className="flex items-center justify-center gap-2 text-sm text-neutral-700">
                  <TrendingDown className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{healthyRange.min}</span>
                  <span>-</span>
                  <span className="font-medium">{healthyRange.max}</span>
                  <span>{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Enhanced Content Sections */}
      {result && categoryData && healthyRange && (
        <>
          {/* Healthy Weight Range Visualization */}
          <HealthyWeightRange
            currentWeight={parseFloat(weight)}
            currentBMI={result}
            healthyMin={healthyRange.min}
            healthyMax={healthyRange.max}
            unit={unit}
            locale={locale}
          />

          {/* Category Detailed Explanation */}
          {category && <BMICategoryExplainer bmi={result} category={category} locale={locale} />}

          {/* BMI Limitations */}
          <BMILimitations locale={locale} />

          {/* How It Works */}
          <BMIHowItWorks locale={locale} />
        </>
      )}
    </div>
  );
};

export default BMICalculator;
