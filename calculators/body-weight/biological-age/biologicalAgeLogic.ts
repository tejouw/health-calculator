import type {
  BiologicalAgeInput,
  BiologicalAgeResult,
  AgeCategory,
  AgingFactor,
  ActionItem,
  DailyRoutineItem,
  WeeklyPlanDay,
  NutritionSuggestion,
  ExercisePlanItem,
  StressStrategy,
  SleepTip,
  TimelineProjection,
} from './biologicalAgeTypes';

export function calculateBiologicalAge(input: BiologicalAgeInput): BiologicalAgeResult {
  const heightInMeters = input.height / 100;
  const bmi = input.weight / (heightInMeters * heightInMeters);

  let totalAdjustment = 0;
  const agingFactors: AgingFactor[] = [];

  // 1. Smoking Impact (-8 to 0 years)
  const smokingImpact = calculateSmokingImpact(input.smokingStatus);
  totalAdjustment += smokingImpact;
  agingFactors.push({
    name: 'smoking',
    impact: smokingImpact,
    score: Math.max(0, 100 + smokingImpact * 10),
    status: smokingImpact === 0 ? 'excellent' : smokingImpact > -3 ? 'good' : smokingImpact > -6 ? 'fair' : 'poor',
    color: smokingImpact === 0 ? '#10b981' : smokingImpact > -3 ? '#84cc16' : smokingImpact > -6 ? '#f59e0b' : '#ef4444',
    icon: 'Cigarette',
    tip: smokingImpact === 0
      ? { en: 'Great! Never smoking is one of the best things for longevity.', tr: 'Harika! Hic sigara icmemek uzun omur icin en iyi seylerden biridir.' }
      : smokingImpact > -3
        ? { en: 'Good that you quit! Your body is still recovering. Stay strong.', tr: 'Biraktiginiz icin iyi! Vucudunuz hala iyilesiyor. Guclu kalin.' }
        : { en: 'Quitting smoking is the #1 most impactful change you can make right now.', tr: 'Sigarayi birakmak su anda yapabileceginiz en etkili degisikliktir.' },
  });

  // 2. Exercise Impact (-3 to +5 years)
  const exerciseImpact = calculateExerciseImpact(input.exerciseFrequency);
  totalAdjustment += exerciseImpact;
  agingFactors.push({
    name: 'exercise',
    impact: exerciseImpact,
    score: Math.max(0, Math.min(100, 50 + exerciseImpact * 10)),
    status: exerciseImpact >= 4 ? 'excellent' : exerciseImpact >= 2 ? 'good' : exerciseImpact >= 0 ? 'fair' : 'poor',
    color: exerciseImpact >= 4 ? '#10b981' : exerciseImpact >= 2 ? '#84cc16' : exerciseImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Dumbbell',
    tip: exerciseImpact >= 4
      ? { en: 'Excellent activity level! Keep up this amazing routine.', tr: 'Mukemmel aktivite seviyesi! Bu harika rutine devam edin.' }
      : exerciseImpact >= 2
        ? { en: 'Good exercise habits. Try to increase intensity or add a day.', tr: 'Iyi egzersiz aliskanliklari. Yogunlugu artirmayi veya bir gun eklemeyi deneyin.' }
        : { en: 'Start with 30 min walks daily. Even small movement makes a big difference.', tr: 'Gunluk 30 dakika yuruyusle baslayin. Kucuk hareketler bile buyuk fark yaratir.' },
  });

  // 3. Diet Impact (-4 to +4 years)
  const dietImpact = calculateDietImpact(input.dietQuality);
  totalAdjustment += dietImpact;
  agingFactors.push({
    name: 'diet',
    impact: dietImpact,
    score: Math.max(0, Math.min(100, 50 + dietImpact * 12.5)),
    status: dietImpact >= 3 ? 'excellent' : dietImpact >= 1 ? 'good' : dietImpact >= -1 ? 'fair' : 'poor',
    color: dietImpact >= 3 ? '#10b981' : dietImpact >= 1 ? '#84cc16' : dietImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Apple',
    tip: dietImpact >= 3
      ? { en: 'Outstanding diet! Mediterranean/plant-based eating is proven for longevity.', tr: 'Mukemmel diyet! Akdeniz/bitki bazli beslenme uzun omur icin kanitlanmistir.' }
      : { en: 'Try adding more vegetables, fruits, and whole grains to your meals.', tr: 'Ogunlerinize daha fazla sebze, meyve ve tam tahil eklemeyi deneyin.' },
  });

  // 4. Sleep Impact (-3 to +3 years)
  const sleepImpact = calculateSleepImpact(input.sleepQuality);
  totalAdjustment += sleepImpact;
  agingFactors.push({
    name: 'sleep',
    impact: sleepImpact,
    score: Math.max(0, Math.min(100, 50 + sleepImpact * 16.67)),
    status: sleepImpact >= 2 ? 'excellent' : sleepImpact >= 1 ? 'good' : sleepImpact >= 0 ? 'fair' : 'poor',
    color: sleepImpact >= 2 ? '#10b981' : sleepImpact >= 1 ? '#84cc16' : sleepImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Moon',
    tip: sleepImpact >= 2
      ? { en: 'Excellent sleep quality! This is crucial for cellular repair and longevity.', tr: 'Mukemmel uyku kalitesi! Bu hucresel onarim ve uzun omur icin cok onemlidir.' }
      : { en: 'Aim for 7-9 hours. Create a dark, cool room and avoid screens before bed.', tr: '7-9 saat hedefleyin. Karanlik, serin bir oda olusturun ve yatmadan once ekranlardan kacinin.' },
  });

  // 5. Stress Impact (-4 to +1 years)
  const stressImpact = calculateStressImpact(input.stressLevel);
  totalAdjustment += stressImpact;
  agingFactors.push({
    name: 'stress',
    impact: stressImpact,
    score: Math.max(0, Math.min(100, 80 + stressImpact * 20)),
    status: stressImpact >= 0 ? 'excellent' : stressImpact >= -2 ? 'good' : stressImpact >= -3 ? 'fair' : 'poor',
    color: stressImpact >= 0 ? '#10b981' : stressImpact >= -2 ? '#84cc16' : stressImpact >= -3 ? '#f59e0b' : '#ef4444',
    icon: 'Brain',
    tip: stressImpact >= 0
      ? { en: 'Great stress management! Low stress protects telomeres and slows aging.', tr: 'Harika stres yonetimi! Dusuk stres telomerleri korur ve yaslanmayi yavaslatir.' }
      : { en: 'Try 10 min daily meditation. Chronic stress accelerates aging significantly.', tr: 'Gunluk 10 dakika meditasyon deneyin. Kronik stres yaslanmayi onemli olcude hizlandirir.' },
  });

  // 6. Alcohol Impact (-3 to +2 years)
  const alcoholImpact = calculateAlcoholImpact(input.alcoholConsumption);
  totalAdjustment += alcoholImpact;
  agingFactors.push({
    name: 'alcohol',
    impact: alcoholImpact,
    score: Math.max(0, Math.min(100, 50 + alcoholImpact * 20)),
    status: alcoholImpact >= 1 ? 'excellent' : alcoholImpact >= -1 ? 'good' : alcoholImpact >= -2 ? 'fair' : 'poor',
    color: alcoholImpact >= 1 ? '#10b981' : alcoholImpact >= -1 ? '#84cc16' : alcoholImpact >= -2 ? '#f59e0b' : '#ef4444',
    icon: 'Wine',
    tip: alcoholImpact >= 0
      ? { en: 'Good alcohol habits. Moderation or abstinence supports longevity.', tr: 'Iyi alkol aliskanliklari. Olculuk veya kacinma uzun omru destekler.' }
      : { en: 'Reduce alcohol intake. Heavy drinking damages liver and accelerates aging.', tr: 'Alkol alimini azaltin. Agir icicilik karacigere zarar verir ve yaslanmayi hizlandirir.' },
  });

  // 7. BMI Impact (-5 to +2 years)
  const bmiImpact = calculateBMIImpact(bmi);
  totalAdjustment += bmiImpact;
  agingFactors.push({
    name: 'bmi',
    impact: bmiImpact,
    score: Math.max(0, Math.min(100, 70 + bmiImpact * 14)),
    status: bmiImpact >= 1 ? 'excellent' : bmiImpact >= -1 ? 'good' : bmiImpact >= -3 ? 'fair' : 'poor',
    color: bmiImpact >= 1 ? '#10b981' : bmiImpact >= -1 ? '#84cc16' : bmiImpact >= -3 ? '#f59e0b' : '#ef4444',
    icon: 'Scale',
    tip: bmiImpact >= 1
      ? { en: 'Healthy weight! Maintaining optimal BMI is key for longevity.', tr: 'Saglikli kilo! Optimal BMI\'yi korumak uzun omur icin anahtardir.' }
      : { en: 'Work toward a BMI of 18.5-24.9 through balanced diet and exercise.', tr: 'Dengeli diyet ve egzersiz yoluyla 18.5-24.9 BMI\'ye dogru calisin.' },
  });

  // 8. Chronic Conditions Impact (-10 to 0 years)
  const conditionsImpact = -Math.min(input.chronicConditions, 5) * 2;
  totalAdjustment += conditionsImpact;
  agingFactors.push({
    name: 'conditions',
    impact: conditionsImpact,
    score: Math.max(0, 100 + conditionsImpact * 10),
    status: conditionsImpact === 0 ? 'excellent' : conditionsImpact >= -2 ? 'good' : conditionsImpact >= -4 ? 'fair' : 'poor',
    color: conditionsImpact === 0 ? '#10b981' : conditionsImpact >= -2 ? '#84cc16' : conditionsImpact >= -4 ? '#f59e0b' : '#ef4444',
    icon: 'HeartPulse',
    tip: conditionsImpact === 0
      ? { en: 'No chronic conditions! Preventive care keeps it that way.', tr: 'Kronik hastalik yok! Koruyucu bakim bunu boyle tutar.' }
      : { en: 'Manage conditions with your doctor. Lifestyle changes can improve outcomes.', tr: 'Durumlarinizi doktorunuzla yonetin. Yasam tarzi degisiklikleri sonuclari iyilestirebilir.' },
  });

  // 9. Family Longevity (+3 to -3 years)
  const familyImpact = calculateFamilyImpact(input.familyLongevity);
  totalAdjustment += familyImpact;
  agingFactors.push({
    name: 'genetics',
    impact: familyImpact,
    score: Math.max(0, Math.min(100, 50 + familyImpact * 16.67)),
    status: familyImpact >= 2 ? 'excellent' : familyImpact >= 0 ? 'good' : familyImpact >= -2 ? 'fair' : 'poor',
    color: familyImpact >= 2 ? '#10b981' : familyImpact >= 0 ? '#84cc16' : familyImpact >= -2 ? '#f59e0b' : '#ef4444',
    icon: 'Users',
    tip: familyImpact >= 2
      ? { en: 'Strong family longevity genes! Combine with healthy lifestyle for best results.', tr: 'Guclu aile uzun omur genleri! En iyi sonuclar icin saglikli yasam tarziyla birlestirin.' }
      : { en: 'Lifestyle choices account for 70-80% of longevity. Genes are not destiny!', tr: 'Yasam tarzi secimleri uzun omurlulugunguzun %70-80\'ini olusturur. Genler kader degildir!' },
  });

  // 10. Blood Pressure Impact (if provided)
  if (input.bloodPressure) {
    const bpImpact = calculateBloodPressureImpact(input.bloodPressure);
    totalAdjustment += bpImpact;
    agingFactors.push({
      name: 'bloodPressure',
      impact: bpImpact,
      score: Math.max(0, 100 + bpImpact * 20),
      status: bpImpact >= 0 ? 'excellent' : bpImpact >= -2 ? 'good' : bpImpact >= -3 ? 'fair' : 'poor',
      color: bpImpact >= 0 ? '#10b981' : bpImpact >= -2 ? '#84cc16' : bpImpact >= -3 ? '#f59e0b' : '#ef4444',
      icon: 'Activity',
      tip: bpImpact >= 0
        ? { en: 'Normal blood pressure! Keep monitoring regularly.', tr: 'Normal kan basinci! Duzenli izlemeye devam edin.' }
        : { en: 'Work with your doctor on blood pressure management strategies.', tr: 'Kan basinci yonetim stratejileri icin doktorunuzla calisin.' },
    });
  }

  // === NEW FACTORS ===

  // 11. Breakfast Habit (-2 to +1 years)
  const breakfastImpact = calculateBreakfastImpact(input.breakfastHabit);
  totalAdjustment += breakfastImpact;
  agingFactors.push({
    name: 'breakfast',
    impact: breakfastImpact,
    score: Math.max(0, Math.min(100, 60 + breakfastImpact * 20)),
    status: breakfastImpact >= 1 ? 'excellent' : breakfastImpact >= 0 ? 'good' : breakfastImpact >= -1 ? 'fair' : 'poor',
    color: breakfastImpact >= 1 ? '#10b981' : breakfastImpact >= 0 ? '#84cc16' : breakfastImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Coffee',
    tip: breakfastImpact >= 1
      ? { en: 'Daily breakfast supports stable metabolism and energy.', tr: 'Gunluk kahvalti kararli metabolizma ve enerjiyi destekler.' }
      : { en: 'A healthy breakfast kickstarts metabolism and stabilizes blood sugar.', tr: 'Saglikli bir kahvalti metabolizmayi baslatir ve kan sekerini dengeler.' },
  });

  // 12. Fruit & Vegetable Servings (-2 to +3 years)
  const fruitVegImpact = calculateFruitVegetableImpact(input.fruitVegetableServings);
  totalAdjustment += fruitVegImpact;
  agingFactors.push({
    name: 'fruitVegetable',
    impact: fruitVegImpact,
    score: Math.max(0, Math.min(100, 40 + fruitVegImpact * 20)),
    status: fruitVegImpact >= 2 ? 'excellent' : fruitVegImpact >= 1 ? 'good' : fruitVegImpact >= 0 ? 'fair' : 'poor',
    color: fruitVegImpact >= 2 ? '#10b981' : fruitVegImpact >= 1 ? '#84cc16' : fruitVegImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Salad',
    tip: fruitVegImpact >= 2
      ? { en: 'Excellent fruit/veggie intake! Antioxidants fight cellular aging.', tr: 'Mukemmel meyve/sebze alimi! Antioksidanlar hucresel yaslanmayla savasar.' }
      : { en: 'Aim for 5+ servings daily. Each extra serving reduces mortality risk.', tr: 'Gunluk 5+ porsiyon hedefleyin. Her ekstra porsiyon olum riskini azaltir.' },
  });

  // 13. Processed Food Frequency (-3 to +1 years)
  const processedFoodImpact = calculateProcessedFoodImpact(input.processedFoodFrequency);
  totalAdjustment += processedFoodImpact;
  agingFactors.push({
    name: 'processedFood',
    impact: processedFoodImpact,
    score: Math.max(0, Math.min(100, 60 + processedFoodImpact * 15)),
    status: processedFoodImpact >= 1 ? 'excellent' : processedFoodImpact >= 0 ? 'good' : processedFoodImpact >= -1 ? 'fair' : 'poor',
    color: processedFoodImpact >= 1 ? '#10b981' : processedFoodImpact >= 0 ? '#84cc16' : processedFoodImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Ban',
    tip: processedFoodImpact >= 0
      ? { en: 'Great job avoiding processed foods. Whole foods protect your cells.', tr: 'Islemis gidalari onleme konusunda harika is! Dogal gidalar hucrelerinizi korur.' }
      : { en: 'Ultra-processed foods shorten telomeres. Replace with whole food alternatives.', tr: 'Ultra-islemis gidalar telomerleri kisaltir. Dogal gida alternatifleriyle degistirin.' },
  });

  // 14. Omega-3 Intake (-1 to +2 years)
  const omega3Impact = calculateOmega3Impact(input.omega3Intake);
  totalAdjustment += omega3Impact;
  agingFactors.push({
    name: 'omega3',
    impact: omega3Impact,
    score: Math.max(0, Math.min(100, 50 + omega3Impact * 25)),
    status: omega3Impact >= 2 ? 'excellent' : omega3Impact >= 1 ? 'good' : omega3Impact >= 0 ? 'fair' : 'poor',
    color: omega3Impact >= 2 ? '#10b981' : omega3Impact >= 1 ? '#84cc16' : omega3Impact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Fish',
    tip: omega3Impact >= 1
      ? { en: 'Good omega-3 intake reduces inflammation and protects brain health.', tr: 'Iyi omega-3 alimi iltihaplanmayi azaltir ve beyin sagligini korur.' }
      : { en: 'Add fatty fish, walnuts, or flaxseeds for anti-inflammatory omega-3s.', tr: 'Anti-enflamatuar omega-3ler icin yagli balik, ceviz veya keten tohumu ekleyin.' },
  });

  // 15. Vitamin D Level (-2 to +2 years)
  const vitaminDImpact = calculateVitaminDImpact(input.vitaminDLevel);
  totalAdjustment += vitaminDImpact;
  agingFactors.push({
    name: 'vitaminD',
    impact: vitaminDImpact,
    score: Math.max(0, Math.min(100, 50 + vitaminDImpact * 25)),
    status: vitaminDImpact >= 2 ? 'excellent' : vitaminDImpact >= 0 ? 'good' : vitaminDImpact >= -1 ? 'fair' : 'poor',
    color: vitaminDImpact >= 2 ? '#10b981' : vitaminDImpact >= 0 ? '#84cc16' : vitaminDImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Sun',
    tip: vitaminDImpact >= 1
      ? { en: 'Optimal vitamin D supports bones, immunity, and longevity.', tr: 'Optimal D vitamini kemikleri, bagisiligi ve uzun omru destekler.' }
      : { en: 'Get 15-20 min sunlight daily or consider supplementation after blood test.', tr: 'Gunluk 15-20 dakika gunes isinigi alin veya kan testinden sonra takviye dusunun.' },
  });

  // 16. Meditation/Mindfulness (-1 to +2 years)
  const meditationImpact = calculateMeditationImpact(input.meditationPractice);
  totalAdjustment += meditationImpact;
  agingFactors.push({
    name: 'meditation',
    impact: meditationImpact,
    score: Math.max(0, Math.min(100, 50 + meditationImpact * 25)),
    status: meditationImpact >= 2 ? 'excellent' : meditationImpact >= 1 ? 'good' : meditationImpact >= 0 ? 'fair' : 'poor',
    color: meditationImpact >= 2 ? '#10b981' : meditationImpact >= 1 ? '#84cc16' : meditationImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Sparkles',
    tip: meditationImpact >= 1
      ? { en: 'Mindfulness practice protects telomeres and reduces biological aging.', tr: 'Farkindalik pratigi telomerleri korur ve biyolojik yaslanmayi azaltir.' }
      : { en: 'Even 10 minutes of daily meditation can measurably slow cellular aging.', tr: 'Gunluk 10 dakikalik meditasyon bile hucresel yaslanmayi olculebilir sekilde yavaslatabilir.' },
  });

  // 17. Social Connections (-3 to +3 years)
  const socialImpact = calculateSocialImpact(input.socialConnections);
  totalAdjustment += socialImpact;
  agingFactors.push({
    name: 'social',
    impact: socialImpact,
    score: Math.max(0, Math.min(100, 50 + socialImpact * 16.67)),
    status: socialImpact >= 2 ? 'excellent' : socialImpact >= 0 ? 'good' : socialImpact >= -1 ? 'fair' : 'poor',
    color: socialImpact >= 2 ? '#10b981' : socialImpact >= 0 ? '#84cc16' : socialImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Heart',
    tip: socialImpact >= 2
      ? { en: 'Strong social bonds are one of the strongest longevity predictors.', tr: 'Guclu sosyal baglar en guclu uzun omur belirleyicilerinden biridir.' }
      : { en: 'Social isolation ages as much as smoking. Invest in relationships.', tr: 'Sosyal izolasyon sigara kadar yaslandirir. Iliskilere yatirim yapin.' },
  });

  // 18. Purpose in Life (-2 to +3 years)
  const purposeImpact = calculatePurposeImpact(input.purposeInLife);
  totalAdjustment += purposeImpact;
  agingFactors.push({
    name: 'purpose',
    impact: purposeImpact,
    score: Math.max(0, Math.min(100, 40 + purposeImpact * 20)),
    status: purposeImpact >= 2 ? 'excellent' : purposeImpact >= 1 ? 'good' : purposeImpact >= 0 ? 'fair' : 'poor',
    color: purposeImpact >= 2 ? '#10b981' : purposeImpact >= 1 ? '#84cc16' : purposeImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Target',
    tip: purposeImpact >= 2
      ? { en: 'Having strong purpose adds years. Blue Zones research confirms this.', tr: 'Guclu amaca sahip olmak yillar ekler. Mavi Bolgeler arastirmasi bunu dogrular.' }
      : { en: 'Find your ikigai - reason for being. Purpose reduces mortality risk by 15%.', tr: 'Ikigai\'nizi bulun - var olma nedeniniz. Amac olum riskini %15 azaltir.' },
  });

  // 19. Screen Time (-2 to +1 years)
  const screenImpact = calculateScreenTimeImpact(input.screenTime);
  totalAdjustment += screenImpact;
  agingFactors.push({
    name: 'screenTime',
    impact: screenImpact,
    score: Math.max(0, Math.min(100, 60 + screenImpact * 20)),
    status: screenImpact >= 1 ? 'excellent' : screenImpact >= 0 ? 'good' : screenImpact >= -1 ? 'fair' : 'poor',
    color: screenImpact >= 1 ? '#10b981' : screenImpact >= 0 ? '#84cc16' : screenImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Monitor',
    tip: screenImpact >= 0
      ? { en: 'Good screen habits. Balance screen time with physical activities.', tr: 'Iyi ekran aliskanliklari. Ekran suresini fiziksel aktivitelerle dengeleyin.' }
      : { en: 'Excessive screen time harms sleep, posture, and mental health.', tr: 'Asiri ekran suresi uykuya, durusha ve ruh sagligina zarar verir.' },
  });

  // 20. Sunlight Exposure (-1 to +1 years)
  const sunlightImpact = calculateSunlightImpact(input.sunlightExposure);
  totalAdjustment += sunlightImpact;
  agingFactors.push({
    name: 'sunlight',
    impact: sunlightImpact,
    score: Math.max(0, Math.min(100, 60 + sunlightImpact * 20)),
    status: sunlightImpact >= 1 ? 'excellent' : sunlightImpact >= 0 ? 'good' : 'fair',
    color: sunlightImpact >= 1 ? '#10b981' : sunlightImpact >= 0 ? '#84cc16' : '#f59e0b',
    icon: 'Sunrise',
    tip: sunlightImpact >= 1
      ? { en: 'Adequate sunlight boosts vitamin D and regulates circadian rhythm.', tr: 'Yeterli gunes isigi D vitamini arttirir ve sirkadiyen ritmi duzenler.' }
      : { en: 'Get 15-20 minutes of morning sunlight for vitamin D and better sleep.', tr: 'D vitamini ve daha iyi uyku icin 15-20 dakika sabah gunesi alin.' },
  });

  // 21. Dental Health (-2 to +1 years)
  const dentalImpact = calculateDentalImpact(input.dentalHealth);
  totalAdjustment += dentalImpact;
  agingFactors.push({
    name: 'dental',
    impact: dentalImpact,
    score: Math.max(0, Math.min(100, 60 + dentalImpact * 20)),
    status: dentalImpact >= 1 ? 'excellent' : dentalImpact >= 0 ? 'good' : dentalImpact >= -1 ? 'fair' : 'poor',
    color: dentalImpact >= 1 ? '#10b981' : dentalImpact >= 0 ? '#84cc16' : dentalImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Smile',
    tip: dentalImpact >= 0
      ? { en: 'Good dental health prevents systemic inflammation.', tr: 'Iyi dis sagligi sistemik iltihaplanmayi onler.' }
      : { en: 'Poor dental health linked to heart disease. Brush 2x/day, floss daily.', tr: 'Kotu dis sagligi kalp hastaligina baglidir. Gunde 2 kez firca, gunluk dis ipi.' },
  });

  // 22. Mental Stimulation (-1 to +2 years)
  const mentalStimImpact = calculateMentalStimulationImpact(input.mentalStimulation);
  totalAdjustment += mentalStimImpact;
  agingFactors.push({
    name: 'mentalStimulation',
    impact: mentalStimImpact,
    score: Math.max(0, Math.min(100, 50 + mentalStimImpact * 25)),
    status: mentalStimImpact >= 2 ? 'excellent' : mentalStimImpact >= 1 ? 'good' : mentalStimImpact >= 0 ? 'fair' : 'poor',
    color: mentalStimImpact >= 2 ? '#10b981' : mentalStimImpact >= 1 ? '#84cc16' : mentalStimImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'BookOpen',
    tip: mentalStimImpact >= 1
      ? { en: 'Excellent cognitive engagement! Learning builds cognitive reserve.', tr: 'Mukemmel bilissel katilim! Ogrenme bilissel rezerv olusturur.' }
      : { en: 'Challenge your brain daily: reading, puzzles, learning new skills.', tr: 'Beyninizi gunluk zorlarin: okuma, bulmacalar, yeni beceriler ogrenme.' },
  });

  // 23. Work-Life Balance (-2 to +1 years)
  const workLifeImpact = calculateWorkLifeBalanceImpact(input.workLifeBalance);
  totalAdjustment += workLifeImpact;
  agingFactors.push({
    name: 'workLifeBalance',
    impact: workLifeImpact,
    score: Math.max(0, Math.min(100, 60 + workLifeImpact * 20)),
    status: workLifeImpact >= 1 ? 'excellent' : workLifeImpact >= 0 ? 'good' : workLifeImpact >= -1 ? 'fair' : 'poor',
    color: workLifeImpact >= 1 ? '#10b981' : workLifeImpact >= 0 ? '#84cc16' : workLifeImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'BalanceScale',
    tip: workLifeImpact >= 0
      ? { en: 'Good work-life balance supports sustained longevity.', tr: 'Iyi is-yasam dengesi surdurulebilir uzun omru destekler.' }
      : { en: 'Overwork leads to burnout and chronic disease. Set boundaries.', tr: 'Asiri calisma tukenmislige ve kronik hastaliga yol acar. Sinirlar koyun.' },
  });

  // 24. Caffeine Intake (-1 to +1 years)
  const caffeineImpact = calculateCaffeineImpact(input.caffeineIntake);
  totalAdjustment += caffeineImpact;
  agingFactors.push({
    name: 'caffeine',
    impact: caffeineImpact,
    score: Math.max(0, Math.min(100, 60 + caffeineImpact * 20)),
    status: caffeineImpact >= 1 ? 'excellent' : caffeineImpact >= 0 ? 'good' : 'fair',
    color: caffeineImpact >= 1 ? '#10b981' : caffeineImpact >= 0 ? '#84cc16' : '#f59e0b',
    icon: 'CupSoda',
    tip: caffeineImpact >= 0
      ? { en: 'Moderate coffee has antioxidant benefits linked to longevity.', tr: 'Olculu kahve uzun omurle baglantili antioksidan faydalara sahiptir.' }
      : { en: 'Too much caffeine disrupts sleep and raises cortisol. Limit to 2-3 cups.', tr: 'Cok fazla kafein uykuyu bozar ve kortizolu yukseltir. 2-3 fincanla sinirlandin.' },
  });

  // 25. Sugar Consumption (-3 to +1 years)
  const sugarImpact = calculateSugarImpact(input.sugarConsumption);
  totalAdjustment += sugarImpact;
  agingFactors.push({
    name: 'sugar',
    impact: sugarImpact,
    score: Math.max(0, Math.min(100, 60 + sugarImpact * 20)),
    status: sugarImpact >= 1 ? 'excellent' : sugarImpact >= 0 ? 'good' : sugarImpact >= -1 ? 'fair' : 'poor',
    color: sugarImpact >= 1 ? '#10b981' : sugarImpact >= 0 ? '#84cc16' : sugarImpact >= -1 ? '#f59e0b' : '#ef4444',
    icon: 'Candy',
    tip: sugarImpact >= 0
      ? { en: 'Low sugar intake reduces glycation and inflammation.', tr: 'Dusuk seker alimi glikasyonu ve iltihaplanmayi azaltir.' }
      : { en: 'Excess sugar accelerates aging through glycation. Aim for <25g added sugar/day.', tr: 'Asiri seker glikasyon yoluyla yaslanmayi hizlandirir. Gunluk <25g eklenmis seker hedefleyin.' },
  });

  // 26. Water Intake (-1 to +2 years)
  const waterImpact = calculateWaterImpact(input.waterIntake);
  totalAdjustment += waterImpact;
  agingFactors.push({
    name: 'water',
    impact: waterImpact,
    score: Math.max(0, Math.min(100, 50 + waterImpact * 25)),
    status: waterImpact >= 2 ? 'excellent' : waterImpact >= 1 ? 'good' : waterImpact >= 0 ? 'fair' : 'poor',
    color: waterImpact >= 2 ? '#10b981' : waterImpact >= 1 ? '#84cc16' : waterImpact >= 0 ? '#f59e0b' : '#ef4444',
    icon: 'Droplets',
    tip: waterImpact >= 1
      ? { en: 'Good hydration supports cellular function and detoxification.', tr: 'Iyi hidrasyon hucresel islevi ve detoksifikasyonu destekler.' }
      : { en: 'Drink 8+ glasses daily. Dehydration ages skin and organs faster.', tr: 'Gunluk 8+ bardak icin. Dehidratasyon cildi ve organlari daha hizli yaslandirir.' },
  });

  // Calculate biological age
  const biologicalAge = Math.max(18, Math.round(input.chronologicalAge - totalAdjustment));
  const ageDifference = input.chronologicalAge - biologicalAge;

  // Determine category
  const category = determineCategory(ageDifference);

  // Calculate health system ages
  const cardiovascularAge = calculateCardiovascularAge(input, biologicalAge, bmi);
  const metabolicAge = calculateMetabolicAge(input, biologicalAge, bmi);
  const skeletalAge = calculateSkeletalAge(input, biologicalAge);
  const cognitiveAge = calculateCognitiveAge(input, biologicalAge);

  // Calculate life expectancy
  const baseLifeExpectancy = input.gender === 'male' ? 76 : 81;
  const estimatedLifeExpectancy = Math.round(baseLifeExpectancy + totalAdjustment);
  const optimalLifeExpectancy = input.gender === 'male' ? 85 : 90;
  const potentialYearsGained = Math.max(0, optimalLifeExpectancy - estimatedLifeExpectancy);

  // Calculate percentile
  const percentile = calculatePercentile(ageDifference);

  // Generate action items
  const topActions = generateActionItems(input, agingFactors);

  // Identify positive and negative factors
  const positiveFactors = agingFactors.filter((f) => f.impact > 0).map((f) => f.name);
  const negativeFactors = agingFactors.filter((f) => f.impact < -1).map((f) => f.name);

  // Generate plans
  const dailyRoutine = generateDailyRoutine(input);
  const weeklyPlan = generateWeeklyPlan(input);
  const nutritionSuggestions = generateNutritionSuggestions(input);
  const exercisePlan = generateExercisePlan(input);
  const stressStrategies = generateStressStrategies(input);
  const sleepTips = generateSleepTips(input);
  const timelineProjections = generateTimelineProjections(ageDifference, negativeFactors.length);

  return {
    biologicalAge,
    chronologicalAge: input.chronologicalAge,
    ageDifference,
    percentile,
    category,
    categoryLabel: getCategoryLabel(category),
    interpretation: getInterpretation(category, ageDifference),
    agingFactors,
    cardiovascularAge,
    metabolicAge,
    skeletalAge,
    cognitiveAge,
    estimatedLifeExpectancy,
    optimalLifeExpectancy,
    potentialYearsGained,
    topActions,
    positiveFactors,
    negativeFactors,
    dailyRoutine,
    weeklyPlan,
    nutritionSuggestions,
    exercisePlan,
    stressStrategies,
    sleepTips,
    timelineProjections,
  };
}

