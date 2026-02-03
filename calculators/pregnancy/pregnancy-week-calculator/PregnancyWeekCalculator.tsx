'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import {
  calculatePregnancyWeek,
  trimesterInfo,
} from './pregnancyWeekLogic';
import { PregnancyWeekInput, PregnancyWeekResult } from './pregnancyWeekTypes';
import {
  Heart,
  Baby,
  Calendar,
  TrendingUp,
  Zap,
  AlertCircle,
} from 'lucide-react';
import PrenatalCareGuide from './components/PrenatalCareGuide';

interface PregnancyWeekCalculatorProps {
  locale: 'en' | 'tr';
}

const PregnancyWeekCalculator: React.FC<PregnancyWeekCalculatorProps> = ({
  locale,
}) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [calculationMethod, setCalculationMethod] = useState<
    'lmp' | 'conception' | 'dueDate'
  >('lmp');
  const [date, setDate] = useState<string>('');
  const [cycleLengthDays, setCycleLengthDays] = useState<string>('28');
  const [result, setResult] = useState<PregnancyWeekResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!date) {
      setError(
        locale === 'tr'
          ? 'Lütfen bir tarih girin'
          : 'Please enter a date'
      );
      return;
    }

    try {
      const input: PregnancyWeekInput = {
        calculationMethod,
        date,
        cycleLengthDays: parseInt(cycleLengthDays) || 28,
      };

      const calculationResult = calculatePregnancyWeek(input);
      setResult(calculationResult);
    } catch (err) {
      setError(
        locale === 'tr'
          ? 'Hesaplama sırasında hata oluştu'
          : 'Error during calculation'
      );
    }
  };

  const handleReset = () => {
    setDate('');
    setCycleLengthDays('28');
    setResult(null);
    setError('');
  };

  const getTrimesterColor = (trimester: number) => {
    switch (trimester) {
      case 1:
        return 'from-blue-500 to-cyan-500';
      case 2:
        return 'from-green-500 to-emerald-500';
      case 3:
        return 'from-orange-500 to-red-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage < 33) return 'bg-blue-500';
    if (percentage < 66) return 'bg-green-500';
    return 'bg-orange-500';
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr'
                ? 'Hamilelik Hafta Hesaplama'
                : 'Pregnancy Week Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Hamileliğin hangi haftasında olduğunuzu öğrenin'
                : 'Find out what week of pregnancy you are in'}
            </p>
          </div>
        </div>

        {/* Calculation Method Selection */}
        <div className="mb-6">
          <RadioGroup
            label={
              locale === 'tr'
                ? 'Hesaplama Yöntemi'
                : 'Calculation Method'
            }
            name="calculationMethod"
            value={calculationMethod}
            onChange={(value) =>
              setCalculationMethod(
                value as 'lmp' | 'conception' | 'dueDate'
              )
            }
            options={[
              {
                value: 'lmp',
                label: locale === 'tr' ? 'Son Adet Dönemi' : 'Last Menstrual Period',
                description:
                  locale === 'tr'
                    ? 'Son adet döneminin ilk günü'
                    : 'First day of last menstrual period',
              },
              {
                value: 'conception',
                label: locale === 'tr' ? 'Hamile Kalma Tarihi' : 'Conception Date',
                description:
                  locale === 'tr'
                    ? 'Tahmini hamile kalma tarihi'
                    : 'Estimated conception date',
              },
              {
                value: 'dueDate',
                label: locale === 'tr' ? 'Doğum Tarihi' : 'Due Date',
                description:
                  locale === 'tr'
                    ? 'Tahmini doğum tarihi'
                    : 'Estimated due date',
              },
            ]}
            orientation="vertical"
          />
        </div>

        {/* Date Input */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Input
            label={
              calculationMethod === 'lmp'
                ? locale === 'tr'
                  ? 'Son Adet Dönemi'
                  : 'Last Menstrual Period'
                : calculationMethod === 'conception'
                  ? locale === 'tr'
                    ? 'Hamile Kalma Tarihi'
                    : 'Conception Date'
                  : locale === 'tr'
                    ? 'Doğum Tarihi'
                    : 'Due Date'
            }
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {calculationMethod === 'lmp' && (
            <Input
              label={
                locale === 'tr'
                  ? 'Menstrüel Döngü Uzunluğu (Gün)'
                  : 'Menstrual Cycle Length (Days)'
              }
              type="number"
              value={cycleLengthDays}
              onChange={(e) => setCycleLengthDays(e.target.value)}
              placeholder="28"
              min="21"
              max="35"
              helperText={
                locale === 'tr'
                  ? 'Normal aralık 21-35 gün'
                  : 'Normal range 21-35 days'
              }
            />
          )}
        </div>

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-danger-50 p-3 text-sm text-danger-main">
            <AlertCircle className="h-4 w-4" />
            {error}
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
        <div className="space-y-6 animate-slide-up">
          {/* Main Result Card */}
          <Card className={`border-2 border-primary-100 bg-gradient-to-br ${getTrimesterColor(result.trimester)}/10`}>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              {/* Current Week */}
              <div className="text-center">
                <div className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  {locale === 'tr' ? 'Mevcut Hafta' : 'Current Week'}
                </div>
                <div className="text-5xl font-bold text-primary-600">
                  {result.currentWeek}
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  {locale === 'tr' ? 'Gün' : 'Day'} {result.currentDay}/7
                </div>
              </div>

              {/* Days Pregnant */}
              <div className="text-center">
                <div className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  {locale === 'tr'
                    ? 'Toplam Hamilelik Günü'
                    : 'Days Pregnant'}
                </div>
                <div className="text-5xl font-bold text-green-600">
                  {result.totalDaysPregnant}
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  ({(result.totalDaysPregnant / 7).toFixed(1)}{' '}
                  {locale === 'tr' ? 'hafta' : 'weeks'})
                </div>
              </div>

              {/* Days Until Due Date */}
              <div className="text-center">
                <div className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                  {locale === 'tr'
                    ? 'Doğum Tarihine Kadar'
                    : 'Days Until Due Date'}
                </div>
                <div className="text-5xl font-bold text-orange-600">
                  {result.daysUntilDueDate}
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  ({(result.daysUntilDueDate / 7).toFixed(1)}{' '}
                  {locale === 'tr' ? 'hafta' : 'weeks'})
                </div>
              </div>
            </div>

            {/* Trimester Badge */}
            <div className="flex flex-wrap items-center gap-4 border-t border-neutral-200 pt-6">
              <div>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Trimester' : 'Trimester'}
                </p>
                <Badge
                  variant={
                    result.trimester === 1
                      ? 'primary'
                      : result.trimester === 2
                        ? 'success'
                        : 'warning'
                  }
                  size="lg"
                >
                  {
                    trimesterInfo[result.trimester as 1 | 2 | 3].name[
                      locale
                    ]
                  }
                </Badge>
              </div>

              <div>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? 'Tahmini Doğum Tarihi'
                    : 'Estimated Due Date'}
                </p>
                <p className="text-lg font-semibold text-neutral-900">
                  {new Date(result.estimatedDueDate).toLocaleDateString(
                    locale === 'tr' ? 'tr-TR' : 'en-US',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }
                  )}
                </p>
              </div>
            </div>
          </Card>

          {/* Progress Bar */}
          <Card>
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-900">
                  {locale === 'tr'
                    ? 'Hamilelik İlerlemesi'
                    : 'Pregnancy Progress'}
                </h3>
                <span className="text-lg font-bold text-primary-600">
                  {result.percentageComplete}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div
                  className={`h-full rounded-full transition-all ${getProgressColor(result.percentageComplete)}`}
                  style={{ width: `${result.percentageComplete}%` }}
                />
              </div>
            </div>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? '280 günün'
                : 'of 280 days'}{' '}
              {result.totalDaysPregnant}{' '}
              {locale === 'tr' ? 'günü tamamlandı' : 'days completed'}
            </p>
          </Card>

          {/* Baby Development */}
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Baby className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Bebeğin Gelişimi'
                  : 'Baby Development'}
              </h3>
            </div>

            <div className="space-y-4">
              {/* Baby Size */}
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-3 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Tahmini Bebek Boyutu' : 'Estimated Baby Size'}
                </h4>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Uzunluk (CM)' : 'Length (CM)'}
                    </p>
                    <p className="text-xl font-bold text-neutral-900">
                      {result.babyLength.cm.toFixed(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Uzunluk (İnç)' : 'Length (Inches)'}
                    </p>
                    <p className="text-xl font-bold text-neutral-900">
                      {result.babyLength.inches.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Ağırlık (Gram)' : 'Weight (Grams)'}
                    </p>
                    <p className="text-xl font-bold text-neutral-900">
                      {result.babyWeight.grams.toFixed(0)}
                    </p>
                  </div>
                </div>

                {/* Baby Comparison */}
                <div className="mt-4 border-t border-blue-100 pt-4">
                  <p className="text-xs text-neutral-600">
                    {locale === 'tr'
                      ? 'Benzeri (Boy Olarak)'
                      : 'Size Comparison'}
                  </p>
                  <p className="text-lg font-semibold text-blue-600">
                    {result.babyComparison[locale]}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Current & Next Week Milestones */}
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Zap className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Bu Haftanın Gelişimi'
                  : 'This Week\'s Developments'}
              </h3>
            </div>

            <div className="space-y-3">
              {result.currentMilestones[locale].map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg bg-green-50 p-3"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-600" />
                  <p className="text-sm text-neutral-700">{milestone}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Next Week Milestones */}
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Sonraki Haftada Beklenecek Gelişmeler'
                  : 'Next Week\'s Milestones'}
              </h3>
            </div>

            <div className="space-y-3">
              {result.nextMilestones[locale].map((milestone, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg bg-amber-50 p-3"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-600" />
                  <p className="text-sm text-neutral-700">{milestone}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Maternal Changes */}
          <Card>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100">
                <Heart className="h-5 w-5 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Anne Değişiklikleri'
                  : 'Maternal Changes'}
              </h3>
            </div>

            <div className="space-y-3">
              {result.maternalChanges[locale].map((change, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-lg bg-pink-50 p-3"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-pink-600" />
                  <p className="text-sm text-neutral-700">{change}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Trimester Information */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr'
                ? trimesterInfo[result.trimester as 1 | 2 | 3].name.tr
                : trimesterInfo[result.trimester as 1 | 2 | 3].name.en}
            </h3>

            <p className="mb-4 text-sm text-neutral-700">
              {
                trimesterInfo[result.trimester as 1 | 2 | 3].description[
                  locale
                ]
              }
            </p>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-neutral-900">
                {locale === 'tr'
                  ? 'Temel Gelişmeler'
                  : 'Key Developments'}
              </h4>
              <ul className="space-y-2">
                {trimesterInfo[result.trimester as 1 | 2 | 3].keyDevelopments[
                  locale
                ].map((dev, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-neutral-700"
                  >
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-400" />
                    {dev}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Prenatal Care Guide */}
          <PrenatalCareGuide trimester={result.trimester as 1 | 2 | 3} locale={locale} />
        </div>
      )}
    </div>
  );
};

export default PregnancyWeekCalculator;
