'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Select, Card, Badge } from '@/components/ui';
import {
  calculateIdealWeight,
  idealWeightFormulas,
  bodyFrameOptions,
  formatWeight,
  kgToLbs,
} from './idealWeightLogic';
import { IdealWeightInput } from './idealWeightTypes';
import { Scale, Target, TrendingDown, TrendingUp, AlertCircle, Info } from 'lucide-react';

interface IdealWeightCalculatorProps {
  locale: 'en' | 'tr';
}

const IdealWeightCalculator: React.FC<IdealWeightCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft/in'>('cm');
  const [heightCm, setHeightCm] = useState<string>('');
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('');
  const [bodyFrame, setBodyFrame] = useState<'small' | 'medium' | 'large' | ''>('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [result, setResult] = useState<ReturnType<typeof calculateIdealWeight> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    try {
      const input: IdealWeightInput = {
        height: parseFloat(heightCm) || 0,
        heightUnit,
        gender,
      };

      if (heightUnit === 'ft/in') {
        if (!heightFeet || !heightInches) {
          setError(
            locale === 'tr' ? 'Lütfen boyunuzu girin' : 'Please enter your height'
          );
          return;
        }
        input.heightFeet = parseInt(heightFeet);
        input.heightInches = parseInt(heightInches);
      } else {
        if (!heightCm) {
          setError(
            locale === 'tr' ? 'Lütfen boyunuzu girin' : 'Please enter your height'
          );
          return;
        }
      }

      if (age) {
        input.age = parseInt(age);
      }

      if (bodyFrame) {
        input.bodyFrame = bodyFrame;
      }

      const idealWeightResult = calculateIdealWeight(input);
      setResult(idealWeightResult);
    } catch (err: any) {
      setError(
        err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error')
      );
    }
  };

  const handleReset = () => {
    setHeightCm('');
    setHeightFeet('');
    setHeightInches('');
    setAge('');
    setBodyFrame('');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'İdeal Kilo Hesaplayıcı' : 'Ideal Weight Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Birden fazla formül kullanarak ideal kilonuzu hesaplayın'
                : 'Calculate your ideal weight using multiple formulas'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Height Unit Selection */}
          <RadioGroup
            label={locale === 'tr' ? 'Boy Birimi' : 'Height Unit'}
            name="heightUnit"
            value={heightUnit}
            onChange={(value) => setHeightUnit(value as 'cm' | 'ft/in')}
            options={[
              {
                value: 'cm',
                label: locale === 'tr' ? 'Santimetre (cm)' : 'Centimeters (cm)',
              },
              {
                value: 'ft/in',
                label: locale === 'tr' ? 'Feet/İnç' : 'Feet/Inches',
              },
            ]}
            orientation="horizontal"
          />

          {/* Height Input */}
          {heightUnit === 'cm' ? (
            <Input
              label={locale === 'tr' ? 'Boy' : 'Height'}
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="170"
              rightIcon={<span className="text-sm">cm</span>}
              required
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={locale === 'tr' ? 'Feet' : 'Feet'}
                type="number"
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="5"
                rightIcon={<span className="text-sm">ft</span>}
                required
              />
              <Input
                label={locale === 'tr' ? 'İnç' : 'Inches'}
                type="number"
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="7"
                rightIcon={<span className="text-sm">in</span>}
                required
              />
            </div>
          )}

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
                label: locale === 'tr' ? 'Kadın' : 'Female',
              },
            ]}
            orientation="horizontal"
          />

          {/* Body Frame (Optional) */}
          <Select
            label={`${locale === 'tr' ? 'Vücut Yapısı' : 'Body Frame'} (${locale === 'tr' ? 'Opsiyonel' : 'Optional'})`}
            value={bodyFrame}
            onChange={(e) => setBodyFrame(e.target.value as any)}
            options={[
              {
                value: '',
                label: locale === 'tr' ? 'Seçiniz' : 'Select',
              },
              ...bodyFrameOptions.map((option) => ({
                value: option.size,
                label: option.label[locale],
              })),
            ]}
          />

          {/* Age (Optional) */}
          <Input
            label={`${locale === 'tr' ? 'Yaş' : 'Age'} (${locale === 'tr' ? 'Opsiyonel' : 'Optional'})`}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
          />

          {/* Weight Unit Selection */}
          <RadioGroup
            label={locale === 'tr' ? 'Sonuç Birimi' : 'Result Unit'}
            name="weightUnit"
            value={weightUnit}
            onChange={(value) => setWeightUnit(value as 'kg' | 'lbs')}
            options={[
              {
                value: 'kg',
                label: locale === 'tr' ? 'Kilogram (kg)' : 'Kilograms (kg)',
              },
              {
                value: 'lbs',
                label: locale === 'tr' ? 'Pound (lbs)' : 'Pounds (lbs)',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {result && (
        <>
          {/* Average Ideal Weight Card */}
          <Card className="animate-slide-up border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Ortalama İdeal Kilo' : 'Average Ideal Weight'}
              </h3>
              <div className="mb-4 flex items-center justify-center gap-2">
                <Target className="h-8 w-8 text-blue-600" />
                <div className="text-4xl font-bold text-blue-600">
                  {formatWeight(result.average, weightUnit)}
                </div>
              </div>
              <Badge variant="primary" size="lg">
                {locale === 'tr' ? 'İdeal Aralık' : 'Ideal Range'}:{' '}
                {formatWeight(result.min, weightUnit)} -{' '}
                {formatWeight(result.max, weightUnit)}
              </Badge>
            </div>
          </Card>

          {/* Formula Results Card */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Formül Sonuçları' : 'Formula Results'}
              </h3>
            </div>
            <p className="mb-4 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Farklı bilimsel formüller kullanılarak hesaplanan ideal kilo değerleri:'
                : 'Ideal weight values calculated using different scientific formulas:'}
            </p>

            <div className="space-y-3">
              {idealWeightFormulas.map((formula) => {
                const weight = result[formula.id];
                return (
                  <div
                    key={formula.id}
                    className="flex items-center justify-between rounded-lg border border-neutral-200 p-4"
                  >
                    <div>
                      <p className="font-semibold text-neutral-900">
                        {formula.name[locale]}
                      </p>
                      <p className="text-xs text-neutral-600">
                        {formula.description[locale]}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        {formatWeight(weight, weightUnit)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* BMI-Based Healthy Weight Range */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr'
                  ? 'BMI Bazlı Sağlıklı Kilo Aralığı'
                  : 'BMI-Based Healthy Weight Range'}
              </h3>
            </div>
            <p className="mb-4 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Sağlıklı BMI aralığına (18.5-24.9) karşılık gelen kilo aralığı:'
                : 'Weight range corresponding to healthy BMI range (18.5-24.9):'}
            </p>

            <div className="rounded-lg bg-green-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? 'Minimum' : 'Minimum'}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatWeight(result.bmiHealthyMin, weightUnit)}
                  </p>
                </div>
                <div className="text-2xl text-neutral-400">-</div>
                <div className="text-center">
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? 'Maksimum' : 'Maximum'}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatWeight(result.bmiHealthyMax, weightUnit)}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Frame-Adjusted Range */}
          {result.bodyFrame && result.frameAdjustedMin && result.frameAdjustedMax && (
            <Card className="animate-slide-up border-l-4 border-l-purple-500 bg-purple-50">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-purple-600" />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">
                    {locale === 'tr'
                      ? 'Vücut Yapısına Göre Ayarlanmış Aralık'
                      : 'Body Frame-Adjusted Range'}
                  </h3>
                  <p className="mb-3 text-sm text-neutral-700">
                    {locale === 'tr'
                      ? `${bodyFrameOptions.find((f) => f.size === result.bodyFrame)?.label.tr} için önerilen kilo aralığı:`
                      : `Recommended weight range for ${bodyFrameOptions.find((f) => f.size === result.bodyFrame)?.label.en}:`}
                  </p>
                  <div className="flex items-center gap-3">
                    <Badge variant="primary" size="lg">
                      {formatWeight(result.frameAdjustedMin, weightUnit)} -{' '}
                      {formatWeight(result.frameAdjustedMax, weightUnit)}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Important Note */}
          <Card className="border-l-4 border-l-amber-500 bg-amber-50">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <div>
                <h4 className="mb-2 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Önemli Notlar' : 'Important Notes'}
                </h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'İdeal kilo tahminleridir ve bireysel farklılıklar gösterir. Herkesin vücut yapısı farklıdır.'
                        : 'Ideal weights are estimates and vary individually. Everyone\'s body composition is different.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Bu formüller kas kütlesi, kemik yoğunluğu ve vücut kompozisyonunu hesaba katmaz.'
                        : 'These formulas do not account for muscle mass, bone density, and body composition.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Atletler ve vücut geliştiriciler için bu hesaplamalar uygun olmayabilir.'
                        : 'These calculations may not be appropriate for athletes and bodybuilders.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Kilo hedefleri belirlerken bir sağlık uzmanına danışın.'
                        : 'Consult a healthcare professional when setting weight goals.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default IdealWeightCalculator;
