import { CalculatorContent } from '@/types/calculator';

export const pregnancyWeightGainContent: CalculatorContent = {
  en: {
    whatIs:
      'The Pregnancy Weight Gain Calculator is a comprehensive tool that helps expectant mothers track whether their weight gain is within healthy ranges recommended by the Institute of Medicine (IOM) and the American College of Obstetricians and Gynecologists (ACOG). Based on your pre-pregnancy Body Mass Index (BMI), current pregnancy week, and whether you are carrying a single baby or twins, this calculator provides personalized weight gain targets for each trimester. Healthy weight gain during pregnancy is crucial for both maternal health and optimal fetal development. Gaining too little weight increases the risk of preterm birth and low birth weight, while gaining too much can lead to gestational diabetes, preeclampsia, cesarean delivery, and long-term weight retention after birth. The 2009 IOM guidelines, which remain the gold standard for clinical practice, define specific weight gain ranges based on pre-pregnancy BMI categories, recognizing that women with different starting weights have different optimal gain trajectories.',

    howToCalculate:
      'To use this calculator, you need four pieces of information: your height, your pre-pregnancy weight (your weight before becoming pregnant or in the first few weeks of pregnancy), your current weight, and your current pregnancy week. First, the calculator determines your pre-pregnancy BMI using the standard formula: BMI = weight (kg) / height (m)². Based on this BMI, you are classified into one of four categories: underweight (BMI < 18.5), normal weight (BMI 18.5-24.9), overweight (BMI 25-29.9), or obese (BMI >= 30). Each category has specific recommended total weight gain ranges according to IOM/ACOG guidelines. The calculator then determines where you should be at your current week of pregnancy based on these guidelines: approximately 0.5-2 kg total in the first trimester (weeks 1-13), followed by a steady weekly gain rate during the second and third trimesters. Your current weight gain is compared against the expected range for your specific week, giving you a clear picture of whether you are on track, below target, or above target.',

    formulaDetails:
      'The IOM 2009 guidelines establish weight gain recommendations based on pre-pregnancy BMI categories. For singleton pregnancies: underweight women (BMI < 18.5) should gain 12.5-18.0 kg total, with a weekly rate of 0.44-0.58 kg in the 2nd and 3rd trimesters; normal weight women (BMI 18.5-24.9) should gain 11.5-16.0 kg total, with 0.35-0.50 kg/week; overweight women (BMI 25-29.9) should gain 7.0-11.5 kg total, with 0.23-0.33 kg/week; and obese women (BMI >= 30) should gain 5.0-9.0 kg total, with 0.17-0.27 kg/week. For twin pregnancies, the recommended ranges are significantly higher: normal weight women should gain 16.8-24.5 kg, overweight women 14.1-22.7 kg, and obese women 11.3-19.1 kg. The first trimester typically accounts for 0.5-2.0 kg of total gain regardless of BMI category, as most weight gain occurs in the second and third trimesters when the baby is growing most rapidly. The expected gain at any given week is calculated as: first trimester gain (proportional to week/13) plus weekly rate multiplied by weeks into the second and third trimesters.',

    interpretation:
      'Your results show whether your current weight gain is within the recommended range for your specific pregnancy week and pre-pregnancy BMI category. An "On Track" status means your weight gain is within the healthy target range, which is associated with the best outcomes for both mother and baby. "Below Target" indicates you may not be gaining enough weight, which could affect fetal growth and development. This is common in the first trimester due to morning sickness but should be monitored if it continues into the second trimester. "Above Target" means you are gaining more than recommended, which is associated with increased risks of gestational diabetes, preeclampsia, macrosomia (large baby), cesarean delivery, and postpartum weight retention. It is important to remember that these are guidelines, not strict rules. Individual circumstances, including body composition, activity level, and specific health conditions, may warrant different targets. Always discuss your weight gain pattern with your healthcare provider, who can provide personalized guidance based on your complete health profile.',

    limitations:
      'While this calculator uses the widely accepted IOM 2009 guidelines, it has several important limitations. First, BMI does not account for body composition differences. A muscular woman and a woman with the same weight but different fat-to-muscle ratios will receive the same recommendations despite different needs. Second, the IOM guidelines were developed primarily using data from North American and European populations. Research suggests that optimal weight gain may differ for women of Asian, African, or other ethnic backgrounds, and some countries have adopted modified guidelines. Third, the calculator assumes a standard pregnancy progression and does not account for conditions such as gestational diabetes, preeclampsia, hyperemesis gravidarum, or other medical conditions that may require different weight gain targets. Fourth, weight gain is not always linear, as water retention, constipation, and other factors can cause day-to-day and week-to-week fluctuations. Fifth, the guidelines for obese women (BMI >= 30) do not differentiate between Class I, II, and III obesity, though emerging research suggests different optimal ranges for each subclass. This calculator is a screening tool and should not replace regular prenatal care and individualized guidance from healthcare professionals.',

    healthRisks:
      'Inadequate weight gain during pregnancy is associated with several serious risks. For the baby, these include preterm birth (before 37 weeks), low birth weight (less than 2,500 grams), small for gestational age, and fetal growth restriction, all of which can lead to short-term complications like breathing difficulties and long-term developmental concerns. For the mother, insufficient weight gain may indicate nutritional deficiencies that affect both maternal health and fetal development, and can be associated with postpartum depression. Excessive weight gain carries its own set of risks. For the baby, these include macrosomia (birth weight over 4,000 grams), which increases the risk of birth injuries, shoulder dystocia, and neonatal hypoglycemia. For the mother, excessive gain increases the risk of gestational diabetes mellitus (GDM), pregnancy-induced hypertension and preeclampsia, cesarean delivery, postpartum hemorrhage, and long-term weight retention that may contribute to chronic obesity. Research from the Nurses\' Health Study II found that women who gained more than recommended had significantly higher BMI decades later, contributing to increased cardiovascular disease risk. The relationship between weight gain and pregnancy outcomes follows a U-shaped curve, where both extremes increase risk.',

    alternativeMeasures:
      'In addition to monitoring total weight gain, healthcare providers use several complementary measures to assess healthy pregnancy progression. Fundal height measurement, taken from the pubic bone to the top of the uterus, provides a quick clinical estimate of fetal growth starting around week 20. Ultrasound measurements including biparietal diameter (BPD), femur length (FL), and abdominal circumference (AC) provide more precise fetal growth assessment. The symphysis-fundal height in centimeters typically corresponds approximately to the gestational age in weeks (plus or minus 2-3 cm). Maternal body composition analysis using bioelectrical impedance (where safe during pregnancy) can differentiate between fat gain and lean tissue/fluid gain. Blood tests including glucose tolerance testing (GDT) at 24-28 weeks screen for gestational diabetes, while regular blood pressure monitoring screens for hypertensive disorders. Urine protein testing helps detect preeclampsia. Some providers now use customized growth charts that adjust expected fetal weight for maternal height, weight, ethnicity, and parity, providing more accurate individualized assessments than population-based standards alone.',

    medicalDisclaimer:
      'This Pregnancy Weight Gain Calculator is designed for educational and informational purposes only and should not be used as a substitute for professional prenatal care. The recommendations provided are based on general guidelines from the Institute of Medicine (IOM) and the American College of Obstetricians and Gynecologists (ACOG) and may not be appropriate for every individual pregnancy. Factors such as pre-existing medical conditions, pregnancy complications, multiple gestations beyond twins, and individual metabolic differences may require different weight gain targets. Always discuss your weight gain with your obstetrician, midwife, or other qualified healthcare provider who can evaluate your specific circumstances. Do not attempt to restrict calories or start a weight loss program during pregnancy without explicit medical guidance. If you experience sudden or rapid weight gain, severe swelling, persistent headaches, or vision changes, seek immediate medical attention as these may be signs of preeclampsia or other serious conditions.',

    references: [
      'Institute of Medicine (IOM). Weight Gain During Pregnancy: Reexamining the Guidelines. Washington, DC: The National Academies Press; 2009.',
      'American College of Obstetricians and Gynecologists (ACOG). Committee Opinion No. 548: Weight Gain During Pregnancy. Obstet Gynecol. 2013;121(1):210-212.',
      'Goldstein RF, Abell SK, et al. Association of Gestational Weight Gain With Maternal and Infant Outcomes: A Systematic Review and Meta-analysis. JAMA. 2017;317(21):2207-2225.',
      'LifeCycle Project-Maternal Obesity and Childhood Outcomes Study Group. Association of Gestational Weight Gain With Adverse Maternal and Infant Outcomes. JAMA. 2019;321(17):1702-1715.',
      'World Health Organization (WHO). Maternal, Newborn, Child and Adolescent Health: Nutrition.',
      'Siega-Riz AM, Viswanathan M, et al. A systematic review of outcomes of maternal weight gain according to the Institute of Medicine recommendations. Obstet Gynecol. 2009;114(4):803-815.',
      'Deputy NP, Sharma AJ, Kim SY. Gestational Weight Gain - United States, 2012 and 2013. MMWR Morb Mortal Wkly Rep. 2015;64(43):1215-1220.',
    ],

    tips: [
      'Focus on the quality of calories rather than the quantity - choose nutrient-dense foods like fruits, vegetables, whole grains, lean proteins, and healthy fats',
      'First trimester requires no extra calories. Add approximately 340 extra calories per day in the second trimester and 450 extra in the third trimester',
      'Weigh yourself at the same time of day, wearing similar clothing, ideally once per week for the most consistent tracking',
      'Stay hydrated with 8-10 glasses of water daily, as adequate hydration supports amniotic fluid levels and reduces fluid retention',
      'Continue moderate exercise as approved by your healthcare provider - aim for 150 minutes per week of moderate activity like walking or swimming',
      'Take prenatal vitamins consistently, especially folic acid (400-800 mcg) and iron (27 mg) as recommended by your provider',
      'Do not try to lose weight during pregnancy, even if you started at a higher BMI - focus on gaining within the recommended range',
      'Report any sudden weight gain (more than 1 kg in a week) to your healthcare provider, as it may indicate fluid retention or preeclampsia',
    ],

    faqs: [
      {
        question: 'How much weight should I gain during pregnancy?',
        answer:
          'The recommended weight gain depends on your pre-pregnancy BMI. For a singleton pregnancy: underweight women (BMI < 18.5) should gain 12.5-18 kg (28-40 lbs), normal weight women (BMI 18.5-24.9) should gain 11.5-16 kg (25-35 lbs), overweight women (BMI 25-29.9) should gain 7-11.5 kg (15-25 lbs), and obese women (BMI >= 30) should gain 5-9 kg (11-20 lbs). These ranges are based on the IOM 2009 guidelines endorsed by ACOG.',
      },
      {
        question: 'Is it normal to lose weight in the first trimester?',
        answer:
          'Yes, slight weight loss or minimal gain in the first trimester is quite common, especially if you experience morning sickness or food aversions. Most weight gain occurs during the second and third trimesters. Only about 0.5-2 kg of total pregnancy weight gain typically occurs in the first 13 weeks. However, if weight loss is significant (more than 5% of body weight) or persistent, consult your healthcare provider.',
      },
      {
        question: 'What if I am gaining more weight than recommended?',
        answer:
          'If you are gaining above the recommended range, focus on the quality of your diet rather than restricting calories. Replace processed foods with whole foods, increase vegetable intake, limit added sugars, and stay physically active with pregnancy-safe exercises. Never start a restrictive diet during pregnancy without medical guidance. Discuss your weight gain pattern with your healthcare provider, who may recommend working with a registered dietitian.',
      },
      {
        question: 'Does the recommended weight gain change for twin pregnancies?',
        answer:
          'Yes, twin pregnancies require more weight gain than singleton pregnancies. Normal weight women carrying twins should gain 16.8-24.5 kg (37-54 lbs), overweight women 14.1-22.7 kg (31-50 lbs), and obese women 11.3-19.1 kg (25-42 lbs). The increased gain supports the growth and development of two babies, two placentas, and the additional blood volume and fluid needed for a twin pregnancy.',
      },
      {
        question: 'Where does the pregnancy weight go?',
        answer:
          'At full term, pregnancy weight is distributed approximately as follows: baby (3.4 kg / 7.5 lbs), placenta (0.7 kg / 1.5 lbs), amniotic fluid (0.8 kg / 1.8 lbs), uterus growth (0.9 kg / 2 lbs), breast tissue (0.9 kg / 2 lbs), increased blood volume (1.8 kg / 4 lbs), maternal fat stores (2.7 kg / 6 lbs), and fluid retention (1.8 kg / 4 lbs). This totals approximately 13 kg (29 lbs). Most of this weight is lost within the first few weeks after delivery.',
      },
      {
        question: 'How quickly should I lose weight after pregnancy?',
        answer:
          'Most women lose about 5-6 kg (11-13 lbs) immediately after delivery (baby, placenta, amniotic fluid). Additional weight is lost gradually over the following 6-12 months through breastfeeding, physical activity, and healthy eating. Aim to lose no more than 0.5 kg (1 lb) per week if breastfeeding. If not breastfeeding, a loss of 0.5-1 kg (1-2 lbs) per week is generally safe. It typically takes 6-12 months to return to pre-pregnancy weight. Do not rush the process, and prioritize nutrition if breastfeeding.',
      },
      {
        question: 'When should I be concerned about my weight gain during pregnancy?',
        answer:
          'Contact your healthcare provider if you experience: sudden weight gain of more than 1 kg (2 lbs) in a single week (which could indicate preeclampsia), no weight gain for 2 or more weeks during the second or third trimester, weight loss after the first trimester, or if your total gain is significantly outside the recommended range. Also seek immediate medical attention if sudden weight gain is accompanied by severe headaches, vision changes, upper abdominal pain, or significant swelling in the face or hands.',
      },
    ],
  },
  tr: {
    whatIs:
      'Hamilelik Kilo Alımı Hesaplayıcı, anne adaylarının kilo alımlarının Tıp Enstitüsü (IOM) ve Amerikan Kadın Hastalıkları ve Doğum Uzmanları Koleji (ACOG) tarafından önerilen sağlıklı aralıklarda olup olmadığını takip etmelerine yardımcı olan kapsamlı bir araçtır. Hamilelik öncesi Vücut Kitle İndeksinize (VKİ), mevcut hamilelik haftanıza ve tek bebek mi yoksa ikiz mi taşıdığınıza bağlı olarak, bu hesaplayıcı her trimester için kişiselleştirilmiş kilo alım hedefleri sunar. Hamilelikte sağlıklı kilo alımı, hem anne sağlığı hem de optimal fetal gelişim için kritik öneme sahiptir. Çok az kilo almak erken doğum ve düşük doğum ağırlığı riskini artırırken, çok fazla kilo almak gestasyonel diyabet, preeklampsi, sezaryen doğum ve doğum sonrası uzun süreli kilo tutulmasına yol açabilir. Klinik uygulama için altın standart olmaya devam eden 2009 IOM kılavuzları, hamilelik öncesi VKİ kategorilerine dayalı olarak spesifik kilo alım aralıkları tanımlar ve farklı başlangıç ağırlıklarına sahip kadınların farklı optimal alım eğrilerine sahip olduğunu kabul eder.',

    howToCalculate:
      'Bu hesaplayıcıyı kullanmak için dört bilgiye ihtiyacınız var: boyunuz, hamilelik öncesi kilonuz (hamile kalmadan önceki veya hamileliğin ilk birkaç haftasındaki kilonuz), mevcut kilonuz ve mevcut hamilelik haftanız. İlk olarak, hesaplayıcı standart formülü kullanarak hamilelik öncesi VKİ\'nizi belirler: VKİ = kilo (kg) / boy (m)². Bu VKİ\'ye göre dört kategoriden birine sınıflandırılırsınız: zayıf (VKİ < 18.5), normal kilo (VKİ 18.5-24.9), fazla kilolu (VKİ 25-29.9) veya obez (VKİ >= 30). Her kategorinin IOM/ACOG kılavuzlarına göre belirli önerilen toplam kilo alım aralıkları vardır. Hesaplayıcı daha sonra bu kılavuzlara göre mevcut hamilelik haftanızda nerede olmanız gerektiğini belirler: birinci trimesterde (1-13. haftalar) yaklaşık 0.5-2 kg toplam, ardından ikinci ve üçüncü trimesterlerde düzenli bir haftalık alım hızı. Mevcut kilo alımınız, belirli haftanız için beklenen aralıkla karşılaştırılarak yolunda mı, hedefin altında mı yoksa üstünde mi olduğunuz hakkında net bir resim sunar.',

    formulaDetails:
      'IOM 2009 kılavuzları, hamilelik öncesi VKİ kategorilerine dayalı kilo alım önerileri belirler. Tekil gebelikler için: zayıf kadınlar (VKİ < 18.5) toplam 12.5-18.0 kg almalı, 2. ve 3. trimesterde haftalık hız 0.44-0.58 kg; normal kilolu kadınlar (VKİ 18.5-24.9) toplam 11.5-16.0 kg almalı, haftalık 0.35-0.50 kg; fazla kilolu kadınlar (VKİ 25-29.9) toplam 7.0-11.5 kg almalı, haftalık 0.23-0.33 kg; ve obez kadınlar (VKİ >= 30) toplam 5.0-9.0 kg almalı, haftalık 0.17-0.27 kg. İkiz gebelikler için önerilen aralıklar önemli ölçüde daha yüksektir: normal kilolu kadınlar 16.8-24.5 kg, fazla kilolu kadınlar 14.1-22.7 kg ve obez kadınlar 11.3-19.1 kg almalıdır. İlk trimester, VKİ kategorisinden bağımsız olarak genellikle toplam alımın 0.5-2.0 kg\'ını oluşturur, çünkü kilo alımının çoğu bebeğin en hızlı büyüdüğü ikinci ve üçüncü trimesterlerde gerçekleşir.',

    interpretation:
      'Sonuçlarınız, mevcut kilo alımınızın belirli hamilelik haftanız ve hamilelik öncesi VKİ kategoriniz için önerilen aralıkta olup olmadığını gösterir. "Yolunda" durumu, kilo alımınızın hem anne hem de bebek için en iyi sonuçlarla ilişkili sağlıklı hedef aralıkta olduğu anlamına gelir. "Hedefin Altında", yeterince kilo almıyor olabileceğinizi gösterir, bu da fetal büyüme ve gelişimi etkileyebilir. Bu, sabah bulantısı nedeniyle ilk trimesterde yaygındır ancak ikinci trimestere devam ederse izlenmelidir. "Hedefin Üstünde", önerilenden daha fazla kilo aldığınız anlamına gelir, bu da gestasyonel diyabet, preeklampsi, makrozomi, sezaryen doğum ve doğum sonrası kilo tutulması riskleriyle ilişkilidir. Bunların kurallar değil, kılavuzlar olduğunu hatırlamak önemlidir. Vücut kompozisyonu, aktivite düzeyi ve belirli sağlık durumları dahil bireysel koşullar farklı hedefler gerektirebilir. Kilo alım düzeninizi her zaman sağlık uzmanınızla görüşün.',

    limitations:
      'Bu hesaplayıcı yaygın olarak kabul edilen IOM 2009 kılavuzlarını kullanmakla birlikte, birkaç önemli sınırlaması vardır. İlk olarak, VKİ vücut kompozisyonu farklılıklarını hesaba katmaz. Kaslı bir kadın ile aynı kiloya ancak farklı yağ-kas oranlarına sahip bir kadın farklı ihtiyaçlara rağmen aynı önerileri alacaktır. İkinci olarak, IOM kılavuzları öncelikle Kuzey Amerika ve Avrupa popülasyonlarından elde edilen veriler kullanılarak geliştirilmiştir. Araştırmalar, optimal kilo alımının Asya, Afrika veya diğer etnik kökenlerden kadınlar için farklı olabileceğini göstermektedir. Üçüncü olarak, hesaplayıcı standart bir hamilelik ilerlemesi varsayar ve gestasyonel diyabet, preeklampsi, hiperemezis gravidarum veya farklı kilo alım hedefleri gerektirebilecek diğer tıbbi durumları hesaba katmaz. Dördüncü olarak, kilo alımı her zaman doğrusal değildir, çünkü su tutulumu, kabızlık ve diğer faktörler günden güne ve haftadan haftaya dalgalanmalara neden olabilir. Bu hesaplayıcı bir tarama aracıdır ve düzenli doğum öncesi bakımın ve sağlık profesyonellerinden bireyselleştirilmiş rehberliğin yerini almamalıdır.',

    healthRisks:
      'Hamilelikte yetersiz kilo alımı birçok ciddi riskle ilişkilidir. Bebek için bunlar arasında erken doğum (37 haftadan önce), düşük doğum ağırlığı (2.500 gramdan az), gestasyonel yaşa göre küçük olma ve fetal büyüme kısıtlaması bulunur; bunların hepsi solunum güçlükleri gibi kısa vadeli komplikasyonlara ve uzun vadeli gelişimsel endişelere yol açabilir. Anne için yetersiz kilo alımı, hem anne sağlığını hem de fetal gelişimi etkileyen beslenme eksikliklerini gösterebilir. Aşırı kilo alımı kendi risk setini taşır. Bebek için makrozomi (4.000 gramdan fazla doğum ağırlığı) riskini artırır, bu da doğum yaralanmaları, omuz distosisi ve neonatal hipoglisemi riskini yükseltir. Anne için aşırı alım, gestasyonel diyabet, hamileliğe bağlı hipertansiyon ve preeklampsi, sezaryen doğum, doğum sonrası kanama ve kronik obeziteye katkıda bulunabilecek uzun vadeli kilo tutulması riskini artırır. Kilo alımı ve hamilelik sonuçları arasındaki ilişki, her iki uçta da riskin arttığı U-şekilli bir eğri izler.',

    alternativeMeasures:
      'Toplam kilo alımını izlemenin yanı sıra, sağlık profesyonelleri sağlıklı hamilelik ilerlemesini değerlendirmek için birçok tamamlayıcı ölçüm kullanır. Pubik kemikten uterusun tepesine kadar alınan fundal yükseklik ölçümü, yaklaşık 20. haftadan itibaren fetal büyümenin hızlı bir klinik tahmini sağlar. Bifetal çap (BPD), femur uzunluğu (FL) ve karın çevresi (AC) dahil ultrason ölçümleri daha kesin fetal büyüme değerlendirmesi sağlar. Simfiz-fundal yükseklik santimetre cinsinden genellikle yaklaşık olarak gebelik yaşına hafta cinsinden karşılık gelir (artı eksi 2-3 cm). 24-28. haftalarda glukoz tolerans testi (GDT) gestasyonel diyabeti tarar, düzenli kan basıncı takibi hipertansif bozuklukları tarar. İdrar protein testi preeklampsiyi tespit etmeye yardımcı olur. Bazı sağlık sağlayıcıları artık beklenen fetal ağırlığı anne boyu, kilosu, etnik kökeni ve paritesi için ayarlayan özelleştirilmiş büyüme çizelgeleri kullanmaktadır.',

    medicalDisclaimer:
      'Bu Hamilelik Kilo Alımı Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel doğum öncesi bakımın yerine kullanılmamalıdır. Sağlanan öneriler, Tıp Enstitüsü (IOM) ve Amerikan Kadın Hastalıkları ve Doğum Uzmanları Koleji (ACOG) genel kılavuzlarına dayanmaktadır ve her bireysel hamilelik için uygun olmayabilir. Mevcut tıbbi durumlar, hamilelik komplikasyonları, ikizden fazla çoğul gebelikler ve bireysel metabolik farklılıklar gibi faktörler farklı kilo alım hedefleri gerektirebilir. Kilo alımınızı her zaman belirli durumunuzu değerlendirebilecek kadın doğum uzmanınız, ebeniz veya diğer nitelikli sağlık sağlayıcınızla görüşün. Açık tıbbi rehberlik olmadan hamilelik sırasında kalori kısıtlaması yapmayın veya kilo verme programı başlatmayın. Ani veya hızlı kilo artışı, şiddetli şişlik, sürekli baş ağrısı veya görme değişiklikleri yaşarsanız, bunlar preeklampsi veya diğer ciddi durumların belirtileri olabileceğinden derhal tıbbi yardım alın.',

    references: [
      'Tıp Enstitüsü (IOM). Hamilelikte Kilo Alımı: Kılavuzların Yeniden İncelenmesi. Washington, DC: The National Academies Press; 2009.',
      'Amerikan Kadın Hastalıkları ve Doğum Uzmanları Koleji (ACOG). Komite Görüşü No. 548: Hamilelikte Kilo Alımı. Obstet Gynecol. 2013;121(1):210-212.',
      'Goldstein RF, Abell SK, ve ark. Gestasyonel Kilo Alımının Anne ve Bebek Sonuçlarıyla İlişkisi: Sistematik Derleme ve Meta-analiz. JAMA. 2017;317(21):2207-2225.',
      'LifeCycle Project-Anne Obezitesi ve Çocukluk Sonuçları Çalışma Grubu. Gestasyonel Kilo Alımının Olumsuz Anne ve Bebek Sonuçlarıyla İlişkisi. JAMA. 2019;321(17):1702-1715.',
      'Dünya Sağlık Örgütü (WHO). Anne, Yenidoğan, Çocuk ve Ergen Sağlığı: Beslenme.',
      'Siega-Riz AM, Viswanathan M, ve ark. Tıp Enstitüsü önerilerine göre anne kilo alımının sonuçlarının sistematik derlemesi. Obstet Gynecol. 2009;114(4):803-815.',
    ],

    tips: [
      'Kalori miktarından çok kalitesine odaklanın - meyve, sebze, tam tahıllar, yağsız proteinler ve sağlıklı yağlar gibi besin değeri yüksek gıdalar seçin',
      'Birinci trimester ekstra kalori gerektirmez. İkinci trimesterde günde yaklaşık 340 ekstra kalori, üçüncü trimesterde 450 ekstra kalori ekleyin',
      'En tutarlı takip için günün aynı saatinde, benzer kıyafetlerle, ideal olarak haftada bir kez tartılın',
      'Günde 8-10 bardak su ile hidrate kalın, yeterli hidrasyon amniyotik sıvı seviyelerini destekler ve sıvı tutulumunu azaltır',
      'Sağlık uzmanınız tarafından onaylanan ılımlı egzersize devam edin - yürüyüş veya yüzme gibi ılımlı aktivitelerden haftada 150 dakika hedefleyin',
      'Hamilelik vitaminlerinizi, özellikle folik asit (400-800 mcg) ve demir (27 mg) düzenli olarak alın',
      'Daha yüksek bir VKİ ile başlamış olsanız bile hamilelik sırasında kilo vermeye çalışmayın - önerilen aralıkta kalmaya odaklanın',
      'Ani kilo artışını (bir haftada 1 kg\'dan fazla) sağlık uzmanınıza bildirin, çünkü bu sıvı tutulması veya preeklampsiye işaret edebilir',
    ],

    faqs: [
      {
        question: 'Hamilelikte ne kadar kilo almalıyım?',
        answer:
          'Önerilen kilo alımı hamilelik öncesi VKİ\'nize bağlıdır. Tekil gebelik için: zayıf kadınlar (VKİ < 18.5) 12.5-18 kg, normal kilolu kadınlar (VKİ 18.5-24.9) 11.5-16 kg, fazla kilolu kadınlar (VKİ 25-29.9) 7-11.5 kg ve obez kadınlar (VKİ >= 30) 5-9 kg almalıdır. Bu aralıklar ACOG tarafından onaylanan IOM 2009 kılavuzlarına dayanmaktadır.',
      },
      {
        question: 'İlk trimesterde kilo kaybetmek normal mi?',
        answer:
          'Evet, özellikle sabah bulantısı veya yiyecek isteksizliği yaşıyorsanız, ilk trimesterde hafif kilo kaybı veya minimal alım oldukça yaygındır. Kilo alımının çoğu ikinci ve üçüncü trimesterlerde gerçekleşir. Toplam hamilelik kilo alımının yalnızca yaklaşık 0.5-2 kg\'ı genellikle ilk 13 haftada gerçekleşir. Ancak kilo kaybı önemliyse (vücut ağırlığının %5\'inden fazla) veya sürekli ise sağlık uzmanınıza danışın.',
      },
      {
        question: 'Önerilenden fazla kilo alıyorsam ne yapmalıyım?',
        answer:
          'Önerilen aralığın üzerinde kilo alıyorsanız, kalori kısıtlamak yerine diyetinizin kalitesine odaklanın. İşlenmiş gıdaları tam gıdalarla değiştirin, sebze alımını artırın, eklenmiş şekerleri sınırlayın ve hamilelikte güvenli egzersizlerle fiziksel olarak aktif kalın. Tıbbi rehberlik olmadan hamilelik sırasında asla kısıtlayıcı diyet başlatmayın. Kilo alım düzeninizi sağlık uzmanınızla görüşün.',
      },
      {
        question: 'İkiz gebelikte önerilen kilo alımı değişir mi?',
        answer:
          'Evet, ikiz gebelikler tekil gebeliklerden daha fazla kilo alımı gerektirir. İkiz taşıyan normal kilolu kadınlar 16.8-24.5 kg, fazla kilolu kadınlar 14.1-22.7 kg ve obez kadınlar 11.3-19.1 kg almalıdır. Artan alım, iki bebeğin, iki plasentanın ve ikiz gebelik için gereken ek kan hacmi ve sıvının büyümesini ve gelişimini destekler.',
      },
      {
        question: 'Hamilelik kilosu nereye gider?',
        answer:
          'Tam termde hamilelik kilosu yaklaşık olarak şöyle dağılır: bebek (3.4 kg), plasenta (0.7 kg), amniyon sıvısı (0.8 kg), rahim büyümesi (0.9 kg), meme dokusu (0.9 kg), artan kan hacmi (1.8 kg), anne yağ deposu (2.7 kg) ve sıvı tutulması (1.8 kg). Bu toplam yaklaşık 13 kg eder. Bu kilonun çoğu doğumdan sonraki ilk birkaç hafta içinde kaybedilir.',
      },
      {
        question: 'Doğum sonrası ne kadar hızlı kilo vermeliyim?',
        answer:
          'Çoğu kadın doğumdan hemen sonra yaklaşık 5-6 kg kaybeder (bebek, plasenta, amniyon sıvısı). Ek kilo emzirme, fiziksel aktivite ve sağlıklı beslenme yoluyla sonraki 6-12 ay boyunca kademeli olarak kaybedilir. Emziriyorsanız haftada 0.5 kg\'dan fazla vermemeyi hedefleyin. Emzirmiyorsanız haftada 0.5-1 kg kaybı genellikle güvenlidir. Hamilelik öncesi kiloya dönmek genellikle 6-12 ay sürer. Süreci acele ettirmeyin.',
      },
      {
        question: 'Hamilelikte kilo alımım konusunda ne zaman endişelenmeliyim?',
        answer:
          'Şu durumlarda sağlık uzmanınızla iletişime geçin: tek bir haftada 1 kg\'dan fazla ani kilo artışı (preeklampsi göstergesi olabilir), 2. veya 3. trimesterde 2 hafta veya daha uzun süre kilo almama, ilk trimester sonrasında kilo kaybı veya toplam alımınız önerilen aralığın önemli ölçüde dışındaysa. Ayrıca ani kilo artışına şiddetli baş ağrıları, görme değişiklikleri, üst karın ağrısı veya yüz ve ellerde belirgin şişlik eşlik ediyorsa derhal tıbbi yardım alın.',
      },
    ],
  },
};
