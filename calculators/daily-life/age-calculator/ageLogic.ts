import {
  AgeCalculatorInput,
  AgeCalculatorResult,
  AgeBreakdown,
  LifeStatistics,
  Milestone,
  Generation,
  HistoricalEvent,
  CelebrityMatch,
  ZodiacInfo,
  ChineseZodiacInfo,
} from './ageTypes';

const DAYS_OF_WEEK = {
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  tr: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
};

const ZODIAC_INFO: Record<string, ZodiacInfo> = {
  Aries: {
    sign: 'Aries',
    dateRange: 'Mar 21 - Apr 19',
    element: { en: 'Fire', tr: 'Ateş' },
    traits: {
      en: ['Courageous', 'Confident', 'Enthusiastic', 'Impulsive'],
      tr: ['Cesur', 'Kendine Güvenen', 'Heyecanlı', 'Düşünmeden Hareket Eden'],
    },
    luckyNumbers: [1, 9, 19, 22],
    compatibleSigns: ['Leo', 'Sagittarius', 'Gemini'],
  },
  Taurus: {
    sign: 'Taurus',
    dateRange: 'Apr 20 - May 20',
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Reliable', 'Patient', 'Devoted', 'Stubborn'],
      tr: ['Güvenilir', 'Sabırlı', 'Bağlı', 'İnatçı'],
    },
    luckyNumbers: [2, 6, 9, 12],
    compatibleSigns: ['Virgo', 'Capricorn', 'Cancer'],
  },
  Gemini: {
    sign: 'Gemini',
    dateRange: 'May 21 - Jun 20',
    element: { en: 'Air', tr: 'Hava' },
    traits: {
      en: ['Curious', 'Adaptable', 'Expressive', 'Indecisive'],
      tr: ['Meraklı', 'Uyumlu', 'İfade Edici', 'Kararsız'],
    },
    luckyNumbers: [5, 7, 14, 23],
    compatibleSigns: ['Libra', 'Aquarius', 'Aries'],
  },
  Cancer: {
    sign: 'Cancer',
    dateRange: 'Jun 21 - Jul 22',
    element: { en: 'Water', tr: 'Su' },
    traits: {
      en: ['Intuitive', 'Emotional', 'Protective', 'Moody'],
      tr: ['Sezgisel', 'Duygusal', 'Koruyucu', 'Değişken'],
    },
    luckyNumbers: [2, 3, 15, 20],
    compatibleSigns: ['Scorpio', 'Pisces', 'Taurus'],
  },
  Leo: {
    sign: 'Leo',
    dateRange: 'Jul 23 - Aug 22',
    element: { en: 'Fire', tr: 'Ateş' },
    traits: {
      en: ['Creative', 'Passionate', 'Generous', 'Arrogant'],
      tr: ['Yaratıcı', 'Tutkulu', 'Cömert', 'Kibirli'],
    },
    luckyNumbers: [1, 3, 10, 19],
    compatibleSigns: ['Aries', 'Sagittarius', 'Gemini'],
  },
  Virgo: {
    sign: 'Virgo',
    dateRange: 'Aug 23 - Sep 22',
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Analytical', 'Practical', 'Hardworking', 'Overthinking'],
      tr: ['Analitik', 'Pratik', 'Çalışkan', 'Aşırı Düşünen'],
    },
    luckyNumbers: [5, 14, 15, 23],
    compatibleSigns: ['Taurus', 'Capricorn', 'Cancer'],
  },
  Libra: {
    sign: 'Libra',
    dateRange: 'Sep 23 - Oct 22',
    element: { en: 'Air', tr: 'Hava' },
    traits: {
      en: ['Diplomatic', 'Fair', 'Social', 'Indecisive'],
      tr: ['Diplomatik', 'Adil', 'Sosyal', 'Kararsız'],
    },
    luckyNumbers: [4, 6, 13, 15],
    compatibleSigns: ['Gemini', 'Aquarius', 'Leo'],
  },
  Scorpio: {
    sign: 'Scorpio',
    dateRange: 'Oct 23 - Nov 21',
    element: { en: 'Water', tr: 'Su' },
    traits: {
      en: ['Passionate', 'Resourceful', 'Brave', 'Jealous'],
      tr: ['Tutkulu', 'Becerikli', 'Cesur', 'Kıskanç'],
    },
    luckyNumbers: [8, 11, 18, 22],
    compatibleSigns: ['Cancer', 'Pisces', 'Virgo'],
  },
  Sagittarius: {
    sign: 'Sagittarius',
    dateRange: 'Nov 22 - Dec 21',
    element: { en: 'Fire', tr: 'Ateş' },
    traits: {
      en: ['Optimistic', 'Independent', 'Adventurous', 'Tactless'],
      tr: ['İyimser', 'Bağımsız', 'Maceracı', 'Düşüncesiz'],
    },
    luckyNumbers: [3, 7, 9, 12],
    compatibleSigns: ['Aries', 'Leo', 'Libra'],
  },
  Capricorn: {
    sign: 'Capricorn',
    dateRange: 'Dec 22 - Jan 19',
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Disciplined', 'Responsible', 'Ambitious', 'Pessimistic'],
      tr: ['Disiplinli', 'Sorumlu', 'Hırslı', 'Karamsar'],
    },
    luckyNumbers: [4, 8, 13, 22],
    compatibleSigns: ['Taurus', 'Virgo', 'Scorpio'],
  },
  Aquarius: {
    sign: 'Aquarius',
    dateRange: 'Jan 20 - Feb 18',
    element: { en: 'Air', tr: 'Hava' },
    traits: {
      en: ['Progressive', 'Original', 'Independent', 'Aloof'],
      tr: ['İlerici', 'Özgün', 'Bağımsız', 'Mesafeli'],
    },
    luckyNumbers: [4, 7, 11, 22],
    compatibleSigns: ['Gemini', 'Libra', 'Sagittarius'],
  },
  Pisces: {
    sign: 'Pisces',
    dateRange: 'Feb 19 - Mar 20',
    element: { en: 'Water', tr: 'Su' },
    traits: {
      en: ['Compassionate', 'Artistic', 'Intuitive', 'Overly Trusting'],
      tr: ['Merhametli', 'Sanatsal', 'Sezgisel', 'Aşırı Güvenen'],
    },
    luckyNumbers: [3, 9, 12, 15],
    compatibleSigns: ['Cancer', 'Scorpio', 'Capricorn'],
  },
};

