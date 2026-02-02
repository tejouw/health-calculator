'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculateAge, ageRecommendations } from './ageLogic';
import { AgeCalculatorResult } from './ageTypes';
import { Calendar, Cake, Star, Info, Clock, Gift } from 'lucide-react';

interface AgeCalculatorProps {
  locale: 'en' | 'tr';
}

const AgeCalculator: React.FC<AgeCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [birthYear, setBirthYear] = useState<string>('');
  const [birthMonth, setBirthMonth] = useState<string>('');
  const [birthDay, setBirthDay] = useState<string>('');
  const [result, setResult] = useState<AgeCalculatorResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const year = parseInt(birthYear);
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);

    const currentYear = new Date().getFullYear();

    if (isNaN(year) || year < 1900 || year > currentYear) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir yıl girin (1900-şimdi)' : 'Please enter a valid year (1900-now)');
      return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir ay girin (1-12)' : 'Please enter a valid month (1-12)');
      return;
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    if (isNaN(day) || day < 1 || day > daysInMonth) {
      setError(
        locale === 'tr'
          ? `Lütfen geçerli bir gün girin (1-${daysInMonth})`
          : `Please enter a valid day (1-${daysInMonth})`
      );
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    if (birthDate > today) {
      setError(locale === 'tr' ? 'Doğum tarihi bugünden sonra olamaz' : 'Birth date cannot be in the future');
      return;
    }

    const ageResult = calculateAge({ birthDate }, locale);
    setResult(ageResult);
  };

  const handleReset = () => {
    setBirthYear('');
    setBirthMonth('');
    setBirthDay('');
    setResult(null);
    setError('');
  };

  const recommendations = ageRecommendations[locale];

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yaş Hesaplayıcı' : 'Age Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Doğum tarihinizi girerek yaşınızı öğrenin'
                : 'Enter your birth date to calculate your age'}
            </p>
          </div>
        </div>

        {/* Birth Date Input */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Doğum Tarihi' : 'Birth Date'}
          </label>
          <div className="grid grid-cols-3 gap-3">
            <Input
              label={locale === 'tr' ? 'Gün' : 'Day'}
              type="number"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              placeholder="15"
              min="1"
              max="31"
              helperText="1-31"
            />
            <Input
              label={locale === 'tr' ? 'Ay' : 'Month'}
              type="number"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              placeholder="6"
              min="1"
              max="12"
              helperText="1-12"
            />
            <Input
              label={locale === 'tr' ? 'Yıl' : 'Year'}
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="1990"
              min="1900"
              max={new Date().getFullYear()}
              helperText="1900+"
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
          {/* Main Age Result */}
          <Card className="animate-slide-up border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="mb-4 flex items-center gap-2">
              <Cake className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Yaşınız' : 'Your Age'}
              </h3>
            </div>
            <div className="mb-6 text-center">
              <div className="mb-2 text-5xl font-bold text-emerald-600">
                {result.age.years}
              </div>
              <div className="text-lg text-neutral-600">
                {locale === 'tr' ? 'Yıl' : 'Years'}
              </div>
              <div className="mt-4 flex justify-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-500">{result.age.months}</div>
                  <div className="text-sm text-neutral-500">{locale === 'tr' ? 'Ay' : 'Months'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-500">{result.age.days}</div>
                  <div className="text-sm text-neutral-500">{locale === 'tr' ? 'Gün' : 'Days'}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Detailed Statistics */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Detaylı İstatistikler' : 'Detailed Statistics'}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-neutral-50 p-4 text-center">
                <div className="text-2xl font-bold text-neutral-800">
                  {result.totalDays.toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US')}
                </div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Toplam Gün' : 'Total Days'}
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-4 text-center">
                <div className="text-2xl font-bold text-neutral-800">
                  {result.totalWeeks.toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US')}
                </div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Toplam Hafta' : 'Total Weeks'}
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-4 text-center">
                <div className="text-2xl font-bold text-neutral-800">
                  {result.totalMonths.toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-US')}
                </div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Toplam Ay' : 'Total Months'}
                </div>
              </div>
              <div className="rounded-lg bg-neutral-50 p-4 text-center">
                <div className="text-2xl font-bold text-neutral-800">{result.dayOfBirth}</div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Doğduğunuz Gün' : 'Born On'}
                </div>
              </div>
            </div>
          </Card>

          {/* Next Birthday */}
          <Card className="animate-slide-up border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="mb-4 flex items-center gap-2">
              <Gift className="h-5 w-5 text-pink-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Sonraki Doğum Günü' : 'Next Birthday'}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-neutral-800">
                  {formatDate(result.nextBirthday)}
                </div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr'
                    ? `${result.age.years + 1} yaşına gireceksiniz`
                    : `You will turn ${result.age.years + 1}`}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">{result.daysUntilBirthday}</div>
                <div className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'gün kaldı' : 'days left'}
                </div>
              </div>
            </div>
          </Card>

          {/* Zodiac & Fun Facts */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Burç & Eğlenceli Bilgiler' : 'Zodiac & Fun Facts'}
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <span className="text-neutral-600">{locale === 'tr' ? 'Burç' : 'Zodiac Sign'}</span>
                <Badge variant="primary">{result.zodiacSign}</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <span className="text-neutral-600">{locale === 'tr' ? 'Çin Burcu' : 'Chinese Zodiac'}</span>
                <Badge variant="secondary">{result.chineseZodiac}</Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <span className="text-neutral-600">{locale === 'tr' ? 'Doğum Taşı' : 'Birthstone'}</span>
                <Badge variant="success">{result.birthstone}</Badge>
              </div>
              {result.isLeapYearBorn && (
                <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3">
                  <span className="text-amber-800">
                    {locale === 'tr' ? 'Artık yılda doğdunuz!' : 'Born in a leap year!'}
                  </span>
                  <Badge variant="warning">{locale === 'tr' ? 'Özel' : 'Special'}</Badge>
                </div>
              )}
            </div>
          </Card>

          {/* Tips */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900">{recommendations.title}</h3>
            </div>
            <p className="mb-4 text-sm text-neutral-700">{recommendations.description}</p>
            <ul className="space-y-2">
              {recommendations.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-neutral-700">
                  <span className="text-emerald-600">•</span>
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

export default AgeCalculator;
