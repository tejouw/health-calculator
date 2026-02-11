import type {
  PetAgeInput,
  PetAgeResult,
  LifeStage,
  Milestone,
  VetSchedule,
  LocalizedString,
} from './petAgeTypes';

/**
 * Calculate pet age in human years with comprehensive health insights
 * Based on American Veterinary Medical Association (AVMA) guidelines
 */
export function calculatePetAge(input: PetAgeInput): PetAgeResult {
  const totalMonths = input.ageYears * 12 + input.ageMonths;
  const totalYears = totalMonths / 12;

  let humanAge: number;
  let expectedLifespan: number;

  switch (input.petType) {
    case 'cat':
      humanAge = calculateCatAge(totalYears);
      expectedLifespan = input.isIndoor ? 16 : 5; // Indoor cats live much longer
      break;
    case 'dog':
      humanAge = calculateDogAge(totalYears, input.dogSize || 'medium');
      expectedLifespan = getDogLifespan(input.dogSize || 'medium');
      break;
    case 'rabbit':
      humanAge = calculateRabbitAge(totalYears);
      expectedLifespan = input.isIndoor ? 10 : 3;
      break;
    case 'hamster':
      humanAge = calculateHamsterAge(totalYears);
      expectedLifespan = 2.5;
      break;
    case 'bird':
      humanAge = calculateBirdAge(totalYears);
      expectedLifespan = 15; // Average for parrots
      break;
    case 'guinea-pig':
      humanAge = calculateGuineaPigAge(totalYears);
      expectedLifespan = 6;
      break;
    default:
      humanAge = totalYears * 7;
      expectedLifespan = 12;
  }

  const lifeStage = determineLifeStage(totalYears, input.petType);
  const percentOfLifespan = Math.min((totalYears / expectedLifespan) * 100, 100);

  return {
    humanAge: Math.round(humanAge),
    lifeStage,
    lifeStageName: getLifeStageName(lifeStage),
    ageCategory: getAgeCategory(lifeStage, input.petType),
    healthTips: getHealthTips(lifeStage, input.petType, input),
    nutritionTips: getNutritionTips(lifeStage, input.petType, input),
    exerciseTips: getExerciseTips(lifeStage, input.petType, input),
    funFacts: getFunFacts(input.petType, totalYears, humanAge),
    milestones: getMilestones(input.petType),
    vetSchedule: getVetSchedule(lifeStage, input.petType),
    commonHealthIssues: getCommonHealthIssues(lifeStage, input.petType, input),
    expectedLifespan,
    percentOfLifespan: Math.round(percentOfLifespan),
    personalityTraits: getPersonalityTraits(lifeStage, input.petType),
    socialNeeds: getSocialNeeds(lifeStage, input.petType),
    trainingTips: getTrainingTips(lifeStage, input.petType),
  };
}

// ==================== AGE CALCULATION FORMULAS ====================

function calculateCatAge(years: number): number {
  if (years <= 1) return years * 15;
  if (years <= 2) return 15 + (years - 1) * 9;
  return 24 + (years - 2) * 4;
}

function calculateDogAge(years: number, size: string): number {
  const sizeMultipliers: Record<string, number> = {
    small: 4,
    medium: 5,
    large: 6,
    giant: 7,
  };

  if (years <= 1) return years * 15;
  if (years <= 2) return 15 + (years - 1) * 9;
  return 24 + (years - 2) * (sizeMultipliers[size] || 5);
}

function calculateRabbitAge(years: number): number {
  // Rabbits mature quickly, then age slowly
  if (years <= 1) return years * 21;
  if (years <= 2) return 21 + (years - 1) * 6;
  return 27 + (years - 2) * 4;
}

function calculateHamsterAge(years: number): number {
  // Hamsters age very rapidly
  if (years <= 0.5) return years * 30;
  if (years <= 1) return 15 + (years - 0.5) * 20;
  return 25 + (years - 1) * 15;
}

function calculateBirdAge(years: number): number {
  // Birds (parrots) age slowly
  if (years <= 2) return years * 7;
  if (years <= 5) return 14 + (years - 2) * 4;
  return 26 + (years - 5) * 3;
}

function calculateGuineaPigAge(years: number): number {
  if (years <= 1) return years * 18;
  if (years <= 2) return 18 + (years - 1) * 10;
  return 28 + (years - 2) * 6;
}

function getDogLifespan(size: string): number {
  const lifespans: Record<string, number> = {
    small: 15,
    medium: 12,
    large: 10,
    giant: 8,
  };
  return lifespans[size] || 12;
}

// ==================== LIFE STAGES ====================

function determineLifeStage(years: number, petType: string): LifeStage {
  const stages: Record<string, number[]> = {
    dog: [0.5, 2, 7, 10, 15],
    cat: [0.5, 2, 7, 11, 15],
    rabbit: [0.3, 1.5, 5, 8, 10],
    hamster: [0.2, 0.5, 1.2, 1.8, 2.5],
    bird: [1, 3, 8, 12, 20],
    'guinea-pig': [0.3, 1, 3, 5, 7],
  };

  const thresholds = stages[petType] || stages.dog;
  if (years < thresholds[0]) return 'baby';
  if (years < thresholds[1]) return 'young';
  if (years < thresholds[2]) return 'adult';
  if (years < thresholds[3]) return 'mature';
  if (years < thresholds[4]) return 'senior';
  return 'geriatric';
}

