import { CalculatorContent } from '@/types/calculator';

export const growthContent: CalculatorContent = {
  en: {
    whatIs:
      'Growth percentiles are standardized measurements that compare your child\'s height, weight, and body mass index (BMI) to those of other children of the same age and sex. Developed by the World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC), growth charts plot percentiles from 0 to 100, with the 50th percentile representing the median or average value. For example, if your child is at the 60th percentile for height, it means they are taller than 60% of children their age and gender. Growth percentiles are essential tools for pediatricians and parents to monitor whether a child is growing healthily and consistently over time. Unlike adults, children\'s normal ranges vary dramatically with age, making percentiles more useful than absolute measurements. These charts help identify potential growth disorders, nutritional problems, or chronic health conditions early when interventions are most effective. It\'s important to understand that percentiles are not grades or scores - being in the 95th percentile is not necessarily better than the 40th percentile. What matters most is that children maintain consistent growth along their own curve rather than jumping between percentiles.',

    howToCalculate:
      'Growth percentiles are calculated by comparing your child\'s measurements to reference data from large population studies. First, accurate measurements are essential: height should be measured without shoes using a stadiometer (wall-mounted measuring device), weight should be measured on a calibrated scale with minimal clothing, and age should be calculated precisely in months for children under 2 years and in years and months for older children. The calculator then finds your child\'s position on age and sex-specific growth charts. For example, if a 3-year-old boy weighs 15 kg and the reference data shows that 65% of 3-year-old boys weigh less than 15 kg, he is at the 65th percentile for weight. Modern calculators use statistical methods (z-scores and LMS parameters) to interpolate exact percentiles even between the marked lines on printed charts. BMI percentile calculation first requires computing BMI (weight in kg ÷ height in meters squared), then comparing that BMI value to age and sex-specific BMI percentile charts. For infants and toddlers (0-2 years), WHO growth standards are often preferred because they represent optimal growth based on breastfed infants from diverse populations. For children over 2 years, CDC growth charts (based on U.S. population data from the 1960s-1990s) are commonly used in the United States, while WHO charts remain standard internationally.',

    formulaDetails:
      'Growth percentile calculations rely on the LMS method (Lambda-Mu-Sigma), a statistical technique that accounts for skewness in growth data. For a given age and sex, three parameters define the distribution: L represents the skewness (Box-Cox transformation), M represents the median, and S represents the coefficient of variation. The formula converts a measurement into a z-score (standard deviations from the median) and then into a percentile. The z-score calculation is: z = ((measurement/M)^L - 1) / (L × S). For L = 0, the formula becomes z = ln(measurement/M) / S. Once the z-score is calculated, it\'s converted to a percentile using the standard normal cumulative distribution function. For example, a z-score of 0 equals the 50th percentile, z = +1 equals approximately the 84th percentile, and z = -1 equals approximately the 16th percentile. Different growth charts (WHO vs CDC) have different LMS values for each age and sex, which is why percentiles can vary slightly depending on which reference is used. BMI calculation is straightforward: BMI = weight (kg) / [height (m)]². For instance, a child weighing 20 kg and measuring 110 cm (1.1 m) tall has a BMI of 20 / (1.1 × 1.1) = 16.5 kg/m². This BMI value is then plotted on BMI-for-age percentile charts specific to the child\'s age and sex.',

    categories: [
      {
        range: '< 3rd',
        label: 'Very Low',
        description:
          'Below the 3rd percentile may indicate growth problems, malnutrition, or chronic illness. Pediatrician evaluation strongly recommended.',
        color: '#EF4444',
      },
      {
        range: '3rd - 15th',
        label: 'Low',
        description:
          'Below average but often normal, especially if consistent. Monitor trends. Some children are genetically smaller.',
        color: '#F97316',
      },
      {
        range: '15th - 50th',
        label: 'Below Average',
        description:
          'Below average but healthy range. About one-third of children fall here. Normal if growth is consistent.',
        color: '#3B82F6',
      },
      {
        range: '50th - 85th',
        label: 'Average',
        description:
          'Healthy average range. Most children (about 35%) fall in this category. Indicates typical growth.',
        color: '#10B981',
      },
      {
        range: '85th - 95th',
        label: 'Above Average',
        description:
          'Above average but usually healthy. For weight/BMI, monitor to ensure proportional growth. For height, often genetic.',
        color: '#3B82F6',
      },
      {
        range: '95th - 97th',
        label: 'High',
        description:
          'High percentile. For weight/BMI, may indicate overweight risk. For height, monitor for proportional growth. Discuss with pediatrician.',
        color: '#F97316',
      },
      {
        range: '> 97th',
        label: 'Very High',
        description:
          'Very high percentile. For weight/BMI, may indicate obesity. For height, rule out endocrine issues. Medical evaluation recommended.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'Interpreting growth percentiles requires understanding several key principles. First, percentiles are relative, not absolute measures - they show how a child compares to peers, not whether they\'re healthy. A child at the 10th percentile who stays consistently at the 10th percentile is usually healthier than a child who drops from the 75th to the 25th percentile. Second, genetics matter enormously. Children of short parents will often have lower height percentiles, which is normal for them. Third, individual variation is normal - healthy children can be anywhere from the 5th to 95th percentile. What\'s concerning is rapid change: crossing two or more major percentile lines (especially downward) over a short period may indicate problems. Fourth, different measurements tell different stories. A child with high height percentile and low weight percentile may be naturally lean, while high weight with average height suggests excess weight gain. Fifth, BMI percentiles are particularly important after age 2 for assessing weight status: below 5th percentile indicates underweight, 5th-85th is healthy, 85th-95th is overweight, and above 95th indicates obesity in children. However, BMI has limitations for very muscular children. Sixth, timing matters - children grow in spurts, not steadily. Temporary percentile shifts during puberty are normal. Finally, percentiles are screening tools, not diagnoses. Abnormal percentiles require clinical evaluation including physical exam, dietary assessment, family history, and possibly laboratory tests.',

    limitations:
      'Growth percentiles have important limitations that parents and healthcare providers must understand. First, they represent statistical comparisons to reference populations, not ideal or optimal growth. The CDC charts, for instance, include data from the 1960s-1990s when childhood obesity was rising, making upper percentiles potentially include overweight children. Second, percentiles don\'t account for parental height and genetics. A child of very tall parents at the 50th percentile might actually be growing poorly for their genetic potential. Midparental height calculations and target height ranges provide additional context. Third, reference populations may not match all ethnicities. While WHO charts aim for international representation, variations exist across populations. Asian children often have different growth patterns than European children, for example. Fourth, measurements are prone to error. Incorrect height measurement (shoes on, slouching, compression throughout the day) or weight measurement (clothing, recent meal, time of day) can significantly affect percentile placement. Fifth, percentiles can\'t distinguish between muscle and fat. A very muscular child may have high weight and BMI percentiles despite being healthy. Sixth, short-term illness, dehydration, or recent bowel movements can temporarily affect measurements. Seventh, percentiles don\'t capture growth velocity well - a child might be at the 50th percentile but growing too slowly to maintain that position. Eighth, premature infants require corrected age (age minus weeks of prematurity) until age 2-3, and even then may have different growth patterns. Finally, percentiles don\'t directly measure health. A child at the 5th percentile who is active, eating well, and developing normally may be perfectly healthy, while a child at the 75th percentile with poor nutrition and sedentary habits may have concerning health risks.',

    healthRisks:
      'Abnormal growth percentiles can indicate various health concerns requiring attention. Very low percentiles (below 3rd) for height, weight, or both may indicate failure to thrive, which has numerous causes: inadequate nutrition due to poverty, food insecurity, or feeding difficulties; malabsorption disorders like celiac disease, cystic fibrosis, or inflammatory bowel disease; chronic infections including HIV or parasites; endocrine disorders such as growth hormone deficiency, hypothyroidism, or Cushing syndrome; genetic syndromes like Turner syndrome or Russell-Silver syndrome; cardiac or kidney disease causing growth restriction; or psychosocial issues including neglect or severe stress. Persistently crossing downward through percentiles (failure to maintain growth curve) is particularly concerning even if not yet below the 3rd percentile. Conversely, very high weight or BMI percentiles (above 95th) indicate obesity, associated with increased risk for type 2 diabetes, high blood pressure, high cholesterol, fatty liver disease, sleep apnea, joint problems, and psychosocial difficulties including bullying and low self-esteem. Childhood obesity often persists into adulthood, compounding long-term health risks. Very high height percentiles (above 97th), especially if disproportionate to parental height, may indicate excess growth hormone production, Marfan syndrome, or other conditions requiring evaluation. Disproportionate growth - for example, weight percentile significantly higher than height percentile - suggests unhealthy weight gain requiring dietary and activity interventions. Conversely, height percentile much higher than weight percentile may indicate inadequate nutrition or an eating disorder in older children.',

    alternativeMeasures:
      'Several complementary measurements provide additional insights beyond simple percentiles. Weight-for-height or BMI-for-age percentiles assess whether a child\'s weight is proportional to their height, which is more informative than weight alone. Head circumference percentiles (for children under 3 years) help identify microcephaly, macrocephaly, or abnormal brain growth. Midparental height calculation estimates genetic height potential: for boys, (father\'s height + mother\'s height + 13 cm) ÷ 2; for girls, (father\'s height + mother\'s height - 13 cm) ÷ 2, with ±8 cm representing normal range. Growth velocity measures how quickly a child is growing (cm/year or kg/year) rather than static position on charts - poor growth velocity even at average percentiles indicates problems. Bone age X-rays (left hand and wrist) compare skeletal maturity to chronological age, helpful for evaluating delayed or advanced puberty and predicting adult height. Pubertal staging (Tanner stages) assesses physical maturity independent of chronological age. Waist circumference and waist-to-height ratio in children identify abdominal obesity, a better predictor of metabolic disease than BMI alone. Skinfold thickness measurements estimate body fat percentage more accurately than BMI. Laboratory tests including complete blood count, metabolic panel, thyroid function, celiac screening, and insulin-like growth factor-1 (IGF-1) for growth hormone assessment provide medical context for concerning growth patterns. Dietary assessment through food diaries or recall helps identify nutritional inadequacies or excesses. Developmental milestone tracking ensures growth abnormalities aren\'t accompanied by developmental delays.',

    demographicDifferences:
      'Growth patterns vary across populations due to genetic and environmental factors. Ethnicity significantly affects height: children of Northern European descent tend to be taller than those of Asian or Hispanic descent. African American children are often taller and heavier than white children at the same age. However, when raised in similar environments, ethnic differences decrease, suggesting environmental influences (nutrition, healthcare) play major roles. This is why WHO charts, based on optimal growth conditions across six countries, are preferred internationally - they represent how children should grow rather than how they do grow in specific populations. Socioeconomic status profoundly impacts growth. Children in poverty face increased risk of malnutrition, food insecurity, chronic stress, and inadequate healthcare, leading to lower height and weight percentiles. Conversely, affluent populations face higher obesity rates due to excessive caloric intake and sedentary lifestyles. Geographic differences exist even within countries - children in certain regions with different dietary patterns, activity levels, or disease exposure may have different growth patterns. Breastfed infants grow differently than formula-fed infants, especially in the first 6-12 months, with breastfed babies often having lower weight percentiles but healthy development. This is one reason WHO charts (based on breastfed infants) differ from older CDC charts. Premature infants often remain at lower percentiles even after age correction, though most experience catch-up growth by age 2-3 years. Children with chronic illnesses (asthma, diabetes, inflammatory bowel disease) may have altered growth patterns. Girls and boys have different percentile charts because they grow differently, with boys generally larger than girls and girls entering puberty earlier. Individual genetic variation means siblings from the same family can have vastly different percentiles yet all be healthy.',

    medicalDisclaimer:
      'This growth percentile calculator is provided for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Growth percentiles are screening tools that require clinical interpretation by qualified pediatricians or healthcare professionals. A percentile result alone cannot diagnose any medical condition. Many factors influence growth including genetics, nutrition, physical activity, sleep, stress, and underlying health conditions. Parents should never make medical decisions based solely on percentile calculations. If your child\'s measurements fall outside typical ranges, show rapid changes across percentiles, or if you have any concerns about your child\'s growth or development, please consult with a pediatrician immediately. Specialized evaluation by pediatric endocrinologists, gastroenterologists, or other specialists may be necessary in some cases. This calculator uses approximate reference data and simplified statistical methods for demonstration purposes - for medical decision-making, healthcare providers use detailed, validated growth chart software and clinical judgment. Measurements used in this calculator should be as accurate as possible - incorrect height, weight, or age entry will produce inaccurate percentiles. Never restrict your child\'s food intake or implement dietary changes without medical supervision, as this can harm growth and development.',

    references: [
      'World Health Organization (WHO) - Child Growth Standards',
      'Centers for Disease Control and Prevention (CDC) - Growth Charts',
      'American Academy of Pediatrics - Bright Futures Guidelines',
      'WHO Multicentre Growth Reference Study Group. WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age. Geneva: WHO; 2006.',
      'Kuczmarski RJ, Ogden CL, Guo SS, et al. 2000 CDC Growth Charts for the United States. Vital Health Stat 11. 2002;(246):1-190.',
      'Grummer-Strawn LM, Reinold C, Krebs NF. Use of World Health Organization and CDC growth charts for children aged 0-59 months in the United States. MMWR Recomm Rep. 2010;59(RR-9):1-15.',
    ],

    tips: [
      'Track growth over time rather than worrying about a single measurement - consistency along a percentile curve is more important than the specific percentile',
      'Ensure accurate measurements: remove shoes for height, minimal clothing for weight, and measure at consistent times of day',
      'Consider parental height - children of short parents will often have lower percentiles, which is normal',
      'Focus on healthy habits (balanced nutrition, physical activity, adequate sleep) rather than fixating on percentiles',
      'Breastfed infants may have lower weight percentiles than formula-fed infants, which is typically healthy',
      'Percentiles are not grades - a child at the 25th percentile who stays there is healthier than one dropping from 75th to 25th',
      'For premature infants, use corrected age (actual age minus weeks of prematurity) until age 2-3 years',
      'Consult your pediatrician if your child crosses two or more major percentile lines or falls below the 3rd or above the 97th percentile',
    ],

    faqs: [
      {
        question: 'What percentile should my child be in?',
        answer:
          'There is no single "right" percentile for all children. Healthy children can be anywhere from the 5th to 95th percentile. What matters most is that your child maintains consistent growth along their own curve over time. Genetics play a huge role - children of short parents will naturally have lower height percentiles, while children of tall parents will have higher percentiles. As long as your child is growing consistently, eating well, and developing normally, their specific percentile is less important than the trend.',
      },
      {
        question: 'My child dropped from the 60th to 40th percentile. Should I be worried?',
        answer:
          'A drop of one percentile category (such as from 60th to 40th) can be normal, especially during growth transitions or after illness. However, crossing two or more major percentile lines (such as from 75th to 25th) warrants medical evaluation. Consider the context: is your child eating well, active, and developing normally? Have there been recent illnesses, dietary changes, or stressors? Bring growth records to your pediatrician who can assess the pattern over multiple visits and determine if evaluation is needed.',
      },
      {
        question: 'Should I use WHO or CDC growth charts?',
        answer:
          'For children under 2 years, WHO growth standards are generally preferred as they represent optimal growth based on healthy, breastfed infants from diverse populations worldwide. For children 2 years and older, both WHO and CDC charts are acceptable. In the United States, many pediatricians transition to CDC charts at age 2, while international practices often continue with WHO charts. The most important factor is using the same chart consistently over time to track trends. Discuss with your pediatrician which chart they use.',
      },
      {
        question: 'My child is above the 95th percentile for weight. Does this mean they are obese?',
        answer:
          'For children over 2 years, BMI above the 95th percentile indicates obesity, while the 85th-95th percentile indicates overweight. However, percentiles are screening tools requiring clinical context. Some very tall or muscular children may have high weight percentiles despite healthy body composition. Your pediatrician will assess overall health, dietary patterns, physical activity, family history, and possibly body composition to determine if intervention is needed. If obesity is confirmed, focus on healthy family lifestyle changes rather than restrictive dieting, which can harm growth.',
      },
      {
        question: 'Can growth percentiles predict adult height?',
        answer:
          'Height percentiles provide a rough estimate, but prediction requires additional information. The midparental height formula gives expected adult height range based on parent heights. Bone age X-rays (comparing skeletal maturity to chronological age) provide more accurate predictions. Generally, children tend to stay near their percentile curve through childhood, with girls reaching adult height around ages 14-15 and boys around ages 16-17. However, early or late puberty can significantly affect when growth stops. Growth patterns in the first 2 years of life are less predictive of adult height than patterns from ages 2-10 years.',
      },
    ],
  },
  tr: {
    whatIs:
      'Büyüme persantilleri, çocuğunuzun boyunu, kilosunu ve vücut kitle indeksini (VKİ) aynı yaş ve cinsiyetteki diğer çocuklarla karşılaştıran standartlaştırılmış ölçümlerdir. Dünya Sağlık Örgütü (WHO) ve Hastalık Kontrol ve Önleme Merkezleri (CDC) tarafından geliştirilen büyüme çizelgeleri, 0\'dan 100\'e kadar persantilleri çizer ve 50. persentil medyan veya ortalama değeri temsil eder. Örneğin, çocuğunuz boy için 60. persentilde ise, bu onların kendi yaş ve cinsiyetindeki çocukların %60\'ından daha uzun olduğu anlamına gelir. Büyüme persantilleri, pediatristler ve ebeveynler için bir çocuğun sağlıklı ve tutarlı bir şekilde büyüyüp büyümediğini izlemek için gerekli araçlardır.',

    howToCalculate:
      'Büyüme persantilleri, çocuğunuzun ölçümlerini geniş popülasyon çalışmalarından elde edilen referans verilerle karşılaştırarak hesaplanır. İlk olarak, doğru ölçümler esastır: boy, bir stadiometre (duvara monte ölçüm cihazı) kullanılarak ayakkabısız ölçülmelidir, kilo kalibre edilmiş bir tartıda minimum giysiyle ölçülmelidir ve yaş, 2 yaşın altındaki çocuklar için ay cinsinden ve daha büyük çocuklar için yıl ve ay cinsinden tam olarak hesaplanmalıdır.',

    formulaDetails:
      'Büyüme persentil hesaplamaları, büyüme verilerindeki çarpıklığı hesaba katan istatistiksel bir teknik olan LMS yöntemine (Lambda-Mu-Sigma) dayanır. Belirli bir yaş ve cinsiyet için, üç parametre dağılımı tanımlar: L çarpıklığı temsil eder (Box-Cox dönüşümü), M medyanı temsil eder ve S varyasyon katsayısını temsil eder.',

    categories: [
      {
        range: '< 3.',
        label: 'Çok Düşük',
        description:
          '3. persentilin altında büyüme sorunlarını, yetersiz beslenmeyi veya kronik hastalığı gösterebilir. Pediatrist değerlendirmesi şiddetle önerilir.',
        color: '#EF4444',
      },
      {
        range: '3. - 15.',
        label: 'Düşük',
        description:
          'Ortalamanın altında ancak tutarlıysa genellikle normaldir. Eğilimleri izleyin. Bazı çocuklar genetik olarak daha küçüktür.',
        color: '#F97316',
      },
      {
        range: '15. - 50.',
        label: 'Ortalamanın Altı',
        description:
          'Ortalamanın altında ancak sağlıklı aralık. Çocukların yaklaşık üçte biri burada yer alır. Büyüme tutarlıysa normaldir.',
        color: '#3B82F6',
      },
      {
        range: '50. - 85.',
        label: 'Ortalama',
        description:
          'Sağlıklı ortalama aralık. Çocukların çoğu (yaklaşık %35) bu kategoriye girer. Tipik büyümeyi gösterir.',
        color: '#10B981',
      },
      {
        range: '85. - 95.',
        label: 'Ortalamanın Üstü',
        description:
          'Ortalamanın üstünde ancak genellikle sağlıklı. Kilo/BMI için orantılı büyümeyi sağlamak için izleyin. Boy için genellikle genetiktir.',
        color: '#3B82F6',
      },
      {
        range: '95. - 97.',
        label: 'Yüksek',
        description:
          'Yüksek persentil. Kilo/BMI için fazla kilo riskini gösterebilir. Boy için orantılı büyümeyi izleyin. Pediatristle görüşün.',
        color: '#F97316',
      },
      {
        range: '> 97.',
        label: 'Çok Yüksek',
        description:
          'Çok yüksek persentil. Kilo/BMI için obeziteyi gösterebilir. Boy için endokrin sorunları ekarte edin. Tıbbi değerlendirme önerilir.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'Büyüme persentillerini yorumlamak, birkaç temel ilkeyi anlamayı gerektirir. İlk olarak, persentiller mutlak değil, göreceli ölçülerdir - çocuğun akranlarıyla nasıl karşılaştırıldığını gösterirler, sağlıklı olup olmadığını değil. Sürekli olarak 10. persentilde kalan bir çocuk, genellikle 75. persentilden 25. persentile düşen bir çocuktan daha sağlıklıdır.',

    limitations:
      'Büyüme persentillerinin, ebeveynlerin ve sağlık hizmeti sağlayıcılarının anlaması gereken önemli sınırlamaları vardır. İlk olarak, referans popülasyonlara istatistiksel karşılaştırmaları temsil ederler, ideal veya optimal büyümeyi değil. Örneğin CDC çizelgeleri, çocukluk obezitesinin arttığı 1960\'lar-1990\'lardan verileri içerir, bu da üst persantillerin potansiyel olarak fazla kilolu çocukları içerdiği anlamına gelir.',

    healthRisks:
      'Anormal büyüme persantilleri, dikkat gerektiren çeşitli sağlık endişelerini gösterebilir. Boy, kilo veya her ikisi için çok düşük persentiller (3. persentilin altında) gelişme geriliğini gösterebilir; bunun çok sayıda nedeni vardır: yoksulluk, gıda güvensizliği veya beslenme zorluklarından kaynaklanan yetersiz beslenme; çölyak hastalığı, kistik fibroz veya inflamatuar bağırsak hastalığı gibi malabsorpsiyon bozuklukları; HIV veya parazitler dahil kronik enfeksiyonlar; büyüme hormonu eksikliği, hipotiroidizm veya Cushing sendromu gibi endokrin bozukluklar.',

    alternativeMeasures:
      'Basit persentillerin ötesinde ek bilgiler sağlayan birkaç tamamlayıcı ölçüm vardır. Boya göre kilo veya yaşa göre BMI persantilleri, bir çocuğun kilosunun boyuna orantılı olup olmadığını değerlendirir, bu da tek başına kilodan daha bilgilendiricidir. Baş çevresi persantilleri (3 yaşın altındaki çocuklar için) mikrosefali, makrosefali veya anormal beyin büyümesini belirlemeye yardımcı olur.',

    demographicDifferences:
      'Büyüme kalıpları, genetik ve çevresel faktörler nedeniyle popülasyonlar arasında değişir. Etnik köken boyu önemli ölçüde etkiler: Kuzey Avrupa kökenli çocuklar, Asya veya Hispanik kökenli çocuklardan daha uzun olma eğilimindedir. Afrika kökenli Amerikalı çocuklar genellikle aynı yaştaki beyaz çocuklardan daha uzun ve daha ağırdır.',

    medicalDisclaimer:
      'Bu büyüme persentil hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Büyüme persantilleri, kalifiye pediatristler veya sağlık profesyonelleri tarafından klinik yorumlama gerektiren tarama araçlarıdır. Tek başına bir persentil sonucu herhangi bir tıbbi durumu teşhis edemez. Genetik, beslenme, fiziksel aktivite, uyku, stres ve altta yatan sağlık durumları dahil birçok faktör büyümeyi etkiler.',

    references: [
      'Dünya Sağlık Örgütü (WHO) - Çocuk Büyüme Standartları',
      'Hastalık Kontrol ve Önleme Merkezleri (CDC) - Büyüme Çizelgeleri',
      'Amerikan Pediatri Akademisi - Parlak Gelecekler Kılavuzları',
    ],

    tips: [
      'Tek bir ölçüm yerine zaman içindeki büyümeyi takip edin - bir persentil eğrisi boyunca tutarlılık, belirli persentilden daha önemlidir',
      'Doğru ölçümler sağlayın: boy için ayakkabıları çıkarın, kilo için minimum giysi, ve günün tutarlı zamanlarında ölçün',
      'Ebeveyn boyunu göz önünde bulundurun - kısa ebeveynlerin çocukları genellikle daha düşük persentillere sahip olur, bu normaldir',
      'Persantillere takılmak yerine sağlıklı alışkanlıklara (dengeli beslenme, fiziksel aktivite, yeterli uyku) odaklanın',
    ],

    faqs: [
      {
        question: 'Çocuğum hangi persentilde olmalı?',
        answer:
          'Tüm çocuklar için tek bir "doğru" persentil yoktur. Sağlıklı çocuklar 5. ile 95. persentil arasında herhangi bir yerde olabilir. En önemli olan, çocuğunuzun zaman içinde kendi eğrisi boyunca tutarlı büyüme göstermesidir. Genetik büyük rol oynar - kısa ebeveynlerin çocukları doğal olarak daha düşük boy persentillerine sahip olurken, uzun ebeveynlerin çocukları daha yüksek persentillere sahip olacaktır.',
      },
      {
        question: 'Çocuğum 60. persentilden 40. persentile düştü. Endişelenmeli miyim?',
        answer:
          'Bir persentil kategorisi düşüşü (60. persentilden 40. persentile gibi) normal olabilir, özellikle büyüme geçişleri sırasında veya hastalıktan sonra. Ancak, iki veya daha fazla ana persentil çizgisini geçmek (75. persentilden 25. persentile gibi) tıbbi değerlendirmeyi gerektirir. Bağlamı göz önünde bulundurun: çocuğunuz iyi yiyor mu, aktif mi ve normal gelişiyor mu?',
      },
      {
        question: 'WHO mu CDC büyüme çizelgelerini mi kullanmalıyım?',
        answer:
          '2 yaşın altındaki çocuklar için, WHO büyüme standartları genellikle tercih edilir çünkü dünya çapında sağlıklı, emzirilen bebeklerden optimal büyümeyi temsil ederler. 2 yaş ve üzeri çocuklar için hem WHO hem de CDC çizelgeleri kabul edilebilir. Amerika Birleşik Devletleri\'nde, birçok pediatrist 2 yaşında CDC çizelgelerine geçer.',
      },
      {
        question: 'Çocuğum kilo için 95. persentilin üzerinde. Bu obez oldukları anlamına mı gelir?',
        answer:
          '2 yaşın üzerindeki çocuklar için, 95. persentilin üzerindeki BMI obeziteyi gösterirken, 85.-95. persentil fazla kiloyu gösterir. Ancak persentiller klinik bağlam gerektiren tarama araçlarıdır. Bazı çok uzun veya kaslı çocuklar, sağlıklı vücut kompozisyonuna rağmen yüksek kilo persentillerine sahip olabilir.',
      },
      {
        question: 'Büyüme persantilleri yetişkin boyunu tahmin edebilir mi?',
        answer:
          'Boy persantilleri kaba bir tahmin sağlar, ancak tahmin ek bilgi gerektirir. Orta ebeveyn boyu formülü, ebeveyn boylarına dayanarak beklenen yetişkin boy aralığını verir. Kemik yaşı röntgenleri (iskelet olgunluğunu kronolojik yaşla karşılaştırma) daha doğru tahminler sağlar.',
      },
    ],
  },
};
