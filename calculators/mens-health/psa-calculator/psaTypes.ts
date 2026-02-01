export interface PSAInput {
  age: number;
  psaValue: number;
  prostateVolume?: number; // in cubic centimeters (cc)
  previousPSA?: number;
  monthsSincePrevious?: number;
}

export interface PSAResult {
  psaValue: number;
  riskLevel: PSARiskLevel;
  ageAdjustedNormal: {
    min: number;
    max: number;
  };
  psaDensity?: number;
  psaVelocity?: number;
  interpretation: {
    en: string;
    tr: string;
  };
}

export type PSARiskLevel = 'low' | 'normal' | 'borderline' | 'elevated' | 'high';

export interface PSARiskCategory {
  name: PSARiskLevel;
  label: {
    en: string;
    tr: string;
  };
  range: {
    min: number;
    max: number;
  };
  color: string;
  interpretation: {
    en: string;
    tr: string;
  };
}
