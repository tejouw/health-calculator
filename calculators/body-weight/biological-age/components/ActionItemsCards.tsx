import { Card, Badge } from '@/components/ui';
import { ArrowUp, ArrowRight, ArrowDown, Zap, Target, CheckCircle2 } from 'lucide-react';
import type { ActionItem } from '../biologicalAgeTypes';
import { biologicalAgeContent } from '../biologicalAgeContent';

interface ActionItemsCardsProps {
  actions: ActionItem[];
  locale: 'en' | 'tr';
}

export default function ActionItemsCards({ actions, locale }: ActionItemsCardsProps) {
  const content = biologicalAgeContent[locale];

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'high':
        return <ArrowUp className="w-4 h-4" />;
      case 'medium':
        return <ArrowRight className="w-4 h-4" />;
      case 'low':
        return <ArrowDown className="w-4 h-4" />;
      default:
        return <Target className="w-4 h-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'challenging':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImpactLabel = (impact: string) => {
    const impactMap: Record<string, string> = {
      high: content.impactHigh,
      medium: content.impactMedium,
      low: content.impactLow,
    };
    return impactMap[impact] || impact;
  };

  const getDifficultyLabel = (difficulty: string) => {
    const difficultyMap: Record<string, string> = {
      easy: content.difficultyEasy,
      moderate: content.difficultyModerate,
      challenging: content.difficultyChallenging,
    };
    return difficultyMap[difficulty] || difficulty;
  };

  if (actions.length === 0) {
    return null;
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="w-6 h-6 text-orange-500" />
        <h3 className="text-2xl font-bold">{content.topActionsTitle}</h3>
      </div>

      <div className="space-y-4">
        {actions.map((action, index) => (
          <div
            key={index}
            className="p-6 border-2 border-gray-200 rounded-lg hover:shadow-lg transition-all hover:border-blue-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold">
                    {action.priority}
                  </div>
                  <h4 className="text-lg font-semibold">{action.title[locale]}</h4>
                </div>
                <p className="text-gray-600 ml-11">{action.description[locale]}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 ml-11">
              <Badge className={`${getImpactColor(action.impact)} flex items-center gap-1`}>
                {getImpactIcon(action.impact)}
                {getImpactLabel(action.impact)}
              </Badge>
              <Badge className={getDifficultyColor(action.difficulty)}>
                {getDifficultyLabel(action.difficulty)}
              </Badge>
            </div>
          </div>
        ))}
      </div>

      {/* Motivation Message */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            {locale === 'en'
              ? 'These are your highest-impact improvements. Focus on one at a time for best results. Each positive change builds momentum for the next!'
              : 'Bunlar en yuksek etkili iyilestirmelerinizdir. En iyi sonuclar icin bir seferde birine odaklanin. Her pozitif degisiklik bir sonraki icin momentum yaratir!'}
          </p>
        </div>
      </div>
    </Card>
  );
}
