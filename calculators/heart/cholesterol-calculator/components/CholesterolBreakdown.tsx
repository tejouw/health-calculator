'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { CholesterolResult } from '../cholesterolTypes';
import { cholesterolCategoryLabels } from '../cholesterolLogic';

interface CholesterolBreakdownProps {
  result: CholesterolResult;
  locale: 'en' | 'tr';
}

const colorMap: Record<string, string> = {
  green: 'bg-green-100 text-green-800 border-green-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red: 'bg-red-100 text-red-800 border-red-200',
};

const progressColorMap: Record<string, string> = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-500',
  orange: 'bg-orange-500',
  red: 'bg-red-500',
};

const CholesterolBreakdown: React.FC<CholesterolBreakdownProps> = ({ result, locale }) => {
  const items = [
    {
      label: locale === 'tr' ? 'Toplam Kolesterol' : 'Total Cholesterol',
      value: result.totalCholesterol,
      idealRange: locale === 'tr' ? '< 200 mg/dL' : '< 200 mg/dL',
      category: cholesterolCategoryLabels.totalCholesterol[result.totalCategory],
      progress: Math.min((result.totalCholesterol / 300) * 100, 100),
    },
    {
      label: locale === 'tr' ? 'HDL (İyi Kolesterol)' : 'HDL (Good Cholesterol)',
      value: result.hdl,
      idealRange: locale === 'tr' ? '≥ 60 mg/dL' : '≥ 60 mg/dL',
      category: cholesterolCategoryLabels.hdl[result.hdlCategory],
      progress: Math.min((result.hdl / 100) * 100, 100),
    },
    {
      label: locale === 'tr' ? 'LDL (Kötü Kolesterol)' : 'LDL (Bad Cholesterol)',
      value: result.ldl,
      idealRange: locale === 'tr' ? '< 100 mg/dL' : '< 100 mg/dL',
      category: cholesterolCategoryLabels.ldl[result.ldlCategory],
      progress: Math.min((result.ldl / 250) * 100, 100),
    },
    {
      label: locale === 'tr' ? 'Trigliserit' : 'Triglycerides',
      value: result.triglycerides,
      idealRange: locale === 'tr' ? '< 150 mg/dL' : '< 150 mg/dL',
      category: cholesterolCategoryLabels.triglycerides[result.triglyceridesCategory],
      progress: Math.min((result.triglycerides / 500) * 100, 100),
    },
  ];

  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-neutral-900">
        {locale === 'tr' ? 'Kolesterol Değerleriniz' : 'Your Cholesterol Values'}
      </h3>
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-700">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-neutral-900">{item.value} mg/dL</span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-xs font-medium ${colorMap[item.category.color]}`}
                >
                  {item.category[locale]}
                </span>
              </div>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${progressColorMap[item.category.color]}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-neutral-500">
              {locale === 'tr' ? 'İdeal aralık: ' : 'Ideal range: '}
              {item.idealRange}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CholesterolBreakdown;
