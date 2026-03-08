import type { CalculatorContent } from '@/types/calculator';

export const smokingCessationContent: CalculatorContent = {
  en: {
    whatIs: `The Smoking Cessation Calculator is a comprehensive tool designed to help you visualize the benefits of quitting smoking. It calculates your financial savings, tracks the number of cigarettes you've avoided, estimates how much tar and carbon monoxide you've prevented from entering your body, and shows a detailed health improvement timeline.

Smoking is the leading preventable cause of death worldwide, responsible for approximately 8 million deaths each year according to the World Health Organization (WHO). Quitting smoking is one of the most impactful health decisions a person can make, with benefits beginning just 20 minutes after the last cigarette.

This calculator uses peer-reviewed medical research and data from organizations like the American Cancer Society, CDC, and WHO to provide accurate health milestone timelines and financial projections. Whether you've already quit or are planning to, this tool helps you stay motivated by showing the tangible benefits of a smoke-free life.`,

    howToCalculate: `To use the Smoking Cessation Calculator:

1. **Enter your smoking habits**: Input the number of cigarettes you smoke (or smoked) per day and how many years you've been smoking.
2. **Enter cigarette costs**: Input the price per pack of cigarettes and the number of cigarettes in a pack (typically 20).
3. **Select your quit date**: Choose the date you quit smoking (or plan to quit). You can select today's date if you're quitting now.
4. **Select currency**: Choose your preferred currency (Turkish Lira, US Dollar, or Euro).
5. **Calculate**: Click the calculate button to see your personalized results.

The calculator will display your financial savings, health metrics, and a detailed health improvement timeline showing which milestones you've already achieved and which ones are next.`,

    formulaDetails: `The calculator uses the following formulas and data:

**Financial Savings:**
- Daily cost = (Price per pack / Cigarettes per pack) × Cigarettes per day
- Total saved = Daily cost × Days since quitting

**Health Metrics:**
- Tar avoided = Cigarettes not smoked × 10mg (average tar per cigarette)
- Carbon monoxide avoided = Cigarettes not smoked × 20mg (average CO per cigarette)
- Life days gained = (Cigarettes not smoked × 11 minutes) / 1440 minutes per day

The 11-minute figure comes from a landmark study published in the British Medical Journal (BMJ, 2000) which estimated that each cigarette smoked shortens life by approximately 11 minutes.

**Health Timeline:**
The health improvement milestones are based on data from the American Cancer Society, CDC, and multiple peer-reviewed studies published in medical journals including The Lancet and JAMA.`,

    interpretation: `Your results show multiple dimensions of the benefits of quitting:

- **Financial Savings**: The money you've saved and projections for future savings. Many people are surprised to see how quickly savings add up.
- **Cigarettes Not Smoked**: A direct count of cigarettes you've avoided, which can be very motivating.
- **Tar Avoided**: Cigarette tar contains over 4,000 chemicals, including at least 70 known carcinogens.
- **Life Days Gained**: An estimate based on epidemiological research showing the life-shortening effect of each cigarette.
- **Health Milestones**: A timeline showing how your body heals over time after quitting.`,

    limitations: `While this calculator provides valuable motivation and estimates, there are important limitations:

- Individual health recovery varies based on genetics, overall health, and smoking history.
- The life days gained calculation is a statistical average and doesn't account for individual factors.
- Financial projections don't account for inflation or changing cigarette prices.
- Health milestones are based on average timelines; individual experiences may vary.
- This calculator is not a medical tool and doesn't replace professional medical advice.
- The tar and CO figures are averages; actual amounts vary by cigarette brand and type.`,

    healthRisks: `Smoking is associated with numerous health risks:

**Cardiovascular**: Heart disease, stroke, peripheral vascular disease, aortic aneurysm
**Respiratory**: Lung cancer, COPD, chronic bronchitis, emphysema, pneumonia
**Cancer**: Lung, mouth, throat, esophagus, stomach, pancreas, kidney, bladder, cervix
**Other**: Type 2 diabetes, rheumatoid arthritis, reduced fertility, premature aging, weakened immune system, gum disease, cataracts

Quitting smoking significantly reduces all of these risks over time.`,

    references: [
      'World Health Organization. Tobacco - Key Facts. WHO, 2023.',
      'American Cancer Society. Benefits of Quitting Smoking Over Time. ACS, 2023.',
      'Shaw M, et al. Time for a smoke? One cigarette reduces your life by 11 minutes. BMJ, 2000;320:53.',
      'U.S. Department of Health and Human Services. The Health Consequences of Smoking. Surgeon General Report, 2014.',
      'Centers for Disease Control and Prevention. Smoking Cessation: A Report of the Surgeon General. CDC, 2020.',
      'Jha P, et al. 21st-century hazards of smoking and benefits of cessation. NEJM, 2013;368:341-350.',
      'Doll R, et al. Mortality in relation to smoking: 50 years\' observations on male British doctors. BMJ, 2004;328:1519.',
    ],

    tips: [
      'The first 72 hours are the hardest. Stay busy and avoid triggers.',
      'Drink plenty of water to help flush nicotine from your body.',
      'Exercise regularly to manage withdrawal symptoms and stress.',
      'Chew sugar-free gum or snack on healthy foods when you get cravings.',
      'Tell your friends and family about your decision for support.',
      'Consider nicotine replacement therapy (patches, gum, lozenges) if needed.',
      'Avoid alcohol and situations where you used to smoke, especially in the early weeks.',
      'Calculate your savings regularly to stay motivated.',
      'Celebrate milestones - reward yourself with something special using the money you saved.',
      'If you relapse, don\'t give up. Most successful quitters try several times before succeeding.',
    ],

    faqs: [
      {
        question: 'How quickly do health benefits begin after quitting?',
        answer: 'Health benefits begin within 20 minutes of your last cigarette. Your heart rate and blood pressure start to normalize. Within 8 hours, carbon monoxide levels in your blood drop to normal. Within 24 hours, your heart attack risk begins to decrease.',
      },
      {
        question: 'How much money can I save by quitting?',
        answer: 'Savings depend on how much you smoke and cigarette prices in your area. A pack-a-day smoker in Turkey spending about 50 TL per pack would save approximately 18,250 TL per year. Over 10 years, that adds up to over 180,000 TL.',
      },
      {
        question: 'Is it too late to quit if I\'ve smoked for many years?',
        answer: 'It is never too late to quit. Research shows that quitting at any age provides significant health benefits. Even people who quit after age 60 can add years to their life. The body begins healing immediately after the last cigarette.',
      },
      {
        question: 'How are life days gained calculated?',
        answer: 'The calculation is based on a study published in the British Medical Journal (BMJ, 2000) which estimated that each cigarette shortens life by approximately 11 minutes. By not smoking those cigarettes, you effectively "regain" that time.',
      },
      {
        question: 'What is the hardest part of quitting?',
        answer: 'Most people find the first 3-5 days the hardest, as this is when nicotine withdrawal peaks. Common symptoms include irritability, anxiety, difficulty concentrating, increased appetite, and strong cravings. These symptoms usually significantly improve within 2-4 weeks.',
      },
    ],

    medicalDisclaimer: 'This calculator provides estimates based on published medical research and is intended for informational and motivational purposes only. It is not a substitute for professional medical advice. If you are trying to quit smoking, consult your healthcare provider for personalized guidance and support.',
  },
  tr: {
    whatIs: `Sigara Bırakma Hesaplayıcı, sigarayı bırakmanın faydalarını görselleştirmenize yardımcı olmak için tasarlanmış kapsamlı bir araçtır. Finansal tasarruflarınızı hesaplar, kaçındığınız sigara sayısını takip eder, vücudunuza girmesini engellediğiniz katran ve karbonmonoksit miktarını tahmin eder ve detaylı bir sağlık iyileşme zaman çizelgesi gösterir.

Sigara, dünya genelinde önlenebilir ölüm nedenlerinin başında gelmektedir. Dünya Sağlık Örgütü'ne (DSÖ) göre her yıl yaklaşık 8 milyon kişi sigara nedeniyle hayatını kaybetmektedir. Sigarayı bırakmak, bir kişinin alabileceği en etkili sağlık kararlarından biridir ve faydaları son sigaradan sadece 20 dakika sonra başlar.

Bu hesaplayıcı, doğru sağlık dönüm noktası zaman çizelgeleri ve finansal projeksiyonlar sağlamak için Amerikan Kanser Derneği, CDC ve DSÖ gibi kuruluşların hakemli tıbbi araştırmalarını ve verilerini kullanmaktadır. İster sigarayı zaten bırakmış olun ister bırakmayı planlıyor olun, bu araç dumansız bir yaşamın somut faydalarını göstererek motivasyonunuzu korumanıza yardımcı olur.`,

    howToCalculate: `Sigara Bırakma Hesaplayıcısını kullanmak için:

1. **Sigara alışkanlıklarınızı girin**: Günde içtiğiniz (veya içtiğiniz) sigara sayısını ve kaç yıldır sigara içtiğinizi girin.
2. **Sigara maliyetini girin**: Paket başına fiyatı ve paketteki sigara sayısını (genellikle 20) girin.
3. **Bırakma tarihinizi seçin**: Sigarayı bıraktığınız (veya bırakmayı planladığınız) tarihi seçin. Şimdi bırakıyorsanız bugünün tarihini seçebilirsiniz.
4. **Para birimini seçin**: Tercih ettiğiniz para birimini seçin (Türk Lirası, ABD Doları veya Euro).
5. **Hesaplayın**: Kişiselleştirilmiş sonuçlarınızı görmek için hesapla düğmesine tıklayın.

Hesaplayıcı, finansal tasarruflarınızı, sağlık metriklerinizi ve hangi dönüm noktalarına ulaştığınızı ve sırada hangilerinin olduğunu gösteren detaylı bir sağlık iyileşme zaman çizelgesi gösterecektir.`,

    formulaDetails: `Hesaplayıcı aşağıdaki formülleri ve verileri kullanır:

**Finansal Tasarruf:**
- Günlük maliyet = (Paket fiyatı / Paketteki sigara sayısı) × Günlük sigara sayısı
- Toplam tasarruf = Günlük maliyet × Bırakılan gün sayısı

**Sağlık Metrikleri:**
- Kaçınılan katran = İçilmeyen sigara sayısı × 10mg (sigara başına ortalama katran)
- Kaçınılan karbonmonoksit = İçilmeyen sigara sayısı × 20mg (sigara başına ortalama CO)
- Kazanılan yaşam günleri = (İçilmeyen sigara sayısı × 11 dakika) / Gündeki 1440 dakika

11 dakika rakamı, British Medical Journal'da (BMJ, 2000) yayınlanan ve her sigara içmenin ömrü yaklaşık 11 dakika kısalttığını tahmin eden önemli bir çalışmadan gelmektedir.

**Sağlık Zaman Çizelgesi:**
Sağlık iyileşme dönüm noktaları, Amerikan Kanser Derneği, CDC ve The Lancet ve JAMA dahil tıp dergilerinde yayınlanan birçok hakemli çalışmanın verilerine dayanmaktadır.`,

    interpretation: `Sonuçlarınız sigarayı bırakmanın faydalarını birden fazla boyutta gösterir:

- **Finansal Tasarruf**: Biriktirdiğiniz para ve gelecekteki tasarruf projeksiyonları. Birçok kişi tasarrufların ne kadar hızlı biriktiğini görünce şaşırır.
- **İçilmeyen Sigaralar**: Kaçındığınız sigaraların doğrudan sayısı, bu çok motive edici olabilir.
- **Kaçınılan Katran**: Sigara katranı 4.000'den fazla kimyasal madde içerir ve bunların en az 70'i bilinen kanserojendir.
- **Kazanılan Yaşam Günleri**: Her sigaranın ömür kısaltıcı etkisini gösteren epidemiyolojik araştırmalara dayanan bir tahmindir.
- **Sağlık Dönüm Noktaları**: Bıraktıktan sonra vücudunuzun zamanla nasıl iyileştiğini gösteren bir zaman çizelgesi.`,

    limitations: `Bu hesaplayıcı değerli motivasyon ve tahminler sağlarken, önemli sınırlamalar da mevcuttur:

- Bireysel sağlık iyileşmesi genetik, genel sağlık durumu ve sigara geçmişine göre değişir.
- Kazanılan yaşam günleri hesaplaması istatistiksel bir ortalamadır ve bireysel faktörleri hesaba katmaz.
- Finansal projeksiyonlar enflasyon veya değişen sigara fiyatlarını hesaba katmaz.
- Sağlık dönüm noktaları ortalama zaman çizelgelerine dayanır; bireysel deneyimler farklılık gösterebilir.
- Bu hesaplayıcı tıbbi bir araç değildir ve profesyonel tıbbi tavsiyenin yerini almaz.
- Katran ve CO rakamları ortalamadır; gerçek miktarlar sigara markası ve türüne göre değişir.`,

    healthRisks: `Sigara çok sayıda sağlık riskiyle ilişkilidir:

**Kardiyovasküler**: Kalp hastalığı, inme, periferik damar hastalığı, aort anevrizması
**Solunum**: Akciğer kanseri, KOAH, kronik bronşit, amfizem, zatürre
**Kanser**: Akciğer, ağız, gırtlak, yemek borusu, mide, pankreas, böbrek, mesane, rahim ağzı
**Diğer**: Tip 2 diyabet, romatoid artrit, azalmış doğurganlık, erken yaşlanma, zayıflamış bağışıklık sistemi, diş eti hastalığı, katarakt

Sigarayı bırakmak zamanla tüm bu riskleri önemli ölçüde azaltır.`,

    references: [
      'Dünya Sağlık Örgütü. Tütün - Temel Bilgiler. DSÖ, 2023.',
      'Amerikan Kanser Derneği. Zamanla Sigarayı Bırakmanın Faydaları. ACS, 2023.',
      'Shaw M, ve ark. Sigara içme zamanı mı? Bir sigara ömrünüzü 11 dakika kısaltır. BMJ, 2000;320:53.',
      'ABD Sağlık Bakanlığı. Sigara İçmenin Sağlık Sonuçları. Genel Cerrah Raporu, 2014.',
      'Hastalık Kontrol ve Önleme Merkezi. Sigarayı Bırakma: Genel Cerrah Raporu. CDC, 2020.',
      'Jha P, ve ark. 21. yüzyılda sigara içmenin tehlikeleri ve bırakmanın faydaları. NEJM, 2013;368:341-350.',
      'Doll R, ve ark. Sigara içmeyle ilişkili ölüm: İngiliz erkek doktorlar üzerinde 50 yıllık gözlemler. BMJ, 2004;328:1519.',
    ],

    tips: [
      'İlk 72 saat en zor dönemdir. Kendinizi meşgul tutun ve tetikleyicilerden kaçının.',
      'Nikotini vücudunuzdan atmaya yardımcı olmak için bol su için.',
      'Yoksunluk belirtileri ve stresi yönetmek için düzenli egzersiz yapın.',
      'Canınız sigara çektiğinde şekersiz sakız çiğneyin veya sağlıklı atıştırmalıklar tüketin.',
      'Destek almak için arkadaşlarınıza ve ailenize kararınızı anlatın.',
      'Gerekirse nikotin replasman tedavisi (bant, sakız, pastil) kullanmayı düşünün.',
      'Özellikle ilk haftalarda alkol ve sigara içtiğiniz ortamlardan kaçının.',
      'Motive kalmak için tasarruflarınızı düzenli olarak hesaplayın.',
      'Dönüm noktalarını kutlayın - biriktirdiğiniz parayla kendinize özel bir şey ısmarlayın.',
      'Tekrar başlarsanız pes etmeyin. Başarılı bir şekilde bırakan çoğu kişi birkaç kez denemiştir.',
    ],

    faqs: [
      {
        question: 'Bıraktıktan sonra sağlık faydaları ne kadar hızlı başlar?',
        answer: 'Sağlık faydaları son sigaranızdan 20 dakika sonra başlar. Kalp atış hızınız ve kan basıncınız normalleşmeye başlar. 8 saat içinde kanınızdaki karbonmonoksit seviyeleri normale döner. 24 saat içinde kalp krizi riskiniz azalmaya başlar.',
      },
      {
        question: 'Sigarayı bırakarak ne kadar para biriktirebilirim?',
        answer: `Tasarruf miktarı ne kadar sigara içtiğinize ve bulunduğunuz bölgedeki sigara fiyatlarına bağlıdır. Günde bir paket sigara içen ve paket başına yaklaşık 50 TL harcayan bir kişi yılda yaklaşık 18.250 TL tasarruf eder. 10 yılda bu miktar 180.000 TL'yi aşar.`,
      },
      {
        question: 'Yıllardır sigara içiyorsam bırakmak için çok mu geç?',
        answer: 'Bırakmak için asla geç değildir. Araştırmalar, herhangi bir yaşta bırakmanın önemli sağlık faydaları sağladığını göstermektedir. 60 yaşından sonra bırakanlar bile ömürlerine yıllar ekleyebilir. Vücut, son sigaradan hemen sonra iyileşmeye başlar.',
      },
      {
        question: 'Kazanılan yaşam günleri nasıl hesaplanır?',
        answer: `Hesaplama, British Medical Journal'da (BMJ, 2000) yayınlanan ve her sigaranın ömrü yaklaşık 11 dakika kısalttığını tahmin eden bir çalışmaya dayanmaktadır. Bu sigaraları içmeyerek, o zamanı etkili bir şekilde "geri kazanırsınız".`,
      },
      {
        question: 'Sigarayı bırakmanın en zor kısmı nedir?',
        answer: 'Çoğu kişi ilk 3-5 günü en zor dönem olarak bulur, çünkü nikotin yoksunluğu bu dönemde zirve yapar. Yaygın belirtiler arasında sinirlilik, kaygı, konsantrasyon güçlüğü, artan iştah ve güçlü istek (craving) bulunur. Bu belirtiler genellikle 2-4 hafta içinde önemli ölçüde iyileşir.',
      },
    ],

    medicalDisclaimer: 'Bu hesaplayıcı, yayınlanmış tıbbi araştırmalara dayalı tahminler sunar ve yalnızca bilgilendirme ve motivasyon amaçlıdır. Profesyonel tıbbi tavsiyenin yerini almaz. Sigarayı bırakmaya çalışıyorsanız, kişiselleştirilmiş rehberlik ve destek için sağlık uzmanınıza danışın.',
  },
};
