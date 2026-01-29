import {
  PregnancyWeekInput,
  PregnancyWeekResult,
  BabySizeInfo,
  WeeklyMilestone,
  TrimeststresInfo,
} from './pregnancyWeekTypes';

const STANDARD_PREGNANCY_DAYS = 280; // 40 weeks
const OVULATION_DAY = 14; // Typically occurs on day 14 of cycle

// Baby size milestones from medical sources
const babySizeMilestones: Record<number, BabySizeInfo> = {
  8: {
    week: 8,
    length: { cm: 1.6, inches: 0.63 },
    weight: { grams: 1, ounces: 0.04 },
    comparison: { en: 'Raspberry', tr: 'Frambuaz' },
  },
  10: {
    week: 10,
    length: { cm: 3.1, inches: 1.22 },
    weight: { grams: 4, ounces: 0.14 },
    comparison: { en: 'Prune', tr: 'Kuru Üzüm' },
  },
  12: {
    week: 12,
    length: { cm: 5.4, inches: 2.13 },
    weight: { grams: 14, ounces: 0.49 },
    comparison: { en: 'Plum', tr: 'Erik' },
  },
  16: {
    week: 16,
    length: { cm: 11.6, inches: 4.57 },
    weight: { grams: 100, ounces: 3.53 },
    comparison: { en: 'Avocado', tr: 'Avokado' },
  },
  20: {
    week: 20,
    length: { cm: 16.4, inches: 6.46 },
    weight: { grams: 300, ounces: 10.58 },
    comparison: { en: 'Banana', tr: 'Muz' },
  },
  24: {
    week: 24,
    length: { cm: 21, inches: 8.27 },
    weight: { grams: 600, ounces: 21.16 },
    comparison: { en: 'Corn', tr: 'Mısır' },
  },
  28: {
    week: 28,
    length: { cm: 25, inches: 9.84 },
    weight: { grams: 1000, ounces: 35.27 },
    comparison: { en: 'Eggplant', tr: 'Patlıcan' },
  },
  32: {
    week: 32,
    length: { cm: 29.3, inches: 11.54 },
    weight: { grams: 1700, ounces: 59.96 },
    comparison: { en: 'Squash', tr: 'Kabak' },
  },
  36: {
    week: 36,
    length: { cm: 33, inches: 12.99 },
    weight: { grams: 2500, ounces: 88.19 },
    comparison: { en: 'Honeydew', tr: 'Kavun' },
  },
  40: {
    week: 40,
    length: { cm: 36, inches: 14.17 },
    weight: { grams: 3500, ounces: 123.46 },
    comparison: { en: 'Watermelon', tr: 'Karpuz' },
  },
};

