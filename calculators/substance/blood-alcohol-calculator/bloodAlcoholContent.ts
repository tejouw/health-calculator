import { CalculatorContent } from '@/types/calculator';

export const bloodAlcoholContent: CalculatorContent = {
  en: {
    whatIs:
      `Blood Alcohol Content (BAC) is a measurement of alcohol in your bloodstream expressed as a percentage. A BAC of 0.08% is the legal driving limit in most countries. This calculator uses the Widmark Formula to estimate BAC based on gender, body weight, amount consumed, and time elapsed.`,

    howToCalculate:
      `The Widmark Formula is: BAC = (A / (r * W)) - (beta * t). Where A is alcohol in grams, r is the Widmark constant (0.68 for men, 0.55 for women), W is body weight in grams, beta is elimination rate (0.015% per hour), and t is time in hours.`,

    formulaDetails:
      `The Widmark Formula is the gold standard for estimating blood alcohol concentration in forensic science. It accounts for body water distribution, gender differences, and alcohol elimination rates.`,

    categories: [
      {
        range: '0.00%',
        label: 'Sober',
        description: 'No alcohol detected. Safe to drive.',
        color: '#10B981',
      },
      {
        range: '0.01-0.03%',
        label: 'Mild Effects',
        description: 'Slight relaxation. Crash risk 1.4x higher than sober.',
        color: '#3B82F6',
      },
      {
        range: '0.04-0.07%',
        label: 'Moderate Impairment',
        description: 'Noticeable impairment. Crash risk 2-3x higher.',
        color: '#F59E0B',
      },
      {
        range: '0.08-0.10%',
        label: 'Legally Impaired',
        description: 'ILLEGAL to drive in most countries. DO NOT DRIVE.',
        color: '#EF4444',
      },
      {
        range: '0.11-0.15%',
        label: 'Severe Impairment',
        description: 'Gross motor impairment. Crash risk 8-15x higher.',
        color: '#DC2626',
      },
      {
        range: '0.16-0.29%',
        label: 'Very Severe Impairment',
        description: 'Dangerous intoxication level. Medical evaluation recommended.',
        color: '#991B1B',
      },
      {
        range: '0.30%+',
        label: 'LIFE THREATENING',
        description: 'MEDICAL EMERGENCY - Risk of death. CALL 911 IMMEDIATELY.',
        color: '#7F1D1D',
      },
    ],

    interpretation:
      `Your calculated BAC helps you understand your impairment level. If BAC is 0.08% or higher, you are legally prohibited from driving. However, impairment begins at much lower levels. NEVER drive after drinking, regardless of calculated BAC.`,

    limitations:
      `This calculator provides estimates with +/-20-30% variation from actual BAC. The only way to know actual BAC is professional testing. Never use calculated BAC to decide whether to drive.`,

    healthRisks:
      `Alcohol consumption creates immediate and long-term health risks including injury, poisoning, violence, and chronic diseases. Binge drinking causes significant harm even if infrequent.`,

    alternativeMeasures:
      `Breathalyzer testing and blood testing provide more accurate BAC measurement. However, the safest approach is zero tolerance for driving after any alcohol consumption.`,

    demographicDifferences:
      `Women reach higher BAC than men after consuming identical amounts due to lower body water percentage and other biological factors. Age, body composition, and genetics also affect BAC.`,

    medicalDisclaimer:
      `WARNING: This calculator is for educational purposes ONLY. NEVER use calculated BAC to determine if you are safe to drive. If you have consumed ANY alcohol, arrange alternative transportation. Drunk driving kills approximately 30 people daily in the United States.`,

    references: [
      'Widmark EMP. Principles and Applications of Medicolegal Alcohol Determination. 1981.',
      'Jones AW. Forensic Sci Int. 2010;200(1-3):1-20.',
      'NHTSA. The ABCs of BAC. DOT HS 809 844. 2005.',
    ],

    tips: [
      'NEVER drive after drinking',
      'Plan ahead: arrange designated driver or rideshare',
      'Only TIME eliminates alcohol - coffee does NOT help',
      'Eat food before drinking to slow absorption',
      'Track your drinks and time',
      'Learn signs of alcohol poisoning',
      'Set drink limits BEFORE drinking',
    ],

    faqs: [
      {
        question: 'How long does it take for BAC to return to 0%?',
        answer:
          'The average person eliminates alcohol at 0.015% BAC per hour. If your BAC is 0.08%, it takes approximately 5-6 hours to reach 0%. This cannot be accelerated.',
      },
      {
        question: 'Can I speed up alcohol elimination?',
        answer:
          'No. The liver metabolizes alcohol at a constant rate that cannot be increased. Coffee, showers, and exercise do NOT help.',
      },
      {
        question: 'Is it safe to drive if BAC is below 0.08%?',
        answer:
          'No - legal does not mean safe. Impairment begins at BAC as low as 0.02%. The ONLY safe BAC for driving is 0.00%.',
      },
      {
        question: 'Why do women reach higher BAC than men?',
        answer:
          'Women have lower body water percentage and reach 20-30% higher BAC than men after consuming identical amounts.',
      },
      {
        question: 'What should I do if someone shows signs of alcohol poisoning?',
        answer:
          'CALL 911 IMMEDIATELY. Signs include confusion, vomiting, slow breathing, and unconsciousness. Do not wait.',
      },
    ],
  },

  tr: {
    whatIs:
      `Kan Alkol Konsantrasyonu (KAK), kan dolaşımınızda bulunan alkol miktarının yüzde olarak ifade edilen bir ölçümüdür. %0.08 KAK çoğu ülkede yasal sürüş sınırıdır.`,

    howToCalculate:
      `Widmark Formülü: KAK = (A / (r * W)) - (beta * t). A gram cinsinden alkol, r Widmark sabiti (erkekler 0.68, kadınlar 0.55), W gram cinsinden vücut ağırlığı, beta eliminasyon oranı (saatte %0.015), t saat cinsinden zaman.`,

    formulaDetails:
      `Widmark Formülü adli bilimde kan alkol konsantrasyonunu tahmin etmek için altın standarttır.`,

    categories: [
      {
        range: '%0.00',
        label: 'Ayık',
        description: 'Alkol tespit edilmedi. Araba kullanmak güvenli.',
        color: '#10B981',
      },
      {
        range: '%0.01-0.03',
        label: 'Hafif Etkiler',
        description: 'Hafif rahatlama. Kaza riski ayıktan 1.4 kat yüksek.',
        color: '#3B82F6',
      },
      {
        range: '%0.04-0.07',
        label: 'Orta Bozulma',
        description: 'Belirgin bozulma. Kaza riski 2-3 kat yüksek.',
        color: '#F59E0B',
      },
      {
        range: '%0.08-0.10',
        label: 'Yasal Olarak Bozulmuş',
        description: 'Çoğu ülkede YASADIŞI. ARABA KULLANMAYIN.',
        color: '#EF4444',
      },
      {
        range: '%0.11-0.15',
        label: 'Ağır Bozulma',
        description: 'Ciddi motor bozulması. Kaza riski 8-15 kat yüksek.',
        color: '#DC2626',
      },
      {
        range: '%0.16-0.29',
        label: 'Çok Ağır Bozulma',
        description: 'Tehlikeli sarhoşluk seviyesi. Tıbbi değerlendirme gerekli.',
        color: '#991B1B',
      },
      {
        range: '%0.30+',
        label: 'YAŞAMI TEHDİT EDİYOR',
        description: 'TIBBİ ACİL DURUM - Ölüm riski. HEMEN 112 ARAYIN.',
        color: '#7F1D1D',
      },
    ],

    interpretation:
      `Hesaplanan KAK bozulma seviyenizi anlamanıza yardımcı olur. KAK %0.08 veya daha yüksekse, yasal olarak araba kullanmanız yasaktır. İçtikten sonra ASİLA araba kullanmayın.`,

    limitations:
      `Bu hesaplayıcı gerçek KAK'tan +/-%20-30 varyasyonla tahmin sağlar. Gerçek KAK'ı bilmenin tek yolu profesyonel testtir.`,

    healthRisks:
      `Alkol tüketimi acil ve uzun vadeli sağlık riskleri yaratır. Binge drinking seyrek olsa bile önemli zararlara neden olur.`,

    alternativeMeasures:
      `Alkol ölçüm cihazı ve kan testi daha doğru KAK ölçümü sağlar. En güvenli yaklaşım herhangi bir alkol tüketiminden sonra araba kullanmamaktır.`,

    demographicDifferences:
      `Kadınlar aynı miktarda alkol tükettikten sonra erkeklerden daha yüksek KAK'a ulaşır. Yaş, vücut kompozisyonu ve genetik faktörler de KAK'ı etkiler.`,

    medicalDisclaimer:
      `UYARI: Bu hesaplayıcı YALNIZCA eğitim amaçlıdır. Hesaplanan KAK'ı asla araba kullanmanın güvenli olup olmadığını belirlemek için kullanmayın. HERHANGİ bir alkol tükettiyseniz, alternatif ulaşım düzenleyin.`,

    references: [
      'Widmark EMP. Medikolegal Alkol Belirleme İlkeleri ve Uygulamaları. 1981.',
      'Jones AW. Forensic Sci Int. 2010;200(1-3):1-20.',
      'NHTSA. KAK ABC\'si. DOT HS 809 844. 2005.',
    ],

    tips: [
      'İçtikten sonra ASİLA araba kullanmayın',
      'Önceden plan yapın: sürücü veya taksi ayarlayın',
      'Sadece ZAMAN alkolü ortadan kaldırır',
      'Emilimi yavaşlatmak için içmeden önce yemek yiyin',
      'İçkilerinizi ve zamanı takip edin',
      'Alkol zehirlenmesi belirtilerini öğrenin',
      'İçmeden ÖNCE içki sınırları belirleyin',
    ],

    faqs: [
      {
        question: 'KAK %0\'a dönmesi ne kadar sürer?',
        answer:
          'Ortalama kişi saatte %0.015 KAK oranında alkolü elimine eder. KAK %0.08 ise, %0\'a ulaşmak yaklaşık 5-6 saat sürer. Bu hızlandırılamaz.',
      },
      {
        question: 'Alkol eliminasyonunu hızlandırabilir miyim?',
        answer:
          'Hayır. Karaciğer sabit bir hızda alkolü metabolize eder. Kahve, duş ve egzersiz YARDIMCI OLMAZ.',
      },
      {
        question: 'KAK %0.08\'in altındaysa araba kullanmak güvenli midir?',
        answer:
          'Hayır - yasal güvenli demek değildir. Bozulma %0.02 kadar düşük KAK\'ta başlar. Araba kullanmak için TEK güvenli KAK %0.00\'dır.',
      },
      {
        question: 'Kadınlar neden erkeklerden daha yüksek KAK\'a ulaşır?',
        answer:
          'Kadınların daha düşük vücut su yüzdesi vardır ve aynı miktarda alkol tükettikten sonra erkeklerden %20-30 daha yüksek KAK\'a ulaşırlar.',
      },
      {
        question: 'Birisi alkol zehirlenmesi belirtileri gösteriyorsa ne yapmalıyım?',
        answer:
          'HEMEN 112 ARAYIN. Belirtiler: kafa karışıklığı, kusma, yavaş solunum, bilinçsizlik. Beklemeyin.',
      },
    ],
  },
};