const CHINESE_ZODIAC_INFO: Record<string, Omit<ChineseZodiacInfo, 'animal'>> = {
  Rat: {
    element: { en: 'Water', tr: 'Su' },
    traits: {
      en: ['Intelligent', 'Adaptable', 'Quick-witted', 'Opportunistic'],
      tr: ['Zeki', 'Uyumlu', 'Çabuk Kavrayan', 'Fırsatçı'],
    },
    luckyColors: ['Blue', 'Gold', 'Green'],
    compatibleAnimals: ['Ox', 'Dragon', 'Monkey'],
  },
  Ox: {
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Diligent', 'Dependable', 'Strong', 'Stubborn'],
      tr: ['Çalışkan', 'Güvenilir', 'Güçlü', 'İnatçı'],
    },
    luckyColors: ['White', 'Yellow', 'Green'],
    compatibleAnimals: ['Rat', 'Snake', 'Rooster'],
  },
  Tiger: {
    element: { en: 'Wood', tr: 'Ağaç' },
    traits: {
      en: ['Brave', 'Confident', 'Competitive', 'Impulsive'],
      tr: ['Cesur', 'Kendine Güvenen', 'Rekabetçi', 'Düşünmeden Hareket Eden'],
    },
    luckyColors: ['Blue', 'Gray', 'Orange'],
    compatibleAnimals: ['Horse', 'Dog', 'Pig'],
  },
  Rabbit: {
    element: { en: 'Wood', tr: 'Ağaç' },
    traits: {
      en: ['Gentle', 'Quiet', 'Elegant', 'Cautious'],
      tr: ['Nazik', 'Sessiz', 'Zarif', 'Dikkatli'],
    },
    luckyColors: ['Red', 'Pink', 'Purple'],
    compatibleAnimals: ['Goat', 'Dog', 'Pig'],
  },
  Dragon: {
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Confident', 'Intelligent', 'Enthusiastic', 'Arrogant'],
      tr: ['Kendine Güvenen', 'Zeki', 'Heyecanlı', 'Kibirli'],
    },
    luckyColors: ['Gold', 'Silver', 'White'],
    compatibleAnimals: ['Rat', 'Monkey', 'Rooster'],
  },
  Snake: {
    element: { en: 'Fire', tr: 'Ateş' },
    traits: {
      en: ['Wise', 'Enigmatic', 'Intuitive', 'Suspicious'],
      tr: ['Bilge', 'Gizemli', 'Sezgisel', 'Şüpheci'],
    },
    luckyColors: ['Black', 'Red', 'Yellow'],
    compatibleAnimals: ['Ox', 'Rooster', 'Dragon'],
  },
  Horse: {
    element: { en: 'Fire', tr: 'Ateş' },
    traits: {
      en: ['Animated', 'Active', 'Energetic', 'Impatient'],
      tr: ['Canlı', 'Aktif', 'Enerjik', 'Sabırsız'],
    },
    luckyColors: ['Yellow', 'Green', 'Purple'],
    compatibleAnimals: ['Tiger', 'Goat', 'Dog'],
  },
  Goat: {
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Calm', 'Gentle', 'Creative', 'Pessimistic'],
      tr: ['Sakin', 'Nazik', 'Yaratıcı', 'Karamsar'],
    },
    luckyColors: ['Green', 'Red', 'Purple'],
    compatibleAnimals: ['Rabbit', 'Horse', 'Pig'],
  },
  Monkey: {
    element: { en: 'Metal', tr: 'Metal' },
    traits: {
      en: ['Sharp', 'Smart', 'Curious', 'Mischievous'],
      tr: ['Keskin', 'Zeki', 'Meraklı', 'Yaramaz'],
    },
    luckyColors: ['White', 'Blue', 'Gold'],
    compatibleAnimals: ['Rat', 'Dragon', 'Snake'],
  },
  Rooster: {
    element: { en: 'Metal', tr: 'Metal' },
    traits: {
      en: ['Observant', 'Hardworking', 'Courageous', 'Vain'],
      tr: ['Gözlemci', 'Çalışkan', 'Cesur', 'Kendini Beğenmiş'],
    },
    luckyColors: ['Gold', 'Brown', 'Yellow'],
    compatibleAnimals: ['Ox', 'Snake', 'Dragon'],
  },
  Dog: {
    element: { en: 'Earth', tr: 'Toprak' },
    traits: {
      en: ['Loyal', 'Honest', 'Prudent', 'Anxious'],
      tr: ['Sadık', 'Dürüst', 'Basiretli', 'Endişeli'],
    },
    luckyColors: ['Red', 'Green', 'Purple'],
    compatibleAnimals: ['Tiger', 'Rabbit', 'Horse'],
  },
  Pig: {
    element: { en: 'Water', tr: 'Su' },
    traits: {
      en: ['Compassionate', 'Generous', 'Diligent', 'Naive'],
      tr: ['Merhametli', 'Cömert', 'Çalışkan', 'Saf'],
    },
    luckyColors: ['Yellow', 'Gray', 'Brown'],
    compatibleAnimals: ['Tiger', 'Rabbit', 'Goat'],
  },
};

