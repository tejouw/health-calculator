'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import { calculateDueDate, calculationMethods, formatDate, getTrimesterInfo } from './dueDateLogic';
import { DueDateInput } from './dueDateTypes';
import { Baby, Calendar, Heart, CheckCircle2, Circle } from 'lucide-react';

interface DueDateCalculatorProps {
  locale: 'en' | 'tr';
}

const DueDateCalculator: React.FC<DueDateCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [calculationMethod, setCalculationMethod] = useState<'lmp' | 'conception' | 'ultrasound' | 'ivf'>('lmp');
  const [lmpDate, setLmpDate] = useState<string>('');
  const [cycleLength, setCycleLength] = useState<string>('28');
  const [conceptionDate, setConceptionDate] = useState<string>('');
  const [ultrasoundDate, setUltrasoundDate] = useState<string>('');
  const [gestationalWeeks, setGestationalWeeks] = useState<string>('');
  const [gestationalDays, setGestationalDays] = useState<string>('');
  const [ivfTransferDate, setIvfTransferDate] = useState<string>('');
  const [embryoAge, setEmbryoAge] = useState<3 | 5>(5);
  const [result, setResult] = useState<ReturnType<typeof calculateDueDate> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    try {
      const input: DueDateInput = {
        calculationMethod,
      };

      switch (calculationMethod) {
        case 'lmp':
          if (!lmpDate) {
            setError(locale === 'tr' ? 'Lütfen son adet tarihinizi girin' : 'Please enter your last menstrual period date');
            return;
          }
          input.lastMenstrualPeriod = new Date(lmpDate);
          input.cycleLength = parseInt(cycleLength) || 28;
          break;

        case 'conception':
          if (!conceptionDate) {
            setError(locale === 'tr' ? 'Lütfen döllendirme tarihinizi girin' : 'Please enter your conception date');
            return;
          }
          input.conceptionDate = new Date(conceptionDate);
          break;

        case 'ultrasound':
          if (!ultrasoundDate || !gestationalWeeks) {
            setError(locale === 'tr' ? 'Lütfen ultrason tarihi ve gestasyonel yaşı girin' : 'Please enter ultrasound date and gestational age');
            return;
          }
          input.ultrasoundDate = new Date(ultrasoundDate);
          input.gestationalAgeWeeks = parseInt(gestationalWeeks);
          input.gestationalAgeDays = parseInt(gestationalDays) || 0;
          break;

        case 'ivf':
          if (!ivfTransferDate) {
            setError(locale === 'tr' ? 'Lütfen transfer tarihinizi girin' : 'Please enter your transfer date');
            return;
          }
          input.ivfTransferDate = new Date(ivfTransferDate);
          input.embryoAge = embryoAge;
          break;
      }

      const dueDateResult = calculateDueDate(input);
      setResult(dueDateResult);
    } catch (err: any) {
      setError(err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error'));
    }
  };

  const handleReset = () => {
    setLmpDate('');
    setCycleLength('28');
    setConceptionDate('');
    setUltrasoundDate('');
    setGestationalWeeks('');
    setGestationalDays('');
    setIvfTransferDate('');
    setEmbryoAge(5);
    setResult(null);
    setError('');
  };

  const trimesterInfo = result ? getTrimesterInfo(result.trimester) : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Baby className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Doğum Tarihi Hesaplama' : 'Due Date Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Tahmini doğum tarihinizi hesaplayın'
                : 'Calculate your estimated due date'}
            </p>
          </div>
        </div>

        {/* Calculation Method Selection */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? 'Hesaplama Yöntemi' : 'Calculation Method'}
          </label>
          <RadioGroup
            name="calculationMethod"
            value={calculationMethod}
            onChange={(value) => setCalculationMethod(value as any)}
            options={calculationMethods.map((method) => ({
              value: method.id,
              label: method.name[locale],
              description: method.description[locale],
            }))}
            orientation="vertical"
          />
        </div>

        {/* LMP Method Inputs */}
        {calculationMethod === 'lmp' && (
          <div className="space-y-4">
            <Input
              label={locale === 'tr' ? 'Son Adet Tarihi (İlk Gün)' : 'Last Menstrual Period (First Day)'}
              type="date"
              value={lmpDate}
              onChange={(e) => setLmpDate(e.target.value)}
              required
            />
            <Input
              label={locale === 'tr' ? 'Döngü Uzunluğu (gün)' : 'Cycle Length (days)'}
              type="number"
              value={cycleLength}
              onChange={(e) => setCycleLength(e.target.value)}
              placeholder="28"
              rightIcon={<span className="text-sm">{locale === 'tr' ? 'gün' : 'days'}</span>}
            />
          </div>
        )}

        {/* Conception Method Inputs */}
        {calculationMethod === 'conception' && (
          <Input
            label={locale === 'tr' ? 'Döllendirme/Yumurtlama Tarihi' : 'Conception/Ovulation Date'}
            type="date"
            value={conceptionDate}
            onChange={(e) => setConceptionDate(e.target.value)}
            required
          />
        )}

        {/* Ultrasound Method Inputs */}
        {calculationMethod === 'ultrasound' && (
          <div className="space-y-4">
            <Input
              label={locale === 'tr' ? 'Ultrason Tarihi' : 'Ultrasound Date'}
              type="date"
              value={ultrasoundDate}
              onChange={(e) => setUltrasoundDate(e.target.value)}
              required
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label={locale === 'tr' ? 'Gestasyonel Yaş (hafta)' : 'Gestational Age (weeks)'}
                type="number"
                value={gestationalWeeks}
                onChange={(e) => setGestationalWeeks(e.target.value)}
                placeholder="12"
                required
              />
              <Input
                label={locale === 'tr' ? 'Gestasyonel Yaş (gün)' : 'Gestational Age (days)'}
                type="number"
                value={gestationalDays}
                onChange={(e) => setGestationalDays(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
        )}

        {/* IVF Method Inputs */}
        {calculationMethod === 'ivf' && (
          <div className="space-y-4">
            <Input
              label={locale === 'tr' ? 'Embriyo Transfer Tarihi' : 'Embryo Transfer Date'}
              type="date"
              value={ivfTransferDate}
              onChange={(e) => setIvfTransferDate(e.target.value)}
              required
            />
            <RadioGroup
              label={locale === 'tr' ? 'Embriyo Yaşı' : 'Embryo Age'}
              name="embryoAge"
              value={embryoAge.toString()}
              onChange={(value) => setEmbryoAge(parseInt(value) as 3 | 5)}
              options={[
                {
                  value: '3',
                  label: locale === 'tr' ? '3. Gün Embriyosu' : 'Day 3 Embryo',
                },
                {
                  value: '5',
                  label: locale === 'tr' ? '5. Gün Embriyosu (Blastosist)' : 'Day 5 Embryo (Blastocyst)',
                },
              ]}
              orientation="horizontal"
            />
          </div>
        )}

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
      {result && (
        <>
          {/* Due Date Card */}
          <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini Doğum Tarihi' : 'Estimated Due Date'}
              </h3>
              <div className="mb-4 flex items-center justify-center gap-2">
                <Calendar className="h-8 w-8 text-pink-600" />
                <div className="text-4xl font-bold text-pink-600">
                  {formatDate(result.dueDate, locale)}
                </div>
              </div>
              <Badge variant="primary" size="lg">
                {locale === 'tr' ? 'Hafta' : 'Week'} {result.currentWeek}+{result.currentDay}
              </Badge>
            </div>

            <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Döllendirme Tarihi' : 'Conception Date'}
                </p>
                <p className="mt-1 font-semibold text-neutral-900">
                  {formatDate(result.conceptionDate, locale)}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Kalan Gün' : 'Days Until Due'}
                </p>
                <p className="mt-1 text-2xl font-bold text-pink-600">
                  {result.daysUntilDue > 0 ? result.daysUntilDue : 0}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Tamamlanma' : 'Complete'}
                </p>
                <p className="mt-1 text-2xl font-bold text-pink-600">
                  {result.percentComplete}%
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-500"
                  style={{ width: `${Math.min(result.percentComplete, 100)}%` }}
                />
              </div>
            </div>
          </Card>

          {/* Trimester Info Card */}
          {trimesterInfo && (
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-pink-600" />
                <h3 className="text-xl font-bold text-neutral-900">
                  {trimesterInfo.name[locale]}
                </h3>
              </div>
              <p className="mb-4 text-sm text-neutral-700">
                {trimesterInfo.description[locale]}
              </p>
              <div className="rounded-lg bg-pink-50 p-4">
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Önemli Gelişmeler' : 'Key Developments'}
                </h4>
                <ul className="space-y-1">
                  {trimesterInfo.keyDevelopments[locale].map((dev, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                      <span className="mt-1 text-pink-600">•</span>
                      <span>{dev}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}

          {/* Milestones Card */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Hamilelik Kilometre Taşları' : 'Pregnancy Milestones'}
            </h3>
            <div className="space-y-3">
              {result.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 rounded-lg p-3 transition-colors ${
                    milestone.reached
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-neutral-50 border border-neutral-200'
                  }`}
                >
                  <div className="mt-1">
                    {milestone.reached ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <Circle className="h-5 w-5 text-neutral-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-neutral-900">
                        {milestone.title[locale]}
                      </p>
                      <Badge variant="outline" size="sm">
                        {locale === 'tr' ? 'Hafta' : 'Week'} {milestone.week}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-neutral-600">
                      {milestone.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Note */}
          <Card className="border-l-4 border-l-amber-500 bg-amber-50">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-amber-600" />
              <div>
                <h4 className="mb-1 font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Önemli Not' : 'Important Note'}
                </h4>
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? 'Bu hesaplama tahmini bir tarihtir. Bebeklerin yalnızca %5\'i tam doğum tarihinde doğar. Çoğu bebek tahmini tarihten 2 hafta önce veya sonra dünyaya gelir. Doğum tarihiniz sağlık hizmeti sağlayıcınız tarafından ultrason sonuçlarına göre ayarlanabilir.'
                    : 'This calculation provides an estimated date. Only about 5% of babies are born on their exact due date. Most babies arrive within 2 weeks before or after the estimated date. Your due date may be adjusted by your healthcare provider based on ultrasound results.'}
                </p>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default DueDateCalculator;
