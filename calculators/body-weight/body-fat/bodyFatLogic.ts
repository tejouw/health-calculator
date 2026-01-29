import { BodyFatInput, BodyFatCategory, BodyFatCategoryInfo } from './bodyFatTypes';

export const bodyFatCategories: Record<BodyFatCategory, BodyFatCategoryInfo> = {
  essential: {
    name: 'essential',
    label: {
      en: 'Essential Fat',
      tr: 'Temel Yağ',
    },
    range: {
      male: { min: 2, max: 5 },
      female: { min: 10, max: 13 },
    },
    color: '#3B82F6',
    interpretation: {
      en: 'This is the minimum amount of fat necessary for basic physical and physiological health. Below this level can be dangerous.',
      tr: 'Bu, temel fiziksel ve fizyolojik sağlık için gerekli minimum yağ miktarıdır. Bu seviyenin altı tehlikeli olabilir.',
    },
  },
  athletes: {
    name: 'athletes',
    label: {
      en: 'Athletes',
      tr: 'Atletler',
    },
    range: {
      male: { min: 6, max: 13 },
      female: { min: 14, max: 20 },
    },
    color: '#10B981',
    interpretation: {
      en: 'Athletic body fat percentage. Typical for people who engage in intense physical training and sports.',
      tr: 'Atletik vücut yağ yüzdesi. Yoğun fiziksel antrenman ve sporla uğraşan kişiler için tipiktir.',
    },
  },
  fitness: {
    name: 'fitness',
    label: {
      en: 'Fitness',
      tr: 'Fitness',
    },
    range: {
      male: { min: 14, max: 17 },
      female: { min: 21, max: 24 },
    },
    color: '#22C55E',
    interpretation: {
      en: 'Fit body fat percentage. This range is generally associated with good fitness and health.',
      tr: 'Formda vücut yağ yüzdesi. Bu aralık genellikle iyi fitness ve sağlıkla ilişkilidir.',
    },
  },
  average: {
    name: 'average',
    label: {
      en: 'Average',
      tr: 'Ortalama',
    },
    range: {
      male: { min: 18, max: 24 },
      female: { min: 25, max: 31 },
    },
    color: '#F59E0B',
    interpretation: {
      en: 'Average body fat percentage. While not optimal, this range is typical for the general population.',
      tr: 'Ortalama vücut yağ yüzdesi. Optimal olmasa da, bu aralık genel popülasyon için tipiktir.',
    },
  },
  obese: {
    name: 'obese',
    label: {
      en: 'Obese',
      tr: 'Obez',
    },
    range: {
      male: { min: 25, max: 100 },
      female: { min: 32, max: 100 },
    },
    color: '#EF4444',
    interpretation: {
      en: 'High body fat percentage associated with increased health risks. Consider consulting a healthcare professional.',
      tr: 'Artmış sağlık riskleriyle ilişkili yüksek vücut yağ yüzdesi. Bir sağlık profesyoneli ile görüşmeyi düşünün.',
    },
  },
};

/**
 * Calculate body fat percentage using the US Navy Method
 * This is one of the most widely used and validated methods
 */
export function calculateBodyFat(input: BodyFatInput): number {
  let heightInInches: number;
  let neckInInches: number;
  let waistInInches: number;
  let hipInInches: number | undefined;

  // Convert measurements to inches if metric
  if (input.unit === 'metric') {
    heightInInches = input.height / 2.54;
    neckInInches = input.neck / 2.54;
    waistInInches = input.waist / 2.54;
    if (input.hip) {
      hipInInches = input.hip / 2.54;
    }
  } else {
    heightInInches = input.height;
    neckInInches = input.neck;
    waistInInches = input.waist;
    hipInInches = input.hip;
  }

  let bodyFatPercentage: number;

  if (input.gender === 'male') {
    // US Navy formula for men:
    // Body Fat % = 86.010 × log10(waist - neck) - 70.041 × log10(height) + 36.76
    bodyFatPercentage =
      86.01 * Math.log10(waistInInches - neckInInches) -
      70.041 * Math.log10(heightInInches) +
      36.76;
  } else {
    // US Navy formula for women:
    // Body Fat % = 163.205 × log10(waist + hip - neck) - 97.684 × log10(height) - 78.387
    if (!hipInInches) {
      throw new Error('Hip measurement is required for females');
    }
    bodyFatPercentage =
      163.205 * Math.log10(waistInInches + hipInInches - neckInInches) -
      97.684 * Math.log10(heightInInches) -
      78.387;
  }

  // Ensure result is within valid range
  bodyFatPercentage = Math.max(2, Math.min(100, bodyFatPercentage));

  return Math.round(bodyFatPercentage * 10) / 10;
}

export function getBodyFatCategory(
  bodyFat: number,
  gender: 'male' | 'female'
): BodyFatCategory {
  for (const category of Object.values(bodyFatCategories)) {
    const range = category.range[gender];
    if (bodyFat >= range.min && bodyFat <= range.max) {
      return category.name;
    }
  }

  // Default to obese if above all ranges
  return 'obese';
}

export function calculateLeanBodyMass(
  weight: number,
  bodyFatPercentage: number,
  unit: 'metric' | 'imperial'
): { leanMass: number; fatMass: number } {
  const fatMass = (weight * bodyFatPercentage) / 100;
  const leanMass = weight - fatMass;

  return {
    leanMass: Math.round(leanMass * 10) / 10,
    fatMass: Math.round(fatMass * 10) / 10,
  };
}

export function getIdealBodyFatRange(gender: 'male' | 'female'): {
  min: number;
  max: number;
} {
  // Fitness range is considered ideal
  return bodyFatCategories.fitness.range[gender];
}
