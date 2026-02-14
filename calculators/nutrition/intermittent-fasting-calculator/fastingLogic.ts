import {
  FastingInput,
  FastingResult,
  FastingProtocol,
  ProtocolInfo,
  FastingWindow,
  MealTiming,
  DifficultyLevel,
  MetabolicState,
  FastingTimeline,
  PersonalizedInsight,
  FoodSuggestion,
  Gender,
  ActivityLevel,
} from './fastingTypes';

// Protocol definitions
export const protocolsData: Record<FastingProtocol, ProtocolInfo> = {
  '16:8': {
    name: {
      en: '16:8 Method',
      tr: '16:8 Metodu',
    },
    description: {
      en: 'Fast for 16 hours, eat within an 8-hour window daily',
      tr: 'Günlük 16 saat oruç, 8 saatlik pencerede yemek',
    },
    difficulty: 'beginner',
    fastHours: 16,
    eatHours: 8,
    benefits: {
      en: [
        'Easy to maintain long-term',
        'Improves insulin sensitivity',
        'Supports weight loss',
        'Enhances mental clarity',
        'Flexible eating schedule',
      ],
      tr: [
        'Uzun vadede sürdürmesi kolay',
        'İnsülin duyarlılığını artırır',
        'Kilo kaybını destekler',
        'Zihinsel berraklığı artırır',
        'Esnek yemek programı',
      ],
    },
    challenges: {
      en: [
        'Initial hunger during fasting',
        'Social eating adjustments',
        'May skip breakfast or dinner',
      ],
      tr: [
        'Oruçta başlangıç açlığı',
        'Sosyal yemek ayarlamaları',
        'Kahvaltı veya akşam yemeğini atlama',
      ],
    },
    bestFor: {
      en: [
        'Beginners to intermittent fasting',
        'People with consistent schedules',
        'Weight loss goals',
        'Metabolic health improvement',
      ],
      tr: [
        'Aralıklı oruç yeni başlayanlar',
        'Düzenli programı olanlar',
        'Kilo kaybı hedefleri',
        'Metabolik sağlık iyileştirmesi',
      ],
    },
  },
  '18:6': {
    name: {
      en: '18:6 Method',
      tr: '18:6 Metodu',
    },
    description: {
      en: 'Fast for 18 hours, eat within a 6-hour window daily',
      tr: 'Günlük 18 saat oruç, 6 saatlik pencerede yemek',
    },
    difficulty: 'intermediate',
    fastHours: 18,
    eatHours: 6,
    benefits: {
      en: [
        'Enhanced autophagy',
        'Deeper metabolic benefits',
        'Greater fat burning',
        'Improved cellular repair',
        'Better hunger control over time',
      ],
      tr: [
        'Gelişmiş otofaji',
        'Daha derin metabolik faydalar',
        'Daha fazla yağ yakımı',
        'Gelişmiş hücresel onarım',
        'Zamanla daha iyi açlık kontrolü',
      ],
    },
    challenges: {
      en: [
        'More restrictive eating window',
        'Requires adaptation period',
        'Challenging for social events',
      ],
      tr: [
        'Daha kısıtlayıcı yemek penceresi',
        'Adaptasyon dönemi gerektirir',
        'Sosyal etkinlikler için zorlayıcı',
      ],
    },
    bestFor: {
      en: [
        'Experienced fasters',
        'Advanced weight loss goals',
        'Metabolic optimization',
        'Enhanced cellular benefits',
      ],
      tr: [
        'Deneyimli oruç tutanlar',
        'İleri kilo kaybı hedefleri',
        'Metabolik optimizasyon',
        'Gelişmiş hücresel faydalar',
      ],
    },
  },
  '20:4': {
    name: {
      en: '20:4 (Warrior Diet)',
      tr: '20:4 (Savaşçı Diyeti)',
    },
    description: {
      en: 'Fast for 20 hours, eat within a 4-hour window daily',
      tr: 'Günlük 20 saat oruç, 4 saatlik pencerede yemek',
    },
    difficulty: 'advanced',
    fastHours: 20,
    eatHours: 4,
    benefits: {
      en: [
        'Maximum autophagy benefits',
        'Significant metabolic changes',
        'Deep fat adaptation',
        'Enhanced mental focus',
        'Simplified meal planning',
      ],
      tr: [
        'Maksimum otofaji faydaları',
        'Önemli metabolik değişiklikler',
        'Derin yağ adaptasyonu',
        'Gelişmiş zihinsel odaklanma',
        'Basitleştirilmiş öğün planlaması',
      ],
    },
    challenges: {
      en: [
        'Very restrictive',
        'Difficult to meet calorie needs',
        'Not suitable for beginners',
        'May impact social life',
      ],
      tr: [
        'Çok kısıtlayıcı',
        'Kalori ihtiyaçlarını karşılamak zor',
        'Yeni başlayanlar için uygun değil',
        'Sosyal hayatı etkileyebilir',
      ],
    },
    bestFor: {
      en: [
        'Advanced fasters only',
        'Maximum autophagy',
        'Severe calorie restriction',
        'People with specific health goals',
      ],
      tr: [
        'Sadece ileri seviye oruç tutanlar',
        'Maksimum otofaji',
        'Şiddetli kalori kısıtlaması',
        'Belirli sağlık hedefleri olanlar',
      ],
    },
  },
  omad: {
    name: {
      en: 'OMAD (One Meal A Day)',
      tr: 'OMAD (Günde Tek Öğün)',
    },
    description: {
      en: 'Fast for 23 hours, eat one meal within a 1-hour window',
      tr: '23 saat oruç, 1 saatlik pencerede tek öğün',
    },
    difficulty: 'advanced',
    fastHours: 23,
    eatHours: 1,
    benefits: {
      en: [
        'Ultimate simplicity',
        'Maximum autophagy',
        'Significant time savings',
        'Deep metabolic changes',
        'Enhanced discipline',
      ],
      tr: [
        'Nihai basitlik',
        'Maksimum otofaji',
        'Önemli zaman tasarrufu',
        'Derin metabolik değişiklikler',
        'Gelişmiş disiplin',
      ],
    },
    challenges: {
      en: [
        'Extremely restrictive',
        'Very difficult to sustain',
        'Hard to meet nutritional needs',
        'Not recommended for most people',
      ],
      tr: [
        'Son derece kısıtlayıcı',
        'Sürdürmek çok zor',
        'Besin ihtiyaçlarını karşılamak zor',
        'Çoğu kişi için önerilmez',
      ],
    },
    bestFor: {
      en: [
        'Very experienced fasters',
        'Extreme discipline',
        'Specific therapeutic goals',
        'Under medical supervision',
      ],
      tr: [
        'Çok deneyimli oruç tutanlar',
        'Aşırı disiplin',
        'Belirli terapötik hedefler',
        'Tıbbi gözetim altında',
      ],
    },
  },
  '5:2': {
    name: {
      en: '5:2 Diet',
      tr: '5:2 Diyeti',
    },
    description: {
      en: 'Eat normally 5 days, restrict calories to 500-600 for 2 days per week',
      tr: 'Haftada 5 gün normal yemek, 2 gün 500-600 kaloriye kısıtlama',
    },
    difficulty: 'intermediate',
    fastHours: 0,
    eatHours: 24,
    weeklyPattern: {
      en: '5 normal days + 2 fasting days (500-600 calories)',
      tr: '5 normal gün + 2 oruç günü (500-600 kalori)',
    },
    benefits: {
      en: [
        'Flexible approach',
        'Easier to maintain socially',
        'Proven weight loss results',
        'Metabolic benefits',
        'Only 2 difficult days per week',
      ],
      tr: [
        'Esnek yaklaşım',
        'Sosyal olarak sürdürmesi kolay',
        'Kanıtlanmış kilo kaybı sonuçları',
        'Metabolik faydalar',
        'Haftada sadece 2 zor gün',
      ],
    },
    challenges: {
      en: [
        'Fasting days can be challenging',
        'Requires careful calorie tracking',
        'May feel very hungry on fasting days',
      ],
      tr: [
        'Oruç günleri zorlayıcı olabilir',
        'Dikkatli kalori takibi gerektirir',
        'Oruç günlerinde çok aç hissedebilirsiniz',
      ],
    },
    bestFor: {
      en: [
        'Beginners to fasting',
        'People with busy social schedules',
        'Weight loss goals',
        'Gradual metabolic adaptation',
      ],
      tr: [
        'Oruç yeni başlayanlar',
        'Yoğun sosyal programı olanlar',
        'Kilo kaybı hedefleri',
        'Kademeli metabolik adaptasyon',
      ],
    },
  },
  'alternate-day': {
    name: {
      en: 'Alternate Day Fasting',
      tr: 'Alternatif Gün Orucu',
    },
    description: {
      en: 'Alternate between fasting days (500 cal) and eating days (normal)',
      tr: 'Oruç günleri (500 kal) ve normal günler arasında değişim',
    },
    difficulty: 'advanced',
    fastHours: 0,
    eatHours: 24,
    weeklyPattern: {
      en: 'Fast day (500 cal) → Normal day → repeat',
      tr: 'Oruç günü (500 kal) → Normal gün → tekrar',
    },
    benefits: {
      en: [
        'Rapid weight loss',
        'Strong metabolic effects',
        'Clear structure',
        'Enhanced autophagy',
        'Simplified decision making',
      ],
      tr: [
        'Hızlı kilo kaybı',
        'Güçlü metabolik etkiler',
        'Net yapı',
        'Gelişmiş otofaji',
        'Basitleştirilmiş karar verme',
      ],
    },
    challenges: {
      en: [
        'Very challenging to maintain',
        'Frequent hunger on fasting days',
        'May impact daily activities',
        'Not suitable for beginners',
      ],
      tr: [
        'Sürdürmek çok zor',
        'Oruç günlerinde sık açlık',
        'Günlük aktiviteleri etkileyebilir',
        'Yeni başlayanlar için uygun değil',
      ],
    },
    bestFor: {
      en: [
        'Experienced fasters',
        'Rapid weight loss goals',
        'Metabolic intervention',
        'Strong self-discipline',
      ],
      tr: [
        'Deneyimli oruç tutanlar',
        'Hızlı kilo kaybı hedefleri',
        'Metabolik müdahale',
        'Güçlü öz disiplin',
      ],
    },
  },
  custom: {
    name: {
      en: 'Custom Protocol',
      tr: 'Özel Protokol',
    },
    description: {
      en: 'Create your own fasting schedule',
      tr: 'Kendi oruç programınızı oluşturun',
    },
    difficulty: 'intermediate',
    fastHours: 0,
    eatHours: 0,
    benefits: {
      en: [
        'Personalized to your needs',
        'Flexible and adaptable',
        'Can align with your schedule',
      ],
      tr: [
        'İhtiyaçlarınıza göre kişiselleştirilmiş',
        'Esnek ve uyarlanabilir',
        'Programınıza uyum sağlayabilir',
      ],
    },
    challenges: {
      en: [
        'Requires self-management',
        'May need trial and error',
        'Consistency important',
      ],
      tr: [
        'Kendi kendini yönetme gerektirir',
        'Deneme yanılma gerekebilir',
        'Tutarlılık önemli',
      ],
    },
    bestFor: {
      en: [
        'People with unique schedules',
        'Experienced fasters',
        'Specific health goals',
      ],
      tr: [
        'Benzersiz programı olanlar',
        'Deneyimli oruç tutanlar',
        'Belirli sağlık hedefleri',
      ],
    },
  },
};