// === IMPACT CALCULATION FUNCTIONS ===

function calculateSmokingImpact(status: string): number {
  switch (status) {
    case 'never': return 0;
    case 'former': return -2;
    case 'current': return -8;
    default: return 0;
  }
}

function calculateExerciseImpact(frequency: string): number {
  switch (frequency) {
    case 'very-active': return 5;
    case 'active': return 4;
    case 'moderate': return 2;
    case 'light': return 0;
    case 'sedentary': return -3;
    default: return 0;
  }
}

function calculateDietImpact(quality: string): number {
  switch (quality) {
    case 'excellent': return 4;
    case 'good': return 2;
    case 'fair': return -1;
    case 'poor': return -4;
    default: return 0;
  }
}

function calculateSleepImpact(quality: string): number {
  switch (quality) {
    case 'excellent': return 3;
    case 'good': return 1;
    case 'fair': return 0;
    case 'poor': return -3;
    default: return 0;
  }
}

function calculateStressImpact(level: string): number {
  switch (level) {
    case 'low': return 1;
    case 'moderate': return -1;
    case 'high': return -3;
    case 'very-high': return -4;
    default: return 0;
  }
}

function calculateAlcoholImpact(consumption: string): number {
  switch (consumption) {
    case 'none': return 0;
    case 'moderate': return 1;
    case 'heavy': return -3;
    default: return 0;
  }
}

