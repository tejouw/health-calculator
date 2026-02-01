import { CalculatorMeta } from '@/types/calculator';
import BloodSugarConverter from './BloodSugarConverter';

export const bloodSugarMeta: CalculatorMeta = {
  id: 'blood-sugar-converter',
  category: 'diabetes',
  slug: {
    en: 'blood-sugar-converter',
    tr: 'kan-sekeri-donusturucu',
  },
  title: {
    en: 'Blood Sugar Converter - mg/dL to mmol/L',
    tr: 'Kan Şekeri Dönüştürücü - mg/dL\'den mmol/L\'ye',
  },
  description: {
    en: 'Convert blood glucose levels between mg/dL and mmol/L. Understand your blood sugar readings with reference ranges.',
    tr: 'Kan glukozu seviyelerini mg/dL ve mmol/L arasında dönüştürün. Referans aralıklarla kan şekeri okumalarınızı anlayın.',
  },
  keywords: [
    'blood sugar converter',
    'glucose converter',
    'mg/dl to mmol/l',
    'blood glucose',
    'diabetes converter',
    'kan şekeri dönüştürücü',
    'glukoz dönüştürücü',
  ],
  icon: 'Droplet',
  popular: true,
  featured: false,
  component: BloodSugarConverter,
};
