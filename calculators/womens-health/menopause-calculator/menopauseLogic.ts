import {
  MenopauseFactor,
  MenopauseInput,
  MenopauseResult,
  MenopauseStage,
  MenopauseStageInfo,
} from './menopauseTypes';

const BASELINE_AGE = 51;
const MIN_AGE = 40;
const MAX_AGE = 58;
const UNCERTAINTY = 2.5;

export function calculateMenopause(input: MenopauseInput): MenopauseResult {
  const factors: MenopauseFactor[] = [];
  let estimated = BASELINE_AGE;

  if (input.motherMenopauseAge && input.motherMenopauseAge >= 30 && input.motherMenopauseAge <= 65) {
    const motherWeighted = BASELINE_AGE * 0.3 + input.motherMenopauseAge * 0.7;
    const impact = motherWeighted - estimated;
    estimated = motherWeighted;
    if (Math.abs(impact) >= 0.2) {
      factors.push({
        key: 'mother',
        impact,
        label: {
          en: `Mother's menopause age (${input.motherMenopauseAge})`,
          tr: `Annenin menopoz yaşı (${input.motherMenopauseAge})`,
        },
      });
    }
  }

  if (input.smokingStatus === 'current') {
    estimated -= 1.8;
    factors.push({
      key: 'smoking-current',
      impact: -1.8,
      label: { en: 'Current smoker', tr: 'Aktif sigara kullanımı' },
    });
  } else if (input.smokingStatus === 'former') {
    estimated -= 0.6;
    factors.push({
      key: 'smoking-former',
      impact: -0.6,
      label: { en: 'Former smoker', tr: 'Eski sigara kullanımı' },
    });
  }

  if (typeof input.bmi === 'number' && input.bmi > 0) {
    if (input.bmi < 18.5) {
      estimated -= 1.0;
      factors.push({
        key: 'bmi-low',
        impact: -1.0,
        label: { en: 'Low BMI (<18.5)', tr: 'Düşük VKİ (<18.5)' },
      });
    } else if (input.bmi >= 30) {
      estimated += 0.5;
      factors.push({
        key: 'bmi-high',
        impact: 0.5,
        label: { en: 'BMI 30+', tr: 'VKİ 30 ve üzeri' },
      });
    }
  }

  if (typeof input.menarcheAge === 'number' && input.menarcheAge > 0) {
    if (input.menarcheAge < 12) {
      estimated -= 0.5;
      factors.push({
        key: 'menarche-early',
        impact: -0.5,
        label: { en: 'Early first period (<12)', tr: 'Erken ilk adet (<12)' },
      });
    } else if (input.menarcheAge > 14) {
      estimated += 0.5;
      factors.push({
        key: 'menarche-late',
        impact: 0.5,
        label: { en: 'Late first period (>14)', tr: 'Geç ilk adet (>14)' },
      });
    }
  }

  if (typeof input.pregnancies === 'number') {
    if (input.pregnancies === 0) {
      estimated -= 1.0;
      factors.push({
        key: 'parity-zero',
        impact: -1.0,
        label: { en: 'Never pregnant', tr: 'Hiç hamile kalmamış' },
      });
    } else if (input.pregnancies >= 3) {
      estimated += 0.6;
      factors.push({
        key: 'parity-high',
        impact: 0.6,
        label: { en: '3+ pregnancies', tr: '3 veya daha fazla hamilelik' },
      });
    }
  }

  if (input.contraceptiveUse === 'gt5') {
    estimated += 0.5;
    factors.push({
      key: 'ocp-long',
      impact: 0.5,
      label: {
        en: 'Long-term oral contraceptive use',
        tr: 'Uzun süreli doğum kontrol hapı kullanımı',
      },
    });
  } else if (input.contraceptiveUse === '2to5') {
    estimated += 0.2;
    factors.push({
      key: 'ocp-mid',
      impact: 0.2,
      label: {
        en: '2-5 years oral contraceptive use',
        tr: '2-5 yıl doğum kontrol hapı kullanımı',
      },
    });
  }

  if (input.familyEarlyMenopause) {
    estimated -= 2.0;
    factors.push({
      key: 'family-early',
      impact: -2.0,
      label: {
        en: 'Family history of early menopause',
        tr: 'Ailede erken menopoz öyküsü',
      },
    });
  }

  const clamped = Math.max(MIN_AGE, Math.min(MAX_AGE, estimated));
  const estimatedAge = Math.round(clamped * 10) / 10;
  const yearsRemaining = Math.round((estimatedAge - input.currentAge) * 10) / 10;
  const rangeMin = Math.round((estimatedAge - UNCERTAINTY) * 10) / 10;
  const rangeMax = Math.round((estimatedAge + UNCERTAINTY) * 10) / 10;

  const stage = getStage(input.currentAge, estimatedAge);

  return {
    estimatedAge,
    yearsRemaining,
    rangeMin,
    rangeMax,
    stage,
    factors,
  };
}

