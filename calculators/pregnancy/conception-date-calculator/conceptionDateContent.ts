import { CalculatorContent } from '@/types/calculator';

export const conceptionDateContent: CalculatorContent = {
  en: {
    whatIs:
      'A conception date calculator estimates when fertilization most likely occurred based on either your last menstrual period (LMP) or your estimated due date. Conception is the moment when a sperm cell successfully fertilizes an egg, typically happening during or shortly after ovulation. Since ovulation generally occurs about 14 days before the next expected period, the calculator works backward from known dates to estimate this crucial moment. This tool helps expectant parents understand the timeline of their pregnancy, identify the fertile window during which conception likely happened, and track gestational milestones. While no calculator can determine the exact moment of conception, it provides a medically-accepted estimate that aligns with how healthcare providers date pregnancies.',

    howToCalculate:
      'There are two main methods to estimate your conception date. The first method uses your Last Menstrual Period (LMP): Conception typically occurs around day 14 of a standard 28-day menstrual cycle (the day of ovulation). The formula adjusts for your actual cycle length by subtracting 14 from your cycle length to determine ovulation day. For example, with a 30-day cycle, ovulation would be around day 16 (30 - 14 = 16). The second method works backward from your estimated due date: Since a standard pregnancy lasts approximately 280 days (40 weeks) from LMP, and conception occurs about 14 days after LMP, your conception date would be approximately 266 days before your due date. Both methods account for your average cycle length to provide more accurate results.',

    formulaDetails:
      'The conception date calculation is based on Naegele\'s Rule, the standard obstetric method for pregnancy dating. The core formula states: Due Date = LMP + 280 days (adjusted for cycle length). From this, the conception date is derived as: Conception Date = LMP + (Cycle Length - 14 days). For a standard 28-day cycle, this means conception occurs approximately 14 days after LMP. The number 14 represents the typical luteal phase length (the time between ovulation and the next period), which remains relatively constant at 14 days regardless of total cycle length. For example, if your LMP was January 1 with a 28-day cycle: Ovulation/Conception ≈ January 15 (day 14). If your cycle is 32 days: Ovulation/Conception ≈ January 19 (day 18). When calculating from a due date, the formula reverses: LMP = Due Date - 280 days (adjusted), then Conception = LMP + (Cycle Length - 14). The fertile window spans from 5 days before ovulation to 1 day after, as sperm can survive up to 5 days in the reproductive tract while the egg is viable for about 12-24 hours after release.',

    interpretation:
      'Your conception date result represents the most probable day of fertilization based on standard reproductive biology. The estimated conception date aligns with your ovulation date, as the egg can only be fertilized within 12-24 hours of release. However, since sperm can survive up to 5 days in the female reproductive tract, intercourse that occurred up to 5 days before ovulation could have led to conception. The fertile window shown indicates the full range of days during which conception was possible. Your gestational age counts from the first day of your last menstrual period (not from conception), which is the standard method used by healthcare providers. This means gestational age is typically about 2 weeks more than the actual age of the embryo. The trimester breakdown and pregnancy milestones help you understand what developmental stage your pregnancy is in.',

    limitations:
      'This calculator provides estimates based on average reproductive biology and may not be perfectly accurate for every individual. Several factors can affect accuracy: irregular menstrual cycles make it difficult to pinpoint ovulation, as the calculator assumes ovulation occurs a fixed number of days before the next period. Stress, illness, travel, hormonal imbalances, and medications can shift ovulation timing significantly. Women with Polycystic Ovary Syndrome (PCOS) or other conditions may ovulate at unpredictable times. The calculator assumes a standard luteal phase of 14 days, but this can vary from 10-16 days between individuals. Early ultrasound dating (typically done between 8-12 weeks) is more accurate than LMP-based calculations for determining gestational age. Additionally, if you conceived through assisted reproductive technologies (IVF, IUI), the conception date would be the date of embryo transfer or insemination, making this calculator less relevant. Always confirm pregnancy dating with your healthcare provider, especially if you have irregular cycles or uncertain dates.',

    healthRisks:
      'Understanding your conception date and gestational age is important for proper prenatal care timing. Early prenatal care (ideally starting in the first trimester) allows for crucial screening tests, genetic testing options, and early detection of potential complications. Accurate pregnancy dating helps healthcare providers schedule appropriate tests at the right times: nuchal translucency screening (11-14 weeks), anatomy scan (18-22 weeks), glucose screening (24-28 weeks), and Group B Strep testing (35-37 weeks). Inaccurate dating can lead to unnecessary interventions if the baby appears too small or too large for gestational age, or premature induction if the due date is estimated too early. For pregnancies conceived through IVF, conception dates are known precisely, allowing for more accurate milestone tracking. If you have concerns about your pregnancy timeline, irregular periods, or uncertainty about dates, early ultrasound confirmation with your OB-GYN or midwife is strongly recommended.',

    alternativeMeasures:
      'While LMP-based dating is the most common method, several alternative approaches provide more accurate pregnancy dating. First-trimester ultrasound (crown-rump length measurement at 7-13 weeks) is considered the gold standard for pregnancy dating, with accuracy within 3-5 days. Second-trimester ultrasound can date pregnancies within 1-2 weeks using measurements like biparietal diameter and femur length. Basal body temperature (BBT) tracking provides precise ovulation data if recorded consistently before conception, identifying the temperature shift that occurs after ovulation. Ovulation predictor kits (OPKs) detect the LH surge 24-36 hours before ovulation, providing a narrow conception window. Cervical mucus monitoring can indicate ovulation through changes in consistency (egg-white cervical mucus indicates peak fertility). For IVF pregnancies, the embryo transfer date is known exactly, making conception dating precise. HCG blood level doubling times can provide additional pregnancy dating information in early weeks. Combining multiple methods generally provides the most accurate estimate of conception timing.',

    demographicDifferences:
      'Menstrual cycle characteristics vary significantly across different populations, which can affect conception date estimates. Average cycle length varies by age: teenagers often have longer, more irregular cycles (21-45 days), women in their 20s-30s tend to have the most regular cycles (averaging 28 days), and women approaching perimenopause (40s) may experience shorter or more irregular cycles. Ethnicity can influence cycle length and ovulation patterns: studies show slight variations in average cycle length across different ethnic groups, though individual variation within groups is greater than between-group differences. Body weight significantly affects ovulation: women with very low BMI may have anovulatory cycles, while obesity can lead to irregular ovulation. Lifestyle factors including shift work, high-intensity exercise, and chronic stress can delay or suppress ovulation. Women who recently stopped hormonal contraception may have irregular cycles for several months, making conception date estimation less accurate. A history of reproductive conditions such as PCOS, endometriosis, or thyroid disorders can also affect ovulation timing and cycle regularity.',

    medicalDisclaimer:
      'This conception date calculator is provided for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. The estimated conception date is an approximation based on average reproductive biology and may not reflect your actual conception timing. Every pregnancy is unique, and individual factors including cycle irregularity, hormonal variations, and medical conditions can significantly affect ovulation and conception timing. Do not use this calculator to make medical decisions or to determine paternity. For accurate pregnancy dating, consult with your healthcare provider (OB-GYN, midwife, or family physician) who can perform an ultrasound examination. If you have concerns about your pregnancy, irregular menstrual cycles, or difficulty conceiving, please seek professional medical guidance. This tool should be used as a general reference alongside proper prenatal care, not as a replacement for it.',

    references: [
      'American College of Obstetricians and Gynecologists (ACOG) - Methods for Estimating Due Date',
      'Naegele FC. Lehrbuch der Geburtshülfe. Heidelberg, 1830.',
      'Wilcox AJ, Dunson D, Baird DD. The timing of the "fertile window" in the menstrual cycle. BMJ. 2000;321(7271):1259-1262.',
      'Bottomley C, Bourne T. Dating and growth in the first trimester. Best Practice & Research Clinical Obstetrics & Gynaecology. 2009;23(4):439-452.',
      'Practice Committee of the American Society for Reproductive Medicine. Optimizing natural fertility. Fertility and Sterility. 2017;107(1):52-58.',
      'World Health Organization (WHO) - Antenatal Care Recommendations',
    ],

    tips: [
      'The fertile window is approximately 6 days long: 5 days before ovulation and the day of ovulation itself',
      'Sperm can survive up to 5 days inside the female reproductive tract, so conception may have occurred several days before ovulation',
      'Early ultrasound (8-12 weeks) is the most accurate way to determine gestational age and confirm your conception date estimate',
      'If your menstrual cycles are irregular, this calculator may be less accurate - discuss with your healthcare provider',
      'Gestational age starts from the first day of your last period, not from conception - this means you are technically "2 weeks pregnant" at the time of conception',
      'Only about 5% of babies are born on their exact due date - most arrive within 2 weeks before or after',
      'Tracking your cycles with a period tracker app before pregnancy can help provide more accurate conception estimates',
      'If you conceived through IVF or IUI, your fertility clinic will provide precise conception dating',
    ],

    faqs: [
      {
        question: 'How accurate is a conception date calculator?',
        answer:
          'A conception date calculator provides a good estimate but is not perfectly precise. For women with regular 28-day cycles, accuracy is typically within 1-3 days of actual ovulation. However, factors like irregular cycles, stress, illness, and hormonal variations can shift ovulation timing. First-trimester ultrasound remains the gold standard for pregnancy dating, with accuracy within 3-5 days. The calculator is most useful as a starting reference, especially when combined with ultrasound confirmation from your healthcare provider.',
      },
      {
        question: 'Can I determine exactly when I conceived?',
        answer:
          'It is virtually impossible to determine the exact moment of conception. Even if you only had intercourse once during your fertile window, sperm can survive up to 5 days in the reproductive tract, and the egg is viable for 12-24 hours after ovulation. Conception could have occurred at any point during this window. The best you can determine is a likely range of dates during which conception occurred. The only exception is IVF, where the fertilization date is known precisely.',
      },
      {
        question: 'Why is gestational age different from the actual age of my baby?',
        answer:
          'Gestational age is calculated from the first day of your last menstrual period (LMP), which is typically about 2 weeks before conception actually occurs. This method is used because most women can reliably remember the date of their last period, while the exact conception date is usually unknown. So when your doctor says you are "8 weeks pregnant," the embryo is actually approximately 6 weeks old (from conception). This standardized system ensures consistent dating across all healthcare settings.',
      },
      {
        question: 'What if my cycle length is not 28 days?',
        answer:
          'This calculator adjusts for different cycle lengths. The key principle is that the luteal phase (from ovulation to the next period) is relatively constant at about 14 days, regardless of total cycle length. So with a 32-day cycle, ovulation occurs around day 18 (32 - 14 = 18), not day 14. With a 24-day cycle, ovulation occurs around day 10. Enter your actual average cycle length into the calculator for the most accurate results. If your cycles vary significantly month to month, use the average of the last 3-6 cycles.',
      },
      {
        question: 'Can this calculator be used to determine paternity?',
        answer:
          'No, this calculator should not be used for paternity determination. It provides an estimate of the most likely conception date, but conception could have occurred during a fertile window spanning up to 6 days. This range makes it impossible to determine paternity based on timing alone, especially if multiple partners were involved during the fertile period. For paternity questions, DNA testing (available both prenatally and postnatally) is the only reliable method.',
      },
      {
        question: 'Does the conception date change after an ultrasound?',
        answer:
          'An ultrasound does not change when conception actually occurred, but it may revise the estimated due date and consequently the estimated conception date. If the ultrasound-based gestational age differs significantly from the LMP-based calculation (more than 5-7 days in the first trimester), your healthcare provider may adjust your official due date. This is because early ultrasound measurements of embryo size are generally more accurate than date-based calculations, especially for women with irregular cycles or uncertain LMP dates.',
      },
      {
        question: 'What is the fertile window and why does it matter?',
        answer:
          'The fertile window is the period during your menstrual cycle when pregnancy is possible. It spans approximately 6 days: the 5 days before ovulation and the day of ovulation itself. This window exists because sperm can survive in the female reproductive tract for up to 5 days, while the released egg is viable for only 12-24 hours. The highest chance of conception occurs with intercourse 1-2 days before ovulation. Understanding your fertile window is important whether you are trying to conceive or trying to avoid pregnancy. Various methods can help identify it, including ovulation predictor kits, basal body temperature tracking, and cervical mucus monitoring.',
      },
    ],
  },
  tr: {
    whatIs:
      'Gebe kalma tarihi hesaplayıcısı, son adet tarihinize (SAT) veya tahmini doğum tarihinize dayanarak döllenmenin büyük olasılıkla ne zaman gerçekleştiğini tahmin eder. Gebe kalma, bir sperm hücresinin yumurtayı başarıyla döllediği andır ve genellikle yumurtlama sırasında veya hemen sonrasında gerçekleşir. Yumurtlama genellikle bir sonraki beklenen adet döneminden yaklaşık 14 gün önce gerçekleştiğinden, hesaplayıcı bilinen tarihlerden geriye doğru çalışarak bu kritik anı tahmin eder. Bu araç, anne-baba adaylarının gebelik zaman çizelgesini anlamalarına, gebe kalmanın muhtemelen gerçekleştiği doğurgan pencereyi belirlemelerine ve gebelik kilometre taşlarını takip etmelerine yardımcı olur. Hiçbir hesaplayıcı gebe kalmanın tam anını belirleyemese de, sağlık hizmeti sağlayıcılarının gebelikleri tarihlendirme şekliyle uyumlu, tıbben kabul görmüş bir tahmin sunar.',

    howToCalculate:
      'Gebe kalma tarihinizi tahmin etmenin iki ana yöntemi vardır. İlk yöntem Son Adet Tarihinizi (SAT) kullanır: Gebe kalma genellikle standart 28 günlük adet döngüsünün yaklaşık 14. gününde (yumurtlama günü) gerçekleşir. Formül, yumurtlama gününü belirlemek için döngü uzunluğunuzdan 14 çıkararak gerçek döngü uzunluğunuza göre ayarlama yapar. Örneğin, 30 günlük bir döngüde yumurtlama yaklaşık 16. günde (30 - 14 = 16) olacaktır. İkinci yöntem tahmini doğum tarihinizden geriye doğru çalışır: Standart bir gebelik SAT\'den itibaren yaklaşık 280 gün (40 hafta) sürdüğünden ve gebe kalma SAT\'den yaklaşık 14 gün sonra gerçekleştiğinden, gebe kalma tarihiniz doğum tarihinizden yaklaşık 266 gün öncedir. Her iki yöntem de daha doğru sonuçlar sağlamak için ortalama döngü uzunluğunuzu hesaba katar.',

    formulaDetails:
      'Gebe kalma tarihi hesaplaması, gebelik tarihlendirmesi için standart obstetrik yöntem olan Naegele Kuralına dayanır. Temel formül şöyledir: Doğum Tarihi = SAT + 280 gün (döngü uzunluğuna göre ayarlanmış). Bundan gebe kalma tarihi şu şekilde türetilir: Gebe Kalma Tarihi = SAT + (Döngü Uzunluğu - 14 gün). Standart 28 günlük bir döngü için bu, gebe kalmanın SAT\'den yaklaşık 14 gün sonra gerçekleştiği anlamına gelir. 14 sayısı, toplam döngü uzunluğundan bağımsız olarak nispeten sabit kalan tipik luteal faz uzunluğunu (yumurtlama ile bir sonraki adet dönemi arasındaki süre) temsil eder. Örneğin, SAT\'niz 1 Ocak ve 28 günlük bir döngünüz varsa: Yumurtlama/Gebe Kalma ≈ 15 Ocak (14. gün). Döngünüz 32 gün ise: Yumurtlama/Gebe Kalma ≈ 19 Ocak (18. gün). Doğum tarihinden hesaplarken formül tersine döner: SAT = Doğum Tarihi - 280 gün (ayarlanmış), sonra Gebe Kalma = SAT + (Döngü Uzunluğu - 14). Doğurgan pencere, yumurtlamadan 5 gün önce ile 1 gün sonrası arasında uzanır, çünkü sperm üreme yollarında 5 güne kadar hayatta kalabilirken yumurta serbest bırakıldıktan sonra yaklaşık 12-24 saat canlı kalır.',

    interpretation:
      'Gebe kalma tarihi sonucunuz, standart üreme biyolojisine dayalı olarak döllenmenin en olası gününü temsil eder. Tahmini gebe kalma tarihi yumurtlama tarihinizle örtüşür, çünkü yumurta yalnızca serbest bırakılmasından sonraki 12-24 saat içinde döllenebilir. Ancak sperm kadın üreme yollarında 5 güne kadar hayatta kalabildiğinden, yumurtlamadan 5 güne kadar önce gerçekleşen ilişki gebe kalmaya yol açmış olabilir. Gösterilen doğurgan pencere, gebe kalmanın mümkün olduğu tam gün aralığını gösterir. Gebelik yaşınız son adet döneminizin ilk gününden itibaren sayılır (gebe kalma tarihinden değil), bu sağlık hizmeti sağlayıcıları tarafından kullanılan standart yöntemdir. Bu, gebelik yaşının genellikle embriyonun gerçek yaşından yaklaşık 2 hafta fazla olduğu anlamına gelir. Trimester dağılımı ve gebelik kilometre taşları, gebeliğinizin hangi gelişim aşamasında olduğunu anlamanıza yardımcı olur.',

    limitations:
      'Bu hesaplayıcı, ortalama üreme biyolojisine dayalı tahminler sunar ve her birey için mükemmel şekilde doğru olmayabilir. Doğruluğu etkileyen birçok faktör vardır: düzensiz adet döngüleri yumurtlamayı belirlemeyi zorlaştırır, çünkü hesaplayıcı yumurtlamanın bir sonraki adet döneminden sabit sayıda gün önce gerçekleştiğini varsayar. Stres, hastalık, seyahat, hormonal dengesizlikler ve ilaçlar yumurtlama zamanlamasını önemli ölçüde kaydırabilir. Polikistik Over Sendromu (PKOS) veya diğer rahatsızlıkları olan kadınlar öngörülemeyen zamanlarda yumurtlayabilir. Hesaplayıcı standart bir 14 günlük luteal faz varsayar, ancak bu bireyler arasında 10-16 gün değişebilir. Erken ultrason tarihlendirmesi (genellikle 8-12 hafta arasında yapılan), gebelik yaşını belirlemek için SAT tabanlı hesaplamalardan daha doğrudur. Ayrıca, yardımcı üreme teknolojileri (tüp bebek, aşılama) ile gebe kaldıysanız, gebe kalma tarihi embriyo transferi veya aşılama tarihi olacaktır ve bu hesaplayıcı daha az geçerli olur. Özellikle düzensiz döngüleriniz veya belirsiz tarihleriniz varsa, her zaman sağlık hizmeti sağlayıcınızla gebelik tarihlendirmesini doğrulayın.',

    healthRisks:
      'Gebe kalma tarihinizi ve gebelik yaşınızı anlamak, doğru doğum öncesi bakım zamanlaması için önemlidir. Erken doğum öncesi bakım (ideal olarak ilk trimesterde başlayan), kritik tarama testleri, genetik test seçenekleri ve olası komplikasyonların erken tespiti için fırsat tanır. Doğru gebelik tarihlendirmesi, sağlık hizmeti sağlayıcılarının uygun testleri doğru zamanlarda planlamalarına yardımcı olur: ense kalınlığı taraması (11-14 hafta), detaylı ultrason (18-22 hafta), şeker taraması (24-28 hafta) ve Grup B Streptokok testi (35-37 hafta). Yanlış tarihlendirme, bebek gebelik yaşı için çok küçük veya çok büyük görünürse gereksiz müdahalelere veya doğum tarihi çok erken tahmin edilirse erken doğum indüksiyonuna yol açabilir. Tüp bebek ile oluşan gebeliklerde gebe kalma tarihleri kesin olarak bilinir ve daha doğru kilometre taşı takibine olanak tanır. Gebelik zaman çizelgeniz, düzensiz adetleriniz veya tarihlerle ilgili belirsizlikleriniz konusunda endişeleriniz varsa, kadın doğum uzmanınız veya ebenizle erken ultrason doğrulaması kesinlikle önerilir.',

    alternativeMeasures:
      'SAT tabanlı tarihlendirme en yaygın yöntem olsa da, birkaç alternatif yaklaşım daha doğru gebelik tarihlendirmesi sağlar. İlk trimester ultrasonu (7-13 haftada baş-popo uzunluğu ölçümü), 3-5 günlük doğrulukla gebelik tarihlendirmesi için altın standart olarak kabul edilir. İkinci trimester ultrasonu, biparietal çap ve femur uzunluğu gibi ölçümler kullanılarak gebelikleri 1-2 haftalık doğrulukla tarihlendirebilir. Bazal vücut ısısı (BVS) takibi, gebe kalmadan önce tutarlı bir şekilde kaydedilmişse, yumurtlama sonrası meydana gelen ısı artışını belirleyerek kesin yumurtlama verisi sağlar. Yumurtlama tahmin kitleri, yumurtlamadan 24-36 saat önce LH artışını tespit ederek dar bir gebe kalma penceresi sağlar. Servikal mukus takibi, kıvamdaki değişiklikler yoluyla yumurtlamayı gösterebilir (yumurta akı kıvamında servikal mukus en yüksek doğurganlığı gösterir). Tüp bebek gebelikleri için embriyo transferi tarihi kesin olarak bilinir ve gebe kalma tarihlendirmesini hassas kılar. HCG kan düzeyi katlanma süreleri, erken haftalarda ek gebelik tarihlendirme bilgisi sağlayabilir. Birden fazla yöntemi birleştirmek genellikle gebe kalma zamanlamasının en doğru tahminini sağlar.',

    demographicDifferences:
      'Adet döngüsü özellikleri farklı popülasyonlar arasında önemli ölçüde değişir ve bu durum gebe kalma tarihi tahminlerini etkileyebilir. Ortalama döngü uzunluğu yaşa göre değişir: gençlerin genellikle daha uzun ve daha düzensiz döngüleri vardır (21-45 gün), 20\'li ve 30\'lu yaşlardaki kadınlar en düzenli döngülere sahip olma eğilimindedir (ortalama 28 gün) ve perimenopoza yaklaşan kadınlar (40\'lı yaşlar) daha kısa veya daha düzensiz döngüler yaşayabilir. Etnik köken döngü uzunluğunu ve yumurtlama düzenlerini etkileyebilir: çalışmalar farklı etnik gruplar arasında ortalama döngü uzunluğunda hafif farklılıklar gösterse de, gruplar içindeki bireysel değişkenlik gruplar arası farklılıklardan daha büyüktür. Vücut ağırlığı yumurtlamayı önemli ölçüde etkiler: çok düşük VKİ\'ye sahip kadınlarda yumurtlamasız döngüler olabilirken, obezite düzensiz yumurtlamaya yol açabilir. Vardiyalı çalışma, yüksek yoğunluklu egzersiz ve kronik stres dahil yaşam tarzı faktörleri yumurtlamayı geciktirebilir veya baskılayabilir. Yakın zamanda hormonal doğum kontrolünü bırakan kadınlarda birkaç ay düzensiz döngüler olabilir ve bu gebe kalma tarihi tahminini daha az doğru kılar. PKOS, endometriozis veya tiroid bozuklukları gibi üreme sağlığı durumlarının geçmişi de yumurtlama zamanlamasını ve döngü düzenliliğini etkileyebilir.',

    medicalDisclaimer:
      'Bu gebe kalma tarihi hesaplayıcısı yalnızca eğitim ve bilgilendirme amacıyla sağlanmıştır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerine geçmez. Tahmini gebe kalma tarihi, ortalama üreme biyolojisine dayalı bir yaklaşımdır ve gerçek gebe kalma zamanlamanızı yansıtmayabilir. Her gebelik benzersizdir ve döngü düzensizliği, hormonal değişiklikler ve tıbbi durumlar dahil bireysel faktörler yumurtlama ve gebe kalma zamanlamasını önemli ölçüde etkileyebilir. Bu hesaplayıcıyı tıbbi kararlar almak veya babalık belirlemek için kullanmayın. Doğru gebelik tarihlendirmesi için, ultrason muayenesi yapabilecek sağlık hizmeti sağlayıcınıza (kadın doğum uzmanı, ebe veya aile hekimi) danışın. Gebeliğiniz, düzensiz adet döngüleriniz veya gebe kalma güçlüğü konusunda endişeleriniz varsa, lütfen profesyonel tıbbi rehberlik alın. Bu araç, doğum öncesi bakımın yerini almak için değil, uygun doğum öncesi bakımla birlikte genel bir referans olarak kullanılmalıdır.',

    references: [
      'Amerikan Kadın Doğum Uzmanları Koleji (ACOG) - Doğum Tarihi Tahmini Yöntemleri',
      'Naegele FC. Lehrbuch der Geburtshülfe. Heidelberg, 1830.',
      'Wilcox AJ, Dunson D, Baird DD. Adet döngüsünde "doğurgan pencere"nin zamanlaması. BMJ. 2000;321(7271):1259-1262.',
      'Bottomley C, Bourne T. İlk trimesterde tarihlendirme ve büyüme. Best Practice & Research Clinical Obstetrics & Gynaecology. 2009;23(4):439-452.',
      'Amerikan Üreme Tıbbı Derneği Uygulama Komitesi. Doğal doğurganlığı optimize etme. Fertility and Sterility. 2017;107(1):52-58.',
      'Dünya Sağlık Örgütü (WHO) - Doğum Öncesi Bakım Önerileri',
    ],

    tips: [
      'Doğurgan pencere yaklaşık 6 gün sürer: yumurtlamadan 5 gün önce ve yumurtlama gününün kendisi',
      'Sperm kadın üreme yollarında 5 güne kadar hayatta kalabilir, bu nedenle gebe kalma yumurtlamadan birkaç gün önce gerçekleşmiş olabilir',
      'Erken ultrason (8-12 hafta), gebelik yaşını belirlemek ve gebe kalma tarihi tahmininizi doğrulamak için en doğru yoldur',
      'Adet döngüleriniz düzensizse bu hesaplayıcı daha az doğru olabilir - sağlık hizmeti sağlayıcınızla görüşün',
      'Gebelik yaşı son adet döneminizin ilk gününden başlar, gebe kalma tarihinden değil - bu, gebe kalma anında teknik olarak "2 haftalık hamile" olduğunuz anlamına gelir',
      'Bebeklerin yalnızca yaklaşık %5\'i tam doğum tarihinde doğar - çoğu 2 hafta önce veya sonra gelir',
      'Gebelik öncesinde döngülerinizi bir adet takip uygulamasıyla izlemek daha doğru gebe kalma tahminleri sağlayabilir',
      'Tüp bebek veya aşılama ile gebe kaldıysanız, tüp bebek merkeziniz kesin gebe kalma tarihlendirmesi sağlayacaktır',
    ],

    faqs: [
      {
        question: 'Gebe kalma tarihi hesaplayıcısı ne kadar doğru?',
        answer:
          'Gebe kalma tarihi hesaplayıcısı iyi bir tahmin sağlar ancak mükemmel şekilde kesin değildir. Düzenli 28 günlük döngüleri olan kadınlar için doğruluk genellikle gerçek yumurtlamanın 1-3 günü içindedir. Ancak düzensiz döngüler, stres, hastalık ve hormonal değişimler gibi faktörler yumurtlama zamanlamasını kaydırabilir. İlk trimester ultrasonu, 3-5 günlük doğrulukla gebelik tarihlendirmesi için altın standart olmaya devam etmektedir. Hesaplayıcı, özellikle sağlık hizmeti sağlayıcınızdan ultrason doğrulamasıyla birleştirildiğinde başlangıç referansı olarak en yararlıdır.',
      },
      {
        question: 'Tam olarak ne zaman gebe kaldığımı belirleyebilir miyim?',
        answer:
          'Gebe kalmanın tam anını belirlemek fiilen imkansızdır. Doğurgan döneminizde yalnızca bir kez ilişkiye girmiş olsanız bile, sperm üreme yollarında 5 güne kadar hayatta kalabilir ve yumurta yumurtlamadan sonra 12-24 saat canlı kalır. Gebe kalma bu pencere içinde herhangi bir noktada gerçekleşmiş olabilir. Belirleyebileceğiniz en iyi şey, gebe kalmanın gerçekleştiği olası tarih aralığıdır. Tek istisna tüp bebektir; bu durumda döllenme tarihi kesin olarak bilinir.',
      },
      {
        question: 'Gebelik yaşı bebeğimin gerçek yaşından neden farklı?',
        answer:
          'Gebelik yaşı, son adet döneminizin ilk gününden (SAT) itibaren hesaplanır ve bu genellikle gebe kalmanın gerçekleşmesinden yaklaşık 2 hafta öncedir. Bu yöntem kullanılır çünkü çoğu kadın son adet döneminin tarihini güvenilir bir şekilde hatırlayabilirken, kesin gebe kalma tarihi genellikle bilinmez. Dolayısıyla doktorunuz "8 haftalık hamilesiniz" dediğinde, embriyo aslında yaklaşık 6 haftalıktır (gebe kalmadan itibaren). Bu standartlaştırılmış sistem, tüm sağlık kuruluşlarında tutarlı tarihlendirme sağlar.',
      },
      {
        question: 'Döngü uzunluğum 28 gün değilse ne olur?',
        answer:
          'Bu hesaplayıcı farklı döngü uzunluklarına göre ayarlama yapar. Temel ilke, luteal fazın (yumurtlamadan bir sonraki adet dönemine kadar) toplam döngü uzunluğundan bağımsız olarak yaklaşık 14 günde nispeten sabit kalmasıdır. Bu nedenle 32 günlük bir döngüde yumurtlama yaklaşık 18. günde (32 - 14 = 18), 14. günde değil, gerçekleşir. 24 günlük bir döngüde ise yumurtlama yaklaşık 10. günde gerçekleşir. En doğru sonuçlar için gerçek ortalama döngü uzunluğunuzu hesaplayıcıya girin. Döngüleriniz aydan aya önemli ölçüde değişiyorsa, son 3-6 döngünün ortalamasını kullanın.',
      },
      {
        question: 'Bu hesaplayıcı babalık belirlemek için kullanılabilir mi?',
        answer:
          'Hayır, bu hesaplayıcı babalık belirlemek için kullanılmamalıdır. En olası gebe kalma tarihinin bir tahminini sunar, ancak gebe kalma 6 güne kadar uzanan bir doğurgan pencere içinde gerçekleşmiş olabilir. Bu aralık, özellikle doğurgan dönem boyunca birden fazla partner söz konusuysa, yalnızca zamanlamaya dayalı olarak babalık belirlemeyi imkansız kılar. Babalık soruları için DNA testi (hem doğum öncesi hem de doğum sonrası mümkün) tek güvenilir yöntemdir.',
      },
      {
        question: 'Ultrasondan sonra gebe kalma tarihi değişir mi?',
        answer:
          'Ultrason gebe kalmanın gerçekte ne zaman gerçekleştiğini değiştirmez, ancak tahmini doğum tarihini ve dolayısıyla tahmini gebe kalma tarihini revize edebilir. Ultrason tabanlı gebelik yaşı SAT tabanlı hesaplamadan önemli ölçüde farklıysa (ilk trimesterde 5-7 günden fazla), sağlık hizmeti sağlayıcınız resmi doğum tarihinizi ayarlayabilir. Bunun nedeni, erken ultrason embriyo boyutu ölçümlerinin genellikle tarih tabanlı hesaplamalardan daha doğru olmasıdır, özellikle düzensiz döngüleri veya belirsiz SAT tarihleri olan kadınlar için.',
      },
      {
        question: 'Doğurgan pencere nedir ve neden önemlidir?',
        answer:
          'Doğurgan pencere, adet döngünüzde gebeliğin mümkün olduğu dönemdir. Yaklaşık 6 gün sürer: yumurtlamadan 5 gün önce ve yumurtlama gününün kendisi. Bu pencere var çünkü sperm kadın üreme yollarında 5 güne kadar hayatta kalabilirken, serbest bırakılan yumurta yalnızca 12-24 saat canlı kalır. En yüksek gebe kalma şansı yumurtlamadan 1-2 gün önce gerçekleşen ilişkide olur. Doğurgan pencerenizi anlamak, ister gebe kalmaya çalışıyor olun ister gebelikten kaçınmaya çalışıyor olun önemlidir. Yumurtlama tahmin kitleri, bazal vücut ısısı takibi ve servikal mukus izleme dahil çeşitli yöntemler belirlemeye yardımcı olabilir.',
      },
    ],
  },
};
