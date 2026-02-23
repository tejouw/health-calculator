import { PSSInput, PSSResult, pssQuestions, pssSeverities } from './stressLevelTypes';

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

  if (gender === 'female') {
    genderSpecificRisks = {
      en: 'Women consistently report higher perceived stress levels than men across all age groups. Hormonal fluctuations during menstruation, pregnancy, postpartum, and menopause can amplify stress responses. Women also face unique stressors including gender-based discrimination, caregiving burdens, and balancing multiple roles.',
      tr: 'Kadınlar tüm yaş gruplarında erkeklerden sürekli olarak daha yüksek algılanan stres düzeyleri bildirmektedir. Adet, hamilelik, doğum sonrası ve menopoz dönemlerindeki hormonal dalgalanmalar stres tepkilerini artırabilir. Kadınlar ayrıca cinsiyet temelli ayrımcılık, bakım yükü ve birden fazla rolü dengeleme gibi benzersiz stresörlerle karşı karşıyadır.',
    };
    recommendations = {
      en: 'Consider hormone-aware stress management approaches. Building strong social support networks is particularly protective. Mind-body practices like yoga and meditation show strong evidence for stress reduction in women.',
      tr: 'Hormona duyarlı stres yönetimi yaklaşımlarını düşünün. Güçlü sosyal destek ağları oluşturmak özellikle koruyucudur. Yoga ve meditasyon gibi zihin-beden uygulamaları kadınlarda stres azaltma için güçlü kanıtlar göstermektedir.',
    };
  } else if (gender === 'male') {
    genderSpecificRisks = {
      en: 'Men may underreport stress due to societal expectations around masculinity. Stress in men often manifests through physical symptoms (headaches, muscle tension, digestive issues), irritability, anger, or increased risk-taking behavior rather than emotional expression.',
      tr: 'Erkekler, erkeklik etrafındaki toplumsal beklentiler nedeniyle stresi olduğundan az bildirebilir. Erkeklerde stres genellikle duygusal ifade yerine fiziksel belirtiler (baş ağrısı, kas gerginliği, sindirim sorunları), sinirlilik, öfke veya artan risk alma davranışı olarak ortaya çıkar.',
    };
    recommendations = {
      en: 'Physical activity is one of the most effective stress reduction strategies for men. Consider talking to a professional - seeking help is a sign of strength, not weakness. Limit alcohol and substance use as coping mechanisms.',
      tr: 'Fiziksel aktivite erkekler için en etkili stres azaltma stratejilerinden biridir. Bir uzmanla konuşmayı düşünün - yardım istemek zayıflık değil, güç işaretidir. Baş etme mekanizması olarak alkol ve madde kullanımını sınırlandırın.',
    };
  }

  if (ageGroup) {
    if (ageGroup === 'young-adult') {
      recommendations.en += ' Young adults (18-25) face unique stressors including academic pressure, career uncertainty, financial independence, and social media comparison. Campus counseling services and peer support groups can be valuable resources.';
      recommendations.tr += ' Genç yetişkinler (18-25) akademik baskı, kariyer belirsizliği, finansal bağımsızlık ve sosyal medya karşılaştırması gibi benzersiz stresörlerle karşı karşıyadır. Kampüs danışmanlık hizmetleri ve akran destek grupları değerli kaynaklar olabilir.';
    } else if (ageGroup === 'adult') {
      recommendations.en += ' Adults (26-45) often juggle career demands, relationship dynamics, and family responsibilities. Time management and boundary-setting skills can significantly reduce stress. Regular exercise and adequate sleep are foundational.';
      recommendations.tr += ' Yetişkinler (26-45) genellikle kariyer talepleri, ilişki dinamikleri ve aile sorumlulukları arasında denge kurmaya çalışır. Zaman yönetimi ve sınır belirleme becerileri stresi önemli ölçüde azaltabilir. Düzenli egzersiz ve yeterli uyku temeldir.';
    } else if (ageGroup === 'middle-aged') {
      recommendations.en += ' Middle-aged adults (46-64) may experience stress from caring for aging parents while supporting children, health concerns, and career transitions. Prioritizing self-care and seeking professional guidance for life transitions can be particularly helpful.';
      recommendations.tr += ' Orta yaşlı yetişkinler (46-64) yaşlanan ebeveynlere bakım verirken çocukları destekleme, sağlık endişeleri ve kariyer geçişlerinden kaynaklanan stres yaşayabilir. Öz bakıma öncelik vermek ve yaşam geçişleri için profesyonel rehberlik almak özellikle yardımcı olabilir.';
    } else if (ageGroup === 'older-adult') {
      recommendations.en += ' Older adults (65+) may face stressors related to health decline, loss of independence, bereavement, and social isolation. Maintaining social connections, staying physically active within capabilities, and engaging in meaningful activities are key stress buffers.';
      recommendations.tr += ' Yaşlı yetişkinler (65+) sağlık bozulması, bağımsızlık kaybı, yas ve sosyal izolasyonla ilgili stresörlerle karşılaşabilir. Sosyal bağlantıları sürdürmek, yetenekler dahilinde fiziksel olarak aktif kalmak ve anlamlı etkinliklerle meşgul olmak temel stres tamponlarıdır.';
    }
  }

  return {
    ageGroup,
    genderSpecificRisks,
    recommendations,
  };
}

