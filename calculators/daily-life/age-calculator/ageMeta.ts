import { CalculatorMeta } from '@/types/calculator';
import AgeCalculator from './AgeCalculator';

export const ageMeta: CalculatorMeta = {
  id: 'age-calculator',
  category: 'daily-life',
  slug: {
    en: 'age-calculator',
    tr: 'yas-hesaplayici',
  },
  title: {
    en: 'Age Calculator - Calculate Your Exact Age in Years, Months & Days',
    tr: 'Yaş Hesaplayıcı - Tam Yaşınızı Yıl, Ay ve Gün Olarak Hesaplayın',
  },
  description: {
    en: 'Calculate your exact age in years, months, and days. Find out your zodiac sign, next birthday countdown, total days lived, and more fun facts about your birth date.',
    tr: 'Tam yaşınızı yıl, ay ve gün olarak hesaplayın. Burç işaretinizi, sonraki doğum gününüze kalan süreyi, toplam yaşadığınız günleri ve doğum tarihiniz hakkında daha fazla eğlenceli bilgi öğrenin.',
  },
  keywords: [
    'age calculator',
    'birthday calculator',
    'how old am i',
    'exact age',
    'days until birthday',
    'zodiac sign',
    'yaş hesaplayıcı',
    'yaş hesaplama',
    'kaç yaşındayım',
    'doğum günü hesaplama',
    'burç hesaplama',
  ],
  icon: 'Calendar',
  popular: true,
  featured: true,
  component: AgeCalculator,
};
