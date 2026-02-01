'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, Input } from '@/components/ui';
import {
  foodDatabase,
  categories,
  calculateFoodNutrition,
  calculateTotalNutrition,
  getCategoryInfo,
} from './foodCalorieLogic';
import { FoodItem, SelectedFood, FoodCategory } from './foodCalorieTypes';
import {
  Apple,
  Leaf,
  Beef,
  Fish,
  Milk,
  Wheat,
  Sandwich,
  Nut,
  Cake,
  Coffee,
  Pizza,
  Droplet,
  Plus,
  X,
  Search,
  Calculator,
  TrendingUp,
} from 'lucide-react';

interface FoodCalorieCalculatorProps {
  locale: 'en' | 'tr';
}

const categoryIcons: Record<FoodCategory, React.ReactNode> = {
  fruits: <Apple className="h-5 w-5" />,
  vegetables: <Leaf className="h-5 w-5" />,
  'meat-poultry': <Beef className="h-5 w-5" />,
  'fish-seafood': <Fish className="h-5 w-5" />,
  dairy: <Milk className="h-5 w-5" />,
  'grains-legumes': <Wheat className="h-5 w-5" />,
  'bread-bakery': <Sandwich className="h-5 w-5" />,
  'nuts-seeds': <Nut className="h-5 w-5" />,
  'sweets-desserts': <Cake className="h-5 w-5" />,
  beverages: <Coffee className="h-5 w-5" />,
  'fast-food': <Pizza className="h-5 w-5" />,
  'oils-sauces': <Droplet className="h-5 w-5" />,
};

