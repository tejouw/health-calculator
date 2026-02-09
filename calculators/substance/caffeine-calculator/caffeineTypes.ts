export interface CaffeineInput {
  age: number; // age in years
  weight: number;
  unit: 'metric' | 'imperial';
  inputMethod: 'standard' | 'custom';
  isPregnant?: boolean;
  locale?: 'en' | 'tr';

  // Standard method
  caffeineItems?: CaffeineItem[];

  // Custom method
  customCaffeineMg?: number;
  customTimestamp?: Date;

  currentTime?: Date;
}

export interface CaffeineItem {
  source: CaffeineSource;
  amount: number; // number of servings
  timestamp: Date; // when consumed
}

export interface CaffeineResult {
  totalCaffeineConsumed: number; // mg total consumed today
  currentCaffeineInBody: number; // mg currently in bloodstream
  dailyLimit: number; // mg recommended daily limit
  percentageOfLimit: number; // % of daily limit
  safetyStatus: SafetyStatus;
  halfLifeHours: number; // caffeine half-life
  hoursUntilClear: number; // hours until 90% cleared
  timeToClearCaffeine: Date; // estimated time when clear
  lastSafeCaffeineTime: Date; // last safe time for caffeine (for good sleep)
  warnings: string[];
  caffeineTimeline: CaffeineTimelinePoint[];
}

export interface CaffeineTimelinePoint {
  time: Date;
  caffeineLevel: number; // mg
  percentage: number; // % of peak
}

export type CaffeineSource =
  // Coffee / Kahve
  | 'coffee_espresso'        // 60mg (single shot)
  | 'coffee_espresso_double' // 120mg (double shot)
  | 'coffee_americano'       // 150mg (tall/medium)
  | 'coffee_latte'           // 150mg (tall/medium)
  | 'coffee_cappuccino'      // 150mg (tall/medium)
  | 'coffee_filter'          // 200mg (medium cup)
  | 'coffee_turkish'         // 80mg (small cup)
  | 'coffee_instant'         // 100mg (1 tsp)
  | 'coffee_decaf'           // 5mg (medium cup)
  | 'coffee_cold_brew'       // 200mg (medium)
  // Tea / Çay
  | 'tea_black'              // 50mg (cup)
  | 'tea_green'              // 30mg (cup)
  | 'tea_white'              // 20mg (cup)
  | 'tea_oolong'             // 40mg (cup)
  | 'tea_matcha'             // 70mg (cup)
  | 'tea_herbal'             // 0mg (cup)
  | 'tea_iced'               // 50mg (cup)
  | 'tea_chai'               // 50mg (cup)
  // Energy Drinks / Enerji İçecekleri
  | 'energy_red_bull'        // 80mg (250ml)
  | 'energy_monster'         // 160mg (500ml)
  | 'energy_rockstar'        // 160mg (500ml)
  | 'energy_burn'            // 80mg (250ml)
  | 'energy_hell'            // 80mg (250ml)
  | 'energy_5hour'           // 200mg (60ml shot)
  // Soda / Gazoz
  | 'soda_coke'              // 34mg (330ml)
  | 'soda_pepsi'             // 38mg (330ml)
  | 'soda_dr_pepper'         // 41mg (330ml)
  | 'soda_mountain_dew'      // 54mg (330ml)
  | 'soda_diet_coke'         // 46mg (330ml)
  // Chocolate / Çikolata
  | 'chocolate_dark'         // 20mg (30g)
  | 'chocolate_milk'         // 6mg (30g)
  | 'chocolate_hot'          // 15mg (cup)
  // Pre-Workout & Supplements
  | 'preworkout_standard'    // 200mg (scoop)
  | 'preworkout_high'        // 350mg (scoop)
  | 'caffeine_pill'          // 200mg (tablet)
  // Other / Diğer
  | 'yerba_mate';            // 85mg (cup)

export type SafetyStatus =
  | 'safe'           // < 50% of daily limit
  | 'moderate'       // 50-80% of daily limit
  | 'high'           // 80-100% of daily limit
  | 'excessive'      // 100-150% of daily limit
  | 'dangerous';     // > 150% of daily limit

export interface CaffeineSourceInfo {
  name: {
    en: string;
    tr: string;
  };
  caffeineMg: number;      // mg of caffeine
  servingSize: string;     // serving description
  category: 'coffee' | 'tea' | 'energy' | 'soda' | 'chocolate' | 'supplement' | 'other';
}

export interface CaffeineSafetyLevel {
  status: SafetyStatus;
  range: string;
  color: string;
  description: {
    en: string;
    tr: string;
  };
  effects: {
    en: string[];
    tr: string[];
  };
}
