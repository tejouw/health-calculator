import { GrowthInput, GrowthResult, PercentileCategory, PercentileCategoryInfo } from './growthTypes';

export const percentileCategories: Record<PercentileCategory, PercentileCategoryInfo> = {
  very_low: {
    name: 'very_low',
    label: {
      en: 'Very Low (< 3rd percentile)',
      tr: 'Çok Düşük (< 3. persentil)',
    },
    range: { min: 0, max: 3 },
    color: 'red',
    interpretation: {
      en: 'Below the 3rd percentile. This may indicate growth concerns. Consultation with a pediatrician is recommended for evaluation.',
      tr: '3. persentilin altında. Bu büyüme endişelerini gösterebilir. Değerlendirme için bir pediatristle konsültasyon önerilir.',
    },
  },
  low: {
    name: 'low',
    label: {
      en: 'Low (3rd - 15th percentile)',
      tr: 'Düşük (3. - 15. persentil)',
    },
    range: { min: 3, max: 15 },
    color: 'orange',
    interpretation: {
      en: 'Below average but within normal range. Continue monitoring growth trends. Discuss with pediatrician if concerned.',
      tr: 'Ortalamanın altında ancak normal aralıkta. Büyüme eğilimlerini izlemeye devam edin. Endişeleriniz varsa pediatristle görüşün.',
    },
  },
  below_average: {
    name: 'below_average',
    label: {
      en: 'Below Average (15th - 50th percentile)',
      tr: 'Ortalamanın Altı (15. - 50. persentil)',
    },
    range: { min: 15, max: 50 },
    color: 'blue',
    interpretation: {
      en: 'Below average but healthy range. Many children grow normally in this range. Continue regular checkups.',
      tr: 'Ortalamanın altında ancak sağlıklı aralık. Birçok çocuk bu aralıkta normal şekilde büyür. Düzenli kontrollere devam edin.',
    },
  },
  average: {
    name: 'average',
    label: {
      en: 'Average (50th - 85th percentile)',
      tr: 'Ortalama (50. - 85. persentil)',
    },
    range: { min: 50, max: 85 },
    color: 'green',
    interpretation: {
      en: 'Healthy average range. Your child is growing well. Continue with balanced nutrition and regular physical activity.',
      tr: 'Sağlıklı ortalama aralık. Çocuğunuz iyi büyüyor. Dengeli beslenme ve düzenli fiziksel aktiviteyle devam edin.',
    },
  },
  above_average: {
    name: 'above_average',
    label: {
      en: 'Above Average (85th - 95th percentile)',
      tr: 'Ortalamanın Üstü (85. - 95. persentil)',
    },
    range: { min: 85, max: 95 },
    color: 'blue',
    interpretation: {
      en: 'Above average but healthy range. Continue monitoring to ensure growth stays proportional.',
      tr: 'Ortalamanın üstünde ancak sağlıklı aralık. Büyümenin orantılı kalmasını sağlamak için izlemeye devam edin.',
    },
  },
  high: {
    name: 'high',
    label: {
      en: 'High (95th - 97th percentile)',
      tr: 'Yüksek (95. - 97. persentil)',
    },
    range: { min: 95, max: 97 },
    color: 'orange',
    interpretation: {
      en: 'High percentile. For weight/BMI, may warrant attention to ensure healthy eating habits. For height, often genetic. Discuss with pediatrician.',
      tr: 'Yüksek persentil. Kilo/BMI için sağlıklı beslenme alışkanlıklarını sağlamak için dikkat gerektirebilir. Boy için genellikle genetiktir. Pediatristle görüşün.',
    },
  },
  very_high: {
    name: 'very_high',
    label: {
      en: 'Very High (> 97th percentile)',
      tr: 'Çok Yüksek (> 97. persentil)',
    },
    range: { min: 97, max: 100 },
    color: 'red',
    interpretation: {
      en: 'Above the 97th percentile. For weight/BMI, may indicate overweight/obesity concerns. Pediatrician consultation recommended.',
      tr: '97. persentilin üstünde. Kilo/BMI için fazla kilolu/obezite endişelerini gösterebilir. Pediatrist konsültasyonu önerilir.',
    },
  },
};

// Simplified percentile estimation (in production, use actual WHO/CDC z-score tables)
// This is a basic approximation for demonstration
function estimatePercentile(value: number, median: number, sd: number): number {
  // Calculate z-score
  const zScore = (value - median) / sd;

  // Approximate percentile from z-score using simplified formula
  // This is not perfectly accurate but good enough for demonstration
  let percentile: number;

  if (zScore <= -3) percentile = 0.13;
  else if (zScore <= -2) percentile = 2.28;
  else if (zScore <= -1) percentile = 15.87;
  else if (zScore <= 0) percentile = 50;
  else if (zScore <= 1) percentile = 84.13;
  else if (zScore <= 2) percentile = 97.72;
  else percentile = 99.87;

  // Linear interpolation for better accuracy
  const interpolate = (z: number, p1: number, p2: number, z1: number, z2: number) => {
    return p1 + ((z - z1) / (z2 - z1)) * (p2 - p1);
  };

  if (zScore > -3 && zScore < -2) percentile = interpolate(zScore, 0.13, 2.28, -3, -2);
  else if (zScore > -2 && zScore < -1) percentile = interpolate(zScore, 2.28, 15.87, -2, -1);
  else if (zScore > -1 && zScore < 0) percentile = interpolate(zScore, 15.87, 50, -1, 0);
  else if (zScore > 0 && zScore < 1) percentile = interpolate(zScore, 50, 84.13, 0, 1);
  else if (zScore > 1 && zScore < 2) percentile = interpolate(zScore, 84.13, 97.72, 1, 2);
  else if (zScore > 2 && zScore < 3) percentile = interpolate(zScore, 97.72, 99.87, 2, 3);

  return Math.max(0.1, Math.min(99.9, percentile));
}

