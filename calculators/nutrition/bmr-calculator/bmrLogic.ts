import { BMRInput, BMRResult, ActivityLevel } from './bmrTypes';

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

/**
 * Calculate BMR using Mifflin-St Jeor Equation (most accurate modern formula)
 * This formula is more accurate than Harris-Benedict, especially for modern populations
 */
function calculateBMRMifflinStJeor(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  unit: 'metric' | 'imperial'
): number {
  let weightKg: number;
  let heightCm: number;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
    heightCm = height * 2.54;
  } else {
    weightKg = weight;
    heightCm = height;
  }

  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  return Math.round(bmr);
}

/**
 * Calculate BMR using Harris-Benedict Equation (classic formula, less accurate for modern populations)
 * Provided as comparison; Mifflin-St Jeor is generally preferred
 */
function calculateBMRHarrisBenedict(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  unit: 'metric' | 'imperial'
): number {
  let weightKg: number;
  let heightCm: number;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
    heightCm = height * 2.54;
  } else {
    weightKg = weight;
    heightCm = height;
  }

  // Harris-Benedict Original (1919)
  const bmr =
    gender === 'male'
      ? 88.362 + 13.397 * weightKg + 4.799 * heightCm - 5.677 * age
      : 447.593 + 9.247 * weightKg + 3.098 * heightCm - 4.33 * age;

  return Math.round(bmr);
}

/**
 * Calculate daily calorie needs at different activity levels (TDEE for each level)
 */
function calculateActivityLevelCalories(bmr: number): Record<ActivityLevel, number> {
  return {
    sedentary: Math.round(bmr * activityMultipliers.sedentary),
    light: Math.round(bmr * activityMultipliers.light),
    moderate: Math.round(bmr * activityMultipliers.moderate),
    active: Math.round(bmr * activityMultipliers.active),
    veryActive: Math.round(bmr * activityMultipliers.veryActive),
  };
}

/**
 * Calculate metabolic age by comparing BMR to average for different age groups
 */
function calculateMetabolicAge(bmr: number, gender: 'male' | 'female', actualAge: number): number {
  // Average BMR by age (approximations)
  const averageBMR = {
    male: {
      20: 1750, 30: 1700, 40: 1650, 50: 1600, 60: 1550, 70: 1500, 80: 1450,
    },
    female: {
      20: 1450, 30: 1400, 40: 1350, 50: 1300, 60: 1250, 70: 1200, 80: 1150,
    },
  };

  const ages = [20, 30, 40, 50, 60, 70, 80];
  const bmrValues = ages.map(age => averageBMR[gender][age as keyof typeof averageBMR.male]);

  // Find closest matching age based on BMR
  let closestAge = actualAge;
  let minDiff = Infinity;

  ages.forEach((age, index) => {
    const diff = Math.abs(bmr - bmrValues[index]);
    if (diff < minDiff) {
      minDiff = diff;
      closestAge = age;
    }
  });

  return closestAge;
}

/**
 * Determine metabolic rate category
 */
function getMetabolicRate(bmr: number, age: number, gender: 'male' | 'female'): 'low' | 'normal' | 'high' {
  const expectedBMR = gender === 'male'
    ? 1700 - (age - 30) * 5  // Decreases with age
    : 1400 - (age - 30) * 5;

  const diff = ((bmr - expectedBMR) / expectedBMR) * 100;

  if (diff < -10) return 'low';
  if (diff > 10) return 'high';
  return 'normal';
}

/**
 * Calculate BMI
 */
function calculateBMI(weight: number, height: number, unit: 'metric' | 'imperial'): number {
  let weightKg = weight;
  let heightM = height / 100;

  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
    heightM = (height * 2.54) / 100;
  }

  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

/**
 * Calculate ideal weight range based on height
 */
function calculateIdealWeight(height: number, unit: 'metric' | 'imperial'): { min: number; max: number } {
  let heightM = height / 100;
  if (unit === 'imperial') {
    heightM = (height * 2.54) / 100;
  }

  // Using BMI 18.5-24.9 as healthy range
  const minWeight = 18.5 * heightM * heightM;
  const maxWeight = 24.9 * heightM * heightM;

  if (unit === 'imperial') {
    return {
      min: Math.round(minWeight / 0.453592),
      max: Math.round(maxWeight / 0.453592),
    };
  }

  return {
    min: Math.round(minWeight),
    max: Math.round(maxWeight),
  };
}

/**
 * Calculate daily water intake recommendation
 */
function calculateWaterIntake(weight: number, unit: 'metric' | 'imperial'): number {
  let weightKg = weight;
  if (unit === 'imperial') {
    weightKg = weight * 0.453592;
  }

  // 30-35 ml per kg of body weight
  const liters = (weightKg * 33) / 1000;

  if (unit === 'imperial') {
    return Math.round(liters * 33.814 * 10) / 10; // Convert to oz
  }

  return Math.round(liters * 10) / 10;
}

