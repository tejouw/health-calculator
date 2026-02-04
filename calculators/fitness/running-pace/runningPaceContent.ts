import { CalculatorContent } from '@/types/calculator';

export const runningPaceContent: CalculatorContent = {
  en: {
    whatIs:
      'Running pace is the time it takes to cover a specific distance, typically measured in minutes per mile or minutes per kilometer. It is a fundamental metric for runners of all levels, from beginners to elite athletes, providing a standardized way to measure running speed and performance. Unlike speed, which is measured in distance per unit time (like mph or km/h), pace measures time per unit distance, making it more intuitive for tracking progress during training runs and races. Understanding your running pace helps you set realistic goals, structure training programs, maintain consistent effort levels, and avoid overtraining or undertraining. The concept of pace is central to effective run training because it directly relates to effort level and physiological stress on the body.',

    howToCalculate:
      'To calculate running pace, divide your total running time by the distance covered. For example, if you run 5 kilometers in 30 minutes, your pace is 30 ÷ 5 = 6 minutes per kilometer. In the imperial system, if you run 3 miles in 27 minutes, your pace is 27 ÷ 3 = 9 minutes per mile. Most runners track pace in the format MM:SS (minutes:seconds) per mile or kilometer. To convert between units, use the conversion factor: 1 kilometer = 0.621371 miles. A 6:00 min/km pace equals approximately 9:39 min/mile. Modern GPS running watches and smartphone apps automatically calculate pace in real-time, but understanding the manual calculation helps you plan training runs and interpret race results more effectively.',

    formulaDetails:
      'The basic pace formula is: Pace = Total Time ÷ Distance. Time should be expressed in minutes (with seconds converted to decimal), and distance in your preferred unit (km or miles). For split times during longer runs, the same formula applies to each segment. Speed can be calculated as the inverse of pace: Speed = Distance ÷ Time, typically expressed in km/h or mph. The relationship between pace and speed is reciprocal. Converting pace to speed: Speed (km/h) = 60 ÷ Pace (min/km). Converting speed to pace: Pace (min/km) = 60 ÷ Speed (km/h). For race time prediction, multiply your target pace by race distance. For example, to run a half marathon (21.1 km) at 6:00 min/km pace: 21.1 × 6 = 126.6 minutes = 2 hours 6 minutes 36 seconds. Understanding these calculations allows you to plan race strategies, set interval training targets, and adjust pace for different terrain and conditions.',

    categories: [
      {
        range: '8:00–12:00 min/km',
        label: 'Beginner',
        description:
          'Starting your running journey. Focus on building consistency and injury prevention rather than speed.',
        color: '#10B981',
      },
      {
        range: '5:30–8:00 min/km',
        label: 'Intermediate',
        description:
          'Developing runner building aerobic base. Balance endurance runs with occasional faster efforts.',
        color: '#3B82F6',
      },
      {
        range: '4:00–5:30 min/km',
        label: 'Advanced',
        description:
          'Experienced runner with a strong fitness base. Can sustain challenging paces and target race performance.',
        color: '#8B5CF6',
      },
      {
        range: '< 4:00 min/km',
        label: 'Elite',
        description:
          'Competitive-level performance requiring advanced training, high mileage, and peak physiological fitness.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'Running pace varies naturally by distance—your 5K pace is faster than your marathon pace because effort distribution differs. Easy runs should be at conversational pace (able to speak full sentences) which is typically 60-70% of max heart rate. Pace alone does not tell the full story; heart rate combined with pace reveals true fitness and effort. As fitness improves, the same heart rate yields a faster pace. Track pace trends over weeks and months rather than fixating on individual run times.',

    limitations:
      'Pace does not account for terrain—running uphill or on trails is significantly harder than flat road running at the same pace. Weather affects performance: heat, humidity, headwinds, and altitude all slow runners down. GPS accuracy for distance measurement varies, especially in urban canyons or under tree cover, which directly affects calculated pace. Treadmill pace does not account for wind resistance and forward momentum, making outdoor pace harder by comparison. Pace is relative to the individual—a 6:00 min/km run for a beginner is a very different physiological effort than the same pace for an elite runner.',

    healthRisks:
      'Running at paces too fast for your current fitness level increases injury risk: shin splints, stress fractures, plantar fasciitis, IT band syndrome, and joint inflammation are common. Overtraining syndrome—caused by insufficient recovery between hard efforts—manifests as persistent fatigue, declining performance, hormonal disruption, and increased illness susceptibility. Ignoring early warning signs like persistent soreness or sharp pain leads to chronic injuries that can sideline runners for months. Always incorporate recovery days and easy runs between hard sessions.',

    alternativeMeasures:
      'Heart rate monitoring provides effort level regardless of pace, speed, or terrain and is considered a more reliable training metric. GPS running watches (Garmin, Apple Watch, Polar) measure pace, distance, cadence, and heart rate simultaneously. VO2 max testing gives a precise measure of cardiovascular fitness and can predict running performance. Lactate threshold testing determines the exact pace at which your body shifts from aerobic to anaerobic metabolism—the key boundary for endurance training. Running power meters (like Stryd) measure actual effort output, similar to power in cycling, making them highly useful for training consistency.',

    demographicDifferences:
      'Age significantly affects running pace—cardiovascular fitness (VO2 max) declines approximately 1% per year after age 25, and most pace-based records include age-adjusted categories. Men average 10-15% faster than women at equivalent fitness levels due to greater oxygen-carrying capacity and muscle mass. Body weight directly impacts pace: lighter runners have a natural speed advantage. Height and leg length influence stride efficiency and cadence. Altitude reduces available oxygen, slowing pace by 2-3% for every 1,000 meters of elevation. Training experience is perhaps the most important factor—even genetically gifted runners need years of consistent training to reach their pace potential.',

    medicalDisclaimer:
      'This running pace calculator is for informational and training purposes only. Always consult with healthcare professionals before starting or intensifying any running program, especially if you have pre-existing health conditions, cardiovascular issues, joint problems, or are over 40 years old. Running at inappropriate paces can lead to injuries including stress fractures, tendonitis, muscle strains, and cardiovascular stress. Listen to your body and adjust pace based on how you feel, not just calculated numbers. If you experience chest pain, severe shortness of breath, dizziness, or unusual fatigue, stop exercising immediately and seek medical attention.',

    references: [
      'Daniels\' Running Formula by Jack Daniels, PhD - Scientific basis for pace-based training',
      'American College of Sports Medicine - Guidelines for Exercise Testing and Prescription',
      'Running Science by Owen Anderson - Physiological principles of pace and performance',
      'Pfitzinger P, Douglas S. Advanced Marathoning. 2nd ed. Human Kinetics. 2009.',
      'Runner\'s World magazine - Pace charts and training guides',
      'Journal of Applied Physiology - Studies on running economy and pace',
    ],

    tips: [
      'Use a GPS watch or smartphone app for accurate real-time pace tracking during runs',
      'Practice running at different paces to develop better pace awareness and control',
      'Slower paces (conversational) should make up 80% of your training volume',
      'Account for terrain - hills, trails, and wind significantly affect pace',
      'Negative splits (running the second half faster) often lead to better race results',
      'Pace varies by temperature - expect to slow down in hot/humid conditions',
      'Don\'t compare your pace to others - focus on your own progress and goals',
      'Recovery runs should be significantly slower than your easy pace (1-2 min/km slower)',
    ],

    faqs: [
      {
        question: 'What is a good running pace for beginners?',
        answer:
          'For beginner runners, a comfortable easy pace is typically 7-9 minutes per kilometer (11-14 minutes per mile) or slower. The key is to run at a conversational pace where you can speak in complete sentences without gasping for breath. This typically corresponds to 60-70% of maximum heart rate. Don\'t worry about speed initially - focus on building endurance and consistency. As fitness improves over weeks and months, your comfortable pace will naturally get faster.',
      },
      {
        question: 'How do I calculate my target race pace?',
        answer:
          'To determine race pace, use recent race results or time trials. A common approach is the "VDOT" method: run a 5K at maximum effort, then use pace calculators to predict performances at other distances. For marathons, many coaches recommend running at a pace 15-30 seconds per mile slower than your half marathon race pace. Conservative pacing (starting slower than goal pace) typically produces better results than aggressive starts. Use training runs to practice goal pace and adjust based on how the effort feels.',
      },
      {
        question: 'Why does my pace vary so much between runs?',
        answer:
          'Pace variability is normal and affected by many factors: terrain (hills slow pace), weather (heat/humidity reduces pace by 20-30 seconds per mile), fatigue (previous hard workouts), hydration status, sleep quality, stress levels, altitude, wind resistance, and shoe choice. GPS accuracy can also vary, especially in areas with poor satellite coverage or dense tree canopy. Focus on effort level (perceived exertion and heart rate) rather than obsessing over exact pace on every run. Consistency in effort, not pace, is key for training adaptation.',
      },
      {
        question: 'What\'s the difference between pace and speed?',
        answer:
          'Pace measures time per unit distance (min/km or min/mile), while speed measures distance per unit time (km/h or mph). Pace is more intuitive for runners because it directly relates to race finish times and training intervals. For example, a 5:00 min/km pace means each kilometer takes 5 minutes. Speed would express this as 12 km/h. Cyclists and swimmers typically use speed, while runners use pace. Both measure the same thing from different perspectives - they\'re mathematical inverses of each other.',
      },
      {
        question: 'How much does temperature affect running pace?',
        answer:
          'Heat significantly impacts running pace. Research shows that for every 5°F (2.8°C) above 60°F (15.5°C), runners slow by approximately 20-30 seconds per mile due to increased cardiovascular stress and thermoregulation demands. At temperatures above 80°F (27°C) with high humidity, pace can slow by 1-2 minutes per mile compared to optimal conditions (50-60°F). Acclimatization helps but takes 10-14 days. In hot weather, adjust expectations, slow your pace, increase hydration, and prioritize effort/heart rate over pace targets.',
      },
    ],
  },
  tr: {
    whatIs:
      'Koşu temposu, belirli bir mesafeyi kat etmek için geçen süreyi ifade eder ve genellikle mil başına dakika veya kilometre başına dakika olarak ölçülür. Başlangıçtan elit sporculara kadar her seviyedeki koşucu için temel bir metriktir ve koşu hızını ve performansını ölçmek için standartlaştırılmış bir yol sağlar. Birim zaman başına mesafe (mph veya km/s gibi) ile ölçülen hızın aksine, tempo birim mesafe başına zamanı ölçer ve bu da antrenman koşuları ve yarışlar sırasında ilerlemeyi takip etmek için daha sezgisel hale getirir. Koşu temponuzu anlamak, gerçekçi hedefler belirlemenize, antrenman programlarını yapılandırmanıza, tutarlı çaba seviyelerini korumanıza ve aşırı veya yetersiz antrenman yapmaktan kaçınmanıza yardımcı olur.',

    howToCalculate:
      'Koşu temposunu hesaplamak için toplam koşu süresini kat edilen mesafeye bölün. Örneğin, 5 kilometreyi 30 dakikada koşarsanız, temponuz 30 ÷ 5 = kilometre başına 6 dakikadır. İngiliz sisteminde, 3 mili 27 dakikada koşarsanız, temponuz 27 ÷ 3 = mil başına 9 dakikadır. Çoğu koşucu tempoyu mil veya kilometre başına MM:SS (dakika:saniye) formatında takip eder. Birimler arasında dönüşüm yapmak için dönüşüm faktörünü kullanın: 1 kilometre = 0.621371 mil. 6:00 dk/km tempo yaklaşık olarak 9:39 dk/mil\'e eşittir.',

    formulaDetails:
      'Temel tempo formülü: Tempo = Toplam Süre ÷ Mesafe. Süre dakika cinsinden (saniyeler ondalığa dönüştürülmüş) ve mesafe tercih ettiğiniz birimde (km veya mil) ifade edilmelidir. Daha uzun koşularda bölme süreleri için aynı formül her segment için geçerlidir. Hız, temponun tersi olarak hesaplanabilir: Hız = Mesafe ÷ Süre, genellikle km/s veya mph ile ifade edilir. Tempo ve hız arasındaki ilişki karşılıklıdır. Tempodan hıza dönüştürme: Hız (km/s) = 60 ÷ Tempo (dk/km). Hızdan tempoya dönüştürme: Tempo (dk/km) = 60 ÷ Hız (km/s).',

    categories: [
      {
        range: '8:00–12:00 dk/km',
        label: 'Yeni Başlayan',
        description:
          'Koşu yolculuğunuza yeni başlıyorsunuz. Hız yerine tutarlılık oluşturma ve yaralanma önlemeye odaklanın.',
        color: '#10B981',
      },
      {
        range: '5:30–8:00 dk/km',
        label: 'Orta Seviye',
        description:
          'Aerobik temel oluşturan gelişen bir koşucu. Dayanıklılık koşularını ara sıra daha hızlı çaba ile dengeleyin.',
        color: '#3B82F6',
      },
      {
        range: '4:00–5:30 dk/km',
        label: 'İleri Seviye',
        description:
          'Güçlü bir fitness temeline sahip deneyimli bir koşucu. Zorlu tempolarda sürdürülebilirlik ve yarış performansı hedefleme.',
        color: '#8B5CF6',
      },
      {
        range: '< 4:00 dk/km',
        label: 'Elit',
        description:
          'İleri antrenman, yüksek mesafe ve zirve fizyolojik fitness gerektiren rekabetçi düzeyde bir performans.',
        color: '#EF4444',
      },
    ],

    interpretation:
      'Koşu temposu mesafeye göre doğal olarak değişir; 5K temponuz maraton temponuzdan daha hızlıdır çünkü çaba dağılımı farklıdır. Kolay koşular, tam cümleler kurabildiğiniz konuşma temposunda yapılmalıdır ki bu genellikle maksimum kalp hızının yüzde 60-70\'ine karşılık gelir. Tempo tek başına tam resmi ortaya koymaz; kalp hızı ile tempo birlikte gerçek fitness ve çabayı ortaya çıkarır. Fitness geliştikçe aynı kalp hızı daha hızlı bir tempo verir. Bireysel koşu sürelerine takılmak yerine hafta ve aylar boyunca tempo eğilimlerini takip edin.',

    limitations:
      'Tempo, arazi koşullarını hesaba katmaz; aynı tempoda tepelerin üstünden veya antrenman yollarında koşmak düz yolda koşmaktan çok daha zordur. Hava durumu performansı etkiler: sıcaklık, yüksek nem, rüzgar ve irtifa koşucuları yavaşlatır. Mesafe ölçümünde GPS doğruluğu, özellikle kentsel vadilar veya ağaç örtüsü altında değişkenlik gösterir ki bu, hesaplanan tempoyu doğrudan etkiler. Koşu bandında tempo rüzgar direnci ve ilerleme yönündeki ivmeyi hesaba katmaz, dolayısıyla açık havada koşmak karşılaştırmaya göre daha zordur. Tempo bireye özgüdür; bir yeni başlayan için 6:00 dk/km bir koşu, elit bir koşucu için aynı tempo ile fizyolojik olarak çok farklı bir çabadır.',

    healthRisks:
      'Mevcut fitness seviyenizin üzerinde hızlı tempolarda koşmak yaralanma riskini artırır: shin splint, stres kırıkları, plantar fasiyit, IT band sendromu ve eklem iltihaplanma yaygın görülenlerdir. Aşırı antrenman sendromu; sert çabalar arasında yetersiz toparlanmadan kaynaklanır ve kalıcı yorgunluk, düşen performans, hormonal bozulma ve hastalığa artan yatkınlık olarak kendini gösterir. Kalıcı ağrı veya keskin acı gibi erken uyarı işaretlerinin göz ardı edilmesi, koşucuları aylarca koşudan uzaklaştıracak kronik yaralanmalara yol açar. Sert seanslar arasında her zaman toparlanma günleri ve kolay koşuları dahil ettin.',

    alternativeMeasures:
      'Kalp hızı izleme, tempo, hız veya araziden bağımsız olarak çaba seviyesini sağlar ve daha güvenilir bir antrenman metriği olarak kabul edilir. GPS koşu saatleri (Garmin, Apple Watch, Polar), tempo, mesafe, kadans ve kalp hızını eş zamanlı olarak ölçür. VO2 max testi, kardiyovasküler fitness\'in hassas bir ölçümünü sağlar ve koşu performansını tahmin edebilir. Laktik eşik testi, vücudun aerobik metabolizmadan anaerobik metabolizmaya geçtiği tam tempoyu belirler; bu, dayanıklılık antrenmanı için kritik sınırdır. Koşu güç ölçerler (Stryd gibi), bisiklette güç ile karşılaştırılabilir şekilde gerçek çaba çıktısını ölçür ve antrenman tutarlılığı için oldukça faydalıdır.',

    demographicDifferences:
      'Yaş, koşu temposunu önemli ölçüde etkiler; kardiyovasküler fitness (VO2 max), 25 yaşın üstünde yılda yaklaşık yüzde 1 düşer ve tempo bazlı rekor kategorilerinin çoğu yaşa göre düzeltilmiş kategoriler içerir. Erkekler, daha fazla oksijeni taşıma kapasitesi ve kas kütlesi nedeniyle eşdeğer fitness düzeyinde kadınlara kıyasla yüzde 10-15 daha hızlıdır. Vücut ağırlığı tempoyu doğrudan etkiler: daha hafif koşucular doğal bir hız avantajına sahiptir. Boy ve bacak uzunluğu, adım verimliliğini ve kadansı etkiler. Irtifa, mevcut oksijeni azaltır ve her 1.000 metre yükseklik için tempoyu yüzde 2-3 yavaşlatır. Antrenman deneyimi belki de en önemli faktördür; genetik olarak üstün koşucular bile tempo potansiyellerine ulaşmak için yıllarca tutarlı antrenman yapmalıdır.',

    medicalDisclaimer:
      'Bu koşu temposu hesaplayıcısı yalnızca bilgilendirme ve antrenman amaçlıdır. Özellikle önceden var olan sağlık sorunlarınız, kardiyovasküler sorunlarınız, eklem problemleriniz varsa veya 40 yaşın üzerindeyseniz, herhangi bir koşu programına başlamadan veya yoğunlaştırmadan önce her zaman sağlık profesyonellerine danışın. Uygunsuz temploda koşmak stres kırıkları, tendinit, kas gerilmeleri ve kardiyovasküler stres dahil yaralanmalara yol açabilir.',

    references: [
      'Jack Daniels tarafından Daniels\' Running Formula - Tempoya dayalı antrenman için bilimsel temel',
      'Amerikan Spor Hekimliği Koleji - Egzersiz Testi ve Reçetesi için Kılavuzlar',
      'Owen Anderson tarafından Running Science - Tempo ve performansın fizyolojik prensipleri',
    ],

    tips: [
      'Koşular sırasında doğru gerçek zamanlı tempo takibi için GPS saat veya akıllı telefon uygulaması kullanın',
      'Daha iyi tempo farkındalığı ve kontrolü geliştirmek için farklı templarda koşma pratik yapın',
      'Yavaş tempolar (konuşarak) antrenman hacminizin %80\'ini oluşturmalıdır',
      'Araziye dikkat edin - tepeler, patikalar ve rüzgar tempoyu önemli ölçüde etkiler',
      'Negatif bölmeler (ikinci yarıyı daha hızlı koşmak) genellikle daha iyi yarış sonuçlarına yol açar',
      'Tempo sıcaklığa göre değişir - sıcak/nemli koşullarda yavaşlamayı bekleyin',
      'Temponuzu başkalarınınkiyle karşılaştırmayın - kendi ilerlemenize ve hedeflerinize odaklanın',
    ],

    faqs: [
      {
        question: 'Yeni başlayanlar için iyi bir koşu temposu nedir?',
        answer:
          'Yeni başlayan koşucular için rahat bir kolay tempo genellikle kilometre başına 7-9 dakika (mil başına 11-14 dakika) veya daha yavaştır. Anahtar, nefes nefese kalmadan tam cümlelerle konuşabileceğiniz konuşarak bir tempoda koşmaktır. Bu genellikle maksimum kalp hızının %60-70\'ine karşılık gelir. Başlangıçta hız konusunda endişelenmeyin - dayanıklılık ve tutarlılık oluşturmaya odaklanın.',
      },
      {
        question: 'Hedef yarış tempom nasıl hesaplamalıyım?',
        answer:
          'Yarış temposunu belirlemek için yakın zamandaki yarış sonuçlarını veya zaman denemelerini kullanın. Yaygın bir yaklaşım "VDOT" yöntemidir: maksimum çaba ile bir 5K koşun, ardından diğer mesafelerdeki performansları tahmin etmek için tempo hesaplayıcılarını kullanın. Maratonlar için, birçok koç yarı maraton yarış temponuzdan mil başına 15-30 saniye daha yavaş bir tempoda koşmayı önerir.',
      },
      {
        question: 'Tempom koşular arasında neden bu kadar değişiyor?',
        answer:
          'Tempo değişkenliği normaldir ve birçok faktörden etkilenir: arazi (tepeler tempoyu yavaşlatır), hava durumu (sıcaklık/nem tempoyu mil başına 20-30 saniye azaltır), yorgunluk (önceki sert antrenmanlar), hidrasyon durumu, uyku kalitesi, stres seviyeleri, irtifa, rüzgar direnci ve ayakkabı seçimi. GPS doğruluğu da özellikle zayıf uydu kapsama alanı veya yoğun ağaç örtüsü olan alanlarda değişebilir. Her koşuda tam tempo üzerinde takıntı yapmak yerine çaba seviyesine (algılanan efor ve kalp hızı) odaklanın.',
      },
      {
        question: 'Tempo ve hız arasındaki fark nedir?',
        answer:
          'Tempo birim mesafe başına zamanı (dk/km veya dk/mil) ölçerken, hız birim zaman başına mesafeyi (km/s veya mph) ölçer. Tempo koşucular için daha sezgiseldir çünkü doğrudan yarış bitiş süreleri ve antrenman aralıklarıyla ilgilidir. Örneğin, 5:00 dk/km tempo her kilometrenin 5 dakika sürdüğü anlamına gelir. Hız bunu 12 km/s olarak ifade eder.',
      },
      {
        question: 'Sıcaklık koşu temposunu ne kadar etkiler?',
        answer:
          'Sıcaklık koşu temposunu önemli ölçüde etkiler. Araştırmalar, 60°F\'nin (15.5°C) üzerindeki her 5°F (2.8°C) için koşucuların artan kardiyovasküler stres ve termoregülasyon talepleri nedeniyle mil başına yaklaşık 20-30 saniye yavaşladığını göstermektedir. 80°F\'nin (27°C) üzerindeki sıcaklıklarda yüksek nemle, tempo optimal koşullara (50-60°F) kıyasla mil başına 1-2 dakika yavaşlayabilir.',
      },
    ],
  },
};
