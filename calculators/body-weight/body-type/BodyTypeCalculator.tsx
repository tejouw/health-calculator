'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card } from '@/components/ui';
import { bodyTypeQuestions, calculateBodyType } from './bodyTypeLogic';
import { BodyTypeResult } from './bodyTypeTypes';
import { User, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import BodyTypeResultCard from './components/BodyTypeResultCard';
import BodyTypeTraits from './components/BodyTypeTraits';
import BodyTypeDiet from './components/BodyTypeDiet';
import BodyTypeExercise from './components/BodyTypeExercise';
import BodyTypeComparison from './components/BodyTypeComparison';

interface BodyTypeCalculatorProps {
  locale: 'en' | 'tr';
}

const BodyTypeCalculator: React.FC<BodyTypeCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(bodyTypeQuestions.length).fill(-1));
  const [result, setResult] = useState<BodyTypeResult | null>(null);
  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const totalQuestions = bodyTypeQuestions.length;
  const question = bodyTypeQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const allAnswered = answers.every((a) => a >= 0);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedOption >= 0 && currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1]);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1]);
    }
  };

  const handleCalculate = () => {
    if (allAnswered) {
      const bodyTypeResult = calculateBodyType(answers);
      setResult(bodyTypeResult);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setAnswers(new Array(bodyTypeQuestions.length).fill(-1));
    setResult(null);
    setSelectedOption(-1);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
            <User className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Vücut Tipi Testi' : 'Body Type Quiz'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? `Soru ${currentQuestion + 1} / ${totalQuestions}`
                : `Question ${currentQuestion + 1} of ${totalQuestions}`}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {question.question[locale]}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 ${
                  selectedOption === index
                    ? 'border-violet-500 bg-violet-50 shadow-md'
                    : 'border-neutral-200 bg-white hover:border-violet-300 hover:bg-violet-50/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      selectedOption === index
                        ? 'border-violet-500 bg-violet-500 text-white'
                        : 'border-neutral-300 text-neutral-400'
                    }`}
                  >
                    {selectedOption === index ? (
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-xs font-bold">{String.fromCharCode(65 + index)}</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${selectedOption === index ? 'text-violet-900' : 'text-neutral-700'}`}>
                    {option.label[locale]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-3">
          <Button
            onClick={handlePrev}
            variant="outline"
            disabled={currentQuestion === 0}
            size="lg"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            {locale === 'tr' ? 'Geri' : 'Back'}
          </Button>

          {currentQuestion < totalQuestions - 1 ? (
            <Button
              onClick={handleNext}
              disabled={selectedOption < 0}
              size="lg"
            >
              {locale === 'tr' ? 'Sonraki' : 'Next'}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleCalculate}
              disabled={!allAnswered}
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-purple-500"
            >
              {tCommon('calculate')}
            </Button>
          )}
        </div>

        {/* Quick Navigation Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {bodyTypeQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentQuestion(index);
                setSelectedOption(answers[index]);
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentQuestion
                  ? 'w-8 bg-violet-500'
                  : answers[index] >= 0
                    ? 'bg-violet-300'
                    : 'bg-neutral-300'
              }`}
            />
          ))}
        </div>
      </Card>

      {/* Reset Button when result is shown */}
      {result && (
        <div className="flex justify-center">
          <Button onClick={handleReset} variant="outline" size="lg">
            <RotateCcw className="mr-2 h-4 w-4" />
            {tCommon('reset')}
          </Button>
        </div>
      )}

      {/* Results Section - Rich Post-Calculation Content */}
      {result && (
        <>
          <BodyTypeResultCard result={result} locale={locale} />
          <BodyTypeTraits result={result} locale={locale} />
          <BodyTypeDiet result={result} locale={locale} />
          <BodyTypeExercise result={result} locale={locale} />
          <BodyTypeComparison locale={locale} />
        </>
      )}
    </div>
  );
};

export default BodyTypeCalculator;