function getStage(currentAge: number, estimatedAge: number): MenopauseStage {
  const delta = currentAge - estimatedAge;
  if (delta <= -8) return 'premenopause';
  if (delta <= -2) return 'late-reproductive';
  if (delta < 1) return 'perimenopause';
  if (delta < 2) return 'menopause';
  return 'postmenopause';
}

export const menopauseStages: Record<MenopauseStage, MenopauseStageInfo> = {
  premenopause: {
    key: 'premenopause',
    label: { en: 'Premenopause', tr: 'Premenopoz' },
    description: {
      en: 'Your reproductive years are ongoing with regular menstrual cycles. Menopause is still several years away.',
      tr: 'Düzenli adet döngüleriyle üreme dönemi devam ediyor. Menopoza daha birkaç yıl var.',
    },
    color: 'success',
  },
  'late-reproductive': {
    key: 'late-reproductive',
    label: { en: 'Late Reproductive Stage', tr: 'Geç Üreme Dönemi' },
    description: {
      en: 'You may notice subtle hormonal shifts. Cycles are still mostly regular, but ovarian reserve is gradually declining.',
      tr: 'Hafif hormonal değişiklikler fark edebilirsiniz. Döngüler hâlâ çoğunlukla düzenlidir, ancak yumurtalık rezervi kademeli olarak azalır.',
    },
    color: 'primary',
  },
  perimenopause: {
    key: 'perimenopause',
    label: { en: 'Perimenopause', tr: 'Perimenopoz (Menopoz Geçişi)' },
    description: {
      en: 'Menopausal transition. Cycles may become irregular, and symptoms such as hot flashes, mood changes and sleep disturbances can appear.',
      tr: 'Menopoz geçiş dönemi. Döngüler düzensizleşebilir; sıcak basması, ruh hali değişiklikleri ve uyku sorunları gibi belirtiler başlayabilir.',
    },
    color: 'warning',
  },
  menopause: {
    key: 'menopause',
    label: { en: 'Menopause', tr: 'Menopoz' },
    description: {
      en: 'You are near or at the transition point. Menopause is confirmed after 12 consecutive months without a menstrual period.',
      tr: 'Geçiş noktasına yakın ya da içindesiniz. Menopoz, art arda 12 ay adet görülmemesiyle doğrulanır.',
    },
    color: 'warning',
  },
  postmenopause: {
    key: 'postmenopause',
    label: { en: 'Postmenopause', tr: 'Postmenopoz' },
    description: {
      en: 'You are in the postmenopausal years. Symptoms often ease over time, but long-term bone, cardiovascular and metabolic health become more important.',
      tr: 'Postmenopoz dönemindesiniz. Belirtiler zamanla azalır, ancak uzun vadeli kemik, kalp-damar ve metabolik sağlık daha önem kazanır.',
    },
    color: 'primary',
  },
};
