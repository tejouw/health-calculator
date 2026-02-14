import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

interface WeekByWeekGuideProps {
  locale: 'en' | 'tr';
}

const WeekByWeekGuide: React.FC<WeekByWeekGuideProps> = ({ locale }) => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const weeksData = [
    {
      week: 1,
      title: {
        en: 'Week 1: Adaptation Phase',
        tr: 'Hafta 1: Adaptasyon Fazı',
      },
      subtitle: {
        en: 'Your body is adjusting',
        tr: 'Vücudunuz adapte oluyor',
      },
      expectations: {
        en: [
          'Hunger and cravings during fasting hours',
          'Mild headaches or fatigue possible',
          'Increased awareness of eating patterns',
          'Some irritability or mood changes',
        ],
        tr: [
          'Oruç saatlerinde açlık ve istekler',
          'Hafif baş ağrısı veya yorgunluk olabilir',
          'Yeme alışkanlıklarının farkındalığı artar',
          'Bazı sinirlilik veya ruh hali değişiklikleri',
        ],
      },
      tips: {
        en: [
          'Stay very well hydrated',
          'Black coffee/tea helps suppress hunger',
          'Keep yourself busy during fasting',
          'Don\'t overthink the hunger - it passes',
        ],
        tr: [
          'Çok iyi hidrate kalın',
          'Siyah kahve/çay açlığı bastırmaya yardımcı olur',
          'Oruç sırasında kendinizi meşgul tutun',
          'Açlığı fazla düşünmeyin - geçer',
        ],
      },
      color: 'blue',
    },
    {
      week: 2,
      title: {
        en: 'Week 2: Getting Easier',
        tr: 'Hafta 2: Kolaylaşıyor',
      },
      subtitle: {
        en: 'Your body is adapting',
        tr: 'Vücudunuz uyum sağlıyor',
      },
      expectations: {
        en: [
          'Hunger becomes more manageable',
          'Energy levels start to stabilize',
          'Better sleep quality emerging',
          'Slight weight loss may be noticeable',
        ],
        tr: [
          'Açlık daha yönetilebilir hale geliyor',
          'Enerji seviyeleri stabilize olmaya başlıyor',
          'Daha iyi uyku kalitesi ortaya çıkıyor',
          'Hafif kilo kaybı fark edilebilir',
        ],
      },
      tips: {
        en: [
          'Focus on protein and fiber when eating',
          'Track your fasting hours for consistency',
          'Notice your increased mental clarity',
          'Adjust eating window if needed',
        ],
        tr: [
          'Yemek yerken protein ve lif odaklanın',
          'Tutarlılık için oruç saatlerinizi takip edin',
          'Artan zihinsel berraklığınızı fark edin',
          'Gerekirse yemek penceresini ayarlayın',
        ],
      },
      color: 'green',
    },
    {
      week: 3,
      title: {
        en: 'Week 3: Finding Your Rhythm',
        tr: 'Hafta 3: Ritminizi Buluyorsunuz',
      },
      subtitle: {
        en: 'It\'s becoming a habit',
        tr: 'Bir alışkanlık haline geliyor',
      },
      expectations: {
        en: [
          'Fasting feels natural and easy',
          'Consistent energy throughout the day',
          'Visible changes in body composition',
          'Improved relationship with food',
        ],
        tr: [
          'Oruç doğal ve kolay hissediliyor',
          'Gün boyunca tutarlı enerji',
          'Vücut kompozisyonunda görünür değişiklikler',
          'Gıda ile gelişmiş ilişki',
        ],
      },
      tips: {
        en: [
          'Experiment with different eating windows',
          'Consider adding light exercise',
          'Take progress photos/measurements',
          'Share your journey with others',
        ],
        tr: [
          'Farklı yemek pencereleriyle deney yapın',
          'Hafif egzersiz eklemeyi düşünün',
          'İlerleme fotoğrafları/ölçümleri alın',
          'Yolculuğunuzu başkalarıyla paylaşın',
        ],
      },
      color: 'purple',
    },
    {
      week: 4,
      title: {
        en: 'Week 4: Sustainable Lifestyle',
        tr: 'Hafta 4: Sürdürülebilir Yaşam Tarzı',
      },
      subtitle: {
        en: 'This is your new normal',
        tr: 'Bu sizin yeni normaliniz',
      },
      expectations: {
        en: [
          'Fasting is effortless and automatic',
          'Noticeable metabolic improvements',
          'Better hunger and satiety signals',
          'Long-term sustainability achieved',
        ],
        tr: [
          'Oruç zahmetsiz ve otomatik',
          'Fark edilir metabolik iyileştirmeler',
          'Daha iyi açlık ve tokluk sinyalleri',
          'Uzun vadeli sürdürülebilirlik sağlandı',
        ],
      },
      tips: {
        en: [
          'Consider advancing to longer fasts',
          'Maintain flexibility for social events',
          'Continue prioritizing nutrient quality',
          'Celebrate your transformation!',
        ],
        tr: [
          'Daha uzun oruçlara geçmeyi düşünün',
          'Sosyal etkinlikler için esnekliği koruyun',
          'Besin kalitesini önceliklendirmeye devam edin',
          'Dönüşümünüzü kutlayın!',
        ],
      },
      color: 'pink',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-cyan-500',
        light: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
      },
      green: {
        bg: 'from-green-500 to-emerald-500',
        light: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-700',
      },
      purple: {
        bg: 'from-purple-500 to-pink-500',
        light: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-700',
      },
      pink: {
        bg: 'from-pink-500 to-rose-500',
        light: 'bg-pink-50',
        border: 'border-pink-200',
        text: 'text-pink-700',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '📅 Hafta Hafta Rehber' : '📅 Week-by-Week Guide'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'İlk 4 haftada ne beklemelisiniz'
              : 'What to expect in your first 4 weeks'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {weeksData.map((week) => {
          const isExpanded = expandedWeek === week.week;
          const colors = getColorClasses(week.color);

          return (
            <div key={week.week} className={`overflow-hidden rounded-xl border-2 ${colors.border}`}>
              {/* Header - Always visible */}
              <button
                onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                className={`w-full p-4 text-left transition-all ${colors.light} hover:opacity-80`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${colors.bg} text-white shadow-md`}>
                      <span className="text-lg font-bold">{week.week}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900">{week.title[locale]}</h4>
                      <p className={`text-sm ${colors.text}`}>{week.subtitle[locale]}</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-neutral-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-neutral-600" />
                  )}
                </div>
              </button>

              {/* Expandable content */}
              {isExpanded && (
                <div className="border-t-2 border-neutral-100 bg-white p-4">
                  {/* Expectations */}
                  <div className="mb-4">
                    <h5 className="mb-2 font-semibold text-neutral-900">
                      {locale === 'tr' ? '🔍 Beklentiler:' : '🔍 What to Expect:'}
                    </h5>
                    <ul className="space-y-1">
                      {week.expectations[locale].map((expectation, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className="mt-0.5 text-neutral-400">•</span>
                          <span>{expectation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tips */}
                  <div>
                    <h5 className="mb-2 font-semibold text-neutral-900">
                      {locale === 'tr' ? '💡 İpuçları:' : '💡 Tips:'}
                    </h5>
                    <ul className="space-y-1">
                      {week.tips[locale].map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                          <span className={`mt-0.5 ${colors.text}`}>✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer encouragement */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-4">
        <p className="text-sm text-purple-900">
          <strong>🎉 {locale === 'tr' ? 'Önemli:' : 'Important:'}</strong>{' '}
          {locale === 'tr'
            ? 'Herkesin yolculuğu farklıdır. Bazıları daha hızlı adapte olur, bazıları daha yavaş. Vücudunuzu dinleyin ve sabırlı olun!'
            : 'Everyone\'s journey is different. Some adapt faster, some slower. Listen to your body and be patient!'}
        </p>
      </div>
    </Card>
  );
};

export default WeekByWeekGuide;