export const trimesterInfo: Record<number, TrimeststresInfo> = {
  1: {
    number: 1,
    name: { en: 'First Trimester', tr: 'Birinci Dönem' },
    weeks: { start: 1, end: 13 },
    description: {
      en: 'The foundation of pregnancy. Rapid cell division and development begins. Most organs are formed during this critical period.',
      tr: 'Hamileliğin temeli. Hızlı hücre bölünmesi ve gelişim başlar. Bu kritik dönemde çoğu organ oluşur.',
    },
    keyDevelopments: {
      en: [
        'Heart starts beating',
        'Brain and nervous system develop',
        'Limbs begin to form',
        'Facial features emerge',
        'Organs start developing',
        'Neural tube closes',
        'Placenta and umbilical cord form',
      ],
      tr: [
        'Kalp çarpmaya başlar',
        'Beyin ve sinir sistemi gelişir',
        'Ekstremiteler oluşmaya başlar',
        'Yüz özellikleri ortaya çıkar',
        'Organlar gelişmeye başlar',
        'Nöral tüp kapanır',
        'Plasenta ve göbek bağı oluşur',
      ],
    },
  },
  2: {
    number: 2,
    name: { en: 'Second Trimester', tr: 'İkinci Dönem' },
    weeks: { start: 14, end: 26 },
    description: {
      en: 'The "honeymoon" period. Baby becomes more active. Fetal movements are felt. Bones ossify. Most pregnancy discomforts stabilize.',
      tr: '"Balayı" dönemi. Bebeğin hareketi artar. Fetüs hareketleri hissedilir. Kemikler sertleşir. Hamilelik rahatsızlıklarının çoğu stabilize olur.',
    },
    keyDevelopments: {
      en: [
        'Fetal movements felt by mother',
        'Bones and muscles strengthen',
        'Baby responds to sounds',
        'Fingerprints form',
        'Hair and eyebrows grow',
        'Baby can now swallow',
        'Eyes can open and close',
        'Fat deposits form under skin',
      ],
      tr: [
        'Anne tarafından fetüs hareketleri hissedilir',
        'Kemikler ve kaslar güçlendirilir',
        'Bebeğin sesler cevapları verir',
        'Parmak izleri oluşur',
        'Saç ve kaşlar büyür',
        'Bebeğin artık yutmak',
        'Gözler açılıp kapanabilir',
        'Cilt altında yağ birikintileri oluşur',
      ],
    },
  },
  3: {
    number: 3,
    name: { en: 'Third Trimester', tr: 'Üçüncü Dönem' },
    weeks: { start: 27, end: 40 },
    description: {
      en: 'The final stretch. Baby gains weight rapidly. Lungs mature. Baby positions for delivery. Mother prepares for labor.',
      tr: 'Son çizim. Bebeğin ağırlığı hızla artar. Ciğerler olgunlaşır. Bebeğin doğum pozisyonu. Anne doğuma hazırlanır.',
    },
    keyDevelopments: {
      en: [
        'Baby gains significant weight',
        'Lungs mature and prepare for breathing',
        'Brain continues rapid development',
        'Baby turns head-down for delivery',
        'Antibodies transferred to baby',
        'Bones harden (except skull)',
        'Eyes fully developed',
        'Baby establishes sleep-wake patterns',
      ],
      tr: [
        'Bebeğin önemli miktarda kilo alır',
        'Ciğerler olgunlaşır ve nefes almaya hazırlanır',
        'Beyin hızlı gelişmeye devam eder',
        'Bebeğin doğum için baş aşağı dönmesi',
        'Antikörler bebeğe aktarılır',
        'Kemikler sertleşir (kafatası hariç)',
        'Gözler tamamen gelişmiştir',
        'Bebeğin uyku-uyanıklık düzeni oluşur',
      ],
    },
  },
};

