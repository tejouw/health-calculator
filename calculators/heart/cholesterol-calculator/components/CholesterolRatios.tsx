'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { CholesterolResult } from '../cholesterolTypes';

interface CholesterolRatiosProps {
  result: CholesterolResult;
  locale: 'en' | 'tr';
}

function getRatioStatus(
  ratio: number,
  thresholds: { optimal: number; normal: number },
  locale: 'en' | 'tr'
): { label: string; color: string } {
  if (ratio < thresholds.optimal) {
    return {
      label: locale === 'tr' ? 'Optimal' : 'Optimal',
      color: 'text-green-600',
    };
  }
  if (ratio < thresholds.normal) {
    return {
      label: locale === 'tr' ? 'Normal' : 'Normal',
      color: 'text-yellow-600',
    };
  }
  return {
    label: locale === 'tr' ? 'Yüksek Risk' : 'High Risk',
    color: 'text-red-600',
  };
}

const CholesterolRatios: React.FC<CholesterolRatiosProps> = ({ result, locale }) => {
  const ratios = [
    {
      name: locale === 'tr' ? 'Toplam Kolesterol / HDL Oranı' : 'Total Cholesterol / HDL Ratio',
      value: result.totalHdlRatio,
      description:
        locale === 'tr'
          ? 'Bu oran kardiyovasküler risk için en önemli göstergelerden biridir. Düşük oran daha iyi kalp sağlığını gösterir.'
          : 'This ratio is one of the most important indicators for cardiovascular risk. A lower ratio indicates better heart health.',
      idealRange: locale === 'tr' ? 'İdeal: < 3.5 | Normal: < 5.0' : 'Ideal: < 3.5 | Normal: < 5.0',
      status: getRatioStatus(result.totalHdlRatio, { optimal: 3.5, normal: 5 }, locale),
    },
    {
      name: locale === 'tr' ? 'LDL / HDL Oranı' : 'LDL / HDL Ratio',
      value: result.ldlHdlRatio,
      description:
        locale === 'tr'
          ? 'Kötü kolesterolün iyi kolesterole oranı. Düşük oran daha düşük ateroskleroz riskini gösterir.'
          : 'The ratio of bad cholesterol to good cholesterol. A lower ratio indicates lower atherosclerosis risk.',
      idealRange: locale === 'tr' ? 'İdeal: < 2.5 | Normal: < 3.5' : 'Ideal: < 2.5 | Normal: < 3.5',
      status: getRatioStatus(result.ldlHdlRatio, { optimal: 2.5, normal: 3.5 }, locale),
    },
    {
      name: locale === 'tr' ? 'Trigliserit / HDL Oranı' : 'Triglycerides / HDL Ratio',
      value: result.triglyceridesHdlRatio,
      description:
        locale === 'tr'
          ? 'İnsülin direnci ve metabolik sendrom için güçlü bir belirteçtir. Düşük oran metabolik sağlığın iyi olduğunu gösterir.'
          : 'A strong marker for insulin resistance and metabolic syndrome. A lower ratio indicates good metabolic health.',
      idealRange: locale === 'tr' ? 'İdeal: < 2.0 | Kabul edilebilir: < 4.0' : 'Ideal: < 2.0 | Acceptable: < 4.0',
      status: getRatioStatus(result.triglyceridesHdlRatio, { optimal: 2, normal: 4 }, locale),
    },
    {
      name: locale === 'tr' ? 'Non-HDL Kolesterol' : 'Non-HDL Cholesterol',
      value: result.nonHdl,
      description:
        locale === 'tr'
          ? 'Toplam kolesterolden HDL çıkarılarak hesaplanır. LDL ve VLDL dahil tüm "kötü" kolesterolü kapsar ve kardiyovasküler riskin güçlü bir göstergesidir.'
          : 'Calculated by subtracting HDL from total cholesterol. Includes all "bad" cholesterol (LDL and VLDL) and is a strong predictor of cardiovascular risk.',
      idealRange:
        locale === 'tr'
          ? 'İdeal: < 130 mg/dL | Normal: < 160 mg/dL'
          : 'Ideal: < 130 mg/dL | Normal: < 160 mg/dL',
      status: getRatioStatus(result.nonHdl, { optimal: 130, normal: 160 }, locale),
    },
  ];

  return (
    <Card>
      <h3 className="mb-4 text-lg font-semibold text-neutral-900">
        {locale === 'tr' ? 'Kolesterol Oranları ve Analiz' : 'Cholesterol Ratios & Analysis'}
      </h3>
      <div className="space-y-4">
        {ratios.map((ratio) => (
          <div
            key={ratio.name}
            className="rounded-lg border border-neutral-200 bg-neutral-50 p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-neutral-800">{ratio.name}</h4>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-neutral-900">
                  {typeof ratio.value === 'number' && ratio.value > 20
                    ? `${ratio.value} mg/dL`
                    : ratio.value}
                </span>
                <span className={`text-sm font-medium ${ratio.status.color}`}>
                  {ratio.status.label}
                </span>
              </div>
            </div>
            <p className="mb-1 text-xs text-neutral-600">{ratio.description}</p>
            <p className="text-xs font-medium text-neutral-500">{ratio.idealRange}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CholesterolRatios;
