import { CalculatorMeta } from '@/types/calculator';
import CalorieCalculator from './CalorieCalculator';

export const calorieMeta: CalculatorMeta = {
  id: 'calorie-calculator',
  category: 'nutrition',
  slug: {
    en: 'calorie-calculator',
    tr: 'kalori-hesaplayici',
  },
  title: {
    en: 'Free Calorie Calculator - Daily Calorie Needs for Weight Loss & Gain',
    tr: 'Kalori Hesaplama (Ücretsiz) - Günlük Kalori İhtiyacı Hesaplayıcı 2026',
  },
  description: {
    en: 'Calculate your daily calorie needs free. Enter age, weight, height and activity level to get personalized BMR and TDEE results. Custom goals for weight loss, maintenance or muscle gain — instant results!',
    tr: 'Günlük kalori ihtiyacınızı ücretsiz hesaplayın. Yaş, kilo, boy ve aktivite seviyenizi girin; kilo verme, koruma veya kas kazanımı için kişisel BMR ve TDEE sonuçlarınızı anında alın!',
  },
  keywords: [
    'calorie calculator',
    'daily calorie needs',
    'TDEE calculator',
    'BMR calculator',
    'calorie deficit',
    'weight loss calories',
    'maintenance calories',
    'bulking calories',
    'kalori hesaplayıcı',
    'günlük kalori',
    'TDEE hesaplama',
    'BMR hesaplama',
    'kilo verme kalorileri',
    'bakım kalorileri',
  ],
  icon: 'Flame',
  popular: true,
  featured: true,
  component: CalorieCalculator,
};
