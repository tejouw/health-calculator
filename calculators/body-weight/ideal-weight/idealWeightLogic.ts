import {
  IdealWeightInput,
  IdealWeightResult,
  IdealWeightFormula,
  BodyFrameInfo,
} from './idealWeightTypes';

export const idealWeightFormulas: IdealWeightFormula[] = [
  {
    id: 'hamwi',
    name: {
      en: 'Hamwi Formula',
      tr: 'Hamwi Formülü',
    },
    description: {
      en: 'Developed in 1964, widely used in clinical settings',
      tr: '1964\'te geliştirildi, klinik ortamlarda yaygın kullanılır',
    },
    yearDeveloped: 1964,
  },
  {
    id: 'devine',
    name: {
      en: 'Devine Formula',
      tr: 'Devine Formülü',
    },
    description: {
      en: 'Created in 1974 for drug dosage calculations',
      tr: '1974\'te ilaç dozajı hesaplamaları için oluşturuldu',
    },
    yearDeveloped: 1974,
  },
  {
    id: 'robinson',
    name: {
      en: 'Robinson Formula',
      tr: 'Robinson Formülü',
    },
    description: {
      en: 'Established in 1983, modification of Devine formula',
      tr: '1983\'te kuruldu, Devine formülünün modifikasyonu',
    },
    yearDeveloped: 1983,
  },
  {
    id: 'miller',
    name: {
      en: 'Miller Formula',
      tr: 'Miller Formülü',
    },
    description: {
      en: 'Published in 1983, alternative approach to ideal weight',
      tr: '1983\'te yayınlandı, ideal kiloya alternatif yaklaşım',
    },
    yearDeveloped: 1983,
  },
];

export const bodyFrameOptions: BodyFrameInfo[] = [
  {
    size: 'small',
    label: {
      en: 'Small Frame',
      tr: 'İnce Yapı',
    },
    description: {
      en: 'Narrow shoulders, small wrists, lean build',
      tr: 'Dar omuzlar, ince bilekler, ince yapı',
    },
    adjustmentPercentage: -10,
  },
  {
    size: 'medium',
    label: {
      en: 'Medium Frame',
      tr: 'Orta Yapı',
    },
    description: {
      en: 'Average build, proportionate body structure',
      tr: 'Ortalama yapı, orantılı vücut yapısı',
    },
    adjustmentPercentage: 0,
  },
  {
    size: 'large',
    label: {
      en: 'Large Frame',
      tr: 'Geniş Yapı',
    },
    description: {
      en: 'Broad shoulders, large wrists, stocky build',
      tr: 'Geniş omuzlar, kalın bilekler, iri yapı',
    },
    adjustmentPercentage: 10,
  },
];

/**
 * Convert height from feet/inches to centimeters
 */
export function convertHeightToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return totalInches * 2.54;
}

/**
 * Convert height from centimeters to inches (for formula calculations)
 */
export function convertCmToInches(cm: number): number {
  return cm / 2.54;
}

/**
 * Convert weight from kg to lbs
 */
export function kgToLbs(kg: number): number {
  return kg * 2.20462;
}

/**
 * Convert weight from lbs to kg
 */
export function lbsToKg(lbs: number): number {
  return lbs / 2.20462;
}

/**
 * Hamwi Formula (1964)
 * Male: 48 kg + 2.7 kg per inch over 5 feet
 * Female: 45.5 kg + 2.2 kg per inch over 5 feet
 */
export function calculateHamwi(heightCm: number, gender: 'male' | 'female'): number {
  const heightInches = convertCmToInches(heightCm);
  const inchesOver60 = heightInches - 60; // 60 inches = 5 feet

  if (inchesOver60 <= 0) {
    // For people under 5 feet, use base weight only
    return gender === 'male' ? 48 : 45.5;
  }

  const baseWeight = gender === 'male' ? 48 : 45.5;
  const increment = gender === 'male' ? 2.7 : 2.2;

  return baseWeight + increment * inchesOver60;
}

/**
 * Devine Formula (1974)
 * Male: 50 kg + 2.3 kg per inch over 5 feet
 * Female: 45.5 kg + 2.3 kg per inch over 5 feet
 */
export function calculateDevine(heightCm: number, gender: 'male' | 'female'): number {
  const heightInches = convertCmToInches(heightCm);
  const inchesOver60 = heightInches - 60;

  if (inchesOver60 <= 0) {
    return gender === 'male' ? 50 : 45.5;
  }

  const baseWeight = gender === 'male' ? 50 : 45.5;
  const increment = 2.3;

  return baseWeight + increment * inchesOver60;
}

/**
 * Robinson Formula (1983)
 * Male: 52 kg + 1.9 kg per inch over 5 feet
 * Female: 49 kg + 1.7 kg per inch over 5 feet
 */
