'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateConceptionDate, formatDate, getDayOfWeek } from './conceptionDateLogic';
import { ConceptionMethod } from './conceptionDateTypes';
import { Baby, Calendar, Heart, Clock } from 'lucide-react';

interface ConceptionDateCalculatorProps {
  locale: 'en' | 'tr';
}

const ConceptionDateCalculator: React.FC<ConceptionDateCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [method, setMethod] = useState<ConceptionMethod>('lmp');
  const [lmpDate, setLmpDate] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [result, setResult] = useState<ReturnType<typeof calculateConceptionDate>>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (method === 'lmp' && !lmpDate) {
      setError(
        locale === 'tr'
          ? 'Lütfen son adet tarihinizi girin'
          : 'Please enter your last menstrual period date'
      );
      return;
    }

    if (method === 'due-date' && !dueDate) {
      setError(
        locale === 'tr'
          ? 'Lütfen tahmini doğum tarihinizi girin'
          : 'Please enter your estimated due date'
      );
      return;
    }

    const cycleLengthNum = parseInt(cycleLength) || 28;
    if (cycleLengthNum < 20 || cycleLengthNum > 45) {
      setError(
        locale === 'tr'
          ? 'Döngü uzunluğu 20 ile 45 gün arasında olmalıdır'
          : 'Cycle length must be between 20 and 45 days'
      );
      return;
    }

    const calcResult = calculateConceptionDate({
      method,
      lastMenstrualPeriod: method === 'lmp' ? lmpDate : undefined,
      dueDate: method === 'due-date' ? dueDate : undefined,
      cycleLength: cycleLengthNum,
    });

    setResult(calcResult);
  };

  const handleReset = () => {
    setLmpDate('');
    setDueDate('');
    setCycleLength('28');
    setResult(null);
    setError('');
  };

  const trimesterLabels = {
    1: { en: '1st Trimester', tr: '1. Trimester' },
    2: { en: '2nd Trimester', tr: '2. Trimester' },
    3: { en: '3rd Trimester', tr: '3. Trimester' },
  };

  const trimesterColors = {
    1: 'primary' as const,
    2: 'warning' as const,
    3: 'success' as const,
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Baby className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Gebe Kalma Tarihi Hesaplama' : 'Conception Date Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Tahmini gebe kalma tarihinizi hesaplayın'
                : 'Calculate your estimated conception date'}
            </p>
          </div>
        </div>

        {/* Calculation Method */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Hesaplama Yöntemi' : 'Calculation Method'}
            name="method"
            value={method}
            onChange={(value) => setMethod(value as ConceptionMethod)}
            options={[
              {
                value: 'lmp',
                label: locale === 'tr' ? 'Son Adet Tarihi' : 'Last Menstrual Period',
                description:
                  locale === 'tr'
                    ? 'En son adet kanamanızın başladığı tarih'
                    : 'The date your last period started',
              },
              {
                value: 'due-date',
                label: locale === 'tr' ? 'Tahmini Doğum Tarihi' : 'Due Date',
                description:
                  locale === 'tr'
                    ? 'Doktor tarafından verilen tahmini doğum tarihi'
                    : 'The due date given by your doctor',
              },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-6 sm:grid-cols-2">
          {method === 'lmp' ? (
            <Input
              label={locale === 'tr' ? 'Son Adet Tarihi' : 'Last Menstrual Period'}
              type="date"
              value={lmpDate}
              onChange={(e) => setLmpDate(e.target.value)}
              required
            />
          ) : (
            <Input
              label={locale === 'tr' ? 'Tahmini Doğum Tarihi' : 'Estimated Due Date'}
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          )}
          <Input
            label={locale === 'tr' ? 'Adet Döngüsü Uzunluğu' : 'Cycle Length'}
            type="number"
            value={cycleLength}
            onChange={(e) => setCycleLength(e.target.value)}
            placeholder="28"
            rightIcon={<span className="text-sm">{locale === 'tr' ? 'gün' : 'days'}</span>}
          />
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

      {/* Results */}
      {result && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini Gebe Kalma Tarihi' : 'Estimated Conception Date'}
              </h3>
              <div className="mb-2 text-3xl font-bold text-pink-600">
                {formatDate(result.conceptionDate, locale)}
              </div>
              <p className="text-sm text-neutral-500">
                {getDayOfWeek(result.conceptionDate, locale)}
              </p>
              <div className="mt-4">
                <Badge variant={trimesterColors[result.trimester]} size="lg">
                  {trimesterLabels[result.trimester][locale]}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Key Dates Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border border-blue-100 bg-blue-50/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-blue-600">
                    {locale === 'tr' ? 'Yumurtlama Tarihi' : 'Ovulation Date'}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {formatDate(result.ovulationDate, locale)}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border border-purple-100 bg-purple-50/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                  <Heart className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-purple-600">
                    {locale === 'tr' ? 'Doğurgan Dönem' : 'Fertile Window'}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {formatDate(result.fertileWindowStart, locale)} -{' '}
                    {formatDate(result.fertileWindowEnd, locale)}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border border-green-100 bg-green-50/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-green-600">
                    {locale === 'tr' ? 'Gebelik Yaşı' : 'Gestational Age'}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {result.gestationalAge.weeks}{' '}
                    {locale === 'tr' ? 'hafta' : 'weeks'}{' '}
                    {result.gestationalAge.days}{' '}
                    {locale === 'tr' ? 'gün' : 'days'}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="border border-orange-100 bg-orange-50/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                  <Baby className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-orange-600">
                    {locale === 'tr' ? 'Tahmini Doğum Tarihi' : 'Due Date'}
                  </p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {formatDate(result.dueDate, locale)}
                  </p>
                  {result.weeksUntilDue > 0 && (
                    <p className="text-xs text-neutral-500">
                      {result.weeksUntilDue} {locale === 'tr' ? 'hafta kaldı' : 'weeks remaining'}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Pregnancy Progress */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Gebelik İlerlemesi' : 'Pregnancy Progress'}
            </h3>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-neutral-600">
                <span>{locale === 'tr' ? 'İlerleme' : 'Progress'}</span>
                <span>
                  {Math.min(100, Math.round((result.gestationalAge.weeks / 40) * 100))}%
                </span>
              </div>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (result.gestationalAge.weeks / 40) * 100)}%`,
                  }}
                />
              </div>
              <div className="mt-1 flex justify-between text-xs text-neutral-400">
                <span>{locale === 'tr' ? '1. Trimester' : '1st Trimester'}</span>
                <span>{locale === 'tr' ? '2. Trimester' : '2nd Trimester'}</span>
                <span>{locale === 'tr' ? '3. Trimester' : '3rd Trimester'}</span>
              </div>
            </div>
          </Card>

          {/* Milestones */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Gebelik Kilometre Taşları' : 'Pregnancy Milestones'}
            </h3>
            <div className="space-y-3">
              {result.milestones.map((milestone) => (
                <div
                  key={milestone.week}
                  className={`flex items-start gap-3 rounded-lg border p-3 transition-colors ${
                    milestone.reached
                      ? 'border-green-200 bg-green-50'
                      : 'border-neutral-200 bg-neutral-50'
                  }`}
                >
                  <span className="mt-0.5 text-xl">{milestone.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900">
                        {locale === 'tr' ? `${milestone.week}. Hafta` : `Week ${milestone.week}`}
                      </span>
                      <span className="text-sm font-medium text-neutral-700">
                        — {milestone.title[locale]}
                      </span>
                      {milestone.reached && (
                        <Badge variant="success" size="sm">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-neutral-600">
                      {milestone.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default ConceptionDateCalculator;
