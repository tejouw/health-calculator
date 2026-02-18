'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/ui';
import { KetoResult } from '../ketoTypes';

interface KetoMacroBreakdownProps {
  result: KetoResult;
  locale: 'en' | 'tr';
}

const KetoMacroBreakdown: React.FC<KetoMacroBreakdownProps> = ({ result, locale }) => {
  const [activeTab, setActiveTab] = useState<'standard' | 'targeted' | 'cyclical'>('standard');

  const tabs = [
    {
      id: 'standard' as const,
      label: locale === 'tr' ? 'Standart (SKD)' : 'Standard (SKD)',
      description: locale === 'tr'
        ? 'En yaygın keto diyeti. Yüksek yağ, orta protein, çok düşük karbonhidrat.'
        : 'The most common keto diet. High fat, moderate protein, very low carb.',
      badge: locale === 'tr' ? 'Önerilen' : 'Recommended',
      data: result.standardKeto,
    },
    {
      id: 'targeted' as const,
      label: locale === 'tr' ? 'Hedefli (TKD)' : 'Targeted (TKD)',
      description: locale === 'tr'
        ? 'Antrenman etrafında ek karbonhidrat. Aktif sporcular için ideal.'
        : 'Extra carbs around workouts. Ideal for active athletes.',
      badge: locale === 'tr' ? 'Sporcular' : 'Athletes',
      data: result.targetedKeto,
    },
    {
      id: 'cyclical' as const,
      label: locale === 'tr' ? 'Döngüsel (CKD)' : 'Cyclical (CKD)',
      description: locale === 'tr'
        ? '5 gün keto + 2 gün yüksek karb. İleri seviye sporcular için.'
        : '5 keto days + 2 high-carb days. For advanced athletes.',
      badge: locale === 'tr' ? 'İleri Seviye' : 'Advanced',
      data: result.cyclicalKeto,
    },
  ];

  const activeData = tabs.find(t => t.id === activeTab)!;

  return (
    <Card>
      <h3 className="mb-4 text-xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Keto Diyet Türleri' : 'Keto Diet Types'}
      </h3>

      {/* Tab Navigation */}
      <div className="mb-6 flex gap-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mb-6 rounded-lg bg-neutral-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <h4 className="font-semibold text-neutral-900">{activeData.label}</h4>
          <Badge variant="primary" size="sm">{activeData.badge}</Badge>
        </div>
        <p className="text-sm text-neutral-600">{activeData.description}</p>
      </div>

      {/* Macro Donut Chart Visual */}
      <div className="mb-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
        <div className="relative h-48 w-48">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            {/* Fat segment */}
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="16"
              strokeDasharray={`${activeData.data.fatPercentage * 2.51} ${251 - activeData.data.fatPercentage * 2.51}`}
              strokeDashoffset="0"
            />
            {/* Protein segment */}
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="#EF4444"
              strokeWidth="16"
              strokeDasharray={`${activeData.data.proteinPercentage * 2.51} ${251 - activeData.data.proteinPercentage * 2.51}`}
              strokeDashoffset={`${-(activeData.data.fatPercentage * 2.51)}`}
            />
            {/* Carb segment */}
            <circle
              cx="50" cy="50" r="40"
              fill="none"
              stroke="#10B981"
              strokeWidth="16"
              strokeDasharray={`${activeData.data.carbPercentage * 2.51} ${251 - activeData.data.carbPercentage * 2.51}`}
              strokeDashoffset={`${-((activeData.data.fatPercentage + activeData.data.proteinPercentage) * 2.51)}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-neutral-900">{activeData.data.calories}</span>
            <span className="text-xs text-neutral-500">kcal</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-yellow-500" />
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Yağ' : 'Fat'}: {activeData.data.fat}g
              </div>
              <div className="text-xs text-neutral-500">
                {activeData.data.fatPercentage}% ({activeData.data.fatCalories} kcal)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-red-500" />
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                Protein: {activeData.data.protein}g
              </div>
              <div className="text-xs text-neutral-500">
                {activeData.data.proteinPercentage}% ({activeData.data.proteinCalories} kcal)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-full bg-green-500" />
            <div>
              <div className="text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Net Karbonhidrat' : 'Net Carbs'}: {activeData.data.netCarbs}g
              </div>
              <div className="text-xs text-neutral-500">
                {activeData.data.carbPercentage}% ({activeData.data.carbCalories} kcal)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="rounded-lg bg-orange-50 p-4">
        <p className="text-sm text-orange-900">
          {locale === 'tr'
            ? '💡 Ketoza girmek için günlük net karbonhidrat alımınızı 20-50g aralığında tutmanız gerekir. Standart keto diyeti çoğu kişi için en etkili yöntemdir.'
            : '💡 To enter ketosis, keep your daily net carb intake between 20-50g. The standard keto diet is the most effective method for most people.'}
        </p>
      </div>
    </Card>
  );
};

export default KetoMacroBreakdown;
