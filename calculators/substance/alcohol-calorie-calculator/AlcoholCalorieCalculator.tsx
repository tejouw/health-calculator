'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Select, Badge } from '@/components/ui';
import { calculateAlcoholCalories, DRINK_DATABASE, getDrinksByCategory } from './alcoholCalorieLogic';
import { AlcoholDrinkType, DrinkEntry, AlcoholCalorieResult } from './alcoholCalorieTypes';
import { Beer, Plus, X, Flame, TrendingUp, Scale, UtensilsCrossed, AlertTriangle, Info } from 'lucide-react';

interface AlcoholCalorieCalculatorProps {
  locale: 'en' | 'tr';
}

const AlcoholCalorieCalculator: React.FC<AlcoholCalorieCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [drinks, setDrinks] = useState<DrinkEntry[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<AlcoholDrinkType>('beer_regular');
  const [quantity, setQuantity] = useState<string>('1');
  const [frequency, setFrequency] = useState<'once' | 'weekly' | 'monthly'>('once');
  const [timesPerWeek, setTimesPerWeek] = useState<string>('1');
  const [result, setResult] = useState<AlcoholCalorieResult | null>(null);
  const [error, setError] = useState<string>('');

  const groupedDrinks = getDrinksByCategory(locale);

  const drinkOptions: { value: string; label: string }[] = [];
  for (const [category, items] of Object.entries(groupedDrinks)) {
    for (const item of items) {
      drinkOptions.push({
        value: item.type,
        label: `[${category}] ${item.label}`,
      });
    }
  }

  const handleAddDrink = () => {
    if (!quantity || parseFloat(quantity) <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir miktar girin' : 'Please enter a valid quantity');
      return;
    }
    setError('');
    const newEntry: DrinkEntry = {
      id: `${Date.now()}-${Math.random()}`,
      drinkType: selectedDrink,
      quantity: parseFloat(quantity),
    };
    setDrinks([...drinks, newEntry]);
    setQuantity('1');
  };

  const handleRemoveDrink = (id: string) => {
    setDrinks(drinks.filter((d) => d.id !== id));
    if (result) setResult(null);
  };

  const handleCalculate = () => {
    setError('');

    if (drinks.length === 0) {
      setError(locale === 'tr' ? 'Lütfen en az bir içecek ekleyin' : 'Please add at least one drink');
      return;
    }

    const calcResult = calculateAlcoholCalories({
      drinks,
      frequency,
      timesPerWeek: parseFloat(timesPerWeek) || 1,
    });

    setResult(calcResult);
  };

  const handleReset = () => {
    setDrinks([]);
    setSelectedDrink('beer_regular');
    setQuantity('1');
    setFrequency('once');
    setTimesPerWeek('1');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      {/* Info Card */}
      <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="flex items-start gap-3 p-4">
          <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            {locale === 'tr'
              ? 'Bu hesaplayıcı, alkollü içeceklerdeki kalorileri tahmin etmenize yardımcı olur. Tıbbi tavsiye niteliğinde değildir.'
              : 'This calculator helps you estimate calories in alcoholic beverages. It is not medical advice.'}
          </p>
        </div>
      </Card>

      {/* Add Drink Section */}
      <Card>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Beer className="h-5 w-5 text-amber-600" />
            <h3 className="font-semibold text-lg">
              {locale === 'tr' ? 'İçecek Ekle' : 'Add Drink'}
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                {locale === 'tr' ? 'İçecek Türü' : 'Drink Type'}
              </label>
              <Select
                value={selectedDrink}
                onChange={(e) => setSelectedDrink(e.target.value as AlcoholDrinkType)}
                options={drinkOptions}
              />
            </div>

            {selectedDrink && DRINK_DATABASE[selectedDrink] && (
              <div className="text-xs text-muted-foreground bg-muted/50 rounded-md p-2">
                <span className="font-medium">{DRINK_DATABASE[selectedDrink].servingLabel[locale]}</span>
                {' • '}
                {DRINK_DATABASE[selectedDrink].abv}% ABV
                {' • '}
                {DRINK_DATABASE[selectedDrink].caloriesPerServing} {locale === 'tr' ? 'kal/porsiyon' : 'cal/serving'}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-1.5">
                {locale === 'tr' ? 'Porsiyon Sayısı' : 'Number of Servings'}
              </label>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                min="0.5"
                max="20"
                step="0.5"
                placeholder="1"
              />
            </div>

            <Button
              onClick={handleAddDrink}
              variant="outline"
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              {locale === 'tr' ? 'İçecek Ekle' : 'Add Drink'}
            </Button>
          </div>
        </div>
      </Card>

      {/* Added Drinks List */}
      {drinks.length > 0 && (
        <Card>
          <div className="p-6 space-y-3">
            <h3 className="font-semibold text-lg mb-3">
              {locale === 'tr' ? `İçecek Listeniz (${drinks.length})` : `Your Drinks (${drinks.length})`}
            </h3>
            {drinks.map((drink) => {
              const info = DRINK_DATABASE[drink.drinkType];
              return (
                <div
                  key={drink.id}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{info.name[locale]}</p>
                    <p className="text-xs text-muted-foreground">
                      {drink.quantity} × {info.servingLabel[locale]} = {Math.round(info.caloriesPerServing * drink.quantity)} {locale === 'tr' ? 'kal' : 'cal'}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveDrink(drink.id)}
                    className="p-1.5 hover:bg-destructive/10 rounded-md text-destructive transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Frequency Selection */}
      {drinks.length > 0 && (
        <Card>
          <div className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">
              {locale === 'tr' ? 'Tüketim Sıklığı' : 'Consumption Frequency'}
            </h3>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                {locale === 'tr' ? 'Bu miktarı ne sıklıkta içiyorsunuz?' : 'How often do you drink this amount?'}
              </label>
              <Select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as 'once' | 'weekly' | 'monthly')}
                options={[
                  { value: 'once', label: locale === 'tr' ? 'Tek seferlik hesaplama' : 'One-time calculation' },
                  { value: 'weekly', label: locale === 'tr' ? 'Haftada birkaç kez' : 'Several times per week' },
                  { value: 'monthly', label: locale === 'tr' ? 'Ayda birkaç kez' : 'Several times per month' },
                ]}
              />
            </div>

            {frequency !== 'once' && (
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {frequency === 'weekly'
                    ? (locale === 'tr' ? 'Haftada kaç kez?' : 'How many times per week?')
                    : (locale === 'tr' ? 'Ayda kaç kez?' : 'How many times per month?')
                  }
                </label>
                <Input
                  type="number"
                  value={timesPerWeek}
                  onChange={(e) => setTimesPerWeek(e.target.value)}
                  min="1"
                  max={frequency === 'weekly' ? '7' : '30'}
                  step="1"
                  placeholder="1"
                />
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-destructive text-sm p-3 bg-destructive/10 rounded-lg">
          <AlertTriangle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Calculate & Reset Buttons */}
      <div className="flex gap-3">
        <Button onClick={handleCalculate} className="flex-1" disabled={drinks.length === 0}>
          {tCommon('calculate')}
        </Button>
        <Button onClick={handleReset} variant="outline">
          {tCommon('reset')}
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          {/* Main Calorie Card */}
          <Card className="border-amber-300 dark:border-amber-700">
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-amber-100 dark:bg-amber-900/30 mb-3">
                  <Flame className="h-12 w-12 text-amber-600" />
                </div>
                <div className="text-4xl font-bold text-amber-600">
                  {result.totalCalories}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {locale === 'tr' ? 'toplam kalori' : 'total calories'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.totalAlcoholGrams}g</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Saf Alkol' : 'Pure Alcohol'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.standardDrinks}</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Standart İçki' : 'Standard Drinks'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.totalCarbs}g</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Karbonhidrat' : 'Carbs'}
                  </div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-lg font-semibold">{result.totalSugar}g</div>
                  <div className="text-xs text-muted-foreground">
                    {locale === 'tr' ? 'Şeker' : 'Sugar'}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Calorie Breakdown */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-500" />
                {locale === 'tr' ? 'Kalori Dağılımı' : 'Calorie Breakdown'}
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{locale === 'tr' ? 'Alkolden' : 'From Alcohol'}</span>
                    <span className="font-medium">{result.alcoholCalories} {locale === 'tr' ? 'kal' : 'cal'}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{ width: `${result.totalCalories > 0 ? (result.alcoholCalories / result.totalCalories) * 100 : 0}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{locale === 'tr' ? 'Şekerden' : 'From Sugar'}</span>
                    <span className="font-medium">{result.sugarCalories} {locale === 'tr' ? 'kal' : 'cal'}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-pink-500 rounded-full transition-all duration-500"
                      style={{ width: `${result.totalCalories > 0 ? (result.sugarCalories / result.totalCalories) * 100 : 0}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{locale === 'tr' ? 'Diğer' : 'Other'}</span>
                    <span className="font-medium">
                      {result.totalCalories - result.alcoholCalories - result.sugarCalories > 0
                        ? result.totalCalories - result.alcoholCalories - result.sugarCalories
                        : 0} {locale === 'tr' ? 'kal' : 'cal'}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          result.totalCalories > 0
                            ? (Math.max(0, result.totalCalories - result.alcoholCalories - result.sugarCalories) / result.totalCalories) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Drink Breakdown */}
          {result.drinkBreakdown.length > 1 && (
            <Card>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {locale === 'tr' ? 'İçecek Detayları' : 'Drink Details'}
                </h3>
                <div className="space-y-2">
                  {result.drinkBreakdown.map((item, index) => {
                    const info = DRINK_DATABASE[item.drinkType];
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{info.name[locale]}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.quantity} × {locale === 'tr' ? 'porsiyon' : 'serving'}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-amber-600">{item.calories} {locale === 'tr' ? 'kal' : 'cal'}</p>
                          <p className="text-xs text-muted-foreground">{item.alcoholGrams}g {locale === 'tr' ? 'alkol' : 'alcohol'}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          )}

          {/* Food Equivalents */}
          <Card>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-green-600" />
                {locale === 'tr' ? 'Yiyecek Eşdeğerleri' : 'Food Equivalents'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {locale === 'tr'
                  ? `${result.totalCalories} kalori şuna eşdeğerdir:`
                  : `${result.totalCalories} calories is equivalent to:`}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {result.foodEquivalents.map((eq, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <span className="text-2xl">{eq.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{eq.quantity}</p>
                      <p className="text-xs text-muted-foreground">{eq.food[locale]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Long Term Projections */}
          {frequency !== 'once' && (
            <Card className="border-red-200 dark:border-red-800">
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-red-500" />
                  {locale === 'tr' ? 'Uzun Vadeli Etki' : 'Long-Term Impact'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">{result.weeklyProjection}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {locale === 'tr' ? 'Haftalık kalori' : 'Weekly calories'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{result.monthlyProjection}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {locale === 'tr' ? 'Aylık kalori' : 'Monthly calories'}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-center gap-1">
                      <Scale className="h-5 w-5 text-red-500" />
                      <span className="text-2xl font-bold text-red-600">+{result.yearlyWeightGain} kg</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {locale === 'tr' ? 'Yıllık potansiyel kilo alımı' : 'Potential yearly weight gain'}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  {locale === 'tr'
                    ? '* Bu projeksiyon, başka bir yerde telafi edici kalori azaltması yapılmadığı varsayımına dayanmaktadır.'
                    : '* This projection assumes no compensatory calorie reduction elsewhere in your diet.'}
                </p>
              </div>
            </Card>
          )}

          {/* Health Warning */}
          <Card className="border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/30">
            <div className="p-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-semibold mb-1">
                  {locale === 'tr' ? 'Sağlık Uyarısı' : 'Health Warning'}
                </p>
                <p>
                  {locale === 'tr'
                    ? 'Alkol tüketimi sağlık riskleri taşır. Dünya Sağlık Örgütü, hiçbir alkol seviyesinin tamamen güvenli olmadığını belirtmektedir. Endişeleriniz varsa bir sağlık uzmanına danışın.'
                    : 'Alcohol consumption carries health risks. The WHO states that no level of alcohol consumption is completely safe. Consult a healthcare professional if you have concerns.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AlcoholCalorieCalculator;
