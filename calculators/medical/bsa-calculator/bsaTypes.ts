export interface BSAInput {
  height: number;
  heightUnit: 'cm' | 'ft-in';
  weight: number;
  weightUnit: 'kg' | 'lbs';
  age?: number;
  formula: 'dubois' | 'mosteller' | 'haycock' | 'gehan-george';
  cardiacOutput?: number; // L/min for cardiac index calculation
}

export interface BSAResult {
  bsa: number;
  formula: string;
  allFormulas: {
    dubois: number;
    mosteller: number;
    haycock: number;
    gehanGeorge: number;
  };
  category: {
    label: { en: string; tr: string };
    description: { en: string; tr: string };
    color: 'success' | 'primary' | 'warning' | 'danger';
  };
  medicalUses: {
    en: string[];
    tr: string[];
  };
  bmi?: number;
  adjustedBSA?: number; // For obese patients
  cardiacIndex?: number;
  ageGroup?: {
    label: { en: string; tr: string };
    normalRange: string;
    percentile?: number;
  };
  recommendedFormula?: {
    formula: string;
    reason: { en: string; tr: string };
  };
  drugDosages?: {
    drug: string;
    standardDose: string;
    calculatedDose: string;
    indication: { en: string; tr: string };
  }[];
}

export interface BSAHistoryEntry {
  date: string;
  bsa: number;
  weight: number;
  height: number;
  age?: number;
}

export interface BurnAssessment {
  burnPercentage: number;
  fluidRequirement24h: number; // mL
  fluidRequirementFirst8h: number; // mL
  category: 'minor' | 'moderate' | 'major' | 'critical';
}

export const bsaCategories = {
  low: {
    range: '< 1.5',
    label: { en: 'Below Average', tr: 'Ortalamanın Altında' },
    description: {
      en: 'Lower than typical adult BSA. Common in petite individuals or children.',
      tr: 'Tipik yetişkin BSA\'dan daha düşük. Minyon bireyler veya çocuklarda yaygın.',
    },
    color: 'primary' as const,
  },
  normal: {
    range: '1.5 - 2.0',
    label: { en: 'Normal Range', tr: 'Normal Aralık' },
    description: {
      en: 'Typical adult body surface area. Most medication dosing assumes this range.',
      tr: 'Tipik yetişkin vücut yüzey alanı. Çoğu ilaç dozajı bu aralığı varsayar.',
    },
    color: 'success' as const,
  },
  high: {
    range: '> 2.0',
    label: { en: 'Above Average', tr: 'Ortalamanın Üstünde' },
    description: {
      en: 'Higher than typical BSA. Common in tall or larger-framed individuals.',
      tr: 'Tipik BSA\'dan daha yüksek. Uzun veya büyük çerçeveli bireylerde yaygın.',
    },
    color: 'primary' as const,
  },
} as const;

export const bsaFormulas = {
  dubois: {
    name: { en: 'Du Bois Formula', tr: 'Du Bois Formülü' },
    description: {
      en: 'Most widely used formula, established in 1916. Gold standard for medical calculations.',
      tr: '1916\'da oluşturulan en yaygın kullanılan formül. Tıbbi hesaplamalar için altın standart.',
    },
    year: '1916',
    bestFor: {
      en: 'General adult population, historical standard',
      tr: 'Genel yetişkin popülasyonu, tarihi standart',
    },
  },
  mosteller: {
    name: { en: 'Mosteller Formula', tr: 'Mosteller Formülü' },
    description: {
      en: 'Simpler calculation, preferred for quick clinical estimates.',
      tr: 'Daha basit hesaplama, hızlı klinik tahminler için tercih edilir.',
    },
    year: '1987',
    bestFor: {
      en: 'Quick calculations, most commonly used today',
      tr: 'Hızlı hesaplamalar, günümüzde en çok kullanılan',
    },
  },
  haycock: {
    name: { en: 'Haycock Formula', tr: 'Haycock Formülü' },
    description: {
      en: 'Accurate for children and pediatric dosing calculations.',
      tr: 'Çocuklar ve pediatrik dozaj hesaplamaları için doğru.',
    },
    year: '1978',
    bestFor: {
      en: 'Pediatric patients (age < 18)',
      tr: 'Pediatrik hastalar (yaş < 18)',
    },
  },
  'gehan-george': {
    name: { en: 'Gehan and George Formula', tr: 'Gehan ve George Formülü' },
    description: {
      en: 'Used for chemotherapy dosing in oncology.',
      tr: 'Onkolojide kemoterapi dozajı için kullanılır.',
    },
    year: '1970',
    bestFor: {
      en: 'Wide range of body sizes, oncology',
      tr: 'Geniş vücut ölçü aralığı, onkoloji',
    },
  },
} as const;

