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
    en: 'TDEE Calculator - Total Daily Energy Expenditure Calculator',
    tr: 'TDEE Hesaplayıcı - Toplam Günlük Enerji Harcaması Hesaplayıcı',
  },
  description: {
    en: 'Free TDEE calculator to determine your total daily energy expenditure based on BMR, age, gender, weight, height, and activity level. Calculate personalized calorie goals for weight loss, muscle gain, or maintenance with accurate Mifflin-St Jeor equation.',
    tr: 'BMR, yaş, cinsiyet, kilo, boy ve aktivite seviyenize göre toplam günlük enerji harcamanızı belirleyin. Doğru Mifflin-St Jeor denklemi ile kilo verme, kas kazanımı veya kilo koruma için kişiselleştirilmiş kalori hedefleri hesaplayın.',
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
  icon: 'Flame',
  popular: true,
  featured: true,
  component: TDEECalculator,
};
