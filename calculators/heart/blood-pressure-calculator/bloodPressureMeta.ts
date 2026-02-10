import { CalculatorMeta } from '@/types/calculator';
import BloodPressureCalculator from './BloodPressureCalculator';

export const bloodPressureMeta: CalculatorMeta = {
  id: 'blood-pressure-calculator',
  category: 'heart',
  slug: {
    en: 'blood-pressure-calculator',
    tr: 'kan-basinci-hesaplayici',
  },
  title: {
    en: 'Blood Pressure Calculator - Check Your BP & Heart Health',
    tr: 'Kan Basıncı Hesaplayıcı - Tansiyonunuzu Kontrol Edin',
  },
  description: {
    en: 'Free blood pressure calculator to instantly check if your BP is normal, elevated, or high. Get personalized recommendations based on AHA guidelines. Understand systolic and diastolic readings.',
    tr: 'Ücretsiz kan basıncı hesaplayıcı ile tansiyonunuzun normal, yüksek normal veya hipertansiyon aralığında olup olmadığını anında öğrenin. AHA kılavuzlarına göre kişiselleştirilmiş öneriler alın.',
  },
  keywords: [
    'blood pressure calculator',
    'BP calculator',
    'blood pressure checker',
    'hypertension calculator',
    'check blood pressure',
    'normal blood pressure',
    'high blood pressure',
    'systolic diastolic',
    'BP categories',
    'AHA blood pressure',
    'blood pressure ranges',
    'hypertension stages',
    'kan basıncı hesaplayıcı',
    'tansiyon hesaplama',
    'tansiyon kontrolü',
    'hipertansiyon hesaplayıcı',
  ],
  icon: 'Heart',
  popular: true,
  featured: true,
  component: BloodPressureCalculator,
};
