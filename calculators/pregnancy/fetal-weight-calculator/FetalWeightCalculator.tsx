'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RadioGroup from '@/components/ui/Radio';
import { Baby, Scale, Calendar, TrendingUp, AlertCircle, Heart, Apple, Ruler, Activity } from 'lucide-react';
import { calculateFetalWeight, weeklyGrowthData } from './fetalWeightLogic';
import type { FetalWeightResult, CalculationMethod } from './fetalWeightTypes';

interface FetalWeightCalculatorProps {
  locale: 'en' | 'tr';
}

export default function FetalWeightCalculator({ locale }: FetalWeightCalculatorProps) {
  const t = useTranslations();

  const [method, setMethod] = useState<CalculationMethod>('week');
  const [gestationalWeek, setGestationalWeek] = useState('');
  const [lmpDate, setLmpDate] = useState('');
  const [ac, setAc] = useState('');
  const [fl, setFl] = useState('');
  const [hc, setHc] = useState('');
  const [bpd, setBpd] = useState('');
  const [result, setResult] = useState<FetalWeightResult | null>(null);
  const [error, setError] = useState('');

  const methodOptions = [
    {
      value: 'week',
      label: locale === 'tr' ? 'Gebelik Haftası' : 'Gestational Week',
      description: locale === 'tr' ? 'Mevcut gebelik haftanızı girin' : 'Enter your current gestational week',
    },
    {
      value: 'lmp',
      label: locale === 'tr' ? 'Son Adet Tarihi (SAT)' : 'Last Menstrual Period (LMP)',
      description: locale === 'tr' ? 'Son adet döneminizin ilk gününü girin' : 'Enter the first day of your last period',
    },
    {
      value: 'ultrasound',
      label: locale === 'tr' ? 'Ultrason Ölçümleri' : 'Ultrasound Measurements',
      description: locale === 'tr' ? 'Hadlock formülü ile doğru hesaplama' : 'Accurate calculation using Hadlock formula',
    },
  ];

  const handleCalculate = () => {
    setError('');
    setResult(null);

    if (method === 'week') {
      const week = parseInt(gestationalWeek);
      if (isNaN(week) || week < 8 || week > 42) {
        setError(locale === 'tr' ? 'Lütfen 8-42 arası bir hafta girin.' : 'Please enter a week between 8 and 42.');
        return;
      }
      setResult(calculateFetalWeight({ method: 'week', gestationalWeek: week }));
    } else if (method === 'lmp') {
      if (!lmpDate) {
        setError(locale === 'tr' ? 'Lütfen son adet tarihinizi girin.' : 'Please enter your last menstrual period date.');
        return;
      }
      const lmp = new Date(lmpDate);
      const today = new Date();
      const diffDays = Math.floor((today.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays < 56 || diffDays > 294) {
        setError(locale === 'tr' ? 'Tarih 8-42 haftalık gebelik aralığında olmalıdır.' : 'Date must be within 8-42 weeks of pregnancy.');
        return;
      }
      setResult(calculateFetalWeight({ method: 'lmp', lmpDate }));
    } else if (method === 'ultrasound') {
      const acVal = parseFloat(ac);
      const flVal = parseFloat(fl);
      if (isNaN(acVal) || isNaN(flVal) || acVal <= 0 || flVal <= 0) {
        setError(locale === 'tr' ? 'Karın çevresi ve femur uzunluğu zorunludur.' : 'Abdominal circumference and femur length are required.');
        return;
      }
      if (!gestationalWeek || parseInt(gestationalWeek) < 8 || parseInt(gestationalWeek) > 42) {
        setError(locale === 'tr' ? 'Lütfen gebelik haftasını da girin (8-42).' : 'Please also enter gestational week (8-42).');
        return;
      }
      setResult(
        calculateFetalWeight({
          method: 'ultrasound',
          gestationalWeek: parseInt(gestationalWeek),
          abdominalCircumference: acVal,
          femurLength: flVal,
          headCircumference: hc ? parseFloat(hc) : undefined,
          biparietalDiameter: bpd ? parseFloat(bpd) : undefined,
        })
      );
    }
  };

  const handleReset = () => {
    setGestationalWeek('');
    setLmpDate('');
    setAc('');
    setFl('');
    setHc('');
    setBpd('');
    setResult(null);
    setError('');
  };

  const getPercentileStatusBadge = () => {
    if (!result) return null;
    const statusMap = {
      small: {
        variant: 'warning' as const,
        label: locale === 'tr' ? 'Gebelik Yaşına Göre Küçük (SGA)' : 'Small for Gestational Age (SGA)',
      },
      appropriate: {
        variant: 'success' as const,
        label: locale === 'tr' ? 'Normal Aralıkta (AGA)' : 'Appropriate for Gestational Age (AGA)',
      },
      large: {
        variant: 'primary' as const,
        label: locale === 'tr' ? 'Gebelik Yaşına Göre Büyük (LGA)' : 'Large for Gestational Age (LGA)',
      },
    };
    const status = statusMap[result.percentileStatus];
    return <Badge variant={status.variant}>{status.label}</Badge>;
  };

  const getTrimesterLabel = () => {
    if (!result) return '';
    const labels = {
      1: locale === 'tr' ? '1. Trimester' : '1st Trimester',
      2: locale === 'tr' ? '2. Trimester' : '2nd Trimester',
      3: locale === 'tr' ? '3. Trimester' : '3rd Trimester',
    };
    return labels[result.trimester];
  };

  return (
    <div className="space-y-6">
      {/* Method Selection */}
      <RadioGroup
        label={locale === 'tr' ? 'Hesaplama Yöntemi' : 'Calculation Method'}
        name="method"
        options={methodOptions}
        value={method}
        onChange={(val) => {
          setMethod(val as CalculationMethod);
          setResult(null);
          setError('');
        }}
      />

      {/* Inputs based on method */}
      <div className="space-y-4">
        {method === 'week' && (
          <Input
            label={locale === 'tr' ? 'Gebelik Haftası' : 'Gestational Week'}
            type="number"
            min="8"
            max="42"
            value={gestationalWeek}
            onChange={(e) => setGestationalWeek(e.target.value)}
            placeholder={locale === 'tr' ? '8-42 arası hafta' : 'Week between 8-42'}
            leftIcon={<Calendar className="h-4 w-4" />}
            required
          />
        )}

        {method === 'lmp' && (
          <Input
            label={locale === 'tr' ? 'Son Adet Tarihi' : 'Last Menstrual Period Date'}
            type="date"
            value={lmpDate}
            onChange={(e) => setLmpDate(e.target.value)}
            leftIcon={<Calendar className="h-4 w-4" />}
            required
          />
        )}

        {method === 'ultrasound' && (
          <>
            <Input
              label={locale === 'tr' ? 'Gebelik Haftası' : 'Gestational Week'}
              type="number"
              min="8"
              max="42"
              value={gestationalWeek}
              onChange={(e) => setGestationalWeek(e.target.value)}
              placeholder={locale === 'tr' ? '8-42 arası hafta' : 'Week between 8-42'}
              leftIcon={<Calendar className="h-4 w-4" />}
              required
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label={locale === 'tr' ? 'Karın Çevresi (AC) - mm' : 'Abdominal Circumference (AC) - mm'}
                type="number"
                min="1"
                value={ac}
                onChange={(e) => setAc(e.target.value)}
                placeholder="mm"
                leftIcon={<Ruler className="h-4 w-4" />}
                required
              />
              <Input
                label={locale === 'tr' ? 'Femur Uzunluğu (FL) - mm' : 'Femur Length (FL) - mm'}
                type="number"
                min="1"
                value={fl}
                onChange={(e) => setFl(e.target.value)}
                placeholder="mm"
                leftIcon={<Ruler className="h-4 w-4" />}
                required
              />
              <Input
                label={locale === 'tr' ? 'Baş Çevresi (HC) - mm' : 'Head Circumference (HC) - mm'}
                type="number"
                min="1"
                value={hc}
                onChange={(e) => setHc(e.target.value)}
                placeholder={locale === 'tr' ? 'İsteğe bağlı' : 'Optional'}
                leftIcon={<Ruler className="h-4 w-4" />}
              />
              <Input
                label={locale === 'tr' ? 'Biparietal Çap (BPD) - mm' : 'Biparietal Diameter (BPD) - mm'}
                type="number"
                min="1"
                value={bpd}
                onChange={(e) => setBpd(e.target.value)}
                placeholder={locale === 'tr' ? 'İsteğe bağlı' : 'Optional'}
                leftIcon={<Ruler className="h-4 w-4" />}
              />
            </div>
          </>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-danger-50 p-3 text-sm text-danger-700">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <Button onClick={handleCalculate} fullWidth>
          {t('common.calculate')}
        </Button>
        <Button variant="secondary" onClick={handleReset}>
          {t('common.reset')}
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">

          {/* Main Result Card */}
          <Card className="border-2 border-primary-100 bg-gradient-to-br from-pink-50 to-purple-50 p-6">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-2">
                <Baby className="h-6 w-6 text-pink-500" />
                <span className="text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? `${result.gestationalWeek}. Hafta` : `Week ${result.gestationalWeek}`}
                  {result.gestationalDay > 0 && (
                    <span className="text-neutral-400">
                      {` + ${result.gestationalDay} ${locale === 'tr' ? 'gün' : result.gestationalDay === 1 ? 'day' : 'days'}`}
                    </span>
                  )}
                </span>
              </div>
              <div className="text-5xl font-bold text-primary-700 sm:text-6xl">
                {result.estimatedWeight.grams >= 1000
                  ? `${result.estimatedWeight.kg} kg`
                  : `${result.estimatedWeight.grams} g`}
              </div>
              <p className="mt-1 text-sm text-neutral-500">
                {result.estimatedWeight.grams >= 1000
                  ? `${result.estimatedWeight.grams} g / ${result.estimatedWeight.lbs} lbs`
                  : `${result.estimatedWeight.ounces} oz`}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                {getPercentileStatusBadge()}
                <Badge variant="default">{getTrimesterLabel()}</Badge>
              </div>
            </div>
          </Card>

          {/* Size Comparison Card */}
          <Card className="border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{result.sizeComparisonEmoji}</div>
              <div>
                <h3 className="font-semibold text-neutral-800">
                  {locale === 'tr' ? 'Boyut Karşılaştırması' : 'Size Comparison'}
                </h3>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? `Bebeğiniz şu anda bir ${result.sizeComparison.tr} büyüklüğünde`
                    : `Your baby is about the size of a ${result.sizeComparison.en}`}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {locale === 'tr'
                    ? `Tahmini uzunluk: ${result.lengthEstimate.cm} cm`
                    : `Estimated length: ${result.lengthEstimate.cm} cm (${result.lengthEstimate.inches} in)`}
                </p>
              </div>
            </div>
          </Card>

          {/* Percentile Range Visualization */}
          <Card className="p-5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-neutral-800">
              <Scale className="h-5 w-5 text-primary-500" />
              {locale === 'tr' ? 'Persentil Aralığı' : 'Percentile Range'}
            </h3>
            <div className="space-y-3">
              {/* Visual bar */}
              <div className="relative h-8 overflow-hidden rounded-full bg-neutral-100">
                {/* 10th percentile zone */}
                <div
                  className="absolute inset-y-0 left-0 bg-amber-200"
                  style={{ width: `${(result.percentileRange.p10 / result.percentileRange.p90) * 100}%` }}
                />
                {/* Normal zone */}
                <div
                  className="absolute inset-y-0 bg-green-300"
                  style={{
                    left: `${(result.percentileRange.p10 / result.percentileRange.p90) * 100}%`,
                    width: `${((result.percentileRange.p50 - result.percentileRange.p10) / result.percentileRange.p90) * 100}%`,
                  }}
                />
                {/* Upper zone */}
                <div
                  className="absolute inset-y-0 right-0 bg-blue-200"
                  style={{
                    left: `${(result.percentileRange.p50 / result.percentileRange.p90) * 100}%`,
                  }}
                />
                {/* Current weight marker */}
                <div
                  className="absolute inset-y-0 w-1 bg-primary-700"
                  style={{
                    left: `${Math.min((result.estimatedWeight.grams / result.percentileRange.p90) * 100, 100)}%`,
                  }}
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-primary-700 px-2 py-0.5 text-xs font-medium text-white">
                    {result.estimatedWeight.grams}g
                  </div>
                </div>
              </div>
              {/* Labels */}
              <div className="flex justify-between text-xs text-neutral-500">
                <span>P10: {result.percentileRange.p10}g</span>
                <span>P50: {result.percentileRange.p50}g</span>
                <span>P90: {result.percentileRange.p90}g</span>
              </div>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Card className="bg-pink-50 p-4 text-center">
              <Baby className="mx-auto mb-1 h-5 w-5 text-pink-500" />
              <div className="text-lg font-bold text-pink-700">
                {result.lengthEstimate.cm} cm
              </div>
              <div className="text-xs text-pink-600">
                {locale === 'tr' ? 'Uzunluk' : 'Length'}
              </div>
            </Card>
            <Card className="bg-purple-50 p-4 text-center">
              <Scale className="mx-auto mb-1 h-5 w-5 text-purple-500" />
              <div className="text-lg font-bold text-purple-700">
                {result.estimatedWeight.grams}g
              </div>
              <div className="text-xs text-purple-600">
                {locale === 'tr' ? 'Ağırlık' : 'Weight'}
              </div>
            </Card>
            <Card className="bg-blue-50 p-4 text-center">
              <TrendingUp className="mx-auto mb-1 h-5 w-5 text-blue-500" />
              <div className="text-lg font-bold text-blue-700">
                ~{result.weeklyGrowthRate}g
              </div>
              <div className="text-xs text-blue-600">
                {locale === 'tr' ? 'Haftalık Artış' : 'Weekly Gain'}
              </div>
            </Card>
            <Card className="bg-green-50 p-4 text-center">
              <Calendar className="mx-auto mb-1 h-5 w-5 text-green-500" />
              <div className="text-lg font-bold text-green-700">
                {result.remainingWeeks}
              </div>
              <div className="text-xs text-green-600">
                {locale === 'tr' ? 'Kalan Hafta' : 'Weeks Left'}
              </div>
            </Card>
          </div>

          {/* Progress Bar */}
          <Card className="p-5">
            <h3 className="mb-3 font-semibold text-neutral-800">
              {locale === 'tr' ? 'Hamilelik İlerlemesi' : 'Pregnancy Progress'}
            </h3>
            <div className="relative h-4 overflow-hidden rounded-full bg-neutral-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 transition-all duration-1000"
                style={{ width: `${Math.min((result.gestationalWeek / 40) * 100, 100)}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-neutral-500">
              <span>{locale === 'tr' ? '1. Trimester' : '1st Trimester'}</span>
              <span>{locale === 'tr' ? '2. Trimester' : '2nd Trimester'}</span>
              <span>{locale === 'tr' ? '3. Trimester' : '3rd Trimester'}</span>
            </div>
            <p className="mt-2 text-center text-sm text-neutral-600">
              {locale === 'tr'
                ? `Hamileliğinizin %${Math.round((result.gestationalWeek / 40) * 100)} tamamlandı`
                : `${Math.round((result.gestationalWeek / 40) * 100)}% of your pregnancy completed`}
            </p>
          </Card>

          {/* Development Highlights */}
          <Card className="border border-pink-200 p-5">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-neutral-800">
              <Heart className="h-5 w-5 text-pink-500" />
              {locale === 'tr'
                ? `${result.gestationalWeek}. Haftada Bebeğiniz`
                : `Your Baby at Week ${result.gestationalWeek}`}
            </h3>
            <ul className="space-y-2">
              {result.developmentHighlights[locale].map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1 flex-shrink-0 text-pink-400">●</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>

          {/* Nutrition Tips */}
          <Card className="border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-neutral-800">
              <Apple className="h-5 w-5 text-green-600" />
              {locale === 'tr' ? 'Beslenme Önerileri' : 'Nutrition Recommendations'}
            </h3>
            <ul className="space-y-2">
              {result.nutritionTips[locale].map((tip, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1 flex-shrink-0 text-green-500">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Card>

          {/* Growth Chart Preview */}
          <Card className="p-5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-neutral-800">
              <Activity className="h-5 w-5 text-indigo-500" />
              {locale === 'tr' ? 'Büyüme Tablosu' : 'Growth Chart'}
            </h3>
            <div className="space-y-1">
              {weeklyGrowthData
                .filter((d) => d.week >= 12 && d.week <= 40 && d.week % 4 === 0)
                .map((data) => {
                  const isCurrentWeek = data.week === result.gestationalWeek;
                  const isPast = data.week < result.gestationalWeek;
                  const maxWeight = 4000;
                  return (
                    <div key={data.week} className="flex items-center gap-2">
                      <span className={`w-12 text-right text-xs ${isCurrentWeek ? 'font-bold text-primary-700' : 'text-neutral-400'}`}>
                        {locale === 'tr' ? `${data.week}H` : `W${data.week}`}
                      </span>
                      <div className="flex-1 h-5 bg-neutral-50 rounded-full overflow-hidden relative">
                        {/* P10-P90 range */}
                        <div
                          className={`absolute inset-y-0 rounded-full ${isCurrentWeek ? 'bg-primary-300' : isPast ? 'bg-pink-200' : 'bg-neutral-200'}`}
                          style={{
                            left: `${(data.weightP10 / maxWeight) * 100}%`,
                            width: `${((data.weightP90 - data.weightP10) / maxWeight) * 100}%`,
                          }}
                        />
                        {/* P50 marker */}
                        <div
                          className={`absolute inset-y-0 w-0.5 ${isCurrentWeek ? 'bg-primary-700' : isPast ? 'bg-pink-400' : 'bg-neutral-300'}`}
                          style={{ left: `${(data.weightP50 / maxWeight) * 100}%` }}
                        />
                        {/* Current weight indicator */}
                        {isCurrentWeek && (
                          <div
                            className="absolute inset-y-0 w-2 rounded-full bg-primary-600"
                            style={{ left: `${Math.min((result.estimatedWeight.grams / maxWeight) * 100, 100)}%` }}
                          />
                        )}
                      </div>
                      <span className={`w-16 text-xs ${isCurrentWeek ? 'font-bold text-primary-700' : 'text-neutral-400'}`}>
                        {data.weightP50 >= 1000
                          ? `${(data.weightP50 / 1000).toFixed(1)}kg`
                          : `${data.weightP50}g`}
                      </span>
                      <span className="w-6 text-sm">{data.comparisonEmoji}</span>
                    </div>
                  );
                })}
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-4 rounded bg-pink-200" />
                {locale === 'tr' ? 'P10-P90 aralığı' : 'P10-P90 range'}
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-1 bg-pink-400" />
                P50
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-primary-600" />
                {locale === 'tr' ? 'Bebeğiniz' : 'Your baby'}
              </span>
            </div>
          </Card>

          {/* Size Comparison Timeline */}
          <Card className="p-5">
            <h3 className="mb-4 font-semibold text-neutral-800">
              {locale === 'tr' ? 'Boyut Karşılaştırma Zaman Çizelgesi' : 'Size Comparison Timeline'}
            </h3>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
              {weeklyGrowthData
                .filter((d) => d.week >= 8 && d.week <= 40 && d.week % 2 === 0)
                .map((data) => {
                  const isCurrent = data.week === result.gestationalWeek ||
                    (data.week === result.gestationalWeek - 1 && result.gestationalWeek % 2 !== 0);
                  return (
                    <div
                      key={data.week}
                      className={`rounded-lg p-2 text-center transition-all ${
                        isCurrent
                          ? 'bg-primary-100 ring-2 ring-primary-500 scale-110'
                          : data.week < result.gestationalWeek
                            ? 'bg-pink-50'
                            : 'bg-neutral-50'
                      }`}
                    >
                      <div className="text-xl">{data.comparisonEmoji}</div>
                      <div className={`text-[10px] ${isCurrent ? 'font-bold text-primary-700' : 'text-neutral-400'}`}>
                        {locale === 'tr' ? `${data.week}H` : `W${data.week}`}
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>

        </div>
      )}
    </div>
  );
}
