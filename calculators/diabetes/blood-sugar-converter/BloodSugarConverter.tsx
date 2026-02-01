'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { convertBloodSugar, bloodSugarInfo } from './bloodSugarLogic';
import { BloodSugarInput, bloodSugarCategories } from './bloodSugarTypes';
import { Droplet, Info } from 'lucide-react';

interface BloodSugarConverterProps {
  locale: 'en' | 'tr';
}

const BloodSugarConverter: React.FC<BloodSugarConverterProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [unit, setUnit] = useState<'mgdl' | 'mmol'>('mgdl');
  const [value, setValue] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof convertBloodSugar> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const valueNum = parseFloat(value);

    if (!valueNum || valueNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir değer girin' : 'Please enter a valid value');
      return;
    }

    if (unit === 'mgdl' && valueNum > 600) {
      setError(
        locale === 'tr' ? 'Değer çok yüksek görünüyor (> 600 mg/dL)' : 'Value seems too high (> 600 mg/dL)'
      );
      return;
    }

    if (unit === 'mmol' && valueNum > 33) {
      setError(
        locale === 'tr' ? 'Değer çok yüksek görünüyor (> 33 mmol/L)' : 'Value seems too high (> 33 mmol/L)'
      );
      return;
    }

    const input: BloodSugarInput = {
      value: valueNum,
      unit,
    };

    const bloodSugarResult = convertBloodSugar(input);
    setResult(bloodSugarResult);
  };

  const handleReset = () => {
    setValue('');
    setResult(null);
    setError('');
  };

  const info = bloodSugarInfo[locale];
  const categoryData = result ? bloodSugarCategories[result.category] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-500">
            <Droplet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kan Şekeri Dönüştürücü' : 'Blood Sugar Converter'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'mg/dL ve mmol/L arasında dönüştürme' : 'Convert between mg/dL and mmol/L'}
            </p>
          </div>
        </div>

        {/* Unit Selection */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Birim' : 'Unit'}
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'mgdl' | 'mmol')}
            options={[
              {
                value: 'mgdl',
                label: 'mg/dL',
                description: locale === 'tr' ? 'Milligram/Desilitre' : 'Milligrams per Deciliter',
              },
              {
                value: 'mmol',
                label: 'mmol/L',
                description: locale === 'tr' ? 'Millimol/Litre' : 'Millimoles per Liter',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Value Input */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Kan Şekeri Değeri' : 'Blood Sugar Value'}
            type="number"
            step="0.1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={unit === 'mgdl' ? '100' : '5.6'}
            rightIcon={<span className="text-sm">{unit === 'mgdl' ? 'mg/dL' : 'mmol/L'}</span>}
            required
          />
        </div>

        {error && <p className="mb-4 text-sm text-danger-main">{error}</p>}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {result && categoryData && (
        <>
          {/* Conversion Results */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="animate-slide-up border-2 border-rose-100 bg-gradient-to-br from-rose-50 to-pink-50">
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">mg/dL</h3>
                <div className="mb-2 text-5xl font-bold text-rose-600">{result.mgdl}</div>
                <div className="text-sm text-neutral-600">{locale === 'tr' ? 'Milligram/Desilitre' : 'Milligrams per Deciliter'}</div>
              </div>
            </Card>

            <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-fuchsia-50">
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">mmol/L</h3>
                <div className="mb-2 text-5xl font-bold text-pink-600">{result.mmol}</div>
                <div className="text-sm text-neutral-600">{locale === 'tr' ? 'Millimol/Litre' : 'Millimoles per Liter'}</div>
              </div>
            </Card>
          </div>

          {/* Category */}
          <Card className="animate-slide-up">
            <div className="text-center">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Kategori (Açlık Kan Şekeri)' : 'Category (Fasting Blood Sugar)'}
              </h3>
              <Badge
                variant={
                  categoryData.color === 'success'
                    ? 'success'
                    : categoryData.color === 'warning'
                      ? 'warning'
                      : categoryData.color === 'primary'
                        ? 'primary'
                        : 'danger'
                }
                size="lg"
              >
                {categoryData.label[locale]}
              </Badge>
              <div className="mt-4 text-sm text-neutral-700">{result.interpretation[locale]}</div>
            </div>
          </Card>

          {/* Reference Ranges */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Referans Aralıkları' : 'Reference Ranges'}
            </h3>
            <div className="space-y-3">
              {Object.entries(bloodSugarCategories).map(([key, cat]) => (
                <div
                  key={key}
                  className={`rounded-lg border-2 p-3 ${
                    key === result.category
                      ? 'border-rose-300 bg-rose-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">{cat.label[locale]}</div>
                      <div className="text-sm text-neutral-600">
                        {cat.range.mgdl} mg/dL | {cat.range.mmol} mmol/L
                      </div>
                    </div>
                    {key === result.category && (
                      <Badge variant="primary">{locale === 'tr' ? 'Sizin' : 'You'}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-rose-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <div className="rounded-lg bg-rose-50 p-3">
                <strong>{locale === 'tr' ? 'Not:' : 'Note:'}</strong> {info.note}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default BloodSugarConverter;
