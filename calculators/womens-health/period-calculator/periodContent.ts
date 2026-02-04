import { CalculatorContent } from '@/types/calculator';

export const periodContent: CalculatorContent = {
  en: {
    whatIs:
      'A **Period Calculator** (also called a menstrual cycle calculator or period tracker) is a tool that helps you predict when your next menstrual period will start, estimate your ovulation date, and identify your fertile window. By tracking your cycle patterns, this calculator provides valuable insights into your reproductive health and helps you plan ahead for menstruation, fertility, or contraception needs. The menstrual cycle is a complex interplay of hormonal changes that prepare the body for potential pregnancy each month. Understanding your cycle can help you recognize normal patterns, identify irregularities, manage symptoms, and make informed decisions about your reproductive health. Whether you\'re trying to conceive, avoid pregnancy, or simply want to understand your body better, tracking your period provides essential information about your overall health. This calculator uses your last menstrual period (LMP) date and average cycle length to predict: next period dates, ovulation timing, fertile window (the 6-7 day window when conception is most likely), cycle phases, and PMS timing.',

    howToCalculate:
      'To use the Period Calculator, you need three pieces of information: (1) Last Period Start Date - the first day of your most recent period when bleeding began; (2) Average Cycle Length - number of days from the first day of one period to the first day of the next (default is 28 days, normal range is 21-35 days); (3) Period Duration - how long your period typically lasts (default is 5 days, normal range is 3-7 days). Enter your last period date by selecting the first day bleeding started. If you track your cycles, use your average cycle length; if unsure, 28 days is the most common. Input how many days bleeding typically lasts. The calculator will predict your next 12 periods, estimate ovulation at 14 days before your next period, and show your fertile window (5 days before ovulation plus ovulation day). Results include next period date, days until next period, current cycle day, ovulation date, fertile window dates, future predictions calendar, and current cycle phase.',

    formulaDetails:
      'The calculator uses scientifically-validated methods. **Ovulation Prediction Formula**: Ovulation Day = Next Period Start Date - 14 days. The luteal phase (from ovulation to next period) is consistently about 14 days for most women and is the most reliable part of the cycle. **Next Period Prediction**: Next Period Date = Last Period Date + Average Cycle Length, with future periods calculated by adding multiples of cycle length. **Fertile Window Calculation**: Fertile Window Start = Ovulation Date - 5 days, Fertile Window End = Ovulation Date + 1 day, totaling 6-7 days. Sperm can survive up to 5 days in the female reproductive tract, while an egg is viable for about 24 hours after ovulation. **Cycle Classification**: Short Cycle (<21 days), Normal Cycle (21-35 days, average 28), Long Cycle (36-45 days), Irregular (>45 days or highly variable). **Hormonal Timeline**: Days 1-5 (Menstruation) - estrogen and progesterone at lowest levels, prostaglandins trigger uterine contractions; Days 6-13 (Follicular Phase) - FSH rises, follicles develop, estrogen increases, endometrium thickens; Day 14 (Ovulation) - LH surge, mature egg released, estrogen peaks then drops; Days 15-28 (Luteal Phase) - progesterone rises from corpus luteum, endometrium prepares for implantation, PMS symptoms may occur if no pregnancy.',

    interpretation:
      'Understanding your results is key to cycle awareness. **Cycle Regularity**: Regular cycles (21-35 days) provide most reliable predictions and indicate consistent hormonal patterns. Short cycles (<21 days) may indicate hormonal imbalances or thyroid issues requiring medical consultation. Long cycles (36-45 days) can be normal but may affect fertility. Irregular cycles (>45 days or highly variable) may indicate PCOS, stress, weight changes, or other hormonal issues - medical evaluation recommended. **Fertile Window Insights**: The fertile window is when pregnancy is most likely. Highest fertility occurs 2 days before ovulation through ovulation day. Good fertility extends 3-5 days before ovulation. For conception: have intercourse every 1-2 days during fertile window, especially the 2-3 days before ovulation. For contraception: remember the fertile window is an estimate; use reliable birth control methods rather than relying solely on cycle tracking (calendar method has 18-24% typical-use failure rate). **Cycle Phases**: Week 1 (Menstruation, Days 1-7) - energy may be lower, iron levels drop, focus on rest and iron-rich foods. Week 2 (Follicular, Days 8-14) - rising estrogen boosts mood and energy, best time for challenging workouts. Week 3 (Ovulation, Days 14-16) - peak fertility, heightened senses and libido, may experience mild ovulation pain. Week 4 (Luteal, Days 17-28) - PMS symptoms may appear, bloating and mood changes common, energy gradually decreases.',

    limitations:
      'Period calculators provide **estimates**, not guarantees. Actual ovulation can vary by ±2 days even in regular cycles. Stress, illness, travel, and lifestyle changes can affect timing. Results are based on average cycle data, not individual variations. **Not Suitable For**: Birth control (calendar method alone is not reliable contraception with 18-24% typical-use failure rate); diagnosing conditions (cannot diagnose PCOS, endometriosis, or other disorders); irregular cycles (predictions become less accurate); hormonal birth control users (pills create artificial cycles, not natural ovulation). **Factors Affecting Cycle Regularity**: stress and anxiety, significant weight loss or gain, intense exercise or training, illness or infection, medications (especially hormonal), breastfeeding, perimenopause, PCOS/thyroid disorders, travel and time zone changes, sleep pattern disruptions. **When Calculator May Be Inaccurate**: first period after childbirth, recently stopped hormonal birth control, during perimenopause transition, teens whose cycles haven\'t regulated yet (first 2-3 years after menarche), women with diagnosed hormonal disorders, during or after major illness or surgery. **Better Tracking Methods**: Basal Body Temperature (BBT) - temperature rises slightly after ovulation; Cervical Mucus Monitoring - changes consistency throughout cycle; Ovulation Predictor Kits (OPKs) - detect LH surge before ovulation; Fertility Tracking Apps - combine multiple data points; Ultrasound Monitoring - most accurate but requires medical visits.',

    categories: [
      {
        range: '< 21 days',
        label: 'Short Cycle',
        description: 'Shorter than the typical range. May indicate hormonal imbalance or other factors worth discussing with a healthcare provider. Occasional short cycles can occur due to stress or lifestyle changes, but persistent short cycles warrant professional evaluation.',
        color: '#EF4444',
      },
      {
        range: '21 – 25 days',
        label: 'Normal (Short)',
        description: 'Within the healthy range on the shorter side. Perfectly normal variation for many women, as cycle length is influenced by individual hormonal balance. No action is needed unless accompanied by unusual symptoms.',
        color: '#10B981',
      },
      {
        range: '26 – 30 days',
        label: 'Typical Cycle',
        description: 'The most common cycle length. Often referenced as the "textbook" 28-day cycle falls in this range. This window represents the average hormonal rhythm observed across the majority of women worldwide.',
        color: '#10B981',
      },
      {
        range: '31 – 35 days',
        label: 'Normal (Long)',
        description: 'Within the healthy range on the longer side. Normal variation — no cause for concern unless accompanied by other symptoms such as extreme pain or unusual bleeding patterns. Many women naturally cycle in this range throughout their reproductive lives.',
        color: '#10B981',
      },
      {
        range: '> 35 days',
        label: 'Long Cycle',
        description: 'Longer than the typical range. May reflect hormonal factors, stress, or lifestyle changes such as significant weight shifts or intense exercise. Worth discussing with your doctor if consistent, as persistent long cycles can affect fertility planning.',
        color: '#F97316',
      },
    ],

    healthRisks:
      'Ignoring abnormal menstrual patterns can delay diagnosis of important conditions that affect long-term reproductive and overall health. Endometriosis—tissue similar to the uterine lining growing outside the uterus—is a common cause of painful and irregular periods that affects up to 10% of women and can cause infertility if left untreated. Polycystic ovary syndrome (PCOS) causes irregular cycles, hormonal imbalance, and is a leading cause of infertility, yet often goes undiagnosed for years because symptoms are attributed to normal variation. Uterine fibroids can cause heavy bleeding (menorrhagia), which leads to iron deficiency anemia in up to 30% of affected women, resulting in fatigue, weakness, and reduced quality of life. Irregular or absent periods can also signal thyroid disorders, excessive exercise, eating disorders, or significant hormonal shifts that require medical attention. Regular period tracking provides valuable early-warning data for these conditions and should be shared with healthcare providers during routine check-ups.',

    alternativeMeasures:
      'Beyond period tracking apps and calculators, several methods help monitor and understand menstrual health more comprehensively. Gynecological examinations provide direct assessment of reproductive health, and hormonal blood tests (FSH, LH, estrogen, progesterone, AMH) reveal the hormonal balance driving your cycle with far greater precision than calendar-based tools. Pelvic ultrasound can identify structural causes of irregular periods like fibroids or ovarian cysts, offering definitive answers when something feels wrong. Basal Body Temperature (BBT) charting—measuring temperature first thing each morning—reveals ovulation timing and cycle phases with surprising accuracy even in irregular cycles. Cervical mucus observation is a free, natural method for tracking cycle stages that requires no equipment or apps. For fertility planning specifically, ovulation predictor kits (OPKs) detect the hormonal surge before ovulation with high accuracy, making them a valuable complement to any tracking method.',

    demographicDifferences:
      'Menstrual cycle characteristics vary significantly across a woman\'s lifespan and across populations. Adolescents in the first 2–3 years after menarche (first period) frequently have irregular cycles as the hormonal system matures—this is normal and usually self-corrects without intervention. Perimenopause (typically beginning in the mid-40s) brings increasing irregularity, heavier or lighter periods, and eventual cessation at menopause, a transition that can last several years and differs widely between individuals. Breastfeeding suppresses ovulation and can delay the return of periods for months, and lifestyle factors profoundly affect cycles: stress, significant weight changes, intense athletic training, and sleep disruption can all alter cycle length and regularity. Genetics play a meaningful role—cycle characteristics tend to run in families, meaning your mother\'s cycle pattern may closely predict your own. Geographic factors like altitude and even seasonal light changes can subtly influence cycle timing, and cultural and dietary patterns, particularly iron intake and nutritional quality, affect menstrual health across populations.',

    medicalDisclaimer:
      'This period calculator provides estimates based on average cycle data and should not be used as a sole method for birth control or medical diagnosis. Menstrual cycles naturally vary, and predictions may not account for individual differences, hormonal conditions, stress, or lifestyle factors. This tool is for educational and planning purposes only. For fertility planning, pregnancy prevention, or concerns about irregular cycles, consult with a qualified healthcare provider or gynecologist. If you experience severe pain, very heavy bleeding, or significant cycle irregularities, seek medical attention. This calculator cannot diagnose conditions like PCOS, endometriosis, or other reproductive health issues.',

    references: [
      'Mayo Clinic - Menstrual Cycle: What\'s Normal, What\'s Not',
      'Office on Women\'s Health, U.S. Department of Health and Human Services - Your Menstrual Cycle',
      'American College of Obstetricians and Gynecologists (ACOG) - Fertility Awareness-Based Methods',
      'American Pregnancy Association - Ovulation Calculator and Calendar',
      'NCBI Endotext - The Normal Menstrual Cycle and the Control of Ovulation',
      'Journal of the American Heart Association - Menstrual Cycle Variability and Cardiovascular Disease',
      'StatPearls NCBI - Physiology, Ovulation',
      'NHS (National Health Service, UK) - Period Problems',
    ],

    tips: [
      'Track actual periods for several months to determine your personal average cycle length',
      'Cycles can vary 3-4 days month to month - this is completely normal',
      'Calendar method alone is NOT reliable birth control - use contraception if pregnancy prevention is important',
      'Consult healthcare providers for fertility planning, irregular cycles, severe pain, or heavy bleeding',
      'Combine period tracking with BBT or ovulation tests for more accurate fertility awareness',
      'Maintain healthy lifestyle: regular exercise, balanced nutrition, stress management, adequate sleep',
      'Bel çevresi, bel-kalça oranı ve vücut kompozisyonu gibi ek ölçümleri düşünün',
    ],

    faqs: [
      {
        question: 'How accurate are period calculators?',
        answer:
          'Period calculators are most accurate for women with regular cycles (21-35 days), predicting periods within 1-3 days for about 70-80% of women with consistent cycles. However, accuracy decreases if your cycles are irregular, you have hormonal conditions like PCOS, or you\'re experiencing stress or lifestyle changes. For fertility planning, combine calendar tracking with other methods like basal body temperature or ovulation predictor kits for better accuracy.',
      },
      {
        question: 'Can I use a period calculator for birth control?',
        answer:
          'Period calculators alone are NOT recommended as reliable birth control. The calendar method (rhythm method) has a typical-use failure rate of 18-24% per year, meaning about 1 in 4-5 women will become pregnant. Sperm can survive up to 5 days, and ovulation timing can vary. If pregnancy prevention is important, use reliable contraception methods like pills, IUDs, condoms, or implants. Fertility awareness methods work best when combined with temperature tracking and cervical mucus monitoring, learned from a trained instructor.',
      },
      {
        question: 'When is the most fertile time in my cycle?',
        answer:
          'The most fertile time is the 2-3 days immediately before ovulation and ovulation day itself. Ovulation typically occurs 14 days before your next period starts. The fertile window extends to about 6 days total because sperm can survive up to 5 days. For a typical 28-day cycle, days 10-15 are most fertile. However, exact timing varies based on your individual cycle length. To maximize conception chances, have intercourse every 1-2 days during your fertile window, especially in the days just before ovulation.',
      },
      {
        question: 'What if my cycle is irregular?',
        answer:
          'Irregular cycles (varying by more than 7-9 days month to month) make period prediction less reliable. Track your cycles for at least 3-6 months to identify your shortest and longest cycles. Use your shortest cycle length for conservative fertility planning. Irregular cycles can be caused by stress, weight changes, PCOS, thyroid disorders, perimenopause, or other hormonal conditions. If your cycles are consistently irregular, consult a gynecologist who may recommend hormone testing, ultrasound, or other diagnostic tests. For fertility tracking with irregular cycles, consider using ovulation predictor kits or tracking basal body temperature.',
      },
      {
        question: 'Can stress or lifestyle changes affect my period?',
        answer:
          'Yes, stress and lifestyle changes significantly impact menstrual cycles. High stress levels can delay ovulation or cause missed periods through hypothalamic-pituitary-ovarian axis disruption. Other factors include: significant weight loss or gain, intense exercise (especially with low body fat), sleep disruption or shift work, travel and time zone changes, illness or infection, and certain medications. Even positive life changes (new job, moving, relationship changes) can affect your cycle. Most women experience occasional cycle variations. If stress-related changes persist for more than 2-3 cycles, consider stress management techniques and consult a healthcare provider.',
      },
    ],
  },

  tr: {
    whatIs:
      '**Adet Takvimi** (regl takvimi veya adet takipçisi olarak da adlandırılır), bir sonraki adet döneminizin ne zaman başlayacağını tahmin etmenize, yumurtlama tarihinizi hesaplamanıza ve verimli günlerinizi belirlemenize yardımcı olan bir araçtır. Döngü düzenlerinizi takip ederek, bu hesaplayıcı üreme sağlığınız hakkında değerli bilgiler sağlar ve adet, doğurganlık veya doğum kontrol ihtiyaçlarınız için önceden plan yapmanıza yardımcı olur. Adet döngüsü, her ay vücudu potansiyel hamileliğe hazırlayan karmaşık bir hormonal değişimler dizisidir. Döngünüzü anlamak, normal kalıpları tanımanıza, düzensizlikleri belirlemenize, semptomları yönetmenize ve üreme sağlığınız hakkında bilinçli kararlar almanıza yardımcı olabilir. Hamile kalmaya çalışıyor olun, hamilelikten kaçınmaya çalışıyor olun veya sadece vücudunuzu daha iyi anlamak istiyor olun, adetlerinizi takip etmek genel sağlığınız hakkında temel bilgiler sağlar. Bu hesaplayıcı, son adet döneminizin tarihini ve ortalama döngü uzunluğunuzu kullanarak şunları tahmin eder: gelecek adet tarihleri, yumurtlama zamanlaması, verimli pencere (gebe kalma olasılığının en yüksek olduğu 6-7 günlük pencere), döngü fazları ve PMS zamanlaması.',

    howToCalculate:
      'Adet Takivimini kullanmak için üç bilgiye ihtiyacınız var: (1) Son Adet Başlangıç Tarihi - kanamanın başladığı en son adetinizin ilk günü; (2) Ortalama Döngü Uzunluğu - bir adetin ilk gününden bir sonrakinin ilk gününe kadar geçen gün sayısı (varsayılan 28 gün, normal aralık 21-35 gündür); (3) Adet Süresi - adetinizin genellikle ne kadar sürdüğü (varsayılan 5 gün, normal aralık 3-7 gündür). Kanamanın başladığı ilk günü seçerek son adet tarihinizi girin. Döngülerinizi takip ediyorsanız ortalama döngü uzunluğunuzu kullanın; emin değilseniz 28 gün en yaygın olanıdır. Kanamanın genellikle kaç gün sürdüğünü girin. Hesaplayıcı önümüzdeki 12 adetinizi tahmin edecek, yumurtlamayı sonraki adetinizden 14 gün önce tahmin edecek ve verimli pencerenizi gösterecektir (yumurtlamadan 5 gün önce artı yumurtlama günü). Sonuçlar şunları içerir: sonraki adet tarihi, sonraki adete kalan günler, mevcut döngü günü, yumurtlama tarihi, verimli pencere tarihleri, gelecek tahminler takvimi ve mevcut döngü fazı.',

    formulaDetails:
      'Hesaplayıcı bilimsel olarak doğrulanmış yöntemler kullanır. **Yumurtlama Tahmin Formülü**: Yumurtlama Günü = Sonraki Adet Başlangıç Tarihi - 14 gün. Luteal faz (yumurtlamadan sonraki adete kadar) çoğu kadın için tutarlı bir şekilde yaklaşık 14 gündür ve döngünün en güvenilir kısmıdır. **Sonraki Adet Tahmini**: Sonraki Adet Tarihi = Son Adet Tarihi + Ortalama Döngü Uzunluğu, gelecek adetler döngü uzunluğunun katları eklenerek hesaplanır. **Verimli Pencere Hesaplaması**: Verimli Pencere Başlangıcı = Yumurtlama Tarihi - 5 gün, Verimli Pencere Sonu = Yumurtlama Tarihi + 1 gün, toplam 6-7 gün. Sperm kadın üreme sisteminde 5 güne kadar hayatta kalabilirken, yumurta yumurtlamadan sonra yaklaşık 24 saat canlıdır. **Döngü Sınıflandırması**: Kısa Döngü (<21 gün), Normal Döngü (21-35 gün, ortalama 28), Uzun Döngü (36-45 gün), Düzensiz (>45 gün veya oldukça değişken). **Hormonal Zaman Çizelgesi**: 1-5. Günler (Menstrüasyon) - östrojen ve progesteron en düşük seviyelerde, prostaglandinler rahim kasılmalarını tetikler; 6-13. Günler (Foliküler Faz) - FSH yükselir, foliküller gelişir, östrojen artar, endometrium kalınlaşır; 14. Gün (Yumurtlama) - LH dalgalanması, olgun yumurta salınır, östrojen zirve yapar sonra düşer; 15-28. Günler (Luteal Faz) - progesteron korpus luteumdan yükselir, endometrium implantasyon için hazırlanır, hamilelik olmazsa PMS semptomları ortaya çıkabilir.',

    interpretation:
      'Sonuçlarınızı anlamak döngü farkındalığı için anahtardır. **Döngü Düzenliği**: Düzenli döngüler (21-35 gün) en güvenilir tahminleri sağlar ve tutarlı hormonal kalıpları gösterir. Kısa döngüler (<21 gün) hormonal dengesizlikleri veya tiroid sorunlarını gösterebilir ve tıbbi danışma gerektirir. Uzun döngüler (36-45 gün) normal olabilir ancak doğurganlığı etkileyebilir. Düzensiz döngüler (>45 gün veya oldukça değişken) PKOS, stres, kilo değişiklikleri veya diğer hormonal sorunları gösterebilir - tıbbi değerlendirme önerilir. **Verimli Pencere Bilgileri**: Verimli pencere hamileliğin en olası olduğu zamandır. En yüksek verimlilik yumurtlamadan 2 gün önce ile yumurtlama günü arası gerçekleşir. İyi verimlilik yumurtlamadan 3-5 gün önce uzanır. Gebe kalmak için: verimli pencere boyunca, özellikle yumurtlamadan 2-3 gün önce, her 1-2 günde bir cinsel ilişkiye girin. Doğum kontrolü için: verimli pencerenin bir tahmin olduğunu unutmayın; sadece döngü takibine güvenmek yerine güvenilir doğum kontrol yöntemleri kullanın (takvim yönteminin %18-24 tipik kullanım başarısızlık oranı vardır). **Döngü Fazları**: 1. Hafta (Menstrüasyon, 1-7. Günler) - enerji daha düşük olabilir, demir seviyeleri düşer, dinlenmeye ve demir açısından zengin yiyeceklere odaklanın. 2. Hafta (Foliküler, 8-14. Günler) - yükselen östrojen ruh halini ve enerjiyi artırır, zorlayıcı egzersizler için en iyi zaman. 3. Hafta (Yumurtlama, 14-16. Günler) - zirvede doğurganlık, yüksek duyular ve libido, hafif yumurtlama ağrısı yaşanabilir. 4. Hafta (Luteal, 17-28. Günler) - PMS semptomları ortaya çıkabilir, şişkinlik ve ruh hali değişiklikleri yaygın, enerji kademeli olarak azalır.',

    limitations:
      'Adet takvimleri **tahminler** sağlar, garanti değil. Gerçek yumurtlama düzenli döngülerde bile ±2 gün değişebilir. Stres, hastalık, seyahat ve yaşam tarzı değişiklikleri zamanlamayı etkileyebilir. Sonuçlar ortalama döngü verilerine dayanır, bireysel varyasyonlara değil. **Uygun Olmadığı Durumlar**: Doğum kontrolü (yalnızca takvim yöntemi %18-24 tipik kullanım başarısızlık oranı ile güvenilir doğum kontrol değildir); hastalık teşhisi (PKOS, endometrioz veya diğer bozuklukları teşhis edemez); düzensiz döngüler (tahminler daha az doğru olur); hormonal doğum kontrol kullanıcıları (haplar doğal yumurtlama değil yapay döngüler oluşturur). **Döngü Düzenliğini Etkileyen Faktörler**: stres ve kaygı, önemli kilo kaybı veya alımı, yoğun egzersiz veya antrenman, hastalık veya enfeksiyon, ilaçlar (özellikle hormonal), emzirme, perimenopoz, PKOS/tiroid bozuklukları, seyahat ve saat dilimi değişiklikleri, uyku düzeni bozulmaları. **Hesaplayıcının Yanlış Olabileceği Durumlar**: doğumdan sonraki ilk adet, yakın zamanda hormonal doğum kontrolü bırakma, perimenopoz geçişi sırasında, döngüleri henüz düzenlenmemiş gençler (menarştan sonraki ilk 2-3 yıl), teşhis edilmiş hormonal bozuklukları olan kadınlar, büyük hastalık veya ameliyat sırasında veya sonrasında. **Daha İyi Takip Yöntemleri**: Bazal Vücut Sıcaklığı (BVS) - yumurtlamadan sonra sıcaklık hafifçe yükselir; Serviks Mukusu Takibi - döngü boyunca kıvam değiştirir; Yumurtlama Tahmin Kitleri (OPK) - yumurtlamadan önce LH dalgalanmasını tespit eder; Doğurganlık Takip Uygulamaları - birden fazla veri noktasını birleştirir; Ultrason İzleme - en doğru ancak tıbbi ziyaretler gerektirir.',

    categories: [
      {
        range: '< 21 gün',
        label: 'Kısa Döngü',
        description: 'Tipik aralığın altında bir döngü süresi. Hormonal dengesizlik veya sağlık profesyoneli ile görüşülmesi gereken diğer faktörleri işaret edebilir. Ara sıra kısa döngüler stres veya yaşam tarzı değişiklikleri nedeniyle ortaya çıkabilir ancak sürekli kısa döngüler profesyonel değerlendirme gerektirir.',
        color: '#EF4444',
      },
      {
        range: '21 – 25 gün',
        label: 'Normal (Kısa)',
        description: 'Sağlıklı aralığın kısa tarafında yer alan bir döngü uzunluğu. Bireysel hormonal dengede etkilenen pek çok kadın için tamamen normal bir varyasyondur. Olağandışı semptomlar eşlik etmedikçe herhangi bir kaygı söz konusu olmaz.',
        color: '#10B981',
      },
      {
        range: '26 – 30 gün',
        label: 'Tipik Döngü',
        description: 'En yaygın döngü uzunluğu. Genellikle referans alınan "ders kitabı" 28 günlük döngü bu aralığa düşer. Bu pencere, dünya genelinde kadınların çoğunluğunda gözlemlenen ortalama hormonal ritmi yansıtır.',
        color: '#10B981',
      },
      {
        range: '31 – 35 gün',
        label: 'Normal (Uzun)',
        description: 'Sağlıklı aralığın uzun tarafında yer alan bir döngü. Normal bir varyasyon olup, aşırı ağrı veya olağandışı kanama kalıpları gibi başka semptomlarla birleşmedikçe endişe kaynağı değildir. Pek çok kadın üreme yaşları boyunca doğal olarak bu aralıkta döngü yaşar.',
        color: '#10B981',
      },
      {
        range: '> 35 gün',
        label: 'Uzun Döngü',
        description: 'Tipik aralığın üstünde bir döngü süresi. Hormonal faktörler, stres veya önemli kilo değişiklikleri gibi yaşam tarzı değişiklikleri yansıtabilir. Sürekli devam ederse doktora danışmak önemlidir çünkü kalıcı uzun döngüler doğurganlık planlamasını etkileyebilir.',
        color: '#F97316',
      },
    ],

    healthRisks:
      'Anormal adet kalıplarını göz ardı etmek, uzun vadeli üreme ve genel sağlığı etkileyen önemli durumların teşhisini geciktirebilir. Endometrioz—rahm duvarı doğasında dokuların rahmin dışında büymesi—ağrılı ve düzensiz adetlerin yaygın bir nedenidir ve kadınların %10\'una kadar etkileyebilir; tedavi edilmezse kısırlığa yol açabilir. Polikistik yumurtalık sendromu (PKOS), düzensiz döngülere, hormonal dengesizliğe neden olur ve kısırlığın başlıca nedenlerinden birini oluşturur; ancak semptomlar genellikle normal bir varyasyon olarak atıldığından yıllarca teşhis edilemeyebilir. Rah fibroidleri ağır kanama (menoraji) yaratabilir ve bu durum, etkilenen kadınların %30\'una kadar demirin eksikliğine yol açarak yorgunluk, zayıflık ve düşük yaşam kalitesine neden olabilir. Düzensiz veya eksik adetler ayrıca tiroid bozuklukları, aşırı egzersiz, yeme bozuklukları veya tıbbi ilgi gerektiren önemli hormonal değişiklikleri de işaret edebilir. Düzenli adet takibi, bu durumlar için değerli erken uyarı verileri sağlar ve rutin kontrollerde sağlık profesyonelleriyle paylaşılmalıdır.',

    alternativeMeasures:
      'Adet takip uygulamaları ve hesaplayıcıların yanı sıra, adet sağlığını daha kapsamlı bir şekilde izlemek ve anlamak için birçok yöntem mevcuttur. Jinekolojik muayeneler üreme sağlığının doğrudan değerlendirmesini sağlar; FSH, LH, östrojen, progesteron ve AMH gibi hormonal kan testleri ise döngünüzü yöneten hormonal dengeni, takvim tabanlı araçlara kıyasla çok daha hassas bir şekilde ortaya koyar. Pelvik ultrason, düzensiz adetlerin yapısal nedenlerini—fibroidleri veya yumurtalık kistlerini—tespit edebilir ve bir şeylerin yanlış gidiyor hissinde somut cevaplar sunar. Bazal Vücut Sıcaklığı (BVS) takibi—her sabah ilk iş olarak ölçüm yapmak—düzensiz döngülerde bile yumurtlama zamanlamasını ve döngü fazlarını şaşırtıcı bir doğrulukla ortaya koyar. Serviks mukusu gözlemleyici, ekipman veya uygulama gerektirmeyen ücretsiz ve doğal bir döngü takip yöntemidir. Özellikle doğurganlık planlaması söz konusu olduğunda, yumurtlama tahmin kitleri (OPK) yumurtlamadan önceki hormonal dalgalanmayı yüksek doğrulukla tespit eder ve herhangi bir takip yönteminin tamamlayıcısı olarak değerli bir araç sunur.',

    demographicDifferences:
      'Adet döngüsü özellikleri, bir kadının yaşam süresince ve nüfuslar arası önemli farklılıklar gösterir. Menarşa (ilk adete) sonraki ilk 2–3 yıldaki ergenler, hormonal sistem olgunlaştıkça sıklıkla düzensiz döngüler yaşar—bu normaldir ve genellikle müdahalesiz kendiliğinden düzeleşir. Perimenopoz (genellikle 40\'lı yaşların ortasında başlayarak), artan düzensizlik, daha ağır veya daha hafif adetler ve sonunda menopozla birlikte adetlerin durmasını beraberinde getirir; bu geçiş yıllarca sürebilir ve bireyler arasında büyük farklılıklar gösterir. Emzirme yumurtlamayı baskılar ve adetlerin geri dönüşünü aylarca geciktirebilir; stres, önemli kilo değişiklikleri, yoğun atletik antrenman ve uyku düzeni bozulması gibi yaşam tarzı faktörları ise döngü uzunluğunu ve düzenliğini derinden etkiler. Genetik, anlamlı bir rol oynar—döngü özellikleri aile içinde kalıtılır; annenizin döngü kalıbı genellikle sizinkileri yakın bir şekilde öngörebilir. Yükseklik ve hatta mevsimsel ışık değişiklikleri gibi coğrafi faktörler, döngü zamanlamasını daha ince biçimde etkileyebilir; kültürel ve beslenme kalıpları, özellikle demir alımı ve beslenme kalitesi ise nüfuslar genelinde adet sağlığını farklı biçimlerde etkiler.',

    medicalDisclaimer:
      'Bu adet takvimi ortalama döngü verilerine dayalı tahminler sağlar ve doğum kontrolü veya tıbbi teşhis için tek yöntem olarak kullanılmamalıdır. Adet döngüleri doğal olarak değişir ve tahminler bireysel farklılıkları, hormonal durumları, stresi veya yaşam tarzı faktörlerini hesaba katmayabilir. Bu araç yalnızca eğitim ve planlama amaçlıdır. Doğurganlık planlaması, hamilelik önleme veya düzensiz döngülerle ilgili endişeler için nitelikli bir sağlık sağlayıcısı veya jinekologa danışın. Şiddetli ağrı, çok ağır kanama veya önemli döngü düzensizlikleri yaşarsanız tıbbi yardım alın. Bu hesaplayıcı PKOS, endometrioz veya diğer üreme sağlığı sorunları gibi durumları teşhis edemez.',

    references: [
      'Mayo Clinic - Adet Döngüsü: Normal Olan ve Olmayan',
      'Office on Women\'s Health, ABD Sağlık ve İnsan Hizmetleri Bakanlığı - Adet Döngünüz',
      'American College of Obstetricians and Gynecologists (ACOG) - Doğurganlık Farkındalığı Temelli Yöntemler',
      'American Pregnancy Association - Yumurtlama Hesaplayıcı ve Takvim',
      'NCBI Endotext - Normal Adet Döngüsü ve Yumurtlama Kontrolü',
      'Journal of the American Heart Association - Adet Döngüsü Değişkenliği ve Kardiyovasküler Hastalık',
      'StatPearls NCBI - Fizyoloji, Yumurtlama',
      'NHS (National Health Service, İngiltere) - Adet Sorunları',
    ],

    tips: [
      'Kişisel ortalama döngü uzunluğunuzu belirlemek için birkaç ay boyunca gerçek adetlerinizi takip edin',
      'Döngüler aydan aya 3-4 gün değişebilir - bu tamamen normaldir',
      'Yalnızca takvim yöntemi güvenilir doğum kontrolü DEĞİLDİR - hamilelik önleme önemliyse doğum kontrolü kullanın',
      'Doğurganlık planlaması, düzensiz döngüler, şiddetli ağrı veya ağır kanama için sağlık sağlayıcılarına danışın',
      'Daha doğru doğurganlık farkındalığı için adet takibini BVS veya yumurtlama testleriyle birleştirin',
      'Sağlıklı yaşam tarzı sürdürün: düzenli egzersiz, dengeli beslenme, stres yönetimi, yeterli uyku',
      'Bel çevresi, bel-kalça oranı ve vücut kompozisyonu gibi ek ölçümleri düşünün',
    ],

    faqs: [
      {
        question: 'Adet takvimleri ne kadar doğrudur?',
        answer:
          'Adet takvimleri düzenli döngülere sahip kadınlar için en doğrudur (21-35 gün), tutarlı döngülere sahip kadınların yaklaşık %70-80\'i için adetleri 1-3 gün içinde tahmin eder. Ancak döngüleriniz düzensizse, PKOS gibi hormonal durumlarınız varsa veya stres veya yaşam tarzı değişiklikleri yaşıyorsanız doğruluk azalır. Doğurganlık planlaması için, daha iyi doğruluk için takvim takibini bazal vücut sıcaklığı veya yumurtlama tahmin kitleri gibi diğer yöntemlerle birleştirin.',
      },
      {
        question: 'Doğum kontrolü için adet takvimi kullanabilir miyim?',
        answer:
          'Adet takvimleri tek başına güvenilir doğum kontrol olarak ÖNERİLMEZ. Takvim yöntemi (ritim yöntemi) yılda %18-24 tipik kullanım başarısızlık oranına sahiptir, yani yaklaşık 4-5 kadından 1\'i hamile kalır. Sperm 5 güne kadar hayatta kalabilir ve yumurtlama zamanlaması değişebilir. Hamilelik önleme önemliyse, haplar, RİA\'lar, prezervatifler veya implantlar gibi güvenilir doğum kontrol yöntemleri kullanın. Doğurganlık farkındalığı yöntemleri en iyi şekilde sıcaklık takibi ve serviks mukusu izlemesi ile birleştirildiğinde ve eğitimli bir eğitmenden öğrenildiğinde çalışır.',
      },
      {
        question: 'Döngümde en verimli zaman ne zamandır?',
        answer:
          'En verimli zaman yumurtlamadan hemen önceki 2-3 gün ve yumurtlama gününün kendisidir. Yumurtlama tipik olarak bir sonraki adetiniz başlamadan 14 gün önce gerçekleşir. Verimli pencere toplam yaklaşık 6 güne kadar uzanır çünkü sperm 5 güne kadar hayatta kalabilir. Tipik bir 28 günlük döngü için, 10-15. günler en verimlidir. Ancak tam zamanlama bireysel döngü uzunluğunuza göre değişir. Gebe kalma şansını en üst düzeye çıkarmak için, verimli pencereniz boyunca, özellikle yumurtlamadan hemen önceki günlerde, her 1-2 günde bir cinsel ilişkiye girin.',
      },
      {
        question: 'Döngüm düzensizse ne olur?',
        answer:
          'Düzensiz döngüler (aydan aya 7-9 günden fazla değişen) adet tahminini daha az güvenilir hale getirir. En kısa ve en uzun döngülerinizi belirlemek için döngülerinizi en az 3-6 ay boyunca takip edin. Muhafazakar doğurganlık planlaması için en kısa döngü uzunluğunuzu kullanın. Düzensiz döngüler stres, kilo değişiklikleri, PKOS, tiroid bozuklukları, perimenopoz veya diğer hormonal durumlardan kaynaklanabilir. Döngüleriniz sürekli düzensizse, hormon testi, ultrason veya diğer tanı testlerini önerebilecek bir jinekoloğa danışın. Düzensiz döngülerle doğurganlık takibi için, yumurtlama tahmin kitleri kullanmayı veya bazal vücut sıcaklığını takip etmeyi düşünün.',
      },
      {
        question: 'Stres veya yaşam tarzı değişiklikleri adetimi etkileyebilir mi?',
        answer:
          'Evet, stres ve yaşam tarzı değişiklikleri adet döngülerini önemli ölçüde etkiler. Yüksek stres seviyeleri hipotalamus-hipofiz-over ekseni bozulması yoluyla yumurtlamayı geciktirebilir veya adetlerin kaçırılmasına neden olabilir. Diğer faktörler şunlardır: önemli kilo kaybı veya alımı, yoğun egzersiz (özellikle düşük vücut yağı ile), uyku bozukluğu veya vardiyalı çalışma, seyahat ve saat dilimi değişiklikleri, hastalık veya enfeksiyon ve belirli ilaçlar. Hatta olumlu yaşam değişiklikleri bile (yeni iş, taşınma, ilişki değişiklikleri) döngünüzü etkileyebilir. Çoğu kadın ara sıra döngü varyasyonları yaşar. Stresle ilgili değişiklikler 2-3 döngüden fazla devam ederse, stres yönetimi tekniklerini düşünün ve bir sağlık sağlayıcısına danışın.',
      },
    ],
  },
};