function getLifeStageName(stage: LifeStage): LocalizedString {
  const names: Record<LifeStage, LocalizedString> = {
    baby: { en: 'Baby', tr: 'Yavru' },
    young: { en: 'Young Adult', tr: 'Genç Yetişkin' },
    adult: { en: 'Adult', tr: 'Yetişkin' },
    mature: { en: 'Mature Adult', tr: 'Olgun Yetişkin' },
    senior: { en: 'Senior', tr: 'Yaşlı' },
    geriatric: { en: 'Geriatric', tr: 'İleri Yaş' },
  };
  return names[stage];
}

function getAgeCategory(stage: LifeStage, petType: string): LocalizedString {
  const categories: Record<LifeStage, LocalizedString> = {
    baby: {
      en: 'Energetic and rapidly growing',
      tr: 'Enerjik ve hızla büyüyen',
    },
    young: {
      en: 'Active and playful',
      tr: 'Aktif ve oyuncu',
    },
    adult: {
      en: 'Mature and stable',
      tr: 'Olgun ve kararlı',
    },
    mature: {
      en: 'Experienced and settled',
      tr: 'Deneyimli ve yerleşik',
    },
    senior: {
      en: 'Golden years with special needs',
      tr: 'Özel ihtiyaçlarla altın yıllar',
    },
    geriatric: {
      en: 'Advanced age requiring extra care',
      tr: 'Ekstra bakım gerektiren ileri yaş',
    },
  };
  return categories[stage];
}

// ==================== HEALTH TIPS ====================

function getHealthTips(stage: LifeStage, petType: string, input: PetAgeInput): LocalizedString[] {
  const tips: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Schedule initial vaccinations and deworming',
        tr: 'İlk aşılar ve iç parazit tedavisini planlayın',
      },
      {
        en: 'Start socialization early for behavioral development',
        tr: 'Davranışsal gelişim için erken sosyalleşmeye başlayın',
      },
      {
        en: 'Baby-proof your home for safety',
        tr: 'Evinizi güvenlik için yavru dostu hale getirin',
      },
      {
        en: 'Monitor growth rate and weight gain',
        tr: 'Büyüme hızını ve kilo alımını takip edin',
      },
    ],
    young: [
      {
        en: 'Complete vaccination schedule',
        tr: 'Aşı programını tamamlayın',
      },
      {
        en: 'Consider spaying/neutering (consult vet for timing)',
        tr: 'Kısırlaştırmayı düşünün (zamanlama için veterinere danışın)',
      },
      {
        en: 'Establish dental hygiene routine',
        tr: 'Diş hijyeni rutini oluşturun',
      },
      {
        en: 'Annual wellness check-ups',
        tr: 'Yıllık sağlık kontrolleri',
      },
    ],
    adult: [
      {
        en: 'Annual vet check-ups and vaccinations',
        tr: 'Yıllık veteriner kontrolleri ve aşılar',
      },
      {
        en: 'Monitor weight and adjust diet as needed',
        tr: 'Kiloyu takip edin ve gerektiğinde diyeti ayarlayın',
      },
      {
        en: 'Regular dental cleanings (professional)',
        tr: 'Düzenli diş temizlikleri (profesyonel)',
      },
      {
        en: 'Maintain consistent exercise routine',
        tr: 'Tutarlı egzersiz rutini sürdürün',
      },
    ],
    mature: [
      {
        en: 'Increase vet visits to twice yearly',
        tr: 'Veteriner ziyaretlerini yılda iki defaya çıkarın',
      },
      {
        en: 'Begin age-related health screenings',
        tr: 'Yaşa bağlı sağlık taramalarına başlayın',
      },
      {
        en: 'Watch for early signs of arthritis',
        tr: 'Artrit erken belirtilerini izleyin',
      },
      {
        en: 'Consider senior-specific diet',
        tr: 'Yaşlılara özel diyeti düşünün',
      },
    ],
    senior: [
      {
        en: 'Vet visits every 3-6 months',
        tr: 'Her 3-6 ayda bir veteriner ziyareti',
      },
      {
        en: 'Monitor for cognitive decline (CCD)',
        tr: 'Bilişsel gerilemeyi (CCD) izleyin',
      },
      {
        en: 'Provide easy access to food, water, litter',
        tr: 'Yemek, su, tuvalet için kolay erişim sağlayın',
      },
      {
        en: 'Joint supplements and pain management',
        tr: 'Eklem takviyeleri ve ağrı yönetimi',
      },
    ],
    geriatric: [
      {
        en: 'Frequent vet monitoring (monthly if needed)',
        tr: 'Sık veteriner takibi (gerekirse aylık)',
      },
      {
        en: 'Palliative care planning discussions',
        tr: 'Palyatif bakım planlama görüşmeleri',
      },
      {
        en: 'Comfort-focused environment modifications',
        tr: 'Konfor odaklı çevre düzenlemeleri',
      },
      {
        en: 'Quality of life assessments',
        tr: 'Yaşam kalitesi değerlendirmeleri',
      },
    ],
  };

  const baseTips = tips[stage] || tips.adult;

  // Add pet-specific tips
  if (petType === 'cat' && !input.isIndoor) {
    baseTips.push({
      en: 'Consider transitioning to indoor-only for longer lifespan',
      tr: 'Daha uzun yaşam için sadece iç mekana geçişi düşünün',
    });
  }

  if (petType === 'dog' && input.dogSize === 'giant' && stage === 'mature') {
    baseTips.push({
      en: 'Large breeds prone to hip dysplasia - monitor mobility',
      tr: 'Büyük ırklar kalça displazisine yatkın - hareketliliği izleyin',
    });
  }

  return baseTips;
}

