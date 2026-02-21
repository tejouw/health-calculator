import {
  CaloriesBurnedInput,
  CaloriesBurnedResult,
  Activity,
  ActivityCategory,
  ActivityIntensity,
  FoodEquivalent,
  IntensityInfo,
} from './caloriesBurnedTypes';

// Activity categories
export const activityCategories: ActivityCategory[] = [
  { id: 'running', name: { en: 'Running', tr: 'Koşu' }, icon: 'running' },
  { id: 'cycling', name: { en: 'Cycling', tr: 'Bisiklet' }, icon: 'cycling' },
  { id: 'swimming', name: { en: 'Swimming', tr: 'Yüzme' }, icon: 'swimming' },
  { id: 'gym', name: { en: 'Gym & Weights', tr: 'Spor Salonu & Ağırlık' }, icon: 'gym' },
  { id: 'sports', name: { en: 'Sports', tr: 'Sporlar' }, icon: 'sports' },
  { id: 'cardio', name: { en: 'Cardio & Dance', tr: 'Kardiyo & Dans' }, icon: 'cardio' },
  { id: 'outdoor', name: { en: 'Outdoor', tr: 'Açık Hava' }, icon: 'outdoor' },
  { id: 'daily', name: { en: 'Daily Activities', tr: 'Günlük Aktiviteler' }, icon: 'daily' },
];

