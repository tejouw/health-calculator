import { CalculatorMeta } from '@/types/calculator';
import LoveCalculator from './LoveCalculator';

export const loveMeta: CalculatorMeta = {
  id: 'love-calculator',
  category: 'daily-life',
  slug: {
    en: 'love-calculator',
    tr: 'ask-hesaplayici',
  },
  title: {
    en: 'Love Calculator - Test Your Love Compatibility by Name',
    tr: 'Aşk Hesaplayıcı - İsimle Aşk Uyumunuzu Test Edin',
  },
  description: {
    en: 'Calculate love compatibility between two names with our free love calculator. Find out your love match percentage and see how compatible you are with your crush, partner, or friend.',
    tr: 'Ücretsiz aşk hesaplayıcımızla iki isim arasındaki aşk uyumunu hesaplayın. Aşk eşleşme yüzdenizi öğrenin ve hoşlandığınız kişi, partneriniz veya arkadaşınızla ne kadar uyumlu olduğunuzu görün.',
  },
  keywords: [
    'love calculator',
    'love compatibility',
    'love test',
    'love match',
    'name compatibility',
    'relationship calculator',
    'love percentage',
    'crush calculator',
    'soulmate test',
    'aşk hesaplayıcı',
    'aşk uyumu',
    'aşk testi',
    'isim uyumu',
    'sevgili uyumu',
    'aşk yüzdesi',
  ],
  icon: 'Heart',
  popular: true,
  featured: true,
  component: LoveCalculator,
};
