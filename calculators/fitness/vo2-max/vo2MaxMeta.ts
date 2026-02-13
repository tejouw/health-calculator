import { CalculatorMeta } from '@/types/calculator';
import Vo2MaxCalculator from './Vo2MaxCalculator';

export const vo2MaxMeta: CalculatorMeta = {
  id: 'vo2-max-calculator',
  category: 'fitness',
  slug: {
    en: 'vo2-max-calculator',
    tr: 'vo2-max-hesaplayici',
  },
  title: {
    en: 'VO2 Max Calculator - Measure Your Aerobic Fitness',
    tr: 'VO2 Max Hesaplayıcı - Aerobik Kondisyonunuzu Ölçün',
  },
  description: {
    en: 'Calculate your VO2 max using Cooper Test, Rockport Walking Test, or formula-based estimation. Measure cardiovascular fitness and aerobic capacity with scientifically validated methods.',
    tr: 'Cooper Testi, Rockport Yürüyüş Testi veya formül tabanlı tahmin kullanarak VO2 max\'ınızı hesaplayın. Bilimsel olarak doğrulanmış yöntemlerle kardiyovasküler kondisyon ve aerobik kapasiteyi ölçün.',
  },
  keywords: [
    'vo2 max calculator',
    'aerobic capacity',
    'cooper test',
    'rockport walking test',
    'cardiovascular fitness',
    'cardio fitness test',
    'endurance calculator',
    'vo2 max hesaplayıcı',
    'aerobik kapasite',
    'kardiyovasküler kondisyon',
    'dayanıklılık testi',
  ],
  icon: 'Activity',
  popular: true,
  featured: true,
  component: Vo2MaxCalculator,
};
