export type SmokingStatus = 'never' | 'former' | 'current';
export type ContraceptiveUse = 'none' | 'lt2' | '2to5' | 'gt5';
export type MenopauseStage =
  | 'premenopause'
  | 'late-reproductive'
  | 'perimenopause'
  | 'menopause'
  | 'postmenopause';

export interface MenopauseInput {
  currentAge: number;
  motherMenopauseAge?: number;
  smokingStatus: SmokingStatus;
  bmi?: number;
  menarcheAge?: number;
  pregnancies?: number;
  contraceptiveUse: ContraceptiveUse;
  familyEarlyMenopause: boolean;
}

export interface MenopauseFactor {
  key: string;
  impact: number;
  label: {
    en: string;
    tr: string;
  };
}

export interface MenopauseResult {
  estimatedAge: number;
  yearsRemaining: number;
  rangeMin: number;
  rangeMax: number;
  stage: MenopauseStage;
  factors: MenopauseFactor[];
}

export interface MenopauseStageInfo {
  key: MenopauseStage;
  label: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  color: 'primary' | 'success' | 'warning' | 'danger';
}
