import { CalculatorConfig } from '@/types/calculator';
import FoodCalorieCalculator from './FoodCalorieCalculator';
import { foodCalorieMeta } from './foodCalorieMeta';
import { foodCalorieContent } from './foodCalorieContent';

export const foodCalorieCalculatorConfig: CalculatorConfig = {
  id: 'food-calorie-calculator',
  path: 'food-calorie-calculator',
  category: 'nutrition',
  component: FoodCalorieCalculator,
  meta: foodCalorieMeta,
  content: foodCalorieContent,
  name: {
    en: 'Food Calorie Calculator',
    tr: 'Gıda Kalori Hesaplayıcı',
  },
  description: {
    en: 'Calculate calories and nutritional values for 150+ foods',
    tr: '150+ gıda için kalori ve besin değerlerini hesaplayın',
  },
  icon: 'Calculator',
  featured: true,
  relatedCalculators: [
    'calorie-calculator',
    'macro-calculator',
    'bmr-calculator',
    'tdee-calculator',
  ],
};
