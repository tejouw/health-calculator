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
    en: 'Free Ideal Weight Calculator - Find Your Perfect Weight by Height',
    tr: 'İdeal Kilo Hesaplama (Ücretsiz) - Boyunuza Göre İdeal Kilonuz 2026',
  },
  description: {
    en: 'Find your ideal body weight free using 4 scientific formulas (Hamwi, Devine, Robinson, Miller). Enter height and gender to get your healthy weight range instantly. Personalized BMI-based targets included!',
    tr: 'Boyunuza ve cinsiyetinize göre ideal kilonuzu 4 bilimsel formülle ücretsiz hesaplayın. Sağlıklı kilo aralığınızı ve BMI bazlı hedeflerinizi anında öğrenin!',
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
