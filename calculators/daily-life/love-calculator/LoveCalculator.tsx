'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card } from '@/components/ui';
import { calculateLove, loveRecommendations } from './loveLogic';
import { LoveCalculatorResult } from './loveTypes';
import { Heart, Sparkles, Info, Share2 } from 'lucide-react';

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

    // Start animation
    setIsAnimating(true);
    setResult(null);

    // Simulate calculation with animation delay
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
  };

  const handleShare = async () => {
    if (!result) return;

    const shareText =
      locale === 'tr'
        ? `${name1} ve ${name2} arasındaki aşk uyumu: %${result.percentage}! ${result.emoji}`
        : `Love compatibility between ${name1} and ${name2}: ${result.percentage}%! ${result.emoji}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: locale === 'tr' ? 'Aşk Hesaplayıcı Sonucu' : 'Love Calculator Result',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
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

        {/* Name Inputs */}
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

      {/* Calculating Animation */}
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
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-red-50">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-neutral-800">{name1}</span>
                <span className="text-3xl">{result.emoji}</span>
                <span className="text-2xl font-bold text-neutral-800">{name2}</span>
              </div>

              {/* Percentage Circle */}
              <div className="relative mx-auto mb-6 h-40 w-40">
                <svg className="h-40 w-40 -rotate-90 transform" viewBox="0 0 160 160">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-pink-100"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#loveGradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${result.percentage * 4.4} 440`}
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
                  <span className="text-4xl font-bold text-pink-600">{result.percentage}%</span>
                  <span className="text-sm text-neutral-500">
                    {locale === 'tr' ? 'Uyum' : 'Match'}
                  </span>
                </div>
              </div>

              {/* Progress Bar Alternative */}
              <div className="mb-4 h-4 w-full overflow-hidden rounded-full bg-pink-100">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(result.percentage)} transition-all duration-1000`}
                  style={{ width: `${result.percentage}%` }}
                />
              </div>

              {/* Message */}
              <p className="mb-2 text-lg font-semibold text-neutral-800">
                {result.message[locale]}
              </p>
              <p className="text-sm text-neutral-600">{result.tip[locale]}</p>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600 transition-colors hover:bg-pink-200"
              >
                <Share2 className="h-4 w-4" />
                {locale === 'tr' ? 'Sonucu Paylaş' : 'Share Result'}
              </button>
            </div>
          </Card>

          {/* Tips */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-pink-600" />
              <h3 className="text-lg font-bold text-neutral-900">{recommendations.title}</h3>
            </div>
            <p className="mb-4 text-sm text-neutral-700">{recommendations.description}</p>
            <ul className="space-y-2">
              {recommendations.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-neutral-700">
                  <span className="text-pink-500">♥</span>
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

export default LoveCalculator;