function calculateBMIImpact(bmi: number): number {
  if (bmi >= 18.5 && bmi <= 24.9) return 2;
  if (bmi >= 25 && bmi <= 29.9) return -1;
  if (bmi >= 30 && bmi <= 34.9) return -3;
  if (bmi >= 35) return -5;
  if (bmi < 18.5) return -2;
  return 0;
}

function calculateFamilyImpact(longevity: string): number {
  switch (longevity) {
    case 'high': return 3;
    case 'average': return 0;
    case 'low': return -3;
    default: return 0;
  }
}

function calculateBloodPressureImpact(bp: string): number {
  switch (bp) {
    case 'normal': return 0;
    case 'elevated': return -2;
    case 'high': return -4;
    default: return 0;
  }
}

function calculateBreakfastImpact(habit: string): number {
  switch (habit) {
    case 'daily': return 1;
    case 'sometimes': return 0;
    case 'never': return -2;
    default: return 0;
  }
}

function calculateFruitVegetableImpact(servings: string): number {
  switch (servings) {
    case '6+': return 3;
    case '4-5': return 2;
    case '2-3': return 1;
    case '0-1': return -2;
    default: return 0;
  }
}

function calculateProcessedFoodImpact(frequency: string): number {
  switch (frequency) {
    case 'rarely': return 1;
    case 'monthly': return 0;
    case 'weekly': return -1;
    case 'daily': return -3;
    default: return 0;
  }
}

