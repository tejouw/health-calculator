import { A1CInput, A1CResult, a1cCategories } from './a1cTypes';

/**
 * Convert A1C to estimated Average Glucose (eAG)
 * Formula: eAG (mg/dL) = (28.7 × A1C) - 46.7
 * Source: American Diabetes Association
 */
export function calculateA1C(input: A1CInput): A1CResult {
  const { a1c } = input;

  // Calculate eAG in mg/dL
  const eAG_mgdl = 28.7 * a1c - 46.7;

  // Convert to mmol/L (divide by 18.018)
  const eAG_mmol = eAG_mgdl / 18.018;

  // Determine category
  let category: 'normal' | 'prediabetes' | 'diabetes';
  if (a1c < 5.7) {
    category = 'normal';
  } else if (a1c < 6.5) {
    category = 'prediabetes';
  } else {
    category = 'diabetes';
  }

  const categoryData = a1cCategories[category];

  return {
    a1c,
    eAG: {
      mgdl: parseFloat(eAG_mgdl.toFixed(1)),
      mmol: parseFloat(eAG_mmol.toFixed(1)),
    },
    category,
    interpretation: categoryData.interpretation,
  };
}

export const a1cInfo = {
  en: {
    what: 'A1C (also known as HbA1c or glycated hemoglobin) is a blood test that measures your average blood sugar levels over the past 2-3 months.',
    why: 'It is used to diagnose prediabetes and diabetes, and to monitor how well diabetes is being managed.',
    range: 'Normal: < 5.7% | Prediabetes: 5.7-6.4% | Diabetes: ≥ 6.5%',
  },
  tr: {
    what: 'A1C (HbA1c veya glikozillenmiş hemoglobin olarak da bilinir), son 2-3 aydaki ortalama kan şekeri seviyelerinizi ölçen bir kan testidir.',
    why: 'Prediyabet ve diyabeti teşhis etmek ve diyabetin ne kadar iyi yönetildiğini izlemek için kullanılır.',
    range: 'Normal: < %5.7 | Prediyabet: %5.7-6.4 | Diyabet: ≥ %6.5',
  },
};
