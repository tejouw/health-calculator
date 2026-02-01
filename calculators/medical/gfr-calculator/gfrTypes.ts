export interface GFRInput {
  age: number;
  gender: 'male' | 'female';
  creatinine: number;
  creatinineUnit: 'mgdl' | 'umol';
  race?: 'black' | 'other';
}

export interface GFRResult {
  gfr: number;
  stage: 1 | 2 | 3 | 4 | 5;
  category: {
    label: { en: string; tr: string };
    description: { en: string; tr: string };
    color: 'success' | 'primary' | 'warning' | 'danger';
  };
}

export const gfrStages = {
  1: {
    range: '\u2265 90',
    label: { en: 'Stage 1 (Normal/High)', tr: 'Evre 1 (Normal/Yüksek)' },
    description: {
      en: 'Normal or high kidney function. Maintain healthy lifestyle.',
      tr: 'Normal veya yüksek böbrek fonksiyonu. Sağlıklı yaşam tarzını sürdürün.',
    },
    color: 'success' as const,
  },
  2: {
    range: '60-89',
    label: { en: 'Stage 2 (Mild Decrease)', tr: 'Evre 2 (Hafif Azalma)' },
    description: {
      en: 'Mild kidney function decrease. Monitor kidney health regularly.',
      tr: 'Hafif böbrek fonksiyonu azalması. Böbrek sağlığını düzenli izleyin.',
    },
    color: 'primary' as const,
  },
  3: {
    range: '30-59',
    label: { en: 'Stage 3 (Moderate)', tr: 'Evre 3 (Orta)' },
    description: {
      en: 'Moderate kidney function decrease. Consult nephrologist for management.',
      tr: 'Orta derecede böbrek fonksiyonu azalması. Yönetim için nefrologa danışın.',
    },
    color: 'warning' as const,
  },
  4: {
    range: '15-29',
    label: { en: 'Stage 4 (Severe)', tr: 'Evre 4 (Ciddi)' },
    description: {
      en: 'Severe kidney function decrease. Prepare for kidney failure treatment.',
      tr: 'Ciddi böbrek fonksiyonu azalması. Böbrek yetmezliği tedavisine hazırlanın.',
    },
    color: 'danger' as const,
  },
  5: {
    range: '< 15',
    label: { en: 'Stage 5 (Kidney Failure)', tr: 'Evre 5 (Böbrek Yetmezliği)' },
    description: {
      en: 'Kidney failure. Dialysis or transplant required.',
      tr: 'Böbrek yetmezliği. Diyaliz veya nakil gereklidir.',
    },
    color: 'danger' as const,
  },
} as const;
