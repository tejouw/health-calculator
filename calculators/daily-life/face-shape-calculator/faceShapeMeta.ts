import { CalculatorMeta } from '@/types/calculator';
import FaceShapeCalculator from './FaceShapeCalculator';

export const faceShapeMeta: CalculatorMeta = {
  id: 'face-shape-calculator',
  category: 'daily-life',
  slug: {
    en: 'face-shape-calculator',
    tr: 'yuz-sekli-hesaplayici',
  },
  title: {
    en: 'Face Shape Calculator - Find Your Face Shape',
    tr: 'Yüz Şekli Hesaplayıcı - Yüz Şeklinizi Bulun',
  },
  description: {
    en: 'Determine your face shape with simple measurements. Get personalized hairstyle, glasses, and makeup recommendations for your face shape.',
    tr: 'Basit ölçümlerle yüz şeklinizi belirleyin. Yüz şeklinize özel saç modeli, gözlük ve makyaj önerileri alın.',
  },
  keywords: [
    'face shape calculator',
    'face shape',
    'what is my face shape',
    'oval face',
    'round face',
    'square face',
    'heart face',
    'face shape hairstyle',
    'face shape glasses',
    'yüz şekli hesaplayıcı',
    'yüz şeklim ne',
    'yüz şekli belirleme',
    'oval yüz',
    'yuvarlak yüz',
    'kare yüz',
    'kalp yüz',
    'yüz şekline göre saç',
    'yüz şekline göre gözlük',
  ],
  icon: 'Smile',
  popular: true,
  component: FaceShapeCalculator,
};
