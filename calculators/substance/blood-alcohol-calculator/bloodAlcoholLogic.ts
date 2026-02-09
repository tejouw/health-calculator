import {
  BloodAlcoholInput,
  BloodAlcoholResult,
  DrinkType,
  DrinkInfo,
  LegalStatus,
  ImpairmentLevel,
} from './bloodAlcoholTypes';

/**
 * Widmark Formula Constants
 * r = Body water distribution ratio (varies by gender)
 * β = Alcohol elimination rate per hour
 */
const WIDMARK_CONSTANTS = {
  male: 0.68,   // Men have ~68% water content in body
  female: 0.55, // Women have ~55% water content in body
};

const ELIMINATION_RATE = 0.015; // Standard elimination rate: 0.015% BAC per hour
const ELIMINATION_RATE_RANGE = { min: 0.010, max: 0.020 }; // Individual variation

/**
 * Standard drink definitions (USA standard: 14g pure alcohol)
 * Volume in ml, ABV as percentage (5.0 means 5%)
 */
const DRINK_DEFINITIONS: Record<DrinkType, Omit<DrinkInfo, 'standardDrinks' | 'alcoholGrams'>> = {
  // Beer / Bira
  beer_regular: {
    name: { en: 'Regular Beer (330ml)', tr: 'Normal Bira (330ml)' },
    volume: 330,
    abv: 5.0
  },
  beer_light: {
    name: { en: 'Light Beer (330ml)', tr: 'Hafif Bira (330ml)' },
    volume: 330,
    abv: 4.2
  },
  beer_craft: {
    name: { en: 'Craft Beer (330ml)', tr: 'Craft Bira (330ml)' },
    volume: 330,
    abv: 7.0
  },
  beer_pint: {
    name: { en: 'Beer Pint (500ml)', tr: 'Büyük Bira (500ml)' },
    volume: 500,
    abv: 5.0
  },
  beer_large: {
    name: { en: 'Large Beer (500ml)', tr: 'Büyük Boy Bira (500ml)' },
    volume: 500,
    abv: 5.0
  },

  // Wine / Şarap
  wine_red: {
    name: { en: 'Red Wine Glass (150ml)', tr: 'Kırmızı Şarap Kadeh (150ml)' },
    volume: 150,
    abv: 12.0
  },
  wine_white: {
    name: { en: 'White Wine Glass (150ml)', tr: 'Beyaz Şarap Kadeh (150ml)' },
    volume: 150,
    abv: 12.0
  },
  wine_rose: {
    name: { en: 'Rosé Wine Glass (150ml)', tr: 'Roze Şarap Kadeh (150ml)' },
    volume: 150,
    abv: 11.0
  },
  wine_sparkling: {
    name: { en: 'Sparkling Wine (120ml)', tr: 'Köpüklü Şarap (120ml)' },
    volume: 120,
    abv: 12.0
  },
  wine_fortified: {
    name: { en: 'Fortified Wine (100ml)', tr: 'Sert Şarap/Porto (100ml)' },
    volume: 100,
    abv: 18.0
  },
  wine_glass_large: {
    name: { en: 'Large Wine Glass (250ml)', tr: 'Büyük Şarap Kadeh (250ml)' },
    volume: 250,
    abv: 12.0
  },

  // Spirits / Sert İçkiler
  vodka_shot: {
    name: { en: 'Vodka Shot (50ml)', tr: 'Votka Tek (50ml)' },
    volume: 50,
    abv: 40.0
  },
  vodka_double: {
    name: { en: 'Vodka Double (100ml)', tr: 'Votka Duble (100ml)' },
    volume: 100,
    abv: 40.0
  },
  whiskey_shot: {
    name: { en: 'Whiskey Shot (50ml)', tr: 'Viski Tek (50ml)' },
    volume: 50,
    abv: 40.0
  },
  whiskey_double: {
    name: { en: 'Whiskey Double (100ml)', tr: 'Viski Duble (100ml)' },
    volume: 100,
    abv: 40.0
  },
  gin_shot: {
    name: { en: 'Gin Shot (50ml)', tr: 'Cin Tek (50ml)' },
    volume: 50,
    abv: 40.0
  },
  gin_double: {
    name: { en: 'Gin Double (100ml)', tr: 'Cin Duble (100ml)' },
    volume: 100,
    abv: 40.0
  },
  rum_shot: {
    name: { en: 'Rum Shot (50ml)', tr: 'Rom Tek (50ml)' },
    volume: 50,
    abv: 40.0
  },
  rum_double: {
    name: { en: 'Rum Double (100ml)', tr: 'Rom Duble (100ml)' },
    volume: 100,
    abv: 40.0
  },
  tequila_shot: {
    name: { en: 'Tequila Shot (50ml)', tr: 'Tekila Tek (50ml)' },
    volume: 50,
    abv: 40.0
  },
  tequila_double: {
    name: { en: 'Tequila Double (100ml)', tr: 'Tekila Duble (100ml)' },
    volume: 100,
    abv: 40.0
  },

  // Turkish Drinks / Türk İçkileri
  raki_tek: {
    name: { en: 'Rakı Single (50ml)', tr: 'Rakı Tek (50ml)' },
    volume: 50,
    abv: 45.0
  },
  raki_duble: {
    name: { en: 'Rakı Double (100ml)', tr: 'Rakı Duble (100ml)' },
    volume: 100,
    abv: 45.0
  },
  raki_triple: {
    name: { en: 'Rakı Triple (150ml)', tr: 'Rakı Triple (150ml)' },
    volume: 150,
    abv: 45.0
  },
  raki_sek: {
    name: { en: 'Rakı Neat (50ml)', tr: 'Rakı Sek (50ml)' },
    volume: 50,
    abv: 45.0
  },

  // Cocktails / Kokteyller
  cocktail_standard: {
    name: { en: 'Standard Cocktail (200ml)', tr: 'Standart Kokteyl (200ml)' },
    volume: 200,
    abv: 15.0
  },
  cocktail_strong: {
    name: { en: 'Strong Cocktail (200ml)', tr: 'Sert Kokteyl (200ml)' },
    volume: 200,
    abv: 20.0
  },
  mojito: {
    name: { en: 'Mojito (250ml)', tr: 'Mojito (250ml)' },
    volume: 250,
    abv: 12.0
  },
  margarita: {
    name: { en: 'Margarita (200ml)', tr: 'Margarita (200ml)' },
    volume: 200,
    abv: 18.0
  },
  long_island: {
    name: { en: 'Long Island Iced Tea (300ml)', tr: 'Long Island Iced Tea (300ml)' },
    volume: 300,
    abv: 22.0
  },

  // Mixed / Karışık
  liqueur_shot: {
    name: { en: 'Liqueur Shot (50ml)', tr: 'Likör Tek (50ml)' },
    volume: 50,
    abv: 25.0
  },
  baileys: {
    name: { en: 'Baileys (50ml)', tr: 'Baileys (50ml)' },
    volume: 50,
    abv: 17.0
  },
  champagne_glass: {
    name: { en: 'Champagne Glass (120ml)', tr: 'Şampanya Kadeh (120ml)' },
    volume: 120,
    abv: 12.0
  },
};

