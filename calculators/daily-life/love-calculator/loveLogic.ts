import {
  LoveCalculatorInput,
  LoveCalculatorResult,
  CompatibilityBreakdown,
  FlamesResult,
  RelationshipPrediction,
  FamousCoupleMatch,
} from './loveTypes';

const LOVE_MESSAGES: Record<string, { en: string; tr: string }> = {
  perfect: {
    en: 'A perfect match made in heaven! Your connection is extraordinary.',
    tr: 'Cennette yapılmış mükemmel bir eşleşme! Bağlantınız olağanüstü.',
  },
  excellent: {
    en: 'Excellent compatibility! You two have amazing chemistry together.',
    tr: 'Mükemmel uyum! İkiniz birlikte harika bir kimyaya sahipsiniz.',
  },
  great: {
    en: 'Great potential for a wonderful relationship! The stars align for you.',
    tr: 'Harika bir ilişki için büyük potansiyel! Yıldızlar sizin için hizalanıyor.',
  },
  good: {
    en: 'Good compatibility! With effort and understanding, you can build something beautiful.',
    tr: 'İyi uyum! Çaba ve anlayışla güzel bir şeyler inşa edebilirsiniz.',
  },
  moderate: {
    en: 'Moderate match. Every relationship needs work - communication is key!',
    tr: 'Orta düzey eşleşme. Her ilişki çaba gerektirir - iletişim anahtardır!',
  },
  low: {
    en: 'Opposites can attract! Sometimes the most unexpected pairs create the best stories.',
    tr: 'Zıtlar birbirini çekebilir! Bazen en beklenmedik çiftler en güzel hikayeleri yaratır.',
  },
};

const LOVE_TIPS: Record<string, { en: string; tr: string }> = {
  perfect: {
    en: 'Cherish this connection and never take each other for granted.',
    tr: 'Bu bağı değerli tutun ve birbirinizi asla hafife almayın.',
  },
  excellent: {
    en: 'Keep the spark alive with surprise dates and heartfelt conversations.',
    tr: 'Sürpriz buluşmalar ve içten sohbetlerle kıvılcımı canlı tutun.',
  },
  great: {
    en: 'Focus on shared interests and create lasting memories together.',
    tr: 'Ortak ilgi alanlarına odaklanın ve birlikte kalıcı anılar yaratın.',
  },
  good: {
    en: 'Be patient and understanding. Great relationships are built over time.',
    tr: 'Sabırlı ve anlayışlı olun. Harika ilişkiler zamanla inşa edilir.',
  },
  moderate: {
    en: 'Work on communication and try to understand each other\'s perspectives.',
    tr: 'İletişim üzerinde çalışın ve birbirinizin bakış açılarını anlamaya çalışın.',
  },
  low: {
    en: 'Remember, compatibility is just one factor. True love conquers all!',
    tr: 'Unutmayın, uyum sadece bir faktördür. Gerçek aşk her şeyi yener!',
  },
};

const EMOJIS: Record<string, string> = {
  perfect: '💕',
  excellent: '❤️',
  great: '💖',
  good: '💗',
  moderate: '💛',
  low: '💙',
};

function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9]/g, ''); // Keep only alphanumeric
}

function calculateLoveScore(name1: string, name2: string): number {
  const normalized1 = normalizeString(name1);
  const normalized2 = normalizeString(name2);

  if (!normalized1 || !normalized2) {
    return 0;
  }

  // Combine names and create a consistent hash
  const combined = [normalized1, normalized2].sort().join('');

  // Calculate a deterministic "love score" based on the combined string
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  // Use the LOVE method (counting letters in "LOVES")
  const lovesWord = 'loves';
  const fullString = (normalized1 + lovesWord + normalized2).toLowerCase();

  let loveCount = 0;
  for (const char of fullString) {
    if (lovesWord.includes(char)) {
      loveCount += char.charCodeAt(0);
    }
  }

  // Combine hash and love count for final score
  const combinedScore = Math.abs(hash) + loveCount;

  // Generate a percentage between 1-99, weighted towards middle-high values
  // This makes results more interesting and shareable
  const basePercentage = (combinedScore % 89) + 10; // 10-98 base

  // Add some variation based on name lengths
  const lengthBonus = ((normalized1.length + normalized2.length) % 10);

  // Calculate final percentage
  let percentage = basePercentage + lengthBonus;

  // Ensure it's within 1-99 range (never 0 or 100 for realism)
  percentage = Math.max(1, Math.min(99, percentage));

  // Special cases for same names or very short names
  if (normalized1 === normalized2) {
    percentage = 100; // Self-love is perfect!
  }

  return percentage;
}

function getRating(percentage: number): 'perfect' | 'excellent' | 'great' | 'good' | 'moderate' | 'low' {
  if (percentage >= 95) return 'perfect';
  if (percentage >= 80) return 'excellent';
  if (percentage >= 65) return 'great';
  if (percentage >= 50) return 'good';
  if (percentage >= 35) return 'moderate';
  return 'low';
}

