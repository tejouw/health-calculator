import { MAPInput, MAPResult, MAPCategory, MAPCategoryInfo } from './mapTypes';

export const mapCategories: Record<MAPCategory, MAPCategoryInfo> = {
  low: {
    name: 'low',
    range: { min: 0, max: 60 },
    label: {
      en: 'Low MAP (Hypotension)',
      tr: 'Düşük MAP (Hipotansiyon)',
    },
    color: '#EF4444',
    interpretation: {
      en: 'A MAP below 60 mmHg may not adequately perfuse vital organs such as the brain, heart, and kidneys. Prolonged low MAP can cause organ damage, dizziness, fainting, and shock.',
      tr: 'MAP değerinin 60 mmHg altında olması beyin, kalp ve böbrek gibi hayati organlara yeterli kan akışı sağlanamadığını gösterebilir. Uzun süreli düşük MAP organ hasarı, baş dönmesi, bayılma ve şok oluşturabilir.',
    },
    recommendation: {
      en: 'Seek medical attention immediately. Possible causes include severe dehydration, blood loss, sepsis, heart failure, or medication side effects.',
      tr: 'Derhal tıbbi destek alın. Olası nedenler arasında ciddi sıvı kaybı, kanama, sepsis, kalp yetmezliği veya ilaç yan etkileri yer alır.',
    },
  },
  lowNormal: {
    name: 'lowNormal',
    range: { min: 60, max: 70 },
    label: {
      en: 'Borderline Low MAP',
      tr: 'Sınır Değerde Düşük MAP',
    },
    color: '#F59E0B',
    interpretation: {
      en: 'A MAP between 60 and 70 mmHg is generally enough to perfuse organs at rest, but may be insufficient during physical activity or stress. Some clinical guidelines target 65 mmHg as the minimum for critical care.',
      tr: 'MAP değerinin 60-70 mmHg arasında olması istirahatte organ perfüzyonu için genellikle yeterlidir, ancak fiziksel aktivite veya stres durumunda yetersiz kalabilir. Bazı klinik kılavuzlarda yoğun bakım için minimum 65 mmHg hedeflenir.',
    },
    recommendation: {
      en: 'Monitor closely, especially if you experience symptoms like dizziness, fatigue, or weakness. Discuss with your doctor if persistent.',
      tr: 'Baş dönmesi, halsizlik veya zayıflık gibi belirtiler varsa yakın takip yapın. Sürekli bu değerde ise doktorunuza danışın.',
    },
  },
  normal: {
    name: 'normal',
    range: { min: 70, max: 100 },
    label: {
      en: 'Normal MAP',
      tr: 'Normal MAP',
    },
    color: '#10B981',
    interpretation: {
      en: 'A MAP between 70 and 100 mmHg is the ideal range for healthy organ perfusion in most adults. This indicates that your circulatory system is delivering oxygen and nutrients to your organs effectively.',
      tr: 'MAP değerinin 70-100 mmHg arasında olması çoğu yetişkinde sağlıklı organ perfüzyonu için ideal aralıktır. Dolaşım sisteminizin organlarınıza yeterli oksijen ve besin taşıdığını gösterir.',
    },
    recommendation: {
      en: 'Keep up the good work. Maintain a balanced diet, regular exercise, healthy weight, and adequate sleep to keep your blood pressure in this range.',
      tr: 'Bu değeri korumak için dengeli beslenme, düzenli egzersiz, sağlıklı kilo ve yeterli uyku gibi alışkanlıklarınızı sürdürün.',
    },
  },
  elevated: {
    name: 'elevated',
    range: { min: 100, max: 110 },
    label: {
      en: 'Elevated MAP',
      tr: 'Yüksek MAP',
    },
    color: '#F97316',
    interpretation: {
      en: 'A MAP between 100 and 110 mmHg suggests above-normal arterial pressure. While not immediately dangerous, sustained levels in this range may stress the heart and blood vessels over time.',
      tr: 'MAP değerinin 100-110 mmHg arasında olması normalin üzerinde arter basıncı olduğunu gösterir. Akut tehlike oluşturmasa da uzun süreli bu değerde kalp ve damarlar üzerinde stres yaratabilir.',
    },
    recommendation: {
      en: 'Lifestyle changes can help: reduce sodium intake, manage stress, increase physical activity, limit alcohol, and maintain a healthy weight. Schedule a check-up with your doctor.',
      tr: 'Yaşam tarzı değişiklikleri yardımcı olabilir: tuz alımını azaltın, stresi yönetin, fiziksel aktiviteyi artırın, alkolü sınırlayın ve sağlıklı bir kilo koruyun. Doktorunuzdan kontrol randevusu alın.',
    },
  },
  high: {
    name: 'high',
    range: { min: 110, max: 999 },
    label: {
      en: 'High MAP (Hypertension Risk)',
      tr: 'Yüksek MAP (Hipertansiyon Riski)',
    },
    color: '#DC2626',
    interpretation: {
      en: 'A MAP above 110 mmHg often indicates hypertension and significantly increases the risk of stroke, heart attack, kidney damage, and other cardiovascular complications. Sustained high MAP places severe stress on arteries and organs.',
      tr: 'MAP değerinin 110 mmHg üzerinde olması çoğunlukla hipertansiyon belirtisidir ve felç, kalp krizi, böbrek hasarı ve diğer kardiyovasküler komplikasyon riskini önemli ölçüde artırır. Sürekli yüksek MAP arter ve organlar üzerinde ciddi stres yaratır.',
    },
    recommendation: {
      en: 'Consult a healthcare provider promptly. You may need blood pressure medication along with lifestyle changes including sodium restriction, weight loss, regular aerobic exercise, and stress management.',
      tr: 'En kısa süre içinde bir sağlık kuruluşuna başvurun. Tuz kısıtlaması, kilo verme, düzenli aerobik egzersiz ve stres yönetimi gibi yaşam tarzı değişikliklerinin yanı sıra tansiyon ilacı gerekebilir.',
    },
  },
};

