import { CalculatorContent } from '@/types/calculator';

export const weightGainContent: CalculatorContent = {
  en: {
    whatIs:
      'A Weight Gain Calculator is a specialized tool designed to help underweight individuals, athletes, and anyone looking to increase their body mass create a structured and healthy weight gain plan. Unlike weight loss—which often gets more attention—gaining weight in a healthy, sustainable way requires just as much planning and strategy. This calculator uses scientifically validated formulas, including the Mifflin-St Jeor equation for Basal Metabolic Rate (BMR), combined with activity level multipliers to determine your Total Daily Energy Expenditure (TDEE). It then calculates the calorie surplus needed to achieve your weight gain goals at your preferred rate. The calculator provides a personalized timeline with weekly milestones, daily calorie targets, and macronutrient breakdowns to guide your journey. Whether you\'re recovering from an illness, trying to build muscle, or simply looking to reach a healthier weight, this tool provides the data-driven foundation you need to succeed.',

    howToCalculate:
      'To calculate your healthy weight gain plan, the calculator follows a multi-step process. First, it determines your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation: For men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5. For women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161. Next, your BMR is multiplied by an activity factor to calculate your TDEE (Total Daily Energy Expenditure). Activity multipliers range from 1.2 (sedentary) to 1.9 (extra active). The calculator then adds a calorie surplus based on your chosen weight gain rate: slow (0.25 kg/week requires ~275 extra calories/day), moderate (0.5 kg/week requires ~550 extra calories/day), or fast (0.75 kg/week requires ~825 extra calories/day). The total weekly weight gain is based on the principle that approximately 7,700 calories above maintenance equals 1 kg of body weight gained. Finally, the calculator divides your total weight gain goal by your weekly rate to estimate the number of weeks needed, and generates milestone checkpoints along the way.',

    formulaDetails:
      'The weight gain calculation relies on several interconnected formulas and scientific principles. The foundation is the Mifflin-St Jeor equation (1990), widely regarded as the most accurate BMR prediction equation for healthy adults. BMR represents the calories your body burns at complete rest to maintain vital functions like breathing, circulation, and cell production. The TDEE calculation multiplies BMR by a Physical Activity Level (PAL) factor: Sedentary (×1.2) for desk jobs with minimal movement; Lightly Active (×1.375) for light exercise 1-3 days per week; Moderately Active (×1.55) for moderate exercise 3-5 days per week; Very Active (×1.725) for hard exercise 6-7 days per week; Extra Active (×1.9) for very intense daily exercise or physical jobs. The calorie surplus calculation is based on the energy density of body tissue. While 1 kg of pure fat contains approximately 7,700 calories, weight gain involves a mix of fat, muscle, water, and other tissues. The calculator uses the 7,700 calorie per kilogram approximation as a practical guideline. For macronutrient distribution, the calculator recommends 1.8g of protein per kilogram of target body weight (essential for muscle synthesis), 25% of calories from healthy fats (crucial for hormone production), and the remaining calories from carbohydrates (primary energy source for training and recovery).',

    interpretation:
      'Understanding your weight gain results requires considering several factors together. The estimated timeline shows how long it will take to reach your goal at a consistent surplus—but real-world results may vary by 10-20% due to metabolic adaptation, training responses, and adherence. Your daily calorie target is the total calories you should consume each day, not just the surplus. If your TDEE is 2,200 and your surplus is 550, you need to eat 2,750 calories daily. The macro breakdown prioritizes protein for muscle building (1.8g/kg), includes adequate fat for hormonal health (25% of calories), and fills the remaining calories with carbohydrates for energy. BMI changes from start to finish show the expected shift in your body mass index. If you start underweight (BMI < 18.5) and your target brings you into the normal range (18.5-24.9), that\'s a positive health outcome. However, be cautious about overshooting into the overweight range unless you\'re an athlete with significant muscle mass goals. The weekly milestones help you track progress—if you\'re gaining faster than projected, you may be adding excess fat; if slower, you may need to increase your calorie intake or review your training program.',

    limitations:
      'This weight gain calculator, while based on well-established scientific formulas, has several important limitations to consider. First, metabolic individuality means that two people with identical stats may have significantly different caloric needs due to genetics, thyroid function, gut microbiome differences, and non-exercise activity thermogenesis (NEAT). Second, the calculator assumes a linear weight gain trajectory, but in reality, weight gain often occurs in spurts and plateaus. As you gain weight, your BMR increases, which means your calorie surplus gradually decreases unless you adjust your intake upward. Third, the ratio of muscle to fat gained depends heavily on your training program, protein timing, sleep quality, and stress levels—factors the calculator cannot account for. Fourth, this tool is designed for generally healthy adults. It may not be appropriate for individuals with eating disorders, metabolic conditions, hormonal imbalances, or those taking medications that affect appetite or metabolism. Fifth, the macro split provided is a general recommendation and may need to be adjusted based on food intolerances, dietary preferences, or specific athletic requirements. Finally, weight gain is affected by water retention, digestive contents, and glycogen stores, which can cause daily fluctuations of 1-2 kg that don\'t reflect true tissue growth.',

    healthRisks:
      'While gaining weight is necessary and healthy for underweight individuals, it\'s important to be aware of potential risks associated with improper weight gain strategies. Gaining weight too quickly (more than 1 kg per week) significantly increases the likelihood of excess fat accumulation rather than lean muscle mass. This can lead to increased visceral fat, which is associated with cardiovascular disease, insulin resistance, and metabolic syndrome. Excessive calorie surplus without adequate exercise can raise blood cholesterol and triglyceride levels. Consuming large quantities of food, especially processed or high-sugar foods, to meet calorie targets can strain the digestive system, cause bloating, acid reflux, and may increase the risk of developing unhealthy eating patterns. For individuals with a history of disordered eating, a calorie-focused approach to weight gain may trigger unhealthy behaviors and should be supervised by a healthcare professional. Rapid weight gain can also cause stretch marks, joint stress from sudden increases in body weight, and hormonal fluctuations. The healthiest approach combines a moderate calorie surplus (300-500 calories above TDEE), strength training, adequate protein intake, and patience for gradual, sustainable results.',

    improvementTips:
      'To maximize healthy weight gain results, follow these evidence-based strategies: 1) Prioritize nutrient-dense foods over "junk" calories. Choose whole foods like lean meats, eggs, dairy, whole grains, nuts, seeds, avocados, and olive oil. 2) Eat frequently—5-6 smaller meals are easier to consume than 3 large ones and keep your metabolism active. 3) Start strength training if you haven\'t already. Resistance exercise signals your body to build muscle rather than just store fat. Focus on compound movements like squats, deadlifts, bench press, and rows. 4) Time your protein intake throughout the day, aiming for 20-40g per meal to optimize muscle protein synthesis. 5) Don\'t skip breakfast—it\'s an important opportunity to start your daily calorie intake early. 6) Use liquid calories strategically—protein shakes, smoothies with fruit, milk, and nut butter can add 500+ calories without filling you up like solid food. 7) Track your intake for at least the first few weeks to ensure you\'re actually hitting your calorie targets. 8) Progressively increase weights in your training program to continually stimulate muscle growth. 9) Manage stress and prioritize 7-9 hours of quality sleep, as both significantly impact appetite hormones and muscle recovery. 10) Be consistent—weight gain is a marathon, not a sprint.',

    medicalDisclaimer:
      'This weight gain calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The calculations provided are estimates based on population-level formulas and may not accurately reflect your individual metabolic needs. If you are significantly underweight (BMI below 16), have an eating disorder history, are pregnant or breastfeeding, have a chronic illness, or are taking medications that affect your metabolism or appetite, please consult with a physician, registered dietitian, or other qualified healthcare provider before starting any weight gain program. Sudden changes in diet or exercise routine can have unexpected effects on blood sugar, blood pressure, and other health markers. Children and adolescents should not use this calculator without parental and medical supervision, as their nutritional needs differ significantly from adults. This tool does not replace professional nutritional counseling or medical assessment.',

    references: [
      'Mifflin MD, St Jeor ST, Hill LA, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.',
      'Hall KD. What is the required energy deficit per unit weight loss? Int J Obes. 2008;32(3):573-576.',
      'Phillips SM, Van Loon LJ. Dietary protein for athletes: from requirements to optimum adaptation. J Sports Sci. 2011;29(sup1):S29-S38.',
      'Iraki J, Fitschen P, Espinar S, Helms E. Nutrition recommendations for natural bodybuilding contest preparation. J Int Soc Sports Nutr. 2019;16(1):35.',
      'Slater GJ, Dieter BP, Marsh DJ, et al. Is an Energy Surplus Required to Maximize Skeletal Muscle Hypertrophy? Front Nutr. 2019;6:131.',
      'World Health Organization (WHO). Body Mass Index - BMI classification.',
      'Thomas DT, Erdman KA, Burke LM. Position of the Academy of Dietetics: Nutrition and Athletic Performance. J Acad Nutr Diet. 2016;116(3):501-528.',
    ],

    tips: [
      'Focus on nutrient-dense foods rather than empty calories. Quality matters as much as quantity for healthy weight gain.',
      'Combine your calorie surplus with strength training to ensure you gain muscle, not just fat.',
      'Eat 5-6 smaller meals throughout the day if you struggle to consume enough calories in 3 meals.',
      'Use liquid calories like protein shakes and smoothies to easily increase your daily intake.',
      'Track your weight weekly at the same time and conditions for the most accurate progress monitoring.',
      'Be patient and consistent—healthy weight gain is gradual and sustainable results take time.',
      'Get adequate sleep (7-9 hours) to support muscle recovery and optimize appetite-regulating hormones.',
      'Consult a healthcare professional before starting if you have any underlying health conditions.',
    ],

    faqs: [
      {
        question: 'How many extra calories do I need to gain weight?',
        answer:
          'To gain weight, you need to consume more calories than your body burns (a calorie surplus). A moderate surplus of 300-500 calories above your TDEE (Total Daily Energy Expenditure) typically results in a gain of about 0.25-0.5 kg per week. For faster gains, a surplus of 500-800 calories may be needed, though this increases the risk of excess fat gain. The exact amount depends on your metabolism, activity level, age, gender, and genetics. Our calculator provides personalized recommendations based on your specific data and desired rate of gain.',
      },
      {
        question: 'How long does it take to gain 10 kg?',
        answer:
          'The time to gain 10 kg depends on your chosen rate of weight gain. At a slow, steady rate of 0.25 kg/week, it would take approximately 40 weeks (about 10 months). At a moderate rate of 0.5 kg/week, it would take about 20 weeks (5 months). At a faster rate of 0.75 kg/week, it could take around 13-14 weeks (about 3.5 months). However, faster rates increase the proportion of fat gained versus muscle. For the best muscle-to-fat ratio, a moderate pace combined with strength training is recommended.',
      },
      {
        question: 'Can I gain weight without getting fat?',
        answer:
          'Yes, but it requires a strategic approach. To maximize muscle gain while minimizing fat gain: 1) Maintain a moderate calorie surplus (300-500 above TDEE), 2) Consume adequate protein (1.6-2.2g per kg of body weight), 3) Follow a progressive strength training program, 4) Prioritize sleep and recovery, and 5) Be patient with the process. Some fat gain is inevitable during a calorie surplus, but with proper training and nutrition, you can ensure that the majority of weight gained is lean muscle mass.',
      },
      {
        question: 'What foods are best for healthy weight gain?',
        answer:
          'The best foods for healthy weight gain are calorie-dense and nutrient-rich. Top choices include: lean proteins (chicken, turkey, fish, eggs, Greek yogurt), complex carbohydrates (oats, rice, sweet potatoes, whole grain bread, pasta), healthy fats (avocados, nuts, nut butters, olive oil, seeds), dairy products (whole milk, cheese, cottage cheese), and calorie-dense fruits (bananas, mangoes, dried fruits). Avoid relying on processed junk food, as this can lead to unhealthy fat gain and nutritional deficiencies.',
      },
      {
        question: 'Should I do cardio while trying to gain weight?',
        answer:
          'Light to moderate cardio (2-3 sessions of 20-30 minutes per week) is actually beneficial during a weight gain phase. It supports cardiovascular health, improves nutrient delivery to muscles, aids digestion, and can improve appetite. However, excessive cardio can burn too many calories, making it harder to maintain a surplus. If you do cardio, account for those burned calories by eating more. Focus primarily on strength training for weight gain, and keep cardio sessions brief and moderate in intensity.',
      },
      {
        question: 'Why am I not gaining weight even though I eat a lot?',
        answer:
          'Several factors could explain this: 1) You may be overestimating your calorie intake—track everything you eat for a week to get accurate numbers, 2) Your metabolism may be higher than average (high NEAT or non-exercise activity thermogenesis), 3) You might have an underlying medical condition (hyperthyroidism, malabsorption issues, or high stress/cortisol), 4) You may not be eating consistently every day, 5) Your "a lot" might not actually be enough for your specific needs. Start by accurately tracking calories for one week, then gradually increase by 200-300 calories until the scale starts moving.',
      },
      {
        question: 'Is the weight gain calculator accurate for athletes?',
        answer:
          'The calculator provides a good starting point for athletes, but athletic individuals may need adjustments. Athletes typically have higher TDEE due to training volume, may need more protein (up to 2.2g/kg), and their muscle-to-fat gain ratio is often better due to training stimulus. Endurance athletes may need an even larger surplus to offset exercise calories. The calculator\'s activity multipliers account for exercise, but intense sport-specific training may require additional calorie increases of 200-500 above the calculated target. Athletes should monitor body composition (not just weight) and adjust intake based on performance and recovery.',
      },
      {
        question: 'How much protein do I need to gain muscle?',
        answer:
          'Research suggests 1.6-2.2 grams of protein per kilogram of body weight per day for optimal muscle gain when combined with resistance training. Our calculator uses 1.8g/kg as a balanced recommendation. This protein should be distributed across 4-6 meals throughout the day, with 20-40g per meal for maximum muscle protein synthesis. Quality protein sources include lean meats, poultry, fish, eggs, dairy, legumes, and protein supplements. Consuming protein within 2 hours after training can enhance muscle recovery and growth, though total daily intake matters more than timing.',
      },
    ],
  },
  tr: {
    whatIs:
      'Kilo Alma Hesaplayıcı, zayıf bireyler, sporcular ve vücut kütlelerini artırmak isteyen herkes için yapılandırılmış ve sağlıklı bir kilo alma planı oluşturmaya yardımcı olmak üzere tasarlanmış özel bir araçtır. Genellikle daha fazla ilgi gören kilo vermenin aksine, sağlıklı ve sürdürülebilir bir şekilde kilo almak en az aynı düzeyde planlama ve strateji gerektirir. Bu hesaplayıcı, Bazal Metabolizma Hızı (BMH) için Mifflin-St Jeor denklemi dahil bilimsel olarak doğrulanmış formüller kullanır ve bunları aktivite seviyesi çarpanlarıyla birleştirerek Toplam Günlük Enerji Harcamanızı (TDEE) belirler. Ardından, tercih ettiğiniz hızda kilo alma hedeflerinize ulaşmak için gereken kalori fazlasını hesaplar. Hesaplayıcı, yolculuğunuza rehberlik etmek için haftalık kilometre taşları, günlük kalori hedefleri ve makrobesin dağılımları ile kişiselleştirilmiş bir zaman çizelgesi sunar. İster bir hastalıktan iyileşiyor olun, ister kas yapmaya çalışıyor olun ya da sadece daha sağlıklı bir kiloya ulaşmak istiyor olun, bu araç başarılı olmanız için ihtiyaç duyduğunuz veri odaklı temeli sağlar.',

    howToCalculate:
      'Sağlıklı kilo alma planınızı hesaplamak için hesaplayıcı çok adımlı bir süreç izler. İlk olarak, Mifflin-St Jeor denklemi kullanılarak Bazal Metabolizma Hızınız (BMH) belirlenir: Erkekler için: BMH = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş + 5. Kadınlar için: BMH = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş - 161. Ardından, BMH\'nız TDEE\'nizi (Toplam Günlük Enerji Harcaması) hesaplamak için bir aktivite faktörüyle çarpılır. Aktivite çarpanları 1.2\'den (hareketsiz) 1.9\'a (ekstra aktif) kadar değişir. Hesaplayıcı daha sonra seçtiğiniz kilo alma hızına göre bir kalori fazlası ekler: yavaş (haftada 0.25 kg için günde ~275 ekstra kalori), orta (haftada 0.5 kg için günde ~550 ekstra kalori) veya hızlı (haftada 0.75 kg için günde ~825 ekstra kalori). Haftalık toplam kilo artışı, bakım seviyesinin üzerindeki yaklaşık 7.700 kalorinin 1 kg vücut ağırlığı artışına eşit olduğu ilkesine dayanır. Son olarak, hesaplayıcı toplam kilo alma hedefinizi haftalık hızınıza bölerek gereken hafta sayısını tahmin eder ve yol boyunca kontrol noktaları oluşturur.',

    formulaDetails:
      'Kilo alma hesaplaması birbiriyle bağlantılı çeşitli formüller ve bilimsel ilkelere dayanır. Temeli, sağlıklı yetişkinler için en doğru BMH tahmin denklemi olarak kabul edilen Mifflin-St Jeor denklemidir (1990). BMH, vücudunuzun nefes alma, kan dolaşımı ve hücre üretimi gibi yaşamsal işlevleri sürdürmek için tam dinlenme halinde yaktığı kalorileri temsil eder. TDEE hesaplaması, BMH\'yı bir Fiziksel Aktivite Düzeyi (FAD) faktörüyle çarpar: Hareketsiz (×1.2) masa başı işler için; Hafif Aktif (×1.375) haftada 1-3 gün hafif egzersiz; Orta Aktif (×1.55) haftada 3-5 gün orta egzersiz; Çok Aktif (×1.725) haftada 6-7 gün ağır egzersiz; Ekstra Aktif (×1.9) çok yoğun günlük egzersiz veya fiziksel işler için. Kalori fazlası hesaplaması, vücut dokusunun enerji yoğunluğuna dayanır. 1 kg saf yağ yaklaşık 7.700 kalori içerirken, kilo artışı yağ, kas, su ve diğer dokuların bir karışımını içerir. Hesaplayıcı, pratik bir kılavuz olarak kilogram başına 7.700 kalori yaklaşımını kullanır. Makrobesin dağılımı için, hesaplayıcı hedef vücut ağırlığının kilogramı başına 1.8 g protein (kas sentezi için gerekli), kalorinin %25\'ini sağlıklı yağlardan (hormon üretimi için önemli) ve kalan kalorileri karbonhidratlardan (antrenman ve toparlanma için birincil enerji kaynağı) almanızı önerir.',

    interpretation:
      'Kilo alma sonuçlarınızı anlamak birçok faktörü birlikte değerlendirmeyi gerektirir. Tahmini zaman çizelgesi, tutarlı bir fazla ile hedefinize ulaşmanın ne kadar süreceğini gösterir; ancak gerçek dünya sonuçları metabolik adaptasyon, antrenman tepkileri ve uyum nedeniyle %10-20 değişebilir. Günlük kalori hedefiniz, sadece fazla değil, her gün tüketmeniz gereken toplam kaloridir. TDEE\'niz 2.200 ve fazlanız 550 ise, günde 2.750 kalori yemeniz gerekir. Makro dağılımı, kas yapımı için proteini (1.8 g/kg), hormonal sağlık için yeterli yağı (kalorinin %25\'i) önceliklendirir ve kalan kalorileri enerji için karbonhidratlarla doldurur. Başlangıçtan bitişe VKİ değişimleri, vücut kitle indeksinizdeki beklenen değişimi gösterir. Zayıf olarak başlıyorsanız (VKİ < 18.5) ve hedefiniz sizi normal aralığa (18.5-24.9) getiriyorsa, bu olumlu bir sağlık sonucudur. Ancak, önemli kas kütlesi hedefleriniz olan bir sporcu olmadığınız sürece fazla kilolu aralığına geçmekten kaçının. Haftalık kilometre taşları ilerlemenizi takip etmenize yardımcı olur; tahmin edilenden daha hızlı kilo alıyorsanız fazla yağ biriktiriyor olabilirsiniz, daha yavaşsa kalori alımınızı artırmanız veya antrenman programınızı gözden geçirmeniz gerekebilir.',

    limitations:
      'Bu kilo alma hesaplayıcı, köklü bilimsel formüllere dayansa da, dikkate alınması gereken birkaç önemli sınırlamaya sahiptir. İlk olarak, metabolik bireysellik, aynı verilere sahip iki kişinin genetik, tiroid fonksiyonu, bağırsak mikrobiyomu farklılıkları ve egzersiz dışı aktivite termogenezi (NEAT) nedeniyle önemli ölçüde farklı kalori ihtiyaçlarına sahip olabileceği anlamına gelir. İkinci olarak, hesaplayıcı doğrusal bir kilo artış yörüngesi varsayar, ancak gerçekte kilo artışı genellikle ani artışlar ve platolar şeklinde gerçekleşir. Kilo aldıkça BMH\'nız artar, bu da alımınızı yukarı doğru ayarlamadığınız sürece kalori fazlanızın kademeli olarak azaldığı anlamına gelir. Üçüncü olarak, kazanılan kas-yağ oranı büyük ölçüde antrenman programınıza, protein zamanlamasına, uyku kalitesine ve stres düzeyinize bağlıdır; bunlar hesaplayıcının hesaba katamayacağı faktörlerdir. Dördüncü olarak, bu araç genel olarak sağlıklı yetişkinler için tasarlanmıştır. Yeme bozuklukları, metabolik durumlar, hormonal dengesizlikler veya iştahı ya da metabolizmayı etkileyen ilaçlar kullanan bireyler için uygun olmayabilir. Beşinci olarak, sağlanan makro dağılımı genel bir öneridir ve gıda intoleransları, diyet tercihleri veya belirli atletik gereksinimlere göre ayarlanması gerekebilir. Son olarak, kilo artışı su tutulumu, sindirim içeriği ve glikojen depolarından etkilenir; bunlar gerçek doku büyümesini yansıtmayan günlük 1-2 kg dalgalanmalara neden olabilir.',

    healthRisks:
      'Zayıf bireyler için kilo almak gerekli ve sağlıklı olsa da, yanlış kilo alma stratejileriyle ilişkili potansiyel risklerden haberdar olmak önemlidir. Çok hızlı kilo almak (haftada 1 kg\'dan fazla), yağsız kas kütlesi yerine fazla yağ birikimine yol açma olasılığını önemli ölçüde artırır. Bu, kardiyovasküler hastalık, insülin direnci ve metabolik sendromla ilişkili visseral yağ artışına neden olabilir. Yeterli egzersiz olmadan aşırı kalori fazlası, kan kolesterolü ve trigliserit seviyelerini yükseltebilir. Kalori hedeflerini karşılamak için büyük miktarlarda yiyecek, özellikle işlenmiş veya yüksek şekerli yiyecekler tüketmek, sindirim sistemini zorlayabilir, şişkinlik, mide ekşimesi yapabilir ve sağlıksız yeme alışkanlıkları geliştirme riskini artırabilir. Düzensiz yeme geçmişi olan bireyler için, kaloriye odaklı bir kilo alma yaklaşımı sağlıksız davranışları tetikleyebilir ve bir sağlık profesyoneli tarafından denetlenmelidir. Hızlı kilo artışı ayrıca çatlak izleri, ani vücut ağırlığı artışlarından eklem stresi ve hormonal dalgalanmalara neden olabilir. En sağlıklı yaklaşım, ılımlı bir kalori fazlasını (TDEE\'nin 300-500 kalori üstü), kuvvet antrenmanı, yeterli protein alımı ve kademeli, sürdürülebilir sonuçlar için sabırı birleştirir.',

    improvementTips:
      'Sağlıklı kilo alma sonuçlarını en üst düzeye çıkarmak için bu kanıta dayalı stratejileri izleyin: 1) "Gereksiz" kaloriler yerine besin değeri yüksek gıdalara öncelik verin. Yağsız etler, yumurta, süt ürünleri, tam tahıllar, kuruyemişler, tohumlar, avokado ve zeytinyağı gibi tam gıdaları seçin. 2) Sık yiyin; 5-6 küçük öğün, 3 büyük öğünden daha kolay tüketilir ve metabolizmanızı aktif tutar. 3) Henüz yapmadıysanız kuvvet antrenmanına başlayın. Direnç egzersizi, vücudunuza sadece yağ depolamak yerine kas yapması sinyali verir. Squat, deadlift, bench press ve row gibi bileşik hareketlere odaklanın. 4) Kas protein sentezini optimize etmek için gün boyunca protein alımınızı zamanlayın, öğün başına 20-40 g hedefleyin. 5) Kahvaltıyı atlamayın; günlük kalori alımınıza erken başlamak için önemli bir fırsattır. 6) Sıvı kalorileri stratejik olarak kullanın; meyve, süt ve fındık ezmesi içeren protein shake\'leri ve smoothie\'ler, sizi katı yiyecekler kadar doldurmadan 500\'den fazla kalori ekleyebilir. 7) Kalori hedeflerinize gerçekten ulaştığınızdan emin olmak için en azından ilk birkaç hafta alımınızı takip edin. 8) Kas büyümesini sürekli uyarmak için antrenman programınızda kademeli olarak ağırlıkları artırın. 9) Stresi yönetin ve 7-9 saat kaliteli uyku almaya öncelik verin, çünkü her ikisi de iştah hormonlarını ve kas toparlanmasını önemli ölçüde etkiler. 10) Tutarlı olun; kilo alma bir maraton, sprint değil.',

    medicalDisclaimer:
      'Bu kilo alma hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Sağlanan hesaplamalar, popülasyon düzeyindeki formüllere dayanan tahminlerdir ve bireysel metabolik ihtiyaçlarınızı doğru şekilde yansıtmayabilir. Önemli ölçüde zayıfsanız (VKİ 16\'nın altında), yeme bozukluğu geçmişiniz varsa, hamile veya emziriyorsanız, kronik bir hastalığınız varsa veya metabolizmanızı ya da iştahınızı etkileyen ilaçlar kullanıyorsanız, herhangi bir kilo alma programına başlamadan önce lütfen bir doktor, diyetisyen veya diğer nitelikli sağlık hizmeti sağlayıcısına danışın. Diyet veya egzersiz rutinindeki ani değişiklikler kan şekeri, kan basıncı ve diğer sağlık belirteçleri üzerinde beklenmedik etkilere sahip olabilir. Çocuklar ve ergenler, beslenme ihtiyaçları yetişkinlerden önemli ölçüde farklı olduğundan, ebeveyn ve tıbbi gözetim olmadan bu hesaplayıcıyı kullanmamalıdır. Bu araç profesyonel beslenme danışmanlığının veya tıbbi değerlendirmenin yerini almaz.',

    references: [
      'Mifflin MD, St Jeor ST, Hill LA, ve ark. Sağlıklı bireylerde dinlenme enerji harcaması için yeni bir tahmin denklemi. Am J Clin Nutr. 1990;51(2):241-247.',
      'Hall KD. Birim ağırlık kaybı başına gereken enerji açığı nedir? Int J Obes. 2008;32(3):573-576.',
      'Phillips SM, Van Loon LJ. Sporcular için diyet proteini: gereksinimlerden optimum adaptasyona. J Sports Sci. 2011;29(sup1):S29-S38.',
      'Iraki J, Fitschen P, Espinar S, Helms E. Doğal vücut geliştirme yarışma hazırlığı için beslenme önerileri. J Int Soc Sports Nutr. 2019;16(1):35.',
      'Slater GJ, Dieter BP, Marsh DJ, ve ark. İskelet kası hipertrofisini maksimize etmek için enerji fazlası gerekli mi? Front Nutr. 2019;6:131.',
      'Dünya Sağlık Örgütü (WHO). Vücut Kitle İndeksi - VKİ sınıflandırması.',
      'Thomas DT, Erdman KA, Burke LM. Akademi Pozisyonu: Beslenme ve Atletik Performans. J Acad Nutr Diet. 2016;116(3):501-528.',
    ],

    tips: [
      'Boş kaloriler yerine besin değeri yüksek gıdalara odaklanın. Sağlıklı kilo alma için kalite, miktar kadar önemlidir.',
      'Sadece yağ değil, kas kazanmak için kalori fazlanızı kuvvet antrenmanıyla birleştirin.',
      '3 öğünde yeterli kalori almakta zorlanıyorsanız gün boyunca 5-6 küçük öğün yiyin.',
      'Günlük alımınızı kolayca artırmak için protein shake\'leri ve smoothie\'ler gibi sıvı kaloriler kullanın.',
      'En doğru ilerleme izleme için aynı zaman ve koşullarda haftalık olarak kilonuzu takip edin.',
      'Sabırlı ve tutarlı olun; sağlıklı kilo alma kademeli bir süreçtir ve sürdürülebilir sonuçlar zaman alır.',
      'Kas toparlanmasını desteklemek ve iştah düzenleyici hormonları optimize etmek için yeterli uyku alın (7-9 saat).',
      'Altta yatan herhangi bir sağlık durumunuz varsa başlamadan önce bir sağlık profesyoneline danışın.',
    ],

    faqs: [
      {
        question: 'Kilo almak için kaç ekstra kaloriye ihtiyacım var?',
        answer:
          'Kilo almak için vücudunuzun yaktığından daha fazla kalori tüketmeniz (kalori fazlası) gerekir. TDEE\'nizin (Toplam Günlük Enerji Harcaması) 300-500 kalori üzerinde ılımlı bir fazla, genellikle haftada yaklaşık 0.25-0.5 kg artışa yol açar. Daha hızlı artışlar için 500-800 kalorilik bir fazla gerekebilir, ancak bu aşırı yağ kazanımı riskini artırır. Tam miktar metabolizmanıza, aktivite düzeyinize, yaşınıza, cinsiyetinize ve genetiğinize bağlıdır. Hesaplayıcımız, belirli verilerinize ve istediğiniz artış hızına göre kişiselleştirilmiş öneriler sunar.',
      },
      {
        question: '10 kilo almak ne kadar sürer?',
        answer:
          '10 kilo almak için gereken süre, seçtiğiniz kilo alma hızına bağlıdır. Haftada 0.25 kg gibi yavaş ve istikrarlı bir hızda yaklaşık 40 hafta (yaklaşık 10 ay) sürer. Haftada 0.5 kg\'lık orta bir hızda yaklaşık 20 hafta (5 ay) sürer. Haftada 0.75 kg gibi daha hızlı bir hızda ise yaklaşık 13-14 hafta (yaklaşık 3.5 ay) sürebilir. Ancak daha hızlı hızlar, kasa kıyasla kazanılan yağ oranını artırır. En iyi kas-yağ oranı için, kuvvet antrenmanıyla birleştirilmiş orta bir tempo önerilir.',
      },
      {
        question: 'Yağlanmadan kilo alabilir miyim?',
        answer:
          'Evet, ancak stratejik bir yaklaşım gerektirir. Yağ kazanımını en aza indirirken kas kazanımını en üst düzeye çıkarmak için: 1) Ilımlı bir kalori fazlası koruyun (TDEE\'nin 300-500 üstü), 2) Yeterli protein tüketin (vücut ağırlığının kg\'ı başına 1.6-2.2 g), 3) Progresif bir kuvvet antrenmanı programı uygulayın, 4) Uyku ve toparlanmaya öncelik verin, 5) Süreçte sabırlı olun. Kalori fazlası sırasında bir miktar yağ kazanımı kaçınılmazdır, ancak doğru antrenman ve beslenme ile kazanılan ağırlığın çoğunluğunun yağsız kas kütlesi olmasını sağlayabilirsiniz.',
      },
      {
        question: 'Sağlıklı kilo almak için en iyi yiyecekler nelerdir?',
        answer:
          'Sağlıklı kilo alma için en iyi yiyecekler kalori yoğun ve besin açısından zengindir. En iyi seçenekler şunlardır: yağsız proteinler (tavuk, hindi, balık, yumurta, Yunan yoğurdu), kompleks karbonhidratlar (yulaf, pirinç, tatlı patates, tam tahıllı ekmek, makarna), sağlıklı yağlar (avokado, kuruyemişler, fındık ezmesi, zeytinyağı, tohumlar), süt ürünleri (tam yağlı süt, peynir, süzme peynir) ve kalori yoğun meyveler (muz, mango, kuru meyveler). İşlenmiş abur cubura güvenmekten kaçının, çünkü bu sağlıksız yağ birikimine ve besin eksikliklerine yol açabilir.',
      },
      {
        question: 'Kilo almaya çalışırken kardiyo yapmalı mıyım?',
        answer:
          'Hafif ila orta düzeyde kardiyo (haftada 2-3 seans, 20-30 dakika) aslında kilo alma aşamasında faydalıdır. Kardiyovasküler sağlığı destekler, kaslara besin taşınmasını iyileştirir, sindirimi kolaylaştırır ve iştahı artırabilir. Ancak aşırı kardiyo çok fazla kalori yakabilir ve fazlayı korumayı zorlaştırır. Kardiyo yapıyorsanız, yakılan kalorileri daha fazla yiyerek telafi edin. Kilo alma için öncelikle kuvvet antrenmanına odaklanın ve kardiyo seanslarını kısa ve orta yoğunlukta tutun.',
      },
      {
        question: 'Çok yememe rağmen neden kilo alamıyorum?',
        answer:
          'Bunu birkaç faktör açıklayabilir: 1) Kalori alımınızı fazla tahmin ediyor olabilirsiniz; doğru rakamlar elde etmek için bir hafta boyunca yediğiniz her şeyi takip edin, 2) Metabolizmanız ortalamanın üzerinde olabilir (yüksek NEAT veya egzersiz dışı aktivite termogenezi), 3) Altta yatan bir tıbbi durumunuz olabilir (hipertiroidizm, emilim bozuklukları veya yüksek stres/kortizol), 4) Her gün tutarlı yemiyor olabilirsiniz, 5) "Çok fazla" dediğiniz aslında özel ihtiyaçlarınız için yeterli olmayabilir. Bir hafta boyunca kalorileri doğru şekilde takip ederek başlayın, sonra tartı hareket etmeye başlayana kadar kademeli olarak 200-300 kalori artırın.',
      },
      {
        question: 'Kilo alma hesaplayıcısı sporcular için doğru mu?',
        answer:
          'Hesaplayıcı sporcular için iyi bir başlangıç noktası sağlar, ancak atletik bireyler ayarlamalara ihtiyaç duyabilir. Sporcuların genellikle antrenman hacmi nedeniyle daha yüksek TDEE\'si vardır, daha fazla proteine (2.2 g/kg\'a kadar) ihtiyaç duyabilirler ve antrenman uyarısı nedeniyle kas-yağ kazanım oranları genellikle daha iyidir. Dayanıklılık sporcuları, egzersiz kalorilerini dengelemek için daha büyük bir fazlaya ihtiyaç duyabilir. Hesaplayıcının aktivite çarpanları egzersizi hesaba katar, ancak yoğun spora özgü antrenman, hesaplanan hedefin 200-500 üzerinde ek kalori artışı gerektirebilir. Sporcular sadece kiloyu değil vücut kompozisyonunu izlemeli ve alımı performans ve toparlanmaya göre ayarlamalıdır.',
      },
      {
        question: 'Kas kazanmak için ne kadar proteine ihtiyacım var?',
        answer:
          'Araştırmalar, direnç antrenmanıyla birleştirildiğinde optimum kas kazanımı için günde vücut ağırlığının kilogramı başına 1.6-2.2 gram protein önermektedir. Hesaplayıcımız dengeli bir öneri olarak 1.8 g/kg kullanır. Bu protein, maksimum kas protein sentezi için öğün başına 20-40 g ile gün boyunca 4-6 öğüne dağıtılmalıdır. Kaliteli protein kaynakları arasında yağsız etler, kümes hayvanları, balık, yumurta, süt ürünleri, baklagiller ve protein takviyeleri bulunur. Antrenmandan sonraki 2 saat içinde protein tüketmek kas toparlanmasını ve büyümesini artırabilir, ancak toplam günlük alım zamanlama kadar önemlidir.',
      },
    ],
  },
};
