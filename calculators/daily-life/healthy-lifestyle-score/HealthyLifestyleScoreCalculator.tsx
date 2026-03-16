'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, Select, RadioGroup } from '@/components/ui';
import { calculateLifestyleScore } from './healthyLifestyleScoreLogic';
import {
  LifestyleInput,
  LifestyleResult,
  exerciseFrequencyOptions,
  exerciseDurationOptions,
  sleepHoursOptions,
  waterIntakeOptions,
  fruitVegOptions,
  smokingOptions,
  alcoholOptions,
  screenTimeOptions,
  stressOptions,
  socialOptions,
} from './healthyLifestyleScoreTypes';
import {
  Leaf,
  Dumbbell,
  Moon,
  Droplets,
  Apple,
  Cigarette,
  Wine,
  Monitor,
  Brain,
  Users,
  TrendingUp,
  Star,
  AlertTriangle,
  Heart,
  Info,
} from 'lucide-react';

interface HealthyLifestyleScoreCalculatorProps {
  locale: 'en' | 'tr';
}

const HealthyLifestyleScoreCalculator: React.FC<HealthyLifestyleScoreCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [exerciseFreq, setExerciseFreq] = useState<string>('');
  const [exerciseDur, setExerciseDur] = useState<string>('');
  const [sleepHours, setSleepHours] = useState<string>('');
  const [waterIntake, setWaterIntake] = useState<string>('');
  const [fruitVeg, setFruitVeg] = useState<string>('');
  const [smoking, setSmoking] = useState<string>('');
  const [alcohol, setAlcohol] = useState<string>('');
  const [screenTime, setScreenTime] = useState<string>('');
  const [stress, setStress] = useState<string>('');
  const [social, setSocial] = useState<string>('');
  const [result, setResult] = useState<LifestyleResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!exerciseFreq || !sleepHours || !waterIntake || !fruitVeg || !smoking || !alcohol || !screenTime || !stress || !social) {
      setError(locale === 'tr' ? 'Lütfen tüm alanları doldurun' : 'Please fill in all fields');
      return;
    }

    // If exercise frequency is 0, duration doesn't matter
    const freq = parseInt(exerciseFreq);
    if (freq > 0 && !exerciseDur) {
      setError(locale === 'tr' ? 'Lütfen egzersiz süresini seçin' : 'Please select exercise duration');
      return;
    }

    const input: LifestyleInput = {
      exerciseFrequency: freq,
      exerciseDuration: freq === 0 ? 0 : parseInt(exerciseDur),
      sleepHours: parseInt(sleepHours),
      waterIntake: parseInt(waterIntake),
      fruitVegServings: parseInt(fruitVeg),
      smokingStatus: smoking as 'never' | 'former' | 'current',
      alcoholFrequency: parseInt(alcohol),
      screenTime: parseInt(screenTime),
      stressLevel: stress as 'low' | 'moderate' | 'high',
      socialActivity: parseInt(social),
    };

    const calcResult = calculateLifestyleScore(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setExerciseFreq('');
    setExerciseDur('');
    setSleepHours('');
    setWaterIntake('');
    setFruitVeg('');
    setSmoking('');
    setAlcohol('');
    setScreenTime('');
    setStress('');
    setSocial('');
    setResult(null);
    setError('');
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-600';
    if (score >= 75) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-amber-600';
    if (score >= 20) return 'text-orange-600';
    return 'text-red-600';
  };

  const getBarWidth = (score: number, max: number) => {
    return `${(score / max) * 100}%`;
  };

  const getBarColor = (score: number) => {
    if (score >= 8) return 'bg-emerald-500';
    if (score >= 6) return 'bg-blue-500';
    if (score >= 4) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    exercise: <Dumbbell className="h-4 w-4" />,
    sleep: <Moon className="h-4 w-4" />,
    water: <Droplets className="h-4 w-4" />,
    nutrition: <Apple className="h-4 w-4" />,
    smoking: <Cigarette className="h-4 w-4" />,
    alcohol: <Wine className="h-4 w-4" />,
    screen: <Monitor className="h-4 w-4" />,
    stress: <Brain className="h-4 w-4" />,
    social: <Users className="h-4 w-4" />,
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Sağlıklı Yaşam Puanı' : 'Healthy Lifestyle Score'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? '9 farklı alanda yaşam tarzınızı değerlendirin'
                : 'Evaluate your lifestyle across 9 different areas'}
            </p>
          </div>
        </div>

        {/* Exercise Section */}
        <div className="space-y-5">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Fiziksel Aktivite' : 'Physical Activity'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select
                label={locale === 'tr' ? 'Egzersiz sıklığı' : 'Exercise frequency'}
                value={exerciseFreq}
                onChange={(e) => {
                  setExerciseFreq(e.target.value);
                  if (e.target.value === '0') setExerciseDur('0');
                }}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  ...exerciseFrequencyOptions[locale],
                ]}
              />
              {exerciseFreq && exerciseFreq !== '0' && (
                <Select
                  label={locale === 'tr' ? 'Seans süresi' : 'Session duration'}
                  value={exerciseDur}
                  onChange={(e) => setExerciseDur(e.target.value)}
                  options={[
                    { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                    ...exerciseDurationOptions[locale],
                  ]}
                />
              )}
            </div>
          </div>

          {/* Sleep */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Moon className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Uyku' : 'Sleep'}
              </h3>
            </div>
            <Select
              label={locale === 'tr' ? 'Gecede ortalama uyku süresi' : 'Average sleep per night'}
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              options={[
                { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                ...sleepHoursOptions[locale],
              ]}
            />
          </div>

          {/* Nutrition & Hydration */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Apple className="h-5 w-5 text-green-600" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Beslenme ve Su Tüketimi' : 'Nutrition & Hydration'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select
                label={locale === 'tr' ? 'Meyve ve sebze tüketimi' : 'Fruit & vegetable intake'}
                value={fruitVeg}
                onChange={(e) => setFruitVeg(e.target.value)}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  ...fruitVegOptions[locale],
                ]}
              />
              <Select
                label={locale === 'tr' ? 'Günlük su tüketimi' : 'Daily water intake'}
                value={waterIntake}
                onChange={(e) => setWaterIntake(e.target.value)}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  ...waterIntakeOptions[locale],
                ]}
              />
            </div>
          </div>

          {/* Habits */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Alışkanlıklar' : 'Habits'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Sigara durumu' : 'Smoking status'}
                </label>
                <RadioGroup
                  name="smoking"
                  value={smoking}
                  onChange={(value) => setSmoking(value)}
                  options={smokingOptions[locale]}
                  orientation="vertical"
                />
              </div>
              <Select
                label={locale === 'tr' ? 'Alkol tüketimi' : 'Alcohol consumption'}
                value={alcohol}
                onChange={(e) => setAlcohol(e.target.value)}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  ...alcoholOptions[locale],
                ]}
              />
            </div>
          </div>

          {/* Screen Time & Stress */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Brain className="h-5 w-5 text-pink-600" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Zihinsel Sağlık' : 'Mental Wellness'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Select
                label={locale === 'tr' ? 'Ekran süresi (iş dışı)' : 'Screen time (non-work)'}
                value={screenTime}
                onChange={(e) => setScreenTime(e.target.value)}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  ...screenTimeOptions[locale],
                ]}
              />
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Genel stres düzeyi' : 'Overall stress level'}
                </label>
                <RadioGroup
                  name="stress"
                  value={stress}
                  onChange={(value) => setStress(value)}
                  options={stressOptions[locale]}
                  orientation="horizontal"
                />
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-amber-600" />
              <h3 className="font-semibold text-neutral-900">
                {locale === 'tr' ? 'Sosyal Yaşam' : 'Social Life'}
              </h3>
            </div>
            <Select
              label={locale === 'tr' ? 'Arkadaş/aile ile sosyalleşme sıklığı' : 'How often do you socialize with friends/family?'}
              value={social}
              onChange={(e) => setSocial(e.target.value)}
              options={[
                { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                ...socialOptions[locale],
              ]}
            />
          </div>
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

      {/* ========== RESULTS ========== */}
      {result && (
        <>
          {/* Main Score */}
          <Card className="animate-slide-up border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Sağlıklı Yaşam Puanınız' : 'Your Healthy Lifestyle Score'}
              </h3>
              <div className={`mb-4 text-7xl font-bold ${getScoreColor(result.totalScore)}`}>
                {result.totalScore}
              </div>
              <div className="mb-4 text-sm text-neutral-500">
                {locale === 'tr' ? '100 üzerinden' : 'out of 100'}
              </div>
              <Badge variant={result.category.badgeVariant} size="lg">
                {result.category.label[locale]}
              </Badge>

              {/* Score Gauge */}
              <div className="mx-auto mt-6 max-w-md">
                <div className="relative h-4 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-1000 ease-out"
                    style={{ width: `${result.totalScore}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-neutral-500">
                  <span>0</span>
                  <span>25</span>
                  <span>50</span>
                  <span>75</span>
                  <span>100</span>
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-700">{result.category.description[locale]}</p>
            </div>
          </Card>

          {/* Category Breakdown */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Kategori Detayları' : 'Category Breakdown'}
            </h3>
            <div className="space-y-4">
              {result.scores.map((cat) => (
                <div key={cat.id} className="rounded-lg border border-neutral-100 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-neutral-600">{categoryIcons[cat.id]}</span>
                      <span className="text-sm font-medium text-neutral-900">{cat.label[locale]}</span>
                    </div>
                    <span className={`text-sm font-bold ${cat.score >= 8 ? 'text-emerald-600' : cat.score >= 6 ? 'text-blue-600' : cat.score >= 4 ? 'text-amber-600' : 'text-red-600'}`}>
                      {cat.score}/{cat.maxScore}
                    </span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className={`h-full rounded-full ${getBarColor(cat.score)} transition-all duration-700 ease-out`}
                      style={{ width: getBarWidth(cat.score, cat.maxScore) }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-neutral-600">{cat.tip[locale]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Strengths */}
          {result.strengths.length > 0 && (
            <Card className="animate-slide-up border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-green-50">
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Güçlü Yönleriniz' : 'Your Strengths'}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {result.scores
                  .filter((s) => result.strengths.includes(s.id))
                  .map((s) => (
                    <div key={s.id} className="flex items-center gap-3 rounded-lg bg-white p-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                        <span className="text-emerald-600">{categoryIcons[s.id]}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">{s.label[locale]}</div>
                        <div className="text-xs text-emerald-600">{s.score}/{s.maxScore}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          )}

          {/* Improvements */}
          {result.improvements.length > 0 && (
            <Card className="animate-slide-up border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Geliştirilecek Alanlar' : 'Areas for Improvement'}
                </h3>
              </div>
              <div className="space-y-3">
                {result.scores
                  .filter((s) => result.improvements.includes(s.id))
                  .sort((a, b) => a.score - b.score)
                  .map((s) => (
                    <div key={s.id} className="rounded-lg bg-white p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                          <span className="text-amber-600">{categoryIcons[s.id]}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-neutral-900">{s.label[locale]}</span>
                          <span className="ml-2 text-xs text-red-500">({s.score}/{s.maxScore})</span>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700">{s.tip[locale]}</p>
                    </div>
                  ))}
              </div>
            </Card>
          )}

          {/* Quick Tips Card */}
          <Card className="animate-slide-up border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Hızlı İyileştirme İpuçları' : 'Quick Improvement Tips'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-blue-700">
                  {locale === 'tr' ? 'Küçük Adımlar' : 'Small Steps'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Bir seferde bir alışkanlık değiştirin. Küçük ama tutarlı değişiklikler büyük fark yaratır.'
                    : 'Change one habit at a time. Small but consistent changes make a big difference.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-blue-700">
                  {locale === 'tr' ? '21 Gün Kuralı' : '21-Day Rule'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Yeni bir alışkanlığın yerleşmesi ortalama 21-66 gün sürer. Sabırlı olun ve kendinize zaman tanıyın.'
                    : 'A new habit takes an average of 21-66 days to form. Be patient and give yourself time.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-blue-700">
                  {locale === 'tr' ? 'Takip Edin' : 'Track Progress'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Bu testi her ay tekrarlayın ve puanınızdaki değişimi takip edin. İlerleme motivasyon kaynağıdır.'
                    : 'Retake this test monthly and track your score changes. Progress is a source of motivation.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-blue-700">
                  {locale === 'tr' ? 'Destek Alın' : 'Get Support'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Bir arkadaşınızla birlikte sağlıklı yaşam hedefleri koyun. Hesap verebilirlik başarıyı artırır.'
                    : 'Set healthy lifestyle goals with a friend. Accountability increases success rates.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Score Legend */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Puan Aralıkları' : 'Score Ranges'}
            </h3>
            <div className="space-y-2">
              {[
                { range: '90-100', label: locale === 'tr' ? 'Mükemmel' : 'Excellent', color: 'bg-emerald-500' },
                { range: '75-89', label: locale === 'tr' ? 'Çok İyi' : 'Very Good', color: 'bg-green-500' },
                { range: '60-74', label: locale === 'tr' ? 'İyi' : 'Good', color: 'bg-blue-500' },
                { range: '40-59', label: locale === 'tr' ? 'Orta' : 'Average', color: 'bg-amber-500' },
                { range: '20-39', label: locale === 'tr' ? 'Geliştirilebilir' : 'Needs Improvement', color: 'bg-orange-500' },
                { range: '0-19', label: locale === 'tr' ? 'Dikkat Gerekli' : 'Attention Needed', color: 'bg-red-500' },
              ].map((item) => (
                <div
                  key={item.range}
                  className={`flex items-center justify-between rounded-lg border-2 p-3 ${
                    result.category.label[locale] === item.label
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${item.color}`} />
                    <span className="font-medium text-neutral-900">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-600">{item.range}</span>
                    {result.category.label[locale] === item.label && (
                      <Badge variant="primary">{locale === 'tr' ? 'Siz' : 'You'}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Disclaimer */}
          <Card className="animate-slide-up">
            <div className="flex gap-3">
              <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <div className="text-sm text-neutral-600">
                <p className="font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Bilgilendirme' : 'Disclaimer'}
                </p>
                <p className="mt-1">
                  {locale === 'tr'
                    ? 'Bu hesaplayıcı genel bir yaşam tarzı değerlendirmesi sunmaktadır ve tıbbi tavsiye niteliği taşımaz. Sonuçlar bilimsel araştırmalara dayalı genel önerileri yansıtır. Sağlığınızla ilgili özel endişeleriniz varsa lütfen bir sağlık profesyoneline danışın.'
                    : 'This calculator provides a general lifestyle assessment and does not constitute medical advice. Results reflect general recommendations based on scientific research. If you have specific health concerns, please consult a healthcare professional.'}
                </p>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default HealthyLifestyleScoreCalculator;
