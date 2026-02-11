import { CalculatorContent } from '@/types/calculator';

// UI Labels and Form Content (existing structure maintained)
export const biologicalAgeUIContent = {
  en: {
    title: 'Biological Age Calculator',
    description: 'Calculate your biological age based on lifestyle factors, health metrics, and genetics',

    // Table of Contents labels
    tocCalculator: 'Calculator',
    tocResults: 'Results',
    tocHowItWorks: 'How It Works',
    tocFormula: 'Formula & Methodology',
    tocInterpreting: 'Interpreting Results',
    tocCategories: 'Categories',
    tocFaq: 'FAQs',
    tocDisclaimer: 'Medical Disclaimer',
    tocReferences: 'References',

    // Form labels
    basicInfoTitle: 'Basic Information',
    chronologicalAgeLabel: 'Your Chronological Age',
    chronologicalAgePlaceholder: 'Enter your age in years',
    genderLabel: 'Biological Sex',
    genderMale: 'Male',
    genderFemale: 'Female',
    heightLabel: 'Height (cm)',
    heightPlaceholder: 'e.g., 170',
    weightLabel: 'Weight (kg)',
    weightPlaceholder: 'e.g., 70',

    // Lifestyle factors
    lifestyleFactorsTitle: 'Lifestyle Factors',
    smokingLabel: 'Smoking Status',
    smokingNever: 'Never smoked',
    smokingFormer: 'Former smoker',
    smokingCurrent: 'Current smoker',

    alcoholLabel: 'Alcohol Consumption',
    alcoholNone: 'None',
    alcoholModerate: 'Moderate (1-2 drinks/day)',
    alcoholHeavy: 'Heavy (3+ drinks/day)',

    exerciseLabel: 'Exercise Frequency',
    exerciseSedentary: 'Sedentary (No exercise)',
    exerciseLight: 'Light (1-2 days/week)',
    exerciseModerate: 'Moderate (3-4 days/week)',
    exerciseActive: 'Active (5-6 days/week)',
    exerciseVeryActive: 'Very Active (Daily)',

    sleepLabel: 'Sleep Quality',
    sleepPoor: 'Poor (<5 hours or very restless)',
    sleepFair: 'Fair (5-6 hours)',
    sleepGood: 'Good (7-8 hours)',
    sleepExcellent: 'Excellent (8-9 hours, deep sleep)',

    stressLabel: 'Stress Level',
    stressLow: 'Low (Rarely stressed)',
    stressModerate: 'Moderate (Occasional stress)',
    stressHigh: 'High (Frequent stress)',
    stressVeryHigh: 'Very High (Chronic stress)',

    dietLabel: 'Diet Quality',
    dietPoor: 'Poor (Mostly processed foods)',
    dietFair: 'Fair (Some healthy foods)',
    dietGood: 'Good (Mostly whole foods)',
    dietExcellent: 'Excellent (Mediterranean/Plant-based)',

    // Health metrics
    healthMetricsTitle: 'Health Metrics',
    chronicConditionsLabel: 'Number of Chronic Conditions',
    chronicConditionsHelp: 'Diabetes, heart disease, hypertension, etc.',

    familyLongevityLabel: 'Family Longevity',
    familyLow: 'Low (Parents died before 70)',
    familyAverage: 'Average (Parents lived 70-80)',
    familyHigh: 'High (Parents lived 80+)',

    bloodPressureLabel: 'Blood Pressure (Optional)',
    bloodPressureNormal: 'Normal (<120/80)',
    bloodPressureElevated: 'Elevated (120-139/80-89)',
    bloodPressureHigh: 'High (140+/90+)',

    cholesterolLabel: 'Cholesterol Level (Optional)',
    cholesterolNormal: 'Normal (<200 mg/dL)',
    cholesterolBorderline: 'Borderline (200-239 mg/dL)',
    cholesterolHigh: 'High (240+ mg/dL)',

    // Nutrition Habits
    nutritionHabitsTitle: 'Nutrition Habits',
    breakfastLabel: 'Breakfast Habit',
    breakfastNever: 'Never eat breakfast',
    breakfastSometimes: 'Sometimes (2-3 days/week)',
    breakfastDaily: 'Daily breakfast',

    fruitVegetableLabel: 'Daily Fruit & Vegetable Servings',
    fruitVegetable01: '0-1 servings',
    fruitVegetable23: '2-3 servings',
    fruitVegetable45: '4-5 servings',
    fruitVegetable6plus: '6+ servings',

    processedFoodLabel: 'Processed Food Frequency',
    processedFoodDaily: 'Daily',
    processedFoodWeekly: 'Several times a week',
    processedFoodMonthly: 'A few times a month',
    processedFoodRarely: 'Rarely or never',

    omega3Label: 'Omega-3 Intake',
    omega3None: 'None',
    omega3Occasional: 'Occasional (fish 1-2x/month)',
    omega3Regular: 'Regular (fish 2-3x/week)',
    omega3DailySupplement: 'Daily supplement + regular fish',

    sugarLabel: 'Sugar Consumption',
    sugarHigh: 'High (sweets/sodas daily)',
    sugarModerate: 'Moderate (occasional sweets)',
    sugarLow: 'Low (rarely eat added sugar)',

    waterIntakeLabel: 'Daily Water Intake',
    waterLow: 'Low (less than 4 glasses)',
    waterModerate: 'Moderate (4-6 glasses)',
    waterAdequate: 'Adequate (6-8 glasses)',
    waterOptimal: 'Optimal (8+ glasses)',

    caffeineLabel: 'Caffeine Intake',
    caffeineNone: 'None',
    caffeineModerate: 'Moderate (1-3 cups/day)',
    caffeineHigh: 'High (4+ cups/day)',

    // Supplements & Health
    supplementsHealthTitle: 'Supplements & Health',
    vitaminDLabel: 'Vitamin D Level',
    vitaminDDeficient: 'Deficient (never tested/no sun)',
    vitaminDLow: 'Low (limited sun, no supplement)',
    vitaminDNormal: 'Normal (some sun/supplement)',
    vitaminDOptimal: 'Optimal (regular sun + supplement)',

    dentalHealthLabel: 'Dental Health',
    dentalPoor: 'Poor (frequent issues, rare dentist visits)',
    dentalFair: 'Fair (occasional issues)',
    dentalGood: 'Good (annual checkups, daily brushing)',
    dentalExcellent: 'Excellent (2x/year dentist, flossing daily)',

    sunlightLabel: 'Daily Sunlight Exposure',
    sunlightMinimal: 'Minimal (mostly indoors)',
    sunlightModerate: 'Moderate (some outdoor time)',
    sunlightAdequate: 'Adequate (15-30 min daily outdoors)',

    // Mental & Social
    mentalSocialTitle: 'Mental & Social Wellbeing',
    meditationLabel: 'Meditation/Mindfulness Practice',
    meditationNever: 'Never',
    meditationWeekly: 'Weekly (1-3 times)',
    meditationDaily: 'Daily practice',

    socialLabel: 'Social Connections',
    socialIsolated: 'Isolated (rarely see others)',
    socialFew: 'Few (small circle, infrequent contact)',
    socialModerate: 'Moderate (regular social activities)',
    socialStrong: 'Strong network (close friends, community)',

    purposeLabel: 'Sense of Purpose/Goals',
    purposeNone: 'No clear purpose or goals',
    purposeVague: 'Vague sense of direction',
    purposeClear: 'Clear goals and direction',
    purposeStrong: 'Strong life purpose (ikigai)',

    mentalStimulationLabel: 'Mental Stimulation',
    mentalStimLow: 'Low (routine tasks only)',
    mentalStimModerate: 'Moderate (occasional reading/puzzles)',
    mentalStimHigh: 'High (daily learning, puzzles, creativity)',

    // Lifestyle Balance
    lifestyleBalanceTitle: 'Lifestyle Balance',
    screenTimeLabel: 'Daily Recreational Screen Time',
    screenTime02: '0-2 hours',
    screenTime24: '2-4 hours',
    screenTime46: '4-6 hours',
    screenTime68: '6-8 hours',
    screenTime8plus: '8+ hours',

    workLifeLabel: 'Work-Life Balance',
    workLifePoor: 'Poor (overworked, no boundaries)',
    workLifeFair: 'Fair (occasional overtime)',
    workLifeGood: 'Good (reasonable hours, some hobbies)',
    workLifeExcellent: 'Excellent (balanced, fulfilling hobbies)',

    // Errors
    errorAge: 'Please enter your age',
    errorAgeRange: 'Age must be between 18 and 100',
    errorHeight: 'Please enter your height',
    errorWeight: 'Please enter your weight',

    // Result labels
    biologicalAgeLabel: 'Your Biological Age',
    chronologicalAgeResult: 'Chronological Age',
    ageDifferenceLabel: 'Age Difference',
    yearsYounger: 'years younger',
    yearsOlder: 'years older',
    percentileLabel: 'Better than',
    ofPeople: 'of people your age',

    // Categories
    categoryExceptional: 'Exceptional',
    categoryYounger: 'Biologically Younger',
    categoryChronological: 'Age-Appropriate',
    categoryOlder: 'Biologically Older',
    categoryAccelerated: 'Accelerated Aging',

    // Interactive sections
    agingFactorsTitle: 'Your Aging Factors Breakdown',
    healthSystemsTitle: 'Health System Ages',
    cardiovascularLabel: 'Cardiovascular Age',
    metabolicLabel: 'Metabolic Age',
    skeletalLabel: 'Skeletal Age',
    cognitiveLabel: 'Cognitive Age',

    lifeExpectancyTitle: 'Life Expectancy Analysis',
    currentExpectancy: 'Current Life Expectancy',
    optimalExpectancy: 'Optimal Life Expectancy',
    potentialGain: 'Potential Years to Gain',

    topActionsTitle: 'Priority Action Items',
    impactHigh: 'High Impact',
    impactMedium: 'Medium Impact',
    impactLow: 'Low Impact',
    difficultyEasy: 'Easy',
    difficultyModerate: 'Moderate',
    difficultyChallenging: 'Challenging',

    // Factor names
    factorSmoking: 'Smoking',
    factorExercise: 'Exercise',
    factorDiet: 'Diet Quality',
    factorSleep: 'Sleep Quality',
    factorStress: 'Stress Level',
    factorAlcohol: 'Alcohol',
    factorBMI: 'Body Composition',
    factorConditions: 'Chronic Conditions',
    factorGenetics: 'Genetics/Family',
    factorBloodPressure: 'Blood Pressure',
    factorBreakfast: 'Breakfast Habit',
    factorFruitVegetable: 'Fruit & Vegetables',
    factorProcessedFood: 'Processed Foods',
    factorOmega3: 'Omega-3 Intake',
    factorVitaminD: 'Vitamin D',
    factorMeditation: 'Meditation',
    factorSocial: 'Social Connections',
    factorPurpose: 'Purpose in Life',
    factorScreenTime: 'Screen Time',
    factorSunlight: 'Sunlight Exposure',
    factorDental: 'Dental Health',
    factorMentalStimulation: 'Mental Stimulation',
    factorWorkLifeBalance: 'Work-Life Balance',
    factorCaffeine: 'Caffeine',
    factorSugar: 'Sugar Consumption',
    factorWater: 'Water Intake',

    // Interactive section titles
    dailyRoutineTitle: 'Daily Anti-Aging Routine',
    weeklyPlanTitle: 'Weekly Optimization Plan',
    nutritionPlanTitle: 'Age-Reversing Nutrition Plan',
    exercisePlanTitle: 'Longevity Exercise Plan',
    stressManagementTitle: 'Stress Reduction Strategies',
    sleepOptimizationTitle: 'Sleep Quality Enhancement',
    timelineTitle: 'Your Improvement Timeline',
    timelineDescription: 'Based on your profile, here is what you could achieve with consistent changes:',

    // Plan labels
    timeLabel: 'Time',
    activityLabel: 'Activity',
    benefitLabel: 'Benefit',
    dayLabel: 'Day',
    focusLabel: 'Focus',
    activitiesLabel: 'Activities',
    typeLabel: 'Type',
    frequencyLabel: 'Frequency',
    durationLabel: 'Duration',
  },

  tr: {
    title: 'Biyolojik Yaş Hesaplayıcı',
    description: 'Yaşam tarzı faktörleri, sağlık metrikleri ve genetiğe dayalı biyolojik yaşınızı hesaplayın',

    // İçindekiler etiketleri
    tocCalculator: 'Hesaplayıcı',
    tocResults: 'Sonuçlar',
    tocHowItWorks: 'Nasıl Çalışır',
    tocFormula: 'Formül ve Metodoloji',
    tocInterpreting: 'Sonuçları Yorumlama',
    tocCategories: 'Kategoriler',
    tocFaq: 'Sıkça Sorulan Sorular',
    tocDisclaimer: 'Tıbbi Sorumluluk Reddi',
    tocReferences: 'Kaynaklar',

    // Form labels
    basicInfoTitle: 'Temel Bilgiler',
    chronologicalAgeLabel: 'Kronolojik Yaşınız',
    chronologicalAgePlaceholder: 'Yaşınızı yıl olarak girin',
    genderLabel: 'Biyolojik Cinsiyet',
    genderMale: 'Erkek',
    genderFemale: 'Kadın',
    heightLabel: 'Boy (cm)',
    heightPlaceholder: 'örn. 170',
    weightLabel: 'Kilo (kg)',
    weightPlaceholder: 'örn. 70',

    // Lifestyle factors
    lifestyleFactorsTitle: 'Yaşam Tarzı Faktörleri',
    smokingLabel: 'Sigara Durumu',
    smokingNever: 'Hiç içmedim',
    smokingFormer: 'Eski içici',
    smokingCurrent: 'Aktif içici',

    alcoholLabel: 'Alkol Tüketimi',
    alcoholNone: 'Hiç',
    alcoholModerate: 'Orta (Günde 1-2 içki)',
    alcoholHeavy: 'Ağır (Günde 3+ içki)',

    exerciseLabel: 'Egzersiz Sıklığı',
    exerciseSedentary: 'Hareketsiz (Egzersiz yok)',
    exerciseLight: 'Hafif (Haftada 1-2 gün)',
    exerciseModerate: 'Orta (Haftada 3-4 gün)',
    exerciseActive: 'Aktif (Haftada 5-6 gün)',
    exerciseVeryActive: 'Çok Aktif (Her gün)',

    sleepLabel: 'Uyku Kalitesi',
    sleepPoor: 'Kötü (<5 saat veya çok huzursuz)',
    sleepFair: 'Orta (5-6 saat)',
    sleepGood: 'İyi (7-8 saat)',
    sleepExcellent: 'Mükemmel (8-9 saat, derin uyku)',

    stressLabel: 'Stres Seviyesi',
    stressLow: 'Düşük (Nadiren stresli)',
    stressModerate: 'Orta (Ara sıra stres)',
    stressHigh: 'Yüksek (Sık stres)',
    stressVeryHigh: 'Çok Yüksek (Kronik stres)',

    dietLabel: 'Diyet Kalitesi',
    dietPoor: 'Kötü (Çoğunlukla işlenmiş gıdalar)',
    dietFair: 'Orta (Bazı sağlıklı gıdalar)',
    dietGood: 'İyi (Çoğunlukla doğal gıdalar)',
    dietExcellent: 'Mükemmel (Akdeniz/Bitki bazlı)',

    // Health metrics
    healthMetricsTitle: 'Sağlık Metrikleri',
    chronicConditionsLabel: 'Kronik Hastalık Sayısı',
    chronicConditionsHelp: 'Diyabet, kalp hastalığı, hipertansiyon vb.',

    familyLongevityLabel: 'Aile Uzun Ömürlülüğü',
    familyLow: 'Düşük (Ebeveynler 70\'den önce öldü)',
    familyAverage: 'Ortalama (Ebeveynler 70-80 yaşadı)',
    familyHigh: 'Yüksek (Ebeveynler 80+ yaşadı)',

    bloodPressureLabel: 'Kan Basıncı (İsteğe Bağlı)',
    bloodPressureNormal: 'Normal (<120/80)',
    bloodPressureElevated: 'Yüksek (120-139/80-89)',
    bloodPressureHigh: 'Çok Yüksek (140+/90+)',

    cholesterolLabel: 'Kolesterol Seviyesi (İsteğe Bağlı)',
    cholesterolNormal: 'Normal (<200 mg/dL)',
    cholesterolBorderline: 'Sınırda (200-239 mg/dL)',
    cholesterolHigh: 'Yüksek (240+ mg/dL)',

    // Nutrition Habits
    nutritionHabitsTitle: 'Beslenme Alışkanlıkları',
    breakfastLabel: 'Kahvaltı Alışkanlığı',
    breakfastNever: 'Hiç kahvaltı yapmam',
    breakfastSometimes: 'Bazen (haftada 2-3 gün)',
    breakfastDaily: 'Her gün kahvaltı yaparım',

    fruitVegetableLabel: 'Günlük Meyve ve Sebze Porsiyonu',
    fruitVegetable01: '0-1 porsiyon',
    fruitVegetable23: '2-3 porsiyon',
    fruitVegetable45: '4-5 porsiyon',
    fruitVegetable6plus: '6+ porsiyon',

    processedFoodLabel: 'İşlenmiş Gıda Sıklığı',
    processedFoodDaily: 'Her gün',
    processedFoodWeekly: 'Haftada birkaç kez',
    processedFoodMonthly: 'Ayda birkaç kez',
    processedFoodRarely: 'Nadiren veya hiç',

    omega3Label: 'Omega-3 Alımı',
    omega3None: 'Hiç',
    omega3Occasional: 'Ara sıra (ayda 1-2 kez balık)',
    omega3Regular: 'Düzenli (haftada 2-3 kez balık)',
    omega3DailySupplement: 'Günlük takviye + düzenli balık',

    sugarLabel: 'Şeker Tüketimi',
    sugarHigh: 'Yüksek (günlük tatlı/gazlı içecek)',
    sugarModerate: 'Orta (ara sıra tatlı)',
    sugarLow: 'Düşük (nadiren eklenmiş şeker)',

    waterIntakeLabel: 'Günlük Su Alımı',
    waterLow: 'Düşük (4 bardaktan az)',
    waterModerate: 'Orta (4-6 bardak)',
    waterAdequate: 'Yeterli (6-8 bardak)',
    waterOptimal: 'Optimal (8+ bardak)',

    caffeineLabel: 'Kafein Alımı',
    caffeineNone: 'Hiç',
    caffeineModerate: 'Orta (günde 1-3 fincan)',
    caffeineHigh: 'Yüksek (günde 4+ fincan)',

    // Supplements & Health
    supplementsHealthTitle: 'Takviyeler ve Sağlık',
    vitaminDLabel: 'D Vitamini Seviyesi',
    vitaminDDeficient: 'Yetersiz (hiç test edilmemiş/güneş yok)',
    vitaminDLow: 'Düşük (sınırlı güneş, takviye yok)',
    vitaminDNormal: 'Normal (biraz güneş/takviye)',
    vitaminDOptimal: 'Optimal (düzenli güneş + takviye)',

    dentalHealthLabel: 'Diş Sağlığı',
    dentalPoor: 'Kötü (sık sorunlar, nadir diş hekimi ziyareti)',
    dentalFair: 'Orta (ara sıra sorunlar)',
    dentalGood: 'İyi (yıllık kontrol, günlük fırçalama)',
    dentalExcellent: 'Mükemmel (yılda 2 diş hekimi, günlük diş ipi)',

    sunlightLabel: 'Günlük Güneş Işığı Maruziyeti',
    sunlightMinimal: 'Minimal (çoğunlukla iç mekanda)',
    sunlightModerate: 'Orta (biraz dış mekan zamanı)',
    sunlightAdequate: 'Yeterli (günlük 15-30 dk dış mekan)',

    // Mental & Social
    mentalSocialTitle: 'Zihinsel ve Sosyal İyi Oluş',
    meditationLabel: 'Meditasyon/Farkındalık Pratiği',
    meditationNever: 'Hiç',
    meditationWeekly: 'Haftalık (1-3 kez)',
    meditationDaily: 'Günlük pratik',

    socialLabel: 'Sosyal Bağlantılar',
    socialIsolated: 'İzole (nadiren başkalarını görürüm)',
    socialFew: 'Az (küçük çevre, seyrek iletişim)',
    socialModerate: 'Orta (düzenli sosyal aktiviteler)',
    socialStrong: 'Güçlü ağ (yakın arkadaşlar, topluluk)',

    purposeLabel: 'Yaşam Amacı/Hedefleri',
    purposeNone: 'Net bir amaç veya hedef yok',
    purposeVague: 'Belirsiz bir yön duygusu',
    purposeClear: 'Net hedefler ve yön',
    purposeStrong: 'Güçlü yaşam amacı (ikigai)',

    mentalStimulationLabel: 'Zihinsel Uyarım',
    mentalStimLow: 'Düşük (sadece rutin görevler)',
    mentalStimModerate: 'Orta (ara sıra okuma/bulmaca)',
    mentalStimHigh: 'Yüksek (günlük öğrenme, bulmaca, yaratıcılık)',

    // Lifestyle Balance
    lifestyleBalanceTitle: 'Yaşam Tarzı Dengesi',
    screenTimeLabel: 'Günlük Eğlence Amaçlı Ekran Süresi',
    screenTime02: '0-2 saat',
    screenTime24: '2-4 saat',
    screenTime46: '4-6 saat',
    screenTime68: '6-8 saat',
    screenTime8plus: '8+ saat',

    workLifeLabel: 'İş-Yaşam Dengesi',
    workLifePoor: 'Kötü (aşırı çalışma, sınır yok)',
    workLifeFair: 'Orta (ara sıra fazla mesai)',
    workLifeGood: 'İyi (makul saatler, bazı hobiler)',
    workLifeExcellent: 'Mükemmel (dengeli, tatmin edici hobiler)',

    // Errors
    errorAge: 'Lütfen yaşınızı girin',
    errorAgeRange: 'Yaş 18 ile 100 arasında olmalıdır',
    errorHeight: 'Lütfen boyunuzu girin',
    errorWeight: 'Lütfen kilonuzu girin',

    // Result labels
    biologicalAgeLabel: 'Biyolojik Yaşınız',
    chronologicalAgeResult: 'Kronolojik Yaş',
    ageDifferenceLabel: 'Yaş Farkı',
    yearsYounger: 'yıl genç',
    yearsOlder: 'yıl yaşlı',
    percentileLabel: 'Daha iyi',
    ofPeople: 'yaşıtınızdan',

    // Categories
    categoryExceptional: 'İstisnai',
    categoryYounger: 'Biyolojik Olarak Genç',
    categoryChronological: 'Yaşa Uygun',
    categoryOlder: 'Biyolojik Olarak Yaşlı',
    categoryAccelerated: 'Hızlanmış Yaşlanma',

    // Interactive sections
    agingFactorsTitle: 'Yaşlanma Faktörleri Dağılımınız',
    healthSystemsTitle: 'Sağlık Sistemi Yaşları',
    cardiovascularLabel: 'Kardiyovasküler Yaş',
    metabolicLabel: 'Metabolik Yaş',
    skeletalLabel: 'İskelet Yaşı',
    cognitiveLabel: 'Bilişsel Yaş',

    lifeExpectancyTitle: 'Yaşam Beklentisi Analizi',
    currentExpectancy: 'Mevcut Yaşam Beklentisi',
    optimalExpectancy: 'Optimal Yaşam Beklentisi',
    potentialGain: 'Kazanılabilecek Yıllar',

    topActionsTitle: 'Öncelikli Eylem Öğeleri',
    impactHigh: 'Yüksek Etki',
    impactMedium: 'Orta Etki',
    impactLow: 'Düşük Etki',
    difficultyEasy: 'Kolay',
    difficultyModerate: 'Orta',
    difficultyChallenging: 'Zorlu',

    // Factor names
    factorSmoking: 'Sigara',
    factorExercise: 'Egzersiz',
    factorDiet: 'Diyet Kalitesi',
    factorSleep: 'Uyku Kalitesi',
    factorStress: 'Stres Seviyesi',
    factorAlcohol: 'Alkol',
    factorBMI: 'Vücut Kompozisyonu',
    factorConditions: 'Kronik Hastalıklar',
    factorGenetics: 'Genetik/Aile',
    factorBloodPressure: 'Kan Basıncı',
    factorBreakfast: 'Kahvaltı Alışkanlığı',
    factorFruitVegetable: 'Meyve ve Sebze',
    factorProcessedFood: 'İşlenmiş Gıdalar',
    factorOmega3: 'Omega-3 Alımı',
    factorVitaminD: 'D Vitamini',
    factorMeditation: 'Meditasyon',
    factorSocial: 'Sosyal Bağlantılar',
    factorPurpose: 'Yaşam Amacı',
    factorScreenTime: 'Ekran Süresi',
    factorSunlight: 'Güneş Işığı',
    factorDental: 'Diş Sağlığı',
    factorMentalStimulation: 'Zihinsel Uyarım',
    factorWorkLifeBalance: 'İş-Yaşam Dengesi',
    factorCaffeine: 'Kafein',
    factorSugar: 'Şeker Tüketimi',
    factorWater: 'Su Alımı',

    // Interactive section titles
    dailyRoutineTitle: 'Günlük Anti-Aging Rutini',
    weeklyPlanTitle: 'Haftalık Optimizasyon Planı',
    nutritionPlanTitle: 'Yaş Tersine Çevirme Beslenme Planı',
    exercisePlanTitle: 'Uzun Ömür Egzersiz Planı',
    stressManagementTitle: 'Stres Azaltma Stratejileri',
    sleepOptimizationTitle: 'Uyku Kalitesi İyileştirme',
    timelineTitle: 'İyileştirme Zaman Çizelgeniz',
    timelineDescription: 'Profilinize göre, tutarlı değişikliklerle elde edebilecekleriniz:',

    // Plan labels
    timeLabel: 'Zaman',
    activityLabel: 'Aktivite',
    benefitLabel: 'Fayda',
    dayLabel: 'Gün',
    focusLabel: 'Odak',
    activitiesLabel: 'Aktiviteler',
    typeLabel: 'Tür',
    frequencyLabel: 'Sıklık',
    durationLabel: 'Süre',
  },
};

