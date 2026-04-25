import { CalculatorMeta } from '@/types/calculator';
import MAPCalculator from './MAPCalculator';

export const mapMeta: CalculatorMeta = {
  id: 'mean-arterial-pressure-calculator',
  category: 'heart',
  slug: {
    en: 'mean-arterial-pressure-calculator',
    tr: 'ortalama-arter-basinci-hesaplayici',
  },
  title: {
    en: 'Mean Arterial Pressure (MAP) Calculator - Free Online MAP Tool',
    tr: 'Ortalama Arter Basıncı (MAP) Hesaplayıcı - Ücretsiz Online MAP Aracı',
  },
  description: {
    en: 'Calculate your Mean Arterial Pressure (MAP) instantly with our free online calculator. Enter systolic and diastolic blood pressure to find MAP and pulse pressure with clinical interpretation based on AHA guidelines.',
    tr: 'Ücretsiz online hesaplayıcımızla Ortalama Arter Basıncınızı (MAP) anında hesaplayın. Sistolik ve diyastolik tansiyon değerlerinizi girerek MAP ve nabız basıncınızı klinik yoruma göre öğrenin. AHA kılavuzlarına göre değerlendirme.',
  },
  keywords: [
    'mean arterial pressure calculator',
    'MAP calculator',
    'mean arterial pressure formula',
    'how to calculate MAP',
    'MAP blood pressure',
    'pulse pressure calculator',
    'arterial pressure',
    'organ perfusion pressure',
    'MAP normal range',
    'MAP 65 mmHg',
    'systolic diastolic MAP',
    'cardiovascular calculator',
    'critical care MAP',
    'sepsis MAP',
    'ortalama arter basıncı hesaplayıcı',
    'ortalama arter basıncı hesaplama',
    'MAP hesaplama',
    'MAP nedir',
    'MAP formülü',
    'nabız basıncı hesaplama',
    'arter basıncı hesaplama',
    'tansiyon ortalaması hesaplama',
    'organ perfüzyon basıncı',
    'MAP normal değer',
  ],
  icon: 'Activity',
  popular: true,
  featured: false,
  component: MAPCalculator,
};
