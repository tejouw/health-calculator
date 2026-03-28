import { SPFInput, SPFResult, FitzpatrickType, SkinTypeInfo, UVRiskLevel, UVRiskInfo } from './spfSunscreenTypes';

export const skinTypes: Record<FitzpatrickType, SkinTypeInfo> = {
  1: {
    type: 1,
    label: { en: 'Type I - Very Fair', tr: 'Tip I - Çok Açık Ten' },
    description: {
      en: 'Always burns, never tans. Very fair skin, light eyes, freckles.',
      tr: 'Her zaman yanar, asla bronzlaşmaz. Çok açık ten, açık renkli gözler, çiller.',
    },
    baseTimeToBurn: 7,
    color: '#FDEBD0',
  },
  2: {
    type: 2,
    label: { en: 'Type II - Fair', tr: 'Tip II - Açık Ten' },
    description: {
      en: 'Burns easily, tans minimally. Fair skin, light hair.',
      tr: 'Kolay yanar, çok az bronzlaşır. Açık ten, açık renk saçlar.',
    },
    baseTimeToBurn: 15,
    color: '#FAD7A0',
  },
  3: {
    type: 3,
    label: { en: 'Type III - Medium', tr: 'Tip III - Orta Ten' },
    description: {
      en: 'Sometimes burns, gradually tans. Medium skin tone.',
      tr: 'Bazen yanar, yavaşça bronzlaşır. Orta ten rengi.',
    },
    baseTimeToBurn: 25,
    color: '#F0C27B',
  },
  4: {
    type: 4,
    label: { en: 'Type IV - Olive', tr: 'Tip IV - Esmer Ten' },
    description: {
      en: 'Rarely burns, tans easily. Olive or light brown skin.',
      tr: 'Nadiren yanar, kolay bronzlaşır. Zeytin rengi veya açık kahverengi ten.',
    },
    baseTimeToBurn: 37,
    color: '#D4A76A',
  },
  5: {
    type: 5,
    label: { en: 'Type V - Brown', tr: 'Tip V - Koyu Esmer Ten' },
    description: {
      en: 'Very rarely burns, tans very easily. Brown skin.',
      tr: 'Çok nadiren yanar, çok kolay bronzlaşır. Kahverengi ten.',
    },
    baseTimeToBurn: 52,
    color: '#A67C52',
  },
  6: {
    type: 6,
    label: { en: 'Type VI - Dark', tr: 'Tip VI - Koyu Ten' },
    description: {
      en: 'Never burns, deeply pigmented. Dark brown to black skin.',
      tr: 'Asla yanmaz, yoğun pigmentli. Koyu kahverengi ile siyah ten.',
    },
    baseTimeToBurn: 75,
    color: '#6B4226',
  },
};

export const uvRiskLevels: Record<UVRiskLevel, UVRiskInfo> = {
  low: {
    level: 'low',
    label: { en: 'Low', tr: 'Düşük' },
    description: {
      en: 'Minimal danger for the average person.',
      tr: 'Ortalama bir kişi için minimum tehlike.',
    },
    color: 'green',
  },
  moderate: {
    level: 'moderate',
    label: { en: 'Moderate', tr: 'Orta' },
    description: {
      en: 'Moderate risk of harm from unprotected sun exposure.',
      tr: 'Korumasız güneşe maruz kalmadan orta düzeyde zarar riski.',
    },
    color: 'yellow',
  },
  high: {
    level: 'high',
    label: { en: 'High', tr: 'Yüksek' },
    description: {
      en: 'High risk of harm. Protection against sun damage is needed.',
      tr: 'Yüksek zarar riski. Güneş hasarına karşı korunma gereklidir.',
    },
    color: 'orange',
  },
  'very-high': {
    level: 'very-high',
    label: { en: 'Very High', tr: 'Çok Yüksek' },
    description: {
      en: 'Very high risk. Extra precautions are essential.',
      tr: 'Çok yüksek risk. Ekstra önlemler şarttır.',
    },
    color: 'red',
  },
  extreme: {
    level: 'extreme',
    label: { en: 'Extreme', tr: 'Aşırı' },
    description: {
      en: 'Extreme risk. Avoid sun exposure during midday hours.',
      tr: 'Aşırı risk. Öğle saatlerinde güneşe çıkmaktan kaçının.',
    },
    color: 'purple',
  },
};

function getUVAdjustmentFactor(uvIndex: number): number {
  if (uvIndex <= 2) return 3.0;
  if (uvIndex <= 5) return 1.5;
  if (uvIndex <= 7) return 1.0;
  if (uvIndex <= 10) return 0.7;
  return 0.5;
}

