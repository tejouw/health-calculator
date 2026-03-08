'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { SmokingCessationInput, SmokingCessationResult } from './smokingCessationTypes';
import { calculateSmokingCessation, formatCurrency, formatTimeElapsed, CURRENCIES } from './smokingCessationLogic';
import {
  Cigarette,
  DollarSign,
  Heart,
  Clock,
  TrendingUp,
  Award,
  Banknote,
  Wind,
  CalendarCheck,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

interface SmokingCessationCalculatorProps {
  locale: 'en' | 'tr';
}

const SmokingCessationCalculator: React.FC<SmokingCessationCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [pricePerPack, setPricePerPack] = useState('');
  const [cigarettesPerPack, setCigarettesPerPack] = useState('20');
  const [yearsSmoked, setYearsSmoked] = useState('');
  const [quitDate, setQuitDate] = useState('');
  const [currency, setCurrency] = useState<'TRY' | 'USD' | 'EUR'>(locale === 'tr' ? 'TRY' : 'USD');
  const [result, setResult] = useState<SmokingCessationResult | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const cigs = parseFloat(cigarettesPerDay);
    const price = parseFloat(pricePerPack);
    const perPack = parseInt(cigarettesPerPack);
    const years = parseFloat(yearsSmoked);

    if (!cigs || cigs <= 0 || !price || price <= 0 || !perPack || perPack <= 0 || !years || years < 0 || !quitDate) {
      setError(locale === 'en' ? 'Please fill in all fields with valid values.' : 'Lütfen tüm alanları geçerli değerlerle doldurun.');
      setResult(null);
      return;
    }

    if (cigs > 100) {
      setError(locale === 'en' ? 'Please enter a realistic number of cigarettes per day.' : 'Lütfen gerçekçi bir günlük sigara sayısı girin.');
      setResult(null);
      return;
    }

    setError('');

    const input: SmokingCessationInput = {
      cigarettesPerDay: cigs,
      pricePerPack: price,
      cigarettesPerPack: perPack,
      yearsSmoked: years,
      quitDate: new Date(quitDate),
      currency,
      locale,
    };

    setResult(calculateSmokingCessation(input));
  };

  const handleReset = () => {
    setCigarettesPerDay('');
    setPricePerPack('');
    setCigarettesPerPack('20');
    setYearsSmoked('');
    setQuitDate('');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      {/* Input Form */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Cigarette className="w-5 h-5 text-orange-500" />
          {locale === 'en' ? 'Your Smoking Details' : 'Sigara Bilgileriniz'}
        </h2>

        {/* Cigarettes per day */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {locale === 'en' ? 'Cigarettes per day' : 'Günlük sigara sayısı'}
          </label>
          <Input
            type="number"
            value={cigarettesPerDay}
            onChange={(e) => setCigarettesPerDay(e.target.value)}
            placeholder={locale === 'en' ? 'e.g., 20' : 'örn. 20'}
            min="1"
            max="100"
          />
        </div>

        {/* Years smoked */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {locale === 'en' ? 'Years smoked' : 'Sigara içilen yıl sayısı'}
          </label>
          <Input
            type="number"
            value={yearsSmoked}
            onChange={(e) => setYearsSmoked(e.target.value)}
            placeholder={locale === 'en' ? 'e.g., 10' : 'örn. 10'}
            min="0"
            max="80"
          />
        </div>

        {/* Price per pack */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              {locale === 'en' ? 'Price per pack' : 'Paket fiyatı'}
            </label>
            <Input
              type="number"
              value={pricePerPack}
              onChange={(e) => setPricePerPack(e.target.value)}
              placeholder={locale === 'tr' ? 'örn. 55' : 'e.g., 8'}
              min="0.01"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              {locale === 'en' ? 'Cigarettes per pack' : 'Paketteki sigara sayısı'}
            </label>
            <Input
              type="number"
              value={cigarettesPerPack}
              onChange={(e) => setCigarettesPerPack(e.target.value)}
              placeholder="20"
              min="1"
              max="40"
            />
          </div>
        </div>

        {/* Currency */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {locale === 'en' ? 'Currency' : 'Para birimi'}
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(Object.keys(CURRENCIES) as Array<'TRY' | 'USD' | 'EUR'>).map((c) => (
              <button
                key={c}
                onClick={() => setCurrency(c)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  currency === c
                    ? 'bg-primary-50 border-primary-300 text-primary-700'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                {CURRENCIES[c].symbol} {c}
              </button>
            ))}
          </div>
        </div>

        {/* Quit date */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {locale === 'en' ? 'Quit date' : 'Bırakma tarihi'}
          </label>
          <Input
            type="date"
            value={quitDate}
            onChange={(e) => setQuitDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} fullWidth>
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-slide-up">
          {/* Time Since Quit */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 p-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <CalendarCheck className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-800">
                  {locale === 'en' ? 'Smoke-Free For' : 'Dumansız Geçen Süre'}
                </span>
              </div>
              <div className="text-4xl font-bold text-green-700 mb-1">
                {result.daysSinceQuit >= 1
                  ? `${Math.floor(result.daysSinceQuit)} ${locale === 'en' ? 'days' : 'gün'}`
                  : `${result.hoursSinceQuit} ${locale === 'en' ? 'hours' : 'saat'}`}
              </div>
              {result.daysSinceQuit >= 1 && (
                <div className="text-sm text-green-600">
                  ({result.hoursSinceQuit.toLocaleString()} {locale === 'en' ? 'hours' : 'saat'})
                </div>
              )}
            </div>
          </Card>

          {/* Financial Savings */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Banknote className="w-5 h-5 text-green-600" />
              {locale === 'en' ? 'Financial Savings' : 'Finansal Tasarruf'}
            </h3>

            <div className="text-center mb-4">
              <div className="text-sm text-neutral-500 mb-1">
                {locale === 'en' ? 'Total Saved' : 'Toplam Tasarruf'}
              </div>
              <div className="text-4xl font-bold text-green-600">
                {formatCurrency(result.moneySavedTotal, currency)}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <div className="text-xs text-neutral-500">{locale === 'en' ? 'Per Day' : 'Günlük'}</div>
                <div className="font-semibold">{formatCurrency(result.moneySavedPerDay, currency)}</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <div className="text-xs text-neutral-500">{locale === 'en' ? 'Per Week' : 'Haftalık'}</div>
                <div className="font-semibold">{formatCurrency(result.moneySavedPerWeek, currency)}</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <div className="text-xs text-neutral-500">{locale === 'en' ? 'Per Month' : 'Aylık'}</div>
                <div className="font-semibold">{formatCurrency(result.moneySavedPerMonth, currency)}</div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-3 text-center">
                <div className="text-xs text-neutral-500">{locale === 'en' ? 'Per Year' : 'Yıllık'}</div>
                <div className="font-semibold">{formatCurrency(result.moneySavedPerYear, currency)}</div>
              </div>
            </div>

            {/* Projected savings */}
            <div className="pt-4 border-t">
              <h4 className="text-sm font-medium text-neutral-600 mb-3">
                {locale === 'en' ? 'Projected Savings' : 'Tahmini Tasarruf Projeksiyonu'}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">{locale === 'en' ? '1 Year' : '1 Yıl'}</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.projectedSavings1Year, currency)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">{locale === 'en' ? '5 Years' : '5 Yıl'}</span>
                  <span className="font-semibold text-green-600">{formatCurrency(result.projectedSavings5Year, currency)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-neutral-600">{locale === 'en' ? '10 Years' : '10 Yıl'}</span>
                  <span className="font-semibold text-green-700 text-lg">{formatCurrency(result.projectedSavings10Year, currency)}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Health Metrics */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              {locale === 'en' ? 'Health Metrics' : 'Sağlık Metrikleri'}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-orange-50 rounded-lg p-4 text-center">
                <Cigarette className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700">{result.cigarettesNotSmoked.toLocaleString()}</div>
                <div className="text-xs text-orange-600">
                  {locale === 'en' ? 'Cigarettes Not Smoked' : 'İçilmeyen Sigara'}
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-700">{result.lifeDaysGained.toLocaleString()}</div>
                <div className="text-xs text-blue-600">
                  {locale === 'en' ? 'Life Days Gained' : 'Kazanılan Yaşam Günü'}
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <Wind className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-700">
                  {result.tarAvoided >= 1000
                    ? `${(result.tarAvoided / 1000).toFixed(1)}g`
                    : `${result.tarAvoided}mg`}
                </div>
                <div className="text-xs text-purple-600">
                  {locale === 'en' ? 'Tar Avoided' : 'Kaçınılan Katran'}
                </div>
              </div>
              <div className="bg-teal-50 rounded-lg p-4 text-center">
                <ShieldCheck className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-teal-700">
                  {result.carbonMonoxideAvoided >= 1000
                    ? `${(result.carbonMonoxideAvoided / 1000).toFixed(1)}g`
                    : `${result.carbonMonoxideAvoided}mg`}
                </div>
                <div className="text-xs text-teal-600">
                  {locale === 'en' ? 'CO Avoided' : 'Kaçınılan CO'}
                </div>
              </div>
            </div>
          </Card>

          {/* Health Timeline */}
          <Card className="p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              {locale === 'en' ? 'Health Recovery Timeline' : 'Sağlık İyileşme Zaman Çizelgesi'}
            </h3>

            {/* Overall progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-neutral-600">
                  {locale === 'en' ? 'Overall Recovery' : 'Genel İyileşme'}
                </span>
                <span className="font-medium">{result.overallProgress}%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${result.overallProgress}%` }}
                />
              </div>
              <div className="text-xs text-neutral-500 mt-1">
                {locale === 'en'
                  ? 'Based on 15-year full cardiovascular recovery timeline'
                  : '15 yıllık tam kardiyovasküler iyileşme zaman çizelgesine göre'}
              </div>
            </div>

            {/* Next milestone highlight */}
            {result.nextMilestone && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">
                    {locale === 'en' ? 'Next Milestone' : 'Sıradaki Dönüm Noktası'}
                  </span>
                </div>
                <div className="text-lg font-bold text-blue-700">
                  {result.nextMilestone.icon} {result.nextMilestone.title[locale]}
                </div>
                <div className="text-sm text-blue-600 mt-1">
                  {result.nextMilestone.description[locale]}
                </div>
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-blue-500">
                      {locale === 'en' ? 'Progress' : 'İlerleme'}
                    </span>
                    <span className="text-blue-700 font-medium">{result.nextMilestone.progress}%</span>
                  </div>
                  <div className="w-full bg-blue-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all"
                      style={{ width: `${result.nextMilestone.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Milestones list */}
            <div className="space-y-3">
              {result.healthMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                    milestone.achieved
                      ? 'bg-green-50 border-green-200'
                      : 'bg-neutral-50 border-neutral-200'
                  }`}
                >
                  <div className="text-2xl flex-shrink-0">{milestone.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`font-medium text-sm ${milestone.achieved ? 'text-green-800' : 'text-neutral-700'}`}>
                        {milestone.title[locale]}
                      </span>
                      {milestone.achieved ? (
                        <Badge variant="success" size="sm">
                          {locale === 'en' ? 'Achieved!' : 'Başarıldı!'}
                        </Badge>
                      ) : (
                        <Badge variant="outline" size="sm">
                          {formatTimeElapsed(milestone.timeHours, locale)}
                        </Badge>
                      )}
                    </div>
                    <p className={`text-xs mt-1 ${milestone.achieved ? 'text-green-600' : 'text-neutral-500'}`}>
                      {milestone.description[locale]}
                    </p>
                    {!milestone.achieved && milestone.progress > 0 && (
                      <div className="mt-2">
                        <div className="w-full bg-neutral-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-400 h-1.5 rounded-full"
                            style={{ width: `${milestone.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Motivation Card */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 p-6">
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                {locale === 'en' ? 'Keep Going!' : 'Devam Et!'}
              </h3>
              <p className="text-sm text-purple-600">
                {locale === 'en'
                  ? `You've avoided ${result.cigarettesNotSmoked.toLocaleString()} cigarettes, saved ${formatCurrency(result.moneySavedTotal, currency)}, and gained approximately ${result.lifeDaysGained} extra days of life. Every smoke-free day makes you healthier and wealthier!`
                  : `${result.cigarettesNotSmoked.toLocaleString()} sigara içmediniz, ${formatCurrency(result.moneySavedTotal, currency)} biriktirdiniz ve yaklaşık ${result.lifeDaysGained} gün ekstra yaşam kazandınız. Her dumansız gün sizi daha sağlıklı ve daha zengin yapıyor!`}
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SmokingCessationCalculator;
