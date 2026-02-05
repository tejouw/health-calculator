'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateBMR, getActivityDescription, getTDEE, getWeightLossTarget, getMuscleGainTarget } from './bmrLogic';
import { BMRInput, ActivityLevel } from './bmrTypes';
import { Zap, Activity, Target, TrendingUp, TrendingDown, Flame, Droplet, CalendarDays, PieChart, Utensils, Scale, Award } from 'lucide-react';
import MetabolismTips from './components/MetabolismTips';

interface BMRCalculatorProps {
  locale: 'en' | 'tr';
}

const BMRCalculator: React.FC<BMRCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [goalWeight, setGoalWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [selectedActivityLevel, setSelectedActivityLevel] = useState<ActivityLevel>('moderate');
  const [result, setResult] = useState<ReturnType<typeof calculateBMR> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!ageNum || !heightNum || !weightNum || ageNum <= 0 || heightNum <= 0 || weightNum <= 0) {
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

    const goalWeightNum = goalWeight ? parseFloat(goalWeight) : undefined;

    const input: BMRInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
      goalWeight: goalWeightNum,
    };

    try {
      const bmrResult = calculateBMR(input);
      setResult(bmrResult);
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
    setHeight('');
    setWeight('');
    setGoalWeight('');
    setGender('male');
    setUnit('metric');
    setSelectedActivityLevel('moderate');
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
      description: locale === 'tr' ? 'Az veya hiç egzersiz' : 'Little to no exercise',
    },
    {
      value: 'light',
      label: locale === 'tr' ? 'Hafif Aktif' : 'Light',
      description: locale === 'tr' ? 'Haftada 1-3 gün egzersiz' : 'Exercise 1-3 days/week',
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Orta Aktif' : 'Moderate',
      description: locale === 'tr' ? 'Haftada 3-5 gün egzersiz' : 'Exercise 3-5 days/week',
    },
    {
      value: 'active',
      label: locale === 'tr' ? 'Aktif' : 'Active',
      description: locale === 'tr' ? 'Haftada 6-7 gün egzersiz' : 'Exercise 6-7 days/week',
    },
    {
      value: 'veryActive',
      label: locale === 'tr' ? 'Çok Aktif' : 'Very Active',
      description:
        locale === 'tr' ? 'Günde 2x egzersiz veya fiziksel iş' : 'Exercise 2x/day or physical job',
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'BMR Hesaplama' : 'BMR Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Bazal Metabolizma Hızınızı ve Günlük Kalori İhtiyacınızı Hesaplayın'
                : 'Calculate Your Resting Metabolic Rate and Daily Calorie Needs'}
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
        <div className="grid gap-6 sm:grid-cols-3">
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

        {/* Goal Weight (Optional) */}
        <div className="mt-6">
          <Input
            label={locale === 'tr' ? 'Hedef Kilo (Opsiyonel)' : 'Goal Weight (Optional)'}
            type="number"
            value={goalWeight}
            onChange={(e) => setGoalWeight(e.target.value)}
            placeholder={unit === 'metric' ? '65' : '143'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
            }
            helperText={locale === 'tr' ? 'Hedefe ulaşma süresini görmek için' : 'To see timeline to reach your goal'}
          />
        </div>

        {/* Activity Level */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Referans Aktivite Seviyesi' : 'Reference Activity Level'}
          </label>
          <p className="mb-3 text-xs text-neutral-600">
            {locale === 'tr'
              ? 'Kalori ihtiyaçlarını görmek için bir aktivite seviyesi seçin'
              : 'Select an activity level to see calorie needs'}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelectedActivityLevel(option.value)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  selectedActivityLevel === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
                <div className="mt-1 text-xs text-neutral-600">{option.description}</div>
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
          {/* Metabolic Overview */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Metabolik Profil' : 'Metabolic Profile'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Genel metabolizma değerlendirmesi' : 'Overall metabolism assessment'}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-4">
              {/* Metabolic Age */}
              {result.metabolicAge && (
                <div className="rounded-lg bg-white p-4 text-center border border-purple-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Metabolik Yaş' : 'Metabolic Age'}</p>
                  <div className="text-3xl font-bold text-purple-600">{result.metabolicAge}</div>
                  <p className="text-xs text-neutral-500 mt-1">
                    {result.metabolicAge < parseInt(age) ? '🎉 ' : result.metabolicAge > parseInt(age) ? '💪 ' : '✅ '}
                    {result.metabolicAge < parseInt(age)
                      ? (locale === 'tr' ? 'Harika!' : 'Great!')
                      : result.metabolicAge > parseInt(age)
                      ? (locale === 'tr' ? 'Geliştirilebilir' : 'Room to improve')
                      : (locale === 'tr' ? 'Normal' : 'On track')}
                  </p>
                </div>
              )}

              {/* Metabolic Rate */}
              <div className="rounded-lg bg-white p-4 text-center border border-indigo-200">
                <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Metabolizma Hızı' : 'Metabolic Rate'}</p>
                <div className={`text-2xl font-bold ${result.metabolicRate === 'high' ? 'text-green-600' : result.metabolicRate === 'low' ? 'text-red-600' : 'text-blue-600'}`}>
                  {result.metabolicRate === 'high' ? (locale === 'tr' ? 'Yüksek' : 'High') :
                   result.metabolicRate === 'low' ? (locale === 'tr' ? 'Düşük' : 'Low') :
                   (locale === 'tr' ? 'Normal' : 'Normal')}
                </div>
                <p className="text-xs text-neutral-500 mt-1">
                  {result.metabolicRate === 'high' ? '🔥' : result.metabolicRate === 'low' ? '🐢' : '✓'}
                </p>
              </div>

              {/* BMI */}
              {result.bmi && (
                <div className="rounded-lg bg-white p-4 text-center border border-blue-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Vücut Kütle İndeksi' : 'Body Mass Index'}</p>
                  <div className="text-3xl font-bold text-blue-600">{result.bmi}</div>
                  <p className="text-xs text-neutral-500 mt-1">
                    {result.bmi < 18.5 ? (locale === 'tr' ? 'Zayıf' : 'Underweight') :
                     result.bmi < 25 ? (locale === 'tr' ? 'Normal' : 'Normal') :
                     result.bmi < 30 ? (locale === 'tr' ? 'Fazla' : 'Overweight') :
                     (locale === 'tr' ? 'Obez' : 'Obese')}
                  </p>
                </div>
              )}

              {/* Water Intake */}
              {result.dailyWaterIntake && (
                <div className="rounded-lg bg-white p-4 text-center border border-cyan-200">
                  <Droplet className="mx-auto h-6 w-6 text-cyan-600 mb-1" />
                  <div className="text-3xl font-bold text-cyan-600">{result.dailyWaterIntake}</div>
                  <p className="text-xs text-neutral-600 mt-1">
                    {unit === 'metric' ? (locale === 'tr' ? 'litre/gün' : 'liters/day') : 'oz/day'}
                  </p>
                </div>
              )}
            </div>

            {/* Ideal Weight Range */}
            {result.idealWeight && (
              <div className="mt-4 rounded-lg bg-white p-4 border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-700">{locale === 'tr' ? 'İdeal Kilo Aralığınız' : 'Your Ideal Weight Range'}</p>
                    <p className="text-xs text-neutral-500">{locale === 'tr' ? 'Sağlıklı BMI aralığına göre (18.5-24.9)' : 'Based on healthy BMI range (18.5-24.9)'}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-green-600">
                      {result.idealWeight.min} - {result.idealWeight.max}
                    </span>
                    <span className="ml-2 text-sm text-neutral-600">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* BMR Display */}
          <Card className="animate-slide-up border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Bazal Metabolizma Hızı (BMR)' : 'Basal Metabolic Rate (BMR)'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? 'Dinlenme sırasında günlük yaktığınız kalori'
                    : 'Calories burned daily at complete rest'}
                </p>
              </div>
              <Badge variant="warning">Mifflin-St Jeor</Badge>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <Flame className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'BMR (Önerilen)' : 'BMR (Recommended)'}</span>
                </div>
                <div className="text-4xl font-bold text-amber-600">
                  {result.bmr}
                  <span className="ml-2 text-lg font-normal text-neutral-600">
                    {locale === 'tr' ? 'kal/gün' : 'cal/day'}
                  </span>
                </div>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <Zap className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'BMR (Harris-Benedict)' : 'BMR (Harris-Benedict)'}</span>
                </div>
                <div className="text-4xl font-bold text-orange-600">
                  {result.bmrHarrisBenedict}
                  <span className="ml-2 text-lg font-normal text-neutral-600">
                    {locale === 'tr' ? 'kal/gün' : 'cal/day'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-amber-100 p-3">
              <p className="text-xs text-amber-900">
                {locale === 'tr'
                  ? 'Mifflin-St Jeor denklemi modern popülasyonlar için daha doğru kabul edilir. Harris-Benedict formülü karşılaştırma amacıyla gösterilmiştir.'
                  : 'Mifflin-St Jeor equation is considered more accurate for modern populations. Harris-Benedict is shown for comparison.'}
              </p>
            </div>
          </Card>

          {/* Activity Level Calories */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr'
                ? 'Farklı Aktivite Seviyelerinde Günlük Kalori İhtiyacı'
                : 'Daily Calorie Needs at Different Activity Levels'}
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {activityOptions.map((option) => {
                const calories = result.activityLevels[option.value];
                const isSelected = selectedActivityLevel === option.value;

                return (
                  <div
                    key={option.value}
                    className={`rounded-lg border-2 p-4 transition-all ${
                      isSelected
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                  >
                    <h4 className="mb-2 text-sm font-semibold text-neutral-900">{option.label}</h4>
                    <div className="mb-2 text-2xl font-bold text-primary-600">{calories}</div>
                    <p className="mb-2 text-xs text-neutral-600">{option.description}</p>
                    {isSelected && (
                      <div className="space-y-2 border-t border-neutral-200 pt-2">
                        <div className="flex items-center gap-2 text-xs">
                          <TrendingDown className="h-3 w-3 text-red-500" />
                          <span className="text-neutral-700">
                            {locale === 'tr'
                              ? 'Kilo kaybı: '
                              : 'Weight loss: '}
                            <strong className="text-red-600">
                              {getWeightLossTarget(result.bmr, option.value)}
                            </strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <TrendingUp className="h-3 w-3 text-green-500" />
                          <span className="text-neutral-700">
                            {locale === 'tr'
                              ? 'Kas kazanımı: '
                              : 'Muscle gain: '}
                            <strong className="text-green-600">
                              {getMuscleGainTarget(result.bmr, option.value)}
                            </strong>
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Macro Suggestions */}
          {result.macroSuggestions && (
            <Card className="animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="h-5 w-5 text-indigo-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Makro Besin Önerileri' : 'Macro Nutrient Recommendations'}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                {locale === 'tr'
                  ? 'Hedeflerinize göre önerilen günlük protein, karbonhidrat ve yağ miktarları'
                  : 'Recommended daily protein, carbs, and fat based on your goals'}
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Weight Loss */}
                <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                  <h4 className="mb-3 font-semibold text-red-900">{locale === 'tr' ? 'Kilo Kaybı' : 'Weight Loss'}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">Protein:</span>
                      <span className="font-bold text-red-900">{result.macroSuggestions.weightLoss.protein.grams}g ({result.macroSuggestions.weightLoss.protein.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Karb:' : 'Carbs:'}</span>
                      <span className="font-bold text-red-900">{result.macroSuggestions.weightLoss.carbs.grams}g ({result.macroSuggestions.weightLoss.carbs.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Yağ:' : 'Fat:'}</span>
                      <span className="font-bold text-red-900">{result.macroSuggestions.weightLoss.fat.grams}g ({result.macroSuggestions.weightLoss.fat.percentage}%)</span>
                    </div>
                  </div>
                </div>

                {/* Maintenance */}
                <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                  <h4 className="mb-3 font-semibold text-blue-900">{locale === 'tr' ? 'Koruma' : 'Maintenance'}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">Protein:</span>
                      <span className="font-bold text-blue-900">{result.macroSuggestions.maintenance.protein.grams}g ({result.macroSuggestions.maintenance.protein.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Karb:' : 'Carbs:'}</span>
                      <span className="font-bold text-blue-900">{result.macroSuggestions.maintenance.carbs.grams}g ({result.macroSuggestions.maintenance.carbs.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Yağ:' : 'Fat:'}</span>
                      <span className="font-bold text-blue-900">{result.macroSuggestions.maintenance.fat.grams}g ({result.macroSuggestions.maintenance.fat.percentage}%)</span>
                    </div>
                  </div>
                </div>

                {/* Muscle Gain */}
                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                  <h4 className="mb-3 font-semibold text-green-900">{locale === 'tr' ? 'Kas Kazanımı' : 'Muscle Gain'}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">Protein:</span>
                      <span className="font-bold text-green-900">{result.macroSuggestions.muscleGain.protein.grams}g ({result.macroSuggestions.muscleGain.protein.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Karb:' : 'Carbs:'}</span>
                      <span className="font-bold text-green-900">{result.macroSuggestions.muscleGain.carbs.grams}g ({result.macroSuggestions.muscleGain.carbs.percentage}%)</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Yağ:' : 'Fat:'}</span>
                      <span className="font-bold text-green-900">{result.macroSuggestions.muscleGain.fat.grams}g ({result.macroSuggestions.muscleGain.fat.percentage}%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Meal Plans */}
          {result.mealPlans && (
            <Card className="animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Öğün Planlama Önerileri' : 'Meal Planning Suggestions'}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                {locale === 'tr'
                  ? 'Günlük kalori ihtiyacınızın öğünlere dağılımı (orta aktivite seviyesi için)'
                  : 'Distribution of daily calorie needs across meals (for moderate activity level)'}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {/* 3 Meals */}
                <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                  <h4 className="mb-3 font-semibold text-blue-900">
                    {locale === 'tr' ? '3 Ana Öğün' : '3 Main Meals'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Kahvaltı:' : 'Breakfast:'}</span>
                      <span className="font-bold text-blue-900">{result.mealPlans.threeMeals.breakfast} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Öğle:' : 'Lunch:'}</span>
                      <span className="font-bold text-blue-900">{result.mealPlans.threeMeals.lunch} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Akşam:' : 'Dinner:'}</span>
                      <span className="font-bold text-blue-900">{result.mealPlans.threeMeals.dinner} kal</span>
                    </div>
                  </div>
                </div>

                {/* 4 Meals */}
                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                  <h4 className="mb-3 font-semibold text-green-900">
                    {locale === 'tr' ? '3 Öğün + Atıştırma' : '3 Meals + Snacks'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Kahvaltı:' : 'Breakfast:'}</span>
                      <span className="font-bold text-green-900">{result.mealPlans.fourMeals.breakfast} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Öğle:' : 'Lunch:'}</span>
                      <span className="font-bold text-green-900">{result.mealPlans.fourMeals.lunch} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Akşam:' : 'Dinner:'}</span>
                      <span className="font-bold text-green-900">{result.mealPlans.fourMeals.dinner} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Atıştırma:' : 'Snacks:'}</span>
                      <span className="font-bold text-green-900">{result.mealPlans.fourMeals.snacks} kal</span>
                    </div>
                  </div>
                </div>

                {/* 6 Meals */}
                <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
                  <h4 className="mb-3 font-semibold text-purple-900">
                    {locale === 'tr' ? '6 Küçük Öğün' : '6 Small Meals'}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Kahvaltı:' : 'Breakfast:'}</span>
                      <span className="font-bold text-purple-900">{result.mealPlans.sixMeals.breakfast} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Öğle:' : 'Lunch:'}</span>
                      <span className="font-bold text-purple-900">{result.mealPlans.sixMeals.lunch} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Akşam:' : 'Dinner:'}</span>
                      <span className="font-bold text-purple-900">{result.mealPlans.sixMeals.dinner} kal</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{locale === 'tr' ? 'Ara öğünler:' : 'Snacks (3x):'}</span>
                      <span className="font-bold text-purple-900">{result.mealPlans.sixMeals.snacks} kal</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Weight Goal Timeline */}
          {result.weightGoal && (
            <Card className="animate-slide-up bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Hedef Kilo Zaman Çizelgesi' : 'Weight Goal Timeline'}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="rounded-lg bg-white p-4 text-center border border-green-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Mevcut Kilo' : 'Current Weight'}</p>
                  <div className="text-3xl font-bold text-blue-600">{result.weightGoal.currentWeight}</div>
                  <p className="text-xs text-neutral-500 mt-1">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</p>
                </div>

                <div className="rounded-lg bg-white p-4 text-center border border-green-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Hedef Kilo' : 'Goal Weight'}</p>
                  <div className="text-3xl font-bold text-green-600">{result.weightGoal.goalWeight}</div>
                  <p className="text-xs text-neutral-500 mt-1">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</p>
                </div>

                <div className="rounded-lg bg-white p-4 text-center border border-green-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Haftalık Değişim' : 'Weekly Change'}</p>
                  <div className="text-3xl font-bold text-orange-600">{result.weightGoal.weeklyChange}</div>
                  <p className="text-xs text-neutral-500 mt-1">{unit === 'metric' ? 'kg/hafta' : 'lbs/week'}</p>
                </div>

                <div className="rounded-lg bg-white p-4 text-center border border-green-200">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Tahmini Süre' : 'Estimated Time'}</p>
                  <div className="text-3xl font-bold text-purple-600">{result.weightGoal.weeksToGoal}</div>
                  <p className="text-xs text-neutral-500 mt-1">{locale === 'tr' ? 'hafta' : 'weeks'}</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-white p-4 border border-green-200">
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold">{locale === 'tr' ? 'Tahmini Ulaşma Tarihi:' : 'Estimated Goal Date:'}</span>{' '}
                  <span className="text-green-600 font-bold">{result.weightGoal.estimatedDate}</span>
                </p>
                <p className="text-xs text-neutral-500 mt-2">
                  {locale === 'tr'
                    ? 'Bu tahmin sağlıklı ve sürdürülebilir bir kilo değişim hızına dayanmaktadır. Gerçek sonuçlar kişiden kişiye değişebilir.'
                    : 'This estimate is based on a healthy and sustainable rate of weight change. Actual results may vary.'}
                </p>
              </div>
            </Card>
          )}

          {/* Weekly/Monthly Calories */}
          {result.weeklyCalories && result.monthlyCalories && (
            <Card className="animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Uzun Vadeli Kalori Planlaması' : 'Long-term Calorie Planning'}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-neutral-200 p-4">
                  <h4 className="mb-3 font-semibold text-neutral-900">{locale === 'tr' ? 'Haftalık Kalori' : 'Weekly Calories'}</h4>
                  <div className="space-y-2">
                    {activityOptions.map((option) => (
                      <div key={option.value} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{option.label}:</span>
                        <span className="font-bold text-amber-600">{result.weeklyCalories![option.value].toLocaleString()} kal</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-neutral-200 p-4">
                  <h4 className="mb-3 font-semibold text-neutral-900">{locale === 'tr' ? 'Aylık Kalori' : 'Monthly Calories'}</h4>
                  <div className="space-y-2">
                    {activityOptions.map((option) => (
                      <div key={option.value} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-700">{option.label}:</span>
                        <span className="font-bold text-orange-600">{result.monthlyCalories![option.value].toLocaleString()} kal</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Summary and Info */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Özet ve Açıklama' : 'Summary and Explanation'}
            </h3>

            <div className="space-y-4 text-sm text-neutral-700">
              <div>
                <h4 className="mb-2 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'BMR Nedir?' : 'What is BMR?'}
                </h4>
                <p className="text-neutral-600">
                  {locale === 'tr'
                    ? 'Bazal Metabolizma Hızı (BMR), vücudunuzun dinlenme halinde temel fonksiyonları (nefes alma, dolaşım, hücre üretimi) sürdürmek için günde yaktığı kalori sayısıdır. Bu sayı sadece dinlenirken yaktığınız kaloridir - hiçbir aktivite veya egzersiz dahil değil.'
                    : 'Basal Metabolic Rate (BMR) is the number of calories your body burns daily at rest to maintain basic functions like breathing, circulation, and cell production. This number represents calories burned while resting only - no activity or exercise included.'}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'TDEE Nedir?' : 'What is TDEE?'}
                </h4>
                <p className="text-neutral-600">
                  {locale === 'tr'
                    ? 'Toplam Günlük Enerji Harcaması (TDEE), vücudunuzun aktivite seviyesini hesaba katarak günde yaktığı toplam kaloridir. Aktivite seviyesi ne kadar yüksekse, TDEE o kadar yüksek olur.'
                    : 'Total Daily Energy Expenditure (TDEE) is the total calories your body burns daily, accounting for your activity level. The higher your activity level, the higher your TDEE.'}
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Formüller' : 'Formulas Used'}
                </h4>
                <p className="text-neutral-600">
                  {locale === 'tr'
                    ? 'Mifflin-St Jeor: 1990\'da geliştirilen ve Harris-Benedict formülünden daha doğru kabul edilen modern denklem. Harris-Benedict: 1919\'dan kalma ve tarihsel karşılaştırma için kullanılan eski formül.'
                    : 'Mifflin-St Jeor: Modern equation developed in 1990, considered more accurate than Harris-Benedict. Harris-Benedict: Older formula from 1919, used for historical comparison.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Calorie Guide */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Kalori Hedefleri Rehberi' : 'Calorie Target Guide'}
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                  <h4 className="font-semibold text-red-900">
                    {locale === 'tr' ? 'Kilo Kaybı' : 'Weight Loss'}
                  </h4>
                </div>
                <p className="mb-2 text-sm text-red-800">
                  {locale === 'tr'
                    ? 'TDEE - 500 kalori'
                    : 'TDEE - 500 calories'}
                </p>
                <p className="text-xs text-red-700">
                  {locale === 'tr'
                    ? 'Haftada yaklaşık 0.5 kg (1 pound) yağ kaybı'
                    : 'Approximately 0.5 kg (1 pound) fat loss per week'}
                </p>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">
                    {locale === 'tr' ? 'Koruma' : 'Maintenance'}
                  </h4>
                </div>
                <p className="mb-2 text-sm text-blue-800">
                  {locale === 'tr'
                    ? 'TDEE kalori'
                    : 'TDEE calories'}
                </p>
                <p className="text-xs text-blue-700">
                  {locale === 'tr'
                    ? 'Mevcut kilonuzu koruma'
                    : 'Maintain current weight'}
                </p>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <h4 className="font-semibold text-green-900">
                    {locale === 'tr' ? 'Kas Kazanımı' : 'Muscle Gain'}
                  </h4>
                </div>
                <p className="mb-2 text-sm text-green-800">
                  {locale === 'tr'
                    ? 'TDEE + 400 kalori'
                    : 'TDEE + 400 calories'}
                </p>
                <p className="text-xs text-green-700">
                  {locale === 'tr'
                    ? 'Hafta başına 0.25-0.5 kg kilo alımı'
                    : 'Weekly weight gain 0.25-0.5 kg (ideal)'}
                </p>
              </div>
            </div>
          </Card>

          {/* Metabolism Tips */}
          <MetabolismTips bmr={result.bmr} locale={locale} />
        </div>
      )}
    </div>
  );
};

export default BMRCalculator;
