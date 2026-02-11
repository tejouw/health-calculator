import { Card } from '@/components/ui';
import {
  Cigarette,
  Dumbbell,
  Apple,
  Moon,
  Brain,
  Wine,
  Scale,
  HeartPulse,
  Users,
  Activity,
  Coffee,
  Sun,
  Smile,
  Heart,
  Target,
  Monitor,
  Sparkles,
  BookOpen,
  Droplets,
  Sunrise,
} from 'lucide-react';
import type { AgingFactor } from '../biologicalAgeTypes';
import { biologicalAgeContent } from '../biologicalAgeContent';

interface AgingFactorsBreakdownProps {
  factors: AgingFactor[];
  locale: 'en' | 'tr';
}

const iconMap: Record<string, any> = {
  Cigarette,
  Dumbbell,
  Apple,
  Moon,
  Brain,
  Wine,
  Scale,
  HeartPulse,
  Users,
  Activity,
  Coffee,
  Sun,
  Smile,
  Heart,
  Target,
  Monitor,
  Sparkles,
  BookOpen,
  Droplets,
  Sunrise,
  // Fallbacks for icons that may not exist in lucide
  Fish: Droplets,
  Salad: Apple,
  Ban: Activity,
  CupSoda: Coffee,
  Candy: Sparkles,
  BalanceScale: Scale,
  TreePine: Sunrise,
  Wind: Activity,
  MonitorOff: Monitor,
  Clock: Activity,
};

export default function AgingFactorsBreakdown({ factors, locale }: AgingFactorsBreakdownProps) {
  const content = biologicalAgeContent[locale];

  const getFactorName = (factorName: string) => {
    const nameMap: Record<string, string> = {
      smoking: content.factorSmoking,
      exercise: content.factorExercise,
      diet: content.factorDiet,
      sleep: content.factorSleep,
      stress: content.factorStress,
      alcohol: content.factorAlcohol,
      bmi: content.factorBMI,
      conditions: content.factorConditions,
      genetics: content.factorGenetics,
      bloodPressure: content.factorBloodPressure,
      breakfast: content.factorBreakfast,
      fruitVegetable: content.factorFruitVegetable,
      processedFood: content.factorProcessedFood,
      omega3: content.factorOmega3,
      vitaminD: content.factorVitaminD,
      meditation: content.factorMeditation,
      social: content.factorSocial,
      purpose: content.factorPurpose,
      screenTime: content.factorScreenTime,
      sunlight: content.factorSunlight,
      dental: content.factorDental,
      mentalStimulation: content.factorMentalStimulation,
      workLifeBalance: content.factorWorkLifeBalance,
      caffeine: content.factorCaffeine,
      sugar: content.factorSugar,
      water: content.factorWater,
    };
    return nameMap[factorName] || factorName;
  };

  const getStatusLabel = (status: string) => {
    const statusMap: Record<string, string> = {
      excellent: locale === 'en' ? 'Excellent' : 'Mukemmel',
      good: locale === 'en' ? 'Good' : 'Iyi',
      fair: locale === 'en' ? 'Fair' : 'Orta',
      poor: locale === 'en' ? 'Poor' : 'Kotu',
    };
    return statusMap[status] || status;
  };

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold mb-6">{content.agingFactorsTitle}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {factors.map((factor, index) => {
          const Icon = iconMap[factor.icon] || Activity;

          return (
            <div
              key={index}
              className="p-4 border rounded-lg hover:shadow-md transition-shadow"
              style={{ borderColor: factor.color }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${factor.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: factor.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{getFactorName(factor.name)}</h4>
                    <p className="text-sm text-gray-500">{getStatusLabel(factor.status)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium" style={{ color: factor.color }}>
                    {factor.impact > 0 ? '+' : ''}
                    {factor.impact} {locale === 'en' ? 'yrs' : 'yil'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {locale === 'en' ? 'Impact' : 'Etki'}
                  </p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max(0, Math.min(100, factor.score))}%`,
                    backgroundColor: factor.color
                  }}
                />
              </div>

              {/* Tip */}
              <p className="text-xs text-gray-600 mt-2 italic">
                {factor.tip[locale]}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
