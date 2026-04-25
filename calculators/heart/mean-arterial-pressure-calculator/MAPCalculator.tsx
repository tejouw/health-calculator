'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { Activity, Gauge, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { calculateMAP, validateMAPInput, mapCategories } from './mapLogic';
import { MAPInput, MAPResult } from './mapTypes';
import MAPGauge from './components/MAPGauge';
import MAPInterpretation from './components/MAPInterpretation';
import MAPFormulaExplainer from './components/MAPFormulaExplainer';

interface MAPCalculatorProps {
  locale: 'en' | 'tr';
}

const MAPCalculator: React.FC<MAPCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [systolic, setSystolic] = useState<string>('');
  const [diastolic, setDiastolic] = useState<string>('');
  const [result, setResult] = useState<MAPResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const input: MAPInput = {
      systolic: parseFloat(systolic),
      diastolic: parseFloat(diastolic),
    };

    const validation = validateMAPInput(input, locale);
    if (!validation.isValid) {
      setError(validation.error || '');
      setResult(null);
      return;
    }

    const calc = calculateMAP(input);
    setResult(calc);
  };

  const handleReset = () => {
    setSystolic('');
    setDiastolic('');
    setResult(null);
    setError('');
  };

  const categoryInfo = result ? mapCategories[result.category] : null;

  const badgeVariant: 'success' | 'warning' | 'danger' | 'primary' =
    result?.category === 'normal'
      ? 'success'
      : result?.category === 'lowNormal' || result?.category === 'elevated'
        ? 'warning'
        : result?.category === 'low' || result?.category === 'high'
          ? 'danger'
          : 'primary';

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr'
                ? 'Ortalama Arter Basıncı (MAP) Hesaplayıcı'
                : 'Mean Arterial Pressure (MAP) Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Sistolik ve diyastolik tansiyon değerlerinizden MAP hesaplayın'
                : 'Calculate MAP from your systolic and diastolic blood pressure'}
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Sistolik (Büyük Tansiyon)' : 'Systolic (SBP)'}
            type="number"
            value={systolic}
            onChange={(e) => setSystolic(e.target.value)}
            placeholder="120"
            rightIcon={<span className="text-sm">mmHg</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Diyastolik (Küçük Tansiyon)' : 'Diastolic (DBP)'}
            type="number"
            value={diastolic}
            onChange={(e) => setDiastolic(e.target.value)}
            placeholder="80"
            rightIcon={<span className="text-sm">mmHg</span>}
            required
          />
        </div>

        {/* Helper hint */}
        <p className="mt-3 text-xs text-neutral-500">
          {locale === 'tr'
            ? 'Örnek: tansiyon 120/80 mmHg ise sistolik=120, diyastolik=80 girin.'
            : 'Example: if your reading is 120/80 mmHg, enter systolic=120 and diastolic=80.'}
        </p>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
            <p className="text-sm text-red-700">{error}</p>
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

      {/* Result Card */}
      {result && categoryInfo && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'Ortalama Arter Basıncınız' : 'Your Mean Arterial Pressure'}
            </h3>
            <div className="mb-4 flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold text-primary-600">{result.map}</span>
              <span className="text-xl font-semibold text-neutral-600">mmHg</span>
            </div>
            <Badge variant={badgeVariant} size="lg">
              {categoryInfo.label[locale]}
            </Badge>
          </div>

          {/* Visual gauge */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <MAPGauge map={result.map} locale={locale} />
          </div>

          {/* Quick stats */}
          <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <Gauge className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Nabız Basıncı' : 'Pulse Pressure'}
                </p>
                <p className="text-lg font-bold text-neutral-900">{result.pulsePressure} mmHg</p>
                <p className="text-xs text-neutral-500">
                  {result.pulsePressure < 30
                    ? locale === 'tr'
                      ? 'Dar (düşük debi olabilir)'
                      : 'Narrow (low cardiac output?)'
                    : result.pulsePressure <= 50
                      ? locale === 'tr'
                        ? 'Normal aralıkta'
                        : 'Normal range'
                      : result.pulsePressure <= 60
                        ? locale === 'tr'
                          ? 'Hafif yüksek'
                          : 'Slightly elevated'
                        : locale === 'tr'
                          ? 'Geniş (arter sertliği)'
                          : 'Wide (arterial stiffness)'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Organ Perfüzyonu' : 'Organ Perfusion'}
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {result.perfusionStatus === 'inadequate'
                    ? locale === 'tr'
                      ? 'Yetersiz'
                      : 'Inadequate'
                    : result.perfusionStatus === 'borderline'
                      ? locale === 'tr'
                        ? 'Sınır Değer'
                        : 'Borderline'
                      : result.perfusionStatus === 'adequate'
                        ? locale === 'tr'
                          ? 'Yeterli'
                          : 'Adequate'
                        : locale === 'tr'
                          ? 'Yüksek'
                          : 'Elevated'}
                </p>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Hedef ≥ 65 mmHg' : 'Target \u2265 65 mmHg'}
                </p>
              </div>
            </div>
          </div>

          {/* Interpretation block */}
          <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
            <div>
              <h4 className="mb-1 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{categoryInfo.interpretation[locale]}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Öneri' : 'Recommendation'}
              </h4>
              <p className="text-sm text-neutral-700">{categoryInfo.recommendation[locale]}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Detailed sections */}
      {result && (
        <>
          <MAPInterpretation result={result} locale={locale} />
          <MAPFormulaExplainer
            systolic={parseFloat(systolic)}
            diastolic={parseFloat(diastolic)}
            map={result.map}
            locale={locale}
          />
        </>
      )}
    </div>
  );
};

export default MAPCalculator;
