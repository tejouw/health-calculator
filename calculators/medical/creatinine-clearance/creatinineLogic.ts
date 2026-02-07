import { CreatinineClearanceInput, CreatinineClearanceResult, CKDStage } from './creatinineTypes';

/**
 * Calculate Body Surface Area using Mosteller formula
 * BSA (m²) = √[(height (cm) × weight (kg)) / 3600]
 */
function calculateBSA(heightCm: number, weightKg: number): number {
  return Math.sqrt((heightCm * weightKg) / 3600);
}

/**
 * MDRD (Modification of Diet in Renal Disease) formula
 * GFR = 175 × (SCr)^-1.154 × (Age)^-0.203 × (0.742 if female) × (1.212 if African American)
 */
function calculateMDRD(age: number, gender: 'male' | 'female', creatinineMgDl: number, race: 'african' | 'other'): number {
  let gfr = 175 * Math.pow(creatinineMgDl, -1.154) * Math.pow(age, -0.203);
  if (gender === 'female') {
    gfr *= 0.742;
  }
  if (race === 'african') {
    gfr *= 1.212;
  }
  return gfr;
}

/**
 * CKD-EPI (Chronic Kidney Disease Epidemiology Collaboration) formula
 */
function calculateCKDEPI(age: number, gender: 'male' | 'female', creatinineMgDl: number, race: 'african' | 'other'): number {
  const kappa = gender === 'female' ? 0.7 : 0.9;
  const alpha = gender === 'female' ? -0.329 : -0.411;
  const minValue = Math.min(creatinineMgDl / kappa, 1);
  const maxValue = Math.max(creatinineMgDl / kappa, 1);

  let gfr = 141 * Math.pow(minValue, alpha) * Math.pow(maxValue, -1.209) * Math.pow(0.993, age);
  if (gender === 'female') {
    gfr *= 1.018;
  }
  if (race === 'african') {
    gfr *= 1.159;
  }
  return gfr;
}

/**
 * Determine CKD Stage based on GFR
 */
function getCKDStage(gfr: number): CKDStage {
  if (gfr >= 90) {
    return {
      stage: 1,
      name: { en: 'Stage 1 - Normal or high', tr: 'Evre 1 - Normal veya yüksek' },
      description: {
        en: 'Kidney damage with normal or increased GFR',
        tr: 'Normal veya artmış GFR ile böbrek hasarı'
      },
    };
  } else if (gfr >= 60) {
    return {
      stage: 2,
      name: { en: 'Stage 2 - Mildly decreased', tr: 'Evre 2 - Hafif azalma' },
      description: {
        en: 'Mild reduction in kidney function',
        tr: 'Böbrek fonksiyonunda hafif azalma'
      },
    };
  } else if (gfr >= 45) {
    return {
      stage: 3,
      name: { en: 'Stage 3a - Mild to moderate decrease', tr: 'Evre 3a - Hafif-orta azalma' },
      description: {
        en: 'Mild to moderate reduction in kidney function',
        tr: 'Böbrek fonksiyonunda hafif-orta azalma'
      },
    };
  } else if (gfr >= 30) {
    return {
      stage: 3,
      name: { en: 'Stage 3b - Moderate to severe decrease', tr: 'Evre 3b - Orta-ciddi azalma' },
      description: {
        en: 'Moderate to severe reduction in kidney function',
        tr: 'Böbrek fonksiyonunda orta-ciddi azalma'
      },
    };
  } else if (gfr >= 15) {
    return {
      stage: 4,
      name: { en: 'Stage 4 - Severe decrease', tr: 'Evre 4 - Ciddi azalma' },
      description: {
        en: 'Severe reduction in kidney function',
        tr: 'Böbrek fonksiyonunda ciddi azalma'
      },
    };
  } else {
    return {
      stage: 5,
      name: { en: 'Stage 5 - Kidney failure', tr: 'Evre 5 - Böbrek yetmezliği' },
      description: {
        en: 'Kidney failure (End-stage renal disease)',
        tr: 'Böbrek yetmezliği (Son dönem böbrek hastalığı)'
      },
    };
  }
}

/**
 * Get drug adjustment recommendations
 */
