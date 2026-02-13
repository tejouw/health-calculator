import { VO2MaxInput, VO2MaxResult, VO2MaxCategory, VO2MaxNorm } from './vo2MaxTypes';

// VO2 Max norms by age and gender (ml/kg/min)
export const vo2MaxNorms: VO2MaxNorm[] = [
  {
    ageRange: [20, 29],
    gender: 'male',
    categories: {
      very_poor: [0, 32.9],
      poor: [33, 36.9],
      fair: [37, 41.9],
      good: [42, 46.9],
      excellent: [47, 52.9],
      superior: [53, 100],
    },
  },
  {
    ageRange: [20, 29],
    gender: 'female',
    categories: {
      very_poor: [0, 27.9],
      poor: [28, 31.9],
      fair: [32, 36.9],
      good: [37, 41.9],
      excellent: [42, 46.9],
      superior: [47, 100],
    },
  },
  {
    ageRange: [30, 39],
    gender: 'male',
    categories: {
      very_poor: [0, 31.9],
      poor: [32, 35.9],
      fair: [36, 40.9],
      good: [41, 45.9],
      excellent: [46, 51.9],
      superior: [52, 100],
    },
  },
  {
    ageRange: [30, 39],
    gender: 'female',
    categories: {
      very_poor: [0, 26.9],
      poor: [27, 30.9],
      fair: [31, 35.9],
      good: [36, 40.9],
      excellent: [41, 45.9],
      superior: [46, 100],
    },
  },
  {
    ageRange: [40, 49],
    gender: 'male',
    categories: {
      very_poor: [0, 30.9],
      poor: [31, 34.9],
      fair: [35, 39.9],
      good: [40, 44.9],
      excellent: [45, 49.9],
      superior: [50, 100],
    },
  },
  {
    ageRange: [40, 49],
    gender: 'female',
    categories: {
      very_poor: [0, 25.9],
      poor: [26, 29.9],
      fair: [30, 34.9],
      good: [35, 39.9],
      excellent: [40, 44.9],
      superior: [45, 100],
    },
  },
  {
    ageRange: [50, 59],
    gender: 'male',
    categories: {
      very_poor: [0, 26.9],
      poor: [27, 30.9],
      fair: [31, 35.9],
      good: [36, 40.9],
      excellent: [41, 45.9],
      superior: [46, 100],
    },
  },
  {
    ageRange: [50, 59],
    gender: 'female',
    categories: {
      very_poor: [0, 23.9],
      poor: [24, 27.9],
      fair: [28, 32.9],
      good: [33, 37.9],
      excellent: [38, 42.9],
      superior: [43, 100],
    },
  },
  {
    ageRange: [60, 100],
    gender: 'male',
    categories: {
      very_poor: [0, 24.9],
      poor: [25, 28.9],
      fair: [29, 33.9],
      good: [34, 38.9],
      excellent: [39, 43.9],
      superior: [44, 100],
    },
  },
  {
    ageRange: [60, 100],
    gender: 'female',
    categories: {
      very_poor: [0, 21.9],
      poor: [22, 25.9],
      fair: [26, 30.9],
      good: [31, 35.9],
      excellent: [36, 40.9],
      superior: [41, 100],
    },
  },
];

