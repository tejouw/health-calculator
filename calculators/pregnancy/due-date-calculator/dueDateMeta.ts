import { CalculatorMeta } from '@/types/calculator';
import DueDateCalculator from './DueDateCalculator';

export const dueDateMeta: CalculatorMeta = {
  id: 'due-date-calculator',
  category: 'pregnancy',
  slug: {
    en: 'due-date-calculator',
    tr: 'dogum-tarihi-hesaplayici',
  },
  title: {
    en: 'Free Pregnancy Due Date Calculator - When Is Your Baby Due?',
    tr: 'Doğum Tarihi Hesaplama (Ücretsiz) - Bebeğiniz Ne Zaman Doğacak? 2026',
  },
  description: {
    en: 'Calculate your baby\'s due date free! Enter your last period date, conception date or ultrasound results. Track pregnancy week by week with trimester milestones — instant results using Naegele\'s Rule.',
    tr: 'Bebeğinizin doğum tarihini ücretsiz hesaplayın! Son adet tarihi, gebe kalma tarihi veya ultrason sonuçlarınızı girin. Hamilelik haftalarını ve trimester ilerlemesini anında takip edin.',
  },
  keywords: [
    'due date calculator',
    'pregnancy calculator',
    'estimated due date',
    'pregnancy due date',
    'baby due date',
    'conception date',
    'LMP calculator',
    'pregnancy weeks calculator',
    'Naegeles rule',
    'trimester calculator',
    'pregnancy milestones',
    'gestational age calculator',
    'ultrasound due date',
    'IVF due date',
    'doğum tarihi hesaplayıcı',
    'hamilelik hesaplayıcı',
    'tahmini doğum tarihi',
    'bebek doğum tarihi',
    'son adet tarihi',
    'hamilelik haftası',
    'trimester hesaplama',
    'gestasyonel yaş',
  ],
  icon: 'Baby',
  popular: true,
  featured: true,
  component: DueDateCalculator,
};
