import { CalculatorMeta } from '@/types/calculator';
import CaloriesBurnedCalculator from './CaloriesBurnedCalculator';

export const caloriesBurnedMeta: CalculatorMeta = {
  id: 'calories-burned-calculator',
  category: 'fitness',
  slug: {
    en: 'calories-burned-calculator',
    tr: 'yakilan-kalori-hesaplayici',
  },
  title: {
    en: 'Calories Burned Calculator - Exercise Calorie Counter',
    tr: 'Yakılan Kalori Hesaplayıcı - Egzersiz Kalori Sayacı',
  },
  description: {
    en: 'Calculate calories burned during 60+ activities including running, cycling, swimming, gym workouts, and daily activities. Uses scientifically validated MET values for accurate estimates.',
    tr: 'Koşu, bisiklet, yüzme, spor salonu antrenmanları ve günlük aktiviteler dahil 60\'tan fazla aktivitede yakılan kaloriyi hesaplayın. Doğru tahminler için bilimsel olarak doğrulanmış MET değerlerini kullanır.',
  },
  keywords: [
    'calories burned calculator',
    'exercise calorie calculator',
    'calorie counter',
    'MET calculator',
    'activity calorie burn',
    'workout calories',
    'running calories',
    'cycling calories',
    'yakilan kalori hesaplayici',
    'egzersiz kalori hesaplama',
    'kalori sayaci',
    'aktivite kalori yakimi',
  ],
  icon: 'Flame',
  popular: true,
  featured: true,
  component: CaloriesBurnedCalculator,
};
