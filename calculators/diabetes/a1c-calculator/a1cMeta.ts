import { CalculatorMeta } from '@/types/calculator';
import A1CCalculator from './A1CCalculator';

export const a1cMeta: CalculatorMeta = {
  id: 'a1c-calculator',
  category: 'diabetes',
  slug: {
    en: 'a1c-calculator',
    tr: 'a1c-hesaplayici',
  },
  title: {
    en: 'A1C Calculator - Convert A1C to Average Blood Glucose',
    tr: 'A1C Hesaplayıcı - A1C\'yi Ortalama Kan Şekerine Dönüştürün',
  },
  description: {
    en: 'Convert your A1C (HbA1c) value to estimated average glucose (eAG). Understand your diabetes control and blood sugar levels.',
    tr: 'A1C (HbA1c) değerinizi tahmini ortalama glukoza (eAG) dönüştürün. Diyabet kontrolünüzü ve kan şekeri seviyelerinizi anlayın.',
  },
  keywords: [
    'a1c calculator',
    'hba1c calculator',
    'a1c to glucose',
    'diabetes calculator',
    'eag calculator',
    'a1c hesaplayıcı',
    'diyabet hesaplayıcı',
  ],
  icon: 'TestTube2',
  popular: true,
  featured: false,
  component: A1CCalculator,
};
