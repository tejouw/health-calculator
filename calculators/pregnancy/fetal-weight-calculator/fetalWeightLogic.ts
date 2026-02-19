import {
  FetalWeightInput,
  FetalWeightResult,
  PercentileStatus,
  WeeklyGrowthData,
  FetalDevelopment,
} from './fetalWeightTypes';

// WHO Fetal Growth Chart Data (Percentiles: 10th, 50th, 90th)
// Weight in grams, Length in cm (crown-to-heel)
const weeklyGrowthData: WeeklyGrowthData[] = [
  { week: 8, weightP10: 1, weightP50: 1, weightP90: 2, length: 1.6, comparison: { en: 'Raspberry', tr: 'Ahududu' }, comparisonEmoji: '🫐' },
  { week: 9, weightP10: 2, weightP50: 2, weightP90: 3, length: 2.3, comparison: { en: 'Cherry', tr: 'Kiraz' }, comparisonEmoji: '🍒' },
  { week: 10, weightP10: 3, weightP50: 4, weightP90: 5, length: 3.1, comparison: { en: 'Kumquat', tr: 'Kamkat' }, comparisonEmoji: '🍊' },
  { week: 11, weightP10: 6, weightP50: 7, weightP90: 9, length: 4.1, comparison: { en: 'Fig', tr: 'İncir' }, comparisonEmoji: '🫒' },
  { week: 12, weightP10: 12, weightP50: 14, weightP90: 17, length: 5.4, comparison: { en: 'Lime', tr: 'Misket Limonu' }, comparisonEmoji: '🍋' },
  { week: 13, weightP10: 20, weightP50: 23, weightP90: 28, length: 7.4, comparison: { en: 'Peach', tr: 'Şeftali' }, comparisonEmoji: '🍑' },
  { week: 14, weightP10: 35, weightP50: 43, weightP90: 52, length: 8.7, comparison: { en: 'Lemon', tr: 'Limon' }, comparisonEmoji: '🍋' },
  { week: 15, weightP10: 55, weightP50: 70, weightP90: 85, length: 10.1, comparison: { en: 'Apple', tr: 'Elma' }, comparisonEmoji: '🍎' },
  { week: 16, weightP10: 80, weightP50: 100, weightP90: 120, length: 11.6, comparison: { en: 'Avocado', tr: 'Avokado' }, comparisonEmoji: '🥑' },
  { week: 17, weightP10: 110, weightP50: 140, weightP90: 170, length: 13.0, comparison: { en: 'Pear', tr: 'Armut' }, comparisonEmoji: '🍐' },
  { week: 18, weightP10: 150, weightP50: 190, weightP90: 230, length: 14.2, comparison: { en: 'Bell Pepper', tr: 'Dolmalık Biber' }, comparisonEmoji: '🫑' },
  { week: 19, weightP10: 190, weightP50: 240, weightP90: 290, length: 15.3, comparison: { en: 'Mango', tr: 'Mango' }, comparisonEmoji: '🥭' },
  { week: 20, weightP10: 240, weightP50: 300, weightP90: 370, length: 16.4, comparison: { en: 'Banana', tr: 'Muz' }, comparisonEmoji: '🍌' },
  { week: 21, weightP10: 290, weightP50: 360, weightP90: 440, length: 26.7, comparison: { en: 'Carrot', tr: 'Havuç' }, comparisonEmoji: '🥕' },
  { week: 22, weightP10: 340, weightP50: 430, weightP90: 520, length: 27.8, comparison: { en: 'Papaya', tr: 'Papaya' }, comparisonEmoji: '🍈' },
  { week: 23, weightP10: 400, weightP50: 500, weightP90: 610, length: 28.9, comparison: { en: 'Grapefruit', tr: 'Greyfurt' }, comparisonEmoji: '🍊' },
  { week: 24, weightP10: 470, weightP50: 600, weightP90: 730, length: 30.0, comparison: { en: 'Corn on the Cob', tr: 'Mısır Koçanı' }, comparisonEmoji: '🌽' },
  { week: 25, weightP10: 550, weightP50: 660, weightP90: 820, length: 34.6, comparison: { en: 'Cauliflower', tr: 'Karnabahar' }, comparisonEmoji: '🥦' },
  { week: 26, weightP10: 640, weightP50: 760, weightP90: 930, length: 35.6, comparison: { en: 'Lettuce Head', tr: 'Marul' }, comparisonEmoji: '🥬' },
  { week: 27, weightP10: 740, weightP50: 875, weightP90: 1060, length: 36.6, comparison: { en: 'Rutabaga', tr: 'Şalgam' }, comparisonEmoji: '🍠' },
  { week: 28, weightP10: 850, weightP50: 1005, weightP90: 1210, length: 37.6, comparison: { en: 'Eggplant', tr: 'Patlıcan' }, comparisonEmoji: '🍆' },
  { week: 29, weightP10: 970, weightP50: 1153, weightP90: 1380, length: 38.6, comparison: { en: 'Butternut Squash', tr: 'Bal Kabağı' }, comparisonEmoji: '🎃' },
  { week: 30, weightP10: 1100, weightP50: 1319, weightP90: 1570, length: 39.9, comparison: { en: 'Cabbage', tr: 'Lahana' }, comparisonEmoji: '🥬' },
  { week: 31, weightP10: 1240, weightP50: 1502, weightP90: 1780, length: 41.1, comparison: { en: 'Coconut', tr: 'Hindistancevizi' }, comparisonEmoji: '🥥' },
  { week: 32, weightP10: 1390, weightP50: 1702, weightP90: 2010, length: 42.4, comparison: { en: 'Jicama', tr: 'Yer Elması' }, comparisonEmoji: '🥔' },
  { week: 33, weightP10: 1550, weightP50: 1918, weightP90: 2260, length: 43.7, comparison: { en: 'Pineapple', tr: 'Ananas' }, comparisonEmoji: '🍍' },
  { week: 34, weightP10: 1720, weightP50: 2146, weightP90: 2520, length: 45.0, comparison: { en: 'Cantaloupe', tr: 'Kavun' }, comparisonEmoji: '🍈' },
  { week: 35, weightP10: 1890, weightP50: 2383, weightP90: 2790, length: 46.2, comparison: { en: 'Honeydew Melon', tr: 'Kış Kavunu' }, comparisonEmoji: '🍈' },
  { week: 36, weightP10: 2060, weightP50: 2622, weightP90: 3060, length: 47.4, comparison: { en: 'Romaine Lettuce', tr: 'Marul' }, comparisonEmoji: '🥬' },
  { week: 37, weightP10: 2230, weightP50: 2859, weightP90: 3320, length: 48.6, comparison: { en: 'Swiss Chard', tr: 'Pazı' }, comparisonEmoji: '🥬' },
  { week: 38, weightP10: 2390, weightP50: 3083, weightP90: 3570, length: 49.8, comparison: { en: 'Leek', tr: 'Pırasa' }, comparisonEmoji: '🧅' },
  { week: 39, weightP10: 2530, weightP50: 3288, weightP90: 3790, length: 50.7, comparison: { en: 'Mini Watermelon', tr: 'Mini Karpuz' }, comparisonEmoji: '🍉' },
  { week: 40, weightP10: 2650, weightP50: 3462, weightP90: 3990, length: 51.2, comparison: { en: 'Watermelon', tr: 'Karpuz' }, comparisonEmoji: '🍉' },
  { week: 41, weightP10: 2730, weightP50: 3597, weightP90: 4150, length: 51.7, comparison: { en: 'Large Watermelon', tr: 'Büyük Karpuz' }, comparisonEmoji: '🍉' },
  { week: 42, weightP10: 2780, weightP50: 3685, weightP90: 4270, length: 52.0, comparison: { en: 'Extra Large Watermelon', tr: 'Çok Büyük Karpuz' }, comparisonEmoji: '🍉' },
];

