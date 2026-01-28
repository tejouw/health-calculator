import { CalculatorContent } from '@/types/calculator';

export const tdeeContent: CalculatorContent = {
  en: {
    whatIs:
      'Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in a 24-hour period, accounting for all activities and bodily functions. TDEE represents the complete energy cost of living, including your Basal Metabolic Rate (BMR) plus all physical activity, digestion, and thermogenesis. Understanding your TDEE is fundamental for weight management because it tells you exactly how many calories you need to consume to maintain, lose, or gain weight. TDEE is calculated by multiplying your BMR (the calories burned at rest) by an activity factor that reflects your lifestyle and exercise habits. For example, someone with a TDEE of 2,500 calories needs to eat approximately that amount to maintain their current weight. To lose weight, they would need to create a calorie deficit by eating less than 2,500 calories; to gain weight, they would need a surplus by eating more. TDEE varies significantly between individuals based on age, gender, height, weight, muscle mass, and activity level. Unlike static calorie recommendations, TDEE provides personalized energy requirements that account for your unique physiology and lifestyle.',

    howToCalculate:
      'TDEE is calculated using a two-step process. First, calculate your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation, which is considered the most accurate formula for the general population. For men: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) + 5. For women: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age(years) - 161. For example, a 30-year-old woman who is 165 cm tall and weighs 65 kg would have: BMR = 10(65) + 6.25(165) - 5(30) - 161 = 650 + 1031.25 - 150 - 161 = 1,370 calories. Second, multiply your BMR by your activity factor: Sedentary (little/no exercise) = BMR × 1.2; Lightly active (light exercise 1-3 days/week) = BMR × 1.375; Moderately active (moderate exercise 3-5 days/week) = BMR × 1.55; Very active (hard exercise 6-7 days/week) = BMR × 1.725; Extremely active (very hard exercise, physical job, or training twice per day) = BMR × 1.9. Using the example above, if this woman exercises moderately 3-5 days per week: TDEE = 1,370 × 1.55 = 2,124 calories per day.',

    formulaDetails:
      'The Mifflin-St Jeor equation, developed in 1990, replaced the older Harris-Benedict equation as the gold standard for BMR calculation due to its improved accuracy. This equation accounts for the fact that men typically have more muscle mass than women (hence the +5 vs -161 adjustment), and that metabolic rate decreases with age (the -5 × age factor). Height and weight have the strongest influence on BMR because larger bodies require more energy to maintain basic functions. The activity multipliers are derived from extensive research measuring energy expenditure across different lifestyle patterns. The sedentary multiplier (1.2) adds only 20% to BMR because desk work and minimal movement require little energy beyond basic metabolism. The extremely active multiplier (1.9) nearly doubles BMR because intense daily training dramatically increases energy needs. It is important to be honest when selecting your activity level—most people overestimate their activity. Only count structured exercise, not daily life activities already factored into activity categories. For more precision, advanced methods like the Katch-McArdle formula incorporate body fat percentage, providing more accurate results for very lean or muscular individuals. However, for the general population, Mifflin-St Jeor provides excellent estimates with readily available measurements.',

    categories: [
      {
        range: 'Sedentary (BMR × 1.2)',
        label: 'Little or No Exercise',
        description:
          'Desk job with minimal physical activity. Less than 30 minutes of movement per day beyond basic daily tasks. No regular exercise routine.',
        color: '#EF4444',
      },
      {
        range: 'Lightly Active (BMR × 1.375)',
        label: 'Light Exercise 1-3 Days/Week',
        description:
          'Light exercise or sports 1-3 days per week. Includes activities like casual walking, light yoga, or recreational activities. About 30-60 minutes of light activity on exercise days.',
        color: '#F97316',
      },
      {
        range: 'Moderately Active (BMR × 1.55)',
        label: 'Moderate Exercise 3-5 Days/Week',
        description:
          'Moderate exercise or sports 3-5 days per week. Includes activities like jogging, swimming, cycling, or gym workouts. About 45-90 minutes of moderate intensity exercise on training days.',
        color: '#F59E0B',
      },
      {
        range: 'Very Active (BMR × 1.725)',
        label: 'Hard Exercise 6-7 Days/Week',
        description:
          'Hard exercise or sports 6-7 days per week. Consistent daily training with significant intensity. Includes serious athletes, regular gym-goers, or those with physically demanding jobs.',
        color: '#10B981',
      },
      {
        range: 'Extremely Active (BMR × 1.9)',
        label: 'Very Hard Exercise & Physical Job',
        description:
          'Very hard exercise daily or physical job plus training. Professional athletes, military training, construction workers who also train, or those training multiple times per day.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'Your TDEE represents your daily calorie maintenance level—the amount you need to eat to keep your weight stable. If you consistently eat fewer calories than your TDEE, you will lose weight; if you eat more, you will gain weight. The key word is "consistently"—occasional deviations do not significantly impact long-term results. For weight loss, a deficit of 500 calories per day below TDEE typically results in approximately 0.5 kg (1 lb) loss per week, since 3,500 calories equals roughly one pound of fat. Aggressive deficits of 1,000 calories can yield 1 kg (2 lbs) weekly loss but are only appropriate for those with significant weight to lose and should be supervised medically. For muscle gain, a surplus of 300-500 calories above TDEE supports lean muscle growth while minimizing fat gain. Larger surpluses lead to faster weight gain but with proportionally more fat. It is important to understand that TDEE is an estimate, not an absolute number. Individual metabolic variations mean your actual calorie needs may differ by 10-15%. Use TDEE as a starting point, then adjust based on real-world results over 2-4 weeks. If you are not losing weight on a deficit, reduce calories by 100-200 and reassess. Your TDEE also changes as your weight changes—regularly recalculate every 5-10 lbs of weight loss or gain.',

    limitations:
      'TDEE calculations provide estimates based on population averages and have several limitations. First, activity multipliers are broad categories that cannot perfectly capture individual lifestyle nuances. Someone who exercises moderately but has a very active job may fall between categories. Second, metabolic rate varies between individuals due to genetics, hormones, medication, and metabolic adaptation. Some people have naturally faster or slower metabolisms than formulas predict. Third, body composition significantly impacts metabolism—muscle tissue burns more calories than fat, so muscular individuals have higher TDEE than formulas suggest, while those with high body fat may have lower TDEE. The Mifflin-St Jeor equation does not account for body fat percentage. Fourth, metabolic adaptation (adaptive thermogenesis) occurs during prolonged calorie restriction, where metabolism slows beyond what weight loss alone predicts. This means TDEE decreases more than expected during dieting. Fifth, NEAT (Non-Exercise Activity Thermogenesis)—calories burned through fidgeting, posture, and unconscious movement—varies dramatically between individuals and is not captured in activity levels. Sixth, the thermic effect of food (calories burned digesting food) varies based on macronutrient composition but is averaged in TDEE calculations. Seventh, hormonal conditions like hypothyroidism, PCOS, or insulin resistance can lower metabolic rate. Eighth, medications including antidepressants, antipsychotics, and corticosteroids can alter metabolism. Finally, age-related metabolic decline is averaged in formulas but varies individually. Despite these limitations, TDEE remains the best practical tool for estimating calorie needs and should be used as a starting point, refined through tracking and adjustment.',

    healthRisks:
      'Consuming significantly more or fewer calories than your TDEE carries health risks. Chronic undereating (eating far below TDEE) leads to multiple problems: nutrient deficiencies causing fatigue, weakened immunity, hair loss, and brittle nails; hormonal disruption including thyroid dysfunction, irregular menstrual cycles in women, and reduced testosterone in men; metabolic adaptation where metabolism slows dramatically, making future weight loss harder; muscle loss as the body breaks down muscle for energy when calories are too low; decreased bone density increasing osteoporosis risk; psychological effects including obsessive food thoughts, binge eating, and eating disorders. Eating below 1,200 calories daily for women or 1,500 for men is generally considered too low without medical supervision. Very low calorie diets (under 800 calories) should only be undertaken under strict medical supervision for severely obese individuals. Conversely, chronic overeating (consistently exceeding TDEE) leads to weight gain, obesity, increased risk of type 2 diabetes, cardiovascular disease, hypertension, certain cancers, sleep apnea, joint problems, fatty liver disease, and reduced life expectancy. The optimal approach is moderate deficits (300-500 calories below TDEE) for weight loss and small surpluses (200-400 above TDEE) for muscle gain. Crash diets promising rapid weight loss through extreme restriction are unsustainable and physiologically harmful. Additionally, even at appropriate calorie levels, diet quality matters enormously—meeting TDEE with processed foods, sugars, and unhealthy fats creates health problems despite weight maintenance. Focus on whole foods, adequate protein, healthy fats, and nutrient-dense carbohydrates regardless of your calorie target.',

    alternativeMeasures:
      'Several alternative methods exist for estimating energy expenditure, each with advantages and tradeoffs. The Harris-Benedict equation (revised in 1984) was the original BMR formula but tends to overestimate by 5-10% compared to Mifflin-St Jeor. The Katch-McArdle formula calculates BMR based on lean body mass rather than total weight, providing superior accuracy for athletic or very lean individuals but requiring body fat percentage measurement. The formula is: BMR = 370 + (21.6 × lean body mass in kg). Cunningham equation is similar to Katch-McArdle and also requires lean mass data. For increased precision, metabolic testing measures actual energy expenditure. Resting Metabolic Rate (RMR) testing uses indirect calorimetry—analyzing oxygen consumption and carbon dioxide production—to measure calories burned at rest. This test, available at universities and specialized clinics, provides your actual BMR rather than an estimate. For TDEE, metabolic carts or wearable devices like the Lumen metabolic tracker provide daily expenditure measurements, though accuracy varies. Doubly labeled water is the gold standard for measuring TDEE with exceptional accuracy but is expensive and primarily used in research settings. It involves drinking water with stable isotope tracers and analyzing their elimination over 1-2 weeks. Practical alternatives include calorie tracking apps combined with weight monitoring—by tracking calories and weight changes over 2-4 weeks, you can reverse-engineer your actual TDEE. If eating 2,000 calories daily results in 0.5 kg weekly loss, your TDEE is approximately 2,500 (since 500 × 7 = 3,500 calories = 0.5 kg). This empirical method accounts for all individual variations but requires consistent tracking.',

    demographicDifferences:
      'TDEE varies substantially across demographic groups due to physiological differences. Gender creates significant differences—men typically have 5-10% higher BMR than women of the same weight due to greater muscle mass and testosterone levels. This is why the Mifflin-St Jeor equation adds 5 for men but subtracts 161 for women. Age progressively reduces TDEE by approximately 2-3% per decade after age 25 due to muscle loss (sarcopenia), hormonal changes, and reduced cellular metabolism. A 50-year-old may need 150-300 fewer daily calories than at age 25 despite identical activity. Body composition dramatically affects TDEE—muscle tissue burns approximately 6 calories per pound daily while fat burns only 2 calories. An individual with 150 lbs lean mass and 30 lbs fat burns far more than someone with 120 lbs lean mass and 60 lbs fat at the same total weight. Athletes and bodybuilders with exceptional muscle mass may have TDEE 300-500 calories higher than formulas predict. Ethnicity influences metabolism modestly—some studies suggest Asian populations may have 3-5% lower BMR than Caucasian populations at the same size, though this is controversial and individuals vary greatly. Height affects TDEE since taller individuals have more body surface area and generally more mass to support. Genetics account for roughly 20-30% of metabolic rate variation between individuals through differences in mitochondrial efficiency, fidgeting tendencies (NEAT), hormones, and brown fat activity. Medical conditions significantly impact TDEE—hypothyroidism can lower metabolism by 10-40%, while hyperthyroidism raises it dramatically. PCOS, insulin resistance, and metabolic syndrome typically reduce metabolic rate. Medications including beta-blockers, antidepressants, and corticosteroids can lower TDEE. Finally, dieting history affects metabolism—those with extensive yo-yo dieting history often have suppressed metabolic rates due to adaptive thermogenesis.',

    medicalDisclaimer:
      'This TDEE calculator provides estimates for educational and informational purposes only and should not replace professional medical advice, diagnosis, or treatment. TDEE calculations are population-based estimates and may not accurately reflect your individual metabolism, which can vary by 10-20% from predictions due to genetics, hormones, medical conditions, medications, and other factors. Results should serve as starting points for calorie planning, not definitive prescriptions. Before beginning any diet, weight loss program, exercise regimen, or significant calorie restriction, consult with qualified healthcare professionals including physicians, registered dietitians, or nutritionists. This is especially critical if you have medical conditions including diabetes, heart disease, eating disorders, hormonal imbalances, metabolic disorders, or if you take medications that affect metabolism or appetite. Pregnant or breastfeeding women require specialized calorie calculations and should not use standard TDEE formulas without medical guidance. Individuals under 18 years old have different energy needs due to growth and should consult pediatric nutrition specialists. Very low calorie diets (under 1,200 for women or 1,500 for men) should never be undertaken without medical supervision due to serious health risks including malnutrition, muscle loss, hormonal disruption, and organ damage. Those with a history of eating disorders should not use calorie calculators without guidance from mental health and nutrition professionals, as calorie counting can trigger disordered eating patterns. Never make medical decisions or start supplements, medications, or extreme dietary changes based solely on TDEE calculator results. Individual health assessment requires comprehensive evaluation of medical history, lab work, body composition, lifestyle factors, and overall health status that online calculators cannot provide.',

    references: [
      'Mifflin MD, St Jeor ST, Hill LA, et al. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241-247.',
      'Frankenfield D, Roth-Yousey L, Compher C. Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults: a systematic review. J Am Diet Assoc. 2005;105(5):775-789.',
      'World Health Organization. Human energy requirements: Report of a Joint FAO/WHO/UNU Expert Consultation. Food and Nutrition Technical Report Series. 2001.',
      'Hall KD, Heymsfield SB, Kemnitz JW, et al. Energy balance and its components: implications for body weight regulation. Am J Clin Nutr. 2012;95(4):989-994.',
      'Trexler ET, Smith-Ryan AE, Norton LE. Metabolic adaptation to weight loss: implications for the athlete. J Int Soc Sports Nutr. 2014;11(1):7.',
      'Rosenbaum M, Leibel RL. Adaptive thermogenesis in humans. Int J Obes. 2010;34(Suppl 1):S47-S55.',
      'Levine JA. Non-exercise activity thermogenesis (NEAT). Best Pract Res Clin Endocrinol Metab. 2002;16(4):679-702.',
      'Academy of Nutrition and Dietetics. Adult Weight Management Evidence-Based Nutrition Practice Guideline. 2016.',
    ],

    tips: [
      'Use TDEE as a starting point, then adjust based on real-world results after 2-4 weeks of consistent tracking',
      'Weigh yourself daily at the same time (preferably morning after bathroom, before eating) and use weekly averages to track trends',
      'Most people overestimate their activity level—be honest when selecting your category, as sedentary or lightly active applies to most office workers',
      'Recalculate TDEE every 5-10 lbs (2-5 kg) of weight change, as your calorie needs decrease as you lose weight',
      'Aim for moderate calorie deficits (300-500 below TDEE) for sustainable fat loss while preserving muscle mass',
      'Prioritize protein intake (0.7-1g per pound bodyweight) to maintain muscle mass during calorie deficits',
      'Resistance training 2-4 times per week helps preserve muscle during weight loss and builds muscle during surpluses',
      'Track food intake accurately using a food scale and app like MyFitnessPal for at least 2-4 weeks to establish baseline habits',
      'Include diet breaks (eating at maintenance TDEE) every 8-12 weeks during prolonged dieting to restore hormones and metabolism',
      'Focus on whole, minimally processed foods that provide satiety and nutrition, not just hitting calorie targets with any food',
    ],

    faqs: [
      {
        question: 'What is the difference between BMR and TDEE?',
        answer:
          'BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing, circulation, and cell production—essentially the energy needed to stay alive if you did nothing all day. TDEE (Total Daily Energy Expenditure) is your BMR multiplied by an activity factor that accounts for all movement, exercise, digestion, and daily activities. For example, if your BMR is 1,500 calories and you are moderately active (activity factor 1.55), your TDEE is 2,325 calories. TDEE represents your complete daily calorie burn and is the number you use for meal planning.',
      },
      {
        question: 'How accurate are TDEE calculators?',
        answer:
          'TDEE calculators provide estimates that are accurate within about 10-15% for most people. Individual metabolic rate can vary due to genetics, body composition, hormones, and other factors not captured in standard equations. The Mifflin-St Jeor equation used by most calculators is considered the most accurate formula for the general population. However, TDEE should be treated as a starting point, not an absolute number. Track your calories and weight for 2-4 weeks, then adjust based on results. If you are not losing weight on a calculated deficit, reduce calories by 100-200 and reassess.',
      },
      {
        question: 'Should I eat back calories burned during exercise?',
        answer:
          'This depends on how you calculated your TDEE. If you included regular exercise in your activity level multiplier, exercise calories are already accounted for in your TDEE and you should NOT eat them back. However, if you calculated TDEE using sedentary activity, you may eat back 50-75% of exercise calories (not 100%, as calorie burn estimates are often inflated). For consistency and simplicity, it is generally recommended to include regular exercise in your TDEE calculation rather than adding it back separately. This provides a stable daily calorie target rather than varying intake based on workout days.',
      },
      {
        question: 'Why am I not losing weight even though I eat below my TDEE?',
        answer:
          'Several factors explain plateaus: (1) Inaccurate calorie tracking—studies show people underestimate intake by 20-50%, especially with oils, condiments, and snacks. Use a food scale. (2) Your TDEE decreased—as you lose weight, your body requires fewer calories, so recalculate every 5-10 lbs. (3) Metabolic adaptation—prolonged dieting lowers metabolic rate beyond weight loss predictions. Take a 1-2 week diet break at maintenance calories. (4) Water retention—stress, sodium, exercise, menstrual cycle, and inflammation cause water fluctuations that mask fat loss on the scale. Track trends over 3-4 weeks. (5) You are not actually in a deficit—ensure your TDEE calculation is accurate and consider reducing calories by 100-200 if no progress after 3 weeks.',
      },
      {
        question: 'How fast should I lose weight?',
        answer:
          'For most people, sustainable fat loss is 0.5-1% of body weight per week. This typically means 0.5-1 kg (1-2 lbs) weekly for most individuals, achieved through a deficit of 300-750 calories below TDEE. Faster loss risks muscle loss, metabolic slowdown, and unsustainability. Individuals with significant obesity (BMI > 35) may safely lose faster initially. Very slow loss under 0.25 kg (0.5 lbs) weekly indicates too small a deficit. Prioritize preserving muscle by maintaining high protein intake (0.7-1g per lb bodyweight), resistance training 2-4 times weekly, and avoiding excessive deficits over 1,000 calories. Weight loss is not linear—expect plateaus, water fluctuations, and variation.',
      },
      {
        question: 'Can I gain muscle while losing fat?',
        answer:
          'Yes, but it is difficult and context-dependent. "Body recomposition" (simultaneous fat loss and muscle gain) is most achievable for: (1) Beginners with no training history—untrained individuals build muscle easily even in calorie deficits. (2) Those returning after a break—muscle memory accelerates regrowth. (3) Individuals with high body fat (20%+ for men, 30%+ for women)—excess fat provides energy for muscle building. For recomposition, maintain a small deficit (200-300 calories below TDEE), prioritize protein (0.8-1g per lb bodyweight), and perform progressive resistance training 3-5 times weekly. Advanced lifters at low body fat typically cannot build significant muscle in deficits and must choose between fat loss phases (cut) or muscle gain phases (bulk).',
      },
      {
        question: 'Should I adjust my TDEE on rest days?',
        answer:
          'It depends on your approach. If you included weekly average exercise in your TDEE calculation, keep calories consistent daily for simplicity—your body does not operate on 24-hour cycles, and recovery days still burn significant energy rebuilding tissue. This approach (same calories daily) is easier to follow and prevents overeating on training days or under-eating on rest days. Alternatively, calorie cycling adjusts intake based on activity—higher calories on training days, lower on rest days, with the same weekly total. This may help some people feel more energized for workouts but adds complexity. For most people, consistent daily calories based on weekly average activity is simpler and equally effective.',
      },
    ],
  },
  tr: {
    whatIs:
      'Toplam Günlük Enerji Harcaması (TDEE), vücudunuzun 24 saatlik bir sürede tüm aktiviteler ve vücut fonksiyonları hesaba katılarak yaktığı toplam kalori miktarıdır. TDEE, Bazal Metabolizma Hızınızı (BMR) artı tüm fiziksel aktiviteyi, sindirimi ve termogenezi içeren yaşamanın tam enerji maliyetini temsil eder. TDEE\'nizi anlamak kilo yönetimi için temeldir çünkü kilonuzu korumak, vermek veya almak için tam olarak kaç kalori tüketmeniz gerektiğini söyler. TDEE, BMR\'nizi (dinlenme halinde yakılan kaloriler) yaşam tarzınızı ve egzersiz alışkanlıklarınızı yansıtan bir aktivite faktörü ile çarparak hesaplanır. Örneğin, TDEE\'si 2.500 kalori olan birinin mevcut kilosunu korumak için yaklaşık bu miktarda yemesi gerekir. Kilo vermek için 2.500 kaloriden az yiyerek kalori açığı oluşturmaları gerekir; kilo almak için ise fazladan yiyerek fazlalık oluşturmaları gerekir. TDEE, yaş, cinsiyet, boy, kilo, kas kütlesi ve aktivite seviyesine bağlı olarak bireyler arasında önemli ölçüde değişir. Statik kalori önerilerinin aksine, TDEE benzersiz fizyolojinizi ve yaşam tarzınızı hesaba katan kişiselleştirilmiş enerji gereksinimleri sağlar.',

    howToCalculate:
      'TDEE iki aşamalı bir süreç kullanılarak hesaplanır. İlk olarak, genel popülasyon için en doğru formül olarak kabul edilen Mifflin-St Jeor denklemini kullanarak Bazal Metabolizma Hızınızı (BMR) hesaplayın. Erkekler için: BMR = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş(yıl) + 5. Kadınlar için: BMR = 10 × kilo(kg) + 6.25 × boy(cm) - 5 × yaş(yıl) - 161. Örneğin, 165 cm boyunda ve 65 kg ağırlığında 30 yaşında bir kadın: BMR = 10(65) + 6.25(165) - 5(30) - 161 = 650 + 1031.25 - 150 - 161 = 1.370 kalori olacaktır. İkinci olarak, BMR\'nizi aktivite faktörünüzle çarpın: Hareketsiz (az/hiç egzersiz yok) = BMR × 1.2; Hafif aktif (haftada 1-3 gün hafif egzersiz) = BMR × 1.375; Orta aktif (haftada 3-5 gün orta şiddette egzersiz) = BMR × 1.55; Çok aktif (haftada 6-7 gün yoğun egzersiz) = BMR × 1.725; Aşırı aktif (çok yoğun egzersiz, fiziksel iş veya günde iki kez antrenman) = BMR × 1.9. Yukarıdaki örneği kullanarak, bu kadın haftada 3-5 gün orta şiddette egzersiz yapıyorsa: TDEE = 1.370 × 1.55 = 2.124 kalori/gün.',

    formulaDetails:
      '1990\'da geliştirilen Mifflin-St Jeor denklemi, gelişmiş doğruluğu nedeniyle BMR hesaplaması için altın standart olarak eski Harris-Benedict denkleminin yerini aldı. Bu denklem, erkeklerin tipik olarak kadınlardan daha fazla kas kütlesine sahip olduğu gerçeğini (+5 vs -161 ayarlaması) ve metabolizma hızının yaşla birlikte azaldığını (-5 × yaş faktörü) hesaba katar. Boy ve kilo BMR üzerinde en güçlü etkiye sahiptir çünkü daha büyük vücutlar temel fonksiyonları sürdürmek için daha fazla enerji gerektirir. Aktivite çarpanları, farklı yaşam tarzı kalıplarında enerji harcamasını ölçen kapsamlı araştırmalardan türetilmiştir. Hareketsiz çarpan (1.2) BMR\'ye sadece %20 ekler çünkü masa başı iş ve minimal hareket temel metabolizmanın ötesinde çok az enerji gerektirir. Aşırı aktif çarpan (1.9) BMR\'yi neredeyse ikiye katlar çünkü yoğun günlük antrenman enerji ihtiyaçlarını önemli ölçüde artırır. Aktivite seviyenizi seçerken dürüst olmak önemlidir—çoğu insan aktivitelerini fazla tahmin eder. Yalnızca yapılandırılmış egzersizi sayın, aktivite kategorilerine zaten dahil olan günlük yaşam aktivitelerini değil. Daha fazla hassasiyet için, Katch-McArdle formülü gibi gelişmiş yöntemler vücut yağ yüzdesini birleştirir ve çok yağsız veya kaslı bireyler için daha doğru sonuçlar sağlar. Ancak, genel popülasyon için Mifflin-St Jeor, kolayca erişilebilir ölçümlerle mükemmel tahminler sağlar.',

    categories: [
      {
        range: 'Hareketsiz (BMR × 1.2)',
        label: 'Az veya Hiç Egzersiz Yok',
        description:
          'Minimal fiziksel aktivite ile masa başı iş. Temel günlük görevlerin ötesinde günde 30 dakikadan az hareket. Düzenli egzersiz rutini yok.',
        color: '#EF4444',
      },
      {
        range: 'Hafif Aktif (BMR × 1.375)',
        label: 'Haftada 1-3 Gün Hafif Egzersiz',
        description:
          'Haftada 1-3 gün hafif egzersiz veya spor. Gündelik yürüyüş, hafif yoga veya rekreasyon aktiviteleri gibi aktiviteler içerir. Egzersiz günlerinde yaklaşık 30-60 dakika hafif aktivite.',
        color: '#F97316',
      },
      {
        range: 'Orta Aktif (BMR × 1.55)',
        label: 'Haftada 3-5 Gün Orta Şiddette Egzersiz',
        description:
          'Haftada 3-5 gün orta şiddette egzersiz veya spor. Koşu, yüzme, bisiklet veya spor salonu antrenmanları gibi aktiviteler içerir. Antrenman günlerinde yaklaşık 45-90 dakika orta yoğunlukta egzersiz.',
        color: '#F59E0B',
      },
      {
        range: 'Çok Aktif (BMR × 1.725)',
        label: 'Haftada 6-7 Gün Yoğun Egzersiz',
        description:
          'Haftada 6-7 gün yoğun egzersiz veya spor. Önemli yoğunlukta tutarlı günlük antrenman. Ciddi sporcular, düzenli spor salonu müdavimleri veya fiziksel olarak zorlu işleri olanlar içerir.',
        color: '#10B981',
      },
      {
        range: 'Aşırı Aktif (BMR × 1.9)',
        label: 'Çok Yoğun Egzersiz ve Fiziksel İş',
        description:
          'Her gün çok yoğun egzersiz veya fiziksel iş artı antrenman. Profesyonel sporcular, askeri eğitim, antrenman da yapan inşaat işçileri veya günde birden fazla kez antrenman yapanlar.',
        color: '#3B82F6',
      },
    ],

    interpretation:
      'TDEE\'niz günlük kalori bakım seviyenizi temsil eder—kilonuzu sabit tutmak için yemeniz gereken miktardır. TDEE\'nizden sürekli olarak daha az kalori yerseniz kilo verirsiniz; daha fazla yerseniz kilo alırsınız. Anahtar kelime "sürekli"dir—ara sıra sapmalar uzun vadeli sonuçları önemli ölçüde etkilemez. Kilo verme için, TDEE\'nin 500 kalori altında bir açık genellikle haftada yaklaşık 0.5 kg kayıpla sonuçlanır, çünkü 3.500 kalori kabaca yarım kilo yağa eşittir. 1.000 kalorili agresif açıklar haftada 1 kg kayıp sağlayabilir ancak yalnızca önemli ölçüde kilo vermesi gerekenler için uygundur ve tıbbi olarak denetlenmelidir. Kas kazanımı için, TDEE\'nin 300-500 kalori üzerinde bir fazlalık yağ kazanımını minimize ederken yağsız kas büyümesini destekler. Daha büyük fazlalıklar daha hızlı kilo alımına yol açar ancak orantılı olarak daha fazla yağ ile. TDEE\'nin mutlak bir sayı değil, bir tahmin olduğunu anlamak önemlidir. Bireysel metabolik varyasyonlar gerçek kalori ihtiyaçlarınızın %10-15 farklı olabileceği anlamına gelir. TDEE\'yi bir başlangıç noktası olarak kullanın, ardından 2-4 hafta boyunca gerçek dünya sonuçlarına göre ayarlayın. Bir açıkta kilo vermiyorsanız, kalorileri 100-200 azaltın ve yeniden değerlendirin. TDEE\'niz kilonuz değiştikçe de değişir—her 2-5 kg kilo kaybı veya kazanımında düzenli olarak yeniden hesaplayın.',

    limitations:
      'TDEE hesaplamaları popülasyon ortalamalarına dayalı tahminler sağlar ve birkaç sınırlaması vardır. İlk olarak, aktivite çarpanları bireysel yaşam tarzı nüanslarını mükemmel bir şekilde yakalayamayan geniş kategorilerdir. Orta şiddette egzersiz yapan ancak çok aktif bir işi olan biri kategoriler arasında kalabilir. İkinci olarak, metabolizma hızı genetik, hormonlar, ilaçlar ve metabolik adaptasyon nedeniyle bireyler arasında değişir. Bazı insanlar formüllerin tahmin ettiğinden doğal olarak daha hızlı veya daha yavaş metabolizmaya sahiptir. Üçüncü olarak, vücut kompozisyonu metabolizmayı önemli ölçüde etkiler—kas dokusu yağdan daha fazla kalori yakar, bu nedenle kaslı bireyler formüllerin önerdiğinden daha yüksek TDEE\'ye sahiptir, yüksek vücut yağına sahip olanlar ise daha düşük TDEE\'ye sahip olabilir. Mifflin-St Jeor denklemi vücut yağ yüzdesini hesaba katmaz. Dördüncü olarak, uzun süreli kalori kısıtlaması sırasında metabolik adaptasyon (adaptif termogenez) meydana gelir, metabolizma sadece kilo kaybının tahmin ettiğinden daha fazla yavaşlar. Bu, diyet sırasında TDEE\'nin beklenenden daha fazla azaldığı anlamına gelir. Beşinci olarak, NEAT (Egzersiz Dışı Aktivite Termogenezi)—kıpırdanma, duruş ve bilinçsiz hareket yoluyla yakılan kaloriler—bireyler arasında önemli ölçüde değişir ve aktivite seviyelerinde yakalanmaz. Altıncı olarak, besinlerin termik etkisi (besinleri sindirir yakılan kaloriler) makrobesin kompozisyonuna göre değişir ancak TDEE hesaplamalarında ortalaması alınır. Yedinci olarak, hipotiroidizm, PCOS veya insülin direnci gibi hormonal durumlar metabolizma hızını düşürebilir. Sekizinci olarak, antidepresanlar, antipsikotikler ve kortikosteroidler dahil ilaçlar metabolizmayı değiştirebilir. Son olarak, yaşa bağlı metabolik düşüş formüllerde ortalaması alınır ancak bireysel olarak değişir. Bu sınırlamalara rağmen, TDEE kalori ihtiyaçlarını tahmin etmek için en iyi pratik araç olmaya devam eder ve bir başlangıç noktası olarak kullanılmalı, takip ve ayarlama yoluyla iyileştirilmelidir.',

    healthRisks:
      'TDEE\'nizden önemli ölçüde daha fazla veya daha az kalori tüketmek sağlık riskleri taşır. Kronik yetersiz beslenme (TDEE\'nin çok altında yemek) birden fazla soruna yol açar: yorgunluk, zayıflamış bağışıklık, saç dökülmesi ve kırılgan tırnaklara neden olan besin eksiklikleri; tiroid işlev bozukluğu, kadınlarda düzensiz adet döngüleri ve erkeklerde azalmış testosteron dahil hormonal bozulma; metabolizmanın önemli ölçüde yavaşladığı ve gelecekteki kilo kaybını zorlaştıran metabolik adaptasyon; kaloriler çok düşük olduğunda vücudun enerji için kasları parçalamasıyla kas kaybı; osteoporoz riskini artıran azalmış kemik yoğunluğu; obsesif yemek düşünceleri, aşırı yeme ve yeme bozuklukları dahil psikolojik etkiler. Kadınlar için günlük 1.200 kalorinin altında veya erkekler için 1.500\'ün altında yemek genellikle tıbbi gözetim olmadan çok düşük kabul edilir. Çok düşük kalorili diyetler (800 kalorinin altında) yalnızca ciddi obez bireyler için sıkı tıbbi gözetim altında yapılmalıdır. Tersine, kronik aşırı yeme (sürekli TDEE\'yi aşmak) kilo alımına, obeziteye, tip 2 diyabet riskinin artmasına, kardiyovasküler hastalığa, hipertansiyona, belirli kanserlere, uyku apnesine, eklem sorunlarına, yağlı karaciğer hastalığına ve azalmış yaşam beklentisine yol açar. Optimal yaklaşım, kilo kaybı için orta düzeyde açıklar (TDEE\'nin 300-500 kalori altı) ve kas kazanımı için küçük fazlalıklardır (TDEE\'nin 200-400 üstü). Aşırı kısıtlama yoluyla hızlı kilo kaybı vaat eden kısa süreli diyetler sürdürülemez ve fizyolojik olarak zararlıdır. Ek olarak, uygun kalori seviyelerinde bile diyet kalitesi son derece önemlidir—işlenmiş gıdalar, şekerler ve sağlıksız yağlarla TDEE\'yi karşılamak kilo bakımına rağmen sağlık sorunları yaratır. Kalori hedefınızden bağımsız olarak tam gıdalara, yeterli proteine, sağlıklı yağlara ve besin açısından yoğun karbonhidratlara odaklanın.',

    alternativeMeasures:
      'Enerji harcamasını tahmin etmek için her biri avantajları ve değiş tokuşları olan birkaç alternatif yöntem mevcuttur. Harris-Benedict denklemi (1984\'te revize edilmiş) orijinal BMR formülüydü ancak Mifflin-St Jeor\'a kıyasla %5-10 fazla tahmin etme eğilimindedir. Katch-McArdle formülü, toplam kilo yerine yağsız vücut kütlesine dayalı olarak BMR hesaplar ve atletik veya çok yağsız bireyler için üstün doğruluk sağlar ancak vücut yağ yüzdesi ölçümü gerektirir. Formül: BMR = 370 + (21.6 × kg cinsinden yağsız vücut kütlesi). Cunningham denklemi Katch-McArdle\'a benzerdir ve ayrıca yağsız kütle verisi gerektirir. Artan hassasiyet için, metabolik test gerçek enerji harcamasını ölçer. Dinlenme Metabolizma Hızı (RMR) testi, dinlenme halinde yakılan kalorileri ölçmek için oksijen tüketimi ve karbondioksit üretimini analiz eden dolaylı kalorimetri kullanır. Üniversitelerde ve özel kliniklerde mevcut olan bu test, bir tahmin yerine gerçek BMR\'nizi sağlar. TDEE için, metabolik arabalar veya Lumen metabolik izleyici gibi giyilebilir cihazlar günlük harcama ölçümleri sağlar, ancak doğruluk değişir. İkili etiketli su, olağanüstü doğrulukla TDEE ölçümü için altın standarttır ancak pahalıdır ve öncelikle araştırma ortamlarında kullanılır. Stabil izotop izleyicileri içeren su içmeyi ve 1-2 hafta boyunca eliminasyonlarını analiz etmeyi içerir. Pratik alternatifler, kilo izleme ile birleştirilen kalori takip uygulamalarını içerir—2-4 hafta boyunca kalorileri ve kilo değişikliklerini takip ederek gerçek TDEE\'nizi tersine mühendislik yapabilirsiniz. Günlük 2.000 kalori yemek haftada 0.5 kg kayıpla sonuçlanırsa, TDEE\'niz yaklaşık 2.500\'dür (çünkü 500 × 7 = 3.500 kalori = 0.5 kg). Bu deneysel yöntem tüm bireysel varyasyonları hesaba katar ancak tutarlı takip gerektirir.',

    demographicDifferences:
      'TDEE, fizyolojik farklılıklar nedeniyle demografik gruplar arasında önemli ölçüde değişir. Cinsiyet önemli farklılıklar yaratır—erkekler genellikle daha fazla kas kütlesi ve testosteron seviyeleri nedeniyle aynı kilodaki kadınlardan %5-10 daha yüksek BMR\'ye sahiptir. Bu nedenle Mifflin-St Jeor denklemi erkekler için 5 ekler ancak kadınlar için 161 çıkarır. Yaş, kas kaybı (sarkopeni), hormonal değişiklikler ve azalmış hücresel metabolizma nedeniyle 25 yaşından sonra her on yılda yaklaşık %2-3 oranında TDEE\'yi kademeli olarak azaltır. 50 yaşındaki biri, aynı aktiviteye rağmen 25 yaşındayken günde 150-300 daha az kaloriye ihtiyaç duyabilir. Vücut kompozisyonu TDEE\'yi önemli ölçüde etkiler—kas dokusu günlük pound başına yaklaşık 6 kalori yakarken yağ sadece 2 kalori yakar. 150 lbs yağsız kütle ve 30 lbs yağa sahip bir birey, aynı toplam kiloda 120 lbs yağsız kütle ve 60 lbs yağa sahip birinden çok daha fazla yakar. Olağanüstü kas kütlesine sahip sporcular ve vücut geliştiriciler, formüllerin tahmin ettiğinden 300-500 kalori daha yüksek TDEE\'ye sahip olabilir. Etnik köken metabolizmayı mütevazı bir şekilde etkiler—bazı çalışmalar Asya popülasyonlarının aynı boyuttaki Kafkas popülasyonlarından %3-5 daha düşük BMR\'ye sahip olabileceğini öne sürer, ancak bu tartışmalıdır ve bireyler büyük ölçüde değişir. Boy TDEE\'yi etkiler çünkü daha uzun bireyler daha fazla vücut yüzey alanına ve genellikle desteklemek için daha fazla kütleye sahiptir. Genetik, mitokondriyal verimlilik, kıpırdanma eğilimleri (NEAT), hormonlar ve kahverengi yağ aktivitesindeki farklılıklar yoluyla bireyler arasındaki metabolizma hızı varyasyonunun yaklaşık %20-30\'unu oluşturur. Tıbbi durumlar TDEE\'yi önemli ölçüde etkiler—hipotiroidizm metabolizmayı %10-40 oranında düşürebilirken hipertiroidizm onu önemli ölçüde yükseltir. PCOS, insülin direnci ve metabolik sendrom tipik olarak metabolizma hızını azaltır. Beta-blokerler, antidepresanlar ve kortikosteroidler dahil ilaçlar TDEE\'yi düşürebilir. Son olarak, diyet geçmişi metabolizmayı etkiler—kapsamlı yo-yo diyet geçmişi olanlar genellikle adaptif termogenez nedeniyle bastırılmış metabolik hızlara sahiptir.',

    medicalDisclaimer:
      'Bu TDEE hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlı tahminler sağlar ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini almamalıdır. TDEE hesaplamaları popülasyon tabanlı tahminlerdir ve genetik, hormonlar, tıbbi durumlar, ilaçlar ve diğer faktörler nedeniyle tahminlerden %10-20 oranında değişebilen bireysel metabolizmanızı doğru bir şekilde yansıtmayabilir. Sonuçlar, kesin reçeteler değil, kalori planlaması için başlangıç noktaları olarak hizmet etmelidir. Herhangi bir diyete, kilo verme programına, egzersiz rejimine veya önemli kalori kısıtlamasına başlamadan önce doktorlar, diyetisyenler veya beslenme uzmanları dahil kalifiye sağlık profesyonelleri ile görüşün. Bu, diyabet, kalp hastalığı, yeme bozuklukları, hormonal dengesizlikler, metabolik bozukluklar gibi tıbbi durumlarınız varsa veya metabolizmayı veya iştahı etkileyen ilaçlar alıyorsanız özellikle kritiktir. Hamile veya emziren kadınlar özel kalori hesaplamaları gerektirir ve tıbbi rehberlik olmadan standart TDEE formüllerini kullanmamalıdır. 18 yaşın altındaki bireyler büyüme nedeniyle farklı enerji ihtiyaçlarına sahiptir ve pediatrik beslenme uzmanlarına danışmalıdır. Çok düşük kalorili diyetler (kadınlar için 1.200 veya erkekler için 1.500\'ün altında) yetersiz beslenme, kas kaybı, hormonal bozulma ve organ hasarı dahil ciddi sağlık riskleri nedeniyle asla tıbbi gözetim olmadan yapılmamalıdır. Yeme bozukluğu geçmişi olanlar, kalori sayımı düzensiz yeme kalıplarını tetikleyebileceğinden ruh sağlığı ve beslenme profesyonellerinden rehberlik almadan kalori hesaplayıcıları kullanmamalıdır. Yalnızca TDEE hesaplayıcı sonuçlarına dayanarak asla tıbbi kararlar almayın veya takviyeler, ilaçlar veya aşırı diyet değişiklikleri başlatmayın. Bireysel sağlık değerlendirmesi, çevrimiçi hesaplayıcıların sağlayamayacağı tıbbi geçmiş, laboratuvar çalışması, vücut kompozisyonu, yaşam tarzı faktörleri ve genel sağlık durumunun kapsamlı değerlendirmesini gerektirir.',

    references: [
      'Mifflin MD, St Jeor ST, Hill LA, ve ark. Sağlıklı bireylerde dinlenme enerji harcaması için yeni bir tahmin denklemi. Am J Clin Nutr. 1990;51(2):241-247.',
      'Frankenfield D, Roth-Yousey L, Compher C. Sağlıklı obez olmayan ve obez yetişkinlerde dinlenme metabolizma hızı için tahmin denklemlerinin karşılaştırması: sistematik bir inceleme. J Am Diet Assoc. 2005;105(5):775-789.',
      'Dünya Sağlık Örgütü. İnsan enerji gereksinimleri: Ortak FAO/WHO/UNU Uzman Konsültasyonu Raporu. Gıda ve Beslenme Teknik Rapor Serisi. 2001.',
      'Hall KD, Heymsfield SB, Kemnitz JW, ve ark. Enerji dengesi ve bileşenleri: vücut ağırlığı düzenlemesi için etkiler. Am J Clin Nutr. 2012;95(4):989-994.',
      'Trexler ET, Smith-Ryan AE, Norton LE. Kilo kaybına metabolik adaptasyon: sporcu için etkiler. J Int Soc Sports Nutr. 2014;11(1):7.',
      'Rosenbaum M, Leibel RL. İnsanlarda adaptif termogenez. Int J Obes. 2010;34(Suppl 1):S47-S55.',
      'Levine JA. Egzersiz dışı aktivite termogenezi (NEAT). Best Pract Res Clin Endocrinol Metab. 2002;16(4):679-702.',
      'Beslenme ve Diyetetik Akademisi. Yetişkin Kilo Yönetimi Kanıta Dayalı Beslenme Uygulama Kılavuzu. 2016.',
    ],

    tips: [
      'TDEE\'yi bir başlangıç noktası olarak kullanın, ardından 2-4 haftalık tutarlı takipten sonra gerçek dünya sonuçlarına göre ayarlayın',
      'Kendinizi her gün aynı saatte (tercihen sabah tuvaletten sonra, yemekten önce) tartın ve trendleri izlemek için haftalık ortalamaları kullanın',
      'Çoğu insan aktivite seviyesini fazla tahmin eder—kategori seçerken dürüst olun, çünkü hareketsiz veya hafif aktif çoğu ofis çalışanı için geçerlidir',
      'Her 2-5 kg kilo değişiminde TDEE\'yi yeniden hesaplayın, çünkü kilo kaybettikçe kalori ihtiyaçlarınız azalır',
      'Kas kütlesini korurken sürdürülebilir yağ kaybı için orta düzeyde kalori açıklarını (TDEE\'nin 300-500 altı) hedefleyin',
      'Kalori açıkları sırasında kas kütlesini korumak için protein alımına öncelik verin (vücut ağırlığının pound başına 0.7-1g)',
      'Kilo kaybı sırasında kasları korumak ve fazlalıklarda kas oluşturmak için haftada 2-4 kez direnç antrenmanı yapın',
      'Temel alışkanlıkları oluşturmak için en az 2-4 hafta MyFitnessPal gibi bir gıda terazisi ve uygulama kullanarak gıda alımını doğru bir şekilde takip edin',
      'Hormonları ve metabolizmayı restore etmek için uzun süreli diyet sırasında her 8-12 haftada bir diyet molaları (bakım TDEE\'sinde yemek) ekleyin',
      'Sadece herhangi bir gıdayla kalori hedeflerine ulaşmak yerine tokluk ve beslenme sağlayan tam, minimum işlenmiş gıdalara odaklanın',
    ],

    faqs: [
      {
        question: 'BMR ve TDEE arasındaki fark nedir?',
        answer:
          'BMR (Bazal Metabolizma Hızı), vücudunuzun nefes alma, dolaşım ve hücre üretimi gibi hayati fonksiyonları sürdürmek için tam dinlenme halinde yaktığı kalori sayısıdır—temelde bütün gün hiçbir şey yapmasanız hayatta kalmak için gereken enerjidir. TDEE (Toplam Günlük Enerji Harcaması), BMR\'nizin tüm hareket, egzersiz, sindirim ve günlük aktiviteleri hesaba katan bir aktivite faktörü ile çarpılmasıdır. Örneğin, BMR\'niz 1.500 kalori ise ve orta düzeyde aktifseniz (aktivite faktörü 1.55), TDEE\'niz 2.325 kaloridir. TDEE, tam günlük kalori yakımınızı temsil eder ve öğün planlaması için kullandığınız sayıdır.',
      },
      {
        question: 'TDEE hesaplayıcıları ne kadar doğrudur?',
        answer:
          'TDEE hesaplayıcıları çoğu insan için yaklaşık %10-15 içinde doğru olan tahminler sağlar. Bireysel metabolizma hızı, standart denklemlerde yakalanmayan genetik, vücut kompozisyonu, hormonlar ve diğer faktörler nedeniyle değişebilir. Çoğu hesaplayıcı tarafından kullanılan Mifflin-St Jeor denklemi, genel popülasyon için en doğru formül olarak kabul edilir. Ancak, TDEE mutlak bir sayı değil, bir başlangıç noktası olarak ele alınmalıdır. Kalori ve kilonuzu 2-4 hafta takip edin, ardından sonuçlara göre ayarlayın. Hesaplanan bir açıkta kilo vermiyorsanız, kalorileri 100-200 azaltın ve yeniden değerlendirin.',
      },
      {
        question: 'Egzersiz sırasında yakılan kalorileri geri yemeli miyim?',
        answer:
          'Bu, TDEE\'nizi nasıl hesapladığınıza bağlıdır. Aktivite seviyesi çarpanınıza düzenli egzersiz dahil ettiyseniz, egzersiz kalorileri TDEE\'nizde zaten hesaba katılmıştır ve onları geri YEMEMELİSİNİZ. Ancak, TDEE\'yi hareketsiz aktivite kullanarak hesapladıysanız, egzersiz kalori lerinin %50-75\'ini geri yiyebilirsiniz (%100 değil, çünkü kalori yakma tahminleri genellikle şişirilir). Tutarlılık ve basitlik için, egzersizi ayrı olarak geri eklemek yerine düzenli egzersizi TDEE hesaplamanıza dahil etmek genellikle önerilir. Bu, antrenman günlerine göre alımı değiştirmek yerine sabit bir günlük kalori hedefi sağlar.',
      },
      {
        question: 'TDEE\'min altında yediğim halde neden kilo vermiyorum?',
        answer:
          'Platolara birkaç faktör açıklama getirir: (1) Yanlış kalori takibi—çalışmalar insanların alımları %20-50 oranında eksik tahmin ettiğini gösterir, özellikle yağlar, çeşniler ve atıştırmalıklar için. Gıda terazisi kullanın. (2) TDEE\'niz azaldı—kilo kaybettikçe vücudunuz daha az kaloriye ihtiyaç duyar, bu yüzden her 2-5 kg\'da yeniden hesaplayın. (3) Metabolik adaptasyon—uzun süreli diyet, metabolizma hızını sadece kilo kaybının tahmin ettiğinin ötesinde düşürür. Bakım kalorilerinde 1-2 hafta diyet molası verin. (4) Su tutma—stres, sodyum, egzersiz, adet döngüsü ve iltihaplanma, terazide yağ kaybını maskeleyen su dalgalanmalarına neden olur. Trendleri 3-4 hafta boyunca takip edin. (5) Aslında açıkta değilsiniz—TDEE hesaplamanızın doğru olduğundan emin olun ve 3 hafta sonra ilerleme yoksa kalorileri 100-200 azaltmayı düşünün.',
      },
      {
        question: 'Ne kadar hızlı kilo vermeliyim?',
        answer:
          'Çoğu insan için, sürdürülebilir yağ kaybı vücut ağırlığının haftada %0.5-1\'idir. Bu genellikle çoğu birey için haftada 0.5-1 kg (1-2 lbs) anlamına gelir ve TDEE\'nin 300-750 kalori altında bir açıkla elde edilir. Daha hızlı kayıp, kas kaybı, metabolik yavaşlama ve sürdürülebilirlik eksikliği riskini beraberinde getirir. Önemli obezitesi olan bireyler (BMI > 35) başlangıçta daha hızlı güvenli bir şekilde kilo verebilir. Haftada 0.25 kg (0.5 lbs)\'nin altında çok yavaş kayıp çok küçük bir açığı gösterir. Yüksek protein alımını koruyarak (vücut ağırlığının pound başına 0.7-1g), haftada 2-4 kez direnç antrenmanı yaparak ve 1.000 kalorinin üzerinde aşırı açıklardan kaçınarak kasları korumaya öncelik verin. Kilo kaybı doğrusal değildir—platolar, su dalgalanmaları ve varyasyon bekleyin.',
      },
      {
        question: 'Yağ kaybederken kas kazanabilir miyim?',
        answer:
          'Evet, ancak zordur ve bağlama bağlıdır. "Vücut rekomposizyonu" (eşzamanlı yağ kaybı ve kas kazanımı) şunlar için en uygulanabilir: (1) Antrenman geçmişi olmayan yeni başlayanlar—eğitimsiz bireyler kalori açıklarında bile kolayca kas inşa eder. (2) Bir moladan sonra dönenler—kas hafızası yeniden büyümeyi hızlandırır. (3) Yüksek vücut yağına sahip bireyler (erkekler için %20+, kadınlar için %30+)—fazla yağ kas oluşturma için enerji sağlar. Rekomposizyon için, küçük bir açık koruyun (TDEE\'nin 200-300 kalori altı), proteine öncelik verin (vücut ağırlığının pound başına 0.8-1g) ve haftada 3-5 kez ilerleyici direnç antrenmanı yapın. Düşük vücut yağında ileri düzey kaldırıcılar genellikle açıklarda önemli kas inşa edemez ve yağ kaybı fazları (kesme) veya kas kazanım fazları (toplu) arasında seçim yapmalıdır.',
      },
      {
        question: 'Dinlenme günlerinde TDEE\'mi ayarlamalı mıyım?',
        answer:
          'Yaklaşımınıza bağlıdır. TDEE hesaplamanıza haftalık ortalama egzersizi dahil ettiyseniz, basitlik için kalorileri her gün tutarlı tutun—vücudunuz 24 saatlik döngülerle çalışmaz ve toparlanma günleri hala dokuyu yeniden inşa ederken önemli enerji yakar. Bu yaklaşım (her gün aynı kaloriler) takip etmesi daha kolay ve antrenman günlerinde aşırı yemek veya dinlenme günlerinde yetersiz yemek önler. Alternatif olarak, kalori döngüsü aktiviteye göre alımı ayarlar—antrenman günlerinde daha yüksek kaloriler, dinlenme günlerinde daha düşük, aynı haftalık toplam ile. Bu, bazı insanların antrenmanlar için daha enerjik hissetmelerine yardımcı olabilir ancak karmaşıklık ekler. Çoğu insan için, haftalık ortalama aktiviteye dayalı tutarlı günlük kaloriler daha basit ve eşit derecede etkilidir.',
      },
    ],
  },
};
