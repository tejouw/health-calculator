import { EyeColor, EyeColorInput, EyeColorProbability, EyeColorResult } from './eyeColorTypes';

/**
 * Eye color genetics simplified model
 *
 * Uses a two-gene model (OCA2/HERC2) with dominance hierarchy:
 * Brown (B) > Green (G) > Blue (b)
 *
 * Genotype → Phenotype:
 * BB, Bb, BG → Brown
 * GG, Gb → Green
 * bb → Blue
 * Hazel is treated as intermediate (BG or Gb with modifier genes)
 */

const EYE_COLOR_INFO: Record<EyeColor, { label: { en: string; tr: string }; hex: string }> = {
  brown: { label: { en: 'Brown', tr: 'Kahverengi' }, hex: '#8B4513' },
  blue: { label: { en: 'Blue', tr: 'Mavi' }, hex: '#4682B4' },
  green: { label: { en: 'Green', tr: 'Yeşil' }, hex: '#2E8B57' },
  hazel: { label: { en: 'Hazel', tr: 'Ela' }, hex: '#C4A45A' },
};

// Possible genotypes for each phenotype with base probabilities
type Allele = 'B' | 'G' | 'b';
type Genotype = [Allele, Allele];

function getBaseGenotypeProbabilities(color: EyeColor): Map<string, number> {
  const probs = new Map<string, number>();
  switch (color) {
    case 'brown':
      probs.set('BB', 0.40);
      probs.set('Bb', 0.35);
      probs.set('BG', 0.25);
      break;
    case 'green':
      probs.set('GG', 0.50);
      probs.set('Gb', 0.50);
      break;
    case 'blue':
      probs.set('bb', 1.0);
      break;
    case 'hazel':
      probs.set('BG', 0.40);
      probs.set('Gb', 0.40);
      probs.set('Bb', 0.20);
      break;
  }
  return probs;
}

function adjustWithGrandparentInfo(
  parentColor: EyeColor,
  grandparent1?: EyeColor,
  grandparent2?: EyeColor,
): Map<string, number> {
  const probs = getBaseGenotypeProbabilities(parentColor);

  if (parentColor === 'blue') return probs; // bb is certain

  if (parentColor === 'brown') {
    const hasBlueGP = grandparent1 === 'blue' || grandparent2 === 'blue';
    const hasGreenGP = grandparent1 === 'green' || grandparent2 === 'green';
    const hasHazelGP = grandparent1 === 'hazel' || grandparent2 === 'hazel';
    const bothBrown = grandparent1 === 'brown' && grandparent2 === 'brown';

    if (hasBlueGP) {
      // If a grandparent is blue (bb), parent MUST carry a 'b' allele
      probs.clear();
      probs.set('Bb', 0.70);
      probs.set('BG', 0.10);
      probs.set('BB', 0.20);
    } else if (hasGreenGP) {
      probs.clear();
      probs.set('BG', 0.55);
      probs.set('BB', 0.20);
      probs.set('Bb', 0.25);
    } else if (hasHazelGP) {
      probs.clear();
      probs.set('BG', 0.40);
      probs.set('Bb', 0.35);
      probs.set('BB', 0.25);
    } else if (bothBrown) {
      probs.clear();
      probs.set('BB', 0.55);
      probs.set('Bb', 0.25);
      probs.set('BG', 0.20);
    }
  } else if (parentColor === 'green') {
    const hasBlueGP = grandparent1 === 'blue' || grandparent2 === 'blue';

    if (hasBlueGP) {
      // Green parent with blue grandparent: more likely Gb
      probs.clear();
      probs.set('Gb', 0.75);
      probs.set('GG', 0.25);
    }
  } else if (parentColor === 'hazel') {
    const hasBlueGP = grandparent1 === 'blue' || grandparent2 === 'blue';
    const hasBrownGP = grandparent1 === 'brown' || grandparent2 === 'brown';

    if (hasBlueGP) {
      probs.clear();
      probs.set('Gb', 0.60);
      probs.set('Bb', 0.30);
      probs.set('BG', 0.10);
    } else if (hasBrownGP) {
      probs.clear();
      probs.set('BG', 0.55);
      probs.set('Bb', 0.25);
      probs.set('Gb', 0.20);
    }
  }

  return probs;
}

function genotypeToAlleles(g: string): Genotype {
  return [g[0] as Allele, g[1] as Allele];
}

