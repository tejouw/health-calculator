export const petAgeContent = {
  en: {
    title: 'Pet Age Calculator',
    description: 'Calculate your pet\'s age in human years with scientific accuracy',

    // Required ContentSection properties
    whatIs: 'The Pet Age Calculator is a scientifically-backed tool that converts your pet\'s age into human years using validated formulas from the American Veterinary Medical Association (AVMA). Unlike the outdated "multiply by 7" rule, this calculator accounts for species-specific aging patterns, breed size (for dogs), and other factors that affect how pets age compared to humans.',
    howToCalculate: 'Enter your pet\'s type (dog, cat, rabbit, hamster, bird, or guinea pig), their current age in years and months, and for dogs, select their size category. The calculator uses AVMA-approved formulas: for cats, the first year equals 15 human years, the second year adds 9 more (total 24), then each year adds 4. For dogs, the formula adjusts based on size, with smaller breeds aging more slowly than giant breeds after the first two years.',

    // Form labels
    petTypeLabel: 'Select Your Pet Type',
    petTypes: {
      dog: 'Dog',
      cat: 'Cat',
      rabbit: 'Rabbit',
      hamster: 'Hamster',
      bird: 'Bird',
      'guinea-pig': 'Guinea Pig',
    },
    petNameLabel: 'Pet Name',
    petNamePlaceholder: 'e.g., Max, Luna, Fluffy',
    optional: 'Optional',
    ageLabel: 'Pet Age',
    ageYearsLabel: 'Years',
    ageMonthsLabel: 'Months',
    dogSizeLabel: 'Dog Size',
    smallDog: 'Small (<20 lbs / <9 kg)',
    mediumDog: 'Medium (21-50 lbs / 10-23 kg)',
    largeDog: 'Large (51-90 lbs / 24-41 kg)',
    giantDog: 'Giant (>90 lbs / >41 kg)',
    weightLabel: 'Weight',
    weightUnit: 'in kilograms (kg)',
    activityLevelLabel: 'Activity Level',
    activityLevels: {
      low: 'Low',
      moderate: 'Moderate',
      high: 'High',
    },
    indoorLabel: 'Indoor pet (lives inside)',
    indoorDescription: 'Indoor pets typically live longer',
    neuteredLabel: 'Spayed/Neutered',
    calculateButton: 'Calculate Pet Age',

    // Errors
    errorAge: 'Please enter your pet\'s age',
    errorAgeRange: 'Please enter a valid age (0-30 years)',
    errorMonthsRange: 'Months must be between 0-11',

    // Results
    humanAgeLabel: 'Human Age Equivalent',
    years: 'years old',
    yearsShort: 'years',
    lifespanProgress: 'Lifespan Progress',
    expectedLifespan: 'Expected Lifespan',

    // Interactive sections
    healthTipsTitle: '🏥 Health Tips for This Age',
    nutritionTipsTitle: '🍽️ Nutrition Recommendations',
    exerciseTipsTitle: '💪 Exercise Guidelines',
    funFactsTitle: '🎉 Fun Facts About Your Pet',
    milestonesTitle: '📅 Age Milestones',
    vetScheduleTitle: '🩺 Veterinary Care Schedule',
    healthIssuesTitle: '⚠️ Common Health Issues',
    personalityTitle: '🎭 Personality Traits',
    socialNeedsTitle: '👥 Social Needs',
    trainingTipsTitle: '🎓 Training Tips',

    // Vet schedule labels
    frequency: 'Visit Frequency',
    checkups: 'Check-ups',
    vaccinations: 'Vaccinations',
    screenings: 'Health Screenings',

    // Educational content sections
    educationalContentTitle: 'Educational Content',
    howItWorksTitle: 'How the Pet Age Calculator Works',
    howItWorksContent: `Our advanced pet age calculator uses scientifically-backed formulas from the American Veterinary Medical Association (AVMA) to convert your pet's age into human years with unprecedented accuracy.

Unlike the outdated "multiply by 7" rule for dogs, our calculator recognizes that pets age at different rates depending on multiple factors:

**For Dogs:** We account for breed size because smaller dogs live longer than larger breeds. A Chihuahua might live 15-20 years, while a Great Dane typically lives 7-10 years. The calculation considers that dogs age rapidly in their first two years (reaching young adulthood), then age more gradually at rates varying by size.

**For Cats:** The formula reflects how cats mature quickly to adulthood in their first two years, then age approximately 4 human years for each subsequent year. Indoor cats live significantly longer than outdoor cats (12-18 years vs 2-5 years).

**For Small Mammals:** Rabbits, hamsters, and guinea pigs have unique aging patterns. Hamsters, for instance, live only 2-3 years but experience life stages comparable to humans living 80+ years.

**For Birds:** Parrots and other pet birds can live extraordinarily long lives—some species over 80 years—so their aging calculation differs dramatically from mammals.

Our calculator goes beyond simple age conversion. It determines your pet's life stage (baby, young adult, mature, senior, or geriatric) and provides customized health recommendations for each stage. We factor in whether your pet is spayed/neutered (which typically extends lifespan), indoor vs outdoor living (dramatically affecting cats and rabbits), activity level, and even weight when provided.

The result is a comprehensive health profile that helps you understand where your pet is in their life journey and what care they need at this specific age.`,

    formulaTitle: 'The Science Behind Pet Aging Formulas',
    formulaContent: `The traditional "multiply by 7" rule for dog years has been thoroughly debunked by modern veterinary science. Research published in the American Journal of Veterinary Research and endorsed by AVMA reveals that pets age at vastly different rates than this oversimplified formula suggests.

**Cat Aging Formula (AVMA-approved):**
• First year: 1 cat year = 15 human years
• Second year: 1 cat year = 9 human years (total: 24 human years)
• Each year after: 1 cat year = 4 human years

Example: A 5-year-old cat = 15 + 9 + (3 × 4) = 36 human years

This formula reflects how cats sexually mature around 6 months (comparable to human teenage years), reach full maturity by age 2, then age approximately 4 years for each calendar year.

**Dog Aging Formula (Size-Adjusted):**
The groundbreaking discovery is that dog size dramatically affects aging rate:

• First year: 1 dog year = 15 human years (all sizes)
• Second year: 1 dog year = 9 human years (total: 24 human years)
• Each year after:
  - Small breeds (<20 lbs): +4 human years per year
  - Medium breeds (21-50 lbs): +5 human years per year
  - Large breeds (51-90 lbs): +6 human years per year
  - Giant breeds (>90 lbs): +7 human years per year

Example: A 5-year-old medium dog = 15 + 9 + (3 × 5) = 39 human years
Example: A 5-year-old giant dog = 15 + 9 + (3 × 7) = 45 human years

**Why Size Matters:**
Research from the University of California San Diego (2019) revealed that larger dogs have faster cellular aging and higher growth rates. Large breeds grow from puppy to adult size much faster than small breeds, which correlates with earlier onset of age-related diseases. This is why a Great Dane may be considered geriatric at 7 years while a Chihuahua at 7 is still in its prime adult years.

**Small Mammal Formulas:**
Small pets age rapidly:
• Hamsters: Live 2-3 years; age approximately 25 human years per actual year
• Rabbits: Mature at 6 months, can live 8-12 years; first year = ~21 human years, then slower
• Guinea Pigs: Live 5-7 years; first year = ~18 human years

**Bird Formula:**
Birds age slowly; parrots can live 50-80+ years. Approximate formula: 1 bird year = 3-5 human years depending on species.

These formulas are based on comparative physiology, metabolic rates, and life expectancy data from thousands of veterinary health records.`,

    interpretingTitle: 'Understanding Your Pet\'s Life Stage and Human Age',
    interpretingContent: `Your pet's human age equivalent helps you understand their physical and mental development stage. Here's what each life stage means:

**Baby Stage (0-6 months):**
Human equivalent: Infancy through early childhood
This is the most critical developmental period. Your pet is learning everything about the world, forming lifelong habits, and developing their personality. They're growing rapidly and need specialized nutrition, frequent vet visits, and extensive socialization. For puppies and kittens, this is when the "socialization window" is open—expose them to many positive experiences now.

**Young Adult (6 months - 2 years):**
Human equivalent: Teenage years through early 20s
Your pet has reached sexual maturity and is testing boundaries. Energy levels are at their peak. This is when behavioral issues often emerge if not addressed. Perfect time for training and establishing good habits. Physically, they're approaching or at full size but still maturing mentally.

**Adult (2-7 years):**
Human equivalent: Mid-20s through 40s
The prime years! Your pet is fully mature, energetic, and in peak health. Personality is established, routines are set. Focus on maintaining ideal weight, regular vet check-ups, and keeping them mentally stimulated. This is typically the most stable and predictable period.

**Mature Adult (7-10 years):**
Human equivalent: Late 40s through 50s
The beginning of senior years. You may notice subtle changes: slightly less energy, graying fur (especially around the muzzle), more sleep. Vet visits should increase to twice yearly. Watch for early signs of arthritis, dental disease, or weight changes. Time to consider senior-specific diets.

**Senior (10-15 years):**
Human equivalent: 60s through 70s
Your pet is officially a senior citizen. Age-related conditions become more common: arthritis, kidney disease, heart conditions, dental disease. Require more frequent vet monitoring (every 3-4 months), possible medications, and environmental modifications like ramps or softer bedding. Still enjoy life but at a gentler pace.

**Geriatric (15+ years):**
Human equivalent: 80s and beyond
Your pet has beaten the odds and deserves special care. Focus shifts to quality of life and comfort. May need help with basic functions like climbing stairs or getting to food/water. Frequent vet visits, possible palliative care, and lots of love and patience. Every day is precious.

**Activity Level Impact:**
Active pets often "age" better—maintaining mobility, healthy weight, and mental sharpness longer. Sedentary pets may show age-related decline earlier.

**Indoor vs Outdoor:**
Indoor cats live 3-4 times longer than outdoor cats. The same pattern holds for rabbits and small pets. Protection from predators, parasites, diseases, and accidents dramatically extends lifespan.`,

    lifestagesTitle: 'Detailed Life Stage Care Guidelines',
    lifestagesContent: `Each life stage has specific care requirements. Here's your comprehensive guide:

**BABY STAGE CARE:**
Nutrition: High-protein, nutrient-dense food formulated for growth. Feed 3-4 small meals daily. Ensure constant access to fresh water.

Health: Vaccination schedule (6-16 weeks). Deworming. Parasite prevention. Weekly weight checks. Spay/neuter consultation around 4-6 months.

Exercise: Short play sessions (5-10 minutes) several times daily. Avoid over-exercising growing bones and joints.

Training: Basic commands, house training, socialization with people and pets. Positive reinforcement only.

Environment: Baby-proof home, remove dangers, provide safe exploration spaces.

**YOUNG ADULT CARE:**
Nutrition: Transition to adult formula around 12 months. Two meals daily. Monitor portions to prevent obesity.

Health: Annual wellness exams. Complete vaccinations. Consider spay/neuter if not done. Dental care routine.

Exercise: 30-60 minutes daily (varies by breed). High-energy activities, mental stimulation games.

Training: Reinforce basic commands. Address any behavioral issues early. Leash manners, socialization continues.

Environment: Establish routines. Plenty of toys and enrichment.

**ADULT STAGE CARE:**
Nutrition: Balanced adult diet. Adjust calories based on activity level. Healthy treats (<10% daily calories).

Health: Annual vet visits. Dental cleanings as recommended. Monitor weight. Breed-specific health screenings.

Exercise: Regular daily activity. Mix of physical and mental stimulation. Maintain healthy weight.

Training: Maintain learned behaviors. Teach new tricks for mental enrichment.

Environment: Consistent routines. Regular socialization.

**MATURE ADULT CARE:**
Nutrition: Consider senior formula. May need fewer calories. Joint support supplements (glucosamine/chondroitin).

Health: Increase vet visits to twice yearly. Blood work to screen for kidney, liver, thyroid issues. Watch for arthritis signs.

Exercise: Moderate activity. Low-impact options like swimming. Adjust intensity based on comfort.

Training: Keep mind active with puzzle toys. Adapt to any physical limitations.

Environment: Orthopedic bedding. Ramps if needed. Watch for mobility issues.

**SENIOR STAGE CARE:**
Nutrition: Senior diet formula. Softer food if dental issues. Smaller, more frequent meals. Hydration monitoring.

Health: Vet visits every 3-4 months. Comprehensive blood panels. Cancer screenings. Pain management. Cognitive function monitoring.

Exercise: Gentle, short walks. Passive range-of-motion exercises. Swimming for low-impact cardio.

Training: Mental enrichment to slow cognitive decline. Simple games.

Environment: Easy access to food, water, litter/potty areas. Non-slip surfaces. Warmth (less able to regulate temperature). Night lights if vision declining.

**GERIATRIC CARE:**
Nutrition: Highly palatable food. Warm food to enhance aroma. Hand-feeding if appetite low. Focus on comfort.

Health: Frequent monitoring (monthly or as needed). Quality of life assessments. Palliative care. Pain management priority.

Exercise: Very gentle movement only. Focus on comfort, not intensity.

Training: Maintain simple, familiar routines to reduce confusion.

Environment: Everything easily accessible. Soft, warm bedding. Minimal stressors. Lots of love and patience.

**SPECIAL CONSIDERATIONS:**

Spayed/Neutered Pets: May need 20-30% fewer calories. Reduced risk of certain cancers. Generally live 1-2 years longer.

Indoor vs Outdoor: Indoor pets need environmental enrichment to prevent boredom. Outdoor supervision recommended for safety.

Multiple Pets: Senior pets may need separate quiet spaces. Adjust group dynamics as energy levels change.

Weight Management: Obesity dramatically shortens lifespan and worsens age-related conditions. Maintain ideal weight throughout life.`,

    faqTitle: 'Frequently Asked Questions',
    faqs: [
      {
        question: 'Is the "multiply by 7" rule accurate for calculating dog years?',
        answer: 'No, the traditional "multiply by 7" rule is outdated and scientifically inaccurate. Modern veterinary research shows dogs age much faster in their first two years (reaching the equivalent of human mid-20s by age 2), then age more gradually. Additionally, breed size dramatically affects aging rate—smaller dogs live longer and age more slowly than giant breeds. Our calculator uses the scientifically-validated AVMA formula that accounts for these factors.',
      },
      {
        question: 'Why do indoor cats live so much longer than outdoor cats?',
        answer: 'Indoor cats typically live 12-18 years, while outdoor cats average only 2-5 years. The dramatic difference is due to outdoor cats facing constant dangers: traffic accidents, predators (coyotes, dogs, large birds), infectious diseases (FIV, FeLV), parasites, poisoning, and extreme weather. Indoor cats avoid these risks while maintaining optimal nutrition and veterinary care. Even indoor/outdoor cats have shorter lifespans than strictly indoor cats.',
      },
      {
        question: 'At what age is my pet considered a senior?',
        answer: 'It varies by species and size. Dogs: Generally 7 years, but small breeds 10-12 years, giant breeds 5-6 years. Cats: Around 11 years. Rabbits: 6-7 years. Hamsters: 1.5 years. Birds (parrots): 10-15 years depending on species. Senior status means increased vet visits, age-related health screenings, and potential diet adjustments. Your veterinarian can provide guidance specific to your pet.',
      },
      {
        question: 'How can I help my pet live longer and healthier?',
        answer: 'The keys to pet longevity are: (1) Maintain healthy weight through proper diet and exercise—obesity is the #1 preventable cause of shortened lifespan. (2) Regular veterinary care with preventive screenings catches problems early. (3) Dental hygiene prevents systemic disease. (4) Mental stimulation keeps cognitive function sharp. (5) Safe environment (indoor living for cats/small pets). (6) Quality nutrition appropriate for life stage. (7) Spay/neuter (reduces cancer risk, extends life). (8) Love and enrichment for emotional wellbeing.',
      },
      {
        question: 'Why do smaller dogs live longer than larger dogs?',
        answer: 'This fascinating phenomenon relates to accelerated cellular aging in larger breeds. Large dogs grow from puppy to adult size much faster than small breeds, which appears to contribute to earlier onset of age-related diseases. Research suggests larger dogs have faster cell turnover and higher metabolic demands. Their organs age faster relative to body size. A small dog like a Chihuahua may live 15-20 years, while a Great Dane typically lives only 7-10 years. The exact biological mechanisms are still being studied.',
      },
      {
        question: 'Does spaying/neutering affect my pet\'s lifespan?',
        answer: 'Yes, positively! Studies show spayed/neutered pets live 1-2 years longer on average than intact pets. Benefits include: eliminated risk of reproductive cancers (ovarian, uterine, testicular), reduced risk of mammary cancer (90% reduction if spayed before first heat), reduced roaming/fighting injuries, no pyometra (life-threatening uterine infection), and behavioral benefits. The optimal timing varies by species and breed—consult your vet for personalized recommendations.',
      },
      {
        question: 'Can I use this calculator for exotic pets?',
        answer: 'Our calculator covers dogs, cats, rabbits, hamsters, guinea pigs, and common pet birds (parakeets, cockatiels, small parrots). For other exotic pets (ferrets, hedgehogs, reptiles, large parrots), lifespan and aging vary greatly by species. Consult an exotic animal veterinarian for species-specific aging information. The calculator provides estimates based on average lifespans—individual variation is significant.',
      },
      {
        question: 'My pet\'s human age seems very high/low. Is this accurate?',
        answer: 'The calculation is based on veterinary science, but remember it\'s an approximation comparing different species. A 15-year-old cat (76 human years) may seem "old" but many cats this age are still active and healthy. Conversely, a 2-year-old dog (24 human years) is behaviorally more mature than a human 24-year-old. The number helps contextualize life stage and health needs rather than perfectly mirroring human aging. Individual genetics, care, and lifestyle create significant variation.',
      },
    ],

    disclaimerTitle: 'Important Disclaimer',
    disclaimerContent: 'This pet age calculator provides general estimates based on scientific veterinary formulas and average lifespan data. Individual pets may age differently based on genetics, breed-specific factors, quality of care, nutrition, environment, and health conditions. Results are for informational and entertainment purposes only and should not replace professional veterinary advice. Always consult with your veterinarian for personalized health guidance, age-appropriate care recommendations, and any health concerns about your pet. If you suspect your pet has a medical issue, seek immediate veterinary attention.',

    referencesTitle: 'References and Sources',
    references: [
      'American Veterinary Medical Association (AVMA) - Pet Age Guidelines and Life Stage Definitions',
      'University of California San Diego - Dog Aging Research (Cell Systems, 2019)',
      'American Animal Hospital Association (AAHA) - Canine and Feline Life Stage Guidelines',
      'Cornell University College of Veterinary Medicine - Feline Health Center Age Studies',
      'Journal of Veterinary Internal Medicine - Longevity and Aging Research in Companion Animals',
      'Morris Animal Foundation - Golden Retriever Lifetime Study (Pet Longevity Research)',
      'International Cat Care - Feline Life Stages and Preventive Healthcare',
      'Association of American Veterinary Medical Colleges - Comparative Aging Studies',
    ],
  },

  tr: {
    title: 'Evcil Hayvan Yaşı Hesaplayıcı',
    description: 'Evcil hayvanınızın insan yıllarındaki yaşını bilimsel doğrulukla hesaplayın',

    // Required ContentSection properties
    whatIs: 'Evcil Hayvan Yaşı Hesaplayıcı, American Veterinary Medical Association (AVMA) tarafından doğrulanmış formüller kullanarak evcil hayvanınızın yaşını insan yıllarına dönüştüren bilimsel olarak desteklenmiş bir araçtır. Güncelliğini yitirmiş "7 ile çarp" kuralının aksine, bu hesaplayıcı türe özgü yaşlanma kalıplarını, ırk büyüklüğünü (köpekler için) ve evcil hayvanların insanlara kıyasla nasıl yaşlandığını etkileyen diğer faktörleri dikkate alır.',
    howToCalculate: 'Evcil hayvanınızın türünü (köpek, kedi, tavşan, hamster, kuş veya ginepigi), mevcut yaşını yıl ve ay cinsinden girin ve köpekler için büyüklük kategorilerini seçin. Hesaplayıcı AVMA onaylı formüller kullanır: kediler için ilk yıl 15 insan yılına eşittir, ikinci yıl 9 daha ekler (toplam 24), sonra her yıl 4 ekler. Köpekler için formül büyüklüğe göre ayarlanır, küçük ırklar ilk iki yıldan sonra dev ırklardan daha yavaş yaşlanır.',

    // Form labels
    petTypeLabel: 'Evcil Hayvan Türünüzü Seçin',
    petTypes: {
      dog: 'Köpek',
      cat: 'Kedi',
      rabbit: 'Tavşan',
      hamster: 'Hamster',
      bird: 'Kuş',
      'guinea-pig': 'Ginepigi',
    },
    petNameLabel: 'Evcil Hayvan İsmi',
    petNamePlaceholder: 'örn. Pamuk, Minnoş, Karamel',
    optional: 'İsteğe Bağlı',
    ageLabel: 'Evcil Hayvan Yaşı',
    ageYearsLabel: 'Yıl',
    ageMonthsLabel: 'Ay',
    dogSizeLabel: 'Köpek Büyüklüğü',
    smallDog: 'Küçük (<9 kg)',
    mediumDog: 'Orta (10-23 kg)',
    largeDog: 'Büyük (24-41 kg)',
    giantDog: 'Dev (>41 kg)',
    weightLabel: 'Ağırlık',
    weightUnit: 'kilogram (kg) cinsinden',
    activityLevelLabel: 'Aktivite Seviyesi',
    activityLevels: {
      low: 'Düşük',
      moderate: 'Orta',
      high: 'Yüksek',
    },
    indoorLabel: 'İç mekan evcil hayvanı (evde yaşıyor)',
    indoorDescription: 'İç mekan evcil hayvanları genellikle daha uzun yaşar',
    neuteredLabel: 'Kısırlaştırılmış',
    calculateButton: 'Yaşı Hesapla',

    // Errors
    errorAge: 'Lütfen evcil hayvanınızın yaşını girin',
    errorAgeRange: 'Lütfen geçerli bir yaş girin (0-30 yıl)',
    errorMonthsRange: 'Aylar 0-11 arasında olmalıdır',

    // Results
    humanAgeLabel: 'İnsan Yaşı Karşılığı',
    years: 'yaşında',
    yearsShort: 'yıl',
    lifespanProgress: 'Yaşam Süresi İlerlemesi',
    expectedLifespan: 'Beklenen Yaşam Süresi',

    // Interactive sections
    healthTipsTitle: '🏥 Bu Yaş İçin Sağlık Tavsiyeleri',
    nutritionTipsTitle: '🍽️ Beslenme Önerileri',
    exerciseTipsTitle: '💪 Egzersiz Rehberi',
    funFactsTitle: '🎉 Evcil Hayvanınız Hakkında Eğlenceli Bilgiler',
    milestonesTitle: '📅 Yaş Dönüm Noktaları',
    vetScheduleTitle: '🩺 Veteriner Bakım Programı',
    healthIssuesTitle: '⚠️ Yaygın Sağlık Sorunları',
    personalityTitle: '🎭 Kişilik Özellikleri',
    socialNeedsTitle: '👥 Sosyal İhtiyaçlar',
    trainingTipsTitle: '🎓 Eğitim Tavsiyeleri',

    // Vet schedule labels
    frequency: 'Ziyaret Sıklığı',
    checkups: 'Kontroller',
    vaccinations: 'Aşılar',
    screenings: 'Sağlık Taramaları',

    // Educational content sections
    educationalContentTitle: 'Eğitici İçerik',
    howItWorksTitle: 'Evcil Hayvan Yaşı Hesaplayıcı Nasıl Çalışır?',
    howItWorksContent: `Gelişmiş evcil hayvan yaşı hesaplayıcımız, evcil hayvanınızın yaşını benzersiz doğrulukla insan yıllarına dönüştürmek için American Veterinary Medical Association (AVMA) tarafından bilimsel olarak desteklenen formüller kullanır.

Köpekler için eski "7 ile çarp" kuralının aksine, hesaplayıcımız evcil hayvanların birden fazla faktöre bağlı olarak farklı hızlarda yaşlandığını kabul eder:

**Köpekler İçin:** Irk büyüklüğünü dikkate alıyoruz çünkü küçük köpekler büyük ırklardan daha uzun yaşar. Bir Chihuahua 15-20 yıl yaşayabilirken, bir Great Dane genellikle 7-10 yıl yaşar. Hesaplama, köpeklerin ilk iki yılda hızla yaşlandığını (genç yetişkinliğe ulaştıklarını), daha sonra büyüklüğe göre değişen oranlarda daha kademeli yaşlandıklarını göz önünde bulundurur.

**Kediler İçin:** Formül, kedilerin ilk iki yılda hızla yetişkinliğe nasıl olgunlaştıklarını, sonra her sonraki yıl için yaklaşık 4 insan yılı yaşlandıklarını yansıtır. İç mekan kedileri dış mekan kedilerinden önemli ölçüde daha uzun yaşar (12-18 yıl vs 2-5 yıl).

**Küçük Memeliler İçin:** Tavşanlar, hamsterlar ve ginepigların benzersiz yaşlanma kalıpları vardır. Örneğin hamsterlar sadece 2-3 yıl yaşarlar ancak 80+ yıl yaşayan insanlara benzer yaşam evrelerini deneyimlerler.

**Kuşlar İçin:** Papağanlar ve diğer evcil kuşlar olağanüstü uzun yaşayabilir—bazı türler 80 yılın üzerinde—bu nedenle yaşlanma hesaplamaları memelilerden çarpıcı biçimde farklıdır.

Hesaplayıcımız basit yaş dönüşümünün ötesine geçer. Evcil hayvanınızın yaşam evresini (yavru, genç yetişkin, olgun, yaşlı veya ileri yaş) belirler ve her evre için özelleştirilmiş sağlık önerileri sağlar. Evcil hayvanınızın kısırlaştırılıp kısırlaştırılmadığını (genellikle yaşam süresini uzatır), iç mekan vs dış mekan yaşamını (kedileri ve tavşanları çarpıcı biçimde etkiler), aktivite seviyesini ve hatta sağlandığında kilosunu dikkate alırız.

Sonuç, evcil hayvanınızın yaşam yolculuğunda nerede olduğunu ve bu belirli yaşta hangi bakıma ihtiyaç duyduğunu anlamanıza yardımcı olan kapsamlı bir sağlık profilidir.`,

    formulaTitle: 'Evcil Hayvan Yaşlanmasının Arkasındaki Bilim',
    formulaContent: `Köpek yılları için geleneksel "7 ile çarp" kuralı modern veteriner bilimi tarafından tamamen çürütülmüştür. American Journal of Veterinary Research'te yayınlanan ve AVMA tarafından onaylanan araştırma, evcil hayvanların bu aşırı basitleştirilmiş formülün önerdiğinden çok farklı oranlarda yaşlandığını ortaya koyuyor.

**Kedi Yaşlanma Formülü (AVMA onaylı):**
• İlk yıl: 1 kedi yılı = 15 insan yılı
• İkinci yıl: 1 kedi yılı = 9 insan yılı (toplam: 24 insan yılı)
• Sonraki her yıl: 1 kedi yılı = 4 insan yılı

Örnek: 5 yaşında bir kedi = 15 + 9 + (3 × 4) = 36 insan yılı

Bu formül, kedilerin yaklaşık 6 ayda cinsel olarak nasıl olgunlaştıklarını (insan ergenlik yıllarına benzer), 2 yaşında tam olgunluğa nasıl ulaştıklarını, sonra her takvim yılı için yaklaşık 4 yıl yaşlandıklarını yansıtır.

**Köpek Yaşlanma Formülü (Büyüklüğe Göre Ayarlanmış):**
Çığır açan keşif, köpek büyüklüğünün yaşlanma hızını çarpıcı biçimde etkilemesidir:

• İlk yıl: 1 köpek yılı = 15 insan yılı (tüm büyüklükler)
• İkinci yıl: 1 köpek yılı = 9 insan yılı (toplam: 24 insan yılı)
• Sonraki her yıl:
  - Küçük ırklar (<9 kg): yılda +4 insan yılı
  - Orta ırklar (10-23 kg): yılda +5 insan yılı
  - Büyük ırklar (24-41 kg): yılda +6 insan yılı
  - Dev ırklar (>41 kg): yılda +7 insan yılı

Örnek: 5 yaşında orta boy köpek = 15 + 9 + (3 × 5) = 39 insan yılı
Örnek: 5 yaşında dev köpek = 15 + 9 + (3 × 7) = 45 insan yılı

**Büyüklük Neden Önemlidir:**
University of California San Diego'dan (2019) yapılan araştırma, büyük köpeklerin daha hızlı hücresel yaşlanmaya ve daha yüksek büyüme oranlarına sahip olduğunu ortaya koydu. Büyük ırklar yavrudan yetişkin boyutuna küçük ırklardan çok daha hızlı büyür, bu da yaşa bağlı hastalıkların daha erken başlamasıyla ilişkilidir. Bu nedenle bir Great Dane 7 yaşında geriatrik olarak kabul edilebilirken, 7 yaşındaki bir Chihuahua hala yetişkin döneminin en güçlü yıllarındadır.

**Küçük Memeli Formülleri:**
Küçük evcil hayvanlar hızla yaşlanır:
• Hamsterlar: 2-3 yıl yaşar; gerçek yılı başına yaklaşık 25 insan yılı yaşlanır
• Tavşanlar: 6 ayda olgunlaşır, 8-12 yıl yaşayabilir; ilk yıl = ~21 insan yılı, sonra daha yavaş
• Ginepiglar: 5-7 yıl yaşar; ilk yıl = ~18 insan yılı

**Kuş Formülü:**
Kuşlar yavaş yaşlanır; papağanlar 50-80+ yıl yaşayabilir. Yaklaşık formül: türe bağlı olarak 1 kuş yılı = 3-5 insan yılı.

Bu formüller karşılaştırmalı fizyoloji, metabolik oranlar ve binlerce veteriner sağlık kaydından elde edilen yaşam beklentisi verilerine dayanmaktadır.`,

    interpretingTitle: 'Evcil Hayvanınızın Yaşam Evresini ve İnsan Yaşını Anlamak',
    interpretingContent: `Evcil hayvanınızın insan yaşı eşdeğeri, fiziksel ve zihinsel gelişim aşamasını anlamanıza yardımcı olur. İşte her yaşam evresinin anlamı:

**Yavru Evresi (0-6 ay):**
İnsan eşdeğeri: Bebeklikten erken çocukluğa
Bu en kritik gelişim dönemidir. Evcil hayvanınız dünya hakkında her şeyi öğreniyor, ömür boyu sürecek alışkanlıklar oluşturuyor ve kişiliğini geliştiriyor. Hızla büyüyorlar ve özel beslenme, sık veteriner ziyaretleri ve kapsamlı sosyalleşme ihtiyaçları var. Yavru köpekler ve kediler için bu "sosyalleşme penceresi"nin açık olduğu zamandır—şimdi onları birçok olumlu deneyime maruz bırakın.

**Genç Yetişkin (6 ay - 2 yıl):**
İnsan eşdeğeri: Ergenlik yıllarından 20'li yaşların başına
Evcil hayvanınız cinsel olgunluğa ulaştı ve sınırları test ediyor. Enerji seviyeleri zirvede. Bu, ele alınmazsa davranış sorunlarının sıklıkla ortaya çıktığı zamandır. Eğitim ve iyi alışkanlıklar oluşturmak için mükemmel zaman. Fiziksel olarak tam boyuta yaklaşıyorlar veya tam boyuttalar ancak zihinsel olarak hala olgunlaşıyorlar.

**Yetişkin (2-7 yıl):**
İnsan eşdeğeri: 20'li yaşların ortasından 40'lara
En güçlü yıllar! Evcil hayvanınız tamamen olgun, enerjik ve en iyi sağlıkta. Kişilik yerleşik, rutinler belirlenmiş. İdeal kiloda kalmaya, düzenli veteriner kontrollerine ve zihinsel olarak uyarılmış tutmaya odaklanın. Bu genellikle en istikrarlı ve tahmin edilebilir dönemdir.

**Olgun Yetişkin (7-10 yıl):**
İnsan eşdeğeri: 40'ların sonundan 50'lere
Yaşlı yılların başlangıcı. Küçük değişiklikler fark edebilirsiniz: biraz daha az enerji, beyazlaşan tüyler (özellikle burun çevresinde), daha fazla uyku. Veteriner ziyaretleri yılda iki defaya çıkmalı. Artritin erken belirtilerini, diş hastalığını veya kilo değişikliklerini izleyin. Yaşlılara özel diyetleri düşünme zamanı.

**Yaşlı (10-15 yıl):**
İnsan eşdeğeri: 60'lar ve 70'ler
Evcil hayvanınız resmi olarak yaşlı bir vatandaş. Yaşa bağlı durumlar daha yaygın hale gelir: artrit, böbrek hastalığı, kalp rahatsızlıkları, diş hastalığı. Daha sık veteriner izleme (her 3-4 ayda bir), olası ilaçlar ve rampa veya daha yumuşak yatak gibi çevresel düzenlemeler gerektirir. Hayattan hala keyif alıyorlar ama daha nazik bir tempoda.

**İleri Yaş (15+ yıl):**
İnsan eşdeğeri: 80'ler ve üzeri
Evcil hayvanınız olasılıkları yendi ve özel bakımı hak ediyor. Odak noktası yaşam kalitesine ve konfora kayıyor. Merdiven tırmanma veya yemek/suya ulaşma gibi temel işlevlerde yardıma ihtiyaç duyabilir. Sık veteriner ziyaretleri, olası palyatif bakım ve bol sevgi ve sabır. Her gün değerlidir.

**Aktivite Seviyesi Etkisi:**
Aktif evcil hayvanlar genellikle daha iyi "yaşlanır"—mobiliteyi, sağlıklı kiloyu ve zihinsel keskinliği daha uzun süre korurlar. Hareketsiz evcil hayvanlar yaşa bağlı düşüşü daha erken gösterebilir.

**İç Mekan vs Dış Mekan:**
İç mekan kedileri dış mekan kedilerinden 3-4 kat daha uzun yaşar. Aynı kalıp tavşanlar ve küçük evcil hayvanlar için de geçerlidir. Yırtıcılardan, parazitlerden, hastalıklardan ve kazalardan korunma yaşam süresini çarpıcı biçimde uzatır.`,

    lifestagesTitle: 'Detaylı Yaşam Evresi Bakım Rehberi',
    lifestagesContent: `Her yaşam evresinin özel bakım gereksinimleri vardır. İşte kapsamlı rehberiniz:

**YAVRU EVRESİ BAKIMI:**
Beslenme: Büyüme için formüle edilmiş yüksek proteinli, besin yoğun gıda. Günde 3-4 küçük öğün verin. Sürekli temiz su erişimi sağlayın.

Sağlık: Aşı programı (6-16 hafta). İç parazit tedavisi. Parazit önleme. Haftalık kilo kontrolleri. 4-6 ay civarında kısırlaştırma danışmanlığı.

Egzersiz: Günde birkaç kez kısa oyun seansları (5-10 dakika). Büyüyen kemikleri ve eklemleri aşırı yormaktan kaçının.

Eğitim: Temel komutlar, tuvalet eğitimi, insanlar ve evcil hayvanlarla sosyalleşme. Sadece olumlu pekiştirme.

Çevre: Evi yavru dostu yapın, tehlikeleri kaldırın, güvenli keşif alanları sağlayın.

**GENÇ YETİŞKİN BAKIMI:**
Beslenme: Yaklaşık 12 ayda yetişkin formülüne geçin. Günde iki öğün. Obeziteyi önlemek için porsiyonları izleyin.

Sağlık: Yıllık sağlık muayeneleri. Aşıları tamamlayın. Yapılmadıysa kısırlaştırmayı düşünün. Diş bakımı rutini.

Egzersiz: Günlük 30-60 dakika (ırka göre değişir). Yüksek enerjili aktiviteler, zihinsel uyarım oyunları.

Eğitim: Temel komutları pekiştirin. Davranış sorunlarını erken ele alın. Tasma görgü kuralları, sosyalleşme devam eder.

Çevre: Rutinler oluşturun. Bol oyuncak ve zenginleştirme.

**YETİŞKİN EVRE BAKIMI:**
Beslenme: Dengeli yetişkin diyeti. Aktivite seviyesine göre kalorileri ayarlayın. Sağlıklı ödüller (günlük kalorinin <%10'u).

Sağlık: Yıllık veteriner ziyaretleri. Önerilen diş temizlikleri. Kiloyu izleyin. Irka özel sağlık taramaları.

Egzersiz: Düzenli günlük aktivite. Fiziksel ve zihinsel uyarımın karışımı. Sağlıklı kiloda kalın.

Eğitim: Öğrenilen davranışları sürdürün. Zihinsel zenginleştirme için yeni numaralar öğretin.

Çevre: Tutarlı rutinler. Düzenli sosyalleşme.

**OLGUN YETİŞKİN BAKIMI:**
Beslenme: Yaşlı formülünü düşünün. Daha az kaloriye ihtiyaç duyabilir. Eklem destek takviyeleri (glukozamin/kondroitin).

Sağlık: Veteriner ziyaretlerini yılda iki defaya çıkarın. Böbrek, karaciğer, tiroid sorunları için kan tahlili. Artrit belirtilerini izleyin.

Egzersiz: Orta dereceli aktivite. Yüzme gibi düşük etkili seçenekler. Yoğunluğu konfora göre ayarlayın.

Eğitim: Bulmaca oyuncaklarıyla zihni aktif tutun. Fiziksel kısıtlamalara uyarlayın.

Çevre: Ortopedik yatak. Gerekirse rampalar. Mobilite sorunlarını izleyin.

**YAŞLI EVRE BAKIMI:**
Beslenme: Yaşlı diyet formülü. Diş sorunları varsa daha yumuşak gıda. Daha küçük, daha sık öğünler. Hidrasyon izleme.

Sağlık: Her 3-4 ayda bir veteriner ziyaretleri. Kapsamlı kan panelleri. Kanser taramaları. Ağrı yönetimi. Bilişsel fonksiyon izleme.

Egzersiz: Nazik, kısa yürüyüşler. Pasif hareket açıklığı egzersizleri. Düşük etkili kardio için yüzme.

Eğitim: Bilişsel gerilemeyi yavaşlatmak için zihinsel zenginleştirme. Basit oyunlar.

Çevre: Yemek, su, tuvalet alanlarına kolay erişim. Kaymaz yüzeyler. Sıcaklık (sıcaklığı düzenleme yeteneği azalır). Görüş azalıyorsa gece lambaları.

**İLERİ YAŞ BAKIMI:**
Beslenme: Son derece lezzetli gıda. Aromayı artırmak için ılık gıda. İştah azsa elle besleme. Konfora odaklanın.

Sağlık: Sık izleme (aylık veya gerektiğinde). Yaşam kalitesi değerlendirmeleri. Palyatif bakım. Ağrı yönetimi öncelik.

Egzersiz: Sadece çok nazik hareket. Yoğunluk değil konfora odaklanın.

Eğitim: Karışıklığı azaltmak için basit, tanıdık rutinleri sürdürün.

Çevre: Her şey kolayca erişilebilir. Yumuşak, sıcak yatak. Minimum stres faktörleri. Bol sevgi ve sabır.

**ÖZEL HUSUSLAR:**

Kısırlaştırılmış Evcil Hayvanlar: %20-30 daha az kaloriye ihtiyaç duyabilir. Belirli kanser riskini azaltır. Genellikle 1-2 yıl daha uzun yaşarlar.

İç Mekan vs Dış Mekan: İç mekan evcil hayvanları can sıkıntısını önlemek için çevresel zenginleştirmeye ihtiyaç duyar. Güvenlik için dış mekan gözetimi önerilir.

Birden Fazla Evcil Hayvan: Yaşlı evcil hayvanların ayrı sessiz alanlara ihtiyacı olabilir. Enerji seviyeleri değiştikçe grup dinamiklerini ayarlayın.

Kilo Yönetimi: Obezite yaşam süresini çarpıcı biçimde kısaltır ve yaşa bağlı durumları kötüleştirir. Yaşam boyunca ideal kiloda kalın.`,

    faqTitle: 'Sık Sorulan Sorular',
    faqs: [
      {
        question: 'Köpek yıllarını hesaplamak için "7 ile çarp" kuralı doğru mu?',
        answer: 'Hayır, geleneksel "7 ile çarp" kuralı güncelliğini yitirmiş ve bilimsel olarak yanlıştır. Modern veteriner araştırması köpeklerin ilk iki yılda çok daha hızlı yaşlandığını (2 yaşında insan 20\'li yaşlarının ortasına eşdeğere ulaştıklarını), sonra daha kademeli yaşlandıklarını gösteriyor. Ek olarak, ırk büyüklüğü yaşlanma hızını çarpıcı biçimde etkiler—küçük köpekler dev ırklardan daha uzun yaşar ve daha yavaş yaşlanır. Hesaplayıcımız bu faktörleri dikkate alan bilimsel olarak doğrulanmış AVMA formülünü kullanır.',
      },
      {
        question: 'İç mekan kedileri neden dış mekan kedilerinden çok daha uzun yaşar?',
        answer: 'İç mekan kedileri genellikle 12-18 yıl yaşarken, dış mekan kedileri ortalama sadece 2-5 yıl yaşar. Çarpıcı fark, dış mekan kedilerinin sürekli tehlikelerle karşı karşıya kalmasından kaynaklanır: trafik kazaları, yırtıcılar (çakallar, köpekler, büyük kuşlar), bulaşıcı hastalıklar (FIV, FeLV), parazitler, zehirlenme ve aşırı hava koşulları. İç mekan kedileri optimal beslenme ve veteriner bakımını sürdürürken bu riskleri önler. Hem iç hem dış mekan kedileri bile kesinlikle iç mekan kedilerinden daha kısa yaşam sürelerine sahiptir.',
      },
      {
        question: 'Evcil hayvanım kaç yaşında yaşlı kabul edilir?',
        answer: 'Tür ve büyüklüğe göre değişir. Köpekler: Genel olarak 7 yaş, ancak küçük ırklar 10-12 yaş, dev ırklar 5-6 yaş. Kediler: Yaklaşık 11 yaş. Tavşanlar: 6-7 yaş. Hamsterlar: 1.5 yaş. Kuşlar (papağanlar): Türe bağlı olarak 10-15 yaş. Yaşlı statüsü artan veteriner ziyaretleri, yaşa bağlı sağlık taramaları ve olası diyet ayarlamaları anlamına gelir. Veterineriniz evcil hayvanınıza özel rehberlik sağlayabilir.',
      },
      {
        question: 'Evcil hayvanımın daha uzun ve sağlıklı yaşamasına nasıl yardımcı olabilirim?',
        answer: 'Evcil hayvan uzun ömürlülüğünün anahtarları şunlardır: (1) Doğru diyet ve egzersiz yoluyla sağlıklı kiloda kalın—obezite kısaltılmış yaşam süresinin önlenebilir 1 numaralı nedenidir. (2) Önleyici taramalarla düzenli veteriner bakımı sorunları erken yakalar. (3) Diş hijyeni sistemik hastalığı önler. (4) Zihinsel uyarım bilişsel fonksiyonu keskin tutar. (5) Güvenli ortam (kediler/küçük evcil hayvanlar için iç mekan yaşamı). (6) Yaşam evresine uygun kaliteli beslenme. (7) Kısırlaştırma (kanser riskini azaltır, yaşamı uzatır). (8) Duygusal esenlik için sevgi ve zenginleştirme.',
      },
      {
        question: 'Küçük köpekler neden büyük köpeklerden daha uzun yaşar?',
        answer: 'Bu büyüleyici fenomen, büyük ırklarda hızlandırılmış hücresel yaşlanma ile ilgilidir. Büyük köpekler yavrudan yetişkin boyutuna küçük ırklardan çok daha hızlı büyür, bu da yaşa bağlı hastalıkların daha erken başlamasına katkıda bulunuyor gibi görünüyor. Araştırmalar büyük köpeklerin daha hızlı hücre yenilemesine ve daha yüksek metabolik taleplere sahip olduğunu öne sürüyor. Organları vücut boyutuna göre daha hızlı yaşlanır. Chihuahua gibi küçük bir köpek 15-20 yıl yaşayabilirken, bir Great Dane genellikle sadece 7-10 yıl yaşar. Kesin biyolojik mekanizmalar hala inceleniyor.',
      },
      {
        question: 'Kısırlaştırma evcil hayvanımın yaşam süresini etkiler mi?',
        answer: 'Evet, olumlu yönde! Araştırmalar kısırlaştırılmış evcil hayvanların ortalama olarak kısırlaştırılmamış evcil hayvanlardan 1-2 yıl daha uzun yaşadığını gösteriyor. Faydalar şunlardır: üreme kanserlerinin (yumurtalık, rahim, testis) riski ortadan kalkar, meme kanseri riski azalır (ilk kızgınlıktan önce kısırlaştırılırsa %90 azalma), gezinme/kavga yaralanmaları azalır, pyometra (yaşamı tehdit eden rahim enfeksiyonu) olmaz ve davranışsal faydalar. Optimal zamanlama tür ve ırka göre değişir—kişiselleştirilmiş öneriler için veterinerinize danışın.',
      },
      {
        question: 'Bu hesaplayıcıyı egzotik evcil hayvanlar için kullanabilir miyim?',
        answer: 'Hesaplayıcımız köpekleri, kedileri, tavşanları, hamsterları, ginepigları ve yaygın evcil kuşları (muhabbet kuşları, sultan papağanları, küçük papağanlar) kapsar. Diğer egzotik evcil hayvanlar için (gelincikler, kirpiler, sürüngenler, büyük papağanlar), yaşam süresi ve yaşlanma türe göre büyük ölçüde değişir. Türe özgü yaşlanma bilgisi için egzotik hayvan veterinerine danışın. Hesaplayıcı ortalama yaşam sürelerine dayalı tahminler sağlar—bireysel varyasyon önemlidir.',
      },
      {
        question: 'Evcil hayvanımın insan yaşı çok yüksek/düşük görünüyor. Bu doğru mu?',
        answer: 'Hesaplama veteriner bilimine dayanıyor, ancak bunun farklı türleri karşılaştıran bir yaklaşım olduğunu unutmayın. 15 yaşında bir kedi (76 insan yılı) "yaşlı" görünebilir ancak bu yaştaki birçok kedi hala aktif ve sağlıklıdır. Tersine, 2 yaşında bir köpek (24 insan yılı) davranışsal olarak insan 24 yaşındakinden daha olgun olabilir. Sayı, insan yaşlanmasını mükemmel şekilde yansıtmaktan ziyade yaşam evresini ve sağlık ihtiyaçlarını bağlamsallaştırmaya yardımcı olur. Bireysel genetik, bakım ve yaşam tarzı önemli varyasyon yaratır.',
      },
    ],

    disclaimerTitle: 'Önemli Uyarı',
    disclaimerContent: 'Bu evcil hayvan yaşı hesaplayıcı bilimsel veteriner formüllerine ve ortalama yaşam süresi verilerine dayalı genel tahminler sağlar. Bireysel evcil hayvanlar genetik, ırka özgü faktörler, bakım kalitesi, beslenme, çevre ve sağlık koşullarına bağlı olarak farklı şekilde yaşlanabilir. Sonuçlar yalnızca bilgilendirme ve eğlence amaçlıdır ve profesyonel veteriner tavsiyesinin yerini tutmamalıdır. Evcil hayvanınız için kişiselleştirilmiş sağlık rehberliği, yaşa uygun bakım önerileri ve herhangi bir sağlık endişesi için her zaman veterinerinize danışın. Evcil hayvanınızın tıbbi bir sorunu olduğundan şüpheleniyorsanız, derhal veteriner ilgisi arayın.',

    referencesTitle: 'Kaynaklar ve Referanslar',
    references: [
      'American Veterinary Medical Association (AVMA) - Evcil Hayvan Yaşı Rehberi ve Yaşam Evresi Tanımları',
      'University of California San Diego - Köpek Yaşlanma Araştırması (Cell Systems, 2019)',
      'American Animal Hospital Association (AAHA) - Köpek ve Kedi Yaşam Evresi Rehberi',
      'Cornell University Veteriner Tıp Fakültesi - Kedi Sağlığı Merkezi Yaş Çalışmaları',
      'Journal of Veterinary Internal Medicine - Evcil Hayvanlarda Uzun Ömürlülük ve Yaşlanma Araştırması',
      'Morris Animal Foundation - Golden Retriever Yaşam Boyu Çalışması (Evcil Hayvan Uzun Ömürlülük Araştırması)',
      'International Cat Care - Kedi Yaşam Evreleri ve Önleyici Sağlık Hizmetleri',
      'Association of American Veterinary Medical Colleges - Karşılaştırmalı Yaşlanma Çalışmaları',
    ],
  },
};