// Comprehensive activity list with MET values (Compendium of Physical Activities)
export const activities: Activity[] = [
  // Running
  { id: 'running-slow', categoryId: 'running', name: { en: 'Running (5 mph / 8 km/h)', tr: 'Koşu (8 km/s)' }, met: 8.3, intensity: 'vigorous' },
  { id: 'running-moderate', categoryId: 'running', name: { en: 'Running (6 mph / 10 km/h)', tr: 'Koşu (10 km/s)' }, met: 9.8, intensity: 'vigorous' },
  { id: 'running-fast', categoryId: 'running', name: { en: 'Running (7.5 mph / 12 km/h)', tr: 'Koşu (12 km/s)' }, met: 11.5, intensity: 'very_vigorous' },
  { id: 'running-sprint', categoryId: 'running', name: { en: 'Running (10 mph / 16 km/h)', tr: 'Koşu (16 km/s)' }, met: 14.5, intensity: 'very_vigorous' },
  { id: 'jogging', categoryId: 'running', name: { en: 'Jogging (general)', tr: 'Hafif Koşu (genel)' }, met: 7.0, intensity: 'vigorous' },
  { id: 'walking-brisk', categoryId: 'running', name: { en: 'Brisk Walking (4 mph / 6.4 km/h)', tr: 'Tempolu Yürüyüş (6.4 km/s)' }, met: 5.0, intensity: 'moderate' },
  { id: 'walking-normal', categoryId: 'running', name: { en: 'Walking (3 mph / 4.8 km/h)', tr: 'Yürüyüş (4.8 km/s)' }, met: 3.5, intensity: 'light' },
  { id: 'treadmill', categoryId: 'running', name: { en: 'Treadmill Running', tr: 'Koşu Bandı' }, met: 9.0, intensity: 'vigorous' },

  // Cycling
  { id: 'cycling-leisure', categoryId: 'cycling', name: { en: 'Cycling (leisure, < 16 km/h)', tr: 'Bisiklet (rahat, < 16 km/s)' }, met: 4.0, intensity: 'light' },
  { id: 'cycling-moderate', categoryId: 'cycling', name: { en: 'Cycling (16-19 km/h)', tr: 'Bisiklet (16-19 km/s)' }, met: 6.8, intensity: 'moderate' },
  { id: 'cycling-vigorous', categoryId: 'cycling', name: { en: 'Cycling (19-22 km/h)', tr: 'Bisiklet (19-22 km/s)' }, met: 8.0, intensity: 'vigorous' },
  { id: 'cycling-racing', categoryId: 'cycling', name: { en: 'Cycling (racing, > 25 km/h)', tr: 'Bisiklet (yarış, > 25 km/s)' }, met: 12.0, intensity: 'very_vigorous' },
  { id: 'cycling-stationary-moderate', categoryId: 'cycling', name: { en: 'Stationary Bike (moderate)', tr: 'Sabit Bisiklet (orta)' }, met: 6.8, intensity: 'moderate' },
  { id: 'cycling-stationary-vigorous', categoryId: 'cycling', name: { en: 'Stationary Bike (vigorous)', tr: 'Sabit Bisiklet (yoğun)' }, met: 10.0, intensity: 'vigorous' },
  { id: 'mountain-biking', categoryId: 'cycling', name: { en: 'Mountain Biking', tr: 'Dağ Bisikleti' }, met: 8.5, intensity: 'vigorous' },

  // Swimming
  { id: 'swimming-leisure', categoryId: 'swimming', name: { en: 'Swimming (leisurely)', tr: 'Yüzme (rahat)' }, met: 6.0, intensity: 'moderate' },
  { id: 'swimming-moderate', categoryId: 'swimming', name: { en: 'Swimming (moderate effort)', tr: 'Yüzme (orta tempo)' }, met: 7.0, intensity: 'vigorous' },
  { id: 'swimming-vigorous', categoryId: 'swimming', name: { en: 'Swimming (vigorous laps)', tr: 'Yüzme (yoğun tur)' }, met: 9.8, intensity: 'vigorous' },
  { id: 'swimming-backstroke', categoryId: 'swimming', name: { en: 'Backstroke', tr: 'Sırtüstü Yüzme' }, met: 7.0, intensity: 'vigorous' },
  { id: 'swimming-breaststroke', categoryId: 'swimming', name: { en: 'Breaststroke', tr: 'Kurbağalama' }, met: 10.3, intensity: 'very_vigorous' },
  { id: 'swimming-butterfly', categoryId: 'swimming', name: { en: 'Butterfly', tr: 'Kelebek Stil' }, met: 13.8, intensity: 'very_vigorous' },
  { id: 'aqua-aerobics', categoryId: 'swimming', name: { en: 'Aqua Aerobics', tr: 'Su Aerobiği' }, met: 5.5, intensity: 'moderate' },

  // Gym & Weights
  { id: 'weight-light', categoryId: 'gym', name: { en: 'Weight Lifting (light)', tr: 'Ağırlık Kaldırma (hafif)' }, met: 3.5, intensity: 'light' },
  { id: 'weight-moderate', categoryId: 'gym', name: { en: 'Weight Lifting (moderate)', tr: 'Ağırlık Kaldırma (orta)' }, met: 5.0, intensity: 'moderate' },
  { id: 'weight-vigorous', categoryId: 'gym', name: { en: 'Weight Lifting (vigorous)', tr: 'Ağırlık Kaldırma (yoğun)' }, met: 6.0, intensity: 'vigorous' },
  { id: 'crossfit', categoryId: 'gym', name: { en: 'CrossFit / HIIT', tr: 'CrossFit / HIIT' }, met: 12.0, intensity: 'very_vigorous' },
  { id: 'pilates', categoryId: 'gym', name: { en: 'Pilates', tr: 'Pilates' }, met: 3.8, intensity: 'light' },
  { id: 'yoga-hatha', categoryId: 'gym', name: { en: 'Yoga (Hatha)', tr: 'Yoga (Hatha)' }, met: 2.5, intensity: 'light' },
  { id: 'yoga-power', categoryId: 'gym', name: { en: 'Power Yoga / Vinyasa', tr: 'Power Yoga / Vinyasa' }, met: 4.0, intensity: 'moderate' },
  { id: 'stretching', categoryId: 'gym', name: { en: 'Stretching', tr: 'Esneme' }, met: 2.3, intensity: 'light' },
  { id: 'elliptical', categoryId: 'gym', name: { en: 'Elliptical Trainer', tr: 'Eliptik Bisiklet' }, met: 5.0, intensity: 'moderate' },
  { id: 'rowing-machine', categoryId: 'gym', name: { en: 'Rowing Machine (moderate)', tr: 'Kürek Makinesi (orta)' }, met: 7.0, intensity: 'vigorous' },

  // Sports
  { id: 'basketball', categoryId: 'sports', name: { en: 'Basketball (game)', tr: 'Basketbol (maç)' }, met: 6.5, intensity: 'vigorous' },
  { id: 'soccer', categoryId: 'sports', name: { en: 'Soccer / Football', tr: 'Futbol' }, met: 7.0, intensity: 'vigorous' },
  { id: 'tennis-singles', categoryId: 'sports', name: { en: 'Tennis (singles)', tr: 'Tenis (tekler)' }, met: 8.0, intensity: 'vigorous' },
  { id: 'tennis-doubles', categoryId: 'sports', name: { en: 'Tennis (doubles)', tr: 'Tenis (çiftler)' }, met: 5.0, intensity: 'moderate' },
  { id: 'volleyball', categoryId: 'sports', name: { en: 'Volleyball', tr: 'Voleybol' }, met: 4.0, intensity: 'moderate' },
  { id: 'badminton', categoryId: 'sports', name: { en: 'Badminton', tr: 'Badminton' }, met: 5.5, intensity: 'moderate' },
  { id: 'table-tennis', categoryId: 'sports', name: { en: 'Table Tennis', tr: 'Masa Tenisi' }, met: 4.0, intensity: 'moderate' },
  { id: 'boxing', categoryId: 'sports', name: { en: 'Boxing (sparring)', tr: 'Boks (antrenman)' }, met: 7.8, intensity: 'vigorous' },
  { id: 'martial-arts', categoryId: 'sports', name: { en: 'Martial Arts', tr: 'Dövüş Sanatları' }, met: 10.3, intensity: 'very_vigorous' },
  { id: 'golf-walking', categoryId: 'sports', name: { en: 'Golf (walking)', tr: 'Golf (yürüyerek)' }, met: 4.3, intensity: 'moderate' },
  { id: 'skiing-downhill', categoryId: 'sports', name: { en: 'Skiing (downhill)', tr: 'Kayak (iniş)' }, met: 5.3, intensity: 'moderate' },
  { id: 'skiing-cross', categoryId: 'sports', name: { en: 'Cross-country Skiing', tr: 'Kros Kayak' }, met: 9.0, intensity: 'vigorous' },
  { id: 'ice-skating', categoryId: 'sports', name: { en: 'Ice Skating', tr: 'Buz Pateni' }, met: 5.5, intensity: 'moderate' },

  // Cardio & Dance
  { id: 'aerobics-general', categoryId: 'cardio', name: { en: 'Aerobics (general)', tr: 'Aerobik (genel)' }, met: 6.5, intensity: 'moderate' },
  { id: 'aerobics-step', categoryId: 'cardio', name: { en: 'Step Aerobics', tr: 'Step Aerobik' }, met: 8.5, intensity: 'vigorous' },
  { id: 'dancing-general', categoryId: 'cardio', name: { en: 'Dancing (general)', tr: 'Dans (genel)' }, met: 5.0, intensity: 'moderate' },
  { id: 'zumba', categoryId: 'cardio', name: { en: 'Zumba', tr: 'Zumba' }, met: 6.5, intensity: 'moderate' },
  { id: 'jump-rope-moderate', categoryId: 'cardio', name: { en: 'Jump Rope (moderate)', tr: 'İp Atlama (orta)' }, met: 10.0, intensity: 'vigorous' },
  { id: 'jump-rope-fast', categoryId: 'cardio', name: { en: 'Jump Rope (fast)', tr: 'İp Atlama (hızlı)' }, met: 12.3, intensity: 'very_vigorous' },
  { id: 'stair-climbing', categoryId: 'cardio', name: { en: 'Stair Climbing', tr: 'Merdiven Çıkma' }, met: 8.8, intensity: 'vigorous' },
  { id: 'kickboxing', categoryId: 'cardio', name: { en: 'Kickboxing', tr: 'Kick Boks' }, met: 10.0, intensity: 'very_vigorous' },

  // Outdoor
  { id: 'hiking', categoryId: 'outdoor', name: { en: 'Hiking', tr: 'Doğa Yürüyüşü' }, met: 6.0, intensity: 'moderate' },
  { id: 'rock-climbing', categoryId: 'outdoor', name: { en: 'Rock Climbing', tr: 'Kaya Tırmanışı' }, met: 8.0, intensity: 'vigorous' },
  { id: 'kayaking', categoryId: 'outdoor', name: { en: 'Kayaking / Canoeing', tr: 'Kano / Kayak' }, met: 5.0, intensity: 'moderate' },
  { id: 'rowing', categoryId: 'outdoor', name: { en: 'Rowing', tr: 'Kürek' }, met: 7.0, intensity: 'vigorous' },
  { id: 'skiing', categoryId: 'outdoor', name: { en: 'Water Skiing', tr: 'Su Kayağı' }, met: 6.0, intensity: 'moderate' },
  { id: 'surfing', categoryId: 'outdoor', name: { en: 'Surfing', tr: 'Sörf' }, met: 3.0, intensity: 'light' },
  { id: 'horse-riding', categoryId: 'outdoor', name: { en: 'Horse Riding', tr: 'At Binme' }, met: 5.5, intensity: 'moderate' },

  // Daily Activities
  { id: 'cleaning-house', categoryId: 'daily', name: { en: 'House Cleaning', tr: 'Ev Temizliği' }, met: 3.3, intensity: 'light' },
  { id: 'gardening', categoryId: 'daily', name: { en: 'Gardening', tr: 'Bahçe İşleri' }, met: 3.8, intensity: 'light' },
  { id: 'cooking', categoryId: 'daily', name: { en: 'Cooking', tr: 'Yemek Yapma' }, met: 2.0, intensity: 'light' },
  { id: 'playing-children', categoryId: 'daily', name: { en: 'Playing with Children', tr: 'Çocuklarla Oynama' }, met: 4.0, intensity: 'moderate' },
  { id: 'shopping', categoryId: 'daily', name: { en: 'Shopping (walking)', tr: 'Alışveriş (yürüyerek)' }, met: 2.3, intensity: 'light' },
  { id: 'mowing-lawn', categoryId: 'daily', name: { en: 'Mowing Lawn', tr: 'Çim Biçme' }, met: 5.5, intensity: 'moderate' },
  { id: 'shoveling-snow', categoryId: 'daily', name: { en: 'Shoveling Snow', tr: 'Kar Küreme' }, met: 6.0, intensity: 'moderate' },
];