export function calculatePregnancyWeek(input: PregnancyWeekInput): PregnancyWeekResult {
  const cycleLengthDays = input.cycleLengthDays || 28;
  const inputDate = new Date(input.date);
  inputDate.setHours(0, 0, 0, 0);

  let lastMenstrualPeriodDate: Date;

  if (input.calculationMethod === 'lmp') {
    lastMenstrualPeriodDate = new Date(inputDate);
  } else if (input.calculationMethod === 'conception') {
    // Conception typically occurs around ovulation (day 14 of cycle)
    lastMenstrualPeriodDate = new Date(inputDate);
    lastMenstrualPeriodDate.setDate(
      lastMenstrualPeriodDate.getDate() - OVULATION_DAY
    );
  } else if (input.calculationMethod === 'dueDate') {
    // Due date is 280 days from LMP
    lastMenstrualPeriodDate = new Date(inputDate);
    lastMenstrualPeriodDate.setDate(
      lastMenstrualPeriodDate.getDate() - STANDARD_PREGNANCY_DAYS
    );
  } else {
    throw new Error('Invalid calculation method');
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calculate days since LMP
  const timeDiff = today.getTime() - lastMenstrualPeriodDate.getTime();
  const daysSinceLMP = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Calculate current week and day
  const currentWeek = Math.floor(daysSinceLMP / 7) + 1;
  const currentDay = (daysSinceLMP % 7) + 1;
  const totalDaysPregnant = daysSinceLMP;

  // Calculate estimated due date
  const estimatedDueDate = new Date(lastMenstrualPeriodDate);
  estimatedDueDate.setDate(
    estimatedDueDate.getDate() + STANDARD_PREGNANCY_DAYS
  );

  // Calculate days until due date
  const daysUntilDue = Math.floor(
    (estimatedDueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Determine trimester
  let trimester = 1;
  if (currentWeek > 13 && currentWeek <= 26) {
    trimester = 2;
  } else if (currentWeek > 26) {
    trimester = 3;
  }

  // Determine baby size
  const babySize = getBabySizeForWeek(currentWeek);
  const babyComparison = getBabyComparisonForWeek(currentWeek);

  // Get current and next week milestones
  const currentMilestones = getWeeklyMilestones(currentWeek, 'current');
  const nextMilestones = getWeeklyMilestones(currentWeek + 1, 'next');
  const maternalChanges = getMaternalChanges(currentWeek);

  // Calculate percentage complete
  const percentageComplete = Math.round((daysSinceLMP / 280) * 100);

  return {
    currentWeek: Math.min(currentWeek, 42), // Cap at 42 weeks
    currentDay: Math.min(currentDay, 7),
    totalDaysPregnant,
    daysUntilDueDate: Math.max(daysUntilDue, 0),
    estimatedDueDate: estimatedDueDate.toISOString().split('T')[0],
    trimester,
    babyLength: babySize.length,
    babyWeight: babySize.weight,
    babyComparison,
    percentageComplete: Math.min(percentageComplete, 100),
    currentMilestones,
    nextMilestones,
    maternalChanges,
  };
}

function getBabySizeForWeek(week: number): {
  length: { cm: number; inches: number };
  weight: { grams: number; ounces: number };
} {
  const keyWeeks = Object.keys(babySizeMilestones)
    .map((w) => parseInt(w))
    .sort((a, b) => a - b);

  if (week <= keyWeeks[0]) {
    const milestone = babySizeMilestones[keyWeeks[0]];
    return {
      length: milestone.length,
      weight: milestone.weight,
    };
  }

  if (week >= keyWeeks[keyWeeks.length - 1]) {
    const milestone = babySizeMilestones[keyWeeks[keyWeeks.length - 1]];
    return {
      length: milestone.length,
      weight: milestone.weight,
    };
  }

  let prevMilestone = babySizeMilestones[keyWeeks[0]];
  let nextMilestone = babySizeMilestones[keyWeeks[0]];

  for (let i = 0; i < keyWeeks.length - 1; i++) {
    if (week >= keyWeeks[i] && week < keyWeeks[i + 1]) {
      prevMilestone = babySizeMilestones[keyWeeks[i]];
      nextMilestone = babySizeMilestones[keyWeeks[i + 1]];
      break;
    }
  }

  const weeksDiff = nextMilestone.week - prevMilestone.week;
  const weeksProgress = week - prevMilestone.week;
  const progress = weeksProgress / weeksDiff;

  return {
    length: {
      cm: prevMilestone.length.cm + (nextMilestone.length.cm - prevMilestone.length.cm) * progress,
      inches:
        prevMilestone.length.inches +
        (nextMilestone.length.inches - prevMilestone.length.inches) * progress,
    },
    weight: {
      grams:
        prevMilestone.weight.grams +
        (nextMilestone.weight.grams - prevMilestone.weight.grams) * progress,
      ounces:
        prevMilestone.weight.ounces +
        (nextMilestone.weight.ounces - prevMilestone.weight.ounces) * progress,
    },
  };
}

function getBabyComparisonForWeek(week: number): {
  en: string;
  tr: string;
} {
  const comparisons: Record<
    number,
    { en: string; tr: string }
  > = {
    8: { en: 'Raspberry', tr: 'Frambuaz' },
    9: { en: 'Grape', tr: 'Üzüm' },
    10: { en: 'Prune', tr: 'Kuru Üzüm' },
    11: { en: 'Fig', tr: 'İncir' },
    12: { en: 'Plum', tr: 'Erik' },
    13: { en: 'Peach', tr: 'Şeftali' },
    14: { en: 'Lemon', tr: 'Limon' },
    15: { en: 'Navel Orange', tr: 'Navel Portakalı' },
    16: { en: 'Avocado', tr: 'Avokado' },
    17: { en: 'Turnip', tr: 'Şalgam' },
    18: { en: 'Sweet Potato', tr: 'Tatlı Patates' },
    19: { en: 'Mango', tr: 'Mango' },
    20: { en: 'Banana', tr: 'Muz' },
    21: { en: 'Carrot', tr: 'Havuç' },
    22: { en: 'Papaya', tr: 'Papaya' },
    23: { en: 'Large Mango', tr: 'Büyük Mango' },
    24: { en: 'Corn', tr: 'Mısır' },
    25: { en: 'Cauliflower', tr: 'Karnabahar' },
    26: { en: 'Zucchini', tr: 'Kabak' },
    27: { en: 'Rutabaga', tr: 'Şalgam' },
    28: { en: 'Eggplant', tr: 'Patlıcan' },
    29: { en: 'Butternut Squash', tr: 'Bal Kabağı' },
    30: { en: 'Cabbage', tr: 'Lahana' },
    31: { en: 'Coconut', tr: 'Hindistan Cevizi' },
    32: { en: 'Squash', tr: 'Kabak' },
    33: { en: 'Pineapple', tr: 'Ananas' },
    34: { en: 'Cantaloupe', tr: 'Kavun' },
    35: { en: 'Honeydew Melon', tr: 'Honey Kavun' },
    36: { en: 'Honeydew', tr: 'Kavun' },
    37: { en: 'Swiss Chard', tr: 'İsviçre Mangalı' },
    38: { en: 'Leek', tr: 'Pırasa' },
    39: { en: 'Small Pumpkin', tr: 'Küçük Balkabağı' },
    40: { en: 'Watermelon', tr: 'Karpuz' },
    41: { en: 'Large Watermelon', tr: 'Büyük Karpuz' },
    42: { en: 'Extra Large Watermelon', tr: 'Ekstra Büyük Karpuz' },
  };

  return comparisons[week] || { en: 'Baby', tr: 'Bebek' };
}

function getWeeklyMilestones(
  week: number,
  type: 'current' | 'next'
): { en: string[]; tr: string[] } {
  const weeklyMilestones: Record<number, { en: string[]; tr: string[] }> = {
    5: {
      en: ['Gestational sac visible on ultrasound', 'Implantation process begins'],
      tr: ['Ultrason da gestasyonel torba görülür', 'İmplantasyon süreci başlar'],
    },
    6: {
      en: ['Yolk sac becomes visible', 'Early cardiac activity may be detected'],
      tr: ['Sarı kese görünür hale gelir', 'Erken kardiyak aktivite tespit edilebilir'],
    },
    8: {
      en: ['Heart officially starts beating', 'Neural tube closes', 'Limb buds appear'],
      tr: ['Kalp resmi olarak çarpmaya başlar', 'Nöral tüp kapanır', 'Ekstremite tomurcukları görülür'],
    },
    10: {
      en: ['Webbing between fingers begins to disappear', 'Tooth buds begin to develop', 'Brain divides into sections'],
      tr: ['Parmaklarındaki web kaybolmaya başlar', 'Diş tomurcukları gelişmeye başlar', 'Beyin bölümlere ayrılır'],
    },
    12: {
      en: ['Baby can suck thumb', 'Organs in place but still developing', 'Gender organs developing'],
      tr: ['Bebeğin başparmağını emebilir', 'Organlar yerinde ancak gelişiyor', 'Cinsel organlar gelişiyor'],
    },
    14: {
      en: ['Facial features more defined', 'Baby starts making movements', 'Ears are moving into final position'],
      tr: ['Yüz özellikleri daha belirgin', 'Bebeğin hareket etmeye başlaması', 'Kulaklar son pozisyona taşınıyor'],
    },
    16: {
      en: ['Baby can move all joints', 'Fingernails forming', 'Muscles becoming stronger'],
      tr: ['Bebeğin tüm eklemleri hareket ettirebilir', 'Tırnak oluşuyor', 'Kaslar güçleniyor'],
    },
    20: {
      en: ['Mother may feel first movements (quickening)', 'Baby swallows amniotic fluid', 'Vernix caseosa protects skin'],
      tr: ['Anne ilk hareketi hissedebilir (quickening)', 'Bebeğin amniyotik sıvı yutması', 'Vernix caseosa cildi korur'],
    },
    24: {
      en: ['Lungs begin producing surfactant', 'Baby\'s footprints and fingerprints are unique', 'Eyes can open'],
      tr: ['Ciğerler surfaktan üretmeye başlar', 'Bebeğin ayak ve parmak izleri benzersizdir', 'Gözler açılabilir'],
    },
    28: {
      en: ['Baby can recognize mother\'s voice', 'Eyes can detect light', 'Brain wave activity similar to newborn'],
      tr: ['Bebeğin annesinin sesini tanıyabilir', 'Gözler ışığı algılayabilir', 'Beyin dalgası aktivitesi yenidoğana benzer'],
    },
    32: {
      en: ['Baby gains about 6 ounces per week', 'Baby positions head-down more often', 'Toenails are fully formed'],
      tr: ['Bebeğin haftada yaklaşık 170 gram kilo alması', 'Bebeğin daha sık baş aşağı pozisyon alması', 'Ayak tırnakları tamamen oluşmuştur'],
    },
    36: {
      en: ['Baby\'s position usually fixed head-down', 'Lungs nearly mature', 'Baby may be 6+ pounds'],
      tr: ['Bebeğin pozisyonu genellikle baş aşağı sabitlenir', 'Ciğerler neredeyse olgun', 'Bebeğin 3+ kg olması'],
    },
    40: {
      en: ['Baby fully developed', 'Ready for birth', 'Lungs fully mature'],
      tr: ['Bebeğin tam gelişmiş olması', 'Doğuma hazır', 'Ciğerler tamamen olgun'],
    },
  };

  return weeklyMilestones[week] || { en: ['Baby continues to develop'], tr: ['Bebeğin gelişmeye devam etmesi'] };
}

function getMaternalChanges(week: number): { en: string[]; tr: string[] } {
  if (week <= 13) {
    return {
      en: [
        'Morning sickness may occur',
        'Breast tenderness and swelling',
        'Increased tiredness and fatigue',
        'Frequent urination',
        'Food cravings and aversions',
        'Mood changes',
      ],
      tr: [
        'Sabah bulantısı oluşabilir',
        'Meme hassasiyeti ve şişme',
        'Artan yorgunluk ve bitkinlik',
        'Sık idrara çıkma',
        'Yiyecek istekleri ve tiksintileri',
        'Ruh halinde değişiklikler',
      ],
    };
  } else if (week <= 26) {
    return {
      en: [
        'Morning sickness may subside',
        'Increased appetite',
        'Visible baby bump',
        'Swelling in feet and ankles',
        'Darkening of skin (linea nigra)',
        'Increased energy levels',
        'Braxton Hicks contractions may start',
      ],
      tr: [
        'Sabah bulantısı azalabilir',
        'Artan iştah',
        'Görünür bebek çıkıntısı',
        'Ayakta ve ayakbileğinde şişme',
        'Cildin koyulaşması (linea nigra)',
        'Artan enerji seviyeleri',
        'Braxton Hicks kasılmaları başlayabilir',
      ],
    };
  } else {
    return {
      en: [
        'Increased shortness of breath',
        'Back and pelvic pain',
        'Frequent urination',
        'Swelling continues',
        'Sleep becomes difficult',
        'Braxton Hicks contractions increase',
        'Preparing for labor',
      ],
      tr: [
        'Artan nefes darlığı',
        'Sırt ve pelvik ağrı',
        'Sık idrara çıkma',
        'Şişme devam eder',
        'Uyku zorlaşır',
        'Braxton Hicks kasılmaları artar',
        'Doğuma hazırlanma',
      ],
    };
  }
}