function calculateOmega3Impact(intake: string): number {
  switch (intake) {
    case 'daily-supplement': return 2;
    case 'regular': return 1;
    case 'occasional': return 0;
    case 'none': return -1;
    default: return 0;
  }
}

function calculateVitaminDImpact(level: string): number {
  switch (level) {
    case 'optimal': return 2;
    case 'normal': return 1;
    case 'low': return -1;
    case 'deficient': return -2;
    default: return 0;
  }
}

function calculateMeditationImpact(practice: string): number {
  switch (practice) {
    case 'daily': return 2;
    case 'weekly': return 1;
    case 'never': return 0;
    default: return 0;
  }
}

function calculateSocialImpact(connections: string): number {
  switch (connections) {
    case 'strong': return 3;
    case 'moderate': return 1;
    case 'few': return -1;
    case 'isolated': return -3;
    default: return 0;
  }
}

function calculatePurposeImpact(purpose: string): number {
  switch (purpose) {
    case 'strong': return 3;
    case 'clear': return 2;
    case 'vague': return 0;
    case 'none': return -2;
    default: return 0;
  }
}

function calculateScreenTimeImpact(time: string): number {
  switch (time) {
    case '0-2': return 1;
    case '2-4': return 0;
    case '4-6': return -0.5;
    case '6-8': return -1;
    case '8+': return -2;
    default: return 0;
  }
}

