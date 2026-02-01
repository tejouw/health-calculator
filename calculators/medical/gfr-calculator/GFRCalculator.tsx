'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateGFR, gfrInfo } from './gfrLogic';
import { GFRInput, gfrStages } from './gfrTypes';
import { Heart, AlertCircle } from 'lucide-react';

interface GFRCalculatorProps {
  locale: 'en' | 'tr';
}

const GFRCalculator: React.FC<GFRCalculatorProps> = ({ locale }) => {
  const t = useTranslations('form');
  const tCommon = useTranslations('common');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [creatinine, setCreatinine] = useState<string>('');
  const [creatinineUnit, setCreatinineUnit] = useState<'mgdl' | 'umol'>('mgdl');
  const [race, setRace] = useState<'black' | 'other'>('other');
  const [result, setResult] = useState<ReturnType<typeof calculateGFR> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseInt(age);
    const creatinineNum = parseFloat(creatinine);

    if (!ageNum || ageNum < 18 || ageNum > 120) {
      setError(
        locale === 'tr' ? 'Lütfen 18-120 arası geçerli bir yaş girin' : 'Please enter a valid age (18-120)'
      );
      return;
    }

    if (!creatinineNum || creatinineNum <= 0) {
      setError(
        locale === 'tr' ? 'Lütfen geçerli bir kreatinin değeri girin' : 'Please enter a valid creatinine value'
      );
      return;
    }

    const input: GFRInput = {
      age: ageNum,
      gender,
      creatinine: creatinineNum,
      creatinineUnit,
      race,
    };

    const gfrResult = calculateGFR(input);
    setResult(gfrResult);
  };

  const handleReset = () => {
    setAge('');
    setCreatinine('');
    setResult(null);
    setError('');
  };

  const info = gfrInfo[locale];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'GFR Hesaplayıcı (eGFR)' : 'GFR Calculator (eGFR)'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr' ? 'Böbrek fonksiyonunuzu hesaplayın' : 'Calculate your kidney function'}
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

        {/* Creatinine */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Kreatinin Birimi' : 'Creatinine Unit'}
            name="creatinineUnit"
            value={creatinineUnit}
            onChange={(value) => setCreatinineUnit(value as 'mgdl' | 'umol')}
            options={[
              { value: 'mgdl', label: 'mg/dL', description: locale === 'tr' ? 'Milligram/Desilitre' : 'Milligrams per Deciliter' },
              { value: 'umol', label: 'μmol/L', description: locale === 'tr' ? 'Mikromol/Litre' : 'Micromoles per Liter' },
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

        {/* Race (optional) */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Irk (Opsiyonel)' : 'Race (Optional)'}
            name="race"
            value={race}
            onChange={(value) => setRace(value as 'black' | 'other')}
            options={[
              { value: 'other', label: locale === 'tr' ? 'Diğer' : 'Other' },
              { value: 'black', label: locale === 'tr' ? 'Siyah/Afro-Amerikan' : 'Black/African American' },
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
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Tahmini GFR (eGFR)' : 'Estimated GFR (eGFR)'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-blue-600">{result.gfr}</div>
              <div className="mb-4 text-sm text-neutral-600">mL/min/1.73m²</div>
              <Badge
                variant={result.category.color}
                size="lg"
              >
                {result.category.label[locale]}
              </Badge>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-6">
              <p className="text-center text-sm text-neutral-700">{result.category.description[locale]}</p>
            </div>
          </Card>

          {/* CKD Stages */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Kronik Böbrek Hastalığı (CKD) Evreleri' : 'Chronic Kidney Disease (CKD) Stages'}
            </h3>
            <div className="space-y-3">
              {Object.entries(gfrStages).map(([stageNum, stageData]) => (
                <div
                  key={stageNum}
                  className={`rounded-lg border-2 p-3 ${
                    result.stage.toString() === stageNum
                      ? 'border-blue-300 bg-blue-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">{stageData.label[locale]}</div>
                      <div className="text-sm text-neutral-600">
                        GFR: {stageData.range} mL/min/1.73m²
                      </div>
                    </div>
                    {result.stage.toString() === stageNum && (
                      <Badge variant="primary">{locale === 'tr' ? 'Sizin' : 'You'}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Medical Disclaimer */}
          <Card className="animate-slide-up border-2 border-orange-200 bg-orange-50">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 flex-shrink-0 text-orange-600" />
              <div className="text-sm text-neutral-700">
                <strong>{locale === 'tr' ? 'Tıbbi Uyarı:' : 'Medical Disclaimer:'}</strong>{' '}
                {locale === 'tr'
                  ? 'Bu hesaplayıcı sadece bilgilendirme amaçlıdır. GFR sonuçları tıbbi bir teşhis yerine geçmez. Böbrek fonksiyonu konusunda endişeleriniz varsa sağlık hizmeti sağlayıcınıza danışın.'
                  : 'This calculator is for informational purposes only. GFR results do not substitute for medical diagnosis. Consult your healthcare provider if you have concerns about kidney function.'}
              </div>
            </div>
          </Card>

          {/* Information */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">{info.title}</h3>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <p><strong>{locale === 'tr' ? 'Formül:' : 'Formula:'}</strong> {info.formula}</p>
              <p><strong>{locale === 'tr' ? 'Birim:' : 'Unit:'}</strong> {info.units}</p>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default GFRCalculator;
