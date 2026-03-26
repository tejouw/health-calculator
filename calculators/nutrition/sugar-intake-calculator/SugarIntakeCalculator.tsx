'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Select, RadioGroup } from '@/components/ui';
import { calculateSugarIntake, SUGAR_CATEGORIES, COMMON_FOOD_SUGAR } from './sugarIntakeLogic';
import {
  Gender,
  ActivityLevel,
  HealthCondition,
  SugarIntakeResult,
} from './sugarIntakeTypes';
import {
  CakeSlice,
  AlertTriangle,
  Info,
  Heart,
  TrendingDown,
  Apple,
  Lightbulb,
  Target,
  Calendar,
} from 'lucide-react';

interface SugarIntakeCalculatorProps {
  locale: 'en' | 'tr';
}

const SugarIntakeCalculator: React.FC<SugarIntakeCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<Gender>('male');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [healthCondition, setHealthCondition] = useState<HealthCondition>('none');
  const [result, setResult] = useState<SugarIntakeResult | null>(null);
  const [error, setError] = useState<string>('');

  const activityOptions = [
    { value: 'sedentary', label: locale === 'tr' ? 'Hareketsiz (masa başı iş)' : 'Sedentary (desk job)' },
    { value: 'light', label: locale === 'tr' ? 'Hafif aktif (haftada 1-3 gün)' : 'Lightly active (1-3 days/week)' },
    { value: 'moderate', label: locale === 'tr' ? 'Orta aktif (haftada 3-5 gün)' : 'Moderately active (3-5 days/week)' },
    { value: 'active', label: locale === 'tr' ? 'Aktif (haftada 6-7 gün)' : 'Active (6-7 days/week)' },
    { value: 'very_active', label: locale === 'tr' ? 'Çok aktif (günde 2 kez antrenman)' : 'Very active (2x training/day)' },
  ];

  const healthOptions = [
    { value: 'none', label: locale === 'tr' ? 'Yok / Sağlıklı' : 'None / Healthy' },
    { value: 'weight_loss', label: locale === 'tr' ? 'Kilo verme hedefi' : 'Weight loss goal' },
    { value: 'prediabetes', label: locale === 'tr' ? 'Prediyabet' : 'Prediabetes' },
    { value: 'diabetes', label: locale === 'tr' ? 'Diyabet (Tip 2)' : 'Diabetes (Type 2)' },
    { value: 'heart_disease', label: locale === 'tr' ? 'Kalp hastalığı' : 'Heart disease' },
  ];

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);

    if (!age || isNaN(ageNum) || ageNum < 2 || ageNum > 120) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (2-120)' : 'Please enter a valid age (2-120)');
      return;
    }

    if (!weight || isNaN(weightNum) || weightNum <= 0) {
      setError(
        locale === 'tr'
          ? `Lütfen geçerli bir kilo girin (${unit === 'metric' ? 'kg' : 'lbs'})`
          : `Please enter a valid weight (${unit === 'metric' ? 'kg' : 'lbs'})`
      );
      return;
    }

    const calcResult = calculateSugarIntake({
      age: ageNum,
      gender,
      weight: weightNum,
      unit,
      activityLevel,
      healthCondition,
    });

    setResult(calcResult);
  };

  const handleReset = () => {
    setAge('');
    setGender('male');
    setWeight('');
    setUnit('metric');
    setActivityLevel('moderate');
    setHealthCondition('none');
    setResult(null);
    setError('');
  };

  const categoryInfo = result ? SUGAR_CATEGORIES[result.category] : null;

  return (
    <div className="space-y-6">
      {/* Info Card */}
      <Card className="border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-950/30">
        <div className="flex items-start gap-3 p-4">
          <Info className="h-5 w-5 text-pink-600 dark:text-pink-400 mt-0.5 shrink-0" />
          <p className="text-sm text-pink-800 dark:text-pink-200">
            {locale === 'tr'
              ? 'Bu hesaplayıcı DSÖ ve AHA kılavuzlarına göre günlük eklenmiş şeker limitinizi hesaplar. Bütün meyvelerdeki doğal şekerler bu limite dahil değildir.'
              : 'This calculator determines your daily added sugar limit based on WHO and AHA guidelines. Natural sugars in whole fruits are not included in this limit.'}
          </p>
        </div>
      </Card>

      {/* Input Form */}
      <Card>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <CakeSlice className="h-5 w-5 text-pink-600" />
            <h3 className="font-semibold text-lg">
              {locale === 'tr' ? 'Kişisel Bilgileriniz' : 'Your Information'}
            </h3>
          </div>

          {/* Unit System */}
          <div>
            <label className="block text-sm font-medium mb-1.5">{t('unitSystem')}</label>
            <RadioGroup
              name="unit"
              value={unit}
              onChange={(val) => setUnit(val as 'metric' | 'imperial')}
              options={[
                { value: 'metric', label: t('metric') },
                { value: 'imperial', label: t('imperial') },
              ]}
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {locale === 'tr' ? 'Yaş' : 'Age'}
            </label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="2"
              max="120"
              placeholder={locale === 'tr' ? 'Yaşınızı girin' : 'Enter your age'}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {locale === 'tr' ? 'Cinsiyet' : 'Gender'}
            </label>
            <RadioGroup
              name="gender"
              value={gender}
              onChange={(val) => setGender(val as Gender)}
              options={[
                { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
              ]}
            />
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {t('weight')} ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="1"
              placeholder={unit === 'metric' ? '70' : '154'}
            />
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {locale === 'tr' ? 'Aktivite Düzeyi' : 'Activity Level'}
            </label>
            <Select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
              options={activityOptions}
            />
          </div>

          {/* Health Condition */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              {locale === 'tr' ? 'Sağlık Durumu' : 'Health Condition'}
            </label>
            <Select
              value={healthCondition}
              onChange={(e) => setHealthCondition(e.target.value as HealthCondition)}
              options={healthOptions}
            />
          </div>
        </div>
      </Card>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-destructive text-sm p-3 bg-destructive/10 rounded-lg">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Calculate & Reset Buttons */}
      <div className="flex gap-3">
        <Button onClick={handleCalculate} className="flex-1">
          {tCommon('calculate')}
        </Button>
        <Button onClick={handleReset} variant="outline">
          {tCommon('reset')}
        </Button>
      </div>

      {/* Results */}
      {result && categoryInfo && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Main Result Card */}
          <Card className="border-pink-300 dark:border-pink-700">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-pink-100 dark:bg-pink-900/30 mb-3">
                  <CakeSlice className="h-12 w-12 text-pink-600" />
                </div>
                <div className="text-4xl font-bold" style={{ color: categoryInfo.color }}>
                  {result.whoRecommendedMax}g
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {locale === 'tr' ? 'günlük maksimum eklenmiş şeker' : 'daily maximum added sugar'}
                </div>
                <div
                  className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ backgroundColor: categoryInfo.color }}
                >
                  {categoryInfo.label[locale]}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.teaspoonsMax}</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Çay kaşığı (maks.)' : 'Teaspoons (max)'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.whoIdealMax}g</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'İdeal limit' : 'Ideal limit'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.dailyCalories}</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Günlük kalori' : 'Daily calories'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.sugarCaloriesMax}</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Şeker kalori limiti' : 'Sugar calorie limit'}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Sugar Limit Visual Scale */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-pink-600" />
                {locale === 'tr' ? 'Şeker Limiti Ölçeği' : 'Sugar Limit Scale'}
              </h3>
              <div className="space-y-4">
                {/* Visual bar */}
                <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-green-500 via-yellow-500 to-red-500">
                  <div
                    className="absolute top-0 h-full w-1 bg-white border border-gray-800 dark:border-white shadow-lg"
                    style={{
                      left: `${Math.min((result.whoRecommendedMax / 75) * 100, 100)}%`,
                      transform: 'translateX(-50%)',
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0g</span>
                  <span>25g</span>
                  <span>50g</span>
                  <span>75g+</span>
                </div>

                {/* Comparison with guidelines */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="text-sm font-medium">
                      {locale === 'tr' ? 'DSÖ İdeal (%5)' : 'WHO Ideal (5%)'}
                    </span>
                    <span className="text-sm font-bold text-green-600">{result.whoIdealMax}g</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <span className="text-sm font-medium">
                      {locale === 'tr' ? 'DSÖ Maksimum (%10)' : 'WHO Maximum (10%)'}
                    </span>
                    <span className="text-sm font-bold text-yellow-600">{result.whoRecommendedMax}g</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <span className="text-sm font-medium">
                      {locale === 'tr' ? `AHA Limiti (${gender === 'male' ? 'Erkek' : 'Kadın'})` : `AHA Limit (${gender === 'male' ? 'Men' : 'Women'})`}
                    </span>
                    <span className="text-sm font-bold text-blue-600">{result.ahaRecommendedMax}g</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Food Sugar Comparisons */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Apple className="h-5 w-5 text-green-600" />
                {locale === 'tr' ? 'Yaygın Gıdalardaki Şeker Miktarı' : 'Sugar in Common Foods'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {locale === 'tr'
                  ? `Günlük limitiniz ${result.whoRecommendedMax}g — bu gıdalarla karşılaştırın:`
                  : `Your daily limit is ${result.whoRecommendedMax}g — compare with these foods:`}
              </p>
              <div className="space-y-2">
                {COMMON_FOOD_SUGAR.slice(0, 8).map((food, index) => {
                  const percentage = Math.round((food.sugarGrams / result.whoRecommendedMax) * 100);
                  const isOverLimit = percentage > 100;
                  return (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span className="text-lg">{food.icon}</span>
                          <span>{food.food[locale]}</span>
                        </span>
                        <span className={`font-medium ${isOverLimit ? 'text-red-600' : ''}`}>
                          {food.sugarGrams}g ({percentage}%)
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isOverLimit ? 'bg-red-500' : percentage > 50 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Weekly/Monthly Projections */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                {locale === 'tr' ? 'Haftalık ve Aylık Limitler' : 'Weekly & Monthly Limits'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{result.weeklyLimit}g</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {locale === 'tr' ? 'Haftalık limit' : 'Weekly limit'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ≈ {Math.round(result.weeklyLimit / 4)} {locale === 'tr' ? 'çay kaşığı' : 'teaspoons'}
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{result.monthlyLimit}g</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {locale === 'tr' ? 'Aylık limit' : 'Monthly limit'}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    ≈ {Math.round(result.monthlyLimit / 4)} {locale === 'tr' ? 'çay kaşığı' : 'teaspoons'}
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                {locale === 'tr'
                  ? 'Özel günlerde limiti aşarsanız, diğer günlerde dengeleyebilirsiniz.'
                  : 'If you exceed the limit on special occasions, you can balance it on other days.'}
              </p>
            </div>
          </Card>

          {/* Personalized Tips */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                {locale === 'tr' ? 'Kişiselleştirilmiş İpuçları' : 'Personalized Tips'}
              </h3>
              <div className="space-y-3">
                {result.tips.slice(0, 5).map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <TrendingDown className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <p className="text-sm">{tip[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Category Description */}
          <Card className="border-pink-200 dark:border-pink-800">
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                {locale === 'tr' ? 'Sizin İçin Ne Anlama Geliyor' : 'What This Means For You'}
              </h3>
              <p className="text-sm text-muted-foreground">{categoryInfo.description[locale]}</p>
            </div>
          </Card>

          {/* Health Disclaimer */}
          <Card className="border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30">
            <div className="p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-semibold mb-1">
                  {locale === 'tr' ? 'Sağlık Uyarısı' : 'Health Disclaimer'}
                </p>
                <p>
                  {locale === 'tr'
                    ? 'Bu hesaplayıcı genel beslenme rehberliği sağlar ve tıbbi tavsiye yerine geçmez. Diyabet veya diğer sağlık sorunlarınız varsa bir sağlık uzmanına danışın.'
                    : 'This calculator provides general nutritional guidance and is not a substitute for medical advice. If you have diabetes or other health conditions, consult a healthcare professional.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SugarIntakeCalculator;