const fetalDevelopmentData: FetalDevelopment[] = [
  {
    week: 8,
    highlights: {
      en: [
        'All major organs have begun forming',
        'Tiny fingers and toes are developing',
        'The heart is beating at about 150-170 bpm',
        'Facial features are becoming more defined',
      ],
      tr: [
        'Tüm ana organlar oluşmaya başladı',
        'Küçük parmaklar gelişiyor',
        'Kalp dakikada yaklaşık 150-170 atıyor',
        'Yüz hatları daha belirgin hale geliyor',
      ],
    },
    nutrition: {
      en: [
        'Take 400-800mcg folic acid daily',
        'Ensure adequate protein intake (75g/day)',
        'Stay hydrated with 8-10 glasses of water',
      ],
      tr: [
        'Günlük 400-800mcg folik asit alın',
        'Yeterli protein alımını sağlayın (75g/gün)',
        '8-10 bardak su ile hidrate kalın',
      ],
    },
  },
  {
    week: 12,
    highlights: {
      en: [
        'All major organs and systems are formed',
        'Reflexes are developing - baby can make a fist',
        'Tooth buds appear under the gums',
        'The risk of miscarriage drops significantly',
      ],
      tr: [
        'Tüm ana organlar ve sistemler oluştu',
        'Refleksler gelişiyor - bebek yumruk yapabiliyor',
        'Diş tomurcukları diş etlerinin altında beliriyor',
        'Düşük riski önemli ölçüde azalıyor',
      ],
    },
    nutrition: {
      en: [
        'Increase calcium intake (1000mg/day) for bone development',
        'Include iron-rich foods to prevent anemia',
        'Add omega-3 fatty acids for brain development',
      ],
      tr: [
        'Kemik gelişimi için kalsiyum alımını artırın (1000mg/gün)',
        'Kansızlığı önlemek için demir açısından zengin gıdalar tüketin',
        'Beyin gelişimi için omega-3 yağ asitleri ekleyin',
      ],
    },
  },
  {
    week: 16,
    highlights: {
      en: [
        'Baby can make facial expressions',
        'The skeleton is hardening from cartilage to bone',
        'Baby is developing the sucking reflex',
        'Gender can potentially be determined via ultrasound',
      ],
      tr: [
        'Bebek yüz ifadeleri yapabiliyor',
        'İskelet kıkırdaktan kemiğe dönüşüyor',
        'Bebek emme refleksini geliştiriyor',
        'Ultrasonla cinsiyet belirlenebilir',
      ],
    },
    nutrition: {
      en: [
        'Increase calorie intake by 300-350 kcal/day',
        'Eat vitamin C rich foods for collagen formation',
        'Include zinc-rich foods for immune system development',
      ],
      tr: [
        'Günlük kalori alımını 300-350 kkal artırın',
        'Kolajen oluşumu için C vitamini açısından zengin gıdalar tüketin',
        'Bağışıklık sistemi gelişimi için çinko açısından zengin gıdalar ekleyin',
      ],
    },
  },
  {
    week: 20,
    highlights: {
      en: [
        'You are halfway through your pregnancy!',
        'Baby can hear sounds and may respond to music',
        'Vernix caseosa (protective coating) covers the skin',
        'Baby is practicing swallowing amniotic fluid',
        'You may start feeling kicks and movements',
      ],
      tr: [
        'Hamileliğinizin yarısındasınız!',
        'Bebek sesleri duyabiliyor ve müziğe tepki verebiliyor',
        'Vernix caseosa (koruyucu tabaka) cildi kaplıyor',
        'Bebek amniyotik sıvıyı yutma pratiği yapıyor',
        'Tekmeleri ve hareketleri hissetmeye başlayabilirsiniz',
      ],
    },
    nutrition: {
      en: [
        'Focus on DHA for brain and eye development',
        'Ensure adequate vitamin D (600 IU/day)',
        'Include fiber-rich foods to prevent constipation',
        'Consider a prenatal vitamin supplement if not already taking one',
      ],
      tr: [
        'Beyin ve göz gelişimi için DHA\'ya odaklanın',
        'Yeterli D vitamini alımını sağlayın (600 IU/gün)',
        'Kabızlığı önlemek için lifli gıdalar tüketin',
        'Henüz almıyorsanız prenatal vitamin takviyesi düşünün',
      ],
    },
  },
  {
    week: 24,
    highlights: {
      en: [
        'Baby has reached viability milestone',
        'Lungs are developing surfactant for breathing',
        'Baby has a regular sleep-wake cycle',
        'Fingerprints and footprints are forming',
        'Baby can taste the amniotic fluid',
      ],
      tr: [
        'Bebek yaşayabilirlik kilometre taşına ulaştı',
        'Akciğerler nefes almak için sürfaktan üretiyor',
        'Bebeğin düzenli uyku-uyanıklık döngüsü var',
        'Parmak izleri ve ayak izleri oluşuyor',
        'Bebek amniyotik sıvıyı tadabiliyor',
      ],
    },
    nutrition: {
      en: [
        'Increase iron intake to support growing blood volume',
        'Eat magnesium-rich foods to prevent leg cramps',
        'Maintain adequate protein for rapid growth phase',
      ],
      tr: [
        'Artan kan hacmini desteklemek için demir alımını artırın',
        'Bacak kramplarını önlemek için magnezyum açısından zengin gıdalar tüketin',
        'Hızlı büyüme fazı için yeterli protein alımını sürdürün',
      ],
    },
  },
  {
    week: 28,
    highlights: {
      en: [
        'Baby can open and close eyes',
        'Brain is developing rapidly with new neural connections',
        'Baby is practicing breathing movements',
        'Fat deposits are forming under the skin',
        'Third trimester begins!',
      ],
      tr: [
        'Bebek gözlerini açıp kapatabilir',
        'Beyin yeni sinirsel bağlantılarla hızla gelişiyor',
        'Bebek nefes alma hareketleri yapıyor',
        'Cilt altında yağ dokusu oluşuyor',
        'Üçüncü trimester başlıyor!',
      ],
    },
    nutrition: {
      en: [
        'Increase calorie intake by 450 kcal/day in third trimester',
        'Focus on choline-rich foods for brain development',
        'Eat small, frequent meals to manage heartburn',
      ],
      tr: [
        'Üçüncü trimesterde günlük kalori alımını 450 kkal artırın',
        'Beyin gelişimi için kolin açısından zengin gıdalara odaklanın',
        'Mide yanmasını yönetmek için küçük ve sık öğünler yiyin',
      ],
    },
  },
  {
    week: 32,
    highlights: {
      en: [
        'Baby is practicing breathing, sucking, and swallowing',
        'Bones are fully formed but still soft',
        'Baby is gaining about 230 grams per week',
        'Toenails are visible',
        'Baby may move into head-down position',
      ],
      tr: [
        'Bebek nefes alma, emme ve yutma pratiği yapıyor',
        'Kemikler tam oluşmuş ama hâlâ yumuşak',
        'Bebek haftada yaklaşık 230 gram alıyor',
        'Ayak tırnakları görünür hale geldi',
        'Bebek baş aşağı pozisyona geçebilir',
      ],
    },
    nutrition: {
      en: [
        'Continue calcium and vitamin D for strong bones',
        'Eat vitamin K rich foods for blood clotting',
        'Stay well hydrated to maintain amniotic fluid levels',
      ],
      tr: [
        'Güçlü kemikler için kalsiyum ve D vitaminine devam edin',
        'Kan pıhtılaşması için K vitamini açısından zengin gıdalar tüketin',
        'Amniyotik sıvı seviyelerini korumak için iyi hidrate kalın',
      ],
    },
  },
  {
    week: 36,
    highlights: {
      en: [
        'Baby is considered "early term" at this point',
        'Lungs are almost fully mature',
        'Baby has gained significant body fat',
        'Head may engage in the pelvis (lightening)',
        'Immune system is receiving antibodies from mother',
      ],
      tr: [
        'Bebek bu noktada "erken doğum" olarak kabul edilir',
        'Akciğerler neredeyse tamamen olgunlaştı',
        'Bebek önemli miktarda vücut yağı kazandı',
        'Baş pelvise yerleşmiş olabilir (aydınlanma)',
        'Bağışıklık sistemi anneden antikor alıyor',
      ],
    },
    nutrition: {
      en: [
        'Eat dates - studies show they may ease labor',
        'Focus on energy-rich foods for labor preparation',
        'Maintain balanced nutrition for final growth',
      ],
      tr: [
        'Hurma yiyin - araştırmalar doğumu kolaylaştırabileceğini gösteriyor',
        'Doğum hazırlığı için enerji açısından zengin gıdalara odaklanın',
        'Son büyüme için dengeli beslenmeyi sürdürün',
      ],
    },
  },
  {
    week: 40,
    highlights: {
      en: [
        'Baby is full term and ready for birth!',
        'Average weight is about 3.4 kg (7.5 lbs)',
        'All organs are fully developed',
        'Baby has about 300 bones (adults have 206)',
        'The skull bones are not yet fused for delivery',
      ],
      tr: [
        'Bebek tam zamanında ve doğuma hazır!',
        'Ortalama ağırlık yaklaşık 3.4 kg',
        'Tüm organlar tamamen gelişmiş',
        'Bebeğin yaklaşık 300 kemiği var (yetişkinlerin 206)',
        'Kafatası kemikleri doğum için henüz kaynaşmadı',
      ],
    },
    nutrition: {
      en: [
        'Prepare nutritious meals for postpartum recovery',
        'Stock up on easy-to-eat snacks for labor',
        'Consider foods that support lactation',
      ],
      tr: [
        'Doğum sonrası iyileşme için besleyici yemekler hazırlayın',
        'Doğum için kolay yenebilir atıştırmalıklar stoklayın',
        'Emzirmeyi destekleyen gıdaları değerlendirin',
      ],
    },
  },
];

