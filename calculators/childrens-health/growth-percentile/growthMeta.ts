import { CalculatorMeta } from '@/types/calculator';
import GrowthPercentileCalculator from './GrowthPercentileCalculator';

export const growthMeta: CalculatorMeta = {
  id: 'growth-percentile-calculator',
  category: 'childrens-health',
  slug: {
    en: 'growth-percentile-calculator',
    tr: 'buyume-persentil-hesaplayici',
  },
  title: {
    en: 'Growth Percentile Calculator - Child Height & Weight Percentiles',
    tr: 'Büyüme Persentil Hesaplayıcı - Çocuk Boy ve Kilo Persentilleri',
  },
  description: {
    en: 'Calculate your child\'s growth percentiles for height, weight, and BMI using WHO/CDC growth charts. Track healthy development and compare to age and gender norms.',
    tr: 'WHO/CDC büyüme çizelgelerini kullanarak çocuğunuzun boy, kilo ve BMI büyüme persentillerini hesaplayın. Sağlıklı gelişimi takip edin ve yaş ve cinsiyet normlarıyla karşılaştırın.',
  },
  keywords: [
    'growth percentile calculator',
    'child growth chart',
    'height percentile',
    'weight percentile',
    'bmi percentile',
    'who growth charts',
    'cdc growth charts',
    'pediatric growth',
    'büyüme persentil hesaplayıcı',
    'çocuk büyüme çizelgesi',
    'boy persentili',
    'kilo persentili',
  ],
  icon: 'Baby',
  popular: true,
  featured: false,
  component: GrowthPercentileCalculator,
};
