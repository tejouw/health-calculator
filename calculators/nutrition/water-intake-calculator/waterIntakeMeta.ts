import { CalculatorMeta } from '@/types/calculator';
import WaterIntakeCalculator from './WaterIntakeCalculator';

export const waterIntakeMeta: CalculatorMeta = {
  id: 'water-intake-calculator',
  category: 'nutrition',
  slug: {
    en: 'water-intake-calculator',
    tr: 'su-ihtiyaci-hesaplama',
  },
  title: {
    en: 'Water Intake Calculator - Daily Hydration Needs Calculator',
    tr: 'Su İhtiyacı Hesaplama - Günlük Hidrasyon İhtiyacı Hesaplayıcı',
  },
  description: {
    en: 'Calculate your daily water intake needs based on weight, activity level, climate, and special conditions. Get personalized hydration recommendations for optimal health and performance.',
    tr: 'Kilo, aktivite seviyesi, iklim ve özel durumlarınıza göre günlük su ihtiyacınızı hesaplayın. Optimal sağlık ve performans için kişiselleştirilmiş hidrasyon önerileri alın.',
  },
  keywords: [
    'water intake calculator',
    'hydration calculator',
    'daily water needs',
    'how much water should I drink',
    'water requirement calculator',
    'hydration needs',
    'water consumption',
    'daily fluid intake',
    'dehydration prevention',
    'su ihtiyacı hesaplama',
    'hidrasyon hesaplama',
    'günlük su ihtiyacı',
    'ne kadar su içmeliyim',
    'su gereksinimi',
    'sıvı alımı',
  ],
  icon: 'GlassWater',
  popular: true,
  featured: true,
  component: WaterIntakeCalculator,
};
