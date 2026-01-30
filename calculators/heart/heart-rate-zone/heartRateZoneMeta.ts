import { CalculatorMeta } from '@/types/calculator';
import HeartRateZoneCalculator from './HeartRateZoneCalculator';

export const heartRateZoneMeta: CalculatorMeta = {
  id: 'heart-rate-zone-calculator',
  category: 'heart',
  slug: {
    en: 'heart-rate-zone-calculator',
    tr: 'kalp-atisi-bolgesi-hesaplayici',
  },
  title: {
    en: 'Heart Rate Zone Calculator - Find Your Target Heart Rate',
    tr: 'Kalp Atış Hızı Bölgesi Hesaplayıcı - Hedef Kalp Atışınızı Bulun',
  },
  description: {
    en: 'Calculate your target heart rate zones for different exercise intensities. Optimize your cardio workouts, fat burning, and aerobic training.',
    tr: 'Farklı egzersiz yoğunlukları için hedef kalp atış hızı bölgelerinizi hesaplayın. Kardiyovasküler egzersizlerinizi, yağ yakımını ve aerobik antrenmanınızı optimize edin.',
  },
  keywords: [
    'heart rate zone calculator',
    'target heart rate',
    'heart rate zones',
    'cardio zones',
    'max heart rate',
    'fat burning zone',
    'aerobic zone',
    'anaerobic zone',
    'kalp atış hızı hesaplama',
    'hedef kalp atışı',
    'kardiyak bölgeler',
    'yağ yakma bölgesi',
  ],
  icon: 'HeartPulse',
  popular: true,
  featured: true,
  component: HeartRateZoneCalculator,
};
