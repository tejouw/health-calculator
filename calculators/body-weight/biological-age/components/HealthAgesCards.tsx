import { Card } from '@/components/ui';
import { Heart, Zap, Bone, Brain as BrainIcon } from 'lucide-react';
import type { BiologicalAgeResult } from '../biologicalAgeTypes';
import { biologicalAgeContent } from '../biologicalAgeContent';

interface HealthAgesCardsProps {
  result: BiologicalAgeResult;
  locale: 'en' | 'tr';
}

export default function HealthAgesCards({ result, locale }: HealthAgesCardsProps) {
  const content = biologicalAgeContent[locale];

  const healthSystems = [
    {
      name: content.cardiovascularLabel,
      age: result.cardiovascularAge,
      icon: Heart,
      color: '#ef4444',
      bgColor: '#fee2e2',
    },
    {
      name: content.metabolicLabel,
      age: result.metabolicAge,
      icon: Zap,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
    {
      name: content.skeletalLabel,
      age: result.skeletalAge,
      icon: Bone,
      color: '#8b5cf6',
      bgColor: '#ede9fe',
    },
    {
      name: content.cognitiveLabel,
      age: result.cognitiveAge,
      icon: BrainIcon,
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
  ];

  const getAgeDifference = (systemAge: number) => {
    const diff = result.chronologicalAge - systemAge;
    if (Math.abs(diff) < 2) return null;
    return diff;
  };

  const yearsLabel = locale === 'en' ? 'years' : 'yas';
  const yrsYoungerLabel = locale === 'en' ? 'yrs younger' : 'yil genc';
  const yrsOlderLabel = locale === 'en' ? 'yrs older' : 'yil yasli';

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">{content.healthSystemsTitle}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthSystems.map((system, index) => {
          const Icon = system.icon;
          const ageDiff = getAgeDifference(system.age);

          return (
            <div
              key={index}
              className="p-6 rounded-lg border-2 hover:shadow-lg transition-shadow"
              style={{ borderColor: system.color, backgroundColor: system.bgColor }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="p-4 rounded-full mb-4"
                  style={{ backgroundColor: 'white' }}
                >
                  <Icon className="w-8 h-8" style={{ color: system.color }} />
                </div>

                <h4 className="font-semibold mb-2" style={{ color: system.color }}>
                  {system.name}
                </h4>

                <div className="text-4xl font-bold mb-2" style={{ color: system.color }}>
                  {system.age}
                </div>

                <p className="text-sm text-gray-600">{yearsLabel}</p>

                {ageDiff !== null && (
                  <div className="mt-3 px-3 py-1 bg-white rounded-full text-sm font-medium" style={{ color: system.color }}>
                    {ageDiff > 0 ? (
                      <>{ageDiff} {yrsYoungerLabel}</>
                    ) : (
                      <>{Math.abs(ageDiff)} {yrsOlderLabel}</>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