// Time helper functions
function parseTime(time: string): { hours: number; minutes: number } {
  const [hours, minutes] = time.split(':').map(Number);
  return { hours, minutes };
}

function timeToMinutes(time: string): number {
  const { hours, minutes } = parseTime(time);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60) % 24;
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

function addHours(time: string, hours: number): string {
  const minutes = timeToMinutes(time) + hours * 60;
  return minutesToTime(minutes);
}

// Main calculation function
export function calculateFastingSchedule(input: FastingInput): FastingResult {
  const protocol = input.protocol;
  const protocolInfo = protocolsData[protocol];

  let fastHours: number;
  let eatHours: number;

  // Determine fasting and eating hours
  if (protocol === 'custom' && input.customFastHours && input.customEatHours) {
    fastHours = input.customFastHours;
    eatHours = input.customEatHours;
  } else {
    fastHours = protocolInfo.fastHours;
    eatHours = protocolInfo.eatHours;
  }

  // Calculate fasting window
  const window = calculateFastingWindow(
    input.wakeUpTime,
    input.bedTime,
    fastHours,
    eatHours,
    protocol
  );

  // Generate meal timings
  const mealTimings = generateMealTimings(window, protocol);

  // Get autophagy window
  const autophagyWindow =
    fastHours >= 16
      ? {
          start: 12,
          peak: fastHours >= 18 ? 16 : 14,
        }
      : undefined;

  // Get recommendations
  const recommendations = getRecommendations(protocol, fastHours);

  // Get hydration tips
  const hydrationTips = getHydrationTips();

  // New personalized calculations
  let bmi: number | undefined;
  let estimatedCalories: number | undefined;
  let idealProteinGrams: number | undefined;
  let timeline: FastingTimeline[] | undefined;
  let personalizedInsights: PersonalizedInsight[] | undefined;
  let foodSuggestions: FoodSuggestion[] | undefined;

  // Calculate BMI if weight and height provided
  if (input.weight && input.height) {
    bmi = calculateBMI(input.weight, input.height);
  }

  // Calculate estimated daily calories if all params provided
  if (input.weight && input.height && input.age && input.gender && input.activityLevel) {
    estimatedCalories = calculateEstimatedCalories(
      input.weight,
      input.height,
      input.age,
      input.gender,
      input.activityLevel
    );
  }

  // Calculate ideal protein intake
  if (input.weight && input.activityLevel) {
    const primaryGoal = input.goals?.[0] || 'metabolic-health';
    idealProteinGrams = calculateProteinNeeds(input.weight, input.activityLevel, primaryGoal);
  }

  // Generate metabolic timeline
  timeline = generateMetabolicTimeline(fastHours);

  // Generate personalized insights
  personalizedInsights = generatePersonalizedInsights(input, fastHours);

  // Generate food suggestions
  foodSuggestions = generateFoodSuggestions(
    fastHours,
    input.goals || [],
    input.activityLevel || 'moderate'
  );

  return {
    protocol,
    window,
    mealTimings,
    protocolInfo,
    autophagyWindow,
    recommendations,
    hydrationTips,
    // New fields
    bmi,
    estimatedCalories,
    idealProteinGrams,
    timeline,
    personalizedInsights,
    foodSuggestions,
  };
}

