'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculateA1C, a1cInfo } from './a1cLogic';
import { A1CInput, a1cCategories } from './a1cTypes';
import { Activity, Info } from 'lucide-react';

interface A1CCalculatorProps {
  locale: 'en' | 'tr';
}

const A1CCalculator: React.FC<A1CCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [a1c, setA1c] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateA1C> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const a1cNum = parseFloat(a1c);

    if (!a1cNum || a1cNum <= 0 || a1cNum > 20) {
      setError(
        locale === 'tr'
          ? 'Lütfen 0-20 arası geçerli bir A1C değeri girin'
          : 'Please enter a valid A1C value between 0-20'
      );
      return;
    }

    const input: A1CInput = { a1c: a1cNum };
    const a1cResult = calculateA1C(input);
    setResult(a1cResult);
  };

  const handleReset = () => {
    setA1c('');
    setResult(null);
    setError('');
  };

  const info = a1cInfo[locale];
  const categoryData = result ? a1cCategories[result.category] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'A1C Hesaplayıcı' : 'A1C Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'A1C değerinden ortalama kan şekeri hesaplayın'
                : 'Convert A1C to average blood glucose'}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'A1C Değeri (%)' : 'A1C Value (%)'}
            type="number"
            step="0.1"
            value={a1c}
            onChange={(e) => setA1c(e.target.value)}
            placeholder="6.5"
            helperText={locale === 'tr' ? 'Örnek: 5.7, 6.5, 7.0' : 'Example: 5.7, 6.5, 7.0'}
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
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'A1C Sonucu' : 'A1C Result'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-red-600">{result.a1c}%</div>
              <Badge
                variant={
                  categoryData.color === 'success'
                    ? 'success'
                    : categoryData.color === 'warning'
                      ? 'warning'
                      : 'danger'
                }
                size="lg"
              >
                {categoryData.label[locale]}
              </Badge>
            </div>

            {/* eAG */}
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <h4 className="mb-4 text-center text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Tahmini Ortalama Glukoz (eAG)' : 'Estimated Average Glucose (eAG)'}
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-red-600">{result.eAG.mgdl}</div>
                  <div className="text-sm text-neutral-600">mg/dL</div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-3xl font-bold text-orange-600">{result.eAG.mmol}</div>
                  <div className="text-sm text-neutral-600">mmol/L</div>
                </div>
              </div>
            </div>

            {/* Interpretation */}
            <div className="mt-6 border-t border-neutral-200 pt-6">
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{result.interpretation[locale]}</p>
            </div>
          </Card>

          {/* Categories Reference */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'A1C Kategorileri' : 'A1C Categories'}
            </h3>
            <div className="space-y-3">
              {Object.entries(a1cCategories).map(([key, cat]) => (
                <div
                  key={key}
                  className={`rounded-lg border-2 p-3 ${
                    key === result.category
                      ? 'border-primary-300 bg-primary-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">{cat.label[locale]}</div>
                      <div className="text-sm text-neutral-600">{cat.range}</div>
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
              <Info className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'A1C Hakkında' : 'About A1C'}
              </h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.what}</p>
              <p>{info.why}</p>
              <div className="rounded-lg bg-red-50 p-3">
                <strong>{locale === 'tr' ? 'Referans Aralıklar:' : 'Reference Ranges:'}</strong>
                <br />
                {info.range}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default A1CCalculator;
