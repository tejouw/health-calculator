import { CalculatorContent } from '@/types/calculator';

export const sleepContent: CalculatorContent = {
  en: {
    whatIs:
      'A sleep calculator is a tool that helps you determine optimal bedtime or wake-up time based on sleep cycles. Sleep occurs in recurring cycles of approximately 90 minutes, each consisting of light sleep, deep sleep, and REM (Rapid Eye Movement) sleep stages. Waking up between cycles, rather than during deep sleep, significantly improves how refreshed and alert you feel upon waking. This phenomenon explains why sometimes you feel more rested after 6 hours of sleep than after 7.5 hours - you may have woken during a lighter sleep phase in the first scenario. The average person needs 4-6 complete sleep cycles (6-9 hours) per night for optimal health and cognitive function. This calculator accounts for the average 14 minutes it takes to fall asleep and calculates backwards or forwards in 90-minute increments to suggest ideal sleep/wake times.',

    howToCalculate:
      'To use a sleep calculator, first decide whether you want to calculate bedtime (if you know when you need to wake up) or wake time (if you know when you\'ll go to bed). For bedtime calculation: start with your desired wake time, subtract 90-minute sleep cycles (typically 4, 5, or 6 cycles), and subtract an additional 14 minutes for falling asleep. For example, if you need to wake at 7:00 AM and want 5 cycles (7.5 hours): 7:00 AM - 7.5 hours - 14 minutes = 11:16 PM bedtime. For wake time calculation: start with your planned bedtime, add 14 minutes for falling asleep, then add 90-minute cycles. If going to bed at 10:30 PM with 6 cycles: 10:30 PM + 14 minutes + 9 hours = 7:44 AM wake time. The calculator provides multiple options (4, 5, and 6 cycles) because individual sleep needs vary - some people function optimally on 6 hours while others need 9.',

    formulaDetails:
      'The calculation is based on the well-established 90-minute sleep cycle duration, first identified by sleep researcher Nathaniel Kleitman in the 1950s. Each cycle progresses through stages: Stage 1 (light sleep, 5-10 minutes), Stage 2 (deeper sleep, 10-25 minutes), Stage 3 (deep/slow-wave sleep, 20-40 minutes), and REM sleep (10-25 minutes). The formula accounts for sleep onset latency (time to fall asleep), which averages 14 minutes in healthy adults but varies from 10-20 minutes depending on sleep hygiene, stress, and circadian rhythm. The calculation: Bedtime = Wake Time - (Number of Cycles × 90 minutes) - 14 minutes. Or: Wake Time = Bedtime + 14 minutes + (Number of Cycles × 90 minutes). While individual cycle length can vary between 80-110 minutes, 90 minutes is the most accurate average for planning purposes. Consistently waking between cycles helps regulate circadian rhythm and improve sleep quality over time.',

    medicalDisclaimer:
      'This sleep calculator is for general guidance only and does not replace professional medical advice for sleep disorders or chronic sleep problems. If you experience persistent insomnia, sleep apnea symptoms (loud snoring, gasping, breathing pauses), excessive daytime sleepiness, difficulty falling or staying asleep for more than 3 weeks, or other sleep disturbances, consult a healthcare provider or sleep specialist. Certain medical conditions, medications, mental health disorders, and sleep disorders require specialized treatment beyond sleep timing optimization. Pregnant women, shift workers, and individuals with irregular schedules may need personalized sleep recommendations. Never use sleep aids or medications without medical supervision.',

    references: [
      'National Sleep Foundation - Sleep Cycle and Stages Research',
      'American Academy of Sleep Medicine - Clinical Practice Guidelines',
      'Walker M. Why We Sleep: Unlocking the Power of Sleep and Dreams. Scribner. 2017.',
      'Kleitman N. Sleep and Wakefulness. University of Chicago Press. 1963.',
      'Carskadon MA, Dement WC. Normal Human Sleep: An Overview. Principles and Practice of Sleep Medicine. 2017.',
      'Centers for Disease Control and Prevention - Sleep and Sleep Disorders Data',
    ],

    tips: [
      'Maintain consistent sleep and wake times, even on weekends, to regulate your circadian rhythm',
      'Create a relaxing bedtime routine starting 30-60 minutes before sleep (reading, gentle stretching, meditation)',
      'Keep bedroom cool (60-67°F / 15-19°C), dark, and quiet for optimal sleep environment',
      'Avoid screens (phones, tablets, computers, TV) for 1-2 hours before bed due to blue light disruption',
      'Limit caffeine after 2 PM as it has a half-life of 5-6 hours and can interfere with sleep onset',
      'Exercise regularly but finish moderate/vigorous workouts at least 3 hours before bedtime',
      'If you can\'t fall asleep after 20 minutes, get up and do a calm activity until drowsy',
      'Expose yourself to bright natural light in the morning to help set your circadian clock',
    ],

    faqs: [
      {
        question: 'How many hours of sleep do I really need?',
        answer:
          'Most adults need 7-9 hours of sleep per night (approximately 5-6 complete sleep cycles). However, individual needs vary based on age, genetics, health status, and daily activity levels. Teenagers require 8-10 hours, while adults over 65 may function well on 7-8 hours. Quality matters as much as quantity - 6 hours of uninterrupted, high-quality sleep can be more restorative than 8 hours of fragmented sleep. Signs you\'re getting enough sleep include: waking without an alarm, feeling refreshed in the morning, maintaining energy throughout the day, and not needing catch-up sleep on weekends. If you regularly need an alarm, feel groggy in the morning, or require caffeine to function, you may need more sleep.',
      },
      {
        question: 'Is it better to sleep 6 hours or 7.5 hours?',
        answer:
          '7.5 hours (5 complete sleep cycles) is generally better than 6 hours (4 cycles) because it provides more deep sleep and REM sleep, which are crucial for physical recovery, memory consolidation, and cognitive function. However, if you can only get 6 hours, timing your wake-up at the end of a cycle (rather than mid-cycle after 7 hours, for example) will help you feel more refreshed. That said, consistently getting only 6 hours can lead to sleep debt accumulation, impaired cognitive performance, weakened immune function, and increased health risks. Most adults genuinely need 7-9 hours for optimal functioning, even if they feel adapted to less.',
      },
      {
        question: 'Why do I still feel tired even when I sleep 8 hours?',
        answer:
          'Several factors can cause fatigue despite adequate sleep duration: poor sleep quality (frequent awakenings, sleep apnea, restless leg syndrome), waking mid-cycle rather than between cycles, inconsistent sleep schedule disrupting circadian rhythm, underlying health conditions (anemia, thyroid disorders, depression, chronic fatigue syndrome), medications that interfere with sleep architecture, poor sleep environment (noise, light, temperature), alcohol consumption (disrupts REM sleep), late-night eating (affects sleep quality), or excessive screen time before bed (blue light suppresses melatonin). If the calculator\'s suggested wake times don\'t help after 2 weeks, consult a healthcare provider to rule out sleep disorders or medical issues.',
      },
      {
        question: 'Can I make up for lost sleep on weekends?',
        answer:
          'While weekend catch-up sleep provides some recovery benefit, it cannot fully compensate for chronic sleep deprivation and can worsen "social jet lag" by disrupting your circadian rhythm. Sleeping 2-3 hours later on weekends shifts your internal clock, making Monday mornings even harder (similar to jet lag). Instead of drastic weekend changes, try to maintain consistent sleep/wake times within 1 hour of your weekday schedule. If you\'re sleep-deprived, gradually extend sleep during the week rather than binge-sleeping on weekends. A better approach: go to bed 15-30 minutes earlier on weeknights to chip away at sleep debt while keeping your wake time consistent.',
      },
      {
        question: 'Does the 90-minute sleep cycle apply to naps?',
        answer:
          'Sleep cycles in naps differ from nighttime sleep. Short naps (10-20 minutes) provide quick refreshment without entering deep sleep, avoiding grogginess. Longer naps (90 minutes) complete a full sleep cycle and can enhance memory and learning, but may interfere with nighttime sleep if taken after 3 PM. The "30-minute nap" is often discouraged because it risks waking during deep sleep (sleep inertia), causing grogginess. For optimal napping: take 10-20 minute power naps for alertness, or full 90-minute naps for cognitive benefits if you have time and won\'t disrupt nighttime sleep. Mid-afternoon (1-3 PM) is ideal timing, aligning with natural circadian dips in alertness.',
      },
    ],
  },
  tr: {
    whatIs:
      'Uyku hesaplayıcı, uyku döngülerine dayalı olarak optimal yatma veya uyanma saatini belirlemenize yardımcı olan bir araçtır. Uyku, her biri hafif uyku, derin uyku ve REM (Hızlı Göz Hareketi) uyku aşamalarından oluşan yaklaşık 90 dakikalık tekrarlanan döngülerde gerçekleşir. Derin uyku sırasında değil, döngüler arasında uyanmak, uyanırken kendinizi ne kadar dinlenmiş ve uyanık hissettiğinizi önemli ölçüde iyileştirir. Ortalama bir kişi optimal sağlık ve bilişsel fonksiyon için gecede 4-6 tam uyku döngüsüne (6-9 saat) ihtiyaç duyar. Bu hesaplayıcı, uykuya dalmanın ortalama 14 dakika sürdüğünü hesaba katar ve ideal uyku/uyanma zamanlarını önermek için 90 dakikalık artışlarla geriye veya ileriye doğru hesaplar.',

    howToCalculate:
      'Bir uyku hesaplayıcısı kullanmak için, önce yatma saati (ne zaman uyanmanız gerektiğini biliyorsanız) veya uyanma saati (ne zaman yatağa gideceğinizi biliyorsanız) hesaplamak istediğinize karar verin. Yatma saati hesaplama için: istediğiniz uyanma saatiyle başlayın, 90 dakikalık uyku döngülerini (genellikle 4, 5 veya 6 döngü) çıkarın ve uykuya dalmak için ek 14 dakika çıkarın. Örneğin, sabah 7:00\'de uyanmanız gerekiyorsa ve 5 döngü (7.5 saat) istiyorsanız: 7:00 - 7.5 saat - 14 dakika = 23:16 yatma saati.',

    formulaDetails:
      'Hesaplama, ilk olarak uyku araştırmacısı Nathaniel Kleitman tarafından 1950\'lerde belirlenen, iyi kurulmuş 90 dakikalık uyku döngüsü süresine dayanmaktadır. Her döngü aşamalardan ilerler: Aşama 1 (hafif uyku, 5-10 dakika), Aşama 2 (daha derin uyku, 10-25 dakika), Aşama 3 (derin/yavaş dalga uykusu, 20-40 dakika) ve REM uykusu (10-25 dakika). Formül, sağlıklı yetişkinlerde ortalama 14 dakika olan ancak uyku hijyeni, stres ve sirkadiyen ritme bağlı olarak 10-20 dakika arasında değişen uyku başlangıç gecikmesini (uykuya dalma süresi) hesaba katar.',

    medicalDisclaimer:
      'Bu uyku hesaplayıcısı yalnızca genel rehberlik içindir ve uyku bozuklukları veya kronik uyku sorunları için profesyonel tıbbi tavsiyenin yerini almaz. Sürekli uykusuzluk, uyku apnesi semptomları (yüksek sesle horlama, nefes nefese kalma, nefes duraklamaları), aşırı gündüz uykululuğu, 3 haftadan fazla uykuya dalma veya uykuda kalma güçlüğü veya diğer uyku bozuklukları yaşıyorsanız, bir sağlık hizmeti sağlayıcısına veya uyku uzmanına danışın.',

    references: [
      'Ulusal Uyku Vakfı - Uyku Döngüsü ve Aşamaları Araştırması',
      'Amerikan Uyku Tıbbı Akademisi - Klinik Uygulama Kılavuzları',
      'Hastalık Kontrol ve Önleme Merkezleri - Uyku ve Uyku Bozuklukları Verileri',
    ],

    tips: [
      'Sirkadiyen ritminizi düzenlemek için hafta sonları bile tutarlı uyku ve uyanma saatlerini koruyun',
      'Uykudan 30-60 dakika önce başlayan rahatlatıcı bir yatma rutini oluşturun',
      'Optimal uyku ortamı için yatak odasını serin (15-19°C), karanlık ve sessiz tutun',
      'Mavi ışık bozulması nedeniyle yatmadan 1-2 saat önce ekranlardan kaçının',
      '14:00\'ten sonra kafein tüketimini sınırlayın',
      'Düzenli egzersiz yapın ancak orta/şiddetli antrenmanları yatmadan en az 3 saat önce bitirin',
    ],

    faqs: [
      {
        question: 'Gerçekten kaç saat uykuya ihtiyacım var?',
        answer:
          'Çoğu yetişkin gecede 7-9 saat uykuya (yaklaşık 5-6 tam uyku döngüsü) ihtiyaç duyar. Ancak bireysel ihtiyaçlar yaş, genetik, sağlık durumu ve günlük aktivite seviyelerine göre değişir. Ergenler 8-10 saat gerektirirken, 65 yaş üstü yetişkinler 7-8 saat ile iyi çalışabilir. Kalite miktar kadar önemlidir - 6 saat kesintisiz, yüksek kaliteli uyku 8 saat parçalanmış uykudan daha onarıcı olabilir.',
      },
      {
        question: '6 saat mi yoksa 7.5 saat mi uyumak daha iyi?',
        answer:
          '7.5 saat (5 tam uyku döngüsü) genellikle 6 saatten (4 döngü) daha iyidir çünkü fiziksel toparlanma, hafıza pekiştirme ve bilişsel fonksiyon için çok önemli olan daha fazla derin uyku ve REM uykusu sağlar. Ancak, sadece 6 saat uyuyabiliyorsanız, uyanışınızı bir döngünün sonunda zamanlamak (örneğin 7 saatten sonra döngü ortasında değil) kendinizi daha dinlenmiş hissetmenize yardımcı olacaktır.',
      },
      {
        question: '8 saat uyuduğumda bile neden hala yorgun hissediyorum?',
        answer:
          'Yeterli uyku süresine rağmen yorgunluğa neden olabilecek birkaç faktör: zayıf uyku kalitesi (sık uyanmalar, uyku apnesi, huzursuz bacak sendromu), döngüler arasında değil döngü ortasında uyanma, sirkadiyen ritmi bozan tutarsız uyku programı, altta yatan sağlık durumları (anemi, tiroid bozuklukları, depresyon), uyku mimarisini etkileyen ilaçlar, zayıf uyku ortamı (gürültü, ışık, sıcaklık), alkol tüketimi (REM uykusunu bozar).',
      },
      {
        question: 'Hafta sonları kayıp uyku telafi edebilir miyim?',
        answer:
          'Hafta sonu telafi uykusu bir miktar iyileşme faydası sağlarken, kronik uyku yoksunluğunu tam olarak telafi edemez ve sirkadiyen ritminizi bozarak "sosyal jet lag"ı kötüleştirebilir. Hafta sonları 2-3 saat daha geç uyumak iç saatinizi değiştirir ve Pazartesi sabahlarını daha da zorlaştırır. Drastik hafta sonu değişiklikleri yerine, hafta içi programınızın 1 saat içinde tutarlı uyku/uyanma saatlerini korumaya çalışın.',
      },
      {
        question: '90 dakikalık uyku döngüsü kestirmeler için geçerli mi?',
        answer:
          'Kestirmelerdeki uyku döngüleri gece uykusundan farklıdır. Kısa kestirmeler (10-20 dakika) derin uykuya girmeden hızlı tazelenme sağlar ve sersemliği önler. Daha uzun kestirmeler (90 dakika) tam bir uyku döngüsünü tamamlar ve hafızayı ve öğrenmeyi geliştirebilir, ancak öğleden sonra 3\'ten sonra alınırsa gece uykusunu etkileyebilir. "30 dakikalık kestirme" genellikle önerilmez çünkü derin uyku sırasında uyanma riskini (uyku ataleti) taşır ve sersemliğe neden olur.',
      },
    ],
  },
};
