import { BodyWaterInput, BodyWaterResult, BodyWaterCategory, BodyWaterCategoryInfo } from './bodyWaterTypes';

export const bodyWaterCategories: Record<BodyWaterCategory, BodyWaterCategoryInfo> = {
  low: {
    name: 'low',
    label: {
      en: 'Below Normal',
      tr: 'Normalin Altında',
    },
    range: {
      male: { min: 0, max: 50 },
      female: { min: 0, max: 45 },
    },
    color: 'orange',
    interpretation: {
      en: 'Your body water percentage is below the recommended range. This may indicate dehydration or higher body fat percentage. Consider increasing your daily water intake.',
      tr: 'Vücut su yüzdeniz önerilen aralığın altında. Bu, dehidrasyon veya yüksek vücut yağ oranına işaret edebilir. Günlük su tüketiminizi artırmayı düşünün.',
    },
  },
  normal: {
    name: 'normal',
    label: {
      en: 'Normal Range',
      tr: 'Normal Aralık',
    },
    range: {
      male: { min: 50, max: 65 },
      female: { min: 45, max: 60 },
    },
    color: 'green',
    interpretation: {
      en: 'Your body water percentage is within the healthy range. Maintain your current hydration habits with regular water intake throughout the day.',
      tr: 'Vücut su yüzdeniz sağlıklı aralıkta. Gün boyunca düzenli su tüketimi ile mevcut hidrasyon alışkanlıklarınızı sürdürün.',
    },
  },
  high: {
    name: 'high',
    label: {
      en: 'Above Normal',
      tr: 'Normalin Üstünde',
    },
    range: {
      male: { min: 65, max: 100 },
      female: { min: 60, max: 100 },
    },
    color: 'blue',
    interpretation: {
      en: 'Your body water percentage is above the typical range. This may indicate higher lean muscle mass, which naturally contains more water. If you have concerns, consult a healthcare professional.',
      tr: 'Vücut su yüzdeniz tipik aralığın üstünde. Bu, doğal olarak daha fazla su içeren yüksek yağsız kas kütlesine işaret edebilir. Endişeleriniz varsa bir sağlık uzmanına danışın.',
    },
  },
};

/**
 * Calculate Total Body Water using the Watson formula
 * Watson PE, Watson ID, Batt RD. Total body water volumes for adult males and females
 * estimated from simple anthropometric measurements. Am J Clin Nutr. 1980;33(1):27-39.
 *
 * Male TBW (L) = 2.447 - (0.09156 × age) + (0.1074 × height cm) + (0.3362 × weight kg)
 * Female TBW (L) = -2.097 + (0.1069 × height cm) + (0.2466 × weight kg)
 */
export function calculateBodyWater(input: BodyWaterInput): BodyWaterResult {
  let heightCm: number;
  let weightKg: number;

  if (input.unit === 'imperial') {
    heightCm = input.height * 2.54;
    weightKg = input.weight * 0.453592;
  } else {
    heightCm = input.height;
    weightKg = input.weight;
  }

  let totalWaterLiters: number;

  if (input.gender === 'male') {
    totalWaterLiters = 2.447 - (0.09156 * input.age) + (0.1074 * heightCm) + (0.3362 * weightKg);
  } else {
    totalWaterLiters = -2.097 + (0.1069 * heightCm) + (0.2466 * weightKg);
  }

  // Ensure non-negative
  totalWaterLiters = Math.max(0, totalWaterLiters);

  const waterPercentage = (totalWaterLiters / weightKg) * 100;
  const totalWaterGallons = totalWaterLiters * 0.264172;

  const category = getBodyWaterCategory(waterPercentage, input.gender);
  const dailyIntakeRecommendation = getDailyWaterIntake(weightKg, input.gender);

  return {
    totalWaterLiters: Math.round(totalWaterLiters * 10) / 10,
    totalWaterGallons: Math.round(totalWaterGallons * 10) / 10,
    waterPercentage: Math.round(waterPercentage * 10) / 10,
    category,
    dailyIntakeRecommendation: Math.round(dailyIntakeRecommendation * 10) / 10,
  };
}

export function getBodyWaterCategory(percentage: number, gender: 'male' | 'female'): BodyWaterCategory {
  if (gender === 'male') {
    if (percentage < 50) return 'low';
    if (percentage <= 65) return 'normal';
    return 'high';
  } else {
    if (percentage < 45) return 'low';
    if (percentage <= 60) return 'normal';
    return 'high';
  }
}

/**
 * Basic daily water intake recommendation based on body weight
 * General guideline: ~30-35 mL per kg of body weight
 */
function getDailyWaterIntake(weightKg: number, gender: 'male' | 'female'): number {
  const mlPerKg = gender === 'male' ? 35 : 31;
  return (weightKg * mlPerKg) / 1000;
}

/**
 * Get healthy range for body water percentage
 */
export function getHealthyRange(gender: 'male' | 'female'): { min: number; max: number } {
  if (gender === 'male') {
    return { min: 50, max: 65 };
  }
  return { min: 45, max: 60 };
}
