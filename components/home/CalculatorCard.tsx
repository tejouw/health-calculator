'use client';

import { Link } from '@/lib/navigation';
import { Card } from '@/components/ui';
import { CalculatorMeta } from '@/types/calculator';
import { getIcon } from '@/lib/iconUtils';
import { Calculator, ArrowRight, TrendingUp } from 'lucide-react';

interface CalculatorCardProps {
  calculator: CalculatorMeta;
  locale: 'en' | 'tr';
  showPopularBadge?: boolean;
}

export function CalculatorCard({ calculator, locale, showPopularBadge = false }: CalculatorCardProps) {
  const IconComponent = getIcon(calculator.icon, Calculator);
  const title = calculator.title[locale];
  const description = calculator.description[locale];

  // Build the href based on category and slug
  const href = `/${calculator.category}/${calculator.slug[locale]}`;

  // Localized text
  const texts = {
    en: { calculate: 'Calculate', popular: 'Popular' },
    tr: { calculate: 'Hesapla', popular: 'Popüler' }
  };
  const t = texts[locale];

  return (
    <Link href={href}>
      <Card
        hoverable
        className="group relative h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
      >
        {/* Popular badge */}
        {showPopularBadge && calculator.popular && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
            <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 px-2 py-1 text-xs font-semibold text-white shadow-lg">
              <TrendingUp className="h-3 w-3" />
              <span className="hidden sm:inline">{t.popular}</span>
            </div>
          </div>
        )}

        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

        <div className="relative">
          <div className="mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
          </div>

          <h3 className="mb-2 sm:mb-3 text-sm sm:text-base md:text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-600 leading-tight line-clamp-2">
            {title}
          </h3>

          <p className="mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-2 sm:line-clamp-3">
            {description}
          </p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs font-medium text-neutral-500">
              <Calculator className="h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
              <span className="leading-none capitalize">{calculator.category.replace('-', ' ')}</span>
            </div>

            <div className="ml-auto flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-semibold text-primary-600 opacity-0 sm:opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="hidden sm:inline">{t.calculate}</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
