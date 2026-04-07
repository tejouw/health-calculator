import { CalculatorMeta } from '@/types/calculator';
import CholesterolCalculator from './CholesterolCalculator';

export const cholesterolMeta: CalculatorMeta = {
  id: 'cholesterol-calculator',
  category: 'heart',
  slug: {
    en: 'cholesterol-calculator',
    tr: 'kolesterol-hesaplayici',
  },
  title: {
    en: 'Cholesterol Calculator - Check Your Cholesterol Levels & Ratios',
    tr: 'Kolesterol Hesaplayıcı - Kolesterol Seviyenizi ve Oranlarınızı Kontrol Edin',
  },
  description: {
    en: 'Free cholesterol calculator to analyze your total cholesterol, HDL, LDL, and triglyceride levels. Get risk assessment and personalized recommendations based on medical guidelines.',
    tr: 'Ücretsiz kolesterol hesaplayıcı ile toplam kolesterol, HDL, LDL ve trigliserit seviyelerinizi analiz edin. Tıbbi kılavuzlara dayalı risk değerlendirmesi ve kişiselleştirilmiş öneriler alın.',
  },
  keywords: [
    'cholesterol calculator',
    'cholesterol levels',
    'HDL cholesterol',
    'LDL cholesterol',
    'triglycerides',
    'cholesterol ratio',
    'heart disease risk',
    'lipid panel',
    'cholesterol test',
    'good cholesterol',
    'bad cholesterol',
    'non-HDL cholesterol',
    'kolesterol hesaplayıcı',
    'kolesterol hesaplama',
    'kolesterol seviyeleri',
    'HDL kolesterol',
    'LDL kolesterol',
    'trigliserit',
    'kolesterol oranı',
    'kalp hastalığı riski',
    'iyi kolesterol',
    'kötü kolesterol',
  ],
  icon: 'HeartPulse',
  popular: true,
  featured: false,
  component: CholesterolCalculator,
};
