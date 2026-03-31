import {
  FaceShapeInput,
  FaceShapeResult,
  FaceShape,
  FaceShapeInfo,
  FaceProportions,
} from './faceShapeTypes';

export const faceShapeData: Record<FaceShape, FaceShapeInfo> = {
  oval: {
    shape: 'oval',
    label: { en: 'Oval', tr: 'Oval' },
    emoji: '🥚',
    color: '#8B5CF6',
    description: {
      en: 'The oval face is considered the most balanced shape. Your face is slightly longer than it is wide, with a forehead that is a bit wider than the jawline. The chin is gently rounded.',
      tr: 'Oval yüz, en dengeli yüz şekli olarak kabul edilir. Yüzünüz genişliğinden biraz daha uzundur, alın çene hattından biraz daha geniştir. Çene hafifçe yuvarlatılmıştır.',
    },
    celebrities: {
      en: ['Beyoncé', 'George Clooney', 'Jessica Alba', 'Ryan Gosling'],
      tr: ['Beyoncé', 'George Clooney', 'Jessica Alba', 'Ryan Gosling'],
    },
    hairstyleTips: {
      en: [
        'Almost any hairstyle works well with an oval face.',
        'Try pulling hair back to show off your balanced proportions.',
        'Both short and long styles complement this shape.',
        'Side parts and center parts both look great.',
      ],
      tr: [
        'Oval yüze neredeyse her saç modeli yakışır.',
        'Dengeli oranlarınızı göstermek için saçlarınızı arkaya toplayın.',
        'Hem kısa hem uzun modeller bu şekle uyum sağlar.',
        'Hem yan hem ortadan ayrılmış saçlar harika görünür.',
      ],
    },
    glassesTips: {
      en: 'Most frame shapes work well. Try walnut-shaped or geometric frames to highlight your balanced features.',
      tr: 'Çoğu çerçeve şekli yakışır. Dengeli hatlarınızı vurgulamak için ceviz şekilli veya geometrik çerçeveler deneyin.',
    },
  },
  round: {
    shape: 'round',
    label: { en: 'Round', tr: 'Yuvarlak' },
    emoji: '🌕',
    color: '#F59E0B',
    description: {
      en: 'A round face has similar width and length measurements with full cheeks. The widest point is at the cheekbones, and the face has soft, curved lines with no sharp angles.',
      tr: 'Yuvarlak yüz, genişlik ve uzunluk ölçüleri birbirine yakın olan, dolgun yanaklara sahip bir yüz şeklidir. En geniş nokta elmacık kemiklerindedir ve yüzde keskin açılar olmadan yumuşak, kıvrımlı hatlar bulunur.',
    },
    celebrities: {
      en: ['Selena Gomez', 'Leonardo DiCaprio', 'Mila Kunis', 'Elijah Wood'],
      tr: ['Selena Gomez', 'Leonardo DiCaprio', 'Mila Kunis', 'Elijah Wood'],
    },
    hairstyleTips: {
      en: [
        'Add height at the crown to elongate the face.',
        'Try long layers or side-swept bangs.',
        'Avoid chin-length bobs that emphasize roundness.',
        'Angular cuts and asymmetric styles work well.',
      ],
      tr: [
        'Yüzü uzatmak için tepede hacim oluşturun.',
        'Uzun katmanlar veya yana taranmış kahküller deneyin.',
        'Yuvarlaklığı vurgulayan çene hizasında kesimlerden kaçının.',
        'Köşeli kesimler ve asimetrik modeller iyi sonuç verir.',
      ],
    },
    glassesTips: {
      en: 'Angular or rectangular frames add definition and make the face appear longer. Avoid round frames.',
      tr: 'Köşeli veya dikdörtgen çerçeveler yüze tanım katar ve daha uzun görünmesini sağlar. Yuvarlak çerçevelerden kaçının.',
    },
  },
  square: {
    shape: 'square',
    label: { en: 'Square', tr: 'Kare' },
    emoji: '🟫',
    color: '#EF4444',
    description: {
      en: 'A square face has a strong, angular jawline with a forehead, cheekbones, and jaw of similar width. The face length and width are nearly equal, creating a powerful, defined look.',
      tr: 'Kare yüz, güçlü ve köşeli bir çene hattına sahiptir. Alın, elmacık kemikleri ve çene benzer genişliktedir. Yüz uzunluğu ve genişliği neredeyse eşittir, güçlü ve belirgin bir görünüm oluşturur.',
    },
    celebrities: {
      en: ['Angelina Jolie', 'Brad Pitt', 'Keira Knightley', 'Henry Cavill'],
      tr: ['Angelina Jolie', 'Brad Pitt', 'Keira Knightley', 'Henry Cavill'],
    },
    hairstyleTips: {
      en: [
        'Soft layers and waves help soften angular features.',
        'Side-swept bangs balance a strong jawline.',
        'Textured, tousled styles add softness.',
        'Avoid blunt, chin-length cuts that emphasize squareness.',
      ],
      tr: [
        'Yumuşak katmanlar ve dalgalar köşeli hatları yumuşatır.',
        'Yana taranmış kahküllar güçlü çene hattını dengeler.',
        'Dokulu, dağınık modeller yumuşaklık katar.',
        'Kare görünümü vurgulayan düz, çene hizası kesimlerden kaçının.',
      ],
    },
    glassesTips: {
      en: 'Round or oval frames soften the angular jawline. Cat-eye frames also complement square faces well.',
      tr: 'Yuvarlak veya oval çerçeveler köşeli çene hattını yumuşatır. Kedi gözü çerçeveler de kare yüzlere çok yakışır.',
    },
  },
  heart: {
    shape: 'heart',
    label: { en: 'Heart', tr: 'Kalp' },
    emoji: '💜',
    color: '#EC4899',
    description: {
      en: 'A heart-shaped face features a wider forehead and cheekbones that taper to a narrow, sometimes pointed chin. It resembles an inverted triangle with softer curves.',
      tr: 'Kalp şeklinde bir yüz, geniş bir alın ve elmacık kemiklerinden dar, bazen sivri bir çeneye doğru daralan bir yapıya sahiptir. Daha yumuşak kıvrımlarla ters üçgene benzer.',
    },
    celebrities: {
      en: ['Scarlett Johansson', 'Ryan Reynolds', 'Reese Witherspoon', 'Justin Timberlake'],
      tr: ['Scarlett Johansson', 'Ryan Reynolds', 'Reese Witherspoon', 'Justin Timberlake'],
    },
    hairstyleTips: {
      en: [
        'Add volume around the jawline to balance the wider forehead.',
        'Side-parted styles work beautifully.',
        'Chin-length bobs add width at the narrowest point.',
        'Avoid heavy bangs that make the forehead appear wider.',
      ],
      tr: [
        'Geniş alnı dengelemek için çene hizasında hacim ekleyin.',
        'Yandan ayrılmış modeller çok güzel durur.',
        'Çene hizasında boblar en dar noktada genişlik katar.',
        'Alnı daha geniş gösteren ağır kahküllerden kaçının.',
      ],
    },
    glassesTips: {
      en: 'Bottom-heavy frames or light-rimmed glasses balance the wider forehead. Aviators and low-set frames work well.',
      tr: 'Alt kısmı ağır çerçeveler veya hafif kenarlı gözlükler geniş alnı dengeler. Aviator ve alçak çerçeveler iyi sonuç verir.',
    },
  },
  oblong: {
    shape: 'oblong',
    label: { en: 'Oblong / Rectangle', tr: 'Dikdörtgen / Uzun' },
    emoji: '📏',
    color: '#3B82F6',
    description: {
      en: 'An oblong face is longer than it is wide, with a forehead, cheekbones, and jawline of similar width. The face appears elongated, with the length being the most prominent feature.',
      tr: 'Dikdörtgen yüz, genişliğinden uzun olan, alın, elmacık kemikleri ve çene hattının benzer genişlikte olduğu bir yüz şeklidir. Yüz uzamış görünür ve uzunluk en belirgin özelliktir.',
    },
    celebrities: {
      en: ['Sarah Jessica Parker', 'Adam Driver', 'Liv Tyler', 'Ben Affleck'],
      tr: ['Sarah Jessica Parker', 'Adam Driver', 'Liv Tyler', 'Ben Affleck'],
    },
    hairstyleTips: {
      en: [
        'Add width with waves or curls at the sides.',
        'Bangs can shorten the appearance of a long face.',
        'Avoid very long, straight styles that elongate further.',
        'Chin-length or shoulder-length cuts are ideal.',
      ],
      tr: [
        'Yanlarda dalgalar veya buklelerle genişlik katın.',
        'Kahküllar uzun yüz görünümünü kısaltabilir.',
        'Yüzü daha da uzatan çok uzun, düz modellerden kaçının.',
        'Çene veya omuz hizasında kesimler idealdir.',
      ],
    },
    glassesTips: {
      en: 'Wide frames with decorative temples add width. Round or square frames with strong horizontal lines work best.',
      tr: 'Dekoratif kollu geniş çerçeveler genişlik katar. Güçlü yatay çizgilere sahip yuvarlak veya kare çerçeveler en iyi sonucu verir.',
    },
  },
  diamond: {
    shape: 'diamond',
    label: { en: 'Diamond', tr: 'Elmas' },
    emoji: '💎',
    color: '#06B6D4',
    description: {
      en: 'A diamond face shape has narrow forehead and jawline with wide, prominent cheekbones. The face is angular with the cheekbones being the widest point, creating a dramatic, striking appearance.',
      tr: 'Elmas yüz şekli, dar alın ve çene hattı ile geniş, belirgin elmacık kemiklerine sahiptir. Yüz köşelidir ve elmacık kemikleri en geniş noktayı oluşturarak dramatik, çarpıcı bir görünüm yaratır.',
    },
    celebrities: {
      en: ['Rihanna', 'Robert Pattinson', 'Vanessa Hudgens', 'Johnny Depp'],
      tr: ['Rihanna', 'Robert Pattinson', 'Vanessa Hudgens', 'Johnny Depp'],
    },
    hairstyleTips: {
      en: [
        'Add volume at the forehead and chin to balance cheekbones.',
        'Side-swept bangs add width to the forehead area.',
        'Textured, layered cuts complement the angular features.',
        'Tuck hair behind ears to showcase your cheekbones.',
      ],
      tr: [
        'Elmacık kemiklerini dengelemek için alın ve çenede hacim ekleyin.',
        'Yana taranmış kahküllar alın bölgesine genişlik katar.',
        'Dokulu, katlı kesimler köşeli hatları tamamlar.',
        'Elmacık kemiklerinizi sergilemek için saçlarınızı kulaklarınızın arkasına toplayın.',
      ],
    },
    glassesTips: {
      en: 'Oval or cat-eye frames highlight cheekbones. Top-heavy frames balance the narrow forehead.',
      tr: 'Oval veya kedi gözü çerçeveler elmacık kemiklerini vurgular. Üst kısmı ağır çerçeveler dar alnı dengeler.',
    },
  },
  triangle: {
    shape: 'triangle',
    label: { en: 'Triangle / Pear', tr: 'Üçgen / Armut' },
    emoji: '🔻',
    color: '#10B981',
    description: {
      en: 'A triangle (pear-shaped) face has a wider jawline than the forehead, with cheekbones between the two. The face gradually widens from forehead to jaw.',
      tr: 'Üçgen (armut şeklinde) yüz, alından daha geniş bir çene hattına sahiptir ve elmacık kemikleri ikisinin arasındadır. Yüz alından çeneye doğru kademeli olarak genişler.',
    },
    celebrities: {
      en: ['Jennifer Aniston', 'Justin Bieber', 'Kelly Osbourne', 'Eli Manning'],
      tr: ['Jennifer Aniston', 'Justin Bieber', 'Kelly Osbourne', 'Eli Manning'],
    },
    hairstyleTips: {
      en: [
        'Add volume at the temples and forehead to balance the jawline.',
        'Side-parted styles with volume on top work well.',
        'Avoid adding volume at the jaw level.',
        'Layered cuts that are fuller at the top are ideal.',
      ],
      tr: [
        'Çene hattını dengelemek için şakaklarda ve alında hacim ekleyin.',
        'Üstte hacimli, yandan ayrılmış modeller iyi sonuç verir.',
        'Çene hizasında hacim eklemekten kaçının.',
        'Üstte daha dolgun olan katlı kesimler idealdir.',
      ],
    },
    glassesTips: {
      en: 'Top-heavy or cat-eye frames add width to the upper face. Avoid narrow, bottom-heavy frames.',
      tr: 'Üst kısmı ağır veya kedi gözü çerçeveler yüzün üst kısmına genişlik katar. Dar, alt kısmı ağır çerçevelerden kaçının.',
    },
  },
};

