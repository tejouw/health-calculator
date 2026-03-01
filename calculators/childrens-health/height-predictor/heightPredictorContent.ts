import { CalculatorContent } from '@/types/calculator';

export const heightPredictorContent: CalculatorContent = {
  en: {
    whatIs:
      'The Child Height Predictor uses the Mid-Parental Height method, a scientifically established approach to estimate a child\'s potential adult height based on the biological parents\' heights. Developed from decades of pediatric growth research, this method calculates a target height by averaging the parents\' heights with a gender-specific adjustment factor of 13 cm (5.1 inches). For boys, the formula adds 13 cm to the sum of parents\' heights before averaging, while for girls, it subtracts 13 cm. This adjustment accounts for the well-documented average height difference between adult males and females. The resulting prediction comes with a standard deviation range of approximately ±8.5 cm (±3.3 inches), meaning that 95% of children will reach an adult height within this range of the predicted value. The Mid-Parental Height method is widely used in pediatric clinics worldwide as a first-line screening tool to assess whether a child\'s growth trajectory is consistent with their genetic potential. While genetics account for approximately 60-80% of height determination, environmental factors including nutrition, sleep quality, physical activity, hormonal balance, and overall health also play significant roles in final adult height.',

    howToCalculate:
      'To predict your child\'s adult height using the Mid-Parental Height method, you need two measurements: the biological father\'s height and the biological mother\'s height. For boys, the formula is: (Father\'s Height + Mother\'s Height + 13 cm) ÷ 2. For girls, the formula is: (Father\'s Height + Mother\'s Height - 13 cm) ÷ 2. The 13 cm (approximately 5.1 inches) adjustment factor represents the average height difference between adult males and females across most populations. For example, if a father is 180 cm and a mother is 165 cm, the predicted height for a boy would be (180 + 165 + 13) ÷ 2 = 179 cm, and for a girl would be (180 + 165 - 13) ÷ 2 = 166 cm. The prediction range extends ±8.5 cm from this value, so the boy\'s predicted adult height would be between 170.5 and 187.5 cm. It is important to use accurate measurements for the parents\' heights, ideally measured at a doctor\'s office, as even small measurement errors can affect the prediction. If using the imperial system, the same principles apply with the adjustment factor being approximately 5.1 inches.',

    formulaDetails:
      'The Mid-Parental Height (MPH) formula is based on the principle that a child\'s adult height is primarily influenced by their parents\' heights through genetic inheritance. The mathematical formula for boys is MPH = (Father\'s Height + Mother\'s Height + 13) ÷ 2, and for girls, MPH = (Father\'s Height + Mother\'s Height - 13) ÷ 2, where heights are measured in centimeters. The target height range is MPH ± 8.5 cm, representing approximately two standard deviations. This formula was validated through longitudinal growth studies and remains one of the most accessible prediction methods available. The 13 cm adjustment represents the secular difference between male and female average heights observed across diverse populations. More sophisticated methods, such as the Khamis-Roche method, incorporate the child\'s current height, weight, and skeletal maturity (bone age) for greater accuracy, achieving prediction errors of approximately ±2.2 cm when bone age data is available. The Bayley-Pinneau method uses bone age X-ray data combined with current height percentiles. However, for a quick genetic estimate without clinical data, the Mid-Parental Height method provides a reliable baseline prediction. Research published in the Journal of Clinical Endocrinology & Metabolism has shown correlation coefficients of 0.40-0.71 between mid-parental height and actual adult height, confirming its utility as a screening tool.',

    interpretation:
      'The predicted height represents the most likely adult height based on genetic potential from the parents. The prediction range (±8.5 cm) indicates the zone within which 95% of children with similar parental heights will fall. If the predicted height is within the average range for the given gender (approximately 163-183 cm for males and 150-170 cm for females in most Western populations), growth is likely following a typical genetic trajectory. Heights predicted above or below these ranges suggest the child may be taller or shorter than average, respectively, which is perfectly normal and reflects inherited genetic variation. It is crucial to understand that this prediction represents a genetic target, not a guarantee. Many children reach adult heights that differ from their predicted values due to environmental factors, timing of puberty, nutritional status, chronic health conditions, and other non-genetic influences. If a child\'s actual growth pattern significantly deviates from the predicted range, consulting a pediatric endocrinologist is recommended to evaluate for potential growth disorders.',

    limitations:
      'The Mid-Parental Height method has several important limitations that users should understand. First, it assumes that both parents have achieved their full genetic height potential without any growth-limiting conditions during their own childhood. If either parent experienced malnutrition, chronic illness, or hormonal imbalances that stunted their growth, the prediction may underestimate the child\'s potential. Second, the method does not account for regression toward the mean, a statistical phenomenon where very tall or very short parents tend to have children closer to the population average. Third, genetic height inheritance is polygenic, involving hundreds of genes, meaning that children can inherit different height-related gene combinations than predicted by simple parental averaging. Fourth, the prediction is based on population averages and may be less accurate for mixed-ethnicity families, as the 13 cm gender adjustment factor may vary across ethnic groups. Fifth, environmental factors such as nutrition quality, growth hormone levels, pubertal timing, physical activity, sleep patterns, and chronic diseases can significantly alter final adult height beyond genetic prediction. Sixth, the method provides no information about growth tempo; some children grow steadily while others experience growth spurts at different ages. Finally, this calculator cannot replace professional medical evaluation and should not be used to diagnose growth disorders.',

    healthRisks:
      'While height itself is not a health risk factor, significant deviations from expected growth patterns may indicate underlying health conditions. Children growing significantly below their genetic potential (below the predicted range) should be evaluated for growth hormone deficiency, hypothyroidism, celiac disease, Turner syndrome (in girls), chronic kidney disease, or other conditions affecting growth. Conversely, children growing significantly above their predicted range may need evaluation for precocious puberty, growth hormone excess, or other endocrine conditions. Constitutional growth delay, where children are shorter during childhood but achieve normal adult height after a later-than-average growth spurt, is a common and benign condition that should be distinguished from pathological causes of short stature. Regular monitoring of a child\'s growth velocity (rate of height gain per year) is often more clinically useful than a single height measurement. Normal growth velocity varies by age: infants typically grow 23-28 cm in the first year, 10-13 cm in the second year, and 5-7 cm per year during childhood before the pubertal growth spurt of 8-14 cm per year.',

    alternativeMeasures:
      'Several alternative methods exist for predicting adult height with varying degrees of accuracy and complexity. The Khamis-Roche method uses the child\'s current height, weight, and parental heights to predict adult height, achieving accuracy within ±2.2 cm for most children. The Bayley-Pinneau method requires a bone age X-ray and uses skeletal maturity to estimate remaining growth potential, making it particularly useful for children with advanced or delayed bone age. The Tanner-Whitehouse method also incorporates bone age with current height measurements. Growth percentile charts from the WHO and CDC track a child\'s height relative to age-matched peers and can project adult height based on current percentile tracking. The RWT (Roche-Wainer-Thissen) method is considered one of the most accurate, combining current measurements with parental data and bone age, achieving prediction errors of approximately ±3.4 cm even without bone age data. For clinical evaluation, pediatric endocrinologists may use growth hormone stimulation tests, IGF-1 levels, thyroid function tests, and genetic analyses to assess growth potential more comprehensively.',

    demographicDifferences:
      'Height prediction accuracy varies across different populations due to genetic, nutritional, and socioeconomic factors. Average adult heights differ significantly by region: Northern European populations average approximately 178-182 cm for males and 165-170 cm for females, while Southeast Asian populations average approximately 165-170 cm for males and 153-158 cm for females. The 13 cm gender adjustment factor used in the Mid-Parental Height method is based primarily on Western population data and may need modification for other ethnic groups. For children of mixed ethnic heritage, predictions may be less accurate due to the complex interaction of diverse genetic backgrounds. Secular trends in height are also important: average heights in many developing countries have increased by 1-3 cm per generation over the past century due to improved nutrition and healthcare, meaning today\'s children may grow taller than predicted based solely on parental heights. Socioeconomic status strongly correlates with height outcomes in children; studies consistently show that children from higher-income families tend to be taller on average, likely due to better access to nutrition and healthcare. The timing of puberty also varies across populations and significantly affects the growth trajectory and final adult height.',

    medicalDisclaimer:
      'This height prediction calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The Mid-Parental Height method provides an estimate based on genetic potential and has a margin of error of ±8.5 cm. This tool does not diagnose growth disorders, hormonal deficiencies, or any medical condition. If you have concerns about your child\'s growth, height, or development, please consult with a pediatrician or pediatric endocrinologist who can perform a comprehensive evaluation including physical examination, growth velocity assessment, bone age X-rays, and laboratory tests as needed. Do not make medical decisions or delay seeking professional care based on the results of this calculator.',

    references: [
      'Tanner JM, Goldstein H, Whitehouse RH. Standards for children\'s height at ages 2-9 years allowing for height of parents. Arch Dis Child. 1970;45(244):755-762.',
      'Khamis HJ, Roche AF. Predicting adult stature without using skeletal age: the Khamis-Roche method. Pediatrics. 1994;94(4 Pt 1):504-507.',
      'Hermanussen M, Cole J. The calculation of target height reconsidered. Horm Res. 2003;59(4):180-183.',
      'Silventoinen K et al. Heritability of adult body height: a comparative study of twin cohorts in eight countries. Twin Res. 2003;6(5):399-408.',
      'WHO Child Growth Standards. World Health Organization, Geneva, 2006.',
      'Tanner JM. Growth at Adolescence. 2nd ed. Oxford: Blackwell Scientific Publications; 1962.',
      'Wright CM, Cheetham TD. The strengths and limitations of parental heights as a predictor of attained height. Arch Dis Child. 1999;81(3):257-260.',
    ],

    tips: [
      'Ensure your child gets adequate protein from diverse sources including dairy, lean meats, legumes, and eggs for optimal growth.',
      'Calcium and vitamin D are essential for bone development. Include milk, yogurt, cheese, and fortified foods in your child\'s diet.',
      'Growth hormone is primarily released during deep sleep. Establish consistent bedtime routines and ensure age-appropriate sleep duration.',
      'Regular physical activity, especially weight-bearing exercises, stimulates bone growth and overall development.',
      'Monitor your child\'s growth trajectory on standardized growth charts at regular pediatric check-ups.',
      'Avoid comparing your child\'s height to peers, as growth patterns vary significantly between individuals.',
      'Early or delayed puberty can significantly affect final adult height. Consult a doctor if you notice unusual timing.',
      'Stress can negatively impact growth hormone production. Support your child\'s emotional well-being.',
      'Zinc deficiency can impair growth. Include zinc-rich foods like nuts, seeds, and whole grains in your child\'s diet.',
      'Stay up to date with regular pediatric check-ups to track growth patterns and catch any concerns early.',
    ],

    faqs: [
      {
        question: 'How accurate is the Mid-Parental Height prediction?',
        answer:
          'The Mid-Parental Height method has a prediction range of ±8.5 cm (±3.3 inches), meaning the actual adult height will fall within this range about 95% of the time. While it provides a reasonable estimate, more accurate predictions require clinical data such as bone age X-rays and current growth measurements.',
      },
      {
        question: 'At what age can I predict my child\'s adult height?',
        answer:
          'The Mid-Parental Height method can be used at any age since it only requires parental heights. However, predictions become more refined when combined with the child\'s current growth data. Clinical methods are most accurate after age 2-3, when early childhood growth irregularities have stabilized.',
      },
      {
        question: 'Can nutrition affect my child\'s predicted height?',
        answer:
          'Yes, nutrition is one of the most important environmental factors affecting growth. Adequate protein, calcium, vitamin D, zinc, and overall caloric intake are essential for reaching genetic height potential. Chronic malnutrition during childhood can result in stunted growth below genetic potential.',
      },
      {
        question: 'Does the timing of puberty affect adult height?',
        answer:
          'Yes, significantly. Children who enter puberty earlier tend to have an earlier growth spurt but may stop growing sooner, potentially resulting in a shorter adult height. Conversely, late bloomers may continue growing for a longer period and can end up taller. The Mid-Parental Height method does not account for pubertal timing.',
      },
      {
        question: 'Why is there a 13 cm adjustment between boys and girls?',
        answer:
          'The 13 cm (5.1 inch) adjustment reflects the average height difference between adult males and females observed across most populations. This gender difference is primarily due to hormonal influences during puberty: testosterone promotes longer bone growth in males, while estrogen causes earlier growth plate closure in females.',
      },
      {
        question: 'Can a child be much taller or shorter than both parents?',
        answer:
          'Yes, although uncommon, children can fall outside the predicted range due to several factors: polygenic inheritance (height involves hundreds of genes with various possible combinations), environmental influences, hormonal variations, and statistical regression toward the population mean. Very tall or very short parents are more likely to have children closer to the average height.',
      },
      {
        question: 'Should I be concerned if my child is shorter than predicted?',
        answer:
          'Not necessarily. Children grow at different rates, and many short children catch up later, especially during puberty. However, if your child\'s height consistently falls below the 3rd percentile on growth charts or growth velocity is declining, consult a pediatrician to rule out conditions like growth hormone deficiency, hypothyroidism, or celiac disease.',
      },
      {
        question: 'Does this calculator work for adopted children?',
        answer:
          'This calculator requires the biological parents\' heights for accurate predictions. If the biological parents\' heights are unknown, as is common with adoption, the calculator cannot provide a meaningful prediction. In such cases, monitoring the child\'s growth on standardized growth charts and consulting with a pediatrician is the best approach.',
      },
    ],
  },

  tr: {
    whatIs:
      'Çocuk Boy Tahmini Hesaplayıcısı, bilimsel olarak kanıtlanmış Orta Ebeveyn Boyu (Mid-Parental Height) yöntemini kullanarak biyolojik anne ve babanın boylarına dayanarak çocuğun potansiyel yetişkin boyunu tahmin eder. Onlarca yıllık pediatrik büyüme araştırmalarından geliştirilen bu yöntem, ebeveynlerin boylarının ortalamasına cinsiyete özgü 13 cm\'lik bir düzeltme faktörü uygulayarak hedef boy hesaplar. Erkek çocuklar için formül, ortalamasını almadan önce ebeveyn boyları toplamına 13 cm eklerken, kız çocuklar için 13 cm çıkarır. Bu düzeltme, yetişkin erkekler ve kadınlar arasındaki iyi belgelenmiş ortalama boy farkını yansıtır. Sonuçta elde edilen tahmin, yaklaşık ±8,5 cm\'lik bir standart sapma aralığı ile birlikte gelir; bu, benzer ebeveyn boylarına sahip çocukların %95\'inin tahmin edilen değerin bu aralığı içinde yetişkin boyuna ulaşacağı anlamına gelir. Orta Ebeveyn Boyu yöntemi, dünya çapında pediatri kliniklerinde bir çocuğun büyüme yörüngesinin genetik potansiyeli ile tutarlı olup olmadığını değerlendirmek için birinci basamak tarama aracı olarak yaygın biçimde kullanılmaktadır. Genetik, boy belirlenmesinin yaklaşık %60-80\'ini oluştururken, beslenme, uyku kalitesi, fiziksel aktivite, hormonal denge ve genel sağlık gibi çevresel faktörler de nihai yetişkin boyunda önemli roller oynar.',

    howToCalculate:
      'Orta Ebeveyn Boyu yöntemini kullanarak çocuğunuzun yetişkin boyunu tahmin etmek için iki ölçüme ihtiyacınız vardır: biyolojik babanın boyu ve biyolojik annenin boyu. Erkek çocuklar için formül: (Baba Boyu + Anne Boyu + 13 cm) ÷ 2\'dir. Kız çocuklar için formül: (Baba Boyu + Anne Boyu - 13 cm) ÷ 2\'dir. 13 cm\'lik (yaklaşık 5,1 inç) düzeltme faktörü, çoğu popülasyonda yetişkin erkekler ve kadınlar arasındaki ortalama boy farkını temsil eder. Örneğin, baba 180 cm ve anne 165 cm ise, bir erkek çocuk için tahmini boy (180 + 165 + 13) ÷ 2 = 179 cm, bir kız çocuk için ise (180 + 165 - 13) ÷ 2 = 166 cm olacaktır. Tahmin aralığı bu değerden ±8,5 cm uzanır, dolayısıyla erkek çocuğun tahmini yetişkin boyu 170,5 ile 187,5 cm arasında olacaktır. Ebeveynlerin boyları için doğru ölçümlerin kullanılması önemlidir, ideal olarak bir doktor muayenesinde ölçülmüş olmalıdır, çünkü küçük ölçüm hataları bile tahmini etkileyebilir.',

    formulaDetails:
      'Orta Ebeveyn Boyu (OEB) formülü, bir çocuğun yetişkin boyunun genetik kalıtım yoluyla öncelikle ebeveynlerinin boylarından etkilendiği ilkesine dayanır. Erkek çocuklar için matematiksel formül OEB = (Baba Boyu + Anne Boyu + 13) ÷ 2, kız çocuklar için OEB = (Baba Boyu + Anne Boyu - 13) ÷ 2\'dir (boylar santimetre cinsinden). Hedef boy aralığı OEB ± 8,5 cm\'dir ve yaklaşık iki standart sapmayı temsil eder. Bu formül boylamsal büyüme çalışmaları ile doğrulanmıştır ve mevcut en erişilebilir tahmin yöntemlerinden biri olmaya devam etmektedir. 13 cm\'lik düzeltme, farklı popülasyonlarda gözlemlenen erkek ve kadın ortalama boyları arasındaki farkı temsil eder. Khamis-Roche yöntemi gibi daha sofistike yöntemler, daha fazla doğruluk için çocuğun mevcut boyunu, kilosunu ve iskelet olgunluğunu (kemik yaşı) içerir. Ancak klinik veri olmadan hızlı bir genetik tahmin için Orta Ebeveyn Boyu yöntemi güvenilir bir temel tahmin sağlar.',

    interpretation:
      'Tahmini boy, ebeveynlerden gelen genetik potansiyele dayanan en olası yetişkin boyunu temsil eder. Tahmin aralığı (±8,5 cm), benzer ebeveyn boylarına sahip çocukların %95\'inin düşeceği bölgeyi gösterir. Tahmini boy, verilen cinsiyet için ortalama aralık içindeyse (çoğu Batı popülasyonunda erkekler için yaklaşık 163-183 cm ve kadınlar için 150-170 cm), büyüme muhtemelen tipik bir genetik yörünge izlemektedir. Bu aralıkların üstünde veya altında tahmin edilen boylar, çocuğun ortalamadan daha uzun veya daha kısa olabileceğini gösterir; bu tamamen normaldir ve kalıtsal genetik varyasyonu yansıtır. Bu tahminin genetik bir hedef olduğunu, garanti olmadığını anlamak çok önemlidir.',

    limitations:
      'Orta Ebeveyn Boyu yöntemi, kullanıcıların anlaması gereken birkaç önemli sınırlamaya sahiptir. Birincisi, her iki ebeveynin de kendi çocukluğunda herhangi bir büyümeyi sınırlayan durum olmaksızın tam genetik boy potansiyellerine ulaştığını varsayar. Ebeveynlerden biri yetersiz beslenme, kronik hastalık veya büyümelerini engelleyen hormonal dengesizlikler yaşamışsa, tahmin çocuğun potansiyelini eksik değerlendirebilir. İkincisi, yöntem ortalamaya doğru regresyonu hesaba katmaz; çok uzun veya çok kısa ebeveynlerin çocukları popülasyon ortalamasına daha yakın olma eğilimindedir. Üçüncüsü, genetik boy kalıtımı yüzlerce geni içeren poligenik bir özelliktir, bu da çocukların basit ebeveyn ortalamasının tahmin ettiğinden farklı boyla ilgili gen kombinasyonları miras alabileceği anlamına gelir. Dördüncüsü, beslenme kalitesi, büyüme hormonu seviyeleri, ergenlik zamanlaması, fiziksel aktivite, uyku düzenleri ve kronik hastalıklar gibi çevresel faktörler nihai yetişkin boyunu genetik tahminlerin ötesinde önemli ölçüde değiştirebilir. Son olarak, bu hesaplayıcı profesyonel tıbbi değerlendirmenin yerini alamaz.',

    healthRisks:
      'Boy tek başına bir sağlık riski faktörü olmasa da, beklenen büyüme kalıplarından önemli sapmalar altta yatan sağlık durumlarına işaret edebilir. Genetik potansiyellerinin önemli ölçüde altında büyüyen çocuklar (tahmin aralığının altında), büyüme hormonu eksikliği, hipotiroidizm, çölyak hastalığı, Turner sendromu (kızlarda), kronik böbrek hastalığı veya büyümeyi etkileyen diğer durumlar açısından değerlendirilmelidir. Tersine, tahmin edilen aralığının önemli ölçüde üzerinde büyüyen çocuklar, erken ergenlik, büyüme hormonu fazlalığı veya diğer endokrin durumlar için değerlendirme gerektirebilir. Çocuğun büyüme hızının (yılda boy artış oranı) düzenli izlenmesi, genellikle tek bir boy ölçümünden klinik olarak daha faydalıdır.',

    alternativeMeasures:
      'Yetişkin boyunu tahmin etmek için farklı doğruluk ve karmaşıklık derecelerinde birkaç alternatif yöntem mevcuttur. Khamis-Roche yöntemi, çocuğun mevcut boyunu, kilosunu ve ebeveyn boylarını kullanarak yetişkin boyunu tahmin eder ve çoğu çocuk için ±2,2 cm doğruluk sağlar. Bayley-Pinneau yöntemi bir kemik yaşı röntgeni gerektirir ve kalan büyüme potansiyelini tahmin etmek için iskelet olgunluğunu kullanır. DSÖ ve CDC\'den büyüme persentil grafikleri, bir çocuğun boyunu yaş eşleştirilmiş akranlarıyla karşılaştırarak izler ve mevcut persentil takibine dayalı yetişkin boyunu öngörebilir. Klinik değerlendirme için pediatrik endokrinologlar büyüme potansiyelini daha kapsamlı değerlendirmek üzere büyüme hormonu uyarım testleri, IGF-1 seviyeleri, tiroid fonksiyon testleri ve genetik analizler kullanabilir.',

    demographicDifferences:
      'Boy tahmini doğruluğu, genetik, beslenme ve sosyoekonomik faktörler nedeniyle farklı popülasyonlar arasında değişir. Ortalama yetişkin boyları bölgeye göre önemli ölçüde farklılık gösterir: Kuzey Avrupa popülasyonları erkekler için yaklaşık 178-182 cm ve kadınlar için 165-170 cm ortalamasına sahipken, Güneydoğu Asya popülasyonları erkekler için yaklaşık 165-170 cm ve kadınlar için 153-158 cm ortalamasına sahiptir. Türkiye\'de ortalama yetişkin boyu erkekler için yaklaşık 174 cm, kadınlar için yaklaşık 161 cm\'dir. Orta Ebeveyn Boyu yönteminde kullanılan 13 cm\'lik cinsiyet düzeltme faktörü ağırlıklı olarak Batı popülasyonu verilerine dayanmaktadır ve diğer etnik gruplar için değişiklik gerektirebilir. Boyda seküler eğilimler de önemlidir: gelişen birçok ülkede ortalama boy, gelişmiş beslenme ve sağlık hizmetleri nedeniyle son yüzyılda nesil başına 1-3 cm artmıştır.',

    medicalDisclaimer:
      'Bu boy tahmini hesaplayıcısı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, tanı veya tedavinin yerine geçmez. Orta Ebeveyn Boyu yöntemi genetik potansiyele dayalı bir tahmin sunar ve ±8,5 cm\'lik bir hata payına sahiptir. Bu araç büyüme bozukluklarını, hormonal eksiklikleri veya herhangi bir tıbbi durumu teşhis etmez. Çocuğunuzun büyümesi, boyu veya gelişimi hakkında endişeleriniz varsa, lütfen fiziksel muayene, büyüme hızı değerlendirmesi, kemik yaşı röntgenleri ve gerektiğinde laboratuvar testleri dahil kapsamlı bir değerlendirme yapabilecek bir çocuk doktoru veya pediatrik endokrinolog ile görüşün.',

    references: [
      'Tanner JM, Goldstein H, Whitehouse RH. Standards for children\'s height at ages 2-9 years allowing for height of parents. Arch Dis Child. 1970;45(244):755-762.',
      'Khamis HJ, Roche AF. Predicting adult stature without using skeletal age: the Khamis-Roche method. Pediatrics. 1994;94(4 Pt 1):504-507.',
      'Hermanussen M, Cole J. The calculation of target height reconsidered. Horm Res. 2003;59(4):180-183.',
      'Silventoinen K et al. Heritability of adult body height: a comparative study of twin cohorts in eight countries. Twin Res. 2003;6(5):399-408.',
      'WHO Child Growth Standards. World Health Organization, Geneva, 2006.',
      'Tanner JM. Growth at Adolescence. 2nd ed. Oxford: Blackwell Scientific Publications; 1962.',
      'Wright CM, Cheetham TD. The strengths and limitations of parental heights as a predictor of attained height. Arch Dis Child. 1999;81(3):257-260.',
    ],

    tips: [
      'Çocuğunuzun süt ürünleri, yağsız et, baklagiller ve yumurta gibi çeşitli kaynaklardan yeterli protein almasını sağlayın.',
      'Kalsiyum ve D vitamini kemik gelişimi için gereklidir. Çocuğunuzun diyetine süt, yoğurt, peynir ve zenginleştirilmiş gıdaları dahil edin.',
      'Büyüme hormonu ağırlıklı olarak derin uyku sırasında salgılanır. Tutarlı uyku rutinleri oluşturun ve yaşa uygun uyku süresini sağlayın.',
      'Düzenli fiziksel aktivite, özellikle ağırlık taşıyan egzersizler, kemik büyümesini ve genel gelişimi uyarır.',
      'Düzenli pediatrik kontrollerde standart büyüme grafiklerinde çocuğunuzun büyüme yörüngesini izleyin.',
      'Çocuğunuzun boyunu akranlarıyla karşılaştırmaktan kaçının, çünkü büyüme kalıpları bireyler arasında önemli ölçüde farklılık gösterir.',
      'Erken veya geç ergenlik nihai yetişkin boyunu önemli ölçüde etkileyebilir. Olağandışı zamanlama fark ederseniz bir doktora danışın.',
      'Stres büyüme hormonu üretimini olumsuz etkileyebilir. Çocuğunuzun duygusal refahını destekleyin.',
      'Çinko eksikliği büyümeyi bozabilir. Çocuğunuzun diyetine kuruyemiş, tohum ve tam tahıllar gibi çinko açısından zengin gıdaları dahil edin.',
      'Büyüme kalıplarını takip etmek ve herhangi bir endişeyi erken yakalamak için düzenli pediatrik kontrolleri aksatmayın.',
    ],

    faqs: [
      {
        question: 'Orta Ebeveyn Boyu tahmini ne kadar doğrudur?',
        answer:
          'Orta Ebeveyn Boyu yöntemi ±8,5 cm\'lik bir tahmin aralığına sahiptir, yani gerçek yetişkin boyu zamanın yaklaşık %95\'inde bu aralık içinde olacaktır. Makul bir tahmin sağlasa da, daha doğru tahminler kemik yaşı röntgenleri ve mevcut büyüme ölçümleri gibi klinik veriler gerektirir.',
      },
      {
        question: 'Çocuğumun yetişkin boyunu hangi yaşta tahmin edebilirim?',
        answer:
          'Orta Ebeveyn Boyu yöntemi yalnızca ebeveyn boylarını gerektirdiğinden herhangi bir yaşta kullanılabilir. Ancak, çocuğun mevcut büyüme verileriyle birleştirildiğinde tahminler daha hassas hale gelir. Klinik yöntemler, erken çocukluk büyüme düzensizliklerinin stabilize olduğu 2-3 yaşından sonra en doğrudur.',
      },
      {
        question: 'Beslenme çocuğumun tahmini boyunu etkileyebilir mi?',
        answer:
          'Evet, beslenme büyümeyi etkileyen en önemli çevresel faktörlerden biridir. Yeterli protein, kalsiyum, D vitamini, çinko ve genel kalori alımı genetik boy potansiyeline ulaşmak için gereklidir. Çocukluk döneminde kronik yetersiz beslenme, genetik potansiyelin altında bodur büyümeye neden olabilir.',
      },
      {
        question: 'Ergenlik zamanlaması yetişkin boyunu etkiler mi?',
        answer:
          'Evet, önemli ölçüde. Ergenliğe erken giren çocuklar daha erken bir büyüme atağı yaşar ancak daha erken büyümeyi durdurabilir ve potansiyel olarak daha kısa bir yetişkin boyuna sahip olabilir. Tersine, geç olgunlaşanlar daha uzun süre büyümeye devam edebilir ve sonuçta daha uzun olabilir.',
      },
      {
        question: 'Erkek ve kız çocuklar arasında neden 13 cm fark var?',
        answer:
          '13 cm\'lik düzeltme, çoğu popülasyonda gözlemlenen yetişkin erkekler ve kadınlar arasındaki ortalama boy farkını yansıtır. Bu cinsiyet farkı ağırlıklı olarak ergenlik dönemindeki hormonal etkilerden kaynaklanır: testosteron erkeklerde daha uzun kemik büyümesini teşvik ederken, östrojen kadınlarda büyüme plakalarının daha erken kapanmasına neden olur.',
      },
      {
        question: 'Bir çocuk her iki ebeveynden de çok daha uzun veya kısa olabilir mi?',
        answer:
          'Evet, yaygın olmasa da çocuklar birkaç faktör nedeniyle tahmin edilen aralığın dışında kalabilir: poligenik kalıtım (boy yüzlerce genle ilgilidir), çevresel etkiler, hormonal varyasyonlar ve ortalamaya doğru istatistiksel regresyon. Çok uzun veya çok kısa ebeveynlerin çocuklarının ortalama boya daha yakın olma olasılığı daha yüksektir.',
      },
      {
        question: 'Çocuğum tahmin edilenden kısaysa endişelenmeli miyim?',
        answer:
          'Mutlaka değil. Çocuklar farklı hızlarda büyür ve birçok kısa çocuk, özellikle ergenlik döneminde, sonradan yakalanır. Ancak, çocuğunuzun boyu sürekli olarak büyüme grafiklerinde 3. persentilin altına düşüyorsa veya büyüme hızı azalıyorsa, büyüme hormonu eksikliği, hipotiroidizm veya çölyak hastalığını ekarte etmek için bir çocuk doktoruna başvurun.',
      },
      {
        question: 'Bu hesaplayıcı evlat edinilmiş çocuklar için çalışır mı?',
        answer:
          'Bu hesaplayıcı doğru tahminler için biyolojik ebeveynlerin boylarını gerektirir. Biyolojik ebeveynlerin boyları bilinmiyorsa, evlat edinmede sıkça görüldüğü gibi, hesaplayıcı anlamlı bir tahmin sağlayamaz. Bu tür durumlarda, çocuğun büyümesini standart büyüme grafiklerinde izlemek ve bir çocuk doktoruyla görüşmek en iyi yaklaşımdır.',
      },
    ],
  },
};