// ==================== NUTRITION TIPS ====================

function getNutritionTips(
  stage: LifeStage,
  petType: string,
  input: PetAgeInput
): LocalizedString[] {
  const tips: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'High-protein, nutrient-dense food for growth',
        tr: 'Büyüme için yüksek proteinli, besin yoğun gıda',
      },
      {
        en: 'Feed 3-4 small meals per day',
        tr: 'Günde 3-4 küçük öğün verin',
      },
      {
        en: 'Ensure constant access to fresh water',
        tr: 'Sürekli temiz su erişimi sağlayın',
      },
    ],
    young: [
      {
        en: 'Transition to adult food around 1 year',
        tr: 'Yaklaşık 1 yaşında yetişkin mamasına geçin',
      },
      {
        en: 'Feed 2 meals per day on regular schedule',
        tr: 'Düzenli programda günde 2 öğün verin',
      },
      {
        en: 'Monitor portion sizes to prevent obesity',
        tr: 'Obeziteyi önlemek için porsiyon boyutlarını izleyin',
      },
    ],
    adult: [
      {
        en: 'Balanced adult formula food',
        tr: 'Dengeli yetişkin formül gıdası',
      },
      {
        en: 'Adjust calories based on activity level',
        tr: 'Aktivite seviyesine göre kalorileri ayarlayın',
      },
      {
        en: 'Healthy treats (max 10% of daily calories)',
        tr: 'Sağlıklı ödüller (günlük kalorinin max %10\'u)',
      },
    ],
    mature: [
      {
        en: 'Consider senior formula with joint support',
        tr: 'Eklem desteği ile yaşlı formülünü düşünün',
      },
      {
        en: 'Reduce calories if less active',
        tr: 'Daha az aktifse kalorileri azaltın',
      },
      {
        en: 'Add omega-3 fatty acids for inflammation',
        tr: 'İltihaplanma için omega-3 yağ asitleri ekleyin',
      },
    ],
    senior: [
      {
        en: 'Senior-specific diet with easy digestibility',
        tr: 'Kolay sindirilebilir yaşlılara özel diyet',
      },
      {
        en: 'Softer food if dental issues present',
        tr: 'Diş sorunları varsa daha yumuşak gıda',
      },
      {
        en: 'Smaller, more frequent meals',
        tr: 'Daha küçük, daha sık öğünler',
      },
    ],
    geriatric: [
      {
        en: 'Highly palatable, nutrient-dense food',
        tr: 'Son derece lezzetli, besin yoğun gıda',
      },
      {
        en: 'Warm food to enhance aroma and appetite',
        tr: 'Aroma ve iştahı artırmak için ılık gıda',
      },
      {
        en: 'Hand-feeding if appetite is low',
        tr: 'İştah azsa elle besleme',
      },
    ],
  };

  return tips[stage] || tips.adult;
}

// ==================== EXERCISE TIPS ====================

