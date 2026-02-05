'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, Input } from '@/components/ui';
import {
  foodDatabase,
  categories,
  calculateFoodNutrition,
  calculateTotalNutrition,
  calculateEnhancedNutrition,
  getCategoryInfo,
} from './foodCalorieLogic';
import { FoodItem, SelectedFood, FoodCategory, MealType } from './foodCalorieTypes';
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
  PieChart,
  Award,
  Target,
  Utensils,
  Flame,
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
  const [currentMealType, setCurrentMealType] = useState<MealType>('breakfast');
  const [dailyGoalCalories, setDailyGoalCalories] = useState<string>('');

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

    setSelectedFoods([...selectedFoods, { food: currentFood, grams, mealType: currentMealType }]);
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
    setCurrentMealType('breakfast');
  };

  const goalCal = dailyGoalCalories ? parseFloat(dailyGoalCalories) : undefined;
  const nutritionSummary = calculateEnhancedNutrition(selectedFoods, goalCal);

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

        {/* Daily Goal (Optional) */}
        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Günlük Kalori Hedefi (Opsiyonel)' : 'Daily Calorie Goal (Optional)'}
            type="number"
            value={dailyGoalCalories}
            onChange={(e) => setDailyGoalCalories(e.target.value)}
            placeholder="2000"
            helperText={locale === 'tr' ? 'İlerlemenizi takip etmek için' : 'To track your progress'}
            rightIcon={<span className="text-sm">kal</span>}
          />
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

            {/* Meal Type Selector */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {locale === 'tr' ? 'Öğün' : 'Meal'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentMealType('breakfast')}
                  className={`rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all ${
                    currentMealType === 'breakfast'
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  🌅 {locale === 'tr' ? 'Kahvaltı' : 'Breakfast'}
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMealType('lunch')}
                  className={`rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all ${
                    currentMealType === 'lunch'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  🌞 {locale === 'tr' ? 'Öğle' : 'Lunch'}
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMealType('dinner')}
                  className={`rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all ${
                    currentMealType === 'dinner'
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  🌙 {locale === 'tr' ? 'Akşam' : 'Dinner'}
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMealType('snack')}
                  className={`rounded-lg border-2 px-3 py-2 text-xs font-medium transition-all ${
                    currentMealType === 'snack'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  🍎 {locale === 'tr' ? 'Atıştırmalık' : 'Snack'}
                </button>
              </div>
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
            {nutritionSummary.totalCalories > 0 && nutritionSummary.macroDistribution && (
              <div className="space-y-2">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Protein' : 'Protein'}
                    </span>
                    <span className="font-medium text-neutral-900">
                      {nutritionSummary.macroDistribution.proteinPercentage.toFixed(0)}% ({nutritionSummary.totalProtein}g)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{
                        width: `${nutritionSummary.macroDistribution.proteinPercentage}%`,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {nutritionSummary.macroDistribution.proteinCalories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                  </p>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">
                      {locale === 'tr' ? 'Karbonhidrat' : 'Carbohydrates'}
                    </span>
                    <span className="font-medium text-neutral-900">
                      {nutritionSummary.macroDistribution.carbsPercentage.toFixed(0)}% ({nutritionSummary.totalCarbs}g)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{
                        width: `${nutritionSummary.macroDistribution.carbsPercentage}%`,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {nutritionSummary.macroDistribution.carbsCalories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                  </p>
                </div>

                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Yağ' : 'Fat'}</span>
                    <span className="font-medium text-neutral-900">
                      {nutritionSummary.macroDistribution.fatPercentage.toFixed(0)}% ({nutritionSummary.totalFat}g)
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className="h-full rounded-full bg-amber-500"
                      style={{
                        width: `${nutritionSummary.macroDistribution.fatPercentage}%`,
                      }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    {nutritionSummary.macroDistribution.fatCalories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Daily Goal Progress */}
      {selectedFoods.length > 0 && nutritionSummary.dailyGoal && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
              <Target className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Günlük Hedef İlerlemesi' : 'Daily Goal Progress'}
            </h3>
          </div>

          <div className="mb-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-6">
            <div className="mb-2 flex items-end justify-between">
              <div>
                <p className="text-sm text-neutral-600">
                  {locale === 'tr' ? 'Tüketilen / Hedef' : 'Consumed / Target'}
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {nutritionSummary.totalCalories} / {nutritionSummary.dailyGoal.targetCalories}
                </p>
                <p className="text-sm text-neutral-500">{locale === 'tr' ? 'kalori' : 'calories'}</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-green-600">
                  {nutritionSummary.dailyGoal.progressPercentage.toFixed(0)}%
                </p>
                <p className="text-xs text-neutral-500">
                  {locale === 'tr' ? 'tamamlandı' : 'complete'}
                </p>
              </div>
            </div>

            <div className="mb-3 h-3 overflow-hidden rounded-full bg-white">
              <div
                className={`h-full rounded-full transition-all ${
                  nutritionSummary.dailyGoal.progressPercentage > 100
                    ? 'bg-red-500'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500'
                }`}
                style={{
                  width: `${Math.min(nutritionSummary.dailyGoal.progressPercentage, 100)}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">
                {nutritionSummary.dailyGoal.remainingCalories >= 0
                  ? locale === 'tr'
                    ? 'Kalan'
                    : 'Remaining'
                  : locale === 'tr'
                  ? 'Aşılan'
                  : 'Over'}
              </span>
              <span
                className={`font-bold ${
                  nutritionSummary.dailyGoal.remainingCalories >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {Math.abs(nutritionSummary.dailyGoal.remainingCalories)} {locale === 'tr' ? 'kal' : 'cal'}
              </span>
            </div>
          </div>

          {nutritionSummary.dailyGoal.progressPercentage > 100 && (
            <div className="rounded-lg border-2 border-red-200 bg-red-50 p-3">
              <p className="text-sm text-red-700">
                {locale === 'tr'
                  ? '⚠️ Günlük kalori hedefinizi aştınız. Aktivite seviyenizi artırabilir veya bir sonraki öğünü hafif tutabilirsiniz.'
                  : '⚠️ You have exceeded your daily calorie goal. Consider increasing your activity level or keeping the next meal lighter.'}
              </p>
            </div>
          )}
        </Card>
      )}

      {/* Health Score */}
      {selectedFoods.length > 0 && nutritionSummary.healthScore && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Award className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Beslenme Sağlık Skoru' : 'Nutrition Health Score'}
            </h3>
          </div>

          <div className="mb-6 flex items-center justify-center">
            <div className="relative h-32 w-32">
              <svg className="h-32 w-32 -rotate-90 transform">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-neutral-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(nutritionSummary.healthScore.overall * 351.68) / 100} 351.68`}
                  className={
                    nutritionSummary.healthScore.overall >= 80
                      ? 'text-green-500'
                      : nutritionSummary.healthScore.overall >= 60
                      ? 'text-yellow-500'
                      : 'text-orange-500'
                  }
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className={`text-3xl font-bold ${
                    nutritionSummary.healthScore.overall >= 80
                      ? 'text-green-600'
                      : nutritionSummary.healthScore.overall >= 60
                      ? 'text-yellow-600'
                      : 'text-orange-600'
                  }`}
                >
                  {nutritionSummary.healthScore.overall.toFixed(0)}
                </span>
                <span className="text-xs text-neutral-500">{locale === 'tr' ? 'puan' : 'score'}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Protein Dengesi' : 'Protein Balance'}
                </span>
                <span className="text-sm font-bold text-blue-600">
                  {nutritionSummary.healthScore.proteinScore}/25
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-blue-200">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: `${(nutritionSummary.healthScore.proteinScore / 25) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                {locale === 'tr'
                  ? 'İdeal: Kalorilerin %20-35\'i protein'
                  : 'Ideal: 20-35% of calories from protein'}
              </p>
            </div>

            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Lif Alımı' : 'Fiber Intake'}
                </span>
                <span className="text-sm font-bold text-purple-600">
                  {nutritionSummary.healthScore.fiberScore}/25
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-purple-200">
                <div
                  className="h-full rounded-full bg-purple-500"
                  style={{ width: `${(nutritionSummary.healthScore.fiberScore / 25) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                {locale === 'tr'
                  ? 'İdeal: 1000 kalori başına 14g lif'
                  : 'Ideal: 14g fiber per 1000 calories'}
              </p>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Makro Dengesi' : 'Macro Balance'}
                </span>
                <span className="text-sm font-bold text-green-600">
                  {nutritionSummary.healthScore.balanceScore}/30
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-green-200">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${(nutritionSummary.healthScore.balanceScore / 30) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                {locale === 'tr'
                  ? 'İdeal oran: 25% protein, 50% karb, 25% yağ'
                  : 'Ideal ratio: 25% protein, 50% carbs, 25% fat'}
              </p>
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Çeşitlilik' : 'Variety'}
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {nutritionSummary.healthScore.varietyScore}/20
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-orange-200">
                <div
                  className="h-full rounded-full bg-orange-500"
                  style={{ width: `${(nutritionSummary.healthScore.varietyScore / 20) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                {locale === 'tr'
                  ? 'Farklı gıda sayısı: ' + selectedFoods.length
                  : 'Different foods: ' + selectedFoods.length}
              </p>
            </div>
          </div>

          {nutritionSummary.healthScore.overall < 60 && (
            <div className="mt-4 rounded-lg border-2 border-yellow-200 bg-yellow-50 p-3">
              <p className="mb-2 text-sm font-semibold text-yellow-800">
                💡 {locale === 'tr' ? 'Beslenme Önerileri' : 'Nutrition Recommendations'}:
              </p>
              <ul className="space-y-1 text-sm text-yellow-700">
                {nutritionSummary.healthScore.proteinScore < 15 && (
                  <li>
                    • {locale === 'tr'
                      ? 'Protein alımınızı artırın (tavuk, balık, yumurta, baklagiller)'
                      : 'Increase protein intake (chicken, fish, eggs, legumes)'}
                  </li>
                )}
                {nutritionSummary.healthScore.fiberScore < 15 && (
                  <li>
                    • {locale === 'tr'
                      ? 'Daha fazla lif için sebze, meyve ve tam tahıllar ekleyin'
                      : 'Add vegetables, fruits, and whole grains for more fiber'}
                  </li>
                )}
                {nutritionSummary.healthScore.varietyScore < 10 && (
                  <li>
                    • {locale === 'tr'
                      ? 'Daha fazla çeşitli gıda ekleyerek besin çeşitliliğini artırın'
                      : 'Increase food variety by adding more diverse foods'}
                  </li>
                )}
              </ul>
            </div>
          )}
        </Card>
      )}

      {/* Meal Summary */}
      {selectedFoods.length > 0 && nutritionSummary.mealSummary && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500">
              <Utensils className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Öğünlere Göre Dağılım' : 'Meal Distribution'}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Breakfast */}
            {nutritionSummary.mealSummary.breakfast.count > 0 && (
              <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌅</span>
                    <span className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Kahvaltı' : 'Breakfast'}
                    </span>
                  </div>
                  <Badge variant="secondary" size="sm">
                    {nutritionSummary.mealSummary.breakfast.count} {locale === 'tr' ? 'gıda' : 'foods'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Kalori' : 'Calories'}</span>
                    <span className="font-bold text-orange-600">
                      {nutritionSummary.mealSummary.breakfast.calories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-neutral-500">P: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.breakfast.protein.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">C: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.breakfast.carbs.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">F: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.breakfast.fat.toFixed(0)}g
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Lunch */}
            {nutritionSummary.mealSummary.lunch.count > 0 && (
              <div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌞</span>
                    <span className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Öğle' : 'Lunch'}
                    </span>
                  </div>
                  <Badge variant="secondary" size="sm">
                    {nutritionSummary.mealSummary.lunch.count} {locale === 'tr' ? 'gıda' : 'foods'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Kalori' : 'Calories'}</span>
                    <span className="font-bold text-yellow-600">
                      {nutritionSummary.mealSummary.lunch.calories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-neutral-500">P: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.lunch.protein.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">C: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.lunch.carbs.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">F: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.lunch.fat.toFixed(0)}g
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Dinner */}
            {nutritionSummary.mealSummary.dinner.count > 0 && (
              <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌙</span>
                    <span className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Akşam' : 'Dinner'}
                    </span>
                  </div>
                  <Badge variant="secondary" size="sm">
                    {nutritionSummary.mealSummary.dinner.count} {locale === 'tr' ? 'gıda' : 'foods'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Kalori' : 'Calories'}</span>
                    <span className="font-bold text-purple-600">
                      {nutritionSummary.mealSummary.dinner.calories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-neutral-500">P: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.dinner.protein.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">C: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.dinner.carbs.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">F: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.dinner.fat.toFixed(0)}g
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Snack */}
            {nutritionSummary.mealSummary.snack.count > 0 && (
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🍎</span>
                    <span className="font-semibold text-neutral-900">
                      {locale === 'tr' ? 'Atıştırmalık' : 'Snack'}
                    </span>
                  </div>
                  <Badge variant="secondary" size="sm">
                    {nutritionSummary.mealSummary.snack.count} {locale === 'tr' ? 'gıda' : 'foods'}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">{locale === 'tr' ? 'Kalori' : 'Calories'}</span>
                    <span className="font-bold text-green-600">
                      {nutritionSummary.mealSummary.snack.calories.toFixed(0)} {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-neutral-500">P: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.snack.protein.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">C: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.snack.carbs.toFixed(0)}g
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500">F: </span>
                      <span className="font-medium text-neutral-700">
                        {nutritionSummary.mealSummary.snack.fat.toFixed(0)}g
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Nutrient Density */}
      {selectedFoods.length > 0 && nutritionSummary.nutrientDensity !== undefined && (
        <Card>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
              <Flame className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Besin Yoğunluğu' : 'Nutrient Density'}
            </h3>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 p-4">
            <div className="mb-2 text-center">
              <p className="text-4xl font-bold text-cyan-600">
                {nutritionSummary.nutrientDensity.toFixed(1)}
              </p>
              <p className="text-sm text-neutral-600">
                {locale === 'tr' ? '100 kalori başına besin değeri' : 'nutrient value per 100 calories'}
              </p>
            </div>
            <div className="mt-4 rounded-lg bg-white p-3 text-sm">
              <p className="text-neutral-700">
                {locale === 'tr'
                  ? 'Besin yoğunluğu, tükettiğiniz kalorilere göre aldığınız protein, lif ve diğer besinlerin miktarını gösterir. Yüksek değer, daha sağlıklı gıda seçimlerini ifade eder.'
                  : 'Nutrient density shows the amount of protein, fiber and other nutrients you get per calorie consumed. Higher values indicate healthier food choices.'}
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FoodCalorieCalculator;
