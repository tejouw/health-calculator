import { CalculatorMeta } from '@/types/calculator';
import HealthyLifestyleScoreCalculator from './HealthyLifestyleScoreCalculator';

export const healthyLifestyleScoreMeta: CalculatorMeta = {
  id: 'healthy-lifestyle-score-calculator',
  category: 'daily-life',
  slug: {
    en: 'healthy-lifestyle-score',
    tr: 'saglikli-yasam-puani-hesaplayici',
  },
  title: {
    en: 'Healthy Lifestyle Score Calculator - Rate Your Habits',
    tr: 'Sağlıklı Yaşam Puanı Hesaplayıcı - Alışkanlıklarınızı Değerlendirin',
  },
  description: {
    en: 'Calculate your healthy lifestyle score based on exercise, sleep, nutrition, hydration, and more. Get personalized tips to improve your daily habits.',
    tr: 'Egzersiz, uyku, beslenme, su tüketimi ve daha fazlasına göre sağlıklı yaşam puanınızı hesaplayın. Günlük alışkanlıklarınızı iyileştirmek için kişiselleştirilmiş ipuçları alın.',
  },
  keywords: [
    'healthy lifestyle score',
    'lifestyle assessment',
    'health score calculator',
    'wellness quiz',
    'healthy habits test',
    'sağlıklı yaşam puanı',
    'yaşam tarzı değerlendirmesi',
    'sağlık skoru hesaplama',
    'sağlıklı yaşam testi',
    'wellness hesaplayıcı',
  ],
  icon: 'Leaf',
  popular: true,
  component: HealthyLifestyleScoreCalculator,
};
