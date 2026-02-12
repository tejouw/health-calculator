import { CalculatorMeta } from '@/types/calculator';
import LifeExpectancyCalculator from './LifeExpectancyCalculator';

export const lifeExpectancyMeta: CalculatorMeta = {
  id: 'life-expectancy-calculator',
  category: 'medical',
  slug: {
    en: 'life-expectancy-calculator',
    tr: 'yasam-beklentisi-hesaplama',
  },
  title: {
    en: 'Life Expectancy Calculator - How Long Will You Live?',
    tr: 'Yaşam Beklentisi Hesaplama - Ne Kadar Yaşayacaksınız?',
  },
  description: {
    en: 'Calculate your life expectancy based on lifestyle, health factors, and demographics. Get personalized longevity insights and actionable recommendations to add years to your life.',
    tr: 'Yaşam tarzı, sağlık faktörleri ve demografiye göre yaşam beklentinizi hesaplayın. Kişiselleştirilmiş ömür içgörüleri ve yaşamınıza yıllar eklemek için öneriler alın.',
  },
  keywords: [
    'life expectancy calculator',
    'how long will I live',
    'longevity calculator',
    'lifespan prediction',
    'mortality calculator',
    'health life expectancy',
    'living longer',
    'yasam beklentisi',
    'omur hesaplama',
  ],
  icon: 'Hourglass',
  popular: true,
  featured: true,
  component: LifeExpectancyCalculator,
};
