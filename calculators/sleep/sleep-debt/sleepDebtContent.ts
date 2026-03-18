import { CalculatorContent } from '@/types/calculator';

export const sleepDebtContent: CalculatorContent = {
  en: {
    whatIs:
      'Sleep debt, also known as sleep deficit, is the cumulative difference between the amount of sleep your body needs and the amount you actually get. When you consistently sleep less than your body requires, the deficit accumulates over time, creating a "debt" that your body keeps track of. For example, if you need 8 hours of sleep per night but only get 6, you accumulate 2 hours of sleep debt each day — totaling 14 hours over a week. Research from the National Sleep Foundation shows that most adults need 7-9 hours of sleep per night. Chronic sleep debt is associated with a wide range of health consequences including impaired cognitive function, weakened immune system, increased risk of obesity, cardiovascular disease, and mental health disorders. Unlike financial debt, sleep debt cannot be fully repaid by a single night of extended sleep. Instead, it requires consistent, gradual recovery over multiple days. Understanding your sleep debt is the first step toward better health and improved daily performance.',

    howToCalculate:
      'To calculate your sleep debt, you need to determine your ideal sleep duration and track your actual sleep for a week. First, identify your optimal sleep need. Most adults function best with 7-9 hours, though individual needs vary. Factors like age, activity level, and health status affect your requirements. Next, record how many hours you actually slept each night for the past 7 days. For each night where you slept less than your ideal, the difference contributes to your sleep debt. Simply subtract your actual sleep from your ideal sleep for each deficient night, then add up all the deficits. For example: if your ideal is 8 hours and you slept 6, 7, 5, 8, 6, 7, and 6 hours over seven days, your debt would be: (2 + 1 + 3 + 0 + 2 + 1 + 2) = 11 hours of sleep debt.',

    interpretation:
      'Sleep debt is categorized into severity levels based on the total accumulated hours. No sleep debt (0 hours) means you are meeting your sleep needs — congratulations! Mild sleep debt (under 5 hours) can usually be recovered within a few days of slightly extended sleep. Moderate sleep debt (5-10 hours) begins to noticeably affect daily performance, concentration, and mood. You may experience microsleeps, difficulty focusing, and increased irritability. Severe sleep debt (10-20 hours) significantly impairs cognitive function, reaction time, and emotional regulation. At this level, your risk for accidents and health problems increases substantially. Critical sleep debt (over 20 hours) represents a serious health concern that can affect almost every system in your body. At any severity level, the goal should be gradual recovery through consistent, slightly extended sleep — not trying to "crash" for an entire weekend, which can disrupt your circadian rhythm.',

    limitations:
      'This calculator provides an estimate based on self-reported sleep data, which may not perfectly reflect actual sleep quality or duration. Several important limitations should be noted. First, sleep quality matters as much as quantity — 8 hours of fragmented, light sleep may be less restorative than 7 hours of deep, uninterrupted sleep. Second, individual sleep needs vary significantly based on genetics, age, health status, and lifestyle factors. The "ideal" sleep duration you set may not perfectly match your biological need. Third, this calculator tracks only one week of data, but chronic sleep debt may have accumulated over months or years. Long-term sleep debt is harder to quantify and recover from. Fourth, napping during the day can partially offset nighttime sleep deficit but is not captured in this calculation. Fifth, the recovery plan assumes optimal conditions for sleep, which may not be achievable for everyone due to work schedules, medical conditions, or environmental factors. Finally, certain sleep disorders (insomnia, sleep apnea, restless leg syndrome) can affect sleep quality independent of duration.',

    healthRisks:
      'Accumulated sleep debt poses significant health risks across multiple body systems. Cognitive effects appear first and most noticeably: reduced attention span, impaired memory consolidation, slower reaction times, and poor decision-making. Research from the University of Pennsylvania found that sleeping 6 hours per night for two weeks produced cognitive impairments equivalent to going 48 hours without sleep. Metabolic effects include increased appetite (through elevated ghrelin and reduced leptin), insulin resistance, and weight gain. Studies show that even modest sleep restriction increases caloric intake by 300-500 calories per day. Cardiovascular risks are well-documented: chronic sleep debt increases blood pressure, inflammation markers (C-reactive protein), and the risk of heart disease and stroke. A meta-analysis in the European Heart Journal found that short sleepers had a 48% increased risk of coronary heart disease. Immune function is compromised — people sleeping less than 7 hours are three times more likely to catch a cold compared to those sleeping 8+ hours. Mental health consequences include increased risk of depression, anxiety, and emotional volatility. The relationship between sleep debt and mental health is bidirectional, creating a potentially destructive cycle.',

    improvementTips:
      'Recovering from sleep debt requires a strategic, gradual approach rather than attempting to sleep for 12+ hours on weekends. Start by adding 1-2 extra hours of sleep per night until your debt is repaid. Go to bed 15-30 minutes earlier each night rather than sleeping in late, as this better preserves your circadian rhythm. Maintain a consistent sleep schedule, even on weekends — varying your wake time by more than 1 hour can disrupt your internal clock. Create an optimal sleep environment: keep the room cool (18-20°C/65-68°F), dark, and quiet. Limit caffeine after noon, as its half-life is 5-6 hours and it can affect sleep quality even if you fall asleep easily. Avoid alcohol before bed — while it may help you fall asleep faster, it disrupts REM sleep and reduces overall sleep quality. Exercise regularly, but complete vigorous workouts at least 3 hours before bedtime. Consider a brief (20-30 minute) afternoon nap if your schedule allows, but avoid napping after 3 PM. Reduce screen exposure in the hour before bed, as blue light suppresses melatonin production. If your sleep debt is chronic and severe, consider consulting a sleep specialist who can evaluate you for underlying sleep disorders.',

    medicalDisclaimer:
      'This sleep debt calculator is designed for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. The calculations are based on self-reported data and general sleep science guidelines, which may not account for individual health conditions, sleep disorders, or other medical factors. If you consistently experience poor sleep, excessive daytime sleepiness, or other sleep-related concerns, please consult a healthcare professional or sleep specialist. Certain conditions such as sleep apnea, insomnia, narcolepsy, and restless leg syndrome require professional diagnosis and treatment. Do not make significant changes to your sleep habits or medications without consulting a qualified healthcare provider.',

    references: [
      'National Sleep Foundation - Sleep Duration Recommendations (2015)',
      'Walker, Matthew. Why We Sleep: Unlocking the Power of Sleep and Dreams. Scribner, 2017.',
      'Van Dongen HPA, et al. The cumulative cost of additional wakefulness. Sleep. 2003;26(2):117-126.',
      'Cappuccio FP, et al. Sleep duration and all-cause mortality: a systematic review and meta-analysis. Sleep. 2010;33(5):585-592.',
      'Spiegel K, et al. Impact of sleep debt on metabolic and endocrine function. Lancet. 1999;354(9188):1435-1439.',
      'Cohen S, et al. Sleep habits and susceptibility to the common cold. Arch Intern Med. 2009;169(1):62-67.',
    ],

    tips: [
      'Track your sleep for at least a week to get an accurate picture of your sleep debt',
      'Aim to repay sleep debt gradually — adding 1-2 hours per night rather than trying to sleep all weekend',
      'Keep a consistent wake time even on weekends to support your circadian rhythm',
      'Create a relaxing bedtime routine to signal your body that it is time to sleep',
      'Avoid caffeine after noon and alcohol close to bedtime for better sleep quality',
      'If you have persistent sleep problems, consider consulting a sleep specialist',
      'Prioritize sleep as you would diet and exercise — it is equally important for health',
      'Remember that sleep quality matters just as much as sleep quantity',
    ],

    faqs: [
      {
        question: 'Can you catch up on sleep debt?',
        answer:
          'Yes, but it takes time and consistency. Research shows that short-term sleep debt (a few days) can be recovered within a week of adequate sleep. However, chronic sleep debt accumulated over weeks or months requires a longer, more systematic recovery approach. The key is to add 1-2 extra hours of sleep per night consistently, rather than attempting marathon sleep sessions on weekends. Weekend oversleeping can actually disrupt your circadian rhythm and make recovery harder. Focus on gradually shifting your bedtime earlier and maintaining that schedule.',
      },
      {
        question: 'How much sleep debt is dangerous?',
        answer:
          'Any accumulated sleep debt can affect your performance, but risks increase significantly beyond 10 hours of total debt. At this level, your cognitive impairment may be comparable to being legally intoxicated. Studies show that going 17-19 hours without sleep produces impairments equivalent to a blood alcohol concentration of 0.05%. Chronic sleep debt above 20 hours is associated with increased risk of serious health conditions including cardiovascular disease, diabetes, obesity, and mental health disorders. If your sleep debt regularly exceeds 10 hours per week, it is important to address the underlying causes.',
      },
      {
        question: 'Does napping help reduce sleep debt?',
        answer:
          'Yes, strategic napping can help offset sleep debt, but it is not a complete replacement for nighttime sleep. A 20-30 minute power nap can improve alertness, mood, and cognitive performance. However, longer naps (over 30 minutes) can cause sleep inertia (grogginess upon waking) and may interfere with nighttime sleep. Avoid napping after 3 PM, as late naps can delay your ability to fall asleep at your regular bedtime. While napping is a helpful tool, consistent nighttime sleep should be the primary strategy for addressing sleep debt.',
      },
      {
        question: 'Why do I feel tired even when I sleep 8 hours?',
        answer:
          'Feeling tired despite sleeping 8 hours can have several explanations. First, you may have accumulated significant sleep debt over previous days or weeks that 8 hours cannot fully resolve. Second, sleep quality matters: disruptions from noise, light, sleep apnea, or other disorders can reduce the restorative value of your sleep. Third, your individual sleep need may be higher than 8 hours — some people naturally require 9 hours or more. Fourth, factors like diet, hydration, stress, physical inactivity, and medical conditions can cause fatigue independent of sleep duration. If persistent tiredness continues despite adequate sleep, consult a healthcare provider to rule out underlying conditions.',
      },
      {
        question: 'What is the ideal amount of sleep for adults?',
        answer:
          'The National Sleep Foundation recommends 7-9 hours of sleep per night for adults aged 18-64, and 7-8 hours for adults 65 and older. However, individual needs vary based on genetics, lifestyle, and health status. Some people function optimally with 7 hours, while others need 9. A good indicator of adequate sleep is waking up feeling refreshed without an alarm clock and maintaining consistent energy throughout the day. If you regularly need more than 30 minutes to feel alert in the morning or experience afternoon energy crashes, you may not be getting enough sleep.',
      },
      {
        question: 'How does sleep debt affect weight gain?',
        answer:
          'Sleep debt significantly impacts weight management through multiple mechanisms. First, sleep deprivation increases production of ghrelin (the hunger hormone) and decreases leptin (the satiety hormone), leading to increased appetite — particularly for high-calorie, carbohydrate-rich foods. Studies show sleep-deprived individuals consume 300-500 extra calories per day. Second, sleep debt impairs insulin sensitivity, promoting fat storage. Third, fatigue from poor sleep reduces motivation for physical activity and exercise. Fourth, sleep deprivation affects the prefrontal cortex, which governs impulse control, making it harder to resist unhealthy food choices. Research consistently shows that people who sleep less than 7 hours per night are significantly more likely to be overweight or obese.',
      },
    ],
  },
  tr: {
    whatIs:
      'Uyku borcu, vücudunuzun ihtiyaç duyduğu uyku miktarı ile gerçekte aldığınız uyku miktarı arasındaki kümülatif fark olarak tanımlanır. Sürekli olarak vücudunuzun gerektirdiğinden daha az uyuduğunuzda, açık zamanla birikir ve vücudunuzun takip ettiği bir "borç" oluşturur. Örneğin, her gece 8 saat uykuya ihtiyacınız varsa ama yalnızca 6 saat uyuyorsanız, her gün 2 saatlik uyku borcu biriktirirsiniz — bu da bir hafta içinde toplam 14 saat eder. Ulusal Uyku Vakfı\'nın araştırmaları, çoğu yetişkinin gecelik 7-9 saat uykuya ihtiyaç duyduğunu göstermektedir. Kronik uyku borcu; bozulmuş bilişsel işlev, zayıflamış bağışıklık sistemi, obezite riski artışı, kardiyovasküler hastalık ve ruhsal sağlık bozuklukları dahil geniş bir yelpazede sağlık sonuçlarıyla ilişkilidir. Maddi borçtan farklı olarak, uyku borcu tek bir uzun uyku gecesiyle tamamen geri ödenemez. Bunun yerine, birden fazla gün boyunca tutarlı ve kademeli bir toparlanma gerektirir. Uyku borcunuzu anlamak, daha iyi bir sağlık ve gelişmiş günlük performans yolunda atılacak ilk adımdır.',

    howToCalculate:
      'Uyku borcunuzu hesaplamak için ideal uyku sürenizi belirlemeniz ve bir hafta boyunca gerçek uykunuzu takip etmeniz gerekir. Öncelikle, optimal uyku ihtiyacınızı belirleyin. Çoğu yetişkin 7-9 saat ile en iyi performansı gösterir, ancak bireysel ihtiyaçlar farklılık gösterir. Yaş, aktivite düzeyi ve sağlık durumu gibi faktörler gereksinimlerinizi etkiler. Ardından, son 7 gün boyunca her gece kaç saat uyuduğunuzu kaydedin. İdealinizden daha az uyuduğunuz her gece, aradaki fark uyku borcunuza katkıda bulunur. Her yetersiz gece için gerçek uykunuzu idealinizden çıkarın, sonra tüm açıkları toplayın. Örneğin: idealiniz 8 saat ise ve yedi gün boyunca 6, 7, 5, 8, 6, 7 ve 6 saat uyuduysanız, borcunuz şöyle olur: (2 + 1 + 3 + 0 + 2 + 1 + 2) = 11 saat uyku borcu.',

    interpretation:
      'Uyku borcu, toplam biriken saatlere göre ciddiyet seviyelerine ayrılır. Uyku borcu yok (0 saat), uyku ihtiyaçlarınızı karşıladığınız anlamına gelir — tebrikler! Hafif uyku borcu (5 saatin altında), genellikle birkaç gece biraz uzatılmış uyku ile giderilebilir. Orta düzey uyku borcu (5-10 saat), günlük performansı, konsantrasyonu ve ruh halini gözle görülür şekilde etkilemeye başlar. Mikro uykular, odaklanma güçlüğü ve artan sinirlilik yaşayabilirsiniz. Ciddi uyku borcu (10-20 saat), bilişsel fonksiyonu, reaksiyon süresini ve duygusal düzenlemeyi önemli ölçüde bozar. Bu seviyede, kaza ve sağlık sorunları riskiniz önemli ölçüde artar. Kritik uyku borcu (20 saatin üzerinde), vücudunuzdaki hemen hemen her sistemi etkileyebilecek ciddi bir sağlık endişesini temsil eder. Her ciddiyet seviyesinde hedef, sirkadiyen ritminizi bozabilecek bir hafta sonu boyunca "çökmek" yerine, tutarlı ve biraz uzatılmış uyku yoluyla kademeli toparlanma olmalıdır.',

    limitations:
      'Bu hesaplayıcı, kendi bildirdiğiniz uyku verilerine dayalı bir tahmin sağlar ve gerçek uyku kalitesini veya süresini mükemmel şekilde yansıtmayabilir. Birkaç önemli sınırlama belirtilmelidir. Birincisi, uyku kalitesi miktar kadar önemlidir — 8 saatlik kesintili, hafif uyku, 7 saatlik derin, kesintisiz uykudan daha az onarıcı olabilir. İkincisi, bireysel uyku ihtiyaçları genetik, yaş, sağlık durumu ve yaşam tarzı faktörlerine bağlı olarak önemli ölçüde farklılık gösterir. Belirlediğiniz "ideal" uyku süresi biyolojik ihtiyacınızla tam olarak eşleşmeyebilir. Üçüncüsü, bu hesaplayıcı yalnızca bir haftalık veriyi takip eder, ancak kronik uyku borcu aylar veya yıllar boyunca birikmiş olabilir. Uzun süreli uyku borcunu ölçmek ve ondan kurtulmak daha zordur. Dördüncüsü, gün içinde yapılan şekerlemeler gece uyku açığını kısmen telafi edebilir, ancak bu hesaplamada yakalanmaz. Beşincisi, toparlanma planı uyku için optimal koşulları varsayar ve bu koşullar iş programları, tıbbi durumlar veya çevresel faktörler nedeniyle herkes için ulaşılabilir olmayabilir. Son olarak, belirli uyku bozuklukları (uykusuzluk, uyku apnesi, huzursuz bacak sendromu) süreden bağımsız olarak uyku kalitesini etkileyebilir.',

    healthRisks:
      'Birikmiş uyku borcu, birden fazla vücut sisteminde önemli sağlık riskleri oluşturur. Bilişsel etkiler ilk ve en belirgin şekilde ortaya çıkar: azalmış dikkat süresi, bozulmuş hafıza pekiştirmesi, yavaşlamış reaksiyon süreleri ve zayıf karar verme. Pennsylvania Üniversitesi\'ndeki araştırmalar, iki hafta boyunca gecelik 6 saat uyumanın 48 saat hiç uyumamakla eşdeğer bilişsel bozulmalara yol açtığını bulmuştur. Metabolik etkiler arasında artmış iştah (yükselen grelin ve azalan leptin yoluyla), insülin direnci ve kilo alımı yer alır. Çalışmalar, mütevazı bir uyku kısıtlamasının bile günlük kalori alımını 300-500 kalori artırdığını göstermektedir. Kardiyovasküler riskler iyi belgelenmiştir: kronik uyku borcu kan basıncını, iltihaplanma belirteçlerini (C-reaktif protein) ve kalp hastalığı ile inme riskini artırır. Avrupa Kalp Dergisi\'ndeki bir meta-analiz, az uyuyanların koroner kalp hastalığı riskinin %48 arttığını bulmuştur. Bağışıklık fonksiyonu bozulur — 7 saatten az uyuyanların soğuk algınlığı kapma olasılığı, 8 saatten fazla uyuyanlara kıyasla üç kat daha fazladır. Ruhsal sağlık sonuçları arasında depresyon, anksiyete ve duygusal dengesizlik riski artışı bulunur. Uyku borcu ile ruhsal sağlık arasındaki ilişki iki yönlüdür ve potansiyel olarak yıkıcı bir döngü oluşturur.',

    improvementTips:
      'Uyku borcundan kurtulmak, hafta sonları 12 saatten fazla uyumaya çalışmak yerine stratejik ve kademeli bir yaklaşım gerektirir. Borcunuz geri ödenene kadar her gece 1-2 saat fazladan uyku ekleyerek başlayın. Geç saatlere kadar uyumak yerine, her gece 15-30 dakika daha erken yatın çünkü bu sirkadiyen ritminizi daha iyi korur. Hafta sonları bile tutarlı bir uyku programı sürdürün — uyanma saatinizi 1 saatten fazla değiştirmek iç saatinizi bozabilir. Optimal bir uyku ortamı oluşturun: odayı serin (18-20°C), karanlık ve sessiz tutun. Yarım ömrü 5-6 saat olan kafeini öğleden sonra sınırlandırın ve kolayca uyuyakalsanız bile uyku kalitesini etkileyebileceğini unutmayın. Yatmadan önce alkolden kaçının — daha hızlı uykuya dalmanıza yardımcı olsa da REM uykusunu bozar ve genel uyku kalitesini düşürür. Düzenli egzersiz yapın, ancak yoğun antrenmanları yatmadan en az 3 saat önce bitirin. Programınız izin veriyorsa kısa (20-30 dakikalık) bir öğleden sonra şekerlemesi yapabilirsiniz, ancak saat 15:00\'dan sonra şekerleme yapmaktan kaçının. Yatmadan önceki saatte ekran maruziyetini azaltın çünkü mavi ışık melatonin üretimini baskılar. Uyku borcunuz kronik ve ciddiyse, altta yatan uyku bozukluklarını değerlendirmek için bir uyku uzmanına danışmayı düşünün.',

    medicalDisclaimer:
      'Bu uyku borcu hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine geçmez. Hesaplamalar, bireysel sağlık durumlarını, uyku bozukluklarını veya diğer tıbbi faktörleri hesaba katmayabilecek kendi bildirdiğiniz verilere ve genel uyku bilimi kılavuzlarına dayanmaktadır. Sürekli kötü uyku, aşırı gündüz uykululuğu veya uyku ile ilgili diğer endişeler yaşıyorsanız, lütfen bir sağlık uzmanına veya uyku uzmanına danışın. Uyku apnesi, uykusuzluk, narkolepsi ve huzursuz bacak sendromu gibi belirli durumlar profesyonel teşhis ve tedavi gerektirir. Nitelikli bir sağlık uzmanına danışmadan uyku alışkanlıklarınızda veya ilaçlarınızda önemli değişiklikler yapmayın.',

    references: [
      'Ulusal Uyku Vakfı - Uyku Süresi Önerileri (2015)',
      'Walker, Matthew. Neden Uyuruz: Uykunun ve Rüyaların Gücünü Keşfetmek. Scribner, 2017.',
      'Van Dongen HPA, ve ark. Ek uyanıklığın kümülatif maliyeti. Sleep. 2003;26(2):117-126.',
      'Cappuccio FP, ve ark. Uyku süresi ve tüm nedenlere bağlı ölüm: sistematik bir derleme ve meta-analiz. Sleep. 2010;33(5):585-592.',
      'Spiegel K, ve ark. Uyku borcunun metabolik ve endokrin fonksiyon üzerine etkisi. Lancet. 1999;354(9188):1435-1439.',
      'Cohen S, ve ark. Uyku alışkanlıkları ve soğuk algınlığına yatkınlık. Arch Intern Med. 2009;169(1):62-67.',
    ],

    tips: [
      'Uyku borcunuzun doğru bir resmini elde etmek için en az bir hafta boyunca uykunuzu takip edin',
      'Uyku borcunu kademeli olarak ödemeyi hedefleyin — tüm hafta sonu uyumak yerine her gece 1-2 saat ekleyin',
      'Sirkadiyen ritminizi desteklemek için hafta sonları bile tutarlı bir uyanma saati belirleyin',
      'Vücudunuza uyku vakti olduğunu bildirmek için rahatlatıcı bir yatma rutini oluşturun',
      'Daha iyi uyku kalitesi için öğleden sonra kafein ve yatmadan önce alkol tüketiminden kaçının',
      'Sürekli uyku sorunlarınız varsa bir uyku uzmanına danışmayı düşünün',
      'Uykuyu beslenme ve egzersiz gibi önceliklendirin — sağlık için eşit derecede önemlidir',
      'Uyku kalitesinin uyku miktarı kadar önemli olduğunu unutmayın',
    ],

    faqs: [
      {
        question: 'Uyku borcu telafi edilebilir mi?',
        answer:
          'Evet, ancak zaman ve tutarlılık gerektirir. Araştırmalar, kısa süreli uyku borcunun (birkaç günlük) yeterli uyku ile bir hafta içinde telafi edilebileceğini göstermektedir. Ancak haftalar veya aylar boyunca biriken kronik uyku borcu, daha uzun ve daha sistematik bir toparlanma yaklaşımı gerektirir. Anahtar, hafta sonları maraton uyku seansları yapmak yerine, her gece tutarlı bir şekilde 1-2 saat fazladan uyumaktır. Hafta sonu aşırı uyuma, sirkadiyen ritminizi bozabilir ve toparlanmayı zorlaştırabilir. Yatma saatinizi kademeli olarak öne çekmeye ve bu programı sürdürmeye odaklanın.',
      },
      {
        question: 'Ne kadar uyku borcu tehlikelidir?',
        answer:
          'Biriken herhangi bir uyku borcu performansınızı etkileyebilir, ancak toplam borcun 10 saati aşması durumunda riskler önemli ölçüde artar. Bu seviyede, bilişsel bozulmanız yasal alkol sınırında olmakla karşılaştırılabilir. Çalışmalar, 17-19 saat uyanık kalmanın %0.05 kan alkol konsantrasyonuna eşdeğer bozulmalara yol açtığını göstermektedir. 20 saatin üzerindeki kronik uyku borcu, kardiyovasküler hastalık, diyabet, obezite ve ruhsal sağlık bozuklukları dahil ciddi sağlık durumları riskiyle ilişkilidir. Uyku borcunuz düzenli olarak haftada 10 saati aşıyorsa, altta yatan nedenleri ele almak önemlidir.',
      },
      {
        question: 'Şekerleme yapmak uyku borcunu azaltır mı?',
        answer:
          'Evet, stratejik şekerleme yapmak uyku borcunu telafi etmeye yardımcı olabilir, ancak gece uykusunun tam bir yerine geçmez. 20-30 dakikalık kısa bir şekerleme, uyanıklığı, ruh halini ve bilişsel performansı artırabilir. Ancak daha uzun şekerlemeler (30 dakikadan fazla) uyku ataleti (uyanınca sersemlik) yapabilir ve gece uykusunu olumsuz etkileyebilir. Saat 15:00\'dan sonra şekerleme yapmaktan kaçının çünkü geç şekerlemeler normal yatma saatinizde uykuya dalma yeteneğinizi geciktirebilir. Şekerleme yararlı bir araç olsa da, uyku borcunu gidermek için birincil strateji tutarlı gece uykusu olmalıdır.',
      },
      {
        question: '8 saat uyumama rağmen neden yorgun hissediyorum?',
        answer:
          '8 saat uyumasına rağmen yorgun hissetmenin birkaç açıklaması olabilir. Birincisi, önceki günler veya haftalarda önemli bir uyku borcu biriktirmiş olabilirsiniz ve 8 saat bunu tam olarak çözemez. İkincisi, uyku kalitesi önemlidir: gürültü, ışık, uyku apnesi veya diğer bozukluklardan kaynaklanan kesintiler uykunuzun onarıcı değerini azaltabilir. Üçüncüsü, bireysel uyku ihtiyacınız 8 saatten fazla olabilir — bazı insanlar doğal olarak 9 saat veya daha fazlasına ihtiyaç duyar. Dördüncüsü, beslenme, hidrasyon, stres, fiziksel hareketsizlik ve tıbbi durumlar gibi faktörler uyku süresinden bağımsız olarak yorgunluğa neden olabilir. Yeterli uykuya rağmen sürekli yorgunluk devam ederse, altta yatan durumları ekarte etmek için bir sağlık uzmanına danışın.',
      },
      {
        question: 'Yetişkinler için ideal uyku miktarı nedir?',
        answer:
          'Ulusal Uyku Vakfı, 18-64 yaş arası yetişkinler için gecelik 7-9 saat ve 65 yaş ve üstü yetişkinler için 7-8 saat uyku önermektedir. Ancak bireysel ihtiyaçlar genetik, yaşam tarzı ve sağlık durumuna göre değişir. Bazı insanlar 7 saat ile optimal şekilde çalışırken, diğerleri 9 saate ihtiyaç duyar. Yeterli uykunun iyi bir göstergesi, alarm saati olmadan dinlenmiş hissederek uyanmak ve gün boyunca tutarlı enerji seviyesini korumaktır. Sabahları uyanıklık hissetmek için düzenli olarak 30 dakikadan fazlaya ihtiyaç duyuyorsanız veya öğleden sonra enerji düşüşleri yaşıyorsanız, yeterince uyumamış olabilirsiniz.',
      },
      {
        question: 'Uyku borcu kilo almayı nasıl etkiler?',
        answer:
          'Uyku borcu, birden fazla mekanizma yoluyla kilo yönetimini önemli ölçüde etkiler. Birincisi, uyku yoksunluğu grelin (açlık hormonu) üretimini artırır ve leptin (tokluk hormonu) üretimini azaltır, bu da özellikle yüksek kalorili, karbonhidrat açısından zengin gıdalara karşı iştah artışına yol açar. Çalışmalar, uyku yoksunu bireylerin günde 300-500 ekstra kalori tükettiğini göstermektedir. İkincisi, uyku borcu insülin duyarlılığını bozarak yağ depolanmasını teşvik eder. Üçüncüsü, kötü uykudan kaynaklanan yorgunluk, fiziksel aktivite ve egzersiz motivasyonunu düşürür. Dördüncüsü, uyku yoksunluğu dürtü kontrolünü yöneten prefrontal korteksi etkiler ve sağlıksız yiyecek seçimlerine direnmeyi zorlaştırır. Araştırmalar tutarlı bir şekilde, gecelik 7 saatten az uyuyanların fazla kilolu veya obez olma olasılığının önemli ölçüde daha yüksek olduğunu göstermektedir.',
      },
    ],
  },
};
