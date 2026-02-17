'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, RadioGroup, Input, Select } from '@/components/ui';
import { calculateGAD7, gad7Info } from './gad7Logic';
import { GAD7Input, gad7Questions, gad7Options, gad7Severities } from './gad7Types';
import { Brain, AlertCircle, Info, User, Calendar } from 'lucide-react';

interface GAD7CalculatorProps {
  locale: 'en' | 'tr';
}

const GAD7Calculator: React.FC<GAD7CalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [answers, setAnswers] = useState<number[]>(Array(7).fill(-1));
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [result, setResult] = useState<ReturnType<typeof calculateGAD7> | null>(null);
  const [error, setError] = useState<string>('');

  const handleAnswerChange = (questionIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleCalculate = () => {
    setError('');

    // Check if all questions are answered
    const unanswered = answers.findIndex((a) => a === -1);
    if (unanswered !== -1) {
      setError(
        locale === 'tr'
          ? `L\u00fctfen t\u00fcm sorular\u0131 cevaplay\u0131n (Soru ${unanswered + 1} cevaplanmad\u0131)`
          : `Please answer all questions (Question ${unanswered + 1} is unanswered)`
      );
      return;
    }

    const input: GAD7Input = {
      answers,
      age: age ? parseInt(age) : undefined,
      gender: gender || undefined,
    };
    const gad7Result = calculateGAD7(input);
    setResult(gad7Result);
  };

  const handleReset = () => {
    setAnswers(Array(7).fill(-1));
    setAge('');
    setGender('');
    setResult(null);
    setError('');
  };

  const info = gad7Info[locale];
  const options = gad7Options[locale];

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'GAD-7 Anksiyete Taramas\u0131' : 'GAD-7 Anxiety Screening'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Son 2 haftada ne s\u0131kl\u0131kta ya\u015fad\u0131n\u0131z?'
                : 'Over the last 2 weeks, how often have you been bothered by:'}
            </p>
          </div>
        </div>

        {/* Demographic Information (Optional) */}
        <div className="mb-6 rounded-lg border border-teal-200 bg-teal-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-teal-600" />
            <h3 className="font-semibold text-neutral-900">
              {locale === 'tr' ? 'Demografik Bilgiler (Opsiyonel)' : 'Demographic Information (Optional)'}
            </h3>
          </div>
          <p className="mb-4 text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Ya\u015f ve cinsiyetinizi girerek daha detayl\u0131 ve ki\u015fiselle\u015ftirilmi\u015f de\u011ferlendirme alabilirsiniz.'
              : 'Enter your age and gender for a more detailed and personalized assessment.'}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                <div className="mb-1 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {locale === 'tr' ? 'Ya\u015f' : 'Age'}
                </div>
              </label>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder={locale === 'tr' ? '\u00d6rn: 25' : 'e.g., 25'}
                min="13"
                max="120"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                <div className="mb-1 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {locale === 'tr' ? 'Cinsiyet' : 'Gender'}
                </div>
              </label>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value as 'male' | 'female' | 'other' | '')}
                options={[
                  { value: '', label: locale === 'tr' ? 'Se\u00e7iniz' : 'Select' },
                  { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                  { value: 'female', label: locale === 'tr' ? 'Kad\u0131n' : 'Female' },
                  { value: 'other', label: locale === 'tr' ? 'Di\u011fer' : 'Other' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {gad7Questions.map((question, index) => (
            <div key={question.id} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="mb-3 font-medium text-neutral-900">
                {question.id}. {question.text[locale]}
              </div>
              <RadioGroup
                name={`question-${question.id}`}
                value={answers[index].toString()}
                onChange={(value) => handleAnswerChange(index, value)}
                options={options.map((opt) => ({
                  value: opt.value.toString(),
                  label: opt.label,
                }))}
                orientation="vertical"
              />
            </div>
          ))}
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
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-teal-100 bg-gradient-to-br from-teal-50 to-emerald-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'GAD-7 Toplam Skoru' : 'GAD-7 Total Score'}
              </h3>
              <div className="mb-4 text-6xl font-bold text-teal-600">{result.totalScore}</div>
              <div className="mb-4 text-sm text-neutral-600">{locale === 'tr' ? '21 \u00fczerinden' : 'out of 21'}</div>
              <Badge variant={result.category.color} size="lg">
                {result.category.label[locale]}
              </Badge>
            </div>

            <div className="mt-6 space-y-4 border-t border-neutral-200 pt-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? 'De\u011ferlendirme' : 'Assessment'}
                </h4>
                <p className="text-sm text-neutral-700">{result.category.description[locale]}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                  {locale === 'tr' ? '\u00d6neri' : 'Recommendation'}
                </h4>
                <p className="text-sm text-neutral-700">{result.category.recommendation[locale]}</p>
              </div>
            </div>
          </Card>

          {/* Crisis Warning for Severe Cases */}
          {result.severity === 'severe' && (
            <Card className="animate-slide-up border-2 border-red-200 bg-red-50">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <h3 className="mb-2 font-bold text-red-900">
                    {locale === 'tr' ? 'Profesyonel Yard\u0131m \u00d6nerisi' : 'Professional Help Recommended'}
                  </h3>
                  <p className="mb-3 text-sm text-red-800">{info.crisis}</p>
                  <p className="text-sm text-red-800">
                    {locale === 'tr'
                      ? 'Ciddi anksiyete semptomlar\u0131 ya\u015f\u0131yorsan\u0131z, l\u00fctfen bir ruh sa\u011fl\u0131\u011f\u0131 uzman\u0131ndan yard\u0131m al\u0131n. Yaln\u0131z de\u011filsiniz.'
                      : 'If you are experiencing severe anxiety symptoms, please seek help from a mental health professional. You are not alone.'}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Demographic-Specific Information */}
          {result.demographicInfo && (result.demographicInfo.genderSpecificRisks || result.demographicInfo.recommendations) && (
            <Card className="animate-slide-up border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'Size \u00d6zel De\u011ferlendirme' : 'Personalized Assessment'}
                </h3>
              </div>

              {result.demographicInfo.genderSpecificRisks && result.demographicInfo.genderSpecificRisks[locale] && (
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Risk Fakt\u00f6rleri' : 'Risk Factors'}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {result.demographicInfo.genderSpecificRisks[locale]}
                  </p>
                </div>
              )}

              {result.demographicInfo.recommendations && result.demographicInfo.recommendations[locale] && (
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? '\u00d6neriler' : 'Recommendations'}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {result.demographicInfo.recommendations[locale]}
                  </p>
                </div>
              )}
            </Card>
          )}

          {/* Severity Ranges */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'GAD-7 \u015eiddet Aral\u0131klar\u0131' : 'GAD-7 Severity Ranges'}
            </h3>
            <div className="space-y-3">
              {Object.entries(gad7Severities).map(([key, sev]) => (
                <div
                  key={key}
                  className={`rounded-lg border-2 p-3 ${
                    result.severity === key
                      ? 'border-teal-300 bg-teal-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">{sev.label[locale]}</div>
                      <div className="text-sm text-neutral-600">{sev.range}</div>
                    </div>
                    {result.severity === key && (
                      <Badge variant="primary">{locale === 'tr' ? 'Sizin' : 'You'}</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-teal-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <div className="rounded-lg bg-teal-50 p-3">
                <strong>{locale === 'tr' ? '\u00d6nemli Not:' : 'Important Note:'}</strong> {info.note}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default GAD7Calculator;
