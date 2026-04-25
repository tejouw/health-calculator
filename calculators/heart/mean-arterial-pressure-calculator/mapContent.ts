import { CalculatorContent } from '@/types/calculator';

export const mapContent: CalculatorContent = {
  en: {
    whatIs:
      'Mean Arterial Pressure (MAP) is the average pressure in your arteries during one cardiac cycle and is considered a more accurate indicator of organ perfusion than systolic or diastolic blood pressure alone. Because the heart spends approximately two-thirds of each cycle in diastole (relaxation) and only one-third in systole (contraction), MAP is weighted accordingly: MAP = (2 × Diastolic + Systolic) / 3. Doctors and intensive-care clinicians rely heavily on MAP to determine whether your blood is reaching vital organs such as the brain, heart, and kidneys with sufficient force. The American Heart Association and most critical-care guidelines define a healthy adult MAP range as 70 to 100 mmHg, with at least 65 mmHg often required to maintain adequate organ perfusion in critically ill patients. A MAP below 60 mmHg signals inadequate perfusion and is a medical emergency, while a sustained MAP above 110 mmHg suggests hypertension and increases long-term cardiovascular risk. Calculating MAP from your standard blood pressure reading takes only seconds and provides a single, clinically meaningful number that complements systolic and diastolic measurements.',

    howToCalculate:
      'Calculating your Mean Arterial Pressure is straightforward and requires only two values from a standard blood pressure reading: your systolic pressure (the top number, measured when the heart contracts) and your diastolic pressure (the bottom number, measured when the heart rests between beats). Use the formula MAP = DBP + (1/3)(SBP - DBP), which is mathematically equivalent to MAP = (2 × DBP + SBP) / 3. For example, if your blood pressure is 120/80 mmHg, your MAP equals (2 × 80 + 120) / 3 = (160 + 120) / 3 = 280 / 3 ≈ 93 mmHg, which falls comfortably in the healthy range. For a reading of 140/90 mmHg, the calculation becomes (2 × 90 + 140) / 3 = 320 / 3 ≈ 107 mmHg, indicating elevated arterial pressure. Always measure blood pressure correctly: sit quietly for at least five minutes, place your arm at heart level, avoid caffeine or exercise for 30 minutes prior, and take two or three readings one minute apart, then average them before computing MAP.',

    formulaDetails:
      'The Mean Arterial Pressure formula reflects the physiological reality that the heart rests longer than it contracts during each beat. In a typical resting cardiac cycle of about 0.8 seconds, roughly 0.5 seconds (about two-thirds) is spent in diastole and 0.3 seconds (one-third) in systole. The classic formula MAP = (2 × DBP + SBP) / 3 weights diastolic pressure twice as heavily as systolic pressure to reflect this time distribution. An equivalent expression is MAP = DBP + (1/3) × (SBP - DBP), where (SBP - DBP) is the pulse pressure. This simple estimate works well at normal heart rates between 60 and 100 beats per minute. At higher heart rates—during exercise, fever, or tachycardia—diastole shortens disproportionately and the standard formula slightly underestimates true MAP; some clinicians use modified formulas like MAP = DBP + 0.412 × (SBP - DBP) for this scenario. In hospital settings, invasive arterial line monitoring measures MAP directly via continuous waveform analysis, which is the gold standard for critically ill patients. Pulse pressure, the difference between systolic and diastolic readings (normally 30 to 50 mmHg), is also clinically important: a wide pulse pressure (greater than 60 mmHg) often indicates arterial stiffness and elevated cardiovascular risk, while a narrow pulse pressure (less than 25 mmHg) may suggest low cardiac output.',

    categories: [
      {
        range: '< 60 mmHg',
        label: 'Low MAP (Hypotension)',
        description:
          'Inadequate perfusion of vital organs. May cause dizziness, confusion, fainting, organ damage, or shock. Requires immediate medical evaluation.',
        color: '#EF4444',
      },
      {
        range: '60 - 69 mmHg',
        label: 'Borderline Low',
        description:
          'Generally adequate at rest but may be insufficient during stress or activity. Critical-care guidelines often target at least 65 mmHg in sepsis and shock.',
        color: '#F59E0B',
      },
      {
        range: '70 - 99 mmHg',
        label: 'Normal MAP',
        description:
          'Healthy range for most adults. Indicates effective organ perfusion and balanced cardiovascular function. No intervention needed if asymptomatic.',
        color: '#10B981',
      },
      {
        range: '100 - 109 mmHg',
        label: 'Elevated MAP',
        description:
          'Above-normal arterial pressure. Sustained levels may stress arteries and contribute to long-term cardiovascular damage. Lifestyle changes recommended.',
        color: '#F97316',
      },
      {
        range: '\u2265 110 mmHg',
        label: 'High MAP',
        description:
          'Strongly suggests hypertension. Significantly increases stroke, heart attack, and kidney disease risk. Medical consultation and possibly medication required.',
        color: '#DC2626',
      },
    ],

    interpretation:
      'Interpreting MAP requires considering both the absolute value and your individual clinical context. A MAP between 70 and 100 mmHg in a healthy adult at rest is generally optimal, indicating that your circulatory system is efficiently delivering oxygenated blood to all organs. The 65 mmHg threshold is particularly important in intensive care: critically ill patients with sepsis, septic shock, or severe trauma typically require a MAP of at least 65 mmHg to prevent organ failure, with some clinicians targeting 75 mmHg or higher for patients with chronic hypertension. A MAP between 60 and 70 mmHg may be acceptable at rest in a young, healthy person but raises concern in older adults, those with kidney disease, or anyone showing symptoms like dizziness or confusion. MAP values consistently above 100 mmHg correlate with hypertension and increase risk for stroke, myocardial infarction, heart failure, and chronic kidney disease. However, MAP should never be interpreted in isolation: combine it with pulse pressure, heart rate, symptoms, and other vital signs. Athletes often have lower resting MAP due to cardiovascular conditioning, while older adults may have higher MAP due to arterial stiffening. Always discuss persistent abnormal values with a healthcare provider rather than self-diagnosing.',

    limitations:
      'While MAP is a powerful clinical tool, it has several important limitations. First, the standard formula (2 × DBP + SBP) / 3 is an estimate based on average heart rates and may underestimate true MAP at high heart rates (above 100 bpm) or overestimate it at very low rates. Second, MAP calculated from a single brachial cuff reading represents a snapshot in time and does not capture beat-to-beat variability, white coat effect, or circadian patterns; ambulatory or home monitoring provides a fuller picture. Third, MAP does not distinguish between high MAP caused by elevated systolic pressure (common in older adults with stiff arteries) versus elevated diastolic pressure (more common in younger adults with vasoconstriction)—each pattern has different clinical implications. Fourth, MAP says nothing about pulse pressure, which is independently important: wide pulse pressure indicates arterial stiffness and is a risk factor for stroke even when MAP is normal. Fifth, MAP from a peripheral artery (such as the brachial artery) may differ from central aortic MAP, which is what truly perfuses major organs; central pressures can only be measured via catheterization or specialized devices. Sixth, MAP norms vary by age, sex, ethnicity, and clinical condition; what is "normal" for a healthy 25-year-old may be inadequate for an elderly patient with cerebrovascular disease. Finally, MAP is most clinically useful in critical care; for outpatient hypertension management, systolic and diastolic readings remain the primary diagnostic measures per AHA and ESC guidelines. Always pair MAP analysis with comprehensive clinical assessment.',

    healthRisks:
      'Both abnormally low and abnormally high MAP carry significant health risks. Hypotension, defined as MAP below 60 mmHg, indicates that organs are not receiving sufficient blood flow. Acute hypotension can cause dizziness, syncope (fainting), confusion, weakness, and shock; sustained low MAP may lead to acute kidney injury, ischemic stroke, myocardial ischemia, and even multi-organ failure. Common causes include severe dehydration, blood loss (hemorrhage), heart failure, sepsis, anaphylaxis, adrenal insufficiency, and side effects of antihypertensive or antidepressant medications. On the opposite end, sustained MAP above 110 mmHg is a hallmark of hypertension and substantially increases cardiovascular risk. Long-term elevated MAP damages arterial walls, accelerates atherosclerosis, and forces the heart to pump against increased resistance. This raises the risk of stroke (both ischemic and hemorrhagic), heart attack, congestive heart failure, left ventricular hypertrophy, chronic kidney disease, retinopathy, and aortic aneurysm. Risk increases progressively: the World Health Organization estimates that each 10 mmHg increase in MAP roughly doubles the risk of cardiovascular mortality in middle-aged adults. Critical-care studies show that maintaining MAP at or above 65 mmHg reduces mortality in septic shock by ensuring adequate organ perfusion. Pulse pressure also matters: a wide pulse pressure (above 60 mmHg) signals arterial stiffness and independently predicts cardiovascular events, even when MAP itself is normal. Comprehensive cardiovascular risk assessment should consider MAP alongside cholesterol levels, blood glucose, smoking status, family history, and lifestyle factors.',

    alternativeMeasures:
      'MAP is one of several important hemodynamic parameters, and complementary measurements provide a richer picture of cardiovascular health. Pulse pressure (systolic minus diastolic) directly reflects arterial stiffness and stroke volume; values above 60 mmHg are associated with vascular aging and elevated cardiovascular risk. Systolic and diastolic blood pressure measured separately remain the foundation of hypertension diagnosis according to American Heart Association and European Society of Cardiology guidelines. Ambulatory blood pressure monitoring (ABPM) over 24 hours provides average daytime and nighttime MAP and detects patterns like nocturnal hypertension or non-dipping. Central aortic pressure, measured via specialized devices that analyze the radial pulse waveform, may better predict cardiovascular events than peripheral readings, especially in older adults. Cardiac output and systemic vascular resistance, measured invasively in critical care, provide deeper hemodynamic insight: MAP equals cardiac output multiplied by vascular resistance. In intensive care units, arterial line monitoring continuously displays MAP in real time, which is essential for managing patients on vasopressors. For outpatient assessment, home blood pressure monitoring with a validated upper-arm cuff offers practical, repeated measurements that you can convert to MAP. Additional cardiovascular risk markers include resting heart rate, heart rate variability, lipid panel, fasting glucose, hsCRP, and imaging studies like coronary calcium scoring or echocardiography. Wearable devices and smartwatches increasingly offer blood pressure estimates, but their accuracy varies and they should not replace validated measurement methods for clinical decisions.',

    demographicDifferences:
      'Mean Arterial Pressure varies systematically across demographic groups, reflecting differences in vascular physiology, body composition, hormones, and disease prevalence. Age has the largest single influence: MAP tends to rise gradually from childhood through middle age, then plateau or fall slightly after age 70 as systolic pressure rises but diastolic pressure declines due to arterial stiffening. Children and adolescents have substantially lower MAP norms—age, sex, and height percentile charts must be used rather than adult cutoffs. Sex differences are notable: premenopausal women generally have lower MAP than men of the same age due to estrogen-mediated vasodilation, but postmenopausal women catch up to and often exceed men. Ethnicity also matters: African Americans tend to develop hypertension earlier and reach higher peak MAP values, with greater salt sensitivity and earlier organ damage; this group benefits particularly from calcium channel blockers and diuretics. South Asian and Hispanic populations show different patterns of insulin resistance and metabolic syndrome that affect MAP regulation. Body weight strongly influences MAP: obesity increases blood volume, sympathetic activity, and vascular resistance, raising MAP by 5 to 10 mmHg or more; weight loss of even 5 to 10 kg can significantly reduce MAP. Pregnancy causes characteristic changes—MAP normally drops in the second trimester due to vasodilation, then rises in the third trimester; sustained MAP above 105 mmHg during pregnancy is a red flag for preeclampsia. Athletes, especially endurance athletes, often have lower resting MAP due to enhanced parasympathetic tone and reduced peripheral resistance. Critical care thresholds also differ by patient population: chronic hypertensive patients typically need higher target MAP (75 to 80 mmHg) than previously normotensive patients (65 mmHg) to maintain organ perfusion. Always interpret MAP within the context of age, sex, ethnicity, comorbidities, and individual baseline values rather than applying universal cutoffs.',

    medicalDisclaimer:
      'This Mean Arterial Pressure calculator is provided for educational and informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. The MAP formula used (MAP = (2 × DBP + SBP) / 3) is an estimate that may not accurately reflect true arterial pressure in all clinical situations, particularly at extreme heart rates, in arrhythmias, or in critically ill patients. Always rely on direct measurement and clinical judgment for medical decisions. If your calculated MAP is below 60 mmHg or above 110 mmHg, or if you have symptoms such as severe dizziness, chest pain, shortness of breath, confusion, or fainting, seek immediate medical attention. Do not start, stop, or adjust blood pressure medications based on this calculator. Pregnant women, children, athletes, elderly individuals, and those with chronic conditions should consult qualified healthcare providers for personalized blood pressure targets and management. This tool does not diagnose hypertension, hypotension, sepsis, or any other medical condition. Always discuss your blood pressure measurements and any concerns with a licensed physician, cardiologist, or other healthcare professional who can perform a comprehensive evaluation including physical examination, additional testing, and personalized risk assessment.',

    references: [
      'American Heart Association (AHA) - Understanding Blood Pressure Readings',
      'Surviving Sepsis Campaign Guidelines - Target MAP \u2265 65 mmHg recommendation',
      'European Society of Cardiology (ESC) - Hypertension Management Guidelines',
      'Magder SA. The meaning of blood pressure. Crit Care. 2018;22(1):257.',
      'Sesso HD, Stampfer MJ, et al. Systolic and diastolic blood pressure, pulse pressure, and mean arterial pressure as predictors of cardiovascular disease risk in men. Hypertension. 2000;36(5):801-807.',
      'Asfar P, Meziani F, et al. High versus low blood-pressure target in patients with septic shock. N Engl J Med. 2014;370(17):1583-1593.',
      'DeMers D, Wachs D. Physiology, Mean Arterial Pressure. StatPearls Publishing. 2023.',
    ],

    tips: [
      'Measure blood pressure correctly: sit quietly for 5 minutes, arm supported at heart level, avoid caffeine or exercise for 30 minutes prior',
      'Take 2-3 readings one minute apart and average them before calculating MAP for greater accuracy',
      'Track MAP trends over weeks rather than focusing on single readings, as blood pressure naturally varies throughout the day',
      'A target MAP of at least 65 mmHg is widely used in critical care to ensure adequate organ perfusion',
      'Pulse pressure (systolic minus diastolic) is also clinically meaningful: above 60 mmHg suggests arterial stiffness',
      'Reduce dietary sodium to below 2,300 mg per day (ideally 1,500 mg) to help maintain healthy MAP',
      'Regular aerobic exercise (150 minutes per week) can lower MAP by 5-8 mmHg even without weight loss',
      'Limit alcohol to no more than one drink per day for women and two for men to support healthy blood pressure',
      'Manage chronic stress through meditation, breathing exercises, or counseling, as cortisol elevations raise MAP',
      'Validate any home blood pressure monitor against a clinical measurement at least once a year',
    ],

    faqs: [
      {
        question: 'What is a normal Mean Arterial Pressure (MAP)?',
        answer:
          'A normal MAP for healthy adults at rest is between 70 and 100 mmHg. Values below 60 mmHg indicate inadequate organ perfusion and are considered hypotension, while values above 110 mmHg suggest hypertension. In critical-care settings, a minimum MAP of 65 mmHg is the most widely used target to ensure organ perfusion in patients with sepsis or shock.',
      },
      {
        question: 'How is MAP calculated from blood pressure?',
        answer:
          'The standard formula is MAP = (2 × Diastolic + Systolic) / 3, or equivalently MAP = Diastolic + (Systolic - Diastolic) / 3. For example, with a blood pressure of 120/80 mmHg, MAP = (2 × 80 + 120) / 3 = 93.3 mmHg. The formula weights diastolic pressure twice as heavily because the heart spends roughly two-thirds of each cardiac cycle in diastole.',
      },
      {
        question: 'Why is 65 mmHg the target MAP in critical care?',
        answer:
          'A MAP of at least 65 mmHg is considered the minimum required to perfuse vital organs—the brain, kidneys, and heart—in critically ill patients. The Surviving Sepsis Campaign and most intensive-care guidelines recommend this threshold. The landmark SEPSISPAM trial (2014) showed that targeting a higher MAP (80-85 mmHg) provided no overall survival benefit compared to 65-70 mmHg in septic shock, except possibly for chronic hypertensive patients.',
      },
      {
        question: 'What is the difference between MAP and blood pressure?',
        answer:
          'Standard blood pressure provides two numbers (systolic and diastolic), while MAP combines them into a single value representing average arterial pressure. Systolic measures peak pressure during heart contraction, diastolic measures resting pressure between beats, and MAP weights these to estimate the pressure that actually drives blood flow to organs. MAP is especially useful in intensive care, where organ perfusion is critical, while systolic and diastolic remain the standard metrics for diagnosing hypertension in outpatients.',
      },
      {
        question: 'Can a low MAP be dangerous?',
        answer:
          'Yes. A MAP below 60 mmHg means insufficient blood flow reaches vital organs and can cause dizziness, confusion, fainting, kidney injury, ischemic stroke, and shock. Common causes include severe dehydration, blood loss, sepsis, heart failure, anaphylaxis, and adverse drug effects. Persistent low MAP is a medical emergency. If you experience symptoms or measure MAP below 60 mmHg consistently, seek immediate medical care.',
      },
      {
        question: 'How does MAP differ from pulse pressure?',
        answer:
          'MAP is the average pressure during a cardiac cycle, calculated as (2 × DBP + SBP) / 3. Pulse pressure is the difference between systolic and diastolic readings (SBP - DBP). Both are clinically useful but measure different things: MAP reflects organ perfusion pressure, while pulse pressure indicates arterial stiffness and stroke volume. A wide pulse pressure (above 60 mmHg) is an independent risk factor for cardiovascular events, particularly in older adults, even when MAP is normal.',
      },
      {
        question: 'Is the MAP formula accurate at high heart rates?',
        answer:
          'The standard formula MAP = (2 × DBP + SBP) / 3 assumes a normal resting heart rate of 60 to 100 bpm. At higher heart rates, diastole shortens more than systole, so the standard formula slightly underestimates true MAP. In tachycardia or during exercise, modified formulas like MAP = DBP + 0.412 × (SBP - DBP) provide better estimates. In intensive care, direct intra-arterial measurement is the gold standard for accurate MAP at any heart rate.',
      },
      {
        question: 'Should I worry if my MAP is slightly above 100?',
        answer:
          'A single MAP reading slightly above 100 mmHg is not necessarily concerning, especially after exercise, stress, or caffeine. However, if multiple readings consistently fall between 100 and 110 mmHg, this suggests elevated arterial pressure that warrants attention. Lifestyle modifications—lower sodium intake, weight loss, regular exercise, reduced alcohol, stress management—can often bring MAP back into the normal range. Schedule an evaluation with your healthcare provider to rule out hypertension and discuss whether further testing or treatment is needed.',
      },
    ],
  },
  tr: {
    whatIs:
      'Ortalama Arter Basıncı (MAP), bir kalp döngüsü boyunca arterlerinizdeki ortalama basınçtır ve organ perfüzyonunun (kan akışının) sistolik veya diyastolik tansiyondan daha doğru bir göstergesi olarak kabul edilir. Kalp her döngünün yaklaşık üçte ikisini diyastol (gevşeme) ve yalnızca üçte birini sistol (kasılma) durumunda geçirdiği için MAP buna göre ağırlıklandırılır: MAP = (2 × Diyastolik + Sistolik) / 3. Doktorlar ve yoğun bakım klinisyenleri, kanın beyin, kalp ve böbrek gibi hayati organlara yeterli güçle ulaşıp ulaşmadığını belirlemek için MAP değerini yoğun şekilde kullanır. Amerikan Kalp Derneği (AHA) ve çoğu yoğun bakım kılavuzu, sağlıklı bir yetişkin için MAP aralığını 70 ile 100 mmHg arasında tanımlar; kritik hastalarda yeterli organ perfüzyonu için en az 65 mmHg sıklıkla gereklidir. MAP değerinin 60 mmHg altında olması yetersiz perfüzyona işaret eder ve tıbbi acil durumdur, sürekli olarak 110 mmHg üzerinde olması ise hipertansiyona işaret eder ve uzun vadeli kardiyovasküler riski artırır. Standart tansiyon ölçümünden MAP hesaplamak yalnızca birkaç saniye sürer ve sistolik ile diyastolik ölçümleri tamamlayan, klinik açıdan anlamlı tek bir değer sunar.',

    howToCalculate:
      'Ortalama Arter Basıncınızı hesaplamak basittir ve standart bir tansiyon ölçümünden yalnızca iki değer gerektirir: sistolik basıncınız (üst sayı, kalbin kasıldığı anda ölçülür) ve diyastolik basıncınız (alt sayı, kalp atımları arasında dinlendiğinde ölçülür). MAP = DBP + (1/3)(SBP - DBP) formülü kullanılır; bu matematiksel olarak MAP = (2 × DBP + SBP) / 3 ile aynıdır. Örneğin, tansiyonunuz 120/80 mmHg ise MAP değeriniz (2 × 80 + 120) / 3 = (160 + 120) / 3 = 280 / 3 ≈ 93 mmHg olur ve sağlıklı aralıkta yer alır. 140/90 mmHg değeri için hesaplama (2 × 90 + 140) / 3 = 320 / 3 ≈ 107 mmHg olur ve bu yüksek arter basıncını gösterir. Tansiyonu doğru ölçmek için: en az beş dakika sessizce oturun, kolunuzu kalp seviyesinde tutun, ölçümden 30 dakika önce kafein veya egzersiz almayın ve birer dakika arayla iki veya üç ölçüm alıp ortalamasını hesapladıktan sonra MAP değerini hesaplayın.',

    formulaDetails:
      'Ortalama Arter Basıncı formülü, kalbin her atışta kasılmaktan daha uzun süre dinlendiği fizyolojik gerçeği yansıtır. Yaklaşık 0,8 saniyelik tipik bir dinlenme kalp döngüsünde, yaklaşık 0,5 saniye (yaklaşık üçte iki) diyastolde ve 0,3 saniye (üçte bir) sistolde geçer. Klasik formül MAP = (2 × DBP + SBP) / 3, bu zaman dağılımını yansıtmak için diyastolik basıncı sistolik basıncın iki katı kadar ağırlıklandırır. Eşdeğer bir ifade MAP = DBP + (1/3) × (SBP - DBP) şeklindedir; burada (SBP - DBP) nabız basıncıdır. Bu basit tahmin, dakikada 60 ile 100 atış arasındaki normal kalp hızlarında iyi çalışır. Egzersiz, ateş veya taşikardi gibi yüksek kalp hızlarında diyastol orantısız şekilde kısalır ve standart formül gerçek MAP değerini biraz olduğundan az gösterir; bazı klinisyenler bu durumda MAP = DBP + 0,412 × (SBP - DBP) gibi değiştirilmiş formüller kullanır. Hastane ortamında invazif arteriyel hat izleme, sürekli dalga formu analizi yoluyla MAP değerini doğrudan ölçer ve bu yöntem kritik hastalar için altın standarttır. Sistolik ile diyastolik arasındaki fark olan nabız basıncı (normalde 30 ile 50 mmHg arası) klinik olarak da önemlidir: geniş nabız basıncı (60 mmHg üzeri) genellikle arteriyel sertliği ve yüksek kardiyovasküler riski gösterirken, dar nabız basıncı (25 mmHg altı) düşük kalp debisini düşündürebilir.',

    categories: [
      {
        range: '< 60 mmHg',
        label: 'Düşük MAP (Hipotansiyon)',
        description:
          'Hayati organlara yetersiz kan akışı. Baş dönmesi, bilinç bulanıklığı, bayılma, organ hasarı veya şok yapabilir. Acil tıbbi değerlendirme gerektirir.',
        color: '#EF4444',
      },
      {
        range: '60 - 69 mmHg',
        label: 'Sınır Değerde Düşük',
        description:
          'İstirahatte genellikle yeterli, ancak stres veya aktivite sırasında yetersiz kalabilir. Yoğun bakım kılavuzları sepsis ve şokta genellikle en az 65 mmHg hedefler.',
        color: '#F59E0B',
      },
      {
        range: '70 - 99 mmHg',
        label: 'Normal MAP',
        description:
          'Çoğu yetişkin için sağlıklı aralık. Etkili organ perfüzyonu ve dengeli kardiyovasküler işlevi gösterir. Belirti yoksa müdahale gerekmez.',
        color: '#10B981',
      },
      {
        range: '100 - 109 mmHg',
        label: 'Yüksek MAP',
        description:
          'Normalin üzerinde arter basıncı. Sürekli yüksek değerler arterleri zorlayabilir ve uzun vadede kardiyovasküler hasara katkıda bulunabilir. Yaşam tarzı değişiklikleri önerilir.',
        color: '#F97316',
      },
      {
        range: '\u2265 110 mmHg',
        label: 'Çok Yüksek MAP',
        description:
          'Hipertansiyonu güçlü şekilde düşündürür. Felç, kalp krizi ve böbrek hastalığı riskini önemli ölçüde artırır. Tıbbi danışma ve muhtemelen ilaç tedavisi gerekir.',
        color: '#DC2626',
      },
    ],

    interpretation:
      'MAP yorumlanırken hem mutlak değerin hem de bireysel klinik bağlamın dikkate alınması gerekir. Sağlıklı bir yetişkinde istirahatte 70 ile 100 mmHg arasındaki bir MAP genellikle optimaldir ve dolaşım sisteminizin tüm organlara verimli şekilde oksijenli kan ulaştırdığını gösterir. 65 mmHg eşiği yoğun bakımda özellikle önemlidir: sepsis, septik şok veya ciddi travma gibi kritik hastalarda organ yetmezliğini önlemek için genellikle en az 65 mmHg gerekir; kronik hipertansiyonu olanlarda bazı klinisyenler 75 mmHg veya daha yüksek değerler hedefler. 60 ile 70 mmHg arasındaki bir MAP, genç ve sağlıklı bir kişide istirahatte kabul edilebilir olabilir ancak yaşlı yetişkinler, böbrek hastalığı olanlar veya baş dönmesi ya da bilinç bulanıklığı gibi belirtiler gösterenler için endişe vericidir. Sürekli olarak 100 mmHg üzerinde MAP değerleri hipertansiyon ile ilişkilidir ve felç, miyokard enfarktüsü, kalp yetmezliği ve kronik böbrek hastalığı riskini artırır. Ancak MAP asla tek başına yorumlanmamalıdır: nabız basıncı, kalp atış hızı, belirtiler ve diğer hayati bulgularla birlikte değerlendirilmelidir. Sporcular kardiyovasküler kondisyon nedeniyle genellikle daha düşük dinlenme MAP değerine sahiptir, yaşlı yetişkinlerde ise arter sertliği nedeniyle MAP yüksek olabilir. Sürekli anormal değerleri kendi başınıza tanı koymak yerine her zaman bir sağlık hizmeti sağlayıcısıyla görüşün.',

    limitations:
      'MAP güçlü bir klinik araç olsa da birkaç önemli sınırlaması vardır. İlk olarak, standart formül (2 × DBP + SBP) / 3 ortalama kalp hızlarına dayalı bir tahmindir ve yüksek kalp hızlarında (100 atımın üzerinde) gerçek MAP değerini olduğundan az, çok düşük hızlarda ise olduğundan fazla gösterebilir. İkinci olarak, tek bir koldan yapılan kaf ölçümünden hesaplanan MAP zaman içinde anlık bir görüntü sunar; atımdan atıma değişkenliği, beyaz önlük etkisini veya günlük ritmi yansıtmaz; ambulatuvar veya ev ölçümü daha kapsamlı bir resim sunar. Üçüncü olarak, MAP, yüksek sistolik basınç (yaşlılarda yaygın) ile yüksek diyastolik basınç (gençlerde daha yaygın) arasındaki ayrımı göstermez; her iki durumun da farklı klinik anlamları vardır. Dördüncü olarak, MAP nabız basıncı hakkında bilgi vermez; geniş nabız basıncı arter sertliğini gösterir ve MAP normal olsa bile felç riskini artırır. Beşinci olarak, periferik bir arterden (örneğin brakiyal arter) ölçülen MAP, gerçekten organları perfüze eden merkezi aort MAP değerinden farklı olabilir; merkezi basınçlar yalnızca kateterizasyon veya özel cihazlarla ölçülebilir. Altıncı olarak, MAP normal değerleri yaş, cinsiyet, etnik köken ve klinik duruma göre değişir; sağlıklı bir 25 yaşındaki için "normal" olan değer, serebrovasküler hastalığı olan yaşlı bir hasta için yetersiz olabilir. Son olarak, MAP en çok yoğun bakımda klinik olarak yararlıdır; ayaktan hipertansiyon yönetimi için sistolik ve diyastolik ölçümler AHA ve ESC kılavuzlarına göre birincil tanı ölçütleri olmaya devam eder. MAP analizini her zaman kapsamlı klinik değerlendirme ile birleştirin.',

    healthRisks:
      'Hem anormal düşük hem de anormal yüksek MAP önemli sağlık riskleri taşır. 60 mmHg altındaki MAP olarak tanımlanan hipotansiyon, organlara yeterli kan akışı sağlanmadığını gösterir. Akut hipotansiyon baş dönmesi, senkop (bayılma), bilinç bulanıklığı, halsizlik ve şoka yol açabilir; sürekli düşük MAP akut böbrek hasarı, iskemik felç, miyokard iskemisi ve hatta çoklu organ yetmezliğine neden olabilir. Yaygın nedenler arasında ciddi sıvı kaybı, kanama, kalp yetmezliği, sepsis, anafilaksi, adrenal yetmezlik ve antihipertansif veya antidepresan ilaçların yan etkileri yer alır. Diğer uçta, 110 mmHg üzerindeki sürekli MAP hipertansiyonun belirgin bir göstergesidir ve kardiyovasküler riski önemli ölçüde artırır. Uzun süreli yüksek MAP arter duvarlarına zarar verir, ateroskleroz sürecini hızlandırır ve kalbi artan dirence karşı pompalamaya zorlar. Bu durum felç (hem iskemik hem hemorajik), kalp krizi, konjestif kalp yetmezliği, sol ventrikül hipertrofisi, kronik böbrek hastalığı, retinopati ve aort anevrizması riskini artırır. Risk kademeli olarak artar: Dünya Sağlık Örgütü, orta yaşlı yetişkinlerde MAP değerinin her 10 mmHg artışının kardiyovasküler ölüm riskini yaklaşık iki katına çıkardığını tahmin eder. Yoğun bakım çalışmaları, MAP değerini 65 mmHg veya üzerinde tutmanın septik şokta yeterli organ perfüzyonu sağlayarak ölüm oranını azalttığını göstermektedir. Nabız basıncı da önemlidir: geniş nabız basıncı (60 mmHg üzeri) arter sertliğini gösterir ve MAP normal olsa bile bağımsız olarak kardiyovasküler olayları öngörür. Kapsamlı kardiyovasküler risk değerlendirmesi MAP ile birlikte kolesterol seviyeleri, kan şekeri, sigara durumu, aile öyküsü ve yaşam tarzı faktörlerini de dikkate almalıdır.',

    alternativeMeasures:
      'MAP, birkaç önemli hemodinamik parametreden biridir ve tamamlayıcı ölçümler kardiyovasküler sağlığın daha zengin bir resmini sağlar. Nabız basıncı (sistolik eksi diyastolik), arteriyel sertliği ve atım hacmini doğrudan yansıtır; 60 mmHg üzerindeki değerler vasküler yaşlanma ve yüksek kardiyovasküler risk ile ilişkilidir. Ayrı ayrı ölçülen sistolik ve diyastolik tansiyon, AHA ve Avrupa Kardiyoloji Derneği (ESC) kılavuzlarına göre hipertansiyon tanısının temelini oluşturur. 24 saatlik ambulatuvar tansiyon izlemi (ABPM), gündüz ve gece ortalama MAP değerini sağlar ve gece hipertansiyonu veya non-dipper paterni gibi durumları tespit eder. Radial nabız dalga formunu analiz eden özel cihazlarla ölçülen merkezi aort basıncı, özellikle yaşlılarda kardiyovasküler olayları periferik ölçümlerden daha iyi öngörebilir. Yoğun bakımda invazif olarak ölçülen kalp debisi ve sistemik vasküler direnç daha derin hemodinamik bilgi sağlar: MAP, kalp debisi ile vasküler direncin çarpımına eşittir. Yoğun bakım ünitelerinde arteriyel hat izleme MAP değerini gerçek zamanlı olarak sürekli gösterir; vazopressör alan hastaların yönetimi için bu çok önemlidir. Ayaktan değerlendirme için, doğrulanmış bir kol manşonu ile evde tansiyon izleme pratik ve tekrarlanabilir ölçümler sunar; bu ölçümlerden MAP hesaplayabilirsiniz. Ek kardiyovasküler risk göstergeleri arasında istirahat kalp hızı, kalp hızı değişkenliği, lipid paneli, açlık glukozu, hsCRP ve koroner kalsiyum skorlaması veya ekokardiyografi gibi görüntüleme tetkikleri yer alır. Giyilebilir cihazlar ve akıllı saatler giderek daha fazla tansiyon tahmini sunmakta, ancak doğrulukları değişkenlik gösterir ve klinik kararlar için doğrulanmış ölçüm yöntemlerinin yerini almamalıdır.',

    demographicDifferences:
      'Ortalama Arter Basıncı, vasküler fizyoloji, vücut kompozisyonu, hormonlar ve hastalık prevalansı farklılıkları nedeniyle demografik gruplar arasında sistematik olarak değişir. En büyük tek etki yaşa aittir: MAP çocukluktan orta yaşa kadar kademeli olarak artar, ardından 70 yaşından sonra arter sertleşmesi nedeniyle sistolik basınç yükselirken diyastolik basınç düştüğü için sabitlenir veya hafifçe azalır. Çocuklar ve ergenlerin MAP normları yetişkinlerden çok daha düşüktür; yetişkin eşik değerleri yerine yaş, cinsiyet ve boy yüzdelik çizelgeleri kullanılmalıdır. Cinsiyet farklılıkları da dikkat çekicidir: menopoz öncesi kadınlar östrojen aracılı vazodilatasyon nedeniyle aynı yaştaki erkeklerden genellikle daha düşük MAP değerine sahiptir, ancak menopoz sonrası kadınlar erkeklere yetişir ve sıklıkla geçer. Etnik köken de önemlidir: Afrikalı Amerikalılar genellikle daha erken hipertansiyon geliştirir, daha yüksek tepe MAP değerlerine ulaşır, daha fazla tuz duyarlılığı ve daha erken organ hasarı gösterir; bu grupta özellikle kalsiyum kanal blokerleri ve diüretikler etkili olur. Güney Asya ve Hispanik popülasyonlar, MAP düzenlemesini etkileyen farklı insülin direnci ve metabolik sendrom paternleri gösterir. Vücut ağırlığı MAP değerini güçlü şekilde etkiler: obezite kan hacmini, sempatik aktiviteyi ve vasküler direnci artırarak MAP değerini 5 ila 10 mmHg veya daha fazla yükseltir; sadece 5-10 kg verilmesi MAP değerini önemli ölçüde düşürebilir. Hamilelik karakteristik değişikliklere neden olur: MAP normalde ikinci trimesterde vazodilatasyon nedeniyle düşer, üçüncü trimesterde yükselir; gebelik sırasında 105 mmHg üzerindeki sürekli MAP preeklampsi için kırmızı bayraktır. Sporcular, özellikle dayanıklılık sporcuları, artmış parasempatik tonus ve azalmış periferik direnç nedeniyle genellikle daha düşük dinlenme MAP değerine sahiptir. Yoğun bakım eşikleri de hasta popülasyonuna göre değişir: kronik hipertansiyon hastaları organ perfüzyonunu sürdürmek için genellikle daha önce normotansif olan hastalardan (65 mmHg) daha yüksek hedef MAP (75-80 mmHg) gerektirir. MAP değerini her zaman evrensel eşik değerleri uygulamak yerine yaş, cinsiyet, etnik köken, eşlik eden hastalıklar ve bireysel temel değer bağlamında yorumlayın.',

    medicalDisclaimer:
      'Bu Ortalama Arter Basıncı hesaplayıcısı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine geçmez. Kullanılan MAP formülü (MAP = (2 × DBP + SBP) / 3) bir tahmindir ve özellikle aşırı kalp hızlarında, aritmilerde veya kritik hastalarda gerçek arter basıncını her klinik durumda doğru yansıtmayabilir. Tıbbi kararlar için her zaman doğrudan ölçüme ve klinik muhakemeye güvenin. Hesaplanan MAP değeriniz 60 mmHg altında veya 110 mmHg üzerindeyse ya da ciddi baş dönmesi, göğüs ağrısı, nefes darlığı, bilinç bulanıklığı veya bayılma gibi belirtileriniz varsa derhal tıbbi yardım alın. Bu hesaplayıcıya dayanarak tansiyon ilaçlarını başlatmayın, durdurmayın veya ayarlamayın. Hamile kadınlar, çocuklar, sporcular, yaşlı bireyler ve kronik hastalığı olanlar kişiselleştirilmiş tansiyon hedefleri ve yönetimi için kalifiye sağlık profesyonellerine danışmalıdır. Bu araç hipertansiyon, hipotansiyon, sepsis veya başka herhangi bir tıbbi durumu teşhis etmez. Tansiyon ölçümlerinizi ve endişelerinizi her zaman kapsamlı bir değerlendirme yapabilecek lisanslı bir doktor, kardiyolog veya diğer sağlık profesyoneliyle görüşün.',

    references: [
      'Amerikan Kalp Derneği (AHA) - Tansiyon Değerlerini Anlama',
      'Surviving Sepsis Campaign Kılavuzları - Hedef MAP \u2265 65 mmHg önerisi',
      'Avrupa Kardiyoloji Derneği (ESC) - Hipertansiyon Yönetim Kılavuzları',
      'Magder SA. The meaning of blood pressure. Crit Care. 2018;22(1):257.',
      'Sesso HD, Stampfer MJ, ve ark. Erkeklerde kardiyovasküler hastalık riskinin öngörücüleri olarak sistolik ve diyastolik tansiyon, nabız basıncı ve ortalama arter basıncı. Hypertension. 2000;36(5):801-807.',
      'Asfar P, Meziani F, ve ark. Septik şoklu hastalarda yüksek ve düşük tansiyon hedefi karşılaştırması. N Engl J Med. 2014;370(17):1583-1593.',
      'DeMers D, Wachs D. Physiology, Mean Arterial Pressure. StatPearls Publishing. 2023.',
    ],

    tips: [
      'Tansiyonu doğru ölçün: 5 dakika sessizce oturun, kolu kalp seviyesinde destekleyin, ölçümden 30 dakika önce kafein veya egzersizden kaçının',
      'Daha doğru sonuç için birer dakika arayla 2-3 ölçüm alın ve MAP değerini hesaplamadan önce ortalamasını alın',
      'Tansiyon gün içinde doğal olarak değiştiği için tek ölçüme odaklanmak yerine MAP eğilimlerini haftalar boyunca takip edin',
      'En az 65 mmHg MAP hedefi, yoğun bakımda yeterli organ perfüzyonunu sağlamak için yaygın olarak kullanılır',
      'Nabız basıncı (sistolik eksi diyastolik) klinik olarak da anlamlıdır: 60 mmHg üzeri arter sertliğini düşündürür',
      'Sağlıklı MAP değerini korumak için günlük tuz alımını 2.300 mg altında tutun (ideali 1.500 mg)',
      'Düzenli aerobik egzersiz (haftada 150 dakika) kilo vermeden bile MAP değerini 5-8 mmHg düşürebilir',
      'Sağlıklı tansiyon için alkolü kadınlarda günde bir, erkeklerde günde iki içkiden fazla tüketmeyin',
      'Kortizol yükselmeleri MAP değerini artırdığı için kronik stresi meditasyon, nefes egzersizleri veya danışmanlık ile yönetin',
      'Ev tipi tansiyon aletinizi yılda en az bir kez klinik bir ölçümle karşılaştırarak doğrulayın',
    ],

    faqs: [
      {
        question: 'Ortalama Arter Basıncı (MAP) için normal değer nedir?',
        answer:
          'Sağlıklı bir yetişkin için istirahatte normal MAP değeri 70 ile 100 mmHg arasındadır. 60 mmHg altındaki değerler yetersiz organ perfüzyonunu gösterir ve hipotansiyon olarak kabul edilir; 110 mmHg üzerindeki değerler ise hipertansiyona işaret eder. Yoğun bakım koşullarında, sepsis veya şok hastalarında organ perfüzyonunu sağlamak için en yaygın hedef olarak en az 65 mmHg kullanılır.',
      },
      {
        question: 'MAP tansiyon değerinden nasıl hesaplanır?',
        answer:
          'Standart formül MAP = (2 × Diyastolik + Sistolik) / 3 şeklindedir; eşdeğer olarak MAP = Diyastolik + (Sistolik - Diyastolik) / 3 yazılabilir. Örneğin tansiyon 120/80 mmHg ise MAP = (2 × 80 + 120) / 3 = 93,3 mmHg olur. Kalp her döngünün yaklaşık üçte ikisini diyastolde geçirdiği için formül diyastolik basıncı sistolik basıncın iki katı kadar ağırlıklandırır.',
      },
      {
        question: 'Yoğun bakımda neden hedef MAP 65 mmHg?',
        answer:
          'En az 65 mmHg MAP, kritik hastalarda hayati organları (beyin, böbrek ve kalbi) perfüze etmek için gereken minimum değer olarak kabul edilir. Surviving Sepsis Campaign ve çoğu yoğun bakım kılavuzu bu eşiği önerir. 2014 yılındaki SEPSISPAM çalışması, septik şokta daha yüksek MAP hedefinin (80-85 mmHg) genel sağkalıma 65-70 mmHg ile karşılaştırıldığında ek fayda sağlamadığını göstermiştir; kronik hipertansiyon hastalarında bazı klinik faydalar saptanmıştır.',
      },
      {
        question: 'MAP ile tansiyon arasındaki fark nedir?',
        answer:
          'Standart tansiyon iki sayı (sistolik ve diyastolik) verirken, MAP bu ikisini ortalama arter basıncını temsil eden tek bir değerde birleştirir. Sistolik kalp kasılması sırasındaki tepe basıncı, diyastolik atımlar arasındaki dinlenme basıncını ölçer; MAP ise organlara kan akışını sağlayan basıncı tahmin etmek için bunları ağırlıklandırır. MAP özellikle organ perfüzyonunun kritik olduğu yoğun bakımda kullanışlıdır; sistolik ve diyastolik ise ayaktan hastalarda hipertansiyon tanısı için standart ölçümler olmaya devam eder.',
      },
      {
        question: 'Düşük MAP tehlikeli olabilir mi?',
        answer:
          'Evet. 60 mmHg altındaki MAP, hayati organlara yeterli kan akışı sağlanmadığı anlamına gelir ve baş dönmesi, bilinç bulanıklığı, bayılma, böbrek hasarı, iskemik felç ve şoka neden olabilir. Yaygın nedenler arasında ciddi sıvı kaybı, kanama, sepsis, kalp yetmezliği, anafilaksi ve ilaç yan etkileri yer alır. Sürekli düşük MAP tıbbi acil durumdur. Belirtileriniz varsa veya MAP değeri sürekli 60 mmHg altındaysa derhal tıbbi yardım alın.',
      },
      {
        question: 'MAP ile nabız basıncı arasındaki fark nedir?',
        answer:
          'MAP, bir kalp döngüsü sırasındaki ortalama basınçtır ve (2 × DBP + SBP) / 3 olarak hesaplanır. Nabız basıncı ise sistolik ile diyastolik arasındaki farktır (SBP - DBP). Her ikisi de klinik olarak yararlıdır ancak farklı şeyleri ölçer: MAP organ perfüzyon basıncını yansıtırken, nabız basıncı arter sertliği ve atım hacmi hakkında bilgi verir. Geniş nabız basıncı (60 mmHg üzeri), MAP normal olsa bile özellikle yaşlı yetişkinlerde kardiyovasküler olaylar için bağımsız bir risk faktörüdür.',
      },
      {
        question: 'MAP formülü yüksek kalp hızlarında doğru çalışır mı?',
        answer:
          'Standart formül MAP = (2 × DBP + SBP) / 3 dakikada 60-100 atış normal dinlenme kalp hızını varsayar. Daha yüksek kalp hızlarında diyastol sistolden daha fazla kısalır, bu nedenle standart formül gerçek MAP değerini biraz olduğundan az gösterir. Taşikardi veya egzersiz sırasında MAP = DBP + 0,412 × (SBP - DBP) gibi değiştirilmiş formüller daha iyi tahminler verir. Yoğun bakımda doğrudan intra-arteriyel ölçüm, herhangi bir kalp hızında doğru MAP için altın standarttır.',
      },
      {
        question: 'MAP değerim 100 üzerindeyse endişelenmeli miyim?',
        answer:
          'Tek bir MAP ölçümünün 100 mmHg üzerinde olması özellikle egzersiz, stres veya kafein sonrası mutlaka endişe verici değildir. Ancak birden fazla ölçüm sürekli olarak 100 ile 110 mmHg arasındaysa bu yüksek arter basıncını gösterir ve dikkate alınması gerekir. Yaşam tarzı değişiklikleri (tuz alımını azaltma, kilo verme, düzenli egzersiz, alkol azaltma, stres yönetimi) MAP değerini sıklıkla normal aralığa getirir. Hipertansiyonu dışlamak ve daha fazla test veya tedaviye ihtiyaç olup olmadığını görüşmek için sağlık hizmeti sağlayıcınızla bir değerlendirme planlayın.',
      },
    ],
  },
};
