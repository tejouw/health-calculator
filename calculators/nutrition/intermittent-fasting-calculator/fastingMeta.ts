import { CalculatorMeta } from '@/types/calculator';
import IntermittentFastingCalculator from './IntermittentFastingCalculator';

export const fastingMeta: CalculatorMeta = {
  id: 'intermittent-fasting-calculator',
  category: 'nutrition',
  slug: {
    en: 'intermittent-fasting-calculator',
    tr: 'aralikli-oruc-hesaplayici',
  },
  title: {
    en: 'Intermittent Fasting Calculator - 16:8, 18:6, OMAD & More',
    tr: 'Aralıklı Oruç Hesaplayıcı - 16:8, 18:6, OMAD ve Daha Fazlası',
  },
  description: {
    en: 'Free intermittent fasting calculator for 16:8, 18:6, 20:4, OMAD, and 5:2 protocols. Calculate your eating window, meal timing, and autophagy benefits.',
    tr: '16:8, 18:6, 20:4, OMAD ve 5:2 protokolleri için ücretsiz aralıklı oruç hesaplayıcı. Yemek pencerenizi, öğün zamanlamanızı ve otofaji faydalarını hesaplayın.',
  },
  keywords: [
    'intermittent fasting',
    'fasting calculator',
    '16:8 fasting',
    '18:6 method',
    'OMAD calculator',
    'eating window',
    'fasting schedule',
    'autophagy',
    'time-restricted eating',
    'aralıklı oruç',
    'oruç hesaplayıcı',
    '16:8 oruç',
    'yemek penceresi',
    'otofaji',
  ],
  icon: 'Clock',
  popular: true,
  featured: true,
  component: IntermittentFastingCalculator,
};
