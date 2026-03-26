import {
  SugarIntakeInput,
  SugarIntakeResult,
  SugarCategory,
  SugarCategoryInfo,
  FoodSugarComparison,
  ActivityLevel,
} from './sugarIntakeTypes';

// Activity level multipliers for TDEE estimation
const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export const SUGAR_CATEGORIES: Record<SugarCategory, SugarCategoryInfo> = {
  very_low: {
    label: { en: 'Very Low', tr: 'Çok Düşük' },
    color: '#22c55e',
    icon: '🟢',
    description: {
      en: 'Your sugar limit is very low due to health conditions. Focus on whole foods and avoid all added sugars.',
      tr: 'Sağlık durumunuz nedeniyle şeker limitiniz çok düşük. Doğal gıdalara odaklanın ve tüm eklenmiş şekerlerden kaçının.',
    },
  },
  low: {
    label: { en: 'Low', tr: 'Düşük' },
    color: '#84cc16',
    icon: '🟡',
    description: {
      en: 'A low sugar target helps maintain stable blood sugar and supports weight management goals.',
      tr: 'Düşük şeker hedefi, kan şekerini dengede tutmaya ve kilo yönetimi hedeflerinize ulaşmanıza yardımcı olur.',
    },
  },
  moderate: {
    label: { en: 'Moderate', tr: 'Orta' },
    color: '#eab308',
    icon: '🟡',
    description: {
      en: 'This is the WHO recommended maximum. Staying within this limit supports overall health.',
      tr: 'Bu, DSÖ tarafından önerilen maksimum değerdir. Bu sınırda kalmak genel sağlığı destekler.',
    },
  },
  high: {
    label: { en: 'High', tr: 'Yüksek' },
    color: '#f97316',
    icon: '🟠',
    description: {
      en: 'Your caloric needs allow more sugar, but try to stay under the WHO 10% guideline for optimal health.',
      tr: 'Kalorik ihtiyacınız daha fazla şekere izin verir, ancak optimum sağlık için DSÖ %10 kılavuzunun altında kalmaya çalışın.',
    },
  },
  very_high: {
    label: { en: 'Very High', tr: 'Çok Yüksek' },
    color: '#ef4444',
    icon: '🔴',
    description: {
      en: 'Even with high caloric needs, aim to minimize added sugar intake for long-term health benefits.',
      tr: 'Yüksek kalorik ihtiyaçlara rağmen, uzun vadeli sağlık için eklenen şeker alımını en aza indirmeyi hedefleyin.',
    },
  },
};

// Common foods with sugar content for comparison
export const COMMON_FOOD_SUGAR: FoodSugarComparison[] = [
  { food: { en: 'Cola (330ml can)', tr: 'Kola (330ml kutu)' }, sugarGrams: 35, icon: '🥤' },
  { food: { en: 'Chocolate bar (50g)', tr: 'Çikolata bar (50g)' }, sugarGrams: 25, icon: '🍫' },
  { food: { en: 'Apple (medium)', tr: 'Elma (orta boy)' }, sugarGrams: 19, icon: '🍎' },
  { food: { en: 'Orange juice (250ml)', tr: 'Portakal suyu (250ml)' }, sugarGrams: 22, icon: '🍊' },
  { food: { en: 'Yogurt, flavored (200g)', tr: 'Meyveli yoğurt (200g)' }, sugarGrams: 20, icon: '🥛' },
  { food: { en: 'Ice cream (1 scoop)', tr: 'Dondurma (1 top)' }, sugarGrams: 14, icon: '🍨' },
  { food: { en: 'Honey (1 tbsp)', tr: 'Bal (1 yemek kaşığı)' }, sugarGrams: 17, icon: '🍯' },
  { food: { en: 'Banana (medium)', tr: 'Muz (orta boy)' }, sugarGrams: 14, icon: '🍌' },
  { food: { en: 'Breakfast cereal (40g)', tr: 'Kahvaltılık gevrek (40g)' }, sugarGrams: 12, icon: '🥣' },
  { food: { en: 'Turkish delight (3 pcs)', tr: 'Lokum (3 adet)' }, sugarGrams: 18, icon: '🍬' },
  { food: { en: 'Baklava (1 piece)', tr: 'Baklava (1 dilim)' }, sugarGrams: 23, icon: '🥮' },
  { food: { en: 'Ketchup (2 tbsp)', tr: 'Ketçap (2 yemek kaşığı)' }, sugarGrams: 8, icon: '🍅' },
];

/**
 * Estimate daily calorie needs using Mifflin-St Jeor equation
 */
function estimateDailyCalories(input: SugarIntakeInput): number {
  const weightKg = input.unit === 'imperial' ? input.weight * 0.453592 : input.weight;

  // Mifflin-St Jeor: rough estimate assuming average height
  // For a more accurate estimate, height would be needed, but we use weight-based approximation
  let bmr: number;
  if (input.gender === 'male') {
    bmr = 10 * weightKg + 6.25 * 175 - 5 * input.age + 5; // assume 175cm avg male
  } else {
    bmr = 10 * weightKg + 6.25 * 162 - 5 * input.age - 161; // assume 162cm avg female
  }

  return Math.round(bmr * ACTIVITY_MULTIPLIERS[input.activityLevel]);
}

/**
 * Determine sugar category based on the recommended max
 */
function getSugarCategory(recommendedMax: number, healthCondition: string): SugarCategory {
  if (healthCondition === 'diabetes' || healthCondition === 'prediabetes') {
    return 'very_low';
  }
  if (healthCondition === 'weight_loss' || healthCondition === 'heart_disease') {
    return 'low';
  }
  if (recommendedMax <= 25) {
    return 'moderate';
  }
  if (recommendedMax <= 50) {
    return 'high';
  }
  return 'very_high';
}

