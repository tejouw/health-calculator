'use client';

import { useEffect, useState } from 'react';
import { CalculatorMeta } from '@/types/calculator';
import { getMostViewedCalculatorIds } from '@/lib/analytics/pageViews';
import { getMostViewedCalculators } from '@/lib/calculatorRegistry';
import { CalculatorCard } from './CalculatorCard';
import { Card } from '@/components/ui';
import { Calculator } from 'lucide-react';

interface PopularCalculatorsProps {
  locale: 'en' | 'tr';
  fallbackCalculators: CalculatorMeta[];
  limit?: number;
}

export function PopularCalculators({ locale, fallbackCalculators, limit = 8 }: PopularCalculatorsProps) {
  const [calculators, setCalculators] = useState<CalculatorMeta[]>(fallbackCalculators);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get analytics data from localStorage
    const viewedIds = getMostViewedCalculatorIds(limit);
    const mostViewed = getMostViewedCalculators(viewedIds, limit);

    // If we have analytics data, use it; otherwise use fallback
    if (mostViewed.length > 0) {
      setCalculators(mostViewed);
    }

    setIsLoading(false);
  }, [limit]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: limit }).map((_, index) => (
          <Card key={index} className="h-48 animate-pulse bg-neutral-100" />
        ))}
      </div>
    );
  }

  if (calculators.length === 0) {
    const texts = {
      en: {
        comingSoon: 'Coming Soon',
        comingSoonDescription: 'We\'re working on tracking the most popular calculators. Check back soon!'
      },
      tr: {
        comingSoon: 'Yakında',
        comingSoonDescription: 'En popüler hesaplayıcıları takip etmek için çalışıyoruz. Yakında tekrar kontrol edin!'
      }
    };
    const t = texts[locale];

    return (
      <div className="flex items-center justify-center px-2">
        <Card className="w-full max-w-2xl border-2 border-dashed border-primary-200 bg-white/50 text-center backdrop-blur-sm">
          <div className="mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary-100">
            <Calculator className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600" />
          </div>
          <h3 className="mb-1.5 sm:mb-2 text-base sm:text-lg font-semibold text-neutral-900">
            {t.comingSoon}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600">
            {t.comingSoonDescription}
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {calculators.map((calculator) => (
        <CalculatorCard
          key={calculator.id}
          calculator={calculator}
          locale={locale}
          showPopularBadge={true}
        />
      ))}
    </div>
  );
}
