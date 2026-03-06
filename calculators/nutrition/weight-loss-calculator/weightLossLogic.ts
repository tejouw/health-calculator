import { WeightLossInput, WeightLossResult, WeeklyMilestone, ActivityLevel, WeightLossRate } from './weightLossTypes';

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const RATE_WEEKLY_KG: Record<WeightLossRate, number> = {
  slow: 0.25,
  moderate: 0.5,
  fast: 1.0,
};

function calculateBMR(weight: number, height: number, age: number, gender: 'male' | 'female'): number {
  // Mifflin-St Jeor Equation
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }
  return 10 * weight + 6.25 * height - 5 * age - 161;
}

function calculateBMI(weight: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return Math.round((weight / (heightM * heightM)) * 10) / 10;
}

export function calculateWeightLoss(input: WeightLossInput): WeightLossResult {
  let weightKg = input.currentWeight;
  let targetKg = input.targetWeight;
  let heightCm = input.height;

  if (input.unit === 'imperial') {
    weightKg = input.currentWeight * 0.453592;
    targetKg = input.targetWeight * 0.453592;
    heightCm = input.height * 2.54;
  }

  const totalWeightToLose = weightKg - targetKg;
  const weeklyLossKg = RATE_WEEKLY_KG[input.rate];

  // Calculate TDEE at starting weight
  const bmr = calculateBMR(weightKg, heightCm, input.age, input.gender);
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[input.activityLevel]);

  // Daily calorie deficit needed (1 kg fat ≈ 7700 kcal)
  const dailyCalorieDeficit = Math.round((weeklyLossKg * 7700) / 7);
  const dailyCalorieTarget = Math.max(
    input.gender === 'male' ? 1500 : 1200,
    Math.round(tdee - dailyCalorieDeficit)
  );

  // Actual daily deficit (might be limited by minimum calorie floor)
  const actualDailyDeficit = tdee - dailyCalorieTarget;
  const actualWeeklyLoss = (actualDailyDeficit * 7) / 7700;

  const estimatedWeeks = Math.ceil(totalWeightToLose / actualWeeklyLoss);

  const today = new Date();
  const estimatedDate = new Date(today);
  estimatedDate.setDate(estimatedDate.getDate() + estimatedWeeks * 7);

  // Generate milestones
  const milestones: WeeklyMilestone[] = [];
  let currentWeight = weightKg;

  // Show milestones at reasonable intervals
  const milestoneInterval = estimatedWeeks <= 12 ? 1 : estimatedWeeks <= 26 ? 2 : 4;

  for (let week = milestoneInterval; week <= estimatedWeeks; week += milestoneInterval) {
    currentWeight = weightKg - actualWeeklyLoss * week;
    if (currentWeight < targetKg) currentWeight = targetKg;

    const milestoneDate = new Date(today);
    milestoneDate.setDate(milestoneDate.getDate() + week * 7);

    const totalLost = weightKg - currentWeight;

    milestones.push({
      week,
      weight: Math.round(currentWeight * 10) / 10,
      totalLost: Math.round(totalLost * 10) / 10,
      date: milestoneDate,
    });

    if (currentWeight <= targetKg) break;
  }

  // Ensure final milestone is included
  if (milestones.length === 0 || milestones[milestones.length - 1].weight > targetKg) {
    const finalDate = new Date(today);
    finalDate.setDate(finalDate.getDate() + estimatedWeeks * 7);
    milestones.push({
      week: estimatedWeeks,
      weight: Math.round(targetKg * 10) / 10,
      totalLost: Math.round(totalWeightToLose * 10) / 10,
      date: finalDate,
    });
  }

  const bmiStart = calculateBMI(weightKg, heightCm);
  const bmiEnd = calculateBMI(targetKg, heightCm);

  // Convert back to imperial for display if needed
  const displayTotalLoss = input.unit === 'imperial'
    ? Math.round(totalWeightToLose / 0.453592 * 10) / 10
    : Math.round(totalWeightToLose * 10) / 10;

  const displayWeeklyLoss = input.unit === 'imperial'
    ? Math.round(actualWeeklyLoss / 0.453592 * 10) / 10
    : Math.round(actualWeeklyLoss * 10) / 10;

  return {
    totalWeightToLose: displayTotalLoss,
    weeklyLoss: displayWeeklyLoss,
    dailyCalorieDeficit: actualDailyDeficit,
    dailyCalorieTarget,
    tdee,
    estimatedWeeks,
    estimatedDate,
    milestones: input.unit === 'imperial'
      ? milestones.map(m => ({
          ...m,
          weight: Math.round(m.weight / 0.453592 * 10) / 10,
          totalLost: Math.round(m.totalLost / 0.453592 * 10) / 10,
        }))
      : milestones,
    bmiStart,
    bmiEnd,
  };
}

export function getWeightLossRateLabel(rate: WeightLossRate, locale: 'en' | 'tr'): string {
  const labels: Record<WeightLossRate, { en: string; tr: string }> = {
    slow: { en: 'Slow (~0.25 kg/week)', tr: 'Yavaş (~0.25 kg/hafta)' },
    moderate: { en: 'Moderate (~0.5 kg/week)', tr: 'Orta (~0.5 kg/hafta)' },
    fast: { en: 'Fast (~1 kg/week)', tr: 'Hızlı (~1 kg/hafta)' },
  };
  return labels[rate][locale];
}

export function getActivityLevelLabel(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const labels: Record<ActivityLevel, { en: string; tr: string }> = {
    sedentary: { en: 'Sedentary (little/no exercise)', tr: 'Hareketsiz (az/hiç egzersiz)' },
    light: { en: 'Light (1-3 days/week)', tr: 'Hafif aktif (haftada 1-3 gün)' },
    moderate: { en: 'Moderate (3-5 days/week)', tr: 'Orta aktif (haftada 3-5 gün)' },
    active: { en: 'Active (6-7 days/week)', tr: 'Aktif (haftada 6-7 gün)' },
    veryActive: { en: 'Very Active (2x/day)', tr: 'Çok aktif (günde 2 kez)' },
  };
  return labels[level][locale];
}