function getExerciseTips(
  stage: LifeStage,
  petType: string,
  input: PetAgeInput
): LocalizedString[] {
  if (petType === 'hamster' || petType === 'guinea-pig') {
    return [
      {
        en: 'Provide exercise wheel and tunnels',
        tr: 'Egzersiz çarkı ve tüneller sağlayın',
      },
      {
        en: 'Supervised playtime outside cage daily',
        tr: 'Günlük gözetimli kafes dışı oyun zamanı',
      },
    ];
  }

  if (petType === 'bird') {
    return [
      {
        en: 'Minimum 2-3 hours outside cage daily',
        tr: 'Günlük minimum 2-3 saat kafes dışı',
      },
      {
        en: 'Flight training and wing exercises',
        tr: 'Uçuş eğitimi ve kanat egzersizleri',
      },
    ];
  }

  const tips: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Short play sessions (5-10 minutes)',
        tr: 'Kısa oyun seansları (5-10 dakika)',
      },
      {
        en: 'Avoid over-exercising growing bones',
        tr: 'Büyüyen kemikleri aşırı yormayktan kaçının',
      },
      {
        en: 'Gentle socialization walks',
        tr: 'Nazik sosyalleşme yürüyüşleri',
      },
    ],
    young: [
      {
        en: '30-60 minutes of exercise daily',
        tr: 'Günlük 30-60 dakika egzersiz',
      },
      {
        en: 'High-energy activities and play',
        tr: 'Yüksek enerjili aktiviteler ve oyun',
      },
      {
        en: 'Training sessions for mental stimulation',
        tr: 'Zihinsel uyarım için eğitim seansları',
      },
    ],
    adult: [
      {
        en: 'Regular daily exercise (varies by breed)',
        tr: 'Düzenli günlük egzersiz (ırka göre değişir)',
      },
      {
        en: 'Mix of walks, play, and mental games',
        tr: 'Yürüyüş, oyun ve zihinsel oyunların karışımı',
      },
      {
        en: 'Maintain consistent routine',
        tr: 'Tutarlı rutini sürdürün',
      },
    ],
    mature: [
      {
        en: 'Moderate exercise, watch for fatigue',
        tr: 'Orta dereceli egzersiz, yorgunluğu izleyin',
      },
      {
        en: 'Swimming for low-impact cardio',
        tr: 'Düşük etkili kardio için yüzme',
      },
      {
        en: 'Gentle walks, avoid overheating',
        tr: 'Nazik yürüyüşler, aşırı ısınmadan kaçının',
      },
    ],
    senior: [
      {
        en: 'Shorter, more frequent walks',
        tr: 'Daha kısa, daha sık yürüyüşler',
      },
      {
        en: 'Low-impact activities only',
        tr: 'Sadece düşük etkili aktiviteler',
      },
      {
        en: 'Mobility exercises for joints',
        tr: 'Eklemler için mobilite egzersizleri',
      },
    ],
    geriatric: [
      {
        en: 'Very gentle, short movements',
        tr: 'Çok nazik, kısa hareketler',
      },
      {
        en: 'Passive range-of-motion exercises',
        tr: 'Pasif hareket açıklığı egzersizleri',
      },
      {
        en: 'Focus on comfort, not intensity',
        tr: 'Yoğunluk değil konfora odaklanın',
      },
    ],
  };

  return tips[stage] || tips.adult;
}

// ==================== FUN FACTS ====================

function getFunFacts(petType: string, age: number, humanAge: number): LocalizedString[] {
  const petFacts: Record<string, LocalizedString[]> = {
    dog: [
      {
        en: 'The oldest dog ever lived to 29 years and 5 months!',
        tr: 'Şimdiye kadarki en yaşlı köpek 29 yıl 5 ay yaşadı!',
      },
      {
        en: 'Dogs have a sense of time and can miss you when you\'re gone',
        tr: 'Köpeklerin zaman kavramı vardır ve gittiğinizde sizi özleyebilirler',
      },
      {
        en: 'A dog\'s sense of smell is 10,000 to 100,000 times better than humans',
        tr: 'Bir köpeğin koku alma duyusu insanlardan 10.000 ila 100.000 kat daha iyidir',
      },
      {
        en: `Your dog is approximately ${humanAge} years old in human years!`,
        tr: `Köpeğiniz insan yıllarında yaklaşık ${humanAge} yaşındadır!`,
      },
    ],
    cat: [
      {
        en: 'The oldest cat ever lived to 38 years old!',
        tr: 'Şimdiye kadarki en yaşlı kedi 38 yaşına kadar yaşadı!',
      },
      {
        en: 'Cats spend 70% of their lives sleeping',
        tr: 'Kediler hayatlarının %70\'ini uyuyarak geçirirler',
      },
      {
        en: 'Indoor cats typically live 12-18 years, outdoor cats only 2-5 years',
        tr: 'İç mekan kedileri genellikle 12-18 yıl, dış mekan kedileri sadece 2-5 yıl yaşar',
      },
      {
        en: `Your cat is approximately ${humanAge} years old in human years!`,
        tr: `Kediniz insan yıllarında yaklaşık ${humanAge} yaşındadır!`,
      },
    ],
    rabbit: [
      {
        en: 'The oldest rabbit lived to 18 years old!',
        tr: 'En yaşlı tavşan 18 yaşına kadar yaşadı!',
      },
      {
        en: 'Rabbits can jump up to 3 feet high and 9 feet long',
        tr: 'Tavşanlar 1 metre yüksekliğe ve 3 metre uzunluğa atlayabilirler',
      },
      {
        en: 'A rabbit\'s teeth never stop growing throughout their life',
        tr: 'Bir tavşanın dişleri hayatı boyunca büyümeye devam eder',
      },
    ],
    hamster: [
      {
        en: 'The oldest hamster lived to 4.5 years!',
        tr: 'En yaşlı hamster 4.5 yıl yaşadı!',
      },
      {
        en: 'Hamsters can run up to 9 km per night on their wheel',
        tr: 'Hamsterlar çarklarında gecede 9 km\'ye kadar koşabilirler',
      },
      {
        en: 'Hamsters have poor eyesight but excellent hearing',
        tr: 'Hamsterların görüşleri zayıftır ama işitmeleri mükemmeldir',
      },
    ],
    bird: [
      {
        en: 'Some parrots can live over 80 years!',
        tr: 'Bazı papağanlar 80 yıldan fazla yaşayabilir!',
      },
      {
        en: 'Birds have hollow bones to help them fly',
        tr: 'Kuşların uçmalarına yardımcı olmak için içi boş kemikleri vardır',
      },
      {
        en: 'Many parrots mate for life',
        tr: 'Birçok papağan ömür boyu eşiyle kalır',
      },
    ],
    'guinea-pig': [
      {
        en: 'Guinea pigs are social and should never live alone',
        tr: 'Ginepigları sosyaldir ve asla yalnız yaşamamalıdır',
      },
      {
        en: 'They can recognize their owners and squeak with excitement',
        tr: 'Sahiplerini tanıyabilir ve heyecanla cıvıldayabilirler',
      },
      {
        en: 'Guinea pigs sleep with their eyes open',
        tr: 'Ginepigları gözleri açık uyurlar',
      },
    ],
  };

  return petFacts[petType] || petFacts.dog;
}

