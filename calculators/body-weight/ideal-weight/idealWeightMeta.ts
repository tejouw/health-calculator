import { CalculatorMeta } from '@/types/calculator';
import IdealWeightCalculator from './IdealWeightCalculator';

export const idealWeightMeta: CalculatorMeta = {
  id: 'ideal-weight-calculator',
  category: 'body-weight',
  slug: {
    en: 'ideal-weight-calculator',
    tr: 'ideal-kilo-hesaplayici',
  },
  title: {
    en: 'Ideal Weight Calculator - Calculate Your Ideal Body Weight',
    tr: 'İdeal Kilo Hesaplayıcı - İdeal Vücut Kilonuzu Hesaplayın',
  },
  description: {
    en: 'Free ideal weight calculator using multiple scientific formulas (Hamwi, Devine, Robinson, Miller). Calculate your ideal body weight based on height, gender, and body frame. Get personalized healthy weight range recommendations and BMI-based targets for optimal health.',
    tr: 'Birden fazla bilimsel formül (Hamwi, Devine, Robinson, Miller) kullanan ücretsiz ideal kilo hesaplayıcı. Boy, cinsiyet ve vücut yapınıza göre ideal vücut kilonuzu hesaplayın. Optimal sağlık için kişiselleştirilmiş sağlıklı kilo aralığı önerileri ve BMI bazlı hedefler alın.',
  },
  keywords: [
    'ideal weight calculator',
    'ideal body weight',
    'healthy weight calculator',
    'target weight',
    'perfect weight',
    'IBW calculator',
    'Hamwi formula',
    'Devine formula',
    'Robinson formula',
    'Miller formula',
    'weight goal calculator',
    'healthy weight range',
    'body frame weight',
    'ideal kilo hesaplayıcı',
    'ideal vücut ağırlığı',
    'sağlıklı kilo',
    'hedef kilo',
    'ideal boy kilo oranı',
    'vücut ağırlığı hesaplama',
  ],
  icon: 'Target',
  popular: true,
  featured: true,
  component: IdealWeightCalculator,
};