function calculateFastingWindow(
  wakeUpTime: string,
  bedTime: string,
  fastHours: number,
  eatHours: number,
  protocol: FastingProtocol
): FastingWindow {
  // For weekly protocols (5:2, alternate-day), return full day
  if (protocol === '5:2' || protocol === 'alternate-day') {
    return {
      fastStart: '00:00',
      fastEnd: '23:59',
      eatStart: '08:00',
      eatEnd: '20:00',
      fastDuration: fastHours,
      eatDuration: eatHours,
    };
  }

  // For daily protocols, calculate based on wake/sleep schedule
  const wakeMinutes = timeToMinutes(wakeUpTime);
  const bedMinutes = timeToMinutes(bedTime);

  // Calculate eating window (center it during waking hours)
  const awakeHours =
    bedMinutes > wakeMinutes
      ? (bedMinutes - wakeMinutes) / 60
      : (24 * 60 - wakeMinutes + bedMinutes) / 60;

  // Start eating window 2-3 hours after waking
  const eatStartDelay = protocol === 'omad' ? awakeHours / 2 : 2;
  const eatStart = addHours(wakeUpTime, eatStartDelay);
  const eatEnd = addHours(eatStart, eatHours);

  // Fasting window is the rest
  const fastStart = eatEnd;
  const fastEnd = eatStart;

  return {
    fastStart,
    fastEnd,
    eatStart,
    eatEnd,
    fastDuration: fastHours,
    eatDuration: eatHours,
  };
}