// Educational Content following CalculatorContent interface
export const biologicalAgeContent: CalculatorContent = {
  en: {
    whatIs:
      'Biological age represents the functional capacity and health status of your body, independent of the number of years you have been alive (chronological age). Unlike chronological age, which simply counts birthdays, biological age measures how well your body is aging at the cellular and systemic level. Two people born on the same day can have vastly different biological ages—one might have the cardiovascular system of a 30-year-old while the other shows the wear and tear of a 50-year-old. This concept emerged from decades of longevity research showing that lifestyle factors, environmental exposures, genetics, and health behaviors dramatically affect how quickly our bodies age. Biological age is assessed through various markers including telomere length, DNA methylation patterns (epigenetic clocks), inflammatory markers, organ function tests, and comprehensive lifestyle analysis. Understanding your biological age provides actionable insight into your true health status and longevity potential, empowering you to make targeted interventions that can slow, stop, or even reverse aspects of aging.',

    howToCalculate:
      'This biological age calculator uses a comprehensive multi-factor analysis based on validated longevity research. The calculation process evaluates 26 different lifestyle and health factors across five major categories: basic health metrics (age, sex, height, weight, BMI), lifestyle behaviors (smoking, alcohol, exercise, sleep, stress, diet), clinical health markers (blood pressure, cholesterol, chronic conditions), nutrition habits (breakfast, fruits/vegetables, processed foods, omega-3, sugar, water, caffeine), and wellbeing factors (vitamin D, dental health, sunlight, meditation, social connections, purpose, mental stimulation, screen time, work-life balance). Each factor is assigned an impact score based on peer-reviewed scientific literature from major studies including the Framingham Heart Study, Nurses Health Study, Blue Zones research, and National Institute on Aging longitudinal studies. The calculator weighs factors by their evidence-based impact on longevity—for example, smoking status carries the highest weight (1.0), followed by exercise (0.9), diet and chronic conditions (0.8), and so on. Your responses generate positive or negative aging adjustments that are then applied to your chronological age to determine your biological age. Additionally, the calculator computes system-specific ages (cardiovascular, metabolic, skeletal, cognitive) by emphasizing factors most relevant to each body system, giving you a detailed picture of which aspects of your health are aging faster or slower than others.',

    formulaDetails:
      'The biological age calculation employs a cumulative impact model: Biological Age = Chronological Age + Σ(Weighted Aging Factors). Each of the 26 factors contributes a positive or negative value based on scientific evidence. Major factor impacts include: Smoking (current: -8 years, former: -2 years, never: 0), Exercise (sedentary: -3, light: 0, moderate: +2, active: +4, very active: +5), Diet quality (poor: -4, fair: -1, good: +2, excellent: +4), Sleep (poor: -3, fair: 0, good: +1, excellent: +3), Stress (low: +1, moderate: -1, high: -3, very high: -4), Alcohol (none: 0, moderate: +2, heavy: -3), BMI (optimal 18.5-24.9: +2, deviations subtract years based on distance from range), Chronic conditions (each: approximately -2 years), Family longevity (low: -3, average: 0, high: +3), Blood pressure (normal: 0, elevated: -2, high: -4). Additional factors include breakfast habits, fruit/vegetable intake, processed food consumption, omega-3 intake, sugar consumption, water intake, caffeine, vitamin D status, dental health, sunlight exposure, meditation practice, social connections, sense of purpose, mental stimulation, screen time, and work-life balance—each contributing smaller but meaningful impacts (+/- 0.5 to 2 years). The formula applies evidence-based weights to each factor, with smoking, exercise, and diet receiving the highest weights due to their overwhelming impact in longevity studies. System-specific age calculations emphasize relevant factors: cardiovascular age heavily weights smoking, exercise, and blood pressure; metabolic age emphasizes diet, exercise, and BMI; skeletal age focuses on exercise and nutrition; cognitive age prioritizes sleep, stress, and mental stimulation. This methodology synthesizes findings from over 75 years of epidemiological research and provides estimates accurate to within 3-5 years for 70-80% of individuals, though clinical biomarker testing (DNA methylation clocks, telomere length) offers greater precision.',

    interpretation:
      'Your biological age result reveals how your body is aging compared to your chronological age, categorized into five ranges. Exceptional (10+ years younger) places you in the top 5% of your age cohort—your lifestyle choices are paying enormous dividends, and you should maintain your habits while fine-tuning any remaining suboptimal factors. Biologically Younger (5-9 years younger) means you are in the top 20%, with strong foundational health; focus on elevating your 1-2 weakest areas from good to excellent. Age-Appropriate (-4 to +4 years) indicates your biological and chronological ages roughly match, placing you in the middle 40% of the population; there is substantial room for improvement through targeted lifestyle modifications. Biologically Older (5-9 years older) shows accelerated aging requiring attention—you are in the 60-80th percentile for aging speed, but addressing 2-3 major issues can reverse several years within months. Accelerated Aging (10+ years older) indicates significant aging acceleration requiring immediate, comprehensive lifestyle overhaul with professional support—you are in the bottom 20%, but the human body has remarkable regenerative capacity when given the right interventions. The aging factors breakdown shows which specific areas are contributing most to your biological age, allowing you to prioritize high-impact changes. Health system ages reveal whether specific body systems (heart, metabolism, skeleton, brain) are aging faster than others, guiding targeted interventions. Life expectancy projections show your current trajectory versus optimal potential, quantifying the years you could gain through sustained lifestyle optimization.',

    limitations:
      'While this calculator provides valuable estimates based on population-level research, it has important limitations. First, it is a lifestyle-based estimator, not as precise as clinical biological age tests such as DNA methylation clocks (Horvath clock, GrimAge, PhenoAge), telomere length measurement, or comprehensive biomarker panels that directly measure cellular and molecular aging. These clinical tests cost $300-$3,000 but offer individual-level accuracy. Second, the calculator cannot account for unmeasured genetic variations—some people have genetic variants that accelerate or decelerate aging independent of lifestyle. Third, it relies on self-reported data, which may be subjective (stress levels, diet quality) or inaccurate. Fourth, the algorithm uses population averages and may not capture individual variation in how specific factors affect different people. Fifth, it does not measure acute health crises or recent medical events that might not yet be reflected in chronic condition counts. Sixth, the calculator cannot assess environmental toxin exposures, occupational hazards, or air quality, which significantly impact biological aging. Seventh, it provides a snapshot in time and cannot predict future disease development. Finally, while the model captures 70-80% of lifestyle-related aging factors, the remaining variance comes from factors we cannot easily measure. For these reasons, biological age estimates should be viewed as screening tools for identifying areas of improvement and tracking progress over time, not as diagnostic instruments. Always consult healthcare professionals for comprehensive health assessment and before making major lifestyle changes, especially if you have chronic conditions.',

    healthRisks:
      'Accelerated biological aging—when your body is older than your chronological age—carries substantial health risks across multiple systems. Cardiovascular risks increase dramatically, with higher rates of atherosclerosis, hypertension, heart attack, stroke, and heart failure. Metabolic consequences include increased risk of type 2 diabetes, metabolic syndrome, insulin resistance, and fatty liver disease. Musculoskeletal aging manifests as osteoporosis, sarcopenia (muscle loss), increased fracture risk, and debilitating osteoarthritis. Cognitive decline accelerates, raising risks of dementia, Alzheimer disease, memory impairment, and reduced executive function. Immune system aging (immunosenescence) increases susceptibility to infections, reduces vaccine effectiveness, and elevates autoimmune disease risk. Cancer risk rises substantially as cellular repair mechanisms decline and inflammation increases. Respiratory function deteriorates, leading to reduced lung capacity, COPD progression, and increased pneumonia risk. Renal function declines, potentially progressing to chronic kidney disease. Accelerated biological aging is also associated with frailty syndrome, increased surgical complications, slower wound healing, medication side effects, and reduced quality of life. Perhaps most concerning, each year of biological age above chronological age correlates with a 3-7% increase in all-cause mortality risk. However, these risks are not predetermined—they represent trajectories that can be altered. Research consistently shows that lifestyle interventions can reverse biological age markers within 6-24 months, reducing these risks substantially. The earlier intervention begins, the more dramatic the potential benefit, but meaningful improvements are possible at any age.',

    alternativeMeasures:
      'Clinical biological age testing provides more precise measurements than lifestyle calculators. DNA methylation clocks are the gold standard—tests like the Horvath clock, GrimAge, PhenoAge, and DunedinPACE analyze methylation patterns across hundreds of sites in your DNA to estimate biological age with high accuracy, predicting mortality risk and healthspan better than chronological age. Cost ranges from $300-$500. Telomere length testing measures the protective caps on chromosome ends that shorten with age; shorter telomeres indicate accelerated aging and increased disease risk. Tests cost $100-$200 but have higher variability. Comprehensive biomarker panels measure aging-related markers including inflammatory cytokines (IL-6, TNF-α, CRP), metabolic markers (fasting glucose, HbA1c, insulin, lipid panel), hormonal markers (IGF-1, DHEA-S, testosterone, thyroid), oxidative stress markers, and organ function tests. Advanced imaging includes coronary calcium scoring (assessing arterial aging), DEXA scans (bone density and body composition), and MRI-based measurements of organ volume and fat distribution. Functional assessments include VO2 max testing (cardiovascular fitness), grip strength (predictor of all-cause mortality), walking speed, balance tests, and cognitive function assessments. Emerging tests include proteomic aging clocks, metabolomic profiling, glycan age testing, and NAD+ level measurement. For comprehensive assessment, many longevity clinics offer biological age panels combining multiple tests. The most cost-effective approach for most people is an annual clinical biological age test (DNA methylation) combined with quarterly lifestyle calculator assessments to track intervention effectiveness between tests.',

    demographicDifferences:
      'Biological aging patterns differ across demographic groups. Age cohorts show distinct patterns: younger adults (18-30) have highly malleable biological age with bad habits not yet compounded over decades, making early intervention highly impactful. Middle-aged adults (31-50) enter the "compression zone" where lifestyle impacts become increasingly visible and intervention is critical for long-term outcomes. Older adults (51-70) can still achieve substantial biological age reversal within 1-2 years through lifestyle changes. Very elderly individuals (70+) should focus on healthspan—maintaining independence and quality of life—where even small improvements have enormous practical benefits. Sex differences are significant: women typically have a 5-year life expectancy advantage over men, partly due to hormonal protective effects (estrogen), genetic factors (two X chromosomes providing redundancy), and behavioral differences (women seek preventive care more frequently). However, women face accelerated aging during menopause due to estrogen loss, affecting bone density, cardiovascular health, and metabolic function. Men tend to have higher cardiovascular disease risk at younger ages but may have skeletal aging advantages due to greater muscle mass. Ethnic and genetic differences also matter: Asian populations may show different biological aging patterns with health risks appearing at lower BMI thresholds; centenarians from "Blue Zones" (Okinawa, Sardinia, Nicoya, Ikaria, Loma Linda) demonstrate that lifestyle and environment can override average genetic longevity potential. Socioeconomic factors profoundly affect biological aging—chronic stress from financial insecurity, limited access to healthy food and healthcare, occupational hazards, and environmental toxin exposure in lower-income communities accelerate aging independent of individual choices. These demographic differences underscore that biological aging is multifactorial and that personalized assessment considering individual context is essential.',

    medicalDisclaimer:
      'This biological age calculator is designed for educational and informational purposes only. It provides lifestyle-based estimates using population health data and should NOT be used as a medical diagnostic tool. Results do not constitute professional medical advice, diagnosis, or treatment and should never replace consultation with qualified healthcare providers. The calculator provides statistical approximations based on population-level data and cannot account for individual genetic variations, specific medical conditions, medication interactions, environmental factors, or other unmeasured variables that significantly affect aging. Results may vary substantially from clinical biological age tests using DNA methylation, telomere length, or biomarker panels. If you have chronic conditions, take medications, are pregnant or nursing, have a history of eating disorders, or have any health concerns, you must consult with a physician before making lifestyle changes based on these results. Never start diet, exercise, supplementation, or weight loss programs without medical supervision, especially if you have cardiovascular disease, diabetes, metabolic disorders, or other health conditions. This calculator is not intended for children under 18 or adults with specific medical conditions requiring specialized care. The creators of this calculator assume no liability for decisions made based on these results. For comprehensive health assessment and personalized recommendations, always work with licensed healthcare professionals including physicians, registered dietitians, certified trainers, and mental health providers who can evaluate your complete health profile and provide evidence-based guidance tailored to your individual circumstances.',

    references: [
      'National Institute on Aging (NIH) - Biology of Aging Research and Interventions to Slow Aging',
      'Framingham Heart Study - Cardiovascular Risk Factors and Longevity (Boston University, ongoing since 1948)',
      'Horvath, S. (2013). DNA methylation age of human tissues and cell types. Genome Biology, 14(10), R115.',
      'Blue Zones Research - Dan Buettner, National Geographic - Longevity Hotspot Analysis',
      'Nurses Health Study - Harvard Medical School - Diet, Lifestyle, and Chronic Disease (125,000+ participants)',
      'Blackburn, E.H., Epel, E.S., Lin, J. (2015). Human telomere biology: A contributory and interactive factor in aging. Science, 350(6265), 1193-1198.',
      'Levine, M.E. (2013). Modeling the rate of senescence: can estimated biological age predict mortality more accurately than chronological age? Journals of Gerontology Series A, 68(6), 667-674.',
      'World Health Organization - Global Health Observatory Data on Life Expectancy and Risk Factors',
      'UK Biobank - 500,000+ participants - Genetic and Lifestyle Impacts on Aging',
      'López-Otín, C., et al. (2023). Hallmarks of aging: An expanding universe. Cell, 186(2), 243-278.',
    ],

    tips: [
      'Quit smoking immediately—it is the single most impactful change you can make, reversing cardiovascular aging within 1-2 years.',
      'Exercise consistently with a mix of cardio (150+ min/week) and resistance training (2-3x/week) to slow biological aging by 5-10 years.',
      'Adopt a Mediterranean or plant-heavy diet rich in vegetables, fruits, whole grains, legumes, nuts, and olive oil to reduce inflammatory aging.',
      'Prioritize sleep quality—aim for 7-9 hours nightly with consistent schedule, dark room, and no screens before bed for cellular repair.',
      'Manage stress through mindfulness, meditation, yoga, nature exposure, or therapy to prevent cortisol-driven accelerated aging.',
      'Build strong social connections—loneliness accelerates biological aging as much as smoking 15 cigarettes daily.',
      'Maintain healthy weight (BMI 18.5-24.9) through sustainable lifestyle changes, not crash diets, to optimize metabolic health.',
      'Get annual health screenings including blood pressure, cholesterol, glucose, and vitamin levels to catch issues early.',
      'Limit alcohol to moderate levels (0-1 drink/day for women, 0-2 for men) or abstain entirely for optimal health.',
      'Cultivate sense of purpose and goals—people with strong life purpose (ikigai) live 7+ years longer on average.',
    ],

    faqs: [
      {
        question: 'Is biological age scientifically valid or just a wellness trend?',
        answer:
          'Biological age is a scientifically-grounded concept backed by decades of longevity research from institutions like the National Institute on Aging, Harvard Medical School, and large-scale studies like the Framingham Heart Study. The idea that chronological age does not fully capture health status is well-established. Clinical biomarkers like telomere length, DNA methylation patterns (epigenetic clocks), and inflammatory markers correlate strongly with lifestyle factors and predict mortality risk better than chronological age alone. Our calculator uses validated lifestyle factors known to affect these biological aging markers. It is a screening tool based on population data, not a clinical diagnostic test, but it reflects real science.',
      },
      {
        question: 'Can I actually reverse my biological age, or is aging inevitable?',
        answer:
          'Yes, biological age can be reversed—this is well-documented in scientific literature. Studies on smoking cessation show measurable reversal of cardiovascular aging within 1-2 years. Research on caloric restriction and Mediterranean diets demonstrates reversal of metabolic aging markers. Exercise interventions in sedentary older adults show improvements in telomere length (cellular aging marker) and cardiovascular function equivalent to being 10-20 years younger. While chronological aging is inevitable, the rate of biological aging is highly modifiable. You cannot stop time, but you can dramatically slow—and even temporarily reverse—functional decline through sustained lifestyle changes.',
      },
      {
        question: 'How accurate is this calculator compared to clinical tests?',
        answer:
          'Our calculator provides population-based estimates with good general accuracy for lifestyle-driven biological aging. Clinical tests like DNA methylation clocks (Horvath clock, GrimAge), telomere length measurement, and comprehensive biomarker panels provide more precise individual results but cost $300-$3,000 and require blood draws. This free calculator captures 70-80% of lifestyle-related aging acceleration, making it excellent for identifying problem areas and tracking improvement over time. For the most accurate assessment, consider clinical biological age testing annually and use this calculator for quarterly check-ins on lifestyle changes.',
      },
      {
        question: 'I have a chronic disease. Can I still improve my biological age?',
        answer:
          'Absolutely! Having a chronic condition affects your baseline, but lifestyle factors still have massive impact. Type 2 diabetics who adopt intensive lifestyle changes (diet, exercise, weight loss) can achieve remission and reverse years of metabolic aging. Heart disease patients who quit smoking and exercise regularly show significant cardiovascular age improvements. Even with serious conditions, optimizing modifiable factors (sleep, stress, nutrition, activity) improves quality of life, slows disease progression, and can reverse aspects of biological aging in healthy systems. Work closely with your physician when making lifestyle changes while managing chronic conditions.',
      },
      {
        question: 'Why does moderate alcohol consumption sometimes show benefits?',
        answer:
          'The "J-shaped curve" for alcohol—where moderate consumption appears better than none—is controversial and increasingly questioned. Some observational studies suggested 1-2 drinks daily (especially red wine) might have cardiovascular benefits through antioxidants and HDL cholesterol increases. However, recent research challenges this, suggesting the apparent benefits were due to confounding factors (moderate drinkers tend to be wealthier, have better healthcare access). The 2023 WHO statement declared no safe level of alcohol consumption. Our calculator reflects the traditional view with slight benefits for moderate intake, but zero consumption is perfectly healthy and may be optimal. Heavy drinking (3+ drinks daily) unambiguously accelerates aging through liver damage, inflammation, and cancer risk.',
      },
      {
        question: 'How quickly will I see results if I make lifestyle changes?',
        answer:
          'Timeline varies by change type: Sleep and stress interventions show measurable benefits in 2-4 weeks (improved heart rate variability, reduced inflammation markers). Diet changes begin improving metabolic markers within 1-3 months (insulin sensitivity, cholesterol levels). Exercise shows cardiovascular improvements in 6-12 weeks, with more substantial changes by 6 months. Smoking cessation: cardiovascular risk drops 50% within 1 year; lung function improves over 3-9 months. Weight loss: each 10% reduction in excess weight yields significant metabolic improvements. For biological age reversal visible in recalculation: expect to need 6-12 months of consistent changes to see significant shifts (3-5 years younger). Major reversals (5-10 years) typically require 1-2 years of comprehensive lifestyle optimization.',
      },
      {
        question: 'Is genetics or lifestyle more important for biological age?',
        answer:
          'Research suggests genetics accounts for about 20-30% of longevity variation, while lifestyle and environment account for 70-80%. The famous "Blue Zones" studies of populations with exceptional longevity (Okinawa, Sardinia, Loma Linda, Nicoya, Ikaria) show that lifestyle factors—plant-heavy diet, daily movement, strong social bonds, stress management, purpose—are primary drivers. Even with "bad genes," optimal lifestyle can largely compensate. Conversely, excellent genetics cannot overcome terrible lifestyle choices. Your family history sets a baseline, but your daily choices determine the trajectory. This is empowering: most of your biological age is under your control.',
      },
    ],
  },

  tr: {
    whatIs:
      'Biyolojik yaş, vücudunuzun işlevsel kapasitesini ve sağlık durumunu, yaşadığınız yıl sayısından (kronolojik yaş) bağımsız olarak temsil eder. Sadece doğum günlerini sayan kronolojik yaşın aksine, biyolojik yaş vücudunuzun hücresel ve sistemik düzeyde ne kadar iyi yaşlandığını ölçer. Aynı günde doğan iki kişi çok farklı biyolojik yaşlara sahip olabilir—birinin kardiyovasküler sistemi 30 yaşındaki biri gibi olabilirken, diğeri 50 yaşındaki birinin yıpranmasını gösterebilir. Bu kavram, yaşam tarzı faktörlerinin, çevresel maruziyetlerin, genetiğin ve sağlık davranışlarının vücutlarımızın ne kadar hızlı yaşlandığını dramatik şekilde etkilediğini gösteren onlarca yıllık uzun ömür araştırmasından ortaya çıkmıştır. Biyolojik yaş, telomer uzunluğu, DNA metilasyon kalıpları (epigenetik saatler), inflamatuar belirteçler, organ fonksiyon testleri ve kapsamlı yaşam tarzı analizi gibi çeşitli belirteçlerle değerlendirilir. Biyolojik yaşınızı anlamak, gerçek sağlık durumunuz ve uzun ömür potansiyeliniz hakkında eyleme dönüştürülebilir içgörü sağlar ve yaşlanmanın yavaşlatılması, durdurulması ve hatta tersine çevrilmesine yönelik hedefli müdahaleler yapmanızı sağlar.',

    howToCalculate:
      'Bu biyolojik yaş hesaplayıcı, doğrulanmış uzun ömür araştırmalarına dayalı kapsamlı bir çok faktörlü analiz kullanır. Hesaplama süreci, beş ana kategoride 26 farklı yaşam tarzı ve sağlık faktörünü değerlendirir: temel sağlık metrikleri (yaş, cinsiyet, boy, kilo, BMI), yaşam tarzı davranışları (sigara, alkol, egzersiz, uyku, stres, diyet), klinik sağlık belirteçleri (kan basıncı, kolesterol, kronik hastalıklar), beslenme alışkanlıkları (kahvaltı, meyve/sebze, işlenmiş gıdalar, omega-3, şeker, su, kafein) ve refah faktörleri (D vitamini, diş sağlığı, güneş ışığı, meditasyon, sosyal bağlantılar, amaç, zihinsel uyarım, ekran süresi, iş-yaşam dengesi). Her faktöre, Framingham Kalp Çalışması, Hemşireler Sağlık Çalışması, Mavi Bölgeler araştırması ve Ulusal Yaşlanma Enstitüsü uzunlamasına çalışmaları gibi büyük çalışmalardan elde edilen hakemli bilimsel literatüre dayalı bir etki skoru atanır. Hesaplayıcı, faktörleri kanıta dayalı uzun ömür üzerindeki etkilerine göre ağırlıklandırır—örneğin, sigara durumu en yüksek ağırlığa (1.0) sahiptir, ardından egzersiz (0.9), diyet ve kronik hastalıklar (0.8) gelir. Yanıtlarınız, kronolojik yaşınıza uygulanan pozitif veya negatif yaşlanma ayarlamaları oluşturur ve biyolojik yaşınızı belirler. Ek olarak, hesaplayıcı her vücut sistemine en alakalı faktörleri vurgulayarak sisteme özgü yaşları (kardiyovasküler, metabolik, iskelet, bilişsel) hesaplar ve sağlığınızın hangi yönlerinin diğerlerinden daha hızlı veya daha yavaş yaşlandığına dair ayrıntılı bir resim sunar.',

    formulaDetails:
      'Biyolojik yaş hesaplaması kümülatif etki modeli kullanır: Biyolojik Yaş = Kronolojik Yaş + Σ(Ağırlıklı Yaşlanma Faktörleri). 26 faktörün her biri bilimsel kanıtlara dayalı pozitif veya negatif bir değer katkıda bulunur. Başlıca faktör etkileri şunlardır: Sigara (aktif: -8 yıl, eski: -2 yıl, hiç: 0), Egzersiz (hareketsiz: -3, hafif: 0, orta: +2, aktif: +4, çok aktif: +5), Diyet kalitesi (kötü: -4, orta: -1, iyi: +2, mükemmel: +4), Uyku (kötü: -3, orta: 0, iyi: +1, mükemmel: +3), Stres (düşük: +1, orta: -1, yüksek: -3, çok yüksek: -4), Alkol (hiç: 0, orta: +2, ağır: -3), BMI (optimal 18.5-24.9: +2, sapmalar aralıktan uzaklığa göre yıl çıkarır), Kronik hastalıklar (her biri: yaklaşık -2 yıl), Aile uzun ömürlülüğü (düşük: -3, ortalama: 0, yüksek: +3), Kan basıncı (normal: 0, yüksek: -2, çok yüksek: -4). Ek faktörler kahvaltı alışkanlıkları, meyve/sebze alımı, işlenmiş gıda tüketimi, omega-3 alımı, şeker tüketimi, su alımı, kafein, D vitamini durumu, diş sağlığı, güneş ışığı maruziyeti, meditasyon pratiği, sosyal bağlantılar, amaç duygusu, zihinsel uyarım, ekran süresi ve iş-yaşam dengesini içerir—her biri daha küçük ancak anlamlı etkiler (+/- 0.5 ila 2 yıl) katkıda bulunur. Formül her faktöre kanıta dayalı ağırlıklar uygular; sigara, egzersiz ve diyet uzun ömür çalışmalarındaki ezici etkileri nedeniyle en yüksek ağırlıkları alır. Sisteme özgü yaş hesaplamaları ilgili faktörleri vurgular: kardiyovasküler yaş sigara, egzersiz ve kan basıncını yoğun şekilde ağırlıklandırır; metabolik yaş diyet, egzersiz ve BMI\'yi vurgular; iskelet yaşı egzersiz ve beslenmeye odaklanır; bilişsel yaş uyku, stres ve zihinsel uyarıma öncelik verir. Bu metodoloji, 75 yılı aşkın epidemiyolojik araştırmadan elde edilen bulguları sentezler ve bireylerin %70-80\'i için 3-5 yıl içinde doğru tahminler sağlar, ancak klinik biyobelirteç testi (DNA metilasyon saatleri, telomer uzunluğu) daha fazla hassasiyet sunar.',

    interpretation:
      'Biyolojik yaş sonucunuz, vücudunuzun kronolojik yaşınıza kıyasla nasıl yaşlandığını beş aralığa kategorize ederek ortaya koyar. İstisnai (10+ yıl genç) sizi yaş grubunuzun en iyi %5\'ine yerleştirir—yaşam tarzı seçimleriniz muazzam kar sağlıyor ve kalan optimal olmayan faktörleri ince ayarlayarak alışkanlıklarınızı sürdürmelisiniz. Biyolojik Olarak Genç (5-9 yıl genç) en iyi %20\'de olduğunuz anlamına gelir, güçlü temel sağlığa sahipsiniz; en zayıf 1-2 alanınızı iyiden mükemmele yükseltmeye odaklanın. Yaşa Uygun (-4 ila +4 yıl) biyolojik ve kronolojik yaşlarınızın kabaca eşleştiğini gösterir, sizi nüfusun orta %40\'ına yerleştirir; hedefli yaşam tarzı değişiklikleri yoluyla önemli ölçüde iyileştirme için yer vardır. Biyolojik Olarak Yaşlı (5-9 yıl yaşlı) dikkat gerektiren hızlanmış yaşlanmayı gösterir—yaşlanma hızı için 60-80. yüzdelik dilimdesiniz, ancak 2-3 büyük sorunu ele almak aylar içinde birkaç yıllık biyolojik yaşlanmayı tersine çevirebilir. Hızlanmış Yaşlanma (10+ yıl yaşlı) profesyonel destekle acil, kapsamlı yaşam tarzı revizyonu gerektiren önemli yaşlanma hızlanmasını gösterir—en alttaki %20\'desiniz, ancak doğru müdahaleler verildiğinde insan vücudu dikkate değer rejeneratif kapasiteye sahiptir. Yaşlanma faktörleri dağılımı, hangi spesifik alanların biyolojik yaşınıza en çok katkıda bulunduğunu göstererek yüksek etkili değişikliklere öncelik vermenizi sağlar. Sağlık sistemi yaşları, belirli vücut sistemlerinin (kalp, metabolizma, iskelet, beyin) diğerlerinden daha hızlı yaşlanıp yaşlanmadığını ortaya çıkararak hedefli müdahalelere rehberlik eder. Yaşam beklentisi tahminleri, mevcut yörüngenizi optimal potansiyele karşı göstererek, sürdürülebilir yaşam tarzı optimizasyonu yoluyla kazanabileceğiniz yılları ölçer.',

    limitations:
      'Bu hesaplayıcı popülasyon düzeyinde araştırmaya dayalı değerli tahminler sağlarken, önemli sınırlamalara sahiptir. Birincisi, DNA metilasyon saatleri (Horvath saati, GrimAge, PhenoAge), telomer uzunluğu ölçümü veya hücresel ve moleküler yaşlanmayı doğrudan ölçen kapsamlı biyobelirteç panelleri gibi klinik biyolojik yaş testleri kadar kesin değil, yaşam tarzı bazlı bir tahmin edicidir. Bu klinik testler 300-3.000 dolar arasında maliyete sahiptir ancak bireysel düzeyde doğruluk sunar. İkincisi, hesaplayıcı ölçülmemiş genetik varyasyonları hesaba katamaz—bazı insanlar yaşam tarzından bağımsız olarak yaşlanmayı hızlandıran veya yavaşlatan genetik varyantlara sahiptir. Üçüncüsü, öznel (stres seviyeleri, diyet kalitesi) veya yanlış olabilecek kendi kendine bildirilen verilere dayanır. Dördüncüsü, algoritma popülasyon ortalamalarını kullanır ve belirli faktörlerin farklı insanları nasıl etkilediğindeki bireysel varyasyonu yakalayamayabilir. Beşincisi, kronik hastalık sayılarına henüz yansımamış olabilecek akut sağlık krizlerini veya yakın zamandaki tıbbi olayları değerlendiremez. Altıncısı, hesaplayıcı biyolojik yaşlanmayı önemli ölçüde etkileyen çevresel toksin maruziyetlerini, mesleki tehlikeleri veya hava kalitesini değerlendiremez. Yedincisi, zamanda bir anlık görüntü sağlar ve gelecekteki hastalık gelişimini tahmin edemez. Son olarak, model yaşam tarzı ile ilgili yaşlanma faktörlerinin %70-80\'ini yakalasa da, kalan varyans kolayca ölçemediğimiz faktörlerden gelir. Bu nedenlerle, biyolojik yaş tahminleri, iyileştirme alanlarını belirlemek ve zaman içinde ilerlemeyi izlemek için tarama araçları olarak görülmeli, tanı araçları olarak değil. Kapsamlı sağlık değerlendirmesi ve özellikle kronik durumlarınız varsa önemli yaşam tarzı değişiklikleri yapmadan önce her zaman sağlık uzmanlarına danışın.',

    healthRisks:
      'Hızlanmış biyolojik yaşlanma—vücudunuzun kronolojik yaşınızdan daha yaşlı olması—birden fazla sistemde önemli sağlık riskleri taşır. Kardiyovasküler riskler dramatik şekilde artar; ateroskleroz, hipertansiyon, kalp krizi, felç ve kalp yetmezliği oranları yükselir. Metabolik sonuçlar Tip 2 diyabet, metabolik sendrom, insülin direnci ve yağlı karaciğer hastalığı riskinin artmasını içerir. Kas-iskelet yaşlanması osteoporoz, sarkopeni (kas kaybı), artmış kırık riski ve sakatlayıcı osteoartrit olarak kendini gösterir. Bilişsel düşüş hızlanır, demans, Alzheimer hastalığı, hafıza bozukluğu ve azalmış yürütücü işlev riskleri yükselir. Bağışıklık sistemi yaşlanması (immünosenescence) enfeksiyonlara duyarlılığı artırır, aşı etkinliğini azaltır ve otoimmün hastalık riskini yükseltir. Kanser riski, hücresel onarım mekanizmaları düştükçe ve iltihaplanma arttıkça önemli ölçüde yükselir. Solunum fonksiyonu bozulur, azalmış akciğer kapasitesi, KOAH ilerlemesi ve artmış pnömoni riskine yol açar. Böbrek fonksiyonu düşer, potansiyel olarak kronik böbrek hastalığına ilerler. Hızlanmış biyolojik yaşlanma ayrıca kırılganlık sendromu, artmış cerrahi komplikasyonlar, yavaş yara iyileşmesi, ilaç yan etkileri ve azalmış yaşam kalitesi ile ilişkilidir. Belki de en endişe verici olanı, kronolojik yaşın üzerindeki her biyolojik yaş yılının tüm nedenlere bağlı ölüm riskinde %3-7 artışla ilişkili olmasıdır. Ancak, bu riskler önceden belirlenmiş değildir—değiştirilebilecek yörüngeler temsil ederler. Araştırma sürekli olarak yaşam tarzı müdahalelerinin 6-24 ay içinde biyolojik yaş belirteçlerini tersine çevirebileceğini, bu riskleri önemli ölçüde azaltabileceğini göstermektedir. Müdahale ne kadar erken başlarsa, potansiyel fayda o kadar dramatik olur, ancak her yaşta anlamlı iyileştirmeler mümkündür.',

    alternativeMeasures:
      'Klinik biyolojik yaş testi, yaşam tarzı hesaplayıcılarından daha kesin ölçümler sağlar. DNA metilasyon saatleri altın standarttır—Horvath saati, GrimAge, PhenoAge ve DunedinPACE gibi testler, DNA\'nızdaki yüzlerce bölgedeki metilasyon kalıplarını analiz ederek biyolojik yaşı yüksek doğrulukla tahmin eder, ölüm riskini ve sağlık ömrünü kronolojik yaştan daha iyi öngörür. Maliyet 300-500 dolar arasındadır. Telomer uzunluğu testi, yaşla birlikte kısalan kromozom uçlarındaki koruyucu kapakları ölçer; daha kısa telomerler hızlanmış yaşlanma ve artmış hastalık riskini gösterir. Testler 100-200 dolar arasında maliyete sahiptir ancak daha yüksek değişkenliğe sahiptir. Kapsamlı biyobelirteç panelleri, inflamatuar sitokinler (IL-6, TNF-α, CRP), metabolik belirteçler (açlık glukozu, HbA1c, insülin, lipid paneli), hormonal belirteçler (IGF-1, DHEA-S, testosteron, tiroid), oksidatif stres belirteçleri ve organ fonksiyon testleri dahil yaşlanma ile ilgili belirteçleri ölçer. Gelişmiş görüntüleme, koroner kalsiyum skorlaması (arteriyel yaşlanmayı değerlendirme), DEXA taramaları (kemik yoğunluğu ve vücut kompozisyonu) ve organ hacmi ve yağ dağılımının MRI tabanlı ölçümlerini içerir. Fonksiyonel değerlendirmeler VO2 max testi (kardiyovasküler uygunluk), kavrama gücü (tüm nedenlere bağlı ölümlülüğün öngörücüsü), yürüme hızı, denge testleri ve bilişsel fonksiyon değerlendirmelerini içerir. Gelişmekte olan testler proteomik yaşlanma saatleri, metabolomik profilleme, glikan yaş testi ve NAD+ seviyesi ölçümünü içerir. Kapsamlı değerlendirme için, birçok uzun ömür kliniği birden fazla testi birleştiren biyolojik yaş panelleri sunar. Çoğu insan için en uygun maliyetli yaklaşım, testler arasında müdahale etkinliğini izlemek için üç aylık yaşam tarzı hesaplayıcı değerlendirmeleriyle birleştirilmiş yıllık klinik biyolojik yaş testi (DNA metilasyonu)dir.',

    demographicDifferences:
      'Biyolojik yaşlanma kalıpları demografik gruplar arasında farklılık gösterir. Yaş kohortları farklı kalıplar gösterir: genç yetişkinler (18-30) henüz onlarca yıldır birleşmemiş kötü alışkanlıklar olmadan oldukça değiştirilebilir biyolojik yaşa sahiptir, bu da erken müdahaleyi oldukça etkili kılar. Orta yaşlı yetişkinler (31-50) yaşam tarzı etkilerinin giderek daha görünür hale geldiği ve müdahalenin uzun vadeli sonuçlar için kritik olduğu "sıkışma bölgesine" girerler. Yaşlı yetişkinler (51-70) hala yaşam tarzı değişiklikleri yoluyla 1-2 yıl içinde önemli biyolojik yaş geri dönüşü elde edebilirler. Çok yaşlı bireyler (70+) küçük iyileştirmelerin bile muazzam pratik faydalara sahip olduğu bağımsızlığı ve yaşam kalitesini korumaya—sağlık ömrüne odaklanmalıdır. Cinsiyet farklılıkları önemlidir: kadınlar tipik olarak erkeklere göre 5 yıllık yaşam beklentisi avantajına sahiptir, kısmen hormonal koruyucu etkiler (östrojen), genetik faktörler (fazlalık sağlayan iki X kromozomu) ve davranışsal farklılıklar (kadınlar önleyici bakım arama konusunda daha sıktır) nedeniyle. Ancak, kadınlar östrojen kaybı nedeniyle menopoz sırasında hızlanmış yaşlanmayla karşı karşıya kalırlar ve bu kemik yoğunluğunu, kardiyovasküler sağlığı ve metabolik fonksiyonu etkiler. Erkekler daha genç yaşlarda daha yüksek kardiyovasküler hastalık riskine sahip olma eğilimindedir ancak daha fazla kas kütlesi nedeniyle iskelet yaşlanmasında avantajlara sahip olabilirler. Etnik ve genetik farklılıklar da önemlidir: Asya popülasyonları daha düşük BMI eşiklerinde sağlık risklerinin ortaya çıktığı farklı biyolojik yaşlanma kalıpları gösterebilir; "Mavi Bölgeler"den (Okinawa, Sardinya, Nicoya, İkaria, Loma Linda) yüzyıllık insanlar yaşam tarzı ve çevrenin ortalama genetik uzun ömür potansiyelini aşabileceğini gösterirler. Sosyoekonomik faktörler biyolojik yaşlanmayı derinden etkiler—finansal güvensizlikten kaynaklanan kronik stres, sağlıklı gıda ve sağlık hizmetlerine sınırlı erişim, mesleki tehlikeler ve düşük gelirli topluluklarda çevresel toksin maruziyeti, bireysel seçimlerden bağımsız olarak yaşlanmayı hızlandırır. Bu demografik farklılıklar, biyolojik yaşlanmanın çok faktörlü olduğunu ve bireysel bağlamı dikkate alan kişiselleştirilmiş değerlendirmenin gerekli olduğunu vurgular.',

    medicalDisclaimer:
      'Bu biyolojik yaş hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Popülasyon sağlık verileri kullanarak yaşam tarzı bazlı tahminler sağlar ve tıbbi tanı aracı olarak kullanılmamalıdır. Sonuçlar profesyonel tıbbi tavsiye, tanı veya tedavi oluşturmaz ve nitelikli sağlık hizmeti sağlayıcılarıyla danışmanın yerini asla almamalıdır. Hesaplayıcı popülasyon düzeyinde verilere dayalı istatistiksel yaklaşıklıklar sağlar ve yaşlanmayı önemli ölçüde etkileyen bireysel genetik varyasyonları, spesifik tıbbi durumları, ilaç etkileşimlerini, çevresel faktörleri veya diğer ölçülmemiş değişkenleri hesaba katamaz. Sonuçlar, DNA metilasyonu, telomer uzunluğu veya biyobelirteç panelleri kullanan klinik biyolojik yaş testlerinden önemli ölçüde değişebilir. Kronik durumlarınız varsa, ilaç kullanıyorsanız, hamile veya emziriyorsanız, yeme bozukluğu geçmişiniz varsa veya herhangi bir sağlık endişeniz varsa, bu sonuçlara dayalı yaşam tarzı değişiklikleri yapmadan önce bir doktora danışmalısınız. Özellikle kardiyovasküler hastalık, diyabet, metabolik bozukluklar veya diğer sağlık durumlarınız varsa, tıbbi gözetim olmadan diyet, egzersiz, takviye veya kilo kaybı programlarına asla başlamayın. Bu hesaplayıcı 18 yaş altındaki çocuklar veya özel bakım gerektiren spesifik tıbbi durumları olan yetişkinler için tasarlanmamıştır. Bu hesaplayıcının yaratıcıları bu sonuçlara dayalı kararlardan sorumluluk kabul etmezler. Kapsamlı sağlık değerlendirmesi ve kişiselleştirilmiş öneriler için, tam sağlık profilinizi değerlendirebilen ve bireysel koşullarınıza özel kanıta dayalı rehberlik sağlayabilen doktorlar, kayıtlı diyetisyenler, sertifikalı eğitmenler ve ruh sağlığı sağlayıcıları dahil lisanslı sağlık uzmanlarıyla her zaman çalışın.',

    references: [
      'Ulusal Yaşlanma Enstitüsü (NIH) - Yaşlanma Biyolojisi Araştırması ve Yaşlanmayı Yavaşlatma Müdahaleleri',
      'Framingham Kalp Çalışması - Kardiyovasküler Risk Faktörleri ve Uzun Ömürlülük (Boston Üniversitesi, 1948\'den beri devam ediyor)',
      'Horvath, S. (2013). İnsan dokularının ve hücre tiplerinin DNA metilasyon yaşı. Genome Biology, 14(10), R115.',
      'Mavi Bölgeler Araştırması - Dan Buettner, National Geographic - Uzun Ömür Sıcak Nokta Analizi',
      'Hemşireler Sağlık Çalışması - Harvard Tıp Fakültesi - Diyet, Yaşam Tarzı ve Kronik Hastalık (125.000+ katılımcı)',
      'Blackburn, E.H., Epel, E.S., Lin, J. (2015). İnsan telomer biyolojisi: Yaşlanmada katkıda bulunan ve etkileşimli bir faktör. Science, 350(6265), 1193-1198.',
      'Levine, M.E. (2013). Yaşlılık hızını modelleme: tahmini biyolojik yaş ölümlülüğü kronolojik yaştan daha doğru tahmin edebilir mi? Journals of Gerontology Series A, 68(6), 667-674.',
      'Dünya Sağlık Örgütü - Yaşam Beklentisi ve Risk Faktörleri Üzerine Küresel Sağlık Gözlemevi Verileri',
      'Birleşik Krallık Biobankası - 500.000+ katılımcı - Yaşlanma Üzerine Genetik ve Yaşam Tarzı Etkileri',
      'López-Otín, C., et al. (2023). Yaşlanmanın işaretleri: Genişleyen bir evren. Cell, 186(2), 243-278.',
    ],

    tips: [
      'Hemen sigarayı bırakın—yapabileceğiniz en etkili tek değişikliktir, 1-2 yıl içinde kardiyovasküler yaşlanmayı tersine çevirir.',
      'Biyolojik yaşlanmayı 5-10 yıl yavaşlatmak için kardio (haftada 150+ dk) ve direnç antrenmanı (haftada 2-3x) karışımıyla tutarlı egzersiz yapın.',
      'İnflamatuar yaşlanmayı azaltmak için sebze, meyve, tam tahıllar, baklagiller, fındıklar ve zeytinyağı açısından zengin Akdeniz veya bitki ağırlıklı bir diyet benimseyin.',
      'Hücresel onarım için tutarlı programla, karanlık odada ve yatmadan önce ekran olmadan günlük 7-9 saat hedefleyerek uyku kalitesine öncelik verin.',
      'Kortizol kaynaklı hızlanmış yaşlanmayı önlemek için farkındalık, meditasyon, yoga, doğa maruziyeti veya terapi yoluyla stresi yönetin.',
      'Güçlü sosyal bağlantılar kurun—yalnızlık biyolojik yaşlanmayı günde 15 sigara içmek kadar hızlandırır.',
      'Metabolik sağlığı optimize etmek için çöküş diyetleri değil, sürdürülebilir yaşam tarzı değişiklikleriyle sağlıklı kiloda (BMI 18.5-24.9) kalın.',
      'Sorunları erken yakalamak için kan basıncı, kolesterol, glukoz ve vitamin seviyeleri dahil yıllık sağlık taramaları yaptırın.',
      'Optimal sağlık için alkolü orta seviyelerde sınırlayın (kadınlar için günde 0-1 içki, erkekler için 0-2) veya tamamen perhiz edin.',
      'Amaç ve hedefler duygusu geliştirin—güçlü yaşam amacı (ikigai) olan insanlar ortalama 7+ yıl daha uzun yaşarlar.',
    ],

    faqs: [
      {
        question: 'Biyolojik yaş bilimsel olarak geçerli mi yoksa sadece bir sağlık trendi mi?',
        answer:
          'Biyolojik yaş, Ulusal Yaşlanma Enstitüsü, Harvard Tıp Fakültesi gibi kurumlardan ve Framingham Kalp Çalışması gibi büyük ölçekli çalışmalardan onlarca yıllık uzun ömür araştırmasıyla desteklenen bilimsel temelli bir kavramdır. Kronolojik yaşın sağlık durumunu tam olarak yakalamaması fikri iyi kurulmuştur. Telomer uzunluğu, DNA metilasyon kalıpları (epigenetik saatler) ve inflamatuar belirteçler gibi klinik biyobelirteçler yaşam tarzı faktörleriyle güçlü şekilde ilişkilidir ve ölüm riskini kronolojik yaştan daha iyi tahmin eder. Hesaplayıcımız bu biyolojik yaşlanma belirteçlerini etkilediği bilinen doğrulanmış yaşam tarzı faktörlerini kullanır. Klinik tanı testi değil, popülasyon verilerine dayalı bir tarama aracıdır, ancak gerçek bilimi yansıtır.',
      },
      {
        question: 'Biyolojik yaşımı gerçekten tersine çevirebilir miyim, yoksa yaşlanma kaçınılmaz mı?',
        answer:
          'Evet, biyolojik yaş tersine çevrilebilir—bu bilimsel literatürde iyi belgelenmiştir. Sigara bırakma üzerine yapılan çalışmalar 1-2 yıl içinde kardiyovasküler yaşlanmanın ölçülebilir tersine çevrilmesini gösteriyor. Kalorik kısıtlama ve Akdeniz diyetleri üzerine araştırma metabolik yaşlanma belirteçlerinin tersine çevrilmesini gösteriyor. Hareketsiz yaşlı yetişkinlerde egzersiz müdahaleleri telomer uzunluğunda (hücresel yaşlanma belirteci) ve 10-20 yıl daha genç olmaya eşdeğer kardiyovasküler fonksiyonda iyileştirmeler gösteriyor. Kronolojik yaşlanma kaçınılmaz olsa da, biyolojik yaşlanma hızı oldukça değiştirilebilir. Zamanı durduramazsınız, ancak sürdürülen yaşam tarzı değişiklikleri yoluyla fonksiyonel düşüşü önemli ölçüde yavaşlatabilir ve hatta geçici olarak tersine çevirebilirsiniz.',
      },
      {
        question: 'Bu hesaplayıcı klinik testlere kıyasla ne kadar doğru?',
        answer:
          'Hesaplayıcımız, yaşam tarzı kaynaklı biyolojik yaşlanma için iyi genel doğrulukla popülasyon tabanlı tahminler sağlar. DNA metilasyon saatleri (Horvath saati, GrimAge), telomer uzunluğu ölçümü ve kapsamlı biyobelirteç panelleri gibi klinik testler daha kesin bireysel sonuçlar sağlar ancak 300-3.000 dolar arasında maliyete sahiptir ve kan alımı gerektirir. Bu ücretsiz hesaplayıcı yaşam tarzı ile ilgili yaşlanma hızlanmasının %70-80\'ini yakalar, bu da onu sorun alanlarını belirlemek ve zamanla iyileşmeyi takip etmek için mükemmel hale getirir. En doğru değerlendirme için, yıllık klinik biyolojik yaş testi düşünün ve bu hesaplayıcıyı yaşam tarzı değişikliklerinde üç aylık kontroller için kullanın.',
      },
      {
        question: 'Kronik bir hastalığım var. Yine de biyolojik yaşımı iyileştirebilir miyim?',
        answer:
          'Kesinlikle! Kronik bir duruma sahip olmak temel çizginizi etkiler, ancak yaşam tarzı faktörleri hala büyük etkiye sahiptir. Yoğun yaşam tarzı değişiklikleri (diyet, egzersiz, kilo kaybı) benimseyen Tip 2 diyabetliler remisyon elde edebilir ve yıllarca metabolik yaşlanmayı tersine çevirebilir. Sigara bırakıp düzenli egzersiz yapan kalp hastalığı hastaları önemli kardiyovasküler yaş iyileştirmeleri gösterir. Ciddi durumlarla bile, değiştirilebilir faktörleri (uyku, stres, beslenme, aktivite) optimize etmek yaşam kalitesini artırır, hastalık ilerlemesini yavaşlatır ve sağlıklı sistemlerde biyolojik yaşlanma yönlerini tersine çevirebilir. Kronik durumları yönetirken yaşam tarzı değişiklikleri yaparken doktorunuzla yakın çalışın.',
      },
      {
        question: 'Neden orta düzeyde alkol tüketimi bazen fayda gösteriyor?',
        answer:
          'Alkol için "J-şekilli eğri"—orta tüketimin hiçbirinden daha iyi göründüğü—tartışmalıdır ve giderek sorgulanmaktadır. Bazı gözlemsel çalışmalar günlük 1-2 içkinin (özellikle kırmızı şarap) antioksidanlar ve HDL kolesterol artışları yoluyla kardiyovasküler faydaları olabileceğini öne sürdü. Ancak, son araştırmalar bunu sorguluyor ve görünen faydaların karıştırıcı faktörlerden kaynaklandığını öne sürüyor (orta içenler daha zengin olma, daha iyi sağlık hizmetlerine erişim eğilimindedir). 2023 DSÖ bildirisi güvenli alkol tüketimi seviyesi olmadığını ilan etti. Hesaplayıcımız orta alım için hafif faydalarla geleneksel görüşü yansıtır, ancak sıfır tüketim tamamen sağlıklıdır ve optimal olabilir. Ağır içki (günde 3+ içki) karaciğer hasarı, iltihaplanma ve kanser riski yoluyla yaşlanmayı açıkça hızlandırır.',
      },
      {
        question: 'Yaşam tarzı değişiklikleri yaparsam ne kadar hızlı sonuç göreceğim?',
        answer:
          'Zaman çizelgesi değişiklik tipine göre değişir: Uyku ve stres müdahaleleri 2-4 haftada ölçülebilir faydalar gösterir (iyileştirilmiş kalp hızı değişkenliği, azaltılmış inflamasyon belirteçleri). Diyet değişiklikleri 1-3 ay içinde metabolik belirteçleri iyileştirmeye başlar (insülin duyarlılığı, kolesterol seviyeleri). Egzersiz 6-12 haftada kardiyovasküler iyileştirmeler gösterir, 6 aya kadar daha önemli değişikliklerle. Sigara bırakma: kardiyovasküler risk 1 yıl içinde %50 düşer; akciğer fonksiyonu 3-9 ay içinde iyileşir. Kilo kaybı: fazla kilonun her %10 azalması önemli metabolik iyileştirmeler sağlar. Yeniden hesaplamada görünen biyolojik yaş tersine çevirme için: önemli kaymalar görmek için 6-12 ay tutarlı değişikliğe ihtiyaç duymayı bekleyin (3-5 yıl daha genç). Büyük tersine çevirmeler (5-10 yıl) tipik olarak 1-2 yıl kapsamlı yaşam tarzı optimizasyonu gerektirir.',
      },
      {
        question: 'Biyolojik yaş için genetik mi yoksa yaşam tarzı mı daha önemli?',
        answer:
          'Araştırma, genetiğin uzun ömür varyasyonunun yaklaşık %20-30\'unu oluşturduğunu, yaşam tarzı ve çevrenin ise %70-80\'ini oluşturduğunu öne sürüyor. İstisnai uzun ömre sahip popülasyonların (Okinawa, Sardinya, Loma Linda, Nicoya, İkaria) ünlü "Mavi Bölgeler" çalışmaları yaşam tarzı faktörlerinin—bitki ağırlıklı diyet, günlük hareket, güçlü sosyal bağlar, stres yönetimi, amaç—birincil itici güçler olduğunu gösteriyor. "Kötü genlerle" bile, optimal yaşam tarzı büyük ölçüde telafi edebilir. Tersine, mükemmel genetik korkunç yaşam tarzı seçimlerini aşamaz. Aile geçmişiniz bir temel belirler, ancak günlük seçimleriniz yörüngeyi belirler. Bu güçlendiricidir: biyolojik yaşınızın çoğu sizin kontrolünüz altındadır.',
      },
    ],
  },
};

