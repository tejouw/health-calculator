'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card } from '@/components/ui';
import { calculateLove, loveRecommendations } from './loveLogic';
import { LoveCalculatorResult } from './loveTypes';
import {
  Heart,
  Sparkles,
  Info,
  Share2,
  TrendingUp,
  Award,
  Calendar,
  Users,
  MessageCircle,
  Brain,
  Zap,
  Target,
  Star,
  AlertCircle,
  CheckCircle2,
  Flame,
} from 'lucide-react';

interface LoveCalculatorProps {
  locale: 'en' | 'tr';
}

const LoveCalculator: React.FC<LoveCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [name1, setName1] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const [result, setResult] = useState<LoveCalculatorResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'prediction' | 'tips'>(
    'overview'
  );

  const handleCalculate = () => {
    setError('');

    if (!name1.trim()) {
      setError(locale === 'tr' ? 'Lütfen ilk ismi girin' : 'Please enter the first name');
      return;
    }

    if (!name2.trim()) {
      setError(locale === 'tr' ? 'Lütfen ikinci ismi girin' : 'Please enter the second name');
      return;
    }

    setIsAnimating(true);
    setResult(null);
    setActiveTab('overview');

    setTimeout(() => {
      const loveResult = calculateLove({ name1: name1.trim(), name2: name2.trim() });
      setResult(loveResult);
      setIsAnimating(false);
    }, 1500);
  };

  const handleReset = () => {
    setName1('');
    setName2('');
    setResult(null);
    setError('');
    setIsAnimating(false);
    setActiveTab('overview');
  };

  const handleShare = async () => {
    if (!result) return;

    const shareText =
      locale === 'tr'
        ? `${name1} ve ${name2} arasındaki aşk uyumu: %${result.percentage}! ${result.emoji} FLAMES: ${result.flames.result}`
        : `Love compatibility between ${name1} and ${name2}: ${result.percentage}%! ${result.emoji} FLAMES: ${result.flames.result}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: locale === 'tr' ? 'Aşk Hesaplayıcı Sonucu' : 'Love Calculator Result',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      alert(locale === 'tr' ? 'Sonuç panoya kopyalandı!' : 'Result copied to clipboard!');
    }
  };

  const recommendations = loveRecommendations[locale];

  const getProgressColor = (percentage: number): string => {
    if (percentage >= 80) return 'from-pink-500 to-red-500';
    if (percentage >= 60) return 'from-rose-400 to-pink-500';
    if (percentage >= 40) return 'from-orange-400 to-rose-400';
    return 'from-yellow-400 to-orange-400';
  };

  const getBarColor = (value: number): string => {
    if (value >= 80) return 'bg-gradient-to-r from-pink-500 to-red-500';
    if (value >= 60) return 'bg-gradient-to-r from-rose-400 to-pink-500';
    if (value >= 40) return 'bg-gradient-to-r from-orange-400 to-rose-400';
    return 'bg-gradient-to-r from-yellow-400 to-orange-400';
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-red-500">
            <Heart className="h-6 w-6 text-white" fill="white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Aşk Hesaplayıcı' : 'Love Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'İki isim arasındaki aşk uyumunu hesaplayın'
                : 'Calculate love compatibility between two names'}
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <Input
            label={locale === 'tr' ? 'İlk İsim' : 'First Name'}
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder={locale === 'tr' ? 'İsim girin...' : 'Enter name...'}
            maxLength={50}
          />

          <div className="flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
              <Heart className="h-5 w-5 text-pink-500" />
            </div>
          </div>

          <Input
            label={locale === 'tr' ? 'İkinci İsim' : 'Second Name'}
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder={locale === 'tr' ? 'İsim girin...' : 'Enter name...'}
            maxLength={50}
          />
        </div>

        {error && <p className="mb-4 text-sm text-danger-main">{error}</p>}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg" disabled={isAnimating}>
            {isAnimating ? (
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-spin" />
                {locale === 'tr' ? 'Hesaplanıyor...' : 'Calculating...'}
              </span>
            ) : (
              tCommon('calculate')
            )}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {isAnimating && (
        <Card className="animate-pulse border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-red-50">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative">
              <Heart className="h-16 w-16 animate-bounce text-pink-500" fill="currentColor" />
              <Sparkles className="absolute -right-2 -top-2 h-6 w-6 animate-spin text-yellow-500" />
            </div>
            <p className="mt-4 text-lg font-medium text-pink-600">
              {locale === 'tr' ? 'Aşk uyumu hesaplanıyor...' : 'Calculating love compatibility...'}
            </p>
          </div>
        </Card>
      )}

      {result && !isAnimating && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-red-50">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-neutral-800">{name1}</span>
                <span className="text-3xl">{result.emoji}</span>
                <span className="text-2xl font-bold text-neutral-800">{name2}</span>
              </div>

              {/* Main Percentage */}
              <div className="relative mx-auto mb-6 h-48 w-48">
                <svg className="h-48 w-48 -rotate-90 transform" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="currentColor"
                    strokeWidth="14"
                    fill="none"
                    className="text-pink-100"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    stroke="url(#loveGradient)"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${result.percentage * 5.65} 565`}
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="loveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-pink-600">{result.percentage}%</span>
                  <span className="text-sm font-medium text-neutral-600">
                    {locale === 'tr' ? 'Uyum' : 'Match'}
                  </span>
                </div>
              </div>

              <p className="mb-2 text-xl font-bold text-neutral-800">{result.message[locale]}</p>
              <p className="mb-4 text-sm text-neutral-600">{result.tip[locale]}</p>

              {/* FLAMES Result */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-neutral-700">
                  FLAMES: {result.flames.result}
                </span>
              </div>

              {/* Famous Couple Match */}
              <div className="mb-4 rounded-lg bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500" fill="currentColor" />
                  <span className="font-semibold text-neutral-700">
                    {locale === 'tr' ? 'Ünlü Çift Eşleşmesi' : 'Famous Couple Match'}
                  </span>
                </div>
                <p className="mb-1 text-lg font-bold text-pink-600">{result.famousCouple.couple}</p>
                <p className="text-sm text-neutral-600">{result.famousCouple.description[locale]}</p>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-700"
              >
                <Share2 className="h-4 w-4" />
                {locale === 'tr' ? 'Sonucu Paylaş' : 'Share Result'}
              </button>
            </div>
          </Card>

          {/* Tabs Navigation */}
          <div className="flex gap-2 overflow-x-auto rounded-lg bg-neutral-100 p-1">
            {[
              { id: 'overview', label: locale === 'tr' ? 'Genel Bakış' : 'Overview', icon: Info },
              {
                id: 'breakdown',
                label: locale === 'tr' ? 'Detaylı Analiz' : 'Breakdown',
                icon: TrendingUp,
              },
              {
                id: 'prediction',
                label: locale === 'tr' ? 'Tahminler' : 'Predictions',
                icon: Calendar,
              },
              { id: 'tips', label: locale === 'tr' ? 'Tavsiyeler' : 'Tips', icon: Award },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-pink-600 shadow-sm'
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
            <Card className="animate-slide-up">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-neutral-900">
                <Info className="h-5 w-5 text-pink-600" />
                {locale === 'tr' ? 'İlişki Özeti' : 'Relationship Overview'}
              </h3>

              {/* FLAMES Description */}
              <div className="mb-6 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Flame className="h-5 w-5 text-orange-600" />
                  <h4 className="font-semibold text-neutral-900">
                    FLAMES: {result.flames.result}
                  </h4>
                </div>
                <p className="text-sm text-neutral-700">{result.flames.description[locale]}</p>
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  {locale === 'tr' ? 'Güçlü Yönler' : 'Strengths'}
                </h4>
                <ul className="space-y-2">
                  {result.strengths[locale].map((strength, index) => (
                    <li key={index} className="flex gap-2 text-sm text-neutral-700">
                      <span className="text-green-500">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-neutral-900">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  {locale === 'tr' ? 'Üzerinde Çalışılacaklar' : 'Areas to Work On'}
                </h4>
                <ul className="space-y-2">
                  {result.challenges[locale].map((challenge, index) => (
                    <li key={index} className="flex gap-2 text-sm text-neutral-700">
                      <span className="text-orange-500">⚠</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          )}

          {/* Breakdown Tab */}
          {activeTab === 'breakdown' && (
            <Card className="animate-slide-up">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-900">
                <TrendingUp className="h-5 w-5 text-pink-600" />
                {locale === 'tr' ? 'Uyumluluk Analizi' : 'Compatibility Breakdown'}
              </h3>

              <div className="space-y-4">
                {[
                  {
                    key: 'emotional',
                    label: locale === 'tr' ? 'Duygusal Bağ' : 'Emotional Connection',
                    icon: Heart,
                  },
                  {
                    key: 'intellectual',
                    label: locale === 'tr' ? 'Zihinsel Uyum' : 'Intellectual Match',
                    icon: Brain,
                  },
                  {
                    key: 'physical',
                    label: locale === 'tr' ? 'Fiziksel Çekim' : 'Physical Attraction',
                    icon: Zap,
                  },
                  {
                    key: 'spiritual',
                    label: locale === 'tr' ? 'Manevi Bağ' : 'Spiritual Bond',
                    icon: Sparkles,
                  },
                  {
                    key: 'communication',
                    label: locale === 'tr' ? 'İletişim' : 'Communication',
                    icon: MessageCircle,
                  },
                ].map((item) => {
                  const value = result.breakdown[item.key as keyof typeof result.breakdown];
                  return (
                    <div key={item.key}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 text-pink-600" />
                          <span className="text-sm font-medium text-neutral-700">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm font-bold text-pink-600">{value}%</span>
                      </div>
                      <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-100">
                        <div
                          className={`h-full rounded-full ${getBarColor(value)} transition-all duration-1000`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Average Score */}
              <div className="mt-6 rounded-lg bg-gradient-to-r from-pink-50 to-red-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Genel Uyumluluk' : 'Overall Compatibility'}
                  </span>
                  <span className="text-2xl font-bold text-pink-600">{result.percentage}%</span>
                </div>
              </div>
            </Card>
          )}

          {/* Prediction Tab */}
          {activeTab === 'prediction' && (
            <Card className="animate-slide-up">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-neutral-900">
                <Calendar className="h-5 w-5 text-pink-600" />
                {locale === 'tr' ? 'İlişki Tahminleri' : 'Relationship Predictions'}
              </h3>

              <p className="mb-6 text-sm italic text-neutral-600">
                {locale === 'tr'
                  ? '✨ Eğlence amaçlı tahminler - Kesinlikle ciddiye almayın!'
                  : '✨ For entertainment only - Don\'t take these seriously!'}
              </p>

              <div className="space-y-4">
                {[
                  {
                    label: locale === 'tr' ? 'İlk Randevu' : 'First Date',
                    value: result.prediction.firstDate,
                    icon: Users,
                  },
                  {
                    label: locale === 'tr' ? 'İlk Öpücük' : 'First Kiss',
                    value: result.prediction.firstKiss,
                    icon: Heart,
                  },
                  {
                    label: locale === 'tr' ? 'Nişan' : 'Engagement',
                    value: result.prediction.engagement,
                    icon: Sparkles,
                  },
                  {
                    label: locale === 'tr' ? 'Evlilik' : 'Marriage',
                    value: result.prediction.marriage,
                    icon: Award,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                        <item.icon className="h-5 w-5 text-pink-600" />
                      </div>
                      <span className="font-medium text-neutral-900">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-pink-600">{item.value}</span>
                  </div>
                ))}

                <div className="rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                        <Target className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-neutral-900">
                        {locale === 'tr' ? 'Çocuk Sayısı' : 'Number of Children'}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">
                      {result.prediction.children}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-4">
                  <div className="text-center">
                    <p className="mb-2 text-sm font-medium text-neutral-700">
                      {locale === 'tr' ? 'Evcil Hayvan İsimleri' : 'Pet Names'}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      {result.prediction.petName[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Tips Tab */}
          {activeTab === 'tips' && (
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-pink-600" />
                <h3 className="text-lg font-bold text-neutral-900">{recommendations.title}</h3>
              </div>
              <p className="mb-6 text-sm text-neutral-700">{recommendations.description}</p>
              <ul className="space-y-3">
                {recommendations.tips.map((tip, index) => (
                  <li key={index} className="flex gap-3 rounded-lg bg-pink-50 p-3">
                    <span className="text-pink-500">♥</span>
                    <span className="text-sm text-neutral-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default LoveCalculator;