function generateMealTimings(window: FastingWindow, protocol: FastingProtocol): MealTiming[] {
  const timings: MealTiming[] = [];
  const eatStartMinutes = timeToMinutes(window.eatStart);
  const eatDuration = window.eatDuration;

  if (protocol === '5:2' || protocol === 'alternate-day') {
    // For weekly protocols, suggest light meals
    timings.push({
      time: '12:00',
      type: 'lunch',
      suggestion: {
        en: 'Light protein-rich meal (250-300 calories)',
        tr: 'Hafif protein açısından zengin öğün (250-300 kalori)',
      },
    });
    timings.push({
      time: '18:00',
      type: 'dinner',
      suggestion: {
        en: 'Small vegetable-based meal (250-300 calories)',
        tr: 'Küçük sebze bazlı öğün (250-300 kalori)',
      },
    });
    return timings;
  }

  if (protocol === 'omad') {
    // One meal
    timings.push({
      time: window.eatStart,
      type: 'dinner',
      suggestion: {
        en: 'Complete balanced meal with protein, healthy fats, vegetables, and complex carbs',
        tr: 'Protein, sağlıklı yağlar, sebzeler ve kompleks karbonhidratlar içeren eksiksiz dengeli öğün',
      },
    });
  } else if (eatDuration <= 4) {
    // 20:4 or similar - 1-2 meals
    timings.push({
      time: window.eatStart,
      type: 'lunch',
      suggestion: {
        en: 'First meal: High protein with healthy fats',
        tr: 'İlk öğün: Sağlıklı yağlarla yüksek protein',
      },
    });
    if (eatDuration >= 3) {
      timings.push({
        time: addHours(window.eatStart, eatDuration - 1),
        type: 'dinner',
        suggestion: {
          en: 'Second meal: Balanced with vegetables and complex carbs',
          tr: 'İkinci öğün: Sebze ve kompleks karbonhidratlarla dengeli',
        },
      });
    }
  } else if (eatDuration <= 8) {
    // 16:8 or 18:6 - 2-3 meals
    timings.push({
      time: window.eatStart,
      type: 'lunch',
      suggestion: {
        en: 'Break fast with balanced meal',
        tr: 'Orucu dengeli öğün ile açın',
      },
    });
    if (eatDuration >= 6) {
      timings.push({
        time: addHours(window.eatStart, eatDuration / 2),
        type: 'snack',
        suggestion: {
          en: 'Light snack: nuts, fruit, or yogurt',
          tr: 'Hafif atıştırmalık: kuruyemiş, meyve veya yoğurt',
        },
      });
    }
    timings.push({
      time: addHours(window.eatStart, eatDuration - 1),
      type: 'dinner',
      suggestion: {
        en: 'Final meal before fasting window',
        tr: 'Oruç penceresinden önce son öğün',
      },
    });
  }

  return timings;
}

