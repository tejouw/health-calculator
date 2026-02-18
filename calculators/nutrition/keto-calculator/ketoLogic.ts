import { KetoInput, KetoResult, KetoMacros, KetosisPhase, ActivityLevel } from './ketoTypes';

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const GOAL_CALORIE_ADJUSTMENT: Record<string, number> = {
  lose: -0.2, // 20% deficit
  maintain: 0,
  gain: 0.1, // 10% surplus
};

export function calculateKeto(input: KetoInput): KetoResult {
  const { age, gender, height, weight, unit, activityLevel, goal, bodyFatPercentage } = input;

  // Convert to metric if needed
  let heightCm = height;
  let weightKg = weight;

  if (unit === 'imperial') {
    heightCm = height * 2.54;
    weightKg = weight * 0.453592;
  }

  // Calculate BMR using Mifflin-St Jeor
  let bmr: number;
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  // Calculate TDEE
  const tdee = bmr * ACTIVITY_MULTIPLIERS[activityLevel];

  // Calculate target calories based on goal
  const adjustment = GOAL_CALORIE_ADJUSTMENT[goal];
  const targetCalories = Math.round(tdee * (1 + adjustment));

  // Estimate body fat if not provided
  let estimatedBF = bodyFatPercentage;
  if (!estimatedBF) {
    // Rough estimation using BMI-based formula
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    if (gender === 'male') {
      estimatedBF = 1.20 * bmi + 0.23 * age - 16.2;
    } else {
      estimatedBF = 1.20 * bmi + 0.23 * age - 5.4;
    }
    estimatedBF = Math.max(5, Math.min(60, estimatedBF));
  }

  const fatMass = weightKg * (estimatedBF / 100);
  const leanMass = weightKg - fatMass;

  // Standard Keto Diet (SKD): 70% fat, 25% protein, 5% carbs
  const standardKeto = calculateMacros(targetCalories, 0.70, 0.25, 0.05);

  // Targeted Keto Diet (TKD): 65% fat, 25% protein, 10% carbs
  const targetedKeto = calculateMacros(targetCalories, 0.65, 0.25, 0.10);

  // Cyclical Keto Diet (CKD): average across the week
  // 5 keto days (75/20/5) + 2 high-carb days (25/25/50) averaged
  const ckdCalories = targetCalories;
  const avgFatPct = (0.75 * 5 + 0.25 * 2) / 7;
  const avgProtPct = (0.20 * 5 + 0.25 * 2) / 7;
  const avgCarbPct = (0.05 * 5 + 0.50 * 2) / 7;
  const cyclicalKeto = calculateMacros(ckdCalories, avgFatPct, avgProtPct, avgCarbPct);

  // Water intake recommendation (ml) - higher on keto
  const waterIntake = Math.round(weightKg * 40);

  const ketosisTimeline = getKetosisTimeline();

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories,
    standardKeto,
    targetedKeto,
    cyclicalKeto,
    leanMass: Math.round(leanMass * 10) / 10,
    fatMass: Math.round(fatMass * 10) / 10,
    waterIntake,
    ketosisTimeline,
  };
}

function calculateMacros(
  calories: number,
  fatPct: number,
  proteinPct: number,
  carbPct: number
): KetoMacros {
  const fatCalories = Math.round(calories * fatPct);
  const proteinCalories = Math.round(calories * proteinPct);
  const carbCalories = Math.round(calories * carbPct);

  return {
    calories,
    fat: Math.round(fatCalories / 9),
    protein: Math.round(proteinCalories / 4),
    netCarbs: Math.round(carbCalories / 4),
    fatCalories,
    proteinCalories,
    carbCalories,
    fatPercentage: Math.round(fatPct * 100),
    proteinPercentage: Math.round(proteinPct * 100),
    carbPercentage: Math.round(carbPct * 100),
  };
}

function getKetosisTimeline(): KetosisPhase[] {
  return [
    {
      phase: 'glycogen_depletion',
      duration: '24-48h',
      description: {
        en: 'Your body uses up stored glycogen. You may feel tired and experience carb cravings. This is normal and temporary.',
        tr: 'Vücudunuz depolanmış glikojeni kullanır. Yorgunluk ve karbonhidrat isteği hissedebilirsiniz. Bu normal ve geçicidir.',
      },
      icon: '⚡',
    },
    {
      phase: 'keto_flu',
      duration: '2-7 days',
      description: {
        en: 'The "keto flu" phase. Symptoms include headache, fatigue, brain fog, and irritability. Stay hydrated and ensure adequate electrolytes (sodium, potassium, magnesium).',
        tr: '"Keto gribi" aşaması. Baş ağrısı, yorgunluk, zihin bulanıklığı ve sinirlilik belirtileri görülebilir. Bol su için ve yeterli elektrolit (sodyum, potasyum, magnezyum) alın.',
      },
      icon: '🤒',
    },
    {
      phase: 'early_ketosis',
      duration: '1-2 weeks',
      description: {
        en: 'Your body begins producing ketones for fuel. Energy levels start to stabilize. Fat burning increases significantly.',
        tr: 'Vücudunuz yakıt için keton üretmeye başlar. Enerji seviyeleri dengelenmeye başlar. Yağ yakımı önemli ölçüde artar.',
      },
      icon: '🔥',
    },
    {
      phase: 'fat_adapted',
      duration: '2-4 weeks',
      description: {
        en: 'Full fat adaptation occurs. You experience improved energy, mental clarity, reduced hunger, and stable blood sugar levels.',
        tr: 'Tam yağ adaptasyonu gerçekleşir. Artan enerji, zihinsel berraklık, azalan açlık ve stabil kan şekeri seviyeleri deneyimlersiniz.',
      },
      icon: '💪',
    },
    {
      phase: 'optimized',
      duration: '1-3 months',
      description: {
        en: 'Your body is fully optimized for burning fat. Maximum cognitive and physical performance on ketones. Long-term benefits become apparent.',
        tr: 'Vücudunuz yağ yakımı için tamamen optimize olmuştur. Ketonlarla maksimum bilişsel ve fiziksel performans. Uzun vadeli faydalar belirgin hale gelir.',
      },
      icon: '🏆',
    },
  ];
}

