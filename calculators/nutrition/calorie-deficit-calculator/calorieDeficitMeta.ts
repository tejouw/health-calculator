import { CalculatorMeta } from '@/types/calculator';
import CalorieDeficitCalculator from './CalorieDeficitCalculator';

export const calorieDeficitMeta: CalculatorMeta = {
  id: 'calorie-deficit-calculator',
  category: 'nutrition',
  slug: {
    en: 'calorie-deficit-calculator',
    tr: 'kalori-acigi-hesaplama',
  },
  title: {
    en: 'Calorie Deficit Calculator - Weight Loss Calorie Calculator',
    tr: 'Kalori Açığı Hesaplama - Kilo Kaybı Kalori Hesaplayıcı',
  },
  description: {
    en: 'Calculate your optimal calorie deficit for safe and effective weight loss. Get personalized daily calorie targets, macros, and weight loss timeline based on your goals.',
    tr: 'Güvenli ve etkili kilo kaybı için optimal kalori açığınızı hesaplayın. Hedeflerinize göre kişiselleştirilmiş günlük kalori hedefleri, makrolar ve kilo kaybı zaman çizelgesi alın.',
  },
  keywords: [
    'calorie deficit calculator',
    'weight loss calculator',
    'calorie deficit',
    'how many calories to lose weight',
    'weight loss calorie calculator',
    'calorie deficit for weight loss',
    'safe calorie deficit',
    'daily calorie deficit',
    'weight loss timeline',
    'kalori açığı hesaplama',
    'kilo kaybı hesaplayıcı',
    'kalori açığı',
    'kilo vermek için kalori',
    'zayıflama hesaplama',
  ],
  icon: 'TrendingDown',
  popular: true,
  featured: true,
  component: CalorieDeficitCalculator,
};
