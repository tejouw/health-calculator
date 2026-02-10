import React from 'react';
import { Card } from '@/components/ui';
import {
  Heart,
  Activity,
  AlertCircle,
  AlertTriangle,
  Info,
  TrendingUp,
  Scale,
  Apple,
  Cigarette,
  Wine,
  Dumbbell,
  Clock
} from 'lucide-react';

interface BloodPressureGuideProps {
  locale: 'en' | 'tr';
}

const BloodPressureGuide: React.FC<BloodPressureGuideProps> = ({ locale }) => {
  const content = {
    en: {
      title: 'Understanding Blood Pressure',

      // What is Blood Pressure Section
      whatIs: {
        title: 'What is Blood Pressure?',
        content: `Blood pressure is the force exerted by circulating blood against the walls of your arteries. Every time your heart beats, it pumps blood through your arteries to the rest of your body. Blood pressure is one of the vital signs that healthcare providers check to assess your overall health.

Blood pressure readings consist of two numbers, typically written as one number over another (e.g., 120/80 mmHg). Understanding both numbers is crucial for assessing cardiovascular health.

**Systolic Pressure (Upper Number):** This is the first or top number in a blood pressure reading. It measures the pressure in your arteries when your heart beats and pumps blood. This represents the maximum pressure your blood vessels experience during a cardiac cycle.

**Diastolic Pressure (Lower Number):** This is the second or bottom number. It measures the pressure in your arteries when your heart rests between beats. This represents the minimum pressure your blood vessels experience.

Both numbers are important indicators of heart health. High systolic or diastolic pressure can increase your risk of heart disease, stroke, and other serious health conditions.`
      },

      // Categories Section
      categories: {
        title: 'Blood Pressure Categories (American Heart Association)',
        intro: 'The American Heart Association (AHA) defines five blood pressure categories:',
        list: [
          {
            name: 'Normal',
            systolic: 'Less than 120',
            diastolic: 'AND Less than 80',
            description: 'Maintain healthy lifestyle habits like regular exercise and heart-healthy diet.',
            color: 'green'
          },
          {
            name: 'Elevated',
            systolic: '120-129',
            diastolic: 'AND Less than 80',
            description: 'Take steps to control your blood pressure through lifestyle changes to prevent progression to hypertension.',
            color: 'yellow'
          },
          {
            name: 'Hypertension Stage 1',
            systolic: '130-139',
            diastolic: 'OR 80-89',
            description: 'Doctors may prescribe lifestyle changes and possibly medication based on your cardiovascular disease risk.',
            color: 'orange'
          },
          {
            name: 'Hypertension Stage 2',
            systolic: '140 or higher',
            diastolic: 'OR 90 or higher',
            description: 'Doctors likely will prescribe a combination of blood pressure medications and lifestyle changes.',
            color: 'red'
          },
          {
            name: 'Hypertensive Crisis',
            systolic: 'Higher than 180',
            diastolic: 'AND/OR Higher than 120',
            description: 'This requires immediate medical attention. Call 911 if you experience chest pain, shortness of breath, back pain, numbness/weakness, vision changes, or difficulty speaking.',
            color: 'darkred'
          }
        ]
      },

      // How Calculator Works
      howItWorks: {
        title: 'How This Calculator Works',
        content: `This blood pressure calculator uses the established guidelines from the American Heart Association (AHA) to categorize your blood pressure reading and provide appropriate recommendations.

**The Classification Process:**

1. **Input Validation:** The calculator first validates that your input values are within physiologically possible ranges (systolic: 70-250 mmHg, diastolic: 40-200 mmHg) and that systolic pressure is higher than diastolic pressure.

2. **Category Determination:** Using the AHA guidelines, the calculator evaluates both your systolic and diastolic numbers to determine your blood pressure category. The classification follows this hierarchy:
   - If systolic ≥ 180 OR diastolic ≥ 120: Hypertensive Crisis
   - If systolic ≥ 140 OR diastolic ≥ 90: Hypertension Stage 2
   - If systolic ≥ 130 OR diastolic ≥ 80: Hypertension Stage 1
   - If systolic 120-129 AND diastolic < 80: Elevated
   - If systolic < 120 AND diastolic < 80: Normal

3. **Risk Assessment:** Based on your category, the calculator assigns a risk level (normal, elevated, high, or critical) and provides color-coded visual feedback.

4. **Personalized Recommendations:** The calculator generates specific lifestyle recommendations and medical advice appropriate for your blood pressure category.

**Important Note:** This calculator is for informational and educational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider about your blood pressure readings.`
      },

      // Lifestyle Changes Section
      lifestyle: {
        title: 'Lifestyle Changes to Lower Blood Pressure',
        intro: 'Research shows that lifestyle modifications can significantly reduce blood pressure. Here are evidence-based strategies:',
        changes: [
          {
            icon: Scale,
            title: 'Maintain Healthy Weight',
            description: 'Losing even 5-10 pounds can help reduce blood pressure. For every 2.2 pounds (1 kg) you lose, you can lower your blood pressure by approximately 1 mmHg.'
          },
          {
            icon: Dumbbell,
            title: 'Regular Physical Activity',
            description: 'Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week. Activities like brisk walking, swimming, or cycling can lower blood pressure by 5-8 mmHg.'
          },
          {
            icon: Apple,
            title: 'DASH Diet',
            description: 'Follow the Dietary Approaches to Stop Hypertension (DASH) diet. Emphasize fruits, vegetables, whole grains, and lean proteins while limiting sodium, saturated fats, and added sugars. This can reduce blood pressure by 11 mmHg.'
          },
          {
            icon: AlertCircle,
            title: 'Reduce Sodium Intake',
            description: 'Limit sodium to less than 2,300 mg per day (ideally 1,500 mg for most adults). Even a small reduction can lower blood pressure by 5-6 mmHg.'
          },
          {
            icon: Wine,
            title: 'Limit Alcohol',
            description: 'If you drink alcohol, do so in moderation: up to one drink per day for women and up to two for men. Excessive drinking can raise blood pressure.'
          },
          {
            icon: Cigarette,
            title: 'Quit Smoking',
            description: 'Smoking increases blood pressure and heart rate. Quitting smoking improves overall heart health and reduces cardiovascular disease risk.'
          },
          {
            icon: Clock,
            title: 'Manage Stress',
            description: 'Practice stress-reduction techniques like deep breathing, meditation, yoga, or regular exercise. Chronic stress can contribute to high blood pressure.'
          }
        ]
      },

      // Measurement Tips
      measurement: {
        title: 'How to Measure Blood Pressure Correctly',
        intro: 'Accurate measurement is crucial for proper blood pressure management. Follow these guidelines:',
        tips: [
          {
            title: 'Before Measurement',
            points: [
              'Avoid caffeine, exercise, and smoking for 30 minutes before',
              'Empty your bladder',
              'Rest in a chair for 5 minutes before measuring',
              'Don\'t talk during the measurement'
            ]
          },
          {
            title: 'Proper Positioning',
            points: [
              'Sit in a chair with your back supported',
              'Keep feet flat on the floor (don\'t cross legs)',
              'Rest your arm on a flat surface at heart level',
              'Position the cuff on bare skin, not over clothing'
            ]
          },
          {
            title: 'Taking the Reading',
            points: [
              'Take 2-3 readings, 1 minute apart',
              'Measure at the same time each day',
              'Record all your readings',
              'Take readings in the morning and evening if possible'
            ]
          },
          {
            title: 'When to Seek Help',
            points: [
              'Blood pressure consistently above 130/80',
              'Sudden spike in blood pressure with symptoms',
              'Blood pressure higher than 180/120',
              'Symptoms like chest pain, shortness of breath, or severe headache'
            ]
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Frequently Asked Questions',
        questions: [
          {
            q: 'What should I do if my blood pressure is high?',
            a: 'If your blood pressure reading is elevated or in the hypertension range, schedule an appointment with your healthcare provider. Don\'t attempt to diagnose or treat high blood pressure on your own. If your reading is 180/120 or higher, and you have symptoms like chest pain, shortness of breath, back pain, numbness, vision changes, or difficulty speaking, call 911 immediately.'
          },
          {
            q: 'How often should I check my blood pressure?',
            a: 'If you have normal blood pressure (less than 120/80), check it at least once every two years. If you have elevated blood pressure or stage 1 hypertension, check it more frequently as recommended by your doctor, often daily. People with stage 2 hypertension should monitor daily and keep a log to share with their healthcare provider.'
          },
          {
            q: 'Can blood pressure fluctuate throughout the day?',
            a: 'Yes, blood pressure naturally fluctuates throughout the day. It\'s typically lower at night during sleep and rises during the early morning hours. Physical activity, stress, temperature, diet, posture, and even your emotional state can cause temporary changes. This is why it\'s important to measure at consistent times and take multiple readings.'
          },
          {
            q: 'What is white coat hypertension?',
            a: 'White coat hypertension refers to blood pressure readings that are higher in a medical setting than at home, typically due to anxiety or stress about being in a doctor\'s office. This affects about 15-30% of people with elevated blood pressure readings. Home blood pressure monitoring can help identify this phenomenon. However, even white coat hypertension should be monitored as research suggests it may increase cardiovascular risk.'
          },
          {
            q: 'Can I stop taking blood pressure medication if my readings are normal?',
            a: 'Never stop taking prescribed blood pressure medication without consulting your doctor, even if your readings are normal. Normal readings while on medication mean the medication is working. Stopping suddenly can cause your blood pressure to spike dangerously high. If you want to reduce or eliminate medication, work with your doctor to do so gradually while monitoring your blood pressure closely.'
          },
          {
            q: 'What causes high blood pressure?',
            a: 'High blood pressure can result from various factors: family history, age (risk increases with age), race (more common in African Americans), obesity, lack of physical activity, tobacco use, high sodium intake, low potassium intake, excessive alcohol consumption, stress, certain chronic conditions (kidney disease, diabetes, sleep apnea), and sometimes pregnancy. In about 95% of cases, the exact cause isn\'t known (primary hypertension), while 5% results from an underlying condition (secondary hypertension).'
          },
          {
            q: 'Is 130/80 really considered high blood pressure now?',
            a: 'Yes, since 2017, the American Heart Association and American College of Cardiology lowered the threshold for stage 1 hypertension from 140/90 to 130/80. This change was based on research showing that complications can occur at these lower numbers. The goal is early intervention through lifestyle changes to prevent progression to more serious hypertension and reduce cardiovascular risk. However, not everyone with 130/80 will need medication—lifestyle modifications are often the first line of treatment.'
          }
        ]
      },

      // Medical Disclaimer
      disclaimer: {
        title: 'Medical Disclaimer',
        content: 'This blood pressure calculator is intended for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your blood pressure or a medical condition. Never disregard professional medical advice or delay seeking it because of something you have calculated or read on this tool. If you think you may have a medical emergency, call your doctor or 911 immediately.'
      },

      // References
      references: {
        title: 'References & Sources',
        list: [
          'American Heart Association. (2023). Understanding Blood Pressure Readings. www.heart.org',
          'Whelton PK, et al. (2018). 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. Journal of the American College of Cardiology.',
          'National Heart, Lung, and Blood Institute. (2023). High Blood Pressure. www.nhlbi.nih.gov',
          'World Health Organization. (2023). Hypertension. www.who.int',
          'Mayo Clinic. (2023). High blood pressure (hypertension). www.mayoclinic.org',
          'Centers for Disease Control and Prevention. (2023). High Blood Pressure. www.cdc.gov'
        ]
      }
    },
    tr: {
      title: 'Kan Basıncını Anlamak',

      // What is Blood Pressure Section
      whatIs: {
        title: 'Kan Basıncı Nedir?',
        content: `Kan basıncı, dolaşan kanın arter duvarlarına uyguladığı kuvvettir. Kalbiniz her attığında, kanı arterler aracılığıyla vücudunuzun geri kalanına pompalar. Kan basıncı, sağlık uzmanlarının genel sağlığınızı değerlendirmek için kontrol ettiği hayati bulgulardan biridir.

Kan basıncı okumaları, genellikle bir sayının diğerinin üzerine yazıldığı iki sayıdan oluşur (örn. 120/80 mmHg). Kardiyovasküler sağlığı değerlendirmek için her iki sayıyı da anlamak önemlidir.

**Sistolik Basınç (Üst Sayı):** Bu, kan basıncı ölçümündeki ilk veya üst sayıdır. Kalbiniz attığında ve kan pompaladığında arterlerinizdeki basıncı ölçer. Bu, kan damarlarınızın bir kalp döngüsü sırasında yaşadığı maksimum basıncı temsil eder.

**Diyastolik Basınç (Alt Sayı):** Bu ikinci veya alt sayıdır. Kalbiniz atışlar arasında dinlenirken arterlerinizdeki basıncı ölçer. Bu, kan damarlarınızın yaşadığı minimum basıncı temsil eder.

Her iki sayı da kalp sağlığının önemli göstergeleridir. Yüksek sistolik veya diyastolik basınç, kalp hastalığı, inme ve diğer ciddi sağlık sorunları riskinizi artırabilir.`
      },

      // Categories Section
      categories: {
        title: 'Kan Basıncı Kategorileri (Amerikan Kalp Birliği)',
        intro: 'Amerikan Kalp Birliği (AHA) beş kan basıncı kategorisi tanımlar:',
        list: [
          {
            name: 'Normal',
            systolic: '120\'den az',
            diastolic: 'VE 80\'den az',
            description: 'Düzenli egzersiz ve kalp sağlığına uygun beslenme gibi sağlıklı yaşam tarzı alışkanlıklarını sürdürün.',
            color: 'green'
          },
          {
            name: 'Yüksek Normal',
            systolic: '120-129',
            diastolic: 'VE 80\'den az',
            description: 'Hipertansiyona ilerlemeyi önlemek için yaşam tarzı değişiklikleri yoluyla kan basıncınızı kontrol etmek için adımlar atın.',
            color: 'yellow'
          },
          {
            name: 'Hipertansiyon Evre 1',
            systolic: '130-139',
            diastolic: 'VEYA 80-89',
            description: 'Doktorlar, kardiyovasküler hastalık riskinize bağlı olarak yaşam tarzı değişiklikleri ve muhtemelen ilaç reçete edebilir.',
            color: 'orange'
          },
          {
            name: 'Hipertansiyon Evre 2',
            systolic: '140 veya daha yüksek',
            diastolic: 'VEYA 90 veya daha yüksek',
            description: 'Doktorlar muhtemelen kan basıncı ilaçları ve yaşam tarzı değişikliklerinin bir kombinasyonunu reçete edecektir.',
            color: 'red'
          },
          {
            name: 'Hipertansif Kriz',
            systolic: '180\'den yüksek',
            diastolic: 'VE/VEYA 120\'den yüksek',
            description: 'Bu acil tıbbi müdahale gerektirir. Göğüs ağrısı, nefes darlığı, sırt ağrısı, uyuşma/güçsüzlük, görme değişiklikleri veya konuşma güçlüğü yaşıyorsanız 112\'yi arayın.',
            color: 'darkred'
          }
        ]
      },

      // How Calculator Works
      howItWorks: {
        title: 'Bu Hesaplayıcı Nasıl Çalışır',
        content: `Bu kan basıncı hesaplayıcı, kan basıncı ölçümünüzü kategorize etmek ve uygun öneriler sağlamak için Amerikan Kalp Birliği\'nden (AHA) alınan yerleşik kılavuzları kullanır.

**Sınıflandırma Süreci:**

1. **Girdi Doğrulama:** Hesaplayıcı önce girdi değerlerinizin fizyolojik olarak mümkün aralıklar içinde (sistolik: 70-250 mmHg, diyastolik: 40-200 mmHg) olduğunu ve sistolik basıncın diyastolik basınçtan yüksek olduğunu doğrular.

2. **Kategori Belirleme:** AHA kılavuzlarını kullanarak, hesaplayıcı kan basıncı kategorinizi belirlemek için hem sistolik hem de diyastolik sayılarınızı değerlendirir. Sınıflandırma bu hiyerarşiyi takip eder:
   - Sistolik ≥ 180 VEYA diyastolik ≥ 120 ise: Hipertansif Kriz
   - Sistolik ≥ 140 VEYA diyastolik ≥ 90 ise: Hipertansiyon Evre 2
   - Sistolik ≥ 130 VEYA diyastolik ≥ 80 ise: Hipertansiyon Evre 1
   - Sistolik 120-129 VE diyastolik < 80 ise: Yüksek Normal
   - Sistolik < 120 VE diyastolik < 80 ise: Normal

3. **Risk Değerlendirmesi:** Kategorinize göre, hesaplayıcı bir risk seviyesi (normal, yüksek, çok yüksek veya kritik) atar ve renk kodlu görsel geri bildirim sağlar.

4. **Kişiselleştirilmiş Öneriler:** Hesaplayıcı, kan basıncı kategorinize uygun belirli yaşam tarzı önerileri ve tıbbi tavsiyeler üretir.

**Önemli Not:** Bu hesaplayıcı yalnızca bilgilendirme ve eğitim amaçlıdır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini almaz. Kan basıncı ölçümleriniz hakkında her zaman kalifiye bir sağlık uzmanına danışın.`
      },

      // Lifestyle Changes Section
      lifestyle: {
        title: 'Kan Basıncını Düşürmek İçin Yaşam Tarzı Değişiklikleri',
        intro: 'Araştırmalar, yaşam tarzı değişikliklerinin kan basıncını önemli ölçüde azaltabileceğini göstermektedir. İşte kanıta dayalı stratejiler:',
        changes: [
          {
            icon: Scale,
            title: 'Sağlıklı Kilonuzu Koruyun',
            description: '5-10 kilo vermek bile kan basıncını düşürmeye yardımcı olabilir. Kaybettiğiniz her 2.2 pound (1 kg) için kan basıncınızı yaklaşık 1 mmHg düşürebilirsiniz.'
          },
          {
            icon: Dumbbell,
            title: 'Düzenli Fiziksel Aktivite',
            description: 'Haftada en az 150 dakika orta düzeyde aerobik aktivite veya 75 dakika yoğun aktivite hedefleyin. Hızlı yürüyüş, yüzme veya bisiklete binme gibi aktiviteler kan basıncını 5-8 mmHg düşürebilir.'
          },
          {
            icon: Apple,
            title: 'DASH Diyeti',
            description: 'Hipertansiyonu Durdurmak İçin Diyet Yaklaşımları (DASH) diyetini uygulayın. Meyve, sebze, tam tahıllar ve yağsız proteinleri vurgularken sodyum, doymuş yağlar ve ilave şekerleri sınırlayın. Bu, kan basıncını 11 mmHg düşürebilir.'
          },
          {
            icon: AlertCircle,
            title: 'Sodyum Alımını Azaltın',
            description: 'Sodyumu günde 2.300 mg\'dan az tutun (çoğu yetişkin için ideal olarak 1.500 mg). Küçük bir azaltma bile kan basıncını 5-6 mmHg düşürebilir.'
          },
          {
            icon: Wine,
            title: 'Alkol Tüketimini Sınırlayın',
            description: 'Alkol içiyorsanız, ölçülü içirin: kadınlar için günde bir içki, erkekler için günde iki içkiye kadar. Aşırı içki içmek kan basıncını yükseltebilir.'
          },
          {
            icon: Cigarette,
            title: 'Sigarayı Bırakın',
            description: 'Sigara içmek kan basıncını ve kalp atış hızını artırır. Sigarayı bırakmak genel kalp sağlığını iyileştirir ve kardiyovasküler hastalık riskini azaltır.'
          },
          {
            icon: Clock,
            title: 'Stresi Yönetin',
            description: 'Derin nefes alma, meditasyon, yoga veya düzenli egzersiz gibi stres azaltma tekniklerini uygulayın. Kronik stres yüksek kan basıncına katkıda bulunabilir.'
          }
        ]
      },

      // Measurement Tips
      measurement: {
        title: 'Kan Basıncı Doğru Nasıl Ölçülür',
        intro: 'Doğru ölçüm, uygun kan basıncı yönetimi için çok önemlidir. Bu kılavuzları izleyin:',
        tips: [
          {
            title: 'Ölçümden Önce',
            points: [
              'Ölçümden 30 dakika önce kafein, egzersiz ve sigara içmekten kaçının',
              'Mesanenizi boşaltın',
              'Ölçmeden önce bir sandalyede 5 dakika dinlenin',
              'Ölçüm sırasında konuşmayın'
            ]
          },
          {
            title: 'Doğru Pozisyon',
            points: [
              'Sırtınız destekli bir sandalyede oturun',
              'Ayaklarınızı yere düz basın (bacak bacak üstüne atmayın)',
              'Kolunuzu kalp hizasında düz bir yüzeye yaslayın',
              'Manşonu çıplak cilt üzerinde konumlandırın, kıyafet üzerine değil'
            ]
          },
          {
            title: 'Ölçüm Alma',
            points: [
              '1 dakika arayla 2-3 ölçüm alın',
              'Her gün aynı saatte ölçün',
              'Tüm ölçümlerinizi kaydedin',
              'Mümkünse sabah ve akşam ölçüm alın'
            ]
          },
          {
            title: 'Ne Zaman Yardım İstenmeli',
            points: [
              'Kan basıncı sürekli olarak 130/80\'in üzerinde',
              'Semptomlarla birlikte ani kan basıncı artışı',
              'Kan basıncı 180/120\'den yüksek',
              'Göğüs ağrısı, nefes darlığı veya şiddetli baş ağrısı gibi semptomlar'
            ]
          }
        ]
      },

      // FAQ Section
      faq: {
        title: 'Sıkça Sorulan Sorular',
        questions: [
          {
            q: 'Kan basıncım yüksekse ne yapmalıyım?',
            a: 'Kan basıncı ölçümünüz yüksek normal veya hipertansiyon aralığındaysa, sağlık uzmanınızla bir randevu ayarlayın. Yüksek kan basıncını kendi başınıza teşhis etmeye veya tedavi etmeye çalışmayın. Ölçümünüz 180/120 veya daha yüksekse ve göğüs ağrısı, nefes darlığı, sırt ağrısı, uyuşma, görme değişiklikleri veya konuşma güçlüğü gibi semptomlarınız varsa hemen 112\'yi arayın.'
          },
          {
            q: 'Kan basıncımı ne sıklıkta kontrol etmeliyim?',
            a: 'Normal kan basıncınız varsa (120/80\'den az), en az iki yılda bir kontrol edin. Yüksek normal kan basıncınız veya evre 1 hipertansiyonunuz varsa, doktorunuzun önerdiği şekilde daha sık, genellikle her gün kontrol edin. Evre 2 hipertansiyonu olan kişiler her gün izlemeli ve sağlık uzmanlarıyla paylaşmak üzere bir kayıt tutmalıdır.'
          },
          {
            q: 'Kan basıncı gün boyunca dalgalanabilir mi?',
            a: 'Evet, kan basıncı gün boyunca doğal olarak dalgalanır. Genellikle gece uykuda daha düşüktür ve erken sabah saatlerinde yükselir. Fiziksel aktivite, stres, sıcaklık, diyet, duruş ve hatta duygusal durumunuz geçici değişikliklere neden olabilir. Bu nedenle tutarlı zamanlarda ölçüm yapmak ve birden fazla ölçüm almak önemlidir.'
          },
          {
            q: 'Beyaz önlük hipertansiyonu nedir?',
            a: 'Beyaz önlük hipertansiyonu, doktor ofisinde olmaktan kaynaklanan anksiyete veya stres nedeniyle, genellikle tıbbi ortamda evdekinden daha yüksek olan kan basıncı ölçümlerini ifade eder. Bu, yüksek kan basıncı ölçümü olan kişilerin yaklaşık %15-30\'unu etkiler. Evde kan basıncı izleme bu fenomeni belirlemeye yardımcı olabilir. Ancak, beyaz önlük hipertansiyonu bile izlenmelidir çünkü araştırmalar bunun kardiyovasküler riski artırabileceğini göstermektedir.'
          },
          {
            q: 'Ölçümlerim normalse kan basıncı ilacımı bırakabilir miyim?',
            a: 'Ölçümleriniz normal olsa bile, doktorunuza danışmadan reçete edilen kan basıncı ilacını asla bırakmayın. İlaç kullanırken normal ölçümler, ilacın işe yaradığı anlamına gelir. Aniden durmak kan basıncınızın tehlikeli şekilde yükselmesine neden olabilir. İlacı azaltmak veya kesmek istiyorsanız, kan basıncınızı yakından izlerken doktorunuzla birlikte bunu kademeli olarak yapın.'
          },
          {
            q: 'Yüksek kan basıncına ne sebep olur?',
            a: 'Yüksek kan basıncı çeşitli faktörlerden kaynaklanabilir: aile geçmişi, yaş (yaşla birlikte risk artar), ırk (Afrikalı Amerikalılarda daha yaygın), obezite, fiziksel aktivite eksikliği, tütün kullanımı, yüksek sodyum alımı, düşük potasyum alımı, aşırı alkol tüketimi, stres, bazı kronik durumlar (böbrek hastalığı, diyabet, uyku apnesi) ve bazen hamilelik. Vakaların yaklaşık %95\'inde kesin neden bilinmemektedir (primer hipertansiyon), %5\'i ise altta yatan bir durumdan kaynaklanır (sekonder hipertansiyon).'
          },
          {
            q: '130/80 gerçekten yüksek kan basıncı olarak kabul ediliyor mu?',
            a: 'Evet, 2017\'den beri Amerikan Kalp Birliği ve Amerikan Kardiyoloji Koleji, evre 1 hipertansiyon eşiğini 140/90\'dan 130/80\'e indirdi. Bu değişiklik, komplikasyonların bu daha düşük sayılarda ortaya çıkabileceğini gösteren araştırmalara dayanıyordu. Amaç, daha ciddi hipertansiyona ilerlemeyi önlemek ve kardiyovasküler riski azaltmak için yaşam tarzı değişiklikleri yoluyla erken müdahaledir. Ancak, 130/80 olan herkesin ilaca ihtiyacı olmayacaktır—yaşam tarzı değişiklikleri genellikle ilk tedavi hattıdır.'
          }
        ]
      },

      // Medical Disclaimer
      disclaimer: {
        title: 'Tıbbi Sorumluluk Reddi',
        content: 'Bu kan basıncı hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini almaz. Kan basıncınız veya tıbbi bir durumla ilgili herhangi bir sorunuz varsa her zaman doktorunuzun veya diğer kalifiye sağlık sağlayıcısının tavsiyesini alın. Bu araçta hesapladığınız veya okuduğunuz bir şey nedeniyle profesyonel tıbbi tavsiyeyi asla göz ardı etmeyin veya aramayı ertelemeyin. Tıbbi bir acil durumunuz olabileceğini düşünüyorsanız, hemen doktorunuzu veya 112\'yi arayın.'
      },

      // References
      references: {
        title: 'Kaynaklar ve Referanslar',
        list: [
          'American Heart Association. (2023). Kan Basıncı Ölçümlerini Anlamak. www.heart.org',
          'Whelton PK, ve ark. (2018). Yetişkinlerde Yüksek Kan Basıncının Önlenmesi, Tespiti, Değerlendirilmesi ve Yönetimi için 2017 ACC/AHA Kılavuzu. Journal of the American College of Cardiology.',
          'Ulusal Kalp, Akciğer ve Kan Enstitüsü. (2023). Yüksek Kan Basıncı. www.nhlbi.nih.gov',
          'Dünya Sağlık Örgütü. (2023). Hipertansiyon. www.who.int',
          'Mayo Clinic. (2023). Yüksek kan basıncı (hipertansiyon). www.mayoclinic.org',
          'Hastalık Kontrol ve Önleme Merkezleri. (2023). Yüksek Kan Basıncı. www.cdc.gov'
        ]
      }
    }
  };

  const t = content[locale];

  const getCategoryColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 border-green-300 text-green-900',
      yellow: 'bg-yellow-100 border-yellow-300 text-yellow-900',
      orange: 'bg-orange-100 border-orange-300 text-orange-900',
      red: 'bg-red-100 border-red-300 text-red-900',
      darkred: 'bg-red-200 border-red-400 text-red-950'
    };
    return colors[color as keyof typeof colors] || colors.green;
  };

  return (
    <div className="space-y-6">
      {/* What is Blood Pressure */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <Heart className="h-6 w-6 text-red-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.whatIs.title}</h3>
        </div>
        <div className="prose prose-sm max-w-none text-neutral-700">
          {t.whatIs.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>

      {/* Blood Pressure Categories */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <Activity className="h-6 w-6 text-blue-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.categories.title}</h3>
        </div>
        <p className="mb-6 text-neutral-700">{t.categories.intro}</p>

        <div className="space-y-4">
          {t.categories.list.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 p-4 ${getCategoryColor(category.color)}`}
            >
              <h4 className="mb-2 text-lg font-bold">{category.name}</h4>
              <div className="mb-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-semibold">{locale === 'en' ? 'Systolic:' : 'Sistolik:'}</span> {category.systolic}
                </div>
                <div>
                  <span className="font-semibold">{locale === 'en' ? 'Diastolic:' : 'Diyastolik:'}</span> {category.diastolic}
                </div>
              </div>
              <p className="text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* How Calculator Works */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-purple-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.howItWorks.title}</h3>
        </div>
        <div className="prose prose-sm max-w-none text-neutral-700">
          {t.howItWorks.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>
      </Card>

      {/* Lifestyle Changes */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <Dumbbell className="h-6 w-6 text-green-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.lifestyle.title}</h3>
        </div>
        <p className="mb-6 text-neutral-700">{t.lifestyle.intro}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {t.lifestyle.changes.map((change, index) => {
            const Icon = change.icon;
            return (
              <div key={index} className="rounded-lg border-2 border-neutral-200 bg-white p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <h4 className="font-bold text-neutral-900">{change.title}</h4>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">{change.description}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Measurement Tips */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <Info className="h-6 w-6 text-blue-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.measurement.title}</h3>
        </div>
        <p className="mb-6 text-neutral-700">{t.measurement.intro}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {t.measurement.tips.map((tip, index) => (
            <div key={index} className="rounded-lg bg-blue-50 p-4">
              <h4 className="mb-3 font-bold text-blue-900">{tip.title}</h4>
              <ul className="space-y-2">
                {tip.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-900">
                      {pointIndex + 1}
                    </span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      {/* FAQ Section */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <AlertCircle className="h-6 w-6 text-orange-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.faq.title}</h3>
        </div>

        <div className="space-y-4">
          {t.faq.questions.map((faq, index) => (
            <div key={index} className="rounded-lg border-2 border-neutral-200 bg-neutral-50 p-4">
              <h4 className="mb-2 font-bold text-neutral-900">{faq.q}</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Medical Disclaimer */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-600" />
          <h3 className="text-2xl font-bold text-neutral-900">{t.disclaimer.title}</h3>
        </div>
        <div className="rounded-lg bg-amber-50 border-2 border-amber-200 p-4">
          <p className="text-sm text-amber-900 leading-relaxed">{t.disclaimer.content}</p>
        </div>
      </Card>

      {/* References */}
      <Card>
        <h3 className="mb-4 text-xl font-bold text-neutral-900">{t.references.title}</h3>
        <ul className="space-y-2">
          {t.references.list.map((reference, index) => (
            <li key={index} className="text-sm text-neutral-700 leading-relaxed">
              {index + 1}. {reference}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default BloodPressureGuide;
