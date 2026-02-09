export const caffeineContent = {
  en: {
    title: 'Caffeine Calculator',
    description: 'Track your daily caffeine intake and understand its effects on your body',

    // Input labels
    age: 'Age',
    ageUnit: 'years',
    weight: 'Weight',
    weightPlaceholder: 'Enter your weight',
    pregnant: 'Are you pregnant?',
    yes: 'Yes',
    no: 'No',

    inputMethod: 'Input Method',
    standardMethod: 'Select Drinks/Foods',
    customMethod: 'Enter Custom Amount',

    // Standard method
    addCaffeineItem: 'Add Caffeine Source',
    caffeineSource: 'Caffeine Source',
    amount: 'Amount',
    consumptionTime: 'Time Consumed',
    servings: 'servings',
    remove: 'Remove',

    // Categories
    coffee: 'Coffee',
    tea: 'Tea',
    energy: 'Energy Drinks',
    soda: 'Soda',
    chocolate: 'Chocolate',
    supplement: 'Supplements',
    other: 'Other',

    // Custom method
    customCaffeineMg: 'Caffeine Amount (mg)',
    customTimestamp: 'When did you consume it?',

    // Calculate button
    calculate: 'Calculate Caffeine',

    // Results
    results: 'Your Caffeine Analysis',
    totalConsumed: 'Total Caffeine Consumed Today',
    currentInBody: 'Current Caffeine in Body',
    dailyLimit: 'Your Daily Limit',
    percentageOfLimit: 'Percentage of Daily Limit',
    safetyStatus: 'Safety Status',

    timingInfo: 'Timing Information',
    halfLife: 'Caffeine Half-Life',
    hoursUntilClear: 'Hours Until 90% Cleared',
    timeToClear: 'Estimated Clear Time',
    lastSafeTime: 'Last Safe Time for Good Sleep',
    hours: 'hours',

    caffeineTimeline: 'Caffeine Timeline (Next 24 Hours)',
    timelineDescription: 'See how caffeine levels in your body will decrease over time',

    warnings: 'Warnings & Recommendations',
    noWarnings: 'No warnings - your caffeine intake appears safe!',

    effects: 'Expected Effects',

    // New Result Sections
    caffeineDecayTimeline: 'Caffeine Decay Timeline',
    caffeineDecayDescription: 'See how caffeine levels decrease in your body over the next 12 hours',
    now: 'Now',
    hoursFromNow: 'hours from now',

    personalizedInsights: 'Your Personalized Insights',
    insightComparison: 'Compared to Average',
    yourLevel: 'Your Level',
    averageAdult: 'Average Adult',
    aboveAverage: 'Above Average',
    average: 'Average',
    belowAverage: 'Below Average',

    caffeineSourceBreakdown: 'Caffeine Source Breakdown',
    sourceBreakdownDesc: 'Where your caffeine came from',

    performanceExpectations: 'What to Expect',
    alertnessTitle: 'Alertness & Focus',
    alertnessLow: 'Minimal stimulation - you may still feel drowsy',
    alertnessMild: 'Mild increase in alertness and concentration',
    alertnessModerate: 'Good focus and mental clarity expected',
    alertnessHigh: 'Peak alertness - excellent for cognitive tasks',
    alertnessExcessive: 'Overstimulation - may cause jitters and difficulty focusing',

    physicalPerformanceTitle: 'Physical Performance',
    physicalLow: 'Limited impact on physical performance',
    physicalMild: 'Slight improvement in endurance',
    physicalModerate: 'Enhanced endurance and reduced fatigue',
    physicalHigh: 'Optimal performance boost - great for workouts',
    physicalExcessive: 'Excessive stimulation may impair coordination',

    sleepImpactTitle: 'Sleep Quality Impact',
    sleepImpactScore: 'Sleep Impact Score',
    sleepNone: 'No impact - you should sleep normally',
    sleepMinimal: 'Minimal impact - slight delay in falling asleep possible',
    sleepModerate: 'Moderate impact - may reduce deep sleep quality',
    sleepHigh: 'Significant impact - difficulty falling asleep likely',
    sleepSevere: 'Severe impact - expect poor sleep quality tonight',

    nextCaffeineTitle: 'Next Caffeine Recommendation',
    nextCaffeineNow: 'You can consume more caffeine now',
    nextCaffeineWait: 'Wait at least',
    nextCaffeineBefore: 'before consuming more caffeine',

    comparisonTitle: 'How You Compare',
    comparisonAvgAdult: 'Average adult consumes 200-300mg daily',
    comparisonYouConsumed: 'You consumed',
    comparisonHigher: 'higher than average',
    comparisonLower: 'lower than average',
    comparisonSame: 'about average',

    // Extended Educational Content
    whatIsCaffeine: 'What is Caffeine?',
    whatIsCaffeineText: `Caffeine is the world's most widely consumed psychoactive substance, found naturally in coffee beans, tea leaves, cacao pods, and various other plants. As a central nervous system stimulant, caffeine works primarily by blocking adenosine receptors in the brain. Adenosine is a neurotransmitter that promotes sleep and relaxation, so when caffeine blocks these receptors, it prevents drowsiness and increases alertness.

Chemically known as 1,3,7-trimethylxanthine, caffeine belongs to the methylxanthine class of compounds. It is rapidly absorbed from the gastrointestinal tract, with peak blood concentrations typically occurring 30-60 minutes after consumption. Once absorbed, caffeine distributes throughout the body, easily crossing the blood-brain barrier where it exerts its stimulant effects.

Beyond blocking adenosine, caffeine also increases the release of neurotransmitters like dopamine and norepinephrine, contributing to improved mood, enhanced cognitive performance, and increased physical endurance. These effects make caffeine one of the most popular performance enhancers worldwide, consumed daily by billions of people.`,

    howCalculatorWorks: 'How This Caffeine Calculator Works',
    calculatorMethodology: `Our caffeine calculator uses scientifically validated pharmacokinetic principles to estimate caffeine levels in your body. The calculation is based on several key factors:

**1. Caffeine Half-Life:** The primary mechanism is the half-life principle. Caffeine has an average half-life of 5 hours in healthy adults, meaning that every 5 hours, half of the caffeine is metabolized and eliminated from your body. However, this can vary from 3 to 7 hours depending on individual factors like genetics, liver function, medications, and smoking status.

**2. Personalized Daily Limits:** The calculator determines your safe daily caffeine limit based on:
   - Age: Children and adolescents have lower limits (3mg per kg of body weight, maximum 100mg)
   - Weight: Heavier individuals can generally tolerate more caffeine
   - Pregnancy status: Pregnant women should limit intake to 200mg per day (WHO recommendation)
   - Adults: Standard limit is 400mg per day (FDA recommendation)

**3. Time-Based Calculation:** By tracking when you consumed each caffeine source, the calculator applies the exponential decay formula:
   Current Caffeine = Initial Amount × (0.5)^(time elapsed / half-life)

This formula accurately estimates how much caffeine remains active in your system at any given moment.

**4. Sleep Impact Assessment:** The calculator recommends avoiding caffeine 6-8 hours before bedtime, as caffeine can significantly disrupt sleep architecture, even if you don't consciously notice it. Studies show that caffeine consumed even 6 hours before bed can reduce total sleep time by more than an hour.`,

    understandingResults: 'Understanding Your Results',
    resultsInterpretation: `**Total Caffeine Consumed:** This represents the cumulative amount of caffeine you've ingested during the tracked period. It's important to note that this is different from the amount currently active in your body.

**Current Caffeine in Body:** This is the most important metric. It shows how much caffeine is currently circulating in your bloodstream based on the half-life elimination rate. Even if you consumed 300mg of caffeine 10 hours ago, only about 75mg remains active in your system.

**Percentage of Daily Limit:** This metric helps you understand where you stand relative to recommended safe limits. The interpretation:
   - 0-50%: Safe zone - Normal effects expected
   - 50-80%: Moderate zone - Monitor for side effects
   - 80-100%: High zone - Approaching maximum safe intake
   - 100-150%: Excessive zone - Side effects likely
   - 150%+: Dangerous zone - Risk of caffeine toxicity

**Safety Status Levels:**

*Safe (Green):* You're well within healthy limits. Caffeine at this level typically enhances alertness, concentration, and physical performance without significant side effects.

*Moderate (Yellow):* You're consuming a moderate amount. Some individuals may experience mild jitters, slight anxiety, or difficulty sleeping if consumed late in the day.

*High (Orange):* You're approaching or at your daily limit. Side effects like restlessness, rapid heartbeat, and sleep disturbance become more likely.

*Excessive (Red):* You've exceeded recommended limits. Common side effects include headaches, anxiety, digestive upset, rapid heartbeat, and severe sleep disruption.

*Dangerous (Dark Red):* You're at risk of caffeine toxicity. Symptoms may include severe palpitations, tremors, nausea, vomiting, and in rare cases, seizures. Seek medical attention if you experience severe symptoms.`,

    caffeineMetabolism: 'Caffeine Metabolism and Individual Variation',
    metabolismText: `Caffeine metabolism varies dramatically between individuals, primarily due to genetic differences in liver enzymes, particularly CYP1A2. This enzyme is responsible for about 95% of caffeine metabolism. Some people are "fast metabolizers" who break down caffeine quickly (half-life of 3-4 hours), while "slow metabolizers" may take 7-9 hours to eliminate half the caffeine they consume.

**Factors Affecting Caffeine Metabolism:**

1. **Genetics:** The CYP1A2 gene has several variants that affect enzyme activity. Fast metabolizers can consume more caffeine with fewer side effects, while slow metabolizers are more sensitive.

2. **Medications:** Many drugs inhibit CYP1A2, prolonging caffeine's effects. Common culprits include certain antibiotics (ciprofloxacin), antidepressants (fluvoxamine), and birth control pills.

3. **Smoking:** Smokers metabolize caffeine about 50% faster than non-smokers, requiring higher doses for the same effects.

4. **Pregnancy:** Caffeine metabolism slows significantly during pregnancy, with half-life increasing to 10-18 hours in the third trimester. This is why pregnant women should limit intake to 200mg daily.

5. **Liver Health:** Liver diseases like cirrhosis dramatically slow caffeine clearance, sometimes extending half-life to 96 hours or more.

6. **Age:** Newborns and elderly individuals generally metabolize caffeine more slowly than young and middle-aged adults.`,

    healthEffects: 'Health Effects of Caffeine',
    healthEffectsPositive: `**Positive Effects:**

- **Cognitive Enhancement:** Improves alertness, concentration, reaction time, and memory consolidation
- **Physical Performance:** Increases endurance by 2-4%, enhances fat oxidation, and reduces perceived exertion
- **Mood Improvement:** Elevates mood and may reduce depression risk with moderate regular consumption
- **Neuroprotection:** Regular caffeine consumption is associated with reduced risk of Parkinson's disease and Alzheimer's disease
- **Liver Health:** Coffee consumption is linked to reduced risk of liver cirrhosis and liver cancer
- **Metabolic Benefits:** May enhance metabolic rate by 3-11% and improve insulin sensitivity`,

    healthEffectsNegative: `**Potential Negative Effects:**

- **Sleep Disruption:** Delays sleep onset, reduces total sleep time, and decreases deep sleep quality
- **Anxiety:** Can trigger or worsen anxiety symptoms, especially in sensitive individuals or at high doses
- **Digestive Issues:** May cause acid reflux, stomach upset, or diarrhea in some people
- **Cardiovascular Effects:** Temporarily raises blood pressure and heart rate; may cause palpitations
- **Dependency:** Regular use leads to tolerance and withdrawal symptoms (headache, fatigue, irritability)
- **Bone Health:** High intake may interfere with calcium absorption, potentially affecting bone density
- **Pregnancy Concerns:** High intake during pregnancy is associated with increased miscarriage risk`,

    recommendedLimits: 'Recommended Daily Limits',
    limitAdults: 'Adults (18-64 years): 400mg per day (FDA)',
    limitPregnant: 'Pregnant women: 200mg per day (WHO)',
    limitChildren: 'Children: 3mg per kg of body weight (maximum 100mg)',
    limitAdolescents: 'Adolescents (12-18 years): 100mg per day',
    limitElderly: 'Elderly (65+ years): 200-300mg per day (increased sensitivity)',
    limitNursing: 'Nursing mothers: 200-300mg per day',

    // FAQs
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How long does caffeine stay in your system?',
    faq1A: `Caffeine has a half-life of approximately 5 hours in healthy adults, which means that if you consume 200mg of caffeine at 2 PM, you'll still have about 100mg in your system at 7 PM, 50mg at midnight, and 25mg at 5 AM. However, this varies significantly based on individual factors. The complete elimination of caffeine (reaching less than 10% of the original amount) typically takes 15-20 hours, or about 3-4 half-lives. This is why afternoon coffee can still affect your sleep at night, even if you don't consciously feel its stimulating effects. Factors like genetics, medications, smoking, pregnancy, and liver health can significantly alter these timelines.`,

    faq2Q: 'Is 400mg of caffeine per day really safe for everyone?',
    faq2A: `The 400mg daily limit is a general guideline for healthy adults established by the FDA and supported by extensive research. However, "safe" is relative and depends on individual factors. People with certain health conditions should consume less or avoid caffeine entirely. Those with anxiety disorders, heart arrhythmias, high blood pressure, or GERD may need to limit intake to 200mg or less. Pregnant women should stay under 200mg daily. Additionally, some individuals are genetically "slow metabolizers" of caffeine and may experience adverse effects at lower doses. The key is to pay attention to your body's signals - if you experience jitters, anxiety, sleep problems, or digestive issues, your personal safe limit may be lower than 400mg. It's also worth noting that sudden high doses (like consuming 400mg all at once) can cause acute side effects even in regular caffeine users.`,

    faq3Q: 'Can you build tolerance to caffeine?',
    faq3A: `Yes, regular caffeine consumption leads to tolerance, typically developing within 1-4 days of consistent use. Tolerance occurs because your brain responds to chronic adenosine receptor blockade by creating more adenosine receptors, essentially requiring more caffeine to achieve the same blocking effect. This means that your morning cup of coffee may provide a significant boost initially, but after a few weeks, it might only prevent withdrawal symptoms rather than enhance performance. Tolerance affects some of caffeine's effects more than others - you'll develop strong tolerance to its effects on blood pressure and heart rate, but less tolerance to its effects on sleep disruption. Interestingly, taking periodic "caffeine breaks" of 1-2 weeks can reset your tolerance, making caffeine more effective when you resume consumption. Many athletes use this strategy, abstaining from caffeine during training and using it strategically before competitions for maximum performance benefits.`,

    faq4Q: 'Why does caffeine affect sleep even when consumed 6 hours before bed?',
    faq4A: `Caffeine's sleep-disrupting effects are more complex than just "keeping you awake." Research shows that caffeine consumed even 6 hours before bedtime can reduce total sleep time by over an hour and significantly decrease deep sleep (slow-wave sleep) quality, even if you subjectively feel like you fell asleep normally. This happens because caffeine blocks adenosine receptors throughout your entire sleep period. Adenosine is a key sleep-promoting neurotransmitter that builds up during wakefulness - it's part of your "sleep pressure" system. When caffeine blocks adenosine from binding to its receptors, it disrupts normal sleep architecture, reducing the amount of restorative deep sleep you get. You might fall asleep, but your sleep quality is compromised. Studies using polysomnography (sleep monitoring) show that people often don't consciously realize their sleep was disrupted, yet objective measurements show reduced sleep quality. This is why sleep experts recommend avoiding caffeine for at least 6-8 hours before your intended bedtime.`,

    faq5Q: 'What are the signs of caffeine overdose and what should I do?',
    faq5A: `Caffeine overdose, while rare, can occur and typically involves consuming more than 1,000mg in a short period. Symptoms include rapid or irregular heartbeat (palpitations), tremors, severe anxiety or panic, nausea and vomiting, confusion or disorientation, chest pain, and in severe cases, seizures. If you experience severe symptoms, especially chest pain or seizures, seek emergency medical attention immediately. For mild to moderate symptoms (jitters, nausea, rapid heartbeat), stop consuming caffeine, drink plenty of water to help flush it from your system, try deep breathing exercises to calm anxiety, and rest in a comfortable position. Activated charcoal can help if taken within an hour of consumption, but should only be used under medical supervision. Most caffeine overdoses resolve on their own within several hours as the body metabolizes the caffeine, but medical evaluation is important if symptoms are severe or you've consumed an extremely high dose (multiple grams). Energy shots and caffeine pills pose particular risks because they deliver high doses quickly, unlike coffee which is sipped gradually. Always read labels and track your total daily intake from all sources.`,

    tips: 'Healthy Caffeine Consumption Tips',
    tip1: 'Avoid caffeine 6-8 hours before bedtime to prevent sleep disruption and maintain healthy sleep architecture',
    tip2: 'Stay well hydrated - caffeine has a mild diuretic effect that can lead to dehydration if water intake is insufficient',
    tip3: 'Spread your caffeine intake throughout the day rather than consuming it all at once to maintain steady energy levels',
    tip4: 'Be aware of hidden caffeine sources including medications (pain relievers, weight loss pills), energy bars, and chocolate',
    tip5: 'If you experience jitters, anxiety, or sleep issues, reduce your intake and consider taking periodic caffeine breaks',
    tip6: 'Don\'t use caffeine to compensate for chronic sleep deprivation - prioritize getting adequate sleep instead',
    tip7: 'Consider genetic testing for CYP1A2 variants to understand your personal caffeine metabolism rate',
    tip8: 'Avoid mixing caffeine with alcohol - it can mask alcohol\'s depressant effects, leading to dangerous overconsumption',

    // Scientific methodology
    methodology: 'Scientific Methodology',
    methodologyText: `**Pharmacokinetic Model:**

Our calculator employs first-order elimination kinetics, the standard model for caffeine metabolism. The fundamental equation is:

C(t) = C₀ × e^(-kt)

Where:
- C(t) = concentration at time t
- C₀ = initial concentration
- k = elimination rate constant = ln(2)/t₁/₂
- t₁/₂ = half-life (default 5 hours)

For practical calculations, we use the simplified half-life formula:
Current Amount = Initial Amount × (0.5)^(time elapsed / half-life)

**Volume of Distribution:**
Caffeine distributes throughout total body water, approximately 0.6-0.7 L/kg body weight. This personalization factor helps adjust recommendations based on individual body composition.

**Safety Threshold Calculations:**
Daily limits are derived from:
1. FDA guidelines (400mg for adults)
2. WHO pregnancy recommendations (200mg)
3. Pediatric guidelines (3mg/kg body weight)
4. European Food Safety Authority (EFSA) opinions

**Validation:**
Our model has been validated against published pharmacokinetic studies and aligns with clinical caffeine clearance data from peer-reviewed medical literature.`,

    references: 'References & Scientific Sources',
    reference1: '1. Nehlig A. (2016). Effects of coffee/caffeine on brain health and disease: What should I tell my patients? Practical Neurology, 16(2), 89-95.',
    reference2: '2. Cappelletti S., Piacentino D., Sani G., Aromatario M. (2015). Caffeine: cognitive and physical performance enhancer or psychoactive drug? Current Neuropharmacology, 13(1), 71-88.',
    reference3: '3. Drake C., Roehrs T., Shambroom J., Roth T. (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. Journal of Clinical Sleep Medicine, 9(11), 1195-1200.',
    reference4: '4. Blanchard J., Sawers S.J. (1983). The absolute bioavailability of caffeine in man. European Journal of Clinical Pharmacology, 24(1), 93-98.',
    reference5: '5. Grosso G., Godos J., Galvano F., Giovannucci E.L. (2017). Coffee, caffeine, and health outcomes: an umbrella review. Annual Review of Nutrition, 37, 131-156.',
    reference6: '6. Temple J.L., Bernard C., Lipshultz S.E., et al. (2017). The Safety of Ingested Caffeine: A Comprehensive Review. Frontiers in Psychiatry, 8, 80.',
    reference7: '7. U.S. Food and Drug Administration. (2018). Spilling the Beans: How Much Caffeine is Too Much? FDA Consumer Health Information.',
    reference8: '8. World Health Organization. (2016). Maternal caffeine consumption and pregnancy outcomes: a narrative review. BMC Medicine, 14, 174.',

    disclaimer: 'Medical Disclaimer',
    disclaimerText: `This caffeine calculator is designed for educational and informational purposes only. It provides estimates based on general pharmacokinetic principles and should not be considered medical advice. Individual responses to caffeine vary significantly due to genetic factors, health conditions, medications, and other variables that cannot be fully accounted for in any calculator.

**Important Warnings:**

- Consult a healthcare provider before making significant changes to your caffeine consumption, especially if you have heart conditions, anxiety disorders, high blood pressure, diabetes, GERD, or are pregnant or nursing.
- This calculator does not replace professional medical advice, diagnosis, or treatment.
- Caffeine affects medications and medical conditions - discuss your caffeine intake with your doctor if you take any medications or have health concerns.
- Individual caffeine sensitivity varies greatly - some people may experience adverse effects at levels well below recommended limits.
- If you experience severe symptoms (chest pain, irregular heartbeat, severe anxiety, seizures), seek immediate medical attention.

By using this calculator, you acknowledge that you understand these limitations and will consult with healthcare professionals for personalized medical advice.`,
  },

  tr: {
    title: 'Kafein Hesaplayıcı',
    description: 'Günlük kafein alımınızı takip edin ve vücudunuzdaki etkilerini anlayın',

    // Input labels
    age: 'Yaş',
    ageUnit: 'yıl',
    weight: 'Kilo',
    weightPlaceholder: 'Kilonuzu girin',
    pregnant: 'Hamile misiniz?',
    yes: 'Evet',
    no: 'Hayır',

    inputMethod: 'Giriş Yöntemi',
    standardMethod: 'İçecek/Yiyecek Seç',
    customMethod: 'Özel Miktar Gir',

    // Standard method
    addCaffeineItem: 'Kafein Kaynağı Ekle',
    caffeineSource: 'Kafein Kaynağı',
    amount: 'Miktar',
    consumptionTime: 'Tüketim Zamanı',
    servings: 'porsiyon',
    remove: 'Kaldır',

    // Categories
    coffee: 'Kahve',
    tea: 'Çay',
    energy: 'Enerji İçecekleri',
    soda: 'Gazoz',
    chocolate: 'Çikolata',
    supplement: 'Takviyeler',
    other: 'Diğer',

    // Custom method
    customCaffeineMg: 'Kafein Miktarı (mg)',
    customTimestamp: 'Ne zaman tükettiniz?',

    // Calculate button
    calculate: 'Kafein Hesapla',

    // Results
    results: 'Kafein Analiziniz',
    totalConsumed: 'Bugün Tüketilen Toplam Kafein',
    currentInBody: 'Vücuttaki Mevcut Kafein',
    dailyLimit: 'Günlük Limitiniz',
    percentageOfLimit: 'Günlük Limitin Yüzdesi',
    safetyStatus: 'Güvenlik Durumu',

    timingInfo: 'Zamanlama Bilgisi',
    halfLife: 'Kafein Yarı Ömrü',
    hoursUntilClear: 'Temizlenme Süresi',
    timeToClear: 'Tahmini Temizlenme Zamanı',
    lastSafeTime: 'İyi Uyku İçin Son Güvenli Zaman',
    hours: 'saat',

    caffeineTimeline: 'Kafein Zaman Çizelgesi (Sonraki 24 Saat)',
    timelineDescription: 'Vücudunuzdaki kafein seviyelerinin zamanla nasıl azalacağını görün',

    warnings: 'Uyarılar ve Öneriler',
    noWarnings: 'Uyarı yok - kafein alımınız güvenli görünüyor!',

    effects: 'Beklenen Etkiler',

    // New Result Sections (Turkish)
    caffeineDecayTimeline: 'Kafein Azalma Zaman Çizelgesi',
    caffeineDecayDescription: 'Vücudunuzdaki kafein seviyelerinin sonraki 12 saatte nasıl azalacağını görün',
    now: 'Şimdi',
    hoursFromNow: 'saat sonra',

    personalizedInsights: 'Kişiselleştirilmiş Analiziniz',
    insightComparison: 'Ortalamayla Karşılaştırma',
    yourLevel: 'Sizin Seviyeniz',
    averageAdult: 'Ortalama Yetişkin',
    aboveAverage: 'Ortalamanın Üzerinde',
    average: 'Ortalama',
    belowAverage: 'Ortalamanın Altında',

    caffeineSourceBreakdown: 'Kafein Kaynak Dağılımı',
    sourceBreakdownDesc: 'Kafein hangi kaynaklardan geldi',

    performanceExpectations: 'Ne Beklenmeli',
    alertnessTitle: 'Uyanıklık ve Odaklanma',
    alertnessLow: 'Minimal uyarılma - hala uykulu hissedebilirsiniz',
    alertnessMild: 'Uyanıklık ve konsantrasyonda hafif artış',
    alertnessModerate: 'İyi odaklanma ve zihinsel berraklık beklenir',
    alertnessHigh: 'Maksimum uyanıklık - bilişsel görevler için mükemmel',
    alertnessExcessive: 'Aşırı uyarılma - titreme ve odaklanma güçlüğü',

    physicalPerformanceTitle: 'Fiziksel Performans',
    physicalLow: 'Fiziksel performans üzerinde sınırlı etki',
    physicalMild: 'Dayanıklılıkta hafif iyileşme',
    physicalModerate: 'Gelişmiş dayanıklılık ve azalmış yorgunluk',
    physicalHigh: 'Optimal performans artışı - antrenmanlar için harika',
    physicalExcessive: 'Aşırı uyarılma koordinasyonu bozabilir',

    sleepImpactTitle: 'Uyku Kalitesi Etkisi',
    sleepImpactScore: 'Uyku Etki Skoru',
    sleepNone: 'Etki yok - normal uyuyabilmelisiniz',
    sleepMinimal: 'Minimal etki - uykuya dalmada hafif gecikme olabilir',
    sleepModerate: 'Orta etki - derin uyku kalitesini azaltabilir',
    sleepHigh: 'Önemli etki - uykuya dalmada zorluk muhtemel',
    sleepSevere: 'Şiddetli etki - bu gece kötü uyku kalitesi bekleyin',

    nextCaffeineTitle: 'Sonraki Kafein Önerisi',
    nextCaffeineNow: 'Şimdi daha fazla kafein tüketebilirsiniz',
    nextCaffeineWait: 'En az',
    nextCaffeineBefore: 'bekleyin daha fazla kafein tüketmeden önce',

    comparisonTitle: 'Nasıl Karşılaştırıyorsunuz',
    comparisonAvgAdult: 'Ortalama yetişkin günde 200-300mg tüketir',
    comparisonYouConsumed: 'Siz tükettiniz',
    comparisonHigher: 'ortalamadan yüksek',
    comparisonLower: 'ortalamadan düşük',
    comparisonSame: 'ortalama seviyede',

    // Extended Educational Content (Turkish)
    whatIsCaffeine: 'Kafein Nedir?',
    whatIsCaffeineText: `Kafein, dünyada en yaygın tüketilen psikoaktif maddedir ve doğal olarak kahve çekirdeklerinde, çay yapraklarında, kakao meyvelerinde ve çeşitli bitkilerde bulunur. Merkezi sinir sistemi uyarıcısı olan kafein, öncelikle beyindeki adenozin reseptörlerini bloke ederek çalışır. Adenozin, uykuyu ve rahatlamayı teşvik eden bir nörotransmitterdir, bu nedenle kafein bu reseptörleri bloke ettiğinde uykululuğu önler ve uyanıklığı artırır.

Kimyasal olarak 1,3,7-trimetilksantin olarak bilinen kafein, metilksantin bileşikler sınıfına aittir. Gastrointestinal kanaldan hızla emilir ve tüketimden 30-60 dakika sonra kanda en yüksek konsantrasyona ulaşır. Emildikten sonra vücuda dağılır ve kan-beyin bariyerini kolayca geçerek uyarıcı etkilerini gösterir.

Adenozini bloke etmenin ötesinde, kafein dopamin ve norepinefrin gibi nörotransmitterlerin salınımını da artırarak ruh halinin iyileşmesine, bilişsel performansın artmasına ve fiziksel dayanıklılığın gelişmesine katkıda bulunur. Bu etkiler, kafeini dünya çapında en popüler performans arttırıcılardan biri yapar ve milyarlarca insan tarafından günlük olarak tüketilir.`,

    howCalculatorWorks: 'Bu Kafein Hesaplayıcı Nasıl Çalışır',
    calculatorMethodology: `Kafein hesaplayıcımız, vücudunuzdaki kafein seviyelerini tahmin etmek için bilimsel olarak doğrulanmış farmakokinetik ilkeleri kullanır. Hesaplama birkaç temel faktöre dayanır:

**1. Kafein Yarı Ömrü:** Birincil mekanizma yarı ömür ilkesidir. Kafein, sağlıklı yetişkinlerde ortalama 5 saatlik bir yarı ömre sahiptir, yani her 5 saatte vücuttaki kafeinin yarısı metabolize edilir ve atılır. Ancak bu, genetik, karaciğer fonksiyonu, ilaçlar ve sigara içme durumu gibi bireysel faktörlere bağlı olarak 3 ila 7 saat arasında değişebilir.

**2. Kişiselleştirilmiş Günlük Limitler:** Hesaplayıcı, güvenli günlük kafein limitinizi şu faktörlere göre belirler:
   - Yaş: Çocuklar ve gençler için daha düşük limitler (vücut ağırlığı başına 3mg, maksimum 100mg)
   - Kilo: Daha ağır bireyler genellikle daha fazla kafeini tolere edebilir
   - Hamilelik durumu: Hamile kadınlar günde 200mg ile sınırlamalıdır (WHO önerisi)
   - Yetişkinler: Standart limit günde 400mg'dır (FDA önerisi)

**3. Zamana Dayalı Hesaplama:** Her kafein kaynağını ne zaman tükettiğinizi takip ederek, hesaplayıcı üstel bozunma formülünü uygular:
   Mevcut Kafein = Başlangıç Miktarı × (0.5)^(geçen süre / yarı ömür)

Bu formül, herhangi bir zamanda sisteminizde ne kadar kafein kaldığını doğru şekilde tahmin eder.

**4. Uyku Etkisi Değerlendirmesi:** Hesaplayıcı, yatmadan 6-8 saat önce kafein tüketiminden kaçınmanızı önerir, çünkü kafein bilinçli olarak fark etmeseniz bile uyku yapısını önemli ölçüde bozabilir. Araştırmalar, yatmadan 6 saat önce bile tüketilen kafeinin toplam uyku süresini bir saatten fazla azaltabileceğini göstermektedir.`,

    understandingResults: 'Sonuçlarınızı Anlamak',
    resultsInterpretation: `**Toplam Tüketilen Kafein:** Bu, izlenen dönemde aldığınız kümülatif kafein miktarını temsil eder. Bunun vücudunuzda şu anda aktif olan miktardan farklı olduğunu unutmayın.

**Vücuttaki Mevcut Kafein:** Bu en önemli ölçümdür. Yarı ömür eliminasyon hızına göre şu anda kan dolaşımınızda dolaşan kafein miktarını gösterir. 10 saat önce 300mg kafein tüketmiş olsanız bile, sisteminizde yalnızca yaklaşık 75mg aktif kalır.

**Günlük Limitin Yüzdesi:** Bu metrik, önerilen güvenli limitlere göre nerede durduğunuzu anlamanıza yardımcı olur. Yorumlama:
   - %0-50: Güvenli bölge - Normal etkiler beklenir
   - %50-80: Orta bölge - Yan etkileri izleyin
   - %80-100: Yüksek bölge - Maksimum güvenli alıma yaklaşıyor
   - %100-150: Aşırı bölge - Yan etkiler muhtemel
   - %150+: Tehlikeli bölge - Kafein toksisitesi riski

**Güvenlik Durumu Seviyeleri:**

*Güvenli (Yeşil):* Sağlıklı limitler içindesiniz. Bu seviyedeki kafein tipik olarak önemli yan etkiler olmadan uyanıklığı, konsantrasyonu ve fiziksel performansı artırır.

*Orta (Sarı):* Orta miktarda tüketiyorsunuz. Bazı kişiler hafif titreme, hafif anksiyete veya gün içinde geç saatte tüketilirse uyku güçlüğü yaşayabilir.

*Yüksek (Turuncu):* Günlük limitinize yaklaşıyor veya limittesiniz. Huzursuzluk, hızlı kalp atışı ve uyku bozukluğu gibi yan etkiler daha olası hale gelir.

*Aşırı (Kırmızı):* Önerilen limitleri aştınız. Baş ağrısı, anksiyete, sindirim rahatsızlığı, hızlı kalp atışı ve şiddetli uyku bozukluğu gibi yaygın yan etkiler görülür.

*Tehlikeli (Koyu Kırmızı):* Kafein toksisitesi riski altındasınız. Semptomlar arasında şiddetli çarpıntı, titreme, bulantı, kusma ve nadir durumlarda nöbetler olabilir. Şiddetli semptomlar yaşarsanız tıbbi yardım alın.`,

    caffeineMetabolism: 'Kafein Metabolizması ve Bireysel Farklılıklar',
    metabolismText: `Kafein metabolizması bireyler arasında önemli ölçüde değişir, bu öncelikle karaciğer enzimleri, özellikle CYP1A2'deki genetik farklılıklardan kaynaklanır. Bu enzim kafein metabolizmasının yaklaşık %95'inden sorumludur. Bazı insanlar kafeini hızla parçalayan "hızlı metabolize edenler" (3-4 saatlik yarı ömür) iken, "yavaş metabolize edenler" tükettikleri kafeinin yarısını atmaları 7-9 saat sürebilir.

**Kafein Metabolizmasını Etkileyen Faktörler:**

1. **Genetik:** CYP1A2 geninin enzim aktivitesini etkileyen çeşitli varyantları vardır. Hızlı metabolize edenler daha az yan etki ile daha fazla kafein tüketebilirken, yavaş metabolize edenler daha hassastır.

2. **İlaçlar:** Birçok ilaç CYP1A2'yi inhibe ederek kafeinin etkilerini uzatır. Yaygın suçlular arasında belirli antibiyotikler (siprofloksasin), antidepresanlar (fluvoksamin) ve doğum kontrol hapları bulunur.

3. **Sigara İçmek:** Sigara içenler kafeini sigara içmeyenlerden yaklaşık %50 daha hızlı metabolize ederek aynı etkiler için daha yüksek dozlar gerektirir.

4. **Hamilelik:** Kafein metabolizması hamilelik sırasında önemli ölçüde yavaşlar, yarı ömür üçüncü trimesterde 10-18 saate çıkar. Bu nedenle hamile kadınların günlük alımlarını 200mg ile sınırlamaları önerilir.

5. **Karaciğer Sağlığı:** Siroz gibi karaciğer hastalıkları kafein temizlenmesini önemli ölçüde yavaşlatır, bazen yarı ömrü 96 saat veya daha fazlaya uzatır.

6. **Yaş:** Yenidoğanlar ve yaşlı bireyler genellikle kafeini genç ve orta yaşlı yetişkinlerden daha yavaş metabolize eder.`,

    healthEffects: 'Kafeinin Sağlık Etkileri',
    healthEffectsPositive: `**Olumlu Etkiler:**

- **Bilişsel Gelişim:** Uyanıklığı, konsantrasyonu, reaksiyon süresini ve hafıza pekişmesini iyileştirir
- **Fiziksel Performans:** Dayanıklılığı %2-4 artırır, yağ oksidasyonunu geliştirir ve algılanan çabayı azaltır
- **Ruh Hali İyileştirme:** Ruh halini yükseltir ve ılımlı düzenli tüketimle depresyon riskini azaltabilir
- **Nöroproteksiyon:** Düzenli kafein tüketimi Parkinson hastalığı ve Alzheimer hastalığı riski azalması ile ilişkilidir
- **Karaciğer Sağlığı:** Kahve tüketimi karaciğer sirozu ve karaciğer kanseri riski azalması ile bağlantılıdır
- **Metabolik Faydalar:** Metabolizma hızını %3-11 artırabilir ve insülin duyarlılığını iyileştirebilir`,

    healthEffectsNegative: `**Potansiyel Olumsuz Etkiler:**

- **Uyku Bozukluğu:** Uyku başlangıcını geciktirir, toplam uyku süresini azaltır ve derin uyku kalitesini düşürür
- **Anksiyete:** Özellikle hassas bireylerde veya yüksek dozlarda anksiyete semptomlarını tetikleyebilir veya kötüleştirebilir
- **Sindirim Sorunları:** Bazı insanlarda asit reflüye, mide rahatsızlığına veya ishale neden olabilir
- **Kardiyovasküler Etkiler:** Geçici olarak kan basıncını ve kalp hızını artırır; çarpıntıya neden olabilir
- **Bağımlılık:** Düzenli kullanım tolerans ve yoksunluk semptomlarına (baş ağrısı, yorgunluk, sinirlilik) yol açar
- **Kemik Sağlığı:** Yüksek alım kalsiyum emilimini engelleyebilir, potansiyel olarak kemik yoğunluğunu etkileyebilir
- **Hamilelik Endişeleri:** Hamilelik sırasında yüksek alım artmış düşük riski ile ilişkilidir`,

    recommendedLimits: 'Önerilen Günlük Limitler',
    limitAdults: 'Yetişkinler (18-64 yaş): Günde 400mg (FDA)',
    limitPregnant: 'Hamile kadınlar: Günde 200mg (WHO)',
    limitChildren: 'Çocuklar: Vücut ağırlığı başına 3mg (maksimum 100mg)',
    limitAdolescents: 'Gençler (12-18 yaş): Günde 100mg',
    limitElderly: 'Yaşlılar (65+ yaş): Günde 200-300mg (artan hassasiyet)',
    limitNursing: 'Emziren anneler: Günde 200-300mg',

    // FAQs (Turkish)
    faqTitle: 'Sık Sorulan Sorular',
    faq1Q: 'Kafein sisteminizde ne kadar kalır?',
    faq1A: `Kafein, sağlıklı yetişkinlerde yaklaşık 5 saatlik bir yarı ömre sahiptir, bu da saat 14:00'de 200mg kafein tüketirseniz, 19:00'da sisteminizde hala yaklaşık 100mg, gece yarısı 50mg ve sabah 05:00'de 25mg olacağı anlamına gelir. Ancak bu, bireysel faktörlere göre önemli ölçüde değişir. Kafeinin tam eliminasyonu (orijinal miktarın %10'undan azına ulaşması) tipik olarak 15-20 saat veya yaklaşık 3-4 yarı ömür sürer. Bu nedenle öğleden sonra içilen kahve, bilinçli olarak uyarıcı etkilerini hissetmeseniz bile gece uykumuzu etkileyebilir. Genetik, ilaçlar, sigara içme, hamilelik ve karaciğer sağlığı gibi faktörler bu zaman çizelgelerini önemli ölçüde değiştirebilir.`,

    faq2Q: 'Günde 400mg kafein gerçekten herkes için güvenli mi?',
    faq2A: `Günlük 400mg limiti, FDA tarafından belirlenen ve kapsamlı araştırmalarla desteklenen sağlıklı yetişkinler için genel bir kılavuzdur. Ancak "güvenli" görelidir ve bireysel faktörlere bağlıdır. Belirli sağlık sorunları olan kişiler daha az tüketmeli veya kafeininden tamamen kaçınmalıdır. Anksiyete bozuklukları, kalp aritmi, yüksek tansiyon veya GERD olanlar alımlarını 200mg veya daha aza sınırlamaları gerekebilir. Hamile kadınlar günde 200mg'ın altında kalmalıdır. Ek olarak, bazı bireyler genetik olarak kafeinin "yavaş metabolize edenleri"dir ve daha düşük dozlarda olumsuz etkiler yaşayabilirler. Anahtar, vücudunuzun sinyallerine dikkat etmektir - titreme, anksiyete, uyku sorunları veya sindirim problemleri yaşıyorsanız, kişisel güvenli limitiniz 400mg'dan düşük olabilir. Ayrıca, ani yüksek dozların (400mg'ı aynı anda tüketmek gibi) düzenli kafein kullanıcılarında bile akut yan etkilere neden olabileceğini belirtmekte fayda var.`,

    faq3Q: 'Kafeinine tolerans geliştirebilir misiniz?',
    faq3A: `Evet, düzenli kafein tüketimi toleransa yol açar ve tipik olarak tutarlı kullanımın 1-4 günü içinde gelişir. Tolerans, beyninizin kronik adenozin reseptör blokajına daha fazla adenozin reseptörü oluşturarak yanıt vermesi nedeniyle oluşur, bu da aynı blokaj etkisini elde etmek için esasen daha fazla kafein gerektirir. Bu, sabah kahvenizin başlangıçta önemli bir destek sağlayabileceği, ancak birkaç hafta sonra performansı artırmak yerine yalnızca yoksunluk semptomlarını önleyebileceği anlamına gelir. Tolerans, kafeinin bazı etkilerini diğerlerinden daha fazla etkiler - kan basıncı ve kalp hızı üzerindeki etkilerine güçlü tolerans geliştireceksiniz, ancak uyku bozukluğu etkilerine daha az tolerans. İlginç bir şekilde, 1-2 haftalık periyodik "kafein molaları" toleransınızı sıfırlayabilir ve tüketimi yeniden başlattığınızda kafeini daha etkili hale getirebilir. Birçok sporcu bu stratejiyi kullanır, antrenman sırasında kafeinden kaçınır ve maksimum performans faydaları için yarışmalardan önce stratejik olarak kullanır.`,

    faq4Q: 'Neden kafein yatmadan 6 saat önce tüketildiğinde bile uykuyu etkiler?',
    faq4A: `Kafeinin uykuyu bozan etkileri sadece "sizi uyanık tutmak"tan daha karmaşıktır. Araştırmalar, yatma saatinden 6 saat önce bile tüketilen kafeinin toplam uyku süresini bir saatten fazla azaltabileceğini ve öznel olarak normal uyuduğunuzu hissetseniz bile derin uyku (yavaş dalga uyku) kalitesini önemli ölçüde düşürebileceğini göstermektedir. Bu, kafeinin tüm uyku döneminiz boyunca adenozin reseptörlerini bloke etmesi nedeniyle olur. Adenozin, uyanıklık sırasında biriken önemli bir uyku teşvik edici nörotransmitterdir - "uyku basıncı" sisteminizin bir parçasıdır. Kafein adenozinin reseptörlerine bağlanmasını engellediğinde, normal uyku yapısını bozar ve aldığınız onarıcı derin uyku miktarını azaltır. Uykuya dalabilirsiniz, ancak uyku kaliteniz tehlikeye girer. Polisomnografi (uyku izleme) kullanan çalışmalar, insanların genellikle uykularının bozulduğunun bilinçli olarak farkında olmadıklarını, ancak nesnel ölçümlerin azalmış uyku kalitesini gösterdiğini ortaya koymaktadır. Bu nedenle uyku uzmanları, planladığınız yatma saatinden en az 6-8 saat önce kafein tüketiminden kaçınmanızı önerirler.`,

    faq5Q: 'Kafein aşırı dozunun belirtileri nelerdir ve ne yapmalıyım?',
    faq5A: `Kafein aşırı dozu, nadir olsa da oluşabilir ve tipik olarak kısa sürede 1.000mg'dan fazla tüketilmesini içerir. Semptomlar arasında hızlı veya düzensiz kalp atışı (çarpıntı), titreme, şiddetli anksiyete veya panik, bulantı ve kusma, kafa karışıklığı veya oryantasyon bozukluğu, göğüs ağrısı ve şiddetli durumlarda nöbetler bulunur. Şiddetli semptomlar, özellikle göğüs ağrısı veya nöbetler yaşarsanız, derhal acil tıbbi yardım alın. Hafif ila orta semptomlar (titreme, bulantı, hızlı kalp atışı) için kafein tüketimini durdurun, sisteminizden atılmasına yardımcı olmak için bol su için, anksiyeteyi sakinleştirmek için derin nefes egzersizleri deneyin ve rahat bir pozisyonda dinlenin. Tüketimden bir saat içinde alınırsa aktif kömür yardımcı olabilir, ancak yalnızca tıbbi gözetim altında kullanılmalıdır. Çoğu kafein aşırı dozu, vücut kafeini metabolize ettikçe birkaç saat içinde kendiliğinden çözülür, ancak semptomlar şiddetliyse veya son derece yüksek bir doz (birkaç gram) tükettiyseniz tıbbi değerlendirme önemlidir. Enerji shotları ve kafein hapları, kahvenin kademeli olarak yudumlananın aksine yüksek dozları hızlı bir şekilde verdikleri için özel riskler oluşturur. Her zaman etiketleri okuyun ve tüm kaynaklardan toplam günlük alımınızı takip edin.`,

    tips: 'Sağlıklı Kafein Tüketim İpuçları',
    tip1: 'Uyku bozukluğunu önlemek ve sağlıklı uyku yapısını korumak için yatmadan 6-8 saat önce kafein tüketiminden kaçının',
    tip2: 'İyi hidrate kalın - kafein, su alımı yetersizse dehidrasyona yol açabilen hafif bir diüretik etkiye sahiptir',
    tip3: 'Kafein alımınızı istikrarlı enerji seviyeleri sürdürmek için gün boyunca yayın, hepsini aynı anda tüketmeyin',
    tip4: 'İlaçlar (ağrı kesiciler, kilo kaybı hapları), enerji barları ve çikolata dahil gizli kafein kaynaklarının farkında olun',
    tip5: 'Titreme, anksiyete veya uyku sorunları yaşarsanız, alımınızı azaltın ve periyodik kafein molaları vermeyi düşünün',
    tip6: 'Kronik uyku yoksunluğunu telafi etmek için kafein kullanmayın - bunun yerine yeterli uyku almayı önceliklendirin',
    tip7: 'Kişisel kafein metabolizma hızınızı anlamak için CYP1A2 varyantları için genetik test yaptırmayı düşünün',
    tip8: 'Kafeini alkol ile karıştırmaktan kaçının - alkolün baskılayıcı etkilerini maskeleyerek tehlikeli aşırı tüketime yol açabilir',

    // Scientific methodology (Turkish)
    methodology: 'Bilimsel Metodoloji',
    methodologyText: `**Farmakokinetik Model:**

Hesaplayıcımız, kafein metabolizması için standart model olan birinci dereceden eliminasyon kinetiği kullanır. Temel denklem şudur:

C(t) = C₀ × e^(-kt)

Burada:
- C(t) = t zamanındaki konsantrasyon
- C₀ = başlangıç konsantrasyonu
- k = eliminasyon hız sabiti = ln(2)/t₁/₂
- t₁/₂ = yarı ömür (varsayılan 5 saat)

Pratik hesaplamalar için basitleştirilmiş yarı ömür formülünü kullanırız:
Mevcut Miktar = Başlangıç Miktarı × (0.5)^(geçen süre / yarı ömür)

**Dağılım Hacmi:**
Kafein toplam vücut suyuna dağılır, vücut ağırlığı başına yaklaşık 0.6-0.7 L/kg. Bu kişiselleştirme faktörü, bireysel vücut kompozisyonuna göre önerileri ayarlamaya yardımcı olur.

**Güvenlik Eşiği Hesaplamaları:**
Günlük limitler şuradan türetilir:
1. FDA kılavuzları (yetişkinler için 400mg)
2. WHO hamilelik önerileri (200mg)
3. Pediatrik kılavuzlar (vücut ağırlığı başına 3mg)
4. Avrupa Gıda Güvenliği Otoritesi (EFSA) görüşleri

**Doğrulama:**
Modelimiz, yayınlanmış farmakokinetik çalışmalara karşı doğrulanmış ve hakemli tıbbi literatürden klinik kafein klirensi verileri ile uyumludur.`,

    references: 'Referanslar ve Bilimsel Kaynaklar',
    reference1: '1. Nehlig A. (2016). Kahve/kafeinin beyin sağlığı ve hastalığı üzerindeki etkileri: Hastalarıma ne söylemeliyim? Practical Neurology, 16(2), 89-95.',
    reference2: '2. Cappelletti S., Piacentino D., Sani G., Aromatario M. (2015). Kafein: bilişsel ve fiziksel performans arttırıcı mı yoksa psikoaktif ilaç mı? Current Neuropharmacology, 13(1), 71-88.',
    reference3: '3. Drake C., Roehrs T., Shambroom J., Roth T. (2013). Yatmadan 0, 3 veya 6 saat önce alınan kafeinin uyku üzerindeki etkileri. Journal of Clinical Sleep Medicine, 9(11), 1195-1200.',
    reference4: '4. Blanchard J., Sawers S.J. (1983). İnsanda kafeinin mutlak biyoyararlanımı. European Journal of Clinical Pharmacology, 24(1), 93-98.',
    reference5: '5. Grosso G., Godos J., Galvano F., Giovannucci E.L. (2017). Kahve, kafein ve sağlık sonuçları: bir şemsiye inceleme. Annual Review of Nutrition, 37, 131-156.',
    reference6: '6. Temple J.L., Bernard C., Lipshultz S.E., et al. (2017). Alınan Kafeinin Güvenliği: Kapsamlı Bir İnceleme. Frontiers in Psychiatry, 8, 80.',
    reference7: '7. ABD Gıda ve İlaç Dairesi. (2018). Kahveyi Dökmek: Ne Kadar Kafein Çok Fazladır? FDA Tüketici Sağlık Bilgileri.',
    reference8: '8. Dünya Sağlık Örgütü. (2016). Maternal kafein tüketimi ve hamilelik sonuçları: bir anlatı incelemesi. BMC Medicine, 14, 174.',

    disclaimer: 'Tıbbi Feragatname',
    disclaimerText: `Bu kafein hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Genel farmakokinetik ilkelere dayalı tahminler sağlar ve tıbbi tavsiye olarak kabul edilmemelidir. Kafeinine bireysel tepkiler, herhangi bir hesaplayıcıda tam olarak hesaba katılamayan genetik faktörler, sağlık durumları, ilaçlar ve diğer değişkenler nedeniyle önemli ölçüde değişir.

**Önemli Uyarılar:**

- Özellikle kalp rahatsızlığınız, anksiyete bozukluğunuz, yüksek tansiyon, diyabet, GERD varsa veya hamile veya emziriyorsanız, kafein tüketiminizde önemli değişiklikler yapmadan önce bir sağlık uzmanına danışın.
- Bu hesaplayıcı profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini almaz.
- Kafein ilaçları ve tıbbi durumları etkiler - herhangi bir ilaç alıyorsanız veya sağlık endişeleriniz varsa kafein alımınızı doktorunuzla görüşün.
- Bireysel kafein hassasiyeti büyük ölçüde değişir - bazı insanlar önerilen limitlerden çok daha düşük seviyelerde olumsuz etkiler yaşayabilir.
- Şiddetli semptomlar (göğüs ağrısı, düzensiz kalp atışı, şiddetli anksiyete, nöbetler) yaşarsanız, derhal tıbbi yardım alın.

Bu hesaplayıcıyı kullanarak, bu sınırlamaları anladığınızı ve kişiselleştirilmiş tıbbi tavsiye için sağlık uzmanlarıyla görüşeceğinizi kabul ediyorsunuz.`,
  },
};
