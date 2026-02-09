import { CalculatorMeta } from '@/types/calculator';
import CaffeineCalculator from './CaffeineCalculator';

export const caffeineMeta: CalculatorMeta = {
  id: 'caffeine-calculator',
  category: 'substance',
  slug: {
    en: 'caffeine-calculator',
    tr: 'kafein-hesaplayici',
  },
  title: {
    en: 'Caffeine Calculator - Track Daily Caffeine Intake & Effects',
    tr: 'Kafein Hesaplayıcı - Günlük Kafein Alımı ve Etkilerini Takip Et',
  },
  description: {
    en: 'Calculate your daily caffeine intake from coffee, tea, energy drinks, and other sources. Track caffeine levels in your body, get personalized safety recommendations, and learn optimal timing for caffeine consumption to improve sleep quality.',
    tr: 'Kahve, çay, enerji içecekleri ve diğer kaynaklardan günlük kafein alımınızı hesaplayın. Vücudunuzdaki kafein seviyelerini takip edin, kişiselleştirilmiş güvenlik önerileri alın ve uyku kalitenizi artırmak için optimum kafein tüketim zamanlamasını öğrenin.',
  },
  keywords: [
    'caffeine calculator',
    'daily caffeine intake',
    'caffeine tracker',
    'coffee caffeine content',
    'how much caffeine',
    'caffeine safe limit',
    'caffeine half life',
    'caffeine and sleep',
    'energy drink caffeine',
    'tea caffeine',
    'caffeine pregnancy',
    'caffeine metabolism',
    'kafein hesaplayıcı',
    'günlük kafein',
    'kahve kafein',
    'kafein limiti',
    'kafein uyku',
    'enerji içeceği kafein',
    'hamilelik kafein',
  ],
  icon: 'Coffee',
  popular: true,
  featured: false,
  component: CaffeineCalculator,
};
