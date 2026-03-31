import { CalculatorContent } from '@/types/calculator';

export const biorhythmContent: CalculatorContent = {
  en: {
    whatIs:
      'Biorhythm is a concept that suggests our daily lives are influenced by rhythmic biological cycles. The theory proposes three primary cycles that begin at the moment of birth and oscillate in a predictable sinusoidal pattern throughout life. The Physical cycle (23 days) governs strength, endurance, coordination, and overall physical well-being. The Emotional cycle (28 days) influences mood, creativity, sensitivity, perception, and emotional stability. The Intellectual cycle (33 days) affects memory, analytical thinking, concentration, learning ability, and decision-making. Each cycle oscillates between positive values (high points) and negative values (low points), crossing zero at transition points known as "critical days." The theory gained popularity in the late 19th century through the work of Dr. Wilhelm Fliess, a German physician, and was later developed by Austrian psychology professor Hermann Swoboda and Austrian engineering professor Alfred Teltscher, who identified the intellectual cycle.',

    howToCalculate:
      'Calculating your biorhythm is straightforward. First, determine the number of days between your birth date and the target date. Then, apply the sine function for each cycle: Biorhythm Value = sin(2π × days / cycle_period). For the physical cycle, divide the total days since birth by 23; for the emotional cycle, divide by 28; and for the intellectual cycle, divide by 33. The result ranges from -1.0 (lowest point) to +1.0 (highest point). Values near zero indicate critical transition days. For example, if you were born 10,000 days ago, your physical cycle would be: sin(2π × 10000 / 23) = sin(2731.27) ≈ 0.97, indicating a near-peak physical day.',

    interpretation:
      'Biorhythm values range from -100% to +100%. Positive values (above zero) indicate a period of high capacity in that area, while negative values suggest reduced capacity. Values near the peaks (+90% to +100%) represent optimal days for activities related to that cycle. Values near the lows (-90% to -100%) suggest days when you should be more cautious. The most important feature is the "critical day" — when a cycle crosses the zero line. Critical days are considered transition periods where accidents, errors in judgment, or emotional instability may be more likely. When two or more cycles hit critical points simultaneously, these are called "double critical" or "triple critical" days and are considered especially sensitive periods.',

    limitations:
      'It is important to note that biorhythm theory has not been scientifically validated. Multiple peer-reviewed studies have failed to find statistical evidence supporting the predictive power of biorhythms. A comprehensive 1998 analysis published in the journal Psychological Reports reviewed existing research and concluded there was no consistent evidence for the theory. The biorhythm concept does not account for environmental factors, personal habits, health conditions, or the complex interplay of hormones and neurotransmitters that actually influence our daily performance. It should be considered an entertainment tool rather than a reliable guide for making important life decisions. Real biological rhythms do exist — circadian rhythms (24-hour cycles), ultradian rhythms (shorter than 24 hours), and infradian rhythms (longer than 24 hours) — but these are distinct from the fixed-period biorhythm cycles described in this calculator.',

    healthRisks:
      'While biorhythm theory itself poses no direct health risks, relying on it for medical decisions or ignoring genuine health concerns based on biorhythm readings could be harmful. The concept of "critical days" should not be used to delay medical care or avoid necessary activities. If you notice genuine patterns of low energy, mood changes, or cognitive difficulties, consult a healthcare professional rather than attributing them to biorhythm cycles. Real biological rhythm disruptions — such as those affecting circadian rhythms from shift work, jet lag, or irregular sleep patterns — can have significant health implications and should be addressed through evidence-based approaches.',

    tips: [
      'Use the chart to plan physically demanding activities on high physical cycle days.',
      'Schedule creative work or social events during positive emotional cycle periods.',
      'Plan study sessions, exams, or important decisions during intellectual cycle peaks.',
      'Be extra mindful on critical days — take a little more care in everything you do.',
      'Remember that actual performance depends on many factors beyond biorhythms.',
      'Track your daily experiences alongside biorhythm readings to see if patterns emerge for you personally.',
    ],

    faqs: [
      {
        question: 'What is a biorhythm and how does it work?',
        answer: 'A biorhythm is a theoretical concept proposing that our lives are affected by three rhythmic cycles starting from birth: Physical (23 days), Emotional (28 days), and Intellectual (33 days). Each cycle follows a sine wave pattern, oscillating between positive and negative phases. The theory suggests that positive phases correspond to higher capabilities in that area, while negative phases indicate reduced capabilities.',
      },
      {
        question: 'What are critical days in biorhythm?',
        answer: 'Critical days occur when a biorhythm cycle crosses the zero line, transitioning from positive to negative or vice versa. These transition points are considered unstable periods where one might be more prone to accidents, errors in judgment, or emotional volatility. When two or more cycles cross zero on the same day, it is called a double or triple critical day.',
      },
      {
        question: 'Is biorhythm scientifically proven?',
        answer: 'No, biorhythm theory has not been scientifically validated. Multiple studies have failed to find consistent statistical evidence supporting its predictive claims. The theory is considered a pseudoscience by the scientific community. However, real biological rhythms (like circadian rhythms) do influence our health and performance — they are just different from the fixed-period biorhythm cycles.',
      },
      {
        question: 'How accurate is the biorhythm calculator?',
        answer: 'The mathematical calculations are precise — the sine wave formulas are applied accurately based on your birth date. However, the accuracy of the biorhythm theory itself in predicting your actual physical, emotional, or intellectual state is not supported by scientific evidence. Many people enjoy using it as a fun self-reflection tool.',
      },
      {
        question: 'Can biorhythm predict compatibility between two people?',
        answer: 'Some biorhythm enthusiasts compare the cycles of two people to assess compatibility. When both people have similar cycle patterns (peaks and lows at similar times), they are considered more compatible. However, this has no scientific basis and should not be used as a serious relationship assessment tool.',
      },
      {
        question: 'Why is the physical cycle 23 days?',
        answer: 'The 23-day physical cycle was proposed by Dr. Wilhelm Fliess in the late 1800s based on his observations of patients. He believed he detected a 23-day pattern in physical symptoms and recovery times. Similarly, the 28-day emotional cycle was connected to the menstrual cycle, and the 33-day intellectual cycle was later proposed by Alfred Teltscher based on student performance observations. These specific periods have not been verified by modern science.',
      },
    ],
  },
  tr: {
    whatIs:
      'Biyoritm, günlük yaşamlarımızın ritmik biyolojik döngülerden etkilendiğini öne süren bir kavramdır. Bu teori, doğum anında başlayan ve yaşam boyunca öngörülebilir bir sinüs dalgası şeklinde salınan üç temel döngü olduğunu ileri sürer. Fiziksel döngü (23 gün) güç, dayanıklılık, koordinasyon ve genel fiziksel sağlığı yönetir. Duygusal döngü (28 gün) ruh halini, yaratıcılığı, hassasiyeti, algıyı ve duygusal dengeyi etkiler. Zihinsel döngü (33 gün) hafızayı, analitik düşünmeyi, konsantrasyonu, öğrenme yeteneğini ve karar vermeyi etkiler. Her döngü, pozitif değerler (yüksek noktalar) ile negatif değerler (düşük noktalar) arasında salınır ve "kritik günler" olarak bilinen geçiş noktalarında sıfırı geçer. Teori, 19. yüzyılın sonlarında Alman doktor Dr. Wilhelm Fliess\'in çalışmalarıyla popülerlik kazanmış, daha sonra Avusturyalı psikoloji profesörü Hermann Swoboda ve Avusturyalı mühendislik profesörü Alfred Teltscher tarafından geliştirilmiştir.',

    howToCalculate:
      'Biyoritminizi hesaplamak oldukça basittir. Önce doğum tarihiniz ile hedef tarih arasındaki gün sayısını belirleyin. Ardından her döngü için sinüs fonksiyonunu uygulayın: Biyoritm Değeri = sin(2π × gün_sayısı / döngü_periyodu). Fiziksel döngü için doğumdan bu yana geçen toplam gün sayısını 23\'e, duygusal döngü için 28\'e, zihinsel döngü için 33\'e bölün. Sonuç -1,0 (en düşük nokta) ile +1,0 (en yüksek nokta) arasında değişir. Sıfıra yakın değerler kritik geçiş günlerini gösterir. Örneğin, doğumunuzdan bu yana 10.000 gün geçtiyse, fiziksel döngünüz: sin(2π × 10000 / 23) = sin(2731,27) ≈ 0,97 olur, bu da fiziksel olarak zirveye yakın bir gün olduğunu gösterir.',

    interpretation:
      'Biyoritm değerleri -%100 ile +%100 arasında değişir. Pozitif değerler (sıfırın üstü) o alanda yüksek kapasite dönemini gösterirken, negatif değerler azalmış kapasiteyi işaret eder. Zirveye yakın değerler (+%90 ile +%100) o döngüyle ilgili aktiviteler için en uygun günleri temsil eder. Dip noktaya yakın değerler (-%90 ile -%100) daha dikkatli olmanız gereken günleri önerir. En önemli özellik "kritik gün"dür — bir döngünün sıfır çizgisini geçtiği an. Kritik günler, kazaların, yanlış kararların veya duygusal dengesizliğin daha olası olabileceği geçiş dönemleri olarak kabul edilir. İki veya daha fazla döngü aynı anda kritik noktaya geldiğinde, bunlara "çift kritik" veya "üçlü kritik" günler denir ve özellikle hassas dönemler olarak değerlendirilir.',

    limitations:
      'Biyoritm teorisinin bilimsel olarak doğrulanmadığını belirtmek önemlidir. Çok sayıda hakemli çalışma, biyoritmlerin öngörü gücünü destekleyen istatistiksel kanıt bulamamıştır. Psychological Reports dergisinde yayımlanan kapsamlı bir 1998 analizi, mevcut araştırmaları gözden geçirmiş ve teori için tutarlı kanıt olmadığı sonucuna varmıştır. Biyoritm kavramı, çevresel faktörleri, kişisel alışkanlıkları, sağlık durumlarını veya günlük performansımızı gerçekten etkileyen hormonların ve nörotransmitterlerin karmaşık etkileşimini hesaba katmaz. Önemli yaşam kararları almak için güvenilir bir rehber yerine eğlence aracı olarak düşünülmelidir. Gerçek biyolojik ritimler mevcuttur — sirkadiyen ritimler (24 saatlik döngüler), ultradian ritimler (24 saatten kısa) ve infradian ritimler (24 saatten uzun) — ancak bunlar bu hesaplayıcıda tanımlanan sabit periyotlu biyoritm döngülerinden farklıdır.',

    healthRisks:
      'Biyoritm teorisi tek başına doğrudan bir sağlık riski oluşturmasa da, tıbbi kararlar için buna güvenmek veya biyoritm okumalarına dayanarak gerçek sağlık sorunlarını görmezden gelmek zararlı olabilir. "Kritik günler" kavramı, tıbbi bakımı geciktirmek veya gerekli aktivitelerden kaçınmak için kullanılmamalıdır. Gerçek düşük enerji, ruh hali değişiklikleri veya bilişsel zorluk kalıpları fark ederseniz, bunları biyoritm döngülerine bağlamak yerine bir sağlık uzmanına danışın. Vardiyalı çalışma, jet lag veya düzensiz uyku düzenlerinden kaynaklanan sirkadiyen ritim bozuklukları gibi gerçek biyolojik ritim bozuklukları önemli sağlık etkileri yaratabilir ve kanıta dayalı yaklaşımlarla ele alınmalıdır.',

    tips: [
      'Fiziksel döngünüzün yüksek olduğu günlerde ağır spor ve fiziksel aktiviteler planlayın.',
      'Pozitif duygusal döngü dönemlerinde yaratıcı işler veya sosyal etkinlikler düzenleyin.',
      'Zihinsel döngü zirvelerinde ders çalışma, sınav veya önemli kararlar planlayın.',
      'Kritik günlerde ekstra dikkatli olun — yaptığınız her şeyde biraz daha özen gösterin.',
      'Gerçek performansın biyoritmlerin ötesinde birçok faktöre bağlı olduğunu unutmayın.',
      'Kişisel kalıpları görmek için günlük deneyimlerinizi biyoritm okumalarıyla birlikte takip edin.',
    ],

    faqs: [
      {
        question: 'Biyoritm nedir ve nasıl çalışır?',
        answer: 'Biyoritm, yaşamlarımızın doğumdan itibaren başlayan üç ritmik döngüden etkilendiğini öne süren teorik bir kavramdır: Fiziksel (23 gün), Duygusal (28 gün) ve Zihinsel (33 gün). Her döngü sinüs dalgası şeklinde pozitif ve negatif fazlar arasında salınır. Teori, pozitif fazların o alanda daha yüksek yeteneklere karşılık geldiğini, negatif fazların ise azalmış yetenekleri gösterdiğini ileri sürer.',
      },
      {
        question: 'Biyoritmde kritik günler nedir?',
        answer: 'Kritik günler, bir biyoritm döngüsünün sıfır çizgisini geçtiği, pozitiften negatife veya tam tersi yönde geçiş yaptığı günlerdir. Bu geçiş noktaları, kişinin kazalara, yanlış kararlara veya duygusal dalgalanmalara daha yatkın olabileceği dengesiz dönemler olarak kabul edilir. İki veya daha fazla döngü aynı gün sıfırı geçtiğinde buna çift veya üçlü kritik gün denir.',
      },
      {
        question: 'Biyoritm bilimsel olarak kanıtlanmış mıdır?',
        answer: 'Hayır, biyoritm teorisi bilimsel olarak doğrulanmamıştır. Çok sayıda çalışma, öngörü iddialarını destekleyen tutarlı istatistiksel kanıt bulamamıştır. Teori, bilim camiası tarafından sözde bilim olarak kabul edilmektedir. Ancak gerçek biyolojik ritimler (sirkadiyen ritimler gibi) sağlığımızı ve performansımızı etkiler — bunlar sadece sabit periyotlu biyoritm döngülerinden farklıdır.',
      },
      {
        question: 'Biyoritm hesaplayıcısı ne kadar doğrudur?',
        answer: 'Matematiksel hesaplamalar kesindir — sinüs dalgası formülleri doğum tarihinize göre doğru şekilde uygulanır. Ancak biyoritm teorisinin gerçek fiziksel, duygusal veya zihinsel durumunuzu tahmin etmedeki doğruluğu bilimsel kanıtlarla desteklenmemektedir. Birçok kişi bunu eğlenceli bir öz-değerlendirme aracı olarak kullanmaktan keyif alır.',
      },
      {
        question: 'Biyoritm iki kişi arasındaki uyumu tahmin edebilir mi?',
        answer: 'Bazı biyoritm meraklıları, uyumluluğu değerlendirmek için iki kişinin döngülerini karşılaştırır. Her iki kişinin benzer döngü kalıpları (benzer zamanlarda zirveler ve dipler) olduğunda daha uyumlu kabul edilirler. Ancak bunun bilimsel bir temeli yoktur ve ciddi bir ilişki değerlendirme aracı olarak kullanılmamalıdır.',
      },
      {
        question: 'Fiziksel döngü neden 23 gündür?',
        answer: '23 günlük fiziksel döngü, 1800\'lerin sonlarında Dr. Wilhelm Fliess tarafından hasta gözlemlerine dayanarak önerilmiştir. Fiziksel belirtilerde ve iyileşme sürelerinde 23 günlük bir kalıp tespit ettiğine inanıyordu. Benzer şekilde, 28 günlük duygusal döngü adet döngüsüyle ilişkilendirilmiş, 33 günlük zihinsel döngü ise daha sonra Alfred Teltscher tarafından öğrenci performans gözlemlerine dayanarak önerilmiştir. Bu belirli dönemler modern bilim tarafından doğrulanmamıştır.',
      },
    ],
  },
};
