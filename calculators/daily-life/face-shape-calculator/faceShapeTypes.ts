export interface FaceShapeInput {
  foreheadWidth: number;
  cheekboneWidth: number;
  jawlineWidth: number;
  faceLength: number;
  unit: 'cm' | 'inch';
}

export type FaceShape =
  | 'oval'
  | 'round'
  | 'square'
  | 'heart'
  | 'oblong'
  | 'diamond'
  | 'triangle';

export interface FaceShapeInfo {
  shape: FaceShape;
  label: { en: string; tr: string };
  emoji: string;
  color: string;
  description: { en: string; tr: string };
  celebrities: { en: string[]; tr: string[] };
  hairstyleTips: { en: string[]; tr: string[] };
  glassesTips: { en: string; tr: string };
}

export interface FaceShapeResult {
  shape: FaceShape;
  shapeInfo: FaceShapeInfo;
  confidence: number;
  scores: Record<FaceShape, number>;
  proportions: FaceProportions;
}

export interface FaceProportions {
  lengthToWidth: number;
  foreheadToJaw: number;
  foreheadToCheek: number;
  jawToCheek: number;
}
