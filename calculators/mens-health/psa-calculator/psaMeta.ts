import { CalculatorMeta } from '@/types/calculator';
import PSACalculator from './PSACalculator';

export const psaMeta: CalculatorMeta = {
  id: 'psa-calculator',
  category: 'mens-health',
  slug: {
    en: 'psa-calculator',
    tr: 'psa-hesaplayici',
  },
  title: {
    en: 'PSA Calculator - Prostate-Specific Antigen Test Evaluation',
    tr: 'PSA Hesaplayıcı - Prostat Spesifik Antijen Test Değerlendirmesi',
  },
  description: {
    en: 'Calculate and interpret your PSA (Prostate-Specific Antigen) levels. Evaluate prostate health risk with age-adjusted reference ranges, PSA density, and PSA velocity calculations.',
    tr: 'PSA (Prostat Spesifik Antijen) seviyelerinizi hesaplayın ve yorumlayın. Yaşa göre ayarlanmış referans aralıkları, PSA yoğunluğu ve PSA hızı hesaplamaları ile prostat sağlığı riskini değerlendirin.',
  },
  keywords: [
    'psa calculator',
    'prostate specific antigen',
    'psa test',
    'prostate cancer screening',
    'psa levels',
    'prostate health',
    'psa hesaplayıcı',
    'prostat kanseri taraması',
    'prostat sağlığı',
  ],
  icon: 'Stethoscope',
  popular: true,
  featured: false,
  component: PSACalculator,
};