export function calculateRobinson(heightCm: number, gender: 'male' | 'female'): number {
  const heightInches = convertCmToInches(heightCm);
  const inchesOver60 = heightInches - 60;

  if (inchesOver60 <= 0) {
    return gender === 'male' ? 52 : 49;
  }

  const baseWeight = gender === 'male' ? 52 : 49;
  const increment = gender === 'male' ? 1.9 : 1.7;

  return baseWeight + increment * inchesOver60;
}

/**
 * Miller Formula (1983)
 * Male: 56.2 kg + 1.41 kg per inch over 5 feet
 * Female: 53.1 kg + 1.36 kg per inch over 5 feet
 */
export function calculateMiller(heightCm: number, gender: 'male' | 'female'): number {
  const heightInches = convertCmToInches(heightCm);
  const inchesOver60 = heightInches - 60;

  if (inchesOver60 <= 0) {
    return gender === 'male' ? 56.2 : 53.1;
  }

  const baseWeight = gender === 'male' ? 56.2 : 53.1;
  const increment = gender === 'male' ? 1.41 : 1.36;

  return baseWeight + increment * inchesOver60;
}

/**
 * Calculate BMI-based healthy weight range
 * Healthy BMI range: 18.5 - 24.9
 */
export function calculateBMIHealthyRange(heightCm: number): {
  min: number;
  max: number;
} {
  const heightM = heightCm / 100;
  const heightSquared = heightM * heightM;

  return {
    min: 18.5 * heightSquared,
    max: 24.9 * heightSquared,
  };
}

/**
 * Apply body frame adjustment to ideal weight
 */
export function applyFrameAdjustment(
  weight: number,
  frame: 'small' | 'medium' | 'large'
): number {
  const frameInfo = bodyFrameOptions.find((f) => f.size === frame);
  if (!frameInfo || frameInfo.adjustmentPercentage === 0) {
    return weight;
  }

  return weight * (1 + frameInfo.adjustmentPercentage / 100);
}

/**
 * Main ideal weight calculation function
 */
export function calculateIdealWeight(input: IdealWeightInput): IdealWeightResult {
  // Convert height to cm if needed
  let heightCm: number;
  if (input.heightUnit === 'ft/in' && input.heightFeet && input.heightInches !== undefined) {
    heightCm = convertHeightToCm(input.heightFeet, input.heightInches);
  } else {
    heightCm = input.height;
  }

  // Validate height
  if (heightCm < 140 || heightCm > 220) {
    throw new Error('Height must be between 140 cm and 220 cm (4\'7" - 7\'3")');
  }

  // Calculate using all formulas
  const hamwi = calculateHamwi(heightCm, input.gender);
  const devine = calculateDevine(heightCm, input.gender);
  const robinson = calculateRobinson(heightCm, input.gender);
  const miller = calculateMiller(heightCm, input.gender);

  // Calculate average
  const average = (hamwi + devine + robinson + miller) / 4;

  // Calculate min and max from all formulas
  const allWeights = [hamwi, devine, robinson, miller];
  const min = Math.min(...allWeights);
  const max = Math.max(...allWeights);

  // Calculate BMI-based healthy range
  const { min: bmiHealthyMin, max: bmiHealthyMax } = calculateBMIHealthyRange(heightCm);

  // Apply frame adjustment if provided
  let frameAdjustedMin: number | undefined;
  let frameAdjustedMax: number | undefined;

  if (input.bodyFrame) {
    frameAdjustedMin = applyFrameAdjustment(min, input.bodyFrame);
    frameAdjustedMax = applyFrameAdjustment(max, input.bodyFrame);
  }

  return {
    hamwi: Math.round(hamwi * 10) / 10,
    devine: Math.round(devine * 10) / 10,
    robinson: Math.round(robinson * 10) / 10,
    miller: Math.round(miller * 10) / 10,
    average: Math.round(average * 10) / 10,
    min: Math.round(min * 10) / 10,
    max: Math.round(max * 10) / 10,
    bmiHealthyMin: Math.round(bmiHealthyMin * 10) / 10,
    bmiHealthyMax: Math.round(bmiHealthyMax * 10) / 10,
    frameAdjustedMin: frameAdjustedMin ? Math.round(frameAdjustedMin * 10) / 10 : undefined,
    frameAdjustedMax: frameAdjustedMax ? Math.round(frameAdjustedMax * 10) / 10 : undefined,
    heightCm,
    gender: input.gender,
    age: input.age,
    bodyFrame: input.bodyFrame,
  };
}

export function formatWeight(kg: number, unit: 'kg' | 'lbs'): string {
  if (unit === 'lbs') {
    return `${Math.round(kgToLbs(kg))} lbs`;
  }
  return `${Math.round(kg * 10) / 10} kg`;
}
