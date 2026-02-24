import {
  SleepCycleInput,
  SleepCycleResult,
  SleepCycleInfo,
  SleepStageDistribution,
  AgeRecommendation,
  QualityFactors,
  AdjustmentSuggestion,
  WeeklyProjection,
  EnvironmentTip,
} from './sleepCycleTypes';

const SLEEP_CYCLE_MINUTES = 90;

// Stage distribution per cycle position (scientifically modeled)
const STAGE_DISTRIBUTIONS: SleepStageDistribution[] = [
  { light: 30, deep: 40, rem: 20 }, // Cycle 1 - +10% transition absorbed into light
  { light: 35, deep: 35, rem: 20 }, // Cycle 2
  { light: 40, deep: 25, rem: 25 }, // Cycle 3
  { light: 45, deep: 15, rem: 30 }, // Cycle 4
  { light: 50, deep: 10, rem: 30 }, // Cycle 5
  { light: 55, deep: 5, rem: 30 },  // Cycle 6
];

function formatTimeString(hours: number, minutes: number): string {
  const h = ((hours % 24) + 24) % 24;
  const period = h >= 12 ? 'PM' : 'AM';
  const displayHours = h === 0 ? 12 : h > 12 ? h - 12 : h;
  const displayMinutes = String(minutes).padStart(2, '0');
  return `${displayHours}:${displayMinutes} ${period}`;
}

function addMinutesToTime(hours: number, minutes: number, add: number): { hours: number; minutes: number } {
  const total = hours * 60 + minutes + add;
  const h = ((Math.floor(total / 60) % 24) + 24) % 24;
  const m = ((total % 60) + 60) % 60;
  return { hours: h, minutes: m };
}

function subtractMinutesFromTime(hours: number, minutes: number, sub: number): { hours: number; minutes: number } {
  return addMinutesToTime(hours, minutes, -sub);
}

function calculateTotalSleepMinutes(input: SleepCycleInput): number {
  const bedTotal = input.bedtimeHours * 60 + input.bedtimeMinutes;
  const wakeTotal = input.wakeupHours * 60 + input.wakeupMinutes;
  let diff = wakeTotal - bedTotal;
  if (diff <= 0) diff += 24 * 60; // next day
  return diff;
}

function getAgeRecommendation(age: number): AgeRecommendation {
  if (age < 6) return { minHours: 9, maxHours: 12, optimalHours: 10, label: { en: 'Child (3-5)', tr: 'Çocuk (3-5)' } };
  if (age < 13) return { minHours: 9, maxHours: 11, optimalHours: 10, label: { en: 'Child (6-12)', tr: 'Çocuk (6-12)' } };
  if (age < 18) return { minHours: 8, maxHours: 10, optimalHours: 9, label: { en: 'Teen (13-17)', tr: 'Ergen (13-17)' } };
  if (age < 26) return { minHours: 7, maxHours: 9, optimalHours: 8, label: { en: 'Young Adult (18-25)', tr: 'Genç Yetişkin (18-25)' } };
  if (age < 65) return { minHours: 7, maxHours: 9, optimalHours: 8, label: { en: 'Adult (26-64)', tr: 'Yetişkin (26-64)' } };
  return { minHours: 7, maxHours: 8, optimalHours: 7.5, label: { en: 'Older Adult (65+)', tr: 'Yaşlı Yetişkin (65+)' } };
}

function calculateCycleCountScore(completeCycles: number): number {
  if (completeCycles === 5 || completeCycles === 6) return 100;
  if (completeCycles === 4) return 80;
  if (completeCycles === 7) return 85;
  if (completeCycles === 3) return 50;
  return 20;
}

function calculateDurationScore(actualSleepMinutes: number, rec: AgeRecommendation): number {
  const sleepHours = actualSleepMinutes / 60;
  const optRange = { min: rec.minHours, max: rec.maxHours };
  if (sleepHours >= optRange.min && sleepHours <= optRange.max) return 100;
  const diffMin = Math.min(Math.abs(sleepHours - optRange.min), Math.abs(sleepHours - optRange.max));
  if (diffMin <= 0.5) return 80;
  if (diffMin <= 1) return 60;
  if (diffMin <= 2) return 40;
  return 20;
}

function calculateAlignmentScore(partialMinutes: number): number {
  if (partialMinutes === 0) return 100;
  if (partialMinutes <= 15) return 85;
  if (partialMinutes <= 30) return 60;
  if (partialMinutes <= 60) return 30;
  return 50;
}