/**
 * Calculate grams of pure alcohol from volume and ABV
 * Formula: Volume (ml) × ABV (%) × 0.789 (alcohol density) / 100
 */
function calculateAlcoholGrams(volumeMl: number, abvPercent: number): number {
  const ALCOHOL_DENSITY = 0.789; // g/ml at 20°C
  return (volumeMl * (abvPercent / 100) * ALCOHOL_DENSITY);
}

/**
 * Get drink information including alcohol content
 */
export function getDrinkInfo(drinkType: DrinkType): DrinkInfo {
  const drink = DRINK_DEFINITIONS[drinkType];
  const alcoholGrams = calculateAlcoholGrams(drink.volume, drink.abv);
  const standardDrinks = alcoholGrams / 14; // USA standard drink = 14g

  return {
    ...drink,
    standardDrinks: Math.round(standardDrinks * 10) / 10,
    alcoholGrams: Math.round(alcoholGrams * 10) / 10,
  };
}

/**
 * Calculate total alcohol consumed in grams
 */
function calculateTotalAlcohol(input: BloodAlcoholInput): number {
  if (input.drinkingMethod === 'standard' && input.numberOfDrinks && input.drinkType) {
    const drinkInfo = getDrinkInfo(input.drinkType);
    return drinkInfo.alcoholGrams * input.numberOfDrinks;
  } else if (input.drinkingMethod === 'custom' && input.alcoholVolume && input.alcoholPercentage) {
    let volumeMl = input.alcoholVolume;

    // Convert oz to ml if imperial
    if (input.unit === 'imperial') {
      volumeMl = input.alcoholVolume * 29.5735;
    }

    return calculateAlcoholGrams(volumeMl, input.alcoholPercentage);
  }

  return 0;
}