// Intensity information
export const intensityInfo: Record<ActivityIntensity, IntensityInfo> = {
  light: {
    name: 'light',
    label: { en: 'Light', tr: 'Hafif' },
    color: '#3B82F6',
    description: {
      en: 'You can easily carry on a conversation. Breathing is normal.',
      tr: 'Kolayca konuşabilirsiniz. Nefes alma normaldir.',
    },
    heartRateZone: '50-60%',
  },
  moderate: {
    name: 'moderate',
    label: { en: 'Moderate', tr: 'Orta' },
    color: '#22C55E',
    description: {
      en: 'You can talk but not sing. Breathing is faster but not out of breath.',
      tr: 'Konuşabilirsiniz ama şarkı söyleyemezsiniz. Nefes hızlanmış ama nefes nefese değilsiniz.',
    },
    heartRateZone: '60-70%',
  },
  vigorous: {
    name: 'vigorous',
    label: { en: 'Vigorous', tr: 'Yoğun' },
    color: '#F59E0B',
    description: {
      en: 'You can only say a few words before pausing for breath.',
      tr: 'Nefes almak için durmadan önce sadece birkaç kelime söyleyebilirsiniz.',
    },
    heartRateZone: '70-85%',
  },
  very_vigorous: {
    name: 'very_vigorous',
    label: { en: 'Very Vigorous', tr: 'Çok Yoğun' },
    color: '#EF4444',
    description: {
      en: 'You cannot say more than a word or two without gasping.',
      tr: 'Nefes nefese kalmadan bir veya iki kelimeden fazla söyleyemezsiniz.',
    },
    heartRateZone: '85-100%',
  },
};