function calculateSunlightImpact(exposure: string): number {
  switch (exposure) {
    case 'adequate': return 1;
    case 'moderate': return 0;
    case 'minimal': return -1;
    default: return 0;
  }
}

function calculateDentalImpact(health: string): number {
  switch (health) {
    case 'excellent': return 1;
    case 'good': return 0;
    case 'fair': return -1;
    case 'poor': return -2;
    default: return 0;
  }
}

function calculateMentalStimulationImpact(level: string): number {
  switch (level) {
    case 'high': return 2;
    case 'moderate': return 1;
    case 'low': return -1;
    default: return 0;
  }
}

function calculateWorkLifeBalanceImpact(balance: string): number {
  switch (balance) {
    case 'excellent': return 1;
    case 'good': return 0;
    case 'fair': return -1;
    case 'poor': return -2;
    default: return 0;
  }
}

function calculateCaffeineImpact(intake: string): number {
  switch (intake) {
    case 'moderate': return 1;
    case 'none': return 0;
    case 'high': return -1;
    default: return 0;
  }
}

function calculateSugarImpact(consumption: string): number {
  switch (consumption) {
    case 'low': return 1;
    case 'moderate': return 0;
    case 'high': return -3;
    default: return 0;
  }
}

function calculateWaterImpact(intake: string): number {
  switch (intake) {
    case 'optimal': return 2;
    case 'adequate': return 1;
    case 'moderate': return 0;
    case 'low': return -1;
    default: return 0;
  }
}

// === HEALTH SYSTEM AGE CALCULATIONS ===

function calculateCardiovascularAge(input: BiologicalAgeInput, baseAge: number, bmi: number): number {
  let adjustment = 0;
  adjustment += calculateSmokingImpact(input.smokingStatus) * 0.8;
  adjustment += calculateExerciseImpact(input.exerciseFrequency) * 0.6;
  if (input.bloodPressure) {
    adjustment += calculateBloodPressureImpact(input.bloodPressure) * 0.8;
  }
  adjustment += calculateOmega3Impact(input.omega3Intake) * 0.5;
  adjustment += calculateSocialImpact(input.socialConnections) * 0.3;
  return Math.max(18, Math.round(baseAge - adjustment));
}

function calculateMetabolicAge(input: BiologicalAgeInput, baseAge: number, bmi: number): number {
  let adjustment = 0;
  adjustment += calculateDietImpact(input.dietQuality) * 0.8;
  adjustment += calculateExerciseImpact(input.exerciseFrequency) * 0.4;
  adjustment += calculateBMIImpact(bmi) * 0.8;
  adjustment += calculateSugarImpact(input.sugarConsumption) * 0.6;
  adjustment += calculateBreakfastImpact(input.breakfastHabit) * 0.4;
  adjustment += calculateProcessedFoodImpact(input.processedFoodFrequency) * 0.5;
  return Math.max(18, Math.round(baseAge - adjustment));
}

function calculateSkeletalAge(input: BiologicalAgeInput, baseAge: number): number {
  let adjustment = 0;
  adjustment += calculateExerciseImpact(input.exerciseFrequency) * 0.7;
  adjustment += calculateDietImpact(input.dietQuality) * 0.3;
  adjustment += calculateVitaminDImpact(input.vitaminDLevel) * 0.6;
  adjustment += calculateSunlightImpact(input.sunlightExposure) * 0.3;
  return Math.max(18, Math.round(baseAge - adjustment));
}

function calculateCognitiveAge(input: BiologicalAgeInput, baseAge: number): number {
  let adjustment = 0;
  adjustment += calculateSleepImpact(input.sleepQuality) * 0.8;
  adjustment += calculateStressImpact(input.stressLevel) * 0.6;
  adjustment += calculateExerciseImpact(input.exerciseFrequency) * 0.3;
  adjustment += calculateMeditationImpact(input.meditationPractice) * 0.5;
  adjustment += calculateMentalStimulationImpact(input.mentalStimulation) * 0.7;
  adjustment += calculateSocialImpact(input.socialConnections) * 0.4;
  adjustment += calculatePurposeImpact(input.purposeInLife) * 0.3;
  return Math.max(18, Math.round(baseAge - adjustment));
}

// === HELPER FUNCTIONS ===

function determineCategory(ageDifference: number): AgeCategory {
  if (ageDifference >= 10) return 'exceptional';
  if (ageDifference >= 5) return 'younger';
  if (ageDifference >= -4) return 'chronological';
  if (ageDifference >= -9) return 'older';
  return 'accelerated';
}

