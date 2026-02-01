import { SleepCalculatorInput, SleepCalculatorResult, SleepTime } from './sleepTypes';

const SLEEP_CYCLE_MINUTES = 90; // One complete sleep cycle
const DEFAULT_FALL_ASLEEP_TIME = 14; // Average time to fall asleep

function formatTimeString(hours: number, minutes: number): string {
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const displayMinutes = String(minutes).padStart(2, '0');
  return `${displayHours}:${displayMinutes} ${period}`;
}

function addMinutes(hours: number, minutes: number, addMinutes: number): { hours: number; minutes: number } {
  const totalMinutes = hours * 60 + minutes + addMinutes;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return { hours: newHours, minutes: newMinutes };
}

function subtractMinutes(
  hours: number,
  minutes: number,
  subtractMinutes: number
): { hours: number; minutes: number } {
  let totalMinutes = hours * 60 + minutes - subtractMinutes;
  if (totalMinutes < 0) {
    totalMinutes += 24 * 60; // Add 24 hours if we went into previous day
  }
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMinutes = totalMinutes % 60;
  return { hours: newHours, minutes: newMinutes };
}

export function calculateSleepTimes(input: SleepCalculatorInput): SleepCalculatorResult {
  const { calculationType, targetTime, fallAsleepMinutes } = input;
  const suggestedTimes: SleepTime[] = [];

  // Recommended sleep cycles: 4, 5, 6 (6-9 hours of sleep)
  const cycles = [4, 5, 6];

  if (calculationType === 'bedtime') {
    // Calculate when to go to bed based on wake up time
    const wakeHours = targetTime.hours;
    const wakeMinutes = targetTime.minutes;

    cycles.forEach((cycle) => {
      const sleepDuration = cycle * SLEEP_CYCLE_MINUTES;
      const totalTimeNeeded = sleepDuration + fallAsleepMinutes;
      const bedTime = subtractMinutes(wakeHours, wakeMinutes, totalTimeNeeded);

      suggestedTimes.push({
        hours: bedTime.hours,
        minutes: bedTime.minutes,
        formatted: formatTimeString(bedTime.hours, bedTime.minutes),
        cycles: cycle,
      });
    });
  } else {
    // Calculate when to wake up based on bed time
    const bedHours = targetTime.hours;
    const bedMinutes = targetTime.minutes;

    cycles.forEach((cycle) => {
      const sleepDuration = cycle * SLEEP_CYCLE_MINUTES;
      const totalTimeNeeded = sleepDuration + fallAsleepMinutes;
      const wakeTime = addMinutes(bedHours, bedMinutes, totalTimeNeeded);

      suggestedTimes.push({
        hours: wakeTime.hours,
        minutes: wakeTime.minutes,
        formatted: formatTimeString(wakeTime.hours, wakeTime.minutes),
        cycles: cycle,
      });
    });
  }

  return {
    suggestedTimes,
    fallAsleepTime: fallAsleepMinutes,
    sleepCycleDuration: SLEEP_CYCLE_MINUTES,
  };
}

export const sleepRecommendations = {
  en: {
    title: 'Sleep Cycle Information',
    description:
      'A complete sleep cycle lasts about 90 minutes. Waking up between cycles (rather than during a cycle) helps you feel more refreshed and alert.',
    tips: [
      'Adults need 4-6 complete sleep cycles (6-9 hours) per night',
      'Try to maintain consistent sleep and wake times',
      'Avoid screens 1 hour before bedtime',
      'Keep your bedroom cool, dark, and quiet',
      'Average person takes 14 minutes to fall asleep',
    ],
  },
  tr: {
    title: 'Uyku Döngüsü Bilgisi',
    description:
      'Tam bir uyku döngüsü yaklaşık 90 dakika sürer. Döngüler arasında (bir döngünün ortasında değil) uyanmak, kendinizi daha dinlenmiş ve uyanık hissetmenize yardımcı olur.',
    tips: [
      'Yetişkinler gecede 4-6 tam uyku döngüsüne (6-9 saat) ihtiyaç duyar',
      'Tutarlı uyku ve uyanma saatlerini korumaya çalışın',
      'Yatmadan 1 saat önce ekranlardan kaçının',
      'Yatak odanızı serin, karanlık ve sessiz tutun',
      'Ortalama bir kişi uykuya dalmak için 14 dakika alır',
    ],
  },
};
