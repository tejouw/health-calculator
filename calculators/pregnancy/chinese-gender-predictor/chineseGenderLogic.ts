import {
  ChineseGenderInput,
  ChineseGenderResult,
  ChineseZodiac,
  GenderPredictionChart,
} from './chineseGenderTypes';

// Chinese Gender Prediction Chart (based on traditional Chinese calendar)
// Rows represent Lunar Age (18-45), Columns represent Lunar Month (1-12)
const genderChart: { [age: number]: { [month: number]: 'boy' | 'girl' } } = {
  18: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'boy', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  19: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'girl', 11: 'boy', 12: 'girl' },
  20: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'boy', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'girl', 11: 'boy', 12: 'boy' },
  21: { 1: 'boy', 2: 'girl', 3: 'girl', 4: 'girl', 5: 'girl', 6: 'girl', 7: 'girl', 8: 'girl', 9: 'girl', 10: 'girl', 11: 'girl', 12: 'girl' },
  22: { 1: 'girl', 2: 'boy', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'girl', 8: 'boy', 9: 'girl', 10: 'girl', 11: 'girl', 12: 'girl' },
  23: { 1: 'boy', 2: 'boy', 3: 'girl', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'girl', 8: 'boy', 9: 'girl', 10: 'boy', 11: 'boy', 12: 'boy' },
  24: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  25: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'boy', 6: 'boy', 7: 'girl', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  26: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  27: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  28: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  29: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  30: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  31: { 1: 'boy', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  32: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  33: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  34: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  35: { 1: 'boy', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  36: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  37: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  38: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  39: { 1: 'boy', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  40: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  41: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  42: { 1: 'boy', 2: 'girl', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  43: { 1: 'boy', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  44: { 1: 'boy', 2: 'boy', 3: 'boy', 4: 'girl', 5: 'boy', 6: 'girl', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
  45: { 1: 'girl', 2: 'boy', 3: 'girl', 4: 'boy', 5: 'girl', 6: 'boy', 7: 'boy', 8: 'boy', 9: 'boy', 10: 'boy', 11: 'boy', 12: 'boy' },
};

// Chinese Zodiac animals
const zodiacAnimals: Array<{ en: string; tr: string }> = [
  { en: 'Rat', tr: 'Fare' },
  { en: 'Ox', tr: 'Öküz' },
  { en: 'Tiger', tr: 'Kaplan' },
  { en: 'Rabbit', tr: 'Tavşan' },
  { en: 'Dragon', tr: 'Ejderha' },
  { en: 'Snake', tr: 'Yılan' },
  { en: 'Horse', tr: 'At' },
  { en: 'Goat', tr: 'Keçi' },
  { en: 'Monkey', tr: 'Maymun' },
  { en: 'Rooster', tr: 'Horoz' },
  { en: 'Dog', tr: 'Köpek' },
  { en: 'Pig', tr: 'Domuz' },
];

// Chinese Five Elements
const elements: Array<{ en: string; tr: string }> = [
  { en: 'Wood', tr: 'Ağaç' },
  { en: 'Fire', tr: 'Ateş' },
  { en: 'Earth', tr: 'Toprak' },
  { en: 'Metal', tr: 'Metal' },
  { en: 'Water', tr: 'Su' },
];

/**
 * Calculate Chinese Lunar Age
 * In Chinese culture, a person is considered 1 year old at birth
 * and gains a year at the Chinese New Year
 *
 * Simplified calculation: Western age + 1
 */
export function calculateLunarAge(birthDate: Date, referenceDate: Date): number {
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  const refYear = referenceDate.getFullYear();
  const refMonth = referenceDate.getMonth();
  const refDay = referenceDate.getDate();

  // Calculate Western age
  let westernAge = refYear - birthYear;

  // If birthday hasn't occurred this year, subtract 1
  if (refMonth < birthMonth || (refMonth === birthMonth && refDay < birthDay)) {
    westernAge--;
  }

  // Lunar age is typically Western age + 1
  // Some variations add 2 if born before Chinese New Year, but we'll use simplified method
  const lunarAge = westernAge + 1;

  return lunarAge;
}

/**
 * Calculate Lunar Month (simplified Gregorian approximation)
 * True lunar calendar conversion is complex; this is a simplified version
 */
export function calculateLunarMonth(date: Date): number {
  // Simplified: use Gregorian month as approximation
  // Real lunar calendar would require complex astronomical calculations
  return date.getMonth() + 1; // JavaScript months are 0-indexed
}

/**
 * Get Chinese Zodiac based on year
 */
export function getChineseZodiac(year: number): ChineseZodiac {
  // Base year for zodiac cycle (1924 was Year of the Rat)
  const baseYear = 1924;
  const zodiacIndex = (year - baseYear) % 12;
  const elementIndex = Math.floor(((year - 1924) % 10) / 2);

  return {
    animal: zodiacAnimals[zodiacIndex],
    element: elements[elementIndex],
    year,
  };
}

/**
 * Predict gender based on Chinese Gender Chart
 */
export function predictGender(lunarAge: number, lunarMonth: number): 'boy' | 'girl' {
  // Check if lunar age is within chart range
  if (lunarAge < 18 || lunarAge > 45) {
    // Default prediction for out-of-range ages
    // Alternate based on month for variety
    return lunarMonth % 2 === 0 ? 'boy' : 'girl';
  }

  // Look up prediction in chart
  const ageRow = genderChart[lunarAge];
  if (ageRow && ageRow[lunarMonth]) {
    return ageRow[lunarMonth];
  }

  // Fallback
  return 'girl';
}

/**
 * Calculate complete Chinese Gender Prediction
 */
export function calculateChineseGender(input: ChineseGenderInput): ChineseGenderResult {
  const { motherBirthDate, conceptionDate } = input;

  // Calculate lunar age at conception
  const lunarAge = calculateLunarAge(motherBirthDate, conceptionDate);

  // Calculate lunar month of conception
  const lunarMonth = calculateLunarMonth(conceptionDate);

  // Predict gender
  const predictedGender = predictGender(lunarAge, lunarMonth);

  // Get Chinese zodiac for conception year
  const conceptionYear = conceptionDate.getFullYear();
  const zodiac = getChineseZodiac(conceptionYear);

  return {
    predictedGender,
    lunarAge,
    lunarMonth,
    conceptionYear,
    chineseZodiac: zodiac.animal,
    zodiacElement: zodiac.element,
    confidence: 'entertainment',
  };
}

/**
 * Format date for display
 */
export function formatDate(date: Date, locale: 'en' | 'tr'): string {
  return date.toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get gender chart for display
 */
export function getGenderChartForAge(lunarAge: number): { [month: number]: 'boy' | 'girl' } {
  if (lunarAge >= 18 && lunarAge <= 45) {
    return genderChart[lunarAge];
  }
  return {};
}
