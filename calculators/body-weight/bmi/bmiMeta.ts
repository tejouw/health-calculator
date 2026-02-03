import { CalculatorMeta } from '@/types/calculator';
import BMICalculator from './BmiCalculator';

export const bmiMeta: CalculatorMeta = {
  id: 'bmi-calculator',
  category: 'body-weight',
  slug: {
    en: 'bmi-calculator',
    tr: 'vucut-kitle-indeksi-hesaplama',
  },
  title: {
    en: 'BMI Calculator - Calculate Your Body Mass Index',
    tr: 'VKİ Hesaplama - Vücut Kitle İndeksi Hesaplayıcı',
  },
  description: {
    en: 'Calculate your Body Mass Index (BMI) instantly. Find out if your weight is in a healthy range based on your height and weight.',
    tr: 'Vücut Kitle İndeksinizi (VKİ) anında hesaplayın. Boyunuz ve kilonuza göre ağırlığınızın sağlıklı aralıkta olup olmadığını öğrenin.',
  },
  keywords: [
    'bmi calculator',
    'body mass index',
    'bmi',
    'weight calculator',
    'healthy weight',
    'vki hesaplama',
    'vücut kitle indeksi',
    'ideal kilo',
  ],
  icon: 'Scale',
  popular: true,
  featured: true,
  component: BMICalculator,
};
