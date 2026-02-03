import { ProteinInput, ActivityLevel, Goal, ActivityLevelInfo, GoalInfo } from './proteinTypes';

export const activityLevels: Record<ActivityLevel, ActivityLevelInfo> = {
  sedentary: {
    name: 'sedentary',
    label: {
      en: 'Sedentary',
      tr: 'Hareketsiz',
    },
    description: {
      en: 'Little or no exercise, desk job',
      tr: 'Az veya hiç egzersiz yok, masa başı iş',
    },
    multiplier: 0.8,
  },
  light: {
    name: 'light',
    label: {
      en: 'Lightly Active',
      tr: 'Hafif Aktif',
    },
    description: {
      en: 'Light exercise 1-3 days/week',
      tr: 'Haftada 1-3 gün hafif egzersiz',
    },
    multiplier: 1.0,
  },
  moderate: {
    name: 'moderate',
    label: {
      en: 'Moderately Active',
      tr: 'Orta Derecede Aktif',
    },
    description: {
      en: 'Moderate exercise 3-5 days/week',
      tr: 'Haftada 3-5 gün orta derecede egzersiz',
    },
    multiplier: 1.2,
  },
  active: {
    name: 'active',
    label: {
      en: 'Very Active',
      tr: 'Çok Aktif',
    },
    description: {
      en: 'Hard exercise 6-7 days/week',
      tr: 'Haftada 6-7 gün yoğun egzersiz',
    },
    multiplier: 1.5,
  },
  very_active: {
    name: 'very_active',
    label: {
      en: 'Extremely Active',
      tr: 'Son Derece Aktif',
    },
    description: {
      en: 'Very hard exercise, physical job, training twice/day',
      tr: 'Çok yoğun egzersiz, fiziksel iş, günde iki antrenman',
    },
    multiplier: 1.8,
  },
};

export const goals: Record<Goal, GoalInfo> = {
  maintain: {
    name: 'maintain',
    label: {
      en: 'Maintain Weight',
      tr: 'Kiloyu Koru',
    },
    description: {
      en: 'Keep current weight and body composition',
      tr: 'Mevcut kiloyu ve vücut kompozisyonunu koru',
    },
    proteinMultiplier: 1.0,
  },
  lose: {
    name: 'lose',
    label: {
      en: 'Lose Weight',
      tr: 'Kilo Ver',
    },
    description: {
      en: 'Fat loss while preserving muscle mass',
      tr: 'Kas kütlesini koruyarak yağ kaybı',
    },
    proteinMultiplier: 1.2,
  },
  gain: {
    name: 'gain',
    label: {
      en: 'Gain Muscle',
      tr: 'Kas Kazan',
    },
    description: {
      en: 'Build muscle mass and strength',
      tr: 'Kas kütlesi ve kuvvet artışı',
    },
    proteinMultiplier: 1.3,
  },
};

export function calculateProtein(input: ProteinInput): {
  dailyProtein: { grams: number; perKg: number; perLb: number };
  range: { min: number; max: number };
  mealsBreakdown: { breakfast: number; lunch: number; dinner: number; snacks: number };
} {
  // Convert weight to kg if needed
  let weightInKg: number;
  if (input.unit === 'imperial') {
    weightInKg = input.weight * 0.453592;
  } else {
    weightInKg = input.weight;
  }

  // Base protein requirement (g/kg)
  const baseProtein = 0.8; // Minimum RDA

  // Get multipliers
  const activityMultiplier = activityLevels[input.activityLevel].multiplier;
  const goalMultiplier = goals[input.goal].proteinMultiplier;

  // Calculate protein per kg
  const proteinPerKg = baseProtein * activityMultiplier * goalMultiplier;

  // Calculate daily protein
  const dailyProteinGrams = Math.round(weightInKg * proteinPerKg);

  // Calculate range (±10%)
  const minProtein = Math.round(dailyProteinGrams * 0.9);
  const maxProtein = Math.round(dailyProteinGrams * 1.1);

  // Calculate per pound
  const proteinPerLb = proteinPerKg / 2.20462;

  // Meals breakdown (30% breakfast, 35% lunch, 30% dinner, 5% snacks)
  const mealsBreakdown = {
    breakfast: Math.round(dailyProteinGrams * 0.3),
    lunch: Math.round(dailyProteinGrams * 0.35),
    dinner: Math.round(dailyProteinGrams * 0.3),
    snacks: Math.round(dailyProteinGrams * 0.05),
  };

  return {
    dailyProtein: {
      grams: dailyProteinGrams,
      perKg: Math.round(proteinPerKg * 10) / 10,
      perLb: Math.round(proteinPerLb * 10) / 10,
    },
    range: {
      min: minProtein,
      max: maxProtein,
    },
    mealsBreakdown,
  };
}

export function getProteinInterpretation(
  proteinPerKg: number,
  activityLevel: ActivityLevel,
  goal: Goal,
  locale: 'en' | 'tr'
): string {
  const interpretations = {
    en: {
      low: 'Your protein intake is below the recommended level. Consider increasing protein-rich foods in your diet.',
      normal: 'Your protein intake is within the healthy range for your activity level and goals.',
      high: 'Your protein intake is above average, which is beneficial for muscle building and recovery.',
      veryHigh: 'Your protein intake is quite high. Ensure adequate hydration and monitor kidney function if maintained long-term.',
    },
    tr: {
      low: 'Protein alımınız önerilen seviyenin altında. Diyetinizde protein açısından zengin gıdaları artırmayı düşünün.',
      normal: 'Protein alımınız aktivite seviyeniz ve hedefleriniz için sağlıklı aralıkta.',
      high: 'Protein alımınız ortalamanın üstünde, bu kas yapımı ve toparlanma için faydalı.',
      veryHigh: 'Protein alımınız oldukça yüksek. Yeterli su tüketimini sağlayın ve uzun vadede sürdürülürse böbrek fonksiyonunu izleyin.',
    },
  };

  if (proteinPerKg < 1.0) return interpretations[locale].low;
  if (proteinPerKg < 1.6) return interpretations[locale].normal;
  if (proteinPerKg < 2.2) return interpretations[locale].high;
  return interpretations[locale].veryHigh;
}

export function getProteinRecommendation(goal: Goal, locale: 'en' | 'tr'): string {
  const recommendations = {
    en: {
      maintain: 'Distribute protein evenly across meals. Include lean meats, fish, eggs, dairy, legumes, and nuts in your diet.',
      lose: 'Higher protein helps preserve muscle during weight loss. Focus on lean protein sources and combine with strength training.',
      gain: 'Consume protein within 2 hours post-workout for optimal muscle synthesis. Consider protein supplements if needed.',
    },
    tr: {
      maintain: 'Proteini öğünler arasında eşit dağıtın. Diyetinize yağsız etler, balık, yumurta, süt ürünleri, baklagiller ve fındık ekleyin.',
      lose: 'Daha yüksek protein, kilo verme sırasında kasın korunmasına yardımcı olur. Yağsız protein kaynaklarına odaklanın ve kuvvet antrenmanıyla birleştirin.',
      gain: 'Optimal kas sentezi için antrenman sonrası 2 saat içinde protein tüketin. Gerekirse protein takviyeleri düşünün.',
    },
  };

  return recommendations[locale][goal];
}
