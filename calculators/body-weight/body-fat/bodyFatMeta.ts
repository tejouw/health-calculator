import { CalculatorMeta } from '@/types/calculator';
import BodyFatCalculator from './BodyFatCalculator';

export const bodyFatMeta: CalculatorMeta = {
  id: 'body-fat-calculator',
  category: 'body-weight',
  slug: {
    en: 'body-fat-calculator',
    tr: 'vucut-yag-orani-hesaplama',
  },
  title: {
    en: 'Body Fat Calculator - Calculate Your Body Fat Percentage',
    tr: 'Vücut Yağ Oranı Hesaplama - Vücut Yağ Yüzdesi Hesaplayıcı',
  },
  description: {
    en: 'Calculate your body fat percentage using the US Navy Method. Get accurate body composition analysis based on your measurements.',
    tr: 'US Navy Method kullanarak vücut yağ yüzdenizi hesaplayın. Ölçümlerinize dayalı doğru vücut kompozisyonu analizi alın.',
  },
  keywords: [
    'body fat calculator',
    'body fat percentage',
    'navy method',
    'body composition',
    'lean body mass',
    'vucut yag orani',
    'vucut yag yuzdesi',
    'navy yontemi',
    'vucut kompozisyonu',
  ],
  icon: 'Activity',
  popular: true,
  featured: true,
  component: BodyFatCalculator,
};
