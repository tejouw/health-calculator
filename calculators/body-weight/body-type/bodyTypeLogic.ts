import {
  BodyTypeQuestion,
  BodyTypeScores,
  BodyTypeResult,
  MixedBodyType,
  BodyTypeInfo,
} from './bodyTypeTypes';

export const bodyTypeQuestions: BodyTypeQuestion[] = [
  {
    id: 'shoulder-width',
    question: {
      en: 'How would you describe your shoulder width compared to your hips?',
      tr: 'Omuz genişliğinizi kalçalarınıza göre nasıl tanımlarsınız?',
    },
    options: [
      {
        label: { en: 'Narrower than hips', tr: 'Kalçalardan dar' },
        scores: { ectomorph: 1, mesomorph: 0, endomorph: 2 },
      },
      {
        label: { en: 'Same width as hips', tr: 'Kalçalarla aynı genişlikte' },
        scores: { ectomorph: 2, mesomorph: 0, endomorph: 1 },
      },
      {
        label: { en: 'Slightly wider than hips', tr: 'Kalçalardan biraz geniş' },
        scores: { ectomorph: 0, mesomorph: 2, endomorph: 1 },
      },
      {
        label: { en: 'Much wider than hips', tr: 'Kalçalardan çok geniş' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
    ],
  },
  {
    id: 'wrist-size',
    question: {
      en: 'Wrap your middle finger and thumb around your wrist. What happens?',
      tr: 'Orta parmağınız ve baş parmağınızla bileğinizi kavrayın. Ne olur?',
    },
    options: [
      {
        label: { en: 'Fingers overlap easily', tr: 'Parmaklar kolayca örtüşür' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'Fingers just barely touch', tr: 'Parmaklar zar zor dokunur' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'Fingers do not touch', tr: 'Parmaklar dokunmaz' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
  {
    id: 'weight-tendency',
    question: {
      en: 'How easily do you gain weight?',
      tr: 'Ne kadar kolay kilo alırsınız?',
    },
    options: [
      {
        label: { en: 'Very difficult - I struggle to gain weight', tr: 'Çok zor - Kilo almakta zorlanırım' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'I gain and lose weight fairly easily', tr: 'Kilo almam ve vermem oldukça kolay' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'I gain weight easily but struggle to lose it', tr: 'Kolayca kilo alırım ama vermekte zorlanırım' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
  {
    id: 'body-shape',
    question: {
      en: 'Which best describes your overall body shape?',
      tr: 'Genel vücut şeklinizi en iyi hangisi tanımlar?',
    },
    options: [
      {
        label: { en: 'Long and lean / rectangular', tr: 'Uzun ve ince / dikdörtgen' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'Athletic / V-shaped or hourglass', tr: 'Atletik / V-şekilli veya kum saati' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'Round / pear-shaped', tr: 'Yuvarlak / armut şekilli' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
  {
    id: 'muscle-building',
    question: {
      en: 'How easily do you build muscle?',
      tr: 'Ne kadar kolay kas yaparsınız?',
    },
    options: [
      {
        label: { en: 'Very hard - I stay lean even with training', tr: 'Çok zor - Antrenman yapsam bile ince kalırım' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'Fairly easy - I see results quickly', tr: 'Oldukça kolay - Sonuçları hızla görürüm' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'I gain strength but muscles are not well-defined', tr: 'Güç kazanırım ama kaslarım belirgin değil' },
        scores: { ectomorph: 0, mesomorph: 1, endomorph: 2 },
      },
    ],
  },
  {
    id: 'metabolism',
    question: {
      en: 'How would you describe your metabolism?',
      tr: 'Metabolizmanızı nasıl tanımlarsınız?',
    },
    options: [
      {
        label: { en: 'Very fast - I can eat a lot without gaining', tr: 'Çok hızlı - Çok yesem de kilo almam' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'Moderate - balanced energy', tr: 'Orta - dengeli enerji' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'Slow - I gain weight even eating moderately', tr: 'Yavaş - Az yesem bile kilo alırım' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
  {
    id: 'limb-length',
    question: {
      en: 'How would you describe your arms and legs?',
      tr: 'Kollarınızı ve bacaklarınızı nasıl tanımlarsınız?',
    },
    options: [
      {
        label: { en: 'Long and thin', tr: 'Uzun ve ince' },
        scores: { ectomorph: 3, mesomorph: 0, endomorph: 0 },
      },
      {
        label: { en: 'Medium length, muscular', tr: 'Orta uzunlukta, kaslı' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'Short and thick', tr: 'Kısa ve kalın' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
  {
    id: 'energy-level',
    question: {
      en: 'How is your energy throughout the day?',
      tr: 'Gün boyunca enerjiniz nasıl?',
    },
    options: [
      {
        label: { en: 'High energy, hard to sit still', tr: 'Yüksek enerji, yerinde durmakta zorlanırım' },
        scores: { ectomorph: 2, mesomorph: 1, endomorph: 0 },
      },
      {
        label: { en: 'Consistent, steady energy', tr: 'Tutarlı, istikrarlı enerji' },
        scores: { ectomorph: 0, mesomorph: 3, endomorph: 0 },
      },
      {
        label: { en: 'I tire easily, prefer less intense activity', tr: 'Çabuk yorulurum, daha az yoğun aktivite tercih ederim' },
        scores: { ectomorph: 0, mesomorph: 0, endomorph: 3 },
      },
    ],
  },
];

export function calculateBodyType(answers: number[]): BodyTypeResult {
  const scores: BodyTypeScores = { ectomorph: 0, mesomorph: 0, endomorph: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    if (questionIndex < bodyTypeQuestions.length && answerIndex >= 0) {
      const question = bodyTypeQuestions[questionIndex];
      if (answerIndex < question.options.length) {
        const option = question.options[answerIndex];
        scores.ectomorph += option.scores.ectomorph;
        scores.mesomorph += option.scores.mesomorph;
        scores.endomorph += option.scores.endomorph;
      }
    }
  });

  const total = scores.ectomorph + scores.mesomorph + scores.endomorph;
  const percentages: BodyTypeScores = {
    ectomorph: total > 0 ? Math.round((scores.ectomorph / total) * 100) : 33,
    mesomorph: total > 0 ? Math.round((scores.mesomorph / total) * 100) : 33,
    endomorph: total > 0 ? Math.round((scores.endomorph / total) * 100) : 34,
  };

  const primaryType = determineMixedType(percentages);

  const typeLabels: Record<MixedBodyType, { en: string; tr: string }> = {
    ectomorph: { en: 'Ectomorph', tr: 'Ektomorf' },
    mesomorph: { en: 'Mesomorph', tr: 'Mezomorf' },
    endomorph: { en: 'Endomorph', tr: 'Endomorf' },
    'ecto-mesomorph': { en: 'Ecto-Mesomorph', tr: 'Ekto-Mezomorf' },
    'meso-endomorph': { en: 'Meso-Endomorph', tr: 'Mezo-Endomorf' },
    'ecto-endomorph': { en: 'Ecto-Endomorph', tr: 'Ekto-Endomorf' },
  };

  const typeDescriptions: Record<MixedBodyType, { en: string; tr: string }> = {
    ectomorph: {
      en: 'You have a naturally lean and long body type. Your fast metabolism makes it challenging to gain weight, but also means you can enjoy a higher calorie intake.',
      tr: 'Doğal olarak ince ve uzun bir vücut tipiniz var. Hızlı metabolizmanız kilo almayı zorlaştırır, ama aynı zamanda daha yüksek kalori alımının keyfini çıkarabilirsiniz.',
    },
    mesomorph: {
      en: 'You have a naturally athletic and muscular build. Your body responds well to exercise, and you can gain muscle and lose fat relatively easily.',
      tr: 'Doğal olarak atletik ve kaslı bir yapınız var. Vücudunuz egzersize iyi yanıt verir, kas kazanabilir ve yağ kaybedebilirsiniz.',
    },
    endomorph: {
      en: 'You have a naturally wider and stockier build. Your body tends to store more fat, but you also have the potential for significant strength and muscle mass.',
      tr: 'Doğal olarak geniş ve tıknaz bir yapınız var. Vücudunuz daha fazla yağ depolamaya eğilimlidir, ama aynı zamanda önemli güç ve kas kütlesi potansiyeline sahipsiniz.',
    },
    'ecto-mesomorph': {
      en: 'You are a blend of lean and athletic builds. You can build muscle with effort while maintaining a relatively lean frame.',
      tr: 'İnce ve atletik yapıların bir karışımısınız. Çaba göstererek kas yapabilir, nispeten ince bir çerçeveyi koruyabilirsiniz.',
    },
    'meso-endomorph': {
      en: 'You combine athletic potential with a naturally solid build. You have great strength potential but need to watch calorie intake to stay lean.',
      tr: 'Atletik potansiyeli doğal olarak sağlam bir yapıyla birleştiriyorsunuz. Harika güç potansiyeline sahipsiniz ama ince kalmak için kalori alımına dikkat etmeniz gerekir.',
    },
    'ecto-endomorph': {
      en: 'You have an unusual combination of lean limbs with a tendency to store fat in the midsection. A balanced approach to diet and exercise works best for you.',
      tr: 'İnce uzuvlarla birlikte orta bölgede yağ depolama eğiliminin alışılmadık bir kombinasyonuna sahipsiniz. Diyet ve egzersize dengeli bir yaklaşım sizin için en iyi sonucu verir.',
    },
  };

  return {
    primaryType,
    scores,
    percentages,
    dominantLabel: typeLabels[primaryType],
    description: typeDescriptions[primaryType],
  };
}

function determineMixedType(percentages: BodyTypeScores): MixedBodyType {
  const { ectomorph, mesomorph, endomorph } = percentages;

  const sorted = [
    { type: 'ectomorph' as const, value: ectomorph },
    { type: 'mesomorph' as const, value: mesomorph },
    { type: 'endomorph' as const, value: endomorph },
  ].sort((a, b) => b.value - a.value);

  // If dominant type has >50% or the gap is >20%, it's a pure type
  if (sorted[0].value >= 50 || sorted[0].value - sorted[1].value > 20) {
    return sorted[0].type;
  }

  // Otherwise it's a mixed type
  const types = [sorted[0].type, sorted[1].type].sort();
  if (types[0] === 'ectomorph' && types[1] === 'mesomorph') return 'ecto-mesomorph';
  if (types[0] === 'endomorph' && types[1] === 'mesomorph') return 'meso-endomorph';
  return 'ecto-endomorph';
}

export const bodyTypeData: Record<string, BodyTypeInfo> = {
  ectomorph: {
    type: 'ectomorph',
    label: { en: 'Ectomorph', tr: 'Ektomorf' },
    emoji: '\uD83E\uDDD0',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-cyan-500',
    traits: {
      en: [
        'Narrow shoulders and hips',
        'Long limbs and thin bones',
        'Fast metabolism',
        'Difficulty gaining weight',
        'Low body fat percentage',
        'Small joints and wrists',
        'Lean muscle mass',
        'High energy levels',
      ],
      tr: [
        'Dar omuzlar ve kalçalar',
        'Uzun uzuvlar ve ince kemikler',
        'Hızlı metabolizma',
        'Kilo almada zorluk',
        'Düşük vücut yağ oranı',
        'Küçük eklemler ve bilekler',
        'İnce kas kütlesi',
        'Yüksek enerji seviyeleri',
      ],
    },
    diet: {
      en: [
        'Eat more calories than you burn (caloric surplus)',
        'Focus on complex carbohydrates (oats, rice, sweet potatoes)',
        'Eat 5-6 meals per day',
        'Include protein with every meal (1.6-2.2g per kg)',
        'Add healthy fats (nuts, avocado, olive oil)',
        'Use calorie-dense snacks between meals',
        'Consider mass gainer shakes post-workout',
        'Do not skip breakfast - it is your most important meal',
      ],
      tr: [
        'Yaktığınızdan fazla kalori alın (kalori fazlası)',
        'Kompleks karbonhidratlara odaklanın (yulaf, pirinç, tatlı patates)',
        'Günde 5-6 öğün yiyin',
        'Her öğünde protein ekleyin (kg başına 1.6-2.2g)',
        'Sağlıklı yağlar ekleyin (fındık, avokado, zeytinyağı)',
        'Öğün aralarında kalorisi yüksek atıştırmalıklar kullanın',
        'Antrenman sonrası kilo aldırıcı shake düşünün',
        'Kahvaltıyı atlamayın - en önemli öğününüz',
      ],
    },
    exercise: {
      en: [
        'Focus on heavy compound lifts (squats, deadlifts, bench press)',
        'Keep workouts short but intense (45-60 min)',
        'Limit cardio to 2-3 sessions per week (20 min each)',
        'Rest 2-3 minutes between sets',
        'Train each muscle group 2x per week',
        'Prioritize progressive overload',
        'Get 8-9 hours of sleep for recovery',
        'Avoid excessive HIIT or endurance training',
      ],
      tr: [
        'Ağır bileşik hareketlere odaklanın (squat, deadlift, bench press)',
        'Antrenmanları kısa ama yoğun tutun (45-60 dk)',
        'Kardiyoyu haftada 2-3 seans ile sınırlayın (her biri 20 dk)',
        'Setler arasında 2-3 dakika dinlenin',
        'Her kas grubunu haftada 2 kez çalıştırın',
        'Progresif aşırı yüklemeye öncelik verin',
        'Toparlanma için 8-9 saat uyuyun',
        'Aşırı HIIT veya dayanıklılık antrenmanından kaçının',
      ],
    },
    celebrities: ['Brad Pitt', 'Bruce Lee', 'Zendaya', 'Taylor Swift', 'Usain Bolt'],
    macroSplit: { protein: 25, carbs: 55, fat: 20 },
  },
  mesomorph: {
    type: 'mesomorph',
    label: { en: 'Mesomorph', tr: 'Mezomorf' },
    emoji: '\uD83D\uDCAA',
    color: '#10B981',
    gradient: 'from-green-500 to-emerald-500',
    traits: {
      en: [
        'Naturally athletic build',
        'Wide shoulders, narrow waist',
        'Responds well to exercise',
        'Gains muscle easily',
        'Moderate metabolism',
        'Medium bone structure',
        'Naturally strong',
        'Well-proportioned body',
      ],
      tr: [
        'Doğal atletik yapı',
        'Geniş omuzlar, dar bel',
        'Egzersize iyi yanıt verir',
        'Kolayca kas yapar',
        'Orta metabolizma',
        'Orta kemik yapısı',
        'Doğal olarak güçlü',
        'Orantılı vücut',
      ],
    },
    diet: {
      en: [
        'Balanced macronutrient intake',
        'Moderate protein (1.4-1.8g per kg body weight)',
        'Mix of complex carbs and healthy fats',
        'Eat 4-5 meals per day',
        'Adjust calories based on goals (bulk/cut/maintain)',
        'Prioritize whole, unprocessed foods',
        'Time carbs around workouts for performance',
        'Stay hydrated (2.5-3L water daily)',
      ],
      tr: [
        'Dengeli makrobesin alımı',
        'Orta protein (kg başına 1.4-1.8g)',
        'Kompleks karbonhidrat ve sağlıklı yağ karışımı',
        'Günde 4-5 öğün yiyin',
        'Hedeflere göre kaloriyi ayarlayın (hacim/kesim/koruma)',
        'Tam, işlenmemiş gıdalara öncelik verin',
        'Performans için karbonhidratları antrenman çevresinde zamanlayın',
        'Hidrate kalın (günlük 2.5-3L su)',
      ],
    },
    exercise: {
      en: [
        'Mix of strength training and cardio',
        'Can handle higher training volume',
        'Moderate weights with moderate reps (8-12)',
        'Include both compound and isolation exercises',
        'Vary routines to prevent plateaus',
        'Cardio 3-4 times per week (30 min)',
        'Try sports for functional fitness',
        'Train each muscle group 2-3x per week',
      ],
      tr: [
        'Kuvvet antrenmanı ve kardiyonun karışımı',
        'Daha yüksek antrenman hacmini kaldırabilir',
        'Orta ağırlıklar ile orta tekrarlar (8-12)',
        'Hem bileşik hem izolasyon hareketlerini dahil edin',
        'Plato önlemek için rutinleri değiştirin',
        'Haftada 3-4 kez kardiyoyu (30 dk)',
        'Fonksiyonel fitness için sporları deneyin',
        'Her kas grubunu haftada 2-3 kez çalıştırın',
      ],
    },
    celebrities: ['Chris Hemsworth', 'Halle Berry', 'Cristiano Ronaldo', 'Serena Williams', 'Arnold Schwarzenegger'],
    macroSplit: { protein: 30, carbs: 40, fat: 30 },
  },
  endomorph: {
    type: 'endomorph',
    label: { en: 'Endomorph', tr: 'Endomorf' },
    emoji: '\uD83D\uDEE1\uFE0F',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-500',
    traits: {
      en: [
        'Wider hips and waist',
        'Stockier, rounder build',
        'Slower metabolism',
        'Gains weight easily',
        'Stores fat, especially around midsection',
        'Larger bone structure',
        'Natural strength potential',
        'Softer, rounder physique',
      ],
      tr: [
        'Geniş kalçalar ve bel',
        'Tıknaz, yuvarlak yapı',
        'Yavaş metabolizma',
        'Kolayca kilo alır',
        'Özellikle orta bölgede yağ depolar',
        'Büyük kemik yapısı',
        'Doğal güç potansiyeli',
        'Yumuşak, yuvarlak fizik',
      ],
    },
    diet: {
      en: [
        'Control carbohydrate intake carefully',
        'Higher protein (1.8-2.2g per kg body weight)',
        'Eat healthy fats (30-35% of calories)',
        'Limit refined carbs and sugars',
        'Focus on fiber-rich vegetables',
        'Eat smaller, frequent meals to control appetite',
        'Time carbs around exercise',
        'Track portions carefully - use a food journal',
      ],
      tr: [
        'Karbonhidrat alımını dikkatle kontrol edin',
        'Yüksek protein (kg başına 1.8-2.2g)',
        'Sağlıklı yağlar yiyin (kalorilerin %30-35\'i)',
        'Rafine karbonhidratları ve şekerleri sınırlayın',
        'Lif açısından zengin sebzelere odaklanın',
        'İştahı kontrol etmek için küçük, sık öğünler yiyin',
        'Karbonhidratları egzersiz çevresinde zamanlayın',
        'Porsiyonları dikkatle takip edin - yemek günlüğü kullanın',
      ],
    },
    exercise: {
      en: [
        'Prioritize cardio and HIIT training',
        'Combine strength training with cardio in circuits',
        'Higher reps with shorter rest (30-60 sec)',
        'Cardio 4-5 times per week (30-45 min)',
        'Full-body workouts for maximum calorie burn',
        'Include daily low-intensity movement (walking)',
        'Try swimming or cycling for joint-friendly cardio',
        'Morning workouts may boost metabolism throughout the day',
      ],
      tr: [
        'Kardiyoya ve HIIT antrenmanına öncelik verin',
        'Kuvvet antrenmanını devrelerde kardiyoyla birleştirin',
        'Daha kısa dinlenmeyle yüksek tekrarlar (30-60 sn)',
        'Haftada 4-5 kez kardiyoyu (30-45 dk)',
        'Maksimum kalori yakımı için tam vücut antrenmanları',
        'Günlük düşük yoğunluklu hareket ekleyin (yürüyüş)',
        'Eklem dostu kardiyoyu için yüzme veya bisiklet deneyin',
        'Sabah antrenmanları gün boyunca metabolizmayı artırabilir',
      ],
    },
    celebrities: ['Beyonce', 'Jennifer Lopez', 'Chris Pratt (before transformation)', 'Oprah Winfrey', 'Dwayne Johnson'],
    macroSplit: { protein: 35, carbs: 25, fat: 40 },
  },
};

export function getBodyTypeInfo(type: string): BodyTypeInfo {
  // For mixed types, return the dominant (first) type info
  if (type.includes('-')) {
    const primary = type.split('-')[0] === 'ecto' ? 'ectomorph'
      : type.split('-')[0] === 'meso' ? 'mesomorph'
      : 'endomorph';
    return bodyTypeData[primary];
  }
  return bodyTypeData[type] || bodyTypeData.mesomorph;
}