function calculateQualityScore(factors: QualityFactors): number {
  return Math.round(factors.cycleCountScore * 0.40 + factors.durationScore * 0.35 + factors.alignmentScore * 0.25);
}

function getQualityLabel(score: number): { en: string; tr: string } {
  if (score >= 80) return { en: 'Excellent', tr: 'Mükemmel' };
  if (score >= 60) return { en: 'Good', tr: 'İyi' };
  if (score >= 40) return { en: 'Fair', tr: 'Orta' };
  return { en: 'Poor', tr: 'Zayıf' };
}

function getQualityColor(score: number): string {
  if (score >= 80) return '#10B981'; // green
  if (score >= 60) return '#3B82F6'; // blue
  if (score >= 40) return '#F59E0B'; // amber
  return '#EF4444'; // red
}

function buildCycles(actualSleepMinutes: number): { cycles: SleepCycleInfo[]; completeCycles: number; partialMinutes: number } {
  const completeCycles = Math.floor(actualSleepMinutes / SLEEP_CYCLE_MINUTES);
  const partialMinutes = actualSleepMinutes % SLEEP_CYCLE_MINUTES;
  const cycles: SleepCycleInfo[] = [];

  for (let i = 0; i < completeCycles && i < 8; i++) {
    const dist = STAGE_DISTRIBUTIONS[Math.min(i, STAGE_DISTRIBUTIONS.length - 1)];
    cycles.push({
      cycleNumber: i + 1,
      startMinutes: i * SLEEP_CYCLE_MINUTES,
      endMinutes: (i + 1) * SLEEP_CYCLE_MINUTES,
      duration: SLEEP_CYCLE_MINUTES,
      stages: dist,
      isComplete: true,
    });
  }

  if (partialMinutes > 0) {
    const idx = Math.min(completeCycles, STAGE_DISTRIBUTIONS.length - 1);
    const dist = STAGE_DISTRIBUTIONS[idx];
    cycles.push({
      cycleNumber: completeCycles + 1,
      startMinutes: completeCycles * SLEEP_CYCLE_MINUTES,
      endMinutes: completeCycles * SLEEP_CYCLE_MINUTES + partialMinutes,
      duration: partialMinutes,
      stages: dist,
      isComplete: false,
    });
  }

  return { cycles, completeCycles, partialMinutes };
}

function calculateStageBreakdown(cycles: SleepCycleInfo[]): {
  light: { percentage: number; minutes: number };
  deep: { percentage: number; minutes: number };
  rem: { percentage: number; minutes: number };
} {
  let totalLight = 0, totalDeep = 0, totalRem = 0, totalMinutes = 0;

  for (const cycle of cycles) {
    const dur = cycle.duration;
    // Normalize stages to 100% (light + deep + rem might sum to 90 due to transition)
    const stageSum = cycle.stages.light + cycle.stages.deep + cycle.stages.rem;
    totalLight += (cycle.stages.light / stageSum) * dur;
    totalDeep += (cycle.stages.deep / stageSum) * dur;
    totalRem += (cycle.stages.rem / stageSum) * dur;
    totalMinutes += dur;
  }

  if (totalMinutes === 0) {
    return {
      light: { percentage: 50, minutes: 0 },
      deep: { percentage: 20, minutes: 0 },
      rem: { percentage: 25, minutes: 0 },
    };
  }

  return {
    light: { percentage: Math.round((totalLight / totalMinutes) * 100), minutes: Math.round(totalLight) },
    deep: { percentage: Math.round((totalDeep / totalMinutes) * 100), minutes: Math.round(totalDeep) },
    rem: { percentage: Math.round((totalRem / totalMinutes) * 100), minutes: Math.round(totalRem) },
  };
}

