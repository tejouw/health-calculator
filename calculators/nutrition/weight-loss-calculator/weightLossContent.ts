import { CalculatorContent } from '@/types/calculator';

export const weightLossContent: CalculatorContent = {
  en: {
    whatIs:
      'The Weight Loss Timeline Calculator is a comprehensive planning tool that estimates how long it will take to reach your target weight based on your personal profile and chosen weight loss strategy. Unlike simple calorie calculators, this tool creates a personalized timeline with weekly milestones, showing you exactly when you can expect to reach your goal. It combines the Mifflin-St Jeor equation for metabolic rate calculation with evidence-based weight loss principles to generate realistic projections. The calculator factors in your age, gender, height, current weight, activity level, and desired rate of weight loss to determine your daily calorie target and estimated completion date. Understanding your weight loss timeline helps set realistic expectations, maintain motivation, and plan your journey effectively.',

    howToCalculate:
      'The calculation follows a multi-step process. First, your Basal Metabolic Rate (BMR) is calculated using the Mifflin-St Jeor equation: For men, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 5. For women, BMR = 10 x weight(kg) + 6.25 x height(cm) - 5 x age - 161. Next, your Total Daily Energy Expenditure (TDEE) is determined by multiplying BMR by your activity factor (1.2 for sedentary to 1.9 for very active). The required daily calorie deficit is then calculated based on your chosen weight loss rate, knowing that 1 kg of body fat equals approximately 7,700 calories. Your daily calorie target equals TDEE minus the deficit, with a safety floor of 1,500 kcal for men and 1,200 kcal for women. Finally, the total weeks needed is calculated by dividing total weight to lose by weekly loss rate.',

    formulaDetails:
      'The core formulas used in this calculator are well-established in nutrition science. The Mifflin-St Jeor equation (1990) is considered the most accurate BMR prediction formula by the Academy of Nutrition and Dietetics. The energy balance equation states that weight change = energy intake - energy expenditure. Since 1 kg of adipose tissue stores approximately 7,700 kcal of energy, a daily deficit of 1,100 kcal would theoretically result in 1 kg of weight loss per week (7,700 / 7 = 1,100 kcal/day). Activity multipliers are based on the Harris-Benedict activity factor scale: Sedentary (x1.2) for desk jobs with no exercise, Lightly Active (x1.375) for light exercise 1-3 days/week, Moderately Active (x1.55) for moderate exercise 3-5 days/week, Active (x1.725) for hard exercise 6-7 days/week, and Very Active (x1.9) for athletes or physically demanding jobs. The calculator enforces minimum calorie thresholds (1,500 kcal for men, 1,200 kcal for women) as recommended by the National Institutes of Health to prevent nutritional deficiencies and metabolic adaptation.',

    interpretation:
      'Your weight loss timeline should be interpreted as an estimate, not an exact prediction. The results show: Estimated Weeks - the approximate number of weeks to reach your goal at your chosen rate. Daily Calorie Target - the number of calories you should consume daily (this is your TDEE minus the calorie deficit). Daily Calorie Deficit - how many fewer calories than your TDEE you need to consume. Weekly milestones provide checkpoint weights and dates to track your progress. The BMI comparison shows how your body mass index changes from start to finish. If the estimated timeline seems too long, you might consider increasing your activity level rather than reducing calories further, as very low calorie diets are unsustainable and can cause muscle loss, nutritional deficiencies, and metabolic slowdown.',

    limitations:
      'This calculator has several important limitations. First, it assumes a constant metabolic rate, but in reality your metabolism decreases as you lose weight (metabolic adaptation or "adaptive thermogenesis"). Studies show metabolism can decrease by 10-15% beyond what weight loss alone predicts. Second, weight loss is rarely linear - you may experience plateaus lasting 1-4 weeks due to water retention, hormonal changes, or metabolic adaptation. Third, the calculator does not account for changes in body composition. As you lose weight, you lose both fat and some muscle, which further reduces metabolic rate. Resistance training can minimize muscle loss but cannot eliminate it entirely. Fourth, individual variations in genetics, gut microbiome, sleep quality, stress levels, and medication use can significantly affect weight loss rate. Fifth, the calculator does not factor in the thermic effect of different macronutrients - protein requires more energy to digest than carbohydrates or fat. Finally, hormonal factors including thyroid function, insulin resistance, cortisol levels, and sex hormones can substantially impact weight loss beyond what calorie calculations predict.',

    healthRisks:
      'Rapid weight loss (more than 1 kg per week for extended periods) carries several health risks. These include gallstone formation (risk increases with rapid weight loss), muscle loss (particularly problematic for older adults), nutritional deficiencies (vitamins, minerals, essential fatty acids), electrolyte imbalances that can affect heart rhythm, metabolic slowdown that makes maintaining weight loss more difficult, hair loss and skin changes, menstrual irregularities in women, weakened immune function, and psychological effects including increased risk of eating disorders. Very low calorie diets (below 800 kcal/day) should only be undertaken under medical supervision. The safest approach is a moderate calorie deficit of 500-750 kcal/day, resulting in 0.5-0.75 kg of weight loss per week. This rate preserves more muscle mass, is more sustainable long-term, and carries fewer health risks.',

    improvementTips:
      'To improve your weight loss results while maintaining health: 1) Prioritize protein intake (1.6-2.2 g per kg body weight) to preserve muscle mass during calorie restriction. 2) Include resistance training 2-3 times per week to maintain metabolic rate and body composition. 3) Get 7-9 hours of quality sleep - poor sleep increases hunger hormones and reduces fat loss. 4) Stay hydrated with at least 2 liters of water daily, which can boost metabolism by 24-30% for 1-1.5 hours after drinking. 5) Manage stress through meditation, exercise, or other relaxation techniques, as cortisol promotes fat storage especially around the abdomen. 6) Eat more fiber (25-30g/day) from vegetables, fruits, and whole grains to increase satiety. 7) Consider diet breaks - taking a 1-2 week maintenance period every 8-12 weeks can help prevent metabolic adaptation. 8) Track your food intake using a food diary or app for accountability. 9) Prepare meals in advance to avoid impulsive food choices. 10) Focus on progress, not perfection - consistency over time matters more than daily fluctuations.',

    medicalDisclaimer:
      'This weight loss calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. The estimates provided are based on general formulas and do not account for individual medical conditions, medications, or metabolic disorders. Individuals with diabetes, heart disease, kidney disease, eating disorders, thyroid conditions, or other medical conditions should consult their healthcare provider before starting any weight loss program. Pregnant or breastfeeding women should not use this calculator for weight loss planning. Children and adolescents have different nutritional needs and should only pursue weight management under pediatric medical supervision. If you experience dizziness, extreme fatigue, hair loss, menstrual irregularities, or other unusual symptoms during weight loss, stop your program and consult a healthcare professional immediately.',

    references: [
      'Mifflin MD, St Jeor ST, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.',
      'Hall KD, et al. Quantification of the effect of energy imbalance on bodyweight. Lancet. 2011;378(9793):826-837.',
      'Rosenbaum M, Leibel RL. Adaptive thermogenesis in humans. Int J Obes. 2010;34(Suppl 1):S47-S55.',
      'Aragon AA, et al. International society of sports nutrition position stand: diets and body composition. J Int Soc Sports Nutr. 2017;14:16.',
      'National Institutes of Health (NIH) - Guidelines for Weight Management Programs.',
      'Heymsfield SB, et al. Voluntary weight loss: systematic review of early phase body composition changes. Nutr Rev. 2014;72(7):471-480.',
      'Thomas DM, et al. Can a weight loss of one pound a week be achieved with a 3500-kcal deficit? Int J Obes. 2013;37(12):1611-1613.',
    ],

    tips: [
      'Set realistic goals - aim to lose 0.5-1 kg per week for sustainable results that last',
      'Focus on protein intake to preserve muscle mass during your weight loss journey',
      'Include strength training at least 2-3 times per week alongside your calorie deficit',
      'Track your progress weekly, not daily - daily weight can fluctuate by 1-2 kg due to water',
      'If you hit a plateau lasting more than 2 weeks, consider adjusting your calorie intake or exercise routine',
      'Stay hydrated - sometimes thirst is confused with hunger, and water boosts metabolism',
      'Get at least 7 hours of sleep per night - sleep deprivation can stall weight loss',
      'Plan your meals ahead of time to stay on track with your calorie targets',
    ],

    faqs: [
      {
        question: 'How accurate is the weight loss timeline calculator?',
        answer:
          'The calculator provides a reasonable estimate based on established scientific formulas. However, actual results may vary by 10-20% due to individual metabolic differences, hormonal factors, dietary compliance, exercise variations, and metabolic adaptation. The calculator assumes consistent effort throughout the timeline. Use the results as a guide rather than an exact prediction.',
      },
      {
        question: 'Why is my weight loss slower than the calculator predicted?',
        answer:
          'Several factors can slow weight loss below predictions: metabolic adaptation (your body burns fewer calories as you lose weight), water retention masking fat loss, underestimating calorie intake, overestimating exercise calories burned, hormonal fluctuations, stress, and poor sleep quality. Weight loss is also rarely linear - plateaus of 1-4 weeks are normal and expected.',
      },
      {
        question: 'Is it safe to lose weight faster than the calculator suggests?',
        answer:
          'Losing more than 1 kg (2.2 lbs) per week for extended periods is generally not recommended. Rapid weight loss increases risks of gallstones, muscle loss, nutritional deficiencies, and metabolic slowdown. It is also harder to maintain. Medical supervision is recommended for weight loss exceeding 1 kg per week or calorie intakes below 1200 kcal for women or 1500 kcal for men.',
      },
      {
        question: 'Should I eat back the calories I burn during exercise?',
        answer:
          'It depends on your activity level and calorie target. If your TDEE already accounts for your exercise (through the activity level selection), you do not need to eat extra calories. However, if you perform additional exercise beyond your selected activity level, eating back 50-75% of those extra calories can help prevent excessive fatigue and muscle loss. Avoid eating back 100% as calorie burn estimates are often overestimated.',
      },
      {
        question: 'What happens to my metabolism when I lose weight?',
        answer:
          'As you lose weight, your metabolism naturally decreases for two reasons: you have less body mass requiring energy, and your body undergoes adaptive thermogenesis, reducing energy expenditure beyond what weight loss alone would predict. This adaptation can reduce metabolic rate by an additional 10-15%. Strategies to minimize this include regular resistance training, adequate protein intake, diet breaks, and avoiding very low calorie diets.',
      },
      {
        question: 'How do I break through a weight loss plateau?',
        answer:
          'Weight loss plateaus are normal and usually temporary (1-4 weeks). Strategies include: recalculating your calorie needs at your new lower weight, increasing exercise intensity or duration, adding strength training if you have not already, taking a 1-2 week diet break at maintenance calories, improving sleep quality, managing stress, varying your food choices, and ensuring accurate food tracking. If a plateau lasts over 4 weeks, consult a healthcare professional.',
      },
      {
        question: 'Can I use this calculator for weight gain goals?',
        answer:
          'This calculator is specifically designed for weight loss timelines. For weight gain, the principles are similar but reversed - you would need a calorie surplus rather than deficit. The rate of healthy weight gain is typically 0.25-0.5 kg per week. We recommend using our Calorie Calculator or TDEE Calculator to determine the calorie surplus needed for weight gain goals.',
      },
    ],
  },
  tr: {
    whatIs:
      'Kilo Verme Süresi Hesaplayıcı, kişisel profilinize ve seçtiğiniz kilo verme stratejisine göre hedef kilonuza ulaşmanızın ne kadar süreceğini tahmin eden kapsamlı bir planlama aracıdır. Basit kalori hesaplayıcılarından farklı olarak, bu araç haftalık kilometre taşlarıyla kişiselleştirilmiş bir zaman çizelgesi oluşturarak hedefinize tam olarak ne zaman ulaşabileceğinizi gösterir. Metabolizma hızı hesaplaması için Mifflin-St Jeor denklemini kanıta dayalı kilo verme ilkeleriyle birleştirerek gerçekçi tahminler üretir. Hesaplayıcı; yaşınızı, cinsiyetinizi, boyunuzu, mevcut kilonuzu, aktivite seviyenizi ve istediğiniz kilo verme hızını değerlendirerek günlük kalori hedefinizi ve tahmini bitiş tarihinizi belirler. Kilo verme sürenizi anlamak, gerçekçi beklentiler oluşturmanıza, motivasyonunuzu korumanıza ve yolculuğunuzu etkili bir şekilde planlamanıza yardımcı olur.',

    howToCalculate:
      'Hesaplama çok aşamalı bir süreç izler. İlk olarak, Bazal Metabolizma Hızınız (BMR) Mifflin-St Jeor denklemi kullanılarak hesaplanır: Erkekler için BMR = 10 x kilo(kg) + 6.25 x boy(cm) - 5 x yaş - 5. Kadınlar için BMR = 10 x kilo(kg) + 6.25 x boy(cm) - 5 x yaş - 161. Ardından, Toplam Günlük Enerji Harcamanız (TDEE) BMR\'nizin aktivite faktörünüzle çarpılmasıyla belirlenir (hareketsiz için 1.2\'den çok aktif için 1.9\'a kadar). Gereken günlük kalori açığı, 1 kg vücut yağının yaklaşık 7.700 kaloriye eşit olduğu bilgisiyle seçtiğiniz kilo verme hızına göre hesaplanır. Günlük kalori hedefiniz TDEE eksi açığa eşittir; erkekler için 1.500 kcal, kadınlar için 1.200 kcal güvenlik alt sınırı uygulanır. Son olarak, gereken toplam hafta sayısı verilecek toplam kilonun haftalık kayıp oranına bölünmesiyle hesaplanır.',

    formulaDetails:
      'Bu hesaplayıcıda kullanılan temel formüller beslenme biliminde köklü bir yere sahiptir. Mifflin-St Jeor denklemi (1990), Amerikan Beslenme ve Diyetetik Akademisi tarafından en doğru BMR tahmin formülü olarak kabul edilmektedir. Enerji dengesi denklemi, kilo değişimi = enerji alımı - enerji harcaması şeklinde ifade edilir. 1 kg yağ dokusu yaklaşık 7.700 kcal enerji depoladığından, günlük 1.100 kcal\'lik bir açık teorik olarak haftada 1 kg kilo kaybıyla sonuçlanır (7.700 / 7 = 1.100 kcal/gün). Aktivite çarpanları Harris-Benedict aktivite faktörü ölçeğine dayanır: Hareketsiz (x1.2) masa başı işler ve egzersiz yok, Hafif Aktif (x1.375) haftada 1-3 gün hafif egzersiz, Orta Aktif (x1.55) haftada 3-5 gün orta düzey egzersiz, Aktif (x1.725) haftada 6-7 gün yoğun egzersiz ve Çok Aktif (x1.9) sporcular veya fiziksel olarak zorlu işler için. Hesaplayıcı, beslenme yetersizliklerini ve metabolik adaptasyonu önlemek için Ulusal Sağlık Enstitüleri tarafından önerilen minimum kalori eşiklerini (erkekler için 1.500 kcal, kadınlar için 1.200 kcal) uygular.',

    interpretation:
      'Kilo verme zaman çizelgeniz kesin bir tahmin olarak değil, bir tahmin olarak yorumlanmalıdır. Sonuçlar şunları gösterir: Tahmini Hafta - seçtiğiniz hızda hedefinize ulaşmak için gereken yaklaşık hafta sayısı. Günlük Kalori Hedefi - günlük almanız gereken kalori miktarı (TDEE\'nizden kalori açığı çıkarılmış hali). Günlük Kalori Açığı - TDEE\'nizden ne kadar az kalori almanız gerektiği. Haftalık kilometre taşları, ilerlemenizi takip etmek için kontrol noktası ağırlıkları ve tarihleri sağlar. VKİ karşılaştırması, vücut kitle indeksinizin baştan sona nasıl değiştiğini gösterir. Tahmini süre çok uzun görünüyorsa, kalorileri daha fazla azaltmak yerine aktivite seviyenizi artırmayı düşünebilirsiniz; çünkü çok düşük kalorili diyetler sürdürülebilir değildir ve kas kaybı, beslenme yetersizlikleri ve metabolik yavaşlamaya neden olabilir.',

    limitations:
      'Bu hesaplayıcının birkaç önemli sınırlaması vardır. Birincisi, sabit bir metabolik hız varsayar, ancak gerçekte kilo verdikçe metabolizmanız düşer (metabolik adaptasyon veya "adaptif termogenez"). Çalışmalar, metabolizmanın yalnızca kilo kaybının öngördüğünün ötesinde %10-15 azalabileceğini göstermektedir. İkincisi, kilo kaybı nadiren doğrusaldır - su tutulumu, hormonal değişiklikler veya metabolik adaptasyon nedeniyle 1-4 hafta süren plato dönemleri yaşayabilirsiniz. Üçüncüsü, hesaplayıcı vücut kompozisyonundaki değişiklikleri hesaba katmaz. Kilo verdikçe hem yağ hem de bir miktar kas kaybedersiniz, bu da metabolik hızı daha da düşürür. Direnç antrenmanı kas kaybını en aza indirebilir ancak tamamen ortadan kaldıramaz. Dördüncüsü, genetik, bağırsak mikrobiyomu, uyku kalitesi, stres düzeyleri ve ilaç kullanımındaki bireysel farklılıklar kilo verme hızını önemli ölçüde etkileyebilir. Beşincisi, hesaplayıcı farklı makro besinlerin termik etkisini hesaba katmaz - protein, karbonhidrat veya yağdan daha fazla sindirim enerjisi gerektirir. Son olarak, tiroid fonksiyonu, insülin direnci, kortizol düzeyleri ve cinsiyet hormonları dahil hormonal faktörler, kalori hesaplamalarının öngördüğünün ötesinde kilo kaybını önemli ölçüde etkileyebilir.',

    healthRisks:
      'Hızlı kilo verme (uzun süre boyunca haftada 1 kg\'dan fazla) çeşitli sağlık riskleri taşır. Bunlar arasında safra taşı oluşumu (hızlı kilo vermeyle risk artar), kas kaybı (özellikle yaşlı yetişkinler için sorunlu), beslenme yetersizlikleri (vitamin, mineral, esansiyel yağ asitleri), kalp ritmini etkileyebilecek elektrolit dengesizlikleri, kilo vermeyi sürdürmeyi zorlaştıran metabolik yavaşlama, saç dökülmesi ve cilt değişiklikleri, kadınlarda adet düzensizlikleri, zayıflamış bağışıklık fonksiyonu ve yeme bozuklukları riskinin artması dahil psikolojik etkiler yer alır. Çok düşük kalorili diyetler (günlük 800 kcal\'in altında) yalnızca tıbbi gözetim altında uygulanmalıdır. En güvenli yaklaşım, günlük 500-750 kcal\'lik orta düzeyde bir kalori açığıdır ve bu haftada 0.5-0.75 kg kilo kaybıyla sonuçlanır. Bu hız daha fazla kas kütlesini korur, uzun vadede daha sürdürülebilirdir ve daha az sağlık riski taşır.',

    improvementTips:
      'Sağlığınızı korurken kilo verme sonuçlarınızı iyileştirmek için: 1) Kalori kısıtlaması sırasında kas kütlesini korumak için protein alımına öncelik verin (vücut ağırlığı kg başına 1.6-2.2 g). 2) Metabolik hızı ve vücut kompozisyonunu korumak için haftada 2-3 kez direnç antrenmanı ekleyin. 3) 7-9 saat kaliteli uyku alın - kötü uyku açlık hormonlarını artırır ve yağ kaybını azaltır. 4) Günde en az 2 litre su içerek hidrate kalın, bu su içtikten sonra 1-1.5 saat metabolizmayı %24-30 artırabilir. 5) Meditasyon, egzersiz veya diğer gevşeme teknikleriyle stresi yönetin, çünkü kortizol özellikle karın bölgesinde yağ depolanmasını teşvik eder. 6) Tokluk hissini artırmak için sebze, meyve ve tam tahıllardan daha fazla lif tüketin (günde 25-30 g). 7) Diyet molaları düşünün - her 8-12 haftada 1-2 haftalık bir bakım dönemi metabolik adaptasyonu önlemeye yardımcı olabilir. 8) Hesap verebilirlik için bir yemek günlüğü veya uygulama kullanarak gıda alımınızı takip edin. 9) Dürtüsel yemek seçimlerinden kaçınmak için öğünlerinizi önceden hazırlayın. 10) Mükemmellik değil ilerlemeye odaklanın - zaman içinde tutarlılık, günlük dalgalanmalardan çok daha önemlidir.',

    medicalDisclaimer:
      'Bu kilo verme hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Sağlanan tahminler genel formüllere dayanmaktadır ve bireysel tıbbi durumları, ilaçları veya metabolik bozuklukları hesaba katmaz. Diyabet, kalp hastalığı, böbrek hastalığı, yeme bozuklukları, tiroid hastalıkları veya diğer tıbbi durumları olan bireyler herhangi bir kilo verme programına başlamadan önce sağlık hizmeti sağlayıcılarına danışmalıdır. Hamile veya emziren kadınlar bu hesaplayıcıyı kilo verme planlaması için kullanmamalıdır. Çocuklar ve ergenlerin farklı beslenme ihtiyaçları vardır ve kilo yönetimini yalnızca pediatrik tıbbi gözetim altında takip etmelidirler. Kilo verme sırasında baş dönmesi, aşırı yorgunluk, saç dökülmesi, adet düzensizlikleri veya diğer olağandışı belirtiler yaşarsanız programınızı durdurun ve derhal bir sağlık profesyoneline başvurun.',

    references: [
      'Mifflin MD, St Jeor ST, ve ark. Sağlıklı bireylerde istirahat enerji harcaması için yeni bir tahmin denklemi. Am J Clin Nutr. 1990;51(2):241-247.',
      'Hall KD, ve ark. Enerji dengesizliğinin vücut ağırlığı üzerindeki etkisinin nicelleştirilmesi. Lancet. 2011;378(9793):826-837.',
      'Rosenbaum M, Leibel RL. İnsanlarda adaptif termogenez. Int J Obes. 2010;34(Suppl 1):S47-S55.',
      'Aragon AA, ve ark. Uluslararası spor beslenmesi derneği görüş bildirisi: diyetler ve vücut kompozisyonu. J Int Soc Sports Nutr. 2017;14:16.',
      'Ulusal Sağlık Enstitüleri (NIH) - Kilo Yönetim Programları Kılavuzları.',
      'Heymsfield SB, ve ark. İsteğe bağlı kilo kaybı: erken faz vücut kompozisyonu değişikliklerinin sistematik incelemesi. Nutr Rev. 2014;72(7):471-480.',
      'Thomas DM, ve ark. 3500 kcal açıkla haftada bir pound kilo kaybı sağlanabilir mi? Int J Obes. 2013;37(12):1611-1613.',
    ],

    tips: [
      'Gerçekçi hedefler belirleyin - kalıcı sonuçlar için haftada 0.5-1 kg vermeyi hedefleyin',
      'Kilo verme yolculuğunuz boyunca kas kütlesini korumak için protein alımına odaklanın',
      'Kalori açığınızın yanı sıra haftada en az 2-3 kez güç antrenmanı yapın',
      'İlerlemenizi günlük değil haftalık takip edin - günlük kilo su nedeniyle 1-2 kg dalgalanabilir',
      '2 haftadan uzun süren bir plato yaşarsanız kalori alımınızı veya egzersiz rutininizi ayarlamayı düşünün',
      'Hidrate kalın - bazen susuzluk açlıkla karıştırılır ve su metabolizmayı hızlandırır',
      'Her gece en az 7 saat uyuyun - uyku yoksunluğu kilo vermeyi durdurabilir',
      'Kalori hedeflerinize sadık kalmak için öğünlerinizi önceden planlayın',
    ],

    faqs: [
      {
        question: 'Kilo verme süresi hesaplayıcı ne kadar doğru?',
        answer:
          'Hesaplayıcı, yerleşik bilimsel formüllere dayalı makul bir tahmin sunar. Ancak gerçek sonuçlar bireysel metabolik farklılıklar, hormonal faktörler, diyete uyum, egzersiz farklılıkları ve metabolik adaptasyon nedeniyle %10-20 oranında değişebilir. Hesaplayıcı, zaman çizelgesi boyunca tutarlı bir çaba varsayar. Sonuçları kesin bir tahmin olarak değil, bir rehber olarak kullanın.',
      },
      {
        question: 'Neden hesaplayıcının tahmin ettiğinden daha yavaş kilo veriyorum?',
        answer:
          'Birçok faktör kilo kaybını tahminlerin altına düşürebilir: metabolik adaptasyon (kilo verdikçe vücudunuz daha az kalori yakar), yağ kaybını maskeleyen su tutulumu, kalori alımını hafife alma, egzersizde yakılan kalorileri abartma, hormonal dalgalanmalar, stres ve kötü uyku kalitesi. Kilo kaybı ayrıca nadiren doğrusaldır - su tutulumu, hormonal değişiklikler veya metabolik adaptasyon nedeniyle 1-4 hafta süren plato dönemleri normaldir ve beklenir.',
      },
      {
        question: 'Hesaplayıcının önerdiğinden daha hızlı kilo vermek güvenli mi?',
        answer:
          'Uzun süreler boyunca haftada 1 kg\'dan (2.2 lbs) fazla kilo vermek genellikle önerilmez. Hızlı kilo verme safra taşı, kas kaybı, beslenme yetersizlikleri ve metabolik yavaşlama risklerini artırır. Ayrıca sürdürmesi de daha zordur. Kadınlar için 1200 kcal, erkekler için 1500 kcal\'in altındaki kalori alımları veya haftada 1 kg\'ı aşan kilo kaybı için tıbbi gözetim önerilir.',
      },
      {
        question: 'Egzersiz sırasında yaktığım kalorileri geri yemeli miyim?',
        answer:
          'Bu, aktivite seviyenize ve kalori hedefinize bağlıdır. TDEE\'niz zaten egzersizinizi hesaba katıyorsa (aktivite seviyesi seçimi aracılığıyla), ekstra kalori yemenize gerek yoktur. Ancak seçtiğiniz aktivite seviyesinin ötesinde ek egzersiz yapıyorsanız, bu ekstra kalorilerin %50-75\'ini geri yemek aşırı yorgunluğu ve kas kaybını önlemeye yardımcı olabilir. Kalori yakma tahminleri genellikle abartıldığı için %100\'ünü geri yemekten kaçının.',
      },
      {
        question: 'Kilo verdiğimde metabolizmama ne olur?',
        answer:
          'Kilo verdikçe metabolizmanız iki nedenden dolayı doğal olarak azalır: enerji gerektiren daha az vücut kütleniz olur ve vücudunuz adaptif termogeneze uğrar, yalnızca kilo kaybının öngöreceğinin ötesinde enerji harcamasını azaltır. Bu adaptasyon metabolik hızı ek olarak %10-15 azaltabilir. Bunu en aza indirme stratejileri arasında düzenli direnç antrenmanı, yeterli protein alımı, diyet molaları ve çok düşük kalorili diyetlerden kaçınma yer alır.',
      },
      {
        question: 'Kilo verme platosunu nasıl aşarım?',
        answer:
          'Kilo verme platoları normaldir ve genellikle geçicidir (1-4 hafta). Stratejiler şunlardır: yeni düşük kilonuzda kalori ihtiyaçlarınızı yeniden hesaplayın, egzersiz yoğunluğunu veya süresini artırın, henüz yapmadıysanız güç antrenmanı ekleyin, bakım kalorilerinde 1-2 haftalık bir diyet molası verin, uyku kalitesini iyileştirin, stresi yönetin, yemek seçimlerinizi çeşitlendirin ve doğru gıda takibi sağlayın. Plato 4 haftadan uzun sürerse bir sağlık profesyoneline danışın.',
      },
      {
        question: 'Bu hesaplayıcıyı kilo alma hedefleri için kullanabilir miyim?',
        answer:
          'Bu hesaplayıcı özellikle kilo verme zaman çizelgeleri için tasarlanmıştır. Kilo alma için ilkeler benzer ancak tersinedir - açık yerine kalori fazlasına ihtiyacınız olacaktır. Sağlıklı kilo alma hızı genellikle haftada 0.25-0.5 kg\'dır. Kilo alma hedefleri için gereken kalori fazlasını belirlemek üzere Kalori Hesaplayıcı veya TDEE Hesaplayıcımızı kullanmanızı öneririz.',
      },
    ],
  },
};