/**
 * Get relevant food comparisons based on the sugar limit
 */
function getFoodComparisons(maxGrams: number): FoodSugarComparison[] {
  // Return foods that help visualize the limit
  return COMMON_FOOD_SUGAR.filter((food) => food.sugarGrams <= maxGrams * 2)
    .sort((a, b) => b.sugarGrams - a.sugarGrams)
    .slice(0, 6);
}

/**
 * Get personalized tips based on health condition and sugar category
 */
function getTips(input: SugarIntakeInput): { en: string; tr: string }[] {
  const tips: { en: string; tr: string }[] = [
    {
      en: 'Read nutrition labels carefully — sugar hides under 50+ different names including sucrose, fructose, and corn syrup.',
      tr: 'Besin etiketlerini dikkatle okuyun — şeker, sukroz, fruktoz ve mısır şurubu dahil 50\'den fazla farklı isim altında gizlenir.',
    },
    {
      en: 'Replace sugary drinks with water, unsweetened tea, or sparkling water with lemon.',
      tr: 'Şekerli içecekleri su, şekersiz çay veya limonlu maden suyu ile değiştirin.',
    },
    {
      en: 'Choose whole fruits over fruit juices — the fiber in whole fruit slows sugar absorption.',
      tr: 'Meyve suları yerine bütün meyveleri tercih edin — bütün meyvedeki lif, şeker emilimini yavaşlatır.',
    },
  ];

  if (input.healthCondition === 'diabetes' || input.healthCondition === 'prediabetes') {
    tips.push({
      en: 'Monitor your blood sugar levels regularly and track how different foods affect your readings.',
      tr: 'Kan şekeri seviyelerinizi düzenli olarak izleyin ve farklı gıdaların değerlerinizi nasıl etkilediğini takip edin.',
    });
  }

  if (input.healthCondition === 'weight_loss') {
    tips.push({
      en: 'Reducing sugar intake is one of the most effective strategies for weight loss, especially from beverages.',
      tr: 'Şeker alımını azaltmak, özellikle içeceklerden gelen şekeri kesmek, kilo verme için en etkili stratejilerden biridir.',
    });
  }

  tips.push(
    {
      en: 'Watch out for "healthy" foods with hidden sugars: granola bars, flavored yogurt, smoothies, and salad dressings.',
      tr: 'Gizli şeker içeren "sağlıklı" gıdalara dikkat edin: granola barlar, meyveli yoğurt, smoothie\'ler ve salata sosları.',
    },
    {
      en: 'Gradually reduce sugar rather than quitting cold turkey — your taste buds adjust within 2-3 weeks.',
      tr: 'Şekeri bir anda kesmek yerine kademeli olarak azaltın — tat algınız 2-3 hafta içinde uyum sağlar.',
    },
    {
      en: 'Natural sugars in whole fruits, vegetables, and plain dairy are generally not a concern — focus on limiting added sugars.',
      tr: 'Bütün meyveler, sebzeler ve sade süt ürünlerindeki doğal şekerler genellikle sorun değildir — eklenmiş şekerleri sınırlamaya odaklanın.',
    }
  );

  return tips;
}

/**
 * Main calculation function
 */
export function calculateSugarIntake(input: SugarIntakeInput): SugarIntakeResult {
  const dailyCalories = estimateDailyCalories(input);

  // WHO: <10% of total energy from free sugars (strong recommendation)
  // WHO: <5% of total energy for additional health benefits (conditional recommendation)
  // AHA: Men ≤36g (9 tsp), Women ≤25g (6 tsp)
  let whoMaxPercent = 10;
  let whoIdealPercent = 5;

  // Adjust for health conditions
  if (input.healthCondition === 'diabetes') {
    whoMaxPercent = 5;
    whoIdealPercent = 3;
  } else if (input.healthCondition === 'prediabetes') {
    whoMaxPercent = 5;
    whoIdealPercent = 3;
  } else if (input.healthCondition === 'heart_disease') {
    whoMaxPercent = 5;
    whoIdealPercent = 3;
  } else if (input.healthCondition === 'weight_loss') {
    whoMaxPercent = 5;
    whoIdealPercent = 3;
  }

  // 1g sugar = 4 calories
  const sugarCaloriesMax = Math.round((dailyCalories * whoMaxPercent) / 100);
  const whoRecommendedMax = Math.round(sugarCaloriesMax / 4);
  const whoIdealMax = Math.round((dailyCalories * whoIdealPercent) / 100 / 4);

  // AHA limits
  const ahaRecommendedMax = input.gender === 'male' ? 36 : 25;

  // Use the lower of WHO or AHA as the final recommendation
  const effectiveMax = Math.min(whoRecommendedMax, ahaRecommendedMax);

  // 1 teaspoon ≈ 4g sugar
  const teaspoonsMax = Math.round((effectiveMax / 4) * 10) / 10;
  const teaspoonsIdeal = Math.round((whoIdealMax / 4) * 10) / 10;

  const category = getSugarCategory(effectiveMax, input.healthCondition);
  const foodComparisons = getFoodComparisons(effectiveMax);
  const tips = getTips(input);

  return {
    whoRecommendedMax: effectiveMax,
    whoIdealMax,
    ahaRecommendedMax,
    dailyCalories,
    sugarCaloriesMax,
    category,
    teaspoonsMax,
    teaspoonsIdeal,
    foodComparisons,
    weeklyLimit: effectiveMax * 7,
    monthlyLimit: effectiveMax * 30,
    tips,
  };
}
