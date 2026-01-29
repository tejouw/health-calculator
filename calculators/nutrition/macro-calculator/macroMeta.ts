import { CalculatorMeta } from '@/types/calculator';
import MacroCalculator from './MacroCalculator';

export const macroMeta: CalculatorMeta = {
  id: 'macro-calculator',
  category: 'nutrition',
  slug: {
    en: 'macro-calculator',
    tr: 'makro-hesaplama',
  },
  title: {
    en: 'Macro Calculator - Calculate Your Macronutrients & TDEE',
    tr: 'Makro Hesaplama - Makro Besinler ve TDEE Hesaplayıcı',
  },
  description: {
    en: 'Calculate your daily macronutrient needs (protein, carbs, fat) and TDEE based on your goals. Get personalized nutrition targets for weight loss, maintenance, or muscle gain.',
    tr: 'Hedeflerinize göre günlük makro besin ihtiyaçlarınızı (protein, karbonhidrat, yağ) ve TDEE\'nizi hesaplayın. Kilo kaybı, koruma veya kas kazanımı için kişiselleştirilmiş beslenme hedefleri alın.',
  },
  keywords: [
    'macro calculator',
    'macronutrient calculator',
    'TDEE calculator',
    'protein calculator',
    'carbs calculator',
    'calorie calculator',
    'nutrition calculator',
    'diet calculator',
    'makro hesaplama',
    'makro besin hesaplama',
    'TDEE hesaplama',
    'protein hesaplama',
    'kalori hesaplama',
    'beslenme hesaplama',
  ],
  icon: 'Apple',
  popular: true,
  featured: true,
  component: MacroCalculator,
};