function getCategoryLabel(category: AgeCategory): { en: string; tr: string } {
  const labels: Record<AgeCategory, { en: string; tr: string }> = {
    exceptional: { en: 'Exceptional', tr: 'Istisnai' },
    younger: { en: 'Biologically Younger', tr: 'Biyolojik Olarak Genc' },
    chronological: { en: 'Age-Appropriate', tr: 'Yasa Uygun' },
    older: { en: 'Biologically Older', tr: 'Biyolojik Olarak Yasli' },
    accelerated: { en: 'Accelerated Aging', tr: 'Hizlanmis Yaslanma' },
  };
  return labels[category];
}

function getInterpretation(category: AgeCategory, diff: number): { en: string; tr: string } {
  const absDiff = Math.abs(diff);
  if (category === 'exceptional') {
    return {
      en: `Outstanding! Your biological age is ${absDiff} years younger than your chronological age. You are in the top 5% for aging trajectory.`,
      tr: `Mukemmel! Biyolojik yasiniz kronolojik yasinizdan ${absDiff} yil genc. Yaslanma yörüngesi icin en iyi %5'tesiniz.`,
    };
  }
  if (category === 'younger') {
    return {
      en: `Great work! Your biological age is ${absDiff} years younger. You are aging slower than most people your age.`,
      tr: `Harika is! Biyolojik yasiniz ${absDiff} yil daha genc. Yasitlarinizin cogundan daha yavas yaslaniyorsunuz.`,
    };
  }
  if (category === 'chronological') {
    return {
      en: `Your biological age is close to your chronological age. There is significant room for improvement through lifestyle changes.`,
      tr: `Biyolojik yasiniz kronolojik yasiniza yakin. Yasam tarzi degisiklikleriyle onemli ölcüde iyilestirme alani var.`,
    };
  }
  if (category === 'older') {
    return {
      en: `Your biological age is ${absDiff} years older. This indicates accelerated aging that can be reversed with targeted lifestyle changes.`,
      tr: `Biyolojik yasiniz ${absDiff} yil daha yasli. Bu, hedefli yasam tarzi degisiklikleriyle tersine cevrilebilecek hizlanmis yaslanmayi gösterir.`,
    };
  }
  return {
    en: `Your biological age is ${absDiff} years older, indicating significant aging acceleration. Comprehensive lifestyle changes are strongly recommended.`,
    tr: `Biyolojik yasiniz ${absDiff} yil daha yasli, önemli yaslanma hizlanmasini gösteriyor. Kapsamli yasam tarzi degisiklikleri siddetle tavsiye edilir.`,
  };
}

function calculatePercentile(ageDifference: number): number {
  if (ageDifference >= 10) return 95;
  if (ageDifference >= 5) return 80;
  if (ageDifference >= 0) return 60;
  if (ageDifference >= -5) return 40;
  if (ageDifference >= -10) return 20;
  return 10;
}

function generateActionItems(input: BiologicalAgeInput, factors: AgingFactor[]): ActionItem[] {
  const actions: ActionItem[] = [];

  if (input.smokingStatus === 'current') {
    actions.push({
      title: { en: 'Quit Smoking', tr: 'Sigarayi Birakin' },
      description: {
        en: 'Smoking is the single most impactful factor. Quitting could add 8+ years to your biological age.',
        tr: 'Sigara en etkili tek faktördür. Birakmak biyolojik yasiniza 8+ yil ekleyebilir.',
      },
      impact: 'high', difficulty: 'challenging', category: 'lifestyle', priority: 1,
    });
  }

  if (input.exerciseFrequency === 'sedentary' || input.exerciseFrequency === 'light') {
    actions.push({
      title: { en: 'Start Regular Exercise', tr: 'Düzenli Egzersize Baslayin' },
      description: {
        en: 'Aim for 150 minutes of moderate exercise per week. Start with walking 30 minutes daily.',
        tr: 'Haftada 150 dakika orta düzeyde egzersiz hedefleyin. Günlük 30 dakika yürüyüsle baslayin.',
      },
      impact: 'high', difficulty: 'moderate', category: 'fitness', priority: 2,
    });
  }

  if (input.dietQuality === 'poor' || input.dietQuality === 'fair') {
    actions.push({
      title: { en: 'Improve Diet Quality', tr: 'Diyet Kalitesini Iyilestirin' },
      description: {
        en: 'Focus on whole foods, fruits, vegetables, and lean proteins. Reduce processed foods.',
        tr: 'Dogal gidalar, meyveler, sebzeler ve yagsiz proteinlere odaklanin. Islenmis gidalari azaltin.',
      },
      impact: 'high', difficulty: 'moderate', category: 'nutrition', priority: 3,
    });
  }

  if (input.sleepQuality === 'poor' || input.sleepQuality === 'fair') {
    actions.push({
      title: { en: 'Optimize Sleep Quality', tr: 'Uyku Kalitesini Optimize Edin' },
      description: {
        en: 'Aim for 7-9 hours of quality sleep. Establish a consistent bedtime routine.',
        tr: '7-9 saat kaliteli uyku hedefleyin. Tutarli bir yatma rutini olusturun.',
      },
      impact: 'medium', difficulty: 'easy', category: 'lifestyle', priority: 4,
    });
  }

  if (input.stressLevel === 'high' || input.stressLevel === 'very-high') {
    actions.push({
      title: { en: 'Manage Stress Levels', tr: 'Stres Seviyelerini Yönetin' },
      description: {
        en: 'Practice mindfulness, meditation, or yoga. Consider professional help if needed.',
        tr: 'Farkindalik, meditasyon veya yoga pratiği yapin. Gerekirse profesyonel yardim düsünün.',
      },
      impact: 'medium', difficulty: 'moderate', category: 'mental-health', priority: 5,
    });
  }

  if (input.alcoholConsumption === 'heavy') {
    actions.push({
      title: { en: 'Reduce Alcohol Intake', tr: 'Alkol Alimini Azaltin' },
      description: {
        en: 'Limit to moderate consumption or consider abstaining entirely.',
        tr: 'Ilimli tüketime sinirlayin veya tamamen kacinmayi düsünün.',
      },
      impact: 'medium', difficulty: 'moderate', category: 'lifestyle', priority: 6,
    });
  }

  if (input.socialConnections === 'isolated' || input.socialConnections === 'few') {
    actions.push({
      title: { en: 'Strengthen Social Connections', tr: 'Sosyal Baglantilari Güclendirin' },
      description: {
        en: 'Social isolation is as harmful as smoking. Join groups, volunteer, or reconnect with friends.',
        tr: 'Sosyal izolasyon sigara kadar zararlidir. Gruplara katilin, gönüllü olun veya arkadaslarinizla yeniden baglanin.',
      },
      impact: 'high', difficulty: 'moderate', category: 'social', priority: 7,
    });
  }

  if (input.sugarConsumption === 'high') {
    actions.push({
      title: { en: 'Reduce Sugar Intake', tr: 'Seker Alimini Azaltin' },
      description: {
        en: 'High sugar accelerates glycation and aging. Aim for less than 25g added sugar per day.',
        tr: 'Yüksek seker glikasyonu ve yaslanmayi hizlandirir. Günlük 25g\'dan az eklenmis seker hedefleyin.',
      },
      impact: 'medium', difficulty: 'moderate', category: 'nutrition', priority: 8,
    });
  }

  if (input.waterIntake === 'low') {
    actions.push({
      title: { en: 'Increase Water Intake', tr: 'Su Alimini Artirin' },
      description: {
        en: 'Drink at least 8 glasses of water daily for optimal cellular function.',
        tr: 'Optimal hücresel islev icin günlük en az 8 bardak su icin.',
      },
      impact: 'low', difficulty: 'easy', category: 'nutrition', priority: 9,
    });
  }

  if (input.meditationPractice === 'never') {
    actions.push({
      title: { en: 'Start Mindfulness Practice', tr: 'Farkindalik Pratigine Baslayin' },
      description: {
        en: 'Even 10 minutes daily reduces cortisol and protects telomeres.',
        tr: 'Günlük 10 dakika bile kortizolü azaltir ve telomerleri korur.',
      },
      impact: 'medium', difficulty: 'easy', category: 'mental-health', priority: 10,
    });
  }

  return actions.sort((a, b) => a.priority - b.priority).slice(0, 5);
}

// === PLAN GENERATION FUNCTIONS ===

