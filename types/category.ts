import { CategoryId, LocalizedString } from './calculator';

export interface Category {
  id: CategoryId;
  slug: LocalizedString; // URL slug for each locale (e.g., { en: 'mens-health', tr: 'erkek-sagligi' })
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
  color: string;
  gradient: string;
  calculatorCount?: number; // Optional - populated dynamically from calculatorRegistry
}

export interface CategoryPageProps {
  params: {
    locale: string;
    category: CategoryId;
  };
}
