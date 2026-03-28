export type FitzpatrickType = 1 | 2 | 3 | 4 | 5 | 6;

export type ActivityType = 'normal' | 'swimming' | 'sweating';

export interface SPFInput {
  skinType: FitzpatrickType;
  spfValue: number;
  uvIndex: number;
  activity: ActivityType;
}

export interface SPFResult {
  safeExposureMinutes: number;
  reapplyAfterMinutes: number;
  burnTimeWithoutSPF: number;
  vitaminDMinutes: number;
  riskLevel: UVRiskLevel;
  skinTypeInfo: SkinTypeInfo;
  recommendations: { en: string; tr: string }[];
}

export type UVRiskLevel = 'low' | 'moderate' | 'high' | 'very-high' | 'extreme';

export interface SkinTypeInfo {
  type: FitzpatrickType;
  label: { en: string; tr: string };
  description: { en: string; tr: string };
  baseTimeToBurn: number;
  color: string;
}

export interface UVRiskInfo {
  level: UVRiskLevel;
  label: { en: string; tr: string };
  description: { en: string; tr: string };
  color: string;
}
