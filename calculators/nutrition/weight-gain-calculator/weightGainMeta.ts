import { CalculatorMeta } from '@/types/calculator';
import WeightGainCalculator from './WeightGainCalculator';

export const weightGainMeta: CalculatorMeta = {
  id: 'weight-gain-calculator',
  category: 'nutrition',
  slug: {
    en: 'weight-gain-calculator',
    tr: 'kilo-alma-hesaplayici',
  },
  title: {
    en: 'Weight Gain Calculator - Plan Your Healthy Weight Gain',
    tr: 'Kilo Alma Hesaplayıcı - Sağlıklı Kilo Alma Planı',
  },
  description: {
    en: 'Calculate how long it will take to reach your target weight with a healthy weight gain plan. Get personalized calorie surplus, macro targets, and weekly milestones.',
    tr: 'Sağlıklı bir kilo alma planıyla hedef kilonuza ulaşmanızın ne kadar süreceğini hesaplayın. Kişiselleştirilmiş kalori fazlası, makro hedefleri ve haftalık kilometre taşları alın.',
  },
  keywords: [
    'weight gain calculator',
    'how to gain weight',
    'weight gain plan',
    'healthy weight gain',
    'calorie surplus calculator',
    'bulk calculator',
    'muscle gain',
    'kilo alma hesaplayıcı',
    'nasıl kilo alırım',
    'sağlıklı kilo alma',
    'kilo alma planı',
    'kalori fazlası hesaplama',
  ],
  icon: 'TrendingUp',
  popular: true,
  featured: false,
  component: WeightGainCalculator,
};
