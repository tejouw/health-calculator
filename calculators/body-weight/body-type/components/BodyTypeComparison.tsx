'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { bodyTypeData } from '../bodyTypeLogic';
import { Users } from 'lucide-react';

interface BodyTypeComparisonProps {
  locale: 'en' | 'tr';
}

const BodyTypeComparison: React.FC<BodyTypeComparisonProps> = ({ locale }) => {
  const types = ['ectomorph', 'mesomorph', 'endomorph'] as const;

  const comparisonData = {
    metabolism: {
      label: { en: 'Metabolism', tr: 'Metabolizma' },
      values: {
        ectomorph: { en: 'Fast', tr: 'Hızlı' },
        mesomorph: { en: 'Moderate', tr: 'Orta' },
        endomorph: { en: 'Slow', tr: 'Yavaş' },
      },
    },
    muscleGain: {
      label: { en: 'Muscle Gain', tr: 'Kas Kazanımı' },
      values: {
        ectomorph: { en: 'Difficult', tr: 'Zor' },
        mesomorph: { en: 'Easy', tr: 'Kolay' },
        endomorph: { en: 'Moderate', tr: 'Orta' },
      },
    },
    fatLoss: {
      label: { en: 'Fat Loss', tr: 'Yağ Kaybı' },
      values: {
        ectomorph: { en: 'Easy (naturally lean)', tr: 'Kolay (doğal ince)' },
        mesomorph: { en: 'Moderate', tr: 'Orta' },
        endomorph: { en: 'Challenging', tr: 'Zorlu' },
      },
    },
    bodyFrame: {
      label: { en: 'Body Frame', tr: 'Vücut Çerçevesi' },
      values: {
        ectomorph: { en: 'Small / Narrow', tr: 'Küçük / Dar' },
        mesomorph: { en: 'Medium / Athletic', tr: 'Orta / Atletik' },
        endomorph: { en: 'Large / Wide', tr: 'Büyük / Geniş' },
      },
    },
    idealSports: {
      label: { en: 'Ideal Sports', tr: 'İdeal Sporlar' },
      values: {
        ectomorph: { en: 'Running, Swimming, Cycling', tr: 'Koşu, Yüzme, Bisiklet' },
        mesomorph: { en: 'Team Sports, CrossFit, MMA', tr: 'Takım Sporları, CrossFit, MMA' },
        endomorph: { en: 'Powerlifting, Wrestling, Rugby', tr: 'Halter, Güreş, Rugby' },
      },
    },
    carbTolerance: {
      label: { en: 'Carb Tolerance', tr: 'Karbonhidrat Toleransı' },
      values: {
        ectomorph: { en: 'High', tr: 'Yüksek' },
        mesomorph: { en: 'Moderate', tr: 'Orta' },
        endomorph: { en: 'Low', tr: 'Düşük' },
      },
    },
  };

  return (
    <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-900">
            {locale === 'tr' ? '3 Vücut Tipinin Karşılaştırması' : 'All 3 Body Types Compared'}
          </h3>
          <p className="text-sm text-purple-700">
            {locale === 'tr'
              ? 'Ektomorf vs Mezomorf vs Endomorf'
              : 'Ectomorph vs Mesomorph vs Endomorph'}
          </p>
        </div>
      </div>

      {/* Visual Body Shapes */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        {types.map((type) => {
          const info = bodyTypeData[type];
          return (
            <div key={type} className="text-center">
              <div className="mb-2 text-4xl">{info.emoji}</div>
              <div className="text-sm font-bold" style={{ color: info.color }}>
                {info.label[locale]}
              </div>
              <div className="mt-1 text-xs text-neutral-500">
                {type === 'ectomorph'
                  ? locale === 'tr' ? 'İnce & Uzun' : 'Lean & Long'
                  : type === 'mesomorph'
                    ? locale === 'tr' ? 'Atletik & Kaslı' : 'Athletic & Muscular'
                    : locale === 'tr' ? 'Geniş & Güçlü' : 'Wide & Strong'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <div className="overflow-hidden rounded-xl border border-neutral-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-100">
              <th className="p-3 text-left font-semibold text-neutral-700">
                {locale === 'tr' ? 'Özellik' : 'Trait'}
              </th>
              {types.map((type) => (
                <th key={type} className="p-3 text-center font-semibold" style={{ color: bodyTypeData[type].color }}>
                  {bodyTypeData[type].label[locale]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(comparisonData).map(([key, data], index) => (
              <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                <td className="p-3 font-medium text-neutral-700">{data.label[locale]}</td>
                {types.map((type) => (
                  <td key={type} className="p-3 text-center text-neutral-600">
                    {data.values[type][locale]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Famous People Section */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-semibold text-purple-800">
          {locale === 'tr' ? 'Ünlü Örnekler' : 'Famous Examples'}
        </h4>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {types.map((type) => {
            const info = bodyTypeData[type];
            return (
              <div key={type} className="rounded-lg bg-white/60 p-3">
                <div className="mb-2 text-sm font-bold" style={{ color: info.color }}>
                  {info.emoji} {info.label[locale]}
                </div>
                <div className="flex flex-wrap gap-1">
                  {info.celebrities.map((celeb, i) => (
                    <span key={i} className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600">
                      {celeb}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeComparison;
