'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Moon, Sun, Utensils, Coffee } from 'lucide-react';
import { FastingWindow, FastingProtocol } from '../fastingTypes';
import { isWeeklyProtocol } from '../fastingLogic';

interface FastingScheduleVisualProps {
  window: FastingWindow;
  protocol: FastingProtocol;
  locale: 'en' | 'tr';
}

const FastingScheduleVisual: React.FC<FastingScheduleVisualProps> = ({
  window,
  protocol,
  locale,
}) => {
  if (isWeeklyProtocol(protocol)) {
    // Weekly protocol visualization
    return (
      <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <h3 className="mb-4 text-lg font-bold text-blue-900">
          {locale === 'tr' ? '📅 Haftalık Program' : '📅 Weekly Schedule'}
        </h3>
        <div className="grid gap-2">
          {protocol === '5:2' ? (
            <>
              <div className="flex items-center justify-between rounded-lg bg-green-100 p-3">
                <span className="font-medium text-green-900">
                  {locale === 'tr'
                    ? 'Pazartesi - Cuma (5 gün)'
                    : 'Monday - Friday (5 days)'}
                </span>
                <span className="text-sm text-green-700">
                  {locale === 'tr' ? 'Normal beslenme' : 'Normal eating'}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-orange-100 p-3">
                <span className="font-medium text-orange-900">
                  {locale === 'tr' ? 'Cumartesi, Pazar (2 gün)' : 'Saturday, Sunday (2 days)'}
                </span>
                <span className="text-sm text-orange-700">500-600 cal</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between rounded-lg bg-green-100 p-3">
                <span className="font-medium text-green-900">
                  {locale === 'tr' ? 'Pazartesi, Çarşamba, Cuma' : 'Monday, Wednesday, Friday'}
                </span>
                <span className="text-sm text-green-700">
                  {locale === 'tr' ? 'Normal beslenme' : 'Normal eating'}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-orange-100 p-3">
                <span className="font-medium text-orange-900">
                  {locale === 'tr' ? 'Salı, Perşembe, Cumartesi, Pazar' : 'Tuesday, Thursday, Saturday, Sunday'}
                </span>
                <span className="text-sm text-orange-700">500 cal</span>
              </div>
            </>
          )}
        </div>
      </Card>
    );
  }

  // Daily protocol visualization
  return (
    <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
      <h3 className="mb-4 text-lg font-bold text-green-900">
        {locale === 'tr' ? '🕐 Günlük Program' : '🕐 Daily Schedule'}
      </h3>

      <div className="space-y-3">
        {/* Eating Window */}
        <div className="rounded-lg border-2 border-green-300 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Utensils className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-900">
              {locale === 'tr' ? 'Yemek Penceresi' : 'Eating Window'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Başlangıç' : 'Start'}
              </div>
              <div className="text-2xl font-bold text-green-600">{window.eatStart}</div>
            </div>
            <div className="text-neutral-400">→</div>
            <div className="text-center">
              <div className="text-sm text-neutral-600">{locale === 'tr' ? 'Bitiş' : 'End'}</div>
              <div className="text-2xl font-bold text-green-600">{window.eatEnd}</div>
            </div>
          </div>
          <div className="mt-2 text-center text-sm text-green-700">
            {window.eatDuration} {locale === 'tr' ? 'saat' : 'hours'}
          </div>
        </div>

        {/* Fasting Window */}
        <div className="rounded-lg border-2 border-purple-300 bg-white p-4">
          <div className="mb-2 flex items-center gap-2">
            <Coffee className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-purple-900">
              {locale === 'tr' ? 'Oruç Penceresi' : 'Fasting Window'}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Başlangıç' : 'Start'}
              </div>
              <div className="text-2xl font-bold text-purple-600">{window.fastStart}</div>
            </div>
            <div className="text-neutral-400">→</div>
            <div className="text-center">
              <div className="text-sm text-neutral-600">{locale === 'tr' ? 'Bitiş' : 'End'}</div>
              <div className="text-2xl font-bold text-purple-600">{window.fastEnd}</div>
            </div>
          </div>
          <div className="mt-2 text-center text-sm text-purple-700">
            {window.fastDuration} {locale === 'tr' ? 'saat' : 'hours'}
          </div>
        </div>

        {/* Sleep overlap hint */}
        <div className="flex items-center gap-2 rounded-lg bg-indigo-50 p-3">
          <Moon className="h-4 w-4 text-indigo-600" />
          <p className="text-sm text-indigo-900">
            {locale === 'tr'
              ? 'Uyku saatleriniz oruç sürenize dahildir, bu da orucun daha kolay olmasını sağlar!'
              : 'Your sleep hours are included in the fasting period, making it easier!'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FastingScheduleVisual;
