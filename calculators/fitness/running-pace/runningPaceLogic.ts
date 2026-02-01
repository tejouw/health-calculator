import { RunningPaceInput, RunningPaceResult } from './runningPaceTypes';

const KM_TO_MILES = 0.621371;
const MILES_TO_KM = 1.60934;

function formatTime(totalSeconds: number): { hours: number; minutes: number; seconds: number } {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return { hours, minutes, seconds };
}

export function calculateRunningPace(input: RunningPaceInput): RunningPaceResult {
  const { distance, distanceUnit, hours, minutes, seconds } = input;

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
  const splitDistance = 1;
  const numSplits = Math.floor(distance);

  for (let i = 1; i <= numSplits; i++) {
    const splitSeconds = i * (splitUnit === 'km' ? pacePerKmSeconds : pacePerMileSeconds);
    const splitTime = formatTime(splitSeconds);
    splits.push({
      distance: i,
      unit: splitUnit,
      time: `${String(splitTime.hours).padStart(2, '0')}:${String(splitTime.minutes).padStart(2, '0')}:${String(splitTime.seconds).padStart(2, '0')}`,
    });
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
