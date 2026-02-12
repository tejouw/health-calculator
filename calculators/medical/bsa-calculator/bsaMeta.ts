import { CalculatorMeta } from '@/types/calculator';
import BSACalculator from './BSACalculator';

export const bsaMeta: CalculatorMeta = {
  id: 'bsa-calculator',
  category: 'medical',
  slug: {
    en: 'bsa-calculator',
    tr: 'vya-hesaplayici',
  },
  title: {
    en: 'BSA Calculator - Body Surface Area for Drug Dosing',
    tr: 'VYA Hesaplayıcı - İlaç Dozajı için Vücut Yüzey Alanı',
  },
  description: {
    en: 'Calculate Body Surface Area (BSA) using Du Bois, Mosteller, Haycock formulas. Essential for chemotherapy dosing, cardiac index, and medical calculations.',
    tr: 'Du Bois, Mosteller, Haycock formüllerini kullanarak Vücut Yüzey Alanını (VYA) hesaplayın. Kemoterapi dozajı, kardiyak indeks ve tıbbi hesaplamalar için gereklidir.',
  },
  keywords: [
    'bsa calculator',
    'body surface area',
    'drug dosing calculator',
    'chemotherapy dose',
    'du bois formula',
    'mosteller formula',
    'cardiac index',
    'vya hesaplayıcı',
    'vücut yüzey alanı',
    'ilaç dozajı',
  ],
  icon: 'UserSquare2',
  popular: true,
  featured: false,
  component: BSACalculator,
};