function phenotypeFromGenotype(g: string): EyeColor {
  const alleles = g.split('').sort();
  const hasB = alleles.includes('B');
  const hasG = alleles.includes('G');

  if (hasB && hasG) return 'hazel'; // BG
  if (hasB) return 'brown'; // BB or Bb
  if (hasG) return 'green'; // GG or Gb
  return 'blue'; // bb
}

export function calculateEyeColorProbabilities(input: EyeColorInput): EyeColorResult {
  const motherGenotypes = adjustWithGrandparentInfo(
    input.motherEyeColor,
    input.maternalGrandmother,
    input.maternalGrandfather,
  );

  const fatherGenotypes = adjustWithGrandparentInfo(
    input.fatherEyeColor,
    input.paternalGrandmother,
    input.paternalGrandfather,
  );

  // Cross all possible genotype combinations
  const colorProbs: Record<EyeColor, number> = { brown: 0, blue: 0, green: 0, hazel: 0 };

  for (const [mGeno, mProb] of motherGenotypes) {
    const mAlleles = genotypeToAlleles(mGeno);
    for (const [fGeno, fProb] of fatherGenotypes) {
      const fAlleles = genotypeToAlleles(fGeno);
      const pairProb = mProb * fProb;

      // Each parent passes one allele (50/50 for each allele position)
      for (let mi = 0; mi < 2; mi++) {
        for (let fi = 0; fi < 2; fi++) {
          const childGeno = `${mAlleles[mi]}${fAlleles[fi]}`;
          const phenotype = phenotypeFromGenotype(childGeno);
          colorProbs[phenotype] += pairProb * 0.25; // 0.25 = 0.5 * 0.5
        }
      }
    }
  }

  // Normalize to ensure sum = 100%
  const total = Object.values(colorProbs).reduce((a, b) => a + b, 0);
  const probabilities: EyeColorProbability[] = (['brown', 'green', 'hazel', 'blue'] as EyeColor[])
    .map((color) => ({
      color,
      percentage: Math.round((colorProbs[color] / total) * 1000) / 10,
      label: EYE_COLOR_INFO[color].label,
      hex: EYE_COLOR_INFO[color].hex,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Fix rounding to sum exactly to 100
  const roundedSum = probabilities.reduce((sum, p) => sum + p.percentage, 0);
  if (roundedSum !== 100) {
    probabilities[0].percentage = Math.round((probabilities[0].percentage + (100 - roundedSum)) * 10) / 10;
  }

  const mostLikely = probabilities[0].color;
  const explanation = getExplanation(input, probabilities);

  return { probabilities, mostLikely, explanation };
}

function getExplanation(
  input: EyeColorInput,
  probs: EyeColorProbability[],
): { en: string; tr: string } {
  const top = probs[0];
  const mother = EYE_COLOR_INFO[input.motherEyeColor];
  const father = EYE_COLOR_INFO[input.fatherEyeColor];
  const topLabel = EYE_COLOR_INFO[top.color];

  const en = `Based on the combination of a ${mother.label.en.toLowerCase()}-eyed mother and a ${father.label.en.toLowerCase()}-eyed father, your baby is most likely to have ${topLabel.label.en.toLowerCase()} eyes (${top.percentage}%).${
    input.maternalGrandmother || input.paternalGrandmother
      ? ' Grandparent eye colors have been factored in for more accurate predictions.'
      : ' Adding grandparent eye colors can improve prediction accuracy.'
  } Remember that eye color genetics involves multiple genes, so surprises are always possible!`;

  const tr = `${mother.label.tr} gözlü bir anne ve ${father.label.tr.toLowerCase()} gözlü bir babanın kombinasyonuna göre, bebeğinizin ${topLabel.label.tr.toLowerCase()} gözlü olma olasılığı en yüksek (%${top.percentage}).${
    input.maternalGrandmother || input.paternalGrandmother
      ? ' Büyükanne ve büyükbaba göz renkleri daha doğru tahmin için hesaba katılmıştır.'
      : ' Büyükanne ve büyükbaba göz renklerini eklemek tahmin doğruluğunu artırabilir.'
  } Göz rengi genetiği birden fazla gen içerdiğinden, sürprizler her zaman mümkündür!`;

  return { en, tr };
}

export { EYE_COLOR_INFO };
