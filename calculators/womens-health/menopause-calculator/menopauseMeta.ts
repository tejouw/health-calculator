import { CalculatorMeta } from '@/types/calculator';
import MenopauseCalculator from './MenopauseCalculator';

export const menopauseMeta: CalculatorMeta = {
  id: 'menopause-calculator',
  category: 'womens-health',
  slug: {
    en: 'menopause-calculator',
    tr: 'menopoz-hesaplama',
  },
  title: {
    en: 'Menopause Calculator - Estimate Your Menopause Age & Stage',
    tr: 'Menopoz Hesaplama - Menopoz Yaşı ve Dönemi Tahmincisi',
  },
  description: {
    en: 'Estimate your menopause age based on family history, smoking, BMI, menarche age and pregnancies. Free science-backed menopause calculator with stage, years remaining and personalized insights.',
    tr: 'Aile geçmişi, sigara kullanımı, VKİ, ilk adet yaşı ve hamilelik sayısına göre menopoz yaşınızı tahmin edin. Ücretsiz bilimsel menopoz hesaplama aracı; dönem, kalan yıl ve kişiselleştirilmiş öneriler sunar.',
  },
  keywords: [
    'menopause calculator',
    'menopause age calculator',
    'when will i go through menopause',
    'perimenopause calculator',
    'menopause predictor',
    'early menopause calculator',
    'menopause stage',
    'menopause age',
    'menopoz hesaplama',
    'menopoz yaşı hesaplama',
    'menopoza kaç yıl kaldı',
    'perimenopoz',
    'erken menopoz',
    'menopoz dönemi',
    'menopoz testi',
    'menopoz belirtileri',
  ],
  icon: 'Sparkles',
  popular: true,
  featured: false,
  component: MenopauseCalculator,
};