const BIRTHSTONE_INFO: Record<number, { name: string; color: string; meaning: { en: string; tr: string } }> = {
  0: { name: 'Garnet', color: '#B91C1C', meaning: { en: 'Protection and strength', tr: 'Koruma ve güç' } },
  1: { name: 'Amethyst', color: '#9333EA', meaning: { en: 'Peace and clarity', tr: 'Huzur ve berraklık' } },
  2: { name: 'Aquamarine', color: '#06B6D4', meaning: { en: 'Courage and calmness', tr: 'Cesaret ve sakinlik' } },
  3: { name: 'Diamond', color: '#E5E7EB', meaning: { en: 'Eternal love and purity', tr: 'Sonsuz aşk ve saflık' } },
  4: { name: 'Emerald', color: '#10B981', meaning: { en: 'Rebirth and love', tr: 'Yeniden doğuş ve aşk' } },
  5: { name: 'Pearl', color: '#F3F4F6', meaning: { en: 'Purity and wisdom', tr: 'Saflık ve bilgelik' } },
  6: { name: 'Ruby', color: '#DC2626', meaning: { en: 'Passion and vitality', tr: 'Tutku ve canlılık' } },
  7: { name: 'Peridot', color: '#84CC16', meaning: { en: 'Good fortune and peace', tr: 'İyi şans ve barış' } },
  8: { name: 'Sapphire', color: '#2563EB', meaning: { en: 'Wisdom and nobility', tr: 'Bilgelik ve asalet' } },
  9: { name: 'Opal', color: '#F472B6', meaning: { en: 'Hope and creativity', tr: 'Umut ve yaratıcılık' } },
  10: { name: 'Topaz', color: '#EAB308', meaning: { en: 'Strength and healing', tr: 'Güç ve iyileşme' } },
  11: { name: 'Turquoise', color: '#14B8A6', meaning: { en: 'Success and fortune', tr: 'Başarı ve şans' } },
};