/**
 * Calculate fetal weight using Hadlock formula
 * Hadlock et al. (1985): log10(EFW) = 1.326 - 0.00326*AC*FL + 0.0107*HC + 0.0438*AC + 0.158*FL
 * When only AC and FL are available:
 * log10(EFW) = 1.304 + 0.05281*AC + 0.1938*FL - 0.004*AC*FL
 * AC, FL, HC in cm
 */
function hadlockFormula(acMm: number, flMm: number, hcMm?: number, bpdMm?: number): number {
  const ac = acMm / 10; // Convert mm to cm
  const fl = flMm / 10;

  if (hcMm && bpdMm) {
    const hc = hcMm / 10;
    const log10EFW = 1.326 - 0.00326 * ac * fl + 0.0107 * hc + 0.0438 * ac + 0.158 * fl;
    return Math.round(Math.pow(10, log10EFW));
  }

  // Simplified Hadlock with AC and FL only
  const log10EFW = 1.304 + 0.05281 * ac + 0.1938 * fl - 0.004 * ac * fl;
  return Math.round(Math.pow(10, log10EFW));
}

function getGestationalWeekFromLMP(lmpDate: string): { week: number; day: number } {
  const lmp = new Date(lmpDate);
  const today = new Date();
  const diffMs = today.getTime() - lmp.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const week = Math.floor(totalDays / 7);
  const day = totalDays % 7;
  return { week: Math.min(Math.max(week, 0), 42), day };
}