function generateDailyRoutine(input: BiologicalAgeInput): DailyRoutineItem[] {
  return [
    {
      time: '06:30',
      activity: { en: 'Wake up, hydrate with lemon water', tr: 'Uyanin, limonlu su ile hidratlatin' },
      icon: 'Sunrise',
      benefit: { en: 'Kickstarts metabolism, rehydrates body', tr: 'Metabolizmayi baslatir, vücudu hidratlar' },
    },
    {
      time: '07:00',
      activity: { en: '10 min morning sunlight + stretching', tr: '10 dk sabah günesi + esneme' },
      icon: 'Sun',
      benefit: { en: 'Resets circadian rhythm, vitamin D boost', tr: 'Sirkadiyen ritmi sifirlar, D vitamini artisi' },
    },
    {
      time: '07:30',
      activity: { en: 'Nutritious breakfast with protein', tr: 'Proteinli besleyici kahvalti' },
      icon: 'Coffee',
      benefit: { en: 'Stable blood sugar, sustained energy', tr: 'Kararli kan sekeri, sürdürülen enerji' },
    },
    {
      time: '08:30',
      activity: { en: '30-45 min exercise session', tr: '30-45 dk egzersiz seansi' },
      icon: 'Dumbbell',
      benefit: { en: 'Cardiovascular health, mood boost', tr: 'Kardiyovasküler saglik, ruh hali artisi' },
    },
    {
      time: '12:00',
      activity: { en: 'Balanced lunch with vegetables', tr: 'Sebzeli dengeli ögle yemegi' },
      icon: 'Salad',
      benefit: { en: 'Anti-inflammatory nutrients, sustained energy', tr: 'Anti-enflamatuar besinler, sürdürülen enerji' },
    },
    {
      time: '15:00',
      activity: { en: 'Healthy snack + short walk', tr: 'Saglikli atistirmalik + kisa yürüyüs' },
      icon: 'Apple',
      benefit: { en: 'Blood sugar balance, movement break', tr: 'Kan sekeri dengesi, hareket molasi' },
    },
    {
      time: '18:00',
      activity: { en: 'Social activity or hobby time', tr: 'Sosyal aktivite veya hobi zamani' },
      icon: 'Heart',
      benefit: { en: 'Social bonds boost longevity', tr: 'Sosyal baglar uzun ömrü arttirir' },
    },
    {
      time: '19:00',
      activity: { en: 'Light dinner, Mediterranean style', tr: 'Hafif aksam yemegi, Akdeniz tarzi' },
      icon: 'Utensils',
      benefit: { en: 'Easy digestion, anti-aging nutrients', tr: 'Kolay sindirim, anti-aging besinler' },
    },
    {
      time: '21:00',
      activity: { en: '10 min meditation + gratitude journal', tr: '10 dk meditasyon + süran güncesi' },
      icon: 'Sparkles',
      benefit: { en: 'Stress reduction, mental clarity', tr: 'Stres azaltma, zihinsel berraklik' },
    },
    {
      time: '22:00',
      activity: { en: 'Screen-free wind-down, sleep by 22:30', tr: 'Ekransiz rahatlama, 22:30\'da uyku' },
      icon: 'Moon',
      benefit: { en: '7-9 hours for cellular repair', tr: 'Hücresel onarim icin 7-9 saat' },
    },
  ];
}

function generateWeeklyPlan(input: BiologicalAgeInput): WeeklyPlanDay[] {
  return [
    {
      day: { en: 'Monday', tr: 'Pazartesi' },
      focus: { en: 'Strength Training', tr: 'Güc Antrenmanı' },
      activities: [
        { en: 'Full body resistance training 45 min', tr: 'Tam vücut direnç antrenmanı 45 dk' },
        { en: 'Prepare healthy meal prep', tr: 'Sağlıklı yemek hazırlığı yapın' },
      ],
    },
    {
      day: { en: 'Tuesday', tr: 'Salı' },
      focus: { en: 'Cardio & Flexibility', tr: 'Kardiyo ve Esneklik' },
      activities: [
        { en: '30 min brisk walking or cycling', tr: '30 dk hızlı yürüyüs veya bisiklet' },
        { en: '20 min yoga or stretching', tr: '20 dk yoga veya esneme' },
      ],
    },
    {
      day: { en: 'Wednesday', tr: 'Carsamba' },
      focus: { en: 'Brain Training', tr: 'Beyin Eğitimi' },
      activities: [
        { en: 'Learn something new (language, instrument)', tr: 'Yeni bir sey öğrenin (dil, enstrüman)' },
        { en: 'Social connection (call/visit friends)', tr: 'Sosyal bağlantı (arkadaşları arayın/ziyaret edin)' },
      ],
    },
    {
      day: { en: 'Thursday', tr: 'Persembe' },
      focus: { en: 'High-Intensity Training', tr: 'Yüksek Yoğunluklu Antrenman' },
      activities: [
        { en: 'HIIT or interval training 30 min', tr: 'HIIT veya interval antrenman 30 dk' },
        { en: 'Cold shower (30 sec) for hormesis', tr: 'Hormezis icin soğuk duş (30 sn)' },
      ],
    },
    {
      day: { en: 'Friday', tr: 'Cuma' },
      focus: { en: 'Mindfulness & Recovery', tr: 'Farkındalık ve İyileşme' },
      activities: [
        { en: '30 min nature walk (forest bathing)', tr: '30 dk doğa yürüyüşü (orman banyosu)' },
        { en: 'Extended meditation 20 min', tr: 'Uzatılmış meditasyon 20 dk' },
      ],
    },
    {
      day: { en: 'Saturday', tr: 'Cumartesi' },
      focus: { en: 'Active Fun', tr: 'Aktif Eğlence' },
      activities: [
        { en: 'Sports, hiking, swimming, or dancing', tr: 'Spor, yürüyüş, yüzme veya dans' },
        { en: 'Cook a new healthy recipe', tr: 'Yeni sağlıklı bir tarif pişirin' },
      ],
    },
    {
      day: { en: 'Sunday', tr: 'Pazar' },
      focus: { en: 'Rest & Reflect', tr: 'Dinlenme ve Düşünme' },
      activities: [
        { en: 'Light walk + gentle yoga', tr: 'Hafif yürüyüs + nazik yoga' },
        { en: 'Weekly review and goal setting', tr: 'Haftalık değerlendirme ve hedef belirleme' },
      ],
    },
  ];
}

function generateNutritionSuggestions(input: BiologicalAgeInput): NutritionSuggestion[] {
  return [
    {
      category: { en: 'Anti-Aging Superfoods', tr: 'Anti-Aging Süper Gıdalar' },
      foods: [
        { en: 'Blueberries, dark chocolate, green tea', tr: 'Yaban mersini, bitter çikolata, yeşil çay' },
        { en: 'Turmeric, olive oil, walnuts', tr: 'Zerdeçal, zeytinyağı, ceviz' },
      ],
      benefit: { en: 'Rich in antioxidants that fight free radical damage', tr: 'Serbest radikal hasarıyla savaşan antioksidanlar açısından zengin' },
      icon: 'Sparkles',
    },
    {
      category: { en: 'Omega-3 Rich Foods', tr: 'Omega-3 Zengin Gıdalar' },
      foods: [
        { en: 'Salmon, sardines, mackerel', tr: 'Somon, sardalya, uskumru' },
        { en: 'Flaxseeds, chia seeds, hemp seeds', tr: 'Keten tohumu, chia tohumu, kenevir tohumu' },
      ],
      benefit: { en: 'Reduces inflammation, protects brain and heart', tr: 'İltihaplamayı azaltır, beyin ve kalbi korur' },
      icon: 'Fish',
    },
    {
      category: { en: 'Gut Health Foods', tr: 'Bağırsak Sağlığı Gıdaları' },
      foods: [
        { en: 'Yogurt, kefir, sauerkraut, kimchi', tr: 'Yoğurt, kefir, lahana turşusu, kimchi' },
        { en: 'Garlic, onions, asparagus (prebiotics)', tr: 'Sarımsak, soğan, kuşkonmaz (prebiyotikler)' },
      ],
      benefit: { en: 'Healthy gut microbiome linked to slower aging', tr: 'Sağlıklı bağırsak mikrobiyomu daha yavaş yaşlanmayla bağlantılı' },
      icon: 'Heart',
    },
    {
      category: { en: 'Foods to Minimize', tr: 'Azaltılması Gereken Gıdalar' },
      foods: [
        { en: 'Refined sugar, white flour, trans fats', tr: 'Rafine şeker, beyaz un, trans yağlar' },
        { en: 'Processed meats, sugary drinks, deep-fried foods', tr: 'İşlenmiş etler, şekerli içecekler, kızartılmış gıdalar' },
      ],
      benefit: { en: 'These accelerate glycation and chronic inflammation', tr: 'Bunlar glikasyonu ve kronik iltihaplanmayı hızlandırır' },
      icon: 'Ban',
    },
  ];
}

