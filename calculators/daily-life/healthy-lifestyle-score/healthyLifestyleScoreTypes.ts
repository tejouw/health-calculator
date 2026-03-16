export interface LifestyleInput {
  exerciseFrequency: number; // 0-3 (none, 1-2 days, 3-4 days, 5+ days)
  exerciseDuration: number; // 0-2 (less than 30min, 30-60min, 60+min)
  sleepHours: number; // 0-5 (less than 5h, 5-6, 6-7, 7-8, 8-9, 9+)
  waterIntake: number; // 0-3 (1-2, 3-4, 5-7, 8+ glasses)
  fruitVegServings: number; // 0-3 (none, 1-2, 3-4, 5+)
  smokingStatus: 'never' | 'former' | 'current';
  alcoholFrequency: number; // 0-3 (never, rare, weekly, daily)
  screenTime: number; // 0-3 (less than 2h, 2-4h, 4-6h, 6+h)
  stressLevel: 'low' | 'moderate' | 'high';
  socialActivity: number; // 0-3 (rarely, monthly, weekly, daily)
}

export interface LifestyleResult {
  totalScore: number;
  category: LifestyleCategory;
  scores: CategoryScore[];
  strengths: string[];
  improvements: string[];
}

export interface CategoryScore {
  id: string;
  label: { en: string; tr: string };
  score: number;
  maxScore: number;
  color: string;
  emoji: string;
  tip: { en: string; tr: string };
}

export type LifestyleCategoryLevel = 'excellent' | 'veryGood' | 'good' | 'average' | 'needsImprovement' | 'attention';

export interface LifestyleCategory {
  level: LifestyleCategoryLevel;
  label: { en: string; tr: string };
  description: { en: string; tr: string };
  color: string;
  badgeVariant: 'success' | 'primary' | 'warning' | 'danger';
}

export const lifestyleCategories: Record<LifestyleCategoryLevel, LifestyleCategory> = {
  excellent: {
    level: 'excellent',
    label: { en: 'Excellent', tr: 'Mükemmel' },
    description: {
      en: 'Your lifestyle habits are outstanding! You are doing an amazing job taking care of your health. Keep up these great habits.',
      tr: 'Yaşam tarzı alışkanlıklarınız olağanüstü! Sağlığınıza harika bir şekilde özen gösteriyorsunuz. Bu harika alışkanlıklarınızı sürdürün.',
    },
    color: '#10B981',
    badgeVariant: 'success',
  },
  veryGood: {
    level: 'veryGood',
    label: { en: 'Very Good', tr: 'Çok İyi' },
    description: {
      en: 'You have very healthy lifestyle habits! Just a few small adjustments could make your routine even better.',
      tr: 'Çok sağlıklı yaşam tarzı alışkanlıklarınız var! Birkaç küçük düzenleme ile rutininizi daha da iyi hale getirebilirsiniz.',
    },
    color: '#22C55E',
    badgeVariant: 'success',
  },
  good: {
    level: 'good',
    label: { en: 'Good', tr: 'İyi' },
    description: {
      en: 'You have a solid foundation of healthy habits. There are some areas where improvement could make a noticeable difference.',
      tr: 'Sağlıklı alışkanlıklar için sağlam bir temele sahipsiniz. Bazı alanlarda iyileştirme fark edilir bir fark yaratabilir.',
    },
    color: '#3B82F6',
    badgeVariant: 'primary',
  },
  average: {
    level: 'average',
    label: { en: 'Average', tr: 'Orta' },
    description: {
      en: 'Your lifestyle has some healthy elements, but there is significant room for improvement. Focus on the areas with the lowest scores.',
      tr: 'Yaşam tarzınızda bazı sağlıklı öğeler var, ancak iyileştirme için önemli bir alan mevcut. En düşük puanlı alanlara odaklanın.',
    },
    color: '#F59E0B',
    badgeVariant: 'warning',
  },
  needsImprovement: {
    level: 'needsImprovement',
    label: { en: 'Needs Improvement', tr: 'Geliştirilebilir' },
    description: {
      en: 'Your current lifestyle habits could benefit from significant changes. Start with small, manageable steps and build from there.',
      tr: 'Mevcut yaşam tarzı alışkanlıklarınız önemli değişikliklerden fayda görebilir. Küçük, yönetilebilir adımlarla başlayın.',
    },
    color: '#F97316',
    badgeVariant: 'warning',
  },
  attention: {
    level: 'attention',
    label: { en: 'Attention Needed', tr: 'Dikkat Gerekli' },
    description: {
      en: 'Your lifestyle habits need serious attention. Consider consulting a healthcare professional and start making gradual changes today.',
      tr: 'Yaşam tarzı alışkanlıklarınız ciddi ilgi gerektiriyor. Bir sağlık profesyoneline danışmayı düşünün ve bugün kademeli değişiklikler yapmaya başlayın.',
    },
    color: '#EF4444',
    badgeVariant: 'danger',
  },
};

