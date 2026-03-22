import { CalculatorMeta } from '@/types/calculator';
import EyeColorCalculator from './EyeColorCalculator';

export const eyeColorMeta: CalculatorMeta = {
  id: 'eye-color-calculator',
  category: 'daily-life',
  slug: {
    en: 'eye-color-calculator',
    tr: 'goz-rengi-hesaplayici',
  },
  title: {
    en: 'Eye Color Calculator - Predict Baby Eye Color',
    tr: 'Göz Rengi Hesaplayıcı - Bebek Göz Rengi Tahmini',
  },
  description: {
    en: 'Predict your baby\'s eye color based on parent and grandparent eye colors using genetics. Calculate the probability of brown, blue, green, or hazel eyes.',
    tr: 'Genetik bilimi kullanarak ebeveyn ve büyükanne-büyükbaba göz renklerine göre bebeğinizin göz rengini tahmin edin. Kahverengi, mavi, yeşil veya ela göz olasılıklarını hesaplayın.',
  },
  keywords: [
    'eye color calculator',
    'baby eye color predictor',
    'eye color genetics',
    'predict baby eye color',
    'eye color probability',
    'göz rengi hesaplama',
    'bebek göz rengi tahmini',
    'göz rengi genetik',
    'bebeğimin göz rengi',
    'göz rengi olasılığı',
  ],
  icon: 'Eye',
  popular: true,
  featured: false,
  component: EyeColorCalculator,
};
