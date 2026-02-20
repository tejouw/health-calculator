import { CalculatorMeta } from '@/types/calculator';
import BodyTypeCalculator from './BodyTypeCalculator';

export const bodyTypeMeta: CalculatorMeta = {
  id: 'body-type-calculator',
  category: 'body-weight',
  slug: {
    en: 'body-type-calculator',
    tr: 'vucut-tipi-hesaplayici',
  },
  title: {
    en: 'Body Type Calculator - Ectomorph, Mesomorph or Endomorph?',
    tr: 'Vücut Tipi Hesaplayıcı - Ektomorf, Mezomorf veya Endomorf?',
  },
  description: {
    en: 'Discover your body type with our free quiz. Find out if you are an Ectomorph, Mesomorph, or Endomorph and get personalized diet and exercise recommendations.',
    tr: 'Ücretsiz testimizle vücut tipinizi keşfedin. Ektomorf, Mezomorf veya Endomorf olduğunuzu öğrenin ve kişiselleştirilmiş diyet ve egzersiz önerileri alın.',
  },
  keywords: [
    'body type calculator',
    'ectomorph mesomorph endomorph',
    'body type quiz',
    'somatotype',
    'what is my body type',
    'vucut tipi hesaplama',
    'ektomorf mezomorf endomorf',
    'vucut tipi testi',
  ],
  icon: 'User',
  popular: true,
  featured: false,
  component: BodyTypeCalculator,
};
