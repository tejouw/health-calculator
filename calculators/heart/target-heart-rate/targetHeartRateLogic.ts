import {
  TargetHeartRateInput,
  TargetHeartRateResult,
  TargetZoneInfo,
  ExerciseGoal,
  FitnessLevel,
} from './targetHeartRateTypes';

/**
 * Calculate maximum heart rate using Tanaka formula (more accurate than 220-age)
 * Tanaka, H., Monahan, K.D., & Seals, D.R. (2001)
 * MHR = 208 - (0.7 × age)
 */
export function calculateMaxHeartRate(age: number): number {
  return Math.round(208 - 0.7 * age);
}

/**
 * Get the recommended target zone percentages based on exercise goal
 */
function getTargetPercentages(goal: ExerciseGoal, fitnessLevel: FitnessLevel): { min: number; max: number } {
  const zones: Record<ExerciseGoal, Record<FitnessLevel, { min: number; max: number }>> = {
    fat_burning: {
      beginner: { min: 50, max: 65 },
      intermediate: { min: 55, max: 70 },
      advanced: { min: 60, max: 70 },
      athlete: { min: 60, max: 70 },
    },
    cardio: {
      beginner: { min: 60, max: 70 },
      intermediate: { min: 65, max: 75 },
      advanced: { min: 70, max: 80 },
      athlete: { min: 70, max: 85 },
    },
    endurance: {
      beginner: { min: 65, max: 75 },
      intermediate: { min: 70, max: 80 },
      advanced: { min: 70, max: 85 },
      athlete: { min: 75, max: 85 },
    },
    performance: {
      beginner: { min: 70, max: 80 },
      intermediate: { min: 75, max: 85 },
      advanced: { min: 80, max: 90 },
      athlete: { min: 85, max: 95 },
    },
    general: {
      beginner: { min: 50, max: 70 },
      intermediate: { min: 60, max: 75 },
      advanced: { min: 65, max: 80 },
      athlete: { min: 65, max: 85 },
    },
  };

  return zones[goal][fitnessLevel];
}

/**
 * Calculate target heart rate using Karvonen method when resting HR is available
 * Target HR = ((MHR - RHR) x %Intensity) + RHR
 */
function calculateKarvonenTarget(
  maxHR: number,
  restingHR: number,
  minPercent: number,
  maxPercent: number
): { min: number; max: number } {
  const hrr = maxHR - restingHR;
  return {
    min: Math.round(hrr * (minPercent / 100) + restingHR),
    max: Math.round(hrr * (maxPercent / 100) + restingHR),
  };
}

/**
 * Calculate target heart rate using standard percentage method
 */
function calculateStandardTarget(
  maxHR: number,
  minPercent: number,
  maxPercent: number
): { min: number; max: number } {
  return {
    min: Math.round(maxHR * (minPercent / 100)),
    max: Math.round(maxHR * (maxPercent / 100)),
  };
}

/**
 * Build all training zones for display
 */
function buildAllZones(
  maxHR: number,
  restingHR: number | undefined,
  targetMin: number,
  targetMax: number,
  locale: 'en' | 'tr'
): TargetZoneInfo[] {
  const zoneDefinitions = [
    {
      nameEn: 'Warm-Up / Recovery',
      nameTr: 'Isınma / Toparlanma',
      minPercent: 50,
      maxPercent: 60,
      descEn: 'Very light effort. Ideal for warm-up, cool-down, and active recovery.',
      descTr: 'Çok hafif efor. Isınma, soğuma ve aktif toparlanma için ideal.',
      color: '#10B981',
    },
    {
      nameEn: 'Fat Burning',
      nameTr: 'Yağ Yakma',
      minPercent: 60,
      maxPercent: 70,
      descEn: 'Light to moderate effort. Optimizes fat utilization as fuel source.',
      descTr: 'Hafiften ortaya efor. Yağın yakıt kaynağı olarak kullanımını optimize eder.',
      color: '#22C55E',
    },
    {
      nameEn: 'Aerobic / Cardio',
      nameTr: 'Aerobik / Kardio',
      minPercent: 70,
      maxPercent: 80,
      descEn: 'Moderate to hard effort. Improves cardiovascular fitness and endurance.',
      descTr: 'Orta-zor efor. Kardiyovasküler dayanıklılığı ve kondisyonu geliştirir.',
      color: '#F59E0B',
    },
    {
      nameEn: 'Anaerobic / Threshold',
      nameTr: 'Anaerobik / Eşik',
      minPercent: 80,
      maxPercent: 90,
      descEn: 'Hard effort. Builds speed, power, and lactate threshold.',
      descTr: 'Zor efor. Hız, güç ve laktat eşiğini geliştirir.',
      color: '#F97316',
    },
    {
      nameEn: 'Maximum Effort',
      nameTr: 'Maksimum Efor',
      minPercent: 90,
      maxPercent: 100,
      descEn: 'All-out effort. Only sustainable for very short intervals (10-60 seconds).',
      descTr: 'Tam efor. Sadece çok kısa aralıklarla sürdürülebilir (10-60 saniye).',
      color: '#EF4444',
    },
  ];

  return zoneDefinitions.map((zone) => {
    let bpmRange;
    if (restingHR) {
      bpmRange = calculateKarvonenTarget(maxHR, restingHR, zone.minPercent, zone.maxPercent);
    } else {
      bpmRange = calculateStandardTarget(maxHR, zone.minPercent, zone.maxPercent);
    }

    const isTarget = bpmRange.min <= targetMax && bpmRange.max >= targetMin;

    return {
      name: locale === 'en' ? zone.nameEn : zone.nameTr,
      minBpm: bpmRange.min,
      maxBpm: bpmRange.max,
      minPercent: zone.minPercent,
      maxPercent: zone.maxPercent,
      description: locale === 'en' ? zone.descEn : zone.descTr,
      isTarget,
      color: zone.color,
    };
  });
}

