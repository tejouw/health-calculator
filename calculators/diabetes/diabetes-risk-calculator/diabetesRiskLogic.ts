import {
  DiabetesRiskInput,
  DiabetesRiskResult,
  DiabetesRiskSeverity,
  diabetesRiskSeverities,
} from './diabetesRiskTypes';

function getAgeScore(age: number): number {
  if (age < 45) return 0;
  if (age <= 54) return 2;
  if (age <= 64) return 3;
  return 4;
}

function getBmiScore(bmi: number): number {
  if (bmi < 25) return 0;
  if (bmi <= 30) return 1;
  return 3;
}

function getWaistScore(waistCm: number, gender: 'male' | 'female'): number {
  if (gender === 'male') {
    if (waistCm < 94) return 0;
    if (waistCm <= 102) return 3;
    return 4;
  }
  if (waistCm < 80) return 0;
  if (waistCm <= 88) return 3;
  return 4;
}

function getFamilyHistoryScore(history: DiabetesRiskInput['familyHistory']): number {
  if (history === 'none') return 0;
  if (history === 'second-degree') return 3;
  return 5;
}

function getSeverity(total: number): DiabetesRiskSeverity {
  if (total < 7) return 'low';
  if (total < 12) return 'slightly-elevated';
  if (total < 15) return 'moderate';
  if (total <= 20) return 'high';
  return 'very-high';
}

function getTenYearRiskPercent(severity: DiabetesRiskSeverity): string {
  switch (severity) {
    case 'low':
      return '1%';
    case 'slightly-elevated':
      return '4%';
    case 'moderate':
      return '17%';
    case 'high':
      return '33%';
    case 'very-high':
      return '50%';
  }
}

export function calculateDiabetesRisk(input: DiabetesRiskInput): DiabetesRiskResult {
  const ageScore = getAgeScore(input.age);
  const bmiScore = getBmiScore(input.bmi);
  const waistScore = getWaistScore(input.waistCircumference, input.gender);
  const activityScore = input.physicallyActive ? 0 : 2;
  const dietScore = input.eatsVegetablesFruits ? 0 : 1;
  const bloodPressureScore = input.bloodPressureMedication ? 2 : 0;
  const glucoseScore = input.highBloodGlucoseHistory ? 5 : 0;
  const familyHistoryScore = getFamilyHistoryScore(input.familyHistory);

  const totalScore =
    ageScore +
    bmiScore +
    waistScore +
    activityScore +
    dietScore +
    bloodPressureScore +
    glucoseScore +
    familyHistoryScore;

  const severity = getSeverity(totalScore);

  return {
    totalScore,
    severity,
    tenYearRiskPercent: getTenYearRiskPercent(severity),
    category: diabetesRiskSeverities[severity],
    breakdown: {
      ageScore,
      bmiScore,
      waistScore,
      activityScore,
      dietScore,
      bloodPressureScore,
      glucoseScore,
      familyHistoryScore,
    },
  };
}

export const diabetesRiskInfo = {
  en: {
    title: 'About the FINDRISC Diabetes Risk Score',
    description:
      'The Finnish Diabetes Risk Score (FINDRISC) is a validated screening questionnaire developed by Professor Jaakko Tuomilehto and the Finnish Diabetes Association. It estimates the 10-year risk of developing type 2 diabetes using eight well-established risk factors and is recommended by the International Diabetes Federation and the World Health Organization.',
    note: 'This tool is a screening aid, not a diagnosis. A high score does not mean you have diabetes, but it signals that a proper medical evaluation with blood glucose testing is recommended. Up to 70% of type 2 diabetes cases can be prevented or delayed through lifestyle changes.',
  },
  tr: {
    title: 'FINDRISC Diyabet Risk Skoru Hakkında',
    description:
      'Finlandiya Diyabet Risk Skoru (FINDRISC), Prof. Jaakko Tuomilehto ve Finlandiya Diyabet Derneği tarafından geliştirilmiş, bilimsel olarak doğrulanmış bir tarama anketidir. Sekiz köklü risk faktörünü kullanarak 10 yıllık tip 2 diyabet geliştirme riskini tahmin eder ve Uluslararası Diyabet Federasyonu (IDF) ile Dünya Sağlık Örgütü (WHO) tarafından önerilmektedir.',
    note: 'Bu araç bir tarama yardımcısıdır, tanı aracı değildir. Yüksek bir puan diyabetiniz olduğu anlamına gelmez; kan şekeri testi içeren uygun bir tıbbi değerlendirmenin önerildiğine işaret eder. Tip 2 diyabet vakalarının %70 kadarı yaşam tarzı değişiklikleriyle önlenebilir veya geciktirilebilir.',
  },
};
