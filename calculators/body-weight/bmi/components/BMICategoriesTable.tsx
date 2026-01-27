'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { BMICategory } from '@/types/calculator';

interface BMICategoriesTableProps {
  categories: BMICategory[];
  locale: 'en' | 'tr';
  currentBMI?: number;
}

const BMICategoriesTable: React.FC<BMICategoriesTableProps> = ({
  categories,
  locale,
  currentBMI,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200">
      <table className="w-full">
        <thead className="bg-neutral-100">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
              {locale === 'en' ? 'BMI Range' : 'VKİ Aralığı'}
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
              {locale === 'en' ? 'Category' : 'Kategori'}
            </th>
            <th className="hidden px-4 py-3 text-left text-sm font-semibold text-neutral-900 md:table-cell">
              {locale === 'en' ? 'Description' : 'Açıklama'}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 bg-white">
          {categories.map((category, index) => {
            const isCurrentCategory = currentBMI ? isBMIInRange(currentBMI, category.range) : false;

            return (
              <tr
                key={index}
                className={`transition-colors ${
                  isCurrentCategory ? 'bg-primary-50 ring-2 ring-primary-500 ring-inset' : 'hover:bg-neutral-50'
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm font-medium text-neutral-900">
                      {category.range}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold text-neutral-900">
                    {category.label}
                  </span>
                  {isCurrentCategory && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
                      {locale === 'en' ? 'Your Category' : 'Kategoriniz'}
                    </span>
                  )}
                </td>
                <td className="hidden px-4 py-3 text-sm text-neutral-700 md:table-cell">
                  {category.description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Mobile Description Cards */}
      <div className="md:hidden">
        {categories.map((category, index) => {
          const isCurrentCategory = currentBMI ? isBMIInRange(currentBMI, category.range) : false;

          if (!isCurrentCategory) return null;

          return (
            <div key={index} className="border-t border-neutral-200 bg-primary-50 p-4">
              <p className="text-sm text-neutral-700">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Helper function to check if BMI is in a specific range
function isBMIInRange(bmi: number, range: string): boolean {
  // Handle "< X" format
  if (range.startsWith('<')) {
    const max = parseFloat(range.replace('<', '').trim());
    return bmi < max;
  }

  // Handle ">= X" or "≥ X" format
  if (range.startsWith('>=') || range.startsWith('\u2265')) {
    const min = parseFloat(range.replace(/>=|\u2265/, '').trim());
    return bmi >= min;
  }

  // Handle "X - Y" format
  if (range.includes('-')) {
    const [minStr, maxStr] = range.split('-').map(s => s.trim());
    const min = parseFloat(minStr);
    const max = parseFloat(maxStr);
    return bmi >= min && bmi <= max;
  }

  return false;
}

export default BMICategoriesTable;
