export interface BloodAlcoholInput {
  gender: 'male' | 'female';
  weight: number;
  age: number; // age in years
  unit: 'metric' | 'imperial';
  drinkingMethod: 'standard' | 'custom';
  locale?: 'en' | 'tr'; // locale for warnings

  // Standard drinks method
  numberOfDrinks?: number;
  drinkType?: DrinkType;

  // Custom method
  alcoholVolume?: number; // in ml or oz
  alcoholPercentage?: number; // ABV %

  timePeriod: number; // hours since first drink
  timeElapsedSinceLastDrink?: number; // hours since last drink
}

export interface BloodAlcoholResult {
  currentBAC: number; // Blood Alcohol Content %
  peakBAC: number; // Peak BAC reached
  alcoholConsumed: number; // grams of pure alcohol
  hoursUntilSober: number; // hours until BAC reaches 0%
  legalStatus: LegalStatus;
  impairmentLevel: ImpairmentLevel;
  bodyWaterContent: number; // percentage
  eliminationRate: number; // g/hour
  warnings: string[];
}

export type DrinkType =
  // Beer / Bira
  | 'beer_regular'      // 330ml, 5% ABV
  | 'beer_light'        // 330ml, 4.2% ABV
  | 'beer_craft'        // 330ml, 7% ABV
  | 'beer_pint'         // 500ml (1 pint), 5% ABV
  | 'beer_large'        // 500ml, 5% ABV
  // Wine / Şarap
  | 'wine_red'          // 150ml, 12% ABV
  | 'wine_white'        // 150ml, 12% ABV
  | 'wine_rose'         // 150ml, 11% ABV
  | 'wine_sparkling'    // 120ml, 12% ABV
  | 'wine_fortified'    // 100ml, 18% ABV
  | 'wine_glass_large'  // 250ml, 12% ABV
  // Spirits / Sert İçkiler
  | 'vodka_shot'        // 50ml (tek), 40% ABV
  | 'vodka_double'      // 100ml (duble), 40% ABV
  | 'whiskey_shot'      // 50ml, 40% ABV
  | 'whiskey_double'    // 100ml, 40% ABV
  | 'gin_shot'          // 50ml, 40% ABV
  | 'gin_double'        // 100ml, 40% ABV
  | 'rum_shot'          // 50ml, 40% ABV
  | 'rum_double'        // 100ml, 40% ABV
  | 'tequila_shot'      // 50ml, 40% ABV
  | 'tequila_double'    // 100ml, 40% ABV
  // Turkish Drinks / Türk İçkileri
  | 'raki_tek'          // 50ml (tek), 45% ABV
  | 'raki_duble'        // 100ml (duble), 45% ABV
  | 'raki_triple'       // 150ml (triple), 45% ABV
  | 'raki_sek'          // 50ml (sek), 45% ABV
  // Cocktails / Kokteyller
  | 'cocktail_standard' // 200ml, ~15% ABV
  | 'cocktail_strong'   // 200ml, ~20% ABV
  | 'mojito'            // 250ml, ~12% ABV
  | 'margarita'         // 200ml, ~18% ABV
  | 'long_island'       // 300ml, ~22% ABV
  // Mixed / Karışık
  | 'liqueur_shot'      // 50ml, 25% ABV
  | 'baileys'           // 50ml, 17% ABV
  | 'champagne_glass';  // 120ml, 12% ABV

export type LegalStatus =
  | 'sober'             // BAC: 0.00%
  | 'legal'             // BAC: 0.01-0.07%
  | 'legal_limit'       // BAC: 0.08% (warning zone)
  | 'illegal_driving'   // BAC: 0.08-0.15%
  | 'highly_impaired'   // BAC: 0.15-0.30%
  | 'dangerous';        // BAC: 0.30%+

export type ImpairmentLevel =
  | 'none'
  | 'mild'
  | 'moderate'
  | 'significant'
  | 'severe'
  | 'life_threatening';

export interface DrinkInfo {
  name: {
    en: string;
    tr: string;
  };
  volume: number;      // in ml
  abv: number;         // Alcohol By Volume %
  standardDrinks: number; // equivalent standard drinks
  alcoholGrams: number;   // pure alcohol in grams
}

export interface ImpairmentEffect {
  level: string;
  bacRange: string;
  physicalEffects: string[];
  cognitiveEffects: string[];
  risks: string[];
}
