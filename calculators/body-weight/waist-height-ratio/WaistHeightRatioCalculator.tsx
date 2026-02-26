'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card } from '@/components/ui';
import { calculateWaistHeightRatio, getCategoryInfo, whtrCategories } from './waistHeightRatioLogic';
import type { WaistHeightRatioResult } from './waistHeightRatioTypes';
import {
  Scan,
  Info,
  Heart,
  Activity,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle,
  XCircle,
  ArrowDown,
  Flame,
  Droplets,
  Moon,
  Dumbbell,
  Apple,
  Brain,
  Scale,
  Ruler,
} from 'lucide-react';

const riskStyles = {
  low: { card: 'border-green-200 bg-green-50', text: 'text-green-700', badge: 'bg-green-100 text-green-800', bar: 'bg-green-500' },
  moderate: { card: 'border-amber-200 bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800', bar: 'bg-amber-500' },
  high: { card: 'border-red-200 bg-red-50', text: 'text-red-700', badge: 'bg-red-100 text-red-800', bar: 'bg-red-500' },
  'very-high': { card: 'border-red-300 bg-red-100', text: 'text-red-800', badge: 'bg-red-200 text-red-900', bar: 'bg-red-600' },
};

const riskLabels = {
  low: { en: 'Low Risk', tr: 'Düşük Risk' },
  moderate: { en: 'Moderate Risk', tr: 'Orta Risk' },
  high: { en: 'High Risk', tr: 'Yüksek Risk' },
  'very-high': { en: 'Very High Risk', tr: 'Çok Yüksek Risk' },
};

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  'take-care': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  slim: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200' },
  healthy: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  overweight: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'very-overweight': { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  obese: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
};

const categoryLabels: Record<string, { en: string; tr: string }> = {
  'take-care': { en: 'Underweight', tr: 'Düşük Kilolu' },
  slim: { en: 'Slim', tr: 'İnce' },
  healthy: { en: 'Healthy', tr: 'Sağlıklı' },
  overweight: { en: 'Overweight', tr: 'Fazla Kilolu' },
  'very-overweight': { en: 'Very Overweight', tr: 'Çok Fazla Kilolu' },
  obese: { en: 'Morbidly Obese', tr: 'Morbid Obez' },
};

interface WaistHeightRatioCalculatorProps {
  locale: 'en' | 'tr';
}

