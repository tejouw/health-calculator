import {
  AlcoholDrinkType,
  AlcoholDrinkInfo,
  AlcoholCalorieInput,
  AlcoholCalorieResult,
  FoodEquivalent,
  DrinkBreakdownItem,
} from './alcoholCalorieTypes';

/**
 * Database of alcoholic drinks with calorie and nutritional information.
 * Alcohol provides 7 calories per gram.
 * 1 standard drink = 14g of pure alcohol (US standard).
 * Pure alcohol grams = volume(ml) * ABV/100 * 0.789 (density of ethanol).
 */
export const DRINK_DATABASE: Record<AlcoholDrinkType, AlcoholDrinkInfo> = {
  // Beer
  beer_regular: {
    name: { en: 'Regular Beer', tr: 'Normal Bira' },
    category: 'beer',
    servingSize: 330,
    servingLabel: { en: '1 bottle (330ml)', tr: '1 şişe (330ml)' },
    abv: 5.0,
    caloriesPerServing: 150,
    carbsPerServing: 13,
    sugarPerServing: 0,
  },
  beer_light: {
    name: { en: 'Light Beer', tr: 'Light Bira' },
    category: 'beer',
    servingSize: 330,
    servingLabel: { en: '1 bottle (330ml)', tr: '1 şişe (330ml)' },
    abv: 4.2,
    caloriesPerServing: 105,
    carbsPerServing: 5,
    sugarPerServing: 0,
  },
  beer_craft: {
    name: { en: 'Craft Beer / IPA', tr: 'Craft Bira / IPA' },
    category: 'beer',
    servingSize: 330,
    servingLabel: { en: '1 bottle (330ml)', tr: '1 şişe (330ml)' },
    abv: 6.5,
    caloriesPerServing: 200,
    carbsPerServing: 18,
    sugarPerServing: 2,
  },
  beer_stout: {
    name: { en: 'Stout / Dark Beer', tr: 'Stout / Siyah Bira' },
    category: 'beer',
    servingSize: 330,
    servingLabel: { en: '1 bottle (330ml)', tr: '1 şişe (330ml)' },
    abv: 5.5,
    caloriesPerServing: 180,
    carbsPerServing: 15,
    sugarPerServing: 1,
  },

  // Wine
  wine_red: {
    name: { en: 'Red Wine', tr: 'Kırmızı Şarap' },
    category: 'wine',
    servingSize: 150,
    servingLabel: { en: '1 glass (150ml)', tr: '1 kadeh (150ml)' },
    abv: 13.5,
    caloriesPerServing: 125,
    carbsPerServing: 4,
    sugarPerServing: 0.9,
  },
  wine_white: {
    name: { en: 'White Wine', tr: 'Beyaz Şarap' },
    category: 'wine',
    servingSize: 150,
    servingLabel: { en: '1 glass (150ml)', tr: '1 kadeh (150ml)' },
    abv: 12.5,
    caloriesPerServing: 120,
    carbsPerServing: 4,
    sugarPerServing: 1.4,
  },
  wine_rose: {
    name: { en: 'Rosé Wine', tr: 'Roze Şarap' },
    category: 'wine',
    servingSize: 150,
    servingLabel: { en: '1 glass (150ml)', tr: '1 kadeh (150ml)' },
    abv: 12.0,
    caloriesPerServing: 125,
    carbsPerServing: 5,
    sugarPerServing: 2.5,
  },
  wine_sparkling: {
    name: { en: 'Sparkling Wine / Champagne', tr: 'Köpüklü Şarap / Şampanya' },
    category: 'wine',
    servingSize: 150,
    servingLabel: { en: '1 glass (150ml)', tr: '1 kadeh (150ml)' },
    abv: 12.0,
    caloriesPerServing: 90,
    carbsPerServing: 2,
    sugarPerServing: 1.5,
  },

  // Turkish drinks
  raki: {
    name: { en: 'Rakı', tr: 'Rakı' },
    category: 'turkish',
    servingSize: 50,
    servingLabel: { en: '1 shot (50ml)', tr: '1 tek (50ml)' },
    abv: 45.0,
    caloriesPerServing: 126,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },

  // Spirits
  vodka: {
    name: { en: 'Vodka', tr: 'Votka' },
    category: 'spirits',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 40.0,
    caloriesPerServing: 100,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },
  whiskey: {
    name: { en: 'Whiskey', tr: 'Viski' },
    category: 'spirits',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 40.0,
    caloriesPerServing: 105,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },
  gin: {
    name: { en: 'Gin', tr: 'Cin' },
    category: 'spirits',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 40.0,
    caloriesPerServing: 100,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },
  tequila: {
    name: { en: 'Tequila', tr: 'Tekila' },
    category: 'spirits',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 40.0,
    caloriesPerServing: 100,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },
  rum: {
    name: { en: 'Rum', tr: 'Rom' },
    category: 'spirits',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 40.0,
    caloriesPerServing: 100,
    carbsPerServing: 0,
    sugarPerServing: 0,
  },

  // Cocktails
  cocktail_margarita: {
    name: { en: 'Margarita', tr: 'Margarita' },
    category: 'cocktail',
    servingSize: 240,
    servingLabel: { en: '1 glass (240ml)', tr: '1 bardak (240ml)' },
    abv: 13.0,
    caloriesPerServing: 275,
    carbsPerServing: 20,
    sugarPerServing: 16,
  },
  cocktail_mojito: {
    name: { en: 'Mojito', tr: 'Mojito' },
    category: 'cocktail',
    servingSize: 240,
    servingLabel: { en: '1 glass (240ml)', tr: '1 bardak (240ml)' },
    abv: 10.0,
    caloriesPerServing: 220,
    carbsPerServing: 24,
    sugarPerServing: 20,
  },
  cocktail_cosmopolitan: {
    name: { en: 'Cosmopolitan', tr: 'Cosmopolitan' },
    category: 'cocktail',
    servingSize: 120,
    servingLabel: { en: '1 glass (120ml)', tr: '1 bardak (120ml)' },
    abv: 18.0,
    caloriesPerServing: 150,
    carbsPerServing: 8,
    sugarPerServing: 6,
  },
  cocktail_pina_colada: {
    name: { en: 'Piña Colada', tr: 'Piña Colada' },
    category: 'cocktail',
    servingSize: 270,
    servingLabel: { en: '1 glass (270ml)', tr: '1 bardak (270ml)' },
    abv: 12.0,
    caloriesPerServing: 490,
    carbsPerServing: 64,
    sugarPerServing: 58,
  },
  cocktail_long_island: {
    name: { en: 'Long Island Iced Tea', tr: 'Long Island Buzlu Çay' },
    category: 'cocktail',
    servingSize: 300,
    servingLabel: { en: '1 glass (300ml)', tr: '1 bardak (300ml)' },
    abv: 22.0,
    caloriesPerServing: 290,
    carbsPerServing: 18,
    sugarPerServing: 15,
  },

  // Liqueurs
  liqueur_baileys: {
    name: { en: 'Baileys Irish Cream', tr: 'Baileys' },
    category: 'liqueur',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 17.0,
    caloriesPerServing: 140,
    carbsPerServing: 11,
    sugarPerServing: 9,
  },
  liqueur_kahlua: {
    name: { en: 'Kahlúa', tr: 'Kahlúa' },
    category: 'liqueur',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 20.0,
    caloriesPerServing: 135,
    carbsPerServing: 17,
    sugarPerServing: 15,
  },
  liqueur_amaretto: {
    name: { en: 'Amaretto', tr: 'Amaretto' },
    category: 'liqueur',
    servingSize: 45,
    servingLabel: { en: '1 shot (45ml)', tr: '1 tek (45ml)' },
    abv: 28.0,
    caloriesPerServing: 110,
    carbsPerServing: 13,
    sugarPerServing: 12,
  },
};

