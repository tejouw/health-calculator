import { WeightGainInput, WeightGainResult, WeeklyMilestone, ActivityLevel, WeightGainRate, MacroSplit } from './weightGainTypes';

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const weeklyGainRates: Record<WeightGainRate, number> = {
  slow: 0.25,
  moderate: 0.5,
  fast: 0.75,
};

function calculateBMR(weightKg: number, heightCm: number, age: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    return 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  }
  return 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
}

function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

function calculateMacros(dailyCalories: number, weightKg: number): MacroSplit {
  const proteinGrams = Math.round(weightKg * 1.8);
  const proteinCalories = proteinGrams * 4;

  const fatCalories = Math.round(dailyCalories * 0.25);
  const fatGrams = Math.round(fatCalories / 9);

  const carbCalories = dailyCalories - proteinCalories - fatCalories;
  const carbGrams = Math.round(carbCalories / 4);

  return {
    protein: proteinGrams,
    carbs: Math.max(carbGrams, 0),
    fat: fatGrams,
  };
}

export function calculateWeightGain(input: WeightGainInput): WeightGainResult {
  let weightKg = input.currentWeight;
  let targetKg = input.targetWeight;
  let heightCm = input.height;

  if (input.unit === 'imperial') {
    weightKg = input.currentWeight * 0.453592;
    targetKg = input.targetWeight * 0.453592;
    heightCm = input.height * 2.54;
  }

  const bmr = calculateBMR(weightKg, heightCm, input.age, input.gender);
  const tdee = Math.round(bmr * activityMultipliers[input.activityLevel]);

  const weeklyGainKg = weeklyGainRates[input.rate];

  const dailyCalorieSurplus = Math.round((weeklyGainKg * 7700) / 7);

  let dailyCalorieTarget = tdee + dailyCalorieSurplus;

  const maxCalories = input.gender === 'male' ? 5000 : 4500;
  dailyCalorieTarget = Math.min(dailyCalorieTarget, maxCalories);

  const totalWeightToGain = targetKg - weightKg;
  const estimatedWeeks = Math.ceil(totalWeightToGain / weeklyGainKg);

  const estimatedDate = new Date();
  estimatedDate.setDate(estimatedDate.getDate() + estimatedWeeks * 7);

  const milestones: WeeklyMilestone[] = [];
  let milestoneInterval: number;

  if (estimatedWeeks <= 12) {
    milestoneInterval = 1;
  } else if (estimatedWeeks <= 26) {
    milestoneInterval = 2;
  } else {
    milestoneInterval = 4;
  }

  for (let week = milestoneInterval; week <= estimatedWeeks; week += milestoneInterval) {
    const gained = weeklyGainKg * week;
    const milestoneDate = new Date();
    milestoneDate.setDate(milestoneDate.getDate() + week * 7);

    let milestoneWeight = weightKg + gained;
    let totalGained = gained;

    if (input.unit === 'imperial') {
      milestoneWeight = milestoneWeight / 0.453592;
      totalGained = totalGained / 0.453592;
    }

    milestones.push({
      week,
      weight: Math.round(milestoneWeight * 10) / 10,
      totalGained: Math.round(totalGained * 10) / 10,
      date: milestoneDate,
    });
  }

  const bmiStart = calculateBMI(weightKg, heightCm);
  const bmiEnd = calculateBMI(targetKg, heightCm);

  const macros = calculateMacros(dailyCalorieTarget, targetKg);

  let displayTotal = totalWeightToGain;
  let displayWeekly = weeklyGainKg;
  if (input.unit === 'imperial') {
    displayTotal = totalWeightToGain / 0.453592;
    displayWeekly = weeklyGainKg / 0.453592;
  }

  return {
    totalWeightToGain: Math.round(displayTotal * 10) / 10,
    weeklyGain: Math.round(displayWeekly * 10) / 10,
    dailyCalorieSurplus,
    dailyCalorieTarget,
    tdee,
    estimatedWeeks,
    estimatedDate,
    milestones,
    bmiStart,
    bmiEnd,
    macros,
  };
}

export function getWeightGainRateLabel(rate: WeightGainRate, locale: 'en' | 'tr'): string {
  const labels: Record<WeightGainRate, { en: string; tr: string }> = {
    slow: { en: 'Slow (0.25 kg/week)', tr: 'Yavaş (0.25 kg/hafta)' },
    moderate: { en: 'Moderate (0.5 kg/week)', tr: 'Orta (0.5 kg/hafta)' },
    fast: { en: 'Fast (0.75 kg/week)', tr: 'Hızlı (0.75 kg/hafta)' },
  };
  return labels[rate][locale];
}

export function getActivityLevelLabel(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const labels: Record<ActivityLevel, { en: string; tr: string }> = {
    sedentary: { en: 'Sedentary (little or no exercise)', tr: 'Hareketsiz (az veya hiç egzersiz yok)' },
    light: { en: 'Lightly Active (1-3 days/week)', tr: 'Hafif Aktif (haftada 1-3 gün)' },
    moderate: { en: 'Moderately Active (3-5 days/week)', tr: 'Orta Aktif (haftada 3-5 gün)' },
    active: { en: 'Very Active (6-7 days/week)', tr: 'Çok Aktif (haftada 6-7 gün)' },
    veryActive: { en: 'Extra Active (intense daily exercise)', tr: 'Ekstra Aktif (yoğun günlük egzersiz)' },
  };
  return labels[level][locale];
}
