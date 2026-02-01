'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateCalorieDeficit, getGoalDescription, getActivityDescription } from './calorieDeficitLogic';
import { CalorieDeficitInput, ActivityLevel, WeightLossGoal } from './calorieDeficitTypes';
import { TrendingDown, Target, Flame, Calendar, AlertTriangle, Apple } from 'lucide-react';

interface CalorieDeficitCalculatorProps {
  locale: 'en' | 'tr';
}

const CalorieDeficitCalculator: React.FC<CalorieDeficitCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [targetWeight, setTargetWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [weightLossGoal, setWeightLossGoal] = useState<WeightLossGoal>('moderate');
  const [result, setResult] = useState<ReturnType<typeof calculateCalorieDeficit> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const targetWeightNum = targetWeight ? parseFloat(targetWeight) : undefined;

    if (!ageNum || !heightNum || !weightNum || ageNum <= 0 || heightNum <= 0 || weightNum <= 0) {
      setError(
        locale === 'tr'
          ? 'Lütfen tüm zorunlu alanları doğru şekilde doldurun'
          : 'Please fill in all required fields correctly'
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

    if (targetWeightNum && targetWeightNum >= weightNum) {
      setError(
        locale === 'tr'
          ? 'Hedef kilo mevcut kilonuzdan düşük olmalıdır'
          : 'Target weight must be lower than current weight'
      );
      return;
    }

    const input: CalorieDeficitInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      unit,
      activityLevel,
      weightLossGoal,
      targetWeight: targetWeightNum,
    };

    try {
      const deficitResult = calculateCalorieDeficit(input);
      setResult(deficitResult);
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
    setTargetWeight('');
    setGender('male');
    setUnit('metric');
    setActivityLevel('moderate');
    setWeightLossGoal('moderate');
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
      description: getActivityDescription('sedentary', locale),
    },
    {
      value: 'light',
      label: locale === 'tr' ? 'Hafif Aktif' : 'Light',
      description: getActivityDescription('light', locale),
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Orta Aktif' : 'Moderate',
      description: getActivityDescription('moderate', locale),
    },
    {
      value: 'active',
      label: locale === 'tr' ? 'Aktif' : 'Active',
      description: getActivityDescription('active', locale),
    },
    {
      value: 'veryActive',
      label: locale === 'tr' ? 'Çok Aktif' : 'Very Active',
      description: getActivityDescription('veryActive', locale),
    },
  ];

  const goalOptions: Array<{
    value: WeightLossGoal;
    label: string;
    weeklyLoss: string;
    recommended: boolean;
  }> = [
    {
      value: 'conservative',
      label: locale === 'tr' ? 'Muhafazakar' : 'Conservative',
      weeklyLoss: locale === 'tr' ? '0.25 kg/hafta' : '0.25 kg/week (0.5 lbs)',
      recommended: false,
    },
    {
      value: 'moderate',
      label: locale === 'tr' ? 'Dengeli (Önerilen)' : 'Moderate (Recommended)',
      weeklyLoss: locale === 'tr' ? '0.5 kg/hafta' : '0.5 kg/week (1 lb)',
      recommended: true,
    },
    {
      value: 'aggressive',
      label: locale === 'tr' ? 'Agresif' : 'Aggressive',
      weeklyLoss: locale === 'tr' ? '0.75 kg/hafta' : '0.75 kg/week (1.5 lbs)',
      recommended: false,
    },
    {
      value: 'maximum',
      label: locale === 'tr' ? 'Maksimum' : 'Maximum',
      weeklyLoss: locale === 'tr' ? '1 kg/hafta' : '1 kg/week (2 lbs)',
      recommended: false,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
            <TrendingDown className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kalori Açığı Hesaplama' : 'Calorie Deficit Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Güvenli Kilo Kaybı İçin Günlük Kalori Hedefini Hesaplayın'
                : 'Calculate Your Daily Calorie Target for Safe Weight Loss'}
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

        {/* Target Weight (Optional) */}
        <div className="mt-6">
          <Input
            label={locale === 'tr' ? 'Hedef Kilo (Opsiyonel)' : 'Target Weight (Optional)'}
            type="number"
            value={targetWeight}
            onChange={(e) => setTargetWeight(e.target.value)}
            placeholder={unit === 'metric' ? '65' : '143'}
            rightIcon={
              <span className="text-sm">{unit === 'metric' ? tUnits('kg') : tUnits('lbs')}</span>
            }
            helperText={
              locale === 'tr'
                ? 'Hedef kilonuzu girin - size hedefe ulaşma süresi gösterilecek'
                : 'Enter your target weight - we\'ll show you the timeline to reach it'
            }
          />
        </div>

        {/* Activity Level */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActivityLevel(option.value)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  activityLevel === option.value
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

        {/* Weight Loss Goal */}
        <div className="mt-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Kilo Kaybı Hedefi' : 'Weight Loss Goal'}
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setWeightLossGoal(option.value)}
                className={`rounded-lg border-2 p-3 text-left transition-all ${
                  weightLossGoal === option.value
                    ? 'border-red-500 bg-red-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="mb-1 flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{option.label}</div>
                  {option.recommended && (
                    <Badge variant="success" size="sm">
                      {locale === 'tr' ? 'Önerilen' : 'Recommended'}
                    </Badge>
                  )}
                </div>
                <div className="text-xs text-neutral-600">{option.weeklyLoss}</div>
                <div className="mt-1 text-xs text-neutral-500">
                  {getGoalDescription(option.value, locale)}
                </div>
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
          {/* Safety Warnings */}
          {!result.isSafe && result.warnings.length > 0 && (
            <Card className="animate-slide-up border-2 border-orange-200 bg-orange-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-semibold text-orange-900">
                    {locale === 'tr' ? 'Güvenlik Uyarıları' : 'Safety Warnings'}
                  </h3>
                  <ul className="space-y-1">
                    {result.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-orange-800">
                        • {warning}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-orange-700">
                    {locale === 'tr'
                      ? 'Daha güvenli bir kalori açığı için hedeflerinizi ayarlamayı düşünün veya bir sağlık uzmanına danışın.'
                      : 'Consider adjusting your goals for a safer calorie deficit or consult with a healthcare professional.'}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Main Results */}
          <Card className="animate-slide-up border-2 border-red-100 bg-gradient-to-br from-red-50 to-pink-50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Günlük Kalori Hedefi' : 'Daily Calorie Target'}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <Target className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Günlük Hedef' : 'Daily Target'}</span>
                </div>
                <div className="text-4xl font-bold text-red-600">
                  {result.dailyCalorieTarget}
                  <span className="ml-2 text-lg font-normal text-neutral-600">
                    {locale === 'tr' ? 'kal' : 'cal'}
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-600">
                  {locale === 'tr'
                    ? `${result.deficitPercentage}% açık (${result.recommendedDeficit} kal)`
                    : `${result.deficitPercentage}% deficit (${result.recommendedDeficit} cal)`}
                </p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                  <Flame className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Günlük Harcama (TDEE)' : 'Daily Expenditure (TDEE)'}</span>
                </div>
                <div className="text-4xl font-bold text-orange-600">
                  {result.tdee}
                  <span className="ml-2 text-lg font-normal text-neutral-600">
                    {locale === 'tr' ? 'kal' : 'cal'}
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-600">
                  {locale === 'tr' ? `BMR: ${result.bmr} kal` : `BMR: ${result.bmr} cal`}
                </p>
              </div>
            </div>
          </Card>

          {/* Weight Loss Projections */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Kilo Kaybı Tahminleri' : 'Weight Loss Projections'}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border-2 border-neutral-200 bg-white p-4">
                <div className="mb-2 text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Haftalık Kayıp' : 'Weekly Loss'}
                </div>
                <div className="text-2xl font-bold text-neutral-900">
                  {unit === 'metric' ? (
                    <>
                      {result.weeklyWeightLoss} {tUnits('kg')}
                    </>
                  ) : (
                    <>
                      {result.weeklyWeightLossPounds} {tUnits('lbs')}
                    </>
                  )}
                </div>
              </div>

              <div className="rounded-lg border-2 border-neutral-200 bg-white p-4">
                <div className="mb-2 text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Aylık Kayıp' : 'Monthly Loss'}
                </div>
                <div className="text-2xl font-bold text-neutral-900">
                  {unit === 'metric' ? (
                    <>
                      {result.monthlyWeightLoss} {tUnits('kg')}
                    </>
                  ) : (
                    <>
                      {result.monthlyWeightLossPounds} {tUnits('lbs')}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Timeline to Goal */}
            {result.weeksToGoal && result.monthsToGoal && (
              <div className="mt-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-900">
                    {locale === 'tr' ? 'Hedefe Ulaşma Süresi' : 'Timeline to Goal'}
                  </h4>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <div className="text-sm text-blue-700">
                      {locale === 'tr' ? 'Hafta' : 'Weeks'}
                    </div>
                    <div className="text-2xl font-bold text-blue-900">{result.weeksToGoal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-700">
                      {locale === 'tr' ? 'Ay' : 'Months'}
                    </div>
                    <div className="text-2xl font-bold text-blue-900">{result.monthsToGoal}</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-700">
                      {locale === 'tr' ? 'Tahmini Tarih' : 'Estimated Date'}
                    </div>
                    <div className="text-lg font-bold text-blue-900">
                      {result.estimatedCompletionDate?.toLocaleDateString(
                        locale === 'tr' ? 'tr-TR' : 'en-US',
                        { month: 'short', year: 'numeric' }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Macronutrient Recommendations */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Apple className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Makro Besin Öğesi Önerileri' : 'Macronutrient Recommendations'}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <div className="mb-2 text-sm font-medium text-blue-700">
                  {locale === 'tr' ? 'Protein' : 'Protein'}
                </div>
                <div className="text-3xl font-bold text-blue-900">
                  {result.proteinGrams}
                  <span className="ml-1 text-lg font-normal">g</span>
                </div>
                <div className="mt-2 text-xs text-blue-700">
                  {Math.round((result.proteinGrams * 4 / result.dailyCalorieTarget) * 100)}%{' '}
                  {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
              </div>

              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <div className="mb-2 text-sm font-medium text-yellow-700">
                  {locale === 'tr' ? 'Yağ' : 'Fat'}
                </div>
                <div className="text-3xl font-bold text-yellow-900">
                  {result.fatGrams}
                  <span className="ml-1 text-lg font-normal">g</span>
                </div>
                <div className="mt-2 text-xs text-yellow-700">
                  {Math.round((result.fatGrams * 9 / result.dailyCalorieTarget) * 100)}%{' '}
                  {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="mb-2 text-sm font-medium text-green-700">
                  {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
                </div>
                <div className="text-3xl font-bold text-green-900">
                  {result.carbsGrams}
                  <span className="ml-1 text-lg font-normal">g</span>
                </div>
                <div className="mt-2 text-xs text-green-700">
                  {Math.round((result.carbsGrams * 4 / result.dailyCalorieTarget) * 100)}%{' '}
                  {locale === 'tr' ? 'kalori' : 'calories'}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-neutral-100 p-3">
              <p className="text-xs text-neutral-700">
                {locale === 'tr'
                  ? 'Protein: 2.2g/kg vücut ağırlığı (kas kaybını önlemek için). Yağ: Kalori alımının ~27%. Karbonhidrat: Kalan kaloriler.'
                  : 'Protein: 2.2g/kg body weight (to prevent muscle loss). Fat: ~27% of calories. Carbs: Remaining calories.'}
              </p>
            </div>
          </Card>

          {/* Summary */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Özet' : 'Summary'}
            </h3>

            <div className="space-y-3 text-sm text-neutral-700">
              <p>
                {locale === 'tr' ? (
                  <>
                    Günlük <strong className="text-neutral-900">{result.dailyCalorieTarget} kalori</strong> hedefleyerek,{' '}
                    haftada ortalama <strong className="text-neutral-900">
                      {unit === 'metric' ? `${result.weeklyWeightLoss} kg` : `${result.weeklyWeightLossPounds} lbs`}
                    </strong> kilo verebilirsiniz.
                  </>
                ) : (
                  <>
                    By targeting <strong className="text-neutral-900">{result.dailyCalorieTarget} calories</strong> per day,{' '}
                    you can expect to lose approximately <strong className="text-neutral-900">
                      {unit === 'metric' ? `${result.weeklyWeightLoss} kg` : `${result.weeklyWeightLossPounds} lbs`}
                    </strong> per week.
                  </>
                )}
              </p>

              <p>
                {locale === 'tr' ? (
                  <>
                    Bu, TDEE'nizden <strong className="text-neutral-900">{result.recommendedDeficit} kalorilik</strong> ({result.deficitPercentage}%) bir açık anlamına gelir.
                  </>
                ) : (
                  <>
                    This represents a <strong className="text-neutral-900">{result.recommendedDeficit} calorie</strong> deficit ({result.deficitPercentage}%) from your TDEE.
                  </>
                )}
              </p>

              {result.isSafe ? (
                <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                  <p className="text-sm text-green-800">
                    ✓{' '}
                    {locale === 'tr'
                      ? 'Bu kalori hedefi güvenli aralıkta görünüyor.'
                      : 'This calorie target appears to be in the safe range.'}
                  </p>
                </div>
              ) : (
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-3">
                  <p className="text-sm text-orange-800">
                    ⚠{' '}
                    {locale === 'tr'
                      ? 'Bu kalori hedefi agresif olabilir - yukarıdaki uyarıları kontrol edin.'
                      : 'This calorie target may be aggressive - review warnings above.'}
                  </p>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CalorieDeficitCalculator;
