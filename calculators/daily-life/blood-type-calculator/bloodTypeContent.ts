import { CalculatorContent } from '@/types/calculator';

export const bloodTypeContent: CalculatorContent = {
  en: {
    whatIs:
      'The Blood Type Calculator is a genetics-based tool that predicts the possible blood types a child can inherit from their parents. Blood type is determined by the ABO blood group system and the Rh factor, both of which follow Mendelian inheritance patterns. Every person inherits one ABO allele from each parent — A, B, or O — where A and B are codominant and O is recessive. Similarly, the Rh factor is determined by the D antigen: Rh-positive (D is dominant) or Rh-negative (dd is recessive). By knowing both parents\' blood types, you can calculate the probability of each possible blood type for their children. This calculator is widely used by expecting parents, genetics students, and anyone curious about hereditary blood type patterns.',

    howToCalculate:
      'To calculate your child\'s possible blood type, follow these steps:\n\n1. Select the first parent\'s blood group (A, B, AB, or O) and Rh factor (+ or -).\n2. Select the second parent\'s blood group and Rh factor.\n3. Click "Calculate" to see all possible blood types for the child with their probabilities.\n\nThe calculator uses Punnett square analysis to determine all possible allele combinations. For example, if Parent 1 is blood type A (possible genotypes: AA or AO) and Parent 2 is blood type B (possible genotypes: BB or BO), their child could potentially be A, B, AB, or O depending on the specific alleles each parent carries. The Rh factor is calculated separately: two Rh-positive parents can have an Rh-negative child if both carry a recessive d allele.',

    interpretation:
      'The results show each possible blood type with its approximate probability percentage. Higher percentages indicate more likely outcomes, but remember these are statistical probabilities — the actual blood type of any individual child is determined at conception. A probability of 0% means that combination is genetically impossible given the parents\' blood types. The Punnett square visualization shows how the alleles combine. Note that parents with blood type A or B may be homozygous (AA, BB) or heterozygous (AO, BO), which affects the range of possible outcomes. The calculator accounts for both possibilities, giving averaged probabilities.',

    limitations:
      'This calculator provides approximate probabilities based on standard Mendelian genetics. Actual blood type inheritance can be affected by rare genetic variants such as the Bombay phenotype (h/h genotype), cis-AB (where both A and B alleles are on the same chromosome), weak A or B subgroups, and chimerism. These rare exceptions occur in less than 0.01% of the population. The calculator assumes standard ABO and Rh genetics and does not account for these rare variants. For definitive blood type determination, a laboratory blood test is always required. This tool is for educational and informational purposes only.',

    healthRisks:
      'Rh incompatibility is the most significant health concern related to blood type inheritance. When an Rh-negative mother carries an Rh-positive baby, her immune system may produce antibodies against the baby\'s red blood cells. This condition, known as hemolytic disease of the newborn (HDN), can cause anemia, jaundice, and in severe cases, complications for the baby. Modern medicine prevents this with Rh immunoglobulin (RhIg/Anti-D) injections given to Rh-negative mothers during pregnancy and after delivery. If you are Rh-negative and your partner is Rh-positive, discuss Rh incompatibility prevention with your healthcare provider.\n\nResearch also suggests associations between blood types and certain health conditions: Type O may have lower risk of heart disease but higher risk of stomach ulcers, Type A may have slightly higher cardiovascular risk, and Type AB may have increased risk of cognitive impairment. However, these associations are statistical and should not cause concern for individuals.',

    medicalDisclaimer:
      'This blood type calculator is for educational and informational purposes only. It provides approximate probabilities based on standard Mendelian genetics. For accurate blood type determination, a laboratory blood test is required. If you have concerns about Rh incompatibility or blood type-related health issues, please consult your healthcare provider.',

    references: [
      'Dean L. Blood Groups and Red Cell Antigens. National Center for Biotechnology Information (NCBI), 2005.',
      'American Red Cross. Blood Types. www.redcrossblood.org',
      'Storry JR, Olsson ML. The ABO blood group system revisited. Immunohematology, 2009;25(2):48-59.',
      'Moise KJ Jr. Management of Rhesus Alloimmunization in Pregnancy. Obstetrics & Gynecology, 2008;112(1):164-176.',
      'World Health Organization. Blood Safety and Availability. WHO Fact Sheet, 2023.',
      'Liumbruno GM, Franchini M. Beyond immunohaematology: the role of the ABO blood group in human diseases. Blood Transfusion, 2013;11(4):491-499.',
    ],

    tips: [
      'Both parents need to know their blood type for accurate results — check your medical records or ask your doctor.',
      'Blood type is determined at conception and never changes throughout life.',
      'O-negative is the universal donor — it can be given to anyone in emergencies.',
      'AB-positive is the universal recipient — it can receive blood from any type.',
      'Rh-negative mothers should discuss Rh immunoglobulin with their doctor during pregnancy.',
      'Knowing your blood type is important for emergencies, surgeries, and blood donation.',
      'Blood type is just one of many inherited traits — it follows the same Mendelian genetics as eye color and other traits.',
      'Regular blood donation saves lives — consider donating if you\'re eligible.',
    ],

    faqs: [
      {
        question: 'Can two parents with type O blood have a child with type A or B?',
        answer:
          'No. Two type O parents both have the genotype OO, so they can only pass O alleles to their children. All children will have type O blood. If a child has type A or B, it may indicate a need for further genetic investigation.',
      },
      {
        question: 'Can two Rh-positive parents have an Rh-negative child?',
        answer:
          'Yes. If both parents are heterozygous for the Rh factor (Dd genotype), there is a 25% chance their child will be Rh-negative (dd genotype). This is completely normal Mendelian inheritance.',
      },
      {
        question: 'What is Rh incompatibility and should I be worried?',
        answer:
          'Rh incompatibility occurs when an Rh-negative mother carries an Rh-positive baby. The mother\'s immune system may attack the baby\'s red blood cells. Modern medicine prevents this with Rh immunoglobulin injections, making serious complications very rare.',
      },
      {
        question: 'Is blood type related to personality?',
        answer:
          'There is no scientific evidence linking blood type to personality traits. While this belief is popular in some cultures, particularly in Japan and South Korea, scientific studies have consistently found no correlation between blood type and personality characteristics.',
      },
      {
        question: 'Can a child have a different blood type from both parents?',
        answer:
          'Yes, absolutely. For example, a parent with type A (genotype AO) and a parent with type B (genotype BO) can have a child with type O (genotype OO), which is different from both parents. This is normal genetic inheritance.',
      },
      {
        question: 'How accurate is this blood type calculator?',
        answer:
          'The calculator is accurate for standard ABO and Rh genetics, which covers over 99.9% of the population. Rare genetic variants like the Bombay phenotype or cis-AB can produce unexpected results but are extremely uncommon.',
      },
      {
        question: 'Why should I know my blood type?',
        answer:
          'Knowing your blood type is important for blood transfusions, organ transplants, pregnancy planning (Rh compatibility), emergency medical situations, and blood donation eligibility. It\'s a fundamental piece of medical information.',
      },
    ],
  },

  tr: {
    whatIs:
      'Kan Grubu Hesaplayıcı, anne ve babanın kan gruplarına göre bebeğin sahip olabileceği kan gruplarını tahmin eden genetik tabanlı bir araçtır. Kan grubu, ABO kan grubu sistemi ve Rh faktörü tarafından belirlenir ve her ikisi de Mendel kalıtım kurallarına uyar. Her kişi, ebeveynlerinden birer ABO aleli (A, B veya O) miras alır; A ve B kodominant, O ise resesiftir (çekinik). Benzer şekilde, Rh faktörü D antijeni tarafından belirlenir: Rh-pozitif (D dominant) veya Rh-negatif (dd resesif). Her iki ebeveynin kan grubunu bilerek, çocuklarının olası kan gruplarının olasılığını hesaplayabilirsiniz. Bu hesaplayıcı, bebek bekleyen aileler, genetik öğrencileri ve kalıtsal kan grubu örüntülerini merak eden herkes tarafından yaygın olarak kullanılmaktadır.',

    howToCalculate:
      'Bebeğinizin olası kan grubunu hesaplamak için şu adımları izleyin:\n\n1. Birinci ebeveynin kan grubunu (A, B, AB veya O) ve Rh faktörünü (+ veya -) seçin.\n2. İkinci ebeveynin kan grubunu ve Rh faktörünü seçin.\n3. Bebeğin tüm olası kan gruplarını olasılıklarıyla birlikte görmek için "Hesapla" düğmesine tıklayın.\n\nHesaplayıcı, tüm olası alel kombinasyonlarını belirlemek için Punnett karesi analizini kullanır. Örneğin, 1. Ebeveyn A kan grubuna (olası genotipler: AA veya AO) ve 2. Ebeveyn B kan grubuna (olası genotipler: BB veya BO) sahipse, her ebeveynin taşıdığı spesifik alellere bağlı olarak çocukları A, B, AB veya O olabilir. Rh faktörü ayrı hesaplanır: her iki Rh-pozitif ebeveyn de resesif d aleli taşıyorsa, Rh-negatif bir çocuğa sahip olabilirler.',

    interpretation:
      'Sonuçlar, her olası kan grubunu yaklaşık olasılık yüzdesiyle birlikte gösterir. Daha yüksek yüzdeler daha olası sonuçları gösterir, ancak bunların istatistiksel olasılıklar olduğunu unutmayın — herhangi bir çocuğun gerçek kan grubu gebe kalma anında belirlenir. %0 olasılık, ebeveynlerin kan grupları göz önüne alındığında o kombinasyonun genetik olarak imkansız olduğu anlamına gelir. Punnett karesi görselleştirmesi alellerin nasıl birleştiğini gösterir. A veya B kan grubuna sahip ebeveynlerin homozigot (AA, BB) veya heterozigot (AO, BO) olabileceğini ve bunun olası sonuçların aralığını etkilediğini unutmayın. Hesaplayıcı her iki olasılığı da hesaba katarak ortalama olasılıklar verir.',

    limitations:
      'Bu hesaplayıcı, standart Mendel genetiğine dayalı yaklaşık olasılıklar sunar. Gerçek kan grubu kalıtımı, Bombay fenotipi (h/h genotipi), cis-AB (hem A hem B alellerinin aynı kromozom üzerinde olması), zayıf A veya B alt grupları ve kimerizm gibi nadir genetik varyantlardan etkilenebilir. Bu nadir istisnalar nüfusun %0,01\'inden azında görülür. Hesaplayıcı standart ABO ve Rh genetiğini varsayar ve bu nadir varyantları hesaba katmaz. Kesin kan grubu tespiti için her zaman laboratuvar kan testi gereklidir. Bu araç yalnızca eğitim ve bilgi amaçlıdır.',

    healthRisks:
      'Rh uyuşmazlığı, kan grubu kalıtımıyla ilgili en önemli sağlık endişesidir. Rh-negatif bir anne Rh-pozitif bir bebek taşıdığında, annenin bağışıklık sistemi bebeğin kırmızı kan hücrelerine karşı antikor üretebilir. Yenidoğanın hemolitik hastalığı (YHH) olarak bilinen bu durum, anemi, sarılık ve ciddi vakalarda bebeğe komplikasyonlara neden olabilir. Modern tıp, hamilelik sırasında ve doğumdan sonra Rh-negatif annelere verilen Rh immünoglobulin (RhIg/Anti-D) enjeksiyonlarıyla bunu önler. Rh-negatifseniz ve partneriniz Rh-pozitifse, Rh uyuşmazlığı önleme hakkında sağlık uzmanınızla görüşün.\n\nAraştırmalar ayrıca kan grupları ile belirli sağlık durumları arasında ilişkiler olduğunu da göstermektedir: O grubu kalp hastalığı riskinin daha düşük ancak mide ülseri riskinin daha yüksek olabileceği, A grubunun kardiyovasküler riskin biraz daha yüksek olabileceği ve AB grubunun bilişsel bozulma riskinin artabileceği öne sürülmektedir. Ancak bu ilişkiler istatistikseldir ve bireyler için endişe nedeni olmamalıdır.',

    medicalDisclaimer:
      'Bu kan grubu hesaplayıcısı yalnızca eğitim ve bilgilendirme amaçlıdır. Standart Mendel genetiğine dayalı yaklaşık olasılıklar sunar. Doğru kan grubu tespiti için laboratuvar kan testi gereklidir. Rh uyuşmazlığı veya kan grubuyla ilgili sağlık sorunları hakkında endişeleriniz varsa lütfen sağlık uzmanınıza danışın.',

    references: [
      'Dean L. Blood Groups and Red Cell Antigens. National Center for Biotechnology Information (NCBI), 2005.',
      'American Red Cross. Blood Types. www.redcrossblood.org',
      'Storry JR, Olsson ML. The ABO blood group system revisited. Immunohematology, 2009;25(2):48-59.',
      'Moise KJ Jr. Management of Rhesus Alloimmunization in Pregnancy. Obstetrics & Gynecology, 2008;112(1):164-176.',
      'Dünya Sağlık Örgütü. Kan Güvenliği ve Erişilebilirliği. WHO Bilgi Notu, 2023.',
      'Liumbruno GM, Franchini M. Beyond immunohaematology: the role of the ABO blood group in human diseases. Blood Transfusion, 2013;11(4):491-499.',
    ],

    tips: [
      'Doğru sonuçlar için her iki ebeveynin de kan grubunu bilmesi gerekir — sağlık kayıtlarınızı kontrol edin veya doktorunuza sorun.',
      'Kan grubu gebe kalma anında belirlenir ve hayat boyunca asla değişmez.',
      'O-negatif evrensel vericidir — acil durumlarda herkese verilebilir.',
      'AB-pozitif evrensel alıcıdır — herhangi bir kan grubundan kan alabilir.',
      'Rh-negatif anneler, hamilelik sırasında doktorlarıyla Rh immünoglobulin hakkında konuşmalıdır.',
      'Kan grubunuzu bilmek acil durumlar, ameliyatlar ve kan bağışı için önemlidir.',
      'Kan grubu, miras alınan birçok özellikten sadece biridir — göz rengi ve diğer özelliklerle aynı Mendel genetiğini takip eder.',
      'Düzenli kan bağışı hayat kurtarır — uygunsanız bağış yapmayı düşünün.',
    ],

    faqs: [
      {
        question: 'İki O grubu ebeveynden A veya B grubu çocuk olabilir mi?',
        answer:
          'Hayır. İki O grubu ebeveynin her ikisi de OO genotipine sahiptir, bu nedenle çocuklarına yalnızca O aleli aktarabilirler. Tüm çocuklar O grubu kan grubuna sahip olacaktır. Eğer çocuk A veya B grubundaysa, ileri genetik araştırma gerekebilir.',
      },
      {
        question: 'İki Rh-pozitif ebeveynden Rh-negatif çocuk olabilir mi?',
        answer:
          'Evet. Her iki ebeveyn de Rh faktörü için heterozigotsa (Dd genotipi), çocuklarının Rh-negatif (dd genotipi) olma olasılığı %25\'tir. Bu tamamen normal Mendel kalıtımıdır.',
      },
      {
        question: 'Rh uyuşmazlığı nedir ve endişelenmeli miyim?',
        answer:
          'Rh uyuşmazlığı, Rh-negatif bir annenin Rh-pozitif bir bebek taşıması durumunda ortaya çıkar. Annenin bağışıklık sistemi bebeğin kırmızı kan hücrelerine saldırabilir. Modern tıp bunu Rh immünoglobulin enjeksiyonlarıyla önler, bu da ciddi komplikasyonları çok nadir hale getirir.',
      },
      {
        question: 'Kan grubu kişilikle ilişkili midir?',
        answer:
          'Kan grubunu kişilik özellikleriyle ilişkilendiren bilimsel bir kanıt yoktur. Bu inanış bazı kültürlerde, özellikle Japonya ve Güney Kore\'de popüler olsa da, bilimsel çalışmalar kan grubu ile kişilik özellikleri arasında tutarlı bir şekilde hiçbir ilişki bulamamıştır.',
      },
      {
        question: 'Çocuğun kan grubu her iki ebeveynden de farklı olabilir mi?',
        answer:
          'Evet, kesinlikle. Örneğin, A grubunda bir ebeveyn (AO genotipi) ve B grubunda bir ebeveyn (BO genotipi), her iki ebeveynden de farklı olan O grubu (OO genotipi) bir çocuğa sahip olabilir. Bu normal genetik kalıtımdır.',
      },
      {
        question: 'Bu kan grubu hesaplayıcısı ne kadar doğrudur?',
        answer:
          'Hesaplayıcı, nüfusun %99,9\'undan fazlasını kapsayan standart ABO ve Rh genetiği için doğrudur. Bombay fenotipi veya cis-AB gibi nadir genetik varyantlar beklenmedik sonuçlar üretebilir ancak son derece nadirdir.',
      },
      {
        question: 'Kan grubumu neden bilmeliyim?',
        answer:
          'Kan grubunuzu bilmek kan transfüzyonları, organ nakli, hamilelik planlaması (Rh uyumluluğu), acil tıbbi durumlar ve kan bağışı uygunluğu için önemlidir. Bu temel bir tıbbi bilgidir.',
      },
    ],
  },
};
