import { CalculatorMeta } from '@/types/calculator';
import SleepDebtCalculator from './SleepDebtCalculator';

export const sleepDebtMeta: CalculatorMeta = {
  id: 'sleep-debt-calculator',
  category: 'sleep',
  slug: {
    en: 'sleep-debt-calculator',
    tr: 'uyku-borcu-hesaplama',
  },
  title: {
    en: 'Sleep Debt Calculator - Calculate Your Accumulated Sleep Debt',
    tr: 'Uyku Borcu Hesaplama - Birikmiş Uyku Borcunuzu Hesaplayın',
  },
  description: {
    en: 'Calculate your accumulated sleep debt over the past week. Find out how much sleep you owe your body and get a personalized recovery plan.',
    tr: 'Son bir haftada biriken uyku borcunuzu hesaplayın. Vücudunuza ne kadar uyku borçlu olduğunuzu öğrenin ve kişiselleştirilmiş toparlanma planı alın.',
  },
  keywords: [
    'sleep debt calculator',
    'sleep deficit',
    'sleep deprivation',
    'how much sleep do i need',
    'sleep recovery',
    'uyku borcu hesaplama',
    'uyku açığı',
    'uyku eksikliği',
    'ne kadar uyumalıyım',
    'uyku toparlanması',
  ],
  icon: 'Moon',
  popular: false,
  featured: false,
  component: SleepDebtCalculator,
};