export function getUVRiskLevel(uvIndex: number): UVRiskLevel {
  if (uvIndex <= 2) return 'low';
  if (uvIndex <= 5) return 'moderate';
  if (uvIndex <= 7) return 'high';
  if (uvIndex <= 10) return 'very-high';
  return 'extreme';
}

function getReapplyTime(activity: string, safeTime: number): number {
  const maxReapply = 120; // 2 hours max regardless

  switch (activity) {
    case 'swimming':
      return Math.min(40, safeTime);
    case 'sweating':
      return Math.min(60, safeTime);
    default:
      return Math.min(maxReapply, safeTime);
  }
}

function getRecommendations(input: SPFInput, result: Partial<SPFResult>): { en: string; tr: string }[] {
  const recs: { en: string; tr: string }[] = [];
  const riskLevel = getUVRiskLevel(input.uvIndex);

  if (input.spfValue < 30) {
    recs.push({
      en: 'Consider using SPF 30 or higher for better protection.',
      tr: 'Daha iyi korunma için SPF 30 veya üzeri kullanmayı düşünün.',
    });
  }

  if (input.spfValue < 50 && (input.skinType === 1 || input.skinType === 2)) {
    recs.push({
      en: 'With your fair skin, SPF 50+ is recommended for extended outdoor activities.',
      tr: 'Açık teniniz ile uzun süreli dış mekan aktiviteleri için SPF 50+ önerilir.',
    });
  }

  if (riskLevel === 'very-high' || riskLevel === 'extreme') {
    recs.push({
      en: 'Seek shade between 10 AM and 4 PM when UV rays are strongest.',
      tr: 'UV ışınlarının en güçlü olduğu sabah 10 ile akşam 16 arasında gölgede kalın.',
    });
    recs.push({
      en: 'Wear protective clothing, wide-brimmed hat, and UV-blocking sunglasses.',
      tr: 'Koruyucu kıyafet, geniş kenarlı şapka ve UV engelleyici güneş gözlüğü takın.',
    });
  }

  if (input.activity === 'swimming') {
    recs.push({
      en: 'Use water-resistant sunscreen and reapply immediately after swimming.',
      tr: 'Suya dayanıklı güneş kremi kullanın ve yüzdükten hemen sonra yeniden sürün.',
    });
  }

  if (input.activity === 'sweating') {
    recs.push({
      en: 'Sweating reduces sunscreen effectiveness. Reapply frequently.',
      tr: 'Terleme güneş kreminin etkinliğini azaltır. Sık sık yeniden sürün.',
    });
  }

  recs.push({
    en: 'Apply sunscreen 15-30 minutes before going outdoors for full effectiveness.',
    tr: 'Tam etkinlik için güneş kremini dışarı çıkmadan 15-30 dakika önce sürün.',
  });

  recs.push({
    en: `Don't forget often-missed areas: ears, back of neck, tops of feet, and scalp.`,
    tr: 'Sıklıkla unutulan bölgeleri atlamayın: kulaklar, ense, ayak üstleri ve saçlı deri.',
  });

  return recs;
}

export function calculateSPF(input: SPFInput): SPFResult {
  const skinTypeInfo = skinTypes[input.skinType];
  const uvFactor = getUVAdjustmentFactor(input.uvIndex);

  // Burn time without sunscreen at current UV index
  const burnTimeWithoutSPF = Math.round(skinTypeInfo.baseTimeToBurn * uvFactor);

  // Safe exposure with SPF (60% real-world effectiveness factor)
  const theoreticalProtection = burnTimeWithoutSPF * input.spfValue * 0.6;
  const safeExposureMinutes = Math.min(Math.round(theoreticalProtection), 480); // Cap at 8 hours

  // Reapply time
  const reapplyAfterMinutes = getReapplyTime(input.activity, safeExposureMinutes);

  // Vitamin D synthesis: approximately 1/3 of burn time, minimum UV index 3
  const vitaminDMinutes = input.uvIndex >= 3
    ? Math.max(5, Math.round(burnTimeWithoutSPF / 3))
    : 0;

  const riskLevel = getUVRiskLevel(input.uvIndex);

  const partialResult: Partial<SPFResult> = {
    safeExposureMinutes,
    reapplyAfterMinutes,
    burnTimeWithoutSPF,
    vitaminDMinutes,
    riskLevel,
    skinTypeInfo,
  };

  const recommendations = getRecommendations(input, partialResult);

  return {
    safeExposureMinutes,
    reapplyAfterMinutes,
    burnTimeWithoutSPF,
    vitaminDMinutes,
    riskLevel,
    skinTypeInfo,
    recommendations,
  };
}
