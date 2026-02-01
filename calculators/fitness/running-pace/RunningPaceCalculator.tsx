'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateRunningPace, commonDistances } from './runningPaceLogic';
import { RunningPaceInput } from './runningPaceTypes';
import { Timer, Zap } from 'lucide-react';

interface RunningPaceCalculatorProps {
  locale: 'en' | 'tr';
}

const RunningPaceCalculator: React.FC<RunningPaceCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [distanceUnit, setDistanceUnit] = useState<'km' | 'miles'>('km');
  const [distance, setDistance] = useState<string>('');
  const [hours, setHours] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [result, setResult] = useState<ReturnType<typeof calculateRunningPace> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const distanceNum = parseFloat(distance);
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;
    const secondsNum = parseInt(seconds) || 0;

    if (!distanceNum || distanceNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir mesafe girin' : 'Please enter a valid distance');
      return;
    }

    if (hoursNum === 0 && minutesNum === 0 && secondsNum === 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir süre girin' : 'Please enter a valid time');
      return;
    }

    const input: RunningPaceInput = {
      distance: distanceNum,
      distanceUnit,
      hours: hoursNum,
      minutes: minutesNum,
      seconds: secondsNum,
    };

    const paceResult = calculateRunningPace(input);
    setResult(paceResult);
  };

  const handleReset = () => {
    setDistance('');
    setHours('0');
    setMinutes('');
    setSeconds('');
    setResult(null);
    setError('');
  };

  const setCommonDistance = (dist: number) => {
    setDistance(dist.toString());
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
            <Timer className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Koşu Temposu Hesaplama' : 'Running Pace Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'Koşu temponu, hız ve bölme sürelerini hesaplayın' : 'Calculate pace, speed and split times'}
            </p>
          </div>
        </div>

        {/* Unit Selection */}
        <div className="mb-6">
          <RadioGroup
            label={t('unitSystem')}
            name="distanceUnit"
            value={distanceUnit}
            onChange={(value) => setDistanceUnit(value as 'km' | 'miles')}
            options={[
              { value: 'km', label: locale === 'tr' ? 'Kilometre' : 'Kilometers' },
              { value: 'miles', label: locale === 'tr' ? 'Mil' : 'Miles' },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Common Distances */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Yaygın Mesafeler' : 'Common Distances'}
          </label>
          <div className="flex flex-wrap gap-2">
            {commonDistances[distanceUnit].map((dist) => (
              <Button
                key={dist.label}
                variant="outline"
                size="sm"
                onClick={() => setCommonDistance(dist.value)}
              >
                {dist.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Distance Input */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Mesafe' : 'Distance'}
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder={distanceUnit === 'km' ? '10' : '6.2'}
            rightIcon={<span className="text-sm">{distanceUnit}</span>}
            required
          />
        </div>

        {/* Time Inputs */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Süre' : 'Time'}
          </label>
          <div className="grid grid-cols-3 gap-3">
            <Input
              label={locale === 'tr' ? 'Saat' : 'Hours'}
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="0"
              min="0"
            />
            <Input
              label={locale === 'tr' ? 'Dakika' : 'Minutes'}
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              placeholder="45"
              min="0"
              max="59"
            />
            <Input
              label={locale === 'tr' ? 'Saniye' : 'Seconds'}
              type="number"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
              placeholder="30"
              min="0"
              max="59"
            />
          </div>
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
          {/* Main Results */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="animate-slide-up border-2 border-green-100 bg-gradient-to-br from-green-50 to-teal-50">
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  {locale === 'tr' ? 'Tempo (km başına)' : 'Pace (per km)'}
                </h3>
                <div className="mb-2 text-5xl font-bold text-green-600">
                  {result.pacePerKm.minutes}:{String(result.pacePerKm.seconds).padStart(2, '0')}
                </div>
                <Badge variant="success">min/km</Badge>
              </div>
            </Card>

            <Card className="animate-slide-up border-2 border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50">
              <div className="text-center">
                <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  {locale === 'tr' ? 'Tempo (mil başına)' : 'Pace (per mile)'}
                </h3>
                <div className="mb-2 text-5xl font-bold text-teal-600">
                  {result.pacePerMile.minutes}:{String(result.pacePerMile.seconds).padStart(2, '0')}
                </div>
                <Badge variant="primary">min/mi</Badge>
              </div>
            </Card>
          </div>

          {/* Speed */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Hız' : 'Speed'}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{result.speed.kmh}</div>
                <div className="text-sm text-neutral-600">km/h</div>
              </div>
              <div className="rounded-lg bg-teal-50 p-4 text-center">
                <div className="text-3xl font-bold text-teal-600">{result.speed.mph}</div>
                <div className="text-sm text-neutral-600">mph</div>
              </div>
            </div>
          </Card>

          {/* Splits */}
          {result.splits.length > 0 && (
            <Card className="animate-slide-up">
              <h3 className="mb-4 text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Bölme Süreleri' : 'Split Times'}
              </h3>
              <div className="overflow-hidden rounded-lg border border-neutral-200">
                <table className="w-full">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? 'Mesafe' : 'Distance'}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? 'Süre' : 'Time'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {result.splits.map((split, index) => (
                      <tr key={index} className="hover:bg-neutral-50">
                        <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                          {split.distance} {split.unit}
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-700">{split.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default RunningPaceCalculator;
