export interface GAD7Question {
  id: number;
  text: {
    en: string;
    tr: string;
  };
}

export interface GAD7Input {
  answers: number[]; // 0-3 for each of 7 questions
  age?: number;
  gender?: 'male' | 'female' | 'other';
}

export interface GAD7Result {
  totalScore: number;
  severity: 'minimal' | 'mild' | 'moderate' | 'severe';
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

export const gad7Questions: GAD7Question[] = [
  {
    id: 1,
    text: {
      en: 'Feeling nervous, anxious, or on edge',
      tr: 'Kendini sinirli, endişeli veya gergin hissetme',
    },
  },
  {
    id: 2,
    text: {
      en: 'Not being able to stop or control worrying',
      tr: 'Endişelenmeyi durduramama veya kontrol edememe',
    },
  },
  {
    id: 3,
    text: {
      en: 'Worrying too much about different things',
      tr: 'Farklı şeyler hakkında çok fazla endişelenme',
    },
  },
  {
    id: 4,
    text: {
      en: 'Trouble relaxing',
      tr: 'Rahatlama güçlüğü',
    },
  },
  {
    id: 5,
    text: {
      en: 'Being so restless that it is hard to sit still',
      tr: 'Yerine oturamayacak kadar huzursuz olma',
    },
  },
  {
    id: 6,
    text: {
      en: 'Becoming easily annoyed or irritable',
      tr: 'Kolayca sinirlenme veya rahatsız olma',
    },
  },
  {
    id: 7,
    text: {
      en: 'Feeling afraid, as if something awful might happen',
      tr: 'Korkmuş hissetme, sanki kötü bir şey olacakmış gibi',
    },
  },
];

export const gad7Options = {
  en: [
    { value: 0, label: 'Not at all' },
    { value: 1, label: 'Several days' },
    { value: 2, label: 'More than half the days' },
    { value: 3, label: 'Nearly every day' },
  ],
  tr: [
    { value: 0, label: 'Hi\u00e7' },
    { value: 1, label: 'Birka\u00e7 g\u00fcn' },
    { value: 2, label: 'G\u00fcnlerin yar\u0131s\u0131ndan fazlas\u0131' },
    { value: 3, label: 'Neredeyse her g\u00fcn' },
  ],
};

export const gad7Severities = {
  minimal: {
    range: '0-4',
    label: { en: 'Minimal Anxiety', tr: 'Minimal Anksiyete' },
    description: {
      en: 'Your symptoms suggest minimal or no anxiety.',
      tr: 'Semptomlar\u0131n\u0131z minimal veya anksiyete olmad\u0131\u011f\u0131n\u0131 g\u00f6steriyor.',
    },
    recommendation: {
      en: 'Continue with healthy lifestyle habits. Practice regular self-care and stress management.',
      tr: 'Sa\u011fl\u0131kl\u0131 ya\u015fam tarz\u0131 al\u0131\u015fkanl\u0131klar\u0131n\u0131za devam edin. D\u00fczenli \u00f6z bak\u0131m ve stres y\u00f6netimi uygulay\u0131n.',
    },
    color: 'success' as const,
  },
  mild: {
    range: '5-9',
    label: { en: 'Mild Anxiety', tr: 'Hafif Anksiyete' },
    description: {
      en: 'Your symptoms suggest mild anxiety.',
      tr: 'Semptomlar\u0131n\u0131z hafif anksiyete g\u00f6steriyor.',
    },
    recommendation: {
      en: 'Consider relaxation techniques, regular exercise, and mindfulness practices. Monitor symptoms and seek help if they worsen.',
      tr: 'Gev\u015feme teknikleri, d\u00fczenli egzersiz ve fark\u0131ndal\u0131k uygulamalar\u0131 d\u00fc\u015f\u00fcn\u00fcn. Semptomlar\u0131 izleyin ve k\u00f6t\u00fcle\u015firlerse yard\u0131m aray\u0131n.',
    },
    color: 'primary' as const,
  },
  moderate: {
    range: '10-14',
    label: { en: 'Moderate Anxiety', tr: 'Orta Anksiyete' },
    description: {
      en: 'Your symptoms suggest moderate anxiety.',
      tr: 'Semptomlar\u0131n\u0131z orta d\u00fczeyde anksiyete g\u00f6steriyor.',
    },
    recommendation: {
      en: 'Seek professional help. Cognitive behavioral therapy (CBT) and/or medication consultation are recommended.',
      tr: 'Profesyonel yard\u0131m aray\u0131n. Bili\u015fsel davran\u0131\u015f\u00e7\u0131 terapi (BDT) ve/veya ila\u00e7 dan\u0131\u015fmanl\u0131\u011f\u0131 \u00f6nerilir.',
    },
    color: 'warning' as const,
  },
  severe: {
    range: '15-21',
    label: { en: 'Severe Anxiety', tr: 'A\u011f\u0131r Anksiyete' },
    description: {
      en: 'Your symptoms suggest severe anxiety.',
      tr: 'Semptomlar\u0131n\u0131z a\u011f\u0131r anksiyete g\u00f6steriyor.',
    },
    recommendation: {
      en: 'Seek immediate professional help. Active treatment with therapy and/or medication is strongly recommended.',
      tr: 'Acil profesyonel yard\u0131m aray\u0131n. Terapi ve/veya ila\u00e7 ile aktif tedavi \u015fiddetle \u00f6nerilir.',
    },
    color: 'danger' as const,
  },
} as const;