/**
 * Calculate macro suggestions for different goals
 */
function calculateMacroSuggestions(tdee: number, weightKg: number) {
  // Weight Loss: Higher protein, moderate carbs, lower fat
  const weightLossProtein = Math.round(weightKg * 2.2); // 2.2g per kg
  const weightLossFat = Math.round((tdee * 0.25) / 9); // 25% from fat
  const weightLossProteinCals = weightLossProtein * 4;
  const weightLossFatCals = weightLossFat * 9;
  const weightLossCarbsCals = tdee - 500 - weightLossProteinCals - weightLossFatCals;
  const weightLossCarbs = Math.round(weightLossCarbsCals / 4);

  // Maintenance: Balanced
  const maintenanceProtein = Math.round(weightKg * 1.6);
  const maintenanceFat = Math.round((tdee * 0.30) / 9);
  const maintenanceProteinCals = maintenanceProtein * 4;
  const maintenanceFatCals = maintenanceFat * 9;
  const maintenanceCarbsCals = tdee - maintenanceProteinCals - maintenanceFatCals;
  const maintenanceCarbs = Math.round(maintenanceCarbsCals / 4);

  // Muscle Gain: High protein, high carbs
  const muscleGainProtein = Math.round(weightKg * 2.0);
  const muscleGainFat = Math.round(((tdee + 400) * 0.25) / 9);
  const muscleGainProteinCals = muscleGainProtein * 4;
  const muscleGainFatCals = muscleGainFat * 9;
  const muscleGainCarbsCals = tdee + 400 - muscleGainProteinCals - muscleGainFatCals;
  const muscleGainCarbs = Math.round(muscleGainCarbsCals / 4);

  return {
    weightLoss: {
      protein: { grams: weightLossProtein, calories: weightLossProteinCals, percentage: Math.round((weightLossProteinCals / (tdee - 500)) * 100) },
      carbs: { grams: weightLossCarbs, calories: weightLossCarbsCals, percentage: Math.round((weightLossCarbsCals / (tdee - 500)) * 100) },
      fat: { grams: weightLossFat, calories: weightLossFatCals, percentage: Math.round((weightLossFatCals / (tdee - 500)) * 100) },
    },
    maintenance: {
      protein: { grams: maintenanceProtein, calories: maintenanceProteinCals, percentage: Math.round((maintenanceProteinCals / tdee) * 100) },
      carbs: { grams: maintenanceCarbs, calories: maintenanceCarbsCals, percentage: Math.round((maintenanceCarbsCals / tdee) * 100) },
      fat: { grams: maintenanceFat, calories: maintenanceFatCals, percentage: Math.round((maintenanceFatCals / tdee) * 100) },
    },
    muscleGain: {
      protein: { grams: muscleGainProtein, calories: muscleGainProteinCals, percentage: Math.round((muscleGainProteinCals / (tdee + 400)) * 100) },
      carbs: { grams: muscleGainCarbs, calories: muscleGainCarbsCals, percentage: Math.round((muscleGainCarbsCals / (tdee + 400)) * 100) },
      fat: { grams: muscleGainFat, calories: muscleGainFatCals, percentage: Math.round((muscleGainFatCals / (tdee + 400)) * 100) },
    },
  };
}

/**
 * Calculate meal distribution plans
 */
function calculateMealPlans(tdee: number) {
  return {
    threeMeals: {
      breakfast: Math.round(tdee * 0.30),
      lunch: Math.round(tdee * 0.40),
      dinner: Math.round(tdee * 0.30),
      snacks: 0,
    },
    fourMeals: {
      breakfast: Math.round(tdee * 0.25),
      lunch: Math.round(tdee * 0.35),
      dinner: Math.round(tdee * 0.30),
      snacks: Math.round(tdee * 0.10),
    },
    sixMeals: {
      breakfast: Math.round(tdee * 0.20),
      lunch: Math.round(tdee * 0.25),
      dinner: Math.round(tdee * 0.25),
      snacks: Math.round(tdee * 0.30), // 3 snacks
    },
  };
}

/**
 * Calculate weight goal timeline
 */
function calculateWeightGoal(currentWeight: number, goalWeight: number, activityLevel: ActivityLevel, bmr: number): any {
  const weightDiff = Math.abs(currentWeight - goalWeight);
  const isLoss = currentWeight > goalWeight;

  // Safe weekly change: 0.5-1 kg for loss, 0.25-0.5 kg for gain
  const weeklyChange = isLoss ? 0.5 : 0.35;
  const weeksToGoal = Math.ceil(weightDiff / weeklyChange);

  const today = new Date();
  const goalDate = new Date(today.getTime() + weeksToGoal * 7 * 24 * 60 * 60 * 1000);

  return {
    currentWeight,
    goalWeight,
    weeklyChange,
    weeksToGoal,
    estimatedDate: goalDate.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' }),
  };
}

