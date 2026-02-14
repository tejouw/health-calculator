'use client';

import React from 'react';
import { Card, Badge } from '@/components/ui';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { FastingProtocol } from '../fastingTypes';
import { protocolsData } from '../fastingLogic';

interface ProtocolComparisonProps {
  currentProtocol: FastingProtocol;
  locale: 'en' | 'tr';
}

const ProtocolComparison: React.FC<ProtocolComparisonProps> = ({
  currentProtocol,
  locale,
}) => {
  const protocols: FastingProtocol[] = ['16:8', '18:6', '20:4', 'omad', '5:2', 'alternate-day'];

  const getDifficultyBadge = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
    const variants = {
      beginner: 'success',
      intermediate: 'warning',
      advanced: 'danger',
    } as const;

    const labels = {
      beginner: locale === 'tr' ? 'Başlangıç' : 'Beginner',
      intermediate: locale === 'tr' ? 'Orta' : 'Intermediate',
      advanced: locale === 'tr' ? 'İleri' : 'Advanced',
    };

    return (
      <Badge variant={variants[difficulty]} size="sm">
        {labels[difficulty]}
      </Badge>
    );
  };

  return (
    <Card>
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? '📊 Protokol Karşılaştırması' : '📊 Protocol Comparison'}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-neutral-200">
              <th className="pb-3 pr-4 text-left text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Protokol' : 'Protocol'}
              </th>
              <th className="pb-3 pr-4 text-left text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Seviye' : 'Level'}
              </th>
              <th className="pb-3 pr-4 text-left text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'Pencere' : 'Window'}
              </th>
              <th className="pb-3 text-left text-sm font-semibold text-neutral-900">
                {locale === 'tr' ? 'En İyi Kullanım' : 'Best For'}
              </th>
            </tr>
          </thead>
          <tbody>
            {protocols.map((protocol) => {
              const info = protocolsData[protocol];
              const isCurrent = protocol === currentProtocol;
              return (
                <tr
                  key={protocol}
                  className={`border-b border-neutral-100 ${
                    isCurrent ? 'bg-purple-50 font-medium' : ''
                  }`}
                >
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      {isCurrent && <CheckCircle className="h-4 w-4 text-purple-600" />}
                      <span className={isCurrent ? 'text-purple-900' : 'text-neutral-900'}>
                        {info.name[locale]}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">{getDifficultyBadge(info.difficulty)}</td>
                  <td className="py-3 pr-4">
                    <span className="text-sm text-neutral-700">
                      {info.weeklyPattern
                        ? locale === 'tr'
                          ? 'Haftalık'
                          : 'Weekly'
                        : `${info.fastHours}:${info.eatHours}`}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="text-sm text-neutral-700">
                      {info.bestFor[locale].slice(0, 2).join(', ')}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
        <div>
          <h4 className="mb-2 font-semibold text-neutral-900">
            {locale === 'tr'
              ? '🎯 Protokol Seçim Rehberi'
              : '🎯 Protocol Selection Guide'}
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="font-medium text-green-900">
                  {locale === 'tr' ? 'Yeni Başlayanlar' : 'Beginners'}
                </p>
                <p className="text-sm text-green-800">
                  {locale === 'tr'
                    ? '16:8 ile başlayın. Adapte oldukça 18:6\'ya geçebilirsiniz.'
                    : 'Start with 16:8. Progress to 18:6 as you adapt.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-900">
                  {locale === 'tr' ? 'Deneyimliler' : 'Experienced'}
                </p>
                <p className="text-sm text-yellow-800">
                  {locale === 'tr'
                    ? '18:6 veya 20:4 daha derin faydalar sağlar.'
                    : '18:6 or 20:4 provide deeper benefits.'}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3">
              <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="font-medium text-red-900">
                  {locale === 'tr' ? 'Dikkat' : 'Caution'}
                </p>
                <p className="text-sm text-red-800">
                  {locale === 'tr'
                    ? 'OMAD ve alternatif gün orucu sadece deneyimli oruç tutanlar ve tıbbi gözetim altında.'
                    : 'OMAD and alternate-day fasting only for experienced fasters with medical supervision.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProtocolComparison;