// ==================== MILESTONES ====================

function getMilestones(petType: string): Milestone[] {
  const milestones: Record<string, Milestone[]> = {
    dog: [
      {
        age: 0.25,
        title: { en: '3 Months', tr: '3 Ay' },
        description: {
          en: 'First vaccinations and socialization window',
          tr: 'İlk aşılar ve sosyalleşme penceresi',
        },
        icon: '💉',
      },
      {
        age: 0.5,
        title: { en: '6 Months', tr: '6 Ay' },
        description: {
          en: 'Puppy teeth replaced, consider spay/neuter',
          tr: 'Süt dişleri değişir, kısırlaştırma düşünülür',
        },
        icon: '🦷',
      },
      {
        age: 1,
        title: { en: '1 Year', tr: '1 Yıl' },
        description: {
          en: 'Reaches adult size and maturity',
          tr: 'Yetişkin boyutuna ve olgunluğa ulaşır',
        },
        icon: '🐕',
      },
      {
        age: 7,
        title: { en: '7 Years', tr: '7 Yıl' },
        description: {
          en: 'Senior years begin - increase vet visits',
          tr: 'Yaşlı yıllar başlar - veteriner ziyaretlerini artırın',
        },
        icon: '👴',
      },
    ],
    cat: [
      {
        age: 0.25,
        title: { en: '3 Months', tr: '3 Ay' },
        description: {
          en: 'Weaned and litter trained',
          tr: 'Sütten kesilmiş ve tuvalet eğitimli',
        },
        icon: '🍼',
      },
      {
        age: 0.5,
        title: { en: '6 Months', tr: '6 Ay' },
        description: {
          en: 'Sexual maturity - spay/neuter recommended',
          tr: 'Cinsel olgunluk - kısırlaştırma önerilir',
        },
        icon: '🌸',
      },
      {
        age: 1,
        title: { en: '1 Year', tr: '1 Yıl' },
        description: {
          en: 'Fully grown adult cat',
          tr: 'Tam büyümüş yetişkin kedi',
        },
        icon: '🐱',
      },
      {
        age: 7,
        title: { en: '7 Years', tr: '7 Yıl' },
        description: {
          en: 'Senior years - monitor health closely',
          tr: 'Yaşlı yıllar - sağlığı yakından izleyin',
        },
        icon: '👵',
      },
    ],
    rabbit: [
      {
        age: 0.5,
        title: { en: '6 Months', tr: '6 Ay' },
        description: {
          en: 'Sexual maturity, spay/neuter time',
          tr: 'Cinsel olgunluk, kısırlaştırma zamanı',
        },
        icon: '🐰',
      },
      {
        age: 1,
        title: { en: '1 Year', tr: '1 Yıl' },
        description: {
          en: 'Full adult size',
          tr: 'Tam yetişkin boyutu',
        },
        icon: '🥕',
      },
      {
        age: 5,
        title: { en: '5 Years', tr: '5 Yıl' },
        description: {
          en: 'Senior rabbit - dental checks important',
          tr: 'Yaşlı tavşan - diş kontrolleri önemli',
        },
        icon: '🦷',
      },
    ],
    hamster: [
      {
        age: 0.08,
        title: { en: '1 Month', tr: '1 Ay' },
        description: {
          en: 'Weaned and independent',
          tr: 'Sütten kesilmiş ve bağımsız',
        },
        icon: '🐹',
      },
      {
        age: 0.25,
        title: { en: '3 Months', tr: '3 Ay' },
        description: {
          en: 'Fully grown adult',
          tr: 'Tam büyümüş yetişkin',
        },
        icon: '⚡',
      },
      {
        age: 1.5,
        title: { en: '18 Months', tr: '18 Ay' },
        description: {
          en: 'Senior hamster - gentle care needed',
          tr: 'Yaşlı hamster - nazik bakım gerekli',
        },
        icon: '💤',
      },
    ],
    bird: [
      {
        age: 1,
        title: { en: '1 Year', tr: '1 Yıl' },
        description: {
          en: 'Sexual maturity',
          tr: 'Cinsel olgunluk',
        },
        icon: '🦜',
      },
      {
        age: 5,
        title: { en: '5 Years', tr: '5 Yıl' },
        description: {
          en: 'Fully mature personality',
          tr: 'Tamamen olgun kişilik',
        },
        icon: '🎭',
      },
      {
        age: 10,
        title: { en: '10 Years', tr: '10 Yıl' },
        description: {
          en: 'Senior bird - monitor closely',
          tr: 'Yaşlı kuş - yakından izleyin',
        },
        icon: '🏥',
      },
    ],
    'guinea-pig': [
      {
        age: 0.5,
        title: { en: '6 Months', tr: '6 Ay' },
        description: {
          en: 'Sexual maturity',
          tr: 'Cinsel olgunluk',
        },
        icon: '🐹',
      },
      {
        age: 1,
        title: { en: '1 Year', tr: '1 Yıl' },
        description: {
          en: 'Full adult size',
          tr: 'Tam yetişkin boyutu',
        },
        icon: '📏',
      },
      {
        age: 4,
        title: { en: '4 Years', tr: '4 Yıl' },
        description: {
          en: 'Senior guinea pig',
          tr: 'Yaşlı ginepigi',
        },
        icon: '👴',
      },
    ],
  };

  return milestones[petType] || milestones.dog;
}

