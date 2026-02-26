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
      'Bel-boy orani (BBO), bel cevrenizi boyunuzla karsilastirarak merkezi obeziteyle iliskili saglik riskini degerlendiren basit ama guclu bir antropometrik olcumdur. Yalnizca toplam vucut agirligini boya gore degerlendiren VKI\'nin aksine, BBO dogrudan vucudunuzun yagi nerede depoladigini — ozellikle karin cevresinde — degerlendirmektedir. 2012 yilinda Dr. Margaret Ashwell ve arkadaslari tarafindan Obesity Reviews dergisinde yayimlanan, birden fazla etnik grupta 300.000\'den fazla yetiskinin verilerini analiz eden donemlerin sistematik incelemesi, BBO\'nun kardiyovaskuler hastalik, tip 2 diyabet ve metabolik sendrom icin VKI\'den onemli olcude daha iyi bir on gostege oldugunun sonucuna varmistir. Temel mesaj zarif bicimde basittir: "Bel cevrenizi boyunuzun yarisindan az tutun." Bu, evrensel bir sinir degeri olan 0.5\'e karsilik gelir — erkeklerde, kadinlarda ve farkli etnik gruplarda cinsiyete veya etnik kokenine ozgu kesme degerleri gerektirmeden gayet iyi calisan bir esik deger. BBO\'nun basitligi, bir halk sagligi araci olarak en buyuk guclerinden biridir. VKI kasli bireyleri fazla kilolu olarak yanlis siniflandirabilir veya metabolik olarak sagliksiz normal kilolu bireyleri (bazen "disaridan ince-iceriden yagli" veya TOFI olarak adlandirilir) tanimlayamazken, BBO merkezi yag birikimini dogrudan yakalamaktadir. Visseral yag — ic organlari cevreleyen derin karin yagi — metabolik olarak en tehlikeli vucut yagi turudur; damar duvarini hasar veren, insulin hassasiyetini bozan ve kalp hastaligi, inme ve diyabet riskini artiran iltihaplanma molekulleri salmaktadir. BBO, visseral yag birikimini VKI\'den daha dogru yansimasiyla, onlenebilir olumlerin cogunundan sorumlu durumlar icin ustun bir tarama araci konumundadir.',

    howToCalculate:
      'Bel-boy oraninizi hesaplamak icin yalnizca iki olcum ve temel bir bolme islemi gerekmektedir. Once boyunuzu dogru olcun. Yakin zamandaki bir doktor ziyaretinden boyunuzu biliyorsaniz o degeri kullanabilirsiniz. Aksi takdirde, ayaklariniz bir arada duz bir duvara yaslanarak durun, basinizin ustune duvara temas eden duz bir nesne (kitap gibi) yerlestirin ve yerden nesnenin alt kenarini olcun. En dogru bel cevresi icin sabah yemek yemeden olcum yapin. Dik ve rahat durun — nefesinizi tutmayin veya karninizi iceri cekmeyin. Esnek bir mezurayi govdenizin en dar noktasinda, genellikle gobek deliginiz hizasinda veya hemen ustunde bel cevrenize dolatin. Mezura cildinize yakin ancak dokuyu sikistirmamali ve tamamen yatay olmalidir. Olcumu kaydedin. Her iki olcum de ayni birimi kullanmalidir — ya her ikisi de santimetre ya da her ikisi de inc. Hesaplayicimiz donusumu otomatik olarak yapar. Bel cevrenizi ve boyunuzu girdikten sonra hesaplayici belinizi boyunuza bolerek BBO degerinizi uretir. 0.5\'in altindaki deger saglikli bir orani gosterirken, 0.5 ve uzeri bir deger merkezi yag birikiminden kaynaklanan artan saglik riskine isaret eder.',

    formulaDetails:
      'Bel-boy orani mumkun olan en basit formulu kullanir: BBO = Bel Cevresi / Boy. Her iki olcum de ayni birimi kullandigi icin, sonuc birimsiz bir oran olarak ortaya cikar — santimetre veya inc ile olcseniz de ayni deger elde edilir. 0.5 kritik sinir degeri, kapsamli meta-analiz arastirmalariyla olusturulmustur. 2012 Ashwell meta-analizi 31 calismayi ve 300.000\'den fazla yetiskini inceledi ve 0.5 sinirinda BBO\'nun kardiyovaskuler risk faktorlerini tespit etmede VKI ve tek basina bel cevresine gore ustun ayirt edici guce sahip oldugunu gostermistir. 2010 yilinda Browning ve arkadaslarinin Nutrition Research Reviews\'da yayimladigi bir calisma, 0.5 kesme degerinin farkli populasyonlarda metabolik riski dikkat cekici bir tutarlilikla taniladigini dogrulamistir. Ashwell Sekil Tablosu BBO\'yu alti bolgeye ayirir: 0.35 alti (Dikkat - Dusuk Kilolu), 0.35-0.42 (Ince), 0.43-0.52 (Saglikli), 0.53-0.57 (Fazla Kilolu), 0.58-0.63 (Cok Fazla Kilolu) ve 0.64+ (Morbid Obez). VKI kategorilerinin aksine, bu sinirlar cinsiyetten bagimsizdir — ayni esikler hem erkekler hem de kadinlar icin gecerlidir; cunku metabolik tehlikeyi isaret eden bel-boy arasindaki kritik oran cinsiyetler arasinda tutarlidir.',

    interpretation:
      'BBO sonucunuz, 0.5 sinir degerini temel referans noktasi olarak kullanilarak yorumlanmalidir. Oraniniz 0.5\'in altindaysa, bel cevreniz boyunuzun yarisindan az demektir; bu da merkezi yag birikiminin genellikle dusuk kardiyovaskuler ve metabolik riskle iliskilendirilen bir aralikta oldugunu gosterir. 0.43 ile 0.49 arasindaki degerler optimal saglikli araligi temsil eder. 0.35\'in altindaki degerler dusuk kilolu olmayi isaret edebilir ve bu da besin eksiklikleri ve azalmis kemik yogunlugu gibi kendi saglik kaygalarini beraberinde getirir. Oraniniz 0.5 veya uzeri ise, anlamli merkezi yag birikiminin sinyalini verir. 0.50 ile 0.57 arasindaki oran ilgi gerektiren artan riski gosterir — fiziksel aktivite artisi ve beslenme iyilestirmelerini iceren yasam tarzi degisiklikleri bu orani zamanla anlamli olcude dusurebiir. 0.58\'in uzerindeki bir oran, kardiyovaskuler hastalik, tip 2 diyabet, hipertansiyon ve metabolik sendrom icin onemli olcude yukselmis risklerle birlikte belirgin merkezi obeziteyi gosterir. Unutmayin ki BBO bir tarama aracidir, tani araci degildir. Zamanla takip edildiginde en iyi sonucu verir: aylik olcumler yaparak egilimi gozlemlemek, herhangi bir tekil okumadan daha degerli saglik bilgisi saglar.',

    limitations:
      'BBO, merkezi obezite riskini degerlendirmede VKI\'ye gore onemli avantajlara sahip olsa da bazi oneml sinirlamalari vardir. Tum antropometrik olcumler gibi, dogru olcum teknigine bagldir — tutarsiz mezura yerlestirmesi veya gerilimi sonuclari etkileyebilir. BBO, visseral yag (organlar cevresindeki derin, metabolik olarak tehlikeli yag) ile subkutan yag (deri altindaki daha az zararli yag) arasinda ayrim yapamaz; her ikisini de bir arada olcer. Cok uzun veya cok kisa bireylerin riski hafifce fazla veya az tahmin edilebilir, ancak bu etki VKI\'deki karsilik gelen sinirlamadan daha kucuktur. BBO kas kutlesini hesaba katmaz — onemli kor kas yapisina sahip iyi egitimli bir sporcu, karsilik gelen visseral yag olmadan daha buyuk bir bel cevresine sahip olabilir. 0.5 siniri dikkat cekici bicimde evrensel olsa da, oncelikle yetiskin populasyonlarinda dogrulanmistir ve 5 yas alti cocuklara uygulanmamalidir. Hamile kadinlar, karin fitigi veya onemli karin izleri olan bireyler ve karin siskinligine neden olan durumlar (assit gibi) olan kisiler guvenilmez sonuclar elde edecektir.',

    healthRisks:
      'Yuksek BBO ile olculen merkezi obezite, ciddi saglik durumlarinin genis bir yelpazesi ile iliskilidir. Mekanizmalar iyi anlasilmistir: visseral karin yagi, neredeyse bir endokrin organ gibi isleyen metabolik olarak aktif bir dokudur; pro-inflamatuar sitokinler (TNF-alfa ve interlokin-6 dahil), adipokinler ve serbest yag asitleri salar; bunlar damar endotelini sistemik olarak hasar verir, insulin direncini tesvik eder ve vucut genelinde kronik dusuk duzeyli bir iltihaplanma durumu olusturur. Kardiyovaskuler hastalik en kapsamli sekilde belgelenmis sonuctur — BBO degeri 0.5 uzerinde olan bireyler koroner arter hastaligi, kalp krizi, inme ve periferal arter hastaligi icin onemli olcude artan risklerle karsi karsiya kalir. Tip 2 diyabet riski artan merkezi yaganma ile hizla yukselir: visseral yag dogrudan karacigerin glikozu duzenleme yetenegini bozar ve periferik insulin hassasiyetini azaltir. Metabolik sendrom — merkezi obezite, yuksek kan sekeri, yuksek trigliseritler, dusuk HDL kolesterol ve hipertansiyonun tehlikeli kumelenmesi — BBO degerleri 0.5\'in uzerinde olanlarda guclu sekilde on gorulur. Cesaret verici gerceklik sudur ki visseral yag, yasam tarzi mudahalesine en duyarli yag birikimleri arasindadir — duzgun aerobik egzersiz ve beslenme iyilestirmesi 8-12 hafta icinde olculebilir bel cevresi azalmalari uretebilir.',

    alternativeMeasures:
      'BBO ile birlikte kapsamli bir saglik resmi olusturmak icin bircok tamamlayici antropometrik olcum kullanilabilir. Vucut Kitle Indeksi (VKI), agirligin kilogram cinsinden boyun metre karesine bolunmesiyle hesaplanan en yaygin tarama araci olmaya devam etmektedir. Ancak VKI, kas ile yag arasinda ayrim yapamaz, yagin nerede dagitildigini gostermez ve dogrudan vucut kompozisyonu degerlendirmesine kiyasla bireylerin %30\'una kadar yanlis siniflandirabilir. Tek basina bel cevresi, DSO kesme degerleriyle (erkekler icin >102 cm, kadinlar icin >88 cm) merkezi obezite icin basit ve etkili bir olcumdur — ancak bu cinsiyete ozgu kesme degerler BBO\'nun onledigi bir karmasiklik ekler. Bel-kalca orani (BKO) bel ile kalca cevresini karsilastirir ancak her ikisi orantiyla degistiginde artislari maskeleyebilir. Vucut yag yuzdesi, DEXA, biyoelektrik empedans veya deri katlama olcumleri ile olculur; dogrudan kompozisyon verileri saglar ancak uzman ekipman gerektirir. Arastirmalar tutarli sekilde BBO\'yu kardiyovaskuler riskin en iyi tekil antropometrik on goricisi olarak konumlandirir.',

    demographicDifferences:
      'BBO\'nun en buyuk guclerinden biri, diger antropometrik olculere kiyasla demografik gruplar arasinda dikkat cekici tutarliligidir. 0.5 sinir degeri Avrupa, Afro-Amerikan, Asya ve Latin Amerika populasyonlarinda VKI veya bel cevresi kesme degerlerinden daha buyuk bir tutarlilikla dogrulanmistir. Ancak bazi nuanslar vardir. Guney Asya populasyonlarinda, genel olarak daha dusuk vucut agirliklarinda visseral yag birikimine genetik yatkinlik nedeniyle metabolik risk biraz daha dusuk BBO degerlerinde (yaklasik 0.48-0.49) ortaya cikabilir. Yas bir rol oynar: BBO dogal olarak yaslanimla birlikte karin yagi birikimi ve hafif boy kisalmasi nedeniyle artma egilimindedir. Cinsiyet farkliliklari diger metriklere gore BBO\'da belirgin sekilde daha kucuktur — erkekler ve kadinlar ayni 0.5 sinirini kullanir. Menopoz sirasinda, kadinlarin BBO degerleri genellikle azalan estrojenin yag depolamayi karina dogru kaydirmsiyla artar.',

    medicalDisclaimer:
      'Bu bel-boy orani hesaplayicisi yalnizca egitim ve genel bilgilendirme amaciyla sunulmaktadir ve profesyonel tibbi danisma, tani veya tedavinin yerine gecirilmemelidir. BBO kapsamli yayimlanmis arastirmalarla desteklenen iyi dogrulanmis bir tarama araci olsa da, bircok metrik arasinda yalnizca bir tanesidir ve bireysel saglik riskinin tum karmasikligini yakalayamaz. Olumlu bir BBO, kardiyovaskuler veya metabolik hastalik yoklugunu garanti etmez — aile gecmisi, sigara, fiziksel hareketsizlik, beslenme kalitesi, kan basinci, kolesterol ve kan sekeri hastalik riskine bagimsiz olarak katki yapar. Benzer sekilde, yuksek bir BBO tani olusturmaz — nitelikli bir saglik uzmaninin daha ileri degerlendirmesini gerektiren bir risk gostergesidir. Bu arac hamile kadinlar, 5 yas alti cocuklar, yeme bozukluklari olan bireyler veya karin siskinligine neden olan durumlar icin kulllanilmak uzere tasarlanmamistir.',

    references: [
      'Ashwell M, Gunn P, Gibson S. Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis. Obesity Reviews. 2012;13(3):275-286.',
      'Browning LM, Hsieh SD, Ashwell M. A systematic review of waist-to-height ratio as a screening tool for the prediction of cardiovascular disease and diabetes: 0.5 could be a suitable global boundary value. Nutrition Research Reviews. 2010;23(2):247-269.',
      'Ashwell M, Hsieh SD. Six reasons why the waist-to-height ratio is a rapid and effective global indicator for health risks of obesity. International Journal of Food Sciences and Nutrition. 2005;56(5):303-307.',
      'Dunya Saglik Orgutu. Bel cevresi ve bel-kalca orani: DSO uzman danismanlik raporu. Cenevre: DSO; 2008.',
      'Lee CM, Huxley RR, Wildman RP, Woodward M. Indices of abdominal obesity are better discriminators of cardiovascular risk factors than BMI: a meta-analysis. Journal of Clinical Epidemiology. 2008;61(7):646-653.',
      'Savva SC, Lamnisos D, Kafatos AG. Predicting cardiometabolic risk: waist-to-height ratio or BMI. A meta-analysis. Diabetes, Metabolic Syndrome and Obesity. 2013;6:403-419.',
      'Swainson MG, Batterham AM, Tsakirides C, et al. Prediction of whole-body fat percentage and visceral adipose tissue mass from five anthropometric variables. PLoS One. 2017;12(5):e0177175.',
      'Garnett SP, Baur LA, Cowell CT. Waist-to-height ratio: a simple option for determining excess central adiposity in young people. International Journal of Obesity. 2008;32:1028-1030.',
    ],

    tips: [
      'Altin kural basittir: bel cevrenizi boyunuzun yarisindan az tutun. Bu tek mesaj hatirlmasi kolay ve herkes icin gecerlidir.',
      'Belinizi govdenizin en dar noktasinda, genellikle gobek deliginiz hizasinda veya hemen ustunde, rahat durarak ve normal nefes alarak olcun.',
      'BBO\'nuzu gunluk degil, aylik olarak takip edin. Hidrasyon, ogunnler ve siskinlikten kaynaklanan kisa sureli dalgalanmalar olcumleri kaydirabilir.',
      'Aerobik egzersiz (yurume, kosma, bisiklet, yuzme) visseral karin yagini azaltmada en etkili egzersiz turudur.',
      'Diyet lifi alimi, karin yagi ile guclu bir ters iliskiye sahiptir. Sebze, meyve, tam tahillar ve baklagillrdan gunluk 25-35 gram lif hdefleyin.',
      'Kronik stres, ozellikle visseral yag depolamasini tesvik eden kortizolu yukseltir. Uyku, meditasyon veya hobiler yoluyla stres yonetimi dogrudan bel azaltmayi destekler.',
      'Uyku kalitesi onemlidir: calismalar, gece 6 saatten az uyumanin, diyet ve egzerszden bagimsiz olarak artan visseral yag birikimiyle iliskili oldugunu gostermektedir.',
      'Alkol tuketimi, ozellikle bira ve sert ickilier, karin yagi birikimiyle guclu sekilde iliskilidir. Alkol alimini azaltmak BBO\'nuzu anlamli olcude iyilestirebilir.',
      'Subkutan yagin aksine, visseral yag yasam tarzi degisikliklerine nispeten hizli yanit verir. 8-12 haftalik tutarli caba genellikle olculebilir bel cevresi azalmasi uretir.',
      'BBO, kasli bireyler icin VKI\'den daha dogrudr. Duzenli egzersiz yapiyor ve onemli kas kutleniz varsa, BBO daha guvenilir bir saglik degerlendirmesi saglar.',
    ],

    faqs: [
      {
        question: 'BBO neden VKI\'den daha iyi kabul edilir?',
        answer:
          '2012 yilinda 300.000\'den fazla yetiskinin meta-analizi, BBO\'nun hipertansiyon, tip 2 diyabet ve metabolik sendrom dahil kardiyovaskuler risk faktorlerini tahmin etmede VKI\'den onemli olcude daha iyi oldugunu ortaya koymustur. VKI yalnizca toplam vucut agirligini boya gore yanstir; kas ile yag arasinda ayrim yapamaz veya yagin nerede depolandigini gosteremez. BBO, kardiometabolik hastalik riskinin birincil itmegucu olan merkezi yag birikimini dogrudan olcer.',
      },
      {
        question: '0.5 sinir degeri ne anlama gelir?',
        answer:
          '0.5 siniri basit bir saglik mesajina karsilik gelir: beliniz boyunuzun yarisindan az olmalidr. 170 cm boyundaysaniz, bel cevreniz 85 cm\'nin altinda olmalidir. Bu esik birden fazla etnik grupta dogrulanmistir ve hem erkekler hem de kadinlar icin esit sekilde gecerlidir.',
      },
      {
        question: 'BBO hem erkekler hem de kadinlar icin gecerli mi?',
        answer:
          'Evet. Cinsiyete ozgu yorum kesme degerleri gerektiren VKI ve bel cevresinin aksine, BBO hem erkekler hem de kadinlar icin ayni 0.5 sinirini kullanir. Arastirmalar bu sinirin cinsiyetler arasinda etkili oldugunu dogrulamistir, bu da BBO\'yu daha basit ve evrensel olarak uygulanabilir bir tarama araci yapar.',
      },
      {
        question: 'BBO\'mu dusurebiilir miyim?',
        answer:
          'Kesinlikle. Visseral karin yagi, yasam tarzi degisikliklerine en duyarli yag birikimleri arasindadir. Duzenli aerobik egzersiz (haftada 150+ dakika), tam gidlara vurgu yapan liften zengin bir diyet, yeterli uyku (7-9 saat), stres yonetimi ve olculu alkol tuketiminin kombinasyonu 8-12 hafta icinde olculebilir bel cevresi azalmasi uretebilir.',
      },
      {
        question: 'BBO sporculr ve kasli kisiler icin dogru mudur?',
        answer:
          'BBO, kasli bireyleri siklikla fazla kilolu olarak yanlis siniflandiran VKI\'den daha guvenilirdir. Ancak onemli kor kas yapisina sahip bireyler, visseral yagi yansitmayan hafifce yukselmis bel olcumlerine sahip olabilir. Ciddi sporculr icin BBO\'yu vucut yag yuzdesi olcumuyle birlestirmek en dogru resmi saglar.',
      },
      {
        question: 'BBO cocuklar icin gecerli mi?',
        answer:
          '0.5 sinirinin 5-17 yas arasi cocuklar icin genis olcude uygulanabilir oldugu bulunmustur, ancak yetiskin populasyonlarindakinden daha az saglam dogrulama ile. Garnett ve arkadaslarinin (2008) arastirmasi, pediatrik merkezi obezite taramasinda BBO kullanimini desteklemektedir. 5 yas alti cocuklar icin standart buyume grafikleri daha uygundur.',
      },
      {
        question: 'BBO\'mu ne siklikta olcmeliyim?',
        answer:
          'Tutarli kosullar altinda (gunun ayni saati, ayni duzey kiyafet, yemek yemeden once) aylik olcumler en faydali takip verilerini saglar. Gunluk olcumlerden kacinin, cunku hidrasyon, ogunler ve siskinlik vucut kompozisyonundaki anlamli degisiklikleri yansitmayan kisa vadeli dalgalanmalara neden olabilir.',
      },
      {
        question: 'Ideal BBO degeri nedir?',
        answer:
          'Optimal aralik 0.43 ile 0.50 arasindadir. Bu araliktaki degerler, populasyonlar arasinda en dusuk kardiyovaskuler ve metabolik riskle iliskilidir. Yaklasik 0.46 BBO saglikli bolgenin merkezini temsil eder. 0.35\'in altindaki degerler dusuk kilolu olmayi isaret edebilir ve bunun kendi saglik etkileri vardir.',
      },
    ],

    categories: [
      {
        range: '< 0.35',
        label: 'Dikkat (Dusuk Kilolu)',
        description: '0.35\'in altindaki BBO dusuk kilolu olmayi isaret edebilir. Beslenme durumunuz hakkinda bir saglik uzmanina danisin.',
        color: '#3B82F6',
      },
      {
        range: '0.35 - 0.42',
        label: 'Ince',
        description: 'Merkezi obezite riski olmayan ince vucut kompozisyonu. Saglikli yasam tarzinin surdurlmesi onerilir.',
        color: '#06B6D4',
      },
      {
        range: '0.43 - 0.52',
        label: 'Saglikli',
        description: 'En dusuk kardiyovaskuler ve metabolik riskle optimal aralik. Beliniz boyunuza uygun sekilde orantilidir.',
        color: '#10B981',
      },
      {
        range: '0.53 - 0.57',
        label: 'Fazla Kilolu',
        description: 'Asiri merkezi yag birikimini gosterir. Saglik risklerini azaltmak icin yasam tarzi degisiklikleri onerilir.',
        color: '#F59E0B',
      },
      {
        range: '0.58 - 0.63',
        label: 'Cok Fazla Kilolu',
        description: 'Kardiyovaskuler hastalik, diyabet ve metabolik sendrom icin yukselmis risklerle birlikte belirgin merkezi obezite.',
        color: '#EF4444',
      },
      {
        range: '0.64+',
        label: 'Morbid Obez',
        description: 'Cok yuksek saglik riski. Kapsamli metabolik degerlendirme icin tibbi danismanlik kesinlikle onerilir.',
        color: '#991B1B',
      },
    ],
  },
};
