import { CalculatorMeta } from '@/types/calculator';
import TDEECalculator from './TDEECalculator';

export const tdeeMeta: CalculatorMeta = {
  id: 'tdee-calculator',
  category: 'nutrition',
  slug: {
    en: 'tdee-calculator',
    tr: 'tdee-hesaplayici',
  },
  title: {
    en: 'Free TDEE Calculator - Total Daily Energy Expenditure (2026)',
    tr: 'TDEE Hesaplama (Ücretsiz) - Günlük Enerji Harcaması Hesaplayıcı 2026',
  },
  description: {
    en: 'Calculate your TDEE (Total Daily Energy Expenditure) free. Enter your stats to get BMR + activity-based calorie needs. Personalized goals for weight loss, muscle gain or maintenance using Mifflin-St Jeor equation.',
    tr: 'TDEE (Toplam Günlük Enerji Harcaması) hesaplamanızı ücretsiz yapın. Mifflin-St Jeor denklemiyle BMR ve aktivite bazlı kalori ihtiyacınızı anında öğrenin. Kilo verme ve kas kazanımı hedefleri!',
  },
  keywords: [
    'TDEE calculator',
    'total daily energy expenditure',
    'BMR calculator',
    'calorie calculator',
    'daily calorie needs',
    'maintenance calories',
    'weight loss calories',
    'muscle gain calories',
    'Mifflin-St Jeor',
    'activity level',
    'calorie deficit',
    'calorie surplus',
    'macro calculator',
    'TDEE hesaplayıcı',
    'toplam günlük enerji harcaması',
    'BMR hesaplama',
    'kalori hesaplama',
    'günlük kalori ihtiyacı',
    'bakım kalorileri',
    'kilo verme kalorileri',
    'kas kazanımı kalorileri',
    'aktivite seviyesi',
    'kalori açığı',
    'kalori fazlalığı',
  ],
  icon: 'Gauge',
  popular: true,
  featured: true,
  component: TDEECalculator,
};
