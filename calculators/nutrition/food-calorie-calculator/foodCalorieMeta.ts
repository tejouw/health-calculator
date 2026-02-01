import { CalculatorMeta } from '@/types/calculator';
import FoodCalorieCalculator from './FoodCalorieCalculator';

export const foodCalorieMeta: CalculatorMeta = {
  id: 'food-calorie-calculator',
  category: 'nutrition',
  slug: {
    en: 'food-calorie-calculator',
    tr: 'gida-kalori-hesaplama',
  },
  title: {
    en: 'Food Calorie Calculator - Track Nutrition & Calories | Free Tool',
    tr: 'Gıda Kalori Hesaplayıcı - Beslenme ve Kalori Takibi | Ücretsiz Araç',
  },
  description: {
    en: 'Calculate calories, protein, carbs, fat, and fiber for 150+ foods. Comprehensive food calorie calculator with detailed nutritional information for fruits, vegetables, meats, grains, and more. Free nutrition tracking tool.',
    tr: '150+ gıda için kalori, protein, karbonhidrat, yağ ve lif hesaplayın. Meyveler, sebzeler, etler, tahıllar ve daha fazlası için detaylı beslenme bilgileri içeren kapsamlı gıda kalori hesaplayıcı. Ücretsiz beslenme takip aracı.',
  },
  keywords: [
    'food calorie calculator',
    'nutrition calculator',
    'calorie tracker',
    'food nutrition facts',
    'macro calculator',
    'protein calculator',
    'carb calculator',
    'fat calculator',
    'fiber calculator',
    'food database',
    'nutrition tracking',
    'calorie counting',
    'meal planner',
    'diet calculator',
    'gıda kalori hesaplayıcı',
    'beslenme hesaplayıcı',
    'kalori takip',
    'gıda besin değerleri',
    'makro hesaplayıcı',
  ],
  icon: 'Calculator',
  popular: true,
  featured: true,
  component: FoodCalorieCalculator,
};
