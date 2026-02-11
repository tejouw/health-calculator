import { Card, Badge } from '@/components/ui';
import { TrendingDown, TrendingUp, Minus, Trophy, Award } from 'lucide-react';
import type { BiologicalAgeResult } from '../biologicalAgeTypes';
import { biologicalAgeContent } from '../biologicalAgeContent';

interface ResultCardProps {
  result: BiologicalAgeResult;
  locale: 'en' | 'tr';
}

export default function ResultCard({ result, locale }: ResultCardProps) {
  const content = biologicalAgeContent[locale];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exceptional':
        return 'from-green-500 to-emerald-600';
      case 'younger':
        return 'from-blue-500 to-cyan-600';
      case 'chronological':
        return 'from-yellow-500 to-orange-500';
      case 'older':
        return 'from-orange-500 to-red-500';
      case 'accelerated':
        return 'from-red-500 to-rose-700';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getIcon = () => {
    if (result.category === 'exceptional') return <Trophy className="w-12 h-12 text-white" />;
    if (result.category === 'younger') return <Award className="w-12 h-12 text-white" />;
    if (result.ageDifference > 0) return <TrendingDown className="w-12 h-12 text-white" />;
    if (result.ageDifference < 0) return <TrendingUp className="w-12 h-12 text-white" />;
    return <Minus className="w-12 h-12 text-white" />;
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'exceptional':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'younger':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'chronological':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'older':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'accelerated':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className={`p-8 bg-gradient-to-br ${getCategoryColor(result.category)} text-white shadow-xl`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Icon */}
        <div className="flex-shrink-0">{getIcon()}</div>

        {/* Main Result */}
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-2xl font-bold mb-2">{content.biologicalAgeLabel}</h2>
          <div className="flex items-baseline justify-center md:justify-start gap-3">
            <span className="text-6xl font-bold">{result.biologicalAge}</span>
            <span className="text-3xl opacity-90">{locale === 'en' ? 'years' : 'yas'}</span>
          </div>

          {/* Age Difference */}
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2">
            <span className="text-xl opacity-90">
              {result.ageDifference > 0 ? (
                <>
                  <TrendingDown className="w-5 h-5 inline mr-1" />
                  {Math.abs(result.ageDifference)} {content.yearsYounger}
                </>
              ) : result.ageDifference < 0 ? (
                <>
                  <TrendingUp className="w-5 h-5 inline mr-1" />
                  {Math.abs(result.ageDifference)} {content.yearsOlder}
                </>
              ) : (
                <>
                  <Minus className="w-5 h-5 inline mr-1" />
                  {locale === 'en' ? 'Same as chronological age' : 'Kronolojik yasla ayni'}
                </>
              )}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 min-w-[200px]">
          <div>
            <p className="text-sm opacity-80 mb-1">{content.chronologicalAgeResult}</p>
            <p className="text-3xl font-bold">{result.chronologicalAge}</p>
          </div>
          <div>
            <p className="text-sm opacity-80 mb-1">{content.percentileLabel}</p>
            <p className="text-3xl font-bold">{result.percentile}%</p>
            <p className="text-xs opacity-70">{content.ofPeople}</p>
          </div>
        </div>
      </div>

      {/* Category Badge and Interpretation */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <Badge className={`${getCategoryBadgeColor(result.category)} text-sm px-3 py-1`}>
            {result.categoryLabel[locale]}
          </Badge>
        </div>
        <p className="text-lg opacity-90">{result.interpretation[locale]}</p>
      </div>
    </Card>
  );
}