function generateAdjustments(
  input: SleepCycleInput,
  completeCycles: number,
  partialMinutes: number,
  actualSleepMinutes: number,
  rec: AgeRecommendation
): AdjustmentSuggestion[] {
  const suggestions: AdjustmentSuggestion[] = [];
  if (partialMinutes === 0) return suggestions;

  // Suggest going to bed earlier to complete the partial cycle
  const earlierMinutes = SLEEP_CYCLE_MINUTES - partialMinutes;
  if (earlierMinutes <= 30) {
    const newBed = subtractMinutesFromTime(input.bedtimeHours, input.bedtimeMinutes, earlierMinutes);
    suggestions.push({
      type: 'earlier-bed',
      minutesDelta: earlierMinutes,
      resultingCycles: completeCycles + 1,
      resultingDuration: actualSleepMinutes + earlierMinutes,
      newTime: { ...newBed, formatted: formatTimeString(newBed.hours, newBed.minutes) },
    });
  }

  // Suggest waking up later to complete the partial cycle
  if (earlierMinutes <= 30) {
    const laterMinutes = SLEEP_CYCLE_MINUTES - partialMinutes;
    const newWake = addMinutesToTime(input.wakeupHours, input.wakeupMinutes, laterMinutes);
    suggestions.push({
      type: 'later-wake',
      minutesDelta: laterMinutes,
      resultingCycles: completeCycles + 1,
      resultingDuration: actualSleepMinutes + laterMinutes,
      newTime: { ...newWake, formatted: formatTimeString(newWake.hours, newWake.minutes) },
    });
  }

  // If partial is small (< 30min), suggest cutting it to avoid mid-cycle wake
  if (partialMinutes <= 30 && partialMinutes > 0) {
    const cutMinutes = partialMinutes;
    const newWake = subtractMinutesFromTime(input.wakeupHours, input.wakeupMinutes, cutMinutes);
    // Only add if different from above
    if (suggestions.length < 2) {
      suggestions.push({
        type: 'later-wake',
        minutesDelta: -cutMinutes,
        resultingCycles: completeCycles,
        resultingDuration: actualSleepMinutes - cutMinutes,
        newTime: { ...newWake, formatted: formatTimeString(newWake.hours, newWake.minutes) },
      });
    }
  }

  return suggestions.slice(0, 3);
}

function calculateWeeklyProjection(actualSleepMinutes: number, rec: AgeRecommendation): WeeklyProjection {
  const weeklyTotal = actualSleepMinutes * 7;
  const weeklyRecommended = rec.optimalHours * 60 * 7;
  const weeklyDebt = Math.max(0, weeklyRecommended - weeklyTotal);

  // Health impact: 100 = perfect, decreases with debt
  const debtHours = weeklyDebt / 60;
  let healthImpact: number;
  if (debtHours <= 0) healthImpact = 100;
  else if (debtHours <= 3.5) healthImpact = 85;
  else if (debtHours <= 7) healthImpact = 70;
  else if (debtHours <= 14) healthImpact = 50;
  else healthImpact = 30;

  // Penalize oversleeping slightly
  if (weeklyTotal > weeklyRecommended + 7 * 60) {
    healthImpact = Math.min(healthImpact, 75);
  }

  return {
    weeklyTotalMinutes: weeklyTotal,
    weeklyRecommendedMinutes: weeklyRecommended,
    weeklyDebtMinutes: weeklyDebt,
    healthImpactScore: healthImpact,
  };
}

function generateEnvironmentTips(bedtimeHours: number, bedtimeMinutes: number): EnvironmentTip[] {
  const caffeineTime = subtractMinutesFromTime(bedtimeHours, bedtimeMinutes, 8 * 60);
  const mealTime = subtractMinutesFromTime(bedtimeHours, bedtimeMinutes, 3 * 60);
  const screenTime = subtractMinutesFromTime(bedtimeHours, bedtimeMinutes, 60);
  const windDownTime = subtractMinutesFromTime(bedtimeHours, bedtimeMinutes, 30);
  const exerciseTime = subtractMinutesFromTime(bedtimeHours, bedtimeMinutes, 4 * 60);

  return [
    {
      id: 'caffeine',
      icon: 'Coffee',
      title: { en: 'Last Caffeine', tr: 'Son Kafein' },
      description: {
        en: 'Stop all caffeine intake by this time. Caffeine has a half-life of 5-6 hours.',
        tr: 'Bu saate kadar kafein alımını durdurun. Kafeinin yarı ömrü 5-6 saattir.',
      },
      time: { ...caffeineTime, formatted: formatTimeString(caffeineTime.hours, caffeineTime.minutes) },
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      id: 'meal',
      icon: 'UtensilsCrossed',
      title: { en: 'Last Heavy Meal', tr: 'Son Ağır Öğün' },
      description: {
        en: 'Finish your last large meal by this time to allow proper digestion.',
        tr: 'Düzgün sindirim için son büyük öğününüzü bu saate kadar bitirin.',
      },
      time: { ...mealTime, formatted: formatTimeString(mealTime.hours, mealTime.minutes) },
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'screen',
      icon: 'MonitorOff',
      title: { en: 'Screen Cutoff', tr: 'Ekran Kesme' },
      description: {
        en: 'Turn off screens to reduce blue light exposure that suppresses melatonin.',
        tr: 'Melatonini baskılayan mavi ışık maruziyetini azaltmak için ekranları kapatın.',
      },
      time: { ...screenTime, formatted: formatTimeString(screenTime.hours, screenTime.minutes) },
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      id: 'winddown',
      icon: 'Wind',
      title: { en: 'Wind-Down Routine', tr: 'Rahatlama Rutini' },
      description: {
        en: 'Begin relaxation activities: reading, gentle stretching, or meditation.',
        tr: 'Rahatlama aktivitelerine başlayın: kitap okuma, hafif esneme veya meditasyon.',
      },
      time: { ...windDownTime, formatted: formatTimeString(windDownTime.hours, windDownTime.minutes) },
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'temperature',
      icon: 'Thermometer',
      title: { en: 'Room Temperature', tr: 'Oda Sıcaklığı' },
      description: {
        en: 'Keep bedroom at 18-20°C (64-68°F) for optimal sleep conditions.',
        tr: 'Optimal uyku koşulları için yatak odanızı 18-20°C arasında tutun.',
      },
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'exercise',
      icon: 'Dumbbell',
      title: { en: 'Last Exercise', tr: 'Son Egzersiz' },
      description: {
        en: 'Complete vigorous exercise at least 4 hours before bedtime.',
        tr: 'Yoğun egzersizi yatmadan en az 4 saat önce tamamlayın.',
      },
      time: { ...exerciseTime, formatted: formatTimeString(exerciseTime.hours, exerciseTime.minutes) },
      gradient: 'from-red-500 to-orange-500',
    },
  ];
}

