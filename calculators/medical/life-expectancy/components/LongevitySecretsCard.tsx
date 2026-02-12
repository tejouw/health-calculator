'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Sparkles, MapPin } from 'lucide-react';

interface LongevitySecretsCardProps {
  locale: 'en' | 'tr';
}

const LongevitySecretsCard: React.FC<LongevitySecretsCardProps> = ({ locale }) => {
  const secrets = locale === 'tr' ? [
    {
      title: '🏝️ Okinawa Sırrı (Japonya)',
      description: '80% doygunluk kuralı: "Hara hachi bu" - midenizin %80\'i dolunca durun',
      stat: 'Ortalama yaşam: 84 yıl',
    },
    {
      title: '🌊 Ikaria Sırrı (Yunanistan)',
      description: 'Günlük siesta, omega-3 açısından zengin diyet ve güçlü topluluk bağları',
      stat: '90+ yaş nüfusu %30 daha fazla',
    },
    {
      title: '🏔️ Sardunya Sırrı (İtalya)',
      description: 'Dağlık arazide yürüyüş, aile merkezli yaşam ve günlük şarap',
      stat: '100 yaşında 10x daha fazla insan',
    },
    {
      title: '🌴 Nicoya Sırrı (Kosta Rika)',
      description: 'Plan de vida (yaşam amacı), güçlü fiziksel aktivite ve düşük stres',
      stat: '90 yaş üzeri erkekler %7 daha fazla',
    },
  ] : [
    {
      title: '🏝️ Okinawa Secret (Japan)',
      description: '80% fullness rule: "Hara hachi bu" - stop eating when stomach is 80% full',
      stat: 'Average lifespan: 84 years',
    },
    {
      title: '🌊 Ikaria Secret (Greece)',
      description: 'Daily siesta, omega-3 rich diet, and strong community bonds',
      stat: '30% more people reach 90+',
    },
    {
      title: '🏔️ Sardinia Secret (Italy)',
      description: 'Walking on hilly terrain, family-centered life, and daily wine',
      stat: '10x more centenarians',
    },
    {
      title: '🌴 Nicoya Secret (Costa Rica)',
      description: 'Plan de vida (life purpose), strong physical activity, and low stress',
      stat: '7% more men reach 90+',
    },
  ];

  return (
    <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Uzun Yaşam Sırları' : 'Longevity Secrets'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Blue Zones\'lardan öğrenilen dersler'
              : 'Lessons from Blue Zones'}
          </p>
        </div>
      </div>

      <div className="mb-4 rounded-xl bg-indigo-100 p-3">
        <p className="text-sm font-medium text-indigo-900">
          <MapPin className="mr-1 inline h-4 w-4" />
          {locale === 'tr'
            ? 'Blue Zones: Dünyada en uzun yaşayan insanların yaşadığı bölgeler'
            : 'Blue Zones: Regions where people live the longest in the world'}
        </p>
      </div>

      <div className="space-y-4">
        {secrets.map((secret, index) => (
          <div
            key={index}
            className="group rounded-xl border-2 border-transparent bg-white/80 p-4 transition-all hover:border-indigo-300 hover:shadow-lg"
          >
            <h4 className="mb-2 font-bold text-neutral-900">{secret.title}</h4>
            <p className="mb-2 text-sm leading-relaxed text-neutral-700">
              {secret.description}
            </p>
            <div className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              ✨ {secret.stat}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-purple-100 p-4">
        <p className="text-center text-sm font-semibold text-purple-900">
          💡 {locale === 'tr'
            ? 'Ortak nokta: Sağlıklı beslenme + Aktif yaşam + Güçlü ilişkiler + Yaşam amacı'
            : 'Common thread: Healthy diet + Active lifestyle + Strong relationships + Life purpose'}
        </p>
      </div>
    </Card>
  );
};

export default LongevitySecretsCard;
