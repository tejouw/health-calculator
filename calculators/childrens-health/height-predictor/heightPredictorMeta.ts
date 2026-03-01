import { CalculatorMeta } from '@/types/calculator';
import HeightPredictorCalculator from './HeightPredictorCalculator';

export const heightPredictorMeta: CalculatorMeta = {
  id: 'height-predictor-calculator',
  category: 'childrens-health',
  slug: {
    en: 'height-predictor-calculator',
    tr: 'cocuk-boy-tahmini-hesaplayici',
  },
  title: {
    en: 'Child Height Predictor - Estimate Adult Height',
    tr: 'Çocuk Boy Tahmini - Yetişkin Boy Hesaplama',
  },
  description: {
    en: 'Predict your child\'s adult height based on parents\' heights using the scientifically proven Mid-Parental Height method. Get accurate height estimates with growth tips.',
    tr: 'Bilimsel Orta Ebeveyn Boyu yöntemiyle anne ve baba boyuna göre çocuğunuzun yetişkin boyunu tahmin edin. Büyüme önerileriyle doğru boy tahminleri alın.',
  },
  keywords: [
    'child height predictor',
    'height calculator',
    'predict adult height',
    'mid-parental height',
    'growth predictor',
    'çocuk boy tahmini',
    'boy hesaplama',
    'çocuğum ne kadar uzar',
    'yetişkin boy tahmini',
    'genetik boy hesaplama',
  ],
  icon: 'Ruler',
  popular: false,
  featured: false,
  component: HeightPredictorCalculator,
};