function getWeeklyData(week: number): WeeklyGrowthData | undefined {
  return weeklyGrowthData.find((d) => d.week === week);
}

function interpolateGrowthData(week: number): WeeklyGrowthData {
  const exactMatch = getWeeklyData(week);
  if (exactMatch) return exactMatch;

  // Clamp week to data range
  const clampedWeek = Math.min(Math.max(week, 8), 42);

  // Find surrounding data points
  const lower = weeklyGrowthData.filter((d) => d.week <= clampedWeek).pop();
  const upper = weeklyGrowthData.find((d) => d.week >= clampedWeek);

  if (!lower || !upper || lower.week === upper.week) {
    return lower || upper || weeklyGrowthData[0];
  }

  const ratio = (clampedWeek - lower.week) / (upper.week - lower.week);

  return {
    week: clampedWeek,
    weightP10: Math.round(lower.weightP10 + (upper.weightP10 - lower.weightP10) * ratio),
    weightP50: Math.round(lower.weightP50 + (upper.weightP50 - lower.weightP50) * ratio),
    weightP90: Math.round(lower.weightP90 + (upper.weightP90 - lower.weightP90) * ratio),
    length: Math.round((lower.length + (upper.length - lower.length) * ratio) * 10) / 10,
    comparison: lower.comparison,
    comparisonEmoji: lower.comparisonEmoji,
  };
}

