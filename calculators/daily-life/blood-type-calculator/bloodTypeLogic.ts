import {
  BloodGroup,
  RhFactor,
  BloodType,
  BloodTypeInput,
  BloodTypeResult,
  ChildBloodTypeProbability,
} from './bloodTypeTypes';

// ABO allele combinations for each blood group
// Each person has 2 alleles; A and B are codominant, O is recessive
type Allele = 'A' | 'B' | 'O';
type AllelePair = [Allele, Allele];

function getABOAlleles(group: BloodGroup): AllelePair[] {
  switch (group) {
    case 'A':
      return [['A', 'A'], ['A', 'O']];
    case 'B':
      return [['B', 'B'], ['B', 'O']];
    case 'AB':
      return [['A', 'B']];
    case 'O':
      return [['O', 'O']];
  }
}

function allelesToGroup(a1: Allele, a2: Allele): BloodGroup {
  const sorted = [a1, a2].sort().join('');
  switch (sorted) {
    case 'AA': return 'A';
    case 'AO': return 'A';
    case 'BB': return 'B';
    case 'BO': return 'B';
    case 'AB': return 'AB';
    case 'OO': return 'O';
    default: return 'O';
  }
}

// Rh alleles: + can be Dd or DD, - is always dd
type RhAllele = 'D' | 'd';
type RhAllelePair = [RhAllele, RhAllele];

function getRhAlleles(rh: RhFactor): RhAllelePair[] {
  if (rh === '+') {
    return [['D', 'D'], ['D', 'd']];
  }
  return [['d', 'd']];
}

function rhAllelesToFactor(a1: RhAllele, a2: RhAllele): RhFactor {
  return (a1 === 'D' || a2 === 'D') ? '+' : '-';
}

export function calculateBloodType(input: BloodTypeInput): BloodTypeResult {
  const { parent1Group, parent1Rh, parent2Group, parent2Rh } = input;

  // Calculate ABO probabilities
  const p1ABOAlleles = getABOAlleles(parent1Group);
  const p2ABOAlleles = getABOAlleles(parent2Group);

  const groupCounts: Record<BloodGroup, number> = { A: 0, B: 0, AB: 0, O: 0 };
  let totalABOCombinations = 0;

  for (const p1 of p1ABOAlleles) {
    for (const p2 of p2ABOAlleles) {
      for (const a1 of p1) {
        for (const a2 of p2) {
          const group = allelesToGroup(a1, a2);
          groupCounts[group]++;
          totalABOCombinations++;
        }
      }
    }
  }

  // Calculate Rh probabilities
  const p1RhAlleles = getRhAlleles(parent1Rh);
  const p2RhAlleles = getRhAlleles(parent2Rh);

  const rhCounts: Record<RhFactor, number> = { '+': 0, '-': 0 };
  let totalRhCombinations = 0;

  for (const p1 of p1RhAlleles) {
    for (const p2 of p2RhAlleles) {
      for (const a1 of p1) {
        for (const a2 of p2) {
          const rh = rhAllelesToFactor(a1, a2);
          rhCounts[rh]++;
          totalRhCombinations++;
        }
      }
    }
  }

  // Combine ABO and Rh probabilities
  const allGroups: BloodGroup[] = ['A', 'B', 'AB', 'O'];
  const allRh: RhFactor[] = ['+', '-'];
  const possibleTypes: ChildBloodTypeProbability[] = [];
  const impossibleTypes: BloodType[] = [];

  for (const group of allGroups) {
    for (const rh of allRh) {
      const groupProb = (groupCounts[group] / totalABOCombinations) * 100;
      const rhProb = (rhCounts[rh] / totalRhCombinations) * 100;
      const combinedProb = Math.round((groupProb * rhProb) / 100);
      const bloodType: BloodType = `${group}${rh}`;

      if (combinedProb > 0) {
        possibleTypes.push({
          bloodType,
          group,
          rh,
          probability: combinedProb,
        });
      } else {
        impossibleTypes.push(bloodType);
      }
    }
  }

  // Sort by probability descending
  possibleTypes.sort((a, b) => b.probability - a.probability);

  // Rh incompatibility risk: mother Rh- and father Rh+
  const rhIncompatibilityRisk =
    (parent1Rh === '-' && parent2Rh === '+') ||
    (parent1Rh === '+' && parent2Rh === '-');

  // Donor compatibility for parent 1
  const parent1Type: BloodType = `${parent1Group}${parent1Rh}`;
  const donorCompatibility = getDonorCompatibility(parent1Type);

  return {
    possibleTypes,
    impossibleTypes,
    parent1: parent1Type,
    parent2: `${parent2Group}${parent2Rh}`,
    rhIncompatibilityRisk,
    donorCompatibility,
  };
}

const donorMap: Record<BloodType, { canDonateTo: BloodType[]; canReceiveFrom: BloodType[] }> = {
  'O-': {
    canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    canReceiveFrom: ['O-'],
  },
  'O+': {
    canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
    canReceiveFrom: ['O+', 'O-'],
  },
  'A-': {
    canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    canReceiveFrom: ['A-', 'O-'],
  },
  'A+': {
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
  },
  'B-': {
    canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    canReceiveFrom: ['B-', 'O-'],
  },
  'B+': {
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
  },
  'AB-': {
    canDonateTo: ['AB+', 'AB-'],
    canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'],
  },
  'AB+': {
    canDonateTo: ['AB+'],
    canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
};

function getDonorCompatibility(bloodType: BloodType) {
  return donorMap[bloodType] || { canDonateTo: [], canReceiveFrom: [] };
}

export function getBloodTypeInfo(locale: 'en' | 'tr') {
  return {
    groupDescriptions: {
      A: {
        en: 'Type A blood has A antigens on red blood cells and B antibodies in plasma.',
        tr: 'A grubu kan, kırmızı kan hücrelerinde A antijenleri ve plazmada B antikorları taşır.',
      },
      B: {
        en: 'Type B blood has B antigens on red blood cells and A antibodies in plasma.',
        tr: 'B grubu kan, kırmızı kan hücrelerinde B antijenleri ve plazmada A antikorları taşır.',
      },
      AB: {
        en: 'Type AB blood has both A and B antigens. AB+ is the universal recipient.',
        tr: 'AB grubu kan, hem A hem B antijenlerini taşır. AB+ evrensel alıcıdır.',
      },
      O: {
        en: 'Type O blood has no A or B antigens. O- is the universal donor.',
        tr: 'O grubu kan, A veya B antijeni taşımaz. O- evrensel vericdir.',
      },
    },
    rhDescription: {
      en: 'The Rh factor (+ or -) indicates the presence or absence of the D antigen on red blood cells.',
      tr: 'Rh faktörü (+ veya -), kırmızı kan hücrelerindeki D antijeninin varlığını veya yokluğunu gösterir.',
    },
  };
}
