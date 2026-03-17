import { CalculatorMeta } from '@/types/calculator';
import IdealBodyMeasurementsCalculator from './IdealBodyMeasurementsCalculator';

export const idealBodyMeasurementsMeta: CalculatorMeta = {
  id: 'ideal-body-measurements-calculator',
  category: 'body-weight',
  slug: {
    en: 'ideal-body-measurements-calculator',
    tr: 'ideal-vucut-olculeri-hesaplayici',
  },
  title: {
    en: 'Ideal Body Measurements Calculator',
    tr: 'İdeal Vücut Ölçüleri Hesaplayıcı',
  },
  description: {
    en: 'Calculate your ideal body measurements based on your height and body frame. Find ideal chest, waist, hips, biceps, and more using proven scientific formulas.',
    tr: 'Boyunuza ve vücut yapınıza göre ideal vücut ölçülerinizi hesaplayın. Bilimsel formüllerle ideal göğüs, bel, kalça, pazı ve diğer ölçülerinizi öğrenin.',
  },
  keywords: [
    'ideal body measurements',
    'body proportions calculator',
    'ideal chest size',
    'ideal waist size',
    'body measurements',
    'ideal vücut ölçüleri',
    'vücut oranları hesaplama',
    'ideal bel ölçüsü',
    'ideal göğüs ölçüsü',
    'vücut ölçüleri hesaplayıcı',
  ],
  icon: 'Ruler',
  popular: false,
  featured: false,
  component: IdealBodyMeasurementsCalculator,
};
