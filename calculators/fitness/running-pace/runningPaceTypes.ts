export interface RunningPaceInput {
  distance: number;
  distanceUnit: 'km' | 'miles';
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RunningPaceResult {
  pacePerKm: {
    minutes: number;
    seconds: number;
    decimal: number;
  };
  pacePerMile: {
    minutes: number;
    seconds: number;
    decimal: number;
  };
  speed: {
    kmh: number;
    mph: number;
  };
  totalTime: {
    hours: number;
    minutes: number;
    seconds: number;
    totalSeconds: number;
  };
  splits: {
    distance: number;
    unit: string;
    time: string;
  }[];
}
