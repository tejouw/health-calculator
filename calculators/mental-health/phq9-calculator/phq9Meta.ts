import { CalculatorMeta } from '@/types/calculator';
import PHQ9Calculator from './PHQ9Calculator';

export const phq9Meta: CalculatorMeta = {
  id: 'phq9-calculator',
  category: 'mental-health',
  slug: {
    en: 'phq9-depression-calculator',
    tr: 'phq9-depresyon-tarama',
  },
  title: {
    en: 'PHQ-9 Depression Screening Test - Mental Health Assessment',
    tr: 'PHQ-9 Depresyon Tarama Testi - Ruh Sağlığı Değerlendirmesi',
  },
  description: {
    en: 'Take the PHQ-9 depression screening test. A validated 9-question assessment to measure depression severity and guide treatment decisions.',
    tr: 'PHQ-9 depresyon tarama testini yapın. Depresyon şiddetini ölçmek ve tedavi kararlarına rehberlik etmek için doğrulanmış 9 soruluk değerlendirme.',
  },
  keywords: [
    'phq-9',
    'depression test',
    'depression screening',
    'mental health test',
    'depression assessment',
    'phq9 calculator',
    'depresyon testi',
    'ruh sağlığı',
  ],
  icon: 'Brain',
  popular: true,
  featured: false,
  component: PHQ9Calculator,
};