/**
 * Widmark Formula for BAC calculation
 * BAC = (A / (r × W)) - (β × t)
 *
 * Where:
 * A = Alcohol consumed in grams
 * r = Widmark constant (gender-specific)
 * W = Body weight in grams
 * β = Elimination rate (0.015% per hour)
 * t = Time elapsed in hours
 */
function calculateBAC(
  alcoholGrams: number,
  weightKg: number,
  gender: 'male' | 'female',
  timeElapsed: number
): number {
  const widmarkConstant = WIDMARK_CONSTANTS[gender];
  const weightGrams = weightKg * 1000;

  // Peak BAC (before elimination)
  const peakBAC = (alcoholGrams / (widmarkConstant * weightGrams)) * 100;

  // Current BAC after elimination
  const eliminatedBAC = ELIMINATION_RATE * timeElapsed;
  const currentBAC = Math.max(0, peakBAC - eliminatedBAC);

  return currentBAC;
}

/**
 * Calculate hours until sober (BAC reaches 0%)
 */
function calculateHoursUntilSober(currentBAC: number): number {
  if (currentBAC <= 0) return 0;
  return currentBAC / ELIMINATION_RATE;
}

/**
 * Determine legal status based on BAC
 */
function determineLegalStatus(bac: number): LegalStatus {
  if (bac <= 0.00) return 'sober';
  if (bac < 0.08) return 'legal';
  if (bac === 0.08) return 'legal_limit';
  if (bac < 0.15) return 'illegal_driving';
  if (bac < 0.30) return 'highly_impaired';
  return 'dangerous';
}

/**
 * Determine impairment level based on BAC
 */
function determineImpairmentLevel(bac: number): ImpairmentLevel {
  if (bac <= 0.00) return 'none';
  if (bac < 0.05) return 'mild';
  if (bac < 0.10) return 'moderate';
  if (bac < 0.20) return 'significant';
  if (bac < 0.30) return 'severe';
  return 'life_threatening';
}

/**
 * Generate warnings based on BAC level and context
 */
