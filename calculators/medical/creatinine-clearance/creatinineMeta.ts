import { CalculatorMeta } from '@/types/calculator';
import CreatinineClearance from './CreatinineClearance';

export const creatinineMeta: CalculatorMeta = {
  id: 'creatinine-clearance-calculator',
  category: 'medical',
  slug: {
    en: 'creatinine-clearance-calculator',
    tr: 'kreatinin-klirensi-hesaplama',
  },
  title: {
    en: 'Creatinine Clearance Calculator - Cockcroft-Gault Formula',
    tr: 'Kreatinin Klirensi Hesaplama - Cockcroft-Gault Formülü',
  },
  description: {
    en: 'Calculate creatinine clearance using the Cockcroft-Gault formula. Estimate kidney function and glomerular filtration.',
    tr: 'Cockcroft-Gault formülüyle kreatinin klirensini hesaplayın. Böbrek fonksiyonunu ve glomerüler filtrasyonu tahmin edin.',
  },
  keywords: [
    'creatinine clearance',
    'cockcroft-gault',
    'kidney function',
    'creatinine calculator',
    'renal function',
    'kreatinin klirensi',
    'böbrek fonksiyonu',
  ],
  icon: 'Beaker',
  popular: false,
  featured: false,
  component: CreatinineClearance,
};
