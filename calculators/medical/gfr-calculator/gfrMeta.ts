import { CalculatorMeta } from '@/types/calculator';
import GFRCalculator from './GFRCalculator';

export const gfrMeta: CalculatorMeta = {
  id: 'gfr-calculator',
  category: 'medical',
  slug: {
    en: 'gfr-calculator',
    tr: 'gfr-hesaplayici',
  },
  title: {
    en: 'GFR Calculator (eGFR) - Kidney Function Test',
    tr: 'GFR Hesaplayıcı (eGFR) - Böbrek Fonksiyon Testi',
  },
  description: {
    en: 'Calculate your estimated Glomerular Filtration Rate (eGFR) using the CKD-EPI equation. Assess kidney function and CKD stages.',
    tr: 'CKD-EPI denklemiyle tahmini Glomerüler Filtrasyon Hızınızı (eGFR) hesaplayın. Böbrek fonksiyonunu ve CKD evrelerini değerlendirin.',
  },
  keywords: [
    'gfr calculator',
    'egfr calculator',
    'kidney function',
    'creatinine calculator',
    'ckd stages',
    'glomerular filtration rate',
    'gfr hesaplayıcı',
    'böbrek fonksiyonu',
  ],
  icon: 'Heart',
  popular: true,
  featured: false,
  component: GFRCalculator,
};
