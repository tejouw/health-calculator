import { CalculatorContent } from '@/types/calculator';

export const proteinContent: CalculatorContent = {
  en: {
    whatIs:
      'Protein is an essential macronutrient composed of amino acids, serving as the building blocks for muscles, bones, skin, enzymes, hormones, and virtually every tissue in the human body. The daily protein requirement varies significantly based on body weight, activity level, fitness goals, age, and overall health status. The Recommended Dietary Allowance (RDA) established by the Food and Nutrition Board suggests a minimum of 0.8 grams of protein per kilogram of body weight (0.36 g/lb) for sedentary adults to prevent deficiency. However, research increasingly shows that this baseline is insufficient for active individuals, athletes, elderly adults, or those with specific health goals like muscle building or weight loss. Optimal protein intake can range from 1.2 to 2.2 g/kg (0.54 to 1.0 g/lb) depending on individual circumstances. This protein calculator helps determine personalized daily protein needs by considering weight, physical activity patterns, and fitness objectives, providing science-based recommendations aligned with current nutritional guidelines from organizations like the International Society of Sports Nutrition (ISSN) and the American College of Sports Medicine (ACSM).',

    howToCalculate:
      'Calculating your daily protein requirement involves several factors: body weight, activity level, and fitness goals. Start with your body weight in kilograms (divide pounds by 2.2 if using imperial units). The baseline calculation uses 0.8 g/kg for sedentary individuals as the minimum requirement. For lightly active people (light exercise 1-3 days/week), multiply body weight by 1.0-1.2 g/kg. Moderately active individuals (exercise 3-5 days/week) should aim for 1.2-1.6 g/kg. Very active people (intense exercise 6-7 days/week) need 1.6-2.0 g/kg. Athletes and bodybuilders may require 2.0-2.4 g/kg. Fitness goals further modify these numbers: those trying to lose weight while preserving muscle should aim for the higher end of their activity range (1.6-2.2 g/kg), as protein has a high thermic effect and promotes satiety. People focused on muscle gain should consume 1.6-2.4 g/kg combined with resistance training. For example, a 70 kg (154 lb) moderately active person aiming to maintain weight would calculate: 70 kg × 1.4 g/kg = 98 grams of protein daily. The same person trying to build muscle might calculate: 70 kg × 2.0 g/kg = 140 grams daily.',

    formulaDetails:
      'The protein calculation formula adapts the baseline RDA (0.8 g/kg) using activity and goal multipliers derived from sports nutrition research. The formula is: Daily Protein (g) = Body Weight (kg) × Activity Factor × Goal Factor. Activity factors range from 0.8 (sedentary) to 1.8 (extremely active), reflecting increased protein turnover and repair needs with higher physical activity. Goal factors adjust for specific objectives: 1.0 for weight maintenance, 1.2 for fat loss (higher protein preserves lean mass during caloric restriction), and 1.3 for muscle gain (supports muscle protein synthesis). For a 75 kg individual who is very active and wants to build muscle: 75 × 1.5 (activity) × 1.3 (goal) = 146 grams daily. The calculator also provides a recommended range (typically ±10%) to account for day-to-day variation and individual differences in protein utilization. Protein timing matters too: distributing intake evenly across 3-4 meals maximizes muscle protein synthesis, with 20-40 grams per meal being optimal for most adults. Post-workout protein consumption (within 2 hours) is particularly important for muscle recovery and growth. The calculator breaks down daily protein into meal portions (typically 30% breakfast, 35% lunch, 30% dinner, 5% snacks) to help users plan their daily intake effectively. This approach is based on research showing that protein should be consumed throughout the day rather than concentrated in one or two meals.',

    categories: [
      {
        range: '< 0.8 g/kg',
        label: 'Below Recommended',
        description:
          'Protein intake below the RDA minimum. May lead to muscle loss, weakened immune function, slow wound healing, and inadequate enzyme/hormone production. Increase protein-rich foods immediately.',
        color: '#EF4444',
      },
      {
        range: '0.8 - 1.2 g/kg',
        label: 'RDA Baseline',
        description:
          'Meets minimum requirements for sedentary adults to prevent deficiency. Adequate for basic health but may be insufficient for active individuals, athletes, elderly, or those with fitness goals.',
        color: '#F59E0B',
      },
      {
        range: '1.2 - 1.6 g/kg',
        label: 'Active Lifestyle',
        description:
          'Optimal range for moderately active individuals. Supports muscle maintenance, immune function, and daily physical activity. Good for general fitness and health maintenance.',
        color: '#10B981',
      },
      {
        range: '1.6 - 2.2 g/kg',
        label: 'Athletic / Muscle Building',
        description:
          'Recommended for serious athletes, bodybuilders, or those in intense training. Maximizes muscle protein synthesis, supports recovery, and helps achieve body composition goals.',
        color: '#3B82F6',
      },
      {
        range: '> 2.2 g/kg',
        label: 'Very High Intake',
        description:
          'Extremely high protein intake typically used by professional athletes or during aggressive muscle-building phases. Generally safe for healthy individuals but ensure adequate hydration and monitor kidney function long-term.',
        color: '#8B5CF6',
      },
    ],

    interpretation:
      'Your protein requirement depends on multiple factors beyond just body weight. Activity level is crucial: resistance training and endurance exercise both increase protein needs due to muscle damage and repair processes. Fitness goals significantly impact requirements: weight loss with muscle preservation demands higher protein (1.6-2.4 g/kg) because it promotes satiety, has a high thermic effect (20-30% of calories burned during digestion), and prevents muscle loss during caloric deficit. Muscle gain requires 1.6-2.4 g/kg combined with progressive resistance training and caloric surplus. Age matters too: elderly individuals (65+) need 1.0-1.2 g/kg minimum to combat sarcopenia (age-related muscle loss). Protein quality is important: complete proteins containing all nine essential amino acids (meat, fish, eggs, dairy, soy) are superior to incomplete proteins (most plant sources). However, combining complementary plant proteins (rice + beans, hummus + pita) creates complete amino acid profiles. Protein timing affects utilization: consuming 20-40g every 3-4 hours throughout the day maximizes muscle protein synthesis better than eating all protein in one meal. The "anabolic window" post-workout (once thought to be 30 minutes) is actually 2-3 hours, giving flexibility for protein consumption after exercise.',

    limitations:
      'While protein calculators provide useful estimates, they have important limitations. First, they cannot account for individual metabolic differences. Some people have higher protein turnover rates due to genetics, medical conditions, or medications. Second, protein requirements vary with total caloric intake. During severe caloric restriction, protein needs increase to preserve lean mass. Third, the calculator does not consider protein quality or digestibility. Animal proteins have higher biological value (85-100%) compared to plant proteins (50-80%), meaning you may need more plant protein to achieve the same benefits. Fourth, medical conditions significantly alter needs: kidney disease requires protein restriction, while recovery from surgery, burns, or illness increases requirements substantially. Fifth, pregnancy and lactation increase protein needs by 25-30g daily, which basic calculators may not fully account for. Sixth, protein absorption capacity varies: most adults can effectively utilize 20-40g per meal; consuming 100g in one sitting does not provide proportional benefits. Seventh, the calculator assumes adequate total caloric intake; protein needs increase if calories are insufficient. Eighth, it does not consider micronutrient needs: focusing solely on protein quantity while ignoring diet quality (vitamins, minerals, fiber) leads to nutritional imbalances. Finally, very high protein diets (>2.5 g/kg) may cause digestive issues, nutrient displacement (not eating enough carbs/fats), and theoretical kidney stress in predisposed individuals, though research shows healthy kidneys handle high protein without issue.',

    healthRisks:
      'Both inadequate and excessive protein intake carry health implications. Protein deficiency (rare in developed countries) causes muscle wasting, weakened immunity, edema, slow wound healing, hair loss, and in severe cases, kwashiorkor. More commonly, insufficient protein during weight loss leads to muscle loss, decreased metabolic rate, and weight regain. Inadequate protein in elderly populations accelerates sarcopenia and frailty. For athletes, insufficient protein impairs recovery, increases injury risk, and prevents performance improvements. On the other end, excessively high protein intake (>3 g/kg sustained long-term) may cause issues in susceptible individuals: digestive problems (constipation, bloating), nutrient displacement (inadequate carbohydrate/fat intake), calcium loss (controversial, newer research suggests minimal effect), and theoretical kidney strain in those with pre-existing kidney disease (though healthy kidneys handle high protein without problems). The "protein damages kidneys" myth stems from confusing cause and effect: kidney disease requires protein restriction, but protein does not cause kidney disease in healthy individuals. However, those with undiagnosed kidney issues should consult physicians before high-protein diets. Dehydration is a concern with very high protein because nitrogen excretion requires water; aim for 3-4 liters daily at >2 g/kg intake. Some studies suggest high red meat consumption (a common protein source) correlates with certain health risks, but this is likely due to processed meats and cooking methods rather than protein itself. Balanced protein sources (fish, poultry, eggs, dairy, legumes, lean meats) minimize these risks.',

    alternativeMeasures:
      'Beyond total protein quantity, several factors influence protein adequacy and effectiveness. Protein quality is measured by biological value (BV), protein digestibility-corrected amino acid score (PDCAAS), and the newer Digestible Indispensable Amino Acid Score (DIAAS). Eggs score highest (DIAAS 113), followed by dairy (109), beef (111), and soy (91). Plant proteins score lower: wheat (40), rice (59), peas (64). Leucine content specifically matters for muscle protein synthesis: aim for 2-3g leucine per meal (found in 30-40g of high-quality protein). Protein timing affects outcomes: "protein pulse feeding" (one large dose) versus "protein spreading" (distributed across meals) shows spreading produces better muscle protein synthesis in most populations. Protein per meal matters: 20-40g per meal maximizes synthesis, with diminishing returns beyond 40g for most people (though larger individuals may utilize more). Essential amino acid (EAA) content is critical: the body needs all nine EAAs in specific ratios. Branched-chain amino acids (BCAAs)—leucine, isoleucine, valine—are particularly important for muscle. Protein efficiency ratio (PER) measures weight gain per gram of protein consumed. Nitrogen balance studies assess whether protein intake matches protein breakdown. Body composition measurements (DEXA, BIA) track lean mass changes more accurately than weight alone. Performance metrics (strength gains, recovery time, athletic performance) provide functional assessment of protein adequacy.',

    demographicDifferences:
      'Protein requirements vary significantly across demographic groups. Age is a critical factor: children and adolescents need 0.95-1.2 g/kg for growth and development. Young adults (18-40) doing minimal exercise need 0.8-1.0 g/kg. Active young adults require 1.2-2.0 g/kg depending on training. Middle-aged adults (40-65) benefit from 1.0-1.2 g/kg to offset gradual muscle loss. Elderly individuals (65+) need higher protein (1.0-1.5 g/kg) to combat sarcopenia, maintain bone density, support immune function, and promote wound healing. Pregnancy increases protein needs by 25g/day (1.1 g/kg minimum), with highest requirements in the third trimester. Lactation requires an additional 25-30g daily above baseline. Gender influences requirements slightly: males typically need marginally more due to higher muscle mass, though recommendations are usually the same per kilogram of body weight. Athletes have vastly different needs: endurance athletes need 1.2-1.6 g/kg to repair oxidative damage and maintain lean mass. Strength/power athletes require 1.6-2.4 g/kg to support muscle growth. Body composition matters: protein recommendations should ideally be based on lean body mass rather than total weight for obese individuals to avoid overestimation. Medical conditions alter needs: diabetes may benefit from higher protein to manage blood sugar; liver disease may require restriction; kidney disease definitely requires medical supervision of protein intake. Post-surgery, burn victims, and those recovering from illness have elevated requirements (1.5-2.5 g/kg) for tissue repair.',

    medicalDisclaimer:
      'This protein calculator is designed for educational and informational purposes only and should not replace professional medical, nutritional, or dietary advice. Protein requirements are highly individual and depend on numerous factors including age, gender, body composition, medical history, medications, and specific health conditions that this calculator cannot assess. Results provided are general estimates based on population averages and may not be appropriate for your individual circumstances. Individuals with kidney disease, liver disease, diabetes, gout, or other medical conditions should consult physicians or registered dietitians before significantly changing protein intake. Pregnant or breastfeeding women, children, adolescents, and elderly individuals have unique requirements requiring professional guidance. This calculator does not account for specific dietary restrictions, food allergies, digestive disorders, or metabolic conditions affecting protein needs or utilization. Never make significant dietary changes, begin supplementation, or alter medical nutrition therapy based solely on calculator results without consulting qualified healthcare professionals (physician, registered dietitian, certified nutritionist). If you experience adverse symptoms from dietary changes, seek immediate medical attention. The calculator provides estimated ranges, not precise prescriptions; actual needs may vary by ±20% or more based on individual factors.',

    references: [
      'Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. National Academies Press, 2005.',
      'Jäger R, Kerksick CM, Campbell BI, et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.',
      'Phillips SM, Chevalier S, Leidy HJ. Protein "requirements" beyond the RDA: implications for optimizing health. Appl Physiol Nutr Metab. 2016;41(5):565-572.',
      'Morton RW, Murphy KT, McKellar SR, et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength in healthy adults. Br J Sports Med. 2018;52(6):376-384.',
      'Bauer J, Biolo G, Cederholm T, et al. Evidence-based recommendations for optimal dietary protein intake in older people. J Am Med Dir Assoc. 2013;14(8):542-559.',
      'Pasiakos SM, McLellan TM, Lieberman HR. The effects of protein supplements on muscle mass, strength, and aerobic and anaerobic power in healthy adults. Sports Med. 2015;45(1):111-131.',
      'Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? Implications for daily protein distribution. J Int Soc Sports Nutr. 2018;15:10.',
    ],

    tips: [
      'Distribute protein evenly across 3-4 meals (20-40g per meal) for optimal muscle protein synthesis throughout the day',
      'Consume protein within 2-3 hours after resistance training to maximize muscle recovery and growth',
      'Choose high-quality complete protein sources: lean meats, fish, eggs, dairy, soy, and quinoa',
      'Combine complementary plant proteins (rice + beans, hummus + whole grain) to create complete amino acid profiles if following plant-based diet',
      'Aim for 2-3g of leucine per meal (found in 30-40g of high-quality protein) to trigger muscle protein synthesis',
      'Increase protein intake to 1.6-2.4 g/kg during weight loss to preserve muscle mass and increase satiety',
      'Elderly individuals should aim for 1.0-1.5 g/kg minimum to prevent sarcopenia and maintain functional capacity',
      'Stay well-hydrated (3-4 liters daily) when consuming high protein (>2 g/kg) to support kidney function and nitrogen excretion',
      'Track both total daily protein and per-meal distribution for best results; protein spreading beats protein pulsing for most people',
      'Consider protein powder supplements (whey, casein, plant-based) if whole food sources are insufficient or inconvenient, but prioritize real foods first',
    ],

    faqs: [
      {
        question: 'How much protein do I need daily?',
        answer:
          'Daily protein needs vary based on weight, activity level, and goals. Sedentary adults need minimum 0.8 g/kg (0.36 g/lb) body weight. Moderately active individuals should aim for 1.2-1.6 g/kg. Athletes and those building muscle need 1.6-2.4 g/kg. For example, a 70 kg (154 lb) moderately active person needs approximately 84-112 grams daily. Those trying to lose weight while preserving muscle should aim for the higher end of their range. Use this calculator to get personalized recommendations based on your specific circumstances.',
      },
      {
        question: 'Can I eat too much protein?',
        answer:
          'For healthy individuals, very high protein intake (even 2-3 g/kg) is generally safe. Concerns about protein damaging kidneys apply only to people with pre-existing kidney disease; healthy kidneys handle high protein without issues. However, extremely high protein (>3 g/kg long-term) may cause digestive discomfort, nutrient displacement (not eating enough carbs/fats), and requires increased water intake. Balance is key: getting adequate protein is important, but extreme amounts provide no additional benefits and may create imbalances. Most people thrive on 1.6-2.2 g/kg when active.',
      },
      {
        question: 'What are the best sources of protein?',
        answer:
          'High-quality complete protein sources include: lean meats (chicken, turkey), fish (salmon, tuna), eggs (the gold standard), dairy (Greek yogurt, cottage cheese, milk), and soy products (tofu, tempeh, edamame). For plant-based diets, combine complementary proteins: rice + beans, hummus + pita, peanut butter + whole grain bread. Protein powder supplements (whey, casein, pea, rice) are convenient but should not replace whole foods entirely. Aim for variety to ensure adequate intake of all essential amino acids and accompanying nutrients.',
      },
      {
        question: 'When is the best time to eat protein?',
        answer:
          'Protein timing matters for optimizing muscle protein synthesis. Distribute intake evenly across 3-4 meals rather than loading it all at once: aim for 20-40g per meal. The post-workout "anabolic window" is actually 2-3 hours, not the once-believed 30 minutes, so consuming protein within a few hours of training is beneficial. Before bed protein (especially slow-digesting casein) can support overnight muscle recovery. However, total daily protein intake is more important than exact timing. If you can only focus on one factor, prioritize meeting your daily protein target first, then optimize timing second.',
      },
      {
        question: 'Do I need protein powder or supplements?',
        answer:
          'Protein powder is a convenient supplement but not necessary if you meet your daily target through whole foods. It is useful when: you struggle to eat enough protein from food alone, you need quick post-workout nutrition, you are on-the-go frequently, or you are on a restricted diet (vegan, vegetarian, food allergies). Whey protein digests quickly (ideal post-workout), casein digests slowly (good before bed), and plant-based options (pea, rice, hemp) work for vegans. Whole foods provide additional nutrients (vitamins, minerals, fiber) that supplements lack, so prioritize real food and use supplements to "fill gaps" rather than as primary protein sources.',
      },
      {
        question: 'Does protein help with weight loss?',
        answer:
          'Yes, higher protein intake significantly aids weight loss through multiple mechanisms. Protein has a high thermic effect (20-30% of protein calories burned during digestion vs. 5-10% for carbs/fats). It increases satiety and reduces hunger hormones, helping you eat fewer calories naturally. Most importantly, adequate protein (1.6-2.4 g/kg) during caloric deficit preserves lean muscle mass, ensuring weight loss comes from fat rather than muscle. This maintains metabolic rate and prevents the common "yo-yo" effect. Combine higher protein with resistance training and moderate caloric deficit for optimal body composition results. Research shows high-protein diets consistently outperform low-protein diets for fat loss and muscle preservation.',
      },
      {
        question: 'How much protein per meal is optimal?',
        answer:
          'Research suggests 20-40 grams of high-quality protein per meal optimally stimulates muscle protein synthesis in most adults. Specifically, aim for 2-3 grams of leucine per meal (found in 30-40g of complete protein), which triggers the anabolic response. More than 40g per meal provides diminishing returns for muscle building, though larger individuals (100+ kg) may effectively utilize more. Spreading protein across 3-4 meals throughout the day produces better results than eating all protein in one or two meals. For example, if you need 140g daily, aim for 30-40g at breakfast, lunch, and dinner, with a small protein-containing snack. This approach maintains elevated muscle protein synthesis throughout the day rather than in just one or two windows.',
      },
    ],
  },
  tr: {
    whatIs:
      'Protein, amino asitlerden oluşan ve kaslar, kemikler, cilt, enzimler, hormonlar ve insan vücudundaki hemen hemen her doku için yapı taşları görevi gören temel bir makro besindir. Günlük protein gereksinimi, vücut ağırlığı, aktivite düzeyi, fitness hedefleri, yaş ve genel sağlık durumuna göre önemli ölçüde değişir. Gıda ve Beslenme Kurulu tarafından belirlenen Önerilen Günlük Alım Miktarı (RDA), hareketsiz yetişkinlerin eksikliği önlemek için kilogram başına minimum 0.8 gram protein (0.36 g/lb) önermektedir. Ancak araştırmalar, bu temel seviyenin aktif bireyler, sporcular, yaşlı yetişkinler veya kas yapımı veya kilo kaybı gibi belirli sağlık hedefleri olanlar için yetersiz olduğunu giderek daha fazla göstermektedir. Optimal protein alımı, bireysel koşullara bağlı olarak 1.2 ila 2.2 g/kg (0.54 ila 1.0 g/lb) arasında değişebilir. Bu protein hesaplayıcı, kilo, fiziksel aktivite kalıpları ve fitness hedeflerini dikkate alarak kişiselleştirilmiş günlük protein ihtiyaçlarını belirlemeye yardımcı olur ve Uluslararası Spor Beslenmesi Derneği (ISSN) ve Amerikan Spor Hekimliği Koleji (ACSM) gibi kuruluşların mevcut beslenme yönergeleriyle uyumlu bilime dayalı öneriler sunar.',

    howToCalculate:
      'Günlük protein gereksiniminizi hesaplamak birkaç faktörü içerir: vücut ağırlığı, aktivite düzeyi ve fitness hedefleri. Kilogram cinsinden vücut ağırlığınızla başlayın (İngiliz birimlerini kullanıyorsanız pound\'u 2.2\'ye bölün). Temel hesaplama, hareketsiz bireyler için minimum gereksinim olarak 0.8 g/kg kullanır. Hafif aktif insanlar için (haftada 1-3 gün hafif egzersiz), vücut ağırlığını 1.0-1.2 g/kg ile çarpın. Orta derecede aktif bireyler (haftada 3-5 gün egzersiz) 1.2-1.6 g/kg hedeflemelidir. Çok aktif insanlar (haftada 6-7 gün yoğun egzersiz) 1.6-2.0 g/kg\'a ihtiyaç duyar. Sporcular ve vücut geliştiriciler 2.0-2.4 g/kg gerektirebilir. Fitness hedefleri bu sayıları daha da değiştirir: kaslarını korurken kilo vermeye çalışanlar aktivite aralıklarının üst ucunu (1.6-2.2 g/kg) hedeflemelidir, çünkü protein yüksek termik etkiye sahiptir ve tokluk hissi sağlar. Kas kazanımına odaklanan insanlar, direnç antrenmanıyla birlikte 1.6-2.4 g/kg tüketmelidir. Örneğin, kilosunu korumayı hedefleyen 70 kg (154 lb) orta derecede aktif bir kişi şöyle hesaplar: 70 kg × 1.4 g/kg = günde 98 gram protein. Kas yapmaya çalışan aynı kişi şöyle hesaplayabilir: 70 kg × 2.0 g/kg = günde 140 gram.',

    formulaDetails:
      'Protein hesaplama formülü, spor beslenmesi araştırmalarından türetilen aktivite ve hedef çarpanlarını kullanarak temel RDA\'yı (0.8 g/kg) uyarlar. Formül şudur: Günlük Protein (g) = Vücut Ağırlığı (kg) × Aktivite Faktörü × Hedef Faktörü. Aktivite faktörleri, daha yüksek fiziksel aktiviteyle artan protein döngüsü ve onarım ihtiyaçlarını yansıtan 0.8 (hareketsiz) ile 1.8 (son derece aktif) arasında değişir. Hedef faktörleri belirli amaçlar için ayarlanır: kilo koruma için 1.0, yağ kaybı için 1.2 (daha yüksek protein, kalorik kısıtlama sırasında yağsız kütleyi korur) ve kas kazanımı için 1.3 (kas protein sentezini destekler). Çok aktif ve kas yapmak isteyen 75 kg\'lık bir birey için: 75 × 1.5 (aktivite) × 1.3 (hedef) = günde 146 gram. Hesaplayıcı ayrıca, günlük değişkenlik ve protein kullanımındaki bireysel farklılıkları hesaba katmak için önerilen bir aralık (tipik olarak ±%10) sağlar. Protein zamanlaması da önemlidir: alımı 3-4 öğün arasında eşit şekilde dağıtmak, kas protein sentezini maksimize eder ve çoğu yetişkin için öğün başına 20-40 gram optimal olur. Antrenman sonrası protein tüketimi (2 saat içinde) kas toparlanması ve büyümesi için özellikle önemlidir.',

    categories: [
      {
        range: '< 0.8 g/kg',
        label: 'Önerilenden Düşük',
        description:
          'RDA minimumunun altında protein alımı. Kas kaybına, zayıflamış bağışıklık fonksiyonuna, yavaş yara iyileşmesine ve yetersiz enzim/hormon üretimine yol açabilir. Protein açısından zengin gıdaları hemen artırın.',
        color: '#EF4444',
      },
      {
        range: '0.8 - 1.2 g/kg',
        label: 'RDA Temeli',
        description:
          'Hareketsiz yetişkinlerin eksikliği önlemek için minimum gereksinimlerini karşılar. Temel sağlık için yeterli ancak aktif bireyler, sporcular, yaşlılar veya fitness hedefleri olanlar için yetersiz olabilir.',
        color: '#F59E0B',
      },
      {
        range: '1.2 - 1.6 g/kg',
        label: 'Aktif Yaşam Tarzı',
        description:
          'Orta derecede aktif bireyler için optimal aralık. Kas bakımını, bağışıklık fonksiyonunu ve günlük fiziksel aktiviteyi destekler. Genel fitness ve sağlık bakımı için iyi.',
        color: '#10B981',
      },
      {
        range: '1.6 - 2.2 g/kg',
        label: 'Atletik / Kas Yapımı',
        description:
          'Ciddi sporcular, vücut geliştiriciler veya yoğun antrenmanda olanlar için önerilir. Kas protein sentezini maksimize eder, toparlanmayı destekler ve vücut kompozisyonu hedeflerine ulaşmaya yardımcı olur.',
        color: '#3B82F6',
      },
      {
        range: '> 2.2 g/kg',
        label: 'Çok Yüksek Alım',
        description:
          'Genellikle profesyonel sporcular veya agresif kas yapma fazları sırasında kullanılan son derece yüksek protein alımı. Sağlıklı bireyler için genellikle güvenlidir ancak yeterli hidrasyon sağlayın ve uzun vadede böbrek fonksiyonunu izleyin.',
        color: '#8B5CF6',
      },
    ],

    interpretation:
      'Protein gereksiniminiz, sadece vücut ağırlığının ötesinde birçok faktöre bağlıdır. Aktivite düzeyi çok önemlidir: hem direnç antrenmanı hem de dayanıklılık egzersizi, kas hasarı ve onarım süreçleri nedeniyle protein ihtiyaçlarını artırır. Fitness hedefleri gereksinimleri önemli ölçüde etkiler: kas korumalı kilo kaybı daha yüksek protein (1.6-2.4 g/kg) gerektirir çünkü tokluk hissi sağlar, yüksek termik etkiye sahiptir (sindirim sırasında yakılan kalorilerin %20-30\'u) ve kalorik açık sırasında kas kaybını önler. Kas kazanımı, ilerici direnç antrenmanı ve kalorik fazlalıkla birlikte 1.6-2.4 g/kg gerektirir. Yaş da önemlidir: yaşlı bireyler (65+) sarkopeniyle (yaşa bağlı kas kaybı) mücadele etmek için minimum 1.0-1.2 g/kg\'a ihtiyaç duyar. Protein kalitesi önemlidir: dokuz temel amino asidin tamamını içeren tam proteinler (et, balık, yumurta, süt ürünleri, soya) eksik proteinlerden (çoğu bitki kaynağı) üstündür.',

    limitations:
      'Protein hesaplayıcılar yararlı tahminler sağlasa da, önemli sınırlamaları vardır. İlk olarak, bireysel metabolik farklılıkları hesaba katamazlar. Bazı insanlar genetik, tıbbi durumlar veya ilaçlar nedeniyle daha yüksek protein döngü oranlarına sahiptir. İkinci olarak, protein gereksinimleri toplam kalorik alımla değişir. Ciddi kalorik kısıtlama sırasında, yağsız kütleyi korumak için protein ihtiyaçları artar. Üçüncü olarak, hesaplayıcı protein kalitesini veya sindirilebilirliği dikkate almaz. Hayvansal proteinler, bitki proteinlerine (%50-80) kıyasla daha yüksek biyolojik değere (%85-100) sahiptir, yani aynı faydaları elde etmek için daha fazla bitki proteinine ihtiyacınız olabilir. Dördüncü olarak, tıbbi durumlar ihtiyaçları önemli ölçüde değiştirir: böbrek hastalığı protein kısıtlaması gerektirir, ameliyattan, yanıklardan veya hastalıktan toparlanma gereksinimleri önemli ölçüde artırır.',

    healthRisks:
      'Hem yetersiz hem de aşırı protein alımı sağlık sonuçları taşır. Protein eksikliği (gelişmiş ülkelerde nadir) kas erimesine, zayıflamış bağışıklığa, ödeme, yavaş yara iyileşmesine, saç dökülmesine ve ciddi vakalarda kwashiorkor\'a neden olur. Daha yaygın olarak, kilo kaybı sırasında yetersiz protein kas kaybına, azalmış metabolik orana ve kilo geri alımına yol açar. Yaşlı popülasyonlarda yetersiz protein sarkopeniyi ve kırılganlığı hızlandırır. Sporcular için yetersiz protein toparlanmayı bozar, yaralanma riskini artırır ve performans iyileştirmelerini önler. Diğer tarafta, aşırı yüksek protein alımı (uzun vadede >3 g/kg sürdürülen) duyarlı bireylerde sorunlara neden olabilir: sindirim sorunları (kabızlık, şişkinlik), besin yer değiştirmesi (yetersiz karbonhidrat/yağ alımı), kalsiyum kaybı (tartışmalı, yeni araştırmalar minimal etki göstermektedir) ve önceden var olan böbrek hastalığı olanlarda teorik böbrek zorlanması (sağlıklı böbrekler yüksek proteini sorunsuz işler).',

    alternativeMeasures:
      'Toplam protein miktarının ötesinde, birkaç faktör protein yeterliliğini ve etkinliğini etkiler. Protein kalitesi biyolojik değer (BV), protein sindirilebilirliği düzeltilmiş amino asit skoru (PDCAAS) ve daha yeni Sindirilebilir Vazgeçilmez Amino Asit Skoru (DIAAS) ile ölçülür. Yumurtalar en yüksek skoru (DIAAS 113) alır, ardından süt ürünleri (109), sığır eti (111) ve soya (91) gelir. Bitki proteinleri daha düşük skor alır: buğday (40), pirinç (59), bezelye (64). Lösin içeriği özellikle kas protein sentezi için önemlidir: öğün başına 2-3g lösin hedefleyin (30-40g yüksek kaliteli proteinde bulunur).',

    demographicDifferences:
      'Protein gereksinimleri demografik gruplar arasında önemli ölçüde değişir. Yaş kritik bir faktördür: çocuklar ve ergenler büyüme ve gelişme için 0.95-1.2 g/kg\'a ihtiyaç duyar. Minimal egzersiz yapan genç yetişkinler (18-40) 0.8-1.0 g/kg\'a ihtiyaç duyar. Aktif genç yetişkinler antrenmana bağlı olarak 1.2-2.0 g/kg gerektirir. Orta yaşlı yetişkinler (40-65) kademeli kas kaybını dengelemek için 1.0-1.2 g/kg\'dan faydalanır. Yaşlı bireyler (65+) sarkopeniyle mücadele etmek, kemik yoğunluğunu korumak, bağışıklık fonksiyonunu desteklemek ve yara iyileşmesini teşvik etmek için daha yüksek protein (1.0-1.5 g/kg) gerektirir. Hamilelik protein ihtiyaçlarını günde 25g artırır (minimum 1.1 g/kg), en yüksek gereksinimler üçüncü trimesterdedir.',

    medicalDisclaimer:
      'Bu protein hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi, beslenme veya diyet tavsiyesinin yerine geçmemelidir. Protein gereksinimleri oldukça bireyseldir ve bu hesaplayıcının değerlendiremeyeceği yaş, cinsiyet, vücut kompozisyonu, tıbbi geçmiş, ilaçlar ve belirli sağlık durumları dahil olmak üzere çok sayıda faktöre bağlıdır. Sağlanan sonuçlar popülasyon ortalamalarına dayalı genel tahminlerdir ve bireysel koşullarınız için uygun olmayabilir. Böbrek hastalığı, karaciğer hastalığı, diyabet, gut veya diğer tıbbi durumları olan bireyler, protein alımını önemli ölçüde değiştirmeden önce doktorlara veya diyetisyenlere danışmalıdır. Hamile veya emziren kadınlar, çocuklar, ergenler ve yaşlı bireyler profesyonel rehberlik gerektiren benzersiz gereksinimlere sahiptir.',

    references: [
      'Institute of Medicine. Enerji, Karbonhidrat, Lif, Yağ, Yağ Asitleri, Kolesterol, Protein ve Amino Asitler için Diyet Referans Alımları. National Academies Press, 2005.',
      'Jäger R, Kerksick CM, Campbell BI, ve ark. Uluslararası Spor Beslenmesi Derneği Pozisyon Bildirisi: protein ve egzersiz. J Int Soc Sports Nutr. 2017;14:20.',
      'Phillips SM, Chevalier S, Leidy HJ. RDA\'nın ötesinde protein "gereksinimleri": sağlığı optimize etmek için çıkarımlar. Appl Physiol Nutr Metab. 2016;41(5):565-572.',
      'Morton RW, Murphy KT, McKellar SR, ve ark. Sağlıklı yetişkinlerde direnç antrenmanı ile uyarılan kas kütlesi ve kuvvet kazanımları üzerinde protein takviyesinin etkisinin sistematik bir incelemesi, meta-analizi ve meta-regresyonu. Br J Sports Med. 2018;52(6):376-384.',
    ],

    tips: [
      'Proteini gün boyunca 3-4 öğün arasında eşit şekilde dağıtın (öğün başına 20-40g) optimal kas protein sentezi için',
      'Kas toparlanması ve büyümesini maksimize etmek için direnç antrenmanından sonraki 2-3 saat içinde protein tüketin',
      'Yüksek kaliteli tam protein kaynaklarını seçin: yağsız etler, balık, yumurta, süt ürünleri, soya ve kinoa',
      'Bitki bazlı diyet uyguluyorsanız tam amino asit profilleri oluşturmak için tamamlayıcı bitki proteinlerini birleştirin (pirinç + fasulye, humus + tam tahıl)',
      'Kas protein sentezini tetiklemek için öğün başına 2-3g lösin hedefleyin (30-40g yüksek kaliteli proteinde bulunur)',
      'Kas kütlesini korumak ve tokluk hissini artırmak için kilo kaybı sırasında protein alımını 1.6-2.4 g/kg\'a yükseltin',
      'Yaşlı bireyler sarkopeniyi önlemek ve fonksiyonel kapasiteyi korumak için minimum 1.0-1.5 g/kg hedeflemelidir',
      'Yüksek protein (>2 g/kg) tüketirken böbrek fonksiyonunu ve nitrojen atılımını desteklemek için iyi hidrasyon sağlayın (günde 3-4 litre)',
    ],

    faqs: [
      {
        question: 'Günde ne kadar protein almalıyım?',
        answer:
          'Günlük protein ihtiyaçları kilo, aktivite düzeyi ve hedeflere göre değişir. Hareketsiz yetişkinler minimum 0.8 g/kg (0.36 g/lb) vücut ağırlığına ihtiyaç duyar. Orta derecede aktif bireyler 1.2-1.6 g/kg hedeflemelidir. Sporcular ve kas yapanlar 1.6-2.4 g/kg\'a ihtiyaç duyar. Örneğin, 70 kg (154 lb) orta derecede aktif bir kişinin günde yaklaşık 84-112 gram protein alması gerekir. Kaslarını koruyarak kilo vermeye çalışanlar aralıklarının üst ucunu hedeflemelidir.',
      },
      {
        question: 'Çok fazla protein yiyebilir miyim?',
        answer:
          'Sağlıklı bireyler için çok yüksek protein alımı (hatta 2-3 g/kg) genellikle güvenlidir. Proteinin böbreklere zarar vermesiyle ilgili endişeler yalnızca önceden var olan böbrek hastalığı olan insanlar için geçerlidir; sağlıklı böbrekler yüksek proteini sorunsuz işler. Ancak son derece yüksek protein (uzun vadede >3 g/kg) sindirim rahatsızlığına, besin yer değiştirmesine (yeterli karbonhidrat/yağ yememe) neden olabilir ve artan su alımı gerektirir.',
      },
      {
        question: 'En iyi protein kaynakları nelerdir?',
        answer:
          'Yüksek kaliteli tam protein kaynakları şunları içerir: yağsız etler (tavuk, hindi), balık (somon, ton balığı), yumurta (altın standart), süt ürünleri (Yunan yoğurdu, lor peyniri, süt) ve soya ürünleri (tofu, tempeh, edamame). Bitki bazlı diyetler için tamamlayıcı proteinleri birleştirin: pirinç + fasulye, humus + pide, fıstık ezmesi + tam tahıl ekmeği.',
      },
      {
        question: 'Protein ne zaman yenmeli?',
        answer:
          'Protein zamanlaması kas protein sentezini optimize etmek için önemlidir. Alımı hepsini bir kerede yüklemek yerine 3-4 öğün arasında eşit şekilde dağıtın: öğün başına 20-40g hedefleyin. Antrenman sonrası "anabolik pencere" aslında bir zamanlar inanılan 30 dakika değil 2-3 saattir, bu nedenle antrenman sonrası birkaç saat içinde protein tüketmek faydalıdır. Yatmadan önce protein (özellikle yavaş sindirilen kazein) gece kas toparlanmasını destekleyebilir.',
      },
      {
        question: 'Protein tozu veya takviyelere ihtiyacım var mı?',
        answer:
          'Protein tozu kullanışlı bir takviyedir ancak günlük hedefinizi tam gıdalardan karşılarsanız gerekli değildir. Şu durumlarda faydalıdır: yalnızca gıdadan yeterli protein yemekte zorlanıyorsanız, antrenman sonrası hızlı beslenmeye ihtiyacınız varsa, sık seyahat ediyorsanız veya kısıtlı bir diyetteyseniz (vegan, vejeteryan, gıda alerjileri). Whey protein hızlı sindirilir (antrenman sonrası ideal), kazein yavaş sindirilir (yatmadan önce iyi) ve bitki bazlı seçenekler (bezelye, pirinç, kenevir) veganlar için çalışır.',
      },
      {
        question: 'Protein kilo kaybına yardımcı olur mu?',
        answer:
          'Evet, daha yüksek protein alımı birden fazla mekanizma yoluyla kilo kaybına önemli ölçüde yardımcı olur. Protein yüksek termik etkiye sahiptir (sindirim sırasında yakılan protein kalorilerinin %20-30\'u karşı karbonhidratlar/yağlar için %5-10). Tokluk hissini artırır ve açlık hormonlarını azaltır, doğal olarak daha az kalori yemenize yardımcı olur. En önemlisi, kalorik açık sırasında yeterli protein (1.6-2.4 g/kg) yağsız kas kütlesini korur, kilo kaybının kastan değil yağdan geldiğinden emin olur.',
      },
      {
        question: 'Öğün başına ne kadar protein optimal?',
        answer:
          'Araştırmalar, çoğu yetişkinde öğün başına 20-40 gram yüksek kaliteli proteinin kas protein sentezini optimal şekilde uyardığını göstermektedir. Spesifik olarak, anabolik yanıtı tetikleyen öğün başına 2-3 gram lösin (30-40g tam proteinde bulunur) hedefleyin. Öğün başına 40g\'den fazlası kas yapımı için azalan getiriler sağlar, ancak daha büyük bireyler (100+ kg) daha fazlasını etkili bir şekilde kullanabilir.',
      },
    ],
  },
};
