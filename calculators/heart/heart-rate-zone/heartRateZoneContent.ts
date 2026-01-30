import { CalculatorContent } from '@/types/calculator';

export const heartRateZoneContent: CalculatorContent = {
  en: {
    whatIs: `A Heart Rate Zone Calculator helps you determine your target heart rate zones for different types of exercise. Your heart rate zones are specific ranges of heartbeats per minute (bpm) that correspond to different exercise intensities and training benefits. By training in specific zones, you can optimize your workouts for fat burning, endurance building, or performance improvement. The calculator uses your age (and optionally your resting heart rate) to calculate five distinct training zones, each serving a different fitness purpose.`,

    formulaDetails: `The calculator uses two main formulas:\n\n**Standard Method (Age-Based):**\n- Maximum Heart Rate (MHR) = 220 - Age\n- Zone percentages are calculated directly from MHR\n- Example: For a 30-year-old, MHR = 220 - 30 = 190 bpm\n\n**Karvonen Method (Heart Rate Reserve):**\n- Heart Rate Reserve (HRR) = MHR - Resting Heart Rate\n- Target HR = ((MHR - RHR) × %Intensity) + RHR\n- More accurate as it accounts for individual fitness levels\n- Example: MHR = 190, RHR = 60, HRR = 130\n- Zone 2 (60-70%): ((130 × 0.6) + 60) to ((130 × 0.7) + 60) = 138-151 bpm`,

    howToCalculate: `To calculate your heart rate zones:\n\n1. **Determine your maximum heart rate** using the formula: 220 - your age\n2. **Measure your resting heart rate** (optional but recommended): Take your pulse for 60 seconds first thing in the morning before getting out of bed\n3. **Choose your calculation method**: Standard (simpler) or Karvonen (more accurate)\n4. **Calculate your zones** by multiplying your max heart rate (or heart rate reserve) by the zone percentages\n\nThe five zones are:\n- Zone 1 (50-60%): Recovery and warm-up\n- Zone 2 (60-70%): Fat burning and base fitness\n- Zone 3 (70-80%): Aerobic endurance\n- Zone 4 (80-90%): Anaerobic threshold\n- Zone 5 (90-100%): Maximum effort`,

    interpretation: `**Zone 1 (Very Light - 50-60% MHR):**\nThis is your warm-up and recovery zone. Exercise feels very easy, and you can maintain a conversation without any difficulty. Use this zone for warming up, cooling down, and active recovery days.\n\n**Zone 2 (Light/Fat Burning - 60-70% MHR):**\nThis is the optimal zone for fat burning and building aerobic base fitness. Exercise feels comfortable, and you can still talk in full sentences. Most easy runs and long, slow distance training should be in this zone.\n\n**Zone 3 (Moderate/Aerobic - 70-80% MHR):**\nThis zone improves cardiovascular fitness and aerobic capacity. Exercise feels moderately hard, and talking becomes more difficult. This is a common zone for tempo runs and steady-state cardio.\n\n**Zone 4 (Hard/Anaerobic - 80-90% MHR):**\nThis zone improves lactate threshold and performance. Exercise feels hard, and you can only speak in short phrases. Use this zone for interval training and lactate threshold workouts.\n\n**Zone 5 (Maximum - 90-100% MHR):**\nThis is maximum effort training. You cannot maintain this intensity for long periods. Use only for short intervals (30 seconds to 2 minutes) followed by recovery.`,

    limitations: `**Limitations of heart rate zone calculations:**\n\n1. **Individual Variation**: The 220-age formula is an average and may not be accurate for everyone. Your actual maximum heart rate can vary by ±10-15 bpm.\n\n2. **Fitness Level**: More fit individuals may have lower resting heart rates and different zone responses than less fit individuals.\n\n3. **Age Accuracy**: The formula becomes less accurate for people over 40 and athletes who may have different maximum heart rates than predicted.\n\n4. **Environmental Factors**: Heat, humidity, altitude, dehydration, and stress can all affect heart rate, making zones less reliable in certain conditions.\n\n5. **Medication Effects**: Beta-blockers and other medications can significantly affect heart rate, making standard calculations inaccurate.\n\n6. **Sport-Specific Differences**: Maximum heart rate can vary by activity (running vs. cycling vs. swimming).\n\nFor the most accurate zones, consider getting a laboratory VO2 max test or field test your actual maximum heart rate under controlled conditions.`,

    healthRisks: `**Safety considerations when training by heart rate zones:**\n\n**Risks of training too hard (Zone 4-5):**\n- Overtraining syndrome\n- Increased injury risk\n- Immune system suppression\n- Poor recovery and adaptation\n- Cardiovascular stress in untrained individuals\n\n**Warning signs to stop exercise:**\n- Chest pain or pressure\n- Severe shortness of breath\n- Dizziness or lightheadedness\n- Nausea or vomiting\n- Irregular heartbeat or palpitations\n- Excessive fatigue\n\n**Who should consult a doctor first:**\n- People with heart conditions or family history of heart disease\n- Those with high blood pressure or diabetes\n- Anyone over 40 starting a new exercise program\n- People taking heart medications\n- Anyone experiencing chest pain or irregular heartbeat during exercise\n\n**Safe training principles:**\n- Spend 80% of training time in Zones 1-3\n- Only 20% in Zones 4-5\n- Allow adequate recovery between hard sessions\n- Build intensity gradually over weeks and months`,

    tips: [
      'Invest in a quality heart rate monitor or fitness watch for accurate real-time tracking',
      'Take your resting heart rate first thing in the morning for the most accurate Karvonen calculations',
      'Most of your training (80%) should be in Zones 1-3, even if it feels "too easy"',
      'Use Zone 2 for building aerobic base and fat-burning workouts',
      'Limit Zone 4-5 training to 1-2 sessions per week to prevent overtraining',
      'Heart rate can lag behind effort - give it 1-2 minutes to stabilize when changing intensity',
      'Heat and humidity can raise heart rate by 10-20 bpm - adjust expectations accordingly',
      'Track trends in resting heart rate - an elevated RHR often indicates inadequate recovery',
      'Consider using Rate of Perceived Exertion (RPE) alongside heart rate for a complete picture',
      'If on beta-blockers or heart medication, consult your doctor about appropriate training zones',
    ],

    faqs: [
      {
        question: 'What is the best heart rate zone for fat burning?',
        answer: 'Zone 2 (60-70% of max heart rate) is optimal for fat burning. At this intensity, your body uses a higher percentage of fat for fuel. However, don\'t neglect higher zones - you burn more total calories and fat at higher intensities, and building fitness through varied training improves overall fat-burning capacity.',
      },
      {
        question: 'How accurate is the 220-age formula?',
        answer: 'The 220-age formula is a general estimate with a standard deviation of ±10-15 bpm. It works reasonably well for average populations but may be inaccurate for very fit or unfit individuals, and accuracy decreases with age. For more precise zones, use the Karvonen method with your actual resting heart rate, or consider a field test to determine your actual maximum heart rate.',
      },
      {
        question: 'Should I use Standard or Karvonen method?',
        answer: 'Use the Karvonen method if you know your resting heart rate and want more personalized zones. It accounts for individual fitness levels better than the standard method. The standard method is simpler and adequate for general fitness training. The Karvonen method is particularly beneficial for people with very low or high resting heart rates.',
      },
      {
        question: 'Why is my heart rate higher than expected during exercise?',
        answer: 'Several factors can elevate heart rate: dehydration, heat and humidity, stress, lack of sleep, caffeine, overtraining, illness, or being at the beginning of your fitness journey. If consistently experiencing very high heart rates (above calculated zones) with moderate effort, or experiencing chest pain or dizziness, consult a healthcare provider.',
      },
      {
        question: 'Can I do all my training in Zone 5 to get faster results?',
        answer: 'No - training only at high intensity is counterproductive and dangerous. Elite athletes spend 80% of their training in Zones 1-3 (the 80/20 rule). High-intensity training (Zones 4-5) should be limited to 1-2 sessions per week. Excessive high-intensity training leads to overtraining, injury, and actually impairs fitness gains. Building an aerobic base in lower zones is essential for long-term performance and health.',
      },
      {
        question: 'How long should I train in each zone?',
        answer: 'A balanced weekly training might include: Zone 1 (warm-up/cool-down): 10-15 minutes per session; Zone 2 (base building): 3-4 hours per week; Zone 3 (tempo): 30-60 minutes per week; Zone 4 (threshold): 20-40 minutes total per week in intervals; Zone 5 (maximum): 5-15 minutes total per week in short bursts. Adjust based on your fitness level and goals.',
      },
    ],

    references: [
      'American Heart Association - Target Heart Rates Chart. https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates',
      'Karvonen MJ, Kentala E, Mustala O. "The effects of training on heart rate; a longitudinal study." Ann Med Exp Biol Fenn. 1957;35(3):307-15.',
      'Tanaka H, Monahan KD, Seals DR. "Age-predicted maximal heart rate revisited." J Am Coll Cardiol. 2001;37(1):153-156.',
      'American College of Sports Medicine. ACSM\'s Guidelines for Exercise Testing and Prescription. 11th edition. Wolters Kluwer, 2021.',
      'Seiler S. "What is best practice for training intensity and duration distribution in endurance athletes?" Int J Sports Physiol Perform. 2010;5(3):276-291.',
    ],
  },

  tr: {
    whatIs: `Kalp Atış Hızı Bölgesi Hesaplayıcı, farklı egzersiz türleri için hedef kalp atış hızı bölgelerinizi belirlemenize yardımcı olur. Kalp atış hızı bölgeleriniz, farklı egzersiz yoğunluklarına ve antrenman faydalarına karşılık gelen dakikadaki kalp atış sayısının (atım/dk) belirli aralıklarıdır. Belirli bölgelerde antrenman yaparak, yağ yakımı, dayanıklılık geliştirme veya performans iyileştirme için egzersizlerinizi optimize edebilirsiniz. Hesaplayıcı, her biri farklı bir fitness amacına hizmet eden beş ayrı antrenman bölgesi hesaplamak için yaşınızı (ve isteğe bağlı olarak dinlenme kalp atışınızı) kullanır.`,

    formulaDetails: `Hesaplayıcı iki ana formül kullanır:\n\n**Standart Yöntem (Yaş Bazlı):**\n- Maksimum Kalp Atışı (MKA) = 220 - Yaş\n- Bölge yüzdeleri doğrudan MKA'dan hesaplanır\n- Örnek: 30 yaşında biri için MKA = 220 - 30 = 190 atım/dk\n\n**Karvonen Yöntemi (Kalp Atış Rezervi):**\n- Kalp Atış Rezervi (KAR) = MKA - Dinlenme Kalp Atışı\n- Hedef KA = ((MKA - DKA) × %Yoğunluk) + DKA\n- Bireysel fitness seviyelerini hesaba kattığı için daha doğru\n- Örnek: MKA = 190, DKA = 60, KAR = 130\n- Bölge 2 (60-70%): ((130 × 0.6) + 60) ile ((130 × 0.7) + 60) = 138-151 atım/dk`,

    howToCalculate: `Kalp atış hızı bölgelerinizi hesaplamak için:\n\n1. **Maksimum kalp atışınızı belirleyin**: 220 - yaşınız formülünü kullanın\n2. **Dinlenme kalp atışınızı ölçün** (opsiyonel ama önerilir): Sabah yataktan kalkmadan önce 60 saniye boyunca nabzınızı alın\n3. **Hesaplama yönteminizi seçin**: Standart (daha basit) veya Karvonen (daha doğru)\n4. **Bölgelerinizi hesaplayın**: Maksimum kalp atışınızı (veya kalp atış rezervinizi) bölge yüzdeleriyle çarpın\n\nBeş bölge:\n- Bölge 1 (50-60%): Toparlanma ve ısınma\n- Bölge 2 (60-70%): Yağ yakma ve temel fitness\n- Bölge 3 (70-80%): Aerobik dayanıklılık\n- Bölge 4 (80-90%): Anaerobik eşik\n- Bölge 5 (90-100%): Maksimum efor`,

    interpretation: `**Bölge 1 (Çok Hafif - 50-60% MKA):**\nBu ısınma ve toparlanma bölgenizdir. Egzersiz çok kolay hissedilir ve herhangi bir zorluk olmadan konuşabilirsiniz. Bu bölgeyi ısınma, soğuma ve aktif toparlanma günleri için kullanın.\n\n**Bölge 2 (Hafif/Yağ Yakma - 60-70% MKA):**\nBu, yağ yakımı ve aerobik temel fitness oluşturma için optimal bölgedir. Egzersiz rahat hissedilir ve hala tam cümlelerle konuşabilirsiniz. Çoğu kolay koşu ve uzun, yavaş mesafe antrenmanı bu bölgede olmalıdır.\n\n**Bölge 3 (Orta/Aerobik - 70-80% MKA):**\nBu bölge kardiyovasküler fitness ve aerobik kapasiteyi geliştirir. Egzersiz orta derecede zor hissedilir ve konuşmak daha zor hale gelir. Bu, tempo koşuları ve sabit tempolu kardio için yaygın bir bölgedir.\n\n**Bölge 4 (Zor/Anaerobik - 80-90% MKA):**\nBu bölge laktat eşiği ve performansı geliştirir. Egzersiz zor hissedilir ve sadece kısa cümlelerle konuşabilirsiniz. Bu bölgeyi interval antrenman ve laktat eşiği egzersizleri için kullanın.\n\n**Bölge 5 (Maksimum - 90-100% MKA):**\nBu maksimum efor antrenmanıdır. Bu yoğunluğu uzun süreler boyunca sürdüremezsiniz. Sadece kısa intervallar (30 saniye ile 2 dakika arası) için kullanın, ardından toparlanma yapın.`,

    limitations: `**Kalp atış hızı bölgesi hesaplamalarının sınırlamaları:**\n\n1. **Bireysel Farklılık**: 220-yaş formülü bir ortalamadır ve herkes için doğru olmayabilir. Gerçek maksimum kalp atışınız ±10-15 atım/dk değişebilir.\n\n2. **Fitness Seviyesi**: Daha fit bireyler daha düşük dinlenme kalp atışlarına sahip olabilir ve daha az fit bireylere göre farklı bölge tepkileri gösterebilir.\n\n3. **Yaş Doğruluğu**: Formül 40 yaş üzeri insanlar ve tahmin edilenden farklı maksimum kalp atışlarına sahip olabilecek atletler için daha az doğru hale gelir.\n\n4. **Çevresel Faktörler**: Sıcaklık, nem, yükseklik, dehidrasyon ve stres kalp atışını etkileyebilir, bu da bölgeleri belirli koşullarda daha az güvenilir hale getirir.\n\n5. **İlaç Etkileri**: Beta blokerler ve diğer ilaçlar kalp atışını önemli ölçüde etkileyebilir, bu da standart hesaplamaları hatalı hale getirir.\n\n6. **Spora Özgü Farklılıklar**: Maksimum kalp atışı aktiviteye göre değişebilir (koşu vs. bisiklet vs. yüzme).\n\nEn doğru bölgeler için laboratuvar VO2 max testi yaptırmayı veya kontrollü koşullarda gerçek maksimum kalp atışınızı saha testi ile belirlemeyi düşünün.`,

    healthRisks: `**Kalp atış hızı bölgelerine göre antrenman yaparken güvenlik hususları:**\n\n**Çok sıkı antrenman yapmanın riskleri (Bölge 4-5):**\n- Aşırı antrenman sendromu\n- Artan yaralanma riski\n- Bağışıklık sistemi baskılanması\n- Zayıf toparlanma ve adaptasyon\n- Antrenmansız bireylerde kardiyovasküler stres\n\n**Egzersizi durdurma uyarı işaretleri:**\n- Göğüs ağrısı veya baskısı\n- Şiddetli nefes darlığı\n- Baş dönmesi veya sersemlik\n- Bulantı veya kusma\n- Düzensiz kalp atışı veya çarpıntı\n- Aşırı yorgunluk\n\n**Önce doktora danışması gerekenler:**\n- Kalp rahatsızlığı olan veya ailede kalp hastalığı öyküsü olanlar\n- Yüksek tansiyonu veya diyabeti olanlar\n- Yeni bir egzersiz programına başlayan 40 yaş üzeri herkes\n- Kalp ilaçları kullananlar\n- Egzersiz sırasında göğüs ağrısı veya düzensiz kalp atışı yaşayan herkes\n\n**Güvenli antrenman prensipleri:**\n- Antrenman süresinin %80'ini Bölge 1-3'te geçirin\n- Sadece %20'si Bölge 4-5'te\n- Sıkı seanslar arasında yeterli toparlanmaya izin verin\n- Yoğunluğu haftalar ve aylar boyunca kademeli olarak artırın`,

    tips: [
      'Doğru gerçek zamanlı takip için kaliteli bir kalp atış hızı monitörü veya fitness saatine yatırım yapın',
      'En doğru Karvonen hesaplamaları için sabah ilk iş dinlenme kalp atışınızı alın',
      'Antrenmanınızın çoğu (%80) Bölge 1-3\'te olmalı, "çok kolay" hissedilse bile',
      'Aerobik temel oluşturma ve yağ yakma egzersizleri için Bölge 2 kullanın',
      'Aşırı antrenmanı önlemek için Bölge 4-5 antrenmanını haftada 1-2 seansla sınırlayın',
      'Kalp atışı efordan geri kalabilir - yoğunluk değiştiğinde stabilize olması için 1-2 dakika verin',
      'Sıcaklık ve nem kalp atışını 10-20 atım/dk artırabilir - beklentileri buna göre ayarlayın',
      'Dinlenme kalp atışındaki trendleri takip edin - yüksek DKA genellikle yetersiz toparlanmayı gösterir',
      'Tam bir resim için kalp atışıyla birlikte Algılanan Efor Derecesi (RPE) kullanmayı düşünün',
      'Beta bloker veya kalp ilacı kullanıyorsanız, uygun antrenman bölgeleri hakkında doktorunuza danışın',
    ],

    faqs: [
      {
        question: 'Yağ yakımı için en iyi kalp atış hızı bölgesi hangisidir?',
        answer: 'Bölge 2 (maksimum kalp atışının %60-70\'i) yağ yakımı için optimaldir. Bu yoğunlukta vücudunuz yakıt olarak daha yüksek oranda yağ kullanır. Ancak daha yüksek bölgeleri ihmal etmeyin - daha yüksek yoğunluklarda toplam olarak daha fazla kalori ve yağ yakarsınız ve çeşitli antrenmanlar yoluyla fitness geliştirmek genel yağ yakma kapasitesini artırır.',
      },
      {
        question: '220-yaş formülü ne kadar doğrudur?',
        answer: '220-yaş formülü ±10-15 atım/dk standart sapma ile genel bir tahmindir. Ortalama popülasyonlar için makul derecede iyi çalışır ancak çok fit veya fit olmayan bireyler için yanlış olabilir ve yaşla birlikte doğruluk azalır. Daha hassas bölgeler için gerçek dinlenme kalp atışınızla Karvonen yöntemini kullanın veya gerçek maksimum kalp atışınızı belirlemek için saha testi yapmayı düşünün.',
      },
      {
        question: 'Standart mı yoksa Karvonen yöntemi mi kullanmalıyım?',
        answer: 'Dinlenme kalp atışınızı biliyorsanız ve daha kişiselleştirilmiş bölgeler istiyorsanız Karvonen yöntemini kullanın. Bireysel fitness seviyelerini standart yöntemden daha iyi hesaba katar. Standart yöntem daha basittir ve genel fitness antrenmanı için yeterlidir. Karvonen yöntemi özellikle çok düşük veya yüksek dinlenme kalp atışına sahip kişiler için faydalıdır.',
      },
      {
        question: 'Egzersiz sırasında kalp atışım neden beklenenden yüksek?',
        answer: 'Birkaç faktör kalp atışını yükseltebilir: dehidrasyon, sıcaklık ve nem, stres, uyku eksikliği, kafein, aşırı antrenman, hastalık veya fitness yolculuğunuzun başında olmak. Orta dereceli eforla sürekli olarak çok yüksek kalp atışları (hesaplanan bölgelerin üzerinde) yaşıyorsanız veya göğüs ağrısı veya baş dönmesi yaşıyorsanız, bir sağlık uzmanına danışın.',
      },
      {
        question: 'Daha hızlı sonuç almak için tüm antrenmanımı Bölge 5\'te yapabilir miyim?',
        answer: 'Hayır - sadece yüksek yoğunlukta antrenman yapmak verimsiz ve tehlikelidir. Elit atletler antrenmanlarının %80\'ini Bölge 1-3\'te geçirir (%80/20 kuralı). Yüksek yoğunluklu antrenman (Bölge 4-5) haftada 1-2 seansla sınırlı olmalıdır. Aşırı yüksek yoğunluklu antrenman aşırı antrenmana, yaralanmaya yol açar ve aslında fitness kazanımlarını bozar. Düşük bölgelerde aerobik temel oluşturmak uzun vadeli performans ve sağlık için esastır.',
      },
      {
        question: 'Her bölgede ne kadar süre antrenman yapmalıyım?',
        answer: 'Dengeli bir haftalık antrenman şunları içerebilir: Bölge 1 (ısınma/soğuma): Seans başına 10-15 dakika; Bölge 2 (temel oluşturma): Haftada 3-4 saat; Bölge 3 (tempo): Haftada 30-60 dakika; Bölge 4 (eşik): Intervallerde haftada toplam 20-40 dakika; Bölge 5 (maksimum): Kısa patlamalarda haftada toplam 5-15 dakika. Fitness seviyenize ve hedeflerinize göre ayarlayın.',
      },
    ],

    references: [
      'American Heart Association - Hedef Kalp Atış Hızları Tablosu. https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates',
      'Karvonen MJ, Kentala E, Mustala O. "The effects of training on heart rate; a longitudinal study." Ann Med Exp Biol Fenn. 1957;35(3):307-15.',
      'Tanaka H, Monahan KD, Seals DR. "Age-predicted maximal heart rate revisited." J Am Coll Cardiol. 2001;37(1):153-156.',
      'American College of Sports Medicine. ACSM\'s Egzersiz Test ve Reçete Kılavuzu. 11. baskı. Wolters Kluwer, 2021.',
      'Seiler S. "What is best practice for training intensity and duration distribution in endurance athletes?" Int J Sports Physiol Perform. 2010;5(3):276-291.',
    ],
  },
};
