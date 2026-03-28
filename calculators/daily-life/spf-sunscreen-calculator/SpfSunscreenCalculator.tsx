'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Select, Input, Card, Badge } from '@/components/ui';
import { calculateSPF, skinTypes, uvRiskLevels, getUVRiskLevel } from './spfSunscreenLogic';
import { SPFInput, SPFResult, FitzpatrickType, ActivityType } from './spfSunscreenTypes';
import { Sun, Shield, Clock, Droplets, AlertTriangle, RefreshCw, Heart } from 'lucide-react';

interface SpfSunscreenCalculatorProps {
  locale: 'en' | 'tr';
}

const SpfSunscreenCalculator: React.FC<SpfSunscreenCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');

  const [skinType, setSkinType] = useState<string>('3');
  const [spfValue, setSpfValue] = useState<string>('30');
  const [uvIndex, setUvIndex] = useState<string>('6');
  const [activity, setActivity] = useState<string>('normal');
  const [result, setResult] = useState<SPFResult | null>(null);
  const [error, setError] = useState<string>('');

  const skinTypeOptions = Object.values(skinTypes).map((st) => ({
    value: String(st.type),
    label: st.label[locale],
  }));

  const activityOptions = [
    { value: 'normal', label: locale === 'tr' ? 'Normal (Yürüyüş, Oturma)' : 'Normal (Walking, Sitting)' },
    { value: 'swimming', label: locale === 'tr' ? 'Yüzme' : 'Swimming' },
    { value: 'sweating', label: locale === 'tr' ? 'Yoğun Terleme (Spor, Koşu)' : 'Heavy Sweating (Sports, Running)' },
  ];

  const spfOptions = [
    { value: '0', label: locale === 'tr' ? 'Güneş Kremi Yok' : 'No Sunscreen' },
    { value: '15', label: 'SPF 15' },
    { value: '30', label: 'SPF 30' },
    { value: '50', label: 'SPF 50' },
    { value: '70', label: 'SPF 70' },
    { value: '100', label: 'SPF 100' },
  ];

  const uvIndexOptions = Array.from({ length: 12 }, (_, i) => {
    const val = i + 1;
    const riskLevel = getUVRiskLevel(val);
    const riskLabel = uvRiskLevels[riskLevel].label[locale];
    return {
      value: String(val),
      label: `${val} - ${riskLabel}`,
    };
  });

  const handleCalculate = () => {
    setError('');

    const spf = parseInt(spfValue);
    const uv = parseInt(uvIndex);
    const skin = parseInt(skinType) as FitzpatrickType;

    if (isNaN(uv) || uv < 1 || uv > 12) {
      setError(locale === 'tr' ? 'Lütfen geçerli bir UV indeksi girin' : 'Please enter a valid UV index');
      return;
    }

    const input: SPFInput = {
      skinType: skin,
      spfValue: spf,
      uvIndex: uv,
      activity: activity as ActivityType,
    };

    const calcResult = calculateSPF(input);
    setResult(calcResult);
  };

  const handleReset = () => {
    setSkinType('3');
    setSpfValue('30');
    setUvIndex('6');
    setActivity('normal');
    setResult(null);
    setError('');
  };

  const formatTime = (minutes: number): string => {
    if (minutes === 0) return locale === 'tr' ? 'Uygulanamaz' : 'N/A';
    if (minutes < 60) return `${minutes} ${locale === 'tr' ? 'dakika' : 'min'}`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (mins === 0) return `${hours} ${locale === 'tr' ? 'saat' : 'hr'}`;
    return `${hours} ${locale === 'tr' ? 'sa' : 'hr'} ${mins} ${locale === 'tr' ? 'dk' : 'min'}`;
  };

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case 'low': return 'success' as const;
      case 'moderate': return 'warning' as const;
      case 'high': return 'warning' as const;
      case 'very-high': return 'danger' as const;
      case 'extreme': return 'danger' as const;
      default: return 'primary' as const;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500">
            <Sun className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Güneş Koruma (SPF) Hesaplayıcı' : 'Sun Protection (SPF) Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Güneşte güvenle ne kadar kalabileceğinizi hesaplayın'
                : 'Calculate how long you can safely stay in the sun'}
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <Select
            label={locale === 'tr' ? 'Cilt Tipiniz (Fitzpatrick)' : 'Your Skin Type (Fitzpatrick)'}
            options={skinTypeOptions}
            value={skinType}
            onChange={(e) => setSkinType(e.target.value)}
            required
          />
          <Select
            label={locale === 'tr' ? 'SPF Değeri' : 'SPF Value'}
            options={spfOptions}
            value={spfValue}
            onChange={(e) => setSpfValue(e.target.value)}
            required
          />
          <Select
            label={locale === 'tr' ? 'UV İndeksi' : 'UV Index'}
            options={uvIndexOptions}
            value={uvIndex}
            onChange={(e) => setUvIndex(e.target.value)}
            required
            helperText={locale === 'tr'
              ? 'Hava durumu uygulamanızdan öğrenebilirsiniz'
              : 'Check your weather app for current UV index'}
          />
          <Select
            label={locale === 'tr' ? 'Aktivite Türü' : 'Activity Type'}
            options={activityOptions}
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            required
          />
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

      {/* Skin Type Info Card */}
      {result && (
        <Card className="animate-slide-up border-2 border-amber-100 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full border-2 border-neutral-300"
              style={{ backgroundColor: result.skinTypeInfo.color }}
            />
            <div>
              <h3 className="font-semibold text-neutral-900">{result.skinTypeInfo.label[locale]}</h3>
              <p className="text-sm text-neutral-600">{result.skinTypeInfo.description[locale]}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-neutral-700">
              {locale === 'tr' ? 'UV Risk Seviyesi:' : 'UV Risk Level:'}
            </span>
            <Badge variant={getRiskBadgeVariant(result.riskLevel)} size="lg">
              {uvRiskLevels[result.riskLevel].label[locale]}
            </Badge>
          </div>
        </Card>
      )}

      {/* Main Results */}
      {result && (
        <div className="animate-slide-up grid gap-4 sm:grid-cols-2">
          {/* Safe Exposure */}
          <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
                <Shield className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Güvenli Güneşlenme Süresi' : 'Safe Sun Exposure Time'}
                </h4>
                <p className="mt-1 text-3xl font-bold text-green-700">
                  {parseInt(spfValue) === 0
                    ? (locale === 'tr' ? 'Korumasız!' : 'Unprotected!')
                    : formatTime(result.safeExposureMinutes)}
                </p>
                {parseInt(spfValue) > 0 && (
                  <p className="mt-1 text-xs text-neutral-500">
                    {locale === 'tr' ? `SPF ${spfValue} ile tahmini süre` : `Estimated with SPF ${spfValue}`}
                  </p>
                )}
              </div>
            </div>
          </Card>

          {/* Reapply Time */}
          <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                <RefreshCw className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Yeniden Sürme Zamanı' : 'Reapply After'}
                </h4>
                <p className="mt-1 text-3xl font-bold text-blue-700">
                  {parseInt(spfValue) === 0
                    ? (locale === 'tr' ? 'Krem Sürün!' : 'Apply Sunscreen!')
                    : formatTime(result.reapplyAfterMinutes)}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {locale === 'tr'
                    ? activity === 'swimming' ? 'Yüzmeden sonra hemen sürün' : activity === 'sweating' ? 'Yoğun terleme sırasında' : 'Maksimum etkinlik için'
                    : activity === 'swimming' ? 'Reapply right after swimming' : activity === 'sweating' ? 'During heavy sweating' : 'For maximum protection'}
                </p>
              </div>
            </div>
          </Card>

          {/* Burn Time Without SPF */}
          <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-orange-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'Kremsiz Yanma Süresi' : 'Burn Time Without Sunscreen'}
                </h4>
                <p className="mt-1 text-3xl font-bold text-red-700">
                  {formatTime(result.burnTimeWithoutSPF)}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {locale === 'tr' ? 'Güneş kremi olmadan tahmini süre' : 'Estimated time without any protection'}
                </p>
              </div>
            </div>
          </Card>

          {/* Vitamin D */}
          <Card className="border-2 border-yellow-100 bg-gradient-to-br from-yellow-50 to-amber-50">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-100">
                <Heart className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-neutral-600">
                  {locale === 'tr' ? 'D Vitamini İçin Güneşlenme' : 'Vitamin D Sun Exposure'}
                </h4>
                <p className="mt-1 text-3xl font-bold text-yellow-700">
                  {result.vitaminDMinutes > 0
                    ? formatTime(result.vitaminDMinutes)
                    : (locale === 'tr' ? 'UV çok düşük' : 'UV too low')}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {locale === 'tr'
                    ? 'Kremsiz, 10:00-15:00 arası yeterli D vitamini için'
                    : 'Without sunscreen, 10AM-3PM for adequate vitamin D'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* UV Index Visual Scale */}
      {result && (
        <Card>
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {locale === 'tr' ? 'UV İndeksi Ölçeği' : 'UV Index Scale'}
          </h3>
          <div className="space-y-2">
            {[
              { range: '1-2', level: 'low' as const, width: '16%' },
              { range: '3-5', level: 'moderate' as const, width: '25%' },
              { range: '6-7', level: 'high' as const, width: '16%' },
              { range: '8-10', level: 'very-high' as const, width: '25%' },
              { range: '11+', level: 'extreme' as const, width: '18%' },
            ].map((item) => {
              const isActive = getUVRiskLevel(parseInt(uvIndex)) === item.level;
              const colorMap = {
                low: 'bg-green-400',
                moderate: 'bg-yellow-400',
                high: 'bg-orange-400',
                'very-high': 'bg-red-500',
                extreme: 'bg-purple-600',
              };
              return (
                <div key={item.level} className={`flex items-center gap-3 rounded-lg p-2 ${isActive ? 'bg-neutral-100 ring-2 ring-primary-300' : ''}`}>
                  <div className={`h-4 rounded ${colorMap[item.level]}`} style={{ width: item.width, minWidth: '40px' }} />
                  <span className={`text-sm font-medium ${isActive ? 'text-primary-700' : 'text-neutral-700'}`}>
                    {item.range}
                  </span>
                  <span className={`text-sm ${isActive ? 'font-semibold text-primary-700' : 'text-neutral-500'}`}>
                    {uvRiskLevels[item.level].label[locale]}
                  </span>
                  {isActive && (
                    <span className="ml-auto text-xs font-medium text-primary-600">
                      ← {locale === 'tr' ? 'Seçili' : 'Selected'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Recommendations */}
      {result && result.recommendations.length > 0 && (
        <Card>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-neutral-900">
            <Shield className="h-5 w-5 text-primary-500" />
            {locale === 'tr' ? 'Kişisel Öneriler' : 'Personal Recommendations'}
          </h3>
          <ul className="space-y-3">
            {result.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-bold text-primary-700">
                  {index + 1}
                </span>
                <span className="text-sm text-neutral-700">{rec[locale]}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Fitzpatrick Scale Guide */}
      {result && (
        <Card>
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {locale === 'tr' ? 'Fitzpatrick Cilt Tipi Rehberi' : 'Fitzpatrick Skin Type Guide'}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(skinTypes).map((st) => {
              const isSelected = parseInt(skinType) === st.type;
              return (
                <div
                  key={st.type}
                  className={`flex items-start gap-3 rounded-lg border p-3 ${isSelected ? 'border-primary-300 bg-primary-50' : 'border-neutral-200'}`}
                >
                  <div
                    className="mt-0.5 h-8 w-8 shrink-0 rounded-full border-2 border-neutral-300"
                    style={{ backgroundColor: st.color }}
                  />
                  <div>
                    <p className={`text-sm font-medium ${isSelected ? 'text-primary-700' : 'text-neutral-900'}`}>
                      {st.label[locale]}
                    </p>
                    <p className="text-xs text-neutral-500">{st.description[locale]}</p>
                    <p className="mt-1 text-xs text-neutral-400">
                      {locale === 'tr'
                        ? `Baz yanma süresi: ~${st.baseTimeToBurn} dk`
                        : `Base burn time: ~${st.baseTimeToBurn} min`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* How SPF Works */}
      {result && (
        <Card>
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            {locale === 'tr' ? 'SPF Nasıl Çalışır?' : 'How Does SPF Work?'}
          </h3>
          <div className="space-y-4 text-sm text-neutral-700">
            <p>
              {locale === 'tr'
                ? `SPF (Güneş Koruma Faktörü), güneş kreminin UVB ışınlarına karşı ne kadar koruma sağladığını gösteren bir ölçüdür. Örneğin, SPF 30 teorik olarak kremsiz yanma sürenizi 30 kat uzatır. Ancak gerçek hayatta terleme, düzensiz sürme ve zaman geçtikçe azalan etki nedeniyle genellikle %60 civarında etkinlik gözlemlenir.`
                : `SPF (Sun Protection Factor) is a measure of how much protection a sunscreen provides against UVB rays. For example, SPF 30 theoretically extends your burn time by 30 times. However, in real-world conditions, due to sweating, uneven application, and degradation over time, effectiveness is typically around 60%.`}
            </p>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="font-mono text-xs">
                {locale === 'tr'
                  ? 'Güvenli Süre = Baz Yanma Süresi × UV Faktörü × SPF × 0.6'
                  : 'Safe Time = Base Burn Time × UV Factor × SPF × 0.6'}
              </p>
            </div>
            <p>
              {locale === 'tr'
                ? 'SPF 30 UVB ışınlarının %97\'sini, SPF 50 ise %98\'ini engeller. SPF 100 bile %99\'unu engelleyebilir. Hiçbir güneş kremi %100 koruma sağlamaz.'
                : 'SPF 30 blocks 97% of UVB rays, SPF 50 blocks 98%, and even SPF 100 blocks about 99%. No sunscreen provides 100% protection.'}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SpfSunscreenCalculator;