export function calculateLove(input: LoveCalculatorInput): LoveCalculatorResult {
  const { name1, name2 } = input;

  const percentage = calculateLoveScore(name1, name2);
  const rating = getRating(percentage);
  const breakdown = calculateBreakdown(percentage, name1, name2);
  const flames = calculateFLAMES(name1, name2);
  const prediction = generatePredictions(name1, name2);
  const famousCouple = matchFamousCouple(percentage, name1, name2);
  const { strengths, challenges } = generateStrengthsAndChallenges(percentage, breakdown);

  return {
    percentage,
    rating,
    message: LOVE_MESSAGES[rating],
    tip: LOVE_TIPS[rating],
    emoji: EMOJIS[rating],
    breakdown,
    flames,
    prediction,
    famousCouple,
    strengths,
    challenges,
  };
}

export const loveRecommendations = {
  en: {
    title: 'About Love Compatibility',
    description:
      'This calculator is designed for entertainment purposes only. True compatibility depends on communication, respect, shared values, and mutual effort - not algorithms!',
    tips: [
      'Real relationships are built on trust, communication, and understanding',
      'Compatibility scores are just for fun - don\'t take them too seriously',
      'The best relationships require effort from both partners',
      'Shared values and goals matter more than any percentage',
      'Love grows through actions, not calculations',
    ],
  },
  tr: {
    title: 'Aşk Uyumu Hakkında',
    description:
      'Bu hesaplayıcı yalnızca eğlence amaçlı tasarlanmıştır. Gerçek uyum iletişim, saygı, ortak değerler ve karşılıklı çabaya bağlıdır - algoritmalara değil!',
    tips: [
      'Gerçek ilişkiler güven, iletişim ve anlayış üzerine kurulur',
      'Uyum puanları sadece eğlence içindir - çok ciddiye almayın',
      'En iyi ilişkiler her iki taraftan da çaba gerektirir',
      'Ortak değerler ve hedefler herhangi bir yüzdeden daha önemlidir',
      'Aşk hesaplamalarla değil, eylemlerle büyür',
    ],
  },
};

// FLAMES Algorithm
function calculateFLAMES(name1: string, name2: string): FlamesResult {
  const normalized1 = normalizeString(name1);
  const normalized2 = normalizeString(name2);

  // Remove common characters
  let str1 = normalized1.split('');
  let str2 = normalized2.split('');

  for (let i = str1.length - 1; i >= 0; i--) {
    const index = str2.indexOf(str1[i]);
    if (index !== -1) {
      str1.splice(i, 1);
      str2.splice(index, 1);
    }
  }

  const count = str1.length + str2.length;
  const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
  const result = flames[count % flames.length] as FlamesResult['result'];

  const descriptions = {
    Friends: {
      en: 'You two make amazing friends! Your bond is built on trust and understanding.',
      tr: 'İkiniz harika arkadaşlar olursunuz! Bağınız güven ve anlayışa dayanıyor.',
    },
    Lovers: {
      en: 'Passionate romance is in the cards! Your chemistry is undeniable.',
      tr: 'Tutkulu bir romantizm sizi bekliyor! Kimyanız yadsınamaz.',
    },
    Affectionate: {
      en: 'Sweet and caring relationship! You nurture each other beautifully.',
      tr: 'Tatlı ve şefkatli bir ilişki! Birbirinizi güzelce besliyorsunuz.',
    },
    Marriage: {
      en: 'Wedding bells are ringing! You\'re destined for a lasting commitment.',
      tr: 'Düğün çanları çalıyor! Kalıcı bir bağlılığa yazgılısınız.',
    },
    Enemies: {
      en: 'Opposites attract! Your differences create exciting dynamics.',
      tr: 'Zıtlar birbirini çeker! Farklılıklarınız heyecan verici dinamikler yaratıyor.',
    },
    Siblings: {
      en: 'Like family! You have a comfortable, supportive connection.',
      tr: 'Aile gibi! Rahat, destekleyici bir bağınız var.',
    },
  };

  return {
    result,
    description: descriptions[result],
  };
}

