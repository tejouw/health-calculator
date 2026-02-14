import React from 'react';
import { Card, Badge } from '@/components/ui';
import { PersonalizedInsight } from '../fastingTypes';
import { Lightbulb } from 'lucide-react';

interface PersonalizedInsightsProps {
  insights: PersonalizedInsight[];
  locale: 'en' | 'tr';
}

const PersonalizedInsights: React.FC<PersonalizedInsightsProps> = ({ insights, locale }) => {
  const getVariantFromType = (type: string) => {
    switch (type) {
      case 'success':
        return 'success' as const;
      case 'warning':
        return 'warning' as const;
      case 'danger':
        return 'danger' as const;
      case 'info':
      default:
        return 'primary' as const;
    }
  };

  const getBorderColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-200 bg-green-50';
      case 'warning':
        return 'border-yellow-200 bg-yellow-50';
      case 'danger':
        return 'border-red-200 bg-red-50';
      case 'info':
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  if (insights.length === 0) return null;

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '💡 Kişiselleştirilmiş İçgörüler' : '💡 Personalized Insights'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Profilinize özel ipuçları ve öneriler'
              : 'Tips and recommendations tailored to your profile'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`rounded-xl border-2 p-4 transition-all hover:shadow-md ${getBorderColor(insight.type)}`}
          >
            {/* Header */}
            <div className="mb-3 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{insight.icon}</span>
                <h4 className="font-bold text-neutral-900">{insight.title[locale]}</h4>
              </div>
              <Badge variant={getVariantFromType(insight.type)} size="sm">
                {insight.type === 'success' && (locale === 'tr' ? 'Harika' : 'Great')}
                {insight.type === 'warning' && (locale === 'tr' ? 'Dikkat' : 'Caution')}
                {insight.type === 'danger' && (locale === 'tr' ? 'Önemli' : 'Important')}
                {insight.type === 'info' && (locale === 'tr' ? 'Bilgi' : 'Info')}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-sm text-neutral-700">{insight.description[locale]}</p>
          </div>
        ))}
      </div>

      {/* Summary footer */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-4">
        <p className="text-sm text-indigo-900">
          <strong>✨ {locale === 'tr' ? 'Unutmayın:' : 'Remember:'}</strong>{' '}
          {locale === 'tr'
            ? 'Bu öneriler yaş, cinsiyet, hedefleriniz ve aktivite seviyenize göre kişiselleştirilmiştir. Vücudunuzu dinlemeyi ve gerektiğinde ayarlamalar yapmayı unutmayın.'
            : 'These insights are personalized based on your age, gender, goals, and activity level. Remember to listen to your body and adjust as needed.'}
        </p>
      </div>
    </Card>
  );
};

export default PersonalizedInsights;
