import { CalculatorContent } from '@/types/calculator';

export const targetHeartRateContent: CalculatorContent = {
  en: {
    whatIs: `A Target Heart Rate Calculator determines the ideal heart rate range you should maintain during exercise to achieve specific fitness goals. Unlike a general heart rate zone calculator that shows all five training zones, a target heart rate calculator focuses on finding *your* personalized optimal zone based on your age, resting heart rate, current fitness level, and specific exercise objective — whether that is fat burning, cardiovascular improvement, endurance building, or peak performance training.

Your target heart rate is expressed as a percentage of your maximum heart rate (MHR). The American Heart Association recommends that during moderate-intensity exercise, your target heart rate should be between 50% and 70% of your MHR, while during vigorous exercise, it should be between 70% and 85%. However, these ranges vary significantly based on individual fitness levels and training goals.

This calculator uses the Tanaka formula (208 - 0.7 × age), which research has shown to be more accurate than the traditional 220-age formula, especially for older adults. When you provide your resting heart rate, the calculator switches to the Karvonen method, which uses your Heart Rate Reserve (HRR = MHR - RHR) for more personalized and accurate target zones that account for your current cardiovascular fitness.

Understanding and training within your target heart rate zone is one of the most effective ways to ensure you are exercising at the right intensity — not too easy to be ineffective, and not so hard that you risk overtraining or injury.`,

    howToCalculate: `To find your target heart rate:\n\n1. **Calculate your maximum heart rate (MHR)**: Using the Tanaka formula: MHR = 208 - (0.7 × age). For a 35-year-old: MHR = 208 - (0.7 × 35) = 183.5 ≈ 184 bpm.\n\n2. **Measure your resting heart rate (optional)**: Take your pulse for 60 seconds first thing in the morning before getting out of bed. Count for three consecutive mornings and average the results for best accuracy.\n\n3. **Select your fitness level**: This determines the intensity range appropriate for your current conditioning.\n\n4. **Choose your exercise goal**: Different goals require different intensity zones.\n\n5. **Calculate your target zone**:\n   - **Without resting HR**: Target = MHR × percentage range\n   - **With resting HR (Karvonen)**: Target = ((MHR - RHR) × percentage) + RHR\n\n**Example** (35 years old, resting HR 65, intermediate, fat burning):\n- MHR = 208 - (0.7 × 35) = 184 bpm\n- HRR = 184 - 65 = 119 bpm\n- Target min = (119 × 0.55) + 65 = 130 bpm\n- Target max = (119 × 0.70) + 65 = 148 bpm\n- Target Zone: 130-148 bpm`,

    formulaDetails: `This calculator employs two scientifically validated formulas:\n\n**Tanaka Formula for Maximum Heart Rate:**\nMHR = 208 - (0.7 × age)\n\nThis formula was developed by Tanaka, Monahan, and Seals (2001) through a meta-analysis of 351 studies involving 18,712 subjects. It is considered more accurate than the traditional 220-age formula, particularly for individuals over 40.\n\n**Karvonen Formula (Heart Rate Reserve Method):**\nTarget HR = ((MHR - RHR) × %Intensity) + RHR\n\nWhere:\n- MHR = Maximum Heart Rate\n- RHR = Resting Heart Rate\n- HRR = Heart Rate Reserve (MHR - RHR)\n- %Intensity = Desired exercise intensity as decimal\n\nThe Karvonen method is preferred because it accounts for individual fitness levels through resting heart rate. A well-trained athlete with a resting HR of 45 bpm will have very different absolute target values compared to a sedentary person with a resting HR of 80 bpm, even if they are the same age.\n\n**Comparison Example (30-year-old):**\n- Tanaka MHR: 208 - (0.7 × 30) = 187 bpm\n- Traditional MHR: 220 - 30 = 190 bpm\n- Difference: 3 bpm (increases with age)`,

    interpretation: `**Understanding Your Target Heart Rate Results:**\n\nYour target heart rate zone represents the "sweet spot" for your chosen exercise goal. Here is how to interpret results for each goal:\n\n**Fat Burning (50-70% MHR):**\nAt this intensity, your body uses a higher proportion of fat for energy. While you burn fewer total calories per minute compared to higher intensities, a greater percentage comes from fat stores. This zone is sustainable for longer durations (30-60+ minutes), making it ideal for weight management.\n\n**Cardio Fitness (60-80% MHR):**\nThis zone strengthens your heart muscle, improves oxygen delivery to muscles, and enhances overall cardiovascular efficiency. You should be able to speak in short sentences but not sing.\n\n**Endurance (65-85% MHR):**\nTraining at this intensity builds your aerobic base and improves your body's ability to sustain effort over extended periods. Marathon runners and long-distance cyclists primarily train in this zone.\n\n**Performance (75-95% MHR):**\nHigh-intensity training that pushes your lactate threshold higher, improving speed and power. This zone should only be maintained for short intervals (1-8 minutes) with adequate recovery.\n\n**General Fitness (50-80% MHR):**\nA balanced range that provides overall health benefits without overtraining. Suitable for most recreational exercisers.`,

    limitations: `**Limitations of target heart rate calculations:**\n\n1. **Formula Accuracy**: Even the improved Tanaka formula has a standard deviation of ±7-11 bpm. Your actual maximum heart rate may differ significantly from the calculated value.\n\n2. **Individual Variation**: Genetics plays a major role in determining maximum heart rate. Two people of the same age can have maximum heart rates differing by 20+ bpm.\n\n3. **Medication Effects**: Beta-blockers, calcium channel blockers, and other cardiovascular medications can significantly lower heart rate, making standard calculations unreliable.\n\n4. **Environmental Factors**: Heat, humidity, altitude, dehydration, stress, sleep deprivation, and caffeine intake all affect heart rate during exercise.\n\n5. **Cardiac Drift**: During prolonged exercise, heart rate gradually increases even at constant effort due to dehydration and thermoregulation, which can push you out of your target zone.\n\n6. **Sport-Specific Variation**: Maximum heart rate differs across activities — running typically produces higher max HR than cycling or swimming.\n\n7. **Fitness Adaptations**: As your fitness improves, the same heart rate represents a different relative intensity. Zones should be recalculated every 2-3 months.\n\nFor the most accurate target heart rate, consider a graded exercise test (GXT) or VO2 max test administered by a qualified exercise physiologist.`,

    healthRisks: `**Health Considerations for Heart Rate-Based Training:**\n\n**Who should consult a doctor before using target heart rate zones:**\n- Anyone with known heart disease, arrhythmia, or heart murmur\n- People taking cardiovascular medications (beta-blockers, ACE inhibitors)\n- Individuals with high blood pressure (hypertension)\n- People with diabetes (Type 1 or Type 2)\n- Anyone over 45 (men) or 55 (women) starting a new exercise program\n- Individuals with a family history of sudden cardiac death\n- People who experience chest pain, dizziness, or shortness of breath during exercise\n\n**Warning signs to stop exercising immediately:**\n- Chest pain, tightness, or pressure\n- Severe shortness of breath disproportionate to effort\n- Dizziness, lightheadedness, or feeling faint\n- Heart palpitations or irregular heartbeat\n- Nausea or vomiting during exercise\n- Pain radiating to jaw, arm, or back\n- Unusual or extreme fatigue\n\n**Safe training principles:**\n- Follow the 10% rule: increase training volume by no more than 10% per week\n- Include at least 1-2 rest days per week\n- Stay hydrated before, during, and after exercise\n- Listen to your body — perceived exertion is valuable alongside heart rate data\n- Allow adequate warm-up (5-10 min) and cool-down (5-10 min) every session`,

    categories: [
      {
        range: '50 – 60% Max HR',
        label: 'Warm-Up / Recovery Zone',
        description: 'Very light effort ideal for warming up, cooling down, and active recovery days. Conversation is easy and comfortable. This zone prepares your cardiovascular system for harder work and promotes blood flow for recovery.',
        color: '#10B981',
      },
      {
        range: '60 – 70% Max HR',
        label: 'Fat Burning Zone',
        description: 'Light to moderate effort where the body primarily uses fat as fuel. You can talk comfortably in full sentences. Ideal for weight management and building aerobic base fitness. Sustainable for 30-60+ minutes.',
        color: '#22C55E',
      },
      {
        range: '70 – 80% Max HR',
        label: 'Aerobic / Cardio Zone',
        description: 'Moderate to hard effort that strengthens the heart and improves oxygen delivery. Speaking becomes harder — short sentences only. This is where most cardiovascular fitness gains occur.',
        color: '#F59E0B',
      },
      {
        range: '80 – 90% Max HR',
        label: 'Anaerobic / Threshold Zone',
        description: 'Hard effort near your lactate threshold. Only short phrases are possible. Improves speed, power, and the ability to sustain higher intensities. Limit to 1-2 sessions per week.',
        color: '#F97316',
      },
      {
        range: '90 – 100% Max HR',
        label: 'Maximum Effort Zone',
        description: 'All-out effort sustainable only for 10-60 seconds. Speaking is impossible. Reserved for sprint intervals and peak performance training. Requires adequate recovery between efforts.',
        color: '#EF4444',
      },
    ],

    alternativeMeasures: 'Rate of Perceived Exertion (RPE) on a 1-10 scale is the simplest alternative to heart rate monitoring — a 4-5 corresponds roughly to the fat burning zone, 6-7 to the aerobic zone, and 8-10 to anaerobic and maximum effort. The Talk Test is another practical method: if you can speak in full sentences you are in the lower zones, short sentences indicate moderate intensity, and inability to talk means you are in the high-intensity zones. Lactate threshold testing provides precise physiological zone boundaries through blood lactate measurements at increasing exercise intensities, and is the gold standard for competitive athletes. VO2 max testing simultaneously measures oxygen consumption and heart rate to establish your individual ventilatory thresholds. Power meters (cycling) and GPS pace (running) provide objective intensity measures that are not affected by cardiac drift, dehydration, or temperature. Heart Rate Variability (HRV) measured daily can guide training intensity decisions by indicating your autonomic nervous system recovery status.',

    demographicDifferences: 'The Tanaka formula (208 - 0.7 × age) applies equally to men and women, as research has shown no significant gender difference in maximum heart rate at the same age. However, women tend to have slightly higher resting heart rates (2-5 bpm higher on average), which affects Karvonen method calculations. Trained endurance athletes typically have resting heart rates of 40-55 bpm (some elite athletes below 40), which dramatically shifts their Karvonen-based target zones compared to untrained individuals with resting rates of 70-85 bpm. Children and adolescents under 15 have naturally higher maximum heart rates (often 200-210+ bpm) and the adult formulas do not apply to them. Older adults may have actual maximum heart rates that differ more from formula predictions, and should ideally use exercise testing rather than formulas. Individuals of African descent may have slightly different heart rate responses to exercise compared to Caucasian populations, though the clinical significance of this is debated. Altitude significantly affects heart rate — at elevations above 1,500 meters, expect heart rates 10-20% higher for the same exercise intensity.',

    medicalDisclaimer: 'This target heart rate calculator provides estimates based on age-derived formulas and general exercise physiology principles. It is intended for educational and informational purposes only and should not be considered medical advice, diagnosis, or treatment. The calculated target heart rate zones are general guidelines that may not be appropriate for individuals with cardiovascular conditions, those taking heart rate-altering medications, or people with other health concerns. Always consult your physician or a qualified healthcare professional before beginning any new exercise program, especially if you have heart disease, high blood pressure, diabetes, or other chronic conditions. If you experience chest pain, severe shortness of breath, dizziness, or any unusual symptoms during exercise, stop immediately and seek medical attention. Individual maximum heart rates can vary significantly from formula-based predictions — for the most accurate results, consider a supervised graded exercise test.',

    tips: [
      'Use the Karvonen method (provide your resting heart rate) for more personalized and accurate target zones',
      'Measure resting heart rate first thing in the morning for 3 days and average the results',
      'A heart rate monitor chest strap is more accurate than wrist-based optical sensors during high-intensity exercise',
      'Warm up for 5-10 minutes in the lower zones before exercising in your target zone',
      'Heart rate lags behind effort — wait 1-2 minutes after changing intensity for it to stabilize',
      'Recalculate your target zones every 2-3 months as your fitness improves',
      'The "talk test" is a simple backup: if you can barely speak, you are above your aerobic target',
      'Dehydration can raise heart rate by 10-20 bpm — always stay well hydrated during exercise',
      'Do not train at high intensity (above 85% MHR) more than 2-3 times per week',
      'Track your resting heart rate over time — a lower RHR indicates improving cardiovascular fitness',
    ],

    faqs: [
      {
        question: 'What is a good target heart rate for exercise?',
        answer: 'For most adults doing moderate exercise, a target heart rate of 50-70% of maximum heart rate is appropriate. For vigorous exercise, aim for 70-85% of MHR. The exact target depends on your fitness level and goals. Beginners should start at the lower end (50-60%) and gradually increase intensity as fitness improves.',
      },
      {
        question: 'How do I find my resting heart rate?',
        answer: 'Measure your resting heart rate first thing in the morning before getting out of bed. Place two fingers on your wrist (radial pulse) or neck (carotid pulse) and count beats for 60 seconds. Repeat for 3 consecutive mornings and average the results. Normal resting heart rate for adults is 60-100 bpm, while athletes may have 40-60 bpm.',
      },
      {
        question: 'Is the Tanaka formula better than the 220-age formula?',
        answer: 'Yes. Research by Tanaka et al. (2001) analyzing 351 studies found that 208 - (0.7 × age) is more accurate than 220 - age, especially for people over 40. The traditional formula tends to overestimate max HR in younger adults and underestimate it in older adults. However, both are estimates — your actual max HR may differ by 10-15 bpm.',
      },
      {
        question: 'Why is my heart rate higher than my target zone during exercise?',
        answer: 'Several factors can elevate heart rate above your target: dehydration, heat/humidity, caffeine, stress, poor sleep, illness, or simply being unfit for the exercise intensity. If consistently above target, lower your exercise intensity. If you experience chest pain or dizziness at elevated heart rates, stop and consult a doctor.',
      },
      {
        question: 'What is the best heart rate zone for burning fat?',
        answer: 'The "fat burning zone" is typically 50-70% of max heart rate. At this lower intensity, a higher percentage of calories comes from fat. However, higher-intensity exercise burns more total calories and more total fat per hour. The most effective approach for fat loss is a mix of both moderate-intensity steady-state and high-intensity interval training.',
      },
      {
        question: 'How often should I recalculate my target heart rate?',
        answer: 'Recalculate every 2-3 months or whenever your fitness level changes significantly. As you get fitter, your resting heart rate typically decreases, which changes your Karvonen-based zones. Age-based calculations change minimally year to year, but updating your resting heart rate keeps the Karvonen method accurate.',
      },
      {
        question: 'Can I exercise above my target heart rate zone?',
        answer: 'Briefly exceeding your target zone during interval training is normal and beneficial for fitness improvement. However, sustained exercise well above your target zone increases injury risk, promotes overtraining, and is not more effective for most fitness goals. If your heart rate is consistently too high, reduce exercise intensity.',
      },
      {
        question: 'Do medications affect my target heart rate?',
        answer: 'Yes. Beta-blockers can reduce maximum and exercise heart rates by 20-30+ bpm, making standard target heart rate calculations inaccurate. Stimulant medications, decongestants, and some asthma medications can increase heart rate. If you take any heart rate-affecting medication, consult your doctor for appropriate exercise intensity guidelines.',
      },
    ],

    references: [
      'Tanaka, H., Monahan, K.D., & Seals, D.R. (2001). Age-predicted maximal heart rate revisited. Journal of the American College of Cardiology, 37(1), 153-156.',
      'American Heart Association. (2024). Target Heart Rates Chart. https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates',
      'Karvonen, M.J., Kentala, E., & Mustala, O. (1957). The effects of training on heart rate. Annales Medicinae Experimentalis et Biologiae Fenniae, 35, 307-315.',
      'American College of Sports Medicine. (2022). ACSM Guidelines for Exercise Testing and Prescription (11th ed.). Wolters Kluwer.',
      'Gulati, M., et al. (2010). Heart rate response to exercise stress testing in asymptomatic women. Circulation, 122(2), 130-137.',
      'Nes, B.M., et al. (2013). Age-predicted maximal heart rate in healthy subjects: The HUNT Fitness Study. Scandinavian Journal of Medicine & Science in Sports, 23(6), 697-704.',
      'World Health Organization. (2020). WHO guidelines on physical activity and sedentary behaviour. Geneva: World Health Organization.',
    ],
  },
  tr: {
    whatIs: `Hedef Kalp Atış Hızı Hesaplayıcı, belirli fitness hedeflerine ulaşmak için egzersiz sırasında korumanız gereken ideal kalp atış hızı aralığını belirler. Tüm beş antrenman bölgesini gösteren genel bir kalp atış hızı bölgesi hesaplayıcısının aksine, hedef kalp atış hızı hesaplayıcı yaşınıza, dinlenme kalp atış hızınıza, mevcut kondisyon seviyenize ve spesifik egzersiz hedefinize — ister yağ yakma, ister kardiyovasküler gelişim, ister dayanıklılık geliştirme, isterse zirve performans antrenmanı olsun — dayalı olarak *sizin* kişiselleştirilmiş optimal bölgenizi bulmaya odaklanır.

Hedef kalp atış hızınız, maksimum kalp atış hızınızın (MKH) yüzdesi olarak ifade edilir. Amerikan Kalp Derneği, orta yoğunluktaki egzersiz sırasında hedef kalp atış hızınızın MKH'nizin %50 ila %70'i arasında, yoğun egzersiz sırasında ise %70 ila %85 arasında olması gerektiğini önermektedir. Ancak bu aralıklar bireysel kondisyon seviyelerine ve antrenman hedeflerine göre önemli ölçüde değişir.

Bu hesaplayıcı, özellikle yaşlı yetişkinler için geleneksel 220-yaş formülünden daha doğru olduğu araştırmalarla gösterilmiş Tanaka formülünü (208 - 0,7 × yaş) kullanır. Dinlenme kalp atış hızınızı girdiğinizde, hesaplayıcı mevcut kardiyovasküler kondisyonunuzu hesaba katan daha kişiselleştirilmiş ve doğru hedef bölgeler için Kalp Atış Hızı Rezervinizi (KHR = MKH - DKH) kullanan Karvonen yöntemine geçer.

Hedef kalp atış hızı bölgenizi anlayarak ve bu bölgede antrenman yaparak egzersizin doğru yoğunlukta olmasını sağlarsınız — etkisiz olacak kadar kolay değil ve aşırı antrenman veya yaralanma riski oluşturacak kadar da zor değil.`,

    howToCalculate: `Hedef kalp atış hızınızı bulmak için:\n\n1. **Maksimum kalp atış hızınızı (MKH) hesaplayın**: Tanaka formülü kullanarak: MKH = 208 - (0,7 × yaş). 35 yaşındaki biri için: MKH = 208 - (0,7 × 35) = 183,5 ≈ 184 atım/dk.\n\n2. **Dinlenme kalp atış hızınızı ölçün (isteğe bağlı)**: Sabah yataktan kalkmadan önce nabzınızı 60 saniye boyunca sayın. En iyi doğruluk için arka arkaya üç sabah ölçün ve sonuçların ortalamasını alın.\n\n3. **Kondisyon seviyenizi seçin**: Bu, mevcut durumunuza uygun yoğunluk aralığını belirler.\n\n4. **Egzersiz hedefinizi seçin**: Farklı hedefler farklı yoğunluk bölgeleri gerektirir.\n\n5. **Hedef bölgenizi hesaplayın**:\n   - **Dinlenme KAH olmadan**: Hedef = MKH × yüzde aralığı\n   - **Dinlenme KAH ile (Karvonen)**: Hedef = ((MKH - DKH) × yüzde) + DKH\n\n**Örnek** (35 yaş, dinlenme KAH 65, orta seviye, yağ yakma):\n- MKH = 208 - (0,7 × 35) = 184 atım/dk\n- KHR = 184 - 65 = 119 atım/dk\n- Hedef min = (119 × 0,55) + 65 = 130 atım/dk\n- Hedef maks = (119 × 0,70) + 65 = 148 atım/dk\n- Hedef Bölge: 130-148 atım/dk`,

    formulaDetails: `Bu hesaplayıcı bilimsel olarak doğrulanmış iki formül kullanır:\n\n**Tanaka Formülü (Maksimum Kalp Atış Hızı):**\nMKH = 208 - (0,7 × yaş)\n\nBu formül Tanaka, Monahan ve Seals (2001) tarafından 18.712 deneği kapsayan 351 çalışmanın meta-analizi ile geliştirilmiştir. Özellikle 40 yaş üstü bireyler için geleneksel 220-yaş formülünden daha doğru kabul edilir.\n\n**Karvonen Formülü (Kalp Atış Hızı Rezervi Yöntemi):**\nHedef KAH = ((MKH - DKH) × %Yoğunluk) + DKH\n\nBurada:\n- MKH = Maksimum Kalp Atış Hızı\n- DKH = Dinlenme Kalp Atış Hızı\n- KHR = Kalp Hızı Rezervi (MKH - DKH)\n- %Yoğunluk = Ondalık olarak istenen egzersiz yoğunluğu\n\nKarvonen yöntemi, dinlenme kalp atış hızı aracılığıyla bireysel kondisyon seviyelerini hesaba kattığı için tercih edilir. Dinlenme KAH'ı 45 atım/dk olan iyi antrenmanlı bir sporcu, aynı yaşta olsalar bile dinlenme KAH'ı 80 atım/dk olan hareketsiz bir kişiden çok farklı mutlak hedef değerlerine sahip olacaktır.`,

    interpretation: `**Hedef Kalp Atış Hızı Sonuçlarınızı Anlama:**\n\nHedef kalp atış hızı bölgeniz, seçtiğiniz egzersiz hedefi için "ideal noktayı" temsil eder. Her hedef için sonuçları şu şekilde yorumlayabilirsiniz:\n\n**Yağ Yakma (%50-70 MKH):**\nBu yoğunlukta vücudunuz enerji için daha yüksek oranda yağ kullanır. Yüksek yoğunluklara kıyasla dakikada daha az toplam kalori yaksanız da, daha büyük bir yüzde yağ depolarından gelir. Bu bölge daha uzun süreler boyunca sürdürülebilirdir (30-60+ dakika) ve kilo yönetimi için idealdir.\n\n**Kardio Kondisyon (%60-80 MKH):**\nBu bölge kalp kasınızı güçlendirir, kaslara oksijen iletimini iyileştirir ve genel kardiyovasküler verimliliği artırır. Kısa cümlelerle konuşabilmeli ama şarkı söyleyememelisiniz.\n\n**Dayanıklılık (%65-85 MKH):**\nBu yoğunlukta antrenman aerobik tabanınızı geliştirir ve vücudunuzun uzun süreler boyunca efor sürdürme kapasitesini artırır. Maraton koşucuları ve uzun mesafe bisikletçileri ağırlıklı olarak bu bölgede antrenman yapar.\n\n**Performans (%75-95 MKH):**\nLaktat eşiğinizi yukarı iten, hız ve gücü artıran yüksek yoğunluklu antrenman. Bu bölge yalnızca kısa aralıklarla (1-8 dakika) ve yeterli toparlanma ile sürdürülmelidir.\n\n**Genel Kondisyon (%50-80 MKH):**\nAşırı antrenman olmadan genel sağlık faydaları sağlayan dengeli bir aralık. Çoğu rekreasyonel egzersiz yapan kişi için uygundur.`,

    limitations: `**Hedef kalp atış hızı hesaplamalarının sınırlılıkları:**\n\n1. **Formül Doğruluğu**: Geliştirilmiş Tanaka formülü bile ±7-11 atım/dk standart sapmaya sahiptir. Gerçek maksimum kalp atış hızınız hesaplanan değerden önemli ölçüde farklı olabilir.\n\n2. **Bireysel Farklılıklar**: Genetik, maksimum kalp atış hızının belirlenmesinde büyük rol oynar. Aynı yaştaki iki kişinin maksimum kalp atış hızları 20+ atım/dk farklı olabilir.\n\n3. **İlaç Etkileri**: Beta-blokerler, kalsiyum kanal blokerleri ve diğer kardiyovasküler ilaçlar kalp atış hızını önemli ölçüde düşürerek standart hesaplamaları güvenilmez kılabilir.\n\n4. **Çevresel Faktörler**: Sıcaklık, nem, yükseklik, dehidrasyon, stres, uyku yoksunluğu ve kafein alımı egzersiz sırasındaki kalp atış hızını etkiler.\n\n5. **Kardiyak Sürüklenme**: Uzun süreli egzersiz sırasında sabit efor olsa bile kalp atış hızı dehidrasyon ve termoregülasyon nedeniyle kademeli olarak artar.\n\n6. **Spora Özgü Farklılıklar**: Maksimum kalp atış hızı aktiviteler arasında farklılık gösterir — koşu genellikle bisikletten veya yüzmeden daha yüksek maks KAH üretir.\n\n7. **Kondisyon Adaptasyonları**: Kondisyonunuz geliştikçe aynı kalp atış hızı farklı bir göreceli yoğunluğu temsil eder. Bölgeler her 2-3 ayda bir yeniden hesaplanmalıdır.\n\nEn doğru hedef kalp atış hızı için nitelikli bir egzersiz fizyoloğu tarafından uygulanan kademeli egzersiz testi (GXT) veya VO2 maks testi yapılması önerilir.`,

    healthRisks: `**Kalp Atış Hızı Tabanlı Antrenman İçin Sağlık Hususları:**\n\n**Hedef kalp atış hızı bölgelerini kullanmadan önce doktora danışması gerekenler:**\n- Bilinen kalp hastalığı, aritmi veya kalp üfürümü olanlar\n- Kardiyovasküler ilaç kullananlar (beta-blokerler, ACE inhibitörleri)\n- Yüksek tansiyon (hipertansiyon) hastaları\n- Diyabet hastaları (Tip 1 veya Tip 2)\n- Yeni bir egzersiz programına başlayan 45 yaş üstü erkekler veya 55 yaş üstü kadınlar\n- Ailesinde ani kardiyak ölüm öyküsü olanlar\n- Egzersiz sırasında göğüs ağrısı, baş dönmesi veya nefes darlığı yaşayanlar\n\n**Hemen egzersizi bırakmanız gereken uyarı işaretleri:**\n- Göğüs ağrısı, sıkışma veya baskı hissi\n- Eforla orantısız şiddetli nefes darlığı\n- Baş dönmesi, sersemlik veya bayılma hissi\n- Çarpıntı veya düzensiz kalp atışı\n- Egzersiz sırasında bulantı veya kusma\n- Çeneye, kola veya sırta yayılan ağrı\n\n**Güvenli antrenman ilkeleri:**\n- %10 kuralını takip edin: antrenman hacmini haftada %10'dan fazla artırmayın\n- Haftada en az 1-2 dinlenme günü ekleyin\n- Egzersiz öncesi, sırası ve sonrasında yeterli su için\n- Vücudunuzu dinleyin — algılanan efor, kalp atış hızı verileri yanında değerlidir`,

    categories: [
      {
        range: '%50 – %60 Maks KAH',
        label: 'Isınma / Toparlanma Bölgesi',
        description: 'Isınma, soğuma ve aktif toparlanma günleri için ideal çok hafif efor. Konuşma kolay ve rahattır. Bu bölge kardiyovasküler sisteminizi daha zorlu çalışmaya hazırlar ve toparlanma için kan akışını destekler.',
        color: '#10B981',
      },
      {
        range: '%60 – %70 Maks KAH',
        label: 'Yağ Yakma Bölgesi',
        description: 'Vücudun ağırlıklı olarak yağı yakıt olarak kullandığı hafiften ortaya efor. Tam cümlelerle rahatça konuşabilirsiniz. Kilo yönetimi ve aerobik taban kondisyon oluşturma için idealdir. 30-60+ dakika sürdürülebilir.',
        color: '#22C55E',
      },
      {
        range: '%70 – %80 Maks KAH',
        label: 'Aerobik / Kardio Bölgesi',
        description: 'Kalbi güçlendiren ve oksijen taşımayı iyileştiren orta-zor efor. Konuşma zorlaşır — sadece kısa cümleler mümkündür. Kardiyovasküler kondisyon kazanımlarının büyük bölümü bu bölgede gerçekleşir.',
        color: '#F59E0B',
      },
      {
        range: '%80 – %90 Maks KAH',
        label: 'Anaerobik / Eşik Bölgesi',
        description: 'Laktat eşiğinize yakın zor efor. Sadece kısa ifadeler mümkündür. Hız, güç ve daha yüksek yoğunlukları sürdürme kapasitesini geliştirir. Haftada 1-2 seans ile sınırlayın.',
        color: '#F97316',
      },
      {
        range: '%90 – %100 Maks KAH',
        label: 'Maksimum Efor Bölgesi',
        description: 'Sadece 10-60 saniye sürdürülebilir tam efor. Konuşma imkansızdır. Sprint intervalleri ve zirve performans antrenmanı için ayrılmıştır. Eforlar arasında yeterli toparlanma gerektirir.',
        color: '#EF4444',
      },
    ],

    alternativeMeasures: 'Algılanan Efor Derecesi (RPE) 1-10 skalasında kalp atış hızı izlemenin en basit alternatifidir — 4-5 kabaca yağ yakma bölgesine, 6-7 aerobik bölgeye ve 8-10 anaerobik ve maksimum efora karşılık gelir. Konuşma Testi bir başka pratik yöntemdir: tam cümlelerle konuşabiliyorsanız alt bölgelerdesiniz, kısa cümleler orta yoğunluğu, konuşamamak ise yüksek yoğunluklu bölgelerde olduğunuzu gösterir. Laktat eşik testi, artan egzersiz yoğunluklarında kan laktat ölçümleri yoluyla kesin fizyolojik bölge sınırları sağlar ve yarışmacı sporcular için altın standarttır. VO2 maks testi aynı anda oksijen tüketimini ve kalp atış hızını ölçerek bireysel ventilasyon eşiklerinizi belirler. Güç ölçerler (bisiklet) ve GPS tempo (koşu), kardiyak sürüklenme, dehidrasyon veya sıcaklıktan etkilenmeyen objektif yoğunluk ölçümleri sağlar. Günlük ölçülen Kalp Atış Hızı Değişkenliği (HRV), otonom sinir sistemi toparlanma durumunuzu göstererek antrenman yoğunluğu kararlarına rehberlik edebilir.',

    demographicDifferences: 'Tanaka formülü (208 - 0,7 × yaş) erkekler ve kadınlar için eşit olarak uygulanır; araştırmalar aynı yaşta maksimum kalp atış hızında önemli bir cinsiyet farkı olmadığını göstermiştir. Ancak kadınlar ortalama olarak biraz daha yüksek dinlenme kalp atış hızına sahip olma eğilimindedir (ortalama 2-5 atım/dk daha yüksek), bu da Karvonen yöntemi hesaplamalarını etkiler. Antrenmanlı dayanıklılık sporcularının dinlenme kalp atış hızları genellikle 40-55 atım/dk arasındadır (bazı elit sporcular 40\'ın altında), bu da Karvonen tabanlı hedef bölgelerini dinlenme hızları 70-85 atım/dk olan antrenmansız bireylere kıyasla önemli ölçüde değiştirir. 15 yaş altı çocuklar ve ergenler doğal olarak daha yüksek maksimum kalp atış hızlarına sahiptir (genellikle 200-210+ atım/dk) ve yetişkin formülleri onlar için geçerli değildir. Yaşlı yetişkinlerin gerçek maksimum kalp atış hızları formül tahminlerinden daha fazla farklılık gösterebilir ve ideal olarak formüller yerine egzersiz testi kullanmaları gerekir. Rakım kalp atış hızını önemli ölçüde etkiler — 1.500 metrenin üzerindeki yüksekliklerde aynı egzersiz yoğunluğu için %10-20 daha yüksek kalp atış hızları bekleyin.',

    medicalDisclaimer: 'Bu hedef kalp atış hızı hesaplayıcı, yaşa dayalı formüller ve genel egzersiz fizyolojisi ilkelerine dayalı tahminler sunar. Yalnızca eğitim ve bilgilendirme amaçlıdır ve tıbbi tavsiye, teşhis veya tedavi olarak değerlendirilmemelidir. Hesaplanan hedef kalp atış hızı bölgeleri, kardiyovasküler rahatsızlıkları olan, kalp atış hızını etkileyen ilaçlar kullanan veya diğer sağlık endişeleri olan bireyler için uygun olmayabilecek genel kılavuzlardır. Özellikle kalp hastalığı, yüksek tansiyon, diyabet veya diğer kronik rahatsızlıklarınız varsa herhangi bir yeni egzersiz programına başlamadan önce her zaman doktorunuza veya nitelikli bir sağlık uzmanına danışın. Egzersiz sırasında göğüs ağrısı, şiddetli nefes darlığı, baş dönmesi veya olağandışı belirtiler yaşarsanız hemen durun ve tıbbi yardım alın.',

    tips: [
      'Daha kişiselleştirilmiş ve doğru hedef bölgeler için Karvonen yöntemini kullanın (dinlenme kalp atış hızınızı girin)',
      'En doğru sonuç için sabah kalkmadan önce 3 gün boyunca dinlenme kalp atış hızınızı ölçün ve ortalamasını alın',
      'Göğüs bandı kalp atış hızı monitörü, yüksek yoğunluklu egzersizde bilek tabanlı optik sensörlerden daha doğrudur',
      'Hedef bölgenizde egzersiz yapmadan önce alt bölgelerde 5-10 dakika ısınma yapın',
      'Kalp atış hızı eforun gerisinde kalır — yoğunluğu değiştirdikten sonra stabilize olması için 1-2 dakika bekleyin',
      'Kondisyonunuz geliştikçe hedef bölgelerinizi her 2-3 ayda bir yeniden hesaplayın',
      'Konuşma testi basit bir yedektir: zar zor konuşabiliyorsanız aerobik hedefinizin üzerindesinizdir',
      'Dehidrasyon kalp atış hızını 10-20 atım/dk artırabilir — egzersiz sırasında mutlaka yeterli su için',
      'Yüksek yoğunlukta (%85 MKH üzeri) haftada 2-3 kezden fazla antrenman yapmayın',
      'Dinlenme kalp atış hızınızı zaman içinde takip edin — düşen DKH gelişen kardiyovasküler kondisyonu gösterir',
    ],

    faqs: [
      {
        question: 'Egzersiz için iyi bir hedef kalp atış hızı nedir?',
        answer: 'Orta yoğunlukta egzersiz yapan çoğu yetişkin için maksimum kalp atış hızının %50-70\'i uygun bir hedef kalp atış hızıdır. Yoğun egzersiz için MKH\'nin %70-85\'ini hedefleyin. Kesin hedef kondisyon seviyenize ve amaçlarınıza bağlıdır. Başlangıç seviyesindekiler alt uçtan (%50-60) başlamalı ve kondisyon geliştikçe yoğunluğu kademeli olarak artırmalıdır.',
      },
      {
        question: 'Dinlenme kalp atış hızımı nasıl bulurum?',
        answer: 'Dinlenme kalp atış hızınızı sabah yataktan kalkmadan önce ölçün. İki parmağınızı bileğinize (radyal nabız) veya boynunuza (karotid nabız) yerleştirin ve 60 saniye boyunca atışları sayın. En iyi doğruluk için arka arkaya 3 sabah tekrarlayın ve sonuçların ortalamasını alın. Yetişkinler için normal dinlenme kalp atış hızı 60-100 atım/dk\'dır, sporcular için ise 40-60 atım/dk olabilir.',
      },
      {
        question: 'Tanaka formülü 220-yaş formülünden daha mı iyi?',
        answer: 'Evet. Tanaka ve arkadaşları (2001) tarafından 351 çalışmayı analiz eden araştırma, 208 - (0,7 × yaş) formülünün özellikle 40 yaş üstü kişiler için 220 - yaş formülünden daha doğru olduğunu bulmuştur. Geleneksel formül genç yetişkinlerde maks KAH\'ı olduğundan yüksek, yaşlı yetişkinlerde ise düşük tahmin etme eğilimindedir.',
      },
      {
        question: 'Egzersiz sırasında kalp atış hızım neden hedef bölgemden yüksek?',
        answer: 'Birçok faktör kalp atış hızını hedefinizin üzerine çıkarabilir: dehidrasyon, sıcaklık/nem, kafein, stres, kötü uyku, hastalık veya egzersiz yoğunluğu için yetersiz kondisyon. Sürekli hedefin üzerindeyseniz egzersiz yoğunluğunuzu azaltın. Yüksek kalp atış hızlarında göğüs ağrısı veya baş dönmesi yaşıyorsanız durun ve doktora danışın.',
      },
      {
        question: 'Yağ yakmak için en iyi kalp atış hızı bölgesi hangisidir?',
        answer: '"Yağ yakma bölgesi" genellikle maks kalp atış hızının %50-70\'idir. Bu düşük yoğunlukta kalorilerin daha yüksek yüzdesi yağdan gelir. Ancak daha yüksek yoğunluklu egzersiz saat başına daha fazla toplam kalori ve daha fazla toplam yağ yakar. Yağ kaybı için en etkili yaklaşım hem orta yoğunluklu sabit tempolu hem de yüksek yoğunluklu interval antrenmanının karışımıdır.',
      },
      {
        question: 'Hedef kalp atış hızımı ne sıklıkla yeniden hesaplamalıyım?',
        answer: 'Her 2-3 ayda bir veya kondisyon seviyeniz önemli ölçüde değiştiğinde yeniden hesaplayın. Kondisyonunuz arttıkça dinlenme kalp atış hızınız genellikle düşer, bu da Karvonen tabanlı bölgelerinizi değiştirir. Yaşa dayalı hesaplamalar yıldan yıla çok az değişir, ancak dinlenme kalp atış hızınızı güncellemek Karvonen yöntemini doğru tutar.',
      },
      {
        question: 'Hedef kalp atış hızı bölgemin üzerinde egzersiz yapabilir miyim?',
        answer: 'İnterval antrenmanı sırasında hedef bölgenizi kısa süreli aşmak normal ve kondisyon gelişimi için faydalıdır. Ancak hedef bölgenizin çok üzerinde sürekli egzersiz yaralanma riskini artırır, aşırı antrenmanı teşvik eder ve çoğu fitness hedefi için daha etkili değildir. Kalp atış hızınız sürekli çok yüksekse egzersiz yoğunluğunu azaltın.',
      },
      {
        question: 'İlaçlar hedef kalp atış hızımı etkiler mi?',
        answer: 'Evet. Beta-blokerler maksimum ve egzersiz kalp atış hızlarını 20-30+ atım/dk düşürerek standart hedef kalp atış hızı hesaplamalarını yanlış kılabilir. Uyarıcı ilaçlar, dekonjestanlar ve bazı astım ilaçları kalp atış hızını artırabilir. Kalp atış hızını etkileyen herhangi bir ilaç kullanıyorsanız uygun egzersiz yoğunluğu kılavuzları için doktorunuza danışın.',
      },
    ],

    references: [
      'Tanaka, H., Monahan, K.D., & Seals, D.R. (2001). Age-predicted maximal heart rate revisited. Journal of the American College of Cardiology, 37(1), 153-156.',
      'American Heart Association. (2024). Target Heart Rates Chart. https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates',
      'Karvonen, M.J., Kentala, E., & Mustala, O. (1957). The effects of training on heart rate. Annales Medicinae Experimentalis et Biologiae Fenniae, 35, 307-315.',
      'American College of Sports Medicine. (2022). ACSM Guidelines for Exercise Testing and Prescription (11th ed.). Wolters Kluwer.',
      'Gulati, M., et al. (2010). Heart rate response to exercise stress testing in asymptomatic women. Circulation, 122(2), 130-137.',
      'Nes, B.M., et al. (2013). Age-predicted maximal heart rate in healthy subjects: The HUNT Fitness Study. Scandinavian Journal of Medicine & Science in Sports, 23(6), 697-704.',
      'World Health Organization. (2020). WHO guidelines on physical activity and sedentary behaviour. Geneva: World Health Organization.',
    ],
  },
};
