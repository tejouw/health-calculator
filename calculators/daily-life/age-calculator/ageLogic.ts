import { AgeCalculatorInput, AgeCalculatorResult, AgeBreakdown } from './ageTypes';

const DAYS_OF_WEEK = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  tr: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
};

const ZODIAC_SIGNS = {
  en: [
    'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
    'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
  ],
  tr: [
    'Oğlak', 'Kova', 'Balık', 'Koç', 'Boğa', 'İkizler',
    'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak'
  ],
};

const ZODIAC_DATES = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];

const CHINESE_ZODIAC = {
  en: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
  tr: ['Fare', 'Öküz', 'Kaplan', 'Tavşan', 'Ejderha', 'Yılan', 'At', 'Keçi', 'Maymun', 'Horoz', 'Köpek', 'Domuz'],
};

const BIRTHSTONES = {
  en: ['Garnet', 'Amethyst', 'Aquamarine', 'Diamond', 'Emerald', 'Pearl', 'Ruby', 'Peridot', 'Sapphire', 'Opal', 'Topaz', 'Turquoise'],
  tr: ['Granat', 'Ametist', 'Akuamarin', 'Elmas', 'Zümrüt', 'İnci', 'Yakut', 'Peridot', 'Safir', 'Opal', 'Topaz', 'Turkuaz'],
};

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getZodiacSign(month: number, day: number, locale: 'en' | 'tr'): string {
  const signs = ZODIAC_SIGNS[locale];
  return day < ZODIAC_DATES[month] ? signs[month] : signs[month + 1];
}

function getChineseZodiac(year: number, locale: 'en' | 'tr'): string {
  const animals = CHINESE_ZODIAC[locale];
  return animals[(year - 4) % 12];
}

function getBirthstone(month: number, locale: 'en' | 'tr'): string {
  return BIRTHSTONES[locale][month];
}

function calculateAgeBreakdown(birthDate: Date, targetDate: Date): AgeBreakdown {
  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function getTotalDays(birthDate: Date, targetDate: Date): number {
  const diffTime = targetDate.getTime() - birthDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function getNextBirthday(birthDate: Date, targetDate: Date): Date {
  const thisYear = targetDate.getFullYear();
  let nextBirthday = new Date(thisYear, birthDate.getMonth(), birthDate.getDate());

  if (nextBirthday <= targetDate) {
    nextBirthday = new Date(thisYear + 1, birthDate.getMonth(), birthDate.getDate());
  }

  return nextBirthday;
}

function getDaysUntilBirthday(birthDate: Date, targetDate: Date): number {
  const nextBirthday = getNextBirthday(birthDate, targetDate);
  const diffTime = nextBirthday.getTime() - targetDate.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function calculateAge(input: AgeCalculatorInput, locale: 'en' | 'tr'): AgeCalculatorResult {
  const { birthDate, targetDate = new Date() } = input;

  const age = calculateAgeBreakdown(birthDate, targetDate);
  const totalDays = getTotalDays(birthDate, targetDate);
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = age.years * 12 + age.months;

  const nextBirthday = getNextBirthday(birthDate, targetDate);
  const daysUntilBirthday = getDaysUntilBirthday(birthDate, targetDate);

  const dayOfBirth = DAYS_OF_WEEK[locale][birthDate.getDay()];
  const zodiacSign = getZodiacSign(birthDate.getMonth(), birthDate.getDate(), locale);
  const chineseZodiac = getChineseZodiac(birthDate.getFullYear(), locale);
  const birthstone = getBirthstone(birthDate.getMonth(), locale);
  const isLeapYearBorn = isLeapYear(birthDate.getFullYear());

  return {
    age,
    totalDays,
    totalWeeks,
    totalMonths,
    nextBirthday,
    daysUntilBirthday,
    dayOfBirth,
    zodiacSign,
    chineseZodiac,
    birthstone,
    isLeapYearBorn,
  };
}

export const ageRecommendations = {
  en: {
    title: 'Fun Facts About Your Age',
    description: 'Here are some interesting details about your birth date and age.',
    tips: [
      'Your zodiac sign is determined by your birth date',
      'The Chinese zodiac follows a 12-year cycle',
      'Each month has a birthstone associated with it',
      'Leap years occur every 4 years (with some exceptions)',
      'The day you were born can reveal interesting personality traits',
    ],
  },
  tr: {
    title: 'Yaşınız Hakkında Eğlenceli Bilgiler',
    description: 'Doğum tarihiniz ve yaşınız hakkında ilginç detaylar.',
    tips: [
      'Burç işaretiniz doğum tarihinize göre belirlenir',
      'Çin burçları 12 yıllık döngüler halinde ilerler',
      'Her ayın kendine özel bir doğum taşı vardır',
      'Artık yıllar her 4 yılda bir gelir (bazı istisnalar hariç)',
      'Doğduğunuz gün ilginç kişilik özellikleri ortaya çıkarabilir',
    ],
  },
};
