import { CalculatorMeta } from '@/types/calculator';
import BodyWaterCalculator from './BodyWaterCalculator';

export const bodyWaterMeta: CalculatorMeta = {
  id: 'body-water-calculator',
  category: 'body-weight',
  slug: {
    en: 'body-water-calculator',
    tr: 'vucut-suyu-hesaplayici',
  },
  title: {
    en: 'Body Water Calculator - Calculate Your Total Body Water',
    tr: 'Vücut Suyu Hesaplayıcı - Vücudunuzdaki Su Oranını Hesaplayın',
  },
  description: {
    en: 'Calculate total body water percentage and volume using the Watson formula. Find out how much water your body contains based on age, gender, height, and weight.',
    tr: 'Watson formülü ile vücudunuzdaki toplam su oranını ve miktarını hesaplayın. Yaş, cinsiyet, boy ve kilonuza göre vücudunuzda ne kadar su olduğunu öğrenin.',
  },
  keywords: [
    'body water calculator',
    'total body water',
    'body water percentage',
    'hydration calculator',
    'watson formula',
    'vücut suyu hesaplama',
    'vücuttaki su oranı',
    'hidrasyon hesaplama',
    'toplam vücut suyu',
    'su yüzdesi',
  ],
  icon: 'Droplets',
  popular: false,
  featured: false,
  component: BodyWaterCalculator,
};