// ==================== VET SCHEDULE ====================

function getVetSchedule(stage: LifeStage, petType: string): VetSchedule {
  const schedules: Record<LifeStage, VetSchedule> = {
    baby: {
      frequency: {
        en: 'Every 2-4 weeks until 16 weeks old',
        tr: '16 haftalık olana kadar her 2-4 haftada bir',
      },
      checkups: [
        {
          en: 'Physical examination',
          tr: 'Fiziksel muayene',
        },
        {
          en: 'Weight monitoring',
          tr: 'Kilo takibi',
        },
        {
          en: 'Parasite screening',
          tr: 'Parazit taraması',
        },
      ],
      vaccinations: [
        {
          en: 'Core vaccines (6-16 weeks)',
          tr: 'Temel aşılar (6-16 hafta)',
        },
        {
          en: 'Deworming',
          tr: 'İç parazit tedavisi',
        },
      ],
      screenings: [
        {
          en: 'Congenital defect check',
          tr: 'Doğuştan kusur kontrolü',
        },
      ],
    },
    young: {
      frequency: {
        en: 'Annually',
        tr: 'Yıllık',
      },
      checkups: [
        {
          en: 'Annual wellness exam',
          tr: 'Yıllık sağlık muayenesi',
        },
        {
          en: 'Dental examination',
          tr: 'Diş muayenesi',
        },
      ],
      vaccinations: [
        {
          en: 'Annual boosters',
          tr: 'Yıllık rapel aşılar',
        },
      ],
      screenings: [
        {
          en: 'Heartworm test (for dogs)',
          tr: 'Kalp kurdu testi (köpekler için)',
        },
      ],
    },
    adult: {
      frequency: {
        en: 'Annually',
        tr: 'Yıllık',
      },
      checkups: [
        {
          en: 'Comprehensive physical exam',
          tr: 'Kapsamlı fiziksel muayene',
        },
        {
          en: 'Dental cleaning',
          tr: 'Diş temizliği',
        },
      ],
      vaccinations: [
        {
          en: 'Annual vaccines',
          tr: 'Yıllık aşılar',
        },
      ],
      screenings: [
        {
          en: 'Blood work every 1-2 years',
          tr: 'Her 1-2 yılda bir kan tahlili',
        },
      ],
    },
    mature: {
      frequency: {
        en: 'Every 6 months',
        tr: 'Her 6 ayda bir',
      },
      checkups: [
        {
          en: 'Bi-annual wellness exams',
          tr: 'Altı aylık sağlık muayeneleri',
        },
        {
          en: 'Mobility assessment',
          tr: 'Mobilite değerlendirmesi',
        },
      ],
      vaccinations: [
        {
          en: 'Adjusted vaccine schedule',
          tr: 'Ayarlanmış aşı programı',
        },
      ],
      screenings: [
        {
          en: 'Annual blood panel',
          tr: 'Yıllık kan paneli',
        },
        {
          en: 'Kidney and liver function',
          tr: 'Böbrek ve karaciğer fonksiyonu',
        },
        {
          en: 'Thyroid screening',
          tr: 'Tiroid taraması',
        },
      ],
    },
    senior: {
      frequency: {
        en: 'Every 3-4 months',
        tr: 'Her 3-4 ayda bir',
      },
      checkups: [
        {
          en: 'Quarterly senior wellness exams',
          tr: 'Üç aylık yaşlı sağlık muayeneleri',
        },
        {
          en: 'Pain assessment',
          tr: 'Ağrı değerlendirmesi',
        },
      ],
      vaccinations: [
        {
          en: 'Vet-recommended only',
          tr: 'Sadece veterinerin önerdiği',
        },
      ],
      screenings: [
        {
          en: 'Comprehensive blood work',
          tr: 'Kapsamlı kan tahlili',
        },
        {
          en: 'Cancer screenings',
          tr: 'Kanser taramaları',
        },
        {
          en: 'Cognitive function tests',
          tr: 'Bilişsel fonksiyon testleri',
        },
      ],
    },
    geriatric: {
      frequency: {
        en: 'Monthly or as needed',
        tr: 'Aylık veya gerektiğinde',
      },
      checkups: [
        {
          en: 'Frequent monitoring visits',
          tr: 'Sık izleme ziyaretleri',
        },
        {
          en: 'Quality of life assessments',
          tr: 'Yaşam kalitesi değerlendirmeleri',
        },
      ],
      vaccinations: [
        {
          en: 'Case-by-case basis',
          tr: 'Vaka bazında',
        },
      ],
      screenings: [
        {
          en: 'Ongoing health monitoring',
          tr: 'Devam eden sağlık izleme',
        },
      ],
    },
  };

  return schedules[stage] || schedules.adult;
}