const FoodCalorieCalculator: React.FC<FoodCalorieCalculatorProps> = ({ locale }) => {
  const t = useTranslations('common');

  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);
  const [currentFood, setCurrentFood] = useState<FoodItem | null>(null);
  const [currentGrams, setCurrentGrams] = useState<string>('100');

  const filteredFoods = selectedCategory
    ? foodDatabase.filter((f) => f.category === selectedCategory)
    : searchQuery
    ? foodDatabase.filter((f) =>
        f.name[locale].toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleAddFood = () => {
    if (!currentFood || !currentGrams) return;
    const grams = parseFloat(currentGrams);
    if (grams <= 0 || grams > 10000) return;

    setSelectedFoods([...selectedFoods, { food: currentFood, grams }]);
    setCurrentFood(null);
    setCurrentGrams('100');
  };

  const handleRemoveFood = (index: number) => {
    setSelectedFoods(selectedFoods.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setSelectedFoods([]);
    setCurrentFood(null);
    setCurrentGrams('100');
    setSearchQuery('');
    setSelectedCategory(null);
  };

  const nutritionSummary = calculateTotalNutrition(selectedFoods);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
            <Calculator className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Gıda Kalori Hesaplayıcı' : 'Food Calorie Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Yediğiniz gıdaların kalori ve besin değerlerini hesaplayın'
                : 'Calculate calories and nutrition of foods you eat'}
            </p>
          </div>
        </div>

        {/* Category Selection */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Kategori Seçin' : 'Select Category'}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setSearchQuery('');
                }}
                className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="truncate">{cat.label[locale]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-neutral-700">
            {locale === 'tr' ? 'Veya Gıda Arayın' : 'Or Search Foods'}
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedCategory(null);
              }}
              placeholder={
                locale === 'tr' ? 'Gıda ara... (örn: tavuk, elma)' : 'Search food... (e.g. chicken, apple)'
              }
              className="w-full rounded-lg border-2 border-neutral-200 py-3 pl-10 pr-4 outline-none focus:border-primary-500"
            />
          </div>
        </div>

        {/* Food List */}
        {(selectedCategory || searchQuery) && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Gıda Seçin' : 'Select Food'}
              {selectedCategory && (
                <span className="ml-2 text-xs font-normal text-neutral-500">
                  ({getCategoryInfo(selectedCategory)?.label[locale]})
                </span>
              )}
            </h3>
            <div className="max-h-60 space-y-2 overflow-y-auto rounded-lg border-2 border-neutral-100 p-3">
              {filteredFoods.length === 0 ? (
                <p className="py-8 text-center text-sm text-neutral-500">
                  {locale === 'tr' ? 'Gıda bulunamadı' : 'No foods found'}
                </p>
              ) : (
                filteredFoods.map((food) => (
                  <button
                    key={food.id}
                    onClick={() => setCurrentFood(food)}
                    className={`w-full rounded-lg border-2 p-3 text-left transition-all ${
                      currentFood?.id === food.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-100 bg-white hover:border-neutral-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-neutral-900">
                            {food.name[locale]}
                          </span>
                          <Badge variant="secondary" size="sm">
                            {food.caloriesPer100g} {locale === 'tr' ? 'kal' : 'cal'}/100g
                          </Badge>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-600">
                          <span>P: {food.protein}g</span>
                          <span>C: {food.carbs}g</span>
                          <span>F: {food.fat}g</span>
                          {food.fiber && food.fiber > 0 && (
                            <span>
                              {locale === 'tr' ? 'Lif' : 'Fiber'}: {food.fiber}g
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-neutral-500">
                          {food.servingExamples[locale]}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* Add Food Form */}
        {currentFood && (
          <div className="mb-6 rounded-lg border-2 border-primary-200 bg-primary-50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900">{currentFood.name[locale]}</h3>
              <button
                onClick={() => setCurrentFood(null)}
                className="text-neutral-500 hover:text-neutral-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4">
              <Input
                label={locale === 'tr' ? 'Miktar (gram)' : 'Amount (grams)'}
                type="number"
                value={currentGrams}
                onChange={(e) => setCurrentGrams(e.target.value)}
                placeholder="100"
                rightIcon={<span className="text-sm">g</span>}
              />
            </div>
            {currentGrams && parseFloat(currentGrams) > 0 && (
              <div className="mb-4 rounded-lg bg-white p-3">
                <p className="mb-2 text-xs font-semibold text-neutral-700">
                  {locale === 'tr' ? 'Beslenme Değerleri' : 'Nutrition Values'}:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Kalori' : 'Calories'}:
                    </span>
                    <span className="ml-1 font-semibold text-neutral-900">
                      {
                        calculateFoodNutrition(currentFood, parseFloat(currentGrams) || 0)
                          .calories
                      }{' '}
                      {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Protein' : 'Protein'}:
                    </span>
                    <span className="ml-1 font-semibold text-neutral-900">
                      {
                        calculateFoodNutrition(currentFood, parseFloat(currentGrams) || 0)
                          .protein
                      }
                      g
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}:
                    </span>
                    <span className="ml-1 font-semibold text-neutral-900">
                      {calculateFoodNutrition(currentFood, parseFloat(currentGrams) || 0).carbs}
                      g
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}:</span>
                    <span className="ml-1 font-semibold text-neutral-900">
                      {calculateFoodNutrition(currentFood, parseFloat(currentGrams) || 0).fat}g
                    </span>
                  </div>
                </div>
              </div>
            )}
            <Button onClick={handleAddFood} size="sm" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              {locale === 'tr' ? 'Listeye Ekle' : 'Add to List'}
            </Button>
          </div>
        )}

        {/* Selected Foods List */}
        {selectedFoods.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Seçilen Gıdalar' : 'Selected Foods'} ({selectedFoods.length})
            </h3>
            <div className="space-y-2 rounded-lg border-2 border-neutral-100 p-3">
              {selectedFoods.map((sf, index) => {
                const nutrition = calculateFoodNutrition(sf.food, sf.grams);
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-neutral-900">
                          {sf.food.name[locale]}
                        </span>
                        <Badge size="sm">{sf.grams}g</Badge>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-x-3 text-xs text-neutral-600">
                        <span className="font-semibold text-orange-600">
                          {nutrition.calories} {locale === 'tr' ? 'kal' : 'cal'}
                        </span>
                        <span>P: {nutrition.protein}g</span>
                        <span>C: {nutrition.carbs}g</span>
                        <span>F: {nutrition.fat}g</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFood(index)}
                      className="ml-2 rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-danger-main"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {selectedFoods.length > 0 && (
          <div className="flex gap-3">
            <Button onClick={handleReset} variant="outline" size="lg">
              {t('reset')}
            </Button>
          </div>
        )}
      </Card>

      {/* Results */}
      {selectedFoods.length > 0 && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Toplam Beslenme Değerleri' : 'Total Nutrition Values'}
            </h3>
          </div>

          {/* Totals Grid */}
          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            <div className="rounded-lg bg-gradient-to-br from-orange-50 to-red-50 p-4">
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Kalori' : 'Calories'}
              </p>
              <p className="mt-1 text-2xl font-bold text-orange-600">
                {nutritionSummary.totalCalories}
              </p>
              <p className="text-xs text-neutral-500">{locale === 'tr' ? 'kal' : 'cal'}</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Protein' : 'Protein'}
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-600">
                {nutritionSummary.totalProtein}
              </p>
              <p className="text-xs text-neutral-500">g</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-4">
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
              </p>
              <p className="mt-1 text-2xl font-bold text-green-600">
                {nutritionSummary.totalCarbs}
              </p>
              <p className="text-xs text-neutral-500">g</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 p-4">
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</p>
              <p className="mt-1 text-2xl font-bold text-amber-600">
                {nutritionSummary.totalFat}
              </p>
              <p className="text-xs text-neutral-500">g</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-4">
              <p className="text-sm text-neutral-600">{locale === 'tr' ? 'Lif' : 'Fiber'}</p>
              <p className="mt-1 text-2xl font-bold text-purple-600">
                {nutritionSummary.totalFiber}
              </p>
              <p className="text-xs text-neutral-500">g</p>
            </div>
          </div>

          {/* Macros Percentage */}
          <div className="rounded-lg bg-neutral-50 p-4">
            <h4 className="mb-3 text-sm font-semibold text-neutral-700">
              {locale === 'tr' ? 'Makro Besin Dağılımı' : 'Macronutrient Distribution'}
            </h4>
            {nutritionSummary.totalCalories > 0 && (
              <div className="space-y-2">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Protein' : 'Protein'}
                    </span>
                    <span className="font-medium text-neutral-900">
                      {Math.round((nutritionSummary.totalProtein * 4 * 100) / nutritionSummary.totalCalories)}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{
                        width: `${(nutritionSummary.totalProtein * 4 * 100) / nutritionSummary.totalCalories}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Karbonhidrat' : 'Carbohydrates'}
                    </span>
                    <span className="font-medium text-neutral-900">
                      {Math.round((nutritionSummary.totalCarbs * 4 * 100) / nutritionSummary.totalCalories)}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        width: `${(nutritionSummary.totalCarbs * 4 * 100) / nutritionSummary.totalCalories}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</span>
                    <span className="font-medium text-neutral-900">
                      {Math.round((nutritionSummary.totalFat * 9 * 100) / nutritionSummary.totalCalories)}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{
                        width: `${(nutritionSummary.totalFat * 9 * 100) / nutritionSummary.totalCalories}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default FoodCalorieCalculator;