const ZODIAC_DATES = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];

const ZODIAC_SIGN_NAMES = [
  'Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini',
  'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
];

const CHINESE_ZODIAC_NAMES = {
  en: ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'],
  tr: ['Fare', 'Öküz', 'Kaplan', 'Tavşan', 'Ejderha', 'Yılan', 'At', 'Keçi', 'Maymun', 'Horoz', 'Köpek', 'Domuz'],
};

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getZodiacSignInfo(month: number, day: number): ZodiacInfo {
  const signName = day < ZODIAC_DATES[month] ? ZODIAC_SIGN_NAMES[month] : ZODIAC_SIGN_NAMES[month + 1];
  return ZODIAC_INFO[signName];
}

function getChineseZodiacInfo(year: number, locale: 'en' | 'tr'): ChineseZodiacInfo {
  const animalIndex = (year - 4) % 12;
  const animalName = CHINESE_ZODIAC_NAMES.en[animalIndex];
  const info = CHINESE_ZODIAC_INFO[animalName];

  return {
    animal: CHINESE_ZODIAC_NAMES[locale][animalIndex],
    ...info,
  };
}

function calculateAgeBreakdown(birthDate: Date, targetDate: Date): AgeBreakdown {
  let years = targetDate.getFullYear() - birthDate.getFullYear();
  let months = targetDate.getMonth() - birthDate.getMonth();
  let days = targetDate.getDate() - birthDate.getDate();
  let hours = targetDate.getHours() - birthDate.getHours();
  let minutes = targetDate.getMinutes() - birthDate.getMinutes();
  let seconds = targetDate.getSeconds() - birthDate.getSeconds();

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  if (days < 0) {
    months--;
    const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days, hours, minutes, seconds };
}

function calculateLifeStatistics(totalDays: number): LifeStatistics {
  const totalHours = totalDays * 24;
  const totalMinutes = totalHours * 60;

  return {
    totalHeartbeats: Math.floor(totalMinutes * 70), // Average 70 bpm
    totalBreaths: Math.floor(totalMinutes * 16), // Average 16 breaths per minute
    totalSleepHours: Math.floor(totalHours * 0.33), // Average 8 hours per day
    totalMeals: Math.floor(totalDays * 3), // 3 meals per day
    earthRotations: totalDays,
    earthRevolutions: Math.floor(totalDays / 365.25),
  };
}

function calculateMilestones(birthDate: Date, targetDate: Date, locale: 'en' | 'tr'): Milestone[] {
  const milestones: Milestone[] = [
    {
      name: { en: '10,000 Days Alive', tr: '10.000 Gün Yaşadı' },
      date: new Date(birthDate.getTime() + 10000 * 24 * 60 * 60 * 1000),
      daysFromNow: 0,
      achieved: false,
    },
    {
      name: { en: '20,000 Days Alive', tr: '20.000 Gün Yaşadı' },
      date: new Date(birthDate.getTime() + 20000 * 24 * 60 * 60 * 1000),
      daysFromNow: 0,
      achieved: false,
    },
    {
      name: { en: '1 Billion Seconds', tr: '1 Milyar Saniye' },
      date: new Date(birthDate.getTime() + 1000000000 * 1000),
      daysFromNow: 0,
      achieved: false,
    },
    {
      name: { en: '30,000 Days Alive', tr: '30.000 Gün Yaşadı' },
      date: new Date(birthDate.getTime() + 30000 * 24 * 60 * 60 * 1000),
      daysFromNow: 0,
      achieved: false,
    },
    {
      name: { en: '100 Years Old', tr: '100 Yaşında' },
      date: new Date(birthDate.getFullYear() + 100, birthDate.getMonth(), birthDate.getDate()),
      daysFromNow: 0,
      achieved: false,
    },
  ];

  return milestones.map(milestone => {
    const diffTime = milestone.date.getTime() - targetDate.getTime();
    const daysFromNow = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return {
      ...milestone,
      daysFromNow,
      achieved: daysFromNow <= 0,
    };
  });
}

