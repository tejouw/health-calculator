'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Activity,
  AlertCircle,
  BarChart3,
  Calendar,
  ChevronDown,
  ChevronUp,
  Flame,
  Heart,
  Info,
  Pill,
  Scale,
  Syringe,
  TrendingUp,
  User,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import RadioGroup from '@/components/ui/Radio';
import { calculateBSA, calculateBurnAssessment, saveBSAHistory, getBSAHistory, bsaInfo } from './bsaLogic';
import { BSAInput, bsaFormulas, ruleOfNines } from './bsaTypes';

interface BSACalculatorProps {
  locale: 'en' | 'tr';
}

interface BurnAreas {
  head: boolean;
  torsoFront: boolean;
  torsoBack: boolean;
  armLeft: boolean;
  armRight: boolean;
  legLeft: boolean;
  legRight: boolean;
  genitals: boolean;
}

const translations = {
  en: {
    title: 'Body Surface Area (BSA) Calculator',
    subtitle: 'Medical-grade BSA calculation with comprehensive clinical features',
    inputs: 'Patient Information',
    height: 'Height',
    weight: 'Weight',
    age: 'Age (optional)',
    ageYears: 'years',
    formula: 'Formula',
    cardiacOutput: 'Cardiac Output (optional)',
    cardiacOutputUnit: 'L/min',
    calculate: 'Calculate BSA',
    calculating: 'Calculating...',
    reset: 'Reset',
    results: 'Results',
    bsaValue: 'Body Surface Area',
    bmiValue: 'Body Mass Index',
    category: 'Category',
    formulaComparison: 'Formula Comparison',
    allFormulas: 'All Formula Results',
    difference: 'Difference',
    obesityWarning: 'Obesity Alert',
    adjustedBSA: 'Adjusted BSA',
    adjustedBSAWarning: 'For BMI > 30, consider using adjusted BSA for drug dosing to prevent overdosing',
    drugDosage: 'Chemotherapy Dosage Calculator',
    drug: 'Drug',
    standardDose: 'Standard Dose',
    calculatedDose: 'Calculated Dose',
    indication: 'Indication',
    cardiacIndex: 'Cardiac Index',
    cardiacIndexNormal: 'Normal range: 2.5-4.0 L/min/m²',
    cardiacIndexLow: 'Low cardiac index - may indicate heart failure',
    cardiacIndexHigh: 'High cardiac index - may indicate hyperthyroid or sepsis',
    ageAnalysis: 'Age-Based Analysis',
    ageGroup: 'Age Group',
    normalRange: 'Normal BSA Range',
    percentile: 'Percentile',
    recommendedFormula: 'Recommended Formula',
    reason: 'Reason',
    medicalUses: 'Medical Applications',
    history: 'BSA History',
    historyChart: 'Trend Analysis',
    noHistory: 'No history available. Calculate BSA to start tracking.',
    clearHistory: 'Clear History',
    date: 'Date',
    burnMode: 'Burn Assessment Mode',
    enableBurnMode: 'Enable Burn Assessment',
    disableBurnMode: 'Disable Burn Assessment',
    ruleOfNines: 'Rule of Nines',
    selectBurnAreas: 'Select Burned Body Areas',
    burnPercentage: 'Total Burn Percentage',
    fluidRequirements: 'Parkland Formula - Fluid Requirements',
    first8Hours: 'First 8 Hours',
    next16Hours: 'Next 16 Hours',
    total24Hours: 'Total 24 Hours',
    burnCategory: 'Burn Category',
    minor: 'Minor',
    moderate: 'Moderate',
    major: 'Major',
    critical: 'Critical',
    head: 'Head',
    torsoFront: 'Torso (Front)',
    torsoBack: 'Torso (Back)',
    armLeft: 'Left Arm',
    armRight: 'Right Arm',
    legLeft: 'Left Leg',
    legRight: 'Right Leg',
    genitals: 'Genitals',
    advancedFeatures: 'Advanced Features',
    showAdvanced: 'Show Advanced Features',
    hideAdvanced: 'Hide Advanced Features',
    information: 'Information',
    disclaimer: 'Medical Disclaimer',
    disclaimerText: 'This calculator is for educational and informational purposes only. It should not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical decisions.',
    cm: 'cm',
    ftIn: 'ft-in',
    kg: 'kg',
    lbs: 'lbs',
    heightUnit: 'Height Unit',
    weightUnit: 'Weight Unit',
  },
  tr: {
    title: 'Vücut Yüzey Alanı (VYA) Hesaplayıcı',
    subtitle: 'Kapsamlı klinik özelliklere sahip tıbbi düzeyde VYA hesaplaması',
    inputs: 'Hasta Bilgileri',
    height: 'Boy',
    weight: 'Kilo',
    age: 'Yaş (opsiyonel)',
    ageYears: 'yıl',
    formula: 'Formül',
    cardiacOutput: 'Kardiyak Çıktı (opsiyonel)',
    cardiacOutputUnit: 'L/dk',
    calculate: 'VYA Hesapla',
    calculating: 'Hesaplanıyor...',
    reset: 'Sıfırla',
    results: 'Sonuçlar',
    bsaValue: 'Vücut Yüzey Alanı',
    bmiValue: 'Vücut Kitle İndeksi',
    category: 'Kategori',
    formulaComparison: 'Formül Karşılaştırması',
    allFormulas: 'Tüm Formül Sonuçları',
    difference: 'Fark',
    obesityWarning: 'Obezite Uyarısı',
    adjustedBSA: 'Düzeltilmiş VYA',
    adjustedBSAWarning: 'BMI > 30 için, aşırı dozdan kaçınmak için düzeltilmiş VYA kullanmayı düşünün',
    drugDosage: 'Kemoterapi Dozaj Hesaplayıcı',
    drug: 'İlaç',
    standardDose: 'Standart Doz',
    calculatedDose: 'Hesaplanan Doz',
    indication: 'Endikasyon',
    cardiacIndex: 'Kardiyak İndeks',
    cardiacIndexNormal: 'Normal aralık: 2.5-4.0 L/dk/m²',
    cardiacIndexLow: 'Düşük kardiyak indeks - kalp yetmezliği göstergesi olabilir',
    cardiacIndexHigh: 'Yüksek kardiyak indeks - hipertiroidi veya sepsis göstergesi olabilir',
    ageAnalysis: 'Yaş Bazlı Analiz',
    ageGroup: 'Yaş Grubu',
    normalRange: 'Normal VYA Aralığı',
    percentile: 'Persentil',
    recommendedFormula: 'Önerilen Formül',
    reason: 'Sebep',
    medicalUses: 'Tıbbi Uygulamalar',
    history: 'VYA Geçmişi',
    historyChart: 'Trend Analizi',
    noHistory: 'Geçmiş bulunmuyor. İzlemeye başlamak için VYA hesaplayın.',
    clearHistory: 'Geçmişi Temizle',
    date: 'Tarih',
    burnMode: 'Yanık Değerlendirme Modu',
    enableBurnMode: 'Yanık Değerlendirmesini Etkinleştir',
    disableBurnMode: 'Yanık Değerlendirmesini Devre Dışı Bırak',
    ruleOfNines: 'Dokuzlar Kuralı',
    selectBurnAreas: 'Yanan Vücut Bölgelerini Seçin',
    burnPercentage: 'Toplam Yanık Yüzdesi',
    fluidRequirements: 'Parkland Formülü - Sıvı Gereksinimleri',
    first8Hours: 'İlk 8 Saat',
    next16Hours: 'Sonraki 16 Saat',
    total24Hours: 'Toplam 24 Saat',
    burnCategory: 'Yanık Kategorisi',
    minor: 'Minör',
    moderate: 'Orta',
    major: 'Majör',
    critical: 'Kritik',
    head: 'Baş',
    torsoFront: 'Gövde (Ön)',
    torsoBack: 'Gövde (Arka)',
    armLeft: 'Sol Kol',
    armRight: 'Sağ Kol',
    legLeft: 'Sol Bacak',
    legRight: 'Sağ Bacak',
    genitals: 'Genital',
    advancedFeatures: 'Gelişmiş Özellikler',
    showAdvanced: 'Gelişmiş Özellikleri Göster',
    hideAdvanced: 'Gelişmiş Özellikleri Gizle',
    information: 'Bilgi',
    disclaimer: 'Tıbbi Sorumluluk Reddi',
    disclaimerText: 'Bu hesaplayıcı yalnızca eğitim ve bilgilendirme amaçlıdır. Profesyonel tıbbi tavsiye, teşhis veya tedavinin yerini alamaz. Tıbbi kararlar için her zaman nitelikli sağlık profesyonellerine danışın.',
    cm: 'cm',
    ftIn: 'ft-in',
    kg: 'kg',
    lbs: 'lbs',
    heightUnit: 'Boy Birimi',
    weightUnit: 'Kilo Birimi',
  },
};

