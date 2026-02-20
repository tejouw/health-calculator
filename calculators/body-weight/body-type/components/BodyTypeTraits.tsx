'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { BodyTypeResult } from '../bodyTypeTypes';
import { getBodyTypeInfo } from '../bodyTypeLogic';
import { CheckCircle, Star } from 'lucide-react';

interface BodyTypeTraitsProps {
  result: BodyTypeResult;
  locale: 'en' | 'tr';
}

const BodyTypeTraits: React.FC<BodyTypeTraitsProps> = ({ result, locale }) => {
  const typeInfo = getBodyTypeInfo(result.primaryType);

  const strengthsMap = {
    ectomorph: {
      en: ['Naturally lean physique', 'Fast metabolism', 'Excellent endurance potential', 'Good flexibility'],
      tr: ['Doğal ince fizik', 'Hızlı metabolizma', 'Mükemmel dayanıklılık potansiyeli', 'İyi esneklik'],
    },
    mesomorph: {
      en: ['Natural athleticism', 'Quick muscle response', 'Versatile body for many sports', 'Good recovery ability'],
      tr: ['Doğal atletizm', 'Hızlı kas yanıtı', 'Birçok spora uygun vücut', 'İyi toparlanma yeteneği'],
    },
    endomorph: {
      en: ['Natural strength and power', 'Good bone density', 'Excellent for power sports', 'Strong support structure'],
      tr: ['Doğal güç ve kuvvet', 'İyi kemik yoğunluğu', 'Güç sporları için mükemmel', 'Güçlü destek yapısı'],
    },
  };

  const challengesMap = {
    ectomorph: {
      en: ['Hard to gain weight and muscle', 'May fatigue quickly in strength activities', 'Risk of being underweight', 'Joint stress from low muscle support'],
      tr: ['Kilo ve kas almakta zorluk', 'Güç aktivitelerinde çabuk yorulabilir', 'Düşük kilolu olma riski', 'Düşük kas desteğinden eklem stresi'],
    },
    mesomorph: {
      en: ['Can gain fat if inactive', 'May overtrain due to quick results', 'Need consistent routine to maintain', 'Injury risk from overconfidence'],
      tr: ['Hareketsizse yağ alabilir', 'Hızlı sonuçlar nedeniyle aşırı antrenman yapabilir', 'Korumak için tutarlı rutin gerekir', 'Aşırı güvenden yaralanma riski'],
    },
    endomorph: {
      en: ['Easy to gain unwanted weight', 'Slower metabolism', 'Fat loss can be challenging', 'May need more cardio effort'],
      tr: ['İstenmeyen kilo almak kolay', 'Daha yavaş metabolizma', 'Yağ kaybı zor olabilir', 'Daha fazla kardiyoyu eforu gerekebilir'],
    },
  };

  const baseType = result.primaryType.includes('-')
    ? result.primaryType.split('-')[0] === 'ecto' ? 'ectomorph'
      : result.primaryType.split('-')[0] === 'meso' ? 'mesomorph'
      : 'endomorph'
    : result.primaryType;

  const strengths = strengthsMap[baseType as keyof typeof strengthsMap];
  const challenges = challengesMap[baseType as keyof typeof challengesMap];

  return (
    <Card className="border-2 border-neutral-200">
      <div className="mb-4 flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${typeInfo.gradient}`}>
          <span className="text-xl">{typeInfo.emoji}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Fiziksel Özellikleriniz' : 'Your Physical Traits'}
          </h3>
          <p className="text-sm text-neutral-600">
            {typeInfo.label[locale]}
          </p>
        </div>
      </div>

      {/* Traits List */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-neutral-800">
          {locale === 'tr' ? 'Temel Özellikler' : 'Key Characteristics'}
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {typeInfo.traits[locale].map((trait, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-neutral-50 p-3">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
              <span className="text-sm text-neutral-700">{trait}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths & Challenges */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-700">
            <Star className="h-4 w-4" />
            {locale === 'tr' ? 'Güçlü Yönleriniz' : 'Your Strengths'}
          </h4>
          <ul className="space-y-2">
            {strengths[locale].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-0.5 text-green-500">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-amber-700">
            <Star className="h-4 w-4" />
            {locale === 'tr' ? 'Dikkat Etmeniz Gerekenler' : 'Areas to Watch'}
          </h4>
          <ul className="space-y-2">
            {challenges[locale].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="mt-0.5 text-amber-500">!</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeTraits;
