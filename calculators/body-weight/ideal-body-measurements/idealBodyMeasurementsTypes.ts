export interface IdealBodyMeasurementsInput {
  height: number;
  heightUnit: 'cm' | 'ft/in';
  heightFeet?: number;
  heightInches?: number;
  wristCircumference?: number;
  wristUnit: 'cm' | 'in';
  gender: 'male' | 'female';
}

export interface BodyMeasurement {
  name: { en: string; tr: string };
  ideal: number;
  unit: string;
}

export interface IdealBodyMeasurementsResult {
  heightCm: number;
  wristCm: number | null;
  gender: 'male' | 'female';
  measurements: BodyMeasurement[];
  formulaUsed: 'mcCallum' | 'reeves' | 'generic';
}
