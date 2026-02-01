import { PSAInput, PSAResult, PSARiskLevel, PSARiskCategory } from './psaTypes';

export const psaRiskCategories: Record<PSARiskLevel, PSARiskCategory> = {
  low: {
    name: 'low',
    label: {
      en: 'Low',
      tr: 'Düşük',
    },
    range: { min: 0, max: 1 },
    color: 'green',
    interpretation: {
      en: 'Your PSA level is low, which is typically associated with a healthy prostate. Continue regular screening as recommended by your healthcare provider.',
      tr: 'PSA seviyeniz düşük, bu genellikle sağlıklı bir prostat ile ilişkilidir. Sağlık hizmeti sağlayıcınızın önerdiği şekilde düzenli taramaya devam edin.',
    },
  },
  normal: {
    name: 'normal',
    label: {
      en: 'Normal',
      tr: 'Normal',
    },
    range: { min: 1, max: 2.5 },
    color: 'blue',
    interpretation: {
      en: 'Your PSA level is within normal range for your age. Continue monitoring as advised by your doctor.',
      tr: 'PSA seviyeniz yaşınız için normal aralıkta. Doktorunuzun tavsiye ettiği şekilde izlemeye devam edin.',
    },
  },
  borderline: {
    name: 'borderline',
    label: {
      en: 'Borderline',
      tr: 'Sınırda',
    },
    range: { min: 2.5, max: 4 },
    color: 'yellow',
    interpretation: {
      en: 'Your PSA level is borderline. This may warrant further evaluation including repeat PSA test, digital rectal exam, or additional screening. Consult your healthcare provider.',
      tr: 'PSA seviyeniz sınırda. Bu, tekrarlanan PSA testi, dijital rektal muayene veya ek tarama dahil olmak üzere daha fazla değerlendirmeyi gerektirebilir. Sağlık hizmeti sağlayıcınıza danışın.',
    },
  },
  elevated: {
    name: 'elevated',
    label: {
      en: 'Elevated',
      tr: 'Yüksek',
    },
    range: { min: 4, max: 10 },
    color: 'orange',
    interpretation: {
      en: 'Your PSA level is elevated. This requires medical evaluation. Elevated PSA can indicate prostate cancer, but may also result from benign prostatic hyperplasia (BPH), prostatitis, or other conditions. Further testing is recommended.',
      tr: 'PSA seviyeniz yüksek. Bu tıbbi değerlendirme gerektirir. Yüksek PSA prostat kanserini gösterebilir, ancak iyi huylu prostat büyümesi (BPH), prostatit veya diğer durumlardan da kaynaklanabilir. İleri testler önerilir.',
    },
  },
  high: {
    name: 'high',
    label: {
      en: 'Very High',
      tr: 'Çok Yüksek',
    },
    range: { min: 10, max: 1000 },
    color: 'red',
    interpretation: {
      en: 'Your PSA level is very high. Immediate medical consultation is strongly recommended. This level significantly increases the probability of prostate cancer, though other conditions may also cause elevated PSA. Your doctor may recommend a prostate biopsy and additional diagnostic tests.',
      tr: 'PSA seviyeniz çok yüksek. Acil tıbbi konsültasyon şiddetle önerilir. Bu seviye prostat kanseri olasılığını önemli ölçüde artırır, ancak diğer durumlar da yüksek PSA\'ya neden olabilir. Doktorunuz prostat biyopsisi ve ek tanı testleri önerebilir.',
    },
  },
};

// Age-adjusted PSA reference ranges (ng/mL)
export function getAgeAdjustedRange(age: number): { min: number; max: number } {
  if (age < 50) {
    return { min: 0, max: 2.5 };
  } else if (age < 60) {
    return { min: 0, max: 3.5 };
  } else if (age < 70) {
    return { min: 0, max: 4.5 };
  } else {
    return { min: 0, max: 6.5 };
  }
}

export function getPSARiskLevel(psaValue: number, age: number): PSARiskLevel {
  const ageAdjusted = getAgeAdjustedRange(age);

  if (psaValue < 1) return 'low';
  if (psaValue <= ageAdjusted.max) return 'normal';
  if (psaValue < 4) return 'borderline';
  if (psaValue < 10) return 'elevated';
  return 'high';
}

export function calculatePSADensity(psaValue: number, prostateVolume: number): number {
  if (prostateVolume <= 0) return 0;
  return Math.round((psaValue / prostateVolume) * 1000) / 1000;
}

export function calculatePSAVelocity(
  currentPSA: number,
  previousPSA: number,
  monthsSincePrevious: number
): number {
  if (monthsSincePrevious <= 0) return 0;
  const years = monthsSincePrevious / 12;
  const velocity = (currentPSA - previousPSA) / years;
  return Math.round(velocity * 100) / 100;
}

export function evaluatePSA(input: PSAInput): PSAResult {
  const riskLevel = getPSARiskLevel(input.psaValue, input.age);
  const ageAdjustedNormal = getAgeAdjustedRange(input.age);
  const category = psaRiskCategories[riskLevel];

  let psaDensity: number | undefined;
  if (input.prostateVolume && input.prostateVolume > 0) {
    psaDensity = calculatePSADensity(input.psaValue, input.prostateVolume);
  }

  let psaVelocity: number | undefined;
  if (
    input.previousPSA !== undefined &&
    input.monthsSincePrevious &&
    input.monthsSincePrevious > 0
  ) {
    psaVelocity = calculatePSAVelocity(
      input.psaValue,
      input.previousPSA,
      input.monthsSincePrevious
    );
  }

  return {
    psaValue: input.psaValue,
    riskLevel,
    ageAdjustedNormal,
    psaDensity,
    psaVelocity,
    interpretation: category.interpretation,
  };
}
