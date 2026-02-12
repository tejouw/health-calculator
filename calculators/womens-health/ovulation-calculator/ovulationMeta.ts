import { CalculatorMeta } from '@/types/calculator';
import OvulationCalculator from './OvulationCalculator';

export const ovulationMeta: CalculatorMeta = {
  id: 'ovulation-calculator',
  category: 'womens-health',
  slug: {
    en: 'ovulation-calculator',
    tr: 'yumurtlama-hesaplayici',
  },
  title: {
    en: 'Ovulation Calculator - Track Your Fertile Window & Ovulation Date',
    tr: 'Yumurtlama Hesaplayıcı - Verimli Günlerinizi ve Yumurtlama Tarihinizi Takip Edin',
  },
  description: {
    en: 'Free ovulation calculator to predict your most fertile days. Calculate your ovulation date, fertile window, and best days to conceive based on your menstrual cycle. Track your period cycle and improve your chances of getting pregnant naturally.',
    tr: 'En verimli günlerinizi tahmin etmek için ücretsiz yumurtlama hesaplayıcısı. Adet döneminize göre yumurtlama tarihinizi, verimli periyodunuzu ve gebe kalmak için en iyi günleri hesaplayın. Adet döneminizi takip edin ve doğal yollarla hamile kalma şansınızı artırın.',
  },
  keywords: [
    'ovulation calculator',
    'fertile window calculator',
    'ovulation date',
    'fertility calculator',
    'period tracker',
    'conception calculator',
    'fertile days',
    'best days to conceive',
    'menstrual cycle calculator',
    'ovulation prediction',
    'pregnancy planning',
    'trying to conceive',
    'TTC calculator',
    'yumurtlama hesaplayıcı',
    'yumurtlama tarihi',
    'verimli günler',
    'doğurganlık hesaplayıcı',
    'adet takibi',
    'gebe kalma',
    'hamilelik planlama',
    'menstrüel döngü',
  ],
  icon: 'Flower2',
  popular: true,
  featured: true,
  component: OvulationCalculator,
};
