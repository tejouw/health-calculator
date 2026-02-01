import { PHQ9Input, PHQ9Result, phq9Severities } from './phq9Types';

export function calculatePHQ9(input: PHQ9Input): PHQ9Result {
  const { answers } = input;

  // Calculate total score (0-27)
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  // Determine severity
  let severity: 'minimal' | 'mild' | 'moderate' | 'moderately-severe' | 'severe';
  if (totalScore <= 4) {
    severity = 'minimal';
  } else if (totalScore <= 9) {
    severity = 'mild';
  } else if (totalScore <= 14) {
    severity = 'moderate';
  } else if (totalScore <= 19) {
    severity = 'moderately-severe';
  } else {
    severity = 'severe';
  }

  const category = phq9Severities[severity];

  return {
    totalScore,
    severity,
    category,
  };
}

export const phq9Info = {
  en: {
    title: 'About PHQ-9',
    description:
      'The Patient Health Questionnaire-9 (PHQ-9) is a validated screening tool for depression. It asks about symptoms experienced over the past 2 weeks.',
    note: 'This is a screening tool, not a diagnostic instrument. If you are experiencing severe symptoms or thoughts of self-harm, please seek immediate professional help.',
    crisis: 'Crisis Resources: National Suicide Prevention Lifeline: 988 (US)',
  },
  tr: {
    title: 'PHQ-9 Hakkında',
    description:
      'Hasta Sağlığı Anketi-9 (PHQ-9), depresyon için doğrulanmış bir tarama aracıdır. Son 2 haftada yaşanan semptomları sorar.',
    note: 'Bu bir tarama aracıdır, tanı aracı değildir. Ciddi semptomlar veya kendine zarar verme düşünceleri yaşıyorsanız, lütfen hemen profesyonel yardım arayın.',
    crisis: 'Kriz Kaynakları: Ruh Sağlığı Acil Yardım Hattı: 182 (TR)',
  },
};
