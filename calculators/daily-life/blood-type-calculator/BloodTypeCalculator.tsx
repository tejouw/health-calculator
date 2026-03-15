'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge } from '@/components/ui';
import { calculateBloodType } from './bloodTypeLogic';
import { BloodGroup, RhFactor, BloodTypeResult, BloodType } from './bloodTypeTypes';
import { Droplets, Heart, Baby, ArrowRightLeft, AlertTriangle, Users } from 'lucide-react';

interface BloodTypeCalculatorProps {
  locale: 'en' | 'tr';
}

const bloodGroupOptions: BloodGroup[] = ['A', 'B', 'AB', 'O'];
const rhOptions: RhFactor[] = ['+', '-'];

const bloodTypeColors: Record<string, string> = {
  'A+': 'bg-red-100 text-red-800 border-red-200',
  'A-': 'bg-red-50 text-red-700 border-red-100',
  'B+': 'bg-blue-100 text-blue-800 border-blue-200',
  'B-': 'bg-blue-50 text-blue-700 border-blue-100',
  'AB+': 'bg-purple-100 text-purple-800 border-purple-200',
  'AB-': 'bg-purple-50 text-purple-700 border-purple-100',
  'O+': 'bg-green-100 text-green-800 border-green-200',
  'O-': 'bg-green-50 text-green-700 border-green-100',
};