// Calculate compatibility breakdown
function calculateBreakdown(percentage: number, name1: string, name2: string): CompatibilityBreakdown {
  const seed = (name1 + name2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const variation = (offset: number) => {
    const base = percentage;
    const variance = ((seed + offset) % 20) - 10;
    return Math.max(10, Math.min(100, base + variance));
  };

  return {
    emotional: variation(1),
    intellectual: variation(2),
    physical: variation(3),
    spiritual: variation(4),
    communication: variation(5),
  };
}

// Generate relationship predictions
function generatePredictions(name1: string, name2: string): RelationshipPrediction {
  const seed = (name1 + name2).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const today = new Date();
  const addDays = (days: number) => {
    const date = new Date(today);
    date.setDate(date.getDate() + days);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const petNames = [
    { en: 'Buddy & Princess', tr: 'Buddy & Prenses' },
    { en: 'Max & Luna', tr: 'Max & Luna' },
    { en: 'Charlie & Bella', tr: 'Charlie & Bella' },
    { en: 'Rocky & Daisy', tr: 'Rocky & Daisy' },
    { en: 'Cooper & Sophie', tr: 'Cooper & Sophie' },
  ];

  return {
    firstDate: addDays((seed % 30) + 7),
    firstKiss: addDays((seed % 60) + 14),
    engagement: addDays((seed % 365) + 180),
    marriage: addDays((seed % 730) + 365),
    children: (seed % 4) + 1,
    petName: petNames[seed % petNames.length],
  };
}

// Match with famous couples
function matchFamousCouple(percentage: number, name1: string, name2: string): FamousCoupleMatch {
  const famousCouples = [
    {
      couple: 'Romeo & Juliet',
      range: [90, 100],
      description: {
        en: 'Legendary passionate love that transcends time.',
        tr: 'Zamanı aşan efsanevi tutkulu aşk.',
      },
    },
    {
      couple: 'Barack & Michelle Obama',
      range: [85, 95],
      description: {
        en: 'Power couple with mutual respect and admiration.',
        tr: 'Karşılıklı saygı ve hayranlığa sahip güçlü çift.',
      },
    },
    {
      couple: 'David & Victoria Beckham',
      range: [75, 90],
      description: {
        en: 'Glamorous partnership built on shared dreams.',
        tr: 'Ortak hayallere dayanan göz alıcı ortaklık.',
      },
    },
    {
      couple: 'Beyoncé & Jay-Z',
      range: [70, 85],
      description: {
        en: 'Dynamic duo creating magic together.',
        tr: 'Birlikte sihir yaratan dinamik ikili.',
      },
    },
    {
      couple: 'Ryan Reynolds & Blake Lively',
      range: [60, 75],
      description: {
        en: 'Fun-loving couple with great chemistry and humor.',
        tr: 'Harika kimya ve mizaha sahip eğlenceyi seven çift.',
      },
    },
    {
      couple: 'John Lennon & Yoko Ono',
      range: [50, 70],
      description: {
        en: 'Artistic souls united by creativity and passion.',
        tr: 'Yaratıcılık ve tutku ile birleşen sanatsal ruhlar.',
      },
    },
    {
      couple: 'Ross & Rachel',
      range: [30, 60],
      description: {
        en: 'On-and-off relationship that keeps everyone guessing!',
        tr: 'Herkesi merakta bırakan bitip-başlayan ilişki!',
      },
    },
    {
      couple: 'Han Solo & Princess Leia',
      range: [0, 40],
      description: {
        en: 'Opposites attract in the most unexpected ways!',
        tr: 'Zıtlar en beklenmedik şekillerde birbirini çeker!',
      },
    },
  ];

  const match = famousCouples.find(
    (couple) => percentage >= couple.range[0] && percentage <= couple.range[1]
  ) || famousCouples[famousCouples.length - 1];

  return {
    couple: match.couple,
    similarity: percentage,
    description: match.description,
  };
}

// Generate strengths and challenges
function generateStrengthsAndChallenges(
  percentage: number,
  breakdown: CompatibilityBreakdown
): {
  strengths: { en: string[]; tr: string[] };
  challenges: { en: string[]; tr: string[] };
} {
  const allStrengths = {
    en: [
      'Strong emotional connection and empathy',
      'Excellent communication and understanding',
      'Shared interests and hobbies',
      'Mutual respect and admiration',
      'Great chemistry and attraction',
      'Similar values and life goals',
      'Supportive of each other\'s dreams',
      'Natural compatibility and flow',
    ],
    tr: [
      'Güçlü duygusal bağ ve empati',
      'Mükemmel iletişim ve anlayış',
      'Ortak ilgi alanları ve hobiler',
      'Karşılıklı saygı ve hayranlık',
      'Harika kimya ve çekim',
      'Benzer değerler ve yaşam hedefleri',
      'Birbirinin hayallerini destekleme',
      'Doğal uyum ve akış',
    ],
  };

  const allChallenges = {
    en: [
      'May need to work on emotional expression',
      'Different communication styles to navigate',
      'Balancing independence and togetherness',
      'Finding common ground on life decisions',
      'Keeping the spark alive long-term',
      'Managing different priorities',
      'Building trust through consistency',
      'Aligning on future plans',
    ],
    tr: [
      'Duygusal ifade üzerinde çalışma gerekebilir',
      'Farklı iletişim stillerini yönetme',
      'Bağımsızlık ve beraberliği dengeleme',
      'Yaşam kararlarında ortak zemin bulma',
      'Kıvılcımı uzun vadede canlı tutma',
      'Farklı öncelikleri yönetme',
      'Tutarlılıkla güven inşa etme',
      'Gelecek planlarında uyum sağlama',
    ],
  };

  const numStrengths = percentage >= 70 ? 4 : percentage >= 50 ? 3 : 2;
  const numChallenges = percentage >= 70 ? 2 : percentage >= 50 ? 3 : 4;

  return {
    strengths: {
      en: allStrengths.en.slice(0, numStrengths),
      tr: allStrengths.tr.slice(0, numStrengths),
    },
    challenges: {
      en: allChallenges.en.slice(0, numChallenges),
      tr: allChallenges.tr.slice(0, numChallenges),
    },
  };
}