export const exerciseFrequencyOptions = {
  en: [
    { value: '0', label: 'None (0 days)' },
    { value: '1', label: '1-2 days per week' },
    { value: '2', label: '3-4 days per week' },
    { value: '3', label: '5+ days per week' },
  ],
  tr: [
    { value: '0', label: 'Hiç (0 gün)' },
    { value: '1', label: 'Haftada 1-2 gün' },
    { value: '2', label: 'Haftada 3-4 gün' },
    { value: '3', label: 'Haftada 5+ gün' },
  ],
};

export const exerciseDurationOptions = {
  en: [
    { value: '0', label: 'Less than 30 minutes' },
    { value: '1', label: '30-60 minutes' },
    { value: '2', label: '60+ minutes' },
  ],
  tr: [
    { value: '0', label: '30 dakikadan az' },
    { value: '1', label: '30-60 dakika' },
    { value: '2', label: '60+ dakika' },
  ],
};

export const sleepHoursOptions = {
  en: [
    { value: '0', label: 'Less than 5 hours' },
    { value: '1', label: '5-6 hours' },
    { value: '2', label: '6-7 hours' },
    { value: '3', label: '7-8 hours' },
    { value: '4', label: '8-9 hours' },
    { value: '5', label: '9+ hours' },
  ],
  tr: [
    { value: '0', label: '5 saatten az' },
    { value: '1', label: '5-6 saat' },
    { value: '2', label: '6-7 saat' },
    { value: '3', label: '7-8 saat' },
    { value: '4', label: '8-9 saat' },
    { value: '5', label: '9+ saat' },
  ],
};

export const waterIntakeOptions = {
  en: [
    { value: '0', label: '1-2 glasses per day' },
    { value: '1', label: '3-4 glasses per day' },
    { value: '2', label: '5-7 glasses per day' },
    { value: '3', label: '8+ glasses per day' },
  ],
  tr: [
    { value: '0', label: 'Günde 1-2 bardak' },
    { value: '1', label: 'Günde 3-4 bardak' },
    { value: '2', label: 'Günde 5-7 bardak' },
    { value: '3', label: 'Günde 8+ bardak' },
  ],
};

export const fruitVegOptions = {
  en: [
    { value: '0', label: 'None or rarely' },
    { value: '1', label: '1-2 servings per day' },
    { value: '2', label: '3-4 servings per day' },
    { value: '3', label: '5+ servings per day' },
  ],
  tr: [
    { value: '0', label: 'Hiç veya nadiren' },
    { value: '1', label: 'Günde 1-2 porsiyon' },
    { value: '2', label: 'Günde 3-4 porsiyon' },
    { value: '3', label: 'Günde 5+ porsiyon' },
  ],
};

export const smokingOptions = {
  en: [
    { value: 'never', label: 'Never smoked' },
    { value: 'former', label: 'Former smoker' },
    { value: 'current', label: 'Currently smoking' },
  ],
  tr: [
    { value: 'never', label: 'Hiç içmedim' },
    { value: 'former', label: 'Bıraktım' },
    { value: 'current', label: 'İçiyorum' },
  ],
};

export const alcoholOptions = {
  en: [
    { value: '0', label: 'Never' },
    { value: '1', label: 'Rarely (a few times a month)' },
    { value: '2', label: 'Weekly (a few times a week)' },
    { value: '3', label: 'Daily' },
  ],
  tr: [
    { value: '0', label: 'Hiç' },
    { value: '1', label: 'Nadiren (ayda birkaç kez)' },
    { value: '2', label: 'Haftalık (haftada birkaç kez)' },
    { value: '3', label: 'Her gün' },
  ],
};

export const screenTimeOptions = {
  en: [
    { value: '0', label: 'Less than 2 hours' },
    { value: '1', label: '2-4 hours' },
    { value: '2', label: '4-6 hours' },
    { value: '3', label: '6+ hours' },
  ],
  tr: [
    { value: '0', label: '2 saatten az' },
    { value: '1', label: '2-4 saat' },
    { value: '2', label: '4-6 saat' },
    { value: '3', label: '6+ saat' },
  ],
};

export const stressOptions = {
  en: [
    { value: 'low', label: 'Low' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'high', label: 'High' },
  ],
  tr: [
    { value: 'low', label: 'Düşük' },
    { value: 'moderate', label: 'Orta' },
    { value: 'high', label: 'Yüksek' },
  ],
};

export const socialOptions = {
  en: [
    { value: '0', label: 'Rarely (less than once a month)' },
    { value: '1', label: 'Monthly (a few times a month)' },
    { value: '2', label: 'Weekly (a few times a week)' },
    { value: '3', label: 'Daily' },
  ],
  tr: [
    { value: '0', label: 'Nadiren (ayda birden az)' },
    { value: '1', label: 'Aylık (ayda birkaç kez)' },
    { value: '2', label: 'Haftalık (haftada birkaç kez)' },
    { value: '3', label: 'Her gün' },
  ],
};