function getDevelopmentForWeek(week: number): FetalDevelopment {
  // Find the closest development data at or below this week
  const allWeeks = fetalDevelopmentData.map((d) => d.week);
  const closestWeek = allWeeks.reduce((prev, curr) =>
    Math.abs(curr - week) < Math.abs(prev - week) ? curr : prev
  );
  return fetalDevelopmentData.find((d) => d.week === closestWeek) || fetalDevelopmentData[0];
}

function getPercentileStatus(weight: number, weekData: WeeklyGrowthData): PercentileStatus {
  if (weight < weekData.weightP10) return 'small';
  if (weight > weekData.weightP90) return 'large';
  return 'appropriate';
}

function getTrimester(week: number): 1 | 2 | 3 {
  if (week <= 13) return 1;
  if (week <= 26) return 2;
  return 3;
}

function getWeeklyGrowthRate(week: number): number {
  if (week < 12) return 7;
  if (week < 20) return 30;
  if (week < 28) return 60;
  if (week < 36) return 200;
  return 230;
}

export function calculateFetalWeight(input: FetalWeightInput): FetalWeightResult {
  let gestationalWeek: number;
  let gestationalDay = 0;
  let estimatedWeightGrams: number;

  if (input.method === 'lmp' && input.lmpDate) {
    const result = getGestationalWeekFromLMP(input.lmpDate);
    gestationalWeek = result.week;
    gestationalDay = result.day;
  } else if (input.method === 'week' && input.gestationalWeek) {
    gestationalWeek = input.gestationalWeek;
  } else {
    gestationalWeek = 20; // fallback
  }

  // Clamp to valid range
  gestationalWeek = Math.min(Math.max(gestationalWeek, 8), 42);

  const weekData = interpolateGrowthData(gestationalWeek);

  if (
    input.method === 'ultrasound' &&
    input.abdominalCircumference &&
    input.femurLength
  ) {
    estimatedWeightGrams = hadlockFormula(
      input.abdominalCircumference,
      input.femurLength,
      input.headCircumference,
      input.biparietalDiameter
    );
  } else {
    estimatedWeightGrams = weekData.weightP50;
  }

  const development = getDevelopmentForWeek(gestationalWeek);
  const comparisonData = interpolateGrowthData(gestationalWeek);

  return {
    estimatedWeight: {
      grams: estimatedWeightGrams,
      ounces: Math.round(estimatedWeightGrams * 0.03527396 * 10) / 10,
      kg: Math.round(estimatedWeightGrams / 100) / 10,
      lbs: Math.round(estimatedWeightGrams * 0.00220462 * 10) / 10,
    },
    gestationalWeek,
    gestationalDay,
    percentileRange: {
      p10: weekData.weightP10,
      p50: weekData.weightP50,
      p90: weekData.weightP90,
    },
    percentileStatus: getPercentileStatus(estimatedWeightGrams, weekData),
    sizeComparison: comparisonData.comparison,
    sizeComparisonEmoji: comparisonData.comparisonEmoji,
    lengthEstimate: {
      cm: comparisonData.length,
      inches: Math.round(comparisonData.length * 0.3937 * 10) / 10,
    },
    developmentHighlights: development.highlights,
    nutritionTips: development.nutrition,
    weeklyGrowthRate: getWeeklyGrowthRate(gestationalWeek),
    remainingWeeks: Math.max(40 - gestationalWeek, 0),
    trimester: getTrimester(gestationalWeek),
  };
}

export { weeklyGrowthData };
