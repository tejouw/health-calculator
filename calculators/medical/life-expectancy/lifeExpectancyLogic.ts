import {
  LifeExpectancyInput,
  LifeExpectancyResult,
  ImpactFactor,
  LifeExpectancyCategoryType,
} from './lifeExpectancyTypes';

// Baseline life expectancy by age and gender (based on WHO/CDC data 2024)
const baselineLifeExpectancy: Record<string, Record<number, number>> = {
  male: {
    20: 77.5, 25: 77.8, 30: 78.1, 35: 78.5, 40: 78.9,
    45: 79.4, 50: 80.1, 55: 81.0, 60: 82.2, 65: 83.8,
    70: 85.9, 75: 88.5, 80: 91.8,
  },
  female: {
    20: 82.1, 25: 82.3, 30: 82.6, 35: 82.9, 40: 83.3,
    45: 83.8, 50: 84.5, 55: 85.4, 60: 86.6, 65: 88.2,
    70: 90.3, 75: 92.8, 80: 95.8,
  },
};

// Get baseline life expectancy for age and gender
function getBaselineLifeExpectancy(age: number, gender: string): number {
  const ageRounded = Math.round(age / 5) * 5; // Round to nearest 5
  const ageKey = Math.max(20, Math.min(80, ageRounded));
  return baselineLifeExpectancy[gender][ageKey] || 78;
}

// Calculate BMI from height and weight
function calculateBMI(height: number, weight: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

// Calculate impact of smoking
function getSmokingImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  let impact = 0;
  let recommendation = '';

  if (input.smokingStatus === 'current') {
    const cigarettesPerDay = input.cigarettesPerDay || 10;
    if (cigarettesPerDay < 10) {
      impact = -5.5;
      recommendation = locale === 'tr'
        ? 'Sigarayı bırakmak ömrünüze 5-6 yıl ekleyebilir'
        : 'Quitting smoking could add 5-6 years to your life';
    } else if (cigarettesPerDay < 20) {
      impact = -8.7;
      recommendation = locale === 'tr'
        ? 'Sigarayı bırakmak ömrünüze 8-9 yıl ekleyebilir'
        : 'Quitting smoking could add 8-9 years to your life';
    } else {
      impact = -12.3;
      recommendation = locale === 'tr'
        ? 'Sigarayı bırakmak ömrünüze 12+ yıl ekleyebilir'
        : 'Quitting smoking could add 12+ years to your life';
    }
  } else if (input.smokingStatus === 'former') {
    const yearsSinceQuitting = input.yearsSmoked || 5;
    if (yearsSinceQuitting < 5) {
      impact = -3.2;
      recommendation = locale === 'tr'
        ? 'Harika iş! Sağlığınız iyileşmeye devam ediyor'
        : 'Great job quitting! Your health continues to improve';
    } else if (yearsSinceQuitting < 10) {
      impact = -1.5;
      recommendation = locale === 'tr'
        ? 'Mükemmel! Sigara hasarının çoğu geri döndü'
        : 'Excellent! Most smoking damage has been reversed';
    } else {
      impact = 0;
      recommendation = locale === 'tr'
        ? 'Sigarasız kalmaya devam ettiğiniz için tebrikler!'
        : 'Congratulations on staying smoke-free!';
    }
  } else {
    impact = 0;
    recommendation = locale === 'tr'
      ? 'Hiç sigara içmemek en iyi sağlık kararlarından biri'
      : 'Never smoking is one of the best health decisions';
  }

  return {
    factor: locale === 'tr' ? 'Sigara' : 'Smoking',
    impact,
    recommendation,
    isPositive: impact >= 0,
    priority: input.smokingStatus === 'current' ? 'high' : 'medium',
  };
}

