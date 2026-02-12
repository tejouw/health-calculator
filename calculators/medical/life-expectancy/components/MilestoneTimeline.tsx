'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { MapPin, Milestone } from 'lucide-react';

interface MilestoneTimelineProps {
  milestones: Array<{
    age: number;
    description: string;
    icon: string;
  }>;
  currentAge: number;
  locale: 'en' | 'tr';
}

const MilestoneTimeline: React.FC<MilestoneTimelineProps> = ({
  milestones,
  currentAge,
  locale,
}) => {
  if (milestones.length === 0) {
    return null;
  }

  return (
    <Card className="bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
          <Milestone className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? 'Yaşam Dönüm Noktaları' : 'Life Milestones Ahead'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr' ? 'Önünüzdeki yolculuk' : 'Your journey ahead'}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {milestones.map((milestone, index) => {
          const yearsUntil = milestone.age - currentAge;
          const isLast = index === milestones.length - 1;

          return (
            <div key={index} className="relative">
              {!isLast && (
                <div className="absolute left-6 top-12 h-full w-0.5 bg-gradient-to-b from-amber-300 to-transparent" />
              )}

              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-400 text-xl shadow-md">
                  {milestone.icon}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl bg-white/60 p-4">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-amber-700">
                      {milestone.age}
                    </span>
                    <span className="text-xs font-medium text-neutral-600">
                      {locale === 'tr' ? 'yaş' : 'years old'}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-neutral-800">
                    {milestone.description}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {yearsUntil > 0 ? (
                      <>
                        {locale === 'tr' ? (
                          <>
                            <MapPin className="mr-1 inline h-3 w-3" />
                            {yearsUntil} yıl sonra
                          </>
                        ) : (
                          <>
                            <MapPin className="mr-1 inline h-3 w-3" />
                            In {yearsUntil} years
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {locale === 'tr' ? '🏁 Hedef yaş' : '🏁 Target age'}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs italic text-neutral-500">
        {locale === 'tr'
          ? 'Sağlıklı yaşam seçimleriyle bu dönüm noktalarını kutlayın'
          : 'Celebrate these milestones with healthy lifestyle choices'}
      </p>
    </Card>
  );
};

export default MilestoneTimeline;
