'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculateProtein,
  getProteinInterpretation,
  getProteinRecommendation,
  activityLevels,
  goals,
} from './proteinLogic';
import { ProteinInput, ActivityLevel, Goal } from './proteinTypes';
import { Beef, Activity, Target, Utensils, Sparkles, Clock, TrendingUp, BookOpen, HelpCircle, FileText, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';
import ProteinGuide from './components/ProteinGuide';
import { proteinContent } from './proteinContent';

interface ProteinCalculatorProps {
  locale: 'en' | 'tr';
}

const ProteinCalculator: React.FC<ProteinCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [result, setResult] = useState<ReturnType<typeof calculateProtein> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const weightNum = parseFloat(weight);

    if (!weightNum || weightNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight'
      );
      return;
    }

    if (unit === 'metric' && (weightNum < 30 || weightNum > 300)) {
      setError(
        locale === 'tr' ? 'Kilo 30-300 kg arasında olmalıdır' : 'Weight must be between 30-300 kg'
      );
      return;
    }

    if (unit === 'imperial' && (weightNum < 66 || weightNum > 660)) {
      setError(
        locale === 'tr'
          ? 'Kilo 66-660 lbs arasında olmalıdır'
          : 'Weight must be between 66-660 lbs'
      );
      return;
    }

    const input: ProteinInput = {
      weight: weightNum,
      unit,
      activityLevel,
      goal,
    };

    try {
      const proteinResult = calculateProtein(input);
      setResult(proteinResult);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen değerlerinizi kontrol edin.'
          : 'Calculation error. Please check your values.'
      );
    }
  };

  const handleReset = () => {
    setWeight('');
    setResult(null);
    setError('');
  };

  const activityOptions = [
    {
      value: 'sedentary',
      label: activityLevels.sedentary.label[locale],
      description: activityLevels.sedentary.description[locale],
    },
    {
      value: 'light',
      label: activityLevels.light.label[locale],
      description: activityLevels.light.description[locale],
    },
    {
      value: 'moderate',
      label: activityLevels.moderate.label[locale],
      description: activityLevels.moderate.description[locale],
    },
    {
      value: 'active',
      label: activityLevels.active.label[locale],
      description: activityLevels.active.description[locale],
    },
    {
      value: 'very_active',
      label: activityLevels.very_active.label[locale],
      description: activityLevels.very_active.description[locale],
    },
  ];

  const goalOptions = [
    {
      value: 'maintain',
      label: goals.maintain.label[locale],
      description: goals.maintain.description[locale],
    },
    {
      value: 'lose',
      label: goals.lose.label[locale],
      description: goals.lose.description[locale],
    },
    {
      value: 'gain',
      label: goals.gain.label[locale],
      description: goals.gain.description[locale],
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
            <Beef className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Protein Hesaplama' : 'Protein Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Günlük protein ihtiyacınızı hesaplayın'
                : 'Calculate your daily protein needs'}
            </p>
          </div>
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

        {/* Weight Input */}
        <div className="mb-6">
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
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Aktivite Seviyesi' : 'Activity Level'}
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activityOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActivityLevel(option.value as ActivityLevel)}
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

        {/* Goal Selection */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Hedefiniz' : 'Your Goal'}
          </label>
          <div className="grid gap-3 sm:grid-cols-3">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setGoal(option.value as Goal)}
                className={`rounded-lg border-2 p-4 text-center transition-all ${
                  goal === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <div className="text-base font-semibold text-neutral-900">{option.label}</div>
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
          {/* Daily Protein Target */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Günlük Protein Hedefi' : 'Daily Protein Target'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Target className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Hedef' : 'Target'}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-blue-600">
                  {result.dailyProtein.grams}
                  <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Günlük protein' : 'Daily protein'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Activity className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Kg başına' : 'Per kg'}</span>
                </div>
                <div className="mt-2 text-3xl font-bold text-indigo-600">
                  {result.dailyProtein.perKg}
                  <span className="ml-1 text-base font-normal text-neutral-600">g/kg</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {result.dailyProtein.perLb} g/lb
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <Beef className="h-4 w-4" />
                  <span>{locale === 'tr' ? 'Aralık' : 'Range'}</span>
                </div>
                <div className="mt-2 text-2xl font-bold text-purple-600">
                  {result.range.min}-{result.range.max}
                  <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                </div>
                <p className="mt-1 text-xs text-neutral-600">
                  {locale === 'tr' ? 'Önerilen aralık' : 'Recommended range'}
                </p>
              </div>
            </div>
          </Card>

          {/* Meals Breakdown */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Utensils className="h-5 w-5 text-neutral-700" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr' ? 'Öğün Dağılımı' : 'Meal Distribution'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(result.mealsBreakdown).map(([meal, grams]) => (
                <div key={meal} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <h4 className="mb-2 text-sm font-medium capitalize text-neutral-700">
                    {locale === 'tr'
                      ? meal === 'breakfast'
                        ? 'Kahvaltı'
                        : meal === 'lunch'
                          ? 'Öğle Yemeği'
                          : meal === 'dinner'
                            ? 'Akşam Yemeği'
                            : 'Atıştırmalıklar'
                      : meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </h4>
                  <div className="text-2xl font-bold text-blue-600">
                    {grams}
                    <span className="ml-1 text-base font-normal text-neutral-600">g</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${(grams / result.dailyProtein.grams) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Interpretation and Recommendation */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Yorumlama ve Öneriler' : 'Interpretation & Recommendations'}
            </h3>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
                <h4 className="mb-2 font-semibold text-blue-900">
                  {locale === 'tr' ? 'Durum' : 'Status'}
                </h4>
                <p className="text-sm text-blue-800">
                  {getProteinInterpretation(result.dailyProtein.perKg, activityLevel, goal, locale)}
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                <h4 className="mb-2 font-semibold text-green-900">
                  {locale === 'tr' ? 'Öneri' : 'Recommendation'}
                </h4>
                <p className="text-sm text-green-800">
                  {getProteinRecommendation(goal, locale)}
                </p>
              </div>
            </div>
          </Card>

          {/* Protein Sources Example */}
          <Card className="animate-slide-up bg-gradient-to-br from-neutral-50 to-white">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Örnek Protein Kaynakları' : 'Example Protein Sources'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: locale === 'tr' ? 'Tavuk Göğsü' : 'Chicken Breast',
                  amount: '100g',
                  protein: '31g',
                },
                { name: locale === 'tr' ? 'Yumurta' : 'Eggs', amount: '2 large', protein: '13g' },
                {
                  name: locale === 'tr' ? 'Yunan Yoğurdu' : 'Greek Yogurt',
                  amount: '170g',
                  protein: '17g',
                },
                { name: locale === 'tr' ? 'Somon' : 'Salmon', amount: '100g', protein: '25g' },
                {
                  name: locale === 'tr' ? 'Lor Peyniri' : 'Cottage Cheese',
                  amount: '100g',
                  protein: '11g',
                },
                { name: locale === 'tr' ? 'Tofu' : 'Tofu', amount: '100g', protein: '8g' },
              ].map((source, index) => (
                <div key={index} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="text-sm font-semibold text-neutral-900">{source.name}</div>
                  <div className="mt-1 flex items-center justify-between text-xs text-neutral-600">
                    <span>{source.amount}</span>
                    <Badge variant="primary" size="sm">
                      {source.protein}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Protein Guide */}
          <ProteinGuide dailyProtein={result.dailyProtein.grams} locale={locale} />

          {/* Interactive Cards - Layer 1 */}
          {/* Protein Benefits */}
          <Card className="animate-slide-up bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '✨ Proteinin Faydaları' : '✨ Benefits of Protein'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '💪', title: locale === 'tr' ? 'Kas Gelişimi' : 'Muscle Growth', desc: locale === 'tr' ? 'Kas protein sentezini destekler' : 'Supports muscle protein synthesis' },
                { icon: '🔥', title: locale === 'tr' ? 'Metabolizma' : 'Metabolism', desc: locale === 'tr' ? 'Yüksek termik etki (%20-30)' : 'High thermic effect (20-30%)' },
                { icon: '🍽️', title: locale === 'tr' ? 'Tokluk Hissi' : 'Satiety', desc: locale === 'tr' ? 'Uzun süre tok tutar' : 'Keeps you full longer' },
                { icon: '🦴', title: locale === 'tr' ? 'Kemik Sağlığı' : 'Bone Health', desc: locale === 'tr' ? 'Kemik yoğunluğunu korur' : 'Maintains bone density' },
                { icon: '🏃', title: locale === 'tr' ? 'Toparlanma' : 'Recovery', desc: locale === 'tr' ? 'Egzersiz sonrası onarım' : 'Post-exercise repair' },
                { icon: '🛡️', title: locale === 'tr' ? 'Bağışıklık' : 'Immunity', desc: locale === 'tr' ? 'Antikor üretimini destekler' : 'Supports antibody production' },
              ].map((benefit, index) => (
                <div key={index} className="bg-white/80 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h4 className="font-semibold text-neutral-900 mb-1 text-sm">{benefit.title}</h4>
                  <p className="text-xs text-neutral-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Protein Timing */}
          <Card className="animate-slide-up border-l-4 border-l-green-500 bg-green-50">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '⏰ Protein Zamanlaması' : '⏰ Protein Timing'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-2">🌅</div>
                <h4 className="font-semibold text-green-900 mb-1">{locale === 'tr' ? 'Sabah' : 'Morning'}</h4>
                <p className="text-sm text-green-800">{locale === 'tr' ? '20-30g kahvaltıda' : '20-30g at breakfast'}</p>
                <p className="text-xs text-green-700 mt-1">{locale === 'tr' ? 'Metabolizmayı başlatır' : 'Kickstarts metabolism'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-2">💪</div>
                <h4 className="font-semibold text-green-900 mb-1">{locale === 'tr' ? 'Antrenman Sonrası' : 'Post-Workout'}</h4>
                <p className="text-sm text-green-800">{locale === 'tr' ? '2 saat içinde 30-40g' : '30-40g within 2 hours'}</p>
                <p className="text-xs text-green-700 mt-1">{locale === 'tr' ? 'Kas onarımı için kritik' : 'Critical for muscle repair'}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl mb-2">🌙</div>
                <h4 className="font-semibold text-green-900 mb-1">{locale === 'tr' ? 'Gece' : 'Bedtime'}</h4>
                <p className="text-sm text-green-800">{locale === 'tr' ? '20-30g kazeyin proteni' : '20-30g casein protein'}</p>
                <p className="text-xs text-green-700 mt-1">{locale === 'tr' ? 'Gece boyu kas koruması' : 'Overnight muscle protection'}</p>
              </div>
            </div>
          </Card>

          {/* High Protein Foods */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <Beef className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '🥩 Yüksek Proteinli Gıdalar' : '🥩 High-Protein Foods'}
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { category: locale === 'tr' ? '🐔 Hayvansal' : '🐔 Animal', items: [locale === 'tr' ? 'Tavuk: 31g/100g' : 'Chicken: 31g/100g', locale === 'tr' ? 'Sığır: 26g/100g' : 'Beef: 26g/100g', locale === 'tr' ? 'Somon: 25g/100g' : 'Salmon: 25g/100g'] },
                { category: locale === 'tr' ? '🥚 Süt Ürünleri' : '🥚 Dairy', items: [locale === 'tr' ? 'Yumurta: 13g/2 adet' : 'Eggs: 13g/2 large', locale === 'tr' ? 'Yunan Yoğurdu: 17g/170g' : 'Greek Yogurt: 17g/170g', locale === 'tr' ? 'Lor: 11g/100g' : 'Cottage Cheese: 11g/100g'] },
                { category: locale === 'tr' ? '🌱 Bitkisel' : '🌱 Plant-Based', items: [locale === 'tr' ? 'Tofu: 8g/100g' : 'Tofu: 8g/100g', locale === 'tr' ? 'Mercimek: 9g/100g' : 'Lentils: 9g/100g', locale === 'tr' ? 'Nohut: 8.9g/100g' : 'Chickpeas: 8.9g/100g'] },
                { category: locale === 'tr' ? '💊 Supplement' : '💊 Supplements', items: [locale === 'tr' ? 'Whey: 25g/scoop' : 'Whey: 25g/scoop', locale === 'tr' ? 'Kazeyin: 24g/scoop' : 'Casein: 24g/scoop', locale === 'tr' ? 'Bitkisel: 20g/scoop' : 'Plant: 20g/scoop'] },
              ].map((group, index) => (
                <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-neutral-900 mb-3">{group.category}</h4>
                  <ul className="space-y-1">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-xs text-neutral-700 flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Tips */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '⚡ Protein İpuçları' : '⚡ Protein Tips'}
              </h3>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {proteinContent[locale].tips?.slice(0, 6).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 bg-white/80 p-3 rounded-lg backdrop-blur">
                  <TrendingUp className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{tip}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* SEO Content - Layer 2 */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '📚 Detaylı Bilgiler' : '📚 Detailed Information'}
              </h3>
            </div>
            <div className="space-y-3">
              {/* What is Protein */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🔍 Protein Nedir?' : '🔍 What is Protein?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{proteinContent[locale].whatIs}</p>
                </div>
              </details>

              {/* How to Calculate */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '🧮 Nasıl Hesaplanır?' : '🧮 How to Calculate?'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <div className="bg-neutral-50 p-3 rounded mb-3 font-mono text-xs">
                    {locale === 'tr' ? 'Günlük Protein (g) = Kilo (kg) × Aktivite × Hedef' : 'Daily Protein (g) = Weight (kg) × Activity × Goal'}
                    <br />
                    {locale === 'tr' ? 'Örnek: 70kg × 1.4 × 1.0 = 98g/gün' : 'Example: 70kg × 1.4 × 1.0 = 98g/day'}
                  </div>
                  <p>{proteinContent[locale].howToCalculate}</p>
                </div>
              </details>

              {/* Formula Details */}
              <details className="group border border-neutral-200 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-neutral-50">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? '📐 Formül Detayları' : '📐 Formula Details'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                  <p>{proteinContent[locale].formulaDetails}</p>
                </div>
              </details>

              {/* Categories */}
              <details className="group border border-neutral-200 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-blue-100">
                  <span className="font-semibold text-blue-900">
                    {locale === 'tr' ? '📋 Protein Kategorileri' : '📋 Protein Categories'}
                  </span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="p-4 pt-0 border-t border-blue-200">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {proteinContent[locale].categories?.map((cat, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg" style={{ borderLeft: `4px solid ${cat.color}` }}>
                        <h4 className="font-semibold text-neutral-900 mb-1 text-sm">{cat.label}</h4>
                        <p className="text-xs text-neutral-600 mb-2">{cat.range}</p>
                        <p className="text-xs text-neutral-700">{cat.description}</p>
                      </div>
                    ))}
                  </div>
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
                  <p>{proteinContent[locale].interpretation}</p>
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
                  <p>{proteinContent[locale].limitations}</p>
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
                  <p>{proteinContent[locale].medicalDisclaimer}</p>
                </div>
              </details>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? '❓ Sıkça Sorulan Sorular' : '❓ FAQ'}
              </h3>
            </div>
            <div className="space-y-3">
              {proteinContent[locale].faqs?.map((faq, index) => (
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
                {proteinContent[locale].references?.map((ref, index) => (
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

export default ProteinCalculator;
