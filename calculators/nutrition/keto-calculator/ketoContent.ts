import { CalculatorContent } from '@/types/calculator';

export const ketoContent: CalculatorContent = {
  en: {
    whatIs:
      `The ketogenic (keto) diet is a high-fat, moderate-protein, very-low-carbohydrate eating plan that shifts your body's primary fuel source from glucose to fat. By drastically reducing carbohydrate intake to typically 20-50 grams per day, your body enters a metabolic state called ketosis, where it produces ketone bodies from fat stores to fuel the brain and body. Originally developed in the 1920s as a treatment for epilepsy, the ketogenic diet has gained enormous popularity for weight loss, blood sugar management, and cognitive performance. The standard ketogenic diet (SKD) follows a macronutrient ratio of approximately 70% fat, 25% protein, and 5% carbohydrates. This keto calculator determines your personalized macronutrient targets based on your body composition, activity level, and goals, whether you want to lose weight, maintain your physique, or build muscle while staying in ketosis.`,

    howToCalculate:
      `This keto calculator uses the Mifflin-St Jeor equation to determine your Basal Metabolic Rate (BMR), then multiplies it by an activity factor to estimate your Total Daily Energy Expenditure (TDEE). For men: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age + 5. For women: BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161. Your TDEE is then adjusted based on your goal (20% deficit for weight loss, maintenance for weight maintenance, or 10% surplus for muscle gain). The calculator then distributes your target calories across three macronutrients using keto-specific ratios. For Standard Keto (SKD): 70% fat, 25% protein, 5% carbs. For Targeted Keto (TKD): 65% fat, 25% protein, 10% carbs. For Cyclical Keto (CKD): alternating between strict keto days and higher-carb refeed days. If you provide your body fat percentage, the calculator uses it directly; otherwise, it estimates body fat using a BMI-based formula to calculate lean body mass.`,

    formulaDetails:
      `The keto calculator employs multiple formulas working together. The Mifflin-St Jeor equation (1990) is used for BMR calculation as it has been validated as the most accurate formula for modern populations. BMR represents the calories your body burns at complete rest. The activity multiplier adjusts for daily movement: Sedentary (1.2), Lightly Active (1.375), Moderately Active (1.55), Active (1.725), Very Active (1.9). Macronutrient distribution follows evidence-based keto ratios: each gram of fat provides 9 calories, while protein and carbohydrates each provide 4 calories. For a 2,000 calorie diet on standard keto: Fat = 2000 x 0.70 / 9 = 156g, Protein = 2000 x 0.25 / 4 = 125g, Net Carbs = 2000 x 0.05 / 4 = 25g. Body fat estimation (when not provided) uses: Men BF% = 1.20 x BMI + 0.23 x Age - 16.2, Women BF% = 1.20 x BMI + 0.23 x Age - 5.4. Water intake is calculated at 40ml per kg of body weight, higher than the standard 30-35ml recommendation because the keto diet has a diuretic effect that increases water and electrolyte loss.`,

    categories: [
      {
        range: '5-10%',
        label: 'Net Carbs / Day',
        description: 'Standard ketogenic diet requires only 20-50g of net carbs per day. This is roughly 5-10% of total calories, enough to maintain ketosis while getting essential micronutrients from vegetables.',
        color: '#10B981',
      },
      {
        range: '20-25%',
        label: 'Protein',
        description: 'Moderate protein intake prevents muscle loss while avoiding excess gluconeogenesis. Aim for 0.8-1.0g per pound of lean body mass. Too much protein can convert to glucose and disrupt ketosis.',
        color: '#EF4444',
      },
      {
        range: '65-75%',
        label: 'Fat',
        description: 'Fat becomes your primary energy source on keto. Focus on healthy sources: avocado, olive oil, coconut oil, butter, nuts, and fatty fish. Fat keeps you satiated and fuels ketone production.',
        color: '#F59E0B',
      },
    ],

    interpretation:
      `Your keto macro results show three different ketogenic diet approaches tailored to your body and goals. The Standard Ketogenic Diet (SKD) is recommended for most people, especially beginners and those focused on weight loss. It provides the most consistent ketosis with the lowest carbohydrate intake. The Targeted Ketogenic Diet (TKD) is best for active individuals who exercise regularly and need extra carbohydrates around workout times to fuel performance without disrupting ketosis. The Cyclical Ketogenic Diet (CKD) alternates between strict keto days and higher-carb refeed days, suitable for advanced athletes and bodybuilders who need periodic glycogen replenishment. Your daily calorie target is based on your TDEE adjusted for your goal. The water intake recommendation is higher than normal because ketosis increases fluid loss. Monitor how you feel and adjust macros gradually, keeping net carbs below 50g daily to maintain ketosis.`,

    limitations:
      `The keto calculator provides estimates based on population-level formulas and may not perfectly match individual metabolic rates. Several factors can affect accuracy: the Mifflin-St Jeor equation has a margin of error of approximately 10% compared to measured BMR. Activity level multipliers are approximations and individual energy expenditure varies significantly. Body fat percentage estimation from BMI is less accurate than direct measurement methods like DEXA scans. The calculator does not account for metabolic adaptation that occurs during prolonged caloric restriction. Individual carbohydrate tolerance for achieving ketosis varies, some people may need as few as 15g net carbs while others can stay in ketosis at 50g. Protein requirements depend on individual factors including muscle mass, training intensity, and recovery needs. Medical conditions, medications (particularly diabetes medications, blood pressure drugs, and anti-seizure medications), and hormonal factors can significantly affect how your body responds to a ketogenic diet. This calculator should be used as a starting point, with adjustments made based on actual results, ketone measurements, and professional guidance.`,

    healthRisks:
      `While the ketogenic diet has demonstrated benefits for weight loss, blood sugar control, and certain neurological conditions, it is not without risks. Short-term side effects include the "keto flu" (headache, fatigue, nausea, brain fog) during the adaptation period, typically lasting 1-2 weeks. Dehydration and electrolyte imbalances are common if fluid and mineral intake is not carefully managed. Constipation may occur due to reduced fiber intake. Long-term concerns include potential nutrient deficiencies (vitamins C, K, folate, and certain minerals), elevated LDL cholesterol in some individuals (though HDL and triglycerides often improve), kidney stones from increased protein metabolism and calcium excretion, and possible negative effects on gut microbiome diversity. The keto diet is contraindicated for people with pancreatitis, liver failure, fat metabolism disorders, primary carnitine deficiency, porphyria, and pyruvate kinase deficiency. Pregnant and breastfeeding women, children, and those with eating disorder history should avoid strict keto without medical supervision. People with type 1 diabetes risk diabetic ketoacidosis (DKA) on very low-carb diets and must work closely with their endocrinologist.`,

    alternativeMeasures:
      `Several methods can help you track your ketosis status beyond macro calculations. Blood ketone meters measure beta-hydroxybutyrate (BHB), the primary ketone body, and are considered the gold standard for ketosis measurement. Nutritional ketosis is generally defined as BHB levels between 0.5-3.0 mmol/L. Urine ketone strips measure acetoacetate and are inexpensive but become less accurate as your body becomes fat-adapted, since fewer ketones are excreted in urine. Breath ketone meters measure acetone levels and offer a non-invasive alternative, though they are less precise than blood meters. The glucose-ketone index (GKI) divides blood glucose by blood ketones and provides a comprehensive metabolic picture; a GKI below 9 indicates mild ketosis, below 6 moderate, and below 3 deep ketosis. Beyond ketone measurement, body composition analysis through DEXA scans or bioelectrical impedance can track changes in fat mass and lean mass more accurately than scale weight alone, which fluctuates significantly on keto due to water balance changes.`,

    demographicDifferences:
      `Ketogenic diet requirements vary significantly across different populations. Women may experience different responses to keto than men, partly due to hormonal fluctuations. Some women report menstrual irregularities on very strict keto, and a slightly higher carb allowance (30-50g net carbs) may be more sustainable. During the luteal phase of the menstrual cycle, carb cravings increase naturally and slightly relaxing carb limits during this time may improve adherence without disrupting ketosis. Older adults (65+) may need higher protein intake (1.0-1.2g per pound of lean mass) to prevent muscle loss and should be monitored for kidney function. Athletes and physically active individuals generally benefit from the Targeted or Cyclical keto approaches, as very low carb intake can impair high-intensity performance. Individuals with insulin resistance or type 2 diabetes often respond exceptionally well to keto, sometimes requiring medication adjustments within days of starting. Genetic factors also play a role: some people are "hyper-responders" whose LDL cholesterol increases significantly on high-fat diets, requiring monitoring and potential dietary modifications. Cultural and regional food availability also affects keto implementation; Mediterranean-style keto emphasizing olive oil, fish, and vegetables may be more sustainable and heart-healthy than approaches relying heavily on processed meats and dairy.`,

    medicalDisclaimer:
      `This keto calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The ketogenic diet is a significant dietary change that can affect blood sugar levels, blood pressure, cholesterol, and medication effectiveness. If you are taking medications for diabetes, hypertension, or any chronic condition, consult your healthcare provider before starting a ketogenic diet, as medication dosages may need immediate adjustment. The ketogenic diet is not recommended for people with certain metabolic disorders, liver disease, pancreatitis, or gallbladder disease without medical supervision. Pregnant and breastfeeding women should not follow a strict ketogenic diet without guidance from their obstetrician or midwife. If you experience severe symptoms such as persistent vomiting, chest pain, extreme fatigue, or confusion while on a ketogenic diet, seek medical attention immediately. Never discontinue prescribed medications based on dietary changes without consulting your healthcare provider. This calculator provides estimates only and individual nutritional needs may vary significantly.`,

    references: [
      'Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.',
      'Volek JS, Phinney SD. The Art and Science of Low Carbohydrate Living. Beyond Obesity LLC. 2011.',
      'Paoli A, Rubini A, Volek JS, Grimaldi KA. Beyond weight loss: a review of the therapeutic uses of very-low-carbohydrate (ketogenic) diets. Eur J Clin Nutr. 2013;67(8):789-796.',
      'Gibson AA, et al. Do ketogenic diets really suppress appetite? A systematic review and meta-analysis. Obes Rev. 2015;16(1):64-76.',
      'Westman EC, et al. The effect of a low-carbohydrate, ketogenic diet versus a low-glycemic index diet on glycemic control in type 2 diabetes mellitus. Nutr Metab. 2008;5:36.',
      'National Lipid Association. Statement on the ketogenic diet for weight management. J Clin Lipidol. 2019.',
      'Harvey CJDC, et al. The use of nutritional supplements to induce ketosis and reduce symptoms associated with keto-induction. PeerJ. 2018;6:e4488.',
    ],

    tips: [
      'Start with 20g net carbs per day for the first two weeks to enter ketosis quickly, then gradually find your personal carb tolerance',
      'Focus on whole, unprocessed foods rather than "keto-friendly" packaged products which often contain hidden carbs and artificial ingredients',
      'Track your macros carefully for the first month using an app, then you can estimate more intuitively once you learn portion sizes',
      'Supplement electrolytes (sodium, potassium, magnesium) especially during the first 2-4 weeks to prevent or minimize keto flu symptoms',
      'Eat adequate fiber from low-carb vegetables (25-35g daily) to support digestive health and gut microbiome',
      'Measure your ketone levels with blood strips to confirm you are in nutritional ketosis (0.5-3.0 mmol/L BHB)',
      'Prepare keto meals and snacks in advance to avoid making poor food choices when hungry',
      'Consider intermittent fasting alongside keto for enhanced fat burning and autophagy benefits',
    ],

    faqs: [
      {
        question: 'How long does it take to enter ketosis?',
        answer:
          'Most people enter ketosis within 2-7 days of restricting carbohydrates to 20-50g per day. The exact time depends on your glycogen stores, activity level, and metabolism. Factors that speed up ketosis include exercise, fasting, and consuming MCT oil or exogenous ketones. You can verify ketosis using blood, urine, or breath ketone testing devices.',
      },
      {
        question: 'Is the keto diet safe for long-term use?',
        answer:
          `Studies of up to 2 years show the keto diet is generally safe for healthy adults when followed properly with adequate nutrition. However, long-term data beyond 2 years is limited. Key concerns include nutrient deficiencies (supplement as needed), kidney stone risk (stay hydrated), and LDL cholesterol changes in some individuals. Regular blood work monitoring is recommended. People with pre-existing medical conditions should work with healthcare providers.`,
      },
      {
        question: 'What is the difference between net carbs and total carbs?',
        answer:
          `Net carbs equal total carbohydrates minus fiber and sugar alcohols. On keto, you track net carbs because fiber and most sugar alcohols don't significantly impact blood sugar or insulin levels. For example, a cup of broccoli has 6g total carbs but only 2.4g net carbs (6g minus 3.6g fiber). Some sugar alcohols like maltitol do partially affect blood sugar, so be cautious with processed "keto" products.`,
      },
      {
        question: 'Can I exercise on the keto diet?',
        answer:
          'Yes, but expect a temporary decrease in performance during the first 2-4 weeks of adaptation. Once fat-adapted, endurance performance often improves while high-intensity performance may remain slightly lower. For intense training, consider the Targeted Keto Diet (TKD) which adds 25-50g of fast-acting carbs around workouts. Strength training is highly recommended on keto to preserve and build muscle mass.',
      },
      {
        question: 'What should I eat if I feel the "keto flu"?',
        answer:
          'The keto flu (headache, fatigue, nausea, irritability) is primarily caused by dehydration and electrolyte imbalances. Increase sodium intake (add salt, drink bone broth), take magnesium supplements (400mg daily), eat potassium-rich keto foods (avocado, spinach), drink plenty of water, and rest. Symptoms typically resolve within 1-2 weeks. If symptoms are severe or persist beyond 2 weeks, consult a healthcare provider.',
      },
      {
        question: 'How much weight can I lose on keto?',
        answer:
          'Initial weight loss of 2-5kg in the first week is common but largely water weight from glycogen depletion. After the initial phase, sustainable fat loss is typically 0.5-1kg per week with a calorie deficit. Individual results vary based on starting weight, metabolic rate, activity level, and adherence. Focus on body composition changes rather than scale weight, as keto can simultaneously reduce fat and preserve or build muscle.',
      },
      {
        question: 'Can I drink alcohol on keto?',
        answer:
          'Some alcoholic drinks are keto-compatible in moderation. Dry wines (5-6g carbs per glass), spirits like vodka, whiskey, and tequila (0g carbs when consumed straight or with zero-carb mixers), and light beers (3-6g carbs) can fit within keto macros. However, alcohol is processed preferentially by the liver, temporarily halting fat burning. Alcohol tolerance decreases on keto, so drink less than you normally would. Avoid cocktails with sugary mixers, regular beer, and sweet wines.',
      },
    ],
  },
  tr: {
    whatIs:
      `Ketojenik (keto) diyet, vücudunuzun birincil yakıt kaynağını glikozdan yağa dönüştüren yüksek yağlı, orta proteinli, çok düşük karbonhidratlı bir beslenme planıdır. Karbonhidrat alımını genellikle günde 20-50 grama düşürerek vücudunuz ketoz adı verilen metabolik bir duruma girer ve beyin ile vücudu beslemek için yağ depolarından keton cisimleri üretir. İlk olarak 1920'lerde epilepsi tedavisi olarak geliştirilen ketojenik diyet, kilo verme, kan şekeri yönetimi ve bilişsel performans için büyük popülerlik kazanmıştır. Standart ketojenik diyet (SKD) yaklaşık %70 yağ, %25 protein ve %5 karbonhidrat makro besin oranını takip eder. Bu keto hesaplayıcı, vücut kompozisyonunuz, aktivite seviyeniz ve hedeflerinize göre kişiselleştirilmiş makro besin hedeflerinizi belirler; ister kilo vermek, ister formunuzu korumak, ister ketozda kalarak kas yapmak isteyin.`,

    howToCalculate:
      `Bu keto hesaplayıcı, Bazal Metabolizma Hızınızı (BMR) belirlemek için Mifflin-St Jeor denklemini kullanır, ardından Toplam Günlük Enerji Harcamanızı (TDEE) tahmin etmek için aktivite faktörüyle çarpar. Erkekler için: BMR = 10 x ağırlık(kg) + 6.25 x boy(cm) - 5 x yaş + 5. Kadınlar için: BMR = 10 x ağırlık(kg) + 6.25 x boy(cm) - 5 x yaş - 161. TDEE'niz daha sonra hedefinize göre ayarlanır (kilo vermek için %20 açık, kilo koruma veya kas kazanmak için %10 fazla). Hesaplayıcı daha sonra hedef kalorilerinizi keto'ya özgü oranlar kullanarak üç makro besine dağıtır. Standart Keto (SKD): %70 yağ, %25 protein, %5 karb. Hedefli Keto (TKD): %65 yağ, %25 protein, %10 karb. Döngüsel Keto (CKD): sıkı keto günleri ile yüksek karbonhidratlı yenileme günleri arasında değişim. Vücut yağ yüzdenizi sağlarsanız hesaplayıcı doğrudan kullanır; aksi takdirde yağsız vücut kütlesini hesaplamak için VKİ tabanlı formülle vücut yağını tahmin eder.`,

    formulaDetails:
      `Keto hesaplayıcı birlikte çalışan birden fazla formül kullanır. BMR hesaplaması için Mifflin-St Jeor denklemi (1990) kullanılır çünkü modern popülasyonlar için en doğru formül olarak doğrulanmıştır. BMR, vücudunuzun tam dinlenme halinde yaktığı kalorileri temsil eder. Aktivite çarpanı günlük harekete göre ayarlanır: Hareketsiz (1.2), Hafif Aktif (1.375), Orta Aktif (1.55), Aktif (1.725), Çok Aktif (1.9). Makro besin dağılımı kanıta dayalı keto oranlarını takip eder: her gram yağ 9 kalori sağlarken, protein ve karbonhidrat her biri 4 kalori sağlar. Standart ketoda 2.000 kalorilik bir diyet için: Yağ = 2000 x 0.70 / 9 = 156g, Protein = 2000 x 0.25 / 4 = 125g, Net Karb = 2000 x 0.05 / 4 = 25g. Vücut yağı tahmini (sağlanmadığında): Erkekler VY% = 1.20 x VKİ + 0.23 x Yaş - 16.2, Kadınlar VY% = 1.20 x VKİ + 0.23 x Yaş - 5.4. Su alımı, keto diyetinin su ve elektrolit kaybını artıran diüretik etkisi nedeniyle standart 30-35ml önerisinden daha yüksek olarak vücut ağırlığı kg başına 40ml olarak hesaplanır.`,

    categories: [
      {
        range: '%5-10',
        label: 'Net Karbonhidrat / Gün',
        description: 'Standart ketojenik diyet günde sadece 20-50g net karbonhidrat gerektirir. Bu toplam kalorinin yaklaşık %5-10 kadarıdır ve sebzelerden gerekli mikro besinleri alırken ketozu sürdürmeye yeterlidir.',
        color: '#10B981',
      },
      {
        range: '%20-25',
        label: 'Protein',
        description: 'Orta düzeyde protein alımı, aşırı glukoneogenezden kaçınırken kas kaybını önler. Yağsız vücut kütlesi kg başına 1.6-2.2g hedefleyin. Çok fazla protein glikoza dönüşerek ketozu bozabilir.',
        color: '#EF4444',
      },
      {
        range: '%65-75',
        label: 'Yağ',
        description: 'Yağ ketoda birincil enerji kaynağınız olur. Sağlıklı kaynaklara odaklanın: avokado, zeytinyağı, hindistancevizi yağı, tereyağı, fındık ve yağlı balık. Yağ sizi tok tutar ve keton üretimini besler.',
        color: '#F59E0B',
      },
    ],

    interpretation:
      `Keto makro sonuçlarınız, vücudunuza ve hedeflerinize göre uyarlanmış üç farklı ketojenik diyet yaklaşımını gösterir. Standart Ketojenik Diyet (SKD), çoğu kişi için, özellikle yeni başlayanlar ve kilo vermeye odaklananlar için önerilir. En düşük karbonhidrat alımıyla en tutarlı ketozu sağlar. Hedefli Ketojenik Diyet (TKD), düzenli egzersiz yapan ve performansı beslemek için antrenman zamanlarında ekstra karbonhidrata ihtiyaç duyan aktif bireyler için en iyisidir. Döngüsel Ketojenik Diyet (CKD), sıkı keto günleri ile yüksek karbonhidratlı yenileme günleri arasında geçiş yapar ve periyodik glikojen yenilenmesine ihtiyaç duyan ileri seviye sporcular ve vücut geliştiriciler için uygundur. Günlük kalori hedefiniz, hedefinize göre ayarlanmış TDEE'nize dayanır. Su alımı önerisi normalden yüksektir çünkü ketoz sıvı kaybını artırır. Kendinizi nasıl hissettiğinizi izleyin ve ketozu sürdürmek için günlük net karbonhidratları 50g'ın altında tutarak makroları kademeli olarak ayarlayın.`,

    limitations:
      `Keto hesaplayıcı, popülasyon düzeyindeki formüllere dayanan tahminler sağlar ve bireysel metabolizma hızlarıyla mükemmel şekilde eşleşmeyebilir. Doğruluğu etkileyen çeşitli faktörler vardır: Mifflin-St Jeor denkleminin ölçülen BMR ile karşılaştırıldığında yaklaşık %10 hata payı vardır. Aktivite seviyesi çarpanları yaklaşıktır ve bireysel enerji harcaması önemli ölçüde değişir. VKİ'den vücut yağı tahmini, DEXA taramaları gibi doğrudan ölçüm yöntemlerinden daha az doğrudur. Hesaplayıcı, uzun süreli kalori kısıtlaması sırasında meydana gelen metabolik adaptasyonu hesaba katmaz. Ketoza ulaşmak için bireysel karbonhidrat toleransı değişir; bazı kişilerin 15g net karbonhidrata kadar azaltması gerekirken, diğerleri 50g ile ketozda kalabilir. Protein gereksinimleri kas kütlesi, antrenman yoğunluğu ve toparlanma ihtiyaçları gibi bireysel faktörlere bağlıdır. Tıbbi durumlar, ilaçlar (özellikle diyabet ilaçları, tansiyon ilaçları ve anti-nöbet ilaçları) ve hormonal faktörler vücudunuzun ketojenik diyete nasıl tepki vereceğini önemli ölçüde etkileyebilir. Bu hesaplayıcı bir başlangıç noktası olarak kullanılmalıdır.`,

    healthRisks:
      `Ketojenik diyet kilo verme, kan şekeri kontrolü ve bazı nörolojik durumlar için faydalar göstermiş olsa da risksiz değildir. Kısa vadeli yan etkiler arasında adaptasyon döneminde "keto gribi" (baş ağrısı, yorgunluk, bulantı, beyin sisi) yer alır ve genellikle 1-2 hafta sürer. Sıvı ve mineral alımı dikkatli yönetilmezse dehidrasyon ve elektrolit dengesizlikleri yaygındır. Azalan lif alımı nedeniyle kabızlık oluşabilir. Uzun vadeli endişeler arasında potansiyel besin eksiklikleri (C, K vitaminleri, folat ve bazı mineraller), bazı bireylerde yüksek LDL kolesterol (HDL ve trigliseritler genellikle iyileşmesine rağmen), artan protein metabolizması ve kalsiyum atılımından böbrek taşları ve bağırsak mikrobiyom çeşitliliği üzerinde olası olumsuz etkiler yer alır. Keto diyeti pankreatit, karaciğer yetmezliği, yağ metabolizması bozuklukları, birincil karnitin eksikliği ve porfiria olan kişiler için kontrendikedir. Hamile ve emziren kadınlar, çocuklar ve yeme bozukluğu geçmişi olanlar tıbbi gözetim olmadan sıkı ketodan kaçınmalıdır. Tip 1 diyabetli kişiler çok düşük karbonhidratlı diyetlerde diyabetik ketoasidoz (DKA) riski taşır.`,

    alternativeMeasures:
      `Makro hesaplamaların ötesinde ketoz durumunuzu takip etmenize yardımcı olacak çeşitli yöntemler vardır. Kan keton ölçer cihazları birincil keton cismi olan beta-hidroksibütiratı (BHB) ölçer ve ketoz ölçümü için altın standart olarak kabul edilir. Beslenme ketozu genellikle 0.5-3.0 mmol/L arasındaki BHB seviyeleri olarak tanımlanır. İdrar keton stripleri asetoasetatı ölçer ve ucuzdur ancak vücudunuz yağa adapte oldukça daha az doğru hale gelir çünkü idrarda daha az keton atılır. Nefes keton ölçer cihazları aseton seviyelerini ölçer ve invaziv olmayan bir alternatif sunar, ancak kan ölçerlerinden daha az hassastır. Glukoz-keton indeksi (GKI) kan glikozunu kan ketonlarına böler ve kapsamlı bir metabolik resim sağlar; 9 altı GKI hafif ketozu, 6 altı orta dereceli ve 3 altı derin ketozu gösterir. Keton ölçümünün ötesinde, DEXA taramaları veya biyoelektrik empedans yoluyla vücut kompozisyonu analizi, su dengesi değişiklikleri nedeniyle ketoda önemli ölçüde dalgalanan tartı ağırlığından daha doğru şekilde yağ kütlesi ve yağsız kütledeki değişiklikleri takip edebilir.`,

    demographicDifferences:
      `Ketojenik diyet gereksinimleri farklı popülasyonlar arasında önemli ölçüde değişir. Kadınlar, kısmen hormonal dalgalanmalar nedeniyle ketodan erkeklerden farklı tepkiler yaşayabilir. Bazı kadınlar çok sıkı ketoda adet düzensizlikleri bildirmiştir ve biraz daha yüksek karbonhidrat payı (30-50g net karb) daha sürdürülebilir olabilir. Adet döngüsünün luteal fazında karbonhidrat isteği doğal olarak artar ve bu sürede karbonhidrat sınırlarını hafifçe gevşetmek ketozu bozmadan uyumu iyileştirebilir. Yaşlı yetişkinler (65+) kas kaybını önlemek için daha yüksek protein alımına (yağsız kütle kg başına 2.2-2.6g) ihtiyaç duyabilir ve böbrek fonksiyonu açısından izlenmelidir. Sporcular ve fiziksel olarak aktif bireyler genellikle Hedefli veya Döngüsel keto yaklaşımlarından fayda görür çünkü çok düşük karbonhidrat alımı yüksek yoğunluklu performansı olumsuz etkileyebilir. İnsülin direnci veya tip 2 diyabeti olan bireyler genellikle ketoya olağanüstü iyi yanıt verir ve bazen başladıktan günler sonra ilaç ayarlamaları gerekebilir. Akdeniz tarzı keto (zeytinyağı, balık ve sebzeleri vurgulayan) işlenmiş et ve süt ürünlerine ağırlıklı olarak dayanan yaklaşımlardan daha sürdürülebilir ve kalp dostu olabilir.`,

    medicalDisclaimer:
      `Bu keto hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Ketojenik diyet kan şekeri seviyelerini, kan basıncını, kolesterolü ve ilaç etkinliğini etkileyebilen önemli bir diyet değişikliğidir. Diyabet, hipertansiyon veya herhangi bir kronik durum için ilaç kullanıyorsanız, ilaç dozlarının hemen ayarlanması gerekebileceğinden ketojenik diyete başlamadan önce sağlık uzmanınıza danışın. Ketojenik diyet, belirli metabolik bozukluklar, karaciğer hastalığı, pankreatit veya safra kesesi hastalığı olan kişiler için tıbbi gözetim olmadan önerilmez. Hamile ve emziren kadınlar, doğum uzmanı veya ebe rehberliği olmadan sıkı ketojenik diyet uygulamamalıdır. Ketojenik diyet sırasında sürekli kusma, göğüs ağrısı, aşırı yorgunluk veya konfüzyon gibi ciddi belirtiler yaşarsanız derhal tıbbi yardım alın. Sağlık uzmanınıza danışmadan diyet değişikliklerine dayanarak reçeteli ilaçları asla bırakmayın.`,

    references: [
      'Mifflin MD, St Jeor ST, ve ark. Sağlıklı bireylerde dinlenme enerji harcaması için yeni tahmin denklemi. Am J Clin Nutr. 1990;51(2):241-247.',
      'Volek JS, Phinney SD. Düşük Karbonhidratlı Yaşamın Sanatı ve Bilimi. Beyond Obesity LLC. 2011.',
      'Paoli A, Rubini A, Volek JS, Grimaldi KA. Kilo kaybının ötesinde: çok düşük karbonhidratlı (ketojenik) diyetlerin terapötik kullanımlarının derlemesi. Eur J Clin Nutr. 2013;67(8):789-796.',
      'Gibson AA, ve ark. Ketojenik diyetler gerçekten iştahı bastırır mı? Sistematik derleme ve meta-analiz. Obes Rev. 2015;16(1):64-76.',
      'Westman EC, ve ark. Tip 2 diyabet mellitusta düşük karbonhidratlı ketojenik diyet ile düşük glisemik indeksli diyetin glisemik kontrol üzerindeki etkisi. Nutr Metab. 2008;5:36.',
      'Ulusal Lipid Derneği. Kilo yönetimi için ketojenik diyet hakkında bildiri. J Clin Lipidol. 2019.',
      'Harvey CJDC, ve ark. Ketozu indüklemek ve keto-indüksiyonla ilişkili semptomları azaltmak için besin takviyelerinin kullanımı. PeerJ. 2018;6:e4488.',
    ],

    tips: [
      'İlk iki hafta ketoza hızlıca girmek için günde 20g net karbonhidratla başlayın, ardından kişisel karbonhidrat toleransınızı kademeli olarak bulun',
      'Genellikle gizli karbonhidrat ve yapay bileşenler içeren "keto dostu" paketli ürünler yerine doğal, işlenmemiş gıdalara odaklanın',
      'İlk ay makrolarınızı bir uygulama kullanarak dikkatli takip edin, porsiyon boyutlarını öğrendikten sonra daha sezgisel tahmin edebilirsiniz',
      'Özellikle ilk 2-4 hafta keto gribi belirtilerini önlemek veya en aza indirmek için elektrolit (sodyum, potasyum, magnezyum) takviyesi yapın',
      'Sindirim sağlığını ve bağırsak mikrobiyomunu desteklemek için düşük karbonhidratlı sebzelerden yeterli lif alın (günde 25-35g)',
      'Beslenme ketozunda olduğunuzu doğrulamak için kan stripleriyle keton seviyenizi ölçün (0.5-3.0 mmol/L BHB)',
      'Acıktığınızda kötü yemek tercihleri yapmaktan kaçınmak için keto öğünlerini ve atıştırmalıkları önceden hazırlayın',
      'Gelişmiş yağ yakımı ve otofaji faydaları için keto ile birlikte aralıklı orucu düşünün',
    ],

    faqs: [
      {
        question: 'Ketoza girmek ne kadar sürer?',
        answer:
          `Çoğu kişi karbonhidratları günde 20-50g ile sınırladığında 2-7 gün içinde ketoza girer. Kesin süre glikojen depolarınıza, aktivite seviyenize ve metabolizmanıza bağlıdır. Ketozu hızlandıran faktörler arasında egzersiz, oruç tutma ve MCT yağı veya ekzojen keton tüketimi yer alır. Ketozu kan, idrar veya nefes keton test cihazları kullanarak doğrulayabilirsiniz.`,
      },
      {
        question: 'Keto diyeti uzun vadeli kullanım için güvenli mi?',
        answer:
          `2 yıla kadar yapılan çalışmalar, keto diyetinin yeterli beslenme ile düzgün uygulandığında sağlıklı yetişkinler için genel olarak güvenli olduğunu göstermektedir. Ancak 2 yılın ötesinde uzun vadeli veriler sınırlıdır. Temel endişeler arasında besin eksiklikleri (gerektiğinde takviye yapın), böbrek taşı riski (bol su için) ve bazı bireylerde LDL kolesterol değişiklikleri yer alır. Düzenli kan tahlili takibi önerilir.`,
      },
      {
        question: 'Net karbonhidrat ile toplam karbonhidrat arasındaki fark nedir?',
        answer:
          `Net karbonhidrat, toplam karbonhidratlardan lif ve şeker alkollerinin çıkarılmasıyla elde edilir. Ketoda net karbonhidratları takip edersiniz çünkü lif ve çoğu şeker alkol kan şekerini veya insülin seviyelerini önemli ölçüde etkilemez. Örneğin, bir fincan brokolide 6g toplam karbonhidrat vardır ancak sadece 2.4g net karbonhidrat vardır (6g eksi 3.6g lif). Maltitol gibi bazı şeker alkolleri kısmen kan şekerini etkiler.`,
      },
      {
        question: 'Keto diyetinde egzersiz yapabilir miyim?',
        answer:
          'Evet, ancak adaptasyonun ilk 2-4 haftasında performansta geçici bir düşüş beklemeniz gerekir. Yağa adapte olduktan sonra dayanıklılık performansı genellikle iyileşirken, yüksek yoğunluklu performans biraz daha düşük kalabilir. Yoğun antrenmanlar için antrenman etrafında 25-50g hızlı etkili karbonhidrat ekleyen Hedefli Keto Diyetini (TKD) düşünün. Kas kütlesini korumak ve oluşturmak için kuvvet antrenmanı şiddetle önerilir.',
      },
      {
        question: '"Keto gribi" hissedersem ne yapmalıyım?',
        answer:
          'Keto gribi (baş ağrısı, yorgunluk, bulantı, sinirlilik) esas olarak dehidrasyon ve elektrolit dengesizliklerinden kaynaklanır. Sodyum alımını artırın (tuz ekleyin, kemik suyu için), magnezyum takviyesi alın (günde 400mg), potasyum açısından zengin keto gıdalar yiyin (avokado, ıspanak), bol su için ve dinlenin. Belirtiler genellikle 1-2 hafta içinde düzelir. Belirtiler şiddetliyse veya 2 haftadan uzun sürerse sağlık uzmanına danışın.',
      },
      {
        question: 'Ketoda ne kadar kilo verebilirim?',
        answer:
          `İlk haftada 2-5kg başlangıç kilo kaybı yaygındır ancak büyük ölçüde glikojen tükenmesinden kaynaklanan su kaybıdır. İlk fazdan sonra kalori açığıyla sürdürülebilir yağ kaybı genellikle haftada 0.5-1kg'dır. Bireysel sonuçlar başlangıç kilosuna, metabolizma hızına, aktivite seviyesine ve uyuma göre değişir. Tartı ağırlığı yerine vücut kompozisyonu değişikliklerine odaklanın çünkü keto aynı anda yağı azaltabilir ve kası koruyabilir veya oluşturabilir.`,
      },
      {
        question: 'Ketoda alkol içebilir miyim?',
        answer:
          'Bazı alkollü içecekler ölçülü kullanımda keto ile uyumludur. Kuru şaraplar (bardak başına 5-6g karb), votka, viski ve tekila gibi distile içkiler (sade veya sıfır karbonhidratlı karıştırıcılarla 0g karb) ve hafif biralar (3-6g karb) keto makrolarına sığabilir. Ancak alkol karaciğer tarafından öncelikli olarak işlenir ve geçici olarak yağ yakımını durdurur. Keto ile alkol toleransı düşer, bu yüzden normalde içtiğinizden daha az için. Şekerli kokteyller, normal bira ve tatlı şaraplardan kaçının.',
      },
    ],
  },
};