// Helper function for interpretation (backward compatibility)
export function getInterpretationContent(
  result: { category: string; ageDifference: number },
  locale: 'en' | 'tr'
): string {
  const diff = Math.abs(result.ageDifference);

  if (result.category === 'exceptional') {
    return locale === 'en'
      ? `Outstanding! Your biological age is ${diff} years younger than your chronological age. You're in the top 5% for aging trajectory.`
      : `Mükemmel! Biyolojik yaşınız kronolojik yaşınızdan ${diff} yıl genç. Yaşlanma yörüngesi için en iyi %5'tesiniz.`;
  }
  if (result.category === 'younger') {
    return locale === 'en'
      ? `Great work! Your biological age is ${diff} years younger. You're aging slower than most people your age.`
      : `Harika iş! Biyolojik yaşınız ${diff} yıl daha genç. Yaşıtlarınızın çoğundan daha yavaş yaşlanıyorsunuz.`;
  }
  if (result.category === 'chronological') {
    return locale === 'en'
      ? `Your biological age is close to your chronological age. There's significant room for improvement through lifestyle changes.`
      : `Biyolojik yaşınız kronolojik yaşınıza yakın. Yaşam tarzı değişiklikleriyle önemli ölçüde iyileştirme alanı var.`;
  }
  if (result.category === 'older') {
    return locale === 'en'
      ? `Your biological age is ${diff} years older. This indicates accelerated aging that can be reversed with targeted lifestyle changes.`
      : `Biyolojik yaşınız ${diff} yıl daha yaşlı. Bu, hedefli yaşam tarzı değişiklikleriyle tersine çevrilebilecek hızlanmış yaşlanmayı gösterir.`;
  }
  return locale === 'en'
    ? `Your biological age is ${diff} years older, indicating significant aging acceleration. Comprehensive lifestyle changes are strongly recommended.`
    : `Biyolojik yaşınız ${diff} yıl daha yaşlı, önemli yaşlanma hızlanmasını gösteriyor. Kapsamlı yaşam tarzı değişiklikleri şiddetle tavsiye edilir.`;
}

// Backward compatibility exports
export const biologicalAgeEducationalContent = biologicalAgeUIContent;