export default function BSACalculator({ locale }: BSACalculatorProps) {
  const t = translations[locale];
  const info = bsaInfo[locale];

  // Input states
  const [height, setHeight] = useState<string>('170');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'ft-in'>('cm');
  const [weight, setWeight] = useState<string>('70');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [age, setAge] = useState<string>('');
  const [formula, setFormula] = useState<BSAInput['formula']>('mosteller');
  const [cardiacOutput, setCardiacOutput] = useState<string>('');

  // UI states
  const [result, setResult] = useState<ReturnType<typeof calculateBSA> | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [burnMode, setBurnMode] = useState(false);
  const [burnAreas, setBurnAreas] = useState<BurnAreas>({
    head: false,
    torsoFront: false,
    torsoBack: false,
    armLeft: false,
    armRight: false,
    legLeft: false,
    legRight: false,
    genitals: false,
  });
  const [history, setHistory] = useState<ReturnType<typeof getBSAHistory>>([]);

  // Expandable sections
  const [expandedSections, setExpandedSections] = useState({
    comparison: true,
    drugDosage: false,
    ageAnalysis: false,
    history: false,
    medicalUses: false,
    info: false,
  });

  // Load history on mount
  useEffect(() => {
    setHistory(getBSAHistory());
  }, []);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCalculate = () => {
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);

    if (!heightNum || !weightNum || heightNum <= 0 || weightNum <= 0) {
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const input: BSAInput = {
        height: heightNum,
        heightUnit,
        weight: weightNum,
        weightUnit,
        age: age ? parseFloat(age) : undefined,
        formula,
        cardiacOutput: cardiacOutput ? parseFloat(cardiacOutput) : undefined,
      };

      const calculatedResult = calculateBSA(input);
      setResult(calculatedResult);

      // Save to history
      const weightKg = weightUnit === 'kg' ? weightNum : weightNum * 0.453592;
      const heightCm = heightUnit === 'cm' ? heightNum : heightNum * 30.48;
      saveBSAHistory(
        calculatedResult.bsa,
        weightKg,
        heightCm,
        age ? parseFloat(age) : undefined
      );
      setHistory(getBSAHistory());

      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setHeight('170');
    setWeight('70');
    setAge('');
    setCardiacOutput('');
    setResult(null);
    setBurnMode(false);
    setBurnAreas({
      head: false,
      torsoFront: false,
      torsoBack: false,
      armLeft: false,
      armRight: false,
      legLeft: false,
      legRight: false,
      genitals: false,
    });
  };

  const clearHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('bsaHistory');
      setHistory([]);
    }
  };

  const toggleBurnArea = (area: keyof BurnAreas) => {
    setBurnAreas((prev) => ({ ...prev, [area]: !prev[area] }));
  };

  const calculateBurnPercentage = useMemo(() => {
    const ageType = !age || parseFloat(age) >= 18 ? 'adult' : parseFloat(age) < 1 ? 'infant' : 'child';
    let total = 0;

    Object.entries(burnAreas).forEach(([area, selected]) => {
      if (selected) {
        const bodyPart = area as keyof typeof ruleOfNines;
        total += ruleOfNines[bodyPart][ageType];
      }
    });

    return total;
  }, [burnAreas, age]);

  const burnAssessment = useMemo(() => {
    if (!burnMode || !weight || calculateBurnPercentage === 0) return null;

    const weightKg = weightUnit === 'kg' ? parseFloat(weight) : parseFloat(weight) * 0.453592;
    return calculateBurnAssessment(weightKg, calculateBurnPercentage);
  }, [burnMode, weight, weightUnit, calculateBurnPercentage]);

  const getCardiacIndexStatus = (ci: number) => {
    if (ci < 2.5) return { status: 'low', color: 'danger' as const };
    if (ci > 4.0) return { status: 'high', color: 'warning' as const };
    return { status: 'normal', color: 'success' as const };
  };

  const getBurnCategoryColor = (category: string) => {
    const colors = {
      minor: 'success' as const,
      moderate: 'warning' as const,
      major: 'danger' as const,
      critical: 'danger' as const,
    };
    return colors[category as keyof typeof colors] || 'primary';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-slide-up">
      {/* Header Card */}
      <Card>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Scale className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {t.title}
            </h2>
            <p className="text-sm text-neutral-600">{t.subtitle}</p>
          </div>
        </div>
      </Card>

      {/* Burn Mode Toggle */}
      <Card>
        <Button
          onClick={() => setBurnMode(!burnMode)}
          variant={burnMode ? 'danger' : 'outline'}
          className="w-full flex items-center justify-center gap-2"
          size="lg"
        >
          <Flame className="h-5 w-5" />
          {burnMode ? t.disableBurnMode : t.enableBurnMode}
        </Button>
      </Card>

      {/* Input Card */}
      <Card>
        <div className="mb-6 flex items-center gap-2">
          <User className="h-5 w-5 text-primary-600" />
          <h3 className="text-lg font-bold text-neutral-900">{t.inputs}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Height */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {t.height}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="170"
                className="flex-1"
              />
              <select
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value as 'cm' | 'ft-in')}
                className="px-3 py-2 border border-neutral-300 rounded-lg bg-white text-neutral-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="cm">{t.cm}</option>
                <option value="ft-in">{t.ftIn}</option>
              </select>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {t.weight}
            </label>
            <div className="flex gap-2">
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className="flex-1"
              />
              <select
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value as 'kg' | 'lbs')}
                className="px-3 py-2 border border-neutral-300 rounded-lg bg-white text-neutral-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="kg">{t.kg}</option>
                <option value="lbs">{t.lbs}</option>
              </select>
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {t.age}
            </label>
            <div className="flex gap-2 items-center">
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="30"
                className="flex-1"
              />
              <span className="text-sm font-medium text-neutral-600">{t.ageYears}</span>
            </div>
          </div>

          {/* Formula */}
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              {t.formula}
            </label>
            <select
              value={formula}
              onChange={(e) => setFormula(e.target.value as BSAInput['formula'])}
              className="w-full px-3 py-2 border border-neutral-300 rounded-lg bg-white text-neutral-900 font-medium focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {Object.entries(bsaFormulas).map(([key, value]) => (
                <option key={key} value={key}>
                  {value.name[locale]} ({value.year})
                </option>
              ))}
            </select>
          </div>

          {/* Cardiac Output */}
          {showAdvanced && (
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {t.cardiacOutput}
              </label>
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  value={cardiacOutput}
                  onChange={(e) => setCardiacOutput(e.target.value)}
                  placeholder="5.0"
                  className="flex-1"
                />
                <span className="text-sm font-medium text-neutral-600">{t.cardiacOutputUnit}</span>
              </div>
            </div>
          )}
        </div>

        {/* Advanced Features Toggle */}
        <div className="mt-4">
          <Button
            onClick={() => setShowAdvanced(!showAdvanced)}
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showAdvanced ? t.hideAdvanced : t.showAdvanced}
          </Button>
        </div>

        {/* Calculate and Reset Buttons */}
        <div className="flex gap-3">
          <Button
            onClick={handleCalculate}
            disabled={isCalculating || !height || !weight}
            className="flex-1"
            size="lg"
          >
            {isCalculating ? t.calculating : t.calculate}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {t.reset}
          </Button>
        </div>
      </Card>

      {/* Burn Assessment Mode */}
      {burnMode && (
        <Card className="border-2 border-danger-500">
          <div className="mb-4 flex items-center gap-2">
            <Flame className="h-5 w-5 text-danger-600" />
            <h3 className="text-lg font-bold text-neutral-900">{t.burnMode}</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-3 font-semibold text-neutral-900">{t.ruleOfNines}</h4>
              <p className="mb-4 text-sm text-neutral-600">{t.selectBurnAreas}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.entries(burnAreas).map(([area, selected]) => (
                  <button
                    key={area}
                    onClick={() => toggleBurnArea(area as keyof BurnAreas)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selected
                        ? 'border-danger-500 bg-danger-50 text-danger-700'
                        : 'border-neutral-300 hover:border-danger-300'
                    }`}
                  >
                    <div className="text-sm font-medium text-neutral-900">{t[area as keyof typeof t]}</div>
                    <div className="text-xs text-neutral-600 mt-1">
                      {ruleOfNines[area as keyof typeof ruleOfNines][
                        !age || parseFloat(age) >= 18 ? 'adult' : parseFloat(age) < 1 ? 'infant' : 'child'
                      ]}%
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {burnAssessment && (
              <div className="bg-danger-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-900">
                    {t.burnPercentage}
                  </span>
                  <Badge variant={getBurnCategoryColor(burnAssessment.category)} size="lg">
                    {burnAssessment.burnPercentage}%
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-900">
                    {t.burnCategory}
                  </span>
                  <Badge variant={getBurnCategoryColor(burnAssessment.category)}>
                    {t[burnAssessment.category]}
                  </Badge>
                </div>

                <div className="border-t border-danger-200 pt-3 mt-3">
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {t.fluidRequirements}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-700">{t.first8Hours}</span>
                      <span className="font-semibold text-neutral-900">
                        {burnAssessment.fluidRequirementFirst8h} mL
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-700">{t.next16Hours}</span>
                      <span className="font-semibold text-neutral-900">
                        {burnAssessment.fluidRequirementFirst8h} mL
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-bold border-t border-danger-200 pt-2">
                      <span className="text-neutral-900">{t.total24Hours}</span>
                      <span className="text-danger-600">
                        {burnAssessment.fluidRequirement24h} mL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Results */}
      {result && (
        <>
          {/* Main Result Card */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {t.results}
              </h3>

              <div className="mb-6">
                <div className="text-6xl font-bold text-primary-600">
                  {result.bsa.toFixed(2)}
                </div>
                <div className="mt-2 text-sm text-neutral-600">m² (VYA)</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm text-neutral-600">{t.bmiValue}</div>
                  <div className="text-2xl font-bold text-primary-600">
                    {result.bmi?.toFixed(1)}
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">kg/m²</div>
                </div>

                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-1 text-sm text-neutral-600">{t.category}</div>
                  <Badge variant={result.category.color} size="lg">
                    {result.category.label[locale]}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Formula Comparison */}
          <Card>
            <button
              onClick={() => toggleSection('comparison')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-secondary-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t.formulaComparison}
                </h3>
              </div>
              {expandedSections.comparison ? (
                <ChevronUp className="h-5 w-5 text-neutral-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-neutral-600" />
              )}
            </button>

            {expandedSections.comparison && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-2 px-4 text-sm font-semibold text-neutral-900">
                        {t.formula}
                      </th>
                      <th className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        BSA (m²)
                      </th>
                      <th className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        {t.difference}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 px-4 text-sm text-neutral-700">
                        Du Bois (1916)
                      </td>
                      <td className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        {result.allFormulas.dubois.toFixed(2)}
                      </td>
                      <td className="text-right py-2 px-4 text-sm text-neutral-700">
                        {((result.allFormulas.dubois - result.bsa) * 100 / result.bsa).toFixed(1)}%
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 px-4 text-sm text-neutral-700">
                        Mosteller (1987)
                      </td>
                      <td className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        {result.allFormulas.mosteller.toFixed(2)}
                      </td>
                      <td className="text-right py-2 px-4 text-sm text-neutral-700">
                        {((result.allFormulas.mosteller - result.bsa) * 100 / result.bsa).toFixed(1)}%
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-2 px-4 text-sm text-neutral-700">
                        Haycock (1978)
                      </td>
                      <td className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        {result.allFormulas.haycock.toFixed(2)}
                      </td>
                      <td className="text-right py-2 px-4 text-sm text-neutral-700">
                        {((result.allFormulas.haycock - result.bsa) * 100 / result.bsa).toFixed(1)}%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 text-sm text-neutral-700">
                        Gehan & George (1970)
                      </td>
                      <td className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                        {result.allFormulas.gehanGeorge.toFixed(2)}
                      </td>
                      <td className="text-right py-2 px-4 text-sm text-neutral-700">
                        {((result.allFormulas.gehanGeorge - result.bsa) * 100 / result.bsa).toFixed(1)}%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          {/* Obesity Warning */}
          {result.adjustedBSA && (
            <Card className="border-2 border-warning-500 bg-warning-50">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-warning-900 mb-2">
                    {t.obesityWarning}
                  </h3>
                  <p className="text-sm text-warning-800 mb-3">
                    {t.adjustedBSAWarning}
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-sm text-warning-700">Actual BSA</div>
                      <div className="text-2xl font-bold text-warning-900">
                        {result.bsa.toFixed(2)} m²
                      </div>
                    </div>
                    <div className="text-warning-500">→</div>
                    <div>
                      <div className="text-sm text-warning-700">{t.adjustedBSA}</div>
                      <div className="text-2xl font-bold text-warning-600">
                        {result.adjustedBSA.toFixed(2)} m²
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Drug Dosage Calculator */}
          {showAdvanced && result.drugDosages && (
            <Card>
              <button
                onClick={() => toggleSection('drugDosage')}
                className="w-full flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-2">
                  <Pill className="h-5 w-5 text-success-600" />
                  <h3 className="text-lg font-bold text-neutral-900">
                    {t.drugDosage}
                  </h3>
                </div>
                {expandedSections.drugDosage ? (
                  <ChevronUp className="h-5 w-5 text-neutral-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-600" />
                )}
              </button>

              {expandedSections.drugDosage && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="text-left py-2 px-4 text-sm font-semibold text-neutral-900">
                          {t.drug}
                        </th>
                        <th className="text-left py-2 px-4 text-sm font-semibold text-neutral-900">
                          {t.standardDose}
                        </th>
                        <th className="text-right py-2 px-4 text-sm font-semibold text-neutral-900">
                          {t.calculatedDose}
                        </th>
                        <th className="text-left py-2 px-4 text-sm font-semibold text-neutral-900">
                          {t.indication}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.drugDosages.map((drug, index) => (
                        <tr
                          key={index}
                          className="border-b border-neutral-100 last:border-0"
                        >
                          <td className="py-3 px-4 text-sm font-medium text-neutral-900">
                            {drug.drug}
                          </td>
                          <td className="py-3 px-4 text-sm text-neutral-700">
                            {drug.standardDose}
                          </td>
                          <td className="text-right py-3 px-4 text-sm font-semibold text-success-600">
                            {drug.calculatedDose}
                          </td>
                          <td className="py-3 px-4 text-sm text-neutral-700">
                            {drug.indication[locale]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          )}

          {/* Cardiac Index */}
          {result.cardiacIndex && (
            <Card className="bg-gradient-to-br from-danger-50 to-warning-50">
              <div className="mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-danger-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t.cardiacIndex}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-4xl font-bold text-danger-600">
                    {result.cardiacIndex.toFixed(2)}
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">L/min/m²</div>
                </div>
                <Badge variant={getCardiacIndexStatus(result.cardiacIndex).color} size="lg">
                  {getCardiacIndexStatus(result.cardiacIndex).status.toUpperCase()}
                </Badge>
              </div>

              <div className="mt-4 text-sm text-neutral-700">
                {result.cardiacIndex < 2.5
                  ? t.cardiacIndexLow
                  : result.cardiacIndex > 4.0
                  ? t.cardiacIndexHigh
                  : t.cardiacIndexNormal}
              </div>
            </Card>
          )}

          {/* Age-Based Analysis */}
          {result.ageGroup && (
            <Card>
              <button
                onClick={() => toggleSection('ageAnalysis')}
                className="w-full flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary-600" />
                  <h3 className="text-lg font-bold text-neutral-900">
                    {t.ageAnalysis}
                  </h3>
                </div>
                {expandedSections.ageAnalysis ? (
                  <ChevronUp className="h-5 w-5 text-neutral-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-600" />
                )}
              </button>

              {expandedSections.ageAnalysis && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-primary-50 rounded-lg">
                      <div className="text-sm text-neutral-600 mb-1 font-semibold">
                        {t.ageGroup}
                      </div>
                      <div className="text-lg font-semibold text-neutral-900">
                        {result.ageGroup.label[locale]}
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary-50 rounded-lg">
                      <div className="text-sm text-neutral-600 mb-1 font-semibold">
                        {t.normalRange}
                      </div>
                      <div className="text-lg font-semibold text-neutral-900">
                        {result.ageGroup.normalRange} m²
                      </div>
                    </div>

                    <div className="text-center p-4 bg-primary-50 rounded-lg">
                      <div className="text-sm text-neutral-600 mb-1 font-semibold">
                        {t.percentile}
                      </div>
                      <div className="text-lg font-semibold text-primary-600">
                        {result.ageGroup.percentile}th
                      </div>
                    </div>
                  </div>

                  {/* Percentile Bar */}
                  <div className="relative h-8 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500"
                      style={{ width: `${result.ageGroup.percentile}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-neutral-900">
                      {result.ageGroup.percentile}th Percentile
                    </div>
                  </div>
                </div>
              )}
            </Card>
          )}

          {/* Recommended Formula */}
          {result.recommendedFormula && (
            <Card className="bg-gradient-to-br from-warning-50 to-warning-100">
              <div className="mb-3 flex items-center gap-2">
                <Syringe className="h-5 w-5 text-warning-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t.recommendedFormula}
                </h3>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="warning" size="lg">
                    {result.recommendedFormula.formula}
                  </Badge>
                </div>
                <p className="text-sm text-neutral-700">
                  <span className="font-semibold">{t.reason}:</span>{' '}
                  {result.recommendedFormula.reason[locale]}
                </p>
              </div>
            </Card>
          )}

          {/* Medical Uses */}
          <Card>
            <button
              onClick={() => toggleSection('medicalUses')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-secondary-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t.medicalUses}
                </h3>
              </div>
              {expandedSections.medicalUses ? (
                <ChevronUp className="h-5 w-5 text-neutral-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-neutral-600" />
              )}
            </button>

            {expandedSections.medicalUses && (
              <ul className="space-y-2">
                {result.medicalUses[locale].map((use, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-secondary-600 mt-1">•</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          {/* BSA History */}
          {showAdvanced && history.length > 0 && (
            <Card>
              <button
                onClick={() => toggleSection('history')}
                className="w-full flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary-600" />
                  <h3 className="text-lg font-bold text-neutral-900">
                    {t.history}
                  </h3>
                </div>
                {expandedSections.history ? (
                  <ChevronUp className="h-5 w-5 text-neutral-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neutral-600" />
                )}
              </button>

              {expandedSections.history && (
                <>
                  {/* History Graph */}
                  {history.length > 1 && (
                    <div className="mb-6 p-4 bg-neutral-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                        {t.historyChart}
                      </h4>
                      <div className="relative h-40">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                          <polyline
                            points={history
                              .map((entry, i) => {
                                if (!entry.bsa || isNaN(entry.bsa)) return null;
                                const x = history.length === 1 ? 200 : (i / (history.length - 1)) * 400;
                                const minBSA = Math.min(...history.map(h => h.bsa).filter(b => b && !isNaN(b)));
                                const maxBSA = Math.max(...history.map(h => h.bsa).filter(b => b && !isNaN(b)));
                                const range = maxBSA - minBSA || 1;
                                const y = 100 - ((entry.bsa - minBSA) / range) * 80 - 10;
                                return `${x},${y}`;
                              })
                              .filter(Boolean)
                              .join(' ')}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="text-primary-600"
                          />
                          {history.map((entry, i) => {
                            if (!entry.bsa || isNaN(entry.bsa)) return null;
                            const x = history.length === 1 ? 200 : (i / (history.length - 1)) * 400;
                            const minBSA = Math.min(...history.map(h => h.bsa).filter(b => b && !isNaN(b)));
                            const maxBSA = Math.max(...history.map(h => h.bsa).filter(b => b && !isNaN(b)));
                            const range = maxBSA - minBSA || 1;
                            const y = 100 - ((entry.bsa - minBSA) / range) * 80 - 10;
                            return (
                              <circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="currentColor"
                                className="text-primary-600"
                              />
                            );
                          })}
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* History Table */}
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-neutral-200">
                          <th className="text-left py-2 px-4 font-semibold text-neutral-900">
                            {t.date}
                          </th>
                          <th className="text-right py-2 px-4 font-semibold text-neutral-900">
                            BSA
                          </th>
                          <th className="text-right py-2 px-4 font-semibold text-neutral-900">
                            {t.weight}
                          </th>
                          <th className="text-right py-2 px-4 font-semibold text-neutral-900">
                            {t.height}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {history
                          .slice()
                          .reverse()
                          .map((entry, index) => (
                            <tr
                              key={index}
                              className="border-b border-neutral-100 last:border-0"
                            >
                              <td className="py-2 px-4 text-neutral-700">
                                {new Date(entry.date).toLocaleDateString(locale)}
                              </td>
                              <td className="text-right py-2 px-4 font-semibold text-primary-600">
                                {entry.bsa.toFixed(2)} m²
                              </td>
                              <td className="text-right py-2 px-4 text-neutral-700">
                                {entry.weight.toFixed(1)} kg
                              </td>
                              <td className="text-right py-2 px-4 text-neutral-700">
                                {entry.height.toFixed(0)} cm
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>

                  <Button onClick={clearHistory} variant="outline" size="sm" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t.clearHistory}
                  </Button>
                </>
              )}
            </Card>
          )}
        </>
      )}

      {/* Information Card */}
      <Card>
        <button
          onClick={() => toggleSection('info')}
          className="w-full flex items-center justify-between mb-4"
        >
          <div className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary-600" />
            <h3 className="text-lg font-bold text-neutral-900">{t.information}</h3>
          </div>
          {expandedSections.info ? (
            <ChevronUp className="h-5 w-5 text-neutral-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-neutral-600" />
          )}
        </button>

        {expandedSections.info && (
          <div className="space-y-4 text-sm text-neutral-700">
            <div>
              <h4 className="font-semibold text-neutral-900 mb-2">{info.title}</h4>
              <p>{info.description}</p>
            </div>
            <div>
              <h5 className="font-medium text-neutral-900 mb-1">{info.formula}</h5>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Badge variant="primary">{info.units}</Badge>
              <Badge variant="success">{info.normalRange}</Badge>
            </div>
          </div>
        )}
      </Card>

      {/* Disclaimer */}
      <Card className="bg-warning-50 border-2 border-warning-400">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-warning-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-warning-900 mb-2">{t.disclaimer}</h3>
            <p className="text-sm text-warning-800">{t.disclaimerText}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
