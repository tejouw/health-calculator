import { CalculatorMeta } from '@/types/calculator';
import BiologicalAgeCalculator from './BiologicalAgeCalculator';

export const biologicalAgeMeta: CalculatorMeta = {
  id: 'biological-age-calculator',
  category: 'body-weight',
  slug: {
    en: 'biological-age-calculator',
    tr: 'biyolojik-yas-hesaplayici',
  },
  title: {
    en: 'Biological Age Calculator - Calculate Your True Age',
    tr: 'Biyolojik Yaş Hesaplayıcı - Gerçek Yaşınızı Hesaplayın',
  },
  description: {
    en: 'Calculate your biological age based on lifestyle factors. Discover how your habits affect aging and get personalized recommendations to reverse biological aging.',
    tr: 'Yaşam tarzı faktörlerine göre biyolojik yaşınızı hesaplayın. Alışkanlıklarınızın yaşlanmayı nasıl etkilediğini keşfedin ve biyolojik yaşı tersine çevirmek için kişisel öneriler alın.',
  },
  keywords: [
    'biological age calculator',
    'real age calculator',
    'aging calculator',
    'biological age test',
    'how old am i really',
    'epigenetic age',
    'phenotypic age',
    'reverse aging calculator',
    'anti-aging calculator',
    'lifestyle age calculator',
    'biyolojik yaş hesaplayıcı',
    'gerçek yaş hesaplama',
    'yaşlanma hesaplayıcı',
    'biyolojik yaş testi',
  ],
  icon: 'TrendingUp',
  popular: true,
  featured: true,
  component: BiologicalAgeCalculator,
};
