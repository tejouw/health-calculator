import { CalculatorContent } from '@/types/calculator';

export const bodyTypeContent: CalculatorContent = {
  en: {
    whatIs:
      `Body type classification, also known as somatotyping, is a system for categorizing human physiques into three primary types: Ectomorph (lean and long), Mesomorph (muscular and athletic), and Endomorph (wider and stockier). This concept was originally developed by American psychologist William Sheldon in the 1940s, who proposed that body composition was linked to personality traits. While the psychological aspect of his theory has been largely discredited, the physical classification system remains widely used in fitness and sports science today. Most people are not purely one type but rather a combination of two or three types, with one being dominant. Understanding your body type can help you tailor your nutrition and exercise strategies for more effective results. Modern exercise science recognizes that while genetics play a significant role in determining your body type, lifestyle factors like diet, exercise, sleep, and stress management can significantly influence your body composition over time. The somatotype system provides a useful starting framework for personalizing your fitness journey.`,

    howToCalculate:
      `Body type is determined through a combination of physical measurements and self-assessment of body characteristics. Traditional somatotyping uses anthropometric measurements including height, weight, bone widths (wrist, elbow, knee), limb circumferences, and skinfold measurements at specific body sites. The Heath-Carter method, developed in the 1960s as a more scientific refinement of Sheldon's original system, assigns numerical ratings on a scale for each component: endomorphy (relative fatness), mesomorphy (musculoskeletal robustness), and ectomorphy (relative linearity). Our calculator uses a simplified questionnaire-based approach that evaluates key physical traits such as wrist circumference (an indicator of frame size), shoulder-to-hip ratio, ease of weight gain or loss, muscle-building tendency, metabolic speed, limb proportions, and body shape tendencies. Each answer contributes to a composite score that determines your dominant body type or combination.`,

    formulaDetails:
      `The scientific somatotype system uses the Heath-Carter method, which provides three numerical values representing each body type component. Endomorphy is calculated using the sum of triceps, subscapular, and suprailiac skinfolds, corrected for height. The formula is: Endomorphy = -0.7182 + 0.1451(X) - 0.00068(X²) + 0.0000014(X³), where X is the sum of the three skinfolds multiplied by 170.18 divided by height in cm. Mesomorphy is calculated using humerus and femur breadths, arm circumference corrected for triceps skinfold, and calf circumference corrected for medial calf skinfold. Ectomorphy is derived from the Height-Weight Ratio (HWR): height divided by the cube root of weight. If HWR ≥ 40.75, Ectomorphy = 0.732(HWR) - 28.58. If HWR is between 38.28 and 40.75, Ectomorphy = 0.463(HWR) - 17.63. If HWR ≤ 38.28, Ectomorphy = 0.1. The resulting three numbers (e.g., 2-5-3) represent your somatotype profile. Our simplified quiz approximates these measurements through observable physical characteristics and self-reported tendencies.`,

    categories: [
      {
        range: 'Dominant Ecto Score',
        label: 'Ectomorph',
        description:
          'Characterized by a lean, long body with narrow shoulders and hips. Ectomorphs have fast metabolisms, find it difficult to gain weight or muscle, and tend to have low body fat. They excel in endurance sports like distance running, swimming, and cycling.',
        color: '#3B82F6',
      },
      {
        range: 'Dominant Meso Score',
        label: 'Mesomorph',
        description:
          'Characterized by a naturally athletic, muscular build with broad shoulders and a narrow waist. Mesomorphs respond well to exercise, gain muscle easily, and have moderate metabolisms. They excel in sports requiring power and agility like sprinting, gymnastics, and team sports.',
        color: '#10B981',
      },
      {
        range: 'Dominant Endo Score',
        label: 'Endomorph',
        description:
          'Characterized by a wider, stockier build with a tendency to store fat, especially around the midsection. Endomorphs have slower metabolisms but possess natural strength and power potential. They excel in strength-based sports like powerlifting, wrestling, and rugby.',
        color: '#F59E0B',
      },
    ],

    interpretation:
      `Your body type result represents your dominant somatotype based on physical characteristics and tendencies. Most people fall on a spectrum rather than being purely one type. A result showing a mixed type (like Ecto-Mesomorph) means you share significant characteristics of both types. Your dominant type influences how your body responds to food and exercise, but it does not determine your destiny. An ectomorph can build significant muscle with the right training and nutrition, just as an endomorph can achieve a lean physique with appropriate diet and exercise strategies. Use your body type as a starting point to customize your approach, not as a limitation. The percentage breakdown shows how strongly you align with each type, helping you understand which nutritional and training strategies may work best for your unique physiology. Remember that factors like age, hormonal status, and lifestyle habits also significantly impact body composition beyond your genetic predisposition.`,

    limitations:
      `Body type classification has several important limitations. First, Sheldon's original somatotype theory attempted to link body shape with personality and intelligence, claims that have been thoroughly debunked by modern science. Second, the three-category system is an oversimplification of the vast diversity in human body shapes. Real bodies exist on a continuous spectrum, not in discrete categories. Third, body type is not fixed throughout life. Aging, hormonal changes, diet, exercise habits, illness, and medication can all significantly alter body composition. Fourth, quiz-based assessments like this one are subjective and less accurate than anthropometric measurements performed by trained professionals. Fifth, body type classification does not account for important health factors like visceral fat distribution, metabolic health markers, cardiovascular fitness, or genetic predispositions to specific conditions. Sixth, cultural and ethnic variations in body composition mean that the same body type may carry different health implications across populations. Finally, there is a risk of using body type labels to justify unhealthy behaviors or to avoid making beneficial lifestyle changes. Body type should inform your approach, not limit your goals.`,

    healthRisks:
      `Each body type has different health considerations, though body type alone is not a reliable predictor of health outcomes. Ectomorphs may face risks related to being underweight, including nutrient deficiencies, low bone density (increasing osteoporosis risk), weakened immune function, and fertility issues in women. Their fast metabolism can mask poor dietary habits. Mesomorphs generally have favorable health profiles when active, but their ability to gain both muscle and fat means they can develop metabolic issues if they become sedentary. Their natural confidence in physical ability may lead to overtraining injuries. Endomorphs face the most commonly discussed health risks, as their tendency to store fat, particularly visceral fat around the midsection, is associated with increased risk of type 2 diabetes, cardiovascular disease, hypertension, certain cancers, and metabolic syndrome. However, metabolically healthy obesity exists, and an active endomorph may be healthier than a sedentary ectomorph. For all body types, regular physical activity, balanced nutrition, adequate sleep, stress management, and regular health screenings are essential regardless of natural physique.`,

    improvementTips:
      `Optimizing your health and fitness based on body type involves tailored strategies. Ectomorphs should focus on caloric surplus with nutrient-dense foods, emphasize heavy compound exercises with adequate rest between sessions, limit excessive cardio, and prioritize sleep for recovery and growth. Tracking calories can help ensure sufficient intake. Mesomorphs benefit from varied training that includes both strength and cardiovascular work, balanced macronutrient intake adjusted to goals, and consistent routines that challenge the body to prevent plateaus. Their natural advantage means they can see results from most well-designed programs. Endomorphs should prioritize creating a moderate caloric deficit through a combination of increased activity and controlled portions, emphasize higher protein intake for satiety and muscle preservation, incorporate both strength training and cardio (HIIT is particularly effective), and manage carbohydrate intake with strategic timing around workouts. For all types, consistency is more important than perfection. Building sustainable habits over time produces better results than extreme short-term approaches.`,

    alternativeMeasures:
      `Beyond somatotyping, several other body composition assessment methods provide complementary insights. Body Mass Index (BMI) offers a simple height-to-weight ratio but shares the limitation of not distinguishing muscle from fat. Waist-to-hip ratio is a more targeted measure of fat distribution and metabolic risk. Body fat percentage, measured through bioelectrical impedance analysis (BIA), DEXA scans, or skinfold calipers, directly quantifies fat mass versus lean mass. The Heath-Carter somatotype method provides the most rigorous scientific somatotyping using precise anthropometric measurements. Waist-to-height ratio is an emerging metric where your waist should measure less than half your height. Body composition analyzers using InBody or similar technology can provide detailed segmental analysis of muscle and fat distribution. Metabolic testing, including resting metabolic rate (RMR) measurement and glucose tolerance tests, can reveal how your body processes energy regardless of visible body type. For the most comprehensive understanding, combining multiple measurements provides a more complete picture than any single metric.`,

    demographicDifferences:
      `Body type distribution varies significantly across demographic groups due to genetic, environmental, and cultural factors. Research shows that certain ethnic populations tend toward specific somatotype patterns. West African-descended populations often display more mesomorphic characteristics, which may partly explain their overrepresentation in power sports. East Asian populations tend toward ectomorphic builds with lower average BMI but higher body fat percentages at the same BMI compared to European populations. Pacific Islander and Polynesian populations tend toward endomorphic-mesomorphic builds with naturally larger frames and higher muscle mass. Gender significantly influences somatotype distribution. Men tend to have broader shoulders relative to hips (more mesomorphic upper body), while women tend to store more fat in the lower body (more endomorphic distribution). Hormonal differences, particularly testosterone and estrogen levels, drive these sex-based variations. Age plays a major role as well. Most people shift toward greater endomorphy with aging due to declining metabolism, hormonal changes, and reduced physical activity. These demographic factors underscore why body type assessment should be interpreted within personal context rather than applied universally.`,

    medicalDisclaimer:
      `This body type calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Body type classification is a simplified framework that does not capture the full complexity of human physiology. The results from this quiz-based assessment are approximations based on self-reported characteristics and may not accurately reflect your true somatotype as determined by professional anthropometric measurement. Individual health status depends on many factors beyond body type, including genetics, lifestyle, medical history, mental health, and environmental factors. Do not use these results to make dietary or exercise decisions without consulting qualified healthcare professionals, registered dietitians, or certified fitness professionals. If you have concerns about your body composition, weight, or overall health, please seek guidance from a licensed healthcare provider. People with eating disorders, body dysmorphia, or related conditions should approach body type classification with caution and professional support.`,

    references: [
      'Sheldon WH, Stevens SS, Tucker WB. The Varieties of Human Physique. New York: Harper & Brothers; 1940.',
      'Heath BH, Carter JEL. A modified somatotype method. American Journal of Physical Anthropology. 1967;27(1):57-74.',
      'Carter JEL, Heath BH. Somatotyping: Development and Applications. Cambridge University Press; 1990.',
      'Koleva M, Nacheva A, Boev M. Somatotype and disease prevalence in adults. Reviews on Environmental Health. 2002;17(1):65-84.',
      'Ryan-Stewart H, Faulkner J, Jobson S. The influence of somatotype on anaerobic performance. PLoS ONE. 2018;13(5):e0197761.',
      'Buffa R, Floris GU, Putzu PF, Marini E. Body composition variations in ageing. Collegium Antropologicum. 2011;35(1):259-265.',
      'World Health Organization (WHO). Physical Activity and Adults - Global Recommendations.',
    ],

    tips: [
      'Your body type is a starting point, not a permanent label. With the right approach, you can shift your body composition significantly over time.',
      'Most people are a combination of two body types rather than purely one. Focus on the dominant type for primary strategy while considering secondary traits.',
      'Nutrition is the single most impactful factor you can control. Tailor your macronutrient ratios to your body type for optimal results.',
      'Consistency beats intensity. Regular moderate exercise produces better long-term results than sporadic extreme workouts.',
      'Sleep quality directly impacts body composition through hormonal regulation. Aim for 7-9 hours of quality sleep per night.',
      'Stress management matters. Chronic stress raises cortisol, promoting fat storage regardless of body type.',
      'Track your progress with multiple metrics (measurements, photos, strength gains) rather than relying solely on the scale.',
      'Consult a certified personal trainer or sports nutritionist for a program tailored to your specific body type and goals.',
    ],

    faqs: [
      {
        question: 'What are the three body types?',
        answer:
          `The three body types (somatotypes) are Ectomorph, Mesomorph, and Endomorph. Ectomorphs are characterized by lean, long bodies with fast metabolisms and difficulty gaining weight. Mesomorphs have naturally athletic, muscular builds with moderate metabolisms and respond well to exercise. Endomorphs have wider, stockier builds with slower metabolisms and a tendency to store fat. Most people are a combination of two or more types, with one being dominant. This classification was originally developed by William Sheldon in the 1940s and has been refined by sports scientists like Heath and Carter for practical fitness applications.`,
      },
      {
        question: 'Can your body type change over time?',
        answer:
          `While your genetic predisposition toward a certain body type remains constant, your body composition can change significantly through lifestyle factors. A naturally ectomorphic person can build substantial muscle mass through consistent strength training and proper nutrition, appearing more mesomorphic. Similarly, an endomorph can achieve a lean physique through dedicated diet and exercise. Age, hormonal changes (puberty, menopause), pregnancy, illness, and medications also shift body composition. Studies show that regular exercise can alter somatotype ratings over time. However, certain skeletal features like bone structure and limb proportions are fixed and contribute to your baseline body type.`,
      },
      {
        question: 'Is body type determined by genetics?',
        answer:
          `Body type is influenced by both genetics and environment. Research suggests that approximately 50-80% of body composition variation is genetically determined, including factors like bone structure, natural muscle fiber distribution, metabolic rate, and fat storage patterns. However, epigenetics (how genes are expressed based on environment) plays a crucial role. Your diet, exercise habits, sleep quality, stress levels, and overall lifestyle can significantly modify how your genetic blueprint manifests. Twin studies show that even genetically identical individuals can develop different body compositions based on lifestyle choices. Think of genetics as providing the range of possibilities, while your lifestyle determines where within that range you fall.`,
      },
      {
        question: 'What is the best diet for my body type?',
        answer:
          `Diet recommendations vary by body type. Ectomorphs benefit from a higher carbohydrate intake (50-55% of calories), moderate protein (25%), and lower fat (20-25%), with an emphasis on caloric surplus for muscle building. Mesomorphs do well with a balanced split of approximately 40% carbs, 30% protein, and 30% fat, adjusted based on specific goals. Endomorphs typically respond better to lower carbohydrate intake (25-30%), higher protein (30-35%), and moderate fat (35-40%), as they tend to be more insulin sensitive. However, individual responses vary significantly, and these are starting points rather than rigid rules. The best diet is one that is sustainable, provides adequate nutrition, and supports your health and fitness goals. Consulting a registered dietitian for personalized guidance is recommended.`,
      },
      {
        question: 'What exercise works best for each body type?',
        answer:
          `Ectomorphs should prioritize heavy compound strength training with adequate rest, limiting cardio to maintain caloric surplus for muscle growth. Short, intense sessions (45-60 minutes) 3-4 times per week work best. Mesomorphs thrive with varied training that includes both strength and cardiovascular work, and they can handle higher training volumes. A mix of compound movements, sport-specific training, and moderate cardio is ideal. Endomorphs benefit most from a combination of strength training and cardiovascular exercise, with an emphasis on HIIT (High-Intensity Interval Training) for metabolic boost. Circuit-style workouts, higher repetitions with shorter rest periods, and consistent daily movement are most effective. All body types benefit from flexibility work and adequate recovery.`,
      },
      {
        question: 'Are mixed body types common?',
        answer:
          `Yes, mixed body types are actually more common than pure types. Most people exhibit characteristics of two or even all three somatotypes in varying degrees. Common combinations include Ecto-Mesomorph (lean but muscular, common in swimmers and basketball players), Meso-Endomorph (strong and athletic but carries some extra fat, common in football linemen and wrestlers), and Ecto-Endomorph (thin limbs but carries fat in the midsection, sometimes called "skinny fat"). The Heath-Carter somatotype system recognizes this by assigning each person three numerical values representing their degree of endomorphy, mesomorphy, and ectomorphy. Understanding your specific combination helps you create a more nuanced and effective approach to nutrition and training.`,
      },
      {
        question: 'How scientifically accurate is body type classification?',
        answer:
          `Body type classification has both scientific merit and limitations. The Heath-Carter somatotype method, which uses precise anthropometric measurements, is a validated research tool used in sports science and physical anthropology. Studies have confirmed associations between somatotype and athletic performance, disease risk, and metabolic characteristics. However, the simplified quiz-based approach used in online calculators provides approximations rather than precise measurements. Critics note that the three-category system oversimplifies human body diversity, that body composition changes throughout life, and that health outcomes depend on many factors beyond body type. The most accurate assessment involves professional anthropometric measurement. Despite limitations, somatotyping remains a useful framework for understanding body composition tendencies and tailoring fitness strategies, as long as results are interpreted as guidelines rather than absolute classifications.`,
      },
    ],
  },
  tr: {
    whatIs:
      `Vücut tipi sınıflandırması (somatotipleme), insan fiziklerini üç ana tipe ayıran bir sistemdir: Ektomorf (ince ve uzun), Mezomorf (kaslı ve atletik) ve Endomorf (geniş ve tıknaz). Bu kavram ilk olarak 1940'larda Amerikalı psikolog William Sheldon tarafından geliştirilmiştir. Sheldon, vücut kompozisyonunun kişilik özellikleriyle bağlantılı olduğunu öne sürmüştür. Teorisinin psikolojik yönü büyük ölçüde çürütülmüş olsa da, fiziksel sınıflandırma sistemi günümüzde fitness ve spor biliminde hala yaygın olarak kullanılmaktadır. Çoğu insan tamamen tek bir tip değil, biri baskın olmak üzere iki veya üç tipin bir kombinasyonudur. Vücut tipinizi anlamak, daha etkili sonuçlar için beslenme ve egzersiz stratejilerinizi kişiselleştirmenize yardımcı olabilir. Modern egzersiz bilimi, genetiğin vücut tipinizi belirlemede önemli bir rol oynadığını kabul ederken, diyet, egzersiz, uyku ve stres yönetimi gibi yaşam tarzı faktörlerinin zamanla vücut kompozisyonunuzu önemli ölçüde etkileyebileceğini de vurgular.`,

    howToCalculate:
      `Vücut tipi, fiziksel ölçümler ve vücut özelliklerinin öz değerlendirmesinin bir kombinasyonuyla belirlenir. Geleneksel somatotipleme; boy, kilo, kemik genişlikleri (bilek, dirsek, diz), uzuv çevreleri ve belirli vücut bölgelerindeki deri kıvrımı ölçümlerini içeren antropometrik ölçümler kullanır. 1960'larda Sheldon'ın orijinal sisteminin daha bilimsel bir iyileştirmesi olarak geliştirilen Heath-Carter yöntemi, her bileşen için sayısal derecelendirmeler atar: endomorfi (göreceli yağlılık), mezomorfi (kas-iskelet sağlamlığı) ve ektomorfi (göreceli incelik). Hesaplayıcımız, bilek çevresi (iskelet büyüklüğünün bir göstergesi), omuz-kalça oranı, kilo alma veya verme kolaylığı, kas yapma eğilimi, metabolizma hızı, uzuv oranları ve vücut şekli eğilimleri gibi temel fiziksel özellikleri değerlendiren basitleştirilmiş bir anket tabanlı yaklaşım kullanır.`,

    formulaDetails:
      `Bilimsel somatotip sistemi, her vücut tipi bileşenini temsil eden üç sayısal değer sağlayan Heath-Carter yöntemini kullanır. Endomorfi; triceps, subskapular ve suprailiak deri kıvrımlarının toplamı kullanılarak, boya göre düzeltilerek hesaplanır. Formül: Endomorfi = -0.7182 + 0.1451(X) - 0.00068(X²) + 0.0000014(X³), burada X üç deri kıvrımının toplamı çarpı 170.18 bölü boy (cm). Mezomorfi; humerus ve femur genişlikleri, triceps deri kıvrımı için düzeltilmiş kol çevresi ve medial baldır deri kıvrımı için düzeltilmiş baldır çevresi kullanılarak hesaplanır. Ektomorfi, Boy-Ağırlık Oranından (HWR) türetilir: boy bölü ağırlığın küp kökü. HWR ≥ 40.75 ise, Ektomorfi = 0.732(HWR) - 28.58. HWR 38.28 ile 40.75 arasındaysa, Ektomorfi = 0.463(HWR) - 17.63. HWR ≤ 38.28 ise, Ektomorfi = 0.1. Ortaya çıkan üç sayı (örneğin 2-5-3) somatotip profilinizi temsil eder.`,

    categories: [
      {
        range: 'Baskın Ekto Skoru',
        label: 'Ektomorf',
        description:
          'Dar omuzlar ve kalçalarla birlikte ince, uzun bir vücutla karakterize edilir. Ektomorflar hızlı metabolizmaya sahiptir, kilo veya kas almakta zorlanır ve düşük vücut yağ oranına sahip olma eğilimindedir. Uzun mesafe koşusu, yüzme ve bisiklet gibi dayanıklılık sporlarında başarılıdırlar.',
        color: '#3B82F6',
      },
      {
        range: 'Baskın Mezo Skoru',
        label: 'Mezomorf',
        description:
          'Geniş omuzlar ve dar belle birlikte doğal atletik, kaslı bir yapıyla karakterize edilir. Mezomorflar egzersize iyi yanıt verir, kolayca kas yapar ve orta metabolizmaya sahiptir. Sprint, jimnastik ve takım sporları gibi güç ve çeviklik gerektiren sporlarda başarılıdırlar.',
        color: '#10B981',
      },
      {
        range: 'Baskın Endo Skoru',
        label: 'Endomorf',
        description:
          'Özellikle orta bölgede yağ depolama eğilimi ile daha geniş, tıknaz bir yapıyla karakterize edilir. Endomorflar daha yavaş metabolizmaya sahiptir ancak doğal güç ve kuvvet potansiyeline sahiptir. Halter, güreş ve rugby gibi güç tabanlı sporlarda başarılıdırlar.',
        color: '#F59E0B',
      },
    ],

    interpretation:
      `Vücut tipi sonucunuz, fiziksel özelliklerinize ve eğilimlerinize dayalı baskın somatotipinizi temsil eder. Çoğu insan tamamen tek bir tip olmak yerine bir yelpaze üzerinde yer alır. Karma bir tip (Ekto-Mezomorf gibi) gösteren bir sonuç, her iki tipin önemli özelliklerini paylaştığınız anlamına gelir. Baskın tipiniz, vücudunuzun gıda ve egzersize nasıl yanıt verdiğini etkiler, ancak kaderinizi belirlemez. Bir ektomorf doğru antrenman ve beslenmeyle önemli kas yapabilir, tıpkı bir endomorfun uygun diyet ve egzersiz stratejileriyle ince bir fizik elde edebileceği gibi. Vücut tipinizi yaklaşımınızı özelleştirmek için bir başlangıç noktası olarak kullanın, bir sınırlama olarak değil. Yüzde dağılımı her tiple ne kadar güçlü bir şekilde uyumlu olduğunuzu gösterir ve benzersiz fizyolojiniz için hangi beslenme ve antrenman stratejilerinin en iyi sonucu verebileceğini anlamanıza yardımcı olur.`,

    limitations:
      `Vücut tipi sınıflandırmasının birkaç önemli sınırlaması vardır. Birincisi, Sheldon'ın orijinal somatotip teorisi vücut şeklini kişilik ve zekayla ilişkilendirmeye çalışmıştır; bu iddialar modern bilim tarafından tamamen çürütülmüştür. İkincisi, üç kategorili sistem insan vücut şekillerindeki geniş çeşitliliğin aşırı basitleştirilmesidir. Gerçek vücutlar ayrık kategorilerde değil, sürekli bir yelpaze üzerinde bulunur. Üçüncüsü, vücut tipi yaşam boyunca sabit değildir. Yaşlanma, hormonal değişiklikler, diyet, egzersiz alışkanlıkları, hastalık ve ilaçlar vücut kompozisyonunu önemli ölçüde değiştirebilir. Dördüncüsü, bunun gibi anket tabanlı değerlendirmeler öznel olup eğitimli profesyoneller tarafından yapılan antropometrik ölçümlerden daha az doğrudur. Beşincisi, vücut tipi sınıflandırması visseral yağ dağılımı, metabolik sağlık belirteçleri, kardiyovasküler fitness veya belirli durumlara genetik yatkınlıklar gibi önemli sağlık faktörlerini hesaba katmaz. Son olarak, vücut tipi etiketlerinin sağlıksız davranışları haklı çıkarmak için kullanılma riski vardır.`,

    healthRisks:
      `Her vücut tipinin farklı sağlık değerlendirmeleri vardır, ancak vücut tipi tek başına sağlık sonuçlarının güvenilir bir göstergesi değildir. Ektomorflar, besin eksiklikleri, düşük kemik yoğunluğu (osteoporoz riskini artıran), zayıflamış bağışıklık fonksiyonu ve kadınlarda doğurganlık sorunları dahil düşük kilolu olmayla ilgili risklerle karşı karşıya kalabilir. Hızlı metabolizmaları kötü beslenme alışkanlıklarını maskeleyebilir. Mezomorflar aktif olduklarında genellikle olumlu sağlık profillerine sahiptir, ancak hem kas hem de yağ kazanma yetenekleri hareketsiz kalırlarsa metabolik sorunlara yol açabilir. Endomorflar, yağ depolama eğilimleri, özellikle orta bölgedeki visseral yağ, tip 2 diyabet, kardiyovasküler hastalık, hipertansiyon, belirli kanserler ve metabolik sendrom riski artışıyla ilişkili olduğundan en çok tartışılan sağlık riskleriyle karşı karşıyadır. Ancak tüm vücut tipleri için düzenli fiziksel aktivite, dengeli beslenme, yeterli uyku, stres yönetimi ve düzenli sağlık taramaları doğal fizik yapınızdan bağımsız olarak önemlidir.`,

    improvementTips:
      `Vücut tipine göre sağlığınızı ve fitnessinizi optimize etmek kişiselleştirilmiş stratejiler gerektirir. Ektomorflar besin değeri yüksek gıdalarla kalori fazlasına, yeterli dinlenmeyle ağır bileşik egzersizlere, aşırı kardiyoyu sınırlamaya ve toparlanma ile büyüme için uykuya öncelik vermelidir. Mezomorflar hem kuvvet hem de kardiyovasküler çalışmayı içeren çeşitli antrenmanlardan, hedeflere göre ayarlanmış dengeli makrobesin alımından ve platoları önlemek için vücuda meydan okuyan tutarlı rutinlerden fayda görür. Endomorflar artırılmış aktivite ve kontrollü porsiyonların bir kombinasyonuyla ılımlı bir kalori açığı oluşturmaya, tokluk ve kas koruması için yüksek protein alımına, hem kuvvet antrenmanı hem de kardiyoyu (HIIT özellikle etkilidir) dahil etmeye ve antrenman çevresinde stratejik zamanlama ile karbonhidrat alımını yönetmeye öncelik vermelidir. Tüm tipler için tutarlılık mükemmeliyetten daha önemlidir.`,

    alternativeMeasures:
      `Somatotiplemenin ötesinde, vücut kompozisyonunu değerlendirmek için birkaç başka yöntem tamamlayıcı bilgiler sağlar. Vücut Kitle İndeksi (VKİ) basit bir boy-kilo oranı sunar ancak kas ile yağ arasında ayrım yapamamak gibi aynı sınırlamayı paylaşır. Bel-kalça oranı, yağ dağılımı ve metabolik riskin daha hedefli bir ölçüsüdür. Biyoelektrik empedans analizi (BIA), DEXA taramaları veya deri kıvrımı kaliperleriyle ölçülen vücut yağı yüzdesi, yağ kütlesini yağsız kütleye karşı doğrudan nicelleştirir. Heath-Carter somatotip yöntemi, kesin antropometrik ölçümler kullanarak en titiz bilimsel somatotiplemeyi sağlar. Bel-boy oranı, belinizin boyunuzun yarısından az olması gereken yeni bir ölçüttür. Metabolik test, enerji işleme şeklinizi görünür vücut tipinden bağımsız olarak ortaya koyabilir. En kapsamlı anlayış için birden fazla ölçümü birleştirmek herhangi bir tek metrikten daha eksiksiz bir resim sağlar.`,

    demographicDifferences:
      `Vücut tipi dağılımı, genetik, çevresel ve kültürel faktörler nedeniyle demografik gruplar arasında önemli ölçüde değişir. Araştırmalar, belirli etnik popülasyonların belirli somatotip kalıplarına yönelme eğiliminde olduğunu göstermektedir. Batı Afrika kökenli popülasyonlar genellikle daha mezomorfik özellikler sergiler, bu da güç sporlarında fazla temsil edilmelerini kısmen açıklayabilir. Doğu Asya popülasyonları, Avrupa popülasyonlarına kıyasla aynı VKİ'de daha düşük ortalama VKİ ancak daha yüksek vücut yağı yüzdeleri ile ektomorfik yapılara yönelir. Pasifik Adalıları ve Polinezya popülasyonları, doğal olarak daha büyük iskeletler ve daha yüksek kas kütlesi ile endomorfik-mezomorfik yapılara yönelir. Cinsiyet, somatotip dağılımını önemli ölçüde etkiler. Erkekler kalçalara göre daha geniş omuzlara (daha mezomorfik üst vücut) sahip olma eğilimindeyken, kadınlar alt vücutta daha fazla yağ depolama eğilimindedir. Yaş da büyük bir rol oynar; çoğu insan yaşlanmayla birlikte azalan metabolizma ve hormonal değişiklikler nedeniyle daha fazla endomorfiye kayar.`,

    medicalDisclaimer:
      `Bu vücut tipi hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Vücut tipi sınıflandırması, insan fizyolojisinin tam karmaşıklığını yakalayamayan basitleştirilmiş bir çerçevedir. Bu anket tabanlı değerlendirmenin sonuçları, kendi bildirdiğiniz özelliklere dayalı yaklaşımlardır ve profesyonel antropometrik ölçümle belirlenen gerçek somatotipinizi doğru şekilde yansıtmayabilir. Bireysel sağlık durumu genetik, yaşam tarzı, tıbbi geçmiş, ruh sağlığı ve çevresel faktörler dahil vücut tipinin ötesinde birçok faktöre bağlıdır. Bu sonuçları nitelikli sağlık profesyonellerine, diyetisyenlere veya sertifikalı fitness profesyonellerine danışmadan diyet veya egzersiz kararları almak için kullanmayın. Yeme bozuklukları, vücut dismorfisi veya ilgili durumları olan kişiler vücut tipi sınıflandırmasına dikkatle ve profesyonel destekle yaklaşmalıdır.`,

    references: [
      'Sheldon WH, Stevens SS, Tucker WB. The Varieties of Human Physique. New York: Harper & Brothers; 1940.',
      'Heath BH, Carter JEL. A modified somatotype method. American Journal of Physical Anthropology. 1967;27(1):57-74.',
      'Carter JEL, Heath BH. Somatotyping: Development and Applications. Cambridge University Press; 1990.',
      'Koleva M, Nacheva A, Boev M. Somatotype and disease prevalence in adults. Reviews on Environmental Health. 2002;17(1):65-84.',
      'Ryan-Stewart H, Faulkner J, Jobson S. The influence of somatotype on anaerobic performance. PLoS ONE. 2018;13(5):e0197761.',
      'Buffa R, Floris GU, Putzu PF, Marini E. Body composition variations in ageing. Collegium Antropologicum. 2011;35(1):259-265.',
      'Dünya Sağlık Örgütü (WHO). Fiziksel Aktivite ve Yetişkinler - Küresel Öneriler.',
    ],

    tips: [
      'Vücut tipiniz bir başlangıç noktasıdır, kalıcı bir etiket değil. Doğru yaklaşımla vücut kompozisyonunuzu zamanla önemli ölçüde değiştirebilirsiniz.',
      'Çoğu insan tamamen tek bir tip yerine iki vücut tipinin kombinasyonudur. Birincil strateji için baskın tipe odaklanırken ikincil özellikleri de göz önünde bulundurun.',
      'Beslenme, kontrol edebileceğiniz en etkili faktördür. Optimal sonuçlar için makrobesin oranlarınızı vücut tipinize göre ayarlayın.',
      'Tutarlılık yoğunluğu yener. Düzenli ılımlı egzersiz, ara sıra yapılan aşırı antrenmanlardan daha iyi uzun vadeli sonuçlar üretir.',
      'Uyku kalitesi hormonal düzenleme yoluyla vücut kompozisyonunu doğrudan etkiler. Her gece 7-9 saat kaliteli uyku hedefleyin.',
      'Stres yönetimi önemlidir. Kronik stres, vücut tipinden bağımsız olarak yağ depolanmasını teşvik eden kortizolü artırır.',
      'İlerlemenizi yalnızca tartıya güvenmek yerine birden fazla metrikle (ölçümler, fotoğraflar, kuvvet kazanımları) takip edin.',
      'Vücut tipinize ve hedeflerinize özel bir program için sertifikalı bir kişisel antrenör veya spor beslenme uzmanına danışın.',
    ],

    faqs: [
      {
        question: 'Üç vücut tipi nedir?',
        answer:
          `Üç vücut tipi (somatotip) Ektomorf, Mezomorf ve Endomorf'tur. Ektomorflar ince, uzun vücutları, hızlı metabolizmaları ve kilo almada zorlukları ile karakterize edilir. Mezomorflar doğal atletik, kaslı yapıları, orta metabolizmaları ve egzersize iyi yanıt vermeleriyle tanınır. Endomorflar daha geniş, tıknaz yapıları, daha yavaş metabolizmaları ve yağ depolama eğilimleriyle bilinir. Çoğu insan biri baskın olmak üzere iki veya daha fazla tipin kombinasyonudur. Bu sınıflandırma ilk olarak William Sheldon tarafından 1940'larda geliştirilmiş ve Heath ve Carter gibi spor bilimciler tarafından pratik fitness uygulamaları için iyileştirilmiştir.`,
      },
      {
        question: 'Vücut tipiniz zamanla değişebilir mi?',
        answer:
          `Belirli bir vücut tipine genetik yatkınlığınız sabit kalsa da, vücut kompozisyonunuz yaşam tarzı faktörleriyle önemli ölçüde değişebilir. Doğal olarak ektomorfik bir kişi tutarlı kuvvet antrenmanı ve doğru beslenmeyle önemli kas kütlesi oluşturabilir ve daha mezomorfik görünebilir. Benzer şekilde, bir endomorf özel diyet ve egzersizle ince bir fizik elde edebilir. Yaş, hormonal değişiklikler (ergenlik, menopoz), hamilelik, hastalık ve ilaçlar da vücut kompozisyonunu değiştirir. Çalışmalar, düzenli egzersizin somatotip derecelendirmelerini zamanla değiştirebileceğini göstermektedir. Ancak kemik yapısı ve uzuv oranları gibi belirli iskelet özellikleri sabittir.`,
      },
      {
        question: 'Vücut tipi genetik mi?',
        answer:
          `Vücut tipi hem genetik hem de çevre tarafından etkilenir. Araştırmalar, vücut kompozisyonu varyasyonunun yaklaşık %50-80'inin kemik yapısı, doğal kas lifi dağılımı, metabolizma hızı ve yağ depolama kalıpları dahil olmak üzere genetik olarak belirlendiğini göstermektedir. Ancak epigenetik (genlerin çevreye dayalı olarak nasıl ifade edildiği) çok önemli bir rol oynar. Diyet, egzersiz alışkanlıkları, uyku kalitesi, stres seviyeleri ve genel yaşam tarzınız, genetik planınızın nasıl ortaya çıkacağını önemli ölçüde değiştirebilir. İkiz çalışmaları, genetik olarak özdeş bireylerin bile yaşam tarzı tercihlerine bağlı olarak farklı vücut kompozisyonları geliştirebileceğini göstermektedir.`,
      },
      {
        question: 'Vücut tipim için en iyi diyet nedir?',
        answer:
          `Diyet önerileri vücut tipine göre değişir. Ektomorflar daha yüksek karbonhidrat alımından (kalorilerin %50-55'i), ılımlı protein (%25) ve düşük yağdan (%20-25) fayda görür; kas yapımı için kalori fazlasına vurgu yapılır. Mezomorflar yaklaşık %40 karbonhidrat, %30 protein ve %30 yağdan oluşan dengeli bir oranla iyi sonuç alır. Endomorflar genellikle daha düşük karbonhidrat alımına (%25-30), yüksek protein (%30-35) ve orta yağa (%35-40) daha iyi yanıt verir, çünkü insüline daha duyarlı olma eğilimindedirler. Ancak bireysel yanıtlar önemli ölçüde değişir ve bunlar katı kurallar değil başlangıç noktalarıdır.`,
      },
      {
        question: 'Her vücut tipi için en iyi egzersiz hangisidir?',
        answer:
          `Ektomorflar, kas büyümesi için kalori fazlasını korumak üzere kardiyoyu sınırlayarak yeterli dinlenmeyle ağır bileşik kuvvet antrenmanına öncelik vermelidir. Haftada 3-4 kez kısa, yoğun seanslar (45-60 dakika) en iyi sonucu verir. Mezomorflar hem kuvvet hem de kardiyovasküler çalışmayı içeren çeşitli antrenmanlarla gelişir ve daha yüksek antrenman hacimlerini kaldırabilir. Endomorflar metabolik artış için HIIT (Yüksek Yoğunluklu Aralıklı Antrenman) vurgusuyla kuvvet antrenmanı ve kardiyovasküler egzersizin kombinasyonundan en çok fayda görür. Devre tarzı antrenmanlar, daha kısa dinlenme süreleriyle yüksek tekrarlar ve tutarlı günlük hareket en etkilidir.`,
      },
      {
        question: 'Karma vücut tipleri yaygın mı?',
        answer:
          `Evet, karma vücut tipleri aslında saf tiplerden daha yaygındır. Çoğu insan değişen derecelerde iki hatta üç somatotipin özelliklerini sergiler. Yaygın kombinasyonlar arasında Ekto-Mezomorf (ince ama kaslı, yüzücüler ve basketbolcularda yaygın), Mezo-Endomorf (güçlü ve atletik ama biraz fazla yağ taşıyan, güreşçilerde yaygın) ve Ekto-Endomorf (ince uzuvlar ama orta bölgede yağ taşıyan, bazen "skinny fat" olarak adlandırılır) bulunur. Heath-Carter somatotip sistemi, her kişiye endomorfi, mezomorfi ve ektomorfi derecelerini temsil eden üç sayısal değer atayarak bunu tanır.`,
      },
      {
        question: 'Vücut tipi sınıflandırması bilimsel olarak ne kadar doğrudur?',
        answer:
          `Vücut tipi sınıflandırması hem bilimsel değere hem de sınırlamalara sahiptir. Kesin antropometrik ölçümler kullanan Heath-Carter somatotip yöntemi, spor bilimi ve fiziksel antropolojide kullanılan doğrulanmış bir araştırma aracıdır. Çalışmalar, somatotip ile atletik performans, hastalık riski ve metabolik özellikler arasındaki ilişkileri doğrulamıştır. Ancak çevrimiçi hesaplayıcılarda kullanılan basitleştirilmiş anket tabanlı yaklaşım, kesin ölçümlerden ziyade yaklaşımlar sağlar. Eleştirmenler, üç kategorili sistemin insan vücut çeşitliliğini aşırı basitleştirdiğini belirtir. Sınırlamalara rağmen, sonuçlar mutlak sınıflandırmalar yerine kılavuz olarak yorumlandığı sürece, somatotipleme fitness stratejilerini kişiselleştirmek için yararlı bir çerçeve olmaya devam etmektedir.`,
      },
    ],
  },
};
