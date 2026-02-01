import { CalculatorMeta } from '@/types/calculator';
import RunningPaceCalculator from './RunningPaceCalculator';

export const runningPaceMeta: CalculatorMeta = {
  id: 'running-pace-calculator',
  category: 'fitness',
  slug: {
    en: 'running-pace-calculator',
    tr: 'kosu-temposu-hesaplama',
  },
  title: {
    en: 'Running Pace Calculator - Calculate Your Running Speed',
    tr: 'Koşu Temposu Hesaplama - Koşu Hızınızı Hesaplayın',
  },
  description: {
    en: 'Calculate your running pace, speed, and split times for any distance. Perfect for marathon training and race planning.',
    tr: 'Herhangi bir mesafe için koşu temponu, hızı ve bölme sürelerini hesaplayın. Maraton antrenmanı ve yarış planlaması için mükemmel.',
  },
  keywords: [
    'running pace calculator',
    'pace calculator',
    'running speed',
    'split times',
    'marathon pace',
    'koşu temposu',
    'tempo hesaplama',
    'koşu hızı',
  ],
  icon: 'Timer',
  popular: true,
  featured: false,
  component: RunningPaceCalculator,
};
