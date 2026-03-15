import { CalculatorMeta } from '@/types/calculator';
import BloodTypeCalculator from './BloodTypeCalculator';

export const bloodTypeMeta: CalculatorMeta = {
  id: 'blood-type-calculator',
  category: 'daily-life',
  slug: {
    en: 'blood-type-calculator',
    tr: 'kan-grubu-hesaplayici',
  },
  title: {
    en: 'Blood Type Calculator - Predict Your Child\'s Blood Type',
    tr: 'Kan Grubu Hesaplayıcı - Bebeğinizin Kan Grubunu Tahmin Edin',
  },
  description: {
    en: 'Calculate possible blood types for your child based on parents\' blood types. Learn about ABO blood group inheritance, Rh factor compatibility, and blood donation compatibility.',
    tr: 'Anne ve baba kan gruplarına göre bebeğinizin olası kan gruplarını hesaplayın. ABO kan grubu kalıtımı, Rh faktörü uyumu ve kan bağışı uyumluluğu hakkında bilgi edinin.',
  },
  keywords: [
    'blood type calculator',
    'blood group calculator',
    'child blood type',
    'blood type inheritance',
    'blood type compatibility',
    'Rh factor',
    'blood donation',
    'kan grubu hesaplama',
    'bebek kan grubu',
    'kan grubu kalıtımı',
    'kan grubu uyumu',
    'Rh uyuşmazlığı',
    'kan bağışı',
  ],
  icon: 'Droplets',
  popular: true,
  featured: false,
  component: BloodTypeCalculator,
};