export const ketoFoodCategories = {
  highFat: {
    en: [
      { name: 'Avocado', serving: '1 medium', fat: 21, protein: 3, carbs: 3 },
      { name: 'Olive Oil', serving: '1 tbsp', fat: 14, protein: 0, carbs: 0 },
      { name: 'Butter', serving: '1 tbsp', fat: 12, protein: 0, carbs: 0 },
      { name: 'Coconut Oil', serving: '1 tbsp', fat: 14, protein: 0, carbs: 0 },
      { name: 'Almonds', serving: '28g', fat: 14, protein: 6, carbs: 3 },
      { name: 'Cheese (Cheddar)', serving: '28g', fat: 9, protein: 7, carbs: 0.4 },
      { name: 'Dark Chocolate (85%)', serving: '28g', fat: 13, protein: 3, carbs: 4 },
      { name: 'Macadamia Nuts', serving: '28g', fat: 21, protein: 2, carbs: 2 },
    ],
    tr: [
      { name: 'Avokado', serving: '1 orta boy', fat: 21, protein: 3, carbs: 3 },
      { name: 'Zeytinyağı', serving: '1 yemek kaşığı', fat: 14, protein: 0, carbs: 0 },
      { name: 'Tereyağı', serving: '1 yemek kaşığı', fat: 12, protein: 0, carbs: 0 },
      { name: 'Hindistancevizi Yağı', serving: '1 yemek kaşığı', fat: 14, protein: 0, carbs: 0 },
      { name: 'Badem', serving: '28g', fat: 14, protein: 6, carbs: 3 },
      { name: 'Peynir (Kaşar)', serving: '28g', fat: 9, protein: 7, carbs: 0.4 },
      { name: 'Bitter Çikolata (%85)', serving: '28g', fat: 13, protein: 3, carbs: 4 },
      { name: 'Makademya Fıstığı', serving: '28g', fat: 21, protein: 2, carbs: 2 },
    ],
  },
  protein: {
    en: [
      { name: 'Salmon', serving: '100g', fat: 13, protein: 20, carbs: 0 },
      { name: 'Chicken Thigh', serving: '100g', fat: 10, protein: 26, carbs: 0 },
      { name: 'Eggs', serving: '2 large', fat: 10, protein: 12, carbs: 1 },
      { name: 'Ground Beef (80/20)', serving: '100g', fat: 20, protein: 17, carbs: 0 },
      { name: 'Bacon', serving: '3 slices', fat: 9, protein: 9, carbs: 0 },
    ],
    tr: [
      { name: 'Somon', serving: '100g', fat: 13, protein: 20, carbs: 0 },
      { name: 'Tavuk But', serving: '100g', fat: 10, protein: 26, carbs: 0 },
      { name: 'Yumurta', serving: '2 adet', fat: 10, protein: 12, carbs: 1 },
      { name: 'Kıyma (%80 yağsız)', serving: '100g', fat: 20, protein: 17, carbs: 0 },
      { name: 'Pastırma', serving: '3 dilim', fat: 9, protein: 9, carbs: 0 },
    ],
  },
  lowCarbVeggies: {
    en: [
      { name: 'Spinach', serving: '100g', fat: 0.4, protein: 2.9, carbs: 1.4 },
      { name: 'Broccoli', serving: '100g', fat: 0.4, protein: 2.8, carbs: 4 },
      { name: 'Cauliflower', serving: '100g', fat: 0.3, protein: 1.9, carbs: 3 },
      { name: 'Zucchini', serving: '100g', fat: 0.3, protein: 1.2, carbs: 2.1 },
      { name: 'Bell Pepper', serving: '100g', fat: 0.3, protein: 1, carbs: 4.6 },
    ],
    tr: [
      { name: 'Ispanak', serving: '100g', fat: 0.4, protein: 2.9, carbs: 1.4 },
      { name: 'Brokoli', serving: '100g', fat: 0.4, protein: 2.8, carbs: 4 },
      { name: 'Karnabahar', serving: '100g', fat: 0.3, protein: 1.9, carbs: 3 },
      { name: 'Kabak', serving: '100g', fat: 0.3, protein: 1.2, carbs: 2.1 },
      { name: 'Biber', serving: '100g', fat: 0.3, protein: 1, carbs: 4.6 },
    ],
  },
};
