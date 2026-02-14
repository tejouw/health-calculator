'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import {
  calculateFastingSchedule,
  protocolsData,
  getDifficultyColor,
  isWeeklyProtocol,
} from './fastingLogic';
import { FastingInput, FastingProtocol, FastingResult } from './fastingTypes';
import { Clock, Calendar, Moon, Sun, TrendingUp } from 'lucide-react';
import FastingScheduleVisual from './components/FastingScheduleVisual';
import ProtocolComparison from './components/ProtocolComparison';
import FastingBenefits from './components/FastingBenefits';
import MealTimingCard from './components/MealTimingCard';
import FastingTimeline from './components/FastingTimeline';
import MetabolicStateIndicator from './components/MetabolicStateIndicator';
import PersonalizedInsights from './components/PersonalizedInsights';
import WeekByWeekGuide from './components/WeekByWeekGuide';
import FoodSuggestions from './components/FoodSuggestions';
import CommonMistakes from './components/CommonMistakes';
import ScientificEvidence from './components/ScientificEvidence';

interface IntermittentFastingCalculatorProps {
  locale: 'en' | 'tr';
}

const IntermittentFastingCalculator: React.FC<IntermittentFastingCalculatorProps> = ({
  locale,
}) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [protocol, setProtocol] = useState<FastingProtocol>('16:8');
  const [wakeUpTime, setWakeUpTime] = useState<string>('07:00');
  const [bedTime, setBedTime] = useState<string>('23:00');
  const [customFastHours, setCustomFastHours] = useState<string>('16');
  const [customEatHours, setCustomEatHours] = useState<string>('8');

  // New personalization fields
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<string>('beginner');
  const [goals, setGoals] = useState<string[]>([]);

  const [result, setResult] = useState<FastingResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!wakeUpTime || !bedTime) {
      setError(
        locale === 'tr' ? 'Lütfen uyanma ve yatma saatini doldurun' : 'Please fill wake up and bedtime'
      );
      return;
    }

    const input: FastingInput = {
      protocol,
      wakeUpTime,
      bedTime,
      customFastHours: protocol === 'custom' ? parseInt(customFastHours) : undefined,
      customEatHours: protocol === 'custom' ? parseInt(customEatHours) : undefined,
      // New personalization parameters
      age: age ? parseInt(age) : undefined,
      gender: gender as any,
      weight: weight ? parseFloat(weight) : undefined,
      height: height ? parseFloat(height) : undefined,
      activityLevel: activityLevel as any,
      experienceLevel: experienceLevel as any,
      goals: goals as any[],
    };

    const calculation = calculateFastingSchedule(input);
    setResult(calculation);
  };

  const handleReset = () => {
    setProtocol('16:8');
    setWakeUpTime('07:00');
    setBedTime('23:00');
    setCustomFastHours('16');
    setCustomEatHours('8');
    setAge('');
    setGender('');
    setWeight('');
    setHeight('');
    setActivityLevel('');
    setExperienceLevel('beginner');
    setGoals([]);
    setResult(null);
    setError('');
  };

  const protocolOptions = [
    { value: '16:8', label: '16:8', description: locale === 'tr' ? 'Yeni Başlayanlar' : 'Beginner' },
    { value: '18:6', label: '18:6', description: locale === 'tr' ? 'Orta Seviye' : 'Intermediate' },
    { value: '20:4', label: '20:4', description: locale === 'tr' ? 'Savaşçı' : 'Warrior' },
    { value: 'omad', label: 'OMAD', description: locale === 'tr' ? 'Uzman' : 'Expert' },
    { value: '5:2', label: '5:2', description: locale === 'tr' ? 'Haftalık' : 'Weekly' },
    {
      value: 'alternate-day',
      label: locale === 'tr' ? 'Alternatif Gün' : 'Alternate Day',
      description: locale === 'tr' ? 'İleri' : 'Advanced',
    },
    {
      value: 'custom',
      label: locale === 'tr' ? 'Özel' : 'Custom',
      description: locale === 'tr' ? 'Kendi Planın' : 'Your Plan',
    },
  ];

  const currentProtocolInfo = protocolsData[protocol];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Aralıklı Oruç Hesaplayıcı' : 'Intermittent Fasting Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Kişisel oruç programınızı oluşturun'
                : 'Create your personalized fasting schedule'}
            </p>
          </div>
        </div>

        {/* Protocol Selection */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-900">
            {locale === 'tr' ? 'Oruç Protokolü' : 'Fasting Protocol'}
          </label>
          <Select
            value={protocol}
            onChange={(value) => setProtocol(value as unknown as FastingProtocol)}
            options={protocolOptions}
          />
        </div>

        {/* Protocol Info Card */}
        <div className="mb-6 rounded-lg border-2 border-purple-100 bg-purple-50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold text-purple-900">
              {currentProtocolInfo.name[locale]}
            </h3>
            <Badge
              variant={
                currentProtocolInfo.difficulty === 'beginner'
                  ? 'success'
                  : currentProtocolInfo.difficulty === 'intermediate'
                    ? 'warning'
                    : 'danger'
              }
            >
              {locale === 'tr'
                ? currentProtocolInfo.difficulty === 'beginner'
                  ? 'Başlangıç'
                  : currentProtocolInfo.difficulty === 'intermediate'
                    ? 'Orta'
                    : 'İleri'
                : currentProtocolInfo.difficulty === 'beginner'
                  ? 'Beginner'
                  : currentProtocolInfo.difficulty === 'intermediate'
                    ? 'Intermediate'
                    : 'Advanced'}
            </Badge>
          </div>
          <p className="text-sm text-purple-800">{currentProtocolInfo.description[locale]}</p>
          {currentProtocolInfo.weeklyPattern && (
            <p className="mt-2 text-xs text-purple-700">
              📅 {currentProtocolInfo.weeklyPattern[locale]}
            </p>
          )}
        </div>

        {/* Custom Protocol Inputs */}
        {protocol === 'custom' && (
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <Input
              label={locale === 'tr' ? 'Oruç Saatleri' : 'Fasting Hours'}
              type="number"
              value={customFastHours}
              onChange={(e) => setCustomFastHours(e.target.value)}
              min="12"
              max="23"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'saat' : 'hours'}</span>}
            />
            <Input
              label={locale === 'tr' ? 'Yemek Penceresi Saatleri' : 'Eating Window Hours'}
              type="number"
              value={customEatHours}
              onChange={(e) => setCustomEatHours(e.target.value)}
              min="1"
              max="12"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'saat' : 'hours'}</span>}
            />
          </div>
        )}

        {/* Time Inputs */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Uyanma Saati' : 'Wake Up Time'}
            type="time"
            value={wakeUpTime}
            onChange={(e) => setWakeUpTime(e.target.value)}
            leftIcon={<Sun className="h-4 w-4 text-yellow-500" />}
            required
          />
          <Input
            label={locale === 'tr' ? 'Yatma Saati' : 'Bedtime'}
            type="time"
            value={bedTime}
            onChange={(e) => setBedTime(e.target.value)}
            leftIcon={<Moon className="h-4 w-4 text-indigo-500" />}
            required
          />
        </div>

        {/* Personalization Section */}
        <div className="my-6 border-t-2 border-neutral-100 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {locale === 'tr'
              ? '📊 Kişiselleştirme (Opsiyonel - Daha İyi Öneriler İçin)'
              : '📊 Personalization (Optional - For Better Recommendations)'}
          </h3>

          {/* Age, Gender, Experience */}
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            <Input
              label={locale === 'tr' ? 'Yaş' : 'Age'}
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder={locale === 'tr' ? 'Ör: 30' : 'e.g., 30'}
              min="18"
              max="100"
            />
            <Select
              label={locale === 'tr' ? 'Cinsiyet' : 'Gender'}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              options={[
                { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
                { value: 'other', label: locale === 'tr' ? 'Diğer' : 'Other' },
              ]}
            />
            <Select
              label={locale === 'tr' ? 'Deneyim Seviyesi' : 'Experience Level'}
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              options={[
                {
                  value: 'beginner',
                  label: locale === 'tr' ? 'Yeni Başlayan' : 'Beginner',
                },
                {
                  value: 'intermediate',
                  label: locale === 'tr' ? 'Orta Seviye' : 'Intermediate',
                },
                {
                  value: 'advanced',
                  label: locale === 'tr' ? 'İleri Seviye' : 'Advanced',
                },
              ]}
            />
          </div>

          {/* Weight, Height, Activity Level */}
          <div className="mb-4 grid gap-4 sm:grid-cols-3">
            <Input
              label={locale === 'tr' ? 'Kilo (kg)' : 'Weight (kg)'}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={locale === 'tr' ? 'Ör: 75' : 'e.g., 75'}
              min="30"
              max="300"
              step="0.1"
            />
            <Input
              label={locale === 'tr' ? 'Boy (cm)' : 'Height (cm)'}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder={locale === 'tr' ? 'Ör: 175' : 'e.g., 175'}
              min="100"
              max="250"
            />
            <Select
              label={locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              options={[
                { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                {
                  value: 'sedentary',
                  label: locale === 'tr' ? 'Hareketsiz' : 'Sedentary',
                },
                {
                  value: 'light',
                  label: locale === 'tr' ? 'Hafif (1-3/hafta)' : 'Light (1-3/week)',
                },
                {
                  value: 'moderate',
                  label: locale === 'tr' ? 'Orta (3-5/hafta)' : 'Moderate (3-5/week)',
                },
                {
                  value: 'active',
                  label: locale === 'tr' ? 'Aktif (6-7/hafta)' : 'Active (6-7/week)',
                },
                {
                  value: 'very-active',
                  label: locale === 'tr' ? 'Çok Aktif (2x/gün)' : 'Very Active (2x/day)',
                },
              ]}
            />
          </div>

          {/* Goals - Multi-select */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-900">
              {locale === 'tr' ? 'Hedefleriniz (Birden fazla seçebilirsiniz)' : 'Your Goals (Select multiple)'}
            </label>
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                { value: 'weight-loss', label: locale === 'tr' ? '📉 Kilo Kaybı' : '📉 Weight Loss' },
                { value: 'autophagy', label: locale === 'tr' ? '🔬 Otofaji/Sağlık' : '🔬 Autophagy/Health' },
                { value: 'mental-clarity', label: locale === 'tr' ? '🧠 Zihinsel Berraklık' : '🧠 Mental Clarity' },
                {
                  value: 'metabolic-health',
                  label: locale === 'tr' ? '💪 Metabolik Sağlık' : '💪 Metabolic Health',
                },
                { value: 'muscle-gain', label: locale === 'tr' ? '🏋️ Kas Kazanımı' : '🏋️ Muscle Gain' },
                { value: 'longevity', label: locale === 'tr' ? '🌟 Uzun Ömür' : '🌟 Longevity' },
              ].map((goal) => (
                <label
                  key={goal.value}
                  className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 p-3 transition-all ${
                    goals.includes(goal.value)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-neutral-200 bg-white hover:border-purple-200'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={goals.includes(goal.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGoals([...goals, goal.value]);
                      } else {
                        setGoals(goals.filter((g) => g !== goal.value));
                      }
                    }}
                    className="h-4 w-4 text-purple-600"
                  />
                  <span className="text-sm font-medium text-neutral-900">{goal.label}</span>
                </label>
              ))}
            </div>
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
        <>
          {/* Metabolic State Indicator - NEW */}
          <MetabolicStateIndicator fastDuration={result.window.fastDuration} locale={locale} />

          {/* Fasting Schedule Visual */}
          <FastingScheduleVisual
            window={result.window}
            protocol={result.protocol}
            locale={locale}
          />

          {/* Meal Timing Card */}
          {!isWeeklyProtocol(result.protocol) && result.mealTimings.length > 0 && (
            <MealTimingCard mealTimings={result.mealTimings} locale={locale} />
          )}

          {/* Key Metrics */}
          <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50">
            <h3 className="mb-4 text-lg font-bold text-purple-900">
              {locale === 'tr' ? '🎯 Önemli Bilgiler' : '🎯 Key Insights'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-1 text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Oruç Süresi' : 'Fasting Duration'}
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {result.window.fastDuration}h
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-1 text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Yemek Penceresi' : 'Eating Window'}
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {result.window.eatDuration}h
                </div>
              </div>
              {result.autophagyWindow && (
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm font-medium text-neutral-600">
                    {locale === 'tr' ? 'Otofaji Başlangıcı' : 'Autophagy Starts'}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {result.autophagyWindow.start}h
                  </div>
                </div>
              )}
              {result.bmi && (
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm font-medium text-neutral-600">
                    {locale === 'tr' ? 'BMI' : 'BMI'}
                  </div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {result.bmi.toFixed(1)}
                  </div>
                </div>
              )}
              {result.estimatedCalories && (
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm font-medium text-neutral-600">
                    {locale === 'tr' ? 'Günlük Kalori İhtiyacı' : 'Daily Calories'}
                  </div>
                  <div className="text-2xl font-bold text-orange-600">
                    {result.estimatedCalories}
                  </div>
                </div>
              )}
              {result.idealProteinGrams && (
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm font-medium text-neutral-600">
                    {locale === 'tr' ? 'Günlük Protein (g)' : 'Daily Protein (g)'}
                  </div>
                  <div className="text-2xl font-bold text-pink-600">
                    {result.idealProteinGrams}g
                  </div>
                </div>
              )}
            </div>

            {/* Recommendations */}
            <div className="mt-6 border-t border-purple-200 pt-6">
              <h4 className="mb-3 font-semibold text-purple-900">
                {locale === 'tr' ? '💡 Öneriler' : '💡 Recommendations'}
              </h4>
              <ul className="space-y-2">
                {result.recommendations[locale].map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-0.5 text-purple-600">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hydration Tips */}
            <div className="mt-6 border-t border-purple-200 pt-6">
              <h4 className="mb-3 font-semibold text-purple-900">
                {locale === 'tr' ? '💧 Hidrasyon İpuçları' : '💧 Hydration Tips'}
              </h4>
              <ul className="space-y-2">
                {result.hydrationTips[locale].map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-0.5 text-blue-500">→</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Fasting Benefits */}
          <FastingBenefits
            protocol={result.protocol}
            fastDuration={result.window.fastDuration}
            locale={locale}
          />

          {/* Protocol Comparison */}
          <ProtocolComparison currentProtocol={result.protocol} locale={locale} />

          {/* NEW COMPONENTS */}

          {/* Personalized Insights - NEW */}
          {result.personalizedInsights && result.personalizedInsights.length > 0 && (
            <PersonalizedInsights insights={result.personalizedInsights} locale={locale} />
          )}

          {/* Fasting Timeline - NEW */}
          {result.timeline && result.timeline.length > 0 && (
            <FastingTimeline timeline={result.timeline} locale={locale} />
          )}

          {/* Food Suggestions - NEW */}
          {result.foodSuggestions && result.foodSuggestions.length > 0 && (
            <FoodSuggestions suggestions={result.foodSuggestions} locale={locale} />
          )}

          {/* Week by Week Guide - NEW */}
          <WeekByWeekGuide locale={locale} />

          {/* Common Mistakes - NEW */}
          <CommonMistakes locale={locale} />

          {/* Scientific Evidence - NEW */}
          <ScientificEvidence locale={locale} />
        </>
      )}
    </div>
  );
};

export default IntermittentFastingCalculator;
