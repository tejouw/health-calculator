import { CalculatorContent } from '@/types/calculator';

export const bloodSugarContent: CalculatorContent = {
  en: {
    whatIs:
      'Blood sugar conversion is the process of converting glucose measurements between two different unit systems: mg/dL (milligrams per deciliter) used primarily in the United States, and mmol/L (millimoles per liter) used in most other countries and by the International System of Units (SI). Blood glucose, commonly called blood sugar, is the main sugar found in the blood and the body\'s primary source of energy. Glucose comes from the food we eat and is transported through the bloodstream to cells where it is used for energy or stored for later use. Maintaining blood glucose levels within a healthy range is crucial for overall health and especially important for people with diabetes, prediabetes, or other metabolic conditions. Normal fasting blood glucose levels typically range from 70-99 mg/dL (3.9-5.5 mmol/L). Understanding both measurement systems is essential for travelers, healthcare professionals working internationally, and patients who need to interpret medical reports or glucose meter readings from different countries. The conversion factor between these units is 18.018, which means to convert from mmol/L to mg/dL you multiply by 18, and to convert from mg/dL to mmol/L you divide by 18. This tool provides quick, accurate conversions to help individuals and healthcare providers communicate effectively about blood glucose levels regardless of which measurement system they use.',

    howToCalculate:
      'Converting blood sugar levels between mg/dL and mmol/L involves a simple mathematical calculation using a standard conversion factor. The molecular weight of glucose is approximately 180.16 g/mol, which leads to the conversion factor of 18.018 (commonly rounded to 18 for practical purposes). To convert from mg/dL to mmol/L, divide the mg/dL value by 18.018 (or 18). For example, if your blood glucose reading is 126 mg/dL, the calculation would be: 126 ÷ 18 = 7.0 mmol/L. To convert from mmol/L to mg/dL, multiply the mmol/L value by 18.018 (or 18). For instance, if your reading is 10.0 mmol/L, the calculation would be: 10.0 × 18 = 180 mg/dL. The formula is based on the relationship between mass concentration (mg/dL) and molar concentration (mmol/L). One deciliter equals 0.1 liters or 100 milliliters. One mmol of glucose weighs 180.16 mg. Therefore, 1 mmol/L = 180.16 mg/L = 18.016 mg/dL (rounded to 18). Understanding this conversion is particularly important for several scenarios: when traveling internationally and using a glucose meter calibrated to a different unit system, when reading medical research papers that use different units, when consulting with healthcare providers in different countries, or when switching between glucose meters that display results in different units. Most modern glucose meters allow you to switch between units, but knowing how to manually convert ensures you can always interpret your readings correctly.',

    formulaDetails:
      'The conversion between blood sugar units is based on glucose\'s molecular weight of 180.16 g/mol. One millimole (mmol) of glucose equals 180.16 milligrams (mg). Dividing by the volume unit (1 liter = 1,000 mL, expressed as dL for deciliter = 100 mL), the conversion factor becomes: 1 mmol/L = 18.018 mg/dL. To convert mg/dL to mmol/L, divide by 18.018. To convert mmol/L to mg/dL, multiply by 18.018. The United States, Canada, and some other countries use mg/dL; most of Europe, Asia, and the rest of the world use mmol/L. Both units measure the exact same thing—concentration of glucose in blood—just expressed differently.',

    interpretation:
      'Blood glucose levels are interpreted differently depending on the timing of measurement and individual health status. For fasting blood glucose (measured after at least 8 hours without food), normal levels are below 100 mg/dL (5.6 mmol/L). Levels between 100-125 mg/dL (5.6-6.9 mmol/L) indicate prediabetes, while levels of 126 mg/dL (7.0 mmol/L) or higher on two separate tests indicate diabetes. For random blood glucose tests (taken at any time), levels below 140 mg/dL (7.8 mmol/L) are generally considered normal, while levels of 200 mg/dL (11.1 mmol/L) or higher may indicate diabetes, especially if accompanied by symptoms. For the oral glucose tolerance test (OGTT), blood glucose is measured 2 hours after drinking a glucose solution. Normal results are below 140 mg/dL (7.8 mmol/L), prediabetes is indicated by levels between 140-199 mg/dL (7.8-11.0 mmol/L), and diabetes is indicated by levels of 200 mg/dL (11.1 mmol/L) or higher. For people with diabetes, target ranges vary based on individual circumstances and should be determined with a healthcare provider. The American Diabetes Association generally recommends target ranges of 80-130 mg/dL (4.4-7.2 mmol/L) before meals and less than 180 mg/dL (10.0 mmol/L) 1-2 hours after starting a meal for most adults with diabetes. However, these targets may be adjusted based on age, duration of diabetes, presence of complications, and other individual factors.',

    categories: [
      {
        range: 'Fasting < 100 mg/dL (< 5.6 mmol/L)',
        label: 'Normal Fasting',
        description:
          'Healthy fasting blood sugar level. No concerns at this level. Maintain healthy diet and lifestyle.',
        color: '#10B981',
      },
      {
        range: 'Fasting 100–125 mg/dL (5.6–6.9 mmol/L)',
        label: 'Pre-diabetes (Fasting)',
        description:
          'Elevated fasting blood sugar indicating insulin resistance. Lifestyle changes can often reverse this.',
        color: '#F59E0B',
      },
      {
        range: 'Fasting ≥ 126 mg/dL (≥ 7.0 mmol/L)',
        label: 'Diabetes (Fasting)',
        description:
          'Meets the fasting glucose diagnostic threshold for diabetes. Medical evaluation and treatment planning required.',
        color: '#EF4444',
      },
      {
        range: '2-Hour Post-meal < 140 mg/dL (< 7.8 mmol/L)',
        label: 'Normal Post-meal',
        description:
          'Blood sugar returned to a healthy level within 2 hours after eating. Good glucose regulation.',
        color: '#10B981',
      },
      {
        range: '2-Hour Post-meal 140–199 mg/dL (7.8–11.0 mmol/L)',
        label: 'Pre-diabetes (Post-meal)',
        description:
          'Blood sugar remains elevated 2 hours after eating, indicating impaired glucose tolerance.',
        color: '#F59E0B',
      },
      {
        range: '2-Hour Post-meal ≥ 200 mg/dL (≥ 11.1 mmol/L)',
        label: 'Diabetes (Post-meal)',
        description:
          'Blood sugar remains dangerously high after eating, meeting post-meal diagnostic criteria for diabetes.',
        color: '#EF4444',
      },
    ],

    limitations:
      'Blood sugar readings are highly contextual—the same number means different things depending on when it was measured relative to meals, exercise, stress, sleep, and medications. A single reading provides only a snapshot and is not sufficient for diagnosis; multiple readings or confirmatory tests are needed. Stress hormones (cortisol, adrenaline) can temporarily raise blood sugar significantly, even in healthy individuals. Exercise, illness, alcohol, and certain medications all affect readings. Blood sugar meters have an accuracy range of ±15-20%—readings at the margins of diagnostic thresholds should be confirmed in a laboratory. Hydration status and the specific finger used for capillary testing can introduce small variations. For the most accurate assessment of blood sugar management, HbA1c testing and continuous glucose monitoring provide longer-term perspectives.',

    healthRisks:
      'Chronically elevated blood sugar damages blood vessels and nerves over time, leading to the same complications as uncontrolled diabetes: cardiovascular disease (the leading cause of death in diabetics), kidney damage (nephropathy), eye damage (retinopathy) that can cause blindness, and peripheral nerve damage (neuropathy). On the other end, dangerously low blood sugar (hypoglycemia—below 70 mg/dL / 3.9 mmol/L) causes immediate symptoms including shakiness, confusion, sweating, and in severe cases, loss of consciousness. Hypoglycemia is most common in people taking insulin or certain diabetes medications. Both extremes—and the variability between them—are harmful, which is why both fasting and post-meal monitoring, combined with long-term markers like HbA1c, provide the most complete picture of blood sugar health.',

    alternativeMeasures:
      'HbA1c testing provides a 2-3 month average of blood glucose and is the most important long-term diabetes management marker. Continuous Glucose Monitoring (CGM) systems track blood sugar every few minutes using an interstitial sensor, revealing patterns, variability, and time spent in target ranges that single readings cannot show. The Oral Glucose Tolerance Test (OGTT) is the gold standard for diabetes diagnosis, measuring glucose response over 2 hours after a standardized glucose load. Fasting insulin levels and the HOMA-IR calculation assess insulin resistance, which often precedes elevated blood sugar. For routine monitoring, both fingerstick glucometers and flash glucose monitors (like FreeStyle Libre) are widely available consumer options.',

    demographicDifferences:
      'Blood sugar levels and diabetes risk are influenced by many demographic factors. Age is the strongest predictor—diabetes risk increases significantly after 45, and older adults are more likely to have elevated fasting blood sugar. Pregnancy requires tighter blood sugar targets: gestational diabetes affects 6-9% of pregnancies, and elevated blood sugar during pregnancy increases risks for both mother and baby. Ethnicity influences diabetes prevalence: Hispanic, African American, Asian American, and Native populations have higher rates than non-Hispanic whites. Body mass index (BMI) is the most important modifiable risk factor. Physical activity level directly affects how quickly blood sugar returns to normal after meals. Genetic predisposition accounts for roughly 30-40% of type 2 diabetes risk, while lifestyle factors account for the remainder.',

    medicalDisclaimer:
      'This blood sugar converter is provided for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The conversion between mg/dL and mmol/L is mathematically accurate, but the interpretation of blood glucose levels requires professional medical evaluation. Individual target ranges for blood glucose vary based on age, diabetes type, medications, presence of complications, pregnancy status, and other health conditions. Never make changes to your diabetes management plan, medication doses, or insulin regimen based solely on converted numbers without consulting your healthcare provider. If you experience symptoms of high blood sugar (hyperglycemia) such as increased thirst, frequent urination, blurred vision, or fatigue, or symptoms of low blood sugar (hypoglycemia) such as shakiness, sweating, confusion, or rapid heartbeat, seek immediate medical attention. This tool does not replace blood glucose monitoring devices, laboratory tests, or professional medical assessment. Always verify glucose meter readings with your healthcare provider and ensure your monitoring device is properly calibrated. For diagnosis and management of diabetes or any blood sugar-related condition, consult with qualified healthcare professionals including physicians, endocrinologists, certified diabetes educators, or registered dietitians.',

    references: [
      'American Diabetes Association. Standards of Medical Care in Diabetes. Diabetes Care. 2023;46(Supplement 1).',
      'World Health Organization. Use of Glycated Haemoglobin (HbA1c) in the Diagnosis of Diabetes Mellitus. WHO. 2011.',
      'International Diabetes Federation. IDF Diabetes Atlas, 10th Edition. 2021.',
      'Nathan DM, et al. Medical Management of Hyperglycemia in Type 2 Diabetes: A Consensus Algorithm. Diabetes Care. 2009;32(1):193-203.',
      'UK Prospective Diabetes Study Group. Intensive blood-glucose control with sulphonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes. Lancet. 1998;352(9131):837-853.',
    ],

    tips: [
      'Always verify which unit system (mg/dL or mmol/L) your glucose meter displays to avoid confusion and ensure accurate tracking',
      'Keep a conversion chart handy if you travel internationally or switch between different glucose monitoring systems',
      'When communicating with healthcare providers in different countries, always specify which unit you are using to prevent misunderstandings',
      'Most modern glucose meters allow you to switch between units in the settings menu - consult your device manual',
      'Record blood glucose readings with the unit system clearly noted in your logbook or diabetes management app',
      'If your meter displays unexpected readings, check whether it accidentally switched unit systems before assuming a dangerous high or low reading',
      'Use the same unit system consistently for tracking trends over time to make comparisons easier',
      'Learn the normal ranges in both unit systems so you can quickly identify whether readings are within target regardless of the units displayed',
    ],

    faqs: [
      {
        question: 'Why are there different unit systems for blood sugar?',
        answer:
          'The use of different unit systems for blood glucose measurements is primarily historical and regional. The United States predominantly uses mg/dL (milligrams per deciliter), which represents mass per volume and is considered more intuitive for some people. Most other countries and the international scientific community use mmol/L (millimoles per liter), which is part of the International System of Units (SI) and represents molar concentration. The mmol/L system is preferred in scientific research because it allows easier comparison between different substances based on molecular quantities. Both systems are equally valid and accurate, but the lack of global standardization can create confusion when traveling, reading international medical literature, or using glucose meters manufactured for different markets.',
      },
      {
        question: 'Is there a significant difference in accuracy between the two units?',
        answer:
          'No, there is no difference in accuracy between mg/dL and mmol/L - they are simply different ways of expressing the same measurement. The conversion between them is based on a fixed mathematical relationship (the conversion factor of 18.018), so converting between units does not add or remove any accuracy. However, rounding can introduce small differences. For example, 100 mg/dL converts to 5.55 mmol/L, but this might be rounded to 5.6 mmol/L for practical purposes. These tiny differences are clinically insignificant and do not affect diabetes management decisions. The accuracy of your blood glucose reading depends on your glucose meter\'s quality, proper calibration, correct testing technique, and fresh test strips - not on which unit system is used to display the result.',
      },
      {
        question: 'What should I do if my glucose meter switched units without my knowledge?',
        answer:
          'If you notice unexpected readings that seem unusually high or low, first check which unit your meter is displaying. A reading of 6.0 mmol/L (normal) could cause panic if misread as 6.0 mg/dL (dangerously low), or conversely, 120 mg/dL (normal) could be confused with 120 mmol/L (critically high). Most glucose meters display the unit clearly on the screen, often in the corner. If you suspect the unit has changed, consult your meter\'s manual to learn how to check and change the unit setting. Some meters require holding specific buttons during startup to change units, while others have menu options. If you\'re unsure about a reading, do not take any action with insulin or medication - instead, retest immediately or contact your healthcare provider for guidance. To prevent accidental unit changes, some meters allow you to lock the unit setting.',
      },
      {
        question: 'Do I need to convert my readings if I travel to a different country?',
        answer:
          'Not necessarily, but understanding both unit systems is helpful. Your glucose meter will continue to work and display readings in its programmed unit system regardless of where you are. However, if you need to purchase test strips abroad, consult with local healthcare providers, or seek medical care in a country using a different unit system, knowing how to convert between mg/dL and mmol/L becomes important. Some travelers prefer to switch their meter to the local unit system to make communication with local healthcare providers easier, while others keep their meter in their home unit system and use conversion when needed. If you have diabetes and travel internationally, it\'s wise to carry a conversion chart and know your target glucose ranges in both unit systems. Also, bring a letter from your doctor explaining your condition and medication needs, as this can help when dealing with customs or seeking medical care abroad.',
      },
      {
        question: 'Are blood sugar target ranges the same in both measurement systems?',
        answer:
          'Yes, target ranges represent the same blood glucose levels regardless of which unit system is used - they are simply expressed in different numbers. For example, a normal fasting glucose range of 70-99 mg/dL is equivalent to 3.9-5.5 mmol/L. The American Diabetes Association\'s recommended pre-meal target of 80-130 mg/dL for most adults with diabetes is the same as 4.4-7.2 mmol/L. The post-meal target of less than 180 mg/dL equals less than 10.0 mmol/L. When you convert between units, you\'re not changing what\'s healthy or unhealthy - you\'re just expressing the same clinical thresholds in different mathematical terms. Healthcare providers in countries using mmol/L follow the same evidence-based guidelines for diabetes management as those using mg/dL; they simply express the numbers differently. Always verify your personal target ranges with your healthcare provider, as individual targets may vary based on your specific health conditions and circumstances.',
      },
    ],
  },
  tr: {
    whatIs:
      'Kan şekeri dönüşümü, glukoz ölçümlerini iki farklı birim sistemi arasında dönüştürme işlemidir: öncelikle Amerika Birleşik Devletleri\'nde kullanılan mg/dL (desilitre başına miligram) ve çoğu diğer ülkede ve Uluslararası Birimler Sistemi (SI) tarafından kullanılan mmol/L (litre başına milimol). Yaygın olarak kan şekeri olarak adlandırılan kan glukozu, kanda bulunan ana şekerdir ve vücudun birincil enerji kaynağıdır. Glukoz yediğimiz gıdalardan gelir ve kan dolaşımı yoluyla hücrelere taşınır, burada enerji için kullanılır veya daha sonra kullanılmak üzere depolanır. Kan şekeri seviyelerini sağlıklı bir aralıkta tutmak genel sağlık için çok önemlidir ve özellikle diyabet, prediyabet veya diğer metabolik durumları olan kişiler için önemlidir. Normal açlık kan şekeri seviyeleri tipik olarak 70-99 mg/dL (3.9-5.5 mmol/L) arasında değişir. Her iki ölçüm sistemini anlamak, uluslararası çalışan sağlık profesyonelleri, seyahat edenler ve farklı ülkelerden tıbbi raporları veya glukoz metre okumalarını yorumlaması gereken hastalar için gereklidir. Bu birimler arasındaki dönüşüm faktörü 18.018\'dir, bu da mmol/L\'den mg/dL\'ye dönüştürmek için 18 ile çarpmanız ve mg/dL\'den mmol/L\'ye dönüştürmek için 18\'e bölmeniz gerektiği anlamına gelir. Bu araç, kullandıkları ölçüm sistemi ne olursa olsun, bireyler ve sağlık hizmeti sağlayıcılarının kan şekeri seviyeleri hakkında etkili bir şekilde iletişim kurmasına yardımcı olmak için hızlı, doğru dönüşümler sağlar.',

    howToCalculate:
      'Kan şekeri seviyelerini mg/dL ve mmol/L arasında dönüştürmek, standart bir dönüşüm faktörü kullanarak basit bir matematiksel hesaplama içerir. Glukozun moleküler ağırlığı yaklaşık 180.16 g/mol\'dür, bu da 18.018 dönüşüm faktörüne yol açar (pratik amaçlar için genellikle 18\'e yuvarlanır). mg/dL\'den mmol/L\'ye dönüştürmek için, mg/dL değerini 18.018\'e (veya 18\'e) bölün. Örneğin, kan şekeri okumanız 126 mg/dL ise, hesaplama şöyle olacaktır: 126 ÷ 18 = 7.0 mmol/L. mmol/L\'den mg/dL\'ye dönüştürmek için, mmol/L değerini 18.018 ile (veya 18 ile) çarpın. Örneğin, okumanız 10.0 mmol/L ise, hesaplama şöyle olacaktır: 10.0 × 18 = 180 mg/dL. Formül, kütle konsantrasyonu (mg/dL) ile molar konsantrasyon (mmol/L) arasındaki ilişkiye dayanır. Bir desilitre 0.1 litre veya 100 mililitreye eşittir. Bir mmol glukoz 180.16 mg ağırlığındadır. Bu nedenle, 1 mmol/L = 180.16 mg/L = 18.016 mg/dL (18\'e yuvarlanır). Bu dönüşümü anlamak, birkaç senaryo için özellikle önemlidir: uluslararası seyahat ederken ve farklı bir birim sistemine kalibre edilmiş bir glukoz metre kullanırken, farklı birimler kullanan tıbbi araştırma makalelerini okurken, farklı ülkelerdeki sağlık hizmeti sağlayıcılarına danışırken veya sonuçları farklı birimlerde gösteren glukoz metreleri arasında geçiş yaparken. Çoğu modern glukoz metre birimler arasında geçiş yapmanıza izin verir, ancak manuel olarak nasıl dönüştüreceğinizi bilmek, okumalarınızı her zaman doğru yorumlayabilmenizi sağlar.',

    formulaDetails:
      'Kan şekeri birimlerinin dönüşümü, glukozun 180.16 g/mol olan moleküler ağırlığına dayanır. Bir milimol (mmol) glukoz, 180.16 miligramma (mg) karşılık gelir. Hacim birim olan desilitreyle (dL = 100 mL) bölme işlemi yapıldığında dönüşüm faktörü şu şekilde ortaya çıkar: 1 mmol/L = 18.018 mg/dL. mg/dL\'den mmol/L\'ye dönüştürmek için 18.018\'e bölün; mmol/L\'den mg/dL\'ye dönüştürmek için 18.018 ile çarpın. Amerika Birleşik Devletleri, Kanada ve bazı diğer ülkeler mg/dL kullanırken, Avrupa, Asya ve dünya nüfusunun geri kalanı ağırlıklı olarak mmol/L kullanır. Her iki birim de aynı şeyi ölçer—kandaki glukoz konsantrasyonu—yalnızca farklı biçimlerde ifade edilir.',

    interpretation:
      'Kan şekeri seviyeleri, ölçüm zamanlamasına ve bireysel sağlık durumuna bağlı olarak farklı şekilde yorumlanır. Açlık kan şekeri için (en az 8 saat yemek yemeden sonra ölçülür), normal seviyeler 100 mg/dL (5.6 mmol/L) altındadır. 100-125 mg/dL (5.6-6.9 mmol/L) arasındaki seviyeler prediyabeti gösterirken, iki ayrı testte 126 mg/dL (7.0 mmol/L) veya daha yüksek seviyeler diyabeti gösterir. Rastgele kan şekeri testleri için (herhangi bir zamanda alınır), 140 mg/dL (7.8 mmol/L) altındaki seviyeler genellikle normal kabul edilirken, 200 mg/dL (11.1 mmol/L) veya daha yüksek seviyeler, özellikle semptomlarla birlikte olduğunda diyabeti gösterebilir. Oral glukoz tolerans testi (OGTT) için, kan şekeri bir glukoz solüsyonu içtikten 2 saat sonra ölçülür. Normal sonuçlar 140 mg/dL (7.8 mmol/L) altındadır, prediyabet 140-199 mg/dL (7.8-11.0 mmol/L) arasındaki seviyelerle gösterilir ve diyabet 200 mg/dL (11.1 mmol/L) veya daha yüksek seviyelerle gösterilir. Diyabeti olan kişiler için hedef aralıklar bireysel koşullara göre değişir ve bir sağlık hizmeti sağlayıcısıyla belirlenmeli. Amerikan Diyabet Derneği genellikle diyabeti olan çoğu yetişkin için öğünlerden önce 80-130 mg/dL (4.4-7.2 mmol/L) ve bir öğüne başladıktan 1-2 saat sonra 180 mg/dL (10.0 mmol/L) altında hedef aralıkları önerir. Ancak, bu hedefler yaş, diyabet süresi, komplikasyonların varlığı ve diğer bireysel faktörlere göre ayarlanabilir.',

    categories: [
      {
        range: 'Açlık < 100 mg/dL (< 5.6 mmol/L)',
        label: 'Normal Açlık',
        description:
          'Sağlıklı açlık kan şekeri seviyesi. Bu düzeyde endişe olmaz. Sağlıklı beslenme ve yaşam tarzını sürdürün.',
        color: '#10B981',
      },
      {
        range: 'Açlık 100–125 mg/dL (5.6–6.9 mmol/L)',
        label: 'Prediyabet (Açlık)',
        description:
          'İnsülin direncini gösteren yüksek açlık kan şekeri seviyesi. Bu durumu tersine çevirmek için genellikle yaşam tarzı değişiklikleri yeterli olabilir.',
        color: '#F59E0B',
      },
      {
        range: 'Açlık ≥ 126 mg/dL (≥ 7.0 mmol/L)',
        label: 'Diyabet (Açlık)',
        description:
          'Diyabet için açlık glukoz tanısal eşiğini karşılayan bir seviye. Tıbbi değerlendirme ve tedavi planlaması gereklidir.',
        color: '#EF4444',
      },
      {
        range: 'Öğün Sonrası 2. Saat < 140 mg/dL (< 7.8 mmol/L)',
        label: 'Normal Öğün Sonrası',
        description:
          'Yemek yedikten sonra 2 saat içinde kan şekeri sağlıklı bir düzeye döndü. Glukoz düzenlemesi iyi seyrediyor.',
        color: '#10B981',
      },
      {
        range: 'Öğün Sonrası 2. Saat 140–199 mg/dL (7.8–11.0 mmol/L)',
        label: 'Prediyabet (Öğün Sonrası)',
        description:
          'Yemek yedikten sonra 2 saat geçmesine rağmen kan şekeri yüksek kalmaya devam ediyor; bu durum bozulan glukoz toleransını gösterir.',
        color: '#F59E0B',
      },
      {
        range: 'Öğün Sonrası 2. Saat ≥ 200 mg/dL (≥ 11.1 mmol/L)',
        label: 'Diyabet (Öğün Sonrası)',
        description:
          'Yemek yedikten sonra kan şekeri tehlikeli derecede yüksek kalmaya devam ediyor; bu öğün sonrası diyabet tanısal kriterleri karşılanmaktadır.',
        color: '#EF4444',
      },
    ],

    limitations:
      'Kan şekeri okumaları son derece bağlamsal bir nitelik taşır—aynı sayı, yemekle, egzersizle, streskle, uykuyla ve ilaçlarla ilgili ölçüm zamanlamasına göre farklı anlamlar ifade edebilir. Tek bir okuma yalnızca anlık bir tablo sunur ve teşhis için yeterli değildir; birden fazla okuma veya doğrulayıcı testler gereklidir. Stres hormonları (kortizon, adrenalin), sağlıklı bireylerde bile kan şekerini geçici olarak önemli ölçüde yükseltebilir. Egzersiz, hastalık, alkol ve belirli ilaçlar da okumaları etkiler. Kan şekeri metreleri ±%15-20 doğruluk aralığına sahiptir; tanısal eşiğin sınırında kalan okumalar laboratuvarda doğrulanmalıdır. Hidrasyon durumu ve kapillar ölçüm için kullanılan parmak da küçük farklılıklara yol açabilir. Kan şekeri yönetiminin en doğru değerlendirmesi için HbA1c testi ve sürekli glukoz izleme daha uzun süreli bir perspektif sunar.',

    healthRisks:
      'Kronik olarak yüksek kan şekeri zaman içinde kan damarlarına ve sinirlerine zarar verir; bu durum kontrolsüz diyabetteki komplikasyonlarla aynıdır: kardiyovasküler hastalık (diyabetlilerde ölümün başlıca nedeni), böcek hasarı (nefropati), körlüğe neden olabilen göz hasarı (retinopati) ve çevre sinir hasarı (nöropati). Öte yandan, tehlikeli derecede düşük kan şekeri (hipoglisemi—70 mg/dL / 3.9 mmol/L altı) titreme, kafa karışıklığı, terleme gibi anlık semptomlar yaratır; ağır vakalarda bilinç kaybı da söz konusu olabilir. Hipoglisemi, en çok insülin veya belirli diyabet ilaçları kullanan kişilerde görülür. Her iki uç—ve aralarındaki dalgalanma—zararlıdır; bu nedenle açlık ve öğün sonrası izleme, HbA1c gibi uzun vadeli göstergelerle birleştirildiğinde kan şekeri sağlığının en eksiksiz tablo ortaya koyar.',

    alternativeMeasures:
      'HbA1c testi, kan şekerinin 2-3 aylık ortalama değerini ölçer ve diyabet yönetiminin en önemli uzun vadeli göstergesidir. Sürekli Glukoz İzleme (CGM) sistemleri, interstitiyel bir sensör aracılığıyla kan şekerini her birkaç dakikada bir takip eder; bu sayede tek okumaların gösteremediği kalıplar, değişkenlik ve hedef aralıkta geçirilen süre ortaya çıkar. Oral Glukoz Tolerans Testi (OGTT), standardize edilen bir glukoz yükünün ardından 2 saat boyunca glukoz tepkisini ölçen diyabet teşhisinin altın standartıdır. Açlık insülin seviyeleri ve HOMA-IR hesabı, çoğu zaman yükselen kan şekerinin öncesine ait olan insülin direncini değerlendirer. Rutin izleme için parmak ucu glukozmetreleri ile flash glukoz izleyicileri (FreeStyle Libre gibi) geniş çapta tüketicilere sunulan seçenekler arasında yer alır.',

    demographicDifferences:
      'Kan şekeri seviyeleri ve diyabet riski birçok demografik faktörden etkilenir. Yaş en güçlü tahmin göstergesidir; diyabet riski 45 yaş sonrasında önemli ölçüde artar ve yaşlı yetişkinlerde yüksek açlık kan şekeri daha yaygın bir durumdur. Hamilelik daha sıkı kan şekeri hedefleri gerektirir: gestasyonel diyabet hamilelik vakalarının %6-9\'unda görülür ve hamilelik sırasında yüksek kan şekeri hem anne hem bebek için riskleri artırır. Etnik köken diyabet yaygınlığını etkiler: Hispanic, Afro-Amerikan, Asya-Amerikan ve Yerli nüfuslar, Hispanic olmayan beyazlara kıyasla daha yüksek oranlar sergilemektedir. Vücut kütle endeksi (BMI), en önemli değiştirilebilir risk faktörüdür. Fiziksel aktivite düzeyi, yemek sonrasında kan şekerinin ne kadar hızlı normala döndüğünü doğrudan etkiler. Genetik yatkınlık, Tip 2 diyabet riskinin yaklaşık %30-40\'ını oluşturmakta olup geri kalanını yaşam tarzı faktörleri oluşturur.',

    medicalDisclaimer:
      'Bu kan şekeri dönüştürücü yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. mg/dL ve mmol/L arasındaki dönüşüm matematiksel olarak doğrudur, ancak kan şekeri seviyelerinin yorumlanması profesyonel tıbbi değerlendirme gerektirir. Kan şekeri için bireysel hedef aralıklar yaş, diyabet tipi, ilaçlar, komplikasyonların varlığı, hamilelik durumu ve diğer sağlık durumlarına göre değişir. Yalnızca dönüştürülmüş sayılara dayanarak sağlık hizmeti sağlayıcınıza danışmadan diyabet yönetim planınızda, ilaç dozlarında veya insülin rejiminizde asla değişiklik yapmayın. Yüksek kan şekeri (hiperglisemi) semptomları yaşarsanız (artan susama, sık idrara çıkma, bulanık görme veya yorgunluk gibi) veya düşük kan şekeri (hipoglisemi) semptomları (titreme, terleme, kafa karışıklığı veya hızlı kalp atışı gibi), derhal tıbbi yardım alın. Bu araç, kan şekeri izleme cihazlarının, laboratuvar testlerinin veya profesyonel tıbbi değerlendirmenin yerini almaz. Glukoz metre okumalarını her zaman sağlık hizmeti sağlayıcınızla doğrulayın ve izleme cihazınızın düzgün şekilde kalibre edildiğinden emin olun. Diyabet veya herhangi bir kan şekeri ile ilgili durumun teşhisi ve yönetimi için doktorlar, endokrinologlar, sertifikalı diyabet eğiticileri veya kayıtlı diyetisyenler dahil kalifiye sağlık profesyonellerine danışın.',

    references: [
      'Amerikan Diyabet Derneği. Diyabette Tıbbi Bakım Standartları. Diabetes Care. 2023;46(Ek 1).',
      'Dünya Sağlık Örgütü. Diabetes Mellitus Tanısında Glikozile Hemoglobin (HbA1c) Kullanımı. WHO. 2011.',
      'Uluslararası Diyabet Federasyonu. IDF Diyabet Atlası, 10. Baskı. 2021.',
      'Nathan DM, ve ark. Tip 2 Diyabette Hiperglisemi Tıbbi Yönetimi: Bir Konsensüs Algoritması. Diabetes Care. 2009;32(1):193-203.',
      'UK Prospektif Diyabet Çalışma Grubu. Tip 2 diyabetli hastalarda sülfoniüre veya insülin ile yoğun kan şekeri kontrolü geleneksel tedavi ile karşılaştırıldığında ve komplikasyon riski. Lancet. 1998;352(9131):837-853.',
    ],

    tips: [
      'Karışıklığı önlemek ve doğru takip sağlamak için glukoz metrenizin hangi birim sistemini (mg/dL veya mmol/L) gösterdiğini her zaman doğrulayın',
      'Uluslararası seyahat ederseniz veya farklı glukoz izleme sistemleri arasında geçiş yaparsanız bir dönüşüm çizelgesi bulundurun',
      'Farklı ülkelerdeki sağlık hizmeti sağlayıcılarıyla iletişim kurarken, yanlış anlamaları önlemek için her zaman hangi birimi kullandığınızı belirtin',
      'Çoğu modern glukoz metre ayarlar menüsünde birimler arasında geçiş yapmanıza izin verir - cihaz kılavuzunuza bakın',
      'Kan şekeri okumalarını günlüğünüzde veya diyabet yönetim uygulamanızda birim sistemiyle açıkça not edilmiş olarak kaydedin',
      'Metreniz beklenmedik okumalar gösterirse, tehlikeli bir yüksek veya düşük okuma olduğunu varsaymadan önce birim sisteminin yanlışlıkla değişip değişmediğini kontrol edin',
      'Karşılaştırmaları kolaylaştırmak için zaman içinde eğilimleri takip etmek için aynı birim sistemini tutarlı bir şekilde kullanın',
      'Görüntülenen birimler ne olursa olsun, okumaların hedef dahilinde olup olmadığını hızlı bir şekilde belirleyebilmeniz için her iki birim sisteminde de normal aralıkları öğrenin',
    ],

    faqs: [
      {
        question: 'Kan şekeri için neden farklı birim sistemleri var?',
        answer:
          'Kan şekeri ölçümleri için farklı birim sistemlerinin kullanılması öncelikle tarihsel ve bölgeseldir. Amerika Birleşik Devletleri ağırlıklı olarak hacme göre kütleyi temsil eden ve bazı insanlar için daha sezgisel kabul edilen mg/dL (desilitre başına miligram) kullanır. Diğer çoğu ülke ve uluslararası bilim topluluğu, Uluslararası Birimler Sistemi\'nin (SI) bir parçası olan ve molar konsantrasyonu temsil eden mmol/L (litre başına milimol) kullanır. mmol/L sistemi, moleküler miktarlara dayalı olarak farklı maddeler arasında daha kolay karşılaştırma yapılmasına izin verdiği için bilimsel araştırmada tercih edilir. Her iki sistem de eşit derecede geçerli ve doğrudur, ancak küresel standardizasyonun olmaması seyahat ederken, uluslararası tıbbi literatürü okurken veya farklı pazarlar için üretilmiş glukoz metreleri kullanırken kafa karışıklığı yaratabilir.',
      },
      {
        question: 'İki birim arasında doğrulukta önemli bir fark var mı?',
        answer:
          'Hayır, mg/dL ve mmol/L arasında doğrulukta fark yoktur - bunlar sadece aynı ölçümü ifade etmenin farklı yollarıdır. Aralarındaki dönüşüm sabit bir matematiksel ilişkiye (18.018 dönüşüm faktörü) dayanır, bu nedenle birimler arasında dönüştürme herhangi bir doğruluk eklemez veya çıkarmaz. Ancak, yuvarlama küçük farklılıklar getirebilir. Örneğin, 100 mg/dL 5.55 mmol/L\'ye dönüşür, ancak bu pratik amaçlar için 5.6 mmol/L\'ye yuvarlanabilir. Bu küçük farklılıklar klinik olarak önemsizdir ve diyabet yönetim kararlarını etkilemez. Kan şekeri okumanızın doğruluğu, glukoz metrenizin kalitesine, uygun kalibrasyona, doğru test tekniğine ve taze test şeritlerine bağlıdır - sonucu görüntülemek için hangi birim sisteminin kullanıldığına değil.',
      },
      {
        question: 'Glukoz metrem bilmeden birim değiştirdiyse ne yapmalıyım?',
        answer:
          'Olağandışı yüksek veya düşük görünen beklenmedik okumalar fark ederseniz, önce metrenizin hangi birimi gösterdiğini kontrol edin. 6.0 mmol/L (normal) bir okuma, 6.0 mg/dL (tehlikeli derecede düşük) olarak yanlış okunursa paniğe neden olabilir veya tersine, 120 mg/dL (normal) 120 mmol/L (kritik derecede yüksek) ile karıştırılabilir. Çoğu glukoz metre birimi ekranda, genellikle köşede açıkça gösterir. Birimin değiştiğinden şüpheleniyorsanız, birim ayarını nasıl kontrol edeceğinizi ve değiştireceğinizi öğrenmek için metrenizin kılavuzuna bakın. Bazı metreler birimleri değiştirmek için başlangıç sırasında belirli düğmeleri basılı tutmayı gerektirir, diğerlerinin menü seçenekleri vardır. Bir okuma hakkında emin değilseniz, insülin veya ilaçla herhangi bir işlem yapmayın - bunun yerine, derhal yeniden test edin veya rehberlik için sağlık hizmeti sağlayıcınızla iletişime geçin. Kazara birim değişikliklerini önlemek için, bazı metreler birim ayarını kilitlemenize izin verir.',
      },
      {
        question: 'Farklı bir ülkeye seyahat edersem okumalarımı dönüştürmem gerekir mi?',
        answer:
          'Mutlaka değil, ancak her iki birim sistemini anlamak yararlıdır. Glukoz metreniz nerede olursanız olun programlanmış birim sisteminde çalışmaya ve okumaları göstermeye devam edecektir. Ancak, yurtdışında test şeritleri satın almanız, yerel sağlık hizmeti sağlayıcılarına danışmanız veya farklı bir birim sistemi kullanan bir ülkede tıbbi bakım aramanız gerekirse, mg/dL ve mmol/L arasında nasıl dönüştüreceğinizi bilmek önemli hale gelir. Bazı gezginler yerel sağlık hizmeti sağlayıcılarıyla iletişimi kolaylaştırmak için metrelerini yerel birim sistemine geçirmeyi tercih ederken, diğerleri metrelerini kendi birim sistemlerinde tutar ve gerektiğinde dönüşüm kullanır. Diyabetiniz varsa ve uluslararası seyahat ediyorsanız, bir dönüşüm çizelgesi taşımak ve hedef glukoz aralıklarınızı her iki birim sisteminde de bilmek akıllıca olur. Ayrıca, durumunuzu ve ilaç ihtiyaçlarınızı açıklayan doktorunuzdan bir mektup getirin, çünkü bu gümrükle veya yurtdışında tıbbi bakım ararken yardımcı olabilir.',
      },
      {
        question: 'Kan şekeri hedef aralıkları her iki ölçüm sisteminde de aynı mı?',
        answer:
          'Evet, hedef aralıklar hangi birim sistemi kullanılırsa kullanılsın aynı kan şekeri seviyelerini temsil eder - sadece farklı sayılarla ifade edilirler. Örneğin, 70-99 mg/dL normal açlık glukoz aralığı 3.9-5.5 mmol/L\'ye eşdeğerdir. Amerikan Diyabet Derneği\'nin diyabeti olan çoğu yetişkin için önerilen 80-130 mg/dL öğün öncesi hedefi, 4.4-7.2 mmol/L ile aynıdır. 180 mg/dL\'den az öğün sonrası hedef 10.0 mmol/L\'den az demektir. Birimler arasında dönüştürdüğünüzde, neyin sağlıklı veya sağlıksız olduğunu değiştirmiyorsunuz - sadece aynı klinik eşikleri farklı matematiksel terimlerle ifade ediyorsunuz. mmol/L kullanan ülkelerdeki sağlık hizmeti sağlayıcıları, mg/dL kullananlarla aynı kanıta dayalı diyabet yönetimi kılavuzlarını takip eder; sadece sayıları farklı ifade ederler. Kişisel hedef aralıklarınızı her zaman sağlık hizmeti sağlayıcınızla doğrulayın, çünkü bireysel hedefler özel sağlık durumlarınıza ve koşullarınıza göre değişebilir.',
      },
    ],
  },
};
