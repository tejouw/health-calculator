'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateSleepTimes, sleepRecommendations } from './sleepLogic';
import { SleepCalculatorInput } from './sleepTypes';
import { Moon, Sun, Info } from 'lucide-react';

interface SleepCalculatorProps {
  locale: 'en' | 'tr';
}

const SleepCalculator: React.FC<SleepCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [calculationType, setCalculationType] = useState<'bedtime' | 'wakeup'>('bedtime');
  const [hours, setHours] = useState<string>('7');
  const [minutes, setMinutes] = useState<string>('00');
  const [fallAsleepMinutes, setFallAsleepMinutes] = useState<string>('14');
  const [result, setResult] = useState<ReturnType<typeof calculateSleepTimes> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const hoursNum = parseInt(hours);
    const minutesNum = parseInt(minutes);
    const fallAsleepNum = parseInt(fallAsleepMinutes);

    if (isNaN(hoursNum) || hoursNum < 0 || hoursNum > 23) {
      setError(locale === 'tr' ? 'Lütfen 0-23 arası saat girin' : 'Please enter hours between 0-23');
      return;
    }

    if (isNaN(minutesNum) || minutesNum < 0 || minutesNum > 59) {
      setError(locale === 'tr' ? 'Lütfen 0-59 arası dakika girin' : 'Please enter minutes between 0-59');
      return;
    }

    if (isNaN(fallAsleepNum) || fallAsleepNum < 0 || fallAsleepNum > 60) {
      setError(
        locale === 'tr'
          ? 'Uykuya dalma süresi 0-60 dakika arası olmalı'
          : 'Fall asleep time must be between 0-60 minutes'
      );
      return;
    }

    const input: SleepCalculatorInput = {
      calculationType,
      targetTime: {
        hours: hoursNum,
        minutes: minutesNum,
      },
      fallAsleepMinutes: fallAsleepNum,
    };

    const sleepResult = calculateSleepTimes(input);
    setResult(sleepResult);
  };

  const handleReset = () => {
    setHours('7');
    setMinutes('00');
    setFallAsleepMinutes('14');
    setResult(null);
    setError('');
  };

  const recommendations = sleepRecommendations[locale];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
            <Moon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Uyku Hesaplayıcı' : 'Sleep Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Optimal uyku döngülerinizi hesaplayın'
                : 'Calculate your optimal sleep cycles'}
            </p>
          </div>
        </div>

        {/* Calculation Type */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Ne hesaplamak istiyorsunuz?' : 'What would you like to calculate?'}
            name="calculationType"
            value={calculationType}
            onChange={(value) => setCalculationType(value as 'bedtime' | 'wakeup')}
            options={[
              {
                value: 'bedtime',
                label: locale === 'tr' ? 'Yatma saati' : 'Bedtime',
                description:
                  locale === 'tr'
                    ? 'Uyanma saatine göre ne zaman yatmalı'
                    : 'When to go to bed based on wake time',
              },
              {
                value: 'wakeup',
                label: locale === 'tr' ? 'Uyanma saati' : 'Wake time',
                description:
                  locale === 'tr'
                    ? 'Yatma saatine göre ne zaman uyanmalı'
                    : 'When to wake up based on bedtime',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Time Input */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {calculationType === 'bedtime'
              ? locale === 'tr'
                ? 'Uyanma Saati'
                : 'Wake Up Time'
              : locale === 'tr'
                ? 'Yatma Saati'
                : 'Bedtime'}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <Input
              label={locale === 'tr' ? 'Saat' : 'Hours'}
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="7"
              min="0"
              max="23"
              helperText="0-23"
            />
            <Input
              label={locale === 'tr' ? 'Dakika' : 'Minutes'}
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="00"
              min="0"
              max="59"
              helperText="0-59"
            />
          </div>
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
          {/* Suggested Times */}
          <Card className="animate-slide-up border-2 border-indigo-100 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="mb-4 flex items-center gap-2">
              {calculationType === 'bedtime' ? (
                <Moon className="h-5 w-5 text-indigo-600" />
              ) : (
                <Sun className="h-5 w-5 text-indigo-600" />
              )}
              <h3 className="text-lg font-bold text-neutral-900">
                {calculationType === 'bedtime'
                  ? locale === 'tr'
                    ? 'Önerilen Yatma Saatleri'
                    : 'Suggested Bedtimes'
                  : locale === 'tr'
                    ? 'Önerilen Uyanma Saatleri'
                    : 'Suggested Wake Times'}
              </h3>
            </div>
            <p className="mb-6 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Tam uyku döngüleri arasında uyanmanız için önerilen saatler:'
                : 'Suggested times to wake up between complete sleep cycles:'}
            </p>
            <div className="space-y-3">
              {result.suggestedTimes.map((time, index) => {
                const sleepHours = (time.cycles * result.sleepCycleDuration) / 60;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm"
                  >
                    <div>
                      <div className="text-2xl font-bold text-indigo-600">{time.formatted}</div>
                      <div className="text-sm text-neutral-600">
                        {time.cycles} {locale === 'tr' ? 'döngü' : 'cycles'} ({sleepHours.toFixed(1)}{' '}
                        {locale === 'tr' ? 'saat' : 'hours'})
                      </div>
                    </div>
                    {index === 1 && (
                      <Badge variant="success">
                        {locale === 'tr' ? 'Önerilen' : 'Recommended'}
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Sleep Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-neutral-900">{recommendations.title}</h3>
            </div>
            <p className="mb-4 text-sm text-neutral-700">{recommendations.description}</p>
            <ul className="space-y-2">
              {recommendations.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-neutral-700">
                  <span className="text-indigo-600">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </>
      )}
    </div>
  );
};

export default SleepCalculator;
