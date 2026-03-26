import { CalculatorContent } from '@/types/calculator';

export const sugarIntakeContent: CalculatorContent = {
  en: {
    whatIs: `The Daily Sugar Intake Calculator helps you determine how much added sugar you should consume per day based on your personal profile and internationally recognized health guidelines. Sugar is one of the most debated nutrients in modern nutrition, and for good reason — excessive sugar consumption has been linked to obesity, type 2 diabetes, heart disease, tooth decay, and even certain cancers.

The World Health Organization (WHO) strongly recommends that free sugars should make up less than 10% of total daily energy intake, with additional health benefits observed when intake is reduced below 5%. The American Heart Association (AHA) sets even stricter limits: no more than 36 grams (9 teaspoons) per day for men and 25 grams (6 teaspoons) per day for women. Despite these guidelines, the average American consumes about 77 grams of sugar per day — more than triple the AHA recommendation for women.

Understanding the difference between natural sugars and added sugars is crucial. Natural sugars found in whole fruits, vegetables, and plain dairy come packaged with fiber, vitamins, and minerals that slow absorption and provide nutritional value. Added sugars — those put into foods during processing or preparation — provide calories with no nutritional benefit. This calculator focuses on added sugar limits, helping you understand exactly how much room you have in your diet and where hidden sugars may be lurking in everyday foods.`,

    howToCalculate: `Using the Daily Sugar Intake Calculator is simple:

**Step 1: Enter Your Age**
Your age affects your total caloric needs and therefore your sugar allowance. Children and elderly individuals typically have lower calorie needs.

**Step 2: Select Your Gender**
Men and women have different sugar limits according to the AHA guidelines, and different baseline caloric needs.

**Step 3: Enter Your Weight**
Your weight is used to estimate your daily caloric expenditure, which directly influences your sugar allowance percentage.

**Step 4: Select Your Activity Level**
More active individuals burn more calories and therefore have a slightly higher absolute sugar limit (though the percentage remains the same).

**Step 5: Indicate Health Conditions**
Conditions like diabetes, prediabetes, heart disease, or active weight loss goals may require stricter sugar limits.

**Step 6: Calculate**
Click the calculate button to get your personalized sugar intake recommendation, food comparisons, and practical tips.`,

    formulaDetails: `The sugar intake calculations are based on two major health authority guidelines:

**WHO Guideline (2015):**
- Strong recommendation: Free sugars < 10% of total energy intake
- Conditional recommendation: Free sugars < 5% of total energy intake for additional benefits
- "Free sugars" includes all monosaccharides and disaccharides added to foods, plus sugars naturally present in honey, syrups, fruit juices, and fruit juice concentrates

**AHA Guideline (2009, reaffirmed 2020):**
- Men: No more than 36g (9 teaspoons, ~150 calories) of added sugar per day
- Women: No more than 25g (6 teaspoons, ~100 calories) of added sugar per day

**Daily Calorie Estimation:**
The calculator uses the Mifflin-St Jeor equation to estimate Basal Metabolic Rate (BMR), then multiplies by an activity factor:
- BMR (male) = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
- BMR (female) = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161
- TDEE = BMR × Activity Factor

**Conversion: 1 gram of sugar = 4 calories, 1 teaspoon ≈ 4 grams of sugar**`,

    interpretation: `Understanding your results:

**Recommended Daily Maximum:** This is the maximum amount of added sugar you should consume daily, based on the lower of the WHO percentage-based guideline and the AHA absolute limit. Staying within this number supports metabolic health and reduces chronic disease risk.

**Ideal Daily Maximum:** The WHO suggests even greater health benefits when sugar is kept below 5% of total calories. This stricter target is especially beneficial for weight management and dental health.

**Teaspoons Equivalent:** Since most people think of sugar in teaspoons (one teaspoon ≈ 4 grams), this helps visualize your daily allowance in practical kitchen terms.

**Food Comparisons:** These show how quickly everyday foods can use up your sugar budget. A single can of soda (35g) can exceed an entire day's recommended limit for women.

**Weekly and Monthly Limits:** These projections help with meal planning — if you have a special occasion, you can balance higher intake days with lower ones.`,

    limitations: `This calculator provides general guidance based on population-level recommendations. Individual sugar tolerance varies based on insulin sensitivity, gut microbiome composition, genetic factors, and overall dietary pattern. The calorie estimation uses average height assumptions and may not be accurate for individuals significantly above or below average height. People with specific medical conditions should follow their healthcare provider's personalized recommendations rather than general guidelines. Natural sugars from whole fruits and plain dairy are not included in these limits and are considered part of a healthy diet.`,

    healthRisks: `Excessive sugar consumption is associated with numerous health risks:

**Metabolic Effects:** High sugar intake drives insulin resistance, a precursor to type 2 diabetes. It promotes visceral fat accumulation (belly fat), which is metabolically active and produces inflammatory compounds.

**Cardiovascular Disease:** A 2014 study in JAMA Internal Medicine found that people who consumed 17-21% of calories from added sugar had a 38% higher risk of dying from cardiovascular disease compared to those consuming 8%.

**Obesity:** Sugar-sweetened beverages are the single largest source of added sugars and are strongly linked to weight gain. Liquid calories do not trigger the same satiety signals as solid food.

**Dental Health:** Sugar is the primary dietary cause of tooth decay. Bacteria in the mouth convert sugar to acid, which erodes tooth enamel.

**Liver Health:** Excess fructose (half of table sugar) is metabolized primarily by the liver and can lead to non-alcoholic fatty liver disease (NAFLD), which now affects approximately 25% of adults globally.

**Mental Health:** Emerging research links high sugar diets to increased risk of depression, anxiety, and cognitive decline.`,

    improvementTips: `Practical strategies to reduce sugar intake:

- Start your day with a protein-rich breakfast instead of sugary cereals or pastries
- Replace sugary drinks with water, herbal tea, or sparkling water
- Choose plain yogurt and add your own fresh fruit instead of buying flavored varieties
- Use spices like cinnamon, vanilla, and nutmeg to add sweetness without sugar
- Read nutrition labels and choose products with less than 5g of sugar per serving
- Cook more meals at home where you control the ingredients
- When craving sweets, try dark chocolate (70%+ cocoa) in small amounts
- Gradually reduce sugar in coffee and tea — your palate will adjust within weeks`,

    alternativeMeasures: `Besides limiting added sugar, consider these complementary approaches to better metabolic health:

- **Glycemic Index (GI):** Choose low-GI foods that cause slower, steadier blood sugar rises
- **Fiber Intake:** Aim for 25-30g of fiber daily — it slows sugar absorption and improves satiety
- **Meal Timing:** Eating sugar with meals (not on an empty stomach) reduces blood sugar spikes
- **Exercise:** Physical activity improves insulin sensitivity, helping your body handle sugar better
- **Sleep:** Poor sleep increases sugar cravings and reduces insulin sensitivity
- **Stress Management:** Chronic stress raises cortisol, which increases sugar cravings and blood sugar levels`,

    medicalDisclaimer: `This calculator provides general nutritional guidance based on WHO and AHA recommendations. It is not a substitute for professional medical advice, diagnosis, or treatment. Individuals with diabetes, prediabetes, metabolic syndrome, or other health conditions should consult their healthcare provider or a registered dietitian for personalized sugar intake recommendations. If you experience symptoms like excessive thirst, frequent urination, unexplained weight loss, or fatigue, seek medical attention promptly.`,

    references: [
      'WHO. Guideline: Sugars intake for adults and children. Geneva: World Health Organization; 2015.',
      'Johnson RK, et al. Dietary Sugars Intake and Cardiovascular Health: AHA Scientific Statement. Circulation. 2009;120(11):1011-1020.',
      'Yang Q, et al. Added Sugar Intake and Cardiovascular Diseases Mortality. JAMA Intern Med. 2014;174(4):516-524.',
      'Malik VS, et al. Sugar-sweetened beverages and risk of metabolic syndrome and type 2 diabetes. Diabetes Care. 2010;33(11):2477-2483.',
      'Stanhope KL. Sugar consumption, metabolic disease and obesity. Crit Rev Clin Lab Sci. 2016;53(1):52-67.',
      'USDA Dietary Guidelines for Americans 2020-2025. U.S. Department of Agriculture.',
    ],

    tips: [
      'A single can of soda contains about 35g of sugar — that alone exceeds the daily limit for women',
      'Hidden sugars are found in 74% of packaged foods under 60+ different names',
      'Fruit juice has as much sugar as soda — eat whole fruits instead for the fiber benefit',
      'Your taste buds adapt to less sugar within 2-3 weeks of reducing intake',
      'Natural sugars in whole fruits come with fiber that slows absorption — they are not the concern',
      'Ketchup, salad dressing, and bread are common hidden sugar sources',
      'Reading ingredient lists is more reliable than marketing claims like "natural" or "reduced sugar"',
      'Children should have even less sugar — the AHA recommends under 25g/day for ages 2-18',
    ],

    faqs: [
      {
        question: 'What is the difference between natural sugar and added sugar?',
        answer: 'Natural sugars are found naturally in foods like fruits (fructose) and milk (lactose). They come packaged with fiber, vitamins, minerals, and water that slow absorption and provide nutritional value. Added sugars are sugars put into foods during processing or preparation, including table sugar, high-fructose corn syrup, honey, and syrups. Health guidelines focus on limiting added sugars, not natural sugars in whole foods.',
      },
      {
        question: 'How much sugar per day is too much?',
        answer: 'According to the WHO, more than 10% of your total daily calories from free sugars is too much. The AHA sets stricter limits: more than 36g (9 teaspoons) for men and 25g (6 teaspoons) for women is considered excessive. The average person consumes about 77g per day, which is well above both guidelines and associated with increased health risks.',
      },
      {
        question: 'Does sugar cause diabetes?',
        answer: 'Sugar consumption alone does not directly cause diabetes, but excessive sugar intake — especially from sugary drinks — is strongly associated with increased risk of type 2 diabetes. High sugar consumption contributes to weight gain and insulin resistance, both of which are major risk factors. Reducing sugar intake is one of the most effective preventive measures.',
      },
      {
        question: 'Is honey or maple syrup healthier than white sugar?',
        answer: 'While honey and maple syrup contain trace amounts of vitamins and minerals that white sugar lacks, they are still forms of added sugar with similar caloric content (about 4 calories per gram). Your body processes them in largely the same way. All forms of added sugar should be counted toward your daily limit.',
      },
      {
        question: 'Should I worry about sugar in fruits?',
        answer: 'No, sugar in whole fruits is generally not a concern for healthy individuals. Whole fruits contain fiber, water, and nutrients that slow sugar absorption and provide significant health benefits. Studies consistently show that higher whole fruit consumption is associated with better health outcomes, even in people with diabetes. However, fruit juices and dried fruits have concentrated sugar without the full fiber benefit.',
      },
      {
        question: 'How can I identify hidden sugars in food labels?',
        answer: 'Sugar hides under many names on ingredient lists. Look for words ending in "-ose" (sucrose, fructose, maltose, dextrose), syrups (corn syrup, rice syrup, malt syrup), and other names like molasses, agave nectar, cane juice, and fruit juice concentrate. If sugar appears among the first 3 ingredients, the product is likely high in added sugar.',
      },
    ],
  },
  tr: {
    whatIs: `Günlük Şeker Tüketimi Hesaplayıcı, kişisel profilinize ve uluslararası sağlık kuruluşlarının kılavuzlarına göre günde ne kadar eklenmiş şeker tüketmeniz gerektiğini belirlemenize yardımcı olur. Şeker, modern beslenmede en çok tartışılan besinlerden biridir ve bunun iyi bir nedeni vardır — aşırı şeker tüketimi obezite, tip 2 diyabet, kalp hastalığı, diş çürüğü ve hatta bazı kanser türleriyle ilişkilendirilmiştir.

Dünya Sağlık Örgütü (DSÖ), serbest şekerlerin toplam günlük enerji alımının %10'undan az olması gerektiğini güçlü bir şekilde önermektedir ve alım %5'in altına düşürüldüğünde ek sağlık faydaları gözlemlenmektedir. Amerikan Kalp Derneği (AHA) daha da katı sınırlar belirlemektedir: erkekler için günde en fazla 36 gram (9 çay kaşığı), kadınlar için günde en fazla 25 gram (6 çay kaşığı). Bu kılavuzlara rağmen, ortalama bir kişi günde yaklaşık 77 gram şeker tüketmektedir — bu, kadınlar için AHA önerisinin üç katından fazladır.

Doğal şekerler ile eklenmiş şekerler arasındaki farkı anlamak çok önemlidir. Bütün meyvelerde, sebzelerde ve sade süt ürünlerinde bulunan doğal şekerler; emilimi yavaşlatan ve besin değeri sağlayan lif, vitamin ve minerallerle birlikte gelir. Eklenmiş şekerler ise işleme veya hazırlama sırasında gıdalara eklenen şekerlerdir ve hiçbir besin değeri olmadan kalori sağlar. Bu hesaplayıcı, eklenmiş şeker sınırlarına odaklanarak diyetinizde tam olarak ne kadar alanınız olduğunu ve günlük gıdalarda gizli şekerlerin nerede pusuya yattığını anlamanıza yardımcı olur.`,

    howToCalculate: `Günlük Şeker Tüketimi Hesaplayıcısını kullanmak çok kolaydır:

**Adım 1: Yaşınızı Girin**
Yaşınız toplam kalori ihtiyacınızı ve dolayısıyla şeker kotanızı etkiler. Çocuklar ve yaşlı bireyler genellikle daha düşük kalori ihtiyacına sahiptir.

**Adım 2: Cinsiyetinizi Seçin**
AHA kılavuzlarına göre erkekler ve kadınlar farklı şeker sınırlarına sahiptir ve temel kalorik ihtiyaçları farklıdır.

**Adım 3: Kilonuzu Girin**
Kilonuz, günlük kalori harcamanızı tahmin etmek için kullanılır ve bu doğrudan şeker kotanızı etkiler.

**Adım 4: Aktivite Düzeyinizi Seçin**
Daha aktif bireyler daha fazla kalori yakar ve dolayısıyla biraz daha yüksek mutlak şeker sınırına sahiptir (yüzde aynı kalsa da).

**Adım 5: Sağlık Durumunuzu Belirtin**
Diyabet, prediyabet, kalp hastalığı veya aktif kilo verme hedefleri gibi durumlar daha katı şeker sınırları gerektirebilir.

**Adım 6: Hesaplayın**
Kişiselleştirilmiş şeker tüketimi önerinizi, gıda karşılaştırmalarını ve pratik ipuçlarını almak için hesapla düğmesine tıklayın.`,

    formulaDetails: `Şeker tüketimi hesaplamaları iki büyük sağlık otoritesinin kılavuzlarına dayanmaktadır:

**DSÖ Kılavuzu (2015):**
- Güçlü öneri: Serbest şekerler toplam enerji alımının %10'undan az olmalı
- Koşullu öneri: Ek sağlık faydaları için serbest şekerler toplam enerji alımının %5'inden az olmalı
- "Serbest şekerler" gıdalara eklenen tüm monosakkaritler ve disakkaritler ile bal, şurup, meyve suları ve meyve suyu konsantrelerinde doğal olarak bulunan şekerleri kapsar

**AHA Kılavuzu (2009, 2020'de teyit edildi):**
- Erkekler: Günde en fazla 36g (9 çay kaşığı, ~150 kalori) eklenmiş şeker
- Kadınlar: Günde en fazla 25g (6 çay kaşığı, ~100 kalori) eklenmiş şeker

**Günlük Kalori Tahmini:**
Hesaplayıcı, Bazal Metabolizma Hızını (BMH) tahmin etmek için Mifflin-St Jeor denklemini kullanır ve ardından bir aktivite faktörü ile çarpar:
- BMH (erkek) = 10 × kilo(kg) + 6,25 × boy(cm) - 5 × yaş + 5
- BMH (kadın) = 10 × kilo(kg) + 6,25 × boy(cm) - 5 × yaş - 161
- TDEE = BMH × Aktivite Faktörü

**Dönüşüm: 1 gram şeker = 4 kalori, 1 çay kaşığı ≈ 4 gram şeker**`,

    interpretation: `Sonuçlarınızı anlama:

**Önerilen Günlük Maksimum:** Bu, DSÖ yüzde bazlı kılavuzu ile AHA mutlak sınırının düşük olanına dayalı olarak günlük tüketmeniz gereken maksimum eklenmiş şeker miktarıdır. Bu sayı içinde kalmak metabolik sağlığı destekler ve kronik hastalık riskini azaltır.

**İdeal Günlük Maksimum:** DSÖ, şeker toplam kalorinin %5'inin altında tutulduğunda daha da büyük sağlık faydaları olduğunu öne sürmektedir. Bu daha katı hedef özellikle kilo yönetimi ve diş sağlığı için faydalıdır.

**Çay Kaşığı Eşdeğeri:** Çoğu insan şekeri çay kaşığı olarak düşündüğünden (bir çay kaşığı ≈ 4 gram), bu günlük kotanızı pratik mutfak ölçüleriyle görselleştirmenize yardımcı olur.

**Gıda Karşılaştırmaları:** Bunlar, günlük gıdaların şeker bütçenizi ne kadar hızlı tüketebileceğini gösterir. Tek bir kutu gazlı içecek (35g) kadınlar için bir günün tamamının önerilen sınırını aşabilir.

**Haftalık ve Aylık Limitler:** Bu projeksiyonlar öğün planlamasına yardımcı olur — özel bir gününüz varsa, daha yüksek alım günlerini daha düşük günlerle dengeleyebilirsiniz.`,

    limitations: `Bu hesaplayıcı, toplum düzeyindeki önerilere dayalı genel rehberlik sağlar. Bireysel şeker toleransı insülin duyarlılığına, bağırsak mikrobiyom bileşimine, genetik faktörlere ve genel beslenme düzenine göre değişir. Kalori tahmini ortalama boy varsayımları kullanır ve ortalama boyun önemli ölçüde üstünde veya altında olan bireyler için doğru olmayabilir. Belirli tıbbi durumları olan kişiler, genel kılavuzlar yerine sağlık uzmanlarının kişiselleştirilmiş önerilerine uymalıdır. Bütün meyveler ve sade süt ürünlerindeki doğal şekerler bu sınırlara dahil değildir ve sağlıklı bir diyetin parçası olarak kabul edilir.`,

    healthRisks: `Aşırı şeker tüketimi çok sayıda sağlık riskiyle ilişkilidir:

**Metabolik Etkiler:** Yüksek şeker alımı, tip 2 diyabetin öncüsü olan insülin direncini tetikler. Metabolik olarak aktif olan ve iltihaplı bileşikler üreten visseral yağ birikimini (göbek yağı) teşvik eder.

**Kardiyovasküler Hastalık:** JAMA Internal Medicine'de yayınlanan 2014 tarihli bir çalışma, kalorilerinin %17-21'ini eklenmiş şekerden alan kişilerin, %8 tüketenlere kıyasla kardiyovasküler hastalıktan ölme riskinin %38 daha yüksek olduğunu bulmuştur.

**Obezite:** Şekerli içecekler, eklenmiş şekerlerin en büyük tek kaynağıdır ve kilo alımıyla güçlü bir şekilde bağlantılıdır. Sıvı kaloriler, katı gıda ile aynı tokluk sinyallerini tetiklemez.

**Diş Sağlığı:** Şeker, diş çürüğünün birincil beslenme nedenidir. Ağızdaki bakteriler şekeri aside dönüştürür ve bu asit diş minesini aşındırır.

**Karaciğer Sağlığı:** Fazla fruktoz (sofra şekerinin yarısı) öncelikle karaciğer tarafından metabolize edilir ve küresel olarak yetişkinlerin yaklaşık %25'ini etkileyen alkolik olmayan yağlı karaciğer hastalığına (NAYKH) yol açabilir.

**Ruh Sağlığı:** Yeni araştırmalar, yüksek şekerli diyetleri depresyon, anksiyete ve bilişsel gerileme riskinin artmasıyla ilişkilendirmektedir.`,

    improvementTips: `Şeker alımını azaltmak için pratik stratejiler:

- Güne şekerli gevrekler veya hamur işleri yerine protein açısından zengin bir kahvaltıyla başlayın
- Şekerli içecekleri su, bitki çayı veya maden suyu ile değiştirin
- Aromalı çeşitler satın almak yerine sade yoğurt seçin ve kendi taze meyvenizi ekleyin
- Şeker olmadan tatlılık katmak için tarçın, vanilya ve muskat gibi baharatları kullanın
- Besin etiketlerini okuyun ve porsiyon başına 5g'dan az şeker içeren ürünleri seçin
- Malzemeleri kontrol ettiğiniz evde daha fazla yemek pişirin
- Tatlı isteği geldiğinde küçük miktarlarda bitter çikolata (%70+ kakao) deneyin
- Kahve ve çaydaki şekeri kademeli olarak azaltın — damak zevkiniz haftalar içinde uyum sağlayacaktır`,

    alternativeMeasures: `Eklenmiş şekeri sınırlamanın yanı sıra, daha iyi metabolik sağlık için bu tamamlayıcı yaklaşımları düşünün:

- **Glisemik İndeks (Gİ):** Daha yavaş ve istikrarlı kan şekeri yükselişlerine neden olan düşük Gİ'li gıdaları seçin
- **Lif Alımı:** Günlük 25-30g lif hedefleyin — şeker emilimini yavaşlatır ve tokluk hissini artırır
- **Öğün Zamanlaması:** Şekeri boş karnına değil öğünlerle birlikte tüketmek kan şekeri sivrilmelerini azaltır
- **Egzersiz:** Fiziksel aktivite insülin duyarlılığını artırır ve vücudunuzun şekeri daha iyi işlemesine yardımcı olur
- **Uyku:** Yetersiz uyku şeker isteklerini artırır ve insülin duyarlılığını azaltır
- **Stres Yönetimi:** Kronik stres kortizolü yükseltir, bu da şeker isteklerini ve kan şekeri seviyelerini artırır`,

    medicalDisclaimer: `Bu hesaplayıcı, DSÖ ve AHA önerilerine dayalı genel beslenme rehberliği sağlar. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine geçmez. Diyabet, prediyabet, metabolik sendrom veya diğer sağlık durumları olan bireyler, kişiselleştirilmiş şeker tüketimi önerileri için sağlık uzmanlarına veya diyetisyenlerine danışmalıdır. Aşırı susuzluk, sık idrara çıkma, açıklanamayan kilo kaybı veya yorgunluk gibi belirtiler yaşıyorsanız derhal tıbbi yardım alın.`,

    references: [
      'DSÖ. Yetişkinler ve çocuklar için şeker alımı kılavuzu. Cenevre: Dünya Sağlık Örgütü; 2015.',
      'Johnson RK, vd. Dietary Sugars Intake and Cardiovascular Health: AHA Scientific Statement. Circulation. 2009;120(11):1011-1020.',
      'Yang Q, vd. Added Sugar Intake and Cardiovascular Diseases Mortality. JAMA Intern Med. 2014;174(4):516-524.',
      'Malik VS, vd. Sugar-sweetened beverages and risk of metabolic syndrome and type 2 diabetes. Diabetes Care. 2010;33(11):2477-2483.',
      'Stanhope KL. Sugar consumption, metabolic disease and obesity. Crit Rev Clin Lab Sci. 2016;53(1):52-67.',
      'USDA 2020-2025 Amerikalılar için Beslenme Kılavuzları. ABD Tarım Bakanlığı.',
    ],

    tips: [
      'Tek bir kutu gazlı içecek yaklaşık 35g şeker içerir — bu tek başına kadınlar için günlük limiti aşar',
      'Gizli şekerler paketli gıdaların %74\'ünde 60\'tan fazla farklı isim altında bulunur',
      'Meyve suyu gazlı içecek kadar şeker içerir — lif faydası için bütün meyve yiyin',
      'Tat alma duyunuz, alımı azalttıktan sonra 2-3 hafta içinde daha az şekere uyum sağlar',
      'Bütün meyvelerdeki doğal şekerler emilimi yavaşlatan lifle birlikte gelir — asıl sorun bunlar değil',
      'Ketçap, salata sosu ve ekmek yaygın gizli şeker kaynaklarıdır',
      'İçerik listelerini okumak, "doğal" veya "az şekerli" gibi pazarlama iddialarından daha güvenilirdir',
      'Çocuklar daha da az şeker almalıdır — AHA 2-18 yaş arası için günde 25g\'ın altını önerir',
    ],

    faqs: [
      {
        question: 'Doğal şeker ile eklenmiş şeker arasındaki fark nedir?',
        answer: 'Doğal şekerler meyveler (fruktoz) ve süt (laktoz) gibi gıdalarda doğal olarak bulunur. Emilimi yavaşlatan ve besin değeri sağlayan lif, vitamin, mineral ve su ile birlikte gelirler. Eklenmiş şekerler ise işleme veya hazırlama sırasında gıdalara eklenen şekerlerdir — sofra şekeri, yüksek fruktozlu mısır şurubu, bal ve şuruplar dahil. Sağlık kılavuzları, bütün gıdalardaki doğal şekerleri değil, eklenmiş şekerleri sınırlamaya odaklanır.',
      },
      {
        question: 'Günde ne kadar şeker fazladır?',
        answer: 'DSÖ\'ye göre toplam günlük kalorilerinizin %10\'undan fazlasının serbest şekerden gelmesi fazladır. AHA daha katı sınırlar koyar: erkekler için 36g\'dan (9 çay kaşığı), kadınlar için 25g\'dan (6 çay kaşığı) fazlası aşırı kabul edilir. Ortalama bir kişi günde yaklaşık 77g tüketmektedir ki bu her iki kılavuzun da çok üzerindedir.',
      },
      {
        question: 'Şeker diyabete neden olur mu?',
        answer: 'Şeker tüketimi tek başına doğrudan diyabete neden olmaz, ancak aşırı şeker alımı — özellikle şekerli içeceklerden — tip 2 diyabet riskinin artmasıyla güçlü bir şekilde ilişkilidir. Yüksek şeker tüketimi, her ikisi de önemli risk faktörleri olan kilo alımına ve insülin direncine katkıda bulunur. Şeker alımını azaltmak en etkili koruyucu önlemlerden biridir.',
      },
      {
        question: 'Bal veya akçaağaç şurubu beyaz şekerden daha mı sağlıklı?',
        answer: 'Bal ve akçaağaç şurubu, beyaz şekerde bulunmayan eser miktarda vitamin ve mineral içerse de yine de benzer kalori içeriğine (gram başına yaklaşık 4 kalori) sahip eklenmiş şeker formlarıdır. Vücudunuz bunları büyük ölçüde aynı şekilde işler. Tüm eklenmiş şeker formları günlük limitinize dahil edilmelidir.',
      },
      {
        question: 'Meyvelerdeki şekerden endişe etmeli miyim?',
        answer: 'Hayır, bütün meyvelerdeki şeker sağlıklı bireyler için genellikle endişe konusu değildir. Bütün meyveler, şeker emilimini yavaşlatan ve önemli sağlık faydaları sağlayan lif, su ve besinler içerir. Çalışmalar, diyabetli kişilerde bile daha yüksek bütün meyve tüketiminin daha iyi sağlık sonuçlarıyla ilişkili olduğunu tutarlı bir şekilde göstermektedir. Ancak meyve suları ve kuru meyveler, tam lif faydası olmadan yoğunlaştırılmış şeker içerir.',
      },
      {
        question: 'Gıda etiketlerindeki gizli şekerleri nasıl tespit edebilirim?',
        answer: 'Şeker, içerik listelerinde birçok isim altında gizlenir. "-oz" ile biten kelimelere (sukroz, fruktoz, maltoz, dekstroz), şuruplara (mısır şurubu, pirinç şurubu, malt şurubu) ve melas, agave nektarı, kamış suyu, meyve suyu konsantresi gibi diğer isimlere dikkat edin. Şeker ilk 3 içerik arasında görünüyorsa, ürün muhtemelen yüksek eklenmiş şeker içermektedir.',
      },
    ],
  },
};