// Food equivalents for visual comparison
const foodItems = [
  { name: { en: 'Slice of Pizza', tr: 'Dilim Pizza' }, calories: 285, emoji: '🍕' },
  { name: { en: 'Chocolate Bar', tr: 'Çikolata Bar' }, calories: 230, emoji: '🍫' },
  { name: { en: 'Apple', tr: 'Elma' }, calories: 95, emoji: '🍎' },
  { name: { en: 'Banana', tr: 'Muz' }, calories: 105, emoji: '🍌' },
  { name: { en: 'Glass of Cola', tr: 'Bardak Kola' }, calories: 140, emoji: '🥤' },
  { name: { en: 'Hamburger', tr: 'Hamburger' }, calories: 354, emoji: '🍔' },
  { name: { en: 'Donut', tr: 'Donut' }, calories: 252, emoji: '🍩' },
  { name: { en: 'Bowl of Rice', tr: 'Kase Pilav' }, calories: 206, emoji: '🍚' },
  { name: { en: 'Egg', tr: 'Yumurta' }, calories: 78, emoji: '🥚' },
  { name: { en: 'Glass of Milk', tr: 'Bardak Süt' }, calories: 149, emoji: '🥛' },
  { name: { en: 'Ice Cream Scoop', tr: 'Top Dondurma' }, calories: 137, emoji: '🍦' },
  { name: { en: 'Croissant', tr: 'Kruvasan' }, calories: 231, emoji: '🥐' },
];

