import { CalculatorContent } from '@/types/calculator';

export const healthyLifestyleScoreContent: CalculatorContent = {
  en: {
    whatIs:
      'The Healthy Lifestyle Score Calculator is a comprehensive self-assessment tool that evaluates your daily habits across nine key health dimensions: physical activity, sleep quality, hydration, nutrition, smoking status, alcohol consumption, screen time, stress management, and social connections. Based on guidelines from the World Health Organization (WHO), American Heart Association (AHA), and National Sleep Foundation, this tool assigns a score from 0 to 100 that reflects how well your current lifestyle supports long-term health and well-being. Research consistently shows that lifestyle factors account for approximately 80% of chronic disease risk, making this kind of holistic assessment invaluable for identifying areas where small changes can have the biggest impact on your health.',

    howToCalculate:
      'The calculator evaluates nine lifestyle categories, each scored from 0 to 10 points based on established health guidelines. Physical activity is scored based on both frequency (days per week) and duration (minutes per session), following the WHO recommendation of at least 150 minutes of moderate exercise weekly. Sleep is scored optimally at 7-8 hours per night for adults, as recommended by the National Sleep Foundation. Water intake follows the "8 glasses per day" guideline (approximately 2 liters). Nutrition scoring is based on WHO recommendations for at least 5 servings of fruits and vegetables daily. Smoking, alcohol, screen time, stress, and social connections are each evaluated against their respective health guidelines. The raw scores are then scaled to a 0-100 range for easy interpretation.',

    interpretation:
      'A score of 90-100 indicates excellent lifestyle habits that strongly support long-term health. Scores of 75-89 represent very good habits with minor room for improvement. A score of 60-74 suggests a good foundation with some areas needing attention. Scores of 40-59 indicate average habits with significant improvement opportunities. A score of 20-39 suggests lifestyle habits that need meaningful changes, while scores below 20 indicate urgent attention is needed. The category breakdown shows which specific areas contribute most to your overall score, helping you prioritize changes. Focus on improving your lowest-scoring categories first, as these represent the areas where change will have the greatest impact on your overall health.',

    limitations:
      'This calculator provides a general lifestyle assessment based on widely accepted health guidelines, but it has important limitations. It does not account for individual medical conditions, genetic factors, medications, or specific dietary requirements. The scoring system uses simplified categories and cannot capture the full complexity of each health dimension. For example, nutrition scoring is based only on fruit and vegetable intake, not overall diet quality. Physical activity scoring does not differentiate between types of exercise (aerobic vs. strength training). The tool is designed for healthy adults and may not be appropriate for pregnant women, individuals with chronic conditions, or those under specific medical supervision. This assessment is not a substitute for professional medical evaluation.',

    healthRisks:
      'Poor lifestyle habits are associated with significantly increased risks for major chronic diseases. Physical inactivity increases the risk of heart disease by 35%, type 2 diabetes by 50%, and certain cancers by 20-30%. Inadequate sleep (less than 6 hours) is linked to a 48% higher risk of coronary heart disease and impaired immune function. Dehydration affects cognitive performance, kidney function, and energy levels. A diet low in fruits and vegetables increases cancer risk and contributes to nutrient deficiencies. Smoking remains the leading preventable cause of death worldwide. Excessive alcohol consumption damages the liver, heart, and brain. High screen time is associated with eye strain, poor posture, disrupted sleep, and reduced physical activity. Chronic stress contributes to cardiovascular disease, mental health disorders, and weakened immunity. Social isolation is linked to a 29% increase in coronary heart disease risk and 32% increase in stroke risk.',

    healthBenefits:
      'Adopting healthy lifestyle habits provides remarkable, scientifically proven benefits. Regular physical activity reduces all-cause mortality by 30-35% and improves mental health by releasing endorphins. Adequate sleep (7-9 hours) enhances memory consolidation, immune function, and emotional regulation. Proper hydration improves cognitive performance by up to 14%, supports kidney function, and maintains energy levels. Consuming 5+ servings of fruits and vegetables daily reduces cardiovascular disease risk by 20% and provides essential antioxidants. Quitting smoking begins to reverse damage within 24 hours, with cardiovascular risk halving within 1 year. Moderate or no alcohol consumption protects liver and brain health. Limited screen time improves sleep quality, reduces eye strain, and encourages more physical activity. Effective stress management lowers cortisol levels and reduces inflammation. Strong social connections are associated with 50% greater likelihood of longevity.',

    improvementTips:
      'Start with your lowest-scoring category and make one small change at a time. For exercise, begin with a 10-minute walk daily and gradually increase. For sleep, establish a consistent bedtime routine and avoid screens 30 minutes before bed. For hydration, carry a water bottle and set hourly reminders. For nutrition, add one extra serving of vegetables to each meal. For smoking, consult your doctor about cessation programs and nicotine replacement therapy. For alcohol, try alcohol-free days and find alternative social activities. For screen time, use the 20-20-20 rule and set daily screen time limits on your devices. For stress, practice 5 minutes of deep breathing or meditation daily. For social connections, schedule regular calls or meetups with friends and family. Research shows that making changes together with a partner or friend increases success rates by 65%.',

    medicalDisclaimer:
      'This Healthy Lifestyle Score Calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The scoring system is based on general health guidelines and may not be appropriate for all individuals. Factors such as age, medical history, genetic predisposition, current medications, and specific health conditions can significantly affect what constitutes a healthy lifestyle for you personally. Always consult with a qualified healthcare provider before making significant changes to your diet, exercise routine, or other health-related habits, especially if you have existing medical conditions. If you are experiencing symptoms of depression, anxiety, or other mental health concerns, please seek professional help immediately.',

    references: [
      'World Health Organization (WHO) - Guidelines on Physical Activity and Sedentary Behaviour (2020)',
      'National Sleep Foundation - Sleep Duration Recommendations',
      'European Food Safety Authority (EFSA) - Dietary Reference Values for Water Intake',
      'WHO - Diet, Nutrition and the Prevention of Chronic Diseases',
      'American Heart Association - Life\'s Essential 8 Cardiovascular Health Score',
      'Lancet Commission on Physical Activity - Global Report (2021)',
      'Harvard T.H. Chan School of Public Health - The Nutrition Source',
      'Holt-Lunstad J, Smith TB, Layton JB. Social Relationships and Mortality Risk. PLoS Med. 2010;7(7)',
      'Kvaavik E, Batty GD, Ursin G, et al. Influence of Individual and Combined Health Behaviors on Total and Cause-Specific Mortality. Arch Intern Med. 2010;170(8):711-718',
    ],

    tips: [
      'Focus on improving one category at a time rather than trying to change everything at once - sustainable change happens gradually',
      'The WHO recommends at least 150 minutes of moderate-intensity physical activity per week, which is just about 20 minutes per day',
      'Adults need 7-9 hours of quality sleep per night - consistency in bedtime is as important as duration',
      'Drink water regularly throughout the day rather than large amounts at once - keep a water bottle nearby as a visual reminder',
      'Eat a rainbow of fruits and vegetables to ensure diverse nutrient intake - aim for at least 5 servings daily',
      'If you smoke, quitting is the single most impactful health improvement you can make - your body starts healing within hours',
      'Take regular breaks from screens using the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds',
      'Strong social connections are as important to health as diet and exercise - prioritize meaningful relationships',
    ],

    faqs: [
      {
        question: 'How accurate is the Healthy Lifestyle Score?',
        answer:
          'The score provides a general assessment based on established health guidelines from organizations like WHO, AHA, and the National Sleep Foundation. While it gives a useful overview of your lifestyle habits, it is not a clinical diagnostic tool. Individual health needs vary based on age, medical conditions, and other personal factors. Use it as a starting point for reflection and improvement, not as a definitive health measure.',
      },
      {
        question: 'How often should I retake this assessment?',
        answer:
          'We recommend retaking the assessment once a month. This gives you enough time to implement changes and see their effects. Track your scores over time to monitor progress. Research shows that it takes 21-66 days for a new habit to become automatic, so monthly assessments align well with habit formation timelines.',
      },
      {
        question: 'Which category should I focus on improving first?',
        answer:
          'Start with the category that has the lowest score, as it represents the area with the most room for improvement. However, if that category feels too difficult to change right now, choose the next lowest-scoring area that feels more manageable. Making small, achievable changes builds confidence and momentum for tackling harder changes later.',
      },
      {
        question: 'Can lifestyle changes really make a significant health difference?',
        answer:
          'Yes, research consistently shows that lifestyle factors account for approximately 80% of chronic disease risk. A landmark study published in the Archives of Internal Medicine found that adopting four healthy behaviors (not smoking, exercising, eating well, and moderate alcohol consumption) reduced all-cause mortality by 66%. Even small improvements in individual habits can significantly reduce health risks.',
      },
      {
        question: 'Why does social connection affect health?',
        answer:
          'Social isolation and loneliness are significant health risk factors. Research shows that weak social connections carry health risks comparable to smoking 15 cigarettes a day. Strong relationships reduce stress hormones, improve immune function, and provide emotional support during difficult times. A meta-analysis of 148 studies found that people with strong social relationships have a 50% greater likelihood of longevity.',
      },
      {
        question: 'Is this calculator suitable for children or teenagers?',
        answer:
          'This calculator is designed for adults (18+). Children and teenagers have different sleep requirements, nutritional needs, physical activity guidelines, and developmental considerations. For young people, consult pediatric health guidelines or speak with a healthcare provider about age-appropriate lifestyle recommendations.',
      },
      {
        question: 'How does screen time affect health?',
        answer:
          'Excessive non-work screen time (more than 2-4 hours daily) is associated with several health concerns including disrupted sleep patterns from blue light exposure, increased risk of eye strain and digital eye fatigue, sedentary behavior leading to reduced physical activity, and potential impacts on mental health including increased anxiety and depression. The 20-20-20 rule and setting daily limits can help manage screen time effectively.',
      },
    ],
  },
  tr: {
    whatIs:
      'Sağlıklı Yaşam Puanı Hesaplayıcı, günlük alışkanlıklarınızı dokuz temel sağlık boyutunda değerlendiren kapsamlı bir öz değerlendirme aracıdır: fiziksel aktivite, uyku kalitesi, su tüketimi, beslenme, sigara durumu, alkol tüketimi, ekran süresi, stres yönetimi ve sosyal bağlantılar. Dünya Sağlık Örgütü (DSÖ), Amerikan Kalp Derneği (AHA) ve Ulusal Uyku Vakfı\'nın rehberliklerine dayanan bu araç, mevcut yaşam tarzınızın uzun vadeli sağlık ve iyilik halini ne kadar desteklediğini yansıtan 0-100 arasında bir puan atar. Araştırmalar tutarlı bir şekilde yaşam tarzı faktörlerinin kronik hastalık riskinin yaklaşık %80\'ini oluşturduğunu göstermektedir; bu da bu tür bütüncül bir değerlendirmeyi, küçük değişikliklerin sağlığınız üzerinde en büyük etkiyi yaratabileceği alanları belirlemek için son derece değerli kılmaktadır.',

    howToCalculate:
      'Hesaplayıcı, her biri yerleşik sağlık rehberliklerine göre 0-10 puan üzerinden puanlanan dokuz yaşam tarzı kategorisini değerlendirir. Fiziksel aktivite, DSÖ\'nün haftalık en az 150 dakika orta düzeyde egzersiz önerisine uygun olarak hem sıklık (haftada kaç gün) hem de süre (seans başına dakika) temelinde puanlanır. Uyku, Ulusal Uyku Vakfı\'nın tavsiyesine göre yetişkinler için gecede 7-8 saat olarak en yüksek puanı alır. Su tüketimi, "günde 8 bardak" (yaklaşık 2 litre) rehberliğini takip eder. Beslenme puanlaması, DSÖ\'nün günde en az 5 porsiyon meyve ve sebze önerisine dayanır. Sigara, alkol, ekran süresi, stres ve sosyal bağlantılar, her biri ilgili sağlık rehberliklerine göre değerlendirilir. Ham puanlar daha sonra kolay yorumlama için 0-100 aralığına ölçeklenir.',

    interpretation:
      '90-100 arası bir puan, uzun vadeli sağlığı güçlü bir şekilde destekleyen mükemmel yaşam tarzı alışkanlıklarını gösterir. 75-89 arası puanlar, küçük iyileştirme alanları ile çok iyi alışkanlıkları temsil eder. 60-74 arası bir puan, bazı alanların dikkat gerektirdiği iyi bir temel olduğunu gösterir. 40-59 arası puanlar, önemli iyileştirme fırsatları olan ortalama alışkanlıkları gösterir. 20-39 arası bir puan, anlamlı değişiklikler gerektiren yaşam tarzı alışkanlıklarını, 20\'nin altındaki puanlar ise acil dikkat gerektiğini gösterir. Kategori dağılımı, genel puanınıza en çok hangi alanların katkıda bulunduğunu göstererek değişiklikleri önceliklendirmenize yardımcı olur.',

    limitations:
      'Bu hesaplayıcı, yaygın olarak kabul görmüş sağlık rehberliklerine dayalı genel bir yaşam tarzı değerlendirmesi sunar, ancak önemli sınırlamaları vardır. Bireysel tıbbi durumları, genetik faktörleri, ilaçları veya özel diyet gereksinimlerini dikkate almaz. Puanlama sistemi basitleştirilmiş kategoriler kullanır ve her sağlık boyutunun tam karmaşıklığını yakalayamaz. Örneğin, beslenme puanlaması yalnızca meyve ve sebze tüketimine dayanır, genel diyet kalitesine değil. Fiziksel aktivite puanlaması egzersiz türleri (aerobik ve kuvvet antrenmanı) arasında ayrım yapmaz. Bu araç sağlıklı yetişkinler için tasarlanmıştır ve hamile kadınlar, kronik hastalığı olan bireyler veya belirli tıbbi gözetim altındakiler için uygun olmayabilir.',

    healthRisks:
      'Kötü yaşam tarzı alışkanlıkları, büyük kronik hastalıklar için önemli ölçüde artmış risklerle ilişkilidir. Fiziksel hareketsizlik, kalp hastalığı riskini %35, tip 2 diyabet riskini %50 ve belirli kanser risklerini %20-30 artırır. Yetersiz uyku (6 saatten az) %48 daha yüksek koroner kalp hastalığı riski ve bozulmuş bağışıklık fonksiyonu ile bağlantılıdır. Dehidrasyon, bilişsel performansı, böbrek fonksiyonunu ve enerji seviyelerini etkiler. Meyve ve sebze bakımından düşük bir diyet, kanser riskini artırır ve besin eksikliklerine katkıda bulunur. Sigara, dünya çapında önlenebilir ölümlerin başlıca nedeni olmaya devam etmektedir. Aşırı alkol tüketimi karaciğer, kalp ve beyin hasarına yol açar. Yüksek ekran süresi göz yorgunluğu, kötü duruş, bozulmuş uyku ve azalmış fiziksel aktivite ile ilişkilidir. Kronik stres, kardiyovasküler hastalığa, ruh sağlığı bozukluklarına ve zayıflamış bağışıklığa katkıda bulunur. Sosyal izolasyon, koroner kalp hastalığı riskinde %29 ve inme riskinde %32 artışla bağlantılıdır.',

    healthBenefits:
      'Sağlıklı yaşam tarzı alışkanlıkları benimsemek, bilimsel olarak kanıtlanmış dikkat çekici faydalar sağlar. Düzenli fiziksel aktivite, tüm nedenlere bağlı ölüm oranını %30-35 azaltır ve endorfin salgılayarak ruh sağlığını iyileştirir. Yeterli uyku (7-9 saat) hafıza pekiştirmesini, bağışıklık fonksiyonunu ve duygusal düzenlemeyi geliştirir. Uygun su tüketimi, bilişsel performansı %14\'e kadar artırır, böbrek fonksiyonunu destekler ve enerji seviyelerini korur. Günde 5\'ten fazla porsiyon meyve ve sebze tüketmek, kardiyovasküler hastalık riskini %20 azaltır ve temel antioksidanlar sağlar. Sigarayı bırakmak 24 saat içinde hasarı tersine çevirmeye başlar, kardiyovasküler risk 1 yıl içinde yarıya iner. Ilımlı veya sıfır alkol tüketimi karaciğer ve beyin sağlığını korur. Sınırlı ekran süresi uyku kalitesini artırır, göz yorgunluğunu azaltır ve daha fazla fiziksel aktiviteyi teşvik eder. Etkili stres yönetimi kortizol seviyelerini düşürür ve iltihabı azaltır. Güçlü sosyal bağlantılar, %50 daha fazla uzun yaşam olasılığı ile ilişkilidir.',

    improvementTips:
      'En düşük puanlı kategorinizle başlayın ve bir seferde bir küçük değişiklik yapın. Egzersiz için günde 10 dakikalık yürüyüşle başlayın ve kademeli olarak artırın. Uyku için tutarlı bir yatma zamanı rutini oluşturun ve yatmadan 30 dakika önce ekranlardan kaçının. Su tüketimi için bir su şişesi taşıyın ve saatlik hatırlatıcılar ayarlayın. Beslenme için her öğüne bir ekstra porsiyon sebze ekleyin. Sigara için doktorunuzdan bırakma programları ve nikotin replasman tedavisi hakkında bilgi alın. Alkol için alkolsüz günler deneyin ve alternatif sosyal aktiviteler bulun. Ekran süresi için 20-20-20 kuralını kullanın ve cihazlarınızda günlük ekran süresi sınırları belirleyin. Stres için günlük 5 dakika derin nefes veya meditasyon pratiği yapın. Sosyal bağlantılar için arkadaşlar ve aileyle düzenli aramalar veya buluşmalar planlayın. Araştırmalar, bir partner veya arkadaşla birlikte değişiklik yapmanın başarı oranlarını %65 artırdığını göstermektedir.',

    medicalDisclaimer:
      'Bu Sağlıklı Yaşam Puanı Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Puanlama sistemi genel sağlık rehberliklerine dayanmaktadır ve tüm bireyler için uygun olmayabilir. Yaş, tıbbi geçmiş, genetik yatkınlık, mevcut ilaçlar ve belirli sağlık durumları gibi faktörler, sizin için kişisel olarak sağlıklı bir yaşam tarzının ne olduğunu önemli ölçüde etkileyebilir. Özellikle mevcut tıbbi durumlarınız varsa, diyetinizde, egzersiz rutininizde veya diğer sağlıkla ilgili alışkanlıklarınızda önemli değişiklikler yapmadan önce her zaman nitelikli bir sağlık hizmeti sağlayıcısına danışın. Depresyon, anksiyete veya diğer ruh sağlığı endişeleri belirtileri yaşıyorsanız, lütfen derhal profesyonel yardım alın.',

    references: [
      'Dünya Sağlık Örgütü (DSÖ) - Fiziksel Aktivite ve Hareketsiz Davranış Rehberlikleri (2020)',
      'Ulusal Uyku Vakfı - Uyku Süresi Önerileri',
      'Avrupa Gıda Güvenliği Otoritesi (EFSA) - Su Alımı İçin Diyet Referans Değerleri',
      'DSÖ - Diyet, Beslenme ve Kronik Hastalıkların Önlenmesi',
      'Amerikan Kalp Derneği - Yaşamın Temel 8 Kardiyovasküler Sağlık Puanı',
      'Lancet Fiziksel Aktivite Komisyonu - Küresel Rapor (2021)',
      'Harvard T.H. Chan Halk Sağlığı Okulu - Beslenme Kaynağı',
      'Holt-Lunstad J, Smith TB, Layton JB. Sosyal İlişkiler ve Ölüm Riski. PLoS Med. 2010;7(7)',
      'Kvaavik E, Batty GD, Ursin G, ve ark. Bireysel ve Birleşik Sağlık Davranışlarının Toplam ve Nedene Özgü Ölüm Üzerindeki Etkisi. Arch Intern Med. 2010;170(8):711-718',
    ],

    tips: [
      'Her şeyi bir anda değiştirmeye çalışmak yerine bir seferde bir kategoriyi iyileştirmeye odaklanın - sürdürülebilir değişim kademeli olarak gerçekleşir',
      'DSÖ haftada en az 150 dakika orta yoğunlukta fiziksel aktivite öneriyor, bu günde sadece 20 dakika demek',
      'Yetişkinlerin gecede 7-9 saat kaliteli uykuya ihtiyacı var - yatma zamanında tutarlılık, süre kadar önemli',
      'Bir seferde büyük miktarlar yerine gün boyunca düzenli olarak su için - görsel hatırlatıcı olarak yanınızda su şişesi taşıyın',
      'Çeşitli besin alımını sağlamak için gökkuşağı renklerinde meyve ve sebze yiyin - günde en az 5 porsiyon hedefleyin',
      'Sigara içiyorsanız, bırakmak yapabileceğiniz en etkili sağlık iyileştirmesidir - vücudunuz saatler içinde iyileşmeye başlar',
      '20-20-20 kuralını kullanarak ekranlardan düzenli molalar verin: her 20 dakikada, 20 saniye boyunca 6 metre uzağa bakın',
      'Güçlü sosyal bağlantılar, diyet ve egzersiz kadar sağlık için önemlidir - anlamlı ilişkilere öncelik verin',
    ],

    faqs: [
      {
        question: 'Sağlıklı Yaşam Puanı ne kadar doğru?',
        answer:
          'Puan, DSÖ, AHA ve Ulusal Uyku Vakfı gibi kuruluşların yerleşik sağlık rehberliklerine dayalı genel bir değerlendirme sunar. Yaşam tarzı alışkanlıklarınıza yararlı bir genel bakış sağlarken, klinik bir tanı aracı değildir. Bireysel sağlık ihtiyaçları yaş, tıbbi durumlar ve diğer kişisel faktörlere göre değişir. Kesin bir sağlık ölçüsü olarak değil, düşünce ve iyileştirme için bir başlangıç noktası olarak kullanın.',
      },
      {
        question: 'Bu değerlendirmeyi ne sıklıkla tekrarlamalıyım?',
        answer:
          'Değerlendirmeyi ayda bir kez tekrarlamanızı öneririz. Bu size değişiklikleri uygulamak ve etkilerini görmek için yeterli zaman verir. Zaman içinde puanlarınızı takip ederek ilerlemenizi izleyin. Araştırmalar, yeni bir alışkanlığın otomatik hale gelmesinin 21-66 gün sürdüğünü göstermektedir, bu nedenle aylık değerlendirmeler alışkanlık oluşturma zaman çizelgeleriyle iyi uyum sağlar.',
      },
      {
        question: 'Önce hangi kategoriyi iyileştirmeye odaklanmalıyım?',
        answer:
          'En iyileştirme alanını temsil ettiği için en düşük puanlı kategoriyle başlayın. Ancak, o kategoriyi değiştirmek şu anda çok zor geliyorsa, daha yönetilebilir hissettiren bir sonraki en düşük puanlı alanı seçin. Küçük, başarılabilir değişiklikler yapmak, daha sonra zor değişikliklerin üstesinden gelmek için güven ve ivme oluşturur.',
      },
      {
        question: 'Yaşam tarzı değişiklikleri gerçekten önemli bir sağlık farkı yaratabilir mi?',
        answer:
          'Evet, araştırmalar tutarlı bir şekilde yaşam tarzı faktörlerinin kronik hastalık riskinin yaklaşık %80\'ini oluşturduğunu göstermektedir. Archives of Internal Medicine\'de yayınlanan önemli bir çalışma, dört sağlıklı davranışı benimsemenin (sigara içmemek, egzersiz yapmak, iyi beslenmek ve ılımlı alkol tüketimi) tüm nedenlere bağlı ölüm oranını %66 azalttığını bulmuştur. Bireysel alışkanlıklardaki küçük iyileştirmeler bile sağlık risklerini önemli ölçüde azaltabilir.',
      },
      {
        question: 'Sosyal bağlantı sağlığı neden etkiler?',
        answer:
          'Sosyal izolasyon ve yalnızlık önemli sağlık risk faktörleridir. Araştırmalar, zayıf sosyal bağlantıların günde 15 sigara içmeye eşdeğer sağlık riskleri taşıdığını göstermektedir. Güçlü ilişkiler stres hormonlarını azaltır, bağışıklık fonksiyonunu iyileştirir ve zor zamanlarda duygusal destek sağlar. 148 çalışmanın meta-analizi, güçlü sosyal ilişkilere sahip kişilerin %50 daha fazla uzun yaşam olasılığına sahip olduğunu bulmuştur.',
      },
      {
        question: 'Bu hesaplayıcı çocuklar veya gençler için uygun mu?',
        answer:
          'Bu hesaplayıcı yetişkinler (18+) için tasarlanmıştır. Çocuklar ve gençlerin farklı uyku gereksinimleri, beslenme ihtiyaçları, fiziksel aktivite rehberlikleri ve gelişimsel değerlendirmeleri vardır. Gençler için pediatrik sağlık rehberliklerine başvurun veya yaşa uygun yaşam tarzı önerileri hakkında bir sağlık hizmeti sağlayıcısı ile konuşun.',
      },
      {
        question: 'Ekran süresi sağlığı nasıl etkiler?',
        answer:
          'Aşırı iş dışı ekran süresi (günde 2-4 saatten fazla) mavi ışık maruziyetinden bozulmuş uyku düzenleri, göz yorgunluğu ve dijital göz yorgunluğu riski, azalmış fiziksel aktiviteye yol açan hareketsiz davranış ve anksiyete ve depresyon artışı dahil ruh sağlığı üzerindeki potansiyel etkiler dahil çeşitli sağlık endişeleri ile ilişkilidir. 20-20-20 kuralı ve günlük limitler belirlemek ekran süresini etkili bir şekilde yönetmeye yardımcı olabilir.',
      },
    ],
  },
};
