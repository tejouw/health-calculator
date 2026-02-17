import { GAD7Input, GAD7Result, gad7Severities } from './gad7Types';

function getAgeGroup(age: number): string {
  if (age < 18) return 'adolescent';
  if (age <= 25) return 'young-adult';
  if (age <= 45) return 'adult';
  if (age <= 64) return 'middle-aged';
  return 'older-adult';
}

function getDemographicInfo(age?: number, gender?: string) {
  if (!age && !gender) return undefined;

  const ageGroup = age ? getAgeGroup(age) : undefined;

  let genderSpecificRisks = { en: '', tr: '' };
  let recommendations = { en: '', tr: '' };

  // Gender-specific risks
  if (gender === 'female') {
    genderSpecificRisks = {
      en: 'Women are approximately twice as likely to be diagnosed with generalized anxiety disorder compared to men. Hormonal fluctuations during menstruation, pregnancy, postpartum period, and menopause can significantly influence anxiety levels. Women also tend to experience anxiety alongside depression more frequently.',
      tr: 'Kad\u0131nlarda yayg\u0131n anksiyete bozuklu\u011fu tan\u0131s\u0131 erkeklere k\u0131yasla yakla\u015f\u0131k iki kat daha fazla konur. Menstr\u00fcasyon, hamilelik, do\u011fum sonras\u0131 d\u00f6nem ve menopoz s\u0131ras\u0131ndaki hormonal dalgalanmalar anksiyete d\u00fczeylerini \u00f6nemli \u00f6l\u00e7\u00fcde etkileyebilir. Kad\u0131nlar ayr\u0131ca anksiyeteyi depresyonla birlikte daha s\u0131k ya\u015fama e\u011filimindedir.',
    };
    recommendations = {
      en: 'Consider hormonal factors in anxiety management. Building strong social support networks and practicing self-compassion are particularly beneficial. If anxiety worsens during specific phases of your menstrual cycle, discuss this with your healthcare provider.',
      tr: 'Anksiyete y\u00f6netiminde hormonal fakt\u00f6rleri g\u00f6z \u00f6n\u00fcnde bulundurun. G\u00fc\u00e7l\u00fc sosyal destek a\u011flar\u0131 olu\u015fturmak ve \u00f6z \u015fefkat pratikleri \u00f6zellikle faydal\u0131d\u0131r. Anksiyeteniz adet d\u00f6ng\u00fcn\u00fcz\u00fcn belirli evrelerinde k\u00f6t\u00fcle\u015fiyorsa, bunu sa\u011fl\u0131k hizmeti sa\u011flay\u0131c\u0131n\u0131zla g\u00f6r\u00fc\u015f\u00fcn.',
    };
  } else if (gender === 'male') {
    genderSpecificRisks = {
      en: 'While men have lower diagnosed rates of anxiety, they may underreport symptoms due to social stigma. Men with anxiety are more likely to self-medicate with alcohol or substances. Anxiety in men may manifest as irritability, anger, or physical symptoms like muscle tension and headaches rather than typical worry.',
      tr: 'Erkeklerde tan\u0131 konulan anksiyete oranlar\u0131 daha d\u00fc\u015f\u00fck olsa da, sosyal damgalama nedeniyle semptomlar\u0131 eksik bildiriyor olabilirler. Anksiyeteli erkekler alkol veya madde ile kendi kendine tedavi olma e\u011filimindedir. Erkeklerde anksiyete tipik endi\u015fe yerine sinirlilik, \u00f6fke veya kas gerginli\u011fi ve ba\u015f a\u011fr\u0131s\u0131 gibi fiziksel semptomlar olarak ortaya \u00e7\u0131kabilir.',
    };
    recommendations = {
      en: 'Seeking help for anxiety is a sign of strength, not weakness. Be aware that anxiety may show up as physical symptoms or irritability. Avoid using alcohol or substances to manage anxiety. Regular exercise and structured relaxation techniques are particularly effective.',
      tr: 'Anksiyete i\u00e7in yard\u0131m aramak g\u00fc\u00e7l\u00fcl\u00fck belirtisidir, zay\u0131fl\u0131k de\u011fil. Anksiyetenin fiziksel semptomlar veya sinirlilik olarak ortaya \u00e7\u0131kabilece\u011finin fark\u0131nda olun. Anksiyeteyi y\u00f6netmek i\u00e7in alkol veya madde kullanmaktan ka\u00e7\u0131n\u0131n. D\u00fczenli egzersiz ve yap\u0131land\u0131r\u0131lm\u0131\u015f gev\u015feme teknikleri \u00f6zellikle etkilidir.',
    };
  }

  // Age-specific recommendations
  if (ageGroup) {
    if (ageGroup === 'young-adult') {
      recommendations.en += ' Young adults (18-25) often experience anxiety related to academic performance, career decisions, social media pressure, and relationship concerns. Limiting screen time, building in-person social connections, and developing time management skills can help.';
      recommendations.tr += ' Gen\u00e7 yeti\u015fkinler (18-25) genellikle akademik performans, kariyer kararlar\u0131, sosyal medya bask\u0131s\u0131 ve ili\u015fki endi\u015feleriyle ilgili anksiyete ya\u015far. Ekran s\u00fcresini s\u0131n\u0131rlamak, y\u00fcz y\u00fcze sosyal ba\u011flant\u0131lar kurmak ve zaman y\u00f6netimi becerilerini geli\u015ftirmek yard\u0131mc\u0131 olabilir.';
    } else if (ageGroup === 'older-adult') {
      recommendations.en += ' Older adults (65+) may experience anxiety related to health concerns, loss of independence, bereavement, or isolation. Anxiety in older adults is often underdiagnosed. Gentle physical activity, social engagement, and cognitive behavioral therapy adapted for older adults are recommended.';
      recommendations.tr += ' Ya\u015fl\u0131 yeti\u015fkinler (65+) sa\u011fl\u0131k endi\u015feleri, ba\u011f\u0131ms\u0131zl\u0131k kayb\u0131, yas veya izolasyonla ilgili anksiyete ya\u015fayabilir. Ya\u015fl\u0131 yeti\u015fkinlerde anksiyete genellikle yetersiz te\u015fhis edilir. Hafif fiziksel aktivite, sosyal kat\u0131l\u0131m ve ya\u015fl\u0131 yeti\u015fkinler i\u00e7in uyarlanm\u0131\u015f bili\u015fsel davran\u0131\u015f\u00e7\u0131 terapi \u00f6nerilir.';
    } else if (ageGroup === 'middle-aged') {
      recommendations.en += ' Middle-aged adults (46-64) may face anxiety from work stress, financial concerns, caregiving responsibilities, and health worries. Establishing boundaries, delegating responsibilities, and prioritizing self-care are essential strategies.';
      recommendations.tr += ' Orta ya\u015fl\u0131 yeti\u015fkinler (46-64) i\u015f stresi, finansal endi\u015feler, bak\u0131m verme sorumluluklar\u0131 ve sa\u011fl\u0131k kayg\u0131lar\u0131ndan kaynaklanan anksiyetle kar\u015f\u0131la\u015fabilir. S\u0131n\u0131rlar belirlemek, sorumluluklar\u0131 devretmek ve \u00f6z bak\u0131m\u0131 \u00f6nceliklendirmek temel stratejilerdir.';
    }
  }

  return {
    ageGroup,
    genderSpecificRisks,
    recommendations,
  };
}

