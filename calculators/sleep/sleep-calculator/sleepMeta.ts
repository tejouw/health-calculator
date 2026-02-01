import { CalculatorMeta } from '@/types/calculator';
import SleepCalculator from './SleepCalculator';

export const sleepMeta: CalculatorMeta = {
  id: 'sleep-calculator',
  category: 'sleep',
  slug: {
    en: 'sleep-calculator',
    tr: 'uyku-hesaplayici',
  },
  title: {
    en: 'Sleep Calculator - Find Your Optimal Bedtime & Wake Time',
    tr: 'Uyku Hesaplayıcı - Optimal Yatma ve Uyanma Saatinizi Bulun',
  },
  description: {
    en: 'Calculate the best time to sleep and wake up based on sleep cycles. Wake up feeling refreshed by timing your sleep cycles perfectly.',
    tr: 'Uyku döngülerine göre en iyi uyku ve uyanma saatini hesaplayın. Uyku döngülerinizi mükemmel zamanlayarak dinlenmiş uyanın.',
  },
  keywords: [
    'sleep calculator',
    'sleep cycle',
    'bedtime calculator',
    'wake up time',
    'sleep schedule',
    'uyku hesaplayıcı',
    'uyku döngüsü',
    'yatma saati',
    'uyanma saati',
  ],
  icon: 'Moon',
  popular: true,
  featured: false,
  component: SleepCalculator,
};
