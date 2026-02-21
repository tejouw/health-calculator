import {
  PregnancyWeightGainInput,
  PregnancyWeightGainResult,
  BMICategory,
  WeightGainRange,
  TrimesterBreakdown,
  WeeklyTarget,
} from './pregnancyWeightGainTypes';

// IOM/ACOG 2009 Guidelines for singleton pregnancies (in kg)
const SINGLETON_RANGES: Record<BMICategory, WeightGainRange> = {
  underweight: {
    totalMin: 12.5,
    totalMax: 18.0,
    weeklySecondThirdMin: 0.44,
    weeklySecondThirdMax: 0.58,
  },
  normal: {
    totalMin: 11.5,
    totalMax: 16.0,
    weeklySecondThirdMin: 0.35,
    weeklySecondThirdMax: 0.50,
  },
  overweight: {
    totalMin: 7.0,
    totalMax: 11.5,
    weeklySecondThirdMin: 0.23,
    weeklySecondThirdMax: 0.33,
  },
  obese: {
    totalMin: 5.0,
    totalMax: 9.0,
    weeklySecondThirdMin: 0.17,
    weeklySecondThirdMax: 0.27,
  },
};

// IOM/ACOG 2009 Guidelines for twin pregnancies (in kg)
const TWIN_RANGES: Record<BMICategory, WeightGainRange> = {
  underweight: {
    totalMin: 22.7,
    totalMax: 28.1,
    weeklySecondThirdMin: 0.57,
    weeklySecondThirdMax: 0.68,
  },
  normal: {
    totalMin: 16.8,
    totalMax: 24.5,
    weeklySecondThirdMin: 0.45,
    weeklySecondThirdMax: 0.58,
  },
  overweight: {
    totalMin: 14.1,
    totalMax: 22.7,
    weeklySecondThirdMin: 0.35,
    weeklySecondThirdMax: 0.50,
  },
  obese: {
    totalMin: 11.3,
    totalMax: 19.1,
    weeklySecondThirdMin: 0.28,
    weeklySecondThirdMax: 0.42,
  },
};

// First trimester expected gain (approximately 0.5-2 kg total for weeks 1-13)
const FIRST_TRIMESTER_GAIN = { min: 0.5, max: 2.0 };