function getRecommendations(protocol: FastingProtocol, fastHours: number): {
  en: string[];
  tr: string[];
} {
  const recommendations = {
    en: [] as string[],
    tr: [] as string[],
  };

  // Universal recommendations
  recommendations.en.push('Stay well hydrated during fasting periods');
  recommendations.tr.push('Oruç dönemlerinde iyi hidrate kalın');

  recommendations.en.push('Black coffee and tea are allowed during fasting');
  recommendations.tr.push('Oruç sırasında siyah kahve ve çay içilebilir');

  if (fastHours >= 16) {
    recommendations.en.push('Break your fast with easily digestible foods');
    recommendations.tr.push('Orucunuzu kolay sindirilir gıdalarla açın');

    recommendations.en.push('Consider electrolyte supplementation for longer fasts');
    recommendations.tr.push('Uzun oruçlar için elektrolit takviyesi düşünün');
  }

  if (protocol === '16:8' || protocol === '18:6') {
    recommendations.en.push('Eat nutrient-dense meals during your eating window');
    recommendations.tr.push('Yemek pencerenizde besin değeri yüksek öğünler tüketin');

    recommendations.en.push('Avoid processed foods and added sugars');
    recommendations.tr.push('İşlenmiş gıdalardan ve eklenmiş şekerlerden kaçının');
  }

  if (protocol === '20:4' || protocol === 'omad') {
    recommendations.en.push('Plan your meal carefully to meet nutritional needs');
    recommendations.tr.push('Besin ihtiyaçlarını karşılamak için öğününüzü dikkatlice planlayın');

    recommendations.en.push('Consider tracking macros and micronutrients');
    recommendations.tr.push('Makro ve mikro besinleri takip etmeyi düşünün');
  }

  if (protocol === '5:2' || protocol === 'alternate-day') {
    recommendations.en.push('Eat normally on non-fasting days (don\'t binge)');
    recommendations.tr.push('Oruçsuz günlerde normal yiyin (aşırı yemek yemeyin)');

    recommendations.en.push('Choose low-calorie, high-volume foods on fasting days');
    recommendations.tr.push('Oruç günlerinde düşük kalorili, yüksek hacimli gıdalar seçin');
  }

  recommendations.en.push('Listen to your body and adjust as needed');
  recommendations.tr.push('Vücudunuzu dinleyin ve gerektiğinde ayarlayın');

  recommendations.en.push('Consult a healthcare provider before starting');
  recommendations.tr.push('Başlamadan önce bir sağlık profesyoneliyle görüşün');

  return recommendations;
}

function getHydrationTips(): { en: string[]; tr: string[] } {
  return {
    en: [
      'Drink at least 8-10 glasses of water daily',
      'Herbal teas (no sugar) are great during fasting',
      'Add a pinch of salt to water for electrolytes',
      'Avoid diet sodas and artificial sweeteners',
      'Green tea can help suppress appetite',
    ],
    tr: [
      'Günde en az 8-10 bardak su için',
      'Bitki çayları (şekersiz) oruç sırasında harikadır',
      'Elektrolitler için suya bir tutam tuz ekleyin',
      'Diyet sodalardan ve yapay tatlandırıcılardan kaçının',
      'Yeşil çay iştahı bastırmaya yardımcı olabilir',
    ],
  };
}

// Helper to get difficulty level color
export function getDifficultyColor(difficulty: DifficultyLevel): string {
  switch (difficulty) {
    case 'beginner':
      return 'green';
    case 'intermediate':
      return 'yellow';
    case 'advanced':
      return 'red';
    default:
      return 'gray';
  }
}

// Helper to check if protocol is weekly-based
export function isWeeklyProtocol(protocol: FastingProtocol): boolean {
  return protocol === '5:2' || protocol === 'alternate-day';
}

// Calculate BMI
function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

// Calculate ideal protein intake (g per day)
function calculateProteinNeeds(weight: number, activityLevel: ActivityLevel, goal: string): number {
  let multiplier = 1.6; // base for moderate activity

  if (activityLevel === 'sedentary') multiplier = 1.2;
  if (activityLevel === 'light') multiplier = 1.4;
  if (activityLevel === 'active') multiplier = 1.8;
  if (activityLevel === 'very-active') multiplier = 2.2;

  if (goal === 'muscle-gain') multiplier += 0.4;

  return Math.round(weight * multiplier);
}

// Calculate estimated daily calories
function calculateEstimatedCalories(
  weight: number,
  height: number,
  age: number,
  gender: Gender,
  activityLevel: ActivityLevel
): number {
  // Mifflin-St Jeor Equation
  let bmr: number;

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Activity multipliers
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    'very-active': 1.9,
  };

  return Math.round(bmr * activityMultipliers[activityLevel]);
}

