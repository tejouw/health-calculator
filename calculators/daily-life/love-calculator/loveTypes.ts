export interface LoveCalculatorInput {
  name1: string;
  name2: string;
}

export interface LoveCalculatorResult {
  percentage: number;
  rating: 'perfect' | 'excellent' | 'great' | 'good' | 'moderate' | 'low';
  message: {
    en: string;
    tr: string;
  };
  tip: {
    en: string;
    tr: string;
  };
  emoji: string;
}
