import { DailyStepGoalInput, DailyStepGoalResult, StepLevel, StepLevelInfo } from './dailyStepGoalTypes';

export const stepLevels: Record<StepLevel, StepLevelInfo> = {
  sedentary: {
    name: 'sedentary',
    label: { en: 'Sedentary', tr: 'Hareketsiz' },
    range: { min: 0, max: 5000 },
    color: 'red',
    interpretation: {
      en: 'Your step goal is in the sedentary range. This is a starting point — try to gradually increase your daily steps for better health outcomes.',
      tr: 'Adım hedefiniz hareketsiz kategorisinde. Bu bir başlangıç noktasıdır — daha iyi sağlık sonuçları için günlük adım sayınızı kademeli olarak artırmaya çalışın.',
    },
  },
  low_active: {
    name: 'low_active',
    label: { en: 'Low Active', tr: 'Az Aktif' },
    range: { min: 5000, max: 7500 },
    color: 'orange',
    interpretation: {
      en: 'Your step goal falls in the low active range. You are on the right track! Adding a short daily walk can help you reach higher activity levels.',
      tr: 'Adım hedefiniz az aktif kategorisinde. Doğru yoldasınız! Kısa bir günlük yürüyüş eklemek daha yüksek aktivite seviyelerine ulaşmanıza yardımcı olabilir.',
    },
  },
  somewhat_active: {
    name: 'somewhat_active',
    label: { en: 'Somewhat Active', tr: 'Orta Aktif' },
    range: { min: 7500, max: 10000 },
    color: 'yellow',
    interpretation: {
      en: 'Your step goal is in the moderately active range. This is a healthy level of daily activity associated with reduced health risks.',
      tr: 'Adım hedefiniz orta aktif kategorisinde. Bu, azaltılmış sağlık riskleriyle ilişkili sağlıklı bir günlük aktivite seviyesidir.',
    },
  },
  active: {
    name: 'active',
    label: { en: 'Active', tr: 'Aktif' },
    range: { min: 10000, max: 12500 },
    color: 'green',
    interpretation: {
      en: 'Your step goal is in the active range. This level of activity is associated with significant health benefits including weight management and cardiovascular health.',
      tr: 'Adım hedefiniz aktif kategorisinde. Bu aktivite seviyesi kilo yönetimi ve kardiyovasküler sağlık dahil önemli sağlık faydalarıyla ilişkilidir.',
    },
  },
  highly_active: {
    name: 'highly_active',
    label: { en: 'Highly Active', tr: 'Çok Aktif' },
    range: { min: 12500, max: 20000 },
    color: 'blue',
    interpretation: {
      en: 'Your step goal is in the highly active range. This level maximizes health benefits and supports weight loss goals effectively.',
      tr: 'Adım hedefiniz çok aktif kategorisinde. Bu seviye sağlık faydalarını en üst düzeye çıkarır ve kilo verme hedeflerini etkili şekilde destekler.',
    },
  },
};

function getAgeGroupSteps(age: number): { base: number; min: number; max: number } {
  if (age < 18) return { base: 12000, min: 10000, max: 15000 };
  if (age < 30) return { base: 10000, min: 8000, max: 13000 };
  if (age < 50) return { base: 8500, min: 7000, max: 12000 };
  if (age < 65) return { base: 7500, min: 6000, max: 10000 };
  return { base: 6500, min: 4000, max: 8000 };
}

function getActivityMultiplier(activityLevel: string): number {
  switch (activityLevel) {
    case 'sedentary': return 0.75;
    case 'lightly_active': return 0.9;
    case 'moderately_active': return 1.0;
    case 'very_active': return 1.15;
    default: return 1.0;
  }
}

function getGoalMultiplier(goal: string): number {
  switch (goal) {
    case 'weight_loss': return 1.3;
    case 'maintenance': return 1.0;
    case 'fitness': return 1.15;
    case 'heart_health': return 1.1;
    default: return 1.0;
  }
}

function calculateStrideLength(height: number, gender: string, unit: 'metric' | 'imperial'): number {
  let heightCm: number;
  if (unit === 'imperial') {
    heightCm = height * 2.54;
  } else {
    heightCm = height;
  }

  // Stride length approximation: height * 0.415 for walking
  const strideCm = gender === 'male' ? heightCm * 0.415 : heightCm * 0.413;

  if (unit === 'imperial') {
    return Math.round((strideCm / 2.54) * 10) / 10; // inches
  }
  return Math.round(strideCm * 10) / 10; // cm
}

function calculateCaloriesPerStep(weight: number, unit: 'metric' | 'imperial'): number {
  let weightKg: number;
  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
  } else {
    weightKg = weight;
  }

  // Average calories per step ≈ 0.04 cal/step for 70kg person
  // Scaled by weight
  return Math.round((0.04 * (weightKg / 70)) * 1000) / 1000;
}

export function getStepLevel(steps: number): StepLevel {
  if (steps < 5000) return 'sedentary';
  if (steps < 7500) return 'low_active';
  if (steps < 10000) return 'somewhat_active';
  if (steps < 12500) return 'active';
  return 'highly_active';
}

export function calculateDailyStepGoal(input: DailyStepGoalInput): DailyStepGoalResult {
  const { age, weight, height, gender, unit, activityLevel, goal } = input;

  // Get base steps for age group
  const ageGroupSteps = getAgeGroupSteps(age);

  // Apply multipliers
  const activityMultiplier = getActivityMultiplier(activityLevel);
  const goalMultiplier = getGoalMultiplier(goal);

  // Gender adjustment (minimal difference)
  const genderMultiplier = gender === 'male' ? 1.0 : 0.95;

  // Calculate recommended steps
  let recommendedSteps = Math.round(
    ageGroupSteps.base * activityMultiplier * goalMultiplier * genderMultiplier
  );

  // Clamp to reasonable range
  recommendedSteps = Math.max(4000, Math.min(recommendedSteps, 18000));

  // Round to nearest 500
  recommendedSteps = Math.round(recommendedSteps / 500) * 500;

  const minimumSteps = Math.round(recommendedSteps * 0.7 / 500) * 500;
  const optimalSteps = Math.round(recommendedSteps * 1.2 / 500) * 500;

  // Calculate stride length
  const strideLength = calculateStrideLength(height, gender, unit);

  // Calculate calories per step
  const caloriesPerStep = calculateCaloriesPerStep(weight, unit);

  // Calculate breakdown
  const strideCm = unit === 'imperial' ? strideLength * 2.54 : strideLength;
  const distanceKm = (recommendedSteps * strideCm) / 100000;
  const distanceMiles = distanceKm * 0.621371;

  // Estimate time (average walking pace: 100 steps/min)
  const estimatedTime = Math.round(recommendedSteps / 100);

  // Calories burned
  const estimatedCalories = Math.round(recommendedSteps * caloriesPerStep);

  // Breakdown: ~60% casual, ~40% brisk
  const casualSteps = Math.round(recommendedSteps * 0.6 / 100) * 100;
  const briskSteps = recommendedSteps - casualSteps;

  const level = getStepLevel(recommendedSteps);

  return {
    recommendedSteps,
    minimumSteps,
    optimalSteps,
    breakdown: {
      casualWalk: casualSteps,
      briskWalk: briskSteps,
      totalSteps: recommendedSteps,
      estimatedDistance: unit === 'imperial' ? Math.round(distanceMiles * 10) / 10 : Math.round(distanceKm * 10) / 10,
      estimatedCalories,
      estimatedTime,
    },
    weeklyTarget: recommendedSteps * 7,
    caloriesPerStep,
    strideLength,
    level,
  };
}
