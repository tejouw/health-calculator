'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Target, CheckCircle2 } from 'lucide-react';

interface QuickWinsCardProps {
  locale: 'en' | 'tr';
}

const QuickWinsCard: React.FC<QuickWinsCardProps> = ({ locale }) => {
  const wins = locale === 'tr' ? [
    {
      action: 'Günlük 7,000-10,000 adım at',
      benefit: '+3-5 yıl',
      difficulty: 'Kolay',
      time: 'Hemen başla',
    },
    {
      action: 'Her gece 7-9 saat uyu',
      benefit: '+3 yıl',
      difficulty: 'Orta',
      time: 'Bu gece',
    },
    {
      action: 'Sigara içiyorsan bırak',
      benefit: '+8-12 yıl',
      difficulty: 'Zor',
      time: 'Bugün karar ver',
    },
    {
      action: 'Haftada 150dk egzersiz yap',
      benefit: '+5 yıl',
      difficulty: 'Orta',
      time: 'Bu hafta',
    },
    {
      action: 'Sebze/meyve tüketimini 2x artır',
      benefit: '+2-4 yıl',
      difficulty: 'Kolay',
      time: 'Bugünkü öğün',
    },
    {
      action: 'Sosyal bağları güçlendir',
      benefit: '+5 yıl',
      difficulty: 'Kolay',
      time: 'Bu hafta sonu',
    },
    {
      action: 'Stres yönetimi öğren (meditasyon)',
      benefit: '+3 yıl',
      difficulty: 'Orta',
      time: '10dk/gün',
    },
    {
      action: 'Alkol tüketimini sınırla (1/gün)',
      benefit: '+2 yıl',
      difficulty: 'Orta',
      time: 'Bugün',
    },
  ] : [
    {
      action: 'Walk 7,000-10,000 steps daily',
      benefit: '+3-5 years',
      difficulty: 'Easy',
      time: 'Start now',
    },
    {
      action: 'Sleep 7-9 hours every night',
      benefit: '+3 years',
      difficulty: 'Medium',
      time: 'Tonight',
    },
    {
      action: 'Quit smoking if you smoke',
      benefit: '+8-12 years',
      difficulty: 'Hard',
      time: 'Decide today',
    },
    {
      action: 'Exercise 150min per week',
      benefit: '+5 years',
      difficulty: 'Medium',
      time: 'This week',
    },
    {
      action: 'Double veggie/fruit intake',
      benefit: '+2-4 years',
      difficulty: 'Easy',
      time: 'Today\'s meal',
    },
    {
      action: 'Strengthen social bonds',
      benefit: '+5 years',
      difficulty: 'Easy',
      time: 'This weekend',
    },
    {
      action: 'Learn stress management (meditation)',
      benefit: '+3 years',
      difficulty: 'Medium',
      time: '10min/day',
    },
    {
      action: 'Limit alcohol (1 drink/day)',
      benefit: '+2 years',
      difficulty: 'Medium',
      time: 'Today',
    },
  ];

  const difficultyColor = (difficulty: string) => {
    if (difficulty === 'Easy' || difficulty === 'Kolay') return 'bg-green-100 text-green-700';
    if (difficulty === 'Medium' || difficulty === 'Orta') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
          <Target className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Hemen Başlayabileceğin Değişiklikler' : 'Quick Wins You Can Start Now'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Kanıtlanmış etkili adımlar'
              : 'Proven impactful actions'}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {wins.map((win, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl border-2 border-orange-200 bg-white/80 p-4 transition-all hover:border-orange-400 hover:shadow-lg"
          >
            <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600">
              {index + 1}
            </div>

            <div className="pr-8">
              <div className="mb-2 flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                <p className="font-semibold leading-snug text-neutral-900">{win.action}</p>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl font-black text-orange-600">{win.benefit}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${difficultyColor(win.difficulty)}`}>
                  {win.difficulty}
                </span>
                <span className="text-xs text-neutral-500">⏱️ {win.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 p-4">
        <p className="text-center text-sm font-semibold text-orange-900">
          🎯 {locale === 'tr'
            ? 'İPUCU: Hepsini birden değil, 1-2 tanesinden başla ve alışkanlık haline getir!'
            : 'TIP: Don\'t do all at once - start with 1-2 and build habits!'}
        </p>
      </div>
    </Card>
  );
};

export default QuickWinsCard;
