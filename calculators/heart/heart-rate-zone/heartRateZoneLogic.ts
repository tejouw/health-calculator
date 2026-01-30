import { HeartRateZoneResult, CalculationMethod } from './heartRateZoneTypes';

/**
 * Calculate maximum heart rate using the standard formula
 * MHR = 220 - age
 */
export function calculateMaxHeartRate(age: number): number {
  return 220 - age;
}

/**
 * Calculate heart rate zones using standard percentage method
 * Zones are based on percentage of max heart rate
 */
export function calculateStandardZones(
  maxHeartRate: number,
  locale: 'en' | 'tr'
): HeartRateZoneResult {
  const zones = {
    zone1: {
      name: locale === 'en' ? 'Zone 1: Very Light' : 'Bölge 1: Çok Hafif',
      range: '50-60%',
      bpm: {
        min: Math.round(maxHeartRate * 0.5),
        max: Math.round(maxHeartRate * 0.6),
      },
      percentage: '50-60% MHR',
      purpose: locale === 'en'
        ? 'Warm-up, cool-down, recovery'
        : 'Isınma, soğuma, toparlanma',
    },
    zone2: {
      name: locale === 'en' ? 'Zone 2: Light (Fat Burning)' : 'Bölge 2: Hafif (Yağ Yakma)',
      range: '60-70%',
      bpm: {
        min: Math.round(maxHeartRate * 0.6),
        max: Math.round(maxHeartRate * 0.7),
      },
      percentage: '60-70% MHR',
      purpose: locale === 'en'
        ? 'Fat burning, basic endurance, recovery runs'
        : 'Yağ yakma, temel dayanıklılık, toparlanma koşuları',
    },
    zone3: {
      name: locale === 'en' ? 'Zone 3: Moderate (Aerobic)' : 'Bölge 3: Orta (Aerobik)',
      range: '70-80%',
      bpm: {
        min: Math.round(maxHeartRate * 0.7),
        max: Math.round(maxHeartRate * 0.8),
      },
      percentage: '70-80% MHR',
      purpose: locale === 'en'
        ? 'Aerobic fitness, cardiovascular improvements'
        : 'Aerobik fitness, kardiyovasküler gelişim',
    },
    zone4: {
      name: locale === 'en' ? 'Zone 4: Hard (Anaerobic)' : 'Bölge 4: Zor (Anaerobik)',
      range: '80-90%',
      bpm: {
        min: Math.round(maxHeartRate * 0.8),
        max: Math.round(maxHeartRate * 0.9),
      },
      percentage: '80-90% MHR',
      purpose: locale === 'en'
        ? 'Performance training, lactate threshold, speed work'
        : 'Performans antrenmanı, laktat eşiği, hız çalışması',
    },
    zone5: {
      name: locale === 'en' ? 'Zone 5: Maximum' : 'Bölge 5: Maksimum',
      range: '90-100%',
      bpm: {
        min: Math.round(maxHeartRate * 0.9),
        max: maxHeartRate,
      },
      percentage: '90-100% MHR',
      purpose: locale === 'en'
        ? 'Maximum effort, sprints, interval training (short bursts only)'
        : 'Maksimum efor, sprint, interval antrenman (sadece kısa süreli)',
    },
  };

  return {
    maxHeartRate,
    zones,
  };
}

/**
 * Calculate heart rate zones using Karvonen method (Heart Rate Reserve)
 * More accurate when resting heart rate is known
 * Target HR = ((MHR - RHR) × %Intensity) + RHR
 */
export function calculateKarvonenZones(
  maxHeartRate: number,
  restingHeartRate: number,
  locale: 'en' | 'tr'
): HeartRateZoneResult {
  const hrr = maxHeartRate - restingHeartRate; // Heart Rate Reserve

  const calculateRange = (minPercent: number, maxPercent: number) => ({
    min: Math.round((hrr * minPercent) + restingHeartRate),
    max: Math.round((hrr * maxPercent) + restingHeartRate),
  });

  const zones = {
    zone1: {
      name: locale === 'en' ? 'Zone 1: Very Light' : 'Bölge 1: Çok Hafif',
      range: '50-60%',
      bpm: calculateRange(0.5, 0.6),
      percentage: '50-60% HRR',
      purpose: locale === 'en'
        ? 'Warm-up, cool-down, recovery'
        : 'Isınma, soğuma, toparlanma',
    },
    zone2: {
      name: locale === 'en' ? 'Zone 2: Light (Fat Burning)' : 'Bölge 2: Hafif (Yağ Yakma)',
      range: '60-70%',
      bpm: calculateRange(0.6, 0.7),
      percentage: '60-70% HRR',
      purpose: locale === 'en'
        ? 'Fat burning, basic endurance, recovery runs'
        : 'Yağ yakma, temel dayanıklılık, toparlanma koşuları',
    },
    zone3: {
      name: locale === 'en' ? 'Zone 3: Moderate (Aerobic)' : 'Bölge 3: Orta (Aerobik)',
      range: '70-80%',
      bpm: calculateRange(0.7, 0.8),
      percentage: '70-80% HRR',
      purpose: locale === 'en'
        ? 'Aerobic fitness, cardiovascular improvements'
        : 'Aerobik fitness, kardiyovasküler gelişim',
    },
    zone4: {
      name: locale === 'en' ? 'Zone 4: Hard (Anaerobic)' : 'Bölge 4: Zor (Anaerobik)',
      range: '80-90%',
      bpm: calculateRange(0.8, 0.9),
      percentage: '80-90% HRR',
      purpose: locale === 'en'
        ? 'Performance training, lactate threshold, speed work'
        : 'Performans antrenmanı, laktat eşiği, hız çalışması',
    },
    zone5: {
      name: locale === 'en' ? 'Zone 5: Maximum' : 'Bölge 5: Maksimum',
      range: '90-100%',
      bpm: calculateRange(0.9, 1.0),
      percentage: '90-100% HRR',
      purpose: locale === 'en'
        ? 'Maximum effort, sprints, interval training (short bursts only)'
        : 'Maksimum efor, sprint, interval antrenman (sadece kısa süreli)',
    },
  };

  return {
    maxHeartRate,
    restingHeartRate,
    zones,
  };
}

/**
 * Main calculation function
 */
export function calculateHeartRateZones(
  age: number,
  method: CalculationMethod = 'standard',
  restingHeartRate?: number,
  locale: 'en' | 'tr' = 'en'
): HeartRateZoneResult {
  const maxHeartRate = calculateMaxHeartRate(age);

  if (method === 'karvonen' && restingHeartRate) {
    return calculateKarvonenZones(maxHeartRate, restingHeartRate, locale);
  }

  return calculateStandardZones(maxHeartRate, locale);
}
