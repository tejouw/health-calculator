import { CalculatorContent } from '@/types/calculator';

export const cholesterolContent: CalculatorContent = {
  en: {
    whatIs:
      'Cholesterol is a waxy, fat-like substance found in every cell of your body. Your body needs cholesterol to build healthy cells, produce hormones, and create vitamin D. However, high levels of cholesterol in the blood can increase your risk of heart disease, the leading cause of death worldwide. A cholesterol calculator helps you understand your lipid panel results by analyzing your total cholesterol, HDL (high-density lipoprotein or "good" cholesterol), LDL (low-density lipoprotein or "bad" cholesterol), and triglyceride levels. It also calculates important ratios like the total cholesterol to HDL ratio, which is considered one of the best predictors of cardiovascular risk according to the Framingham Heart Study. Understanding your cholesterol numbers empowers you to make informed decisions about your heart health and work with your healthcare provider to develop an appropriate management strategy.',

    howToCalculate:
      'To use the cholesterol calculator, you need results from a lipid panel blood test, which measures four key values. Total cholesterol represents the overall amount of cholesterol in your blood, including both HDL and LDL plus other lipid components. HDL (high-density lipoprotein) is known as "good" cholesterol because it helps remove other forms of cholesterol from your bloodstream by carrying it back to the liver for processing. LDL (low-density lipoprotein) is called "bad" cholesterol because high levels can lead to plaque buildup in arteries (atherosclerosis). Triglycerides are a type of fat in your blood that your body uses for energy; elevated levels are associated with increased heart disease risk. Enter your values in either mg/dL (milligrams per deciliter, used in the US and Turkey) or mmol/L (millimoles per liter, used in many European countries). The calculator will analyze each value against established medical guidelines and compute important ratios including total/HDL ratio, LDL/HDL ratio, triglycerides/HDL ratio, and non-HDL cholesterol.',

    formulaDetails:
      'The cholesterol calculator uses several formulas and reference ranges based on guidelines from the American Heart Association (AHA), National Cholesterol Education Program (NCEP ATP III), and World Health Organization (WHO). The key calculations include: Non-HDL Cholesterol = Total Cholesterol - HDL, which captures all atherogenic (artery-clogging) lipoproteins including LDL and VLDL. The Total Cholesterol/HDL Ratio = Total Cholesterol ÷ HDL, where values below 3.5 are optimal, 3.5-5.0 are normal, and above 5.0 indicate increased cardiovascular risk. The LDL/HDL Ratio = LDL ÷ HDL, with optimal values below 2.5 and high-risk values above 3.5. The Triglycerides/HDL Ratio = Triglycerides ÷ HDL, which is an emerging marker for insulin resistance; values below 2.0 are ideal, while values above 4.0 suggest metabolic dysfunction. For unit conversion, 1 mmol/L of cholesterol equals approximately 38.67 mg/dL, and 1 mmol/L of triglycerides equals approximately 88.57 mg/dL.',

    categories: [
      {
        range: '< 200 mg/dL',
        label: 'Desirable Total Cholesterol',
        description:
          'Your total cholesterol is in the desirable range, associated with lower cardiovascular risk.',
        color: '#10B981',
      },
      {
        range: '200-239 mg/dL',
        label: 'Borderline High Total Cholesterol',
        description:
          'Your total cholesterol is borderline high. Lifestyle modifications are recommended.',
        color: '#F59E0B',
      },
      {
        range: '≥ 240 mg/dL',
        label: 'High Total Cholesterol',
        description:
          'Your total cholesterol is high, doubling heart disease risk compared to desirable levels. Medical consultation advised.',
        color: '#EF4444',
      },
      {
        range: '≥ 60 mg/dL',
        label: 'Optimal HDL',
        description:
          'High HDL levels are protective against heart disease. HDL acts as a cardiovascular shield.',
        color: '#10B981',
      },
      {
        range: '< 40 mg/dL',
        label: 'Low HDL (Risk Factor)',
        description:
          'Low HDL is an independent risk factor for heart disease, even if total cholesterol is normal.',
        color: '#EF4444',
      },
      {
        range: '< 100 mg/dL',
        label: 'Optimal LDL',
        description:
          'Your LDL is at optimal levels. LDL below 100 is the goal for most adults.',
        color: '#10B981',
      },
      {
        range: '≥ 190 mg/dL',
        label: 'Very High LDL',
        description:
          'Very high LDL significantly increases the risk of atherosclerosis and cardiovascular events. Medication is usually recommended.',
        color: '#EF4444',
      },
      {
        range: '< 150 mg/dL',
        label: 'Normal Triglycerides',
        description:
          'Your triglyceride level is normal. Elevated triglycerides are linked to metabolic syndrome.',
        color: '#10B981',
      },
    ],

    interpretation:
      'Interpreting cholesterol results requires looking at the complete picture, not just individual numbers. A person with total cholesterol of 220 mg/dL but high HDL of 70 mg/dL may actually have lower cardiovascular risk than someone with total cholesterol of 190 mg/dL but HDL of only 35 mg/dL. This is why cholesterol ratios are so important. The total cholesterol to HDL ratio is considered the single best predictor of coronary heart disease risk by many cardiologists. An ideal ratio is below 3.5, while ratios above 5.0 indicate significantly elevated risk. The triglycerides to HDL ratio has emerged as a powerful marker for metabolic syndrome and insulin resistance — conditions that dramatically increase cardiovascular risk even when LDL levels appear normal. Non-HDL cholesterol (total cholesterol minus HDL) is increasingly recognized as a better predictor of cardiovascular risk than LDL alone, because it includes VLDL and other atherogenic particles. According to the American College of Cardiology, non-HDL cholesterol should ideally be less than 130 mg/dL.',

    limitations:
      'While cholesterol levels are important cardiovascular risk indicators, they have several limitations. First, cholesterol is just one of many risk factors for heart disease. Other factors including blood pressure, smoking, diabetes, family history, age, obesity, physical inactivity, and inflammation markers (like C-reactive protein) also play crucial roles. Second, standard lipid panels do not measure LDL particle size, which significantly affects risk — small, dense LDL particles are much more atherogenic than large, buoyant ones. Advanced lipid testing (NMR LipoProfile or ion mobility) can provide this information. Third, cholesterol levels naturally fluctuate throughout the day and can be affected by recent meals, illness, stress, medications, pregnancy, and seasonal changes. A single measurement may not accurately represent your typical levels. Fourth, the relationship between dietary cholesterol and blood cholesterol is more complex than previously thought — dietary cholesterol has less impact on blood levels than saturated and trans fats for most people. Fifth, genetic factors (like familial hypercholesterolemia) can cause high cholesterol regardless of lifestyle. Finally, some medications and medical conditions can affect cholesterol levels independently of cardiovascular risk.',

    healthRisks:
      'Abnormal cholesterol levels contribute to atherosclerosis — the gradual buildup of fatty plaques inside artery walls. Over time, these plaques narrow arteries, reducing blood flow and increasing the risk of serious cardiovascular events. High LDL cholesterol is a primary driver of plaque formation. When LDL particles penetrate the artery wall, they trigger an inflammatory response that accelerates plaque development. Plaques can rupture suddenly, causing blood clots that block blood flow entirely, leading to heart attack or stroke. Low HDL cholesterol means less reverse cholesterol transport — the process by which HDL carries excess cholesterol from arteries back to the liver for removal. This leaves more cholesterol available to form plaques. High triglycerides are associated with metabolic syndrome, insulin resistance, and increased risk of pancreatitis at very high levels (above 500 mg/dL). The combination of high triglycerides and low HDL is particularly dangerous and is a hallmark of metabolic syndrome. According to the World Health Organization, cardiovascular diseases are the number one cause of death globally, claiming approximately 17.9 million lives each year. Maintaining healthy cholesterol levels through diet, exercise, and when necessary medication, is one of the most effective strategies for reducing cardiovascular risk.',

    alternativeMeasures:
      'Beyond standard cholesterol testing, several additional markers provide deeper insight into cardiovascular risk. Apolipoprotein B (ApoB) measures the total number of atherogenic lipoprotein particles, which some experts consider a better predictor of cardiovascular risk than LDL-C alone. Lipoprotein(a) or Lp(a) is a genetically determined risk factor that standard lipid panels do not measure; elevated Lp(a) significantly increases cardiovascular risk regardless of other cholesterol levels. High-sensitivity C-reactive protein (hs-CRP) measures systemic inflammation, which plays a key role in atherosclerosis. The coronary artery calcium (CAC) score uses CT scanning to directly visualize plaque buildup in coronary arteries. Advanced lipid testing through NMR spectroscopy or ion mobility can determine LDL particle number and size, providing more precise risk assessment. The ASCVD (Atherosclerotic Cardiovascular Disease) Risk Calculator, recommended by the ACC/AHA, combines multiple risk factors (age, sex, race, blood pressure, cholesterol, diabetes, smoking) to estimate 10-year cardiovascular risk.',

    medicalDisclaimer:
      'This cholesterol calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Cholesterol management decisions — including starting, changing, or stopping medications like statins — should always be made in consultation with a qualified healthcare provider who can consider your complete medical history, risk factors, and individual circumstances. Do not make dietary or medication changes based solely on calculator results. If your cholesterol levels are abnormal, consult your doctor for a comprehensive cardiovascular risk assessment. Results may not be accurate if values are entered incorrectly or if you have certain medical conditions.',

    references: [
      'American Heart Association (AHA) - Understanding Blood Cholesterol',
      'National Cholesterol Education Program (NCEP) - ATP III Guidelines',
      'Centers for Disease Control and Prevention (CDC) - Cholesterol',
      'World Health Organization (WHO) - Cardiovascular Diseases',
      'Framingham Heart Study - Cholesterol Ratios and CVD Risk',
      'Grundy SM, et al. 2018 AHA/ACC/AACVPR Guideline on the Management of Blood Cholesterol. J Am Coll Cardiol. 2019;73(24):e285-e350.',
      'Expert Panel on Detection, Evaluation, and Treatment of High Blood Cholesterol in Adults. JAMA. 2001;285(19):2486-2497.',
    ],

    tips: [
      'Get a fasting lipid panel for the most accurate triglyceride reading — fast for 9-12 hours before the blood draw',
      'Focus on cholesterol ratios (total/HDL ratio and triglycerides/HDL ratio) rather than just individual numbers for better risk assessment',
      'Replace saturated fats with unsaturated fats (olive oil, avocados, nuts) rather than replacing fat with refined carbohydrates',
      'Soluble fiber from oats, beans, and fruits can reduce LDL cholesterol by 5-10%',
      'Regular aerobic exercise (150+ minutes per week) can raise HDL by 5-10%',
      'Even modest weight loss (5-10% of body weight) can improve all cholesterol markers',
      'Omega-3 fatty acids from fatty fish or supplements can significantly lower triglycerides',
      'Ask your doctor about advanced lipid testing (ApoB, Lp(a), LDL particle size) for more detailed risk assessment',
    ],

    faqs: [
      {
        question: 'What are healthy cholesterol levels?',
        answer:
          'For most adults, desirable levels are: Total cholesterol below 200 mg/dL, LDL below 100 mg/dL (or below 70 for high-risk individuals), HDL above 60 mg/dL (below 40 is a risk factor), and triglycerides below 150 mg/dL. However, optimal targets may vary based on your overall cardiovascular risk profile, existing conditions, and medications. The total cholesterol to HDL ratio should ideally be below 3.5.',
      },
      {
        question: 'What is the difference between HDL and LDL cholesterol?',
        answer:
          'HDL (high-density lipoprotein) is called "good" cholesterol because it carries excess cholesterol from your arteries back to the liver for removal, acting like a cardiovascular cleanup crew. LDL (low-density lipoprotein) is called "bad" cholesterol because high levels can lead to plaque buildup in arteries (atherosclerosis), narrowing blood vessels and increasing heart attack and stroke risk. Think of HDL as carrying cholesterol away from arteries and LDL as depositing it in arteries.',
      },
      {
        question: 'Why is the cholesterol ratio important?',
        answer:
          'The total cholesterol to HDL ratio is considered one of the best predictors of heart disease risk because it accounts for the protective effect of HDL. For example, someone with total cholesterol of 250 but HDL of 80 (ratio 3.1) may have lower risk than someone with total cholesterol of 200 but HDL of 35 (ratio 5.7). The Framingham Heart Study found that the total/HDL ratio was more predictive of coronary events than either total cholesterol or LDL alone.',
      },
      {
        question: 'How often should I check my cholesterol?',
        answer:
          'The American Heart Association recommends that adults aged 20 and older have their cholesterol checked every 4-6 years if their risk is low. If you have cardiovascular risk factors (high blood pressure, diabetes, smoking, family history of early heart disease, obesity), you should be tested more frequently — typically annually. Children should be tested once between ages 9-11 and again between ages 17-21. If you are on cholesterol-lowering medication, your doctor will typically check levels every 3-12 months to monitor treatment effectiveness.',
      },
      {
        question: 'Can diet alone lower cholesterol?',
        answer:
          'Diet can significantly impact cholesterol levels, but the magnitude varies by individual. On average, dietary changes can reduce LDL cholesterol by 10-30%. Key dietary strategies include: reducing saturated fat (found in red meat, full-fat dairy, fried foods), eliminating trans fats (partially hydrogenated oils), increasing soluble fiber (oats, beans, apples, citrus), eating more omega-3 fatty acids (fatty fish, walnuts, flaxseed), and including plant sterols/stanols (found in fortified foods). However, some people have genetic conditions like familial hypercholesterolemia that require medication regardless of diet.',
      },
      {
        question: 'What does a high triglycerides to HDL ratio mean?',
        answer:
          'The triglycerides to HDL ratio is an emerging marker for insulin resistance and metabolic syndrome. A ratio above 3.0-4.0 suggests insulin resistance, meaning your body may not be processing blood sugar efficiently — even if your fasting glucose appears normal. This ratio also correlates with having small, dense LDL particles (the more dangerous type) rather than large, buoyant ones. An ideal ratio is below 2.0. High ratios are often improved through reducing refined carbohydrates and sugar, increasing physical activity, losing weight, and eating more healthy fats.',
      },
      {
        question: 'Do eggs raise cholesterol?',
        answer:
          'The relationship between dietary cholesterol (from foods like eggs) and blood cholesterol is more nuanced than previously believed. For most people (about 75% of the population), dietary cholesterol has a modest effect on blood cholesterol levels. The 2020-2025 Dietary Guidelines for Americans removed the previous 300mg daily cholesterol limit, though they still recommend eating as little dietary cholesterol as possible as part of a healthy eating pattern. Most studies show that consuming 1-3 eggs per day does not significantly increase cardiovascular risk in healthy individuals. However, people with familial hypercholesterolemia or diabetes may be more sensitive to dietary cholesterol.',
      },
    ],
  },
  tr: {
    whatIs:
      'Kolesterol, vücudunuzdaki her hücrede bulunan mumsu, yağ benzeri bir maddedir. Vücudunuzun sağlıklı hücreler oluşturmak, hormon üretmek ve D vitamini sentezlemek için kolesterole ihtiyacı vardır. Ancak kandaki yüksek kolesterol seviyeleri, dünya genelinde birinci ölüm sebebi olan kalp hastalığı riskinizi artırabilir. Kolesterol hesaplayıcı, toplam kolesterol, HDL (yüksek yoğunluklu lipoprotein veya "iyi" kolesterol), LDL (düşük yoğunluklu lipoprotein veya "kötü" kolesterol) ve trigliserit seviyelerinizi analiz ederek lipid paneli sonuçlarınızı anlamanıza yardımcı olur. Ayrıca Framingham Kalp Çalışması\'na göre kardiyovasküler riskin en iyi belirleyicilerinden biri kabul edilen toplam kolesterol/HDL oranı gibi önemli oranları da hesaplar. Kolesterol değerlerinizi anlamak, kalp sağlığınız hakkında bilinçli kararlar vermenizi ve sağlık uzmanınızla uygun bir yönetim stratejisi geliştirmenizi sağlar.',

    howToCalculate:
      'Kolesterol hesaplayıcıyı kullanmak için dört temel değeri ölçen bir lipid paneli kan testinin sonuçlarına ihtiyacınız vardır. Toplam kolesterol, hem HDL hem de LDL ile diğer lipid bileşenlerini içeren kanınızdaki toplam kolesterol miktarını temsil eder. HDL (yüksek yoğunluklu lipoprotein), diğer kolesterol formlarını kan dolaşımınızdan uzaklaştırıp işlenmek üzere karaciğere geri taşıdığı için "iyi" kolesterol olarak bilinir. LDL (düşük yoğunluklu lipoprotein), yüksek seviyeleri arterlerde plak birikimine (ateroskleroz) yol açabileceği için "kötü" kolesterol olarak adlandırılır. Trigliseritler, vücudunuzun enerji için kullandığı bir kan yağı türüdür; yüksek seviyeleri artmış kalp hastalığı riskiyle ilişkilidir. Değerlerinizi mg/dL (desilitrede miligram, ABD ve Türkiye\'de kullanılır) veya mmol/L (litrede milimol, birçok Avrupa ülkesinde kullanılır) cinsinden girin. Hesaplayıcı her değeri yerleşik tıbbi kılavuzlara göre analiz eder ve toplam/HDL oranı, LDL/HDL oranı, trigliserit/HDL oranı ve non-HDL kolesterol dahil önemli oranları hesaplar.',

    formulaDetails:
      'Kolesterol hesaplayıcı, Amerikan Kalp Derneği (AHA), Ulusal Kolesterol Eğitim Programı (NCEP ATP III) ve Dünya Sağlık Örgütü (WHO) kılavuzlarına dayalı çeşitli formüller ve referans aralıkları kullanır. Temel hesaplamalar şunları içerir: Non-HDL Kolesterol = Toplam Kolesterol - HDL, bu LDL ve VLDL dahil tüm aterojenik (arter tıkayıcı) lipoproteinleri kapsar. Toplam Kolesterol/HDL Oranı = Toplam Kolesterol ÷ HDL, burada 3.5\'in altındaki değerler optimal, 3.5-5.0 normal ve 5.0\'ın üzeri artmış kardiyovasküler riski gösterir. LDL/HDL Oranı = LDL ÷ HDL, optimal değerler 2.5\'in altında ve yüksek risk değerleri 3.5\'in üzerindedir. Trigliserit/HDL Oranı = Trigliserit ÷ HDL, insülin direnci için yeni bir belirteçtir; 2.0\'ın altındaki değerler idealdir, 4.0\'ın üzerindeki değerler metabolik bozukluğu düşündürür. Birim dönüşümü için, 1 mmol/L kolesterol yaklaşık 38.67 mg/dL\'ye, 1 mmol/L trigliserit yaklaşık 88.57 mg/dL\'ye eşittir.',

    categories: [
      {
        range: '< 200 mg/dL',
        label: 'İdeal Toplam Kolesterol',
        description:
          'Toplam kolesterolünüz ideal aralıkta, düşük kardiyovasküler riskle ilişkili.',
        color: '#10B981',
      },
      {
        range: '200-239 mg/dL',
        label: 'Sınırda Yüksek Toplam Kolesterol',
        description:
          'Toplam kolesterolünüz sınırda yüksek. Yaşam tarzı değişiklikleri önerilir.',
        color: '#F59E0B',
      },
      {
        range: '≥ 240 mg/dL',
        label: 'Yüksek Toplam Kolesterol',
        description:
          'Toplam kolesterolünüz yüksek, ideal seviyelere kıyasla kalp hastalığı riskini iki katına çıkarır. Tıbbi danışmanlık önerilir.',
        color: '#EF4444',
      },
      {
        range: '≥ 60 mg/dL',
        label: 'Optimal HDL',
        description:
          'Yüksek HDL seviyeleri kalp hastalığına karşı koruyucudur. HDL kardiyovasküler bir kalkan görevi görür.',
        color: '#10B981',
      },
      {
        range: '< 40 mg/dL',
        label: 'Düşük HDL (Risk Faktörü)',
        description:
          'Düşük HDL, toplam kolesterol normal olsa bile kalp hastalığı için bağımsız bir risk faktörüdür.',
        color: '#EF4444',
      },
      {
        range: '< 100 mg/dL',
        label: 'Optimal LDL',
        description:
          'LDL\'niz optimal seviyelerde. Çoğu yetişkin için hedef 100 mg/dL\'nin altıdır.',
        color: '#10B981',
      },
      {
        range: '≥ 190 mg/dL',
        label: 'Çok Yüksek LDL',
        description:
          'Çok yüksek LDL, ateroskleroz ve kardiyovasküler olay riskini önemli ölçüde artırır. Genellikle ilaç tedavisi önerilir.',
        color: '#EF4444',
      },
      {
        range: '< 150 mg/dL',
        label: 'Normal Trigliserit',
        description:
          'Trigliserit seviyeniz normal. Yüksek trigliseritler metabolik sendromla ilişkilidir.',
        color: '#10B981',
      },
    ],

    interpretation:
      'Kolesterol sonuçlarını yorumlamak, tek tek sayılar yerine bütünsel bir bakış gerektirir. Toplam kolesterolü 220 mg/dL ancak HDL\'si 70 mg/dL olan bir kişi, toplam kolesterolü 190 mg/dL ancak HDL\'si yalnızca 35 mg/dL olan birinden aslında daha düşük kardiyovasküler riske sahip olabilir. Bu yüzden kolesterol oranları çok önemlidir. Toplam kolesterol/HDL oranı, birçok kardiyolog tarafından koroner kalp hastalığı riskinin en iyi tek belirleyicisi olarak kabul edilir. İdeal bir oran 3.5\'in altındadır, 5.0\'ın üzerindeki oranlar ise önemli ölçüde artmış riski gösterir. Trigliserit/HDL oranı, metabolik sendrom ve insülin direnci için güçlü bir belirteç olarak öne çıkmaktadır — LDL seviyeleri normal görünse bile kardiyovasküler riski dramatik şekilde artıran durumlar. Non-HDL kolesterol (toplam kolesterol eksi HDL), VLDL ve diğer aterojenik parçacıkları içerdiği için LDL\'den tek başına daha iyi bir kardiyovasküler risk öngörücüsü olarak giderek daha fazla kabul görmektedir. Amerikan Kardiyoloji Koleji\'ne göre, non-HDL kolesterol ideal olarak 130 mg/dL\'nin altında olmalıdır.',

    limitations:
      'Kolesterol seviyeleri önemli kardiyovasküler risk göstergeleri olsa da çeşitli sınırlamaları vardır. İlk olarak, kolesterol kalp hastalığı için birçok risk faktöründen sadece biridir. Kan basıncı, sigara, diyabet, aile öyküsü, yaş, obezite, fiziksel hareketsizlik ve inflamasyon belirteçleri (C-reaktif protein gibi) gibi diğer faktörler de kritik roller oynar. İkinci olarak, standart lipid panelleri riski önemli ölçüde etkileyen LDL parçacık boyutunu ölçmez — küçük, yoğun LDL parçacıkları büyük, hafif olanlardan çok daha aterojenik olur. Gelişmiş lipid testleri (NMR LipoProfile veya iyon hareketliliği) bu bilgiyi sağlayabilir. Üçüncü olarak, kolesterol seviyeleri gün boyunca doğal olarak dalgalanır ve yakın zamandaki öğünler, hastalık, stres, ilaçlar, hamilelik ve mevsimsel değişikliklerden etkilenebilir. Tek bir ölçüm tipik seviyelerinizi doğru temsil etmeyebilir. Dördüncü olarak, diyet kolesterolü ile kan kolesterolü arasındaki ilişki daha önce düşünüldüğünden daha karmaşıktır — çoğu insan için diyet kolesterolü, doymuş ve trans yağlara kıyasla kan seviyelerine daha az etki eder. Beşinci olarak, genetik faktörler (ailesel hiperkolesterolemi gibi) yaşam tarzından bağımsız olarak yüksek kolesterole neden olabilir. Son olarak, bazı ilaçlar ve tıbbi durumlar kardiyovasküler riskten bağımsız olarak kolesterol seviyelerini etkileyebilir.',

    healthRisks:
      'Anormal kolesterol seviyeleri ateroskleroza — arter duvarları içindeki yağlı plakların kademeli birikimine katkıda bulunur. Zamanla bu plaklar arterleri daraltır, kan akışını azaltır ve ciddi kardiyovasküler olay riskini artırır. Yüksek LDL kolesterol, plak oluşumunun birincil itici gücüdür. LDL parçacıkları arter duvarına nüfuz ettiğinde, plak gelişimini hızlandıran bir inflamatuar yanıtı tetikler. Plaklar aniden yırtılabilir, kan akışını tamamen engelleyen kan pıhtılarına neden olarak kalp krizi veya felce yol açabilir. Düşük HDL kolesterol, daha az ters kolesterol taşınması anlamına gelir — HDL\'nin fazla kolesterolü arterlerden uzaklaştırma işlemi için karaciğere geri taşıdığı süreç. Bu, plak oluşturmak için daha fazla kolesterol bırakır. Yüksek trigliseritler metabolik sendrom, insülin direnci ve çok yüksek seviyelerde (500 mg/dL üzeri) pankreatit riskinin artmasıyla ilişkilidir. Yüksek trigliserit ve düşük HDL kombinasyonu özellikle tehlikelidir ve metabolik sendromun ayırt edici özelliğidir. Dünya Sağlık Örgütü\'ne göre, kardiyovasküler hastalıklar küresel olarak bir numaralı ölüm nedenidir ve her yıl yaklaşık 17.9 milyon can almaktadır. Diyet, egzersiz ve gerektiğinde ilaç yoluyla sağlıklı kolesterol seviyelerini korumak, kardiyovasküler riski azaltmanın en etkili stratejilerinden biridir.',

    alternativeMeasures:
      'Standart kolesterol testinin ötesinde, çeşitli ek belirteçler kardiyovasküler risk hakkında daha derin bilgi sağlar. Apolipoprotein B (ApoB), aterojenik lipoprotein parçacıklarının toplam sayısını ölçer ve bazı uzmanlar bunu tek başına LDL-C\'den daha iyi bir kardiyovasküler risk öngörücüsü olarak kabul eder. Lipoprotein(a) veya Lp(a), standart lipid panellerinin ölçmediği genetik olarak belirlenmiş bir risk faktörüdür; yüksek Lp(a), diğer kolesterol seviyelerinden bağımsız olarak kardiyovasküler riski önemli ölçüde artırır. Yüksek duyarlıklı C-reaktif protein (hs-CRP), aterosklerozda önemli rol oynayan sistemik inflamasyonu ölçer. Koroner arter kalsiyum (CAC) skoru, koroner arterlerdeki plak birikimini doğrudan görselleştirmek için CT taraması kullanır. NMR spektroskopisi veya iyon hareketliliği yoluyla gelişmiş lipid testi, daha kesin risk değerlendirmesi sağlayan LDL parçacık sayısını ve boyutunu belirleyebilir. ACC/AHA tarafından önerilen ASCVD (Aterosklerotik Kardiyovasküler Hastalık) Risk Hesaplayıcı, 10 yıllık kardiyovasküler riski tahmin etmek için birden fazla risk faktörünü (yaş, cinsiyet, ırk, kan basıncı, kolesterol, diyabet, sigara) birleştirir.',

    medicalDisclaimer:
      'Bu kolesterol hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiyenin, teşhisin veya tedavinin yerine kullanılmamalıdır. Statin gibi ilaçları başlatma, değiştirme veya bırakma dahil kolesterol yönetimi kararları, tam tıbbi geçmişinizi, risk faktörlerinizi ve bireysel koşullarınızı değerlendirebilecek kalifiye bir sağlık uzmanı ile danışarak verilmelidir. Yalnızca hesaplayıcı sonuçlarına dayanarak beslenme veya ilaç değişiklikleri yapmayın. Kolesterol değerleriniz anormalse, kapsamlı bir kardiyovasküler risk değerlendirmesi için doktorunuza danışın. Değerler yanlış girilirse veya belirli tıbbi durumlarınız varsa sonuçlar doğru olmayabilir.',

    references: [
      'Amerikan Kalp Derneği (AHA) - Kan Kolesterolünü Anlama',
      'Ulusal Kolesterol Eğitim Programı (NCEP) - ATP III Kılavuzları',
      'Hastalık Kontrol ve Önleme Merkezleri (CDC) - Kolesterol',
      'Dünya Sağlık Örgütü (WHO) - Kardiyovasküler Hastalıklar',
      'Framingham Kalp Çalışması - Kolesterol Oranları ve KVH Riski',
      'Grundy SM, ve ark. 2018 AHA/ACC/AACVPR Kan Kolesterol Yönetimi Kılavuzu. J Am Coll Cardiol. 2019;73(24):e285-e350.',
      'Yetişkinlerde Yüksek Kan Kolesterolü Tespit, Değerlendirme ve Tedavi Uzman Paneli. JAMA. 2001;285(19):2486-2497.',
    ],

    tips: [
      'En doğru trigliserit okuması için açlık lipid paneli yaptırın — kan alımından 9-12 saat önce aç kalın',
      'Daha iyi risk değerlendirmesi için tek tek sayılar yerine kolesterol oranlarına (toplam/HDL oranı ve trigliserit/HDL oranı) odaklanın',
      'Doymuş yağları rafine karbonhidratlar yerine doymamış yağlarla (zeytinyağı, avokado, kuruyemişler) değiştirin',
      'Yulaf, baklagiller ve meyvelerden alınan çözünür lif, LDL kolesterolü %5-10 azaltabilir',
      'Düzenli aerobik egzersiz (haftada 150+ dakika) HDL\'yi %5-10 artırabilir',
      'Mütevazı bir kilo kaybı bile (vücut ağırlığının %5-10\'u) tüm kolesterol belirteçlerini iyileştirebilir',
      'Yağlı balık veya takviyelerden alınan omega-3 yağ asitleri trigliseritleri önemli ölçüde düşürebilir',
      'Daha ayrıntılı risk değerlendirmesi için doktorunuzdan gelişmiş lipid testi (ApoB, Lp(a), LDL parçacık boyutu) isteyin',
    ],

    faqs: [
      {
        question: 'Sağlıklı kolesterol seviyeleri nelerdir?',
        answer:
          'Çoğu yetişkin için ideal seviyeler şunlardır: Toplam kolesterol 200 mg/dL\'nin altında, LDL 100 mg/dL\'nin altında (yüksek riskli bireyler için 70\'in altında), HDL 60 mg/dL\'nin üstünde (40\'ın altı risk faktörüdür) ve trigliseritler 150 mg/dL\'nin altında. Ancak optimal hedefler genel kardiyovasküler risk profilinize, mevcut durumlarınıza ve ilaçlarınıza göre değişebilir. Toplam kolesterol/HDL oranı ideal olarak 3.5\'in altında olmalıdır.',
      },
      {
        question: 'HDL ve LDL kolesterol arasındaki fark nedir?',
        answer:
          'HDL (yüksek yoğunluklu lipoprotein), fazla kolesterolü arterlerinizden uzaklaştırma için karaciğere geri taşıdığı için "iyi" kolesterol olarak adlandırılır, kardiyovasküler bir temizlik ekibi gibi çalışır. LDL (düşük yoğunluklu lipoprotein), yüksek seviyeleri arterlerde plak birikimine (ateroskleroz) yol açabileceği, kan damarlarını daraltabileceği ve kalp krizi ile felç riskini artırabileceği için "kötü" kolesterol olarak adlandırılır. HDL\'yi kolesterolü arterlerden uzaklaştıran, LDL\'yi ise arterlere biriktiren olarak düşünün.',
      },
      {
        question: 'Kolesterol oranı neden önemlidir?',
        answer:
          'Toplam kolesterol/HDL oranı, HDL\'nin koruyucu etkisini hesaba kattığı için kalp hastalığı riskinin en iyi belirleyicilerinden biri kabul edilir. Örneğin, toplam kolesterolü 250 ancak HDL\'si 80 olan biri (oran 3.1), toplam kolesterolü 200 ancak HDL\'si 35 olan birinden (oran 5.7) daha düşük riske sahip olabilir. Framingham Kalp Çalışması, toplam/HDL oranının koroner olayları tek başına toplam kolesterol veya LDL\'den daha iyi öngördüğünü bulmuştur.',
      },
      {
        question: 'Kolesterolümü ne sıklıkla kontrol ettirmeliyim?',
        answer:
          'Amerikan Kalp Derneği, 20 yaş ve üzeri yetişkinlerin riskleri düşükse her 4-6 yılda bir kolesterol kontrolü yaptırmasını önerir. Kardiyovasküler risk faktörleriniz varsa (yüksek tansiyon, diyabet, sigara, erken kalp hastalığı aile öyküsü, obezite) daha sık — genellikle yılda bir test yaptırmalısınız. Çocuklar 9-11 yaşları arasında bir kez ve 17-21 yaşları arasında tekrar test edilmelidir. Kolesterol düşürücü ilaç kullanıyorsanız, doktorunuz tedavi etkinliğini izlemek için genellikle her 3-12 ayda bir seviyeleri kontrol eder.',
      },
      {
        question: 'Diyet tek başına kolesterolü düşürebilir mi?',
        answer:
          'Diyet kolesterol seviyelerini önemli ölçüde etkileyebilir, ancak etkinin büyüklüğü kişiye göre değişir. Ortalama olarak, beslenme değişiklikleri LDL kolesterolü %10-30 azaltabilir. Temel beslenme stratejileri şunlardır: doymuş yağları azaltmak (kırmızı et, tam yağlı süt ürünleri, kızartılmış yiyeceklerde bulunur), trans yağları elemek (kısmen hidrojenize yağlar), çözünür lifi artırmak (yulaf, baklagiller, elma, narenciye), daha fazla omega-3 yağ asidi tüketmek (yağlı balık, ceviz, keten tohumu) ve bitkisel sterol/stanol eklemek (zenginleştirilmiş gıdalarda bulunur). Ancak bazı kişilerin beslenme fark etmeksizin ilaç gerektiren ailesel hiperkolesterolemi gibi genetik durumları vardır.',
      },
      {
        question: 'Yüksek trigliserit/HDL oranı ne anlama gelir?',
        answer:
          'Trigliserit/HDL oranı, insülin direnci ve metabolik sendrom için yeni bir belirteçtir. 3.0-4.0\'ın üzerindeki bir oran insülin direncini düşündürür, yani açlık glukozunuz normal görünse bile vücudunuz kan şekerini verimli işlemiyor olabilir. Bu oran ayrıca büyük, hafif olanlar yerine küçük, yoğun LDL parçacıklarına (daha tehlikeli tip) sahip olmakla da ilişkilidir. İdeal bir oran 2.0\'ın altındadır. Yüksek oranlar genellikle rafine karbonhidrat ve şeker azaltma, fiziksel aktiviteyi artırma, kilo verme ve daha fazla sağlıklı yağ yeme ile iyileştirilir.',
      },
      {
        question: 'Yumurta kolesterolü yükseltir mi?',
        answer:
          'Besinsel kolesterol (yumurta gibi gıdalardan) ile kan kolesterolü arasındaki ilişki daha önce düşünüldüğünden daha nüanslıdır. Çoğu insan (nüfusun yaklaşık %75\'i) için besinsel kolesterolün kan kolesterol seviyeleri üzerinde mütevazı bir etkisi vardır. 2020-2025 Amerika Beslenme Kılavuzları önceki günlük 300mg kolesterol sınırını kaldırmıştır, ancak sağlıklı beslenmenin bir parçası olarak mümkün olduğunca az besinsel kolesterol tüketmeyi hâlâ önermektedir. Çoğu çalışma, sağlıklı bireylerde günde 1-3 yumurta tüketmenin kardiyovasküler riski önemli ölçüde artırmadığını göstermektedir. Ancak ailesel hiperkolesterolemisi veya diyabeti olan kişiler besinsel kolesterole daha duyarlı olabilir.',
      },
    ],
  },
};