// Generate metabolic timeline
function generateMetabolicTimeline(fastHours: number): FastingTimeline[] {
  const timeline: FastingTimeline[] = [];

  // 0-4 hours: Glucose burning
  timeline.push({
    hour: 0,
    state: 'Glucose Burning',
    description: {
      en: 'Your body is using glucose from your last meal as primary fuel',
      tr: 'Vücudunuz son öğününüzdeki glukozu birincil yakıt olarak kullanıyor',
    },
    benefits: {
      en: ['Insulin levels starting to drop', 'Digestion completing'],
      tr: ['İnsülin seviyeleri düşmeye başlıyor', 'Sindirim tamamlanıyor'],
    },
  });

  // 4-8 hours: Transition
  timeline.push({
    hour: 4,
    state: 'Glycogen Depletion',
    description: {
      en: 'Liver glycogen stores being depleted, body preparing for fat burning',
      tr: 'Karaciğer glikojen depoları tükenmeye başlıyor, vücut yağ yakmaya hazırlanıyor',
    },
    benefits: {
      en: ['Blood sugar stabilizing', 'Insulin sensitivity improving'],
      tr: ['Kan şekeri stabilize oluyor', 'İnsülin duyarlılığı artıyor'],
    },
  });

  // 8-12 hours: Fat burning begins
  timeline.push({
    hour: 8,
    state: 'Fat Burning Begins',
    description: {
      en: 'Your body switches to burning stored fat for energy',
      tr: 'Vücudunuz enerji için depolanmış yağı yakmaya geçiyor',
    },
    benefits: {
      en: ['Ketone production starting', 'Enhanced mental clarity', 'Growth hormone increasing'],
      tr: ['Keton üretimi başlıyor', 'Zihinsel berraklık artıyor', 'Büyüme hormonu artıyor'],
    },
  });

  if (fastHours >= 16) {
    // 12-16 hours: Autophagy activation
    timeline.push({
      hour: 12,
      state: 'Autophagy Activation',
      description: {
        en: 'Cellular cleanup and repair processes activated',
        tr: 'Hücresel temizlik ve onarım süreçleri aktive oluyor',
      },
      benefits: {
        en: ['Autophagy beginning', 'Cellular repair', 'Anti-aging benefits', 'Immune system boost'],
        tr: ['Otofaji başlıyor', 'Hücresel onarım', 'Yaşlanma karşıtı faydalar', 'Bağışıklık sistemi güçleniyor'],
      },
    });
  }

  if (fastHours >= 18) {
    // 16-18 hours: Deep ketosis
    timeline.push({
      hour: 16,
      state: 'Deep Ketosis',
      description: {
        en: 'Significant ketone production, maximum fat burning',
        tr: 'Önemli keton üretimi, maksimum yağ yakımı',
      },
      benefits: {
        en: ['Peak fat burning', 'Maximum autophagy', 'Enhanced cognitive function', 'Inflammation reduction'],
        tr: ['Zirve yağ yakımı', 'Maksimum otofaji', 'Gelişmiş bilişsel fonksiyon', 'İltihaplanma azalması'],
      },
    });
  }

  if (fastHours >= 24) {
    // 24+ hours: Maximum autophagy
    timeline.push({
      hour: 24,
      state: 'Maximum Autophagy',
      description: {
        en: 'Peak cellular renewal and longevity benefits',
        tr: 'Zirve hücresel yenilenme ve uzun ömür faydaları',
      },
      benefits: {
        en: ['Maximum cellular cleanup', 'Stem cell activation', 'Immune system reset', 'Deep metabolic benefits'],
        tr: ['Maksimum hücresel temizlik', 'Kök hücre aktivasyonu', 'Bağışıklık sistemi sıfırlama', 'Derin metabolik faydalar'],
      },
    });
  }

  return timeline;
}

