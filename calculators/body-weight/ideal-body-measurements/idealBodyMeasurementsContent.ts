import { CalculatorContent } from '@/types/calculator';

export const idealBodyMeasurementsContent: CalculatorContent = {
  en: {
    whatIs:
      'The Ideal Body Measurements Calculator estimates your optimal body proportions based on your height and body frame size. Unlike single-metric tools like BMI, this calculator provides a comprehensive view of how different body parts should proportionally relate to each other for a balanced, healthy physique. The calculations draw from established formulas including John McCallum\'s wrist-based proportions (published in his "Keys to Progress" series in the 1960s) and Steve Reeves\' classical height-based ratios, which were inspired by ancient Greek ideals of physical symmetry. These formulas have been used by fitness professionals for decades to set realistic physique goals. The calculator provides measurements for key body areas including chest, waist, hips, shoulders, biceps, forearms, thighs, calves, and neck, giving you a complete picture of balanced body proportions.',

    howToCalculate:
      'To use the Ideal Body Measurements Calculator, you need just two pieces of information: your height and gender. For more personalized results (males only), you can also provide your wrist circumference. Enter your height in centimeters or feet/inches. Select your gender. Optionally, measure your wrist circumference at the narrowest point just above the wrist bone (where you would wear a watch) and enter this measurement. Click calculate to see your ideal proportions. If wrist circumference is provided for males, the calculator uses the McCallum formula for more frame-specific results. Otherwise, it uses height-based proportional ratios derived from classical physique research.',

    formulaDetails:
      'Two primary formula systems are used in this calculator. The John McCallum Formula (1960s) calculates ideal measurements based on wrist circumference, which is an excellent indicator of bone structure and frame size since the wrist has minimal fat and muscle. The key relationships are: Chest = Wrist × 6.5, Waist = Chest × 0.70, Hips = Chest × 0.85, Biceps = Chest × 0.36, Forearm = Chest × 0.29, Thigh = Chest × 0.53, Calf = Chest × 0.34, Neck = Chest × 0.37. The Height-Based Proportions system, inspired by Steve Reeves and classical Greek proportions, calculates measurements as percentages of height. For males: Shoulders = Height × 0.700, Chest = Height × 0.578, Waist = Height × 0.417, Hips = Height × 0.517. For females, the proportions are adjusted to reflect natural differences in body composition: Bust = Height × 0.533, Waist = Height × 0.389, Hips = Height × 0.567. These ratios are based on decades of fitness research and represent achievable, healthy proportions rather than extreme bodybuilding standards.',

    interpretation:
      'Your ideal body measurements represent balanced, healthy proportions for your frame size and height. Key ratios to pay attention to include: Waist-to-Height Ratio should ideally be below 0.50, which is a strong indicator of cardiovascular health. Shoulder-to-Waist Ratio (also called the Adonis Index for men) ideally falls between 1.60-1.70 for men and 1.40-1.50 for women, creating a V-taper appearance associated with athletic fitness. Waist-to-Hip Ratio should be below 0.90 for men and below 0.85 for women according to WHO guidelines. These measurements are guidelines based on population-level research and should be viewed as general targets rather than strict rules. Individual factors like bone density, muscle distribution, genetics, and body type (ectomorph, mesomorph, endomorph) will naturally cause variations from these ideals.',

    limitations:
      'This calculator has several important limitations to consider. First, ideal measurements vary significantly based on genetics, ethnicity, age, and individual body structure. The formulas used are primarily derived from Western populations and may not perfectly apply to all ethnic groups. Second, wrist circumference, while a good indicator of frame size, does not capture the full complexity of skeletal structure. Third, these measurements represent averages and may not account for natural variations in body proportions (e.g., some people naturally have longer torsos or wider hips relative to their height). Fourth, the calculator does not account for age-related changes in body composition, bone density, or posture. Fifth, achieving these exact measurements is not necessary for health; they serve as general guidelines rather than medical targets. Finally, focusing too much on specific body measurements can contribute to body image issues. These numbers should be used as general fitness guidelines, not as standards of beauty or worth.',

    healthRisks:
      'While the ideal body measurements themselves are not directly related to specific health conditions, certain body proportions are strongly associated with health outcomes. A waist-to-height ratio above 0.50 is linked to increased risk of cardiovascular disease, type 2 diabetes, and metabolic syndrome. Excess abdominal fat (indicated by large waist circumference) is particularly dangerous as it correlates with visceral fat accumulation around internal organs. The World Health Organization identifies waist circumference above 102 cm (40 inches) for men and 88 cm (35 inches) for women as indicators of substantially increased metabolic risk. Conversely, balanced proportions with adequate muscle mass (reflected in appropriate limb measurements) are associated with better metabolic health, stronger bones, improved balance, and reduced risk of falls in older age. Maintaining proportional body measurements through regular exercise and balanced nutrition supports overall health beyond aesthetic goals.',

    tips: [
      'Measure yourself in the morning before eating for the most consistent results, using a flexible tape measure',
      'Focus on overall proportions rather than individual measurements - balance is more important than any single number',
      'Use these measurements as long-term fitness goals, not daily targets - body composition changes gradually',
      'Combine this calculator with BMI, body fat percentage, and waist-to-hip ratio for a comprehensive health assessment',
      'Wrist circumference is the most accurate frame size indicator because it has minimal fat and muscle tissue',
      'Remember that genetics play a significant role in body shape - not everyone can achieve the same proportions',
      'Prioritize health markers (blood pressure, cholesterol, fitness level) over aesthetic measurements',
      'Strength training is the most effective way to positively influence body proportions and muscle distribution',
    ],

    faqs: [
      {
        question: 'How accurate is the Ideal Body Measurements Calculator?',
        answer:
          'The calculator provides scientifically-based estimates using proven formulas like John McCallum\'s and Steve Reeves\' proportions. However, ideal measurements vary based on genetics, bone structure, ethnicity, and body type. Use these as general fitness guidelines rather than exact targets. Individual variation of 5-10% from these numbers is completely normal and healthy.',
      },
      {
        question: 'Why is wrist circumference used to calculate body proportions?',
        answer:
          'Wrist circumference is one of the best indicators of bone structure and frame size because the wrist has very little fat and muscle tissue. This makes it a reliable measurement that does not change significantly with weight gain or loss. John McCallum discovered that wrist size correlates strongly with the maximum muscular development a person can achieve naturally, making it an excellent base for calculating proportional measurements.',
      },
      {
        question: 'Are these measurements realistic to achieve?',
        answer:
          'Yes, these measurements are based on achievable, natural physique standards rather than extreme bodybuilding or unrealistic beauty ideals. The McCallum and height-based formulas represent what a well-trained, healthy individual can realistically achieve through consistent exercise and proper nutrition. However, genetics influence how closely you can match each specific measurement.',
      },
      {
        question: 'How do I measure my wrist circumference correctly?',
        answer:
          'Measure your wrist at the narrowest point, just above the wrist bone (the bony bump on the outside of your wrist). This is approximately where you would wear a watch. Use a flexible tape measure and wrap it snugly around the wrist without compressing the skin. Measure your dominant hand for the most accurate results. Average wrist circumference is 15-17.5 cm (6-7 inches) for men and 13-16 cm (5-6.3 inches) for women.',
      },
      {
        question: 'Do ideal body measurements differ between men and women?',
        answer:
          'Yes, ideal proportions differ significantly between genders due to natural differences in hormone profiles, fat distribution, muscle mass, and skeletal structure. Women naturally carry more body fat (especially in hips and thighs) and have wider hip-to-waist ratios, while men typically have broader shoulders relative to their waist. The calculator uses gender-specific formulas that reflect these biological differences.',
      },
      {
        question: 'Can I use this calculator if I am a beginner in fitness?',
        answer:
          'Absolutely! This calculator is useful for anyone wanting to understand healthy body proportions, regardless of fitness level. Beginners can use the results to set long-term goals and track their progress over months and years. Focus on gradual improvement through consistent exercise and nutrition rather than trying to achieve all measurements at once. Even small improvements in body proportions indicate positive health changes.',
      },
      {
        question: 'How often should I check my body measurements?',
        answer:
          'For those actively working on body composition, measuring every 4-6 weeks is ideal. This timeframe allows enough time for noticeable changes to occur. Always measure at the same time of day (morning is best) and under the same conditions for consistency. Avoid measuring daily as natural fluctuations can be misleading and discouraging.',
      },
    ],

    references: [
      'McCallum, John. Keys to Progress. IronMind Enterprises, 1960s (originally published in Strength & Health Magazine).',
      'Reeves, Steve. Building the Classic Physique the Natural Way. Little Elm Press, 2008.',
      'World Health Organization. Waist Circumference and Waist-Hip Ratio: Report of a WHO Expert Consultation. Geneva, 2008.',
      'American College of Sports Medicine. ACSM\'s Guidelines for Exercise Testing and Prescription. 11th Edition, 2021.',
      'Ashwell M, Hsieh SD. Six reasons why the waist-to-height ratio is a rapid and effective global indicator for health risks of obesity. Int J Food Sci Nutr. 2005;56(5):303-307.',
      'National Institutes of Health. Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults. NIH Publication No. 98-4083.',
    ],

    medicalDisclaimer:
      'This Ideal Body Measurements Calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The measurements provided are general guidelines based on statistical formulas and do not account for individual variations in genetics, bone structure, medical conditions, or body composition. Results should not be used to diagnose health conditions or make medical decisions. If you have concerns about your body composition or health, please consult with a qualified healthcare professional, certified personal trainer, or registered dietitian. Do not use these measurements to set extreme fitness goals without professional guidance.',
  },

  tr: {
    whatIs:
      'İdeal Vücut Ölçüleri Hesaplayıcı, boyunuza ve vücut yapınıza göre optimal vücut oranlarınızı tahmin eder. VKİ gibi tek metrikli araçların aksine, bu hesaplayıcı farklı vücut bölgelerinin dengeli ve sağlıklı bir fizik için birbirine nasıl oranlanması gerektiğini kapsamlı bir şekilde gösterir. Hesaplamalar, John McCallum\'un bilek çevresine dayalı oranları (1960\'larda "Keys to Progress" serisinde yayımlanmıştır) ve Steve Reeves\'in antik Yunan fiziksel simetri ideallerinden ilham alan klasik boya dayalı oranları gibi köklü formüllerden yararlanır. Bu formüller, fitness profesyonelleri tarafından onlarca yıldır gerçekçi fizik hedefleri belirlemek için kullanılmaktadır. Hesaplayıcı; göğüs, bel, kalça, omuz, pazı, ön kol, uyluk, baldır ve boyun dahil olmak üzere temel vücut bölgeleri için ölçümler sunarak dengeli vücut oranlarının tam bir resmini verir.',

    howToCalculate:
      'İdeal Vücut Ölçüleri Hesaplayıcısını kullanmak için sadece iki bilgiye ihtiyacınız var: boyunuz ve cinsiyetiniz. Daha kişiselleştirilmiş sonuçlar için (sadece erkekler) bilek çevrenizi de girebilirsiniz. Boyunuzu santimetre veya feet/inç olarak girin. Cinsiyetinizi seçin. İsteğe bağlı olarak, bilek kemiğinin hemen üzerindeki en dar noktadan (saat takılan yer) bilek çevrenizi ölçün ve bu ölçümü girin. Hesapla\'ya tıklayarak ideal oranlarınızı görün. Erkekler için bilek çevresi girildiğinde hesaplayıcı daha iskelet yapısına özel sonuçlar için McCallum formülünü kullanır. Aksi takdirde, klasik fizik araştırmalarından türetilmiş boya dayalı oransal oranları kullanır.',

    formulaDetails:
      'Bu hesaplayıcıda iki temel formül sistemi kullanılır. John McCallum Formülü (1960\'lar), bilek çevresine dayalı ideal ölçümleri hesaplar; bilek, minimal yağ ve kas içerdiği için kemik yapısı ve iskelet büyüklüğünün mükemmel bir göstergesidir. Temel ilişkiler şunlardır: Göğüs = Bilek × 6.5, Bel = Göğüs × 0.70, Kalça = Göğüs × 0.85, Pazı = Göğüs × 0.36, Ön Kol = Göğüs × 0.29, Uyluk = Göğüs × 0.53, Baldır = Göğüs × 0.34, Boyun = Göğüs × 0.37. Boya Dayalı Oranlar sistemi, Steve Reeves ve klasik Yunan oranlarından esinlenerek ölçümleri boyun yüzdeleri olarak hesaplar. Erkekler için: Omuz = Boy × 0.700, Göğüs = Boy × 0.578, Bel = Boy × 0.417, Kalça = Boy × 0.517. Kadınlar için oranlar, vücut yapısındaki doğal farklılıkları yansıtacak şekilde ayarlanmıştır: Göğüs = Boy × 0.533, Bel = Boy × 0.389, Kalça = Boy × 0.567. Bu oranlar onlarca yıllık fitness araştırmalarına dayanır ve aşırı vücut geliştirme standartları yerine ulaşılabilir, sağlıklı oranları temsil eder.',

    interpretation:
      'İdeal vücut ölçüleriniz, iskelet yapınız ve boyunuz için dengeli, sağlıklı oranları temsil eder. Dikkat etmeniz gereken temel oranlar şunlardır: Bel/Boy Oranı ideal olarak 0.50\'nin altında olmalıdır; bu, kardiyovasküler sağlığın güçlü bir göstergesidir. Omuz/Bel Oranı (erkekler için Adonis İndeksi olarak da bilinir) ideal olarak erkekler için 1.60-1.70, kadınlar için 1.40-1.50 arasında olup atletik fitnessla ilişkili bir V-kesim görünümü oluşturur. Bel/Kalça Oranı WHO kılavuzlarına göre erkekler için 0.90\'ın, kadınlar için 0.85\'in altında olmalıdır. Bu ölçümler, popülasyon düzeyinde araştırmalara dayalı kılavuzlardır ve katı kurallar yerine genel hedefler olarak görülmelidir. Kemik yoğunluğu, kas dağılımı, genetik ve vücut tipi (ektomorf, mezomorf, endomorf) gibi bireysel faktörler bu ideallerden doğal sapmalar yaratacaktır.',

    limitations:
      'Bu hesaplayıcının dikkate alınması gereken birkaç önemli sınırlaması vardır. İlk olarak, ideal ölçüler genetik, etnik köken, yaş ve bireysel vücut yapısına göre önemli ölçüde değişir. Kullanılan formüller ağırlıklı olarak Batılı popülasyonlardan türetilmiştir ve tüm etnik gruplar için mükemmel şekilde geçerli olmayabilir. İkinci olarak, bilek çevresi iskelet yapısının iyi bir göstergesi olsa da iskelet yapısının tüm karmaşıklığını yakalayamaz. Üçüncü olarak, bu ölçümler ortalamaları temsil eder ve vücut oranlarındaki doğal farklılıkları hesaba katmayabilir. Dördüncü olarak, hesaplayıcı vücut kompozisyonu, kemik yoğunluğu veya duruştaki yaşa bağlı değişiklikleri hesaba katmaz. Beşinci olarak, bu kesin ölçümlere ulaşmak sağlık için gerekli değildir; tıbbi hedefler yerine genel kılavuz niteliğindedirler. Son olarak, belirli vücut ölçümlerine aşırı odaklanmak beden imajı sorunlarına katkıda bulunabilir. Bu sayılar güzellik veya değer standartları olarak değil, genel fitness kılavuzları olarak kullanılmalıdır.',

    healthRisks:
      'İdeal vücut ölçüleri doğrudan belirli sağlık durumlarıyla ilişkili olmasa da, belirli vücut oranları sağlık sonuçlarıyla güçlü bir şekilde ilişkilidir. Bel/boy oranının 0.50\'nin üzerinde olması kardiyovasküler hastalık, tip 2 diyabet ve metabolik sendrom riskinin artmasıyla bağlantılıdır. Aşırı karın yağı (büyük bel çevresiyle gösterilir) iç organların etrafında visseral yağ birikimiyle ilişkili olduğu için özellikle tehlikelidir. Dünya Sağlık Örgütü, erkekler için 102 cm (40 inç) ve kadınlar için 88 cm (35 inç) üzerindeki bel çevresini önemli ölçüde artmış metabolik risk göstergeleri olarak tanımlar. Buna karşın, yeterli kas kütlesine sahip dengeli oranlar daha iyi metabolik sağlık, daha güçlü kemikler, gelişmiş denge ve ileri yaşta düşme riskinin azalması ile ilişkilidir. Düzenli egzersiz ve dengeli beslenme yoluyla orantılı vücut ölçümlerini korumak, estetik hedeflerin ötesinde genel sağlığı destekler.',

    tips: [
      'En tutarlı sonuçlar için sabah yemek yemeden önce esnek bir mezura ile kendinizi ölçün',
      'Tek tek ölçümler yerine genel oranlara odaklanın - denge herhangi bir sayıdan daha önemlidir',
      'Bu ölçümleri günlük hedefler olarak değil, uzun vadeli fitness hedefleri olarak kullanın - vücut kompozisyonu kademeli olarak değişir',
      'Kapsamlı bir sağlık değerlendirmesi için bu hesaplayıcıyı VKİ, vücut yağ oranı ve bel-kalça oranı ile birleştirin',
      'Bilek çevresi, minimal yağ ve kas dokusu içerdiği için en doğru iskelet yapısı göstergesidir',
      'Genetiğin vücut şeklinde önemli bir rol oynadığını unutmayın - herkes aynı oranlara ulaşamaz',
      'Estetik ölçümler yerine sağlık belirteçlerine (kan basıncı, kolesterol, fitness seviyesi) öncelik verin',
      'Vücut oranlarını ve kas dağılımını olumlu yönde etkilemenin en etkili yolu güç antrenmanıdır',
    ],

    faqs: [
      {
        question: 'İdeal Vücut Ölçüleri Hesaplayıcı ne kadar doğru?',
        answer:
          'Hesaplayıcı, John McCallum ve Steve Reeves oranları gibi kanıtlanmış formüller kullanarak bilimsel temelli tahminler sunar. Ancak ideal ölçüler genetik, kemik yapısı, etnik köken ve vücut tipine göre değişir. Bunları kesin hedefler yerine genel fitness kılavuzları olarak kullanın. Bu sayılardan %5-10 bireysel sapma tamamen normal ve sağlıklıdır.',
      },
      {
        question: 'Vücut oranlarını hesaplamak için neden bilek çevresi kullanılıyor?',
        answer:
          'Bilek çevresi, çok az yağ ve kas dokusu içerdiği için kemik yapısı ve iskelet büyüklüğünün en iyi göstergelerinden biridir. Bu, kilo alımı veya kaybıyla önemli ölçüde değişmeyen güvenilir bir ölçüm olmasını sağlar. John McCallum, bilek boyutunun bir kişinin doğal olarak ulaşabileceği maksimum kas gelişimiyle güçlü bir şekilde ilişkili olduğunu keşfetmiş, bu da onu orantılı ölçümleri hesaplamak için mükemmel bir temel yapmıştır.',
      },
      {
        question: 'Bu ölçülere ulaşmak gerçekçi mi?',
        answer:
          'Evet, bu ölçümler aşırı vücut geliştirme veya gerçekçi olmayan güzellik idealleri yerine ulaşılabilir, doğal fizik standartlarına dayanır. McCallum ve boya dayalı formüller, düzenli egzersiz ve uygun beslenme yoluyla iyi antrenmanlı, sağlıklı bir bireyin gerçekçi olarak ulaşabileceği değerleri temsil eder. Ancak genetik, her bir spesifik ölçüme ne kadar yaklaşabileceğinizi etkiler.',
      },
      {
        question: 'Bilek çevremi nasıl doğru ölçebilirim?',
        answer:
          'Bileğinizi en dar noktadan, bilek kemiğinin hemen üzerinden (saat taktığınız yer civarı) ölçün. Esnek bir mezura kullanın ve cildi sıkıştırmadan bileğin etrafına sarın. En doğru sonuçlar için baskın elinizi ölçün. Ortalama bilek çevresi erkekler için 15-17.5 cm (6-7 inç), kadınlar için 13-16 cm (5-6.3 inç) arasındadır.',
      },
      {
        question: 'İdeal vücut ölçüleri erkekler ve kadınlar arasında farklılık gösterir mi?',
        answer:
          'Evet, ideal oranlar hormon profilleri, yağ dağılımı, kas kütlesi ve iskelet yapısındaki doğal farklılıklar nedeniyle cinsiyetler arasında önemli ölçüde farklılık gösterir. Kadınlar doğal olarak daha fazla vücut yağı taşır (özellikle kalça ve uyluk bölgesinde) ve daha geniş kalça-bel oranlarına sahiptir; erkekler ise genellikle bellerine göre daha geniş omuzlara sahiptir. Hesaplayıcı bu biyolojik farklılıkları yansıtan cinsiyete özgü formüller kullanır.',
      },
      {
        question: 'Fitness\'a yeni başlayan biri olarak bu hesaplayıcıyı kullanabilir miyim?',
        answer:
          'Kesinlikle! Bu hesaplayıcı, fitness seviyesinden bağımsız olarak sağlıklı vücut oranlarını anlamak isteyen herkes için faydalıdır. Yeni başlayanlar sonuçları uzun vadeli hedefler belirlemek ve aylar-yıllar içinde ilerlemelerini takip etmek için kullanabilir. Tüm ölçümlere aynı anda ulaşmaya çalışmak yerine tutarlı egzersiz ve beslenme yoluyla kademeli iyileşmeye odaklanın.',
      },
      {
        question: 'Vücut ölçülerimi ne sıklıkla kontrol etmeliyim?',
        answer:
          'Aktif olarak vücut kompozisyonu üzerinde çalışanlar için her 4-6 haftada bir ölçüm yapmak idealdir. Bu süre, fark edilir değişikliklerin oluşması için yeterli zaman tanır. Tutarlılık için her zaman günün aynı saatinde (sabah en iyisidir) ve aynı koşullar altında ölçüm yapın. Doğal dalgalanmalar yanıltıcı ve cesaretinizi kırıcı olabileceğinden günlük ölçümlerden kaçının.',
      },
    ],

    references: [
      'McCallum, John. Keys to Progress. IronMind Enterprises, 1960\'lar (ilk olarak Strength & Health Magazine\'de yayımlanmıştır).',
      'Reeves, Steve. Building the Classic Physique the Natural Way. Little Elm Press, 2008.',
      'Dünya Sağlık Örgütü. Bel Çevresi ve Bel-Kalça Oranı: WHO Uzman Konsültasyonu Raporu. Cenevre, 2008.',
      'American College of Sports Medicine. Egzersiz Testi ve Reçeteleme Kılavuzları. 11. Baskı, 2021.',
      'Ashwell M, Hsieh SD. Bel-boy oranının obezite sağlık riskleri için hızlı ve etkili bir küresel gösterge olmasının altı nedeni. Int J Food Sci Nutr. 2005;56(5):303-307.',
      'National Institutes of Health. Yetişkinlerde Fazla Kilo ve Obezitenin Tanımlanması, Değerlendirilmesi ve Tedavisine İlişkin Klinik Kılavuzlar. NIH Yayın No. 98-4083.',
    ],

    medicalDisclaimer:
      'Bu İdeal Vücut Ölçüleri Hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Sağlanan ölçümler istatistiksel formüllere dayalı genel kılavuzlardır ve genetik, kemik yapısı, tıbbi durumlar veya vücut kompozisyonundaki bireysel farklılıkları hesaba katmaz. Sonuçlar sağlık durumlarını teşhis etmek veya tıbbi kararlar almak için kullanılmamalıdır. Vücut kompozisyonunuz veya sağlığınız hakkında endişeleriniz varsa, lütfen nitelikli bir sağlık profesyoneli, sertifikalı kişisel antrenör veya kayıtlı diyetisyene danışın. Profesyonel rehberlik olmadan bu ölçümleri aşırı fitness hedefleri belirlemek için kullanmayın.',
  },
};
