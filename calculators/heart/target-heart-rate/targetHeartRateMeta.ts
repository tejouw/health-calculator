import { CalculatorMeta } from '@/types/calculator';
import TargetHeartRateCalculator from './TargetHeartRateCalculator';

export const targetHeartRateMeta: CalculatorMeta = {
  id: 'target-heart-rate-calculator',
  category: 'heart',
  slug: {
    en: 'target-heart-rate-calculator',
    tr: 'hedef-kalp-atisi-hesaplayici',
  },
  title: {
    en: 'Target Heart Rate Calculator - Find Your Ideal Training Zone',
    tr: 'Hedef Kalp Atış Hızı Hesaplayıcı - İdeal Antrenman Bölgenizi Bulun',
  },
  description: {
    en: 'Calculate your target heart rate for exercise based on age, fitness level, and goals. Find your ideal training zone for fat burning, cardio, endurance, or performance.',
    tr: 'Yaşınıza, kondisyon seviyenize ve hedeflerinize göre egzersiz için hedef kalp atış hızınızı hesaplayın. Yağ yakma, kardio, dayanıklılık veya performans için ideal antrenman bölgenizi bulun.',
  },
  keywords: [
    'target heart rate calculator',
    'target heart rate',
    'training heart rate',
    'exercise heart rate',
    'ideal heart rate for exercise',
    'fat burning heart rate',
    'cardio heart rate zone',
    'hedef kalp atış hızı',
    'hedef kalp atışı hesaplama',
    'egzersiz kalp atış hızı',
    'antrenman kalp hızı',
    'yağ yakma kalp atışı',
  ],
  icon: 'Target',
  popular: true,
  featured: false,
  component: TargetHeartRateCalculator,
};
