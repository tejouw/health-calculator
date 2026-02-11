'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, Card, Select } from '@/components/ui';
import { calculatePetAge } from './petAgeLogic';
import { petAgeContent } from './petAgeContent';
import type { PetType, DogSize, PetAgeResult, ActivityLevel } from './petAgeTypes';
import {
  Dog,
  Cat,
  Heart,
  TrendingUp,
  Lightbulb,
  Calendar,
  Award,
  Sparkles,
  Info,
  BookOpen,
  AlertCircle,
  FileText,
  ChevronDown,
  ChevronUp,
  Activity,
  Utensils,
  Stethoscope,
  Brain,
  Users,
  GraduationCap,
  Smile,
  Bird,
  Rabbit,
} from 'lucide-react';

interface PetAgeCalculatorProps {
  locale: 'en' | 'tr';
}

const PetAgeCalculator: React.FC<PetAgeCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');
  const content = petAgeContent[locale];

  const [petType, setPetType] = useState<PetType>('dog');
  const [petName, setPetName] = useState<string>('');
  const [ageYears, setAgeYears] = useState<string>('');
  const [ageMonths, setAgeMonths] = useState<string>('');
  const [dogSize, setDogSize] = useState<DogSize>('medium');
  const [weight, setWeight] = useState<string>('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('moderate');
  const [isIndoor, setIsIndoor] = useState<boolean>(true);
  const [isNeutered, setIsNeutered] = useState<boolean>(false);
  const [result, setResult] = useState<PetAgeResult | null>(null);
  const [error, setError] = useState<string>('');

  // Collapsible sections state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    howItWorks: false,
    formula: false,
    interpreting: false,
    lifestages: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCalculate = () => {
    setError('');

    const years = parseInt(ageYears) || 0;
    const months = parseInt(ageMonths) || 0;

    if (years === 0 && months === 0) {
      setError(content.errorAge);
      return;
    }

    if (years < 0 || years > 30) {
      setError(content.errorAgeRange);
      return;
    }

    if (months < 0 || months > 11) {
      setError(content.errorMonthsRange);
      return;
    }

    const ageResult = calculatePetAge({
      petType,
      petName: petName || undefined,
      ageYears: years,
      ageMonths: months,
      dogSize: petType === 'dog' ? dogSize : undefined,
      weight: weight ? parseFloat(weight) : undefined,
      activityLevel,
      isIndoor,
      isNeutered,
    });

    setResult(ageResult);
  };

  const handleReset = () => {
    setAgeYears('');
    setAgeMonths('');
    setPetName('');
    setPetType('dog');
    setDogSize('medium');
    setWeight('');
    setActivityLevel('moderate');
    setIsIndoor(true);
    setIsNeutered(false);
    setResult(null);
    setError('');
  };

  // Get icon for pet type
  const getPetIcon = (type: PetType) => {
    const icons: Record<PetType, React.ReactNode> = {
      dog: <Dog className="h-8 w-8" />,
      cat: <Cat className="h-8 w-8" />,
      rabbit: <Rabbit className="h-8 w-8" />,
      hamster: <span className="text-3xl">🐹</span>,
      bird: <Bird className="h-8 w-8" />,
      'guinea-pig': <span className="text-3xl">🐹</span>,
    };
    return icons[type];
  };

  // Get emoji for pet type
  const getPetEmoji = (type: PetType) => {
    const emojis: Record<PetType, string> = {
      dog: '🐕',
      cat: '🐱',
      rabbit: '🐰',
      hamster: '🐹',
      bird: '🦜',
      'guinea-pig': '🐹',
    };
    return emojis[type];
  };

  // Get color class for life stage
  const getLifeStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      baby: 'from-yellow-400 to-orange-400',
      young: 'from-green-400 to-teal-400',
      adult: 'from-blue-400 to-cyan-400',
      mature: 'from-purple-400 to-indigo-400',
      senior: 'from-orange-400 to-red-400',
      geriatric: 'from-pink-400 to-purple-400',
    };
    return colors[stage] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">{content.title}</h2>
            <p className="text-sm text-neutral-600">{content.description}</p>
          </div>
        </div>

        {/* Pet Type Selection - Visual Cards */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-medium text-neutral-700">
            {content.petTypeLabel}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {(['dog', 'cat', 'rabbit', 'hamster', 'bird', 'guinea-pig'] as PetType[]).map(type => (
              <button
                key={type}
                type="button"
                onClick={() => setPetType(type)}
                className={`flex flex-col items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all ${
                  petType === type
                    ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-md'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {getPetIcon(type)}
                <span className="text-xs font-medium">{content.petTypes[type]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pet Name (Optional) */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {content.petNameLabel} <span className="text-neutral-400">({content.optional})</span>
          </label>
          <Input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            placeholder={content.petNamePlaceholder}
          />
        </div>

        {/* Age Input */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {content.ageLabel}
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs text-neutral-600">{content.ageYearsLabel}</label>
              <Input
                type="number"
                value={ageYears}
                onChange={(e) => setAgeYears(e.target.value)}
                placeholder="0"
                min={0}
                max={30}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-neutral-600">{content.ageMonthsLabel}</label>
              <Input
                type="number"
                value={ageMonths}
                onChange={(e) => setAgeMonths(e.target.value)}
                placeholder="0"
                min={0}
                max={11}
              />
            </div>
          </div>
        </div>

        {/* Dog Size Selection (only for dogs) */}
        {petType === 'dog' && (
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {content.dogSizeLabel}
            </label>
            <Select
              value={dogSize}
              onChange={(e) => setDogSize(e.target.value as DogSize)}
              options={[
                { value: 'small', label: content.smallDog },
                { value: 'medium', label: content.mediumDog },
                { value: 'large', label: content.largeDog },
                { value: 'giant', label: content.giantDog },
              ]}
            />
          </div>
        )}

        {/* Weight (Optional) */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {content.weightLabel} <span className="text-neutral-400">({content.optional})</span>
          </label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="0"
            min={0}
            step={0.1}
          />
          <p className="mt-1 text-xs text-neutral-500">{content.weightUnit}</p>
        </div>

        {/* Activity Level */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-neutral-700">
            {content.activityLevelLabel}
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['low', 'moderate', 'high'] as ActivityLevel[]).map(level => (
              <button
                key={level}
                type="button"
                onClick={() => setActivityLevel(level)}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-3 transition-all ${
                  activityLevel === level
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                }`}
              >
                <Activity className="h-5 w-5" />
                <span className="text-xs font-medium">{content.activityLevels[level]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Indoor/Outdoor Toggle (for cats, rabbits, birds) */}
        {(petType === 'cat' || petType === 'rabbit' || petType === 'bird') && (
          <div className="mb-6">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={isIndoor}
                onChange={(e) => setIsIndoor(e.target.checked)}
                className="h-5 w-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-neutral-700">{content.indoorLabel}</span>
            </label>
            <p className="mt-1 ml-8 text-xs text-neutral-500">{content.indoorDescription}</p>
          </div>
        )}

        {/* Spayed/Neutered Toggle */}
        <div className="mb-6">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isNeutered}
              onChange={(e) => setIsNeutered(e.target.checked)}
              className="h-5 w-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-neutral-700">{content.neuteredLabel}</span>
          </label>
        </div>

        {error && <p className="mb-4 text-sm text-danger-main">{error}</p>}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {content.calculateButton}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Results Section - LAYER 1: INTERACTIVE CARDS */}
      {result && (
        <>
          {/* Main Result Card with Personalization */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="text-center">
              <div className="mb-4 text-7xl">{getPetEmoji(petType)}</div>
              {petName && (
                <div className="mb-2 text-2xl font-bold text-neutral-700">
                  {petName}
                </div>
              )}
              <div className="mb-2 text-sm font-medium text-neutral-600">
                {content.humanAgeLabel}
              </div>
              <div className="text-8xl font-bold text-primary-600">{result.humanAge}</div>
              <div className="mt-2 text-xl text-neutral-700">{content.years}</div>

              {/* Life Stage Badge */}
              <div className="mt-6 flex justify-center">
                <div
                  className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${getLifeStageColor(
                    result.lifeStage
                  )} px-6 py-3 text-white shadow-lg`}
                >
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">{result.lifeStageName[locale]}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{result.ageCategory[locale]}</p>

              {/* Lifespan Progress Bar */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-neutral-600">{content.lifespanProgress}</span>
                  <span className="font-bold text-primary-600">{result.percentOfLifespan}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-1000"
                    style={{ width: `${Math.min(result.percentOfLifespan, 100)}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-neutral-500">
                  {content.expectedLifespan}: {result.expectedLifespan} {content.yearsShort}
                </p>
              </div>
            </div>
          </Card>

          {/* Grid of Info Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Health Tips Card */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Stethoscope className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.healthTipsTitle}</h3>
              </div>
              <ul className="space-y-3">
                {result.healthTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                      <span className="text-xs font-bold text-green-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-neutral-700">{tip[locale]}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Nutrition Tips Card */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
                  <Utensils className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.nutritionTipsTitle}</h3>
              </div>
              <ul className="space-y-3">
                {result.nutritionTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-orange-500">🍽️</span>
                    <p className="text-sm text-neutral-700">{tip[locale]}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Exercise Tips Card */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                  <Activity className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.exerciseTipsTitle}</h3>
              </div>
              <ul className="space-y-3">
                {result.exerciseTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-500">💪</span>
                    <p className="text-sm text-neutral-700">{tip[locale]}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Common Health Issues Card */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.healthIssuesTitle}</h3>
              </div>
              <ul className="space-y-2">
                {result.commonHealthIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-red-500">⚠️</span>
                    {issue[locale]}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Vet Schedule Card */}
          <Card className="animate-slide-up bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.vetScheduleTitle}</h3>
            </div>
            <div className="mb-4 rounded-lg bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                <span>📅</span>
                <span>{content.frequency}:</span>
              </div>
              <p className="mt-1 text-neutral-700">{result.vetSchedule.frequency[locale]}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm font-semibold text-neutral-900">{content.checkups}</div>
                <ul className="space-y-1">
                  {result.vetSchedule.checkups.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-700">• {item[locale]}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm font-semibold text-neutral-900">{content.vaccinations}</div>
                <ul className="space-y-1">
                  {result.vetSchedule.vaccinations.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-700">• {item[locale]}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-white p-4">
                <div className="mb-2 text-sm font-semibold text-neutral-900">{content.screenings}</div>
                <ul className="space-y-1">
                  {result.vetSchedule.screenings.map((item, i) => (
                    <li key={i} className="text-sm text-neutral-700">• {item[locale]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Personality & Social Needs Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Personality Traits */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                  <Smile className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.personalityTitle}</h3>
              </div>
              <div className="space-y-2">
                {result.personalityTraits.map((trait, index) => (
                  <div key={index} className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                    <p className="text-sm text-neutral-700">
                      <span className="mr-2">🎭</span>
                      {trait[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Needs */}
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.socialNeedsTitle}</h3>
              </div>
              <div className="space-y-2">
                {result.socialNeeds.map((need, index) => (
                  <div key={index} className="rounded-lg border border-teal-200 bg-teal-50 p-3">
                    <p className="text-sm text-neutral-700">
                      <span className="mr-2">👥</span>
                      {need[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Training Tips */}
            <Card className="animate-slide-up md:col-span-2">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <GraduationCap className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{content.trainingTipsTitle}</h3>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {result.trainingTips.map((tip, index) => (
                  <div key={index} className="rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                    <p className="text-sm text-neutral-700">
                      <span className="mr-2">🎓</span>
                      {tip[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Fun Facts Card */}
          <Card className="animate-slide-up bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100">
                <Sparkles className="h-5 w-5 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.funFactsTitle}</h3>
            </div>
            <div className="space-y-4">
              {result.funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-yellow-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-neutral-700">
                    <span className="mr-2 text-2xl">💡</span>
                    {fact[locale]}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Milestones Timeline Card */}
          <Card className="animate-slide-up">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{content.milestonesTitle}</h3>
            </div>
            <div className="relative space-y-6">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-purple-200 to-pink-200" />

              {result.milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-4 pl-4">
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-2xl shadow-lg">
                    {milestone.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1 rounded-lg border border-purple-100 bg-white p-4 shadow-sm">
                    <div className="mb-1 font-bold text-purple-600">{milestone.title[locale]}</div>
                    <p className="text-sm text-neutral-700">{milestone.description[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {/* LAYER 2: SEO EDUCATIONAL CONTENT (Collapsible) */}
      <Card>
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">{content.educationalContentTitle}</h2>

        {/* How It Works */}
        <div className="mb-4 border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('howItWorks')}
            className="flex w-full items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {content.howItWorksTitle}
              </h3>
            </div>
            {openSections.howItWorks ? (
              <ChevronUp className="h-5 w-5 text-neutral-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-neutral-400" />
            )}
          </button>
          {openSections.howItWorks && (
            <div className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
              {content.howItWorksContent}
            </div>
          )}
        </div>

        {/* Formula */}
        <div className="mb-4 border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('formula')}
            className="flex w-full items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-neutral-900">{content.formulaTitle}</h3>
            </div>
            {openSections.formula ? (
              <ChevronUp className="h-5 w-5 text-neutral-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-neutral-400" />
            )}
          </button>
          {openSections.formula && (
            <div className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
              {content.formulaContent}
            </div>
          )}
        </div>

        {/* Interpreting Results */}
        <div className="mb-4 border-b border-neutral-200 pb-4">
          <button
            onClick={() => toggleSection('interpreting')}
            className="flex w-full items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {content.interpretingTitle}
              </h3>
            </div>
            {openSections.interpreting ? (
              <ChevronUp className="h-5 w-5 text-neutral-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-neutral-400" />
            )}
          </button>
          {openSections.interpreting && (
            <div className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
              {content.interpretingContent}
            </div>
          )}
        </div>

        {/* Life Stages */}
        <div className="mb-4">
          <button
            onClick={() => toggleSection('lifestages')}
            className="flex w-full items-center justify-between text-left"
          >
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary-600" />
              <h3 className="text-lg font-semibold text-neutral-900">
                {content.lifestagesTitle}
              </h3>
            </div>
            {openSections.lifestages ? (
              <ChevronUp className="h-5 w-5 text-neutral-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-neutral-400" />
            )}
          </button>
          {openSections.lifestages && (
            <div className="mt-4 text-neutral-700 leading-relaxed whitespace-pre-line">
              {content.lifestagesContent}
            </div>
          )}
        </div>
      </Card>

      {/* FAQ Section */}
      <Card>
        <h2 className="mb-6 text-2xl font-bold text-neutral-900">{content.faqTitle}</h2>
        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <details key={index} className="group rounded-lg border border-neutral-200 p-4">
              <summary className="cursor-pointer font-semibold text-neutral-900 list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 text-neutral-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Card>

      {/* Disclaimer */}
      <Card className="border-2 border-amber-200 bg-amber-50">
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-amber-600" />
          <div>
            <h3 className="mb-2 font-bold text-amber-900">{content.disclaimerTitle}</h3>
            <p className="text-sm text-amber-800 leading-relaxed">{content.disclaimerContent}</p>
          </div>
        </div>
      </Card>

      {/* References */}
      <Card>
        <div className="mb-4 flex items-center gap-3">
          <FileText className="h-5 w-5 text-neutral-600" />
          <h3 className="text-lg font-semibold text-neutral-900">{content.referencesTitle}</h3>
        </div>
        <ul className="space-y-2">
          {content.references.map((reference, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
              <span className="mt-1 text-primary-600">•</span>
              <span>{reference}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default PetAgeCalculator;