function calculateProportions(input: FaceShapeInput): FaceProportions {
  const { foreheadWidth, cheekboneWidth, jawlineWidth, faceLength } = input;
  return {
    lengthToWidth: faceLength / cheekboneWidth,
    foreheadToJaw: foreheadWidth / jawlineWidth,
    foreheadToCheek: foreheadWidth / cheekboneWidth,
    jawToCheek: jawlineWidth / cheekboneWidth,
  };
}

function scoreFaceShapes(proportions: FaceProportions): Record<FaceShape, number> {
  const { lengthToWidth, foreheadToJaw, foreheadToCheek, jawToCheek } = proportions;

  const scores: Record<FaceShape, number> = {
    oval: 0,
    round: 0,
    square: 0,
    heart: 0,
    oblong: 0,
    diamond: 0,
    triangle: 0,
  };

  // Oval: face longer than wide (~1.3-1.5x), forehead slightly wider than jaw
  if (lengthToWidth >= 1.25 && lengthToWidth <= 1.55) scores.oval += 35;
  else if (lengthToWidth >= 1.15 && lengthToWidth <= 1.65) scores.oval += 15;
  if (foreheadToJaw >= 1.05 && foreheadToJaw <= 1.35) scores.oval += 30;
  if (foreheadToCheek >= 0.85 && foreheadToCheek <= 1.0) scores.oval += 20;
  if (jawToCheek >= 0.75 && jawToCheek <= 0.9) scores.oval += 15;

  // Round: length ≈ width, full cheekbones
  if (lengthToWidth >= 0.9 && lengthToWidth <= 1.15) scores.round += 40;
  else if (lengthToWidth >= 1.15 && lengthToWidth <= 1.25) scores.round += 15;
  if (foreheadToCheek >= 0.8 && foreheadToCheek <= 0.95) scores.round += 20;
  if (jawToCheek >= 0.75 && jawToCheek <= 0.95) scores.round += 20;
  if (foreheadToJaw >= 0.9 && foreheadToJaw <= 1.15) scores.round += 20;

  // Square: all widths similar, length ≈ width, strong jaw
  if (lengthToWidth >= 0.9 && lengthToWidth <= 1.2) scores.square += 25;
  if (foreheadToJaw >= 0.9 && foreheadToJaw <= 1.1) scores.square += 25;
  if (foreheadToCheek >= 0.9 && foreheadToCheek <= 1.05) scores.square += 25;
  if (jawToCheek >= 0.9 && jawToCheek <= 1.05) scores.square += 25;

  // Heart: wide forehead, narrow jaw, tapered chin
  if (foreheadToJaw >= 1.2) scores.heart += 40;
  else if (foreheadToJaw >= 1.1) scores.heart += 20;
  if (foreheadToCheek >= 0.9 && foreheadToCheek <= 1.1) scores.heart += 20;
  if (jawToCheek < 0.8) scores.heart += 25;
  if (lengthToWidth >= 1.15 && lengthToWidth <= 1.5) scores.heart += 15;

  // Oblong/Rectangle: much longer than wide, similar widths
  if (lengthToWidth >= 1.5) scores.oblong += 45;
  else if (lengthToWidth >= 1.35) scores.oblong += 25;
  if (foreheadToJaw >= 0.85 && foreheadToJaw <= 1.15) scores.oblong += 20;
  if (foreheadToCheek >= 0.85 && foreheadToCheek <= 1.1) scores.oblong += 20;
  if (jawToCheek >= 0.85 && jawToCheek <= 1.1) scores.oblong += 15;

  // Diamond: cheekbones widest, narrow forehead and jaw
  if (foreheadToCheek < 0.85) scores.diamond += 30;
  else if (foreheadToCheek < 0.92) scores.diamond += 15;
  if (jawToCheek < 0.8) scores.diamond += 30;
  else if (jawToCheek < 0.88) scores.diamond += 15;
  if (lengthToWidth >= 1.15 && lengthToWidth <= 1.55) scores.diamond += 20;
  if (foreheadToJaw >= 0.85 && foreheadToJaw <= 1.2) scores.diamond += 20;

  // Triangle/Pear: jaw wider than forehead
  if (foreheadToJaw < 0.85) scores.triangle += 45;
  else if (foreheadToJaw < 0.95) scores.triangle += 20;
  if (jawToCheek >= 0.9 && jawToCheek <= 1.1) scores.triangle += 25;
  if (foreheadToCheek < 0.9) scores.triangle += 15;
  if (lengthToWidth >= 1.0 && lengthToWidth <= 1.4) scores.triangle += 15;

  return scores;
}

export function calculateFaceShape(input: FaceShapeInput): FaceShapeResult {
  const proportions = calculateProportions(input);
  const scores = scoreFaceShapes(proportions);

  // Find the shape with highest score
  let bestShape: FaceShape = 'oval';
  let bestScore = 0;
  let totalScore = 0;

  for (const [shape, score] of Object.entries(scores)) {
    totalScore += score;
    if (score > bestScore) {
      bestScore = score;
      bestShape = shape as FaceShape;
    }
  }

  const confidence = totalScore > 0 ? Math.round((bestScore / totalScore) * 100) : 0;

  return {
    shape: bestShape,
    shapeInfo: faceShapeData[bestShape],
    confidence,
    scores,
    proportions,
  };
}
