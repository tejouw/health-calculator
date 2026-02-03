import { CalculatorMeta } from '@/types/calculator';
import ProteinCalculator from './ProteinCalculator';

export const proteinMeta: CalculatorMeta = {
  id: 'protein-calculator',
  category: 'nutrition',
  slug: {
    en: 'protein-calculator',
    tr: 'protein-hesaplama',
  },
  title: {
    en: 'Protein Calculator - Calculate Your Daily Protein Needs',
    tr: 'Protein Hesaplama - Günlük Protein İhtiyacınızı Hesaplayın',
  },
  description: {
    en: 'Calculate your optimal daily protein intake based on weight, activity level, and fitness goals. Get personalized recommendations for muscle building, weight loss, or maintenance.',
    tr: 'Kilonuz, aktivite seviyeniz ve fitness hedeflerinize göre optimal günlük protein alımınızı hesaplayın. Kas yapımı, kilo kaybı veya kilo koruma için kişiselleştirilmiş öneriler alın.',
  },
  keywords: [
    'protein calculator',
    'daily protein intake',
    'protein requirement',
    'protein needs',
    'muscle building protein',
    'weight loss protein',
    'protein hesaplama',
    'günlük protein',
    'protein ihtiyacı',
  ],
  icon: 'Beef',
  popular: true,
  featured: false,
  component: ProteinCalculator,
};
