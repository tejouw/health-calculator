import { CalculatorContent } from '@/types/calculator';

export const waistHeightRatioContent: CalculatorContent = {
  en: {
    whatIs:
      'The waist-to-height ratio (WHtR) is a simple yet powerful anthropometric measurement that compares your waist circumference to your height to assess health risk related to central obesity. Unlike BMI, which only considers total body weight relative to height, WHtR directly evaluates where your body stores fat — specifically around the abdomen. A landmark 2012 systematic review published in Obesity Reviews by Dr. Margaret Ashwell and colleagues, analyzing data from over 300,000 adults across multiple ethnic groups, concluded that WHtR is a significantly better predictor of cardiovascular disease, type 2 diabetes, and metabolic syndrome than BMI. The key insight is elegantly simple: "Keep your waist circumference to less than half your height." This translates to a universal boundary value of 0.5 — a threshold that works remarkably well across men, women, and diverse ethnic groups without requiring gender-specific or ethnicity-specific cutoffs. The simplicity of WHtR is one of its greatest strengths as a public health tool. While BMI can misclassify muscular individuals as overweight or fail to identify metabolically unhealthy normal-weight individuals (sometimes called "thin-outside-fat-inside" or TOFI), WHtR captures central fat accumulation directly. Visceral fat — the deep abdominal fat surrounding internal organs — is the most metabolically dangerous type of body fat, releasing inflammatory molecules that damage blood vessels, impair insulin sensitivity, and increase the risk of heart disease, stroke, and diabetes. WHtR reflects visceral fat accumulation more accurately than BMI, making it a superior screening tool for the conditions that account for the majority of preventable deaths worldwide.',

    howToCalculate:
      'Calculating your waist-to-height ratio requires only two measurements and basic division. First, measure your height accurately. If you know your height from a recent medical visit, you can use that value. Otherwise, stand against a flat wall with your feet together, place a flat object (like a book) on top of your head touching the wall, and measure from the floor to the bottom of the object. For the most accurate waist circumference, measure in the morning before eating. Stand upright and relaxed — do not hold your breath or suck in your stomach. Wrap a flexible measuring tape around your midsection at the narrowest point of your torso, which is typically at or just above your navel. The tape should be snug against your skin but not compressing the tissue, and it should be level all the way around. Record the measurement. Both measurements must use the same unit — either both in centimeters or both in inches. Our calculator handles the conversion automatically. Once you enter your waist circumference and height, the calculator divides your waist by your height to produce your WHtR value. A value below 0.5 generally indicates a healthy ratio, while a value at or above 0.5 suggests increased health risk from central fat accumulation.',

    formulaDetails:
      'The waist-to-height ratio uses the simplest possible formula: WHtR = Waist Circumference / Height. Because both measurements use the same unit, the result is a dimensionless ratio — the same value whether you measure in centimeters or inches. The critical boundary value of 0.5 was established through extensive meta-analysis research. The landmark 2012 Ashwell meta-analysis examined 31 studies involving over 300,000 adults and found that WHtR at the 0.5 boundary demonstrated superior discriminatory power for detecting cardiovascular risk factors compared to BMI and waist circumference alone. A 2010 study by Browning et al. in Nutrition Research Reviews further validated that the 0.5 cutoff identifies metabolic risk across diverse populations with remarkable consistency. The Ashwell Shape Chart, developed from this research, divides WHtR into six zones: under 0.35 (Take Care - Underweight), 0.35-0.42 (Slim), 0.43-0.52 (Healthy), 0.53-0.57 (Overweight), 0.58-0.63 (Very Overweight), and 0.64+ (Morbidly Obese). Unlike BMI categories, these boundaries are gender-neutral — the same thresholds apply to both men and women, because the critical ratio between waist and height that signals metabolic danger is consistent across sexes. This universality is one of WHtR\'s most significant advantages over other anthropometric measures.',

    interpretation:
      'Your WHtR result should be interpreted using the boundary value of 0.5 as the key reference point. If your ratio is below 0.5, your waist circumference is less than half your height, indicating that central fat accumulation is within a range generally associated with lower cardiovascular and metabolic risk. Values between 0.43 and 0.49 represent the optimal healthy range. Values below 0.35 may indicate being underweight, which carries its own health considerations including potential nutrient deficiencies and reduced bone density. If your ratio is at or above 0.5, it signals meaningful central fat accumulation. A ratio between 0.50 and 0.57 indicates increasing risk that warrants attention — lifestyle modifications including increased physical activity and dietary improvements can meaningfully reduce this ratio over time. A ratio above 0.58 indicates significant central obesity with substantially elevated risks for cardiovascular disease, type 2 diabetes, hypertension, and metabolic syndrome. These individuals should consult a healthcare provider for comprehensive metabolic evaluation. Remember that WHtR is a screening tool, not a diagnostic instrument. It works best when tracked over time: measuring monthly and observing the trend provides more valuable health information than any single reading.',

    limitations:
      'While WHtR has significant advantages over BMI for assessing central obesity risk, it has important limitations. Like all anthropometric measures, it relies on accurate measurement technique — inconsistent tape placement or tension can affect results. WHtR cannot distinguish between visceral fat (deep, metabolically dangerous fat around organs) and subcutaneous fat (the less harmful fat under the skin); it captures both. Extremely tall or very short individuals may find their risk slightly overestimated or underestimated, although this effect is smaller than the corresponding limitation in BMI. WHtR does not account for muscle mass — a highly trained athlete with significant core musculature may have a larger waist circumference without corresponding visceral fat. The 0.5 boundary, while remarkably universal, was primarily validated in adult populations and should not be applied to children under 5. For children aged 5-17, some researchers have proposed age-adjusted boundaries, but these are less well-established. Pregnant women, individuals with abdominal hernias or significant abdominal scarring, and those with conditions causing abdominal distension (such as ascites) will obtain unreliable results. WHtR is one metric among many — it should be considered alongside blood pressure, lipid panels, fasting blood glucose, family history, smoking status, and physical activity levels for a complete cardiovascular risk assessment.',

    healthRisks:
      'Central obesity, as measured by elevated WHtR, is associated with a comprehensive range of serious health conditions. The mechanisms are well understood: visceral abdominal fat is metabolically active tissue that functions almost like an endocrine organ, releasing pro-inflammatory cytokines (including TNF-alpha and interleukin-6), adipokines, and free fatty acids that systemically damage vascular endothelium, promote insulin resistance, and create a chronic low-grade inflammatory state throughout the body. Cardiovascular disease is the most extensively documented consequence — individuals with WHtR above 0.5 face significantly increased risks of coronary artery disease, heart attack, stroke, and peripheral artery disease. The 2012 Ashwell meta-analysis found that WHtR was a better discriminator of hypertension, type 2 diabetes, dyslipidemia, and metabolic syndrome than BMI in the majority of studies analyzed. Type 2 diabetes risk rises sharply with increasing central fat: visceral fat directly impairs the liver\'s ability to regulate glucose and reduces peripheral insulin sensitivity. Metabolic syndrome — the dangerous clustering of central obesity, elevated blood sugar, high triglycerides, low HDL cholesterol, and hypertension — is strongly predicted by WHtR values above 0.5. Research has also linked central obesity to increased risks of non-alcoholic fatty liver disease, sleep apnea, certain cancers (particularly colorectal and endometrial), and polycystic ovary syndrome in women. The encouraging reality is that visceral fat is among the most responsive fat deposits to lifestyle intervention — regular aerobic exercise combined with dietary improvements can produce measurable reductions in waist circumference within 8-12 weeks.',

    alternativeMeasures:
      'Several complementary anthropometric measurements can be used alongside WHtR to build a comprehensive health picture. Body Mass Index (BMI) remains the most widely recognized screening tool, calculated as weight in kg divided by height in meters squared. However, BMI cannot distinguish between muscle and fat, does not indicate where fat is distributed, and may misclassify up to 30% of individuals compared to direct body composition assessment. Waist circumference alone is a simple and effective measure of central obesity, with WHO cutoffs of >102 cm (40 inches) for men and >88 cm (35 inches) for women indicating elevated risk — but these gender-specific cutoffs add complexity that WHtR avoids. Waist-to-hip ratio (WHR) compares waist to hip circumference and has been used for decades, but it can mask increases in both waist and hip fat when they change proportionally. Body fat percentage, measured via DEXA, bioelectrical impedance, or skinfold calipers, provides direct composition data but requires specialized equipment. Research consistently positions WHtR as the single best anthropometric predictor of cardiovascular risk — the Ashwell meta-analysis specifically concluded that WHtR was significantly better than BMI for detecting cardiovascular risk factors and was at least as good as waist circumference while being simpler to interpret. For optimal health assessment, combining WHtR with blood-based markers (fasting glucose, lipid panel, HbA1c) provides the most complete picture.',

    demographicDifferences:
      'One of WHtR\'s greatest strengths is its remarkable consistency across demographic groups compared to other anthropometric measures. The 0.5 boundary value has been validated across European, African American, Asian, and Latin American populations with greater consistency than BMI or waist circumference cutoffs. However, some nuances exist. In South Asian populations, metabolic risk may emerge at slightly lower WHtR values (around 0.48-0.49) due to a genetic predisposition toward visceral fat accumulation at lower overall body weights. East Asian populations show similar tendencies. In contrast, some Pacific Islander and African populations may tolerate slightly higher WHtR values before metabolic consequences emerge. Age plays a role: WHtR naturally tends to increase with aging as abdominal fat accumulates and height can decrease slightly due to spinal compression. For adults over 60, some researchers suggest a slightly more lenient boundary of 0.52-0.54, although this remains debated. Gender differences in WHtR are notably smaller than for other metrics — men and women use the same 0.5 boundary — but men tend to cluster slightly higher (median WHtR around 0.50-0.54) while women tend to cluster slightly lower (0.46-0.50) due to different natural fat distribution patterns. During menopause, women\'s WHtR typically increases as declining estrogen shifts fat storage toward the abdomen. Children and adolescents require different interpretation frameworks — WHtR boundary values of 0.5 remain broadly applicable but with less robust validation in pediatric populations.',

    medicalDisclaimer:
      'This waist-to-height ratio calculator is provided for educational and general informational purposes only and must not be used as a substitute for professional medical advice, diagnosis, or treatment. While WHtR is a well-validated screening tool supported by substantial published research, it is one metric among many and cannot capture the full complexity of individual health risk. A favorable WHtR does not guarantee absence of cardiovascular or metabolic disease — factors including family history, smoking, physical inactivity, diet quality, blood pressure, cholesterol, and blood sugar all contribute independently to disease risk. Similarly, an elevated WHtR does not constitute a diagnosis — it is a risk indicator that warrants further evaluation by a qualified healthcare professional. This tool is not intended for use by pregnant women, children under 5, individuals with eating disorders, or those with conditions causing abdominal distension. Always consult your physician or a qualified healthcare provider for personalized health guidance. If you believe you are experiencing a medical emergency, contact your local emergency services immediately.',

    references: [
      'Ashwell M, Gunn P, Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obesity Reviews. 2012;13(3):275-286.',
      'Browning LM, Hsieh SD, Ashwell M. A systematic review of waist-to-height ratio as a screening tool for the prediction of cardiovascular disease and diabetes: 0.5 could be a suitable global boundary value. Nutrition Research Reviews. 2010;23(2):247-269.',
      'Ashwell M, Hsieh SD. Six reasons why the waist-to-height ratio is a rapid and effective global indicator for health risks of obesity and how its use could simplify the international public health message on obesity. International Journal of Food Sciences and Nutrition. 2005;56(5):303-307.',
      'World Health Organization. Waist circumference and waist-hip ratio: report of a WHO expert consultation. Geneva: WHO; 2008.',
      'Lee CM, Huxley RR, Wildman RP, Woodward M. Indices of abdominal obesity are better discriminators of cardiovascular risk factors than BMI: a meta-analysis. Journal of Clinical Epidemiology. 2008;61(7):646-653.',
      'Savva SC, Lamnisos D, Kafatos AG. Predicting cardiometabolic risk: waist-to-height ratio or BMI. A meta-analysis. Diabetes, Metabolic Syndrome and Obesity: Targets and Therapy. 2013;6:403-419.',
      'Swainson MG, Batterham AM, Tsakirides C, Atkinson ZH, Hopkins ND. Prediction of whole-body fat percentage and visceral adipose tissue mass from five anthropometric variables. PLoS One. 2017;12(5):e0177175.',
      'Garnett SP, Baur LA, Cowell CT. Waist-to-height ratio: a simple option for determining excess central adiposity in young people. International Journal of Obesity. 2008;32:1028-1030.',
    ],

    tips: [
      'The golden rule is simple: keep your waist circumference to less than half your height. This single message is easy to remember and applies to everyone.',
      'Measure your waist at the narrowest point of your torso, typically at or just above the navel, while standing relaxed and breathing normally.',
      'Track your WHtR monthly rather than daily. Short-term fluctuations from hydration, meals, and bloating can shift measurements.',
      'Aerobic exercise (walking, running, cycling, swimming) is the most effective exercise type for reducing visceral abdominal fat.',
      'Dietary fiber intake is strongly inversely correlated with abdominal fat. Aim for 25-35 grams of fiber daily from vegetables, fruits, whole grains, and legumes.',
      'Chronic stress elevates cortisol, which specifically promotes visceral fat storage. Stress management through sleep, meditation, or hobbies directly supports waist reduction.',
      'Sleep quality matters: studies show that sleeping less than 6 hours per night is associated with increased visceral fat accumulation regardless of diet and exercise.',
      'Alcohol consumption, particularly beer and spirits, is strongly linked to abdominal fat accumulation. Reducing alcohol intake can meaningfully improve WHtR.',
      'Unlike subcutaneous fat, visceral fat responds relatively quickly to lifestyle changes. Consistent effort over 8-12 weeks typically produces measurable waist circumference reduction.',
      'WHtR is more accurate than BMI for muscular individuals. If you exercise regularly and have significant muscle mass, WHtR provides a more reliable health assessment.',
    ],

    faqs: [
      {
        question: 'Why is WHtR considered better than BMI?',
        answer:
          'A 2012 meta-analysis of over 300,000 adults found that WHtR was significantly better than BMI at predicting cardiovascular risk factors including hypertension, type 2 diabetes, and metabolic syndrome. BMI only reflects total body weight relative to height and cannot distinguish between muscle and fat or indicate where fat is stored. WHtR directly measures central fat accumulation, which is the primary driver of cardiometabolic disease risk.',
      },
      {
        question: 'What does the 0.5 boundary value mean?',
        answer:
          'The 0.5 boundary translates to a simple health message: your waist should be less than half your height. If you are 170 cm tall, your waist should be under 85 cm. This threshold has been validated across multiple ethnicities and applies equally to men and women, making it one of the most universal health screening cutoffs available.',
      },
      {
        question: 'Does WHtR work for both men and women?',
        answer:
          'Yes. Unlike BMI and waist circumference, which require gender-specific interpretation cutoffs, WHtR uses the same 0.5 boundary for both men and women. Research has confirmed this boundary is effective across sexes, making WHtR simpler and more universally applicable as a screening tool.',
      },
      {
        question: 'Can I lower my WHtR?',
        answer:
          'Absolutely. Visceral abdominal fat is among the most responsive fat deposits to lifestyle changes. A combination of regular aerobic exercise (150+ minutes per week), a fiber-rich diet emphasizing whole foods, adequate sleep (7-9 hours), stress management, and moderate alcohol consumption can produce measurable waist circumference reduction within 8-12 weeks.',
      },
      {
        question: 'Is WHtR accurate for athletes and muscular people?',
        answer:
          'WHtR is more reliable for muscular individuals than BMI, which frequently misclassifies athletes as overweight. However, individuals with significant core musculature may have slightly elevated waist measurements that do not reflect visceral fat. For serious athletes, combining WHtR with body fat percentage measurement provides the most accurate picture.',
      },
      {
        question: 'Does WHtR work for children?',
        answer:
          'The 0.5 boundary has been found to be broadly applicable for children aged 5-17, though with less robust validation than in adult populations. Research by Garnett et al. (2008) supports using WHtR in pediatric screening for central obesity. For children under 5, standard growth charts and pediatric-specific assessments are more appropriate.',
      },
      {
        question: 'How often should I measure my WHtR?',
        answer:
          'Monthly measurements under consistent conditions (same time of day, same level of clothing, before eating) provide the most useful tracking data. Avoid daily measurements, as hydration, meals, and bloating can cause short-term fluctuations that do not reflect meaningful changes in body composition.',
      },
      {
        question: 'What is the ideal WHtR value?',
        answer:
          'The optimal range is between 0.43 and 0.50. Values in this range are associated with the lowest cardiovascular and metabolic risk across populations. A WHtR around 0.46 represents the center of the healthy zone. Values below 0.35 may suggest being underweight, which has its own health implications.',
      },
    ],

    categories: [
      {
        range: '< 0.35',
        label: 'Take Care (Underweight)',
        description: 'WHtR below 0.35 may indicate being underweight. Consider consulting a healthcare provider about nutritional status.',
        color: '#3B82F6',
      },
      {
        range: '0.35 - 0.42',
        label: 'Slim',
        description: 'Slim body composition with no significant central obesity risk. Maintaining a healthy lifestyle is recommended.',
        color: '#06B6D4',
      },
      {
        range: '0.43 - 0.52',
        label: 'Healthy',
        description: 'Optimal range with the lowest cardiovascular and metabolic risk. Your waist is appropriately proportioned to your height.',
        color: '#10B981',
      },
      {
        range: '0.53 - 0.57',
        label: 'Overweight',
        description: 'Indicates excess central fat accumulation. Lifestyle modifications are recommended to reduce health risks.',
        color: '#F59E0B',
      },
      {
        range: '0.58 - 0.63',
        label: 'Very Overweight',
        description: 'Significant central obesity with elevated risks for cardiovascular disease, diabetes, and metabolic syndrome.',
        color: '#EF4444',
      },
      {
        range: '0.64+',
        label: 'Morbidly Obese',
        description: 'Very high health risk. Medical consultation is strongly recommended for comprehensive metabolic evaluation.',
        color: '#991B1B',
      },
    ],
  },

  tr: {
    whatIs:
      'Bel-boy oranı (BBO), bel çevrenizi boyunuzla karşılaştırarak merkezi obeziteyle ilişkili sağlık riskini değerlendiren basit ama güçlü bir antropometrik ölçümdür. Yalnızca toplam vücut ağırlığını boya göre değerlendiren VKİ\'nin aksine, BBO doğrudan vücudunuzun yağı nerede depoladığını — özellikle karın çevresinde — değerlendirmektedir. 2012 yılında Dr. Margaret Ashwell ve arkadaşları tarafından Obesity Reviews dergisinde yayımlanan, birden fazla etnik grupta 300.000\'den fazla yetişkinin verilerini analiz eden dönemlerin sistematik incelemesi, BBO\'nun kardiyovasküler hastalık, tip 2 diyabet ve metabolik sendrom için VKİ\'den önemli ölçüde daha iyi bir ön gösterge olduğunun sonucuna varmıştır. Temel mesaj zarif biçimde basittir: "Bel çevrenizi boyunuzun yarısından az tutun." Bu, evrensel bir sınır değeri olan 0.5\'e karşılık gelir — erkeklerde, kadınlarda ve farklı etnik gruplarda cinsiyete veya etnik kökene özgü kesme değerleri gerektirmeden gayet iyi çalışan bir eşik değer. BBO\'nun basitliği, bir halk sağlığı aracı olarak en büyük güçlerinden biridir. VKİ kaslı bireyleri fazla kilolu olarak yanlış sınıflandırabilir veya metabolik olarak sağlıksız normal kilolu bireyleri (bazen "dışarıdan ince-içeriden yağlı" veya TOFI olarak adlandırılır) tanımlayamazken, BBO merkezi yağ birikimini doğrudan yakalamaktadır. Visseral yağ — iç organları çevreleyen derin karın yağı — metabolik olarak en tehlikeli vücut yağı türüdür; damar duvarını hasar veren, insulin hassasiyetini bozan ve kalp hastalığı, inme ve diyabet riskini artıran iltihaplanma molekülleri salmaktadır. BBO, visseral yağ birikimini VKİ\'den daha doğru yansıması ile, önlenebilir ölümlerin çoğundan sorumlu durumlar için üstün bir tarama aracı konumundadır.',

    howToCalculate:
      'Bel-boy oranınızı hesaplamak için yalnızca iki ölçüm ve temel bir bölme işlemi gerekmektedir. Önce boyunuzu doğru ölçün. Yakın zamandaki bir doktor ziyaretinden boyunuzu biliyorsanız o değeri kullanabilirsiniz. Aksi takdirde, ayaklarınız bir arada düz bir duvara yaslanarak durun, başınızın üstüne duvara temas eden düz bir nesne (kitap gibi) yerleştirin ve yerden nesnenin alt kenarını ölçün. En doğru bel çevresi için sabah yemek yemeden ölçüm yapın. Dik ve rahat durun — nefesinizi tutmayın veya karınızı içeri çekmeyin. Esnek bir mezurayı gövdenizin en dar noktasında, genellikle göbek deliğiniz hizasında veya hemen üstünde bel çevrenize dolayın. Mezura cildınize yakın ancak dokuyu sıkıştırmamalı ve tamamen yatay olmalıdır. Ölçümü kaydedin. Her iki ölçüm de aynı birimi kullanmalıdır — ya her ikisi de santimetre ya da her ikisi de inç. Hesaplayıcımız dönüşümü otomatik olarak yapar. Bel çevrenizi ve boyunuzu girdikten sonra hesaplayıcı belinizi boyunuza bölerek BBO değerinizi üretir. 0.5\'in altındaki değer sağlıklı bir oranı gösterirken, 0.5 ve üzeri bir değer merkezi yağ birikiminden kaynaklanan artan sağlık riskine işaret eder.',

    formulaDetails:
      'Bel-boy oranı mümkün olan en basit formülü kullanır: BBO = Bel Çevresi / Boy. Her iki ölçüm de aynı birimi kullandığı için, sonuç birimsiz bir oran olarak ortaya çıkar — santimetre veya inç ile ölçseniz de aynı değer elde edilir. 0.5 kritik sınır değeri, kapsamlı meta-analiz araştırmalarıyla oluşturulmuştur. 2012 Ashwell meta-analizi 31 çalışmayı ve 300.000\'den fazla yetişkini inceledi ve 0.5 sınırında BBO\'nun kardiyovasküler risk faktörlerini tespit etmede VKİ ve tek başına bel çevresine göre üstün ayırt edici güce sahip olduğunu göstermiştir. 2010 yılında Browning ve arkadaşlarının Nutrition Research Reviews\'da yayımladığı bir çalışma, 0.5 kesme değerinin farklı populasyonlarda metabolik riski dikkat çekici bir tutarlılıkla tanıladığını doğrulamıştır. Ashwell Şekil Tablosu BBO\'yu altı bölgeye ayırır: 0.35 altı (Dikkat - Düşük Kilolu), 0.35-0.42 (İnce), 0.43-0.52 (Sağlıklı), 0.53-0.57 (Fazla Kilolu), 0.58-0.63 (Çok Fazla Kilolu) ve 0.64+ (Morbid Obez). VKİ kategorilerinin aksine, bu sınırlar cinsiyetten bağımsızdır — aynı eşikler hem erkekler hem de kadınlar için geçerlidir; çünkü metabolik tehlikeyi işaret eden bel-boy arasındaki kritik oran cinsiyetler arasında tutarlıdır.',

    interpretation:
      'BBO sonucunuz, 0.5 sınır değerini temel referans noktası olarak kullanılarak yorumlanmalıdır. Oranınız 0.5\'in altındaysa, bel çevreniz boyunuzun yarısından az demektir; bu da merkezi yağ birikiminin genellikle düşük kardiyovasküler ve metabolik riskle ilişkilendirilen bir aralıkta olduğunu gösterir. 0.43 ile 0.49 arasındaki değerler optimal sağlıklı aralığı temsil eder. 0.35\'in altındaki değerler düşük kilolu olmayı işaret edebilir ve bu da besin eksiklikleri ve azalmış kemik yoğunluğu gibi kendi sağlık kaygılarını beraberinde getirir. Oranınız 0.5 veya üzeri ise, anlamlı merkezi yağ birikiminin sinyalini verir. 0.50 ile 0.57 arasındaki oran ilgi gerektiren artan riski gösterir — fiziksel aktivite artışı ve beslenme iyileştirmelerini içeren yaşam tarzı değişiklikleri bu oranı zamanla anlamlı ölçüde düşürebilir. 0.58\'in üzerindeki bir oran, kardiyovasküler hastalık, tip 2 diyabet, hipertansiyon ve metabolik sendrom için önemli ölçüde yükseltilmiş risklerle birlikte belirgin merkezi obeziteyi gösterir. Unutmayın ki BBO bir tarama aracıdır, tanı aracı değildir. Zamanla takip edildiğinde en iyi sonucu verir: aylık ölçümler yaparak eğilimi gözlemlemek, herhangi bir tekil okumadam daha değerli sağlık bilgisi sağlar.',

    limitations:
      'BBO, merkezi obezite riskini değerlendirmede VKİ\'ye göre önemli avantajlara sahip olsa da bazı önemli sınırlamaları vardır. Tüm antropometrik ölçümler gibi, doğru ölçüm tekniğine bağlıdır — tutarsız mezura yerleştirilmesi veya gerilimi sonuçları etkileyebilir. BBO, visseral yağ (organlar çevresindeki derin, metabolik olarak tehlikeli yağ) ile subkutan yağ (deri altındaki daha az zararlı yağ) arasında ayrım yapamaz; her ikisini de bir arada ölçer. Çok uzun veya çok kısa bireylerin riski hafifçe fazla veya az tahmin edilebilir, ancak bu etki VKİ\'deki karşılık gelen sınırlamadan daha küçüktür. BBO kas kütlesini hesaba katmaz — önemli kor kas yapısına sahip iyi eğitimli bir sporcu, karşılık gelen visseral yağ olmadan daha büyük bir bel çevresine sahip olabilir. 0.5 sınırı dikkat çekici biçimde evrensel olsa da, öncelikle yetişkin populasyonlarında doğrulanmıştır ve 5 yaş altı çocuklara uygulanmamalıdır. Hamile kadınlar, karın fıtığı veya önemli karın izleri olan bireyler ve karın şişkinliğine neden olan durumlar (assit gibi) olan kişiler güvenilmez sonuçlar elde edecektir.',

    healthRisks:
      'Yüksek BBO ile ölçülen merkezi obezite, ciddi sağlık durumlarının geniş bir yelpazesi ile ilişkilidir. Mekanizmalar iyi anlaşılmıştır: visseral karın yağı, neredeyse bir endokrin organ gibi işleyen metabolik olarak aktif bir dokudur; pro-inflamatuar sitokinler (TNF-alfa ve interlökin-6 dahil), adipokinler ve serbest yağ asitleri salar; bunlar damar endotelini sistemik olarak hasar verir, insulin direncini teşvik eder ve vücut genelinde kronik düşük düzeyli bir iltihaplanma durumu oluşturur. Kardiyovasküler hastalık en kapsamlı şekilde belgelenmiş sonuçtur — BBO değeri 0.5 üzerinde olan bireyler koroner arter hastalığı, kalp krizi, inme ve periferik arter hastalığı için önemli ölçüde artan risklerle karşı karşıya kalır. Tip 2 diyabet riski artan merkezi yağlanma ile hızla yükselir: visseral yağ doğrudan karaciğerin glükozu düzenleme yeteneğini bozar ve periferik insulin hassasiyetini azaltır. Metabolik sendrom — merkezi obezite, yüksek kan şekeri, yüksek trigliseritler, düşük HDL kolesterol ve hipertansiyonun tehlikeli kümeleşmesi — BBO değerleri 0.5\'in üzerinde olanlarda güçlü şekilde ön görülür. Cesaret verici gerçeklik şudur ki visseral yağ, yaşam tarzı müdahalesine en duyarlı yağ birikimleri arasındadır — düzgün aerobik egzersiz ve beslenme iyileştirmesi 8-12 hafta içinde ölçülebilir bel çevresi azalmaları üretebilir.',

    alternativeMeasures:
      'BBO ile birlikte kapsamlı bir sağlık resmi oluşturmak için birçok tamamlayıcı antropometrik ölçüm kullanılabilir. Vücut Kitle İndeksi (VKİ), ağırlığın kilogram cinsinden boyun metre karesine bölünmesiyle hesaplanan en yaygın tarama aracı olmaya devam etmektedir. Ancak VKİ, kas ile yağ arasında ayrım yapamaz, yağın nerede dağıtıldığını göstermez ve doğrudan vücut kompozisyonu değerlendirmesine kıyasla bireylerin %30\'una kadar yanlış sınıflandırabilir. Tek başına bel çevresi, DSO kesme değerleriyle (erkekler için >102 cm, kadınlar için >88 cm) merkezi obezite için basit ve etkili bir ölçümdür — ancak bu cinsiyete özgü kesme değerler BBO\'nun önlediği bir karmaşıklık ekler. Bel-kalça oranı (BKO) bel ile kalça çevresini karşılaştırır ancak her ikisi orantılı olarak değiştiğinde artışları maskeleyebilir. Vücut yağ yüzdesi, DEXA, biyoelektrik empedans veya deri katlama ölçümleri ile ölçülür; doğrudan kompozisyon verileri sağlar ancak uzman ekipman gerektirir. Araştırmalar tutarlı şekilde BBO\'yu kardiyovasküler riskin en iyi tekil antropometrik ön göricisi olarak konumlandırır.',

    demographicDifferences:
      'BBO\'nun en büyük güçlerinden biri, diğer antropometrik ölçülere kıyasla demografik gruplar arasında dikkat çekici tutarlılığıdır. 0.5 sınır değeri Avrupa, Afro-Amerikan, Asya ve Latin Amerika populasyonlarında VKİ veya bel çevresi kesme değerlerinden daha büyük bir tutarlılıkla doğrulanmıştır. Ancak bazı nuanslar vardır. Güney Asya populasyonlarında, genel olarak daha düşük vücut ağırlıklarında visseral yağ birikimine genetik yatkınlık nedeniyle metabolik risk biraz daha düşük BBO değerlerinde (yaklaşık 0.48-0.49) ortaya çıkabilir. Yaş bir rol oynar: BBO doğal olarak yaşlanmayla birlikte karın yağı birikimi ve hafif boy kısalması nedeniyle artma eğilimindedir. Cinsiyet farklılıkları diğer metriklere göre BBO\'da belirgin şekilde daha küçüktür — erkekler ve kadınlar aynı 0.5 sınırını kullanır. Menopoz sırasında, kadınların BBO değerleri genellikle azalan estrojenin yağ depolamayı karına doğru kaydırmasıyla artar.',

    medicalDisclaimer:
      'Bu bel-boy oranı hesaplayıcısı yalnızca eğitim ve genel bilgilendirme amacıyla sunulmaktadır ve profesyonel tıbbi danışma, tanı veya tedavinin yerine geçirilmemelidir. BBO kapsamlı yayımlanmış araştırmalarla desteklenen iyi doğrulanmış bir tarama aracı olsa da, birçok metrik arasında yalnızca bir tanesidir ve bireysel sağlık riskinin tüm karmaşıklığını yakalayamaz. Olumlu bir BBO, kardiyovasküler veya metabolik hastalık yokluğunu garanti etmez — aile geçmişi, sigara, fiziksel hareketsizlik, beslenme kalitesi, kan basıncı, kolesterol ve kan şekeri hastalık riskine bağımsız olarak katkı yapar. Benzer şekilde, yüksek bir BBO tanı oluşturmaz — nitelikli bir sağlık uzmanının daha ileri değerlendirmesini gerektiren bir risk göstergesidir. Bu araç hamile kadınlar, 5 yaş altı çocuklar, yeme bozuklukları olan bireyler veya karın şişkinliğine neden olan durumlar için kullanılmak üzere tasarlanmamıştır.',

    references: [
      'Ashwell M, Gunn P, Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obesity Reviews. 2012;13(3):275-286.',
      'Browning LM, Hsieh SD, Ashwell M. A systematic review of waist-to-height ratio as a screening tool for the prediction of cardiovascular disease and diabetes: 0.5 could be a suitable global boundary value. Nutrition Research Reviews. 2010;23(2):247-269.',
      'Ashwell M, Hsieh SD. Six reasons why the waist-to-height ratio is a rapid and effective global indicator for health risks of obesity. International Journal of Food Sciences and Nutrition. 2005;56(5):303-307.',
      'Dünya Sağlık Örgütü. Bel çevresi ve bel-kalça oranı: DSO uzman danışmanlık raporu. Cenevre: DSO; 2008.',
      'Lee CM, Huxley RR, Wildman RP, Woodward M. Indices of abdominal obesity are better discriminators of cardiovascular risk factors than BMI: a meta-analysis. Journal of Clinical Epidemiology. 2008;61(7):646-653.',
      'Savva SC, Lamnisos D, Kafatos AG. Predicting cardiometabolic risk: waist-to-height ratio or BMI. A meta-analysis. Diabetes, Metabolic Syndrome and Obesity. 2013;6:403-419.',
      'Swainson MG, Batterham AM, Tsakirides C, et al. Prediction of whole-body fat percentage and visceral adipose tissue mass from five anthropometric variables. PLoS One. 2017;12(5):e0177175.',
      'Garnett SP, Baur LA, Cowell CT. Waist-to-height ratio: a simple option for determining excess central adiposity in young people. International Journal of Obesity. 2008;32:1028-1030.',
    ],

    tips: [
      'Altın kural basittir: bel çevrenizi boyunuzun yarısından az tutun. Bu tek mesaj hatırlaması kolay ve herkes için geçerlidir.',
      'Belinizi gövdenizin en dar noktasında, genellikle göbek deliğiniz hizasında veya hemen üstünde, rahat durarak ve normal nefes alarak ölçün.',
      'BBO\'nuzu günlük değil, aylık olarak takip edin. Hidrasyon, öğünler ve şişkinlikten kaynaklanan kısa süreli dalgalanmalar ölçümleri kaydırabilir.',
      'Aerobik egzersiz (yürüme, koşma, bisiklet, yüzme) visseral karın yağını azaltmada en etkili egzersiz türüdür.',
      'Diyet lifi alımı, karın yağı ile güçlü bir ters ilişkiye sahiptir. Sebze, meyve, tam tahıllar ve baklagiller\'den günlük 25-35 gram lif hedefleyin.',
      'Kronik stres, özellikle visseral yağ depolamasını teşvik eden kortizolu yükseltir. Uyku, meditasyon veya hobiler yoluyla stres yönetimi doğrudan bel azaltmayı destekler.',
      'Uyku kalitesi önemlidir: çalışmalar, gece 6 saatten az uyumanın, diyet ve egzersizden bağımsız olarak artan visseral yağ birikimi ile ilişkili olduğunu göstermektedir.',
      'Alkol tüketimi, özellikle bira ve sert içkiler, karın yağı birikimi ile güçlü şekilde ilişkilidir. Alkol alımını azaltmak BBO\'nuzu anlamlı ölçüde iyileştirebilir.',
      'Subkutan yağın aksine, visseral yağ yaşam tarzı değişikliklerine nispeten hızlı yanıt verir. 8-12 haftalık tutarlı çaba genellikle ölçülebilir bel çevresi azalması üretir.',
      'BBO, kaslı bireyler için VKİ\'den daha doğrudur. Düzenli egzersiz yapıyor ve önemli kas kütleniz varsa, BBO daha güvenilir bir sağlık değerlendirmesi sağlar.',
    ],

    faqs: [
      {
        question: 'BBO neden VKİ\'den daha iyi kabul edilir?',
        answer:
          '2012 yılında 300.000\'den fazla yetişkinin meta-analizi, BBO\'nun hipertansiyon, tip 2 diyabet ve metabolik sendrom dahil kardiyovasküler risk faktörlerini tahmin etmede VKİ\'den önemli ölçüde daha iyi olduğunu ortaya koymuştur. VKİ yalnızca toplam vücut ağırlığını boya göre yansıtır; kas ile yağ arasında ayrım yapamaz veya yağın nerede depolanğını gösteremez. BBO, kardiyometabolik hastalık riskinin birincil itici gücü olan merkezi yağ birikimini doğrudan ölçer.',
      },
      {
        question: '0.5 sınır değeri ne anlama gelir?',
        answer:
          '0.5 sınırı basit bir sağlık mesajına karşılık gelir: beliniz boyunuzun yarısından az olmalıdır. 170 cm boyundaysanız, bel çevreniz 85 cm\'nin altında olmalıdır. Bu eşik birden fazla etnik grupta doğrulanmıştır ve hem erkekler hem de kadınlar için eşit şekilde geçerlidir.',
      },
      {
        question: 'BBO hem erkekler hem de kadınlar için geçerli mi?',
        answer:
          'Evet. Cinsiyete özgü yorum kesme değerleri gerektiren VKİ ve bel çevresinin aksine, BBO hem erkekler hem de kadınlar için aynı 0.5 sınırını kullanır. Araştırmalar bu sınırın cinsiyetler arasında etkili olduğunu doğrulamıştır, bu da BBO\'yu daha basit ve evrensel olarak uygulanabilir bir tarama aracı yapar.',
      },
      {
        question: 'BBO\'mu düşürebilir miyim?',
        answer:
          'Kesinlikle. Visseral karın yağı, yaşam tarzı değişikliklerine en duyarlı yağ birikimleri arasındadır. Düzenli aerobik egzersiz (haftada 150+ dakika), tam gıdalara vurgu yapan liften zengin bir diyet, yeterli uyku (7-9 saat), stres yönetimi ve ölçülü alkol tüketiminin kombinasyonu 8-12 hafta içinde ölçülebilir bel çevresi azalması üretebilir.',
      },
      {
        question: 'BBO sporcular ve kaslı kişiler için doğru mudur?',
        answer:
          'BBO, kaslı bireyleri sıklıkla fazla kilolu olarak yanlış sınıflandıran VKİ\'den daha güvenilirdir. Ancak önemli kor kas yapısına sahip bireyler, visseral yağı yansıtmayan hafifçe yükseltilmiş bel ölçümlerine sahip olabilir. Ciddi sporcular için BBO\'yu vücut yağ yüzdesi ölçümü ile birleştirmek en doğru resmi sağlar.',
      },
      {
        question: 'BBO çocuklar için geçerli mi?',
        answer:
          '0.5 sınırının 5-17 yaş arası çocuklar için geniş ölçüde uygulanabilir olduğu bulunmuştur, ancak yetişkin populasyonlarındakinden daha az sağlam doğrulama ile. Garnett ve arkadaşlarının (2008) araştırması, pediatrik merkezi obezite taramasında BBO kullanımını desteklemektedir. 5 yaş altı çocuklar için standart büyüme grafikleri daha uygundur.',
      },
      {
        question: 'BBO\'mu ne sıklıkta ölçmeliyim?',
        answer:
          'Tutarlı koşullar altında (günün aynı saati, aynı düzey kiyafet, yemek yemeden önce) aylık ölçümler en faydalı takip verilerini sağlar. Günlük ölçümlerden kaçının, çünkü hidrasyon, öğünler ve şişkinlik vücut kompozisyonundaki anlamlı değişiklikleri yansıtmayan kısa vadeli dalgalanmalara neden olabilir.',
      },
      {
        question: 'İdeal BBO değeri nedir?',
        answer:
          'Optimal aralık 0.43 ile 0.50 arasındadır. Bu aralıktaki değerler, populasyonlar arasında en düşük kardiyovasküler ve metabolik riskle ilişkilidir. Yaklaşık 0.46 BBO sağlıklı bölgenin merkezini temsil eder. 0.35\'in altındaki değerler düşük kilolu olmayı işaret edebilir ve bunun kendi sağlık etkileri vardır.',
      },
    ],

    categories: [
      {
        range: '< 0.35',
        label: 'Dikkat (Düşük Kilolu)',
        description: '0.35\'in altındaki BBO düşük kilolu olmayı işaret edebilir. Beslenme durumunuz hakkında bir sağlık uzmanına danışın.',
        color: '#3B82F6',
      },
      {
        range: '0.35 - 0.42',
        label: 'İnce',
        description: 'Merkezi obezite riski olmayan ince vücut kompozisyonu. Sağlıklı yaşam tarzının sürdürülmesi önerilir.',
        color: '#06B6D4',
      },
      {
        range: '0.43 - 0.52',
        label: 'Sağlıklı',
        description: 'En düşük kardiyovasküler ve metabolik riskle optimal aralık. Beliniz boyunuza uygun şekilde orantılıdır.',
        color: '#10B981',
      },
      {
        range: '0.53 - 0.57',
        label: 'Fazla Kilolu',
        description: 'Aşırı merkezi yağ birikimini gösterir. Sağlık risklerini azaltmak için yaşam tarzı değişiklikleri önerilir.',
        color: '#F59E0B',
      },
      {
        range: '0.58 - 0.63',
        label: 'Çok Fazla Kilolu',
        description: 'Kardiyovasküler hastalık, diyabet ve metabolik sendrom için yükseltilmiş risklerle birlikte belirgin merkezi obezite.',
        color: '#EF4444',
      },
      {
        range: '0.64+',
        label: 'Morbid Obez',
        description: 'Çok yüksek sağlık riski. Kapsamlı metabolik değerlendirme için tıbbi danışmanlık kesinlikle önerilir.',
        color: '#991B1B',
      },
    ],
  },
};