function generateExercisePlan(input: BiologicalAgeInput): ExercisePlanItem[] {
  return [
    {
      type: { en: 'Aerobic/Cardio', tr: 'Aerobik/Kardiyo' },
      frequency: { en: '3-5 times/week', tr: 'Haftada 3-5 kez' },
      duration: { en: '30-45 minutes', tr: '30-45 dakika' },
      benefit: { en: 'Improves heart health, reduces cardiovascular age by 3-5 years', tr: 'Kalp sağlığını iyileştirir, kardiyovasküler yaşı 3-5 yıl azaltır' },
      icon: 'Heart',
    },
    {
      type: { en: 'Strength Training', tr: 'Güç Antrenmanı' },
      frequency: { en: '2-3 times/week', tr: 'Haftada 2-3 kez' },
      duration: { en: '30-45 minutes', tr: '30-45 dakika' },
      benefit: { en: 'Preserves muscle mass and bone density, key for longevity', tr: 'Kas kütlesini ve kemik yoğunluğunu korur, uzun ömür için anahtar' },
      icon: 'Dumbbell',
    },
    {
      type: { en: 'Flexibility/Yoga', tr: 'Esneklik/Yoga' },
      frequency: { en: '2-3 times/week', tr: 'Haftada 2-3 kez' },
      duration: { en: '20-30 minutes', tr: '20-30 dakika' },
      benefit: { en: 'Reduces stress, improves mobility and joint health', tr: 'Stresi azaltır, hareketliliği ve eklem sağlığını iyileştirir' },
      icon: 'Sparkles',
    },
    {
      type: { en: 'Balance Training', tr: 'Denge Antrenmanı' },
      frequency: { en: '2 times/week', tr: 'Haftada 2 kez' },
      duration: { en: '10-15 minutes', tr: '10-15 dakika' },
      benefit: { en: 'Prevents falls and maintains coordination as you age', tr: 'Yaşlandıkça düşmeleri önler ve koordinasyonu korur' },
      icon: 'Activity',
    },
  ];
}

function generateStressStrategies(input: BiologicalAgeInput): StressStrategy[] {
  return [
    {
      name: { en: 'Box Breathing', tr: 'Kutu Nefesi' },
      description: { en: 'Inhale 4s, hold 4s, exhale 4s, hold 4s. Repeat 4 times.', tr: '4 sn nefes al, 4 sn tut, 4 sn nefes ver, 4 sn tut. 4 kez tekrar.' },
      duration: { en: '3 minutes', tr: '3 dakika' },
      icon: 'Wind',
    },
    {
      name: { en: 'Body Scan Meditation', tr: 'Vücut Tarama Meditasyonu' },
      description: { en: 'Systematically relax each body part from toes to head.', tr: 'Ayak parmaklarından başa kadar her vücut bölgesini sistematik olarak gevşetin.' },
      duration: { en: '10 minutes', tr: '10 dakika' },
      icon: 'Sparkles',
    },
    {
      name: { en: 'Gratitude Journaling', tr: 'Minnettarlık Günlüğü' },
      description: { en: 'Write 3 things you are grateful for each evening.', tr: 'Her akşam minnettar olduğunuz 3 şeyi yazın.' },
      duration: { en: '5 minutes', tr: '5 dakika' },
      icon: 'BookOpen',
    },
    {
      name: { en: 'Nature Immersion', tr: 'Doğa İmmersyonu' },
      description: { en: 'Spend 20+ minutes in green space. Forest bathing (shinrin-yoku) reduces cortisol.', tr: 'Yeşil alanda 20+ dakika geçirin. Orman banyosu (shinrin-yoku) kortizolü azaltır.' },
      duration: { en: '20-30 minutes', tr: '20-30 dakika' },
      icon: 'TreePine',
    },
    {
      name: { en: 'Progressive Muscle Relaxation', tr: 'Kademeli Kas Gevşetme' },
      description: { en: 'Tense then release each muscle group for deep physical relaxation.', tr: 'Derin fiziksel gevşeme için her kas grubunu gerin sonra bırakın.' },
      duration: { en: '15 minutes', tr: '15 dakika' },
      icon: 'Activity',
    },
  ];
}

function generateSleepTips(input: BiologicalAgeInput): SleepTip[] {
  return [
    {
      title: { en: 'Consistent Sleep Schedule', tr: 'Tutarlı Uyku Programı' },
      description: { en: 'Go to bed and wake at the same time every day, even weekends.', tr: 'Her gün, hafta sonları dahil, aynı saatte yatın ve kalkın.' },
      icon: 'Clock',
    },
    {
      title: { en: 'Dark & Cool Room', tr: 'Karanlık ve Serin Oda' },
      description: { en: 'Temperature 65-68F (18-20C). Use blackout curtains. No blue light.', tr: 'Sıcaklık 18-20C. Karartma perdeleri kullanın. Mavi ışık yok.' },
      icon: 'Moon',
    },
    {
      title: { en: 'No Screens Before Bed', tr: 'Yatmadan Önce Ekran Yok' },
      description: { en: 'Stop screens 60-90 minutes before sleep. Read a book instead.', tr: 'Uykudan 60-90 dakika önce ekranları bırakın. Bunun yerine kitap okuyun.' },
      icon: 'MonitorOff',
    },
    {
      title: { en: 'Limit Caffeine After 2 PM', tr: 'Öğleden Sonra 2\'den Sonra Kafein Sınırlayın' },
      description: { en: 'Caffeine has a 6-hour half-life. Switch to herbal tea in afternoons.', tr: 'Kafeinin yarı ömrü 6 saattir. Öğleden sonra bitkisel çaya geçin.' },
      icon: 'Coffee',
    },
    {
      title: { en: 'Relaxation Ritual', tr: 'Rahatlama Ritüeli' },
      description: { en: 'Warm bath, gentle stretching, or reading 30 min before bed.', tr: 'Yatmadan 30 dk önce sıcak banyo, hafif esneme veya okuma.' },
      icon: 'Sparkles',
    },
  ];
}

function generateTimelineProjections(ageDifference: number, negativeCount: number): TimelineProjection[] {
  const potential = negativeCount * 1.5;
  return [
    {
      months: 3,
      label: { en: '3 Months', tr: '3 Ay' },
      potentialReduction: { en: `${Math.round(potential * 0.2)} years younger`, tr: `${Math.round(potential * 0.2)} yıl daha genç` },
      description: {
        en: 'Sleep and stress improvements show first measurable results.',
        tr: 'Uyku ve stres iyileştirmeleri ilk ölçülebilir sonuçları gösterir.',
      },
    },
    {
      months: 6,
      label: { en: '6 Months', tr: '6 Ay' },
      potentialReduction: { en: `${Math.round(potential * 0.4)} years younger`, tr: `${Math.round(potential * 0.4)} yıl daha genç` },
      description: {
        en: 'Diet and exercise changes begin reversing metabolic aging.',
        tr: 'Diyet ve egzersiz değişiklikleri metabolik yaşlanmayı tersine çevirmeye başlar.',
      },
    },
    {
      months: 12,
      label: { en: '1 Year', tr: '1 Yıl' },
      potentialReduction: { en: `${Math.round(potential * 0.7)} years younger`, tr: `${Math.round(potential * 0.7)} yıl daha genç` },
      description: {
        en: 'Significant cardiovascular improvements. Smoking cessation shows major impact.',
        tr: 'Önemli kardiyovasküler iyileşmeler. Sigara bırakma büyük etki gösterir.',
      },
    },
    {
      months: 24,
      label: { en: '2 Years', tr: '2 Yıl' },
      potentialReduction: { en: `${Math.round(potential)} years younger`, tr: `${Math.round(potential)} yıl daha genç` },
      description: {
        en: 'Full lifestyle transformation. Maximum biological age reversal achieved.',
        tr: 'Tam yaşam tarzı dönüşümü. Maksimum biyolojik yaş tersine çevirme sağlandı.',
      },
    },
  ];
}
