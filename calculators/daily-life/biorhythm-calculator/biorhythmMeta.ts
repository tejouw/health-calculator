import { CalculatorMeta } from '@/types/calculator';
import BiorhythmCalculator from './BiorhythmCalculator';

export const biorhythmMeta: CalculatorMeta = {
  id: 'biorhythm-calculator',
  category: 'daily-life',
  slug: {
    en: 'biorhythm-calculator',
    tr: 'biyoritm-hesaplayici',
  },
  title: {
    en: 'Biorhythm Calculator - Physical, Emotional & Intellectual Cycles',
    tr: 'Biyoritm Hesaplayıcı - Fiziksel, Duygusal ve Zihinsel Döngüler',
  },
  description: {
    en: 'Calculate your biorhythm cycles based on your birth date. See your physical, emotional, and intellectual energy levels with an interactive chart.',
    tr: 'Doğum tarihinize göre biyoritm döngülerinizi hesaplayın. Fiziksel, duygusal ve zihinsel enerji seviyelerinizi interaktif grafik ile görün.',
  },
  keywords: [
    'biorhythm calculator',
    'biorhythm chart',
    'physical cycle',
    'emotional cycle',
    'intellectual cycle',
    'biorhythm today',
    'daily biorhythm',
    'biyoritm hesaplama',
    'biyoritm hesaplayıcı',
    'biyoritm grafiği',
    'fiziksel döngü',
    'duygusal döngü',
    'zihinsel döngü',
    'günlük biyoritm',
    'biyoritm nedir',
  ],
  icon: 'Activity',
  popular: true,
  component: BiorhythmCalculator,
};
