'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculateCholesterol,
  validateCholesterolInput,
  cholesterolCategoryLabels,
} from './cholesterolLogic';
import { CholesterolInput, CholesterolResult } from './cholesterolTypes';
import { HeartPulse, TrendingUp, TrendingDown, AlertTriangle, Shield } from 'lucide-react';
import CholesterolBreakdown from './components/CholesterolBreakdown';
import CholesterolRatios from './components/CholesterolRatios';
import CholesterolGuide from './components/CholesterolGuide';

interface CholesterolCalculatorProps {
  locale: 'en' | 'tr';
}

const CholesterolCalculator: React.FC<CholesterolCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [unit, setUnit] = useState<'mgdl' | 'mmol'>('mgdl');
  const [totalCholesterol, setTotalCholesterol] = useState<string>('');
  const [hdl, setHdl] = useState<string>('');
  const [ldl, setLdl] = useState<string>('');
  const [triglycerides, setTriglycerides] = useState<string>('');
  const [result, setResult] = useState<CholesterolResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const input: CholesterolInput = {
      totalCholesterol: parseFloat(totalCholesterol),
      hdl: parseFloat(hdl),
      ldl: parseFloat(ldl),
      triglycerides: parseFloat(triglycerides),
      unit,
    };

    const validation = validateCholesterolInput(input, locale);
    if (!validation.isValid) {
      setError(validation.error || '');
      return;
    }

    const calcResult = calculateCholesterol(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setTotalCholesterol('');
    setHdl('');
    setLdl('');
    setTriglycerides('');
    setResult(null);
    setError('');
  };

  const riskLabels = result
    ? cholesterolCategoryLabels.overallRisk[result.overallRisk]
    : null;

  const riskBadgeVariant =
    result?.overallRisk === 'low'
      ? 'success'
      : result?.overallRisk === 'moderate'
        ? 'warning'
        : 'danger';

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-500">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kolesterol Hesaplayıcı' : 'Cholesterol Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Kolesterol seviyelerinizi ve risk oranlarınızı analiz edin'
                : 'Analyze your cholesterol levels and risk ratios'}
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
                description: locale === 'tr' ? 'Yaygın (ABD, TR)' : 'Common (US, TR)',
              },
              {
                value: 'mmol',
                label: 'mmol/L',
                description: locale === 'tr' ? 'SI birimi (AB)' : 'SI unit (EU)',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Toplam Kolesterol' : 'Total Cholesterol'}
            type="number"
            value={totalCholesterol}
            onChange={(e) => setTotalCholesterol(e.target.value)}
            placeholder={unit === 'mgdl' ? '200' : '5.2'}
            rightIcon={<span className="text-sm">{unit === 'mgdl' ? 'mg/dL' : 'mmol/L'}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'HDL (İyi Kolesterol)' : 'HDL (Good Cholesterol)'}
            type="number"
            value={hdl}
            onChange={(e) => setHdl(e.target.value)}
            placeholder={unit === 'mgdl' ? '55' : '1.4'}
            rightIcon={<span className="text-sm">{unit === 'mgdl' ? 'mg/dL' : 'mmol/L'}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'LDL (Kötü Kolesterol)' : 'LDL (Bad Cholesterol)'}
            type="number"
            value={ldl}
            onChange={(e) => setLdl(e.target.value)}
            placeholder={unit === 'mgdl' ? '120' : '3.1'}
            rightIcon={<span className="text-sm">{unit === 'mgdl' ? 'mg/dL' : 'mmol/L'}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Trigliserit' : 'Triglycerides'}
            type="number"
            value={triglycerides}
            onChange={(e) => setTriglycerides(e.target.value)}
            placeholder={unit === 'mgdl' ? '150' : '1.7'}
            rightIcon={<span className="text-sm">{unit === 'mgdl' ? 'mg/dL' : 'mmol/L'}</span>}
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

      {/* Result Summary */}
      {result && riskLabels && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'Genel Risk Değerlendirmesi' : 'Overall Risk Assessment'}
            </h3>
            <Badge variant={riskBadgeVariant} size="lg">
              {riskLabels[locale]}
            </Badge>
          </div>

          {/* Key Metrics */}
          <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Toplam/HDL Oranı' : 'Total/HDL Ratio'}
                </p>
                <p className="text-lg font-bold text-neutral-900">{result.totalHdlRatio}</p>
                <p className="text-xs text-neutral-500">
                  {result.totalHdlRatio < 3.5
                    ? locale === 'tr' ? 'Optimal' : 'Optimal'
                    : result.totalHdlRatio < 5
                      ? locale === 'tr' ? 'Normal' : 'Normal'
                      : locale === 'tr' ? 'Yüksek Risk' : 'High Risk'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <TrendingDown className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'LDL/HDL Oranı' : 'LDL/HDL Ratio'}
                </p>
                <p className="text-lg font-bold text-neutral-900">{result.ldlHdlRatio}</p>
                <p className="text-xs text-neutral-500">
                  {result.ldlHdlRatio < 2.5
                    ? locale === 'tr' ? 'Optimal' : 'Optimal'
                    : result.ldlHdlRatio < 3.5
                      ? locale === 'tr' ? 'Normal' : 'Normal'
                      : locale === 'tr' ? 'Yüksek Risk' : 'High Risk'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Non-HDL Kolesterol' : 'Non-HDL Cholesterol'}
                </p>
                <p className="text-lg font-bold text-neutral-900">{result.nonHdl} mg/dL</p>
                <p className="text-xs text-neutral-500">
                  {result.nonHdl < 130
                    ? locale === 'tr' ? 'Optimal' : 'Optimal'
                    : result.nonHdl < 160
                      ? locale === 'tr' ? 'Normal' : 'Normal'
                      : locale === 'tr' ? 'Yüksek' : 'High'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Trigliserit/HDL Oranı' : 'Triglycerides/HDL Ratio'}
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {result.triglyceridesHdlRatio}
                </p>
                <p className="text-xs text-neutral-500">
                  {result.triglyceridesHdlRatio < 2
                    ? locale === 'tr' ? 'İdeal' : 'Ideal'
                    : result.triglyceridesHdlRatio < 4
                      ? locale === 'tr' ? 'Kabul Edilebilir' : 'Acceptable'
                      : locale === 'tr' ? 'Yüksek Risk' : 'High Risk'}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Detailed Sections */}
      {result && (
        <>
          <CholesterolBreakdown result={result} locale={locale} />
          <CholesterolRatios result={result} locale={locale} />
          <CholesterolGuide locale={locale} />
        </>
      )}
    </div>
  );
};

export default CholesterolCalculator;
