import { CalculatorMeta } from '@/types/calculator';
import ConceptionDateCalculator from './ConceptionDateCalculator';

export const conceptionDateMeta: CalculatorMeta = {
  id: 'conception-date-calculator',
  category: 'pregnancy',
  slug: {
    en: 'conception-date-calculator',
    tr: 'gebe-kalma-tarihi-hesaplayici',
  },
  title: {
    en: 'Conception Date Calculator - When Did I Conceive?',
    tr: 'Gebe Kalma Tarihi Hesaplama - Ne Zaman Gebe Kaldım?',
  },
  description: {
    en: 'Calculate your estimated conception date based on your last menstrual period or due date. Find out when you conceived, your fertile window, and key pregnancy milestones.',
    tr: 'Son adet tarihinize veya tahmini doğum tarihinize göre gebe kalma tarihinizi hesaplayın. Ne zaman gebe kaldığınızı, doğurgan döneminizi ve gebelik kilometre taşlarını öğrenin.',
  },
  keywords: [
    'conception date calculator',
    'when did i conceive',
    'conception calculator',
    'pregnancy conception',
    'fertile window',
    'ovulation date',
    'gebe kalma tarihi',
    'gebe kalma hesaplama',
    'ne zaman gebe kaldım',
    'döllenme tarihi',
    'hamilelik başlangıcı',
  ],
  icon: 'Baby',
  popular: false,
  featured: false,
  component: ConceptionDateCalculator,
};