// Generate personalized insights
function generatePersonalizedInsights(input: FastingInput, fastHours: number): PersonalizedInsight[] {
  const insights: PersonalizedInsight[] = [];
  const { age, gender, goals, activityLevel, experienceLevel, weight, height } = input;

  // Age-based insights
  if (age && age < 30) {
    insights.push({
      icon: '🎯',
      title: { en: 'Young & Metabolically Flexible', tr: 'Genç ve Metabolik Olarak Esnek' },
      description: {
        en: 'Your young metabolism adapts quickly to fasting. Focus on building healthy habits that will benefit you long-term.',
        tr: 'Genç metabolizmanız oruç hızla adapte olur. Uzun vadede size fayda sağlayacak sağlıklı alışkanlıklar oluşturmaya odaklanın.',
      },
      type: 'success',
    });
  } else if (age && age >= 30 && age < 50) {
    insights.push({
      icon: '💪',
      title: { en: 'Prime Age for Fasting', tr: 'Oruç İçin En İyi Yaş' },
      description: {
        en: 'This is an ideal age for intermittent fasting. You\'ll see significant metabolic benefits and it helps combat age-related metabolic slowdown.',
        tr: 'Aralıklı oruç için ideal bir yaştasınız. Önemli metabolik faydalar göreceksiniz ve yaşa bağlı metabolik yavaşlamaya karşı yardımcı olur.',
      },
      type: 'success',
    });
  } else if (age && age >= 50) {
    insights.push({
      icon: '🧘',
      title: { en: 'Fasting After 50', tr: '50 Sonrası Oruç' },
      description: {
        en: 'Prioritize protein intake (1.8-2g per kg) during eating windows to prevent muscle loss. Consider resistance training alongside fasting.',
        tr: 'Kas kaybını önlemek için yemek pencerelerinde protein alımını önceliklendirin (kg başına 1.8-2g). Oruçla birlikte direnç antrenmanı düşünün.',
      },
      type: 'warning',
    });
  }

  // Gender-based insights
  if (gender === 'female') {
    if (fastHours >= 18) {
      insights.push({
        icon: '⚠️',
        title: { en: 'Women & Extended Fasting', tr: 'Kadınlar ve Uzun Oruç' },
        description: {
          en: 'Women may be more sensitive to long fasts. Monitor your menstrual cycle and energy levels. Stop if you experience irregularities.',
          tr: 'Kadınlar uzun oruçlara daha duyarlı olabilir. Adet döneminizi ve enerji seviyelerinizi izleyin. Düzensizlik yaşarsanız durun.',
        },
        type: 'warning',
      });
    } else {
      insights.push({
        icon: '💜',
        title: { en: 'Female-Friendly Protocol', tr: 'Kadınlar İçin Uygun Protokol' },
        description: {
          en: 'Your fasting window is well-suited for female hormones. 14-16 hours is often the sweet spot for women.',
          tr: 'Oruç pencereniz kadın hormonları için çok uygun. 14-16 saat genellikle kadınlar için en iyi noktadır.',
        },
        type: 'success',
      });
    }
  }

  // Goal-based insights
  if (goals?.includes('weight-loss')) {
    insights.push({
      icon: '📉',
      title: { en: 'Weight Loss Optimization', tr: 'Kilo Kaybı Optimizasyonu' },
      description: {
        en: 'Combine your fasting with a 300-500 calorie deficit. Focus on protein and fiber during eating windows to stay satiated.',
        tr: 'Orucunuzu 300-500 kalori açığıyla birleştirin. Tok kalmak için yemek pencerelerinde protein ve lif odaklanın.',
      },
      type: 'info',
    });
  }

  if (goals?.includes('autophagy')) {
    if (fastHours >= 16) {
      insights.push({
        icon: '🔬',
        title: { en: 'Autophagy Activated', tr: 'Otofaji Aktive Oldu' },
        description: {
          en: 'Your protocol activates autophagy! This cellular cleanup process peaks around 16-24 hours of fasting.',
          tr: 'Protokolünüz otofajiyi aktive ediyor! Bu hücresel temizlik süreci 16-24 saatlik oruçta zirve yapıyor.',
        },
        type: 'success',
      });
    } else {
      insights.push({
        icon: '💡',
        title: { en: 'Extend for Autophagy', tr: 'Otofaji İçin Uzatın' },
        description: {
          en: 'To maximize autophagy benefits, consider extending to 16+ hours of fasting. Autophagy begins around 12-14 hours.',
          tr: 'Otofaji faydalarını maksimize etmek için 16+ saat oruç uzatmayı düşünün. Otofaji yaklaşık 12-14 saatte başlar.',
        },
        type: 'info',
      });
    }
  }

  if (goals?.includes('muscle-gain')) {
    insights.push({
      icon: '🏋️',
      title: { en: 'Muscle Gain Strategy', tr: 'Kas Kazanma Stratejisi' },
      description: {
        en: 'Time your workouts before breaking your fast. Consume protein-rich meal immediately after. Aim for slight calorie surplus.',
        tr: 'Antrenmanlarınızı orucu açmadan önce zamanlayın. Hemen sonra proteinli öğün tüketin. Hafif kalori fazlası hedefleyin.',
      },
      type: 'info',
    });
  }

  // Activity level insights
  if (activityLevel === 'active' || activityLevel === 'very-active') {
    insights.push({
      icon: '🏃',
      title: { en: 'Athletes & Fasting', tr: 'Sporcular ve Oruç' },
      description: {
        en: 'Consider timing intense workouts during eating windows. Stay hydrated and consider electrolyte supplementation during fasts.',
        tr: 'Yoğun antrenmanları yemek pencerelerinde zamanlamayı düşünün. Hidrate kalın ve oruç sırasında elektrolit takviyesi düşünün.',
      },
      type: 'info',
    });
  }

  // Experience level insights
  if (experienceLevel === 'beginner') {
    insights.push({
      icon: '🌱',
      title: { en: 'Beginner Tips', tr: 'Başlangıç İpuçları' },
      description: {
        en: 'Start gradually and listen to your body. First 1-2 weeks may be challenging as your body adapts. Stay consistent!',
        tr: 'Kademeli başlayın ve vücudunuzu dinleyin. Vücudunuz adapte olurken ilk 1-2 hafta zorlayıcı olabilir. Tutarlı kalın!',
      },
      type: 'info',
    });
  }

  // BMI-based insights
  if (weight && height) {
    const bmi = calculateBMI(weight, height);
    if (bmi > 30) {
      insights.push({
        icon: '🎯',
        title: { en: 'Excellent Choice for Your Goals', tr: 'Hedefleriniz İçin Mükemmel Seçim' },
        description: {
          en: 'Intermittent fasting can be particularly effective for weight management. You may see results within 2-4 weeks.',
          tr: 'Aralıklı oruç kilo yönetimi için özellikle etkili olabilir. 2-4 hafta içinde sonuçlar görebilirsiniz.',
        },
        type: 'success',
      });
    } else if (bmi < 18.5) {
      insights.push({
        icon: '⚠️',
        title: { en: 'Underweight - Proceed Carefully', tr: 'Zayıf - Dikkatli İlerleyin' },
        description: {
          en: 'Focus on nutrient-dense foods and ensure you\'re eating enough calories during your eating window. Consider medical supervision.',
          tr: 'Besin değeri yüksek gıdalara odaklanın ve yemek pencerenizde yeterli kalori aldığınızdan emin olun. Tıbbi gözetim düşünün.',
        },
        type: 'danger',
      });
    }
  }

  return insights;
}

