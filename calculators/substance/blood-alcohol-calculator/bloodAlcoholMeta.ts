import { CalculatorMeta } from '@/types/calculator';
import BloodAlcoholCalculator from './BloodAlcoholCalculator';

export const bloodAlcoholMeta: CalculatorMeta = {
  id: 'blood-alcohol-calculator',
  category: 'substance',
  slug: {
    en: 'blood-alcohol-calculator',
    tr: 'kan-alkol-hesaplayici',
  },
  title: {
    en: 'Blood Alcohol Calculator (BAC) - Calculate Blood Alcohol Content',
    tr: 'Kan Alkol Hesaplayıcı (KAK) - Kan Alkol İçeriği Hesaplama',
  },
  description: {
    en: 'Calculate your blood alcohol content (BAC) based on drinks consumed, body weight, gender, and time. Uses Widmark Formula to estimate BAC and time until sober. Learn about alcohol impairment levels, legal driving limits, and safety information.',
    tr: 'Tüketilen içecekler, vücut ağırlığı, cinsiyet ve zamana göre kan alkol içeriğinizi (KAK) hesaplayın. BAC\'ı ve ayılana kadar geçen süreyi tahmin etmek için Widmark Formülünü kullanır. Alkol bozulma seviyeleri, yasal sürüş sınırları ve güvenlik bilgileri hakkında bilgi edinin.',
  },
  keywords: [
    'blood alcohol calculator',
    'BAC calculator',
    'blood alcohol content',
    'alcohol impairment calculator',
    'drunk driving calculator',
    'how long until sober',
    'Widmark formula',
    'alcohol metabolism',
    'DUI calculator',
    'breathalyzer estimate',
    'standard drinks calculator',
    'alcohol poisoning risk',
    'legal BAC limit',
    'kan alkol hesaplayıcı',
    'KAK hesaplayıcı',
    'alkol bozulması',
    'sarhoş sürüş',
    'ne zaman ayılırım',
    'alkol metabolizması',
  ],
  icon: 'Wine',
  popular: true,
  featured: false,
  component: BloodAlcoholCalculator,
};
