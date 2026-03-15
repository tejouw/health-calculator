export type BloodGroup = 'A' | 'B' | 'AB' | 'O';
export type RhFactor = '+' | '-';
export type BloodType = `${BloodGroup}${RhFactor}`;

export interface BloodTypeInput {
  parent1Group: BloodGroup;
  parent1Rh: RhFactor;
  parent2Group: BloodGroup;
  parent2Rh: RhFactor;
}

export interface ChildBloodTypeProbability {
  bloodType: BloodType;
  group: BloodGroup;
  rh: RhFactor;
  probability: number; // 0-100
}

export interface BloodTypeResult {
  possibleTypes: ChildBloodTypeProbability[];
  impossibleTypes: BloodType[];
  parent1: BloodType;
  parent2: BloodType;
  rhIncompatibilityRisk: boolean;
  donorCompatibility: {
    canDonateTo: BloodType[];
    canReceiveFrom: BloodType[];
  };
}
