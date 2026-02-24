'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Select, Card } from '@/components/ui';
import { calculateSleepCycle } from './sleepCycleLogic';
import { SleepCycleInput, SleepCycleResult } from './sleepCycleTypes';
import { BedDouble, Clock } from 'lucide-react';
import SleepQualityGauge from './components/SleepQualityGauge';
import SleepCycleTimeline from './components/SleepCycleTimeline';
import SleepStageBreakdown from './components/SleepStageBreakdown';
import DurationAnalysis from './components/DurationAnalysis';
import OptimalAdjustments from './components/OptimalAdjustments';
import WeeklyProjection from './components/WeeklyProjection';
import SleepEnvironmentTips from './components/SleepEnvironmentTips';

interface SleepCycleCalculatorProps {
  locale: 'en' | 'tr';
}

const AGE_OPTIONS = [
  { value: '5', label: '3-5' },
  { value: '9', label: '6-12' },
  { value: '15', label: '13-17' },
  { value: '22', label: '18-25' },
  { value: '35', label: '26-40' },
  { value: '50', label: '41-64' },
  { value: '70', label: '65+' },
];

const SleepCycleCalculator: React.FC<SleepCycleCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [bedtimeHours, setBedtimeHours] = useState<string>('23');
  const [bedtimeMinutes, setBedtimeMinutes] = useState<string>('00');
  const [wakeupHours, setWakeupHours] = useState<string>('7');
  const [wakeupMinutes, setWakeupMinutes] = useState<string>('00');
  const [age, setAge] = useState<string>('35');
  const [fallAsleepMinutes, setFallAsleepMinutes] = useState<string>('14');
  const [result, setResult] = useState<SleepCycleResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const bedH = parseInt(bedtimeHours);
    const bedM = parseInt(bedtimeMinutes);
    const wakeH = parseInt(wakeupHours);
    const wakeM = parseInt(wakeupMinutes);
    const ageNum = parseInt(age);
    const fallAsleep = parseInt(fallAsleepMinutes);

    if (isNaN(bedH) || bedH < 0 || bedH > 23) {
      setError(locale === 'tr' ? 'Yatış saati 0-23 arası olmalı' : 'Bedtime hours must be 0-23');
      return;
    }
    if (isNaN(bedM) || bedM < 0 || bedM > 59) {
      setError(locale === 'tr' ? 'Yatış dakikası 0-59 arası olmalı' : 'Bedtime minutes must be 0-59');
      return;
    }
    if (isNaN(wakeH) || wakeH < 0 || wakeH > 23) {
      setError(locale === 'tr' ? 'Uyanış saati 0-23 arası olmalı' : 'Wakeup hours must be 0-23');
      return;
    }
    if (isNaN(wakeM) || wakeM < 0 || wakeM > 59) {
      setError(locale === 'tr' ? 'Uyanış dakikası 0-59 arası olmalı' : 'Wakeup minutes must be 0-59');
      return;
    }
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setError(locale === 'tr' ? 'Geçerli bir yaş seçin' : 'Please select a valid age');
      return;
    }
    if (isNaN(fallAsleep) || fallAsleep < 0 || fallAsleep > 60) {
      setError(locale === 'tr' ? 'Uykuya dalma süresi 0-60 dakika olmalı' : 'Fall asleep time must be 0-60 minutes');
      return;
    }

    const input: SleepCycleInput = {
      bedtimeHours: bedH,
      bedtimeMinutes: bedM,
      wakeupHours: wakeH,
      wakeupMinutes: wakeM,
      age: ageNum,
      fallAsleepMinutes: fallAsleep,
    };

    const cycleResult = calculateSleepCycle(input);
    setResult(cycleResult);
  };

  const handleReset = () => {
    setBedtimeHours('23');
    setBedtimeMinutes('00');
    setWakeupHours('7');
    setWakeupMinutes('00');
    setAge('35');
    setFallAsleepMinutes('14');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600">
            <BedDouble className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Uyku Döngüsü Hesaplayıcı' : 'Sleep Cycle Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Uyku kalitenizi ve döngü analizinizi görüntüleyin'
                : 'Analyze your sleep quality and cycle patterns'}
            </p>
          </div>
        </div>

        {/* Bedtime Input */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-700">
            <BedDouble className="h-4 w-4 text-indigo-500" />
            {locale === 'tr' ? 'Yatış Saati' : 'Bedtime'}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label={locale === 'tr' ? 'Saat' : 'Hours'}
              type="number"
              value={bedtimeHours}
              onChange={(e) => setBedtimeHours(e.target.value)}
              placeholder="23"
              min="0"
              max="23"
              helperText="0-23"
            />
            <Input
              label={locale === 'tr' ? 'Dakika' : 'Minutes'}
              type="number"
              value={bedtimeMinutes}
              onChange={(e) => setBedtimeMinutes(e.target.value)}
              placeholder="00"
              min="0"
              max="59"
              helperText="0-59"
            />
          </div>
        </div>

        {/* Wakeup Input */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-neutral-700">
            <Clock className="h-4 w-4 text-indigo-500" />
            {locale === 'tr' ? 'Uyanış Saati' : 'Wake Up Time'}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label={locale === 'tr' ? 'Saat' : 'Hours'}
              type="number"
              value={wakeupHours}
              onChange={(e) => setWakeupHours(e.target.value)}
              placeholder="7"
              min="0"
              max="23"
              helperText="0-23"
            />
            <Input
              label={locale === 'tr' ? 'Dakika' : 'Minutes'}
              type="number"
              value={wakeupMinutes}
              onChange={(e) => setWakeupMinutes(e.target.value)}
              placeholder="00"
              min="0"
              max="59"
              helperText="0-59"
            />
          </div>
        </div>

        {/* Age Group */}
        <div className="mb-5">
          <Select
            label={locale === 'tr' ? 'Yaş Grubu' : 'Age Group'}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            options={AGE_OPTIONS.map((opt) => ({
              value: opt.value,
              label: `${opt.label} ${locale === 'tr' ? 'yaş' : 'years'}`,
            }))}
          />
        </div>

        {/* Fall Asleep Time */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Uykuya Dalma Süresi (dakika)' : 'Time to Fall Asleep (minutes)'}
            type="number"
            value={fallAsleepMinutes}
            onChange={(e) => setFallAsleepMinutes(e.target.value)}
            placeholder="14"
            min="0"
            max="60"
            helperText={locale === 'tr' ? 'Ortalama: 14 dakika' : 'Average: 14 minutes'}
          />
        </div>

        {error && <p className="mb-4 text-sm text-danger-main">{error}</p>}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {result && (
        <>
          {/* Card 1: Quality Score Gauge */}
          <SleepQualityGauge result={result} locale={locale} />

          {/* Card 2: Sleep Cycle Timeline (HERO) */}
          <SleepCycleTimeline result={result} locale={locale} />

          {/* Card 3: Sleep Stage Breakdown */}
          <SleepStageBreakdown result={result} locale={locale} />

          {/* Card 4: Duration Analysis */}
          <DurationAnalysis result={result} locale={locale} />

          {/* Card 5: Optimal Adjustments */}
          <OptimalAdjustments result={result} locale={locale} />

          {/* Card 6: Weekly Projection */}
          <WeeklyProjection result={result} locale={locale} />

          {/* Card 7: Sleep Environment Tips */}
          <SleepEnvironmentTips result={result} locale={locale} />
        </>
      )}
    </div>
  );
};

export default SleepCycleCalculator;
