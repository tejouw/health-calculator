'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculateBodyFat,
  getBodyFatCategory,
  calculateLeanBodyMass,
  getIdealBodyFatRange,
  bodyFatCategories,
} from './bodyFatLogic';
import { BodyFatInput } from './bodyFatTypes';
import { Activity, TrendingUp, TrendingDown } from 'lucide-react';

interface BodyFatCalculatorProps {
  locale: 'en' | 'tr';
}

const BodyFatCalculator: React.FC<BodyFatCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [height, setHeight] = useState<string>('');
  const [neck, setNeck] = useState<string>('');
  const [waist, setWaist] = useState<string>('');
  const [hip, setHip] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const heightNum = parseFloat(height);
    const neckNum = parseFloat(neck);
    const waistNum = parseFloat(waist);
    const hipNum = parseFloat(hip);
    const weightNum = parseFloat(weight);

    if (!heightNum || !neckNum || !waistNum || heightNum <= 0 || neckNum <= 0 || waistNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen tüm gerekli alanları doldurun'
          : 'Please fill in all required fields'
      );
      return;
    }

    if (gender === 'female' && (!hipNum || hipNum <= 0)) {
      setError(
        locale === 'tr'
          ? 'Kadınlar için kalça ölçümü gereklidir'
          : 'Hip measurement is required for females'
      );
      return;
    }

    const input: BodyFatInput = {
      gender,
      height: heightNum,
      neck: neckNum,
      waist: waistNum,
      hip: gender === 'female' ? hipNum : undefined,
      unit,
      weight: weightNum > 0 ? weightNum : undefined,
    };

    try {
      const bodyFat = calculateBodyFat(input);
      setResult(bodyFat);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen ölçümlerinizi kontrol edin.'
          : 'Calculation error. Please check your measurements.'
      );
    }
  };

  const handleReset = () => {
    setHeight('');
    setNeck('');
    setWaist('');
    setHip('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const category = result ? getBodyFatCategory(result, gender) : null;
  const categoryData = category ? bodyFatCategories[category] : null;
  const idealRange = getIdealBodyFatRange(gender);
  const bodyComposition =
    result && weight && parseFloat(weight) > 0
      ? calculateLeanBodyMass(parseFloat(weight), result, unit)
      : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Vücut Yağ Oranı Hesaplama' : 'Body Fat Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'US Navy Method ile vücut yağ yüzdenizi hesaplayın'
                : 'Calculate your body fat percentage using US Navy Method'}
            </p>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('gender')}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              {
                value: 'male',
                label: t('male'),
                description: locale === 'tr' ? 'Boyun ve bel ölçümü' : 'Neck and waist measurements',
              },
              {
                value: 'female',
                label: t('female'),
                description:
                  locale === 'tr'
                    ? 'Boyun, bel ve kalça ölçümü'
                    : 'Neck, waist, and hip measurements',
              },
            ]}
            orientation="horizontal"
          />
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
            label={t('neck')}
            type="number"
            value={neck}
            onChange={(e) => setNeck(e.target.value)}
            placeholder={unit === 'metric' ? '35' : '14'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
            }
            helperText={
              locale === 'tr'
                ? 'En dar noktadan ölçün'
                : 'Measure at the narrowest point'
            }
            required
          />
          <Input
            label={t('waist')}
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder={unit === 'metric' ? '80' : '31'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
            }
            helperText={
              locale === 'tr'
                ? gender === 'male'
                  ? 'Göbek seviyesinde'
                  : 'En dar noktada'
                : gender === 'male'
                  ? 'At navel level'
                  : 'At narrowest point'
            }
            required
          />
          {gender === 'female' && (
            <Input
              label={t('hip')}
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              placeholder={unit === 'metric' ? '95' : '37'}
              rightIcon={
                <span className="text-sm">
                  {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                </span>
              }
              helperText={
                locale === 'tr' ? 'En geniş noktada' : 'At widest point'
              }
              required
            />
          )}
          <Input
            label={`${t('weight')} (${locale === 'tr' ? 'İsteğe bağlı' : 'Optional'})`}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
            }
            helperText={
              locale === 'tr'
                ? 'Yağsız kütle hesabı için'
                : 'For lean body mass calculation'
            }
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
              {tCommon('result')}
            </h3>
            <div className="mb-2 text-6xl font-bold text-purple-600">{result}%</div>
            <Badge
              variant={
                category === 'fitness' || category === 'athletes'
                  ? 'success'
                  : category === 'essential'
                    ? 'primary'
                    : category === 'average'
                      ? 'warning'
                      : 'danger'
              }
              size="lg"
            >
              {categoryData.label[locale]}
            </Badge>
          </div>

          <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{categoryData.interpretation[locale]}</p>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'İdeal Fitness Aralığı' : 'Ideal Fitness Range'}
              </h4>
              <div className="flex items-center justify-center gap-2 text-sm text-neutral-700">
                <TrendingDown className="h-4 w-4 text-green-600" />
                <span className="font-medium">{idealRange.min}%</span>
                <span>-</span>
                <span className="font-medium">{idealRange.max}%</span>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </div>

            {bodyComposition && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Vücut Kompozisyonu' : 'Body Composition'}
                </h4>
                <div className="grid grid-cols-2 gap-4 rounded-lg bg-white p-4">
                  <div className="text-center">
                    <p className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Yağsız Kütle' : 'Lean Mass'}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      {bodyComposition.leanMass} {unit === 'metric' ? tUnits('kg') : tUnits('lbs')}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Yağ Kütlesi' : 'Fat Mass'}
                    </p>
                    <p className="text-lg font-bold text-orange-600">
                      {bodyComposition.fatMass} {unit === 'metric' ? tUnits('kg') : tUnits('lbs')}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default BodyFatCalculator;
