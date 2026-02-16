export interface LeanBodyMassInput {
  height: number;
  weight: number;
  gender: 'male' | 'female';
  unit: 'metric' | 'imperial';
}

export interface LeanBodyMassResult {
  boer: number;
  james: number;
  hume: number;
  average: number;
  bodyFatMass: number;
  bodyFatPercentage: number;
  leanPercentage: number;
}

export type FormulaName = 'boer' | 'james' | 'hume';

export interface FormulaInfo {
  name: FormulaName;
  label: string;
  description: {
    en: string;
    tr: string;
  };
}
