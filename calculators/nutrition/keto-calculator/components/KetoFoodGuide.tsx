'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { ketoFoodCategories } from '../ketoLogic';

interface KetoFoodGuideProps {
  locale: 'en' | 'tr';
}

const KetoFoodGuide: React.FC<KetoFoodGuideProps> = ({ locale }) => {
  const [activeCategory, setActiveCategory] = useState<'highFat' | 'protein' | 'lowCarbVeggies'>('highFat');

  const categories = [
    {
      id: 'highFat' as const,
      label: locale === 'tr' ? 'Yüksek Yağlı' : 'High Fat',
      icon: '🥑',
      color: 'bg-yellow-100 text-yellow-800',
      activeColor: 'bg-yellow-500 text-white',
    },
    {
      id: 'protein' as const,
      label: locale === 'tr' ? 'Protein Kaynakları' : 'Protein Sources',
      icon: '🥩',
      color: 'bg-red-100 text-red-800',
      activeColor: 'bg-red-500 text-white',
    },
    {
      id: 'lowCarbVeggies' as const,
      label: locale === 'tr' ? 'Düşük Karb Sebzeler' : 'Low Carb Veggies',
      icon: '🥦',
      color: 'bg-green-100 text-green-800',
      activeColor: 'bg-green-500 text-white',
    },
  ];

  const foods = ketoFoodCategories[activeCategory][locale];
  const activeCat = categories.find(c => c.id === activeCategory)!;

  return (
    <Card>
      <h3 className="mb-2 text-xl font-bold text-neutral-900">
        {locale === 'tr' ? 'Keto Besin Rehberi' : 'Keto Food Guide'}
      </h3>
      <p className="mb-6 text-sm text-neutral-600">
        {locale === 'tr'
          ? 'Ketojenik diyette tüketebileceğiniz en iyi besinler'
          : 'The best foods you can eat on a ketogenic diet'}
      </p>

      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === cat.id ? cat.activeColor : cat.color
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Food Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="py-3 text-left text-sm font-semibold text-neutral-700">
                {locale === 'tr' ? 'Besin' : 'Food'}
              </th>
              <th className="py-3 text-left text-sm font-semibold text-neutral-700">
                {locale === 'tr' ? 'Porsiyon' : 'Serving'}
              </th>
              <th className="py-3 text-right text-sm font-semibold text-yellow-600">
                {locale === 'tr' ? 'Yağ' : 'Fat'}
              </th>
              <th className="py-3 text-right text-sm font-semibold text-red-600">
                Protein
              </th>
              <th className="py-3 text-right text-sm font-semibold text-green-600">
                {locale === 'tr' ? 'Karb' : 'Carbs'}
              </th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr
                key={index}
                className={`border-b border-neutral-100 ${
                  index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                }`}
              >
                <td className="py-3 text-sm font-medium text-neutral-900">{food.name}</td>
                <td className="py-3 text-sm text-neutral-600">{food.serving}</td>
                <td className="py-3 text-right text-sm font-semibold text-yellow-600">{food.fat}g</td>
                <td className="py-3 text-right text-sm font-semibold text-red-600">{food.protein}g</td>
                <td className="py-3 text-right text-sm font-semibold text-green-600">{food.carbs}g</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Avoid Section */}
      <div className="mt-6 rounded-lg bg-red-50 p-4">
        <h4 className="mb-3 font-semibold text-red-900">
          {locale === 'tr' ? '🚫 Keto Diyetinde Kaçınılması Gerekenler' : '🚫 Foods to Avoid on Keto'}
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {(locale === 'tr'
            ? [
                'Ekmek, makarna, pirinç',
                'Şeker ve şekerli içecekler',
                'Meyve suları',
                'Patates ve nişastalı sebzeler',
                'Fasulye ve baklagiller',
                'Bal, reçel, marmelat',
                'Düşük yağlı süt ürünleri',
                'Bira ve tatlı alkollü içecekler',
              ]
            : [
                'Bread, pasta, rice',
                'Sugar and sugary drinks',
                'Fruit juices',
                'Potatoes and starchy vegetables',
                'Beans and legumes',
                'Honey, jam, marmalade',
                'Low-fat dairy products',
                'Beer and sweet alcoholic drinks',
              ]
          ).map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-red-800">
              <span className="text-red-400">✕</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default KetoFoodGuide;
