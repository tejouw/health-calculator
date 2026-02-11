import { Card } from '@/components/ui';
import { Calendar, Target, TrendingUp } from 'lucide-react';
import type { BiologicalAgeResult } from '../biologicalAgeTypes';
import { biologicalAgeUIContent } from '../biologicalAgeContent';

interface LifeExpectancySectionProps {
  result: BiologicalAgeResult;
  locale: 'en' | 'tr';
}

export default function LifeExpectancySection({ result, locale }: LifeExpectancySectionProps) {
  const content = biologicalAgeUIContent[locale];
  const yearsLabel = locale === 'en' ? 'years' : 'yil';
  const currentAgeLabel = locale === 'en' ? 'Current Age' : 'Mevcut Yas';
  const potentialLabel = locale === 'en' ? 'Potential Lifespan' : 'Potansiyel Yasam Suresi';
  const estimatedLabel = locale === 'en' ? 'Estimated' : 'Tahmini';
  const optimalLabel = 'Optimal';

  const expectancyData = [
    {
      label: content.currentExpectancy,
      value: result.estimatedLifeExpectancy,
      icon: Calendar,
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
    {
      label: content.optimalExpectancy,
      value: result.optimalLifeExpectancy,
      icon: Target,
      color: '#10b981',
      bgColor: '#d1fae5',
    },
    {
      label: content.potentialGain,
      value: result.potentialYearsGained,
      icon: TrendingUp,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
  ];

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">{content.lifeExpectancyTitle}</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {expectancyData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="p-6 rounded-lg border-2"
              style={{ borderColor: item.color, backgroundColor: item.bgColor }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="font-semibold text-gray-700">{item.label}</h4>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold" style={{ color: item.color }}>
                  {item.value}
                </span>
                <span className="text-xl text-gray-600">{yearsLabel}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Progress Bar */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">{currentAgeLabel}</span>
          <span className="text-sm font-medium text-gray-700">{potentialLabel}</span>
        </div>

        <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all"
            style={{
              width: `${(result.chronologicalAge / result.optimalLifeExpectancy) * 100}%`,
            }}
          />
          <div
            className="absolute h-full border-r-4 border-orange-500"
            style={{
              left: `${(result.estimatedLifeExpectancy / result.optimalLifeExpectancy) * 100}%`,
            }}
          />
        </div>

        <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
          <span>{result.chronologicalAge}</span>
          <span className="text-orange-600 font-medium">
            {estimatedLabel}: {result.estimatedLifeExpectancy}
          </span>
          <span className="text-green-600 font-medium">
            {optimalLabel}: {result.optimalLifeExpectancy}
          </span>
        </div>
      </div>
    </Card>
  );
}
