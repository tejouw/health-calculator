import { CalculatorContent } from '@/types/calculator';

export const a1cContent: CalculatorContent = {
  en: {
    whatIs:
      'The A1C test (also called HbA1c, glycated hemoglobin, or glycohemoglobin) is a blood test that measures your average blood sugar (glucose) levels over the past 2-3 months. Unlike daily glucose tests that provide a snapshot, A1C gives a long-term view of blood sugar control. When glucose enters the bloodstream, some of it binds to hemoglobin (the oxygen-carrying protein in red blood cells) in a process called glycation. Since red blood cells live approximately 120 days, the percentage of glycated hemoglobin reflects average glucose exposure over that period. A1C is expressed as a percentage: higher percentages indicate higher average blood glucose levels. This test is crucial for diagnosing prediabetes and diabetes, monitoring diabetes management effectiveness, and predicting risk of diabetes complications.',

    howToCalculate:
      'A1C is measured through a simple blood test that requires no fasting. The test quantifies the percentage of hemoglobin molecules that have glucose attached. The American Diabetes Association formula converts A1C to estimated average glucose (eAG): eAG (mg/dL) = (28.7 × A1C) - 46.7. For example, an A1C of 7% converts to: (28.7 × 7) - 46.7 = 154 mg/dL average glucose. To convert to mmol/L, divide mg/dL by 18.018. A1C levels are categorized: Normal < 5.7%, Prediabetes 5.7-6.4%, Diabetes ≥ 6.5%. For people with diabetes, treatment goals typically aim for A1C < 7% (individualized based on age, complications, and other factors).',

    formulaDetails:
      'A1C works through the process of glycation—glucose binds to hemoglobin in red blood cells over their approximately 120-day lifespan. Two main standardization systems exist: NGSP (National Glycohemoglobin Standardization Program), used primarily in the United States, reports A1C as a percentage; IFCC (International Federation of Clinical Chemistry), used internationally, reports in mmol/mol. An NGSP value of 7.0% equals an IFCC value of 53 mmol/mol. The estimated Average Glucose (eAG) is derived from A1C using two equivalent formulas: eAG (mg/dL) = (A1C% × 20.582) − 1.526, or eAG (mmol/L) = (A1C% × 1.194) − 0.0846. This conversion bridges the gap between laboratory A1C results and the daily glucose readings patients see on their blood sugar meters, making long-term trends easier to understand and act upon.',

    categories: [
      {
        range: '< 5.7%',
        label: 'Normal',
        description:
          'Blood sugar levels are within a healthy range. Maintain healthy lifestyle habits including a balanced diet and regular physical activity to keep A1C in the normal zone.',
        color: '#10B981',
      },
      {
        range: '5.7% – 6.4%',
        label: 'Pre-diabetes',
        description:
          'Blood sugar is higher than normal but not yet at the diabetes threshold. Lifestyle changes—improved diet, regular exercise, and weight management—can often reverse or delay progression to diabetes.',
        color: '#F59E0B',
      },
      {
        range: '≥ 6.5%',
        label: 'Diabetes',
        description:
          'A1C meets the diagnostic threshold for diabetes. A medical evaluation, personalized treatment plan, and ongoing monitoring with healthcare guidance are essential.',
        color: '#EF4444',
      },
      {
        range: '< 7.0% (Diabetic Target)',
        label: 'Well-Controlled Diabetes',
        description:
          'For individuals already managing diabetes, an A1C below 7% indicates good blood sugar control and significantly lower risk of long-term complications. This target is individualized by your doctor.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Your A1C percentage represents your average blood glucose over the past 2-3 months, making it one of the most reliable indicators of long-term glycemic control. Each 1% increase in A1C corresponds to roughly 25-30 mg/dL higher average blood glucose. The relationship between A1C and complications is well-documented: for every 1% reduction, heart disease risk drops by about 14%, retinopathy risk decreases by 37%, nephropathy risk falls by 33%, and neuropathy risk reduces by 43%. For people without diabetes, the goal is staying below 5.7%. For those managing diabetes, targets are personalized—younger, healthier individuals may aim for below 6.5%, while elderly patients or those with complications may have a relaxed target of 7.5–8% to avoid hypoglycemia. Always discuss your personal A1C target with your healthcare provider.',

    limitations:
      'A1C testing has several important limitations. Conditions that alter red blood cell lifespan can skew results: iron deficiency anemia, hemolytic anemias, recent blood transfusions, and bleeding events cause falsely low A1C. Hemoglobin variants such as sickle cell trait interfere with certain testing methods. Kidney disease and liver disease can also affect accuracy. Critically, A1C does not reveal glucose variability—a person may have a 7% A1C with steady levels or with dangerous spikes and drops, both showing the same number. This is why continuous glucose monitoring (CGM) is an increasingly valuable complement. A1C is not recommended for diagnosing diabetes during pregnancy because hormones alter red blood cell turnover. Altitude, certain medications, and even recent intense exercise can influence results. Despite these limitations, A1C remains the most practical test for long-term blood sugar monitoring.',

    healthRisks:
      'Persistently elevated A1C indicates prolonged high blood sugar, which gradually damages blood vessels and nerves throughout the body. Major complications of uncontrolled diabetes include: cardiovascular disease—heart attack and stroke risk doubles or triples; diabetic retinopathy—damage to retinal blood vessels and the leading cause of blindness in working-age adults; diabetic nephropathy—progressive kidney damage that can progress to end-stage renal disease requiring dialysis or transplant; peripheral neuropathy—nerve damage causing numbness, pain, and loss of sensation starting in the feet; and impaired wound healing that can lead to serious infections and amputations. Even pre-diabetes (A1C 5.7–6.4%) carries elevated cardiovascular risk. The encouraging finding is that these complications are largely preventable: each 1% reduction in A1C decreases overall complication risk by 20–40%, and intervention during pre-diabetes can prevent progression to diabetes by up to 58%.',

    alternativeMeasures:
      'Several tests complement or replace A1C depending on the clinical situation. Fasting Plasma Glucose (FPG) measures blood sugar after at least 8 hours without eating—126 mg/dL or above indicates diabetes. The Oral Glucose Tolerance Test (OGTT) measures blood sugar 2 hours after a glucose drink and is the gold standard for diagnosis, required specifically for diagnosing gestational diabetes. Random Blood Glucose can be taken at any time and is useful for screening. Continuous Glucose Monitoring (CGM) systems—such as Dexcom or FreeStyle Libre—use sensors to track glucose every few minutes, revealing variability and patterns A1C cannot show. The "Time in Range" metric (percentage of time glucose stays between 70–180 mg/dL) from CGM is increasingly recognized as more informative than A1C alone. Insulin sensitivity testing (HOMA-IR) evaluates how efficiently the body uses insulin and helps identify insulin resistance.',

    demographicDifferences:
      'Diabetes risk and A1C interpretation vary across populations. Age is the most significant factor: risk increases sharply after 45, with the highest incidence among adults over 65. A1C targets for older adults are often relaxed (< 8%) because aggressive glucose control raises hypoglycemia risk. Ethnicity plays an important role—African American, Hispanic/Latino, American Indian/Alaska Native, Asian American, and Pacific Islander populations have substantially higher rates of type 2 diabetes. Research indicates that individuals of African descent may register slightly higher A1C at identical glucose levels, potentially affecting screening accuracy. Pregnancy dramatically changes glucose metabolism: gestational diabetes affects 6–9% of pregnancies and must be diagnosed through OGTT, not A1C. Women have a higher lifetime risk of type 2 diabetes, and menopause further increases this risk. Socioeconomic factors—diet quality, physical activity access, and healthcare availability—profoundly influence both risk and management outcomes.',

    medicalDisclaimer:
      'This A1C calculator provides educational estimates only and does not constitute medical diagnosis. A1C must be measured through laboratory blood tests performed by healthcare professionals. Results from this calculator should not be used to diagnose diabetes, adjust medications, or make treatment decisions without consulting your physician. Certain conditions can affect A1C accuracy including anemia, kidney disease, recent blood transfusions, hemoglobin variants, pregnancy, and recent blood loss. Only qualified healthcare providers can interpret A1C in context of your complete medical history.',

    references: [
      'American Diabetes Association - Standards of Medical Care in Diabetes',
      'Nathan DM, et al. Translating the A1C assay into estimated average glucose values. Diabetes Care. 2008;31(8):1473-1478.',
      'Centers for Disease Control and Prevention - A1C Diagnostic Criteria',
      'International Diabetes Federation - Global Guidelines for Type 2 Diabetes',
    ],

    tips: [
      'Get A1C tested at least twice yearly if meeting treatment goals, quarterly if not',
      'Combine A1C testing with daily glucose monitoring for comprehensive diabetes management',
      'A1C reflects average glucose - it won\'t show dangerous highs or lows that occur briefly',
      'Even small A1C reductions (0.5-1%) significantly decrease complication risks',
      'Individualize A1C targets: tighter control (< 6.5%) for some, relaxed (< 8%) for others',
      'Track your diet, exercise, and medication adherence to identify patterns that affect your A1C',
      'Pair A1C results with CGM data for the most complete picture of blood sugar management',
    ],

    faqs: [
      {
        question: 'What is a good A1C level?',
        answer:
          'For people without diabetes, normal A1C is below 5.7%. Prediabetes is 5.7-6.4%, and diabetes is diagnosed at 6.5% or higher. For those with diabetes, the American Diabetes Association recommends a general target of < 7%, but this should be individualized. Younger, healthier patients might aim for < 6.5%, while elderly patients or those with complications might target < 8%. Discuss your personalized A1C goal with your healthcare provider.',
      },
      {
        question: 'How often should I get my A1C tested?',
        answer:
          'Test frequency depends on your diabetes status and control. For people with diabetes meeting treatment goals: at least twice yearly. For those not meeting goals or changing treatments: every 3 months. For prediabetes screening: annually or as recommended by your doctor. Always follow your healthcare provider\'s specific recommendations.',
      },
      {
        question: 'How can I lower my A1C?',
        answer:
          'Lowering A1C requires sustained blood glucose control through: (1) Healthy eating - reduce refined carbohydrates, increase fiber, control portions; (2) Regular exercise - 150 minutes/week of moderate activity improves insulin sensitivity; (3) Weight loss - losing 5-10% of body weight significantly improves A1C; (4) Medication adherence; (5) Stress management and adequate sleep. Small improvements compound - reducing A1C by just 1% decreases heart attack risk by 14%.',
      },
      {
        question: 'What is the difference between A1C and daily blood sugar testing?',
        answer:
          'A1C provides a 2-3 month average of blood glucose levels, while daily blood sugar tests—whether fingerstick or continuous glucose monitoring—show a moment-in-time snapshot of where your glucose is right now. The key limitation of A1C is that it can mask dangerous highs and lows: two people with the same A1C of 7% may have very different glucose patterns, one steady and one swinging wildly. Both tests serve important but different roles—A1C is best for evaluating long-term trends and guiding treatment decisions, while daily testing or CGM is essential for making real-time decisions about meals, activity, and insulin dosing.',
      },
      {
        question: 'Can I have diabetes with a normal A1C?',
        answer:
          'Yes—A1C can appear normal in the early stages of diabetes, particularly if you have conditions that alter red blood cell lifespan such as iron deficiency anemia, hemolytic anemias, or recent blood transfusions. In these cases, A1C may underestimate true glucose exposure. Fasting plasma glucose and the oral glucose tolerance test (OGTT) can detect diabetes that A1C misses because they measure glucose directly rather than relying on hemoglobin turnover. A1C is also less reliable during pregnancy, when hormonal changes accelerate red blood cell production and cause falsely low readings. If you have risk factors for diabetes but a normal A1C, ask your doctor whether additional testing is appropriate.',
      },
      {
        question: 'How does A1C compare to fasting blood sugar for diagnosis?',
        answer:
          'Both A1C and fasting blood sugar (FPG) are accepted diagnostic tests for diabetes. A fasting blood sugar of 126 mg/dL or higher, or an A1C of 6.5% or higher, meets the diagnostic threshold. The oral glucose tolerance test (OGTT)—which measures blood sugar 2 hours after a standardized glucose drink—is considered the gold standard because it most closely mimics real-world carbohydrate loads. If one test gives a borderline result, guidelines recommend repeating it or confirming with a second test type. The preferred diagnostic method depends on the clinical situation: A1C is convenient because it requires no fasting, while OGTT is specifically required for diagnosing gestational diabetes.',
      },
      {
        question: 'What foods have the biggest impact on A1C?',
        answer:
          'Refined carbohydrates cause the largest and most rapid spikes in blood glucose—these include white bread, white rice, sugary beverages, pastries, and processed snack foods. Foods high in fiber (such as vegetables, legumes, and whole grains), lean proteins, and healthy fats produce slower, more gradual glucose rises and have a smaller overall impact on A1C. Low-glycemic carbohydrates—like sweet potatoes, oats, and most fruits—are better choices than their high-glycemic counterparts. Importantly, portion size matters as much as food type: a large serving of a low-glycemic food can raise blood sugar more than a small serving of a high-glycemic one. Eating regular, balanced meals throughout the day also helps prevent the glucose swings that contribute to a higher A1C over time.',
      },
    ],
  },
  tr: {
    whatIs:
      'A1C testi (HbA1c, glikozillenmiş hemoglobin veya glikohemoglobin olarak da adlandırılır), son 2-3 aydaki ortalama kan şekerinizi (glukoz) ölçen bir kan testidir. Anlık görüntü sağlayan günlük glukoz testlerinin aksine, A1C kan şekeri kontrolünün uzun vadeli bir görünümünü verir. Glukoz kan dolaşımına girdiğinde, bir kısmı glikasyon adı verilen bir süreçte hemoglobine bağlanır. Kırmızı kan hücreleri yaklaşık 120 gün yaşadığından, glikozillenmiş hemoglobin yüzdesi o dönemdeki ortalama glukoz maruziyetini yansıtır.',

    howToCalculate:
      'A1C, oruç gerektirmeyen basit bir kan testi ile ölçülür. Amerikan Diyabet Derneği formülü A1C\'yi tahmini ortalama glukoza dönüştürür: eAG (mg/dL) = (28.7 × A1C) - 46.7. Örneğin, %7 A1C: (28.7 × 7) - 46.7 = 154 mg/dL ortalama glukoz. A1C seviyeleri kategorize edilir: Normal < %5.7, Prediyabet %5.7-6.4, Diyabet ≥ %6.5.',

    formulaDetails:
      'A1C, kırmızı kan hücreleri yaklaşık 120 gün yaşadığı süre içinde glukozun hemoglobine bağlanma süreci olan glikasyon sayesinde çalışır. İki ana standardizasyon sistemi mevcuttur: Ağırlıklı olarak Amerika\'da kullanılan NGSP (Ulusal Glikohemoglobin Standardizasyon Programı) sonuçları yüzde olarak raporlar; uluslararası alanda kullanılan IFCC (Uluslararası Klinik Kimya Federasyonu) ise mmol/mol olarak raporlar. Bir NGSP değeri olan %7.0, 53 mmol/mol IFCC değerine eşittir. Tahmini Ortalama Glukoz (eAG) iki eşdeğer formül ile türetilir: eAG (mg/dL) = (A1C% × 20.582) − 1.526 veya eAG (mmol/L) = (A1C% × 1.194) − 0.0846. Bu dönüşüm, laboratuvar A1C sonuçları ile hastaların kan şeker ölçüm cihazlarında gördüğü günlük glukoz okuma değerleri arasındaki boşluğu doldurmakta ve uzun vadeli eğilimlerin anlaşılmasını kolaylaştırmaktadır.',

    categories: [
      {
        range: '< %5.7',
        label: 'Normal',
        description:
          'Kan şekeri seviyeleri sağlıklı bir aralıkta bulunmaktadır. A1C\'yi normal aralıkta tutmak için dengeli beslenme ve düzenli fiziksel aktivite gibi sağlıklı yaşam alışkanlıklarını sürdürün.',
        color: '#10B981',
      },
      {
        range: '%5.7 – %6.4',
        label: 'Prediyabet',
        description:
          'Kan şekeri normalin üzerinde ancak henüz diyabet sınırında değildir. İyileştirilmiş beslenme, düzenli egzersiz ve kilo kontrolü gibi yaşam tarzı değişiklikleri çoğu zaman diyabete ilerleyişi tersine çevirebilir veya geciktirebilir.',
        color: '#F59E0B',
      },
      {
        range: '≥ %6.5',
        label: 'Diyabet',
        description:
          'A1C diyabet tanı eşiğini karşılamaktadır. Sağlık profesyonelinin rehberliğinde tıbbi değerlendirme, kişisel tedavi planı ve süregelen izleme büyük önem taşımaktadır.',
        color: '#EF4444',
      },
      {
        range: '< %7.0 (Diyabet Hedefi)',
        label: 'İyi Kontrol Altında Diyabet',
        description:
          'Halihazırda diyabeti yönetilen bireyler için %7\'nin altında bir A1C, iyi kan şekeri kontrolünü ve uzun vadeli komplikasyonlara karşı önemli ölçüde düşük riski gösterir. Bu hedef doktorunuzun yönlendirmesine göre bireyselleştirilir.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'A1C yüzdeniz, son 2-3 aydaki ortalama kan glukozunuzu temsil etmekte olup uzun vadeli gliketik kontrol için en güvenilir göstergelerden birini oluşturmaktadır. A1C\'deki her %1 artış, yaklaşık 25-30 mg/dL daha yüksek ortalama kan glukozuna karşılık gelir. A1C ile komplikasyonlar arasındaki ilişki iyi belgelenmiştir: her %1 azalmayla kalp hastalığı riski yaklaşık %14 düşer, retinopati riski %37 azalır, nefropati riski %33 düşer ve nöropati riski %43 azalır. Diyabeti olmayan kişiler için hedef %5.7\'nin altında kalmaktır. Diyabeti yönetenlerin hedefleri ise bireyselleştirilmiştir—daha genç ve sağlıklı bireyler %6.5\'in altına hedefleyebilirken, yaşlı hastalar veya komplikasyonu olanlar hipoglisemi riskini azaltmak için %7.5–%8 hedef alabilir.',

    limitations:
      'A1C testinin birçok önemli sınırlılığı mevcuttur. Kırmızı kan hücre yaşam süresi hakkında endişe yaratan koşullar sonuçları bozabilir: demir eksikliği anemisi, hemolitik anemiler, son zamanda yapılan kan nakliyesi ve kanama olayları yanlış düşük A1C sonuçlarına yol açabilir. Hemoglobin varyantları gibi orak hücre özellikleri belirli test yöntemlerini etkileyebilir. Böbrek hastalığı ve karaciğer hastalığı da doğruluğu olumsuz etkileyebilir. Kritik bir nokta olarak A1C, glukoz variabilitesini ortaya koyamaz: bir kişinin %7 A1C\'si istikrarlı seviyelerle de, tehlikeli yükselmeler ve düşüşlerle de aynı sonuç verebilir. Bu nedenle sürekli glukoz izleme sistemi (CGM) giderek artan bir tamamlayıcı önem kazanmaktadır. A1C, hamilelik süresince diyabet tanısı için önerilmemektedir çünkü hormonal değişimler kırmızı kan hücre yenilenmesini etkiler.',

    healthRisks:
      'Sürekli yükselen A1C, uzun süreli yüksek kan şekeri anlamına gelmekte olup vücudun tamamında kan damarlarını ve sinir dokularını yavaş yavaş hasar verir. Kontrolsüz diyabete bağlı başlıca komplikasyonlar şunlardır: kardiyovasküler hastalık—kalp krizi ve inme riskinin iki ya da üç katına çıkması; diyabetik retinopati—retina kan damarlarının hasar görmesi ve çalışma çağındaki yetişkinlerde körlüğün en yaygın nedeni; diyabetik nefropati—diyaliz veya böbrek nakli gerektirebilecek ileri böbrek hastalığına doğru ilerleyebilen süregelen böbrek hasar; periferik nöropati—ayaklardan başlayarak uyuşma, ağrı ve duyu kaybına neden olan sinir hasar; ve yaralara zayıf iyileşme ile ciddi enfeksiyonlar ve amputasyona yol açma. Prediyabet (%5.7–%6.4 A1C) de artmış kardiyovasküler risk taşır. İyi haberler ise şöyle: her %1 A1C azalma, toplam komplikasyon riskini %20–%40 düşürür ve prediyabet aşamasında yapılan müdahale diyabete ilerlemeyi %58\'e kadar önleyebilir.',

    alternativeMeasures:
      'Klinik duruma göre A1C\'yi tamamlayan veya yerine kullanan birçok test mevcuttur. Açlık Plazma Glukoz (FPG) testi, en az 8 saat aç kalmanın ardından kan şekerini ölçür; 126 mg/dL veya üzeri diyabet işareti verir. Oralsürgün Glukoz Tolerans Testi (OGTT), standartlaştırılmış glukoz içecek alındıktan 2 saat sonra kan şekerini ölçür ve tanı için altın standart olarak kabul edilir; özellikle gestasyonel diyabeti teşhis etmek için zorunludur. Rastgele Kan Glukoz testi herhangi bir zamanda alınabilir ve tarama amacıyla yararlıdır. Sürekli Glukoz İzleme (CGM) sistemleri—Dexcom veya FreeStyle Libre gibi—birkaç dakika aralıklarla glukoz takip eden sensörler kullanan cihazlar olup A1C\'nin gösteremediği variabilite ve örüntüleri ortaya koymaktadır. CGM\'den elde edilen "Hedef Aralıkta Geçirilen Süre" metriği (%70–%180 mg/dL arasında glukoz kalma süresi yüzdesi) A1C\'ye kıyasla daha bilgilendirici bir ölçüt olarak giderek kabul görmektedir.',

    demographicDifferences:
      'Diyabet riski ve A1C yorumu farklı nüfus grupları arasında önemli farklılıklar gösterir. Yaş, en belirleyici etkendir: 45 yaşının üstünde risk keskin biçimde artmakta; en yüksek orantı 65 yaş üstü yetişkinlerde görülmektedir. Yaşlı yetişkinler için A1C hedefleri çoğunlukla daha gevşek belirlenir (< %8) çünkü agresif glukoz kontrolü hipoglisemi riskini artırır. Etnik köken de kritik bir rol oynamaktadır: Afrika kökenli Amerikalılar, Hispanik/Latino, Yerli Amerikan/Alaska Yerlilik, Asya kökenli Amerikalı ve Pasifik Adaları nüfus grupları tip 2 diyabet için önemli ölçüde daha yüksek oran taşır. Araştırmalar, Afrika kökenli bireyler için aynı glukoz seviyelerinde biraz daha yüksek A1C kayıt edilebileceğini, bunun tarama doğruluğunu olumsuz etkileyebileceğini ortaya koymaktadır. Hamilelik, glukoz metabolizmasını dramatik biçimde değiştirir: gestasyonel diyabet hamilelik vakaların %6–%9\'unda görülür ve OGTT ile, A1C ile değil, teşhis edilmeli; kadınlar tip 2 diyabet için daha yüksek yaşam boyu risk taşır ve menopoz bu riski daha da artırır.',

    medicalDisclaimer:
      'Bu A1C hesaplayıcısı yalnızca eğitici tahminler sağlar ve tıbbi teşhis oluşturmaz. A1C, sağlık profesyonelleri tarafından yapılan laboratuvar kan testleri ile ölçülmelidir. Bu hesaplayıcıdan elde edilen sonuçlar, doktorunuza danışmadan diyabet teşhisi koymak, ilaçları ayarlamak veya tedavi kararları almak için kullanılmamalıdır.',

    references: [
      'Amerikan Diyabet Derneği - Diyabette Tıbbi Bakım Standartları',
      'Hastalık Kontrol ve Önleme Merkezleri - A1C Tanı Kriterleri',
    ],

    tips: [
      'Tedavi hedeflerini karşılıyorsanız yılda en az iki kez A1C testi yaptırın',
      'A1C testini günlük glukoz izleme ile birleştirin',
      'Küçük A1C azalmaları bile komplikasyon risklerini önemli ölçüde azaltır',
      'A1C ortalama kan şekerini yansıtır ve kısa süreli tehlikeli yükselmeler ile düşüşleri göstermez',
      'A1C hedeflerini bireyselleştirin: bazıları için daha sıkı kontrol (< %6.5), diğerleri için daha gevşek (< %8)',
      'Diyetinizi, egzersiz rutininizi ve ilaç uyumunuzu takip ederek A1C\'yi etkileyen örüntüleri tespit edin',
      'A1C sonuçlarını kan şekeri yönetiminin en eksiksiz resmi için CGM verileriyle birleştirin',
    ],

    faqs: [
      {
        question: 'İyi bir A1C seviyesi nedir?',
        answer:
          'Diyabeti olmayan kişiler için normal A1C %5.7\'nin altındadır. Prediyabet %5.7-6.4, diyabet %6.5 veya daha yüksektir. Diyabeti olanlar için genel hedef < %7\'dir, ancak bu bireyselleştirilmelidir.',
      },
      {
        question: 'A1C testimi ne sıklıkla yaptırmalıyım?',
        answer:
          'Tedavi hedeflerini karşılayan diyabetli kişiler için: yılda en az iki kez. Hedefleri karşılamayanlar için: her 3 ayda bir. Prediyabet taraması için: yıllık.',
      },
      {
        question: 'A1C\'mi nasıl düşürebilirim?',
        answer:
          'A1C\'yi düşürmek için: (1) Sağlıklı beslenme - rafine karbonhidratları azaltın; (2) Düzenli egzersiz - haftada 150 dakika; (3) Kilo kaybı - vücut ağırlığının %5-10\'unu kaybetmek; (4) İlaç uyumu; (5) Stres yönetimi ve yeterli uyku.',
      },
      {
        question: 'A1C ile günlük kan şekeri testi arasındaki fark nedir?',
        answer:
          'A1C, kan glukoz seviyelerinin 2-3 aylık ortalamasını verir; günlük kan şekeri testleri ise—parmaktan kan alma veya sürekli glukoz izleme yoluyla—kan şekerinin şu anda nerede olduğunun anlık bir görüntüsünü sunur. A1C\'nin önemli bir sınırlılığı, tehlikeli yükselmeler ve düşüşleri gizleyebilmesidir: aynı %7 A1C sonucuna sahip iki kişinin biri sabit, diğeri ise wildly salınan bir glukoz örüntüsüne sahip olabilir. Her iki test de farklı ancak kritik roller üstlenir—A1C uzun vadeli eğilimleri değerlendirmek ve tedavi kararlarına yönlendirmek için en uygundur; günlük test veya CGM ise öğünler, aktivite ve insülin dozlama gibi anlık kararlar için vazgeçilmezidir.',
      },
      {
        question: 'Normal A1C\'ye sahip olmak ve yine de diyabet yaşamak mümkün mü?',
        answer:
          'Evet—A1C özellikle diyabeti olmak üzere erken evreler de dahil olmak üzere yanlış normal sonuç verebilir; özellikle kırmızı kan hücre yaşam süresi etkileyen koşullar varsa: demir eksikliği anemisi, hemolitik anemiler veya yakın zamanda yapılan kan nakliyesi bu duruma yol açabilir. Bu vakalarda A1C, gerçek glukoz maruziyetini küçük gösterebilir. Açlık plazma glukoz testi ve oralsürgün glukoz tolerans testi (OGTT), hemoglobin dönüşümüne bağlı kalmak yerine doğrudan glukoza dayandığı için A1C\'nin tespit edemediği diyabeti yakalayabilir. A1C, hamilelik süresince de hormonsal değişimler nedeniyle yanlış düşük sonuçlar verebilir. Diyabete yol açacak risk faktörlerine sahip olup normal bir A1C sonucu aldıysanız, doktorunuza ek test yaptırmayı sormak faydalı olabilir.',
      },
      {
        question: 'Diyabet tanısında A1C ile açlık kan şekeri nasıl karşılaştırılır?',
        answer:
          'A1C ve açlık kan şekeri (FPG) her ikisi de diyabet tanısında kabul edilen testlerdir. Açlık kan şekerinizin 126 mg/dL veya üzeri olması, ya da A1C\'nın %6.5 veya üzeri çıkması tanı eşiğini karşılar. Oralsürgün Glukoz Tolerans Testi (OGTT)—standartlaştırılmış glukoz içecek alındıktan 2 saat sonra kan şekerinin ölçülmesi—altın standart olarak kabul edilir çünkü gerçek dünya koşullarında karbonhidrat alımını en iyi biçimde simüle eder. Bir test sınırda bir sonuç verirse yöntemler tekrar yapılmasını veya ikinci bir test türü ile doğrulanmasını önerir. Tercih edilen tanı yöntemi klinik duruma göre değişir: A1C, oruç tutmak gerekmediğinden kullanışlıdır; OGTT ise özellikle gestasyonel diyabet tanısında zorunludur.',
      },
      {
        question: 'Hangi yiyecekler A1C üzerinde en büyük etkiyi yaratır?',
        answer:
          'Rafine karbonhidratlar, kan glukozunda en büyük ve en hızlı yükselmeler yaratır; bunlar arasında beyaz ekmek, beyaz pirinç, şekerli içecekler, pastalar ve işlenmiş atıştırmalık yiyecekler sayılabilir. Yüksek lifli yiyecekler (sebzeler, baklagiller ve tam tahıllar), yağsız proteinler ve sağlıklı yağlar daha yavaş ve daha kademeli kan şekeri yükselmelerine yol açar ve A1C üzerinde daha az genel etki bırakır. Düşük glisetik karbonhidratlar—tatlı patates, yulaf ve çoğu meyve gibi—yüksek glisetik muadillerine göre daha iyi tercihlerdir. Önemli bir nokta olarak belirtmek gerekir ki, porsiyon boyutu, yiyecek türü kadar önemlidir: düşük glisetik bir yiyecek bile büyük bir porsiyon alındığında kan şekerini yüksek glisetik bir yiyecegün küçük bir porsiyonuna kıyasla daha fazla artırabilir. Gün içinde düzenli, dengeli öğünler yemek de A1C\'yi kötüleştiren glukoz dalgalanmalarının önlenmesine yardımcı olur.',
      },
    ],
  },
};