// Calculate impact of exercise
function getExerciseImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const exerciseImpacts = {
    sedentary: -3.8,
    light: -1.2,
    moderate: 2.3,
    active: 5.1,
    'very-active': 6.9,
  };

  const impact = exerciseImpacts[input.exerciseFrequency];

  const recommendations = locale === 'tr' ? {
    sedentary: 'Düzenli egzersiz ömrünüze 7+ yıl ekleyebilir',
    light: 'Haftada 150dk egzersize çıkmak 3-4 yıl ekleyebilir',
    moderate: 'Harika! Aktiviteyi sürdür veya artır',
    active: 'Mükemmel! Ömrünüze yıllar ekliyorsunuz',
    'very-active': 'Olağanüstü! Aktivite seviyeniz optimum',
  } : {
    sedentary: 'Regular exercise could add 7+ years to your life',
    light: 'Increasing exercise to 150 min/week could add 3-4 years',
    moderate: 'Good job! Maintain or increase activity for even more benefits',
    active: 'Excellent! You\'re adding years to your life',
    'very-active': 'Outstanding! Your activity level is optimal',
  };

  return {
    factor: locale === 'tr' ? 'Fiziksel Aktivite' : 'Physical Activity',
    impact,
    recommendation: recommendations[input.exerciseFrequency],
    isPositive: impact > 0,
    priority: input.exerciseFrequency === 'sedentary' ? 'high' : 'medium',
  };
}

// Calculate impact of BMI
function getBMIImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const bmi = calculateBMI(input.height, input.weight);
  let impact = 0;
  let recommendation = '';

  if (bmi < 18.5) {
    impact = -4.7;
    recommendation = 'Being underweight reduces life expectancy. Consult a healthcare provider';
  } else if (bmi >= 18.5 && bmi < 25) {
    impact = 0;
    recommendation = 'Healthy BMI range - maintain your current weight';
  } else if (bmi >= 25 && bmi < 30) {
    impact = -1.3;
    recommendation = 'Losing 5-10% of body weight could add years to your life';
  } else if (bmi >= 30 && bmi < 35) {
    impact = -4.2;
    recommendation = 'Weight loss of 10-15% could significantly improve longevity';
  } else if (bmi >= 35 && bmi < 40) {
    impact = -7.8;
    recommendation = 'Significant weight loss is recommended - consult a healthcare provider';
  } else {
    impact = -11.5;
    recommendation = 'Severe obesity significantly impacts life expectancy - seek medical help';
  }

  return {
    factor: locale === 'tr' ? 'Vücut Ağırlığı' : 'Body Weight',
    impact,
    recommendation,
    isPositive: impact >= 0,
    priority: Math.abs(impact) > 4 ? 'high' : 'medium',
  };
}

// Calculate impact of alcohol consumption
function getAlcoholImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const alcoholImpacts = {
    none: 0,
    light: 0.8, // Light drinking may have slight protective effect
    moderate: -0.5,
    heavy: -6.4,
  };

  const impact = alcoholImpacts[input.alcoholConsumption];

  const recommendations = {
    none: 'Abstaining from alcohol is a healthy choice',
    light: 'Light drinking (1 drink/day) may have minimal impact',
    moderate: 'Moderate drinking - consider reducing for optimal health',
    heavy: 'Heavy drinking significantly reduces life expectancy - seek help',
  };

  return {
    factor: locale === 'tr' ? 'Alkol Tüketimi' : 'Alcohol Consumption',
    impact,
    recommendation: recommendations[input.alcoholConsumption],
    isPositive: impact > 0,
    priority: input.alcoholConsumption === 'heavy' ? 'high' : 'low',
  };
}

// Calculate impact of chronic diseases
function getChronicDiseaseImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  let impact = 0;
  const conditions: string[] = [];

  if (input.hasDiabetes) {
    impact -= 6.3;
    conditions.push('diabetes');
  }
  if (input.hasHeartDisease) {
    impact -= 8.7;
    conditions.push('heart disease');
  }
  if (input.hasCancer) {
    impact -= 7.2;
    conditions.push('cancer');
  }
  if (input.hasStroke) {
    impact -= 5.8;
    conditions.push('stroke history');
  }

  let recommendation = '';
  if (conditions.length === 0) {
    recommendation = 'No chronic conditions - excellent! Maintain preventive care';
  } else if (conditions.length === 1) {
    recommendation = `Managing ${conditions[0]} well can minimize impact on longevity`;
  } else {
    recommendation = `Multiple conditions require careful management - work closely with your healthcare team`;
  }

  return {
    factor: locale === 'tr' ? 'Kronik Hastalıklar' : 'Chronic Diseases',
    impact,
    recommendation,
    isPositive: impact >= 0,
    priority: conditions.length > 0 ? 'high' : 'low',
  };
}

