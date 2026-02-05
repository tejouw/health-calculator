'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateRunningPace, commonDistances } from './runningPaceLogic';
import { RunningPaceInput } from './runningPaceTypes';
import { Timer, Zap, Award, TrendingUp, Target, Heart, Activity, Flame, Trophy, Gauge } from 'lucide-react';

interface RunningPaceCalculatorProps {
  locale: 'en' | 'tr';
}

const levelLabels = {
  beginner: { en: 'Beginner', tr: 'Başlangıç', color: 'bg-blue-100 text-blue-700' },
  intermediate: { en: 'Intermediate', tr: 'Orta Seviye', color: 'bg-green-100 text-green-700' },
  advanced: { en: 'Advanced', tr: 'İleri Seviye', color: 'bg-orange-100 text-orange-700' },
  elite: { en: 'Elite', tr: 'Elit', color: 'bg-purple-100 text-purple-700' },
};

const RunningPaceCalculator: React.FC<RunningPaceCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [distanceUnit, setDistanceUnit] = useState<'km' | 'miles'>('km');
  const [distance, setDistance] = useState<string>('');
  const [hours, setHours] = useState<string>('0');
  const [minutes, setMinutes] = useState<string>('');
  const [seconds, setSeconds] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [showOptional, setShowOptional] = useState<boolean>(false);
  const [result, setResult] = useState<ReturnType<typeof calculateRunningPace> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const distanceNum = parseFloat(distance);
    const hoursNum = parseInt(hours) || 0;
    const minutesNum = parseInt(minutes) || 0;
    const secondsNum = parseInt(seconds) || 0;
    const ageNum = age ? parseInt(age) : undefined;
    const weightNum = weight ? parseFloat(weight) : undefined;

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
      age: ageNum,
      weight: weightNum,
      weightUnit,
      gender,
    };

    const paceResult = calculateRunningPace(input);
    setResult(paceResult);
  };

  const handleReset = () => {
    setDistance('');
    setHours('0');
    setMinutes('');
    setSeconds('');
    setAge('');
    setWeight('');
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

        {/* Optional Fields Toggle */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => setShowOptional(!showOptional)}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
          >
            {showOptional ? '−' : '+'} {locale === 'tr' ? 'Detaylı Analiz İçin Opsiyonel Bilgiler' : 'Optional Info for Detailed Analysis'}
          </button>
        </div>

        {showOptional && (
          <div className="mb-6 space-y-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
            {/* Gender */}
            <RadioGroup
              label={t('gender')}
              name="gender"
              value={gender}
              onChange={(value) => setGender(value as 'male' | 'female')}
              options={[
                { value: 'male', label: t('male') },
                { value: 'female', label: t('female') },
              ]}
              orientation="horizontal"
            />

            {/* Age & Weight */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={locale === 'tr' ? 'Yaş' : 'Age'}
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="25"
                helperText={locale === 'tr' ? 'Kalp atış hızı hesabı için' : 'For heart rate calculation'}
              />
              <div>
                <Input
                  label={locale === 'tr' ? 'Kilo' : 'Weight'}
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder={weightUnit === 'kg' ? '70' : '154'}
                  helperText={locale === 'tr' ? 'Kalori hesabı için' : 'For calorie calculation'}
                  rightIcon={
                    <select
                      value={weightUnit}
                      onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lbs')}
                      className="border-none bg-transparent text-sm focus:outline-none"
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  }
                />
              </div>
            </div>
          </div>
        )}

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
        <div className="space-y-4">
          {/* Performance Overview */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {locale === 'tr' ? 'Performans Özeti' : 'Performance Overview'}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {locale === 'tr' ? 'Genel değerlendirme ve skor' : 'Overall assessment and score'}
                  </p>
                </div>
              </div>
              <span className={`rounded-full px-4 py-2 text-sm font-bold ${levelLabels[result.runningLevel].color}`}>
                {levelLabels[result.runningLevel][locale]}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Performance Score */}
              <div className="rounded-lg bg-white p-4 text-center">
                <div className="relative inline-flex h-20 w-20 items-center justify-center">
                  <svg className="h-20 w-20 -rotate-90 transform">
                    <circle cx="40" cy="40" r="32" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke={result.performanceScore >= 70 ? '#10b981' : result.performanceScore >= 40 ? '#f59e0b' : '#ef4444'}
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${(result.performanceScore / 100) * 201} 201`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-xl font-bold text-neutral-900">
                    {result.performanceScore}
                  </div>
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Performans Skoru' : 'Performance Score'}
                </p>
              </div>

              {/* VO2 Max */}
              {result.vo2Max && (
                <div className="rounded-lg bg-white p-4 text-center">
                  <Activity className="mx-auto h-8 w-8 text-blue-600 mb-2" />
                  <div className="text-3xl font-bold text-blue-600">{result.vo2Max}</div>
                  <p className="mt-1 text-sm text-neutral-600">
                    {locale === 'tr' ? 'Tahmini VO₂ Max' : 'Estimated VO₂ Max'}
                  </p>
                  <p className="text-xs text-neutral-500">ml/kg/min</p>
                </div>
              )}

              {/* Calories */}
              {result.caloriesBurned && (
                <div className="rounded-lg bg-white p-4 text-center">
                  <Flame className="mx-auto h-8 w-8 text-orange-600 mb-2" />
                  <div className="text-3xl font-bold text-orange-600">{result.caloriesBurned}</div>
                  <p className="mt-1 text-sm text-neutral-600">
                    {locale === 'tr' ? 'Yakılan Kalori' : 'Calories Burned'}
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Main Pace Results */}
          <div className="grid gap-4 sm:grid-cols-2">
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
              <Gauge className="h-5 w-5 text-green-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Hız' : 'Speed'}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-green-50 p-4 text-center border border-green-200">
                <Zap className="mx-auto h-6 w-6 text-green-600 mb-2" />
                <div className="text-3xl font-bold text-green-600">{result.speed.kmh}</div>
                <div className="text-sm font-medium text-neutral-700">km/h</div>
              </div>
              <div className="rounded-lg bg-teal-50 p-4 text-center border border-teal-200">
                <Zap className="mx-auto h-6 w-6 text-teal-600 mb-2" />
                <div className="text-3xl font-bold text-teal-600">{result.speed.mph}</div>
                <div className="text-sm font-medium text-neutral-700">mph</div>
              </div>
            </div>
          </Card>

          {/* Training Zones */}
          <Card className="animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Antrenman Bölgeleri' : 'Training Zones'}
              </h3>
            </div>
            <p className="text-sm text-neutral-600 mb-4">
              {locale === 'tr'
                ? 'Farklı antrenman hedefleri için önerilen tempo aralıkları'
                : 'Recommended pace ranges for different training goals'}
            </p>
            <div className="space-y-3">
              {result.trainingZones.map((zone, index) => (
                <div key={index} className="rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50 transition">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-neutral-900">{zone.name}</h4>
                      <p className="text-xs text-neutral-600">{zone.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono font-bold text-neutral-900">
                        {zone.paceRange.min.minutes}:{String(zone.paceRange.min.seconds).padStart(2, '0')} -{' '}
                        {zone.paceRange.max.minutes}:{String(zone.paceRange.max.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-neutral-500">min/km</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <span>💪 {zone.percentage}</span>
                    {zone.heartRatePercentage && <span>❤️ {zone.heartRatePercentage}</span>}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Race Predictions */}
          {result.racePredictions.length > 0 && (
            <Card className="animate-slide-up bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-100">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Tahmini Yarış Süreleri' : 'Predicted Race Times'}
                </h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                {locale === 'tr'
                  ? 'Mevcut performansınıza göre diğer mesafeler için tahmin'
                  : 'Predicted times for other distances based on your current performance'}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {result.racePredictions.map((prediction, index) => (
                  <div key={index} className="rounded-lg bg-white p-4 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-neutral-900">{prediction.distanceLabel}</h4>
                      <span className="text-xs text-neutral-500">{prediction.distance} {prediction.unit}</span>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">{prediction.predictedTime}</div>
                    <div className="text-sm text-neutral-600">
                      {locale === 'tr' ? 'Tempo:' : 'Pace:'} <span className="font-mono font-semibold">{prediction.predictedPace}</span> min/km
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* World Record Comparison */}
          {result.worldRecordComparison && (
            <Card className="animate-slide-up bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-yellow-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Dünya Rekoru Karşılaştırması' : 'World Record Comparison'}
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-4 text-center">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Dünya Rekoru' : 'World Record'}</p>
                  <div className="text-2xl font-bold text-yellow-600">{result.worldRecordComparison.recordTime}</div>
                  <p className="text-xs text-neutral-500 mt-1">{result.worldRecordComparison.recordPace} min/km</p>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Sizin Süreniz' : 'Your Time'}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    {String(result.totalTime.hours).padStart(2, '0')}:{String(result.totalTime.minutes).padStart(2, '0')}:{String(result.totalTime.seconds).padStart(2, '0')}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <p className="text-xs text-neutral-600 mb-1">{locale === 'tr' ? 'Rekora Göre' : 'vs Record'}</p>
                  <div className="text-2xl font-bold text-purple-600">{result.worldRecordComparison.percentageOfRecord}%</div>
                  <p className="text-xs text-neutral-500 mt-1">{locale === 'tr' ? 'rekoru oranı' : 'of record'}</p>
                </div>
              </div>
            </Card>
          )}

          {/* Heart Rate Zones */}
          {result.heartRateZones && (
            <Card className="animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Kalp Atış Hızı Bölgeleri' : 'Heart Rate Zones'}
                </h3>
              </div>
              <div className="mb-4 rounded-lg bg-red-50 p-3 border border-red-200">
                <p className="text-sm text-neutral-700">
                  {locale === 'tr' ? 'Maksimum Kalp Atış Hızınız:' : 'Your Maximum Heart Rate:'}{' '}
                  <span className="font-bold text-red-600">{result.heartRateZones.maxHeartRate} bpm</span>
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  {locale === 'tr' ? '(220 - yaşınız formülüne göre)' : '(Based on 220 - age formula)'}
                </p>
              </div>
              <div className="space-y-2">
                {result.heartRateZones.zones.map((zone, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg bg-neutral-50 p-3 border border-neutral-200">
                    <div>
                      <span className="font-semibold text-neutral-900">{zone.name}</span>
                      <span className="ml-2 text-xs text-neutral-500">{zone.percentage}</span>
                    </div>
                    <div className="font-mono text-sm font-bold text-red-600">
                      {zone.min} - {zone.max} bpm
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Splits */}
          {result.splits.length > 0 && (
            <Card className="animate-slide-up">
              <h3 className="mb-4 text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Bölme Süreleri (Splits)' : 'Split Times'}
              </h3>
              <div className="overflow-hidden rounded-lg border border-neutral-200">
                <table className="w-full">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? 'Mesafe' : 'Distance'}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? 'Kümülatif Süre' : 'Cumulative Time'}
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? 'Tempo' : 'Pace'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {result.splits.map((split, index) => (
                      <tr key={index} className="hover:bg-neutral-50 transition">
                        <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                          {split.distance} {split.unit}
                        </td>
                        <td className="px-4 py-3 text-sm font-mono text-neutral-700">{split.time}</td>
                        <td className="px-4 py-3 text-sm font-mono text-green-600 font-semibold">{split.pace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};

export default RunningPaceCalculator;
