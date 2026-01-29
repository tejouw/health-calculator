import { CalculatorMeta } from '@/types/calculator';
import BMRCalculator from './BMRCalculator';

export const bmrMeta: CalculatorMeta = {
  id: 'bmr-calculator',
  category: 'nutrition',
  slug: {
    en: 'bmr-calculator',
    tr: 'bmr-hesaplama',
  },
  title: {
    en: 'BMR Calculator - Calculate Your Basal Metabolic Rate',
    tr: 'BMR Hesaplama - Bazal Metabolizma Hızını Hesaplayın',
  },
  description: {
    en: 'Calculate your Basal Metabolic Rate (BMR) - the calories your body burns at rest. Get your resting metabolism and daily calorie needs at different activity levels using Mifflin-St Jeor equation.',
    tr: 'Bazal Metabolizma Hızınızı (BMR) hesaplayın - vücudunuzun dinlenme sırasında yaktığı kalori. Mifflin-St Jeor denklemini kullanarak dinlenme metabolizmanızı ve farklı aktivite seviyelerinde günlük kalori ihtiyaçlarınızı alın.',
  },
  keywords: [
    'BMR calculator',
    'basal metabolic rate',
    'metabolic rate calculator',
    'resting metabolic rate',
    'calorie calculator',
    'TDEE',
    'metabolism',
    'Mifflin-St Jeor',
    'Harris-Benedict',
    'BMR hesaplama',
    'bazal metabolizması',
    'metabolik oran hesaplama',
    'dinlenme metabolizması',
    'kalori ihtiyacı',
  ],
  icon: 'Zap',
  popular: true,
  featured: false,
  component: BMRCalculator,
};
