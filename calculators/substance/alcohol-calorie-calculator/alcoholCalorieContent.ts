import { CalculatorContent } from '@/types/calculator';

export const alcoholCalorieContent: CalculatorContent = {
  en: {
    whatIs: `The Alcohol Calorie Calculator is a tool that helps you understand the caloric impact of your alcohol consumption. Many people are unaware that alcoholic beverages are one of the most significant hidden sources of calories in the modern diet. Alcohol itself contains 7 calories per gram — nearly double the calories in carbohydrates or protein (4 cal/g) and close to fat (9 cal/g). A single night out can easily add 500-1,000 or more extra calories to your daily intake.

Unlike calories from nutritious foods, alcohol calories are considered "empty calories" because they provide no essential vitamins, minerals, or macronutrients. When you consume alcohol, your body prioritizes metabolizing it over other nutrients, which can lead to increased fat storage from the food you eat alongside your drinks. This is why regular alcohol consumption is strongly associated with weight gain, particularly around the midsection — the so-called "beer belly."

This calculator goes beyond simple calorie counting by showing you the total alcohol content, sugar levels, food equivalents, and long-term weight impact projections. Whether you are trying to lose weight, maintain a healthy lifestyle, or simply want to make more informed choices about your drinking habits, understanding the caloric cost of alcohol is an essential first step.`,

    howToCalculate: `Using the Alcohol Calorie Calculator is straightforward:

**Step 1: Select Your Drink**
Choose from our comprehensive database of popular alcoholic beverages including beers, wines, spirits, cocktails, Turkish drinks like rakı, and liqueurs.

**Step 2: Set Quantity**
Enter how many servings you consumed. Each drink has a standard serving size displayed next to its name.

**Step 3: Add Multiple Drinks**
If you had different types of drinks, add each one separately for an accurate total. Click "Add Drink" for each new beverage.

**Step 4: Set Frequency**
Select whether this is a one-time calculation, or if you want weekly/monthly projections based on how often you drink this amount.

**Step 5: Calculate**
Click the calculate button to see your complete calorie breakdown, food equivalents, and long-term projections.`,

    formulaDetails: `The calorie calculations are based on established nutritional science:

**Alcohol Calories:** Pure alcohol (ethanol) contains 7.1 calories per gram. The amount of pure alcohol in a drink is calculated as: Volume (ml) × ABV (%) × 0.789 (density of ethanol) / 100.

**Standard Drink:** One standard drink in the US contains approximately 14 grams of pure alcohol. This equals roughly one 12 oz (355ml) regular beer, one 5 oz (150ml) glass of wine, or one 1.5 oz (45ml) shot of spirits.

**Total Calories:** The total calorie count includes both alcohol calories and calories from sugars, carbohydrates, and other ingredients in the beverage.

**Weight Projection:** Based on the principle that approximately 7,700 excess calories result in 1 kg of body fat gain. Annual weight gain projection = (Monthly calories × 12) / 7,700.`,

    interpretation: `Understanding your results:

**Total Calories:** This is the complete caloric value of all drinks combined. Compare this to your daily calorie needs (typically 1,800-2,500 calories for adults) to understand the proportion.

**Alcohol vs Sugar Calories:** Pure spirits derive almost all calories from alcohol itself, while cocktails and sweet wines get significant calories from added sugars.

**Standard Drinks:** The number of standard drinks helps you understand your actual alcohol intake relative to health guidelines (typically 1 drink/day for women, 2 for men).

**Food Equivalents:** These comparisons help visualize what your drink calories represent in terms of food you might otherwise eat.

**Yearly Weight Projection:** If consumed regularly, this shows potential weight gain over a year, assuming no compensatory calorie reduction elsewhere.`,

    limitations: `This calculator provides estimates based on standard serving sizes and average nutritional values. Actual calories may vary based on specific brands, recipes, pour sizes, and preparation methods. Homemade cocktails and craft beers may differ significantly from standard values. The weight gain projection assumes all excess calories are stored as fat, which is a simplification of complex metabolic processes. Individual metabolism, genetics, overall diet, and physical activity all influence actual weight changes.`,

    healthRisks: `Regular alcohol consumption is associated with numerous health risks beyond weight gain. These include liver disease (fatty liver, hepatitis, cirrhosis), increased cancer risk (mouth, throat, esophagus, liver, breast, colon), cardiovascular problems, weakened immune system, digestive issues, mental health impacts (depression, anxiety), sleep disruption, and nutrient malabsorption.

The World Health Organization states that no level of alcohol consumption is completely safe. Even moderate drinking has been associated with increased health risks in recent large-scale studies. The calories from alcohol compound these risks by contributing to obesity, which is itself a major risk factor for chronic diseases.`,

    alternativeMeasures: `If you want to enjoy social drinking while minimizing caloric impact, consider these alternatives:

- Choose light beers (about 30% fewer calories than regular)
- Opt for dry wines over sweet wines
- Use sparkling water as a mixer instead of sugary sodas
- Order spirits neat or on the rocks instead of in cocktails
- Alternate alcoholic drinks with water
- Choose smaller serving sizes
- Consider non-alcoholic beer or wine alternatives (typically 50-70% fewer calories)`,

    demographicDifferences: `Alcohol affects people differently based on several factors. Women typically experience higher blood alcohol levels than men at the same consumption level due to lower body water percentage and different enzyme activity. Body weight, age, genetics, medication use, and food intake all influence how alcohol is metabolized. Asian populations commonly have a genetic variation that affects alcohol metabolism (ALDH2 deficiency), leading to the "Asian flush" reaction and slower processing.`,

    medicalDisclaimer: `This calculator is for informational and educational purposes only. The calorie values are estimates based on standard serving sizes and may not reflect exact values for specific products. This tool does not provide medical, nutritional, or dietary advice. If you have concerns about your alcohol consumption or its impact on your health, please consult a healthcare professional. If you or someone you know is struggling with alcohol use, contact SAMHSA National Helpline at 1-800-662-4357 (US) or seek local support services.`,

    references: [
      'USDA FoodData Central. U.S. Department of Agriculture.',
      'Traversy G, Chaput JP. Alcohol Consumption and Obesity: An Update. Curr Obes Rep. 2015;4(1):122-130.',
      'Yeomans MR. Alcohol, appetite and energy balance: Is alcohol intake a risk factor for obesity? Physiol Behav. 2010;100(1):82-89.',
      'WHO. Global status report on alcohol and health 2018. Geneva: World Health Organization; 2018.',
      'Shelton NJ, Knott CS. Association Between Alcohol Calorie Intake and Overweight and Obesity in English Adults. Am J Public Health. 2014;104(4):629-631.',
      'Suter PM. Is alcohol consumption a risk factor for weight gain and obesity? Crit Rev Clin Lab Sci. 2005;42(3):197-227.',
    ],

    tips: [
      'Track your drink calories just like food calories when watching your weight',
      'A typical night out with 4-5 drinks can add 600-1,200 extra calories',
      'Cocktails with sugary mixers can have twice the calories of the same spirit served neat',
      'Light beer saves about 50 calories per bottle compared to regular beer',
      'Dry wine has fewer calories than sweet wine varieties',
      'Alternating alcoholic drinks with water cuts total calorie intake in half',
      'Eating before drinking slows alcohol absorption but does not reduce calories',
      'The "beer belly" is real — alcohol promotes fat storage around the midsection',
    ],

    faqs: [
      {
        question: 'Why does alcohol have so many calories?',
        answer: 'Alcohol (ethanol) contains 7.1 calories per gram, making it the second most calorie-dense macronutrient after fat (9 cal/g). Unlike carbohydrates and protein at 4 cal/g each, alcohol packs nearly twice the energy. Additionally, many alcoholic beverages contain added sugars, syrups, and other high-calorie ingredients that further increase the calorie count.',
      },
      {
        question: 'What is the lowest calorie alcoholic drink?',
        answer: 'The lowest calorie alcoholic drinks are typically clear spirits (vodka, gin, tequila) served neat or with zero-calorie mixers like soda water, at about 100 calories per shot. Light beer comes in at about 100-110 calories per bottle. Dry sparkling wine (about 90 calories per glass) is also a relatively low-calorie option.',
      },
      {
        question: 'Can I drink alcohol and still lose weight?',
        answer: 'Yes, but it requires careful calorie management. You need to account for alcohol calories within your daily calorie budget. This often means reducing food calories on days you drink, which can compromise nutrition. Many successful dieters choose to limit alcohol to occasional moderate consumption and select lower-calorie options when they do drink.',
      },
      {
        question: 'How many calories are in a typical night out?',
        answer: 'A typical social night out with 4-6 drinks can range from 400 to 1,500+ calories depending on drink choices. For example: 4 regular beers = 600 calories, 4 glasses of wine = 500 calories, but 4 cocktails like Piña Coladas = nearly 2,000 calories. Adding late-night food can push the total even higher.',
      },
      {
        question: 'Do "empty calories" from alcohol cause more weight gain than food calories?',
        answer: 'While a calorie is a calorie from a thermodynamic perspective, alcohol calories are considered "empty" because they provide no nutritional value. Furthermore, your body prioritizes metabolizing alcohol over other nutrients, which means fat and carbohydrate metabolism is temporarily suppressed. This can lead to increased fat storage from the food eaten alongside alcohol, compounding the caloric impact.',
      },
    ],
  },
  tr: {
    whatIs: `Alkol Kalori Hesaplayıcı, alkol tüketiminizin kalorik etkisini anlamanıza yardımcı olan bir araçtır. Pek çok kişi, alkollü içeceklerin modern beslenmedeki en önemli gizli kalori kaynaklarından biri olduğunun farkında değildir. Alkolün kendisi gram başına 7 kalori içerir — bu karbonhidrat veya proteinin (4 kal/g) neredeyse iki katı ve yağa (9 kal/g) yakın bir değerdir. Tek bir gece dışarıda 500-1.000 veya daha fazla ekstra kalori günlük alımınıza ekleyebilir.

Besleyici gıdalardan gelen kalorilerin aksine, alkol kalorileri "boş kalori" olarak kabul edilir çünkü herhangi bir temel vitamin, mineral veya makro besin sağlamazlar. Alkol tükettiğinizde vücudunuz onu diğer besinlerden önce metabolize etmeye öncelik verir ve bu da içkilerinizle birlikte yediğiniz yiyeceklerden artan yağ depolanmasına yol açabilir. Bu nedenle düzenli alkol tüketimi, özellikle karın bölgesinde kilo alımıyla güçlü bir şekilde ilişkilidir — halk arasında "bira göbeği" olarak bilinen durum.

Bu hesaplayıcı, basit kalori saymanın ötesine geçerek toplam alkol içeriğini, şeker seviyelerini, yiyecek eşdeğerlerini ve uzun vadeli kilo etkisi projeksiyonlarını gösterir. İster kilo vermeye çalışıyor olun, ister sağlıklı bir yaşam tarzını sürdürmek isteyin, ister sadece içme alışkanlıklarınız hakkında daha bilinçli seçimler yapmak isteyin, alkolün kalorik maliyetini anlamak önemli bir ilk adımdır.`,

    howToCalculate: `Alkol Kalori Hesaplayıcısını kullanmak çok kolaydır:

**Adım 1: İçeceğinizi Seçin**
Biralar, şaraplar, sert içkiler, kokteyller, rakı gibi Türk içkileri ve likörler dahil kapsamlı içecek veritabanımızdan seçim yapın.

**Adım 2: Miktarı Belirleyin**
Kaç porsiyon tükettiğinizi girin. Her içeceğin standart porsiyon boyutu adının yanında gösterilir.

**Adım 3: Birden Fazla İçecek Ekleyin**
Farklı türde içecekler içtiyseniz, doğru bir toplam için her birini ayrı ayrı ekleyin. Her yeni içecek için "İçecek Ekle" düğmesine tıklayın.

**Adım 4: Sıklığı Belirleyin**
Bunun tek seferlik bir hesaplama mı olduğunu, yoksa ne sıklıkta bu miktarı içtiğinize göre haftalık/aylık projeksiyonlar mı istediğinizi seçin.

**Adım 5: Hesaplayın**
Tam kalori dökümünüzü, yiyecek eşdeğerlerinizi ve uzun vadeli projeksiyonlarınızı görmek için hesapla düğmesine tıklayın.`,

    formulaDetails: `Kalori hesaplamaları yerleşik beslenme bilimine dayanmaktadır:

**Alkol Kalorileri:** Saf alkol (etanol) gram başına 7,1 kalori içerir. Bir içecekteki saf alkol miktarı şu şekilde hesaplanır: Hacim (ml) × ABV (%) × 0,789 (etanol yoğunluğu) / 100.

**Standart İçki:** ABD standardına göre bir standart içki yaklaşık 14 gram saf alkol içerir. Bu, kabaca bir şişe normal bira (330ml), bir kadeh şarap (150ml) veya bir tek sert içkiye (45ml) eşittir.

**Toplam Kalori:** Toplam kalori sayısı hem alkol kalorilerini hem de içecekteki şeker, karbonhidrat ve diğer bileşenlerden gelen kalorileri içerir.

**Kilo Projeksiyonu:** Yaklaşık 7.700 fazla kalorinin 1 kg vücut yağı kazanımına yol açtığı ilkesine dayanır. Yıllık kilo alma projeksiyonu = (Aylık kalori × 12) / 7.700.`,

    interpretation: `Sonuçlarınızı anlama:

**Toplam Kalori:** Bu, tüm içeceklerin birleşik kalori değeridir. Oranını anlamak için günlük kalori ihtiyacınızla (yetişkinler için genellikle 1.800-2.500 kalori) karşılaştırın.

**Alkol ve Şeker Kalorileri:** Saf sert içkiler neredeyse tüm kalorileri alkolün kendisinden alırken, kokteyller ve tatlı şaraplar eklenen şekerlerden önemli miktarda kalori alır.

**Standart İçki Sayısı:** Standart içki sayısı, sağlık yönergelerine göre gerçek alkol alımınızı anlamanıza yardımcı olur (genellikle kadınlar için günde 1, erkekler için 2 içki).

**Yiyecek Eşdeğerleri:** Bu karşılaştırmalar, içecek kalorilerinizin aksi takdirde yiyebileceğiniz yiyecekler açısından neyi temsil ettiğini görselleştirmenize yardımcı olur.

**Yıllık Kilo Projeksiyonu:** Düzenli olarak tüketildiğinde, başka bir yerde telafi edici kalori azaltması yapılmadığı varsayılarak bir yıl boyunca potansiyel kilo alımını gösterir.`,

    limitations: `Bu hesaplayıcı, standart porsiyon boyutlarına ve ortalama besin değerlerine dayalı tahminler sunar. Gerçek kaloriler belirli markalara, tariflere, servis boyutlarına ve hazırlama yöntemlerine göre değişebilir. Ev yapımı kokteyller ve butik biralar standart değerlerden önemli ölçüde farklılık gösterebilir. Kilo alma projeksiyonu, tüm fazla kalorilerin yağ olarak depolandığını varsayar ki bu karmaşık metabolik süreçlerin bir basitleştirmesidir. Bireysel metabolizma, genetik, genel diyet ve fiziksel aktivite gerçek kilo değişikliklerini etkiler.`,

    healthRisks: `Düzenli alkol tüketimi, kilo alımının ötesinde çok sayıda sağlık riskiyle ilişkilidir. Bunlar arasında karaciğer hastalığı (yağlı karaciğer, hepatit, siroz), artan kanser riski (ağız, boğaz, yemek borusu, karaciğer, meme, kolon), kardiyovasküler sorunlar, zayıflamış bağışıklık sistemi, sindirim sorunları, ruh sağlığı etkileri (depresyon, anksiyete), uyku bozukluğu ve besin emilim bozukluğu yer alır.

Dünya Sağlık Örgütü, hiçbir alkol tüketim seviyesinin tamamen güvenli olmadığını belirtmektedir. Son büyük ölçekli çalışmalarda ılımlı içki tüketiminin bile artan sağlık riskleriyle ilişkili olduğu gösterilmiştir. Alkolden gelen kaloriler, kronik hastalıklar için önemli bir risk faktörü olan obeziteye katkıda bulunarak bu riskleri daha da artırır.`,

    alternativeMeasures: `Sosyal içmeyi kalorik etkiyi en aza indirerek sürdürmek istiyorsanız şu alternatifleri değerlendirin:

- Light bira seçin (normalen yaklaşık %30 daha az kalori)
- Tatlı şaraplar yerine sek şarapları tercih edin
- Şekerli gazlı içecekler yerine maden suyu ile karıştırın
- Kokteyller yerine sert içkileri sek veya buzlu için
- Alkollü içeceklerle su arasında geçiş yapın
- Daha küçük porsiyon boyutları tercih edin
- Alkolsüz bira veya şarap alternatiflerini düşünün (genellikle %50-70 daha az kalori)`,

    demographicDifferences: `Alkol, çeşitli faktörlere bağlı olarak insanları farklı şekilde etkiler. Kadınlar, daha düşük vücut suyu yüzdesi ve farklı enzim aktivitesi nedeniyle aynı tüketim seviyesinde erkeklere göre genellikle daha yüksek kan alkol seviyeleri yaşar. Vücut ağırlığı, yaş, genetik, ilaç kullanımı ve yiyecek alımı alkolün nasıl metabolize edildiğini etkiler. Asya popülasyonlarında yaygın olarak alkol metabolizmasını etkileyen genetik bir varyasyon (ALDH2 eksikliği) bulunur ve bu da "Asya kızarması" reaksiyonuna ve daha yavaş işlemeye yol açar.`,

    medicalDisclaimer: `Bu hesaplayıcı yalnızca bilgilendirme ve eğitim amaçlıdır. Kalori değerleri, standart porsiyon boyutlarına dayalı tahminlerdir ve belirli ürünlerin kesin değerlerini yansıtmayabilir. Bu araç tıbbi, beslenme veya diyet tavsiyesi sağlamamaktadır. Alkol tüketiminiz veya sağlığınız üzerindeki etkisi hakkında endişeleriniz varsa lütfen bir sağlık uzmanına danışın. Siz veya tanıdığınız biri alkol kullanımı ile mücadele ediyorsa, Yeşilay Danışma Hattı 182\'yi veya yerel destek hizmetlerini arayın.`,

    references: [
      'USDA FoodData Central. ABD Tarım Bakanlığı.',
      'Traversy G, Chaput JP. Alcohol Consumption and Obesity: An Update. Curr Obes Rep. 2015;4(1):122-130.',
      'Yeomans MR. Alcohol, appetite and energy balance. Physiol Behav. 2010;100(1):82-89.',
      'DSÖ. Alkol ve sağlık hakkında küresel durum raporu 2018. Cenevre: Dünya Sağlık Örgütü; 2018.',
      'Shelton NJ, Knott CS. Association Between Alcohol Calorie Intake and Overweight and Obesity. Am J Public Health. 2014;104(4):629-631.',
      'Suter PM. Is alcohol consumption a risk factor for weight gain and obesity? Crit Rev Clin Lab Sci. 2005;42(3):197-227.',
    ],

    tips: [
      'Kilo takibi yaparken içecek kalorilerinizi de yiyecek kalorileri gibi takip edin',
      '4-5 içecekli tipik bir gece 600-1.200 fazladan kalori ekleyebilir',
      'Şekerli karışımlı kokteyller, aynı içkinin sek halinin iki katı kaloriye sahip olabilir',
      'Light bira, normal biraya kıyasla şişe başına yaklaşık 50 kalori tasarruf sağlar',
      'Sek şarap, tatlı şarap çeşitlerinden daha az kaloriye sahiptir',
      'Alkollü içeceklerle su arasında geçiş yapmak toplam kalori alımını yarıya indirir',
      'İçmeden önce yemek yemek emilimi yavaşlatır ancak kalorileri azaltmaz',
      '"Bira göbeği" gerçektir — alkol karın bölgesinde yağ depolanmasını teşvik eder',
    ],

    faqs: [
      {
        question: 'Alkol neden bu kadar çok kalori içerir?',
        answer: 'Alkol (etanol) gram başına 7,1 kalori içerir ve bu onu yağdan (9 kal/g) sonra en yoğun kalorili makro besin yapar. Her biri 4 kal/g olan karbonhidrat ve proteine kıyasla alkol neredeyse iki kat enerji barındırır. Ayrıca birçok alkollü içecek, kalori sayısını daha da artıran eklenen şekerler, şuruplar ve diğer yüksek kalorili bileşenler içerir.',
      },
      {
        question: 'En düşük kalorili alkollü içecek hangisidir?',
        answer: 'En düşük kalorili alkollü içecekler genellikle sek veya soda ile servis edilen berrak sert içkilerdir (votka, cin, tekila) — tek başına yaklaşık 100 kalori. Light bira şişe başına yaklaşık 100-110 kaloridir. Sek köpüklü şarap (kadeh başına yaklaşık 90 kalori) da nispeten düşük kalorili bir seçenektir.',
      },
      {
        question: 'Alkol içip yine de kilo verebilir miyim?',
        answer: 'Evet, ancak dikkatli kalori yönetimi gerektirir. Alkol kalorilerini günlük kalori bütçeniz dahilinde hesaba katmanız gerekir. Bu genellikle içtiğiniz günlerde yiyecek kalorilerini azaltmak anlamına gelir ve beslenmeyi olumsuz etkileyebilir. Başarılı diyet yapanların çoğu alkolü ara sıra ılımlı tüketime sınırlamayı ve içtiklerinde düşük kalorili seçenekleri tercih etmeyi seçer.',
      },
      {
        question: 'Tipik bir gece dışarıda kaç kalori alınır?',
        answer: '4-6 içecekli tipik bir sosyal gece, içecek seçimlerine bağlı olarak 400 ile 1.500+ kalori arasında değişebilir. Örneğin: 4 normal bira = 600 kalori, 4 kadeh şarap = 500 kalori, ancak 4 Piña Colada = yaklaşık 2.000 kalori. Gece geç saatlerde yemek eklendiğinde toplam daha da yükselebilir.',
      },
      {
        question: 'Alkolden gelen "boş kaloriler" yiyecek kalorilerinden daha fazla kilo aldırır mı?',
        answer: 'Termodinamik açıdan bir kalori bir kaloridir, ancak alkol kalorileri besin değeri sağlamadıkları için "boş" kabul edilir. Dahası, vücudunuz alkolü diğer besinlerden önce metabolize etmeye öncelik verir, bu da yağ ve karbonhidrat metabolizmasının geçici olarak bastırılması anlamına gelir. Bu, alkol ile birlikte yenen yiyeceklerden artan yağ depolanmasına yol açabilir ve kalorik etkiyi daha da artırır.',
      },
    ],
  },
};
