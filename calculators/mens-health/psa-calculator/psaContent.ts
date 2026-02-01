import { CalculatorContent } from '@/types/calculator';

export const psaContent: CalculatorContent = {
  en: {
    whatIs:
      'Prostate-Specific Antigen (PSA) is a protein produced by both normal and cancerous cells of the prostate gland. The PSA test measures the level of PSA in a man\'s blood and is one of the primary screening tools for detecting prostate cancer and other prostate conditions. PSA is measured in nanograms per milliliter (ng/mL) of blood. While PSA is primarily produced by the prostate gland, small amounts can be found in the bloodstream of all men. Elevated PSA levels may indicate prostate cancer, but can also result from benign (non-cancerous) conditions such as benign prostatic hyperplasia (BPH or enlarged prostate), prostatitis (inflammation of the prostate), urinary tract infections, or recent prostate procedures. The PSA test has been in use since the late 1980s and has significantly improved early detection of prostate cancer. However, it is not a perfect screening tool, as elevated PSA does not always indicate cancer, and some men with prostate cancer have normal PSA levels. Understanding PSA levels requires consideration of age, family history, ethnicity, and other individual risk factors.',

    howToCalculate:
      'PSA is measured through a simple blood test that can be performed during a routine doctor\'s visit. The blood sample is sent to a laboratory where PSA levels are measured in nanograms per milliliter (ng/mL). There is no calculation required by the patient - the laboratory provides the PSA value. However, healthcare providers use several methods to interpret PSA results. First, they compare your PSA level to age-adjusted reference ranges, as PSA naturally increases with age. Men under 50 typically have PSA levels below 2.5 ng/mL, men 50-59 below 3.5 ng/mL, men 60-69 below 4.5 ng/mL, and men 70 and older below 6.5 ng/mL. Second, if prostate volume is known (from ultrasound), PSA density can be calculated by dividing PSA value by prostate volume. A PSA density above 0.15 ng/mL/cc suggests higher risk. Third, if you have previous PSA tests, PSA velocity can be calculated, which measures how quickly PSA is rising over time. A PSA velocity greater than 0.75 ng/mL per year may indicate increased risk. Finally, doctors may use the free PSA to total PSA ratio - a lower percentage of free PSA (below 10-15%) is associated with higher cancer risk.',

    formulaDetails:
      'While PSA itself is directly measured rather than calculated, several derived metrics help with interpretation. PSA Density = PSA value (ng/mL) ÷ Prostate Volume (cubic centimeters). For example, if your PSA is 6 ng/mL and prostate volume is 50 cc, PSA density = 6 ÷ 50 = 0.12 ng/mL/cc. Values above 0.15 are considered concerning. PSA Velocity = (Current PSA - Previous PSA) ÷ Time interval in years. For instance, if your PSA was 2.0 ng/mL two years ago and is now 3.5 ng/mL, velocity = (3.5 - 2.0) ÷ 2 = 0.75 ng/mL/year. Velocities above 0.75 ng/mL/year warrant further investigation. Free PSA Ratio = (Free PSA ÷ Total PSA) × 100. PSA exists in blood in two forms: free (unbound) and complexed (bound to proteins). Men with prostate cancer tend to have lower percentages of free PSA. If total PSA is 5.0 ng/mL and free PSA is 0.5 ng/mL, the ratio is (0.5 ÷ 5.0) × 100 = 10%, which suggests higher cancer risk. These calculations help urologists make more informed decisions about whether to recommend prostate biopsy or continued monitoring.',

    categories: [
      {
        range: '< 1.0',
        label: 'Low',
        description:
          'Very low PSA levels suggesting healthy prostate function. Very low risk of prostate cancer. Continue routine screening as recommended.',
        color: '#10B981',
      },
      {
        range: '1.0 - 2.5',
        label: 'Normal (Age < 50)',
        description:
          'Normal PSA range for men under 50. Low risk, but annual monitoring recommended for men over 40 with family history.',
        color: '#3B82F6',
      },
      {
        range: '2.5 - 4.0',
        label: 'Borderline',
        description:
          'Borderline range that may require additional evaluation. Risk depends on age, PSA velocity, family history. Further testing may be recommended.',
        color: '#F59E0B',
      },
      {
        range: '4.0 - 10.0',
        label: 'Elevated',
        description:
          'Elevated PSA requiring medical attention. About 25% of men in this range have prostate cancer. Additional tests including free PSA ratio, digital rectal exam, and possibly MRI or biopsy recommended.',
        color: '#F97316',
      },
      {
        range: '> 10.0',
        label: 'Very High',
        description:
          'Very high PSA with approximately 50% or greater probability of prostate cancer. Immediate urological consultation required. Prostate biopsy and imaging studies typically recommended.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'PSA test interpretation requires careful consideration of multiple factors beyond just the numerical value. Age is crucial - PSA levels naturally increase with age due to prostate enlargement, so what is normal for a 70-year-old may be concerning for a 50-year-old. The traditional cutoff of 4.0 ng/mL has been used for decades, but modern medicine recognizes that this threshold misses some cancers and leads to unnecessary biopsies in others. Many urologists now use age-adjusted reference ranges and consider trends over time rather than single values. Family history significantly impacts interpretation - men with first-degree relatives (father or brother) with prostate cancer face 2-3 times higher risk and may need closer monitoring at lower PSA levels. Ethnicity matters too, as African American men have higher rates of prostate cancer and may benefit from earlier screening. Recent activities affect PSA: sexual activity within 48 hours, vigorous exercise (especially cycling), digital rectal examination, prostate biopsy, or urinary tract infections can temporarily elevate PSA. For this reason, abnormal PSA results should be confirmed with repeat testing. The rate of PSA change (PSA velocity) and PSA density provide additional context. A rapidly rising PSA or high PSA density may indicate cancer even when absolute PSA is in the borderline range. Conversely, stable PSA over time is reassuring even if slightly elevated.',

    limitations:
      'The PSA test has significant limitations that all men should understand before screening. First, PSA is not cancer-specific - it can be elevated for many non-cancerous reasons including BPH (benign prostatic hyperplasia), prostatitis (infection/inflammation), urinary tract infections, recent ejaculation, vigorous physical activity, and prostate manipulation during medical procedures. Up to 75% of men with elevated PSA (4-10 ng/mL) do not have prostate cancer on biopsy. Second, some prostate cancers do not produce elevated PSA, leading to false negatives. About 15% of men with PSA below 4.0 ng/mL have prostate cancer, and some of these are aggressive cancers. Third, PSA screening detects many slow-growing cancers that may never cause symptoms or shorten life, leading to overdiagnosis and overtreatment. Studies show that for every 1,000 men screened over 10 years, PSA testing prevents approximately 1.3 prostate cancer deaths but results in diagnosis and treatment of many men who would never have been harmed by their cancer. Treatments for prostate cancer (surgery, radiation) can cause significant side effects including erectile dysfunction, urinary incontinence, and bowel problems. Fourth, PSA testing does not distinguish between aggressive, life-threatening cancers and indolent, slow-growing ones. Additional tests like prostate MRI, biomarkers (PHI, 4Kscore), and genetic tests are being developed to improve specificity. Fifth, there is ongoing controversy about population-wide PSA screening. Major medical organizations have varying recommendations, with most now emphasizing shared decision-making between doctor and patient rather than routine screening for all men.',

    healthRisks:
      'Understanding PSA levels and associated health risks is crucial for informed decision-making. Low PSA (< 1.0 ng/mL) is associated with very low prostate cancer risk - studies show that men with PSA below 1.0 ng/mL at age 60 have less than 10% lifetime risk of developing lethal prostate cancer. PSA in the normal range (1.0-2.5 ng/mL for men under 50) indicates low but not zero risk. Approximately 6.6% of men with PSA between 0.5-4.0 ng/mL have prostate cancer. Borderline PSA (2.5-4.0 ng/mL) represents a gray zone where about 15% of men have prostate cancer on biopsy. Additional risk factors (family history, African American ethnicity, abnormal digital rectal exam) increase concern. Elevated PSA (4.0-10.0 ng/mL) is associated with approximately 25% cancer probability - meaning 3 out of 4 men in this range do NOT have cancer despite elevated PSA. Very high PSA (> 10.0 ng/mL) indicates about 50% or higher cancer probability and often correlates with more advanced disease. PSA over 20 ng/mL suggests high likelihood of locally advanced or metastatic cancer. However, PSA level alone does not determine aggressiveness. Some men with PSA of 5-10 ng/mL have aggressive, high-grade cancers requiring immediate treatment, while others with PSA of 15-20 ng/mL have low-grade, slow-growing cancers suitable for active surveillance. Beyond cancer, elevated PSA indicates other prostate problems requiring attention: BPH causes urinary symptoms including weak stream, frequent urination, and nighttime urination that impact quality of life. Prostatitis can cause pain, difficulty urinating, and sexual dysfunction. Both conditions are treatable and improving PSA interpretation helps direct appropriate therapy.',

    alternativeMeasures:
      'Several advanced tests complement PSA to improve prostate cancer detection and reduce unnecessary biopsies. Free PSA percentage measures the ratio of free (unbound) to total PSA. Cancer cells produce more complexed PSA, so lower free PSA percentages (< 10-15%) suggest higher cancer risk, while higher percentages (> 25%) suggest benign conditions. The Prostate Health Index (PHI) combines total PSA, free PSA, and [-2]proPSA into a single score that better predicts cancer probability and aggressiveness. PHI scores above 35 indicate elevated risk. The 4Kscore test measures four prostate-specific kallikrein markers and combines them with clinical information to predict probability of finding aggressive cancer (Gleason 7 or higher) on biopsy. Scores above 15% often prompt biopsy recommendation. Multiparametric MRI (mpMRI) provides detailed prostate imaging, identifying suspicious lesions that can be targeted during biopsy. The PIRADS scoring system (1-5) rates suspicion level, with PIRADS 4-5 lesions requiring biopsy. MRI can also rule out significant cancer, potentially avoiding biopsy in some men. SelectMDx is a urine test measuring cancer-associated genes (DLX1, HOXC6) that helps predict aggressive cancer risk. ExoDx Prostate IntelliScore analyzes exosomal RNA from urine to identify high-grade cancer. ConfirmMDx tests biopsy tissue for epigenetic changes that improve cancer detection. PCA3 is a urine test measuring prostate cancer-specific gene expression. Digital rectal examination (DRE), though less popular than in the past, can detect abnormal prostate texture, nodules, or asymmetry suggesting cancer. Combining these tests with PSA provides more accurate risk stratification and helps men make informed decisions about biopsy and treatment.',

    demographicDifferences:
      'PSA levels and prostate cancer risk vary significantly across demographic groups, requiring personalized screening approaches. Age is the strongest factor - prostate cancer is rare in men under 40, with risk increasing dramatically after age 50. About 60% of prostate cancers are diagnosed in men over 65. Age-adjusted PSA reference ranges account for natural PSA increase with aging: men in their 40s should generally have PSA below 2.5 ng/mL, 50s below 3.5 ng/mL, 60s below 4.5 ng/mL, and 70s below 6.5 ng/mL. Ethnicity profoundly impacts risk. African American men have approximately 1.7 times higher prostate cancer incidence and 2.2 times higher mortality compared to white men. They are more likely to develop aggressive cancers at younger ages and may benefit from earlier screening (age 40-45) and lower PSA thresholds for biopsy. Asian and Hispanic men generally have lower prostate cancer rates than white men, though within these populations risk varies. Family history dramatically increases risk - men with one first-degree relative with prostate cancer have 2-3 times higher risk; those with two or more relatives face 5-11 times increased risk. Men with hereditary cancer syndromes (BRCA1/2 mutations, Lynch syndrome) have significantly elevated risk and warrant earlier, more aggressive screening. Geographic variation exists, with higher rates in North America and Northern Europe compared to Asia and Africa, though migration studies suggest environmental and dietary factors also play roles. Lifestyle factors including obesity, high-fat diets, sedentary behavior, and smoking may influence risk, though the evidence is mixed.',

    medicalDisclaimer:
      'This PSA calculator is provided for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. PSA test results must be interpreted by qualified healthcare professionals in the context of your complete medical history, family history, ethnicity, physical examination findings, and other risk factors. A PSA value alone cannot diagnose prostate cancer or any other condition. Elevated PSA can result from benign conditions, recent sexual activity, exercise, urinary tract infections, or prostate procedures. Normal PSA does not guarantee absence of prostate cancer. This calculator does not replace consultation with a urologist or primary care physician. If you have an elevated or rising PSA, abnormal digital rectal exam, urinary symptoms, family history of prostate cancer, or other concerning factors, please seek immediate medical evaluation. Decisions about PSA screening, additional testing, prostate biopsy, and treatment should be made through shared decision-making with your healthcare provider, considering your individual risk factors, values, and preferences. Do not start, stop, or change any medical treatment based solely on this calculator. Men should discuss the benefits and risks of PSA screening with their doctors before testing. The information provided reflects current medical knowledge but is not a substitute for individualized medical care.',

    references: [
      'American Cancer Society - Prostate Cancer Early Detection Guidelines',
      'U.S. Preventive Services Task Force (USPSTF) - Prostate Cancer Screening Recommendations',
      'American Urological Association (AUA) - Early Detection of Prostate Cancer Guidelines',
      'National Cancer Institute (NCI) - Prostate-Specific Antigen (PSA) Test',
      'Thompson IM, Ankerst DP, Chi C, et al. Operating characteristics of prostate-specific antigen in men with an initial PSA level of 3.0 ng/mL or lower. JAMA. 2005;294(1):66-70.',
      'Catalona WJ, Partin AW, Slawin KM, et al. Use of the percentage of free prostate-specific antigen to enhance differentiation of prostate cancer from benign prostatic disease. JAMA. 1998;279(19):1542-1547.',
      'Carter HB, Albertsen PC, Barry MJ, et al. Early detection of prostate cancer: AUA Guideline. J Urol. 2013;190(2):419-426.',
      'Loeb S, Bjurlin MA, Nicholson J, et al. Overdiagnosis and overtreatment of prostate cancer. Eur Urol. 2014;65(6):1046-1055.',
    ],

    tips: [
      'Discuss PSA screening with your doctor before age 50, or age 40-45 if you are African American or have a family history of prostate cancer',
      'Understand that elevated PSA does not mean you have cancer - approximately 75% of men with PSA 4-10 ng/mL do not have cancer',
      'Track your PSA over time - trends and velocity matter more than single values',
      'Avoid activities that can temporarily elevate PSA (ejaculation, vigorous exercise, cycling) for 48 hours before testing',
      'If PSA is elevated, ask about additional tests (free PSA, PHI, 4Kscore, prostate MRI) that can help determine if biopsy is necessary',
      'Consider active surveillance rather than immediate treatment for low-risk prostate cancers',
      'Be aware that PSA screening reduces prostate cancer deaths by a small amount but can lead to overdiagnosis and overtreatment',
      'Make informed decisions about screening and treatment based on your personal values, life expectancy, and risk tolerance',
    ],

    faqs: [
      {
        question: 'What is a normal PSA level?',
        answer:
          'PSA levels increase naturally with age, so "normal" varies. For men under 50, PSA below 2.5 ng/mL is typical. For men 50-59, below 3.5 ng/mL is normal; 60-69, below 4.5 ng/mL; and 70+, below 6.5 ng/mL. However, the traditional cutoff of 4.0 ng/mL is still commonly used. More important than a single value is the trend over time - rapidly rising PSA may be concerning even if below traditional thresholds.',
      },
      {
        question: 'What causes PSA to be elevated besides cancer?',
        answer:
          'Many benign conditions elevate PSA including benign prostatic hyperplasia (BPH or enlarged prostate), prostatitis (prostate infection/inflammation), urinary tract infections, and recent prostate procedures. Temporary elevations occur from ejaculation within 48 hours, vigorous exercise (especially cycling), digital rectal exam, or prostate massage. Prostate injury, urinary retention, and certain medications can also increase PSA. This is why abnormal PSA should always be repeated and interpreted in clinical context.',
      },
      {
        question: 'If my PSA is elevated, do I definitely need a biopsy?',
        answer:
          'Not necessarily. Modern prostate cancer care offers several options before proceeding to biopsy. Additional blood tests (free PSA percentage, PHI, 4Kscore) provide more specific cancer risk assessment. Multiparametric MRI can identify suspicious lesions and sometimes rule out significant cancer, avoiding biopsy. For borderline PSA elevations (4-10 ng/mL), monitoring PSA velocity over 6-12 months may be appropriate. Your urologist will consider your age, family history, digital rectal exam findings, and personal preferences in recommending next steps.',
      },
      {
        question: 'Can PSA be too low?',
        answer:
          'Yes, though low PSA is generally favorable. Very low PSA (< 0.5 ng/mL) at age 60 predicts low lifetime risk of lethal prostate cancer, potentially allowing longer screening intervals. However, some aggressive prostate cancers produce little PSA, so symptoms like urinary changes, blood in urine, or bone pain should be evaluated regardless of PSA level. Additionally, men taking 5-alpha reductase inhibitors (finasteride, dutasteride) for BPH have artificially lowered PSA - their PSA should be doubled for accurate interpretation.',
      },
      {
        question: 'How often should I get my PSA checked?',
        answer:
          'Screening frequency depends on age, baseline PSA, and risk factors. Men with average risk and PSA below 1.0 ng/mL may screen every 2-4 years. Those with PSA 1.0-2.5 ng/mL typically screen every 1-2 years. PSA above 2.5 ng/mL or with risk factors (family history, African American) may warrant annual screening. Men over 70 with limited life expectancy or PSA consistently below 1.0 ng/mL may discontinue screening. The USPSTF recommends individualized decision-making for men ages 55-69, with screening every 2-4 years if chosen. Discuss optimal frequency with your healthcare provider based on your personal situation.',
      },
    ],
  },
  tr: {
    whatIs:
      'Prostat-Spesifik Antijen (PSA), prostat bezinin hem normal hem de kanserli hücreleri tarafından üretilen bir proteindir. PSA testi, bir erkeğin kanındaki PSA seviyesini ölçer ve prostat kanseri ve diğer prostat rahatsızlıklarını tespit etmek için birincil tarama araçlarından biridir. PSA, kan mililitresi başına nanogram (ng/mL) cinsinden ölçülür. PSA esas olarak prostat bezi tarafından üretilse de, tüm erkeklerin kan dolaşımında küçük miktarlarda bulunabilir. Yüksek PSA seviyeleri prostat kanserini gösterebilir, ancak iyi huylu prostat büyümesi (BPH), prostatit (prostat iltihabı), idrar yolu enfeksiyonları veya son prostat prosedürleri gibi iyi huylu (kanser olmayan) durumlardan da kaynaklanabilir. PSA testi 1980\'lerin sonundan beri kullanılmaktadır ve prostat kanserinin erken tespitini önemli ölçüde iyileştirmiştir. Ancak mükemmel bir tarama aracı değildir, çünkü yüksek PSA her zaman kanseri göstermez ve prostat kanseri olan bazı erkeklerin PSA seviyeleri normaldir. PSA seviyelerini anlamak, yaş, aile geçmişi, etnik köken ve diğer bireysel risk faktörlerinin dikkate alınmasını gerektirir.',

    howToCalculate:
      'PSA, rutin bir doktor ziyareti sırasında yapılabilecek basit bir kan testi ile ölçülür. Kan örneği, PSA seviyelerinin nanogram/mililitre (ng/mL) cinsinden ölçüldüğü bir laboratuvara gönderilir. Hasta tarafından herhangi bir hesaplama yapılması gerekmez - laboratuvar PSA değerini sağlar. Ancak sağlık hizmeti sağlayıcıları PSA sonuçlarını yorumlamak için çeşitli yöntemler kullanır. İlk olarak, PSA seviyeleri yaşla birlikte doğal olarak arttığından, PSA seviyenizi yaşa göre ayarlanmış referans aralıklarıyla karşılaştırırlar. 50 yaşın altındaki erkeklerin tipik olarak 2.5 ng/mL\'nin altında PSA seviyeleri vardır, 50-59 yaş arası 3.5 ng/mL\'nin altında, 60-69 yaş arası 4.5 ng/mL\'nin altında ve 70 yaş ve üzeri 6.5 ng/mL\'nin altındadır. İkinci olarak, prostat hacmi biliniyorsa (ultrasondan), PSA değerini prostat hacmine bölerek PSA yoğunluğu hesaplanabilir. 0.15 ng/mL/cc\'nin üzerindeki PSA yoğunluğu daha yüksek riski gösterir. Üçüncü olarak, önceki PSA testleriniz varsa, PSA hızı hesaplanabilir; bu, PSA\'nın zamanla ne kadar hızlı yükseldiğini ölçer. Yılda 0.75 ng/mL\'den büyük PSA hızı artmış riski gösterebilir. Son olarak, doktorlar serbest PSA\'nın toplam PSA\'ya oranını kullanabilir - daha düşük bir serbest PSA yüzdesi (%10-15\'in altında) daha yüksek kanser riski ile ilişkilidir.',

    formulaDetails:
      'PSA\'nın kendisi hesaplanmak yerine doğrudan ölçülse de, birkaç türetilmiş metrik yorumlamaya yardımcı olur. PSA Yoğunluğu = PSA değeri (ng/mL) ÷ Prostat Hacmi (santimetre küp). Örneğin, PSA\'nız 6 ng/mL ve prostat hacmi 50 cc ise, PSA yoğunluğu = 6 ÷ 50 = 0.12 ng/mL/cc. 0.15\'in üzerindeki değerler endişe verici kabul edilir. PSA Hızı = (Mevcut PSA - Önceki PSA) ÷ Yıl cinsinden zaman aralığı. Örneğin, PSA\'nız iki yıl önce 2.0 ng/mL idi ve şimdi 3.5 ng/mL ise, hız = (3.5 - 2.0) ÷ 2 = 0.75 ng/mL/yıl. 0.75 ng/mL/yıldan büyük hızlar daha fazla araştırmayı gerektirir. Serbest PSA Oranı = (Serbest PSA ÷ Toplam PSA) × 100. PSA kanda iki formda bulunur: serbest (bağlanmamış) ve kompleks (proteinlere bağlı). Prostat kanseri olan erkekler daha düşük serbest PSA yüzdelerine sahip olma eğilimindedir. Toplam PSA 5.0 ng/mL ve serbest PSA 0.5 ng/mL ise, oran (0.5 ÷ 5.0) × 100 = %10\'dur, bu da daha yüksek kanser riskini gösterir. Bu hesaplamalar ürologların prostat biyopsisi önerip önermemeye veya izlemeye devam etmeye dair daha bilinçli kararlar vermesine yardımcı olur.',

    categories: [
      {
        range: '< 1.0',
        label: 'Düşük',
        description:
          'Sağlıklı prostat fonksiyonunu gösteren çok düşük PSA seviyeleri. Prostat kanseri için çok düşük risk. Önerilen şekilde rutin taramaya devam edin.',
        color: '#10B981',
      },
      {
        range: '1.0 - 2.5',
        label: 'Normal (50 Yaş Altı)',
        description:
          '50 yaşın altındaki erkekler için normal PSA aralığı. Düşük risk, ancak aile öyküsü olan 40 yaş üstü erkekler için yıllık izleme önerilir.',
        color: '#3B82F6',
      },
      {
        range: '2.5 - 4.0',
        label: 'Sınırda',
        description:
          'Ek değerlendirme gerektirebilecek sınır aralığı. Risk yaşa, PSA hızına, aile geçmişine bağlıdır. İleri testler önerilebilir.',
        color: '#F59E0B',
      },
      {
        range: '4.0 - 10.0',
        label: 'Yüksek',
        description:
          'Tıbbi müdahale gerektiren yüksek PSA. Bu aralıktaki erkeklerin yaklaşık %25\'inde prostat kanseri vardır. Serbest PSA oranı, dijital rektal muayene ve muhtemelen MRI veya biyopsi dahil ek testler önerilir.',
        color: '#F97316',
      },
      {
        range: '> 10.0',
        label: 'Çok Yüksek',
        description:
          'Yaklaşık %50 veya daha fazla prostat kanseri olasılığı ile çok yüksek PSA. Acil ürolojik konsültasyon gereklidir. Prostat biyopsisi ve görüntüleme çalışmaları tipik olarak önerilir.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'PSA testi yorumu, sayısal değerin ötesinde birden fazla faktörün dikkatli bir şekilde değerlendirilmesini gerektirir. Yaş çok önemlidir - PSA seviyeleri prostat büyümesi nedeniyle yaşla birlikte doğal olarak artar, bu nedenle 70 yaşında bir kişi için normal olan, 50 yaşında bir kişi için endişe verici olabilir. Onlarca yıldır kullanılan geleneksel 4.0 ng/mL eşiği, bazı kanserleri kaçırır ve diğerlerinde gereksiz biyopsilere yol açar. Birçok ürolog artık yaşa göre ayarlanmış referans aralıklarını kullanır ve tek değerler yerine zaman içindeki eğilimleri göz önünde bulundurur. Aile geçmişi yorumu önemli ölçüde etkiler - prostat kanseri olan birinci derece akrabaları (baba veya erkek kardeş) olan erkekler 2-3 kat daha yüksek riskle karşı karşıyadır ve daha düşük PSA seviyelerinde daha yakın izlemeye ihtiyaç duyabilir. Etnik köken de önemlidir, çünkü Afrika kökenli Amerikalı erkeklerde prostat kanseri oranları daha yüksektir ve daha erken taramadan faydalanabilirler. Son aktiviteler PSA\'yı etkiler: 48 saat içinde cinsel aktivite, şiddetli egzersiz (özellikle bisiklet sürme), dijital rektal muayene, prostat biyopsisi veya idrar yolu enfeksiyonları PSA\'yı geçici olarak yükseltebilir. Bu nedenle, anormal PSA sonuçları tekrarlanan test ile doğrulanmalıdır.',

    limitations:
      'PSA testinin, tüm erkeklerin taramadan önce anlaması gereken önemli sınırlamaları vardır. İlk olarak, PSA kansere özgü değildir - BPH (iyi huylu prostat hiperplazisi), prostatit (enfeksiyon/iltihaplanma), idrar yolu enfeksiyonları, son ejakülasyon, şiddetli fiziksel aktivite ve tıbbi prosedürler sırasında prostat manipülasyonu gibi kanserli olmayan birçok nedenle yükseltilebilir. Yüksek PSA\'lı (4-10 ng/mL) erkeklerin %75\'e kadarında biyopside prostat kanseri yoktur. İkinci olarak, bazı prostat kanserleri yüksek PSA üretmez, bu da yanlış negatif sonuçlara yol açar. PSA\'sı 4.0 ng/mL\'nin altında olan erkeklerin yaklaşık %15\'inde prostat kanseri vardır ve bunlardan bazıları agresif kanserlerdir. Üçüncü olarak, PSA taraması asla semptom göstermeyebilecek veya hayatı kısaltmayabilecek birçok yavaş büyüyen kanseri tespit eder, bu da aşırı teşhis ve aşırı tedaviye yol açar.',

    healthRisks:
      'PSA seviyelerini ve ilişkili sağlık risklerini anlamak, bilinçli karar verme için çok önemlidir. Düşük PSA (< 1.0 ng/mL) çok düşük prostat kanseri riski ile ilişkilidir - araştırmalar, 60 yaşında PSA\'sı 1.0 ng/mL\'nin altında olan erkeklerin ölümcül prostat kanseri geliştirme yaşam boyu riskinin %10\'dan az olduğunu göstermektedir. Normal aralıkta PSA (50 yaşın altındaki erkekler için 1.0-2.5 ng/mL) düşük ancak sıfır olmayan riski gösterir. PSA\'sı 0.5-4.0 ng/mL arasında olan erkeklerin yaklaşık %6.6\'sında prostat kanseri vardır. Sınırda PSA (2.5-4.0 ng/mL), erkeklerin yaklaşık %15\'inde biyopside prostat kanseri olan gri bir bölgeyi temsil eder. Ek risk faktörleri (aile geçmişi, Afrika kökenli Amerikalı etnik kökeni, anormal dijital rektal muayene) endişeyi artırır. Yüksek PSA (4.0-10.0 ng/mL) yaklaşık %25 kanser olasılığı ile ilişkilidir - bu, bu aralıktaki 4 erkekten 3\'ünün yüksek PSA\'ya rağmen kanseri OLMADIĞI anlamına gelir.',

    alternativeMeasures:
      'Birkaç gelişmiş test, prostat kanseri tespitini iyileştirmek ve gereksiz biyopsileri azaltmak için PSA\'yı tamamlar. Serbest PSA yüzdesi, serbest (bağlanmamış) PSA\'nın toplam PSA\'ya oranını ölçer. Kanser hücreleri daha fazla kompleks PSA üretir, bu nedenle daha düşük serbest PSA yüzdeleri (<%10-15) daha yüksek kanser riskini gösterirken, daha yüksek yüzdeler (>%25) iyi huylu durumları gösterir. Prostat Sağlık İndeksi (PHI), toplam PSA, serbest PSA ve [-2]proPSA\'yı kanser olasılığını ve agresifliğini daha iyi tahmin eden tek bir puana birleştirir. 35\'in üzerindeki PHI puanları yüksek riski gösterir. 4Kscore testi dört prostat spesifik kallikrein belirtecini ölçer ve bunları klinik bilgilerle birleştirerek biyopside agresif kanser (Gleason 7 veya daha yüksek) bulma olasılığını tahmin eder.',

    demographicDifferences:
      'PSA seviyeleri ve prostat kanseri riski demografik gruplar arasında önemli ölçüde değişir ve kişiselleştirilmiş tarama yaklaşımları gerektirir. Yaş en güçlü faktördür - prostat kanseri 40 yaşın altındaki erkeklerde nadirdir, 50 yaşından sonra risk dramatik olarak artar. Prostat kanserlerinin yaklaşık %60\'ı 65 yaşın üzerindeki erkeklerde teşhis edilir. Yaşa göre ayarlanmış PSA referans aralıkları, yaşlanma ile doğal PSA artışını hesaba katar: 40\'lı yaşlarındaki erkekler genellikle 2.5 ng/mL\'nin altında PSA\'ya sahip olmalıdır, 50\'li yaşlarda 3.5 ng/mL\'nin altında, 60\'lı yaşlarda 4.5 ng/mL\'nin altında ve 70\'li yaşlarda 6.5 ng/mL\'nin altında. Etnik köken riski derinden etkiler. Afrika kökenli Amerikalı erkekler, beyaz erkeklere kıyasla yaklaşık 1.7 kat daha yüksek prostat kanseri insidansına ve 2.2 kat daha yüksek ölüm oranına sahiptir.',

    medicalDisclaimer:
      'Bu PSA hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. PSA test sonuçları, tam tıbbi geçmişiniz, aile geçmişiniz, etnik kökeniniz, fiziksel muayene bulguları ve diğer risk faktörleri bağlamında kalifiye sağlık profesyonelleri tarafından yorumlanmalıdır. Tek başına bir PSA değeri prostat kanserini veya başka herhangi bir durumu teşhis edemez. Yüksek PSA, iyi huylu durumlardan, son cinsel aktiviteden, egzersizden, idrar yolu enfeksiyonlarından veya prostat prosedürlerinden kaynaklanabilir. Normal PSA, prostat kanserinin olmadığını garanti etmez. Bu hesaplayıcı, bir ürolog veya birinci basamak doktor ile konsültasyonun yerini almaz. Yüksek veya yükselen PSA\'nız, anormal dijital rektal muayeneniz, idrar semptomlarınız, prostat kanseri aile geçmişiniz veya diğer endişe verici faktörleriniz varsa, lütfen acil tıbbi değerlendirme arayın.',

    references: [
      'Amerikan Kanser Derneği - Prostat Kanseri Erken Tespit Kılavuzları',
      'ABD Önleyici Hizmetler Görev Gücü (USPSTF) - Prostat Kanseri Tarama Önerileri',
      'Amerikan Üroloji Derneği (AUA) - Prostat Kanserinin Erken Tespiti Kılavuzları',
      'Ulusal Kanser Enstitüsü (NCI) - Prostat-Spesifik Antijen (PSA) Testi',
      'Thompson IM, Ankerst DP, Chi C, ve ark. 3.0 ng/mL veya daha düşük başlangıç PSA seviyesine sahip erkeklerde prostat spesifik antijenin işletme özellikleri. JAMA. 2005;294(1):66-70.',
    ],

    tips: [
      'Afrika kökenli Amerikalıysanız veya prostat kanseri aile öyküsü varsa 50 yaşından önce veya 40-45 yaşında PSA taramasını doktorunuzla görüşün',
      'Yüksek PSA\'nın kanseriniz olduğu anlamına gelmediğini anlayın - PSA 4-10 ng/mL olan erkeklerin yaklaşık %75\'inde kanser yoktur',
      'PSA\'nızı zamanla takip edin - eğilimler ve hız tek değerlerden daha önemlidir',
      'Test öncesi 48 saat boyunca PSA\'yı geçici olarak yükseltebilecek aktivitelerden (ejakülasyon, şiddetli egzersiz, bisiklet) kaçının',
      'PSA yüksekse, biyopsinin gerekli olup olmadığını belirlemeye yardımcı olabilecek ek testler (serbest PSA, PHI, 4Kscore, prostat MRI) hakkında bilgi edinin',
    ],

    faqs: [
      {
        question: 'Normal PSA seviyesi nedir?',
        answer:
          'PSA seviyeleri yaşla birlikte doğal olarak artar, bu nedenle "normal" değişir. 50 yaşın altındaki erkekler için 2.5 ng/mL\'nin altında PSA tipiktir. 50-59 yaş arası erkekler için 3.5 ng/mL\'nin altında normal; 60-69 için 4.5 ng/mL\'nin altında; ve 70+ için 6.5 ng/mL\'nin altında. Ancak, geleneksel 4.0 ng/mL eşiği hala yaygın olarak kullanılmaktadır. Tek bir değerden daha önemlisi zaman içindeki eğilimdir - hızla yükselen PSA, geleneksel eşiklerin altında olsa bile endişe verici olabilir.',
      },
      {
        question: 'Kanser dışında PSA\'yı yükselten nedir?',
        answer:
          'İyi huylu prostat büyümesi (BPH), prostatit (prostat enfeksiyonu/iltihaplanması), idrar yolu enfeksiyonları ve son prostat prosedürleri dahil olmak üzere birçok iyi huylu durum PSA\'yı yükseltir. 48 saat içinde ejakülasyon, şiddetli egzersiz (özellikle bisiklet), dijital rektal muayene veya prostat masajından geçici yükselmeler meydana gelir. Prostat yaralanması, idrar retansiyonu ve belirli ilaçlar da PSA\'yı artırabilir. Bu nedenle anormal PSA her zaman tekrarlanmalı ve klinik bağlamda yorumlanmalıdır.',
      },
      {
        question: 'PSA\'m yüksekse, kesinlikle biyopsi gerekiyor mu?',
        answer:
          'Mutlaka değil. Modern prostat kanseri bakımı, biyopsiye geçmeden önce birkaç seçenek sunar. Ek kan testleri (serbest PSA yüzdesi, PHI, 4Kscore) daha spesifik kanser riski değerlendirmesi sağlar. Multiparametrik MRI şüpheli lezyonları tanımlayabilir ve bazen önemli kanseri ekarte ederek biyopsiden kaçınır. Sınırda PSA yükselmeler için (4-10 ng/mL), 6-12 ay boyunca PSA hızını izlemek uygun olabilir.',
      },
      {
        question: 'PSA çok düşük olabilir mi?',
        answer:
          'Evet, ancak düşük PSA genellikle oluumludur. 60 yaşında çok düşük PSA (< 0.5 ng/mL), ölümcül prostat kanserinin düşük yaşam boyu riskini öngörür ve potansiyel olarak daha uzun tarama aralıklarına izin verir. Ancak, bazı agresif prostat kanserleri az PSA üretir, bu nedenle idrar değişiklikleri, idrarda kan veya kemik ağrısı gibi semptomlar PSA seviyesine bakılmaksızın değerlendirilmelidir.',
      },
      {
        question: 'PSA\'mı ne sıklıkla kontrol ettirmeliyim?',
        answer:
          'Tarama sıklığı yaşa, başlangıç PSA\'ya ve risk faktörlerine bağlıdır. Ortalama riske ve PSA\'sı 1.0 ng/mL\'nin altında olan erkekler her 2-4 yılda bir tarama yaptırabilir. PSA\'sı 1.0-2.5 ng/mL olanlar tipik olarak her 1-2 yılda bir tarama yapar. PSA\'sı 2.5 ng/mL\'nin üzerinde veya risk faktörleri (aile geçmişi, Afrika kökenli Amerikalı) olan erkekler yıllık tarama gerektirebilir.',
      },
    ],
  },
};
