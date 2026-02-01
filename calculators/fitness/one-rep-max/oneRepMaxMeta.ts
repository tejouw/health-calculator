import { CalculatorMeta } from '@/types/calculator';
import OneRepMaxCalculator from './OneRepMaxCalculator';

export const oneRepMaxMeta: CalculatorMeta = {
  id: 'one-rep-max-calculator',
  category: 'fitness',
  slug: {
    en: 'one-rep-max-calculator',
    tr: 'maksimum-tek-tekrar-hesaplama',
  },
  title: {
    en: 'One Rep Max Calculator - Calculate Your 1RM',
    tr: 'Maksimum Tek Tekrar Hesaplama - 1RM Hesaplayıcı',
  },
  description: {
    en: 'Calculate your one rep max (1RM) for weightlifting using multiple proven formulas. Find your maximum lifting capacity and training percentages.',
    tr: 'Kanıtlanmış çoklu formüllerle ağırlık kaldırma için maksimum tek tekrar (1RM) hesaplayın. Maksimum kaldırma kapasitenizi ve antrenman yüzdelerinizi bulun.',
  },
  keywords: [
    'one rep max',
    '1rm calculator',
    'max lift calculator',
    'strength calculator',
    'weightlifting calculator',
    'brzycki formula',
    'epley formula',
    'maksimum tek tekrar',
    '1rm hesaplama',
    'kuvvet hesaplayıcı',
  ],
  icon: 'Dumbbell',
  popular: true,
  featured: false,
  component: OneRepMaxCalculator,
};
