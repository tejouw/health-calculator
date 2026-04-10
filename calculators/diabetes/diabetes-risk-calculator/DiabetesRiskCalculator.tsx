'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, RadioGroup, Input, Select } from '@/components/ui';
import { calculateDiabetesRisk, diabetesRiskInfo } from './diabetesRiskLogic';
import { DiabetesRiskInput, diabetesRiskSeverities } from './diabetesRiskTypes';
import { Activity, AlertCircle, Info, User, Ruler, HeartPulse } from 'lucide-react';

interface DiabetesRiskCalculatorProps {
  locale: 'en' | 'tr';
}

const DiabetesRiskCalculator: React.FC<DiabetesRiskCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female' | ''>('');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [waist, setWaist] = useState<string>('');
  const [physicallyActive, setPhysicallyActive] = useState<string>('');
  const [eatsVegFruits, setEatsVegFruits] = useState<string>('');
  const [bpMedication, setBpMedication] = useState<string>('');
  const [highGlucoseHistory, setHighGlucoseHistory] = useState<string>('');
  const [familyHistory, setFamilyHistory] = useState<'none' | 'second-degree' | 'first-degree' | ''>('');

  const [result, setResult] = useState<ReturnType<typeof calculateDiabetesRisk> | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const ageNum = parseFloat(age);
    const heightNum = parseFloat(height);
    const weightNum = parseFloat(weight);
    const waistNum = parseFloat(waist);

    if (
      !ageNum ||
      !heightNum ||
      !weightNum ||
      !waistNum ||
      !gender ||
      !physicallyActive ||
      !eatsVegFruits ||
      !bpMedication ||
      !highGlucoseHistory ||
      !familyHistory
    ) {
      setError(
        locale === 'tr'
          ? 'Lütfen tüm alanları doldurun ve tüm soruları cevaplayın'
          : 'Please fill in all fields and answer all questions'
      );
      return;
    }

    if (ageNum < 18 || ageNum > 120) {
      setError(
        locale === 'tr'
          ? 'Lütfen geçerli bir yaş girin (18-120)'
          : 'Please enter a valid age (18-120)'
      );
      return;
    }

    const heightInMeters = heightNum / 100;
    const bmi = weightNum / (heightInMeters * heightInMeters);

    const input: DiabetesRiskInput = {
      age: ageNum,
      gender: gender as 'male' | 'female',
      bmi,
      waistCircumference: waistNum,
      physicallyActive: physicallyActive === 'yes',
      eatsVegetablesFruits: eatsVegFruits === 'yes',
      bloodPressureMedication: bpMedication === 'yes',
      highBloodGlucoseHistory: highGlucoseHistory === 'yes',
      familyHistory: familyHistory as 'none' | 'second-degree' | 'first-degree',
    };

    setResult(calculateDiabetesRisk(input));
  };

  const handleReset = () => {
    setAge('');
    setGender('');
    setHeight('');
    setWeight('');
    setWaist('');
    setPhysicallyActive('');
    setEatsVegFruits('');
    setBpMedication('');
    setHighGlucoseHistory('');
    setFamilyHistory('');
    setResult(null);
    setError('');
  };

  const info = diabetesRiskInfo[locale];

  const yesNoOptions = [
    { value: 'yes', label: locale === 'tr' ? 'Evet' : 'Yes' },
    { value: 'no', label: locale === 'tr' ? 'Hayır' : 'No' },
  ];

  const familyHistoryOptions = [
    {
      value: 'none',
      label:
        locale === 'tr'
          ? 'Hayır, ailemde diyabet yok'
          : 'No diabetes in family',
    },
    {
      value: 'second-degree',
      label:
        locale === 'tr'
          ? 'Evet: büyükanne, büyükbaba, teyze, amca veya kuzen'
          : 'Yes: grandparent, aunt, uncle or cousin',
    },
    {
      value: 'first-degree',
      label:
        locale === 'tr'
          ? 'Evet: anne, baba, kardeş veya çocuk'
          : 'Yes: parent, sibling or child',
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-500">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr'
                ? 'FINDRISC Diyabet Riski Testi'
                : 'FINDRISC Diabetes Risk Test'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? '10 yıllık tip 2 diyabet riskinizi tahmin edin'
                : 'Estimate your 10-year type 2 diabetes risk'}
            </p>
          </div>
        </div>

        {/* Demographics */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-rose-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-rose-600" />
            <h3 className="font-semibold text-neutral-900">
              {locale === 'tr' ? '1. Demografik Bilgiler' : '1. Demographics'}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {locale === 'tr' ? 'Yaş' : 'Age'}
              </label>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder={locale === 'tr' ? 'Örn: 45' : 'e.g., 45'}
                min="18"
                max="120"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                {locale === 'tr' ? 'Cinsiyet' : 'Gender'}
              </label>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female' | '')}
                options={[
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                  { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Body measurements */}
        <div className="mb-6 rounded-lg border border-rose-200 bg-rose-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Ruler className="h-5 w-5 text-rose-600" />
            <h3 className="font-semibold text-neutral-900">
              {locale === 'tr' ? '2. Vücut Ölçüleri' : '2. Body Measurements'}
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              label={locale === 'tr' ? 'Boy' : 'Height'}
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              rightIcon={<span className="text-sm">{tUnits('cm')}</span>}
            />
            <Input
              label={locale === 'tr' ? 'Kilo' : 'Weight'}
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="75"
              rightIcon={<span className="text-sm">{tUnits('kg')}</span>}
            />
            <Input
              label={locale === 'tr' ? 'Bel Çevresi' : 'Waist Circumference'}
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              placeholder={gender === 'female' ? '82' : '94'}
              rightIcon={<span className="text-sm">{tUnits('cm')}</span>}
            />
          </div>
          <p className="mt-3 text-xs text-neutral-500">
            {locale === 'tr'
              ? 'Bel çevrenizi göbek deliğinizin hizasından ölçün.'
              : 'Measure your waist circumference at the level of your navel.'}
          </p>
        </div>

        {/* Lifestyle questions */}
        <div className="mb-6 space-y-4">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 font-medium text-neutral-900">
              {locale === 'tr'
                ? '3. Her gün en az 30 dakika fiziksel aktivite yapıyor musunuz (işyerinde veya boş zamanlarınızda)?'
                : '3. Do you usually get at least 30 minutes of physical activity every day (at work and during leisure)?'}
            </div>
            <RadioGroup
              name="active"
              value={physicallyActive}
              onChange={setPhysicallyActive}
              options={yesNoOptions}
              orientation="horizontal"
            />
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 font-medium text-neutral-900">
              {locale === 'tr'
                ? '4. Her gün sebze, meyve veya dut tüketiyor musunuz?'
                : '4. Do you eat vegetables, fruits or berries every day?'}
            </div>
            <RadioGroup
              name="veg"
              value={eatsVegFruits}
              onChange={setEatsVegFruits}
              options={yesNoOptions}
              orientation="horizontal"
            />
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 font-medium text-neutral-900">
              {locale === 'tr'
                ? '5. Şu anda düzenli olarak yüksek tansiyon için ilaç kullanıyor musunuz?'
                : '5. Have you ever regularly taken medication for high blood pressure?'}
            </div>
            <RadioGroup
              name="bp"
              value={bpMedication}
              onChange={setBpMedication}
              options={yesNoOptions}
              orientation="horizontal"
            />
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 font-medium text-neutral-900">
              {locale === 'tr'
                ? '6. Herhangi bir zamanda bir doktor tarafından kan şekerinizin yüksek olduğu söylendi mi (örneğin sağlık muayenesinde, hastalık sırasında veya hamilelikte)?'
                : '6. Have you ever been found to have high blood glucose by a doctor (e.g. in a health examination, during an illness, during pregnancy)?'}
            </div>
            <RadioGroup
              name="glucose"
              value={highGlucoseHistory}
              onChange={setHighGlucoseHistory}
              options={yesNoOptions}
              orientation="horizontal"
            />
          </div>

          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <div className="mb-3 font-medium text-neutral-900">
              {locale === 'tr'
                ? '7. Ailenizde (yakın veya uzak akrabalarınızda) tip 1 veya tip 2 diyabet tanısı almış biri var mı?'
                : '7. Have any of your family members or other relatives been diagnosed with diabetes (type 1 or type 2)?'}
            </div>
            <RadioGroup
              name="family"
              value={familyHistory}
              onChange={(v) => setFamilyHistory(v as 'none' | 'second-degree' | 'first-degree')}
              options={familyHistoryOptions}
              orientation="vertical"
            />
          </div>
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        <div className="mt-6 flex gap-3">
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
          {/* Main result */}
          <Card className="animate-slide-up border-2 border-rose-100 bg-gradient-to-br from-rose-50 to-red-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'FINDRISC Toplam Skoru' : 'FINDRISC Total Score'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-rose-600">{result.totalScore}</div>
              <div className="mb-4 text-sm text-neutral-600">
                {locale === 'tr' ? '26 üzerinden' : 'out of 26'}
              </div>
              <Badge variant={result.category.color} size="lg">
                {result.category.label[locale]}
              </Badge>
              <div className="mt-4 text-sm text-neutral-700">
                {locale === 'tr' ? '10 yıllık tahmini risk: ' : 'Estimated 10-year risk: '}
                <span className="font-bold text-rose-700">{result.tenYearRiskPercent}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Değerlendirme' : 'Assessment'}
                </h4>
                <p className="text-sm text-neutral-700">{result.category.description[locale]}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'Öneri' : 'Recommendation'}
                </h4>
                <p className="text-sm text-neutral-700">{result.category.recommendation[locale]}</p>
              </div>
            </div>
          </Card>

          {/* Score breakdown */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <HeartPulse className="h-5 w-5 text-rose-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Puan Dağılımı' : 'Score Breakdown'}
              </h3>
            </div>
            <div className="space-y-2 text-sm">
              {[
                {
                  label: locale === 'tr' ? 'Yaş' : 'Age',
                  value: result.breakdown.ageScore,
                  max: 4,
                },
                {
                  label: locale === 'tr' ? 'Vücut Kitle İndeksi (VKİ)' : 'Body Mass Index (BMI)',
                  value: result.breakdown.bmiScore,
                  max: 3,
                },
                {
                  label: locale === 'tr' ? 'Bel Çevresi' : 'Waist Circumference',
                  value: result.breakdown.waistScore,
                  max: 4,
                },
                {
                  label: locale === 'tr' ? 'Fiziksel Aktivite' : 'Physical Activity',
                  value: result.breakdown.activityScore,
                  max: 2,
                },
                {
                  label: locale === 'tr' ? 'Sebze ve Meyve Tüketimi' : 'Vegetables and Fruits',
                  value: result.breakdown.dietScore,
                  max: 1,
                },
                {
                  label: locale === 'tr' ? 'Tansiyon İlacı' : 'Blood Pressure Medication',
                  value: result.breakdown.bloodPressureScore,
                  max: 2,
                },
                {
                  label: locale === 'tr' ? 'Yüksek Kan Şekeri Geçmişi' : 'High Blood Glucose History',
                  value: result.breakdown.glucoseScore,
                  max: 5,
                },
                {
                  label: locale === 'tr' ? 'Aile Öyküsü' : 'Family History',
                  value: result.breakdown.familyHistoryScore,
                  max: 5,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2"
                >
                  <span className="text-neutral-700">{item.label}</span>
                  <span className="font-semibold text-neutral-900">
                    {item.value} / {item.max}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* High risk warning */}
          {(result.severity === 'high' || result.severity === 'very-high') && (
            <Card className="animate-slide-up border-2 border-red-200 bg-red-50">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <h3 className="mb-2 font-bold text-red-900">
                    {locale === 'tr' ? 'Tıbbi Değerlendirme Önerilir' : 'Medical Evaluation Recommended'}
                  </h3>
                  <p className="text-sm text-red-800">
                    {locale === 'tr'
                      ? 'Yüksek puanınız, diyabet veya prediyabet açısından kan testi ile değerlendirilmenizi gerektirmektedir. En kısa zamanda bir sağlık profesyoneline başvurarak açlık kan şekeri ve HbA1c testlerini yaptırmanız önerilir. Erken teşhis ve yaşam tarzı değişiklikleri tip 2 diyabetin ilerlemesini önemli ölçüde önleyebilir veya geciktirebilir.'
                      : 'Your high score indicates you should be evaluated for diabetes or prediabetes with a blood test. Please consult a healthcare professional as soon as possible for fasting blood glucose and HbA1c tests. Early detection and lifestyle changes can significantly prevent or delay the progression of type 2 diabetes.'}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Severity ranges */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'FINDRISC Risk Aralıkları' : 'FINDRISC Risk Ranges'}
            </h3>
            <div className="space-y-3">
              {Object.entries(diabetesRiskSeverities).map(([key, sev]) => (
                <div
                  key={key}
                  className={`rounded-lg border-2 p-3 ${
                    result.severity === key
                      ? 'border-rose-300 bg-rose-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">{sev.label[locale]}</div>
                      <div className="text-sm text-neutral-600">
                        {locale === 'tr' ? 'Puan: ' : 'Score: '}
                        {sev.range}
                      </div>
                    </div>
                    {result.severity === key && (
                      <Badge variant="primary">{locale === 'tr' ? 'Sizin' : 'You'}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* About */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-rose-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <div className="rounded-lg bg-rose-50 p-3">
                <strong>{locale === 'tr' ? 'Önemli Not: ' : 'Important Note: '}</strong>
                {info.note}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default DiabetesRiskCalculator;
