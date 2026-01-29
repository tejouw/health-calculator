import { CalculatorMeta } from '@/types/calculator';
import PregnancyWeekCalculator from './PregnancyWeekCalculator';

export const pregnancyWeekMeta: CalculatorMeta = {
  id: 'pregnancy-week-calculator',
  category: 'pregnancy',
  slug: {
    en: 'pregnancy-week-calculator',
    tr: 'hamilelik-hafta-hesaplama',
  },
  title: {
    en: 'Pregnancy Week Calculator - Calculate Your Pregnancy Week',
    tr: 'Hamilelik Hafta Hesaplama - Hamilelik Haftanızı Hesaplayın',
  },
  description: {
    en: 'Calculate what week of pregnancy you are in. Enter your last menstrual period, conception date, or due date to find your current week, trimester, estimated baby size, and development milestones.',
    tr: 'Hamileliğin hangi haftasında olduğunuzu hesaplayın. Mevcut haftanızı, trimesterinizi, tahmini bebek boyutunuzu ve gelişim kilometre taşlarını bulmak için son adet dönemini, hamilelik tarihini veya doğum tarihini girin.',
  },
  keywords: [
    'pregnancy week calculator',
    'how many weeks pregnant',
    'pregnancy due date',
    'pregnancy stage',
    'baby development',
    'pregnancy timeline',
    'baby size',
    'pregnancy milestones',
    'hamilelik hafta hesaplama',
    'kaç hafta hamile',
    'hamilelik doğum tarihi',
    'hamilelik aşaması',
    'bebek gelişimi',
    'hamilelik zaman çizelgesi',
    'bebek boyutu',
    'hamilelik kilometre taşları',
  ],
  icon: 'Heart',
  popular: true,
  featured: true,
  component: PregnancyWeekCalculator,
};