export const categoryInfo = {
  very_poor: {
    label: { en: 'Very Poor', tr: 'Çok Zayıf' },
    color: '#EF4444',
    description: {
      en: 'Your cardiovascular fitness is significantly below average. Consider starting a gradual exercise program under medical supervision.',
      tr: 'Kardiyovasküler kondisyonunuz ortalamanın önemli ölçüde altında. Tıbbi gözetim altında kademeli bir egzersiz programı başlatmayı düşünün.',
    },
  },
  poor: {
    label: { en: 'Poor', tr: 'Zayıf' },
    color: '#F97316',
    description: {
      en: 'Your fitness level is below average. Regular aerobic exercise will help improve your cardiovascular health.',
      tr: 'Fitness seviyeniz ortalamanın altında. Düzenli aerobik egzersiz kardiyovasküler sağlığınızı geliştirmeye yardımcı olacaktır.',
    },
  },
  fair: {
    label: { en: 'Fair', tr: 'Orta' },
    color: '#F59E0B',
    description: {
      en: 'Your fitness level is average. You can benefit from increasing exercise intensity and frequency.',
      tr: 'Fitness seviyeniz ortalama. Egzersiz yoğunluğunu ve sıklığını artırmaktan fayda görebilirsiniz.',
    },
  },
  good: {
    label: { en: 'Good', tr: 'İyi' },
    color: '#84CC16',
    description: {
      en: 'Your cardiovascular fitness is above average. Maintain your current exercise routine and consider adding variety.',
      tr: 'Kardiyovasküler kondisyonunuz ortalamanın üstünde. Mevcut egzersiz rutininizi sürdürün ve çeşitlendirmeyi düşünün.',
    },
  },
  excellent: {
    label: { en: 'Excellent', tr: 'Mükemmel' },
    color: '#22C55E',
    description: {
      en: 'Your fitness level is excellent. You have strong cardiovascular health. Continue your training program.',
      tr: 'Fitness seviyeniz mükemmel. Güçlü kardiyovasküler sağlığa sahipsiniz. Antrenman programınıza devam edin.',
    },
  },
  superior: {
    label: { en: 'Superior', tr: 'Üstün' },
    color: '#10B981',
    description: {
      en: 'Your cardiovascular fitness is exceptional, comparable to elite athletes. Excellent work!',
      tr: 'Kardiyovasküler kondisyonunuz olağanüstü, elit sporcularla karşılaştırılabilir. Mükemmel iş!',
    },
  },
};

/**
 * Cooper Test: 12-minute run test
 * Formula: VO2max = (Distance in meters - 504.9) / 44.73
 */
function calculateCooperTest(distance: number, unit: 'metric' | 'imperial'): number {
  let distanceInMeters = distance;
  if (unit === 'imperial') {
    // Convert miles to meters
    distanceInMeters = distance * 1609.34;
  }

  const vo2Max = (distanceInMeters - 504.9) / 44.73;
  return Math.round(vo2Max * 10) / 10;
}

/**
 * Rockport Walking Test: 1-mile walk test
 * Formula: VO2max = 132.853 - (0.0769 × Weight) - (0.3877 × Age) + (6.315 × Gender) - (3.2649 × Time) - (0.1565 × HR)
 * Gender: 0 for female, 1 for male
 */
function calculateRockportTest(
  weight: number,
  age: number,
  gender: 'male' | 'female',
  time: number,
  heartRate: number,
  unit: 'metric' | 'imperial'
): number {
  let weightInLbs = weight;
  if (unit === 'metric') {
    // Convert kg to lbs
    weightInLbs = weight * 2.20462;
  }

  const genderValue = gender === 'male' ? 1 : 0;

  const vo2Max =
    132.853 -
    0.0769 * weightInLbs -
    0.3877 * age +
    6.315 * genderValue -
    3.2649 * time -
    0.1565 * heartRate;

  return Math.round(vo2Max * 10) / 10;
}

/**
 * Formula-based estimation using resting heart rate
 * Formula: VO2max = 15.3 × (MHR / RHR)
 * Where MHR = 220 - age
 */
function calculateFormulaMethod(age: number, restingHeartRate: number): number {
  const maxHeartRate = 220 - age;
  const vo2Max = 15.3 * (maxHeartRate / restingHeartRate);
  return Math.round(vo2Max * 10) / 10;
}

/**
 * Get VO2 Max category based on age, gender, and VO2 max value
 */
export function getVO2MaxCategory(
  vo2Max: number,
  age: number,
  gender: 'male' | 'female'
): VO2MaxCategory {
  const norm = vo2MaxNorms.find(
    (n) => age >= n.ageRange[0] && age <= n.ageRange[1] && n.gender === gender
  );

  if (!norm) {
    // Default to middle age if not found
    return 'fair';
  }

  const { categories } = norm;

  if (vo2Max <= categories.very_poor[1]) return 'very_poor';
  if (vo2Max <= categories.poor[1]) return 'poor';
  if (vo2Max <= categories.fair[1]) return 'fair';
  if (vo2Max <= categories.good[1]) return 'good';
  if (vo2Max <= categories.excellent[1]) return 'excellent';
  return 'superior';
}

