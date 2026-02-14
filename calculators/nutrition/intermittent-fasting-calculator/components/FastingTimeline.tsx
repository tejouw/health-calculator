import React from 'react';
import { Card } from '@/components/ui';
import { FastingTimeline as Timeline } from '../fastingTypes';
import { Clock, Zap, Flame, Sparkles, TrendingUp } from 'lucide-react';

interface FastingTimelineProps {
  timeline: Timeline[];
  locale: 'en' | 'tr';
}

const FastingTimeline: React.FC<FastingTimelineProps> = ({ timeline, locale }) => {
  const getIcon = (hour: number) => {
    if (hour === 0) return <Clock className="h-6 w-6 text-blue-500" />;
    if (hour === 4) return <Zap className="h-6 w-6 text-yellow-500" />;
    if (hour === 8) return <Flame className="h-6 w-6 text-orange-500" />;
    if (hour === 12) return <Sparkles className="h-6 w-6 text-purple-500" />;
    if (hour >= 16) return <TrendingUp className="h-6 w-6 text-pink-500" />;
    return <Clock className="h-6 w-6 text-gray-500" />;
  };

  const getColorClass = (hour: number) => {
    if (hour === 0) return 'from-blue-50 to-blue-100 border-blue-200';
    if (hour === 4) return 'from-yellow-50 to-yellow-100 border-yellow-200';
    if (hour === 8) return 'from-orange-50 to-orange-100 border-orange-200';
    if (hour === 12) return 'from-purple-50 to-purple-100 border-purple-200';
    if (hour >= 16) return 'from-pink-50 to-pink-100 border-pink-200';
    return 'from-gray-50 to-gray-100 border-gray-200';
  };

  return (
    <Card className="overflow-hidden">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
          <TrendingUp className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '⏱️ Oruç Zaman Çizelgesi' : '⏱️ Fasting Timeline'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Vücudunuzda saat saat neler oluyor'
              : 'Hour-by-hour metabolic changes in your body'}
          </p>
        </div>
      </div>

      <div className="relative space-y-4">
        {/* Timeline line */}
        <div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200" />

        {timeline.map((item, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Hour marker */}
            <div className="flex flex-shrink-0 flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-white shadow-md">
                {getIcon(item.hour)}
              </div>
              <span className="mt-2 text-xs font-semibold text-neutral-600">
                {item.hour}h
              </span>
            </div>

            {/* Content card */}
            <div className={`flex-1 rounded-xl border-2 bg-gradient-to-br p-4 ${getColorClass(item.hour)}`}>
              <h4 className="mb-2 text-lg font-bold text-neutral-900">{item.state}</h4>
              <p className="mb-3 text-sm text-neutral-700">{item.description[locale]}</p>

              {/* Benefits */}
              <div className="space-y-1">
                <p className="text-xs font-semibold text-neutral-600">
                  {locale === 'tr' ? '✨ Faydalar:' : '✨ Benefits:'}
                </p>
                {item.benefits[locale].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="mt-0.5 text-green-600">✓</span>
                    <span className="text-xs text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info footer */}
      <div className="mt-6 rounded-lg bg-blue-50 p-4">
        <p className="text-sm text-blue-900">
          <strong>💡 {locale === 'tr' ? 'İpucu:' : 'Tip:'}</strong>{' '}
          {locale === 'tr'
            ? 'Bu evreler vücudunuzun oruç süresine verdiği yanıttır. Herkes farklı hızda adapte olur, bu yüzden vücudunuzu dinleyin.'
            : 'These phases represent your body\'s response to fasting duration. Everyone adapts at different rates, so listen to your body.'}
        </p>
      </div>
    </Card>
  );
};

export default FastingTimeline;
