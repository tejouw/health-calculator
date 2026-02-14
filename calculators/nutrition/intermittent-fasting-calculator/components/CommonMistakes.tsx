import React from 'react';
import { Card } from '@/components/ui';
import { AlertTriangle, X } from 'lucide-react';

interface CommonMistakesProps {
  locale: 'en' | 'tr';
}

const CommonMistakes: React.FC<CommonMistakesProps> = ({ locale }) => {
  const mistakes = [
    {
      icon: '🍔',
      mistake: {
        en: 'Overeating During Eating Windows',
        tr: 'Yemek Pencerelerinde Aşırı Yemek',
      },
      description: {
        en: 'Eating too many calories negates fasting benefits. Focus on nutrient-dense foods, not junk.',
        tr: 'Çok fazla kalori almak oruç faydalarını olumsuz etkiler. Abur cubura değil, besin değeri yüksek gıdalara odaklanın.',
      },
      solution: {
        en: 'Eat until satisfied, not stuffed. Track calories initially if needed.',
        tr: 'Tıka basa değil, tok hissedene kadar yiyin. Gerekirse başlangıçta kalorileri takip edin.',
      },
    },
    {
      icon: '☕',
      mistake: {
        en: 'Adding Calories to Coffee/Tea',
        tr: 'Kahve/Çaya Kalori Eklemek',
      },
      description: {
        en: 'Milk, cream, sugar, or artificial sweeteners can break your fast and spike insulin.',
        tr: 'Süt, krema, şeker veya yapay tatlandırıcılar orucunuzu bozabilir ve insülini artırabilir.',
      },
      solution: {
        en: 'Stick to black coffee, plain tea, or water during fasting hours.',
        tr: 'Oruç saatlerinde siyah kahve, sade çay veya suya bağlı kalın.',
      },
    },
    {
      icon: '💧',
      mistake: {
        en: 'Not Drinking Enough Water',
        tr: 'Yeterince Su İçmemek',
      },
      description: {
        en: 'Dehydration during fasting can cause headaches, fatigue, and fake hunger signals.',
        tr: 'Oruç sırasında dehidrasyon baş ağrısı, yorgunluk ve sahte açlık sinyallerine neden olabilir.',
      },
      solution: {
        en: 'Drink 2-3 liters of water daily. Add electrolytes if needed.',
        tr: 'Günde 2-3 litre su için. Gerekirse elektrolit ekleyin.',
      },
    },
    {
      icon: '🥗',
      mistake: {
        en: 'Ignoring Food Quality',
        tr: 'Gıda Kalitesini Görmezden Gelmek',
      },
      description: {
        en: 'Fasting doesn\'t mean you can eat junk. Poor nutrition undermines all benefits.',
        tr: 'Oruç, abur cubur yiyebileceğiniz anlamına gelmez. Kötü beslenme tüm faydaları baltalar.',
      },
      solution: {
        en: 'Prioritize whole foods: proteins, healthy fats, vegetables, complex carbs.',
        tr: 'Tam gıdalara öncelik verin: proteinler, sağlıklı yağlar, sebzeler, kompleks karbonhidratlar.',
      },
    },
    {
      icon: '⏰',
      mistake: {
        en: 'Being Too Rigid With Timing',
        tr: 'Zamanlamada Çok Katı Olmak',
      },
      description: {
        en: 'Life happens. Being inflexible causes stress and makes fasting unsustainable.',
        tr: 'Hayat olur. Esnek olmamak stres yaratır ve orucu sürdürülemez hale getirir.',
      },
      solution: {
        en: 'It\'s okay to adjust your window for social events. Be flexible!',
        tr: 'Sosyal etkinlikler için pencerenizi ayarlamak sorun değil. Esnek olun!',
      },
    },
    {
      icon: '🏃',
      mistake: {
        en: 'Intense Exercise Without Proper Fueling',
        tr: 'Uygun Yakıt Olmadan Yoğun Egzersiz',
      },
      description: {
        en: 'Heavy workouts while fasted can lead to muscle loss and poor recovery.',
        tr: 'Aç haldeyken ağır antrenmanlar kas kaybına ve kötü toparlanmaya yol açabilir.',
      },
      solution: {
        en: 'Time intense workouts during eating windows or before breaking fast.',
        tr: 'Yoğun antrenmanları yemek pencerelerinde veya orucu açmadan önce zamanlayın.',
      },
    },
    {
      icon: '😫',
      mistake: {
        en: 'Starting Too Aggressively',
        tr: 'Çok Agresif Başlamak',
      },
      description: {
        en: 'Jumping into 20:4 or OMAD as a beginner often leads to burnout and quitting.',
        tr: 'Yeni başlayan olarak 20:4 veya OMAD\'a atlamak genellikle tükenmişliğe ve bırakmaya yol açar.',
      },
      solution: {
        en: 'Start with 12:12 or 14:10, gradually extend to 16:8 over 2-3 weeks.',
        tr: '12:12 veya 14:10 ile başlayın, 2-3 hafta içinde kademeli olarak 16:8\'e uzatın.',
      },
    },
    {
      icon: '🚫',
      mistake: {
        en: 'Ignoring Hunger vs. Craving',
        tr: 'Açlık ve İstek Arasındaki Farkı Görmemek',
      },
      description: {
        en: 'True hunger builds slowly. Cravings are sudden and for specific foods - usually mental.',
        tr: 'Gerçek açlık yavaş yavaş oluşur. İstekler ani ve belirli gıdalar içindir - genellikle zihinseldir.',
      },
      solution: {
        en: 'Drink water and wait 20 minutes. If it\'s just a craving, it will pass.',
        tr: 'Su için ve 20 dakika bekleyin. Sadece istek ise geçecektir.',
      },
    },
    {
      icon: '💊',
      mistake: {
        en: 'Not Considering Medical Conditions',
        tr: 'Tıbbi Durumları Göz Önünde Bulundurmamak',
      },
      description: {
        en: 'Fasting isn\'t safe for everyone. Diabetes, eating disorders, pregnancy require caution.',
        tr: 'Oruç herkes için güvenli değildir. Diyabet, yeme bozuklukları, hamilelik dikkat gerektirir.',
      },
      solution: {
        en: 'Always consult a healthcare provider before starting, especially if on medications.',
        tr: 'Başlamadan önce, özellikle ilaç kullanıyorsanız, her zaman bir sağlık profesyoneline danışın.',
      },
    },
    {
      icon: '📊',
      mistake: {
        en: 'Expecting Immediate Results',
        tr: 'Hemen Sonuç Beklemek',
      },
      description: {
        en: 'Real changes take 2-4 weeks. Giving up too soon means missing all the benefits.',
        tr: 'Gerçek değişiklikler 2-4 hafta alır. Çok erken vazgeçmek tüm faydaları kaçırmak demektir.',
      },
      solution: {
        en: 'Be patient! Track progress weekly, not daily. Trust the process.',
        tr: 'Sabırlı olun! İlerlemeyi günlük değil haftalık takip edin. Sürece güvenin.',
      },
    },
  ];

  return (
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500">
          <AlertTriangle className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">
            {locale === 'tr' ? '⚠️ Yaygın Hatalar' : '⚠️ Common Mistakes'}
          </h3>
          <p className="text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Bunlardan kaçının, başarınızı artırın'
              : 'Avoid these to maximize your success'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mistakes.map((item, index) => (
          <div
            key={index}
            className="group rounded-xl border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50 p-4 transition-all hover:border-red-200 hover:shadow-md"
          >
            {/* Icon and title */}
            <div className="mb-3 flex items-start justify-between">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white">
                <X className="h-4 w-4" />
              </div>
            </div>

            <h4 className="mb-2 font-bold text-red-900">{item.mistake[locale]}</h4>
            <p className="mb-3 text-sm text-red-800">{item.description[locale]}</p>

            {/* Solution */}
            <div className="rounded-lg bg-white p-2">
              <p className="text-xs text-neutral-700">
                <span className="font-semibold text-green-700">✓ {locale === 'tr' ? 'Çözüm:' : 'Solution:'}</span>{' '}
                {item.solution[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 p-4">
        <p className="text-sm text-orange-900">
          <strong>🎯 {locale === 'tr' ? 'Önemli:' : 'Key Takeaway:'}</strong>{' '}
          {locale === 'tr'
            ? 'Bu hataların çoğu bilgi eksikliğinden değil, acelecilikten kaynaklanır. Yavaş başlayın, tutarlı olun ve vücudunuzu dinleyin.'
            : 'Most of these mistakes stem from rushing, not lack of knowledge. Start slow, be consistent, and listen to your body.'}
        </p>
      </div>
    </Card>
  );
};

export default CommonMistakes;
