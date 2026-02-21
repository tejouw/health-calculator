'use client';

import React, { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import {
  calculateCaloriesBurned,
  activities,
  activityCategories,
  getActivitiesByCategory,
  intensityInfo,
  getActivityComparisons,
} from './caloriesBurnedLogic';
import { CaloriesBurnedResult } from './caloriesBurnedTypes';
import { Flame, Timer, TrendingUp, Utensils, Zap, Target, Award, BarChart3 } from 'lucide-react';

interface CaloriesBurnedCalculatorProps {
  locale: 'en' | 'tr';
}

const CaloriesBurnedCalculator: React.FC<CaloriesBurnedCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('running');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [result, setResult] = useState<CaloriesBurnedResult | null>(null);
  const [error, setError] = useState<string>('');

  // Get activities for selected category
  const categoryActivities = useMemo(
    () => getActivitiesByCategory(selectedCategory),
    [selectedCategory]
  );

  // Reset activity when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedActivity('');
  };

  const handleCalculate = () => {
    setError('');

    const weightNum = parseFloat(weight);
    const durationNum = parseFloat(duration);

    if (!weightNum || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight');
      return;
    }

    if (!durationNum || durationNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir süre girin' : 'Please enter a valid duration');
      return;
    }

    if (!selectedActivity) {
      setError(
        locale === 'tr' ? 'Lütfen bir aktivite seçin' : 'Please select an activity'
      );
      return;
    }

    try {
      const calculatedResult = calculateCaloriesBurned({
        weight: weightNum,
        duration: durationNum,
        activityId: selectedActivity,
        unit,
      });
      setResult(calculatedResult);
    } catch {
      setError(
        locale === 'tr' ? 'Hesaplama hatası oluştu' : 'Calculation error occurred'
      );
    }
  };

  const handleReset = () => {
    setWeight('');
    setDuration('');
    setSelectedCategory('running');
    setSelectedActivity('');
    setResult(null);
    setError('');
  };

  // Get activity comparisons for results
  const comparisons = useMemo(() => {
    if (!result || !weight || !duration) return [];
    const weightKg = unit === 'imperial' ? parseFloat(weight) * 0.453592 : parseFloat(weight);
    return getActivityComparisons(weightKg, parseFloat(duration), selectedActivity);
  }, [result, weight, duration, unit, selectedActivity]);

  const topBurners = comparisons.slice(0, 5);
  const similarBurners = comparisons
    .filter((c) => Math.abs(c.calories - (result?.totalCalories || 0)) < (result?.totalCalories || 100) * 0.25)
    .slice(0, 4);

  const currentIntensity = result ? intensityInfo[result.intensity] : null;

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yakılan Kalori Hesaplama' : 'Calories Burned Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Aktiviteniz sırasında ne kadar kalori yaktığınızı öğrenin'
                : 'Find out how many calories you burn during your activity'}
            </p>
          </div>
        </div>

        {/* Unit System */}
        <div className="mb-6">
          <RadioGroup
            label={t('unitSystem')}
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'metric' | 'imperial')}
            options={[
              { value: 'metric', label: t('metric'), description: tUnits('kg') },
              { value: 'imperial', label: t('imperial'), description: tUnits('lbs') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Weight and Duration */}
        <div className="grid gap-6 sm:grid-cols-2">
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
          <Input
            label={locale === 'tr' ? 'Süre' : 'Duration'}
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="30"
            rightIcon={<span className="text-sm">{tUnits('minutes')}</span>}
            required
          />
        </div>

        {/* Activity Category */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Aktivite Kategorisi' : 'Activity Category'}
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            options={activityCategories.map((cat) => ({
              value: cat.id,
              label: cat.name[locale],
            }))}
          />
        </div>

        {/* Activity Selection */}
        <div className="mt-6">
          <Select
            label={locale === 'tr' ? 'Aktivite' : 'Activity'}
            value={selectedActivity}
            onChange={(e) => setSelectedActivity(e.target.value)}
            options={[
              {
                value: '',
                label: locale === 'tr' ? '-- Aktivite seçin --' : '-- Select activity --',
              },
              ...categoryActivities.map((act) => ({
                value: act.id,
                label: `${act.name[locale]} (MET: ${act.met})`,
              })),
            ]}
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

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* POST-CALCULATION CONTENT - Rich & Engaging */}
      {/* ═══════════════════════════════════════════════════════════ */}

      {result && (
        <>
          {/* 1. Main Result Card */}
          <Card className="animate-slide-up border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Toplam Yakılan Kalori' : 'Total Calories Burned'}
              </h3>
              <div className="mb-2 text-6xl font-bold text-orange-600">
                {result.totalCalories.toLocaleString()}
              </div>
              <p className="mb-3 text-lg text-neutral-600">
                {locale === 'tr' ? 'kalori' : 'calories'} ({tUnits('kcal')})
              </p>
              <Badge
                variant={
                  result.intensity === 'very_vigorous'
                    ? 'danger'
                    : result.intensity === 'vigorous'
                      ? 'warning'
                      : result.intensity === 'moderate'
                        ? 'success'
                        : 'primary'
                }
                size="lg"
              >
                {currentIntensity?.label[locale]} - MET {result.met}
              </Badge>

              <p className="mt-3 text-sm text-neutral-500">
                {result.activityName[locale]} - {duration} {locale === 'tr' ? 'dakika' : 'min'}
              </p>
            </div>

            {/* Quick Stats Row */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-orange-200 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">{result.caloriesPerMinute}</div>
                <div className="text-xs text-neutral-600">
                  {locale === 'tr' ? 'kal/dk' : 'cal/min'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">{result.caloriesPerHour}</div>
                <div className="text-xs text-neutral-600">
                  {locale === 'tr' ? 'kal/saat' : 'cal/hr'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-900">{result.met}</div>
                <div className="text-xs text-neutral-600">MET</div>
              </div>
            </div>
          </Card>

          {/* 2. Calorie Burn Progress Bar */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Yoğunluk Analizi' : 'Intensity Analysis'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {currentIntensity?.description[locale]}
                </p>
              </div>
            </div>

            {/* MET Scale */}
            <div className="mt-4">
              <div className="mb-2 flex justify-between text-xs text-neutral-500">
                <span>{locale === 'tr' ? 'Dinlenme' : 'Rest'} (1)</span>
                <span>{locale === 'tr' ? 'Maksimum' : 'Maximum'} (15+)</span>
              </div>
              <div className="relative h-6 w-full overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${Math.min((result.met / 15) * 100, 100)}%`,
                    background: `linear-gradient(90deg, #3B82F6, #22C55E, #F59E0B, #EF4444)`,
                  }}
                />
                <div
                  className="absolute top-0 flex h-full items-center"
                  style={{ left: `${Math.min((result.met / 15) * 100, 100)}%` }}
                >
                  <div className="relative -ml-3 h-8 w-6 rounded-md border-2 border-white bg-neutral-800 shadow-lg">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold text-neutral-900">
                      {result.met}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex justify-between">
                {Object.entries(intensityInfo).map(([key, info]) => (
                  <span
                    key={key}
                    className="text-xs font-medium"
                    style={{ color: info.color }}
                  >
                    {info.label[locale]}
                  </span>
                ))}
              </div>
            </div>

            {/* Heart Rate Zone */}
            <div className="mt-4 rounded-lg bg-neutral-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Tahmini Kalp Atış Bölgesi' : 'Estimated Heart Rate Zone'}
                </span>
                <span className="font-bold" style={{ color: currentIntensity?.color }}>
                  {currentIntensity?.heartRateZone}{' '}
                  {locale === 'tr' ? 'maks. KAH' : 'max HR'}
                </span>
              </div>
            </div>
          </Card>

          {/* 3. Food Equivalents - Visual & Fun */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                <Utensils className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Yiyecek Eşdeğerleri' : 'Food Equivalents'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? `${result.totalCalories} kalori şunlara eşdeğer:`
                    : `${result.totalCalories} calories is equivalent to:`}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {result.foodEquivalents.map((food, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white p-4 text-center transition-transform hover:scale-105"
                >
                  <span className="text-3xl">{food.emoji}</span>
                  <span className="mt-2 text-2xl font-bold text-neutral-900">
                    {food.amount}
                  </span>
                  <span className="text-xs text-neutral-600">{food.name[locale]}</span>
                  <span className="mt-1 text-xs text-neutral-400">
                    ({food.calories} {locale === 'tr' ? 'kal' : 'cal'})
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* 4. Weekly/Monthly Projections */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'İlerleme Projeksiyonu' : 'Progress Projection'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? 'Haftada 3 seans varsayımıyla'
                    : 'Assuming 3 sessions per week'}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Per Session */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 text-center">
                <Timer className="mx-auto mb-2 h-6 w-6 text-blue-600" />
                <div className="text-2xl font-bold text-blue-700">{result.totalCalories}</div>
                <div className="text-sm text-blue-600">
                  {locale === 'tr' ? 'Seans başına' : 'Per Session'}
                </div>
              </div>

              {/* Weekly */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4 text-center">
                <Target className="mx-auto mb-2 h-6 w-6 text-green-600" />
                <div className="text-2xl font-bold text-green-700">
                  {result.weeklyProjection.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">
                  {locale === 'tr' ? 'Haftalık' : 'Weekly'}
                </div>
                <div className="mt-1 text-xs text-green-500">
                  ≈ {(result.weeklyProjection / 7700).toFixed(2)} kg {locale === 'tr' ? 'yağ' : 'fat'}
                </div>
              </div>

              {/* Monthly */}
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4 text-center">
                <Award className="mx-auto mb-2 h-6 w-6 text-purple-600" />
                <div className="text-2xl font-bold text-purple-700">
                  {result.monthlyProjection.toLocaleString()}
                </div>
                <div className="text-sm text-purple-600">
                  {locale === 'tr' ? 'Aylık' : 'Monthly'}
                </div>
                <div className="mt-1 text-xs text-purple-500">
                  ≈ {(result.monthlyProjection / 7700).toFixed(1)} kg {locale === 'tr' ? 'yağ' : 'fat'}
                </div>
              </div>
            </div>

            {/* Weight Loss Insight */}
            <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm text-blue-800">
                <strong>{locale === 'tr' ? 'Bilgi: ' : 'Note: '}</strong>
                {locale === 'tr'
                  ? `1 kg yağ yaklaşık 7.700 kaloriye eşittir. Bu aktiviteyi haftada 3 kez yaparak, ayda yaklaşık ${(result.monthlyProjection / 7700).toFixed(1)} kg yağ yakabilirsiniz (sadece egzersizle, diyet değişikliği olmadan).`
                  : `1 kg of fat equals approximately 7,700 calories. By doing this activity 3 times per week, you could burn approximately ${(result.monthlyProjection / 7700).toFixed(1)} kg of fat per month (from exercise alone, without diet changes).`}
              </p>
            </div>
          </Card>

          {/* 5. Activity Comparison - Top Burners */}
          <Card>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-pink-500">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Aktivite Karşılaştırması' : 'Activity Comparison'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? `${duration} dakikada diğer aktiviteler`
                    : `Other activities in ${duration} minutes`}
                </p>
              </div>
            </div>

            {/* Current Activity Highlight */}
            <div className="mb-4 rounded-lg border-2 border-orange-300 bg-orange-50 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-500" />
                  <span className="font-semibold text-neutral-900">
                    {result.activityName[locale]}
                  </span>
                  <Badge variant="warning" size="sm">
                    {locale === 'tr' ? 'Seçiminiz' : 'Your Pick'}
                  </Badge>
                </div>
                <span className="font-bold text-orange-600">{result.totalCalories} kcal</span>
              </div>
            </div>

            {/* Top 5 Calorie Burners */}
            <div className="space-y-2">
              {topBurners.map((item, index) => {
                const percentage = result.totalCalories > 0
                  ? (item.calories / topBurners[0].calories) * 100
                  : 0;
                const isMore = item.calories > result.totalCalories;

                return (
                  <div key={item.activity.id} className="rounded-lg border border-neutral-200 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-xs font-bold text-neutral-600">
                          {index + 1}
                        </span>
                        <span className="text-sm font-medium text-neutral-800">
                          {item.activity.name[locale]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-900">{item.calories} kcal</span>
                        <span className={`text-xs font-medium ${isMore ? 'text-green-600' : 'text-red-500'}`}>
                          {isMore ? '+' : ''}{item.calories - result.totalCalories}
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: intensityInfo[item.activity.intensity].color,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Similar Activities */}
            {similarBurners.length > 0 && (
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-neutral-700">
                  {locale === 'tr' ? 'Benzer Kalori Yakımı' : 'Similar Calorie Burn'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {similarBurners.map((item) => (
                    <span
                      key={item.activity.id}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
                    >
                      {item.activity.name[locale]} ({item.calories} kcal)
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* 6. Time-Based Calorie Breakdown */}
          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Zamana Göre Kalori Yakımı' : 'Calorie Burn Over Time'}
              </h3>
              <p className="text-sm text-neutral-600">
                {locale === 'tr'
                  ? `${result.activityName[locale]} için tahmini kalori yakımı`
                  : `Estimated calorie burn for ${result.activityName[locale]}`}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[15, 30, 45, 60, 90, 120, 150, 180].map((mins) => {
                const cals = Math.round(result.caloriesPerMinute * mins);
                return (
                  <div
                    key={mins}
                    className={`rounded-lg border p-3 text-center transition-colors ${
                      mins === parseFloat(duration)
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                  >
                    <div className="text-xs text-neutral-500">
                      {mins} {locale === 'tr' ? 'dk' : 'min'}
                    </div>
                    <div className="text-lg font-bold text-neutral-900">{cals.toLocaleString()}</div>
                    <div className="text-xs text-neutral-400">kcal</div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* 7. Personalized Tips */}
          <Card>
            <div className="mb-4">
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Kişisel Öneriler' : 'Personalized Tips'}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Tip based on intensity */}
              {result.intensity === 'light' && (
                <div className="flex gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
                  <span className="text-xl">💡</span>
                  <div>
                    <p className="text-sm font-semibold text-blue-800">
                      {locale === 'tr' ? 'Yoğunluğu Artırın' : 'Increase Intensity'}
                    </p>
                    <p className="text-xs text-blue-700">
                      {locale === 'tr'
                        ? 'Hafif yoğunlukta bir aktivite yapıyorsunuz. Daha fazla kalori yakmak için hızınızı artırmayı veya daha yoğun bir aktivite denemeyi düşünün.'
                        : 'You are doing a light intensity activity. Consider increasing your pace or trying a more intense activity to burn more calories.'}
                    </p>
                  </div>
                </div>
              )}

              {result.intensity === 'very_vigorous' && (
                <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-3">
                  <span className="text-xl">⚠️</span>
                  <div>
                    <p className="text-sm font-semibold text-red-800">
                      {locale === 'tr' ? 'Dikkatli Olun' : 'Be Careful'}
                    </p>
                    <p className="text-xs text-red-700">
                      {locale === 'tr'
                        ? 'Çok yoğun bir aktivite yapıyorsunuz. Yeterli ısınma yapın, hidrasyonunuza dikkat edin ve vücudunuzun sinyallerini dinleyin.'
                        : 'You are doing a very vigorous activity. Make sure to warm up properly, stay hydrated, and listen to your body signals.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Duration-based tip */}
              {parseFloat(duration) < 20 && (
                <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="text-sm font-semibold text-amber-800">
                      {locale === 'tr' ? 'Süreyi Artırın' : 'Extend Duration'}
                    </p>
                    <p className="text-xs text-amber-700">
                      {locale === 'tr'
                        ? 'DSÖ haftada en az 150 dakika orta yoğunlukta aktivite önermektedir. Seans sürenizi kademeli olarak artırmayı deneyin.'
                        : 'WHO recommends at least 150 minutes of moderate activity per week. Try gradually increasing your session duration.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Calorie-based tip */}
              <div className="flex gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                <span className="text-xl">🎯</span>
                <div>
                  <p className="text-sm font-semibold text-green-800">
                    {locale === 'tr' ? 'Kilo Yönetimi' : 'Weight Management'}
                  </p>
                  <p className="text-xs text-green-700">
                    {locale === 'tr'
                      ? `Bu seansla ${result.totalCalories} kalori yaktınız. Haftada 0,5 kg vermek için günlük 550 kalorilik bir açık hedefleyin (diyet + egzersiz kombinasyonu ile).`
                      : `You burned ${result.totalCalories} calories in this session. To lose 0.5 kg per week, aim for a daily deficit of 550 calories (through a combination of diet + exercise).`}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default CaloriesBurnedCalculator;
