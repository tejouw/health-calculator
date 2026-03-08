import { CalculatorMeta } from '@/types/calculator';
import SmokingCessationCalculator from './SmokingCessationCalculator';

export const smokingCessationMeta: CalculatorMeta = {
  id: 'smoking-cessation-calculator',
  category: 'substance',
  slug: {
    en: 'smoking-cessation-calculator',
    tr: 'sigara-birakma-hesaplayici',
  },
  title: {
    en: 'Smoking Cessation Calculator - Track Health & Savings After Quitting',
    tr: 'Sigara Bırakma Hesaplayıcı - Bıraktıktan Sonra Sağlık ve Tasarruf Takibi',
  },
  description: {
    en: 'Calculate how much money you save and track your health improvements after quitting smoking. See your health milestones, cigarettes not smoked, tar avoided, and life days gained.',
    tr: 'Sigarayı bıraktıktan sonra ne kadar para biriktirdiğinizi hesaplayın ve sağlık iyileşmelerinizi takip edin. Sağlık dönüm noktalarınızı, içmediğiniz sigaraları, kaçındığınız katranı ve kazandığınız yaşam günlerini görün.',
  },
  keywords: [
    'smoking cessation calculator',
    'quit smoking calculator',
    'quit smoking savings',
    'smoking health benefits',
    'quit smoking timeline',
    'cigarette cost calculator',
    'smoking cessation benefits',
    'sigara bırakma hesaplayıcı',
    'sigara bırakma faydaları',
    'sigara tasarruf hesaplama',
    'sigara bırakma zaman çizelgesi',
    'sigara maliyeti hesaplama',
    'sigarayı bırakınca ne olur',
    'sigara bırakma süreci',
  ],
  icon: 'Cigarette',
  popular: true,
  featured: false,
  component: SmokingCessationCalculator,
};
