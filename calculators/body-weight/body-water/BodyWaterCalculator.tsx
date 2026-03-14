'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateBodyWater, bodyWaterCategories, getHealthyRange } from './bodyWaterLogic';
import { BodyWaterInput, BodyWaterResult } from './bodyWaterTypes';
import { Droplets, GlassWater, Activity, Heart } from 'lucide-react';

interface BodyWaterCalculatorProps {
  locale: 'en' | 'tr';
}

const BodyWaterCalculator: React.FC<BodyWaterCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BodyWaterResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!ageNum || !heightNum || !weightNum || ageNum <= 0 || heightNum <= 0 || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values');
      return;
    }

    if (ageNum < 1 || ageNum > 120) {
      setError(locale === 'tr' ? 'Lütfen 1-120 arasında bir yaş girin' : 'Please enter an age between 1 and 120');
      return;
    }

    const input: BodyWaterInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
    };

    const calculationResult = calculateBodyWater(input);
    setResult(calculationResult);
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setResult(null);
    setError('');
  };

  const categoryData = result ? bodyWaterCategories[result.category] : null;
  const healthyRange = getHealthyRange(gender);

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Droplets className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Vücut Suyu Hesaplayıcı' : 'Body Water Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Vücudunuzdaki toplam su miktarını hesaplayın'
                : 'Calculate total water content in your body'}
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
        <div className="grid gap-6 sm:grid-cols-3">
          <Input
            label={locale === 'tr' ? 'Yaş' : 'Age'}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            rightIcon={
              <span className="text-sm">{locale === 'tr' ? 'yıl' : 'yrs'}</span>
            }
            required
          />
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

      {/* Result */}
      {result && categoryData && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {tCommon('result')}
            </h3>
            <div className="mb-2 text-6xl font-bold text-cyan-600">
              {result.waterPercentage}%
            </div>
            <p className="mb-4 text-lg text-neutral-600">
              {locale === 'tr' ? 'Vücut Su Oranı' : 'Body Water Percentage'}
            </p>
            <Badge
              variant={
                result.category === 'normal'
                  ? 'success'
                  : result.category === 'low'
                    ? 'warning'
                    : 'primary'
              }
              size="lg"
            >
              {categoryData.label[locale]}
            </Badge>
          </div>

          {/* Water Progress Bar */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <div className="mb-2 flex justify-between text-xs text-neutral-500">
              <span>{healthyRange.min}%</span>
              <span>{locale === 'tr' ? 'Sağlıklı Aralık' : 'Healthy Range'}</span>
              <span>{healthyRange.max}%</span>
            </div>
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-neutral-200">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                style={{ width: `${Math.min(result.waterPercentage, 80)}%` }}
              />
              {/* Healthy range markers */}
              <div
                className="absolute top-0 h-full border-l-2 border-green-500"
                style={{ left: `${healthyRange.min}%` }}
              />
              <div
                className="absolute top-0 h-full border-l-2 border-green-500"
                style={{ left: `${healthyRange.max}%` }}
              />
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl bg-white/60 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
                <Droplets className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Toplam Su' : 'Total Water'}
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {result.totalWaterLiters} L
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/60 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <GlassWater className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Günlük Su İhtiyacı' : 'Daily Water Need'}
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {result.dailyIntakeRecommendation} L
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-white/60 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Activity className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Sağlıklı Aralık' : 'Healthy Range'}
                </p>
                <p className="text-lg font-bold text-neutral-900">
                  {healthyRange.min}-{healthyRange.max}%
                </p>
              </div>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
            <div>
              <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Değerlendirme' : 'Interpretation'}
              </h4>
              <p className="text-sm text-neutral-700">{categoryData.interpretation[locale]}</p>
            </div>
          </div>
        </Card>
      )}

      {/* Hydration Tips */}
      {result && (
        <Card>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-100">
              <Heart className="h-5 w-5 text-cyan-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Hidrasyon İpuçları' : 'Hydration Tips'}
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {(locale === 'tr'
              ? [
                  'Gün boyunca düzenli aralıklarla su için, susadığınızı hissetmeyi beklemeyin.',
                  'Sabah kalktığınızda bir bardak su içmek metabolizmanızı başlatır.',
                  'Egzersiz öncesi, sırası ve sonrasında ek su tüketimi şarttır.',
                  'İdrar renginiz açık sarı olmalıdır - koyu renk dehidrasyon belirtisidir.',
                  'Meyve ve sebzeler de su içerir - salatalık, karpuz ve domates iyi kaynaklardır.',
                  'Kafeinli ve alkollü içecekler vücuttaki su kaybını artırabilir.',
                ]
              : [
                  'Drink water at regular intervals throughout the day, do not wait until you feel thirsty.',
                  'Drinking a glass of water when you wake up helps kickstart your metabolism.',
                  'Extra water intake is essential before, during, and after exercise.',
                  'Your urine color should be light yellow - dark color indicates dehydration.',
                  'Fruits and vegetables also contain water - cucumber, watermelon, and tomatoes are great sources.',
                  'Caffeinated and alcoholic beverages can increase water loss from the body.',
                ]
            ).map((tip, index) => (
              <div
                key={index}
                className="flex gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm text-neutral-700">{tip}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default BodyWaterCalculator;
