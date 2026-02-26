import { CalculatorMeta } from '@/types/calculator';
import WaistHeightRatioCalculator from './WaistHeightRatioCalculator';

export const waistHeightRatioMeta: CalculatorMeta = {
  id: 'waist-height-ratio-calculator',
  category: 'body-weight',
  slug: {
    en: 'waist-height-ratio-calculator',
    tr: 'bel-boy-orani-hesaplama',
  },
  title: {
    en: 'Waist-to-Height Ratio Calculator - A Better Health Predictor Than BMI',
    tr: 'Bel-Boy Orani Hesaplama - BMI\'dan Daha Iyi Bir Saglik Gostergesi',
  },
  description: {
    en: 'Calculate your waist-to-height ratio (WHtR) for a more accurate health risk assessment than BMI. Research shows WHtR is the best single predictor of cardiovascular and metabolic risk.',
    tr: 'BMI\'dan daha dogru bir saglik risk degerlendirmesi icin bel-boy oraninizi (WHtR) hesaplayin. Arastirmalar WHtR\'nin kardiyovaskuler ve metabolik risk icin en iyi tekli gosterge oldugunu kanitlamistir.',
  },
  keywords: [
    'waist to height ratio calculator',
    'WHtR calculator',
    'waist height ratio',
    'better than BMI',
    'abdominal obesity',
    'cardiovascular risk',
    'health risk calculator',
    'central obesity calculator',
    'waist circumference health',
    'bel boy orani hesaplama',
    'bel boy orani',
    'BMI alternatifi',
    'karin yagi riski',
    'saglik risk hesaplama',
    'merkezi obezite',
  ],
  icon: 'Scan',
  popular: false,
  featured: false,
  component: WaistHeightRatioCalculator,
};
