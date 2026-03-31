'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Badge } from '@/components/ui';
import { calculateBiorhythm, cycleDefinitions, phaseLabels, phaseColors } from './biorhythmLogic';
import { BiorhythmResult, CycleResult } from './biorhythmTypes';
import { Activity, Dumbbell, Heart, Brain, Calendar, TrendingUp, AlertTriangle } from 'lucide-react';

interface BiorhythmCalculatorProps {
  locale: 'en' | 'tr';
}

const BiorhythmCalculator: React.FC<BiorhythmCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [birthDay, setBirthDay] = useState<string>('');
  const [birthMonth, setBirthMonth] = useState<string>('');
  const [birthYear, setBirthYear] = useState<string>('');
  const [result, setResult] = useState<BiorhythmResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const day = parseInt(birthDay);
    const month = parseInt(birthMonth);
    const year = parseInt(birthYear);

    if (!day || !month || !year || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2025) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir doğum tarihi girin' : 'Please enter a valid birth date');
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    if (isNaN(birthDate.getTime())) {
      setError(locale === 'tr' ? 'Geçersiz tarih' : 'Invalid date');
      return;
    }

    const today = new Date();
    if (birthDate >= today) {
      setError(locale === 'tr' ? 'Doğum tarihi bugünden önce olmalıdır' : 'Birth date must be in the past');
      return;
    }

    const biorhythm = calculateBiorhythm({
      birthDate,
      targetDate: today,
    });

    setResult(biorhythm);
  };

  const handleReset = () => {
    setBirthDay('');
    setBirthMonth('');
    setBirthYear('');
    setResult(null);
    setError('');
  };

  const getCycleIcon = (type: string) => {
    switch (type) {
      case 'physical': return <Dumbbell className="h-5 w-5" />;
      case 'emotional': return <Heart className="h-5 w-5" />;
      case 'intellectual': return <Brain className="h-5 w-5" />;
      default: return <Activity className="h-5 w-5" />;
    }
  };

  const getPhaseVariant = (phase: string): 'success' | 'primary' | 'warning' | 'danger' | 'default' => {
    switch (phase) {
      case 'peak': return 'success';
      case 'rising': return 'primary';
      case 'falling': return 'warning';
      case 'critical': return 'danger';
      case 'low': return 'default';
      default: return 'default';
    }
  };

  const renderCycleBar = (cycle: CycleResult) => {
    const def = cycleDefinitions[cycle.type];
    const isPositive = cycle.value >= 0;
    const barWidth = Math.abs(cycle.value);

    return (
      <div key={cycle.type} className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ color: def.color }}>{getCycleIcon(cycle.type)}</span>
            <span className="font-semibold text-neutral-900">{def.label[locale]}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-lg font-bold ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
              {isPositive ? '+' : ''}{cycle.value}%
            </span>
            <Badge variant={getPhaseVariant(cycle.phase)} size="sm">
              {phaseLabels[cycle.phase][locale]}
            </Badge>
          </div>
        </div>

        {/* Bar visualization */}
        <div className="relative h-6 rounded-full bg-neutral-100">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral-300" />

          {/* Value bar */}
          <div
            className="absolute top-0 h-full rounded-full transition-all duration-500"
            style={{
              backgroundColor: def.color,
              opacity: 0.8,
              width: `${barWidth / 2}%`,
              left: isPositive ? '50%' : `${50 - barWidth / 2}%`,
            }}
          />
        </div>

        <p className="text-xs text-neutral-500">{def.description[locale]}</p>
      </div>
    );
  };

  const renderChart = (biorhythm: BiorhythmResult) => {
    const { chartData } = biorhythm;
    const svgWidth = 700;
    const svgHeight = 250;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = svgWidth - padding.left - padding.right;
    const chartHeight = svgHeight - padding.top - padding.bottom;

    const xScale = (index: number) => padding.left + (index / (chartData.length - 1)) * chartWidth;
    const yScale = (value: number) => padding.top + ((100 - value) / 200) * chartHeight;

    const createPath = (key: 'physical' | 'emotional' | 'intellectual') => {
      return chartData
        .map((point, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i)} ${yScale(point[key])}`)
        .join(' ');
    };

    const todayIndex = chartData.findIndex(p => p.dayOffset === 0);

    return (
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full min-w-[500px]">
          {/* Grid lines */}
          <line x1={padding.left} y1={yScale(0)} x2={svgWidth - padding.right} y2={yScale(0)} stroke="#D1D5DB" strokeDasharray="4,4" />
          <line x1={padding.left} y1={yScale(50)} x2={svgWidth - padding.right} y2={yScale(50)} stroke="#E5E7EB" strokeDasharray="2,4" />
          <line x1={padding.left} y1={yScale(-50)} x2={svgWidth - padding.right} y2={yScale(-50)} stroke="#E5E7EB" strokeDasharray="2,4" />
          <line x1={padding.left} y1={yScale(100)} x2={svgWidth - padding.right} y2={yScale(100)} stroke="#E5E7EB" strokeDasharray="2,4" />
          <line x1={padding.left} y1={yScale(-100)} x2={svgWidth - padding.right} y2={yScale(-100)} stroke="#E5E7EB" strokeDasharray="2,4" />

          {/* Y-axis labels */}
          <text x={padding.left - 8} y={yScale(100) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]">100</text>
          <text x={padding.left - 8} y={yScale(50) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]">50</text>
          <text x={padding.left - 8} y={yScale(0) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]">0</text>
          <text x={padding.left - 8} y={yScale(-50) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]">-50</text>
          <text x={padding.left - 8} y={yScale(-100) + 4} textAnchor="end" className="fill-neutral-400 text-[10px]">-100</text>

          {/* Today line */}
          {todayIndex >= 0 && (
            <>
              <line
                x1={xScale(todayIndex)} y1={padding.top}
                x2={xScale(todayIndex)} y2={svgHeight - padding.bottom}
                stroke="#6366F1" strokeWidth="2" strokeDasharray="6,3"
              />
              <text x={xScale(todayIndex)} y={svgHeight - 8} textAnchor="middle" className="fill-indigo-500 text-[11px] font-semibold">
                {locale === 'tr' ? 'Bugün' : 'Today'}
              </text>
            </>
          )}

          {/* Cycle lines */}
          <path d={createPath('physical')} fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={createPath('emotional')} fill="none" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d={createPath('intellectual')} fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

          {/* Today dots */}
          {todayIndex >= 0 && (
            <>
              <circle cx={xScale(todayIndex)} cy={yScale(chartData[todayIndex].physical)} r="5" fill="#EF4444" stroke="white" strokeWidth="2" />
              <circle cx={xScale(todayIndex)} cy={yScale(chartData[todayIndex].emotional)} r="5" fill="#F59E0B" stroke="white" strokeWidth="2" />
              <circle cx={xScale(todayIndex)} cy={yScale(chartData[todayIndex].intellectual)} r="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
            </>
          )}

          {/* X-axis date labels (every 5 days) */}
          {chartData.filter((_, i) => i % 5 === 0).map((point, i) => {
            const origIndex = chartData.indexOf(point);
            const dateStr = `${point.date.getDate()}/${point.date.getMonth() + 1}`;
            return (
              <text key={i} x={xScale(origIndex)} y={svgHeight - 8} textAnchor="middle" className="fill-neutral-400 text-[10px]">
                {dateStr}
              </text>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Biyoritm Hesaplayıcı' : 'Biorhythm Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Fiziksel, duygusal ve zihinsel döngülerinizi keşfedin'
                : 'Discover your physical, emotional, and intellectual cycles'}
            </p>
          </div>
        </div>

        {/* Birth Date Input */}
        <div className="mb-4">
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
              min={1}
              max={31}
              required
            />
            <Input
              label={locale === 'tr' ? 'Ay' : 'Month'}
              type="number"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
              placeholder="6"
              min={1}
              max={12}
              required
            />
            <Input
              label={locale === 'tr' ? 'Yıl' : 'Year'}
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              placeholder="1990"
              min={1900}
              max={2025}
              required
            />
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

      {/* Results */}
      {result && (
        <>
          {/* Overall Score */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Genel Biyoritm Puanı' : 'Overall Biorhythm Score'}
              </h3>
              <div className={`mb-2 text-6xl font-bold ${result.overallScore >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                {result.overallScore > 0 ? '+' : ''}{result.overallScore}
              </div>
              <p className="text-sm text-neutral-500">
                {locale === 'tr'
                  ? `Doğumunuzdan bu yana ${result.daysSinceBirth.toLocaleString()} gün geçti`
                  : `${result.daysSinceBirth.toLocaleString()} days since your birth`}
              </p>
            </div>
          </Card>

          {/* Cycle Details */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Döngü Detayları' : 'Cycle Details'}
            </h3>
            <div className="space-y-6">
              {renderCycleBar(result.physical)}
              {renderCycleBar(result.emotional)}
              {renderCycleBar(result.intellectual)}
            </div>
          </Card>

          {/* Chart */}
          <Card>
            <h3 className="mb-2 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? '30 Günlük Biyoritm Grafiği' : '30-Day Biorhythm Chart'}
            </h3>
            <p className="mb-4 text-xs text-neutral-500">
              {locale === 'tr'
                ? '14 gün öncesi ve 15 gün sonrası gösterilmektedir'
                : 'Showing 14 days before and 15 days after today'}
            </p>

            {/* Legend */}
            <div className="mb-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="text-neutral-600">{locale === 'tr' ? 'Fiziksel' : 'Physical'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-amber-500" />
                <span className="text-neutral-600">{locale === 'tr' ? 'Duygusal' : 'Emotional'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-blue-500" />
                <span className="text-neutral-600">{locale === 'tr' ? 'Zihinsel' : 'Intellectual'}</span>
              </div>
            </div>

            {renderChart(result)}
          </Card>

          {/* Critical Days Warning */}
          {(result.physical.phase === 'critical' || result.emotional.phase === 'critical' || result.intellectual.phase === 'critical') && (
            <Card className="border-2 border-amber-200 bg-amber-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <div>
                  <h4 className="font-semibold text-amber-900">
                    {locale === 'tr' ? 'Kritik Gün Uyarısı' : 'Critical Day Alert'}
                  </h4>
                  <p className="mt-1 text-sm text-amber-800">
                    {locale === 'tr'
                      ? 'Bugün bir veya daha fazla döngünüz geçiş noktasında. Kritik günlerde dikkatli olmanız ve önemli kararları mümkünse ertelemeniz önerilir.'
                      : 'One or more of your cycles are at a transition point today. On critical days, it is recommended to be cautious and postpone important decisions if possible.'}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Fun Insights */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <Calendar className="mr-2 inline h-5 w-5" />
              {locale === 'tr' ? 'Günlük Öneriler' : 'Daily Insights'}
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Physical Insight */}
              <div className="rounded-lg border border-red-100 bg-red-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-red-700">
                  <Dumbbell className="h-4 w-4" />
                  <span className="text-sm font-semibold">{locale === 'tr' ? 'Fiziksel' : 'Physical'}</span>
                </div>
                <p className="text-xs text-red-600">
                  {result.physical.value > 50
                    ? (locale === 'tr' ? 'Enerjiniz yüksek! Spor ve fiziksel aktiviteler için harika bir gün.' : 'Your energy is high! Great day for sports and physical activities.')
                    : result.physical.value > 0
                    ? (locale === 'tr' ? 'Fiziksel enerjiniz ortanın üstünde. Orta yoğunlukta egzersiz yapabilirsiniz.' : 'Your physical energy is above average. You can do moderate exercise.')
                    : result.physical.value > -50
                    ? (locale === 'tr' ? 'Fiziksel enerjiniz düşük. Hafif yürüyüş veya esneme hareketleri tercih edin.' : 'Your physical energy is low. Prefer light walking or stretching.')
                    : (locale === 'tr' ? 'Fiziksel olarak yorgun bir dönemdesiniz. Dinlenmeye öncelik verin.' : 'You are in a physically tired period. Prioritize rest.')}
                </p>
              </div>

              {/* Emotional Insight */}
              <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-amber-700">
                  <Heart className="h-4 w-4" />
                  <span className="text-sm font-semibold">{locale === 'tr' ? 'Duygusal' : 'Emotional'}</span>
                </div>
                <p className="text-xs text-amber-600">
                  {result.emotional.value > 50
                    ? (locale === 'tr' ? 'Duygusal olarak çok iyi bir dönemdesiniz. Sosyal etkinlikler için ideal.' : 'You are in a very good emotional period. Ideal for social activities.')
                    : result.emotional.value > 0
                    ? (locale === 'tr' ? 'Ruh haliniz olumlu. Yaratıcı projeler için uygun bir zaman.' : 'Your mood is positive. A suitable time for creative projects.')
                    : result.emotional.value > -50
                    ? (locale === 'tr' ? 'Duygusal enerjiniz biraz düşük. Kendinize vakit ayırın.' : 'Your emotional energy is a bit low. Take some time for yourself.')
                    : (locale === 'tr' ? 'Hassas bir dönemden geçiyorsunuz. Stresli durumlardan kaçının.' : 'You are going through a sensitive period. Avoid stressful situations.')}
                </p>
              </div>

              {/* Intellectual Insight */}
              <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                <div className="mb-2 flex items-center gap-2 text-blue-700">
                  <Brain className="h-4 w-4" />
                  <span className="text-sm font-semibold">{locale === 'tr' ? 'Zihinsel' : 'Intellectual'}</span>
                </div>
                <p className="text-xs text-blue-600">
                  {result.intellectual.value > 50
                    ? (locale === 'tr' ? 'Zihniniz çok keskin! Zor problemler ve önemli kararlar için mükemmel.' : 'Your mind is very sharp! Perfect for difficult problems and important decisions.')
                    : result.intellectual.value > 0
                    ? (locale === 'tr' ? 'Konsantrasyonunuz iyi. Öğrenme ve planlama için uygun.' : 'Your concentration is good. Suitable for learning and planning.')
                    : result.intellectual.value > -50
                    ? (locale === 'tr' ? 'Zihinsel performansınız ortanın altında. Rutin işlere odaklanın.' : 'Your mental performance is below average. Focus on routine tasks.')
                    : (locale === 'tr' ? 'Zihinsel yorgunluk dönemi. Önemli kararları ertelemeyi düşünün.' : 'Mental fatigue period. Consider postponing important decisions.')}
                </p>
              </div>
            </div>
          </Card>

          {/* Disclaimer */}
          <div className="rounded-lg bg-neutral-50 p-4 text-xs text-neutral-500">
            <p>
              {locale === 'tr'
                ? 'Not: Biyoritm hesaplamaları bilimsel olarak kanıtlanmış bir yöntem değildir. Eğlence amaçlı sunulmaktadır ve tıbbi veya profesyonel tavsiye yerine geçmez.'
                : 'Note: Biorhythm calculations are not a scientifically proven method. They are presented for entertainment purposes and do not replace medical or professional advice.'}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default BiorhythmCalculator;
