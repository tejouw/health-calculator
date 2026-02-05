import { RunningPaceInput, RunningPaceResult, RunningLevel, TrainingZone, RacePrediction } from './runningPaceTypes';

const KM_TO_MILES = 0.621371;
const MILES_TO_KM = 1.60934;

function formatTime(totalSeconds: number): { hours: number; minutes: number; seconds: number } {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { hours, minutes, seconds };
}

function formatTimeString(totalSeconds: number): string {
  const time = formatTime(totalSeconds);
  return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
}

function formatPace(paceSeconds: number): string {
  const minutes = Math.floor(paceSeconds / 60);
  const seconds = Math.floor(paceSeconds % 60);
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

// Determine running level based on pace
function getRunningLevel(pacePerKmSeconds: number, distance: number): RunningLevel {
  // For 5K and 10K distances
  if (distance <= 10) {
    if (pacePerKmSeconds < 240) return 'elite'; // < 4:00 min/km
    if (pacePerKmSeconds < 300) return 'advanced'; // 4:00-5:00
    if (pacePerKmSeconds < 360) return 'intermediate'; // 5:00-6:00
    return 'beginner'; // > 6:00
  }

  // For half marathon and marathon
  if (pacePerKmSeconds < 270) return 'elite'; // < 4:30 min/km
  if (pacePerKmSeconds < 330) return 'advanced'; // 4:30-5:30
  if (pacePerKmSeconds < 390) return 'intermediate'; // 5:30-6:30
  return 'beginner'; // > 6:30
}

// Calculate VO2 Max from running performance
function estimateVO2Max(speedKmh: number, distance: number): number {
  // Using Jack Daniels' VDOT formula (simplified)
  // VO2max ≈ -4.60 + 0.182258 × velocity + 0.000104 × velocity²
  const velocity = speedKmh * 16.667; // Convert to m/min
  const vo2max = -4.60 + 0.182258 * velocity + 0.000104 * Math.pow(velocity, 2);

  // Adjust for distance (longer distances = slightly lower VO2max utilization)
  let adjustment = 1.0;
  if (distance > 21) adjustment = 0.95; // Half marathon+
  if (distance > 40) adjustment = 0.92; // Marathon+

  return Math.round(vo2max * adjustment * 10) / 10;
}

// Calculate calories burned
function calculateCalories(
  distanceKm: number,
  weightKg: number,
  gender: 'male' | 'female',
  totalSeconds: number
): number {
  // MET (Metabolic Equivalent) based calculation
  const speedKmh = (distanceKm / totalSeconds) * 3600;

  // MET values for running at different speeds
  let met = 6; // Default
  if (speedKmh >= 16) met = 16;
  else if (speedKmh >= 14.5) met = 14.5;
  else if (speedKmh >= 13) met = 13;
  else if (speedKmh >= 11) met = 11.5;
  else if (speedKmh >= 10) met = 10;
  else if (speedKmh >= 9) met = 9;
  else if (speedKmh >= 8) met = 8;
  else met = 6;

  // Calories = MET × weight(kg) × time(hours)
  const hours = totalSeconds / 3600;
  const calories = met * weightKg * hours;

  // Gender adjustment (men typically burn ~5% more)
  const genderMultiplier = gender === 'male' ? 1.05 : 1.0;

  return Math.round(calories * genderMultiplier);
}

// Generate training zones based on current pace
function getTrainingZones(pacePerKmSeconds: number): TrainingZone[] {
  return [
    {
      name: 'Recovery',
      description: 'Easy running for active recovery',
      paceRange: {
        min: formatTime(pacePerKmSeconds * 1.25),
        max: formatTime(pacePerKmSeconds * 1.15),
      },
      percentage: '115-125%',
      heartRatePercentage: '60-70%',
    },
    {
      name: 'Easy',
      description: 'Comfortable conversational pace',
      paceRange: {
        min: formatTime(pacePerKmSeconds * 1.15),
        max: formatTime(pacePerKmSeconds * 1.05),
      },
      percentage: '105-115%',
      heartRatePercentage: '70-80%',
    },
    {
      name: 'Tempo',
      description: 'Comfortably hard, sustained effort',
      paceRange: {
        min: formatTime(pacePerKmSeconds * 1.0),
        max: formatTime(pacePerKmSeconds * 0.95),
      },
      percentage: '95-100%',
      heartRatePercentage: '80-88%',
    },
    {
      name: 'Threshold',
      description: 'Hard effort, lactate threshold',
      paceRange: {
        min: formatTime(pacePerKmSeconds * 0.95),
        max: formatTime(pacePerKmSeconds * 0.90),
      },
      percentage: '90-95%',
      heartRatePercentage: '88-92%',
    },
    {
      name: 'Interval',
      description: 'High intensity intervals',
      paceRange: {
        min: formatTime(pacePerKmSeconds * 0.90),
        max: formatTime(pacePerKmSeconds * 0.85),
      },
      percentage: '85-90%',
      heartRatePercentage: '92-97%',
    },
  ];
}

// Predict race times for different distances
function predictRaceTimes(pacePerKmSeconds: number, currentDistance: number): RacePrediction[] {
  const distances = [
    { label: '1K', distance: 1, unit: 'km' },
    { label: '5K', distance: 5, unit: 'km' },
    { label: '10K', distance: 10, unit: 'km' },
    { label: 'Half Marathon', distance: 21.0975, unit: 'km' },
    { label: 'Marathon', distance: 42.195, unit: 'km' },
  ];

  return distances
    .filter(d => d.distance !== currentDistance)
    .map(d => {
      // Riegel formula: T2 = T1 × (D2/D1)^1.06
      const fatigueFactor = Math.pow(d.distance / currentDistance, 1.06);
      const predictedSeconds = pacePerKmSeconds * d.distance * fatigueFactor;
      const predictedPaceSeconds = predictedSeconds / d.distance;

      return {
        distance: d.distance,
        distanceLabel: d.label,
        unit: d.unit,
        predictedTime: formatTimeString(predictedSeconds),
        predictedPace: formatPace(predictedPaceSeconds),
      };
    });
}

// Get world record comparison
function getWorldRecordComparison(distanceKm: number, totalSeconds: number, gender?: 'male' | 'female'): RunningPaceResult['worldRecordComparison'] | undefined {
  // World records (approximate, for common distances)
  const records: { [key: number]: { male: number; female: number } } = {
    5: { male: 12 * 60 + 35, female: 14 * 60 + 11 }, // 5K
    10: { male: 26 * 60 + 11, female: 29 * 60 + 1 }, // 10K
    21.0975: { male: 57 * 60 + 30, female: 64 * 60 + 31 }, // Half Marathon
    42.195: { male: 2 * 3600 + 35, female: 2 * 3600 + 11 * 60 + 53 }, // Marathon
  };

  const recordDistance = Object.keys(records).find(d => Math.abs(parseFloat(d) - distanceKm) < 0.5);
  if (!recordDistance) return undefined;

  const recordTime = gender ? records[parseFloat(recordDistance)][gender] : records[parseFloat(recordDistance)].male;
  const percentage = (totalSeconds / recordTime) * 100;

  return {
    recordTime: formatTimeString(recordTime),
    recordPace: formatPace(recordTime / distanceKm),
    percentageOfRecord: Math.round(percentage * 10) / 10,
  };
}

// Calculate heart rate zones
function getHeartRateZones(age?: number): RunningPaceResult['heartRateZones'] | undefined {
  if (!age) return undefined;

  const maxHeartRate = 220 - age;

  return {
    maxHeartRate,
    zones: [
      { name: 'Recovery', min: Math.round(maxHeartRate * 0.60), max: Math.round(maxHeartRate * 0.70), percentage: '60-70%' },
      { name: 'Easy', min: Math.round(maxHeartRate * 0.70), max: Math.round(maxHeartRate * 0.80), percentage: '70-80%' },
      { name: 'Tempo', min: Math.round(maxHeartRate * 0.80), max: Math.round(maxHeartRate * 0.88), percentage: '80-88%' },
      { name: 'Threshold', min: Math.round(maxHeartRate * 0.88), max: Math.round(maxHeartRate * 0.92), percentage: '88-92%' },
      { name: 'Interval', min: Math.round(maxHeartRate * 0.92), max: Math.round(maxHeartRate * 0.97), percentage: '92-97%' },
      { name: 'Maximum', min: Math.round(maxHeartRate * 0.97), max: maxHeartRate, percentage: '97-100%' },
    ],
  };
}

// Calculate performance score (0-100)
function calculatePerformanceScore(pacePerKmSeconds: number, distance: number, vo2Max?: number): number {
  let score = 50; // Base score

  // Pace-based scoring
  if (pacePerKmSeconds < 240) score += 40; // Elite < 4:00
  else if (pacePerKmSeconds < 300) score += 30; // Advanced 4:00-5:00
  else if (pacePerKmSeconds < 360) score += 15; // Intermediate 5:00-6:00
  else score += 5; // Beginner

  // Distance bonus (longer distances = more impressive)
  if (distance >= 42) score += 10; // Marathon
  else if (distance >= 21) score += 5; // Half marathon

  // VO2 Max bonus
  if (vo2Max) {
    if (vo2Max >= 60) score += 10;
    else if (vo2Max >= 50) score += 5;
  }

  return Math.min(100, Math.max(0, Math.round(score)));
}

export function calculateRunningPace(input: RunningPaceInput): RunningPaceResult {
  const { distance, distanceUnit, hours, minutes, seconds, age, weight, weightUnit, gender } = input;

  // Convert everything to metric (km) for calculations
  const distanceInKm = distanceUnit === 'km' ? distance : distance * MILES_TO_KM;
  const distanceInMiles = distanceUnit === 'miles' ? distance : distance * KM_TO_MILES;

  // Total time in seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Pace calculations
  const pacePerKmSeconds = totalSeconds / distanceInKm;
  const pacePerMileSeconds = totalSeconds / distanceInMiles;

  const pacePerKm = formatTime(pacePerKmSeconds);
  const pacePerMile = formatTime(pacePerMileSeconds);

  // Speed calculations
  const speedKmh = (distanceInKm / totalSeconds) * 3600;
  const speedMph = (distanceInMiles / totalSeconds) * 3600;

  // Generate splits (every km or mile)
  const splits: RunningPaceResult['splits'] = [];
  const splitUnit = distanceUnit;
  const numSplits = Math.floor(distance);

  for (let i = 1; i <= numSplits; i++) {
    const splitSeconds = i * (splitUnit === 'km' ? pacePerKmSeconds : pacePerMileSeconds);
    const splitTime = formatTime(splitSeconds);
    const lapPace = formatPace(splitUnit === 'km' ? pacePerKmSeconds : pacePerMileSeconds);
    splits.push({
      distance: i,
      unit: splitUnit,
      time: `${String(splitTime.hours).padStart(2, '0')}:${String(splitTime.minutes).padStart(2, '0')}:${String(splitTime.seconds).padStart(2, '0')}`,
      pace: lapPace,
    });
  }

  // Enhanced calculations
  const runningLevel = getRunningLevel(pacePerKmSeconds, distanceInKm);
  const vo2Max = estimateVO2Max(speedKmh, distanceInKm);
  const trainingZones = getTrainingZones(pacePerKmSeconds);
  const racePredictions = predictRaceTimes(pacePerKmSeconds, distanceInKm);
  const worldRecordComparison = getWorldRecordComparison(distanceInKm, totalSeconds, gender);
  const heartRateZones = getHeartRateZones(age);
  const performanceScore = calculatePerformanceScore(pacePerKmSeconds, distanceInKm, vo2Max);

  // Calorie calculation (if weight provided)
  let caloriesBurned: number | undefined;
  if (weight) {
    const weightKg = weightUnit === 'kg' ? weight : weight * 0.453592;
    caloriesBurned = calculateCalories(distanceInKm, weightKg, gender || 'male', totalSeconds);
  }

  return {
    pacePerKm: {
      minutes: pacePerKm.minutes,
      seconds: pacePerKm.seconds,
      decimal: parseFloat((pacePerKmSeconds / 60).toFixed(2)),
    },
    pacePerMile: {
      minutes: pacePerMile.minutes,
      seconds: pacePerMile.seconds,
      decimal: parseFloat((pacePerMileSeconds / 60).toFixed(2)),
    },
    speed: {
      kmh: parseFloat(speedKmh.toFixed(2)),
      mph: parseFloat(speedMph.toFixed(2)),
    },
    totalTime: {
      hours,
      minutes,
      seconds,
      totalSeconds,
    },
    splits,
    runningLevel,
    vo2Max,
    caloriesBurned,
    trainingZones,
    racePredictions,
    worldRecordComparison,
    heartRateZones,
    performanceScore,
  };
}

export const commonDistances = {
  km: [
    { label: '5K', value: 5 },
    { label: '10K', value: 10 },
    { label: 'Half Marathon', value: 21.0975 },
    { label: 'Marathon', value: 42.195 },
  ],
  miles: [
    { label: '5K', value: 3.10686 },
    { label: '10K', value: 6.21371 },
    { label: 'Half Marathon', value: 13.1094 },
    { label: 'Marathon', value: 26.2188 },
  ],
};
