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
    en: 'Free BMI Calculator - Check Your Body Mass Index Instantly',
    tr: 'VKİ Hesaplama (Ücretsiz) - Vücut Kitle İndeksi Hesaplayıcı 2026',
  },
  description: {
    en: 'Calculate your BMI (Body Mass Index) free online. Enter your height and weight to instantly find out if you are underweight, normal, overweight or obese. Science-backed results with health tips.',
    tr: 'Ücretsiz VKİ hesaplama aracıyla vücut kitle indeksinizi anında öğrenin. Boy ve kilonuzu girin, zayıf, normal, fazla kilolu veya obez kategorinizi hemen görün. Bilimsel sonuçlar ve sağlık önerileri.',
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