// Generate food suggestions
function generateFoodSuggestions(
  fastHours: number,
  goals: string[] = [],
  activityLevel: ActivityLevel = 'moderate'
): FoodSuggestion[] {
  const suggestions: FoodSuggestion[] = [];

  // Pre-fast meal (last meal before fasting)
  suggestions.push({
    timing: 'pre-fast',
    time: 'Last meal before fasting window',
    foods: {
      en: [
        'Lean protein (chicken, fish, tofu)',
        'Complex carbs (sweet potato, quinoa, brown rice)',
        'Healthy fats (avocado, nuts, olive oil)',
        'Fiber-rich vegetables (broccoli, spinach, Brussels sprouts)',
        'Small portion of berries',
      ],
      tr: [
        'Yağsız protein (tavuk, balık, tofu)',
        'Kompleks karbonhidratlar (tatlı patates, kinoa, esmer pirinç)',
        'Sağlıklı yağlar (avokado, kuruyemiş, zeytinyağı)',
        'Lif açısından zengin sebzeler (brokoli, ıspanak, Brüksel lahanası)',
        'Küçük porsiyon çilek',
      ],
    },
    avoid: {
      en: [
        'Simple sugars and candy',
        'Processed foods',
        'High-sodium foods',
        'Alcohol',
        'Large portions that cause bloating',
      ],
      tr: [
        'Basit şekerler ve şekerlemeler',
        'İşlenmiş gıdalar',
        'Yüksek sodyumlu gıdalar',
        'Alkol',
        'Şişkinliğe neden olan büyük porsiyonlar',
      ],
    },
    rationale: {
      en: 'This combination provides sustained energy, keeps you full longer, and stabilizes blood sugar during your fast.',
      tr: 'Bu kombinasyon sürdürülebilir enerji sağlar, sizi daha uzun süre tok tutar ve oruç sırasında kan şekerini stabilize eder.',
    },
  });

  // Break-fast meal (first meal after fasting)
  suggestions.push({
    timing: 'break-fast',
    time: 'First meal to break your fast',
    foods: {
      en: [
        'Bone broth or vegetable soup (start gentle)',
        'Scrambled eggs with vegetables',
        'Greek yogurt with berries and nuts',
        'Salmon with leafy greens',
        'Avocado toast on whole grain bread',
      ],
      tr: [
        'Kemik suyu veya sebze çorbası (nazikçe başlayın)',
        'Sebzeli omlet',
        'Çilek ve kuruyemişli Yunan yoğurdu',
        'Yapraklı yeşilliklerle somon',
        'Tam tahıllı ekmekte avokado',
      ],
    },
    avoid: {
      en: [
        'Heavy fried foods',
        'Large portions immediately',
        'High-sugar foods',
        'Processed meats',
        'Carbonated drinks',
      ],
      tr: [
        'Ağır kızarmış gıdalar',
        'Hemen büyük porsiyonlar',
        'Yüksek şekerli gıdalar',
        'İşlenmiş etler',
        'Gazlı içecekler',
      ],
    },
    rationale: {
      en: 'Break your fast gently with easily digestible, nutrient-dense foods to avoid digestive discomfort.',
      tr: 'Sindirim rahatsızlığından kaçınmak için orucunuzu kolay sindirilir, besin değeri yüksek gıdalarla nazikçe açın.',
    },
  });

  // During eating window
  if (goals.includes('muscle-gain') || activityLevel === 'active' || activityLevel === 'very-active') {
    suggestions.push({
      timing: 'during-window',
      time: 'Additional meals during eating window',
      foods: {
        en: [
          'High-protein meals (30-40g protein per meal)',
          'Post-workout: Protein shake with banana',
          'Lean beef or turkey',
          'Eggs and egg whites',
          'Cottage cheese',
          'Protein-rich legumes',
        ],
        tr: [
          'Yüksek proteinli öğünler (öğün başına 30-40g protein)',
          'Antrenman sonrası: Muzlu protein shake',
          'Yağsız sığır eti veya hindi',
          'Yumurta ve yumurta akı',
          'Lor peyniri',
          'Protein açısından zengin baklagiller',
        ],
      },
      avoid: {
        en: ['Excessive carbs if sedentary', 'Junk food', 'Excess calories'],
        tr: ['Hareketsizseniz aşırı karbonhidrat', 'Abur cubur', 'Aşırı kalori'],
      },
      rationale: {
        en: 'Athletes need higher protein intake spread across meals for muscle recovery and growth.',
        tr: 'Sporcular kas toparlanması ve büyümesi için öğünlere yayılmış daha yüksek protein alımına ihtiyaç duyar.',
      },
    });
  }

  return suggestions;
}
