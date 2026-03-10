import { CalculatorMeta } from '@/types/calculator';
import DailyStepGoalCalculator from './DailyStepGoalCalculator';

export const dailyStepGoalMeta: CalculatorMeta = {
  id: 'daily-step-goal-calculator',
  category: 'fitness',
  slug: {
    en: 'daily-step-goal-calculator',
    tr: 'gunluk-adim-hedefi-hesaplayici',
  },
  title: {
    en: 'Daily Step Goal Calculator - How Many Steps Should You Walk?',
    tr: 'Günlük Adım Hedefi Hesaplayıcı - Günde Kaç Adım Atmalısınız?',
  },
  description: {
    en: 'Calculate your personalized daily step goal based on age, weight, fitness level, and health goals. Find out how many steps you should walk per day for optimal health.',
    tr: 'Yaşınıza, kilonuza, fitness seviyenize ve sağlık hedeflerinize göre kişiselleştirilmiş günlük adım hedefinizi hesaplayın. Optimal sağlık için günde kaç adım atmanız gerektiğini öğrenin.',
  },
  keywords: [
    'daily step goal calculator',
    'how many steps per day',
    'step counter goal',
    'walking steps calculator',
    'steps for weight loss',
    'daily walking goal',
    'günlük adım hedefi',
    'günde kaç adım',
    'adım hedefi hesaplama',
    'yürüyüş adım sayısı',
    'kilo vermek için adım',
  ],
  icon: 'Footprints',
  popular: true,
  featured: false,
  component: DailyStepGoalCalculator,
};
