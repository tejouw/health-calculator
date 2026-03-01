'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateHeightPrediction, getHeightCategory, formatHeight } from './heightPredictorLogic';
import { HeightPredictorInput, HeightPredictorResult } from './heightPredictorTypes';
import {
  Ruler,
  TrendingUp,
  TrendingDown,
  Users,
  Baby,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Info,
  Dna,
  Apple,
  Moon,
  Dumbbell,
} from 'lucide-react';

interface HeightPredictorCalculatorProps {
  locale: 'en' | 'tr';
}

const HeightPredictorCalculator: React.FC<HeightPredictorCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [childGender, setChildGender] = useState<'boy' | 'girl'>('boy');
  const [fatherHeight, setFatherHeight] = useState<string>('');
  const [motherHeight, setMotherHeight] = useState<string>('');
  const [result, setResult] = useState<HeightPredictorResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const fatherNum = parseFloat(fatherHeight);
    const motherNum = parseFloat(motherHeight);

    if (!fatherNum || !motherNum || fatherNum <= 0 || motherNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli boy değerleri girin'
          : 'Please enter valid height values'
      );
      return;
    }

    // Basic validation for reasonable height ranges
    if (unit === 'metric') {
      if (fatherNum < 100 || fatherNum > 250 || motherNum < 100 || motherNum > 250) {
        setError(
          locale === 'tr'
            ? 'Boy değerleri 100-250 cm arasında olmalıdır'
            : 'Height values must be between 100-250 cm'
        );
        return;
      }
    } else {
      if (fatherNum < 40 || fatherNum > 100 || motherNum < 40 || motherNum > 100) {
        setError(
          locale === 'tr'
            ? 'Boy değerleri 40-100 inç arasında olmalıdır'
            : 'Height values must be between 40-100 inches'
        );
        return;
      }
    }

    const input: HeightPredictorInput = {
      fatherHeight: fatherNum,
      motherHeight: motherNum,
      childGender,
      unit,
    };

    const prediction = calculateHeightPrediction(input);
    setResult(prediction);
  };

  const handleReset = () => {
    setFatherHeight('');
    setMotherHeight('');
    setResult(null);
    setError('');
  };

  const categoryData = result ? getHeightCategory(result.predictedHeight, result.childGender, result.unit) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Ruler className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Çocuk Boy Tahmini' : 'Child Height Predictor'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Çocuğunuzun tahmini yetişkin boyunu hesaplayın'
                : 'Predict your child\'s estimated adult height'}
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
                description: tUnits('cm'),
              },
              {
                value: 'imperial',
                label: t('imperial'),
                description: tUnits('inch'),
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Child Gender Selection */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Çocuğun Cinsiyeti' : "Child's Gender"}
            name="childGender"
            value={childGender}
            onChange={(value) => setChildGender(value as 'boy' | 'girl')}
            options={[
              {
                value: 'boy',
                label: locale === 'tr' ? 'Erkek' : 'Boy',
                description: locale === 'tr' ? 'Erkek çocuk' : 'Male child',
              },
              {
                value: 'girl',
                label: locale === 'tr' ? 'Kız' : 'Girl',
                description: locale === 'tr' ? 'Kız çocuk' : 'Female child',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Baba Boyu' : "Father's Height"}
            type="number"
            value={fatherHeight}
            onChange={(e) => setFatherHeight(e.target.value)}
            placeholder={unit === 'metric' ? '175' : '69'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
            }
            required
          />
          <Input
            label={locale === 'tr' ? 'Anne Boyu' : "Mother's Height"}
            type="number"
            value={motherHeight}
            onChange={(e) => setMotherHeight(e.target.value)}
            placeholder={unit === 'metric' ? '162' : '64'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
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
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'Tahmini Yetişkin Boyu' : 'Predicted Adult Height'}
            </h3>
            <div className="mb-2 text-5xl font-bold text-purple-600">
              {unit === 'metric'
                ? `${result.predictedHeight} cm`
                : formatHeight(result.predictedHeight * 2.54, 'imperial')}
            </div>
            <p className="mb-4 text-sm text-neutral-500">
              {locale === 'tr'
                ? `Aralık: ${result.rangeMin} - ${result.rangeMax} ${unit === 'metric' ? 'cm' : 'inç'}`
                : `Range: ${result.rangeMin} - ${result.rangeMax} ${unit === 'metric' ? 'cm' : 'in'}`}
            </p>
            <Badge
              variant={
                categoryData.color === 'green' || categoryData.color === 'emerald'
                  ? 'success'
                  : categoryData.color === 'purple'
                    ? 'primary'
                    : 'default'
              }
              size="lg"
            >
              {categoryData.label[locale]}
            </Badge>
          </div>

          {/* Height Comparison Bar */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <h4 className="mb-4 text-center text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Ortalamaya Göre Karşılaştırma' : 'Comparison to Average'}
            </h4>
            <div className="relative mx-auto h-48 w-full max-w-md">
              {/* Average Height Bar */}
              <div className="absolute bottom-0 left-1/4 w-16 -translate-x-1/2">
                <div
                  className="w-full rounded-t-lg bg-neutral-200"
                  style={{ height: '120px' }}
                />
                <p className="mt-2 text-center text-xs text-neutral-500">
                  {locale === 'tr' ? 'Ortalama' : 'Average'}
                </p>
                <p className="text-center text-xs font-semibold text-neutral-700">
                  {result.averageHeight} {unit === 'metric' ? 'cm' : 'in'}
                </p>
              </div>
              {/* Predicted Height Bar */}
              <div className="absolute bottom-0 right-1/4 w-16 translate-x-1/2">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-purple-500 to-pink-400"
                  style={{
                    height: `${Math.max(60, Math.min(180, 120 * (result.predictedHeight / result.averageHeight)))}px`,
                  }}
                />
                <p className="mt-2 text-center text-xs text-neutral-500">
                  {locale === 'tr' ? 'Tahmini' : 'Predicted'}
                </p>
                <p className="text-center text-xs font-semibold text-purple-700">
                  {result.predictedHeight} {unit === 'metric' ? 'cm' : 'in'}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              {result.comparisonToAverage > 0 ? (
                <ArrowUpRight className="h-5 w-5 text-emerald-600" />
              ) : result.comparisonToAverage < 0 ? (
                <ArrowDownRight className="h-5 w-5 text-blue-600" />
              ) : (
                <Minus className="h-5 w-5 text-green-600" />
              )}
              <span className="text-sm font-medium text-neutral-700">
                {locale === 'tr'
                  ? `Ortalamadan ${Math.abs(result.comparisonToAverage)} ${unit === 'metric' ? 'cm' : 'inç'} ${result.comparisonToAverage >= 0 ? 'uzun' : 'kısa'}`
                  : `${Math.abs(result.comparisonToAverage)} ${unit === 'metric' ? 'cm' : 'in'} ${result.comparisonToAverage >= 0 ? 'taller' : 'shorter'} than average`}
              </span>
            </div>
          </div>
        </Card>
      )}

      {/* Additional Info Cards */}
      {result && (
        <>
          {/* Parents Info Card */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Ebeveyn Boy Analizi' : 'Parental Height Analysis'}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4 text-center">
                <p className="text-xs font-medium text-blue-600">
                  {locale === 'tr' ? 'Baba Boyu' : "Father's Height"}
                </p>
                <p className="mt-1 text-2xl font-bold text-blue-700">
                  {fatherHeight} {unit === 'metric' ? 'cm' : 'in'}
                </p>
              </div>
              <div className="rounded-xl bg-pink-50 p-4 text-center">
                <p className="text-xs font-medium text-pink-600">
                  {locale === 'tr' ? 'Anne Boyu' : "Mother's Height"}
                </p>
                <p className="mt-1 text-2xl font-bold text-pink-700">
                  {motherHeight} {unit === 'metric' ? 'cm' : 'in'}
                </p>
              </div>
              <div className="rounded-xl bg-purple-50 p-4 text-center">
                <p className="text-xs font-medium text-purple-600">
                  {locale === 'tr' ? 'Orta Ebeveyn Boyu' : 'Mid-Parental Height'}
                </p>
                <p className="mt-1 text-2xl font-bold text-purple-700">
                  {result.midParentalHeight} {unit === 'metric' ? 'cm' : 'in'}
                </p>
              </div>
            </div>
          </Card>

          {/* Genetic Potential Card */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <Dna className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Genetik Potansiyel' : 'Genetic Potential'}
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="10"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke={result.geneticPotentialPercent >= 100 ? '#8b5cf6' : '#3b82f6'}
                    strokeWidth="10"
                    strokeDasharray={`${(result.geneticPotentialPercent / 120) * 314} 314`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute text-center">
                  <span className="text-2xl font-bold text-neutral-900">
                    {result.geneticPotentialPercent}%
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-neutral-600">
              {locale === 'tr'
                ? `Çocuğunuzun tahmini boyu, ${result.childGender === 'boy' ? 'erkek' : 'kadın'} ortalamasının %${result.geneticPotentialPercent}\'${result.geneticPotentialPercent >= 100 ? 'i' : 'i'} kadardır.`
                : `Your child's predicted height is ${result.geneticPotentialPercent}% of the ${result.childGender === 'boy' ? 'male' : 'female'} average.`}
            </p>
          </Card>

          {/* Height Range Visualization */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Tahmin Aralığı' : 'Prediction Range'}
              </h3>
            </div>
            <div className="mx-auto max-w-md">
              <div className="relative h-8 rounded-full bg-neutral-100">
                <div
                  className="absolute inset-y-0 rounded-full bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300"
                  style={{
                    left: '10%',
                    right: '10%',
                  }}
                />
                <div
                  className="absolute inset-y-0 w-1 bg-purple-700"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-neutral-500">
                <span>
                  {result.rangeMin} {unit === 'metric' ? 'cm' : 'in'}
                </span>
                <span className="font-semibold text-purple-700">
                  {result.predictedHeight} {unit === 'metric' ? 'cm' : 'in'}
                </span>
                <span>
                  {result.rangeMax} {unit === 'metric' ? 'cm' : 'in'}
                </span>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-amber-50 p-3">
              <div className="flex items-start gap-2">
                <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <p className="text-xs text-amber-700">
                  {locale === 'tr'
                    ? 'Tahmin aralığı ±8.5 cm\'dir. Gerçek boy beslenme, uyku, fiziksel aktivite ve genel sağlık durumuna bağlı olarak bu aralık içinde değişebilir.'
                    : 'The prediction range is ±8.5 cm (±3.3 in). Actual height may vary within this range depending on nutrition, sleep, physical activity, and overall health.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Growth Tips */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <Baby className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Sağlıklı Büyüme İçin Öneriler'
                  : 'Tips for Healthy Growth'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: <Apple className="h-5 w-5 text-green-600" />,
                  title: { en: 'Balanced Nutrition', tr: 'Dengeli Beslenme' },
                  desc: {
                    en: 'Ensure adequate protein, calcium, vitamin D, and zinc intake for optimal bone growth.',
                    tr: 'Optimal kemik büyümesi için yeterli protein, kalsiyum, D vitamini ve çinko alımını sağlayın.',
                  },
                },
                {
                  icon: <Moon className="h-5 w-5 text-indigo-600" />,
                  title: { en: 'Quality Sleep', tr: 'Kaliteli Uyku' },
                  desc: {
                    en: 'Growth hormone is primarily released during deep sleep. Children need 9-12 hours of sleep.',
                    tr: 'Büyüme hormonu ağırlıklı olarak derin uyku sırasında salgılanır. Çocuklar 9-12 saat uykuya ihtiyaç duyar.',
                  },
                },
                {
                  icon: <Dumbbell className="h-5 w-5 text-orange-600" />,
                  title: { en: 'Physical Activity', tr: 'Fiziksel Aktivite' },
                  desc: {
                    en: 'Regular exercise stimulates growth hormone production and strengthens bones.',
                    tr: 'Düzenli egzersiz büyüme hormonu üretimini uyarır ve kemikleri güçlendirir.',
                  },
                },
                {
                  icon: <TrendingDown className="h-5 w-5 text-red-600" />,
                  title: { en: 'Avoid Growth Inhibitors', tr: 'Büyüme Engelleyicilerden Kaçının' },
                  desc: {
                    en: 'Excessive stress, poor nutrition, and lack of sleep can negatively impact growth potential.',
                    tr: 'Aşırı stres, yetersiz beslenme ve uyku eksikliği büyüme potansiyelini olumsuz etkileyebilir.',
                  },
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-neutral-100 p-4 transition-colors hover:bg-neutral-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    {tip.icon}
                    <span className="text-sm font-semibold text-neutral-800">
                      {tip.title[locale]}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">{tip.desc[locale]}</p>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default HeightPredictorCalculator;
