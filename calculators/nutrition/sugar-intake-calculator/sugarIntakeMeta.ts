import { CalculatorMeta } from '@/types/calculator';
import SugarIntakeCalculator from './SugarIntakeCalculator';

export const sugarIntakeMeta: CalculatorMeta = {
  id: 'sugar-intake-calculator',
  category: 'nutrition',
  slug: {
    en: 'sugar-intake-calculator',
    tr: 'seker-tuketimi-hesaplayici',
  },
  title: {
    en: 'Daily Sugar Intake Calculator - How Much Sugar Should You Eat?',
    tr: 'Günlük Şeker Tüketimi Hesaplayıcı - Ne Kadar Şeker Tüketmelisiniz?',
  },
  description: {
    en: 'Calculate your recommended daily sugar intake based on WHO and AHA guidelines. Get personalized limits based on age, gender, activity level, and health conditions. See how much sugar is in common foods and learn to reduce hidden sugar intake.',
    tr: 'DSÖ ve AHA kılavuzlarına göre önerilen günlük şeker tüketiminizi hesaplayın. Yaş, cinsiyet, aktivite düzeyi ve sağlık durumunuza göre kişiselleştirilmiş limitler alın. Yaygın gıdalarda ne kadar şeker olduğunu görün ve gizli şeker alımını azaltmayı öğrenin.',
  },
  keywords: [
    'sugar intake calculator',
    'daily sugar limit',
    'how much sugar per day',
    'sugar consumption',
    'added sugar limit',
    'WHO sugar guidelines',
    'AHA sugar recommendation',
    'sugar in food',
    'hidden sugar',
    'reduce sugar intake',
    'günlük şeker tüketimi',
    'şeker hesaplayıcı',
    'günlük şeker limiti',
    'ne kadar şeker',
    'şeker miktarı hesaplama',
    'gizli şeker',
    'şeker azaltma',
    'sağlıklı şeker tüketimi',
  ],
  icon: 'CakeSlice',
  popular: true,
  featured: false,
  component: SugarIntakeCalculator,
};
