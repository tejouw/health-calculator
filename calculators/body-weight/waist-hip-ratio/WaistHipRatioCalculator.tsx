'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card } from '@/components/ui';
import { calculateWaistHipRatio } from './waistHipRatioLogic';
import type { WaistHipRatioInput } from './waistHipRatioTypes';
import { Ruler, Info, Heart, Activity, AlertCircle, TrendingDown, Target, Apple } from 'lucide-react';

const riskStyles = {
  low: { card: 'border-green-200 bg-green-50', text: 'text-green-700', badge: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
  moderate: { card: 'border-amber-200 bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', dot: 'bg-amber-500' },
  high: { card: 'border-red-200 bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-800', dot: 'bg-red-500' },
  'very-high': { card: 'border-red-300 bg-red-100', text: 'text-red-800', badge: 'bg-red-200 text-red-900', dot: 'bg-red-600' },
};

const bodyTypeLabels = {
  apple: { en: 'Apple Shape (Central Obesity)', tr: 'Elma Tipi (Merkezi Obezite)' },
  pear: { en: 'Pear Shape (Peripheral Fat)', tr: 'Armut Tipi (Çevresel Yağ)' },
  balanced: { en: 'Balanced Distribution', tr: 'Dengeli Dağılım' },
};

const bodyTypeColors = {
  apple: 'text-red-600 bg-red-100',
  pear: 'text-green-600 bg-green-100',
  balanced: 'text-blue-600 bg-blue-100',
};

const riskLabels = {
  low: { en: 'Low Risk', tr: 'Düşük Risk' },
  moderate: { en: 'Moderate Risk', tr: 'Orta Risk' },
  high: { en: 'High Risk', tr: 'Yüksek Risk' },
  'very-high': { en: 'Very High Risk', tr: 'Çok Yüksek Risk' },
};

const ageGroupLabels = {
  'young-adult': { en: 'Young Adult (18-39)', tr: 'Genç Yetişkin (18-39)' },
  'middle-aged': { en: 'Middle-Aged (40-59)', tr: 'Orta Yaş (40-59)' },
  'senior': { en: 'Senior (60+)', tr: 'Yaşlı (60+)' },
};

const riskDescriptions = {
  low: {
    en: 'Your waist-to-hip ratio indicates a lower risk of cardiovascular disease. Maintain your healthy lifestyle with regular exercise and balanced nutrition.',
    tr: 'Bel-kalça oranınız, kardiyovasküler hastalık için düşük bir risk düzeyini göstermektedir. Düzenli egzersiz ve dengeli beslenmeyle sağlıklı yaşam tarzınızı sürdürün.',
  },
  moderate: {
    en: 'Your waist-to-hip ratio is in the moderate risk range. Consider increasing physical activity and reviewing your diet to improve your ratio.',
    tr: 'Bel-kalça oranınız orta risk aralığında bulunmaktadır. Oranınızı iyileştirmek için fiziksel aktivitenizi artırmayı ve diyetinizi gözden geçirmeyi düşünün.',
  },
  high: {
    en: 'Your waist-to-hip ratio indicates an elevated cardiovascular risk. Consult a healthcare professional and consider lifestyle changes including diet and exercise.',
    tr: 'Bel-kalça oranınız yüksek bir kardiyovasküler risk düzeyini göstermektedir. Bir sağlık profesyoneliyle iletişime geçmenizi ve yaşam tarzında değişiklikler yapmanızı öneriyoruz.',
  },
};

const whoRows = [
  { level: 'low' as const, male: '< 0.90', female: '< 0.80' },
  { level: 'moderate' as const, male: '0.90 – 0.99', female: '0.80 – 0.84' },
  { level: 'high' as const, male: '≥ 1.00', female: '≥ 0.85' },
];

interface WaistHipRatioCalculatorProps {
  locale: 'en' | 'tr';
}

const WaistHipRatioCalculator: React.FC<WaistHipRatioCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');
  const tForm = useTranslations('form');
  const tUnits = useTranslations('units');

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<ReturnType<typeof calculateWaistHipRatio> | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    const waistNum = parseFloat(waist);
    const hipNum = parseFloat(hip);
    const ageNum = age ? parseFloat(age) : undefined;

    if (isNaN(waistNum) || isNaN(hipNum) || waistNum <= 0 || hipNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli ölçüm değerleri girin' : 'Please enter valid measurement values');
      return;
    }

    if (ageNum && (ageNum < 18 || ageNum > 120)) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (18-120)' : 'Please enter a valid age (18-120)');
      return;
    }

    const input: WaistHipRatioInput = { gender, unit, waist: waistNum, hip: hipNum, age: ageNum };
    setResult(calculateWaistHipRatio(input));
  };

  const handleReset = () => {
    setWaist('');
    setHip('');
    setAge('');
    setResult(null);
    setError('');
  };

  // Maps ratio onto [0%, 100%] across the gradient bar
  const getMarkerPosition = () => {
    if (!result) return 50;
    if (gender === 'male') {
      return Math.max(2, Math.min(98, ((result.ratio - 0.6) / 0.6) * 100));
    }
    return Math.max(2, Math.min(98, ((result.ratio - 0.55) / 0.5) * 100));
  };

  return (
    <div className="space-y-6">
      <Card>
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
            <Ruler className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Bel-Kalça Oranı Hesaplama' : 'Waist-to-Hip Ratio Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'Kardiyovasküler sağlık riskini değerlendirin' : 'Assess your cardiovascular health risk'}
            </p>
          </div>
        </div>

        {/* Measurement Guide */}
        <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-semibold text-blue-800">
                {locale === 'tr' ? 'Ölçüm Rehberi' : 'Measurement Guide'}
              </p>
              <ul className="mt-1 space-y-1 text-sm text-blue-700">
                <li>
                  <span className="font-medium">{locale === 'tr' ? 'Bel:' : 'Waist:'}</span>{' '}
                  {locale === 'tr'
                    ? 'Göbek deliğinin hemen üstinde, en dar noktada ölçün.'
                    : 'Measure at the narrowest point, just above the navel.'}
                </li>
                <li>
                  <span className="font-medium">{locale === 'tr' ? 'Kalça:' : 'Hip:'}</span>{' '}
                  {locale === 'tr'
                    ? 'En geniş noktada, kalça çıkıntısının ortasında ölçün.'
                    : 'Measure at the widest point, around the buttocks.'}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-6">
          <RadioGroup
            label={tForm('gender')}
            name="gender"
            value={gender}
            onChange={(value) => {
              setGender(value as 'male' | 'female');
              setResult(null);
            }}
            options={[
              { value: 'male', label: tForm('male') },
              { value: 'female', label: tForm('female') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Unit System */}
        <div className="mb-6">
          <RadioGroup
            label={tForm('unitSystem')}
            name="unit"
            value={unit}
            onChange={(value) => {
              setUnit(value as 'metric' | 'imperial');
              setWaist('');
              setHip('');
              setResult(null);
            }}
            options={[
              { value: 'metric', label: tForm('metric'), description: tUnits('cm') },
              { value: 'imperial', label: tForm('imperial'), description: tUnits('inch') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Age */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Yaş (Opsiyonel)' : 'Age (Optional)'}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yıl' : 'years'}</span>}
            helperText={locale === 'tr' ? 'Yaş bazlı değerlendirme için' : 'For age-specific assessment'}
          />
        </div>

        {/* Measurements */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Bel Çevresi' : 'Waist Circumference'}
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder={unit === 'metric' ? '80' : '31'}
            rightIcon={<span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Kalça Çevresi' : 'Hip Circumference'}
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            placeholder={unit === 'metric' ? '100' : '39'}
            rightIcon={<span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>}
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

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Main Result Card with Health Score */}
          <Card className={`animate-slide-up border-2 ${riskStyles[result.riskLevel].card}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Sonuç' : 'Result'}
              </h3>
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${riskStyles[result.riskLevel].badge}`}>
                {riskLabels[result.riskLevel][locale]}
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Ratio */}
              <div className="text-center">
                <div className={`text-5xl font-bold ${riskStyles[result.riskLevel].text}`}>
                  {result.ratio.toFixed(2)}
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Bel-Kalça Oranı' : 'Waist-to-Hip Ratio'}
                </p>
              </div>

              {/* Health Score */}
              <div className="text-center">
                <div className="relative inline-flex h-24 w-24 items-center justify-center">
                  <svg className="h-24 w-24 -rotate-90 transform">
                    <circle cx="48" cy="48" r="40" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke={result.healthScore >= 70 ? '#10b981' : result.healthScore >= 40 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(result.healthScore / 100) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-2xl font-bold text-neutral-900">
                    {result.healthScore}
                  </div>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Sağlık Skoru' : 'Health Score'}
                </p>
              </div>
            </div>

            {/* Body Type & Age Group */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${bodyTypeColors[result.bodyType]}`}>
                <Apple className="h-4 w-4" />
                {bodyTypeLabels[result.bodyType][locale]}
              </span>
              {result.ageGroup && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700">
                  {ageGroupLabels[result.ageGroup][locale]}
                </span>
              )}
            </div>

            {/* Gradient Scale */}
            <div className="mt-6 py-2">
              <div className="relative h-3 rounded-full bg-gradient-to-r from-green-400 via-amber-400 to-red-500" />
              <div
                className="absolute top-0 h-7 w-5 -translate-x-1/2 -translate-y-0.5 flex items-center justify-center"
                style={{ left: `${getMarkerPosition()}%` }}
              >
                <div className="h-5 w-5 rounded-full border-2 border-neutral-700 bg-white shadow-md" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-neutral-500">
                <span>{locale === 'tr' ? 'Düşük' : 'Low'}</span>
                <span>{locale === 'tr' ? 'Orta' : 'Moderate'}</span>
                <span>{locale === 'tr' ? 'Yüksek' : 'High'}</span>
              </div>
            </div>

            {/* Risk Description */}
            <p className={`mt-4 text-sm ${riskStyles[result.riskLevel].text}`}>
              {riskDescriptions[result.riskLevel][locale]}
            </p>
          </Card>

          {/* Detailed Health Risks */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Detaylı Risk Değerlendirmesi' : 'Detailed Risk Assessment'}
            </h3>
            <div className="space-y-4">
              {/* Cardiovascular Risk */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <Heart className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Kardiyovasküler Risk' : 'Cardiovascular Risk'}
                    </h4>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskStyles[result.cardiovascularRisk].badge}`}>
                      {riskLabels[result.cardiovascularRisk][locale]}
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
                    <div
                      className={`h-2 rounded-full ${result.cardiovascularRisk === 'very-high' ? 'bg-red-600' : result.cardiovascularRisk === 'high' ? 'bg-red-500' : result.cardiovascularRisk === 'moderate' ? 'bg-amber-500' : 'bg-green-500'}`}
                      style={{
                        width: `${result.cardiovascularRisk === 'very-high' ? 100 : result.cardiovascularRisk === 'high' ? 75 : result.cardiovascularRisk === 'moderate' ? 50 : 25}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Diabetes Risk */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Diyabet Riski' : 'Diabetes Risk'}
                    </h4>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskStyles[result.diabetesRisk].badge}`}>
                      {riskLabels[result.diabetesRisk][locale]}
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
                    <div
                      className={`h-2 rounded-full ${result.diabetesRisk === 'very-high' ? 'bg-red-600' : result.diabetesRisk === 'high' ? 'bg-red-500' : result.diabetesRisk === 'moderate' ? 'bg-amber-500' : 'bg-green-500'}`}
                      style={{
                        width: `${result.diabetesRisk === 'very-high' ? 100 : result.diabetesRisk === 'high' ? 75 : result.diabetesRisk === 'moderate' ? 50 : 25}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Metabolic Syndrome Risk */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Metabolik Sendrom Riski' : 'Metabolic Syndrome Risk'}
                    </h4>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskStyles[result.metabolicSyndromeRisk].badge}`}>
                      {riskLabels[result.metabolicSyndromeRisk][locale]}
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
                    <div
                      className={`h-2 rounded-full ${result.metabolicSyndromeRisk === 'high' ? 'bg-red-500' : result.metabolicSyndromeRisk === 'moderate' ? 'bg-amber-500' : 'bg-green-500'}`}
                      style={{
                        width: `${result.metabolicSyndromeRisk === 'high' ? 100 : result.metabolicSyndromeRisk === 'moderate' ? 60 : 30}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Ideal Range & Targets */}
          <Card className="animate-slide-up bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Hedef ve Öneriler' : 'Target & Recommendations'}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Ideal Ratio Range */}
              <div className="rounded-lg bg-white p-3">
                <p className="text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'İdeal Oran Aralığınız' : 'Your Ideal Ratio Range'}
                </p>
                <p className="mt-1 text-2xl font-bold text-blue-600">
                  {result.idealRatioRange.min.toFixed(2)} - {result.idealRatioRange.max.toFixed(2)}
                </p>
              </div>

              {/* Target Waist */}
              {result.targetWaist && (
                <div className="rounded-lg bg-white p-3">
                  <p className="text-sm font-medium text-neutral-700">
                    {locale === 'tr' ? 'Hedef Bel Çevresi' : 'Target Waist Circumference'}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-green-600">
                    {result.targetWaist} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                  </p>
                </div>
              )}

              {/* Waist Reduction Needed */}
              {result.waistReduction && result.waistReduction > 0 && (
                <div className="rounded-lg bg-white p-3 border-l-4 border-amber-500">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-amber-600" />
                    <p className="text-sm font-medium text-neutral-700">
                      {locale === 'tr' ? 'Azaltmanız Gereken' : 'Reduction Needed'}
                    </p>
                  </div>
                  <p className="mt-1 text-2xl font-bold text-amber-600">
                    {result.waistReduction} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Düzenli egzersiz ve dengeli beslenmeyle bu hedefe ulaşabilirsiniz'
                      : 'You can reach this goal with regular exercise and balanced nutrition'}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* WHO Reference Table */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'DSÖ Risk Referansı' : 'WHO Risk Reference'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Risk Seviyesi' : 'Risk Level'}
                    </th>
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Erkek' : 'Male'}
                    </th>
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Kadın' : 'Female'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {whoRows.map(({ level, male, female }, i) => (
                    <tr key={level} className={i < 2 ? 'border-b border-neutral-100' : ''}>
                      <td className="py-2">
                        <span className="inline-flex items-center gap-2">
                          <span className={`h-3 w-3 rounded-full ${riskStyles[level].dot}`} />
                          <span className={`font-medium ${riskStyles[level].text}`}>
                            {riskLabels[level][locale]}
                          </span>
                        </span>
                      </td>
                      <td className={`py-2 ${result.riskLevel === level && gender === 'male' ? `font-bold ${riskStyles[level].text}` : 'text-neutral-700'}`}>
                        {male}
                      </td>
                      <td className={`py-2 ${result.riskLevel === level && gender === 'female' ? `font-bold ${riskStyles[level].text}` : 'text-neutral-700'}`}>
                        {female}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WaistHipRatioCalculator;
