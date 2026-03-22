export type EyeColor = 'brown' | 'blue' | 'green' | 'hazel';

export interface EyeColorInput {
  motherEyeColor: EyeColor;
  fatherEyeColor: EyeColor;
  maternalGrandmother?: EyeColor;
  maternalGrandfather?: EyeColor;
  paternalGrandmother?: EyeColor;
  paternalGrandfather?: EyeColor;
}

export interface EyeColorProbability {
  color: EyeColor;
  percentage: number;
  label: { en: string; tr: string };
  hex: string;
}

export interface EyeColorResult {
  probabilities: EyeColorProbability[];
  mostLikely: EyeColor;
  explanation: { en: string; tr: string };
}
