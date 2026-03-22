import { CalculatorContent } from '@/types/calculator';

export const eyeColorContent: CalculatorContent = {
  en: {
    whatIs:
      'The Eye Color Calculator is a genetics-based tool that predicts the probability of a baby having brown, blue, green, or hazel eyes based on the eye colors of both parents and optionally grandparents. Eye color is one of the most fascinating examples of human genetics, determined primarily by the interaction of genes OCA2 and HERC2 located on chromosome 15, along with several other modifier genes. While simplified models cannot capture the full complexity of polygenic inheritance, they can provide reasonable probability estimates based on known dominance relationships between alleles. Brown eye color is typically dominant over green and blue, while green is dominant over blue. This calculator uses a two-gene model combined with Mendelian inheritance principles to generate probability distributions for each possible eye color outcome. Adding grandparent information increases prediction accuracy by helping narrow down the likely genotypes of each parent.',

    howToCalculate:
      `To predict your baby's eye color, start by selecting both parents' eye colors from the four options: brown, blue, green, or hazel. For better accuracy, expand the optional grandparents section and select the eye colors of all four grandparents (maternal grandmother, maternal grandfather, paternal grandmother, and paternal grandfather). The calculator then determines the most likely genotypes for each parent based on their eye color and family history, crosses all possible allele combinations, and calculates the probability of each eye color outcome for the child. The more family information you provide, the more accurate the prediction becomes, as grandparent data helps distinguish between homozygous (e.g., BB) and heterozygous (e.g., Bb) genotypes in brown-eyed parents.`,

    interpretation:
      'The results show the percentage probability for each eye color. The highest probability represents the most likely eye color for your baby, but remember that genetics involves probability, not certainty. A 60% chance of brown eyes means there is still a 40% chance of another color. Eye color genetics is polygenic, meaning multiple genes contribute to the final phenotype. Our simplified model captures the major genetic factors but cannot account for every possible variation. Factors like incomplete dominance, epistasis (gene interactions), and modifier genes can produce unexpected results. This is why two brown-eyed parents can occasionally have a blue-eyed child if both carry recessive blue alleles.',

    limitations:
      'This calculator uses a simplified genetic model that captures the major inheritance patterns but has inherent limitations. First, eye color is determined by at least 16 different genes, not just the two modeled here (OCA2/HERC2). Second, environmental factors and gene expression patterns can influence the final eye color. Third, the model cannot predict rare eye colors like amber, gray, or heterochromia (two different colored eyes). Fourth, the probabilities are statistical estimates, not guarantees - the actual outcome depends on the specific allele combination inherited. Fifth, eye color can change in the first years of life as melanin production develops. Most babies are born with lighter eyes that may darken over the first 1-3 years. Finally, ethnic background can influence eye color distribution patterns, which this simplified model does not fully account for.',

    healthRisks:
      'While eye color itself is not a health condition, certain eye colors may be associated with different health considerations. Lighter eye colors (blue, green) are associated with greater light sensitivity and may have a slightly higher risk of age-related macular degeneration and uveal melanoma. People with lighter eyes often benefit from wearing UV-protective sunglasses. Conversely, darker eye colors provide more natural UV protection due to higher melanin content in the iris. Heterochromia (different colored eyes) is usually harmless and genetic but can occasionally indicate underlying conditions like Waardenburg syndrome or Horner syndrome. If you notice sudden changes in eye color at any age, consult an ophthalmologist.',

    alternativeMeasures:
      'For families seeking more precise eye color predictions, genetic testing through companies offering DNA analysis can identify specific variants in eye color genes. The most significant markers are in the OCA2, HERC2, SLC24A4, SLC45A2, TYR, and IRF4 genes. However, even comprehensive genetic testing cannot guarantee eye color prediction with 100% accuracy due to the complex nature of polygenic traits. Prenatal genetic testing is generally not performed solely for eye color prediction, as it carries risks and is reserved for medical necessity.',

    demographicDifferences:
      'Eye color distribution varies significantly across different ethnic backgrounds and geographical regions. Brown eyes are by far the most common globally, found in approximately 70-79% of the world population. Blue eyes are most prevalent in Northern and Eastern European populations, particularly in Scandinavia and the Baltic states. Green eyes are rarest, found in only about 2% of the global population, predominantly in people of Northern and Western European descent, particularly Irish and Scottish populations. Hazel eyes are found across various ethnic groups but are most common in people of European, Middle Eastern, and North African descent. Asian and African populations have the highest prevalence of brown eyes (>95%), while European populations show the most diversity in eye color.',

    medicalDisclaimer:
      'This eye color calculator provides estimates based on simplified genetic models and is intended for educational and entertainment purposes only. The predictions are probabilistic, not diagnostic. Actual eye color outcomes depend on complex genetic interactions that cannot be fully captured by any calculator. This tool should not be used for any medical or legal purposes. Consult a genetic counselor for detailed information about genetic inheritance patterns.',

    references: [
      'Sturm RA, Larsson M. Genetics of human iris colour and patterns. Pigment Cell Melanoma Res. 2009;22(5):544-562.',
      'White D, Rabago-Smith M. Genotype-phenotype associations and human eye color. J Hum Genet. 2011;56(1):5-7.',
      'Liu F, et al. Eye color and the prediction of complex phenotypes from genotypes. Curr Biol. 2009;19(5):R192-R193.',
      'Kayser M, et al. Three genome-wide association studies and a linkage analysis identify HERC2 as a human iris color gene. Am J Hum Genet. 2008;82(2):411-423.',
      'Mackey DA, et al. Twins Eye Study of Tasmania: Heritability and prevalence of eye color. Invest Ophthalmol Vis Sci. 2009;50(10):4581-4587.',
    ],

    tips: [
      'Add grandparent eye colors for significantly more accurate predictions',
      'Remember that babies are often born with blue or gray eyes that change over time',
      'Two brown-eyed parents can have a blue-eyed child if both carry the recessive blue allele',
      'Eye color is just one of many traits your baby will inherit - each child is unique',
      'If you are curious about your own genetics, consider DNA testing for eye color gene variants',
      'Protect all eye colors from UV damage with quality sunglasses, especially lighter-colored eyes',
    ],

    faqs: [
      {
        question: 'Can two blue-eyed parents have a brown-eyed child?',
        answer:
          'It is extremely rare but technically possible. While blue eyes typically result from having two recessive alleles (bb), very rare genetic variations or mutations in other eye color genes could produce a darker-eyed child. In practice, two blue-eyed parents will almost always have blue-eyed children.',
      },
      {
        question: 'Why do some babies\' eye colors change after birth?',
        answer:
          'Most babies are born with less melanin in their irises, resulting in blue or gray eyes at birth. Over the first 6-12 months (sometimes up to 3 years), melanin production increases, and the eyes may darken to their permanent color. This is why many Caucasian babies are born with blue eyes that later turn brown or green.',
      },
      {
        question: 'Is eye color determined by just one gene?',
        answer:
          'No, eye color is a polygenic trait influenced by at least 16 different genes. The two most significant genes are OCA2 and HERC2, both located on chromosome 15. However, genes on chromosomes 5, 11, 13, and others also play roles. This is why eye color inheritance is more complex than simple Mendelian genetics would suggest.',
      },
      {
        question: 'What is the rarest eye color?',
        answer:
          'Green is the rarest natural eye color, found in only about 2% of the global population. It is most common in people of Northern and Western European descent. Even rarer are amber eyes, gray eyes, and heterochromia (two different colored eyes), though these are harder to quantify due to classification differences.',
      },
      {
        question: 'Can eye color change in adulthood?',
        answer:
          'While eye color is generally stable after childhood, subtle changes can occur with age. About 10-15% of Caucasian adults experience some change in eye color during their lifetime, usually a slight darkening. Sudden or significant changes in eye color should be evaluated by an eye doctor, as they could indicate conditions like Fuchs heterochromic iridocyclitis or pigmentary glaucoma.',
      },
      {
        question: 'Do siblings always have the same eye color?',
        answer:
          'No, siblings can have different eye colors because each child receives a random combination of alleles from their parents. For example, if both parents carry a brown and a blue allele (Bb), each child has a 75% chance of brown eyes and 25% chance of blue eyes, independently calculated for each pregnancy.',
      },
      {
        question: 'How accurate is this eye color calculator?',
        answer:
          'This calculator provides reasonable estimates based on simplified Mendelian genetics. While it captures the major inheritance patterns, real eye color genetics involves 16+ genes and complex interactions. Adding grandparent information improves accuracy. The predictions should be considered approximate probabilities rather than definitive outcomes.',
      },
      {
        question: 'What determines whether hazel eyes look more green or brown?',
        answer:
          'Hazel eyes contain a combination of melanin that creates their characteristic multi-toned appearance. The ratio of eumelanin (brown pigment) to pheomelanin (yellow/red pigment) and the way light scatters in the iris determine whether hazel eyes appear more green, golden, or brown. Lighting conditions, clothing colors, and pupil size can all affect how hazel eyes look at any given moment.',
      },
    ],
  },

  tr: {
    whatIs:
      'Göz Rengi Hesaplayıcı, her iki ebeveynin ve isteğe bağlı olarak büyükanne-büyükbabaların göz renklerine dayanarak bebeğin kahverengi, mavi, yeşil veya ela göze sahip olma olasılığını tahmin eden genetik tabanlı bir araçtır. Göz rengi, insan genetiğinin en büyüleyici örneklerinden biridir ve başta kromozom 15 üzerinde bulunan OCA2 ve HERC2 genleri olmak üzere birkaç modifiye edici genin etkileşimiyle belirlenir. Basitleştirilmiş modeller poligenik kalıtımın tüm karmaşıklığını yakalayamasa da, alleller arasındaki bilinen baskınlık ilişkilerine dayanarak makul olasılık tahminleri sunabilir. Kahverengi göz rengi genellikle yeşil ve mavi üzerinde baskındır, yeşil ise mavi üzerinde baskındır. Bu hesaplayıcı, her olası göz rengi sonucu için olasılık dağılımları oluşturmak üzere Mendel kalıtım ilkeleriyle birleştirilmiş iki gen modeli kullanır. Büyükanne-büyükbaba bilgisi eklemek, her ebeveynin olası genotiplerini daraltmaya yardımcı olarak tahmin doğruluğunu artırır.',

    howToCalculate:
      `Bebeğinizin göz rengini tahmin etmek için, dört seçenekten (kahverengi, mavi, yeşil veya ela) her iki ebeveynin göz rengini seçerek başlayın. Daha iyi doğruluk için, opsiyonel büyükanne-büyükbaba bölümünü genişletin ve dört büyükanne-büyükbabanın (anneanne, dede - anne tarafı, babaanne, dede - baba tarafı) göz renklerini seçin. Hesaplayıcı daha sonra göz rengi ve aile geçmişine dayanarak her ebeveyn için en olası genotipleri belirler, tüm olası allel kombinasyonlarını çaprazlar ve çocuk için her göz rengi sonucunun olasılığını hesaplar. Ne kadar fazla aile bilgisi sağlarsanız, tahmin o kadar doğru olur, çünkü büyükanne-büyükbaba verileri kahverengi gözlü ebeveynlerde homozigot (ör. BB) ve heterozigot (ör. Bb) genotipler arasında ayrım yapmaya yardımcı olur.`,

    interpretation:
      'Sonuçlar her göz rengi için yüzde olasılığı gösterir. En yüksek olasılık, bebeğiniz için en olası göz rengini temsil eder, ancak genetiğin kesinlik değil olasılık içerdiğini unutmayın. %60 kahverengi göz şansı, hala %40 başka bir renk şansı olduğu anlamına gelir. Göz rengi genetiği poligeniktir, yani birden fazla gen son fenotipe katkıda bulunur. Basitleştirilmiş modelimiz büyük genetik faktörleri yakalar ancak her olası varyasyonu hesaba katamaz. Eksik baskınlık, epistazi (gen etkileşimleri) ve modifiye edici genler gibi faktörler beklenmedik sonuçlar üretebilir. Bu yüzden iki kahverengi gözlü ebeveyn, her ikisi de çekinik mavi alleller taşıyorsa, bazen mavi gözlü bir çocuğa sahip olabilir.',

    limitations:
      'Bu hesaplayıcı, temel kalıtım kalıplarını yakalayan ancak doğal sınırlamaları olan basitleştirilmiş bir genetik model kullanır. Birincisi, göz rengi burada modellenen iki gen (OCA2/HERC2) değil, en az 16 farklı gen tarafından belirlenir. İkincisi, çevresel faktörler ve gen ekspresyon kalıpları nihai göz rengini etkileyebilir. Üçüncüsü, model kehribar, gri veya heterokromi (iki farklı renkte göz) gibi nadir göz renklerini tahmin edemez. Dördüncüsü, olasılıklar garanti değil istatistiksel tahminlerdir - gerçek sonuç, kalıtılan spesifik allel kombinasyonuna bağlıdır. Beşincisi, melanin üretimi geliştikçe göz rengi yaşamın ilk yıllarında değişebilir. Çoğu bebek, ilk 1-3 yıl içinde koyulaşabilen daha açık gözlerle doğar. Son olarak, etnik köken göz rengi dağılım kalıplarını etkileyebilir ve bu basitleştirilmiş model bunu tam olarak hesaba katmaz.',

    healthRisks:
      'Göz rengi kendi başına bir sağlık durumu olmasa da, belirli göz renkleri farklı sağlık durumlarıyla ilişkilendirilebilir. Daha açık göz renkleri (mavi, yeşil), daha fazla ışık hassasiyeti ile ilişkilidir ve yaşa bağlı makula dejenerasyonu ve uveal melanom riski biraz daha yüksek olabilir. Açık renkli gözlere sahip kişiler genellikle UV koruyucu güneş gözlüğü takmaktan fayda görür. Buna karşılık, daha koyu göz renkleri, iriste daha yüksek melanin içeriği nedeniyle daha fazla doğal UV koruması sağlar. Heterokromi (farklı renkli gözler) genellikle zararsız ve genetiktir, ancak bazen Waardenburg sendromu veya Horner sendromu gibi altta yatan durumları gösterebilir. Herhangi bir yaşta göz renginde ani değişiklikler fark ederseniz, bir göz doktoruna danışın.',

    alternativeMeasures:
      'Daha kesin göz rengi tahminleri arayan aileler için, DNA analizi sunan şirketler aracılığıyla genetik testler, göz rengi genlerindeki spesifik varyantları belirleyebilir. En önemli belirteçler OCA2, HERC2, SLC24A4, SLC45A2, TYR ve IRF4 genlerindedir. Ancak kapsamlı genetik testler bile, poligenik özelliklerin karmaşık doğası nedeniyle göz rengi tahminini %100 doğrulukla garanti edemez. Doğum öncesi genetik testler genellikle yalnızca göz rengi tahmini için yapılmaz, çünkü riskler taşır ve tıbbi gereklilik için ayrılmıştır.',

    demographicDifferences:
      'Göz rengi dağılımı, farklı etnik kökenlere ve coğrafi bölgelere göre önemli ölçüde değişir. Kahverengi gözler dünya genelinde açık ara en yaygın olup, dünya nüfusunun yaklaşık %70-79\'unda bulunur. Mavi gözler en çok Kuzey ve Doğu Avrupa popülasyonlarında, özellikle İskandinavya ve Baltık ülkelerinde yaygındır. Yeşil gözler en nadir olup, küresel nüfusun yalnızca yaklaşık %2\'sinde bulunur ve ağırlıklı olarak Kuzey ve Batı Avrupa kökenli, özellikle İrlandalı ve İskoç popülasyonlarda görülür. Ela gözler çeşitli etnik gruplarda bulunur ancak en çok Avrupa, Orta Doğu ve Kuzey Afrika kökenli kişilerde yaygındır. Asya ve Afrika popülasyonlarında kahverengi göz prevalansı en yüksektir (%95+), Avrupa popülasyonları ise göz rengi çeşitliliğinde en fazla çeşitliliği gösterir.',

    medicalDisclaimer:
      'Bu göz rengi hesaplayıcı, basitleştirilmiş genetik modellere dayalı tahminler sunar ve yalnızca eğitim ve eğlence amaçlıdır. Tahminler olasılıksaldır, tanısal değildir. Gerçek göz rengi sonuçları, hiçbir hesaplayıcı tarafından tam olarak yakalanması mümkün olmayan karmaşık genetik etkileşimlere bağlıdır. Bu araç hiçbir tıbbi veya yasal amaç için kullanılmamalıdır. Genetik kalıtım kalıpları hakkında ayrıntılı bilgi için bir genetik danışmana başvurun.',

    references: [
      'Sturm RA, Larsson M. Genetics of human iris colour and patterns. Pigment Cell Melanoma Res. 2009;22(5):544-562.',
      'White D, Rabago-Smith M. Genotype-phenotype associations and human eye color. J Hum Genet. 2011;56(1):5-7.',
      'Liu F, et al. Eye color and the prediction of complex phenotypes from genotypes. Curr Biol. 2009;19(5):R192-R193.',
      'Kayser M, et al. Three genome-wide association studies and a linkage analysis identify HERC2 as a human iris color gene. Am J Hum Genet. 2008;82(2):411-423.',
      'Mackey DA, et al. Twins Eye Study of Tasmania: Heritability and prevalence of eye color. Invest Ophthalmol Vis Sci. 2009;50(10):4581-4587.',
    ],

    tips: [
      'Daha doğru tahminler için büyükanne ve büyükbaba göz renklerini ekleyin',
      'Bebeklerin genellikle mavi veya gri gözlerle doğduğunu ve zamanla değişebileceğini unutmayın',
      'İki kahverengi gözlü ebeveyn, ikisi de çekinik mavi allel taşıyorsa mavi gözlü bir çocuğa sahip olabilir',
      'Göz rengi, bebeğinizin miras alacağı birçok özellikten sadece biridir - her çocuk benzersizdir',
      'Kendi genetiğiniz hakkında meraklıysanız, göz rengi gen varyantları için DNA testi yaptırmayı düşünün',
      'Tüm göz renklerini, özellikle açık renkli gözleri kaliteli güneş gözlüğüyle UV hasarından koruyun',
    ],

    faqs: [
      {
        question: 'İki mavi gözlü ebeveyn kahverengi gözlü bir çocuğa sahip olabilir mi?',
        answer:
          'Bu son derece nadir olmakla birlikte teknik olarak mümkündür. Mavi gözler tipik olarak iki çekinik allele (bb) sahip olmaktan kaynaklanırken, diğer göz rengi genlerindeki çok nadir genetik varyasyonlar veya mutasyonlar daha koyu gözlü bir çocuk üretebilir. Pratikte, iki mavi gözlü ebeveyn neredeyse her zaman mavi gözlü çocuklara sahip olacaktır.',
      },
      {
        question: 'Bazı bebeklerin göz rengi doğumdan sonra neden değişir?',
        answer:
          'Çoğu bebek irislerinde daha az melaninle doğar, bu da doğumda mavi veya gri gözlere yol açar. İlk 6-12 ay içinde (bazen 3 yıla kadar), melanin üretimi artar ve gözler kalıcı renklerine koyulaşabilir. Bu yüzden birçok bebek mavi gözlerle doğar ve daha sonra kahverengi veya yeşile döner.',
      },
      {
        question: 'Göz rengi sadece tek bir gen tarafından mı belirlenir?',
        answer:
          'Hayır, göz rengi en az 16 farklı genin etkisiyle belirlenen poligenik bir özelliktir. En önemli iki gen, her ikisi de kromozom 15 üzerinde bulunan OCA2 ve HERC2\'dir. Ancak kromozom 5, 11, 13 ve diğerlerindeki genler de rol oynar. Bu yüzden göz rengi kalıtımı, basit Mendel genetiğinin önerebileceğinden daha karmaşıktır.',
      },
      {
        question: 'En nadir göz rengi hangisidir?',
        answer:
          'Yeşil, en nadir doğal göz rengidir ve küresel nüfusun yalnızca yaklaşık %2\'sinde bulunur. En çok Kuzey ve Batı Avrupa kökenli insanlarda yaygındır. Daha da nadir olanlar kehribar gözler, gri gözler ve heterokromi (iki farklı renkte göz) olmakla birlikte, sınıflandırma farklılıkları nedeniyle bunları sayısallaştırmak daha zordur.',
      },
      {
        question: 'Göz rengi yetişkinlikte değişebilir mi?',
        answer:
          'Göz rengi genellikle çocukluktan sonra sabit olsa da, yaşla birlikte ince değişiklikler meydana gelebilir. Yetişkinlerin yaklaşık %10-15\'i yaşamları boyunca göz renginde genellikle hafif bir koyulaşma olan bir miktar değişiklik yaşar. Göz renginde ani veya önemli değişiklikler, Fuchs heterokromik iridosikliti veya pigmenter glokom gibi durumları gösterebileceğinden bir göz doktoru tarafından değerlendirilmelidir.',
      },
      {
        question: 'Kardeşler her zaman aynı göz rengine mi sahip olur?',
        answer:
          'Hayır, her çocuk ebeveynlerinden rastgele bir allel kombinasyonu aldığı için kardeşler farklı göz renklerine sahip olabilir. Örneğin, her iki ebeveyn de bir kahverengi ve bir mavi allel taşıyorsa (Bb), her çocuğun %75 kahverengi göz ve %25 mavi göz şansı vardır ve bu her hamilelik için bağımsız olarak hesaplanır.',
      },
      {
        question: 'Bu göz rengi hesaplayıcı ne kadar doğru?',
        answer:
          'Bu hesaplayıcı, basitleştirilmiş Mendel genetiğine dayalı makul tahminler sunar. Temel kalıtım kalıplarını yakalarken, gerçek göz rengi genetiği 16\'dan fazla gen ve karmaşık etkileşimler içerir. Büyükanne-büyükbaba bilgisi eklemek doğruluğu artırır. Tahminler kesin sonuçlar yerine yaklaşık olasılıklar olarak değerlendirilmelidir.',
      },
      {
        question: 'Ela gözlerin daha yeşil veya kahverengi görünmesini ne belirler?',
        answer:
          'Ela gözler, karakteristik çok tonlu görünümlerini oluşturan bir melanin kombinasyonu içerir. Ömelanin (kahverengi pigment) ile feomelanin (sarı/kırmızı pigment) oranı ve ışığın iriste saçılma şekli, ela gözlerin daha yeşil, altın rengi veya kahverengi görünüp görünmeyeceğini belirler. Aydınlatma koşulları, kıyafet renkleri ve göz bebeği boyutu, ela gözlerin herhangi bir anda nasıl göründüğünü etkileyebilir.',
      },
    ],
  },
};