export function calculateMAP(input: MAPInput): MAPResult {
  const { systolic, diastolic } = input;

  // Standard formula: MAP = DBP + (1/3)(SBP - DBP) = (2*DBP + SBP) / 3
  const map = Math.round((2 * diastolic + systolic) / 3);
  const pulsePressure = systolic - diastolic;

  let category: MAPCategory;
  if (map < 60) category = 'low';
  else if (map < 70) category = 'lowNormal';
  else if (map < 100) category = 'normal';
  else if (map < 110) category = 'elevated';
  else category = 'high';

  let perfusionStatus: MAPResult['perfusionStatus'];
  if (map < 60) perfusionStatus = 'inadequate';
  else if (map < 70) perfusionStatus = 'borderline';
  else if (map < 100) perfusionStatus = 'adequate';
  else perfusionStatus = 'elevated';

  return { map, pulsePressure, category, perfusionStatus };
}

export interface MAPValidation {
  isValid: boolean;
  error?: string;
}

export function validateMAPInput(input: MAPInput, locale: 'en' | 'tr'): MAPValidation {
  const { systolic, diastolic } = input;

  if (!systolic || !diastolic || isNaN(systolic) || isNaN(diastolic)) {
    return {
      isValid: false,
      error:
        locale === 'tr'
          ? 'Lütfen geçerli sistolik ve diyastolik değerler girin.'
          : 'Please enter valid systolic and diastolic values.',
    };
  }

  if (systolic < 50 || systolic > 250) {
    return {
      isValid: false,
      error:
        locale === 'tr'
          ? 'Sistolik basınç 50 ile 250 mmHg arasında olmalıdır.'
          : 'Systolic pressure must be between 50 and 250 mmHg.',
    };
  }

  if (diastolic < 30 || diastolic > 150) {
    return {
      isValid: false,
      error:
        locale === 'tr'
          ? 'Diyastolik basınç 30 ile 150 mmHg arasında olmalıdır.'
          : 'Diastolic pressure must be between 30 and 150 mmHg.',
    };
  }

  if (diastolic >= systolic) {
    return {
      isValid: false,
      error:
        locale === 'tr'
          ? 'Diyastolik basınç, sistolik basınçtan küçük olmalıdır.'
          : 'Diastolic pressure must be lower than systolic pressure.',
    };
  }

  return { isValid: true };
}
