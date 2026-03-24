export type DrinkCategory = 'beer' | 'wine' | 'spirits' | 'cocktail' | 'turkish' | 'liqueur';

export type AlcoholDrinkType =
  | 'beer_regular'
  | 'beer_light'
  | 'beer_craft'
  | 'beer_stout'
  | 'wine_red'
  | 'wine_white'
  | 'wine_rose'
  | 'wine_sparkling'
  | 'raki'
  | 'vodka'
  | 'whiskey'
  | 'gin'
  | 'tequila'
  | 'rum'
  | 'cocktail_margarita'
  | 'cocktail_mojito'
  | 'cocktail_cosmopolitan'
  | 'cocktail_pina_colada'
  | 'cocktail_long_island'
  | 'liqueur_baileys'
  | 'liqueur_kahlua'
  | 'liqueur_amaretto';

export interface AlcoholDrinkInfo {
  name: { en: string; tr: string };
  category: DrinkCategory;
  servingSize: number;
  servingLabel: { en: string; tr: string };
  abv: number;
  caloriesPerServing: number;
  carbsPerServing: number;
  sugarPerServing: number;
}

export interface DrinkEntry {
  id: string;
  drinkType: AlcoholDrinkType;
  quantity: number;
}

export interface AlcoholCalorieInput {
  drinks: DrinkEntry[];
  frequency: 'once' | 'weekly' | 'monthly';
  timesPerWeek?: number;
}

export interface FoodEquivalent {
  food: { en: string; tr: string };
  quantity: number;
  icon: string;
}

export interface DrinkBreakdownItem {
  drinkType: AlcoholDrinkType;
  quantity: number;
  calories: number;
  alcoholGrams: number;
}

export interface AlcoholCalorieResult {
  totalCalories: number;
  alcoholCalories: number;
  sugarCalories: number;
  totalCarbs: number;
  totalSugar: number;
  totalAlcoholGrams: number;
  standardDrinks: number;
  foodEquivalents: FoodEquivalent[];
  weeklyProjection: number;
  monthlyProjection: number;
  yearlyWeightGain: number;
  drinkBreakdown: DrinkBreakdownItem[];
}
