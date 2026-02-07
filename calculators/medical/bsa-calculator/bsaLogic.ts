import {
  BSAInput,
  BSAResult,
  bsaCategories,
  bsaFormulas,
  ageGroups,
  chemotherapyDrugs,
  BurnAssessment,
  ruleOfNines,
} from './bsaTypes';

/**
 * Convert height to centimeters
 */
function heightToCm(height: number, unit: 'cm' | 'ft-in'): number {
  if (unit === 'cm') return height;
  const feet = Math.floor(height);
  const inches = Math.round((height - feet) * 100);
  return feet * 30.48 + inches * 2.54;
}

/**
 * Convert weight to kilograms
 */
function weightToKg(weight: number, unit: 'kg' | 'lbs'): number {
  return unit === 'kg' ? weight : weight * 0.453592;
}

/**
 * Calculate BMI
 */
function calculateBMI(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  return parseFloat((weightKg / (heightM * heightM)).toFixed(1));
}

/**
 * Calculate Adjusted BSA for obese patients
 * Uses the formula: Adjusted BSA = Ideal BSA + 0.4 * (Actual BSA - Ideal BSA)
 */
function calculateAdjustedBSA(actualBSA: number, bmi: number): number | undefined {
  if (bmi <= 30) return undefined;

  // Estimate ideal BSA (rough approximation for BMI 22)
  const adjustmentFactor = Math.min((bmi - 30) / 10, 1); // Cap at BMI 40
  const adjustment = actualBSA * 0.1 * adjustmentFactor;
  const adjustedBSA = actualBSA - adjustment;

  return parseFloat(adjustedBSA.toFixed(2));
}

/**
 * Du Bois formula (1916) - Most widely used
 * BSA (m²) = 0.007184 × Height(cm)^0.725 × Weight(kg)^0.425
 */
function calculateDuBois(heightCm: number, weightKg: number): number {
  return 0.007184 * Math.pow(heightCm, 0.725) * Math.pow(weightKg, 0.425);
}

/**
 * Mosteller formula (1987) - Simpler, clinically preferred
 * BSA (m²) = √[(Height(cm) × Weight(kg)) / 3600]
 */
function calculateMosteller(heightCm: number, weightKg: number): number {
  return Math.sqrt((heightCm * weightKg) / 3600);
}

/**
 * Haycock formula (1978) - Accurate for children
 * BSA (m²) = 0.024265 × Height(cm)^0.3964 × Weight(kg)^0.5378
 */
function calculateHaycock(heightCm: number, weightKg: number): number {
  return 0.024265 * Math.pow(heightCm, 0.3964) * Math.pow(weightKg, 0.5378);
}

/**
 * Gehan and George formula (1970) - Used in oncology
 * BSA (m²) = 0.0235 × Height(cm)^0.42246 × Weight(kg)^0.51456
 */
function calculateGehanGeorge(heightCm: number, weightKg: number): number {
  return 0.0235 * Math.pow(heightCm, 0.42246) * Math.pow(weightKg, 0.51456);
}

/**
 * Get age group and normal BSA range
 */
function getAgeGroup(age: number): {
  label: { en: string; tr: string };
  normalRange: string;
} | undefined {
  if (!age) return undefined;

  if (age < 1 / 12) return { ...ageGroups.neonate, normalRange: ageGroups.neonate.normalBSA };
  if (age < 1) return { ...ageGroups.infant, normalRange: ageGroups.infant.normalBSA };
  if (age < 3) return { ...ageGroups.toddler, normalRange: ageGroups.toddler.normalBSA };
  if (age < 5) return { ...ageGroups.preschool, normalRange: ageGroups.preschool.normalBSA };
  if (age < 12) return { ...ageGroups.schoolAge, normalRange: ageGroups.schoolAge.normalBSA };
  if (age < 18) return { ...ageGroups.adolescent, normalRange: ageGroups.adolescent.normalBSA };
  if (age < 40) return { ...ageGroups.youngAdult, normalRange: ageGroups.youngAdult.normalBSA };
  if (age < 65) return { ...ageGroups.middleAge, normalRange: ageGroups.middleAge.normalBSA };
  return { ...ageGroups.elderly, normalRange: ageGroups.elderly.normalBSA };
}

/**
 * Recommend best formula based on patient characteristics
 */
