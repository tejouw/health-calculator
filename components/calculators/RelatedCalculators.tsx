'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui';
import { Link } from '@/lib/navigation';
import { getCalculatorById, getCalculatorsByCategory } from '@/lib/calculatorRegistry';
import { getAllRelatedCalculatorIds } from '@/config/calculatorRelations.config';
import { getCategoryById } from '@/config/categories.config';
import { CalculatorMeta } from '@/types/calculator';
import { ArrowRight, Calculator } from 'lucide-react';

interface RelatedCalculatorsProps {
  calculatorId: string;
  currentCategory: string;
  locale: 'en' | 'tr';
  maxItems?: number;
}

const RelatedCalculators: React.FC<RelatedCalculatorsProps> = ({
  calculatorId,
  currentCategory,
  locale,
  maxItems = 5,
}) => {
  const t = useTranslations('calculator');

  // Get manually defined related calculators
  const relatedIds = getAllRelatedCalculatorIds(calculatorId, maxItems);

  // Get calculators from the same category as fallback
  const sameCategoryCalculators = getCalculatorsByCategory(currentCategory as never)
    .filter((calc) => calc.id !== calculatorId)
    .slice(0, maxItems);

  // Combine: first use manual relations, then fill with same category
  const relatedCalculators: CalculatorMeta[] = [];
  const addedIds = new Set<string>();

  // Add manually related calculators first
  for (const id of relatedIds) {
    const calc = getCalculatorById(id);
    if (calc && !addedIds.has(calc.id)) {
      relatedCalculators.push(calc);
      addedIds.add(calc.id);
    }
  }

  // Fill remaining slots with same category calculators
  for (const calc of sameCategoryCalculators) {
    if (relatedCalculators.length >= maxItems) break;
    if (!addedIds.has(calc.id)) {
      relatedCalculators.push(calc);
      addedIds.add(calc.id);
    }
  }

  if (relatedCalculators.length === 0) {
    return null;
  }

  return (
    <Card>
      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-900">
        <Calculator className="h-5 w-5 text-primary-500" />
        {t('relatedCalculators')}
      </h3>
      <div className="space-y-3">
        {relatedCalculators.map((calc) => {
          const category = getCategoryById(calc.category);
          const href = `/${category?.slug[locale] || calc.category}/${calc.slug[locale]}`;

          return (
            <Link
              key={calc.id}
              href={href}
              className="group flex items-center justify-between rounded-lg border border-neutral-200 p-3 transition-all hover:border-primary-300 hover:bg-primary-50"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-neutral-900 group-hover:text-primary-700">
                  {calc.title[locale].split(' - ')[0]}
                </p>
                <p className="truncate text-xs text-neutral-500">
                  {category?.name[locale]}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-primary-500" />
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export default RelatedCalculators;
