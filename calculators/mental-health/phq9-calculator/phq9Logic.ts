import { PHQ9Input, PHQ9Result, phq9Severities } from './phq9Types';

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
      en: 'Women are approximately twice as likely to experience depression, particularly during hormonal transitions (postpartum, perimenopause). Higher rates of trauma exposure and psychosocial stressors also contribute to increased risk.',
      tr: 'Kadınlar, özellikle hormonal geçiş dönemlerinde (doğum sonrası, menopoz öncesi) depresyon yaşama olasılığı erkeklere göre yaklaşık iki kat daha fazladır. Daha yüksek travma maruziyet oranları ve psikososyal stresörler de artmış riske katkıda bulunur.',
    };
    recommendations = {
      en: 'Consider screening for postpartum depression if recently given birth. Hormone-related mood changes should be discussed with your healthcare provider. Building strong social support networks is particularly beneficial.',
      tr: 'Yakın zamanda doğum yaptıysanız doğum sonrası depresyon taraması yapılmasını düşünün. Hormonla ilişkili ruh hali değişiklikleri sağlık hizmeti sağlayıcınızla tartışılmalıdır. Güçlü sosyal destek ağları oluşturmak özellikle faydalıdır.',
    };
  } else if (gender === 'male') {
    genderSpecificRisks = {
      en: 'While men have lower overall depression rates, they are at significantly higher risk of suicide due to tendency to use more lethal means and lower help-seeking behavior. Depression in men may manifest differently, including through anger, irritability, and risk-taking behaviors.',
      tr: 'Erkeklerde genel depresyon oranları daha düşük olsa da, daha öldürücü yöntemler kullanma eğilimi ve daha düşük yardım arama davranışı nedeniyle intihar riski önemli ölçüde daha yüksektir. Erkeklerde depresyon farklı şekilde tezahür edebilir; öfke, sinirlilik ve risk alma davranışları şeklinde ortaya çıkabilir.',
    };
    recommendations = {
      en: 'Do not hesitate to seek help - depression is a medical condition, not a sign of weakness. Consider talking to a healthcare provider even if symptoms seem mild. Physical activity and maintaining social connections are particularly important.',
      tr: 'Yardım aramaktan çekinmeyin - depresyon bir tıbbi durumdur, zayıflık belirtisi değildir. Semptomlar hafif görünse bile bir sağlık hizmeti sağlayıcısıyla konuşmayı düşünün. Fiziksel aktivite ve sosyal bağlantıları sürdürmek özellikle önemlidir.',
    };
  }

  // Age-specific recommendations
  if (ageGroup) {
    if (ageGroup === 'young-adult') {
      recommendations.en += ' Young adults (18-25) face unique stressors including academic pressure, career uncertainty, and identity formation. Campus counseling services or young adult support groups can be particularly helpful.';
      recommendations.tr += ' Genç yetişkinler (18-25) akademik baskı, kariyer belirsizliği ve kimlik oluşumu gibi benzersiz stresörlerle karşı karşıyadır. Kampüs danışmanlık hizmetleri veya genç yetişkin destek grupları özellikle yardımcı olabilir.';
    } else if (ageGroup === 'older-adult') {
      recommendations.en += ' Depression in older adults (65+) may be complicated by medical conditions, chronic pain, social isolation, and grief. Comprehensive medical evaluation is important to rule out underlying conditions. Social engagement and physical activity adapted to abilities are beneficial.';
      recommendations.tr += ' Yaşlı yetişkinlerde (65+) depresyon tıbbi durumlar, kronik ağrı, sosyal izolasyon ve yas nedeniyle karmaşık olabilir. Altta yatan durumları dışlamak için kapsamlı tıbbi değerlendirme önemlidir. Yeteneklere uyarlanmış sosyal katılım ve fiziksel aktivite faydalıdır.';
    } else if (ageGroup === 'middle-aged') {
      recommendations.en += ' Middle-aged adults (46-64) often face caregiving responsibilities, career pressures, and health concerns. Work-life balance and stress management are particularly important.';
      recommendations.tr += ' Orta yaşlı yetişkinler (46-64) genellikle bakım sorumlulukları, kariyer baskıları ve sağlık endişeleriyle karşı karşıyadır. İş-yaşam dengesi ve stres yönetimi özellikle önemlidir.';
    }
  }

  return {
    ageGroup,
    genderSpecificRisks,
    recommendations,
  };
}

export function calculatePHQ9(input: PHQ9Input): PHQ9Result {
  const { answers, age, gender } = input;

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
  const demographicInfo = getDemographicInfo(age, gender);

  return {
    totalScore,
    severity,
    category,
    demographicInfo,
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
