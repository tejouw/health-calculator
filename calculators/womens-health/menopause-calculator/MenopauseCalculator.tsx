'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, Input, Select, RadioGroup } from '@/components/ui';
import {
  Sparkles,
  CalendarClock,
  TrendingDown,
  TrendingUp,
  Info,
  Users,
  Activity,
  CircleAlert,
} from 'lucide-react';
import { calculateMenopause, menopauseStages } from './menopauseLogic';
import {
  ContraceptiveUse,
  MenopauseInput,
  MenopauseResult,
  SmokingStatus,
} from './menopauseTypes';

interface MenopauseCalculatorProps {
  locale: 'en' | 'tr';
}

const MenopauseCalculator: React.FC<MenopauseCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [currentAge, setCurrentAge] = useState<string>('');
  const [motherAge, setMotherAge] = useState<string>('');
  const [smoking, setSmoking] = useState<SmokingStatus>('never');
  const [bmi, setBmi] = useState<string>('');
  const [menarche, setMenarche] = useState<string>('');
  const [pregnancies, setPregnancies] = useState<string>('');
  const [contraceptive, setContraceptive] = useState<ContraceptiveUse>('none');
  const [familyEarly, setFamilyEarly] = useState<'yes' | 'no'>('no');
  const [result, setResult] = useState<MenopauseResult | null>(null);
  const [error, setError] = useState<string>('');

  const t = (en: string, tr: string) => (locale === 'tr' ? tr : en);

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(currentAge);
    if (!ageNum || ageNum < 18 || ageNum > 80) {
      setError(t('Please enter a valid age between 18 and 80', 'Lütfen 18 ile 80 arasında geçerli bir yaş girin'));
      return;
    }

    const input: MenopauseInput = {
      currentAge: ageNum,
      motherMenopauseAge: motherAge ? parseFloat(motherAge) : undefined,
      smokingStatus: smoking,
      bmi: bmi ? parseFloat(bmi) : undefined,
      menarcheAge: menarche ? parseFloat(menarche) : undefined,
      pregnancies: pregnancies !== '' ? parseInt(pregnancies, 10) : undefined,
      contraceptiveUse: contraceptive,
      familyEarlyMenopause: familyEarly === 'yes',
    };

    setResult(calculateMenopause(input));
  };

  const handleReset = () => {
    setCurrentAge('');
    setMotherAge('');
    setSmoking('never');
    setBmi('');
    setMenarche('');
    setPregnancies('');
    setContraceptive('none');
    setFamilyEarly('no');
    setResult(null);
    setError('');
  };

  const stageInfo = result ? menopauseStages[result.stage] : null;

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {t('Menopause Calculator', 'Menopoz Hesaplayıcı')}
            </h2>
            <p className="text-sm text-neutral-600">
              {t(
                'Estimate your menopause age and current stage',
                'Menopoz yaşınızı ve şu anki döneminizi tahmin edin'
              )}
            </p>
          </div>
        </div>

        {/* Required: Current Age */}
        <div className="mb-6">
          <Input
            label={t('Your current age', 'Mevcut yaşınız')}
            type="number"
            value={currentAge}
            onChange={(e) => setCurrentAge(e.target.value)}
            placeholder="42"
            min="18"
            max="80"
            required
            helperText={t('Required - your age in years', 'Zorunlu - yıl olarak yaşınız')}
          />
        </div>

        {/* Genetic Factors */}
        <div className="mb-6 rounded-lg border border-purple-100 bg-purple-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-600" />
            <h3 className="font-semibold text-neutral-900">
              {t('Genetic Factors', 'Genetik Faktörler')}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label={t("Mother's menopause age (optional)", 'Annenizin menopoz yaşı (opsiyonel)')}
              type="number"
              value={motherAge}
              onChange={(e) => setMotherAge(e.target.value)}
              placeholder="51"
              min="30"
              max="65"
              helperText={t('Strongest genetic predictor', 'En güçlü genetik belirteç')}
            />
            <Select
              label={t('Family history of early menopause', 'Ailede erken menopoz öyküsü')}
              value={familyEarly}
              onChange={(e) => setFamilyEarly(e.target.value as 'yes' | 'no')}
              options={[
                { value: 'no', label: t('No', 'Hayır') },
                { value: 'yes', label: t('Yes (before age 45)', 'Evet (45 yaşından önce)') },
              ]}
            />
          </div>
        </div>

        {/* Lifestyle Factors */}
        <div className="mb-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Activity className="h-5 w-5 text-neutral-600" />
            <h3 className="font-semibold text-neutral-900">
              {t('Lifestyle & Health', 'Yaşam Tarzı ve Sağlık')}
            </h3>
          </div>
          <div className="mb-4">
            <RadioGroup
              label={t('Smoking status', 'Sigara kullanımı')}
              name="smoking"
              value={smoking}
              onChange={(value) => setSmoking(value as SmokingStatus)}
              options={[
                { value: 'never', label: t('Never smoked', 'Hiç içmedim') },
                { value: 'former', label: t('Former smoker', 'Eski içici') },
                { value: 'current', label: t('Current smoker', 'Aktif içici') },
              ]}
              orientation="horizontal"
            />
          </div>
          <Input
            label={t('Your BMI (optional)', 'VKİ değeriniz (opsiyonel)')}
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            placeholder="23.5"
            min="10"
            max="60"
            step="0.1"
            helperText={t(
              'Body mass index in kg/m² - low BMI is linked to earlier menopause',
              'Vücut kitle indeksi (kg/m²) - düşük VKİ erken menopozla ilişkilidir'
            )}
          />
        </div>

        {/* Reproductive History */}
        <div className="mb-6 rounded-lg border border-pink-100 bg-pink-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-pink-600" />
            <h3 className="font-semibold text-neutral-900">
              {t('Reproductive History', 'Üreme Geçmişi')}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label={t('Age at first period (optional)', 'İlk adet yaşı (opsiyonel)')}
              type="number"
              value={menarche}
              onChange={(e) => setMenarche(e.target.value)}
              placeholder="13"
              min="8"
              max="20"
            />
            <Input
              label={t('Number of pregnancies (optional)', 'Hamilelik sayısı (opsiyonel)')}
              type="number"
              value={pregnancies}
              onChange={(e) => setPregnancies(e.target.value)}
              placeholder="2"
              min="0"
              max="15"
            />
          </div>
          <div className="mt-4">
            <Select
              label={t('Oral contraceptive use', 'Doğum kontrol hapı kullanımı')}
              value={contraceptive}
              onChange={(e) => setContraceptive(e.target.value as ContraceptiveUse)}
              options={[
                { value: 'none', label: t('Never / rarely', 'Hiç / nadiren') },
                { value: 'lt2', label: t('Less than 2 years', '2 yıldan az') },
                { value: '2to5', label: t('2 to 5 years', '2 ila 5 yıl') },
                { value: 'gt5', label: t('More than 5 years', '5 yıldan fazla') },
              ]}
            />
          </div>
        </div>

        {error && <p className="mt-2 text-sm text-danger-main">{error}</p>}

        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {result && stageInfo && (
        <>
          <Card className="animate-slide-up border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-fuchsia-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {t('Estimated Menopause Age', 'Tahmini Menopoz Yaşı')}
              </h3>
              <div className="mb-2 text-6xl font-bold text-purple-600">{result.estimatedAge}</div>
              <p className="mb-4 text-sm text-neutral-600">
                {t('Likely range:', 'Olası aralık:')}{' '}
                <span className="font-medium text-neutral-800">
                  {result.rangeMin} - {result.rangeMax}
                </span>
              </p>
              <Badge variant={stageInfo.color} size="lg">
                {stageInfo.label[locale]}
              </Badge>

              <div className="mx-auto mt-6 max-w-md rounded-lg bg-white/80 p-4 text-left">
                <div className="flex items-center gap-2">
                  {result.yearsRemaining > 0 ? (
                    <TrendingDown className="h-5 w-5 text-purple-600" />
                  ) : (
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  )}
                  <span className="text-sm font-semibold text-neutral-900">
                    {result.yearsRemaining > 0
                      ? t(
                          `Approximately ${result.yearsRemaining} years until expected menopause`,
                          `Beklenen menopoza yaklaşık ${result.yearsRemaining} yıl var`
                        )
                      : t(
                          `You are approximately ${Math.abs(result.yearsRemaining)} years past the estimated menopause age`,
                          `Tahmini menopoz yaşını yaklaşık ${Math.abs(result.yearsRemaining)} yıl geçmiş durumdasınız`
                        )}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {t('Your current stage', 'Mevcut döneminiz')}
                </h4>
                <p className="text-sm text-neutral-700">{stageInfo.description[locale]}</p>
              </div>
            </div>
          </Card>

          {/* Contributing factors */}
          {result.factors.length > 0 && (
            <Card className="animate-slide-up">
              <div className="mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-purple-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {t('Factors Influencing Your Estimate', 'Tahmininizi Etkileyen Faktörler')}
                </h3>
              </div>
              <div className="space-y-2">
                {result.factors.map((factor) => (
                  <div
                    key={factor.key}
                    className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3"
                  >
                    <span className="text-sm text-neutral-800">{factor.label[locale]}</span>
                    <span
                      className={`text-sm font-semibold ${
                        factor.impact >= 0 ? 'text-emerald-600' : 'text-rose-600'
                      }`}
                    >
                      {factor.impact >= 0 ? '+' : ''}
                      {factor.impact.toFixed(1)}{' '}
                      {t('yrs', 'yıl')}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-neutral-500">
                {t(
                  'Positive values shift menopause later, negative values shift it earlier.',
                  'Pozitif değerler menopozu ileri, negatif değerler ise daha erkene alır.'
                )}
              </p>
            </Card>
          )}

          {/* Stage timeline */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {t('Menopause Stages', 'Menopoz Dönemleri')}
            </h3>
            <div className="space-y-3">
              {(
                Object.keys(menopauseStages) as Array<keyof typeof menopauseStages>
              ).map((key) => {
                const stage = menopauseStages[key];
                const isCurrent = result.stage === key;
                return (
                  <div
                    key={key}
                    className={`rounded-lg border-2 p-3 ${
                      isCurrent
                        ? 'border-purple-300 bg-purple-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold text-neutral-900">
                          {stage.label[locale]}
                        </div>
                        <div className="mt-1 text-sm text-neutral-600">
                          {stage.description[locale]}
                        </div>
                      </div>
                      {isCurrent && (
                        <Badge variant="primary">{t('You', 'Siz')}</Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Early menopause warning */}
          {result.estimatedAge < 45 && (
            <Card className="animate-slide-up border-2 border-amber-200 bg-amber-50">
              <div className="flex gap-3">
                <CircleAlert className="h-5 w-5 flex-shrink-0 text-amber-600" />
                <div>
                  <h3 className="mb-2 font-bold text-amber-900">
                    {t('Early Menopause Consideration', 'Erken Menopoz Uyarısı')}
                  </h3>
                  <p className="text-sm text-amber-900">
                    {t(
                      'Your estimate is under 45, which is considered early menopause. Talk to a gynecologist about bone health, cardiovascular prevention and possible hormone therapy options.',
                      'Tahmininiz 45 yaşın altında ve bu erken menopoz olarak kabul edilir. Kemik sağlığı, kalp-damar koruması ve olası hormon tedavisi seçenekleri için bir jinekoloğa danışın.'
                    )}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default MenopauseCalculator;
