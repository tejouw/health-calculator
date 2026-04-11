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
    en: 'Free BMR Calculator - Basal Metabolic Rate Calculator (2026)',
    tr: 'BMR Hesaplama (Ücretsiz) - Bazal Metabolizma Hızı Hesaplayıcı 2026',
  },
  description: {
    en: 'Calculate your BMR (Basal Metabolic Rate) free — how many calories your body burns at rest. Get resting metabolism and daily calorie needs at every activity level using the Mifflin-St Jeor equation.',
    tr: 'Bazal Metabolizma Hızınızı (BMR) ücretsiz hesaplayın. Vücudunuzun dinlenirken yaktığı kaloriyi ve farklı aktivite seviyelerindeki günlük kalori ihtiyacınızı Mifflin-St Jeor denklemiyle anında öğrenin.',
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
