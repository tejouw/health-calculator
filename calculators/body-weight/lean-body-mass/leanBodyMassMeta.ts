import { CalculatorMeta } from '@/types/calculator';
import LeanBodyMassCalculator from './LeanBodyMassCalculator';

export const leanBodyMassMeta: CalculatorMeta = {
  id: 'lean-body-mass-calculator',
  category: 'body-weight',
  slug: {
    en: 'lean-body-mass-calculator',
    tr: 'yagsiz-vucut-kutlesi-hesaplama',
  },
  title: {
    en: 'Lean Body Mass Calculator - Calculate Your LBM',
    tr: 'Yağsız Vücut Kütlesi Hesaplama - LBM Hesaplayıcı',
  },
  description: {
    en: 'Calculate your Lean Body Mass (LBM) using Boer, James, and Hume formulas. Find out your fat-free mass, body fat percentage, and lean mass ratio.',
    tr: 'Boer, James ve Hume formülleriyle Yağsız Vücut Kütlenizi (LBM) hesaplayın. Yağsız kütlenizi, vücut yağ yüzdenizi ve yağsız kütle oranınızı öğrenin.',
  },
  keywords: [
    'lean body mass calculator',
    'lbm calculator',
    'fat free mass',
    'lean mass',
    'body composition',
    'yagsiz vucut kutlesi',
    'lbm hesaplama',
    'yagsiz kutle',
    'vucut kompozisyonu',
  ],
  icon: 'Dumbbell',
  popular: false,
  featured: false,
  component: LeanBodyMassCalculator,
};