function generateWarnings(
  bac: number,
  hoursUntilSober: number,
  gender: 'male' | 'female',
  age: number,
  locale: 'en' | 'tr' = 'en'
): string[] {
  const warnings: string[] = [];

  if (bac >= 0.08) {
    warnings.push(
      locale === 'tr'
        ? '⚠️ ARABA KULLANMAK YASADIŞI - KAK yasal sınırın üstünde (%0.08)'
        : '⚠️ ILLEGAL TO DRIVE - Your BAC is above the legal limit (0.08%)'
    );
  }

  if (bac >= 0.05 && bac < 0.08) {
    warnings.push(
      locale === 'tr'
        ? '⚠️ BOZULMUş - Araba kullanmayın, makine çalıştırmayın, önemli kararlar almayın'
        : '⚠️ IMPAIRED - Do not drive, operate machinery, or make important decisions'
    );
  }

  if (bac >= 0.15) {
    warnings.push(
      locale === 'tr'
        ? '🚨 AĞIR BOZULMA - Bilinç kaybı, kusma ve yaralanma riski. Yardım isteyin'
        : '🚨 SEVERE IMPAIRMENT - Risk of blackout, vomiting, and injury. Seek assistance'
    );
  }

  if (bac >= 0.30) {
    warnings.push(
      locale === 'tr'
        ? '🚨 YAŞAMI TEHDİT EDİYOR - Alkol zehirlenmesi, bilinç kaybı ve ölüm riski. HEMEN ACİL TIBBİ YARDIM ARAYIN'
        : '🚨 LIFE THREATENING - Risk of alcohol poisoning, loss of consciousness, and death. SEEK EMERGENCY MEDICAL HELP IMMEDIATELY'
    );
  }

  if (hoursUntilSober > 8) {
    warnings.push(
      locale === 'tr'
        ? `⏰ Yaklaşık ${Math.round(hoursUntilSober)} saat boyunca ayık olmayacaksınız`
        : `⏰ You will not be sober for approximately ${Math.round(hoursUntilSober)} hours`
    );
  }

  if (gender === 'female' && bac > 0.05) {
    warnings.push(
      locale === 'tr'
        ? 'ℹ️ Kadınlar alkolü erkeklerden farklı metabolize eder ve daha güçlü etkiler yaşayabilir'
        : 'ℹ️ Women metabolize alcohol differently than men and may experience stronger effects'
    );
  }

  if (age >= 65 && bac > 0.04) {
    warnings.push(
      locale === 'tr'
        ? 'ℹ️ Yaşlı bireyler alkole daha duyarlıdır ve daha düşük KAK seviyelerinde etki görebilir'
        : 'ℹ️ Older adults are more sensitive to alcohol and may experience effects at lower BAC levels'
    );
  }

  if (age >= 18 && age < 21 && bac > 0.00) {
    warnings.push(
      locale === 'tr'
        ? 'ℹ️ Genç yetişkinlerin beyin gelişimi hala devam ediyor - alkol tüketimi risk taşır'
        : 'ℹ️ Young adults\' brains are still developing - alcohol consumption carries risks'
    );
  }

  if (bac > 0.00) {
    warnings.push(
      locale === 'tr'
        ? 'ℹ️ Sadece ZAMAN KAK\'ı azaltabilir - kahve, soğuk duş ve diğer yöntemler alkol eliminasyonunu hızlandırmaz'
        : 'ℹ️ Only TIME can reduce BAC - coffee, cold showers, and other methods DO NOT speed up alcohol elimination'
    );
  }

  return warnings;
}

/**
 * Main blood alcohol calculator function
 * Uses the Widmark Formula to estimate BAC
 */
export function calculateBloodAlcohol(input: BloodAlcoholInput): BloodAlcoholResult {
  // Convert weight to kg if imperial
  let weightKg = input.weight;
  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.453592;
  }

  // Calculate total alcohol consumed
  const alcoholConsumed = calculateTotalAlcohol(input);

  // Calculate peak BAC (at time 0, before elimination)
  const peakBAC = calculateBAC(alcoholConsumed, weightKg, input.gender, 0);

  // Calculate current BAC after elimination
  const currentBAC = calculateBAC(alcoholConsumed, weightKg, input.gender, input.timePeriod);

  // Calculate hours until sober
  const hoursUntilSober = calculateHoursUntilSober(currentBAC);

  // Determine legal status and impairment
  const legalStatus = determineLegalStatus(currentBAC);
  const impairmentLevel = determineImpairmentLevel(currentBAC);

  // Generate warnings
  const warnings = generateWarnings(currentBAC, hoursUntilSober, input.gender, input.age, input.locale || 'en');

  // Calculate body water content percentage
  const bodyWaterContent = WIDMARK_CONSTANTS[input.gender] * 100;

  // Calculate elimination rate in grams per hour
  const eliminationRate = weightKg * 1000 * WIDMARK_CONSTANTS[input.gender] * ELIMINATION_RATE / 100;

  return {
    currentBAC: Math.round(currentBAC * 1000) / 1000, // Round to 3 decimals
    peakBAC: Math.round(peakBAC * 1000) / 1000,
    alcoholConsumed: Math.round(alcoholConsumed * 10) / 10,
    hoursUntilSober: Math.round(hoursUntilSober * 10) / 10,
    legalStatus,
    impairmentLevel,
    bodyWaterContent: Math.round(bodyWaterContent * 10) / 10,
    eliminationRate: Math.round(eliminationRate * 10) / 10,
    warnings,
  };
}