function getGeneration(birthYear: number, locale: 'en' | 'tr'): Generation {
  if (birthYear >= 1997) {
    return {
      name: { en: 'Generation Z', tr: 'Z Kuşağı' },
      description: { en: 'Digital natives, tech-savvy, socially conscious', tr: 'Dijital yerliler, teknoloji meraklısı, sosyal bilinçli' },
      yearsRange: '1997-2012',
    };
  } else if (birthYear >= 1981) {
    return {
      name: { en: 'Millennials', tr: 'Y Kuşağı (Millennials)' },
      description: { en: 'Tech-literate, diverse, entrepreneurial', tr: 'Teknoloji okuryazarı, çeşitli, girişimci' },
      yearsRange: '1981-1996',
    };
  } else if (birthYear >= 1965) {
    return {
      name: { en: 'Generation X', tr: 'X Kuşağı' },
      description: { en: 'Independent, adaptable, pragmatic', tr: 'Bağımsız, uyumlu, pragmatik' },
      yearsRange: '1965-1980',
    };
  } else if (birthYear >= 1946) {
    return {
      name: { en: 'Baby Boomers', tr: 'Bebek Patlaması Kuşağı' },
      description: { en: 'Hardworking, competitive, goal-oriented', tr: 'Çalışkan, rekabetçi, hedef odaklı' },
      yearsRange: '1946-1964',
    };
  } else {
    return {
      name: { en: 'Silent Generation', tr: 'Sessiz Kuşak' },
      description: { en: 'Traditional, loyal, disciplined', tr: 'Geleneksel, sadık, disiplinli' },
      yearsRange: '1928-1945',
    };
  }
}

function getHistoricalEvents(birthYear: number, locale: 'en' | 'tr'): HistoricalEvent[] {
  const events: HistoricalEvent[] = [
    { event: { en: 'Moon Landing', tr: 'Ay\'a İniş' }, year: 1969, category: 'Space' },
    { event: { en: 'Fall of Berlin Wall', tr: 'Berlin Duvarı\'nın Yıkılışı' }, year: 1989, category: 'Politics' },
    { event: { en: 'Internet Goes Public', tr: 'İnternet Halka Açıldı' }, year: 1991, category: 'Technology' },
    { event: { en: 'First iPhone Released', tr: 'İlk iPhone Piyasaya Sürüldü' }, year: 2007, category: 'Technology' },
    { event: { en: 'COVID-19 Pandemic', tr: 'COVID-19 Pandemisi' }, year: 2020, category: 'Health' },
    { event: { en: 'World Trade Center Attack', tr: 'Dünya Ticaret Merkezi Saldırısı' }, year: 2001, category: 'History' },
  ];

  return events.filter(e => e.year >= birthYear).slice(0, 5);
}

function getCelebrityMatches(birthYear: number, locale: 'en' | 'tr'): CelebrityMatch[] {
  const celebrities = [
    { name: 'Elon Musk', birthYear: 1971, profession: { en: 'Entrepreneur', tr: 'Girişimci' } },
    { name: 'Taylor Swift', birthYear: 1989, profession: { en: 'Musician', tr: 'Müzisyen' } },
    { name: 'Cristiano Ronaldo', birthYear: 1985, profession: { en: 'Athlete', tr: 'Sporcu' } },
    { name: 'Emma Watson', birthYear: 1990, profession: { en: 'Actress', tr: 'Oyuncu' } },
    { name: 'Mark Zuckerberg', birthYear: 1984, profession: { en: 'Entrepreneur', tr: 'Girişimci' } },
  ];

  return celebrities
    .map(celeb => ({
      ...celeb,
      ageDifference: Math.abs(birthYear - celeb.birthYear),
    }))
    .sort((a, b) => a.ageDifference - b.ageDifference)
    .slice(0, 3);
}

