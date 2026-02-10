import { BloodPressureResult, BloodPressureCategory } from './bloodPressureTypes';

/**
 * Determine blood pressure category based on AHA (American Heart Association) guidelines
 * @param systolic - Systolic pressure (mmHg)
 * @param diastolic - Diastolic pressure (mmHg)
 * @returns Blood pressure category
 */
export function determineBloodPressureCategory(
  systolic: number,
  diastolic: number
): BloodPressureCategory {
  // Hypertensive Crisis: Requires immediate medical attention
  if (systolic >= 180 || diastolic >= 120) {
    return 'hypertensive_crisis';
  }

  // Hypertension Stage 2
  if (systolic >= 140 || diastolic >= 90) {
    return 'hypertension_stage2';
  }

  // Hypertension Stage 1
  if (systolic >= 130 || diastolic >= 80) {
    return 'hypertension_stage1';
  }

  // Elevated
  if (systolic >= 120 && systolic < 130 && diastolic < 80) {
    return 'elevated';
  }

  // Normal
  return 'normal';
}

/**
 * Get interpretation and recommendations based on category
 */
export function getInterpretation(
  category: BloodPressureCategory,
  locale: 'en' | 'tr'
): BloodPressureResult['interpretation'] {
  const interpretations = {
    normal: {
      en: {
        title: 'Normal Blood Pressure',
        description: 'Your blood pressure is in the normal range. This is great for your heart health and overall wellbeing.',
        recommendations: [
          'Maintain a healthy lifestyle with regular exercise',
          'Eat a balanced diet rich in fruits and vegetables',
          'Limit sodium intake to less than 2,300mg per day',
          'Keep stress levels under control',
          'Get regular check-ups to monitor your blood pressure'
        ]
      },
      tr: {
        title: 'Normal Kan Basıncı',
        description: 'Kan basıncınız normal aralıkta. Bu kalp sağlığınız ve genel refahınız için harika.',
        recommendations: [
          'Düzenli egzersiz ile sağlıklı yaşam tarzını sürdürün',
          'Meyve ve sebze açısından zengin dengeli beslenin',
          'Sodyum alımını günde 2.300mg\'dan az tutun',
          'Stres seviyenizi kontrol altında tutun',
          'Kan basıncınızı izlemek için düzenli kontrol yaptırın'
        ]
      }
    },
    elevated: {
      en: {
        title: 'Elevated Blood Pressure',
        description: 'Your blood pressure is elevated. Without lifestyle changes, you are at risk for developing high blood pressure.',
        recommendations: [
          'Start or increase physical activity (at least 150 minutes per week)',
          'Adopt the DASH diet (Dietary Approaches to Stop Hypertension)',
          'Reduce sodium intake to less than 1,500mg per day',
          'Maintain a healthy weight or lose weight if needed',
          'Limit alcohol consumption and quit smoking',
          'Monitor your blood pressure regularly at home'
        ]
      },
      tr: {
        title: 'Yüksek Normal Kan Basıncı',
        description: 'Kan basıncınız yüksek normal seviyede. Yaşam tarzı değişiklikleri olmadan yüksek tansiyon geliştirme riskiniz var.',
        recommendations: [
          'Fiziksel aktiviteyi başlatın veya artırın (haftada en az 150 dakika)',
          'DASH diyeti uygulayın (Hipertansiyonu Durdurmaya Yönelik Beslenme)',
          'Sodyum alımını günde 1.500mg\'dan az tutun',
          'Sağlıklı kilonuzu koruyun veya gerekirse kilo verin',
          'Alkol tüketimini sınırlayın ve sigarayı bırakın',
          'Kan basıncınızı evde düzenli olarak izleyin'
        ]
      }
    },
    hypertension_stage1: {
      en: {
        title: 'Hypertension Stage 1',
        description: 'You have Stage 1 hypertension. Consult your doctor about lifestyle changes and possible medication.',
        recommendations: [
          'Schedule an appointment with your healthcare provider',
          'Increase physical activity significantly',
          'Follow the DASH diet strictly',
          'Reduce sodium to less than 1,500mg per day',
          'Lose weight if you are overweight (even 5-10 lbs helps)',
          'Stop smoking and limit alcohol',
          'Monitor blood pressure at home daily',
          'Consider stress-reduction techniques like meditation'
        ]
      },
      tr: {
        title: 'Hipertansiyon Evre 1',
        description: 'Evre 1 hipertansiyonunuz var. Yaşam tarzı değişiklikleri ve olası ilaç tedavisi için doktorunuza danışın.',
        recommendations: [
          'Sağlık uzmanınızla randevu alın',
          'Fiziksel aktiviteyi önemli ölçüde artırın',
          'DASH diyetini sıkı bir şekilde uygulayın',
          'Sodyumu günde 1.500mg\'dan az tutun',
          'Kilolu iseniz kilo verin (5-10 kg bile yardımcı olur)',
          'Sigarayı bırakın ve alkol tüketimini sınırlayın',
          'Kan basıncınızı evde her gün izleyin',
          'Meditasyon gibi stres azaltma tekniklerini deneyin'
        ]
      }
    },
    hypertension_stage2: {
      en: {
        title: 'Hypertension Stage 2',
        description: 'You have Stage 2 hypertension. See your doctor promptly. Medication and lifestyle changes are likely needed.',
        recommendations: [
          '⚠️ See your doctor as soon as possible',
          'You likely need blood pressure medication',
          'Make immediate lifestyle changes',
          'Follow all medical advice strictly',
          'Monitor blood pressure at home twice daily',
          'Drastically reduce sodium intake',
          'Increase physical activity under medical supervision',
          'Eliminate alcohol and tobacco use',
          'Consider underlying health conditions'
        ]
      },
      tr: {
        title: 'Hipertansiyon Evre 2',
        description: 'Evre 2 hipertansiyonunuz var. En kısa sürede doktorunuza görünün. İlaç tedavisi ve yaşam tarzı değişiklikleri gereklidir.',
        recommendations: [
          '⚠️ En kısa sürede doktorunuza görünün',
          'Muhtemelen kan basıncı ilacına ihtiyacınız var',
          'Hemen yaşam tarzı değişiklikleri yapın',
          'Tüm tıbbi tavsiyelere sıkı sıkıya uyun',
          'Kan basıncınızı evde günde iki kez izleyin',
          'Sodyum alımını drastik şekilde azaltın',
          'Tıbbi gözetim altında fiziksel aktiviteyi artırın',
          'Alkol ve tütün kullanımını tamamen bırakın',
          'Altta yatan sağlık durumlarını değerlendirin'
        ]
      }
    },
    hypertensive_crisis: {
      en: {
        title: '🚨 HYPERTENSIVE CRISIS',
        description: 'This is a medical emergency! Call emergency services (911) immediately if you have chest pain, shortness of breath, back pain, numbness, weakness, vision changes, or difficulty speaking.',
        recommendations: [
          '🚨 CALL 911 OR GO TO EMERGENCY ROOM IMMEDIATELY',
          'Do not wait to see if your blood pressure comes down',
          'Do not drive yourself - call an ambulance',
          'Take any prescribed emergency medication',
          'Rest and stay calm while waiting for help',
          'Have someone stay with you'
        ]
      },
      tr: {
        title: '🚨 HİPERTANSİF KRİZ',
        description: 'Bu tıbbi bir acil durumdur! Göğüs ağrısı, nefes darlığı, sırt ağrısı, uyuşma, güçsüzlük, görme değişiklikleri veya konuşma güçlüğü varsa hemen 112\'yi arayın.',
        recommendations: [
          '🚨 HEMEN 112\'Yİ ARAYIN VEYA ACİL SERVİSE GİDİN',
          'Kan basıncınızın düşmesini beklemeyin',
          'Kendiniz araba kullanmayın - ambulans çağırın',
          'Reçete edilen acil ilaçları alın',
          'Yardım gelene kadar dinlenin ve sakin kalmaya çalışın',
          'Yanınızda birinin olmasını sağlayın'
        ]
      }
    }
  };

  const texts = interpretations[category][locale];
  return texts;
}