export function calculateBMI(weight: number, height: number, unit: 'metric' | 'imperial'): number {
  let heightM: number;
  let weightKg: number;

  if (unit === 'imperial') {
    heightM = height * 0.0254;
    weightKg = weight * 0.453592;
  } else {
    heightM = height / 100;
    weightKg = weight;
  }

  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

function toKg(weight: number, unit: 'metric' | 'imperial'): number {
  return unit === 'imperial' ? weight * 0.453592 : weight;
}

function fromKg(weightKg: number, unit: 'metric' | 'imperial'): number {
  return unit === 'imperial' ? weightKg / 0.453592 : weightKg;
}

function getExpectedGainAtWeek(
  week: number,
  range: WeightGainRange
): { min: number; max: number } {
  if (week <= 0) return { min: 0, max: 0 };

  if (week <= 13) {
    // First trimester: linear gain up to FIRST_TRIMESTER_GAIN
    const fraction = week / 13;
    return {
      min: FIRST_TRIMESTER_GAIN.min * fraction,
      max: FIRST_TRIMESTER_GAIN.max * fraction,
    };
  }

  // Second and third trimester: first trimester gain + weekly gain
  const weeksIntoSecondThird = week - 13;
  return {
    min: FIRST_TRIMESTER_GAIN.min + range.weeklySecondThirdMin * weeksIntoSecondThird,
    max: FIRST_TRIMESTER_GAIN.max + range.weeklySecondThirdMax * weeksIntoSecondThird,
  };
}

function generateWeeklyTargets(
  prePregnancyWeightKg: number,
  range: WeightGainRange,
  unit: 'metric' | 'imperial'
): WeeklyTarget[] {
  const targets: WeeklyTarget[] = [];

  for (let week = 0; week <= 40; week++) {
    const expected = getExpectedGainAtWeek(week, range);
    const minWeight = prePregnancyWeightKg + expected.min;
    const maxWeight = prePregnancyWeightKg + expected.max;

    targets.push({
      week,
      minWeight: Math.round(fromKg(minWeight, unit) * 10) / 10,
      maxWeight: Math.round(fromKg(maxWeight, unit) * 10) / 10,
      idealWeight: Math.round(fromKg((minWeight + maxWeight) / 2, unit) * 10) / 10,
    });
  }

  return targets;
}

function getTrimesterBreakdown(
  currentWeek: number,
  currentGainKg: number,
  range: WeightGainRange,
  unit: 'metric' | 'imperial'
): TrimesterBreakdown[] {
  const t1Expected = FIRST_TRIMESTER_GAIN;
  const t2Weeks = 14; // weeks 14-27
  const t3Weeks = 13; // weeks 28-40

  const t2Min = range.weeklySecondThirdMin * t2Weeks;
  const t2Max = range.weeklySecondThirdMax * t2Weeks;
  const t3Min = range.weeklySecondThirdMin * t3Weeks;
  const t3Max = range.weeklySecondThirdMax * t3Weeks;

  // Calculate gain per trimester
  let t1Gain = 0;
  let t2Gain = 0;
  let t3Gain = 0;

  if (currentWeek <= 13) {
    t1Gain = currentGainKg;
  } else if (currentWeek <= 27) {
    t1Gain = Math.min(currentGainKg, t1Expected.max);
    t2Gain = currentGainKg - t1Gain;
  } else {
    t1Gain = Math.min(currentGainKg, t1Expected.max);
    const afterT1 = currentGainKg - t1Gain;
    t2Gain = Math.min(afterT1, t2Max);
    t3Gain = afterT1 - t2Gain;
  }

  const getStatus = (
    week: number,
    trimesterStart: number,
    trimesterEnd: number,
    gain: number,
    expectedMin: number,
    expectedMax: number
  ): TrimesterBreakdown['status'] => {
    if (week < trimesterStart) return 'not-started';
    if (week > trimesterEnd) return 'completed';
    if (gain < expectedMin * 0.8) return 'below';
    if (gain > expectedMax * 1.2) return 'above';
    return 'on-track';
  };

  return [
    {
      trimester: 1,
      weekRange: '1-13',
      expectedGainMin: Math.round(fromKg(t1Expected.min, unit) * 10) / 10,
      expectedGainMax: Math.round(fromKg(t1Expected.max, unit) * 10) / 10,
      currentGain: Math.round(fromKg(t1Gain, unit) * 10) / 10,
      status: getStatus(currentWeek, 1, 13, t1Gain, t1Expected.min, t1Expected.max),
    },
    {
      trimester: 2,
      weekRange: '14-27',
      expectedGainMin: Math.round(fromKg(t2Min, unit) * 10) / 10,
      expectedGainMax: Math.round(fromKg(t2Max, unit) * 10) / 10,
      currentGain: Math.round(fromKg(t2Gain, unit) * 10) / 10,
      status: getStatus(currentWeek, 14, 27, t2Gain, t2Min, t2Max),
    },
    {
      trimester: 3,
      weekRange: '28-40',
      expectedGainMin: Math.round(fromKg(t3Min, unit) * 10) / 10,
      expectedGainMax: Math.round(fromKg(t3Max, unit) * 10) / 10,
      currentGain: Math.round(fromKg(t3Gain, unit) * 10) / 10,
      status: getStatus(currentWeek, 28, 40, t3Gain, t3Min, t3Max),
    },
  ];
}

export function calculatePregnancyWeightGain(
  input: PregnancyWeightGainInput
): PregnancyWeightGainResult {
  const preWeightKg = toKg(input.prePregnancyWeight, input.unit);
  const currentWeightKg = toKg(input.currentWeight, input.unit);
  const currentGainKg = currentWeightKg - preWeightKg;

  const bmi = calculateBMI(input.prePregnancyWeight, input.height, input.unit);
  const bmiCategory = getBMICategory(bmi);
  const ranges = input.twins ? TWIN_RANGES[bmiCategory] : SINGLETON_RANGES[bmiCategory];

  const expectedAtWeek = getExpectedGainAtWeek(input.currentWeek, ranges);

  let status: 'on-track' | 'below' | 'above';
  if (currentGainKg < expectedAtWeek.min * 0.85) {
    status = 'below';
  } else if (currentGainKg > expectedAtWeek.max * 1.15) {
    status = 'above';
  } else {
    status = 'on-track';
  }

  const remainingWeeks = Math.max(0, 40 - input.currentWeek);
  const remainingMin = Math.max(0, ranges.totalMin - currentGainKg);
  const remainingMax = Math.max(0, ranges.totalMax - currentGainKg);

  const weeklyTargets = generateWeeklyTargets(preWeightKg, ranges, input.unit);
  const trimesterBreakdown = getTrimesterBreakdown(
    input.currentWeek,
    currentGainKg,
    ranges,
    input.unit
  );

  const round = (v: number) => Math.round(v * 10) / 10;

  return {
    prePregnancyBMI: bmi,
    bmiCategory,
    currentWeek: input.currentWeek,
    currentGain: round(fromKg(currentGainKg, input.unit)),
    recommendedTotalMin: round(fromKg(ranges.totalMin, input.unit)),
    recommendedTotalMax: round(fromKg(ranges.totalMax, input.unit)),
    expectedGainAtCurrentWeek: {
      min: round(fromKg(expectedAtWeek.min, input.unit)),
      max: round(fromKg(expectedAtWeek.max, input.unit)),
    },
    status,
    weeklyTargetSecondThird: {
      min: round(fromKg(ranges.weeklySecondThirdMin, input.unit)),
      max: round(fromKg(ranges.weeklySecondThirdMax, input.unit)),
    },
    trimesterBreakdown,
    weeklyTargets,
    remainingWeeks,
    remainingGainNeeded: {
      min: round(fromKg(remainingMin, input.unit)),
      max: round(fromKg(remainingMax, input.unit)),
    },
  };
}

export const bmiCategoryLabels: Record<BMICategory, { en: string; tr: string }> = {
  underweight: { en: 'Underweight', tr: 'Zayıf' },
  normal: { en: 'Normal Weight', tr: 'Normal Kilo' },
  overweight: { en: 'Overweight', tr: 'Fazla Kilolu' },
  obese: { en: 'Obese', tr: 'Obez' },
};

export const statusLabels: Record<string, { en: string; tr: string }> = {
  'on-track': { en: 'On Track', tr: 'Yolunda' },
  below: { en: 'Below Target', tr: 'Hedefin Altında' },
  above: { en: 'Above Target', tr: 'Hedefin Üstünde' },
};
