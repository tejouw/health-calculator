import { CalculatorContent } from '@/types/calculator';

export const diabetesRiskContent: CalculatorContent = {
  en: {
    whatIs:
      'The Diabetes Risk Calculator is based on the Finnish Diabetes Risk Score (FINDRISC), a scientifically validated screening tool that estimates an adult\'s 10-year risk of developing type 2 diabetes. Developed in Finland by Lindström and Tuomilehto in 2003 and later validated in populations across Europe, Asia, and the Americas, FINDRISC uses eight simple questions about age, body composition, physical activity, diet, blood pressure, blood glucose history, and family history. Because it requires no blood tests, it is widely used in primary care, workplace wellness programs, and public health campaigns. The International Diabetes Federation and World Health Organization recommend FINDRISC as a first-line screening tool. A higher score means a higher probability of type 2 diabetes within 10 years; however, it also highlights modifiable factors you can change to dramatically reduce your risk.',

    howToCalculate:
      'To calculate your diabetes risk, answer eight questions honestly: (1) your current age, (2) your body mass index (BMI), (3) waist circumference measured at the level of the navel, (4) whether you engage in at least 30 minutes of physical activity daily, (5) whether you eat vegetables, fruits, or berries every day, (6) whether you are currently taking medication for high blood pressure, (7) whether you have ever had elevated blood glucose detected by a doctor, and (8) whether any blood relatives have been diagnosed with diabetes. Each answer contributes points, and the total score (0-26) indicates your 10-year risk category, from low to very high.',

    formulaDetails:
      'The FINDRISC score is calculated by summing points from eight components. Age contributes 0 points if under 45, 2 points for 45-54, 3 points for 55-64, and 4 points for 65 and older. BMI adds 0 points if under 25 kg/m², 1 point for 25-30 kg/m², and 3 points if above 30 kg/m². Waist circumference is scored differently by sex: men get 0 points if under 94 cm, 3 points for 94-102 cm, and 4 points above 102 cm; women score 0 points under 80 cm, 3 points for 80-88 cm, and 4 points above 88 cm. Physical inactivity adds 2 points (if you do not engage in at least 30 minutes of daily activity). Not eating vegetables and fruits daily adds 1 point. Currently taking blood pressure medication adds 2 points. A prior finding of high blood glucose adds 5 points. Family history adds 0 points for none, 3 points for a second-degree relative (grandparent, aunt, uncle, cousin), and 5 points for a first-degree relative (parent, sibling, child). The maximum possible score is 26. Risk categories are: below 7 is low (1% 10-year risk), 7-11 is slightly elevated (4%), 12-14 is moderate (17%), 15-20 is high (33%), and above 20 is very high (50%).',

    interpretation:
      'Your FINDRISC score tells you your estimated probability of developing type 2 diabetes in the next 10 years, but it also reveals which risk factors contribute most to your personal risk profile. A low score (under 7) means you can continue your current lifestyle while periodically reassessing, especially as you age. A slightly elevated score (7-11) is a signal to start paying closer attention to diet and physical activity before risk rises further. Moderate risk (12-14) should prompt a discussion with your doctor about baseline blood tests and a structured prevention plan, because many people in this range already have undiagnosed prediabetes. A high score (15-20) indicates that medical evaluation is important, and fasting glucose or HbA1c testing is strongly recommended. A very high score (over 20) is an urgent signal for prompt medical care because many people in this group already have undiagnosed type 2 diabetes. Crucially, several components (BMI, waist, activity, diet) are modifiable; lifestyle changes can reduce your total score and your actual risk.',

    limitations:
      'FINDRISC is a general screening tool, not a diagnostic test, and has several important limitations. It was originally developed in a Finnish (Northern European) population, so while it has been validated in many other populations, its absolute risk percentages may be slightly different in Asian, African, Middle Eastern, Hispanic, and Indigenous populations, who often develop type 2 diabetes at lower BMI thresholds. The score does not capture gestational diabetes history, polycystic ovary syndrome (PCOS), certain ethnicities with especially high diabetes risk, chronic use of medications that affect glucose metabolism (such as steroids or antipsychotics), severe sleep apnea, or mental health conditions that independently increase diabetes risk. It also does not account for type 1 diabetes, which has a different mechanism and age profile. FINDRISC cannot distinguish between prediabetes and established undiagnosed diabetes; both can produce high scores. People with existing diabetes should not use this tool; they should follow their treatment plan and speak with their doctor. Finally, a low score does not guarantee you will not develop diabetes, and a high score does not mean you will definitely develop it. Individual outcomes depend on the specific combination of genetics, behavior, and environment.',

    healthRisks:
      'Type 2 diabetes is a progressive metabolic disease that develops when the body becomes resistant to insulin or the pancreas cannot produce enough of it. Over time, sustained high blood glucose damages blood vessels and nerves, leading to serious complications. Cardiovascular disease is the leading cause of death in people with diabetes: coronary artery disease, heart attack, and stroke risks are two to four times higher than in people without diabetes. Diabetic retinopathy is the leading cause of adult-onset blindness. Diabetic nephropathy (kidney disease) is the leading cause of end-stage renal failure requiring dialysis. Peripheral neuropathy causes pain, numbness, and foot ulcers that can lead to amputation. Diabetes also increases the risk of certain cancers, dementia, depression, infections, non-alcoholic fatty liver disease, and erectile dysfunction. People with untreated diabetes lose an average of 10-12 years of life expectancy. The good news is that most of these complications are preventable with early detection and good glucose control. Even modest weight loss (5-7% of body weight) combined with regular physical activity can reduce progression from prediabetes to diabetes by nearly 60%, according to the Diabetes Prevention Program study.',

    alternativeMeasures:
      'FINDRISC is one of several validated tools for diabetes risk assessment. Other widely used screening instruments include the American Diabetes Association (ADA) Risk Test, the Cambridge Diabetes Risk Score, the QDiabetes score (used in the UK), and the Australian Type 2 Diabetes Risk Assessment Tool (AUSDRISK). Each has slightly different questions and scoring but similar overall performance. For clinical diagnosis or confirmation, blood-based tests are required: fasting plasma glucose (FPG) measures blood sugar after at least 8 hours without food, with values of 100-125 mg/dL indicating prediabetes and 126 mg/dL or above indicating diabetes. Hemoglobin A1c (HbA1c) reflects average blood glucose over the past 2-3 months, with 5.7-6.4% indicating prediabetes and 6.5% or above indicating diabetes. The oral glucose tolerance test (OGTT) measures glucose response two hours after a standardized glucose drink. Random plasma glucose can also be used, particularly with symptoms. Metabolic panels additionally measure insulin resistance markers such as fasting insulin, HOMA-IR, triglycerides, and HDL cholesterol. Continuous glucose monitors (CGMs) provide detailed day-to-day patterns. Combining FINDRISC with these objective measures gives the most complete picture of metabolic health.',

    demographicDifferences:
      'Diabetes risk varies significantly across populations. People of South Asian, East Asian, African, Caribbean, Hispanic, Middle Eastern, Pacific Islander, and Indigenous descent generally develop type 2 diabetes at lower BMI values than people of European descent. For example, the WHO recommends lower BMI cutoffs (23 for overweight, 27.5 for obesity) for Asian populations because they develop insulin resistance and diabetes with less visible body fat. Age is another major factor: while diabetes has traditionally been considered an adult disease, rates of type 2 diabetes in children and adolescents are rising rapidly due to childhood obesity. Women who experienced gestational diabetes have a 7- to 10-fold increased lifetime risk of type 2 diabetes. Women with polycystic ovary syndrome (PCOS) also have substantially elevated risk. Men tend to develop diabetes at lower BMIs than women, partly due to body fat distribution. Socioeconomic factors matter as well: limited access to healthy food, safe places to exercise, and quality healthcare are associated with higher diabetes rates. Stress, sleep deprivation, and shift work also contribute. These differences mean that a particular FINDRISC score may reflect different absolute risk levels for different people, and personalized medical assessment is always best.',

    medicalDisclaimer:
      'This Diabetes Risk Calculator is provided for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The FINDRISC tool is a screening instrument, not a diagnostic test. A low score does not rule out diabetes, and a high score does not confirm it. Only a qualified healthcare professional can diagnose type 2 diabetes, prediabetes, or related conditions through appropriate blood tests and clinical evaluation. If you are concerned about your risk, experience symptoms such as frequent urination, unusual thirst, unexplained weight loss, blurred vision, or persistent fatigue, or have other risk factors, please consult your doctor promptly. Do not start, stop, or change medication or lifestyle interventions based solely on this calculator. Pregnant women, children, people with existing diabetes, and those with other serious medical conditions should always speak with a qualified clinician for individualized guidance.',

    references: [
      'Lindström J, Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care. 2003;26(3):725-731.',
      'International Diabetes Federation (IDF) - Global Diabetes Risk Assessment Guidelines',
      'World Health Organization (WHO) - Global Report on Diabetes',
      'American Diabetes Association - Standards of Medical Care in Diabetes',
      'Knowler WC, Barrett-Connor E, et al. Reduction in the incidence of type 2 diabetes with lifestyle intervention or metformin. N Engl J Med. 2002;346(6):393-403.',
      'Tuomilehto J, Lindström J, et al. Prevention of type 2 diabetes mellitus by changes in lifestyle among subjects with impaired glucose tolerance. N Engl J Med. 2001;344(18):1343-1350.',
      'Centers for Disease Control and Prevention (CDC) - National Diabetes Statistics Report',
    ],

    tips: [
      'Aim for at least 150 minutes of moderate-intensity physical activity per week, such as brisk walking, cycling, or swimming',
      'Fill half your plate with non-starchy vegetables at every meal, and choose whole grains, lean protein, and healthy fats',
      'If you are overweight, losing 5-7% of your body weight can reduce your diabetes risk by up to 58%',
      'Limit added sugars and sugary beverages, which cause rapid blood glucose spikes and contribute to insulin resistance',
      'Prioritize sleep quality - aim for 7-9 hours per night, as chronic sleep deprivation is linked to insulin resistance',
      'Manage stress through meditation, deep breathing, yoga, or hobbies, since chronic stress hormones raise blood glucose',
      'Have regular check-ups that include fasting glucose and HbA1c testing, especially if your FINDRISC score is 12 or higher',
      'Avoid smoking and limit alcohol, both of which negatively affect insulin sensitivity and overall metabolic health',
    ],

    faqs: [
      {
        question: 'What is the FINDRISC score?',
        answer:
          'FINDRISC (Finnish Diabetes Risk Score) is an internationally validated questionnaire developed by Finnish researchers to estimate the 10-year risk of type 2 diabetes without requiring any blood tests. It uses eight factors including age, BMI, waist circumference, physical activity, diet, blood pressure medication, blood glucose history, and family history. The tool is endorsed by the International Diabetes Federation and widely used in primary care and public health programs.',
      },
      {
        question: 'What FINDRISC score is considered dangerous?',
        answer:
          'A score above 14 is generally considered high risk, meaning roughly 1 in 3 people in this range will develop type 2 diabetes within 10 years. A score above 20 is very high, with approximately a 50% 10-year risk. However, even a moderate score of 12-14 warrants medical attention, because many people in this range already have undiagnosed prediabetes that can progress to diabetes without intervention.',
      },
      {
        question: 'Can I reduce my diabetes risk score?',
        answer:
          'Yes. Several components of the FINDRISC score are modifiable. Increasing daily physical activity to at least 30 minutes, improving your diet with more vegetables and fruits, losing excess weight (especially around the waist), and managing blood pressure can all reduce your score. The landmark Diabetes Prevention Program study showed that structured lifestyle changes reduced the incidence of type 2 diabetes by 58% over three years, with even greater benefit for people over 60.',
      },
      {
        question: 'Is this test as good as a blood test?',
        answer:
          'No. FINDRISC is a risk estimation tool, not a diagnostic test. It identifies people who are more likely to develop or already have diabetes, but it cannot diagnose the condition. Definitive diagnosis requires blood tests, most commonly fasting plasma glucose, HbA1c, or an oral glucose tolerance test. FINDRISC is best used as a first step to decide whether further testing is needed.',
      },
      {
        question: 'Does having diabetes in the family mean I will get it?',
        answer:
          'Family history increases your risk but does not guarantee that you will develop type 2 diabetes. Having a first-degree relative with diabetes roughly doubles your risk. However, lifestyle factors such as body weight, physical activity, and diet often have a larger effect than genetics alone. Many people with strong family histories prevent diabetes through healthy habits, while others with no family history develop it due to lifestyle and environmental factors.',
      },
      {
        question: 'How is waist circumference measured correctly?',
        answer:
          'Measure your waist with a flexible tape measure at the level of your navel (belly button), while standing relaxed and breathing normally. The tape should be snug but not compress the skin. Do not measure over thick clothing. Waist circumference is a strong predictor of visceral fat, which is the metabolically harmful fat around your organs that drives insulin resistance, even in people with normal BMI.',
      },
      {
        question: 'Can young adults use this test?',
        answer:
          'FINDRISC was developed and validated for adults, primarily those aged 35-64. It can be used in younger adults as an educational tool, but absolute risk estimates are less reliable for people under 35 because type 2 diabetes is still less common in that age group. That said, rising rates of childhood obesity and early-onset type 2 diabetes mean that risk assessment in young adults is increasingly important. Any young person with obesity, a strong family history, or other risk factors should discuss diabetes screening with a doctor.',
      },
    ],
  },
  tr: {
    whatIs:
      'Diyabet Riski Hesaplayıcı, bir yetişkinin 10 yıllık tip 2 diyabet geliştirme riskini tahmin eden bilimsel olarak doğrulanmış bir tarama aracı olan Finlandiya Diyabet Risk Skoru (FINDRISC) temel alınarak geliştirilmiştir. 2003 yılında Finlandiya\'da Lindström ve Tuomilehto tarafından geliştirilen ve daha sonra Avrupa, Asya ve Amerika kıtalarındaki pek çok toplumda doğrulanan FINDRISC; yaş, vücut kompozisyonu, fiziksel aktivite, beslenme, kan basıncı, kan şekeri geçmişi ve aile öyküsü gibi sekiz basit soruyu kullanır. Herhangi bir kan testi gerektirmediği için birinci basamak sağlık hizmetlerinde, işyeri sağlık programlarında ve halk sağlığı kampanyalarında yaygın olarak kullanılır. Uluslararası Diyabet Federasyonu (IDF) ve Dünya Sağlık Örgütü (WHO), FINDRISC\'i birinci aşama tarama aracı olarak önermektedir. Daha yüksek bir puan, 10 yıl içinde tip 2 diyabet olasılığınızın daha yüksek olduğu anlamına gelir; ancak aynı zamanda riskinizi önemli ölçüde azaltmak için değiştirebileceğiniz faktörleri de ortaya koyar.',

    howToCalculate:
      'Diyabet riskinizi hesaplamak için sekiz soruyu dürüstçe cevaplayın: (1) mevcut yaşınız, (2) vücut kitle indeksiniz (VKİ), (3) göbek deliği hizasından ölçülen bel çevreniz, (4) her gün en az 30 dakika fiziksel aktivite yapıp yapmadığınız, (5) her gün sebze, meyve veya dut tüketip tüketmediğiniz, (6) şu anda yüksek tansiyon için ilaç kullanıp kullanmadığınız, (7) bir doktor tarafından hiç yüksek kan şekeri tespit edilip edilmediği ve (8) kan bağı olan akrabalarınız arasında diyabet tanısı alan olup olmadığı. Her cevap puan katkısı sağlar ve toplam puan (0-26 arası) düşükten çok yükseğe kadar 10 yıllık risk kategorinizi belirler.',

    formulaDetails:
      'FINDRISC puanı, sekiz bileşenden elde edilen puanların toplanmasıyla hesaplanır. Yaş: 45 altında 0 puan, 45-54 için 2 puan, 55-64 için 3 puan, 65 ve üstünde 4 puan. VKİ: 25 kg/m² altında 0 puan, 25-30 kg/m² arasında 1 puan, 30 üzerinde 3 puan. Bel çevresi cinsiyete göre farklıdır: erkeklerde 94 cm altı 0 puan, 94-102 cm arası 3 puan, 102 cm üzeri 4 puan; kadınlarda 80 cm altı 0 puan, 80-88 cm arası 3 puan, 88 cm üzeri 4 puandır. Fiziksel olarak aktif olmamak (günde en az 30 dakika aktivite yapmamak) 2 puan ekler. Her gün sebze ve meyve tüketmemek 1 puan ekler. Şu anda tansiyon ilacı kullanmak 2 puan ekler. Geçmişte yüksek kan şekeri saptanmış olması 5 puan ekler. Aile öyküsü: akrabada diyabet yoksa 0 puan, ikinci derece akraba (büyükanne, büyükbaba, teyze, amca, kuzen) varsa 3 puan, birinci derece akraba (anne, baba, kardeş, çocuk) varsa 5 puandır. Maksimum puan 26\'dır. Risk kategorileri: 7 altı düşük risk (%1), 7-11 hafif yüksek (%4), 12-14 orta (%17), 15-20 yüksek (%33) ve 20 üstü çok yüksek (%50) risktir.',

    interpretation:
      'FINDRISC puanınız, önümüzdeki 10 yıl içinde tip 2 diyabet geliştirme olasılığınızı tahmin etmenin yanı sıra, kişisel risk profilinize en çok hangi faktörlerin katkıda bulunduğunu da ortaya koyar. Düşük bir puan (7 altı) mevcut yaşam tarzınızı sürdürebileceğiniz, ancak yaş ilerledikçe yeniden değerlendirme yapmanız gerektiği anlamına gelir. Hafif yüksek puan (7-11), risk daha da artmadan beslenme ve fiziksel aktiviteye daha fazla dikkat etmeniz gereken bir sinyaldir. Orta risk (12-14), doktorunuzla temel kan testleri ve yapılandırılmış bir önleme planı hakkında konuşmanızı gerektirir çünkü bu aralıktaki birçok kişide zaten teşhis edilmemiş prediyabet bulunmaktadır. Yüksek puan (15-20), tıbbi değerlendirmenin gerekli olduğunu gösterir ve açlık glukozu veya HbA1c testi şiddetle önerilir. Çok yüksek puan (20 üzeri), bu gruptaki birçok kişide teşhis edilmemiş tip 2 diyabet bulunduğundan hızlı tıbbi bakım gerektiren acil bir uyarıdır. En önemlisi, bileşenlerin birçoğu (VKİ, bel, aktivite, beslenme) değiştirilebilir niteliktedir; yaşam tarzı değişiklikleri hem toplam puanınızı hem de gerçek riskinizi azaltabilir.',

    limitations:
      'FINDRISC, tanı testi değil genel bir tarama aracıdır ve bazı önemli sınırlamaları vardır. Başlangıçta Finlandiya (Kuzey Avrupa) popülasyonunda geliştirilmiştir; daha sonra birçok farklı toplumda doğrulanmış olsa da mutlak risk yüzdeleri Asya, Afrika, Orta Doğu, Hispanik ve Yerli topluluklarda biraz farklı olabilir çünkü bu gruplar genellikle daha düşük VKİ değerlerinde tip 2 diyabet geliştirme eğilimindedir. Skor; gestasyonel diyabet öyküsünü, polikistik over sendromunu (PKOS), diyabet riski özellikle yüksek olan belirli etnik grupları, glukoz metabolizmasını etkileyen ilaçların kronik kullanımını (steroidler veya antipsikotikler gibi), ciddi uyku apnesini veya diyabet riskini bağımsız olarak artıran ruh sağlığı durumlarını yakalamaz. Farklı bir mekanizma ve yaş profiline sahip olan tip 1 diyabeti de hesaba katmaz. FINDRISC, prediyabet ile teşhis edilmemiş yerleşik diyabeti ayırt edemez; ikisi de yüksek puan üretebilir. Mevcut diyabeti olan kişiler bu aracı kullanmamalı; tedavi planlarına uymalı ve doktorlarıyla konuşmalıdır. Son olarak, düşük bir puan diyabet geliştirmeyeceğinizi garanti etmez ve yüksek bir puan da mutlaka geliştireceğinizi göstermez. Bireysel sonuçlar genetik, davranış ve çevrenin özgül kombinasyonuna bağlıdır.',

    healthRisks:
      'Tip 2 diyabet, vücudun insüline karşı direnç geliştirmesi veya pankreasın yeterli insülin üretememesi sonucu ortaya çıkan ilerleyici bir metabolik hastalıktır. Zamanla sürekli yüksek kan şekeri, kan damarlarına ve sinirlere zarar vererek ciddi komplikasyonlara yol açar. Kalp-damar hastalıkları, diyabetli kişilerdeki başlıca ölüm nedenidir: koroner arter hastalığı, kalp krizi ve inme riskleri diyabeti olmayan insanlara göre iki ila dört kat daha yüksektir. Diyabetik retinopati, yetişkin başlangıçlı körlüğün önde gelen nedenidir. Diyabetik nefropati (böbrek hastalığı), diyaliz gerektiren son dönem böbrek yetmezliğinin en önemli nedenidir. Periferik nöropati ağrı, uyuşma ve ampütasyona yol açabilen ayak ülserlerine neden olur. Diyabet aynı zamanda bazı kanser türleri, demans, depresyon, enfeksiyonlar, alkolsüz yağlı karaciğer hastalığı ve erektil disfonksiyon riskini artırır. Tedavi edilmeyen diyabeti olan kişiler ortalama 10-12 yıl daha kısa yaşar. İyi haber şu ki, bu komplikasyonların çoğu erken teşhis ve iyi glukoz kontrolü ile önlenebilir. Diyabet Önleme Programı çalışmasına göre, düzenli fiziksel aktivite ile birlikte sadece %5-7 oranında bir kilo kaybı bile prediyabetten diyabete geçişi neredeyse %60 oranında azaltabilir.',

    alternativeMeasures:
      'FINDRISC, diyabet riski değerlendirmesi için doğrulanmış birkaç araçtan biridir. Diğer yaygın tarama araçları arasında Amerikan Diyabet Derneği (ADA) Risk Testi, Cambridge Diyabet Risk Skoru, QDiabetes skoru (Birleşik Krallık\'ta kullanılır) ve Avustralya Tip 2 Diyabet Risk Değerlendirme Aracı (AUSDRISK) bulunur. Her birinin soruları ve puanlaması biraz farklıdır ancak genel performansları benzerdir. Klinik tanı veya doğrulama için kan testleri gereklidir: açlık plazma glukozu (APG), en az 8 saatlik açlık sonrası kan şekerini ölçer; 100-125 mg/dL değerleri prediyabeti, 126 mg/dL ve üzeri ise diyabeti gösterir. Hemoglobin A1c (HbA1c), son 2-3 aydaki ortalama kan şekerini yansıtır; %5,7-6,4 prediyabeti, %6,5 ve üzeri diyabeti gösterir. Oral glukoz tolerans testi (OGTT), standart bir glukoz içeceğinden iki saat sonraki glukoz yanıtını ölçer. Rastgele plazma glukozu da özellikle semptom varlığında kullanılabilir. Metabolik paneller ayrıca açlık insülini, HOMA-IR, trigliseritler ve HDL kolesterol gibi insülin direnci belirteçlerini de ölçer. Sürekli glukoz monitörleri (CGM), günden güne detaylı örüntüler sağlar. FINDRISC\'i bu nesnel ölçümlerle birleştirmek, metabolik sağlığın en eksiksiz resmini verir.',

    demographicDifferences:
      'Diyabet riski popülasyonlar arasında önemli ölçüde farklılık gösterir. Güney Asya, Doğu Asya, Afrika, Karayip, Hispanik, Orta Doğu, Pasifik Adaları ve Yerli kökenli kişiler, genellikle Avrupa kökenli kişilerden daha düşük VKİ değerlerinde tip 2 diyabet geliştirme eğilimindedir. Örneğin WHO, Asya popülasyonları için daha düşük VKİ eşikleri (fazla kilolu için 23, obezite için 27,5) önermektedir çünkü bu gruplar daha az görünür vücut yağıyla insülin direnci ve diyabet geliştirmektedir. Yaş bir diğer önemli faktördür: diyabet geleneksel olarak yetişkin hastalığı kabul edilse de, çocukluk çağı obezitesi nedeniyle çocuk ve ergenlerde tip 2 diyabet oranları hızla artmaktadır. Gestasyonel diyabet yaşamış kadınlarda yaşam boyu tip 2 diyabet riski 7-10 kat artmaktadır. Polikistik over sendromu (PKOS) olan kadınlar da önemli ölçüde yüksek riske sahiptir. Erkekler, vücut yağ dağılımı nedeniyle kadınlardan daha düşük VKİ değerlerinde diyabet geliştirme eğilimindedir. Sosyoekonomik faktörler de önemlidir: sağlıklı gıdaya, güvenli egzersiz alanlarına ve kaliteli sağlık hizmetlerine sınırlı erişim yüksek diyabet oranlarıyla ilişkilidir. Stres, uyku yoksunluğu ve vardiyalı çalışma da risk faktörüdür. Bu farklılıklar, belirli bir FINDRISC puanının farklı insanlar için farklı mutlak risk düzeylerini yansıtabileceği ve kişiselleştirilmiş tıbbi değerlendirmenin her zaman en iyi yaklaşım olduğu anlamına gelir.',

    medicalDisclaimer:
      'Bu Diyabet Riski Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, tanı veya tedavinin yerine kullanılmamalıdır. FINDRISC aracı bir tarama aracıdır, tanı testi değildir. Düşük bir puan diyabeti dışlamaz, yüksek bir puan da doğrulamaz. Yalnızca nitelikli bir sağlık profesyoneli uygun kan testleri ve klinik değerlendirme ile tip 2 diyabet, prediyabet veya ilgili durumları teşhis edebilir. Riskinizle ilgili endişeleriniz varsa, sık idrara çıkma, aşırı susuzluk, açıklanamayan kilo kaybı, bulanık görme veya sürekli yorgunluk gibi semptomlar yaşıyorsanız ya da başka risk faktörleriniz varsa lütfen gecikmeden doktorunuza danışın. Yalnızca bu hesaplayıcıya dayanarak ilaç veya yaşam tarzı uygulamasına başlamayın, bırakmayın veya değiştirmeyin. Hamile kadınlar, çocuklar, mevcut diyabeti olan kişiler ve başka ciddi tıbbi durumları bulunanlar her zaman bireyselleştirilmiş rehberlik için nitelikli bir klinisyenle konuşmalıdır.',

    references: [
      'Lindström J, Tuomilehto J. The diabetes risk score: a practical tool to predict type 2 diabetes risk. Diabetes Care. 2003;26(3):725-731.',
      'Uluslararası Diyabet Federasyonu (IDF) - Küresel Diyabet Risk Değerlendirme Kılavuzu',
      'Dünya Sağlık Örgütü (WHO) - Küresel Diyabet Raporu',
      'Amerikan Diyabet Derneği - Diyabette Tıbbi Bakım Standartları',
      'Knowler WC, Barrett-Connor E, et al. Yaşam tarzı müdahalesi veya metformin ile tip 2 diyabet insidansının azaltılması. N Engl J Med. 2002;346(6):393-403.',
      'Tuomilehto J, Lindström J, et al. Bozulmuş glukoz toleransı olan bireylerde yaşam tarzı değişiklikleri ile tip 2 diabetes mellitusun önlenmesi. N Engl J Med. 2001;344(18):1343-1350.',
      'Türkiye Endokrinoloji ve Metabolizma Derneği - Diabetes Mellitus Tanı ve Tedavi Kılavuzu',
    ],

    tips: [
      'Tempolu yürüyüş, bisiklet veya yüzme gibi haftada en az 150 dakika orta yoğunlukta fiziksel aktivite yapmayı hedefleyin',
      'Her öğünde tabağınızın yarısını nişastasız sebzelerle doldurun; tam tahıllar, yağsız protein ve sağlıklı yağları tercih edin',
      'Fazla kilolu iseniz, vücut ağırlığınızın %5-7\'sini kaybetmek diyabet riskinizi %58\'e kadar azaltabilir',
      'Hızlı kan şekeri yükselmelerine ve insülin direncine yol açan eklenmiş şekeri ve şekerli içecekleri sınırlayın',
      'Uyku kalitesine öncelik verin - kronik uyku yoksunluğu insülin direnciyle bağlantılı olduğundan gecede 7-9 saat uyumayı hedefleyin',
      'Kronik stres hormonları kan şekerini yükselttiğinden meditasyon, derin nefes, yoga veya hobilerle stresi yönetin',
      'FINDRISC puanınız 12 veya üzeriyse açlık glukozu ve HbA1c testlerini içeren düzenli kontrolleri aksatmayın',
      'İnsülin duyarlılığını ve genel metabolik sağlığı olumsuz etkileyen sigarayı bırakın ve alkolü sınırlandırın',
    ],

    faqs: [
      {
        question: 'FINDRISC skoru nedir?',
        answer:
          'FINDRISC (Finlandiya Diyabet Risk Skoru), Finlandiyalı araştırmacılar tarafından geliştirilen ve herhangi bir kan testi gerektirmeden 10 yıllık tip 2 diyabet riskini tahmin etmek için kullanılan uluslararası geçerliliği kanıtlanmış bir ankettir. Yaş, VKİ, bel çevresi, fiziksel aktivite, beslenme, tansiyon ilacı kullanımı, kan şekeri geçmişi ve aile öyküsü dahil olmak üzere sekiz faktörü kullanır. Araç, Uluslararası Diyabet Federasyonu tarafından onaylanmıştır ve birinci basamak sağlık hizmetlerinde ve halk sağlığı programlarında yaygın olarak kullanılmaktadır.',
      },
      {
        question: 'Kaç FINDRISC puanı tehlikeli kabul edilir?',
        answer:
          '14 üzeri bir puan genellikle yüksek risk olarak kabul edilir; yani bu aralıktaki her 3 kişiden yaklaşık 1\'i 10 yıl içinde tip 2 diyabet geliştirir. 20 üzeri puan çok yüksek risktir ve yaklaşık %50\'lik bir 10 yıllık risk anlamına gelir. Ancak 12-14 arası orta bir puan bile tıbbi değerlendirmeyi gerektirir çünkü bu aralıktaki pek çok kişide müdahale edilmediği takdirde diyabete ilerleyebilecek teşhis edilmemiş prediyabet vardır.',
      },
      {
        question: 'Diyabet risk puanımı düşürebilir miyim?',
        answer:
          'Evet. FINDRISC puanının birkaç bileşeni değiştirilebilir niteliktedir. Günlük fiziksel aktiviteyi en az 30 dakikaya çıkarmak, beslenmenizi daha fazla sebze ve meyve ile iyileştirmek, fazla kiloları özellikle bel çevresinden vermek ve tansiyonu yönetmek puanınızı düşürebilir. Öncü Diyabet Önleme Programı çalışması, yapılandırılmış yaşam tarzı değişikliklerinin üç yıl içinde tip 2 diyabet insidansını %58 azalttığını ve 60 yaş üstü kişilerde daha da büyük fayda sağladığını göstermiştir.',
      },
      {
        question: 'Bu test bir kan testi kadar iyi mi?',
        answer:
          'Hayır. FINDRISC bir risk tahmin aracıdır, tanı testi değildir. Diyabet geliştirme olasılığı daha yüksek veya zaten diyabeti olan kişileri belirler, ancak durumu teşhis edemez. Kesin tanı kan testleri gerektirir; en yaygın olanları açlık plazma glukozu, HbA1c veya oral glukoz tolerans testidir. FINDRISC, ileri test gerekip gerekmediğine karar vermek için ilk adım olarak kullanılmalıdır.',
      },
      {
        question: 'Ailemde diyabet olması kesinlikle bende de olacak anlamına mı gelir?',
        answer:
          'Aile öyküsü riskinizi artırır ancak tip 2 diyabet geliştireceğinizi garanti etmez. Diyabeti olan birinci derece bir akraba riskinizi yaklaşık iki katına çıkarır. Ancak vücut ağırlığı, fiziksel aktivite ve beslenme gibi yaşam tarzı faktörleri genellikle genetikten daha büyük bir etkiye sahiptir. Güçlü aile öyküsü olan pek çok kişi sağlıklı alışkanlıklarla diyabeti önlerken, aile öyküsü olmayan birçok kişi yaşam tarzı ve çevresel faktörler nedeniyle diyabet geliştirir.',
      },
      {
        question: 'Bel çevresi nasıl doğru ölçülür?',
        answer:
          'Bel çevrenizi, göbek deliğinizin (karın deliği) hizasından, rahat bir şekilde ayakta dururken ve normal nefes alıp verirken esnek bir mezura ile ölçün. Mezura cilde yapışık ama sıkıştırmayacak şekilde olmalıdır. Kalın giysiler üzerinden ölçüm yapmayın. Bel çevresi, normal VKİ\'ye sahip kişilerde bile insülin direncine yol açan, organ çevresindeki metabolik olarak zararlı iç yağın güçlü bir göstergesidir.',
      },
      {
        question: 'Genç yetişkinler bu testi kullanabilir mi?',
        answer:
          'FINDRISC yetişkinler için, özellikle 35-64 yaş arası kişiler için geliştirilmiş ve doğrulanmıştır. Daha genç yetişkinlerde eğitim amaçlı bir araç olarak kullanılabilir, ancak tip 2 diyabet bu yaş grubunda hala daha az yaygın olduğundan 35 yaş altı kişilerde mutlak risk tahminleri daha az güvenilirdir. Bununla birlikte, çocukluk çağı obezitesi ve erken başlangıçlı tip 2 diyabet oranlarındaki artış, genç yetişkinlerde risk değerlendirmesini giderek daha önemli hale getirmektedir. Obezite, güçlü aile öyküsü veya başka risk faktörleri olan her genç insan diyabet taramasını doktoruyla görüşmelidir.',
      },
    ],
  },
};
