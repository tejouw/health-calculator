import { CalculatorMeta } from '@/types/calculator';
import DiabetesRiskCalculator from './DiabetesRiskCalculator';

export const diabetesRiskMeta: CalculatorMeta = {
  id: 'diabetes-risk-calculator',
  category: 'diabetes',
  slug: {
    en: 'diabetes-risk-calculator',
    tr: 'diyabet-riski-hesaplayici',
  },
  title: {
    en: 'Diabetes Risk Calculator - FINDRISC Type 2 Diabetes Risk Score',
    tr: 'Diyabet Riski Hesaplayıcı - FINDRISC Tip 2 Diyabet Risk Testi',
  },
  description: {
    en: 'Calculate your 10-year risk of type 2 diabetes using the validated FINDRISC score. A free 8-question test based on age, BMI, waist, activity, diet and family history.',
    tr: 'Doğrulanmış FINDRISC skoru ile 10 yıllık tip 2 diyabet riskinizi hesaplayın. Yaş, VKİ, bel çevresi, aktivite, beslenme ve aile öyküsüne dayalı ücretsiz 8 soruluk test.',
  },
  keywords: [
    'diabetes risk calculator',
    'type 2 diabetes risk',
    'findrisc calculator',
    'diabetes risk score',
    'diabetes risk test',
    'prediabetes test',
    'diyabet riski hesaplayıcı',
    'diyabet riski testi',
    'tip 2 diyabet testi',
    'findrisc türkçe',
    'şeker hastalığı riski',
    'prediyabet testi',
  ],
  icon: 'Activity',
  popular: true,
  featured: false,
  component: DiabetesRiskCalculator,
};
