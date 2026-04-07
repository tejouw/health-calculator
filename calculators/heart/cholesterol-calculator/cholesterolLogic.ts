import {
  CholesterolInput,
  CholesterolResult,
  CholesterolCategory,
  HDLCategory,
  LDLCategory,
  TriglyceridesCategory,
  RiskLevel,
} from './cholesterolTypes';

// Conversion factor: 1 mmol/L = 38.67 mg/dL for cholesterol, 1 mmol/L = 88.57 mg/dL for triglycerides
const CHOLESTEROL_FACTOR = 38.67;
const TRIGLYCERIDES_FACTOR = 88.57;

function toMgDl(value: number, unit: 'mgdl' | 'mmol', type: 'cholesterol' | 'triglycerides'): number {
  if (unit === 'mgdl') return value;
  return type === 'triglycerides'
    ? Math.round(value * TRIGLYCERIDES_FACTOR)
    : Math.round(value * CHOLESTEROL_FACTOR);
}

export function getTotalCholesterolCategory(total: number): CholesterolCategory {
  if (total < 200) return 'desirable';
  if (total < 240) return 'borderline_high';
  return 'high';
}

export function getHDLCategory(hdl: number): HDLCategory {
  if (hdl < 40) return 'low';
  if (hdl < 60) return 'normal';
  return 'optimal';
}

export function getLDLCategory(ldl: number): LDLCategory {
  if (ldl < 100) return 'optimal';
  if (ldl < 130) return 'near_optimal';
  if (ldl < 160) return 'borderline_high';
  if (ldl < 190) return 'high';
  return 'very_high';
}

export function getTriglyceridesCategory(trig: number): TriglyceridesCategory {
  if (trig < 150) return 'normal';
  if (trig < 200) return 'borderline_high';
  if (trig < 500) return 'high';
  return 'very_high';
}

export function getOverallRisk(
  totalCat: CholesterolCategory,
  hdlCat: HDLCategory,
  ldlCat: LDLCategory,
  trigCat: TriglyceridesCategory
): RiskLevel {
  let riskScore = 0;

  if (totalCat === 'high') riskScore += 3;
  else if (totalCat === 'borderline_high') riskScore += 1;

  if (hdlCat === 'low') riskScore += 3;
  else if (hdlCat === 'optimal') riskScore -= 1;

  if (ldlCat === 'very_high') riskScore += 4;
  else if (ldlCat === 'high') riskScore += 3;
  else if (ldlCat === 'borderline_high') riskScore += 1;

  if (trigCat === 'very_high') riskScore += 4;
  else if (trigCat === 'high') riskScore += 2;
  else if (trigCat === 'borderline_high') riskScore += 1;

  if (riskScore >= 8) return 'very_high';
  if (riskScore >= 5) return 'high';
  if (riskScore >= 2) return 'moderate';
  return 'low';
}

export function calculateCholesterol(input: CholesterolInput): CholesterolResult {
  const total = toMgDl(input.totalCholesterol, input.unit, 'cholesterol');
  const hdl = toMgDl(input.hdl, input.unit, 'cholesterol');
  const ldl = toMgDl(input.ldl, input.unit, 'cholesterol');
  const trig = toMgDl(input.triglycerides, input.unit, 'triglycerides');

  const nonHdl = total - hdl;
  const totalHdlRatio = Math.round((total / hdl) * 10) / 10;
  const ldlHdlRatio = Math.round((ldl / hdl) * 10) / 10;
  const trigHdlRatio = Math.round((trig / hdl) * 10) / 10;

  const totalCategory = getTotalCholesterolCategory(total);
  const hdlCategory = getHDLCategory(hdl);
  const ldlCategory = getLDLCategory(ldl);
  const triglyceridesCategory = getTriglyceridesCategory(trig);
  const overallRisk = getOverallRisk(totalCategory, hdlCategory, ldlCategory, triglyceridesCategory);

  return {
    totalCholesterol: total,
    hdl,
    ldl,
    triglycerides: trig,
    nonHdl,
    totalHdlRatio,
    ldlHdlRatio,
    triglyceridesHdlRatio: trigHdlRatio,
    totalCategory,
    hdlCategory,
    ldlCategory,
    triglyceridesCategory,
    overallRisk,
  };
}

export function validateCholesterolInput(
  input: CholesterolInput,
  locale: 'en' | 'tr'
): { isValid: boolean; error?: string } {
  const { totalCholesterol, hdl, ldl, triglycerides } = input;

  if (!totalCholesterol || !hdl || !ldl || !triglycerides) {
    return {
      isValid: false,
      error: locale === 'tr' ? 'Lütfen tüm alanları doldurun' : 'Please fill in all fields',
    };
  }

  if (totalCholesterol <= 0 || hdl <= 0 || ldl <= 0 || triglycerides <= 0) {
    return {
      isValid: false,
      error: locale === 'tr' ? 'Değerler sıfırdan büyük olmalıdır' : 'Values must be greater than zero',
    };
  }

  if (hdl >= totalCholesterol) {
    return {
      isValid: false,
      error:
        locale === 'tr'
          ? 'HDL değeri toplam kolesterolden küçük olmalıdır'
          : 'HDL must be less than total cholesterol',
    };
  }

  return { isValid: true };
}

export const cholesterolCategoryLabels = {
  totalCholesterol: {
    desirable: { en: 'Desirable', tr: 'İdeal', color: 'green' },
    borderline_high: { en: 'Borderline High', tr: 'Sınırda Yüksek', color: 'yellow' },
    high: { en: 'High', tr: 'Yüksek', color: 'red' },
  },
  hdl: {
    low: { en: 'Low (Risk Factor)', tr: 'Düşük (Risk Faktörü)', color: 'red' },
    normal: { en: 'Normal', tr: 'Normal', color: 'yellow' },
    optimal: { en: 'Optimal (Protective)', tr: 'Optimal (Koruyucu)', color: 'green' },
  },
  ldl: {
    optimal: { en: 'Optimal', tr: 'Optimal', color: 'green' },
    near_optimal: { en: 'Near Optimal', tr: 'Optimale Yakın', color: 'green' },
    borderline_high: { en: 'Borderline High', tr: 'Sınırda Yüksek', color: 'yellow' },
    high: { en: 'High', tr: 'Yüksek', color: 'orange' },
    very_high: { en: 'Very High', tr: 'Çok Yüksek', color: 'red' },
  },
  triglycerides: {
    normal: { en: 'Normal', tr: 'Normal', color: 'green' },
    borderline_high: { en: 'Borderline High', tr: 'Sınırda Yüksek', color: 'yellow' },
    high: { en: 'High', tr: 'Yüksek', color: 'orange' },
    very_high: { en: 'Very High', tr: 'Çok Yüksek', color: 'red' },
  },
  overallRisk: {
    low: { en: 'Low Risk', tr: 'Düşük Risk', color: 'green' },
    moderate: { en: 'Moderate Risk', tr: 'Orta Risk', color: 'yellow' },
    high: { en: 'High Risk', tr: 'Yüksek Risk', color: 'orange' },
    very_high: { en: 'Very High Risk', tr: 'Çok Yüksek Risk', color: 'red' },
  },
};
