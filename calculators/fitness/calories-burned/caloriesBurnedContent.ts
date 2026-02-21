import type { CalculatorContent } from '@/types/calculator';

export const caloriesBurnedContent: CalculatorContent = {
  en: {
    whatIs: `The Calories Burned Calculator estimates how many calories you burn during various physical activities. It uses the **Metabolic Equivalent of Task (MET)** system, which is a scientifically validated method developed by the Compendium of Physical Activities. Each activity has a specific MET value that represents its energy cost relative to resting metabolism.

Understanding how many calories you burn during exercise is essential for weight management, fitness planning, and overall health optimization. Whether you're trying to lose weight, maintain your current weight, or fuel your athletic performance, knowing your caloric expenditure helps you make informed decisions about nutrition and exercise.

The calculator covers **60+ activities** across 8 categories including running, cycling, swimming, gym workouts, sports, cardio, outdoor activities, and daily tasks. Each activity is assigned a scientifically measured MET value from the Compendium of Physical Activities, ensuring accuracy in your calorie estimates.`,

    howToCalculate: `**How to Calculate Calories Burned:**

1. **Select Your Activity**: Choose from over 60 activities organized into 8 categories. Each activity has a specific intensity level and MET value.

2. **Enter Your Weight**: Input your body weight in kilograms (metric) or pounds (imperial). Weight is a key factor - heavier individuals burn more calories during the same activity.

3. **Set Duration**: Enter how long you performed the activity in minutes. Longer durations naturally result in more calories burned.

4. **Review Results**: The calculator displays total calories burned along with per-minute and per-hour rates, food equivalents, and weekly projections.

**The Formula:**
Calories Burned = MET × Body Weight (kg) × Duration (hours)

**Example:** A 70 kg person running at 10 km/h (MET = 9.8) for 30 minutes:
Calories = 9.8 × 70 × 0.5 = **343 calories**`,

    formulaDetails: `**Understanding the MET System:**

The Metabolic Equivalent of Task (MET) is a physiological measure expressing the energy cost of physical activities. It is defined as the ratio of metabolic rate during a specific activity to a reference metabolic rate at rest.

- **1 MET** = Energy expenditure at rest ≈ 3.5 mL O₂/kg/min ≈ 1 kcal/kg/hour
- **2 METs** = Activity costs twice the resting rate
- **10 METs** = Activity costs ten times the resting rate

**The Calorie Burn Formula:**

\`Calories = MET × Weight (kg) × Duration (hours)\`

This formula is derived from:
- 1 MET ≈ 1 kcal/kg/hour (by definition)
- For an activity with MET = M, energy cost = M kcal/kg/hour
- Total energy = M × body weight (kg) × time (hours)

**Example Calculations:**

**Example 1:** 80 kg person, cycling at 19-22 km/h (MET = 8.0), 45 minutes:
\`8.0 × 80 × 0.75 = 480 calories\`

**Example 2:** 60 kg person, yoga (MET = 2.5), 60 minutes:
\`2.5 × 60 × 1.0 = 150 calories\`

**Example 3:** 90 kg person, swimming vigorous laps (MET = 9.8), 30 minutes:
\`9.8 × 90 × 0.5 = 441 calories\`

**Important Notes:**
- MET values represent averages and can vary based on individual fitness levels
- The actual calories burned may vary ±15-20% from calculated values
- Factors like age, body composition, and environmental conditions affect actual expenditure
- After Burn Effect (EPOC): High-intensity activities continue burning calories after exercise ends`,

    interpretation: `**How to Interpret Your Results:**

Your calorie burn results provide several useful metrics:

**Total Calories Burned** - The estimated total energy expenditure for your session. Use this to plan your nutrition and track your fitness goals.

**Calories Per Minute** - Useful for comparing the efficiency of different activities. Higher values indicate more intense calorie-burning activities.

**Food Equivalents** - A visual representation of what your burned calories translate to in terms of common foods. This helps contextualize your effort.

**Weekly Projection** - Estimates your weekly calorie burn if you perform this activity 3 times per week. For weight loss, a weekly deficit of 3,500 calories equals approximately 0.45 kg (1 lb) of fat loss.

**Activity Intensity Levels:**
- **Light (MET < 4):** Easy activities like walking, stretching, yoga
- **Moderate (MET 4-7):** Brisk walking, cycling, dancing
- **Vigorous (MET 7-10):** Running, swimming laps, tennis
- **Very Vigorous (MET > 10):** Sprinting, jump rope, CrossFit`,

    limitations: `**Limitations of Calorie Burn Calculations:**

While the MET-based calculation method is scientifically validated and widely used, there are important limitations to consider:

**Individual Variation:** MET values represent averages from research populations. Your actual calorie burn may differ based on your fitness level, body composition, age, and genetics. Trained athletes may burn fewer calories for the same activity compared to beginners.

**Body Composition:** The formula uses total body weight, but muscle tissue burns more calories than fat tissue. Two people of the same weight may have different calorie burns if their body compositions differ significantly.

**Environmental Factors:** Temperature, altitude, humidity, and terrain can all affect energy expenditure. Running uphill burns significantly more calories than running on flat terrain, yet the MET value doesn't account for this.

**Exercise Technique:** Form and efficiency affect energy expenditure. Beginners often use more energy than experienced exercisers for the same activity due to less efficient movement patterns.

**After-Burn Effect (EPOC):** The calculator doesn't account for Excess Post-Exercise Oxygen Consumption. High-intensity activities can elevate metabolism for hours after exercise, adding 6-15% to total calorie expenditure.

**Heart Rate Variation:** Individual heart rate responses vary. The calculator doesn't use heart rate data, which would provide a more personalized estimate.

**Equipment and Conditions:** Using equipment (weighted vest, resistance) or varying conditions (swimming against current, cycling against wind) aren't reflected in standard MET values.`,

    healthBenefits: `**Health Benefits of Regular Physical Activity:**

Regular exercise provides numerous health benefits that extend far beyond calorie burning:

**Weight Management:** Consistent calorie expenditure through exercise, combined with proper nutrition, is the most effective strategy for achieving and maintaining a healthy weight. Even moderate activities like brisk walking can significantly impact long-term weight management.

**Cardiovascular Health:** Regular physical activity strengthens the heart muscle, improves blood circulation, lowers blood pressure, and reduces the risk of heart disease by 35-50%. The American Heart Association recommends at least 150 minutes of moderate-intensity activity per week.

**Mental Health:** Exercise releases endorphins, reduces cortisol levels, and has been shown to reduce symptoms of depression and anxiety by 20-30%. Even a single 30-minute session can improve mood and reduce stress.

**Bone and Joint Health:** Weight-bearing activities strengthen bones and reduce osteoporosis risk by 40-50%. Regular exercise also maintains joint flexibility and reduces arthritis symptoms.

**Metabolic Health:** Physical activity improves insulin sensitivity, reduces blood sugar levels, and lowers the risk of type 2 diabetes by 30-40%. It also improves cholesterol profiles.

**Sleep Quality:** Regular exercisers fall asleep faster, experience deeper sleep, and report 65% fewer sleep disturbances. However, intense exercise should be avoided 2-3 hours before bedtime.

**Longevity:** Studies consistently show that regular physical activity increases life expectancy by 3-7 years. Even moderate activity reduces all-cause mortality risk by 20-30%.

**Cognitive Function:** Exercise promotes neuroplasticity, improves memory, and reduces the risk of cognitive decline and dementia by 20-30%. It enhances focus and productivity in daily life.`,

    improvementTips: `**Tips to Maximize Your Calorie Burn:**

**1. Incorporate HIIT Training:** High-Intensity Interval Training alternates between intense bursts and recovery periods. HIIT can burn 25-30% more calories than traditional steady-state cardio in the same time frame, plus it creates a significant after-burn effect (EPOC).

**2. Add Strength Training:** Building muscle increases your Basal Metabolic Rate (BMR). Each pound of muscle burns approximately 6 calories per day at rest, compared to 2 calories for fat. Combine cardio with resistance training for optimal results.

**3. Try Compound Movements:** Exercises that engage multiple muscle groups (squats, deadlifts, burpees, swimming) burn more calories than isolation exercises. Full-body workouts maximize caloric expenditure.

**4. Progressive Overload:** Gradually increase intensity, duration, or frequency of your workouts. As your fitness improves, your body becomes more efficient, requiring greater challenges to maintain the same calorie burn.

**5. Stay Hydrated:** Proper hydration improves exercise performance by 10-20%. Dehydration reduces your ability to sustain intensity, leading to fewer calories burned. Drink 500 mL of water 2 hours before exercise.

**6. Exercise in the Morning:** Morning exercisers tend to be more consistent and may benefit from elevated metabolism throughout the day. Fasted morning cardio may increase fat oxidation by 20%.

**7. Use the 80/20 Rule:** Spend 80% of your training time at lower intensities and 20% at high intensity. This approach prevents burnout, reduces injury risk, and optimizes long-term calorie burn.

**8. Vary Your Activities:** Cross-training prevents plateaus and works different muscle groups. Your body adapts to repeated activities, burning fewer calories over time. Mixing activities keeps your body challenged.`,

    medicalDisclaimer: `**Medical Disclaimer:** This calculator provides estimates based on average metabolic data from the Compendium of Physical Activities. Individual results may vary based on fitness level, body composition, genetics, and environmental factors. The calorie estimates should not be used as the sole basis for medical or dietary decisions. Always consult with a healthcare provider or certified fitness professional before starting a new exercise program, especially if you have pre-existing health conditions, are pregnant, or have been sedentary for an extended period. If you experience chest pain, dizziness, or unusual discomfort during exercise, stop immediately and seek medical attention.`,

    references: [
      'Ainsworth BE, et al. "Compendium of Physical Activities: a second update of codes and MET values." Medicine and Science in Sports and Exercise. 2011;43(8):1575-1581.',
      'Jetté M, Sidney K, Blümchen G. "Metabolic equivalents (METS) in exercise testing, exercise prescription, and evaluation of functional capacity." Clinical Cardiology. 1990;13(8):555-565.',
      'Hills AP, Mokhtar N, Byrne NM. "Assessment of physical activity and energy expenditure: an overview of objective measures." Frontiers in Nutrition. 2014;1:5.',
      'Westerterp KR. "Physical activity and physical activity induced energy expenditure in humans: measurement, determinants, and effects." Frontiers in Physiology. 2013;4:90.',
      'World Health Organization. "Global Recommendations on Physical Activity for Health." WHO, 2010.',
      'American College of Sports Medicine. "ACSM Guidelines for Exercise Testing and Prescription." 11th Edition, 2021.',
      'Boutcher SH. "High-Intensity Intermittent Exercise and Fat Loss." Journal of Obesity. 2011;2011:868305.',
    ],

    tips: [
      'Start with moderate activities and gradually increase intensity to prevent injury and build endurance.',
      'Combine cardio exercises with strength training for maximum calorie burn and muscle preservation.',
      'Track your activities consistently to identify patterns and optimize your exercise routine.',
      'Focus on activities you enjoy - consistency matters more than choosing the highest-calorie activity.',
      'Consider exercising with a partner or group to increase motivation and accountability.',
      'Warm up for 5-10 minutes before intense exercise and cool down afterwards to prevent injury.',
      'Remember that every movement counts - even daily activities like cleaning and gardening contribute to your total calorie burn.',
      'Use the food equivalents as motivation, but avoid using exercise as punishment for eating.',
    ],

    faqs: [
      {
        question: 'How accurate is the calories burned calculator?',
        answer: 'The calculator uses MET (Metabolic Equivalent of Task) values from the Compendium of Physical Activities, which is the gold standard for estimating exercise energy expenditure. However, individual results may vary by ±15-20% based on factors like fitness level, body composition, age, and exercise technique. For more precise measurements, heart rate monitors or indirect calorimetry would be needed.',
      },
      {
        question: 'Does weight affect how many calories I burn?',
        answer: 'Yes, body weight is one of the most significant factors in calorie expenditure. Heavier individuals burn more calories performing the same activity because more energy is required to move a larger mass. For example, a 90 kg person burns approximately 29% more calories running than a 70 kg person at the same pace and duration.',
      },
      {
        question: 'What is the best exercise for burning calories?',
        answer: 'Activities with the highest MET values burn the most calories per unit of time. Running at high speeds (MET 14.5), swimming butterfly (MET 13.8), jump rope (MET 12.3), CrossFit/HIIT (MET 12.0), and cycling at racing speed (MET 12.0) are among the highest calorie-burning activities. However, the best exercise is one you can sustain consistently - a moderate activity performed regularly is more effective than an intense activity done rarely.',
      },
      {
        question: 'Do I continue burning calories after exercise?',
        answer: 'Yes! This is called Excess Post-Exercise Oxygen Consumption (EPOC) or the "afterburn effect." After vigorous exercise, your metabolism remains elevated for several hours as your body recovers. High-intensity activities can increase post-exercise calorie burn by 6-15% of the exercise calories. This effect is most pronounced after HIIT, heavy weight training, and vigorous endurance exercise.',
      },
      {
        question: 'How many calories should I burn per day through exercise?',
        answer: 'The WHO recommends at least 150-300 minutes of moderate-intensity or 75-150 minutes of vigorous-intensity aerobic activity per week. For weight loss, creating a daily caloric deficit of 500-750 calories (through both diet and exercise) is considered safe and effective, leading to approximately 0.5-0.75 kg of weight loss per week. The ideal amount depends on your goals, fitness level, and overall health.',
      },
      {
        question: 'Why do some activities have different MET values than I expected?',
        answer: 'MET values are based on research measuring oxygen consumption during activities. Some activities that "feel" harder may have lower MET values because perceived exertion includes factors like psychological stress, unfamiliarity, and discomfort that do not directly correspond to metabolic cost. Conversely, some rhythmic activities efficiently use large muscle groups, resulting in high MET values despite feeling manageable.',
      },
      {
        question: 'Does muscle mass affect calorie burning during exercise?',
        answer: 'Indirectly, yes. People with more muscle mass tend to have higher metabolic rates both at rest and during exercise. Muscle tissue is more metabolically active than fat tissue, requiring more energy to maintain. Additionally, muscular individuals often generate more force during activities, potentially burning more calories. However, the standard MET formula uses total body weight rather than body composition.',
      },
      {
        question: 'Is it better to exercise longer at low intensity or shorter at high intensity?',
        answer: 'Both approaches have merits. Longer, low-intensity exercise (like walking for 60 minutes) is sustainable, easy on joints, and effective for overall health. Shorter, high-intensity exercise (like 20 minutes of HIIT) burns more calories per minute, creates a greater afterburn effect, and improves cardiovascular fitness more rapidly. The 80/20 approach (80% low-moderate, 20% high intensity) is recommended by most fitness professionals for optimal results.',
      },
    ],
  },
  tr: {
    whatIs: `Yakılan Kalori Hesaplayıcı, çeşitli fiziksel aktiviteler sırasında ne kadar kalori yaktığınızı tahmin eder. Fiziksel Aktiviteler Kompendiyumu tarafından geliştirilen, bilimsel olarak doğrulanmış bir yöntem olan **Metabolik Eşdeğer (MET)** sistemini kullanır. Her aktivitenin, dinlenme metabolizmasına göre enerji maliyetini temsil eden belirli bir MET değeri vardır.

Egzersiz sırasında kaç kalori yaktığınızı anlamak, kilo yönetimi, fitness planlaması ve genel sağlık optimizasyonu için çok önemlidir. Kilo vermek, mevcut kilonuzu korumak veya atletik performansınızı beslemek istiyorsanız, kalori harcamanızı bilmek beslenme ve egzersiz hakkında bilinçli kararlar vermenize yardımcı olur.

Hesaplayıcı, koşu, bisiklet, yüzme, spor salonu antrenmanları, sporlar, kardiyo, açık hava aktiviteleri ve günlük görevler dahil 8 kategoride **60'tan fazla aktiviteyi** kapsar. Her aktiviteye Fiziksel Aktiviteler Kompendiyumu'ndan bilimsel olarak ölçülmüş bir MET değeri atanmıştır ve kalori tahminlerinizde doğruluk sağlar.`,

    howToCalculate: `**Yakılan Kalori Nasıl Hesaplanır:**

1. **Aktivitenizi Seçin**: 8 kategoride düzenlenmiş 60'tan fazla aktivite arasından seçim yapın. Her aktivitenin belirli bir yoğunluk seviyesi ve MET değeri vardır.

2. **Kilonuzu Girin**: Vücut ağırlığınızı kilogram (metrik) veya pound (İngiliz) olarak girin. Kilo önemli bir faktördür - daha ağır bireyler aynı aktivite sırasında daha fazla kalori yakar.

3. **Süreyi Ayarlayın**: Aktiviteyi dakika cinsinden ne kadar süre yaptığınızı girin. Daha uzun süreler doğal olarak daha fazla kalori yakmaya neden olur.

4. **Sonuçları İnceleyin**: Hesaplayıcı, dakika ve saat başına oranlar, yiyecek eşdeğerleri ve haftalık projeksiyonlarla birlikte toplam yakılan kaloriyi görüntüler.

**Formül:**
Yakılan Kalori = MET × Vücut Ağırlığı (kg) × Süre (saat)

**Örnek:** 70 kg bir kişi 10 km/s hızda koşarken (MET = 9,8) 30 dakika:
Kalori = 9,8 × 70 × 0,5 = **343 kalori**`,

    formulaDetails: `**MET Sistemini Anlamak:**

Metabolik Eşdeğer (MET), fiziksel aktivitelerin enerji maliyetini ifade eden fizyolojik bir ölçüdür. Belirli bir aktivite sırasındaki metabolik hızın dinlenme durumundaki referans metabolik hıza oranı olarak tanımlanır.

- **1 MET** = Dinlenmedeki enerji harcaması ≈ 3,5 mL O₂/kg/dak ≈ 1 kcal/kg/saat
- **2 MET** = Aktivite, dinlenme hızının iki katına mal olur
- **10 MET** = Aktivite, dinlenme hızının on katına mal olur

**Kalori Yakma Formülü:**

\`Kalori = MET × Ağırlık (kg) × Süre (saat)\`

Bu formül şunlardan türetilmiştir:
- 1 MET ≈ 1 kcal/kg/saat (tanım gereği)
- MET = M olan bir aktivite için enerji maliyeti = M kcal/kg/saat
- Toplam enerji = M × vücut ağırlığı (kg) × zaman (saat)

**Örnek Hesaplamalar:**

**Örnek 1:** 80 kg kişi, 19-22 km/s bisiklet (MET = 8,0), 45 dakika:
\`8,0 × 80 × 0,75 = 480 kalori\`

**Örnek 2:** 60 kg kişi, yoga (MET = 2,5), 60 dakika:
\`2,5 × 60 × 1,0 = 150 kalori\`

**Örnek 3:** 90 kg kişi, yoğun yüzme (MET = 9,8), 30 dakika:
\`9,8 × 90 × 0,5 = 441 kalori\`

**Önemli Notlar:**
- MET değerleri ortalamaları temsil eder ve bireysel fitness seviyelerine göre değişebilir
- Gerçek yakılan kalori, hesaplanan değerlerden ±%15-20 farklılık gösterebilir
- Yaş, vücut kompozisyonu ve çevre koşulları gerçek harcamayı etkiler
- Sonraki Yanma Etkisi (EPOC): Yüksek yoğunluklu aktiviteler egzersiz sona erdikten sonra da kalori yakmaya devam eder`,

    interpretation: `**Sonuçlarınızı Nasıl Yorumlarsınız:**

Kalori yakma sonuçlarınız birkaç faydalı metrik sunar:

**Toplam Yakılan Kalori** - Seansınız için tahmini toplam enerji harcaması. Bunu beslenmenizi planlamak ve fitness hedeflerinizi takip etmek için kullanın.

**Dakika Başına Kalori** - Farklı aktivitelerin verimliliğini karşılaştırmak için kullanışlıdır. Daha yüksek değerler daha yoğun kalori yakma aktivitelerini gösterir.

**Yiyecek Eşdeğerleri** - Yakılan kalorilerinizin yaygın yiyecekler cinsinden ne anlama geldiğinin görsel bir temsili. Bu, çabanızı bağlamlandırmaya yardımcı olur.

**Haftalık Projeksiyon** - Bu aktiviteyi haftada 3 kez yaparsanız haftalık kalori yakımınızı tahmin eder. Kilo kaybı için haftalık 3.500 kalorilik bir açık, yaklaşık 0,45 kg yağ kaybına eşittir.

**Aktivite Yoğunluk Seviyeleri:**
- **Hafif (MET < 4):** Yürüyüş, esneme, yoga gibi kolay aktiviteler
- **Orta (MET 4-7):** Tempolu yürüyüş, bisiklet, dans
- **Yoğun (MET 7-10):** Koşu, yüzme turları, tenis
- **Çok Yoğun (MET > 10):** Sprint, ip atlama, CrossFit`,

    limitations: `**Kalori Yakma Hesaplamalarının Sınırlamaları:**

MET tabanlı hesaplama yöntemi bilimsel olarak doğrulanmış ve yaygın olarak kullanılsa da, dikkate alınması gereken önemli sınırlamalar vardır:

**Bireysel Farklılık:** MET değerleri araştırma popülasyonlarından elde edilen ortalamaları temsil eder. Gerçek kalori yakımınız fitness seviyenize, vücut kompozisyonunuza, yaşınıza ve genetiğinize göre farklılık gösterebilir. Eğitimli sporcular, aynı aktivite için yeni başlayanlara kıyasla daha az kalori yakabilir.

**Vücut Kompozisyonu:** Formül toplam vücut ağırlığını kullanır, ancak kas dokusu yağ dokusundan daha fazla kalori yakar. Aynı ağırlıkta iki kişi, vücut kompozisyonları önemli ölçüde farklıysa farklı kalori yakımlarına sahip olabilir.

**Çevresel Faktörler:** Sıcaklık, yükseklik, nem ve arazi hepsi enerji harcamasını etkileyebilir. Yokuş yukarı koşmak düz zeminde koşmaktan önemli ölçüde daha fazla kalori yakar, ancak MET değeri bunu hesaba katmaz.

**Egzersiz Tekniği:** Form ve verimlilik enerji harcamasını etkiler. Yeni başlayanlar, daha az verimli hareket kalıpları nedeniyle aynı aktivite için deneyimli egzersiz yapanlardan genellikle daha fazla enerji kullanır.

**Sonraki Yanma Etkisi (EPOC):** Hesaplayıcı, Egzersiz Sonrası Aşırı Oksijen Tüketimini hesaba katmaz. Yüksek yoğunluklu aktiviteler, egzersizden saatlerce sonra metabolizmayı yükselterek toplam kalori harcamasına %6-15 ekleyebilir.

**Kalp Atış Hızı Farklılığı:** Bireysel kalp atış hızı tepkileri değişir. Hesaplayıcı, daha kişiselleştirilmiş bir tahmin sağlayacak kalp atış hızı verilerini kullanmaz.

**Ekipman ve Koşullar:** Ekipman kullanımı (ağırlıklı yelek, direnç) veya değişen koşullar (akıntıya karşı yüzme, rüzgara karşı bisiklet) standart MET değerlerine yansıtılmaz.`,

    healthBenefits: `**Düzenli Fiziksel Aktivitenin Sağlık Faydaları:**

Düzenli egzersiz, kalori yakmayın çok ötesine geçen sayısız sağlık faydası sağlar:

**Kilo Yönetimi:** Egzersiz yoluyla tutarlı kalori harcaması, uygun beslenmeyle birleştirildiğinde, sağlıklı bir kilo elde etmek ve sürdürmek için en etkili stratejidir. Tempolu yürüyüş gibi ılımlı aktiviteler bile uzun vadeli kilo yönetimini önemli ölçüde etkileyebilir.

**Kardiyovasküler Sağlık:** Düzenli fiziksel aktivite kalp kasını güçlendirir, kan dolaşımını iyileştirir, kan basıncını düşürür ve kalp hastalığı riskini %35-50 azaltır. Amerikan Kalp Derneği haftada en az 150 dakika orta yoğunlukta aktivite önermektedir.

**Ruh Sağlığı:** Egzersiz endorfin salınımını artırır, kortizol seviyelerini düşürür ve depresyon ile anksiyete semptomlarını %20-30 oranında azalttığı gösterilmiştir. Tek bir 30 dakikalık seans bile ruh halini iyileştirebilir ve stresi azaltabilir.

**Kemik ve Eklem Sağlığı:** Ağırlık taşıyan aktiviteler kemikleri güçlendirir ve osteoporoz riskini %40-50 azaltır. Düzenli egzersiz ayrıca eklem esnekliğini korur ve artrit semptomlarını azaltır.

**Metabolik Sağlık:** Fiziksel aktivite insülin duyarlılığını iyileştirir, kan şekeri seviyelerini düşürür ve tip 2 diyabet riskini %30-40 azaltır. Ayrıca kolesterol profillerini iyileştirir.

**Uyku Kalitesi:** Düzenli egzersiz yapanlar daha hızlı uyur, daha derin uyku deneyimler ve %65 daha az uyku bozukluğu bildirirler. Ancak yoğun egzersiz yatmadan 2-3 saat önce yapılmamalıdır.

**Uzun Ömür:** Çalışmalar tutarlı olarak düzenli fiziksel aktivitenin yaşam beklentisini 3-7 yıl artırdığını göstermektedir. Ilımlı aktivite bile tüm nedenlere bağlı ölüm riskini %20-30 azaltır.

**Bilişsel İşlev:** Egzersiz nöroplastisiteyi destekler, hafızayı iyileştirir ve bilişsel gerileme ile bunama riskini %20-30 azaltır. Günlük yaşamda odaklanma ve üretkenliği artırır.`,

    improvementTips: `**Kalori Yakımınızı En Üst Düzeye Çıkarmak İçin İpuçları:**

**1. HIIT Antrenmanı Ekleyin:** Yüksek Yoğunluklu Aralıklı Antrenman, yoğun patlamalar ile toparlanma dönemleri arasında geçiş yapar. HIIT, geleneksel sabit tempolu kardiyodan aynı zaman diliminde %25-30 daha fazla kalori yakabilir, ayrıca önemli bir sonraki yanma etkisi (EPOC) yaratır.

**2. Kuvvet Antrenmanı Ekleyin:** Kas oluşturmak Bazal Metabolizma Hızınızı (BMR) artırır. Her pound kas dinlenme halinde günde yaklaşık 6 kalori yakarken, yağ 2 kalori yakar. Optimum sonuçlar için kardiyoyu direnç antrenmanıyla birleştirin.

**3. Bileşik Hareketler Deneyin:** Birden fazla kas grubunu çalıştıran egzersizler (squat, deadlift, burpee, yüzme) izolasyon egzersizlerinden daha fazla kalori yakar. Tam vücut antrenmanları kalori harcamasını en üst düzeye çıkarır.

**4. Kademeli Yükleme:** Antrenmanlarınızın yoğunluğunu, süresini veya sıklığını kademeli olarak artırın. Fitness seviyeniz arttıkça vücudunuz daha verimli hale gelir ve aynı kalori yakımını sürdürmek için daha büyük zorluklar gerektirir.

**5. Hidrasyonda Kalın:** Uygun hidrasyon egzersiz performansını %10-20 iyileştirir. Dehidrasyon, yoğunluğu sürdürme yeteneğinizi azaltır ve daha az kalori yakılmasına yol açar. Egzersizden 2 saat önce 500 mL su için.

**6. Sabah Egzersizi Yapın:** Sabah egzersiz yapanlar daha tutarlı olma eğilimindedir ve gün boyunca yükselen metabolizmadan faydalanabilirler. Aç karna sabah kardiyosu yağ oksidasyonunu %20 artırabilir.

**7. 80/20 Kuralını Kullanın:** Antrenman zamanınızın %80'ini düşük yoğunluklarda, %20'sini yüksek yoğunlukta geçirin. Bu yaklaşım tükenmişliği önler, yaralanma riskini azaltır ve uzun vadeli kalori yakımını optimize eder.

**8. Aktivitelerinizi Çeşitlendirin:** Çapraz antrenman platoları önler ve farklı kas gruplarını çalıştırır. Vücudunuz tekrarlanan aktivitelere adapte olur ve zamanla daha az kalori yakar. Aktiviteleri karıştırmak vücudunuzu zorlayan halde tutar.`,

    medicalDisclaimer: `**Tıbbi Uyarı:** Bu hesaplayıcı, Fiziksel Aktiviteler Kompendiyumu'ndan alınan ortalama metabolik verilere dayalı tahminler sunar. Bireysel sonuçlar fitness seviyesi, vücut kompozisyonu, genetik ve çevresel faktörlere göre değişebilir. Kalori tahminleri tıbbi veya diyet kararları için tek temel olarak kullanılmamalıdır. Yeni bir egzersiz programına başlamadan önce, özellikle mevcut sağlık sorunlarınız varsa, hamileyseniz veya uzun süre hareketsiz kaldıysanız, her zaman bir sağlık uzmanına veya sertifikalı fitness profesyoneline danışın. Egzersiz sırasında göğüs ağrısı, baş dönmesi veya olağandışı rahatsızlık yaşarsanız, derhal durun ve tıbbi yardım alın.`,

    references: [
      'Ainsworth BE, et al. "Compendium of Physical Activities: a second update of codes and MET values." Medicine and Science in Sports and Exercise. 2011;43(8):1575-1581.',
      'Jetté M, Sidney K, Blümchen G. "Metabolic equivalents (METS) in exercise testing, exercise prescription, and evaluation of functional capacity." Clinical Cardiology. 1990;13(8):555-565.',
      'Hills AP, Mokhtar N, Byrne NM. "Assessment of physical activity and energy expenditure: an overview of objective measures." Frontiers in Nutrition. 2014;1:5.',
      'Westerterp KR. "Physical activity and physical activity induced energy expenditure in humans: measurement, determinants, and effects." Frontiers in Physiology. 2013;4:90.',
      'World Health Organization. "Global Recommendations on Physical Activity for Health." WHO, 2010.',
      'American College of Sports Medicine. "ACSM Guidelines for Exercise Testing and Prescription." 11th Edition, 2021.',
      'Boutcher SH. "High-Intensity Intermittent Exercise and Fat Loss." Journal of Obesity. 2011;2011:868305.',
    ],

    tips: [
      'Yaralanmayı önlemek ve dayanıklılık kazanmak için orta düzey aktivitelerle başlayın ve kademeli olarak yoğunluğu artırın.',
      'Maksimum kalori yakımı ve kas koruması için kardiyo egzersizlerini kuvvet antrenmanıyla birleştirin.',
      'Kalıpları belirlemek ve egzersiz rutininizi optimize etmek için aktivitelerinizi tutarlı bir şekilde takip edin.',
      'Keyif aldığınız aktivitelere odaklanın - tutarlılık en yüksek kalorili aktiviteyi seçmekten daha önemlidir.',
      'Motivasyonu ve hesap verebilirliği artırmak için bir partner veya grupla egzersiz yapmayı düşünün.',
      'Yaralanmayı önlemek için yoğun egzersizden önce 5-10 dakika ısının ve sonrasında soğuyun.',
      'Her hareketin sayıldığını unutmayın - temizlik ve bahçe işleri gibi günlük aktiviteler bile toplam kalori yakımınıza katkıda bulunur.',
      'Yiyecek eşdeğerlerini motivasyon olarak kullanın, ancak egzersizi yemek yemenin cezası olarak kullanmaktan kaçının.',
    ],

    faqs: [
      {
        question: 'Yakılan kalori hesaplayıcısı ne kadar doğrudur?',
        answer: 'Hesaplayıcı, egzersiz enerji harcamasını tahmin etmenin altın standardı olan Fiziksel Aktiviteler Kompendiyumu\'ndan MET (Metabolik Eşdeğer) değerlerini kullanır. Ancak bireysel sonuçlar, fitness seviyesi, vücut kompozisyonu, yaş ve egzersiz tekniği gibi faktörlere bağlı olarak ±%15-20 değişebilir. Daha hassas ölçümler için kalp atış hızı monitörleri veya indirekt kalorimetri gerekli olacaktır.',
      },
      {
        question: 'Kilo ne kadar kalori yaktığımı etkiler mi?',
        answer: 'Evet, vücut ağırlığı kalori harcamasında en önemli faktörlerden biridir. Daha ağır bireyler, daha büyük bir kütleyi hareket ettirmek için daha fazla enerji gerektiğinden aynı aktiviteyi yaparken daha fazla kalori yakar. Örneğin, 90 kg bir kişi aynı hız ve sürede koşarken 70 kg bir kişiden yaklaşık %29 daha fazla kalori yakar.',
      },
      {
        question: 'Kalori yakmak için en iyi egzersiz nedir?',
        answer: 'En yüksek MET değerlerine sahip aktiviteler, birim zamanda en fazla kaloriyi yakar. Yüksek hızda koşu (MET 14,5), kelebek yüzme (MET 13,8), ip atlama (MET 12,3), CrossFit/HIIT (MET 12,0) ve yarış hızında bisiklet (MET 12,0) en yüksek kalori yakıcı aktiviteler arasındadır. Ancak en iyi egzersiz sürdürebileceğiniz egzersizdir - düzenli olarak yapılan ılımlı bir aktivite, nadiren yapılan yoğun bir aktiviteden daha etkilidir.',
      },
      {
        question: 'Egzersizden sonra kalori yakmaya devam eder miyim?',
        answer: 'Evet! Buna Egzersiz Sonrası Aşırı Oksijen Tüketimi (EPOC) veya "sonraki yanma etkisi" denir. Yoğun egzersizden sonra, vücudunuz toparlanırken metabolizmanız birkaç saat boyunca yüksek kalır. Yüksek yoğunluklu aktiviteler egzersiz sonrası kalori yakımını egzersiz kalorilerinin %6-15\'i kadar artırabilir. Bu etki HIIT, ağır ağırlık antrenmanı ve yoğun dayanıklılık egzersizinden sonra en belirgindir.',
      },
      {
        question: 'Egzersiz yoluyla günde kaç kalori yakmalıyım?',
        answer: 'DSÖ haftada en az 150-300 dakika orta yoğunlukta veya 75-150 dakika yoğun aerobik aktivite önermektedir. Kilo kaybı için günlük 500-750 kalorilik bir açık (hem diyet hem egzersiz yoluyla) güvenli ve etkili kabul edilir ve haftada yaklaşık 0,5-0,75 kg kilo kaybına yol açar. İdeal miktar hedeflerinize, fitness seviyenize ve genel sağlığınıza bağlıdır.',
      },
      {
        question: 'Bazı aktivitelerin neden beklediğimden farklı MET değerleri var?',
        answer: 'MET değerleri, aktiviteler sırasında oksijen tüketimini ölçen araştırmalara dayanır. "Daha zor" hissettiren bazı aktivitelerin daha düşük MET değerleri olabilir çünkü algılanan zorluk, metabolik maliyetle doğrudan ilişkili olmayan psikolojik stres, aşinalık eksikliği ve rahatsızlık gibi faktörleri içerir. Tersine, bazı ritmik aktiviteler büyük kas gruplarını verimli bir şekilde kullanarak, yönetilebilir hissedilmesine rağmen yüksek MET değerleriyle sonuçlanır.',
      },
      {
        question: 'Kas kütlesi egzersiz sırasında kalori yakmayı etkiler mi?',
        answer: 'Dolaylı olarak evet. Daha fazla kas kütlesine sahip kişiler hem dinlenme hem de egzersiz sırasında daha yüksek metabolik hızlara sahip olma eğilimindedir. Kas dokusu yağ dokusundan metabolik olarak daha aktiftir ve sürdürmek için daha fazla enerji gerektirir. Ayrıca, kaslı bireyler aktiviteler sırasında genellikle daha fazla güç üretir ve potansiyel olarak daha fazla kalori yakar. Ancak standart MET formülü vücut kompozisyonu yerine toplam vücut ağırlığını kullanır.',
      },
      {
        question: 'Düşük yoğunlukta daha uzun mu yoksa yüksek yoğunlukta daha kısa mı egzersiz yapmak daha iyidir?',
        answer: 'Her iki yaklaşımın da avantajları vardır. Daha uzun, düşük yoğunluklu egzersiz (60 dakika yürüyüş gibi) sürdürülebilir, eklemlere nazik ve genel sağlık için etkilidir. Daha kısa, yüksek yoğunluklu egzersiz (20 dakika HIIT gibi) dakika başına daha fazla kalori yakar, daha büyük bir sonraki yanma etkisi yaratır ve kardiyovasküler kondisyonu daha hızlı iyileştirir. %80/20 yaklaşımı (%80 düşük-orta, %20 yüksek yoğunluk) optimum sonuçlar için çoğu fitness uzmanı tarafından önerilmektedir.',
      },
    ],
  },
};
