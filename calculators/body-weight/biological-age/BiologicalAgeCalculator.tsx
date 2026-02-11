'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, Button, Input, Select } from '@/components/ui';
import {
  AlertCircle,
  Heart,
  Activity,
  ChevronDown,
  ChevronUp,
  BookOpen,
  TrendingUp,
  Lightbulb,
  TrendingDown,
  FileText,
  Dumbbell,
  Apple,
  Moon,
  Brain,
  Users,
  Target,
  Sparkles,
  Sun,
  Sunrise,
  Coffee,
  Clock,
  Calendar,
  Utensils,
  Smile,
  Zap,
  Droplets,
  Monitor,
} from 'lucide-react';

import { calculateBiologicalAge } from './biologicalAgeLogic';
import { biologicalAgeUIContent } from './biologicalAgeContent';
import type { BiologicalAgeResult, BiologicalAgeInput } from './biologicalAgeTypes';

import ResultCard from './components/ResultCard';
import AgingFactorsBreakdown from './components/AgingFactorsBreakdown';
import HealthAgesCards from './components/HealthAgesCards';
import LifeExpectancySection from './components/LifeExpectancySection';
import ActionItemsCards from './components/ActionItemsCards';

interface BiologicalAgeCalculatorProps {
  locale: 'en' | 'tr';
}

