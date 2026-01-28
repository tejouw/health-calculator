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
    en: 'Pregnancy Due Date Calculator - Calculate Your Baby\'s Due Date',
    tr: 'Hamilelik Doğum Tarihi Hesaplayıcı - Bebeğinizin Doğum Tarihini Hesaplayın',
  },
  description: {
    en: 'Free pregnancy due date calculator to determine your estimated delivery date. Calculate based on LMP, conception date, ultrasound results, or IVF transfer. Track pregnancy milestones and trimester progress with accurate Naegele\'s Rule calculations.',
    tr: 'Tahmini doğum tarihinizi belirlemek için ücretsiz hamilelik doğum tarihi hesaplayıcısı. SAT, döllendirme tarihi, ultrason sonuçları veya tüp bebek transferine göre hesaplayın. Doğru Naegele Kuralı hesaplamalarıyla hamilelik kilometre taşlarını ve trimester ilerlemesini takip edin.',
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
