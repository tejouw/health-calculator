import { CalculatorContent } from '@/types/calculator';

export const menopauseContent: CalculatorContent = {
  en: {
    whatIs:
      'Menopause is the natural biological stage that marks the permanent end of menstrual cycles and reproductive fertility in women. Clinically, menopause is defined as the point in time when a woman has gone 12 consecutive months without a menstrual period, due to the natural decline of ovarian hormone production (primarily estrogen and progesterone). The average age of natural menopause worldwide is around 51 years, though it can occur anywhere between 45 and 55 for most women. Menopause is not a single event but the final stop of a longer transition called perimenopause, which can last 4 to 10 years. A menopause calculator estimates when menopause is likely to occur based on well-studied factors such as genetics (especially the mother\'s menopause age), smoking status, body mass index (BMI), age at first menstruation, number of pregnancies and family history of early ovarian insufficiency. While no tool can predict the exact day menopause will occur, an estimation based on these variables gives a realistic age window and helps women plan their long-term health around it.',

    howToCalculate:
      'To use the menopause calculator, first enter your current age. Then add any known factors that influence menopause timing: your mother\'s age at menopause (a strong genetic predictor), your smoking status (current, former or never), your BMI if known, your age at first period (menarche), how many full-term pregnancies you have had and whether you have used oral contraceptives for an extended period. Finally, indicate whether there is a family history of early menopause. The calculator starts from a population baseline of 51 years, then weights your inputs using evidence from reproductive epidemiology. Heredity is given the strongest weight because studies show that genetic factors explain a significant portion of the variance in menopause age. Smoking shifts the estimate earlier, higher BMI slightly later, and early menarche earlier. The final output is an estimated age, a plausible range around that age, the number of years remaining and your likely current menopause stage.',

    formulaDetails:
      'The calculator is based on a weighted additive model: Estimated Menopause Age = Baseline Age (51) combined with a mother-weighted genetic adjustment, plus or minus lifestyle modifiers. When the mother\'s menopause age is provided, the baseline is recalculated as 30% population average + 70% mother\'s age, reflecting the high heritability (approximately 0.4 to 0.7 in twin studies). Current smokers lose about 1.5 to 2 years from the estimate because toxins in tobacco accelerate follicular depletion. Former smokers lose a smaller amount. Low BMI (<18.5) subtracts about 1 year because very low body fat reduces peripheral estrogen production, while BMI above 30 adds a small amount due to higher estrogen levels from adipose tissue. Early menarche (under 12) is associated with slightly earlier menopause, while late menarche (over 14) is linked with later menopause. Never having been pregnant is associated with earlier menopause, while three or more full-term pregnancies are linked with later menopause. Extended oral contraceptive use (more than 5 years) is associated with a modest delay. A family history of premature ovarian insufficiency subtracts about 2 years. The final estimate is clamped to a physiologically plausible range of 40 to 58 and displayed with an uncertainty band of ±2.5 years to reflect the natural variability between individuals.',

    interpretation:
      'The result should be interpreted as an estimation window, not a fixed date. The central value is your most likely menopause age based on population research, and the ±2.5 year range captures the natural individual variation that no model can remove. If the calculator places you in the premenopausal stage, you still have time to focus on preventive health habits that make the transition smoother, such as weight-bearing exercise for bone density, a calcium- and vitamin D-rich diet, smoking cessation and stress management. If the calculator suggests you are in the late reproductive or perimenopausal stage, you may already be experiencing subtle hormonal changes such as shorter or irregular cycles, mood fluctuations, sleep disturbances or occasional hot flashes. A calculator cannot diagnose menopause. The medical definition still requires 12 consecutive months without a period, confirmed by your doctor. Blood tests such as FSH (follicle-stimulating hormone) and estradiol can help clarify where you are in the transition, especially when symptoms are confusing or premature.',

    limitations:
      'This calculator is a screening and educational tool, not a clinical diagnostic instrument. It relies on population-level statistical associations, which means the estimate becomes less accurate for women whose personal biology is far from the average. Several important limitations apply. First, ethnicity matters: African, Hispanic and some Asian populations have been shown in large studies (such as SWAN) to reach menopause at slightly different average ages, but the calculator does not yet adjust for every ethnic group. Second, medical and surgical factors dramatically change timing. A hysterectomy with ovarian removal causes immediate surgical menopause, while certain chemotherapy or radiation treatments can induce medical menopause at any age. These situations are not captured by a lifestyle calculator. Third, autoimmune diseases, chromosomal conditions (such as Turner syndrome or Fragile X premutation) and thyroid dysfunction can cause primary ovarian insufficiency well before 40, which cannot be reliably predicted here. Fourth, mother\'s menopause age is a powerful but imperfect predictor; in some families the correlation is weaker than average. Finally, the model does not include environmental exposures (endocrine disruptors, air pollution) or socioeconomic factors that modern research increasingly links to reproductive aging. For any decision involving fertility, hormone therapy or symptom treatment, always consult a gynecologist or menopause specialist.',

    healthRisks:
      'The years around menopause bring important long-term health considerations driven mainly by the decline in estrogen. Bone loss accelerates significantly in the first 5 to 7 years after the final period; women can lose up to 20% of their bone density during this window, increasing the risk of osteoporosis and fragility fractures, especially of the hip and spine. Cardiovascular disease risk rises as estrogen\'s protective effect fades: cholesterol profiles often shift unfavorably, blood pressure can increase and arterial stiffness grows. Heart disease becomes the leading cause of death in postmenopausal women. Metabolic changes include a tendency toward increased abdominal fat, insulin resistance and higher risk of type 2 diabetes. Genitourinary symptoms such as vaginal dryness, urinary frequency and recurrent urinary infections are common and underreported. Mood disorders, anxiety and insomnia are more frequent during perimenopause, partly due to hormone fluctuations and partly to sleep disruption from hot flashes. Cognitive complaints (the so-called "brain fog") usually improve after the transition. Early menopause (before 45) and premature ovarian insufficiency (before 40) are associated with higher risks of osteoporosis, cardiovascular disease and all-cause mortality, which is why early detection and discussion of hormone replacement therapy with a specialist is particularly important in those cases.',

    alternativeMeasures:
      'Because no single calculator can tell you exactly when menopause will occur, doctors combine several complementary approaches. Symptom tracking is the most practical one: keeping a log of menstrual cycle length, bleeding changes, hot flashes, sleep quality and mood helps identify the onset of perimenopause. The STRAW+10 staging system (Stages of Reproductive Aging Workshop) is the clinical gold standard for classifying reproductive stage based on cycle regularity, follicle count and hormone levels. Laboratory tests provide additional context: follicle-stimulating hormone (FSH) tends to rise as ovaries become less responsive, estradiol fluctuates and then declines, and anti-Müllerian hormone (AMH) is a strong marker of ovarian reserve, especially useful in women under 40 considering fertility. Antral follicle count by transvaginal ultrasound is another ovarian reserve marker. For women concerned about premature ovarian insufficiency, additional screening may include thyroid tests, prolactin, karyotype and Fragile X screening. Combining a menopause calculator with symptom tracking and selective laboratory testing gives the most accurate picture of where you are in the reproductive timeline.',

    demographicDifferences:
      'Menopause timing varies notably across populations. Large cohort studies show that the average age of natural menopause is around 51 in White women of European descent, slightly earlier (about 49 to 50) in Hispanic and African American women, and slightly later in Japanese women (about 51 to 52). These differences reflect genetics, body composition, smoking prevalence, reproductive history and socioeconomic factors. Early menopause (before 45) affects about 5% of women, and premature ovarian insufficiency (before 40) affects about 1%. Risk factors for early menopause include smoking, very low BMI, never having been pregnant, certain autoimmune conditions and a family history of early menopause. Women who undergo chemotherapy or pelvic radiation in their reproductive years can experience treatment-induced menopause at any age. Surgical menopause, caused by bilateral oophorectomy (removal of both ovaries), occurs abruptly and is often more symptomatic because hormone levels drop suddenly rather than gradually. Understanding these differences is important for individualizing screening, bone health strategies and cardiovascular prevention.',

    medicalDisclaimer:
      'This menopause calculator is designed for educational and informational purposes only. It provides a statistical estimate based on population averages and should not be used as a substitute for professional medical advice, diagnosis or treatment. The estimated menopause age is an approximation; your actual menopause may occur earlier or later. If you are experiencing symptoms such as irregular periods, hot flashes, sleep problems, mood changes or vaginal dryness, if you are under 45 and think you may be entering early menopause, or if you have concerns about fertility, bone health or hormone therapy, please consult a qualified gynecologist or menopause specialist. Do not start or stop any hormone therapy, supplement or medication based solely on the output of this calculator. For accurate diagnosis your doctor may use physical examination, cycle history, blood tests (FSH, estradiol, AMH, TSH) and imaging.',

    references: [
      'Harlow SD, et al. Executive summary of the Stages of Reproductive Aging Workshop +10 (STRAW+10). J Clin Endocrinol Metab. 2012;97(4):1159-1168.',
      'InterLACE Study Consortium. Variations in reproductive events across life: a pooled analysis of data from 505,147 women across 10 countries. Hum Reprod. 2019;34(5):881-893.',
      'Mishra GD, et al. Early menarche, nulliparity and the risk of premature and early natural menopause. Hum Reprod. 2017;32(3):679-686.',
      'Gold EB, et al. Factors associated with age at natural menopause in a multiethnic sample of midlife women. Am J Epidemiol. 2001;153(9):865-874.',
      'Sun L, et al. Meta-analysis suggests that smoking is associated with an increased risk of early natural menopause. Menopause. 2012;19(2):126-132.',
      'North American Menopause Society (NAMS) - Menopause Practice: A Clinician\'s Guide, 6th ed.',
      'World Health Organization (WHO) - Research on the Menopause in the 1990s.',
    ],

    tips: [
      'Track your menstrual cycle length, bleeding patterns and symptoms monthly once you are over 40 to spot perimenopause early',
      'Do not smoke - smoking consistently shifts menopause 1 to 2 years earlier and worsens vasomotor symptoms like hot flashes',
      'Maintain a healthy body weight; both very low and very high BMI can affect hormonal balance and symptom severity',
      'Get 1000 to 1200 mg of calcium and 800 to 1000 IU of vitamin D daily from food and supplements to protect bones',
      'Perform weight-bearing exercise (walking, jogging, strength training) at least 3 times per week to slow bone loss',
      'Prioritize sleep hygiene, stress management and mindfulness; they reduce the intensity of perimenopausal symptoms',
      'Schedule annual check-ups including blood pressure, cholesterol, blood glucose and bone density screening as recommended',
      'Discuss hormone therapy options with a menopause specialist if symptoms significantly affect your quality of life',
      'Do not ignore heavy, unusually long or post-menopausal bleeding - always have it evaluated by a gynecologist',
    ],

    faqs: [
      {
        question: 'At what age does menopause usually start?',
        answer:
          'The average age of natural menopause is around 51 years worldwide, with most women reaching it between 45 and 55. Menopause before 45 is considered early, and before 40 is called premature ovarian insufficiency. The transition called perimenopause can begin up to 10 years earlier and is when most symptoms appear.',
      },
      {
        question: 'Can a menopause calculator predict my exact menopause age?',
        answer:
          'No calculator can predict the exact age or date. This tool gives a statistical estimate based on well-established factors such as family history, smoking, BMI, menarche age and reproductive history. It provides a likely age range (±2.5 years), not a precise date. Only time and a 12-month absence of periods can confirm menopause.',
      },
      {
        question: 'Is my mother\'s menopause age a good predictor for mine?',
        answer:
          'Yes, it is one of the strongest single predictors. Twin and family studies suggest that genetics explain 40 to 70 percent of the variation in menopause age, and a daughter\'s menopause often occurs within a few years of her mother\'s. However, lifestyle and health factors can shift the actual age earlier or later.',
      },
      {
        question: 'Does smoking really make menopause earlier?',
        answer:
          'Yes. Large studies consistently show that current smokers reach menopause 1 to 2 years earlier than non-smokers, and heavier smoking is associated with greater effects. Toxins in tobacco smoke accelerate follicular depletion in the ovaries. Stopping smoking can partly reverse this effect, which is one more reason to quit.',
      },
      {
        question: 'What is the difference between perimenopause and menopause?',
        answer:
          'Perimenopause is the transition phase, often lasting 4 to 10 years, when hormone levels fluctuate and symptoms begin - irregular cycles, hot flashes, mood changes and sleep issues. Menopause is the single point after 12 consecutive months without a period. Postmenopause is the rest of life after that point.',
      },
      {
        question: 'What are the most common symptoms of perimenopause and menopause?',
        answer:
          'Typical symptoms include irregular periods, hot flashes, night sweats, sleep disturbances, mood changes, anxiety, brain fog, vaginal dryness, decreased libido, joint aches and weight changes. Severity varies greatly between women. About 20 percent have mild or no symptoms, while others need medical support.',
      },
      {
        question: 'Should I take hormone replacement therapy (HRT)?',
        answer:
          'HRT is effective for moderate to severe symptoms and for bone protection in the right candidates. The decision depends on your symptoms, age at menopause, personal and family medical history and risk profile. Modern menopause guidelines consider HRT safe for most healthy women under 60 or within 10 years of menopause, but the choice should always be made with a qualified doctor.',
      },
    ],
  },
  tr: {
    whatIs:
      'Menopoz, kadınlarda adet döngülerinin ve üreme yeteneğinin kalıcı olarak sona erdiği doğal biyolojik bir dönemdir. Tıbbi olarak menopoz, yumurtalık hormonlarının (başta östrojen ve progesteron) doğal olarak azalması sonucu kadının art arda 12 ay adet görmemesi durumunda tanı alır. Dünya genelinde doğal menopoz yaşı ortalama 51 civarındadır; ancak kadınların çoğunda 45 ile 55 yaş arasında herhangi bir zamanda gerçekleşebilir. Menopoz tek bir an değil, perimenopoz adı verilen ve 4 ila 10 yıl sürebilen daha uzun bir geçiş sürecinin son durağıdır. Menopoz hesaplama aracı, bu geçişin ne zaman olabileceğini bilimsel olarak iyi çalışılmış faktörlere göre tahmin eder: genetik (özellikle annenin menopoz yaşı), sigara kullanımı, vücut kitle indeksi (VKİ), ilk adet yaşı, toplam hamilelik sayısı ve ailede erken yumurtalık yetmezliği öyküsü. Hiçbir araç menopozun tam gününü söyleyemez, ancak bu değişkenlere dayalı bir tahmin, gerçekçi bir yaş aralığı sunar ve kadınların uzun vadeli sağlıklarını planlamasına yardımcı olur.',

    howToCalculate:
      'Menopoz hesaplayıcıyı kullanmak için önce mevcut yaşınızı girin. Ardından menopoz zamanlamasını etkileyen bilinen faktörleri ekleyin: annenizin menopoz yaşı (en güçlü genetik belirleyici), sigara kullanım durumunuz (aktif, eski veya hiç), biliniyorsa VKİ değeriniz, ilk adet (menarş) yaşınız, kaç tam hamilelik geçirdiğiniz ve uzun süre doğum kontrol hapı kullanıp kullanmadığınız. Son olarak ailede erken menopoz öyküsü olup olmadığını belirtin. Hesaplayıcı 51 yaşlık nüfus ortalamasından başlar ve ardından üreme epidemiyolojisi kanıtlarına göre bu değerleri ağırlıklandırır. Genetiğe en yüksek ağırlık verilir, çünkü çalışmalar menopoz yaşındaki değişkenliğin büyük bölümünün kalıtsal faktörlerle açıklandığını göstermektedir. Sigara tahmini erkene çeker, yüksek VKİ hafifçe ileri alır, erken menarş ise erkene kaydırır. Çıktı olarak tahmini menopoz yaşı, bu yaş etrafındaki olası aralık, kalan yıl sayısı ve büyük olasılıkla içinde bulunduğunuz menopoz dönemi gösterilir.',

    formulaDetails:
      'Hesaplayıcı, ağırlıklı toplamsal bir modele dayanır: Tahmini Menopoz Yaşı = Temel Yaş (51) + anneye göre ağırlıklı genetik düzeltme ± yaşam tarzı düzeltmeleri. Annenin menopoz yaşı girildiğinde temel değer %30 nüfus ortalaması + %70 anne yaşı olarak yeniden hesaplanır; bu, ikiz çalışmalarında yaklaşık 0.4 ile 0.7 arasında bulunan yüksek kalıtsallığı yansıtır. Aktif sigara içenlerde tahminden yaklaşık 1.5 ila 2 yıl düşülür; çünkü tütündeki toksinler yumurtalıklardaki folikül kaybını hızlandırır. Eski sigara içenlerde bu etki daha küçüktür. Düşük VKİ (<18.5) yaklaşık 1 yıl düşürür; çünkü çok düşük yağ dokusu çevresel östrojen üretimini azaltır. VKİ 30 üzerindeki kadınlarda ise yağ dokusunun ürettiği östrojen nedeniyle tahmin hafifçe artar. Erken menarş (12 yaş altı) erken menopozla ilişkilendirilir; geç menarş (14 yaş üstü) daha geç menopozla bağlantılıdır. Hiç hamile kalmamış olmak erken menopozla, üç ve üzeri tam hamilelik ise daha geç menopozla ilişkilidir. 5 yıldan uzun doğum kontrol hapı kullanımı hafif bir gecikmeyle ilişkilendirilir. Ailede erken yumurtalık yetmezliği öyküsü yaklaşık 2 yıl düşürür. Son tahmin fizyolojik olarak makul olan 40-58 aralığında sınırlandırılır ve bireyler arası doğal değişkenliği yansıtan ±2.5 yıllık belirsizlik bandıyla sunulur.',

    interpretation:
      'Sonuç, kesin bir tarih olarak değil, bir tahmin aralığı olarak yorumlanmalıdır. Merkezi değer, nüfus araştırmalarına göre büyük olasılıkla gerçekleşecek menopoz yaşınızdır; ±2.5 yıllık aralık ise hiçbir modelin kaldıramayacağı doğal bireysel değişkenliği temsil eder. Eğer hesaplayıcı sizi premenopoz döneminde gösteriyorsa, geçişi yumuşatacak önleyici sağlık alışkanlıklarına odaklanmak için hâlâ zamanınız var: kemik yoğunluğu için ağırlık taşıyan egzersiz, kalsiyum ve D vitamininden zengin beslenme, sigara bırakma ve stres yönetimi önemlidir. Eğer sonuç geç üreme dönemi veya perimenopoza işaret ediyorsa, kısalmış ya da düzensiz döngüler, ruh hali dalgalanmaları, uyku sorunları veya zaman zaman sıcak basmaları gibi belirtileri zaten yaşıyor olabilirsiniz. Bir hesaplayıcı menopoz tanısı koyamaz. Tıbbi tanı hâlâ art arda 12 ay adet görmeme durumunu gerektirir ve doktor tarafından doğrulanır. FSH (folikül uyarıcı hormon) ve estradiol gibi kan testleri, özellikle belirtiler kafa karıştırıcı veya erken ise dönemin netleştirilmesine yardımcı olur.',

    limitations:
      'Bu hesaplayıcı bir tarama ve eğitim aracıdır; klinik tanı cihazı değildir. Nüfus düzeyindeki istatistiksel ilişkilere dayandığı için kişisel biyolojisi ortalamadan uzak kadınlarda doğruluğu azalır. Birkaç önemli sınırlaması vardır. Birincisi, etnik köken önemlidir: SWAN gibi büyük çalışmalar Afrika, Latin ve bazı Asya kökenli kadınlarda menopoz yaşının hafif farklı olduğunu göstermiştir, ancak hesaplayıcı her etnik grup için ayrı düzeltme yapmaz. İkincisi, tıbbi ve cerrahi faktörler zamanlamayı kökten değiştirir. Yumurtalıkların alındığı histerektomi anında cerrahi menopoza neden olur; bazı kemoterapi veya radyoterapi tedavileri ise herhangi bir yaşta tıbbi menopoz başlatabilir. Bu durumlar bir yaşam tarzı hesaplayıcısı tarafından yakalanamaz. Üçüncüsü, otoimmün hastalıklar, kromozomal durumlar (Turner sendromu veya Frajil X premutasyonu gibi) ve tiroid fonksiyon bozukluğu 40 yaşından önce erken yumurtalık yetmezliğine yol açabilir ve bu model ile güvenilir şekilde tahmin edilemez. Dördüncüsü, annenin menopoz yaşı güçlü ama kusursuz olmayan bir belirteçtir; bazı ailelerde bu ilişki daha zayıftır. Son olarak model, modern araştırmaların üreme yaşlanmasıyla giderek daha çok ilişkilendirdiği çevresel maruziyetleri (endokrin bozucular, hava kirliliği) ve sosyoekonomik faktörleri içermez. Doğurganlık, hormon tedavisi veya belirti tedavisiyle ilgili her karar için mutlaka bir jinekolog veya menopoz uzmanına danışın.',

    healthRisks:
      'Menopoz çevresindeki yıllar, başta östrojenin azalmasından kaynaklanan uzun vadeli sağlık sorunlarını da beraberinde getirir. Son adet sonrası ilk 5-7 yılda kemik kaybı belirgin şekilde hızlanır; bu dönemde kadınlar kemik yoğunluklarının %20 kadarını kaybedebilir, osteoporoz ve kırık riski (özellikle kalça ve omurga) artar. Östrojenin koruyucu etkisi azalırken kalp-damar hastalıkları riski yükselir: kolesterol profili olumsuz yönde değişebilir, kan basıncı yükselebilir ve damar sertliği artar. Kalp hastalığı postmenopozdaki kadınlarda en sık ölüm nedeni olur. Metabolik değişiklikler arasında karın bölgesinde yağlanma eğilimi, insülin direnci ve tip 2 diyabet riskinde artış bulunur. Vajinal kuruluk, idrar sıklığında artış ve tekrarlayan idrar yolu enfeksiyonları gibi ürogenital belirtiler sık görülür ancak genellikle az bildirilir. Ruh hali bozuklukları, kaygı ve uykusuzluk perimenopoz döneminde daha sıktır; hem hormon dalgalanmaları hem de sıcak basmalarının neden olduğu uyku bölünmesi bunda etkilidir. Bilişsel yakınmalar (yaygın adıyla "beyin sisi") genellikle geçişten sonra düzelir. Erken menopoz (45 yaş öncesi) ve prematüre yumurtalık yetmezliği (40 yaş öncesi), osteoporoz, kalp hastalığı ve tüm nedenlere bağlı ölüm riskinin artmasıyla ilişkilidir; bu nedenle bu durumlarda erken tanı ve uzman ile hormon tedavisi görüşmesi özellikle önemlidir.',

    alternativeMeasures:
      'Hiçbir hesaplayıcı menopozun tam ne zaman olacağını söyleyemediği için doktorlar birkaç tamamlayıcı yaklaşımı birlikte kullanır. En pratiği belirti takibidir: adet döngüsü uzunluğu, kanama değişiklikleri, sıcak basmaları, uyku kalitesi ve ruh halinin bir günlükte izlenmesi perimenopozun başlangıcını saptamaya yardımcı olur. STRAW+10 evreleme sistemi (Üreme Yaşlanması Çalıştayı), döngü düzenliliği, folikül sayısı ve hormon seviyelerine göre üreme dönemini sınıflandırmak için klinik altın standarttır. Laboratuvar testleri ek bilgi sağlar: yumurtalıklar daha az yanıt verdikçe FSH (folikül uyarıcı hormon) yükselir, estradiol dalgalanır ve sonra düşer, anti-Müllerian hormon (AMH) ise özellikle 40 yaş altındaki kadınlarda yumurtalık rezervinin güçlü bir göstergesidir. Transvajinal ultrasonla antral folikül sayımı bir başka rezerv ölçütüdür. Prematüre yumurtalık yetmezliğinden şüphelenilen kadınlarda tiroid testleri, prolaktin, karyotip ve Frajil X taraması da eklenebilir. Menopoz hesaplayıcısını belirti takibi ve seçilmiş laboratuvar testleriyle birleştirmek, üreme zaman çizelgesinde nerede olduğunuza dair en doğru görüntüyü verir.',

    demographicDifferences:
      'Menopoz zamanlaması toplumlar arasında belirgin farklılıklar gösterir. Büyük kohort çalışmalarına göre doğal menopoz yaşı Avrupa kökenli beyaz kadınlarda ortalama 51, Latin ve Afrika kökenli Amerikalı kadınlarda biraz daha erken (yaklaşık 49-50), Japon kadınlarda ise hafifçe daha geçtir (51-52). Bu farklılıklar genetiği, vücut kompozisyonunu, sigara prevalansını, üreme geçmişini ve sosyoekonomik faktörleri yansıtır. Erken menopoz (45 yaş öncesi) kadınların yaklaşık %5\'ini, prematüre yumurtalık yetmezliği (40 yaş öncesi) ise yaklaşık %1\'ini etkiler. Erken menopoz için risk faktörleri arasında sigara kullanımı, çok düşük VKİ, hiç hamile kalmamış olma, bazı otoimmün hastalıklar ve ailede erken menopoz öyküsü yer alır. Üreme çağında kemoterapi veya pelvik radyoterapi alan kadınlarda tedaviye bağlı menopoz her yaşta görülebilir. Her iki yumurtalığın alınmasıyla oluşan cerrahi menopoz ani gerçekleşir ve genellikle belirtileri daha şiddetli olur, çünkü hormon düzeyleri kademeli değil birdenbire düşer. Bu farklılıkların anlaşılması, taramayı, kemik sağlığı stratejilerini ve kalp-damar korumasını kişiselleştirmek açısından önemlidir.',

    medicalDisclaimer:
      'Bu menopoz hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Nüfus ortalamalarına dayalı istatistiksel bir tahmin sunar ve profesyonel tıbbi tavsiye, tanı veya tedavinin yerine kullanılmamalıdır. Tahmini menopoz yaşı yaklaşıktır; gerçek menopozunuz daha erken ya da daha geç olabilir. Düzensiz adet, sıcak basmaları, uyku sorunları, ruh hali değişiklikleri veya vajinal kuruluk gibi belirtiler yaşıyorsanız, 45 yaş altındaysanız ve erken menopoz şüpheniz varsa ya da doğurganlık, kemik sağlığı veya hormon tedavisi hakkında endişeleriniz varsa lütfen bir jinekolog veya menopoz uzmanına danışın. Yalnızca bu hesaplayıcının çıktısına dayanarak hormon tedavisi, takviye veya ilaç başlatmayın veya kesmeyin. Doktorunuz tanı için fizik muayene, döngü geçmişi, kan testleri (FSH, estradiol, AMH, TSH) ve görüntüleme yöntemlerini kullanabilir.',

    references: [
      'Harlow SD, ve ark. Üreme Yaşlanması Çalıştayı +10 (STRAW+10) Yönetici Özeti. J Clin Endocrinol Metab. 2012;97(4):1159-1168.',
      'InterLACE Çalışma Konsorsiyumu. Yaşam boyunca üreme olaylarındaki değişiklikler: 10 ülkeden 505.147 kadının havuzlanmış analizi. Hum Reprod. 2019;34(5):881-893.',
      'Mishra GD, ve ark. Erken menarş, hiç doğum yapmamış olma ve prematüre-erken doğal menopoz riski. Hum Reprod. 2017;32(3):679-686.',
      'Gold EB, ve ark. Çok etnik orta yaş kadın örnekleminde doğal menopoz yaşı ile ilişkili faktörler. Am J Epidemiol. 2001;153(9):865-874.',
      'Sun L, ve ark. Sigara kullanımının erken doğal menopoz riskiyle ilişkisi: meta-analiz. Menopause. 2012;19(2):126-132.',
      'Kuzey Amerika Menopoz Derneği (NAMS) - Menopoz Uygulama Kılavuzu, 6. Baskı.',
      'Dünya Sağlık Örgütü (WHO) - 1990\'larda Menopoz Araştırmaları.',
    ],

    tips: [
      '40 yaş üstüyseniz perimenopozu erken fark etmek için döngü uzunluğunuzu, kanama düzenini ve belirtilerinizi aylık olarak kaydedin',
      'Sigara içmeyin - sigara menopozu sürekli olarak 1-2 yıl erkene çeker ve sıcak basması gibi belirtileri şiddetlendirir',
      'Sağlıklı kiloyu koruyun; hem çok düşük hem de çok yüksek VKİ hormonal dengeyi ve belirti şiddetini etkileyebilir',
      'Kemikleri korumak için günlük 1000-1200 mg kalsiyum ve 800-1000 IU D vitamini alın; gıda ve takviyelerden faydalanın',
      'Haftada en az 3 kez ağırlık taşıyan egzersiz yapın (yürüyüş, koşu, kuvvet antrenmanı) - kemik kaybını yavaşlatır',
      'Uyku hijyenine, stres yönetimine ve farkındalığa öncelik verin; bunlar perimenopoz belirtilerinin şiddetini azaltır',
      'Tansiyon, kolesterol, kan şekeri ve kemik yoğunluğu taramaları dâhil yıllık kontrollerinizi aksatmayın',
      'Belirtiler yaşam kalitenizi ciddi şekilde etkiliyorsa bir menopoz uzmanıyla hormon tedavisi seçeneklerini konuşun',
      'Yoğun, alışılmadık şekilde uzun süren veya menopoz sonrası kanamaları görmezden gelmeyin - mutlaka jinekolog tarafından değerlendirilmelidir',
    ],

    faqs: [
      {
        question: 'Menopoz genellikle kaç yaşında başlar?',
        answer:
          'Doğal menopozun dünya genelinde ortalama yaşı yaklaşık 51\'dir ve çoğu kadın 45 ile 55 yaşları arasında menopoza girer. 45 yaşından önce görülen menopoz erken menopoz, 40 yaşından önce görülen ise prematüre yumurtalık yetmezliği olarak adlandırılır. Perimenopoz adı verilen geçiş dönemi 10 yıl öncesinden başlayabilir ve belirtilerin büyük kısmı bu dönemde ortaya çıkar.',
      },
      {
        question: 'Menopoz hesaplayıcı tam yaşımı söyleyebilir mi?',
        answer:
          'Hayır, hiçbir hesaplayıcı kesin yaşı veya tarihi söyleyemez. Bu araç; aile geçmişi, sigara, VKİ, menarş yaşı ve üreme geçmişi gibi iyi bilinen faktörlere dayalı istatistiksel bir tahmin verir. Sonuç olarak olası bir yaş aralığı (±2.5 yıl) sunulur, net bir tarih değil. Menopoz ancak art arda 12 ay adet görmemesiyle doğrulanabilir.',
      },
      {
        question: 'Annemin menopoz yaşı benim için iyi bir gösterge mi?',
        answer:
          'Evet, en güçlü tekil belirteçlerden biridir. İkiz ve aile çalışmaları menopoz yaşındaki değişkenliğin %40-70 kadarını genetiğin açıkladığını gösterir ve bir kadının menopoz yaşı çoğu zaman annesinin yaşına yakın olur. Ancak yaşam tarzı ve sağlık faktörleri gerçek yaşı daha erkene veya daha geçe kaydırabilir.',
      },
      {
        question: 'Sigara gerçekten menopozu erkene alır mı?',
        answer:
          'Evet. Büyük çalışmalar tutarlı şekilde aktif sigara içenlerin menopoza sigara içmeyenlerden 1-2 yıl önce ulaştığını ve yoğun kullanımın etkiyi artırdığını göstermektedir. Tütün dumanındaki toksinler yumurtalıklardaki folikül kaybını hızlandırır. Sigarayı bırakmak bu etkiyi kısmen tersine çevirebilir; bu da bırakmak için başka bir nedendir.',
      },
      {
        question: 'Perimenopoz ile menopoz arasındaki fark nedir?',
        answer:
          'Perimenopoz, hormon seviyelerinin dalgalandığı ve belirtilerin başladığı, genellikle 4-10 yıl süren geçiş dönemidir: düzensiz döngüler, sıcak basmaları, ruh hali değişiklikleri ve uyku sorunları. Menopoz ise art arda 12 ay adet görmeden geçen dönemin sonunda tek bir zaman noktasıdır. Postmenopoz ise o noktadan sonraki tüm yaşamı kapsar.',
      },
      {
        question: 'Perimenopoz ve menopozun en sık görülen belirtileri nelerdir?',
        answer:
          'Tipik belirtiler düzensiz adetler, sıcak basmaları, gece terlemeleri, uyku bozuklukları, ruh hali değişiklikleri, kaygı, beyin sisi, vajinal kuruluk, cinsel isteksizlik, eklem ağrıları ve kilo değişiklikleridir. Şiddet kadından kadına çok değişir. Kadınların yaklaşık %20\'si hafif veya hiç belirti yaşamazken, bazıları tıbbi destek gerektiren ciddi belirtilerle karşılaşır.',
      },
      {
        question: 'Hormon replasman tedavisi (HRT) almalı mıyım?',
        answer:
          'HRT, uygun adaylarda orta-şiddetli belirtilerin tedavisinde ve kemik korumasında etkilidir. Karar; belirtilerinize, menopoz yaşınıza, kişisel ve aile tıbbi geçmişinize ve risk profilinize bağlıdır. Güncel menopoz kılavuzları, 60 yaş altındaki ya da menopozdan bu yana 10 yıl geçmemiş sağlıklı çoğu kadın için HRT\'yi güvenli kabul eder, ancak bu karar her zaman nitelikli bir doktorla birlikte verilmelidir.',
      },
    ],
  },
};
