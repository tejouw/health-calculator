import { CalculatorContent } from '@/types/calculator';

export const ageContent: CalculatorContent = {
  en: {
    whatIs:
      'An age calculator is a practical tool that computes your exact age from your date of birth to any given date, typically today. Unlike simply knowing you\'re "30 years old," this calculator provides precise measurements including years, months, and days, giving you a complete picture of exactly how long you\'ve been alive. The concept of calculating age seems straightforward, but it involves complex date arithmetic accounting for varying month lengths (28-31 days), leap years, and calendar irregularities. Age calculators have become essential tools for various purposes: legal documentation requiring exact age verification, medical consultations where precise age affects treatment decisions, insurance applications with age-specific policies, retirement planning calculations, milestone celebrations (like celebrating 10,000 days alive), and genealogical research tracking family histories. Beyond the primary age calculation, modern age calculators often provide fascinating supplementary information such as zodiac signs (both Western and Chinese), birthstones, the day of the week you were born, total days lived, and countdown to your next birthday. This additional context transforms a simple calculation into an engaging exploration of time and personal history. Understanding your exact age has practical implications too—many legal rights, privileges, and responsibilities are tied to specific ages (voting at 18, retirement benefits at 65, etc.), making precise age calculation more than just a curiosity.',

    howToCalculate:
      'Using an age calculator is straightforward but understanding the underlying process helps appreciate its accuracy. To calculate your age, first enter your birth date including the day, month, and year. The calculator then compares this to the target date (usually today\'s date). The calculation proceeds as follows: First, subtract the birth year from the current year to get a preliminary age. Then, check if the birthday has occurred this year by comparing the birth month and day to the current month and day. If the birthday hasn\'t happened yet this year, subtract one from the preliminary age. For months and days, the calculator counts from the last birthday: if today is July 15 and your birthday is March 20, you\'re 3 months and 25 days past your birthday. The complexity arises with varying month lengths—if you were born on January 31 and today is March 2, how many months have passed? Different calculators handle edge cases differently, but the standard approach counts complete months and remaining days. For example, born on May 15, 1990, and calculated on December 7, 2024: that\'s 34 complete years (birthday in May has passed), 6 complete months (June through November), and 22 days into December. The formula: Current Date - Birth Date = Age, but the actual implementation requires careful handling of calendar mathematics.',

    formulaDetails:
      'The age calculation formula appears simple but involves sophisticated date arithmetic. The basic concept: Age = Current Date - Birth Date. However, because our calendar system has months of varying lengths (28-31 days) and leap years, the calculation requires careful handling. The standard algorithm works as follows: Let B = Birth Date (day_b, month_b, year_b) and T = Target Date (day_t, month_t, year_t). Years = year_t - year_b, then adjust: if (month_t < month_b) OR (month_t = month_b AND day_t < day_b), subtract 1 from Years. For months: if day_t >= day_b, Months = month_t - month_b (adjust for year boundary). If day_t < day_b, Months = month_t - month_b - 1 (borrowing from months). For days: if day_t >= day_b, Days = day_t - day_b. If day_t < day_b, Days = (days in previous month) - day_b + day_t. Leap year consideration: February has 29 days every 4 years, except century years not divisible by 400 (so 2000 was a leap year, but 1900 was not). Total days calculation uses the Julian Day Number or simply counts days from a reference point: Total Days = (year_t - year_b) × 365 + leap_days + days_in_complete_months + remaining_days. This accounts for the 146,097 days in every 400-year cycle (97 leap years). Zodiac calculations use fixed date ranges: Aries (March 21 - April 19), Taurus (April 20 - May 20), and so on, with slight variations in different systems.',

    medicalDisclaimer:
      'While an age calculator provides accurate chronological age, it\'s important to understand that chronological age differs from biological age. Biological age reflects your body\'s actual condition based on cellular health, lifestyle factors, and genetics—a 50-year-old with excellent health habits might have the biological age of a 40-year-old. This calculator provides chronological age only and should not be used for medical age-related assessments without professional guidance. For medical decisions, insurance evaluations, legal proceedings, or any official purpose requiring age verification, always use official documents (birth certificate, passport, ID card) and consult appropriate professionals. Age-related health recommendations, screening schedules, and medical guidelines should be discussed with healthcare providers who consider your complete health profile. This tool is for informational and entertainment purposes.',

    references: [
      'United States Naval Observatory - Astronomical Algorithms and Calendar Calculations',
      'International Organization for Standardization - ISO 8601 Date and Time Format',
      'Gregorian Calendar Reform of 1582 - Historical Calendar Systems',
      'World Health Organization - Age Classification Standards',
      'International Astronomical Union - Zodiac Constellation Boundaries',
      'Chinese Calendar Research - Traditional Zodiac Cycle Documentation',
    ],

    tips: [
      'Bookmark this calculator to easily check your exact age anytime or calculate ages for important documents',
      'Use the total days count to plan special celebrations like your 10,000th or 20,000th day alive',
      'Compare your chronological age to age milestones for various legal rights and privileges in your country',
      'Remember that zodiac dates can vary slightly between sources—this calculator uses the most common Western astrology dates',
      'For legal or official purposes, always verify age calculations against official birth documents',
      'Try calculating your age on significant future dates to plan milestone birthday celebrations',
      'The Chinese zodiac follows the lunar calendar, so early-year births may belong to the previous year\'s animal',
      'Use the "days until birthday" countdown to plan celebrations or set reminder notifications',
    ],

    faqs: [
      {
        question: 'How is age calculated exactly?',
        answer:
          'Age is calculated by finding the difference between your birth date and today\'s date. The calculator counts complete years (from birthday to birthday), then complete months since your last birthday, and finally remaining days. For example, if you were born on March 15, 1990, and today is December 7, 2024, you are 34 years, 8 months, and 22 days old. The calculation accounts for varying month lengths (28-31 days) and leap years to ensure accuracy.',
      },
      {
        question: 'Why does my age show months and days, not just years?',
        answer:
          'Showing years, months, and days provides a complete and precise age measurement. This precision is valuable for medical records (pediatric growth charts use months), legal documents requiring exact age, insurance applications with specific age cutoffs, and personal milestones. Saying you\'re "30 years, 6 months, and 15 days old" is more accurate than just "30 years old," especially when half a year makes a difference.',
      },
      {
        question: 'How are total days lived calculated?',
        answer:
          'Total days lived is calculated by counting every day from your birth date to today, including leap years (366 days) and regular years (365 days). The calculation uses the Gregorian calendar rules: leap years occur every 4 years except century years not divisible by 400 (2000 was a leap year, 1900 was not). If you were born on January 1, 1990, by January 1, 2024, you would have lived 12,419 days, accounting for 8 leap years in that period.',
      },
      {
        question: 'What determines my zodiac sign?',
        answer:
          'Your Western zodiac sign (Aries, Taurus, etc.) is determined by your birth date using fixed date ranges. The twelve signs follow the sun\'s apparent path through constellations: Aries (Mar 21-Apr 19), Taurus (Apr 20-May 20), Gemini (May 21-Jun 20), Cancer (Jun 21-Jul 22), Leo (Jul 23-Aug 22), Virgo (Aug 23-Sep 22), Libra (Sep 23-Oct 22), Scorpio (Oct 23-Nov 21), Sagittarius (Nov 22-Dec 21), Capricorn (Dec 22-Jan 19), Aquarius (Jan 20-Feb 18), and Pisces (Feb 19-Mar 20). Dates may vary by 1-2 days between sources.',
      },
      {
        question: 'How is the Chinese zodiac different from Western zodiac?',
        answer:
          'The Chinese zodiac uses a 12-year cycle of animals (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig) rather than monthly signs. Your Chinese zodiac is determined by your birth year, not your birth date. However, because the Chinese calendar is lunar, the new year falls between January 21 and February 20. If you were born in January or early February, you might belong to the previous year\'s animal. For example, 2024 is the Year of the Dragon, but someone born January 15, 2024, would be a Rabbit (2023\'s animal).',
      },
      {
        question: 'What is a birthstone and how is it determined?',
        answer:
          'Birthstones are gemstones traditionally associated with each month of the year. This practice dates back to ancient times with connections to the biblical Breastplate of Aaron. Modern birthstones (standardized by jewelers in 1912) are: January-Garnet, February-Amethyst, March-Aquamarine, April-Diamond, May-Emerald, June-Pearl, July-Ruby, August-Peridot, September-Sapphire, October-Opal, November-Topaz, December-Turquoise. Your birthstone is simply the gem associated with your birth month.',
      },
      {
        question: 'Is this age calculator accurate for leap year birthdays?',
        answer:
          'Yes, this calculator accurately handles leap year birthdays (February 29). For people born on February 29, the calculator recognizes this special date and calculates age correctly. In non-leap years, "leaplings" typically celebrate on February 28 or March 1, but legally their birthday is still February 29. The calculator counts complete years from each February 29 to the next occurrence, which happens every 4 years (with century-year exceptions).',
      },
      {
        question: 'Can I calculate age for a future date?',
        answer:
          'This calculator is designed to calculate age from birth date to today. For future age calculations (like "how old will I be on my wedding day"), you would need to mentally add the difference or use a specialized future date calculator. The days-until-birthday feature helps with near-future planning by showing how many days remain until your next birthday, useful for countdown celebrations.',
      },
      {
        question: 'Why does my age seem off by a day sometimes?',
        answer:
          'Age calculations can appear off by a day due to timezone differences or how "today" is determined. The calculator uses your device\'s local date, but if you\'re checking near midnight or in a different timezone than where you were born, minor discrepancies can occur. Additionally, the question of whether you\'re "X years old" on the day before or the day of your birthday varies by culture and context. For official purposes, always reference your legal documents.',
      },
      {
        question: 'What practical uses does knowing my exact age have?',
        answer:
          'Exact age knowledge has many practical applications: verifying eligibility for age-restricted activities (voting, driving, retirement benefits), completing legal documents and official forms, medical consultations where age affects treatment protocols, insurance applications with age-based pricing, planning milestone celebrations (sweet 16, 10,000 days alive, golden birthday), genealogical research, and satisfying curiosity about personal statistics. The days-until-birthday feature helps plan birthday celebrations and events.',
      },
    ],
  },
  tr: {
    whatIs:
      'Yaş hesaplayıcı, doğum tarihinizden belirli bir tarihe (genellikle bugüne) kadar tam yaşınızı hesaplayan pratik bir araçtır. Sadece "30 yaşında" olduğunuzu bilmekten farklı olarak, bu hesaplayıcı yıl, ay ve gün dahil olmak üzere tam ölçümler sağlayarak ne kadar süredir hayatta olduğunuzun eksiksiz bir resmini sunar. Yaş hesaplama kavramı basit görünse de, değişen ay uzunluklarını (28-31 gün), artık yılları ve takvim düzensizliklerini hesaba katan karmaşık tarih aritmetiği içerir. Yaş hesaplayıcıları çeşitli amaçlar için vazgeçilmez araçlar haline gelmiştir: tam yaş doğrulaması gerektiren yasal belgeler, kesin yaşın tedavi kararlarını etkilediği tıbbi konsültasyonlar, yaşa özel poliçeli sigorta başvuruları, emeklilik planlama hesaplamaları, kilometre taşı kutlamaları (10.000 gün yaşamış olmak gibi) ve aile geçmişlerini takip eden soy araştırmaları. Birincil yaş hesaplamasının ötesinde, modern yaş hesaplayıcıları genellikle burç işaretleri (hem Batı hem de Çin), doğum taşları, doğduğunuz haftanın günü, yaşanan toplam günler ve bir sonraki doğum gününüze geri sayım gibi büyüleyici ek bilgiler sağlar.',

    howToCalculate:
      'Yaş hesaplayıcı kullanmak basittir, ancak temel süreci anlamak doğruluğunu takdir etmeye yardımcı olur. Yaşınızı hesaplamak için önce gün, ay ve yıl dahil doğum tarihinizi girin. Hesaplayıcı daha sonra bunu hedef tarihle (genellikle bugünün tarihi) karşılaştırır. Hesaplama şu şekilde ilerler: İlk olarak, ön yaş almak için doğum yılını mevcut yıldan çıkarın. Ardından, doğum ayı ve gününü mevcut ay ve günle karşılaştırarak bu yıl doğum gününün gerçekleşip gerçekleşmediğini kontrol edin. Doğum günü bu yıl henüz gerçekleşmediyse, ön yaştan bir çıkarın. Aylar ve günler için hesaplayıcı son doğum gününden sayar. Karmaşıklık, değişen ay uzunluklarıyla ortaya çıkar. Örneğin, 15 Mayıs 1990\'da doğmuş ve 7 Aralık 2024\'te hesaplanmış: bu 34 tam yıl (Mayıs\'taki doğum günü geçti), 6 tam ay (Haziran\'dan Kasım\'a) ve Aralık\'ın 22. günü.',

    formulaDetails:
      'Yaş hesaplama formülü basit görünür ancak sofistike tarih aritmetiği içerir. Temel kavram: Yaş = Mevcut Tarih - Doğum Tarihi. Ancak, takvim sistemimizde değişen uzunlukta aylar (28-31 gün) ve artık yıllar olduğundan, hesaplama dikkatli ele alınmayı gerektirir. Standart algoritma şu şekilde çalışır: B = Doğum Tarihi (gün_b, ay_b, yıl_b) ve T = Hedef Tarih (gün_t, ay_t, yıl_t) olsun. Yıllar = yıl_t - yıl_b, sonra ayarla: eğer (ay_t < ay_b) VEYA (ay_t = ay_b VE gün_t < gün_b) ise, Yıllardan 1 çıkar. Artık yıl değerlendirmesi: Şubat her 4 yılda bir 29 gündür, 400\'e bölünemeyen yüzyıl yılları hariç (yani 2000 artık yıldı, ancak 1900 değildi). Toplam gün hesaplaması Julian Gün Numarasını kullanır veya basitçe bir referans noktasından günleri sayar.',

    medicalDisclaimer:
      'Yaş hesaplayıcı doğru kronolojik yaş sağlarken, kronolojik yaşın biyolojik yaştan farklı olduğunu anlamak önemlidir. Biyolojik yaş, hücresel sağlık, yaşam tarzı faktörleri ve genetiğe dayalı olarak vücudunuzun gerçek durumunu yansıtır - mükemmel sağlık alışkanlıklarına sahip 50 yaşında bir kişi 40 yaşında bir kişinin biyolojik yaşına sahip olabilir. Bu hesaplayıcı yalnızca kronolojik yaş sağlar ve profesyonel rehberlik olmadan tıbbi yaş ile ilgili değerlendirmeler için kullanılmamalıdır. Tıbbi kararlar, sigorta değerlendirmeleri, yasal işlemler veya yaş doğrulaması gerektiren herhangi bir resmi amaç için her zaman resmi belgeler (doğum belgesi, pasaport, kimlik kartı) kullanın ve uygun profesyonellere danışın.',

    references: [
      'Türkiye İstatistik Kurumu - Nüfus ve Yaş Verileri',
      'Uluslararası Standardizasyon Örgütü - ISO 8601 Tarih ve Saat Formatı',
      'Gregoryen Takvim Reformu - Tarihsel Takvim Sistemleri',
      'Dünya Sağlık Örgütü - Yaş Sınıflandırma Standartları',
      'Uluslararası Astronomi Birliği - Burç Takımyıldızı Sınırları',
      'Çin Takvimi Araştırması - Geleneksel Zodyak Döngüsü Belgeleri',
    ],

    tips: [
      'Tam yaşınızı her an kolayca kontrol etmek veya önemli belgeler için yaş hesaplamak için bu hesaplayıcıyı yer imlerine ekleyin',
      'Toplam gün sayısını 10.000 veya 20.000. gününüz gibi özel kutlamaları planlamak için kullanın',
      'Kronolojik yaşınızı ülkenizdeki çeşitli yasal haklar ve ayrıcalıklar için yaş kilometre taşlarıyla karşılaştırın',
      'Burç tarihlerinin kaynaklar arasında biraz değişebileceğini unutmayın—bu hesaplayıcı en yaygın Batı astroloji tarihlerini kullanır',
      'Yasal veya resmi amaçlar için, yaş hesaplamalarını her zaman resmi doğum belgelerine karşı doğrulayın',
      'Kilometre taşı doğum günü kutlamalarını planlamak için önemli gelecek tarihlerinde yaşınızı hesaplamayı deneyin',
      'Çin burcu ay takvimini takip eder, bu nedenle yılın başındaki doğumlar önceki yılın hayvanına ait olabilir',
      'Kutlamaları planlamak veya hatırlatma bildirimleri ayarlamak için "doğum gününe kalan günler" geri sayımını kullanın',
    ],

    faqs: [
      {
        question: 'Yaş tam olarak nasıl hesaplanır?',
        answer:
          'Yaş, doğum tarihiniz ile bugünün tarihi arasındaki fark bulunarak hesaplanır. Hesaplayıcı tam yılları (doğum gününden doğum gününe), ardından son doğum gününüzden bu yana geçen tam ayları ve son olarak kalan günleri sayar. Örneğin, 15 Mart 1990\'da doğduysanız ve bugün 7 Aralık 2024 ise, 34 yıl 8 ay 22 gün yaşındasınız. Hesaplama, doğruluğu sağlamak için değişen ay uzunluklarını (28-31 gün) ve artık yılları hesaba katar.',
      },
      {
        question: 'Yaşım neden sadece yıl değil de ay ve gün gösteriyor?',
        answer:
          'Yıl, ay ve gün göstermek tam ve kesin bir yaş ölçümü sağlar. Bu hassasiyet tıbbi kayıtlar için (pediatrik büyüme tabloları ayları kullanır), tam yaş gerektiren yasal belgeler için, belirli yaş kesim noktaları olan sigorta başvuruları için ve kişisel kilometre taşları için değerlidir. "30 yıl 6 ay 15 gün" demek sadece "30 yaşında" demekten daha doğrudur, özellikle yarım yılın fark yarattığı durumlarda.',
      },
      {
        question: 'Yaşanan toplam günler nasıl hesaplanır?',
        answer:
          'Yaşanan toplam günler, doğum tarihinizden bugüne kadar her günün artık yıllar (366 gün) ve normal yıllar (365 gün) dahil olmak üzere sayılmasıyla hesaplanır. Hesaplama Gregoryen takvim kurallarını kullanır: artık yıllar 400\'e bölünemeyen yüzyıl yılları hariç her 4 yılda bir gerçekleşir (2000 artık yıldı, 1900 değildi). 1 Ocak 1990\'da doğduysanız, 1 Ocak 2024\'e kadar o dönemde 8 artık yılı hesaba katarak 12.419 gün yaşamış olursunuz.',
      },
      {
        question: 'Burcumu ne belirler?',
        answer:
          'Batı burcunuz (Koç, Boğa vb.) sabit tarih aralıkları kullanılarak doğum tarihinize göre belirlenir. On iki burç güneşin takımyıldızlardan geçen görünür yolunu takip eder: Koç (21 Mar-19 Nis), Boğa (20 Nis-20 May), İkizler (21 May-20 Haz), Yengeç (21 Haz-22 Tem), Aslan (23 Tem-22 Ağu), Başak (23 Ağu-22 Eyl), Terazi (23 Eyl-22 Eki), Akrep (23 Eki-21 Kas), Yay (22 Kas-21 Ara), Oğlak (22 Ara-19 Oca), Kova (20 Oca-18 Şub) ve Balık (19 Şub-20 Mar).',
      },
      {
        question: 'Çin burcu Batı burcundan nasıl farklıdır?',
        answer:
          'Çin burcu, aylık işaretler yerine 12 yıllık bir hayvan döngüsü (Fare, Öküz, Kaplan, Tavşan, Ejderha, Yılan, At, Keçi, Maymun, Horoz, Köpek, Domuz) kullanır. Çin burcunuz doğum tarihinize değil, doğum yılınıza göre belirlenir. Ancak, Çin takvimi ay takvimine dayandığından, yeni yıl 21 Ocak ile 20 Şubat arasına düşer. Ocak veya Şubat başında doğduysanız, önceki yılın hayvanına ait olabilirsiniz. Örneğin, 2024 Ejderha Yılı\'dır, ancak 15 Ocak 2024\'te doğan biri Tavşan\'dır (2023\'ün hayvanı).',
      },
      {
        question: 'Doğum taşı nedir ve nasıl belirlenir?',
        answer:
          'Doğum taşları, yılın her ayıyla geleneksel olarak ilişkilendirilen değerli taşlardır. Bu uygulama, Harun\'un Göğüslüğü\'ne bağlantıları olan antik çağlara dayanır. Modern doğum taşları (1912\'de kuyumcular tarafından standartlaştırılmış): Ocak-Granat, Şubat-Ametist, Mart-Akuamarin, Nisan-Elmas, Mayıs-Zümrüt, Haziran-İnci, Temmuz-Yakut, Ağustos-Peridot, Eylül-Safir, Ekim-Opal, Kasım-Topaz, Aralık-Turkuaz. Doğum taşınız basitçe doğum ayınızla ilişkilendirilen taştır.',
      },
      {
        question: 'Bu yaş hesaplayıcı artık yıl doğumları için doğru mu?',
        answer:
          'Evet, bu hesaplayıcı artık yıl doğum günlerini (29 Şubat) doğru bir şekilde ele alır. 29 Şubat\'ta doğan kişiler için hesaplayıcı bu özel tarihi tanır ve yaşı doğru hesaplar. Artık olmayan yıllarda, "atlayanlar" genellikle 28 Şubat veya 1 Mart\'ta kutlama yapar, ancak yasal olarak doğum günleri hala 29 Şubat\'tır. Hesaplayıcı, her 4 yılda bir gerçekleşen (yüzyıl yılı istisnaları hariç) her 29 Şubat\'tan bir sonrakine kadar tam yılları sayar.',
      },
      {
        question: 'Yaşım bazen neden bir gün kaymış görünüyor?',
        answer:
          'Yaş hesaplamaları saat dilimi farklılıkları veya "bugün"ün nasıl belirlendiği nedeniyle bir gün kaymış görünebilir. Hesaplayıcı cihazınızın yerel tarihini kullanır, ancak gece yarısına yakın veya doğduğunuz yerden farklı bir saat diliminde kontrol ediyorsanız, küçük tutarsızlıklar olabilir. Ek olarak, doğum gününüzün önceki gününde mi yoksa gününde mi "X yaşında" olduğunuz sorusu kültür ve bağlama göre değişir. Resmi amaçlar için her zaman yasal belgelerinize başvurun.',
      },
      {
        question: 'Tam yaşımı bilmenin pratik kullanımları nelerdir?',
        answer:
          'Tam yaş bilgisinin birçok pratik uygulaması vardır: yaşa bağlı faaliyetler için uygunluğu doğrulama (oy kullanma, araç kullanma, emeklilik hakları), yasal belgeleri ve resmi formları tamamlama, yaşın tedavi protokollerini etkilediği tıbbi konsültasyonlar, yaşa dayalı fiyatlandırmalı sigorta başvuruları, kilometre taşı kutlamalarını planlama (tatlı 16, 10.000 gün yaşama, altın doğum günü), soy araştırması ve kişisel istatistikler hakkında merakı giderme. Doğum gününe kalan günler özelliği doğum günü kutlamalarını ve etkinlikleri planlamaya yardımcı olur.',
      },
    ],
  },
};
