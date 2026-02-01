'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { evaluatePSA, psaRiskCategories } from './psaLogic';
import { PSAInput, PSAResult } from './psaTypes';
import { Activity, TrendingUp, AlertCircle } from 'lucide-react';

interface PSACalculatorProps {
  locale: 'en' | 'tr';
}

const PSACalculator: React.FC<PSACalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [age, setAge] = useState<string>('');
  const [psaValue, setPsaValue] = useState<string>('');
  const [prostateVolume, setProstateVolume] = useState<string>('');
  const [previousPSA, setPreviousPSA] = useState<string>('');
  const [monthsSincePrevious, setMonthsSincePrevious] = useState<string>('');
  const [result, setResult] = useState<PSAResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(age);
    const psaNum = parseFloat(psaValue);

    if (!ageNum || !psaNum || ageNum < 18 || ageNum > 120 || psaNum < 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli yaş ve PSA değerlerini girin'
          : 'Please enter valid age and PSA values'
      );
      return;
    }

    const input: PSAInput = {
      age: ageNum,
      psaValue: psaNum,
    };

    if (prostateVolume && parseFloat(prostateVolume) > 0) {
      input.prostateVolume = parseFloat(prostateVolume);
    }

    if (previousPSA && monthsSincePrevious) {
      const prevPSA = parseFloat(previousPSA);
      const months = parseFloat(monthsSincePrevious);
      if (prevPSA >= 0 && months > 0) {
        input.previousPSA = prevPSA;
        input.monthsSincePrevious = months;
      }
    }

    const psaResult = evaluatePSA(input);
    setResult(psaResult);
  };

  const handleReset = () => {
    setAge('');
    setPsaValue('');
    setProstateVolume('');
    setPreviousPSA('');
    setMonthsSincePrevious('');
    setResult(null);
    setError('');
  };

  const categoryData = result ? psaRiskCategories[result.riskLevel] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'PSA Hesaplayıcı' : 'PSA Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Prostat sağlığınızı değerlendirin'
                : 'Evaluate your prostate health'}
            </p>
          </div>
        </div>

        {/* Required Fields */}
        <div className="mb-6 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
            {locale === 'tr' ? 'Gerekli Bilgiler' : 'Required Information'}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label={locale === 'tr' ? 'Yaş' : 'Age'}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="55"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'yıl' : 'years'}</span>}
              required
            />
            <Input
              label={locale === 'tr' ? 'PSA Değeri' : 'PSA Value'}
              type="number"
              value={psaValue}
              onChange={(e) => setPsaValue(e.target.value)}
              placeholder="4.5"
              step="0.1"
              rightIcon={<span className="text-sm">ng/mL</span>}
              required
            />
          </div>
        </div>

        {/* Optional Fields */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
            {locale === 'tr' ? 'İsteğe Bağlı Bilgiler' : 'Optional Information'}
            <span className="ml-2 text-xs font-normal normal-case text-neutral-500">
              ({locale === 'tr' ? 'Daha detaylı analiz için' : 'For more detailed analysis'})
            </span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label={locale === 'tr' ? 'Prostat Hacmi' : 'Prostate Volume'}
              type="number"
              value={prostateVolume}
              onChange={(e) => setProstateVolume(e.target.value)}
              placeholder="30"
              step="0.1"
              rightIcon={<span className="text-sm">cc</span>}
              helperText={
                locale === 'tr' ? 'Ultrason ile ölçülen' : 'Measured by ultrasound'
              }
            />
            <Input
              label={locale === 'tr' ? 'Önceki PSA Değeri' : 'Previous PSA Value'}
              type="number"
              value={previousPSA}
              onChange={(e) => setPreviousPSA(e.target.value)}
              placeholder="3.2"
              step="0.1"
              rightIcon={<span className="text-sm">ng/mL</span>}
            />
          </div>
          {previousPSA && (
            <Input
              label={locale === 'tr' ? 'Önceki Testten Bu Yana Geçen Süre' : 'Months Since Previous Test'}
              type="number"
              value={monthsSincePrevious}
              onChange={(e) => setMonthsSincePrevious(e.target.value)}
              placeholder="12"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'ay' : 'months'}</span>}
            />
          )}
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
      {result && categoryData && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'PSA Değerlendirmesi' : 'PSA Evaluation'}
            </h3>
            <div className="mb-4 text-6xl font-bold text-primary-600">
              {result.psaValue.toFixed(1)}
              <span className="ml-2 text-2xl text-neutral-600">ng/mL</span>
            </div>
            <Badge
              variant={
                result.riskLevel === 'low' || result.riskLevel === 'normal'
                  ? 'success'
                  : result.riskLevel === 'borderline'
                    ? 'warning'
                    : result.riskLevel === 'elevated'
                      ? 'primary'
                      : 'danger'
              }
              size="lg"
            >
              {categoryData.label[locale]}
            </Badge>
          </div>

          <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
            {/* Age-Adjusted Reference Range */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr'
                  ? `${age} Yaş İçin Normal Aralık`
                  : `Normal Range for Age ${age}`}
              </h4>
              <p className="text-sm text-neutral-700">
                0 - {result.ageAdjustedNormal.max.toFixed(1)} ng/mL
              </p>
            </div>

            {/* Interpretation */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{result.interpretation[locale]}</p>
            </div>

            {/* PSA Density */}
            {result.psaDensity && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'PSA Yoğunluğu' : 'PSA Density'}
                </h4>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-medium text-neutral-900">
                    {result.psaDensity.toFixed(3)} ng/mL/cc
                  </p>
                  {result.psaDensity > 0.15 && (
                    <Badge variant="warning" size="sm">
                      {locale === 'tr' ? 'Yüksek' : 'Elevated'}
                    </Badge>
                  )}
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr'
                    ? '0.15 ng/mL/cc üzeri yüksek risk gösterebilir'
                    : 'Values > 0.15 ng/mL/cc may indicate higher risk'}
                </p>
              </div>
            )}

            {/* PSA Velocity */}
            {result.psaVelocity !== undefined && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'PSA Hızı' : 'PSA Velocity'}
                </h4>
                <div className="flex items-center gap-2">
                  <TrendingUp
                    className={`h-5 w-5 ${result.psaVelocity > 0.75 ? 'text-orange-600' : 'text-green-600'}`}
                  />
                  <p className="text-lg font-medium text-neutral-900">
                    {result.psaVelocity >= 0 ? '+' : ''}
                    {result.psaVelocity.toFixed(2)} ng/mL/
                    {locale === 'tr' ? 'yıl' : 'year'}
                  </p>
                  {result.psaVelocity > 0.75 && (
                    <Badge variant="warning" size="sm">
                      {locale === 'tr' ? 'Hızlı Artış' : 'Rapid Rise'}
                    </Badge>
                  )}
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr'
                    ? '0.75 ng/mL/yıl üzeri hızlı artış endişe verici olabilir'
                    : 'Velocity > 0.75 ng/mL/year may be concerning'}
                </p>
              </div>
            )}
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
                    ? 'Bu sonuçlar yalnızca bilgilendirme amaçlıdır. PSA değerlerinizi bir sağlık uzmanı ile mutlaka değerlendirin. Yüksek PSA her zaman kanseri göstermez ve normal PSA kanseri dışlamaz.'
                    : 'These results are for informational purposes only. Always discuss your PSA values with a healthcare professional. Elevated PSA does not always indicate cancer, and normal PSA does not rule out cancer.'}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default PSACalculator;
