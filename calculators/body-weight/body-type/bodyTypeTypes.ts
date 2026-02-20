export type BodyType = 'ectomorph' | 'mesomorph' | 'endomorph';

export type MixedBodyType =
  | 'ectomorph'
  | 'mesomorph'
  | 'endomorph'
  | 'ecto-mesomorph'
  | 'meso-endomorph'
  | 'ecto-endomorph';

export interface BodyTypeScores {
  ectomorph: number;
  mesomorph: number;
  endomorph: number;
}

export interface BodyTypeQuestion {
  id: string;
  question: { en: string; tr: string };
  options: {
    label: { en: string; tr: string };
    scores: BodyTypeScores;
  }[];
}

export interface BodyTypeResult {
  primaryType: MixedBodyType;
  scores: BodyTypeScores;
  percentages: BodyTypeScores;
  dominantLabel: { en: string; tr: string };
  description: { en: string; tr: string };
}

export interface BodyTypeInfo {
  type: BodyType;
  label: { en: string; tr: string };
  emoji: string;
  color: string;
  gradient: string;
  traits: { en: string[]; tr: string[] };
  diet: { en: string[]; tr: string[] };
  exercise: { en: string[]; tr: string[] };
  celebrities: string[];
  macroSplit: { protein: number; carbs: number; fat: number };
}
