'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card } from '@/components/ui';
import { calculateAge, ageRecommendations } from './ageLogic';
import { AgeCalculatorResult } from './ageTypes';
import {
  Calendar,
  Cake,
  Star,
  Info,
  Clock,
  Gift,
  TrendingUp,
  Heart,
  Users,
  Sparkles,
  Award,
  Target,
  Zap,
  Brain,
  Globe,
  Timer,
  Activity,
} from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'statistics' | 'zodiac' | 'milestones'>(
    'overview'
  );
  const [liveAge, setLiveAge] = useState<AgeCalculatorResult | null>(null);

  // Live age update every second
  useEffect(() => {
    if (!result) return;

    const interval = setInterval(() => {
      const birthDate = new Date(
        parseInt(birthYear),
        parseInt(birthMonth) - 1,
        parseInt(birthDay)
      );
      const ageResult = calculateAge({ birthDate }, locale);
      setLiveAge(ageResult);
    }, 1000);

    return () => clearInterval(interval);
  }, [result, birthYear, birthMonth, birthDay, locale]);

  const handleCalculate = () => {
    setError('');

    const year = parseInt(birthYear);
    const month = parseInt(birthMonth);
    const day = parseInt(birthDay);

    const currentYear = new Date().getFullYear();

    if (isNaN(year) || year < 1900 || year > currentYear) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli bir yıl girin (1900-şimdi)'
          : 'Please enter a valid year (1900-now)'
      );
      return;
    }

    if (isNaN(month) || month < 1 || month > 12) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir ay girin (1-12)' : 'Please enter a valid month (1-12)'
      );
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
      setError(
        locale === 'tr'
          ? 'Doğum tarihi gelecekte olamaz'
          : 'Birth date cannot be in the future'
      );
      return;
    }

    const ageResult = calculateAge({ birthDate }, locale);
    setResult(ageResult);
    setLiveAge(ageResult);
    setActiveTab('overview');
  };

  const handleReset = () => {
    setBirthYear('');
    setBirthMonth('');
    setBirthDay('');
    setResult(null);
    setLiveAge(null);
    setError('');
    setActiveTab('overview');
  };

  const recommendations = ageRecommendations[locale];
  const displayAge = liveAge || result;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
            <Cake className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yaş Hesaplayıcı' : 'Age Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Doğum tarihinizi girerek tam yaşınızı hesaplayın'
                : 'Calculate your exact age by entering your birth date'}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {locale === 'tr' ? 'Doğum Tarihi' : 'Birth Date'}
          </label>
          <div className="grid grid-cols-3 gap-3">
            <Input
              type="number"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
              placeholder={locale === 'tr' ? 'Gün' : 'Day'}
              min={1}
              max={31}
            />
            <Input
              type="number"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              placeholder={locale === 'tr' ? 'Ay' : 'Month'}
              min={1}
              max={12}
            />
            <Input
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder={locale === 'tr' ? 'Yıl' : 'Year'}
              min={1900}
              max={new Date().getFullYear()}
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

      {displayAge && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center">
              <div className="mb-6">
                <div className="mb-2 text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Yaşınız' : 'Your Age'}
                </div>
                <div className="text-6xl font-bold text-blue-600">
                  {liveAge?.age.years || displayAge.age.years}
                </div>
                <div className="mt-2 text-lg text-neutral-700">
                  {locale === 'tr' ? 'Yıl' : 'Years'}{' '}
                  <span className="text-blue-600">
                    {liveAge?.age.months || displayAge.age.months}
                  </span>{' '}
                  {locale === 'tr' ? 'Ay' : 'Months'}{' '}
                  <span className="text-blue-600">
                    {liveAge?.age.days || displayAge.age.days}
                  </span>{' '}
                  {locale === 'tr' ? 'Gün' : 'Days'}
                </div>
              </div>

              {/* Live Counter */}
              <div className="mb-6 rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                  {locale === 'tr' ? 'Canlı Sayaç' : 'Live Counter'}
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {String(liveAge?.age.hours || displayAge.age.hours).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Saat' : 'Hours'}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {String(liveAge?.age.minutes || displayAge.age.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Dakika' : 'Minutes'}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {String(liveAge?.age.seconds || displayAge.age.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-neutral-600">
                      {locale === 'tr' ? 'Saniye' : 'Seconds'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white p-3">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-xs font-medium text-neutral-600">
                      {locale === 'tr' ? 'Toplam Gün' : 'Total Days'}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    {(liveAge?.totalDays || displayAge.totalDays).toLocaleString()}
                  </div>
                </div>
                <div className="rounded-lg bg-white p-3">
                  <div className="mb-1 flex items-center justify-center gap-1">
                    <Gift className="h-4 w-4 text-purple-600" />
                    <span className="text-xs font-medium text-neutral-600">
                      {locale === 'tr' ? 'Sonraki Doğum Günü' : 'Next Birthday'}
                    </span>
                  </div>
                  <div className="text-xl font-bold text-purple-600">
                    {displayAge.daysUntilBirthday}{' '}
                    <span className="text-sm">{locale === 'tr' ? 'gün' : 'days'}</span>
                  </div>
                </div>
              </div>

              {/* Generation Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Users className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-neutral-700">
                  {displayAge.generation.name[locale]}
                </span>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto rounded-lg bg-neutral-100 p-1">
            {[
              {
                id: 'overview',
                label: locale === 'tr' ? 'Genel Bakış' : 'Overview',
                icon: Info,
              },
              {
                id: 'statistics',
                label: locale === 'tr' ? 'İstatistikler' : 'Statistics',
                icon: TrendingUp,
              },
              { id: 'zodiac', label: locale === 'tr' ? 'Burç' : 'Zodiac', icon: Star },
              {
                id: 'milestones',
                label: locale === 'tr' ? 'Kilometre Taşları' : 'Milestones',
                icon: Target,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {/* Birth Info */}
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Cake className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Doğum Bilgileri' : 'Birth Information'}
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
                    <div className="mb-1 text-sm text-neutral-600">
                      {locale === 'tr' ? 'Doğduğunuz Gün' : 'Day of Birth'}
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {displayAge.dayOfWeek[locale]}
                    </div>
                  </div>
                  <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4">
                    <div className="mb-1 text-sm text-neutral-600">
                      {locale === 'tr' ? 'Doğum Taşı' : 'Birthstone'}
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-full"
                        style={{ backgroundColor: displayAge.birthstone.color }}
                      />
                      <div className="text-xl font-bold text-purple-600">
                        {displayAge.birthstone.name}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-neutral-600">
                      {displayAge.birthstone.meaning[locale]}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Generation Info */}
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Users className="h-5 w-5 text-blue-600" />
                  {displayAge.generation.name[locale]}
                </h3>
                <p className="mb-4 text-neutral-700">{displayAge.generation.description[locale]}</p>
                <div className="rounded-lg bg-blue-50 p-3 text-sm">
                  <span className="font-semibold text-blue-600">
                    {locale === 'tr' ? 'Yıl Aralığı: ' : 'Years: '}
                  </span>
                  <span className="text-neutral-700">{displayAge.generation.yearsRange}</span>
                </div>
              </Card>

              {/* Historical Events */}
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Globe className="h-5 w-5 text-blue-600" />
                  {locale === 'tr'
                    ? 'Yaşamınız Boyunca Tarihi Olaylar'
                    : 'Historical Events in Your Lifetime'}
                </h3>
                <div className="space-y-2">
                  {displayAge.historicalEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-neutral-50 p-3"
                    >
                      <span className="text-sm text-neutral-700">{event.event[locale]}</span>
                      <span className="text-sm font-semibold text-blue-600">{event.year}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Celebrity Matches */}
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Award className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Yaşıt Ünlüler' : 'Celebrity Age Matches'}
                </h3>
                <div className="space-y-2">
                  {displayAge.celebrityMatches.map((celeb, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-3"
                    >
                      <div>
                        <div className="font-semibold text-neutral-900">{celeb.name}</div>
                        <div className="text-xs text-neutral-600">{celeb.profession[locale]}</div>
                      </div>
                      <div className="text-sm text-purple-600">
                        {celeb.ageDifference === 0
                          ? locale === 'tr'
                            ? 'Aynı yaş'
                            : 'Same age'
                          : `${celeb.ageDifference} ${locale === 'tr' ? 'yıl' : 'years'}`}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Statistics Tab */}
          {activeTab === 'statistics' && (
            <div className="space-y-4">
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Timer className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Zaman İstatistikleri' : 'Time Statistics'}
                </h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    {
                      label: locale === 'tr' ? 'Toplam Saat' : 'Total Hours',
                      value: (liveAge?.totalHours || displayAge.totalHours).toLocaleString(),
                      icon: Clock,
                      color: 'blue',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Dakika' : 'Total Minutes',
                      value: (liveAge?.totalMinutes || displayAge.totalMinutes).toLocaleString(),
                      icon: Timer,
                      color: 'purple',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Saniye' : 'Total Seconds',
                      value: (liveAge?.totalSeconds || displayAge.totalSeconds).toLocaleString(),
                      icon: Zap,
                      color: 'pink',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Hafta' : 'Total Weeks',
                      value: displayAge.totalWeeks.toLocaleString(),
                      icon: Calendar,
                      color: 'green',
                    },
                  ].map((stat, index) => (
                    <div key={index} className="rounded-lg bg-neutral-50 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <stat.icon className={`h-4 w-4 text-${stat.color}-600`} />
                        <span className="text-sm text-neutral-600">{stat.label}</span>
                      </div>
                      <div className={`text-2xl font-bold text-${stat.color}-600`}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Activity className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Yaşam İstatistikleri' : 'Life Statistics'}
                </h3>
                <div className="space-y-3">
                  {[
                    {
                      label: locale === 'tr' ? 'Toplam Kalp Atışı' : 'Total Heartbeats',
                      value: displayAge.lifeStatistics.totalHeartbeats.toLocaleString(),
                      icon: Heart,
                      desc:
                        locale === 'tr'
                          ? 'Ortalama 70 atış/dk'
                          : 'Average 70 beats/min',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Nefes' : 'Total Breaths',
                      value: displayAge.lifeStatistics.totalBreaths.toLocaleString(),
                      icon: Sparkles,
                      desc:
                        locale === 'tr'
                          ? 'Ortalama 16 nefes/dk'
                          : 'Average 16 breaths/min',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Uyku Saati' : 'Total Sleep Hours',
                      value: displayAge.lifeStatistics.totalSleepHours.toLocaleString(),
                      icon: Clock,
                      desc: locale === 'tr' ? 'Ortalama 8 saat/gün' : 'Average 8 hours/day',
                    },
                    {
                      label: locale === 'tr' ? 'Toplam Öğün' : 'Total Meals',
                      value: displayAge.lifeStatistics.totalMeals.toLocaleString(),
                      icon: Cake,
                      desc: locale === 'tr' ? 'Ortalama 3 öğün/gün' : 'Average 3 meals/day',
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                          <stat.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-900">{stat.label}</div>
                          <div className="text-xs text-neutral-600">{stat.desc}</div>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Life Progress */}
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Yaşam İlerlemesi' : 'Life Progress'}
                </h3>
                <div className="mb-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-neutral-600">
                      {locale === 'tr'
                        ? 'Ortalama yaşam süresine göre'
                        : 'Based on average life expectancy (80 years)'}
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      {displayAge.lifePercentage}%
                    </span>
                  </div>
                  <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                      style={{ width: `${displayAge.lifePercentage}%` }}
                    />
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Zodiac Tab */}
          {activeTab === 'zodiac' && (
            <div className="space-y-4">
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Star className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Batı Burcu' : 'Western Zodiac'}
                </h3>
                <div className="mb-4 text-center">
                  <div className="mb-2 text-4xl font-bold text-blue-600">
                    {displayAge.zodiacSign.sign}
                  </div>
                  <div className="mb-4 text-sm text-neutral-600">
                    {displayAge.zodiacSign.dateRange}
                  </div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-neutral-700">
                      {locale === 'tr' ? 'Element: ' : 'Element: '}
                      {displayAge.zodiacSign.element[locale]}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Kişilik Özellikleri' : 'Personality Traits'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {displayAge.zodiacSign.traits[locale].map((trait, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Şanslı Sayılar' : 'Lucky Numbers'}
                  </h4>
                  <div className="flex gap-2">
                    {displayAge.zodiacSign.luckyNumbers.map((num, index) => (
                      <div
                        key={index}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 font-bold text-white"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Uyumlu Burçlar' : 'Compatible Signs'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {displayAge.zodiacSign.compatibleSigns.map((sign, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700"
                      >
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  {locale === 'tr' ? 'Çin Burcu' : 'Chinese Zodiac'}
                </h3>
                <div className="mb-4 text-center">
                  <div className="mb-2 text-4xl font-bold text-purple-600">
                    {displayAge.chineseZodiac.animal}
                  </div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2">
                    <Star className="h-4 w-4 text-purple-600" />
                    <span className="font-medium text-neutral-700">
                      {locale === 'tr' ? 'Element: ' : 'Element: '}
                      {displayAge.chineseZodiac.element[locale]}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Özellikler' : 'Traits'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {displayAge.chineseZodiac.traits[locale].map((trait, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-700"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Şanslı Renkler' : 'Lucky Colors'}
                  </h4>
                  <div className="flex gap-2">
                    {displayAge.chineseZodiac.luckyColors.map((color, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Uyumlu Hayvanlar' : 'Compatible Animals'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {displayAge.chineseZodiac.compatibleAnimals.map((animal, index) => (
                      <span
                        key={index}
                        className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                      >
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Milestones Tab */}
          {activeTab === 'milestones' && (
            <div className="space-y-4">
              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Target className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Yaşam Kilometre Taşları' : 'Life Milestones'}
                </h3>
                <div className="space-y-3">
                  {displayAge.milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`rounded-lg p-4 ${
                        milestone.achieved
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50'
                          : 'bg-gradient-to-r from-blue-50 to-purple-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {milestone.achieved ? (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                              <Award className="h-5 w-5 text-white" />
                            </div>
                          ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                              <Target className="h-5 w-5 text-white" />
                            </div>
                          )}
                          <div>
                            <div className="font-semibold text-neutral-900">
                              {milestone.name[locale]}
                            </div>
                            <div className="text-sm text-neutral-600">
                              {milestone.date.toLocaleDateString(locale)}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`text-sm font-bold ${
                            milestone.achieved ? 'text-green-600' : 'text-blue-600'
                          }`}
                        >
                          {milestone.achieved
                            ? locale === 'tr'
                              ? 'Tamamlandı!'
                              : 'Achieved!'
                            : `${Math.abs(milestone.daysFromNow)} ${
                                locale === 'tr' ? 'gün' : 'days'
                              }`}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
                  <Brain className="h-5 w-5 text-blue-600" />
                  {locale === 'tr' ? 'Emeklilik Geri Sayımı' : 'Retirement Countdown'}
                </h3>
                <div className="rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 p-6 text-center">
                  <div className="mb-2 text-sm text-neutral-600">
                    {locale === 'tr'
                      ? 'Emekliliğe (65 yaş) kalan süre'
                      : 'Time until retirement (age 65)'}
                  </div>
                  <div className="text-4xl font-bold text-orange-600">
                    {displayAge.retirementCountdown.years > 0
                      ? `${displayAge.retirementCountdown.years} ${
                          locale === 'tr' ? 'Yıl' : 'Years'
                        }`
                      : locale === 'tr'
                      ? 'Emekli oldunuz!'
                      : 'You are retired!'}
                  </div>
                  {displayAge.retirementCountdown.years > 0 && (
                    <div className="mt-2 text-lg text-neutral-700">
                      {displayAge.retirementCountdown.months}{' '}
                      {locale === 'tr' ? 'Ay' : 'Months'}{' '}
                      {displayAge.retirementCountdown.days} {locale === 'tr' ? 'Gün' : 'Days'}
                    </div>
                  )}
                </div>
              </Card>

              <Card>
                <div className="mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-neutral-900">{recommendations.title}</h3>
                </div>
                <p className="mb-4 text-sm text-neutral-700">{recommendations.description}</p>
                <ul className="space-y-2">
                  {recommendations.tips.map((tip, index) => (
                    <li key={index} className="flex gap-2 rounded-lg bg-blue-50 p-3 text-sm">
                      <span className="text-blue-500">✓</span>
                      <span className="text-neutral-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AgeCalculator;
