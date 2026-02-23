export interface PSSQuestion {
  id: number;
  text: {
    en: string;
    tr: string;
  };
  reversed: boolean;
}

export interface PSSInput {
  answers: number[]; // 0-4 for each of 10 questions
  age?: number;
  gender?: 'male' | 'female' | 'other';
}

export interface PSSResult {
  totalScore: number;
  severity: 'low' | 'moderate' | 'high';
  category: {
    label: { en: string; tr: string };
    range: string;
    description: { en: string; tr: string };
    recommendation: { en: string; tr: string };
    color: 'success' | 'warning' | 'danger';
  };
  percentile: number;
  topStressors: { questionId: number; score: number; text: { en: string; tr: string } }[];
  copingScore: number;
  demographicInfo?: {
    ageGroup?: string;
    genderSpecificRisks?: { en: string; tr: string };
    recommendations?: { en: string; tr: string };
  };
}

export const pssQuestions: PSSQuestion[] = [
  {
    id: 1,
    text: {
      en: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
      tr: 'Son bir ayda, beklenmedik bir şey olduğu için ne sıklıkla üzüldünüz?',
    },
    reversed: false,
  },
  {
    id: 2,
    text: {
      en: 'In the last month, how often have you felt that you were unable to control the important things in your life?',
      tr: 'Son bir ayda, hayatınızdaki önemli şeyleri kontrol edemediğinizi ne sıklıkla hissettiniz?',
    },
    reversed: false,
  },
  {
    id: 3,
    text: {
      en: 'In the last month, how often have you felt nervous and stressed?',
      tr: 'Son bir ayda, ne sıklıkla gergin ve stresli hissettiniz?',
    },
    reversed: false,
  },
  {
    id: 4,
    text: {
      en: 'In the last month, how often have you felt confident about your ability to handle your personal problems?',
      tr: 'Son bir ayda, kişisel sorunlarınızı çözme yeteneğinize ne sıklıkla güvendiniz?',
    },
    reversed: true,
  },
  {
    id: 5,
    text: {
      en: 'In the last month, how often have you felt that things were going your way?',
      tr: 'Son bir ayda, işlerin istediğiniz gibi gittiğini ne sıklıkla hissettiniz?',
    },
    reversed: true,
  },
  {
    id: 6,
    text: {
      en: 'In the last month, how often have you found that you could not cope with all the things that you had to do?',
      tr: 'Son bir ayda, yapmanız gereken tüm işlerle başa çıkamadığınızı ne sıklıkla fark ettiniz?',
    },
    reversed: false,
  },
  {
    id: 7,
    text: {
      en: 'In the last month, how often have you been able to control irritations in your life?',
      tr: 'Son bir ayda, hayatınızdaki rahatsızlıkları ne sıklıkla kontrol edebildiniz?',
    },
    reversed: true,
  },
  {
    id: 8,
    text: {
      en: 'In the last month, how often have you felt that you were on top of things?',
      tr: 'Son bir ayda, her şeyin üstesinden geldiğinizi ne sıklıkla hissettiniz?',
    },
    reversed: true,
  },
  {
    id: 9,
    text: {
      en: 'In the last month, how often have you been angered because of things that happened that were outside of your control?',
      tr: 'Son bir ayda, kontrolünüz dışında olan şeyler yüzünden ne sıklıkla öfkelendiniz?',
    },
    reversed: false,
  },
  {
    id: 10,
    text: {
      en: 'In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?',
      tr: 'Son bir ayda, zorlukların üstesinden gelemeyeceğiniz kadar biriktiğini ne sıklıkla hissettiniz?',
    },
    reversed: false,
  },
];

export const pssOptions = {
  en: [
    { value: 0, label: 'Never' },
    { value: 1, label: 'Almost never' },
    { value: 2, label: 'Sometimes' },
    { value: 3, label: 'Fairly often' },
    { value: 4, label: 'Very often' },
  ],
  tr: [
    { value: 0, label: 'Hiçbir zaman' },
    { value: 1, label: 'Neredeyse hiç' },
    { value: 2, label: 'Bazen' },
    { value: 3, label: 'Oldukça sık' },
    { value: 4, label: 'Çok sık' },
  ],
};

export const pssSeverities = {
  low: {
    range: '0-13',
    label: { en: 'Low Stress', tr: 'Düşük Stres' },
    description: {
      en: 'Your perceived stress level is low. You appear to be managing life demands effectively.',
      tr: 'Algılanan stres düzeyiniz düşük. Yaşam taleplerinizi etkili bir şekilde yönetiyor görünüyorsunuz.',
    },
    recommendation: {
      en: 'Continue your healthy coping strategies. Maintain regular exercise, sleep hygiene, and social connections.',
      tr: 'Sağlıklı başa çıkma stratejilerinize devam edin. Düzenli egzersiz, uyku hijyeni ve sosyal bağlantılarınızı sürdürün.',
    },
    color: 'success' as const,
  },
  moderate: {
    range: '14-26',
    label: { en: 'Moderate Stress', tr: 'Orta Düzey Stres' },
    description: {
      en: 'Your perceived stress level is moderate. You may benefit from developing additional coping strategies.',
      tr: 'Algılanan stres düzeyiniz orta seviyede. Ek başa çıkma stratejileri geliştirmeniz faydalı olabilir.',
    },
    recommendation: {
      en: 'Consider incorporating stress management techniques such as mindfulness, deep breathing, or regular physical activity. If stress persists, consulting a mental health professional is recommended.',
      tr: 'Farkındalık, derin nefes alma veya düzenli fiziksel aktivite gibi stres yönetimi tekniklerini dahil etmeyi düşünün. Stres devam ederse, bir ruh sağlığı uzmanına danışmanız önerilir.',
    },
    color: 'warning' as const,
  },
  high: {
    range: '27-40',
    label: { en: 'High Stress', tr: 'Yüksek Stres' },
    description: {
      en: 'Your perceived stress level is high. You may be feeling overwhelmed and struggling to cope with daily demands.',
      tr: 'Algılanan stres düzeyiniz yüksek. Bunalmış hissediyor ve günlük taleplerinizle başa çıkmakta zorlanıyor olabilirsiniz.',
    },
    recommendation: {
      en: 'Seek professional help from a mental health provider. Consider therapy, stress management programs, and lifestyle changes. Prioritize self-care and reach out to your support network.',
      tr: 'Bir ruh sağlığı uzmanından profesyonel yardım alın. Terapi, stres yönetimi programları ve yaşam tarzı değişikliklerini düşünün. Öz bakımınıza öncelik verin ve destek ağınıza ulaşın.',
    },
    color: 'danger' as const,
  },
} as const;
