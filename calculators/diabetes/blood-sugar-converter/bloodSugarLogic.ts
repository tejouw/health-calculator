import { BloodSugarInput, BloodSugarResult } from './bloodSugarTypes';

const CONVERSION_FACTOR = 18.018; // mg/dL to mmol/L conversion

export function convertBloodSugar(input: BloodSugarInput): BloodSugarResult {
  const { value, unit } = input;

  let mgdl: number;
  let mmol: number;

  if (unit === 'mgdl') {
    mgdl = value;
    mmol = value / CONVERSION_FACTOR;
  } else {
    mmol = value;
    mgdl = value * CONVERSION_FACTOR;
  }

  // Determine category (fasting blood sugar)
  let category: 'low' | 'normal' | 'prediabetes' | 'diabetes';
  let interpretation: { en: string; tr: string };

  if (mgdl < 70) {
    category = 'low';
    interpretation = {
      en: 'Low blood sugar (hypoglycemia). Consume fast-acting carbohydrates immediately.',
      tr: 'Düşük kan şekeri (hipoglisemi). Hemen hızlı etkili karbonhidrat tüketin.',
    };
  } else if (mgdl <= 100) {
    category = 'normal';
    interpretation = {
      en: 'Normal fasting blood sugar level. Maintain a healthy lifestyle.',
      tr: 'Normal açlık kan şekeri seviyesi. Sağlıklı yaşam tarzınızı sürdürün.',
    };
  } else if (mgdl <= 125) {
    category = 'prediabetes';
    interpretation = {
      en: 'Prediabetes range (impaired fasting glucose). Lifestyle changes are recommended.',
      tr: 'Prediyabet aralığı (bozulmuş açlık glukozu). Yaşam tarzı değişiklikleri önerilir.',
    };
  } else {
    category = 'diabetes';
    interpretation = {
      en: 'Diabetes range. Consult your healthcare provider for proper diabetes management.',
      tr: 'Diyabet aralığı. Uygun diyabet yönetimi için sağlık hizmeti sağlayıcınıza danışın.',
    };
  }

  return {
    mgdl: parseFloat(mgdl.toFixed(1)),
    mmol: parseFloat(mmol.toFixed(1)),
    category,
    interpretation,
  };
}

export const bloodSugarInfo = {
  en: {
    title: 'About Blood Sugar Units',
    description:
      'Blood glucose can be measured in mg/dL (milligrams per deciliter) or mmol/L (millimoles per liter). The conversion factor is 18.018.',
    note: 'These ranges are for fasting blood sugar (8+ hours without food). Post-meal values will be higher.',
  },
  tr: {
    title: 'Kan Şekeri Birimleri Hakkında',
    description:
      'Kan glukozu mg/dL (desilitre başına miligram) veya mmol/L (litre başına milimol) cinsinden ölçülebilir. Dönüşüm faktörü 18.018\'dir.',
    note: 'Bu aralıklar açlık kan şekeri (8+ saat yemek yemeden) içindir. Yemek sonrası değerler daha yüksek olacaktır.',
  },
};
