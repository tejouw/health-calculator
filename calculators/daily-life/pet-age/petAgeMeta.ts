import { CalculatorMeta } from '@/types/calculator';
import PetAgeCalculator from './PetAgeCalculator';

export const petAgeMeta: CalculatorMeta = {
  id: 'pet-age-calculator',
  category: 'daily-life',
  slug: {
    en: 'pet-age-calculator',
    tr: 'evcil-hayvan-yasi-hesaplayici',
  },
  title: {
    en: 'Pet Age Calculator - Calculate Dog & Cat Age in Human Years',
    tr: 'Evcil Hayvan Yaşı Hesaplayıcı - Köpek & Kedi İnsan Yaşı Hesaplama',
  },
  description: {
    en: 'Calculate your dog or cat age in human years with our free, accurate pet age calculator. Science-based formulas account for breed size. Get instant results with health tips!',
    tr: 'Köpeğinizin veya kedinizin insan yıllarında kaç yaşında olduğunu ücretsiz, doğru evcil hayvan yaşı hesaplayıcımızla öğrenin. Bilime dayalı formüller, ırk büyüklüğünü dikkate alır!',
  },
  keywords: [
    'pet age calculator',
    'dog age calculator',
    'cat age calculator',
    'dog years to human years',
    'cat years to human years',
    'pet age in human years',
    'how old is my dog',
    'how old is my cat',
    'dog age chart',
    'cat age chart',
    'evcil hayvan yaşı',
    'köpek yaşı hesaplama',
    'kedi yaşı hesaplama',
    'köpek insan yaşı',
    'kedi insan yaşı',
  ],
  icon: 'PawPrint',
  popular: true,
  featured: true,
  component: PetAgeCalculator,
};
