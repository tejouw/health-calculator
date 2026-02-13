export interface VO2MaxInput {
  method: 'cooper' | 'rockport' | 'formula';

  // Common fields
  age: number;
  gender: 'male' | 'female';
  weight: number; // kg
  unit: 'metric' | 'imperial';

  // Cooper Test (12-minute run)
  cooperDistance?: number; // meters or miles

  // Rockport Walking Test (1 mile walk)
  rockportTime?: number; // minutes
  rockportHeartRate?: number; // bpm after walk

  // Formula-based
  restingHeartRate?: number; // bpm
}

export interface VO2MaxResult {
  vo2Max: number; // ml/kg/min
  category: VO2MaxCategory;
  categoryLabel: {
    en: string;
    tr: string;
  };
  interpretation: {
    en: string;
    tr: string;
  };
  percentile: number; // relative to age/gender norms
}

export type VO2MaxCategory =
  | 'very_poor'
  | 'poor'
  | 'fair'
  | 'good'
  | 'excellent'
  | 'superior';

export interface VO2MaxCategoryInfo {
  name: VO2MaxCategory;
  label: {
    en: string;
    tr: string;
  };
  color: string;
  description: {
    en: string;
    tr: string;
  };
}

export interface VO2MaxNorm {
  ageRange: [number, number];
  gender: 'male' | 'female';
  categories: {
    very_poor: [number, number];
    poor: [number, number];
    fair: [number, number];
    good: [number, number];
    excellent: [number, number];
    superior: [number, number];
  };
}
