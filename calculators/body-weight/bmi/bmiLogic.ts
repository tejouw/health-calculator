import { BMIInput, BMICategory } from './bmiTypes';

export const bmiCategories: Record<BMICategory, any> = {
  underweight: {
    name: 'underweight',
    label: {
      en: 'Underweight',
      tr: 'Zayıf',
    },
    range: { min: 0, max: 18.5 },
    color: 'blue',
    interpretation: {
      en: 'Your BMI suggests you are underweight. This may indicate malnutrition or other health issues.',
      tr: 'VKİ değeriniz zayıf kategorisinde. Bu yetersiz beslenme veya diğer sağlık sorunlarına işaret edebilir.',
    },
  },
  normal: {
    name: 'normal',
    label: {
      en: 'Normal Weight',
      tr: 'Normal Kilo',
    },
    range: { min: 18.5, max: 25 },
    color: 'green',
    interpretation: {
      en: 'Your BMI is in the healthy range. Maintain your current lifestyle and eating habits.',
      tr: 'VKİ değeriniz sağlıklı aralıkta. Mevcut yaşam tarzınızı ve beslenme alışkanlıklarınızı koruyun.',
    },
  },
  overweight: {
    name: 'overweight',
    label: {
      en: 'Overweight',
      tr: 'Fazla Kilolu',
    },
    range: { min: 25, max: 30 },
    color: 'yellow',
    interpretation: {
      en: 'Your BMI indicates you are overweight. Consider adopting healthier eating habits and increasing physical activity.',
      tr: 'VKİ değeriniz fazla kilolu kategorisinde. Daha sağlıklı beslenme alışkanlıkları edinmeyi ve fiziksel aktiviteyi artırmayı düşünün.',
    },
  },
  obese: {
    name: 'obese',
    label: {
      en: 'Obese',
      tr: 'Obez',
    },
    range: { min: 30, max: 40 },
    color: 'orange',
    interpretation: {
      en: 'Your BMI indicates obesity. It is recommended to consult with a healthcare professional for a personalized weight management plan.',
      tr: 'VKİ değeriniz obezite kategorisinde. Kişiselleştirilmiş bir kilo yönetim planı için bir sağlık profesyoneli ile görüşmeniz önerilir.',
    },
  },
  severely_obese: {
    name: 'severely_obese',
    label: {
      en: 'Severely Obese',
      tr: 'Ciddi Obez',
    },
    range: { min: 40, max: 100 },
    color: 'red',
    interpretation: {
      en: 'Your BMI indicates severe obesity. Please consult with a healthcare professional immediately for medical guidance.',
      tr: 'VKİ değeriniz ciddi obezite kategorisinde. Lütfen tıbbi rehberlik için derhal bir sağlık profesyoneli ile görüşün.',
    },
  },
};

export function calculateBMI(input: BMIInput): number {
  let heightInMeters: number;
  let weightInKg: number;

  if (input.unit === 'imperial') {
    // Convert inches to meters and pounds to kg
    heightInMeters = input.height * 0.0254;
    weightInKg = input.weight * 0.453592;
  } else {
    // Already in metric
    heightInMeters = input.height / 100; // cm to meters
    weightInKg = input.weight;
  }

  const bmi = weightInKg / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10;
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  if (bmi < 40) return 'obese';
  return 'severely_obese';
}

export function getHealthyWeightRange(height: number, unit: 'metric' | 'imperial'): {
  min: number;
  max: number;
} {
  let heightInMeters: number;

  if (unit === 'imperial') {
    heightInMeters = height * 0.0254;
  } else {
    heightInMeters = height / 100;
  }

  const minWeight = 18.5 * heightInMeters * heightInMeters;
  const maxWeight = 25 * heightInMeters * heightInMeters;

  if (unit === 'imperial') {
    return {
      min: Math.round(minWeight / 0.453592),
      max: Math.round(maxWeight / 0.453592),
    };
  }

  return {
    min: Math.round(minWeight),
    max: Math.round(maxWeight),
  };
}
