'use client';

import React from 'react';
import { Card } from '@/components/ui';

interface CholesterolGuideProps {
  locale: 'en' | 'tr';
}

const CholesterolGuide: React.FC<CholesterolGuideProps> = ({ locale }) => {
  const sections = locale === 'tr' ? trSections : enSections;

  return (
    <>
      {/* How to Improve */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-neutral-900">{sections.improveTitle}</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.improveTips.map((tip, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 p-3">
              <h4 className="mb-1 text-sm font-semibold text-neutral-800">{tip.title}</h4>
              <p className="text-xs text-neutral-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Reference Table */}
      <Card>
        <h3 className="mb-4 text-lg font-semibold text-neutral-900">
          {sections.referenceTitle}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="pb-2 font-semibold text-neutral-700">{sections.tableHeaders[0]}</th>
                <th className="pb-2 font-semibold text-neutral-700">{sections.tableHeaders[1]}</th>
                <th className="pb-2 font-semibold text-neutral-700">{sections.tableHeaders[2]}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {sections.tableRows.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 text-neutral-700">{row[0]}</td>
                  <td className="py-2 text-neutral-600">{row[1]}</td>
                  <td className="py-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${row[3]}`}
                    >
                      {row[2]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Medical Disclaimer */}
      <Card className="border-amber-200 bg-amber-50">
        <div className="flex gap-3">
          <span className="text-xl">⚕️</span>
          <div>
            <h4 className="mb-1 text-sm font-semibold text-amber-900">
              {sections.disclaimerTitle}
            </h4>
            <p className="text-xs text-amber-800">{sections.disclaimerText}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

const trSections = {
  improveTitle: 'Kolesterol Seviyenizi Nasıl İyileştirebilirsiniz?',
  improveTips: [
    {
      title: 'Sağlıklı Beslenme',
      description:
        'Doymuş yağları azaltın, trans yağlardan kaçının. Lif, balık, kuruyemiş ve zeytinyağı tüketimini artırın. Akdeniz diyetini tercih edin.',
    },
    {
      title: 'Düzenli Egzersiz',
      description:
        'Haftada en az 150 dakika orta yoğunlukta aerobik egzersiz yapın. Yürüyüş, yüzme veya bisiklet HDL kolesterolü artırır.',
    },
    {
      title: 'Kilo Yönetimi',
      description:
        'Fazla kilolu iseniz %5-10 kilo kaybı bile kolesterol seviyelerini önemli ölçüde iyileştirebilir. Sağlıklı VKİ aralığını hedefleyin.',
    },
    {
      title: 'Sigara ve Alkol',
      description:
        'Sigarayı bırakmak HDL kolesterolü artırır. Alkol tüketimini sınırlayın. Kırmızı şarabın kalbe faydası abartılmıştır.',
    },
    {
      title: 'Stres Yönetimi',
      description:
        'Kronik stres kolesterol seviyelerini olumsuz etkiler. Meditasyon, yoga veya derin nefes egzersizleri deneyin.',
    },
    {
      title: 'Düzenli Kontrol',
      description:
        '20 yaş üstü yetişkinler her 4-6 yılda bir, risk faktörleri olanlar daha sık kolesterol kontrolü yaptırmalıdır.',
    },
  ],
  referenceTitle: 'Kolesterol Referans Değerleri (mg/dL)',
  tableHeaders: ['Parametre', 'Aralık', 'Durum'],
  tableRows: [
    ['Toplam Kolesterol', '< 200', 'İdeal', 'bg-green-100 text-green-800'],
    ['Toplam Kolesterol', '200 - 239', 'Sınırda Yüksek', 'bg-yellow-100 text-yellow-800'],
    ['Toplam Kolesterol', '≥ 240', 'Yüksek', 'bg-red-100 text-red-800'],
    ['HDL Kolesterol', '≥ 60', 'Optimal (Koruyucu)', 'bg-green-100 text-green-800'],
    ['HDL Kolesterol', '40 - 59', 'Normal', 'bg-yellow-100 text-yellow-800'],
    ['HDL Kolesterol', '< 40', 'Düşük (Risk)', 'bg-red-100 text-red-800'],
    ['LDL Kolesterol', '< 100', 'Optimal', 'bg-green-100 text-green-800'],
    ['LDL Kolesterol', '100 - 129', 'Optimale Yakın', 'bg-green-100 text-green-800'],
    ['LDL Kolesterol', '130 - 159', 'Sınırda Yüksek', 'bg-yellow-100 text-yellow-800'],
    ['LDL Kolesterol', '160 - 189', 'Yüksek', 'bg-orange-100 text-orange-800'],
    ['LDL Kolesterol', '≥ 190', 'Çok Yüksek', 'bg-red-100 text-red-800'],
    ['Trigliserit', '< 150', 'Normal', 'bg-green-100 text-green-800'],
    ['Trigliserit', '150 - 199', 'Sınırda Yüksek', 'bg-yellow-100 text-yellow-800'],
    ['Trigliserit', '200 - 499', 'Yüksek', 'bg-orange-100 text-orange-800'],
    ['Trigliserit', '≥ 500', 'Çok Yüksek', 'bg-red-100 text-red-800'],
  ] as [string, string, string, string][],
  disclaimerTitle: 'Tıbbi Uyarı',
  disclaimerText:
    'Bu hesaplayıcı yalnızca bilgilendirme amaçlıdır ve profesyonel tıbbi tavsiyenin, teşhisin veya tedavinin yerine geçmez. Kolesterol değerlerinizi yorumlamak ve tedavi planı oluşturmak için mutlaka bir doktora danışın. Kolesterol ilaçlarınızı doktor kontrolü olmadan kesinlikle değiştirmeyin veya bırakmayın.',
};

const enSections = {
  improveTitle: 'How to Improve Your Cholesterol Levels',
  improveTips: [
    {
      title: 'Heart-Healthy Diet',
      description:
        'Reduce saturated fats, avoid trans fats. Increase fiber, fish, nuts, and olive oil intake. Consider the Mediterranean diet.',
    },
    {
      title: 'Regular Exercise',
      description:
        'Get at least 150 minutes of moderate aerobic exercise per week. Walking, swimming, or cycling can raise HDL cholesterol.',
    },
    {
      title: 'Weight Management',
      description:
        'Even 5-10% weight loss can significantly improve cholesterol levels if you are overweight. Aim for a healthy BMI range.',
    },
    {
      title: 'Smoking & Alcohol',
      description:
        'Quitting smoking raises HDL cholesterol. Limit alcohol consumption. The heart benefits of red wine are overstated.',
    },
    {
      title: 'Stress Management',
      description:
        'Chronic stress negatively affects cholesterol levels. Try meditation, yoga, or deep breathing exercises.',
    },
    {
      title: 'Regular Checkups',
      description:
        'Adults over 20 should get a cholesterol check every 4-6 years. Those with risk factors should check more frequently.',
    },
  ],
  referenceTitle: 'Cholesterol Reference Values (mg/dL)',
  tableHeaders: ['Parameter', 'Range', 'Status'],
  tableRows: [
    ['Total Cholesterol', '< 200', 'Desirable', 'bg-green-100 text-green-800'],
    ['Total Cholesterol', '200 - 239', 'Borderline High', 'bg-yellow-100 text-yellow-800'],
    ['Total Cholesterol', '≥ 240', 'High', 'bg-red-100 text-red-800'],
    ['HDL Cholesterol', '≥ 60', 'Optimal (Protective)', 'bg-green-100 text-green-800'],
    ['HDL Cholesterol', '40 - 59', 'Normal', 'bg-yellow-100 text-yellow-800'],
    ['HDL Cholesterol', '< 40', 'Low (Risk Factor)', 'bg-red-100 text-red-800'],
    ['LDL Cholesterol', '< 100', 'Optimal', 'bg-green-100 text-green-800'],
    ['LDL Cholesterol', '100 - 129', 'Near Optimal', 'bg-green-100 text-green-800'],
    ['LDL Cholesterol', '130 - 159', 'Borderline High', 'bg-yellow-100 text-yellow-800'],
    ['LDL Cholesterol', '160 - 189', 'High', 'bg-orange-100 text-orange-800'],
    ['LDL Cholesterol', '≥ 190', 'Very High', 'bg-red-100 text-red-800'],
    ['Triglycerides', '< 150', 'Normal', 'bg-green-100 text-green-800'],
    ['Triglycerides', '150 - 199', 'Borderline High', 'bg-yellow-100 text-yellow-800'],
    ['Triglycerides', '200 - 499', 'High', 'bg-orange-100 text-orange-800'],
    ['Triglycerides', '≥ 500', 'Very High', 'bg-red-100 text-red-800'],
  ] as [string, string, string, string][],
  disclaimerTitle: 'Medical Disclaimer',
  disclaimerText:
    'This calculator is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Consult a doctor to interpret your cholesterol values and create a treatment plan. Never change or stop cholesterol medications without consulting your doctor.',
};

export default CholesterolGuide;
