export interface BloodSugarInput {
  value: number;
  unit: 'mgdl' | 'mmol';
}

export interface BloodSugarResult {
  mgdl: number;
  mmol: number;
  category: 'low' | 'normal' | 'prediabetes' | 'diabetes';
  interpretation: {
    en: string;
    tr: string;
  };
}

export const bloodSugarCategories = {
  low: {
    label: { en: 'Low (Hypoglycemia)', tr: 'Düşük (Hipoglisemi)' },
    color: 'primary',
    range: { mgdl: '< 70', mmol: '< 3.9' },
  },
  normal: {
    label: { en: 'Normal', tr: 'Normal' },
    color: 'success',
    range: { mgdl: '70-100', mmol: '3.9-5.6' },
  },
  prediabetes: {
    label: { en: 'Prediabetes', tr: 'Prediyabet' },
    color: 'warning',
    range: { mgdl: '100-125', mmol: '5.6-6.9' },
  },
  diabetes: {
    label: { en: 'Diabetes Range', tr: 'Diyabet Aralığı' },
    color: 'danger',
    range: { mgdl: '\u2265 126', mmol: '\u2265 7.0' },
  },
} as const;