export const ageGroups = {
  neonate: {
    range: '0-1 month',
    normalBSA: '0.2-0.3',
    label: { en: 'Neonate', tr: 'Yenidoğan' },
  },
  infant: {
    range: '1-12 months',
    normalBSA: '0.3-0.5',
    label: { en: 'Infant', tr: 'Bebek' },
  },
  toddler: {
    range: '1-3 years',
    normalBSA: '0.5-0.7',
    label: { en: 'Toddler', tr: 'Küçük Çocuk' },
  },
  preschool: {
    range: '3-5 years',
    normalBSA: '0.6-0.8',
    label: { en: 'Preschool', tr: 'Okul Öncesi' },
  },
  schoolAge: {
    range: '5-12 years',
    normalBSA: '0.8-1.4',
    label: { en: 'School Age', tr: 'Okul Çağı' },
  },
  adolescent: {
    range: '12-18 years',
    normalBSA: '1.3-1.9',
    label: { en: 'Adolescent', tr: 'Ergen' },
  },
  youngAdult: {
    range: '18-40 years',
    normalBSA: '1.6-2.2',
    label: { en: 'Young Adult', tr: 'Genç Yetişkin' },
  },
  middleAge: {
    range: '40-65 years',
    normalBSA: '1.5-2.1',
    label: { en: 'Middle Age', tr: 'Orta Yaş' },
  },
  elderly: {
    range: '65+ years',
    normalBSA: '1.4-2.0',
    label: { en: 'Elderly', tr: 'Yaşlı' },
  },
} as const;

export const chemotherapyDrugs = [
  {
    name: 'Cisplatin',
    standardDose: 50,
    unit: 'mg/m²',
    indication: { en: 'Various solid tumors', tr: 'Çeşitli solid tümörler' },
  },
  {
    name: 'Doxorubicin',
    standardDose: 60,
    unit: 'mg/m²',
    indication: { en: 'Breast, lung, lymphoma', tr: 'Meme, akciğer, lenfoma' },
  },
  {
    name: 'Paclitaxel',
    standardDose: 175,
    unit: 'mg/m²',
    indication: { en: 'Breast, ovarian, lung', tr: 'Meme, yumurtalık, akciğer' },
  },
  {
    name: 'Carboplatin',
    standardDose: 'AUC 5-6',
    unit: '(Calvert formula)',
    indication: { en: 'Ovarian, lung cancer', tr: 'Yumurtalık, akciğer kanseri' },
  },
  {
    name: '5-Fluorouracil',
    standardDose: 400,
    unit: 'mg/m²',
    indication: { en: 'Colorectal, breast', tr: 'Kolorektal, meme' },
  },
] as const;

export const ruleOfNines = {
  head: { adult: 9, child: 18, infant: 18 },
  torsoFront: { adult: 18, child: 18, infant: 18 },
  torsoBack: { adult: 18, child: 18, infant: 18 },
  armLeft: { adult: 9, child: 9, infant: 9 },
  armRight: { adult: 9, child: 9, infant: 9 },
  legLeft: { adult: 18, child: 14, infant: 14 },
  legRight: { adult: 18, child: 14, infant: 14 },
  genitals: { adult: 1, child: 1, infant: 1 },
} as const;