// ==================== COMMON HEALTH ISSUES ====================

function getCommonHealthIssues(
  stage: LifeStage,
  petType: string,
  input: PetAgeInput
): LocalizedString[] {
  const dogIssues: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Parasites (roundworms, hookworms)',
        tr: 'Parazitler (yuvarlak kurtlar, kanca kurtlar)',
      },
      {
        en: 'Parvovirus',
        tr: 'Parvovirus',
      },
      {
        en: 'Hypoglycemia (toy breeds)',
        tr: 'Hipoglisemi (toy ırklar)',
      },
    ],
    young: [
      {
        en: 'Ear infections',
        tr: 'Kulak enfeksiyonları',
      },
      {
        en: 'Dental disease',
        tr: 'Diş hastalığı',
      },
      {
        en: 'Allergies',
        tr: 'Alerjiler',
      },
    ],
    adult: [
      {
        en: 'Obesity',
        tr: 'Obezite',
      },
      {
        en: 'Periodontal disease',
        tr: 'Periodontal hastalık',
      },
      {
        en: 'Hip dysplasia (large breeds)',
        tr: 'Kalça displazisi (büyük ırklar)',
      },
    ],
    mature: [
      {
        en: 'Arthritis',
        tr: 'Artrit',
      },
      {
        en: 'Heart disease',
        tr: 'Kalp hastalığı',
      },
      {
        en: 'Diabetes',
        tr: 'Diyabet',
      },
    ],
    senior: [
      {
        en: 'Cancer',
        tr: 'Kanser',
      },
      {
        en: 'Kidney disease',
        tr: 'Böbrek hastalığı',
      },
      {
        en: 'Cognitive dysfunction (CCD)',
        tr: 'Bilişsel bozukluk (CCD)',
      },
    ],
    geriatric: [
      {
        en: 'Organ failure',
        tr: 'Organ yetmezliği',
      },
      {
        en: 'Severe mobility issues',
        tr: 'Ciddi mobilite sorunları',
      },
      {
        en: 'Terminal conditions',
        tr: 'Terminal durumlar',
      },
    ],
  };

  const catIssues: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Upper respiratory infections',
        tr: 'Üst solunum yolu enfeksiyonları',
      },
      {
        en: 'Fleas and parasites',
        tr: 'Pireler ve parazitler',
      },
    ],
    young: [
      {
        en: 'Urinary tract infections',
        tr: 'İdrar yolu enfeksiyonları',
      },
      {
        en: 'Dental disease',
        tr: 'Diş hastalığı',
      },
    ],
    adult: [
      {
        en: 'Obesity',
        tr: 'Obezite',
      },
      {
        en: 'Diabetes',
        tr: 'Diyabet',
      },
      {
        en: 'Hyperthyroidism',
        tr: 'Hipertiroidizm',
      },
    ],
    mature: [
      {
        en: 'Chronic kidney disease',
        tr: 'Kronik böbrek hastalığı',
      },
      {
        en: 'Arthritis',
        tr: 'Artrit',
      },
    ],
    senior: [
      {
        en: 'Cancer',
        tr: 'Kanser',
      },
      {
        en: 'Kidney failure',
        tr: 'Böbrek yetmezliği',
      },
      {
        en: 'Cognitive decline',
        tr: 'Bilişsel gerileme',
      },
    ],
    geriatric: [
      {
        en: 'Multi-organ dysfunction',
        tr: 'Çoklu organ disfonksiyonu',
      },
      {
        en: 'Severe dental disease',
        tr: 'Ciddi diş hastalığı',
      },
    ],
  };

  if (petType === 'cat') {
    return catIssues[stage] || catIssues.adult;
  }

  return dogIssues[stage] || dogIssues.adult;
}

// ==================== PERSONALITY TRAITS ====================

function getPersonalityTraits(stage: LifeStage, petType: string): LocalizedString[] {
  const traits: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Curious and exploratory',
        tr: 'Meraklı ve keşfedici',
      },
      {
        en: 'High energy and playful',
        tr: 'Yüksek enerjili ve oyuncu',
      },
      {
        en: 'Learning boundaries',
        tr: 'Sınırları öğreniyor',
      },
    ],
    young: [
      {
        en: 'Energetic and enthusiastic',
        tr: 'Enerjik ve coşkulu',
      },
      {
        en: 'Testing limits',
        tr: 'Limitleri test ediyor',
      },
      {
        en: 'Socially developing',
        tr: 'Sosyal olarak gelişiyor',
      },
    ],
    adult: [
      {
        en: 'Stable and predictable',
        tr: 'İstikrarlı ve tahmin edilebilir',
      },
      {
        en: 'Confident',
        tr: 'Kendine güvenli',
      },
      {
        en: 'Established routines',
        tr: 'Yerleşik rutinler',
      },
    ],
    mature: [
      {
        en: 'Calm and settled',
        tr: 'Sakin ve yerleşik',
      },
      {
        en: 'Wisdom and experience',
        tr: 'Bilgelik ve deneyim',
      },
      {
        en: 'Less adventurous',
        tr: 'Daha az macera düşkünü',
      },
    ],
    senior: [
      {
        en: 'Gentle and affectionate',
        tr: 'Nazik ve sevecen',
      },
      {
        en: 'Enjoys quiet time',
        tr: 'Sessiz zamanın tadını çıkarıyor',
      },
      {
        en: 'May be less patient',
        tr: 'Daha az sabırlı olabilir',
      },
    ],
    geriatric: [
      {
        en: 'Very gentle',
        tr: 'Çok nazik',
      },
      {
        en: 'Prefers familiar',
        tr: 'Tanıdık olanı tercih eder',
      },
      {
        en: 'Seeks comfort',
        tr: 'Konfor arıyor',
      },
    ],
  };

  return traits[stage] || traits.adult;
}

