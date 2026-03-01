export interface HeightPredictorInput {
  fatherHeight: number;
  motherHeight: number;
  childGender: 'boy' | 'girl';
  unit: 'metric' | 'imperial';
  childAge?: number;
  childCurrentHeight?: number;
}

export interface HeightPredictorResult {
  predictedHeight: number;
  rangeMin: number;
  rangeMax: number;
  midParentalHeight: number;
  geneticPotentialPercent: number;
  comparisonToAverage: number;
  averageHeight: number;
  unit: 'metric' | 'imperial';
  childGender: 'boy' | 'girl';
}