/**
 * Get exercise recommendation based on goal and fitness level
 */
function getRecommendation(
  goal: ExerciseGoal,
  fitnessLevel: FitnessLevel,
  targetMin: number,
  targetMax: number,
  locale: 'en' | 'tr'
): string {
  const recommendations: Record<ExerciseGoal, { en: string; tr: string }> = {
    fat_burning: {
      en: `For optimal fat burning, maintain your heart rate between ${targetMin}-${targetMax} bpm during exercise. At this intensity, your body primarily uses fat as fuel. Aim for 30-60 minute sessions, 3-5 times per week.`,
      tr: `Optimum yağ yakımı için egzersiz sırasında kalp atış hızınızı ${targetMin}-${targetMax} atım/dk arasında tutun. Bu yoğunlukta vücudunuz ağırlıklı olarak yağı yakıt olarak kullanır. Haftada 3-5 kez, 30-60 dakikalık seanslar hedefleyin.`,
    },
    cardio: {
      en: `For cardiovascular improvement, keep your heart rate between ${targetMin}-${targetMax} bpm. This zone strengthens your heart and improves oxygen delivery. Aim for 20-45 minute sessions, 3-5 times per week.`,
      tr: `Kardiyovasküler gelişim için kalp atış hızınızı ${targetMin}-${targetMax} atım/dk arasında tutun. Bu bölge kalbinizi güçlendirir ve oksijen taşımayı iyileştirir. Haftada 3-5 kez, 20-45 dakikalık seanslar hedefleyin.`,
    },
    endurance: {
      en: `For endurance building, train at ${targetMin}-${targetMax} bpm. This develops your aerobic capacity and stamina. Gradually increase duration from 30 to 90+ minutes, 3-4 times per week.`,
      tr: `Dayanıklılık geliştirmek için ${targetMin}-${targetMax} atım/dk aralığında antrenman yapın. Bu aerobik kapasitenizi ve dayanıklılığınızı geliştirir. Süreyi kademeli olarak 30 dakikadan 90+ dakikaya çıkarın, haftada 3-4 kez.`,
    },
    performance: {
      en: `For performance gains, target ${targetMin}-${targetMax} bpm during high-intensity intervals. Combine with adequate recovery (Zone 1-2). Limit high-intensity sessions to 2-3 per week with rest days between.`,
      tr: `Performans artışı için yüksek yoğunluklu intervallarda ${targetMin}-${targetMax} atım/dk hedefleyin. Yeterli toparlanma (Bölge 1-2) ile birleştirin. Yüksek yoğunluklu seansları aralarında dinlenme günleriyle haftada 2-3 ile sınırlayın.`,
    },
    general: {
      en: `For general fitness, keep your heart rate between ${targetMin}-${targetMax} bpm during workouts. This provides a balanced approach to cardiovascular health. Aim for 30-45 minutes of exercise, 3-5 times per week.`,
      tr: `Genel kondisyon için antrenman sırasında kalp atış hızınızı ${targetMin}-${targetMax} atım/dk arasında tutun. Bu kardiyovasküler sağlık için dengeli bir yaklaşım sunar. Haftada 3-5 kez, 30-45 dakikalık egzersiz hedefleyin.`,
    },
  };

  return recommendations[goal][locale];
}

/**
 * Main calculation function
 */
export function calculateTargetHeartRate(
  input: TargetHeartRateInput,
  locale: 'en' | 'tr' = 'en'
): TargetHeartRateResult {
  const maxHR = calculateMaxHeartRate(input.age);
  const targetPercentages = getTargetPercentages(input.exerciseGoal, input.fitnessLevel);

  let targetZone;
  if (input.restingHeartRate) {
    targetZone = calculateKarvonenTarget(
      maxHR,
      input.restingHeartRate,
      targetPercentages.min,
      targetPercentages.max
    );
  } else {
    targetZone = calculateStandardTarget(maxHR, targetPercentages.min, targetPercentages.max);
  }

  const allZones = buildAllZones(maxHR, input.restingHeartRate, targetZone.min, targetZone.max, locale);
  const recommendation = getRecommendation(
    input.exerciseGoal,
    input.fitnessLevel,
    targetZone.min,
    targetZone.max,
    locale
  );

  return {
    maxHeartRate: maxHR,
    restingHeartRate: input.restingHeartRate,
    targetZone: {
      min: targetZone.min,
      max: targetZone.max,
      percentage: `${targetPercentages.min}-${targetPercentages.max}%`,
    },
    allZones,
    recommendation,
    fitnessLevel: input.fitnessLevel,
    exerciseGoal: input.exerciseGoal,
  };
}