// Calculate impact of blood pressure
function getBloodPressureImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const bpImpacts = {
    normal: 0,
    elevated: -1.7,
    high: -5.2,
  };

  const impact = bpImpacts[input.bloodPressure];

  const recommendations = {
    normal: 'Normal blood pressure - excellent cardiovascular health marker',
    elevated: 'Elevated BP - lifestyle changes can prevent hypertension',
    high: 'High blood pressure significantly impacts longevity - treatment is essential',
  };

  return {
    factor: locale === 'tr' ? 'Kan Basıncı' : 'Blood Pressure',
    impact,
    recommendation: recommendations[input.bloodPressure],
    isPositive: impact >= 0,
    priority: input.bloodPressure === 'high' ? 'high' : 'medium',
  };
}

// Calculate impact of sleep
function getSleepImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  let impact = 0;
  let recommendation = '';

  if (input.sleepHours < 6) {
    impact = -4.3;
    recommendation = 'Insufficient sleep (<6 hrs) significantly reduces longevity';
  } else if (input.sleepHours >= 6 && input.sleepHours < 7) {
    impact = -1.2;
    recommendation = 'Aim for 7-9 hours of sleep for optimal health';
  } else if (input.sleepHours >= 7 && input.sleepHours <= 9) {
    impact = 2.8;
    recommendation = 'Optimal sleep duration - excellent for longevity';
  } else {
    impact = -1.8;
    recommendation = 'Excessive sleep (>9 hrs) may indicate underlying health issues';
  }

  return {
    factor: locale === 'tr' ? 'Uyku Kalitesi' : 'Sleep Quality',
    impact,
    recommendation,
    isPositive: impact > 0,
    priority: Math.abs(impact) > 3 ? 'high' : 'medium',
  };
}

// Calculate impact of stress
function getStressImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const stressImpacts = {
    low: 2.1,
    medium: -0.8,
    high: -4.6,
  };

  const impact = stressImpacts[input.stressLevel];

  const recommendations = {
    low: 'Low stress is excellent for longevity - maintain your practices',
    medium: 'Moderate stress - consider stress management techniques',
    high: 'High stress significantly impacts health - seek stress reduction strategies',
  };

  return {
    factor: locale === 'tr' ? 'Stres Seviyesi' : 'Stress Level',
    impact,
    recommendation: recommendations[input.stressLevel],
    isPositive: impact > 0,
    priority: input.stressLevel === 'high' ? 'high' : 'medium',
  };
}

// Calculate impact of social connections
function getSocialImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const socialImpacts = {
    isolated: -6.8,
    some: 0,
    strong: 5.2,
  };

  const impact = socialImpacts[input.socialConnections];

  const recommendations = {
    isolated: 'Social isolation significantly reduces longevity - build connections',
    some: 'Moderate social connections - strengthening relationships adds years',
    strong: 'Strong social bonds are one of the best longevity predictors',
  };

  return {
    factor: locale === 'tr' ? 'Sosyal Bağlantılar' : 'Social Connections',
    impact,
    recommendation: recommendations[input.socialConnections],
    isPositive: impact > 0,
    priority: input.socialConnections === 'isolated' ? 'high' : 'medium',
  };
}

// Calculate impact of diet
function getDietImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  const dietImpacts = {
    poor: -4.9,
    fair: -1.3,
    good: 2.7,
    excellent: 6.1,
  };

  const impact = dietImpacts[input.dietQuality];

  const recommendations = {
    poor: 'Poor diet significantly reduces life expectancy - improve nutrition',
    fair: 'Fair diet - increasing fruits, vegetables, and whole grains adds years',
    good: 'Good diet quality - you\'re on the right track',
    excellent: 'Excellent diet (Mediterranean-style) maximizes longevity',
  };

  return {
    factor: locale === 'tr' ? 'Diyet Kalitesi' : 'Diet Quality',
    impact,
    recommendation: recommendations[input.dietQuality],
    isPositive: impact > 0,
    priority: input.dietQuality === 'poor' ? 'high' : 'medium',
  };
}

