import React from 'react';
import { Card } from '@/components/ui';
import { FoodSuggestion } from '../fastingTypes';
import { UtensilsCrossed, Coffee, Apple, AlertCircle } from 'lucide-react';

interface FoodSuggestionsProps {
  suggestions: FoodSuggestion[];
  locale: 'en' | 'tr';
}

const FoodSuggestions: React.FC<FoodSuggestionsProps> = ({ suggestions, locale }) => {
  const getTimingIcon = (timing: string) => {
    if (timing === 'pre-fast') return <Coffee className="h-6 w-6 text-purple-500" />;
    if (timing === 'break-fast') return <Apple className="h-6 w-6 text-green-500" />;
    return <UtensilsCrossed className="h-6 w-6 text-blue-500" />;
  };

  const getTimingColor = (timing: string) => {
    if (timing === 'pre-fast') return { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200' };
    if (timing === 'break-fast') return { bg: 'from-green-50 to-emerald-50', border: 'border-green-200' };
    return { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200' };
  };

  const getTimingLabel = (timing: string) => {
    if (timing === 'pre-fast') {
      return locale === 'tr' ? '🌙 Oruç Öncesi Son Öğün' : '🌙 Last Meal Before Fast';
    }
    if (timing === 'break-fast') {
      return locale === 'tr' ? '☀️ Orucu Açarken' : '☀️ Breaking Your Fast';
    }
    return locale === 'tr' ? '🍽️ Yemek Penceresi İçinde' : '🍽️ During Eating Window';
  };

  if (suggestions.length === 0) return null;

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
          <UtensilsCrossed className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '🍽️ Yemek Önerileri' : '🍽️ Food Suggestions'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Ne zaman, ne yemeli ve nelerden kaçınmalı'
              : 'What to eat, when, and what to avoid'}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {suggestions.map((suggestion, index) => {
          const colors = getTimingColor(suggestion.timing);

          return (
            <div
              key={index}
              className={`rounded-xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} p-5`}
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                {getTimingIcon(suggestion.timing)}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-neutral-900">
                    {getTimingLabel(suggestion.timing)}
                  </h4>
                  <p className="text-sm text-neutral-600">{suggestion.time}</p>
                </div>
              </div>

              {/* Recommended Foods */}
              <div className="mb-4 rounded-lg bg-white p-4">
                <h5 className="mb-2 flex items-center gap-2 font-semibold text-green-700">
                  <span>✅</span>
                  <span>{locale === 'tr' ? 'Önerilen Gıdalar:' : 'Recommended Foods:'}</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {suggestion.foods[locale].map((food, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>

              {/* Foods to Avoid */}
              <div className="mb-4 rounded-lg bg-white p-4">
                <h5 className="mb-2 flex items-center gap-2 font-semibold text-red-700">
                  <span>❌</span>
                  <span>{locale === 'tr' ? 'Kaçınılması Gerekenler:' : 'Avoid:'}</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {suggestion.avoid[locale].map((food, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
                    >
                      {food}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rationale */}
              <div className="flex items-start gap-2 rounded-lg bg-white p-3">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500" />
                <p className="text-sm text-neutral-700">
                  <strong className="text-neutral-900">
                    {locale === 'tr' ? 'Neden?' : 'Why?'}
                  </strong>{' '}
                  {suggestion.rationale[locale]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Hydration reminder */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💧</span>
          <div>
            <h5 className="mb-1 font-semibold text-blue-900">
              {locale === 'tr' ? 'Hidrasyon Hatırlatması' : 'Hydration Reminder'}
            </h5>
            <p className="text-sm text-blue-800">
              {locale === 'tr'
                ? 'Oruç dönemlerinde bol su, siyah kahve veya şekersiz çay için. Günde en az 2-3 litre sıvı tüketmeyi hedefleyin.'
                : 'Drink plenty of water, black coffee, or unsweetened tea during fasting periods. Aim for at least 2-3 liters of fluids per day.'}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FoodSuggestions;
