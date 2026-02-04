import { CalculatorMeta } from '@/types/calculator';
import WaistHipRatioCalculator from './WaistHipRatioCalculator';

export const waistHipRatioMeta: CalculatorMeta = {
  id: 'waist-hip-ratio-calculator',
  category: 'body-weight',
  slug: {
    en: 'waist-hip-ratio-calculator',
    tr: 'bel-kalca-orani-hesaplama',
  },
  title: {
    en: 'Waist-to-Hip Ratio Calculator - Assess Your Health Risk',
    tr: 'Bel-Kalça Oranı Hesaplama - Sağlık Riskini Değerlendirin',
  },
  description: {
    en: 'Calculate your waist-to-hip ratio and assess cardiovascular health risk using WHO guidelines. Enter your waist and hip measurements for an instant risk assessment.',
    tr: 'DSÖ kılavuzlarını kullanarak bel-kalça oranınızı hesaplayın ve kardiyovasküler sağlık riskini değerlendirin. Bel ve kalça ölçümlerinizi girerek anında risk değerlendirmesi alın.',
  },
  keywords: [
    'waist to hip ratio calculator',
    'WHR calculator',
    'waist hip ratio',
    'cardiovascular risk calculator',
    'body fat distribution',
    'WHO health risk',
    'central obesity',
    'abdominal obesity calculator',
    'bel kalca orani hesaplama',
    'bel kalca orani',
    'kardiovaskuler risk',
    'DSÖ sağlık riski',
    'merkezi obesite',
  ],
  icon: 'Ruler',
  popular: false,
  featured: false,
  component: WaistHipRatioCalculator,
};
