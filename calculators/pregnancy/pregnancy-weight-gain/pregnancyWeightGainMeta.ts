import { CalculatorMeta } from '@/types/calculator';
import PregnancyWeightGainCalculator from './PregnancyWeightGainCalculator';

export const pregnancyWeightGainMeta: CalculatorMeta = {
  id: 'pregnancy-weight-gain-calculator',
  category: 'pregnancy',
  slug: {
    en: 'pregnancy-weight-gain-calculator',
    tr: 'hamilelik-kilo-alimi-hesaplayici',
  },
  title: {
    en: 'Pregnancy Weight Gain Calculator - Healthy Weight Tracker',
    tr: 'Hamilelik Kilo Alımı Hesaplayıcı - Sağlıklı Kilo Takibi',
  },
  description: {
    en: 'Track your pregnancy weight gain with IOM/ACOG guidelines. Get personalized recommendations based on your pre-pregnancy BMI, current week, and whether you are expecting twins.',
    tr: 'IOM/ACOG kılavuzlarına göre hamilelik kilo alımınızı takip edin. Hamilelik öncesi VKİ, mevcut hafta ve ikiz beklentinize göre kişiselleştirilmiş öneriler alın.',
  },
  keywords: [
    'pregnancy weight gain calculator',
    'pregnancy weight tracker',
    'healthy weight gain pregnancy',
    'pregnancy BMI calculator',
    'trimester weight gain',
    'IOM weight gain guidelines',
    'hamilelik kilo alımı hesaplama',
    'hamilelik kilo takibi',
    'gebelik kilo alımı',
    'trimester kilo artışı',
  ],
  icon: 'Baby',
  popular: true,
  component: PregnancyWeightGainCalculator,
};
