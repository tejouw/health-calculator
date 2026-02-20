'use client';

import React from 'react';
import { Card } from '@/components/ui';
import { BodyTypeResult } from '../bodyTypeTypes';
import { getBodyTypeInfo } from '../bodyTypeLogic';
import { Dumbbell, Timer, Flame, Target } from 'lucide-react';

interface BodyTypeExerciseProps {
  result: BodyTypeResult;
  locale: 'en' | 'tr';
}

const BodyTypeExercise: React.FC<BodyTypeExerciseProps> = ({ result, locale }) => {
  const typeInfo = getBodyTypeInfo(result.primaryType);

  const weeklyPlanMap = {
    ectomorph: {
      en: [
        { day: 'Monday', workout: 'Upper Body Strength', detail: 'Bench press, rows, shoulder press (4x6-8 reps)', icon: '🏋️' },
        { day: 'Tuesday', workout: 'Rest / Light Walk', detail: '20-30 min easy walk for active recovery', icon: '🚶' },
        { day: 'Wednesday', workout: 'Lower Body Strength', detail: 'Squats, deadlifts, lunges (4x6-8 reps)', icon: '🦵' },
        { day: 'Thursday', workout: 'Rest', detail: 'Full rest day - focus on nutrition and sleep', icon: '😴' },
        { day: 'Friday', workout: 'Full Body Compound', detail: 'Deadlifts, pull-ups, dips, overhead press (3x8)', icon: '💪' },
        { day: 'Saturday', workout: 'Light Cardio (optional)', detail: '20 min light cycling or swimming', icon: '🚴' },
        { day: 'Sunday', workout: 'Rest', detail: 'Full rest and recovery', icon: '🧘' },
      ],
      tr: [
        { day: 'Pazartesi', workout: 'Üst Vücut Kuvvet', detail: 'Bench press, kürek, omuz press (4x6-8 tekrar)', icon: '🏋️' },
        { day: 'Salı', workout: 'Dinlenme / Hafif Yürüyüş', detail: 'Aktif toparlanma için 20-30 dk kolay yürüyüş', icon: '🚶' },
        { day: 'Çarşamba', workout: 'Alt Vücut Kuvvet', detail: 'Squat, deadlift, lunge (4x6-8 tekrar)', icon: '🦵' },
        { day: 'Perşembe', workout: 'Dinlenme', detail: 'Tam dinlenme günü - beslenme ve uykuya odaklanın', icon: '😴' },
        { day: 'Cuma', workout: 'Tam Vücut Bileşik', detail: 'Deadlift, barfiks, dips, overhead press (3x8)', icon: '💪' },
        { day: 'Cumartesi', workout: 'Hafif Kardiyoyu (opsiyonel)', detail: '20 dk hafif bisiklet veya yüzme', icon: '🚴' },
        { day: 'Pazar', workout: 'Dinlenme', detail: 'Tam dinlenme ve toparlanma', icon: '🧘' },
      ],
    },
    mesomorph: {
      en: [
        { day: 'Monday', workout: 'Push Day', detail: 'Chest, shoulders, triceps (4x8-12 reps)', icon: '🏋️' },
        { day: 'Tuesday', workout: 'Pull Day', detail: 'Back, biceps, rear delts (4x8-12 reps)', icon: '💪' },
        { day: 'Wednesday', workout: 'Cardio & Core', detail: '30 min HIIT or running + core work', icon: '🏃' },
        { day: 'Thursday', workout: 'Legs & Glutes', detail: 'Squats, leg press, RDL, calf raises (4x10)', icon: '🦵' },
        { day: 'Friday', workout: 'Sports / Functional', detail: 'Basketball, swimming, or circuit training', icon: '⚽' },
        { day: 'Saturday', workout: 'Full Body or Weak Points', detail: 'Target lagging muscle groups (3x12)', icon: '🎯' },
        { day: 'Sunday', workout: 'Active Recovery', detail: 'Yoga, stretching, or light walk', icon: '🧘' },
      ],
      tr: [
        { day: 'Pazartesi', workout: 'İtme Günü', detail: 'Göğüs, omuzlar, triceps (4x8-12 tekrar)', icon: '🏋️' },
        { day: 'Salı', workout: 'Çekme Günü', detail: 'Sırt, biceps, arka deltoidler (4x8-12 tekrar)', icon: '💪' },
        { day: 'Çarşamba', workout: 'Kardiyoyu & Core', detail: '30 dk HIIT veya koşu + core çalışması', icon: '🏃' },
        { day: 'Perşembe', workout: 'Bacaklar & Kalçalar', detail: 'Squat, leg press, RDL, baldır kaldırma (4x10)', icon: '🦵' },
        { day: 'Cuma', workout: 'Spor / Fonksiyonel', detail: 'Basketbol, yüzme veya devre antrenmanı', icon: '⚽' },
        { day: 'Cumartesi', workout: 'Tam Vücut veya Zayıf Noktalar', detail: 'Geride kalan kas gruplarını hedefleyin (3x12)', icon: '🎯' },
        { day: 'Pazar', workout: 'Aktif Toparlanma', detail: 'Yoga, esneme veya hafif yürüyüş', icon: '🧘' },
      ],
    },
    endomorph: {
      en: [
        { day: 'Monday', workout: 'Full Body Circuit', detail: 'Compound movements in circuit format (3x15)', icon: '🔄' },
        { day: 'Tuesday', workout: 'HIIT Cardio', detail: '30 min intervals (30s sprint / 60s rest)', icon: '🏃' },
        { day: 'Wednesday', workout: 'Upper Body + Cardio', detail: 'Supersets with 20 min steady cardio', icon: '🏋️' },
        { day: 'Thursday', workout: 'Active Recovery', detail: '45 min brisk walk or light yoga', icon: '🚶' },
        { day: 'Friday', workout: 'Lower Body + HIIT', detail: 'Leg exercises + 15 min Tabata finisher', icon: '🦵' },
        { day: 'Saturday', workout: 'Cardio Day', detail: '45-60 min swimming, cycling, or hiking', icon: '🏊' },
        { day: 'Sunday', workout: 'Rest or Light Walk', detail: 'Recovery focus + meal prep for the week', icon: '🧘' },
      ],
      tr: [
        { day: 'Pazartesi', workout: 'Tam Vücut Devre', detail: 'Devre formatında bileşik hareketler (3x15)', icon: '🔄' },
        { day: 'Salı', workout: 'HIIT Kardiyoyu', detail: '30 dk aralıklar (30sn sprint / 60sn dinlenme)', icon: '🏃' },
        { day: 'Çarşamba', workout: 'Üst Vücut + Kardiyoyu', detail: 'Süpersetler + 20 dk düzenli kardiyoyu', icon: '🏋️' },
        { day: 'Perşembe', workout: 'Aktif Toparlanma', detail: '45 dk tempolu yürüyüş veya hafif yoga', icon: '🚶' },
        { day: 'Cuma', workout: 'Alt Vücut + HIIT', detail: 'Bacak egzersizleri + 15 dk Tabata bitirici', icon: '🦵' },
        { day: 'Cumartesi', workout: 'Kardiyoyu Günü', detail: '45-60 dk yüzme, bisiklet veya doğa yürüyüşü', icon: '🏊' },
        { day: 'Pazar', workout: 'Dinlenme veya Hafif Yürüyüş', detail: 'Toparlanma + hafta için yemek hazırlığı', icon: '🧘' },
      ],
    },
  };

  const baseType = result.primaryType.includes('-')
    ? result.primaryType.split('-')[0] === 'ecto' ? 'ectomorph'
      : result.primaryType.split('-')[0] === 'meso' ? 'mesomorph'
      : 'endomorph'
    : result.primaryType;

  const weeklyPlan = weeklyPlanMap[baseType as keyof typeof weeklyPlanMap];

  const keyMetrics = {
    ectomorph: {
      cardioFreq: '2-3x', cardioTime: '20 min', strength: '3-4x', restDays: '3',
      focus: { en: 'Heavy lifts, minimal cardio', tr: 'Ağır kaldırışlar, minimal kardiyoyu' },
    },
    mesomorph: {
      cardioFreq: '3-4x', cardioTime: '30 min', strength: '4-5x', restDays: '1-2',
      focus: { en: 'Balanced mix of everything', tr: 'Her şeyin dengeli karışımı' },
    },
    endomorph: {
      cardioFreq: '4-5x', cardioTime: '30-45 min', strength: '3-4x', restDays: '1-2',
      focus: { en: 'High activity, calorie burn focus', tr: 'Yüksek aktivite, kalori yakımı odaklı' },
    },
  };

  const metrics = keyMetrics[baseType as keyof typeof keyMetrics];

  return (
    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
          <Dumbbell className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-orange-900">
            {locale === 'tr' ? 'Kişiselleştirilmiş Egzersiz Planı' : 'Personalized Exercise Plan'}
          </h3>
          <p className="text-sm text-orange-700">
            {typeInfo.label[locale]} {locale === 'tr' ? 'tipi için optimize edilmiş' : 'type optimized'}
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl bg-white/60 p-3 text-center">
          <Flame className="mx-auto mb-1 h-5 w-5 text-red-500" />
          <div className="text-lg font-bold text-neutral-800">{metrics.cardioFreq}</div>
          <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Kardiyoyu/Hafta' : 'Cardio/Week'}</div>
        </div>
        <div className="rounded-xl bg-white/60 p-3 text-center">
          <Timer className="mx-auto mb-1 h-5 w-5 text-blue-500" />
          <div className="text-lg font-bold text-neutral-800">{metrics.cardioTime}</div>
          <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Seans Başına' : 'Per Session'}</div>
        </div>
        <div className="rounded-xl bg-white/60 p-3 text-center">
          <Dumbbell className="mx-auto mb-1 h-5 w-5 text-purple-500" />
          <div className="text-lg font-bold text-neutral-800">{metrics.strength}</div>
          <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Kuvvet/Hafta' : 'Strength/Week'}</div>
        </div>
        <div className="rounded-xl bg-white/60 p-3 text-center">
          <Target className="mx-auto mb-1 h-5 w-5 text-green-500" />
          <div className="text-lg font-bold text-neutral-800">{metrics.restDays}</div>
          <div className="text-xs text-neutral-600">{locale === 'tr' ? 'Dinlenme Günü' : 'Rest Days'}</div>
        </div>
      </div>

      {/* Focus */}
      <div className="mb-6 rounded-xl bg-white/60 p-3 text-center">
        <span className="text-sm font-medium text-orange-800">
          {locale === 'tr' ? 'Odak: ' : 'Focus: '}
        </span>
        <span className="text-sm text-neutral-700">{metrics.focus[locale]}</span>
      </div>

      {/* Exercise Tips */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold text-orange-800">
          {locale === 'tr' ? 'Egzersiz İpuçları' : 'Exercise Tips'}
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {typeInfo.exercise[locale].map((tip, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-white/60 p-3">
              <span className="mt-0.5 text-orange-500">&#x2713;</span>
              <span className="text-sm text-neutral-700">{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Plan */}
      <div>
        <h4 className="mb-3 text-sm font-semibold text-orange-800">
          {locale === 'tr' ? 'Haftalık Antrenman Programı' : 'Weekly Training Schedule'}
        </h4>
        <div className="space-y-2">
          {weeklyPlan[locale].map((day, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg bg-white/60 p-3">
              <span className="text-lg">{day.icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-orange-700">{day.day}</span>
                  <span className="text-xs font-medium text-neutral-700">- {day.workout}</span>
                </div>
                <p className="text-xs text-neutral-600">{day.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default BodyTypeExercise;
