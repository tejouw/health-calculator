'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card } from '@/components/ui';
import { calculateCreatinineClearance, creatinineInfo } from './creatinineLogic';
import { CreatinineClearanceInput } from './creatinineTypes';
import { Beaker, Info } from 'lucide-react';

interface CreatinineClearanceProps {
  locale: 'en' | 'tr';
}

const CreatinineClearance: React.FC<CreatinineClearanceProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weight, setWeight] = useState<string>('');
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>('kg');
  const [creatinine, setCreatinine] = useState<string>('');
  const [creatinineUnit, setCreatinineUnit] = useState<'mgdl' | 'umol'>('mgdl');
  const [result, setResult] = useState<ReturnType<typeof calculateCreatinineClearance> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const creatinineNum = parseFloat(creatinine);

    if (!ageNum || ageNum < 18 || ageNum > 120) {
      setError(
        locale === 'tr' ? 'Lütfen 18-120 arası geçerli bir yaş girin' : 'Please enter a valid age (18-120)'
      );
      return;
    }

    if (!weightNum || weightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir ağırlık girin' : 'Please enter a valid weight');
      return;
    }

    if (!creatinineNum || creatinineNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir kreatinin değeri girin' : 'Please enter a valid creatinine value'
      );
      return;
    }

    const input: CreatinineClearanceInput = {
      age: ageNum,
      gender,
      weight: weightNum,
      weightUnit,
      creatinine: creatinineNum,
      creatinineUnit,
    };

    const clearanceResult = calculateCreatinineClearance(input);
    setResult(clearanceResult);
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setCreatinine('');
    setResult(null);
    setError('');
  };

  const info = creatinineInfo[locale];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500">
            <Beaker className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Kreatinin Klirensi Hesaplama' : 'Creatinine Clearance Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'Cockcroft-Gault formülü' : 'Cockcroft-Gault Formula'}
            </p>
          </div>
        </div>

        {/* Age and Gender */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Input
            label={t('age')}
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="45"
            required
          />
          <div>
            <RadioGroup
              label={t('gender')}
              name="gender"
              value={gender}
              onChange={(value) => setGender(value as 'male' | 'female')}
              options={[
                { value: 'male', label: t('male') },
                { value: 'female', label: t('female') },
              ]}
              orientation="horizontal"
            />
          </div>
        </div>

        {/* Weight */}
        <div className="mb-6">
          <RadioGroup
            label={t('unitSystem')}
            name="weightUnit"
            value={weightUnit}
            onChange={(value) => setWeightUnit(value as 'kg' | 'lbs')}
            options={[
              { value: 'kg', label: tUnits('kg') },
              { value: 'lbs', label: tUnits('lbs') },
            ]}
            orientation="horizontal"
          />
        </div>

        <div className="mb-6">
          <Input
            label={t('weight')}
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={weightUnit === 'kg' ? '70' : '154'}
            rightIcon={<span className="text-sm">{weightUnit}</span>}
            required
          />
        </div>

        {/* Creatinine */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Kreatinin Birimi' : 'Creatinine Unit'}
            name="creatinineUnit"
            value={creatinineUnit}
            onChange={(value) => setCreatinineUnit(value as 'mgdl' | 'umol')}
            options={[
              { value: 'mgdl', label: 'mg/dL' },
              { value: 'umol', label: 'μmol/L' },
            ]}
            orientation="horizontal"
          />
        </div>

        <div className="mb-6">
          <Input
            label={locale === 'tr' ? 'Serum Kreatinin' : 'Serum Creatinine'}
            type="number"
            step="0.01"
            value={creatinine}
            onChange={(e) => setCreatinine(e.target.value)}
            placeholder={creatinineUnit === 'mgdl' ? '1.0' : '88'}
            rightIcon={<span className="text-sm">{creatinineUnit === 'mgdl' ? 'mg/dL' : 'μmol/L'}</span>}
            required
          />
        </div>

        {error && <p className="mb-4 text-sm text-danger-main">{error}</p>}

        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {result && (
        <>
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Kreatinin Klirensi (CrCl)' : 'Creatinine Clearance (CrCl)'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-cyan-600">{result.clearance}</div>
              <div className="text-sm text-neutral-600">mL/min</div>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6">
              <div className="text-center">
                <div className="mb-2 text-sm font-medium text-neutral-700">
                  {locale === 'tr' ? 'Vücut Ağırlığına Göre' : 'Per Body Weight'}
                </div>
                <div className="text-3xl font-bold text-blue-600">
                  {result.clearancePerBodyWeight} <span className="text-sm">mL/min/kg</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6">
              <p className="text-center text-sm text-neutral-700">{result.interpretation[locale]}</p>
            </div>
          </Card>

          {/* Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-cyan-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <p><strong>{locale === 'tr' ? 'Normal Aralık:' : 'Normal Range:'}</strong> {info.normal}</p>
              <div className="rounded-lg bg-cyan-50 p-3">
                <strong>{locale === 'tr' ? 'Not:' : 'Note:'}</strong> {info.note}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default CreatinineClearance;
