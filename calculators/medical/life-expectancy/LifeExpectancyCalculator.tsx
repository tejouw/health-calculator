'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Select } from '@/components/ui';
import { calculateLifeExpectancy, generateMilestones } from './lifeExpectancyLogic';
import type { LifeExpectancyInput, LifeExpectancyResult } from './lifeExpectancyTypes';
import { Heart, RotateCcw } from 'lucide-react';
import LifeExpectancyResultCard from './components/LifeExpectancyResult';
import CountdownCard from './components/CountdownCard';
import ImpactFactorsGrid from './components/ImpactFactorsGrid';
import ComparisonChart from './components/ComparisonChart';
import MilestoneTimeline from './components/MilestoneTimeline';
import ShareResultButton from './components/ShareResultButton';
import LongevitySecretsCard from './components/LongevitySecretsCard';
import ScientificFactsCard from './components/ScientificFactsCard';
import QuickWinsCard from './components/QuickWinsCard';

interface LifeExpectancyCalculatorProps {
  locale: 'en' | 'tr';
}

const LifeExpectancyCalculator: React.FC<LifeExpectancyCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  // Form state
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [smokingStatus, setSmokingStatus] = useState<'never' | 'former' | 'current'>('never');
  const [cigarettesPerDay, setCigarettesPerDay] = useState<string>('');
  const [yearsSmoked, setYearsSmoked] = useState<string>('');
  const [alcoholConsumption, setAlcoholConsumption] = useState<
    'none' | 'light' | 'moderate' | 'heavy'
  >('light');
  const [exerciseFrequency, setExerciseFrequency] = useState<
    'sedentary' | 'light' | 'moderate' | 'active' | 'very-active'
  >('moderate');
  const [bloodPressure, setBloodPressure] = useState<'normal' | 'elevated' | 'high'>('normal');
  const [hasDiabetes, setHasDiabetes] = useState(false);
  const [hasHeartDisease, setHasHeartDisease] = useState(false);
  const [hasCancer, setHasCancer] = useState(false);
  const [hasStroke, setHasStroke] = useState(false);
  const [motherAge, setMotherAge] = useState<string>('');
  const [fatherAge, setFatherAge] = useState<string>('');
  const [motherAlive, setMotherAlive] = useState(true);
  const [fatherAlive, setFatherAlive] = useState(true);
  const [sleepHours, setSleepHours] = useState<string>('7');
  const [stressLevel, setStressLevel] = useState<'low' | 'medium' | 'high'>('medium');
  const [socialConnections, setSocialConnections] = useState<'isolated' | 'some' | 'strong'>(
    'some'
  );
  const [dietQuality, setDietQuality] = useState<'poor' | 'fair' | 'good' | 'excellent'>('good');

  const [result, setResult] = useState<LifeExpectancyResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const sleepNum = parseFloat(sleepHours);

    if (!ageNum || ageNum < 18 || ageNum > 100) {
      setError(locale === 'tr' ? 'Lütfen 18-100 arası geçerli yaş girin' : 'Please enter valid age (18-100)');
      return;
    }

    if (!heightNum || heightNum < 100 || heightNum > 250) {
      setError(locale === 'tr' ? 'Lütfen geçerli boy girin (cm)' : 'Please enter valid height (cm)');
      return;
    }

    if (!weightNum || weightNum < 30 || weightNum > 300) {
      setError(locale === 'tr' ? 'Lütfen geçerli kilo girin (kg)' : 'Please enter valid weight (kg)');
      return;
    }

    const input: LifeExpectancyInput = {
      age: ageNum,
      gender,
      height: heightNum,
      weight: weightNum,
      smokingStatus,
      cigarettesPerDay: smokingStatus === 'current' ? parseInt(cigarettesPerDay) || 10 : undefined,
      yearsSmoked: smokingStatus === 'former' ? parseInt(yearsSmoked) || 5 : undefined,
      alcoholConsumption,
      exerciseFrequency,
      bloodPressure,
      hasDiabetes,
      hasHeartDisease,
      hasCancer,
      hasStroke,
      motherAge: motherAge ? parseInt(motherAge) : undefined,
      fatherAge: fatherAge ? parseInt(fatherAge) : undefined,
      motherAlive,
      fatherAlive,
      sleepHours: sleepNum,
      stressLevel,
      socialConnections,
      dietQuality,
    };

    const calculatedResult = calculateLifeExpectancy(input, locale);
    setResult(calculatedResult);
  };

  const handleReset = () => {
    setAge('');
    setHeight('');
    setWeight('');
    setSmokingStatus('never');
    setCigarettesPerDay('');
    setYearsSmoked('');
    setAlcoholConsumption('light');
    setExerciseFrequency('moderate');
    setBloodPressure('normal');
    setHasDiabetes(false);
    setHasHeartDisease(false);
    setHasCancer(false);
    setHasStroke(false);
    setMotherAge('');
    setFatherAge('');
    setMotherAlive(true);
    setFatherAlive(true);
    setSleepHours('7');
    setStressLevel('medium');
    setSocialConnections('some');
    setDietQuality('good');
    setResult(null);
    setError('');
  };

  const milestones = result ? generateMilestones(parseInt(age), result.lifeExpectancy, locale) : [];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yaşam Beklentisi Hesaplama' : 'Life Expectancy Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Ne kadar yaşayacağınızı öğrenin'
                : 'Discover how long you\'ll live'}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Demographics */}
          <div className="rounded-xl bg-neutral-50 p-4">
            <h3 className="mb-4 font-semibold text-neutral-900">
              {locale === 'tr' ? 'Temel Bilgiler' : 'Basic Information'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={locale === 'tr' ? 'Yaşınız' : 'Your Age'}
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="35"
                required
              />
              <RadioGroup
                label={locale === 'tr' ? 'Cinsiyet' : 'Gender'}
                name="gender"
                value={gender}
                onChange={(value) => setGender(value as 'male' | 'female')}
                options={[
                  { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                  { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
                ]}
                orientation="horizontal"
              />
              <Input
                label={locale === 'tr' ? 'Boy (cm)' : 'Height (cm)'}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="175"
                required
              />
              <Input
                label={locale === 'tr' ? 'Kilo (kg)' : 'Weight (kg)'}
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                required
              />
            </div>
          </div>

          {/* Lifestyle */}
          <div className="rounded-xl bg-neutral-50 p-4">
            <h3 className="mb-4 font-semibold text-neutral-900">
              {locale === 'tr' ? 'Yaşam Tarzı' : 'Lifestyle Factors'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label={locale === 'tr' ? 'Sigara Durumu' : 'Smoking Status'}
                value={smokingStatus}
                onChange={(e) => setSmokingStatus(e.target.value as any)}
                options={[
                  { value: 'never', label: locale === 'tr' ? 'Hiç içmedim' : 'Never smoked' },
                  { value: 'former', label: locale === 'tr' ? 'Bıraktım' : 'Former smoker' },
                  { value: 'current', label: locale === 'tr' ? 'Halen içiyorum' : 'Current smoker' },
                ]}
              />

              {smokingStatus === 'current' && (
                <Input
                  label={locale === 'tr' ? 'Günlük sigara sayısı' : 'Cigarettes per day'}
                  type="number"
                  value={cigarettesPerDay}
                  onChange={(e) => setCigarettesPerDay(e.target.value)}
                  placeholder="10"
                />
              )}

              {smokingStatus === 'former' && (
                <Input
                  label={locale === 'tr' ? 'Bırakalı kaç yıl oldu?' : 'Years since quitting'}
                  type="number"
                  value={yearsSmoked}
                  onChange={(e) => setYearsSmoked(e.target.value)}
                  placeholder="5"
                />
              )}

              <Select
                label={locale === 'tr' ? 'Alkol Tüketimi' : 'Alcohol Consumption'}
                value={alcoholConsumption}
                onChange={(e) => setAlcoholConsumption(e.target.value as any)}
                options={[
                  { value: 'none', label: locale === 'tr' ? 'Hiç' : 'None' },
                  { value: 'light', label: locale === 'tr' ? 'Az (1/gün)' : 'Light (1/day)' },
                  { value: 'moderate', label: locale === 'tr' ? 'Orta (2-3/gün)' : 'Moderate (2-3/day)' },
                  { value: 'heavy', label: locale === 'tr' ? 'Fazla (4+/gün)' : 'Heavy (4+/day)' },
                ]}
              />

              <Select
                label={locale === 'tr' ? 'Egzersiz Sıklığı' : 'Exercise Frequency'}
                value={exerciseFrequency}
                onChange={(e) => setExerciseFrequency(e.target.value as any)}
                options={[
                  { value: 'sedentary', label: locale === 'tr' ? 'Hareketsiz' : 'Sedentary' },
                  { value: 'light', label: locale === 'tr' ? 'Hafif' : 'Light' },
                  { value: 'moderate', label: locale === 'tr' ? 'Orta (150dk/hafta)' : 'Moderate (150min/wk)' },
                  { value: 'active', label: locale === 'tr' ? 'Aktif (300dk/hafta)' : 'Active (300min/wk)' },
                  { value: 'very-active', label: locale === 'tr' ? 'Çok aktif' : 'Very active' },
                ]}
              />

              <Input
                label={locale === 'tr' ? 'Günlük uyku (saat)' : 'Sleep hours per night'}
                type="number"
                step="0.5"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
                placeholder="7"
              />

              <Select
                label={locale === 'tr' ? 'Diyet Kalitesi' : 'Diet Quality'}
                value={dietQuality}
                onChange={(e) => setDietQuality(e.target.value as any)}
                options={[
                  { value: 'poor', label: locale === 'tr' ? 'Kötü' : 'Poor' },
                  { value: 'fair', label: locale === 'tr' ? 'Orta' : 'Fair' },
                  { value: 'good', label: locale === 'tr' ? 'İyi' : 'Good' },
                  { value: 'excellent', label: locale === 'tr' ? 'Mükemmel' : 'Excellent' },
                ]}
              />
            </div>
          </div>

          {/* Health Status */}
          <div className="rounded-xl bg-neutral-50 p-4">
            <h3 className="mb-4 font-semibold text-neutral-900">
              {locale === 'tr' ? 'Sağlık Durumu' : 'Health Status'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Select
                label={locale === 'tr' ? 'Kan Basıncı' : 'Blood Pressure'}
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value as any)}
                options={[
                  { value: 'normal', label: locale === 'tr' ? 'Normal' : 'Normal' },
                  { value: 'elevated', label: locale === 'tr' ? 'Yüksek' : 'Elevated' },
                  { value: 'high', label: locale === 'tr' ? 'Hipertansiyon' : 'High' },
                ]}
              />

              <Select
                label={locale === 'tr' ? 'Stres Seviyesi' : 'Stress Level'}
                value={stressLevel}
                onChange={(e) => setStressLevel(e.target.value as any)}
                options={[
                  { value: 'low', label: locale === 'tr' ? 'Düşük' : 'Low' },
                  { value: 'medium', label: locale === 'tr' ? 'Orta' : 'Medium' },
                  { value: 'high', label: locale === 'tr' ? 'Yüksek' : 'High' },
                ]}
              />

              <Select
                label={locale === 'tr' ? 'Sosyal Bağlantılar' : 'Social Connections'}
                value={socialConnections}
                onChange={(e) => setSocialConnections(e.target.value as any)}
                options={[
                  { value: 'isolated', label: locale === 'tr' ? 'İzole' : 'Isolated' },
                  { value: 'some', label: locale === 'tr' ? 'Orta' : 'Some' },
                  { value: 'strong', label: locale === 'tr' ? 'Güçlü' : 'Strong' },
                ]}
              />
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-neutral-700">
                {locale === 'tr' ? 'Kronik hastalıklar:' : 'Chronic conditions:'}
              </p>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasDiabetes}
                    onChange={(e) => setHasDiabetes(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">{locale === 'tr' ? 'Diyabet' : 'Diabetes'}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasHeartDisease}
                    onChange={(e) => setHasHeartDisease(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">{locale === 'tr' ? 'Kalp Hastalığı' : 'Heart Disease'}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasCancer}
                    onChange={(e) => setHasCancer(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">{locale === 'tr' ? 'Kanser' : 'Cancer'}</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasStroke}
                    onChange={(e) => setHasStroke(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm">{locale === 'tr' ? 'İnme Geçmişi' : 'Stroke History'}</span>
                </label>
              </div>
            </div>
          </div>

          {/* Family History */}
          <div className="rounded-xl bg-neutral-50 p-4">
            <h3 className="mb-4 font-semibold text-neutral-900">
              {locale === 'tr' ? 'Aile Geçmişi (Opsiyonel)' : 'Family History (Optional)'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={motherAlive}
                    onChange={(e) => setMotherAlive(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">
                    {locale === 'tr' ? 'Anne hayatta' : 'Mother alive'}
                  </span>
                </label>
                <Input
                  label={
                    motherAlive
                      ? locale === 'tr'
                        ? 'Anne yaşı'
                        : 'Mother\'s age'
                      : locale === 'tr'
                      ? 'Annenin vefat yaşı'
                      : 'Mother\'s age at death'
                  }
                  type="number"
                  value={motherAge}
                  onChange={(e) => setMotherAge(e.target.value)}
                  placeholder="75"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={fatherAlive}
                    onChange={(e) => setFatherAlive(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">
                    {locale === 'tr' ? 'Baba hayatta' : 'Father alive'}
                  </span>
                </label>
                <Input
                  label={
                    fatherAlive
                      ? locale === 'tr'
                        ? 'Baba yaşı'
                        : 'Father\'s age'
                      : locale === 'tr'
                      ? 'Babanın vefat yaşı'
                      : 'Father\'s age at death'
                  }
                  type="number"
                  value={fatherAge}
                  onChange={(e) => setFatherAge(e.target.value)}
                  placeholder="72"
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</div>
          )}

          <div className="flex gap-3">
            <Button onClick={handleCalculate} className="flex-1">
              {tCommon('calculate')}
            </Button>
            {result && (
              <Button onClick={handleReset} variant="outline" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                {tCommon('reset')}
              </Button>
            )}
          </div>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <LifeExpectancyResultCard result={result} locale={locale} />

          <div className="grid gap-6 lg:grid-cols-2">
            <CountdownCard
              yearsRemaining={result.yearsRemaining}
              monthsRemaining={result.monthsRemaining}
              daysRemaining={result.daysRemaining}
              locale={locale}
            />
            <ComparisonChart
              userLifeExpectancy={result.lifeExpectancy}
              averageLifeExpectancy={result.averageForDemographic}
              currentAge={parseInt(age)}
              locale={locale}
            />
          </div>

          <ImpactFactorsGrid impactFactors={result.impactFactors} locale={locale} />

          {/* Quick Wins - Actionable Steps */}
          <QuickWinsCard locale={locale} />

          {/* Scientific Facts - Educational & Engaging */}
          <ScientificFactsCard locale={locale} />

          {/* Longevity Secrets - Blue Zones */}
          <LongevitySecretsCard locale={locale} />

          {milestones.length > 0 && (
            <MilestoneTimeline
              milestones={milestones}
              currentAge={parseInt(age)}
              locale={locale}
            />
          )}

          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
            <ShareResultButton
              lifeExpectancy={result.lifeExpectancy}
              comparisonToAverage={result.comparisonToAverage}
              locale={locale}
            />
          </Card>

          <Card className="border-2 border-amber-200 bg-amber-50">
            <p className="text-center text-sm leading-relaxed text-amber-900">
              <strong>{locale === 'tr' ? '⚠️ Önemli Uyarı:' : '⚠️ Important Notice:'}</strong>{' '}
              {locale === 'tr'
                ? 'Bu hesaplama eğitim amaçlıdır ve tıbbi tavsiye değildir. Gerçek yaşam süreniz birçok faktöre bağlıdır ve bu tahminlerden önemli ölçüde farklı olabilir. Sağlık endişeleriniz için mutlaka bir sağlık uzmanına danışın.'
                : 'This calculation is for educational purposes and is not medical advice. Your actual lifespan depends on many factors and may differ significantly from this estimate. Always consult healthcare professionals for health concerns.'}
            </p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LifeExpectancyCalculator;
