'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Activity, Clock, Apple, Heart } from 'lucide-react';

interface ProteinGuideProps {
  dailyProtein: number;
  locale: 'en' | 'tr';
}

const ProteinGuide: React.FC<ProteinGuideProps> = ({ dailyProtein, locale }) => {
  const mealDistribution = [
    { name: { en: 'Breakfast', tr: 'Kahvaltı' }, percentage: 25, icon: '☀️' },
    { name: { en: 'Lunch', tr: 'Öğle' }, percentage: 30, icon: '🍽️' },
    { name: { en: 'Dinner', tr: 'Akşam' }, percentage: 30, icon: '🌙' },
    { name: { en: 'Snacks', tr: 'Atıştırma' }, percentage: 15, icon: '🍎' },
  ];

  const proteinBenefits = [
    { en: 'Muscle repair and growth', tr: 'Kas tamiri ve büyüme' },
    { en: 'Immune system support', tr: 'Bağışıklık sistemi desteği' },
    { en: 'Hormone and enzyme production', tr: 'Hormon ve enzim üretimi' },
    { en: 'Increased satiety and reduced hunger', tr: 'Artan tokluk ve azalan açlık' },
    { en: 'Higher thermic effect (burns more calories)', tr: 'Yüksek termal etki (daha fazla kalori yakar)' },
    { en: 'Blood sugar regulation', tr: 'Kan şekeri düzenlemesi' },
  ];

  const plantVsAnimal = {
    animal: {
      title: { en: 'Animal Protein', tr: 'Hayvan Kaynaklı Protein' },
      advantages: {
        en: ['Complete amino acid profile', 'Higher bioavailability', 'Rich in B12 and iron'],
        tr: ['Eksiksiz amino asit profili', 'Yüksek biyoyararlılık', 'B12 ve demirce zengin'],
      },
      sources: [
        { name: { en: 'Chicken', tr: 'Tavuk' }, icon: '🍗', g: 31 },
        { name: { en: 'Beef', tr: 'Sığır' }, icon: '🥩', g: 26 },
        { name: { en: 'Fish', tr: 'Balık' }, icon: '🐟', g: 25 },
        { name: { en: 'Eggs', tr: 'Yumurta' }, icon: '🥚', g: 13 },
        { name: { en: 'Dairy', tr: 'Süt ürünleri' }, icon: '🥛', g: 8 },
      ],
    },
    plant: {
      title: { en: 'Plant Protein', tr: 'Bitki Kaynaklı Protein' },
      advantages: {
        en: ['Lower in saturated fat', 'Rich in fiber', 'Better for environment'],
        tr: ['Doymuş yağca düşük', 'Lifce zengin', 'Çevre dostu'],
      },
      sources: [
        { name: { en: 'Tofu', tr: 'Tofu' }, icon: '🫘', g: 8 },
        { name: { en: 'Lentils', tr: 'Mercimek' }, icon: '🟤', g: 9 },
        { name: { en: 'Chickpeas', tr: 'Nohut' }, icon: '🟡', g: 9 },
        { name: { en: 'Quinoa', tr: 'Kinoa' }, icon: '🌾', g: 4 },
        { name: { en: 'Nuts/Seeds', tr: 'Kuruyemiş' }, icon: '🌰', g: 7 },
      ],
    },
  };

  return (
    <>
      {/* Meal Distribution */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Protein Dağılım Planı' : 'Protein Distribution Plan'}
        </h3>
        <p className="mb-4 text-sm text-neutral-600">
          {locale === 'tr'
            ? 'Günlük protein ihtiyacını öğünlere dağıtın (25-40g her öğünde optimal)'
            : 'Distribute daily protein across meals (25-40g per meal is optimal)'}
        </p>
        <div className="space-y-3">
          {mealDistribution.map((meal, index) => {
            const mealProtein = Math.round((dailyProtein * meal.percentage) / 100);
            return (
              <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{meal.icon}</span>
                    <div>
                      <div className="font-medium text-neutral-800">{meal.name[locale]}</div>
                      <div className="text-xs text-neutral-500">{meal.percentage}% {locale === 'tr' ? 'of toplam' : 'of total'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary-600">{mealProtein}g</div>
                    <div className="text-xs text-neutral-500">{locale === 'tr' ? 'protein' : 'protein'}</div>
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-2 h-2 rounded-full bg-neutral-200">
                  <div
                    className="h-2 rounded-full bg-primary-500"
                    style={{ width: `${meal.percentage * 3}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Benefits */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Proteinin Faydaları' : 'Benefits of Protein'}
        </h3>
        <div className="grid gap-2 sm:grid-cols-2">
          {proteinBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 rounded-lg bg-green-50 p-3">
              <Heart className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-800">{benefit[locale]}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Plant vs Animal */}
      <Card>
        <h3 className="mb-4 text-lg font-bold text-neutral-900">
          {locale === 'tr' ? 'Bitki vs Hayvan Protein' : 'Plant vs Animal Protein'}
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.values(plantVsAnimal).map((type, index) => (
            <div key={index} className="rounded-lg border border-neutral-200 bg-white p-4">
              <h4 className={`mb-3 font-semibold ${index === 0 ? 'text-red-700' : 'text-green-700'}`}>
                {type.title[locale]}
              </h4>
              <div className="mb-3">
                <div className="mb-1 text-xs font-medium text-neutral-500">
                  {locale === 'tr' ? 'Avantajlar' : 'Advantages'}
                </div>
                <ul className="space-y-1">
                  {type.advantages[locale].map((adv, i) => (
                    <li key={i} className="text-sm text-neutral-700">✓ {adv}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mb-1 text-xs font-medium text-neutral-500">
                  {locale === 'tr' ? 'Kaynaklar (100g başına)' : 'Sources (per 100g)'}
                </div>
                <div className="space-y-1">
                  {type.sources.map((src, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span>
                        {src.icon} {src.name[locale]}
                      </span>
                      <span className="font-semibold text-neutral-700">{src.g}g</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg bg-blue-50 p-3">
          <p className="text-sm text-blue-900">
            {locale === 'tr'
              ? '💡 En iyi yaklaşım: Bitki ve hayvan proteinlerini birleştirn. Bu, tam bir amino asit profili sağlar ve daha sağlıklı bir beslenme dengesi oluşturur.'
              : '💡 Best approach: Combine plant and animal proteins. This provides a complete amino acid profile and creates a healthier nutritional balance.'}
          </p>
        </div>
      </Card>

      {/* Timing Guide */}
      <Card>
        <div className="mb-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-bold text-neutral-900">
            {locale === 'tr' ? 'Protein Zamanlama Rehberi' : 'Protein Timing Guide'}
          </h3>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg bg-blue-50 p-4">
            <div className="font-medium text-blue-900">{locale === 'tr' ? 'Antrenman Öncesi' : 'Pre-Workout'}</div>
            <p className="mt-1 text-sm text-blue-800">
              {locale === 'tr'
                ? 'Antrenman öncesi 1-2 saat, 20-30g protein alın. Bu, kas proteininin sentezini başlatır.'
                : '1-2 hours before training, consume 20-30g protein. This initiates muscle protein synthesis.'}
            </p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <div className="font-medium text-green-900">{locale === 'tr' ? 'Antrenman Sonrası' : 'Post-Workout'}</div>
            <p className="mt-1 text-sm text-green-800">
              {locale === 'tr'
                ? 'Antrenman sonrası 30-60 dakika, 20-40g protein + karbonhidrat. En kritik pencere.'
                : '30-60 minutes after training, 20-40g protein + carbs. The most critical window.'}
            </p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4">
            <div className="font-medium text-purple-900">{locale === 'tr' ? 'Yatmadan Önce' : 'Before Sleep'}</div>
            <p className="mt-1 text-sm text-purple-800">
              {locale === 'tr'
                ? 'Yatmadan 30 dakika önce 20-30g kasein protein. Yavaş sindirilen protein, gece boyunca kaslara amino asit sağlar.'
                : '30 minutes before sleep, 20-30g casein protein. Slow-digesting protein supplies amino acids to muscles overnight.'}
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProteinGuide;
