'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { BodyTypeResult } from '../bodyTypeTypes';
import { getBodyTypeInfo, bodyTypeData } from '../bodyTypeLogic';
import { Sparkles } from 'lucide-react';

interface BodyTypeResultCardProps {
  result: BodyTypeResult;
  locale: 'en' | 'tr';
}

const BodyTypeResultCard: React.FC<BodyTypeResultCardProps> = ({ result, locale }) => {
  const typeInfo = getBodyTypeInfo(result.primaryType);

  const getBarColor = (type: string) => {
    if (type === 'ectomorph') return 'bg-blue-500';
    if (type === 'mesomorph') return 'bg-green-500';
    return 'bg-amber-500';
  };

  return (
    <Card className="animate-slide-up border-2 border-violet-200 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Main Result */}
      <div className="text-center">
        <div className="mb-2 text-5xl">{typeInfo.emoji}</div>
        <h3 className="mb-1 text-sm font-medium uppercase tracking-wide text-neutral-500">
          {locale === 'tr' ? 'Vücut Tipiniz' : 'Your Body Type'}
        </h3>
        <div className="mb-3 text-4xl font-bold text-violet-700">
          {result.dominantLabel[locale]}
        </div>
        <Badge variant="primary" size="lg">
          {result.primaryType.includes('-')
            ? locale === 'tr' ? 'Karma Tip' : 'Mixed Type'
            : locale === 'tr' ? 'Saf Tip' : 'Pure Type'}
        </Badge>
      </div>

      {/* Description */}
      <p className="mt-4 text-center text-sm leading-relaxed text-neutral-700">
        {result.description[locale]}
      </p>

      {/* Score Breakdown */}
      <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6">
        <h4 className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-neutral-800">
          <Sparkles className="h-4 w-4 text-violet-500" />
          {locale === 'tr' ? 'Tip Dağılımınız' : 'Your Type Distribution'}
        </h4>

        {(['ectomorph', 'mesomorph', 'endomorph'] as const).map((type) => {
          const info = bodyTypeData[type];
          const pct = result.percentages[type];
          return (
            <div key={type} className="flex items-center gap-3">
              <div className="w-24 text-right text-sm font-medium text-neutral-700">
                {info.emoji} {info.label[locale]}
              </div>
              <div className="flex-1">
                <div className="h-6 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={`h-full rounded-full ${getBarColor(type)} transition-all duration-1000`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
              <div className="w-12 text-right text-sm font-bold text-neutral-800">{pct}%</div>
            </div>
          );
        })}
      </div>

      {/* Macro Split */}
      <div className="mt-6 border-t border-neutral-200 pt-6">
        <h4 className="mb-3 text-center text-sm font-semibold text-neutral-800">
          {locale === 'tr' ? 'Önerilen Makro Oranları' : 'Recommended Macro Split'}
        </h4>
        <div className="flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500">{typeInfo.macroSplit.protein}%</div>
            <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Protein' : 'Protein'}</div>
          </div>
          <div className="h-8 w-px bg-neutral-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">{typeInfo.macroSplit.carbs}%</div>
            <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}</div>
          </div>
          <div className="h-8 w-px bg-neutral-300" />
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">{typeInfo.macroSplit.fat}%</div>
            <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeResultCard;