function getDrugAdjustment(gfr: number): { en: string; tr: string } {
  if (gfr >= 60) {
    return {
      en: 'No dose adjustment needed for most medications. Always consult your healthcare provider.',
      tr: 'Çoğu ilaç için doz ayarlaması gerekmez. Her zaman sağlık hizmeti sağlayıcınıza danışın.',
    };
  } else if (gfr >= 30) {
    return {
      en: 'Dose adjustment may be needed for many medications. Consult your healthcare provider or pharmacist.',
      tr: 'Birçok ilaç için doz ayarlaması gerekebilir. Sağlık hizmeti sağlayıcınıza veya eczacınıza danışın.',
    };
  } else if (gfr >= 15) {
    return {
      en: 'Significant dose adjustments required for most medications. Close monitoring essential.',
      tr: 'Çoğu ilaç için önemli doz ayarlaması gereklidir. Yakın takip esastır.',
    };
  } else {
    return {
      en: 'Many medications contraindicated or require major adjustments. Specialist nephrology care required.',
      tr: 'Birçok ilaç kontrendike veya majör ayarlama gerektirir. Uzman nefroloji bakımı gereklidir.',
    };
  }
}

/**
 * Get recommendations based on kidney function
 */
function getRecommendations(gfr: number): Array<{ en: string; tr: string }> {
  const recommendations: Array<{ en: string; tr: string }> = [];

  if (gfr < 60) {
    recommendations.push({
      en: 'Schedule regular follow-up appointments with your healthcare provider',
      tr: 'Sağlık hizmeti sağlayıcınızla düzenli takip randevuları planlayın',
    });
    recommendations.push({
      en: 'Monitor blood pressure regularly and keep it under control',
      tr: 'Kan basıncını düzenli olarak izleyin ve kontrol altında tutun',
    });
    recommendations.push({
      en: 'Follow a kidney-friendly diet (low sodium, controlled protein)',
      tr: 'Böbrek dostu bir diyet uygulayın (düşük sodyum, kontrollü protein)',
    });
  }

  if (gfr < 45) {
    recommendations.push({
      en: 'Consider consultation with a nephrologist (kidney specialist)',
      tr: 'Bir nefrolog (böbrek uzmanı) ile görüşmeyi düşünün',
    });
    recommendations.push({
      en: 'Limit foods high in phosphorus and potassium',
      tr: 'Fosfor ve potasyum açısından zengin gıdaları sınırlayın',
    });
    recommendations.push({
      en: 'Stay hydrated but monitor fluid intake as advised',
      tr: 'Hidrate kalın ancak tavsiye edildiği şekilde sıvı alımını izleyin',
    });
  }

  if (gfr < 30) {
    recommendations.push({
      en: 'Prepare for possible dialysis or transplantation',
      tr: 'Olası diyaliz veya transplantasyona hazırlanın',
    });
    recommendations.push({
      en: 'Avoid NSAIDs and other nephrotoxic medications',
      tr: 'NSAİİ ve diğer nefrotoksik ilaçlardan kaçının',
    });
    recommendations.push({
      en: 'Regular monitoring of kidney function and electrolytes',
      tr: 'Böbrek fonksiyonu ve elektrolitlerin düzenli takibi',
    });
  }

  if (gfr < 15) {
    recommendations.push({
      en: 'Immediate nephrology care and dialysis planning required',
      tr: 'Acil nefroloji bakımı ve diyaliz planlaması gereklidir',
    });
    recommendations.push({
      en: 'Consider kidney transplant evaluation',
      tr: 'Böbrek nakli değerlendirmesini düşünün',
    });
  }

  return recommendations;
}

/**
 * Get risk factors
 */
function getRiskFactors(gfr: number, age: number, creatinine: number): Array<{ en: string; tr: string }> {
  const risks: Array<{ en: string; tr: string }> = [];

  if (gfr < 60) {
    risks.push({
      en: 'Increased risk of cardiovascular disease',
      tr: 'Artmış kardiyovasküler hastalık riski',
    });
  }

  if (gfr < 45) {
    risks.push({
      en: 'Higher risk of bone mineral disorders',
      tr: 'Daha yüksek kemik mineral bozuklukları riski',
    });
    risks.push({
      en: 'Increased anemia risk',
      tr: 'Artmış anemi riski',
    });
  }

  if (gfr < 30) {
    risks.push({
      en: 'Significant risk of electrolyte imbalances',
      tr: 'Önemli elektrolit dengesizliği riski',
    });
    risks.push({
      en: 'Risk of fluid overload',
      tr: 'Sıvı yükü riski',
    });
  }

  if (age > 65) {
    risks.push({
      en: 'Age-related decline in kidney function',
      tr: 'Yaşa bağlı böbrek fonksiyonu azalması',
    });
  }

  if (creatinine > 1.5) {
    risks.push({
      en: 'Elevated creatinine levels indicate reduced kidney function',
      tr: 'Yüksek kreatinin seviyeleri azalmış böbrek fonksiyonunu gösterir',
    });
  }

  return risks;
}

