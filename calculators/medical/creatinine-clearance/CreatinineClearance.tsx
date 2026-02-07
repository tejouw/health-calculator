'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card } from '@/components/ui';
import { calculateCreatinineClearance, creatinineInfo } from './creatinineLogic';
import { CreatinineClearanceInput } from './creatinineTypes';
import { Beaker, Info, Activity, AlertTriangle, Pill, TrendingDown, Users } from 'lucide-react';

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
  const [height, setHeight] = useState<string>('');
  const [heightUnit, setHeightUnit] = useState<'cm' | 'in'>('cm');
  const [creatinine, setCreatinine] = useState<string>('');
  const [creatinineUnit, setCreatinineUnit] = useState<'mgdl' | 'umol'>('mgdl');
  const [race, setRace] = useState<'other' | 'african'>('other');
  const [result, setResult] = useState<ReturnType<typeof calculateCreatinineClearance> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
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

    if (!heightNum || heightNum <= 0) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir boy girin' : 'Please enter a valid height');
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
      height: heightNum,
      heightUnit,
      creatinine: creatinineNum,
      creatinineUnit,
      race,
    };

    const clearanceResult = calculateCreatinineClearance(input);
    setResult(clearanceResult);
  };

  const handleReset = () => {
    setAge('');
    setWeight('');
    setHeight('');
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
              {locale === 'tr' ? 'Cockcroft-Gault, MDRD & CKD-EPI' : 'Cockcroft-Gault, MDRD & CKD-EPI'}
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

        {/* Height */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Boy Birimi' : 'Height Unit'}
            name="heightUnit"
            value={heightUnit}
            onChange={(value) => setHeightUnit(value as 'cm' | 'in')}
            options={[
              { value: 'cm', label: tUnits('cm') },
              { value: 'in', label: tUnits('in') },
            ]}
            orientation="horizontal"
          />
        </div>

        <div className="mb-6">
          <Input
            label={t('height')}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={heightUnit === 'cm' ? '170' : '67'}
            rightIcon={<span className="text-sm">{heightUnit}</span>}
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

        {/* Race */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Etnik Köken' : 'Race/Ethnicity'}
            name="race"
            value={race}
            onChange={(value) => setRace(value as 'other' | 'african')}
            options={[
              { value: 'other', label: locale === 'tr' ? 'Diğer' : 'Other' },
              { value: 'african', label: locale === 'tr' ? 'Afrika Kökenli' : 'African American' },
            ]}
            orientation="horizontal"
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
          {/* Main Results - Multiple Formulas */}
          <Card className="animate-slide-up border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50">
            <div className="mb-6 text-center">
              <h3 className="mb-6 text-lg font-bold text-neutral-800">
                {locale === 'tr' ? 'Böbrek Fonksiyonu Sonuçları' : 'Kidney Function Results'}
              </h3>

              <div className="grid gap-6 md:grid-cols-3">
                {/* Cockcroft-Gault */}
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-medium uppercase text-neutral-500">
                    Cockcroft-Gault
                  </div>
                  <div className="text-4xl font-bold text-cyan-600">{result.clearance}</div>
                  <div className="text-xs text-neutral-600">mL/min</div>
                </div>

                {/* MDRD */}
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-medium uppercase text-neutral-500">
                    MDRD eGFR
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{result.mdrd}</div>
                  <div className="text-xs text-neutral-600">mL/min/1.73m²</div>
                </div>

                {/* CKD-EPI */}
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-2 text-xs font-medium uppercase text-neutral-500">
                    CKD-EPI eGFR
                  </div>
                  <div className="text-4xl font-bold text-indigo-600">{result.ckdEpi}</div>
                  <div className="text-xs text-neutral-600">mL/min/1.73m²</div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="mt-6 grid gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mb-1 text-xs font-medium text-neutral-600">
                  {locale === 'tr' ? 'BSA' : 'BSA'}
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {result.bsa} <span className="text-sm">m²</span>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-xs font-medium text-neutral-600">
                  {locale === 'tr' ? 'CrCl/Kilo' : 'CrCl/Weight'}
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {result.clearancePerBodyWeight} <span className="text-sm">mL/min/kg</span>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-xs font-medium text-neutral-600">
                  {locale === 'tr' ? 'CrCl/BSA' : 'CrCl/BSA'}
                </div>
                <div className="text-2xl font-bold text-neutral-800">
                  {result.clearancePerBSA} <span className="text-sm">mL/min/1.73m²</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6">
              <p className="text-center text-sm text-neutral-700">{result.interpretation[locale]}</p>
            </div>
          </Card>

          {/* CKD Stage */}
          <Card className="animate-slide-up border-l-4 border-l-indigo-500">
            <div className="mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Kronik Böbrek Hastalığı (CKD) Evresi' : 'Chronic Kidney Disease (CKD) Stage'}
              </h3>
            </div>
            <div className="rounded-lg bg-indigo-50 p-4">
              <div className="mb-2 text-2xl font-bold text-indigo-700">{result.ckdStage.name[locale]}</div>
              <p className="text-sm text-neutral-700">{result.ckdStage.description[locale]}</p>
            </div>
          </Card>

          {/* Drug Adjustment */}
          <Card className="animate-slide-up border-l-4 border-l-orange-500">
            <div className="mb-4 flex items-center gap-2">
              <Pill className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'İlaç Doz Ayarlaması' : 'Drug Dose Adjustment'}
              </h3>
            </div>
            <div className="rounded-lg bg-orange-50 p-4">
              <p className="text-sm text-neutral-700">{result.drugAdjustment[locale]}</p>
            </div>
          </Card>

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <Card className="animate-slide-up border-l-4 border-l-green-500">
              <div className="mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Öneriler' : 'Recommendations'}
                </h3>
              </div>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-700">
                      {index + 1}
                    </span>
                    <span>{rec[locale]}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Risk Factors */}
          {result.riskFactors.length > 0 && (
            <Card className="animate-slide-up border-l-4 border-l-red-500">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Risk Faktörleri' : 'Risk Factors'}
                </h3>
              </div>
              <ul className="space-y-2">
                {result.riskFactors.map((risk, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                    <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                    <span>{risk[locale]}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <p><strong>{locale === 'tr' ? 'Normal Aralık:' : 'Normal Range:'}</strong> {info.normal}</p>

              <div className="mt-4 space-y-2 rounded-lg bg-blue-50 p-4">
                <h4 className="font-semibold text-neutral-800">
                  {locale === 'tr' ? 'Kullanılan Formüller:' : 'Formulas Used:'}
                </h4>
                <ul className="space-y-1 text-xs">
                  <li><strong>• Cockcroft-Gault:</strong> {info.formulas.cockcroftGault}</li>
                  <li><strong>• MDRD:</strong> {info.formulas.mdrd}</li>
                  <li><strong>• CKD-EPI:</strong> {info.formulas.ckdEpi}</li>
                </ul>
              </div>

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
