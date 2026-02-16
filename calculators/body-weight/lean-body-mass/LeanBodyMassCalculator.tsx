'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateLeanBodyMass, getHealthyLeanRange, interpretLeanPercentage } from './leanBodyMassLogic';
import { LeanBodyMassInput, LeanBodyMassResult } from './leanBodyMassTypes';
import { Dumbbell, Activity, TrendingUp, BarChart3, Info } from 'lucide-react';

interface LeanBodyMassCalculatorProps {
  locale: 'en' | 'tr';
}

const LeanBodyMassCalculator: React.FC<LeanBodyMassCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<LeanBodyMassResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values');
      return;
    }

    // Reasonable range checks
    if (unit === 'metric') {
      if (heightNum < 50 || heightNum > 280) {
        setError(locale === 'tr' ? 'Boy 50-280 cm arasında olmalıdır' : 'Height must be between 50-280 cm');
        return;
      }
      if (weightNum < 20 || weightNum > 350) {
        setError(locale === 'tr' ? 'Kilo 20-350 kg arasında olmalıdır' : 'Weight must be between 20-350 kg');
        return;
      }
    } else {
      if (heightNum < 20 || heightNum > 110) {
        setError(locale === 'tr' ? 'Boy 20-110 inç arasında olmalıdır' : 'Height must be between 20-110 inches');
        return;
      }
      if (weightNum < 44 || weightNum > 770) {
        setError(locale === 'tr' ? 'Kilo 44-770 lbs arasında olmalıdır' : 'Weight must be between 44-770 lbs');
        return;
      }
    }

    const input: LeanBodyMassInput = {
      height: heightNum,
      weight: weightNum,
      gender,
      unit,
    };

    const lbmResult = calculateLeanBodyMass(input);
    setResult(lbmResult);
  };

  const handleReset = () => {
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const interpretation = result ? interpretLeanPercentage(result.leanPercentage, gender) : null;
  const healthyRange = getHealthyLeanRange(gender);

  const getInterpretationColor = () => {
    if (!interpretation) return 'primary';
    switch (interpretation) {
      case 'athletic': return 'success';
      case 'healthy': return 'success';
      case 'low': return 'warning';
      default: return 'primary';
    }
  };

  const getInterpretationLabel = () => {
    if (!interpretation) return '';
    const labels = {
      athletic: { en: 'Athletic Build', tr: 'Atletik Yapı' },
      healthy: { en: 'Healthy Range', tr: 'Sağlıklı Aralık' },
      low: { en: 'Below Average', tr: 'Ortalamanın Altında' },
    };
    return labels[interpretation][locale];
  };

  const getInterpretationText = () => {
    if (!interpretation) return '';
    const texts = {
      athletic: {
        en: 'Your lean body mass percentage is above average, indicating an athletic or muscular build. This is common among athletes and those who engage in regular strength training.',
        tr: 'Yağsız vücut kütle yüzdeniz ortalamanın üstünde, atletik veya kaslı bir yapıya işaret ediyor. Bu, sporcular ve düzenli güç antrenmanı yapanlar arasında yaygındır.',
      },
      healthy: {
        en: 'Your lean body mass percentage falls within the healthy range. This indicates a good balance between lean tissue and body fat.',
        tr: 'Yağsız vücut kütle yüzdeniz sağlıklı aralıkta. Bu, yağsız doku ve vücut yağı arasında iyi bir denge olduğunu gösterir.',
      },
      low: {
        en: 'Your lean body mass percentage is below the typical range. This may indicate higher body fat levels. Consider consulting a healthcare provider for personalized guidance.',
        tr: 'Yağsız vücut kütle yüzdeniz tipik aralığın altında. Bu, daha yüksek vücut yağı seviyelerini gösterebilir. Kişiselleştirilmiş rehberlik için bir sağlık uzmanına danışmayı düşünün.',
      },
    };
    return texts[interpretation][locale];
  };

  const weightUnit = unit === 'metric' ? tUnits('kg') : tUnits('lbs');

  // Convert result to display units if imperial
  const displayWeight = (kg: number): number => {
    if (unit === 'imperial') {
      return Math.round((kg / 0.453592) * 10) / 10;
    }
    return kg;
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
            <Dumbbell className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yağsız Vücut Kütlesi Hesaplama' : 'Lean Body Mass Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Yağsız vücut kütlenizi hesaplayın'
                : 'Calculate your lean body mass'}
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

        {/* Gender Selection */}
        <div className="mb-6">
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
            label={t('weight')}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
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

      {/* Main Result */}
      {result && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'Yağsız Vücut Kütleniz' : 'Your Lean Body Mass'}
            </h3>
            <div className="mb-2 text-6xl font-bold text-primary-600">
              {displayWeight(result.average)}
            </div>
            <p className="mb-4 text-lg text-neutral-500">{weightUnit}</p>
            <Badge variant={getInterpretationColor() as 'success' | 'warning' | 'primary'} size="lg">
              {getInterpretationLabel()}
            </Badge>
          </div>

          {/* Lean vs Fat Breakdown */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <h4 className="mb-4 text-center text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Vücut Kompozisyonu' : 'Body Composition'}
            </h4>

            {/* Visual Bar */}
            <div className="mb-4 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="flex h-8 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-xs font-bold text-white transition-all duration-500"
                style={{ width: `${Math.min(Math.max(result.leanPercentage, 5), 95)}%` }}
              >
                {result.leanPercentage}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-violet-50 p-4 text-center">
                <Activity className="mx-auto mb-2 h-5 w-5 text-violet-600" />
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Yağsız Kütle' : 'Lean Mass'}
                </p>
                <p className="text-lg font-bold text-violet-700">
                  {displayWeight(result.average)} {weightUnit}
                </p>
                <p className="text-sm text-violet-600">{result.leanPercentage}%</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4 text-center">
                <BarChart3 className="mx-auto mb-2 h-5 w-5 text-amber-600" />
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Yağ Kütlesi' : 'Fat Mass'}
                </p>
                <p className="text-lg font-bold text-amber-700">
                  {displayWeight(result.bodyFatMass)} {weightUnit}
                </p>
                <p className="text-sm text-amber-600">{result.bodyFatPercentage}%</p>
              </div>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <h4 className="mb-2 text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
            </h4>
            <p className="text-sm text-neutral-700">{getInterpretationText()}</p>
          </div>
        </Card>
      )}

      {/* Formula Comparison */}
      {result && (
        <Card className="animate-slide-up">
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Formül Karşılaştırması' : 'Formula Comparison'}
            </h3>
          </div>

          <p className="mb-4 text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Yağsız vücut kütleniz üç farklı bilimsel formül kullanılarak hesaplandı:'
              : 'Your lean body mass was calculated using three different scientific formulas:'}
          </p>

          <div className="space-y-3">
            {[
              {
                name: 'Boer (1984)',
                value: result.boer,
                desc: {
                  en: 'Most accurate for general population',
                  tr: 'Genel popülasyon için en doğru',
                },
              },
              {
                name: 'James (1976)',
                value: result.james,
                desc: {
                  en: 'Widely used in clinical settings',
                  tr: 'Klinik ortamlarda yaygın kullanılır',
                },
              },
              {
                name: 'Hume (1966)',
                value: result.hume,
                desc: {
                  en: 'Classic formula, good baseline',
                  tr: 'Klasik formül, iyi temel referans',
                },
              },
            ].map((formula) => (
              <div
                key={formula.name}
                className="flex items-center justify-between rounded-lg border border-neutral-200 p-3"
              >
                <div>
                  <p className="font-medium text-neutral-900">{formula.name}</p>
                  <p className="text-xs text-neutral-500">{formula.desc[locale]}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-600">
                    {displayWeight(formula.value)} {weightUnit}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between rounded-lg border-2 border-primary-200 bg-primary-50 p-3">
              <div>
                <p className="font-semibold text-primary-900">
                  {locale === 'tr' ? 'Ortalama' : 'Average'}
                </p>
                <p className="text-xs text-primary-600">
                  {locale === 'tr' ? 'Üç formülün ortalaması' : 'Mean of three formulas'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary-700">
                  {displayWeight(result.average)} {weightUnit}
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Healthy Range Info */}
      {result && (
        <Card className="animate-slide-up">
          <div className="mb-4 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Sağlıklı Aralık Bilgisi' : 'Healthy Range Information'}
            </h3>
          </div>

          <div className="rounded-lg bg-neutral-50 p-4">
            <p className="mb-3 text-sm text-neutral-700">
              {locale === 'tr'
                ? `${gender === 'male' ? 'Erkekler' : 'Kadınlar'} için sağlıklı yağsız vücut kütlesi yüzdesi tipik olarak %${healthyRange.min} ile %${healthyRange.max} arasındadır.`
                : `Healthy lean body mass percentage for ${gender === 'male' ? 'men' : 'women'} typically ranges from ${healthyRange.min}% to ${healthyRange.max}%.`}
            </p>

            <div className="relative mb-2 h-6 overflow-hidden rounded-full bg-neutral-200">
              {/* Healthy range highlight */}
              <div
                className="absolute h-full bg-green-200"
                style={{
                  left: `${healthyRange.min}%`,
                  width: `${healthyRange.max - healthyRange.min}%`,
                }}
              />
              {/* User marker */}
              <div
                className="absolute top-0 h-full w-1 bg-primary-600"
                style={{
                  left: `${Math.min(Math.max(result.leanPercentage, 2), 98)}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs text-neutral-500">
              <span>0%</span>
              <span className="text-green-600">
                {healthyRange.min}% - {healthyRange.max}%
              </span>
              <span>100%</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default LeanBodyMassCalculator;
