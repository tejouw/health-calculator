export interface A1CInput {
  a1c: number;
}

export interface A1CResult {
  a1c: number;
  eAG: {
    mgdl: number;
    mmol: number;
  };
  category: 'normal' | 'prediabetes' | 'diabetes';
  interpretation: {
    en: string;
    tr: string;
  };
}

export const a1cCategories = {
  normal: {
    range: '< 5.7%',
    label: { en: 'Normal', tr: 'Normal' },
    color: 'success',
    interpretation: {
      en: 'Your A1C level is within the normal range. Continue maintaining a healthy lifestyle.',
      tr: 'A1C seviyeniz normal aralıkta. Sağlıklı yaşam tarzınızı sürdürün.',
    },
  },
  prediabetes: {
    range: '5.7% - 6.4%',
    label: { en: 'Prediabetes', tr: 'Prediyabet' },
    color: 'warning',
    interpretation: {
      en: 'Your A1C indicates prediabetes. Lifestyle changes can help prevent type 2 diabetes.',
      tr: 'A1C seviyeniz prediyabet gösteriyor. Yaşam tarzı değişiklikleri tip 2 diyabeti önlemeye yardımcı olabilir.',
    },
  },
  diabetes: {
    range: '\u2265 6.5%',
    label: { en: 'Diabetes', tr: 'Diyabet' },
    color: 'danger',
    interpretation: {
      en: 'Your A1C indicates diabetes. Consult with your healthcare provider for proper management.',
      tr: 'A1C seviyeniz diyabet gösteriyor. Uygun yönetim için sağlık hizmeti sağlayıcınıza danışın.',
    },
  },
} as const;
