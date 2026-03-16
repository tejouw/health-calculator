import {
  LifestyleInput,
  LifestyleResult,
  LifestyleCategory,
  LifestyleCategoryLevel,
  CategoryScore,
  lifestyleCategories,
} from './healthyLifestyleScoreTypes';

function scoreExercise(frequency: number, duration: number): CategoryScore {
  // frequency: 0=none, 1=1-2days, 2=3-4days, 3=5+days
  // duration: 0=<30min, 1=30-60min, 2=60+min
  let score = 0;
  if (frequency === 0) {
    score = 0;
  } else if (frequency === 1) {
    score = duration === 0 ? 3 : duration === 1 ? 4 : 5;
  } else if (frequency === 2) {
    score = duration === 0 ? 5 : duration === 1 ? 7 : 8;
  } else {
    score = duration === 0 ? 7 : duration === 1 ? 9 : 10;
  }

  return {
    id: 'exercise',
    label: { en: 'Physical Activity', tr: 'Fiziksel Aktivite' },
    score,
    maxScore: 10,
    color: '#3B82F6',
    emoji: '🏃',
    tip: score < 7
      ? { en: 'Aim for at least 150 minutes of moderate exercise per week.', tr: 'Haftada en az 150 dakika orta düzeyde egzersiz hedefleyin.' }
      : { en: 'Great job staying active! Keep up the good work.', tr: 'Aktif kalmakta harika iş çıkarıyorsunuz! Böyle devam edin.' },
  };
}

function scoreSleep(sleepIndex: number): CategoryScore {
  // 0=<5h, 1=5-6, 2=6-7, 3=7-8, 4=8-9, 5=9+
  const scoreMap = [1, 4, 6, 10, 9, 6];
  const score = scoreMap[sleepIndex] ?? 0;

  return {
    id: 'sleep',
    label: { en: 'Sleep Quality', tr: 'Uyku Kalitesi' },
    score,
    maxScore: 10,
    color: '#8B5CF6',
    emoji: '😴',
    tip: score < 7
      ? { en: 'Adults need 7-9 hours of sleep. Try a consistent bedtime routine.', tr: 'Yetişkinlerin 7-9 saat uykuya ihtiyacı var. Düzenli bir uyku rutini deneyin.' }
      : { en: 'Your sleep habits look healthy. Maintain your routine!', tr: 'Uyku alışkanlıklarınız sağlıklı görünüyor. Rutininizi koruyun!' },
  };
}

function scoreWater(waterIndex: number): CategoryScore {
  const scoreMap = [2, 5, 8, 10];
  const score = scoreMap[waterIndex] ?? 0;

  return {
    id: 'water',
    label: { en: 'Hydration', tr: 'Su Tüketimi' },
    score,
    maxScore: 10,
    color: '#06B6D4',
    emoji: '💧',
    tip: score < 7
      ? { en: 'Try to drink at least 8 glasses (2 liters) of water daily.', tr: 'Günde en az 8 bardak (2 litre) su içmeye çalışın.' }
      : { en: 'Your hydration habits are excellent!', tr: 'Su tüketimi alışkanlıklarınız mükemmel!' },
  };
}

function scoreNutrition(fruitVegIndex: number): CategoryScore {
  const scoreMap = [1, 4, 7, 10];
  const score = scoreMap[fruitVegIndex] ?? 0;

  return {
    id: 'nutrition',
    label: { en: 'Nutrition', tr: 'Beslenme' },
    score,
    maxScore: 10,
    color: '#22C55E',
    emoji: '🥗',
    tip: score < 7
      ? { en: 'WHO recommends at least 5 servings of fruits and vegetables daily.', tr: 'DSÖ günde en az 5 porsiyon meyve ve sebze öneriyor.' }
      : { en: 'You are eating well! Keep incorporating colorful fruits and vegetables.', tr: 'İyi besleniyorsunuz! Renkli meyve ve sebzeler eklemeye devam edin.' },
  };
}

function scoreSmoking(status: 'never' | 'former' | 'current'): CategoryScore {
  const scoreMap = { never: 10, former: 6, current: 0 };
  const score = scoreMap[status];

  return {
    id: 'smoking',
    label: { en: 'Smoking', tr: 'Sigara' },
    score,
    maxScore: 10,
    color: '#EF4444',
    emoji: '🚭',
    tip: status === 'current'
      ? { en: 'Quitting smoking is the single best thing you can do for your health.', tr: 'Sigarayı bırakmak sağlığınız için yapabileceğiniz en iyi şeydir.' }
      : status === 'former'
        ? { en: 'Great that you quit! Your body continues to heal with each passing day.', tr: 'Bıraktığınız için harika! Vücudunuz her geçen gün iyileşmeye devam ediyor.' }
        : { en: 'Excellent! Staying smoke-free is a major health advantage.', tr: 'Mükemmel! Sigara içmemek büyük bir sağlık avantajı.' },
  };
}

