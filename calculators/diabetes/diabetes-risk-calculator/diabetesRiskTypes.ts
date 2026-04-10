export type DiabetesRiskSeverity =
  | 'low'
  | 'slightly-elevated'
  | 'moderate'
  | 'high'
  | 'very-high';

export type Gender = 'male' | 'female';

export interface DiabetesRiskInput {
  age: number;
  gender: Gender;
  bmi: number;
  waistCircumference: number;
  physicallyActive: boolean;
  eatsVegetablesFruits: boolean;
  bloodPressureMedication: boolean;
  highBloodGlucoseHistory: boolean;
  familyHistory: 'none' | 'second-degree' | 'first-degree';
}

export interface DiabetesRiskResult {
  totalScore: number;
  severity: DiabetesRiskSeverity;
  tenYearRiskPercent: string;
  category: {
    label: { en: string; tr: string };
    range: string;
    description: { en: string; tr: string };
    recommendation: { en: string; tr: string };
    color: 'success' | 'primary' | 'warning' | 'danger';
  };
  breakdown: {
    ageScore: number;
    bmiScore: number;
    waistScore: number;
    activityScore: number;
    dietScore: number;
    bloodPressureScore: number;
    glucoseScore: number;
    familyHistoryScore: number;
  };
}

export const diabetesRiskSeverities = {
  low: {
    range: '0-6',
    label: { en: 'Low Risk', tr: 'Düşük Risk' },
    description: {
      en: 'Your FINDRISC score suggests a low risk of developing type 2 diabetes within the next 10 years. Approximately 1 out of 100 people in this group will develop diabetes.',
      tr: 'FINDRISC puanınız, önümüzdeki 10 yıl içinde tip 2 diyabet geliştirme riskinizin düşük olduğunu gösterir. Bu gruptaki her 100 kişiden yaklaşık 1 kişi diyabet geliştirir.',
    },
    recommendation: {
      en: 'Continue your healthy lifestyle. Maintain a balanced diet rich in vegetables, regular physical activity of at least 30 minutes daily, and a healthy weight. Consider reassessing your risk every few years.',
      tr: 'Sağlıklı yaşam tarzınızı sürdürün. Sebze yönünden zengin dengeli beslenme, her gün en az 30 dakika düzenli fiziksel aktivite ve sağlıklı bir vücut ağırlığını koruyun. Riskinizi birkaç yılda bir tekrar değerlendirin.',
    },
    color: 'success' as const,
  },
  'slightly-elevated': {
    range: '7-11',
    label: { en: 'Slightly Elevated Risk', tr: 'Hafif Yüksek Risk' },
    description: {
      en: 'Your FINDRISC score suggests a slightly elevated risk. Approximately 1 out of 25 people (4%) in this group will develop type 2 diabetes within 10 years.',
      tr: 'FINDRISC puanınız hafif yüksek bir riske işaret ediyor. Bu gruptaki her 25 kişiden yaklaşık 1 kişi (%4) 10 yıl içinde tip 2 diyabet geliştirir.',
    },
    recommendation: {
      en: 'Pay attention to your lifestyle. Focus on increasing daily physical activity, improving your diet, and monitoring your weight. Discuss your results with your doctor at your next visit.',
      tr: 'Yaşam tarzınıza dikkat edin. Günlük fiziksel aktiviteyi artırmaya, beslenmenizi iyileştirmeye ve kilonuzu takip etmeye odaklanın. Bir sonraki ziyaretinizde sonuçlarınızı doktorunuzla konuşun.',
    },
    color: 'primary' as const,
  },
  moderate: {
    range: '12-14',
    label: { en: 'Moderate Risk', tr: 'Orta Risk' },
    description: {
      en: 'Your FINDRISC score indicates a moderate risk. Approximately 1 out of 6 people (17%) in this group will develop type 2 diabetes within 10 years.',
      tr: 'FINDRISC puanınız orta düzeyde bir riske işaret ediyor. Bu gruptaki her 6 kişiden yaklaşık 1 kişi (%17) 10 yıl içinde tip 2 diyabet geliştirir.',
    },
    recommendation: {
      en: 'Consult a healthcare professional to discuss lifestyle changes. A structured program with dietary improvements, regular exercise, and potential weight loss can substantially reduce your risk. Consider a fasting blood glucose test.',
      tr: 'Yaşam tarzı değişikliklerini görüşmek için bir sağlık profesyoneline danışın. Beslenme iyileştirmeleri, düzenli egzersiz ve olası kilo kaybı içeren yapılandırılmış bir program riskinizi önemli ölçüde azaltabilir. Açlık kan şekeri testini düşünün.',
    },
    color: 'warning' as const,
  },
  high: {
    range: '15-20',
    label: { en: 'High Risk', tr: 'Yüksek Risk' },
    description: {
      en: 'Your FINDRISC score indicates a high risk. Approximately 1 out of 3 people (33%) in this group will develop type 2 diabetes within 10 years.',
      tr: 'FINDRISC puanınız yüksek bir riske işaret ediyor. Bu gruptaki her 3 kişiden yaklaşık 1 kişi (%33) 10 yıl içinde tip 2 diyabet geliştirir.',
    },
    recommendation: {
      en: 'See your doctor as soon as possible for a medical evaluation. Blood glucose tests (fasting glucose and HbA1c) are strongly recommended. Significant lifestyle changes and medical monitoring are important to prevent the onset of diabetes.',
      tr: 'Tıbbi değerlendirme için en kısa zamanda doktorunuza görünün. Kan şekeri testleri (açlık glukozu ve HbA1c) şiddetle önerilir. Diyabetin başlamasını önlemek için önemli yaşam tarzı değişiklikleri ve tıbbi takip kritik önemdedir.',
    },
    color: 'danger' as const,
  },
  'very-high': {
    range: '20+',
    label: { en: 'Very High Risk', tr: 'Çok Yüksek Risk' },
    description: {
      en: 'Your FINDRISC score indicates a very high risk. Approximately 1 out of 2 people (50%) in this group will develop type 2 diabetes within 10 years.',
      tr: 'FINDRISC puanınız çok yüksek bir riske işaret ediyor. Bu gruptaki her 2 kişiden yaklaşık 1 kişi (%50) 10 yıl içinde tip 2 diyabet geliştirir.',
    },
    recommendation: {
      en: 'Urgent medical evaluation is recommended. You may already have prediabetes or undiagnosed type 2 diabetes. A glucose tolerance test, HbA1c test, and comprehensive metabolic assessment are essential. Early intervention can prevent serious complications.',
      tr: 'Acil tıbbi değerlendirme önerilir. Prediyabet veya teşhis edilmemiş tip 2 diyabetiniz olabilir. Glukoz tolerans testi, HbA1c testi ve kapsamlı metabolik değerlendirme şarttır. Erken müdahale ciddi komplikasyonları önleyebilir.',
    },
    color: 'danger' as const,
  },
} as const;
