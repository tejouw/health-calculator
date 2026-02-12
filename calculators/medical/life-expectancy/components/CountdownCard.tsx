'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Clock, Calendar, Timer } from 'lucide-react';

interface CountdownCardProps {
  yearsRemaining: number;
  monthsRemaining: number;
  daysRemaining: number;
  locale: 'en' | 'tr';
}

const CountdownCard: React.FC<CountdownCardProps> = ({
  yearsRemaining,
  monthsRemaining,
  daysRemaining,
  locale,
}) => {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
          <Clock className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">
          {locale === 'tr' ? 'Kalan Süre' : 'Time Remaining'}
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Years */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-black text-purple-700">
            {yearsRemaining}
          </div>
          <p className="text-xs font-medium uppercase text-neutral-600">
            {locale === 'tr' ? 'Yıl' : 'Years'}
          </p>
        </div>

        {/* Months */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <Calendar className="h-5 w-5 text-pink-600" />
          </div>
          <div className="text-3xl font-black text-pink-700">
            {monthsRemaining}
          </div>
          <p className="text-xs font-medium uppercase text-neutral-600">
            {locale === 'tr' ? 'Ay' : 'Months'}
          </p>
        </div>

        {/* Days */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center">
            <Timer className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-3xl font-black text-purple-700">
            {daysRemaining}
          </div>
          <p className="text-xs font-medium uppercase text-neutral-600">
            {locale === 'tr' ? 'Gün' : 'Days'}
          </p>
        </div>
      </div>

      <p className="mt-4 text-center text-xs italic text-neutral-500">
        {locale === 'tr'
          ? 'Her gün değerlidir - onu en iyi şekilde kullanın!'
          : 'Every day counts - make the most of it!'}
      </p>
    </Card>
  );
};

export default CountdownCard;
