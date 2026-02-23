import { CalculatorMeta } from '@/types/calculator';
import StressLevelCalculator from './StressLevelCalculator';

export const stressLevelMeta: CalculatorMeta = {
  id: 'stress-level-calculator',
  category: 'mental-health',
  slug: {
    en: 'stress-level-calculator',
    tr: 'stres-duzeyi-hesaplayici',
  },
  title: {
    en: 'Stress Level Calculator (PSS-10) - Perceived Stress Scale Test',
    tr: 'Stres Düzeyi Hesaplayıcı (PSS-10) - Algılanan Stres Ölçeği Testi',
  },
  description: {
    en: 'Measure your stress level with the scientifically validated PSS-10 Perceived Stress Scale. Get personalized stress management strategies and coping recommendations.',
    tr: 'Bilimsel olarak doğrulanmış PSS-10 Algılanan Stres Ölçeği ile stres düzeyinizi ölçün. Kişiselleştirilmiş stres yönetimi stratejileri ve başa çıkma önerileri alın.',
  },
  keywords: [
    'stress test',
    'stress level calculator',
    'perceived stress scale',
    'PSS-10',
    'stress assessment',
    'mental health test',
    'stress quiz',
    'stres testi',
    'stres düzeyi hesaplama',
    'algılanan stres ölçeği',
    'ruh sağlığı',
  ],
  icon: 'Flame',
  popular: true,
  featured: false,
  component: StressLevelCalculator,
};
