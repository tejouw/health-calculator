import { CalculatorMeta } from '@/types/calculator';
import FetalWeightCalculator from './FetalWeightCalculator';

export const fetalWeightMeta: CalculatorMeta = {
  id: 'fetal-weight-calculator',
  category: 'pregnancy',
  slug: {
    en: 'fetal-weight-calculator',
    tr: 'fetus-agirlik-hesaplama',
  },
  title: {
    en: 'Fetal Weight Calculator - Estimate Baby Weight by Week',
    tr: 'Fetüs Ağırlık Hesaplama - Haftalara Göre Bebek Kilosu',
  },
  description: {
    en: 'Calculate your baby\'s estimated weight during pregnancy by gestational week. Uses WHO growth charts and Hadlock formula for accurate fetal weight estimation with percentile comparison.',
    tr: 'Hamilelik haftasına göre bebeğinizin tahmini ağırlığını hesaplayın. WHO büyüme grafikleri ve Hadlock formülü ile doğru fetüs ağırlık tahmini ve persentil karşılaştırması.',
  },
  keywords: [
    'fetal weight calculator',
    'baby weight by week',
    'estimated fetal weight',
    'fetal growth chart',
    'hadlock formula',
    'baby size by week',
    'pregnancy weight tracker',
    'fetal weight percentile',
    'fetüs ağırlık hesaplama',
    'bebek kilosu haftalara göre',
    'tahmini bebek ağırlığı',
    'fetüs büyüme tablosu',
    'hamilelik hafta kilo',
    'bebek gelişimi',
  ],
  icon: 'Baby',
  popular: true,
  featured: false,
  component: FetalWeightCalculator,
};
