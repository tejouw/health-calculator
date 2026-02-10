export interface ChineseGenderInput {
  motherBirthDate: Date;
  conceptionDate: Date;
}

export interface ChineseGenderResult {
  predictedGender: 'boy' | 'girl';
  lunarAge: number;
  lunarMonth: number;
  conceptionYear: number;
  chineseZodiac: {
    en: string;
    tr: string;
  };
  zodiacElement: {
    en: string;
    tr: string;
  };
  confidence: 'entertainment' | 'not-scientific';
}

export interface ChineseZodiac {
  animal: {
    en: string;
    tr: string;
  };
  element: {
    en: string;
    tr: string;
  };
  year: number;
}

export interface GenderPredictionChart {
  lunarAge: number;
  months: {
    [month: number]: 'boy' | 'girl';
  };
}
