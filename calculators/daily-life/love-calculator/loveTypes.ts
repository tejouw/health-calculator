export interface LoveCalculatorInput {
  name1: string;
  name2: string;
  birthdate1?: string;
  birthdate2?: string;
}

export interface CompatibilityBreakdown {
  emotional: number;
  intellectual: number;
  physical: number;
  spiritual: number;
  communication: number;
}

export interface FlamesResult {
  result: 'Friends' | 'Lovers' | 'Affectionate' | 'Marriage' | 'Enemies' | 'Siblings';
  description: {
    en: string;
    tr: string;
  };
}

export interface ZodiacCompatibility {
  compatible: boolean;
  percentage: number;
  description: {
    en: string;
    tr: string;
  };
}

export interface RelationshipPrediction {
  firstDate: string;
  firstKiss: string;
  engagement: string;
  marriage: string;
  children: number;
  petName: {
    en: string;
    tr: string;
  };
}

export interface FamousCoupleMatch {
  couple: string;
  similarity: number;
  description: {
    en: string;
    tr: string;
  };
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
  breakdown: CompatibilityBreakdown;
  flames: FlamesResult;
  zodiac?: ZodiacCompatibility;
  prediction: RelationshipPrediction;
  famousCouple: FamousCoupleMatch;
  strengths: {
    en: string[];
    tr: string[];
  };
  challenges: {
    en: string[];
    tr: string[];
  };
}
