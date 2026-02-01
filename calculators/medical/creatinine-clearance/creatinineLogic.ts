import { CreatinineClearanceInput, CreatinineClearanceResult } from './creatinineTypes';

/**
 * Cockcroft-Gault formula for Creatinine Clearance
 * CrCl = [(140 - age) × weight (kg)] / [72 × serum Cr (mg/dL)]
 * For females: multiply by 0.85
 */
export function calculateCreatinineClearance(input: CreatinineClearanceInput): CreatinineClearanceResult {
  const { age, gender, weight, weightUnit, creatinine, creatinineUnit } = input;

  // Convert weight to kg if needed
  const weightKg = weightUnit === 'lbs' ? weight / 2.20462 : weight;

  // Convert creatinine to mg/dL if needed
  const creatinineMgDl = creatinineUnit === 'umol' ? creatinine / 88.42 : creatinine;

  // Cockcroft-Gault formula
  let clearance = ((140 - age) * weightKg) / (72 * creatinineMgDl);

  // Apply gender correction
  if (gender === 'female') {
    clearance *= 0.85;
  }

  // Calculate per body weight (mL/min/kg)
  const clearancePerBodyWeight = clearance / weightKg;

  // Interpretation
  let interpretation: { en: string; tr: string };
  if (clearance >= 90) {
    interpretation = {
      en: 'Normal kidney function. Creatinine clearance is within healthy range.',
      tr: 'Normal böbrek fonksiyonu. Kreatinin klirensi sağlıklı aralıkta.',
    };
  } else if (clearance >= 60) {
    interpretation = {
      en: 'Mild kidney function decrease. Monitor kidney health regularly.',
      tr: 'Hafif böbrek fonksiyonu azalması. Böbrek sağlığını düzenli izleyin.',
    };
  } else if (clearance >= 30) {
    interpretation = {
      en: 'Moderate kidney function decrease. Consult with your healthcare provider.',
      tr: 'Orta derecede böbrek fonksiyonu azalması. Sağlık hizmeti sağlayıcınıza danışın.',
    };
  } else if (clearance >= 15) {
    interpretation = {
      en: 'Severe kidney function decrease. Specialist care required.',
      tr: 'Ciddi böbrek fonksiyonu azalması. Uzman bakımı gereklidir.',
    };
  } else {
    interpretation = {
      en: 'Kidney failure. Immediate medical attention required.',
      tr: 'Böbrek yetmezliği. Acil tıbbi müdahale gereklidir.',
    };
  }

  return {
    clearance: parseFloat(clearance.toFixed(1)),
    clearancePerBodyWeight: parseFloat(clearancePerBodyWeight.toFixed(2)),
    interpretation,
  };
}

export const creatinineInfo = {
  en: {
    title: 'About Creatinine Clearance',
    description:
      'Creatinine clearance estimates how well your kidneys are filtering creatinine from your blood. It is calculated using the Cockcroft-Gault formula.',
    normal: 'Normal range: 90-120 mL/min for adults',
    note: 'This calculation is an estimate. For accurate measurement, a 24-hour urine collection may be needed.',
  },
  tr: {
    title: 'Kreatinin Klirensi Hakkında',
    description:
      'Kreatinin klirensi, böbreklerinizin kanınızdan kreatinini ne kadar iyi filtrelediğini tahmin eder. Cockcroft-Gault formülü kullanılarak hesaplanır.',
    normal: 'Normal aralık: Yetişkinler için 90-120 mL/dk',
    note: 'Bu hesaplama bir tahminidir. Doğru ölçüm için 24 saatlik idrar toplama gerekebilir.',
  },
};