export function calculateAge(input: AgeCalculatorInput, locale: 'en' | 'tr'): AgeCalculatorResult {
  const { birthDate, targetDate = new Date() } = input;

  const age = calculateAgeBreakdown(birthDate, targetDate);
  const diffTime = targetDate.getTime() - birthDate.getTime();
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = age.years * 12 + age.months;
  const totalHours = Math.floor(diffTime / (1000 * 60 * 60));
  const totalMinutes = Math.floor(diffTime / (1000 * 60));
  const totalSeconds = Math.floor(diffTime / 1000);

  const thisYear = targetDate.getFullYear();
  let nextBirthday = new Date(thisYear, birthDate.getMonth(), birthDate.getDate());
  if (nextBirthday <= targetDate) {
    nextBirthday = new Date(thisYear + 1, birthDate.getMonth(), birthDate.getDate());
  }

  const diffToBirthday = nextBirthday.getTime() - targetDate.getTime();
  const daysUntilBirthday = Math.ceil(diffToBirthday / (1000 * 60 * 60 * 24));
  const hoursUntilBirthday = Math.ceil(diffToBirthday / (1000 * 60 * 60));

  const dayOfWeek = DAYS_OF_WEEK[locale][birthDate.getDay()];
  const zodiacSign = getZodiacSignInfo(birthDate.getMonth(), birthDate.getDate());
  const chineseZodiac = getChineseZodiacInfo(birthDate.getFullYear(), locale);
  const birthstone = BIRTHSTONE_INFO[birthDate.getMonth()];
  const isLeapYearBorn = isLeapYear(birthDate.getFullYear());

  const lifeStatistics = calculateLifeStatistics(totalDays);
  const milestones = calculateMilestones(birthDate, targetDate, locale);
  const generation = getGeneration(birthDate.getFullYear(), locale);
  const historicalEvents = getHistoricalEvents(birthDate.getFullYear(), locale);
  const celebrityMatches = getCelebrityMatches(birthDate.getFullYear(), locale);

  const averageLifeExpectancy = 80;
  const lifePercentage = Math.min(100, Math.round((age.years / averageLifeExpectancy) * 100));

  const retirementAge = 65;
  const retirementCountdown = calculateAgeBreakdown(
    targetDate,
    new Date(birthDate.getFullYear() + retirementAge, birthDate.getMonth(), birthDate.getDate())
  );

  return {
    age,
    totalDays,
    totalWeeks,
    totalMonths,
    totalHours,
    totalMinutes,
    totalSeconds,
    nextBirthday,
    daysUntilBirthday,
    hoursUntilBirthday,
    dayOfBirth: dayOfWeek,
    dayOfWeek: { en: DAYS_OF_WEEK.en[birthDate.getDay()], tr: DAYS_OF_WEEK.tr[birthDate.getDay()] },
    zodiacSign,
    chineseZodiac,
    birthstone,
    isLeapYearBorn,
    lifeStatistics,
    milestones,
    generation,
    historicalEvents,
    celebrityMatches,
    lifePercentage,
    retirementCountdown,
  };
}

export const ageRecommendations = {
  en: {
    title: 'Understanding Your Age',
    description: 'Age is just a number, but it tells many fascinating stories about your journey through life.',
    tips: [
      'Celebrate your milestones - they\'re markers of your unique journey',
      'Your generation shares common experiences that shape your worldview',
      'Zodiac signs have been used for thousands of years to understand personality',
      'Every day alive is a gift - make the most of your time',
      'Age brings wisdom - embrace each year as an opportunity to grow',
    ],
  },
  tr: {
    title: 'Yaşınızı Anlamak',
    description: 'Yaş sadece bir sayıdır, ancak hayat yolculuğunuz hakkında birçok büyüleyici hikaye anlatır.',
    tips: [
      'Kilometre taşlarınızı kutlayın - benzersiz yolculuğunuzun işaretleridir',
      'Kuşağınız dünya görüşünüzü şekillendiren ortak deneyimleri paylaşır',
      'Burç işaretleri binlerce yıldır kişiliği anlamak için kullanılmaktadır',
      'Yaşanan her gün bir hediyedir - zamanınızı en iyi şekilde değerlendirin',
      'Yaş bilgelik getirir - her yılı büyümek için bir fırsat olarak kucaklayın',
    ],
  },
};
