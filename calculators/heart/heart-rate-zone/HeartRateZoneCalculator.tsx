'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui';
import { Activity, HeartPulse, Info } from 'lucide-react';
import HeartRateGuide from './components/HeartRateGuide';
import { calculateHeartRateZones } from './heartRateZoneLogic';
import { HeartRateZoneResult, CalculationMethod } from './heartRateZoneTypes';
import { CalculatorProps } from '@/types/calculator';

const HeartRateZoneCalculator: React.FC<CalculatorProps> = ({ locale }) => {
  const t = useTranslations('calculator');

  const [age, setAge] = useState<string>('');
  const [restingHeartRate, setRestingHeartRate] = useState<string>('');
  const [method, setMethod] = useState<CalculationMethod>('standard');
  const [result, setResult] = useState<HeartRateZoneResult | null>(null);
  const [error, setError] = useState<string>('');

  const texts = {
    en: {
      age: 'Age',
      restingHeartRate: 'Resting Heart Rate (optional)',
      bpm: 'bpm',
      method: 'Calculation Method',
      standardMethod: 'Standard (Age-based)',
      karvonenMethod: 'Karvonen (More Accurate)',
      calculate: 'Calculate Zones',
      reset: 'Reset',
      maxHeartRate: 'Maximum Heart Rate',
      yourZones: 'Your Heart Rate Zones',
      zone: 'Zone',
      targetRange: 'Target Range',
      purpose: 'Purpose',
      info: 'Enter your age to calculate your target heart rate zones. For more accurate results, include your resting heart rate.',
      invalidAge: 'Please enter a valid age between 15 and 100',
      invalidRHR: 'Please enter a valid resting heart rate between 30 and 100 bpm',
    },
    tr: {
      age: 'Yaş',
      restingHeartRate: 'Dinlenme Kalp Atışı (opsiyonel)',
      bpm: 'atım/dk',
      method: 'Hesaplama Yöntemi',
      standardMethod: 'Standart (Yaş bazlı)',
      karvonenMethod: 'Karvonen (Daha Doğru)',
      calculate: 'Bölgeleri Hesapla',
      reset: 'Sıfırla',
      maxHeartRate: 'Maksimum Kalp Atışı',
      yourZones: 'Kalp Atış Hızı Bölgeleriniz',
      zone: 'Bölge',
      targetRange: 'Hedef Aralık',
      purpose: 'Amaç',
      info: 'Hedef kalp atış hızı bölgelerinizi hesaplamak için yaşınızı girin. Daha doğru sonuçlar için dinlenme kalp atışınızı da ekleyin.',
      invalidAge: 'Lütfen 15 ile 100 arasında geçerli bir yaş girin',
      invalidRHR: 'Lütfen 30 ile 100 arasında geçerli bir dinlenme kalp atışı girin',
    },
  };

  const text = texts[locale];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const ageNum = parseInt(age);

    if (!age || isNaN(ageNum) || ageNum < 15 || ageNum > 100) {
      setError(text.invalidAge);
      return;
    }

    let restingHR: number | undefined;
    if (restingHeartRate) {
      restingHR = parseInt(restingHeartRate);
      if (isNaN(restingHR) || restingHR < 30 || restingHR > 100) {
        setError(text.invalidRHR);
        return;
      }
    }

    const zones = calculateHeartRateZones(ageNum, method, restingHR, locale);
    setResult(zones);
  };

  const handleReset = () => {
    setAge('');
    setRestingHeartRate('');
    setMethod('standard');
    setResult(null);
    setError('');
  };

  const getZoneColor = (zoneNum: number): string => {
    const colors = [
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-orange-500 to-red-500',
      'from-red-500 to-pink-500',
    ];
    return colors[zoneNum - 1] || colors[0];
  };

  return (
    <div className="space-y-6">
      {/* Calculator Card */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
            <HeartPulse className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              {locale === 'en' ? 'Heart Rate Zone Calculator' : 'Kalp Atış Hızı Bölgesi Hesaplayıcı'}
            </h2>
            <p className="text-sm text-neutral-600">{text.info}</p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-4">
          {/* Age Input */}
          <div>
            <label htmlFor="age" className="mb-2 block text-sm font-medium text-neutral-700">
              {text.age}
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="30"
              min="15"
              max="100"
            />
          </div>

          {/* Calculation Method */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {text.method}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMethod('standard')}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                  method === 'standard'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {text.standardMethod}
              </button>
              <button
                type="button"
                onClick={() => setMethod('karvonen')}
                className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                  method === 'karvonen'
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {text.karvonenMethod}
              </button>
            </div>
          </div>

          {/* Resting Heart Rate (conditional) */}
          {method === 'karvonen' && (
            <div>
              <label htmlFor="resting-hr" className="mb-2 block text-sm font-medium text-neutral-700">
                {text.restingHeartRate}
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="resting-hr"
                  value={restingHeartRate}
                  onChange={(e) => setRestingHeartRate(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 pr-16 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                  placeholder="60"
                  min="30"
                  max="100"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                  {text.bpm}
                </span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 font-semibold text-white transition-all hover:from-primary-700 hover:to-secondary-700 hover:shadow-lg"
            >
              {text.calculate}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border-2 border-neutral-200 px-6 py-3 font-semibold text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
            >
              {text.reset}
            </button>
          </div>
        </form>
      </Card>

      {/* Results */}
      {result && (
        <>
          <Card>
            <div className="mb-6">
            <h3 className="mb-2 text-xl font-bold text-neutral-900">{text.yourZones}</h3>
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <HeartPulse className="h-4 w-4" />
              <span>
                {text.maxHeartRate}: <strong>{result.maxHeartRate} {text.bpm}</strong>
              </span>
              {result.restingHeartRate && (
                <>
                  <span className="text-neutral-400">•</span>
                  <span>
                    {text.restingHeartRate}: <strong>{result.restingHeartRate} {text.bpm}</strong>
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {Object.entries(result.zones).map(([key, zone], index) => (
              <div
                key={key}
                className="overflow-hidden rounded-xl border-2 border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div className={`bg-gradient-to-r ${getZoneColor(index + 1)} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="font-bold">{zone.name}</h4>
                      <p className="text-sm opacity-90">{zone.range}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {zone.bpm.min}-{zone.bpm.max}
                      </div>
                      <div className="text-sm opacity-90">{text.bpm}</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-2">
                    <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-neutral-600" />
                    <p className="text-sm text-neutral-700">{zone.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <div className="flex gap-3">
              <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold">
                  {locale === 'en' ? 'How to Use These Zones:' : 'Bu Bölgeler Nasıl Kullanılır:'}
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-blue-800">
                  <li>
                    {locale === 'en'
                      ? 'Use a heart rate monitor or fitness tracker for accuracy'
                      : 'Doğruluk için kalp atış hızı monitörü veya fitness tracker kullanın'}
                  </li>
                  <li>
                    {locale === 'en'
                      ? 'Warm up in Zone 1-2 before intense exercise'
                      : 'Yoğun egzersiz öncesi Bölge 1-2\'de ısının'}
                  </li>
                  <li>
                    {locale === 'en'
                      ? 'Most cardio workouts should be in Zone 2-3'
                      : 'Çoğu kardio antrenman Bölge 2-3\'te olmalı'}
                  </li>
                  <li>
                    {locale === 'en'
                      ? 'Use Zone 4-5 for interval training only'
                      : 'Bölge 4-5\'i sadece interval antrenman için kullanın'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          </Card>

          {/* Heart Rate Guide */}
          <HeartRateGuide locale={locale} />
        </>
      )}
    </div>
  );
};

export default HeartRateZoneCalculator;
