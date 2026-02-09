'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge, Select } from '@/components/ui';
import {
  calculateCaffeine,
  CAFFEINE_SOURCES,
  SAFETY_LEVELS,
} from './caffeineLogic';
import { CaffeineInput, CaffeineItem, CaffeineSource } from './caffeineTypes';
import { caffeineContent } from './caffeineContent';
import { Coffee, AlertTriangle, Clock, Droplet, Activity, Plus, X } from 'lucide-react';

interface CaffeineCalculatorProps {
  locale: 'en' | 'tr';
}

const CaffeineCalculator: React.FC<CaffeineCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const content = caffeineContent[locale];

  // Form state
  const [age, setAge] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [isPregnant, setIsPregnant] = useState<boolean>(false);
  const [inputMethod, setInputMethod] = useState<'standard' | 'custom'>('standard');

  // Standard method state
  const [caffeineItems, setCaffeineItems] = useState<CaffeineItem[]>([]);
  const [newItemSource, setNewItemSource] = useState<CaffeineSource>('coffee_filter');
  const [newItemAmount, setNewItemAmount] = useState<string>('1');
  const [newItemTime, setNewItemTime] = useState<string>(
    new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString().slice(0, 16) // 2 hours ago
  );

  // Custom method state
  const [customCaffeineMg, setCustomCaffeineMg] = useState<string>('');
  const [customTimestamp, setCustomTimestamp] = useState<string>(
    new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString().slice(0, 16)
  );

  const [result, setResult] = useState<ReturnType<typeof calculateCaffeine> | null>(null);
  const [error, setError] = useState<string>('');

  // Group caffeine sources by category
  const groupedSources = Object.entries(CAFFEINE_SOURCES).reduce((acc, [key, value]) => {
    if (!acc[value.category]) {
      acc[value.category] = [];
    }
    acc[value.category].push({ key: key as CaffeineSource, ...value });
    return acc;
  }, {} as Record<string, Array<{ key: CaffeineSource } & typeof CAFFEINE_SOURCES[CaffeineSource]>>);

  const handleAddItem = () => {
    const newItem: CaffeineItem = {
      source: newItemSource,
      amount: parseFloat(newItemAmount) || 1,
      timestamp: new Date(newItemTime),
    };
    setCaffeineItems([...caffeineItems, newItem]);
    setNewItemAmount('1');
  };

  const handleRemoveItem = (index: number) => {
    setCaffeineItems(caffeineItems.filter((_, i) => i !== index));
  };

  const handleCalculate = () => {
    setError('');

    try {
      // Validation
      if (!age || parseFloat(age) <= 0 || parseFloat(age) > 120) {
        setError(locale === 'tr' ? 'Lütfen geçerli bir yaş girin (1-120)' : 'Please enter a valid age (1-120)');
        return;
      }

      if (!weight || parseFloat(weight) <= 0) {
        setError(locale === 'tr' ? 'Lütfen geçerli bir kilo girin' : 'Please enter a valid weight');
        return;
      }

      if (inputMethod === 'standard' && caffeineItems.length === 0) {
        setError(locale === 'tr' ? 'Lütfen en az bir kafein kaynağı ekleyin' : 'Please add at least one caffeine source');
        return;
      }

      if (inputMethod === 'custom') {
        if (!customCaffeineMg || parseFloat(customCaffeineMg) <= 0) {
          setError(locale === 'tr' ? 'Lütfen geçerli bir kafein miktarı girin' : 'Please enter a valid caffeine amount');
          return;
        }
      }

      const input: CaffeineInput = {
        age: parseFloat(age),
        weight: parseFloat(weight),
        unit,
        isPregnant,
        inputMethod,
        locale,
        currentTime: new Date(),
      };

      if (inputMethod === 'standard') {
        input.caffeineItems = caffeineItems;
      } else {
        input.customCaffeineMg = parseFloat(customCaffeineMg);
        input.customTimestamp = new Date(customTimestamp);
      }

      const caffeineResult = calculateCaffeine(input);
      setResult(caffeineResult);
    } catch (err: any) {
      setError(err.message || (locale === 'tr' ? 'Hesaplama hatası' : 'Calculation error'));
    }
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setUnit('metric');
    setIsPregnant(false);
    setInputMethod('standard');
    setCaffeineItems([]);
    setNewItemAmount('1');
    setCustomCaffeineMg('');
    setResult(null);
    setError('');
  };

  const getSafetyColor = (status: string) => {
    const level = SAFETY_LEVELS[status as keyof typeof SAFETY_LEVELS];
    return level?.color || 'gray';
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Coffee className="w-8 h-8 text-amber-600" />
          <h1 className="text-3xl font-bold">{content.title}</h1>
        </div>
        <p className="text-muted-foreground">{content.description}</p>
      </div>

      {/* Input Form */}
      <Card className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">{tCommon('calculator_inputs')}</h2>

        {/* Basic Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {content.age} ({content.ageUnit})
            </label>
            <Input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="25"
              min="1"
              max="120"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              {content.weight} ({unit === 'metric' ? 'kg' : 'lbs'})
            </label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={content.weightPlaceholder}
              min="1"
            />
          </div>
        </div>

        {/* Unit System */}
        <div>
          <label className="block text-sm font-medium mb-2">{t('unitSystem')}</label>
          <RadioGroup
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'metric' | 'imperial')}
            options={[
              { value: 'metric', label: t('metric') },
              { value: 'imperial', label: t('imperial') },
            ]}
          />
        </div>

        {/* Pregnancy */}
        <div>
          <label className="block text-sm font-medium mb-2">{content.pregnant}</label>
          <RadioGroup
            name="pregnant"
            value={isPregnant ? 'yes' : 'no'}
            onChange={(value) => setIsPregnant(value === 'yes')}
            options={[
              { value: 'no', label: content.no },
              { value: 'yes', label: content.yes },
            ]}
          />
        </div>

        {/* Input Method */}
        <div>
          <label className="block text-sm font-medium mb-2">{content.inputMethod}</label>
          <RadioGroup
            name="inputMethod"
            value={inputMethod}
            onChange={(value) => setInputMethod(value as 'standard' | 'custom')}
            options={[
              { value: 'standard', label: content.standardMethod },
              { value: 'custom', label: content.customMethod },
            ]}
          />
        </div>

        {/* Standard Method - Add Caffeine Items */}
        {inputMethod === 'standard' && (
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-semibold">{content.addCaffeineItem}</h3>

            {/* Add new item form */}
            <div className="grid md:grid-cols-4 gap-3">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">{content.caffeineSource}</label>
                <Select
                  value={newItemSource}
                  onChange={(e) => setNewItemSource(e.target.value as CaffeineSource)}
                  options={Object.keys(groupedSources).flatMap((category) => [
                    {
                      value: `category-${category}`,
                      label: content[category as keyof typeof content] as string || category,
                      disabled: true,
                    },
                    ...groupedSources[category].map((source) => ({
                      value: source.key,
                      label: `${source.name[locale]} (${source.caffeineMg}mg)`,
                    })),
                  ])}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">{content.amount}</label>
                <Input
                  type="number"
                  value={newItemAmount}
                  onChange={(e) => setNewItemAmount(e.target.value)}
                  min="0.5"
                  step="0.5"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">{content.consumptionTime}</label>
                <Input
                  type="datetime-local"
                  value={newItemTime}
                  onChange={(e) => setNewItemTime(e.target.value)}
                  max={new Date().toISOString().slice(0, 16)}
                />
              </div>
            </div>

            <Button onClick={handleAddItem} variant="outline" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              {content.addCaffeineItem}
            </Button>

            {/* Display added items */}
            {caffeineItems.length > 0 && (
              <div className="space-y-2">
                {caffeineItems.map((item, index) => {
                  const sourceInfo = CAFFEINE_SOURCES[item.source];
                  const totalMg = sourceInfo.caffeineMg * item.amount;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="font-medium">
                          {sourceInfo.name[locale]} × {item.amount}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {totalMg}mg • {formatTime(item.timestamp)}
                        </div>
                      </div>
                      <Button
                        onClick={() => handleRemoveItem(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Custom Method */}
        {inputMethod === 'custom' && (
          <div className="space-y-4 border-t pt-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{content.customCaffeineMg}</label>
                <Input
                  type="number"
                  value={customCaffeineMg}
                  onChange={(e) => setCustomCaffeineMg(e.target.value)}
                  placeholder="200"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{content.customTimestamp}</label>
                <Input
                  type="datetime-local"
                  value={customTimestamp}
                  onChange={(e) => setCustomTimestamp(e.target.value)}
                  max={new Date().toISOString().slice(0, 16)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            {error}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1">
            <Coffee className="w-4 h-4 mr-2" />
            {content.calculate}
          </Button>
          <Button onClick={handleReset} variant="outline">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <div className="space-y-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {content.results}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Total Consumed */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-muted-foreground">{content.totalConsumed}</div>
                <div className="text-2xl font-bold text-blue-600">
                  {result.totalCaffeineConsumed.toFixed(0)} mg
                </div>
              </div>

              {/* Current in Body */}
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-muted-foreground">{content.currentInBody}</div>
                <div className="text-2xl font-bold text-purple-600">
                  {result.currentCaffeineInBody.toFixed(0)} mg
                </div>
              </div>

              {/* Daily Limit */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-muted-foreground">{content.dailyLimit}</div>
                <div className="text-2xl font-bold text-gray-700">
                  {result.dailyLimit} mg
                </div>
              </div>

              {/* Percentage */}
              <div className="p-4 bg-amber-50 rounded-lg">
                <div className="text-sm text-muted-foreground">{content.percentageOfLimit}</div>
                <div className="text-2xl font-bold text-amber-600">
                  {result.percentageOfLimit.toFixed(0)}%
                </div>
              </div>
            </div>

            {/* Safety Status */}
            <div className="mt-4 p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{content.safetyStatus}</span>
                <Badge
                  variant={
                    result.safetyStatus === 'safe'
                      ? 'success'
                      : result.safetyStatus === 'moderate'
                      ? 'warning'
                      : 'danger'
                  }
                >
                  {SAFETY_LEVELS[result.safetyStatus].description[locale]}
                </Badge>
              </div>

              {/* Effects */}
              <div className="mt-3">
                <div className="text-sm font-medium mb-1">{content.effects}:</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {SAFETY_LEVELS[result.safetyStatus].effects[locale].map((effect, idx) => (
                    <li key={idx}>• {effect}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Timing Information */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {content.timingInfo}
            </h3>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span className="text-sm">{content.halfLife}</span>
                <span className="font-semibold">{result.halfLifeHours} {content.hours}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span className="text-sm">{content.hoursUntilClear}</span>
                <span className="font-semibold">
                  {result.hoursUntilClear.toFixed(1)} {content.hours}
                </span>
              </div>

              <div className="flex justify-between items-center p-3 bg-muted rounded">
                <span className="text-sm">{content.timeToClear}</span>
                <span className="font-semibold">{formatTime(result.timeToClearCaffeine)}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                <span className="text-sm">{content.lastSafeTime}</span>
                <span className="font-semibold text-green-700">
                  {formatTime(result.lastSafeCaffeineTime)}
                </span>
              </div>
            </div>
          </Card>

          {/* Caffeine Decay Timeline */}
          <Card className="p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              {content.caffeineDecayTimeline}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">{content.caffeineDecayDescription}</p>

            <div className="space-y-3">
              {[0, 2, 4, 6, 8, 10, 12].map((hours) => {
                const caffeineAtTime = result.currentCaffeineInBody * Math.pow(0.5, hours / result.halfLifeHours);
                const percentage = (caffeineAtTime / result.currentCaffeineInBody) * 100;

                return (
                  <div key={hours} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">
                        {hours === 0 ? content.now : `${hours} ${content.hoursFromNow}`}
                      </span>
                      <span className="font-semibold">{caffeineAtTime.toFixed(0)} mg</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full transition-all ${
                          percentage > 75 ? 'bg-red-500' :
                          percentage > 50 ? 'bg-orange-500' :
                          percentage > 25 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Personalized Insights */}
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-blue-600" />
              {content.personalizedInsights}
            </h3>

            {/* Comparison with Average */}
            <div className="mb-4 p-4 bg-white rounded-lg border">
              <h4 className="text-sm font-semibold mb-3">{content.comparisonTitle}</h4>
              <p className="text-xs text-muted-foreground mb-3">{content.comparisonAvgAdult}</p>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">{content.averageAdult}</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{ width: '62.5%' }} />
                  </div>
                  <div className="text-xs font-semibold mt-1">250 mg</div>
                </div>

                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">{content.yourLevel}</div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        result.totalCaffeineConsumed > 300 ? 'bg-red-500' :
                        result.totalCaffeineConsumed > 200 ? 'bg-orange-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${Math.min((result.totalCaffeineConsumed / 400) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-xs font-semibold mt-1">{result.totalCaffeineConsumed.toFixed(0)} mg</div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <Badge variant={
                  result.totalCaffeineConsumed > 300 ? 'danger' :
                  result.totalCaffeineConsumed > 250 ? 'warning' :
                  result.totalCaffeineConsumed > 150 ? 'success' :
                  'secondary'
                }>
                  {result.totalCaffeineConsumed > 300 ? content.aboveAverage :
                   result.totalCaffeineConsumed > 150 ? content.average :
                   content.belowAverage}
                </Badge>
              </div>
            </div>

            {/* Source Breakdown */}
            {inputMethod === 'standard' && caffeineItems.length > 0 && (
              <div className="p-4 bg-white rounded-lg border">
                <h4 className="text-sm font-semibold mb-3">{content.caffeineSourceBreakdown}</h4>
                <p className="text-xs text-muted-foreground mb-3">{content.sourceBreakdownDesc}</p>

                <div className="space-y-2">
                  {caffeineItems.map((item, idx) => {
                    const sourceInfo = CAFFEINE_SOURCES[item.source];
                    const itemCaffeine = sourceInfo.caffeineMg * item.amount;
                    const percentage = (itemCaffeine / result.totalCaffeineConsumed) * 100;

                    return (
                      <div key={idx}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{sourceInfo.name[locale]}</span>
                          <span className="font-semibold">{itemCaffeine.toFixed(0)} mg ({percentage.toFixed(0)}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </Card>

          {/* Performance Expectations */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-green-600" />
              {content.performanceExpectations}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Alertness */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-semibold text-blue-900">{content.alertnessTitle}</h4>
                </div>
                <p className="text-xs text-blue-800">
                  {result.currentCaffeineInBody < 50 ? content.alertnessLow :
                   result.currentCaffeineInBody < 100 ? content.alertnessMild :
                   result.currentCaffeineInBody < 200 ? content.alertnessModerate :
                   result.currentCaffeineInBody < 300 ? content.alertnessHigh :
                   content.alertnessExcessive}
                </p>
              </div>

              {/* Physical Performance */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-green-600" />
                  <h4 className="text-sm font-semibold text-green-900">{content.physicalPerformanceTitle}</h4>
                </div>
                <p className="text-xs text-green-800">
                  {result.currentCaffeineInBody < 50 ? content.physicalLow :
                   result.currentCaffeineInBody < 100 ? content.physicalMild :
                   result.currentCaffeineInBody < 200 ? content.physicalModerate :
                   result.currentCaffeineInBody < 300 ? content.physicalHigh :
                   content.physicalExcessive}
                </p>
              </div>

              {/* Sleep Impact */}
              <div className="md:col-span-2 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <h4 className="text-sm font-semibold text-purple-900">{content.sleepImpactTitle}</h4>
                </div>

                {/* Sleep Impact Score */}
                <div className="mt-3 mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-700">{content.sleepImpactScore}</span>
                    <span className="font-semibold text-purple-900">
                      {result.currentCaffeineInBody < 25 ? '1/10' :
                       result.currentCaffeineInBody < 50 ? '3/10' :
                       result.currentCaffeineInBody < 100 ? '5/10' :
                       result.currentCaffeineInBody < 150 ? '7/10' :
                       '9/10'}
                    </span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{
                        width: `${Math.min((result.currentCaffeineInBody / 150) * 100, 100)}%`
                      }}
                    />
                  </div>
                </div>

                <p className="text-xs text-purple-800 mt-2">
                  {result.currentCaffeineInBody < 25 ? content.sleepNone :
                   result.currentCaffeineInBody < 50 ? content.sleepMinimal :
                   result.currentCaffeineInBody < 100 ? content.sleepModerate :
                   result.currentCaffeineInBody < 150 ? content.sleepHigh :
                   content.sleepSevere}
                </p>
              </div>
            </div>
          </Card>

          {/* Next Caffeine Recommendation */}
          <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-amber-600" />
              {content.nextCaffeineTitle}
            </h3>

            {result.percentageOfLimit < 70 ? (
              <div className="p-4 bg-white rounded-lg border border-green-200">
                <p className="text-sm text-green-700 font-medium">✓ {content.nextCaffeineNow}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {locale === 'tr'
                    ? `Günlük limitinizin %${(100 - result.percentageOfLimit).toFixed(0)}'i kaldı`
                    : `You have ${(100 - result.percentageOfLimit).toFixed(0)}% of your daily limit remaining`}
                </p>
              </div>
            ) : (
              <div className="p-4 bg-white rounded-lg border border-amber-200">
                <p className="text-sm text-amber-700 font-medium">
                  ⚠️ {content.nextCaffeineWait} {result.hoursUntilClear > 6 ? '6' : Math.ceil(result.hoursUntilClear / 2)} {content.hours} {content.nextCaffeineBefore}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {locale === 'tr'
                    ? `Günlük limitinizin %${result.percentageOfLimit.toFixed(0)}'ine ulaştınız`
                    : `You've reached ${result.percentageOfLimit.toFixed(0)}% of your daily limit`}
                </p>
              </div>
            )}
          </Card>

          {/* Warnings */}
          {result.warnings.length > 0 && (
            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-amber-900">
                <AlertTriangle className="w-5 h-5" />
                {content.warnings}
              </h3>
              <ul className="space-y-2">
                {result.warnings.map((warning, idx) => (
                  <li key={idx} className="text-sm text-amber-800 flex items-start gap-2">
                    <span className="mt-1">•</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      )}

      {/* Educational Content - What is Caffeine */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.whatIsCaffeine}</h2>
        <div className="prose prose-sm max-w-none">
          {content.whatIsCaffeineText.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-muted-foreground mb-3">{paragraph}</p>
          ))}
        </div>
      </Card>

      {/* How Calculator Works */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.howCalculatorWorks}</h2>
        <div className="prose prose-sm max-w-none">
          {content.calculatorMethodology.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="mb-3">
              {paragraph.startsWith('**') ? (
                <div className="text-muted-foreground whitespace-pre-line">{paragraph}</div>
              ) : (
                <p className="text-muted-foreground">{paragraph}</p>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Understanding Results */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.understandingResults}</h2>
        <div className="prose prose-sm max-w-none">
          {content.resultsInterpretation.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="mb-3 text-muted-foreground whitespace-pre-line">
              {paragraph}
            </div>
          ))}
        </div>
      </Card>

      {/* Caffeine Metabolism */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.caffeineMetabolism}</h2>
        <div className="prose prose-sm max-w-none">
          {content.metabolismText.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="mb-3 text-muted-foreground whitespace-pre-line">
              {paragraph}
            </div>
          ))}
        </div>
      </Card>

      {/* Health Effects */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.healthEffects}</h2>

        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="prose prose-sm max-w-none">
              {content.healthEffectsPositive.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="mb-2 text-green-900 whitespace-pre-line">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <div className="prose prose-sm max-w-none">
              {content.healthEffectsNegative.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="mb-2 text-red-900 whitespace-pre-line">
                  {paragraph}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Recommended Limits */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.recommendedLimits}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">✓ {content.limitAdults}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-sm text-purple-900">✓ {content.limitPregnant}</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-orange-900">✓ {content.limitChildren}</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
            <p className="text-sm text-teal-900">✓ {content.limitAdolescents}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-900">✓ {content.limitElderly}</p>
          </div>
          <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
            <p className="text-sm text-pink-900">✓ {content.limitNursing}</p>
          </div>
        </div>
      </Card>

      {/* FAQs */}
      <Card className="p-6 space-y-6">
        <h2 className="text-2xl font-bold">{content.faqTitle}</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg mb-2">{content.faq1Q}</h3>
            <p className="text-sm text-muted-foreground">{content.faq1A}</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h3 className="font-semibold text-lg mb-2">{content.faq2Q}</h3>
            <p className="text-sm text-muted-foreground">{content.faq2A}</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h3 className="font-semibold text-lg mb-2">{content.faq3Q}</h3>
            <p className="text-sm text-muted-foreground">{content.faq3A}</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <h3 className="font-semibold text-lg mb-2">{content.faq4Q}</h3>
            <p className="text-sm text-muted-foreground">{content.faq4A}</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 py-2">
            <h3 className="font-semibold text-lg mb-2">{content.faq5Q}</h3>
            <p className="text-sm text-muted-foreground">{content.faq5A}</p>
          </div>
        </div>
      </Card>

      {/* Tips */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.tips}</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip1}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip2}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip3}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip4}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip5}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip6}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip7}</p>
          </div>
          <div className="flex items-start gap-2 p-3 bg-muted rounded">
            <span className="text-green-600 mt-1">✓</span>
            <p className="text-sm text-muted-foreground">{content.tip8}</p>
          </div>
        </div>
      </Card>

      {/* Scientific Methodology */}
      <Card className="p-6 space-y-4 bg-slate-50">
        <h2 className="text-2xl font-bold">{content.methodology}</h2>
        <div className="prose prose-sm max-w-none">
          {content.methodologyText.split('\n\n').map((paragraph, idx) => (
            <div key={idx} className="mb-3 text-muted-foreground whitespace-pre-line font-mono text-xs">
              {paragraph}
            </div>
          ))}
        </div>
      </Card>

      {/* References */}
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold">{content.references}</h2>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">{content.reference1}</p>
          <p className="text-xs text-muted-foreground">{content.reference2}</p>
          <p className="text-xs text-muted-foreground">{content.reference3}</p>
          <p className="text-xs text-muted-foreground">{content.reference4}</p>
          <p className="text-xs text-muted-foreground">{content.reference5}</p>
          <p className="text-xs text-muted-foreground">{content.reference6}</p>
          <p className="text-xs text-muted-foreground">{content.reference7}</p>
          <p className="text-xs text-muted-foreground">{content.reference8}</p>
        </div>
      </Card>

      {/* Medical Disclaimer */}
      <Card className="p-6 bg-amber-50 border-amber-200">
        <h3 className="font-semibold text-lg mb-3 text-amber-900 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" />
          {content.disclaimer}
        </h3>
        <div className="prose prose-sm max-w-none">
          {content.disclaimerText.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="text-sm text-amber-800 mb-2">{paragraph}</p>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default CaffeineCalculator;