/**
 * Calculate percentile within age/gender group
 */
export function getPercentile(
  vo2Max: number,
  age: number,
  gender: 'male' | 'female'
): number {
  const norm = vo2MaxNorms.find(
    (n) => age >= n.ageRange[0] && age <= n.ageRange[1] && n.gender === gender
  );

  if (!norm) return 50;

  const { categories } = norm;

  // Rough percentile estimation
  if (vo2Max <= categories.very_poor[1]) return 10;
  if (vo2Max <= categories.poor[1]) return 30;
  if (vo2Max <= categories.fair[1]) return 50;
  if (vo2Max <= categories.good[1]) return 70;
  if (vo2Max <= categories.excellent[1]) return 85;
  return 95;
}

/**
 * Main calculation function
 */
export function calculateVO2Max(input: VO2MaxInput): VO2MaxResult {
  let vo2Max: number;

  switch (input.method) {
    case 'cooper':
      if (!input.cooperDistance) {
        throw new Error('Cooper distance is required');
      }
      vo2Max = calculateCooperTest(input.cooperDistance, input.unit);
      break;

    case 'rockport':
      if (!input.rockportTime || !input.rockportHeartRate) {
        throw new Error('Rockport time and heart rate are required');
      }
      vo2Max = calculateRockportTest(
        input.weight,
        input.age,
        input.gender,
        input.rockportTime,
        input.rockportHeartRate,
        input.unit
      );
      break;

    case 'formula':
      if (!input.restingHeartRate) {
        throw new Error('Resting heart rate is required');
      }
      vo2Max = calculateFormulaMethod(input.age, input.restingHeartRate);
      break;

    default:
      throw new Error('Invalid calculation method');
  }

  const category = getVO2MaxCategory(vo2Max, input.age, input.gender);
  const percentile = getPercentile(vo2Max, input.age, input.gender);
  const categoryData = categoryInfo[category];

  return {
    vo2Max,
    category,
    categoryLabel: categoryData.label,
    interpretation: categoryData.description,
    percentile,
  };
}

/**
 * Get recommended training zones based on VO2 max
 */
export function getTrainingZones(vo2Max: number, age: number) {
  const maxHeartRate = 220 - age;

  return {
    recovery: {
      name: { en: 'Recovery', tr: 'Dinlenme' },
      percentage: '50-60%',
      heartRate: [Math.round(maxHeartRate * 0.5), Math.round(maxHeartRate * 0.6)],
      description: {
        en: 'Easy, comfortable pace for warm-up and recovery',
        tr: 'Isınma ve dinlenme için kolay, rahat tempo',
      },
    },
    aerobic: {
      name: { en: 'Aerobic Base', tr: 'Aerobik Temel' },
      percentage: '60-70%',
      heartRate: [Math.round(maxHeartRate * 0.6), Math.round(maxHeartRate * 0.7)],
      description: {
        en: 'Builds aerobic capacity and endurance',
        tr: 'Aerobik kapasite ve dayanıklılık geliştirir',
      },
    },
    tempo: {
      name: { en: 'Tempo', tr: 'Tempo' },
      percentage: '70-80%',
      heartRate: [Math.round(maxHeartRate * 0.7), Math.round(maxHeartRate * 0.8)],
      description: {
        en: 'Moderate intensity for lactate threshold training',
        tr: 'Laktat eşiği antrenmanı için orta yoğunluk',
      },
    },
    threshold: {
      name: { en: 'Threshold', tr: 'Eşik' },
      percentage: '80-90%',
      heartRate: [Math.round(maxHeartRate * 0.8), Math.round(maxHeartRate * 0.9)],
      description: {
        en: 'High intensity for performance improvement',
        tr: 'Performans geliştirme için yüksek yoğunluk',
      },
    },
    maximum: {
      name: { en: 'Maximum', tr: 'Maksimum' },
      percentage: '90-100%',
      heartRate: [Math.round(maxHeartRate * 0.9), Math.round(maxHeartRate)],
      description: {
        en: 'Very high intensity intervals, use sparingly',
        tr: 'Çok yüksek yoğunluklu intervallar, dikkatli kullanın',
      },
    },
  };
}