/**
 * Cockcroft-Gault formula for Creatinine Clearance with enhanced calculations
 * CrCl = [(140 - age) × weight (kg)] / [72 × serum Cr (mg/dL)]
 * For females: multiply by 0.85
 */
export function calculateCreatinineClearance(input: CreatinineClearanceInput): CreatinineClearanceResult {
  const { age, gender, weight, weightUnit, height, heightUnit, creatinine, creatinineUnit, race = 'other' } = input;

  // Convert weight to kg if needed
  const weightKg = weightUnit === 'lbs' ? weight / 2.20462 : weight;

  // Convert height to cm if needed
  const heightCm = heightUnit === 'in' ? height * 2.54 : height;

  // Convert creatinine to mg/dL if needed
  const creatinineMgDl = creatinineUnit === 'umol' ? creatinine / 88.42 : creatinine;

  // Calculate BSA
  const bsa = calculateBSA(heightCm, weightKg);

  // Cockcroft-Gault formula
  let clearance = ((140 - age) * weightKg) / (72 * creatinineMgDl);

  // Apply gender correction
  if (gender === 'female') {
    clearance *= 0.85;
  }

  // Calculate per body weight (mL/min/kg)
  const clearancePerBodyWeight = clearance / weightKg;

  // Calculate per BSA (mL/min/1.73m²)
  const clearancePerBSA = (clearance / bsa) * 1.73;

  // Calculate MDRD
  const mdrd = calculateMDRD(age, gender, creatinineMgDl, race);

  // Calculate CKD-EPI
  const ckdEpi = calculateCKDEPI(age, gender, creatinineMgDl, race);

  // Use CKD-EPI as the primary GFR estimate for staging
  const ckdStage = getCKDStage(ckdEpi);

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
    bsa: parseFloat(bsa.toFixed(2)),
    clearancePerBSA: parseFloat(clearancePerBSA.toFixed(1)),
    mdrd: parseFloat(mdrd.toFixed(1)),
    ckdEpi: parseFloat(ckdEpi.toFixed(1)),
    ckdStage,
    interpretation,
    recommendations: getRecommendations(ckdEpi),
    drugAdjustment: getDrugAdjustment(ckdEpi),
    riskFactors: getRiskFactors(ckdEpi, age, creatinineMgDl),
  };
}

export const creatinineInfo = {
  en: {
    title: 'About Creatinine Clearance',
    description:
      'Creatinine clearance estimates how well your kidneys are filtering creatinine from your blood. This calculator uses multiple formulas (Cockcroft-Gault, MDRD, and CKD-EPI) to provide comprehensive kidney function assessment.',
    normal: 'Normal range: 90-120 mL/min for adults',
    note: 'This calculation is an estimate. For accurate measurement, a 24-hour urine collection may be needed. The CKD-EPI formula is currently considered the most accurate for estimating GFR.',
    formulas: {
      cockcroftGault: 'Cockcroft-Gault: Traditional formula, weight-based',
      mdrd: 'MDRD: Widely used, considers age, gender, and race',
      ckdEpi: 'CKD-EPI: Most accurate modern formula for GFR estimation',
    },
  },
  tr: {
    title: 'Kreatinin Klirensi Hakkında',
    description:
      'Kreatinin klirensi, böbreklerinizin kanınızdan kreatinini ne kadar iyi filtrelediğini tahmin eder. Bu hesaplayıcı, kapsamlı böbrek fonksiyonu değerlendirmesi sağlamak için birden fazla formül (Cockcroft-Gault, MDRD ve CKD-EPI) kullanır.',
    normal: 'Normal aralık: Yetişkinler için 90-120 mL/dk',
    note: 'Bu hesaplama bir tahminidir. Doğru ölçüm için 24 saatlik idrar toplama gerekebilir. CKD-EPI formülü şu anda GFR tahmini için en doğru formül olarak kabul edilmektedir.',
    formulas: {
      cockcroftGault: 'Cockcroft-Gault: Geleneksel formül, ağırlık bazlı',
      mdrd: 'MDRD: Yaygın kullanılan, yaş, cinsiyet ve ırkı dikkate alır',
      ckdEpi: 'CKD-EPI: GFR tahmini için en doğru modern formül',
    },
  },
};
