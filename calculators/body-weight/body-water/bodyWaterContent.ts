import { CalculatorContent } from '@/types/calculator';

export const bodyWaterContent: CalculatorContent = {
  en: {
    whatIs:
      'Total Body Water (TBW) refers to the total amount of water contained in the human body, expressed as a percentage of total body weight or as an absolute volume in liters. Water is the most abundant component of the human body and plays a critical role in virtually every biological process, including temperature regulation, nutrient transport, waste elimination, joint lubrication, and cellular function. The average adult body is composed of approximately 50-65% water for men and 45-60% for women. This difference is primarily due to the fact that women typically have a higher percentage of body fat, which contains less water than lean tissue. Infants have the highest body water percentage at around 75-78%, which gradually decreases with age. The Watson formula, developed by researchers Watson, Watson, and Batt in 1980, is one of the most widely used clinical methods for estimating total body water based on simple anthropometric measurements including age, gender, height, and weight.',

    howToCalculate:
      'Total body water is calculated using the Watson formula, which uses different equations for males and females. For males: TBW (liters) = 2.447 - (0.09156 × age in years) + (0.1074 × height in cm) + (0.3362 × weight in kg). For females: TBW (liters) = -2.097 + (0.1069 × height in cm) + (0.2466 × weight in kg). The body water percentage is then calculated by dividing the total body water by the body weight and multiplying by 100. For example, a 30-year-old male who is 175 cm tall and weighs 75 kg would have: TBW = 2.447 - (0.09156 × 30) + (0.1074 × 175) + (0.3362 × 75) = 2.447 - 2.747 + 18.795 + 25.215 = 43.71 liters, resulting in a body water percentage of (43.71 / 75) × 100 = 58.3%.',

    formulaDetails:
      'The Watson formula was published in the American Journal of Clinical Nutrition in 1980 by researchers P.E. Watson, I.D. Watson, and R.D. Batt. It was developed through regression analysis of data from multiple studies that measured total body water using isotope dilution techniques (deuterium oxide and tritiated water). The male formula includes age as a variable because body water tends to decrease with age in men due to changes in body composition. The female formula does not include age because the researchers found that age was not a statistically significant predictor for women in their dataset. The Watson formula provides estimates within approximately ±3-5% of actual measured values for most healthy adults. For males: TBW = 2.447 - (0.09156 × age) + (0.1074 × height in cm) + (0.3362 × weight in kg). For females: TBW = -2.097 + (0.1069 × height in cm) + (0.2466 × weight in kg). Alternative formulas include the Hume-Weyers formula and the Chertow formula, each with slight variations in accuracy across different populations.',

    categories: [
      {
        range: '< 45% (women) / < 50% (men)',
        label: 'Below Normal',
        description:
          'Body water below the healthy range may indicate dehydration, higher body fat percentage, or certain health conditions. Increasing water intake and reducing body fat can help improve this ratio.',
        color: '#F97316',
      },
      {
        range: '45-60% (women) / 50-65% (men)',
        label: 'Normal Range',
        description:
          'Healthy body water percentage indicates proper hydration and balanced body composition. Maintain regular water intake and a healthy lifestyle to keep this balance.',
        color: '#10B981',
      },
      {
        range: '> 60% (women) / > 65% (men)',
        label: 'Above Normal',
        description:
          'Higher body water percentage may indicate higher lean muscle mass, as muscle tissue contains about 75% water. Athletes and physically active individuals often fall in this range.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Body water percentage is a useful indicator of overall hydration status and body composition. The healthy range varies by gender: 50-65% for adult males and 45-60% for adult females. These ranges reflect the typical water content found in healthy individuals with normal body composition. A body water percentage below the healthy range may suggest chronic dehydration, elevated body fat percentage, or certain medical conditions affecting fluid balance. Conversely, a higher-than-normal percentage may indicate greater lean muscle mass (muscle contains approximately 75% water compared to about 10% in fat tissue) or, rarely, fluid retention. Age plays a significant role in body water content, as older adults tend to have lower percentages due to decreasing muscle mass and changes in kidney function. The total volume of body water in liters is also clinically significant for medication dosing, fluid management in medical settings, and understanding individual hydration needs.',

    limitations:
      'The Watson formula, while widely used and validated, has several limitations. First, it was developed using data primarily from healthy Western adults and may be less accurate for other populations including different ethnic groups, children, pregnant women, and individuals with obesity. Second, the formula provides an estimate based on static measurements and does not account for acute changes in hydration status such as recent exercise, illness, or medication effects. Third, body water distribution between intracellular and extracellular compartments is not differentiated by this formula. Fourth, individuals with certain medical conditions such as edema, ascites, heart failure, liver disease, or kidney disease may have abnormal body water distribution that the formula cannot detect. Fifth, the formula does not account for variations in body composition beyond what is predicted by the input variables. Athletes with very high muscle mass may have actual body water percentages different from predicted values. Sixth, the accuracy of the estimate depends on the accuracy of the input measurements, particularly height and weight.',

    healthRisks:
      'Both inadequate and excessive body water levels carry health risks. Dehydration (insufficient body water) can range from mild to severe. Mild dehydration (1-3% body water loss) causes thirst, decreased urine output, headaches, fatigue, and reduced cognitive performance. Moderate dehydration (3-5% loss) leads to rapid heartbeat, dizziness, decreased blood pressure, and impaired physical performance. Severe dehydration (>5% loss) is a medical emergency that can cause organ failure, seizures, and death. Chronic mild dehydration has been associated with increased risk of kidney stones, urinary tract infections, constipation, and potentially cardiovascular disease. Overhydration (water intoxication or hyponatremia) occurs when excessive water intake dilutes blood sodium levels below 135 mEq/L. This is rare but can occur during intense exercise with excessive water consumption, and can cause confusion, seizures, and in severe cases, death. Maintaining proper hydration through regular fluid intake is essential for optimal health, with most adults needing approximately 2-3 liters of total fluid per day from all sources.',

    alternativeMeasures:
      'Several methods exist for measuring or estimating body water beyond the Watson formula. Bioelectrical Impedance Analysis (BIA) measures the resistance of body tissues to a small electrical current and estimates total body water, as water conducts electricity well. BIA devices range from consumer-grade smart scales to clinical-grade analyzers and are non-invasive but can be affected by hydration status, recent meals, and exercise. Isotope dilution is the gold standard for measuring total body water, using deuterium oxide (heavy water) or oxygen-18. The subject drinks a known amount of the isotope, and body water is calculated from the dilution measured in blood or urine samples. While highly accurate, this method is expensive and typically reserved for research. DEXA (Dual-energy X-ray Absorptiometry) primarily measures bone density and body composition but can provide indirect estimates of body water. Multi-frequency bioelectrical impedance spectroscopy (BIS) can differentiate between intracellular and extracellular water. For daily monitoring, tracking urine color (pale yellow indicates adequate hydration) and body weight changes are practical and accessible methods.',

    medicalDisclaimer:
      'This Body Water Calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The Watson formula provides an estimate based on population-level data and may not accurately reflect your individual body water content. Actual body water percentages can vary significantly based on factors not captured by this formula including fitness level, diet, medication use, medical conditions, and acute hydration status. If you have concerns about your hydration, body composition, or overall health, please consult with a physician, registered dietitian, or other licensed healthcare provider. Individuals with kidney disease, heart failure, liver disease, or other conditions affecting fluid balance should not rely on this calculator for medical management. Never make significant changes to your fluid intake without medical guidance, especially if you have existing health conditions.',

    references: [
      'Watson PE, Watson ID, Batt RD. Total body water volumes for adult males and females estimated from simple anthropometric measurements. Am J Clin Nutr. 1980;33(1):27-39.',
      'Institute of Medicine. Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate. National Academies Press; 2005.',
      'Sawka MN, Cheuvront SN, Carter R. Human water needs. Nutr Rev. 2005;63(6 Pt 2):S30-S39.',
      'Armstrong LE. Hydration assessment techniques. Nutr Rev. 2005;63(6 Pt 2):S40-S54.',
      'Popkin BM, D\'Anci KE, Rosenberg IH. Water, hydration, and health. Nutr Rev. 2010;68(8):439-458.',
      'Jéquier E, Constant F. Water as an essential nutrient: the physiological basis of hydration. Eur J Clin Nutr. 2010;64(2):115-123.',
    ],

    tips: [
      'Aim to drink at least 8 glasses (2 liters) of water per day, adjusting for your body weight, activity level, and climate',
      'Monitor your urine color as a simple hydration indicator - pale yellow means well hydrated, dark yellow suggests you need more fluids',
      'Increase water intake during exercise, hot weather, illness, and when consuming caffeine or alcohol',
      'Eat water-rich foods like cucumbers (96% water), watermelon (92%), strawberries (91%), and lettuce (96%)',
      'Body water percentage naturally decreases with age - staying active and maintaining muscle mass helps preserve hydration',
      'Chronic mild dehydration can affect cognitive function, mood, and energy levels before physical symptoms appear',
      'Thirst is not always a reliable indicator of hydration needs, especially in older adults - establish a regular drinking schedule',
      'Both caffeinated beverages and food contribute to total daily water intake, though water and herbal teas are optimal choices',
    ],

    faqs: [
      {
        question: 'What is a healthy body water percentage?',
        answer:
          'For adult males, a healthy body water percentage ranges from 50% to 65% of total body weight. For adult females, the healthy range is 45% to 60%. Women typically have lower body water percentages because they naturally carry more body fat, which contains less water than muscle tissue. These ranges can vary based on age, fitness level, and overall health status.',
      },
      {
        question: 'How does body fat affect body water percentage?',
        answer:
          'Body fat and body water percentage have an inverse relationship. Fat tissue contains approximately 10% water, while muscle tissue contains about 75% water. Therefore, individuals with higher body fat percentages tend to have lower body water percentages, and vice versa. This is why athletes and physically active individuals often have higher body water percentages than sedentary people.',
      },
      {
        question: 'Does body water percentage change with age?',
        answer:
          'Yes, body water percentage generally decreases with age. Newborns have the highest body water content at approximately 75-78%. This decreases to about 65% in children and further to 50-65% in adult males and 45-60% in adult females. Elderly adults may have even lower percentages due to loss of muscle mass (sarcopenia) and changes in kidney function that affect fluid regulation.',
      },
      {
        question: 'What is the difference between this calculator and the Water Intake Calculator?',
        answer:
          'The Body Water Calculator estimates how much water is currently contained within your body using the Watson formula - it tells you what percentage and volume of your body is water. The Water Intake Calculator, on the other hand, recommends how much water you should drink daily based on your activity level, weight, and other factors. They complement each other: this calculator shows your current state, while the water intake calculator guides your consumption.',
      },
      {
        question: 'How accurate is the Watson formula?',
        answer:
          'The Watson formula provides estimates within approximately ±3-5% of actual measured values for most healthy adults. It was validated against isotope dilution methods, which are the gold standard for measuring total body water. However, accuracy may decrease for individuals who are very obese, very lean, elderly, or from populations not well represented in the original study data. For clinical purposes, more precise methods such as bioelectrical impedance analysis or isotope dilution may be preferred.',
      },
      {
        question: 'Can dehydration be dangerous?',
        answer:
          'Yes, dehydration can range from mildly uncomfortable to life-threatening. Mild dehydration (1-3% body water loss) causes fatigue, headaches, and decreased concentration. Moderate dehydration (3-5% loss) leads to rapid heartbeat, dizziness, and impaired physical performance. Severe dehydration (more than 5% loss) is a medical emergency that can cause confusion, organ failure, and death. Most healthy adults can prevent dehydration by drinking fluids regularly throughout the day.',
      },
      {
        question: 'Should I drink more water if my body water percentage is low?',
        answer:
          'A low body water percentage does not always mean you are currently dehydrated - it may reflect higher body fat levels rather than insufficient water intake. However, ensuring adequate daily fluid intake is important for everyone. The general recommendation is about 2.7 liters per day for women and 3.7 liters for men from all sources (food and beverages combined). If you suspect dehydration, monitor your urine color and consult a healthcare professional for personalized advice.',
      },
    ],
  },
  tr: {
    whatIs:
      'Toplam Vücut Suyu (TVS), insan vücudunda bulunan toplam su miktarını ifade eder ve toplam vücut ağırlığının yüzdesi veya litre cinsinden mutlak hacim olarak gösterilir. Su, insan vücudunun en bol bileşenidir ve sıcaklık düzenleme, besin taşınması, atık maddelerin uzaklaştırılması, eklem yağlanması ve hücresel işlevler dahil olmak üzere neredeyse tüm biyolojik süreçlerde kritik bir rol oynar. Ortalama bir yetişkin erkek vücudunun yaklaşık %50-65\'i, kadın vücudunun ise %45-60\'ı sudan oluşur. Bu fark, kadınların tipik olarak daha yüksek vücut yağ yüzdesine sahip olmasından kaynaklanır; yağ dokusu, yağsız dokuya göre daha az su içerir. Bebeklerin vücut su yüzdesi yaklaşık %75-78 ile en yüksek seviyededir ve yaşla birlikte kademeli olarak azalır. 1980 yılında Watson, Watson ve Batt araştırmacıları tarafından geliştirilen Watson formülü, yaş, cinsiyet, boy ve kilo gibi basit antropometrik ölçümlere dayalı olarak toplam vücut suyunu tahmin etmek için en yaygın kullanılan klinik yöntemlerden biridir.',

    howToCalculate:
      'Toplam vücut suyu, erkekler ve kadınlar için farklı denklemler kullanan Watson formülü ile hesaplanır. Erkekler için: TVS (litre) = 2,447 - (0,09156 × yaş) + (0,1074 × boy cm) + (0,3362 × kilo kg). Kadınlar için: TVS (litre) = -2,097 + (0,1069 × boy cm) + (0,2466 × kilo kg). Vücut su yüzdesi, toplam vücut suyunun vücut ağırlığına bölünüp 100 ile çarpılmasıyla hesaplanır. Örneğin, 175 cm boyunda ve 75 kg ağırlığında 30 yaşında bir erkek için: TVS = 2,447 - (0,09156 × 30) + (0,1074 × 175) + (0,3362 × 75) = 2,447 - 2,747 + 18,795 + 25,215 = 43,71 litre, bu da (43,71 / 75) × 100 = %58,3 vücut su yüzdesine karşılık gelir.',

    formulaDetails:
      'Watson formülü, 1980 yılında P.E. Watson, I.D. Watson ve R.D. Batt araştırmacıları tarafından American Journal of Clinical Nutrition dergisinde yayımlanmıştır. İzotop seyreltme teknikleri (döteryum oksit ve tritiyumlu su) kullanılarak toplam vücut suyunu ölçen birden fazla çalışmanın verilerinin regresyon analiziyle geliştirilmiştir. Erkek formülü, vücut kompozisyonundaki değişiklikler nedeniyle erkeklerde vücut suyunun yaşla birlikte azalma eğiliminde olması sebebiyle yaş değişkenini içerir. Kadın formülü yaş içermez çünkü araştırmacılar, veri setlerinde kadınlar için yaşın istatistiksel olarak anlamlı bir öngörücü olmadığını bulmuşlardır. Watson formülü, çoğu sağlıklı yetişkin için gerçek ölçülen değerlerin yaklaşık ±%3-5 aralığında tahminler sunar. Erkekler için: TVS = 2,447 - (0,09156 × yaş) + (0,1074 × boy cm) + (0,3362 × kilo kg). Kadınlar için: TVS = -2,097 + (0,1069 × boy cm) + (0,2466 × kilo kg). Alternatif formüller arasında Hume-Weyers formülü ve Chertow formülü bulunur ve her biri farklı popülasyonlarda hafif doğruluk farklılıkları gösterir.',

    categories: [
      {
        range: '< %45 (kadın) / < %50 (erkek)',
        label: 'Normalin Altında',
        description:
          'Sağlıklı aralığın altında vücut suyu, dehidrasyon, yüksek vücut yağ oranı veya belirli sağlık durumlarını gösterebilir. Su alımını artırmak ve vücut yağını azaltmak bu oranı iyileştirmeye yardımcı olabilir.',
        color: '#F97316',
      },
      {
        range: '%45-60 (kadın) / %50-65 (erkek)',
        label: 'Normal Aralık',
        description:
          'Sağlıklı vücut su yüzdesi, uygun hidrasyon ve dengeli vücut kompozisyonunu gösterir. Bu dengeyi korumak için düzenli su tüketimi ve sağlıklı bir yaşam tarzı sürdürün.',
        color: '#10B981',
      },
      {
        range: '> %60 (kadın) / > %65 (erkek)',
        label: 'Normalin Üstünde',
        description:
          'Daha yüksek vücut su yüzdesi, yüksek yağsız kas kütlesini gösterebilir; kas dokusu yaklaşık %75 su içerir. Sporcular ve fiziksel olarak aktif bireyler genellikle bu aralığa düşer.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Vücut su yüzdesi, genel hidrasyon durumu ve vücut kompozisyonunun yararlı bir göstergesidir. Sağlıklı aralık cinsiyete göre değişir: yetişkin erkekler için %50-65, yetişkin kadınlar için %45-60. Bu aralıklar, normal vücut kompozisyonuna sahip sağlıklı bireylerde bulunan tipik su içeriğini yansıtır. Sağlıklı aralığın altında bir vücut su yüzdesi, kronik dehidrasyon, yüksek vücut yağ oranı veya sıvı dengesini etkileyen belirli tıbbi durumları gösterebilir. Tersine, normalden yüksek bir yüzde, daha fazla yağsız kas kütlesini (kas yaklaşık %75 su içerirken yağ dokusunda bu oran yaklaşık %10\'dur) veya nadiren sıvı tutulumunu gösterebilir. Yaş, vücut su içeriğinde önemli bir rol oynar; yaşlı yetişkinler, azalan kas kütlesi ve böbrek fonksiyonundaki değişiklikler nedeniyle daha düşük yüzdelere sahip olma eğilimindedir. Litre cinsinden toplam vücut su hacmi, ilaç dozajı, tıbbi ortamlarda sıvı yönetimi ve bireysel hidrasyon ihtiyaçlarının anlaşılması açısından klinik olarak da önemlidir.',

    limitations:
      'Watson formülü yaygın olarak kullanılmakta ve doğrulanmış olsa da birçok sınırlaması vardır. İlk olarak, ağırlıklı olarak sağlıklı Batılı yetişkinlerden elde edilen veriler kullanılarak geliştirilmiştir ve farklı etnik gruplar, çocuklar, hamile kadınlar ve obezitesi olan bireyler dahil diğer popülasyonlar için daha az doğru olabilir. İkinci olarak, formül statik ölçümlere dayalı tahminler sunar ve yakın zamandaki egzersiz, hastalık veya ilaç etkileri gibi akut hidrasyon durumu değişikliklerini hesaba katmaz. Üçüncü olarak, vücut suyu dağılımı hücre içi ve hücre dışı bölümler arasında bu formül tarafından ayrılmaz. Dördüncü olarak, ödem, asit, kalp yetmezliği, karaciğer hastalığı veya böbrek hastalığı gibi belirli tıbbi durumları olan bireylerde formülün tespit edemeyeceği anormal vücut suyu dağılımı olabilir. Beşinci olarak, formül, girdi değişkenleri tarafından öngörülenin ötesinde vücut kompozisyonu farklılıklarını hesaba katmaz. Çok yüksek kas kütlesine sahip sporcuların gerçek vücut su yüzdeleri, tahmin edilen değerlerden farklı olabilir.',

    healthRisks:
      'Hem yetersiz hem de aşırı vücut su seviyeleri sağlık riskleri taşır. Dehidrasyon (yetersiz vücut suyu) hafiften şiddetliye kadar değişebilir. Hafif dehidrasyon (%1-3 vücut su kaybı) susuzluk, azalmış idrar çıkışı, baş ağrısı, yorgunluk ve azalmış bilişsel performansa neden olur. Orta düzeyde dehidrasyon (%3-5 kayıp) hızlı kalp atışına, baş dönmesine, düşük kan basıncına ve bozulmuş fiziksel performansa yol açar. Şiddetli dehidrasyon (%5\'ten fazla kayıp) organ yetmezliği, nöbetler ve ölüme neden olabilecek tıbbi bir acil durumdur. Kronik hafif dehidrasyon, böbrek taşları, idrar yolu enfeksiyonları, kabızlık ve potansiyel olarak kardiyovasküler hastalık riskinin artmasıyla ilişkilendirilmiştir. Aşırı hidrasyon (su zehirlenmesi veya hiponatremi), aşırı su alımının kan sodyum düzeylerini 135 mEq/L\'nin altına düşürmesiyle ortaya çıkar. Bu nadirdir ancak yoğun egzersiz sırasında aşırı su tüketimi ile gerçekleşebilir ve kafa karışıklığına, nöbetlere ve ciddi durumlarda ölüme neden olabilir.',

    alternativeMeasures:
      'Watson formülünün ötesinde vücut suyunu ölçmek veya tahmin etmek için birkaç yöntem mevcuttur. Biyoelektrik Empedans Analizi (BIA), vücut dokularının küçük bir elektrik akımına karşı direncini ölçer ve toplam vücut suyunu tahmin eder; su elektriği iyi iletir. BIA cihazları, tüketici sınıfı akıllı tartılardan klinik sınıf analizörlere kadar uzanır ve invaziv değildir ancak hidrasyon durumu, yakın zamandaki öğünler ve egzersizden etkilenebilir. İzotop seyreltme, toplam vücut suyunu ölçmek için altın standarttır; döteryum oksit (ağır su) veya oksijen-18 kullanır. Denek bilinen miktarda izotop içer ve vücut suyu, kan veya idrar örneklerinde ölçülen seyrelmeden hesaplanır. Son derece doğru olmasına rağmen, bu yöntem pahalıdır ve genellikle araştırma için ayrılmıştır. Günlük izleme için, idrar rengini takip etmek (açık sarı yeterli hidrasyonu gösterir) ve vücut ağırlığı değişikliklerini izlemek pratik ve erişilebilir yöntemlerdir.',

    medicalDisclaimer:
      'Bu Vücut Suyu Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Watson formülü, popülasyon düzeyindeki verilere dayalı bir tahmin sunar ve bireysel vücut su içeriğinizi doğru şekilde yansıtmayabilir. Gerçek vücut su yüzdeleri, bu formül tarafından yakalanmayan fitness seviyesi, diyet, ilaç kullanımı, tıbbi durumlar ve akut hidrasyon durumu gibi faktörlere bağlı olarak önemli ölçüde farklılık gösterebilir. Hidrasyonunuz, vücut kompozisyonunuz veya genel sağlığınız hakkında endişeleriniz varsa, lütfen bir doktora, diyetisyene veya diğer lisanslı sağlık uzmanına danışın. Böbrek hastalığı, kalp yetmezliği, karaciğer hastalığı veya sıvı dengesini etkileyen diğer durumları olan bireyler, tıbbi yönetim için bu hesaplayıcıya güvenmemelidir.',

    references: [
      'Watson PE, Watson ID, Batt RD. Basit antropometrik ölçümlerden yetişkin erkek ve kadınlar için toplam vücut suyu hacimlerinin tahmini. Am J Clin Nutr. 1980;33(1):27-39.',
      'Tıp Enstitüsü. Su, Potasyum, Sodyum, Klorür ve Sülfat için Diyet Referans Alımları. National Academies Press; 2005.',
      'Sawka MN, Cheuvront SN, Carter R. İnsan su ihtiyaçları. Nutr Rev. 2005;63(6 Pt 2):S30-S39.',
      'Armstrong LE. Hidrasyon değerlendirme teknikleri. Nutr Rev. 2005;63(6 Pt 2):S40-S54.',
      'Popkin BM, D\'Anci KE, Rosenberg IH. Su, hidrasyon ve sağlık. Nutr Rev. 2010;68(8):439-458.',
      'Jéquier E, Constant F. Temel bir besin olarak su: hidrasyonun fizyolojik temeli. Eur J Clin Nutr. 2010;64(2):115-123.',
    ],

    tips: [
      'Vücut ağırlığınıza, aktivite düzeyinize ve iklime göre ayarlayarak günde en az 8 bardak (2 litre) su içmeyi hedefleyin',
      'İdrar renginizi basit bir hidrasyon göstergesi olarak izleyin - açık sarı iyi hidre olduğunuz, koyu sarı daha fazla sıvıya ihtiyacınız olduğu anlamına gelir',
      'Egzersiz sırasında, sıcak havalarda, hastalık dönemlerinde ve kafein veya alkol tüketirken su alımını artırın',
      'Salatalık (%96 su), karpuz (%92), çilek (%91) ve marul (%96) gibi su bakımından zengin gıdalar tüketin',
      'Vücut su yüzdesi yaşla birlikte doğal olarak azalır - aktif kalmak ve kas kütlesini korumak hidrasyonu sürdürmeye yardımcı olur',
      'Kronik hafif dehidrasyon, fiziksel belirtiler ortaya çıkmadan önce bilişsel işlevi, ruh halini ve enerji düzeylerini etkileyebilir',
      'Susuzluk hissi her zaman hidrasyon ihtiyacının güvenilir bir göstergesi değildir, özellikle yaşlı yetişkinlerde - düzenli bir içme programı oluşturun',
      'Kafeinli içecekler ve yiyecekler de günlük toplam su alımına katkıda bulunur, ancak su ve bitki çayları en ideal seçeneklerdir',
    ],

    faqs: [
      {
        question: 'Sağlıklı vücut su yüzdesi nedir?',
        answer:
          'Yetişkin erkekler için sağlıklı vücut su yüzdesi toplam vücut ağırlığının %50 ile %65 arasındadır. Yetişkin kadınlar için sağlıklı aralık %45 ile %60 arasındadır. Kadınlar doğal olarak daha fazla vücut yağı taşıdıkları için genellikle daha düşük vücut su yüzdelerine sahiptir; yağ dokusu, kas dokusuna göre daha az su içerir. Bu aralıklar yaş, fitness seviyesi ve genel sağlık durumuna göre değişebilir.',
      },
      {
        question: 'Vücut yağı vücut su yüzdesini nasıl etkiler?',
        answer:
          'Vücut yağı ve vücut su yüzdesi ters bir ilişkiye sahiptir. Yağ dokusu yaklaşık %10 su içerirken, kas dokusu yaklaşık %75 su içerir. Bu nedenle, daha yüksek vücut yağ yüzdesine sahip bireyler daha düşük vücut su yüzdelerine sahip olma eğilimindedir ve bunun tersi de geçerlidir. Bu yüzden sporcular ve fiziksel olarak aktif bireyler, hareketsiz insanlara göre genellikle daha yüksek vücut su yüzdelerine sahiptir.',
      },
      {
        question: 'Vücut su yüzdesi yaşla birlikte değişir mi?',
        answer:
          'Evet, vücut su yüzdesi genellikle yaşla birlikte azalır. Yenidoğanlarda en yüksek vücut su içeriği yaklaşık %75-78\'dir. Bu, çocuklarda yaklaşık %65\'e ve daha sonra yetişkin erkeklerde %50-65, yetişkin kadınlarda %45-60\'a düşer. Yaşlı yetişkinlerin, kas kütlesi kaybı (sarkopeni) ve sıvı düzenlemeyi etkileyen böbrek fonksiyonundaki değişiklikler nedeniyle daha da düşük yüzdelere sahip olması mümkündür.',
      },
      {
        question: 'Bu hesaplayıcı ile Su İhtiyacı Hesaplayıcı arasındaki fark nedir?',
        answer:
          'Vücut Suyu Hesaplayıcı, Watson formülünü kullanarak vücudunuzda şu anda ne kadar su bulunduğunu tahmin eder - vücudunuzun yüzde kaçının ve kaç litresinin su olduğunu gösterir. Su İhtiyacı Hesaplayıcı ise aktivite seviyenize, kilonuza ve diğer faktörlere göre günlük ne kadar su içmeniz gerektiğini önerir. Birbirlerini tamamlarlar: bu hesaplayıcı mevcut durumunuzu gösterir, su ihtiyacı hesaplayıcı ise tüketiminize rehberlik eder.',
      },
      {
        question: 'Watson formülü ne kadar doğrudur?',
        answer:
          'Watson formülü, çoğu sağlıklı yetişkin için gerçek ölçülen değerlerin yaklaşık ±%3-5 aralığında tahminler sunar. Toplam vücut suyunu ölçmek için altın standart olan izotop seyreltme yöntemlerine karşı doğrulanmıştır. Ancak çok obez, çok zayıf, yaşlı veya orijinal çalışma verilerinde yeterince temsil edilmeyen popülasyonlardan bireyler için doğruluk azalabilir. Klinik amaçlar için, biyoelektrik empedans analizi veya izotop seyreltme gibi daha kesin yöntemler tercih edilebilir.',
      },
      {
        question: 'Dehidrasyon tehlikeli olabilir mi?',
        answer:
          'Evet, dehidrasyon hafiften yaşamı tehdit edene kadar değişebilir. Hafif dehidrasyon (%1-3 vücut su kaybı) yorgunluk, baş ağrısı ve konsantrasyon azalmasına neden olur. Orta düzeyde dehidrasyon (%3-5 kayıp) hızlı kalp atışı, baş dönmesi ve bozulmuş fiziksel performansa yol açar. Şiddetli dehidrasyon (%5\'ten fazla kayıp), kafa karışıklığı, organ yetmezliği ve ölüme neden olabilecek tıbbi bir acil durumdur. Çoğu sağlıklı yetişkin, gün boyunca düzenli olarak sıvı tüketerek dehidrasyonu önleyebilir.',
      },
      {
        question: 'Vücut su yüzdem düşükse daha fazla su içmeli miyim?',
        answer:
          'Düşük vücut su yüzdesi her zaman şu anda susuz olduğunuz anlamına gelmez - yetersiz su alımından ziyade yüksek vücut yağ seviyelerini yansıtıyor olabilir. Ancak yeterli günlük sıvı alımını sağlamak herkes için önemlidir. Genel öneri, kadınlar için günde yaklaşık 2,7 litre, erkekler için 3,7 litre olmak üzere tüm kaynaklardan (yiyecek ve içecekler dahil) sıvı alımıdır. Dehidrasyondan şüpheleniyorsanız idrar renginizi izleyin ve kişiselleştirilmiş tavsiye için bir sağlık uzmanına danışın.',
      },
    ],
  },
};
