import { CalculatorMeta } from '@/types/calculator';
import PeriodCalculator from './PeriodCalculator';

export const periodMeta: CalculatorMeta = {
  id: 'period-calculator',
  category: 'womens-health',
  slug: {
    en: 'period-calculator',
    tr: 'adet-takvimi',
  },
  title: {
    en: 'Period Calculator - Menstrual Cycle & Ovulation Tracker',
    tr: 'Adet Takvimi - Regl Döngüsü ve Yumurtlama Takibi',
  },
  description: {
    en: 'Track your menstrual cycle, predict next periods, and calculate fertile windows. Free period tracker with ovulation calendar and cycle phase insights.',
    tr: 'Adet döneminizi takip edin, gelecek adetleri tahmin edin ve verimli günleri hesaplayın. Yumurtlama takvimi ve döngü fazı bilgileriyle ücretsiz regl takvimi.',
  },
  keywords: [
    'period calculator',
    'menstrual cycle calculator',
    'period tracker',
    'ovulation calculator',
    'fertile window',
    'period calendar',
    'menstrual calendar',
    'when is my next period',
    'ovulation tracker',
    'cycle tracker',
    'adet takvimi',
    'regl takvimi',
    'adet hesaplama',
    'yumurtlama hesaplama',
    'verimli günler',
    'adet döngüsü',
  ],
  icon: 'Calendar',
  popular: true,
  featured: true,
  component: PeriodCalculator,
};