function recommendFormula(
  age: number | undefined,
  bmi: number
): {
  formula: string;
  reason: { en: string; tr: string };
} {
  if (age && age < 18) {
    return {
      formula: 'Haycock (1978)',
      reason: {
        en: 'Recommended for pediatric patients - validated in children',
        tr: 'Pediatrik hastalar için önerilir - çocuklarda valide edilmiştir',
      },
    };
  }

  if (bmi > 35) {
    return {
      formula: 'Mosteller (1987) with adjustment',
      reason: {
        en: 'For obesity (BMI > 35), use adjusted BSA to prevent overdosing',
        tr: 'Obezite için (BMI > 35), aşırı dozdan kaçınmak için düzeltilmiş BSA kullanın',
      },
    };
  }

  return {
    formula: 'Mosteller (1987)',
    reason: {
      en: 'Most commonly used in modern clinical practice - simple and accurate',
      tr: 'Modern klinik pratikte en çok kullanılan - basit ve doğru',
    },
  };
}

/**
 * Calculate cardiac index (CO / BSA)
 */
function calculateCardiacIndex(cardiacOutput: number, bsa: number): number {
  return parseFloat((cardiacOutput / bsa).toFixed(2));
}

/**
 * Calculate drug dosages based on BSA
 */
function calculateDrugDosages(bsa: number): Array<{
  drug: string;
  standardDose: string;
  calculatedDose: string;
  indication: { en: string; tr: string };
}> {
  return chemotherapyDrugs.map((drug) => ({
    drug: drug.name,
    standardDose:
      typeof drug.standardDose === 'number'
        ? `${drug.standardDose} ${drug.unit}`
        : drug.standardDose,
    calculatedDose:
      typeof drug.standardDose === 'number'
        ? `${Math.round(drug.standardDose * bsa)} mg`
        : 'Requires GFR calculation',
    indication: drug.indication,
  }));
}

/**
 * Calculate percentile position (simplified)
 */
function calculatePercentile(bsa: number, age: number | undefined, normalRange: string): number {
  if (!age) return 50;

  const [min, max] = normalRange.split('-').map((v) => parseFloat(v));
  const range = max - min;
  const position = (bsa - min) / range;

  if (position < 0) return 5;
  if (position > 1) return 95;

  return Math.round(position * 100);
}

/**
 * Calculate burn fluid requirements using Parkland formula
 * 4 mL × weight (kg) × % body surface area burned
 */
export function calculateBurnAssessment(
  weightKg: number,
  burnPercentage: number
): BurnAssessment {
  const totalFluid = 4 * weightKg * burnPercentage;
  const firstEightHours = totalFluid / 2;

  let category: 'minor' | 'moderate' | 'major' | 'critical';
  if (burnPercentage < 10) category = 'minor';
  else if (burnPercentage < 20) category = 'moderate';
  else if (burnPercentage < 40) category = 'major';
  else category = 'critical';

  return {
    burnPercentage,
    fluidRequirement24h: Math.round(totalFluid),
    fluidRequirementFirst8h: Math.round(firstEightHours),
    category,
  };
}

/**
 * Calculate Body Surface Area using specified formula
 */
