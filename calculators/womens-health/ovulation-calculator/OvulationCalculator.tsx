'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Select, Card, Badge } from '@/components/ui';
import {
  calculateOvulation,
  cycleLengthOptions,
  formatDate,
  formatShortDate,
} from './ovulationLogic';
import { OvulationInput } from './ovulationTypes';
import { Heart, Calendar, Sparkles, TrendingUp, Baby, AlertCircle } from 'lucide-react';

interface OvulationCalculatorProps {
  locale: 'en' | 'tr';
}

const OvulationCalculator: React.FC<OvulationCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [lastMenstrualPeriod, setLastMenstrualPeriod] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [result, setResult] = useState<ReturnType<typeof calculateOvulation> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!lastMenstrualPeriod) {
      setError(
        locale === 'tr'
          ? 'Lütfen son adet tarihinizi girin'
          : 'Please enter your last menstrual period date'
      );
      return;
    }

    const cycleLengthNum = parseInt(cycleLength);
    if (cycleLengthNum < 21 || cycleLengthNum > 45) {
      setError(
        locale === 'tr'
          ? 'Döngü uzunluğu 21-45 gün arasında olmalıdır'
          : 'Cycle length must be between 21 and 45 days'
      );
      return;
    }

    try {
      const input: OvulationInput = {
        lastMenstrualPeriod: new Date(lastMenstrualPeriod),
        cycleLength: cycleLengthNum,
      };

      const ovulationResult = calculateOvulation(input);
      setResult(ovulationResult);
    } catch (err: any) {
      setError(
        err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error')
      );
    }
  };

  const handleReset = () => {
    setLastMenstrualPeriod('');
    setCycleLength('28');
    setResult(null);
    setError('');
  };

  const getFertilityColor = (level: string) => {
    switch (level) {
      case 'peak':
        return 'bg-rose-500 text-white';
      case 'high':
        return 'bg-pink-400 text-white';
      case 'medium':
        return 'bg-pink-200 text-pink-900';
      default:
        return 'bg-neutral-200 text-neutral-700';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yumurtlama Hesaplayıcı' : 'Ovulation Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Verimli günlerinizi ve yumurtlama tarihinizi hesaplayın'
                : 'Calculate your fertile days and ovulation date'}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            label={
              locale === 'tr'
                ? 'Son Adet Tarihi (İlk Gün)'
                : 'Last Menstrual Period (First Day)'
            }
            type="date"
            value={lastMenstrualPeriod}
            onChange={(e) => setLastMenstrualPeriod(e.target.value)}
            required
          />

          <Select
            label={locale === 'tr' ? 'Ortalama Döngü Uzunluğu' : 'Average Cycle Length'}
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            options={cycleLengthOptions.map((option) => ({
              value: option.value.toString(),
              label: option.label[locale],
            }))}
          />
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

      {result && (
        <>
          {/* Current Status Card */}
          {result.isInFertileWindow && (
            <Card className="animate-slide-up border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-rose-600" />
                <div>
                  <h3 className="mb-1 text-lg font-bold text-rose-900">
                    {locale === 'tr' ? 'Verimli Periyodasınız!' : "You're in Your Fertile Window!"}
                  </h3>
                  <p className="text-sm text-rose-700">
                    {locale === 'tr'
                      ? 'Bu, gebe kalmak için en iyi zamanlardan biridir.'
                      : 'This is one of the best times to conceive.'}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Ovulation Date Card */}
          <Card className="animate-slide-up">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Yumurtlama Tarihi' : 'Ovulation Date'}
              </h3>
              <div className="mb-4 flex items-center justify-center gap-2">
                <Calendar className="h-8 w-8 text-pink-600" />
                <div className="text-4xl font-bold text-pink-600">
                  {formatDate(result.ovulationDate, locale)}
                </div>
              </div>
              {result.daysUntilOvulation > 0 && (
                <Badge variant="primary" size="lg">
                  {result.daysUntilOvulation}{' '}
                  {locale === 'tr' ? 'gün kaldı' : 'days until ovulation'}
                </Badge>
              )}
              {result.daysUntilOvulation === 0 && (
                <Badge variant="primary" size="lg">
                  {locale === 'tr' ? 'Bugün!' : 'Today!'}
                </Badge>
              )}
              {result.daysUntilOvulation < 0 && (
                <Badge variant="outline" size="lg">
                  {locale === 'tr' ? 'Geçti' : 'Past'}
                </Badge>
              )}
            </div>

            <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Döngü Günü' : 'Cycle Day'}
                </p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">
                  {result.currentDayOfCycle}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Sonraki Regl' : 'Next Period'}
                </p>
                <p className="mt-1 font-semibold text-neutral-900">
                  {formatShortDate(result.nextPeriodDate, locale)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Test Günü' : 'Test Date'}
                </p>
                <p className="mt-1 font-semibold text-neutral-900">
                  {formatShortDate(result.pregnancyTestDate, locale)}
                </p>
              </div>
            </div>
          </Card>

          {/* Fertile Window Card */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-pink-600" />
              <h3 className="text-xl font-bold text-neutral-900">
                {locale === 'tr' ? 'Verimli Periyod (6 Gün)' : 'Fertile Window (6 Days)'}
              </h3>
            </div>
            <p className="mb-4 text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Gebelik olasılığının en yüksek olduğu günler. Yumurtlamadan önceki günler en verimli olanlardır.'
                : 'The days when you have the highest chance of getting pregnant. The days before ovulation are the most fertile.'}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {result.fertileDays.map((day, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg p-3 ${
                    day.isPast
                      ? 'bg-neutral-100 opacity-60'
                      : getFertilityColor(day.fertilityLevel)
                  }`}
                >
                  <div>
                    <p className="font-semibold">{formatShortDate(day.date, locale)}</p>
                    <p className="text-sm opacity-90">
                      {locale === 'tr' ? 'Döngü Günü' : 'Day'} {day.dayOfCycle}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium">{day.label[locale]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-pink-50 p-4">
              <div className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-pink-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    {locale === 'tr' ? 'En İyi Zamanlar' : 'Best Times to Conceive'}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-700">
                    {locale === 'tr'
                      ? 'Yumurtlamadan 1-2 gün önce ve yumurtlama günü gebe kalma şansınız en yüksektir. Sperm 5 güne kadar yaşayabildiğinden, yumurtlamadan birkaç gün önce ilişkiye girmek de etkili olabilir.'
                      : 'You have the highest chance of conception 1-2 days before ovulation and on ovulation day. Since sperm can survive for up to 5 days, having intercourse a few days before ovulation can also be effective.'}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* If Pregnant Card */}
          <Card className="animate-slide-up border-l-4 border-l-purple-500 bg-purple-50">
            <div className="flex items-start gap-3">
              <Baby className="h-6 w-6 text-purple-600" />
              <div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {locale === 'tr'
                    ? 'Bu Döngüde Gebe Kalırsanız'
                    : 'If You Conceive This Cycle'}
                </h3>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p>
                    <span className="font-semibold">
                      {locale === 'tr' ? 'Hamilelik Testi:' : 'Pregnancy Test:'}
                    </span>{' '}
                    {formatDate(result.pregnancyTestDate, locale)}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {locale === 'tr' ? 'Tahmini Doğum Tarihi:' : 'Estimated Due Date:'}
                    </span>{' '}
                    {formatDate(result.estimatedDueDate, locale)}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Important Notes */}
          <Card className="border-l-4 border-l-amber-500 bg-amber-50">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <div>
                <h4 className="mb-2 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Önemli Notlar' : 'Important Notes'}
                </h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Bu hesaplamalar tahminidir ve bireysel farklılıklar gösterebilir.'
                        : 'These calculations are estimates and may vary individually.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Düzenli olmayan döngüleriniz varsa sonuçlar daha az doğru olabilir.'
                        : 'Results may be less accurate if you have irregular cycles.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? 'Yumurtlama testleri veya bazal vücut sıcaklığı takibi daha kesin sonuçlar verebilir.'
                        : 'Ovulation tests or basal body temperature tracking can provide more accurate results.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600">•</span>
                    <span>
                      {locale === 'tr'
                        ? '6-12 ay boyunca hamile kalamıyorsanız bir sağlık uzmanına danışın.'
                        : 'If you cannot conceive after 6-12 months, consult a healthcare provider.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default OvulationCalculator;