/**
 * Get legal status description
 */
export function getLegalStatusDescription(status: LegalStatus, locale: 'en' | 'tr'): string {
  const descriptions = {
    sober: {
      en: 'Sober (BAC: 0.00%) - No alcohol detected',
      tr: 'Ayık (KAK: 0.00%) - Alkol tespit edilmedi',
    },
    legal: {
      en: 'Below Legal Limit (BAC: 0.01-0.07%) - Legal to drive in most places, but impaired',
      tr: 'Yasal Sınırın Altında (KAK: 0.01-0.07%) - Çoğu yerde araba kullanılabilir ancak bozulma var',
    },
    legal_limit: {
      en: 'At Legal Limit (BAC: 0.08%) - Illegal to drive in most jurisdictions',
      tr: 'Yasal Sınırda (KAK: 0.08%) - Çoğu yargı bölgesinde araba kullanmak yasadışı',
    },
    illegal_driving: {
      en: 'Illegal to Drive (BAC: 0.08-0.15%) - Significantly impaired, DO NOT DRIVE',
      tr: 'Araba Kullanmak Yasadışı (KAK: 0.08-0.15%) - Önemli bozulma, ARABA KULLANMAYIN',
    },
    highly_impaired: {
      en: 'Highly Impaired (BAC: 0.15-0.30%) - Severe impairment, risk of blackout',
      tr: 'Ciddi Bozulma (KAK: 0.15-0.30%) - Ağır bozulma, bilinç kaybı riski',
    },
    dangerous: {
      en: 'DANGEROUS (BAC: 0.30%+) - Life-threatening, SEEK EMERGENCY MEDICAL HELP',
      tr: 'TEHLİKELİ (KAK: 0.30%+) - Yaşamı tehdit ediyor, ACİL TIBBİ YARDIM ARAYIN',
    },
  };

  return descriptions[status][locale];
}

/**
 * Get impairment level description
 */
export function getImpairmentDescription(level: ImpairmentLevel, locale: 'en' | 'tr'): string {
  const descriptions = {
    none: {
      en: 'No Impairment',
      tr: 'Bozulma Yok',
    },
    mild: {
      en: 'Mild Impairment - Slight relaxation, minor coordination issues',
      tr: 'Hafif Bozulma - Hafif rahatlama, küçük koordinasyon sorunları',
    },
    moderate: {
      en: 'Moderate Impairment - Reduced reaction time, impaired judgment',
      tr: 'Orta Bozulma - Azalmış tepki süresi, bozulmuş yargılama',
    },
    significant: {
      en: 'Significant Impairment - Major coordination problems, slurred speech',
      tr: 'Önemli Bozulma - Büyük koordinasyon sorunları, peltek konuşma',
    },
    severe: {
      en: 'Severe Impairment - Risk of blackout, vomiting, injury',
      tr: 'Ağır Bozulma - Bilinç kaybı, kusma, yaralanma riski',
    },
    life_threatening: {
      en: 'LIFE THREATENING - Risk of alcohol poisoning, coma, death',
      tr: 'YAŞAMI TEHDİT EDİYOR - Alkol zehirlenmesi, koma, ölüm riski',
    },
  };

  return descriptions[level][locale];
}

/**
 * Get all drink types with their information
 */
export function getAllDrinkTypes(): Record<DrinkType, DrinkInfo> {
  const result = {} as Record<DrinkType, DrinkInfo>;

  for (const key in DRINK_DEFINITIONS) {
    result[key as DrinkType] = getDrinkInfo(key as DrinkType);
  }

  return result;
}

export { WIDMARK_CONSTANTS, ELIMINATION_RATE, ELIMINATION_RATE_RANGE };