/**
 * Calculate food equivalents for burned calories
 */
function getFoodEquivalents(totalCalories: number): FoodEquivalent[] {
  return foodItems
    .map((food) => ({
      ...food,
      amount: Math.round((totalCalories / food.calories) * 10) / 10,
    }))
    .filter((food) => food.amount >= 0.1)
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);
}

/**
 * Get activity by ID
 */
export function getActivityById(id: string): Activity | undefined {
  return activities.find((a) => a.id === id);
}

/**
 * Get activities by category
 */
export function getActivitiesByCategory(categoryId: string): Activity[] {
  return activities.filter((a) => a.categoryId === categoryId);
}

/**
 * Calculate calories burned
 * Formula: Calories = MET x Weight (kg) x Duration (hours)
 */
export function calculateCaloriesBurned(input: CaloriesBurnedInput): CaloriesBurnedResult {
  const activity = getActivityById(input.activityId);
  if (!activity) {
    throw new Error('Activity not found');
  }

  // Convert weight to kg if imperial
  const weightKg = input.unit === 'imperial' ? input.weight * 0.453592 : input.weight;

  // Duration in hours
  const durationHours = input.duration / 60;

  // Calories = MET × Weight(kg) × Duration(hours)
  const totalCalories = Math.round(activity.met * weightKg * durationHours);
  const caloriesPerMinute = Math.round((totalCalories / input.duration) * 10) / 10;
  const caloriesPerHour = Math.round(activity.met * weightKg);

  // Projections
  const weeklyProjection = totalCalories * 3; // Assuming 3 sessions per week
  const monthlyProjection = totalCalories * 12; // Assuming 3 sessions per week × 4 weeks

  const foodEquivalents = getFoodEquivalents(totalCalories);

  return {
    totalCalories,
    caloriesPerMinute,
    caloriesPerHour,
    met: activity.met,
    activityName: activity.name,
    intensity: activity.intensity,
    foodEquivalents,
    weeklyProjection,
    monthlyProjection,
  };
}

/**
 * Get comparison activities sorted by calories burned for given weight and duration
 */
export function getActivityComparisons(
  weightKg: number,
  duration: number,
  currentActivityId: string
): Array<{ activity: Activity; calories: number }> {
  return activities
    .filter((a) => a.id !== currentActivityId)
    .map((activity) => ({
      activity,
      calories: Math.round(activity.met * weightKg * (duration / 60)),
    }))
    .sort((a, b) => b.calories - a.calories);
}
