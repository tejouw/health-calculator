import { CategoryId, LocalizedString } from './calculator';

export interface Category {
  id: CategoryId;
  name: LocalizedString;
  description: LocalizedString;
  icon: string;
  color: string;
  gradient: string;
  calculatorCount: number;
}

export interface CategoryPageProps {
  params: {
    locale: string;
    category: CategoryId;
  };
}
