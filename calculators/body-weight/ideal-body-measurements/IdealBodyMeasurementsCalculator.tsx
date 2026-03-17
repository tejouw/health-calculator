'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateIdealBodyMeasurements, cmToInches } from './idealBodyMeasurementsLogic';
import { IdealBodyMeasurementsInput, IdealBodyMeasurementsResult } from './idealBodyMeasurementsTypes';
import { Ruler, Target, Info, AlertCircle } from 'lucide-react';

interface IdealBodyMeasurementsCalculatorProps {
  locale: 'en' | 'tr';
}

const IdealBodyMeasurementsCalculator: React.FC<IdealBodyMeasurementsCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft/in'>('cm');
  const [heightCm, setHeightCm] = useState<string>('');
  const [heightFeet, setHeightFeet] = useState<string>('');
  const [heightInches, setHeightInches] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [wristCircumference, setWristCircumference] = useState<string>('');
  const [wristUnit, setWristUnit] = useState<'cm' | 'in'>('cm');
  const [displayUnit, setDisplayUnit] = useState<'cm' | 'in'>('cm');
  const [result, setResult] = useState<IdealBodyMeasurementsResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    try {
      const input: IdealBodyMeasurementsInput = {
        height: parseFloat(heightCm) || 0,
        heightUnit,
        gender,
        wristCircumference: parseFloat(wristCircumference) || 0,
        wristUnit,
      };

      if (heightUnit === 'ft/in') {
        if (!heightFeet) {
          setError(locale === 'tr' ? 'Lütfen boyunuzu girin' : 'Please enter your height');
          return;
        }
        input.heightFeet = parseInt(heightFeet);
        input.heightInches = parseInt(heightInches) || 0;
      } else {
        if (!heightCm) {
          setError(locale === 'tr' ? 'Lütfen boyunuzu girin' : 'Please enter your height');
          return;
        }
      }

      const calculationResult = calculateIdealBodyMeasurements(input);
      setResult(calculationResult);
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
    setWristCircumference('');
    setResult(null);
    setError('');
  };

  const formatValue = (cm: number): string => {
    if (displayUnit === 'in') {
      return `${cmToInches(cm)} in`;
    }
    return `${cm} cm`;
  };

  const getFormulaLabel = (): string => {
    if (!result) return '';
    if (result.formulaUsed === 'mcCallum') {
      return locale === 'tr' ? 'John McCallum Formülü (bilek çevresine dayalı)' : 'John McCallum Formula (wrist-based)';
    }
    if (result.formulaUsed === 'reeves') {
      return locale === 'tr' ? 'Klasik Oranlar (boya dayalı)' : 'Classic Proportions (height-based)';
    }
    return locale === 'tr' ? 'Sağlıklı Fitness Oranları (boya dayalı)' : 'Healthy Fitness Proportions (height-based)';
  };

  const getBarColor = (index: number): string => {
    const colors = [
      'bg-blue-500',
      'bg-emerald-500',
      'bg-amber-500',
      'bg-purple-500',
      'bg-rose-500',
      'bg-cyan-500',
      'bg-orange-500',
      'bg-indigo-500',
      'bg-teal-500',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
            <Ruler className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'İdeal Vücut Ölçüleri' : 'Ideal Body Measurements'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Boyunuza göre ideal vücut ölçülerinizi öğrenin'
                : 'Find your ideal body measurements based on height'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {/* Gender Selection */}
          <RadioGroup
            label={locale === 'tr' ? 'Cinsiyet' : 'Gender'}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
              { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
            ]}
            orientation="horizontal"
          />

          {/* Height Unit Selection */}
          <RadioGroup
            label={locale === 'tr' ? 'Boy Birimi' : 'Height Unit'}
            name="heightUnit"
            value={heightUnit}
            onChange={(value) => setHeightUnit(value as 'cm' | 'ft/in')}
            options={[
              { value: 'cm', label: locale === 'tr' ? 'Santimetre (cm)' : 'Centimeters (cm)' },
              { value: 'ft/in', label: locale === 'tr' ? 'Feet/İnç' : 'Feet/Inches' },
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
              placeholder="175"
              rightIcon={<span className="text-sm">cm</span>}
              required
            />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Feet"
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
                placeholder="9"
                rightIcon={<span className="text-sm">in</span>}
              />
            </div>
          )}

          {/* Wrist Circumference (Optional - for McCallum formula) */}
          {gender === 'male' && (
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label={`${locale === 'tr' ? 'Bilek Çevresi' : 'Wrist Circumference'} (${locale === 'tr' ? 'Opsiyonel' : 'Optional'})`}
                  type="number"
                  value={wristCircumference}
                  onChange={(e) => setWristCircumference(e.target.value)}
                  placeholder={wristUnit === 'cm' ? '17.5' : '6.9'}
                  rightIcon={<span className="text-sm">{wristUnit}</span>}
                />
                <RadioGroup
                  label={locale === 'tr' ? 'Bilek Birimi' : 'Wrist Unit'}
                  name="wristUnit"
                  value={wristUnit}
                  onChange={(value) => setWristUnit(value as 'cm' | 'in')}
                  options={[
                    { value: 'cm', label: 'cm' },
                    { value: 'in', label: 'in' },
                  ]}
                  orientation="horizontal"
                />
              </div>
              <p className="mt-1 text-xs text-neutral-500">
                {locale === 'tr'
                  ? 'Bilek çevresi girilirse McCallum formülü kullanılır (daha kişiselleştirilmiş sonuçlar)'
                  : 'If wrist circumference is provided, McCallum formula will be used (more personalized results)'}
              </p>
            </div>
          )}

          {/* Display Unit */}
          <RadioGroup
            label={locale === 'tr' ? 'Sonuç Birimi' : 'Result Unit'}
            name="displayUnit"
            value={displayUnit}
            onChange={(value) => setDisplayUnit(value as 'cm' | 'in')}
            options={[
              { value: 'cm', label: locale === 'tr' ? 'Santimetre (cm)' : 'Centimeters (cm)' },
              { value: 'in', label: locale === 'tr' ? 'İnç (in)' : 'Inches (in)' },
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

      {/* Results */}
      {result && (
        <>
          {/* Formula Used */}
          <Card className="animate-slide-up border-2 border-violet-100 bg-gradient-to-br from-violet-50 to-purple-50">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-6 w-6 text-violet-600" />
              <div>
                <h3 className="text-xl font-bold text-neutral-900">
                  {locale === 'tr' ? 'İdeal Vücut Ölçüleriniz' : 'Your Ideal Body Measurements'}
                </h3>
                <p className="text-sm text-neutral-600">{getFormulaLabel()}</p>
              </div>
            </div>

            <div className="space-y-3">
              {result.measurements.map((measurement, index) => {
                const maxValue = Math.max(...result.measurements.map(m => m.ideal));
                const percentage = (measurement.ideal / maxValue) * 100;

                return (
                  <div key={measurement.name.en} className="group">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-700">
                        {measurement.name[locale]}
                      </span>
                      <span className="text-sm font-bold text-neutral-900">
                        {formatValue(measurement.ideal)}
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${getBarColor(index)}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Summary Table */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <Info className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Ölçü Tablosu' : 'Measurements Table'}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Bölge' : 'Area'}
                    </th>
                    <th className="py-2 text-right font-semibold text-neutral-700">cm</th>
                    <th className="py-2 text-right font-semibold text-neutral-700">
                      {locale === 'tr' ? 'inç' : 'inches'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {result.measurements.map((measurement) => (
                    <tr
                      key={measurement.name.en}
                      className="border-b border-neutral-100 last:border-0"
                    >
                      <td className="py-2 font-medium text-neutral-900">
                        {measurement.name[locale]}
                      </td>
                      <td className="py-2 text-right text-neutral-700">
                        {measurement.ideal} cm
                      </td>
                      <td className="py-2 text-right text-neutral-700">
                        {cmToInches(measurement.ideal)} in
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Key Ratios */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Temel Oranlar' : 'Key Ratios'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {(() => {
                const waist = result.measurements.find(m => m.name.en === 'Waist');
                const chest = result.measurements.find(m => m.name.en === 'Chest' || m.name.en === 'Bust');
                const hips = result.measurements.find(m => m.name.en === 'Hips');
                const shoulders = result.measurements.find(m => m.name.en === 'Shoulders');

                const ratios = [];

                if (waist && chest) {
                  ratios.push({
                    label: locale === 'tr' ? 'Bel / Göğüs Oranı' : 'Waist-to-Chest Ratio',
                    value: (waist.ideal / chest.ideal).toFixed(2),
                    ideal: result.gender === 'male' ? '0.70 - 0.75' : '0.70 - 0.75',
                  });
                }

                if (waist && hips) {
                  ratios.push({
                    label: locale === 'tr' ? 'Bel / Kalça Oranı' : 'Waist-to-Hip Ratio',
                    value: (waist.ideal / hips.ideal).toFixed(2),
                    ideal: result.gender === 'male' ? '< 0.90' : '< 0.85',
                  });
                }

                if (shoulders && waist) {
                  ratios.push({
                    label: locale === 'tr' ? 'Omuz / Bel Oranı' : 'Shoulder-to-Waist Ratio',
                    value: (shoulders.ideal / waist.ideal).toFixed(2),
                    ideal: result.gender === 'male' ? '1.60 - 1.70' : '1.40 - 1.50',
                  });
                }

                ratios.push({
                  label: locale === 'tr' ? 'Bel / Boy Oranı' : 'Waist-to-Height Ratio',
                  value: waist ? (waist.ideal / result.heightCm).toFixed(2) : '-',
                  ideal: '< 0.50',
                });

                return ratios.map((ratio) => (
                  <div
                    key={ratio.label}
                    className="rounded-lg border border-neutral-200 p-3"
                  >
                    <p className="text-sm text-neutral-600">{ratio.label}</p>
                    <p className="text-2xl font-bold text-violet-600">{ratio.value}</p>
                    <p className="text-xs text-neutral-500">
                      {locale === 'tr' ? 'İdeal' : 'Ideal'}: {ratio.ideal}
                    </p>
                  </div>
                ));
              })()}
            </div>
          </Card>

          {/* Important Notes */}
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
                        ? 'Bu ölçüler genel bir kılavuzdur. Herkesin vücudu ve kemik yapısı farklıdır.'
                        : 'These measurements are general guidelines. Everyone has a unique body and bone structure.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Genetik, yaş ve vücut tipi ideal ölçüleri önemli ölçüde etkiler.'
                        : 'Genetics, age, and body type significantly affect ideal measurements.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Sağlık ve fitness hedefleriniz için bir uzmanla görüşmeniz önerilir.'
                        : 'It is recommended to consult a professional for your health and fitness goals.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Bu hesaplayıcı estetik standartlar yerine sağlıklı fitness oranlarına dayanır.'
                        : 'This calculator is based on healthy fitness ratios rather than aesthetic standards.'}
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

export default IdealBodyMeasurementsCalculator;
