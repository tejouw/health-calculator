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
    en: 'Calorie Calculator - Calculate Your Daily Calorie Needs',
    tr: 'Kalori Hesaplayıcı - Günlük Kalori İhtiyacınızı Hesaplayın',
  },
  description: {
    en: 'Free calorie calculator to determine your daily caloric needs based on age, gender, height, weight, and activity level. Calculate BMR, TDEE, and personalized calorie goals for weight loss, maintenance, or muscle gain.',
    tr: 'Yaş, cinsiyet, boy, kilo ve aktivite seviyenize göre günlük kalori ihtiyacınızı belirleyin. BMR, TDEE hesaplayın ve kilo verme, koruma veya kas kazanımı için kişiselleştirilmiş kalori hedefleri oluşturun.',
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