function getPercentile(score: number): number {
  // Based on PSS-10 normative data (Cohen & Williamson, 1988)
  if (score <= 5) return 10;
  if (score <= 8) return 20;
  if (score <= 10) return 30;
  if (score <= 12) return 40;
  if (score <= 14) return 50;
  if (score <= 16) return 60;
  if (score <= 19) return 70;
  if (score <= 22) return 80;
  if (score <= 26) return 90;
  return 95;
}

export function calculatePSS(input: PSSInput): PSSResult {
  const { answers, age, gender } = input;

  // Calculate total score with reverse scoring for items 4, 5, 7, 8 (indices 3, 4, 6, 7)
  let totalScore = 0;
  for (let i = 0; i < answers.length; i++) {
    const question = pssQuestions[i];
    if (question.reversed) {
      totalScore += 4 - answers[i]; // Reverse: 0→4, 1→3, 2→2, 3→1, 4→0
    } else {
      totalScore += answers[i];
    }
  }

  // Determine severity
  let severity: 'low' | 'moderate' | 'high';
  if (totalScore <= 13) {
    severity = 'low';
  } else if (totalScore <= 26) {
    severity = 'moderate';
  } else {
    severity = 'high';
  }

  const category = pssSeverities[severity];
  const demographicInfo = getDemographicInfo(age, gender);
  const percentile = getPercentile(totalScore);

  // Calculate coping score from reversed items (4, 5, 7, 8)
  const copingIndices = [3, 4, 6, 7];
  const copingScore = copingIndices.reduce((sum, idx) => sum + answers[idx], 0);

  // Find top stressors (highest scoring non-reversed questions)
  const stressItems = answers
    .map((score, index) => ({
      questionId: index + 1,
      score: pssQuestions[index].reversed ? 0 : score,
      text: pssQuestions[index].text,
      isReversed: pssQuestions[index].reversed,
    }))
    .filter((item) => !item.isReversed && item.score >= 3)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ questionId, score, text }) => ({ questionId, score, text }));

  return {
    totalScore,
    severity,
    category,
    percentile,
    topStressors: stressItems,
    copingScore,
    demographicInfo,
  };
}

export const stressLevelInfo = {
  en: {
    title: 'About PSS-10',
    description:
      'The Perceived Stress Scale (PSS-10) is the most widely used psychological instrument for measuring the perception of stress. It was developed by Dr. Sheldon Cohen in 1983 and assesses how unpredictable, uncontrollable, and overloaded respondents find their lives over the past month.',
    note: 'This is a screening tool, not a diagnostic instrument. If you are experiencing severe stress or having thoughts of self-harm, please seek immediate professional help.',
    crisis: 'Crisis Resources: National Suicide Prevention Lifeline: 988 (US) | Crisis Text Line: Text HOME to 741741',
  },
  tr: {
    title: 'PSS-10 Hakkında',
    description:
      'Algılanan Stres Ölçeği (PSS-10), stres algısını ölçmek için en yaygın kullanılan psikolojik araçtır. 1983 yılında Dr. Sheldon Cohen tarafından geliştirilmiş olup, yanıtlayanların son bir ay içinde yaşamlarını ne kadar öngörülemez, kontrol edilemez ve aşırı yüklenmiş bulduklarını değerlendirir.',
    note: 'Bu bir tarama aracıdır, tanı aracı değildir. Ciddi stres yaşıyorsanız veya kendinize zarar verme düşünceleriniz varsa, lütfen hemen profesyonel yardım arayın.',
    crisis: 'Kriz Kaynakları: Ruh Sağlığı Acil Yardım Hattı: 182 (TR) | ALO 182 Psikolojik Destek Hattı',
  },
};
