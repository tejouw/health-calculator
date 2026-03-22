'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge } from '@/components/ui';
import { Eye, ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { EyeColor, EyeColorInput, EyeColorResult } from './eyeColorTypes';
import { calculateEyeColorProbabilities, EYE_COLOR_INFO } from './eyeColorLogic';
import EyeColorProbabilityChart from './components/EyeColorProbabilityChart';
import EyeColorGeneticsInfo from './components/EyeColorGeneticsInfo';

interface EyeColorCalculatorProps {
  locale: 'en' | 'tr';
}

const eyeColorOptions: { value: EyeColor; label: { en: string; tr: string }; hex: string }[] = [
  { value: 'brown', label: { en: 'Brown', tr: 'Kahverengi' }, hex: '#8B4513' },
  { value: 'blue', label: { en: 'Blue', tr: 'Mavi' }, hex: '#4682B4' },
  { value: 'green', label: { en: 'Green', tr: 'Yeşil' }, hex: '#2E8B57' },
  { value: 'hazel', label: { en: 'Hazel', tr: 'Ela' }, hex: '#C4A45A' },
];

interface EyeColorSelectorProps {
  label: string;
  value: EyeColor | '';
  onChange: (color: EyeColor) => void;
  locale: 'en' | 'tr';
}

const EyeColorSelector: React.FC<EyeColorSelectorProps> = ({ label, value, onChange, locale }) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-neutral-700">{label}</label>
    <div className="grid grid-cols-2 gap-2">
      {eyeColorOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2.5 text-sm font-medium transition-all ${
            value === option.value
              ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-sm'
              : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50'
          }`}
        >
          <div
            className="h-5 w-5 rounded-full border-2 border-white shadow-sm"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${option.hex}dd, ${option.hex})`,
            }}
          />
          {option.label[locale]}
        </button>
      ))}
    </div>
  </div>
);

const EyeColorCalculator: React.FC<EyeColorCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [motherEyeColor, setMotherEyeColor] = useState<EyeColor | ''>('');
  const [fatherEyeColor, setFatherEyeColor] = useState<EyeColor | ''>('');
  const [showGrandparents, setShowGrandparents] = useState(false);
  const [maternalGrandmother, setMaternalGrandmother] = useState<EyeColor | ''>('');
  const [maternalGrandfather, setMaternalGrandfather] = useState<EyeColor | ''>('');
  const [paternalGrandmother, setPaternalGrandmother] = useState<EyeColor | ''>('');
  const [paternalGrandfather, setPaternalGrandfather] = useState<EyeColor | ''>('');
  const [result, setResult] = useState<EyeColorResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    if (!motherEyeColor || !fatherEyeColor) {
      setError(
        locale === 'tr'
          ? 'Lütfen anne ve baba göz renklerini seçin'
          : 'Please select both mother and father eye colors',
      );
      return;
    }

    const input: EyeColorInput = {
      motherEyeColor,
      fatherEyeColor,
      ...(maternalGrandmother && { maternalGrandmother }),
      ...(maternalGrandfather && { maternalGrandfather }),
      ...(paternalGrandmother && { paternalGrandmother }),
      ...(paternalGrandfather && { paternalGrandfather }),
    };

    const calcResult = calculateEyeColorProbabilities(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setMotherEyeColor('');
    setFatherEyeColor('');
    setMaternalGrandmother('');
    setMaternalGrandfather('');
    setPaternalGrandmother('');
    setPaternalGrandfather('');
    setShowGrandparents(false);
    setResult(null);
    setError('');
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Göz Rengi Hesaplayıcı' : 'Eye Color Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Bebeğinizin göz rengini genetiğe göre tahmin edin'
                : 'Predict your baby\'s eye color based on genetics'}
            </p>
          </div>
        </div>

        {/* Parent Eye Colors */}
        <div className="grid gap-6 sm:grid-cols-2">
          <EyeColorSelector
            label={locale === 'tr' ? 'Anne Göz Rengi' : 'Mother\'s Eye Color'}
            value={motherEyeColor}
            onChange={setMotherEyeColor}
            locale={locale}
          />
          <EyeColorSelector
            label={locale === 'tr' ? 'Baba Göz Rengi' : 'Father\'s Eye Color'}
            value={fatherEyeColor}
            onChange={setFatherEyeColor}
            locale={locale}
          />
        </div>

        {/* Grandparents Toggle */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowGrandparents(!showGrandparents)}
            className="flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100"
          >
            <span>
              {locale === 'tr'
                ? 'Büyükanne & Büyükbaba Göz Renkleri (Opsiyonel)'
                : 'Grandparent Eye Colors (Optional)'}
            </span>
            {showGrandparents ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {showGrandparents && (
            <div className="mt-4 space-y-6 rounded-lg border border-neutral-100 bg-neutral-50/50 p-4">
              {/* Maternal Grandparents */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-neutral-800">
                  {locale === 'tr' ? 'Anne Tarafı' : 'Maternal Side'}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <EyeColorSelector
                    label={locale === 'tr' ? 'Anneanne' : 'Maternal Grandmother'}
                    value={maternalGrandmother}
                    onChange={setMaternalGrandmother}
                    locale={locale}
                  />
                  <EyeColorSelector
                    label={locale === 'tr' ? 'Dede (Anne tarafı)' : 'Maternal Grandfather'}
                    value={maternalGrandfather}
                    onChange={setMaternalGrandfather}
                    locale={locale}
                  />
                </div>
              </div>

              {/* Paternal Grandparents */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-neutral-800">
                  {locale === 'tr' ? 'Baba Tarafı' : 'Paternal Side'}
                </h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <EyeColorSelector
                    label={locale === 'tr' ? 'Babaanne' : 'Paternal Grandmother'}
                    value={paternalGrandmother}
                    onChange={setPaternalGrandmother}
                    locale={locale}
                  />
                  <EyeColorSelector
                    label={locale === 'tr' ? 'Dede (Baba tarafı)' : 'Paternal Grandfather'}
                    value={paternalGrandfather}
                    onChange={setPaternalGrandfather}
                    locale={locale}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            <RotateCcw className="mr-1 h-4 w-4" />
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Result */}
      {result && (
        <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="text-center">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
              {tCommon('result')}
            </h3>

            {/* Most likely eye color - large display */}
            <div className="mb-4 flex flex-col items-center gap-3">
              <div
                className="h-24 w-24 rounded-full border-4 border-white shadow-xl"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${EYE_COLOR_INFO[result.mostLikely].hex}ee, ${EYE_COLOR_INFO[result.mostLikely].hex}88, ${EYE_COLOR_INFO[result.mostLikely].hex})`,
                }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, #1a1a1a 12px, transparent 12px)',
                  }}
                />
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900">
                  {EYE_COLOR_INFO[result.mostLikely].label[locale]}
                </div>
                <Badge variant="primary" size="lg">
                  %{result.probabilities[0].percentage}{' '}
                  {locale === 'tr' ? 'olasılık' : 'probability'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Probability Chart */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <EyeColorProbabilityChart probabilities={result.probabilities} locale={locale} />
          </div>

          {/* Explanation */}
          <div className="mt-6 border-t border-neutral-200 pt-6">
            <p className="text-sm leading-relaxed text-neutral-700">
              {result.explanation[locale]}
            </p>
          </div>
        </Card>
      )}

      {/* Post-calculation content */}
      {result && <EyeColorGeneticsInfo locale={locale} />}
    </div>
  );
};

export default EyeColorCalculator;
