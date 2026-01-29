import { CalculatorContent } from '@/types/calculator';

export const pregnancyWeekContent: CalculatorContent = {
  en: {
    whatIs:
      'Pregnancy is typically calculated in weeks and days, with an average pregnancy lasting 40 weeks (280 days) from the first day of the last menstrual period (LMP) to delivery. Understanding what week of pregnancy you are in is crucial for tracking fetal development, scheduling prenatal appointments, and preparing for labor. The pregnancy week calculator helps expectant parents and healthcare providers determine the current stage of pregnancy, estimate the due date, and understand what developmental milestones the baby has reached. Pregnancy is divided into three trimesters, each with distinct physical and emotional changes for the mother and significant development for the baby. The first trimester (weeks 1-13) focuses on organ formation and establishes the foundation for pregnancy. The second trimester (weeks 14-26) is characterized by rapid growth and the mother beginning to feel fetal movements. The third trimester (weeks 27-40) involves final weight gain and preparation for labor. Accurate pregnancy dating is essential for proper prenatal care, as it helps providers identify pregnancies at risk for complications, determine appropriate timing for interventions, and provide accurate due date predictions.',
    howToCalculate:
      'The pregnancy week calculator offers three methods to determine your pregnancy stage. The most accurate method uses the first day of your last menstrual period (LMP), which is the standard medical reference point for calculating pregnancy age. If you know your LMP date, simply enter it into the calculator. The second method uses your conception date, which is typically about 14 days after the start of your menstrual cycle (around ovulation). If you know when conception occurred, enter that date and the calculator will work backward to establish your LMP. The third method uses your estimated due date, which is typically calculated as 280 days from your LMP. If you have been given a due date by your healthcare provider, enter it and the calculator will determine your current pregnancy week. Some calculators may also allow you to input your cycle length if it differs from the standard 28 days, which can make calculations more accurate for those with irregular cycles. After entering the relevant date, the calculator will display your current pregnancy week, the day of that week, total days pregnant, days remaining until your due date, your trimester, estimated baby size, key developmental milestones for the current week, and what to expect in terms of maternal changes.',
    formulaDetails:
      'Pregnancy dating uses a standardized formula developed by medical professionals to ensure consistency in prenatal care across healthcare systems. The standard formula calculates pregnancy age as: Pregnancy Age (in weeks) = (Date Today - Last Menstrual Period Date) ÷ 7 days. For example, if the first day of your last menstrual period was January 1st and today is January 22nd, your pregnancy age would be (22 - 1) ÷ 7 = 3 weeks. Within each week, the day is calculated as: Day of Week = (Days Since LMP) mod 7. If you are on day 50 of pregnancy, you would be in week 8 (50 ÷ 7 = 7.14, rounded down to 7 weeks) and day 2 of that week (50 mod 7 = 1, so day 2). When using conception date, medical professionals add 14 days to the conception date to estimate the LMP, since ovulation and conception typically occur around day 14 of a 28-day cycle. The formula is: Estimated LMP = Conception Date - 14 days. When using a due date, the calculation is reversed: Estimated LMP = Due Date - 280 days, as the standard pregnancy duration is 280 days (40 weeks). These calculations assume a regular 28-day menstrual cycle. For those with longer or shorter cycles, adjustments can be made: Adjusted Pregnancy Age = Unadjusted Age + (Cycle Length - 28) ÷ 2. This adjustment accounts for the fact that cycle length differences primarily affect the timing of ovulation and LMP, not the total pregnancy duration from conception to delivery. For example, if you have a 35-day cycle, your ovulation occurs 7 days later, so you would add approximately 3.5 days to your calculated pregnancy age. Healthcare providers typically calculate all dates from the LMP for standardization, regardless of whether the actual conception date is known, because LMP provides a reliable external marker while exact conception date can be uncertain.',
    interpretation:
      'Your pregnancy week provides important information about your baby\'s development stage, expected size, and what to anticipate in terms of physical symptoms and maternal changes. Weeks 1-4 represent a very early pregnancy where the fertilized egg travels to the uterus and implants. Weeks 5-8 involve rapid cell division and the beginning of organ formation, though most women do not yet show visible signs of pregnancy. Weeks 9-13 continue organ development with the baby becoming increasingly recognizable in ultrasound images. Around week 12, ultrasound can typically determine fetal viability and estimate due date more accurately. Weeks 14-20 mark the start of the second trimester when the baby grows rapidly and the mother typically begins feeling movements. The anatomy ultrasound around week 20 provides detailed information about fetal development and can determine gender. Weeks 21-26 involve continued rapid growth as the baby develops distinct sleeping and waking patterns. Weeks 27-30 mark the start of viability, meaning the baby could survive outside the womb with medical support if born prematurely. Weeks 31-36 involve significant weight gain for the baby and continued maternal physical changes. Weeks 37-40 represent full-term pregnancy, and the baby is considered term and ready for delivery at any time. Weeks 40+ represent post-term pregnancy, which requires medical monitoring. Understanding your pregnancy week helps you know what prenatal tests are recommended, when to expect certain physical changes, how your baby is developing, and when labor might be approaching. It also helps healthcare providers monitor the pregnancy appropriately and identify any deviations from normal progression that might require additional attention or intervention.',
    faqs: [
      {
        question: 'How accurate is pregnancy dating?',
        answer:
          'Pregnancy dating from the first day of the last menstrual period (LMP) is accurate within 3-5 days if you know your LMP date and have regular 28-day cycles. If your menstrual cycles are irregular, dating is less accurate. An ultrasound performed in the first trimester (especially before week 13) can establish pregnancy dating accurate within 3-5 days and is more reliable than dating after the first trimester. Second trimester ultrasound can date pregnancy within 1-2 weeks, and third trimester ultrasound within 2-4 weeks, so early dating is more accurate overall.',
      },
      {
        question: 'When should I schedule my first prenatal visit?',
        answer:
          'Most healthcare providers recommend scheduling the first prenatal visit when you have missed a period and have a positive pregnancy test, typically around week 8-10 of pregnancy. Some providers may ask you to schedule earlier if you have risk factors or medical conditions. Early prenatal care helps establish accurate dating, identify any risk factors, and begin appropriate screening and monitoring.',
      },
      {
        question: 'What if my due date seems wrong?',
        answer:
          'If you are confident about when your last menstrual period was or when conception occurred, and your due date from the healthcare provider seems significantly different (more than a week), an early ultrasound can help establish more accurate dating. Ultrasound dating is most accurate in the first trimester, so if timing allows, this ultrasound should be done as early as possible. If you are already in the second or third trimester, updating the due date based on early ultrasound dating is still preferable if the ultrasound is significantly different from LMP-based dating.',
      },
      {
        question: 'Can I deliver before my due date?',
        answer:
          'Yes, labor can occur before the estimated due date. Delivery before 37 weeks is considered premature, though some modern medicine considers 37 weeks early term. Delivery between 37-39 weeks is early term. Delivery at 39+ weeks is at term. Most pregnancies deliver within two weeks before or after the due date, but any time from week 37 onward is considered safe for delivery. Delivery before week 37 requires medical evaluation and is treated more cautiously to manage risks associated with prematurity.',
      },
      {
        question: 'What is the difference between trimesters?',
        answer:
          'The three trimesters represent distinct phases of pregnancy. The first trimester (weeks 1-13) involves rapid organ development in an invisible pregnancy with common symptoms like morning sickness. The second trimester (weeks 14-26) involves rapid fetal growth and is often called the "honeymoon period" with increased energy and the mother feeling fetal movements. The third trimester (weeks 27-40) involves final preparation for birth with significant weight gain and maternal discomfort. Each trimester has different prenatal screening and testing recommendations.',
      },
      {
        question: 'How is baby size estimated?',
        answer:
          'Baby size is estimated through ultrasound measurements. The measurements taken include biparietal diameter (head width), femur length (thighbone), and head circumference. These measurements are compared to expected values for the gestational age. Estimated fetal weight is calculated from these measurements, though ultrasound estimates of weight can have a margin of error of 10-15%, especially as pregnancy advances. Factors like genetics and maternal nutrition influence baby size, so there is significant normal variation among babies at the same gestational age.',
      },
      {
        question: 'What screening tests are recommended during pregnancy?',
        answer:
          'Recommended screening tests vary but typically include first trimester screening (weeks 11-14) with nuchal translucency ultrasound and blood tests to assess risk for chromosomal abnormalities. Second trimester screening includes the anatomy ultrasound (weeks 18-22) and optional quad screen blood test. Gestational diabetes screening is performed around week 24 with a glucose tolerance test. Group B Streptococcus (GBS) testing is done around week 35-37. Some women opt for non-invasive prenatal testing (NIPT) or cell-free fetal DNA screening, which can be done as early as week 9-10. Discuss with your healthcare provider which screening tests are appropriate for your situation.',
      },
      {
        question: 'What should I do if I notice decreased fetal movement?',
        answer:
          'Starting around week 24-28, you should familiarize yourself with your baby\'s normal movement patterns. If you notice a significant decrease in movement, especially in the third trimester, contact your healthcare provider immediately. A reduction in fetal movement can sometimes indicate a problem requiring evaluation, including fetal monitoring. Your healthcare provider can perform a non-stress test or other monitoring to ensure the baby is doing well. Never assume decreased movement is normal without medical evaluation.',
      },
      {
        question: 'Can I travel while pregnant?',
        answer:
          'Travel during pregnancy is generally safe during the second trimester (weeks 14-20) when morning sickness has usually resolved, and you are not yet heavily pregnant. Travel is not recommended in the first trimester (due to miscarriage risk and morning sickness) or after week 36 (due to risk of labor). Air travel is generally considered safe until week 36, though airlines often have restrictions around week 34-36. Long car trips should include frequent stops to walk and stretch. Discuss travel plans with your healthcare provider to ensure they are appropriate for your individual pregnancy.',
      },
      {
        question: 'What is normal weight gain during pregnancy?',
        answer:
          'Recommended weight gain during pregnancy varies based on pre-pregnancy weight: women with normal pre-pregnancy weight (BMI 18.5-24.9) should gain 25-35 pounds; underweight women (BMI < 18.5) should gain 28-40 pounds; overweight women (BMI 25-29.9) should gain 15-25 pounds; and obese women (BMI ≥ 30) should gain 11-20 pounds. Weight gain is not linear, with most women gaining little in the first trimester and more in the second and third trimesters. Discuss appropriate weight gain targets with your healthcare provider based on your individual circumstances.',
      },
      {
        question: 'When should I stop working during pregnancy?',
        answer:
          'The timing to stop working during pregnancy varies based on job type, physical demands, work environment, maternal health, and pregnancy complications. Many women work throughout pregnancy without problems, especially in less physically demanding jobs. Jobs involving exposure to harmful substances, significant physical labor, prolonged standing, or jobs with high stress may warrant earlier cessation of work. Your healthcare provider and employer should discuss accommodations and when stopping work would be medically advisable. Many women take maternity leave starting around week 37-39 to prepare for labor.',
      },
      {
        question: 'Is it normal to have spotting or bleeding during pregnancy?',
        answer:
          'Light spotting in early pregnancy can occur around the time of implantation (usually before a positive pregnancy test) and is often normal. Light spotting can also occur after sexual intercourse or cervical exams. However, any vaginal bleeding during pregnancy should be reported to your healthcare provider, especially if accompanied by abdominal pain or cramping. Significant bleeding can indicate complications such as miscarriage, ectopic pregnancy, placental abnormalities, or infection. Any concerning bleeding warrants prompt medical evaluation.',
      },
    ],
  },
  tr: {
    whatIs:
      'Hamilelik genellikle son adet döneminin ilk günü (SAD) ile doğum arasındaki 40 hafta (280 gün) cinsinden hesaplanır. Hamileliğin hangi haftasında olduğunuzu anlamak, fetal gelişimi takip etmek, doğum öncesi randevuları planlamak ve doğuma hazırlanmak için çok önemlidir. Hamilelik haftası hesaplayıcısı, beklenti içindeki annelerin ve sağlık hizmeti sağlayıcılarının hamileliğin mevcut aşamasını belirlemesine, doğum tarihini tahmin etmesine ve bebeğin hangi gelişimsel kilometre taşlarına ulaştığını anlamasına yardımcı olur. Hamilelik üç trimestere bölünür, her biri anne için belirgin fiziksel ve duygusal değişikliklerin ve bebek için önemli gelişimin özelliğini taşır. Birinci trimester (1-13. haftalar) organ oluşumuna odaklanır ve hamilelik temelini oluşturur. İkinci trimester (14-26. haftalar) hızlı büyüme ile karakterize edilir ve anne fetal hareketleri hissetmeye başlar. Üçüncü trimester (27-40. haftalar) son kilo alımını ve doğuma hazırlığı içerir. Doğru hamilelik tarihi belirleme, doğum öncesi bakım için önemlidir, çünkü sağlık hizmeti sağlayıcılarının komplikasyon riski taşıyan hamlelikleri tanımlamasına, müdahalelerin uygun zamanını belirlemesine ve doğru doğum tarihi tahminleri sağlamasına yardımcı olur.',
    howToCalculate:
      'Hamilelik haftası hesaplayıcısı, hamilelik aşamasını belirlemek için üç yöntem sunar. En doğru yöntem, son adet döneminin ilk günü (SAD) kullanır, bu da hamilelik yaşını hesaplamak için standart tıbbi referans noktasıdır. SAD tarihinizi biliyorsanız, bunu hesaplayıcıya girerek başlayabilirsiniz. İkinci yöntem, hamile kalma tarihinizi kullanır, bu da genellikle menstrüel döngünüzün başlamasından yaklaşık 14 gün sonra gerçekleşir (ovülasyon sırasında). Hamile kalma tarihinizi biliyorsanız, bunu girerek, hesaplayıcı SAD\'ınızı belirlemek için geriye doğru çalışacaktır. Üçüncü yöntem, tahmini doğum tarihinizi kullanır, bu da genellikle SAD\'ınızdan 280 gün sonra hesaplanır. Sağlık hizmeti sağlayıcınız tarafından bir doğum tarihi verildiyse, bunu girerek, hesaplayıcı mevcut hamilelik haftanızı belirleyecektir. Bazı hesaplayıcılar, 28 günden farklıysa menstrüel döngünüzün uzunluğunu girmenize de olanak tanıyabilir, bu da düzensiz döngüleri olanlar için hesaplamaları daha doğru hale getirebilir. İlgili tarihi girdikten sonra, hesaplayıcı mevcut hamilelik haftanızı, o haftanın günü, toplam hamilelik günlerini, doğum tarihine kadar kalan günleri, trimesterinizi, tahmini bebek boyutunu, mevcut haftanın temel gelişimsel kilometre taşlarını ve anne açısından ne bekleyebileceğinizi gösterecektir.',
    formulaDetails:
      'Hamilelik tarihi belirleme, sağlık hizmeti sağlayıcıları tarafından geliştirilen standartlaştırılmış bir formül kullanır ve bu sayede sağlık sistemi arasında doğum öncesi bakımda tutarlılık sağlanır. Standart formül hamilelik yaşını şöyle hesaplar: Hamilelik Yaşı (haftalar cinsinden) = (Bugünün Tarihi - Son Adet Döneminin Tarihi) ÷ 7 gün. Örneğin, son adet döneminin ilk günü 1 Ocak ise ve bugün 22 Ocak ise, hamilelik yaşınız (22 - 1) ÷ 7 = 3 hafta olacaktır. Her hafta içinde, günler şöyle hesaplanır: Hafta İçinde Günü = (SAD\'ından Bu Yana Geçen Günler) mod 7. Hamileliğin 50. günündeyseniz, 8. haftada (50 ÷ 7 = 7,14, 7 haftaya yuvarlanır) ve o haftanın 2. günündeysiniz (50 mod 7 = 1, yani 2. gün). Hamile kalma tarihini kullanırken, tıbbi profesyoneller, SAD\'ı tahmin etmek için hamile kalma tarihine 14 gün eklerler, çünkü ovülasyon ve hamile kalma genellikle 28 günlük döngünün 14. günü civarında meydana gelir. Formül şöyledir: Tahmini SAD = Hamile Kalma Tarihi - 14 gün. Doğum tarihini kullanırken, hesaplama tersine çevrilir: Tahmini SAD = Doğum Tarihi - 280 gün, çünkü standart hamilelik süresi 280 gündür (40 hafta). Bu hesaplamalar düzenli 28 günlük menstrüel döngü varsayar. Daha uzun veya daha kısa döngüleri olanlar için, ayarlamalar yapılabilir: Uyarlanmış Hamilelik Yaşı = Uyarlanmamış Yaş + (Döngü Uzunluğu - 28) ÷ 2. Bu ayarlama, döngü uzunluğu farklarının öncelikle ovülasyon ve SAD zamanını etkilediği, ancak konsepsiyondan doğuma kadar toplam hamilelik süresini etkilemediği gerçeğini hesaba katır. Örneğin, 35 günlük bir döngünüz varsa, ovülasyonunuz 7 gün geç meydana gelir, bu nedenle hesaplanan hamilelik yaşınıza yaklaşık 3,5 gün ekleme yapmalısınız. Sağlık hizmeti sağlayıcıları genellikle tüm tarihleri SAD\'dan hesaplar ve bunu standardize etmek için gerçek hamile kalma tarihinin bilinip bilinmediğinden bağımsız olarak yapırlar, çünkü SAD güvenilir bir dış işaret sağlarken, kesin hamile kalma tarihi belirsiz olabilir.',
    interpretation:
      'Hamilelik haftanız, bebeğin gelişim aşaması, beklenen boyut ve fiziksel semptomlar ve anne değişiklikleri açısından ne bekleyebileceğiniz hakkında önemli bilgiler sağlar. 1-4. haftalar, döllenen yumurtanın rahim içine yolculuk yaptığı ve tutunduğu çok erken hamileliği temsil eder. 5-8. haftalar hızlı hücre bölünmesini ve organ oluşumunun başlamasını içerir, ancak çoğu kadın henüz hamileliğin görünür işaretlerini göstermez. 9-13. haftalar, bebeğin ultrason görüntülerinde giderek daha tanınır hale geldiği organ gelişimini devam ettirerek. 12. hafta civarında, ultrason genellikle fetal yaşayabilirliği belirleyebilir ve doğum tarihini daha doğru bir şekilde tahmin edebilir. 14-20. haftalar, bebeğin hızla büyüdüğü ve annenin tipik olarak hareketi hissetmeye başladığı ikinci trimesterin başlangıcını işaret eder. 20. hafta civarında yapılan anatomi ultrasu, fetal gelişim hakkında ayrıntılı bilgi sağlar ve cinsiyeti belirleyebilir. 21-26. haftalar, bebeğin belirgin uyku ve uyanıklık düzenini geliştirirken devam eden hızlı büyümeyi içerir. 27-30. haftalar yaşayabilirliğin başlangıcını işaret eder, yani erken doğum durumunda bebeğin tıbbi destekle rahim dışında yaşayabileceği anlamına gelir. 31-36. haftalar, bebeğin önemli kilo alımı ve devam eden anne fiziksel değişikliklerini içerir. 37-40. haftalar tam süreli hamileliği temsil eder ve bebeğin herhangi bir anda doğuma hazır ve term olması kabul edilir. 40+ haftalar, doğum sonrası hamileliği temsil eder ve tıbbi izleme gerektirir. Hamilelik haftanızı anlamak, hangi doğum öncesi testlerin önerildiğini, belirli fiziksel değişiklikleri ne zaman bekleyeceğinizi, bebeğinizin nasıl geliştiğini ve doğumun ne zaman yaklaşabileceğini bilmenize yardımcı olur. Ayrıca, sağlık hizmeti sağlayıcılarının hamileliği uygun şekilde izlemelerine ve normal ilerlemenin normal olmayan sapışlarını tanımasına ve ek dikkat veya müdahale gerektiren sorunları belirlemelerine yardımcı olur.',
    faqs: [
      {
        question: 'Hamilelik tarihi belirleme ne kadar doğru?',
        answer:
          'Son adet döneminin ilk günü (SAD) tarihinden hamilelik datalaması, SAD tarihinizi biliyorsanız ve düzenli 28 günlük döngüleri varsa, 3-5 gün içinde doğrudur. Menstrüel döngüleri düzensizse, tarih belirleme daha az doğrudur. İlk trimesterde (özellikle 13. haftadan önce) yapılan ultrason, hamilelik tarihini 3-5 gün içinde belirleyebilir ve tarih belirleme sonra daha güvenilirdir. İkinci trimester ultrasu hamileliği 1-2 hafta içinde ve üçüncü trimester ultrasu 2-4 hafta içinde tarihlendirilebilir, bu nedenle erken tarih belirleme genel olarak daha doğrudur.',
      },
      {
        question: 'İlk doğum öncesi ziyaretimi ne zaman planlamalıyım?',
        answer:
          'Çoğu sağlık hizmeti sağlayıcısı, adet kaçırdığınız ve pozitif hamilelik testi aldığınız zaman ilk doğum öncesi ziyaretini planlamayı önerir, tipik olarak hamileliğin 8-10. haftaları civarında. Bazı sağlayıcılar, risk faktörlerine veya tıbbi durumlarına sahipseniz, önceden planlamayı isteyebilirler. Erken doğum öncesi bakım, doğru tarihi belirlemeye, herhangi bir risk faktörünü tanımlamaya ve uygun tarama ve izlemeye başlamaya yardımcı olur.',
      },
      {
        question: 'Doğum tarihim yanlış görünüyorsa ne yapmalıyım?',
        answer:
          'Son adet döneminin ilk günü ne zaman olduğu veya hamilelik konusunda emin iseniz ve sağlık hizmeti sağlayıcısı tarafından verilen doğum tarihi önemli ölçüde farklıysa (bir haftadan fazla), erken bir ultrason daha doğru tarihi belirlemeye yardımcı olabilir. Ultrason tarihi, ilk trimesterde en doğru olduğundan, zamanı izin verirse, bu ultrason mümkün olduğunca erken yapılmalıdır. İkinci veya üçüncü trimesterde zaten iseniz, erken ultrason tarihine göre doğum tarihini güncellemek, erken ultrason SAD bazlı tarihten önemli ölçüde farklıysa yine de tercih edilir.',
      },
      {
        question: 'Doğum tarihimden önce doğum yapabilir miyim?',
        answer:
          'Evet, doğum tahmini doğum tarihinden önce meydana gelebilir. 37. haftadan önce doğum, prematüre kabul edilir, ancak bazı modern tıp, 37 haftayı erken term olarak kabul eder. 37-39. haftalar arasında doğum, erken termdir. 39+ haftalar doğum, terim doğumudur. Çoğu hamilelik, doğum tarihinden iki hafta önce veya sonra doğum yapar, ancak 37. haftadan itibaren herhangi bir zaman, doğum için güvenlidir. 37. haftadan önce doğum, tıbbi değerlendirme gerektirir ve prematürelükle ilişkili riskleri yönetmek için daha dikkatli bir şekilde yönetilir.',
      },
      {
        question: 'Trimesterler arasındaki fark nedir?',
        answer:
          'Üç trimester hamileliğin farklı aşamalarını temsil eder. Birinci trimester (1-13. haftalar), görünmez hamilelik ile hızlı organ gelişimini içerir ve sabah bulantısı gibi yaygın semptomlar vardır. İkinci trimester (14-26. haftalar), hızlı fetal büyüme ile karakterize edilir ve genellikle "balayı dönemi" olarak adlandırılır ve artan enerji ve annenin fetal hareketi hissetmesiyle. Üçüncü trimester (27-40. haftalar), son kilo alma ve doğuma hazırlık içerir, önemli kilo alımı ve anne rahatsızlığı ile. Her trimeterin farklı doğum öncesi tarama ve test önerileri vardır.',
      },
      {
        question: 'Bebek boyutu nasıl tahmin edilir?',
        answer:
          'Bebek boyutu, ultrason ölçümleri aracılığıyla tahmin edilir. Yapılan ölçümler, biparietal çap (baş genişliği), femur uzunluğu (uyluk kemiği) ve baş çevresini içerir. Bu ölçümler, gestasyonel yaş için beklenen değerlerle karşılaştırılır. Tahmini fetal ağırlık, bu ölçümlerden hesaplanır, ancak ağırlığı ultrason tahminleri, özellikle hamilelik ilerledikçe %10-15 hata payına sahip olabilir. Genetik ve anne beslenme gibi faktörler, bebek boyutunu etkiler, bu nedenle aynı gestasyonel yaştaki bebekler arasında önemli normal varyasyon vardır.',
      },
      {
        question: 'Hamilelik sırasında hangi tarama testleri önerilir?',
        answer:
          'Önerilen tarama testleri değişir, ancak tipik olarak, ense kalınlığı ultrasu ve kromozomal anormalliklerin riskini değerlendirmek için kan testleri ile ilk trimester taraması (11-14. haftalar) içerir. İkinci trimester taraması, anatomi ultrasu (18-22. haftalar) ve isteğe bağlı dörtlü tarama kan testini içerir. Gestasyonel diyabet taraması, glukoz tolerans testiyle 24. hafta civarında yapılır. Grup B Streptokokus (GBS) testi, 35-37. haftalarda yapılır. Bazı kadınlar, 9-10. haftadan itibaren yapılabilen, non-invazif doğum öncesi test (NIPT) veya hücre içermeyen fetal DNA taramasını tercih ederler. Hangi tarama testlerinin durumunuz için uygun olduğunu öğrenmek için sağlık hizmeti sağlayıcınızla görüşün.',
      },
      {
        question: 'Fetal hareket azaldığını görürsem ne yapmalıyım?',
        answer:
          '24-28. haftaların başında, bebeğinizin normal hareket düzenlerine aşina olmalısınız. Özellikle üçüncü trimesterde hareket önemli ölçüde azaldığını düşünüyorsanız, sağlık hizmeti sağlayıcınıza derhal başvurun. Fetal hareketteki azalma bazen bebeğin durumunu gösteren ve değerlendirme gerektiren bir sorunu gösterebilir, fetüs izlemesi dahil. Sağlık hizmeti sağlayıcınız, bebeğin iyi olup olmadığını sağlamak için, non-stres testi veya diğer izleme yapabilir. Tıbbi değerlendirme olmadan hareket azaldığını asla normal görmemeyin.',
      },
      {
        question: 'Hamilelik sırasında seyahat edebilir miyim?',
        answer:
          'Hamilelik sırasında seyahat, genellikle sabah bulantısı tipik olarak çözüldüğü ve henüz ağır gebelik olmadığı ikinci trimesterde (14-20. haftalar) güvenlidir. Seyahat, birinci trimesterde (hamilelik kaybı riski ve sabah bulantısı nedeniyle) veya 36. haftadan sonra (doğum riski nedeniyle) önerilmez. Hava seyahati, genellikle 36. haftaya kadar güvenli kabul edilir, ancak havayollarının genellikle 34-36. hafta civarında kısıtlamaları vardır. Uzun araba gezileri, sık sık durmak ve gezmek için sık duraklarda içerilmelidir. Seyahat planlarını, uygun olduğundan emin olmak için sağlık hizmeti sağlayıcınızla görüşün.',
      },
      {
        question: 'Hamilelik sırasında normal kilo alımı nedir?',
        answer:
          'Hamilelik sırasında önerilen kilo alımı, doğum öncesi ağırlığına göre değişir: normal doğum öncesi ağırlığa (BMI 18,5-24,9) sahip kadınlar, 25-35 pound almalı; zayıf kadınlar (BMI < 18,5), 28-40 pound almalı; fazla kilolu kadınlar (BMI 25-29,9), 15-25 pound almalı; obez kadınlar (BMI ≥ 30), 11-20 pound almalı. Kilo alımı doğrusal değildir; çoğu kadın birinci trimesterde az kilo alır ve ikinci ve üçüncü trimesterlerde daha fazla alır. Bireysel koşullarınıza göre uygun kilo alımı hedefleri hakkında sağlık hizmeti sağlayıcınızla görüşün.',
      },
      {
        question: 'Hamilelik sırasında ne zaman işi bırakmalıyım?',
        answer:
          'Hamilelik sırasında işi bırakmanın zamanı, iş türüne, fiziksel taleplere, iş ortamına, anne sağlığına ve hamilelik komplikasyonlarına göre değişir. Birçok kadın hamilelik boyunca, özellikle daha az fiziksel talep gücü gerektiren işlerde sorun olmadan çalışır. Zararlı maddelere maruziyeti, önemli fiziksel emek, uzun süreli ayakta durma veya yüksek stresli işler, işi daha erken bırakmayı haklı gösterebilir. Sağlık hizmeti sağlayıcınız ve işveren, uyum ve işi bırakmanın tıbbi olarak tavsiye edildiği zamanı tartışmalıdır. Birçok kadın, 37-39. haftaların etrafında doğuma hazırlanmak için analık izni alır.',
      },
      {
        question: 'Hamilelik sırasında leke veya kanama normali?',
        answer:
          'Erken hamilelikta hafif leke, implantasyonun zamanında (genellikle pozitif hamilelik testi olmadan önce) oluşabilir ve genellikle normaldir. Hafif leke, cinsel ilişkiden veya servikal muayenelerden sonra oluşabilir. Ancak, hamilelik sırasında herhangi bir vajinal kanama, özellikle karın ağrısı veya kramplarıyla birlikte, sağlık hizmeti sağlayıcınıza bildirilmelidir. Önemli kanama, hamilelik kaybı, ektopik hamilelik, plasental anormallikleri veya enfeksiyon gibi komplikasyonları gösterebilir. Endişe verici kanama, derhal tıbbi değerlendirme gerektirir.',
      },
    ],
  },
};
