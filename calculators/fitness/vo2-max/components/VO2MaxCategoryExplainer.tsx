'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { VO2MaxCategory } from '../vo2MaxTypes';
import { categoryInfo } from '../vo2MaxLogic';
import { Info, AlertCircle, CheckCircle, Trophy } from 'lucide-react';

interface VO2MaxCategoryExplainerProps {
  vo2Max: number;
  category: VO2MaxCategory;
  locale: 'en' | 'tr';
}

const VO2MaxCategoryExplainer: React.FC<VO2MaxCategoryExplainerProps> = ({
  vo2Max,
  category,
  locale,
}) => {
  const catInfo = categoryInfo[category];

  const getCategoryIcon = () => {
    switch (category) {
      case 'very_poor':
      case 'poor':
        return <AlertCircle className="h-6 w-6 text-white" />;
      case 'fair':
        return <Info className="h-6 w-6 text-white" />;
      case 'good':
        return <CheckCircle className="h-6 w-6 text-white" />;
      case 'excellent':
      case 'superior':
        return <Trophy className="h-6 w-6 text-white" />;
      default:
        return <Info className="h-6 w-6 text-white" />;
    }
  };

  const getRecommendations = () => {
    if (locale === 'tr') {
      switch (category) {
        case 'very_poor':
        case 'poor':
          return [
            'Doktorunuza danışın ve tıbbi kontrol yaptırın',
            'Yürüyüş gibi düşük yoğunluklu aktivitelerle başlayın',
            'Haftada 5 gün, 20-30 dakika hafif egzersiz yapın',
            'Kademeli olarak yoğunluğu artırın',
          ];
        case 'fair':
          return [
            'Haftada 3-4 kez orta yoğunlukta aerobik egzersiz',
            'Koşu, bisiklet veya yüzme gibi aktivitelere başlayın',
            'İnterval antrenman eklemeyi düşünün',
            'Tutarlılık en önemli faktördür',
          ];
        case 'good':
          return [
            'Mevcut fitness seviyenizi koruyun',
            'Yüksek yoğunluklu interval antrenman (HIIT) ekleyin',
            'Haftada 1-2 kez tempo koşuları yapın',
            'Çeşitli aerobik aktiviteler deneyin',
          ];
        case 'excellent':
        case 'superior':
          return [
            'Tebrikler! Mükemmel kondisyon seviyesi',
            'Performans odaklı antrenman yapın',
            'Yarışlara katılmayı düşünün',
            'Toparlanmaya önem verin',
          ];
        default:
          return [];
      }
    } else {
      switch (category) {
        case 'very_poor':
        case 'poor':
          return [
            'Consult your doctor for medical clearance',
            'Start with low-intensity activities like walking',
            'Exercise 20-30 minutes, 5 days per week',
            'Gradually increase intensity over time',
          ];
        case 'fair':
          return [
            'Exercise 3-4 times weekly at moderate intensity',
            'Try running, cycling, or swimming',
            'Consider adding interval training',
            'Consistency is the most important factor',
          ];
        case 'good':
          return [
            'Maintain your current fitness level',
            'Add high-intensity interval training (HIIT)',
            'Include 1-2 tempo runs per week',
            'Try various aerobic activities',
          ];
        case 'excellent':
        case 'superior':
          return [
            'Congratulations! Excellent fitness level',
            'Focus on performance-oriented training',
            'Consider competitive events',
            'Prioritize recovery and injury prevention',
          ];
        default:
          return [];
      }
    }
  };

  const recommendations = getRecommendations();

  return (
    <Card className="border-2" style={{ borderColor: catInfo.color }}>
      <div className="mb-4 flex items-start gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: catInfo.color }}
        >
          {getCategoryIcon()}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-neutral-900">
            {catInfo.label[locale]}
          </h3>
          <p className="text-sm text-neutral-600">
            VO2 Max: {vo2Max} ml/kg/min
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? 'Bu Ne Anlama Geliyor?' : 'What Does This Mean?'}
          </h4>
          <p className="text-sm text-neutral-700 leading-relaxed">
            {catInfo.description[locale]}
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-4">
          <h4 className="mb-3 text-sm font-semibold text-neutral-900">
            {locale === 'tr' ? '💡 Öneriler' : '💡 Recommendations'}
          </h4>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <div
                  className="mt-0.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: catInfo.color }}
                />
                <span className="text-sm text-neutral-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {(category === 'very_poor' || category === 'poor') && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3">
            <p className="text-xs text-red-800">
              <strong>{locale === 'tr' ? '⚠️ Önemli:' : '⚠️ Important:'}</strong>{' '}
              {locale === 'tr'
                ? 'Yeni bir egzersiz programına başlamadan önce doktorunuza danışın.'
                : 'Consult your doctor before starting any new exercise program.'}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default VO2MaxCategoryExplainer;