// Calculate impact of family history
function getFamilyHistoryImpact(input: LifeExpectancyInput, locale: 'en' | 'tr' = 'en'): ImpactFactor {
  let impact = 0;
  let parentalLongevity = 0;
  let count = 0;

  if (input.motherAlive && input.motherAge) {
    parentalLongevity += input.motherAge;
    count++;
  } else if (!input.motherAlive && input.motherAge) {
    parentalLongevity += input.motherAge;
    count++;
  }

  if (input.fatherAlive && input.fatherAge) {
    parentalLongevity += input.fatherAge;
    count++;
  } else if (!input.fatherAlive && input.fatherAge) {
    parentalLongevity += input.fatherAge;
    count++;
  }

  if (count > 0) {
    const avgParentalAge = parentalLongevity / count;
    if (avgParentalAge < 70) {
      impact = -2.8;
    } else if (avgParentalAge >= 70 && avgParentalAge < 80) {
      impact = 0;
    } else if (avgParentalAge >= 80 && avgParentalAge < 90) {
      impact = 2.3;
    } else {
      impact = 4.7;
    }
  }

  const recommendation =
    impact > 0
      ? 'Excellent family longevity - genetics are in your favor'
      : impact < 0
      ? 'Family history suggests importance of healthy lifestyle choices'
      : 'Average family longevity - lifestyle choices are key';

  return {
    factor: locale === 'tr' ? 'Aile Geçmişi' : 'Family History',
    impact,
    recommendation,
    isPositive: impact >= 0,
    priority: 'low',
  };
}

// Main calculation function
export function calculateLifeExpectancy(
  input: LifeExpectancyInput,
  locale: 'en' | 'tr' = 'en'
): LifeExpectancyResult {
  // Get baseline
  const baseline = getBaselineLifeExpectancy(input.age, input.gender);

  // Calculate all impact factors
  const impactFactors: ImpactFactor[] = [
    getSmokingImpact(input, locale),
    getExerciseImpact(input, locale),
    getBMIImpact(input, locale),
    getAlcoholImpact(input, locale),
    getChronicDiseaseImpact(input, locale),
    getBloodPressureImpact(input, locale),
    getSleepImpact(input, locale),
    getStressImpact(input, locale),
    getSocialImpact(input, locale),
    getDietImpact(input, locale),
    getFamilyHistoryImpact(input, locale),
  ];

  // Sum all impacts
  const totalImpact = impactFactors.reduce((sum, factor) => sum + factor.impact, 0);

  // Calculate final life expectancy
  const lifeExpectancy = Math.max(
    input.age + 5, // Minimum: current age + 5 years
    Math.round((baseline + totalImpact) * 10) / 10
  );

  // Calculate years, months, days remaining
  const yearsRemaining = Math.floor(lifeExpectancy - input.age);
  const fractionalYear = (lifeExpectancy - input.age) - yearsRemaining;
  const monthsRemaining = Math.floor(fractionalYear * 12);
  const daysRemaining = Math.floor((fractionalYear * 12 - monthsRemaining) * 30);

  // Get average for demographic
  const averageForDemographic = baseline;
  const comparisonToAverage = lifeExpectancy - averageForDemographic;

  // Calculate potential gain (if all negative factors were eliminated)
  const negativeImpacts = impactFactors
    .filter((f) => f.impact < 0)
    .reduce((sum, f) => sum + Math.abs(f.impact), 0);
  const potentialGain = Math.round(negativeImpacts * 10) / 10;

  // Determine category
  const category = getLifeExpectancyCategoryType(lifeExpectancy, input.age, input.gender);

  // Sort impact factors by priority and absolute impact
  const sortedImpactFactors = [...impactFactors].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return Math.abs(b.impact) - Math.abs(a.impact);
  });

  return {
    lifeExpectancy,
    yearsRemaining,
    monthsRemaining,
    daysRemaining,
    category,
    impactFactors: sortedImpactFactors,
    comparisonToAverage,
    averageForDemographic,
    potentialGain,
  };
}

// Get category based on life expectancy
function getLifeExpectancyCategoryType(
  lifeExpectancy: number,
  currentAge: number,
  gender: string
): LifeExpectancyCategoryType {
  const baseline = getBaselineLifeExpectancy(currentAge, gender);
  const difference = lifeExpectancy - baseline;

  if (difference < -10) return 'very-low';
  if (difference < -5) return 'low';
  if (difference < -2) return 'below-average';
  if (difference >= -2 && difference <= 2) return 'average';
  if (difference > 2 && difference <= 5) return 'above-average';
  if (difference > 5 && difference <= 10) return 'high';
  return 'very-high';
}

