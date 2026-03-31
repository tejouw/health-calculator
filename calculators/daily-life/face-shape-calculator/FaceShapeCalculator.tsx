'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Input, RadioGroup, Card, Badge } from '@/components/ui';
import { calculateFaceShape, faceShapeData } from './faceShapeLogic';
import { FaceShapeResult, FaceShape } from './faceShapeTypes';
import { Smile, Scissors, Glasses, Sparkles, Info, Ruler } from 'lucide-react';

interface FaceShapeCalculatorProps {
  locale: 'en' | 'tr';
}

const FaceShapeCalculator: React.FC<FaceShapeCalculatorProps> = ({ locale }) => {
  const tCommon = useTranslations('common');
  const tUnits = useTranslations('units');

  const [unit, setUnit] = useState<'cm' | 'inch'>('cm');
  const [foreheadWidth, setForeheadWidth] = useState<string>('');
  const [cheekboneWidth, setCheekboneWidth] = useState<string>('');
  const [jawlineWidth, setJawlineWidth] = useState<string>('');
  const [faceLength, setFaceLength] = useState<string>('');
  const [result, setResult] = useState<FaceShapeResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = () => {
    setError('');

    const fw = parseFloat(foreheadWidth);
    const cw = parseFloat(cheekboneWidth);
    const jw = parseFloat(jawlineWidth);
    const fl = parseFloat(faceLength);

    if (!fw || !cw || !jw || !fl || fw <= 0 || cw <= 0 || jw <= 0 || fl <= 0) {
      setError(locale === 'tr' ? 'Lütfen tüm ölçümleri geçerli şekilde girin' : 'Please enter all measurements correctly');
      return;
    }

    const maxVal = unit === 'cm' ? 40 : 16;
    const minVal = unit === 'cm' ? 5 : 2;

    if ([fw, cw, jw, fl].some(v => v < minVal || v > maxVal)) {
      setError(locale === 'tr'
        ? `Ölçümler ${minVal}-${maxVal} ${unit} arasında olmalıdır`
        : `Measurements should be between ${minVal}-${maxVal} ${unit}`);
      return;
    }

    const faceShapeResult = calculateFaceShape({
      foreheadWidth: fw,
      cheekboneWidth: cw,
      jawlineWidth: jw,
      faceLength: fl,
      unit,
    });

    setResult(faceShapeResult);
  };

  const handleReset = () => {
    setForeheadWidth('');
    setCheekboneWidth('');
    setJawlineWidth('');
    setFaceLength('');
    setResult(null);
    setError('');
  };

  const getTopShapes = (scores: Record<FaceShape, number>) => {
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)
      .filter(([, score]) => score > 0);
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
            <Smile className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {locale === 'tr' ? 'Yüz Şekli Hesaplayıcı' : 'Face Shape Calculator'}
            </h2>
            <p className="text-sm text-neutral-600">
              {locale === 'tr'
                ? 'Yüz ölçümlerinizi girerek yüz şeklinizi öğrenin'
                : 'Enter your face measurements to discover your face shape'}
            </p>
          </div>
        </div>

        {/* Measurement Guide */}
        <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
          <div className="flex items-start gap-2">
            <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <div className="text-xs text-blue-700">
              <p className="mb-1 font-semibold">
                {locale === 'tr' ? 'Nasıl Ölçülür?' : 'How to Measure?'}
              </p>
              <ul className="list-inside list-disc space-y-0.5">
                <li>{locale === 'tr' ? 'Bir ayna karşısında, yüzünüze esnek bir mezura ile ölçüm yapın' : 'Stand in front of a mirror, use a flexible tape measure on your face'}</li>
                <li>{locale === 'tr' ? 'Alın genişliği: Kaşlarınızın üstünde en geniş noktadan ölçün' : 'Forehead: Measure at the widest point above your eyebrows'}</li>
                <li>{locale === 'tr' ? 'Elmacık kemikleri: Her iki elmacık kemiğinin en çıkıntılı noktası arası' : 'Cheekbones: Between the most prominent points of each cheekbone'}</li>
                <li>{locale === 'tr' ? 'Çene hattı: Çenenin en geniş noktasından ölçün' : 'Jawline: Measure at the widest point of your jaw'}</li>
                <li>{locale === 'tr' ? 'Yüz uzunluğu: Alnın tepesinden çene ucuna kadar' : 'Face length: From the top of the forehead to the tip of the chin'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Unit Selection */}
        <div className="mb-6">
          <RadioGroup
            label={locale === 'tr' ? 'Birim' : 'Unit'}
            name="unit"
            value={unit}
            onChange={(value) => setUnit(value as 'cm' | 'inch')}
            options={[
              { value: 'cm', label: tUnits('cm') },
              { value: 'inch', label: tUnits('inch') },
            ]}
            orientation="horizontal"
          />
        </div>

        {/* Input Fields */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label={locale === 'tr' ? 'Alın Genişliği' : 'Forehead Width'}
            type="number"
            value={foreheadWidth}
            onChange={(e) => setForeheadWidth(e.target.value)}
            placeholder={unit === 'cm' ? '14' : '5.5'}
            rightIcon={<span className="text-sm">{unit}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Elmacık Kemikleri Genişliği' : 'Cheekbone Width'}
            type="number"
            value={cheekboneWidth}
            onChange={(e) => setCheekboneWidth(e.target.value)}
            placeholder={unit === 'cm' ? '15' : '5.9'}
            rightIcon={<span className="text-sm">{unit}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Çene Hattı Genişliği' : 'Jawline Width'}
            type="number"
            value={jawlineWidth}
            onChange={(e) => setJawlineWidth(e.target.value)}
            placeholder={unit === 'cm' ? '12' : '4.7'}
            rightIcon={<span className="text-sm">{unit}</span>}
            required
          />
          <Input
            label={locale === 'tr' ? 'Yüz Uzunluğu' : 'Face Length'}
            type="number"
            value={faceLength}
            onChange={(e) => setFaceLength(e.target.value)}
            placeholder={unit === 'cm' ? '20' : '7.9'}
            rightIcon={<span className="text-sm">{unit}</span>}
            required
          />
        </div>

        {error && <p className="mt-4 text-sm text-danger-main">{error}</p>}

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <Button onClick={handleCalculate} className="flex-1" size="lg">
            {tCommon('calculate')}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg">
            {tCommon('reset')}
          </Button>
        </div>
      </Card>

      {/* Result */}
      {result && (
        <>
          {/* Main Result */}
          <Card className="animate-slide-up border-2 border-primary-100 bg-gradient-to-br from-pink-50 to-rose-50">
            <div className="text-center">
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-600">
                {locale === 'tr' ? 'Yüz Şekliniz' : 'Your Face Shape'}
              </h3>
              <div className="mb-2 text-5xl">{result.shapeInfo.emoji}</div>
              <div className="mb-3 text-3xl font-bold" style={{ color: result.shapeInfo.color }}>
                {result.shapeInfo.label[locale]}
              </div>
              <Badge variant="primary" size="lg">
                {locale === 'tr' ? `%${result.confidence} eşleşme` : `${result.confidence}% match`}
              </Badge>
              <p className="mt-4 text-sm text-neutral-600">
                {result.shapeInfo.description[locale]}
              </p>
            </div>
          </Card>

          {/* Score Distribution */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Şekil Dağılımı' : 'Shape Distribution'}
            </h3>
            <div className="space-y-3">
              {getTopShapes(result.scores).map(([shape, score]) => {
                const info = faceShapeData[shape as FaceShape];
                const maxScore = Math.max(...Object.values(result.scores));
                const width = maxScore > 0 ? (score / maxScore) * 100 : 0;
                return (
                  <div key={shape} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-neutral-700">
                        {info.emoji} {info.label[locale]}
                      </span>
                      <span className="text-neutral-500">{score} {locale === 'tr' ? 'puan' : 'pts'}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${width}%`, backgroundColor: info.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Proportions */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <Info className="mr-2 inline h-5 w-5" />
              {locale === 'tr' ? 'Yüz Oranlarınız' : 'Your Face Proportions'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-xs text-neutral-500">{locale === 'tr' ? 'Uzunluk / Genişlik' : 'Length / Width'}</p>
                <p className="text-lg font-bold text-neutral-900">{result.proportions.lengthToWidth.toFixed(2)}</p>
                <p className="text-xs text-neutral-400">
                  {result.proportions.lengthToWidth > 1.3
                    ? (locale === 'tr' ? 'Uzun yüz' : 'Long face')
                    : result.proportions.lengthToWidth < 1.1
                    ? (locale === 'tr' ? 'Geniş yüz' : 'Wide face')
                    : (locale === 'tr' ? 'Dengeli' : 'Balanced')}
                </p>
              </div>
              <div className="rounded-lg bg-neutral-50 p-3">
                <p className="text-xs text-neutral-500">{locale === 'tr' ? 'Alın / Çene' : 'Forehead / Jaw'}</p>
                <p className="text-lg font-bold text-neutral-900">{result.proportions.foreheadToJaw.toFixed(2)}</p>
                <p className="text-xs text-neutral-400">
                  {result.proportions.foreheadToJaw > 1.15
                    ? (locale === 'tr' ? 'Alın daha geniş' : 'Forehead wider')
                    : result.proportions.foreheadToJaw < 0.9
                    ? (locale === 'tr' ? 'Çene daha geniş' : 'Jaw wider')
                    : (locale === 'tr' ? 'Dengeli' : 'Balanced')}
                </p>
              </div>
            </div>
          </Card>

          {/* Hairstyle Tips */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <Scissors className="mr-2 inline h-5 w-5" />
              {locale === 'tr' ? 'Saç Modeli Önerileri' : 'Hairstyle Recommendations'}
            </h3>
            <ul className="space-y-2">
              {result.shapeInfo.hairstyleTips[locale].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: result.shapeInfo.color }} />
                  {tip}
                </li>
              ))}
            </ul>
          </Card>

          {/* Glasses Tips */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <Glasses className="mr-2 inline h-5 w-5" />
              {locale === 'tr' ? 'Gözlük Önerileri' : 'Glasses Recommendations'}
            </h3>
            <p className="text-sm text-neutral-700">{result.shapeInfo.glassesTips[locale]}</p>
          </Card>

          {/* Celebrities */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              <Sparkles className="mr-2 inline h-5 w-5" />
              {locale === 'tr' ? 'Aynı Yüz Şekline Sahip Ünlüler' : 'Celebrities with the Same Face Shape'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.shapeInfo.celebrities[locale].map((celeb, i) => (
                <Badge key={i} variant="default" size="lg">
                  {celeb}
                </Badge>
              ))}
            </div>
          </Card>

          {/* All Face Shapes Guide */}
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {locale === 'tr' ? 'Tüm Yüz Şekilleri' : 'All Face Shapes'}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(faceShapeData).map((shape) => (
                <div
                  key={shape.shape}
                  className={`rounded-lg border p-3 transition-all ${
                    shape.shape === result.shape
                      ? 'border-2 bg-pink-50'
                      : 'border-neutral-100 bg-neutral-50'
                  }`}
                  style={shape.shape === result.shape ? { borderColor: shape.color } : {}}
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-lg">{shape.emoji}</span>
                    <span className="text-sm font-semibold" style={{ color: shape.color }}>
                      {shape.label[locale]}
                    </span>
                    {shape.shape === result.shape && (
                      <Badge variant="success" size="sm">{locale === 'tr' ? 'Sizin' : 'Yours'}</Badge>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 line-clamp-2">
                    {shape.description[locale].substring(0, 100)}...
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default FaceShapeCalculator;