/**
 * Get food equivalents for a given calorie amount
 */
function getFoodEquivalents(calories: number): FoodEquivalent[] {
  const equivalents: FoodEquivalent[] = [];

  // Pizza slice ~270 cal
  if (calories >= 135) {
    equivalents.push({
      food: { en: 'Pizza slices', tr: 'Dilim pizza' },
      quantity: Math.round((calories / 270) * 10) / 10,
      icon: '🍕',
    });
  }

  // Hamburger ~350 cal
  if (calories >= 175) {
    equivalents.push({
      food: { en: 'Hamburgers', tr: 'Hamburger' },
      quantity: Math.round((calories / 350) * 10) / 10,
      icon: '🍔',
    });
  }

  // Chocolate bar ~230 cal
  if (calories >= 115) {
    equivalents.push({
      food: { en: 'Chocolate bars', tr: 'Çikolata bar' },
      quantity: Math.round((calories / 230) * 10) / 10,
      icon: '🍫',
    });
  }

  // Bowl of rice ~200 cal
  if (calories >= 100) {
    equivalents.push({
      food: { en: 'Bowls of rice', tr: 'Kase pilav' },
      quantity: Math.round((calories / 200) * 10) / 10,
      icon: '🍚',
    });
  }

  // Apple ~95 cal
  if (calories >= 48) {
    equivalents.push({
      food: { en: 'Apples', tr: 'Elma' },
      quantity: Math.round((calories / 95) * 10) / 10,
      icon: '🍎',
    });
  }

  // Running minutes ~10 cal per minute
  equivalents.push({
    food: { en: 'Minutes of running', tr: 'Dakika koşu' },
    quantity: Math.round(calories / 10),
    icon: '🏃',
  });

  return equivalents;
}

