import { CalculatorContent } from '@/types/calculator';

export const dailyStepGoalContent: CalculatorContent = {
  en: {
    whatIs:
      'A Daily Step Goal Calculator is a personalized tool that determines how many steps you should walk each day based on your age, weight, height, gender, current activity level, and health goals. Unlike the generic "10,000 steps per day" recommendation that originated from a 1960s Japanese marketing campaign for pedometers, modern research shows that optimal step counts vary significantly between individuals. Studies published in JAMA Internal Medicine (2019) found that as few as 4,400 steps per day were associated with significantly lower mortality rates in older women compared to 2,700 steps, with benefits leveling off around 7,500 steps. For younger adults, the American Heart Association recommends aiming for 7,000-10,000 steps daily. This calculator uses evidence-based formulas that consider your unique profile to provide a step goal that is both achievable and beneficial for your specific health objectives.',

    howToCalculate:
      'To calculate your daily step goal, the calculator considers multiple factors. First, it establishes a base step count based on your age group: teenagers (12,000 steps), young adults 18-29 (10,000 steps), adults 30-49 (8,500 steps), middle-aged 50-64 (7,500 steps), and seniors 65+ (6,500 steps). These base values are derived from research by Tudor-Locke et al. and WHO physical activity guidelines. Next, an activity multiplier adjusts the base: sedentary individuals get a lower target to build up gradually (×0.75), while very active individuals receive a higher target (×1.15). Your health goal further modifies the result: weight loss goals add 30% more steps, fitness improvement adds 15%, and heart health adds 10%. Gender applies a minor 5% adjustment for females, reflecting average physiological differences in stride patterns. The final step count is rounded to the nearest 500 for practical tracking.',

    formulaDetails:
      'The daily step goal calculation uses a multi-factor formula: Recommended Steps = Base Steps × Activity Multiplier × Goal Multiplier × Gender Factor. Base steps are determined by age-group research: the CDC recommends that adults aim for at least 150 minutes of moderate-intensity physical activity per week, which translates to approximately 7,000-8,000 steps daily at moderate walking pace. The stride length calculation uses the widely accepted formula: Stride Length = Height × 0.415 (males) or Height × 0.413 (females), which is accurate for walking pace. Calories per step are calculated as: Cal/Step = 0.04 × (Body Weight in kg / 70), based on metabolic equivalent (MET) values for walking (MET 3.0-3.5 for casual walking, MET 4.0-5.0 for brisk walking). Distance estimation uses: Distance (km) = Steps × Stride Length (cm) / 100,000. Walking time is estimated at approximately 100 steps per minute for moderate-paced walking, which aligns with research published in the British Journal of Sports Medicine defining "brisk walking" as 100+ steps per minute.',

    categories: [
      {
        range: '< 5,000',
        label: 'Sedentary',
        description: 'Below 5,000 steps per day is classified as sedentary lifestyle. This level is associated with increased health risks including cardiovascular disease, obesity, and metabolic syndrome.',
        color: '#EF4444',
      },
      {
        range: '5,000 - 7,499',
        label: 'Low Active',
        description: 'Between 5,000 and 7,499 steps represents a low active lifestyle. This is a good starting point for sedentary individuals looking to improve their health.',
        color: '#F97316',
      },
      {
        range: '7,500 - 9,999',
        label: 'Somewhat Active',
        description: 'This range represents moderate activity and is associated with meaningful health improvements. Most health benefits begin to appear at this level.',
        color: '#F59E0B',
      },
      {
        range: '10,000 - 12,499',
        label: 'Active',
        description: 'The active range is associated with significant health benefits including weight management, improved cardiovascular fitness, and better mental health.',
        color: '#10B981',
      },
      {
        range: '≥ 12,500',
        label: 'Highly Active',
        description: 'Highly active individuals maximize health benefits from walking. This level is particularly effective for weight loss and athletic performance goals.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Your daily step goal should be interpreted as a personalized target rather than a rigid requirement. Research from the Lancet (2022) analyzing data from 47,471 adults across four continents found that every 2,000-step increase in daily steps was associated with a 8-11% reduction in all-cause mortality. For adults under 60, benefits plateaued around 8,000-10,000 steps, while adults over 60 saw benefits plateau at 6,000-8,000 steps. The minimum and optimal ranges provided give you flexibility — aim for the recommended target most days, knowing that any steps above your minimum are beneficial. Consistency matters more than hitting exact numbers: walking 7,000 steps every day is better than alternating between 3,000 and 14,000 steps. Track your steps for a week first to establish your current baseline, then gradually increase by 500-1,000 steps per week until you reach your target.',

    limitations:
      'This calculator provides estimates based on population-level research and general physiological formulas. Individual results may vary based on factors not captured by the calculator, including medical conditions (arthritis, heart disease, respiratory conditions), medications that affect metabolism or heart rate, walking surface and terrain (flat vs. hilly), weather conditions, footwear quality, and individual biomechanics. The calorie estimates assume average walking efficiency and may differ from actual energy expenditure measured by indirect calorimetry. Stride length calculations use population averages and may not be accurate for individuals with mobility limitations, prosthetics, or unusual gait patterns. The 10,000-step recommendation, while popular, is not a one-size-fits-all target — the WHO recommends 150-300 minutes of moderate physical activity per week, which can include activities other than walking. Always consult with a healthcare provider before significantly increasing your physical activity, especially if you have existing health conditions or are recovering from injury.',

    healthRisks:
      'Regular walking and meeting daily step goals is associated with numerous health benefits and reduced risks. Studies show that individuals who walk 7,000+ steps per day have 50-70% lower risk of premature death compared to those walking fewer than 4,000 steps. Walking helps manage blood pressure, improves cholesterol profiles, regulates blood sugar levels, and reduces the risk of type 2 diabetes by up to 30%. For mental health, walking 30 minutes daily has been shown to reduce symptoms of depression and anxiety by 20-30% (Harvard Mental Health Letter). Weight management benefits are significant: walking 10,000 steps burns approximately 300-500 calories depending on body weight and pace. Conversely, a sedentary lifestyle (fewer than 5,000 steps/day) is associated with increased risk of cardiovascular disease, obesity, osteoporosis, certain cancers, and all-cause mortality. The World Health Organization estimates that physical inactivity is the fourth leading risk factor for global mortality, responsible for 6% of deaths worldwide.',

    alternativeMeasures:
      'While step counting is an accessible and popular metric, other measures of physical activity can complement your step goals. Active minutes track time spent in moderate-to-vigorous physical activity (MVPA), with the WHO recommending 150-300 minutes per week. Heart rate zones measure exercise intensity more precisely than step count, particularly for cardiovascular fitness. METs (Metabolic Equivalents) quantify the energy cost of activities — walking is typically 3-5 METs depending on pace. VO2 Max estimates your maximum oxygen uptake and aerobic fitness. Distance walked or run provides a straightforward measure that accounts for stride length variation. Calories burned integrates multiple factors including weight, activity type, duration, and intensity. Exercise minutes logged by fitness apps and smartwatches often combine step data with heart rate monitoring for more accurate activity assessment. For comprehensive fitness tracking, consider combining step goals with at least one intensity-based metric like active minutes or heart rate zones.',

    medicalDisclaimer:
      'This Daily Step Goal Calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The recommended step goals are based on general population research and may not be appropriate for individuals with specific medical conditions, physical limitations, or chronic diseases. Before starting any new exercise program or significantly increasing your daily physical activity, consult with a qualified healthcare professional, especially if you have cardiovascular disease, joint problems, respiratory conditions, diabetes, or are pregnant. Do not ignore professional medical advice or delay seeking it because of information provided by this calculator. Individual fitness assessments should be conducted by certified fitness professionals who can evaluate your specific needs and limitations.',

    references: [
      'Lee IM, et al. Association of Step Volume and Intensity With All-Cause Mortality in Older Women. JAMA Intern Med. 2019;179(8):1105-1112.',
      'Paluch AE, et al. Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts. Lancet Public Health. 2022;7(3):e219-e228.',
      'Tudor-Locke C, et al. How many steps/day are enough? For adults. Int J Behav Nutr Phys Act. 2011;8:79.',
      'World Health Organization. WHO guidelines on physical activity and sedentary behaviour. 2020.',
      'American Heart Association. Recommendations for Physical Activity in Adults and Kids.',
      'Kraus WE, et al. Daily Step Counts for Measuring Physical Activity Exposure and Its Relation to Health. Med Sci Sports Exerc. 2019;51(6):1206-1212.',
      'Saint-Maurice PF, et al. Association of Daily Step Count and Step Intensity With Mortality Among US Adults. JAMA. 2020;323(12):1151-1160.',
    ],

    faqs: [
      {
        question: 'Is 10,000 steps a day really necessary?',
        answer: 'The 10,000-step goal originated from a 1960s Japanese marketing campaign, not scientific research. Recent studies show health benefits begin at as few as 4,400 steps for older adults and 7,000-8,000 steps for younger adults. The optimal number varies by age, with benefits plateauing around 7,500-10,000 steps for most people.',
      },
      {
        question: 'How many calories does 10,000 steps burn?',
        answer: 'For an average person weighing 70 kg (154 lbs), 10,000 steps burns approximately 300-400 calories. The exact number depends on your weight, walking speed, terrain, and individual metabolism. Heavier individuals burn more calories per step.',
      },
      {
        question: 'How far is 10,000 steps in kilometers?',
        answer: 'For an average person, 10,000 steps equals approximately 7-8 kilometers (4.3-5 miles). The exact distance depends on your stride length, which is determined by your height and walking pace.',
      },
      {
        question: 'How long does it take to walk 10,000 steps?',
        answer: 'At a moderate walking pace of about 100 steps per minute, 10,000 steps takes approximately 100 minutes (1 hour and 40 minutes). This does not need to be done all at once — steps accumulated throughout the day count equally.',
      },
      {
        question: 'Can I lose weight just by walking more steps?',
        answer: 'Yes, increasing your daily steps can contribute to weight loss, especially when combined with a balanced diet. Walking 10,000 steps burns approximately 300-500 extra calories per day, which could lead to losing about 0.5 kg (1 lb) per week if you maintain a calorie deficit. However, diet plays a more significant role in weight loss than exercise alone.',
      },
    ],
  },
  tr: {
    whatIs:
      'Günlük Adım Hedefi Hesaplayıcı, yaşınıza, kilonuza, boyunuza, cinsiyetinize, mevcut aktivite seviyenize ve sağlık hedeflerinize göre her gün kaç adım atmanız gerektiğini belirleyen kişiselleştirilmiş bir araçtır. 1960\'larda bir Japon pedometre pazarlama kampanyasından doğan genel "günde 10.000 adım" önerisinin aksine, modern araştırmalar optimal adım sayılarının bireyler arasında önemli ölçüde farklılık gösterdiğini ortaya koymaktadır. JAMA Internal Medicine\'de (2019) yayımlanan çalışmalar, yaşlı kadınlarda günde yalnızca 4.400 adımın bile 2.700 adıma kıyasla önemli ölçüde düşük ölüm oranlarıyla ilişkili olduğunu ve faydaların yaklaşık 7.500 adımda dengelendiğini göstermiştir. Genç yetişkinler için Amerikan Kalp Derneği günde 7.000-10.000 adım hedeflemeyi önermektedir. Bu hesaplayıcı, sağlık hedeflerinize uygun, ulaşılabilir ve faydalı bir adım hedefi sunmak için benzersiz profilinizi dikkate alan kanıta dayalı formüller kullanır.',

    howToCalculate:
      'Günlük adım hedefinizi hesaplamak için hesaplayıcı birden fazla faktörü değerlendirir. İlk olarak, yaş grubunuza göre temel adım sayısını belirler: gençler (12.000 adım), genç yetişkinler 18-29 (10.000 adım), yetişkinler 30-49 (8.500 adım), orta yaşlılar 50-64 (7.500 adım) ve yaşlılar 65+ (6.500 adım). Bu temel değerler Tudor-Locke ve arkadaşlarının araştırmalarından ve DSÖ fiziksel aktivite kılavuzlarından elde edilmiştir. Ardından bir aktivite çarpanı temeli ayarlar: hareketsiz bireyler kademeli olarak artırmak için daha düşük bir hedef alır (×0,75), çok aktif bireyler ise daha yüksek bir hedef alır (×1,15). Sağlık hedefiniz sonucu daha da değiştirir: kilo verme hedefleri %30 daha fazla adım ekler, fitness geliştirme %15 ve kalp sağlığı %10 ekler. Cinsiyet, adım düzenlerindeki ortalama fizyolojik farklılıkları yansıtan kadınlar için küçük bir %5 ayarlama uygular. Son adım sayısı pratik takip için en yakın 500\'e yuvarlanır.',

    formulaDetails:
      'Günlük adım hedefi hesaplaması çok faktörlü bir formül kullanır: Önerilen Adımlar = Temel Adımlar × Aktivite Çarpanı × Hedef Çarpanı × Cinsiyet Faktörü. Temel adımlar yaş grubuna göre belirlenir: CDC, yetişkinlerin haftada en az 150 dakika orta yoğunlukta fiziksel aktivite hedeflemelerini önerir ve bu, orta yürüyüş temposunda günde yaklaşık 7.000-8.000 adıma karşılık gelir. Adım uzunluğu hesaplaması yaygın olarak kabul edilen formülü kullanır: Adım Uzunluğu = Boy × 0,415 (erkekler) veya Boy × 0,413 (kadınlar); bu formül yürüyüş temposu için doğrudur. Adım başına kalori şu şekilde hesaplanır: Kal/Adım = 0,04 × (Vücut Ağırlığı kg / 70); bu, yürüyüş için metabolik eşdeğer (MET) değerlerine dayanmaktadır (normal yürüyüş için MET 3,0-3,5; tempolu yürüyüş için MET 4,0-5,0). Mesafe tahmini şu formüle göre hesaplanır: Mesafe (km) = Adımlar × Adım Uzunluğu (cm) / 100.000. Yürüyüş süresi, orta tempolu yürüyüş için dakikada yaklaşık 100 adım olarak tahmin edilir ve bu, British Journal of Sports Medicine\'de "tempolu yürüyüş"ü dakikada 100+ adım olarak tanımlayan araştırmayla uyumludur.',

    categories: [
      {
        range: '< 5.000',
        label: 'Hareketsiz',
        description: 'Günde 5.000 adımın altı hareketsiz yaşam tarzı olarak sınıflandırılır. Bu seviye kardiyovasküler hastalık, obezite ve metabolik sendrom dahil artan sağlık riskleriyle ilişkilidir.',
        color: '#EF4444',
      },
      {
        range: '5.000 - 7.499',
        label: 'Az Aktif',
        description: '5.000 ile 7.499 adım arasındaki değerler az aktif yaşam tarzını temsil eder. Bu, sağlığını iyileştirmek isteyen hareketsiz bireyler için iyi bir başlangıç noktasıdır.',
        color: '#F97316',
      },
      {
        range: '7.500 - 9.999',
        label: 'Orta Aktif',
        description: 'Bu aralık orta düzeyde aktiviteyi temsil eder ve anlamlı sağlık iyileştirmeleriyle ilişkilidir. Sağlık faydalarının çoğu bu seviyede ortaya çıkmaya başlar.',
        color: '#F59E0B',
      },
      {
        range: '10.000 - 12.499',
        label: 'Aktif',
        description: 'Aktif aralık, kilo yönetimi, kardiyovasküler fitness iyileştirmesi ve daha iyi ruh sağlığı dahil önemli sağlık faydalarıyla ilişkilidir.',
        color: '#10B981',
      },
      {
        range: '≥ 12.500',
        label: 'Çok Aktif',
        description: 'Çok aktif bireyler yürüyüşten elde edilen sağlık faydalarını en üst düzeye çıkarır. Bu seviye özellikle kilo verme ve atletik performans hedefleri için etkilidir.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Günlük adım hedefiniz katı bir gereklilik olarak değil, kişiselleştirilmiş bir hedef olarak yorumlanmalıdır. Lancet\'te (2022) yayımlanan ve dört kıtadan 47.471 yetişkinin verilerini analiz eden araştırma, günlük adımlardaki her 2.000 adımlık artışın tüm nedenlere bağlı ölüm oranında %8-11 azalmayla ilişkili olduğunu bulmuştur. 60 yaş altı yetişkinlerde faydalar 8.000-10.000 adım civarında dengelenirken, 60 yaş üstü yetişkinlerde faydalar 6.000-8.000 adımda dengelenmiştir. Sağlanan minimum ve optimal aralıklar size esneklik tanır — çoğu gün önerilen hedefe ulaşmayı hedefleyin ve minimumun üzerindeki her adımın faydalı olduğunu bilin. Tutarlılık tam sayılara ulaşmaktan daha önemlidir: her gün 7.000 adım atmak, 3.000 ile 14.000 adım arasında gidip gelmekten daha iyidir. Mevcut temel çizginizi belirlemek için önce bir hafta adımlarınızı takip edin, ardından hedefinize ulaşana kadar haftada 500-1.000 adım artırın.',

    limitations:
      'Bu hesaplayıcı, nüfus düzeyindeki araştırmalara ve genel fizyolojik formüllere dayalı tahminler sunar. Bireysel sonuçlar hesaplayıcının yakalayamadığı faktörlere bağlı olarak değişebilir; bunlar arasında tıbbi durumlar (eklem iltihabı, kalp hastalığı, solunum hastalıkları), metabolizmayı veya kalp atış hızını etkileyen ilaçlar, yürüyüş yüzeyi ve arazi (düz veya engebeli), hava koşulları, ayakkabı kalitesi ve bireysel biyomekanik yer alır. Kalori tahminleri ortalama yürüyüş verimliliğini varsayar ve dolaylı kalorimetri ile ölçülen gerçek enerji harcamasından farklı olabilir. Adım uzunluğu hesaplamaları nüfus ortalamalarını kullanır ve hareket kısıtlılığı, protez veya olağandışı yürüyüş düzeni olan bireyler için doğru olmayabilir. 10.000 adım önerisi popüler olmasına rağmen herkese uyan tek bir hedef değildir — DSÖ haftada 150-300 dakika orta düzeyde fiziksel aktivite önermektedir ve bu yürüyüş dışındaki aktiviteleri de içerebilir. Fiziksel aktivitenizi önemli ölçüde artırmadan önce, özellikle mevcut sağlık sorunlarınız varsa veya yaralanmadan iyileşiyorsanız, bir sağlık uzmanına danışın.',

    healthRisks:
      'Düzenli yürüyüş ve günlük adım hedeflerini karşılamak çok sayıda sağlık faydası ve azaltılmış risklerle ilişkilidir. Araştırmalar, günde 7.000 veya daha fazla adım atan bireylerin 4.000 adımdan az atanlara kıyasla %50-70 daha düşük erken ölüm riskine sahip olduğunu göstermektedir. Yürüyüş kan basıncını yönetmeye, kolesterol profillerini iyileştirmeye, kan şekeri seviyelerini düzenlemeye ve tip 2 diyabet riskini %30\'a kadar azaltmaya yardımcı olur. Ruh sağlığı açısından, günde 30 dakika yürüyüşün depresyon ve anksiyete belirtilerini %20-30 azalttığı gösterilmiştir (Harvard Mental Health Letter). Kilo yönetimi faydaları önemlidir: 10.000 adım yürümek, vücut ağırlığına ve temposuna bağlı olarak yaklaşık 300-500 kalori yakar. Öte yandan, hareketsiz yaşam tarzı (günde 5.000 adımdan az) kardiyovasküler hastalık, obezite, osteoporoz, belirli kanserler ve tüm nedenlere bağlı ölüm riskinin artmasıyla ilişkilidir. Dünya Sağlık Örgütü, fiziksel hareketsizliğin küresel ölümün dördüncü önde gelen risk faktörü olduğunu ve dünya genelindeki ölümlerin %6\'sından sorumlu olduğunu tahmin etmektedir.',

    alternativeMeasures:
      'Adım sayma erişilebilir ve popüler bir ölçüt olsa da, fiziksel aktivitenin diğer ölçümleri adım hedeflerinizi tamamlayabilir. Aktif dakikalar, orta-yoğun fiziksel aktivitede (MVPA) harcanan süreyi takip eder ve DSÖ haftada 150-300 dakika önermektedir. Kalp atış hızı bölgeleri, özellikle kardiyovasküler fitness için adım sayısından daha hassas bir şekilde egzersiz yoğunluğunu ölçer. MET\'ler (Metabolik Eşdeğerler) aktivitelerin enerji maliyetini ölçer — yürüyüş tempoya bağlı olarak genellikle 3-5 MET\'tir. Yürünen veya koşulan mesafe, adım uzunluğu farklılığını hesaba katan basit bir ölçüm sağlar. Yakılan kaloriler ağırlık, aktivite türü, süre ve yoğunluk dahil birden fazla faktörü entegre eder. Fitness uygulamaları ve akıllı saatler tarafından kaydedilen egzersiz dakikaları, daha doğru aktivite değerlendirmesi için genellikle adım verilerini kalp atış hızı izleme ile birleştirir. Kapsamlı fitness takibi için adım hedeflerini aktif dakikalar veya kalp atış hızı bölgeleri gibi en az bir yoğunluk bazlı metrikle birleştirmeyi düşünün.',

    medicalDisclaimer:
      'Bu Günlük Adım Hedefi Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavi yerine kullanılmamalıdır. Önerilen adım hedefleri genel nüfus araştırmalarına dayanmaktadır ve belirli tıbbi durumları, fiziksel sınırlamaları veya kronik hastalıkları olan bireyler için uygun olmayabilir. Yeni bir egzersiz programına başlamadan veya günlük fiziksel aktivitenizi önemli ölçüde artırmadan önce, özellikle kardiyovasküler hastalığınız, eklem problemleriniz, solunum yolu hastalıklarınız, diyabetiniz varsa veya hamileyseniz, nitelikli bir sağlık uzmanına danışın. Bu hesaplayıcının sağladığı bilgiler nedeniyle profesyonel tıbbi tavsiyeleri görmezden gelmeyin veya almayı geciktirmeyin. Bireysel fitness değerlendirmeleri, özel ihtiyaçlarınızı ve sınırlamalarınızı değerlendirebilecek sertifikalı fitness profesyonelleri tarafından yapılmalıdır.',

    references: [
      'Lee IM, et al. Association of Step Volume and Intensity With All-Cause Mortality in Older Women. JAMA Intern Med. 2019;179(8):1105-1112.',
      'Paluch AE, et al. Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts. Lancet Public Health. 2022;7(3):e219-e228.',
      'Tudor-Locke C, et al. How many steps/day are enough? For adults. Int J Behav Nutr Phys Act. 2011;8:79.',
      'Dünya Sağlık Örgütü. Fiziksel aktivite ve hareketsiz davranış hakkında DSÖ kılavuzları. 2020.',
      'Amerikan Kalp Derneği. Yetişkinler ve Çocuklar İçin Fiziksel Aktivite Önerileri.',
      'Kraus WE, et al. Daily Step Counts for Measuring Physical Activity Exposure and Its Relation to Health. Med Sci Sports Exerc. 2019;51(6):1206-1212.',
      'Saint-Maurice PF, et al. Association of Daily Step Count and Step Intensity With Mortality Among US Adults. JAMA. 2020;323(12):1151-1160.',
    ],

    faqs: [
      {
        question: 'Günde 10.000 adım gerçekten gerekli mi?',
        answer: '10.000 adım hedefi bilimsel araştırmalardan değil, 1960\'larda bir Japon pazarlama kampanyasından doğmuştur. Son çalışmalar, sağlık faydalarının yaşlı yetişkinlerde günde 4.400 adımdan ve genç yetişkinlerde 7.000-8.000 adımdan itibaren başladığını göstermektedir. Optimal sayı yaşa göre değişir ve faydalar çoğu insan için 7.500-10.000 adım civarında dengelenir.',
      },
      {
        question: '10.000 adım kaç kalori yakar?',
        answer: '70 kg (154 lbs) ağırlığındaki ortalama bir kişi için 10.000 adım yaklaşık 300-400 kalori yakar. Kesin rakam kilonuza, yürüme hızınıza, araziye ve bireysel metabolizmanıza bağlıdır. Daha ağır bireyler adım başına daha fazla kalori yakar.',
      },
      {
        question: '10.000 adım kaç kilometre eder?',
        answer: 'Ortalama bir kişi için 10.000 adım yaklaşık 7-8 kilometreye (4,3-5 mil) eşittir. Kesin mesafe boyunuza ve yürüyüş temponuza göre belirlenen adım uzunluğunuza bağlıdır.',
      },
      {
        question: '10.000 adım atmak ne kadar sürer?',
        answer: 'Dakikada yaklaşık 100 adımlık orta yürüyüş temposunda 10.000 adım yaklaşık 100 dakika (1 saat 40 dakika) sürer. Bunun tek seferde yapılması gerekmez — gün boyunca biriktirilen adımlar eşit derecede geçerlidir.',
      },
      {
        question: 'Sadece daha fazla yürüyerek kilo verebilir miyim?',
        answer: 'Evet, günlük adımlarınızı artırmak özellikle dengeli bir diyetle birleştirildiğinde kilo vermeye katkıda bulunabilir. 10.000 adım yürümek günde yaklaşık 300-500 ekstra kalori yakar ve bu da kalori açığı sağlarsanız haftada yaklaşık 0,5 kg (1 lbs) kaybetmenize yol açabilir. Ancak diyet, tek başına egzersizden kilo vermede daha önemli bir rol oynar.',
      },
    ],
  },
};