const BloodTypeCalculator: React.FC<BloodTypeCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [parent1Group, setParent1Group] = useState<BloodGroup>('A');
  const [parent1Rh, setParent1Rh] = useState<RhFactor>('+');
  const [parent2Group, setParent2Group] = useState<BloodGroup>('O');
  const [parent2Rh, setParent2Rh] = useState<RhFactor>('+');
  const [result, setResult] = useState<BloodTypeResult | null>(null);

  const handleCalculate = () => {
    const res = calculateBloodType({
      parent1Group,
      parent1Rh,
      parent2Group,
      parent2Rh,
    });
    setResult(res);
  };

  const handleReset = () => {
    setParent1Group('A');
    setParent1Rh('+');
    setParent2Group('O');
    setParent2Rh('+');
    setResult(null);
  };

  const t = (key: string) => {
    const translations: Record<string, Record<string, string>> = {
      title: { en: 'Blood Type Calculator', tr: 'Kan Grubu Hesaplayıcı' },
      subtitle: {
        en: 'Calculate possible blood types for a child',
        tr: 'Bebeğin olası kan gruplarını hesaplayın',
      },
      parent1: { en: 'Parent 1', tr: '1. Ebeveyn' },
      parent2: { en: 'Parent 2', tr: '2. Ebeveyn' },
      bloodGroup: { en: 'Blood Group', tr: 'Kan Grubu' },
      rhFactor: { en: 'Rh Factor', tr: 'Rh Faktörü' },
      possibleTypes: { en: 'Possible Blood Types for Child', tr: 'Bebeğin Olası Kan Grupları' },
      probability: { en: 'Probability', tr: 'Olasılık' },
      impossibleTypes: { en: 'Not Possible', tr: 'Mümkün Değil' },
      rhWarning: {
        en: 'Rh Incompatibility Risk: When the mother is Rh- and the baby might be Rh+, consult your doctor about Rh incompatibility.',
        tr: 'Rh Uyuşmazlığı Riski: Anne Rh- ve bebek Rh+ olabiliyorsa, doktorunuza Rh uyuşmazlığı hakkında danışın.',
      },
      donorTitle: { en: 'Donor Compatibility', tr: 'Kan Bağışı Uyumu' },
      donorSubtitle: {
        en: 'Based on Parent 1\'s blood type',
        tr: '1. Ebeveynin kan grubuna göre',
      },
      canDonateTo: { en: 'Can donate to', tr: 'Kan verebilir' },
      canReceiveFrom: { en: 'Can receive from', tr: 'Kan alabilir' },
      punnettTitle: { en: 'Genetic Inheritance', tr: 'Genetik Kalıtım' },
      punnettSubtitle: {
        en: 'How ABO blood group genes combine',
        tr: 'ABO kan grubu genleri nasıl birleşir',
      },
    };
    return translations[key]?.[locale] || key;
  };

  const BloodTypeBadge = ({ type, size = 'sm' }: { type: BloodType; size?: 'sm' | 'md' }) => (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-bold ${
        size === 'md' ? 'px-3 py-1 text-sm' : 'text-xs'
      } ${bloodTypeColors[type] || 'bg-neutral-100 text-neutral-700'}`}
    >
      {type}
    </span>
  );

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-pink-500">
            <Droplets className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">{t('title')}</h2>
            <p className="text-sm text-neutral-600">{t('subtitle')}</p>
          </div>
        </div>

        {/* Parent 1 */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-4 w-4 text-neutral-500" />
            <h3 className="text-sm font-semibold text-neutral-700">{t('parent1')}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                {t('bloodGroup')}
              </label>
              <div className="flex gap-2">
                {bloodGroupOptions.map((group) => (
                  <button
                    key={`p1-${group}`}
                    onClick={() => setParent1Group(group)}
                    className={`flex-1 rounded-lg border-2 py-2.5 text-center text-sm font-bold transition-all ${
                      parent1Group === group
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                {t('rhFactor')}
              </label>
              <div className="flex gap-2">
                {rhOptions.map((rh) => (
                  <button
                    key={`p1rh-${rh}`}
                    onClick={() => setParent1Rh(rh)}
                    className={`flex-1 rounded-lg border-2 py-2.5 text-center text-sm font-bold transition-all ${
                      parent1Rh === rh
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Rh{rh}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200" />
          <Heart className="h-5 w-5 text-pink-400" />
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Parent 2 */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-4 w-4 text-neutral-500" />
            <h3 className="text-sm font-semibold text-neutral-700">{t('parent2')}</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                {t('bloodGroup')}
              </label>
              <div className="flex gap-2">
                {bloodGroupOptions.map((group) => (
                  <button
                    key={`p2-${group}`}
                    onClick={() => setParent2Group(group)}
                    className={`flex-1 rounded-lg border-2 py-2.5 text-center text-sm font-bold transition-all ${
                      parent2Group === group
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    {group}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-neutral-600">
                {t('rhFactor')}
              </label>
              <div className="flex gap-2">
                {rhOptions.map((rh) => (
                  <button
                    key={`p2rh-${rh}`}
                    onClick={() => setParent2Rh(rh)}
                    className={`flex-1 rounded-lg border-2 py-2.5 text-center text-sm font-bold transition-all ${
                      parent2Rh === rh
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    Rh{rh}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Results */}
      {result && (
        <>
          {/* Possible Blood Types */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-primary-50 to-secondary-50">
            <div className="mb-4 flex items-center gap-2">
              <Baby className="h-5 w-5 text-pink-500" />
              <h3 className="text-lg font-bold text-neutral-900">{t('possibleTypes')}</h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {result.possibleTypes.map((type) => (
                <div
                  key={type.bloodType}
                  className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <BloodTypeBadge type={type.bloodType} size="md" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      %{type.probability}
                    </div>
                    <div className="text-xs text-neutral-500">{t('probability')}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Impossible Types */}
            {result.impossibleTypes.length > 0 && (
              <div className="mt-4 border-t border-neutral-200 pt-4">
                <p className="mb-2 text-xs font-medium text-neutral-500">{t('impossibleTypes')}</p>
                <div className="flex flex-wrap gap-2">
                  {result.impossibleTypes.map((type) => (
                    <span
                      key={type}
                      className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-400 line-through"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Rh Warning */}
          {result.rhIncompatibilityRisk && (
            <Card className="animate-slide-up border-amber-200 bg-amber-50">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm text-amber-800">{t('rhWarning')}</p>
              </div>
            </Card>
          )}

          {/* Genetic Inheritance Explanation */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <ArrowRightLeft className="h-5 w-5 text-indigo-500" />
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{t('punnettTitle')}</h3>
                <p className="text-xs text-neutral-500">{t('punnettSubtitle')}</p>
              </div>
            </div>
            <GeneticChart
              parent1Group={parent1Group}
              parent2Group={parent2Group}
              locale={locale}
            />
          </Card>

          {/* Donor Compatibility */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Droplets className="h-5 w-5 text-red-500" />
              <div>
                <h3 className="text-lg font-bold text-neutral-900">{t('donorTitle')}</h3>
                <p className="text-xs text-neutral-500">
                  {t('donorSubtitle')} ({result.parent1})
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-2 text-xs font-semibold text-green-700">{t('canDonateTo')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {result.donorCompatibility.canDonateTo.map((type) => (
                    <BloodTypeBadge key={`donate-${type}`} type={type} />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
                <p className="mb-2 text-xs font-semibold text-blue-700">{t('canReceiveFrom')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {result.donorCompatibility.canReceiveFrom.map((type) => (
                    <BloodTypeBadge key={`receive-${type}`} type={type} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

// Punnett square-style genetic chart
function GeneticChart({
  parent1Group,
  parent2Group,
  locale,
}: {
  parent1Group: BloodGroup;
  parent2Group: BloodGroup;
  locale: 'en' | 'tr';
}) {
  const getAlleles = (group: BloodGroup): string[] => {
    switch (group) {
      case 'A': return ['A', 'O'];
      case 'B': return ['B', 'O'];
      case 'AB': return ['A', 'B'];
      case 'O': return ['O', 'O'];
    }
  };

  const p1Alleles = getAlleles(parent1Group);
  const p2Alleles = getAlleles(parent2Group);

  const getResultGroup = (a1: string, a2: string): string => {
    const pair = [a1, a2].sort().join('');
    const mapping: Record<string, string> = {
      'AA': 'A', 'AO': 'A', 'BB': 'B', 'BO': 'B', 'AB': 'AB', 'OO': 'O',
    };
    return mapping[pair] || '?';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-center text-sm">
        <thead>
          <tr>
            <th className="border border-neutral-200 bg-neutral-50 p-2 text-xs text-neutral-500">
              {locale === 'tr' ? 'Genler' : 'Genes'}
            </th>
            {p2Alleles.map((allele, i) => (
              <th
                key={`h-${i}`}
                className="border border-blue-200 bg-blue-50 p-2 font-bold text-blue-700"
              >
                {allele}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {p1Alleles.map((p1Allele, i) => (
            <tr key={`r-${i}`}>
              <td className="border border-red-200 bg-red-50 p-2 font-bold text-red-700">
                {p1Allele}
              </td>
              {p2Alleles.map((p2Allele, j) => {
                const resultGroup = getResultGroup(p1Allele, p2Allele);
                return (
                  <td
                    key={`c-${i}-${j}`}
                    className="border border-neutral-200 p-3"
                  >
                    <div className="text-xs text-neutral-400">
                      {p1Allele}{p2Allele}
                    </div>
                    <div className="text-lg font-bold text-neutral-800">
                      {resultGroup}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-neutral-500">
        {locale === 'tr'
          ? '* Punnett karesi yaklaşık olasılıkları gösterir. A ve B geni taşıyan ebeveynler (A veya B grubu) homozigot (AA/BB) veya heterozigot (AO/BO) olabilir.'
          : '* The Punnett square shows approximate probabilities. Parents carrying A or B genes may be homozygous (AA/BB) or heterozygous (AO/BO).'}
      </p>
    </div>
  );
}

export default BloodTypeCalculator;
