import { CalculatorMeta } from '@/types/calculator';
import WeightLossCalculator from './WeightLossCalculator';

export const weightLossMeta: CalculatorMeta = {
  id: 'weight-loss-calculator',
  category: 'nutrition',
  slug: {
    en: 'weight-loss-calculator',
    tr: 'kilo-verme-suresi-hesaplayici',
  },
  title: {
    en: 'Weight Loss Calculator - How Long to Reach Your Goal?',
    tr: 'Kilo Verme Süresi Hesaplayıcı - Hedefinize Ne Zaman Ulaşırsınız?',
  },
  description: {
    en: 'Calculate how long it will take to reach your target weight. Get a personalized weight loss timeline with weekly milestones, calorie targets, and estimated completion date.',
    tr: 'Hedef kilonuza ulaşmanızın ne kadar süreceğini hesaplayın. Haftalık kilometre taşları, kalori hedefleri ve tahmini bitiş tarihi ile kişiselleştirilmiş kilo verme takvimi alın.',
  },
  keywords: [
    'weight loss calculator',
    'how long to lose weight',
    'weight loss timeline',
    'weight loss planner',
    'kilo verme hesaplayıcı',
    'kilo verme süresi',
    'ne kadar sürede kilo veririm',
    'kilo verme takvimi',
    'zayıflama hesaplama',
  ],
  icon: 'TrendingDown',
  popular: true,
  featured: false,
  component: WeightLossCalculator,
};
