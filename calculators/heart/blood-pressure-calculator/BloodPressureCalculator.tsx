'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui';
import { Activity, Heart, AlertTriangle, Info, TrendingUp } from 'lucide-react';
import BloodPressureGuide from './components/BloodPressureGuide';
import { calculateBloodPressure, validateBloodPressure } from './bloodPressureLogic';
import { BloodPressureResult } from './bloodPressureTypes';
import { CalculatorProps } from '@/types/calculator';

const BloodPressureCalculator: React.FC<CalculatorProps> = ({ locale }) => {
  const t = useTranslations('calculator');

  const [systolic, setSystolic] = useState<string>('');
  const [diastolic, setDiastolic] = useState<string>('');
  const [result, setResult] = useState<BloodPressureResult | null>(null);
  const [error, setError] = useState<string>('');

  const texts = {
    en: {
      systolic: 'Systolic Pressure (Upper)',
      diastolic: 'Diastolic Pressure (Lower)',
      mmHg: 'mmHg',
      calculate: 'Check Blood Pressure',
      reset: 'Reset',
      yourReading: 'Your Blood Pressure Reading',
      category: 'Category',
      recommendations: 'Recommendations',
      info: 'Enter your blood pressure readings to see your category and get personalized recommendations.',
      systolicPlaceholder: '120',
      diastolicPlaceholder: '80',
      invalidSystolic: 'Please enter a valid systolic pressure (70-250 mmHg)',
      invalidDiastolic: 'Please enter a valid diastolic pressure (40-200 mmHg)',
      diastolicHigher: 'Diastolic pressure cannot be higher than systolic pressure',
      normalRange: 'Normal Range',
      systolicRange: 'Systolic: < 120',
      diastolicRange: 'Diastolic: < 80',
      measurementTip: 'How to Measure',
      measurementTips: [
        'Rest for 5 minutes before measuring',
        'Sit with back supported and feet flat',
        'Arm at heart level, palm facing up',
        'Take 2-3 readings 1 minute apart',
        'Measure same time each day'
      ],
      emergencyNote: '⚠️ If you experience chest pain, severe headache, or vision problems with high blood pressure, seek emergency medical care immediately.'
    },
    tr: {
      systolic: 'Sistolik Basınç (Büyük Tansiyon)',
      diastolic: 'Diyastolik Basınç (Küçük Tansiyon)',
      mmHg: 'mmHg',
      calculate: 'Tansiyonu Kontrol Et',
      reset: 'Sıfırla',
      yourReading: 'Tansiyon Ölçümünüz',
      category: 'Kategori',
      recommendations: 'Öneriler',
      info: 'Tansiyon ölçümlerinizi girerek kategorinizi öğrenin ve kişiselleştirilmiş öneriler alın.',
      systolicPlaceholder: '120',
      diastolicPlaceholder: '80',
      invalidSystolic: 'Lütfen geçerli bir sistolik basınç girin (70-250 mmHg)',
      invalidDiastolic: 'Lütfen geçerli bir diyastolik basınç girin (40-200 mmHg)',
      diastolicHigher: 'Diyastolik basınç sistolik basınçtan yüksek olamaz',
      normalRange: 'Normal Aralık',
      systolicRange: 'Sistolik: < 120',
      diastolicRange: 'Diyastolik: < 80',
      measurementTip: 'Nasıl Ölçülür',
      measurementTips: [
        'Ölçmeden önce 5 dakika dinlenin',
        'Sırtınız destekli, ayaklarınız yere basarak oturun',
        'Kolunuz kalp hizasında, avuç içi yukarı',
        '1 dakika arayla 2-3 ölçüm yapın',
        'Her gün aynı saatte ölçün'
      ],
      emergencyNote: '⚠️ Yüksek tansiyon ile birlikte göğüs ağrısı, şiddetli baş ağrısı veya görme problemleri yaşıyorsanız hemen acil tıbbi yardım alın.'
    },
  };

  const text = texts[locale];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const systolicNum = parseInt(systolic);
    const diastolicNum = parseInt(diastolic);

    if (!systolic || isNaN(systolicNum)) {
      setError(text.invalidSystolic);
      return;
    }

    if (!diastolic || isNaN(diastolicNum)) {
      setError(text.invalidDiastolic);
      return;
    }

    const validation = validateBloodPressure(systolicNum, diastolicNum);
    if (!validation.isValid) {
      if (validation.error === 'systolic_range') {
        setError(text.invalidSystolic);
      } else if (validation.error === 'diastolic_range') {
        setError(text.invalidDiastolic);
      } else if (validation.error === 'diastolic_higher') {
        setError(text.diastolicHigher);
      }
      return;
    }

    const bpResult = calculateBloodPressure(systolicNum, diastolicNum, locale);
    setResult(bpResult);
  };

  const handleReset = () => {
    setSystolic('');
    setDiastolic('');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      {/* Calculator Card */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              {locale === 'en' ? 'Blood Pressure Calculator' : 'Kan Basıncı Hesaplayıcı'}
            </h2>
            <p className="text-sm text-neutral-600">{text.info}</p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-4">
          {/* Systolic Input */}
          <div>
            <label htmlFor="systolic" className="mb-2 block text-sm font-medium text-neutral-700">
              {text.systolic}
            </label>
            <div className="relative">
              <input
                type="number"
                id="systolic"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 pr-20 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder={text.systolicPlaceholder}
                min="70"
                max="250"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                {text.mmHg}
              </span>
            </div>
          </div>

          {/* Diastolic Input */}
          <div>
            <label htmlFor="diastolic" className="mb-2 block text-sm font-medium text-neutral-700">
              {text.diastolic}
            </label>
            <div className="relative">
              <input
                type="number"
                id="diastolic"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 pr-20 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder={text.diastolicPlaceholder}
                min="40"
                max="200"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                {text.mmHg}
              </span>
            </div>
          </div>

          {/* Normal Range Info */}
          <div className="rounded-lg bg-green-50 p-4">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900 text-sm">{text.normalRange}</p>
                <div className="mt-1 space-y-0.5 text-sm text-green-800">
                  <p>{text.systolicRange}</p>
                  <p>{text.diastolicRange}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700 flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
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

        {/* Measurement Tips */}
        <div className="mt-6 rounded-lg bg-blue-50 p-4">
          <div className="flex gap-3">
            <Info className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 text-sm">{text.measurementTip}</p>
              <ul className="mt-2 space-y-1 text-sm text-blue-800">
                {text.measurementTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <>
          <Card>
            <div className="mb-6">
              <h3 className="mb-4 text-xl font-bold text-neutral-900">{text.yourReading}</h3>

              {/* Blood Pressure Display */}
              <div className={`rounded-xl bg-gradient-to-r ${result.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">{text.category}</p>
                    <h4 className="text-2xl font-bold mt-1">{result.interpretation.title}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">
                      {result.systolic}/{result.diastolic}
                    </div>
                    <div className="text-sm opacity-90">{text.mmHg}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-neutral-700 leading-relaxed">
                {result.interpretation.description}
              </p>
            </div>

            {/* Recommendations */}
            <div>
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-neutral-900">
                <Activity className="h-5 w-5 text-primary-600" />
                {text.recommendations}
              </h4>
              <ul className="space-y-2">
                {result.interpretation.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                      {index + 1}
                    </span>
                    <span className="flex-1">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Warning for Crisis */}
            {result.category === 'hypertensive_crisis' && (
              <div className="mt-6 rounded-lg bg-red-100 border-2 border-red-300 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red-700" />
                  <div className="text-sm text-red-900">
                    <p className="font-bold text-base mb-2">🚨 MEDICAL EMERGENCY</p>
                    <p>{text.emergencyNote}</p>
                  </div>
                </div>
              </div>
            )}

            {/* General Warning for High BP */}
            {(result.category === 'hypertension_stage1' || result.category === 'hypertension_stage2') && (
              <div className="mt-6 rounded-lg bg-orange-50 border border-orange-200 p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-orange-600" />
                  <p className="text-sm text-orange-900">
                    {locale === 'en'
                      ? 'High blood pressure often has no symptoms but can lead to serious health problems. Consult your healthcare provider for proper evaluation and treatment.'
                      : 'Yüksek tansiyon genellikle semptom göstermez ancak ciddi sağlık sorunlarına yol açabilir. Uygun değerlendirme ve tedavi için sağlık uzmanınıza danışın.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

          {/* Blood Pressure Guide */}
          <BloodPressureGuide locale={locale} />
        </>
      )}
    </div>
  );
};

export default BloodPressureCalculator;
