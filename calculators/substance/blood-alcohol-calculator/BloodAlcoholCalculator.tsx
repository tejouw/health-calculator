'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import {
  calculateBloodAlcohol,
  getDrinkInfo,
  getLegalStatusDescription,
  getImpairmentDescription,
  getAllDrinkTypes,
} from './bloodAlcoholLogic';
import { BloodAlcoholInput, DrinkType } from './bloodAlcoholTypes';
import { Wine, AlertTriangle, Clock, Droplet, Activity, Shield } from 'lucide-react';

interface BloodAlcoholCalculatorProps {
  locale: 'en' | 'tr';
}

const BloodAlcoholCalculator: React.FC<BloodAlcoholCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  // Form state
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [drinkingMethod, setDrinkingMethod] = useState<'standard' | 'custom'>('standard');
  const [numberOfDrinks, setNumberOfDrinks] = useState<string>('');
  const [drinkType, setDrinkType] = useState<DrinkType>('beer_regular');
  const [alcoholVolume, setAlcoholVolume] = useState<string>('');
  const [alcoholPercentage, setAlcoholPercentage] = useState<string>('');
  const [timePeriod, setTimePeriod] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateBloodAlcohol> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    try {
      // Validation
      if (!weight || parseFloat(weight) <= 0) {
        setError(locale === 'tr' ? 'Lütfen geçerli bir ağırlık girin' : 'Please enter a valid weight');
        return;
      }

      if (!age || parseFloat(age) < 18 || parseFloat(age) > 120) {
        setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (18-120)' : 'Please enter a valid age (18-120)');
        return;
      }

      if (!timePeriod || parseFloat(timePeriod) < 0) {
        setError(locale === 'tr' ? 'Lütfen geçerli bir süre girin' : 'Please enter a valid time period');
        return;
      }

      if (drinkingMethod === 'standard') {
        if (!numberOfDrinks || parseFloat(numberOfDrinks) <= 0) {
          setError(locale === 'tr' ? 'Lütfen içki sayısını girin' : 'Please enter number of drinks');
          return;
        }
      } else {
        if (!alcoholVolume || parseFloat(alcoholVolume) <= 0) {
          setError(locale === 'tr' ? 'Lütfen alkol hacmini girin' : 'Please enter alcohol volume');
          return;
        }
        if (!alcoholPercentage || parseFloat(alcoholPercentage) <= 0 || parseFloat(alcoholPercentage) > 100) {
          setError(locale === 'tr' ? 'Lütfen geçerli bir alkol yüzdesi girin (0-100)' : 'Please enter valid alcohol percentage (0-100)');
          return;
        }
      }

      const input: BloodAlcoholInput = {
        gender,
        weight: parseFloat(weight),
        age: parseFloat(age),
        unit,
        drinkingMethod,
        timePeriod: parseFloat(timePeriod),
        locale,
      };

      if (drinkingMethod === 'standard') {
        input.numberOfDrinks = parseFloat(numberOfDrinks);
        input.drinkType = drinkType;
      } else {
        input.alcoholVolume = parseFloat(alcoholVolume);
        input.alcoholPercentage = parseFloat(alcoholPercentage);
      }

      const bacResult = calculateBloodAlcohol(input);
      setResult(bacResult);
    } catch (err: any) {
      setError(err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error'));
    }
  };

  const handleReset = () => {
    setWeight('');
    setAge('');
    setNumberOfDrinks('');
    setAlcoholVolume('');
    setAlcoholPercentage('');
    setTimePeriod('');
    setResult(null);
    setError('');
  };

  // Get BAC color based on level
  const getBACColor = (bac: number): string => {
    if (bac <= 0.00) return 'bg-green-500';
    if (bac < 0.05) return 'bg-blue-500';
    if (bac < 0.08) return 'bg-yellow-500';
    if (bac < 0.15) return 'bg-orange-500';
    if (bac < 0.30) return 'bg-red-500';
    return 'bg-red-900';
  };

  const drinkTypes = getAllDrinkTypes();

  return (
    <div className="space-y-6">
      {/* CRITICAL DISCLAIMER AT TOP */}
      <Card className="border-2 border-red-500 bg-red-50">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 flex-shrink-0 text-red-600 mt-1" />
          <div className="space-y-2">
            <h3 className="font-bold text-red-900">
              {locale === 'tr' ? '⚠️ ÖNEMLİ UYARI' : '⚠️ CRITICAL WARNING'}
            </h3>
            <p className="text-sm text-red-900">
              {locale === 'tr'
                ? 'Bu hesaplayıcı YALNIZCA eğitim amaçlıdır. Hesaplanan KAK bir TAHMİNDİR ve gerçek değerden ±%20-30 farklı olabilir. Herhangi bir alkol tükettiyseniz ASLA araba kullanmayın. Tek güvenli seçim alternatif ulaşım sağlamaktır.'
                : 'This calculator is for EDUCATIONAL purposes ONLY. Calculated BAC is an ESTIMATE and may vary ±20-30% from actual BAC. NEVER drive if you have consumed any alcohol. The only safe choice is to arrange alternative transportation.'}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Wine className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kan Alkol Hesaplayıcı' : 'Blood Alcohol Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Kan alkol konsantrasyonunuzu tahmin edin (Widmark Formülü)'
                : 'Estimate your blood alcohol concentration (Widmark Formula)'}
            </p>
          </div>
        </div>

        {/* Gender Selection */}
        <div className="mb-4">
          <label className="mb-3 block text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? 'Cinsiyet' : 'Gender'}
          </label>
          <RadioGroup
            name="gender"
            value={gender}
            onChange={(value) => setGender(value as 'male' | 'female')}
            options={[
              {
                value: 'male',
                label: locale === 'tr' ? 'Erkek' : 'Male',
                description: locale === 'tr' ? 'Ortalama %68 vücut suyu' : 'Average 68% body water',
              },
              {
                value: 'female',
                label: locale === 'tr' ? 'Kadın' : 'Female',
                description: locale === 'tr' ? 'Ortalama %55 vücut suyu' : 'Average 55% body water',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Weight Input */}
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Vücut Ağırlığı' : 'Body Weight'}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === 'metric' ? '70' : '154'}
            min="1"
            step="0.1"
            required
          />
          <div>
            <label className="mb-2 block text-sm font-semibold text-neutral-900">
              {locale === 'tr' ? 'Birim' : 'Unit'}
            </label>
            <RadioGroup
              name="unit"
              value={unit}
              onChange={(value) => setUnit(value as 'metric' | 'imperial')}
              options={[
                { value: 'metric', label: 'kg' },
                { value: 'imperial', label: 'lbs' },
              ]}
              orientation="horizontal"
            />
          </div>
        </div>

        {/* Age Input */}
        <div className="mb-4">
          <Input
            label={locale === 'tr' ? 'Yaş' : 'Age'}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            min="18"
            max="120"
            step="1"
            required
            helperText={locale === 'tr' ? '18 yaş ve üzeri' : 'Must be 18 or older'}
          />
        </div>

        {/* Drinking Method Selection */}
        <div className="mb-4">
          <label className="mb-3 block text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? 'Hesaplama Yöntemi' : 'Calculation Method'}
          </label>
          <RadioGroup
            name="drinkingMethod"
            value={drinkingMethod}
            onChange={(value) => setDrinkingMethod(value as 'standard' | 'custom')}
            options={[
              {
                value: 'standard',
                label: locale === 'tr' ? 'Standart İçecekler' : 'Standard Drinks',
                description: locale === 'tr' ? 'İçecek türü ve sayısı seçin' : 'Select drink type and quantity',
              },
              {
                value: 'custom',
                label: locale === 'tr' ? 'Özel Hesaplama' : 'Custom Calculation',
                description: locale === 'tr' ? 'Alkol hacmi ve yüzdesini girin' : 'Enter alcohol volume and percentage',
              },
            ]}
            orientation="vertical"
          />
        </div>

        {/* Standard Drinks Method */}
        {drinkingMethod === 'standard' && (
          <div className="space-y-4">
            <Select
              label={locale === 'tr' ? 'İçecek Türü' : 'Drink Type'}
              value={drinkType}
              onChange={(e) => setDrinkType(e.target.value as DrinkType)}
              options={Object.entries(drinkTypes).map(([key, info]) => ({
                value: key,
                label: `${info.name[locale]} - ${info.volume}ml, ${info.abv}% ABV, ${info.alcoholGrams}g alkol`
              }))}
            />

            <Input
              label={locale === 'tr' ? 'İçki Sayısı' : 'Number of Drinks'}
              type="number"
              value={numberOfDrinks}
              onChange={(e) => setNumberOfDrinks(e.target.value)}
              placeholder="2"
              min="0.1"
              step="0.5"
              required
            />
          </div>
        )}

        {/* Custom Method */}
        {drinkingMethod === 'custom' && (
          <div className="space-y-4">
            <Input
              label={locale === 'tr' ? `Alkol Hacmi (${unit === 'metric' ? 'ml' : 'oz'})` : `Alcohol Volume (${unit === 'metric' ? 'ml' : 'oz'})`}
              type="number"
              value={alcoholVolume}
              onChange={(e) => setAlcoholVolume(e.target.value)}
              placeholder={unit === 'metric' ? '355' : '12'}
              min="1"
              step="1"
              required
            />

            <Input
              label={locale === 'tr' ? 'Alkol Yüzdesi (ABV %)' : 'Alcohol Percentage (ABV %)'}
              type="number"
              value={alcoholPercentage}
              onChange={(e) => setAlcoholPercentage(e.target.value)}
              placeholder="5.0"
              min="0.1"
              max="100"
              step="0.1"
              required
            />
          </div>
        )}

        {/* Time Period */}
        <div className="mt-4">
          <Input
            label={locale === 'tr' ? 'İçmeye Başladıktan Sonra Geçen Süre (saat)' : 'Time Since Drinking Started (hours)'}
            type="number"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            placeholder="2.0"
            min="0"
            step="0.25"
            required
            helperText={locale === 'tr' ? 'İlk içkiden bu yana kaç saat geçti?' : 'How many hours since your first drink?'}
          />
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-4 rounded-lg bg-red-50 p-4 text-sm text-red-800">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1">
            {locale === 'tr' ? 'Hesapla' : 'Calculate'}
          </Button>
          <Button onClick={handleReset} variant="outline">
            {locale === 'tr' ? 'Sıfırla' : 'Reset'}
          </Button>
        </div>
      </Card>

      {/* Results Display */}
      {result && (
        <div className="space-y-4">
          {/* Main BAC Result */}
          <Card className={`border-2 ${result.currentBAC >= 0.08 ? 'border-red-500 bg-red-50' : result.currentBAC >= 0.05 ? 'border-yellow-500 bg-yellow-50' : 'bg-white'}`}>
            <div className="text-center">
              <div className="mb-4">
                <div className={`mx-auto flex h-32 w-32 items-center justify-center rounded-full ${getBACColor(result.currentBAC)}`}>
                  <div className="text-2xl font-bold text-white">
                    {result.currentBAC.toFixed(3)}%
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-2xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Mevcut Kan Alkol Konsantrasyonu' : 'Current Blood Alcohol Concentration'}
              </h3>
              <p className="text-lg font-semibold text-neutral-700">
                {getLegalStatusDescription(result.legalStatus, locale)}
              </p>
              <p className="mt-2 text-neutral-600">
                {getImpairmentDescription(result.impairmentLevel, locale)}
              </p>
            </div>
          </Card>

          {/* Critical Warnings */}
          {result.warnings.length > 0 && (
            <Card className="border-2 border-red-500 bg-red-50">
              <h4 className="mb-3 flex items-center gap-2 font-bold text-red-900">
                <AlertTriangle className="h-5 w-5" />
                {locale === 'tr' ? 'ÖNEMLİ UYARILAR' : 'CRITICAL WARNINGS'}
              </h4>
              <ul className="space-y-2">
                {result.warnings.map((warning, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-red-900">
                    <span className="mt-0.5">•</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Detailed Results */}
          <Card>
            <h4 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Detaylı Sonuçlar' : 'Detailed Results'}
            </h4>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Activity className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-700">
                    {locale === 'tr' ? 'Tepe KAK' : 'Peak BAC'}
                  </div>
                  <div className="text-xl font-bold text-neutral-900">
                    {result.peakBAC.toFixed(3)}%
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-700">
                    {locale === 'tr' ? 'Ayılana Kadar Süre' : 'Time Until Sober'}
                  </div>
                  <div className="text-xl font-bold text-neutral-900">
                    {result.hoursUntilSober.toFixed(1)} {locale === 'tr' ? 'saat' : 'hours'}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                  <Droplet className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-700">
                    {locale === 'tr' ? 'Tüketilen Alkol' : 'Alcohol Consumed'}
                  </div>
                  <div className="text-xl font-bold text-neutral-900">
                    {result.alcoholConsumed.toFixed(1)}g
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-700">
                    {locale === 'tr' ? 'Vücut Su İçeriği' : 'Body Water Content'}
                  </div>
                  <div className="text-xl font-bold text-neutral-900">
                    {result.bodyWaterContent.toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-neutral-50 p-4">
              <p className="text-sm text-neutral-700">
                <strong>{locale === 'tr' ? 'Eliminasyon Hızı:' : 'Elimination Rate:'}</strong>{' '}
                {result.eliminationRate.toFixed(1)} g/saat (~0.015% KAK/saat)
              </p>
            </div>
          </Card>

          {/* Safety Information */}
          <Card className="border-l-4 border-blue-500 bg-blue-50">
            <h4 className="mb-3 font-bold text-blue-900">
              {locale === 'tr' ? 'Güvenlik Bilgileri' : 'Safety Information'}
            </h4>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Sadece ZAMAN alkolü ortadan kaldırır - kahve, duş veya egzersiz hızlandırmaz'
                    : 'Only TIME eliminates alcohol - coffee, showers, or exercise do NOT speed it up'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Bozulma yasal sınırın çok altında başlar - "iyi hissetmek" güvenli sürüş anlamına gelmez'
                    : 'Impairment begins well below legal limits - "feeling fine" does not mean safe to drive'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Hesaplanan KAK gerçek değerden ±%20-30 farklı olabilir'
                    : 'Calculated BAC may vary ±20-30% from actual BAC'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">•</span>
                <span>
                  {locale === 'tr'
                    ? 'Herhangi bir alkol tükettiyseniz, araba kullanmayın - alternatif ulaşım düzenleyin'
                    : 'If you consumed any alcohol, do not drive - arrange alternative transportation'}
                </span>
              </li>
            </ul>
          </Card>

          {/* Detailed Impairment Effects */}
          <Card>
            <h4 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Bu KAK Seviyesinde Beklenen Etkiler' : 'Expected Effects at This BAC Level'}
            </h4>
            {result.currentBAC >= 0.30 && (
              <div className="rounded-lg bg-red-50 p-4">
                <p className="mb-2 font-bold text-red-900">
                  {locale === 'tr' ? 'HAYATI TEHLİKE - ACİL DURUM' : 'LIFE THREATENING - EMERGENCY'}
                </p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• {locale === 'tr' ? 'Bilinç kaybı veya koma riski' : 'Risk of unconsciousness or coma'}</li>
                  <li>• {locale === 'tr' ? 'Solunum depresyonu (nefes almayı durdurmak)' : 'Respiratory depression (stopping breathing)'}</li>
                  <li>• {locale === 'tr' ? 'Alkol zehirlenmesi riski' : 'Risk of alcohol poisoning'}</li>
                  <li>• {locale === 'tr' ? 'Ölüm riski - HEMEN 112 ARAYIN' : 'Risk of death - CALL 911 IMMEDIATELY'}</li>
                </ul>
              </div>
            )}
            {result.currentBAC >= 0.15 && result.currentBAC < 0.30 && (
              <div className="rounded-lg bg-red-50 p-4">
                <p className="mb-2 font-bold text-red-900">
                  {locale === 'tr' ? 'AĞIR BOZULMA' : 'SEVERE IMPAIRMENT'}
                </p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• {locale === 'tr' ? 'Ciddi denge ve koordinasyon problemleri' : 'Serious balance and coordination problems'}</li>
                  <li>• {locale === 'tr' ? 'Peltek konuşma' : 'Slurred speech'}</li>
                  <li>• {locale === 'tr' ? 'Hafıza kaybı (blackout) olasılığı' : 'Likelihood of memory blackouts'}</li>
                  <li>• {locale === 'tr' ? 'Kusma riski' : 'Risk of vomiting'}</li>
                  <li>• {locale === 'tr' ? 'Yaralanma riski çok yüksek' : 'Very high risk of injury'}</li>
                </ul>
              </div>
            )}
            {result.currentBAC >= 0.08 && result.currentBAC < 0.15 && (
              <div className="rounded-lg bg-orange-50 p-4">
                <p className="mb-2 font-bold text-orange-900">
                  {locale === 'tr' ? 'ARABA KULLANMAK YASADIŞI - ÖNEML İ BOZULMA' : 'ILLEGAL TO DRIVE - SIGNIFICANT IMPAIRMENT'}
                </p>
                <ul className="space-y-1 text-sm text-orange-900">
                  <li>• {locale === 'tr' ? 'Tepki süresi %20-30 daha yavaş' : 'Reaction time 20-30% slower'}</li>
                  <li>• {locale === 'tr' ? 'Bölünmüş dikkat bozukluğu (iki şeyi aynı anda takip edememe)' : 'Divided attention deficits (cannot track two things at once)'}</li>
                  <li>• {locale === 'tr' ? 'Kötü yargılama ve risk değerlendirmesi' : 'Poor judgment and risk assessment'}</li>
                  <li>• {locale === 'tr' ? 'Kaza riski ayıktan 4-5 kat daha yüksek' : 'Crash risk 4-5x higher than sober'}</li>
                  <li>• {locale === 'tr' ? 'Koordinasyon ve denge bozukluğu' : 'Coordination and balance impairment'}</li>
                </ul>
              </div>
            )}
            {result.currentBAC >= 0.05 && result.currentBAC < 0.08 && (
              <div className="rounded-lg bg-yellow-50 p-4">
                <p className="mb-2 font-bold text-yellow-900">
                  {locale === 'tr' ? 'ORTA BOZULMA - ARABA KULLANMAK GÜVENLİ DEĞİL' : 'MODERATE IMPAIRMENT - UNSAFE TO DRIVE'}
                </p>
                <ul className="space-y-1 text-sm text-yellow-900">
                  <li>• {locale === 'tr' ? 'Ölçülebilir tepki süresi azalması' : 'Measurable reduction in reaction time'}</li>
                  <li>• {locale === 'tr' ? 'İzleme yeteneği bozulması (şerit takibi zorlaşır)' : 'Impaired tracking ability (staying in lane harder)'}</li>
                  <li>• {locale === 'tr' ? 'Risk algısı azalır' : 'Reduced perception of risk'}</li>
                  <li>• {locale === 'tr' ? 'Kaza riski ayıktan 2-3 kat daha yüksek' : 'Crash risk 2-3x higher than sober'}</li>
                  <li>• {locale === 'tr' ? 'Araba kullanmak yasal olabilir ama GÜVENLİ DEĞİL' : 'May be legal to drive but NOT SAFE'}</li>
                </ul>
              </div>
            )}
            {result.currentBAC > 0.00 && result.currentBAC < 0.05 && (
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="mb-2 font-bold text-blue-900">
                  {locale === 'tr' ? 'HAFİF BOZULMA - DİKKATLİ OLUN' : 'MILD IMPAIRMENT - BE CAUTIOUS'}
                </p>
                <ul className="space-y-1 text-sm text-blue-900">
                  <li>• {locale === 'tr' ? 'Hafif rahatlama ve inhib isyon kaybı' : 'Slight relaxation and loss of inhibition'}</li>
                  <li>• {locale === 'tr' ? 'Kompleks görevlerde küçük bozulmalar' : 'Minor impairments in complex tasks'}</li>
                  <li>• {locale === 'tr' ? 'Tepki süresinde hafif yavaşlama' : 'Slight slowing of reaction time'}</li>
                  <li>• {locale === 'tr' ? 'Kaza riski ayıktan %40 daha yüksek' : 'Crash risk 40% higher than sober'}</li>
                  <li>• {locale === 'tr' ? 'Araba kullanmak tavsiye edilmez' : 'Driving not recommended'}</li>
                </ul>
              </div>
            )}
            {result.currentBAC === 0 && (
              <div className="rounded-lg bg-green-50 p-4">
                <p className="mb-2 font-bold text-green-900">
                  {locale === 'tr' ? 'AYIK - BOZULMA YOK' : 'SOBER - NO IMPAIRMENT'}
                </p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• {locale === 'tr' ? 'Alkol tespit edilmedi' : 'No alcohol detected'}</li>
                  <li>• {locale === 'tr' ? 'Normal bilişsel ve fiziksel fonksiyon' : 'Normal cognitive and physical function'}</li>
                  <li>• {locale === 'tr' ? 'Araba kullanmak güvenli' : 'Safe to drive'}</li>
                </ul>
              </div>
            )}

            {/* Estimated sober time */}
            {result.currentBAC > 0 && (
              <div className="mt-4 rounded-lg bg-neutral-50 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>{locale === 'tr' ? 'Tahmini Ayılma Zamanı:' : 'Estimated Sober Time:'}</strong>{' '}
                  {new Date(Date.now() + result.hoursUntilSober * 60 * 60 * 1000).toLocaleTimeString(locale, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: locale === 'en'
                  })}
                  {' '}
                  ({new Date(Date.now() + result.hoursUntilSober * 60 * 60 * 1000).toLocaleDateString(locale, {
                    month: 'short',
                    day: 'numeric'
                  })})
                </p>
                <p className="mt-2 text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Bu tahmindir ve kişiden kişiye değişebilir. Güvende olmak için ekstra zaman bırakın.'
                    : 'This is an estimate and can vary by individual. Allow extra time to be safe.'}
                </p>
              </div>
            )}

            {/* Standard drinks equivalent */}
            <div className="mt-4 rounded-lg bg-neutral-50 p-4">
              <p className="text-sm text-neutral-700">
                <strong>{locale === 'tr' ? 'Standart İçecek Eşdeğeri:' : 'Standard Drinks Equivalent:'}</strong>{' '}
                {(result.alcoholConsumed / 14).toFixed(1)} {locale === 'tr' ? 'standart içecek' : 'standard drinks'}
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                {locale === 'tr'
                  ? '1 standart içecek = 14g saf alkol (330ml bira %5, 150ml şarap %12, 44ml votka %40)'
                  : '1 standard drink = 14g pure alcohol (12oz beer 5%, 5oz wine 12%, 1.5oz spirits 40%)'}
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BloodAlcoholCalculator;
