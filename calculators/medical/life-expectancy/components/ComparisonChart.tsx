'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { BarChart3, TrendingUp } from 'lucide-react';

interface ComparisonChartProps {
  userLifeExpectancy: number;
  averageLifeExpectancy: number;
  currentAge: number;
  locale: 'en' | 'tr';
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({
  userLifeExpectancy,
  averageLifeExpectancy,
  currentAge,
  locale,
}) => {
  const maxValue = Math.max(userLifeExpectancy, averageLifeExpectancy) + 5;
  const userPercentage = (userLifeExpectancy / maxValue) * 100;
  const averagePercentage = (averageLifeExpectancy / maxValue) * 100;

  const isAboveAverage = userLifeExpectancy > averageLifeExpectancy;
  const difference = Math.abs(userLifeExpectancy - averageLifeExpectancy);

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
          <BarChart3 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Ortalama ile Karşılaştırma' : 'Comparison to Average'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? `${currentAge} yaşındaki insanların ortalaması`
              : `For people aged ${currentAge}`}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* User Bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Sizin Yaşam Beklentiniz' : 'Your Life Expectancy'}
            </span>
            <span className="text-lg font-black text-blue-700">
              {Math.round(userLifeExpectancy)}
            </span>
          </div>
          <div className="h-8 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000"
              style={{ width: `${userPercentage}%` }}
            />
          </div>
        </div>

        {/* Average Bar */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Ortalama Yaşam Beklentisi' : 'Average Life Expectancy'}
            </span>
            <span className="text-lg font-black text-neutral-600">
              {Math.round(averageLifeExpectancy)}
            </span>
          </div>
          <div className="h-8 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-neutral-400 transition-all duration-1000"
              style={{ width: `${averagePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-xl bg-white/80 p-4">
        <div className="flex items-center justify-center gap-2">
          {isAboveAverage && <TrendingUp className="h-5 w-5 text-green-600" />}
          <p className="text-center text-sm font-semibold text-neutral-700">
            {isAboveAverage ? (
              <>
                {locale === 'tr' ? (
                  <>
                    🎉 Tebrikler! Ortalamadan{' '}
                    <span className="text-green-700">{difference.toFixed(1)} yıl</span>{' '}
                    daha uzun yaşayacaksınız!
                  </>
                ) : (
                  <>
                    🎉 Congrats! You\'re{' '}
                    <span className="text-green-700">{difference.toFixed(1)} years</span>{' '}
                    above average!
                  </>
                )}
              </>
            ) : difference < 1 ? (
              <>
                {locale === 'tr'
                  ? '✅ Yaşam beklentiniz ortalama ile eşleşiyor'
                  : '✅ Your life expectancy matches the average'}
              </>
            ) : (
              <>
                {locale === 'tr' ? (
                  <>
                    Ortalamadan{' '}
                    <span className="text-orange-700">{difference.toFixed(1)} yıl</span>{' '}
                    düşüksünüz - ama bu değiştirilebilir!
                  </>
                ) : (
                  <>
                    You\'re{' '}
                    <span className="text-orange-700">{difference.toFixed(1)} years</span>{' '}
                    below average - but you can change this!
                  </>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ComparisonChart;
