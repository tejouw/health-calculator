'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { HeartPulse, Target, Activity, Info, TrendingUp } from 'lucide-react';
import { calculateTargetHeartRate } from './targetHeartRateLogic';
import { TargetHeartRateResult, FitnessLevel, ExerciseGoal } from './targetHeartRateTypes';
import { CalculatorProps } from '@/types/calculator';

const TargetHeartRateCalculator: React.FC<CalculatorProps> = ({ locale }) => {
  const [age, setAge] = useState<string>('');
  const [restingHeartRate, setRestingHeartRate] = useState<string>('');
  const [fitnessLevel, setFitnessLevel] = useState<FitnessLevel>('intermediate');
  const [exerciseGoal, setExerciseGoal] = useState<ExerciseGoal>('general');
  const [result, setResult] = useState<TargetHeartRateResult | null>(null);
  const [error, setError] = useState<string>('');

  const texts = {
    en: {
      title: 'Target Heart Rate Calculator',
      subtitle: 'Find your ideal training heart rate based on your age, fitness level, and exercise goals',
      age: 'Age',
      restingHR: 'Resting Heart Rate (optional)',
      bpm: 'bpm',
      fitnessLevel: 'Fitness Level',
      exerciseGoal: 'Exercise Goal',
      calculate: 'Calculate Target Heart Rate',
      reset: 'Reset',
      targetZone: 'Your Target Heart Rate Zone',
      maxHR: 'Maximum Heart Rate',
      allZones: 'All Training Zones',
      recommendation: 'Personalized Recommendation',
      invalidAge: 'Please enter a valid age between 15 and 100',
      invalidRHR: 'Please enter a valid resting heart rate between 30 and 120 bpm',
      fitnessLevels: {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        athlete: 'Athlete',
      },
      fitnessDescriptions: {
        beginner: 'New to exercise or returning after a long break',
        intermediate: 'Regular exercise 2-3 times per week',
        advanced: 'Consistent training 4-5 times per week',
        athlete: 'Competitive training 6+ times per week',
      },
      goals: {
        fat_burning: 'Fat Burning',
        cardio: 'Cardio Fitness',
        endurance: 'Endurance',
        performance: 'Performance',
        general: 'General Fitness',
      },
      goalDescriptions: {
        fat_burning: 'Maximize fat utilization during exercise',
        cardio: 'Improve heart health and cardiovascular fitness',
        endurance: 'Build stamina for long-duration activities',
        performance: 'Improve speed, power, and race performance',
        general: 'Overall health and balanced fitness',
      },
      infoTitle: 'Tips for Heart Rate Training',
      infoTips: [
        'Use a heart rate monitor or fitness watch for accurate tracking',
        'Always warm up in Zone 1 for at least 5-10 minutes',
        'Stay hydrated — dehydration can elevate heart rate by 10-20 bpm',
        'If you feel dizzy or chest pain, stop immediately and seek medical attention',
      ],
    },
    tr: {
      title: 'Hedef Kalp Atış Hızı Hesaplayıcı',
      subtitle: 'Yaşınıza, kondisyon seviyenize ve egzersiz hedeflerinize göre ideal antrenman kalp atış hızınızı bulun',
      age: 'Yaş',
      restingHR: 'Dinlenme Kalp Atış Hızı (isteğe bağlı)',
      bpm: 'atım/dk',
      fitnessLevel: 'Kondisyon Seviyesi',
      exerciseGoal: 'Egzersiz Hedefi',
      calculate: 'Hedef Kalp Atışını Hesapla',
      reset: 'Sıfırla',
      targetZone: 'Hedef Kalp Atış Hızı Bölgeniz',
      maxHR: 'Maksimum Kalp Atış Hızı',
      allZones: 'Tüm Antrenman Bölgeleri',
      recommendation: 'Kişiselleştirilmiş Öneri',
      invalidAge: 'Lütfen 15 ile 100 arasında geçerli bir yaş girin',
      invalidRHR: 'Lütfen 30 ile 120 arasında geçerli bir dinlenme kalp atış hızı girin',
      fitnessLevels: {
        beginner: 'Başlangıç',
        intermediate: 'Orta Seviye',
        advanced: 'İleri Seviye',
        athlete: 'Sporcu',
      },
      fitnessDescriptions: {
        beginner: 'Egzersize yeni başlayan veya uzun bir aradan sonra dönen',
        intermediate: 'Haftada 2-3 kez düzenli egzersiz yapan',
        advanced: 'Haftada 4-5 kez sürekli antrenman yapan',
        athlete: 'Haftada 6+ kez yarışmacı antrenman yapan',
      },
      goals: {
        fat_burning: 'Yağ Yakma',
        cardio: 'Kardio Kondisyon',
        endurance: 'Dayanıklılık',
        performance: 'Performans',
        general: 'Genel Kondisyon',
      },
      goalDescriptions: {
        fat_burning: 'Egzersiz sırasında yağ kullanımını en üst düzeye çıkarın',
        cardio: 'Kalp sağlığını ve kardiyovasküler kondisyonu geliştirin',
        endurance: 'Uzun süreli aktiviteler için dayanıklılık oluşturun',
        performance: 'Hız, güç ve yarış performansını geliştirin',
        general: 'Genel sağlık ve dengeli kondisyon',
      },
      infoTitle: 'Kalp Atış Hızı Antrenmanı İçin İpuçları',
      infoTips: [
        'Doğru takip için kalp atış hızı monitörü veya akıllı saat kullanın',
        'Her zaman Bölge 1\'de en az 5-10 dakika ısınma yapın',
        'Bol su için — dehidrasyon kalp atış hızını 10-20 atım/dk artırabilir',
        'Baş dönmesi veya göğüs ağrısı hissederseniz hemen durun ve tıbbi yardım alın',
      ],
    },
  };

  const text = texts[locale];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const ageNum = parseInt(age);
    if (!age || isNaN(ageNum) || ageNum < 15 || ageNum > 100) {
      setError(text.invalidAge);
      return;
    }

    let restingHR: number | undefined;
    if (restingHeartRate) {
      restingHR = parseInt(restingHeartRate);
      if (isNaN(restingHR) || restingHR < 30 || restingHR > 120) {
        setError(text.invalidRHR);
        return;
      }
    }

    const calcResult = calculateTargetHeartRate(
      {
        age: ageNum,
        restingHeartRate: restingHR,
        fitnessLevel,
        exerciseGoal,
      },
      locale
    );
    setResult(calcResult);
  };

  const handleReset = () => {
    setAge('');
    setRestingHeartRate('');
    setFitnessLevel('intermediate');
    setExerciseGoal('general');
    setResult(null);
    setError('');
  };

  const fitnessLevels: FitnessLevel[] = ['beginner', 'intermediate', 'advanced', 'athlete'];
  const exerciseGoals: ExerciseGoal[] = ['general', 'fat_burning', 'cardio', 'endurance', 'performance'];

  return (
    <div className="space-y-6">
      {/* Calculator Card */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-600">
            <Target className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-neutral-900">{text.title}</h2>
            <p className="text-sm text-neutral-600">{text.subtitle}</p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-5">
          {/* Age Input */}
          <div>
            <label htmlFor="thr-age" className="mb-2 block text-sm font-medium text-neutral-700">
              {text.age}
            </label>
            <input
              type="number"
              id="thr-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="30"
              min="15"
              max="100"
            />
          </div>

          {/* Resting Heart Rate */}
          <div>
            <label htmlFor="thr-rhr" className="mb-2 block text-sm font-medium text-neutral-700">
              {text.restingHR}
            </label>
            <div className="relative">
              <input
                type="number"
                id="thr-rhr"
                value={restingHeartRate}
                onChange={(e) => setRestingHeartRate(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 pr-20 text-neutral-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                placeholder="60"
                min="30"
                max="120"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                {text.bpm}
              </span>
            </div>
          </div>

          {/* Fitness Level */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {text.fitnessLevel}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {fitnessLevels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFitnessLevel(level)}
                  className={`rounded-lg border-2 px-3 py-3 text-left transition-all ${
                    fitnessLevel === level
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-sm font-medium">{text.fitnessLevels[level]}</div>
                  <div className="mt-0.5 text-xs opacity-75">{text.fitnessDescriptions[level]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Exercise Goal */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {text.exerciseGoal}
            </label>
            <div className="space-y-2">
              {exerciseGoals.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => setExerciseGoal(goal)}
                  className={`flex w-full items-center gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all ${
                    exerciseGoal === goal
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-medium">{text.goals[goal]}</div>
                    <div className="mt-0.5 text-xs opacity-75">{text.goalDescriptions[goal]}</div>
                  </div>
                  {exerciseGoal === goal && (
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="flex-1 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-3 font-semibold text-white transition-all hover:from-primary-700 hover:to-secondary-700 hover:shadow-lg"
            >
              {text.calculate}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-lg border-2 border-neutral-200 px-6 py-3 font-semibold text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
            >
              {text.reset}
            </button>
          </div>
        </form>
      </Card>

      {/* Results */}
      {result && (
        <>
          {/* Target Zone Highlight */}
          <Card className="animate-slide-up border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-red-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {text.targetZone}
              </h3>
              <div className="mb-2 flex items-center justify-center gap-2">
                <HeartPulse className="h-8 w-8 text-rose-500" />
                <span className="text-5xl font-bold text-rose-600">
                  {result.targetZone.min}-{result.targetZone.max}
                </span>
                <span className="text-lg text-rose-500">{text.bpm}</span>
              </div>
              <p className="text-sm text-neutral-600">
                {result.targetZone.percentage} {locale === 'en' ? 'of max heart rate' : 'maks. kalp atış hızı'}
              </p>
              <div className="mt-3 flex items-center justify-center gap-4 text-sm text-neutral-500">
                <span>
                  {text.maxHR}: <strong>{result.maxHeartRate} {text.bpm}</strong>
                </span>
                {result.restingHeartRate && (
                  <>
                    <span className="text-neutral-300">|</span>
                    <span>
                      {locale === 'en' ? 'Resting HR' : 'Dinlenme KAH'}: <strong>{result.restingHeartRate} {text.bpm}</strong>
                    </span>
                  </>
                )}
              </div>
            </div>
          </Card>

          {/* All Zones */}
          <Card>
            <h3 className="mb-4 text-lg font-bold text-neutral-900">{text.allZones}</h3>
            <div className="space-y-3">
              {result.allZones.map((zone, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border-2 transition-all ${
                    zone.isTarget
                      ? 'border-rose-300 shadow-md shadow-rose-100'
                      : 'border-neutral-200'
                  }`}
                >
                  <div
                    className="flex items-center justify-between p-4"
                    style={{
                      background: zone.isTarget
                        ? `linear-gradient(135deg, ${zone.color}15, ${zone.color}25)`
                        : 'transparent',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: zone.color }}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-neutral-900">{zone.name}</h4>
                          {zone.isTarget && (
                            <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs font-medium text-rose-700">
                              {locale === 'en' ? 'TARGET' : 'HEDEF'}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-neutral-500">{zone.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-neutral-900">
                        {zone.minBpm}-{zone.maxBpm}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {zone.minPercent}-{zone.maxPercent}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommendation */}
          <Card>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-neutral-900">{text.recommendation}</h3>
                <p className="text-sm leading-relaxed text-neutral-700">{result.recommendation}</p>
              </div>
            </div>
          </Card>

          {/* Tips */}
          <Card>
            <div className="flex gap-3">
              <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold">{text.infoTitle}</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-blue-800">
                  {text.infoTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default TargetHeartRateCalculator;
