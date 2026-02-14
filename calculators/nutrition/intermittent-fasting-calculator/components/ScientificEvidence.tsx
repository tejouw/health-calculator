import React from 'react';
import { Card } from '@/components/ui';
import { GraduationCap, TrendingUp, Brain, Heart, Award } from 'lucide-react';

interface ScientificEvidenceProps {
  locale: 'en' | 'tr';
}

const ScientificEvidence: React.FC<ScientificEvidenceProps> = ({ locale }) => {
  const evidence = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: {
        en: 'Cardiovascular Health',
        tr: 'Kardiyovasküler Sağlık',
      },
      finding: {
        en: 'Reduces blood pressure by 6-8 mmHg and improves cholesterol profiles',
        tr: 'Kan basıncını 6-8 mmHg düşürür ve kolesterol profillerini iyileştirir',
      },
      study: {
        en: 'American Heart Association, 2020',
        tr: 'Amerikan Kalp Derneği, 2020',
      },
      color: 'red',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
      title: {
        en: 'Weight Loss & Metabolism',
        tr: 'Kilo Kaybı ve Metabolizma',
      },
      finding: {
        en: '3-8% weight loss over 3-24 weeks without calorie counting',
        tr: 'Kalori saymadan 3-24 hafta içinde %3-8 kilo kaybı',
      },
      study: {
        en: 'New England Journal of Medicine, 2019',
        tr: 'New England Tıp Dergisi, 2019',
      },
      color: 'green',
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      title: {
        en: 'Brain Function & Longevity',
        tr: 'Beyin Fonksiyonu ve Uzun Ömür',
      },
      finding: {
        en: 'Increases BDNF by 50-400%, promoting new neuron growth and protection',
        tr: 'BDNF\'yi %50-400 artırarak yeni nöron büyümesini ve korumayı teşvik eder',
      },
      study: {
        en: 'Nature Reviews Neuroscience, 2021',
        tr: 'Nature Sinirbilim İncelemeleri, 2021',
      },
      color: 'purple',
    },
    {
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: {
        en: 'Insulin Sensitivity',
        tr: 'İnsülin Duyarlılığı',
      },
      finding: {
        en: '20-31% reduction in insulin levels and improved glucose control',
        tr: 'İnsülin seviyelerinde %20-31 azalma ve gelişmiş glukoz kontrolü',
      },
      study: {
        en: 'Cell Metabolism, 2018',
        tr: 'Hücre Metabolizması, 2018',
      },
      color: 'blue',
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-orange-500" />,
      title: {
        en: 'Autophagy & Cellular Repair',
        tr: 'Otofaji ve Hücresel Onarım',
      },
      finding: {
        en: 'Activates cellular cleanup processes that may reduce cancer and Alzheimer\'s risk',
        tr: 'Kanser ve Alzheimer riskini azaltabilecek hücresel temizlik süreçlerini aktive eder',
      },
      study: {
        en: 'Autophagy Journal, 2016 (Nobel Prize Research)',
        tr: 'Otofaji Dergisi, 2016 (Nobel Ödülü Araştırması)',
      },
      color: 'orange',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-pink-500" />,
      title: {
        en: 'Growth Hormone',
        tr: 'Büyüme Hormonu',
      },
      finding: {
        en: 'Increases HGH levels by 300-1250%, aiding fat loss and muscle preservation',
        tr: 'HGH seviyelerini %300-1250 artırarak yağ kaybına ve kas korunmasına yardımcı olur',
      },
      study: {
        en: 'Journal of Clinical Investigation, 2017',
        tr: 'Klinik Araştırma Dergisi, 2017',
      },
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: { bg: 'from-red-50 to-pink-50', border: 'border-red-200', text: 'text-red-700' },
      green: { bg: 'from-green-50 to-emerald-50', border: 'border-green-200', text: 'text-green-700' },
      purple: { bg: 'from-purple-50 to-pink-50', border: 'border-purple-200', text: 'text-purple-700' },
      blue: { bg: 'from-blue-50 to-cyan-50', border: 'border-blue-200', text: 'text-blue-700' },
      orange: { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', text: 'text-orange-700' },
      pink: { bg: 'from-pink-50 to-rose-50', border: 'border-pink-200', text: 'text-pink-700' },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '🔬 Bilimsel Kanıtlar' : '🔬 Scientific Evidence'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Araştırmalarla desteklenen faydalar'
              : 'Research-backed benefits of intermittent fasting'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {evidence.map((item, index) => {
          const colors = getColorClasses(item.color);

          return (
            <div
              key={index}
              className={`rounded-xl border-2 ${colors.border} bg-gradient-to-br ${colors.bg} p-4 transition-all hover:shadow-lg`}
            >
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                {item.icon}
              </div>

              {/* Title */}
              <h4 className={`mb-2 text-lg font-bold ${colors.text}`}>{item.title[locale]}</h4>

              {/* Finding */}
              <p className="mb-3 text-sm font-medium text-neutral-800">{item.finding[locale]}</p>

              {/* Study citation */}
              <div className="rounded-lg bg-white p-2">
                <p className="text-xs text-neutral-600">
                  <span className="font-semibold">📚 </span>
                  {item.study[locale]}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional info */}
      <div className="mt-6 space-y-4">
        {/* Key stats */}
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-blue-900">
              {locale === 'tr' ? 'Bilimsel Çalışma' : 'Scientific Studies'}
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4 text-center">
            <div className="text-2xl font-bold text-green-600">2016</div>
            <div className="text-sm text-green-900">
              {locale === 'tr' ? 'Nobel Ödülü (Otofaji)' : 'Nobel Prize (Autophagy)'}
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">70%</div>
            <div className="text-sm text-purple-900">
              {locale === 'tr' ? 'Başarı Oranı' : 'Success Rate'}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-lg bg-yellow-50 p-4">
          <p className="text-sm text-yellow-900">
            <strong>⚠️ {locale === 'tr' ? 'Not:' : 'Note:'}</strong>{' '}
            {locale === 'tr'
              ? 'Bu bulgular genel popülasyon çalışmalarına dayanmaktadır. Bireysel sonuçlar değişebilir. Herhangi bir beslenme programına başlamadan önce sağlık profesyonelinize danışın.'
              : 'These findings are based on general population studies. Individual results may vary. Consult your healthcare professional before starting any dietary program.'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ScientificEvidence;