export function calculateBSA(input: BSAInput): BSAResult {
  const { height, heightUnit, weight, weightUnit, age, formula, cardiacOutput } = input;

  // Convert to metric units
  const heightCm = heightToCm(height, heightUnit);
  const weightKg = weightToKg(weight, weightUnit);

  // Calculate all formulas
  const allFormulas = {
    dubois: parseFloat(calculateDuBois(heightCm, weightKg).toFixed(2)),
    mosteller: parseFloat(calculateMosteller(heightCm, weightKg).toFixed(2)),
    haycock: parseFloat(calculateHaycock(heightCm, weightKg).toFixed(2)),
    gehanGeorge: parseFloat(calculateGehanGeorge(heightCm, weightKg).toFixed(2)),
  };

  // Get BSA based on selected formula
  let bsa: number;
  switch (formula) {
    case 'dubois':
      bsa = allFormulas.dubois;
      break;
    case 'mosteller':
      bsa = allFormulas.mosteller;
      break;
    case 'haycock':
      bsa = allFormulas.haycock;
      break;
    case 'gehan-george':
      bsa = allFormulas.gehanGeorge;
      break;
    default:
      bsa = allFormulas.dubois;
  }

  // Calculate BMI
  const bmi = calculateBMI(heightCm, weightKg);

  // Calculate adjusted BSA if obese
  const adjustedBSA = calculateAdjustedBSA(bsa, bmi);

  // Determine category
  let category;
  if (bsa < 1.5) {
    category = bsaCategories.low;
  } else if (bsa <= 2.0) {
    category = bsaCategories.normal;
  } else {
    category = bsaCategories.high;
  }

  // Get age group
  const ageGroup = age ? getAgeGroup(age) : undefined;

  // Calculate percentile
  const percentile = ageGroup
    ? calculatePercentile(bsa, age, ageGroup.normalRange)
    : undefined;

  // Recommend formula
  const recommendedFormula = recommendFormula(age, bmi);

  // Calculate cardiac index if CO provided
  const cardiacIndex = cardiacOutput
    ? calculateCardiacIndex(cardiacOutput, bsa)
    : undefined;

  // Calculate drug dosages
  const drugDosages = calculateDrugDosages(bsa);

  // Medical uses
  const medicalUses = {
    en: [
      `Chemotherapy dosing: Calculate drug doses (typically in mg/m²)`,
      `Cardiac index: Normalize cardiac output (CI = CO / BSA)${
        cardiacIndex ? ` = ${cardiacIndex} L/min/m²` : ''
      }`,
      `Renal function: GFR normalization to 1.73 m²`,
      `Burn assessment: Calculate burn percentage and fluid requirements`,
      `Drug dosing: Antibiotics, immunosuppressants, and other medications`,
    ],
    tr: [
      `Kemoterapi dozajı: İlaç dozlarını hesaplayın (genellikle mg/m² cinsinden)`,
      `Kardiyak indeks: Kardiyak çıktıyı normalize edin (CI = CO / BSA)${
        cardiacIndex ? ` = ${cardiacIndex} L/dk/m²` : ''
      }`,
      `Böbrek fonksiyonu: GFR normalizasyonu 1.73 m²'ye`,
      `Yanık değerlendirmesi: Yanık yüzdesini ve sıvı gereksinimlerini hesaplayın`,
      `İlaç dozajı: Antibiyotikler, immünosüpresanlar ve diğer ilaçlar`,
    ],
  };

  return {
    bsa,
    formula: bsaFormulas[formula].name.en,
    allFormulas,
    category,
    medicalUses,
    bmi,
    adjustedBSA,
    cardiacIndex,
    ageGroup: ageGroup
      ? {
          ...ageGroup,
          percentile,
        }
      : undefined,
    recommendedFormula,
    drugDosages,
  };
}

export const bsaInfo = {
  en: {
    title: 'About Body Surface Area (BSA)',
    description:
      'Body Surface Area (BSA) is a measurement of the total surface area of the human body expressed in square meters (m²). It is widely used in clinical medicine to calculate drug dosages, assess cardiac and renal function, and determine chemotherapy doses.',
    formula:
      'Multiple formulas exist for calculating BSA. The Du Bois formula (1916) is the most widely used gold standard, though Mosteller (1987) is preferred for quick clinical estimates due to its simplicity.',
    units: 'BSA is measured in square meters (m²)',
    normalRange: 'Average adult BSA: 1.7 m² (range: 1.5-2.0 m²)',
  },
  tr: {
    title: 'Vücut Yüzey Alanı (VYA) Hakkında',
    description:
      'Vücut Yüzey Alanı (VYA), insan vücudunun toplam yüzey alanının metrekare (m²) cinsinden ifade edilen bir ölçümüdür. Klinik tıpta ilaç dozajlarını hesaplamak, kardiyak ve renal fonksiyonu değerlendirmek ve kemoterapi dozlarını belirlemek için yaygın olarak kullanılır.',
    formula:
      'BSA hesaplamak için birden fazla formül vardır. Du Bois formülü (1916) en yaygın kullanılan altın standarttır, ancak Mosteller (1987) basitliği nedeniyle hızlı klinik tahminler için tercih edilir.',
    units: 'VYA metrekare (m²) cinsinden ölçülür',
    normalRange: 'Ortalama yetişkin VYA: 1.7 m² (aralık: 1.5-2.0 m²)',
  },
};

// Save to localStorage
export function saveBSAHistory(
  bsa: number,
  weight: number,
  height: number,
  age?: number
): void {
  if (typeof window === 'undefined') return;

  const history = getBSAHistory();
  history.push({
    date: new Date().toISOString(),
    bsa,
    weight,
    height,
    age,
  });

  // Keep only last 10 entries
  const recentHistory = history.slice(-10);
  localStorage.setItem('bsaHistory', JSON.stringify(recentHistory));
}

// Get from localStorage
export function getBSAHistory(): Array<{
  date: string;
  bsa: number;
  weight: number;
  height: number;
  age?: number;
}> {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem('bsaHistory');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}
