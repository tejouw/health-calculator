import { CalculatorContent } from '@/types/calculator';

export const spfSunscreenContent: CalculatorContent = {
  en: {
    whatIs: `The Sun Protection Factor (SPF) Calculator is a practical tool designed to help you understand how long you can safely stay in the sun based on your skin type, the sunscreen you're using, and current UV conditions. By combining the Fitzpatrick skin classification system with real-world SPF effectiveness data and UV index levels, this calculator provides personalized sun safety recommendations.

Understanding your sun exposure limits is crucial for preventing sunburn, reducing skin cancer risk, and maintaining healthy skin. The calculator takes into account that real-world sunscreen effectiveness is approximately 60% of the theoretical value due to factors like uneven application, sweating, and product degradation over time.

Sun protection is not just about avoiding sunburn — it's about long-term health. Ultraviolet (UV) radiation from the sun is the primary cause of skin cancer, which is the most common form of cancer worldwide. Regular, unprotected sun exposure also accelerates skin aging, causing wrinkles, dark spots, and loss of skin elasticity.`,

    howToCalculate: `To calculate your safe sun exposure time, follow these steps:

1. **Determine Your Skin Type**: Use the Fitzpatrick scale (Types I-VI) to identify your skin's natural sensitivity to UV radiation. This is based on how your skin typically reacts to sun exposure — whether it burns easily or tans readily.

2. **Note Your SPF Value**: Check the SPF rating on your sunscreen bottle. Common values are SPF 15, 30, 50, and 100. Higher SPF provides marginally more protection.

3. **Check the UV Index**: Look up the current UV index for your location using a weather app or website. The UV index ranges from 1 (low) to 11+ (extreme) and varies by time of day, season, altitude, and cloud cover.

4. **Select Your Activity**: Choose whether you'll be doing normal outdoor activities, swimming, or exercising heavily (sweating), as this affects how quickly sunscreen wears off.

5. **Calculate**: The tool combines these factors using the formula: Safe Exposure Time = Base Burn Time × UV Adjustment Factor × SPF Value × 0.6 (real-world effectiveness).`,

    formulaDetails: `The calculation uses several scientifically-based components:

**Base Burn Time (Minimal Erythemal Dose - MED):**
This is the time it takes for unprotected skin to show redness at a standard UV index of 6. Each Fitzpatrick skin type has a different base time:
- Type I: ~7 minutes
- Type II: ~15 minutes
- Type III: ~25 minutes
- Type IV: ~37 minutes
- Type V: ~52 minutes
- Type VI: ~75 minutes

**UV Index Adjustment Factor:**
The UV index directly affects burn time. Lower UV means longer safe exposure:
- UV 1-2: ×3.0 (three times the base)
- UV 3-5: ×1.5
- UV 6-7: ×1.0 (baseline)
- UV 8-10: ×0.7
- UV 11+: ×0.5 (half the base time)

**SPF Multiplication:**
SPF value multiplies the adjusted burn time, but real-world effectiveness is approximately 60% of the laboratory-tested value.

**Reapplication Schedule:**
- Normal activity: Every 2 hours or at safe exposure limit
- Swimming: Every 40 minutes
- Heavy sweating: Every 60 minutes`,

    interpretation: `Understanding your results:

**Safe Exposure Time**: This is the estimated maximum time you should spend in direct sunlight before your risk of sunburn increases significantly. Always err on the side of caution — the actual time may be shorter depending on individual factors.

**Reapplication Time**: Regardless of your safe exposure time, you should reapply sunscreen at the intervals shown. Even "all day" sunscreens need reapplication. Water and sweat break down the protective layer faster.

**Burn Time Without Sunscreen**: This shows how quickly your unprotected skin would begin to burn. This emphasizes why sun protection is essential, especially for fair-skinned individuals.

**Vitamin D Time**: The short exposure time needed (without sunscreen) to produce adequate vitamin D. This only applies when the UV index is 3 or higher and during peak sun hours (10 AM - 3 PM).`,

    limitations: `This calculator provides estimates based on average values and should be used as a general guide:

- Individual skin sensitivity varies even within the same Fitzpatrick type
- Sunscreen effectiveness depends heavily on proper application (most people apply too little)
- The recommended amount is 2 mg/cm² — about a shot glass full for the entire body
- Environmental factors like reflection from water, sand, or snow can increase UV exposure
- Altitude increases UV exposure by approximately 10-12% per 1,000 meters
- Medications (antibiotics, retinoids, NSAIDs) can increase sun sensitivity
- Cloud cover blocks some but not all UV radiation — you can still burn on cloudy days
- This calculator does not account for UVA exposure, which contributes to aging and some skin cancers`,

    healthRisks: `Unprotected sun exposure carries significant health risks:

**Immediate Risks:**
- Sunburn (first-degree or even second-degree burns)
- Sun poisoning (severe sunburn with fever, chills, nausea)
- Heat exhaustion and heatstroke
- Eye damage (photokeratitis)

**Long-term Risks:**
- Skin cancer (melanoma, basal cell carcinoma, squamous cell carcinoma)
- Premature skin aging (photoaging — wrinkles, sagging, age spots)
- Eye conditions (cataracts, macular degeneration)
- Immune system suppression
- Actinic keratosis (precancerous skin lesions)

According to the World Health Organization, between 2 and 3 million non-melanoma skin cancers and approximately 132,000 melanoma skin cancers occur globally each year. One in five Americans will develop skin cancer by age 70.`,

    healthBenefits: `Moderate, protected sun exposure has important health benefits:

- **Vitamin D Production**: Sunlight triggers vitamin D synthesis in the skin, essential for bone health, immune function, and mood regulation
- **Circadian Rhythm**: Morning sunlight helps regulate sleep-wake cycles
- **Mental Health**: Sunlight exposure is linked to improved mood and reduced risk of seasonal depression
- **Serotonin Production**: UV exposure helps trigger serotonin release in the brain

The key is finding the right balance — enough sun for health benefits while minimizing skin damage through proper protection.`,

    medicalDisclaimer: `This SPF calculator provides estimates for educational purposes only and should not replace professional medical advice. Sun sensitivity varies significantly between individuals. If you have a history of skin cancer, use photosensitizing medications, or have conditions affecting UV sensitivity, consult a dermatologist for personalized sun protection guidance. Always apply broad-spectrum sunscreen protecting against both UVA and UVB rays.`,

    references: [
      'World Health Organization (WHO). Ultraviolet radiation and health.',
      'Fitzpatrick, T.B. (1988). The validity and practicality of sun-reactive skin types I through VI. Archives of Dermatology.',
      'American Academy of Dermatology. Sunscreen FAQs.',
      'Skin Cancer Foundation. Sun Protection.',
      'U.S. Environmental Protection Agency. UV Index Scale.',
      'Holick, M.F. (2007). Vitamin D Deficiency. New England Journal of Medicine.',
    ],

    tips: [
      'Apply sunscreen 15-30 minutes before sun exposure for full effectiveness',
      'Use at least SPF 30 for everyday protection',
      'Reapply every 2 hours, or more often if swimming or sweating',
      'Wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses',
      'Seek shade during peak UV hours (10 AM - 4 PM)',
      'Check the UV index before planning outdoor activities',
      'Remember that sand, water, and snow reflect UV rays, increasing exposure',
      'Lip balm with SPF protects often-forgotten lips from sun damage',
    ],

    faqs: [
      {
        question: 'What does SPF actually mean?',
        answer: 'SPF (Sun Protection Factor) measures how much UVB radiation is needed to cause sunburn on protected skin versus unprotected skin. SPF 30 means it takes 30 times more UV exposure to burn with sunscreen than without. However, real-world effectiveness is lower due to improper application and environmental factors.',
      },
      {
        question: 'Is SPF 100 twice as good as SPF 50?',
        answer: 'No. SPF 30 blocks about 97% of UVB rays, SPF 50 blocks 98%, and SPF 100 blocks about 99%. The difference between SPF 50 and 100 is only 1%. Higher SPF gives marginally more protection but the difference is minimal above SPF 50.',
      },
      {
        question: 'Can I get vitamin D while wearing sunscreen?',
        answer: 'In theory, sunscreen blocks the UVB rays needed for vitamin D synthesis. However, most people don\'t apply enough sunscreen or miss areas, so some vitamin D production still occurs. For dedicated vitamin D synthesis, brief unprotected exposure (5-15 minutes depending on skin type) before applying sunscreen is an option.',
      },
      {
        question: 'Do I need sunscreen on cloudy days?',
        answer: 'Yes! Up to 80% of UV rays can penetrate clouds. You can get sunburned on overcast days, especially at higher UV index levels. Apply sunscreen whenever the UV index is 3 or higher, regardless of cloud cover.',
      },
      {
        question: 'What is the Fitzpatrick skin type scale?',
        answer: 'The Fitzpatrick scale classifies skin into six types based on how it responds to UV exposure — from Type I (very fair, always burns, never tans) to Type VI (very dark, never burns). It was developed by dermatologist Thomas Fitzpatrick in 1975 and is widely used in dermatology.',
      },
      {
        question: 'How much sunscreen should I apply?',
        answer: 'Dermatologists recommend applying approximately 2 mg per cm² of skin — about one ounce (a shot glass full) for the entire body. Most people apply only 25-50% of this amount, significantly reducing the effective SPF protection.',
      },
      {
        question: 'Does a higher altitude increase sun exposure?',
        answer: 'Yes. UV radiation increases by approximately 10-12% for every 1,000 meters of altitude gain. At ski resorts or mountain hikes, you need extra sun protection due to both increased UV and reflection from snow.',
      },
      {
        question: 'What is the difference between UVA and UVB rays?',
        answer: 'UVB rays cause sunburn and are the primary cause of skin cancer. They are strongest between 10 AM and 4 PM. UVA rays penetrate deeper into the skin, cause premature aging, and contribute to skin cancer risk. Broad-spectrum sunscreens protect against both types.',
      },
    ],
  },
  tr: {
    whatIs: `Güneş Koruma Faktörü (SPF) Hesaplayıcı, cilt tipinize, kullandığınız güneş kremine ve mevcut UV koşullarına göre güneşte ne kadar güvenle kalabileceğinizi anlamanıza yardımcı olan pratik bir araçtır. Fitzpatrick cilt sınıflandırma sistemi, gerçek dünya SPF etkinlik verileri ve UV indeks seviyelerini birleştirerek size kişiselleştirilmiş güneş güvenliği önerileri sunar.

Güneşe maruz kalma sınırlarınızı anlamak, güneş yanığını önlemek, cilt kanseri riskini azaltmak ve sağlıklı bir cilde sahip olmak için çok önemlidir. Hesaplayıcı, düzensiz sürme, terleme ve ürünün zamanla bozulması gibi faktörler nedeniyle gerçek dünya güneş kremi etkinliğinin teorik değerin yaklaşık %60'ı olduğunu hesaba katar.

Güneş koruması sadece güneş yanığından kaçınmakla ilgili değildir — uzun vadeli sağlığınızla da ilgilidir. Güneşten gelen ultraviyole (UV) radyasyonu, dünya çapında en yaygın kanser türü olan cilt kanserinin birincil nedenidir. Düzenli ve korumasız güneşe maruz kalma ayrıca cildin yaşlanmasını hızlandırarak kırışıklıklara, koyu lekelere ve cilt elastikiyetinin kaybına neden olur.`,

    howToCalculate: `Güvenli güneşlenme sürenizi hesaplamak için şu adımları izleyin:

1. **Cilt Tipinizi Belirleyin**: Fitzpatrick ölçeğini (Tip I-VI) kullanarak cildinizin UV radyasyonuna karşı doğal hassasiyetini tanımlayın. Bu, cildinizin güneşe maruz kaldığında tipik olarak nasıl tepki verdiğine — kolay yanıp yanmadığına veya kolayca bronzlaşıp bronzlaşmadığına — dayanır.

2. **SPF Değerinizi Kontrol Edin**: Güneş kremi şişenizin üzerindeki SPF derecesini kontrol edin. Yaygın değerler SPF 15, 30, 50 ve 100'dür. Daha yüksek SPF marjinal olarak daha fazla koruma sağlar.

3. **UV İndeksini Kontrol Edin**: Bulunduğunuz konumun mevcut UV indeksini bir hava durumu uygulaması veya web sitesi kullanarak öğrenin. UV indeksi 1 (düşük) ile 11+ (aşırı) arasında değişir ve günün saatine, mevsime, rakıma ve bulut örtüsüne göre farklılık gösterir.

4. **Aktivitenizi Seçin**: Normal dış mekan aktivitesi mi yapacağınızı, yüzüp yüzmeyeceğinizi veya yoğun egzersiz (terleme) yapıp yapmayacağınızı belirleyin. Bu, güneş kreminin ne kadar çabuk aşındığını etkiler.

5. **Hesaplayın**: Araç bu faktörleri şu formülle birleştirir: Güvenli Maruziyet Süresi = Baz Yanma Süresi × UV Düzeltme Faktörü × SPF Değeri × 0,6 (gerçek dünya etkinliği).`,

    formulaDetails: `Hesaplama birçok bilimsel temelli bileşen kullanır:

**Baz Yanma Süresi (Minimal Eritemal Doz - MED):**
Korumasız cildin standart UV indeksi 6'da kızarıklık göstermesi için geçen süredir. Her Fitzpatrick cilt tipinin farklı bir baz süresi vardır:
- Tip I: ~7 dakika
- Tip II: ~15 dakika
- Tip III: ~25 dakika
- Tip IV: ~37 dakika
- Tip V: ~52 dakika
- Tip VI: ~75 dakika

**UV İndeksi Düzeltme Faktörü:**
UV indeksi yanma süresini doğrudan etkiler. Düşük UV daha uzun güvenli maruziyet anlamına gelir:
- UV 1-2: ×3,0 (bazın üç katı)
- UV 3-5: ×1,5
- UV 6-7: ×1,0 (temel değer)
- UV 8-10: ×0,7
- UV 11+: ×0,5 (baz sürenin yarısı)

**SPF Çarpanı:**
SPF değeri düzeltilmiş yanma süresini çarpar, ancak gerçek dünya etkinliği laboratuvarda test edilen değerin yaklaşık %60'ıdır.

**Yeniden Sürme Programı:**
- Normal aktivite: Her 2 saatte bir veya güvenli maruziyet sınırında
- Yüzme: Her 40 dakikada bir
- Yoğun terleme: Her 60 dakikada bir`,

    interpretation: `Sonuçlarınızı anlama:

**Güvenli Güneşlenme Süresi**: Bu, güneş yanığı riskiniz önemli ölçüde artmadan önce doğrudan güneş ışığında geçirebileceğiniz tahmini maksimum süredir. Her zaman ihtiyatlı olun — bireysel faktörlere bağlı olarak gerçek süre daha kısa olabilir.

**Yeniden Sürme Zamanı**: Güvenli maruziyet süreniz ne olursa olsun, güneş kremini gösterilen aralıklarla yeniden sürmelisiniz. "Tüm gün" güneş kremleri bile yeniden sürülmelidir. Su ve ter koruyucu tabakayı daha hızlı bozar.

**Kremsiz Yanma Süresi**: Korumasız cildinizin ne kadar çabuk yanmaya başlayacağını gösterir. Bu, özellikle açık tenli bireyler için güneş korumasının neden önemli olduğunu vurgular.

**D Vitamini Süresi**: Yeterli D vitamini üretmek için gereken kısa maruziyet süresi (güneş kremsiz). Bu yalnızca UV indeksi 3 veya daha yüksek olduğunda ve güneşin en güçlü olduğu saatlerde (10:00-15:00) geçerlidir.`,

    limitations: `Bu hesaplayıcı ortalama değerlere dayalı tahminler sunar ve genel bir kılavuz olarak kullanılmalıdır:

- Bireysel cilt hassasiyeti aynı Fitzpatrick tipi içinde bile farklılık gösterir
- Güneş kreminin etkinliği büyük ölçüde doğru uygulamaya bağlıdır (çoğu kişi yetersiz miktarda sürer)
- Önerilen miktar 2 mg/cm²'dir — tüm vücut için yaklaşık bir çay bardağı dolusu
- Su, kum veya kardan yansıma gibi çevresel faktörler UV maruziyetini artırabilir
- Rakım, her 1.000 metre yükseklikte UV maruziyetini yaklaşık %10-12 artırır
- İlaçlar (antibiyotikler, retinoidler, ağrı kesiciler) güneş hassasiyetini artırabilir
- Bulut örtüsü UV radyasyonunun bir kısmını engeller ama tamamını değil — bulutlu günlerde de yanabilirsiniz
- Bu hesaplayıcı, yaşlanmaya ve bazı cilt kanserlerine katkıda bulunan UVA maruziyetini hesaba katmaz`,

    healthRisks: `Korumasız güneşe maruz kalma ciddi sağlık riskleri taşır:

**Anlık Riskler:**
- Güneş yanığı (birinci derece ve hatta ikinci derece yanıklar)
- Güneş zehirlenmesi (ateş, titreme, bulantı ile şiddetli güneş yanığı)
- Sıcak çarpması ve güneş çarpması
- Göz hasarı (fotokeratit)

**Uzun Vadeli Riskler:**
- Cilt kanseri (melanom, bazal hücreli karsinom, skuamöz hücreli karsinom)
- Erken cilt yaşlanması (fotoyaşlanma — kırışıklıklar, sarkma, yaş lekeleri)
- Göz hastalıkları (katarakt, makula dejenerasyonu)
- Bağışıklık sistemi baskılanması
- Aktinik keratoz (kanser öncesi cilt lezyonları)

Dünya Sağlık Örgütü'ne göre, dünya çapında her yıl 2 ila 3 milyon melanom dışı cilt kanseri ve yaklaşık 132.000 melanom cilt kanseri görülmektedir.`,

    healthBenefits: `Ölçülü ve korumalı güneşe maruz kalmanın önemli sağlık faydaları vardır:

- **D Vitamini Üretimi**: Güneş ışığı ciltte D vitamini sentezini tetikler; kemik sağlığı, bağışıklık fonksiyonu ve ruh hali düzenlemesi için gereklidir
- **Sirkadiyen Ritim**: Sabah güneş ışığı uyku-uyanıklık döngülerini düzenlemeye yardımcı olur
- **Ruh Sağlığı**: Güneş ışığına maruz kalma, iyileşmiş ruh hali ve mevsimsel depresyon riskinin azalması ile bağlantılıdır
- **Serotonin Üretimi**: UV maruziyeti beyinde serotonin salınımını tetiklemeye yardımcı olur

Anahtar, doğru dengeyi bulmaktır — sağlık faydaları için yeterli güneş alırken, uygun korumayla cilt hasarını en aza indirmek.`,

    medicalDisclaimer: `Bu SPF hesaplayıcı yalnızca eğitim amaçlı tahminler sunar ve profesyonel tıbbi tavsiyenin yerini almaz. Güneş hassasiyeti bireyler arasında önemli ölçüde farklılık gösterir. Cilt kanseri öykünüz varsa, ışığa duyarlılık artıran ilaçlar kullanıyorsanız veya UV hassasiyetini etkileyen durumlarınız varsa, kişiselleştirilmiş güneş koruması rehberliği için bir dermatolog ile görüşün. Her zaman hem UVA hem de UVB ışınlarına karşı koruyan geniş spektrumlu güneş kremi uygulayın.`,

    references: [
      'Dünya Sağlık Örgütü (WHO). Ultraviyole radyasyon ve sağlık.',
      'Fitzpatrick, T.B. (1988). The validity and practicality of sun-reactive skin types I through VI. Archives of Dermatology.',
      'Amerikan Dermatoloji Akademisi. Güneş Kremi SSS.',
      'Cilt Kanseri Vakfı. Güneş Koruması.',
      'ABD Çevre Koruma Ajansı. UV İndeksi Ölçeği.',
      'Holick, M.F. (2007). Vitamin D Deficiency. New England Journal of Medicine.',
    ],

    tips: [
      'Tam etkinlik için güneş kremini dışarı çıkmadan 15-30 dakika önce sürün',
      'Günlük koruma için en az SPF 30 kullanın',
      'Her 2 saatte bir veya yüzme/terleme durumunda daha sık yeniden sürün',
      'Koruyucu kıyafet, geniş kenarlı şapka ve UV engelleyici güneş gözlüğü takın',
      'Güneşin en güçlü olduğu saatlerde (10:00-16:00) gölgede kalın',
      'Dış mekan aktivitelerini planlamadan önce UV indeksini kontrol edin',
      'Kum, su ve karın UV ışınlarını yansıtarak maruziyeti artırdığını unutmayın',
      'SPF içeren dudak balsamı, sıklıkla unutulan dudakları güneş hasarından korur',
    ],

    faqs: [
      {
        question: 'SPF gerçekte ne anlama gelir?',
        answer: 'SPF (Güneş Koruma Faktörü), korumalı cilde güneş yanığı oluşturmak için korumasız cilde kıyasla ne kadar fazla UVB radyasyonu gerektiğini ölçer. SPF 30, güneş kremli cildin yanması için kremsiz cilde göre 30 kat daha fazla UV maruziyeti gerektiği anlamına gelir. Ancak gerçek dünya etkinliği, düzensiz sürme ve çevresel faktörler nedeniyle daha düşüktür.',
      },
      {
        question: 'SPF 100, SPF 50\'den iki kat daha mı iyidir?',
        answer: 'Hayır. SPF 30, UVB ışınlarının yaklaşık %97\'sini, SPF 50 %98\'ini ve SPF 100 yaklaşık %99\'unu engeller. SPF 50 ile 100 arasındaki fark sadece %1\'dir. SPF 50\'nin üzerinde daha yüksek SPF marjinal olarak daha fazla koruma sağlar ancak fark minimaldir.',
      },
      {
        question: 'Güneş kremi sürerken D vitamini alabilir miyim?',
        answer: 'Teorik olarak, güneş kremi D vitamini sentezi için gerekli UVB ışınlarını engeller. Ancak çoğu kişi yeterli miktarda güneş kremi sürmez veya bazı bölgeleri atlar, bu yüzden bir miktar D vitamini üretimi yine de gerçekleşir. D vitamini sentezi için güneş kremi sürmeden önce kısa bir korumasız maruziyet (cilt tipine göre 5-15 dakika) bir seçenek olabilir.',
      },
      {
        question: 'Bulutlu günlerde güneş kremi gerekli mi?',
        answer: 'Evet! UV ışınlarının %80\'e kadarı bulutları geçebilir. Özellikle yüksek UV indeks seviyelerinde bulutlu günlerde de güneş yanığı olabilirsiniz. Bulut örtüsünden bağımsız olarak UV indeksi 3 veya daha yüksek olduğunda güneş kremi sürün.',
      },
      {
        question: 'Fitzpatrick cilt tipi ölçeği nedir?',
        answer: 'Fitzpatrick ölçeği, cildi UV maruziyetine nasıl tepki verdiğine göre altı tipe sınıflandırır — Tip I (çok açık ten, her zaman yanar, asla bronzlaşmaz) ile Tip VI (çok koyu ten, asla yanmaz) arasında. 1975 yılında dermatolog Thomas Fitzpatrick tarafından geliştirilmiştir ve dermatolojide yaygın olarak kullanılır.',
      },
      {
        question: 'Ne kadar güneş kremi sürmeliyim?',
        answer: 'Dermatologlar, cilt yüzey alanı başına yaklaşık 2 mg/cm² güneş kremi uygulanmasını önerir — tüm vücut için yaklaşık bir çay bardağı dolusu (30 ml). Çoğu kişi bu miktarın yalnızca %25-50\'sini sürer ve bu da etkili SPF korumasını önemli ölçüde azaltır.',
      },
      {
        question: 'Yüksek rakım güneşe maruz kalmayı artırır mı?',
        answer: 'Evet. UV radyasyonu her 1.000 metre rakım artışında yaklaşık %10-12 artar. Kayak merkezlerinde veya dağ yürüyüşlerinde, hem artan UV hem de kardan yansıma nedeniyle ekstra güneş koruması gerekir.',
      },
      {
        question: 'UVA ve UVB ışınları arasındaki fark nedir?',
        answer: 'UVB ışınları güneş yanığına neden olur ve cilt kanserinin birincil nedenidir. Sabah 10 ile akşam 16 arasında en güçlüdür. UVA ışınları cildin daha derinlerine nüfuz eder, erken yaşlanmaya neden olur ve cilt kanseri riskine katkıda bulunur. Geniş spektrumlu güneş kremleri her iki türe karşı koruma sağlar.',
      },
    ],
  },
};
