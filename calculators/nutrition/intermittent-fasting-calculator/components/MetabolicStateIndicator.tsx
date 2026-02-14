import React from 'react';
import { Card } from '@/components/ui';
import { Activity, Flame, Zap, Sparkles } from 'lucide-react';

interface MetabolicStateIndicatorProps {
  fastDuration: number;
  locale: 'en' | 'tr';
}

const MetabolicStateIndicator: React.FC<MetabolicStateIndicatorProps> = ({
  fastDuration,
  locale,
}) => {
  const getMetabolicState = () => {
    if (fastDuration < 8) {
      return {
        state: locale === 'tr' ? 'Glukoz Yakımı' : 'Glucose Burning',
        icon: <Activity className="h-8 w-8 text-blue-500" />,
        color: 'blue',
        description:
          locale === 'tr'
            ? 'Vücudunuz hala glukoz kullanıyor'
            : 'Your body is still using glucose',
        progress: 25,
        bgClass: 'from-blue-500 to-cyan-500',
      };
    } else if (fastDuration < 12) {
      return {
        state: locale === 'tr' ? 'Yağ Yakımı Başlıyor' : 'Fat Burning Begins',
        icon: <Flame className="h-8 w-8 text-orange-500" />,
        color: 'orange',
        description:
          locale === 'tr'
            ? 'Depolanmış yağları yakmaya başlıyorsunuz'
            : 'Starting to burn stored fat',
        progress: 50,
        bgClass: 'from-orange-500 to-amber-500',
      };
    } else if (fastDuration < 16) {
      return {
        state: locale === 'tr' ? 'Ketoz' : 'Ketosis',
        icon: <Zap className="h-8 w-8 text-yellow-500" />,
        color: 'yellow',
        description:
          locale === 'tr'
            ? 'Keton üretimi ve otofaji başlıyor'
            : 'Ketone production and autophagy beginning',
        progress: 75,
        bgClass: 'from-yellow-500 to-orange-500',
      };
    } else {
      return {
        state: locale === 'tr' ? 'Derin Otofaji' : 'Deep Autophagy',
        icon: <Sparkles className="h-8 w-8 text-purple-500" />,
        color: 'purple',
        description:
          locale === 'tr'
            ? 'Maksimum hücresel temizlik ve yenilenme'
            : 'Maximum cellular cleanup and renewal',
        progress: 100,
        bgClass: 'from-purple-500 to-pink-500',
      };
    }
  };

  const state = getMetabolicState();

  return (
    <Card className="overflow-hidden border-2 border-neutral-100">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-neutral-900">
          {locale === 'tr' ? '🔥 Metabolik Durum' : '🔥 Metabolic State'}
        </h3>
        <div className={`rounded-full bg-gradient-to-r ${state.bgClass} px-3 py-1`}>
          <span className="text-xs font-bold text-white">{fastDuration}h</span>
        </div>
      </div>

      {/* State card */}
      <div className={`mb-4 rounded-2xl bg-gradient-to-br ${state.bgClass} p-6 text-white shadow-lg`}>
        <div className="mb-4 flex items-center justify-between">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">{state.icon}</div>
          <div className="text-right">
            <div className="text-sm font-medium opacity-90">
              {locale === 'tr' ? 'Şu Anda' : 'Current State'}
            </div>
            <div className="text-2xl font-bold">{state.state}</div>
          </div>
        </div>
        <p className="text-sm opacity-90">{state.description}</p>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-neutral-600">
          <span>{locale === 'tr' ? 'İlerleme' : 'Progress'}</span>
          <span>{state.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
          <div
            className={`h-full bg-gradient-to-r ${state.bgClass} transition-all duration-500`}
            style={{ width: `${state.progress}%` }}
          />
        </div>
      </div>

      {/* Milestone markers */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-neutral-600">
          {locale === 'tr' ? '📍 Kilometre Taşları:' : '📍 Milestones:'}
        </p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className={`rounded-lg p-2 ${fastDuration >= 8 ? 'bg-green-50 text-green-700' : 'bg-neutral-50 text-neutral-400'}`}>
            <div className="font-semibold">8h</div>
            <div>{locale === 'tr' ? 'Yağ yakımı' : 'Fat burning'}</div>
          </div>
          <div className={`rounded-lg p-2 ${fastDuration >= 12 ? 'bg-green-50 text-green-700' : 'bg-neutral-50 text-neutral-400'}`}>
            <div className="font-semibold">12h</div>
            <div>{locale === 'tr' ? 'Otofaji başlar' : 'Autophagy starts'}</div>
          </div>
          <div className={`rounded-lg p-2 ${fastDuration >= 16 ? 'bg-green-50 text-green-700' : 'bg-neutral-50 text-neutral-400'}`}>
            <div className="font-semibold">16h</div>
            <div>{locale === 'tr' ? 'Derin ketoz' : 'Deep ketosis'}</div>
          </div>
          <div className={`rounded-lg p-2 ${fastDuration >= 20 ? 'bg-green-50 text-green-700' : 'bg-neutral-50 text-neutral-400'}`}>
            <div className="font-semibold">20h</div>
            <div>{locale === 'tr' ? 'Maksimum fayda' : 'Maximum benefit'}</div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MetabolicStateIndicator;
