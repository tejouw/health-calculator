import type { CalculatorContent } from '@/types/calculator';

export const fetalWeightContent: CalculatorContent = {
  en: {
    whatIs: `Fetal weight estimation is one of the most important assessments during pregnancy. It provides crucial information about your baby's growth and development, helping healthcare providers monitor whether your baby is growing at a healthy rate.

The estimated fetal weight (EFW) can be determined through several methods. The most common clinical approach uses ultrasound measurements combined with mathematical formulas, such as the Hadlock formula. Population-based growth charts, like those published by the World Health Organization (WHO), provide reference ranges based on gestational age.

Understanding your baby's weight during pregnancy helps identify potential complications early. Babies that are significantly smaller or larger than expected for their gestational age may require additional monitoring or interventions. Small for gestational age (SGA) babies—those below the 10th percentile—may face risks including intrauterine growth restriction (IUGR), while large for gestational age (LGA) babies—those above the 90th percentile—may present delivery challenges.

Our fetal weight calculator uses WHO-validated growth charts combined with the Hadlock formula to provide accurate weight estimates at any point during pregnancy, from 8 weeks through full term at 40 weeks.`,

    howToCalculate: `There are three main methods to estimate fetal weight:

**Method 1: Gestational Week**
The simplest approach uses your current gestational week to look up the expected weight from standardized growth charts. This provides the population average (50th percentile) along with normal range boundaries (10th and 90th percentiles).

**Method 2: Last Menstrual Period (LMP)**
By entering the first day of your last menstrual period, the calculator automatically determines your current gestational week and estimates the corresponding fetal weight.

**Method 3: Ultrasound Measurements (Hadlock Formula)**
The most accurate clinical method uses four ultrasound biometric measurements:
- **BPD (Biparietal Diameter)**: The distance between the two sides of the baby's head
- **HC (Head Circumference)**: The circumference around the baby's head
- **AC (Abdominal Circumference)**: The circumference around the baby's abdomen
- **FL (Femur Length)**: The length of the baby's thigh bone

The Hadlock formula (1985) combines these measurements: log₁₀(EFW) = 1.326 - 0.00326×AC×FL + 0.0107×HC + 0.0438×AC + 0.158×FL

This formula has been validated in numerous studies and remains the gold standard for ultrasound-based fetal weight estimation, with an accuracy of ±15% in most cases.`,

    interpretation: `**Understanding Your Results:**

Your baby's estimated weight is compared against WHO growth percentiles:

- **Below 10th percentile (Small for Gestational Age - SGA)**: Your baby may be smaller than expected. While many SGA babies are healthy, this finding warrants close monitoring. Your healthcare provider may recommend additional ultrasounds, non-stress tests, or Doppler studies to ensure adequate blood flow.

- **10th to 90th percentile (Appropriate for Gestational Age - AGA)**: Your baby is within the normal weight range. This is where most healthy babies fall, and it indicates appropriate growth and development.

- **Above 90th percentile (Large for Gestational Age - LGA)**: Your baby may be larger than average. LGA can be associated with gestational diabetes, genetic factors, or simply family tendency toward larger babies. Additional monitoring may be recommended to plan for safe delivery.

**Important Notes on Accuracy:**
- Ultrasound weight estimates have a margin of error of ±10-15%
- Accuracy decreases in the third trimester as the baby gets larger
- A single measurement is less reliable than serial measurements showing a growth trend
- Factors like amniotic fluid volume and baby's position can affect measurements`,

    formulaDetails: `**The Hadlock Formula (1985)**

The Hadlock formula is the most widely used equation for estimating fetal weight from ultrasound measurements. Developed by Dr. Frank P. Hadlock and colleagues at Baylor College of Medicine, it has been validated across diverse populations worldwide.

**Full Four-Parameter Equation:**
log₁₀(EFW) = 1.326 - 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL

Where:
- EFW = Estimated Fetal Weight in grams
- AC = Abdominal Circumference in cm
- FL = Femur Length in cm
- HC = Head Circumference in cm

**Simplified Two-Parameter Equation (AC + FL only):**
log₁₀(EFW) = 1.304 + 0.05281 × AC + 0.1938 × FL - 0.004 × AC × FL

**WHO Growth Standards:**
The World Health Organization published international fetal growth charts in 2017, based on the INTERGROWTH-21st Project, which studied healthy pregnancies across eight countries. These charts provide:
- 3rd, 10th, 50th, 90th, and 97th percentile values
- Week-by-week growth expectations
- Population-independent reference standards

**Factors Affecting Fetal Weight:**
1. Maternal nutrition and weight gain
2. Placental function and blood flow
3. Genetic factors (parental size)
4. Gestational age accuracy
5. Multiple pregnancies (twins/triplets tend to be smaller)
6. Maternal health conditions (diabetes, hypertension)
7. Altitude and environmental factors`,

    limitations: `**Limitations of Fetal Weight Estimation:**

1. **Inherent Margin of Error**: Even with ultrasound, fetal weight estimates have a ±10-15% margin of error. For a 3,000g baby, this means the actual weight could range from 2,550g to 3,450g.

2. **Operator Dependency**: Ultrasound measurements depend on the sonographer's skill and technique. Different operators may obtain slightly different measurements.

3. **Baby's Position**: If the baby is in an awkward position, certain measurements may be difficult to obtain accurately.

4. **Third Trimester Accuracy**: Estimation accuracy tends to decrease in the late third trimester (after 36 weeks) as the baby's head engages in the pelvis and soft tissue makes measurements less precise.

5. **Maternal Body Habitus**: In mothers with higher BMI, ultrasound image quality may be reduced, potentially affecting measurement accuracy.

6. **Growth Chart Variability**: Different growth charts (WHO, Hadlock, national standards) may give different percentile results for the same weight.

7. **Population Differences**: Growth patterns can vary between ethnic groups and geographic regions, though WHO charts aim to be universal.

8. **Not Diagnostic**: Weight estimation is a screening tool, not a diagnostic test. Clinical decisions should be made in conjunction with other assessments.

This calculator is for informational purposes only. Always discuss your baby's growth and development with your healthcare provider, who can interpret results in the context of your complete medical history.`,

    tips: [
      'Track your baby\'s weight over multiple visits to identify growth trends rather than relying on a single measurement.',
      'Attend all scheduled prenatal appointments and ultrasound scans for accurate monitoring.',
      'Maintain a balanced diet rich in protein, iron, calcium, and folate to support healthy fetal growth.',
      'Stay hydrated - adequate water intake supports amniotic fluid levels and nutrient delivery.',
      'Report any concerns about decreased fetal movement to your healthcare provider immediately.',
      'Remember that estimated weights have a ±15% margin of error - a range is more meaningful than a single number.',
      'Ask your healthcare provider to explain the growth percentile trend at each visit.',
      'Avoid comparing your baby\'s size to others - healthy babies come in many sizes.',
    ],

    faqs: [
      {
        question: 'How accurate is fetal weight estimation by ultrasound?',
        answer: 'Ultrasound-based fetal weight estimation using the Hadlock formula is generally accurate within ±10-15% of the actual birth weight. Accuracy is highest between 20-36 weeks and may decrease in later pregnancy. Serial measurements tracking growth trends are more reliable than a single estimate.',
      },
      {
        question: 'What does it mean if my baby is in the 10th percentile?',
        answer: 'The 10th percentile means your baby\'s estimated weight is at the lower end of normal. While many small babies are perfectly healthy (especially if parents are petite), your doctor may recommend additional monitoring to ensure normal growth. Being below the 10th percentile is classified as Small for Gestational Age (SGA).',
      },
      {
        question: 'Can fetal weight predict birth weight accurately?',
        answer: 'Fetal weight estimates become less accurate as pregnancy progresses. At 37-40 weeks, the margin of error can be ±500-700 grams. The estimate provides a useful guideline but should not be taken as an exact prediction of birth weight.',
      },
      {
        question: 'How much weight does a baby gain per week in the third trimester?',
        answer: 'In the third trimester (weeks 28-40), babies typically gain about 200-230 grams (7-8 ounces) per week. This rate peaks around weeks 32-36 before slightly slowing down as the baby approaches full term.',
      },
      {
        question: 'What factors can cause a baby to be smaller than expected?',
        answer: 'Factors include placental insufficiency, maternal hypertension or preeclampsia, smoking, poor nutrition, infections, chromosomal abnormalities, and multiple pregnancies. However, constitutional smallness (small parents) is the most common cause and is usually not a concern.',
      },
      {
        question: 'Should I be worried if my baby is measuring large?',
        answer: 'A large baby (above 90th percentile) isn\'t always a cause for concern. It can be related to genetics, gestational diabetes, or simply natural variation. Your healthcare provider may screen for gestational diabetes and monitor for potential delivery complications, but many large babies are born healthy.',
      },
      {
        question: 'What is the Hadlock formula?',
        answer: 'The Hadlock formula is the most widely used equation for estimating fetal weight from ultrasound measurements. Developed in 1985, it uses abdominal circumference (AC), femur length (FL), head circumference (HC), and biparietal diameter (BPD) to calculate estimated fetal weight with approximately 85-90% accuracy.',
      },
    ],

    references: [
      'Hadlock FP, et al. Estimation of fetal weight with the use of head, body, and femur measurements. American Journal of Obstetrics and Gynecology, 1985;151(3):333-337',
      'WHO Multicentre Growth Reference Study Group. WHO Child Growth Standards. World Health Organization, 2006',
      'INTERGROWTH-21st Project - International Fetal and Newborn Growth Standards. The Lancet, 2014;384(9946):857-868',
      'ACOG Practice Bulletin No. 204: Fetal Growth Restriction. American College of Obstetricians and Gynecologists, 2019',
      'Papageorghiou AT, et al. International standards for fetal growth. Ultrasound in Obstetrics & Gynecology, 2014;43(5):555-567',
      'Blue NR, et al. Accuracy of ultrasound estimation of fetal weight. American Journal of Obstetrics and Gynecology, 2022',
    ],
  },
  tr: {
    whatIs: `Fetüs ağırlık tahmini, hamilelik süresince yapılan en önemli değerlendirmelerden biridir. Bebeğinizin büyümesi ve gelişimi hakkında kritik bilgi sağlayarak, sağlık uzmanlarının bebeğinizin sağlıklı bir hızda büyüyüp büyümediğini izlemelerine yardımcı olur.

Tahmini fetal ağırlık (TFA) çeşitli yöntemlerle belirlenebilir. En yaygın klinik yaklaşım, ultrason ölçümleriyle Hadlock formülü gibi matematiksel formülleri birleştirir. Dünya Sağlık Örgütü (DSÖ) tarafından yayınlanan büyüme grafikleri, gebelik yaşına göre referans aralıkları sunar.

Hamilelik süresince bebeğinizin ağırlığını anlamak, potansiyel komplikasyonları erken belirlemeye yardımcı olur. Gebelik yaşına göre belirgin şekilde küçük veya büyük olan bebekler ek izleme veya müdahale gerektirebilir. Gebelik yaşına göre küçük (SGA) bebekler — 10. persentilin altındakiler — intrauterin büyüme kısıtlılığı (IUGR) riski taşıyabilirken, gebelik yaşına göre büyük (LGA) bebekler — 90. persentilin üstündekiler — doğum zorlukları yaratabilir.

Fetüs ağırlık hesaplayıcımız, hamileliğin herhangi bir noktasında, 8. haftadan 40. haftaya kadar doğru ağırlık tahminleri sağlamak için DSÖ onaylı büyüme grafiklerini Hadlock formülüyle birleştirir.`,

    howToCalculate: `Fetüs ağırlığını tahmin etmek için üç ana yöntem vardır:

**Yöntem 1: Gebelik Haftası**
En basit yaklaşım, mevcut gebelik haftanızı kullanarak standart büyüme grafiklerinden beklenen ağırlığı bulur. Bu, normal aralık sınırları (10. ve 90. persentil) ile birlikte popülasyon ortalamasını (50. persentil) sağlar.

**Yöntem 2: Son Adet Tarihi (SAT)**
Son adet döneminizin ilk gününü girerek, hesaplayıcı otomatik olarak mevcut gebelik haftanızı belirler ve karşılık gelen fetal ağırlığı tahmin eder.

**Yöntem 3: Ultrason Ölçümleri (Hadlock Formülü)**
En doğru klinik yöntem dört ultrason biyometrik ölçümü kullanır:
- **BPD (Biparietal Çap)**: Bebeğin başının iki tarafı arasındaki mesafe
- **HC (Baş Çevresi)**: Bebeğin başı etrafındaki çevre
- **AC (Karın Çevresi)**: Bebeğin karnı etrafındaki çevre
- **FL (Femur Uzunluğu)**: Bebeğin uyluk kemiğinin uzunluğu

Hadlock formülü (1985) bu ölçümleri birleştirir ve çoğu durumda ±%15 doğrulukla tahmin sağlar.`,

    interpretation: `**Sonuçlarınızı Anlama:**

Bebeğinizin tahmini ağırlığı DSÖ büyüme persentilleriyle karşılaştırılır:

- **10. persentilin altında (Gebelik Yaşına Göre Küçük - SGA)**: Bebeğiniz beklenenden küçük olabilir. Birçok SGA bebeği sağlıklı olsa da, bu bulgu yakın izleme gerektirir. Sağlık hizmet sağlayıcınız yeterli kan akışını sağlamak için ek ultrasonlar veya Doppler çalışmaları önerebilir.

- **10. ile 90. persentil arası (Gebelik Yaşına Göre Uygun - AGA)**: Bebeğiniz normal ağırlık aralığında. Sağlıklı bebeklerin çoğu burada yer alır ve uygun büyüme ve gelişime işaret eder.

- **90. persentilin üstünde (Gebelik Yaşına Göre Büyük - LGA)**: Bebeğiniz ortalamadan büyük olabilir. LGA, gestasyonel diyabet, genetik faktörler veya basitçe büyük bebeklere yönelik aile eğilimi ile ilişkili olabilir.

**Doğruluk Hakkında Önemli Notlar:**
- Ultrason ağırlık tahminleri ±%10-15 hata payına sahiptir
- Üçüncü trimesterde bebek büyüdükçe doğruluk azalır
- Tek bir ölçüm, büyüme eğilimini gösteren seri ölçümlerden daha az güvenilirdir`,

    formulaDetails: `**Hadlock Formülü (1985)**

Hadlock formülü, ultrason ölçümlerinden fetal ağırlık tahmin etmek için en yaygın kullanılan denklemdir. Dr. Frank P. Hadlock ve meslektaşları tarafından Baylor Tıp Fakültesi'nde geliştirilmiş olup, dünya çapında farklı popülasyonlarda doğrulanmıştır.

**Tam Dört Parametreli Denklem:**
log₁₀(TFA) = 1.326 - 0.00326 × AC × FL + 0.0107 × HC + 0.0438 × AC + 0.158 × FL

Burada:
- TFA = Tahmini Fetal Ağırlık (gram)
- AC = Karın Çevresi (cm)
- FL = Femur Uzunluğu (cm)
- HC = Baş Çevresi (cm)

**DSÖ Büyüme Standartları:**
Dünya Sağlık Örgütü, 2017 yılında sekiz ülkedeki sağlıklı gebelikleri inceleyen INTERGROWTH-21. Projesi'ne dayanan uluslararası fetal büyüme grafiklerini yayınladı.

**Fetal Ağırlığı Etkileyen Faktörler:**
1. Anne beslenmesi ve kilo alımı
2. Plasenta fonksiyonu ve kan akışı
3. Genetik faktörler (ebeveyn boyutu)
4. Gebelik yaşı doğruluğu
5. Çoğul gebelikler
6. Annenin sağlık durumları (diyabet, hipertansiyon)
7. Rakım ve çevresel faktörler`,

    limitations: `**Fetüs Ağırlık Tahmininin Sınırlamaları:**

1. **Doğal Hata Payı**: Ultrasonla bile, fetal ağırlık tahminleri ±%10-15 hata payına sahiptir. 3.000 g bir bebek için gerçek ağırlık 2.550 g ile 3.450 g arasında olabilir.

2. **Operatör Bağımlılığı**: Ultrason ölçümleri sonografistin beceri ve tekniğine bağlıdır.

3. **Bebeğin Pozisyonu**: Bebek uygunsuz bir pozisyondaysa, belirli ölçümleri doğru şekilde almak zor olabilir.

4. **Üçüncü Trimester Doğruluğu**: Tahmin doğruluğu, geç üçüncü trimesterde (36. haftadan sonra) azalma eğilimindedir.

5. **Annenin Vücut Yapısı**: Daha yüksek VKİ'ye sahip annelerde ultrason görüntü kalitesi azalabilir.

6. **Büyüme Tablosu Değişkenliği**: Farklı büyüme grafikleri (DSÖ, Hadlock, ulusal standartlar) aynı ağırlık için farklı persentil sonuçları verebilir.

7. **Tanısal Değildir**: Ağırlık tahmini bir tarama aracıdır, tanısal bir test değildir.

Bu hesaplayıcı yalnızca bilgilendirme amaçlıdır. Bebeğinizin büyümesini ve gelişimini her zaman sağlık hizmet sağlayıcınızla görüşün.`,

    tips: [
      'Tek bir ölçüme güvenmek yerine, büyüme eğilimlerini belirlemek için bebeğinizin ağırlığını birden fazla ziyarette takip edin.',
      'Doğru izleme için planlanan tüm prenatal randevularına ve ultrason taramalarına katılın.',
      'Sağlıklı fetal büyümeyi desteklemek için protein, demir, kalsiyum ve folat açısından zengin dengeli bir diyet sürdürün.',
      'Hidrate kalın - yeterli su alımı amniyotik sıvı seviyelerini ve besin taşınmasını destekler.',
      'Azalan fetal hareket konusundaki endişelerinizi derhal sağlık hizmet sağlayıcınıza bildirin.',
      'Tahmini ağırlıkların ±%15 hata payına sahip olduğunu unutmayın.',
      'Sağlık hizmet sağlayıcınızdan her ziyarette büyüme persentil eğilimini açıklamasını isteyin.',
      'Bebeğinizin boyutunu başkalarıyla karşılaştırmaktan kaçının - sağlıklı bebekler birçok boyutta gelir.',
    ],

    faqs: [
      {
        question: 'Ultrasonla fetal ağırlık tahmini ne kadar doğrudur?',
        answer: 'Hadlock formülü kullanılarak yapılan ultrason tabanlı fetal ağırlık tahmini genellikle gerçek doğum ağırlığının ±%10-15\'i kadar doğrudur. Doğruluk 20-36 haftalar arasında en yüksek seviyededir. Büyüme eğilimlerini izleyen seri ölçümler tek bir tahminden daha güvenilirdir.',
      },
      {
        question: 'Bebeğim 10. persentildeyse ne anlama gelir?',
        answer: '10. persentil, bebeğinizin tahmini ağırlığının normalin alt sınırında olduğu anlamına gelir. Birçok küçük bebek tamamen sağlıklıdır (özellikle ebeveynler küçük yapılıysa), ancak doktorunuz normal büyümeyi sağlamak için ek izleme önerebilir.',
      },
      {
        question: 'Fetal ağırlık doğum ağırlığını doğru tahmin edebilir mi?',
        answer: 'Fetal ağırlık tahminleri hamilelik ilerledikçe daha az doğru hale gelir. 37-40. haftalarda hata payı ±500-700 gram olabilir. Tahmin yararlı bir rehber sağlar ancak doğum ağırlığının kesin bir tahmini olarak alınmamalıdır.',
      },
      {
        question: 'Üçüncü trimesterde bebek haftada ne kadar kilo alır?',
        answer: 'Üçüncü trimesterde (28-40. haftalar) bebekler genellikle haftada yaklaşık 200-230 gram alır. Bu hız 32-36. haftalarda zirve yapar ve bebek tam vadeye yaklaştıkça biraz yavaşlar.',
      },
      {
        question: 'Bebeğin beklenenden küçük olmasına ne sebep olabilir?',
        answer: 'Faktörler arasında plasental yetmezlik, anne hipertansiyonu, sigara içme, yetersiz beslenme, enfeksiyonlar ve çoğul gebelikler bulunur. Ancak yapısal küçüklük (küçük yapılı ebeveynler) en yaygın nedendir ve genellikle endişe verici değildir.',
      },
      {
        question: 'Bebeğim büyük ölçülüyorsa endişelenmeli miyim?',
        answer: 'Büyük bir bebek (90. persentilin üstünde) her zaman endişe nedeni değildir. Genetik, gestasyonel diyabet veya doğal varyasyonla ilişkili olabilir. Sağlık hizmet sağlayıcınız gestasyonel diyabet taraması yapabilir.',
      },
      {
        question: 'Hadlock formülü nedir?',
        answer: 'Hadlock formülü, ultrason ölçümlerinden fetal ağırlık tahmin etmek için en yaygın kullanılan denklemdir. 1985\'te geliştirilen bu formül, karın çevresi (AC), femur uzunluğu (FL), baş çevresi (HC) ve biparietal çap (BPD) kullanarak yaklaşık %85-90 doğrulukla tahmini fetal ağırlığı hesaplar.',
      },
    ],

    references: [
      'Hadlock FP, ve ark. Baş, gövde ve femur ölçümleriyle fetal ağırlık tahmini. American Journal of Obstetrics and Gynecology, 1985;151(3):333-337',
      'DSÖ Çok Merkezli Büyüme Referans Çalışma Grubu. DSÖ Çocuk Büyüme Standartları. Dünya Sağlık Örgütü, 2006',
      'INTERGROWTH-21. Projesi - Uluslararası Fetal ve Yenidoğan Büyüme Standartları. The Lancet, 2014;384(9946):857-868',
      'ACOG Uygulama Bülteni No. 204: Fetal Büyüme Kısıtlılığı. Amerikan Kadın Hastalıkları ve Doğum Uzmanları Koleji, 2019',
      'Papageorghiou AT, ve ark. Fetal büyüme için uluslararası standartlar. Ultrasound in Obstetrics & Gynecology, 2014;43(5):555-567',
      'Blue NR, ve ark. Fetal ağırlık ultrason tahmininin doğruluğu. American Journal of Obstetrics and Gynecology, 2022',
    ],
  },
};
