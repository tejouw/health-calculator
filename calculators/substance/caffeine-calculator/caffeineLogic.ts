import {
  CaffeineInput,
  CaffeineResult,
  CaffeineSource,
  CaffeineSourceInfo,
  SafetyStatus,
  CaffeineSafetyLevel,
  CaffeineTimelinePoint,
} from './caffeineTypes';

// Caffeine source database with amounts in mg
export const CAFFEINE_SOURCES: Record<CaffeineSource, CaffeineSourceInfo> = {
  // Coffee
  coffee_espresso: {
    name: { en: 'Espresso (Single Shot)', tr: 'Espresso (Tek Shot)' },
    caffeineMg: 60,
    servingSize: '30ml',
    category: 'coffee',
  },
  coffee_espresso_double: {
    name: { en: 'Espresso (Double Shot)', tr: 'Espresso (Çift Shot)' },
    caffeineMg: 120,
    servingSize: '60ml',
    category: 'coffee',
  },
  coffee_americano: {
    name: { en: 'Americano', tr: 'Americano' },
    caffeineMg: 150,
    servingSize: '350ml',
    category: 'coffee',
  },
  coffee_latte: {
    name: { en: 'Latte', tr: 'Latte' },
    caffeineMg: 150,
    servingSize: '350ml',
    category: 'coffee',
  },
  coffee_cappuccino: {
    name: { en: 'Cappuccino', tr: 'Cappuccino' },
    caffeineMg: 150,
    servingSize: '350ml',
    category: 'coffee',
  },
  coffee_filter: {
    name: { en: 'Filter Coffee', tr: 'Filtre Kahve' },
    caffeineMg: 200,
    servingSize: '240ml',
    category: 'coffee',
  },
  coffee_turkish: {
    name: { en: 'Turkish Coffee', tr: 'Türk Kahvesi' },
    caffeineMg: 80,
    servingSize: '60ml',
    category: 'coffee',
  },
  coffee_instant: {
    name: { en: 'Instant Coffee', tr: 'Hazır Kahve' },
    caffeineMg: 100,
    servingSize: '1 tsp',
    category: 'coffee',
  },
  coffee_decaf: {
    name: { en: 'Decaf Coffee', tr: 'Kafeinsiz Kahve' },
    caffeineMg: 5,
    servingSize: '240ml',
    category: 'coffee',
  },
  coffee_cold_brew: {
    name: { en: 'Cold Brew Coffee', tr: 'Soğuk Demleme Kahve' },
    caffeineMg: 200,
    servingSize: '350ml',
    category: 'coffee',
  },
  // Tea
  tea_black: {
    name: { en: 'Black Tea', tr: 'Siyah Çay' },
    caffeineMg: 50,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_green: {
    name: { en: 'Green Tea', tr: 'Yeşil Çay' },
    caffeineMg: 30,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_white: {
    name: { en: 'White Tea', tr: 'Beyaz Çay' },
    caffeineMg: 20,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_oolong: {
    name: { en: 'Oolong Tea', tr: 'Oolong Çayı' },
    caffeineMg: 40,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_matcha: {
    name: { en: 'Matcha Tea', tr: 'Matcha Çayı' },
    caffeineMg: 70,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_herbal: {
    name: { en: 'Herbal Tea', tr: 'Bitki Çayı' },
    caffeineMg: 0,
    servingSize: '240ml',
    category: 'tea',
  },
  tea_iced: {
    name: { en: 'Iced Tea', tr: 'Buzlu Çay' },
    caffeineMg: 50,
    servingSize: '350ml',
    category: 'tea',
  },
  tea_chai: {
    name: { en: 'Chai Tea', tr: 'Chai Çayı' },
    caffeineMg: 50,
    servingSize: '240ml',
    category: 'tea',
  },
  // Energy Drinks
  energy_red_bull: {
    name: { en: 'Red Bull', tr: 'Red Bull' },
    caffeineMg: 80,
    servingSize: '250ml',
    category: 'energy',
  },
  energy_monster: {
    name: { en: 'Monster Energy', tr: 'Monster Energy' },
    caffeineMg: 160,
    servingSize: '500ml',
    category: 'energy',
  },
  energy_rockstar: {
    name: { en: 'Rockstar', tr: 'Rockstar' },
    caffeineMg: 160,
    servingSize: '500ml',
    category: 'energy',
  },
  energy_burn: {
    name: { en: 'Burn Energy', tr: 'Burn Energy' },
    caffeineMg: 80,
    servingSize: '250ml',
    category: 'energy',
  },
  energy_hell: {
    name: { en: 'Hell Energy', tr: 'Hell Energy' },
    caffeineMg: 80,
    servingSize: '250ml',
    category: 'energy',
  },
  energy_5hour: {
    name: { en: '5-Hour Energy', tr: '5-Hour Energy' },
    caffeineMg: 200,
    servingSize: '60ml',
    category: 'energy',
  },
  // Soda
  soda_coke: {
    name: { en: 'Coca-Cola', tr: 'Coca-Cola' },
    caffeineMg: 34,
    servingSize: '330ml',
    category: 'soda',
  },
  soda_pepsi: {
    name: { en: 'Pepsi', tr: 'Pepsi' },
    caffeineMg: 38,
    servingSize: '330ml',
    category: 'soda',
  },
  soda_dr_pepper: {
    name: { en: 'Dr Pepper', tr: 'Dr Pepper' },
    caffeineMg: 41,
    servingSize: '330ml',
    category: 'soda',
  },
  soda_mountain_dew: {
    name: { en: 'Mountain Dew', tr: 'Mountain Dew' },
    caffeineMg: 54,
    servingSize: '330ml',
    category: 'soda',
  },
  soda_diet_coke: {
    name: { en: 'Diet Coke', tr: 'Diet Coke' },
    caffeineMg: 46,
    servingSize: '330ml',
    category: 'soda',
  },
  // Chocolate
  chocolate_dark: {
    name: { en: 'Dark Chocolate', tr: 'Bitter Çikolata' },
    caffeineMg: 20,
    servingSize: '30g',
    category: 'chocolate',
  },
  chocolate_milk: {
    name: { en: 'Milk Chocolate', tr: 'Sütlü Çikolata' },
    caffeineMg: 6,
    servingSize: '30g',
    category: 'chocolate',
  },
  chocolate_hot: {
    name: { en: 'Hot Chocolate', tr: 'Sıcak Çikolata' },
    caffeineMg: 15,
    servingSize: '240ml',
    category: 'chocolate',
  },
  // Pre-Workout & Supplements
  preworkout_standard: {
    name: { en: 'Pre-Workout (Standard)', tr: 'Pre-Workout (Standart)' },
    caffeineMg: 200,
    servingSize: '1 scoop',
    category: 'supplement',
  },
  preworkout_high: {
    name: { en: 'Pre-Workout (High Caffeine)', tr: 'Pre-Workout (Yüksek Kafein)' },
    caffeineMg: 350,
    servingSize: '1 scoop',
    category: 'supplement',
  },
  caffeine_pill: {
    name: { en: 'Caffeine Pill', tr: 'Kafein Hapı' },
    caffeineMg: 200,
    servingSize: '1 tablet',
    category: 'supplement',
  },
  // Other
  yerba_mate: {
    name: { en: 'Yerba Mate', tr: 'Yerba Mate' },
    caffeineMg: 85,
    servingSize: '240ml',
    category: 'other',
  },
};

// Safety levels with descriptions
export const SAFETY_LEVELS: Record<SafetyStatus, CaffeineSafetyLevel> = {
  safe: {
    status: 'safe',
    range: '< 50%',
    color: 'green',
    description: {
      en: 'Safe caffeine level',
      tr: 'Güvenli kafein seviyesi',
    },
    effects: {
      en: ['Increased alertness', 'Improved focus', 'Enhanced energy'],
      tr: ['Artan uyanıklık', 'Gelişmiş odaklanma', 'Artırılmış enerji'],
    },
  },
  moderate: {
    status: 'moderate',
    range: '50-80%',
    color: 'yellow',
    description: {
      en: 'Moderate caffeine level',
      tr: 'Orta düzey kafein',
    },
    effects: {
      en: ['Possible jitteriness', 'Mild anxiety', 'Difficulty sleeping if consumed late'],
      tr: ['Olası titreme', 'Hafif anksiyete', 'Geç tüketilirse uyku zorluğu'],
    },
  },
  high: {
    status: 'high',
    range: '80-100%',
    color: 'orange',
    description: {
      en: 'High caffeine level - approaching daily limit',
      tr: 'Yüksek kafein seviyesi - günlük limite yaklaşıyor',
    },
    effects: {
      en: ['Increased heart rate', 'Anxiety', 'Restlessness', 'Sleep disruption'],
      tr: ['Artan kalp atışı', 'Anksiyete', 'Huzursuzluk', 'Uyku bozukluğu'],
    },
  },
  excessive: {
    status: 'excessive',
    range: '100-150%',
    color: 'red',
    description: {
      en: 'Excessive caffeine - above recommended daily limit',
      tr: 'Aşırı kafein - önerilen günlük sınırın üzerinde',
    },
    effects: {
      en: ['Rapid heartbeat', 'Tremors', 'Headache', 'Insomnia', 'Digestive issues'],
      tr: ['Hızlı kalp atışı', 'Titreme', 'Baş ağrısı', 'Uykusuzluk', 'Sindirim sorunları'],
    },
  },
  dangerous: {
    status: 'dangerous',
    range: '> 150%',
    color: 'darkred',
    description: {
      en: 'Dangerous caffeine level - risk of caffeine toxicity',
      tr: 'Tehlikeli kafein seviyesi - kafein zehirlenmesi riski',
    },
    effects: {
      en: ['Palpitations', 'Severe anxiety', 'Nausea', 'Vomiting', 'Confusion', 'Seizures (rare)'],
      tr: ['Çarpıntı', 'Şiddetli anksiyete', 'Bulantı', 'Kusma', 'Kafa karışıklığı', 'Nöbet (nadir)'],
    },
  },
};

// Calculate daily caffeine limit based on age, weight, and pregnancy status
export function calculateDailyLimit(
  age: number,
  weight: number,
  unit: 'metric' | 'imperial',
  isPregnant: boolean = false
): number {
  // Pregnant women: 200mg per day (WHO recommendation)
  if (isPregnant) {
    return 200;
  }

  // Children and adolescents: 3mg per kg of body weight
  if (age < 18) {
    const weightKg = unit === 'imperial' ? weight * 0.453592 : weight;
    return Math.min(Math.round(weightKg * 3), 100); // Max 100mg for children
  }

  // Adults (18+): 400mg per day (FDA recommendation)
  return 400;
}

// Calculate caffeine currently in body based on half-life
// Caffeine half-life is approximately 5 hours in healthy adults
export function calculateCurrentCaffeine(
  totalCaffeine: number,
  hoursSinceConsumption: number,
  halfLife: number = 5
): number {
  // Formula: Current = Initial * (0.5)^(time / half-life)
  return totalCaffeine * Math.pow(0.5, hoursSinceConsumption / halfLife);
}

// Calculate hours until 90% of caffeine is cleared (considered "clear")
export function calculateHoursUntilClear(
  currentCaffeine: number,
  halfLife: number = 5
): number {
  if (currentCaffeine <= 0) return 0;

  // We want 90% cleared, so 10% remaining
  // Formula: time = half-life * log(0.1) / log(0.5)
  // This is approximately 3.32 half-lives
  return halfLife * 3.32;
}

// Determine safety status based on percentage of daily limit
export function determineSafetyStatus(percentageOfLimit: number): SafetyStatus {
  if (percentageOfLimit < 50) return 'safe';
  if (percentageOfLimit < 80) return 'moderate';
  if (percentageOfLimit < 100) return 'high';
  if (percentageOfLimit < 150) return 'excessive';
  return 'dangerous';
}

// Generate caffeine timeline (decay over time)
export function generateCaffeineTimeline(
  currentCaffeine: number,
  currentTime: Date,
  hoursAhead: number = 24,
  halfLife: number = 5
): CaffeineTimelinePoint[] {
  const timeline: CaffeineTimelinePoint[] = [];
  const peakCaffeine = currentCaffeine;

  for (let hour = 0; hour <= hoursAhead; hour++) {
    const time = new Date(currentTime.getTime() + hour * 60 * 60 * 1000);
    const caffeineLevel = calculateCurrentCaffeine(peakCaffeine, hour, halfLife);
    const percentage = peakCaffeine > 0 ? (caffeineLevel / peakCaffeine) * 100 : 0;

    timeline.push({
      time,
      caffeineLevel,
      percentage,
    });
  }

  return timeline;
}

// Calculate last safe time for caffeine consumption (for good sleep)
// Recommendation: avoid caffeine 6-8 hours before bedtime
export function calculateLastSafeCaffeineTime(
  bedtime: Date = new Date(new Date().setHours(23, 0, 0, 0)), // Default: 11 PM
  hoursBefore: number = 6
): Date {
  return new Date(bedtime.getTime() - hoursBefore * 60 * 60 * 1000);
}

// Generate warnings based on caffeine intake
export function generateWarnings(
  input: CaffeineInput,
  result: CaffeineResult
): string[] {
  const warnings: string[] = [];
  const locale = input.locale || 'en';

  // Pregnancy warning
  if (input.isPregnant && result.currentCaffeineInBody > 200) {
    warnings.push(
      locale === 'tr'
        ? 'Hamilelik sırasında günlük 200mg kafein limitini aştınız. Doktorunuza danışın.'
        : 'You have exceeded the 200mg daily caffeine limit during pregnancy. Consult your doctor.'
    );
  }

  // Children/adolescent warning
  if (input.age < 18 && result.percentageOfLimit > 80) {
    warnings.push(
      locale === 'tr'
        ? 'Çocuklar ve gençler için önerilen kafein limitine yaklaşıyorsunuz.'
        : 'You are approaching the recommended caffeine limit for children and adolescents.'
    );
  }

  // Excessive caffeine warning
  if (result.safetyStatus === 'excessive' || result.safetyStatus === 'dangerous') {
    warnings.push(
      locale === 'tr'
        ? 'Günlük önerilen kafein limitini aştınız. Yan etkiler yaşayabilirsiniz.'
        : 'You have exceeded the recommended daily caffeine limit. You may experience side effects.'
    );
  }

  // Sleep disruption warning
  const currentHour = (input.currentTime || new Date()).getHours();
  if (currentHour >= 14 && result.currentCaffeineInBody > 50) {
    warnings.push(
      locale === 'tr'
        ? 'Geç saatlerde kafein tüketimi uyku kalitenizi etkileyebilir.'
        : 'Caffeine consumption in late hours may affect your sleep quality.'
    );
  }

  // High heart rate risk
  if (result.currentCaffeineInBody > 400) {
    warnings.push(
      locale === 'tr'
        ? 'Yüksek kafein seviyesi kalp çarpıntısına neden olabilir.'
        : 'High caffeine levels may cause heart palpitations.'
    );
  }

  // Dehydration warning
  if (result.totalCaffeineConsumed > 300) {
    warnings.push(
      locale === 'tr'
        ? 'Kafein diüretik etki gösterir. Bol su içmeyi unutmayın.'
        : 'Caffeine has a diuretic effect. Remember to drink plenty of water.'
    );
  }

  return warnings;
}

// Main calculation function
export function calculateCaffeine(input: CaffeineInput): CaffeineResult {
  const currentTime = input.currentTime || new Date();
  const halfLife = 5; // hours

  // Calculate total caffeine consumed
  let totalCaffeineConsumed = 0;
  let currentCaffeineInBody = 0;

  if (input.inputMethod === 'standard' && input.caffeineItems) {
    input.caffeineItems.forEach((item) => {
      const sourceInfo = CAFFEINE_SOURCES[item.source];
      const itemCaffeine = sourceInfo.caffeineMg * item.amount;
      totalCaffeineConsumed += itemCaffeine;

      // Calculate how much of this item's caffeine is still in body
      const hoursSince = (currentTime.getTime() - item.timestamp.getTime()) / (1000 * 60 * 60);
      const remainingCaffeine = calculateCurrentCaffeine(itemCaffeine, hoursSince, halfLife);
      currentCaffeineInBody += remainingCaffeine;
    });
  } else if (input.inputMethod === 'custom' && input.customCaffeineMg) {
    totalCaffeineConsumed = input.customCaffeineMg;

    if (input.customTimestamp) {
      const hoursSince = (currentTime.getTime() - input.customTimestamp.getTime()) / (1000 * 60 * 60);
      currentCaffeineInBody = calculateCurrentCaffeine(input.customCaffeineMg, hoursSince, halfLife);
    } else {
      currentCaffeineInBody = input.customCaffeineMg;
    }
  }

  // Calculate daily limit
  const dailyLimit = calculateDailyLimit(
    input.age,
    input.weight,
    input.unit,
    input.isPregnant
  );

  // Calculate percentage of limit
  const percentageOfLimit = (totalCaffeineConsumed / dailyLimit) * 100;

  // Determine safety status
  const safetyStatus = determineSafetyStatus(percentageOfLimit);

  // Calculate hours until clear
  const hoursUntilClear = calculateHoursUntilClear(currentCaffeineInBody, halfLife);

  // Calculate time to clear caffeine
  const timeToClearCaffeine = new Date(currentTime.getTime() + hoursUntilClear * 60 * 60 * 1000);

  // Calculate last safe caffeine time (6 hours before 11 PM)
  const lastSafeCaffeineTime = calculateLastSafeCaffeineTime();

  // Generate caffeine timeline
  const caffeineTimeline = generateCaffeineTimeline(
    currentCaffeineInBody,
    currentTime,
    24,
    halfLife
  );

  // Create result object
  const result: CaffeineResult = {
    totalCaffeineConsumed,
    currentCaffeineInBody,
    dailyLimit,
    percentageOfLimit,
    safetyStatus,
    halfLifeHours: halfLife,
    hoursUntilClear,
    timeToClearCaffeine,
    lastSafeCaffeineTime,
    warnings: [],
    caffeineTimeline,
  };

  // Generate warnings
  result.warnings = generateWarnings(input, result);

  return result;
}
