'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { Calculator } from 'lucide-react';

interface MAPFormulaExplainerProps {
  systolic: number;
  diastolic: number;
  map: number;
  locale: 'en' | 'tr';
}

const MAPFormulaExplainer: React.FC<MAPFormulaExplainerProps> = ({
  systolic,
  diastolic,
  map,
  locale,
}) => {
  const pulsePressure = systolic - diastolic;

  return (
    <Card>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
          <Calculator className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">
          {locale === 'tr' ? 'Hesaplama Detayları' : 'Calculation Breakdown'}
        </h3>
      </div>

      <p className="mb-4 text-sm text-neutral-700">
        {locale === 'tr'
          ? 'Kalp her döngünün yaklaşık üçte ikisini diyastolde geçirdiği için MAP formülü diyastolik basıncı iki katı olarak ağırlıklandırır.'
          : 'Because the heart spends roughly two-thirds of each cycle in diastole, the MAP formula weights diastolic pressure twice as heavily.'}
      </p>

      <div className="space-y-3 rounded-lg bg-neutral-50 p-4 font-mono text-sm">
        <div>
          <span className="text-neutral-500">
            {locale === 'tr' ? '// Standart formül' : '// Standard formula'}
          </span>
        </div>
        <div className="text-neutral-900">
          MAP = (2 &times; DBP + SBP) / 3
        </div>
        <div className="border-t border-neutral-200 pt-3">
          <span className="text-neutral-500">
            {locale === 'tr' ? '// Sizin değerleriniz' : '// Your values'}
          </span>
        </div>
        <div className="text-neutral-900">
          MAP = (2 &times; {diastolic} + {systolic}) / 3
        </div>
        <div className="text-neutral-900">
          MAP = ({2 * diastolic} + {systolic}) / 3
        </div>
        <div className="text-neutral-900">
          MAP = {2 * diastolic + systolic} / 3
        </div>
        <div className="font-bold text-primary-600">
          MAP = {map} mmHg
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-blue-50 p-3">
          <p className="text-xs font-semibold text-blue-900">
            {locale === 'tr' ? 'Nabız Basıncı' : 'Pulse Pressure'}
          </p>
          <p className="mt-1 text-xs text-blue-800">
            SBP - DBP = {systolic} - {diastolic} ={' '}
            <strong>{pulsePressure} mmHg</strong>
          </p>
          <p className="mt-1 text-xs text-blue-700">
            {locale === 'tr'
              ? 'Normal aralık: 30-50 mmHg.'
              : 'Normal range: 30-50 mmHg.'}
          </p>
        </div>
        <div className="rounded-lg bg-purple-50 p-3">
          <p className="text-xs font-semibold text-purple-900">
            {locale === 'tr' ? 'Eşdeğer İfade' : 'Equivalent Form'}
          </p>
          <p className="mt-1 text-xs text-purple-800">
            MAP = DBP + (SBP - DBP) / 3
          </p>
          <p className="mt-1 text-xs text-purple-700">
            = {diastolic} + {pulsePressure} / 3 = {map} mmHg
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        {locale === 'tr'
          ? 'Not: Bu formül 60-100 atım/dakika dinlenme kalp hızlarında en doğru sonucu verir. Yüksek kalp hızlarında MAP gerçek değerin biraz altında çıkabilir.'
          : 'Note: This formula is most accurate at resting heart rates of 60-100 bpm. At higher rates, the result may slightly underestimate true MAP.'}
      </p>
    </Card>
  );
};

export default MAPFormulaExplainer;