export function calculateGAD7(input: GAD7Input): GAD7Result {
  const { answers, age, gender } = input;

  // Calculate total score (0-21)
  const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

  // Determine severity
  let severity: 'minimal' | 'mild' | 'moderate' | 'severe';
  if (totalScore <= 4) {
    severity = 'minimal';
  } else if (totalScore <= 9) {
    severity = 'mild';
  } else if (totalScore <= 14) {
    severity = 'moderate';
  } else {
    severity = 'severe';
  }

  const category = gad7Severities[severity];
  const demographicInfo = getDemographicInfo(age, gender);

  return {
    totalScore,
    severity,
    category,
    demographicInfo,
  };
}

export const gad7Info = {
  en: {
    title: 'About GAD-7',
    description:
      'The Generalized Anxiety Disorder 7-item (GAD-7) scale is a validated screening tool for generalized anxiety disorder. It measures the severity of anxiety symptoms experienced over the past 2 weeks.',
    note: 'This is a screening tool, not a diagnostic instrument. A high score suggests the need for further evaluation by a qualified mental health professional.',
    crisis: 'Crisis Resources: Crisis Text Line: Text HOME to 741741 (US) | Anxiety & Depression Association: adaa.org',
  },
  tr: {
    title: 'GAD-7 Hakk\u0131nda',
    description:
      'Yayg\u0131n Anksiyete Bozuklu\u011fu 7-madde (GAD-7) \u00f6l\u00e7e\u011fi, yayg\u0131n anksiyete bozuklu\u011fu i\u00e7in do\u011frulanm\u0131\u015f bir tarama arac\u0131d\u0131r. Son 2 haftada ya\u015fanan anksiyete semptomlar\u0131n\u0131n \u015fiddetini \u00f6l\u00e7er.',
    note: 'Bu bir tarama arac\u0131d\u0131r, tan\u0131 arac\u0131 de\u011fildir. Y\u00fcksek bir skor, nitelikli bir ruh sa\u011fl\u0131\u011f\u0131 uzman\u0131 taraf\u0131ndan daha fazla de\u011ferlendirme yap\u0131lmas\u0131 gerekti\u011fini g\u00f6sterir.',
    crisis: 'Kriz Kaynaklar\u0131: Ruh Sa\u011fl\u0131\u011f\u0131 Acil Yard\u0131m Hatt\u0131: 182 (TR)',
  },
};
