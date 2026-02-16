import { CalculatorContent } from '@/types/calculator';

export const leanBodyMassContent: CalculatorContent = {
  en: {
    whatIs:
      'Lean Body Mass (LBM), also known as fat-free mass, represents the total weight of your body minus all the fat. It includes the weight of your muscles, bones, organs, skin, blood, and water. Unlike BMI, which only considers total weight relative to height, LBM provides a more nuanced picture of body composition by separating lean tissue from fat tissue. This distinction is crucial because two people with identical weight and height can have vastly different amounts of muscle and fat. LBM is particularly useful for athletes, fitness enthusiasts, and healthcare professionals who need to assess body composition beyond simple weight measurements. The concept was formalized through research by scientists including Hume (1966), James (1976), and Boer (1984), each developing mathematical formulas to estimate LBM from height, weight, and gender without requiring specialized equipment.',

    howToCalculate:
      'To calculate your Lean Body Mass, you need three measurements: your height, weight, and biological sex. Our calculator uses three validated scientific formulas simultaneously. The Boer formula (1984) calculates LBM for males as 0.407 x weight(kg) + 0.267 x height(cm) - 19.2, and for females as 0.252 x weight(kg) + 0.473 x height(cm) - 48.3. The James formula (1976) uses LBM = 1.1 x weight - 128 x (weight/height)² for males and LBM = 1.07 x weight - 148 x (weight/height)² for females. The Hume formula (1966) calculates LBM = 0.32810 x weight + 0.33929 x height - 29.5336 for males and LBM = 0.29569 x weight + 0.41813 x height - 43.2933 for females. The calculator provides results from all three formulas plus their average, giving you a comprehensive estimate. Simply enter your height, weight, and select your gender and unit system to get instant results.',

    formulaDetails:
      'Three scientifically validated formulas are used to estimate Lean Body Mass, each developed through different research methodologies. The Boer Formula (1984) is considered the most accurate for the general population. It was developed by Peter Boer using regression analysis on data from healthy adults. For males: LBM = 0.407 x W + 0.267 x H - 19.2, and for females: LBM = 0.252 x W + 0.473 x H - 48.3, where W is weight in kilograms and H is height in centimeters. The James Formula (1976), developed by W.P.T. James, uses a quadratic relationship with the weight-to-height ratio, making it more sensitive to body proportions. For males: LBM = 1.1 x W - 128 x (W/H)², and for females: LBM = 1.07 x W - 148 x (W/H)². The Hume Formula (1966), the earliest of the three, was developed by R. Hume using linear regression. For males: LBM = 0.32810 x W + 0.33929 x H - 29.5336, and for females: LBM = 0.29569 x W + 0.41813 x H - 43.2933. Each formula has different strengths: Boer tends to be most reliable across populations, James better captures extreme body types, and Hume provides a stable baseline. Using the average of all three provides the most robust estimate.',

    interpretation:
      'Lean Body Mass results should be interpreted in the context of your gender, age, fitness level, and health goals. For men, healthy lean body mass typically comprises 75-90% of total body weight, meaning body fat should be approximately 10-25%. For women, healthy lean mass ranges from 65-80% of total weight, with body fat between 20-35%. Athletes may have lean mass percentages above these ranges (over 90% for elite male athletes, over 80% for elite female athletes). If your lean body mass percentage falls below the typical range, it may indicate excess body fat, which is associated with increased health risks including cardiovascular disease, type 2 diabetes, and metabolic syndrome. However, LBM estimates from height and weight alone are approximations. For precise body composition assessment, methods like DEXA scans, hydrostatic weighing, or bioelectrical impedance analysis (BIA) provide more accurate measurements. LBM is also valuable for calculating medication dosages, determining caloric needs, and setting realistic fitness goals.',

    limitations:
      'While Lean Body Mass calculators based on height, weight, and gender provide useful estimates, they have important limitations. First, these formulas were developed on specific population samples and may be less accurate for individuals outside those populations, including different ethnic groups, very tall or short individuals, and the elderly. Second, LBM estimation from these formulas cannot distinguish between types of lean tissue (muscle vs. bone vs. organs), which limits their usefulness for detailed body composition analysis. Third, hydration status significantly affects actual lean body mass (water constitutes a large portion of lean tissue), but these formulas cannot account for daily hydration fluctuations. Fourth, the formulas do not account for age-related changes in body composition, such as sarcopenia (age-related muscle loss) in older adults or growth phases in adolescents. Fifth, individuals with unusual body proportions (very muscular, amputees, or those with certain medical conditions) may receive inaccurate estimates. Sixth, these calculators provide a static snapshot and cannot track changes in body composition over time without additional measurements. For the most accurate assessment, combine these estimates with direct measurement methods and professional medical evaluation.',

    healthRisks:
      'Body composition, as reflected by lean body mass, is closely linked to various health outcomes. Low lean body mass relative to total weight indicates higher body fat, which increases risk for cardiovascular disease, type 2 diabetes, hypertension, dyslipidemia, sleep apnea, certain cancers (breast, colon, endometrial), osteoarthritis, and fatty liver disease. Conversely, very low body fat (extremely high lean mass percentage) can also pose health risks, including hormonal disruption, weakened immune function, bone density loss in women, and reproductive issues. For men, essential body fat below 3-5% and for women below 10-13% is considered dangerous. Sarcopenia, the progressive loss of lean muscle mass associated with aging, is increasingly recognized as a significant health concern. Adults lose approximately 3-8% of muscle mass per decade after age 30, accelerating after 60. Low muscle mass is associated with falls and fractures in the elderly, reduced metabolic rate leading to weight gain, insulin resistance and metabolic syndrome, decreased functional independence, and higher mortality risk. Maintaining adequate lean body mass through resistance training and adequate protein intake (1.2-2.0 g/kg/day) is essential for long-term health.',

    improvementTips:
      'To increase lean body mass and improve body composition, focus on these evidence-based strategies. Resistance training is the most effective method for building lean mass. Aim for 2-4 sessions per week targeting all major muscle groups, progressively increasing weight or resistance over time. Compound exercises (squats, deadlifts, bench press, rows) are particularly effective for building overall lean mass. Adequate protein intake is critical, with research recommending 1.6-2.2 g per kg of body weight daily for those actively building muscle. Distribute protein intake evenly across meals (20-40 g per meal) to optimize muscle protein synthesis. Ensure sufficient caloric intake, as building lean mass requires adequate energy. A modest caloric surplus of 250-500 calories above maintenance supports muscle growth while minimizing fat gain. Prioritize sleep (7-9 hours), as growth hormone is primarily released during deep sleep, and sleep deprivation impairs muscle recovery and growth. Stay well-hydrated, as lean tissue is approximately 73% water. Minimize prolonged periods of inactivity, even on non-training days. Consider creatine monohydrate supplementation (3-5 g/day), one of the most well-researched and safe supplements for supporting lean mass gains. Be patient, as natural muscle growth occurs at approximately 0.25-0.5 kg per week under optimal conditions.',

    alternativeMeasures:
      'Several methods provide more precise body composition data than formula-based LBM estimation. DEXA (Dual-energy X-ray Absorptiometry) scanning is considered the gold standard for body composition assessment, measuring bone density, lean tissue, and fat mass with high precision across different body regions. Hydrostatic (underwater) weighing uses water displacement to calculate body density, which is then used to estimate fat and lean mass. While highly accurate, it requires specialized facilities and full submersion. Bioelectrical Impedance Analysis (BIA) sends a small electrical current through the body to estimate body composition. Modern BIA devices (like InBody and similar systems) can provide segmental analysis of lean mass. Skinfold calipers measure subcutaneous fat at specific body sites, with trained technicians achieving reasonable accuracy. Air displacement plethysmography (Bod Pod) measures body composition through air displacement, similar in principle to underwater weighing but more comfortable. MRI and CT scans provide the most detailed body composition imaging but are expensive and typically reserved for research. For practical purposes, combining formula-based LBM estimation with waist circumference, waist-to-hip ratio, and regular body measurements (chest, arms, thighs) provides a cost-effective way to track body composition changes over time.',

    medicalDisclaimer:
      'This Lean Body Mass calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The formulas used provide estimates based on population-level data and may not accurately reflect your individual body composition. Factors such as ethnicity, age, hydration status, fitness level, and medical conditions can significantly affect the accuracy of these estimates. Results should not be used to make medical decisions regarding medication dosing, surgical planning, or nutritional interventions without consultation with qualified healthcare professionals. If you have concerns about your body composition, muscle mass, or overall health, consult with a physician, registered dietitian, or certified fitness professional who can perform comprehensive assessments using validated measurement methods.',

    references: [
      'Boer P. Estimated lean body mass as an index for normalization of body fluid volumes in humans. Am J Physiol. 1984;247(4 Pt 2):F632-636.',
      'James WPT. Research on obesity: a report of the DHSS/MRC group. Her Majesty\'s Stationery Office. 1976.',
      'Hume R. Prediction of lean body mass from height and weight. J Clin Pathol. 1966;19(4):389-391.',
      'Gallagher D, Heymsfield SB, et al. Healthy percentage body fat ranges: an approach for developing guidelines based on body mass index. Am J Clin Nutr. 2000;72(3):694-701.',
      'Cruz-Jentoft AJ, et al. Sarcopenia: revised European consensus on definition and diagnosis. Age Ageing. 2019;48(1):16-31.',
      'Morton RW, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med. 2018;52(6):376-384.',
    ],

    tips: [
      'Lean body mass is a more informative metric than total weight for assessing body composition and setting fitness goals',
      'Track your LBM over time rather than focusing on total weight alone - losing fat while maintaining muscle is the ideal approach',
      'Combine resistance training with adequate protein (1.6-2.2 g/kg/day) to build and maintain lean mass',
      'The average of all three formulas provides the most reliable estimate - no single formula is perfect',
      'For accurate tracking, use consistent conditions when measuring (same time of day, similar hydration status)',
      'Age-related muscle loss (sarcopenia) starts around age 30 - strength training helps prevent this at any age',
      'Lean body mass significantly influences your metabolic rate, with each kg of muscle burning approximately 13 calories per day at rest',
      'If your LBM seems low, consult a healthcare provider before starting any intensive exercise program',
    ],

    faqs: [
      {
        question: 'What is the difference between lean body mass and muscle mass?',
        answer:
          'Lean body mass (LBM) includes everything in your body except fat: muscles, bones, organs, skin, blood, and water. Muscle mass is only one component of LBM. Typically, skeletal muscle accounts for about 40-50% of lean body mass in healthy adults. So while the terms are sometimes used interchangeably, LBM is always higher than actual muscle mass because it includes all non-fat tissue.',
      },
      {
        question: 'How accurate are LBM formula calculations?',
        answer:
          'Formula-based LBM calculations provide reasonable estimates for the general population, typically within 5-10% of actual values measured by DEXA or hydrostatic weighing. The Boer formula tends to be most accurate overall. However, accuracy decreases for individuals at extremes of body composition (very lean or very obese), athletes with high muscle mass, elderly individuals, and certain ethnic groups. For precise measurements, consider DEXA scanning or bioelectrical impedance analysis.',
      },
      {
        question: 'Why are there different formulas for men and women?',
        answer:
          'Men and women have fundamentally different body compositions due to hormonal differences. Men typically have higher lean body mass percentages (75-90%) compared to women (65-80%) because testosterone promotes muscle development, while estrogen promotes essential fat storage for reproductive functions. The different formula coefficients account for these biological differences in fat distribution, muscle mass potential, and bone density between sexes.',
      },
      {
        question: 'How can I increase my lean body mass?',
        answer:
          'The most effective strategies include progressive resistance training (2-4 times weekly targeting all muscle groups), adequate protein intake (1.6-2.2 g per kg body weight daily), sufficient caloric intake (slight surplus of 250-500 calories), quality sleep (7-9 hours), and proper hydration. Compound exercises like squats, deadlifts, and bench presses are most efficient. Natural muscle gain occurs at approximately 0.25-0.5 kg per week under optimal conditions. Consistency over months is more important than any single factor.',
      },
      {
        question: 'Does lean body mass decrease with age?',
        answer:
          'Yes, adults typically lose 3-8% of muscle mass per decade after age 30, with the rate accelerating after 60. This condition, called sarcopenia, is associated with decreased strength, mobility, metabolic rate, and increased fall risk. However, resistance training can significantly slow and even partially reverse age-related muscle loss at any age. Studies show that even adults in their 80s and 90s can gain muscle through proper strength training.',
      },
      {
        question: 'Which LBM formula should I trust most?',
        answer:
          'The Boer formula (1984) is generally considered the most accurate for the general population based on validation studies. However, the best approach is to use the average of all three formulas (Boer, James, and Hume), as this smooths out the individual biases of each formula and provides a more robust estimate. If your results vary significantly between formulas, consider getting a DEXA scan for precise measurement.',
      },
      {
        question: 'How is lean body mass used in medicine?',
        answer:
          'In clinical medicine, LBM is used for calculating appropriate medication dosages (especially for drugs distributed in lean tissue), determining anesthesia requirements, assessing nutritional status and malnutrition risk, monitoring disease progression in conditions like cancer cachexia and chronic kidney disease, and planning surgical interventions. Many drug dosing protocols use lean body mass rather than total body weight to avoid overdosing in obese patients.',
      },
    ],
  },
  tr: {
    whatIs:
      'Yağsız Vücut Kütlesi (YVK), yağsız kütle olarak da bilinir, vücudunuzun toplam ağırlığından tüm yağ çıkarıldığında kalan kütleyi temsil eder. Kaslarınızın, kemiklerinizin, organlarınızın, cildinizin, kanınızın ve suyunuzun ağırlığını içerir. Sadece boya göre toplam kiloyu değerlendiren VKİ\'nin aksine, YVK yağsız dokuyu yağ dokusundan ayırarak vücut kompozisyonunun daha ayrıntılı bir resmini sunar. Bu ayrım çok önemlidir çünkü aynı kilo ve boya sahip iki kişi çok farklı miktarlarda kas ve yağa sahip olabilir. YVK özellikle sporcular, fitness meraklıları ve basit kilo ölçümlerinin ötesinde vücut kompozisyonunu değerlendirmesi gereken sağlık profesyonelleri için faydalıdır. Konsept, her biri özel ekipman gerektirmeden boy, kilo ve cinsiyetten YVK\'yı tahmin etmek için matematiksel formüller geliştiren Hume (1966), James (1976) ve Boer (1984) dahil bilim insanlarının araştırmalarıyla resmileştirilmiştir.',

    howToCalculate:
      'Yağsız Vücut Kütlenizi hesaplamak için üç ölçüme ihtiyacınız var: boyunuz, kilonuz ve biyolojik cinsiyetiniz. Hesaplayıcımız aynı anda üç doğrulanmış bilimsel formül kullanır. Boer formülü (1984) erkekler için YVK\'yı 0.407 x kilo(kg) + 0.267 x boy(cm) - 19.2 olarak, kadınlar için 0.252 x kilo(kg) + 0.473 x boy(cm) - 48.3 olarak hesaplar. James formülü (1976) erkekler için YVK = 1.1 x kilo - 128 x (kilo/boy)² ve kadınlar için YVK = 1.07 x kilo - 148 x (kilo/boy)² kullanır. Hume formülü (1966) erkekler için YVK = 0.32810 x kilo + 0.33929 x boy - 29.5336 ve kadınlar için YVK = 0.29569 x kilo + 0.41813 x boy - 43.2933 hesaplar. Hesaplayıcı üç formülün tamamından sonuçlar artı ortalamalarını sunarak kapsamlı bir tahmin verir. Anında sonuç almak için boyunuzu, kilonuzu girin ve cinsiyetinizi ve birim sisteminizi seçin.',

    formulaDetails:
      'Yağsız Vücut Kütlesini tahmin etmek için farklı araştırma metodolojileriyle geliştirilen üç bilimsel olarak doğrulanmış formül kullanılır. Boer Formülü (1984) genel popülasyon için en doğru kabul edilir. Peter Boer tarafından sağlıklı yetişkinlerden elde edilen veriler üzerinde regresyon analizi kullanılarak geliştirilmiştir. Erkekler için: YVK = 0.407 x A + 0.267 x B - 19.2 ve kadınlar için: YVK = 0.252 x A + 0.473 x B - 48.3, burada A kilogram cinsinden ağırlık ve B santimetre cinsinden boydur. James Formülü (1976), W.P.T. James tarafından geliştirilmiş olup, kilo-boy oranıyla kuadratik bir ilişki kullanır ve vücut oranlarına daha duyarlıdır. Erkekler için: YVK = 1.1 x A - 128 x (A/B)² ve kadınlar için: YVK = 1.07 x A - 148 x (A/B)². Hume Formülü (1966), üçünün en eskisi, R. Hume tarafından doğrusal regresyon kullanılarak geliştirilmiştir. Erkekler için: YVK = 0.32810 x A + 0.33929 x B - 29.5336 ve kadınlar için: YVK = 0.29569 x A + 0.41813 x B - 43.2933. Her formülün farklı güçlü yönleri vardır: Boer popülasyonlar genelinde en güvenilir olma eğilimindedir, James aşırı vücut tiplerini daha iyi yakalar ve Hume stabil bir temel sağlar. Üçünün ortalamasını kullanmak en sağlam tahmini verir.',

    interpretation:
      'Yağsız Vücut Kütlesi sonuçları cinsiyetiniz, yaşınız, fitness seviyeniz ve sağlık hedefleriniz bağlamında yorumlanmalıdır. Erkekler için sağlıklı yağsız vücut kütlesi tipik olarak toplam vücut ağırlığının %75-90\'ını oluşturur, yani vücut yağı yaklaşık %10-25 olmalıdır. Kadınlar için sağlıklı yağsız kütle toplam ağırlığın %65-80\'i arasında değişir, vücut yağı %20-35 arasındadır. Sporcular bu aralıkların üzerinde yağsız kütle yüzdelerine sahip olabilir (elit erkek sporcular için %90\'ın üzeri, elit kadın sporcular için %80\'in üzeri). Yağsız vücut kütlesi yüzdeniz tipik aralığın altına düşerse, bu kardiyovasküler hastalık, tip 2 diyabet ve metabolik sendrom dahil artmış sağlık riskleriyle ilişkili aşırı vücut yağını gösterebilir. Ancak, sadece boy ve kilodan yapılan YVK tahminleri yaklaşıklardır. Hassas vücut kompozisyonu değerlendirmesi için DEXA taramaları, hidrostatik tartım veya biyoelektrik empedans analizi (BIA) gibi yöntemler daha doğru ölçümler sağlar.',

    limitations:
      'Boy, kilo ve cinsiyete dayalı Yağsız Vücut Kütlesi hesaplayıcıları yararlı tahminler sağlasa da önemli sınırlamaları vardır. Birincisi, bu formüller belirli popülasyon örnekleri üzerinde geliştirilmiştir ve farklı etnik gruplar, çok uzun veya kısa bireyler ve yaşlılar dahil bu popülasyonların dışındaki bireyler için daha az doğru olabilir. İkincisi, bu formüllerden YVK tahmini yağsız doku türleri (kas, kemik, organlar) arasında ayrım yapamaz. Üçüncüsü, hidrasyon durumu gerçek yağsız vücut kütlesini önemli ölçüde etkiler ancak bu formüller günlük hidrasyon dalgalanmalarını hesaba katamaz. Dördüncüsü, formüller yaşlı yetişkinlerdeki sarkopeni veya ergenlerdeki büyüme evreleri gibi vücut kompozisyonundaki yaşa bağlı değişiklikleri hesaba katmaz. Beşincisi, olağandışı vücut oranlarına sahip bireyler hatalı tahminler alabilir. En doğru değerlendirme için bu tahminleri doğrudan ölçüm yöntemleri ve profesyonel tıbbi değerlendirme ile birleştirin.',

    healthRisks:
      'Yağsız vücut kütlesi tarafından yansıtılan vücut kompozisyonu, çeşitli sağlık sonuçlarıyla yakından bağlantılıdır. Toplam ağırlığa göre düşük yağsız vücut kütlesi, daha yüksek vücut yağını gösterir ve kardiyovasküler hastalık, tip 2 diyabet, hipertansiyon, dislipidemi, uyku apnesi, belirli kanserler, osteoartrit ve yağlı karaciğer hastalığı riskini artırır. Öte yandan, çok düşük vücut yağı da hormonal bozulma, zayıflamış bağışıklık fonksiyonu ve üreme sorunları dahil sağlık riskleri oluşturabilir. Yaşlanmayla ilişkili ilerleyici yağsız kas kütlesi kaybı olan sarkopeni, önemli bir sağlık sorunu olarak giderek daha fazla kabul görmektedir. Yetişkinler 30 yaşından sonra on yılda yaklaşık %3-8 kas kütlesi kaybeder ve bu kayıp 60 yaşından sonra hızlanır. Düşük kas kütlesi yaşlılarda düşme ve kırıklar, azalmış metabolik hız, insülin direnci ve daha yüksek ölüm riski ile ilişkilidir.',

    improvementTips:
      'Yağsız vücut kütlesini artırmak ve vücut kompozisyonunu iyileştirmek için şu kanıta dayalı stratejilere odaklanın. Direnç antrenmanı yağsız kütle oluşturmak için en etkili yöntemdir. Tüm ana kas gruplarını hedefleyen haftada 2-4 seans yapın ve zaman içinde kademeli olarak ağırlığı artırın. Bileşik egzersizler (squat, deadlift, bench press, kürek) genel yağsız kütle oluşturmak için özellikle etkilidir. Yeterli protein alımı kritiktir; araştırmalar aktif olarak kas oluşturanlar için günlük vücut ağırlığı başına 1.6-2.2 g önermektedir. Proteini öğünlere eşit dağıtın (öğün başına 20-40 g). Yeterli kalori alımını sağlayın, çünkü yağsız kütle oluşturmak yeterli enerji gerektirir. Uyku kalitesine öncelik verin (7-9 saat) ve iyi hidrate kalın. Kreatin monohidrat takviyesini (günlük 3-5 g) düşünebilirsiniz.',

    medicalDisclaimer:
      'Bu Yağsız Vücut Kütlesi hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Kullanılan formüller popülasyon düzeyindeki verilere dayalı tahminler sağlar ve bireysel vücut kompozisyonunuzu doğru şekilde yansıtmayabilir. Etnik köken, yaş, hidrasyon durumu, fitness seviyesi ve tıbbi durumlar gibi faktörler bu tahminlerin doğruluğunu önemli ölçüde etkileyebilir. Sonuçlar, kalifiye sağlık profesyonellerine danışmadan ilaç dozajı, cerrahi planlama veya beslenme müdahaleleri ile ilgili tıbbi kararlar almak için kullanılmamalıdır. Vücut kompozisyonunuz, kas kütleniz veya genel sağlığınız hakkında endişeleriniz varsa, doğrulanmış ölçüm yöntemlerini kullanarak kapsamlı değerlendirmeler yapabilecek bir doktor, diyetisyen veya sertifikalı fitness profesyoneline danışın.',

    references: [
      'Boer P. Sağlıklı insanlarda vücut sıvı hacimlerinin normalleştirilmesi için bir indeks olarak tahmini yağsız vücut kütlesi. Am J Physiol. 1984;247(4 Pt 2):F632-636.',
      'James WPT. Obezite üzerine araştırma: DHSS/MRC grubunun raporu. Her Majesty\'s Stationery Office. 1976.',
      'Hume R. Boy ve kilodan yağsız vücut kütlesinin tahmini. J Clin Pathol. 1966;19(4):389-391.',
      'Gallagher D, Heymsfield SB, ve ark. Sağlıklı vücut yağı yüzdesi aralıkları: vücut kitle indeksine dayalı kılavuzlar geliştirme yaklaşımı. Am J Clin Nutr. 2000;72(3):694-701.',
      'Cruz-Jentoft AJ, ve ark. Sarkopeni: tanım ve teşhis üzerine revize Avrupa konsensüsü. Age Ageing. 2019;48(1):16-31.',
      'Morton RW, ve ark. Sağlıklı yetişkinlerde dirençli egzersiz kaynaklı kas kütlesi ve güç kazanımları üzerinde protein takviyesinin etkisinin sistematik derlemesi. Br J Sports Med. 2018;52(6):376-384.',
    ],

    tips: [
      'Yağsız vücut kütlesi, vücut kompozisyonunu değerlendirmek ve fitness hedefleri belirlemek için toplam kilodan daha bilgilendirici bir metriktir',
      'Sadece toplam kiloya odaklanmak yerine YVK\'nızı zaman içinde takip edin - kas koruyarak yağ kaybetmek ideal yaklaşımdır',
      'Yağsız kütle oluşturmak ve korumak için direnç antrenmanını yeterli proteinle (1.6-2.2 g/kg/gün) birleştirin',
      'Üç formülün ortalaması en güvenilir tahmini verir - hiçbir tek formül mükemmel değildir',
      'Doğru takip için tutarlı koşullarda ölçüm yapın (günün aynı saati, benzer hidrasyon durumu)',
      'Yaşa bağlı kas kaybı (sarkopeni) yaklaşık 30 yaşında başlar - güç antrenmanı bunu her yaşta önlemeye yardımcı olur',
      'Yağsız vücut kütlesi metabolik hızınızı önemli ölçüde etkiler; her kg kas dinlenme halinde günde yaklaşık 13 kalori yakar',
      'YVK\'nız düşük görünüyorsa, yoğun bir egzersiz programına başlamadan önce bir sağlık uzmanına danışın',
    ],

    faqs: [
      {
        question: 'Yağsız vücut kütlesi ile kas kütlesi arasındaki fark nedir?',
        answer:
          'Yağsız vücut kütlesi (YVK) vücudunuzdaki yağ hariç her şeyi içerir: kaslar, kemikler, organlar, cilt, kan ve su. Kas kütlesi YVK\'nın sadece bir bileşenidir. Tipik olarak, iskelet kası sağlıklı yetişkinlerde yağsız vücut kütlesinin yaklaşık %40-50\'sini oluşturur. Bu nedenle terimler bazen birbirinin yerine kullanılsa da, YVK tüm yağsız dokuyu içerdiği için gerçek kas kütlesinden her zaman daha yüksektir.',
      },
      {
        question: 'YVK formül hesaplamaları ne kadar doğrudur?',
        answer:
          'Formüle dayalı YVK hesaplamaları genel popülasyon için makul tahminler sağlar, genellikle DEXA veya hidrostatik tartım ile ölçülen gerçek değerlerin %5-10 aralığındadır. Boer formülü genel olarak en doğru olma eğilimindedir. Ancak, vücut kompozisyonunun uç noktalarında olan bireyler, yüksek kas kütlesine sahip sporcular, yaşlı bireyler ve belirli etnik gruplar için doğruluk azalır.',
      },
      {
        question: 'Neden erkekler ve kadınlar için farklı formüller var?',
        answer:
          'Erkekler ve kadınlar hormonal farklılıklar nedeniyle temelden farklı vücut kompozisyonlarına sahiptir. Erkekler tipik olarak kadınlara (%65-80) kıyasla daha yüksek yağsız vücut kütlesi yüzdelerine (%75-90) sahiptir çünkü testosteron kas gelişimini desteklerken, östrojen üreme işlevleri için temel yağ depolamayı destekler. Farklı formül katsayıları cinsiyetler arasındaki bu biyolojik farklılıkları hesaba katar.',
      },
      {
        question: 'Yağsız vücut kütlemi nasıl artırabilirim?',
        answer:
          'En etkili stratejiler arasında kademeli direnç antrenmanı (tüm kas gruplarını hedefleyen haftada 2-4 kez), yeterli protein alımı (günlük vücut ağırlığı kg başına 1.6-2.2 g), yeterli kalori alımı (250-500 kalori fazlası), kaliteli uyku (7-9 saat) ve uygun hidrasyon yer alır. Squat, deadlift ve bench press gibi bileşik egzersizler en verimlidir. Doğal kas kazanımı optimal koşullarda haftada yaklaşık 0.25-0.5 kg olur.',
      },
      {
        question: 'Yağsız vücut kütlesi yaşla birlikte azalır mı?',
        answer:
          'Evet, yetişkinler tipik olarak 30 yaşından sonra on yılda %3-8 kas kütlesi kaybeder ve bu hız 60 yaşından sonra hızlanır. Sarkopeni olarak adlandırılan bu durum, azalmış güç, hareketlilik, metabolik hız ve artmış düşme riski ile ilişkilidir. Ancak direnç antrenmanı her yaşta yaşa bağlı kas kaybını önemli ölçüde yavaşlatabilir ve kısmen tersine çevirebilir.',
      },
      {
        question: 'Hangi YVK formülüne en çok güvenmeliyim?',
        answer:
          'Boer formülü (1984) doğrulama çalışmalarına göre genel popülasyon için genellikle en doğru kabul edilir. Ancak en iyi yaklaşım, her formülün bireysel önyargılarını düzelttiği ve daha sağlam bir tahmin sağladığı üç formülün (Boer, James ve Hume) ortalamasını kullanmaktır. Sonuçlarınız formüller arasında önemli ölçüde farklılık gösteriyorsa, hassas ölçüm için bir DEXA taraması yaptırmayı düşünün.',
      },
      {
        question: 'Yağsız vücut kütlesi tıpta nasıl kullanılır?',
        answer:
          'Klinik tıpta YVK, uygun ilaç dozajlarının hesaplanması (özellikle yağsız dokuda dağılan ilaçlar için), anestezi gereksinimlerinin belirlenmesi, beslenme durumunun değerlendirilmesi, kanser kaşeksisi ve kronik böbrek hastalığı gibi durumların izlenmesi ve cerrahi müdahalelerin planlanması için kullanılır. Birçok ilaç dozaj protokolü, obez hastalarda aşırı dozlamayı önlemek için toplam vücut ağırlığı yerine yağsız vücut kütlesini kullanır.',
      },
    ],
  },
};
