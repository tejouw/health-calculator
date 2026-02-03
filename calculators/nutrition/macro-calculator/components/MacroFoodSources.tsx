'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui';
import { Apple, Flame, Droplets } from 'lucide-react';

interface MacroFoodSourcesProps {
  protein: number;
  carbs: number;
  fat: number;
  locale: 'en' | 'tr';
}

const MacroFoodSources: React.FC<MacroFoodSourcesProps> = ({ protein, carbs, fat, locale }) => {
  const [activeTab, setActiveTab] = useState<'protein' | 'carbs' | 'fat'>('protein');

  const foodSources = {
    protein: {
      icon: Apple,
      color: 'from-red-500 to-pink-500',
      title: { en: 'Protein Sources', tr: 'Protein Kaynakları' },
      target: protein,
      unit: 'g',
      foods: [
        { name: { en: 'Chicken Breast', tr: 'Tavuk Göğsü' }, amount: '100g', protein: 31, icon: '🍗' },
        { name: { en: 'Salmon', tr: 'Somon' }, amount: '100g', protein: 25, icon: '🐟' },
        { name: { en: 'Eggs', tr: 'Yumurta' }, amount: '2 pcs', protein: 13, icon: '🥚' },
        { name: { en: 'Greek Yogurt', tr: 'Yunan Yoğurdu' }, amount: '150g', protein: 17, icon: '🍶' },
        { name: { en: 'Cottage Cheese', tr: 'Lor Peyniri' }, amount: '100g', protein: 11, icon: '🧀' },
        { name: { en: 'Lean Beef', tr: 'Yağsız Sığır' }, amount: '100g', protein: 26, icon: '🥩' },
        { name: { en: 'Tofu', tr: 'Tofu' }, amount: '100g', protein: 8, icon: '🫘' },
        { name: { en: 'Lentils', tr: 'Mercimek' }, amount: '100g cooked', protein: 9, icon: '🟤' },
      ],
    },
    carbs: {
      icon: Flame,
      color: 'from-amber-500 to-yellow-500',
      title: { en: 'Carbohydrate Sources', tr: 'Karbonhidrat Kaynakları' },
      target: carbs,
      unit: 'g',
      foods: [
        { name: { en: 'Brown Rice', tr: 'Esmer Pirinç' }, amount: '100g cooked', protein: 22, icon: '🍚' },
        { name: { en: 'Sweet Potato', tr: 'Tatlı Patates' }, amount: '100g', protein: 20, icon: '🍠' },
        { name: { en: 'Oats', tr: 'Yulaf' }, amount: '50g', protein: 25, icon: '🌾' },
        { name: { en: 'Quinoa', tr: 'Kinoa' }, amount: '100g cooked', protein: 19, icon: '🫘' },
        { name: { en: 'Banana', tr: 'Muz' }, amount: '1 medium', protein: 23, icon: '🍌' },
        { name: { en: 'Whole Wheat Bread', tr: 'Tam Buğday Ekmek' }, amount: '2 slices', protein: 26, icon: '🍞' },
        { name: { en: 'Berries', tr: 'Meyrve' }, amount: '100g', protein: 10, icon: '🫐' },
        { name: { en: 'Chickpeas', tr: 'Nohut' }, amount: '100g cooked', protein: 21, icon: '🟡' },
      ],
    },
    fat: {
      icon: Droplets,
      color: 'from-purple-500 to-violet-500',
      title: { en: 'Healthy Fat Sources', tr: 'Sağlıklı Yağ Kaynakları' },
      target: fat,
      unit: 'g',
      foods: [
        { name: { en: 'Avocado', tr: 'Avokado' }, amount: '1/2 medium', protein: 15, icon: '🥑' },
        { name: { en: 'Olive Oil', tr: 'Zeytinyağı' }, amount: '1 tbsp', protein: 14, icon: '🫒' },
        { name: { en: 'Almonds', tr: 'Badem' }, amount: '30g', protein: 14, icon: '🌰' },
        { name: { en: 'Chia Seeds', tr: 'Chia Tohumu' }, amount: '30g', protein: 17, icon: '⚫' },
        { name: { en: 'Salmon', tr: 'Somon' }, amount: '100g', protein: 13, icon: '🐟' },
        { name: { en: 'Walnut', tr: 'Ceviz' }, amount: '30g', protein: 18, icon: '🌰' },
        { name: { en: 'Coconut Oil', tr: 'Hindistan Cevizi Yağı' }, amount: '1 tbsp', protein: 14, icon: '🥥' },
        { name: { en: 'Dark Chocolate', tr: 'Bitter Çikolata' }, amount: '30g', protein: 17, icon: '🍫' },
      ],
    },
  };

  const currentSource = foodSources[activeTab];
  const Icon = currentSource.icon;

  return (
    <Card>
      <h3 className="mb-4 text-lg font-bold text-neutral-900">
        {locale === 'tr' ? 'Gıda Kaynakları Rehberi' : 'Food Sources Guide'}
      </h3>

      {/* Tab Buttons */}
      <div className="mb-6 flex gap-2">
        {[
          { key: 'protein' as const, label: { en: 'Protein', tr: 'Protein' }, color: 'text-red-600 bg-red-50 border-red-200' },
          { key: 'carbs' as const, label: { en: 'Carbs', tr: 'Karbonhidrat' }, color: 'text-amber-600 bg-amber-50 border-amber-200' },
          { key: 'fat' as const, label: { en: 'Fat', tr: 'Yağ' }, color: 'text-purple-600 bg-purple-50 border-purple-200' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 rounded-lg border-2 py-2 text-center text-sm font-semibold transition-all ${
              activeTab === tab.key ? tab.color : 'border-neutral-200 bg-white text-neutral-600'
            }`}
          >
            {tab.label[locale]}
            <div className="text-xs font-normal opacity-75">
              {activeTab === tab.key
                ? `${foodSources[tab.key].target}g ${foodSources[tab.key].unit}`
                : `${foodSources[tab.key].target}g`}
            </div>
          </button>
        ))}
      </div>

      {/* Target Display */}
      <div className={`mb-4 flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r ${currentSource.color} p-3 text-white`}>
        <Icon className="h-5 w-5" />
        <span className="font-medium">
          {locale === 'tr' ? 'Hedef:' : 'Target:'} <strong>{currentSource.target}g</strong>
        </span>
      </div>

      {/* Food List */}
      <div className="rounded-lg border border-neutral-200 overflow-hidden">
        {currentSource.foods.map((food, index) => {
          const percentOfGoal = Math.round((food.protein / currentSource.target) * 100);
          return (
            <div
              key={index}
              className={`flex items-center justify-between p-3 ${
                index !== currentSource.foods.length - 1 ? 'border-b border-neutral-100' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{food.icon}</span>
                <div>
                  <div className="text-sm font-medium text-neutral-800">{food.name[locale]}</div>
                  <div className="text-xs text-neutral-500">{food.amount}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-neutral-900">{food.protein}g</div>
                <div className="text-xs text-neutral-500">{percentOfGoal}% {locale === 'tr' ? 'hedef' : 'of goal'}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg bg-blue-50 p-3">
        <p className="text-sm text-blue-900">
          {locale === 'tr'
            ? '💡 En iyi sonuçlar için farklı gıda kaynakları karıştırın. Bu, amino asitlerin, yağ asitlerinin ve besinlerin çeşitliliğini sağlar.'
            : '💡 For best results, mix different food sources. This ensures diversity of amino acids, fatty acids, and nutrients.'}
        </p>
      </div>
    </Card>
  );
};

export default MacroFoodSources;
