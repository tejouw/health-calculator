'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculateSleepDebt, sleepDebtSeverities } from './sleepDebtLogic';
import { SleepDebtResult } from './sleepDebtTypes';
import { Moon, Clock, AlertTriangle, Heart, Brain, TrendingDown, TrendingUp, Zap, Shield } from 'lucide-react';

interface SleepDebtCalculatorProps {
  locale: 'en' | 'tr';
}

const dayLabels = {
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  tr: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
};

const SleepDebtCalculator: React.FC<SleepDebtCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [idealSleep, setIdealSleep] = useState<string>('8');
  const [dailySleep, setDailySleep] = useState<string[]>(['', '', '', '', '', '', '']);
  const [result, setResult] = useState<SleepDebtResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleDaySleepChange = (index: number, value: string) => {
    const newDailySleep = [...dailySleep];
    newDailySleep[index] = value;
    setDailySleep(newDailySleep);
  };

  const handleCalculate = () => {
    setError('');

    const ideal = parseFloat(idealSleep);
    if (!ideal || ideal < 4 || ideal > 12) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli bir ideal uyku süresi girin (4-12 saat)'
          : 'Please enter a valid ideal sleep duration (4-12 hours)'
      );
      return;
    }

    const hours: number[] = [];
    for (const val of dailySleep) {
      const h = parseFloat(val);
      if (isNaN(h) || h < 0 || h > 24) {
        setError(
          locale === 'tr'
            ? 'Lütfen her gün için geçerli uyku süreleri girin (0-24 saat)'
            : 'Please enter valid sleep durations for each day (0-24 hours)'
        );
        return;
      }
      hours.push(h);
    }

    const sleepResult = calculateSleepDebt({
      idealSleepHours: ideal,
      dailySleepHours: hours,
    });
    setResult(sleepResult);
  };

  const handleReset = () => {
    setIdealSleep('8');
    setDailySleep(['', '', '', '', '', '', '']);
    setResult(null);
    setError('');
  };

  const severityData = result ? sleepDebtSeverities[result.severity] : null;

  const impactIcons: Record<string, React.ReactNode> = {
    cognitive: <Brain className="h-5 w-5" />,
    mood: <Zap className="h-5 w-5" />,
    immune: <Shield className="h-5 w-5" />,
    weight: <TrendingUp className="h-5 w-5" />,
    performance: <TrendingDown className="h-5 w-5" />,
    heart: <Heart className="h-5 w-5" />,
  };

  const impactColors: Record<string, string> = {
    low: 'text-green-600 bg-green-50',
    moderate: 'text-yellow-600 bg-yellow-50',
    high: 'text-orange-600 bg-orange-50',
    severe: 'text-red-600 bg-red-50',
  };

  const impactLabels: Record<string, Record<string, string>> = {
    low: { en: 'Low', tr: 'Düşük' },
    moderate: { en: 'Moderate', tr: 'Orta' },
    high: { en: 'High', tr: 'Yüksek' },
    severe: { en: 'Severe', tr: 'Ciddi' },
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
            <Moon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Uyku Borcu Hesaplama' : 'Sleep Debt Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Haftalık uyku borcunuzu hesaplayın'
                : 'Calculate your weekly sleep debt'}
            </p>
          </div>
        </div>

        {/* Ideal Sleep */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'İdeal Uyku Süreniz (saat)' : 'Your Ideal Sleep Duration (hours)'}
            type="number"
            value={idealSleep}
            onChange={(e) => setIdealSleep(e.target.value)}
            placeholder="8"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'saat' : 'hrs'}</span>}
            required
          />
          <p className="mt-1 text-xs text-neutral-500">
            {locale === 'tr'
              ? 'Yetişkinler için önerilen: 7-9 saat'
              : 'Recommended for adults: 7-9 hours'}
          </p>
        </div>

        {/* Daily Sleep Inputs */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Son 7 Gündeki Uyku Süreleriniz' : 'Your Sleep Duration for the Last 7 Days'}
          </label>
          <div className="grid grid-cols-7 gap-2">
            {dayLabels[locale].map((day, index) => (
              <div key={index} className="text-center">
                <span className="mb-1 block text-xs font-medium text-neutral-500">{day}</span>
                <input
                  type="number"
                  value={dailySleep[index]}
                  onChange={(e) => handleDaySleepChange(index, e.target.value)}
                  placeholder="0"
                  step="0.5"
                  min="0"
                  max="24"
                  className="w-full rounded-lg border border-neutral-300 px-1 py-2 text-center text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                />
                <span className="mt-0.5 block text-[10px] text-neutral-400">
                  {locale === 'tr' ? 'sa' : 'hr'}
                </span>
              </div>
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

      {/* Result */}
      {result && severityData && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Toplam Uyku Borcunuz' : 'Your Total Sleep Debt'}
              </h3>
              <div className="mb-2 text-6xl font-bold text-indigo-600">
                {result.totalDebt}
                <span className="text-2xl font-normal text-indigo-400">
                  {' '}{locale === 'tr' ? 'saat' : 'hrs'}
                </span>
              </div>
              <Badge
                variant={
                  result.severity === 'none'
                    ? 'success'
                    : result.severity === 'mild'
                      ? 'primary'
                      : result.severity === 'moderate'
                        ? 'warning'
                        : 'danger'
                }
                size="lg"
              >
                {severityData.label[locale]}
              </Badge>
              <p className="mt-4 text-sm text-neutral-700">
                {severityData.interpretation[locale]}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="mt-1 text-2xl font-bold text-neutral-900">{result.averageSleep}</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Ort. Uyku' : 'Avg. Sleep'}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <TrendingDown className="h-4 w-4" />
                </div>
                <div className="mt-1 text-2xl font-bold text-neutral-900">{result.dailyDeficit}</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Günlük Açık' : 'Daily Deficit'}
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-neutral-500">
                  <Moon className="h-4 w-4" />
                </div>
                <div className="mt-1 text-2xl font-bold text-neutral-900">{result.recoveryDays}</div>
                <div className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'Toparlanma' : 'Recovery'}
                  <br />
                  {locale === 'tr' ? '(gün)' : '(days)'}
                </div>
              </div>
            </div>
          </Card>

          {/* Sleep Bar Chart */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Haftalık Uyku Grafiği' : 'Weekly Sleep Chart'}
            </h3>
            <div className="flex items-end justify-between gap-2" style={{ height: '200px' }}>
              {dailySleep.map((val, index) => {
                const hours = parseFloat(val) || 0;
                const ideal = parseFloat(idealSleep) || 8;
                const maxHeight = 180;
                const barHeight = Math.min((hours / 12) * maxHeight, maxHeight);
                const idealLine = (ideal / 12) * maxHeight;
                const isDeficit = hours < ideal;

                return (
                  <div key={index} className="relative flex flex-1 flex-col items-center">
                    {/* Ideal line indicator */}
                    <div
                      className="absolute left-0 right-0 border-t-2 border-dashed border-green-400"
                      style={{ bottom: `${idealLine + 20}px` }}
                    />
                    {/* Bar */}
                    <div
                      className={`w-full rounded-t-lg transition-all ${
                        isDeficit
                          ? 'bg-gradient-to-t from-red-400 to-orange-300'
                          : 'bg-gradient-to-t from-green-400 to-emerald-300'
                      }`}
                      style={{ height: `${barHeight}px`, minHeight: hours > 0 ? '4px' : '0px' }}
                    />
                    {/* Value */}
                    <span className="mt-1 text-xs font-medium text-neutral-600">{hours}h</span>
                    {/* Day label */}
                    <span className="text-xs text-neutral-400">{dayLabels[locale][index]}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-green-400" />
                {locale === 'tr' ? 'Yeterli' : 'Sufficient'}
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 rounded bg-orange-400" />
                {locale === 'tr' ? 'Yetersiz' : 'Insufficient'}
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-3 w-3 border-t-2 border-dashed border-green-400" style={{ width: '12px' }} />
                {locale === 'tr' ? 'İdeal' : 'Ideal'}
              </span>
            </div>
          </Card>

          {/* Health Impact Cards */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <AlertTriangle className="mr-2 inline h-5 w-5 text-amber-500" />
              {locale === 'tr' ? 'Sağlık Etkileri' : 'Health Impact'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {result.healthEffects.map((effect, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 rounded-xl p-3 ${impactColors[effect.impact]}`}
                >
                  <div className="mt-0.5 shrink-0">
                    {impactIcons[effect.area]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">
                        {effect.description[locale]}
                      </span>
                    </div>
                    <span className="mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium opacity-80">
                      {locale === 'tr' ? 'Etki: ' : 'Impact: '}{impactLabels[effect.impact][locale]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recovery Plan */}
          {result.recoveryPlan.length > 0 && (
            <Card>
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                <Moon className="mr-2 inline h-5 w-5 text-indigo-500" />
                {locale === 'tr' ? 'Toparlanma Planı' : 'Recovery Plan'}
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                {locale === 'tr'
                  ? `Her gece ${parseFloat(idealSleep) + 1}-${parseFloat(idealSleep) + 2} saat uyuyarak yaklaşık ${result.recoveryDays} günde toparlanabilirsiniz.`
                  : `By sleeping ${parseFloat(idealSleep) + 1}-${parseFloat(idealSleep) + 2} hours each night, you can recover in approximately ${result.recoveryDays} days.`}
              </p>
              <div className="space-y-2">
                {result.recoveryPlan.slice(0, 7).map((day) => (
                  <div key={day.day} className="flex items-center gap-3">
                    <span className="w-16 shrink-0 text-sm font-medium text-neutral-600">
                      {locale === 'tr' ? `${day.day}. Gün` : `Day ${day.day}`}
                    </span>
                    <div className="flex-1">
                      <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 transition-all"
                          style={{
                            width: `${Math.max(5, ((result.totalDebt - day.remainingDebt) / result.totalDebt) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                    <span className="w-20 shrink-0 text-right text-xs text-neutral-500">
                      {day.recommendedSleep}h {locale === 'tr' ? 'uyku' : 'sleep'}
                    </span>
                  </div>
                ))}
                {result.recoveryPlan.length > 7 && (
                  <p className="text-center text-sm text-neutral-500">
                    {locale === 'tr'
                      ? `... ve ${result.recoveryPlan.length - 7} gün daha`
                      : `... and ${result.recoveryPlan.length - 7} more days`}
                  </p>
                )}
              </div>
            </Card>
          )}

          {/* Quick Tips */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Uyku Kalitesini Artırma İpuçları' : 'Tips to Improve Sleep Quality'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {(locale === 'tr'
                ? [
                    { icon: '🕐', text: 'Her gün aynı saatte yatıp kalkın' },
                    { icon: '📱', text: 'Yatmadan 1 saat önce ekranları bırakın' },
                    { icon: '☕', text: 'Öğleden sonra kafein tüketimini azaltın' },
                    { icon: '🌡️', text: 'Yatak odası sıcaklığını 18-20°C tutun' },
                    { icon: '🏃', text: 'Düzenli egzersiz yapın ama yatmadan 3 saat önce bitirin' },
                    { icon: '🌙', text: 'Karanlık ve sessiz bir uyku ortamı oluşturun' },
                  ]
                : [
                    { icon: '🕐', text: 'Go to bed and wake up at the same time every day' },
                    { icon: '📱', text: 'Put away screens 1 hour before bed' },
                    { icon: '☕', text: 'Reduce caffeine intake after noon' },
                    { icon: '🌡️', text: 'Keep bedroom temperature at 18-20°C (65-68°F)' },
                    { icon: '🏃', text: 'Exercise regularly but finish 3 hours before bed' },
                    { icon: '🌙', text: 'Create a dark and quiet sleep environment' },
                  ]
              ).map((tip, index) => (
                <div key={index} className="flex items-start gap-2 rounded-lg bg-neutral-50 p-3">
                  <span className="text-lg">{tip.icon}</span>
                  <span className="text-sm text-neutral-700">{tip.text}</span>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default SleepDebtCalculator;
