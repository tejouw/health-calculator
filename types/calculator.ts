import { ReactNode } from 'react';
import { Locale } from '@/i18n';

export type CategoryId =
  | 'body-weight'
  | 'fitness'
  | 'nutrition'
  | 'pregnancy'
  | 'womens-health'
  | 'mens-health'
  | 'heart'
  | 'diabetes'
  | 'medical'
  | 'mental-health'
  | 'sleep'
  | 'childrens-health'
  | 'daily-life'
  | 'substance';

export interface LocalizedString {
  en: string;
  tr: string;
}

export interface CalculatorMeta {
  id: string;
  category: CategoryId;
  slug: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  keywords: string[];
  icon: string;
  popular?: boolean;
  featured?: boolean;
  component: React.ComponentType<CalculatorProps>;
}

export interface BMICategory {
  range: string;
  label: string;
  description: string;
  color: string;
}

export interface ContentSection {
  whatIs: string;
  howToCalculate: string;
  interpretation?: string;
  formulaDetails?: string;
  categories?: BMICategory[];
  limitations?: string;
  healthRisks?: string;
  healthBenefits?: string;
  improvementTips?: string;
  alternativeMeasures?: string;
  demographicDifferences?: string;
  medicalDisclaimer?: string;
  references?: string[];
  tips?: string[];
  faqs?: FAQ[];
}

export interface CalculatorContent {
  en: ContentSection;
  tr: ContentSection;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CalculatorProps {
  locale: Locale;
}

export interface CalculatorResult {
  value: number | string;
  category?: string;
  interpretation?: string;
  recommendation?: string;
  range?: {
    min: number;
    max: number;
  };
}

export interface UnitSystem {
  type: 'metric' | 'imperial';
  height: string;
  weight: string;
  distance: string;
}
