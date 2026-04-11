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
    en: 'Free Body Fat Calculator - Body Fat Percentage by US Navy Method',
    tr: 'Vücut Yağ Oranı Hesaplama (Ücretsiz) - Yağ Yüzdesi Hesaplayıcı 2026',
  },
  description: {
    en: 'Calculate your body fat percentage free using the US Navy Method. Enter your measurements to get accurate body composition analysis, lean mass calculation and fitness category instantly!',
    tr: 'US Navy yöntemiyle vücut yağ yüzdenizi ücretsiz hesaplayın. Ölçümlerinizi girin, vücut kompozisyonu analizi, yağsız kütle ve fitness kategorinizi anında öğrenin!',
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
  icon: 'Percent',
  popular: true,
  featured: true,
  component: BodyFatCalculator,
};