/**
 * Main BMR calculator function
 * Returns BMR using Mifflin-St Jeor formula and comparison with Harris-Benedict
 * Also provides TDEE calculations for each activity level
 */
export function calculateBMR(input: BMRInput): BMRResult {
  const bmrMifflin = calculateBMRMifflinStJeor(
    input.weight,
    input.height,
    input.age,
    input.gender,
    input.unit
  );

  const bmrHarris = calculateBMRHarrisBenedict(
    input.weight,
    input.height,
    input.age,
    input.gender,
    input.unit
  );

  const activityLevels = calculateActivityLevelCalories(bmrMifflin);

  // Enhanced calculations
  const metabolicAge = calculateMetabolicAge(bmrMifflin, input.gender, input.age);
  const metabolicRate = getMetabolicRate(bmrMifflin, input.age, input.gender);
  const bmi = calculateBMI(input.weight, input.height, input.unit);
  const idealWeight = calculateIdealWeight(input.height, input.unit);
  const dailyWaterIntake = calculateWaterIntake(input.weight, input.unit);

  // Use moderate activity for macro calculations
  const tdeeModerate = activityLevels.moderate;
  let weightKg = input.weight;
  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.453592;
  }

  const macroSuggestions = calculateMacroSuggestions(tdeeModerate, weightKg);
  const mealPlans = calculateMealPlans(tdeeModerate);

  // Weekly and monthly calories
  const weeklyCalories = {
    sedentary: activityLevels.sedentary * 7,
    light: activityLevels.light * 7,
    moderate: activityLevels.moderate * 7,
    active: activityLevels.active * 7,
    veryActive: activityLevels.veryActive * 7,
  } as Record<ActivityLevel, number>;

  const monthlyCalories = {
    sedentary: activityLevels.sedentary * 30,
    light: activityLevels.light * 30,
    moderate: activityLevels.moderate * 30,
    active: activityLevels.active * 30,
    veryActive: activityLevels.veryActive * 30,
  } as Record<ActivityLevel, number>;

  // Weight goal calculation
  let weightGoal;
  if (input.goalWeight && input.goalWeight !== input.weight) {
    weightGoal = calculateWeightGoal(input.weight, input.goalWeight, 'moderate', bmrMifflin);
  }

  return {
    bmr: bmrMifflin,
    bmrHarrisBenedict: bmrHarris,
    activityLevels,
    metabolicAge,
    metabolicRate,
    bmi,
    idealWeight,
    dailyWaterIntake,
    macroSuggestions,
    mealPlans,
    weeklyCalories,
    monthlyCalories,
    weightGoal,
  };
}

/**
 * Get activity level description
 */
export function getActivityDescription(level: ActivityLevel, locale: 'en' | 'tr'): string {
  const descriptions = {
    sedentary: {
      en: 'Little or no exercise, mostly sitting',
      tr: 'Çok az veya hiç egzersiz yok, çoğunlukla oturan',
    },
    light: {
      en: 'Light exercise 1-3 days per week',
      tr: 'Haftada 1-3 gün hafif egzersiz',
    },
    moderate: {
      en: 'Moderate exercise 3-5 days per week',
      tr: 'Haftada 3-5 gün orta düzey egzersiz',
    },
    active: {
      en: 'Intense exercise 6-7 days per week',
      tr: 'Haftada 6-7 gün yoğun egzersiz',
    },
    veryActive: {
      en: 'Very intense exercise or physical job, twice daily',
      tr: 'Çok yoğun egzersiz veya fiziksel iş, günde iki kez',
    },
  };

  return descriptions[level][locale];
}

/**
 * Get the caloric deficit/surplus recommendation for weight loss
 */
export function getWeightLossTarget(bmr: number, activityLevel: ActivityLevel): number {
  const tdee = Math.round(bmr * activityMultipliers[activityLevel]);
  // 500 calorie deficit for approximately 1 pound fat loss per week
  return tdee - 500;
}

/**
 * Get the caloric surplus recommendation for muscle gain
 */
export function getMuscleGainTarget(bmr: number, activityLevel: ActivityLevel): number {
  const tdee = Math.round(bmr * activityMultipliers[activityLevel]);
  // 300-500 calorie surplus for muscle gain
  return tdee + 400;
}

/**
 * Get caloric maintenance (TDEE) for a specific activity level
 */
export function getTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return Math.round(bmr * activityMultipliers[activityLevel]);
}

export { activityMultipliers };