function formatDuration(minutes: number, locale: 'en' | 'tr'): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (locale === 'en') {
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
  }
  if (m === 0) return `${h}s`;
  return `${h}s ${m}d`;
}

export function calculateSleepCycle(input: SleepCycleInput): SleepCycleResult {
  const totalSleepMinutes = calculateTotalSleepMinutes(input);
  const actualSleepMinutes = Math.max(0, totalSleepMinutes - input.fallAsleepMinutes);

  const { cycles, completeCycles, partialMinutes } = buildCycles(actualSleepMinutes);
  const ageRec = getAgeRecommendation(input.age);

  const qualityFactors: QualityFactors = {
    cycleCountScore: calculateCycleCountScore(completeCycles),
    durationScore: calculateDurationScore(actualSleepMinutes, ageRec),
    alignmentScore: calculateAlignmentScore(partialMinutes),
  };

  const qualityScore = calculateQualityScore(qualityFactors);

  const stageBreakdown = calculateStageBreakdown(cycles);

  // Duration status
  const sleepHours = actualSleepMinutes / 60;
  let durationStatus: 'under' | 'optimal' | 'over' = 'optimal';
  if (sleepHours < ageRec.minHours) durationStatus = 'under';
  else if (sleepHours > ageRec.maxHours) durationStatus = 'over';

  const sleepDebtMinutes = durationStatus === 'under'
    ? Math.round((ageRec.minHours - sleepHours) * 60)
    : 0;

  const adjustments = generateAdjustments(input, completeCycles, partialMinutes, actualSleepMinutes, ageRec);
  const weeklyProjection = calculateWeeklyProjection(actualSleepMinutes, ageRec);
  const environmentTips = generateEnvironmentTips(input.bedtimeHours, input.bedtimeMinutes);

  const fallAsleepTime = addMinutesToTime(input.bedtimeHours, input.bedtimeMinutes, input.fallAsleepMinutes);

  return {
    totalSleepMinutes,
    totalSleepFormatted: {
      en: formatDuration(totalSleepMinutes, 'en'),
      tr: formatDuration(totalSleepMinutes, 'tr'),
    },
    actualSleepMinutes,
    completeCycles,
    partialCycleMinutes: partialMinutes,
    cycles,
    qualityScore,
    qualityLabel: getQualityLabel(qualityScore),
    qualityColor: getQualityColor(qualityScore),
    qualityFactors,
    stageBreakdown,
    ageRecommendation: ageRec,
    durationStatus,
    sleepDebtMinutes,
    adjustments,
    weeklyProjection,
    environmentTips,
    bedtime: {
      hours: input.bedtimeHours,
      minutes: input.bedtimeMinutes,
      formatted: formatTimeString(input.bedtimeHours, input.bedtimeMinutes),
    },
    wakeup: {
      hours: input.wakeupHours,
      minutes: input.wakeupMinutes,
      formatted: formatTimeString(input.wakeupHours, input.wakeupMinutes),
    },
    fallAsleepTime: {
      ...fallAsleepTime,
      formatted: formatTimeString(fallAsleepTime.hours, fallAsleepTime.minutes),
    },
  };
}
