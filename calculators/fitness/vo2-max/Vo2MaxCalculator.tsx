'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import { calculateVO2Max, categoryInfo, getTrainingZones } from './vo2MaxLogic';
import { VO2MaxInput, VO2MaxCategory } from './vo2MaxTypes';
import { Activity, Heart } from 'lucide-react';
import VO2MaxProgressIndicator from './components/VO2MaxProgressIndicator';
import VO2MaxCategoryExplainer from './components/VO2MaxCategoryExplainer';

interface Vo2MaxCalculatorProps {
  locale: 'en' | 'tr';
}

const Vo2MaxCalculator: React.FC<Vo2MaxCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [method, setMethod] = useState<'cooper' | 'rockport' | 'formula'>('cooper');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');

  // Cooper Test fields
  const [cooperDistance, setCooperDistance] = useState<string>('');

  // Rockport Test fields
  const [rockportTime, setRockportTime] = useState<string>('');
  const [rockportHeartRate, setRockportHeartRate] = useState<string>('');

  // Formula fields
  const [restingHeartRate, setRestingHeartRate] = useState<string>('');

  const [result, setResult] = useState<{
    vo2Max: number;
    category: VO2MaxCategory;
    categoryLabel: { en: string; tr: string };
    interpretation: { en: string; tr: string };
    percentile: number;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);

    if (!ageNum || !weightNum || ageNum <= 0 || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli değerler girin' : 'Please enter valid values');
      return;
    }

    const input: VO2MaxInput = {
      method,
      age: ageNum,
      gender,
      weight: weightNum,
      unit,
    };

    try {
      if (method === 'cooper') {
        const distance = parseFloat(cooperDistance);
        if (!distance || distance <= 0) {
          setError(
            locale === 'tr' ? 'Lütfen geçerli bir mesafe girin' : 'Please enter a valid distance'
          );
          return;
        }
        input.cooperDistance = distance;
      } else if (method === 'rockport') {
        const time = parseFloat(rockportTime);
        const hr = parseFloat(rockportHeartRate);
        if (!time || !hr || time <= 0 || hr <= 0) {
          setError(
            locale === 'tr'
              ? 'Lütfen geçerli süre ve kalp atış hızı girin'
              : 'Please enter valid time and heart rate'
          );
          return;
        }
        input.rockportTime = time;
        input.rockportHeartRate = hr;
      } else {
        const rhr = parseFloat(restingHeartRate);
        if (!rhr || rhr <= 0) {
          setError(
            locale === 'tr'
              ? 'Lütfen geçerli dinlenme kalp atış hızı girin'
              : 'Please enter valid resting heart rate'
          );
          return;
        }
        input.restingHeartRate = rhr;
      }

      const calculatedResult = calculateVO2Max(input);
      setResult(calculatedResult);
    } catch (err) {
      setError(
        locale === 'tr' ? 'Hesaplama hatası oluştu' : 'Calculation error occurred'
      );
    }
  };

  const handleReset = () => {
    setAge('');
    setGender('male');
    setWeight('');
    setCooperDistance('');
    setRockportTime('');
    setRockportHeartRate('');
    setRestingHeartRate('');
    setResult(null);
    setError('');
  };

  const trainingZones = result && age ? getTrainingZones(result.vo2Max, parseFloat(age)) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'VO2 Max Hesaplama' : 'VO2 Max Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Aerobik kondisyonunuzu ölçün'
                : 'Measure your aerobic fitness'}
            </p>
          </div>
        </div>

        {/* Method Selection */}
        <div className="mb-6">
          <Select
            label={locale === 'tr' ? 'Hesaplama Yöntemi' : 'Calculation Method'}
            value={method}
            onChange={(e) => setMethod(e.target.value as 'cooper' | 'rockport' | 'formula')}
            options={[
              {
                value: 'cooper',
                label: locale === 'tr' ? 'Cooper Testi (12 dakika koşu)' : 'Cooper Test (12-minute run)',
              },
              {
                value: 'rockport',
                label: locale === 'tr' ? 'Rockport Testi (1 mil yürüyüş)' : 'Rockport Test (1-mile walk)',
              },
              {
                value: 'formula',
                label: locale === 'tr' ? 'Formül Tabanlı (Tahmini)' : 'Formula-Based (Estimated)',
              },
            ]}
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
                description: unit === 'metric' ? `${tUnits('kg')}, ${tUnits('cm')}` : `kg, m`,
              },
              {
                value: 'imperial',
                label: t('imperial'),
                description: unit === 'imperial' ? `${tUnits('lbs')}, ${tUnits('inch')}` : `lbs, miles`,
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Common Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            rightIcon={<span className="text-sm">{tUnits('years')}</span>}
            required
          />
          <Select
            label={t('gender')}
            value={gender}
            onChange={(e) => setGender(e.target.value as 'male' | 'female')}
            options={[
              { value: 'male', label: t('male') },
              { value: 'female', label: t('female') },
            ]}
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

        {/* Method-Specific Fields */}
        {method === 'cooper' && (
          <div className="mt-6">
            <Input
              label={locale === 'tr' ? '12 Dakikada Koşulan Mesafe' : 'Distance Covered in 12 Minutes'}
              type="number"
              value={cooperDistance}
              onChange={(e) => setCooperDistance(e.target.value)}
              placeholder={unit === 'metric' ? '2400' : '1.5'}
              rightIcon={
                <span className="text-sm">{unit === 'metric' ? tUnits('meters') : tUnits('miles')}</span>
              }
              required
              helperText={
                locale === 'tr'
                  ? 'Düz bir pistte 12 dakikada koşabildiğiniz maksimum mesafe'
                  : 'Maximum distance you can run in 12 minutes on a flat track'
              }
            />
          </div>
        )}

        {method === 'rockport' && (
          <div className="mt-6 space-y-6">
            <Input
              label={locale === 'tr' ? '1 Mil Yürüyüş Süresi' : '1 Mile Walk Time'}
              type="number"
              value={rockportTime}
              onChange={(e) => setRockportTime(e.target.value)}
              placeholder="15"
              rightIcon={<span className="text-sm">{tUnits('minutes')}</span>}
              required
              helperText={
                locale === 'tr'
                  ? '1 mil (1.6 km) mümkün olduğunca hızlı yürümek için geçen süre'
                  : 'Time taken to walk 1 mile as quickly as possible'
              }
            />
            <Input
              label={locale === 'tr' ? 'Yürüyüş Sonrası Kalp Atış Hızı' : 'Heart Rate After Walk'}
              type="number"
              value={rockportHeartRate}
              onChange={(e) => setRockportHeartRate(e.target.value)}
              placeholder="140"
              rightIcon={<span className="text-sm">bpm</span>}
              required
              helperText={
                locale === 'tr'
                  ? '1 mil yürüdükten hemen sonra kalp atış hızınız'
                  : 'Your heart rate immediately after completing the 1-mile walk'
              }
            />
          </div>
        )}

        {method === 'formula' && (
          <div className="mt-6">
            <Input
              label={locale === 'tr' ? 'Dinlenme Kalp Atış Hızı' : 'Resting Heart Rate'}
              type="number"
              value={restingHeartRate}
              onChange={(e) => setRestingHeartRate(e.target.value)}
              placeholder="60"
              rightIcon={<span className="text-sm">bpm</span>}
              required
              helperText={
                locale === 'tr'
                  ? 'Sabah uyanır uyanmaz, hareket etmeden önce ölçülen kalp atış hızı'
                  : 'Heart rate measured first thing in the morning before any movement'
              }
            />
          </div>
        )}

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
      {result && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {locale === 'tr' ? 'VO2 Max Sonucunuz' : 'Your VO2 Max'}
            </h3>
            <div className="mb-2 text-6xl font-bold text-green-600">
              {result.vo2Max}
            </div>
            <p className="mb-4 text-sm text-neutral-600">ml/kg/min</p>
            <Badge
              variant={
                result.category === 'superior' || result.category === 'excellent'
                  ? 'success'
                  : result.category === 'good'
                    ? 'primary'
                    : result.category === 'fair'
                      ? 'warning'
                      : 'danger'
              }
              size="lg"
            >
              {result.categoryLabel[locale]}
            </Badge>
          </div>

          {/* VO2 Max Progress Indicator */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <VO2MaxProgressIndicator
              vo2Max={result.vo2Max}
              category={result.category}
              locale={locale}
            />
          </div>
        </Card>
      )}

      {/* Training Zones */}
      {result && trainingZones && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Antrenman Bölgeleri' : 'Training Zones'}
              </h3>
              <p className="text-sm text-neutral-600">
                {locale === 'tr'
                  ? 'Kalp atış hızı bazlı antrenman hedefleri'
                  : 'Heart rate-based training targets'}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {Object.entries(trainingZones).map(([key, zone]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-neutral-900">{zone.name[locale]}</h4>
                    <span className="text-sm font-medium text-neutral-500">{zone.percentage}</span>
                  </div>
                  <p className="text-xs text-neutral-600">{zone.description[locale]}</p>
                </div>
                <div className="ml-4 text-right">
                  <div className="font-mono text-sm font-bold text-neutral-900">
                    {zone.heartRate[0]}-{zone.heartRate[1]}
                  </div>
                  <div className="text-xs text-neutral-600">bpm</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Enhanced Post-Calculation Content */}
      {result && (
        <>
          {/* Category Detailed Explanation */}
          <VO2MaxCategoryExplainer
            vo2Max={result.vo2Max}
            category={result.category}
            locale={locale}
          />
        </>
      )}
    </div>
  );
};

export default Vo2MaxCalculator;