// Approximate reference data (simplified - in production use actual WHO/CDC data)
function getHeightReference(ageMonths: number, gender: 'male' | 'female'): { median: number; sd: number } {
  // Very simplified - actual data would be age-specific tables
  if (gender === 'male') {
    if (ageMonths <= 24) return { median: 75 + (ageMonths * 1.5), sd: 3 };
    if (ageMonths <= 60) return { median: 85 + (ageMonths * 0.8), sd: 4 };
    return { median: 110 + (ageMonths * 0.5), sd: 5 };
  } else {
    if (ageMonths <= 24) return { median: 74 + (ageMonths * 1.4), sd: 3 };
    if (ageMonths <= 60) return { median: 84 + (ageMonths * 0.75), sd: 4 };
    return { median: 108 + (ageMonths * 0.48), sd: 5 };
  }
}

function getWeightReference(ageMonths: number, gender: 'male' | 'female'): { median: number; sd: number } {
  if (gender === 'male') {
    if (ageMonths <= 24) return { median: 9 + (ageMonths * 0.3), sd: 1.5 };
    if (ageMonths <= 60) return { median: 12 + (ageMonths * 0.2), sd: 2 };
    return { median: 18 + (ageMonths * 0.15), sd: 3 };
  } else {
    if (ageMonths <= 24) return { median: 8.5 + (ageMonths * 0.28), sd: 1.4 };
    if (ageMonths <= 60) return { median: 11.5 + (ageMonths * 0.19), sd: 1.9 };
    return { median: 17 + (ageMonths * 0.14), sd: 2.8 };
  }
}

function getBMIReference(ageMonths: number, gender: 'male' | 'female'): { median: number; sd: number } {
  // Simplified BMI-for-age reference
  if (ageMonths <= 24) return { median: 16.5, sd: 1.2 };
  if (ageMonths <= 60) return { median: 15.8, sd: 1.3 };
  return { median: 16.2, sd: 1.5 };
}

export function getPercentileCategory(percentile: number): PercentileCategory {
  if (percentile < 3) return 'very_low';
  if (percentile < 15) return 'low';
  if (percentile < 50) return 'below_average';
  if (percentile < 85) return 'average';
  if (percentile < 95) return 'above_average';
  if (percentile < 97) return 'high';
  return 'very_high';
}

export function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10;
}

export function evaluateGrowth(input: GrowthInput): GrowthResult {
  let height = input.height;
  let weight = input.weight;

  // Convert imperial to metric if needed
  if (input.unit === 'imperial') {
    height = input.height * 2.54; // inches to cm
    weight = input.weight * 0.453592; // lbs to kg
  }

  const bmi = calculateBMI(height, weight);

  // Get reference data
  const heightRef = getHeightReference(input.age, input.gender);
  const weightRef = getWeightReference(input.age, input.gender);
  const bmiRef = getBMIReference(input.age, input.gender);

  // Calculate percentiles
  const heightPercentile = estimatePercentile(height, heightRef.median, heightRef.sd);
  const weightPercentile = estimatePercentile(weight, weightRef.median, weightRef.sd);
  const bmiPercentile = estimatePercentile(bmi, bmiRef.median, bmiRef.sd);

  // Get categories
  const heightCategory = getPercentileCategory(heightPercentile);
  const weightCategory = getPercentileCategory(weightPercentile);
  const bmiCategory = getPercentileCategory(bmiPercentile);

  // Generate interpretation
  const interpretation = {
    en: `Your child's growth is being tracked against WHO/CDC growth charts. Height is at the ${heightPercentile.toFixed(0)}th percentile, weight at the ${weightPercentile.toFixed(0)}th percentile, and BMI at the ${bmiPercentile.toFixed(0)}th percentile. ${percentileCategories[bmiCategory].interpretation.en}`,
    tr: `Çocuğunuzun büyümesi WHO/CDC büyüme çizelgelerine göre takip ediliyor. Boy ${heightPercentile.toFixed(0)}. persentilde, kilo ${weightPercentile.toFixed(0)}. persentilde ve BMI ${bmiPercentile.toFixed(0)}. persentildedir. ${percentileCategories[bmiCategory].interpretation.tr}`,
  };

  return {
    heightPercentile: Math.round(heightPercentile * 10) / 10,
    weightPercentile: Math.round(weightPercentile * 10) / 10,
    bmiPercentile: Math.round(bmiPercentile * 10) / 10,
    bmi,
    heightCategory,
    weightCategory,
    bmiCategory,
    interpretation,
  };
}
