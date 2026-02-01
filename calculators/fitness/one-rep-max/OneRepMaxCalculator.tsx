'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateOneRepMax, formulaDescriptions } from './oneRepMaxLogic';
import { OneRepMaxInput } from './oneRepMaxTypes';
import { Dumbbell, TrendingUp } from 'lucide-react';

interface OneRepMaxCalculatorProps {
  locale: 'en' | 'tr';
}

const OneRepMaxCalculator: React.FC<OneRepMaxCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg');
  const [weight, setWeight] = useState<string>('');
  const [reps, setReps] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateOneRepMax> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const weightNum = parseFloat(weight);
    const repsNum = parseInt(reps);

    if (!weightNum || !repsNum || weightNum <= 0 || repsNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values'
      );
      return;
    }

    if (repsNum > 20) {
      setError(
        locale === 'tr'
          ? 'Tekrar sayısı 20\'den fazla olamaz (1RM hesaplama için çok yüksek)'
          : 'Reps cannot exceed 20 (too high for accurate 1RM calculation)'
      );
      return;
    }

    const input: OneRepMaxInput = {
      weight: weightNum,
      reps: repsNum,
      unit,
    };

    const oneRMResult = calculateOneRepMax(input);
    setResult(oneRMResult);
  };

  const handleReset = () => {
    setWeight('');
    setReps('');
    setResult(null);
    setError('');
  };

  const formulas = [
    { key: 'average', label: locale === 'tr' ? 'Ortalama (Önerilen)' : 'Average (Recommended)' },
    { key: 'brzycki', label: 'Brzycki' },
    { key: 'epley', label: 'Epley' },
    { key: 'lander', label: 'Lander' },
    { key: 'lombardi', label: 'Lombardi' },
    { key: 'oconner', label: "O'Conner" },
  ] as const;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Maksimum Tek Tekrar (1RM) Hesaplama' : 'One Rep Max (1RM) Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Maksimum kaldırabileceğiniz ağırlığı hesaplayın'
                : 'Calculate your maximum lifting capacity'}
            </p>
          </div>
        </div>

        {/* Unit Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('unitSystem')}
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'kg' | 'lbs')}
            options={[
              {
                value: 'kg',
                label: tUnits('kg'),
                description: locale === 'tr' ? 'Kilogram' : 'Kilograms',
              },
              {
                value: 'lbs',
                label: tUnits('lbs'),
                description: locale === 'tr' ? 'Pound' : 'Pounds',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Kaldırdığınız Ağırlık' : 'Weight Lifted'}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'kg' ? '100' : '220'}
            rightIcon={<span className="text-sm">{unit}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Tekrar Sayısı' : 'Number of Reps'}
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder="5"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'tekrar' : 'reps'}</span>}
            helperText={locale === 'tr' ? 'Maksimum 20 tekrar' : 'Maximum 20 reps'}
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

      {/* Results */}
      {result && (
        <>
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini 1RM (Ortalama)' : 'Estimated 1RM (Average)'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-purple-600">
                {result.average}
              </div>
              <Badge variant="primary" size="lg">
                {unit.toUpperCase()}
              </Badge>
            </div>

            {/* Formula Breakdown */}
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <h4 className="mb-4 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Formül Sonuçları' : 'Formula Breakdown'}
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {formulas.map((formula) => (
                  <div
                    key={formula.key}
                    className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm"
                  >
                    <div>
                      <div className="text-sm font-medium text-neutral-900">{formula.label}</div>
                      <div className="text-xs text-neutral-500">
                        {formulaDescriptions[locale][formula.key]}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-purple-600">
                      {result[formula.key]} {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Training Percentages */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Antrenman Yüzdeleri' : 'Training Percentages'}
              </h3>
            </div>
            <p className="mb-4 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Bu yüzdeler antrenman programınızda kullanabileceğiniz ağırlıkları gösterir.'
                : 'Use these percentages to plan your training program.'}
            </p>
            <div className="overflow-hidden rounded-lg border border-neutral-200">
              <table className="w-full">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                      {locale === 'tr' ? '1RM Yüzdesi' : '% of 1RM'}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Ağırlık' : 'Weight'}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Tekrar Aralığı' : 'Rep Range'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {result.percentages.map((row) => (
                    <tr key={row.percentage} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                        {row.percentage}%
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-700">
                        {row.weight} {unit}
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-700">
                        {row.reps} {locale === 'tr' ? 'tekrar' : 'reps'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default OneRepMaxCalculator;
