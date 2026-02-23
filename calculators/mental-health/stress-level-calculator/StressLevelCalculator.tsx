'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Badge, RadioGroup, Input, Select } from '@/components/ui';
import { calculatePSS, stressLevelInfo } from './stressLevelLogic';
import { PSSInput, pssQuestions, pssOptions, pssSeverities } from './stressLevelTypes';
import { Flame, AlertCircle, Info, User, Calendar, Shield, Wind, Heart, TrendingDown, Zap, Target } from 'lucide-react';

interface StressLevelCalculatorProps {
  locale: 'en' | 'tr';
}

const StressLevelCalculator: React.FC<StressLevelCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [answers, setAnswers] = useState<number[]>(Array(10).fill(-1));
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | ''>('');
  const [result, setResult] = useState<ReturnType<typeof calculatePSS> | null>(null);
  const [error, setError] = useState<string>('');

  const handleAnswerChange = (questionIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleCalculate = () => {
    setError('');

    const unanswered = answers.findIndex((a) => a === -1);
    if (unanswered !== -1) {
      setError(
        locale === 'tr'
          ? `Lütfen tüm soruları cevaplayın (Soru ${unanswered + 1} cevaplanmadı)`
          : `Please answer all questions (Question ${unanswered + 1} is unanswered)`
      );
      return;
    }

    const input: PSSInput = {
      answers,
      age: age ? parseInt(age) : undefined,
      gender: gender || undefined,
    };
    const pssResult = calculatePSS(input);
    setResult(pssResult);
  };

  const handleReset = () => {
    setAnswers(Array(10).fill(-1));
    setAge('');
    setGender('');
    setResult(null);
    setError('');
  };

  const info = stressLevelInfo[locale];
  const options = pssOptions[locale];

  // Stress gauge color helper
  const getGaugeColor = (score: number) => {
    if (score <= 13) return 'from-emerald-400 to-green-500';
    if (score <= 26) return 'from-amber-400 to-orange-500';
    return 'from-red-500 to-rose-600';
  };

  const getGaugePosition = (score: number) => {
    return Math.min((score / 40) * 100, 100);
  };

  // Coping strategies based on severity
  const getCopingStrategies = (severity: 'low' | 'moderate' | 'high') => {
    const strategies = {
      low: {
        en: [
          { icon: Shield, title: 'Maintain Your Routine', desc: 'Keep up your current healthy habits - they are clearly working well for you.' },
          { icon: Heart, title: 'Nurture Relationships', desc: 'Continue investing in social connections that provide emotional support.' },
          { icon: Wind, title: 'Preventive Mindfulness', desc: 'Practice mindfulness to build resilience against future stressors.' },
        ],
        tr: [
          { icon: Shield, title: 'Rutininizi Sürdürün', desc: 'Mevcut sağlıklı alışkanlıklarınıza devam edin - açıkça işe yarıyorlar.' },
          { icon: Heart, title: 'İlişkileri Besleyin', desc: 'Duygusal destek sağlayan sosyal bağlantılarınıza yatırım yapmaya devam edin.' },
          { icon: Wind, title: 'Önleyici Farkındalık', desc: 'Gelecekteki stresörlere karşı dayanıklılık oluşturmak için farkındalık pratiği yapın.' },
        ],
      },
      moderate: {
        en: [
          { icon: Wind, title: 'Deep Breathing (4-7-8)', desc: 'Inhale 4 sec, hold 7 sec, exhale 8 sec. Repeat 4 times. Activates your parasympathetic nervous system.' },
          { icon: Target, title: 'Prioritize & Delegate', desc: 'List your tasks, identify top 3 priorities, and delegate or postpone the rest. Say no to non-essentials.' },
          { icon: Zap, title: 'Movement Breaks', desc: 'Take 10-minute walks every 2 hours. Even brief exercise reduces cortisol levels by 15-25%.' },
          { icon: Heart, title: 'Social Connection', desc: 'Share your feelings with a trusted person. Social support is one of the strongest buffers against stress.' },
        ],
        tr: [
          { icon: Wind, title: 'Derin Nefes (4-7-8)', desc: '4 sn nefes alın, 7 sn tutun, 8 sn verin. 4 kez tekrarlayın. Parasempatik sinir sisteminizi aktive eder.' },
          { icon: Target, title: 'Önceliklendirin ve Devredin', desc: 'Görevlerinizi listeleyin, ilk 3 önceliği belirleyin, gerisini devredin veya erteleyin. Gereksiz şeylere hayır deyin.' },
          { icon: Zap, title: 'Hareket Molaları', desc: 'Her 2 saatte 10 dakikalık yürüyüşler yapın. Kısa egzersiz bile kortizol seviyelerini %15-25 azaltır.' },
          { icon: Heart, title: 'Sosyal Bağlantı', desc: 'Duygularınızı güvendiğiniz biriyle paylaşın. Sosyal destek strese karşı en güçlü tamponlardan biridir.' },
        ],
      },
      high: {
        en: [
          { icon: AlertCircle, title: 'Seek Professional Help', desc: 'A therapist or counselor can provide evidence-based strategies. Cognitive Behavioral Therapy (CBT) is highly effective for stress.' },
          { icon: Wind, title: 'Emergency Calm Down', desc: 'Box breathing: inhale 4 sec, hold 4 sec, exhale 4 sec, hold 4 sec. Repeat until you feel calmer.' },
          { icon: TrendingDown, title: 'Reduce Commitments', desc: 'It is okay to step back. Cancel non-essential obligations and create space for recovery.' },
          { icon: Shield, title: 'Build a Safety Net', desc: 'Identify 3 people you can call when overwhelmed. Create a written action plan for high-stress moments.' },
          { icon: Heart, title: 'Self-Compassion Practice', desc: 'Treat yourself with the same kindness you would offer a friend. Self-criticism amplifies stress.' },
        ],
        tr: [
          { icon: AlertCircle, title: 'Profesyonel Yardım Alın', desc: 'Bir terapist veya danışman kanıta dayalı stratejiler sağlayabilir. Bilişsel Davranışçı Terapi (BDT) stres için oldukça etkilidir.' },
          { icon: Wind, title: 'Acil Sakinleşme', desc: 'Kutu nefes: 4 sn nefes alın, 4 sn tutun, 4 sn verin, 4 sn bekleyin. Sakinleşene kadar tekrarlayın.' },
          { icon: TrendingDown, title: 'Taahhütleri Azaltın', desc: 'Geri adım atmak normaldir. Zorunlu olmayan yükümlülükleri iptal edin ve toparlanma için alan yaratın.' },
          { icon: Shield, title: 'Güvenlik Ağı Oluşturun', desc: 'Bunaldığınızda arayabileceğiniz 3 kişiyi belirleyin. Yüksek stresli anlar için yazılı bir eylem planı oluşturun.' },
          { icon: Heart, title: 'Öz Şefkat Pratiği', desc: 'Kendinize bir arkadaşınıza göstereceğiniz nezaketi gösterin. Öz eleştiri stresi artırır.' },
        ],
      },
    };
    return strategies[severity][locale];
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
            <Flame className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Stres Düzeyi Testi (PSS-10)' : 'Stress Level Test (PSS-10)'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Son bir ayda ne sıklıkta yaşadınız?'
                : 'In the last month, how often have you experienced the following?'}
            </p>
          </div>
        </div>

        {/* Demographic Information (Optional) */}
        <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <User className="h-5 w-5 text-orange-600" />
            <h3 className="font-semibold text-neutral-900">
              {locale === 'tr' ? 'Demografik Bilgiler (Opsiyonel)' : 'Demographic Information (Optional)'}
            </h3>
          </div>
          <p className="mb-4 text-sm text-neutral-600">
            {locale === 'tr'
              ? 'Yaş ve cinsiyetinizi girerek daha detaylı ve kişiselleştirilmiş değerlendirme alabilirsiniz.'
              : 'Enter your age and gender for a more detailed and personalized assessment.'}
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                <div className="mb-1 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {locale === 'tr' ? 'Yaş' : 'Age'}
                </div>
              </label>
              <Input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder={locale === 'tr' ? 'Örn: 25' : 'e.g., 25'}
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
                  { value: '', label: locale === 'tr' ? 'Seçiniz' : 'Select' },
                  { value: 'male', label: locale === 'tr' ? 'Erkek' : 'Male' },
                  { value: 'female', label: locale === 'tr' ? 'Kadın' : 'Female' },
                  { value: 'other', label: locale === 'tr' ? 'Diğer' : 'Other' },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {pssQuestions.map((question, index) => (
            <div key={question.id} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="mb-3 font-medium text-neutral-900">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                  {question.id}
                </span>
                {question.text[locale]}
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
          {/* ========== LAYER 1: Interactive Visual Results ========== */}

          {/* Main Score with Stress Gauge */}
          <Card className="animate-slide-up border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'PSS-10 Stres Skoru' : 'PSS-10 Stress Score'}
              </h3>
              <div className="mb-2 text-6xl font-bold text-orange-600">{result.totalScore}</div>
              <div className="mb-4 text-sm text-neutral-600">{locale === 'tr' ? '40 üzerinden' : 'out of 40'}</div>
              <Badge variant={result.category.color} size="lg">
                {result.category.label[locale]}
              </Badge>

              {/* Stress Gauge */}
              <div className="mx-auto mt-6 max-w-md">
                <div className="relative h-4 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={`absolute left-0 top-0 h-full rounded-full bg-gradient-to-r ${getGaugeColor(result.totalScore)} transition-all duration-1000 ease-out`}
                    style={{ width: `${getGaugePosition(result.totalScore)}%` }}
                  />
                  <div
                    className="absolute top-1/2 h-6 w-1 -translate-y-1/2 rounded bg-neutral-900 shadow-lg transition-all duration-1000"
                    style={{ left: `${getGaugePosition(result.totalScore)}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-xs text-neutral-500">
                  <span>{locale === 'tr' ? 'Düşük' : 'Low'}</span>
                  <span>{locale === 'tr' ? 'Orta' : 'Moderate'}</span>
                  <span>{locale === 'tr' ? 'Yüksek' : 'High'}</span>
                </div>
              </div>

              {/* Percentile */}
              <div className="mt-4 rounded-lg bg-white/80 p-3">
                <p className="text-sm text-neutral-700">
                  {locale === 'tr'
                    ? `Puanınız genel nüfusun %${result.percentile} persentilinde. Bu, insanların %${100 - result.percentile} kadarının sizden daha yüksek stres bildirdiği anlamına gelir.`
                    : `Your score is at the ${result.percentile}th percentile. This means about ${100 - result.percentile}% of people report higher stress than you.`}
                </p>
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

          {/* Stress vs Coping Balance */}
          <Card className="animate-slide-up">
            <h3 className="mb-4 text-lg font-bold text-neutral-900">
              {locale === 'tr' ? 'Stres & Başa Çıkma Dengesi' : 'Stress & Coping Balance'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-red-50 p-4 text-center">
                <Flame className="mx-auto mb-2 h-8 w-8 text-red-500" />
                <div className="text-2xl font-bold text-red-600">
                  {result.totalScore - (16 - result.copingScore)}
                </div>
                <div className="text-xs text-red-700">
                  {locale === 'tr' ? 'Algılanan Stres' : 'Perceived Stress'}
                </div>
              </div>
              <div className="rounded-lg bg-emerald-50 p-4 text-center">
                <Shield className="mx-auto mb-2 h-8 w-8 text-emerald-500" />
                <div className="text-2xl font-bold text-emerald-600">{result.copingScore}</div>
                <div className="text-xs text-emerald-700">
                  {locale === 'tr' ? 'Başa Çıkma Gücü' : 'Coping Strength'}
                </div>
                <div className="mt-1 text-xs text-neutral-500">
                  {locale === 'tr' ? '(16 üzerinden)' : '(out of 16)'}
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              {result.copingScore >= 12
                ? locale === 'tr'
                  ? 'Başa çıkma gücünüz yüksek! Stresle baş etme konusunda güçlü becerileriniz var.'
                  : 'Your coping strength is high! You have strong skills for managing stress.'
                : result.copingScore >= 8
                  ? locale === 'tr'
                    ? 'Başa çıkma gücünüz orta düzeyde. Başa çıkma becerilerinizi güçlendirmek faydalı olabilir.'
                    : 'Your coping strength is moderate. Strengthening your coping skills could be beneficial.'
                  : locale === 'tr'
                    ? 'Başa çıkma gücünüz düşük. Yeni başa çıkma stratejileri geliştirmek önceliğiniz olmalı.'
                    : 'Your coping strength is low. Developing new coping strategies should be your priority.'}
            </p>
          </Card>

          {/* Top Stressors */}
          {result.topStressors.length > 0 && (
            <Card className="animate-slide-up border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-red-600" />
                <h3 className="text-lg font-bold text-neutral-900">
                  {locale === 'tr' ? 'En Yüksek Stres Kaynakları' : 'Your Top Stress Sources'}
                </h3>
              </div>
              <div className="space-y-3">
                {result.topStressors.map((stressor, index) => (
                  <div key={stressor.questionId} className="flex items-start gap-3 rounded-lg bg-white p-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">{stressor.text[locale]}</p>
                      <div className="mt-1 flex items-center gap-1">
                        {[...Array(stressor.score)].map((_, i) => (
                          <div key={i} className="h-2 w-6 rounded-full bg-red-400" />
                        ))}
                        {[...Array(4 - stressor.score)].map((_, i) => (
                          <div key={i} className="h-2 w-6 rounded-full bg-neutral-200" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Personalized Coping Strategies */}
          <Card className="animate-slide-up border-2 border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Kişiselleştirilmiş Başa Çıkma Stratejileri' : 'Personalized Coping Strategies'}
              </h3>
            </div>
            <div className="space-y-3">
              {getCopingStrategies(result.severity).map((strategy, index) => {
                const IconComponent = strategy.icon;
                return (
                  <div key={index} className="rounded-lg bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-emerald-600" />
                      <h4 className="font-semibold text-neutral-900">{strategy.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-700">{strategy.desc}</p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Crisis Warning for High Stress */}
          {result.severity === 'high' && (
            <Card className="animate-slide-up border-2 border-red-200 bg-red-50">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <h3 className="mb-2 font-bold text-red-900">
                    {locale === 'tr' ? 'Önemli Uyarı' : 'Important Notice'}
                  </h3>
                  <p className="mb-3 text-sm text-red-800">{info.crisis}</p>
                  <p className="text-sm text-red-800">
                    {locale === 'tr'
                      ? 'Yüksek stres düzeyi ciddi sağlık sorunlarına yol açabilir. Lütfen bir sağlık profesyonelinden yardım almaktan çekinmeyin. Yalnız değilsiniz.'
                      : 'High stress levels can lead to serious health problems. Please do not hesitate to seek help from a health professional. You are not alone.'}
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
                  {locale === 'tr' ? 'Size Özel Değerlendirme' : 'Personalized Assessment'}
                </h3>
              </div>

              {result.demographicInfo.genderSpecificRisks && result.demographicInfo.genderSpecificRisks[locale] && (
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Risk Faktörleri' : 'Risk Factors'}
                  </h4>
                  <p className="text-sm leading-relaxed text-neutral-700">
                    {result.demographicInfo.genderSpecificRisks[locale]}
                  </p>
                </div>
              )}

              {result.demographicInfo.recommendations && result.demographicInfo.recommendations[locale] && (
                <div className="rounded-lg bg-white p-4">
                  <h4 className="mb-2 text-sm font-semibold text-neutral-900">
                    {locale === 'tr' ? 'Öneriler' : 'Recommendations'}
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
              {locale === 'tr' ? 'PSS-10 Stres Aralıkları' : 'PSS-10 Stress Ranges'}
            </h3>
            <div className="space-y-3">
              {Object.entries(pssSeverities).map(([key, sev]) => (
                <div
                  key={key}
                  className={`rounded-lg border-2 p-3 ${
                    result.severity === key
                      ? 'border-orange-300 bg-orange-50'
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

          {/* Quick Stress Relief Techniques */}
          <Card className="animate-slide-up border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-violet-50">
            <div className="mb-4 flex items-center gap-2">
              <Wind className="h-5 w-5 text-purple-600" />
              <h3 className="text-lg font-bold text-neutral-900">
                {locale === 'tr' ? 'Hızlı Stres Giderme Teknikleri' : 'Quick Stress Relief Techniques'}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-purple-700">
                  {locale === 'tr' ? '5-4-3-2-1 Topraklama' : '5-4-3-2-1 Grounding'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Görebildiğiniz 5 şey, dokunabildiğiniz 4 şey, duyabildiğiniz 3 şey, koklayabildiğiniz 2 şey ve tadabildiğiniz 1 şey bulun.'
                    : 'Find 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-purple-700">
                  {locale === 'tr' ? 'Kas Gevşetme' : 'Progressive Muscle Relaxation'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Ayaklardan başlayarak her kas grubunu 5 saniye gerin, sonra bırakın. Yukarıya doğru devam edin.'
                    : 'Starting from your feet, tense each muscle group for 5 seconds, then release. Work your way up.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-purple-700">
                  {locale === 'tr' ? 'Soğuk Su Tekniği' : 'Cold Water Technique'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? 'Soğuk su ile yüzünüzü yıkayın veya buz tutun. Dalma refleksi kalp atışınızı yavaşlatır ve sizi sakinleştirir.'
                    : 'Splash cold water on your face or hold ice. The dive reflex slows your heart rate and calms you.'}
                </p>
              </div>
              <div className="rounded-lg bg-white p-4">
                <h4 className="mb-1 font-semibold text-purple-700">
                  {locale === 'tr' ? 'Doğa Molası' : 'Nature Break'}
                </h4>
                <p className="text-xs text-neutral-600">
                  {locale === 'tr'
                    ? '20 dakika doğada geçirmek kortizol seviyelerini önemli ölçüde düşürür. Parklarda veya yeşil alanlarda yürüyün.'
                    : 'Spending 20 minutes in nature significantly lowers cortisol. Walk in parks or green spaces.'}
                </p>
              </div>
            </div>
          </Card>

          {/* Information */}
          <Card className="animate-slide-up">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-orange-600" />
              <h3 className="text-lg font-bold text-neutral-900">{info.title}</h3>
            </div>
            <div className="space-y-3 text-sm text-neutral-700">
              <p>{info.description}</p>
              <div className="rounded-lg bg-orange-50 p-3">
                <strong>{locale === 'tr' ? 'Önemli Not:' : 'Important Note:'}</strong> {info.note}
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default StressLevelCalculator;
