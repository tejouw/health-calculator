import { LoveCalculatorInput, LoveCalculatorResult } from './loveTypes';

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

  return {
    percentage,
    rating,
    message: LOVE_MESSAGES[rating],
    tip: LOVE_TIPS[rating],
    emoji: EMOJIS[rating],
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
