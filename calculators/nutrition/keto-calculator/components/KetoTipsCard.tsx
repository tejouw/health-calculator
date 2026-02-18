'use client';

import React from 'react';
import { Card } from '@/components/ui';

interface KetoTipsCardProps {
  locale: 'en' | 'tr';
}

const KetoTipsCard: React.FC<KetoTipsCardProps> = ({ locale }) => {
  const tips = locale === 'tr' ? tipsTr : tipsEn;
  const mistakes = locale === 'tr' ? mistakesTr : mistakesEn;

  return (
    <>
      {/* Success Tips */}
      <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
        <h3 className="mb-4 text-xl font-bold text-green-900">
          {locale === 'tr' ? '✅ Keto Başarı İpuçları' : '✅ Keto Success Tips'}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-3 rounded-lg bg-white p-4">
              <span className="text-2xl">{tip.icon}</span>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-green-900">{tip.title}</h4>
                <p className="text-xs text-neutral-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Common Mistakes */}
      <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50">
        <h3 className="mb-4 text-xl font-bold text-red-900">
          {locale === 'tr' ? '⚠️ Sık Yapılan Keto Hataları' : '⚠️ Common Keto Mistakes'}
        </h3>
        <div className="space-y-3">
          {mistakes.map((mistake, index) => (
            <div key={index} className="flex gap-3 rounded-lg bg-white p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-600">
                {index + 1}
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-red-900">{mistake.title}</h4>
                <p className="text-xs text-neutral-600">{mistake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

const tipsEn = [
  {
    icon: '💧',
    title: 'Stay Hydrated',
    description: 'Drink at least 3 liters of water daily. Keto has a diuretic effect, so you lose water and electrolytes faster than usual.',
  },
  {
    icon: '🧂',
    title: 'Watch Your Electrolytes',
    description: 'Supplement sodium, potassium, and magnesium to avoid the "keto flu." Add salt to food and eat electrolyte-rich foods.',
  },
  {
    icon: '📊',
    title: 'Track Your Macros',
    description: 'Use a food tracking app for the first few weeks to ensure you stay within your targets. Hidden carbs are everywhere.',
  },
  {
    icon: '🥩',
    title: 'Prioritize Protein',
    description: 'Adequate protein prevents muscle loss. Aim for 0.8-1.0g per pound of lean body mass for optimal results.',
  },
  {
    icon: '🥬',
    title: 'Eat Your Vegetables',
    description: 'Low-carb vegetables provide essential vitamins, minerals, and fiber. Spinach, broccoli, and cauliflower are keto staples.',
  },
  {
    icon: '😴',
    title: 'Prioritize Sleep',
    description: 'Poor sleep can increase cortisol and cravings. Aim for 7-9 hours of quality sleep to support fat burning and recovery.',
  },
  {
    icon: '🏋️',
    title: 'Exercise Regularly',
    description: 'Combine strength training with cardio. Exercise enhances ketone production and helps maintain lean muscle mass.',
  },
  {
    icon: '📝',
    title: 'Read Labels Carefully',
    description: 'Many "low-carb" products contain hidden sugars and starches. Check net carbs (total carbs minus fiber) on every label.',
  },
];

const tipsTr = [
  {
    icon: '💧',
    title: 'Bol Su İçin',
    description: 'Günde en az 3 litre su için. Keto diüretik etki gösterir, normalden daha hızlı su ve elektrolit kaybedersiniz.',
  },
  {
    icon: '🧂',
    title: 'Elektrolitlerinize Dikkat Edin',
    description: '"Keto gribi"nden kaçınmak için sodyum, potasyum ve magnezyum alın. Yemeklere tuz ekleyin ve elektrolit zengin gıdalar tüketin.',
  },
  {
    icon: '📊',
    title: 'Makrolarınızı Takip Edin',
    description: 'İlk birkaç hafta besin takip uygulaması kullanın. Gizli karbonhidratlar her yerde olabilir.',
  },
  {
    icon: '🥩',
    title: 'Proteine Öncelik Verin',
    description: 'Yeterli protein kas kaybını önler. Optimal sonuçlar için yağsız vücut kütlesi başına 1.6-2.2g protein hedefleyin.',
  },
  {
    icon: '🥬',
    title: 'Sebze Yiyin',
    description: 'Düşük karbonhidratlı sebzeler vitamin, mineral ve lif sağlar. Ispanak, brokoli ve karnabahar keto diyetinin temel taşlarıdır.',
  },
  {
    icon: '😴',
    title: 'Uykuya Önem Verin',
    description: 'Kötü uyku kortizolü ve aşermeleri artırabilir. Yağ yakımı ve toparlanmayı desteklemek için 7-9 saat kaliteli uyku hedefleyin.',
  },
  {
    icon: '🏋️',
    title: 'Düzenli Egzersiz Yapın',
    description: 'Kuvvet antrenmanı ve kardiyoyu birleştirin. Egzersiz keton üretimini artırır ve yağsız kas kütlesini korumaya yardımcı olur.',
  },
  {
    icon: '📝',
    title: 'Etiketleri Dikkatli Okuyun',
    description: 'Birçok "düşük karbonhidratlı" ürün gizli şeker ve nişasta içerir. Her etikette net karbonhidratı (toplam karb eksi lif) kontrol edin.',
  },
];

const mistakesEn = [
  {
    title: 'Not Eating Enough Fat',
    description: 'Fat is your primary fuel on keto. Cutting both carbs AND fat leaves you energy-depleted and miserable. Embrace healthy fats like avocado, olive oil, and nuts.',
  },
  {
    title: 'Eating Too Much Protein',
    description: 'Excess protein can be converted to glucose through gluconeogenesis, potentially kicking you out of ketosis. Stick to moderate protein intake.',
  },
  {
    title: 'Ignoring Fiber Intake',
    description: 'Low-carb does not mean zero vegetables. Fiber supports gut health, digestion, and regularity. Aim for 25-35g of fiber daily from low-carb sources.',
  },
  {
    title: 'Not Planning Meals',
    description: 'Without a plan, you are more likely to cheat or eat convenience foods that derail ketosis. Prep meals in advance and keep keto snacks available.',
  },
  {
    title: 'Expecting Instant Results',
    description: 'Full fat adaptation takes 2-4 weeks. The initial water weight loss is not fat loss. Be patient and trust the process for sustainable results.',
  },
];

const mistakesTr = [
  {
    title: 'Yeterince Yağ Tüketmemek',
    description: 'Yağ ketoda ana yakıtınızdır. Hem karbonhidratı hem de yağı kısmak sizi enerjisiz ve mutsuz bırakır. Avokado, zeytinyağı ve fındık gibi sağlıklı yağları benimseyin.',
  },
  {
    title: 'Çok Fazla Protein Yemek',
    description: 'Fazla protein glukoneogenez yoluyla glikoza dönüştürülebilir ve sizi ketozdan çıkarabilir. Orta düzeyde protein alımına bağlı kalın.',
  },
  {
    title: 'Lif Alımını Görmezden Gelmek',
    description: 'Düşük karbonhidrat sıfır sebze demek değildir. Lif bağırsak sağlığını, sindirimi ve düzeni destekler. Düşük karbonhidratlı kaynaklardan günlük 25-35g lif hedefleyin.',
  },
  {
    title: 'Öğün Planı Yapmamak',
    description: 'Plan olmadan aldatma yemek yeme veya ketozu bozan hazır gıdalara yönelme olasılığınız artar. Öğünleri önceden hazırlayın ve keto atıştırmalıkları bulundurun.',
  },
  {
    title: 'Anında Sonuç Beklemek',
    description: 'Tam yağ adaptasyonu 2-4 hafta sürer. İlk su kaybı yağ kaybı değildir. Sürdürülebilir sonuçlar için sabırlı olun ve sürece güvenin.',
  },
];

export default KetoTipsCard;
