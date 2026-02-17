import { CalculatorMeta } from '@/types/calculator';
import GAD7Calculator from './GAD7Calculator';

export const gad7Meta: CalculatorMeta = {
  id: 'gad7-calculator',
  category: 'mental-health',
  slug: {
    en: 'gad7-anxiety-calculator',
    tr: 'gad7-anksiyete-testi',
  },
  title: {
    en: 'GAD-7 Anxiety Test - Generalized Anxiety Disorder Screening',
    tr: 'GAD-7 Anksiyete Testi - Yayg\u0131n Anksiyete Bozuklu\u011fu Taramas\u0131',
  },
  description: {
    en: 'Take the GAD-7 anxiety test to screen for generalized anxiety disorder. This validated 7-question assessment measures your anxiety severity level.',
    tr: 'Yayg\u0131n anksiyete bozuklu\u011fu taramas\u0131 i\u00e7in GAD-7 anksiyete testini yap\u0131n. Bu do\u011frulanm\u0131\u015f 7 soruluk de\u011ferlendirme anksiyete \u015fiddet d\u00fczeyinizi \u00f6l\u00e7er.',
  },
  keywords: [
    'gad-7',
    'anxiety test',
    'anxiety calculator',
    'generalized anxiety disorder',
    'anxiety screening',
    'mental health test',
    'anksiyete testi',
    'gad-7 testi',
    'anksiyete hesaplama',
    'kayg\u0131 testi',
  ],
  icon: 'Brain',
  popular: true,
  featured: false,
  component: GAD7Calculator,
};