const WaistHeightRatioCalculator: React.FC<WaistHeightRatioCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');
  const tForm = useTranslations('form');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [waist, setWaist] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState('');
  const [result, setResult] = useState<WaistHeightRatioResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    const waistNum = parseFloat(waist);
    const heightNum = parseFloat(height);
    const ageNum = age ? parseInt(age) : undefined;

    if (isNaN(waistNum) || isNaN(heightNum) || waistNum <= 0 || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli ölçüm değerleri girin' : 'Please enter valid measurement values');
      return;
    }

    if (ageNum && (ageNum < 5 || ageNum > 120)) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (5-120)' : 'Please enter a valid age (5-120)');
      return;
    }

    setResult(calculateWaistHeightRatio({ waist: waistNum, height: heightNum, unit, gender, age: ageNum }));
  };

  const handleReset = () => {
    setWaist('');
    setHeight('');
    setAge('');
    setResult(null);
    setError('');
  };

  // Position marker on gradient bar (maps ratio 0.3-0.7 to 0-100%)
  const getMarkerPosition = () => {
    if (!result) return 50;
    return Math.max(2, Math.min(98, ((result.ratio - 0.3) / 0.4) * 100));
  };

  // The 0.5 boundary line position
  const getBoundaryPosition = () => {
    return ((0.5 - 0.3) / 0.4) * 100;
  };

  const catInfo = result ? getCategoryInfo(result.category) : null;
  const catStyle = result ? categoryStyles[result.category] : null;

  return (
    <div className="space-y-6">
      {/* Calculator Form */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <Scan className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Bel-Boy Oranı Hesaplama' : 'Waist-to-Height Ratio Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'VKİ\'den daha iyi bir sağlık göstergesi' : 'A better health predictor than BMI'}
            </p>
          </div>
        </div>

        {/* Why WHtR Info Box */}
        <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start gap-2">
            <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-800">
                {locale === 'tr' ? 'Neden Bel-Boy Oranı?' : 'Why Waist-to-Height Ratio?'}
              </p>
              <p className="mt-1 text-sm text-emerald-700">
                {locale === 'tr'
                  ? '300.000+ kişilik araştırma: BBO, kardiyovasküler riski tahmin etmede VKİ\'den daha iyidir. Basit kural: Beliniz boyunuzun yarısından az olmalı.'
                  : 'Research on 300,000+ adults: WHtR is better than BMI at predicting cardiovascular risk. Simple rule: Keep your waist to less than half your height.'}
              </p>
            </div>
          </div>
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
              setHeight('');
              setResult(null);
            }}
            options={[
              { value: 'metric', label: tForm('metric'), description: tUnits('cm') },
              { value: 'imperial', label: tForm('imperial'), description: tUnits('inch') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Gender (Optional - for contextual info) */}
        <div className="mb-6">
          <RadioGroup
            label={`${tForm('gender')} (${locale === 'tr' ? 'İsteğe Bağlı' : 'Optional'})`}
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              { value: 'male', label: tForm('male') },
              { value: 'female', label: tForm('female') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Measurements */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Boy' : 'Height'}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === 'metric' ? '170' : '67'}
            rightIcon={<span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Bel Çevresi' : 'Waist Circumference'}
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder={unit === 'metric' ? '80' : '31'}
            rightIcon={<span className="text-sm">{unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>}
            required
            helperText={locale === 'tr' ? 'Göbek deliğinizin hizasında, en dar noktada ölçün' : 'Measure at your navel level, at the narrowest point'}
          />
        </div>

        {/* Age (Optional) */}
        <div className="mt-6">
          <Input
            label={locale === 'tr' ? 'Yaş (İsteğe Bağlı)' : 'Age (Optional)'}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="30"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yaş' : 'years'}</span>}
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* POST-CALCULATION CONTENT - Rich, engaging, visual         */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {result && catInfo && catStyle && (
        <div className="space-y-4">

          {/* ── Main Result Card ── */}
          <Card className={`animate-slide-up border-2 ${catStyle.border} ${catStyle.bg}`}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Sonuç' : 'Result'}
              </h3>
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${catStyle.bg} ${catStyle.text} border ${catStyle.border}`}>
                {categoryLabels[result.category][locale]}
              </span>
            </div>

            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {/* Ratio Value */}
              <div className="text-center">
                <div className={`text-6xl font-bold ${catStyle.text}`}>
                  {result.ratio.toFixed(2)}
                </div>
                <p className="mt-1 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Bel-Boy Oranı' : 'Waist-to-Height Ratio'}
                </p>
                {/* Boundary message */}
                <div className="mt-2">
                  {result.boundaryMessage === 'under' && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      {locale === 'tr' ? 'Sınırın altında' : 'Below the 0.5 boundary'}
                    </span>
                  )}
                  {result.boundaryMessage === 'at' && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-600">
                      <AlertCircle className="h-4 w-4" />
                      {locale === 'tr' ? 'Sınır değerinde' : 'At the 0.5 boundary'}
                    </span>
                  )}
                  {result.boundaryMessage === 'over' && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-red-600">
                      <XCircle className="h-4 w-4" />
                      {locale === 'tr' ? 'Sınırın üzerinde' : 'Above the 0.5 boundary'}
                    </span>
                  )}
                </div>
              </div>

              {/* Health Score Circle */}
              <div className="text-center">
                <div className="relative inline-flex h-28 w-28 items-center justify-center">
                  <svg className="h-28 w-28 -rotate-90 transform">
                    <circle cx="56" cy="56" r="46" stroke="#e5e7eb" strokeWidth="10" fill="none" />
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke={result.healthScore >= 70 ? '#10b981' : result.healthScore >= 40 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={`${(result.healthScore / 100) * 289} 289`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-3xl font-bold text-neutral-900">
                    {result.healthScore}
                  </div>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Sağlık Skoru' : 'Health Score'}
                </p>
              </div>
            </div>

            {/* Visual Scale with 0.5 boundary line */}
            <div className="mt-6 pt-2">
              <div className="relative">
                {/* Gradient bar */}
                <div className="h-4 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 via-green-400 via-amber-400 via-red-400 to-red-700" />
                {/* 0.5 boundary marker */}
                <div
                  className="absolute top-0 h-4 w-0.5 bg-neutral-800"
                  style={{ left: `${getBoundaryPosition()}%` }}
                />
                <div
                  className="absolute -top-5 -translate-x-1/2 text-xs font-bold text-neutral-700"
                  style={{ left: `${getBoundaryPosition()}%` }}
                >
                  0.50
                </div>
                {/* Your position marker */}
                <div
                  className="absolute -bottom-1 -translate-x-1/2"
                  style={{ left: `${getMarkerPosition()}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full border-3 border-neutral-800 bg-white shadow-lg" />
                    <span className="mt-1 text-xs font-bold text-neutral-800">{result.ratio.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between text-xs text-neutral-500">
                <span>{locale === 'tr' ? 'İnce' : 'Slim'}</span>
                <span>{locale === 'tr' ? 'Sağlıklı' : 'Healthy'}</span>
                <span>{locale === 'tr' ? 'Fazla' : 'Overweight'}</span>
                <span>{locale === 'tr' ? 'Obez' : 'Obese'}</span>
              </div>
            </div>

            {/* Category description */}
            <p className={`mt-4 text-sm ${catStyle.text}`}>
              {catInfo.description[locale]}
            </p>
          </Card>

          {/* ── BMI vs WHtR Comparison Card ── */}
          <Card className="animate-slide-up bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'VKİ vs BBO: Neden BBO Daha İyi?' : 'BMI vs WHtR: Why WHtR Is Better'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {/* BMI Limitations */}
              <div className="rounded-lg bg-white/80 p-4 border border-red-100">
                <h4 className="font-semibold text-red-700 flex items-center gap-1.5 mb-2">
                  <XCircle className="h-4 w-4" />
                  {locale === 'tr' ? 'VKİ Eksiklikleri' : 'BMI Limitations'}
                </h4>
                <ul className="space-y-1.5 text-sm text-neutral-700">
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {locale === 'tr' ? 'Kas ile yağı ayırt edemez' : 'Cannot distinguish muscle from fat'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {locale === 'tr' ? 'Yağ dağıtımını göstermez' : 'Shows nothing about fat distribution'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {locale === 'tr' ? 'Sporcuları yanlış sınıflandırır' : 'Misclassifies athletes as overweight'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                    {locale === 'tr' ? 'TOFI bireylerini kaçırabilir' : 'Can miss TOFI individuals'}
                  </li>
                </ul>
              </div>
              {/* WHtR Advantages */}
              <div className="rounded-lg bg-white/80 p-4 border border-green-100">
                <h4 className="font-semibold text-green-700 flex items-center gap-1.5 mb-2">
                  <CheckCircle className="h-4 w-4" />
                  {locale === 'tr' ? 'BBO Avantajları' : 'WHtR Advantages'}
                </h4>
                <ul className="space-y-1.5 text-sm text-neutral-700">
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    {locale === 'tr' ? 'Merkezi yağı doğrudan ölçer' : 'Directly measures central fat'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    {locale === 'tr' ? 'Cinsiyetten bağımsız (0.5 sınırı)' : 'Gender-neutral (0.5 boundary)'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    {locale === 'tr' ? 'Etnik gruplar arası tutarlı' : 'Consistent across ethnicities'}
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                    {locale === 'tr' ? 'Daha iyi kardiyovasküler risk tahmini' : 'Better cardiovascular risk prediction'}
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* ── Detailed Risk Assessment ── */}
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
                      className={`h-2 rounded-full transition-all duration-700 ${riskStyles[result.cardiovascularRisk].bar}`}
                      style={{ width: `${result.cardiovascularRisk === 'very-high' ? 100 : result.cardiovascularRisk === 'high' ? 75 : result.cardiovascularRisk === 'moderate' ? 50 : 25}%` }}
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
                      {locale === 'tr' ? 'Tip 2 Diyabet Riski' : 'Type 2 Diabetes Risk'}
                    </h4>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskStyles[result.diabetesRisk].badge}`}>
                      {riskLabels[result.diabetesRisk][locale]}
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-neutral-200">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ${riskStyles[result.diabetesRisk].bar}`}
                      style={{ width: `${result.diabetesRisk === 'very-high' ? 100 : result.diabetesRisk === 'high' ? 75 : result.diabetesRisk === 'moderate' ? 50 : 25}%` }}
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
                      className={`h-2 rounded-full transition-all duration-700 ${riskStyles[result.metabolicSyndromeRisk].bar}`}
                      style={{ width: `${result.metabolicSyndromeRisk === 'high' ? 100 : result.metabolicSyndromeRisk === 'moderate' ? 60 : 30}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* ── Target & Action Card ── */}
          <Card className="animate-slide-up bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-200">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-teal-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Hedef ve Aksiyon Planı' : 'Target & Action Plan'}
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {/* Current */}
              <div className="rounded-lg bg-white p-4 text-center">
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                  {locale === 'tr' ? 'Mevcut Bel' : 'Current Waist'}
                </p>
                <p className="mt-1 text-2xl font-bold text-neutral-800">
                  {waist} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                </p>
                <p className="mt-1 text-xs text-neutral-500">WHtR: {result.ratio.toFixed(2)}</p>
              </div>

              {/* Ideal */}
              <div className="rounded-lg bg-white p-4 text-center border-2 border-green-300">
                <p className="text-xs font-medium text-green-600 uppercase tracking-wide">
                  {locale === 'tr' ? 'İdeal Bel' : 'Ideal Waist'}
                </p>
                <p className="mt-1 text-2xl font-bold text-green-600">
                  {result.idealWaist} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                </p>
                <p className="mt-1 text-xs text-green-600">WHtR: 0.46</p>
              </div>

              {/* Difference */}
              <div className={`rounded-lg bg-white p-4 text-center ${result.waistChange > 0 ? 'border-l-4 border-amber-500' : result.waistChange < -2 ? 'border-l-4 border-blue-500' : 'border-l-4 border-green-500'}`}>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">
                  {result.waistChange > 0
                    ? (locale === 'tr' ? 'Azaltılması Gereken' : 'To Reduce')
                    : result.waistChange < -2
                      ? (locale === 'tr' ? 'Kazanılabilir' : 'Could Gain')
                      : (locale === 'tr' ? 'Hedefte' : 'On Target')}
                </p>
                <p className={`mt-1 text-2xl font-bold ${result.waistChange > 0 ? 'text-amber-600' : result.waistChange < -2 ? 'text-blue-600' : 'text-green-600'}`}>
                  {result.waistChange > 0 ? (
                    <span className="flex items-center justify-center gap-1">
                      <ArrowDown className="h-5 w-5" />
                      {result.waistChange} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}
                    </span>
                  ) : result.waistChange < -2 ? (
                    <span>{Math.abs(result.waistChange)} {unit === 'metric' ? tUnits('cm') : tUnits('inch')}</span>
                  ) : (
                    <CheckCircle className="h-8 w-8 mx-auto" />
                  )}
                </p>
              </div>
            </div>

            {/* The Golden Rule */}
            <div className="mt-4 rounded-lg bg-white/80 p-4 border border-amber-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-amber-600" />
                <p className="font-semibold text-neutral-800">
                  {locale === 'tr' ? 'Altın Kural' : 'The Golden Rule'}
                </p>
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                {locale === 'tr'
                  ? `Boyunuz ${height} ${unit === 'metric' ? 'cm' : 'inç'} olduğundan, bel çevreniz ${Math.round(parseFloat(height) * 0.5)} ${unit === 'metric' ? 'cm' : 'inç'}\'den az olmalıdır. Şimdi ${result.boundaryMessage === 'under' ? 'bu sınırın altındasınız' : result.boundaryMessage === 'at' ? 'tam sınır değerinde siniz' : 'bu sınırın üzerindesiniz'}.`
                  : `Since your height is ${height} ${unit === 'metric' ? 'cm' : 'inches'}, your waist should be under ${Math.round(parseFloat(height) * 0.5)} ${unit === 'metric' ? 'cm' : 'inches'}. You are currently ${result.boundaryMessage === 'under' ? 'below this boundary' : result.boundaryMessage === 'at' ? 'at the boundary' : 'above this boundary'}.`}
              </p>
            </div>
          </Card>

          {/* ── Lifestyle Recommendations (8 actionable cards) ── */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Yaşam Tarzı Önerileri' : 'Lifestyle Recommendations'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {/* Cardio */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <Flame className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Aerobik Egzersiz' : 'Aerobic Exercise'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Haftada 150+ dk. yürüyüş, koşma veya yüzme. Visseral yağ azaltmada en etkili.'
                      : '150+ min/week of walking, running, or swimming. Most effective for visceral fat reduction.'}
                  </p>
                </div>
              </div>

              {/* Strength */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <Dumbbell className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Güç Antrenmanı' : 'Strength Training'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Haftada 2-3 seans direnç egzersizi metabolizmayı hızlandırır ve karın yağını azaltır.'
                      : '2-3 resistance sessions per week boost metabolism and reduce abdominal fat.'}
                  </p>
                </div>
              </div>

              {/* Fiber Diet */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                  <Apple className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Lifli Beslenme' : 'High-Fiber Diet'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Günlük 25-35g lif: sebze, meyve, tam tahıllar. Karın yağı ile ters korelasyon.'
                      : 'Daily 25-35g fiber: vegetables, fruits, whole grains. Inversely correlated with belly fat.'}
                  </p>
                </div>
              </div>

              {/* Hydration */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                  <Droplets className="h-5 w-5 text-cyan-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Yeterli Su İçme' : 'Adequate Hydration'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Günde 2-3 litre su. Yemeklerden önce su içmek kalori alımını %25 azaltabilir.'
                      : '2-3 liters daily. Drinking water before meals can reduce calorie intake by ~25%.'}
                  </p>
                </div>
              </div>

              {/* Sleep */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100">
                  <Moon className="h-5 w-5 text-indigo-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Kaliteli Uyku' : 'Quality Sleep'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? '7-9 saat uyku. 6 saatten az uyku visseral yağ birikimini artırır.'
                      : '7-9 hours sleep. Less than 6 hours increases visceral fat accumulation.'}
                  </p>
                </div>
              </div>

              {/* Stress */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                  <Brain className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Stres Yönetimi' : 'Stress Management'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Kronik stres kortizol salar ve karın yağı birikimini teşvik eder. Meditasyon ve hobiler yardımcı olur.'
                      : 'Chronic stress raises cortisol, promoting belly fat. Meditation and hobbies help.'}
                  </p>
                </div>
              </div>

              {/* Alcohol */}
              <div className="flex items-start gap-3 rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
                  <TrendingDown className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Alkolu Azaltın' : 'Reduce Alcohol'}
                  </h4>
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Özellikle bira ve sert içkiler karın yağı birikimi ile doğrudan ilişkilidir.'
                      : 'Beer and spirits are directly linked to abdominal fat accumulation.'}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-800">
                    {locale === 'tr' ? 'Sonuç Zaman Çizelgesi' : 'Result Timeline'}
                  </h4>
                  <p className="text-xs text-emerald-700">
                    {locale === 'tr'
                      ? 'Tutarlı yaşam tarzı değişiklikleri ile 8-12 haftada ölçülebilir bel çevresi azalması beklenir.'
                      : 'With consistent lifestyle changes, measurable waist reduction is expected in 8-12 weeks.'}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* ── Ashwell Shape Chart (Categories Table) ── */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Ruler className="h-5 w-5 text-neutral-700" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Ashwell Şekil Tablosu - BBO Kategorileri' : 'Ashwell Shape Chart - WHtR Categories'}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Aralık' : 'Range'}
                    </th>
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Kategori' : 'Category'}
                    </th>
                    <th className="py-2 text-left font-semibold text-neutral-700">
                      {locale === 'tr' ? 'Sağlık Durumu' : 'Health Status'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {whtrCategories.map((cat, i) => {
                    const isActive = result.category === cat.name;
                    return (
                      <tr
                        key={cat.name}
                        className={`${i < whtrCategories.length - 1 ? 'border-b border-neutral-100' : ''} ${isActive ? 'bg-neutral-100 font-semibold' : ''}`}
                      >
                        <td className="py-2.5">
                          <span className="inline-flex items-center gap-2">
                            <span
                              className="h-3 w-3 rounded-full"
                              style={{ backgroundColor: cat.color }}
                            />
                            {cat.range.min.toFixed(2)} - {cat.range.max < 1 ? cat.range.max.toFixed(2) : '1.00+'}
                          </span>
                        </td>
                        <td className="py-2.5" style={{ color: isActive ? cat.color : undefined }}>
                          {cat.label[locale]}
                          {isActive && (
                            <span className="ml-2 text-xs">
                              {locale === 'tr' ? '(Siz burada siniz)' : '(You are here)'}
                            </span>
                          )}
                        </td>
                        <td className="py-2.5 text-neutral-600">
                          {cat.description[locale]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>

          {/* ── Quick Fact Cards ── */}
          <div className="grid gap-3 sm:grid-cols-3 animate-slide-up">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
              <p className="text-3xl font-bold text-blue-700">0.5</p>
              <p className="mt-1 text-sm font-medium text-blue-600">
                {locale === 'tr' ? 'Evrensel Sınır Değeri' : 'Universal Boundary'}
              </p>
              <p className="mt-1 text-xs text-blue-500">
                {locale === 'tr' ? 'Erkek ve kadın için aynı' : 'Same for men and women'}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
              <p className="text-3xl font-bold text-emerald-700">300K+</p>
              <p className="mt-1 text-sm font-medium text-emerald-600">
                {locale === 'tr' ? 'Araştırma Katılımcısı' : 'Research Participants'}
              </p>
              <p className="mt-1 text-xs text-emerald-500">
                {locale === 'tr' ? 'Meta-analiz verisi' : 'Meta-analysis data'}
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
              <p className="text-3xl font-bold text-amber-700">8-12</p>
              <p className="mt-1 text-sm font-medium text-amber-600">
                {locale === 'tr' ? 'Hafta (Sonuç Süresi)' : 'Weeks (Result Time)'}
              </p>
              <p className="mt-1 text-xs text-amber-500">
                {locale === 'tr' ? 'Yaşam tarzı ile ölçülebilir azalma' : 'Measurable reduction with lifestyle'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaistHeightRatioCalculator;
