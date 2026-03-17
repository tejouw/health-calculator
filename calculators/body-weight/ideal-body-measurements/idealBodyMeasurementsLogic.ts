import {
  IdealBodyMeasurementsInput,
  IdealBodyMeasurementsResult,
  BodyMeasurement,
} from './idealBodyMeasurementsTypes';

/**
 * John McCallum's formula - based on wrist circumference
 * One of the most respected formulas for ideal male body proportions.
 * Source: Keys to Progress (1960s)
 */
function calculateMcCallumMale(wristCm: number): BodyMeasurement[] {
  const chest = wristCm * 6.5;
  const waist = chest * 0.7;
  const hips = chest * 0.85;
  const biceps = chest * 0.36;
  const forearm = chest * 0.29;
  const thigh = chest * 0.53;
  const calf = chest * 0.34;
  const neck = chest * 0.37;

  return [
    { name: { en: 'Chest', tr: 'Göğüs' }, ideal: round(chest), unit: 'cm' },
    { name: { en: 'Waist', tr: 'Bel' }, ideal: round(waist), unit: 'cm' },
    { name: { en: 'Hips', tr: 'Kalça' }, ideal: round(hips), unit: 'cm' },
    { name: { en: 'Biceps', tr: 'Pazı' }, ideal: round(biceps), unit: 'cm' },
    { name: { en: 'Forearm', tr: 'Ön Kol' }, ideal: round(forearm), unit: 'cm' },
    { name: { en: 'Thigh', tr: 'Uyluk' }, ideal: round(thigh), unit: 'cm' },
    { name: { en: 'Calf', tr: 'Baldır' }, ideal: round(calf), unit: 'cm' },
    { name: { en: 'Neck', tr: 'Boyun' }, ideal: round(neck), unit: 'cm' },
  ];
}

/**
 * Height-based proportions for males (Steve Reeves inspired)
 * Based on classical Greek/aesthetic proportions adapted to height.
 */
function calculateHeightBasedMale(heightCm: number): BodyMeasurement[] {
  const chest = heightCm * 0.578;
  const waist = heightCm * 0.417;
  const hips = heightCm * 0.517;
  const biceps = heightCm * 0.211;
  const forearm = heightCm * 0.170;
  const thigh = heightCm * 0.331;
  const calf = heightCm * 0.217;
  const neck = heightCm * 0.217;
  const shoulders = heightCm * 0.700;

  return [
    { name: { en: 'Shoulders', tr: 'Omuz' }, ideal: round(shoulders), unit: 'cm' },
    { name: { en: 'Chest', tr: 'Göğüs' }, ideal: round(chest), unit: 'cm' },
    { name: { en: 'Waist', tr: 'Bel' }, ideal: round(waist), unit: 'cm' },
    { name: { en: 'Hips', tr: 'Kalça' }, ideal: round(hips), unit: 'cm' },
    { name: { en: 'Biceps', tr: 'Pazı' }, ideal: round(biceps), unit: 'cm' },
    { name: { en: 'Forearm', tr: 'Ön Kol' }, ideal: round(forearm), unit: 'cm' },
    { name: { en: 'Thigh', tr: 'Uyluk' }, ideal: round(thigh), unit: 'cm' },
    { name: { en: 'Calf', tr: 'Baldır' }, ideal: round(calf), unit: 'cm' },
    { name: { en: 'Neck', tr: 'Boyun' }, ideal: round(neck), unit: 'cm' },
  ];
}

/**
 * Height-based proportions for females
 * Based on fitness/health-oriented proportions, not unrealistic beauty standards.
 * Sources: ACSM guidelines, fitness research
 */
function calculateHeightBasedFemale(heightCm: number): BodyMeasurement[] {
  const bust = heightCm * 0.533;
  const waist = heightCm * 0.389;
  const hips = heightCm * 0.567;
  const biceps = heightCm * 0.161;
  const forearm = heightCm * 0.139;
  const thigh = heightCm * 0.322;
  const calf = heightCm * 0.206;
  const shoulders = heightCm * 0.600;

  return [
    { name: { en: 'Shoulders', tr: 'Omuz' }, ideal: round(shoulders), unit: 'cm' },
    { name: { en: 'Bust', tr: 'Göğüs' }, ideal: round(bust), unit: 'cm' },
    { name: { en: 'Waist', tr: 'Bel' }, ideal: round(waist), unit: 'cm' },
    { name: { en: 'Hips', tr: 'Kalça' }, ideal: round(hips), unit: 'cm' },
    { name: { en: 'Biceps', tr: 'Pazı' }, ideal: round(biceps), unit: 'cm' },
    { name: { en: 'Forearm', tr: 'Ön Kol' }, ideal: round(forearm), unit: 'cm' },
    { name: { en: 'Thigh', tr: 'Uyluk' }, ideal: round(thigh), unit: 'cm' },
    { name: { en: 'Calf', tr: 'Baldır' }, ideal: round(calf), unit: 'cm' },
  ];
}

function round(value: number): number {
  return Math.round(value * 10) / 10;
}

export function calculateIdealBodyMeasurements(
  input: IdealBodyMeasurementsInput
): IdealBodyMeasurementsResult {
  let heightCm: number;

  if (input.heightUnit === 'ft/in') {
    const feet = input.heightFeet || 0;
    const inches = input.heightInches || 0;
    heightCm = (feet * 12 + inches) * 2.54;
  } else {
    heightCm = input.height;
  }

  if (heightCm < 100 || heightCm > 250) {
    throw new Error('Height must be between 100 and 250 cm');
  }

  let wristCm: number | null = null;
  if (input.wristCircumference && input.wristCircumference > 0) {
    wristCm = input.wristUnit === 'in'
      ? input.wristCircumference * 2.54
      : input.wristCircumference;
  }

  // For males with wrist measurement, use McCallum formula
  if (input.gender === 'male' && wristCm && wristCm >= 12 && wristCm <= 25) {
    return {
      heightCm,
      wristCm,
      gender: input.gender,
      measurements: calculateMcCallumMale(wristCm),
      formulaUsed: 'mcCallum',
    };
  }

  // Otherwise use height-based proportions
  const measurements = input.gender === 'male'
    ? calculateHeightBasedMale(heightCm)
    : calculateHeightBasedFemale(heightCm);

  return {
    heightCm,
    wristCm,
    gender: input.gender,
    measurements,
    formulaUsed: input.gender === 'male' ? 'reeves' : 'generic',
  };
}

export function cmToInches(cm: number): number {
  return round(cm / 2.54);
}
