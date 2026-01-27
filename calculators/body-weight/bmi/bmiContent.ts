import { CalculatorContent } from '@/types/calculator';

export const bmiContent: CalculatorContent = {
  en: {
    whatIs:
      'Body Mass Index (BMI) is a widely used screening tool that estimates body fat based on height and weight measurements. Developed by Belgian mathematician Adolphe Quetelet in the 1830s, BMI provides a simple numerical measure to classify individuals into weight categories. The formula is BMI = kg/m², where kg represents a person\'s weight in kilograms and m² is their height in meters squared. The World Health Organization (WHO) defines a healthy BMI range as 18.5 to 24.9, with values below indicating underweight and values above suggesting overweight or obesity. While BMI is not a direct measure of body fat, it serves as a useful population-level indicator and screening tool for potential health risks associated with weight.',

    howToCalculate:
      'To calculate your BMI, you need two measurements: your height and weight. For the metric system, divide your weight in kilograms by your height in meters squared (BMI = kg/m²). For example, if you weigh 70 kg and are 1.75 m tall: BMI = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = 22.9. For the imperial system, divide your weight in pounds by your height in inches squared, then multiply by 703: BMI = (lbs/in²) × 703. For instance, if you weigh 154 lbs and are 67 inches tall: BMI = (154 ÷ 4489) × 703 = 24.1.',

    formulaDetails:
      'The BMI formula uses a mathematical relationship between height and weight to estimate body composition. In the metric system, the calculation is straightforward: divide your weight in kilograms by the square of your height in meters (kg/m²). The squaring of height accounts for the fact that heavier people are generally taller, creating a ratio that normalizes weight across different heights. In the imperial system, an additional conversion factor of 703 is needed to align with the metric standard, resulting in the formula: (weight in pounds × 703) ÷ (height in inches)². The number 703 is a conversion factor derived from the difference between metric and imperial units. For example, a person who is 180 cm (1.8 m) tall and weighs 75 kg would calculate: 75 ÷ (1.8 × 1.8) = 75 ÷ 3.24 = 23.1 kg/m². The same person in imperial units (5\'11" or 71 inches, 165 lbs) would calculate: (165 × 703) ÷ (71 × 71) = 115,995 ÷ 5,041 = 23.0. Minor differences between metric and imperial calculations may occur due to rounding. Understanding the formula helps you track changes in your BMI over time and interpret what the numbers mean for your health.',

    categories: [
      {
        range: '< 16.0',
        label: 'Severe Thinness',
        description:
          'Severely underweight with significant health risks including malnutrition, weakened immune system, and organ damage. Immediate medical attention required.',
        color: '#EF4444',
      },
      {
        range: '16.0 - 16.9',
        label: 'Moderate Thinness',
        description:
          'Moderately underweight with increased health risks. May indicate inadequate nutrition or underlying health conditions requiring medical evaluation.',
        color: '#F97316',
      },
      {
        range: '17.0 - 18.4',
        label: 'Mild Thinness',
        description:
          'Slightly underweight. While less concerning than severe thinness, may still indicate insufficient body reserves and should be monitored.',
        color: '#F59E0B',
      },
      {
        range: '18.5 - 24.9',
        label: 'Normal Weight',
        description:
          'Healthy weight range associated with lowest health risks. Maintain through balanced nutrition and regular physical activity.',
        color: '#10B981',
      },
      {
        range: '25.0 - 29.9',
        label: 'Overweight',
        description:
          'Above healthy weight range. Slightly increased risk for health conditions. Lifestyle modifications recommended to prevent progression.',
        color: '#F59E0B',
      },
      {
        range: '30.0 - 34.9',
        label: 'Obese Class I',
        description:
          'Moderate obesity with significantly increased health risks including type 2 diabetes, heart disease, and joint problems. Medical intervention advised.',
        color: '#F97316',
      },
      {
        range: '35.0 - 39.9',
        label: 'Obese Class II',
        description:
          'Severe obesity with high health risks. Comprehensive medical management including diet, exercise, and possibly medication or surgery may be necessary.',
        color: '#EF4444',
      },
      {
        range: '\u2265 40.0',
        label: 'Obese Class III',
        description:
          'Very severe obesity (formerly called "morbid obesity") with extreme health risks. Urgent medical intervention required, including consideration of bariatric surgery.',
        color: '#DC2626',
      },
    ],

    interpretation:
      'BMI serves as a screening tool to categorize individuals into weight status groups that correlate with health risk levels. A BMI in the normal range (18.5-24.9) is associated with the lowest risk of weight-related health problems. Values below 18.5 may indicate malnutrition or other health issues, while values above 25.0 suggest increased risk for conditions such as cardiovascular disease, type 2 diabetes, hypertension, certain cancers, and osteoarthritis. However, BMI is not a diagnostic tool and should be interpreted alongside other health indicators including waist circumference, body composition, blood pressure, blood glucose, cholesterol levels, and family health history. Individual health assessment should always be conducted by qualified healthcare professionals who can consider your complete health profile.',

    limitations:
      'While BMI is a useful screening tool for populations, it has several important limitations for individual assessment. First, BMI does not distinguish between muscle mass and fat mass. Athletes and bodybuilders with high muscle mass may have elevated BMI values despite low body fat percentages. Conversely, elderly individuals or those with sarcopenia (muscle loss) may have normal BMI despite high body fat. Second, BMI does not account for fat distribution. Visceral fat (around organs) is more dangerous than subcutaneous fat, but BMI cannot differentiate between these. Third, BMI thresholds may not be appropriate for all ethnic groups. Studies show that Asian populations may face health risks at lower BMI values, while Pacific Islander populations may be healthier at higher BMIs due to different body compositions. Fourth, BMI does not consider age-related changes in body composition. Older adults naturally lose muscle mass and bone density, affecting the relationship between BMI and health. Fifth, BMI cannot account for pregnancy, which temporarily increases weight and BMI. Sixth, BMI does not reflect overall fitness level or metabolic health. Someone with a normal BMI but sedentary lifestyle may be less healthy than an overweight person who exercises regularly. Finally, BMI is less accurate for very short (< 5 feet) or very tall (> 6\'2") individuals due to the squared height factor. For these reasons, healthcare providers should use BMI as one of multiple assessment tools, not as a standalone diagnostic measure.',

    healthRisks:
      'Both low and high BMI values are associated with increased health risks. Underweight individuals (BMI < 18.5) face risks including malnutrition, weakened immune function, osteoporosis, anemia, fertility problems, and increased surgical complications. In women, very low BMI can cause menstrual irregularities and pregnancy complications. Overweight and obese individuals face different but equally serious risks. At BMI 25-29.9 (overweight), risks begin to increase for cardiovascular disease, hypertension, type 2 diabetes, sleep apnea, and certain cancers. As BMI rises into obesity ranges (30+), risks escalate substantially. Obesity Class I (BMI 30-34.9) significantly increases risk for all the above conditions plus gallbladder disease, osteoarthritis, and fatty liver disease. Obesity Class II and III (BMI 35+) carry extreme risks including heart failure, stroke, metabolic syndrome, severe diabetes complications, respiratory problems, and reduced life expectancy. Research indicates that adults with BMI over 40 may lose 8-10 years of life expectancy. However, it\'s crucial to note that BMI is just one risk factor. Two people with identical BMI may have vastly different health outcomes based on genetics, lifestyle, body composition, and metabolic health. Waist circumference, particularly waist-to-hip ratio, may be a better predictor of health risks than BMI alone. Men with waist circumference over 40 inches (102 cm) and women over 35 inches (88 cm) face increased health risks regardless of BMI.',

    alternativeMeasures:
      'Given BMI\'s limitations, healthcare professionals often use complementary measurements for more comprehensive body composition assessment. Waist circumference and waist-to-hip ratio are simple measures that indicate abdominal obesity, a strong predictor of metabolic disease. A healthy waist-to-hip ratio is below 0.90 for men and below 0.85 for women. Body fat percentage, measured through methods like bioelectrical impedance analysis (BIA), DEXA scans, or skinfold calipers, provides direct information about fat versus lean mass. Healthy body fat ranges are typically 10-20% for men and 20-30% for women, though these vary by age and fitness level. Waist-to-height ratio is an emerging metric where waist circumference should be less than half your height. Body shape index (ABSI) incorporates waist circumference, BMI, and height to better predict mortality risk. For clinical settings, imaging techniques like DEXA (dual-energy X-ray absorptiometry) provide detailed body composition including bone density, muscle mass, and fat distribution. CT and MRI scans can measure visceral fat specifically. Blood markers including fasting glucose, HbA1c, lipid panel, and inflammatory markers (like C-reactive protein) provide insight into metabolic health independent of body weight. Finally, fitness tests such as VO2 max, strength assessments, and flexibility measures indicate functional health. A comprehensive health assessment should consider multiple factors rather than relying solely on BMI.',

    demographicDifferences:
      'BMI standards vary across different populations due to genetic and physiological differences. The World Health Organization recognizes that Asian populations may face increased health risks at lower BMI thresholds. For Asian adults, overweight is often defined as BMI ≥23 and obesity as BMI ≥27.5, rather than the standard 25 and 30. This is because Asian individuals tend to have higher body fat percentages and more visceral fat at the same BMI compared to European populations. Conversely, Pacific Islander and Polynesian populations often have higher muscle mass and bone density, meaning higher BMI values may not indicate increased health risks. Age significantly affects BMI interpretation. For children and adolescents, BMI is compared to age and sex-specific percentile charts rather than using absolute cutoffs. Elderly adults may have optimal BMI ranges slightly higher than young adults (23-28) due to age-related muscle loss and the "obesity paradox" where moderate overweight appears protective in advanced age. Sex differences also matter: women naturally have higher body fat percentages than men, and the same BMI represents different body compositions. Pregnancy temporarily increases BMI and requires special considerations. Athletes, particularly those in strength sports, routinely have "overweight" or "obese" BMI classifications despite excellent metabolic health. These demographic differences underscore why BMI should never be used as a sole diagnostic criterion and why personalized medical assessment is essential.',

    medicalDisclaimer:
      'This BMI calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. BMI is a screening tool, not a diagnostic measure. It does not directly measure body fat, muscle mass, or overall health. Individual health status depends on many factors including genetics, lifestyle, medical history, and body composition that BMI cannot assess. Results from this calculator should not be used to make medical decisions without consulting qualified healthcare professionals. If you have concerns about your weight, body composition, or overall health, please consult with a physician, registered dietitian, or other licensed healthcare provider who can perform a comprehensive evaluation. Pregnant women, children, athletes, elderly individuals, and those with medical conditions should not rely on standard BMI classifications without professional guidance. Never start a diet, exercise program, or weight loss intervention based solely on BMI results without medical supervision.',

    references: [
      'World Health Organization (WHO) - Global Database on Body Mass Index',
      'Centers for Disease Control and Prevention (CDC) - About Adult BMI',
      'National Institutes of Health (NIH) - Clinical Guidelines on Obesity',
      'Keys A, Fidanza F, Karvonen MJ, et al. Indices of relative weight and obesity. J Chronic Dis. 1972;25(6):329-343.',
      'WHO Expert Consultation. Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies. Lancet. 2004;363(9403):157-163.',
      'Flegal KM, Kit BK, Orpana H, Graubard BI. Association of all-cause mortality with overweight and obesity using standard body mass index categories. JAMA. 2013;309(1):71-82.',
      'Romero-Corral A, Somers VK, et al. Accuracy of body mass index in diagnosing obesity in the adult general population. Int J Obes. 2008;32(6):959-966.',
    ],

    tips: [
      'BMI is just one indicator of health - consider other factors like muscle mass, bone density, waist circumference, fitness level, and overall metabolic health',
      'Consult with healthcare professionals (physician, registered dietitian, or nutritionist) for a comprehensive health assessment and personalized recommendations',
      'Regular physical activity (at least 150 minutes of moderate exercise per week) and balanced nutrition are key to maintaining a healthy weight',
      'BMI may not be accurate for athletes with high muscle mass, elderly individuals with muscle loss, or pregnant women',
      'Track trends over time rather than focusing on a single BMI measurement - gradual, sustainable changes are more important than quick fixes',
      'Combine BMI with waist circumference measurements for better health risk assessment',
      'Focus on overall health improvements (energy levels, sleep quality, fitness) rather than obsessing over specific BMI numbers',
      'Different ethnic groups may have different healthy BMI ranges - discuss appropriate targets with your healthcare provider',
    ],

    faqs: [
      {
        question: 'What is a healthy BMI range?',
        answer:
          'A healthy BMI range is generally between 18.5 and 24.9 for adults. However, this can vary based on factors like age, sex, muscle mass, and ethnicity. Asian populations may have lower optimal ranges (18.5-23), while some other ethnic groups may have slightly different standards. For children and adolescents, BMI is assessed using age and sex-specific percentile charts rather than absolute values.',
      },
      {
        question: 'Is BMI accurate for everyone?',
        answer:
          'No, BMI has important limitations. It does not distinguish between muscle and fat, so athletes and bodybuilders may have high BMI despite being healthy. It also does not account for fat distribution, age-related changes, or ethnic differences in body composition. BMI is less accurate for very short or tall individuals, elderly people, pregnant women, and those with high muscle mass. Always consult healthcare professionals for personalized assessment.',
      },
      {
        question: 'How can I improve my BMI if it\'s too high or too low?',
        answer:
          'For high BMI, focus on gradual weight loss through balanced nutrition (caloric deficit with nutrient-dense foods), regular physical activity (both cardio and strength training), adequate sleep, stress management, and behavioral changes. Aim for 1-2 pounds of weight loss per week for sustainable results. For low BMI, work with healthcare providers to rule out underlying conditions, increase caloric intake with nutrient-rich foods, incorporate strength training to build muscle, and address any eating disorders or malnutrition issues.',
      },
      {
        question: 'Why is my BMI different from my body fat percentage?',
        answer:
          'BMI and body fat percentage measure different things. BMI is a ratio of weight to height that does not distinguish between fat mass, muscle mass, bone, or water. Body fat percentage specifically measures the proportion of your weight that comes from fat. Someone with high muscle mass may have an elevated BMI but low body fat percentage, while someone with low muscle mass may have normal BMI but high body fat percentage. For accurate body composition assessment, use both metrics along with other measurements.',
      },
      {
        question: 'How often should I check my BMI?',
        answer:
          'For general health monitoring, checking BMI every 3-6 months is sufficient unless you\'re actively trying to lose or gain weight. More frequent monitoring (monthly) may be appropriate if you\'re in a weight management program under medical supervision. However, avoid obsessive daily weighing as normal weight fluctuations from water retention, food intake, and other factors can cause BMI to vary. Focus on long-term trends rather than short-term changes. Always combine BMI tracking with other health indicators like energy levels, fitness improvements, and how your clothes fit.',
      },
      {
        question: 'Can children use the same BMI calculator as adults?',
        answer:
          'No, children and adolescents (ages 2-19) require special BMI-for-age percentile calculators that account for age and sex. Children\'s bodies change rapidly during growth, so a single BMI number does not indicate health status. Instead, BMI is plotted on CDC or WHO growth charts to determine percentiles. A BMI between the 5th and 85th percentile is considered healthy, 85th-95th percentile is overweight, and above 95th percentile indicates obesity. Always consult pediatricians for interpretation of children\'s BMI.',
      },
      {
        question: 'Does BMI predict life expectancy?',
        answer:
          'BMI shows statistical associations with mortality risk at a population level, but it is not a reliable predictor for individuals. Research shows a U-shaped curve where both very low (< 18.5) and very high (> 35) BMI are associated with increased mortality, while BMI in the "overweight" range (25-29.9) sometimes shows lower mortality ("obesity paradox"). However, this relationship is complex and influenced by age, fitness level, muscle mass, fat distribution, genetics, and pre-existing health conditions. Metabolic health markers (blood pressure, cholesterol, glucose) are often better predictors than BMI alone.',
      },
    ],
  },
  tr: {
    whatIs:
      'Vücut Kitle İndeksi (VKİ), boy ve kilo ölçümlerine dayalı olarak vücut yağını tahmin eden yaygın kullanılan bir tarama aracıdır. Belçikalı matematikçi Adolphe Quetelet tarafından 1830\'larda geliştirilen VKİ, bireyleri kilo kategorilerine ayırmak için basit bir sayısal ölçü sağlar. Formül VKİ = kg/m² şeklindedir; burada kg kişinin kilogram cinsinden ağırlığını, m² ise metre kare cinsinden boyunu temsil eder. Dünya Sağlık Örgütü (WHO) sağlıklı VKİ aralığını 18.5 ile 24.9 olarak tanımlar; bu değerin altındaki değerler zayıflığı, üstündeki değerler ise fazla kilolu veya obeziteyi gösterir. VKİ doğrudan vücut yağını ölçmese de, kilo ile ilişkili potansiyel sağlık riskleri için yararlı bir popülasyon düzeyinde gösterge ve tarama aracı görevi görür.',

    howToCalculate:
      'VKİ\'nizi hesaplamak için iki ölçüme ihtiyacınız var: boyunuz ve kilonuz. Metrik sistem için, kilonuzu kilogram cinsinden boyunuzun metre kare ile bölün (VKİ = kg/m²). Örneğin, 70 kg ağırlığınız ve 1.75 m boyunuz varsa: VKİ = 70 ÷ (1.75 × 1.75) = 70 ÷ 3.0625 = 22.9. İngiliz sistemi için, kilonuzu pound cinsinden boyunuzun inç kare ile bölün, sonra 703 ile çarpın: VKİ = (lbs/in²) × 703. Örneğin, 154 lbs ağırlığınız ve 67 inç boyunuz varsa: VKİ = (154 ÷ 4489) × 703 = 24.1.',

    formulaDetails:
      'VKİ formülü, vücut kompozisyonunu tahmin etmek için boy ve kilo arasındaki matematiksel bir ilişki kullanır. Metrik sistemde hesaplama basittir: kilonuzu kilogram cinsinden boyunuzun metre kare ile bölün (kg/m²). Boyun karesi alınması, daha ağır insanların genellikle daha uzun olması gerçeğini hesaba katar ve farklı boylar arasında kiloyu normalleştiren bir oran oluşturur. İngiliz sisteminde, metrik standarda uyum sağlamak için 703\'lük ek bir dönüşüm faktörü gerekir, bu da şu formülle sonuçlanır: (pound cinsinden kilo × 703) ÷ (inç cinsinden boy)². 703 sayısı, metrik ve İngiliz birimleri arasındaki farktan türetilen bir dönüşüm faktörüdür. Örneğin, 180 cm (1.8 m) boyunda ve 75 kg ağırlığında bir kişi şöyle hesaplar: 75 ÷ (1.8 × 1.8) = 75 ÷ 3.24 = 23.1 kg/m². Aynı kişi İngiliz birimlerinde (5\'11" veya 71 inç, 165 lbs) şöyle hesaplar: (165 × 703) ÷ (71 × 71) = 115,995 ÷ 5,041 = 23.0. Yuvarlama nedeniyle metrik ve İngiliz hesaplamaları arasında küçük farklar oluşabilir. Formülü anlamak, VKİ\'nizdeki değişiklikleri zaman içinde takip etmenize ve sayıların sağlığınız için ne anlama geldiğini yorumlamanıza yardımcı olur.',

    categories: [
      {
        range: '< 16.0',
        label: 'Ciddi Zayıflık',
        description:
          'Yetersiz beslenme, zayıflamış bağışıklık sistemi ve organ hasarı dahil önemli sağlık riskleri ile ciddi şekilde zayıf. Acil tıbbi müdahale gereklidir.',
        color: '#EF4444',
      },
      {
        range: '16.0 - 16.9',
        label: 'Orta Derecede Zayıflık',
        description:
          'Artmış sağlık riskleri ile orta derecede zayıf. Yetersiz beslenme veya tıbbi değerlendirme gerektiren altta yatan sağlık durumlarını gösterebilir.',
        color: '#F97316',
      },
      {
        range: '17.0 - 18.4',
        label: 'Hafif Zayıflık',
        description:
          'Hafif zayıf. Ciddi zayıflıktan daha az endişe verici olsa da, yine de yetersiz vücut rezervlerini gösterebilir ve izlenmelidir.',
        color: '#F59E0B',
      },
      {
        range: '18.5 - 24.9',
        label: 'Normal Kilo',
        description:
          'En düşük sağlık riskleriyle ilişkili sağlıklı kilo aralığı. Dengeli beslenme ve düzenli fiziksel aktivite ile koruyun.',
        color: '#10B981',
      },
      {
        range: '25.0 - 29.9',
        label: 'Fazla Kilolu',
        description:
          'Sağlıklı kilo aralığının üstünde. Sağlık durumları için hafifçe artmış risk. İlerlemeyi önlemek için yaşam tarzı değişiklikleri önerilir.',
        color: '#F59E0B',
      },
      {
        range: '30.0 - 34.9',
        label: 'Obez Sınıf I',
        description:
          'Tip 2 diyabet, kalp hastalığı ve eklem sorunları dahil önemli ölçüde artmış sağlık riskleri ile orta düzeyde obezite. Tıbbi müdahale önerilir.',
        color: '#F97316',
      },
      {
        range: '35.0 - 39.9',
        label: 'Obez Sınıf II',
        description:
          'Yüksek sağlık riskleri ile ciddi obezite. Diyet, egzersiz ve muhtemelen ilaç veya ameliyat dahil kapsamlı tıbbi yönetim gerekebilir.',
        color: '#EF4444',
      },
      {
        range: '\u2265 40.0',
        label: 'Obez Sınıf III',
        description:
          'Aşırı sağlık riskleri ile çok ciddi obezite (eskiden "morbid obezite" olarak adlandırılırdı). Bariatrik cerrahi değerlendirmesi dahil acil tıbbi müdahale gereklidir.',
        color: '#DC2626',
      },
    ],

    interpretation:
      'VKİ, bireyleri sağlık risk seviyeleriyle ilişkili kilo durumu gruplarına ayırmak için bir tarama aracı görevi görür. Normal aralıkta (18.5-24.9) bir VKİ, kilo ile ilgili sağlık sorunlarının en düşük riskiyle ilişkilidir. 18.5\'in altındaki değerler yetersiz beslenme veya diğer sağlık sorunlarını gösterebilirken, 25.0\'ın üstündeki değerler kardiyovasküler hastalık, tip 2 diyabet, hipertansiyon, belirli kanserler ve osteoartrit gibi durumlar için artmış riski önerir. Ancak VKİ bir teşhis aracı değildir ve bel çevresi, vücut kompozisyonu, kan basıncı, kan şekeri, kolesterol seviyeleri ve aile sağlık geçmişi dahil diğer sağlık göstergeleriyle birlikte yorumlanmalıdır. Bireysel sağlık değerlendirmesi her zaman tam sağlık profilinizi değerlendirebilecek kalifiye sağlık profesyonelleri tarafından yapılmalıdır.',

    limitations:
      'VKİ popülasyonlar için yararlı bir tarama aracı olsa da, bireysel değerlendirme için birkaç önemli sınırlaması vardır. İlk olarak, VKİ kas kütlesi ile yağ kütlesi arasında ayrım yapmaz. Yüksek kas kütlesine sahip sporcular ve vücut geliştiriciler, düşük vücut yağı yüzdelerine rağmen yüksek VKİ değerlerine sahip olabilir. Tersine, yaşlı bireyler veya sarkopeni (kas kaybı) olanlar, yüksek vücut yağına rağmen normal VKİ\'ye sahip olabilir. İkinci olarak, VKİ yağ dağılımını hesaba katmaz. Visseral yağ (organların etrafında) deri altı yağından daha tehlikelidir, ancak VKİ bunlar arasında ayrım yapamaz. Üçüncü olarak, VKİ eşikleri tüm etnik gruplar için uygun olmayabilir. Çalışmalar, Asya popülasyonlarının daha düşük VKİ değerlerinde sağlık riskleriyle karşılaşabileceğini, Pasifik Adalıları popülasyonlarının ise farklı vücut kompozisyonları nedeniyle daha yüksek VKİ\'lerde daha sağlıklı olabileceğini göstermektedir. Dördüncü olarak, VKİ vücut kompozisyonundaki yaşa bağlı değişiklikleri dikkate almaz. Yaşlı yetişkinler doğal olarak kas kütlesi ve kemik yoğunluğu kaybeder, bu da VKİ ile sağlık arasındaki ilişkiyi etkiler. Beşinci olarak, VKİ geçici olarak kilo ve VKİ\'yi artıran hamileliği hesaba katamaz. Altıncı olarak, VKİ genel fitness seviyesini veya metabolik sağlığı yansıtmaz. Normal VKİ\'ye sahip ancak hareketsiz yaşam tarzı olan biri, düzenli egzersiz yapan fazla kilolu bir kişiden daha az sağlıklı olabilir. Son olarak, VKİ çok kısa (< 5 feet) veya çok uzun (> 6\'2") bireyler için karesi alınan boy faktörü nedeniyle daha az doğrudur. Bu nedenlerle, sağlık hizmeti sağlayıcıları VKİ\'yi tek başına bir teşhis ölçüsü olarak değil, birden fazla değerlendirme aracından biri olarak kullanmalıdır.',

    healthRisks:
      'Hem düşük hem de yüksek VKİ değerleri artmış sağlık riskleriyle ilişkilidir. Zayıf bireyler (VKİ < 18.5) yetersiz beslenme, zayıflamış bağışıklık fonksiyonu, osteoporoz, anemi, doğurganlık sorunları ve artmış cerrahi komplikasyonlar dahil risklerle karşı karşıyadır. Kadınlarda, çok düşük VKİ adet düzensizliklerine ve hamilelik komplikasyonlarına neden olabilir. Fazla kilolu ve obez bireyler farklı ancak eşit derecede ciddi risklerle karşı karşıyadır. VKİ 25-29.9\'da (fazla kilolu), kardiyovasküler hastalık, hipertansiyon, tip 2 diyabet, uyku apnesi ve belirli kanserler için riskler artmaya başlar. VKİ obezite aralıklarına (30+) yükseldikçe, riskler önemli ölçüde artar. Obezite Sınıf I (VKİ 30-34.9) yukarıdaki tüm durumlar artı safra kesesi hastalığı, osteoartrit ve yağlı karaciğer hastalığı için riski önemli ölçüde artırır. Obezite Sınıf II ve III (VKİ 35+) kalp yetmezliği, inme, metabolik sendrom, ciddi diyabet komplikasyonları, solunum sorunları ve azalmış yaşam beklentisi dahil aşırı riskler taşır. Araştırmalar, VKİ 40\'ın üzerinde olan yetişkinlerin yaşam beklentisinin 8-10 yıl azalabileceğini göstermektedir. Ancak, VKİ\'nin sadece bir risk faktörü olduğunu belirtmek önemlidir. Aynı VKİ\'ye sahip iki kişi, genetik, yaşam tarzı, vücut kompozisyonu ve metabolik sağlığa bağlı olarak çok farklı sağlık sonuçlarına sahip olabilir. Bel çevresi, özellikle bel-kalça oranı, VKİ\'den tek başına sağlık risklerinin daha iyi bir öngörücüsü olabilir. 40 inçin (102 cm) üzerinde bel çevresine sahip erkekler ve 35 inçin (88 cm) üzerinde olan kadınlar, VKİ\'den bağımsız olarak artmış sağlık riskleriyle karşı karşıyadır.',

    alternativeMeasures:
      'VKİ\'nin sınırlamaları göz önüne alındığında, sağlık profesyonelleri genellikle daha kapsamlı vücut kompozisyonu değerlendirmesi için tamamlayıcı ölçümler kullanır. Bel çevresi ve bel-kalça oranı, metabolik hastalığın güçlü bir öngörücüsü olan karın obezitesini gösteren basit ölçümlerdir. Sağlıklı bir bel-kalça oranı erkekler için 0.90\'ın altında ve kadınlar için 0.85\'in altındadır. Biyoelektrik empedans analizi (BIA), DEXA taramaları veya deri kıvrım kaliperleri gibi yöntemlerle ölçülen vücut yağı yüzdesi, yağ ile yağsız kütle hakkında doğrudan bilgi sağlar. Sağlıklı vücut yağı aralıkları genellikle erkekler için %10-20 ve kadınlar için %20-30\'dur, ancak bunlar yaş ve fitness seviyesine göre değişir. Bel-boy oranı, bel çevresinin boyunuzun yarısından az olması gereken yeni bir ölçüttür. Vücut şekli indeksi (ABSI) ölçüm riski daha iyi tahmin etmek için bel çevresi, VKİ ve boyu birleştirir. Klinik ortamlar için, DEXA (çift enerjili X-ışını absorpsiyometrisi) gibi görüntüleme teknikleri kemik yoğunluğu, kas kütlesi ve yağ dağılımı dahil ayrıntılı vücut kompozisyonu sağlar. CT ve MRI taramaları özellikle visseral yağı ölçebilir. Açlık glukozu, HbA1c, lipid paneli ve inflamatuar belirteçler (C-reaktif protein gibi) gibi kan belirteçleri, vücut ağırlığından bağımsız olarak metabolik sağlık hakkında bilgi sağlar. Son olarak, VO2 max, kuvvet değerlendirmeleri ve esneklik ölçümleri gibi fitness testleri fonksiyonel sağlığı gösterir. Kapsamlı bir sağlık değerlendirmesi, yalnızca VKİ\'ye güvenmek yerine birden fazla faktörü göz önünde bulundurmalıdır.',

    demographicDifferences:
      'VKİ standartları genetik ve fizyolojik farklılıklar nedeniyle farklı popülasyonlar arasında değişir. Dünya Sağlık Örgütü, Asya popülasyonlarının daha düşük VKİ eşiklerinde artmış sağlık riskleriyle karşılaşabileceğini kabul eder. Asya yetişkinleri için, fazla kilolu genellikle standart 25 ve 30 yerine VKİ ≥23 ve obezite VKİ ≥27.5 olarak tanımlanır. Bunun nedeni, Asyalı bireylerin aynı VKİ\'de Avrupa popülasyonlarına kıyasla daha yüksek vücut yağı yüzdelerine ve daha fazla visseral yağa sahip olma eğiliminde olmalarıdır. Tersine, Pasifik Adalıları ve Polinezya popülasyonları genellikle daha yüksek kas kütlesi ve kemik yoğunluğuna sahiptir, bu da daha yüksek VKİ değerlerinin artmış sağlık risklerini göstermeyebileceği anlamına gelir. Yaş, VKİ yorumunu önemli ölçüde etkiler. Çocuklar ve ergenler (2-19 yaş) için, mutlak kesme değerleri kullanmak yerine yaş ve cinsiyete özgü yüzdelik çizelgelere göre VKİ karşılaştırılır. Yaşlı yetişkinler, yaşa bağlı kas kaybı ve orta derecede fazla kilonun ileri yaşta koruyucu göründüğü "obezite paradoksu" nedeniyle genç yetişkinlerden biraz daha yüksek optimal VKİ aralıklarına (23-28) sahip olabilir. Cinsiyet farkları da önemlidir: kadınlar doğal olarak erkeklerden daha yüksek vücut yağı yüzdelerine sahiptir ve aynı VKİ farklı vücut kompozisyonlarını temsil eder. Hamilelik geçici olarak VKİ\'yi artırır ve özel değerlendirmeler gerektirir. Sporcular, özellikle kuvvet sporlarında olanlar, mükemmel metabolik sağlığa rağmen rutin olarak "fazla kilolu" veya "obez" VKİ sınıflandırmalarına sahiptir. Bu demografik farklılıklar, VKİ\'nin asla tek başına bir teşhis kriteri olarak kullanılmaması gerektiğini ve kişiselleştirilmiş tıbbi değerlendirmenin neden gerekli olduğunu vurgular.',

    medicalDisclaimer:
      'Bu VKİ hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. VKİ bir tarama aracıdır, teşhis ölçüsü değildir. Doğrudan vücut yağını, kas kütlesini veya genel sağlığı ölçmez. Bireysel sağlık durumu, VKİ\'nin değerlendiremeyeceği genetik, yaşam tarzı, tıbbi geçmiş ve vücut kompozisyonu dahil birçok faktöre bağlıdır. Bu hesaplayıcıdan elde edilen sonuçlar, kalifiye sağlık profesyonellerine danışmadan tıbbi kararlar almak için kullanılmamalıdır. Kilonuz, vücut kompozisyonunuz veya genel sağlığınız hakkında endişeleriniz varsa, lütfen kapsamlı bir değerlendirme yapabilecek bir doktor, diyetisyen veya diğer lisanslı sağlık hizmeti sağlayıcısına danışın. Hamile kadınlar, çocuklar, sporcular, yaşlı bireyler ve tıbbi durumları olanlar, profesyonel rehberlik olmadan standart VKİ sınıflandırmalarına güvenmemelidir. Yalnızca VKİ sonuçlarına dayanarak tıbbi gözetim olmadan asla bir diyet, egzersiz programı veya kilo verme müdahalesine başlamayın.',

    references: [
      'Dünya Sağlık Örgütü (WHO) - Vücut Kitle İndeksi Küresel Veritabanı',
      'Hastalık Kontrol ve Önleme Merkezleri (CDC) - Yetişkin VKİ Hakkında',
      'Ulusal Sağlık Enstitüleri (NIH) - Obezite Üzerine Klinik Kılavuzlar',
      'Keys A, Fidanza F, Karvonen MJ, ve ark. Göreceli kilo ve obezite indeksleri. J Chronic Dis. 1972;25(6):329-343.',
      'WHO Uzman Konsültasyonu. Asya popülasyonları için uygun vücut kitle indeksi ve politika ve müdahale stratejileri için etkileri. Lancet. 2004;363(9403):157-163.',
      'Flegal KM, Kit BK, Orpana H, Graubard BI. Standart vücut kitle indeksi kategorilerini kullanarak fazla kilo ve obezite ile tüm nedenlere bağlı ölümlerin ilişkisi. JAMA. 2013;309(1):71-82.',
      'Romero-Corral A, Somers VK, ve ark. Yetişkin genel popülasyonda obeziteyi teşhis etmede vücut kitle indeksinin doğruluğu. Int J Obes. 2008;32(6):959-966.',
    ],

    tips: [
      'VKİ sağlığın sadece bir göstergesidir - kas kütlesi, kemik yoğunluğu, bel çevresi, fitness seviyesi ve genel metabolik sağlık gibi diğer faktörleri de göz önünde bulundurun',
      'Kapsamlı bir sağlık değerlendirmesi ve kişiselleştirilmiş öneriler için sağlık profesyonelleri (doktor, diyetisyen veya beslenme uzmanı) ile görüşün',
      'Düzenli fiziksel aktivite (haftada en az 150 dakika orta düzeyde egzersiz) ve dengeli beslenme sağlıklı bir kilo korumak için anahtardır',
      'VKİ yüksek kas kütlesi olan sporcular, kas kaybı olan yaşlı bireyler veya hamile kadınlar için doğru olmayabilir',
      'Hızlı çözümlerden ziyade kademeli, sürdürülebilir değişiklikler daha önemlidir - tek bir VKİ ölçümüne odaklanmak yerine zaman içindeki eğilimleri takip edin',
      'Daha iyi sağlık riski değerlendirmesi için VKİ\'yi bel çevresi ölçümleriyle birleştirin',
      'Belirli VKİ numaralarına takılmak yerine genel sağlık iyileştirmelerine (enerji seviyeleri, uyku kalitesi, fitness) odaklanın',
      'Farklı etnik gruplar farklı sağlıklı VKİ aralıklarına sahip olabilir - sağlık hizmeti sağlayıcınızla uygun hedefleri görüşün',
    ],

    faqs: [
      {
        question: 'Sağlıklı VKİ aralığı nedir?',
        answer:
          'Yetişkinler için sağlıklı VKİ aralığı genellikle 18.5 ile 24.9 arasındadır. Ancak bu, yaş, cinsiyet, kas kütlesi ve etnik köken gibi faktörlere göre değişebilir. Asya popülasyonları daha düşük optimal aralıklara (18.5-23) sahip olabilirken, diğer bazı etnik gruplar biraz farklı standartlara sahip olabilir. Çocuklar ve ergenler için VKİ, mutlak değerler yerine yaş ve cinsiyete özgü yüzdelik çizelgeler kullanılarak değerlendirilir.',
      },
      {
        question: 'VKİ herkes için doğru mu?',
        answer:
          'Hayır, VKİ\'nin önemli sınırlamaları vardır. Kas ile yağ arasında ayrım yapmaz, bu yüzden sporcular ve vücut geliştiriciler sağlıklı olmalarına rağmen yüksek VKİ\'ye sahip olabilir. Ayrıca yağ dağılımını, yaşa bağlı değişiklikleri veya vücut kompozisyonundaki etnik farklılıkları hesaba katmaz. VKİ çok kısa veya uzun bireyler, yaşlı insanlar, hamile kadınlar ve yüksek kas kütlesine sahip olanlar için daha az doğrudur. Kişiselleştirilmiş değerlendirme için her zaman sağlık profesyonellerine danışın.',
      },
      {
        question: 'VKİ\'m çok yüksek veya çok düşükse nasıl iyileştirebilirim?',
        answer:
          'Yüksek VKİ için, dengeli beslenme (besin yoğun gıdalarla kalorik açık), düzenli fiziksel aktivite (hem kardiyovasküler hem de güç antrenmanı), yeterli uyku, stres yönetimi ve davranışsal değişiklikler yoluyla kademeli kilo kaybına odaklanın. Sürdürülebilir sonuçlar için haftada 1-2 pound kilo kaybı hedefleyin. Düşük VKİ için, altta yatan durumları ekarte etmek için sağlık hizmeti sağlayıcılarıyla çalışın, besin açısından zengin gıdalarla kalori alımını artırın, kas oluşturmak için güç antrenmanı yapın ve yeme bozuklukları veya yetersiz beslenme sorunlarını ele alın.',
      },
      {
        question: 'VKİ\'m neden vücut yağı yüzdemden farklı?',
        answer:
          'VKİ ve vücut yağı yüzdesi farklı şeyleri ölçer. VKİ, yağ kütlesi, kas kütlesi, kemik veya su arasında ayrım yapmayan kilo ile boy arasındaki bir orandır. Vücut yağı yüzdesi özellikle kilonuzun yağdan gelen oranını ölçer. Yüksek kas kütlesine sahip biri yüksek VKİ\'ye ancak düşük vücut yağı yüzdesine sahip olabilirken, düşük kas kütlesine sahip biri normal VKİ\'ye ancak yüksek vücut yağı yüzdesine sahip olabilir. Doğru vücut kompozisyonu değerlendirmesi için her iki metriği de diğer ölçümlerle birlikte kullanın.',
      },
      {
        question: 'VKİ\'mi ne sıklıkla kontrol etmeliyim?',
        answer:
          'Genel sağlık izleme için, aktif olarak kilo vermeye veya almaya çalışmıyorsanız her 3-6 ayda bir VKİ kontrolü yeterlidir. Tıbbi gözetim altında bir kilo yönetim programındaysanız daha sık izleme (aylık) uygun olabilir. Ancak, su tutma, gıda alımı ve diğer faktörlerden kaynaklanan normal kilo dalgalanmaları VKİ\'nin değişmesine neden olabileceğinden obsesif günlük tartmaktan kaçının. Kısa vadeli değişiklikler yerine uzun vadeli eğilimlere odaklanın. VKİ takibini her zaman enerji seviyeleri, fitness iyileştirmeleri ve kıyafetlerinizin size nasıl oturduğu gibi diğer sağlık göstergeleriyle birleştirin.',
      },
      {
        question: 'Çocuklar yetişkinlerle aynı VKİ hesaplayıcısını kullanabilir mi?',
        answer:
          'Hayır, çocuklar ve ergenler (2-19 yaş) yaş ve cinsiyeti hesaba katan özel yaşa göre VKİ yüzdelik hesaplayıcıları gerektirir. Çocukların vücutları büyüme sırasında hızla değişir, bu nedenle tek bir VKİ sayısı sağlık durumunu göstermez. Bunun yerine, VKİ yüzdelikleri belirlemek için CDC veya WHO büyüme çizelgelerine işaretlenir. 5. ile 85. yüzdelik arasındaki VKİ sağlıklı kabul edilir, 85-95. yüzdelik fazla kilolu, 95. yüzdeliğin üstü ise obeziteyi gösterir. Çocukların VKİ yorumu için her zaman pediatristlere danışın.',
      },
      {
        question: 'VKİ yaşam beklentisini öngörür mü?',
        answer:
          'VKİ popülasyon düzeyinde ölüm riski ile istatistiksel ilişkiler gösterir, ancak bireyler için güvenilir bir öngörücü değildir. Araştırmalar, hem çok düşük (< 18.5) hem de çok yüksek (> 35) VKİ\'nin artmış ölümle ilişkili olduğu bir U-şekilli eğri gösterirken, "fazla kilolu" aralığındaki (25-29.9) VKİ bazen daha düşük ölüm gösterir ("obezite paradoksu"). Ancak, bu ilişki karmaşıktır ve yaş, fitness seviyesi, kas kütlesi, yağ dağılımı, genetik ve önceden var olan sağlık durumlarından etkilenir. Metabolik sağlık belirteçleri (kan basıncı, kolesterol, glukoz) genellikle VKİ\'den tek başına daha iyi öngörücülerdir.',
      },
    ],
  },
};
