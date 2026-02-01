import { CalculatorContent } from '@/types/calculator';

export const a1cContent: CalculatorContent = {
  en: {
    whatIs:
      'The A1C test (also called HbA1c, glycated hemoglobin, or glycohemoglobin) is a blood test that measures your average blood sugar (glucose) levels over the past 2-3 months. Unlike daily glucose tests that provide a snapshot, A1C gives a long-term view of blood sugar control. When glucose enters the bloodstream, some of it binds to hemoglobin (the oxygen-carrying protein in red blood cells) in a process called glycation. Since red blood cells live approximately 120 days, the percentage of glycated hemoglobin reflects average glucose exposure over that period. A1C is expressed as a percentage: higher percentages indicate higher average blood glucose levels. This test is crucial for diagnosing prediabetes and diabetes, monitoring diabetes management effectiveness, and predicting risk of diabetes complications.',

    howToCalculate:
      'A1C is measured through a simple blood test that requires no fasting. The test quantifies the percentage of hemoglobin molecules that have glucose attached. The American Diabetes Association formula converts A1C to estimated average glucose (eAG): eAG (mg/dL) = (28.7 × A1C) - 46.7. For example, an A1C of 7% converts to: (28.7 × 7) - 46.7 = 154 mg/dL average glucose. To convert to mmol/L, divide mg/dL by 18.018. A1C levels are categorized: Normal < 5.7%, Prediabetes 5.7-6.4%, Diabetes ≥ 6.5%. For people with diabetes, treatment goals typically aim for A1C < 7% (individualized based on age, complications, and other factors).',

    medicalDisclaimer:
      'This A1C calculator provides educational estimates only and does not constitute medical diagnosis. A1C must be measured through laboratory blood tests performed by healthcare professionals. Results from this calculator should not be used to diagnose diabetes, adjust medications, or make treatment decisions without consulting your physician. Certain conditions can affect A1C accuracy including anemia, kidney disease, recent blood transfusions, hemoglobin variants, pregnancy, and recent blood loss. Only qualified healthcare providers can interpret A1C in context of your complete medical history.',

    references: [
      'American Diabetes Association - Standards of Medical Care in Diabetes',
      'Nathan DM, et al. Translating the A1C assay into estimated average glucose values. Diabetes Care. 2008;31(8):1473-1478.',
      'Centers for Disease Control and Prevention - A1C Diagnostic Criteria',
      'International Diabetes Federation - Global Guidelines for Type 2 Diabetes',
    ],

    tips: [
      'Get A1C tested at least twice yearly if meeting treatment goals, quarterly if not',
      'Combine A1C testing with daily glucose monitoring for comprehensive diabetes management',
      'A1C reflects average glucose - it won\'t show dangerous highs or lows that occur briefly',
      'Even small A1C reductions (0.5-1%) significantly decrease complication risks',
      'Individualize A1C targets: tighter control (< 6.5%) for some, relaxed (< 8%) for others',
    ],

    faqs: [
      {
        question: 'What is a good A1C level?',
        answer:
          'For people without diabetes, normal A1C is below 5.7%. Prediabetes is 5.7-6.4%, and diabetes is diagnosed at 6.5% or higher. For those with diabetes, the American Diabetes Association recommends a general target of < 7%, but this should be individualized. Younger, healthier patients might aim for < 6.5%, while elderly patients or those with complications might target < 8%. Discuss your personalized A1C goal with your healthcare provider.',
      },
      {
        question: 'How often should I get my A1C tested?',
        answer:
          'Test frequency depends on your diabetes status and control. For people with diabetes meeting treatment goals: at least twice yearly. For those not meeting goals or changing treatments: every 3 months. For prediabetes screening: annually or as recommended by your doctor. Always follow your healthcare provider\'s specific recommendations.',
      },
      {
        question: 'How can I lower my A1C?',
        answer:
          'Lowering A1C requires sustained blood glucose control through: (1) Healthy eating - reduce refined carbohydrates, increase fiber, control portions; (2) Regular exercise - 150 minutes/week of moderate activity improves insulin sensitivity; (3) Weight loss - losing 5-10% of body weight significantly improves A1C; (4) Medication adherence; (5) Stress management and adequate sleep. Small improvements compound - reducing A1C by just 1% decreases heart attack risk by 14%.',
      },
    ],
  },
  tr: {
    whatIs:
      'A1C testi (HbA1c, glikozillenmiş hemoglobin veya glikohemoglobin olarak da adlandırılır), son 2-3 aydaki ortalama kan şekerinizi (glukoz) ölçen bir kan testidir. Anlık görüntü sağlayan günlük glukoz testlerinin aksine, A1C kan şekeri kontrolünün uzun vadeli bir görünümünü verir. Glukoz kan dolaşımına girdiğinde, bir kısmı glikasyon adı verilen bir süreçte hemoglobine bağlanır. Kırmızı kan hücreleri yaklaşık 120 gün yaşadığından, glikozillenmiş hemoglobin yüzdesi o dönemdeki ortalama glukoz maruziyetini yansıtır.',

    howToCalculate:
      'A1C, oruç gerektirmeyen basit bir kan testi ile ölçülür. Amerikan Diyabet Derneği formülü A1C\'yi tahmini ortalama glukoza dönüştürür: eAG (mg/dL) = (28.7 × A1C) - 46.7. Örneğin, %7 A1C: (28.7 × 7) - 46.7 = 154 mg/dL ortalama glukoz. A1C seviyeleri kategorize edilir: Normal < %5.7, Prediyabet %5.7-6.4, Diyabet ≥ %6.5.',

    medicalDisclaimer:
      'Bu A1C hesaplayıcısı yalnızca eğitici tahminler sağlar ve tıbbi teşhis oluşturmaz. A1C, sağlık profesyonelleri tarafından yapılan laboratuvar kan testleri ile ölçülmelidir. Bu hesaplayıcıdan elde edilen sonuçlar, doktorunuza danışmadan diyabet teşhisi koymak, ilaçları ayarlamak veya tedavi kararları almak için kullanılmamalıdır.',

    references: [
      'Amerikan Diyabet Derneği - Diyabette Tıbbi Bakım Standartları',
      'Hastalık Kontrol ve Önleme Merkezleri - A1C Tanı Kriterleri',
    ],

    tips: [
      'Tedavi hedeflerini karşılıyorsanız yılda en az iki kez A1C testi yaptırın',
      'A1C testini günlük glukoz izleme ile birleştirin',
      'Küçük A1C azalmaları bile komplikasyon risklerini önemli ölçüde azaltır',
    ],

    faqs: [
      {
        question: 'İyi bir A1C seviyesi nedir?',
        answer:
          'Diyabeti olmayan kişiler için normal A1C %5.7\'nin altındadır. Prediyabet %5.7-6.4, diyabet %6.5 veya daha yüksektir. Diyabeti olanlar için genel hedef < %7\'dir, ancak bu bireyselleştirilmelidir.',
      },
      {
        question: 'A1C testimi ne sıklıkla yaptırmalıyım?',
        answer:
          'Tedavi hedeflerini karşılayan diyabetli kişiler için: yılda en az iki kez. Hedefleri karşılamayanlar için: her 3 ayda bir. Prediyabet taraması için: yıllık.',
      },
      {
        question: 'A1C\'mi nasıl düşürebilirim?',
        answer:
          'A1C\'yi düşürmek için: (1) Sağlıklı beslenme - rafine karbonhidratları azaltın; (2) Düzenli egzersiz - haftada 150 dakika; (3) Kilo kaybı - vücut ağırlığının %5-10\'unu kaybetmek; (4) İlaç uyumu; (5) Stres yönetimi ve yeterli uyku.',
      },
    ],
  },
};
