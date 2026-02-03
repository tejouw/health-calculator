'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculatePeriod, getCyclePhases, getPhaseRecommendations } from './periodLogic';
import { PeriodInput } from './periodTypes';
import { Calendar, Heart, Droplets, TrendingUp, Lightbulb, AlertCircle } from 'lucide-react';
import CycleHealthGuide from './components/CycleHealthGuide';

interface PeriodCalculatorProps {
  locale: 'en' | 'tr';
}

const PeriodCalculator: React.FC<PeriodCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [lastPeriodDate, setLastPeriodDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [periodLength, setPeriodLength] = useState<string>('5');
  const [result, setResult] = useState<ReturnType<typeof calculatePeriod> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!lastPeriodDate) {
      setError(
        locale === 'tr'
          ? 'Lütfen son adet tarihinizi girin'
          : 'Please enter your last period date'
      );
      return;
    }

    const cycleLengthNum = parseInt(cycleLength);
    const periodLengthNum = parseInt(periodLength);

    if (!cycleLengthNum || cycleLengthNum < 21 || cycleLengthNum > 45) {
      setError(
        locale === 'tr'
          ? 'Döngü uzunluğu 21-45 gün arasında olmalıdır'
          : 'Cycle length must be between 21-45 days'
      );
      return;
    }

    if (!periodLengthNum || periodLengthNum < 2 || periodLengthNum > 10) {
      setError(
        locale === 'tr'
          ? 'Adet süresi 2-10 gün arasında olmalıdır'
          : 'Period duration must be between 2-10 days'
      );
      return;
    }

    const selectedDate = new Date(lastPeriodDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      setError(
        locale === 'tr'
          ? 'Son adet tarihi gelecekte olamaz'
          : 'Last period date cannot be in the future'
      );
      return;
    }

    // Check if date is more than 90 days in the past
    const daysSinceLastPeriod = Math.floor((today.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceLastPeriod > 90) {
      setError(
        locale === 'tr'
          ? 'Uyarı: Son adetiniz 90 günden daha uzun süre önce. Düzensiz bir döngünüz olabilir.'
          : 'Warning: Your last period was more than 90 days ago. You may have an irregular cycle.'
      );
    }

    const input: PeriodInput = {
      lastPeriodDate: selectedDate,
      cycleLength: cycleLengthNum,
      periodLength: periodLengthNum,
      numberOfCycles: 12,
    };

    try {
      const periodResult = calculatePeriod(input, locale);
      setResult(periodResult);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama hatası. Lütfen değerlerinizi kontrol edin.'
          : 'Calculation error. Please check your values.'
      );
    }
  };

  const handleReset = () => {
    setLastPeriodDate('');
    setCycleLength('28');
    setPeriodLength('5');
    setResult(null);
    setError('');
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const cyclePhases = getCyclePhases(locale);
  const phaseRecommendations = result ? getPhaseRecommendations(result.currentCycleDay, locale) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Adet Takvimi' : 'Period Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Adet Döneminizi ve Verimli Günlerinizi Takip Edin'
                : 'Track Your Menstrual Cycle and Fertile Days'}
            </p>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <Input
            label={locale === 'tr' ? 'Son Adet Başlangıç Tarihi' : 'Last Period Start Date'}
            type="date"
            value={lastPeriodDate}
            onChange={(e) => setLastPeriodDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            required
            helperText={
              locale === 'tr'
                ? 'Kanamanın başladığı ilk günü seçin'
                : 'Select the first day bleeding started'
            }
          />

          <div className="grid gap-6 sm:grid-cols-2">
            <Input
              label={locale === 'tr' ? 'Ortalama Döngü Uzunluğu' : 'Average Cycle Length'}
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              min={21}
              max={45}
              placeholder="28"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'gün' : 'days'}</span>}
              required
              helperText={
                locale === 'tr'
                  ? 'Bir adetin ilk gününden sonrakinin ilk gününe kadar'
                  : 'From first day of one period to first day of next'
              }
            />

            <Input
              label={locale === 'tr' ? 'Adet Süresi' : 'Period Duration'}
              type="number"
              value={periodLength}
              onChange={(e) => setPeriodLength(e.target.value)}
              min={2}
              max={10}
              placeholder="5"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'gün' : 'days'}</span>}
              required
              helperText={
                locale === 'tr'
                  ? 'Kanamanın kaç gün sürdüğü'
                  : 'How many days bleeding lasts'
              }
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-orange-50 border border-orange-200 p-3">
            <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-800">{error}</p>
          </div>
        )}

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

      {/* Results */}
      {result && (
        <div className="space-y-4">
          {/* Current Status */}
          <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Mevcut Durum' : 'Current Status'}
            </h3>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Döngü Günü' : 'Cycle Day'}
                </div>
                <div className="text-3xl font-bold text-pink-600">
                  {result.currentCycleDay}
                  <span className="ml-1 text-lg font-normal text-neutral-600">
                    / {cycleLength}
                  </span>
                </div>
                {result.isCurrentlyMenstruating && (
                  <Badge variant="danger" size="sm" className="mt-2">
                    {locale === 'tr' ? 'Menstrüasyon' : 'Menstruating'}
                  </Badge>
                )}
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Döngü Tipi' : 'Cycle Type'}
                </div>
                <div className="text-lg font-bold text-neutral-900">{result.cycleTypeDescription}</div>
                <Badge
                  variant={result.cycleType === 'normal' ? 'success' : 'warning'}
                  size="sm"
                  className="mt-2"
                >
                  {result.cycleType === 'normal'
                    ? locale === 'tr'
                      ? 'Normal'
                      : 'Normal'
                    : locale === 'tr'
                    ? 'Dikkat'
                    : 'Attention'}
                </Badge>
              </div>

              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Verimli Pencere' : 'Fertile Window'}
                </div>
                <div className="text-lg font-bold text-neutral-900">
                  {result.isInFertileWindow
                    ? locale === 'tr'
                      ? 'Şu Anda ✓'
                      : 'Currently ✓'
                    : locale === 'tr'
                    ? `${result.daysUntilOvulation > 0 ? result.daysUntilOvulation - 5 : 0} gün içinde`
                    : `In ${result.daysUntilOvulation > 0 ? result.daysUntilOvulation - 5 : 0} days`}
                </div>
                {result.isInFertileWindow && (
                  <Badge variant="success" size="sm" className="mt-2">
                    <Heart className="h-3 w-3 mr-1" />
                    {locale === 'tr' ? 'Yüksek Verimlilik' : 'High Fertility'}
                  </Badge>
                )}
              </div>
            </div>
          </Card>

          {/* Next Period & Ovulation */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Gelecek Tahminler' : 'Upcoming Predictions'}
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-red-600" />
                  <h4 className="font-semibold text-red-900">
                    {locale === 'tr' ? 'Sonraki Adet' : 'Next Period'}
                  </h4>
                </div>
                <div className="text-2xl font-bold text-red-900 mb-2">
                  {formatDate(result.nextPeriodDate)}
                </div>
                <p className="text-sm text-red-700">
                  {locale === 'tr'
                    ? `${result.daysUntilNextPeriod} gün içinde`
                    : `In ${result.daysUntilNextPeriod} days`}
                </p>
                <p className="mt-2 text-xs text-red-600">
                  {locale === 'tr'
                    ? `${formatDate(result.nextPeriodDate)} - ${formatDate(result.nextPeriodEndDate)}`
                    : `${formatDate(result.nextPeriodDate)} - ${formatDate(result.nextPeriodEndDate)}`}
                </p>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-green-900">
                    {locale === 'tr' ? 'Yumurtlama' : 'Ovulation'}
                  </h4>
                </div>
                <div className="text-2xl font-bold text-green-900 mb-2">
                  {formatDate(result.estimatedOvulationDate)}
                </div>
                <p className="text-sm text-green-700">
                  {result.daysUntilOvulation > 0
                    ? locale === 'tr'
                      ? `${result.daysUntilOvulation} gün içinde`
                      : `In ${result.daysUntilOvulation} days`
                    : locale === 'tr'
                    ? 'Geçti'
                    : 'Passed'}
                </p>
                <p className="mt-2 text-xs text-green-600">
                  {locale === 'tr' ? 'Verimli pencere: ' : 'Fertile window: '}
                  {formatDate(result.fertileWindowStart)} - {formatDate(result.fertileWindowEnd)}
                </p>
              </div>
            </div>
          </Card>

          {/* Current Phase Recommendations */}
          {phaseRecommendations && (
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-600" />
                <h3 className="text-lg font-semibold text-neutral-900">
                  {locale === 'tr'
                    ? `${phaseRecommendations.phase} Fazı Önerileri`
                    : `${phaseRecommendations.phase} Phase Recommendations`}
                </h3>
              </div>

              <ul className="space-y-2">
                {phaseRecommendations.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Cycle Phases */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Adet Döngüsü Fazları' : 'Menstrual Cycle Phases'}
            </h3>

            <div className="space-y-3">
              {cyclePhases.map((phase, index) => (
                <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">{phase.name}</h4>
                    <Badge variant="secondary" size="sm">
                      {phase.dayRange}
                    </Badge>
                  </div>
                  <p className="mb-2 text-sm text-neutral-700">{phase.description}</p>
                  <div className="text-xs text-neutral-600">
                    <span className="font-medium">{locale === 'tr' ? 'Hormonlar: ' : 'Hormones: '}</span>
                    {phase.hormonalChanges}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Future Periods Calendar */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Gelecek 12 Ay Takvimi' : 'Next 12 Months Calendar'}
            </h3>

            <div className="space-y-3">
              {result.futurePeriods.slice(0, 6).map((prediction) => (
                <div
                  key={prediction.cycleNumber}
                  className="rounded-lg border border-neutral-200 bg-white p-4"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-900">{prediction.month}</h4>
                    <Badge variant="secondary" size="sm">
                      {locale === 'tr' ? 'Döngü' : 'Cycle'} {prediction.cycleNumber}
                    </Badge>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div>
                      <span className="text-neutral-600">
                        {locale === 'tr' ? 'Adet: ' : 'Period: '}
                      </span>
                      <span className="font-medium text-red-700">
                        {prediction.periodStartDate.toLocaleDateString(
                          locale === 'tr' ? 'tr-TR' : 'en-US',
                          { month: 'short', day: 'numeric' }
                        )}{' '}
                        -{' '}
                        {prediction.periodEndDate.toLocaleDateString(
                          locale === 'tr' ? 'tr-TR' : 'en-US',
                          { month: 'short', day: 'numeric' }
                        )}
                      </span>
                    </div>

                    <div>
                      <span className="text-neutral-600">
                        {locale === 'tr' ? 'Yumurtlama: ' : 'Ovulation: '}
                      </span>
                      <span className="font-medium text-green-700">
                        {prediction.ovulationDate.toLocaleDateString(
                          locale === 'tr' ? 'tr-TR' : 'en-US',
                          { month: 'short', day: 'numeric' }
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-blue-50 border border-blue-200 p-3">
              <p className="text-xs text-blue-800">
                {locale === 'tr'
                  ? 'Bu tahminler ortalama döngü uzunluğunuza dayanmaktadır. Gerçek tarihler değişebilir. Daha doğru takip için günlük takip uygulamaları kullanın.'
                  : 'These predictions are based on your average cycle length. Actual dates may vary. Use daily tracking apps for more accurate monitoring.'}
              </p>
            </div>
          </Card>

          {/* Important Note */}
          <Card className="animate-slide-up border-2 border-blue-100 bg-blue-50">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="mb-2 font-semibold text-blue-900">
                  {locale === 'tr' ? 'Önemli Bilgi' : 'Important Information'}
                </h4>
                <p className="text-sm text-blue-800">
                  {locale === 'tr'
                    ? 'Bu hesaplayıcı tahminler sağlar ve doğum kontrolü için tek başına güvenilir değildir. Hamilelik önleme için mutlaka güvenilir doğum kontrol yöntemleri kullanın. Düzensiz döngüler, şiddetli ağrı veya ağır kanama durumunda bir sağlık uzmanına danışın.'
                    : 'This calculator provides estimates and is not reliable as sole birth control. Always use reliable contraception for pregnancy prevention. Consult a healthcare provider for irregular cycles, severe pain, or heavy bleeding.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Cycle Health Guide */}
          <CycleHealthGuide locale={locale} />
        </div>
      )}
    </div>
  );
};

export default PeriodCalculator;
