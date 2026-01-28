export interface IdealWeightInput {
  height: number; // in cm
  heightUnit: 'cm' | 'ft/in';
  heightFeet?: number;
  heightInches?: number;
  gender: 'male' | 'female';
  age?: number; // Optional, for age-adjusted calculations
  bodyFrame?: 'small' | 'medium' | 'large'; // Optional
}

export interface IdealWeightResult {
  // Multiple formula results (in kg)
  hamwi: number;
  devine: number;
  robinson: number;
  miller: number;

  // Average and range
  average: number;
  min: number;
  max: number;

  // BMI-based healthy weight range
  bmiHealthyMin: number;
  bmiHealthyMax: number;

  // Frame-adjusted range (if frame is provided)
  frameAdjustedMin?: number;
  frameAdjustedMax?: number;

  // Input data (converted to metric)
  heightCm: number;
  gender: 'male' | 'female';
  age?: number;
  bodyFrame?: 'small' | 'medium' | 'large';
}

export interface IdealWeightFormula {
  id: 'hamwi' | 'devine' | 'robinson' | 'miller';
  name: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  yearDeveloped: number;
}

export interface BodyFrameInfo {
  size: 'small' | 'medium' | 'large';
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  adjustmentPercentage: number; // e.g., -10% for small, 0% for medium, +10% for large
}