export default function BiologicalAgeCalculator({ locale }: BiologicalAgeCalculatorProps) {
  const tCommon = useTranslations('common');
  const content = biologicalAgeUIContent[locale];

  // === FORM STATE ===
  // Basic Info
  const [chronologicalAge, setChronologicalAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  // Lifestyle
  const [smokingStatus, setSmokingStatus] = useState<'never' | 'former' | 'current'>('never');
  const [alcoholConsumption, setAlcoholConsumption] = useState<'none' | 'moderate' | 'heavy'>('none');
  const [exerciseFrequency, setExerciseFrequency] = useState<BiologicalAgeInput['exerciseFrequency']>('moderate');
  const [sleepQuality, setSleepQuality] = useState<BiologicalAgeInput['sleepQuality']>('good');
  const [stressLevel, setStressLevel] = useState<BiologicalAgeInput['stressLevel']>('moderate');
  const [dietQuality, setDietQuality] = useState<BiologicalAgeInput['dietQuality']>('good');

  // Health Metrics
  const [chronicConditions, setChronicConditions] = useState('0');
  const [familyLongevity, setFamilyLongevity] = useState<'low' | 'average' | 'high'>('average');

  // NEW: Nutrition Habits
  const [breakfastHabit, setBreakfastHabit] = useState<BiologicalAgeInput['breakfastHabit']>('sometimes');
  const [fruitVegetableServings, setFruitVegetableServings] = useState<BiologicalAgeInput['fruitVegetableServings']>('2-3');
  const [processedFoodFrequency, setProcessedFoodFrequency] = useState<BiologicalAgeInput['processedFoodFrequency']>('weekly');
  const [omega3Intake, setOmega3Intake] = useState<BiologicalAgeInput['omega3Intake']>('occasional');
  const [sugarConsumption, setSugarConsumption] = useState<BiologicalAgeInput['sugarConsumption']>('moderate');
  const [waterIntake, setWaterIntake] = useState<BiologicalAgeInput['waterIntake']>('moderate');
  const [caffeineIntake, setCaffeineIntake] = useState<BiologicalAgeInput['caffeineIntake']>('moderate');

  // NEW: Supplements & Health
  const [vitaminDLevel, setVitaminDLevel] = useState<BiologicalAgeInput['vitaminDLevel']>('normal');
  const [dentalHealth, setDentalHealth] = useState<BiologicalAgeInput['dentalHealth']>('good');
  const [sunlightExposure, setSunlightExposure] = useState<BiologicalAgeInput['sunlightExposure']>('moderate');

  // NEW: Mental & Social
  const [meditationPractice, setMeditationPractice] = useState<BiologicalAgeInput['meditationPractice']>('never');
  const [socialConnections, setSocialConnections] = useState<BiologicalAgeInput['socialConnections']>('moderate');
  const [purposeInLife, setPurposeInLife] = useState<BiologicalAgeInput['purposeInLife']>('vague');
  const [mentalStimulation, setMentalStimulation] = useState<BiologicalAgeInput['mentalStimulation']>('moderate');

  // NEW: Lifestyle Balance
  const [screenTime, setScreenTime] = useState<BiologicalAgeInput['screenTime']>('2-4');
  const [workLifeBalance, setWorkLifeBalance] = useState<BiologicalAgeInput['workLifeBalance']>('good');

  // Results & Collapsible
  const [result, setResult] = useState<BiologicalAgeResult | null>(null);
  const [error, setError] = useState('');
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCalculate = () => {
    setError('');

    if (!chronologicalAge) { setError(content.errorAge); return; }
    const age = parseInt(chronologicalAge);
    if (isNaN(age) || age < 18 || age > 100) { setError(content.errorAgeRange); return; }
    if (!height) { setError(content.errorHeight); return; }
    if (!weight) { setError(content.errorWeight); return; }

    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const conditionsNum = parseInt(chronicConditions);

    if (isNaN(heightNum) || heightNum < 100 || heightNum > 250) { setError(content.errorHeight); return; }
    if (isNaN(weightNum) || weightNum < 30 || weightNum > 300) { setError(content.errorWeight); return; }

    const calculatedResult = calculateBiologicalAge({
      chronologicalAge: age,
      gender,
      height: heightNum,
      weight: weightNum,
      smokingStatus,
      alcoholConsumption,
      exerciseFrequency,
      sleepQuality,
      stressLevel,
      dietQuality,
      chronicConditions: conditionsNum,
      familyLongevity,
      breakfastHabit,
      fruitVegetableServings,
      processedFoodFrequency,
      omega3Intake,
      vitaminDLevel,
      meditationPractice,
      socialConnections,
      purposeInLife,
      screenTime,
      sunlightExposure,
      dentalHealth,
      mentalStimulation,
      workLifeBalance,
      caffeineIntake,
      sugarConsumption,
      waterIntake,
    });

    setResult(calculatedResult);
    setTimeout(() => {
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setChronologicalAge('');
    setGender('male');
    setHeight('');
    setWeight('');
    setSmokingStatus('never');
    setAlcoholConsumption('none');
    setExerciseFrequency('moderate');
    setSleepQuality('good');
    setStressLevel('moderate');
    setDietQuality('good');
    setChronicConditions('0');
    setFamilyLongevity('average');
    setBreakfastHabit('sometimes');
    setFruitVegetableServings('2-3');
    setProcessedFoodFrequency('weekly');
    setOmega3Intake('occasional');
    setSugarConsumption('moderate');
    setWaterIntake('moderate');
    setCaffeineIntake('moderate');
    setVitaminDLevel('normal');
    setDentalHealth('good');
    setSunlightExposure('moderate');
    setMeditationPractice('never');
    setSocialConnections('moderate');
    setPurposeInLife('vague');
    setMentalStimulation('moderate');
    setScreenTime('2-4');
    setWorkLifeBalance('good');
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-8">
      {/* Form Card */}
      <Card id="calculator-form">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">{content.title}</h2>
            <p className="text-sm text-neutral-600">{content.description}</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* === SECTION 1: Basic Information === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              {content.basicInfoTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.chronologicalAgeLabel}</label>
                <Input type="number" value={chronologicalAge} onChange={(e) => setChronologicalAge(e.target.value)} placeholder={content.chronologicalAgePlaceholder} min="18" max="100" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.genderLabel}</label>
                <Select value={gender} onChange={(e) => setGender(e.target.value as any)} options={[
                  { value: 'male', label: content.genderMale },
                  { value: 'female', label: content.genderFemale },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.heightLabel}</label>
                <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={content.heightPlaceholder} min="100" max="250" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.weightLabel}</label>
                <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={content.weightPlaceholder} min="30" max="300" />
              </div>
            </div>
          </div>

          {/* === SECTION 2: Lifestyle Factors === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              {content.lifestyleFactorsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.smokingLabel}</label>
                <Select value={smokingStatus} onChange={(e) => setSmokingStatus(e.target.value as any)} options={[
                  { value: 'never', label: content.smokingNever },
                  { value: 'former', label: content.smokingFormer },
                  { value: 'current', label: content.smokingCurrent },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.alcoholLabel}</label>
                <Select value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value as any)} options={[
                  { value: 'none', label: content.alcoholNone },
                  { value: 'moderate', label: content.alcoholModerate },
                  { value: 'heavy', label: content.alcoholHeavy },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.exerciseLabel}</label>
                <Select value={exerciseFrequency} onChange={(e) => setExerciseFrequency(e.target.value as any)} options={[
                  { value: 'sedentary', label: content.exerciseSedentary },
                  { value: 'light', label: content.exerciseLight },
                  { value: 'moderate', label: content.exerciseModerate },
                  { value: 'active', label: content.exerciseActive },
                  { value: 'very-active', label: content.exerciseVeryActive },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.sleepLabel}</label>
                <Select value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value as any)} options={[
                  { value: 'poor', label: content.sleepPoor },
                  { value: 'fair', label: content.sleepFair },
                  { value: 'good', label: content.sleepGood },
                  { value: 'excellent', label: content.sleepExcellent },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.stressLabel}</label>
                <Select value={stressLevel} onChange={(e) => setStressLevel(e.target.value as any)} options={[
                  { value: 'low', label: content.stressLow },
                  { value: 'moderate', label: content.stressModerate },
                  { value: 'high', label: content.stressHigh },
                  { value: 'very-high', label: content.stressVeryHigh },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.dietLabel}</label>
                <Select value={dietQuality} onChange={(e) => setDietQuality(e.target.value as any)} options={[
                  { value: 'poor', label: content.dietPoor },
                  { value: 'fair', label: content.dietFair },
                  { value: 'good', label: content.dietGood },
                  { value: 'excellent', label: content.dietExcellent },
                ]} />
              </div>
            </div>
          </div>

          {/* === SECTION 3: Nutrition Habits === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Apple className="h-5 w-5 text-green-600" />
              {content.nutritionHabitsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.breakfastLabel}</label>
                <Select value={breakfastHabit} onChange={(e) => setBreakfastHabit(e.target.value as any)} options={[
                  { value: 'never', label: content.breakfastNever },
                  { value: 'sometimes', label: content.breakfastSometimes },
                  { value: 'daily', label: content.breakfastDaily },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.fruitVegetableLabel}</label>
                <Select value={fruitVegetableServings} onChange={(e) => setFruitVegetableServings(e.target.value as any)} options={[
                  { value: '0-1', label: content.fruitVegetable01 },
                  { value: '2-3', label: content.fruitVegetable23 },
                  { value: '4-5', label: content.fruitVegetable45 },
                  { value: '6+', label: content.fruitVegetable6plus },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.processedFoodLabel}</label>
                <Select value={processedFoodFrequency} onChange={(e) => setProcessedFoodFrequency(e.target.value as any)} options={[
                  { value: 'daily', label: content.processedFoodDaily },
                  { value: 'weekly', label: content.processedFoodWeekly },
                  { value: 'monthly', label: content.processedFoodMonthly },
                  { value: 'rarely', label: content.processedFoodRarely },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.omega3Label}</label>
                <Select value={omega3Intake} onChange={(e) => setOmega3Intake(e.target.value as any)} options={[
                  { value: 'none', label: content.omega3None },
                  { value: 'occasional', label: content.omega3Occasional },
                  { value: 'regular', label: content.omega3Regular },
                  { value: 'daily-supplement', label: content.omega3DailySupplement },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.sugarLabel}</label>
                <Select value={sugarConsumption} onChange={(e) => setSugarConsumption(e.target.value as any)} options={[
                  { value: 'high', label: content.sugarHigh },
                  { value: 'moderate', label: content.sugarModerate },
                  { value: 'low', label: content.sugarLow },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.waterIntakeLabel}</label>
                <Select value={waterIntake} onChange={(e) => setWaterIntake(e.target.value as any)} options={[
                  { value: 'low', label: content.waterLow },
                  { value: 'moderate', label: content.waterModerate },
                  { value: 'adequate', label: content.waterAdequate },
                  { value: 'optimal', label: content.waterOptimal },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.caffeineLabel}</label>
                <Select value={caffeineIntake} onChange={(e) => setCaffeineIntake(e.target.value as any)} options={[
                  { value: 'none', label: content.caffeineNone },
                  { value: 'moderate', label: content.caffeineModerate },
                  { value: 'high', label: content.caffeineHigh },
                ]} />
              </div>
            </div>
          </div>

          {/* === SECTION 4: Supplements & Health === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              {content.supplementsHealthTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.vitaminDLabel}</label>
                <Select value={vitaminDLevel} onChange={(e) => setVitaminDLevel(e.target.value as any)} options={[
                  { value: 'deficient', label: content.vitaminDDeficient },
                  { value: 'low', label: content.vitaminDLow },
                  { value: 'normal', label: content.vitaminDNormal },
                  { value: 'optimal', label: content.vitaminDOptimal },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.dentalHealthLabel}</label>
                <Select value={dentalHealth} onChange={(e) => setDentalHealth(e.target.value as any)} options={[
                  { value: 'poor', label: content.dentalPoor },
                  { value: 'fair', label: content.dentalFair },
                  { value: 'good', label: content.dentalGood },
                  { value: 'excellent', label: content.dentalExcellent },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.sunlightLabel}</label>
                <Select value={sunlightExposure} onChange={(e) => setSunlightExposure(e.target.value as any)} options={[
                  { value: 'minimal', label: content.sunlightMinimal },
                  { value: 'moderate', label: content.sunlightModerate },
                  { value: 'adequate', label: content.sunlightAdequate },
                ]} />
              </div>
            </div>
          </div>

          {/* === SECTION 5: Health Metrics === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-purple-600" />
              {content.healthMetricsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.chronicConditionsLabel}</label>
                <Input type="number" value={chronicConditions} onChange={(e) => setChronicConditions(e.target.value)} min="0" max="10" />
                <p className="text-xs text-neutral-500 mt-1">{content.chronicConditionsHelp}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.familyLongevityLabel}</label>
                <Select value={familyLongevity} onChange={(e) => setFamilyLongevity(e.target.value as any)} options={[
                  { value: 'low', label: content.familyLow },
                  { value: 'average', label: content.familyAverage },
                  { value: 'high', label: content.familyHigh },
                ]} />
              </div>
            </div>
          </div>

          {/* === SECTION 6: Mental & Social === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Brain className="h-5 w-5 text-indigo-600" />
              {content.mentalSocialTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.meditationLabel}</label>
                <Select value={meditationPractice} onChange={(e) => setMeditationPractice(e.target.value as any)} options={[
                  { value: 'never', label: content.meditationNever },
                  { value: 'weekly', label: content.meditationWeekly },
                  { value: 'daily', label: content.meditationDaily },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.socialLabel}</label>
                <Select value={socialConnections} onChange={(e) => setSocialConnections(e.target.value as any)} options={[
                  { value: 'isolated', label: content.socialIsolated },
                  { value: 'few', label: content.socialFew },
                  { value: 'moderate', label: content.socialModerate },
                  { value: 'strong', label: content.socialStrong },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.purposeLabel}</label>
                <Select value={purposeInLife} onChange={(e) => setPurposeInLife(e.target.value as any)} options={[
                  { value: 'none', label: content.purposeNone },
                  { value: 'vague', label: content.purposeVague },
                  { value: 'clear', label: content.purposeClear },
                  { value: 'strong', label: content.purposeStrong },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.mentalStimulationLabel}</label>
                <Select value={mentalStimulation} onChange={(e) => setMentalStimulation(e.target.value as any)} options={[
                  { value: 'low', label: content.mentalStimLow },
                  { value: 'moderate', label: content.mentalStimModerate },
                  { value: 'high', label: content.mentalStimHigh },
                ]} />
              </div>
            </div>
          </div>

          {/* === SECTION 7: Lifestyle Balance === */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-teal-600" />
              {content.lifestyleBalanceTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.screenTimeLabel}</label>
                <Select value={screenTime} onChange={(e) => setScreenTime(e.target.value as any)} options={[
                  { value: '0-2', label: content.screenTime02 },
                  { value: '2-4', label: content.screenTime24 },
                  { value: '4-6', label: content.screenTime46 },
                  { value: '6-8', label: content.screenTime68 },
                  { value: '8+', label: content.screenTime8plus },
                ]} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">{content.workLifeLabel}</label>
                <Select value={workLifeBalance} onChange={(e) => setWorkLifeBalance(e.target.value as any)} options={[
                  { value: 'poor', label: content.workLifePoor },
                  { value: 'fair', label: content.workLifeFair },
                  { value: 'good', label: content.workLifeGood },
                  { value: 'excellent', label: content.workLifeExcellent },
                ]} />
              </div>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <Button onClick={handleCalculate} className="flex-1" size="lg">
              {tCommon('calculate')}
            </Button>
            <Button onClick={handleReset} variant="outline" size="lg">
              {tCommon('reset')}
            </Button>
          </div>
        </div>
      </Card>

      {/* === RESULTS SECTION === */}
      {result && (
        <div className="space-y-6">
          {/* Main Result */}
          <ResultCard result={result} locale={locale} />

          {/* Aging Factors Breakdown */}
          <AgingFactorsBreakdown factors={result.agingFactors} locale={locale} />

          {/* Health System Ages */}
          <HealthAgesCards result={result} locale={locale} />

          {/* Life Expectancy */}
          <LifeExpectancySection result={result} locale={locale} />

          {/* Priority Actions */}
          <ActionItemsCards actions={result.topActions} locale={locale} />

          {/* Daily Anti-Aging Routine */}
          <Card className="animate-slide-up bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
                <Clock className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.dailyRoutineTitle}</h3>
            </div>
            <div className="space-y-3">
              {result.dailyRoutine.map((item, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-white p-3 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-800">{item.activity[locale]}</p>
                    <p className="text-xs text-neutral-500">{item.benefit[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Weekly Optimization Plan */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.weeklyPlanTitle}</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {result.weeklyPlan.map((day, index) => (
                <div key={index} className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                  <div className="mb-2 font-bold text-blue-700">{day.day[locale]}</div>
                  <div className="mb-2 text-sm font-medium text-blue-600">{day.focus[locale]}</div>
                  <ul className="space-y-1">
                    {day.activities.map((act, i) => (
                      <li key={i} className="text-xs text-neutral-700">- {act[locale]}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          {/* Nutrition Plan */}
          <Card className="animate-slide-up bg-gradient-to-br from-green-50 to-lime-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Apple className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.nutritionPlanTitle}</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {result.nutritionSuggestions.map((suggestion, index) => (
                <div key={index} className="rounded-lg border border-green-200 bg-white p-4">
                  <h4 className="mb-2 font-bold text-green-700">{suggestion.category[locale]}</h4>
                  <ul className="mb-3 space-y-1">
                    {suggestion.foods.map((food, i) => (
                      <li key={i} className="text-sm text-neutral-700">- {food[locale]}</li>
                    ))}
                  </ul>
                  <p className="text-xs font-medium text-green-600">{suggestion.benefit[locale]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Exercise Plan */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                <Dumbbell className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.exercisePlanTitle}</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {result.exercisePlan.map((exercise, index) => (
                <div key={index} className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                  <h4 className="mb-2 font-bold text-orange-700">{exercise.type[locale]}</h4>
                  <div className="space-y-1 text-sm text-neutral-700">
                    <p><span className="font-medium">{content.frequencyLabel}:</span> {exercise.frequency[locale]}</p>
                    <p><span className="font-medium">{content.durationLabel}:</span> {exercise.duration[locale]}</p>
                  </div>
                  <p className="mt-2 text-xs font-medium text-orange-600">{exercise.benefit[locale]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Stress Management */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-indigo-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Sparkles className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.stressManagementTitle}</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {result.stressStrategies.map((strategy, index) => (
                <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="mb-1 font-bold text-purple-700">{strategy.name[locale]}</h4>
                  <p className="mb-2 text-sm text-neutral-700">{strategy.description[locale]}</p>
                  <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                    {strategy.duration[locale]}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Sleep Optimization */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                <Moon className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.sleepOptimizationTitle}</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {result.sleepTips.map((tip, index) => (
                <div key={index} className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                  <h4 className="mb-1 font-bold text-indigo-700">{tip.title[locale]}</h4>
                  <p className="text-sm text-neutral-700">{tip.description[locale]}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Improvement Timeline */}
          <Card className="animate-slide-up bg-gradient-to-br from-amber-50 to-yellow-50">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                <TrendingUp className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.timelineTitle}</h3>
            </div>
            <p className="mb-4 text-sm text-neutral-600">{content.timelineDescription}</p>
            <div className="relative space-y-4">
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-amber-300 to-green-300" />
              {result.timelineProjections.map((projection, index) => (
                <div key={index} className="relative flex items-start gap-4 pl-2">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-green-400 text-sm font-bold text-white shadow-md">
                    {projection.months}m
                  </div>
                  <div className="flex-1 rounded-lg bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-neutral-800">{projection.label[locale]}</span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        {projection.potentialReduction[locale]}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">{projection.description[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