// Get category data for display
export const lifeExpectancyCategories: Record<
  LifeExpectancyCategoryType,
  { label: string; color: string; description: string }
> = {
  'very-low': {
    label: 'Needs Urgent Attention',
    color: '#DC2626',
    description: 'Your life expectancy is significantly below average. Immediate lifestyle changes and medical consultation are strongly recommended.',
  },
  low: {
    label: 'Below Optimal',
    color: '#EF4444',
    description: 'Your life expectancy is below average. Significant lifestyle improvements can add many years to your life.',
  },
  'below-average': {
    label: 'Room for Improvement',
    color: '#F97316',
    description: 'Your life expectancy is slightly below average. Small lifestyle changes can make a meaningful difference.',
  },
  average: {
    label: 'Average',
    color: '#F59E0B',
    description: 'Your life expectancy matches the average for your demographics. Healthy habits can extend this further.',
  },
  'above-average': {
    label: 'Above Average',
    color: '#84CC16',
    description: 'Your life expectancy is above average. You\'re making good health choices - keep it up!',
  },
  high: {
    label: 'Excellent',
    color: '#10B981',
    description: 'Your life expectancy is significantly above average. Your healthy lifestyle choices are paying off!',
  },
  'very-high': {
    label: 'Outstanding',
    color: '#059669',
    description: 'Your life expectancy is exceptionally high. You\'re doing an excellent job maximizing your longevity!',
  },
};

// Generate milestones based on current age and life expectancy
export function generateMilestones(
  currentAge: number,
  lifeExpectancy: number,
  locale: 'en' | 'tr' = 'en'
): Array<{
  age: number;
  description: string;
  icon: string;
}> {
  const milestones: Array<{ age: number; description: string; icon: string }> = [];

  // Standard milestones with translations
  const standardMilestones = [
    {
      age: 50,
      description: locale === 'tr' ? 'Yarım yüzyıl dönüm noktası' : 'Half-century milestone',
      icon: '🎂',
    },
    {
      age: 60,
      description: locale === 'tr' ? 'Emeklilik planlaması başlasın' : 'Begin retirement planning',
      icon: '📋',
    },
    {
      age: 65,
      description: locale === 'tr' ? 'Geleneksel emeklilik yaşı' : 'Traditional retirement age',
      icon: '🏖️',
    },
    {
      age: 70,
      description: locale === 'tr' ? 'Platin yıllar başlıyor' : 'Platinum years begin',
      icon: '💎',
    },
    {
      age: 75,
      description: locale === 'tr' ? 'Yüzyılın dörtte üçü' : 'Three-quarters of a century',
      icon: '🎊',
    },
    {
      age: 80,
      description: locale === 'tr' ? 'Seksenli yaşlar dönüm noktası' : 'Octogenarian milestone',
      icon: '🌟',
    },
    {
      age: 85,
      description: locale === 'tr' ? 'Çağların bilgeliği' : 'Wisdom of the ages',
      icon: '📚',
    },
    {
      age: 90,
      description: locale === 'tr' ? 'Doksanlı yaşlar başarısı' : 'Nonagenarian achievement',
      icon: '🏆',
    },
    {
      age: 95,
      description: locale === 'tr' ? 'Olağanüstü ömür' : 'Exceptional longevity',
      icon: '👑',
    },
    {
      age: 100,
      description: locale === 'tr' ? 'Yüz yaşında kutlama!' : 'Centenarian celebration!',
      icon: '🎉',
    },
  ];

  for (const milestone of standardMilestones) {
    if (milestone.age > currentAge && milestone.age <= lifeExpectancy) {
      milestones.push(milestone);
    }
  }

  // Add final year
  if (milestones.length > 0 || lifeExpectancy > currentAge) {
    milestones.push({
      age: Math.floor(lifeExpectancy),
      description: locale === 'tr' ? 'Tahmini yaşam beklentisi' : 'Estimated life expectancy',
      icon: '🕊️',
    });
  }

  return milestones.slice(0, 6); // Return max 6 milestones
}
