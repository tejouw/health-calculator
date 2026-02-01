import { CalculatorContent } from '@/types/calculator';

export const periodContent: CalculatorContent = {
  whatIs: {
    en: `A **Period Calculator** (also called a menstrual cycle calculator or period tracker) is a tool that helps you predict when your next menstrual period will start, estimate your ovulation date, and identify your fertile window. By tracking your cycle patterns, this calculator provides valuable insights into your reproductive health and helps you plan ahead for menstruation, fertility, or contraception needs.

The menstrual cycle is a complex interplay of hormonal changes that prepare the body for potential pregnancy each month. Understanding your cycle can help you recognize normal patterns, identify irregularities, manage symptoms, and make informed decisions about your reproductive health. Whether you're trying to conceive, avoid pregnancy, or simply want to understand your body better, tracking your period provides essential information about your overall health.

This calculator uses your last menstrual period (LMP) date and average cycle length to predict:
- **Next period dates**: When to expect your next several periods
- **Ovulation timing**: Your most fertile days each cycle
- **Fertile window**: The 6-7 day window when conception is most likely
- **Cycle phases**: Where you are in your current menstrual cycle
- **PMS timing**: When to expect premenstrual symptoms

Period tracking has been practiced for centuries, but modern calculators use scientifically-validated methods to provide accurate predictions. While no predictor is 100% accurate (cycle lengths can vary), these tools offer reliable estimates for most women with regular cycles.`,
    tr: `**Adet Takvimi** (regl takvimi veya adet takipçisi olarak da adlandırılır), bir sonraki adet döneminizin ne zaman başlayacağını tahmin etmenize, yumurtlama tarihinizi hesaplamanıza ve verimli günlerinizi belirlemenize yardımcı olan bir araçtır. Döngü düzenlerinizi takip ederek, bu hesaplayıcı üreme sağlığınız hakkında değerli bilgiler sağlar ve adet, doğurganlık veya doğum kontrol ihtiyaçlarınız için önceden plan yapmanıza yardımcı olur.

Adet döngüsü, her ay vücudu potansiyel hamileliğe hazırlayan karmaşık bir hormonal değişimler dizisidir. Döngünüzü anlamak, normal kalıpları tanımanıza, düzensizlikleri belirlemenize, semptomları yönetmenize ve üreme sağlığınız hakkında bilinçli kararlar almanıza yardımcı olabilir. Hamile kalmaya çalışıyor olun, hamilelikten kaçınmaya çalışıyor olun veya sadece vücudunuzu daha iyi anlamak istiyor olun, adetlerinizi takip etmek genel sağlığınız hakkında temel bilgiler sağlar.

Bu hesaplayıcı, son adet döneminizin (LMP) tarihini ve ortalama döngü uzunluğunuzu kullanarak şunları tahmin eder:
- **Gelecek adet tarihleri**: Sonraki birkaç adetinizi ne zaman beklemeniz gerektiği
- **Yumurtlama zamanlaması**: Her döngüdeki en verimli günleriniz
- **Verimli pencere**: Gebe kalma olasılığının en yüksek olduğu 6-7 günlük pencere
- **Döngü fazları**: Mevcut adet döngünüzde nerede olduğunuz
- **PMS zamanlaması**: Adet öncesi semptomları ne zaman beklemeniz gerektiği

Adet takibi yüzyıllardır uygulanmaktadır, ancak modern hesaplayıcılar doğru tahminler sağlamak için bilimsel olarak doğrulanmış yöntemler kullanır. Hiçbir tahmin edici %100 doğru olmasa da (döngü uzunlukları değişebilir), bu araçlar düzenli döngülere sahip çoğu kadın için güvenilir tahminler sunar.`,
  },

  howToCalculate: {
    en: `### How to Use the Period Calculator

**Required Information:**
1. **Last Period Start Date**: The first day of your most recent period (when bleeding began)
2. **Average Cycle Length**: Number of days from the first day of one period to the first day of the next (default is 28 days, but normal ranges from 21-35 days)
3. **Period Duration**: How long your period typically lasts (default is 5 days, normal range is 3-7 days)

**Step-by-Step Process:**

1. **Enter Your Last Period Date**
   - Select the first day of your most recent menstrual period
   - This is day 1 of your current cycle
   - Use the actual start date (first day of bleeding), not when it ended

2. **Input Your Cycle Length**
   - If you track your cycles, use your average cycle length
   - If you're unsure, 28 days is the most common cycle length
   - Count from the first day of one period to the first day of the next period
   - Track several cycles to determine your personal average

3. **Enter Period Duration**
   - How many days does bleeding typically last?
   - Count all days with any bleeding (light to heavy)
   - Most women bleed for 3-7 days
   - Use your typical duration, not your shortest or longest period

4. **Calculate Results**
   - The calculator predicts your next 12 periods
   - Ovulation is estimated at 14 days before your next period
   - Fertile window includes 5 days before ovulation plus ovulation day
   - Calendar view shows all predicted dates

**Understanding the Results:**

Your results will include:
- **Next Period Date**: When your next period is expected to start
- **Days Until Next Period**: Countdown to your next cycle
- **Current Cycle Day**: Which day of your cycle you're on today
- **Ovulation Date**: Estimated day of ovulation (most fertile day)
- **Fertile Window**: 6-day window of highest fertility (5 days before + ovulation day)
- **Future Predictions**: Calendar of upcoming periods and fertile windows
- **Cycle Phase**: Which phase you're currently in (menstrual, follicular, ovulation, luteal)`,
    tr: `### Adet Takivimi Nasıl Kullanılır

**Gerekli Bilgiler:**
1. **Son Adet Başlangıç Tarihi**: En son adetinizin ilk günü (kanama başladığında)
2. **Ortalama Döngü Uzunluğu**: Bir adetin ilk gününden bir sonrakinin ilk gününe kadar geçen gün sayısı (varsayılan 28 gün, ancak normal aralık 21-35 gündür)
3. **Adet Süresi**: Adetinizin genellikle ne kadar sürdüğü (varsayılan 5 gün, normal aralık 3-7 gündür)

**Adım Adım Süreç:**

1. **Son Adet Tarihinizi Girin**
   - En son adet döneminizin ilk gününü seçin
   - Bu, mevcut döngünüzün 1. günüdür
   - Gerçek başlangıç tarihini kullanın (kanamanın ilk günü), bittiği tarihi değil

2. **Döngü Uzunluğunuzu Girin**
   - Döngülerinizi takip ediyorsanız, ortalama döngü uzunluğunuzu kullanın
   - Emin değilseniz, 28 gün en yaygın döngü uzunluğudur
   - Bir adetin ilk gününden bir sonrakinin ilk gününe kadar sayın
   - Kişisel ortalamanızı belirlemek için birkaç döngüyü takip edin

3. **Adet Süresini Girin**
   - Kanama genellikle kaç gün sürer?
   - Herhangi bir kanamanın olduğu tüm günleri sayın (hafiften ağıra)
   - Çoğu kadın 3-7 gün kanar
   - En kısa veya en uzun adetinizi değil, tipik sürenizi kullanın

4. **Sonuçları Hesaplayın**
   - Hesaplayıcı önümüzdeki 12 adetinizi tahmin eder
   - Yumurtlama, bir sonraki adetinizden 14 gün önce tahmin edilir
   - Verimli pencere, yumurtlamadan 5 gün önce artı yumurtlama gününü içerir
   - Takvim görünümü tüm tahmin edilen tarihleri gösterir

**Sonuçları Anlama:**

Sonuçlarınız şunları içerecektir:
- **Sonraki Adet Tarihi**: Bir sonraki adetinizin ne zaman başlaması beklendiği
- **Sonraki Adete Kalan Günler**: Bir sonraki döngünüze geri sayım
- **Mevcut Döngü Günü**: Bugün döngünüzün hangi gününde olduğunuz
- **Yumurtlama Tarihi**: Tahmini yumurtlama günü (en verimli gün)
- **Verimli Pencere**: En yüksek doğurganlık 6 günlük pencere (5 gün önce + yumurtlama günü)
- **Gelecek Tahminler**: Yaklaşan adetler ve verimli pencerelerin takvimi
- **Döngü Fazı**: Şu anda hangi fazdayısınız (menstrüel, foliküler, yumurtlama, luteal)`,
  },

  formulaDetails: {
    en: `### Calculation Methods and Scientific Basis

**Ovulation Prediction Formula:**
\`\`\`
Ovulation Day = Next Period Start Date - 14 days
\`\`\`

The luteal phase (from ovulation to next period) is consistently about 14 days for most women. This is the most reliable part of the cycle. The follicular phase (from period start to ovulation) varies more between individuals.

**Next Period Prediction:**
\`\`\`
Next Period Date = Last Period Date + Average Cycle Length
Future Periods = Last Period Date + (Cycle Length × N cycles)
\`\`\`

**Fertile Window Calculation:**
\`\`\`
Fertile Window Start = Ovulation Date - 5 days
Fertile Window End = Ovulation Date + 1 day
Total Fertile Window = 6-7 days
\`\`\`

Sperm can survive in the female reproductive tract for up to 5 days, while an egg is viable for about 24 hours after ovulation. This creates a fertile window of approximately 6 days.

**Cycle Classification:**
- **Short Cycle**: Less than 21 days
- **Normal Cycle**: 21-35 days (average 28 days)
- **Long Cycle**: 36-45 days
- **Irregular**: Over 45 days or highly variable

**Hormonal Timeline:**

1. **Days 1-5 (Menstruation)**:
   - Estrogen and progesterone at lowest levels
   - Prostaglandins trigger uterine contractions
   - Endometrium sheds

2. **Days 6-13 (Follicular Phase)**:
   - FSH (follicle-stimulating hormone) rises
   - Follicles develop in ovaries
   - Estrogen levels increase
   - Endometrium thickens

3. **Day 14 (Ovulation)**:
   - LH (luteinizing hormone) surge
   - Mature egg released from ovary
   - Estrogen peaks, then drops
   - Brief fertility window opens

4. **Days 15-28 (Luteal Phase)**:
   - Progesterone rises (from corpus luteum)
   - Endometrium prepares for implantation
   - If no pregnancy, hormone levels drop
   - PMS symptoms may occur

**Accuracy Factors:**

The calculator provides estimates based on your input data. Accuracy is highest when:
- You have regular, predictable cycles
- You accurately track your cycle length over multiple months
- You enter the correct last period date
- Your cycle length is between 21-35 days

Accuracy may be lower if:
- Your cycles are irregular
- You're using hormonal birth control
- You're perimenopausal
- You have PCOS or other hormonal conditions
- You recently gave birth or stopped breastfeeding`,
    tr: `### Hesaplama Yöntemleri ve Bilimsel Temel

**Yumurtlama Tahmin Formülü:**
\`\`\`
Yumurtlama Günü = Sonraki Adet Başlangıç Tarihi - 14 gün
\`\`\`

Luteal faz (yumurtlamadan sonraki adete kadar) çoğu kadın için tutarlı bir şekilde yaklaşık 14 gündür. Bu, döngünün en güvenilir kısmıdır. Foliküler faz (adet başlangıcından yumurtlamaya kadar) bireyler arasında daha fazla değişir.

**Sonraki Adet Tahmini:**
\`\`\`
Sonraki Adet Tarihi = Son Adet Tarihi + Ortalama Döngü Uzunluğu
Gelecek Adetler = Son Adet Tarihi + (Döngü Uzunluğu × N döngü)
\`\`\`

**Verimli Pencere Hesaplaması:**
\`\`\`
Verimli Pencere Başlangıcı = Yumurtlama Tarihi - 5 gün
Verimli Pencere Sonu = Yumurtlama Tarihi + 1 gün
Toplam Verimli Pencere = 6-7 gün
\`\`\`

Sperm, kadın üreme sisteminde 5 güne kadar hayatta kalabilirken, yumurta yumurtlamadan sonra yaklaşık 24 saat canlıdır. Bu, yaklaşık 6 günlük bir verimli pencere oluşturur.

**Döngü Sınıflandırması:**
- **Kısa Döngü**: 21 günden az
- **Normal Döngü**: 21-35 gün (ortalama 28 gün)
- **Uzun Döngü**: 36-45 gün
- **Düzensiz**: 45 günden fazla veya oldukça değişken

**Hormonal Zaman Çizelgesi:**

1. **1-5. Günler (Menstrüasyon)**:
   - Östrojen ve progesteron en düşük seviyelerde
   - Prostaglandinler rahim kasılmalarını tetikler
   - Endometrium dökülür

2. **6-13. Günler (Foliküler Faz)**:
   - FSH (folikül uyarıcı hormon) yükselir
   - Yumurtalıklarda foliküller gelişir
   - Östrojen seviyeleri artar
   - Endometrium kalınlaşır

3. **14. Gün (Yumurtlama)**:
   - LH (lüteinleştirici hormon) dalgalanması
   - Olgun yumurta yumurtalıktan salınır
   - Östrojen zirve yapar, sonra düşer
   - Kısa doğurganlık penceresi açılır

4. **15-28. Günler (Luteal Faz)**:
   - Progesteron yükselir (korpus luteumdan)
   - Endometrium implantasyon için hazırlanır
   - Hamilelik olmazsa, hormon seviyeleri düşer
   - PMS semptomları ortaya çıkabilir

**Doğruluk Faktörleri:**

Hesaplayıcı, girdi verilerinize dayalı tahminler sağlar. Doğruluk en yüksektir:
- Düzenli, öngörülebilir döngüleriniz varsa
- Döngü uzunluğunuzu birkaç ay boyunca doğru şekilde takip ederseniz
- Doğru son adet tarihini girerseniz
- Döngü uzunluğunuz 21-35 gün arasındaysa

Doğruluk daha düşük olabilir:
- Döngüleriniz düzensizse
- Hormonal doğum kontrol kullanıyorsanız
- Perimenopozalsanız
- PKOS veya diğer hormonal durumlarınız varsa
- Yakın zamanda doğum yaptıysanız veya emzirmeyi bıraktıysanız`,
  },

  interpretation: {
    en: `### Understanding Your Results

**Cycle Regularity:**

- **Regular Cycle (21-35 days)**: Predictions are most reliable. Your body follows a consistent pattern, making planning easier.
- **Short Cycle (<21 days)**: May indicate hormonal imbalances or thyroid issues. Consult a gynecologist if cycles are consistently short.
- **Long Cycle (36-45 days)**: Can be normal for some women, but may affect fertility. Track for patterns.
- **Irregular Cycle (>45 days or highly variable)**: May indicate PCOS, stress, weight changes, or other hormonal issues. Medical evaluation recommended.

**Fertile Window Insights:**

The fertile window is the time when pregnancy is most likely to occur. Understanding this window is crucial whether you're trying to conceive or avoid pregnancy:

- **Highest Fertility**: 2 days before ovulation through ovulation day
- **Good Fertility**: 3-5 days before ovulation
- **Low Fertility**: All other days, though pregnancy is never impossible

For conception: Have intercourse every 1-2 days during your fertile window, especially the 2-3 days before ovulation.

For contraception: Remember that the fertile window is an estimate. Use reliable birth control methods rather than relying solely on cycle tracking.

**Cycle Phases and What to Expect:**

**Week 1 (Menstruation - Days 1-7)**:
- Energy levels may be lower
- Iron levels drop due to blood loss
- Focus on rest and gentle movement
- Eat iron-rich foods (leafy greens, red meat, beans)

**Week 2 (Follicular - Days 8-14)**:
- Rising estrogen boosts mood and energy
- Best time for challenging workouts
- Increased focus and productivity
- Social activities feel easier

**Week 3 (Ovulation - Days 14-16)**:
- Peak fertility
- Heightened senses and libido
- Increased confidence
- May experience mild ovulation pain (mittelschmerz)

**Week 4 (Luteal - Days 17-28)**:
- PMS symptoms may appear
- Bloating and breast tenderness common
- Mood changes and irritability possible
- Increased appetite and cravings
- Energy levels gradually decrease

**When to See a Doctor:**

Consult a healthcare provider if you experience:
- Missed periods (amenorrhea) for 3+ months
- Very heavy bleeding (soaking through pads hourly)
- Severe pain that interferes with daily activities
- Cycles shorter than 21 days or longer than 35 days consistently
- Bleeding between periods
- Sudden changes in your normal cycle pattern
- Difficulty conceiving after 12 months of trying (6 months if over 35)`,
    tr: `### Sonuçlarınızı Anlama

**Döngü Düzenliği:**

- **Düzenli Döngü (21-35 gün)**: Tahminler en güvenilirdir. Vücudunuz tutarlı bir model izler, bu da planlamayı kolaylaştırır.
- **Kısa Döngü (<21 gün)**: Hormonal dengesizlikleri veya tiroid sorunlarını gösterebilir. Döngüler sürekli kısaysa bir jinekoloğa danışın.
- **Uzun Döngü (36-45 gün)**: Bazı kadınlar için normal olabilir, ancak doğurganlığı etkileyebilir. Kalıplar için takip edin.
- **Düzensiz Döngü (>45 gün veya oldukça değişken)**: PKOS, stres, kilo değişiklikleri veya diğer hormonal sorunları gösterebilir. Tıbbi değerlendirme önerilir.

**Verimli Pencere Bilgileri:**

Verimli pencere, hamileliğin en olası olduğu zamandır. Hamile kalmaya çalışıyor olun veya hamilelikten kaçınmaya çalışıyor olun, bu pencereyi anlamak çok önemlidir:

- **En Yüksek Verimlilik**: Yumurtlamadan 2 gün önce ile yumurtlama günü arası
- **İyi Verimlilik**: Yumurtlamadan 3-5 gün önce
- **Düşük Verimlilik**: Diğer tüm günler, ancak hamilelik asla imkansız değildir

Gebe kalmak için: Verimli pencereniz boyunca, özellikle yumurtlamadan 2-3 gün önce, her 1-2 günde bir cinsel ilişkiye girin.

Doğum kontrolü için: Verimli pencerenin bir tahmin olduğunu unutmayın. Sadece döngü takibine güvenmek yerine güvenilir doğum kontrol yöntemleri kullanın.

**Döngü Fazları ve Ne Beklemeli:**

**1. Hafta (Menstrüasyon - 1-7. Günler)**:
- Enerji seviyeleri daha düşük olabilir
- Kan kaybı nedeniyle demir seviyeleri düşer
- Dinlenmeye ve hafif harekete odaklanın
- Demir açısından zengin yiyecekler yiyin (yeşil yapraklılar, kırmızı et, fasulye)

**2. Hafta (Foliküler - 8-14. Günler)**:
- Yükselen östrojen ruh halini ve enerjiyi artırır
- Zorlayıcı egzersizler için en iyi zaman
- Artan odaklanma ve verimlilik
- Sosyal aktiviteler daha kolay hissedilir

**3. Hafta (Yumurtlama - 14-16. Günler)**:
- Zirvede doğurganlık
- Yüksek duyular ve libido
- Artan güven
- Hafif yumurtlama ağrısı yaşayabilirsiniz (mittelschmerz)

**4. Hafta (Luteal - 17-28. Günler)**:
- PMS semptomları ortaya çıkabilir
- Şişkinlik ve göğüs hassasiyeti yaygındır
- Ruh hali değişiklikleri ve sinirlilik mümkündür
- Artan iştah ve istekler
- Enerji seviyeleri kademeli olarak azalır

**Doktora Ne Zaman Gitmeli:**

Şu durumları yaşarsanız bir sağlık sağlayıcısına danışın:
- 3+ ay adet görmeme (amenore)
- Çok ağır kanama (saatte ped doyurma)
- Günlük aktiviteleri engelleyen şiddetli ağrı
- Sürekli olarak 21 günden kısa veya 35 günden uzun döngüler
- Adetler arasında kanama
- Normal döngü modelinizde ani değişiklikler
- 12 ay denedikten sonra gebe kalamama (35 yaş üzeriyse 6 ay)`,
  },

  limitations: {
    en: `### Limitations and Considerations

**Prediction Accuracy:**
- Period calculators provide **estimates**, not guarantees
- Actual ovulation can vary by ±2 days even in regular cycles
- Stress, illness, travel, and lifestyle changes can affect timing
- Results are based on average cycle data, not individual variations

**Not Suitable For:**
- **Birth control**: Calendar method alone is not reliable contraception (18-24% typical-use failure rate)
- **Diagnosing conditions**: Cannot diagnose PCOS, endometriosis, or other disorders
- **Irregular cycles**: Predictions become less accurate with highly variable cycles
- **Hormonal birth control users**: Birth control pills create artificial cycles, not natural ovulation

**Factors That Affect Cycle Regularity:**
- Stress and anxiety
- Significant weight loss or gain
- Intense exercise or training
- Illness or infection
- Medications (especially hormonal)
- Breastfeeding
- Perimenopause
- PCOS, thyroid disorders, or other hormonal conditions
- Travel and time zone changes
- Sleep pattern disruptions

**When Calculator May Be Inaccurate:**
- First period after childbirth
- Recently stopped hormonal birth control
- During perimenopause transition
- Teens whose cycles haven't regulated yet (first 2-3 years after menarche)
- Women with diagnosed hormonal disorders
- During or after major illness or surgery

**Better Tracking Methods:**

For more accurate fertility awareness:
1. **Basal Body Temperature (BBT)**: Temperature rises slightly after ovulation
2. **Cervical Mucus Monitoring**: Changes consistency throughout cycle
3. **Ovulation Predictor Kits (OPKs)**: Detect LH surge before ovulation
4. **Fertility Tracking Apps**: Combine multiple data points
5. **Ultrasound Monitoring**: Most accurate but requires medical visits

**Important Reminders:**
- Track your actual periods for several months to determine your personal average
- Cycles can vary from month to month - even 3-4 day variations are normal
- This calculator cannot account for individual variations or health conditions
- Always use reliable contraception if pregnancy prevention is important
- Consult healthcare providers for fertility planning or concerns`,
    tr: `### Sınırlamalar ve Hususlar

**Tahmin Doğruluğu:**
- Adet takvimleri **tahminler** sağlar, garanti değil
- Gerçek yumurtlama düzenli döngülerde bile ±2 gün değişebilir
- Stres, hastalık, seyahat ve yaşam tarzı değişiklikleri zamanlamayı etkileyebilir
- Sonuçlar ortalama döngü verilerine dayanır, bireysel varyasyonlara değil

**Uygun Olmadığı Durumlar:**
- **Doğum kontrolü**: Yalnızca takvim yöntemi güvenilir bir doğum kontrol değildir (%18-24 tipik kullanım başarısızlık oranı)
- **Hastalık teşhisi**: PKOS, endometrioz veya diğer bozuklukları teşhis edemez
- **Düzensiz döngüler**: Tahminler oldukça değişken döngülerle daha az doğru olur
- **Hormonal doğum kontrol kullanıcıları**: Doğum kontrol hapları doğal yumurtlama değil yapay döngüler oluşturur

**Döngü Düzenliğini Etkileyen Faktörler:**
- Stres ve kaygı
- Önemli kilo kaybı veya alımı
- Yoğun egzersiz veya antrenman
- Hastalık veya enfeksiyon
- İlaçlar (özellikle hormonal)
- Emzirme
- Perimenopoz
- PKOS, tiroid bozuklukları veya diğer hormonal durumlar
- Seyahat ve saat dilimi değişiklikleri
- Uyku düzeni bozulmaları

**Hesaplayıcının Yanlış Olabileceği Durumlar:**
- Doğumdan sonraki ilk adet
- Yakın zamanda hormonal doğum kontrolü bırakma
- Perimenopoz geçişi sırasında
- Döngüleri henüz düzenlenmemiş gençler (menarştan sonraki ilk 2-3 yıl)
- Teşhis edilmiş hormonal bozuklukları olan kadınlar
- Büyük hastalık veya ameliyat sırasında veya sonrasında

**Daha İyi Takip Yöntemleri:**

Daha doğru doğurganlık farkındalığı için:
1. **Bazal Vücut Sıcaklığı (BVS)**: Yumurtlamadan sonra sıcaklık hafifçe yükselir
2. **Serviks Mukusu Takibi**: Döngü boyunca kıvam değiştirir
3. **Yumurtlama Tahmin Kitleri (OPK)**: Yumurtlamadan önce LH dalgalanmasını tespit eder
4. **Doğurganlık Takip Uygulamaları**: Birden fazla veri noktasını birleştirir
5. **Ultrason İzleme**: En doğru ancak tıbbi ziyaretler gerektirir

**Önemli Hatırlatmalar:**
- Kişisel ortalamanızı belirlemek için birkaç ay boyunca gerçek adetlerinizi takip edin
- Döngüler aydan aya değişebilir - hatta 3-4 günlük varyasyonlar normaldir
- Bu hesaplayıcı bireysel varyasyonları veya sağlık durumlarını hesaba katamaz
- Hamilelik önleme önemliyse her zaman güvenilir doğum kontrolü kullanın
- Doğurganlık planlaması veya endişeler için sağlık sağlayıcılarına danışın`,
  },

  faqs: [
    {
      question: {
        en: 'How accurate are period calculators?',
        tr: 'Adet takvimleri ne kadar doğrudur?',
      },
      answer: {
        en: 'Period calculators are most accurate for women with regular cycles (21-35 days). They can predict periods within 1-3 days for about 70-80% of women with consistent cycles. However, accuracy decreases if your cycles are irregular, you have hormonal conditions like PCOS, or you\'re experiencing stress or lifestyle changes. For fertility planning, combine calendar tracking with other methods like basal body temperature or ovulation predictor kits for better accuracy.',
        tr: 'Adet takvimleri düzenli döngülere sahip kadınlar için en doğrudur (21-35 gün). Tutarlı döngülere sahip kadınların yaklaşık %70-80\'i için adetleri 1-3 gün içinde tahmin edebilirler. Ancak döngüleriniz düzensizse, PKOS gibi hormonal durumlarınız varsa veya stres veya yaşam tarzı değişiklikleri yaşıyorsanız doğruluk azalır. Doğurganlık planlaması için, daha iyi doğruluk için takvim takibini bazal vücut sıcaklığı veya yumurtlama tahmin kitleri gibi diğer yöntemlerle birleştirin.',
      },
    },
    {
      question: {
        en: 'Can I use a period calculator for birth control?',
        tr: 'Doğum kontrolü için adet takvimi kullanabilir miyim?',
      },
      answer: {
        en: 'Period calculators alone are NOT recommended as a reliable birth control method. The calendar method (also called rhythm method) has a typical-use failure rate of 18-24% per year, meaning about 1 in 4-5 women will become pregnant. Sperm can survive up to 5 days in the female reproductive tract, and ovulation timing can vary. If pregnancy prevention is important, use reliable contraception methods like pills, IUDs, condoms, or implants. Fertility awareness methods work best when combined with temperature tracking and cervical mucus monitoring, and should be learned from a trained instructor.',
        tr: 'Adet takvimleri tek başına güvenilir bir doğum kontrol yöntemi olarak ÖNERİLMEZ. Takvim yöntemi (ritim yöntemi olarak da adlandırılır) yılda %18-24 tipik kullanım başarısızlık oranına sahiptir, yani yaklaşık 4-5 kadından 1\'i hamile kalır. Sperm kadın üreme sisteminde 5 güne kadar hayatta kalabilir ve yumurtlama zamanlaması değişebilir. Hamilelik önleme önemliyse, haplar, RİA\'lar, prezervatifler veya implantlar gibi güvenilir doğum kontrol yöntemleri kullanın. Doğurganlık farkındalığı yöntemleri en iyi şekilde sıcaklık takibi ve serviks mukusu izlemesi ile birleştirildiğinde ve eğitimli bir eğitmenden öğrenildiğinde çalışır.',
      },
    },
    {
      question: {
        en: 'When is the most fertile time in my cycle?',
        tr: 'Döngümde en verimli zaman ne zamandır?',
      },
      answer: {
        en: 'The most fertile time is the 2-3 days immediately before ovulation and the day of ovulation itself. Ovulation typically occurs 14 days before your next period starts. The fertile window extends to about 6 days total because sperm can survive in the reproductive tract for up to 5 days. For a typical 28-day cycle, this means days 10-15 are most fertile. However, the exact timing varies based on your individual cycle length. To maximize chances of conception, have intercourse every 1-2 days during your fertile window, especially in the days just before ovulation.',
        tr: 'En verimli zaman, yumurtlamadan hemen önceki 2-3 gün ve yumurtlama gününün kendisidir. Yumurtlama tipik olarak bir sonraki adetiniz başlamadan 14 gün önce gerçekleşir. Verimli pencere toplam yaklaşık 6 güne kadar uzanır çünkü sperm üreme sisteminde 5 güne kadar hayatta kalabilir. Tipik bir 28 günlük döngü için bu, 10-15. günlerin en verimli olduğu anlamına gelir. Ancak tam zamanlama bireysel döngü uzunluğunuza göre değişir. Gebe kalma şansını en üst düzeye çıkarmak için, verimli pencereniz boyunca, özellikle yumurtlamadan hemen önceki günlerde, her 1-2 günde bir cinsel ilişkiye girin.',
      },
    },
    {
      question: {
        en: 'What if my cycle is irregular?',
        tr: 'Döngüm düzensizse ne olur?',
      },
      answer: {
        en: 'Irregular cycles (varying by more than 7-9 days month to month) make period prediction less reliable. Track your cycles for at least 3-6 months to identify your shortest and longest cycles. Use your shortest cycle length for conservative fertility planning. Irregular cycles can be caused by stress, weight changes, PCOS, thyroid disorders, perimenopause, or other hormonal conditions. If your cycles are consistently irregular, consult a gynecologist. They may recommend hormone testing, ultrasound, or other diagnostic tests. For fertility tracking with irregular cycles, consider using ovulation predictor kits or tracking basal body temperature for more accurate ovulation detection.',
        tr: 'Düzensiz döngüler (aydan aya 7-9 günden fazla değişen) adet tahminini daha az güvenilir hale getirir. En kısa ve en uzun döngülerinizi belirlemek için döngülerinizi en az 3-6 ay boyunca takip edin. Muhafazakar doğurganlık planlaması için en kısa döngü uzunluğunuzu kullanın. Düzensiz döngüler stres, kilo değişiklikleri, PKOS, tiroid bozuklukları, perimenopoz veya diğer hormonal durumlardan kaynaklanabilir. Döngüleriniz sürekli düzensizse, bir jinekoloğa danışın. Hormon testi, ultrason veya diğer tanı testlerini önerebilirler. Düzensiz döngülerle doğurganlık takibi için, daha doğru yumurtlama tespiti için yumurtlama tahmin kitleri kullanmayı veya bazal vücut sıcaklığını takip etmeyi düşünün.',
      },
    },
    {
      question: {
        en: 'Can stress or lifestyle changes affect my period?',
        tr: 'Stres veya yaşam tarzı değişiklikleri adetimi etkileyebilir mi?',
      },
      answer: {
        en: 'Yes, stress and lifestyle changes significantly impact menstrual cycles. High stress levels can delay ovulation or cause missed periods through the hypothalamic-pituitary-ovarian axis disruption. Other factors include: significant weight loss or gain (affecting hormone production), intense exercise or athletic training (especially with low body fat), sleep disruption or shift work, travel and time zone changes, illness or infection, and certain medications. Even positive life changes (new job, moving, relationship changes) can affect your cycle. Most women experience occasional cycle variations due to these factors. If stress-related changes persist for more than 2-3 cycles, consider stress management techniques and consult a healthcare provider.',
        tr: 'Evet, stres ve yaşam tarzı değişiklikleri adet döngülerini önemli ölçüde etkiler. Yüksek stres seviyeleri hipotalamus-hipofiz-over ekseni bozulması yoluyla yumurtlamayı geciktirebilir veya adetlerin kaçırılmasına neden olabilir. Diğer faktörler şunlardır: önemli kilo kaybı veya alımı (hormon üretimini etkiler), yoğun egzersiz veya atletik antrenman (özellikle düşük vücut yağı ile), uyku bozukluğu veya vardiyalı çalışma, seyahat ve saat dilimi değişiklikleri, hastalık veya enfeksiyon ve belirli ilaçlar. Hatta olumlu yaşam değişiklikleri bile (yeni iş, taşınma, ilişki değişiklikleri) döngünüzü etkileyebilir. Çoğu kadın bu faktörler nedeniyle ara sıra döngü varyasyonları yaşar. Stresle ilgili değişiklikler 2-3 döngüden fazla devam ederse, stres yönetimi tekniklerini düşünün ve bir sağlık sağlayıcısına danışın.',
      },
    },
  ],

  disclaimer: {
    en: 'This period calculator provides estimates based on average cycle data and should not be used as a sole method for birth control or medical diagnosis. Menstrual cycles naturally vary, and predictions may not account for individual differences, hormonal conditions, stress, or lifestyle factors. This tool is for educational and planning purposes only. For fertility planning, pregnancy prevention, or concerns about irregular cycles, consult with a qualified healthcare provider or gynecologist. If you experience severe pain, very heavy bleeding, or significant cycle irregularities, seek medical attention. This calculator cannot diagnose conditions like PCOS, endometriosis, or other reproductive health issues.',
    tr: 'Bu adet takvimi ortalama döngü verilerine dayalı tahminler sağlar ve doğum kontrolü veya tıbbi teşhis için tek yöntem olarak kullanılmamalıdır. Adet döngüleri doğal olarak değişir ve tahminler bireysel farklılıkları, hormonal durumları, stresi veya yaşam tarzı faktörlerini hesaba katmayabilir. Bu araç yalnızca eğitim ve planlama amaçlıdır. Doğurganlık planlaması, hamilelik önleme veya düzensiz döngülerle ilgili endişeler için nitelikli bir sağlık sağlayıcısı veya jinekologa danışın. Şiddetli ağrı, çok ağır kanama veya önemli döngü düzensizlikleri yaşarsanız, tıbbi yardım alın. Bu hesaplayıcı PKOS, endometrioz veya diğer üreme sağlığı sorunları gibi durumları teşhis edemez.',
  },

  references: [
    {
      title: 'Menstrual Cycle: What\'s Normal, What\'s Not',
      source: 'Mayo Clinic',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186',
    },
    {
      title: 'Your Menstrual Cycle',
      source: 'Office on Women\'s Health, U.S. Department of Health and Human Services',
      url: 'https://www.womenshealth.gov/menstrual-cycle',
    },
    {
      title: 'Fertility Awareness-Based Methods of Family Planning',
      source: 'American College of Obstetricians and Gynecologists (ACOG)',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      title: 'Ovulation Calculator and Calendar',
      source: 'American Pregnancy Association',
      url: 'https://americanpregnancy.org/getting-pregnant/ovulation-calculator/',
    },
    {
      title: 'The Normal Menstrual Cycle and the Control of Ovulation',
      source: 'Endotext, NCBI Bookshelf',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK279054/',
    },
    {
      title: 'Menstrual Cycle Variability and the Risk of Cardiovascular Disease',
      source: 'Journal of the American Heart Association',
      url: 'https://www.ahajournals.org/doi/10.1161/JAHA.119.012853',
    },
    {
      title: 'Physiology, Ovulation',
      source: 'StatPearls, NCBI',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK441996/',
    },
    {
      title: 'Period Problems',
      source: 'NHS (National Health Service, UK)',
      url: 'https://www.nhs.uk/conditions/periods/period-problems/',
    },
  ],
};