// ==================== SOCIAL NEEDS ====================

function getSocialNeeds(stage: LifeStage, petType: string): LocalizedString[] {
  const needs: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Critical socialization period - expose to many experiences',
        tr: 'Kritik sosyalleşme dönemi - birçok deneyime maruz bırakın',
      },
      {
        en: 'Positive interactions with people and animals',
        tr: 'İnsanlar ve hayvanlarla olumlu etkileşimler',
      },
    ],
    young: [
      {
        en: 'Active play with other pets',
        tr: 'Diğer evcil hayvanlarla aktif oyun',
      },
      {
        en: 'Mental stimulation through training',
        tr: 'Eğitim yoluyla zihinsel uyarım',
      },
    ],
    adult: [
      {
        en: 'Regular social interaction',
        tr: 'Düzenli sosyal etkileşim',
      },
      {
        en: 'Balanced alone time and companionship',
        tr: 'Dengeli yalnız kalma ve arkadaşlık',
      },
    ],
    mature: [
      {
        en: 'Quieter social activities',
        tr: 'Daha sessiz sosyal aktiviteler',
      },
      {
        en: 'Preference for familiar companions',
        tr: 'Tanıdık arkadaşları tercih eder',
      },
    ],
    senior: [
      {
        en: 'Gentle, calm interactions',
        tr: 'Nazik, sakin etkileşimler',
      },
      {
        en: 'May prefer solitude more',
        tr: 'Yalnızlığı daha çok tercih edebilir',
      },
    ],
    geriatric: [
      {
        en: 'Minimal social stress',
        tr: 'Minimum sosyal stres',
      },
      {
        en: 'Comfort and familiarity prioritized',
        tr: 'Konfor ve tanıdıklık öncelikli',
      },
    ],
  };

  return needs[stage] || needs.adult;
}

// ==================== TRAINING TIPS ====================

function getTrainingTips(stage: LifeStage, petType: string): LocalizedString[] {
  if (petType !== 'dog' && petType !== 'cat') {
    return [
      {
        en: 'Use positive reinforcement with treats',
        tr: 'Ödüllerle olumlu pekiştirme kullanın',
      },
      {
        en: 'Be patient and consistent',
        tr: 'Sabırlı ve tutarlı olun',
      },
    ];
  }

  const tips: Record<LifeStage, LocalizedString[]> = {
    baby: [
      {
        en: 'Start basic commands early (sit, stay, come)',
        tr: 'Temel komutlara erken başlayın (otur, kal, gel)',
      },
      {
        en: 'Positive reinforcement works best',
        tr: 'Olumlu pekiştirme en iyi sonucu verir',
      },
      {
        en: 'Short training sessions (5-10 minutes)',
        tr: 'Kısa eğitim seansları (5-10 dakika)',
      },
    ],
    young: [
      {
        en: 'Continue obedience training',
        tr: 'İtaat eğitimine devam edin',
      },
      {
        en: 'Leash training and manners',
        tr: 'Tasma eğitimi ve görgü kuralları',
      },
      {
        en: 'Address any behavioral issues early',
        tr: 'Davranışsal sorunları erken ele alın',
      },
    ],
    adult: [
      {
        en: 'Maintain learned behaviors',
        tr: 'Öğrenilen davranışları sürdürün',
      },
      {
        en: 'Mental enrichment through new tricks',
        tr: 'Yeni numaralar yoluyla zihinsel zenginleştirme',
      },
      {
        en: 'Consistency is key',
        tr: 'Tutarlılık anahtardır',
      },
    ],
    mature: [
      {
        en: 'Adapt training to physical limitations',
        tr: 'Eğitimi fiziksel kısıtlamalara uyarlayın',
      },
      {
        en: 'Keep mind active with puzzle toys',
        tr: 'Bulmaca oyuncaklarıyla zihni aktif tutun',
      },
    ],
    senior: [
      {
        en: 'Gentle reminders of old commands',
        tr: 'Eski komutların nazik hatırlatmaları',
      },
      {
        en: 'Cognitive games to prevent decline',
        tr: 'Gerilemeyi önlemek için bilişsel oyunlar',
      },
    ],
    geriatric: [
      {
        en: 'Focus on comfort, not new skills',
        tr: 'Yeni beceriler değil konfora odaklanın',
      },
      {
        en: 'Simple routines reduce confusion',
        tr: 'Basit rutinler karışıklığı azaltır',
      },
    ],
  };

  return tips[stage] || tips.adult;
}
