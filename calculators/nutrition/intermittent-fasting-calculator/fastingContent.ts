import { CalculatorContent } from '@/types/calculator';

export const fastingContent: CalculatorContent = {
  en: {
    whatIs:
      `Intermittent fasting (IF) is an eating pattern that cycles between periods of fasting and eating. Unlike traditional diets that focus on what you eat, intermittent fasting focuses on when you eat. This approach has gained massive popularity since 2016 and continues to be one of the most searched health topics globally. The concept is not new—humans have practiced fasting for thousands of years, often out of necessity or for religious reasons. However, modern science has revealed that strategic fasting triggers powerful metabolic and cellular changes that can lead to weight loss, improved metabolic health, enhanced brain function, and potentially increased longevity. The most popular protocols include 16:8 (fasting for 16 hours, eating within an 8-hour window), 18:6, 20:4 (Warrior Diet), OMAD (One Meal A Day), 5:2 (eating normally five days, restricting calories two days), and alternate-day fasting. Each protocol offers different benefits and challenges, making intermittent fasting highly adaptable to individual lifestyles and goals.`,

    howToCalculate:
      `Calculating your intermittent fasting schedule involves determining your fasting window and eating window based on your chosen protocol and daily routine. Start by selecting a fasting protocol that matches your experience level and goals. For beginners, the 16:8 method is recommended—this means fasting for 16 consecutive hours (including sleep) and eating all your meals within an 8-hour window. To calculate your eating window, consider your wake-up time, bedtime, work schedule, and social commitments. For example, if you wake up at 7 AM and prefer to skip breakfast, you might start eating at 12 PM (noon) and finish your last meal by 8 PM. This creates a 16-hour fast (8 PM to 12 PM the next day) and an 8-hour eating window (12 PM to 8 PM). Your sleeping hours count toward your fasting period, making it easier to achieve longer fasts. The key is consistency—maintain the same eating window daily for at least 3-4 weeks to allow your body to adapt. For weekly protocols like 5:2, you'll eat normally for five days and restrict calories to 500-600 on two non-consecutive days (e.g., Monday and Thursday). Our calculator helps you determine the optimal fasting and eating windows based on your schedule, automatically calculating meal timing suggestions, autophagy windows, and personalized recommendations.`,

    formulaDetails:
      `The intermittent fasting schedule calculation is based on time management principles rather than mathematical formulas. The core calculation involves: Total Daily Hours (24) = Fasting Hours + Eating Hours. For daily protocols like 16:8, you allocate 16 hours to fasting and 8 hours to eating. The eating window start time is calculated by adding a delay (typically 2-4 hours) to your wake-up time, allowing your body to maintain its fasted state through morning hours when growth hormone and fat-burning are elevated. The eating window end time is calculated by adding the eating hours to the start time. For example, with a 7 AM wake-up time and 16:8 protocol: Eating Window Start = 7 AM + 2-3 hours = 10 AM; Eating Window End = 10 AM + 8 hours = 6 PM; Fasting Window = 6 PM to 10 AM (16 hours). For OMAD (One Meal A Day), the eating window is just 1 hour, typically centered in the afternoon or evening. For weekly protocols (5:2 or Alternate Day), the calculation involves determining which days are fasting days (500-600 calories) versus normal eating days (2000-2500 calories). The autophagy window calculation is based on research showing that autophagy (cellular cleanup) begins around 12-14 hours of fasting and peaks at 16-24 hours, depending on individual metabolic factors. Our calculator also considers your sleep schedule to maximize the overlap between sleeping hours and fasting hours, making the fasting period more manageable.`,

    categories: [
      {
        range: '16:8',
        label: 'Beginner-Friendly',
        description:
          'Fast 16 hours, eat within 8 hours. Most sustainable long-term approach. Suitable for daily routine with consistent energy levels and gradual fat loss.',
        color: '#10B981',
      },
      {
        range: '18:6',
        label: 'Intermediate',
        description:
          'Fast 18 hours, eat within 6 hours. Enhanced autophagy and metabolic benefits. Requires adaptation period but offers deeper cellular renewal.',
        color: '#F59E0B',
      },
      {
        range: '20:4',
        label: 'Advanced (Warrior)',
        description:
          'Fast 20 hours, eat within 4 hours. Significant metabolic changes with maximum autophagy. Only for experienced fasters with specific health goals.',
        color: '#F97316',
      },
      {
        range: 'OMAD',
        label: 'Expert Only',
        description:
          'One meal per day (23:1 ratio). Ultimate simplicity but extremely restrictive. Challenging to meet nutritional needs; medical supervision recommended.',
        color: '#EF4444',
      },
      {
        range: '5:2',
        label: 'Weekly Protocol',
        description:
          'Eat normally 5 days, restrict to 500-600 calories for 2 days. Flexible approach that fits social schedules while providing metabolic benefits.',
        color: '#3B82F6',
      },
      {
        range: 'Alternate Day',
        label: 'Aggressive Protocol',
        description:
          'Alternate between fasting days (500 cal) and normal days. Rapid results but challenging sustainability. Requires strong discipline and planning.',
        color: '#DC2626',
      },
    ],

    interpretation:
      `Your intermittent fasting schedule should be interpreted as a flexible framework rather than rigid rules. The calculated eating and fasting windows serve as guidelines to help you structure your day for optimal metabolic benefits. During the fasting window, your body transitions from using glucose (sugar) as primary fuel to burning stored fat, a metabolic state called ketosis. Insulin levels drop, facilitating fat burning, while human growth hormone (HGH) increases, promoting fat loss and muscle gain. Cellular repair processes, including autophagy (removal of damaged cells), activate after 12-16 hours of fasting. The eating window is your opportunity to consume nutrient-dense whole foods that provide essential vitamins, minerals, proteins, and healthy fats. The quality of food consumed during the eating window significantly impacts results—eating processed foods and excess calories can negate the benefits of fasting. If you feel excessive hunger, fatigue, or irritability, especially in the first 1-2 weeks, this is normal as your body adapts from glucose-burning to fat-burning. Gradually extending your fasting window by 30-60 minutes per week can help ease the transition. Women may need slightly shorter fasting windows (14-15 hours initially) due to hormonal sensitivity. If you experience persistent adverse effects like dizziness, extreme fatigue, menstrual irregularities, or difficulty concentrating, consult a healthcare professional and consider a less restrictive protocol. Remember that intermittent fasting is a tool, not a religion—flexibility and listening to your body are paramount for long-term success.`,

    limitations:
      `While intermittent fasting offers numerous benefits, it has important limitations and is not suitable for everyone. First, intermittent fasting is not recommended for individuals with a history of eating disorders, as it may trigger unhealthy eating patterns or obsessive food behaviors. Pregnant and breastfeeding women should avoid intermittent fasting due to increased nutritional demands. Children and adolescents (under 18) are still growing and require consistent nutrition throughout the day. People with diabetes, especially those on insulin or medications that lower blood sugar, must consult healthcare providers before fasting to avoid dangerous hypoglycemia. Individuals with chronic conditions, including heart disease, kidney disease, or those on medications that require food intake, should seek medical clearance. Second, intermittent fasting does not guarantee weight loss if calorie intake during eating windows exceeds expenditure—eating excessive calories in a short timeframe can still lead to weight gain. Third, the metabolic benefits of fasting can plateau after 6-12 months as the body adapts; periodic variations in protocol may be necessary. Fourth, social and cultural eating patterns may conflict with fasting schedules, creating stress or social isolation if not managed thoughtfully. Fifth, some people experience negative side effects including persistent hunger, irritability, poor concentration, headaches, fatigue, or sleep disturbances that don't improve with adaptation. Sixth, athletes or highly active individuals may find it difficult to maintain performance and recovery with restricted eating windows, potentially requiring modified approaches. Seventh, intermittent fasting does not address food quality—eating highly processed, nutrient-poor foods during eating windows provides minimal health benefits regardless of fasting duration. Finally, there is limited long-term research (10+ years) on intermittent fasting's effects on longevity, bone density, reproductive health, and other long-term outcomes. The majority of research has been conducted over periods of weeks to months, with animal studies providing most longevity data.`,

    healthRisks:
      `When practiced incorrectly or by inappropriate populations, intermittent fasting carries potential health risks that must be understood. For individuals with diabetes or on glucose-lowering medications, fasting can cause dangerous hypoglycemia (low blood sugar), potentially leading to dizziness, confusion, fainting, or more serious complications. Women with hormonal imbalances, including thyroid disorders or PCOS, may experience worsened symptoms, menstrual irregularities, or fertility issues with prolonged fasting. Some women report amenorrhea (loss of menstruation) with aggressive fasting protocols, indicating hormonal disruption. People with a history of eating disorders face a significant risk of relapsing into restrictive eating patterns, binge eating, or obsessive food behaviors under the guise of "healthy fasting." Individuals with low blood pressure may experience increased dizziness or fainting during fasting periods. Those with gastroesophageal reflux disease (GERD) might find symptoms worsen due to extended periods without food. Nutrient deficiencies can develop if eating windows are too short or food quality is poor, potentially leading to anemia, weakened immune function, poor bone health, and muscle loss. Aggressive fasting protocols (OMAD, alternate-day fasting) increase the risk of binge eating when the eating window opens, creating unhealthy feast-famine cycles. Chronic stress levels may increase with fasting, as extended fasting elevates cortisol (stress hormone), which can counteract the benefits if not managed properly. Dehydration is a common risk if water intake is insufficient during fasting periods. Sleep quality may deteriorate if individuals go to bed hungry or if hormonal changes disrupt sleep architecture. Social and psychological impacts include anxiety around meal timing, social isolation due to inflexible eating schedules, and increased food fixation or obsession. Elderly individuals face risks of accelerated muscle loss (sarcopenia) and nutritional deficiencies with time-restricted eating. For all these reasons, medical consultation is strongly recommended before beginning intermittent fasting, especially for individuals with pre-existing health conditions, those taking medications, or anyone over 65 years of age.`,

    alternativeMeasures:
      `While intermittent fasting is a powerful tool, several alternative eating patterns and metabolic interventions can provide similar or complementary benefits. Time-restricted eating (TRE), which maintains a consistent 10-12 hour eating window daily, offers a gentler approach than traditional intermittent fasting while still providing circadian rhythm benefits and mild metabolic improvements. Calorie cycling (alternating between high and low-calorie days) can provide metabolic flexibility without strict fasting windows, making it more socially compatible. The ketogenic diet induces similar metabolic states (ketosis, fat burning) as fasting but through dietary composition rather than meal timing, allowing continuous eating. Periodic fasting, such as quarterly 3-5 day water fasts, provides intensive autophagy and metabolic reset without the daily commitment of intermittent fasting. Protein cycling, where protein intake varies by day, can stimulate autophagy while maintaining muscle mass better than calorie restriction alone. Carbohydrate cycling (higher carbs on training days, lower on rest days) optimizes energy for performance while promoting fat burning during lower-intake periods. Mindful eating practices, focusing on hunger and satiety cues rather than time windows, can achieve weight management and metabolic health for those who find structured fasting too restrictive. Exercise, particularly high-intensity interval training (HIIT) and resistance training, provides many overlapping benefits with fasting including improved insulin sensitivity, enhanced autophagy, increased growth hormone, and fat loss—without requiring dietary restrictions. Cold exposure (cold showers, ice baths) activates similar cellular stress responses and metabolic pathways as fasting. Sleep optimization (7-9 hours of quality sleep) is arguably more important than fasting for metabolic health, hormonal balance, and longevity. Combining intermittent fasting with any of these approaches may provide synergistic benefits, but it's crucial to avoid excessive metabolic stress by stacking too many interventions simultaneously. Individual experimentation with professional guidance helps determine the optimal approach for your unique biology and lifestyle.`,

    demographicDifferences:
      `Intermittent fasting affects different demographic groups in varying ways, requiring personalized approaches for optimal safety and effectiveness. Gender differences are significant: women generally have more sensitive hormonal systems that can be disrupted by aggressive fasting. Research suggests women may benefit from shorter fasting windows (14-15 hours) compared to men (16-18 hours), particularly those of reproductive age. Women are more susceptible to menstrual irregularities, fertility issues, and hormonal imbalances with extreme fasting protocols. Men typically tolerate longer fasts better and may experience fewer hormonal disruptions. Age is a critical factor: young adults (20-40) usually adapt to intermittent fasting quickly and experience robust benefits. Middle-aged adults (40-60) often find intermittent fasting highly effective for weight management and metabolic health as metabolism naturally slows. However, elderly individuals (65+) face increased risks of muscle loss, nutrient deficiencies, and frailty with restrictive eating patterns—if fasting at all, they should prioritize protein intake and resistance exercise to preserve muscle mass. Athletes and highly active individuals require careful protocol selection: endurance athletes may perform better with carbohydrate availability around training, while strength athletes can often train fasted but need adequate protein timing for recovery. Sedentary individuals typically tolerate fasting well and experience significant metabolic benefits. People with obesity (BMI > 30) often see dramatic improvements in insulin sensitivity, weight loss, and metabolic markers with intermittent fasting, though they should start gradually to allow adaptation. Individuals with normal weight (BMI 18.5-24.9) use intermittent fasting more for autophagy, mental clarity, and longevity rather than weight loss. Underweight individuals (BMI < 18.5) should generally avoid intermittent fasting as it may exacerbate nutritional deficiencies and muscle loss. Cultural and religious backgrounds also matter: Muslims practicing Ramadan fasting (sunrise to sunset) demonstrate that humans can adapt to time-restricted eating, though Ramadan includes nighttime eating and may not provide the same metabolic benefits as daily time-restricted feeding. Mediterranean populations with traditional meal patterns already practice a form of time-restricted eating (later breakfast, earlier dinner) that aligns with circadian rhythms. Individual genetic factors, including variations in clock genes, metabolism genes, and hunger hormones, influence how well someone responds to intermittent fasting, highlighting the importance of personalized approaches rather than one-size-fits-all recommendations.`,

    medicalDisclaimer:
      `This intermittent fasting calculator is designed for educational and informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Intermittent fasting is not suitable for everyone and can pose health risks for certain individuals, including those with diabetes, eating disorders, hormonal imbalances, cardiovascular conditions, or those who are pregnant, breastfeeding, or under 18 years of age. The fasting schedule and recommendations provided by this calculator are general guidelines and may not be appropriate for your individual health status, medical history, medications, or lifestyle factors. Before beginning any fasting protocol, you must consult with a qualified healthcare provider, registered dietitian, or physician who can assess your complete health profile and provide personalized guidance. If you experience adverse effects during intermittent fasting, including persistent fatigue, dizziness, extreme hunger, menstrual irregularities, digestive issues, sleep disturbances, mood changes, or any other concerning symptoms, discontinue the practice immediately and seek medical advice. This calculator does not provide medical advice, and the information provided should not be relied upon for making health decisions. Individual results vary significantly, and any health claims about intermittent fasting are based on general research that may not apply to your specific situation. Never disregard professional medical advice or delay seeking treatment based on information from this calculator. The creators of this calculator assume no responsibility for any health consequences resulting from the use of this tool or the practice of intermittent fasting. Your health and safety are paramount—always prioritize professional medical guidance over general information.`,

    faqs: [
      {
        question: 'What is the best intermittent fasting schedule for beginners?',
        answer:
          'The 16:8 method is ideal for beginners because it\'s the easiest to maintain long-term. You fast for 16 hours (including sleep) and eat within an 8-hour window. Most people skip breakfast and eat between 12 PM and 8 PM. This schedule allows your body to adapt gradually while still providing metabolic benefits. Start with 12:12 or 14:10 if 16:8 feels too challenging initially.',
      },
      {
        question: 'Can I drink coffee or tea during fasting?',
        answer:
          'Yes! Black coffee, unsweetened tea, and water are allowed during fasting periods because they contain virtually no calories and won\'t break your fast. In fact, black coffee and green tea can help suppress appetite and may enhance fat burning. However, avoid adding sugar, milk, cream, or any caloric sweeteners. Herbal teas are also excellent choices for staying hydrated during fasting.',
      },
      {
        question: 'Will intermittent fasting slow down my metabolism?',
        answer:
          'No, short-term fasting (16-24 hours) does not slow metabolism. Studies show that intermittent fasting may actually increase metabolic rate by 3.6-14% through increased norepinephrine production. Metabolism slowdown typically only occurs with prolonged calorie restriction over weeks or months, not with time-restricted eating patterns that maintain adequate calorie intake during eating windows.',
      },
      {
        question: 'How long does it take to see results from intermittent fasting?',
        answer:
          'Most people notice initial changes within 2-4 weeks, including increased energy and reduced bloating. Significant weight loss typically becomes noticeable after 4-8 weeks of consistent fasting. Metabolic improvements like better insulin sensitivity can occur within 3-4 weeks. However, results vary based on your starting point, protocol chosen, calorie intake, and lifestyle factors. Patience and consistency are key.',
      },
      {
        question: 'What should I eat during my eating window?',
        answer:
          'Focus on whole, nutrient-dense foods: lean proteins (chicken, fish, tofu), healthy fats (avocado, nuts, olive oil), complex carbohydrates (quinoa, sweet potatoes, whole grains), and plenty of vegetables and fruits. Avoid processed foods, excessive sugar, and refined carbs. The quality of food matters more than the quantity—eating junk food during your eating window will negate the benefits of fasting.',
      },
      {
        question: 'Can women do intermittent fasting safely?',
        answer:
          'Yes, but women should approach fasting more cautiously than men due to hormonal sensitivity. Women may do better with shorter fasting windows (14-15 hours instead of 16-18 hours) and should avoid aggressive protocols like OMAD or alternate-day fasting without medical supervision. Stop fasting if you experience menstrual irregularities, sleep disturbances, or extreme fatigue. Pregnant and breastfeeding women should not fast.',
      },
      {
        question: 'Will I lose muscle mass with intermittent fasting?',
        answer:
          'No, when done correctly with adequate protein intake and resistance training, intermittent fasting preserves muscle mass. In fact, fasting increases growth hormone production, which helps maintain muscle. To prevent muscle loss: consume 1.6-2.2g protein per kg bodyweight during eating windows, continue strength training, and don\'t combine fasting with severe calorie restriction (eat at least maintenance calories for muscle preservation).',
      },
      {
        question: 'What is autophagy and when does it occur?',
        answer:
          'Autophagy is your body\'s cellular "cleanup" process that removes damaged proteins and cell components, promoting cellular renewal and longevity. It typically begins after 12-14 hours of fasting and peaks around 16-24 hours. This is one reason why longer fasting windows (18:6, 20:4) are popular—they maximize autophagy benefits. Autophagy is associated with anti-aging effects, improved brain function, and disease prevention.',
      },
      {
        question: 'Can I exercise while fasting?',
        answer:
          'Yes! Many people exercise in a fasted state and experience enhanced fat burning. Light to moderate cardio and yoga are generally well-tolerated while fasting. For intense workouts or strength training, some people prefer eating beforehand. If you exercise fasted, ensure your first meal after the workout contains adequate protein and carbohydrates for recovery. Listen to your body—if you feel dizzy or weak, eat something.',
      },
      {
        question: 'How do I transition from one protocol to another?',
        answer:
          'Transition gradually to avoid excessive hunger or fatigue. If moving from 16:8 to 18:6, extend your fasting window by 30-60 minutes per week. For example, if you currently eat from 12 PM to 8 PM, shift to 1 PM to 8 PM for a week, then 2 PM to 8 PM the following week. This allows your body to adapt comfortably. When reducing fasting (moving from aggressive to moderate protocols), you can transition more quickly.',
      },
    ],

    references: [
      'Mattson MP, Longo VD, Harvie M. Impact of intermittent fasting on health and disease processes. Ageing Res Rev. 2017;39:46-58.',
      'Patterson RE, Sears DD. Metabolic Effects of Intermittent Fasting. Annu Rev Nutr. 2017;37:371-393.',
      'De Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. N Engl J Med. 2019;381(26):2541-2551.',
      'Sutton EF, Beyl R, Early KS, et al. Early Time-Restricted Feeding Improves Insulin Sensitivity, Blood Pressure, and Oxidative Stress Even without Weight Loss in Men with Prediabetes. Cell Metab. 2018;27(6):1212-1221.',
      'Harvie M, Wright C, Pegington M, et al. The effect of intermittent energy and carbohydrate restriction v. daily energy restriction on weight loss and metabolic disease risk markers in overweight women. Br J Nutr. 2013;110(8):1534-1547.',
      'Anton SD, Moehl K, Donahoo WT, et al. Flipping the Metabolic Switch: Understanding and Applying the Health Benefits of Fasting. Obesity (Silver Spring). 2018;26(2):254-268.',
      'Tinsley GM, La Bounty PM. Effects of intermittent fasting on body composition and clinical health markers in humans. Nutr Rev. 2015;73(10):661-674.',
      'Heilbronn LK, Smith SR, Martin CK, Anton SD, Ravussin E. Alternate-day fasting in nonobese subjects: effects on body weight, body composition, and energy metabolism. Am J Clin Nutr. 2005;81(1):69-73.',
    ],
  },
  tr: {
    whatIs:
      `Aralıklı oruç (Intermittent Fasting - IF), oruç tutma ve yemek yeme dönemleri arasında geçiş yapan bir beslenme modelidir. Ne yediğinize odaklanan geleneksel diyetlerin aksine, aralıklı oruç ne zaman yediğinize odaklanır. Bu yaklaşım 2016'dan bu yana büyük popülerlik kazanmış ve dünya çapında en çok aranan sağlık konularından biri olmaya devam etmektedir. Konsept yeni değildir—insanlar binlerce yıldır, genellikle zorunluluktan veya dini nedenlerle oruç tutmuşlardır. Ancak modern bilim, stratejik orucun kilo kaybı, gelişmiş metabolik sağlık, gelişmiş beyin fonksiyonu ve potansiyel olarak artmış yaşam süresine yol açabilen güçlü metabolik ve hücresel değişiklikleri tetiklediğini ortaya koymuştur. En popüler protokoller arasında 16:8 (16 saat oruç, 8 saatlik pencerede yemek), 18:6, 20:4 (Savaşçı Diyeti), OMAD (Günde Tek Öğün), 5:2 (beş gün normal yemek, iki gün kalori kısıtlama) ve alternatif gün orucu bulunmaktadır. Her protokol farklı faydalar ve zorluklar sunar, bu da aralıklı orucu bireysel yaşam tarzlarına ve hedeflere yüksek oranda uyarlanabilir kılar.`,

    howToCalculate:
      `Aralıklı oruç programınızı hesaplamak, seçtiğiniz protokole ve günlük rutininize göre oruç pencerenizi ve yemek pencerenizi belirlemeyi içerir. Deneyim seviyenize ve hedeflerinize uygun bir oruç protokolü seçerek başlayın. Yeni başlayanlar için 16:8 metodu önerilir—bu, art arda 16 saat oruç tutmak (uyku dahil) ve tüm öğünlerinizi 8 saatlik bir pencere içinde yemek anlamına gelir. Yemek pencerenizi hesaplamak için, uyanma saatinizi, yatma saatinizi, çalışma programınızı ve sosyal taahhütlerinizi göz önünde bulundurun. Örneğin, sabah 7'de uyanıyor ve kahvaltıyı atlamayı tercih ediyorsanız, öğle 12'de yemeye başlayabilir ve son öğününüzü saat 20:00'de bitirebilirsiniz. Bu, 16 saatlik bir oruç (saat 20:00'den ertesi gün 12:00'ye kadar) ve 8 saatlik bir yemek penceresi (12:00'den 20:00'e kadar) oluşturur. Uyku saatleriniz oruç sürenize sayılır, bu da daha uzun oruçlara ulaşmayı kolaylaştırır. Anahtar tutarlılıktır—vücudunuzun adapte olmasına izin vermek için en az 3-4 hafta boyunca aynı yemek penceresini koruyun. 5:2 gibi haftalık protokoller için, beş gün normal yiyecek ve iki ardışık olmayan günde (örn. Pazartesi ve Perşembe) kalorileri 500-600'e kısıtlayacaksınız. Hesaplayıcımız, programınıza göre optimal oruç ve yemek pencerelerini belirlemenize yardımcı olur, öğün zamanlaması önerilerini, otofaji pencerelerini ve kişiselleştirilmiş tavsiyeleri otomatik olarak hesaplar.`,

    formulaDetails:
      `Aralıklı oruç programı hesaplaması, matematiksel formüllerden ziyade zaman yönetimi ilkelerine dayanır. Temel hesaplama şunları içerir: Toplam Günlük Saatler (24) = Oruç Saatleri + Yemek Saatleri. 16:8 gibi günlük protokoller için, oruç için 16 saat ve yemek için 8 saat ayırırsınız. Yemek penceresi başlangıç zamanı, uyanma saatinize bir gecikme (tipik olarak 2-4 saat) eklenerek hesaplanır, bu da vücudunuzun sabah saatlerinde büyüme hormonu ve yağ yakımının yükseldiği aç durumunu korumasına izin verir. Yemek penceresi bitiş zamanı, başlangıç zamanına yemek saatlerini ekleyerek hesaplanır. Örneğin, sabah 7'de uyanma ve 16:8 protokolü ile: Yemek Penceresi Başlangıcı = 7:00 + 2-3 saat = 10:00; Yemek Penceresi Bitişi = 10:00 + 8 saat = 18:00; Oruç Penceresi = 18:00'den 10:00'a (16 saat). OMAD (Günde Tek Öğün) için, yemek penceresi sadece 1 saattir, tipik olarak öğleden sonra veya akşam merkezlidir. Haftalık protokoller (5:2 veya Alternatif Gün) için hesaplama, hangi günlerin oruç günleri (500-600 kalori) ve hangi günlerin normal yemek günleri (2000-2500 kalori) olduğunu belirlemeyi içerir. Otofaji penceresi hesaplaması, otofajinin (hücresel temizlik) yaklaşık 12-14 saatlik oruçta başladığını ve bireysel metabolik faktörlere bağlı olarak 16-24 saatte zirve yaptığını gösteren araştırmalara dayanır. Hesaplayıcımız ayrıca uyku saatleri ile oruç saatleri arasındaki örtüşmeyi maksimize etmek için uyku programınızı dikkate alır, bu da oruç dönemini daha yönetilebilir hale getirir.`,

    categories: [
      {
        range: '16:8',
        label: 'Yeni Başlayanlar İçin',
        description:
          '16 saat oruç, 8 saat içinde yemek. Uzun vadede en sürdürülebilir yaklaşım. Tutarlı enerji seviyeleri ve kademeli yağ kaybı ile günlük rutine uygun.',
        color: '#10B981',
      },
      {
        range: '18:6',
        label: 'Orta Seviye',
        description:
          '18 saat oruç, 6 saat içinde yemek. Gelişmiş otofaji ve metabolik faydalar. Adaptasyon dönemi gerektirir ancak daha derin hücresel yenilenme sunar.',
        color: '#F59E0B',
      },
      {
        range: '20:4',
        label: 'İleri Seviye (Savaşçı)',
        description:
          '20 saat oruç, 4 saat içinde yemek. Maksimum otofaji ile önemli metabolik değişiklikler. Sadece belirli sağlık hedefleri olan deneyimli oruç tutucular için.',
        color: '#F97316',
      },
      {
        range: 'OMAD',
        label: 'Sadece Uzmanlar',
        description:
          'Günde tek öğün (23:1 oranı). Nihai basitlik ancak son derece kısıtlayıcı. Besin ihtiyaçlarını karşılamak zor; tıbbi gözetim önerilir.',
        color: '#EF4444',
      },
      {
        range: '5:2',
        label: 'Haftalık Protokol',
        description:
          '5 gün normal yemek, 2 gün 500-600 kaloriye kısıtlama. Metabolik faydalar sağlarken sosyal programlara uyan esnek yaklaşım.',
        color: '#3B82F6',
      },
      {
        range: 'Alternatif Gün',
        label: 'Agresif Protokol',
        description:
          'Oruç günleri (500 kal) ve normal günler arasında değişim. Hızlı sonuçlar ancak zorlu sürdürülebilirlik. Güçlü disiplin ve planlama gerektirir.',
        color: '#DC2626',
      },
    ],

    interpretation:
      `Aralıklı oruç programınız, katı kurallardan ziyade esnek bir çerçeve olarak yorumlanmalıdır. Hesaplanan yemek ve oruç pencereleri, gününüzü optimal metabolik faydalar için yapılandırmanıza yardımcı olacak kılavuzlar olarak hizmet eder. Oruç penceresi sırasında, vücudunuz birincil yakıt olarak glukoz (şeker) kullanmaktan depolanmış yağı yakmaya geçer, bu metabolik duruma ketoz denir. İnsülin seviyeleri düşer, yağ yakımını kolaylaştırır, aynı zamanda insan büyüme hormonu (HGH) artar, yağ kaybını ve kas kazanımını teşvik eder. Otofaji (hasarlı hücrelerin kaldırılması) dahil hücresel onarım süreçleri, 12-16 saatlik oruçtan sonra aktive olur. Yemek penceresi, temel vitaminler, mineraller, proteinler ve sağlıklı yağlar sağlayan besin açısından zengin tam gıdaları tüketme fırsatınızdır. Yemek penceresi sırasında tüketilen gıdaların kalitesi sonuçları önemli ölçüde etkiler—işlenmiş gıdalar ve aşırı kaloriler yemek, orucun faydalarını olumsuz etkileyebilir. Özellikle ilk 1-2 haftada aşırı açlık, yorgunluk veya sinirlilik hissediyorsanız, bu normaldir çünkü vücudunuz glukoz yakmaktan yağ yakmaya adapte oluyor. Oruç pencerenizi haftada 30-60 dakika kademeli olarak uzatmak geçişi kolaylaştırabilir. Kadınlar, hormonal hassasiyet nedeniyle biraz daha kısa oruç pencerelerine (başlangıçta 14-15 saat) ihtiyaç duyabilir. Baş dönmesi, aşırı yorgunluk, adet düzensizlikleri veya konsantrasyon güçlüğü gibi kalıcı olumsuz etkiler yaşıyorsanız, bir sağlık profesyoneline danışın ve daha az kısıtlayıcı bir protokol düşünün. Aralıklı orucun bir araç olduğunu, bir din olmadığını unutmayın—esneklik ve vücudunuzu dinlemek uzun vadeli başarı için çok önemlidir.`,

    limitations:
      `Aralıklı oruç çok sayıda fayda sunsa da, önemli sınırlamaları vardır ve herkes için uygun değildir. İlk olarak, aralıklı oruç, sağlıksız yeme kalıplarını veya takıntılı gıda davranışlarını tetikleyebileceğinden, yeme bozuklukları geçmişi olan bireyler için önerilmez. Hamile ve emziren kadınlar, artan beslenme talepleri nedeniyle aralıklı oruçtan kaçınmalıdır. Çocuklar ve ergenler (18 yaş altı) hala büyümektedir ve gün boyunca tutarlı beslenmeye ihtiyaç duyarlar. Diyabeti olan insanlar, özellikle insülin veya kan şekerini düşüren ilaçlar kullananlar, tehlikeli hipoglisemiyi önlemek için oruç tutmadan önce sağlık hizmeti sağlayıcılarına danışmalıdır. Kalp hastalığı, böbrek hastalığı dahil kronik rahatsızlıkları olanlar veya gıda alımı gerektiren ilaçlar kullananlar tıbbi onay almalıdır. İkinci olarak, yemek pencereleri sırasında kalori alımı harcamayı aşarsa aralıklı oruç kilo kaybını garanti etmez—kısa bir zaman diliminde aşırı kalori yemek yine de kilo alımına yol açabilir. Üçüncü olarak, vücut adapte oldukça orucun metabolik faydaları 6-12 ay sonra plato yapabilir; periyodik protokol varyasyonları gerekebilir. Dördüncü olarak, sosyal ve kültürel yeme kalıpları oruç programlarıyla çelişebilir, düşünceli bir şekilde yönetilmezse stres veya sosyal izolasyon yaratabilir. Beşinci olarak, bazı insanlar adaptasyonla iyileşmeyen kalıcı açlık, sinirlilik, zayıf konsantrasyon, baş ağrısı, yorgunluk veya uyku bozuklukları dahil olumsuz yan etkiler yaşar. Altıncı olarak, sporcular veya son derece aktif bireyler, kısıtlı yemek pencereleriyle performans ve toparlanmayı sürdürmeyi zor bulabilir, potansiyel olarak değiştirilmiş yaklaşımlar gerektirebilir. Yedinci olarak, aralıklı oruç gıda kalitesini ele almaz—yemek pencereleri sırasında yüksek oranda işlenmiş, besin açısından fakir gıdalar yemek, oruç süresine bakılmaksızın minimum sağlık faydaları sağlar. Son olarak, aralıklı orucun yaşam süresi, kemik yoğunluğu, üreme sağlığı ve diğer uzun vadeli sonuçlar üzerindeki etkilerine dair sınırlı uzun vadeli araştırma (10+ yıl) vardır. Araştırmaların çoğu haftalardan aylara kadar olan dönemlerde yürütülmüştür, hayvan çalışmaları çoğu yaşam süresi verisini sağlamaktadır.`,

    healthRisks:
      `Yanlış uygulandığında veya uygunsuz popülasyonlar tarafından yapıldığında, aralıklı oruç anlaşılması gereken potansiyel sağlık riskleri taşır. Diyabeti olan veya glukoz düşürücü ilaçlar kullanan bireyler için, oruç, baş dönmesi, kafa karışıklığı, bayılma veya daha ciddi komplikasyonlara yol açabilen tehlikeli hipoglisemiye (düşük kan şekeri) neden olabilir. Tiroid bozuklukları veya PKOS dahil hormonal dengesizlikleri olan kadınlar, uzun süreli oruçla kötüleşmiş semptomlar, adet düzensizlikleri veya doğurganlık sorunları yaşayabilir. Bazı kadınlar, hormonal bozulmayı gösteren agresif oruç protokolleriyle amenore (adet kaybı) bildirirler. Yeme bozuklukları geçmişi olan insanlar, "sağlıklı oruç" kisvesi altında kısıtlayıcı yeme kalıplarına, aşırı yeme veya takıntılı gıda davranışlarına geri dönme konusunda önemli bir riskle karşı karşıyadır. Düşük tansiyonu olanlar, oruç dönemlerinde artan baş dönmesi veya bayılma yaşayabilir. Gastroözofageal reflü hastalığı (GERD) olanlar, uzun süreli gıdasız dönemler nedeniyle semptomların kötüleştiğini görebilir. Yemek pencereleri çok kısaysa veya gıda kalitesi düşükse besin eksiklikleri gelişebilir, potansiyel olarak anemiye, zayıflamış bağışıklık fonksiyonuna, zayıf kemik sağlığına ve kas kaybına yol açabilir. Agresif oruç protokolleri (OMAD, alternatif gün orucu), yemek penceresi açıldığında aşırı yeme riskini artırır, sağlıksız şölen-kıtlık döngüleri oluşturur. Kronik stres seviyeleri oruçla artabilir, çünkü uzun süreli oruç kortizolü (stres hormonu) yükseltir, bu da yönetilmezse faydaları olumsuz etkileyebilir. Oruç dönemlerinde su alımı yetersizse dehidrasyon yaygın bir risktir. Bireyler aç yatarsa veya hormonal değişiklikler uyku mimarisini bozarsa uyku kalitesi kötüleşebilir. Sosyal ve psikolojik etkiler arasında öğün zamanlaması etrafında anksiyete, esnek olmayan yemek programları nedeniyle sosyal izolasyon ve artan gıda fiksasyonu veya takıntısı yer alır. Yaşlı bireyler, zaman kısıtlı beslenmeyle hızlandırılmış kas kaybı (sarkopeni) ve besin eksiklikleri riskleriyle karşı karşıyadır. Tüm bu nedenlerle, özellikle önceden var olan sağlık durumları olanlar, ilaç kullananlar veya 65 yaş üstü herkes için aralıklı oruç başlamadan önce tıbbi konsültasyon şiddetle tavsiye edilir.`,

    alternativeMeasures:
      `Aralıklı oruç güçlü bir araç olsa da, birkaç alternatif beslenme modeli ve metabolik müdahale benzer veya tamamlayıcı faydalar sağlayabilir. Günlük tutarlı 10-12 saatlik yemek penceresi koruyan zaman kısıtlı beslenme (TRE), geleneksel aralıklı oruçtan daha nazik bir yaklaşım sunar ve yine de sirkadiyen ritim faydaları ve hafif metabolik iyileştirmeler sağlar. Kalori döngüsü (yüksek ve düşük kalorili günler arasında değişim), katı oruç pencereleri olmadan metabolik esneklik sağlayabilir, bu da onu sosyal olarak daha uyumlu hale getirir. Ketojenik diyet, orucunkine benzer metabolik durumlar (ketoz, yağ yakımı) indükler ancak öğün zamanlaması yerine diyet bileşimi yoluyla, sürekli yemeye izin verir. Üç ayda bir 3-5 günlük su oruçları gibi periyodik oruç, aralıklı orucun günlük taahhüdü olmadan yoğun otofaji ve metabolik sıfırlama sağlar. Protein alımının günlere göre değiştiği protein döngüsü, kalori kısıtlamasından daha iyi kas kütlesini korurken otofajiyi uyarabilir. Karbonhidrat döngüsü (antrenman günlerinde daha yüksek karbonhidrat, dinlenme günlerinde daha düşük), performans için enerjiyi optimize ederken düşük alım dönemlerinde yağ yakımını teşvik eder. Yapılandırılmış orucu çok kısıtlayıcı bulanlar için, zaman pencerelerine değil açlık ve tokluk ipuçlarına odaklanan bilinçli yeme uygulamaları kilo yönetimi ve metabolik sağlık elde edebilir. Egzersiz, özellikle yüksek yoğunluklu aralıklı antrenman (HIIT) ve direnç antrenmanı, gelişmiş insülin duyarlılığı, gelişmiş otofaji, artan büyüme hormonu ve yağ kaybı dahil oruçla örtüşen birçok fayda sağlar—diyet kısıtlamaları gerektirmeden. Soğuk maruziyeti (soğuk duşlar, buz banyoları), oruç gibi benzer hücresel stres yanıtlarını ve metabolik yolları aktive eder. Uyku optimizasyonu (7-9 saat kaliteli uyku), metabolik sağlık, hormonal denge ve uzun ömür için orucdan tartışmasız daha önemlidir. Aralıklı orucu bu yaklaşımlardan herhangi biriyle birleştirmek sinerjik faydalar sağlayabilir, ancak aynı anda çok fazla müdahale yığarak aşırı metabolik stresten kaçınmak çok önemlidir. Profesyonel rehberlikle bireysel deney, benzersiz biyolojiniz ve yaşam tarzınız için optimal yaklaşımı belirlemeye yardımcı olur.`,

    demographicDifferences:
      `Aralıklı oruç, farklı demografik grupları çeşitli şekillerde etkiler, optimal güvenlik ve etkinlik için kişiselleştirilmiş yaklaşımlar gerektirir. Cinsiyet farkları önemlidir: kadınlar genellikle agresif oruçla bozulabilecek daha hassas hormonal sistemlere sahiptir. Araştırmalar, kadınların erkeklere (16-18 saat) kıyasla daha kısa oruç pencerelerinden (14-15 saat) fayda sağlayabileceğini öne sürer, özellikle üreme çağındaki kadınlar. Kadınlar, aşırı oruç protokolleriyle adet düzensizlikleri, doğurganlık sorunları ve hormonal dengesizliklere daha yatkındır. Erkekler genellikle daha uzun oruçları daha iyi tolere eder ve daha az hormonal bozulma yaşayabilir. Yaş kritik bir faktördür: genç yetişkinler (20-40) genellikle aralıklı oruç hızla adapte olur ve güçlü faydalar yaşar. Orta yaşlı yetişkinler (40-60), metabolizma doğal olarak yavaşladıkça kilo yönetimi ve metabolik sağlık için aralıklı orucun oldukça etkili olduğunu görür. Ancak yaşlı bireyler (65+), kısıtlayıcı yeme kalıplarıyla kas kaybı, besin eksiklikleri ve kırılganlık risklerinin artmasıyla karşı karşıyadır—oruç tutuyorlarsa, kas kütlesini korumak için protein alımını ve direnç egzersizini önceliklendirmelidirler. Sporcular ve son derece aktif bireyler dikkatli protokol seçimi gerektirir: dayanıklılık sporcuları, antrenman etrafında karbonhidrat mevcudiyetiyle daha iyi performans gösterebilir, güç sporcuları genellikle aç antrenman yapabilir ancak toparlanma için yeterli protein zamanlamasına ihtiyaç duyar. Sedanter bireyler genellikle oruç iyi tolere eder ve önemli metabolik faydalar yaşar. Obezitesi olan insanlar (BMİ > 30), aralıklı oruçla insülin duyarlılığında, kilo kaybında ve metabolik belirteçlerde genellikle dramatik iyileştirmeler görür, ancak adaptasyona izin vermek için kademeli başlamalıdırlar. Normal kilolu bireyler (BMİ 18.5-24.9), kilo kaybından ziyade daha çok otofaji, zihinsel berraklık ve uzun ömür için aralıklı oruç kullanır. Zayıf bireyler (BMİ < 18.5), besin eksikliklerini ve kas kaybını kötüleştirebileceği için genellikle aralıklı oruçtan kaçınmalıdır. Kültürel ve dini geçmişler de önemlidir: Ramazan orucu tutan Müslümanlar (gün doğumundan gün batımına), insanların zaman kısıtlı beslenmeye adapte olabileceğini gösterir, ancak Ramazan gece yemeği içerir ve günlük zaman kısıtlı beslenme ile aynı metabolik faydaları sağlamayabilir. Geleneksel öğün kalıplarına sahip Akdeniz popülasyonları, sirkadiyen ritimlerle uyumlu bir zaman kısıtlı beslenme biçimi (daha geç kahvaltı, daha erken akşam yemeği) zaten uygular. Saat genleri, metabolizma genleri ve açlık hormonları dahil bireysel genetik faktörler, birinin aralıklı oruç nasıl yanıt verdiğini etkiler, herkese uyan tek yaklaşımlar yerine kişiselleştirilmiş yaklaşımların önemini vurgular.`,

    medicalDisclaimer:
      `Bu aralıklı oruç hesaplayıcısı yalnızca eğitim ve bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine kullanılmamalıdır. Aralıklı oruç herkes için uygun değildir ve diyabet, yeme bozuklukları, hormonal dengesizlikler, kardiyovasküler rahatsızlıklar olanlar veya hamile, emziren veya 18 yaş altı kişiler dahil belirli bireyler için sağlık riskleri oluşturabilir. Bu hesaplayıcı tarafından sağlanan oruç programı ve önerileri genel kılavuzlardır ve bireysel sağlık durumunuz, tıbbi geçmişiniz, ilaçlarınız veya yaşam tarzı faktörleriniz için uygun olmayabilir. Herhangi bir oruç protokolüne başlamadan önce, tam sağlık profilinizi değerlendirebilecek ve kişiselleştirilmiş rehberlik sağlayabilecek nitelikli bir sağlık hizmeti sağlayıcısı, kayıtlı diyetisyen veya doktorla görüşmelisiniz. Aralıklı oruç sırasında kalıcı yorgunluk, baş dönmesi, aşırı açlık, adet düzensizlikleri, sindirim sorunları, uyku bozuklukları, ruh hali değişiklikleri veya diğer endişe verici semptomlar dahil olumsuz etkiler yaşarsanız, uygulamayı derhal durdurun ve tıbbi tavsiye alın. Bu hesaplayıcı tıbbi tavsiye sağlamaz ve sağlanan bilgiler sağlık kararları vermek için güvenilmemelidir. Bireysel sonuçlar önemli ölçüde değişir ve aralıklı oruç hakkındaki sağlık iddiaları, özel durumunuza uygulanmayabilecek genel araştırmalara dayanır. Bu hesaplayıcıdan alınan bilgilere dayanarak profesyonel tıbbi tavsiyeleri asla görmezden gelmeyin veya tedavi aramayı ertelemeyin. Bu hesaplayıcının yaratıcıları, bu aracın kullanımından veya aralıklı oruç uygulamasından kaynaklanan sağlık sonuçlarından sorumluluk kabul etmez. Sağlığınız ve güvenliğiniz çok önemlidir—genel bilgiler yerine her zaman profesyonel tıbbi rehberliği önceliklendirin.`,

    faqs: [
      {
        question: 'Yeni başlayanlar için en iyi aralıklı oruç programı hangisidir?',
        answer:
          '16:8 metodu yeni başlayanlar için idealdir çünkü uzun vadede sürdürmesi en kolaydır. 16 saat oruç tutar (uyku dahil) ve 8 saatlik pencerede yersiniz. Çoğu insan kahvaltıyı atlar ve 12:00-20:00 arası yemek yer. Bu program, metabolik faydalar sağlarken vücudunuzun kademeli olarak adapte olmasına izin verir. 16:8 çok zorlayıcı geliyorsa başlangıçta 12:12 veya 14:10 ile başlayın.',
      },
      {
        question: 'Oruç sırasında kahve veya çay içebilir miyim?',
        answer:
          'Evet! Siyah kahve, şekersiz çay ve su oruç dönemlerinde içilebilir çünkü neredeyse hiç kalori içermezler ve orucunuzu bozmaz. Aslında, siyah kahve ve yeşil çay iştahı bastırmaya yardımcı olabilir ve yağ yakımını artırabilir. Ancak şeker, süt, krema veya herhangi bir kalorili tatlandırıcı eklemekten kaçının. Bitki çayları da oruç sırasında hidrate kalmak için mükemmel seçeneklerdir.',
      },
      {
        question: 'Aralıklı oruç metabolizmamı yavaşlatır mı?',
        answer:
          'Hayır, kısa süreli oruç (16-24 saat) metabolizmayı yavaşlatmaz. Çalışmalar, aralıklı orucun artan norepinefrin üretimi yoluyla metabolizma hızını %3.6-14 artırabileceğini gösteriyor. Metabolizma yavaşlaması tipik olarak yalnızca haftalarca veya aylarca uzun süreli kalori kısıtlaması ile olur, yemek pencereleri sırasında yeterli kalori alımını koruyan zaman kısıtlı beslenme kalıplarıyla değil.',
      },
      {
        question: 'Aralıklı oruçtan ne kadar sürede sonuç alırım?',
        answer:
          'Çoğu insan 2-4 hafta içinde artan enerji ve azalmış şişkinlik gibi ilk değişiklikleri fark eder. Önemli kilo kaybı genellikle 4-8 hafta tutarlı oruçtan sonra fark edilir hale gelir. Daha iyi insülin duyarlılığı gibi metabolik iyileştirmeler 3-4 hafta içinde olabilir. Ancak sonuçlar başlangıç noktanıza, seçilen protokole, kalori alımına ve yaşam tarzı faktörlerine göre değişir. Sabır ve tutarlılık anahtardır.',
      },
      {
        question: 'Yemek penceremde ne yemeliyim?',
        answer:
          'Tam, besin değeri yüksek gıdalara odaklanın: yağsız proteinler (tavuk, balık, tofu), sağlıklı yağlar (avokado, kuruyemiş, zeytinyağı), kompleks karbonhidratlar (kinoa, tatlı patates, tam tahıllar) ve bol sebze ve meyve. İşlenmiş gıdalardan, aşırı şekerden ve rafine karbonhidratlardan kaçının. Gıda kalitesi miktardan daha önemlidir—yemek pencerenizde abur cubur yemek orucun faydalarını olumsuz etkiler.',
      },
      {
        question: 'Kadınlar aralıklı orucu güvenle yapabilir mi?',
        answer:
          'Evet, ancak kadınlar hormonal hassasiyet nedeniyle erkeklere göre oruç konusunda daha dikkatli olmalıdır. Kadınlar daha kısa oruç pencereleriyle (16-18 saat yerine 14-15 saat) daha iyi yapabilir ve tıbbi gözetim olmadan OMAD veya alternatif gün orucu gibi agresif protokollerden kaçınmalıdır. Adet düzensizlikleri, uyku bozuklukları veya aşırı yorgunluk yaşarsanız orucu durdurun. Hamile ve emziren kadınlar oruç tutmamalıdır.',
      },
      {
        question: 'Aralıklı oruçla kas kaybı yaşar mıyım?',
        answer:
          'Hayır, yeterli protein alımı ve direnç antrenmanıyla doğru yapıldığında aralıklı oruç kas kütlesini korur. Aslında, oruç büyüme hormonu üretimini artırır, bu da kasın korunmasına yardımcı olur. Kas kaybını önlemek için: yemek pencereleri sırasında vücut ağırlığı kg başına 1.6-2.2g protein tüketin, kuvvet antrenmanına devam edin ve orucu şiddetli kalori kısıtlamasıyla birleştirmeyin (kas koruması için en az bakım kalorilerinde yiyin).',
      },
      {
        question: 'Otofaji nedir ve ne zaman olur?',
        answer:
          'Otofaji, hasarlı proteinleri ve hücre bileşenlerini kaldıran, hücresel yenilenmeyi ve uzun ömrü teşvik eden vücudunuzun hücresel "temizlik" sürecidir. Tipik olarak 12-14 saatlik oruçtan sonra başlar ve yaklaşık 16-24 saatte zirve yapar. Bu, daha uzun oruç pencerelerinin (18:6, 20:4) popüler olmasının bir nedenidir—otofaji faydalarını maksimize ederler. Otofaji yaşlanma karşıtı etkiler, gelişmiş beyin fonksiyonu ve hastalık önleme ile ilişkilidir.',
      },
      {
        question: 'Oruçluyken egzersiz yapabilir miyim?',
        answer:
          'Evet! Birçok insan aç halde egzersiz yapar ve gelişmiş yağ yakımı yaşar. Hafif ila orta derecede kardio ve yoga genellikle oruçluyken iyi tolere edilir. Yoğun antrenmanlar veya kuvvet antrenmanı için, bazı insanlar önceden yemek yemeyi tercih eder. Aç egzersiz yaparsanız, antrenmandan sonraki ilk öğününüzün toparlanma için yeterli protein ve karbonhidrat içerdiğinden emin olun. Vücudunuzu dinleyin—baş dönmesi veya halsizlik hissederseniz bir şeyler yiyin.',
      },
      {
        question: 'Bir protokolden diğerine nasıl geçiş yaparım?',
        answer:
          'Aşırı açlık veya yorgunluktan kaçınmak için kademeli olarak geçiş yapın. 16:8\'den 18:6\'ya geçiyorsanız, oruç pencerenizi haftada 30-60 dakika uzatın. Örneğin, şu anda 12:00-20:00 arası yiyorsanız, bir hafta için 13:00-20:00\'e geçin, sonraki hafta 14:00-20:00\'e geçin. Bu, vücudunuzun rahatça adapte olmasını sağlar. Oruç azaltırken (agresiften orta protokollere geçerken), daha hızlı geçiş yapabilirsiniz.',
      },
    ],

    references: [
      'Mattson MP, Longo VD, Harvie M. Sağlık ve hastalık süreçleri üzerinde aralıklı orucun etkisi. Ageing Res Rev. 2017;39:46-58.',
      'Patterson RE, Sears DD. Aralıklı Orucun Metabolik Etkileri. Annu Rev Nutr. 2017;37:371-393.',
      'De Cabo R, Mattson MP. Sağlık, Yaşlanma ve Hastalık Üzerinde Aralıklı Orucun Etkileri. N Engl J Med. 2019;381(26):2541-2551.',
      'Sutton EF, Beyl R, Early KS, et al. Erken Zaman Kısıtlı Beslenme, Prediyabetli Erkeklerde Kilo Kaybı Olmadan Bile İnsülin Duyarlılığını, Kan Basıncını ve Oksidatif Stresi İyileştirir. Cell Metab. 2018;27(6):1212-1221.',
      'Harvie M, Wright C, Pegington M, et al. Fazla kilolu kadınlarda aralıklı enerji ve karbonhidrat kısıtlamasının günlük enerji kısıtlamasına karşı kilo kaybı ve metabolik hastalık risk belirteçleri üzerindeki etkisi. Br J Nutr. 2013;110(8):1534-1547.',
      'Anton SD, Moehl K, Donahoo WT, et al. Metabolik Anahtarı Çevirmek: Orucun Sağlık Faydalarını Anlamak ve Uygulamak. Obesity (Silver Spring). 2018;26(2):254-268.',
      'Tinsley GM, La Bounty PM. İnsanlarda vücut bileşimi ve klinik sağlık belirteçleri üzerinde aralıklı orucun etkileri. Nutr Rev. 2015;73(10):661-674.',
      'Heilbronn LK, Smith SR, Martin CK, Anton SD, Ravussin E. Obez olmayan bireylerde alternatif gün orucu: vücut ağırlığı, vücut bileşimi ve enerji metabolizması üzerindeki etkiler. Am J Clin Nutr. 2005;81(1):69-73.',
    ],
  },
};
