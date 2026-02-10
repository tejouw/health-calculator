'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateWaterIntake, getHydrationStatus } from './waterIntakeLogic';
import { WaterIntakeInput, ActivityLevel, ClimateType, SpecialCondition } from './waterIntakeTypes';
import { Droplet, Activity, Sun, Heart, Clock, AlertTriangle, CheckCircle2, Sparkles, BookOpen, HelpCircle, FileText, TrendingUp, Zap } from 'lucide-react';
import HydrationGuide from './components/HydrationGuide';
import { waterIntakeContent } from './waterIntakeContent';

interface WaterIntakeCalculatorProps {
  locale: 'en' | 'tr';
}

const WaterIntakeCalculator: React.FC<WaterIntakeCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [climate, setClimate] = useState<ClimateType>('temperate');
  const [specialCondition, setSpecialCondition] = useState<SpecialCondition>('none');
  const [result, setResult] = useState<ReturnType<typeof calculateWaterIntake> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);

    if (!ageNum || !weightNum || ageNum <= 0 || weightNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen tüm alanları doğru şekilde doldurun'
          : 'Please fill in all fields correctly'
      );
      return;
    }

    if (ageNum < 18 || ageNum > 100) {
      setError(
        locale === 'tr'
          ? 'Yaş 18-100 arasında olmalıdır'
          : 'Age must be between 18 and 100'
      );
      return;
    }

    const input: WaterIntakeInput = {
      age: ageNum,
      gender,
      weight: weightNum,
      unit,
      activityLevel,
      climate,
      specialCondition,
    };

    try {
      const waterResult = calculateWaterIntake(input);
      setResult(waterResult);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen değerlerinizi kontrol edin.'
          : 'Calculation error. Please check your values.'
      );
    }
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setGender('male');
    setUnit('metric');
    setActivityLevel('moderate');
    setClimate('temperate');
    setSpecialCondition('none');
    setResult(null);
    setError('');
  };

  const activityOptions: Array<{
    value: ActivityLevel;
    label: string;
    description: string;
  }> = [
    {
      value: 'sedentary',
      label: locale === 'tr' ? 'Hareketsiz' : 'Sedentary',
      description: locale === 'tr' ? 'Masa başı iş, az aktivite' : 'Desk job, little activity',
    },
    {
      value: 'light',
      label: locale === 'tr' ? 'Hafif Aktif' : 'Light',
      description: locale === 'tr' ? 'Haftada 1-3 gün' : 'Exercise 1-3 days/week',
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Orta Aktif' : 'Moderate',
      description: locale === 'tr' ? 'Haftada 3-5 gün' : 'Exercise 3-5 days/week',
    },
    {
      value: 'active',
      label: locale === 'tr' ? 'Aktif' : 'Active',
      description: locale === 'tr' ? 'Haftada 6-7 gün' : 'Exercise 6-7 days/week',
    },
    {
      value: 'veryActive',
      label: locale === 'tr' ? 'Çok Aktif' : 'Very Active',
      description: locale === 'tr' ? 'Yoğun antrenman' : 'Intense training',
    },
  ];

  const climateOptions: Array<{
    value: ClimateType;
    label: string;
    description: string;
  }> = [
    {
      value: 'cold',
      label: locale === 'tr' ? 'Soğuk' : 'Cold',
      description: locale === 'tr' ? '< 15°C / 59°F' : '< 15°C / 59°F',
    },
    {
      value: 'temperate',
      label: locale === 'tr' ? 'Ilıman' : 'Temperate',
      description: locale === 'tr' ? '15-25°C / 59-77°F' : '15-25°C / 59-77°F',
    },
    {
      value: 'warm',
      label: locale === 'tr' ? 'Sıcak' : 'Warm',
      description: locale === 'tr' ? '25-30°C / 77-86°F' : '25-30°C / 77-86°F',
    },
    {
      value: 'hot',
      label: locale === 'tr' ? 'Çok Sıcak' : 'Hot',
      description: locale === 'tr' ? '> 30°C / 86°F' : '> 30°C / 86°F',
    },
  ];

  const specialConditionOptions: Array<{
    value: SpecialCondition;
    label: string;
  }> = [
    {
      value: 'none',
      label: locale === 'tr' ? 'Yok' : 'None',
    },
    {
      value: 'pregnancy',
      label: locale === 'tr' ? 'Hamilelik' : 'Pregnancy',
    },
    {
      value: 'breastfeeding',
      label: locale === 'tr' ? 'Emzirme' : 'Breastfeeding',
    },
    {
      value: 'illness',
      label: locale === 'tr' ? 'Hastalık/Ateş' : 'Illness/Fever',
    },
    {
      value: 'athlete',
      label: locale === 'tr' ? 'Profesyonel Sporcu' : 'Professional Athlete',
    },
  ];

  const getHydrationStatusColor = (status: string) => {
    switch (status) {
      case 'low':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'adequate':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'optimal':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'high':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-neutral-600 bg-neutral-50 border-neutral-200';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Droplet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Su İhtiyacı Hesaplama' : 'Water Intake Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Günlük Su İhtiyacınızı Hesaplayın'
                : 'Calculate Your Daily Water Needs'}
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
              { value: 'male', label: t('male') },
              { value: 'female', label: t('female') },
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
                description: tUnits('kg'),
              },
              {
                value: 'imperial',
                label: t('imperial'),
                description: tUnits('lbs'),
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="25"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'yıl' : 'years'}</span>}
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

        {/* Activity Level */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
            </div>
          </label>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActivityLevel(option.value)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  activityLevel === option.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
                <div className="mt-1 text-xs text-neutral-600">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Climate */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              {locale === 'tr' ? 'İklim/Sıcaklık' : 'Climate/Temperature'}
            </div>
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {climateOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setClimate(option.value)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  climate === option.value
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
                <div className="mt-1 text-xs text-neutral-600">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Special Condition */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              {locale === 'tr' ? 'Özel Durum' : 'Special Condition'}
            </div>
          </label>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {specialConditionOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSpecialCondition(option.value)}
                className={`rounded-lg border-2 p-3 text-center transition-all ${
                  specialCondition === option.value
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
              </button>
            ))}
          </div>
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
          {/* Main Water Intake Display */}
          <Card className="animate-slide-up border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Günlük Su İhtiyacınız' : 'Your Daily Water Needs'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? 'Tüm kaynaklardan toplam sıvı alımı'
                    : 'Total fluid intake from all sources'}
                </p>
              </div>
              <Badge variant="primary">
                {locale === 'tr' ? 'Kişiselleştirilmiş' : 'Personalized'}
              </Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Litre' : 'Liters'}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {result.dailyIntakeLiters}
                  <span className="ml-1 text-base font-normal text-neutral-600">L</span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Mililitre' : 'Milliliters'}
                </div>
                <div className="text-3xl font-bold text-cyan-600">
                  {result.dailyIntake}
                  <span className="ml-1 text-base font-normal text-neutral-600">ml</span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Ons' : 'Ounces'}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {result.dailyIntakeOz}
                  <span className="ml-1 text-base font-normal text-neutral-600">oz</span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Bardak (8 oz)' : 'Cups (8 oz)'}
                </div>
                <div className="text-3xl font-bold text-cyan-600">
                  {result.dailyIntakeCups}
                  <span className="ml-1 text-base font-normal text-neutral-600">
                    {locale === 'tr' ? 'bardak' : 'cups'}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Breakdown */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Hesaplama Detayları' : 'Calculation Breakdown'}
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <span className="text-sm text-neutral-700">
                  {locale === 'tr' ? 'Temel İhtiyaç' : 'Baseline Needs'}
                </span>
                <span className="font-semibold text-neutral-900">{result.baselineIntake} ml</span>
              </div>

              {result.activityAdjustment > 0 && (
                <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3">
                  <span className="text-sm text-blue-700">
                    {locale === 'tr' ? 'Aktivite Eklemesi' : 'Activity Adjustment'}
                  </span>
                  <span className="font-semibold text-blue-900">
                    +{result.activityAdjustment} ml
                  </span>
                </div>
              )}

              {result.climateAdjustment > 0 && (
                <div className="flex items-center justify-between rounded-lg bg-orange-50 p-3">
                  <span className="text-sm text-orange-700">
                    {locale === 'tr' ? 'İklim Eklemesi' : 'Climate Adjustment'}
                  </span>
                  <span className="font-semibold text-orange-900">
                    +{result.climateAdjustment} ml
                  </span>
                </div>
              )}

              {result.specialConditionAdjustment > 0 && (
                <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                  <span className="text-sm text-purple-700">
                    {locale === 'tr' ? 'Özel Durum Eklemesi' : 'Special Condition Adjustment'}
                  </span>
                  <span className="font-semibold text-purple-900">
                    +{result.specialConditionAdjustment} ml
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 p-4 border-2 border-blue-300">
                <span className="font-semibold text-blue-900">
                  {locale === 'tr' ? 'Toplam Günlük İhtiyaç' : 'Total Daily Intake'}
                </span>
                <span className="text-xl font-bold text-blue-900">{result.dailyIntake} ml</span>
              </div>
            </div>
          </Card>

          {/* Daily Distribution */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Günlük Dağılım Önerisi' : 'Daily Distribution Guide'}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <h4 className="mb-2 font-semibold text-yellow-900">
                  {locale === 'tr' ? '🌅 Sabah' : '🌅 Morning'}
                </h4>
                <div className="mb-2 text-2xl font-bold text-yellow-700">
                  {Math.round(result.recommendations.morning / 237)}
                </div>
                <p className="text-xs text-yellow-800">
                  {locale === 'tr' ? 'bardak' : 'cups'} ({result.recommendations.morning} ml)
                </p>
                <p className="mt-2 text-xs text-yellow-700">
                  {locale === 'tr'
                    ? 'Uyanıştan öğle yemeğine kadar'
                    : 'Upon waking until lunch'}
                </p>
              </div>

              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
                <h4 className="mb-2 font-semibold text-orange-900">
                  {locale === 'tr' ? '☀️ Öğleden Sonra' : '☀️ Afternoon'}
                </h4>
                <div className="mb-2 text-2xl font-bold text-orange-700">
                  {Math.round(result.recommendations.afternoon / 237)}
                </div>
                <p className="text-xs text-orange-800">
                  {locale === 'tr' ? 'bardak' : 'cups'} ({result.recommendations.afternoon} ml)
                </p>
                <p className="mt-2 text-xs text-orange-700">
                  {locale === 'tr'
                    ? 'Öğleden akşam yemeğine kadar'
                    : 'Lunch through early evening'}
                </p>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-900">
                  {locale === 'tr' ? '🌙 Akşam' : '🌙 Evening'}
                </h4>
                <div className="mb-2 text-2xl font-bold text-blue-700">
                  {Math.round(result.recommendations.evening / 237)}
                </div>
                <p className="text-xs text-blue-800">
                  {locale === 'tr' ? 'bardak' : 'cups'} ({result.recommendations.evening} ml)
                </p>
                <p className="mt-2 text-xs text-blue-700">
                  {locale === 'tr'
                    ? 'Akşam yemeğinden yatana kadar'
                    : 'Dinner through bedtime'}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-blue-100 p-3">
              <p className="text-xs text-blue-900">
                {locale === 'tr'
                  ? '💡 İpucu: Gece tuvalete kalkmayı azaltmak için akşam alımını erken saatlere dağıtın.'
                  : '💡 Tip: Distribute evening intake earlier to reduce nighttime bathroom trips.'}
              </p>
            </div>
          </Card>

          {/* Hydration Tips */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Hidrasyon İpuçları' : 'Hydration Tips'}
            </h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-sm text-blue-900">
                  💧{' '}
                  {locale === 'tr'
                    ? 'Gününüze bir bardak su ile başlayın'
                    : 'Start your day with a glass of water'}
                </p>
              </div>
              <div className="rounded-lg bg-cyan-50 p-3">
                <p className="text-sm text-cyan-900">
                  🍎{' '}
                  {locale === 'tr'
                    ? 'Suya zengin meyve ve sebzeler tüketin'
                    : 'Eat water-rich fruits and vegetables'}
                </p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="text-sm text-blue-900">
                  🚰{' '}
                  {locale === 'tr'
                    ? 'Yanınızda su şişesi taşıyın'
                    : 'Carry a reusable water bottle'}
                </p>
              </div>
              <div className="rounded-lg bg-cyan-50 p-3">
                <p className="text-sm text-cyan-900">
                  🎨{' '}
                  {locale === 'tr'
                    ? 'İdrar renginizi takip edin (açık sarı ideal)'
                    : 'Monitor urine color (pale yellow is ideal)'}
                </p>
              </div>
            </div>
          </Card>

          {/* Hydration Guide */}
          <HydrationGuide dailyWater={result.dailyIntakeLiters} locale={locale} />

          {/* Interactive Cards - Layer 1 */}
          {/* Dehydration Warning Signs */}
          <Card className="animate-slide-up border-l-4 border-l-red-500 bg-red-50">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '⚠️ Dehidratasyon Belirtileri' : '⚠️ Dehydration Warning Signs'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: '😓', text: locale === 'tr' ? 'Koyu sarı idrar' : 'Dark yellow urine' },
                { icon: '🤕', text: locale === 'tr' ? 'Baş ağrısı' : 'Headache' },
                { icon: '😴', text: locale === 'tr' ? 'Yorgunluk ve halsizlik' : 'Fatigue and weakness' },
                { icon: '💧', text: locale === 'tr' ? 'Kuru ağız ve dudaklar' : 'Dry mouth and lips' },
                { icon: '🧠', text: locale === 'tr' ? 'Konsantrasyon zorluğu' : 'Difficulty concentrating' },
                { icon: '💓', text: locale === 'tr' ? 'Hızlı kalp atışı' : 'Rapid heartbeat' },
              ].map((sign, index) => (
                <div key={index} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                  <span className="text-2xl">{sign.icon}</span>
                  <span className="text-sm text-neutral-700">{sign.text}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Hydration Benefits */}
          <Card className="animate-slide-up bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '✨ Yeterli Hidratasyonun Faydaları' : '✨ Benefits of Proper Hydration'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '💪', title: locale === 'tr' ? 'Fiziksel Performans' : 'Physical Performance', desc: locale === 'tr' ? 'Dayanıklılık ve güç artışı' : 'Increased endurance & strength' },
                { icon: '🧠', title: locale === 'tr' ? 'Zihinsel Netlik' : 'Mental Clarity', desc: locale === 'tr' ? 'Konsantrasyon ve hafıza' : 'Better focus & memory' },
                { icon: '🌡️', title: locale === 'tr' ? 'Sıcaklık Dengesi' : 'Temperature Control', desc: locale === 'tr' ? 'Vücut ısısı regülasyonu' : 'Body temperature regulation' },
                { icon: '✨', title: locale === 'tr' ? 'Cilt Sağlığı' : 'Skin Health', desc: locale === 'tr' ? 'Nemli ve parlak cilt' : 'Hydrated & glowing skin' },
                { icon: '🍎', title: locale === 'tr' ? 'Sindirim Sağlığı' : 'Digestive Health', desc: locale === 'tr' ? 'Düzenli bağırsak hareketi' : 'Regular bowel movements' },
                { icon: '⚡', title: locale === 'tr' ? 'Enerji Seviyesi' : 'Energy Levels', desc: locale === 'tr' ? 'Yorgunluk azalması' : 'Reduced fatigue' },
              ].map((benefit, index) => (
                <div key={index} className="bg-white/80 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-semibold text-neutral-900 mb-1 text-sm">{benefit.title}</h4>
                  <p className="text-xs text-neutral-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Water Sources */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Droplet className="h-6 w-6 text-cyan-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '💧 Su Kaynakları' : '💧 Water Sources'}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-900">{locale === 'tr' ? 'Sıvı İçecekler' : 'Beverages'}</span>
                  <span className="text-2xl font-bold text-blue-600">70-80%</span>
                </div>
                <p className="text-sm text-blue-800">
                  {locale === 'tr' ? 'Su, çay, kahve, süt, meyve suları' : 'Water, tea, coffee, milk, fruit juices'}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-900">{locale === 'tr' ? 'Yiyecekler' : 'Foods'}</span>
                  <span className="text-2xl font-bold text-green-600">20-30%</span>
                </div>
                <p className="text-sm text-green-800">
                  {locale === 'tr' ? '🍉 Meyve, 🥒 sebze, 🍲 çorba, 🥗 salata' : '🍉 Fruits, 🥒 vegetables, 🍲 soups, 🥗 salads'}
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Hydration Hacks */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '⚡ Hızlı Hidrasyon İpuçları' : '⚡ Quick Hydration Hacks'}
              </h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {waterIntakeContent[locale].tips.slice(0, 8).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/80 p-3 rounded-lg backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{tip}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* SEO Content - Layer 2 - Collapsible */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '📚 Detaylı Bilgiler' : '📚 Detailed Information'}
              </h3>
            </div>
            <div className="space-y-3">
              {/* What is Water Intake */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🔍 Su İhtiyacı Nedir?' : '🔍 What is Water Intake?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{waterIntakeContent[locale].whatIs.substring(0, 600)}...</p>
                </div>
              </details>

              {/* How to Calculate */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🧮 Nasıl Hesaplanır?' : '🧮 How is it Calculated?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <div className="bg-neutral-50 p-3 rounded mb-3 font-mono text-xs">
                    {locale === 'tr' ? 'Temel İhtiyaç = Kilo (kg) × 30-35ml' : 'Baseline = Weight (kg) × 30-35ml'}
                    <br />
                    {locale === 'tr' ? 'Toplam = (Temel × Aktivite × İklim) + Özel Durum' : 'Total = (Baseline × Activity × Climate) + Special'}
                  </div>
                  <p>{waterIntakeContent[locale].howToCalculate.substring(0, 500)}...</p>
                </div>
              </details>

              {/* Formula Details */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '📐 Formül ve Metodoloji' : '📐 Formula & Methodology'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{waterIntakeContent[locale].formulaDetails.substring(0, 600)}...</p>
                </div>
              </details>

              {/* Interpretation */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '📊 Sonuçları Yorumlama' : '📊 Interpreting Results'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{waterIntakeContent[locale].interpretation.substring(0, 500)}...</p>
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs font-semibold text-blue-900">
                      💡 {locale === 'tr' ? 'İpucu: İdrar renginiz en iyi hidrasyon göstergesidir - açık sarı idealdir!' : 'Tip: Urine color is the best hydration indicator - pale yellow is ideal!'}
                    </p>
                  </div>
                </div>
              </details>

              {/* Categories */}
              <details className="group border border-neutral-200 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-blue-100">
                  <span className="font-semibold text-blue-900">
                    {locale === 'tr' ? '📋 Hidrasyon Kategorileri' : '📋 Hydration Categories'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 border-t border-blue-200">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {waterIntakeContent[locale].categories.map((cat, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg" style={{ borderLeft: `4px solid ${cat.color}` }}>
                        <h4 className="font-semibold text-neutral-900 mb-1 text-sm">{cat.label}</h4>
                        <p className="text-xs text-neutral-600 mb-2">{cat.range}</p>
                        <p className="text-xs text-neutral-700">{cat.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* Limitations */}
              <details className="group border border-orange-200 rounded-lg bg-orange-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-orange-100">
                  <span className="font-semibold text-orange-900">
                    {locale === 'tr' ? '⚠️ Sınırlamalar' : '⚠️ Limitations'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-orange-900 border-t border-orange-200">
                  <p>{waterIntakeContent[locale].limitations.substring(0, 400)}...</p>
                </div>
              </details>

              {/* Medical Disclaimer */}
              <details className="group border-2 border-amber-400 rounded-lg bg-amber-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-amber-100">
                  <span className="font-semibold text-amber-900">
                    {locale === 'tr' ? '⚕️ Tıbbi Sorumluluk Reddi' : '⚕️ Medical Disclaimer'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-amber-900 border-t border-amber-300">
                  <p>{waterIntakeContent[locale].medicalDisclaimer.substring(0, 400)}...</p>
                  <p className="mt-3 text-xs font-semibold">
                    ⚠️ {locale === 'tr' ? 'Tıbbi tavsiye değildir. Sağlık sorunlarınız için doktorunuza danışın.' : 'Not medical advice. Consult your doctor for health concerns.'}
                  </p>
                </div>
              </details>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '❓ Sıkça Sorulan Sorular' : '❓ Frequently Asked Questions'}
              </h3>
            </div>
            <div className="space-y-3">
              {waterIntakeContent[locale].faqs.map((faq, index) => (
                <details key={index} className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100">
                    <span className="font-semibold text-neutral-900 text-sm">{faq.question}</span>
                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="p-3 text-sm text-neutral-700">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Card>

          {/* Scientific References */}
          <Card className="animate-slide-up bg-neutral-50">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-neutral-600" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    {locale === 'tr' ? '📖 Bilimsel Kaynaklar' : '📖 Scientific References'}
                  </h3>
                </div>
                <span className="transform group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <ol className="mt-4 space-y-2 text-xs text-neutral-600 leading-relaxed">
                {waterIntakeContent[locale].references.map((ref, index) => (
                  <li key={index} className="pl-4 border-l-2 border-neutral-300">
                    {index + 1}. {ref}
                  </li>
                ))}
              </ol>
            </details>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WaterIntakeCalculator;