function scoreAlcohol(frequencyIndex: number): CategoryScore {
  const scoreMap = [10, 8, 5, 1];
  const score = scoreMap[frequencyIndex] ?? 0;

  return {
    id: 'alcohol',
    label: { en: 'Alcohol', tr: 'Alkol' },
    score,
    maxScore: 10,
    color: '#F97316',
    emoji: '🍷',
    tip: score < 7
      ? { en: 'Consider reducing alcohol intake. Moderation is key for long-term health.', tr: 'Alkol tüketimini azaltmayı düşünün. Uzun vadeli sağlık için ılımlılık önemlidir.' }
      : { en: 'Your alcohol habits are in a healthy range.', tr: 'Alkol alışkanlıklarınız sağlıklı aralıkta.' },
  };
}

function scoreScreenTime(screenIndex: number): CategoryScore {
  const scoreMap = [10, 7, 4, 2];
  const score = scoreMap[screenIndex] ?? 0;

  return {
    id: 'screen',
    label: { en: 'Screen Time', tr: 'Ekran Süresi' },
    score,
    maxScore: 10,
    color: '#6366F1',
    emoji: '📱',
    tip: score < 7
      ? { en: 'Take regular breaks using the 20-20-20 rule: every 20 min, look at something 20 feet away for 20 seconds.', tr: '20-20-20 kuralını uygulayın: her 20 dakikada, 20 saniye boyunca 6 metre uzağa bakın.' }
      : { en: 'Your screen time is well managed!', tr: 'Ekran sürenizi iyi yönetiyorsunuz!' },
  };
}

function scoreStress(level: 'low' | 'moderate' | 'high'): CategoryScore {
  const scoreMap = { low: 10, moderate: 5, high: 1 };
  const score = scoreMap[level];

  return {
    id: 'stress',
    label: { en: 'Stress Management', tr: 'Stres Yönetimi' },
    score,
    maxScore: 10,
    color: '#EC4899',
    emoji: '🧘',
    tip: score < 7
      ? { en: 'Try stress-reducing activities like meditation, deep breathing, or yoga.', tr: 'Meditasyon, derin nefes veya yoga gibi stres azaltıcı aktiviteler deneyin.' }
      : { en: 'You manage stress well. Keep practicing your stress-relief techniques!', tr: 'Stresi iyi yönetiyorsunuz. Stres giderme tekniklerinize devam edin!' },
  };
}

function scoreSocial(socialIndex: number): CategoryScore {
  const scoreMap = [2, 5, 8, 10];
  const score = scoreMap[socialIndex] ?? 0;

  return {
    id: 'social',
    label: { en: 'Social Connections', tr: 'Sosyal Bağlantılar' },
    score,
    maxScore: 10,
    color: '#F59E0B',
    emoji: '👥',
    tip: score < 7
      ? { en: 'Social connections are vital for mental health. Try to meet friends or family regularly.', tr: 'Sosyal bağlantılar ruh sağlığı için hayati önem taşır. Düzenli olarak arkadaşlarınızla veya ailenizle görüşmeye çalışın.' }
      : { en: 'Your social life is thriving! Strong relationships are a key to wellbeing.', tr: 'Sosyal yaşamınız canlı! Güçlü ilişkiler sağlıklı yaşamın anahtarıdır.' },
  };
}

function getCategory(totalScore: number): LifestyleCategory {
  if (totalScore >= 90) return lifestyleCategories.excellent;
  if (totalScore >= 75) return lifestyleCategories.veryGood;
  if (totalScore >= 60) return lifestyleCategories.good;
  if (totalScore >= 40) return lifestyleCategories.average;
  if (totalScore >= 20) return lifestyleCategories.needsImprovement;
  return lifestyleCategories.attention;
}

export function calculateLifestyleScore(input: LifestyleInput): LifestyleResult {
  const scores: CategoryScore[] = [
    scoreExercise(input.exerciseFrequency, input.exerciseDuration),
    scoreSleep(input.sleepHours),
    scoreWater(input.waterIntake),
    scoreNutrition(input.fruitVegServings),
    scoreSmoking(input.smokingStatus),
    scoreAlcohol(input.alcoholFrequency),
    scoreScreenTime(input.screenTime),
    scoreStress(input.stressLevel),
    scoreSocial(input.socialActivity),
  ];

  const totalScore = scores.reduce((sum, s) => sum + s.score, 0);
  // Scale from 90 max to 100 (9 categories * 10 = 90 max)
  const scaledScore = Math.round((totalScore / 90) * 100);
  const category = getCategory(scaledScore);

  const sortedByScore = [...scores].sort((a, b) => a.score - b.score);
  const strengths = sortedByScore.filter(s => s.score >= 8).map(s => s.id);
  const improvements = sortedByScore.filter(s => s.score < 6).map(s => s.id);

  return {
    totalScore: scaledScore,
    category,
    scores,
    strengths,
    improvements,
  };
}
