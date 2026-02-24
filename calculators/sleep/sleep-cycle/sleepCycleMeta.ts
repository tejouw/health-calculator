import { CalculatorMeta } from '@/types/calculator';
import SleepCycleCalculator from './SleepCycleCalculator';

export const sleepCycleMeta: CalculatorMeta = {
  id: 'sleep-cycle-calculator',
  category: 'sleep',
  slug: {
    en: 'sleep-cycle-calculator',
    tr: 'uyku-dongusu-hesaplayici',
  },
  title: {
    en: 'Sleep Cycle Calculator - Analyze Your Sleep Quality & Patterns',
    tr: 'Uyku Döngüsü Hesaplayıcı - Uyku Kalitenizi ve Düzeninizi Analiz Edin',
  },
  description: {
    en: 'Analyze your sleep cycles, quality score, stage breakdown, and get personalized recommendations. Enter your bedtime and wake time for a comprehensive sleep analysis.',
    tr: 'Uyku döngülerinizi, kalite puanınızı, aşama dağılımınızı analiz edin ve kişiselleştirilmiş öneriler alın. Kapsamlı bir uyku analizi için yatış ve uyanış saatinizi girin.',
  },
  keywords: [
    'sleep cycle calculator',
    'sleep quality',
    'sleep stages',
    'REM sleep',
    'deep sleep',
    'sleep analysis',
    'sleep score',
    'uyku döngüsü hesaplayıcı',
    'uyku kalitesi',
    'uyku aşamaları',
    'REM uyku',
    'derin uyku',
    'uyku analizi',
  ],
  icon: 'BedDouble',
  popular: true,
  featured: false,
  component: SleepCycleCalculator,
};
