import { CalculatorContent } from '@/types/calculator';

export const loveContent: CalculatorContent = {
  en: {
    whatIs:
      'A love calculator is a fun, entertainment-based tool that generates a compatibility percentage between two people based on their names. While not scientifically validated, love calculators have been popular since the early days of the internet, providing a lighthearted way to explore romantic curiosity. The concept draws from various cultural traditions of name numerology and compatibility divination that have existed for centuries. Modern love calculators use algorithms that analyze the letters in both names to produce a consistent result—meaning the same two names will always generate the same percentage. This consistency, combined with the universally relatable desire to understand romantic connections, has made love calculators one of the most searched and shared online tools globally. Millions of people use love calculators daily, whether to test compatibility with a crush, have fun with friends, or simply satisfy curiosity about name-based matching. The appeal lies in the instant gratification of receiving a "verdict" on potential romantic compatibility, even when users understand it\'s purely for entertainment. Love calculators appear across cultures worldwide, reflecting humanity\'s timeless fascination with love, fate, and the possibility that names might hold deeper meaning about our connections with others.',

    howToCalculate:
      'Using a love calculator is simple and instant. Enter the first name of one person in the first field—this could be your name, a friend\'s name, or any name you\'re curious about. Then enter the second name in the second field—perhaps a crush, partner, celebrity, or fictional character. Click the calculate button and watch the magic happen! The calculator processes both names through its algorithm, which typically involves converting letters to numerical values, combining them in specific patterns, and generating a percentage between 1-100%. Higher percentages suggest greater "compatibility" according to the algorithm, while lower percentages indicate less alignment. The calculation is deterministic, meaning the same two names will always produce the same result regardless of which name is entered first—this is by design to ensure fairness. Most love calculators also provide interpretive messages based on the percentage range: 90%+ might indicate a "perfect match," 70-89% a "great connection," and so on. Remember, these results are generated for fun and shouldn\'t influence real relationship decisions. The calculator provides the same result whether you enter full names, first names only, or nicknames—try different variations to see how results change!',

    formulaDetails:
      'Love calculator algorithms vary between implementations, but most follow similar principles rooted in basic numerology and string manipulation. The common approach works as follows: First, both names are normalized by converting to lowercase and removing special characters or spaces. Then, letters are converted to numerical values—often using their position in the alphabet (A=1, B=2, etc.) or ASCII values. These numbers are combined through various operations: addition, multiplication, or more complex transformations. Many calculators use the word "LOVES" as part of the algorithm—counting how many times each letter in "LOVES" appears in both names combined, then manipulating those counts. For example: count L\'s, O\'s, V\'s, E\'s, and S\'s in "JOHN LOVES MARY," sum the counts, and derive a percentage. More sophisticated algorithms might use hash functions to ensure consistent results while appearing random. The formula is typically designed to: (1) produce results between 1-99% (never 0% or 100% for psychological reasons), (2) weight results toward the middle-to-high range for more satisfying user experience, and (3) be symmetric—"John + Mary" equals "Mary + John." While the math is real, the premise that name compatibility indicates romantic compatibility is purely fictional entertainment.',

    categories: [
      {
        range: '0 – 25%',
        label: 'Low Match',
        description: 'Your names suggest a challenging path — but remember, love is about hearts, not letters! Chemistry is built through shared experiences and genuine connection, not alphabetical destiny.',
        color: '#EF4444',
      },
      {
        range: '26 – 50%',
        label: 'Moderate Match',
        description: 'Some sparks between your names! Real compatibility blossoms through communication and getting to know each other over time. Don\'t let a number hold you back from exploring a connection.',
        color: '#F97316',
      },
      {
        range: '51 – 75%',
        label: 'Good Match',
        description: 'Your names show promising vibes! A great foundation for building something special together. The best relationships grow from curiosity, laughter, and shared adventures.',
        color: '#3B82F6',
      },
      {
        range: '76 – 100%',
        label: 'Perfect Match',
        description: 'The stars align with your names! While this is just for fun, take it as an encouraging sign to keep exploring this connection. After all, every great love story needs a little magic.',
        color: '#10B981',
      },
    ],

    limitations:
      'This calculator is purely for entertainment and has absolutely no scientific basis. Name-based compatibility algorithms apply mathematical patterns to letters in names—they cannot predict relationship success or chemistry between two people. Real relationship compatibility is determined by shared values, communication skills, emotional intelligence, mutual respect, trust, life goals alignment, and countless other psychological and social factors that no name algorithm can assess. Famous couples throughout history have proven that names predict nothing about love. Use this calculator for fun and laughter, not as a guide for relationship decisions.',

    healthRisks:
      'While no direct health risks come from this calculator, placing excessive belief in algorithmic compatibility scores can actually be harmful to your emotional wellbeing. Rejecting potential partners solely based on low scores from an entertainment tool means missing genuine connections that could have flourished. Conversely, pursuing someone solely because of a high score ignores the real work that healthy relationships require. Healthy relationships are built on authentic interaction, shared values, and mutual growth—not on letter-based predictions. Trust your instincts, invest in communication, and judge compatibility through real experiences together.',

    alternativeMeasures:
      'If you are genuinely interested in relationship compatibility, several evidence-based approaches exist beyond playful name calculators. Personality compatibility assessments based on validated psychological models (such as the Big Five personality traits) provide meaningful—though imperfect—insights into how individuals interact and complement each other. Attachment style assessments help understand how each person relates in romantic relationships, which is foundational for long-term partnership health. Values alignment conversations explore what matters most to each person, and couples counseling—even before marriage—helps assess and build compatibility. Ultimately, the most reliable measure of compatibility is time spent together: observing how you communicate, handle conflict, support each other, and grow.',

    demographicDifferences:
      'Name-based compatibility calculators do not meaningfully account for cultural, linguistic, or demographic differences in their results. Names carry different meanings, cultural weight, and social connotations across cultures—a name that sounds harmonious in one language may have entirely different associations in another. Different cultures have their own traditions for assessing romantic compatibility: Chinese zodiac matching, Indian kundli (birth chart) matching, and many others reflect cultural values around marriage and partnership rather than scientific prediction. Relationship expectations and norms vary across cultures and generations, making any single algorithmic approach culturally narrow. Ultimately, compatibility is an individual journey that no algorithm—name-based or otherwise—can fully predict or quantify.',

    medicalDisclaimer:
      'This love calculator is designed purely for entertainment purposes and has no scientific, psychological, or predictive validity whatsoever. The results generated by this tool should never be used to make decisions about real relationships, dating choices, or personal matters. Healthy relationships are built on mutual respect, communication, shared values, trust, and genuine emotional connection—none of which can be measured or predicted by name-based algorithms. If you\'re experiencing relationship difficulties or seeking guidance about romantic matters, please consult qualified professionals such as licensed therapists, relationship counselors, or mental health providers. The percentage and messages displayed are randomly generated based on name inputs and do not reflect any real compatibility factors. Have fun, but remember: love is complex, beautiful, and cannot be reduced to a percentage.',

    references: [
      'Psychology Today - The Science of Romantic Attraction',
      'Journal of Social and Personal Relationships - Compatibility Studies',
      'Numerology Historical Documentation - Cultural Name Traditions',
      'Internet Archive - History of Online Love Calculators',
      'Relationship Research Institute - Factors in Successful Partnerships',
      'American Psychological Association - Understanding Romantic Relationships',
    ],

    tips: [
      'Try entering different name variations (full name, nickname, middle name) to see how results change',
      'Share your results with friends for a fun conversation starter',
      'Remember that real compatibility involves communication, shared values, and mutual respect',
      'Use this calculator as entertainment, not relationship guidance',
      'Try calculating compatibility between fictional characters or celebrities for fun',
      'The same names will always give the same result—that\'s by design!',
      'Low percentages don\'t mean anything negative—opposites often attract in real life',
      'High percentages are fun but don\'t guarantee relationship success',
    ],

    faqs: [
      {
        question: 'Is the love calculator accurate?',
        answer:
          'No, love calculators are not scientifically accurate or predictive. They\'re designed purely for entertainment purposes. Real relationship compatibility depends on complex factors like communication, shared values, mutual respect, emotional intelligence, and life goals—none of which can be determined by analyzing names. The percentage you receive is generated by an algorithm that processes the letters in both names, not by any measure of actual romantic potential. Enjoy the results as a fun game, but don\'t take them as relationship advice!',
      },
      {
        question: 'How does the love calculator work?',
        answer:
          'The love calculator uses an algorithm that converts the letters in both names to numerical values, then combines them through mathematical operations to generate a percentage between 1-99%. Common methods include counting specific letters (like those in "LOVES"), adding up letter positions in the alphabet, or using hash functions for consistency. The algorithm ensures that the same two names always produce the same result, and that swapping the order of names doesn\'t change the outcome. While the math is real, the premise that this measures actual compatibility is purely fictional entertainment.',
      },
      {
        question: 'Why do the same names always give the same result?',
        answer:
          'Love calculators are designed to be deterministic—meaning the same inputs always produce the same outputs. This is intentional for several reasons: it makes results feel more "meaningful" (as if the universe has spoken), it allows you to share your result knowing friends will get the same answer if they try, and it prevents disappointment from getting different results each time. The algorithm processes names the same way every time, like a mathematical formula. Try entering your names in different orders—you\'ll notice the result stays the same, which is also by design for fairness.',
      },
      {
        question: 'Can I use nicknames or full names?',
        answer:
          'Yes! You can enter any version of a name—first name only, full name, nickname, or even initials. Different name variations will produce different results because the algorithm processes whatever letters you enter. This can be a fun way to explore: try "Mike" vs "Michael," "Jenny" vs "Jennifer," or include/exclude middle names. Some people try multiple variations to find the combination with the highest percentage. Remember, all results are equally valid (or equally meaningless) since this is purely for entertainment!',
      },
      {
        question: 'Why did I get a low percentage?',
        answer:
          'A low percentage simply means the algorithm produced that number based on the letter combinations in both names—it says nothing about real-world compatibility! Many happy, long-lasting couples would likely score "low" on name-based calculators, while incompatible pairs might score "high." Real relationships depend on communication, effort, shared values, and genuine connection. Don\'t let a low number discourage you from pursuing someone you\'re interested in. The calculator is for fun only, and sometimes the most unexpected matches create the best love stories!',
      },
      {
        question: 'Can I calculate compatibility with celebrities or fictional characters?',
        answer:
          'Absolutely! One of the most popular uses of love calculators is testing compatibility with celebrities, fictional characters, or even historical figures. Try your name with your favorite movie star, book character, or anyone else you\'re curious about. It\'s a fun way to engage with fan communities or just satisfy curiosity. The calculator treats all names equally—it has no way of knowing if you\'re entering a real person, celebrity, or fictional character. Have fun with it!',
      },
      {
        question: 'Is this the same as numerology?',
        answer:
          'Love calculators draw loose inspiration from numerology—the belief that numbers derived from names and dates have mystical significance. Traditional numerology involves complex calculations to determine "life path numbers" and compatibility. Modern love calculators are much simpler, using basic algorithms to generate entertainment-focused results quickly. While numerology is a belief system some take seriously, love calculators are designed purely as fun tools with no claims of mystical or predictive power. They\'re more like a digital version of childhood games like "MASH" or paper fortune tellers.',
      },
      {
        question: 'Can I share my results on social media?',
        answer:
          'Yes! Our love calculator includes a share feature that lets you easily share your results on social media or copy them to your clipboard. Sharing love calculator results is one of the most popular uses of the tool—it sparks conversations, creates fun interactions, and can even be a playful way to express interest in someone. The shareable format includes both names and the percentage, making it easy for friends to understand and perhaps try the calculator themselves. Just tap the "Share Result" button after calculating!',
      },
      {
        question: 'Why are results never 0% or 100%?',
        answer:
          'Most love calculators, including ours, are designed to produce results between 1-99% rather than 0% or 100%. This is a psychological design choice: 0% feels unnecessarily harsh and might upset users, while 100% feels unrealistically perfect and less interesting. Results in the 1-99% range feel more "authentic" and leave room for interpretation. Additionally, no algorithm should claim to perfectly predict love (100%) or completely rule it out (0%). The exception is self-matching—entering the same name twice typically produces 100% as a fun easter egg about self-love!',
      },
      {
        question: 'What factors actually determine relationship compatibility?',
        answer:
          'Real relationship compatibility depends on factors that no name-based calculator can measure: effective communication skills, shared core values and life goals, mutual respect and trust, emotional intelligence and empathy, conflict resolution abilities, physical and emotional attraction, compatible life visions (marriage, children, career), similar attitudes toward finances, supporting each other\'s personal growth, and willingness to put in effort during difficult times. Research shows that successful relationships require ongoing work, not predetermined compatibility. If you\'re serious about a relationship, focus on building these foundations rather than any percentage.',
      },
    ],
  },
  tr: {
    whatIs:
      'Aşk hesaplayıcı, iki kişi arasındaki uyumluluk yüzdesini isimlerine göre üreten eğlenceli, eğlence amaçlı bir araçtır. Bilimsel olarak doğrulanmamış olsa da, aşk hesaplayıcıları internetin ilk günlerinden beri popülerdir ve romantik merakı keşfetmenin hafif bir yolunu sunar. Kavram, yüzyıllardır var olan çeşitli kültürel isim numerolojisi ve uyumluluk kehaneti geleneklerinden yararlanır. Modern aşk hesaplayıcıları, tutarlı bir sonuç üretmek için her iki isimdeki harfleri analiz eden algoritmalar kullanır—yani aynı iki isim her zaman aynı yüzdeyi üretecektir. Bu tutarlılık, romantik bağlantıları anlama arzusunun evrensel çekiciliğiyle birleştiğinde, aşk hesaplayıcılarını dünya genelinde en çok aranan ve paylaşılan çevrimiçi araçlardan biri haline getirmiştir. Milyonlarca insan aşk hesaplayıcılarını günlük olarak kullanır; ister hoşlandıkları biriyle uyumluluğu test etmek, ister arkadaşlarla eğlenmek, isterse sadece isim tabanlı eşleşme hakkındaki merakı gidermek için.',

    howToCalculate:
      'Aşk hesaplayıcısı kullanmak basit ve anlıktır. İlk alana bir kişinin adını girin—bu sizin adınız, bir arkadaşınızın adı veya merak ettiğiniz herhangi bir isim olabilir. Sonra ikinci alana ikinci ismi girin—belki hoşlandığınız biri, partneriniz, bir ünlü veya kurgusal bir karakter. Hesapla düğmesine tıklayın ve sihrin gerçekleşmesini izleyin! Hesaplayıcı her iki ismi algoritması aracılığıyla işler; bu genellikle harfleri sayısal değerlere dönüştürmeyi, belirli kalıplarda birleştirmeyi ve %1-100 arasında bir yüzde üretmeyi içerir. Daha yüksek yüzdeler algoritmaya göre daha fazla "uyumluluk" önerir, daha düşük yüzdeler ise daha az uyum gösterir. Hesaplama deterministiktir, yani aynı iki isim hangi ismin önce girildiğine bakılmaksızın her zaman aynı sonucu üretecektir—bu adalet sağlamak için tasarım gereğidir.',

    formulaDetails:
      'Aşk hesaplayıcı algoritmaları uygulamalar arasında farklılık gösterir, ancak çoğu temel numeroloji ve string manipülasyonuna dayanan benzer ilkeleri takip eder. Yaygın yaklaşım şu şekilde çalışır: İlk olarak, her iki isim küçük harfe dönüştürülerek ve özel karakterler veya boşluklar kaldırılarak normalleştirilir. Ardından, harfler sayısal değerlere dönüştürülür—genellikle alfabedeki konumlarını (A=1, B=2, vb.) veya ASCII değerlerini kullanarak. Bu sayılar çeşitli işlemlerle birleştirilir: toplama, çarpma veya daha karmaşık dönüşümler. Birçok hesaplayıcı algoritmanın bir parçası olarak "LOVES" kelimesini kullanır—her iki isimdeki "LOVES" harflerinin kaç kez göründüğünü sayar, sonra bu sayıları manipüle eder. Matematik gerçek olsa da, isim uyumluluğunun romantik uyumluluğu gösterdiği önermesi tamamen kurgusal eğlencedir.',

    categories: [
      {
        range: '0 – 25%',
        label: 'Düşük Eşleşme',
        description: 'İsimleriniz zorlu bir yol öneriyor — ama unutmayın, aşk harflerle değil, kalpleriyle ilgilidir! Kimya, ortak deneyimler ve gerçek bağlantı üzerinden zamanla oluşur.',
        color: '#EF4444',
      },
      {
        range: '26 – 50%',
        label: 'Orta Eşleşme',
        description: 'İsimleriniz arasında bazı kıvılcımlar var! Gerçek uyumluluk, birbirini tanıma ve iletişim yoluyla zamanla çiçek açar. Bir sayı, bir bağlantıyı keşfetmenin önüne geçmemeli.',
        color: '#F97316',
      },
      {
        range: '51 – 75%',
        label: 'İyi Eşleşme',
        description: 'İsimleriniz umut verici titreşimler gösteriyor! Birlikte özel bir şey oluşturmanın harika bir temelini sunuyor. En iyi ilişkiler merak, kahkaha ve ortak maceralardan doğar.',
        color: '#3B82F6',
      },
      {
        range: '76 – 100%',
        label: 'Mükemmel Eşleşme',
        description: 'Yıldızlar isimlerinizle hizalandı! Bu sadece eğlence olsa da, bu bağlantıyı keşfetmeye devam etmeniz için teşvik edici bir işaret olarak alın. Sonuçta, her harika aşk hikayesinin biraz büyü ihtiyacı vardır.',
        color: '#10B981',
      },
    ],

    limitations:
      'Bu hesaplayıcı tamamen eğlence amaçlıdır ve hiçbir bilimsel dayanağı yoktur. İsim tabanlı uyumluluk algoritmaları, isimlerdeki harflere matematiksel kalıplar uygular—ancak ilişki başarısını veya iki kişi arasındaki kimyayı tahmin edemezler. Gerçek ilişki uyumluluğu, ortak değerler, iletişim becerileri, duygusal zeka, karşılıklı saygı, güven, yaşam hedefleri uyumu ve hiçbir isim algoritmasının değerlendiremeyeceği sayısız psikolojik ve sosyal faktör tarafından belirlenir. Tarih boyunca pek çok ünlü çift, isimlerin aşk hakkında hiçbir şey tahmin edemediğini kanıtlamıştır. Bu hesaplayıcıyı eğlence ve eğlence için kullanın, ilişki kararları için rehber olarak değil.',

    healthRisks:
      'Bu hesaplayıcıdan doğrudan sağlık riskleri olmasa da, algoritma tabanlı uyumluluk puanlarına aşırı inanmak duygusal refahınıza zarar verebilir. Eğlence aracının düşük puanları nedeniyle olası ortakları reddetmek, gerçekten gelişebilecek özgün bağlantıları kaçırmanıza yol açabilir. Öte yandan, birini yalnızca yüksek bir puan nedeniyle takip etmek, sağlıklı ilişkilerin gerektirdiği gerçek çalışmayı göz ardı eder. Sağlıklı ilişkiler, özgün etkileşim, ortak değerler ve karşılıklı büyüme üzerine kuruludur—harf tabanlı tahminlere değil. İçgüdülerinize güvenin, iletişime yatırım yapın ve uyumluluğu birlikte geçirilen gerçek deneyimler aracılığıyla değerlendirin.',

    alternativeMeasures:
      'İlişki uyumluluğuyla gerçekten ilgileniyorsanız, eğlenceli isim hesaplayıcılarının ötesinde birçok kanıta dayalı yaklaşım mevcuttur. Big Five kişilik özellikleri gibi doğrulanmış psikolojik modellere dayanan kişilik uyumluluk değerlendirmeleri, bireylerin nasıl etkileşim kurduğuna dair anlamlı—ancak kusurlu—içgörüler sağlar. Bağlanma tarzı değerlendirmeleri, her kişinin romantik ilişkilerde nasıl ilişkilendiğini anlamaya yardımcı olur ve uzun vadeli ortaklık sağlığı için temel bir unsurdur. Değerler uyum konuşmaları, her kişi için neyin en önemli olduğunu keşfeder ve evlilik öncesi bile çift danışmanlığı, uyumluluğu değerlendirmeye ve inşa etmeye yardımcı olur. Sonuç olarak, en güvenilir uyumluluk ölçüsü birlikte geçirilen zamandır: nasıl iletişim kurduğunuzu, anlaşmazlıkları nasıl ele aldığınızı, birbirinizi nasıl desteklediğinizi ve nasıl büyüdüğünüzü gözlemleyen bu süreç en değerli sonuçları verir.',

    demographicDifferences:
      'İsim tabanlı uyumluluk hesaplayıcıları, sonuçlarında kültürel, dilsel veya demografik farklılıkları anlamlı bir şekilde hesaba katmaz. İsimler, kültürler arasında farklı anlamlar, kültürel ağırlık ve sosyal çağrışımlar taşır—bir dilde uyumlu gelen bir isim, başka bir dilde tamamen farklı yorumlara yol açabilir. Farklı kültürler, romantik uyumluluğu değerlendirmek için kendine özgü geleneklere sahiptir: Çin zodyak eşleştirmesi, Hint kundli (doğum haritası) eşleştirmesi ve diğerleri, bilimsel tahmin yerine evlilik ve ortaklık etrafındaki kültürel değerleri yansıtır. İlişki beklentileri ve normlar kültürler ve kuşaklar arasında önemli ölçüde farklılık gösterir, bu da herhangi bir algoritmik yaklaşımı kültürel açıdan dar yapar. Sonuç olarak, uyumluluk hiçbir algoritmanın tam olarak öngöremeyeceği veya sayısal olarak ifade edemeyeceği bireysel bir yolculuktur.',

    medicalDisclaimer:
      'Bu aşk hesaplayıcısı tamamen eğlence amaçlı tasarlanmıştır ve hiçbir bilimsel, psikolojik veya tahmin geçerliliği yoktur. Bu araç tarafından üretilen sonuçlar asla gerçek ilişkiler, flört seçimleri veya kişisel meseleler hakkında karar vermek için kullanılmamalıdır. Sağlıklı ilişkiler karşılıklı saygı, iletişim, ortak değerler, güven ve gerçek duygusal bağ üzerine kuruludur—bunların hiçbiri isim tabanlı algoritmalarla ölçülemez veya tahmin edilemez. İlişki zorlukları yaşıyorsanız veya romantik konularda rehberlik arıyorsanız, lütfen lisanslı terapistler, ilişki danışmanları veya ruh sağlığı sağlayıcıları gibi nitelikli profesyonellere danışın.',

    references: [
      'Psychology Today - Romantik Çekim Bilimi',
      'Sosyal ve Kişisel İlişkiler Dergisi - Uyumluluk Çalışmaları',
      'Numeroloji Tarihsel Belgeleri - Kültürel İsim Gelenekleri',
      'İnternet Arşivi - Çevrimiçi Aşk Hesaplayıcılarının Tarihi',
      'İlişki Araştırma Enstitüsü - Başarılı Ortaklıklarda Faktörler',
    ],

    tips: [
      'Sonuçların nasıl değiştiğini görmek için farklı isim varyasyonları (tam ad, takma ad, ikinci ad) girmeyi deneyin',
      'Eğlenceli bir sohbet başlatıcısı için sonuçlarınızı arkadaşlarınızla paylaşın',
      'Gerçek uyumluluğun iletişim, ortak değerler ve karşılıklı saygı içerdiğini unutmayın',
      'Bu hesaplayıcıyı ilişki rehberliği değil, eğlence olarak kullanın',
      'Eğlenmek için kurgusal karakterler veya ünlüler arasındaki uyumluluğu hesaplamayı deneyin',
      'Aynı isimler her zaman aynı sonucu verecektir—bu tasarım gereğidir!',
      'Düşük yüzdeler olumsuz bir anlam ifade etmez—gerçek hayatta zıtlar genellikle birbirini çeker',
      'Yüksek yüzdeler eğlencelidir ama ilişki başarısını garanti etmez',
    ],

    faqs: [
      {
        question: 'Aşk hesaplayıcısı doğru mu?',
        answer:
          'Hayır, aşk hesaplayıcıları bilimsel olarak doğru veya tahmin edici değildir. Tamamen eğlence amaçlı tasarlanmıştır. Gerçek ilişki uyumluluğu iletişim, ortak değerler, karşılıklı saygı, duygusal zeka ve yaşam hedefleri gibi karmaşık faktörlere bağlıdır—bunların hiçbiri isim analizi ile belirlenemez. Aldığınız yüzde, gerçek romantik potansiyel ölçüsü değil, her iki isimdeki harfleri işleyen bir algoritma tarafından üretilir. Sonuçların tadını eğlenceli bir oyun olarak çıkarın, ancak ilişki tavsiyesi olarak almayın!',
      },
      {
        question: 'Aşk hesaplayıcısı nasıl çalışır?',
        answer:
          'Aşk hesaplayıcısı, her iki isimdeki harfleri sayısal değerlere dönüştüren, ardından matematiksel işlemlerle birleştirerek %1-99 arasında bir yüzde üreten bir algoritma kullanır. Yaygın yöntemler arasında belirli harfleri saymak ("LOVES" içindekiler gibi), alfabedeki harf konumlarını toplamak veya tutarlılık için hash fonksiyonları kullanmak yer alır. Algoritma, aynı iki ismin her zaman aynı sonucu üretmesini ve isimlerin sırasını değiştirmenin sonucu değiştirmemesini sağlar.',
      },
      {
        question: 'Neden aynı isimler her zaman aynı sonucu veriyor?',
        answer:
          'Aşk hesaplayıcıları deterministik olacak şekilde tasarlanmıştır—yani aynı girdiler her zaman aynı çıktıları üretir. Bu birkaç nedenden dolayı kasıtlıdır: sonuçların daha "anlamlı" hissetmesini sağlar, sonucunuzu arkadaşlarınızın da denediğinde aynı cevabı alacağını bilerek paylaşmanıza olanak tanır ve her seferinde farklı sonuçlar almaktan kaynaklanan hayal kırıklığını önler. Algoritma isimleri her seferinde aynı şekilde işler, tıpkı matematiksel bir formül gibi.',
      },
      {
        question: 'Takma ad veya tam ad kullanabilir miyim?',
        answer:
          'Evet! Herhangi bir isim versiyonunu girebilirsiniz—sadece ad, tam ad, takma ad veya hatta baş harfler. Farklı isim varyasyonları farklı sonuçlar üretecektir çünkü algoritma girdiğiniz harfleri işler. Bu keşfetmenin eğlenceli bir yolu olabilir: "Mehmet" vs "Memo", "Ayşe" vs "Ayşegül" veya ikinci adları dahil etmeyi/hariç tutmayı deneyin. Bazı insanlar en yüksek yüzdeye sahip kombinasyonu bulmak için birden fazla varyasyon dener.',
      },
      {
        question: 'Neden düşük bir yüzde aldım?',
        answer:
          'Düşük bir yüzde, algoritmanın her iki isimdeki harf kombinasyonlarına göre o sayıyı ürettiği anlamına gelir—gerçek dünya uyumluluğu hakkında hiçbir şey söylemez! Birçok mutlu, uzun süreli çift muhtemelen isim tabanlı hesaplayıcılarda "düşük" puan alırken, uyumsuz çiftler "yüksek" puan alabilir. Gerçek ilişkiler iletişim, çaba, ortak değerler ve gerçek bağlantıya bağlıdır. Düşük bir sayının ilgilendiğiniz birini takip etmekten vazgeçirmenize izin vermeyin!',
      },
      {
        question: 'Ünlüler veya kurgusal karakterlerle uyumluluk hesaplayabilir miyim?',
        answer:
          'Kesinlikle! Aşk hesaplayıcılarının en popüler kullanımlarından biri ünlüler, kurgusal karakterler ve hatta tarihi figürlerle uyumluluğu test etmektir. Adınızı en sevdiğiniz film yıldızı, kitap karakteri veya merak ettiğiniz herhangi biriyle deneyin. Fan toplulukları ile etkileşim kurmanın veya sadece merakı gidermenin eğlenceli bir yoludur. Hesaplayıcı tüm isimlere eşit davranır—gerçek bir kişi mi, ünlü mü yoksa kurgusal karakter mi girdiğinizi bilmesinin bir yolu yoktur.',
      },
      {
        question: 'Bu numeroloji ile aynı mı?',
        answer:
          'Aşk hesaplayıcıları numerolojiden—isimlerden ve tarihlerden türetilen sayıların mistik önem taşıdığı inancından—gevşek bir ilham alır. Geleneksel numeroloji, "yaşam yolu numaralarını" ve uyumluluğu belirlemek için karmaşık hesaplamalar içerir. Modern aşk hesaplayıcıları çok daha basittir ve eğlence odaklı sonuçları hızlı bir şekilde oluşturmak için temel algoritmalar kullanır. Numeroloji bazılarının ciddiye aldığı bir inanç sistemi olsa da, aşk hesaplayıcıları mistik veya tahmin gücü iddiası olmadan tamamen eğlenceli araçlar olarak tasarlanmıştır.',
      },
      {
        question: 'Sonuçlarımı sosyal medyada paylaşabilir miyim?',
        answer:
          'Evet! Aşk hesaplayıcımız, sonuçlarınızı sosyal medyada kolayca paylaşmanıza veya panonuza kopyalamanıza olanak tanıyan bir paylaşım özelliği içerir. Aşk hesaplayıcı sonuçlarını paylaşmak aracın en popüler kullanımlarından biridir—sohbetler başlatır, eğlenceli etkileşimler yaratır ve hatta birine olan ilginizi ifade etmenin şakacı bir yolu olabilir.',
      },
      {
        question: 'Sonuçlar neden asla %0 veya %100 değil?',
        answer:
          'Bizimki de dahil olmak üzere çoğu aşk hesaplayıcısı, %0 veya %100 yerine %1-99 arasında sonuçlar üretecek şekilde tasarlanmıştır. Bu psikolojik bir tasarım tercihidir: %0 gereksiz yere sert hissettirir ve kullanıcıları üzebilir, %100 ise gerçekdışı derecede mükemmel ve daha az ilginç hissettirir. %1-99 aralığındaki sonuçlar daha "otantik" hissettirir ve yoruma yer bırakır. İstisna kendi kendine eşleşmedir—aynı ismi iki kez girmek genellikle öz-sevgi hakkında eğlenceli bir easter egg olarak %100 üretir!',
      },
      {
        question: 'İlişki uyumluluğunu gerçekte hangi faktörler belirler?',
        answer:
          'Gerçek ilişki uyumluluğu hiçbir isim tabanlı hesaplayıcının ölçemeyeceği faktörlere bağlıdır: etkili iletişim becerileri, ortak temel değerler ve yaşam hedefleri, karşılıklı saygı ve güven, duygusal zeka ve empati, çatışma çözme yetenekleri, fiziksel ve duygusal çekim, uyumlu yaşam vizyonları, finansa yönelik benzer tutumlar, birbirinin kişisel gelişimini desteklemek ve zor zamanlarda çaba gösterme istekliliği. Araştırmalar başarılı ilişkilerin önceden belirlenmiş uyumluluk değil, sürekli çalışma gerektirdiğini göstermektedir.',
      },
    ],
  },
};