/**
 * Main calculation function for alcohol calories
 */
export function calculateAlcoholCalories(input: AlcoholCalorieInput): AlcoholCalorieResult {
  let totalCalories = 0;
  let totalAlcoholGrams = 0;
  let totalCarbs = 0;
  let totalSugar = 0;
  const drinkBreakdown: DrinkBreakdownItem[] = [];

  for (const entry of input.drinks) {
    const drink = DRINK_DATABASE[entry.drinkType];
    if (!drink) continue;

    const calories = drink.caloriesPerServing * entry.quantity;
    const alcoholGrams = (drink.servingSize * (drink.abv / 100) * 0.789) * entry.quantity;

    totalCalories += calories;
    totalAlcoholGrams += alcoholGrams;
    totalCarbs += drink.carbsPerServing * entry.quantity;
    totalSugar += drink.sugarPerServing * entry.quantity;

    drinkBreakdown.push({
      drinkType: entry.drinkType,
      quantity: entry.quantity,
      calories: Math.round(calories),
      alcoholGrams: Math.round(alcoholGrams * 10) / 10,
    });
  }

  const alcoholCalories = totalAlcoholGrams * 7;
  const sugarCalories = totalSugar * 4;
  const standardDrinks = totalAlcoholGrams / 14;

  // Frequency-based projections
  let weeklyProjection = totalCalories;
  let monthlyProjection = totalCalories;

  if (input.frequency === 'weekly') {
    weeklyProjection = totalCalories * (input.timesPerWeek || 1);
    monthlyProjection = weeklyProjection * 4.33;
  } else if (input.frequency === 'monthly') {
    monthlyProjection = totalCalories * (input.timesPerWeek || 1);
    weeklyProjection = monthlyProjection / 4.33;
  }

  // 7700 calories = 1 kg of body fat
  const yearlyWeightGain = (monthlyProjection * 12) / 7700;

  const foodEquivalents = getFoodEquivalents(totalCalories);

  return {
    totalCalories: Math.round(totalCalories),
    alcoholCalories: Math.round(alcoholCalories),
    sugarCalories: Math.round(sugarCalories),
    totalCarbs: Math.round(totalCarbs * 10) / 10,
    totalSugar: Math.round(totalSugar * 10) / 10,
    totalAlcoholGrams: Math.round(totalAlcoholGrams * 10) / 10,
    standardDrinks: Math.round(standardDrinks * 10) / 10,
    foodEquivalents,
    weeklyProjection: Math.round(weeklyProjection),
    monthlyProjection: Math.round(monthlyProjection),
    yearlyWeightGain: Math.round(yearlyWeightGain * 10) / 10,
    drinkBreakdown,
  };
}

/**
 * Get drink info by type
 */
export function getDrinkInfoByType(drinkType: AlcoholDrinkType): AlcoholDrinkInfo {
  return DRINK_DATABASE[drinkType];
}

/**
 * Get all drinks grouped by category
 */
export function getDrinksByCategory(locale: 'en' | 'tr'): Record<string, { type: AlcoholDrinkType; label: string }[]> {
  const categoryLabels: Record<string, { en: string; tr: string }> = {
    beer: { en: 'Beer', tr: 'Bira' },
    wine: { en: 'Wine', tr: 'Şarap' },
    turkish: { en: 'Turkish Drinks', tr: 'Türk İçkileri' },
    spirits: { en: 'Spirits', tr: 'Sert İçkiler' },
    cocktail: { en: 'Cocktails', tr: 'Kokteyller' },
    liqueur: { en: 'Liqueurs', tr: 'Likörler' },
  };

  const grouped: Record<string, { type: AlcoholDrinkType; label: string }[]> = {};

  for (const [type, info] of Object.entries(DRINK_DATABASE)) {
    const catLabel = categoryLabels[info.category]?.[locale] || info.category;
    if (!grouped[catLabel]) {
      grouped[catLabel] = [];
    }
    grouped[catLabel].push({
      type: type as AlcoholDrinkType,
      label: `${info.name[locale]} - ${info.servingLabel[locale]}`,
    });
  }

  return grouped;
}
