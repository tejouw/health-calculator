export interface PHQ9Question {
  id: number;
  text: {
    en: string;
    tr: string;
  };
}

export interface PHQ9Input {
  answers: number[]; // 0-3 for each of 9 questions
  age?: number;
  gender?: 'male' | 'female' | 'other';
}

export interface PHQ9Result {
  totalScore: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'moderately-severe' | 'severe';
  category: {
    label: { en: string; tr: string };
    range: string;
    description: { en: string; tr: string };
    recommendation: { en: string; tr: string };
    color: 'success' | 'primary' | 'warning' | 'danger';
  };
  demographicInfo?: {
    ageGroup?: string;
    genderSpecificRisks?: { en: string; tr: string };
    recommendations?: { en: string; tr: string };
  };
}

export const phq9Questions: PHQ9Question[] = [
  {
    id: 1,
    text: {
      en: 'Little interest or pleasure in doing things',
      tr: 'İşleri yapmada az ilgi veya zevk alma',
    },
  },
  {
    id: 2,
    text: {
      en: 'Feeling down, depressed, or hopeless',
      tr: 'Kendini üzgün, depresif veya umutsuz hissetme',
    },
  },
  {
    id: 3,
    text: {
      en: 'Trouble falling or staying asleep, or sleeping too much',
      tr: 'Uykuya dalmada veya uykuda kalmada zorluk ya da çok fazla uyuma',
    },
  },
  {
    id: 4,
    text: {
      en: 'Feeling tired or having little energy',
      tr: 'Kendini yorgun hissetme veya az enerjili olma',
    },
  },
  {
    id: 5,
    text: {
      en: 'Poor appetite or overeating',
      tr: 'Zayıf iştah veya aşırı yeme',
    },
  },
  {
    id: 6,
    text: {
      en: 'Feeling bad about yourself or that you are a failure or have let yourself or your family down',
      tr: 'Kendiniz hakkında kötü hissetme veya başarısız olduğunuzu ya da kendinizi veya ailenizi hayal kırıklığına uğrattığınızı düşünme',
    },
  },
  {
    id: 7,
    text: {
      en: 'Trouble concentrating on things, such as reading the newspaper or watching television',
      tr: 'Gazete okuma veya televizyon izleme gibi şeylere konsantre olmakta zorluk',
    },
  },
  {
    id: 8,
    text: {
      en: 'Moving or speaking so slowly that other people could have noticed, or being so fidgety or restless that you have been moving around a lot more than usual',
      tr: 'Diğer insanların fark edebileceği kadar yavaş hareket etme veya konuşma, ya da normalden çok daha fazla hareket edecek kadar huzursuz veya tedirgin olma',
    },
  },
  {
    id: 9,
    text: {
      en: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
      tr: 'Ölsem daha iyi olur düşünceleri veya kendinize bir şekilde zarar verme düşünceleri',
    },
  },
];

export const phq9Options = {
  en: [
    { value: 0, label: 'Not at all' },
    { value: 1, label: 'Several days' },
    { value: 2, label: 'More than half the days' },
    { value: 3, label: 'Nearly every day' },
  ],
  tr: [
    { value: 0, label: 'Hiç' },
    { value: 1, label: 'Birkaç gün' },
    { value: 2, label: 'Günlerin yarısından fazlası' },
    { value: 3, label: 'Neredeyse her gün' },
  ],
};

export const phq9Severities = {
  minimal: {
    range: '0-4',
    label: { en: 'Minimal Depression', tr: 'Minimal Depresyon' },
    description: {
      en: 'Your symptoms suggest minimal or no depression.',
      tr: 'Semptomlarınız minimal veya depresyon olmadığını gösteriyor.',
    },
    recommendation: {
      en: 'Continue with healthy lifestyle habits. Monitor your mental health.',
      tr: 'Sağlıklı yaşam tarzı alışkanlıklarınıza devam edin. Ruh sağlığınızı izleyin.',
    },
    color: 'success' as const,
  },
  mild: {
    range: '5-9',
    label: { en: 'Mild Depression', tr: 'Hafif Depresyon' },
    description: {
      en: 'Your symptoms suggest mild depression.',
      tr: 'Semptomlarınız hafif depresyon gösteriyor.',
    },
    recommendation: {
      en: 'Consider counseling, stress management, and self-care strategies.',
      tr: 'Danışmanlık, stres yönetimi ve öz bakım stratejilerini düşünün.',
    },
    color: 'primary' as const,
  },
  moderate: {
    range: '10-14',
    label: { en: 'Moderate Depression', tr: 'Orta Depresyon' },
    description: {
      en: 'Your symptoms suggest moderate depression.',
      tr: 'Semptomlarınız orta düzeyde depresyon gösteriyor.',
    },
    recommendation: {
      en: 'Seek professional help. Consider therapy and/or medication consultation.',
      tr: 'Profesyonel yardım arayın. Terapi ve/veya ilaç danışmanlığı düşünün.',
    },
    color: 'warning' as const,
  },
  'moderately-severe': {
    range: '15-19',
    label: { en: 'Moderately Severe Depression', tr: 'Orta-Ağır Depresyon' },
    description: {
      en: 'Your symptoms suggest moderately severe depression.',
      tr: 'Semptomlarınız orta-ağır depresyon gösteriyor.',
    },
    recommendation: {
      en: 'Seek professional treatment immediately. Therapy and medication are often recommended.',
      tr: 'Hemen profesyonel tedavi arayın. Terapi ve ilaç genellikle önerilir.',
    },
    color: 'danger' as const,
  },
  severe: {
    range: '20-27',
    label: { en: 'Severe Depression', tr: 'Ağır Depresyon' },
    description: {
      en: 'Your symptoms suggest severe depression.',
      tr: 'Semptomlarınız ağır depresyon gösteriyor.',
    },
    recommendation: {
      en: 'Seek immediate professional help. Contact a mental health professional or crisis hotline.',
      tr: 'Acil profesyonel yardım arayın. Ruh sağlığı uzmanı veya kriz hattıyla iletişime geçin.',
    },
    color: 'danger' as const,
  },
} as const;
