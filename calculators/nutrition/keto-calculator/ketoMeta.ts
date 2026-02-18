import { CalculatorMeta } from '@/types/calculator';
import KetoCalculator from './KetoCalculator';

export const ketoMeta: CalculatorMeta = {
  id: 'keto-calculator',
  category: 'nutrition',
  slug: {
    en: 'keto-calculator',
    tr: 'keto-hesaplayici',
  },
  title: {
    en: 'Keto Calculator - Ketogenic Diet Macro Calculator',
    tr: 'Keto Hesaplayıcı - Ketojenik Diyet Makro Hesaplama',
  },
  description: {
    en: 'Calculate your personalized keto diet macros. Get exact fat, protein, and carb targets for ketosis with meal plans and food guides.',
    tr: 'Kişiselleştirilmiş keto diyet makrolarınızı hesaplayın. Ketoz için yağ, protein ve karbonhidrat hedeflerini öğün planı ve besin rehberi ile alın.',
  },
  keywords: [
    'keto calculator',
    'ketogenic diet calculator',
    'keto macros',
    'keto diet plan',
    'ketosis calculator',
    'low carb calculator',
    'keto hesaplayıcı',
    'ketojenik diyet',
    'keto makro hesaplama',
    'düşük karbonhidrat',
  ],
  icon: 'Flame',
  popular: true,
  featured: false,
  component: KetoCalculator,
};
