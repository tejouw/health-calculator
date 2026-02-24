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
    tr: 'Uyku Dongusu Hesaplayici - Uyku Kalitenizi ve Duzeninizi Analiz Edin',
  },
  description: {
    en: 'Analyze your sleep cycles, quality score, stage breakdown, and get personalized recommendations. Enter your bedtime and wake time for a comprehensive sleep analysis.',
    tr: 'Uyku dongulerinizi, kalite puaninizi, asama dagiliminizi analiz edin ve kisisellestirilmis oneriler alin. Kapsamli bir uyku analizi icin yatis ve uyanis saatinizi girin.',
  },
  keywords: [
    'sleep cycle calculator',
    'sleep quality',
    'sleep stages',
    'REM sleep',
    'deep sleep',
    'sleep analysis',
    'sleep score',
    'uyku dongusu hesaplayici',
    'uyku kalitesi',
    'uyku asamalari',
    'REM uyku',
    'derin uyku',
    'uyku analizi',
  ],
  icon: 'BedDouble',
  popular: true,
  featured: false,
  component: SleepCycleCalculator,
};