/**
 * Get risk level and color based on category
 */
export function getRiskInfo(category: BloodPressureCategory): {
  riskLevel: BloodPressureResult['riskLevel'];
  color: string
} {
  const riskMap = {
    normal: { riskLevel: 'normal' as const, color: 'from-green-500 to-emerald-500' },
    elevated: { riskLevel: 'elevated' as const, color: 'from-yellow-500 to-orange-500' },
    hypertension_stage1: { riskLevel: 'high' as const, color: 'from-orange-500 to-red-500' },
    hypertension_stage2: { riskLevel: 'high' as const, color: 'from-red-500 to-rose-600' },
    hypertensive_crisis: { riskLevel: 'critical' as const, color: 'from-red-600 to-rose-700' }
  };

  return riskMap[category];
}

/**
 * Main calculation function
 */
export function calculateBloodPressure(
  systolic: number,
  diastolic: number,
  locale: 'en' | 'tr' = 'en'
): BloodPressureResult {
  const category = determineBloodPressureCategory(systolic, diastolic);
  const interpretation = getInterpretation(category, locale);
  const { riskLevel, color } = getRiskInfo(category);

  return {
    systolic,
    diastolic,
    category,
    interpretation,
    riskLevel,
    color
  };
}

/**
 * Validate blood pressure values
 */
export function validateBloodPressure(systolic: number, diastolic: number): {
  isValid: boolean;
  error?: string;
} {
  if (systolic < 70 || systolic > 250) {
    return { isValid: false, error: 'systolic_range' };
  }

  if (diastolic < 40 || diastolic > 200) {
    return { isValid: false, error: 'diastolic_range' };
  }

  if (diastolic >= systolic) {
    return { isValid: false, error: 'diastolic_higher' };
  }

  return { isValid: true };
}
